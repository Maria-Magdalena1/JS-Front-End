class Storage{
    constructor(capacity) {
        this.capacity=capacity;
        this.storage=[];
        this.totalCost=0;
    }

    addProduct(product) {

        let existingProduct = this.storage.find(p => p.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            this.storage.push({ name: product.name, price: product.price, quantity: product.quantity });
        }
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        return this.storage.map(p => JSON.stringify(p)).join('\n');
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
