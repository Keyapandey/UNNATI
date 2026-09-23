import React from "react";
import LegacyPage from "../components/LegacyPage";
   import FinancialTabs from "../components/FinancialTabs";

export default function RepaymentPlanner() {
  return (
    <LegacyPage
      title="Repayment Planner | UNNATI"
      styles={["/css/dashboard.css", "/css/financial.css", "/css/repayment-planner.css", "/css/unnati-assistant.css"]}
      scripts={["repayment-planner.js", "unnati-assistant.js"]}
    >
      <>


<aside className="sidebar">
<div className="dashboard-logo unnati-brand">
<img alt="Unnati logo" className="unnati-logo" src="assets/unnati-logo.png" />
<div className="brand-text">
<span>UNNATI</span>
<small>Know your market. Grow your business.</small>
</div>
</div>
<nav className="sidebar-nav">
<a className="nav-item" href="dashboard.html">
<span>▦</span>
            Dashboard
        </a>
<a className="nav-item" href="market.html">
<span>📍</span>
            Market Reach
        </a>
<a className="nav-item" href="opportunities.html">
<span>💡</span>
            Opportunities
        </a>
<a className="nav-item" href="competitors.html">
<span>🏪</span>
            Competitors
        </a>
<a className="nav-item" href="pricing.html">
<span>💰</span>
            Pricing
        </a>
<a className="nav-item active" href="financial.html">
<span>📊</span>
            Financials
        </a>
<a className="nav-item" href="risk.html">
<span>⚠</span>
            Risk
        </a>
<a className="nav-item" href="businessPlan.html">
<span>📄</span>
            Business Plan
        </a>
</nav>
<div className="sidebar-bottom">
<button className="profile-button">
<span className="profile-avatar">
                A
            </span>
<span id="userName">
                User
            </span>
</button>
</div>
</aside>

<main className="dashboard-main">

<header className="dashboard-header">
<div>
<p className="welcome-small">
                FINANCIAL MANAGEMENT
            </p>
<h1>
                Repayment Planner
            </h1>
</div>
<button className="repayment-back-btn" data-legacy-onclick="window.location.href='financial.html'">

            ← Back to Financials

        </button>
</header>
   <FinancialTabs active="overview" />
<section className="repayment-intro">
<span className="repayment-label">
            SMART REPAYMENT PLANNER
        </span>
<h2>
            Understand Your Financing & Repayment
        </h2>
<p>
            Estimate EMI, interest, total repayment and
            monthly repayment affordability before taking
            financing.
        </p>
</section>

<section className="business-context-card">
<div>
<span className="repayment-label">
                YOUR BUSINESS
            </span>
<h3 id="repaymentBusinessName">
                Your Business
            </h3>
<p id="repaymentBusinessLocation">
                Location not available
            </p>
</div>
<div className="context-capital">
<span>
                Available Capital
            </span>
<strong id="repaymentCapital">
                ₹0
            </strong>
</div>
</section>

<section className="repayment-grid">

<div className="repayment-card">
<div className="card-heading">
<h3>
                    Financing Details
                </h3>
<p>
                    Enter the financing assumptions you want
                    to evaluate.
                </p>
</div>

<div className="input-group">
<label htmlFor="financeType">
                    Financing Type
                </label>
<select id="financeType">
<option value="Business Loan">
                        Business Loan
                    </option>
<option value="Working Capital">
                        Working Capital Finance
                    </option>
<option value="Scheme-linked Finance">
                        Scheme-linked Finance
                    </option>
<option value="Equipment / Asset Finance">
                        Equipment / Asset Finance
                    </option>
<option value="Other">
                        Other Financing
                    </option>
</select>
</div>

<div className="input-group">
<label htmlFor="loanAmount">
                    Financing Amount
                </label>
<div className="money-input">
<span>₹</span>
<input id="loanAmount" min="0" placeholder="300000" type="number" />
</div>
</div>

<div className="input-group">
<label htmlFor="interestRate">
                    Annual Interest Rate
                </label>
<div className="percent-input">
<input id="interestRate" min="0" step="0.1" type="number" value="10" />
<span>%</span>
</div>
</div>

<div className="input-group">
<label htmlFor="tenureYears">
                    Repayment Tenure
                </label>
<div className="tenure-input">
<input id="tenureYears" max="30" min="1" type="number" value="5" />
<span>Years</span>
</div>
</div>

<div className="input-group">
<label htmlFor="moratoriumMonths">
                    Moratorium Period
                </label>
<div className="tenure-input">
<input id="moratoriumMonths" max="24" min="0" type="number" value="0" />
<span>Months</span>
</div>
</div>

<div className="input-group">
<label htmlFor="processingFee">
                    Processing Fee
                </label>
<div className="percent-input">
<input id="processingFee" min="0" step="0.1" type="number" value="1" />
<span>%</span>
</div>
</div>

<div className="repayment-actions">
<button className="primary-button" id="calculateRepaymentBtn">

                    Calculate Repayment

                </button>
<button className="secondary-button" id="resetRepaymentBtn">

                    Reset

                </button>
</div>
</div>

<div className="repayment-card">
<div className="card-heading">
<h3>
                    Repayment Summary
                </h3>
<p>
                    Estimated repayment based on your inputs.
                </p>
</div>
<div className="repayment-highlight">
<span>
                    Monthly EMI
                </span>
<strong id="emiResult">
                    ₹0
                </strong>
</div>
<div className="summary-list">
<div className="summary-row">
<span>
                        Financing Amount
                    </span>
<strong id="principalResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Total Interest
                    </span>
<strong id="interestResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Total Repayment
                    </span>
<strong id="totalRepaymentResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Processing Fee
                    </span>
<strong id="processingFeeResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row total-cost-row">
<span>
                        Total Financing Cost
                    </span>
<strong id="totalCostResult">
                        ₹0
                    </strong>
</div>
</div>
</div>
</section>

<section className="repayment-card">
<div className="card-heading">
<h3>
                Repayment Metrics
            </h3>
<p>
                Quick view of the financing burden.
            </p>
</div>
<div className="metric-grid">
<div className="metric-box">
<span>
                    First-Year Principal
                </span>
<strong id="firstYearPrincipal">
                    ₹0
                </strong>
</div>
<div className="metric-box">
<span>
                    First-Year Interest
                </span>
<strong id="firstYearInterest">
                    ₹0
                </strong>
</div>
<div className="metric-box">
<span>
                    Interest Share
                </span>
<strong id="interestShare">
                    0%
                </strong>
</div>
<div className="metric-box">
<span>
                    Total Months
                </span>
<strong id="totalMonths">
                    0
                </strong>
</div>
</div>
</section>

<section className="repayment-card">
<div className="card-heading">
<h3>
                Repayment Affordability
            </h3>
<p>
                A planning indicator based on your Financial
                Planner estimates.
            </p>
</div>
<div className="affordability-box">
<div className="affordability-icon" id="affordabilityIcon">

                —

            </div>
<div>
<span className="affordability-label">
                    REPAYMENT CAPACITY
                </span>
<h3 id="affordabilityTitle">
                    Enter your financing details
                </h3>
<p id="affordabilityMessage">

                    Your estimated business profit and EMI
                    will be compared after calculation.

                </p>
</div>
</div>
</section>

<section className="repayment-card">
<div className="card-heading">
<h3>
                Month-wise Repayment Schedule
            </h3>
<p>
                Estimated principal and interest movement
                throughout the repayment period.
            </p>
</div>
<div className="schedule-wrapper">
<table className="schedule-table">
<thead>
<tr>
<th>
                            Month
                        </th>
<th>
                            Opening Balance
                        </th>
<th>
                            EMI
                        </th>
<th>
                            Principal
                        </th>
<th>
                            Interest
                        </th>
<th>
                            Closing Balance
                        </th>
</tr>
</thead>
<tbody id="scheduleBody">
<tr>
<td colSpan="6">

                            Enter financing details and
                            calculate your repayment plan.

                        </td>
</tr>
</tbody>
</table>
</div>
</section>

<div className="save-status" id="repaymentSaveStatus">
</div>

<div className="repayment-disclaimer">
<strong>Planning Note:</strong>

        This calculator provides an estimated repayment
        schedule for planning purposes. Actual EMI,
        interest, fees, moratorium treatment and lending
        terms depend on the lender and the applicable
        financing or scheme conditions.

    </div>
</main>

      </>
    </LegacyPage>
  );
}