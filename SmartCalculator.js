// SmartCalculator.js
"use strict";

/*
 operations: add, divide, power, root, subtract
 Handle divide-by-zero and root-of-negative via custom errors
 Throw InvalidOperationError for unknown operations
*/

class InvalidOperationError extends Error {}
class MathDomainError extends Error {} // e.g., root of negative
class DivideByZeroError extends Error {}

function calculate(operation, a, b) {
  switch ((operation || '').toLowerCase()) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'divide':
      if (b === 0) throw new DivideByZeroError('Division by zero');
      return a / b;
    case 'power':
      return Math.pow(a, b);
    case 'root':
      if (a < 0) throw new MathDomainError('Root of negative number');
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError(`Unknown operation: ${operation}`);
  }
}

// Example usage:
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

for (const op of operations) {
  try {
    const res = calculate(op, num1, num2);
    console.log(`Operation ${op} => Result: ${res}`);
  } catch (err) {
    if (err instanceof DivideByZeroError) {
      console.error(`Operation ${op} failed: divide by zero`);
    } else if (err instanceof MathDomainError) {
      console.error(`Operation ${op} failed: invalid domain`);
    } else if (err instanceof InvalidOperationError) {
      console.error(`Operation ${op} failed: invalid operation`);
    } else {
      console.error(`Operation ${op} failed: ${err.message}`);
    }
  }
}
