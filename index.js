/**
 * An object in JS is basically a collection of key-value pairs
 */
const circle = {
    radius: 1, // <-- Properties
    location: {
        x: 1,
        y: 1
    },
    draw: function() { // <-- Method
        // console.log('Draw');
    }
};

circle.draw();

// Factory function
function createCircle(radius = 0) {
    return {
        radius,
        draw: function() {
            // console.log('Draw')
        }
    }
}

const newCircle = createCircle(2);

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        // console.log('draw');
    }
}

// const anotherCircle = Circle(1); // this Apunta a Window in the browser, se podrian modificar las propiedades de Window, creando bugs en nuestra aplicacion

/**
 * Cuando se usa new pasan 3 cosas principales:
 * 1. Se crea un objeto vacio {}
 * 2. Se asgina this a la funcion
 * 3. Y retorna this 
 */
const anotherCircle = new Circle(1); // this Apunta a la function Circle

// Constructor property

let x = {};
/**
 * JS will do something like this:
 * let x = new Object();
 * 
 * and if anotherCircle.constructor is used, would be something like this:
 * 
 * f Circle(radius) {
 *  this.radius = radius;
 *  this.draw = function() {
 *      console.log('draw');
 *  }
 * }
 *
 * 
 * Every object has a constructor property and that references the function thas was used to create the object
 * 
 * new String(); Can be used to create an string object or we can simple use '', "", ``
 * new Boolean(); true, false
 */



/**
 * Functions are objects in JS, functions have properties and methods
 */
function Circle(radius) { // <-- this function was created with Function
    this.radius = radius;
    this.draw = function() {
        // console.log('draw');
    }
}

/**
 * The first argument will determine the context of "this", in this case this = {}
 */
Circle.call({}, 1); // This expression is exactly as...
const anotherC = new Circle(1); // ... this one

Circle.apply({}, [1, 2, 3]); // Is exactly like the "call" method, but the arguments are passed in an array


/**
 * This create an object as the previous one
 */
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    // console.log('draw');
}
`);

const c = new Circle1(1);

// To know if a property exists in an object we can use "in"

if ('radius' in circle)
    // console.log('circle has a radius property');

// Private Properties and Methods
function Circle2(radius) {
    this.radius = radius; // Public

    let defaultLocation = { x: 0, y: 0 }; // Private members of the circle object

    let computeOptimumLocation = function(factor) {
        //...
    }

    /**
     * This a clouser, can access to the variables by the outer function
     */
    this.draw = function() { 
        /**
         * This variables are temporary, will die after the functions ends
         * and every time this function is call, will be created again
         */
        let x, y; // Ignore
        
        computeOptimumLocation(0.1);
        
        console.log('draw');
    }

    // Define get and set for defaultLocation
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');

            defaultLocation = value;
        }
    });
}

const circle2 = new Circle2(10);
circle2.defaultLocation = { x: 1, y: 1 };
circle2.draw(); 
