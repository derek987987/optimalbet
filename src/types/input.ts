/**
 * Types and interfaces for Input Speed Optimization feature
 */

export type CardRank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K' | 'A';
export type CardSuit = 's' | 'h' | 'c' | 'd';

export interface CardInputSession {
  slotId: string;
  buffer: string;
  suggestions: string[];
  isFocused: boolean;
}

export interface CardSuggestion {
  rank: CardRank;
  suit?: CardSuit;
  isAvailable: boolean;
}

export type BettingTarget = 'pot' | 'facing';

export interface BettingAdjustment {
  amount: number;
  target: BettingTarget;
}
