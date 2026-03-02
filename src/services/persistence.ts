const PREFIX = 'optimalbet_';

export const saveState = <T>(key: string, state: T): void => {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving state to localStorage', e);
  }
};

export const loadState = <T>(key: string): T | null => {
  try {
    const state = localStorage.getItem(PREFIX + key);
    return state ? JSON.parse(state) : null;
  } catch (e) {
    console.error('Error loading state from localStorage', e);
    return null;
  }
};

export const clearState = (key: string): void => {
  localStorage.removeItem(PREFIX + key);
};
