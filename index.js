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
        console.log('Draw');
    }
};

circle.draw();

// Factory function
function createCircle(radius = 0) {
    return {
        radius,
        draw: function() {
            console.log('Draw')
        }
    }
}

const newCircle = createCircle(2);
