// ==================================================
// GRAMBIZ AI
// SMART SCHEME CALCULATOR + SCHEME ROUTER
// FRONTEND DEMO ONLY
// ==================================================



// ==================================================
// USER INFORMATION
// ==================================================

const userName =
    localStorage.getItem("grambizUserName");



const userNameElement =
    document.getElementById("userName");


if (userName && userNameElement) {

    userNameElement.textContent =
        userName;

}



// ==================================================
// INPUT ELEMENTS
// ==================================================

const projectCostInput =
    document.getElementById("projectCost");


const ownContributionInput =
    document.getElementById("ownContribution");


const fundingRequiredElement =
    document.getElementById("fundingRequired");



const calculateButton =
    document.getElementById("calculateSchemeBtn");



const routerEmpty =
    document.getElementById("routerEmpty");


const routerResults =
    document.getElementById("routerResults");



const comparisonSection =
    document.getElementById("comparisonSection");


const schemeDetailCard =
    document.getElementById("schemeDetailCard");



// ==================================================
// FORMAT MONEY
// ==================================================

function formatMoney(amount) {

    return `₹${Number(amount).toLocaleString("en-IN")}`;

}

// ==================================================
// STEP 6 - COMMON FINANCIAL DATA CONNECTION
// ==================================================

function saveSchemeFinancialData(bestScheme) {

    const businessType =
        document.getElementById("businessType").value;

    const businessStatusElement =
        document.querySelector(
            'input[name="businessStatus"]:checked'
        );

    const businessStatus =
        businessStatusElement
            ? businessStatusElement.value
            : "new";

    const projectCost =
        Number(
            document.getElementById("projectCost").value
        ) || 0;

    const ownContribution =
        Number(
            document.getElementById("ownContribution").value
        ) || 0;

    const fundingRequired =
        Math.max(
            projectCost - ownContribution,
            0
        );


    // ----------------------------------------------
    // COMMON FINANCIAL DATA
    // ----------------------------------------------

    const existingData =
        JSON.parse(
            localStorage.getItem(
                "grambizFinancialData"
            )
        ) || {};


    existingData.scheme = {

        businessType:
            businessType,

        businessStatus:
            businessStatus,

        projectCost:
            projectCost,

        ownContribution:
            ownContribution,

        fundingRequired:
            fundingRequired,

        selectedScheme: {

            name:
                bestScheme.name,

            score:
                bestScheme.score,

            amount:
                bestScheme.amount,

            interest:
                bestScheme.interest,

            tenure:
                bestScheme.tenure,

            reason:
                bestScheme.reason,

            icon:
                bestScheme.icon

        }

    };


    // ----------------------------------------------
    // SAVE COMMON OBJECT
    // ----------------------------------------------

    localStorage.setItem(
        "grambizFinancialData",
        JSON.stringify(existingData)
    );


    // ----------------------------------------------
    // BACKWARD-COMPATIBLE KEYS
    // ----------------------------------------------

    localStorage.setItem(
        "grambizFundingRequired",
        fundingRequired
    );


    localStorage.setItem(
        "grambizSelectedScheme",
        JSON.stringify(
            existingData.scheme.selectedScheme
        )
    );


    localStorage.setItem(
        "grambizProjectCost",
        projectCost
    );


    localStorage.setItem(
        "grambizOwnContribution",
        ownContribution
    );


    // ----------------------------------------------
    // SAVE STATUS
    // ----------------------------------------------

    console.log(
        "Step 6: Scheme financial data saved.",
        existingData.scheme
    );

}

// ==================================================
// CALCULATE FUNDING REQUIRED
// ==================================================

function updateFundingRequired() {


    const projectCost =
        Number(projectCostInput.value) || 0;


    const ownContribution =
        Number(ownContributionInput.value) || 0;


    let fundingRequired =
        projectCost - ownContribution;


    if (fundingRequired < 0) {

        fundingRequired = 0;

    }


    fundingRequiredElement.textContent =
        formatMoney(fundingRequired);

}



// ==================================================
// LIVE FUNDING UPDATE
// ==================================================

projectCostInput.addEventListener(
    "input",
    updateFundingRequired
);


ownContributionInput.addEventListener(
    "input",
    updateFundingRequired
);



// ==================================================
// SCHEME DATA
// ==================================================

// ==================================================
// SCHEME DATA — matches Problem Statement exactly
// (NSFDC two-tier structure)
// ==================================================

const schemes = {

    microFinance: {
        name: "Micro Finance Scheme",
        score: "Best Fit",
        description:
            "For small units with a project cost up to ₹1.40 lakh. Funded at a concessional interest rate for micro-enterprise beneficiaries.",
        amount:
            "Up to 90% of project cost (max ₹1,25,000)",
        interest:
            "6.5% per annum",
        tenure:
            "3 years (including 3-month moratorium)",
        reason:
            "Your project cost falls within the ₹1.40 lakh threshold, so it qualifies under the Micro Finance Scheme with a lower concessional interest rate.",
        icon: "🌱"
    },

    termLoan: {
        name: "Term Loan Scheme",
        score: "Best Fit",
        description:
            "For larger projects costing between ₹1.40 lakh and ₹50.00 lakh. Funded for beneficiaries scaling beyond micro-scale enterprises.",
        amount:
            "Up to 90% of project cost (max ₹45,00,000)",
        interest:
            "8% per annum",
        tenure:
            "7 years (including 6-month moratorium)",
        reason:
            "Your project cost exceeds ₹1.40 lakh, so it is routed to the Term Loan Scheme rather than the Micro Finance Scheme.",
        icon: "🏦"
    },

    notEligible: {
        name: "No Matching Scheme",
        score: "—",
        description:
            "Your estimated project cost exceeds ₹50 lakh, which is outside the range covered by these two schemes.",
        amount: "Not applicable",
        interest: "Not applicable",
        tenure: "Not applicable",
        reason:
            "Project cost above ₹50 lakh falls outside the Micro Finance and Term Loan Scheme bands defined for this advisory tool.",
        icon: "⚠️"
    }

};
// ==================================================
// ROUTER LOGIC — FRONTEND DEMO
// ==================================================

// ==================================================
// ROUTER LOGIC — deterministic, matches PS thresholds
// Logic A: projectCost <= ₹1.40 lakh -> Micro Finance
// Logic B: ₹1.40 lakh < projectCost <= ₹50 lakh -> Term Loan
// ==================================================

function selectBestScheme() {

    const projectCost =
        Number(projectCostInput.value) || 0;

    const ownContribution =
        Number(ownContributionInput.value) || 0;

    const fundingRequired =
        Math.max(
            projectCost - ownContribution,
            0
        );

    // ----------------------------------------------
    // ROUTING — by project cost only
    // ----------------------------------------------

    let bestScheme;

    if (projectCost <= 0) {
        bestScheme = schemes.notEligible;
    }
    else if (projectCost <= 140000) {
        bestScheme = schemes.microFinance;
    }
    else if (projectCost <= 5000000) {
        bestScheme = schemes.termLoan;
    }
    else {
        bestScheme = schemes.notEligible;
    }

    // ----------------------------------------------
    // ACTUAL LOAN ELIGIBILITY (90% of project cost,
    // capped at the scheme's maximum)
    // ----------------------------------------------

    let loanCap = 0;

    if (bestScheme === schemes.microFinance) {
        loanCap = 125000;
    } else if (bestScheme === schemes.termLoan) {
        loanCap = 4500000;
    }

    const calculatedLoan =
        Math.min(
            projectCost * 0.90,
            loanCap || projectCost * 0.90
        );

    // ----------------------------------------------
    // DISPLAY RESULT
    // ----------------------------------------------

    document.getElementById("bestSchemeName").textContent =
        bestScheme.name;

    document.getElementById("bestSchemeDescription").textContent =
        bestScheme.description;

    document.getElementById("matchScore").textContent =
        bestScheme.score;

    document.getElementById("bestLoanAmount").textContent =
        bestScheme === schemes.notEligible
            ? "Not applicable"
            : formatMoney(calculatedLoan) + " (max eligible loan)";

    document.getElementById("bestInterest").textContent =
        bestScheme.interest;

    // ----------------------------------------------
    // DETAIL CARD
    // ----------------------------------------------

    document.getElementById("detailSchemeName").textContent =
        bestScheme.name;

    document.getElementById("detailSupport").textContent =
        bestScheme.amount;

    document.getElementById("detailInterest").textContent =
        bestScheme.interest;

    document.getElementById("detailTenure").textContent =
        bestScheme.tenure;

    document.getElementById("detailReason").textContent =
        bestScheme.reason;

    document.getElementById("detailFunding").textContent =
        formatMoney(fundingRequired);

    document.getElementById("detailPotential").textContent =
        "To be assessed";

    // ----------------------------------------------
    // SHOW RESULTS
    // ----------------------------------------------

    routerEmpty.style.display = "none";
    routerResults.classList.add("show");
    comparisonSection.style.display = "block";
    schemeDetailCard.style.display = "block";

    document.querySelector(".router-status").textContent =
        bestScheme === schemes.notEligible ? "No Match" : "Matched";

    // Save the calculated loan amount too, alongside the scheme
    bestScheme = { ...bestScheme, amount: formatMoney(calculatedLoan) + " eligible loan" };

    updateSchemeExplanation(bestScheme);
    saveSchemeFinancialData(bestScheme);
}

// ==================================================
// BUTTON CLICK
// ==================================================

calculateButton.addEventListener(
    "click",
    function () {


        const businessType =
            document.getElementById(
                "businessType"
            ).value;


        const projectCost =
            Number(
                projectCostInput.value
            ) || 0;



        if (!businessType) {

            alert(
                "Please select your business activity first."
            );

            return;

        }



        if (projectCost <= 0) {

            alert(
                "Please enter your estimated project cost."
            );

            return;

        }



        updateFundingRequired();

        selectBestScheme();

        updateEligibilityUI();

    }
);



// ==================================================
// INITIAL STATE
// ==================================================

comparisonSection.style.display =
    "none";


schemeDetailCard.style.display =
    "none";


updateFundingRequired();

// ==================================================
// STEP 2F - UPDATE ELIGIBILITY UI
// ==================================================

function updateEligibilityUI() {

    const businessType =
        document.getElementById("businessType").value;

    const businessStatusElement =
        document.querySelector(
            'input[name="businessStatus"]:checked'
        );

    const projectCost =
        Number(projectCostInput.value) || 0;

    const ownContribution =
        Number(ownContributionInput.value) || 0;

    const fundingRequired =
        Math.max(
            projectCost - ownContribution,
            0
        );


    const activityNames = {

        dairy:
            "Dairy / Milk Business",

        food:
            "Food Processing",

        agriculture:
            "Agriculture / Agri Allied",

        retail:
            "Retail / Shop",

        service:
            "Service Business",

        manufacturing:
            "Manufacturing",

        artisan:
            "Traditional Artisan / Craft"

    };


    const statusName =
        businessStatusElement &&
        businessStatusElement.value === "new"
            ? "New Business"
            : "Existing Business";


    // ----------------------------------------------
    // Business Activity
    // ----------------------------------------------

    const activityElement =
        document.getElementById(
            "eligibilityActivity"
        );

    if (activityElement) {

        activityElement.textContent =
            activityNames[businessType] ||
            "Selected business activity";

    }


    // ----------------------------------------------
    // Business Status
    // ----------------------------------------------

    const statusElement =
        document.getElementById(
            "eligibilityStatusText"
        );

    if (statusElement) {

        statusElement.textContent =
            statusName;

    }


    // ----------------------------------------------
    // Project Cost
    // ----------------------------------------------

    const projectCostElement =
        document.getElementById(
            "eligibilityProjectCost"
        );

    if (projectCostElement) {

        projectCostElement.textContent =
            "Estimated project cost: " +
            formatMoney(projectCost);

    }


    // ----------------------------------------------
    // Funding Required
    // ----------------------------------------------

    const fundingElement =
        document.getElementById(
            "eligibilityFunding"
        );

    if (fundingElement) {

        fundingElement.textContent =
            "Estimated funding required: " +
            formatMoney(fundingRequired);

    }


    // ----------------------------------------------
    // Eligibility Status
    // ----------------------------------------------

    const titleElement =
        document.getElementById(
            "eligibilityTitle"
        );

    const messageElement =
        document.getElementById(
            "eligibilityMessage"
        );

    const iconElement =
        document.getElementById(
            "eligibilityIcon"
        );


    if (titleElement) {

        titleElement.textContent =
            "Likely Match";

    }


    if (messageElement) {

        messageElement.textContent =
            "Your business details appear to fit " +
            "the recommended scheme based on the " +
            "information provided. Final eligibility " +
            "must be verified using the official scheme rules.";

    }


    if (iconElement) {

        iconElement.textContent =
            "✓";

    }

}
// ==================================================
// STEP 2G - WHY THIS SCHEME
// ==================================================

function updateSchemeExplanation(bestScheme) {

    // ----------------------------------------------
    // Scheme Name
    // ----------------------------------------------

    const nameElement =
        document.getElementById("whySchemeName");

    if (nameElement) {
        nameElement.textContent =
            bestScheme.name;
    }


    // ----------------------------------------------
    // Match Score
    // ----------------------------------------------

    const scoreElement =
        document.getElementById("whySchemeScore");

    if (scoreElement) {
        scoreElement.textContent =
            bestScheme.score + " Match";
    }


    // ----------------------------------------------
    // Icon
    // ----------------------------------------------

    const iconElement =
        document.getElementById("whySchemeIcon");

    if (iconElement) {
        iconElement.textContent =
            bestScheme.icon;
    }


    // ----------------------------------------------
    // Reason
    // ----------------------------------------------

    const reasonElement =
        document.getElementById("whySchemeReason");

    if (reasonElement) {
        reasonElement.textContent =
            bestScheme.reason;
    }


    // ----------------------------------------------
    // Amount
    // ----------------------------------------------

    const amountElement =
        document.getElementById("whySchemeAmount");

    if (amountElement) {
        amountElement.textContent =
            bestScheme.amount;
    }


    // ----------------------------------------------
    // Interest
    // ----------------------------------------------

    const interestElement =
        document.getElementById("whySchemeInterest");

    if (interestElement) {
        interestElement.textContent =
            bestScheme.interest;
    }


    // ----------------------------------------------
    // Tenure
    // ----------------------------------------------

    const tenureElement =
        document.getElementById("whySchemeTenure");

    if (tenureElement) {
        tenureElement.textContent =
            bestScheme.tenure;
    }


    // ----------------------------------------------
    // Documents Scheme Name
    // ----------------------------------------------

    const documentsSchemeName =
        document.getElementById(
            "documentsSchemeName"
        );

    if (documentsSchemeName) {
        documentsSchemeName.textContent =
            bestScheme.name + " — Document Checklist";
    }

}