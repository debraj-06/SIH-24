document.getElementById('newaccount').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('flip-container').classList.toggle('flipped');
});

document.getElementById('toggle-login-password').addEventListener('click', function () {
    const passwordField = document.getElementById('login-password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

document.getElementById('rg-password').addEventListener('click', function () {
    const passwordField = document.getElementById('register-password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

document.getElementById('cnf-password').addEventListener('click', function () {
    const passwordField = document.getElementById('confirm-password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// document.getElementById('register-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.getElementById('flip-container').classList.toggle('flipped');
// });
//     const passwordField = document.getElementById("password");
// const togglePassword = document.querySelector(".password-toggle-icon i");

// togglePassword.addEventListener("click", function () {
//   if (passwordField.type === "password") {
//     passwordField.type = "text";
//     togglePassword.classList.remove("fa-eye");
//     togglePassword.classList.add("fa-eye-slash");
//   } else {
//     passwordField.type = "password";
//     togglePassword.classList.remove("fa-eye-slash");
//     togglePassword.classList.add("fa-eye");
//   }
// });