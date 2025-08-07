document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailInputEl=document.getElementById('email');
    const pattern=/([a-z])+@[a-z]+\.[a-z]/g;

    emailInputEl.addEventListener('change',handleInputChange);
    function handleInputChange() {
        const email=emailInputEl.value.trim();
        if (!pattern.exec(email)) {
            emailInputEl.classList.add('error');
        } else {
            emailInputEl.classList.remove('error');
        }
    }
}