function solve(arr) {
    let book={};

    for (let line of arr) {
        let [name,address]=line.split(':');
        book[name]=address;
    }

   
    let sorted=Object.entries(book);
    sorted.sort((a,b)=>a[0].localeCompare(b[0]));

    for (let [key,value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
}
solve(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);