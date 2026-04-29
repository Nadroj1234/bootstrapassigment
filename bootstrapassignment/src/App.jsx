import { useState } from "react";

function App() {
  const quotes = [
    {
      author: "Theodore Roosevelt",
      quote: "Believe you can and you're halfway there.",
    },
    {
      author: "Theodore Roosevelt",
      quote: "Do what you can, with what you have, where you are.",
    },
    {
      author: "Winston Churchill",
      quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    },
    {
      author: "C.S. Lewis",
      quote:
        "Hardships often prepare ordinary people for an extraordinary destiny.",
    },
    {
      author: "Sam Levenson",
      quote: "Don’t watch the clock; do what it does. Keep going.",
    },
    {
      author: "Wayne Gretzky",
      quote: "You miss 100% of the shots you don’t take.",
    },
    {
      author: "Mahatma Gandhi",
      quote: "The future depends on what you do today.",
    },
    {
      author: "Nelson Mandela",
      quote: "It always seems impossible until it’s done.",
    },
    {
      author: "Arthur Ashe",
      quote: "Start where you are. Use what you have. Do what you can.",
    },
    { author: "Norman Vaughan", quote: "Dream big and dare to fail." },
    {
      author: "Walt Whitman",
      quote:
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
    },
    {
      author: "William James",
      quote: "Act as if what you do makes a difference. It does.",
    },
    {
      author: "Henry Ford",
      quote: "Quality means doing it right when no one is looking.",
    },
    {
      author: "Chris Grosser",
      quote: "Opportunities don't happen. You create them.",
    },
    {
      author: "Walt Disney",
      quote: "The best way to get started is to quit talking and begin doing.",
    },
  ];
  return (
    <>
      <Hero imgSrc="./src/assets/hero_bg.webp" quotes={quotes}></Hero>
    </>
  );
}

function Hero({ imgSrc, quotes }) {
  console.log(typeof quotes);
  console.log(typeof imgSrc);
  const getRandQuote = () => {
    console.log(quotes[0]);

    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const [quote, setQuote] = useState(getRandQuote());
  const styles = {
    background: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 15,
    height: 500,
  };

  return (
    <>
      <div className="px-4 py-5 my-5 text-center" style={styles}>
        <h1 className="display-5 fw-bold" style={{ color: "orange" }}>
          Inspirational quotes
        </h1>
        <div className="col-lg-6 mx-auto">
          <div className="quote_div">
            <p
              className="lead mb-4"
              style={{
                height: 70,

                color: "orange",
              }}
            >
              {quote.quote}
            </p>
            <h2 className="lead mb-4" style={{ color: "orange" }}>
              {quote.author}
            </h2>
          </div>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => setQuote(getRandQuote())}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
