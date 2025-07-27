function expenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalSum = 0;
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        let helmetBroken=false;
        let swordBroken=false;
        if (i % 2 == 0) {
            helmetCount++;
            helmetBroken=true;
        } 
        if (i % 3 == 0) {
            swordCount++;
            swordBroken=true;
        } 
        //if (i%6==0)
        if (helmetBroken && swordBroken) {
            shieldCount++;
            if (shieldCount % 2 === 0) {
                armorCount++;
            }
        }
    }
    totalSum = helmetCount * helmetPrice + swordCount * swordPrice
        + shieldCount * shieldPrice + armorCount * armorPrice;
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

expenses(7, 2, 3, 4, 5);