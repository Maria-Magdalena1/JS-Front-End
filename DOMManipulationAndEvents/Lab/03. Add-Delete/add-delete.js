function addItem() {
    const itemsUlEl=document.getElementById('items');
    const newItemInputEl=document.getElementById('newItemText');

    const newItemText=newItemInputEl.value.trim();
    const newLiEl=document.createElement('li');
    newLiEl.textContent=newItemText;

    const deleteAEl=document.createElement('a');
    deleteAEl.textContent='[Delete]';
    deleteAEl.href='#';

    deleteAEl.addEventListener('click',handleDelete);
    function handleDelete(e) {
        newLiEl.remove();
    }
    newLiEl.append(deleteAEl);

    itemsUlEl.appendChild(newLiEl);

}
