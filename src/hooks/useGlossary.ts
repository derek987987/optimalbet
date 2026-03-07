import { useState, useCallback } from 'react';
import type { GlossaryTerm } from '../types/glossary';

export const useGlossary = () => {
  const [activeTerm, setActiveTerm] = useState<GlossaryTerm | null>(null);

  const openGlossary = useCallback((term: GlossaryTerm) => {
    setActiveTerm(term);
  }, []);

  const closeGlossary = useCallback(() => {
    setActiveTerm(null);
  }, []);

  return {
    activeTerm,
    isOpen: activeTerm !== null,
    openGlossary,
    closeGlossary
  };
};
