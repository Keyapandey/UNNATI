// ============================================
// GRAMBIZ AI - MARKET REACH
// ============================================

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

if (businessName && business) {
    businessName.textContent =
        business;
}


// LOCATION

const businessLocation =
    document.getElementById("businessLocation");

if (businessLocation) {

    const locationParts = [
        village,
        block,
        district
    ].filter(Boolean);

    businessLocation.textContent =
        locationParts.length
            ? locationParts.join(", ")
            : "Your Location";
}


// DEMO MARKET ESTIMATES
// These will later come from local/hyper-local data.

const consumerCount =
    document.getElementById("consumerCount");

const householdCount =
    document.getElementById("householdCount");

if (consumerCount) {
    consumerCount.textContent =
        "2,450";
}

if (householdCount) {
    householdCount.textContent =
        "680";
}