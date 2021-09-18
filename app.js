const quotes = './quotes.txt';
//Query Selectors
const button = document.querySelector('#quote-button');
const quoteParagraph = document.querySelector('#quote-text');
const quoteAuthor = document.querySelector('#quote-author');
//Function to fetch quotes.
let fetchQuotes = () => {
    //Generates a random number between 1 and 1643.
    let randomNum = Math.floor(Math.random() * 1643);
    fetch(quotes)
    //Parses txt file to json object.
    .then(response => response.json())
    //Displays quote and author. 
    .then(data => {
        quoteParagraph.innerHTML = `${data[randomNum].text}`
        quoteAuthor.innerHTML = ` - ${data[randomNum].author}`
    });
}
//Call the function to display an initial quote. 
fetchQuotes();   
//Button event listener which calls the fetchQuotes function. 
button.addEventListener('click', fetchQuotes);
