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