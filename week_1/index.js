// this is a print statement
// console.log('hello world');

let myName = 'jasmine';
// console.log(myName);

// string - text data
let sentence = 'Hello there, welcome to this app!';
let sentence2 = "Hello there, welcome to this app!";
let sentence3 = "My cat's name is Tom";
let sentence4 = 'My cat\'s name is Tom';
// console.log(sentence2);

// number - number
let age = 30;
// console.log(age);

myName = 'luke';
// console.log(myName);
let pet = 'cat';
let intro = 'I have a pet';
let fullIntro = intro + ' ' + pet;
// console.log(fullIntro);

let mumsAge = 63;
let combinedAge = age / mumsAge;
// console.log(combinedAge);

const lukeIsThirsty = true;
const lukeLovesBrown = false;

let phone = 'iphone';
phone = 'android';

// array
const familyNames = [myName, myName, 'jasmine', 'jasmine', 'martin', 'thao', 'rosemary'];
const numPeopleInFamily = familyNames.length;
console.log(familyNames);
console.log(numPeopleInFamily);
const indexOfFamilyMember = 3;
const familyMember = familyNames[indexOfFamilyMember - 2];
console.log(familyMember);

// object
const person = {
    name: 'luke',
    age: 30,
    hobbies: ['art', 'food'],
};
console.log(person);
const personsName = person.name;
console.log(personsName);
console.log(person.age);

const person2 = {
    name: 'luke',
    age: 30,
    hobbies: ['art', 'food'],
    sister: {
        name: 'jasmine',
        age: 28,
        hobbies: ['tumblr', 'disney+'],
    }
};
console.log(person2);
console.log(person2.sister.hobbies)
console.log(person2.sister.age)

const people = [
    { name: 'luke', age: 30 },
    { name: 'jasmine', age: 27 },
];

// JSON - JavaScript Object Notation
console.log(JSON.stringify(person2, null, 2));

// function
