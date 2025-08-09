function solve(arr) {
    let herosStats = {};
    const herosCount = Number(arr.shift());

    for (let i = 0; i < herosCount; i++) {
        let heroStr = arr.shift();
        let [heroName, hp, bullets] = heroStr.split(' ');
        hp = Number(hp);
        bullets = Number(bullets);

        herosStats[heroName] = { hp, bullets };
    }
    let command = arr.shift();

    while (command !== 'Ride Off Into Sunset') {
        const tokens = command.split(' - ');
        let action = tokens.shift();
        let heroName = tokens.shift();

        if (action === 'FireShot') {
            let target = tokens.shift();

            if (herosStats[heroName].bullets > 0) {
                herosStats[heroName].bullets -= 1;
                console.log(`${heroName} has successfully hit ${target} and now has ${herosStats[heroName].bullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (action === 'TakeHit') {
            let damage = Number(tokens.shift());
            let attacker = tokens.shift();

            herosStats[heroName].hp -= damage;
            if (herosStats[heroName].hp > 0) {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${herosStats[heroName].hp} HP!`);
            } else {
                console.log(`${heroName} was gunned down by ${attacker}!`);
                delete herosStats[heroName];
            }
        } else if (action === 'Reload') {
            if (herosStats[heroName].bullets<6) {
                const bulletsReloaded=6-herosStats[heroName].bullets;
                herosStats[heroName].bullets+=bulletsReloaded;
                console.log(`${heroName} reloaded ${bulletsReloaded} bullets!`);
            } else {
                console.log(`${heroName}'s pistol is fully loaded!`);
            }
        } else if (action === 'PatchUp') {
            let amount=Number(tokens.shift());
            if (herosStats[heroName].hp<100) {
                if (herosStats[heroName].hp+amount>100) {
                    amount=100-herosStats[heroName].hp;
                }
                herosStats[heroName].hp+=amount;
                console.log(`${heroName} patched up and recovered ${amount} HP!`);
            } else {
                console.log(`${heroName} is in full health!`);
            }
        }

        command = arr.shift();
    }

    const entries=Object.entries(herosStats);
    for (let [heroName,stats] of entries) {
        console.log(`${heroName}\n HP: ${stats.hp}\n Bullets: ${stats.bullets}`);

    }

}
//solve(["2",
//    "Jesse 100 4",
//    "Walt 100 5",
//    "FireShot - Jesse - Bandit",
//    "TakeHit - Walt - 30 - Bandit",
//    "PatchUp - Walt - 20",
//    "Reload - Jesse",
//    "Ride Off Into Sunset"])
//    ;