

const colors = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.innerText = i;
    div.style.backgroundColor = colors[i % colors.length];
    document.body.appendChild(div);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        console.log(`odd ${i}`);
    } else {
        console.log(`even ${i}`);
    }
}
