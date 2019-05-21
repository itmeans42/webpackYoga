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