function changeWidth () {
    const inputs = document.querySelectorAll('#login-form form input');
    inputs.forEach(input => {
        input.addEventListener('focusin', e => {
            const parnet = e.target.parentElement;
            parnet.classList.add('w-100');
        })
        input.addEventListener('focusout', e => {
            const parnet = e.target.parentElement;
            parnet.classList.remove('w-100');
        })
    })
}

export default changeWidth;