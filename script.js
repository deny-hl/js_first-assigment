alert(
  'Welcome to the number guessing game!'
  'Open Developer Console to see extra logs and hints:\n' +
  '- Windows/Linux: F12 or Ctrl+Shift+I\n' +
  '- Mac: Cmd+Option+I'
);

let max = 100;

function generateRandomNumber() {
  return Math.floor(Math.random() * max) + 1;
}


function getPlayerGuess() {
  let input = prompt(`Guess the number between 1 and ${max}:`);

  if (input === null) {
    console.log('Game cancelled by user. Thanks for playing!');
    return null;
  }

  input = parseInt(input);

  if (isNaN(input) || input > max || input < 1) {
    console.log('Invalid input!')
    return getPlayerGuess()
  } else {
    return input;
  }
}


function checkGuess(answer, guess, tries) {
  if (guess > answer) {
    console.log('Your guess is too high.');
  } else if (guess < answer) {
    console.log('Your guess is too low.');
  } else if (guess === answer) {
    console.log(`Great job, you got it! You guessed the answer in ${10 - tries} ${10 - tries === 1 ? 'try' : 'tries'}`);
    const retry = confirm("Do you want to play again?");

    if (retry) game()
    else console.log('Exiting game...')
  }
}


function game() {
  let tries = 10
  const answer = generateRandomNumber();
  let guess

  do {
    tries--
    guess = getPlayerGuess()

    if (guess === null) return;

    console.log(`You chose ${guess}!`);
    checkGuess(answer, guess, tries)


  }
  while (guess !== answer && tries > 0)

  if (tries === 0) console.log('You are out of tries! Better luck next time!')
}

game()
