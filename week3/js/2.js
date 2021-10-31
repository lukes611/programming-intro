
// const month = 5;


// function getMonthName(month) {
//     const months = 'jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec'.split(',');
//     return months[month - 1];
// }

// const date = '2021-02-28'; // 28 of feb, 2021

// const dateParts = date.split('-');
// const niceDate = `${date[2]} of ${getMonthName(Number(dateParts[1]))}, ${dateParts[0]}`;
// console.log(niceDate);

// function f(value) {
//     if (typeof value === 'number') {
//         console.log(`got a number, ${value} + 5 = ${value + 5}`);
//     } else if (typeof value === 'boolean') {
//         console.log('got a boolean', value);
//     }
// }

// f(5);
// f(2.3);
// f(false);
// f(true);

function addButton(label) {
    const buttonEl = document.createElement('button');
    buttonEl.innerText = typeof label === 'string' ? label : 'no-label';
    document.body.appendChild(buttonEl);
}


addButton('next');
addButton('back');
addButton();
