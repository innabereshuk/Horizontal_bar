(function(){
    'use strict';

    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        init: function() {
            let date = new Date();
            this.hours = date.getHours();
            this.minutes = date.getMinutes();
            this.seconds = date.getSeconds();
        },
        display: function() {
            return`${this._f(this.hours + 10)}  :  ${this._f(this.minutes)}  :  ${this._f(this.seconds)}`;
        },
        _f: function(str) {
            return('0' +str).substr(-2);
        },
        countDown: function() {
            this.init();
            let interval = setInterval(() => {
                this.seconds = (this.seconds == 0) ? 59 : this.seconds - 1;

                this.minutes = (this.minutes == 0 && this.seconds == 59) ? 59 :
                               (this.seconds == 59) ?
                               this.minutes - 1 :
                               this.minutes;

                this.hours = (this.minutes == 59 && this.seconds == 59) ? 
                             this.hours - 1 :
                             this.hours;

                document.getElementById('timer').innerHTML = this.display();

                if(this.seconds == 0 && this.minutes == 0 && this.hours == 0) {
                    clearInterval(interval);
                    this.hours = 10 + this.hours;
                }

            }, 1000);
            
        }
    };

     let timeDown = Object.assign({}, time);
     timeDown.countDown();
     console.log(time);
})();