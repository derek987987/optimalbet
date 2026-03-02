import { useState, useEffect, useRef, useCallback } from 'react';
import * as Comlink from 'comlink';
import type { PokerEngine } from '../engine/worker';
import type { GameState, SimulationResult } from '../engine/core';

interface UseEquityEngineProps {
  holeCards: number[];
  boardCards: number[];
  gameState: GameState;
}

export const useEquityEngine = ({
  holeCards,
  boardCards,
  gameState
}: UseEquityEngineProps) => {
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const engineRef = useRef<Comlink.Remote<PokerEngine> | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('../engine/worker.ts', import.meta.url), {
      type: 'module'
    });
    engineRef.current = Comlink.wrap<PokerEngine>(worker);
    workerRef.current = worker;

    return () => worker.terminate();
  }, []);

  const runSimulation = useCallback(async () => {
    if (!engineRef.current || holeCards.length < 2) {
        setResult(null);
        return;
    }

    setIsCalculating(true);
    try {
      const simResult = await engineRef.current.calculate({
        holeCards,
        boardCards,
        gameState,
        options: { iterations: 10000, mode: 'auto' }
      });
      setResult(simResult as unknown as SimulationResult);
    } catch (e) {
      console.error('Equity Engine Error:', e);
    } finally {
      setIsCalculating(false);
    }
  }, [holeCards, boardCards, gameState]);

  // Debounce for UI responsiveness
  useEffect(() => {
    const handler = setTimeout(() => {
      runSimulation();
    }, 150);

    return () => clearTimeout(handler);
  }, [runSimulation]);

  return { result, isCalculating };
};
