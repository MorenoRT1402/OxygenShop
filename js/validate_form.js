const BASE_CLASS = 'form-contact__input__value';
const INVALID_MOD = '--invalid';
const form = document.getElementById('form-contact');

const MIN_CHARS = 2; const MAX_CHARS = 100;


const changeClass = (Element, valid) => {
    if(valid){ 
        Element.classList.remove(BASE_CLASS+INVALID_MOD);
    }
    else{
        Element.classList.add(BASE_CLASS+INVALID_MOD);
    }
}

const validateForm = event => {
    let validationString = '';
    const validation = (Element, validationFn) => {
        const isValid = validationFn(Element.value);
        changeClass(Element, isValid);
        return isValid;
    };

    // Name Validation
    const nameValid = name => {
        const numPattern = /\d/;
        return !(name.length < MIN_CHARS || name.length > MAX_CHARS || numPattern.test(name));
    }

    const name = event.target.elements['name'];
    const nameIsValid = validation(name, nameValid);
    if(!nameIsValid) validationString = validationString.concat(`+ Name must contain between ${MIN_CHARS} and ${MAX_CHARS} letters \n`);

    //Email Validation
    const email = event.target.elements['email'];
    const emailIsValid = validation(email, emailValid);
    if(!emailIsValid) validationString = validationString.concat('+ Enter a valid email \n');

    //Checkbox
    const checkbox = event.target.elements['checkbox'];
    const INVALID_CHECKBOX = 'form-contact__terms__input--invalid';
    if(!checkbox.checked){
        checkbox.classList.add(INVALID_CHECKBOX);
        validationString = validationString.concat('+ Mark the checkbox'); 
    } else {
        checkbox.classList.remove(INVALID_CHECKBOX); 
    }

    if(!nameIsValid || !emailIsValid || !checkbox.checked){
        alert(validationString);
        return false;
    }
    return true;
}