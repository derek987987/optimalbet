import React from 'react';
import { CardGrid } from './CardGrid';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCard: (card: number) => void;
  selectedCards: number[]; // Used to visually disable already selected cards
}

export const CardModal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  onSelectCard,
  selectedCards
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-t-xl sm:rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[80vh]">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Select Card
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          <CardGrid 
            selectedCards={selectedCards} 
            onToggleCard={(card) => {
              if (!selectedCards.includes(card)) {
                onSelectCard(card);
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
};
