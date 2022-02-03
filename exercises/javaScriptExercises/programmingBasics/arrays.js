const groceryList = ['Apples', 'Oranges', 'Cereal'];
console.log(groceryList[0]); // => Apples
console.log(groceryList[groceryList.length - 1]); // => Cereal
console.log(groceryList.slice(-1)[0]); // => Cereal
console.log(groceryList.slice(-1).pop()); // => Cereal

groceryList.push('Toilet paper');
console.log(groceryList); // => [ 'Apples', 'Oranges', 'Cereal', 'Toilet paper' ]
console.log(`Total items are: ${groceryList.length}`) // => 4


// Arrays
const firstArray = ['Tamara', 'Selau', 'Carlos'];

console.log({ firstArray }) // => { firstArray: [ 'Tamara', 'Selau', 'Carlos' ] }

// console.log the first item in the array
console.log(firstArray[0]) // => Tamara

// console.log the last item in the array
console.log(firstArray[firstArray.length - 1]) // => Carlos

console.log(firstArray[4]) // => undefined

const secondArray = [];
secondArray.push(firstArray[0], firstArray[1], firstArray[2]);
console.log({ secondArray })


// pop and then console.log each of the items in this array
secondArray.pop()
console.log({ secondArray }) // => { secondArray: [ 'Tamara', 'Selau' ] }


// Use square bracket syntax to set the value of literal array at index 1 to a new string
secondArray[1] = 'Preto';
console.log(secondArray); // => [ 'Tamara', 'Name' ]


// Now set a value at index 5 and console.log the resulting array.
secondArray[5] = 'Rob';
console.log(secondArray); // => [ 'Tamara', 'Preto', <3 empty items>, 'Rob' ]

// Remove all undefined values from literal array using the splice function
secondArray.splice(2, 3);
console.log(secondArray);


// Objects
const thirdArray = [{
    firstName: 'Tamara',
    middleName: 'Selau',
    lastName: 'Carlos',
    likeCoffee: true
}]

console.log(thirdArray)


thirdArray.push({
    firstName: 'Preto',
    middleName: 'Selau',
    lastName: 'Carlos',
    likeCoffee: false
});
console.log({ thirdArray })
console.log(thirdArray[0].firstName) // => Tamara
console.log(thirdArray[0].lastName) // => Carlos

const currentKey = thirdArray[0].firstName; // => { currentKey: 'Tamara' }
console.log({ currentKey })

const currentKey = thirdArray[0].lastName;
console.log({ currentKey }) // => { currentKey: 'Carlos' }

const currentKey = thirdArray[0].likeCoffee; // => { currentKey: true }
console.log({ currentKey })

thirdArray[0].areasOfExpertise = firstArray;
thirdArray[1].areasOfExpertise = firstArray;

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