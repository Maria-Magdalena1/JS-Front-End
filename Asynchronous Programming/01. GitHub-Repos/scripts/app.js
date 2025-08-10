function loadRepos() {
   const resDivEl=document.querySelector('#res');

   fetch("https://api.github.com/users/testnakov/repos")
   .then(res=>res.text())
   .then(data=>{
      resDivEl.textContent=data;
   });
}