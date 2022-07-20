function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('Duplicate');
}

function extend(Child, Parent) {
    /**
     * The following line is the prototypical inheritance
     * So, Shape object is the father of Circle object
     */
    Child.prototype = Object.create(Parent.prototype);
    /**
     * Circle.prototype.constructor = Circle;
     * new Circle.prototype.constructor() => new Circle();
     * 
     * This is used becuase when we inheritance from another object
     * the constructor of the child is reset, that's means the constructor would be
     * of the father object, in this case Shape object
     * and doing this, the constructor would be of the object itself
     * Circle
     */
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color); // This call the super constructor method

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('Draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'blue');
