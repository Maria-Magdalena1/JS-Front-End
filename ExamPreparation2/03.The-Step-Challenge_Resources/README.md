# JS Front-End

## The Step Challenge

### Description
    -	http://localhost:3030/jsonstore/records/
    -	http://localhost:3030/jsonstore/records/:id

    1.Load Records
    
    Clicking the [Load Records] button should send a GET request to the server to fetch all records from your local database. 
    You must add each task to the <ul> with id="list". [Edit Record] button should be deactivated.
    Each record has the following HTML structure:
    
    
    2.Add а Record
    Clicking the [Add Record] button should send a POST request to the server, creating a new Record record with the Name, Steps and Calories from the input values. 
    After a successful creation, you should send another GET request to fetch all the records including the newly added one. You should also clear all the input fields after the creation!
    
    3.Edit a Record
    Clicking the [Change] button  should populate the info into the input fields above. The [Edit Record] button in the form should be activated and the [Add Record] one should be deactivated.
    After clicking the [Edit Record] button in the form, you should send a PUT request to the server to modify the Name, Steps and the 
    Calories of the changed item. After the successful request, you should fetch the items again and see that the changes have been made. After that, the [Edit Record] button should be deactivated and the [Add Record] one should be activated.
    
    4.Delete
    Clicking the [Delete] button should send a DELETE request to the server and remove the item from your local database. After you've removed it successfully, fetch the Records again.
