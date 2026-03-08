export interface RaiseSuggestion {
  label: string;
  amount: number;
  type: 'multiple' | 'percentage';
  isOverStack: boolean;
}
