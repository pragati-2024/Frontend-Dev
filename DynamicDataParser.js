// DynamicDataParser.js
"use strict";

/*
 Tasks:
 1. Convert each value into Number, Boolean, String forms.
 2. Skip invalid numbers (NaN, " ", "100px") but log them separately.
 3. Build arrays: validNumbers, invalidNumbers.
 4. Print detailed report.
*/

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const report = [];

// helper to test if string is a valid numeric literal
function parseNumberSafe(value) {
  // Using Number() then isFinite to detect valid numeric conversions
  const num = Number(value);
  return Number.isFinite(num) ? num : NaN;
}

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  const asString = String(original);
  const asBoolean = Boolean(original); // JS truthiness
  const asNumber = parseNumberSafe(original);

  // Build per-item report
  const entry = {
    index: i,
    original,
    asString,
    asBoolean,
    asNumber: Number.isFinite(asNumber) ? asNumber : "Invalid Number"
  };

  if (Number.isFinite(asNumber)) {
    validNumbers.push(asNumber);
  } else {
    // Identify invalid numeric cases explicitly
    invalidNumbers.push({ index: i, original });
  }

  report.push(entry);
}

// Output
console.log("=== Detailed Conversion Report ===");
for (const r of report) {
  console.log(`Index ${r.index}: original =`, r.original,
    `| String: "${r.asString}"`,
    `| Boolean: ${r.asBoolean}`,
    `| Number: ${r.asNumber}`);
}

console.log("\nValid numeric values array:", validNumbers);
console.log("Invalid numeric entries:", invalidNumbers);
console.log("\nSummary:");
console.log(`Total values: ${apiData.length}`);
console.log(`Valid numbers: ${validNumbers.length}`);
console.log(`Invalid numbers: ${invalidNumbers.length}`);
