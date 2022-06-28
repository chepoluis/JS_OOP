/**
 * A property descriptor is a simple JavaScript object associated with
 * each property of the object that contains information about that property such
 * as it's value and other meta-data
 */

let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person);
// console.log(objectBase)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor)
/**
 * descriptor has some properties as:
 * configurable, enumerable, writable
 */

Object.defineProperty(person, 'name', {
    writable: false, // Read only properties
    enumerable: false, // Is not show up in Object.keys
    configurable: false // It can not be deleted the property
})

// person.name = 'asd';

// console.log(Object.keys(person))

// delete person.name;
// console.log(person)