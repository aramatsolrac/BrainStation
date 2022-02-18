const Burger = function Burger(toppings, protein, containsGluten, describe) {
    this.toppings = toppings;
    this.protein = protein;
    this.containsGluten = containsGluten;
    this.describe = describe;
}

const BurgerBeef = new Burger(['cheese', 'tomato'], 'beef', true, 'Beef Burger');
const BurgerChicken = new Burger(['lettuce', 'tomato'], 'chicken', false, 'Chicken Burger');

Burger.prototype.warning = function() {
    if (this.containsGluten) {
        console.log(`${this.describe} contains gluten.`)
    } else {
        console.log(`${this.describe} is gluten free.`)
    }
}

BurgerBeef.warning()
BurgerChicken.warning()
console.log({ BurgerBeef });
console.log({ BurgerChicken });