const scroller = document.getElementById('percentage-scroller');

const updateProgressBar = () => {
    scroller.style.width = `${ getPercentageScrolled() }%`;
}

window.addEventListener ('scroll', () => {
    updateProgressBar();
});