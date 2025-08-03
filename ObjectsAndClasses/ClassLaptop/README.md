# JS Front-End

## Class Laptop

### Description
    Create a class Laptop that has the following properties:
    •	info – object that contains:
    o	producer – string
    o	age – number
    o	brand – string
    •	isOn – boolean (false by default)
    •	turnOn – a function that sets the isOn variable to true
    •	turnOff – a function that sets the isOn variable to false
    •	showInfo – a function that returns the producer, age, and brand as JSON
    •	quality – number (every time the laptop is turned on/off the quality decreases by 1)
    •	getter price – number (800 – {age * 2} + (quality * 0.5)) 
    The constructor should receive the info as an object and the quality.
    