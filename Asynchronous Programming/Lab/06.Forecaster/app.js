const locationInputEl = document.querySelector('#location');
const submitInputEl = document.querySelector('#submit');
const forecastDivEl = document.querySelector('#forecast');
const currentDivEl = document.querySelector('#current');
const upcomingDivEl = document.querySelector('#upcoming');

const symbols = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
    'Degrees': '°'
};

function attachEvents() {
    submitInputEl.addEventListener('click', handleWeatherReport);
}

async function handleWeatherReport() {
    forecastDivEl.style.display = 'block';
    currentDivEl.innerHTML = '<div class="label">Current conditions</div>';
    upcomingDivEl.innerHTML = '<div class="label">Three-day forecast</div>';

    try {
        // 1. Get location code
        const allLocationsRes = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const allLocationsData = await allLocationsRes.json();

        const search = locationInputEl.value.trim();
        const locationObj = allLocationsData.find(loc => loc.name.toLowerCase() === search.toLowerCase());
        if (!locationObj) throw new Error('Location not found');

        // 2. Fetch current and upcoming forecasts
        const [currentConditionsRes, threeDayForecastRes] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationObj.code}`),
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationObj.code}`)
        ]);

        if (!currentConditionsRes.ok || !threeDayForecastRes.ok) throw new Error();

        const currentConditionsData = await currentConditionsRes.json();
        const threeDayForecastData = await threeDayForecastRes.json();

        // 3. Render forecasts
        loadCurrentForecast(currentConditionsData);
        loadThreeDayForecast(threeDayForecastData);

    } catch {
        forecastDivEl.textContent = 'Error';
    }
}

function loadCurrentForecast(data) {
    const currentSymbol = symbols[data.forecast.condition];
    const forecastsDiv = document.createElement('div');
    forecastsDiv.className = 'forecasts';

    const symbolSpan = document.createElement('span');
    symbolSpan.className = 'condition symbol';
    symbolSpan.textContent = currentSymbol;

    const conditionSpan = document.createElement('span');
    conditionSpan.className = 'condition';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'forecast-data';
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.className = 'forecast-data';
    tempSpan.textContent = `${data.forecast.low}${symbols.Degrees}/${data.forecast.high}${symbols.Degrees}`;

    const condTextSpan = document.createElement('span');
    condTextSpan.className = 'forecast-data';
    condTextSpan.textContent = data.forecast.condition;

    conditionSpan.append(nameSpan, tempSpan, condTextSpan);
    forecastsDiv.append(symbolSpan, conditionSpan);
    currentDivEl.appendChild(forecastsDiv);
}

function loadThreeDayForecast(data) {
    const forecastInfoDiv = document.createElement('div');
    forecastInfoDiv.className = 'forecast-info';

    data.forecast.forEach(day => {
        const upcomingSpan = document.createElement('span');
        upcomingSpan.className = 'upcoming';

        const symbolSpan = document.createElement('span');
        symbolSpan.className = 'symbol';
        symbolSpan.textContent = symbols[day.condition];

        const tempSpan = document.createElement('span');
        tempSpan.className = 'forecast-data';
        tempSpan.textContent = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;

        const condTextSpan = document.createElement('span');
        condTextSpan.className = 'forecast-data';
        condTextSpan.textContent = day.condition;

        upcomingSpan.append(symbolSpan, tempSpan, condTextSpan);
        forecastInfoDiv.appendChild(upcomingSpan);
    });

    upcomingDivEl.appendChild(forecastInfoDiv);
}

attachEvents();
