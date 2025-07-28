function solve(array) {
    array = array.sort();
    let count=1;
    for(let i=0;i<array.length;i++) {
        console.log(`${count}.${array[i]}`);
        count++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);