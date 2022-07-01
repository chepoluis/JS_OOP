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


function solution(array) {
	return array.sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime());
}

console.log(solution([
    {
      name: "Nicolas",
      dateOfBirth: new Date(1993, 6, 9),
    },
    {
      name: "Santiago",
      dateOfBirth: new Date(2018, 6, 11),
    },
    {
      name: "Zulema",
      dateOfBirth: new Date(1994, 10, 7),
    }
  ]))

  /************** */
  // Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}