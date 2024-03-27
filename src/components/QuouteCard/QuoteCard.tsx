import toast from "react-hot-toast";

import { QuoteCardProps } from "../../interfaces/interfaces";

import TwitterIcon from "/public/twitter.svg?react";

import style from "./QuoteCard.module.css";

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, color, loadMore }) => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(quote.quote);
      toast.success("Quote copied to clipboard!");
    } catch (error) {
      console.error("Error copying quote to clipboard:", error);
    }
  };

  return (
    <div className={style.quoteCard}>
      <div id="quote-box">
        <h1
          title="Copy quote"
          onClick={handleCopyClick}
          className={style.quote}
          id="text"
          style={{ color: color }}
        >
          “{quote.quote}”
        </h1>
        <p className={style.author} id="author" style={{ color: color }}>
          — {quote.author} —
        </p>
        <div className={style.group}>
          <button
            onClick={loadMore}
            style={{ backgroundColor: color }}
            className={style.button}
            id="new-quote"
          >
            Catch new quote
          </button>
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
            id="tweet-quote"
          >
            <TwitterIcon className={style.icon} style={{ color: color }} />
          </a>
        </div>
      </div>
    </div>
  );
};
