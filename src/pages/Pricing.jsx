import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Pricing() {
  return (
    <LegacyPage
      title="Pricing | UNNATI"
      styles={["/css/dashboard.css", "/css/pricing.css", "/css/unnati-assistant.css"]}
      scripts={["pricing.js", "profile-menu.js", "unnati-assistant.js"]}
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
<a className="nav-item active" href="pricing.html">
<span>💰</span>
            Pricing
        </a>
<a className="nav-item" href="financial.html">
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
                Business Analysis
            </p>
<h1>
                Pricing Analysis
            </h1>
</div>
<a className="new-analysis-btn pricing-back-btn" href="dashboard.html">
            ← Dashboard
        </a>
</header>

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
                PRICING STATUS
            </span>
<strong>
                AI Analysis
            </strong>
</div>
</section>

<section className="ai-insight">
<div className="insight-icon">
            ✦
        </div>
<div>
<span className="insight-label">
                AI PRICING INSIGHT
            </span>
<h3>
                Your current pricing has room for improvement.
            </h3>
<p>
                UNNATI recommends comparing local competitor
                prices, customer demand and operating costs before
                setting your final selling price.
            </p>
</div>
</section>

<section className="section-heading">
<div>
<h2>
                Pricing Snapshot
            </h2>
<p>
                Sample market-based pricing estimates
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
                    YOUR PRICE
                </span>
<strong>
                    ₹120
                </strong>
<small>
                    Current estimate
                </small>
</div>
</div>

<div className="stat-card">
<span className="stat-icon">
                ≈
            </span>
<div>
<span className="stat-label">
                    LOCAL AVERAGE
                </span>
<strong>
                    ₹125
                </strong>
<small>
                    Nearby businesses
                </small>
</div>
</div>

<div className="stat-card">
<span className="stat-icon">
                ↑
            </span>
<div>
<span className="stat-label">
                    SUGGESTED PRICE
                </span>
<strong>
                    ₹130
                </strong>
<small>
                    AI estimate
                </small>
</div>
</div>

<div className="stat-card">
<span className="stat-icon">
                %
            </span>
<div>
<span className="stat-label">
                    POTENTIAL MARGIN
                </span>
<strong>
                    18%
                </strong>
<small>
                    Estimated improvement
                </small>
</div>
</div>
</div>

<section className="section-heading pricing-factors-heading">
<div>
<h2>
                Pricing Factors
            </h2>
<p>
                Key factors affecting your selling price
            </p>
</div>
</section>
<div className="modules-grid">

<div className="module-card">
<span className="module-icon">
                🏷️
            </span>
<div>
<h3>
                    Market Price
                </h3>
<p>
                    Your price is slightly below the estimated
                    local market average.
                </p>
<span className="status-badge">
                    Competitive
                </span>
</div>
</div>

<div className="module-card">
<span className="module-icon">
                📦
            </span>
<div>
<h3>
                    Production Cost
                </h3>
<p>
                    Understanding your cost per unit can help
                    protect your profit margin.
                </p>
<span className="status-badge">
                    Needs Review
                </span>
</div>
</div>

<div className="module-card">
<span className="module-icon">
                👨‍👩‍👧
            </span>
<div>
<h3>
                    Customer Demand
                </h3>
<p>
                    Higher demand may allow a moderate price
                    increase without reducing sales significantly.
                </p>
<span className="status-badge">
                    Positive
                </span>
</div>
</div>
</div>

<section className="section-heading pricing-recommendation-heading">
<div>
<h2>
                Recommended Pricing Strategy
            </h2>
<p>
                Practical guidance based on your current business information
            </p>
</div>
</section>
<section className="ai-insight pricing-recommendation">
<div className="insight-icon">
            💰
        </div>
<div>
<span className="insight-label">
                RECOMMENDATION
            </span>
<h3>
                Consider gradually moving toward ₹130.
            </h3>
<p>
                Test the suggested price with a small number of customers
                first. Monitor sales volume, customer response and profit
                margin before making a permanent change.
            </p>
</div>
</section>
</main>

      </>
    </LegacyPage>
  );
}
