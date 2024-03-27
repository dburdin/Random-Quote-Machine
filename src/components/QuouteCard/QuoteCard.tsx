import { Quote } from "../../interfaces/interfaces";

export const QuoteCard = ({ quote }: { quote: Quote }) => {
  return (
    <div style={{ maxWidth: "50wh" }}>
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
  );
};
