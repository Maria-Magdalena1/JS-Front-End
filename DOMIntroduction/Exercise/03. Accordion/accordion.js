function toggle() {
    const buttonEl=document.querySelector('.button');
    const extraDivEl=document.getElementById('extra');

    if (buttonEl.textContent==='More') {
        extraDivEl.style.display='block';
        buttonEl.textContent='Less';
    } else {
        extraDivEl.style.display='none';
        buttonEl.textContent='More';
    }
}