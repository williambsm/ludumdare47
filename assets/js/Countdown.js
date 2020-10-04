export default class Countdown {
    constructor (end, callback) {
        this.start = Date.now();
        this.timerEvent = null;
        this.timer = null;
        this.end = end;
        this.callback = callback;

        this.startTimer();
    }

    displayCountdown () {
        // Get minutes.
        let minutes = Math.floor((this.end - this.timer) / 60);
        // Get seconds.
        let seconds = Math.floor((this.end - this.timer) % 60);
        // Return formatted.
        return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }

    startTimer () {
        let countdown = this;
        this.timerEvent = setInterval(function () {
            // Get timer now.
            countdown.timer = Math.floor((Date.now() - countdown.start) / 1000);

            if (countdown.timer >= countdown.end) {
                console.log(countdown.timer + ' is higher than ' + countdown.end);
                countdown.callback();
                countdown.stopTimer();
            }
        }, 100);
    }

    stopTimer () {
        clearInterval(this.timerEvent);
    }
}
