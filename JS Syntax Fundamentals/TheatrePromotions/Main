function tickets(typeOfDay, age) {
    let priceTicket;
    switch (typeOfDay) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                priceTicket = 12;
            } else if (age <= 64) {
                priceTicket = 18;
            } else if (age <= 122) {
                priceTicket = 12;
            }
            break;
        case 'Weekend':
             if (age >= 0 && age <= 18) {
                priceTicket = 15;
            } else if (age <= 64) {
                priceTicket = 20;
            } else if (age <= 122) {
                priceTicket = 15;
            }
            break;
        case 'Holiday':
             if (age >= 0 && age <= 18) {
                priceTicket = 5;
            } else if (age <= 64) {
                priceTicket = 12;
            } else if (age <= 122) {
                priceTicket = 10;
            }
            break;
    }
    console.log(priceTicket+'$');
    //console.log(`${priceTicket}$`);
}
tickets('Weekday',42)