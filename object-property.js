const students = [
    {id: 21, name: 'Kala'},
    {id: 31, name: 'bala'},
    {id: 41, name: 'dala'},
    {id: 51, name: 'jala'},
    {id: 61, name: 'nala'}

];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40)

const biggerOne = students.find(s => s.id > 40)
console.log(biggerOne)