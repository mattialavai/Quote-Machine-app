import React, { useState, useEffect } from 'react';
import './styles.css';

const sampleQuotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  }
];

const QuoteBox = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
    setQuote(sampleQuotes[randomIndex]);
  };

  const tweetQuote = () => {
    const tweetText = `"${quote.text}" - ${quote.author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">- {quote.author}</div>
      <button id="new-quote" onClick={fetchRandomQuote}>New Quote</button>
      <button id="tweet-quote" onClick={tweetQuote}>Tweet Quote</button>
    </div>
  );
};

export default QuoteBox;
