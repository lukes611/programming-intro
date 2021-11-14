
const person1 = {
    name: 'luke',
    age: 30,
    canApply() {
        if (this.age >= 18) {
            console.log(this.name, 'can apply');
        } else {
            console.log(this.name, 'cannot apply');
        }
    },
    printName() {
        console.log(this.name);
    },
    printInfo() {
        this.printName();
        this.canApply();
    }
};

const person2 = {
    name: 'thao',
    age: 15,
    canApply() {
        if (this.age >= 18) {
            console.log(this.name, 'can apply');
        } else {
            console.log(this.name, 'cannot apply');
        }
    },
};

person1.canApply();
person2.canApply();

person2.printName();


function showUserInfo(person, creditCheckFunction) {
    // show in the browser window if they can apply or not
}





// console.log(person1);
// console.log(person2);



