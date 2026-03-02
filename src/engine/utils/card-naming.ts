const RANK_NAMES = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const SUIT_SYMBOLS = ['♣', '♦', '♥', '♠'];

export const getCardName = (cardId: number): string => {
  const rank = Math.floor(cardId / 4);
  const suit = cardId % 4;
  return RANK_NAMES[rank] + SUIT_SYMBOLS[suit];
};

export const getSuitSymbol = (suit: number): string => {
  return SUIT_SYMBOLS[suit];
};

export const getSuitColorClass = (suit: number): string => {
  return (suit === 1 || suit === 2) ? 'text-red-500' : 'text-slate-900 dark:text-slate-100';
};
