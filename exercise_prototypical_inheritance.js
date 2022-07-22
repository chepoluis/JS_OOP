function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(elements = []) {
    this.items = elements;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        const indexItem = this.items.indexOf(item);

        if (indexItem === -1) throw new Error('Item not found :/');

        this.items.splice(indexItem, 1);
    }
}

/**
 * HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
 * 
 * This is not gonna work becuase, Object.create will create a new object,
 * and set the prototype of that object, that's why click function is not in the 
 * HtmlSelectElement object and just exists the focus method in the prototype
 * 
 */

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; // It's similar to new HtmlSelectElement()
 
const he = new HtmlElement();
const e = new HtmlSelectElement();

console.log(e)
