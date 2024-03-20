export const App = () => {
  return (
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
  );
};
