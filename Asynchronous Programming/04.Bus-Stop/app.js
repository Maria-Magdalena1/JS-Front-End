function getInfo() {
    const stopIdInputEl=document.querySelector('#stopId');
    const stopNameDivEl=document.querySelector('#stopName');
    const busesUlEl=document.querySelector('#buses');
    const stopId=stopIdInputEl.value.trim();

    busesUlEl.innerHTML='';
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId} `)
    .then(res=>res.json())
    .then(stopObj=>{
        stopNameDivEl.textContent=stopObj.name;
        const busEntries=Object.entries(stopObj.buses);
        for (const [busNumber,time] of busEntries) {
           const liEl=document.createElement('li');
           liEl.textContent=`Bus ${busNumber} arrives in ${time} minutes`;
            busesUlEl.appendChild(liEl);

        }
    })
    .catch(err=>stopNameDivEl.textContent='Error');
    
}