# JS Front-End

## Bus Stop

### Description
    Write a JS program that displays arrival times for all buses by a given bus stop ID when a button is clicked. Use the skeleton from the provided resources.
    When the button with ID 'submit' is clicked, the name of the bus stop appears and the list bellow gets filled with all the buses that are expected and their time of arrival. 
    Take the value of the input field with id 'stopId'. Submit a GET request to http://localhost:3030/jsonstore/bus/businfo/:busId (replace the highlighted part with the correct value) and parse the response. 
    You will receive a JSON object in the format:
    stopId: {
      name: stopName,
      buses: { busId: time, … }
    }

    Place the name property as text inside the div with ID 'stopName' and each bus as a list item with text:

    "Bus {busId} arrives in {time} minutes"

    Replace all highlighted parts with the relevant value from the response. If the request is not successful, or the information is not in the expected format, display "Error" as stopName and nothing in the list. 
    The list should be cleared before every request is sent.
    Note: The service will respond with valid data to IDs 1287, 1308, 1327 and 2334.
