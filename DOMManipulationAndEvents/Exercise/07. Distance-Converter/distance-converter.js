document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convert = document.getElementById('convert');
    convert.addEventListener('click', handleConvert);

    function handleConvert() {
        const inputDistanceEl = document.getElementById('inputDistance');
        const inputUnitsEl = document.getElementById('inputUnits');
        const outputUnitsEl = document.getElementById('outputUnits');
        const outputDistanceEl = document.getElementById('outputDistance');

        let inputValue = Number(inputDistanceEl.value);
        // Conversion rates to meters (base unit)
        const conversionToMeters = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        };

        // Convert input distance to meters
        const meters = inputValue * conversionToMeters[inputUnitsEl.value];

        // Convert meters to target unit
        const result = meters / conversionToMeters[outputUnitsEl.value];

        // Display result, rounded nicely
        outputDistanceEl.value = result.toFixed(4);
    };

}