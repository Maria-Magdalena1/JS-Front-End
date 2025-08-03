function solve(arr) {
    let parkingLot=new Set();

    for (let entry of arr) {
        let [direction,carNumber]=entry.split(', ');

        if (direction==='IN') {
            parkingLot.add(carNumber);
        } else if (direction==='OUT') {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size===0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCars=Array.from(parkingLot).sort((a,b)=>a.localeCompare(b));
        for (let car of sortedCars) {
            console.log(car);
        }
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);