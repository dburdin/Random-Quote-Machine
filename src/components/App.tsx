import { Component, ReactNode } from "react";

import { Loader } from "./Loader/Loader";
import { QuoteCard } from "./QuouteCard/QuoteCard";

import { fetchQuotes } from "../api/fetchQuotes";
import { fetchColors } from "../api/fetchColors";

import { Quote, AppState } from "../interfaces/interfaces";

export class App extends Component<AppState> {
  state = {
    quotes: [],
    color: "",
    loading: false,
  };

  async componentDidMount(): Promise<void> {
    try {
      this.setState({ loading: true });
      const { data: dataQuote } = await fetchQuotes();
      const { data: dataColor } = await fetchColors();
      this.setState({ quotes: dataQuote, color: dataColor.hex.value });
    } catch (error) {
      console.error("Error fetching quotes:", error);
      alert(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevState: AppState): void {
    if (prevState.color !== this.state.color) {
      const root = document.querySelector("#root") as HTMLElement;
      root?.classList.add("color-transition");
      root?.style.setProperty("background-color", this.state.color);
      setTimeout(() => {
        root?.classList.remove("color-transition");
      }, 1000);
    }
  }

  render(): ReactNode {
    const { quotes, loading } = this.state;
    const quote = quotes[0] as Quote;

    return (
      <div className="container">
        {loading || quotes.length === 0 ? <Loader /> : <QuoteCard quote={quote} />}
      </div>
    );
  }
}
