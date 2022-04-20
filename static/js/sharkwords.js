const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  for (const letter of word) {
    document.querySelector("#word-container").insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"> </div>`);
  }
};




// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {

  for (const letter of ALPHABET) {
    document.querySelector("#letter-buttons").insertAdjacentHTML('beforeend', `<button class="letter-buttons">${letter} </button>`);
  }
};


// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  return document.querySelector(`div.${letter}`) != null;
};


const handleCorrectGuess = (letter) => {
  // display div
  const matches=document.querySelectorAll(`div.${letter}`);

  for (const match of matches) {
    match.innerText = letter;
  }
}



const handleWrongGuess = () => {
  numWrong += 1;

  if (numWrong >= 5) {
    document.querySelector("#play-again").style.display="block";

    // disable all buttons when player loses the game
    const all_buttons = document.querySelectorAll("button");

    for (button of all_buttons) {
      button.disabled = true;
    }
  }

  document.querySelector("#shark-img img").setAttribute("src", `/static/images/guess${numWrong}.png`)
}



// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('.letter-buttons')) {
    button.addEventListener('click', () => {
      disableLetterButton(button) 
      isLetterInWord(button.innerText) ? handleCorrectGuess(button.innerText) : handleWrongGuess();
    })
  }

  const playAgain=document.querySelector("#play-again");
  playAgain.addEventListener('click', () => {
      window.location="/sharkwords";
  })

  
})();
