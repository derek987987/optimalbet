import React from 'react';

interface AnalyticsDashboardProps {
  rawEquity: number;
  adjustedEquity: number;
  potOdds: number;
  ev: number;
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  position: 'IP' | 'OOP';
  isCalculating: boolean;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  rawEquity,
  adjustedEquity,
  potOdds,
  ev,
  recommendation,
  position,
  isCalculating
}) => {
  const getRecColor = () => {
    switch (recommendation) {
      case 'RAISE': return 'text-green-600 dark:text-green-400';
      case 'CALL': return 'text-green-600 dark:text-green-400'; // Green for +EV
      case 'CHECK': return 'text-gray-600 dark:text-gray-300';
      case 'FOLD': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRecBg = () => {
    switch (recommendation) {
      case 'RAISE': return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'CALL': return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'CHECK': return 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700';
      case 'FOLD': return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      default: return 'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800';
    }
  };

  return (
    <div className={`m-4 p-6 rounded-xl border-2 transition-all ${getRecBg()} shadow-sm ${isCalculating ? 'opacity-50 animate-pulse' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recommendation</span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${position === 'IP' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
            {position}
          </span>
        </div>
        
        <span className={`text-5xl font-black tracking-tighter ${getRecColor()}`}>
          {recommendation}
        </span>
        
        <div className="mt-6 w-full grid grid-cols-3 gap-2 divide-x divide-gray-200 dark:divide-gray-700">
          <div className="flex flex-col items-center px-2">
            <span className="text-[9px] font-bold text-gray-400 uppercase mb-1">Raw Eq</span>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {(rawEquity * 100).toFixed(1)}%
            </span>
            <span className="text-[9px] text-gray-400">
              Adj: {(adjustedEquity * 100).toFixed(1)}%
            </span>
          </div>
          
          <div className="flex flex-col items-center px-2">
            <span className="text-[9px] font-bold text-gray-400 uppercase mb-1">Pot Odds</span>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {(potOdds * 100).toFixed(1)}%
            </span>
            <span className={`text-[9px] font-bold ${adjustedEquity > potOdds ? 'text-green-500' : 'text-red-500'}`}>
              {adjustedEquity > potOdds ? 'Good' : 'Bad'}
            </span>
          </div>

          <div className="flex flex-col items-center px-2">
            <span className="text-[9px] font-bold text-gray-400 uppercase mb-1">EV</span>
            <span className={`text-xl font-bold ${ev >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {ev >= 0 ? '+' : ''}{ev.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
