document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl=document.querySelector('#input');
  const inputTextareaEl=document.querySelector('#input textarea');

  const tbodyEl=document.querySelector('tbody');
  
  const shopFormEl = document.querySelector('#shop');
  const outputTextareaEl = shopFormEl.querySelector('textarea');

  inputFormEl.addEventListener('submit',handleGeneratePrd);
  shopFormEl.addEventListener('submit', handleBuy);

  function handleGeneratePrd(e) {
    e.preventDefault();

    const json=inputTextareaEl.value;
    const furnitureArr=JSON.parse(json);

    tbodyEl.innerHTML = '';

    furnitureArr.forEach(furnitureObj => {
      const trEl=document.createElement('tr');
      const imgTdEl=document.createElement('td');
      const imgEl=document.createElement('img');
      imgEl.src=furnitureObj.img;
      imgTdEl.appendChild(imgEl);
      trEl.appendChild(imgTdEl);

      // Name cell
      const nameTdEl = document.createElement('td');
      const nameP = document.createElement('p');
      nameP.textContent = furnitureObj.name;
      nameTdEl.appendChild(nameP);
      trEl.appendChild(nameTdEl);

      // Price cell
      const priceTdEl = document.createElement('td');
      const priceP = document.createElement('p');
      priceP.textContent = Number(furnitureObj.price).toFixed(2);
      priceTdEl.appendChild(priceP);
      trEl.appendChild(priceTdEl);

      // Decoration factor cell
      const decTdEl = document.createElement('td');
      const decP = document.createElement('p');
      decP.textContent = furnitureObj.decFactor;
      decTdEl.appendChild(decP);
      trEl.appendChild(decTdEl);

      // Checkbox cell
      const checkboxTdEl = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkboxTdEl.appendChild(checkbox);
      trEl.appendChild(checkboxTdEl);

      // Append the row to tbody
      tbodyEl.appendChild(trEl);
      
    });
  }

  function handleBuy(e) {
    e.preventDefault();

    const rows = Array.from(tbodyEl.querySelectorAll('tr'));

    const boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let count = 0;

    rows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        const cells = row.querySelectorAll('td');

        const name = cells[1].textContent.trim(); // Name cell p text
        const price = Number(cells[2].textContent.trim());
        const decFactor = Number(cells[3].textContent.trim());

        boughtFurniture.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
        count++;
      }
    });

    if (count === 0) {
      outputTextareaEl.value = 'No furniture selected.';
      return;
    }

    const avgDecFactor = totalDecFactor / count;

    outputTextareaEl.value =
      `Bought furniture: ${boughtFurniture.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgDecFactor}`;
  }
}