export const Rank = {
  Two: 0, Three: 1, Four: 2, Five: 3, Six: 4, Seven: 5, Eight: 6, Nine: 7, Ten: 8, Jack: 9, Queen: 10, King: 11, Ace: 12
} as const;

export type Rank = typeof Rank[keyof typeof Rank];

export const Suit = {
  Clubs: 0, Diamonds: 1, Hearts: 2, Spades: 3
} as const;

export type Suit = typeof Suit[keyof typeof Suit];

export type CardId = number; // 0-51

export interface Card {
  rank: Rank;
  suit: Suit;
}

export function createCard(rank: number, suit: number): CardId {
  return rank * 4 + suit;
}

export function getRank(cardId: CardId): number {
  return Math.floor(cardId / 4);
}

export function getSuit(cardId: CardId): number {
  return cardId % 4;
}

export const RANK_NAMES = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
export const SUIT_NAMES = ['c', 'd', 'h', 's'];

export function cardToString(cardId: CardId): string {
  return RANK_NAMES[getRank(cardId)] + SUIT_NAMES[getSuit(cardId)];
}

export function stringToCard(s: string): CardId {
  const rank = RANK_NAMES.indexOf(s[0]);
  const suit = SUIT_NAMES.indexOf(s[1]);
  if (rank === -1 || suit === -1) throw new Error(`Invalid card string: ${s}`);
  return createCard(rank, suit);
}
