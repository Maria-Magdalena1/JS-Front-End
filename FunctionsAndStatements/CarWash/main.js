function wash(commands) {
    let washed = 0;
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        switch (command) {
            case "soap":
                washed+=10;
                break;
            case "water":
                washed+=washed*0.20;
                break;
            case "vacuum cleaner":
                washed+=washed*0.25;
                break;
            case "mud":
                washed-=washed*0.10;
                break;
        }
    }
    console.log(`The car is ${washed.toFixed(2)}% clean.`);
}

wash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
wash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
