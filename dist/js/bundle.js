/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const modal = () => {
    let overlay = document.querySelector('.overlay'),
        isActiveBtn;

const attachModal = (overlayStatus, overflowStatus, classListMethod, el) => {
    if (classListMethod == 'add') isActiveBtn = el;
    if (!el) el = isActiveBtn;
    overlay.style.display = overlayStatus;
    el.classList[classListMethod]('more-splash');
    document.body.style.overflow = overflowStatus;
    
};

document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('more') || target.classList.contains('description-btn')) 
    attachModal('block', 'hidden', 'add', target);
    if (target.classList.contains('popup-close')) 
    attachModal('none', '', 'remove');
});

};

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const slider = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {

    if(n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
};

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});

dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});
};

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tabs = () => {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

const hideTabContent = (a) => {
    for(let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
};

hideTabContent(1);

const showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};

info.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});
};

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

    const zero = (a) => {
        if (a < 10) {
            a = '0' + a;
            }
            return a;
        }
        
    setClock('timer', deadline);
};

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");
    
    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map