(function(){
    'use strict';

    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        init: function() {
            this.hours ='12';
            this.minutes = '30';
            this.seconds = '20';
        },
        display: function() {
            return`${this._f(this.hours)}  :  ${this._f(this.minutes)}  :  ${this._f(this.seconds)}`;
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
                document.getElementById('timer_2').innerHTML = this.display();

                if(this.seconds == 0 && this.minutes == 0 && this.hours == 0) {
                    clearInterval(interval);
                    this.hours = 10 + this.hours;
                }

            }, 1000);
            
        }
    };

     let timeDown = Object.assign({}, time);
     timeDown.countDown();

     let timeDown_2 = Object.assign({}, time);
     timeDown_2.countDown();
     console.log(time);
})();