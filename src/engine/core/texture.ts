/**
 * Board Texture Classification Engine
 */

export type TextureType = 'DRY' | 'WET' | 'MONOTONE' | 'PAIRED' | 'COORDINATED';

export const classifyTexture = (board: number[]): TextureType => {
  if (board.length < 3) return 'DRY';

  const suits = new Array(4).fill(0);
  const ranks = new Array(13).fill(0);
  
  board.forEach(c => {
    suits[c % 4]++;
    ranks[Math.floor(c / 4)]++;
  });

  const maxSuit = Math.max(...suits);
  const maxRank = Math.max(...ranks);

  if (maxSuit >= 3) return 'MONOTONE';
  if (maxRank >= 2) return 'PAIRED';

  const rankBits = board.reduce((acc, c) => acc | (1 << Math.floor(c / 4)), 0);

  // Connectivity check
  let maxConn = 0;
  let currentConn = 0;
  for (let i = 0; i < 13; i++) {
    if ((rankBits >> i) & 1) {
      currentConn++;
      maxConn = Math.max(maxConn, currentConn);
    } else {
      currentConn = 0;
    }
  }

  if (maxConn >= 3) return 'COORDINATED';
  if (maxConn === 2) return 'WET';

  return 'DRY';
};
