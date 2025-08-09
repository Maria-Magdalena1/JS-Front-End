window.addEventListener("load", solve);

function solve() {
  const typeInputEl = document.querySelector('#type');
  const ageInputEl = document.querySelector('#age');
  const genderSelectEl = document.querySelector('#gender');

  const adoptBtnEl = document.querySelector('#adopt-btn');

  const adoptionListUlEl = document.querySelector('#adoption-info');
  const adoptedListUlEl = document.querySelector('#adopted-list');

  adoptBtnEl.addEventListener('click', handleAdoptPet);

  function handleAdoptPet(e) {
    e.preventDefault();

    const type = typeInputEl.value.trim();
    const age = ageInputEl.value.trim();
    const gender = genderSelectEl.value.trim();

    if (!type || !age || !gender) {
      return;
    }

    const liEl=document.createElement('li');
    const articleEl=document.createElement('article');

    const typePEl=document.createElement('p');
    typePEl.textContent=`Pet:${type}`;

    const genderPEl=document.createElement('p');
    genderPEl.textContent=`Gender:${gender}`;
    
    const agePEl=document.createElement('p');
    agePEl.textContent=`Age:${age}`;

    const btnsDivEl=document.createElement('div');
    btnsDivEl.classList.add('buttons');

    const editBtnEl=document.createElement('button');
    editBtnEl.classList.add('edit-btn');
    editBtnEl.textContent='Edit';

    const doneBtnEl=document.createElement('button');
    doneBtnEl.classList.add('done-btn');
    doneBtnEl.textContent='Done';

    articleEl.appendChild(typePEl);
    articleEl.appendChild(genderPEl);
    articleEl.appendChild(agePEl);

    btnsDivEl.appendChild(editBtnEl);
    btnsDivEl.appendChild(doneBtnEl);

    liEl.appendChild(articleEl);
    liEl.appendChild(btnsDivEl);

    adoptionListUlEl.appendChild(liEl);

    typeInputEl.value='';
    genderSelectEl.value='';
    ageInputEl.value='';

    editBtnEl.addEventListener('click',handleEditPet);
    doneBtnEl.addEventListener('click',handleDone);

    function handleEditPet() {
      typeInputEl.value=type;
      genderSelectEl.value=gender;
      ageInputEl.value=age;

      liEl.remove();
    }

    function handleDone() {
      adoptedListUlEl.appendChild(liEl);

      editBtnEl.remove();
      doneBtnEl.remove();

      const clearBtnEl=document.createElement('button');
      clearBtnEl.classList.add('clear-btn');
      clearBtnEl.textContent='Clear';

      liEl.appendChild(clearBtnEl);

      clearBtnEl.addEventListener('click',handleClearPet);

      function handleClearPet() {
        liEl.remove();
      }
    }
  }

}
