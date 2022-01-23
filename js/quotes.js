const quotes=[
    {quote: "The merit of an action lies in finishing it to the end.",
    author: "Genghis Khan",
    },
    {quote: "If you can concentrate always on the present, you'll be a happy man.",
    author: "Paulo Cuelho",
    },
    {quote: "To help a friend in need is easy, but to give him your time is not always opportune.",
    author: "Charlie Chaplin",
    },
    {quote: "When I am attacked by gloomy thoughts, nothing helps me so much as running to my books. They quickly absorb me and banish the clouds from my mind.",
    author: "Michel de Montaigne",
    },
    {quote: "Nothing is permanent in this wicked world - not even our troubles.",
    author: "Charlie Chaplin",
    },
    {quote: "What we do is less than a drop in the ocean. But if it were missing, the ocean would lack something.",
    author: "Mother Teresa",
    },
    {quote: "Laughter is by definition healthy.",
    author: "Doris Lessing",
    },
    {quote: "No man is good enough to govern another man without that other's consent.",
    author: "Abraham Lincoln",
    },
    {quote: "When you give each other everything, it becomes an even trade. Each wins all.",
    author: "Lois McMaster Bujold",
    },
    {quote: "There is no cure for birth and death, save to enjoy the interval.",
    author: "George Santayana",
    }
];

const quote = document.querySelector("#saying");
const author = document.querySelector("#author");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
