// ==========================================================
// GRAMBIZ AI
// FINANCIAL PLANNER
// ==========================================================

// ===============================
// STEP 6B — SCHEME DATA CONNECTION
// ===============================

function loadSchemeFinancialData() {

    const financialData =
        JSON.parse(localStorage.getItem("grambizFinancialData")) || {};

    const schemeData = financialData.scheme;

    if (!schemeData) {
        console.log("No Scheme Calculator data found.");
        return;
    }

    const fundingRequired =
        Number(schemeData.fundingRequired) || 0;

    const selectedScheme =
        schemeData.selectedScheme || {};

    // Show Funding Required
    const fundingElement =
        document.getElementById("plannerFundingRequired");

    if (fundingElement) {
        fundingElement.textContent =
            formatMoney(fundingRequired);
    }

    console.log(
        "Step 6B: Funding Required loaded.",
        fundingRequired
    );

}


// Load automatically when page opens
document.addEventListener("DOMContentLoaded", loadSchemeFinancialData);

// ==========================================================
// ELEMENTS
// ==========================================================

const monthlySalesInput =
    document.getElementById("monthlySales");

const salesGrowthInput =
    document.getElementById("salesGrowth");

const rawMaterialInput =
    document.getElementById("rawMaterial");

const labourInput =
    document.getElementById("labour");

const rentInput =
    document.getElementById("rent");

const electricityInput =
    document.getElementById("electricity");

const transportInput =
    document.getElementById("transport");

const otherExpensesInput =
    document.getElementById("otherExpenses");

const calculateButton =
    document.getElementById("calculatePlannerBtn");

const resetButton =
    document.getElementById("resetPlannerBtn");


// ==========================================================
// FORMAT MONEY
// ==========================================================

function formatMoney(amount) {

    return `₹${Math.round(amount).toLocaleString("en-IN")}`;

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
        "plannerBusinessName"
    ).textContent =
        business || "Your Business";


    const locationParts = [];

    if (village) locationParts.push(village);
    if (block) locationParts.push(block);
    if (district) locationParts.push(district);


    document.getElementById(
        "plannerBusinessLocation"
    ).textContent =
        locationParts.length
            ? locationParts.join(", ")
            : "Location not available";


    document.getElementById(
        "plannerCapital"
    ).textContent =
        formatMoney(capital);


    const userName =
        localStorage.getItem("grambizUserName");


    if (userName) {

        document.getElementById(
            "userName"
        ).textContent = userName;

    }

}


// ==========================================================
// GET NUMBER
// ==========================================================

function getValue(input) {

    return Number(input.value) || 0;

}


// ==========================================================
// CALCULATE PLAN
// ==========================================================

function calculateFinancialPlan() {

    const sales =
        getValue(monthlySalesInput);


    const growth =
        getValue(salesGrowthInput);


    const rawMaterial =
        getValue(rawMaterialInput);


    const labour =
        getValue(labourInput);


    const rent =
        getValue(rentInput);


    const electricity =
        getValue(electricityInput);


    const transport =
        getValue(transportInput);


    const other =
        getValue(otherExpensesInput);


    // ------------------------------------------
    // TOTAL EXPENSE
    // ------------------------------------------

    const totalExpenses =
        rawMaterial +
        labour +
        rent +
        electricity +
        transport +
        other;


    // ------------------------------------------
    // PROFIT
    // ------------------------------------------

    const profit =
        sales - totalExpenses;


    // ------------------------------------------
    // PROFIT MARGIN
    // ------------------------------------------

    const profitMargin =
        sales > 0
            ? (profit / sales) * 100
            : 0;


    // ------------------------------------------
    // CONTRIBUTION MARGIN
    // ------------------------------------------

    const variableCosts =
        rawMaterial +
        transport;


    const contribution =
        sales - variableCosts;


    const contributionMargin =
        sales > 0
            ? (contribution / sales) * 100
            : 0;


    // ------------------------------------------
    // BREAK EVEN
    // ------------------------------------------

    const fixedCosts =
        labour +
        rent +
        electricity +
        other;


    let breakEven = 0;


    if (contributionMargin > 0) {

        breakEven =
            fixedCosts /
            (contributionMargin / 100);

    }


    // ------------------------------------------
    // UPDATE SUMMARY
    // ------------------------------------------

    document.getElementById(
        "summaryRevenue"
    ).textContent =
        formatMoney(sales);


    document.getElementById(
        "summaryExpenses"
    ).textContent =
        formatMoney(totalExpenses);


    document.getElementById(
        "summaryProfit"
    ).textContent =
        formatMoney(profit);


    document.getElementById(
        "summaryMargin"
    ).textContent =
        profitMargin.toFixed(1) + "%";


    document.getElementById(
        "summaryBreakEven"
    ).textContent =
        formatMoney(breakEven);


    document.getElementById(
        "summaryContribution"
    ).textContent =
        contributionMargin.toFixed(1) + "%";


    // ------------------------------------------
    // HEALTH
    // ------------------------------------------

    updateFinancialHealth(
        sales,
        profit,
        profitMargin
    );


    // ------------------------------------------
    // EXPENSE BREAKDOWN
    // ------------------------------------------

    updateExpenseBreakdown([
        ["Raw Material / Stock", rawMaterial],
        ["Labour / Wages", labour],
        ["Rent", rent],
        ["Electricity / Utilities", electricity],
        ["Transport", transport],
        ["Other Expenses", other]
    ], totalExpenses);


    // ------------------------------------------
    // FORECAST
    // ------------------------------------------

    generateForecast(
        sales,
        totalExpenses,
        growth
    );

}


// ==========================================================
// FINANCIAL HEALTH
// ==========================================================

function updateFinancialHealth(
    sales,
    profit,
    margin
) {

    const icon =
        document.getElementById("healthIcon");

    const title =
        document.getElementById("healthTitle");

    const message =
        document.getElementById("healthMessage");


    if (sales <= 0) {

        icon.textContent = "—";

        title.textContent =
            "Enter your figures";

        message.textContent =
            "Enter your expected sales and expenses to calculate your financial health.";

        return;

    }


    if (profit > 0 && margin >= 20) {

        icon.textContent = "✓";

        title.textContent =
            "Healthy Profitability";

        message.textContent =
            "Your current estimates show positive profitability with a relatively strong margin.";

    }

    else if (profit > 0) {

        icon.textContent = "✓";

        title.textContent =
            "Positive but Needs Monitoring";

        message.textContent =
            "Your business is estimated to be profitable, but improving margins and controlling expenses could strengthen the plan.";

    }

    else if (profit === 0) {

        icon.textContent = "•";

        title.textContent =
            "Break-even Position";

        message.textContent =
            "Your estimated revenue currently covers the listed expenses.";

    }

    else {

        icon.textContent = "!";

        title.textContent =
            "Loss Position";

        message.textContent =
            "Estimated expenses are higher than revenue. Review pricing, sales assumptions and costs.";

    }

}


// ==========================================================
// EXPENSE BREAKDOWN
// ==========================================================

function updateExpenseBreakdown(
    expenses,
    total
) {

    const container =
        document.getElementById(
            "expenseBreakdown"
        );


    if (total <= 0) {

        container.innerHTML = `
            <div class="empty-breakdown">
                No expenses entered yet.
            </div>
        `;

        return;

    }


    container.innerHTML = "";


    expenses.forEach(function(item) {

        const name = item[0];
        const value = item[1];


        const percentage =
            (value / total) * 100;


        const row =
            document.createElement("div");


        row.className =
            "expense-line";


        row.innerHTML = `

            <span class="expense-name">
                ${name}
            </span>

            <div class="expense-track">

                <div
                    class="expense-fill"
                    style="width:${percentage}%">
                </div>

            </div>

            <span class="expense-value">
                ${formatMoney(value)}
            </span>

        `;


        container.appendChild(row);

    });

}


// ==========================================================
// 12 MONTH FORECAST
// ==========================================================

function generateForecast(
    startingSales,
    monthlyExpenses,
    growthRate
) {

    const tableBody =
        document.getElementById(
            "forecastTableBody"
        );


    tableBody.innerHTML = "";


    let totalRevenue = 0;
    let totalExpenses = 0;
    let totalProfit = 0;


    for (
        let month = 1;
        month <= 12;
        month++
    ) {


        const revenue =
            startingSales *
            Math.pow(
                1 + growthRate / 100,
                month - 1
            );


        const expense =
            monthlyExpenses;


        const profit =
            revenue - expense;


        const margin =
            revenue > 0
                ? (profit / revenue) * 100
                : 0;


        totalRevenue += revenue;
        totalExpenses += expense;
        totalProfit += profit;


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                Month ${month}
            </td>

            <td>
                ${formatMoney(revenue)}
            </td>

            <td>
                ${formatMoney(expense)}
            </td>

            <td>
                ${formatMoney(profit)}
            </td>

            <td>
                ${margin.toFixed(1)}%
            </td>

        `;


        tableBody.appendChild(row);

    }


    document.getElementById(
        "annualRevenue"
    ).textContent =
        formatMoney(totalRevenue);


    document.getElementById(
        "annualExpenses"
    ).textContent =
        formatMoney(totalExpenses);


    document.getElementById(
        "annualProfit"
    ).textContent =
        formatMoney(totalProfit);


    // Save current plan

    localStorage.setItem(
        "grambizFinancialPlan",
        JSON.stringify({

            sales: startingSales,
            growth: growthRate,
            expenses: monthlyExpenses,

            annualRevenue:
                totalRevenue,

            annualExpenses:
                totalExpenses,

            annualProfit:
                totalProfit

        })
    );


    document.getElementById(
        "saveStatus"
    ).textContent =
        "✓ Financial plan saved for this session.";

}


// ==========================================================
// RESET
// ==========================================================

function resetPlanner() {

    document.querySelectorAll(
        ".planner-card input"
    ).forEach(function(input) {

        input.value = "";

    });


    salesGrowthInput.value = 3;


    document.getElementById(
        "summaryRevenue"
    ).textContent = "₹0";


    document.getElementById(
        "summaryExpenses"
    ).textContent = "₹0";


    document.getElementById(
        "summaryProfit"
    ).textContent = "₹0";


    document.getElementById(
        "summaryMargin"
    ).textContent = "0%";


    document.getElementById(
        "summaryBreakEven"
    ).textContent = "₹0";


    document.getElementById(
        "summaryContribution"
    ).textContent = "0%";


    document.getElementById(
        "annualRevenue"
    ).textContent = "₹0";


    document.getElementById(
        "annualExpenses"
    ).textContent = "₹0";


    document.getElementById(
        "annualProfit"
    ).textContent = "₹0";


    document.getElementById(
        "forecastTableBody"
    ).innerHTML = `

        <tr>
            <td colspan="5">
                Enter your figures and calculate the plan.
            </td>
        </tr>

    `;


    document.getElementById(
        "expenseBreakdown"
    ).innerHTML = `

        <div class="empty-breakdown">
            Calculate your plan to see the expense breakdown.
        </div>

    `;


    document.getElementById(
        "healthIcon"
    ).textContent = "—";


    document.getElementById(
        "healthTitle"
    ).textContent =
        "Enter your figures";


    document.getElementById(
        "healthMessage"
    ).textContent =
        "Calculate your financial plan to see the preliminary assessment.";


    document.getElementById(
        "saveStatus"
    ).textContent = "";

}


// ==========================================================
// BUTTONS
// ==========================================================

calculateButton.addEventListener(
    "click",
    calculateFinancialPlan
);


resetButton.addEventListener(
    "click",
    resetPlanner
);


// ==========================================================
// INITIAL LOAD
// ==========================================================

loadBusinessData();