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

    this.render = function() {
        return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>
        `;
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

// HtmlSelectElement.prototype.render = function() {
    // HtmlElement.prototype.render.call(this);
    // let options = '';

    // this.items.forEach((val) => {
    //     options += `  <option>${val}</option>\n`;
    // })
    // console.log(options)

    // console.log(`<select>\n ${options}</select>`);
// }
 
const he = new HtmlElement();
const e = new HtmlSelectElement([1,2,3,4]);

console.log(e)

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
