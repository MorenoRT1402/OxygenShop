const scroller = document.getElementById('percentage-scroller');

const updateProgressBar = () => {
    const scrollablePixels = document.body.scrollHeight - window.innerHeight;
    scroller.style.width = `${ window.scrollY / scrollablePixels * 100 }%`;
}

window.addEventListener ('scroll', () => {
    updateProgressBar();
});

console.log(scroller);