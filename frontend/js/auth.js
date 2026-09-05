// ================================
// GRAMBIZ AI - AUTHENTICATION
// FRONTEND PROTOTYPE
// ================================


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Temporary frontend login
        localStorage.setItem("grambizLoggedIn", "true");

        // Go to business setup
        window.location.href = "location.html";

    });

}


// SIGN UP
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        // Check passwords
        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        // Save temporary user information
        localStorage.setItem("grambizUserName", name);
        localStorage.setItem("grambizUserEmail", email);
        localStorage.setItem("grambizLoggedIn", "true");


        // Go to business setup
        window.location.href = "location.html";

    });

}