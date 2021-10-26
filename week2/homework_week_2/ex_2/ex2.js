// your code will go in the main function
function main(astronaughtsInSpace) {
    // exercise starts here
    
    // astronaughtsInSpace is an array of objects
    // each object looks like { craft: string, name: string }
    //  example: { craft: 'Shenzhou 13', name: 'Ye Guangfu' } 

    // 1. console.log this data so you can inspect it in the developer tools.
    console.log('TODO');


    // 2. loop over each astronaught and console.log the sentence:
    // {name} is on the {craft} craft

    // 3. loop over each astronaught and create html divs, add the same sentence as above
    // and append to the document.body
    // hint: const el = document.createElement('div'); creates a div
    // el.innerText = ... to set text
    // document.body.appendChild(...) to add some element to the <body>

    // additional exercise, if an astronaught is on the ISS, set the div
    // background-color to 'lightgreen' otherwise set it to 'lightblue'
    // hint: you can use the === operator to check their craft
    // example:
    /*
     * for (const astronaught of astronaughtsInSpace) {
     *   if (astronaught.craft === 'ISS') {
     *     ...
     *   } else {
     *     ...
     *   }
     *
     * }
     */

    // end exercise
}

// you don't need to understand the code below
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => main(data.people));

