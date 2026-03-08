import React, { useState, useEffect } from 'react';
import { RANK_NAMES } from '../../engine/core/cards';
import { X, ChevronLeft } from 'lucide-react';
import { createPortal } from 'react-dom';

interface CardGridProps {
  selectedCards: string[]; // List of card IDs already in use (e.g., 'As', 'Kh')
  onSelect: (card: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const CardGrid: React.FC<CardGridProps> = ({ selectedCards, onSelect, onClose, isOpen }) => {
  const [view, setView] = useState<'rank' | 'suit'>('rank');
  const [selectedRank, setSelectedRank] = useState<string | null>(null);

  // Reset to rank view whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setView('rank');
      setSelectedRank(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const suits = [
    { name: 's', label: '♠', color: 'text-gray-900 dark:text-gray-100', fullName: 'Spades' },
    { name: 'h', label: '♥', color: 'text-red-600 dark:text-red-500', fullName: 'Hearts' },
    { name: 'c', label: '♣', color: 'text-green-700 dark:text-green-500', fullName: 'Clubs' },
    { name: 'd', label: '♦', color: 'text-blue-600 dark:text-blue-500', fullName: 'Diamonds' },
  ];

  // Reverse ranks so Ace is at top
  const displayedRanks = [...RANK_NAMES].reverse();

  const handleRankSelect = (rank: string) => {
    setSelectedRank(rank);
    setView('suit');
  };

  const handleSuitSelect = (suit: string) => {
    if (selectedRank) {
      onSelect(`${selectedRank}${suit}`);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            {view === 'suit' && (
              <button 
                onClick={() => setView('rank')}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <h2 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
              {view === 'rank' ? 'Select Rank' : `Select Suit for ${selectedRank}`}
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          {view === 'rank' ? (
            <div className="grid grid-cols-4 gap-3">
              {displayedRanks.map((rank) => (
                <button
                  key={rank}
                  onClick={() => handleRankSelect(rank)}
                  className="aspect-square rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex items-center justify-center text-xl font-black text-gray-900 dark:text-gray-100 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all active:scale-90"
                >
                  {rank}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {suits.map((suit) => {
                const isSelected = selectedCards.includes(`${selectedRank}${suit.name}`);
                return (
                  <button
                    key={suit.name}
                    onClick={() => !isSelected && handleSuitSelect(suit.name)}
                    disabled={isSelected}
                    className={`
                      flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all active:scale-95
                      ${isSelected 
                        ? 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-30 cursor-not-allowed' 
                        : 'bg-gray-50 dark:bg-gray-950 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      }
                    `}
                  >
                    <span className={`text-4xl mb-1 ${suit.color}`}>{suit.label}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{suit.fullName}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
