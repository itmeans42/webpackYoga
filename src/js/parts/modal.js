const modal = () => {
    let overlay = document.querySelector('.overlay');

const attachModal = (overlayStatus, classListMethod) => {
    if (classListMethod == 'remove') {
        document.querySelector('.main-form').style.display = '';
        if (document.querySelector('.status-message')) {
        document.querySelector('.status-message').innerHTML = '';
        }
    }
    overlay.style.display = overlayStatus;
};

document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('more') || target.classList.contains('description-btn')) {
        attachModal('block', 'hidden', 'add');
    }
    if (target.classList.contains('popup-close')) {
        attachModal('', '', 'remove');
    }
});

};

module.exports = modal;