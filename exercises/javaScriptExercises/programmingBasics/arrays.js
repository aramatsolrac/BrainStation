const groceryList = ['Apples', 'Oranges', 'Cereal'];
console.log(groceryList[0]); // => Apples
console.log(groceryList[groceryList.length - 1]); // => Cereal
console.log(groceryList.slice(-1)[0]); // => Cereal
console.log(groceryList.slice(-1).pop()); // => Cereal

groceryList.push('Toilet paper');
console.log(groceryList); // => [ 'Apples', 'Oranges', 'Cereal', 'Toilet paper' ]
console.log(`Total items are: ${groceryList.length}`) // => 4


// Instructions
// Arrays
// Create an array containing three strings in a single line
const firstArray = ['Tamara', 'Selau', 'Carlos'];

// Use web development terms that you have learned so far for your string values
// Use the literal syntax
// console.log the array

console.log({ firstArray }) // => { firstArray: [ 'Tamara', 'Selau', 'Carlos' ] }

// console.log the first item in the array
console.log(firstArray[0]) // => Tamara

// console.log the last item in the array
console.log(firstArray[firstArray.length - 1]) // => Carlos

// What happens when you try to access an index that does not have an item?
console.log(firstArray[4]) // => undefined

// Create the same array that you did in step 1, but this time start with an empty array and then push your strings
// What is a return value of push operation?
// console.log this array to confirm it is same as your literal array
const secondArray = [];
secondArray.push(firstArray[0], firstArray[1], firstArray[2]);
console.log({ secondArray })


// pop and then console.log each of the items in this array
// How many items are in the array now?

secondArray.pop()
console.log({ secondArray }) // => { secondArray: [ 'Tamara', 'Selau' ] }


// Use square bracket syntax to set the value of literal array at index 1 to a new string
// console.log the array after setting the value of index 1
secondArray[1] = 'Preto';
console.log(secondArray); // => [ 'Tamara', 'Name' ]


// Now set a value at index 5 and console.log the resulting array. Observe what happens to values in indices between 3 and 5?

secondArray[5] = 'Rob';
console.log(secondArray); // => [ 'Tamara', 'Preto', <3 empty items>, 'Rob' ]

// Remove all undefined values from literal array using the splice function
secondArray.splice(2, 3);
console.log(secondArray);

// Objects
// Create an object that contains three properties using the literal syntax
// firstName
// Your first name as a string
// lastName
// Your last name as a string
// likesCoffee
// A boolean indicating whether or not you like coffee
const thirdArray = [{
    firstName: 'Tamara',
    middleName: 'Selau',
    lastName: 'Carlos',
    likeCoffee: true
}]

console.log(thirdArray)


// Create the same object, but this time start with an empty object and then add the properties
// const forthArray = [];
thirdArray.push({
    firstName: 'Preto',
    middleName: 'Selau',
    lastName: 'Carlos',
    likeCoffee: false
});
console.log({ thirdArray })


// Have at least one example of dot-notation assigning and one example of square brackets assigning
// console.log the firstName property of your object using dot-notation access
console.log(thirdArray[0].firstName) // => Tamara

// console.log the lastName property of your object using square brackets access
console.log(thirdArray[0].lastName) // => Carlos

// Create a variable named currentKey and set it’s value to ”firstName”.
const currentKey = thirdArray[0].firstName; // => { currentKey: 'Tamara' }
console.log({ currentKey })

// Using square bracket syntax and your new variable as a dynamic key, get a value of firstName of your object.
// Try changing the value of currentKey to lastName and likesCoffee to observe the dynamic functionality of using variables as keys
// const currentKey = thirdArray[0].lastName; // => { currentKey: 'Carlos' }
console.log({ currentKey })

// const currentKey = thirdArray[0].likeCoffee; // => { currentKey: true }
console.log({ currentKey })

// Add a new property to your object named areasOfExpertise and set the value to a literal array from Arrays exercise
thirdArray[0].areasOfExpertise = firstArray;
thirdArray[1].areasOfExpertise = firstArray;

// console.log your object and inspect it using Chrome Dev Tools
console.log(thirdArray)
    // [
    //     {
    //       firstName: 'Tamara',
    //       middleName: 'Selau',
    //       lastName: 'Carlos',
    //       likeCoffee: true,
    //       areasOfExpertise: [ 'Tamara', 'Selau', 'Carlos' ]
    //     },
    //     {
    //       firstName: 'Preto',
    //       middleName: 'Selau',
    //       lastName: 'Carlos',
    //       likeCoffee: false,
    //       areasOfExpertise: [ 'Tamara', 'Selau', 'Carlos' ]
    //     }
    // ]