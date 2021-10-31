
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.innerText = Math.random() <= 0.5 ? 'heads' : 'tails';

    const r = Math.floor(Math.random() * colors.length); // [0 - colors.length-1]
    console.log(r)
    // div.style.backgroundColor = colors[r];


    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // if (r <= 0.25) div.style.backgroundColor = colors[0];
    // else if (r <= 0.5) div.style.backgroundColor = colors[1];
    // else if (r <= 0.7) div.style.backgroundColor = colors[2];
    // else div.style.backgroundColor = colors[3];
    // console.log(Math.random());
}


const point1 = {
    x: 0,
    y: 0,
};

const point2 = {
    x: 100,
    y: 0,
};


const distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
console.log(point1, 'distance to', point2, 'is', distance);
