function generateRandomNumber() {
  let max = 100;

  return Math.floor(Math.random() * max) + 1;
}

let answer = generateRandomNumber();

console.log(answer);



function getPlayerGuess() {

  let guess = parseInt(prompt('Guess the number between 1 and 100:'));

  while(guess == null || isNaN(guess)) {
    guess = parseInt(prompt('Invalid input. Provide a valid number.'));
  }

  return guess;
}

let guess = getPlayerGuess();
console.log(guess);



function checkGuess(answer, guess) {
  if (guess > answer) {
    return 'Your guess is too hight.';
  } else if (guess < answer) {
    return 'Your guess is too low.';
  } else {
    return 'Great job, you got it!';
  }
}

let check = checkGuess(answer, guess);

console.log(check);


function game(answer, guess, check) {
  let tries = 10;
    while(guess !== answer && tries > 0) {

      if(guess > answer) {
        tries--;
        guess = prompt(check + tries);
      } else {
        guess = prompt(check + tries);
      }
      
      if(guess === answer) {
        alert('Congratulation! You guessed the number!');
      } else {
        alert('Out of guesses! The number was ' + answer);
      }
  }
}