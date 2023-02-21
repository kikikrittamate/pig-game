'use strict';

// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

// button Roll function
btnRoll.addEventListener('click', function () {
  // Roll
  const diceScore = Math.trunc(Math.random() * 6) + 1;

  // Show the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceScore}.png`;

  // Check if diceScore is 1, switch to the next player
  if (diceScore !== 1) {
    currentScore += diceScore;
    current0.textContent = currentScore; //change later
  } else {
    //switch player
  }
});
