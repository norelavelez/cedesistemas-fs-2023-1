const sum5grades = (grade1, grade2, grade3, grade4, grade5) => {
    return prom = (grade1 + grade2 + grade3 + grade4 + grade5) /5;
}


const sum5grades2 = (...n) => {
    let sumGrades = 0;
    n.forEach((i , index) => {
        sumGrades += i;
    });
    return (sumGrades) / n.length; 
}


const sum5grades3 = (...n) => {
    let sumGrades = 0;
    n.map((i) => {
        sumGrades += i;
    });
    return (sumGrades) / n.length; 
}

