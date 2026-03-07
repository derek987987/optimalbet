import React from 'react';
import { RANK_NAMES } from '../../engine/core/cards';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface CardGridProps {
  selectedCards: string[]; // List of card IDs already in use (e.g., 'As', 'Kh')
  onSelect: (card: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const CardGrid: React.FC<CardGridProps> = ({ selectedCards, onSelect, onClose, isOpen }) => {
  if (!isOpen) return null;

  const suits = [
    { name: 's', label: '♠', color: 'text-gray-900 dark:text-gray-100' },
    { name: 'h', label: '♥', color: 'text-red-600 dark:text-red-500' },
    { name: 'c', label: '♣', color: 'text-green-700 dark:text-green-500' },
    { name: 'd', label: '♦', color: 'text-blue-600 dark:text-blue-500' },
  ];

  // Helper to generate full card string
  const getCardString = (rank: string, suit: string) => `${rank}${suit}`;

  // Reverse ranks so Ace is at top
  const displayedRanks = [...RANK_NAMES].reverse();

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Select Card</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-4 gap-2">
            {suits.map((suit) => (
              <div key={suit.name} className="flex flex-col gap-2">
                {displayedRanks.map((rank) => {
                  const cardStr = getCardString(rank, suit.name);
                  const isSelected = selectedCards.includes(cardStr);

                  return (
                    <button
                      key={cardStr}
                      onClick={() => !isSelected && onSelect(cardStr)}
                      disabled={isSelected}
                      className={`
                        aspect-[3/4] rounded-lg border flex flex-col items-center justify-center
                        transition-all text-lg font-bold
                        ${isSelected 
                          ? 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed' 
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md active:scale-95'
                        }
                      `}
                    >
                      <span className={suit.color}>{rank}</span>
                      <span className={`text-sm ${suit.color}`}>{suit.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
