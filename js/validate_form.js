const BASE_CLASS = 'form-contact__input__value';
const VALID_MOD = '--valid'; const INVALID_MOD = '--invalid';
const form = document.getElementById('form-contact');

const changeClass = (Element, valid) => {
    if(valid){ 
        Element.classList.add(BASE_CLASS+VALID_MOD);
        Element.classList.remove(BASE_CLASS+INVALID_MOD);
    }
    else{
        Element.classList.add(BASE_CLASS+INVALID_MOD);
        Element.classList.remove(BASE_CLASS+VALID_MOD);
    }
}

const validateForm = event => {
    const validation = (Element, validationFn) => {
        changeClass(Element, validationFn(Element.value));
    };

    // Name Validation
    const nameValid = name => {
        const MIN_CHARS = 2; const MAX_CHARS = 100;
        const numPattern = /\d/;
        return !(name.length < MIN_CHARS || name.length > MAX_CHARS || numPattern.test(name));
    }

    const name = event.target.elements['name'];
    validation(name, nameValid);

    //Email Validation
    const emailValid = email => {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(email);
    }

    const email = event.target.elements['email'];
    validation(email, emailValid);
}

form.addEventListener('submit', event => {
    event.preventDefault();

    validateForm(event);
})