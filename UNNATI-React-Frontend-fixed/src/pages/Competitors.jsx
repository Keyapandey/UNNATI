import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Competitors() {
  return (
    <LegacyPage
      title="Competitors | UNNATI"
      styles={["/css/dashboard.css", "/css/unnati-assistant.css"]}
      scripts={["competitors.js", "profile-menu.js", "unnati-assistant.js"]}
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
<a className="nav-item active" href="competitors.html">
<span>🏪</span>
            Competitors
        </a>
<a className="nav-item" href="pricing.html">
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
                Market Intelligence
            </p>
<h1>
                Competitor Analysis
            </h1>
</div>
<a className="new-analysis-btn" href="dashboard.html">
            ← Dashboard
        </a>
</header>

<section className="business-summary">
<div>
<span className="summary-label">
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
<span className="summary-label">
                LOCAL COMPETITORS
            </span>
<strong>
                6+
            </strong>
</div>
</section>

<section className="ai-insight">
<div className="insight-icon">
            ✦
        </div>
<div>
<span className="insight-label">
                AI COMPETITION INSIGHT
            </span>
<h3>
                Competition creates an opportunity to differentiate.
            </h3>
<p>
                Focus on better service, convenient availability
                and competitive pricing rather than competing
                only on price.
            </p>
</div>
</section>

<section className="section-heading">
<h2>
            Local Competitor Snapshot
        </h2>
<p>
            Example competitor information for your market
        </p>
</section>
<div className="modules-grid">
<div className="module-card">
<span className="module-icon">
                🏪
            </span>
<div>
<h3>
                    Local Shop A
                </h3>
<p>
                    Established local business with regular customers.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</div>
<div className="module-card">
<span className="module-icon">
                🏪
            </span>
<div>
<h3>
                    Local Shop B
                </h3>
<p>
                    Competes mainly through affordable pricing.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</div>
<div className="module-card">
<span className="module-icon">
                🏪
            </span>
<div>
<h3>
                    Local Shop C
                </h3>
<p>
                    Strong customer relationships in nearby areas.
                </p>
</div>
<span className="module-arrow">
                →
            </span>
</div>
</div>

<section className="section-heading modules-heading">
<h2>
            Competition Factors
        </h2>
<p>
            Areas to consider when positioning your business
        </p>
</section>
<div className="stats-grid">
<div className="stat-card">
<span className="stat-icon">
                ₹
            </span>
<div>
<span className="stat-label">
                    PRICE
                </span>
<strong>
                    Competitive
                </strong>
<small>
                    Keep pricing close to the local market
                </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                ⭐
            </span>
<div>
<span className="stat-label">
                    SERVICE
                </span>
<strong>
                    Opportunity
                </strong>
<small>
                    Better service can differentiate you
                </small>
</div>
</div>
<div className="stat-card">
<span className="stat-icon">
                📍
            </span>
<div>
<span className="stat-label">
                    LOCATION
                </span>
<strong>
                    Advantage
                </strong>
<small>
                    Convenience can attract nearby customers
                </small>
</div>
</div>
</div>
</main>

      </>
    </LegacyPage>
  );
}
