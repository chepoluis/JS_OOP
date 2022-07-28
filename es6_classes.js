class Circle {
    constructor(radius) {
        this.radius = radius;

        this.move = function() {} // <-- it's created in the object instance of Circle object
    }

    draw() { // <-- it's created in the prototype of Circle object
        console.log('draw');
    }
}

const c = new Circle(2);

// ------------------------
// Function Declaration - is hoisted
function sayHello() {}

// Function Expression - is NOT hoisted
// This is terminated with a semicolon, because we're dealing with expressions
const sayGoodBye = function() {};
const num = 1;

// Class Declaration - is NOT hoisted
class Circle2 {
}

// Class Expression - is NOT hoisted
const square = class {
};

// ------------------------

class Square {
    // The body of a class in ES6 is executed in strict mode
    draw() {
        console.log(this); 
    }
}

const s = new Square();
const draw = s.draw;
draw(); // <-- return undefined, because we're calling this as stand alone function, that is not part of an object

// ------------------------
const something = Symbol(); // With Symbol we get a unique indentifier

// ------------------------
// Kind of awkard private properties / methods
const _radius = Symbol();
const _draw = Symbol();

class Square2 {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {} // [_draw]() <-- is called computer property names, the value in _draw is the name of the function
}

const s2 = new Square2(1);
const key = Object.getOwnPropertySymbols(s2)[0];
// console.log(s2[key]);

// ------------------------
// Private methods using WeakMap
// WeakMap: is essentially a dictionary where keys are objects and values can be eliminated
// It's called  Weak Map because there is no reference to these keys and they will be garbage collector  

const _radius3 = new WeakMap();
const _move = new WeakMap();
/**
 * We can use a single WeakMap for every private property and method,
 * but could be polluted, so could be better if we use a single WeakMap for every
 * private property or method
 */

class Circle3 {
    constructor(radius) {
        _radius3.set(this, radius); // Private property
        
        // Private function
        // _move.set(this, function() {
        //     console.log('move', this); // this = undefined
        // });
        
        _move.set(this, () => {
            console.log('move', this); // this = value of their containing function (Circle3) beacuse we're using arrow function
        });
    }

    draw() {
        // console.log(_radius3.get(this)) // Access to the _radius3 private property

        _move.get(this)();
    }
}


const c3 = new Circle3(3);
c3.draw()

