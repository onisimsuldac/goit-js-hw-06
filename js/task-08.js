const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Te rugam sa introducei o valoare in ambele campuri');
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };
        console.log(formData);
        loginForm.reset();
    }
});

