import { useMemo } from 'react';
import { AnalyticsDashboard } from './components/analytics/AnalyticsDashboard';
import { CardSlotGroup } from './components/inputs/CardSlotGroup';
import { BettingInputs } from './components/BettingInputs';
import { OpponentConfig } from './components/inputs/OpponentConfig';
import { useGameState } from './hooks/useGameState';
import { useEquityEngine } from './hooks/useEquityEngine';
import { useGlossary } from './hooks/useGlossary';
import { GlossaryPopup } from './components/education/GlossaryPopup';

function App() {
  const gameState = useGameState();
  const { 
    holeCards, boardCards, clearHand,
    setCardAt,
    potSize, setPotSize, facingBet, setFacingBet, 
    stackSize, isIP, setIsIP, unit, setUnit,
    opponents, setOpponents,
    selectedRatio, setRatio,
    incrementPot, incrementFacing, resetPot, resetFacing
  } = gameState;

  const { activeTerm, openGlossary, closeGlossary } = useGlossary();

  const memoizedGameState = useMemo(() => ({
    potSize,
    facingBetSize: facingBet,
    stackSize,
    isIP,
    unit,
    opponentCount: opponents.length,
    opponents
  }), [potSize, facingBet, stackSize, isIP, unit, opponents]);

  const { result, isCalculating } = useEquityEngine({
    holeCards,
    boardCards,
    gameState: memoizedGameState
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden transition-colors">
      <header className="bg-blue-700 dark:bg-blue-900 text-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black tracking-tight uppercase">OptimalBet</h1>
          <p className="text-[10px] font-bold opacity-70 tracking-widest uppercase">Advanced Analytics</p>
        </div>
        <button 
          onClick={() => setUnit(u => u === 'USD' ? 'BB' : 'USD' as any)}
          className="text-xs font-bold bg-blue-800 p-2 rounded"
        >
          {unit}
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 text-[var(--text-primary)]">
        {result ? (
          <AnalyticsDashboard
            {...result}
            position={isIP ? 'IP' : 'OOP'}
            isCalculating={isCalculating}
            onInfoClick={openGlossary}
            potSize={potSize}
            facingBetSize={facingBet}
            stackSize={stackSize}
            unit={unit}
            onApplySizing={setFacingBet}
          />
        ) : (
          <div className="p-8 text-center text-gray-400 text-sm">Select cards to start analysis</div>
        )}

        <div className="bg-white dark:bg-gray-900 m-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Input Dashboard</span>
            <button 
              onClick={() => setIsIP(!isIP)}
              className={`text-[9px] px-2 py-1 rounded font-bold ${isIP ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}
            >
              Toggle {isIP ? 'IP' : 'OOP'}
            </button>
          </div>
          
          <CardSlotGroup
            holeCards={holeCards}
            boardCards={boardCards}
            onSelectCard={setCardAt}
            onClear={clearHand}
          />

          <BettingInputs
            potSize={potSize}
            facingBet={facingBet}
            onUpdatePot={setPotSize}
            onUpdateBet={setFacingBet}
            onIncrementPot={incrementPot}
            onIncrementBet={incrementFacing}
            onResetPot={resetPot}
            onResetBet={resetFacing}
            selectedRatio={selectedRatio}
            onSelectRatio={setRatio}
          />
          
          <OpponentConfig
            count={opponents.length}
            rangePreset={opponents[0]?.rangePreset || 'Random'}
            onCountChange={(n) => {
                const newOpps = Array.from({ length: n }, (_, i) => 
                    opponents[i] || { id: String(i+1), rangePreset: 'Random', rangePercentage: 1.0 }
                );
                setOpponents(newOpps);
            }}
            onRangeChange={(r) => {
                const newOpps = opponents.map(o => ({ ...o, rangePreset: r }));
                setOpponents(newOpps);
            }}
            onInfoClick={openGlossary}
          />
        </div>
      </main>

      <GlossaryPopup term={activeTerm} onClose={closeGlossary} />
    </div>
  );
}

export default App;
