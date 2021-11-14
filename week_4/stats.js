

// 0 - no effect
// 50 - slight pain
// 100 - death
const sideEffects = [5, 6, 3, 2, 25, 1, 1, 2, 4, 5, 5, 5, 6, 4, 3, 3, 3, 3, 14, 50, 50, 50, 42];

console.log(sideEffects);

let sum = 0;
sideEffects.forEach(t => {
    sum += t;
});
console.log('sum = ', sum);
const avg = sum / sideEffects.length;
console.log('avg/mean = ', avg);

// median =
// sort the numbers
// take the middle number of the sorted list
sideEffects.sort((a, b) => {
    // return negative if a < b
    // return 0 if a === b
    // return positive if a > b
    return a - b;
});
// console.log(sideEffects);
const middleIndex = Math.floor(sideEffects.length / 2);
// console.log(middleIndex);
const median = sideEffects[middleIndex];
console.log('median = ', median);



// mode = most frequent number
// const map = new Map();
// map.set('red', 2);
// map.set('blue', 5);

// // increase blue by 1
// if (map.has('blue')) {
//     const value = map.get('blue');
//     const newValue = value + 1;
//     map.set('blue', newValue);
// }

// console.log(map);
// counts is a map of sideEffects -> frequency
const counts = new Map();
for (const effect of sideEffects) {
    if (!counts.has(effect)) {
        counts.set(effect, 1);
    } else {
        counts.set(effect, counts.get(effect) + 1);
    }
    console.log(effect);
}
console.log(counts);
const arr = [...counts.entries()];
const effectToFreq = arr.map((a) => {
    return { effect: a[0], freq: a[1] };
});
effectToFreq.sort((a, b) => b.freq - a.freq);
console.log(effectToFreq)
const mode = effectToFreq[0].effect;
console.log('mode = ', mode);

