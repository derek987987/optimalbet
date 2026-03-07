import React from 'react';

interface DecisionRationaleProps {
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  equity: number;
  potOdds: number;
}

export const DecisionRationale: React.FC<DecisionRationaleProps> = ({
  recommendation,
  equity,
  potOdds,
}) => {
  let rationaleText = '';
  if (recommendation === 'FOLD') {
    rationaleText = `Pot Odds (${(potOdds * 100).toFixed(1)}%) are higher than your Equity (${(equity * 100).toFixed(1)}%). Calling is -EV.`;
  } else if (recommendation === 'RAISE') {
    rationaleText = `Strong Equity (${(equity * 100).toFixed(1)}%) suggests value betting or raising for protection.`;
  } else if (recommendation === 'CHECK') {
     rationaleText = `No bet facing you. Checking is the standard play to realize equity or trap.`;
  } else {
    rationaleText = `Equity (${(equity * 100).toFixed(1)}%) justifies calling the bet given the Pot Odds (${(potOdds * 100).toFixed(1)}%).`;
  }

  // Visual progress bar/gauge calculation
  // We normalize against 100% since both are percentages
  const equityWidth = Math.min(equity * 100, 100);
  const oddsWidth = Math.min(potOdds * 100, 100);

  return (
    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Decision Rationale</h3>
      </div>
      
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {rationaleText}
      </p>

      <div className="space-y-3">
        {/* Equity Bar */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-bold text-blue-600 dark:text-blue-400">Equity (Win %)</span>
            <span className="font-mono">{(equity * 100).toFixed(1)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${equityWidth}%` }}
            />
          </div>
        </div>

        {/* Pot Odds Bar */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-bold text-orange-600 dark:text-orange-400">Pot Odds (Cost)</span>
            <span className="font-mono">{(potOdds * 100).toFixed(1)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${oddsWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
