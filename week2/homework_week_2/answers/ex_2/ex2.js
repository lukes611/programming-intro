// your code will go in the main function
function main(astronaughtsInSpace) {
    // exercise starts here
    
    // astronaughtsInSpace is an array of objects
    // each object looks like { craft: string, name: string }
    //  example: { craft: 'Shenzhou 13', name: 'Ye Guangfu' } 

    // 1. console.log this data so you can inspect it in the developer tools.
    console.log(astronaughtsInSpace);


    // 2. loop over each astronaught and console.log the sentence:
    // {name} is on the {craft} craft
    for (const astronaught of astronaughtsInSpace) {
        const sentence = astronaught.name + ' is on the ' + astronaught.craft + ' craft';
        console.log(sentence);
    }

    // 3. loop over each astronaught and create html divs, add the same sentence as above
    // and append to the document.body
    // hint: const el = document.createElement('div'); creates a div
    // el.innerText = ... to set text
    // document.body.appendChild(...) to add some element to the <body>
    for (const astronaught of astronaughtsInSpace) {
        const sentence = astronaught.name + ' is on the ' + astronaught.craft + ' craft';
        const el = document.createElement('div');
        el.innerText = sentence;
        if (astronaught.craft === 'ISS') {
            el.style.backgroundColor = 'lightgreen';
        } else {
            el.style.backgroundColor = 'lightblue';
        }
        document.body.appendChild(el);
    }



    // end exercise
}

// you don't need to understand the code below
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => main(data.people));

