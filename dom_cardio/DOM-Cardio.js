// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div)
// make an unordered list
const unorderedList = document.createElement('ul');
// add three list items with the words "one, two three" in them
const list = `<li>one</li>
    <li>two</li>
    <li>three</li>
`;

unorderedList.innerHTML = list;

// put that list into the above wrapper
div.insertAdjacentElement('beforebegin', unorderedList);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy

const image = `<img class = 'cute' width = "250" src = 'https://picsum.photos/250' alt = 'Cute Puppy'/>`;

// Append that image to the wrapper
div.innerHTML = image;

// with HTML string, make a div, with two paragraphs inside of it

const stringDiv = document.createElement('div');
const firstParagraph = document.createElement('p');
firstParagraph.textContent = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.';
const secondParagraph = document.createElement('p');
secondParagraph.textContent = 'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

stringDiv.appendChild(firstParagraph);
stringDiv.appendChild(secondParagraph);

// put this div before the unordered list from above
unorderedList.insertAdjacentElement('beforebegin', stringDiv);

// add a class to the second paragraph called warning
secondParagraph.classList.add('warning');
// remove the first paragraph
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

const generatePlayerCard = `
<div class="playerCard">
    <h2>NAME — AGE</h2>
    <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div>
`;
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const divCard = document.createElement('div');
divCard.classList.add('cards');


// Have that function make 4 cards
const card = `
<span>First card</span>
<span>Second card</span>
<span>Third card</span>
<span>Fourth card</span>
`;

// append those cards to the div
divCard.innerHTML = card;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", divCard);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed



// select all the buttons!
// make out delete function
// loop over them and attach a listener
