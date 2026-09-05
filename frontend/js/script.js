// ================================
// GRAMBIZ AI - LANDING PAGE
// ================================

const getStartedBtn = document.getElementById("getStartedBtn");
const loginBtn = document.getElementById("loginBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");


// Get Started → Login
if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
        window.location.href = "login.html";
    });
}


// Login button → Login page
if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        window.location.href = "login.html";
    });
}


// Learn More → Features
if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
        document.getElementById("features").scrollIntoView({
            behavior: "smooth"
        });
    });
}