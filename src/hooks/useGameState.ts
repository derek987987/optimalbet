import { useHandState } from './useHandState';
import { useBettingState } from './useBettingState';
import { useAutoPersistence } from './useAutoPersistence';

export const useGameState = () => {
  const hand = useHandState();
  const betting = useBettingState();

  // Unified auto-persistence
  useAutoPersistence('hole_cards', hand.holeCards);
  useAutoPersistence('board_cards', hand.boardCards);
  useAutoPersistence('pot_size', betting.potSize);
  useAutoPersistence('facing_bet', betting.facingBet);
  useAutoPersistence('stack_size', betting.stackSize);
  useAutoPersistence('is_ip', betting.isIP);
  useAutoPersistence('unit', betting.unit);
  useAutoPersistence('opponents', betting.opponents);

  return {
    ...hand,
    ...betting
  };
};
