function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    counter = document.querySelector('.counter'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

    // persons.addEventListener('change', function() {
    //     personsSum = +this.value;
    //     total = (daysSum + personsSum)*4000;

    //     if (restDays.value == '') {
    //         totalValue.innerHTML = 0;
    //     } else {
    //         totalValue.innerHTML = total;
    //     }
    // });

    // restDays.addEventListener('change', function() {
    //     daysSum = +this.value;
    //     total = (daysSum + personsSum)*4000;

    //     if(persons.value == '') {
    //         totalValue.innerHTML = 0;
    //     } else {
    //         totalValue.innerHTML = total;
    //     }
    // });

    // place.addEventListener('change', function() {
    //     if (restDays.value == '' || persons.value == '') {
    //         totalValue = 0;
    //     } else {
    //         let a = total;
    //         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    //     }
    // });

    function calcOverall() {
        let person = +persons.value,
            days = +restDays.value,
            sity = +place.value;
        if ((person == '' || days == '') || (person == 0 || days == 0)) {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = (days + person) * 4000 * sity;
        }
    }

    counter.addEventListener('change', function (event) {
        let target = event.target;

        if (target && target.classList.contains('counter-block-input')) {
            calcOverall();
        }
        if (target && target.options) {
            calcOverall();
        }
    });
}

module.exports = calc;