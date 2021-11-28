const fs = require('fs');

// const data = fs.readFileSync('./a.txt').toString();
fs.readFile('./a.txt', (err, buffer) => {
    if (err) {
        console.log('had an error', err);
        return;
    }
    const strData = buffer.toString();
    const names = strData.split('\n').filter(name => name.length > 0);
    console.log(names);

    const uppercaseNames = names.map(name => name.toUpperCase());
    console.log(uppercaseNames);

    fs.writeFile('./uppercase_names.txt', uppercaseNames.join('\n'), (err) => {
        if (err) console.log('there was an err', err);
        else console.log('yay completed converting the names to uppercase');
    });
});

// let fileOut = '';
// for(let i = 0; i < 10; i++) fileOut += `${i + 1}\n`;

// fs.writeFileSync('./1_to_10.txt', fileOut);
