function changeType () {

    const passwordInput = document.querySelector(`#login-form input[type='password']`);
    const eye = document.querySelector('#login-form .fa-eye-slash')

    eye.addEventListener('click', e => {
        switch (passwordInput.type) {
            case 'password':
                passwordInput.type = 'text';
                eye.classList.remove('fa-eye-slash');
                eye.classList.add('fa-eye');
                break;
            case 'text':
                passwordInput.type = 'password';
                eye.classList.remove('fa-eye');
                eye.classList.add('fa-eye-slash');
            break;
            default:
                break;
        }
    })
}

export default changeType;