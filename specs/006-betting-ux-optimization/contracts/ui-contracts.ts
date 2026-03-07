/**
 * UI Component Contracts
 * Defines the expected props and behaviors for the new components.
 */

export interface GlossaryPopupProps {
  term: string;
  isOpen: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null; // For popover positioning
}

export interface CardGridProps {
  selectedCards: string[]; // List of card IDs already in use (e.g., 'As', 'Kh')
  onSelect: (card: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export interface QuickBetButtonProps {
  ratio: number; // e.g., 0.5 for 50%
  label: string; // e.g., "1/2"
  isActive: boolean;
  onClick: (ratio: number) => void;
}

export interface DecisionRationaleProps {
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  equity: number;
  potOdds: number;
  ev: number;
  position: 'IP' | 'OOP';
}
