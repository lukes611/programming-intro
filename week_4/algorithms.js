
const temperatures = [5, 6, 3, -2, -100, 1, 14];

// console.log(has(temperatures, 101));
// console.log(has(temperatures, 100));
console.log(temperatures.includes(100));

// goal: check if all tempatures are positive
let foundNegative = false;
for (const t of temperatures) {
    if (t < 0) {
        foundNegative = true;
    }
}

console.log('foundNegative:', foundNegative);
console.log('all positive:', temperatures.every(t => {
    return t >= 0;
}));

// function has(arr, itemToFind) {
//     for (const item of arr) {
//         if (itemToFind === item) {
//             return true;
//         }
//     }

//     // got all the way to the end without finding
//     return false;
// }
