// NestedHoistingClosures.js
"use strict";

/*
 Code:
 function outer() {
   console.log(count);
   var count = 5;
   function inner() {
     console.log(count);
     var count = 10;
   }
   inner();
 }
 outer();

 Tasks:
 1. Predict & explain output
 2. Show hoisting memory contexts
 3. Convert inner to arrow and note differences
*/

function outer() {
  // Hoisting: `var count` declared at top of outer function scope with initial value undefined during creation phase
  console.log('outer before init count =>', count); // undefined (because var count hoisted)
  var count = 5;

  function inner() {
    // Inside inner, var count is hoisted to inner's top, so local `count` exists as undefined at start
    console.log('inner before init local count =>', count); // undefined (local shadowing)
    var count = 10;
    console.log('inner after init local count =>', count); // 10
  }

  inner();
  console.log('outer after inner count =>', count); // 5
}

outer();

/*
 Explanation:
 - outer: var count is hoisted in outer scope -> during first console.log it exists but is undefined.
 - inner: declares its own var count which shadows outer.count; inside inner, before initialization it's undefined; after assignment it's 10.
 - Output sequence:
   outer before init count => undefined
   inner before init local count => undefined
   inner after init local count => 10
   outer after inner count => 5
*/

// Arrow version for inner (behavior is the same regarding hoisting of var inside inner):
function outerWithArrow() {
  console.log('outerWithArrow before init count =>', countA); // undefined
  var countA = 5;

  const innerArrow = () => {
    console.log('innerArrow before init local count =>', countA_local); // ReferenceError if using let/const; but we will declare var to match behavior
    var countA_local = 10;
    console.log('innerArrow after init local count =>', countA_local);
  };

  try {
    innerArrow();
  } catch (err) {
    console.error('innerArrow error (due to trying to access local var before declaration):', err.message);
  }
  console.log('outerWithArrow after inner count =>', countA);
}

outerWithArrow();

/*
 Debugging:
 - Set breakpoints at each console.log to inspect activation records and see how each function has its own variable environment.
 - The call stack will show outer -> inner while inner runs.
*/
