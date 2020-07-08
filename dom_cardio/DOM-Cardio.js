// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div)
// make an unordered list
const unorderedList = document.createElement('ul');
// add three list items with the words "one, two three" in them
const list = `
<li>one</li>
<li>two</li>
<li>three</li>
`;

unorderedList.innerHTML = list;

// put that list into the above wrapper
document.body.insertAdjacentElement('afterbegin', unorderedList);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
const image = `<img 
class = 'cute' 
width = "250" 
src = 'https://picsum.photos/250' 
alt = 'Cute Puppy'/>
`;

// Append that image to the wrapper
div.innerHTML = image;

// with HTML string, make a div, with two paragraphs inside of it

const stringDiv = document.createElement('div');

const paragraphDiv = `
<div>
    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
    <p class = "warning">Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
</div>
`;

// put this div before the unordered list from above
const paragraph = document.createRange().createContextualFragment(paragraphDiv);
unorderedList.prepend(paragraph)

// Remove the first paragraph
const firstParagraph = document.querySelector('p');
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button>Delete</button>
    </div>
  `;
};

// make a new div with a class of cards
const cardDiv = document.createElement('div')
cardDiv.classList.add('cards');

// Have that function make 4 cards
const fistCard = generatePlayerCard('Booby', 3, "60 cm");
const secondCard = generatePlayerCard('Skiny', 2, "50 cm");
const thirdCard = generatePlayerCard('Booly', 3, "60 cm");
const fourthCard = generatePlayerCard('Milou', 1, "40 cm");

// append those cards to the div
cardDiv.insertAdjacentHTML('afterbegin', fistCard + secondCard + thirdCard + fourthCard);

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButtons = document.querySelectorAll('button');

// make out delete function
const deleteFunction = ($event) => {
  $event.currentTarget.parentElement.remove();
}
// loop over them and attach a listener

deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteFunction);
})