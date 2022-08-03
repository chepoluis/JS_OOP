// Private properties / methods
const _count = new WeakMap();
const _stacKElements = new WeakMap();

class Stack {
    constructor() {
        _stacKElements.set(this, []);
        // console.log(_stacKElements.get(this))
        _count.set(this, _stacKElements.get(this).length);
    }
    
    get count() {
        return _count.get(this);
    }
    
    peek() {
        const items = _stacKElements.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');

        const lastPosition = items.length - 1;
        return _stacKElements.get(this)[lastPosition];
    }
    
    pop() {
        const newObj = _stacKElements.get(this);

        if (newObj.length === 0)
            throw new Error('Stack is empty.');

        const result = newObj.pop();
        
        _stacKElements.set(this, newObj);
        _count.set(this, _stacKElements.get(this).length);
        
        return result;
    }
    
    push(obj) {
        const newObj = _stacKElements.get(this);
        newObj.push(obj);

        _stacKElements.set(this, newObj);
        _count.set(this, _stacKElements.get(this).length);
    }
}

const s = new Stack();

console.log(s)

// Solution 2


const _items = new WeakMap();

class Stack2 {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0)
      throw new Error('Stack is empty.');

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0)
      throw new Error('Stack is empty.');

    return items[items.length - 1];      
  }

  get count() {
    return _items.get(this).length;
  }
}