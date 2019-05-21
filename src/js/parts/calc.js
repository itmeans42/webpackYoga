const calc = () => {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    document.body.addEventListener('input', (elem) => {
        if (elem.target.classList == 'counter-block-input') {
            elem.target.value = elem.target.value.replace(/(^[0]{1})/, '');
        }

        personsSum = +persons.value;
        daysSum = +days.value;
        total = (daysSum + personsSum) * 4000;

        if (days.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * place.options[place.selectedIndex].value;
        }
    });
};
module.exports = calc;