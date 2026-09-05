// ================================
// GRAMBIZ AI - MARKET
// ================================

const village =
    localStorage.getItem("grambizVillage");

const block =
    localStorage.getItem("grambizBlock");

const district =
    localStorage.getItem("grambizDistrict");


const marketLocation =
    document.getElementById("marketLocation");


if (village || block || district) {

    marketLocation.textContent =
        `${village || ""}, ${block || ""}, ${district || ""}`;

}