function sumDigits(number) {
    let sum=0;
    while (number>0) {
        let currentDigit=number%10;
        sum+=currentDigit;
        number=Math.floor(number/10);
    }
    console.log(sum);
}

sumDigits(245678);