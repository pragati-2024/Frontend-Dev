// StrictModeShowdown.js

/*
 Code to test:
 function demo(a, a) {
   total = 10;
   delete total;
 }
 demo(5, 10);

 Tasks:
 1. Run with and without strict mode
 2. Explain errors
 3. Provide correct ES6 version
*/

// Without 'use strict', duplicate parameters may be allowed in non-strict legacy JS, and assignment to undeclared global `total` will create a global variable.
// With 'use strict', duplicate parameter names are a SyntaxError and assigning to undeclared variables throws ReferenceError. delete of non-configurable variable will also fail.

console.log("Strict mode enabled test:");

(function () {
  "use strict";
  try {
    // Duplicate parameter names are SyntaxError in strict mode; we cannot define function demo(a,a) at runtime here.
    // Instead demonstrate the two problems separately.

    // Problem 1: assignment to undeclared variable throws ReferenceError
    try {
      total = 10; // ReferenceError in strict
    } catch (err) {
      console.error("Error assigning undeclared variable in strict mode:", err.message);
    }

    // Problem 2: delete of plain variable or non-configurable property
    const obj = {};
    Object.defineProperty(obj, 'x', { value: 1, configurable: false });
    try {
      delete obj.x; // returns false in non-strict, but in strict throws TypeError
    } catch (err) {
      console.error("Error deleting non-configurable property in strict mode:", err.message);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
})();

// Correct ES6 version (no duplicate params, declare variables properly):
function demoCorrect(a, b) {
  let total = 10;
  // delete total; // cannot delete local variables - not needed
  return a + b + total;
}
console.log("demoCorrect result:", demoCorrect(5, 10));
