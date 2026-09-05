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

const schemes = {


    mudra: {

        name: "PM MUDRA Yojana",

        score: "92%",

        description:
            "Suitable financing support for eligible micro enterprises across manufacturing, trading, services and agriculture-allied activities.",

        amount:
            "₹50,000 – ₹20 lakh",

        interest:
            "Varies by lender",

        tenure:
            "Up to ~5 years",

        reason:
            "This scheme can fit many small businesses that need financing for working capital, equipment or business expansion.",

        icon: "🏦"

    },


    pmegp: {

        name: "PMEGP",

        score: "78%",

        description:
            "A government-supported route for eligible new micro-enterprises.",

        amount:
            "Up to ₹50 lakh manufacturing / ₹20 lakh service-business",

        interest:
            "Normal bank rate",

        tenure:
            "3–7 years",

        reason:
            "Potentially relevant when the entrepreneur is establishing a new eligible micro-enterprise.",

        icon: "🏭"

    },


    vishwakarma: {

        name: "PM Vishwakarma",

        score: "72%",

        description:
            "Financial support designed for eligible traditional artisans and craftspeople.",

        amount:
            "Up to ₹3 lakh",

        interest:
            "5% concessional",

        tenure:
            "18 + 30 months",

        reason:
            "Potentially relevant for eligible traditional artisan activities.",

        icon: "🛠️"

    },


    pmfme: {

        name: "PMFME",

        score: "86%",

        description:
            "Credit-linked subsidy support for eligible micro food-processing units.",

        amount:
            "35% subsidy, max ₹10 lakh/unit",

        interest:
            "Bank lending rate",

        tenure:
            "Project dependent",

        reason:
            "Potentially strong match for eligible food-processing activities such as dairy processing, spices, flour or pickle businesses.",

        icon: "🥫"

    },


    aif: {

        name: "Agriculture Infrastructure Fund",

        score: "64%",

        description:
            "Financing support for eligible agricultural infrastructure projects.",

        amount:
            "Project financing",

        interest:
            "Eligible 3% interest subvention",

        tenure:
            "Generally up to 7 years",

        reason:
            "Potentially relevant for eligible agriculture infrastructure such as storage, processing or related facilities.",

        icon: "🌾"

    }

};



// ==================================================
// ROUTER LOGIC — FRONTEND DEMO
// ==================================================

function selectBestScheme() {


    const businessType =
        document.getElementById("businessType").value;


    const businessStatus =
        document.querySelector(
            'input[name="businessStatus"]:checked'
        ).value;


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
    // Default
    // ----------------------------------------------

    let bestScheme =
        schemes.mudra;



    // ----------------------------------------------
    // Food Processing
    // ----------------------------------------------

    if (businessType === "food") {

        bestScheme =
            schemes.pmfme;

    }



    // ----------------------------------------------
    // Artisan
    // ----------------------------------------------

    else if (businessType === "artisan") {

        bestScheme =
            schemes.vishwakarma;

    }



    // ----------------------------------------------
    // Agriculture
    // ----------------------------------------------

    else if (businessType === "agriculture") {

        bestScheme =
            schemes.aif;

    }



    // ----------------------------------------------
    // New manufacturing/service business
    // ----------------------------------------------

    else if (
        businessStatus === "new" &&
        (
            businessType === "manufacturing" ||
            businessType === "service"
        )
    ) {

        bestScheme =
            schemes.pmegp;

    }



    // ----------------------------------------------
    // Small retail / dairy
    // ----------------------------------------------

    else if (
        businessType === "retail" ||
        businessType === "dairy"
    ) {

        bestScheme =
            schemes.mudra;

    }



    // ----------------------------------------------
    // DISPLAY RESULT
    // ----------------------------------------------

    document.getElementById(
        "bestSchemeName"
    ).textContent =
        bestScheme.name;


    document.getElementById(
        "bestSchemeDescription"
    ).textContent =
        bestScheme.description;


    document.getElementById(
        "matchScore"
    ).textContent =
        bestScheme.score;


    document.getElementById(
        "bestLoanAmount"
    ).textContent =
        bestScheme.amount;


    document.getElementById(
        "bestInterest"
    ).textContent =
        bestScheme.interest;



    // ----------------------------------------------
    // DETAIL CARD
    // ----------------------------------------------

    document.getElementById(
        "detailSchemeName"
    ).textContent =
        bestScheme.name;


    document.getElementById(
        "detailSupport"
    ).textContent =
        bestScheme.amount;


    document.getElementById(
        "detailInterest"
    ).textContent =
        bestScheme.interest;


    document.getElementById(
        "detailTenure"
    ).textContent =
        bestScheme.tenure;


    document.getElementById(
        "detailReason"
    ).textContent =
        bestScheme.reason;


    document.getElementById(
        "detailFunding"
    ).textContent =
        formatMoney(fundingRequired);



    document.getElementById(
        "detailPotential"
    ).textContent =
        "To be assessed";



    // ----------------------------------------------
    // SHOW RESULTS
    // ----------------------------------------------

    routerEmpty.style.display =
        "none";


    routerResults.classList.add(
        "show"
    );


    comparisonSection.style.display =
        "block";


    schemeDetailCard.style.display =
        "block";



    // ----------------------------------------------
    // STATUS
    // ----------------------------------------------

    document.querySelector(
        ".router-status"
    ).textContent =
        "Matched";

    // STEP 2G
updateSchemeExplanation(bestScheme);

// STEP 6 - SAVE SCHEME DATA
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