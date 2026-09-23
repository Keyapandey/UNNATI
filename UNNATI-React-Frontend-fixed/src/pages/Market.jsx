import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Market() {
  return (
    <LegacyPage
      title="Market Reach | UNNATI"
      styles={["/css/dashboard.css", "/css/unnati-assistant.css"]}
      scripts={["market.js", "language.js", "profile-menu.js", "unnati-assistant.js"]}
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
<a className="nav-item active" href="market.html">
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
<p className="welcome-small" data-i18n="marketAnalysis">
                    MARKET ANALYSIS
                </p>
<h1 data-i18n="marketReachTitle">
                    Understand Your Local Market
                </h1>
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
</section>

<section className="section-heading">
<div>
<h2 data-i18n="marketArea">
                    Market Area
                </h2>
<p data-i18n="marketAreaDescription">
                    Explore the estimated customer reach around your business.
                </p>
</div>
</section>
<div className="stats-grid">
<div className="stat-card">
<span className="stat-icon">
                    📍
                </span>
<div>
<span className="stat-label" data-i18n="marketRadius">
                        MARKET RADIUS
                    </span>
<strong>
                        5 km
                    </strong>
<small data-i18n="primaryMarket">
                        Primary local market
                    </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                    👥
                </span>
<div>
<span className="stat-label" data-i18n="estimatedConsumers">
                        EST. CONSUMERS
                    </span>
<strong id="consumerCount">
                        0
                    </strong>
<small data-i18n="potentialCustomers">
                        Potential customers
                    </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                    🏠
                </span>
<div>
<span className="stat-label" data-i18n="estimatedHouseholds">
                        EST. HOUSEHOLDS
                    </span>
<strong id="householdCount">
                        0
                    </strong>
<small data-i18n="localHouseholds">
                        Nearby households
                    </small>
</div>
</div>
</div>

<section className="section-heading">
<div>
<h2 data-i18n="extendedMarket">
                    Extended Market
                </h2>
<p data-i18n="extendedMarketDescription">
                    A wider 10 km area can provide additional customers and demand.
                </p>
</div>
</section>
<div className="stats-grid">
<div className="stat-card">
<span className="stat-icon">
                    🗺️
                </span>
<div>
<span className="stat-label" data-i18n="extendedRadius">
                        MARKET RADIUS
                    </span>
<strong>
                        10 km
                    </strong>
<small data-i18n="extendedReach">
                        Extended market reach
                    </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                    📈
                </span>
<div>
<span className="stat-label" data-i18n="marketPotential">
                        MARKET POTENTIAL
                    </span>
<strong id="marketPotential">
                        High
                    </strong>
<small data-i18n="basedOnReach">
                        Based on estimated reach
                    </small>
</div>
</div>
</div>

<section className="section-heading">
<div>
<h2 data-i18n="targetCustomers">
                    Target Customers
                </h2>
<p data-i18n="targetCustomersDescription">
                    Customer groups you can focus on first.
                </p>
</div>
</section>
<div className="financial-tools">
<div className="tool-card">
<span>👨‍👩‍👧‍👦</span>
<div>
<h3 data-i18n="localFamilies">
                        Local Families
                    </h3>
<p data-i18n="localFamiliesDescription">
                        Nearby households looking for convenient local products and services.
                    </p>
</div>
</div>
<div className="tool-card">
<span>🛍️</span>
<div>
<h3 data-i18n="regularBuyers">
                        Regular Buyers
                    </h3>
<p data-i18n="regularBuyersDescription">
                        Customers who may purchase repeatedly from your business.
                    </p>
</div>
</div>
<div className="tool-card">
<span>🏪</span>
<div>
<h3 data-i18n="localBusinesses">
                        Local Businesses
                    </h3>
<p data-i18n="localBusinessesDescription">
                        Shops and nearby businesses that may become customers or partners.
                    </p>
</div>
</div>
</div>

<section className="section-heading">
<div>
<h2 data-i18n="distributionChannels">
                    Distribution Channels
                </h2>
<p data-i18n="distributionDescription">
                    Practical ways to reach customers in your area.
                </p>
</div>
</section>
<div className="financial-tools">
<div className="tool-card">
<span>🏠</span>
<div>
<h3 data-i18n="directSales">
                        Direct Sales
                    </h3>
<p data-i18n="directSalesDescription">
                        Sell directly from your shop or business location.
                    </p>
</div>
</div>
<div className="tool-card">
<span>🚚</span>
<div>
<h3 data-i18n="homeDelivery">
                        Home Delivery
                    </h3>
<p data-i18n="homeDeliveryDescription">
                        Deliver products directly to nearby customers.
                    </p>
</div>
</div>
<div className="tool-card">
<span>📱</span>
<div>
<h3 data-i18n="digitalOrders">
                        Digital Orders
                    </h3>
<p data-i18n="digitalOrdersDescription">
                        Accept orders through WhatsApp and other digital channels.
                    </p>
</div>
</div>
</div>
</main>

      </>
    </LegacyPage>
  );
}
