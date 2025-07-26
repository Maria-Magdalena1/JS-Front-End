function solve(number) {
    let sum=0;
    let numberAsString=number.toString();
    let firstDigit=numberAsString[0];
    let allSame=true;

    for (let i=0;i<numberAsString.length;i++) {
        sum+=Number(numberAsString[i]);
        if (numberAsString[i]!==firstDigit) {
            allSame=false;
        }
    }
    console.log(allSame);
    console.log(sum);
}

solve(2222222);