export interface Quote {
  author: string;
  category: string;
  quote: string;
}

export interface AppState {
  quotes: Quote[];
  color: string;
  loading: boolean;
}
