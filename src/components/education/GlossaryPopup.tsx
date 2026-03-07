import React from 'react';
import { GLOSSARY_DATA } from '../../constants/glossary';
import type { GlossaryTerm } from '../../types/glossary';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface GlossaryPopupProps {
  term: GlossaryTerm | null;
  onClose: () => void;
}

export const GlossaryPopup: React.FC<GlossaryPopupProps> = ({ term, onClose }) => {
  if (!term) return null;

  const entry = GLOSSARY_DATA[term];

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                {entry.category}
              </span>
              <h2 className="text-xl font-black text-gray-900 dark:text-white mt-1">
                {entry.title}
              </h2>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <X size={18} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {entry.definition}
            </p>

            {entry.example && (
              <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800">
                <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Example</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                  "{entry.example}"
                </p>
              </div>
            )}
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl active:scale-95 transition-all"
          >
            Got it
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
