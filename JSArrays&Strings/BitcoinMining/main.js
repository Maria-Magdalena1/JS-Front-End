function solve(arr) {
    let sum = 0;
    let boughtBitcoins = 0;
    let day = 1;
    for (let i = 1; i <= arr.length; i++) {
        let currentDay = arr[i - 1];
        if (i % 3 == 0) {
            currentDay -= currentDay * 0.30;
        }
        let currentSum = currentDay * 67.51;
        sum += currentSum;
        while (sum >= 0) {
            if (sum >= 11949.16) {
                boughtBitcoins++;
                if (boughtBitcoins == 1) {
                    day = i;
                }
                sum -= 11949.16;
            } else {
                break;
            }
        }
    }
    console.log(`Bought butcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log("Left money: " + sum.toFixed(2) + " lv.");
}

solve([100, 200, 300]);