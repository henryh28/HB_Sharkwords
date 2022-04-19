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

const numWrong = 0;

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
  console.log(" disabling this > ", buttonEl)

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
  console.log ("fill in: ", letter)

  const matches=document.querySelectorAll(`div.${letter}`);

  for (const match of matches) {
    match.innerText = letter;
    disableLetterButton(match);
  }

  const disableMe=document.querySelector(`.letter-buttons ${letter}`)
  console.log(" selected: ::: > ", disableMe)

  // handleCorrectGuess=(e,t)=>{
  //   const n=document.querySelectorAll(`div.${e}`);
  
  //   for(const t of n)t.innerHTML=e,correctGuesses+=1;
  // correctGuesses===t.length&&(disableAllLetterButtons(),
  // document.querySelector("#win").style.display="block")}
  


}

const handleWrongGuess = () => {
  // numWrong += 1
  // link numWrong with guess1-5.png
  console.log ("Wrong guess $$$$$$$$$$")
}



// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);
  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call

  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call
  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
  // const button = document.querySelector('#angry-button');

  // const handleClick = () => {
  //   alert('Stop clicking me!');
  // };
  
  // button.addEventListener('click', handleClick);

  for (const button of document.querySelectorAll('.letter-buttons')) {
    button.addEventListener('click', () => {
      console.log("button value::: ", button.innerText);

      disableLetterButton(button);
      if (isLetterInWord(button.innerText)) {
        handleCorrectGuess(button.innerText);
      } else {
        handleWrongGuess();
      }
    })
  }

  
})();
