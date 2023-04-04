class Square {
    color;
    filled;
    size;
    constructor(color, filled, size = 1.0) {
        this.color = color;
        this.filled = filled;
        this.size = size;
    }
}

let square = new Square('purple', false);
console.log(square);
console.log(square.size);