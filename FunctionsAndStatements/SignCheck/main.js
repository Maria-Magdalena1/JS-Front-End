function signCheck(numOne,numTwo,numThree) {
    let isPositive=false;
    if (numOne>0&&numTwo<0&&numThree<0) {
        isPositive=true;
    } else if(numOne>0&&numTwo>0&&numThree>0) {
        isPositive=true;
    } else if(numOne<0&&numTwo>0&&numThree<0) {
        isPositive=true;
    } else if(numOne<0&&numTwo<0&&numThree>0) {
        isPositive=true;
    } else {
        isPositive=false;
    }

    if (isPositive) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5,12,-15);
