// ================================
// GRAMBIZ AI - BUSINESS PLAN
// ================================

// GET SAVED USER DATA

const userName = localStorage.getItem("grambizUserName");
const business = localStorage.getItem("grambizBusiness");
const village = localStorage.getItem("grambizVillage");
const block = localStorage.getItem("grambizBlock");
const district = localStorage.getItem("grambizDistrict");
const capital = Number(localStorage.getItem("grambizCapital")) || 0;


// PROFILE

const userNameElement = document.getElementById("userName");
const profileAvatar = document.querySelector(".profile-avatar");

if (userName) {
    userNameElement.textContent = userName;

    profileAvatar.textContent = userName
        .trim()
        .charAt(0)
        .toUpperCase();
}


// BUSINESS PLAN SUMMARY

const planBusinessName = document.getElementById("planBusinessName");
const planLocation = document.getElementById("planLocation");
const planCapital = document.getElementById("planCapital");

if (business) {
    planBusinessName.textContent = business;
}

const locationParts = [village, block, district].filter(function (place) {
    return place && place.trim() !== "";
});

if (locationParts.length > 0) {
    planLocation.textContent = locationParts.join(", ");
}

planCapital.textContent = `₹${capital.toLocaleString("en-IN")}`;


// PERSONALIZED AI RECOMMENDATION

const planRecommendation = document.getElementById("planRecommendation");

if (business && capital > 0) {
    planRecommendation.textContent =
        `For your ${business} business, use your available capital of ` +
        `₹${capital.toLocaleString("en-IN")} carefully. Start with essential ` +
        `items, track every expense, and increase stock only when sales are consistent.`;
} else if (business) {
    planRecommendation.textContent =
        `For your ${business} business, start with a small and focused offering. ` +
        `Track customer needs, control costs, and grow gradually from your profits.`;
}


// PRINT BUSINESS PLAN

const printPlanBtn = document.getElementById("printPlanBtn");

printPlanBtn.addEventListener("click", function () {
    window.print();
});