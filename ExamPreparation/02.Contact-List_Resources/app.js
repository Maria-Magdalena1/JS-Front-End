window.addEventListener("load", solve);

function solve() {
  const nameInputEl=document.querySelector('#name');
  const phoneInputEl=document.querySelector('#phone');
  const categorySelectEl=document.querySelector('#category');

  const addBtnEl=document.querySelector('#add-btn');
  const checkListUlEl=document.querySelector('#check-list');
  const contactListUlEl=document.querySelector('#contact-list');

  addBtnEl.addEventListener('click',handleAddContact);

  function handleAddContact(e) {
    e.preventDefault();

    const name=nameInputEl.value.trim();
    const phone=phoneInputEl.value.trim();
    const category=categorySelectEl.value;

    if (!name||!phone||!category) {
      return;
    }

    const liEl=document.createElement('li');
    const articleEl=document.createElement('article');

    const namePEl=document.createElement('p');
    namePEl.textContent=`name:${name}`;

    const phonePEl=document.createElement('p');
    phonePEl.textContent=`phone:${phone}`;

    const categoryPEl=document.createElement('p');
    categoryPEl.textContent=`category:${category}`;

    const btnDivEl=document.createElement('div');
    btnDivEl.classList.add('buttons');

    const editBtnEl=document.createElement('button');
    editBtnEl.classList.add('edit-btn');

    const saveBtnEl=document.createElement('button');
    saveBtnEl.classList.add('save-btn');

    articleEl.appendChild(namePEl);
    articleEl.appendChild(phonePEl);
    articleEl.appendChild(categoryPEl);

    btnDivEl.appendChild(editBtnEl);
    btnDivEl.appendChild(saveBtnEl);

    liEl.appendChild(articleEl);
    liEl.appendChild(btnDivEl);

    checkListUlEl.appendChild(liEl);

    nameInputEl.value='';
    phoneInputEl.value='';
    categorySelectEl.value='';

    editBtnEl.addEventListener('click',handleEditContact);
    saveBtnEl.addEventListener('click',handleSavContact);

    function handleEditContact() {
      nameInputEl.value=name;
      phoneInputEl.value=phone;
      categorySelectEl.value=category;

      liEl.remove();
    }

    function handleSavContact() {
      contactListUlEl.appendChild(liEl);
      editBtnEl.remove();
      saveBtnEl.remove();

      const deleteBtnEl=document.createElement('button');
      deleteBtnEl.classList.add('del-btn');

      liEl.appendChild(deleteBtnEl);

      deleteBtnEl.addEventListener('click',handleDeleteContact);

      function handleDeleteContact() {
        liEl.remove();
      }
    }
  }
}
  