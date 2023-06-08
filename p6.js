class Shape {
    constructor(sides = []) {
        this.sides = sides;

    }
    perimeter = (sides) =>
        this.sides.length > 0 ? this.sides.reduce((side1, side2) => side1 + side2, 0) : 0


}

//testing the Shape class
// console.log(new Shape([5, 10]).perimeter());  // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width])
        this.width = width;
        this.length = length;
    }
    area = () =>
        this.length * this.width;
}

//tetsing the Rectangle Class
// console.log(new Rectangle(4, 4).perimeter());  // 16
// console.log(new Rectangle(4, 4).area());  // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0


class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC])
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        let s = (this.sideA + this.sideB + this.sideC) / 2;
        let a = Math.sqrt(s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC)));
        return a;
    }
}

//test triangle class
// console.log(new Triangle(3, 4, 5).perimeter());  // 12
// console.log(new Triangle(3, 4, 5).area());  // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0

// Array of sides arrays

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];
for (const sides of data) {
    let description = '';
    let shape = null;
    switch (sides.length) {
        case 2:
            description = 'Rectangle'
            if (sides[0] === sides[1]) {
                description = 'square'
            }
            shape = new Rectangle(...sides)
            break;

        case 3:
            description = 'triangle'
            shape = new Triangle(...sides)
            break;
        default:
            break;
    }
    if (description.length > 0) {
        console.log(`${description} with sides ${sides.toString()} as perimeter of ${shape.perimeter()} and area of ${shape.area()}`)
    } else if (sides.length === 1) {
        console.log('shape with 1 side unsupported')
    } else if (sides.length === 0) {
        console.log('shape with 0 sides unsupported')
    }
}

