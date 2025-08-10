const titleInputEl = document.querySelector('#title');
const directorInputEl = document.querySelector('#director');
const yearInputEl = document.querySelector('#year');

const addMovieBtnEl = document.querySelector('#add-movie');
const editMovieBtnEl = document.querySelector('#edit-movie');
const loadMoviesBtnEl = document.querySelector('#load-movies');

const movieListDivEl = document.querySelector('#movie-list');

loadMoviesBtnEl.addEventListener('click', handleLoadMovie);
addMovieBtnEl.addEventListener('click',handleAddMovie);
editMovieBtnEl.addEventListener('click',handleEditMovie);

const BASE_URL = 'http://localhost:3030/jsonstore/movies';
let selectedmovieId=null;

async function handleLoadMovie() {
    const moviesRes = await fetch(BASE_URL);
    const movieData = await moviesRes.json();
    const movieArr = Object.values(movieData);

    movieListDivEl.innerHTML = '';

    movieArr.forEach(movieObj => {
        const movieDivEl = document.createElement('div');
        movieDivEl.classList.add('movie');

        const contentDivEl = document.createElement('div');
        contentDivEl.classList.add('content');

        const titlePEl = document.createElement('p');
        titlePEl.textContent = movieObj.title;

        const directorPEl = document.createElement('p');
        directorPEl.textContent = movieObj.director;

        const yearPEl = document.createElement('p');
        yearPEl.textContent = movieObj.year;

        const btnContainerDivEl = document.createElement('div');
        btnContainerDivEl.classList.add('buttons-container');

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent = 'Change';

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent = 'Delete';

        contentDivEl.appendChild(titlePEl);
        contentDivEl.appendChild(directorPEl);
        contentDivEl.appendChild(yearPEl);

        btnContainerDivEl.appendChild(changeBtnEl);
        btnContainerDivEl.appendChild(deleteBtnEl);

        movieDivEl.appendChild(contentDivEl);
        movieDivEl.appendChild(btnContainerDivEl);

        movieListDivEl.appendChild(movieDivEl);

        changeBtnEl.addEventListener('click',handleChange);
        deleteBtnEl.addEventListener('click',handleDeleteMovie);

        function handleChange(){
            titleInputEl.value=movieObj.title;
            directorInputEl.value=movieObj.director;
            yearInputEl.value=movieObj.year;

            editMovieBtnEl.disabled=false;
            addMovieBtnEl.disabled=true;

            selectedmovieId=movieObj._id;
        }

        async function handleDeleteMovie() {
            await fetch(`${BASE_URL}/${movieObj._id}`,{
                method:'DELETE',
            });

            await handleLoadMovie();
        }

    })

}

async function handleAddMovie() {
    const title=titleInputEl.value.trim();
    const director=directorInputEl.value.trim();
    const year=yearInputEl.value.trim();

    await fetch(BASE_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        } ,
        body:JSON.stringify({title,director,year})
    });

    titleInputEl.value='';
    directorInputEl.value='';
    yearInputEl.value='';

    handleLoadMovie();
}

async function handleEditMovie() {
    const title=titleInputEl.value.trim();
    const director=directorInputEl.value.trim();
    const year=yearInputEl.value.trim();

    await fetch(`${BASE_URL}/${selectedmovieId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        } ,
        body:JSON.stringify({title,director,year})
    });

    titleInputEl.value='';
    directorInputEl.value='';
    yearInputEl.value='';

    handleLoadMovie();
}
