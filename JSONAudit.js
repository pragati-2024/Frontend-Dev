// JSONAudit.js
"use strict";

/*
 Tasks:
 - Parse each JSON string safely with try/catch
 - Detect missing keys (user, age)
 - Push valid entries to clean array; log errors with line numbers
 - Bonus: convert age to Number; filter under-18 users
*/

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const obj = JSON.parse(line);
    if (!('user' in obj) || !('age' in obj)) {
      throw new Error(`Missing keys. Required: user, age. Found keys: ${Object.keys(obj).join(',')}`);
    }
    // Convert age to number
    obj.age = Number(obj.age);
    if (!Number.isFinite(obj.age)) throw new Error('Age is not a valid number');
    clean.push(obj);
  } catch (err) {
    errors.push({ index: i, data: line, message: err.message });
    console.warn(`Error parsing line ${i}: ${err.message}`);
  }
}

console.log("\nValid parsed entries:", clean);
console.log("\nErrors with line numbers:", errors);

// Bonus: filter under-18
const under18 = clean.filter(u => u.age < 18);
console.log("\nUnder 18 users:", under18);
