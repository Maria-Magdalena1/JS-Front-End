function solve(arr) {
    let spell=arr.shift();
    let command=arr.shift();

    while(command!=='End') {
        const tokens=command.split('!');
        const action=tokens.shift();
        if (action==='RemoveEven') {
            let newSpell='';
            for (let i=0;i<spell.length;i+=2) {
                newSpell+=spell[i];
            }
            
            spell=newSpell;
            console.log(spell);
        } else if (action==='TakePart') {
            const fromIndex=Number(tokens.shift());
            const toIndex=Number(tokens.shift());

            const newSpell=spell.substring(fromIndex,toIndex);
            spell=newSpell;
            console.log(spell);
        } else if (action==='Reverse') {
            const substring=tokens.shift();

            if (spell.includes(substring)) {
                spell=spell.replace(substring,'');
                const reverseSubstring=substring.split('').reverse().join('');
                spell+=reverseSubstring;
                console.log(spell);
            } else {
                console.log('Error');
            }
        }
        
        command=arr.shift();
    }
    console.log(`The concealed spell is: ${spell}`);
}
//solve(["asAsl2adkda2mdaczsa", 
//"RemoveEven",
//"TakePart!1!9",
//"Reverse!maz",
//"End"]);