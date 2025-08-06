function solve() {
    const numberInputEl = document.getElementById('input');
    const selectMenuToEl = document.getElementById('selectMenuTo');
    const resultInputEl = document.getElementById('result');

    const num=Number(numberInputEl.value.trim());
    const conversionUnit=selectMenuToEl.value;

    if(conversionUnit==='binary') {
        resultInputEl.value=num.toString(2);
    } else if (conversionUnit==='hexadecimal') {
        resultInputEl.value=num.toString(16).toUpperCase();
    }
}