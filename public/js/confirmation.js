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

const currentLanguage =
    localStorage.getItem("grambizLanguage") || "en";


// FALLBACK TEXT

const messages = {

    en: {
        locationNotProvided: "Location not provided",
        businessNotSelected: "Not selected",
        capitalNotProvided: "Not provided"
    },

    hi: {
        locationNotProvided: "स्थान उपलब्ध नहीं है",
        businessNotSelected: "चयनित नहीं है",
        capitalNotProvided: "उपलब्ध नहीं है"
    }

};

const text =
    messages[currentLanguage] || messages.en;


// DISPLAY LOCATION

const locationValue =
    document.getElementById("locationValue");

if (village || block || district) {

    const locationParts = [
        village,
        block,
        district
    ].filter(Boolean);

    locationValue.textContent =
        locationParts.join(", ");

} else {

    locationValue.textContent =
        text.locationNotProvided;
}


// DISPLAY BUSINESS

const businessValue =
    document.getElementById("businessValue");

const businessTranslations = {

    en: {
        Dairy: "Dairy",
        Retail: "Retail",
        Textiles: "Textiles",
        Agriculture: "Agriculture",
        Food: "Food",
        Poultry: "Poultry",
        Services: "Services",
        Other: "Other"
    },

    hi: {
        Dairy: "डेयरी",
        Retail: "खुदरा",
        Textiles: "कपड़ा",
        Agriculture: "कृषि",
        Food: "खाद्य",
        Poultry: "पोल्ट्री",
        Services: "सेवाएँ",
        Other: "अन्य"
    }

};

if (business) {

    // If user selected "Other",
    // show the custom business name exactly as entered.
    const businessCategory =
        localStorage.getItem(
            "grambizBusinessCategory"
        );

    if (
        businessCategory === "Other" &&
        business !== "Other"
    ) {

        businessValue.textContent =
            business;

    } else {

        businessValue.textContent =
            businessTranslations[currentLanguage]?.[business]
            || business;

    }

} else {

    businessValue.textContent =
        text.businessNotSelected;

}


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
        text.capitalNotProvided;
}


// BACK BUTTON

const reviewBackBtn =
    document.getElementById("reviewBackBtn");

if (reviewBackBtn) {

    reviewBackBtn.addEventListener(
        "click",
        function () {

            history.back();

        }
    );

}


// START AI ANALYSIS

const startAnalysisBtn =
    document.getElementById("startAnalysisBtn");

if (startAnalysisBtn) {

    startAnalysisBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "analysis.html";

        }
    );

}