const fs = require('fs');

// const data = fs.readFileSync('./a.txt').toString();
fs.readFile('./b.txt', (err, buffer) => {
    if (err) {
        console.log('had an error', err);
        return;
    }
    const strData = buffer.toString();
    console.log('finished');
    const names = strData.split('\n').filter(name => name.length > 0);
    console.log(names);
});

let fileOut = '';
for(let i = 0; i < 10; i++) fileOut += `${i + 1}\n`;

fs.writeFileSync('./1_to_10.txt', fileOut);
