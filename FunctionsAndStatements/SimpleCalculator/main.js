function calculator(numOne, numTwo, operator) {
    let result=0;
    switch (operator) {
        case "multiply":
            //multiply(a,b);
            result=(a,b)=>a*b;
            break;
        case "divide":
            result=(a,b)=>a/b;
            break;
        case "add":
            result=(a,b)=>a+b;
            break;
        case "subtract":
            result=(a,b)=>a-b;
            break;
    }
    console.log(result(numOne,numTwo));
    //function multiply(a,b) {
    //    return a*b;
    //}
}

calculator(5,5,'multiply');