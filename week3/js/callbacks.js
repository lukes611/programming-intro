

// function operateOn(a, b, f) {
//     // console.log(typeof f);
//     // return a + b;
//     return f(a, b);
// }


// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;

// console.log(operateOn(5, 6, add));
// console.log(operateOn(10, 2, add));

// const fruits = ['apple', 'berry', 'banana', 'orange'];

// function removeItem(arr, keepFn) {
//     const newFruits = [];
//     for (const fruit of fruits) {
//         if (keepFn(fruit)) {
//             newFruits.push(fruit);
//         }
//     }
//     return newFruits;
// }

// function keep(fruit) {
//     if (fruit === 'banana' || fruit === 'orange') {
//         // if fruit is banana or orange::
//         return false;
//     }
//     return true;
// }

// console.log(removeItem(fruits, keep));
// console.log(removeItem(fruits, fruit => fruit !== 'banana' && fruit !== 'orange'));
// console.log(newFruits);

// console.log(fruits.filter(fruit => fruit !== 'banana'));


// function add(a, b, callback) {
//     callback(a + b);    
// }


// add(5, 10, result => {
//     console.log(result);
//     console.log(result + 20);
// });

let count = 0;

const box = document.createElement('div');
Object.assign(box.style, {
    position: 'absolute',
    top: '20px',
    left: '0px,',
    backgroundColor: 'red',
    width: '20px',
    height: '20px',
});
document.body.appendChild(box);

setInterval(() => {
    console.log('hello', count);
    count++;
    box.style.left = `${count}px`;
    box.style.backgroundColor = `rgb(255, ${count % 256}, 0)`;
}, 25);
