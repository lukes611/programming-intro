
const temperatures = [5, 6, 3, 2, 100, 1, 14];

const fruits = ['banana', 'apple', 'blueberry', 'orange', 'kiwi'];

console.log(temperatures);
console.log(fruits);

// const tempsAbove7 = temperatures.filter(temp => temp > 7);
// console.log(tempsAbove7);

// for (const fruit of fruits) {
//     console.log(fruit);
//     if (fruit === 'apple') {
//         break;
//     }
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     if (i >= 3) {
//         break;
//     }
// }
// fruits.forEach((fruit) => {
//     console.log(fruit);
// });
// console.log('loop ended');

const yogurts = fruits.map((fruit) => {
    return `${fruit} yoghurt`;
});
console.log(yogurts);

const negativeTemps = temperatures.map(t => -t);
console.log(negativeTemps);
console.log(temperatures);
