import React, { useMemo } from 'react';
import { getRaiseSuggestions } from '../../engine/valuation/formulas';
import { TrendingUp, AlertTriangle } from 'lucide-react';

interface RaiseSuggestionsProps {
  potSize: number;
  facingBetSize: number;
  stackSize: number;
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  unit: string;
  onApplySizing: (amount: number) => void;
}

export const RaiseSuggestions: React.FC<RaiseSuggestionsProps> = ({
  potSize,
  facingBetSize,
  stackSize,
  recommendation,
  unit,
  onApplySizing
}) => {
  const suggestions = useMemo(() => 
    getRaiseSuggestions(potSize, facingBetSize, stackSize, recommendation),
    [potSize, facingBetSize, stackSize, recommendation]
  );

  if (suggestions.length === 0) return null;

  const formatCurrency = (amt: number) => {
    if (unit === 'USD') return `$${amt.toLocaleString()}`;
    return `${amt.toLocaleString()} ${unit}`;
  };

  return (
    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-2 mb-4 px-1">
        <TrendingUp size={14} className="text-blue-500" />
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Suggested Sizing</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {suggestions.map((s) => (
          <button
            key={s.label}
            onClick={() => onApplySizing(s.amount)}
            className={`
              group relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all active:scale-95
              ${s.isOverStack 
                ? 'border-amber-100 bg-amber-50/30 dark:border-amber-900/30 dark:bg-amber-900/10' 
                : 'border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-950 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
              }
            `}
          >
            <span className="text-[9px] font-black text-gray-400 uppercase mb-1 group-hover:text-blue-500 transition-colors">
              {s.label}
            </span>
            <span className={`text-sm font-black ${s.isOverStack ? 'text-amber-600 dark:text-amber-400' : 'text-gray-900 dark:text-gray-100'}`}>
              {formatCurrency(s.amount)}
            </span>
            
            {s.isOverStack && (
              <div className="absolute -top-2 -right-1 bg-amber-500 text-white rounded-full p-0.5 shadow-sm">
                <AlertTriangle size={8} />
              </div>
            )}
            
            {s.isOverStack && (
              <span className="text-[8px] font-bold text-amber-500 mt-1 uppercase tracking-tighter">
                Over Stack
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
