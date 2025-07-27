function solve(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, repeat(word));
    }
    console.log(text);
}

function repeat(word) {
    let len = word.length;
    let replacement = '*'.repeat(len);
    word = replacement;
    return replacement;
}
//function solve(text, word) {
//    while (text.includes(word)) {
//        text = text.replace(word, '*'.repeat(word.length));
//    }
//    console.log(text);
//}
solve('A small sentence with some words', 'small');