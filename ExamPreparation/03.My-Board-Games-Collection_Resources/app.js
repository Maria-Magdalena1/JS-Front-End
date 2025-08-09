const nameInputEl = document.querySelector('#g-name');
const typeInputEl = document.querySelector('#type');
const playersInputEl = document.querySelector('#players');

const addBtnEl = document.querySelector('#add-game');
const editBtnEl = document.querySelector('#edit-game');
const loadBtnEl = document.querySelector('#load-games');

const gamesListDivEl = document.querySelector('#games-list');

loadBtnEl.addEventListener('click', handleLoadGames);
addBtnEl.addEventListener('click',handleAddGames);
editBtnEl.addEventListener('click',handleEditGame);

const BASE_URL = 'http://localhost:3030/jsonstore/games/';
let selectedGameId=null;

async function handleLoadGames() {
    const gamesRes = await fetch(BASE_URL);
    const gamesData=await gamesRes.json();
    const gamesArr=Object.values(gamesData);
    
    gamesListDivEl.innerHTML='';

    gamesArr.forEach(gameObj=>{
        const gameDivEl=document.createElement('div');
        gameDivEl.classList.add('board-game');

        const contentDivEl=document.createElement('div');
        contentDivEl.classList.add('content');

        const namePEl=document.createElement('p');
        namePEl.textContent=gameObj.name;

        const playersPEl=document.createElement('p');
        playersPEl.textContent=gameObj.players;

        const typePEl=document.createElement('p');
        typePEl.textContent=gameObj.type;

        const btnDivEl=document.createElement('div');
        btnDivEl.classList.add('buttons-container');

        const changeBtnEl=document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent='Change';

        const deleteBtnEl=document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent='Delete';

        contentDivEl.appendChild(namePEl);
        contentDivEl.appendChild(playersPEl);
        contentDivEl.appendChild(typePEl);

        btnDivEl.appendChild(changeBtnEl);
        btnDivEl.appendChild(deleteBtnEl);

        gameDivEl.appendChild(contentDivEl);
        gameDivEl.appendChild(btnDivEl);

        gamesListDivEl.appendChild(gameDivEl);

        changeBtnEl.addEventListener('click',handleLoadEdit);
        deleteBtnEl.addEventListener('click',handleDeleteGame);

        function handleLoadEdit() {
            nameInputEl.value=gameObj.name;
            typeInputEl.value=gameObj.type;
            playersInputEl.value=gameObj.players;

            editBtnEl.disabled=false;
            addBtnEl.disabled=true;

            selectedGameId=gameObj._id;
        }

        async function handleDeleteGame(){
            await fetch(`${BASE_URL}${gameObj._id}`,{
                method:'DELETE',
            });

            await handleLoadGames();
        }
    })
}

async function handleAddGames() {
    const name=nameInputEl.value.trim();
    const type=typeInputEl.value.trim();
    const players=playersInputEl.value.trim();

    await fetch(BASE_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name,type,players})
    });

    nameInputEl.value='';
    typeInputEl.value='';
    playersInputEl.value='';
    
    await handleLoadGames();
}

async function handleEditGame() {
    const name=nameInputEl.value.trim();
    const type=typeInputEl.value.trim();
    const players=playersInputEl.value.trim();
    
    await fetch(`${BASE_URL}/${selectedGameId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name,type,players})
    });

    nameInputEl.value='';
    typeInputEl.value='';
    playersInputEl.value='';

    selectedGameId=null;
    addBtnEl.disabled=false;
    editBtnEl.disabled=true;
    await handleLoadGames();
}