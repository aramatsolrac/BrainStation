function avg(num1, num2, num3) {
    const sum = num1 + num2 + num3 / 3;
    return Math.floor(sum);
}

console.log(avg(5, 12, 5)); // => 18


function isEqual(string1, string2) {
    if (string1 === string2) {
        return true
    } else {
        return false
    }
}

console.log(isEqual('cat', 'dog')) // => false

function output(sth) {
    // console.log(sth)
    return
}

console.log(output(1)); // => undefined

// Advanced Functions

const outputName = function(name) {
    return `Your name is: ${name}`
}

console.log(outputName('Tamara')); // => Your name is: Tamara

function sayMyName(firstName, lastName, outputName) {
    return outputName(`${firstName} ${lastName}`);
}
const myName = sayMyName('Tamara', 'Carlos', outputName);
setTimeout(() => { console.log(myName) }, 1000); // => Your name is: Tamara Carlos


// Arrow function
const sayMyName = (firstName, lastName, outputName) => { return outputName(`${firstName} ${lastName}`) };
const myName = sayMyName('Tamara', 'Carlos', outputName);
console.log(myName)
setTimeout(() => { console.log(myName) }, 1000); // => Your name is: Tamara Carlos