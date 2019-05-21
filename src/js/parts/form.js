const form = () => {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся :)',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        statusMessage = document.createElement('div');
    
        document.body.addEventListener('input', (elem) => {
            if (elem.target.getAttribute('type') === 'tel') {
                elem.target.value = '+' + elem.target.value.replace(/[^\d]/g, '').slice(0, 11);
                if (elem.target.value.length == 1) {
                    elem.target.value = '';
                }
            }
        });
        statusMessage.classList.add('status');
    
    const sendForm = (elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let input = elem.getElementsByTagName('input'),
                formData = new FormData(elem);
            statusMessage.style.display = 'block';
        
    const postData = (data) => {
        return new Promise(function(resolve,reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4){
                    resolve();
                } else if(request.readyState === 4 && request.status === 200) {
                    resolve();
                } else {
                    reject();
                }

            });
    
                let obj = {};
                data.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);

            });
        }; // postData
    
        const clearInput = () => { 
            for(let i = 0; i < input.length; i++) { 
                input[i].value = '';
            }
        };

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> {
                statusMessage.innerHTML = message.success;
                setTimeout(()=> { 
                    statusMessage.style.display = 'none';
                }, 5000);
            })
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });
};
    sendForm(form);
    sendForm(contactForm);

};

module.exports = form;