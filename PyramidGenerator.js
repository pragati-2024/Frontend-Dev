// PyramidGenerator.js
"use strict";

/*
 Tasks:
 - Generate a pyramid pattern
 - Replace let with var and observe behavior
 - Add outer loop limit via user input (default = 5)
*/

function generatePyramid(limit = 4) {
  for (let i = 1; i <= limit; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }
}

console.log("Default pyramid (4):");
generatePyramid(4);

console.log("\nUser-controlled (default 5):");
generatePyramid(5);

// If you replace let with var inside loops, the variables are function-scoped which may cause unexpected behavior if closures are created inside.
// Using "use strict" helps catch any accidental globals.
