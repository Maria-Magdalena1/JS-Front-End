# JS Front-End

## Flight Schedule

### Description
    You will receive an array with arrays.
    The first array (at index 0) will hold all flights on a specific sector in the airport. 
    The second array (at index 1) will contain newly changed statuses of some of the flights at this airport. 
    The third array (at index 2) will have a single string, which will be the flight status you need to check. 
    When you put all flights into an object and change the statuses depends on the new information on the second array. 
    You must print all flights with the given status from the last array.
    •	If the value of the string obtained from the third array is "Ready to fly":
        o	then you must print flights that have not changed their status in the second array 
        o	and automatically change the status to "Ready to fly"
    •	Otherwise, print only flights that have changed their status.
