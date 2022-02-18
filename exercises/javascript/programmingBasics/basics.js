// 1. Write a statement that adds the numbers 3 and 5 and stores it in a variable.
const numbers = [3, 5];
console.log({ numbers }); // => [ 3, 5 ]

const three = 3;
const five = 5;
const answer = `${three}, ${five}`;
console.log({ answer }); // => 3, 5

// 2. Create two string variables, one containing your first name and the other containing your last name.
// Concatenate them to display your full name.
const firstName = 'Tamara';
const lastName = 'Carlos';
console.log(`${firstName} ${lastName}`); // => Tamara Carlos

// 3. Create two boolean variables (one true and one false). OR (||) and AND (&&) the variables together then inspect the result.
const isItFalse = false;
const isItTrue = true;
console.log(isItFalse || isItTrue); // => true
console.log(isItFalse && isItTrue) // => false

// 4. In one line, add 3 and 5 together and then multiply the result by 11.
// The final result should be 88.
console.log((3 + 5) * 11); // => 88

// 5. Write a comparison expression that evaluates to true.
console.log(typeof five === "number"); // => true

// 6. Write a comparison expression that evaluates to false.
console.log(typeof lastName === 1); // => false

// Bonus: do it by changing only one character from exercise 5.
console.log(typeof five !== "number"); // => false

// 7. Write a comparison expression using a greater-than or less-than operator.
console.log(10 > 0); // => false

// 8. Write a comparison expression between 2 and ”2” using == and === operators, are the results different?
console.log(2 == "2"); // => true
console.log(2 === "2"); // => false

// 9. Find the remainder of 10 / 3.
console.log(10 % 3); // =>
// 10. Create variables for all available JS primitive types and inspect their type using typeof operator.
// Bonus: create a variable without value set and inspect its type.
let isString = 'I am string';
let isNumber = 1;
let isBoolean = false;
let isUndefined;

console.log(typeof isString); // => string
console.log(typeof isNumber); // => number
console.log(typeof isBoolean); // => boolean
console.log(typeof isUndefined); // => undefined


// 11. Create a function called addNumber that takes two arguments, num1 and num2 and returns the sum of the numbers.
// The result of the addNumber(17, 25) invocation should be 42.

function addNumber(num1, num2) {
    return num1 + num2;
}

console.log(addNumber(17, 25))




/* Follow the instructions below */

// e.g. Print out the string 'Hello World'
console.log('Hello World'); // => Hello World

// Create a variable called 'a' with the value of 1

const a = 1;

// Check the type of 'a' using 'typeof'. Use console.log() to see the result

console.log(typeof a); // => number

// Create another variable called 'b' with the value of 2

const b = 2;

// Create another variable called 'sum' that is
// the result of adding 'a' and 'b' together
const sum = a + b;

// Print out the sum
console.log(sum); // => 3

// Print out the value of 10 divided by 3
console.log(sum / 3); // => 1

// Print out the remainder of 10 divided by 3 using %
console.log(10 % 3); // => 1


// Print out the value of 1 + '1'.
console.log(1 + '1'); // = 11

// What is the result? Why? How could you get the expected result?
//'1' is a String, so it will be add beside number 1 instead of sum it.