import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Risk() {
  return (
    <LegacyPage
      title="Risk Analysis | UNNATI"
      styles={["/css/risk.css", "/css/unnati-assistant.css"]}
      scripts={["risk.js", "profile-menu.js", "unnati-assistant.js"]}
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
<span>Dashboard</span>
</a>
<a className="nav-item" href="market.html">
<span>📍</span>
<span>Market Reach</span>
</a>
<a className="nav-item" href="opportunities.html">
<span>💡</span>
<span>Opportunities</span>
</a>
<a className="nav-item" href="competitors.html">
<span>🏪</span>
<span>Competitors</span>
</a>
<a className="nav-item" href="pricing.html">
<span>💰</span>
<span>Pricing</span>
</a>
<a className="nav-item" href="financial.html">
<span>📊</span>
<span>Financials</span>
</a>
<a className="nav-item active" href="risk.html">
<span>⚠</span>
<span>Risk</span>
</a>
<a className="nav-item" href="businessPlan.html">
<span>📄</span>
<span>Business Plan</span>
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
<main className="risk-main">
<header className="risk-header">
<div>
<p className="page-label">BUSINESS SAFETY</p>
<h1>Risk Analysis</h1>
<p className="page-description">
                    Identify possible challenges and prepare your business for them.
                </p>
</div>
<button className="refresh-btn" id="refreshRiskBtn">
                ↻ Refresh Analysis
            </button>
</header>
<section className="risk-overview">
<div className="overview-icon">⚠</div>
<div>
<span className="overview-label">OVERALL RISK LEVEL</span>
<h2 id="riskLevel">Moderate Risk</h2>
<p id="riskSummary">
                    Your business has good potential. A few areas need attention to
                    protect your earnings and future growth.
                </p>
</div>
<div className="risk-score-box">
<span>Risk Score</span>
<strong id="riskScore">45<span>/100</span></strong>
</div>
</section>
<section className="section-heading">
<div>
<h2>Key Risk Areas</h2>
<p>Review the factors that could affect your business.</p>
</div>
</section>
<section className="risk-grid">
<article className="risk-card medium">
<div className="risk-card-top">
<span className="risk-icon">📉</span>
<span className="risk-badge">Medium</span>
</div>
<h3>Sales & Demand Risk</h3>
<p>
                    Customer demand may change because of season, local events,
                    or changing customer preferences.
                </p>
<div className="risk-action">
<strong>What to do</strong>
<p>Track weekly sales and keep stock based on demand.</p>
</div>
</article>
<article className="risk-card high">
<div className="risk-card-top">
<span className="risk-icon">💰</span>
<span className="risk-badge">High</span>
</div>
<h3>Cash Flow Risk</h3>
<p>
                    Unplanned costs or delayed customer payments can affect your
                    ability to buy stock and manage daily expenses.
                </p>
<div className="risk-action">
<strong>What to do</strong>
<p>Maintain an emergency fund and record every expense.</p>
</div>
</article>
<article className="risk-card medium">
<div className="risk-card-top">
<span className="risk-icon">🏪</span>
<span className="risk-badge">Medium</span>
</div>
<h3>Competition Risk</h3>
<p>
                    New or nearby businesses may offer similar products at lower
                    prices or with better service.
                </p>
<div className="risk-action">
<strong>What to do</strong>
<p>Focus on quality, customer service, and unique offers.</p>
</div>
</article>
<article className="risk-card low">
<div className="risk-card-top">
<span className="risk-icon">📦</span>
<span className="risk-badge">Low</span>
</div>
<h3>Supply Risk</h3>
<p>
                    Supplier delays or rising material prices can increase costs
                    and interrupt your business operations.
                </p>
<div className="risk-action">
<strong>What to do</strong>
<p>Keep contact with more than one supplier when possible.</p>
</div>
</article>
</section>
<section className="section-heading">
<div>
<h2>Risk Prevention Checklist</h2>
<p>Small actions today can protect your business tomorrow.</p>
</div>
</section>
<section className="checklist-card">
<label className="checklist-item">
<input type="checkbox" />
<span>Keep a record of daily sales and expenses.</span>
</label>
<label className="checklist-item">
<input type="checkbox" />
<span>Set aside money for unexpected business costs.</span>
</label>
<label className="checklist-item">
<input type="checkbox" />
<span>Compare prices and stock availability from multiple suppliers.</span>
</label>
<label className="checklist-item">
<input type="checkbox" />
<span>Review your sales and customer feedback every month.</span>
</label>
</section>
</main>

      </>
    </LegacyPage>
  );
}
