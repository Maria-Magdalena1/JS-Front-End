function solve(arr) {
    const register={};
    for (let line of arr) {
        let [namePart,gradePart,scorePart]=line.split(', ');
        let name=namePart.split(': ')[1];
        let grade=Number(gradePart.split(': ')[1]);
        let score=Number(scorePart.split(': ')[1]);

        if (score>=3) {
            if (!register[grade]) {
                register[grade]=[];
            }

            register[grade].push({name,score});
        }
    }

    let sortedGrades=Object.keys(register)
    .map(Number).sort((a,b)=>a-b);

    for (let grade of sortedGrades) {
        let students=register[grade];
        let names=students.map(s=>s.name).join(', ');
        let avgScore=(students.reduce((sum,s)=>sum+s.score,0)/students.length).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${names}`);
        console.log(`Average annual score from last year: ${avgScore}`);
        console.log();
    }
}

solve([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);