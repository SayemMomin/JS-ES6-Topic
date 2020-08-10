const ages = [12, 14, 16, 18]
const ages2 = [15, 16, 18];
const ages3 = [25, 27, 29];
const allages = ages.concat(ages2).concat([5]).concat(ages3)
const allages2 = [ages, ages2, 5, ages3]
const allages3 = [...ages, ...ages2, 5, ...ages3]

//console.log(allages3)

const business = 650;
const minister = 450;
const sochib = 250;

const takaPoisa = [650, 460, 250];
//const maxium = Math.max(business, minister, sochib);
const maxium = Math.max(...takaPoisa);
console.log(maxium)


