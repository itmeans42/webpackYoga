const timer = () => {
    let deadline = '2019-05-30';

const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t /(1000 * 60 * 60));
        
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
    function updateClock() {
        let t = getTimeRemaining(endtime);
            hours.textContent = zero(t.hours) ;
            minutes.textContent = zero(t.minutes);
            seconds.textContent = zero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        }
    };

    function zero(a) {
        if (a < 10) {
            a = '0' + a;
            }
            return a;
        }
        
    setClock('timer', deadline);
};

module.exports = timer;