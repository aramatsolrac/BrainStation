// Conditionals

// If/Else
const time = 10;

function isInTime() {
    if (time < 10) {
        return `You're early!`
    } else if (time === 10) {
        return `You're on-time`
    } else {
        return `You're late!`
    }
}

console.log(isInTime())


const timeOfWeek = 'weekday';

function whatTimeIs() {
    if (timeOfWeek === 'weekend') {
        return `You shouldn't be in class!`
    } else {
        return `Let's study!`
    }
}

console.log(whatTimeIs())


// Switch
const facialExpression = 'smiling';

function howAreYou() {
    switch (facialExpression) {
        case 'smiling':
            return `You look happy`;
            break
        case 'frowning':
            return `You look sad`;
            break
        case 'scowl':
            return `You look angry`;
            break
        default:
            return `I don't know`
    }
}

console.log(howAreYou());

// Loops
// For Loops
const famousCats = ["garfield", "felix", "meowth"];

function allCats() {
    for (let i = 0; i < famousCats.length; i++) {
        console.log(famousCats[i]);
    }
}
allCats()


// While Loops
let i = 0;

function myFavouriteCatIs() {
    while (i < famousCats.length) {
        console.log(famousCats[i]);
        i++
    }
}
allCats()


// Terminating a For Loop
const myFavourite = `garfield`;

function myFavouriteCatIs() {
    for (let i = 0; i < famousCats.length; i++) {
        if (myFavourite === `garfield`) {
            console.log(`There you are!`);
            break
        } else {
            console.log(`Kitty?`);
        }
    }
}

myFavouriteCatIs()


// Terminating a While Loop
let i = 0;

function myFavouriteCatIs() {
    while (i < famousCats.length) {
        if (myFavourite === `garfield`) {
            console.log(`There you are!`);
            break
        } else {
            console.log(`Kitty?`);
        }
        i++

    }
}

myFavouriteCatIs()