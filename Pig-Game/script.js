'use strict';
let score = document.querySelectorAll('.score');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let hold = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');
//querSelector and get Element by Id
let score1 = document.querySelector('#score--0');
let score2 = document.getElementById('score--1');
let isPlaying = true;
let currPlayer = 1;

let init = function() {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0;
  }
  dice.classList.add('hidden');
  current1.textContent = 0;
  current2.textContent = 0;

  currPlayer = 1;
  isPlaying = true;

  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
};

let incScore = function(points) {
  let i = document.getElementById(`current--${currPlayer - 1}`);
  i.textContent = Number(i.textContent) + points;
};

let makeScoreZero = function() {
  if (currPlayer == 1) {
    current1.textContent = 0;
  } else {
    current2.textContent = 0;
  }
};

let changePlayer = function() {
  currPlayer = currPlayer == 2 ? 1 : 2;
  //toggle bascially remotes the class if it's their or adds if it isn't
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let decWinner = function() {
  console.log(`.player--${currPlayer - 1}`);
  let i = document.querySelector(`.player--${currPlayer - 1}`);
  i.classList.remove('player--active');
  i.classList.add('player--winner');
  dice.classList.add('hidden');
};

rollDice.addEventListener('click', function() {
  if (isPlaying) {
    let number = Math.floor(Math.random() * 6) + 1;
    console.log(number);

    let src = `dice-${number}.png`;
    // switch (number) {
    //   case 1:
    //     src = 'dice-1.png';
    //     break;
    //   case 2:
    //     src = 'dice-2.png';
    //     break;
    //   case 3:
    //     src = 'dice-3.png';
    //     break;
    //   case 4:
    //     src = 'dice-4.png';
    //     break;
    //   case 5:
    //     src = 'dice-5.png';
    //     break;
    //   case 6:
    //     src = 'dice-6.png';
    //     break;
    // }
    dice.src = src;
    dice.classList.remove('hidden');
    console.log(dice.attributes.src);
    if (number != 1) {
      incScore(number);
    } else {
      makeScoreZero();
      changePlayer();
    }
  }
});

hold.addEventListener('click', function() {
  if (isPlaying) {
    console.log(score[0].textContent);
    if (currPlayer == 1)
      score1.textContent =
        Number(current1.textContent) + Number(score1.textContent);
    else
      score2.textContent =
        Number(current2.textContent) + Number(score2.textContent);

    makeScoreZero();

    //console.log(score1.textContent, score2.textContent);
    if (score1.textContent >= 50 || score2.textContent >= 50) {
      isPlaying = false;
      decWinner();
    } else changePlayer();
  }
});

newGame.addEventListener('click', init);

init();
