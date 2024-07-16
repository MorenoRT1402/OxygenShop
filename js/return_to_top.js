const btn = document.getElementById('btn-totop');

btn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})