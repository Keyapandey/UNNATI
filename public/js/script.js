// ================================
// GRAMBIZ AI - LANDING PAGE
// ================================

const getStartedBtn = document.getElementById("getStartedBtn");
const loginBtn = document.getElementById("loginBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");


// Get Started → Login
if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
        window.location.href = "signup.html";
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

const splashScreen = document.getElementById("splashScreen");
const splashTagline = document.querySelector(".splash-content p");

if (splashScreen && splashTagline) {
    const taglineText = splashTagline.textContent.trim();

    splashTagline.textContent = "";

    [...taglineText].forEach(function (letter, index) {
        const letterSpan = document.createElement("span");

        letterSpan.classList.add("tag-letter");

        if (letter === " ") {
            letterSpan.innerHTML = "&nbsp;";
        } else {
            letterSpan.textContent = letter;
        }

        letterSpan.style.animationDelay = `${1.15 + index * 0.045}s`;

        splashTagline.appendChild(letterSpan);
    });

    setTimeout(function () {
        splashScreen.classList.add("fade-out");
    }, 3200);

    setTimeout(function () {
        splashScreen.remove();
    }, 4000);
}