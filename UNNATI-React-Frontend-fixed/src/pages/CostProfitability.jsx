import React from "react";
import LegacyPage from "../components/LegacyPage";
   import FinancialTabs from "../components/FinancialTabs";

export default function CostProfitability() {
  return (
    <LegacyPage
      title="Cost & Profitability | UNNATI"
      styles={["/css/dashboard.css", "/css/financial.css", "/css/cost-profitability.css", "/css/unnati-assistant.css"]}
      scripts={["cost-profitability.js", "unnati-assistant.js"]}
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
                Cost & Profitability
            </h1>
</div>
<button className="profit-back-btn" data-legacy-onclick="window.location.href='financial.html'">

            ← Back to Financials

        </button>
</header>

   <FinancialTabs active="overview" />
<section className="profit-intro">
<span className="profit-label">
            COST & PROFITABILITY ANALYSIS
        </span>
<h2>
            Understand Where Your Money Goes
        </h2>
<p>
            Analyse revenue, costs, profit, break-even
            point and business profitability before making
            financial decisions.
        </p>
</section>

<section className="profit-context-card">
<div>
<span className="profit-label">
                YOUR BUSINESS
            </span>
<h3 id="profitBusinessName">
                Your Business
            </h3>
<p id="profitBusinessLocation">
                Location not available
            </p>
</div>
<div className="context-capital">
<span>
                Available Capital
            </span>
<strong id="profitCapital">
                ₹0
            </strong>
</div>
</section>

<section className="profit-grid">

<div className="profit-card">
<div className="card-heading">
<h3>
                    Business Cost Inputs
                </h3>
<p>
                    Enter your expected monthly business
                    revenue and costs.
                </p>
</div>

<div className="input-group">
<label htmlFor="monthlyRevenue">
                    Monthly Revenue / Sales
                </label>
<div className="money-input">
<span>₹</span>
<input id="monthlyRevenue" min="0" placeholder="42500" type="number" />
</div>
</div>

<div className="input-group">
<label htmlFor="monthlyUnits">
                    Units Sold Per Month
                </label>
<input id="monthlyUnits" min="0" placeholder="500" type="number" />
</div>

<div className="input-group">
<label htmlFor="variableCostPerUnit">
                    Variable Cost Per Unit
                </label>
<div className="money-input">
<span>₹</span>
<input id="variableCostPerUnit" min="0" placeholder="40" type="number" />
</div>
</div>

<div className="input-group">
<label htmlFor="fixedCosts">
                    Monthly Fixed Costs
                </label>
<div className="money-input">
<span>₹</span>
<input id="fixedCosts" min="0" placeholder="5000" type="number" />
</div>
</div>

<div className="input-group">
<label htmlFor="otherCosts">
                    Other Monthly Costs
                </label>
<div className="money-input">
<span>₹</span>
<input id="otherCosts" min="0" placeholder="2000" type="number" />
</div>
</div>
<div className="profit-actions">
<button className="primary-button" id="calculateProfitBtn">

                    Analyse Profitability

                </button>
<button className="secondary-button" id="resetProfitBtn">

                    Reset

                </button>
</div>
</div>

<div className="profit-card">
<div className="card-heading">
<h3>
                    Profitability Summary
                </h3>
<p>
                    Estimated monthly business performance.
                </p>
</div>
<div className="profit-highlight">
<span>
                    Net Profit
                </span>
<strong id="netProfit">
                    ₹0
                </strong>
</div>
<div className="summary-list">
<div className="summary-row">
<span>
                        Monthly Revenue
                    </span>
<strong id="revenueResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Variable Costs
                    </span>
<strong id="variableCostResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Fixed Costs
                    </span>
<strong id="fixedCostResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Other Costs
                    </span>
<strong id="otherCostResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Total Expenses
                    </span>
<strong id="totalExpenseResult">
                        ₹0
                    </strong>
</div>
<div className="summary-row">
<span>
                        Profit Margin
                    </span>
<strong id="profitMargin">
                        0%
                    </strong>
</div>
</div>
</div>
</section>

<section className="profit-card">
<div className="card-heading">
<h3>
                Business Profitability Metrics
            </h3>
<p>
                Important indicators for business planning.
            </p>
</div>
<div className="metric-grid">
<div className="metric-box">
<span>
                    Gross Profit
                </span>
<strong id="grossProfit">
                    ₹0
                </strong>
</div>
<div className="metric-box">
<span>
                    Cost Per Unit
                </span>
<strong id="costPerUnit">
                    ₹0
                </strong>
</div>
<div className="metric-box">
<span>
                    Break-even Units
                </span>
<strong id="breakEvenUnits">
                    0
                </strong>
</div>
<div className="metric-box">
<span>
                    Break-even Revenue
                </span>
<strong id="breakEvenRevenue">
                    ₹0
                </strong>
</div>
</div>
</section>

<section className="profit-card">
<div className="card-heading">
<h3>
                Profitability Health
            </h3>
<p>
                A simple planning indicator based on your
                current assumptions.
            </p>
</div>
<div className="profit-health">
<div className="health-icon" id="profitHealthIcon">

                —

            </div>
<div>
<span className="health-label">
                    BUSINESS PROFITABILITY
                </span>
<h3 id="profitHealthTitle">
                    Enter your business data
                </h3>
<p id="profitHealthMessage">

                    Analyse your inputs to see the
                    profitability status.

                </p>
</div>
</div>
</section>

<section className="profit-card">
<div className="card-heading">
<h3>
                What-if Scenario Analysis
            </h3>
<p>
                See how changes in sales or costs could affect
                your monthly profit.
            </p>
</div>
<div className="scenario-grid">
<div className="scenario-input">
<label htmlFor="salesChange">
                    Change in Sales
                </label>
<div className="percent-input">
<input id="salesChange" step="1" type="number" value="0" />
<span>%</span>
</div>
</div>
<div className="scenario-input">
<label htmlFor="costChange">
                    Change in Costs
                </label>
<div className="percent-input">
<input id="costChange" step="1" type="number" value="0" />
<span>%</span>
</div>
</div>
<button className="primary-button scenario-button" id="runScenarioBtn">

                Run Scenario

            </button>
</div>
<div className="scenario-result">
<div>
<span>
                    Scenario Revenue
                </span>
<strong id="scenarioRevenue">
                    ₹0
                </strong>
</div>
<div>
<span>
                    Scenario Expenses
                </span>
<strong id="scenarioExpenses">
                    ₹0
                </strong>
</div>
<div>
<span>
                    Scenario Profit
                </span>
<strong id="scenarioProfit">
                    ₹0
                </strong>
</div>
<div>
<span>
                    Profit Change
                </span>
<strong id="scenarioProfitChange">
                    ₹0
                </strong>
</div>
</div>
</section>

<section className="profit-card">
<div className="card-heading">
<h3>
                Monthly Cost Breakdown
            </h3>
<p>
                Understand the major components of your
                monthly business expenses.
            </p>
</div>
<div className="cost-bars">
<div className="cost-bar-row">
<div className="bar-info">
<span>
                        Variable Costs
                    </span>
<strong id="variablePercent">
                        0%
                    </strong>
</div>
<div className="bar-track">
<div className="bar-fill" id="variableBar">
</div>
</div>
</div>
<div className="cost-bar-row">
<div className="bar-info">
<span>
                        Fixed Costs
                    </span>
<strong id="fixedPercent">
                        0%
                    </strong>
</div>
<div className="bar-track">
<div className="bar-fill" id="fixedBar">
</div>
</div>
</div>
<div className="cost-bar-row">
<div className="bar-info">
<span>
                        Other Costs
                    </span>
<strong id="otherPercent">
                        0%
                    </strong>
</div>
<div className="bar-track">
<div className="bar-fill" id="otherBar">
</div>
</div>
</div>
</div>
</section>
<div className="save-status" id="profitSaveStatus">
</div>
<div className="profit-disclaimer">
<strong>Planning Note:</strong>

        This analysis is an estimate based on the values
        entered by the user. Actual business profitability
        depends on real sales, costs, taxes, seasonality,
        wastage, financing costs and other operating factors.

    </div>
</main>

      </>
    </LegacyPage>
  );
}