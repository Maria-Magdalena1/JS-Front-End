function solve() {
    const textareaEl = document.querySelector('textarea');
    const bestRestaurantPEl = document.querySelector('#bestRestaurant p');
    const workersPEl = document.querySelector('#workers p');

    const restaurantInfo = JSON.parse(textareaEl.value);

    let restaurantWorkers = {};
    for (const restaurantStr of restaurantInfo) {
        const [restaurantName, workersStr] = restaurantStr.split(' - ');

        if (!(restaurantName in restaurantWorkers)) {
            restaurantWorkers[restaurantName] = [];
        }

        const workersArr = workersStr.split(', ');
        for (const workerStr of workersArr) {
            let [name, salary] = workerStr.split(' ');
            salary = Number(salary);
            restaurantWorkers[restaurantName].push({ name, salary });

        }
    }

    let bestRestaurant = '';
    let bestAvgSalary = 0;
    const entries = Object.entries(restaurantWorkers);

    for (const [restaurantName,workersArr] of entries) {
        const workersSalaries=workersArr.map(worker=>worker.salary);
        const avgSalary=workersSalaries.reduce((acc,val)=>acc+val)/workersSalaries.length;
        if (avgSalary>bestAvgSalary) {
            bestRestaurant=restaurantName;
            bestAvgSalary=avgSalary;
        }
    }
    const bestWorkers=restaurantWorkers[bestRestaurant].sort((a,b)=>b.salary-a.salary);
    const bestSalary=bestWorkers[0].salary;

    bestRestaurantPEl.textContent=`Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    for (const {name,salary} of bestWorkers) {
        workersPEl.textContent+=`Name: ${name} With Salary: ${salary} `;
    }
}