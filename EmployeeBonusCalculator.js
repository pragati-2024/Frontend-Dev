// EmployeeBonusCalculator.js
"use strict";

/*
  Tasks:
 1. Convert salary and years to numbers.
 2. bonus = salary*0.1 if years > 3 else salary*0.05
 3. strict mode enforced
 4. template strings for output
 5. try...catch to handle problems
*/

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function parseEmployee(emp) {
  if (!emp || typeof emp !== 'object') throw new Error('Invalid employee entry');
  const name = emp.name;
  if (!name) throw new Error('Missing name property');

  const salary = Number(emp.salary);
  const years = Number(emp.years);

  if (!Number.isFinite(salary)) throw new Error(`Invalid salary for ${name}`);
  if (!Number.isFinite(years)) throw new Error(`Invalid years for ${name}`);

  return { name, salary, years };
}

for (const raw of employees) {
  try {
    const { name, salary, years } = parseEmployee(raw);
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    const totalPay = salary + bonus;
    console.log(`Employee: ${name} | Salary: ₹${salary.toFixed(2)} | Years: ${years} | Bonus: ₹${bonus.toFixed(2)} | Total: ₹${totalPay.toFixed(2)}`);
  } catch (err) {
    console.error("Error processing employee:", err.message);
  }
}
