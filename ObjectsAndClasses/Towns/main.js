function solve(arr) {
    let town=[];

    for (let line of arr) {
        let name=line.split(' | ')[0];
        let latitude=line.split(' | ')[1];
        let longitude=line.split(' | ')[2];

        let townObj={
            town:name,
            latitude:Number(Number(latitude).toFixed(2)),
            longitude:Number(Number(longitude).toFixed(2))
        };

        town.push(townObj);
    }

    for (let obj of town) {
        console.log(obj);
    }
}
solve(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);