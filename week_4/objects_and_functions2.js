
/**
 * data:
 *  - color
 *  - x position
 *  - y position
 *  - speed
 * 
 * action:
 *  - move right 
 *  - move down 
 */

class Ghost {
    // setup the data
    constructor(color, imageName) {
        this.color = color;
        this.imageName = imageName;
        this.x = 5;
        this.y = 10;
        this.speed = 10;
        this.draw();
    }
    // record the methods (the actions)
    moveRight() {
        this.x += this.speed;
        this.fixPosition();
        this.image.style.left = `${this.x}px`;
    }
    
    moveDown() {
        this.y += this.speed;
        this.fixPosition();
        this.image.style.top = `${this.y}px`;
    }

    // if you go off the edge, this will fix your position
    fixPosition() {
        const screenWidth = window.innerWidth;

        // if (this.x >= 700) {
        //     this.x = 0;
        // }
        // same as:
        this.x = this.x % screenWidth;

        if (this.y >= window.innerHeight) {
            this.y = 0;
        }
    }

    log() {
        console.log(this.color, this.x, this.y);
    }

    draw() {
        const image = document.createElement('img');
        image.src = this.imageName;
        Object.assign(image.style, {
            width: '50px',
            height: 'auto',
            position: 'absolute',
            top: this.y + 'px',
            left: this.x + 'px',
        });
        document.body.appendChild(image);

        this.image = image;
    }
}

const ghost = new Ghost('pink', 'pink_ghost.png');
const ghost2 = new Ghost('blue', 'blue_ghost.png');
const ghost3 = new Ghost('orange', 'orange_ghost.png');

console.log(ghost);
console.log(ghost2);

console.log(ghost2.x);
console.log(ghost2.moveRight());
console.log(ghost2.x);

for (let i = 0; i < 20; i++) {
    ghost.moveDown();
}

setInterval(() => {
    ghost.moveRight();
    ghost2.moveDown();
    ghost3.moveDown();
    ghost3.moveRight();

    // ghost.log();
    // ghost2.log();
    // ghost3.log();
}, 30);

console.log(ghost);
