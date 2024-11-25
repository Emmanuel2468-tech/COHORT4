const students = [
    {name: "Emmanuel", age: 20, grade: "A"},
    {name: "Samuel", age: 25, grade: "A"},
    {name: "David", age: 27, grade: "B"}
]


const filterByGrade = students.filter (student => student.grade <= "A")
console.log(filterByGrade);



function averageAge(students) {
    const sum = students.reduce((acc, students) => acc + students.age, 0);
    return sum / students.length;
}

const average = averageAge(students);
console.log(average);