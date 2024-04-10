// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50?
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50) // true

// Check two: at least two odd numbers?
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd) // true

// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25) // ?

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique) // true

// Here, we put the results into a single variable
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid)

//Check if all numbers are divisible by 5.
let allNumBy5 = (n1, n2, n3, n4) % 5 === 0;
console.log(allNumBy5)

//Check if the first number is larger than the last.
let n1n4 = (n1 > n4);
console.log(n1n4)

//Subtract first number from second number
let nr = (n1-n2);
console.log(nr)