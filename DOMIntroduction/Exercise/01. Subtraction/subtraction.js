function subtract() {
    const firstNumInputEl=document.getElementById('firstNumber');
    const secondNumInputEl=document.getElementById('secondNumber');

    const resultSpanEl=document.getElementById('result');

    const firstNum=Number(firstNumInputEl.value);
    const secondNum=Number(secondNumInputEl.value);

    const result=firstNum-secondNum;

    resultSpanEl.textContent=result
}