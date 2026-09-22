// ================================
// GRAMBIZ AI - COMPETITORS
// ================================


const business =
    localStorage.getItem("grambizBusiness");


const village =
    localStorage.getItem("grambizVillage");

const block =
    localStorage.getItem("grambizBlock");

const district =
    localStorage.getItem("grambizDistrict");


// BUSINESS

const businessName =
    document.getElementById("businessName");

if (business) {

    businessName.textContent =
        business;

}


// LOCATION

const businessLocation =
    document.getElementById("businessLocation");

if (village || block || district) {

    businessLocation.textContent =
        `${village || ""}, ${block || ""}, ${district || ""}`;

}

const userName = localStorage.getItem("grambizUserName");

const userNameElement = document.getElementById("userName");
const profileAvatar = document.querySelector(".profile-avatar");

if (userName) {
    userNameElement.textContent = userName;

    profileAvatar.textContent = userName
        .trim()
        .charAt(0)
        .toUpperCase();
}