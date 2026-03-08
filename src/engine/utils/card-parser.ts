import { RANK_NAMES, SUIT_NAMES } from '../core/cards';

/**
 * Maps keyboard input to normalized rank/suit strings.
 */
export const RANK_MAP: Record<string, string> = {
  '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
  '1': 'T', 't': 'T', 'T': 'T',
  'j': 'J', 'J': 'J',
  'q': 'Q', 'Q': 'Q',
  'k': 'K', 'K': 'K',
  'a': 'A', 'A': 'A'
};

export const SUIT_MAP: Record<string, string> = {
  's': 's', 'S': 's',
  'h': 'h', 'H': 'h',
  'c': 'c', 'C': 'c',
  'd': 'd', 'D': 'd'
};

/**
 * Parses a 1-2 character sequence into rank and suit.
 * Supports: 'A', 'As', '10', '10s', 'Ts'
 */
export function parseCardSequence(input: string): { rank: string | null; suit: string | null } {
  if (!input) return { rank: null, suit: null };

  let rank: string | null = null;
  let suit: string | null = null;

  // Handle '10' as a special case for 'T'
  if (input.startsWith('10')) {
    rank = 'T';
    if (input.length > 2) {
      suit = SUIT_MAP[input[2]] || null;
    }
  } else {
    rank = RANK_MAP[input[0]] || null;
    if (input.length > 1) {
      suit = SUIT_MAP[input[1]] || null;
    }
  }

  return { rank, suit };
}

/**
 * Returns available suits for a given rank, excluding those already in usedCards.
 */
export function getAvailableSuitsForRank(rank: string, usedCards: string[]): string[] {
  if (!RANK_NAMES.includes(rank)) return [];
  
  return SUIT_NAMES.filter(suit => !usedCards.includes(`${rank}${suit}`));
}
