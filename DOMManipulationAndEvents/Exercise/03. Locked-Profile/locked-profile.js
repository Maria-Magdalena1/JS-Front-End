document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const constrolShowBtnEls = document.querySelectorAll('button');

    constrolShowBtnEls.forEach(btnEl => btnEl.addEventListener('click', handleControlShow));

    function handleControlShow(e) {
        const fullProfileDivEl = e.target.parentElement;
        const lockedRadioEl = fullProfileDivEl.querySelector('input[type="radio"]');

        if (lockedRadioEl.checked) {
            return;
        }
        const infoDivEl = fullProfileDivEl.querySelector('.hidden-fields');
        if (infoDivEl.style.display === 'none') {
            infoDivEl.style.display = 'block';
            e.target.textContent = 'Show Less';
        } else {
            infoDivEl.style.display = 'none';
            e.target.textContent = 'Show more';
        }
    }
}