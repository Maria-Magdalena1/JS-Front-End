window.addEventListener("load", solve);

function solve() {
  const typeInputEl = document.querySelector('#type');
  const ageInputEl = document.querySelector('#age');
  const genderSelectEl = document.querySelector('#gender');

  const registerBtnEl = document.querySelector('#register-btn');

  const registerListUlEl = document.querySelector('#registered-list');
  const confirmedListUlEl = document.querySelector('#confirmed-list');

  registerBtnEl.addEventListener('click', handleRegister);

  function handleRegister(e) {
    e.preventDefault();

    const type = typeInputEl.value.trim();
    const age = ageInputEl.value.trim();
    const gender = genderSelectEl.value;

    if (!type || !age || !gender) {
      return;
    }

    const liEl = document.createElement('li');
    const articleEl = document.createElement('article');

    const typePEl = document.createElement('p');
    typePEl.textContent = `Blood Type: ${type}`;

    const genderPEl = document.createElement('p');
    genderPEl.textContent = `Gender: ${gender}`;

    const agePEl = document.createElement('p');
    agePEl.textContent = `Age: ${age}`;

    const btnDivEl = document.createElement('div');
    btnDivEl.classList.add('buttons');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('edit-btn');
    editBtnEl.textContent = 'Edit';

    const doneBtnEl = document.createElement('button');
    doneBtnEl.classList.add('done-btn');
    doneBtnEl.textContent = 'Confirm';

    articleEl.appendChild(typePEl);
    articleEl.appendChild(genderPEl);
    articleEl.appendChild(agePEl);

    btnDivEl.appendChild(editBtnEl);
    btnDivEl.appendChild(doneBtnEl);

    liEl.appendChild(articleEl);
    liEl.appendChild(btnDivEl);

    registerListUlEl.appendChild(liEl);

    typeInputEl.value = '';
    ageInputEl.value = '';
    genderSelectEl.value = '';

    editBtnEl.addEventListener('click',handleEditInfo);
    doneBtnEl.addEventListener('click',handleDoneInfo);

    function handleEditInfo() {
      typeInputEl.value=type;
      ageInputEl.value=age;
      genderSelectEl.value=gender;

      liEl.remove();
    }

    function handleDoneInfo() {
      confirmedListUlEl.appendChild(liEl);
      editBtnEl.remove();
      doneBtnEl.remove();

      const clearBtnEl=document.createElement('button');
      clearBtnEl.classList.add('clear-btn');
      clearBtnEl.textContent='Clear';

      liEl.appendChild(clearBtnEl);

      clearBtnEl.addEventListener('click',handleClearInfo);

      function handleClearInfo() {
        liEl.remove();
      }
    }
  }
}
