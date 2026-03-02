use wasm_bindgen::prelude::*;
use js_sys::Uint8Array;

#[wasm_bindgen]
pub struct SimulationResult {
    pub raw_equity: f64,
    pub iterations_processed: u32,
    pub hand_category: String,
    pub draw_type: String,
    pub texture: String,
}

fn get_rank(card: u8) -> u8 { card % 13 }
fn get_suit(card: u8) -> u8 { card / 13 }

fn get_hand_score(cards: &[u8]) -> u32 {
    let mut ranks = [0u8; 5];
    let mut rank_bits = 0u16;
    let first_suit = get_suit(cards[0]);
    let mut is_flush = true;

    for i in 0..5 {
        let r = get_rank(cards[i]);
        let s = get_suit(cards[i]);
        ranks[i] = r;
        rank_bits |= 1 << r;
        if s != first_suit { is_flush = false; }
    }

    let mut counts = [0u8; 13];
    for &r in &ranks { counts[r as usize] += 1; }

    let mut freq_pairs: Vec<(u8, u8)> = (0..13).map(|r| (counts[r], r as u8)).collect();
    freq_pairs.sort_by(|a, b| b.0.cmp(&a.0).then(b.1.cmp(&a.1)));

    let max_freq = freq_pairs[0].0;
    let second_freq = freq_pairs[1].0;

    let mut is_straight = false;
    let mut top_straight_rank = 0i8;

    if rank_bits == 0x100F {
        is_straight = true;
        top_straight_rank = 3;
    } else {
        for r in (4..13).rev() {
            if (rank_bits >> (r - 4)) & 0x1F == 0x1F {
                is_straight = true;
                top_straight_rank = r as i8;
                break;
            }
        }
    }

    let hand_type = if is_straight && is_flush { 9 }
    else if max_freq == 4 { 8 }
    else if max_freq == 3 && second_freq == 2 { 7 }
    else if is_flush { 6 }
    else if is_straight { 5 }
    else if max_freq == 3 { 4 }
    else if max_freq == 2 && second_freq == 2 { 3 }
    else if max_freq == 2 { 2 }
    else { 1 };

    let mut score = (hand_type as u32) << 20;
    if hand_type == 5 || hand_type == 9 {
        score |= (top_straight_rank as u32) << 16;
    } else {
        for i in 0..5 {
            score |= (freq_pairs[i].1 as u32) << (16 - i * 4);
        }
    }
    score
}

fn evaluate_7_cards(cards: &[u8]) -> u32 {
    let mut best_score = 0;
    let mut combo = [0u8; 5];
    for i in 0..3 {
        for j in i+1..4 {
            for k in j+1..5 {
                for l in k+1..6 {
                    for m in l+1..7 {
                        combo[0] = cards[i]; combo[1] = cards[j]; combo[2] = cards[k]; combo[3] = cards[l]; combo[4] = cards[m];
                        let s = get_hand_score(&combo);
                        if s > best_score { best_score = s; }
                    }
                }
            }
        }
    }
    best_score
}

fn classify_texture(board: &[u8]) -> String {
    if board.len() < 3 { return "UNKNOWN".into(); }
    let mut suits = [0u8; 4];
    let mut ranks = [0u8; 13];
    let mut rank_bits = 0u16;
    for &c in board {
        suits[get_suit(c) as usize] += 1;
        ranks[get_rank(c) as usize] += 1;
        rank_bits |= 1 << get_rank(c);
    }

    let max_suit = *suits.iter().max().unwrap();
    let max_rank = *ranks.iter().max().unwrap();

    if max_suit >= 3 { return "MONOTONE".into(); }
    if max_rank >= 2 { return "PAIRED".into(); }
    
    // Check for connectivity (simplified)
    let mut max_conn = 0;
    let mut current_conn = 0;
    for i in 0..13 {
        if (rank_bits >> i) & 1 == 1 {
            current_conn += 1;
            if current_conn > max_conn { max_conn = current_conn; }
        } else {
            current_conn = 0;
        }
    }
    if max_conn >= 3 { return "COORDINATED".into(); }
    
    "DRY".into()
}

#[wasm_bindgen]
pub fn simulate_monte_carlo(
    hero_hole: Vec<u8>,
    board: Vec<u8>,
    opponent_count: u8,
    iterations: u32,
    _opponent_ranges: Option<Vec<Uint8Array>>
) -> SimulationResult {
    let mut wins = 0.0;
    let dead_cards = {
        let mut d = [false; 52];
        for &c in &hero_hole { d[c as usize] = true; }
        for &c in &board { d[c as usize] = true; }
        d
    };

    let deck: Vec<u8> = (0..52).filter(|&i| !dead_cards[i]).map(|i| i as u8).collect();

    // Random generator (Lcg)
    let mut rng_state = 12345u32; // In real app, seed with getrandom

    for _ in 0..iterations {
        let mut current_deck = deck.clone();
        let mut current_board = board.clone();
        
        while current_board.len() < 5 {
            rng_state = rng_state.wrapping_mul(1664525).wrapping_add(1013904223);
            let idx = (rng_state as usize) % current_deck.len();
            current_board.push(current_deck.swap_remove(idx));
        }

        let mut best_opp_score = 0;
        for _ in 0..opponent_count {
            rng_state = rng_state.wrapping_mul(1664525).wrapping_add(1013904223);
            let c1 = current_deck.swap_remove((rng_state as usize) % current_deck.len());
            rng_state = rng_state.wrapping_mul(1664525).wrapping_add(1013904223);
            let c2 = current_deck.swap_remove((rng_state as usize) % current_deck.len());

            let mut hand = [0u8; 7];
            hand[0] = c1; hand[1] = c2;
            for k in 0..5 { hand[k+2] = current_board[k]; }
            let s = evaluate_7_cards(&hand);
            if s > best_opp_score { best_opp_score = s; }
        }

        let mut hero_hand = [0u8; 7];
        hero_hand[0] = hero_hole[0]; hero_hand[1] = hero_hole[1];
        for k in 0..5 { hero_hand[k+2] = current_board[k]; }
        let hero_score = evaluate_7_cards(&hero_hand);

        if hero_score > best_opp_score { wins += 1.0; }
        else if hero_score == best_opp_score { wins += 0.5; }
    }

    SimulationResult {
        raw_equity: wins / (iterations as f64),
        iterations_processed: iterations,
        hand_category: "TODO".into(),
        draw_type: "TODO".into(),
        texture: classify_texture(&board),
    }
}
