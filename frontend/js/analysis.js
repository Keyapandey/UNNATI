// ================================
// GRAMBIZ AI - ANALYSIS
// ================================

const progressBar =
    document.getElementById("analysisProgressBar");

const statusText =
    document.getElementById("analysisStatus");

const marketCheck =
    document.getElementById("marketCheck");

const competitionCheck =
    document.getElementById("competitionCheck");

const financialCheck =
    document.getElementById("financialCheck");

const opportunityCheck =
    document.getElementById("opportunityCheck");


const steps = [

    {
        progress: 25,
        text: "Understanding your business...",
        element: marketCheck
    },

    {
        progress: 50,
        text: "Analyzing your local competition...",
        element: competitionCheck
    },

    {
        progress: 75,
        text: "Building your financial plan...",
        element: financialCheck
    },

    {
        progress: 100,
        text: "Finding growth opportunities...",
        element: opportunityCheck
    }

];


let currentStep = 0;


function runAnalysis() {

    if (currentStep >= steps.length) {

        statusText.textContent =
            "Analysis complete!";

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 1000);

        return;
    }


    const step =
        steps[currentStep];


    progressBar.style.width =
        step.progress + "%";


    statusText.textContent =
        step.text;


    step.element.textContent =
        "✓";

    step.element.style.color =
        "#31813a";


    currentStep++;


    setTimeout(
        runAnalysis,
        1000
    );

}


runAnalysis();