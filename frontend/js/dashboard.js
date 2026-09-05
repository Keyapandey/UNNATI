// ================================
// GRAMBIZ AI - DASHBOARD
// ================================


// GET USER DATA

const userName =
    localStorage.getItem("grambizUserName");

const business =
    localStorage.getItem("grambizBusiness");

const village =
    localStorage.getItem("grambizVillage");

const block =
    localStorage.getItem("grambizBlock");

const district =
    localStorage.getItem("grambizDistrict");

const capital =
    localStorage.getItem("grambizCapital");


// USER NAME

const userNameElement =
    document.getElementById("userName");

if (userName) {

    userNameElement.textContent =
        userName;

}


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


// CAPITAL

const capitalAmount =
    document.getElementById("capitalAmount");

if (capital) {

    capitalAmount.textContent =
        `₹${Number(capital).toLocaleString("en-IN")}`;

}


// NEW ANALYSIS

const newAnalysisBtn =
    document.getElementById("newAnalysisBtn");

if (newAnalysisBtn) {

    newAnalysisBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "location.html";

        }
    );

}