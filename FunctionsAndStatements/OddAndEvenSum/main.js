function sums(number) {
    let sumEven=0;
    let sumOdd=0;

    while (number>0) {
        let digit=number%10;
        if (digit%2==0) {
            sumEven+=digit;
        } else {
            sumOdd+=digit;
        }

        number=Math.floor(number/10);

    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}


sums(1000435);