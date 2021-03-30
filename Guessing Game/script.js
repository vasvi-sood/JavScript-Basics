'use strict';
//select and manupualte an HTML element
/*document.querySelector('.message').textContent = `Correct Number!!!`;

//modifying an input value
document.querySelector('.guess').value = 2;*/

// generate a random number
let ans = Math.floor(Math.random() * 20) + 1;
//user input
let a;

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

//event for check button
document.querySelector('.check').addEventListener('click', function() {
  a = Number(document.querySelector('.guess').value);
  if (!a)
    document.querySelector('.message').textContent =
      'Please enter a valid number!!!';
  else if (a === ans) {
    document.querySelector('.message').textContent = 'Correct answer!!!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = 'magenta';
    document.querySelector('.number').style.width = '30rem';
  } else {
    if (a < ans)
      document.querySelector('.message').textContent = `Guess too low`;
    else document.querySelector('.message').textContent = `Guess too high`;
    score--;

    if (score <= 0) {
      score = 0;
      document.querySelector('.message').textContent = `You loose!!`;
    }
    document.querySelector('.score').textContent = score;
  }
  document.querySelector('.number').textContent = a;
});

//add event for again button
document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  score = 10;
  ans = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
});
