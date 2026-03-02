import { useState, useEffect, useRef, useCallback } from 'react';
import * as Comlink from 'comlink';
import type { PokerEngine } from '../engine/worker';
import type { GameState, SimulationResult } from '../engine/core';
import { calculateBayesianRange } from '../engine/valuation/formulas';

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
  const engineRef = useRef<Comlink.Remote<PokerEngine> | null>(null);
  
  // Use strings for stable dependency tracking of arrays/objects
  const holeCardsKey = JSON.stringify(holeCards);
  const boardCardsKey = JSON.stringify(boardCards);
  const gameStateKey = JSON.stringify({
    pot: gameState.potSize,
    facing: gameState.facingBetSize,
    ip: gameState.isIP,
    opponents: gameState.opponents.map(o => ({ id: o.id, r: o.rangePreset }))
  });

  useEffect(() => {
    const worker = new Worker(new URL('../engine/worker.ts', import.meta.url), {
      type: 'module'
    });
    engineRef.current = Comlink.wrap<PokerEngine>(worker);

    return () => worker.terminate();
  }, []);

  const runSimulation = useCallback(async () => {
    if (!engineRef.current || holeCards.length < 2) {
        setResult(null);
        return;
    }

    setIsCalculating(true);
    try {
      // Apply Bayesian range weighting to all opponents
      const bayesianOpponents = (gameState.opponents || []).map(opp => ({
        ...opp,
        rangePercentage: calculateBayesianRange(
          opp.rangePreset === 'Tight' ? 0.15 : opp.rangePreset === 'Loose' ? 0.40 : 1.0,
          gameState.potSize,
          gameState.facingBetSize
        )
      }));

      const simResult = await engineRef.current.calculate({
        holeCards,
        boardCards,
        gameState: {
          ...gameState,
          opponents: bayesianOpponents
        },
        // Reduced to 10,000 for TS performance. WASM will handle 100k later.
        options: { iterations: 10000, mode: 'auto' }
      });
      setResult(simResult as unknown as SimulationResult);
    } catch (e) {
      console.error('Equity Engine Error:', e);
    } finally {
      setIsCalculating(false);
    }
    // We use keys for dependencies to ensure stability
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [holeCardsKey, boardCardsKey, gameStateKey]);

  // Debounce for UI responsiveness
  useEffect(() => {
    const handler = setTimeout(() => {
      runSimulation();
    }, 150);

    return () => clearTimeout(handler);
  }, [runSimulation]);

  return { result, isCalculating };
};
