const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const myName = letters[19] + letters[0] + letters[12] + letters[0] + letters[17] + letters[0];
const nameCapitalized = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();

console.log(nameCapitalized); // => TAMARA