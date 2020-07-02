
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

//@param {number} number1
//@param {number} number2
//@return {number} product


 const number1 = parseInt (prompt('Please enter a number'));
 const number2 = parseInt (prompt('Please enter another number'));  


 const multiplication = (number1, number2) => {
  let sum = 0;
  for (let i = 0; i < number2; i ++) {
   sum += number1;
   console.log(sum);
  }
  return sum; 
 }

 const answer1 = multiplication(number1, number2);
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:
//@param {string}
//@return {character} => array of characters
// vowelOrConsonant = () => {
//   return
// }
// const answer2 = vowelOrConsonant()
// const htmlTarget2 = document.getElementById('a-2')
// htmlTarget2.innerHTML = answer2


let string = prompt("Please enter a word");

let vowelOrConsonant = (string) => {
  const vowels =["a","e","i","o","u"];
  let consArray = [];
  let vowArray = [];

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])){
        vowArray.push(string[i]);
      } else 
        consArray.push(string[i]);
      }

while (true) {
  let optionInput = prompt("Do you prefer vowels or consonants first?");
  if (optionInput != "vowels" && optionInput != "consonants") {
    alert("Please enter a valid value, vowels or consonants");
  } else if 
  (optionInput === ("vowels").toLowerCase()) {
  return(vowArray.concat(consArray));

  break;
  } else {
    (optionInput === ("consonants").toLowerCase()) 
    return(consArray.concat(vowArray));
    break;
  }     
}
}

const answer2 = vowelOrConsonant(string)

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
// guessTheNumber  = () => {
//   return
// }

// const answer3 = guessTheNumber()

// const htmlTarget3 = document.getElementById('a-3')
// htmlTarget3.innerHTML = answer3

let player = {
  name: " ",
  lives: 3,
  fail_numbers: []
};

guessTheNumber = () => {
  function getRanNumber() {
    return Math.floor(Math.random() * 41) + 10;
  }
  let randomNumber = getRanNumber();
  player.name = prompt("Please enter your name");
 
  for (i = 0; i < 3; i++) 
  {
    let inputNumber = prompt('Please enter a number between 10 and 50');
    if (inputNumber == randomNumber) {
      let stringWin = `Congratulations ${player.name.toUpperCase()}!!! You guessed the number`;
      return stringWin;
    } else {
      player.lives--;
      player.fail_numbers++;                   
    }
  }
    alert('Game Over')
    let stringGameOver = `Game Over. You failed ${player.fail_numbers} times.`;
    return stringGameOver;
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3


//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"


var library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }];

let sorOption = prompt("Type the prefered element to sort your list: Title, Author, or libraryID")

function compare(a, b) {
  if (sorOption == 'title') {
    return b.title.length - a.title.length;
  } else if (sorOption == 'author') {
    return b.author.length - a.author.length;
  } else
    return b.libraryID - a.libraryID;

}
// console.log(library.sort(compare));
library.sort(compare);

let finalSort = '';

for (let i = 0; i < library.length; i++) {
  finalSort += (library[i][sorOption])
  finalSort += ';';

}
// console.log(finalSort)


const answer4 = finalSort

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4