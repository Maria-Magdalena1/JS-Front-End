function solve(arr) {
    let wordsToFind=arr[0].split(' ');
    let counts={};

    for (let word of wordsToFind) {
        counts[word]=0;
    }

    for (let i=1;i<arr.length;i++) {
        let word=arr[i];
        if (counts.hasOwnProperty(word)) {
            counts[word]++;
        }
    }

    let sortedWords=Object.entries(counts)
    .sort((a,b) => b[1]-a[1]);

    for (let [word,count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
solve([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);