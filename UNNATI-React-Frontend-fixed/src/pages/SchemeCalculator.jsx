import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function SchemeCalculator() {
  return (
    <LegacyPage
      title="Smart Scheme Calculator | UNNATI"
      styles={["/css/dashboard.css", "/css/scheme-calculator.css", "/css/unnati-assistant.css"]}
      scripts={["scheme-calculator.js", "unnati-assistant.js"]}
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
<a className="nav-item active" href="./financial.html">
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
                Financial Management
            </p>
<h1>
                Smart Scheme Calculator
            </h1>
</div>
<a className="new-analysis-btn" href="financial.html">
            ← Financial Overview
        </a>
</header>

<div className="financial-tabs">
<a className="financial-tab" href="financial.html">
<span>◈</span>
            Financial Overview
        </a>
<a className="financial-tab active" href="scheme-calculator.html">
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

<section className="scheme-intro">
<div className="scheme-intro-icon">
            🧮
        </div>
<div>
<span className="insight-label">
                SMART SCHEME ROUTER
            </span>
<h2>
                Find financial schemes suited to your business.
            </h2>
<p>
                Enter a few basic business and funding details.
                UNNATI will use these inputs to compare
                suitable government-backed schemes.
            </p>
</div>
</section>

<div className="scheme-layout">

<section className="scheme-input-card">
<div className="card-title">
<div>
<h2>
                        Business & Funding Details
                    </h2>
<p>
                        Tell us what you need funding for.
                    </p>
</div>
<span className="step-badge">
                    STEP 1
                </span>
</div>

<div className="form-group">
<label>
                    Business Activity
                </label>
<select id="businessType">
<option value="">
                        Select business activity
                    </option>
<option value="dairy">
                        Dairy / Milk Business
                    </option>
<option value="food">
                        Food Processing
                    </option>
<option value="agriculture">
                        Agriculture / Agri Allied
                    </option>
<option value="retail">
                        Retail / Shop
                    </option>
<option value="service">
                        Service Business
                    </option>
<option value="manufacturing">
                        Manufacturing
                    </option>
<option value="artisan">
                        Traditional Artisan / Craft
                    </option>
</select>
</div>

<div className="form-group">
<label>
                    Business Status
                </label>
<div className="choice-grid">
<label className="choice-card">
<input checked={true} name="businessStatus" type="radio" value="new" />
<span>
<strong>
                                New Business
                            </strong>
<small>
                                Starting a new venture
                            </small>
</span>
</label>
<label className="choice-card">
<input name="businessStatus" type="radio" value="existing" />
<span>
<strong>
                                Existing Business
                            </strong>
<small>
                                Already operating
                            </small>
</span>
</label>
</div>
</div>

<div className="form-group">
<label>
                    Estimated Project Cost
                </label>
<div className="input-with-prefix">
<span>
                        ₹
                    </span>
<input id="projectCost" min="0" placeholder="Example: 500000" type="number" />
</div>
<small className="field-help">
                    Approximate total investment required for the business.
                </small>
</div>

<div className="form-group">
<label>
                    Your Own Contribution
                </label>
<div className="input-with-prefix">
<span>
                        ₹
                    </span>
<input id="ownContribution" min="0" placeholder="Example: 100000" type="number" />
</div>
<small className="field-help">
                    Amount you can contribute from your own resources.
                </small>
</div>

<div className="funding-preview">
<div>
<span>
                        Estimated Funding Required
                    </span>
<small>
                        Project cost − own contribution
                    </small>
</div>
<strong id="fundingRequired">
                    ₹0
                </strong>
</div>

<button className="calculate-btn" id="calculateSchemeBtn">

                Find Suitable Schemes
                <span>→</span>
</button>
</section>

<section className="router-card">
<div className="card-title">
<div>
<h2>
                        Scheme Router
                    </h2>
<p>
                        Your potential scheme matches
                    </p>
</div>
<span className="router-status">
                    Ready
                </span>
</div>

<div className="router-empty" id="routerEmpty">
<div className="empty-icon">
                    🎯
                </div>
<h3>
                    Let's find your best match
                </h3>
<p>
                    Enter your business details on the left
                    and click <strong>Find Suitable Schemes</strong>.
                </p>
</div>

<div className="router-results" id="routerResults">

<div className="best-match-card">
<div className="match-top">
<span className="match-label">
                            ⭐ BEST MATCH
                        </span>
<span className="match-score" id="matchScore">
                            92%
                        </span>
</div>
<h3 id="bestSchemeName">
                        PM MUDRA Yojana
                    </h3>
<p id="bestSchemeDescription">
                        Suitable financing support for eligible
                        micro enterprises.
                    </p>
<div className="match-tags">
<span id="bestLoanAmount">
                            Up to ₹20 lakh
                        </span>
<span id="bestInterest">
                            Interest varies by lender
                        </span>
</div>
<button className="view-scheme-btn" id="viewBestScheme">
                        View Scheme Details →
                    </button>
</div>

<div className="other-matches">
<div className="matches-heading">
<h3>
                            Other Potential Matches
                        </h3>
<span>
                            Based on your inputs
                        </span>
</div>
<div className="scheme-mini-list" id="schemeMiniList">
<div className="scheme-mini-card">
<div className="mini-icon">
                                🏦
                            </div>
<div>
<strong>
                                    PMEGP
                                </strong>
<span>
                                    New micro-enterprise
                                </span>
</div>
<b>
                                78%
                            </b>
</div>
<div className="scheme-mini-card">
<div className="mini-icon">
                                🌾
                            </div>
<div>
<strong>
                                    AIF
                                </strong>
<span>
                                    Agriculture infrastructure
                                </span>
</div>
<b>
                                64%
                            </b>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="comparison-section" id="comparisonSection">
<div className="section-heading">
<div>
<h2>
                    Scheme Comparison
                </h2>
<p>
                    Compare important financial features at a glance.
                </p>
</div>
</div>
<div className="comparison-table-wrapper">
<table className="comparison-table">
<thead>
<tr>
<th>
                            Scheme
                        </th>
<th>
                            Support
                        </th>
<th>
                            Interest
                        </th>
<th>
                            Tenure
                        </th>
<th>
                            Key Benefit
                        </th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>
                                PM MUDRA
                            </strong>
</td>
<td>
                            ₹50,000 – ₹20 lakh
                        </td>
<td>
                            Lender dependent
                        </td>
<td>
                            Up to ~5 years*
                        </td>
<td>
                            Micro-business financing
                        </td>
</tr>
<tr>
<td>
<strong>
                                PMEGP
                            </strong>
</td>
<td>
                            Project-based
                        </td>
<td>
                            Normal bank rate
                        </td>
<td>
                            3–7 years
                        </td>
<td>
                            New micro-enterprise support
                        </td>
</tr>
<tr>
<td>
<strong>
                                PM Vishwakarma
                            </strong>
</td>
<td>
                            Up to ₹3 lakh
                        </td>
<td>
                            5% concessional
                        </td>
<td>
                            18 + 30 months
                        </td>
<td>
                            Traditional artisan support
                        </td>
</tr>
<tr>
<td>
<strong>
                                PMFME
                            </strong>
</td>
<td>
                            35% subsidy
                        </td>
<td>
                            Bank rate
                        </td>
<td>
                            Project dependent
                        </td>
<td>
                            Food-processing subsidy
                        </td>
</tr>
<tr>
<td>
<strong>
                                AIF
                            </strong>
</td>
<td>
                            3% interest subvention
                        </td>
<td>
                            Effective rate benefit
                        </td>
<td>
                            Generally up to 7 years
                        </td>
<td>
                            Agri infrastructure
                        </td>
</tr>
</tbody>
</table>
</div>
<p className="table-note">
            *Displayed values are indicative frontend reference values.
            Final eligibility, sanction, interest rate and terms depend
            on current scheme guidelines and lender/authority assessment.
        </p>
</section>

<section className="scheme-detail-card" id="schemeDetailCard">
<div className="detail-header">
<div>
<span className="insight-label">
                    SELECTED SCHEME
                </span>
<h2 id="detailSchemeName">
                    PM MUDRA Yojana
                </h2>
</div>
<span className="recommended-badge">
                Recommended
            </span>
</div>
<div className="detail-grid">
<div className="detail-item">
<span>
                    Financial Support
                </span>
<strong id="detailSupport">
                    Up to ₹20 lakh
                </strong>
</div>
<div className="detail-item">
<span>
                    Interest
                </span>
<strong id="detailInterest">
                    Lender dependent
                </strong>
</div>
<div className="detail-item">
<span>
                    Tenure
                </span>
<strong id="detailTenure">
                    Up to ~5 years
                </strong>
</div>
<div className="detail-item">
<span>
                    Moratorium
                </span>
<strong>
                    As per lender
                </strong>
</div>
</div>
<div className="detail-benefit">
<span>
                Why this scheme may fit
            </span>
<p id="detailReason">

                The scheme supports eligible micro enterprises
                across manufacturing, trading, services and
                agriculture-allied activities.

            </p>
</div>
<div className="calculator-preview">
<div>
<span>
                    Estimated Funding Requirement
                </span>
<strong id="detailFunding">
                    ₹0
                </strong>
</div>
<div>
<span>
                    Potential Scheme Support
                </span>
<strong id="detailPotential">
                    To be assessed
                </strong>
</div>
</div>
</section>

<section className="scheme-extra-section" id="eligibilitySection">
<div className="section-heading">
<div>
<span className="section-label">SMART ELIGIBILITY</span>
<h2>Preliminary Eligibility Check</h2>
<p>
                A quick scheme-fit check based on the business and funding
                information you entered.
            </p>
</div>
</div>
<div className="eligibility-card">

<div className="eligibility-status">
<div className="status-icon" id="eligibilityIcon">
                ✓
            </div>
<div>
<span className="status-label">SCHEME FIT</span>
<h3 id="eligibilityTitle">Likely Match</h3>
<p id="eligibilityMessage">
                    Your business details appear suitable for the selected
                    scheme. Final eligibility will require official verification.
                </p>
</div>
</div>

<div className="eligibility-checklist">
<div className="check-item">
<div className="check-symbol">✓</div>
<div>
<strong>Business Activity</strong>
<span id="eligibilityActivity">
                        Based on your selected activity
                    </span>
</div>
</div>
<div className="check-item">
<div className="check-symbol">✓</div>
<div>
<strong>Business Status</strong>
<span id="eligibilityStatusText">
                        Based on new/existing business selection
                    </span>
</div>
</div>
<div className="check-item">
<div className="check-symbol">✓</div>
<div>
<strong>Project Cost</strong>
<span id="eligibilityProjectCost">
                        Project cost entered by user
                    </span>
</div>
</div>
<div className="check-item">
<div className="check-symbol">✓</div>
<div>
<strong>Funding Requirement</strong>
<span id="eligibilityFunding">
                        Funding requirement calculated automatically
                    </span>
</div>
</div>
</div>
<div className="eligibility-note">
<strong>Important:</strong>
            This is a preliminary scheme-fit assessment for guidance only.
            Actual eligibility, subsidy, loan amount, interest rate and
            approval depend on the applicable scheme rules and the
            implementing bank/agency.
        </div>
</div>
</section>

<section className="scheme-extra-section" id="whySchemeSection">
<div className="section-heading">
<div>
<span className="section-label">SMART RECOMMENDATION</span>
<h2>Why This Scheme?</h2>
<p>
                Understand why this scheme was recommended for your business.
            </p>
</div>
</div>
<div className="why-scheme-card">
<div className="why-scheme-header">
<div className="scheme-big-icon" id="whySchemeIcon">
                🏦
            </div>
<div>
<span className="status-label">RECOMMENDED SCHEME</span>
<h3 id="whySchemeName">
                    PM MUDRA Yojana
                </h3>
<span className="scheme-match-badge" id="whySchemeScore">
                    92% Match
                </span>
</div>
</div>
<div className="why-scheme-content">
<div className="why-main-reason">
<h4>Why it matches your business</h4>
<p id="whySchemeReason">
                    This scheme can fit many small businesses that need
                    financing for working capital, equipment or expansion.
                </p>
</div>
<div className="scheme-highlights">
<div className="highlight-item">
<span className="highlight-label">
                        Funding Support
                    </span>
<strong id="whySchemeAmount">
                        —
                    </strong>
</div>
<div className="highlight-item">
<span className="highlight-label">
                        Interest
                    </span>
<strong id="whySchemeInterest">
                        —
                    </strong>
</div>
<div className="highlight-item">
<span className="highlight-label">
                        Typical Tenure
                    </span>
<strong id="whySchemeTenure">
                        —
                    </strong>
</div>
</div>
</div>
</div>
</section>

<section className="scheme-extra-section" id="documentsSection">
<div className="section-heading">
<div>
<span className="section-label">
                DOCUMENT CHECKLIST
            </span>
<h2>Typical Required Documents</h2>
<p>
                Keep these documents ready before approaching the
                implementing bank or agency.
            </p>
</div>
</div>
<div className="documents-card">
<div className="documents-header">
<div className="documents-icon">
                📄
            </div>
<div>
<h3 id="documentsSchemeName">
                    Scheme Documents
                </h3>
<p>
                    Typical documents that may be requested.
                </p>
</div>
</div>
<div className="documents-grid" id="documentsList">
<div className="document-item">
<span className="document-check">✓</span>
<div>
<strong>Identity Proof</strong>
<span>Aadhaar / other accepted ID</span>
</div>
</div>
<div className="document-item">
<span className="document-check">✓</span>
<div>
<strong>PAN / Financial Documents</strong>
<span>As applicable to the application</span>
</div>
</div>
<div className="document-item">
<span className="document-check">✓</span>
<div>
<strong>Bank Account Details</strong>
<span>Applicant's banking information</span>
</div>
</div>
<div className="document-item">
<span className="document-check">✓</span>
<div>
<strong>Project Details</strong>
<span>Project report, cost estimates or quotations</span>
</div>
</div>
</div>
<div className="documents-note">
<strong>Note:</strong>
            These are typical document categories for guidance.
            Final document requirements may vary by scheme, bank,
            applicant category and project type.

        </div>
</div>
</section>
</main>

      </>
    </LegacyPage>
  );
}
