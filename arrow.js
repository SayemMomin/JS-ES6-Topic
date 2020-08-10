// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// arrow function

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5

const bishal = (x, y) => {
    const sum = x + y;
    const diff = x- y;
    const result = sum * diff;
    return result
}

const result = add(25, 25)
// console.log(result)

const result2 = give5();
const result3 = bishal(5, 2)
console.log(result3)