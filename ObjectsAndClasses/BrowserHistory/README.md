# JS Front-End

## Browser History

### Description
    As input, you will receive two parameters: an object and a string array.
    The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. 
    Your task is to fill in the object based on the actions we will get in the array of strings.
    You can open any site in the world as many times as you like; if you do that add it to the open tabs.
    You can close only these tabs you have opened already! If the current action contains a valid opened site, you should remove it from "Open Tabs" 
    and put it into "Recently closed", otherwise don't do anything!
    Browser Logs will hold every single Valid action, which you did (Open and Close).
    There is a special case in which you can get an action that says: "Clear History and Cache". That means you should empty the whole object.
    In the end, print the object in the format:
    {Browser name}
    Open Tabs: {[…]} // Joined by comma and space
    Recently Closed: {[…]} // Joined by comma and space
    Browser Logs: {[…]} // Joined by comma and space
