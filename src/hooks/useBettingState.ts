import { useState, useMemo, useCallback } from 'react';
import { loadState } from '../services/persistence';
import type { RangePreset } from '../engine/core/ranges';

export interface OpponentConfig {
  id: string;
  rangePreset: RangePreset;
  rangePercentage: number;
}

export type BetInputMode = 'manual' | 'ratio';

export const useBettingState = () => {
  const [potSize, setPotSizeInternal] = useState(loadState<number>('pot_size') || 0);
  const [facingBet, setFacingBetInternal] = useState(loadState<number>('facing_bet') || 0);
  const [stackSize, setStackSize] = useState(loadState<number>('stack_size') || 1000);
  const [isIP, setIsIP] = useState(loadState<boolean>('is_ip') ?? true);
  const [unit, setUnit] = useState<'USD' | 'BB' | 'CHIPS'>(loadState<'USD' | 'BB' | 'CHIPS'>('unit') || 'USD');
  const [opponents, setOpponents] = useState<OpponentConfig[]>(loadState<OpponentConfig[]>('opponents') || [
    { id: '1', rangePreset: 'Random', rangePercentage: 1.0 }
  ]);

  // New state for dynamic ratio logic
  const [inputMode, setInputMode] = useState<BetInputMode>('manual');
  const [selectedRatio, setSelectedRatio] = useState<number | null>(null);

  const setPotSize = useCallback((newPot: number) => {
    setPotSizeInternal(newPot);
    if (inputMode === 'ratio' && selectedRatio !== null) {
      setFacingBetInternal(newPot * selectedRatio);
    }
  }, [inputMode, selectedRatio]);

  const setFacingBet = useCallback((newBet: number) => {
    setFacingBetInternal(newBet);
    setInputMode('manual');
    setSelectedRatio(null);
  }, []);

  const setRatio = useCallback((ratio: number) => {
    setSelectedRatio(ratio);
    setInputMode('ratio');
    setFacingBetInternal(potSize * ratio);
  }, [potSize]);

  const MAX_BET = 999999;

  const incrementPot = useCallback((amount: number) => {
    setPotSizeInternal(prev => Math.min(MAX_BET, Math.max(0, prev + amount)));
  }, []);

  const incrementFacing = useCallback((amount: number) => {
    setFacingBetInternal(prev => Math.min(MAX_BET, Math.max(0, prev + amount)));
    setInputMode('manual');
    setSelectedRatio(null);
  }, []);

  const resetPot = useCallback(() => setPotSizeInternal(0), []);
  const resetFacing = useCallback(() => setFacingBetInternal(0), []);

  return useMemo(() => ({
    potSize, setPotSize,
    facingBet, setFacingBet,
    stackSize, setStackSize,
    isIP, setIsIP,
    unit, setUnit,
    opponents, setOpponents,
    inputMode,
    selectedRatio,
    setRatio,
    incrementPot,
    incrementFacing,
    resetPot,
    resetFacing
  }), [potSize, setPotSize, facingBet, setFacingBet, stackSize, isIP, unit, opponents, inputMode, selectedRatio, setRatio, incrementPot, incrementFacing, resetPot, resetFacing]);
};
