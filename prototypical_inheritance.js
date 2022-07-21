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

// Overriding duplicate functions, you need to call it after extending the circle because at this point we are reseting the prototype
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);

    console.log('Duplicate circle');
}


Circle.prototype.draw = function() {
    console.log('Draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

// This is polymorphism, because Circle has the same method with a different behavior
Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
]

for (let shape of shapes)
    shape.duplicate() // Call the corresponding method for every shape

const s = new Shape();
const c = new Circle(1, 'blue');
