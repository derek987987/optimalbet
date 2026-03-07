import React from 'react';
import { Info } from 'lucide-react';
import type { GlossaryTerm } from '../../types/glossary';

interface TermHighlightProps {
  term: GlossaryTerm;
  children: React.ReactNode;
  onInfoClick: (term: GlossaryTerm) => void;
  className?: string;
}

export const TermHighlight: React.FC<TermHighlightProps> = ({ term, children, onInfoClick, className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {children}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onInfoClick(term);
        }}
        className="p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
      >
        <Info size={10} className="text-gray-400 hover:text-blue-500" />
      </button>
    </span>
  );
};
