import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Dashboard() {
  return (
    <LegacyPage
      title="Dashboard | UNNATI"
      styles={["/css/dashboard.css", "/css/unnati-assistant.css"]}
      scripts={["dashboard.js", "language.js", "profile-menu.js", "unnati-assistant.js"]}
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
<a className="nav-item active" href="#">
<span>▦</span>
<span data-i18n="dashboard">Dashboard</span>
</a>
<a className="nav-item" href="market.html">
<span>📍</span>
<span data-i18n="marketReach">Market Reach</span>
</a>
<a className="nav-item" href="opportunities.html">
<span>💡</span>
<span data-i18n="opportunities">Opportunities</span>
</a>
<a className="nav-item" href="competitors.html">
<span>🏪</span>
<span data-i18n="competitors">Competitors</span>
</a>
<a className="nav-item" href="pricing.html">
<span>💰</span>
<span data-i18n="pricing">Pricing</span>
</a>
<a className="nav-item" href="financial.html">
<span>📊</span>
<span data-i18n="financials">Financials</span>
</a>
<a className="nav-item" href="risk.html">
<span>⚠</span>
<span data-i18n="risk">Risk</span>
</a>
<a className="nav-item" href="businessPlan.html">
<span>📄</span>
<span data-i18n="businessPlan">Business Plan</span>
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
<p className="welcome-small" data-i18n="goodDay">
                Good day 👋
            </p>
<h1 data-i18n="yourBusinessDashboard">
                Your Business Dashboard
            </h1>
</div>
<div className="dashboard-actions">

<select aria-label="Select Language" id="languageSelector">
<option value="en">
                    English
                </option>
<option value="hi">
                    हिन्दी
                </option>
</select>
<button className="new-analysis-btn" id="newAnalysisBtn">
<span data-i18n="newAnalysis">
                    + New Analysis
                </span>
</button>
</div>
</header>

<section className="business-summary">
<div>
<span className="summary-label" data-i18n="business">
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
<span className="summary-label" data-i18n="availableCapital">
                AVAILABLE CAPITAL
            </span>
<strong id="capitalAmount">
                ₹0
            </strong>
</div>
</section>

<section className="ai-insight">
<div className="insight-icon">
            ✦
        </div>
<div>
<span className="insight-label" data-i18n="aiInsight">
                AI INSIGHT
            </span>
<h3 data-i18n="promisingPotential">
                Your business has promising potential.
            </h3>
<p data-i18n="potentialDescription">
                Based on your location, business category
                and available capital, we've identified
                several areas where you can grow.
            </p>
</div>
</section>

<section className="section-heading">
<div>
<h2 data-i18n="financialOverview">
                Financial Overview
            </h2>
<p data-i18n="monthlyPerformance">
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
<span className="stat-label" data-i18n="monthlyRevenue">
                    EST. MONTHLY REVENUE
                </span>
<strong>
                    ₹42,500
                </strong>
<small data-i18n="localEstimates">
                    Based on local estimates
                </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                ↑
            </span>
<div>
<span className="stat-label" data-i18n="monthlyProfit">
                    EST. MONTHLY PROFIT
                </span>
<strong>
                    ₹16,800
                </strong>
<small data-i18n="profitMargin">
                    Approx. 39.5% margin
                </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                ↓
            </span>
<div>
<span className="stat-label" data-i18n="monthlyExpenses">
                    MONTHLY EXPENSES
                </span>
<strong>
                    ₹25,700
                </strong>
<small data-i18n="operatingCosts">
                    Estimated operating costs
                </small>
</div>
</div>
</div>

<section className="section-heading modules-heading">
<div>
<h2 data-i18n="businessAnalysis">
                Business Analysis
            </h2>
<p data-i18n="businessAnalysisDescription">
                Explore insights generated for your business
            </p>
</div>
</section>
<div className="modules-grid">
<a className="module-card" href="market.html">
<span className="module-icon">
                📍
            </span>
<div>
<h3 data-i18n="marketReach">
                    Market Reach
                </h3>
<p data-i18n="marketReachDescription">
                    Understand your local customer market.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</a>
<a className="module-card" href="opportunities.html">
<span className="module-icon">
                💡
            </span>
<div>
<h3 data-i18n="opportunities">
                    Opportunities
                </h3>
<p data-i18n="opportunitiesDescription">
                    Discover potential growth opportunities.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</a>
<a className="module-card" href="competitors.html">
<span className="module-icon">
                🏪
            </span>
<div>
<h3 data-i18n="competitors">
                    Competitors
                </h3>
<p data-i18n="competitorsDescription">
                    Explore your local competition.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</a>
<a className="module-card" href="pricing.html">
<span className="module-icon">
                💰
            </span>
<div>
<h3 data-i18n="pricing">
                    Pricing
                </h3>
<p data-i18n="pricingDescription">
                    Find practical pricing recommendations.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</a>
<a className="module-card" href="businessPlan.html">
<span className="module-icon">
                ◈
            </span>
<div>
<h3 data-i18n="swotAnalysis">
                    SWOT Analysis
                </h3>
<p data-i18n="swotDescription">
                    Understand your business strengths and risks.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</a>
<a className="module-card" href="risk.html">
<span className="module-icon">
                ⚠
            </span>
<div>
<h3 data-i18n="riskAnalysis">
                    Risk Analysis
                </h3>
<p data-i18n="riskDescription">
                    Identify and prepare for business risks.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</a>
</div>

<section className="section-heading modules-heading">
<div>
<h2 data-i18n="financialTools">
                Financial Tools
            </h2>
<p data-i18n="financialToolsDescription">
                Plan and manage your business finances
            </p>
</div>
</section>
<div className="financial-tools">
<a className="tool-card" href="financial-planner.html">
<span>📊</span>
<div>
<h3 data-i18n="financialPlanner">
                    Financial Planner
                </h3>
<p data-i18n="financialPlannerDescription">
                    Plan investments, costs and expected returns.
                </p>
</div>
<strong>→</strong>
</a>
<a className="tool-card" href="repayment-planner.html">
<span>💳</span>
<div>
<h3 data-i18n="repaymentPlanner">
                    Repayment Planner
                </h3>
<p data-i18n="repaymentPlannerDescription">
                    Estimate loan repayment and cash flow.
                </p>
</div>
<strong>→</strong>
</a>
<a className="tool-card" href="businessPlan.html">
<span>📄</span>
<div>
<h3 data-i18n="businessPlan">
                    Business Plan
                </h3>
<p data-i18n="businessPlanDescription">
                    Generate a structured business plan.
                </p>
</div>
<strong>→</strong>
</a>
</div>
</main>

      </>
    </LegacyPage>
  );
}
