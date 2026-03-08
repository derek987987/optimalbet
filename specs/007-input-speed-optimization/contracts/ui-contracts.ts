/**
 * UI Contracts: Input Speed Optimization
 */

export interface CardSlotProps {
  /** Unique ID for focus management */
  id: string;
  /** Current card value (number representation) */
  card?: number;
  /** Label (e.g., 'Hole 1', 'Flop 1') */
  label: string;
  /** Callback for card selection */
  onSelect: (card: number | null) => void;
  /** Visual highlight for focus */
  isActive?: boolean;
}

export interface CardSuggestionProps {
  /** Partial input buffer (e.g., 'A') */
  buffer: string;
  /** List of cards already in use */
  selectedCards: string[];
  /** Callback for choosing a suggestion */
  onConfirm: (card: string) => void;
}

export interface QuickBetButtonsProps {
  /** Target for the adjustment */
  target: 'pot' | 'facing';
  /** Current value to display/adjust */
  currentValue: number;
  /** Callback to increment the value */
  onIncrement: (amount: number) => void;
  /** Callback to reset to zero */
  onReset: () => void;
}

export interface CardModalProps {
  /** Cards already in use (to disable/hide) */
  selectedCards: string[];
  /** Callback for final selection */
  onSelect: (card: string) => void;
  /** Modal control */
  onClose: () => void;
  isOpen: boolean;
}

/**
 * State Management
 */

export interface BettingStateActions {
  /** Increment value additively (SC-002) */
  incrementPot: (amount: number) => void;
  incrementFacing: (amount: number) => void;
  resetPot: () => void;
  resetFacing: () => void;
}
