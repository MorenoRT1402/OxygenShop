const emailValid = email => {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
}

const getPercentageScrolled = () => {
    const scrollablePixels = document.body.scrollHeight - window.innerHeight;
    return window.scrollY / scrollablePixels * 100;
}

window.emailValid = emailValid;