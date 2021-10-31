
const textAreaId = 'my-textarea';
const inputId = 'my-input';

const inputEl = document.getElementById(inputId);
const textAreaEl = document.getElementById(textAreaId);
console.log(inputEl);

inputEl.value = 'blue';

const twoLines = 'hello\n\ngoodbye';
console.log(twoLines);
textAreaEl.value = twoLines;


const buttonEl = document.getElementById('go-button');
buttonEl.onclick = () => {
    console.log('the input element value is: ', inputEl.value);

    const textAreaContent = textAreaEl.value;
    console.log(textAreaContent);
};
