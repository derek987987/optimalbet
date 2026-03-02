import { useState } from 'react';
import { loadState } from '../services/persistence';
import type { RangePreset } from '../engine/core/ranges';

export interface OpponentConfig {
  id: string;
  rangePreset: RangePreset;
  rangePercentage: number;
}

export const useBettingState = () => {
  const [potSize, setPotSize] = useState(loadState<number>('pot_size') || 0);
  const [facingBet, setFacingBet] = useState(loadState<number>('facing_bet') || 0);
  const [stackSize, setStackSize] = useState(loadState<number>('stack_size') || 1000);
  const [isIP, setIsIP] = useState(loadState<boolean>('is_ip') ?? true);
  const [unit, setUnit] = useState<'USD' | 'BB' | 'CHIPS'>(loadState<'USD' | 'BB' | 'CHIPS'>('unit') || 'USD');
  const [opponents, setOpponents] = useState<OpponentConfig[]>(loadState<OpponentConfig[]>('opponents') || [
    { id: '1', rangePreset: 'Random', rangePercentage: 1.0 }
  ]);

  return {
    potSize, setPotSize,
    facingBet, setFacingBet,
    stackSize, setStackSize,
    isIP, setIsIP,
    unit, setUnit,
    opponents, setOpponents
  };
};
