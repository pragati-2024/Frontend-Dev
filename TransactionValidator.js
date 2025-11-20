// TransactionValidator.js
"use strict";

/*
 Tasks:
 - Loop transactions
 - Throw custom errors for negative amount, missing fields, null entries
 - Catch and categorize into arrays (invalid, valid)
 - Print final reports
*/

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {
  constructor(type, message, transaction) {
    super(message);
    this.type = type; // e.g., 'NegativeAmount', 'MissingField', 'NullEntry'
    this.transaction = transaction;
  }
}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    if (tx === null) throw new TransactionError('NullEntry', 'Transaction is null', tx);
    if (typeof tx !== 'object') throw new TransactionError('InvalidType', 'Transaction is not an object', tx);
    if (!('id' in tx)) throw new TransactionError('MissingField', 'Missing id', tx);
    if (!('amount' in tx)) throw new TransactionError('MissingField', 'Missing amount', tx);
    if (typeof tx.amount !== 'number') throw new TransactionError('InvalidAmountType', 'Amount must be a number', tx);
    if (tx.amount < 0) throw new TransactionError('NegativeAmount', 'Amount cannot be negative', tx);

    // If all good
    valid.push(tx);
  } catch (err) {
    invalid.push({ errorType: err.type || 'Unknown', message: err.message, transaction: err.transaction || tx, index: i });
    console.warn(`Transaction at index ${i} failed:`, err.message);
  }
}

console.log("\n--- Final Report ---");
console.log("Valid transactions count:", valid.length);
console.log("Invalid transactions count:", invalid.length);
console.log("Valid transactions:", valid);
console.log("Invalid transactions details:", invalid);
