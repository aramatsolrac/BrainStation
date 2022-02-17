class Burger {
    constructor(toppings, protein, containsGluten) {
        this.toppings = toppings;
        this.protein = protein;
        this.containsGluten = containsGluten;

    }

    warning() {
        if (this.containsGluten) {
            console.log(`contains gluten.`)
        } else {
            console.log(`is gluten free.`)
        }
    }

    describe() {
        return this.toppings;
    }
}

const burgerBeef = new Burger(['cheese', 'tomato'], 'beef', true);
const burgerChicken = new Burger(['lettuce', 'tomato'], 'chicken', false);

burgerBeef.warning()
burgerChicken.warning()
console.log({ burgerBeef });
console.log({ burgerChicken });

class BurgerWithSide extends Burger {
    constructor(toppings, protein, containsGluten, side) {
        super(toppings, protein, containsGluten, side);
        this.side = side;

    }

    friesWithThat() {
        if (this.side === "fries") {
            console.log(` with fries.`)
        } else {
            console.log(` without fries.`)
        }
    }
}

const burgerWithFries = new BurgerWithSide(['cheese', 'tomato'], 'beef', true, 'FrieS'.toLowerCase());

burgerWithFries.friesWithThat();
console.log(burgerWithFries)

function describeAll(describeFunctions) {
    return describeFunctions.map((describeFunction) => {
        return describeFunction();
    });
}

const burgersDescribeArr = [
    burgerBeef.describe.bind(burgerBeef),
    burgerChicken.describe.bind(burgerChicken),
    burgerWithFries.describe.bind(burgerWithFries)
];

console.log(describeAll(burgersDescribeArr));