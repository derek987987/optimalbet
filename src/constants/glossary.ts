import type { GlossaryEntry, GlossaryTerm } from '../types/glossary';

export const GLOSSARY_DATA: Record<GlossaryTerm, GlossaryEntry> = {
  EV: {
    term: 'EV',
    title: 'Expected Value',
    definition: 'The average amount of money you expect to win or lose on a specific bet over the long run.',
    example: 'A $100 bet with 50% chance to win $200 has +$50 EV.',
    category: 'Math'
  },
  Equity: {
    term: 'Equity',
    title: 'Raw Equity',
    definition: 'The percentage of times your hand will win the pot at showdown against the opponent\'s range.',
    example: 'AA vs KK has ~82% equity preflop.',
    category: 'Math'
  },
  PotOdds: {
    term: 'PotOdds',
    title: 'Pot Odds',
    definition: 'The ratio of the current pot size to the cost of a contemplated call.',
    example: 'Calling $50 into a $100 pot offers 2:1 (33%) odds.',
    category: 'Math'
  },
  Position: {
    term: 'Position',
    title: 'Position (IP/OOP)',
    definition: 'Your seat relative to the dealer button. Being "In Position" (IP) means you act last post-flop.',
    category: 'Strategy'
  },
  Ranges: {
    term: 'Ranges',
    title: 'Hand Ranges',
    definition: 'The set of all possible hands a player might hold in a specific situation, rather than a single hand.',
    category: 'Strategy'
  },
  MDF: {
    term: 'MDF',
    title: 'Minimum Defense Frequency',
    definition: 'The percentage of your range you must continue with to prevent your opponent from profitably bluffing with any two cards.',
    category: 'Math'
  },
  SPR: {
    term: 'SPR',
    title: 'Stack-to-Pot Ratio',
    definition: 'The ratio of the effective stack size to the pot size. Low SPR indicates commitment; high SPR allows for more maneuvering.',
    category: 'Math'
  }
};
