import { Component, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { Loader } from "./Loader/Loader";
import { QuoteCard } from "./QuouteCard/QuoteCard";

import { fetchQuotes } from "../api/fetchQuotes";
import { fetchColors } from "../api/fetchColors";

import { Quote, AppState } from "../interfaces/interfaces";

export class App extends Component<{}, AppState> {
  state = {
    quotes: [],
    color: "",
    loading: false,
  };

  fetchData = async () => {
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
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevState: AppState) {
    if (prevState.color !== this.state.color) {
      const root = document.querySelector("#root") as HTMLElement;
      root?.classList.add("color-transition");
      root?.style.setProperty("background-color", this.state.color);
      setTimeout(() => {
        root?.classList.remove("color-transition");
      }, 1000);
    }
  }

  loadMore = () => {
    this.fetchData();
  };

  render(): ReactNode {
    const { quotes, loading, color } = this.state;
    const quote = quotes[0] as Quote;

    return (
      <div className="container">
        <Toaster />
        {loading || quotes.length === 0 ? (
          <Loader />
        ) : (
          <QuoteCard quote={quote} color={color} loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}
