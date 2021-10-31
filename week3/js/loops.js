
const fruits = ['apple', 'orange', 'banana'];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
console.log('******')
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}
console.log('******')

// let a = 0;
// console.log(a);
// // a = a + 2;
// // a += 1;
// a++;
// console.log(a);

for (let i = 0; i < 100; i += 10) {
    const div = document.createElement('div');
    div.innerText = i;
    document.body.appendChild(div);
}
