// ============================================
// GRAMBIZ AI - ANALYSIS
// ============================================

const progressBar =
    document.getElementById("analysisProgressBar");

const progressPercent =
    document.getElementById("progressPercent");

const steps = [
    document.getElementById("locationAnalysis"),
    document.getElementById("marketAnalysis"),
    document.getElementById("competitionAnalysis"),
    document.getElementById("opportunityAnalysis"),
    document.getElementById("financialAnalysis")
];

let currentStep = 0;
let progress = 0;


// UPDATE ANALYSIS

function updateAnalysis() {

    if (currentStep < steps.length) {

        steps[currentStep]
            .classList.add("active");

        progress =
            Math.round(
                ((currentStep + 1) /
                    steps.length) * 100
            );

        progressBar.style.width =
            progress + "%";

        progressPercent.textContent =
            progress + "%";


        setTimeout(function () {

            steps[currentStep]
                .classList.remove("active");

            steps[currentStep]
                .classList.add("completed");

            steps[currentStep]
                .querySelector(".analysis-status")
                .textContent = "✓";

            currentStep++;

            updateAnalysis();

        }, 1000);

    } else {

        // Analysis completed

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 700);

    }
}


// START

updateAnalysis();