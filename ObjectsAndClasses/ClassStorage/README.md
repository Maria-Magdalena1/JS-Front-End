# JS Front-End

## Class Storage

### Description
    Create a class Storage. It should have the following properties, while the constructor should only receive a capacity:
        •	capacity – a number that decreases when adding a given quantity of products to storage
        •	storage – list of products (object). Each product should have:
            o	name - a string
            o	price – a number (price is for a single piece of product)
            o	quantity – a number
        •	totalCost – the sum of the cost of the products
    The class should also have the following methods:
        •	addProduct – a function that receives a product and adds it to the storage
        •	getProdcuts – a function that returns all the products in storage in JSON format, each on a new line
