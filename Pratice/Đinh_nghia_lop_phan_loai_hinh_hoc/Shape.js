class Shape {
    color;
    filled;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

let shape = new Shape('green', false);
console.log(shape);