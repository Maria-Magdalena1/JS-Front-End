function solve() {
   const townsLiEls=document.querySelectorAll('#towns li');
   const searchInputEl=document.getElementById('searchText');
   const resultDivEl=document.getElementById('result');
   const search=searchInputEl.value.trim();

   //for (let town of townsLiEls) {
   //   
   //}
   let matches=0;
   townsLiEls.forEach(liEl=>{
      
      if (liEl.textContent.includes(search)) {
        liEl.style.fontWeight='bold';
        liEl.style.textDecoration='underline';
        matches++;
      } else {
         liEl.style.fontWeight='normal';
        liEl.style.textDecoration='none';
      }
   });
   resultDivEl.textContent=`${matches} matches found`;
}