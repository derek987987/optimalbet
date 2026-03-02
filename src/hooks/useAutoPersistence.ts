import { useEffect } from 'react';
import { saveState } from '../services/persistence';

export const useAutoPersistence = (key: string, state: any) => {
  useEffect(() => {
    saveState(key, state);
  }, [key, state]);
};
