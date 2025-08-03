function catalog(input) {
    let products={};

    for (let line of input) {
        let [name,price]=line.split(' : ');
        let initial=name[0];

        if (!products[initial]) {
            products[initial]=[];
        }

        products[initial].push({name,price:Number(price)});
    }

    let sortedInitials=Object.keys(products).sort((a,b)=>a.localeCompare(b));

    for (let initial of sortedInitials) {
        console.log(initial);
        let sortedProducts=products[initial].sort((a,b)=>a.name.localeCompare(b.name));
        for (let product of sortedProducts) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}


catalog([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]);