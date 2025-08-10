# JS Front-End

## My Board Games Collection

### Description

    -	http://localhost:3030/jsonstore/games/
    -	http://localhost:3030/jsonstore/games/:id

    Load Games
    
    Clicking the [Load Games] button should send a GET request to the server to fetch all records from your local database. You must add each task to the <div> with id="games-list". 
    [Edit Game] button should be deactivated.
    
    Add а Game
    Clicking the [Add Game] button should send a POST request to the server, creating a new game record with the name, type, and max players from the input values. 
    After a successful creation, you should send another GET request to fetch all games records, including the newly added one. 
    You should also clear all the input fields after the creation!
    
    Edit a Game
    Clicking the [Change] button on a game the information about the game should be populated into the input fields above. 
    The [Edit Game] button in the form should be activated and the [Add Game] one should be deactivated.
    After clicking the [Edit Game] button in the form, you should send a PUT request to the server to modify the name, type and the max players of the changed item. 
    After the successful request, you should fetch the games again and see that the changes have been made. After that, the [Edit Game] button should be deactivated and the [Add Game] one should be activated. 
    You should also clear all the input fields after the edit!
    
    Delete
    
    Clicking the [Delete] button should send a DELETE request to the server and remove the item from your local database. After you've removed it successfully, fetch the games again.
