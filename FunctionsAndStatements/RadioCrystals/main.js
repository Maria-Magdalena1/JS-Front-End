function processCrystals(input) {
    const target = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`);

        crystal = processOperation(crystal, target, "Cut", cut);
        crystal = processOperation(crystal, target, "Lap", lap);
        crystal = processOperation(crystal, target, "Grind", grind);
        crystal = processOperation(crystal, target, "Etch", etch);

        if (crystal + 1 === target) {
            crystal++;
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${crystal} microns`);
    }
}

function cut(x) {
    return x / 4;
}

function lap(x) {
    return x * 0.8;
}

function grind(x) {
    return x - 20;
}

function etch(x) {
    return x - 2;
}

function transportAndWash(x) {
    console.log("Transporting and washing");
    return Math.floor(x);
}

function processOperation(crystal, target, name, operation) {

    let count = 0;
    let temp = operation(crystal);
    while (temp >= target - 1) {
        crystal = temp;
        count++;
        temp = operation(crystal);
    }

    if (count > 0) {
        console.log(`${name} x${count}`);
        crystal = transportAndWash(crystal);
    }

    return crystal;
}

processCrystals([1375, 50000]);