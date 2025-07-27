function solve(str, searchedWord) {
    let words = str.split(' ');
    let count = 0;
    for (let word of words) {
        if (word===searchedWord) {
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence','is');