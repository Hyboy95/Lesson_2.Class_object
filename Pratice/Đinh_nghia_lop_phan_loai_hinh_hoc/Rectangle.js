class Rectangle {
    color;
    filled;
    width;
    length;
    constructor(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea() {
        return  this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}

let rect = new Rectangle('blue', false, 4,5);
console.log(rect);
console.log(rect.getArea());
console.log(rect.getPerimeter());