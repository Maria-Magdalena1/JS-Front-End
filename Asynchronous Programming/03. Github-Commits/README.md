# JS Front-End

## Github Commits

### Description
    Write a JS program that loads all commit messages and their authors from a github repository using a given HTML. 
    The loadCommits() function should get the username and repository from the HTML textboxes with IDs "username" and "repo" and make a GET request to the Github API:
    
    https://api.github.com/repos/<username>/<repository>/commits

    Swap <username> and <repository> with the ones from the HTML:
        •	In case of success, for each entry add a list item (<li>) in the unordered list (<ul>) with id "commits" with text in the following format:

        "<commit.author.name>: <commit.message>" 

        •	In case of an error, add a single list item (<li>) with text in the following format:

        "Error: <error.status> (Not Found)"

        
