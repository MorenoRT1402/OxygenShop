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
    const nameValid = name => {
        const MIN_CHARS = 2; const MAX_CHARS = 100;
        const numPattern = /\d/;
        return !(name.length < MIN_CHARS || name.length > MAX_CHARS || numPattern.test(name));
    }

    const name = event.target.elements['name'];
    changeClass(name, nameValid(name.value));
}

form.addEventListener('submit', event => {
    event.preventDefault();

    validateForm(event);
})