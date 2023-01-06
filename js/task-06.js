const InputRef = document.querySelector('#validation-input');

InputRef.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
    console.log(InputRef.dataset.length);
    // console.log('typeof InputRef.dataset.length',typeof Number(InputRef.dataset.length));
    // console.log(typeof event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(InputRef.dataset.length)) {
        InputRef.classList.add('valid');
        if (InputRef.classList.contains('invalid')) {
            InputRef.classList.remove('invalid');
        }
    }
    else {
        InputRef.classList.add('invalid'); 
        if (InputRef.classList.contains('valid')) {
            InputRef.classList.remove('valid');
        }
    }
    
}