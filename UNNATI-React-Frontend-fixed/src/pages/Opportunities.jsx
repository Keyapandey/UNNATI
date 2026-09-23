import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Opportunities() {
  return (
    <LegacyPage
      title="Opportunities | UNNATI"
      styles={["/css/dashboard.css", "/css/unnati-assistant.css"]}
      scripts={["opportunities.js", "language.js", "profile-menu.js", "unnati-assistant.js"]}
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
<span data-i18n="dashboard">Dashboard</span>
</a>
<a className="nav-item" href="market.html">
<span>📍</span>
<span data-i18n="marketReach">Market Reach</span>
</a>
<a className="nav-item active" href="opportunities.html">
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
<p className="welcome-small" data-i18n="growthIntelligence">
                Growth Intelligence
            </p>
<h1 data-i18n="businessOpportunities">
                Business Opportunities
            </h1>
</div>
<a className="new-analysis-btn" data-i18n="backToDashboard" href="dashboard.html">
            ← Dashboard
        </a>
</header>

<section className="business-summary">
<div>
<span className="summary-label" data-i18n="yourBusiness">
                YOUR BUSINESS
            </span>
<h2 id="businessName">
                Your Business
            </h2>
<p id="businessLocation">
                Your Location
            </p>
</div>
<div className="summary-capital">
<span className="summary-label" data-i18n="opportunitiesFound">
                OPPORTUNITIES FOUND
            </span>
<strong>
                4
            </strong>
</div>
</section>

<section className="ai-insight">
<div className="insight-icon">
            ✦
        </div>
<div>
<span className="insight-label" data-i18n="aiGrowthInsight">
                AI GROWTH INSIGHT
            </span>
<h3 data-i18n="growthInsightTitle">
                Focus on opportunities that fit your current resources.
            </h3>
<p data-i18n="growthInsightDescription">
                Starting with practical, low-investment opportunities
                can help you grow without putting unnecessary pressure
                on your available capital.
            </p>
</div>
</section>

<section className="section-heading">
<h2 data-i18n="recommendedOpportunities">
            Recommended Opportunities
        </h2>
<p data-i18n="recommendedOpportunitiesDescription">
            Potential ways to expand your business
        </p>
</section>
<div className="modules-grid">
<div className="module-card">
<span className="module-icon">
                ⭐
            </span>
<div>
<h3 data-i18n="localHomeDelivery">
                    Local Home Delivery
                </h3>
<p data-i18n="localHomeDeliveryDescription">
                    Reach customers in nearby villages
                    through simple delivery services.
                </p>
</div>
</div>
<div className="module-card">
<span className="module-icon">
                📦
            </span>
<div>
<h3 data-i18n="productBundles">
                    Product Bundles
                </h3>
<p data-i18n="productBundlesDescription">
                    Create affordable product combinations
                    to increase average customer spending.
                </p>
</div>
</div>
<div className="module-card">
<span className="module-icon">
                📱
            </span>
<div>
<h3 data-i18n="digitalPromotion">
                    Digital Promotion
                </h3>
<p data-i18n="digitalPromotionDescription">
                    Use WhatsApp and local social networks
                    to attract nearby customers.
                </p>
</div>
</div>
<div className="module-card">
<span className="module-icon">
                🤝
            </span>
<div>
<h3 data-i18n="localPartnerships">
                    Local Partnerships
                </h3>
<p data-i18n="localPartnershipsDescription">
                    Partner with nearby shops and suppliers
                    to increase your reach.
                </p>
</div>
</div>
<div className="module-card">
<span className="module-icon">
                🚚
            </span>
<div>
<h3 data-i18n="nearbyMarketExpansion">
                    Nearby Market Expansion
                </h3>
<p data-i18n="nearbyMarketExpansionDescription">
                    Gradually expand sales into nearby
                    villages and local markets.
                </p>
</div>
</div>
<div className="module-card">
<span className="module-icon">
                💳
            </span>
<div>
<h3 data-i18n="repeatCustomerProgram">
                    Repeat Customer Program
                </h3>
<p data-i18n="repeatCustomerProgramDescription">
                    Encourage regular customers through
                    simple loyalty offers.
                </p>
</div>
</div>
</div>
</main>

      </>
    </LegacyPage>
  );
}
