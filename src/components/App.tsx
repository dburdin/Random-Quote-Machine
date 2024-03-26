import { Component, ReactNode } from "react";

import { Loader } from "./Loader/Loader";
import { fetchQuotes } from "../api/fetchQuotes";

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
      const { data } = await fetchQuotes();
      this.setState({ quotes: data });
    } catch (error) {
      console.error("Error fetching quotes:", error);
      alert(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render(): ReactNode {
    const { quotes, loading } = this.state;

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
              <p id="text">{(quotes[0] as Quote).quote}</p>
              <p id="author">Author</p>
              <button id="new-quote">Add new quote</button>
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                Twitter
              </a>
            </div>
          </div>
        )}
      </>
    );
  }
}
