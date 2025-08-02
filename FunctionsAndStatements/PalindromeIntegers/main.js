function isPalindrome(arr) {

    for (let i=0;i<arr.length;i++) {
        let number=arr[i].toString();
        //let number=String(arr[i]);
        let reversed='';
        for (let j=number.length-1;j>=0;j--) {
            reversed+=number[j];
        }

        if (number===reversed) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

isPalindrome([123,323,421,121]);