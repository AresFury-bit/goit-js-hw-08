const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', e => {
    e.preventDefault();


    const value = {
        email: loginForm.elements.email.value.trim(),
        password: loginForm.elements.password.value.trim(),
    }
    if (value.email == "" || value.password == "") {
        alert("All form fields must be filled in");
        return;
    }
    loginForm.reset();
    console.log(value);
})

