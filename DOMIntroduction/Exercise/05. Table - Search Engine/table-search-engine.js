function solve() {
   const allTdEls=document.querySelectorAll('tbody td');
   const allTrEls=document.querySelectorAll('tbody tr');
   const inputEl=document.getElementById('searchField');

   allTrEls.forEach(trEl=>{
      trEl.classList.remove('select');
   })
   const search=inputEl.value.trim().toLowerCase();
   if (!search) {
      return;
   }
   allTdEls.forEach(tdEl=>{
      if (tdEl.textContent.toLowerCase().includes(search)) {
         const trEl=tdEl.parentElement;
         trEl.classList.add('select');
      }

   });
}