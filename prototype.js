function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        this.draw(); // I can access to prototype members
        console.log('Move :D');
    }
}

const c1 = new Circle(2);

// Prototype members
Circle.prototype.draw = function() {
    // this.move(); // I can access to methos and properties of the class
    console.log('Draw :D');
}

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

// c1.draw(); // It can be access after the object creation because here we are dealing with object references

// Returns instance members only
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);

/**
 * own in JS means = instance
 */
console.log(c1.hasOwnProperty('radius')) // = true
console.log(c1.hasOwnProperty('draw')) // = false
