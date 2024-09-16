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

// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('sign-in-btn'); // Button for login
    const loginForm = document.getElementById('login-form'); // Assuming you have a form with id="login-form"

    // Login Form Submission
    loginBtn.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent the default form submission (page reload)

        // Get the form data from login form
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Prepare the payload for login
        const payload = {
            name: username,
            password: password
        };

        try {
            // Send a POST request to the API for login
            const response = await fetch('https://sih-24-7.onrender.com/api/sih/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            console.log(data, "Response from API");

            if (data._id) {
                // Handle successful login (Redirect or show message)
                alert('Login successful!');
                window.location.href = 'afterlogin.html';
            } else {
                // Handle login error
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    

    const registerBtn = document.getElementById('register-btn'); // Button for register

    
    const registerForm = document.getElementById('register-form'); // Assuming you have a form with id="register-form"

    // Login Form Submission
    registerBtn.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent the default form submission (page reload)

        const username = registerForm.username.value;
            const password = registerForm.password.value;
            const confirmPassword = registerForm['confirm-password'].value;
    
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
    
            // Prepare the payload for registration
            const payload = {
                name: username,
                password: password
            };
    
            try {
                // Send a POST request to the API for registration
                const response = await fetch('https://sih-24-7.onrender.com/api/sih', { // Assuming /register endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
    
                const data = await response.json();
    
                if (data) {
                    // Handle successful registration (Redirect or show message)
                    alert('Registration successful!');
                    window.location.href = 'login.html';
                } else {
                    // Handle registration error
                    alert('Registration failed: ' + data.message);
                }
            } catch (error) {
                console.error('Error during registration:', error);
            }
    });
    

    
});

