const quotes = [
{
    quote : "Winter is coming.",
    author : "Eddard Stark",
    
},
{
    quote : "The lone wolf dies but the pack survives.",
    author : "Sansa Stark",
    
},
{
    quote : "A mind needs books like a sword needs a whetstone.",
    author : "Tyrian Lannister",
    
},
{
    quote : "Fear cuts deeper than swords.",
    author : "Arya Stark",
    
},
{
    quote : "You need to take your enemy’s side if you’re going to see things the way they do.",
    author : "Tyrion Lannister",
    
},
{
    quote : "We are going to leave the world better than we found it.",
    author : "Daenerys Targaryen",
    
},
{
    quote : "Chaos isn’t a pit. Chaos is a ladder.",
    author : "Petyr Baelish",
    
},
{
    quote : "The world is overflowing with horrible things, but they’re all a tray of cakes next to death.",
    author : "Olenna Tyrell",
    
},
{
    quote : "A man with no motive is a man no one suspects. Always keep your foes confused." ,
    author : "Lord Baelish",
    
},
{
    quote : "There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today.",
    author : "Syrio Forel",
    
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;