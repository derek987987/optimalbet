import React from 'react';
import type { SimulationResult } from '../engine/core';

interface ResultsDisplayProps {
  result: SimulationResult | null;
  isCalculating: boolean;
  unit: 'USD' | 'BB' | 'CHIPS';
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, isCalculating, unit }) => {
  if (isCalculating && !result) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-slate-500">
        <p className="text-lg font-medium">Select your hole cards to begin calculation</p>
      </div>
    );
  }

  const { ev, recommendation, rawEquity, adjustedEquity, potOdds } = result;
  
  const getBgColor = (rec: string) => {
    if (rec === 'RAISE' || rec === 'CALL') return 'bg-emerald-950/40 border-emerald-500/30';
    if (rec === 'CHECK') return 'bg-amber-950/40 border-amber-500/30';
    return 'bg-rose-950/40 border-rose-500/30';
  };

  const getTextColor = (rec: string) => {
    if (rec === 'RAISE' || rec === 'CALL') return 'text-emerald-400';
    if (rec === 'CHECK') return 'text-amber-400';
    return 'text-rose-400';
  };

  return (
    <div className={`rounded-2xl border p-6 h-full transition-all duration-300 ${getBgColor(recommendation)}`}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Recommendation</span>
          <h2 className={`text-5xl font-black mt-1 ${getTextColor(recommendation)}`}>{recommendation}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="p-3 bg-black/30 rounded-xl border border-white/5">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Equity</span>
            <span className="text-2xl font-black text-white">{(rawEquity * 100).toFixed(1)}%</span>
          </div>
          <div className="p-3 bg-black/30 rounded-xl border border-white/5">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">EV ({unit})</span>
            <span className={`text-2xl font-black ${ev >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {ev >= 0 ? '+' : ''}{ev.toFixed(2)}
            </span>
          </div>
          <div className="p-3 bg-black/30 rounded-xl border border-white/5">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Pot Odds</span>
            <span className="text-2xl font-black text-white">{(potOdds * 100).toFixed(1)}%</span>
          </div>
          <div className="p-3 bg-black/30 rounded-xl border border-white/5">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Adj. Equity</span>
            <span className="text-2xl font-black text-white">{(adjustedEquity * 100).toFixed(1)}%</span>
          </div>
        </div>
        
        {isCalculating && (
           <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest animate-pulse">
             <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
             Recalculating...
           </div>
        )}
      </div>
    </div>
  );
};
