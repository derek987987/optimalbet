// src/services/units.ts
const UNIT_KEY = 'optimalbet_unit';

export type Unit = '$' | 'BB' | 'Chips';

export const getGlobalUnit = (): Unit => {
  return (localStorage.getItem(UNIT_KEY) as Unit) || '$';
};

export const setGlobalUnit = (unit: Unit): void => {
  localStorage.setItem(UNIT_KEY, unit);
  window.dispatchEvent(new Event('unit-change'));
};

export const useUnit = () => {
  const [unit, setUnit] = React.useState<Unit>(getGlobalUnit());

  React.useEffect(() => {
    const handler = () => setUnit(getGlobalUnit());
    window.addEventListener('unit-change', handler);
    return () => window.removeEventListener('unit-change', handler);
  }, []);

  return { unit, setUnit: setGlobalUnit };
};

// React import needed for hook
import React from 'react';
