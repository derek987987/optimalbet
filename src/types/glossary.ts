export type GlossaryTerm = 'EV' | 'Equity' | 'PotOdds' | 'Position' | 'Ranges' | 'MDF' | 'SPR';

export interface GlossaryEntry {
  term: GlossaryTerm;
  title: string;
  definition: string;
  example?: string;
  category: 'Math' | 'Strategy' | 'General';
}
