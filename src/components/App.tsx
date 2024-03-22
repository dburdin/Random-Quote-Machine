import { Component, ReactNode } from "react";

import { Loader } from "./Loader/Loader";
import { fetchQuotes } from "../api/fetchQuotes";

interface AppState {
  quotes: string[];
  color: string;
}

interface AppProps {}

export class App extends Component<AppProps, AppState> {
  state = {
    quotes: [],
    color: "",
  };

  async componentDidMount(): Promise<void> {
    try {
      const { data } = await fetchQuotes();
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }

  render(): ReactNode {
    return (
      <>
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
            <p id="text">Quote</p>
            <p id="author">Author</p>
            <button id="new-quote">Add new quote</button>
            <a href="twitter.com/intent/tweet" id="tweet-quote">
              Twitter
            </a>
          </div>
        </div>
        <Loader />
      </>
    );
  }
}
