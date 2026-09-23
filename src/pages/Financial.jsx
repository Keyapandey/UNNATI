import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Financial() {
  return (
    <LegacyPage
      title="Financial Overview | UNNATI"
      styles={["/css/dashboard.css", "/css/financial.css", "/css/unnati-assistant.css"]}
      scripts={["financial.js", "profile-menu.js", "unnati-assistant.js"]}
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
<button className="profile-button" id="profileMenuBtn" type="button">
<span className="profile-avatar">A</span>
<span id="userName">User</span>
<span className="profile-arrow">⌃</span>
</button>
<div className="profile-menu" id="profileMenu">
<button id="editProfileBtn">✏ Edit Profile</button>
<button id="settingsBtn">⚙ Settings</button>
<button className="logout-btn" id="logoutBtn">↪ Logout</button>
</div>
</div>
</aside>

<main className="dashboard-main">

<header className="dashboard-header">
<div>
<p className="welcome-small">
                Financial Management
            </p>
<h1>
                Financial Overview
            </h1>
</div>
<a className="new-analysis-btn" href="dashboard.html">
            ← Dashboard
        </a>
</header>

<div className="financial-tabs">
<a className="financial-tab active" href="financial.html">
<span>◈</span>
            Financial Overview
        </a>
<a className="financial-tab" href="scheme-calculator.html">
<span>🧮</span>
            Scheme Calculator
        </a>
<a className="financial-tab" href="financial-planner.html">
<span>📅</span>
            Financial Planner
        </a>
<a className="financial-tab" href="repayment-planner.html">
<span>💳</span>
            Repayment Planner
        </a>
<a className="financial-tab" href="cost-profitability.html">
<span>📈</span>
            Cost & Profitability
        </a>
</div>

<section className="business-summary">
<div>
<span className="summary-label">
                BUSINESS
            </span>
<h2 id="businessName">
                Your Business
            </h2>
<p id="businessLocation">
                Your Location
            </p>
</div>
<div className="summary-capital">
<span className="summary-label">
                AVAILABLE CAPITAL
            </span>
<strong id="capitalAmount">
                ₹0
            </strong>
</div>
</section>

<section className="ai-insight">
<div className="insight-icon">
            ₹
        </div>
<div>
<span className="insight-label">
                FINANCIAL SNAPSHOT
            </span>
<h3>
                Understand where your business stands financially.
            </h3>
<p>
                This overview brings together your estimated income,
                expenses, profit and available capital in one place.
            </p>
</div>
</section>

<section className="section-heading">
<div>
<h2>
                Key Financial Metrics
            </h2>
<p>
                Estimated monthly business performance
            </p>
</div>
</section>
<div className="stats-grid">

<div className="stat-card">
<span className="stat-icon">
                ₹
            </span>
<div>
<span className="stat-label">
                    MONTHLY REVENUE
                </span>
<strong>
                    ₹42,500
                </strong>
<small>
                    Estimated sales income
                </small>
</div>
</div>

<div className="stat-card">
<span className="stat-icon">
                −
            </span>
<div>
<span className="stat-label">
                    MONTHLY EXPENSES
                </span>
<strong>
                    ₹25,700
                </strong>
<small>
                    Operating costs
                </small>
</div>
</div>

<div className="stat-card">
<span className="stat-icon">
                ↑
            </span>
<div>
<span className="stat-label">
                    EST. NET PROFIT
                </span>
<strong>
                    ₹16,800
                </strong>
<small>
                    Revenue minus expenses
                </small>
</div>
</div>

<div className="stat-card">
<span className="stat-icon">
                %
            </span>
<div>
<span className="stat-label">
                    PROFIT MARGIN
                </span>
<strong>
                    39.5%
                </strong>
<small>
                    Estimated net margin
                </small>
</div>
</div>
</div>

<section className="section-heading financial-section">
<div>
<h2>
                Income vs Expenses
            </h2>
<p>
                Estimated monthly financial distribution
            </p>
</div>
</section>
<section className="financial-panel">
<div className="financial-row">
<div>
<span className="financial-label">
                    Revenue
                </span>
<strong>
                    ₹42,500
                </strong>
</div>
<div className="financial-bar">
<div className="revenue-bar" style={{width: "100%"}}></div>
</div>
</div>
<div className="financial-row">
<div>
<span className="financial-label">
                    Expenses
                </span>
<strong>
                    ₹25,700
                </strong>
</div>
<div className="financial-bar">
<div className="expense-bar" style={{width: "60.5%"}}></div>
</div>
</div>
<div className="financial-row">
<div>
<span className="financial-label">
                    Net Profit
                </span>
<strong>
                    ₹16,800
                </strong>
</div>
<div className="financial-bar">
<div className="profit-bar" style={{width: "39.5%"}}></div>
</div>
</div>
</section>

<section className="section-heading financial-section">
<div>
<h2>
                Capital Position
            </h2>
<p>
                Current funding picture
            </p>
</div>
</section>
<div className="capital-grid">
<div className="capital-card">
<span className="summary-label">
                AVAILABLE CAPITAL
            </span>
<strong id="capitalPosition">
                ₹0
            </strong>
<p>
                Capital currently available for your business.
            </p>
</div>
<div className="capital-card">
<span className="summary-label">
                OWN CAPITAL
            </span>
<strong id="ownCapital">
                ₹0
            </strong>
<p>
                Capital contributed from your own resources.
            </p>
</div>
<div className="capital-card">
<span className="summary-label">
                EXTERNAL FUNDING
            </span>
<strong>
                ₹0
            </strong>
<p>
                Loans or external funding currently considered.
            </p>
</div>
</div>

<section className="section-heading financial-section">
<div>
<h2>
                Financial Health
            </h2>
<p>
                Quick view of your business financial condition
            </p>
</div>
</section>
<div className="health-grid">
<div className="health-card">
<span className="health-icon">
                ✓
            </span>
<div>
<span className="summary-label">
                    PROFITABILITY
                </span>
<h3>
                    Healthy
                </h3>
<p>
                    Estimated profit is positive after monthly expenses.
                </p>
</div>
</div>
<div className="health-card">
<span className="health-icon">
                ◌
            </span>
<div>
<span className="summary-label">
                    EXPENSE CONTROL
                </span>
<h3>
                    Needs Monitoring
                </h3>
<p>
                    Expenses currently use around 60.5% of estimated revenue.
                </p>
</div>
</div>
<div className="health-card">
<span className="health-icon">
                ₹
            </span>
<div>
<span className="summary-label">
                    CAPITAL READINESS
                </span>
<h3>
                    To Be Assessed
                </h3>
<p>
                    Funding requirements will be evaluated by the scheme tools.
                </p>
</div>
</div>
</div>
</main>

      </>
    </LegacyPage>
  );
}
