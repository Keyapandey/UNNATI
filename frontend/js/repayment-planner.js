// ==========================================================
// GRAMBIZ AI
// REPAYMENT PLANNER
// ==========================================================


// ==========================================================
// ELEMENTS
// ==========================================================

const financeType =
    document.getElementById("financeType");

const loanAmountInput =
    document.getElementById("loanAmount");

const interestRateInput =
    document.getElementById("interestRate");

const tenureYearsInput =
    document.getElementById("tenureYears");

const moratoriumInput =
    document.getElementById("moratoriumMonths");

const processingFeeInput =
    document.getElementById("processingFee");

const calculateButton =
    document.getElementById("calculateRepaymentBtn");

const resetButton =
    document.getElementById("resetRepaymentBtn");



// ==========================================================
// STEP 7 — LOAD SCHEME + FINANCIAL PLANNER DATA
// ==========================================================

function loadConnectedFinancialData() {

    const financialData =
        JSON.parse(localStorage.getItem("grambizFinancialData")) || {};

    const schemeData =
        financialData.scheme || {};

    const selectedScheme =
        schemeData.selectedScheme || {};

    // ------------------------------------------
    // FUNDING REQUIRED → FINANCING AMOUNT
    // ------------------------------------------

    const fundingRequired =
        Number(schemeData.fundingRequired) || 0;

    if (fundingRequired > 0) {

        loanAmountInput.value =
            fundingRequired;

        financeType.value =
            "Scheme-linked Finance";
    }


    // ------------------------------------------
    // SCHEME INTEREST RATE
    // ------------------------------------------

    if (
        selectedScheme.interest !== undefined &&
        selectedScheme.interest !== null
    ) {

        const interest =
            Number(selectedScheme.interest);

        if (!isNaN(interest) && interest >= 0) {

            interestRateInput.value =
                interest;

        }

    }


    // ------------------------------------------
    // SCHEME TENURE
    // ------------------------------------------

    if (selectedScheme.tenure) {

        const tenureText =
            String(selectedScheme.tenure);

        const tenureMatch =
            tenureText.match(/\d+/);

        if (tenureMatch) {

            const tenure =
                Number(tenureMatch[0]);

            if (
                tenure > 0 &&
                tenure <= 30
            ) {

                tenureYearsInput.value =
                    tenure;

            }

        }

    }


    console.log(
        "Step 7: Scheme data connected to Repayment Planner.",
        {
            fundingRequired,
            selectedScheme
        }
    );

}
// ==========================================================
// MONEY FORMAT
// ==========================================================

function formatMoney(amount) {

    return `₹${Math.round(amount).toLocaleString("en-IN")}`;

}


// ==========================================================
// BUSINESS DATA
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
        "repaymentBusinessName"
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
        "repaymentBusinessLocation"
    ).textContent =
        locationParts.length
            ? locationParts.join(", ")
            : "Location not available";


    document.getElementById(
        "repaymentCapital"
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
// CALCULATE EMI
// ==========================================================

function calculateEMI(
    principal,
    annualRate,
    months
) {

    if (principal <= 0 || months <= 0) {

        return 0;

    }


    const monthlyRate =
        annualRate / 12 / 100;


    // Zero-interest case

    if (monthlyRate === 0) {

        return principal / months;

    }


    const factor =
        Math.pow(
            1 + monthlyRate,
            months
        );


    const emi =
        principal *
        monthlyRate *
        factor /
        (factor - 1);


    return emi;

}


// ==========================================================
// MAIN CALCULATION
// ==========================================================

function calculateRepayment() {

    const principal =
        Number(loanAmountInput.value) || 0;


    const annualRate =
        Number(interestRateInput.value) || 0;


    const tenureYears =
        Number(tenureYearsInput.value) || 0;


    const moratorium =
        Number(moratoriumInput.value) || 0;


    const processingFeeRate =
        Number(processingFeeInput.value) || 0;


    // ------------------------------------------
    // VALIDATION
    // ------------------------------------------

    if (principal <= 0) {

        alert(
            "Please enter a valid financing amount."
        );

        return;

    }


    if (tenureYears <= 0) {

        alert(
            "Please enter a valid repayment tenure."
        );

        return;

    }


    const totalMonths =
        tenureYears * 12;


    if (moratorium >= totalMonths) {

        alert(
            "Moratorium must be shorter than the repayment tenure."
        );

        return;

    }


    // ------------------------------------------
    // EMI PERIOD
    // ------------------------------------------

    const repaymentMonths =
        totalMonths - moratorium;


    const emi =
        calculateEMI(
            principal,
            annualRate,
            repaymentMonths
        );


    // ------------------------------------------
    // PROCESSING FEE
    // ------------------------------------------

    const processingFee =
        principal *
        processingFeeRate /
        100;


    // ------------------------------------------
    // GENERATE SCHEDULE
    // ------------------------------------------

    const schedule =
        generateSchedule(
            principal,
            annualRate,
            totalMonths,
            moratorium,
            emi
        );


    // ------------------------------------------
    // TOTALS
    // ------------------------------------------

    let totalInterest = 0;
    let totalPrincipal = 0;


    schedule.forEach(function(row) {

        totalInterest += row.interest;

        totalPrincipal += row.principal;

    });


    const totalRepayment =
        totalPrincipal +
        totalInterest;


    const totalFinancingCost =
        totalInterest +
        processingFee;


    // ------------------------------------------
    // DISPLAY SUMMARY
    // ------------------------------------------

    document.getElementById(
        "emiResult"
    ).textContent =
        formatMoney(emi);


    document.getElementById(
        "principalResult"
    ).textContent =
        formatMoney(principal);


    document.getElementById(
        "interestResult"
    ).textContent =
        formatMoney(totalInterest);


    document.getElementById(
        "totalRepaymentResult"
    ).textContent =
        formatMoney(totalRepayment);


    document.getElementById(
        "processingFeeResult"
    ).textContent =
        formatMoney(processingFee);


    document.getElementById(
        "totalCostResult"
    ).textContent =
        formatMoney(totalFinancingCost);


    // ------------------------------------------
    // METRICS
    // ------------------------------------------

    const firstYear =
        schedule.slice(0, 12);


    let firstYearPrincipalAmount = 0;

    let firstYearInterestAmount = 0;


    firstYear.forEach(function(row) {

        firstYearPrincipalAmount +=
            row.principal;

        firstYearInterestAmount +=
            row.interest;

    });


    const interestShare =
        totalRepayment > 0
            ? (totalInterest / totalRepayment) * 100
            : 0;


    document.getElementById(
        "firstYearPrincipal"
    ).textContent =
        formatMoney(
            firstYearPrincipalAmount
        );


    document.getElementById(
        "firstYearInterest"
    ).textContent =
        formatMoney(
            firstYearInterestAmount
        );


    document.getElementById(
        "interestShare"
    ).textContent =
        interestShare.toFixed(1) + "%";


    document.getElementById(
        "totalMonths"
    ).textContent =
        totalMonths;


    // ------------------------------------------
    // SCHEDULE
    // ------------------------------------------

    displaySchedule(schedule);


    // ------------------------------------------
    // AFFORDABILITY
    // ------------------------------------------

    checkAffordability(emi);


    // ------------------------------------------
    // SAVE
    // ------------------------------------------

    const plan = {

        financeType:
            financeType.value,

        principal:
            principal,

        annualRate:
            annualRate,

        tenureYears:
            tenureYears,

        moratorium:
            moratorium,

        processingFeeRate:
            processingFeeRate,

        emi:
            emi,

        totalInterest:
            totalInterest,

        totalRepayment:
            totalRepayment,

        processingFee:
            processingFee,

        totalFinancingCost:
            totalFinancingCost

    };


    localStorage.setItem(
        "grambizRepaymentPlan",
        JSON.stringify(plan)
    );


    document.getElementById(
        "repaymentSaveStatus"
    ).textContent =
        "✓ Repayment plan saved for this session.";

}


// ==========================================================
// GENERATE REPAYMENT SCHEDULE
// ==========================================================

function generateSchedule(
    principal,
    annualRate,
    totalMonths,
    moratorium,
    emi
) {

    const schedule = [];

    let balance = principal;


    const monthlyRate =
        annualRate / 12 / 100;


    for (
        let month = 1;
        month <= totalMonths;
        month++
    ) {


        const openingBalance =
            balance;


        let interest =
            openingBalance *
            monthlyRate;


        let principalPayment = 0;

        let payment = 0;


        // --------------------------------------
        // MORATORIUM
        // --------------------------------------

        if (month <= moratorium) {

            /*
             * During this frontend planning model,
             * interest is added to the outstanding
             * balance during moratorium.
             */

            principalPayment = 0;

            payment = interest;

            balance =
                openingBalance +
                interest;

        }


        // --------------------------------------
        // NORMAL EMI PERIOD
        // --------------------------------------

        else {

            payment = emi;

            principalPayment =
                payment - interest;


            if (
                principalPayment >
                openingBalance
            ) {

                principalPayment =
                    openingBalance;

                payment =
                    principalPayment +
                    interest;

            }


            balance =
                openingBalance -
                principalPayment;


            if (balance < 0) {

                balance = 0;

            }

        }


        schedule.push({

            month:
                month,

            openingBalance:
                openingBalance,

            payment:
                payment,

            principal:
                principalPayment,

            interest:
                interest,

            closingBalance:
                balance,

            moratorium:
                month <= moratorium

        });

    }


    return schedule;

}


// ==========================================================
// DISPLAY SCHEDULE
// ==========================================================

function displaySchedule(schedule) {

    const body =
        document.getElementById(
            "scheduleBody"
        );


    body.innerHTML = "";


    schedule.forEach(function(row) {

        const tr =
            document.createElement("tr");


        if (row.moratorium) {

            tr.className =
                "moratorium-row";

        }


        tr.innerHTML = `

            <td>
                ${row.month}
            </td>

            <td>
                ${formatMoney(
                    row.openingBalance
                )}
            </td>

            <td class="${
                row.moratorium
                    ? "moratorium-label"
                    : ""
            }">

                ${
                    row.moratorium
                        ? "Interest"
                        : formatMoney(row.payment)
                }

            </td>

            <td>
                ${formatMoney(
                    row.principal
                )}
            </td>

            <td>
                ${formatMoney(
                    row.interest
                )}
            </td>

            <td>
                ${formatMoney(
                    row.closingBalance
                )}
            </td>

        `;


        body.appendChild(tr);

    });

}


// ==========================================================
// AFFORDABILITY
// ==========================================================

function checkAffordability(emi) {

    const icon =
        document.getElementById(
            "affordabilityIcon"
        );

    const title =
        document.getElementById(
            "affordabilityTitle"
        );

    const message =
        document.getElementById(
            "affordabilityMessage"
        );


    const financialPlan =
        localStorage.getItem(
            "grambizFinancialPlan"
        );


    if (!financialPlan) {

        icon.textContent = "?";

        title.textContent =
            "Financial Planner data not available";

        message.textContent =
            "Complete the Financial Planner first to compare your estimated business profit with the EMI.";

        return;

    }


    const plan =
        JSON.parse(financialPlan);


    const monthlySales =
        Number(plan.sales) || 0;


    const monthlyExpenses =
        Number(plan.expenses) || 0;


    const monthlyProfit =
        monthlySales -
        monthlyExpenses;


    if (monthlyProfit <= 0) {

        icon.textContent = "!";

        title.textContent =
            "Repayment capacity needs review";

        message.textContent =
            "Your Financial Planner currently shows no positive monthly profit. Review the business plan before taking additional financing.";

        return;

    }


    const emiRatio =
        (emi / monthlyProfit) * 100;


    if (emiRatio <= 30) {

        icon.textContent = "✓";

        title.textContent =
            "Comfortable planning range";

        message.textContent =
            `Estimated EMI is ${emiRatio.toFixed(1)}% of your estimated monthly profit. This is a planning indicator, not a lender approval decision.`;

    }

    else if (emiRatio <= 50) {

        icon.textContent = "!";

        title.textContent =
            "Moderate repayment pressure";

        message.textContent =
            `Estimated EMI is ${emiRatio.toFixed(1)}% of your estimated monthly profit. Consider a longer tenure, lower financing amount or stronger cash flow.`;

    }

    else {

        icon.textContent = "!";

        title.textContent =
            "High repayment pressure";

        message.textContent =
            `Estimated EMI is ${emiRatio.toFixed(1)}% of your estimated monthly profit. The financing assumption may put significant pressure on business cash flow.`;

    }

}


// ==========================================================
// RESET
// ==========================================================

function resetRepayment() {

    financeType.value =
        "Business Loan";


    loanAmountInput.value =
        "";


    interestRateInput.value =
        "10";


    tenureYearsInput.value =
        "5";


    moratoriumInput.value =
        "0";


    processingFeeInput.value =
        "1";


    document.getElementById(
        "emiResult"
    ).textContent =
        "₹0";


    document.getElementById(
        "principalResult"
    ).textContent =
        "₹0";


    document.getElementById(
        "interestResult"
    ).textContent =
        "₹0";


    document.getElementById(
        "totalRepaymentResult"
    ).textContent =
        "₹0";


    document.getElementById(
        "processingFeeResult"
    ).textContent =
        "₹0";


    document.getElementById(
        "totalCostResult"
    ).textContent =
        "₹0";


    document.getElementById(
        "firstYearPrincipal"
    ).textContent =
        "₹0";


    document.getElementById(
        "firstYearInterest"
    ).textContent =
        "₹0";


    document.getElementById(
        "interestShare"
    ).textContent =
        "0%";


    document.getElementById(
        "totalMonths"
    ).textContent =
        "0";


    document.getElementById(
        "scheduleBody"
    ).innerHTML = `

        <tr>

            <td colspan="6">

                Enter financing details and
                calculate your repayment plan.

            </td>

        </tr>

    `;


    document.getElementById(
        "affordabilityIcon"
    ).textContent =
        "—";


    document.getElementById(
        "affordabilityTitle"
    ).textContent =
        "Enter your financing details";


    document.getElementById(
        "affordabilityMessage"
    ).textContent =
        "Your estimated business profit and EMI will be compared after calculation.";


    document.getElementById(
        "repaymentSaveStatus"
    ).textContent = "";

}


// ==========================================================
// BUTTON EVENTS
// ==========================================================

calculateButton.addEventListener(
    "click",
    calculateRepayment
);


resetButton.addEventListener(
    "click",
    resetRepayment
);


// ==========================================================
// INITIAL LOAD
// ==========================================================

loadBusinessData();

loadConnectedFinancialData();