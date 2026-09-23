import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Businessplan() {
  return (
    <LegacyPage
      title="Business Plan | UNNATI"
      styles={["/css/businessPlan.css", "/css/unnati-assistant.css"]}
      scripts={["businessPlan.js", "profile-menu.js", "unnati-assistant.js"]}
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
<a className="nav-item" href="risk.html">
<span>⚠</span>
<span>Risk</span>
</a>
<a className="nav-item active" href="businessPlan.html">
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
<main className="business-plan-main">
<header className="plan-header">
<div>
<p className="page-label">AI-GENERATED GUIDE</p>
<h1>Business Plan</h1>
<p className="page-description">
                    A simple, practical plan to help you launch and grow your business.
                </p>
</div>
<button className="download-btn" id="printPlanBtn">
                ⎙ Print Plan
            </button>
</header>
<section className="plan-summary">
<div className="summary-icon">📄</div>
<div>
<span className="summary-label">YOUR BUSINESS PLAN</span>
<h2 id="planBusinessName">Your Business</h2>
<p id="planLocation">Your location will appear here</p>
</div>
<div className="plan-capital">
<span>AVAILABLE CAPITAL</span>
<strong id="planCapital">₹0</strong>
</div>
</section>
<section className="plan-intro">
<div className="intro-icon">✦</div>
<div>
<span className="intro-label">AI RECOMMENDATION</span>
<h3>Start small, learn quickly, and grow steadily.</h3>
<p id="planRecommendation">
                    Focus on understanding your customers, controlling costs, and
                    building trust through reliable service.
                </p>
</div>
</section>
<section className="section-heading">
<div>
<h2>Your Business Plan</h2>
<p>Use these sections as your guide for building a strong business.</p>
</div>
</section>
<section className="plan-grid">
<article className="plan-card">
<div className="card-header">
<span className="plan-icon">🎯</span>
<div>
<span className="card-number">01</span>
<h3>Business Goal</h3>
</div>
</div>
<p>
                    Build a reliable business that solves a local customer need and
                    earns steady monthly profit.
                </p>
<div className="plan-tip">
<strong>Focus:</strong> Start with a small number of products or services.
                </div>
</article>
<article className="plan-card">
<div className="card-header">
<span className="plan-icon">👥</span>
<div>
<span className="card-number">02</span>
<h3>Target Customers</h3>
</div>
</div>
<p>
                    Focus on customers near your location who need affordable,
                    useful products and dependable service.
                </p>
<div className="plan-tip">
<strong>Focus:</strong> Ask customers what they need before buying stock.
                </div>
</article>
<article className="plan-card">
<div className="card-header">
<span className="plan-icon">🛍️</span>
<div>
<span className="card-number">03</span>
<h3>Products & Services</h3>
</div>
</div>
<p>
                    Offer quality products or services that match local demand,
                    your budget, and your business skills.
                </p>
<div className="plan-tip">
<strong>Focus:</strong> Keep your best-selling items available.
                </div>
</article>
<article className="plan-card">
<div className="card-header">
<span className="plan-icon">📣</span>
<div>
<span className="card-number">04</span>
<h3>Marketing Plan</h3>
</div>
</div>
<p>
                    Tell people about your business through word of mouth,
                    WhatsApp, local groups, and good customer service.
                </p>
<div className="plan-tip">
<strong>Focus:</strong> Give every customer a reason to return.
                </div>
</article>
<article className="plan-card">
<div className="card-header">
<span className="plan-icon">💰</span>
<div>
<span className="card-number">05</span>
<h3>Financial Plan</h3>
</div>
</div>
<p>
                    Use your capital carefully for stock, equipment, and essential
                    expenses. Record every sale and expense daily.
                </p>
<div className="plan-tip">
<strong>Focus:</strong> Save a small part of profit for emergencies.
                </div>
</article>
<article className="plan-card">
<div className="card-header">
<span className="plan-icon">📈</span>
<div>
<span className="card-number">06</span>
<h3>Growth Plan</h3>
</div>
</div>
<p>
                    Review sales each month, improve what customers like, and add
                    new products only when demand is proven.
                </p>
<div className="plan-tip">
<strong>Focus:</strong> Reinvest profit gradually to grow safely.
                </div>
</article>
</section>
<section className="section-heading">
<div>
<h2>First 30 Days Action Plan</h2>
<p>Follow these simple steps to begin with confidence.</p>
</div>
</section>
<section className="action-plan-card">
<div className="action-step">
<span>1</span>
<div>
<h3>Week 1: Understand your market</h3>
<p>Talk to potential customers and identify the most needed products or services.</p>
</div>
</div>
<div className="action-step">
<span>2</span>
<div>
<h3>Week 2: Set up your business</h3>
<p>Buy essential stock or equipment and decide simple, fair prices.</p>
</div>
</div>
<div className="action-step">
<span>3</span>
<div>
<h3>Week 3: Start selling</h3>
<p>Promote your business locally and give customers a positive experience.</p>
</div>
</div>
<div className="action-step">
<span>4</span>
<div>
<h3>Week 4: Review and improve</h3>
<p>Check sales, expenses, and customer feedback before planning the next month.</p>
</div>
</div>
</section>
</main>

      </>
    </LegacyPage>
  );
}
