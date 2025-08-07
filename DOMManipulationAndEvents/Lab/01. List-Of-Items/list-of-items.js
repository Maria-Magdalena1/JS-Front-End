function addItem() {
    const itemsUlEl=document.getElementById('items');
    const newItemInputEl=document.getElementById('newItemText');

    const newItemText=newItemInputEl.value.trim();

    const newLiEl=document.createElement('li');
    newLiEl.textContent=newItemText;

    itemsUlEl.appendChild(newLiEl);
}
