const groceryList = ['Apples', 'Oranges', 'Cereal'];
console.log(groceryList[0]); // => Apples
console.log(groceryList[groceryList.length - 1]); // => Cereal
console.log(groceryList.slice(-1)[0]); // => Cereal
console.log(groceryList.slice(-1).pop()); // => Cereal

groceryList.push('Toilet paper');
console.log(groceryList); // => [ 'Apples', 'Oranges', 'Cereal', 'Toilet paper' ]
console.log(`Total items are: ${groceryList.length}`) // => 4