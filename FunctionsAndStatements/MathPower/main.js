function calculate(number, power) {
    let result = 1;
    for (let i=0;i<power;i++) {
        result*=number;
    }
    console.log(result);
}

calculate(2,8);