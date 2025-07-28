function rotation(array,count) {
    for (let i=0;i<count;i++) {
        let first=array.shift();
        array.push(first);
    }
    console.log(array.join(' '));

}

rotation([51, 47, 32, 61, 21], 2);