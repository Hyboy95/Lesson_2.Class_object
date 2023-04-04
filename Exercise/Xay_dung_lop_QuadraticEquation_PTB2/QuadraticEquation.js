class QuadraticEquation {
    a;
    b;
    c;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getter() {
        return `${this.a}, ${this.b}, ${this.c}`
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    }

    getRoot2() {
        return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    }
}

function calculate(quadratic) {
    if (quadratic.getDiscriminant() > 0) {
        console.log(`${quadratic.getRoot1()}, ${quadratic.getRoot2()}`);
    } else if (quadratic.getDiscriminant() === 0) {
        console.log(`${quadratic.getRoot1()}`);
    } else {
        console.log(`The equation has no roots`);
    }
}

let quadratic_1 = new QuadraticEquation(1,2,1);

calculate(quadratic_1);
