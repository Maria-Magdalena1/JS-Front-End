function solve(arr) {
    const n = arr.shift();
    let warriors = {};
    for (let i = 0; i < n; i++) {
        let line = arr.shift().split('-');
        let warriorName = line.shift();
        let weapon = line.shift();
        let strength = Number(line.shift());

        warriors[warriorName] = {
            weapons: [weapon],
            strength: strength
        };

    }

    let input = arr.shift();
    while (input !== 'The Saga Ends') {
        let tokens = input.split(' -> ');
        let command = tokens.shift();
        let warriorName = tokens.shift();

        if (!warriors[warriorName] || warriors[warriorName].strength <= 0) {
            continue;
        }

        if (command === 'Raid') {
            let weapon = tokens.shift();
            let strengthRequired = Number(tokens.shift());

            if (warriors[warriorName].weapons.includes(weapon) && warriors[warriorName].strength >= strengthRequired) {
                warriors[warriorName].strength -= strengthRequired;
                console.log(`${warriorName} fought bravely with ${weapon} and now has ${warriors[warriorName].strength} strength!`);
            } else {
                console.log(`${warriorName} couldn't join the raid with ${weapon}!`);
            }
        } else if (command === 'Train') {
            let strengthGained = Number(tokens.shift());

            if (warriors[warriorName].strength === 100) {
                console.log(`${warriorName} is already at full strength!`);
            } else {
                if (warriors[warriorName].strength + strengthGained > 100) {
                    strengthGained -= 100 - warriors[warriorName].strength;
                    warriors[warriorName].strength += strengthGained;
                }
                console.log(`${warriorName} trained hard and gained ${strengthGained} strength!`);
            }

        } else if (command === 'Forge') {
            let newWeapon = tokens.shift();
            if (warriors[warriorName].weapons.includes(newWeapon)) {
                console.log(`${warriorName} already wields ${newWeapon}.`);
            } else {
                warriors[warriorName].weapons.push(newWeapon);
                console.log(`${warriorName} has forged a new weapon: ${newWeapon}!`);
            }
        }

        input = arr.shift();
    }

    let entries = Object.entries(warriors);
    for (let [warriorName, data] of entries) {
        if (data.strength > 0) {
            console.log(`Warrior: ${warriorName}`);
            console.log(`- Weapons: ${data.weapons.join(", ")}`);
            console.log(`- Strength: ${data.strength}`);
        }
    }
}
solve([

    "3",

    "Ragnar-Axe-80",

    "Lagertha-Spear-95",

    "Bjorn-Sword-100",

    "Raid -> Ragnar -> Axe -> 30",

    "Forge -> Ragnar -> Shield",

    "Train -> Lagertha -> 10",

    "Train -> Bjorn -> 5",

    "Forge -> Lagertha -> Spear",

    "The Saga Ends"

]);