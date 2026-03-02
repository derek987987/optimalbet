import { CardFactory } from './card-factory';

export const RANGE_PRESETS = {
  Tight: 'Tight',
  Loose: 'Loose',
  Random: 'Random'
} as const;

export type RangePreset = keyof typeof RANGE_PRESETS;

/**
 * 1326 unique hole card combinations (52 * 51 / 2)
 */
export type RangeBitmask = Uint8Array; // length 1326

const ALL_COMBINATIONS: [number, number][] = [];
for (let i = 0; i < 52; i++) {
  for (let j = i + 1; j < 52; j++) {
    ALL_COMBINATIONS.push([i, j]);
  }
}

/**
 * Simplified hand power ranking (Sklansky-Chubukov-ish)
 */
const HAND_POWER_RANKINGS: number[] = new Array(1326).fill(0);

ALL_COMBINATIONS.forEach(([c1, c2], idx) => {
  const r1 = Math.floor(c1 / 4);
  const r2 = Math.floor(c2 / 4);
  const s1 = c1 % 4;
  const s2 = c2 % 4;
  
  const [high, low] = r1 > r2 ? [r1, r2] : [r2, r1];
  
  // Basic power heuristic: (rank1 + rank2) + (isPair ? 26 : 0) + (isSuited ? 2 : 0)
  let power = (high * 2) + low;
  if (r1 === r2) power += 52; // High value for pairs
  if (s1 === s2) power += 4; // Suited bonus
  
  HAND_POWER_RANKINGS[idx] = power;
});

const SORTED_INDICES = Array.from({ length: 1326 }, (_, i) => i)
  .sort((a, b) => HAND_POWER_RANKINGS[b] - HAND_POWER_RANKINGS[a]);

const BITMASK_INDEX_MAP = new Int32Array(52 * 52).fill(-1);
ALL_COMBINATIONS.forEach(([c1, c2], idx) => {
  BITMASK_INDEX_MAP[c1 * 52 + c2] = idx;
  BITMASK_INDEX_MAP[c2 * 52 + c1] = idx;
});

export function getRangeBitmask(preset: RangePreset | string, percentage: number = 1.0): RangeBitmask {
  const bitmask = new Uint8Array(1326);
  
  let targetPercentage = percentage;
  if (preset === 'Tight') targetPercentage = Math.min(percentage, 0.15);
  else if (preset === 'Loose') targetPercentage = Math.min(percentage, 0.40);
  else if (preset === 'Random') targetPercentage = 1.0;

  const count = Math.floor(1326 * targetPercentage);
  for (let i = 0; i < count; i++) {
    bitmask[SORTED_INDICES[i]] = 1;
  }
  
  return bitmask;
}

export function isHandInRange(c1: number, c2: number, bitmask: RangeBitmask): boolean {
  const idx = BITMASK_INDEX_MAP[c1 * 52 + c2];
  return idx !== -1 && bitmask[idx] === 1;
}

export { ALL_COMBINATIONS };
