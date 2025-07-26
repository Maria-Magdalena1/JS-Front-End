function discount(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price;
    switch (dayOfWeek) {
        case 'Friday':
            if (typeOfGroup == 'Students') {
                price = 8.45;
            } else if (typeOfGroup == 'Business') {
                price = 10.90;
            } else if (typeOfGroup == 'Regular') {
                price = 15;
            }
            break;
        case 'Saturday':
            if (typeOfGroup == 'Students') {
                price = 9.80;
            } else if (typeOfGroup == 'Business') {
                price = 15.60;
            } else if (typeOfGroup == 'Regular') {
                price = 20;
            }
            break;
        case 'Sunday':
            if (typeOfGroup == 'Students') {
                price = 10.46;
            } else if (typeOfGroup == 'Business') {
                price = 16;
            } else if (typeOfGroup == 'Regular') {
                price = 22.50;
            }
            break;
    }
    let totalPrice;
    totalPrice = groupOfPeople * price;
    if (typeOfGroup == 'Students') {
        if (groupOfPeople >= 30) {
            totalPrice -= totalPrice * 0.15;
        }
    } else if (typeOfGroup == 'Business') {
        if (groupOfPeople >= 100) {
            totalPrice -= 10 * price;
        }
    } else if (typeOfGroup == 'Regular') {
        if (groupOfPeople >= 10&&groupOfPeople<=20) {
            totalPrice -= totalPrice * 0.05;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
discount(30,'Students','Sunday');
discount(40,"Regular","Saturday");