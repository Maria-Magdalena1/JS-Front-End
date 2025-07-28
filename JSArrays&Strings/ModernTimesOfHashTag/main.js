function solve (str){
    str=str.split(' ');
    for (let i=0;i<str.length;i++) {
        if (str[i].startsWith("#")&&str[i].length>1) {
            console.log(str[i].substring(1));
        }
    }
}

//function solve(str) {
//    let words = str.split(' ');
//    for (const word of words) {
//        if (word.startsWith("#")) {
//            console.log(word.substring(1));
//        }
//    }
//}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');