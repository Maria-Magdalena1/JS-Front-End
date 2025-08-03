function solve(data) {
    const [flightsList, changedStatuses, [statusToCheck]] = data;
    const flights = {};

    for (let entry of flightsList) {
        let [flight, ...destination] = entry.split(" ");
        flights[flight] = {
            destination: destination.join(" "),
            status: "Ready to fly"
        };
    }

    for (let change of changedStatuses) {
        let [flight,newStatus]=change.split(" ");
        if (flights[flight]) {
            flights[flight].status=newStatus;
        }
    }

    for(let flight in flights) {
        if (flights[flight].status===statusToCheck) {
            console.log(`{ Destination: '${flights[flight].destination}', Status: '${flights[flight].status}' }`);
        }
    }
}

solve([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK430 Cancelled'],
	['Cancelled']
]);