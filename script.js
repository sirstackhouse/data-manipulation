// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50?
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`The four numbers add up to 50 ${isSum50}`) // true

// Check two: at least two odd numbers?
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`Variables n2 and n4 are odd${isTwoOdd}`) // true

// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`There is no number larger than 25${isOver25}`) // ?

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique) // true

// Here, we put the results into a single variable
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(`The results/variables isSum50, isTwoOdd, isOver25 and isUnique combined${isValid}`) // true

//Check if all numbers are divisible by 5.
let allNumBy5 = (n1, n2, n3, n4) % 5 === 0;
console.log(`Verified that all numbers are divisible by 5 ${allNumBy5}`) // true

//Check if the first number is larger than the last.
let n1n4 = (n1 > n4);
console.log(`Verified the first number is larger than the last number ${n1n4}`) // true

//Subtract first number from second number
let nr = (n2-n1);
console.log(`Subtracted the first number from the second number ${nr}`) //  5

//Multiply the result by the third number
let n3n = (nr * n3);
console.log (`Multiplied 5(nr) by the third number(n3) ${n3n}`) // 100

//Find the remainder of dividing the result by the fourth number
let n4n = (n3n / n4);
console.log(`Divided 100(n3n) by 5(n4) to get ${n4n}`) // 20

let nchain = (n2 - n1) * n3 / n4;
console.log(nchain) // 20

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let lessThan25 = (n1, n2, n3, n4) < 25;
console.log(`Changed the way isOver25 calculates to ${lessThan25}`)


//Part 2: Practical Math
//Variables list
const mi = 1500;

const mph55 = 55;
const mph60 = 60;
const mph75 = 75;

const mpg30 = 30;
const mpg28 = 28;
const mpg23 = 23;

const bud = 175;
const cpg = 3;

//Scenario 1: 1500m @ 55mph
//How many gallons of fuel will you need for the entire trip?
let galneed1 = (mi / mpg30);
console.log(galneed1) // 50 gallons

//Will your budget be enough to cover the fuel expense?
let fuelex1 = bud > (galneed1 * cpg);
console.log(fuelex1)

//How long will the trip take, in hours?



//Scenario 2: 1500m @ 60mph
//How many gallons of fuel will you need for the entire trip?


//Will your budget be enough to cover the fuel expense?


//How long will the trip take, in hours?


//Scenario 3: 1500m @ 75mph
//How many gallons of fuel will you need for the entire trip?


//Will your budget be enough to cover the fuel expense?


//How long will the trip take, in hours?


//Which makes the most sense for the trip?