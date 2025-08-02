function division(num1,num2) {
    let firstFactorial=1;
    let secondFactorial=1;
    for (let i=num1;i>0;i--) {
        firstFactorial*=i;
    }

    for (let i=num2;i>0;i--) {
        secondFactorial*=i;
    }

    let result=firstFactorial/secondFactorial;
    console.log(`${result.toFixed(2)}`);
}

division(5,2);