function solve(text) {
    let words=text.toLowerCase().split(' ');
    let counts={};

    for (let word of words) {
        counts[word]=(counts[word]||0)+1;
    }

    let printed=new Set();
    let result=[];

    for (let word of words) {
        if (counts[word]%2!==0 && !printed.has(word)) {
            result.push(word);
            printed.add(word);
        }
    }
    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');