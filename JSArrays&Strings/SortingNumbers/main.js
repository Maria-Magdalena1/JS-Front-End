function sorting(array) {
    let newArray = [];
    array =array.sort((a, b) => a - b);
    while (array.length > 0) {
        let smallest = array.shift();
        newArray.push(smallest);
        if (array.length > 0) {
            let biggest = array.pop();
            newArray.push(biggest);
        }
    }
    return newArray;
}


let result=sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(result);