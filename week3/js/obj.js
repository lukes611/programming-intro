
const person = {
    name: 'luke',
    age: 30,
};

person.favColor = 'green';
delete person.age;

console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));

Object.assign(person, {
    sport: 'soccer',
    address: 'sydney',
});
console.log(person);

const divEl = document.createElement('div');
divEl.innerText = 'hello';
document.body.appendChild(divEl);


// divEl.style.backgroundColor = 'green';
// divEl.style.color = 'red';
// divEl.style.border = '1px solid black';
Object.assign(divEl.style, {
    backgroundColor: 'green',
    color: 'red',
    border: '1px solid black',
    position: 'absolute',
    bottom: '0px',
});
