function mixin(target, ...sources) { // ... is called rest operator
    Object.assign(target, ...sources); // ... is called spread operator, because spread an array intro multiple objects
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk: function() {
        console.log('walking');
    }
}

const canSwim = {
    swim: function() {
        console.log('can swim')
    }
}

function Person() {
}

/**
 * Inheritance IS A
 * Composition HAS A
 */
// Example of composition
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

const person = new Person();

console.log(person)

function GoldFish() {
}

// Object.assign(GoldFish.prototype, canEat, canSwim);
mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();

console.log(goldFish);
