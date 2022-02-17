// get and set

class Product {
    constructor(name, price, discountable) {
        this._name = name;
        this._price = price;
        this.discountable = discountable;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        if (typeof price !== "number") {
            return this._price;
        } else {
            this._price = price;
        }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name !== "string") {
            return this._name;
        } else {
            this._name = name;
        }
    }
}

// const product1 = new Product("Coffee Maker", 99.95, false);
// product1.price = 30;
// console.log(product1.price);

// product1.name = "Test";
// console.log(product1.name);


// .bind
const isAuth = true;
const user = {
    favorites: []
};

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.favoriteProduct = this.favoriteProduct.bind(this);
    }

    handleFavoriteProduct = () => {
        if (isAuth) {
            setTimeout(this.favoriteProduct, 1000);
        } else {
            console.log("You must be signed in to favorite products!");
        }
    }

    favoriteProduct = () => {
        user.favorites.push(this.name);
        console.log(`${this.name} favorited!`);
    }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()