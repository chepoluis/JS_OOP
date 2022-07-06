function StopWatch() {
    let running = false, duration = 0, startTime, endTime;

    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        },
        set: function(value) { running = value;}
    });
 
    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        },
        set: function(value) { endTime = value; }
    });
 
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) { return duration = value; }
    });
 
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        },
        set: function(value) { startTime = value;}
    })

    /**
     * First version
     */

    // this.start = function() {
    //     if (running)
    //         throw new Error('Stopwatch has already started.');

    //     running = true;

    //     startTime = new Date();
    // }

    // this.stop = function() {
    //     if (!running)
    //         throw new Error('Stopwatch is not started.');

    //     running = false;

    //     endTime = new Date();

    //     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    //     duration += seconds;
    // }

    // this.reset = function() {
    //     this.duration = 0;
    //     this.running = false;
    //     this.startTime = null;
    //     this.endTime = null;
    // }
}

/**
 * Some cases it's better to create the methods in the prototype to not create many instance of that method
 */

StopWatch.prototype.start = function() {
    if (this.running)
        throw new Error('Stopwatch has already started.');

    this.running = true;

    this.startTime = new Date();
}

StopWatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;

    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
}

StopWatch.prototype.reset = function() {
    this.duration = 0;
    this.running = false;
    this.startTime = null;
    this.endTime = null;
}

const sw = new StopWatch();