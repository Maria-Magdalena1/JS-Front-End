# JS-Front-End Exam

## My Movie Watchlist

### Description
    -	http://localhost:3030/jsonstore/movies/
    -	http://localhost:3030/jsonstore/movies/:id

    Load Movies
 
    Clicking the [Load Movies] button should send a GET request to the server to fetch all records from your local database. 
    You must add each task to the <div> with id="movie-list". [Edit Movie] button should be deactivated.
    Each record has the following HTML structure:
    
 
    Add а Movie

    Clicking the [Add Movie] button should send a POST request to the server, creating a new movie record with the title, director, and year from the input values. 
    After a successful creation, you should send another GET request to fetch all the movie records,including the newly added one. 
    You should also clear all the input fields after the creation!
    
    Edit a Movie

    Clicking the [Change] button on a movie should remove the movie from the DOM structure and the information about the movie should be populated into the input fields above. 
    The [Edit Movie] button in the form should be activated and the [Add Movie] one should be deactivated.
    After clicking the [Edit Movie] button in the form, you should send a PUT request to the server to modify the title, director and the year of the changed item. 
    After the successful request, you should fetch the items again and see that the changes have been made. 
    After that, the [Edit Movie] button should be deactivated and the [Add Movie] one should be activated.
    
    Delete

    Clicking the [Delete] button should send a DELETE request to the server and remove the item from your local database. 
    After you've removed it successfully, fetch the movies again.

