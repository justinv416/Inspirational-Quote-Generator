//Url containing the quotes api
const quotesUrl = 'https://type.fit/api/quotes';
//Array containing images
const images = [
    'Assets/images/jay-castor-7AcMUSYRZpU-unsplash.jpg',
    'Assets/images/gary-meulemans-F90MkaweLYg-unsplash.jpg',
    'Assets/images/joshua-earle-Hn8N4I4eHA0-unsplash.jpg',
    'Assets/images/jr-korpa-6dN9l-gopyo-unsplash.jpg',
    'Assets/images/kid-circus-7vSlK_9gHWA-unsplash.jpg'
];
//Query Selectors
const button = document.querySelector('#quote-button');
const quoteParagraph = document.querySelector('#quote-text');
const quoteAuthor = document.querySelector('#quote-author');

//Function to generate a random image from the array.
const randomImg = () => {
    let imgIndex = Math.floor(Math.random() * 4)
    document.body.style.background = `url(${images[imgIndex]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
};
randomImg();

//Function to fetch quotes.
let fetchQuotes = () => {
    //Generates a random number between 1 and 1643.
    let randomNum = Math.floor(Math.random() * 1643);
    fetch(quotesUrl)
    //Parses txt file to json object.
    .then(response => response.json())
    //Displays quote and author. 
    .then(data => {
        quoteParagraph.innerHTML = `${data[randomNum].text}`
        quoteAuthor.innerHTML = ` - ${data[randomNum].author}`
    });
};
//Call the function to display an initial quote. 
fetchQuotes();   
//Button event listener which calls the fetchQuotes function. 
button.addEventListener('click', () => {
    fetchQuotes();
    randomImg();
});


