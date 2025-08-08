document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl=document.querySelector('#input');
  const inputTextareaEl=document.querySelector('#input textarea');

  const tbodyEl=document.querySelector('tbody');
  
  inputFormEl.addEventListener('submit',handleGeneratePrd);
  function handleGeneratePrd(e) {
    e.preventDefault();

    const json=inputTextareaEl.value;
    const furnitureArr=JSON.parse(json);

    furnitureArr.forEach(furnitureObj => {
      const trEl=document.createElement('tr');
      const imgTdEl=document.createElement('td');
      const imgEl=document.createElement('img');
      imgEl.src=furnitureObj.img;
      imgTdEl.appendChild(imgEl);
      
    });
  }
}