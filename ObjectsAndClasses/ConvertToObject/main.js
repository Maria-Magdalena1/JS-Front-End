function converter(jsonStr) {
    let person=JSON.parse(jsonStr);
    let entries=Object.entries(person);
    for (let [key,value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

converter('{"name": "George", "age": 40, "town": "Sofia"}');