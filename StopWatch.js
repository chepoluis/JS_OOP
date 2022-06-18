function StopWatch() {
    let isAlreadyStarted = false, duration = 0, startTime, endTime;

    this.start = function() {
        if (isAlreadyStarted)
            throw new Error('Stopwatch has already started.');

        isAlreadyStarted = true;

        startTime = new Date();
    }

    this.stop = function() {
        if (!isAlreadyStarted)
            throw new Error('Stopwatch is not started.');

        isAlreadyStarted = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        duration = 0;
        isAlreadyStarted = false;
        startTime = null;
        endTime = null;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}