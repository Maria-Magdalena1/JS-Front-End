function sum(a,b) {
    return a+b;
} 

function subtract(sumResult,c) {
    return sumResult-c;
}
let result=subtract(sum(23,6),10);
console.log(result);
//
//function subtract(a,b,c) {
//    let sums=sum(a,b);
//    return sums-c;
//}
//
//let result=subtract(23,6,10);
//console.log(result);