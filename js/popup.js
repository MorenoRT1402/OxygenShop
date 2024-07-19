const POPUP_KEY = 'popup-closed';
const popup = document.getElementById('popup-subscribe');
const popupClose = document.getElementById('popup__close');

const show = () => {
    if(sessionStorage.getItem( POPUP_KEY )) return;

    popup.classList.remove('inactive');
}

setTimeout(show, 5000);

window.addEventListener('scroll', () => {
    if(getPercentageScrolled() >= 25)
        show();
})

const popupForm = document.getElementById('popup-form');
const errorDisplayer = document.getElementById('popup-error-displayer')
popupForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = event.target.elements["email"];

    if(emailValid(email.value)){
        sendData({ email : email.value });
        email.classList.remove('invalid');
        errorDisplayer.classList.add('inactive');
    } else { 
        email.classList.add('invalid'); 
        errorDisplayer.classList.remove('inactive');
    }

})

const hide = () => {
    popup.classList.add('inactive');
    sessionStorage.setItem( POPUP_KEY, true );
}

popupClose.addEventListener('click', () => {
    hide();
});

window.addEventListener("click", function(event) {
    if (!popup.contains(event.target) && event.target !== popup) {
        hide();
    }
});

document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        hide();
    }
})
