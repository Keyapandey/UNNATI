// ==========================================================
// GRAMBIZ AI
// OPPORTUNITIES
// ==========================================================


// Get saved business information

const business =
    localStorage.getItem("grambizBusiness");

const village =
    localStorage.getItem("grambizVillage");

const block =
    localStorage.getItem("grambizBlock");

const district =
    localStorage.getItem("grambizDistrict");


// ==========================================================
// BUSINESS NAME
// ==========================================================

const businessName =
    document.getElementById("businessName");

if (businessName) {

    businessName.textContent =
        business || "Your Business";
}


// ==========================================================
// LOCATION
// ==========================================================

const businessLocation =
    document.getElementById("businessLocation");

if (businessLocation) {

    const locationParts = [];

    if (village) {
        locationParts.push(village);
    }

    if (block) {
        locationParts.push(block);
    }

    if (district) {
        locationParts.push(district);
    }

    if (locationParts.length > 0) {

        businessLocation.textContent =
            locationParts.join(", ");

    } else {

        businessLocation.textContent =
            "Your Location";
    }
}