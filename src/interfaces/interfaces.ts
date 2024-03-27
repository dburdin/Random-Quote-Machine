export interface Quote {
  author: string;
  category?: string;
  quote: string;
}

export interface AppState {
  quotes: Quote[];
  color: string;
  loading: boolean;
}

export interface QuoteCardProps {
  quote: Quote;
  color: string;
  loadMore: () => void;
}
