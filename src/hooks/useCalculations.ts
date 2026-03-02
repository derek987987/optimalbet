import { useState, useCallback, useEffect, useRef } from 'react';
import * as Comlink from 'comlink';
import type { PokerEngine, CalculationRequest, CalculationResult } from '../engine/worker';

export const useCalculations = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const engineRef = useRef<Comlink.Remote<PokerEngine> | null>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Initialize Web Worker
    const worker = new Worker(new URL('../engine/worker.ts', import.meta.url), {
      type: 'module'
    });
    const engine = Comlink.wrap<PokerEngine>(worker);
    
    engineRef.current = engine;
    workerRef.current = worker;

    return () => {
      worker.terminate();
    };
  }, []);

  const calculate = useCallback(async (request: CalculationRequest) => {
    if (!engineRef.current) return;
    
    setIsCalculating(true);
    try {
      const res = await engineRef.current.calculate(request);
      setResult(res);
    } catch (e) {
      console.error('Calculation error', e);
    } finally {
      setIsCalculating(false);
    }
  }, []);

  return {
    result,
    isCalculating,
    calculate
  };
};
