

// const isBanana = false;
// const hasMold = true;

// // true, false
// // AND, OR, NOT
// // &&,  ||, !

// // console.log(!isBanana);
// // have vanilla coke, have orange juice
// // console.log(false || false);

// function throwAwayObject() {

// }

// if (isBanana && !hasMold) {
//     // keep the banana
// } else {
//     throwAwayObject();
// }
function showDetails(person) {
    console.log(person);
    const container = document.createElement('div');
    container.style.border = '1px dashed black';
    document.body.appendChild(container);

    const nameSection = document.createElement('div');
    nameSection.innerText = person.name;
    container.appendChild(nameSection);

    const apartmentSection = document.createElement('div');
    if (person.livesInApartment) {
        apartmentSection.innerText = 'lives in an apartment';
    } else {
        apartmentSection.innerText = 'does not live in an apartment.';
    }
    container.appendChild(apartmentSection);

    container.style.backgroundColor = person.favoriteColor;
}

const people = [
    {
        name: 'martin',
        favoriteColor: 'yellow',
        livesInApartment: true,
    },
    {
        name: 'fred',
        favoriteColor: 'orange',
        livesInApartment: false,
    },
    {
        name: 'luke',
        favoriteColor: 'green',
        livesInApartment: true,
    },
];

for (const person of people) {
    showDetails(person);
}


let countValue = 0;
const counterElement = document.createElement('div');
counterElement.innerText = countValue;
document.body.appendChild(counterElement);

const increaseCountButton = document.createElement('button');
increaseCountButton.innerText = '⬆️';
document.body.appendChild(increaseCountButton);

function onClick() {
    countValue = countValue + 1;
    console.log(countValue);
    counterElement.innerText = countValue;
    counterElement.style.position = 'absolute';
    counterElement.style.left = countValue + 'px';
}

increaseCountButton.onclick = onClick;

const fruits = ['banana', 'apple', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}
