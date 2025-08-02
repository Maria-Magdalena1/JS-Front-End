function repeat(text,times) {
    let result='';
    for (let i=0;i<times;i++) {
        result+=text;
    }

    return result;
}

let res=repeat("abc", 3);
console.log(res);