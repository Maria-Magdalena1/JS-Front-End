function deleteByEmail() {
    const emailTdEls=document.querySelectorAll('tbody tr td:nth-child(2)');
    const emailInputEl=document.querySelector('input');
    const resultDivEl=document.getElementById('result');

    const searchedEmail=emailInputEl.value.trim();
    let isFound=false;
    emailTdEls.forEach(tdEl=>{
        if (tdEl.textContent===searchedEmail) {
            const trEl=tdEl.parentElement;
            trEl.remove();
            resultDivEl.textContent='Deleted.';
            isFound=true;
        }
    });

    if (!isFound) {
        resultDivEl.textContent='Not found.';
    }

}
