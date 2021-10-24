// console.log('test');

// const button2Id = 'button-2';
// const button2El = document.getElementById(button2Id);
// console.log(button2El);
// button2El.style.color = 'red';
// button2El.style.backgroundColor = 'green';
// button2El.style.position = 'absolute';
// button2El.style.left = '20px';
// button2El.style.bottom = '20px';

// const info = document.createElement('div');
// info.innerText = 'cat';
// info.style.backgroundColor = 'green';
// document.body.appendChild(info);

// function printLuke() {
//     console.log('dad');
// }

// printLuke();
// printLuke();
// printLuke();

// personName - example: 'martin lincoln'
// returns an object
// example of return { firstName: 'martin', lastName: 'lincoln' }
function constructNameObject(personName) {
    const nameParts = personName.split(' ');
    const output = {
        firstName: nameParts[0],
        lastName: nameParts[1],
    };
    return output;
}

function add(a, b) {
    return a + b;
}

const tmp = 5;

function addTwo(a) {
    const tmp = a + 2;
    console.log('tmp', tmp);
    return tmp;
}

console.log('addTwo: 5 =', addTwo(5));


const subtract = (a, b) => {
    return a - b;
}; 

const person = 'martin lincoln';
const output = constructNameObject(person);
console.log(output);


const person2 = 'luke lincoln';
const output2 = constructNameObject(person2);
console.log(output2);
console.log('person a, fist name = ', output2.firstName);


console.log(add(5, 6));
console.log(subtract(5, 6));
