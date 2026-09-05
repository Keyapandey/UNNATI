// ==========================================================
// GRAMBIZ AI
// COST & PROFITABILITY
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const revenueInput =
    document.getElementById("monthlyRevenue");

const unitsInput =
    document.getElementById("monthlyUnits");

const variableCostInput =
    document.getElementById("variableCostPerUnit");

const fixedCostInput =
    document.getElementById("fixedCosts");

const otherCostInput =
    document.getElementById("otherCosts");

const calculateButton =
    document.getElementById("calculateProfitBtn");

const resetButton =
    document.getElementById("resetProfitBtn");


// ==========================================================
// MONEY
// ==========================================================

function formatMoney(value) {

    return `₹${Math.round(value).toLocaleString("en-IN")}`;

}


// ==========================================================
// LOAD BUSINESS DATA
// ==========================================================

function loadBusinessData() {

    const business =
        localStorage.getItem("grambizBusiness");

    const village =
        localStorage.getItem("grambizVillage");

    const block =
        localStorage.getItem("grambizBlock");

    const district =
        localStorage.getItem("grambizDistrict");

    const capital =
        Number(
            localStorage.getItem("grambizCapital")
        ) || 0;


    document.getElementById(
        "profitBusinessName"
    ).textContent =
        business || "Your Business";


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


    document.getElementById(
        "profitBusinessLocation"
    ).textContent =
        locationParts.length
            ? locationParts.join(", ")
            : "Location not available";


    document.getElementById(
        "profitCapital"
    ).textContent =
        formatMoney(capital);


    const userName =
        localStorage.getItem("grambizUserName");


    if (userName) {

        document.getElementById(
            "userName"
        ).textContent =
            userName;

    }

}

// ==========================================================
// STEP 8 - LOAD FINANCIAL PLANNER DATA
// ==========================================================

function loadFinancialPlannerData() {

    const savedPlan =
        localStorage.getItem("grambizFinancialPlan");

    if (!savedPlan) {

        console.log(
            "Step 8: No Financial Planner data found."
        );

        return;
    }


    const plan =
        JSON.parse(savedPlan);


    // ------------------------------------------
    // MONTHLY REVENUE
    // ------------------------------------------

    if (plan.sales > 0) {

        revenueInput.value =
            plan.sales;

    }


    // ------------------------------------------
    // MONTHLY EXPENSES
    // ------------------------------------------
    // Financial Planner gives total expenses.
    // Cost & Profitability needs detailed categories.
    // So initially place total expenses in fixed costs.

    if (plan.expenses > 0) {

        fixedCostInput.value =
            plan.expenses;

    }


    console.log(
        "Step 8: Financial Planner data loaded.",
        plan
    );

}

// ==========================================================
// CALCULATE PROFITABILITY
// ==========================================================

function calculateProfitability() {

    const revenue =
        Number(revenueInput.value) || 0;

    const units =
        Number(unitsInput.value) || 0;

    const variableCostPerUnit =
        Number(variableCostInput.value) || 0;

    const fixedCosts =
        Number(fixedCostInput.value) || 0;

    const otherCosts =
        Number(otherCostInput.value) || 0;


    if (revenue <= 0) {

        alert(
            "Please enter a valid monthly revenue."
        );

        return;

    }


    if (units <= 0) {

        alert(
            "Please enter the number of units sold per month."
        );

        return;

    }


    // ======================================================
    // CORE CALCULATIONS
    // ======================================================

    const variableCosts =
        units * variableCostPerUnit;


    const totalExpenses =
        variableCosts +
        fixedCosts +
        otherCosts;


    const grossProfit =
        revenue -
        variableCosts;


    const netProfit =
        revenue -
        totalExpenses;


    const profitMargin =
        revenue > 0
            ? (netProfit / revenue) * 100
            : 0;


    const averageSellingPrice =
        revenue / units;


    const costPerUnit =
        totalExpenses / units;


    // Contribution per unit

    const contributionPerUnit =
        averageSellingPrice -
        variableCostPerUnit;


    let breakEvenUnits = 0;

    let breakEvenRevenue = 0;


    if (contributionPerUnit > 0) {

        breakEvenUnits =
            fixedCosts /
            contributionPerUnit;

        breakEvenRevenue =
            breakEvenUnits *
            averageSellingPrice;

    }


    // ======================================================
    // DISPLAY SUMMARY
    // ======================================================

    document.getElementById(
        "netProfit"
    ).textContent =
        formatMoney(netProfit);


    document.getElementById(
        "revenueResult"
    ).textContent =
        formatMoney(revenue);


    document.getElementById(
        "variableCostResult"
    ).textContent =
        formatMoney(variableCosts);


    document.getElementById(
        "fixedCostResult"
    ).textContent =
        formatMoney(fixedCosts);


    document.getElementById(
        "otherCostResult"
    ).textContent =
        formatMoney(otherCosts);


    document.getElementById(
        "totalExpenseResult"
    ).textContent =
        formatMoney(totalExpenses);


    document.getElementById(
        "profitMargin"
    ).textContent =
        profitMargin.toFixed(1) + "%";


    // ======================================================
    // METRICS
    // ======================================================

    document.getElementById(
        "grossProfit"
    ).textContent =
        formatMoney(grossProfit);


    document.getElementById(
        "costPerUnit"
    ).textContent =
        formatMoney(costPerUnit);


    document.getElementById(
        "breakEvenUnits"
    ).textContent =
        breakEvenUnits > 0
            ? Math.ceil(breakEvenUnits).toLocaleString("en-IN")
            : "Not achievable";


    document.getElementById(
        "breakEvenRevenue"
    ).textContent =
        breakEvenRevenue > 0
            ? formatMoney(breakEvenRevenue)
            : "Not achievable";


    // ======================================================
    // HEALTH
    // ======================================================

    updateProfitHealth(
        netProfit,
        profitMargin
    );


    // ======================================================
    // COST BARS
    // ======================================================

    updateCostBars(
        variableCosts,
        fixedCosts,
        otherCosts,
        totalExpenses
    );


    // ======================================================
    // SAVE
    // ======================================================

    const profitPlan = {

        revenue:
            revenue,

        units:
            units,

        variableCostPerUnit:
            variableCostPerUnit,

        variableCosts:
            variableCosts,

        fixedCosts:
            fixedCosts,

        otherCosts:
            otherCosts,

        totalExpenses:
            totalExpenses,

        grossProfit:
            grossProfit,

        netProfit:
            netProfit,

        profitMargin:
            profitMargin,

        costPerUnit:
            costPerUnit,

        breakEvenUnits:
            breakEvenUnits,

        breakEvenRevenue:
            breakEvenRevenue

    };


    localStorage.setItem(
        "grambizProfitabilityPlan",
        JSON.stringify(profitPlan)
    );


    /*
     * Keep this key compatible with the
     * Repayment Planner affordability feature.
     */

    localStorage.setItem(
        "grambizFinancialPlan",
        JSON.stringify({

            sales:
                revenue,

            expenses:
                totalExpenses,

            profit:
                netProfit

        })
    );


    document.getElementById(
        "profitSaveStatus"
    ).textContent =
        "✓ Profitability plan saved for this session.";

}


// ==========================================================
// PROFITABILITY HEALTH
// ==========================================================

function updateProfitHealth(
    netProfit,
    profitMargin
) {

    const icon =
        document.getElementById(
            "profitHealthIcon"
        );

    const title =
        document.getElementById(
            "profitHealthTitle"
        );

    const message =
        document.getElementById(
            "profitHealthMessage"
        );


    if (netProfit <= 0) {

        icon.textContent = "!";

        title.textContent =
            "Loss-making under current assumptions";

        message.textContent =
            "Your current estimated expenses are equal to or higher than revenue. Consider increasing sales, improving pricing or reducing costs.";

        return;

    }


    if (profitMargin < 10) {

        icon.textContent = "!";

        title.textContent =
            "Low profitability";

        message.textContent =
            `Your estimated profit margin is ${profitMargin.toFixed(1)}%. The business is profitable, but the current margin leaves limited room for unexpected costs.`;

        return;

    }


    if (profitMargin < 25) {

        icon.textContent = "✓";

        title.textContent =
            "Moderate profitability";

        message.textContent =
            `Your estimated profit margin is ${profitMargin.toFixed(1)}%. Continue monitoring costs and sales consistency.`;

        return;

    }


    icon.textContent = "✓";

    title.textContent =
        "Healthy planning margin";

    message.textContent =
        `Your estimated profit margin is ${profitMargin.toFixed(1)}%. The current assumptions show a comparatively stronger profitability position.`;

}


// ==========================================================
// COST BARS
// ==========================================================

function updateCostBars(
    variableCosts,
    fixedCosts,
    otherCosts,
    totalExpenses
) {

    if (totalExpenses <= 0) {

        return;

    }


    const variablePercent =
        (variableCosts /
            totalExpenses) *
        100;


    const fixedPercent =
        (fixedCosts /
            totalExpenses) *
        100;


    const otherPercent =
        (otherCosts /
            totalExpenses) *
        100;


    document.getElementById(
        "variablePercent"
    ).textContent =
        variablePercent.toFixed(1) + "%";


    document.getElementById(
        "fixedPercent"
    ).textContent =
        fixedPercent.toFixed(1) + "%";


    document.getElementById(
        "otherPercent"
    ).textContent =
        otherPercent.toFixed(1) + "%";


    document.getElementById(
        "variableBar"
    ).style.width =
        variablePercent + "%";


    document.getElementById(
        "fixedBar"
    ).style.width =
        fixedPercent + "%";


    document.getElementById(
        "otherBar"
    ).style.width =
        otherPercent + "%";

}


// ==========================================================
// WHAT-IF SCENARIO
// ==========================================================

function runScenario() {

    const savedPlan =
        localStorage.getItem(
            "grambizProfitabilityPlan"
        );


    if (!savedPlan) {

        alert(
            "Please analyse your profitability first."
        );

        return;

    }


    const plan =
        JSON.parse(savedPlan);


    const salesChange =
        Number(
            document.getElementById(
                "salesChange"
            ).value
        ) || 0;


    const costChange =
        Number(
            document.getElementById(
                "costChange"
            ).value
        ) || 0;


    // ======================================================
    // SCENARIO VALUES
    // ======================================================

    const scenarioRevenue =
        plan.revenue *
        (1 + salesChange / 100);


    const scenarioExpenses =
        plan.totalExpenses *
        (1 + costChange / 100);


    const scenarioProfit =
        scenarioRevenue -
        scenarioExpenses;


    const profitChange =
        scenarioProfit -
        plan.netProfit;


    // ======================================================
    // DISPLAY
    // ======================================================

    document.getElementById(
        "scenarioRevenue"
    ).textContent =
        formatMoney(
            scenarioRevenue
        );


    document.getElementById(
        "scenarioExpenses"
    ).textContent =
        formatMoney(
            scenarioExpenses
        );


    document.getElementById(
        "scenarioProfit"
    ).textContent =
        formatMoney(
            scenarioProfit
        );


    document.getElementById(
        "scenarioProfitChange"
    ).textContent =
        (profitChange >= 0 ? "+" : "") +
        formatMoney(profitChange);

}


// ==========================================================
// RESET
// ==========================================================

function resetProfitability() {

    revenueInput.value = "";

    unitsInput.value = "";

    variableCostInput.value = "";

    fixedCostInput.value = "";

    otherCostInput.value = "";


    document.getElementById(
        "netProfit"
    ).textContent = "₹0";


    document.getElementById(
        "revenueResult"
    ).textContent = "₹0";


    document.getElementById(
        "variableCostResult"
    ).textContent = "₹0";


    document.getElementById(
        "fixedCostResult"
    ).textContent = "₹0";


    document.getElementById(
        "otherCostResult"
    ).textContent = "₹0";


    document.getElementById(
        "totalExpenseResult"
    ).textContent = "₹0";


    document.getElementById(
        "profitMargin"
    ).textContent = "0%";


    document.getElementById(
        "grossProfit"
    ).textContent = "₹0";


    document.getElementById(
        "costPerUnit"
    ).textContent = "₹0";


    document.getElementById(
        "breakEvenUnits"
    ).textContent = "0";


    document.getElementById(
        "breakEvenRevenue"
    ).textContent = "₹0";


    document.getElementById(
        "profitHealthIcon"
    ).textContent = "—";


    document.getElementById(
        "profitHealthTitle"
    ).textContent =
        "Enter your business data";


    document.getElementById(
        "profitHealthMessage"
    ).textContent =
        "Analyse your inputs to see the profitability status.";


    document.getElementById(
        "scenarioRevenue"
    ).textContent = "₹0";


    document.getElementById(
        "scenarioExpenses"
    ).textContent = "₹0";


    document.getElementById(
        "scenarioProfit"
    ).textContent = "₹0";


    document.getElementById(
        "scenarioProfitChange"
    ).textContent = "₹0";


    document.getElementById(
        "variablePercent"
    ).textContent = "0%";


    document.getElementById(
        "fixedPercent"
    ).textContent = "0%";


    document.getElementById(
        "otherPercent"
    ).textContent = "0%";


    document.getElementById(
        "variableBar"
    ).style.width = "0%";


    document.getElementById(
        "fixedBar"
    ).style.width = "0%";


    document.getElementById(
        "otherBar"
    ).style.width = "0%";


    document.getElementById(
        "profitSaveStatus"
    ).textContent = "";

}


// ==========================================================
// EVENTS
// ==========================================================

calculateButton.addEventListener(
    "click",
    calculateProfitability
);


resetButton.addEventListener(
    "click",
    resetProfitability
);


document.getElementById(
    "runScenarioBtn"
).addEventListener(
    "click",
    runScenario
);


// ==========================================================
// INITIAL LOAD
// ==========================================================

loadBusinessData();

loadFinancialPlannerData();