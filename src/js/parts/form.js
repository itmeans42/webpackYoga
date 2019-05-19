function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся :)',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        inputNumber = document.querySelectorAll('input[type="tel"]'),
        statusMessage = document.createElement('div');
    
        for(let i = 0; i < inputNumber.length; i++){ 
            inputNumber[i].addEventListener('input', () => {
                inputNumber[i].value = inputNumber[i].value.replace(/[^\+\d]/g, '');
            });
        }
        statusMessage.classList.add('status');
    
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let input = elem.getElementsByTagName('input');
            let formData = new FormData(elem);
            statusMessage.style.display = 'block';
        
            function postData(data){
                return new Promise(function(resolve,reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4){
                            resolve();
                        } else if(request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }
    
                    });
    
                    let obj = {};
                    formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
    
                });
            } // postData
    
            function clearInput() { 
                for(let i = 0; i < input.length; i++) { 
                    input[i].value = '';
                }
            }
    
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
    }
    sendForm(form);
    sendForm(contactForm);
}

module.exports = form;