function money(fruit,grams,price) {
    let gramsInKilo=grams/1000;
    let sum=gramsInKilo*price;
    console.log(`I need $${sum.toFixed(2)} to buy ${gramsInKilo.toFixed(2)} kilograms ${fruit}`);
}

money('orange',2500,1.80);