function range(char1,char2) {
    let result='';
    if (char1<char2) {
        for (let i=char1.charCodeAt(0)+1;i<char2.charCodeAt(0);i++) {
            result+=String.fromCharCode(i)+' ';
            
        }
    } else if (char2<char1) {
        for (let i=char2.charCodeAt(0)+1;i<char1.charCodeAt(0);i++) {
            result+=String.fromCharCode(i)+' ';;
            
        }
    }
    console.log(result);
}

range('a','d');
range('C','#');
