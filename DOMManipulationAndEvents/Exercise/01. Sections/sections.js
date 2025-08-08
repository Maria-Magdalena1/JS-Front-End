document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl=document.getElementById('task-input');
   const sectionsInputEl=document.querySelector('#task-input input[type="text"]');
   const contentDivEl=document.getElementById('content');

   formEl.addEventListener('submit',handleFormSubmit);
   function handleFormSubmit(e) {
      e.preventDefault();
      const sectionStr=sectionsInputEl.value.trim();
      const sectionNames=sectionStr.split(', ');
      sectionNames.forEach(sectionName=> {
         const divEl=document.createElement('div');
         const pEl=document.createElement('p');
         pEl.textContent=sectionName;

         pEl.style.display='none';
         divEl.appendChild(pEl);
         divEl.addEventListener('click',()=>{
            pEl.style.display='block';
         })

         contentDivEl.appendChild(divEl);
      });
   }
}