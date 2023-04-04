class Circle {
    color;
    filled;
    radius;
    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle('red', false, 4);
console.log(circle);
console.log(circle.getPerimeter());
console.log(circle.getArea());