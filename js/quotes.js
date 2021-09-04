const quotes = [
  {
    quote: "The world is one big data problem.",
    author: " Andrew McAfee",
  },
  {
    quote:
      "Big data is at the foundation of all the megatrends that are happening.",
    author: "Chris Lynch",
  },
  {
    quote:
      "Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.",
    author: "Geoffrey Moore",
  },
  {
    quote: "Data is the new science. Big Data holds the answers.",
    author: "Pat Gelsinger",
  },
  {
    quote:
      "You can have data without information, but you cannot have information without data.",
    author: "Daniel Keys Moran",
  },
  {
    quote: "Torture the data, and it will confess to anything.",
    author: "Ronald Coase",
  },
  {
    quote:
      "Big data will spell the death of customer segmentation and force the marketer to understand each customer as an individual within 18 months or risk being left in the dust.",
    author: "Ginni Rometty",
  },
  {
    quote:
      "Information is the oil of the 21st century, and analytics is the combustion engine.",
    author: "Peter Sondergaard",
  },
  {
    quote:
      "The world is now awash in data and we can see consumers in a lot clearer ways.",
    author: "Max Levchin",
  },
  {
    quote:
      "Data is a precious thing and will last longer than the systems themselves.",
    author: "Tim Berners-Lee",
  },
];

const clickQuote = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

function handleRandomQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

clickQuote.addEventListener("click", handleRandomQuote);
