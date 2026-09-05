// ================================
// GRAMBIZ AI - CONFIRMATION
// ================================


// GET SAVED DATA

const village =
    localStorage.getItem("grambizVillage");

const block =
    localStorage.getItem("grambizBlock");

const district =
    localStorage.getItem("grambizDistrict");

const business =
    localStorage.getItem("grambizBusiness");

const capital =
    localStorage.getItem("grambizCapital");


// DISPLAY LOCATION

const locationValue =
    document.getElementById("locationValue");

if (village || block || district) {

    locationValue.textContent =
        `${village || ""}, ${block || ""}, ${district || ""}`;

} else {

    locationValue.textContent =
        "Location not provided";

}


// DISPLAY BUSINESS

const businessValue =
    document.getElementById("businessValue");

businessValue.textContent =
    business || "Not selected";


// DISPLAY CAPITAL

const capitalValue =
    document.getElementById("capitalValue");

if (capital) {

    const formattedCapital =
        Number(capital).toLocaleString("en-IN");

    capitalValue.textContent =
        `₹${formattedCapital}`;

} else {

    capitalValue.textContent =
        "Not provided";

}


// BACK BUTTON

const reviewBackBtn =
    document.getElementById("reviewBackBtn");

if (reviewBackBtn) {

    reviewBackBtn.addEventListener("click", function () {

        history.back();

    });

}


// START AI ANALYSIS

const startAnalysisBtn =
    document.getElementById("startAnalysisBtn");

if (startAnalysisBtn) {

    startAnalysisBtn.addEventListener("click", function () {

        window.location.href =
            "analysis.html";

    });

}