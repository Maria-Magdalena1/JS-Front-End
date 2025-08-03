function solve(arr) {
    let people={};

    for (let name of arr) {
        let number=name.length;
        people[name]=number;
    }

    for (let name in people) {
        console.log(`Name: ${name} -- Personal Number: ${people[name]}`);
    }


}

solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);