const popup = document.getElementById('popup-subscribe');

const show = () => {
    if(sessionStorage.getItem('popup-appeared')) return;

    popup.classList.add('popup');
    popup.classList.remove('popup--inactive');
    sessionStorage.setItem('popup-appeared', true);
}

setTimeout(show, 5000);

window.addEventListener('scroll', () => {
    if(getPercentageScrolled() >= 25)
        show();
})
