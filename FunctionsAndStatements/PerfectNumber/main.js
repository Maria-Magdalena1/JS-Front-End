function findPerfectNumber(number) {
    let sum=1;
    for (let i=2;i<=Math.floor(number/2);i++) {
        if (number%i===0) {
            sum+=i;
        }
    }

    if (number>0&&number===sum) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

findPerfectNumber(6);
