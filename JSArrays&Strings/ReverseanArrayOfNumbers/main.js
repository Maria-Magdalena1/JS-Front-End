function reverse(n,inputArr) {
    let resultArray=[];
    for (let i=0;i<n;i++) {
        resultArray.push(inputArr[i]);
    }

    let output='';
    for (let i=n-1;i>=0;i--) {
        output+=resultArray[i]+' ';
    }

    console.log(output.trim());
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);