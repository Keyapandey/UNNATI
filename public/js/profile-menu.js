(function () {
    const savedUserName = localStorage.getItem("grambizUserName");

const userNameElement = document.getElementById("userName");
const profileAvatar = document.querySelector(".profile-avatar");

const profileMenuBtn = document.getElementById("profileMenuBtn");
const profileMenu = document.getElementById("profileMenu");

const editProfileBtn = document.getElementById("editProfileBtn");
const settingsBtn = document.getElementById("settingsBtn");
const logoutBtn = document.getElementById("logoutBtn");


function showUserDetails() {
    const name = localStorage.getItem("grambizUserName") || "User";

    userNameElement.textContent = name;
    profileAvatar.textContent = name.charAt(0).toUpperCase();
}

showUserDetails();


profileMenuBtn.addEventListener("click", function () {
    profileMenu.classList.toggle("show");
    profileMenuBtn.classList.toggle("open");
});


editProfileBtn.addEventListener("click", function () {
    const currentName = localStorage.getItem("grambizUserName") || "";

    const updatedName = prompt("Enter your name:", currentName);

    if (updatedName && updatedName.trim()) {
        localStorage.setItem("grambizUserName", updatedName.trim());
        showUserDetails();
    }

    profileMenu.classList.remove("show");
    profileMenuBtn.classList.remove("open");
});


settingsBtn.addEventListener("click", function () {
    alert("Settings will be available soon.");

    profileMenu.classList.remove("show");
    profileMenuBtn.classList.remove("open");
});


logoutBtn.addEventListener("click", function () {
    const shouldLogout = confirm("Are you sure you want to log out?");

    if (shouldLogout) {
        localStorage.clear();
        window.location.href = "login.html";
    }
});


document.addEventListener("click", function (event) {
    if (!profileMenuBtn.contains(event.target) &&
        !profileMenu.contains(event.target)) {
        profileMenu.classList.remove("show");
        profileMenuBtn.classList.remove("open");
    }
});

})();