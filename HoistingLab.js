// HoistingLab.js
"use strict";

/*
 Original snippet:
 console.log(score);
 announce();
 var score = 50;
 function announce() { console.log("Game started"); }
 let status = "ready";
 startGame();
 function startGame() { console.log(status); }

 Tasks:
 1. Explain hoisting states
 2. Fix code
 3. Rewrite using arrow functions
*/

// Explanation (brief):
// - Function declarations are hoisted fully (announce and startGame available).
// - var declarations are hoisted but initialized to undefined (score is undefined at first log).
// - let/const are hoisted into TDZ (temporal dead zone) and cannot be used before declaration (accessing status before declaration throws ReferenceError).

// Fixed version:
var score = 50;
console.log(score);
announce();

function announce() {
  console.log("Game started");
}

let status = "ready";
startGame();

function startGame() {
  console.log(status);
}

// Arrow function rewrite (note: function declarations hoisting differs from const-arrow)
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = (s) => console.log(s);

// Use explicit order to avoid TDZ or undefined issues
announceArrow();
startGameArrow(status);
