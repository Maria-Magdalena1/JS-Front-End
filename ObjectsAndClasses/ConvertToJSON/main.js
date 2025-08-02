function converter(firstName,lastName,hairColor) {
    let person={};
    person.firstName=firstName;
    person.lastName=lastName;
    person.hairColor=hairColor;
    
    //let person={name,lastName,hairColor};
    let jsonStr=JSON.stringify(person);
    console.log(jsonStr);
}
converter('George', 'Jones', 'Brown');