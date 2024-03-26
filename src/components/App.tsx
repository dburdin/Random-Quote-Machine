import { Component, ReactNode } from "react";

import { Loader } from "./Loader/Loader";

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

  render(): ReactNode {
    const { quotes, loading } = this.state;
    const quote = quotes[0] as Quote;

    return (
      <>
        {loading || quotes.length === 0 ? (
          <Loader />
        ) : (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div id="quote-box">
              <p id="text">{quote.quote}</p>
              <p id="author">{quote.author}</p>
              <button id="new-quote">Add new quote</button>
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
                id="tweet-quote"
              >
                Twitter
              </a>
            </div>
          </div>
        )}
      </>
    );
  }
}
