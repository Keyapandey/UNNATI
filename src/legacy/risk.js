// ================================
// GRAMBIZ AI - RISK ANALYSIS
// ================================

// USER DETAILS

const userName = localStorage.getItem("grambizUserName");
const capital = Number(localStorage.getItem("grambizCapital")) || 0;

const userNameElement = document.getElementById("userName");
const profileAvatar = document.querySelector(".profile-avatar");

if (userName) {
    userNameElement.textContent = userName;

    profileAvatar.textContent = userName
        .trim()
        .charAt(0)
        .toUpperCase();
}


// RISK SCORE

const riskScoreElement = document.getElementById("riskScore");
const riskLevelElement = document.getElementById("riskLevel");
const riskSummaryElement = document.getElementById("riskSummary");

function calculateRisk() {
    let score = 45;

    if (capital > 0 && capital < 10000) {
        score += 15;
    } else if (capital >= 100000) {
        score -= 10;
    } else if (capital >= 50000) {
        score -= 5;
    }

    score = Math.max(20, Math.min(score, 80));

    let level = "";
    let summary = "";

    if (score >= 60) {
        level = "High Risk";
        summary =
            "Your business may face cash flow and operating challenges. " +
            "Follow the prevention checklist and plan expenses carefully.";
    } else if (score >= 40) {
        level = "Moderate Risk";
        summary =
            "Your business has good potential. A few areas need attention to " +
            "protect your earnings and future growth.";
    } else {
        level = "Low Risk";
        summary =
            "Your business is in a comparatively stable position. Keep tracking " +
            "your sales, expenses, and customer feedback regularly.";
    }

    riskScoreElement.innerHTML = `${score}<span>/100</span>`;
    riskLevelElement.textContent = level;
    riskSummaryElement.textContent = summary;
}

calculateRisk();


// REFRESH ANALYSIS BUTTON

const refreshRiskBtn = document.getElementById("refreshRiskBtn");

refreshRiskBtn.addEventListener("click", function () {
    refreshRiskBtn.textContent = "✓ Analysis Updated";
    refreshRiskBtn.disabled = true;

    calculateRisk();

    setTimeout(function () {
        refreshRiskBtn.textContent = "↻ Refresh Analysis";
        refreshRiskBtn.disabled = false;
    }, 1500);
});


// SAVE CHECKLIST PROGRESS

const checklistItems = document.querySelectorAll(".checklist-item input");
const savedChecklist = JSON.parse(
    localStorage.getItem("grambizRiskChecklist") || "[]"
);

checklistItems.forEach(function (item, index) {
    item.checked = savedChecklist[index] || false;

    item.addEventListener("change", function () {
        const checklistProgress = [];

        checklistItems.forEach(function (checkbox) {
            checklistProgress.push(checkbox.checked);
        });

        localStorage.setItem(
            "grambizRiskChecklist",
            JSON.stringify(checklistProgress)
        );
    });
});