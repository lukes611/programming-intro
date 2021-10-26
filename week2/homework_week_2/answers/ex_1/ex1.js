// exercise starts here

// example exercise: create a function to add two numbers
// eg, console.log(add(5, 15)); should print 20
function add (a, b) {
    return a + b;
}
viewAndLog('5 + 15 = ' + add(5, 15));

// create a function which multiplies two numbers
// write your function here:
function multiply(a, b) {
    return a * b;
}
viewAndLog('3 * 10 = ' + multiply(3, 10));

// complete the function which returns how many words a sentence has
// sentence: a string
function howManyWords(sentence) {
    const wordsArr = sentence.split(' ');
    return wordsArr.length;
    // note: can also just do: return sentence.split(' ').length;
}
const sentence = 'this paint is drying weird';
viewAndLog('sentence "' + sentence + '" has ' + howManyWords(sentence) + ' words (should be 5)');

const sentence2 = 'Toronto is just like New York, but without all the stuff';
viewAndLog('sentence "' + sentence2 + '" has ' + howManyWords(sentence2) + ' words (should be 11)');

// end exercise

function viewAndLog(text) {
    console.log(text);
    const el = document.createElement('div');
    el.style.paddingBottom = '12px';
    el.style.borderBottom = '1px dashed darkblue';
    el.innerText = text;
    document.body.appendChild(el);
}
