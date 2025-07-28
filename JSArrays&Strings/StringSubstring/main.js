function solve(word,text) {
    text=text.split(' ');
    word=word.toLowerCase();
    
    for (txt of text) {
        txt=txt.toLowerCase();
        if (txt===word) {
            console.log(word);
            return;
        }
    }
    console.log(word+" not found!");
}

solve('javascript','JavaScript is the best programming language');