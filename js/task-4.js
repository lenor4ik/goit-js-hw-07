    const loginForm = document.querySelector('.login-form');
    const myInput = document.querySelector('.input-email');

    myInput.addEventListener('focus', function() {
    myInput.placeholder = 'Type area';
    });
    myInput.addEventListener('blur', function() {
    myInput.placeholder = '';
});
    loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = loginForm.elements['email'];
    const passwordInput = loginForm.elements['password'];

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
    const formData = {
    email: emailValue,
    password: passwordValue
        };
        console.log(formData);
        loginForm.reset();
    }
    });
