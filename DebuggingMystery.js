// DebuggingMystery.js
"use strict";

/*
 Problem:
 greeting = "Welcome"; // undeclared assignment in strict mode throws ReferenceError

 Tasks:
 1. Explain why error occurs
 2. Fix it by declaring variable
 3. Add watch in debugger (explain in comments)
*/

function showMessage() {
  // Under strict mode you must declare variables with let/const/var
  let greeting = "Welcome"; // fixed: declare variable
  console.log(greeting);
}

showMessage();

/*
 Explanation:
 - In non-strict mode, `greeting = "Welcome"` would have created a global variable implicitly.
 - In strict mode, implicit global creation is disallowed and a ReferenceError is thrown.
 - Fix: declare the variable using let/const/var so it's properly scoped.
 - To debug: set a breakpoint on the line `let greeting...` and add `greeting` to Watch in VS Code to observe the call stack.
*/
