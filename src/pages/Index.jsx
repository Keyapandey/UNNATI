import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Index() {
  return (
    <LegacyPage
      title="UNNATI | Grow Your Business Smarter"
      styles={["/css/style.css"]}
      scripts={["script.js", "language.js"]}
    >
      <>

<div className="splash-screen" id="splashScreen">
<div className="splash-content">
<h1>UNNATI</h1>
<p>Know your market. Grow your business.</p>
</div>
</div>

<header className="navbar">
<a className="navbar-brand" href="index.html">
<img alt="Unnati logo" className="navbar-brand-logo" src="assets/unnati-logo.png" />
<div className="navbar-brand-copy">
<span>UNNATI</span>
<small>Know your market. Grow your business.</small>
</div>
</a>
<nav>
<a data-i18n="features" href="#features">Features</a>
<a data-i18n="about" href="#about">About</a>

<select aria-label="Select Language" id="languageSelector">
<option value="en">English</option>
<option value="hi">हिन्दी</option>
</select>
<button className="nav-btn" data-i18n="login" id="loginBtn">
        Login
    </button>
</nav>
</header>

<main className="hero">
<div className="hero-content">
<div className="badge" data-i18n="badge">
                ✨ AI-powered business guidance
            </div>
<h1>
<span data-i18n="heroTitle1">Turn your local idea into a </span>
<span data-i18n="heroTitle2">growing business.</span>
</h1>
<p data-i18n="heroDescription">
                UNNATI AI helps rural micro-entrepreneurs make smarter
                business decisions with personalized financial guidance,
                local market insights, and simple AI-powered advice.
            </p>
<div className="hero-buttons">
<button className="primary-btn" id="getStartedBtn">
<span data-i18n="getStarted">Get Started</span>
<span>→</span>
</button>
<button className="secondary-btn" data-i18n="learnMore" id="learnMoreBtn">
                    Learn More
                </button>
</div>
<div className="trust-text" data-i18n="trustText">
                🌾 Built for local businesses • 💡 Simple guidance • 📊 Smarter decisions
            </div>
</div>

<div className="hero-visual">
<div className="dashboard-card">
<div className="card-header">
<div>
<small data-i18n="businessOverview">BUSINESS OVERVIEW</small>
<h3 data-i18n="yourBusiness">Your Business</h3>
</div>
<div className="status" data-i18n="growing">
                        ● Growing
                    </div>
</div>
<div className="revenue">
<small data-i18n="estimatedRevenue">Estimated Monthly Revenue</small>
<h2>₹42,500</h2>
<span data-i18n="thisMonth">↗ 12.8% this month</span>
</div>
<div className="mini-stats">
<div>
<small data-i18n="profit">Profit</small>
<strong>₹16,800</strong>
</div>
<div>
<small data-i18n="expenses">Expenses</small>
<strong>₹25,700</strong>
</div>
</div>
<div className="insight">
<div className="insight-icon">💡</div>
<div>
<strong data-i18n="aiInsight">AI Insight</strong>
<p data-i18n="aiInsightText">
                            Your product demand is increasing.
                            Consider increasing stock this week.
                        </p>
</div>
</div>
</div>
</div>
</main>

<section className="features" id="features">
<div className="section-heading">
<span data-i18n="whatWeDo">WHAT UNNATI DOES</span>
<h2>
<span data-i18n="everythingYouNeed">Everything you need to</span>
<strong data-i18n="growSmarter">grow smarter.</strong>
</h2>
<p data-i18n="toolsDescription">
                Simple tools designed for real-world local businesses.
            </p>
</div>
<div className="feature-grid">
<div className="feature-card">
<div className="feature-icon">🤖</div>
<h3 data-i18n="aiAdvisor">AI Business Advisor</h3>
<p data-i18n="aiAdvisorDescription">
                    Get practical recommendations based on your
                    business, goals, and local conditions.
                </p>
</div>
<div className="feature-card">
<div className="feature-icon">💰</div>
<h3 data-i18n="financialPlanning">Financial Planning</h3>
<p data-i18n="financialPlanningDescription">
                    Understand revenue, expenses, profit,
                    pricing, and financial health.
                </p>
</div>
<div className="feature-card">
<div className="feature-icon">📍</div>
<h3 data-i18n="localInsights">Local Insights</h3>
<p data-i18n="localInsightsDescription">
                    Make decisions using information relevant
                    to your local market.
                </p>
</div>
<div className="feature-card">
<div className="feature-icon">📈</div>
<h3 data-i18n="businessGrowth">Business Growth</h3>
<p data-i18n="businessGrowthDescription">
                    Discover opportunities and actionable
                    steps to improve your business.
                </p>
</div>
</div>
</section>

<section className="about" id="about">
<div>
<span data-i18n="ourMission">OUR MISSION</span>
<h2>
<span data-i18n="betterDecisions">Better decisions.</span>
<br />
<span data-i18n="betterBusinesses">Better businesses.</span>
</h2>
</div>
<p data-i18n="missionDescription">
            UNNATI is designed to make business and financial
            guidance accessible to micro-entrepreneurs who may not
            have access to professional business advisors.
        </p>
</section>

<footer>
<div className="logo">
<img alt="Unnati logo" className="navbar-brand-logo" src="assets/unnati-logo.png" />
<span>UNNATI <strong></strong></span>
</div>
<p data-i18n="footer">© 2026 UNNATI. Building smarter local businesses.</p>
</footer>

      </>
    </LegacyPage>
  );
}
