import { createCard as coreCreateCard, RANK_NAMES, SUIT_NAMES } from './cards';
import type { CardId, Rank, Suit } from './cards';

export const CardFactory = {
  create(rank: number, suit: number): CardId {
    return coreCreateCard(rank, suit);
  },

  fromString(s: string): CardId {
    const r = s[0].toUpperCase();
    const s_ = s[1].toLowerCase();
    
    const rankIndex = RANK_NAMES.indexOf(r);
    const suitIndex = SUIT_NAMES.indexOf(s_);
    
    if (rankIndex === -1 || suitIndex === -1) {
      throw new Error(`Invalid card string: ${s}`);
    }
    
    return coreCreateCard(rankIndex, suitIndex);
  },

  fromRankSuit(rank: number, suit: number): CardId {
    return coreCreateCard(rank, suit);
  },

  getSuit(cardId: CardId): number {
    return cardId % 4;
  },

  getRankBit(cardId: CardId): number {
    return 1 << Math.floor(cardId / 4);
  },

  getRankValue(cardId: CardId): number {
    return Math.floor(cardId / 4);
  }
};

export const { getSuit, getRankBit, getRankValue } = CardFactory;
export const createCard = CardFactory.create;
