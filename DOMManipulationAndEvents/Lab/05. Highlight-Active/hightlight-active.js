document.addEventListener('DOMContentLoaded', focused);

function focused() {

    const divElements = Array.from(document.querySelectorAll('div input'));

    for (let input of divElements) {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    }
}
