import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function FinancialPlanner() {
  return (
    <LegacyPage
      title="Financial Planner | UNNATI"
      styles={["/css/dashboard.css", "/css/financial.css", "/css/financial-planner.css", "/css/unnati-assistant.css"]}
      scripts={["financial-planner.js", "unnati-assistant.js"]}
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
<span className="profile-avatar">A</span>
<span id="userName">User</span>
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
                Financial Planner
            </h1>
</div>
<button className="planner-back-btn" data-legacy-onclick="window.location.href='financial.html'">

            ← Back to Financials

        </button>
</header>

<div className="financial-tabs">
<a href="financial.html">
            Financial Overview
        </a>
<a href="scheme-calculator.html">
            Scheme Calculator
        </a>
<a className="active" href="financial-planner.html">
            Financial Planner
        </a>
<a href="repayment-planner.html">
            Repayment Planner
        </a>
<a href="cost-profitability.html">
            Cost & Profitability
        </a>
</div>

<section className="planner-intro">
<span className="planner-label">
            SMART FINANCIAL PLANNER
        </span>
<h2>
            Plan Your Business Finances
        </h2>
<p>
            Estimate sales, expenses, profitability and
            your expected financial performance for the
            next 12 months.
        </p>
</section>

<section className="business-context-card">
<div>
<span className="planner-label">
                YOUR BUSINESS
            </span>
<h3 id="plannerBusinessName">
                Your Business
            </h3>
<p id="plannerBusinessLocation">
                Location not available
            </p>
</div>
<div className="capital-box">
<span>
                Available Capital
            </span>
<strong id="plannerCapital">
                ₹0
            </strong>
</div>
<div className="capital-box">
<span>
        Funding Required
    </span>
<strong id="plannerFundingRequired">
        ₹0
    </strong>
</div>
</section>

<section className="planner-grid">

<div className="planner-card">
<div className="card-heading">
<h3>
                    Sales Forecast
                </h3>
<p>
                    Enter your expected business sales.
                </p>
</div>
<div className="input-group">
<label htmlFor="monthlySales">
                    Current Monthly Sales
                </label>
<div className="input-money">
<span>₹</span>
<input id="monthlySales" min="0" placeholder="50000" type="number" />
</div>
</div>
<div className="input-group">
<label htmlFor="salesGrowth">
                    Expected Monthly Growth
                </label>
<div className="input-percent">
<input id="salesGrowth" min="0" step="0.5" type="number" value="3" />
<span>%</span>
</div>
</div>
<div className="card-heading expense-heading">
<h3>
                    Monthly Expenses
                </h3>
<p>
                    Break your expenses into major categories.
                </p>
</div>
<div className="input-group">
<label htmlFor="rawMaterial">
                    Raw Material / Stock
                </label>
<div className="input-money">
<span>₹</span>
<input id="rawMaterial" min="0" placeholder="18000" type="number" />
</div>
</div>
<div className="input-group">
<label htmlFor="labour">
                    Labour / Wages
                </label>
<div className="input-money">
<span>₹</span>
<input id="labour" min="0" placeholder="5000" type="number" />
</div>
</div>
<div className="input-group">
<label htmlFor="rent">
                    Rent
                </label>
<div className="input-money">
<span>₹</span>
<input id="rent" min="0" placeholder="4000" type="number" />
</div>
</div>
<div className="input-group">
<label htmlFor="electricity">
                    Electricity / Utilities
                </label>
<div className="input-money">
<span>₹</span>
<input id="electricity" min="0" placeholder="2000" type="number" />
</div>
</div>
<div className="input-group">
<label htmlFor="transport">
                    Transport
                </label>
<div className="input-money">
<span>₹</span>
<input id="transport" min="0" placeholder="2000" type="number" />
</div>
</div>
<div className="input-group">
<label htmlFor="otherExpenses">
                    Other Expenses
                </label>
<div className="input-money">
<span>₹</span>
<input id="otherExpenses" min="0" placeholder="2000" type="number" />
</div>
</div>
<div className="planner-actions">
<button className="planner-button" id="calculatePlannerBtn">

                    Calculate Financial Plan

                </button>
<button className="reset-button" id="resetPlannerBtn">

                    Reset

                </button>
</div>
</div>

<div className="planner-card summary-card">
<div className="card-heading">
<h3>
                    Financial Summary
                </h3>
<p>
                    Estimated monthly performance.
                </p>
</div>
<div className="summary-list">
<div className="summary-row">
<span>Monthly Revenue</span>
<strong id="summaryRevenue">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>Total Expenses</span>
<strong id="summaryExpenses">
                        ₹0
                    </strong>
</div>
<div className="summary-row profit-row">
<span>Estimated Net Profit</span>
<strong id="summaryProfit">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>Profit Margin</span>
<strong id="summaryMargin">
                        0%
                    </strong>
</div>
</div>

<div className="mini-metrics">
<div>
<span>
                        Break-even Sales
                    </span>
<strong id="summaryBreakEven">
                        ₹0
                    </strong>
</div>
<div>
<span>
                        Contribution Margin
                    </span>
<strong id="summaryContribution">
                        0%
                    </strong>
</div>
</div>
</div>
</section>

<section className="planner-card">
<div className="card-heading">
<h3>
                Business Financial Health
            </h3>
<p>
                Preliminary assessment based on your estimates.
            </p>
</div>
<div className="health-result">
<div className="health-icon" id="healthIcon">

                —

            </div>
<div>
<span className="health-label">
                    CURRENT ASSESSMENT
                </span>
<h3 id="healthTitle">
                    Enter your figures
                </h3>
<p id="healthMessage">

                    Calculate your financial plan to see
                    the preliminary assessment.

                </p>
</div>
</div>
</section>

<section className="planner-card">
<div className="card-heading">
<h3>
                Expense Breakdown
            </h3>
<p>
                Understand where your monthly expenses are going.
            </p>
</div>
<div className="expense-breakdown" id="expenseBreakdown">
<div className="empty-breakdown">
                Calculate your plan to see the expense breakdown.
            </div>
</div>
</section>

<section className="planner-card">
<div className="card-heading">
<h3>
                12-Month Financial Forecast
            </h3>
<p>
                Projected performance using your expected monthly
                sales growth.
            </p>
</div>
<div className="forecast-summary">
<div>
<span>
                    Annual Revenue
                </span>
<strong id="annualRevenue">
                    ₹0
                </strong>
</div>
<div>
<span>
                    Annual Expenses
                </span>
<strong id="annualExpenses">
                    ₹0
                </strong>
</div>
<div>
<span>
                    Annual Profit
                </span>
<strong id="annualProfit">
                    ₹0
                </strong>
</div>
</div>
<div className="forecast-table-wrapper">
<table className="forecast-table">
<thead>
<tr>
<th>Month</th>
<th>Revenue</th>
<th>Expenses</th>
<th>Profit</th>
<th>Margin</th>
</tr>
</thead>
<tbody id="forecastTableBody">
<tr>
<td colSpan="5">
                            Enter your figures and calculate the plan.
                        </td>
</tr>
</tbody>
</table>
</div>
</section>

<div className="save-status" id="saveStatus">
</div>

<div className="planner-disclaimer">
<strong>Note:</strong>

        This is a preliminary financial estimate based on
        user-entered assumptions. Actual business performance
        may vary due to demand, seasonality, costs, market
        conditions and other factors.

    </div>
</main>

      </>
    </LegacyPage>
  );
}
