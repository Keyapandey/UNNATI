// ================================================
// GRAMBIZ AI
// FINANCIAL OVERVIEW
// ================================================


// ================================
// GET SAVED BUSINESS INFORMATION
// ================================

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



// ================================
// USER NAME
// ================================

const userNameElement =
    document.getElementById("userName");


if (userName && userNameElement) {

    userNameElement.textContent =
        userName;

}



// ================================
// BUSINESS NAME
// ================================

const businessNameElement =
    document.getElementById("businessName");


if (business && businessNameElement) {

    businessNameElement.textContent =
        business;

}



// ================================
// LOCATION
// ================================

const businessLocationElement =
    document.getElementById("businessLocation");


if (
    businessLocationElement &&
    (village || block || district)
) {

    businessLocationElement.textContent =
        `${village || ""}` +
        `${village && (block || district) ? ", " : ""}` +
        `${block || ""}` +
        `${block && district ? ", " : ""}` +
        `${district || ""}`;

}



// ================================
// CAPITAL
// ================================

const capitalValue =
    Number(capital || 0);


const formattedCapital =
    `₹${capitalValue.toLocaleString("en-IN")}`;



// AVAILABLE CAPITAL

const capitalAmountElement =
    document.getElementById("capitalAmount");


if (capitalAmountElement) {

    capitalAmountElement.textContent =
        formattedCapital;

}



// CAPITAL POSITION

const capitalPositionElement =
    document.getElementById("capitalPosition");


if (capitalPositionElement) {

    capitalPositionElement.textContent =
        formattedCapital;

}



// OWN CAPITAL

const ownCapitalElement =
    document.getElementById("ownCapital");


if (ownCapitalElement) {

    ownCapitalElement.textContent =
        formattedCapital;

}