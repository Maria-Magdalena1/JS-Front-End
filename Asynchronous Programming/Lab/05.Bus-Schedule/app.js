function solve() {
    const infoBox = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let currentStopId = 'depot';
    let currentStopName = '';

    function depart() {

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`)
            .then(responsee => {
                if (!response.ok) {
                    throw new Error('Stop not found');
                }
                return response.json();
            })
            .then(data => {
                currentStopName = data.name;
                currentStopId = data.next;

                infoBox.textContent = `Next stop ${currentStopName}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(error => {
                infoBox.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });

    }

    function arrive() {
        infoBox.textContent = `Arriving at ${currentStop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };

}
    let result = solve();