const loadBtnEl = document.querySelector('#load-records');
const addBtnEl = document.querySelector('#add-record');
const editBtnEl = document.querySelector('#edit-record');

const listUlEl = document.querySelector('#list');

const nameInputEl = document.querySelector('#p-name');
const stepsInputEl = document.querySelector('#steps');
const caloriesInputEl = document.querySelector('#calories');

loadBtnEl.addEventListener('click', handleLoadRecords);
addBtnEl.addEventListener('click', handleAddRecord);
editBtnEl.addEventListener('click', handleEditRecord);

const BASE_URL = 'http://localhost:3030/jsonstore/records';
let selectedRecordId = null;

async function handleLoadRecords() {
    const recordsRes = await fetch(BASE_URL);
    const recordsData = await recordsRes.json();
    const recordsArr = Object.values(recordsData);

    listUlEl.innerHTML = '';
    recordsArr.forEach(recordObj => {
        const liEl = document.createElement('li');
        liEl.classList.add('record');

        const infoDivEl = document.createElement('div');
        infoDivEl.classList.add('info');

        const namePEl = document.createElement('p');
        namePEl.textContent = recordObj.name;

        const stepsPEl = document.createElement('p');
        stepsInputEl.textContent = recordObj.steps;

        const caloriesPEl = document.createElement('p');
        caloriesInputEl.textContent = recordObj.calories;

        const btnDivEl = document.createElement('div');
        btnDivEl.classList.add('btn-wrapper');

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent = 'Change';

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent = 'Delete';

        infoDivEl.appendChild(namePEl);
        infoDivEl.appendChild(stepsPEl);
        infoDivEl.appendChild(caloriesPEl);

        btnDivEl.appendChild(changeBtnEl);
        btnDivEl.appendChild(deleteBtnEl);

        liEl.appendChild(infoDivEl);
        liEl.appendChild(btnDivEl);

        listUlEl.appendChild(liEl);

        changeBtnEl.addEventListener('click', handleShowEdit);
        deleteBtnEl.addEventListener('click',handleDeleteRecord);

        function handleShowEdit() {
            nameInputEl.value = recordObj.name;
            stepsInputEl.value = recordObj.steps;
            caloriesInputEl.value = recordObj.calories;

            editBtnEl.disabled = false;
            addBtnEl.disabled = true;

            selectedRecordId = recordObj._id;
        }

        async function handleDeleteRecord() {
            await fetch(`${BASE_URL}/${recordObj._id}`,{
                method:'DELETE'
            });

            await handleLoadRecords();
        }
    });
}

async function handleAddRecord() {
    const name = nameInputEl.value.trim();
    const steps = stepsInputEl.value.trim();
    const calories = caloriesInputEl.value.trim();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, steps, calories })
    });

    nameInputEl.value = '';
    stepsInputEl.value = '';
    caloriesInputEl.value = '';

    await handleLoadRecords();

}

async function handleEditRecord() {
    const name = nameInputEl.value.trim();
    const steps = stepsInputEl.value.trim();
    const calories = caloriesInputEl.value.trim();

    await fetch(`${BASE_URL}/${selectedRecordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, steps, calories })
    });

    nameInputEl.value = '';
    stepsInputEl.value = '';
    caloriesInputEl.value = '';

    selectedRecordId=null;
    addBtnEl.disabled=false;
    editBtnEl.disabled=true;

    await handleLoadRecords();
}


