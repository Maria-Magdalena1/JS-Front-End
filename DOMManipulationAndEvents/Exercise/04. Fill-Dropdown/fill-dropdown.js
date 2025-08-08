document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const menuSelectEl = document.getElementById('menu');
    const formEl = document.querySelector('form');
    const itemTextInputEl = document.getElementById('newItemText');
    const itemValueInputEl = document.getElementById('newItemValue');

    formEl.addEventListener('submit', handleFormSubmit);
    function handleFormSubmit(e) {
        e.preventDefault();

        const text=itemTextInputEl.value.trim();
        const value=itemValueInputEl.value.trim();

        const optionEl=document.createElement('option');
        optionEl.textContent=text;
        optionEl.value=value;

        menuSelectEl.appendChild(optionEl);
        itemTextInputEl.value='';
        itemValueInputEl.value='';
    }
}