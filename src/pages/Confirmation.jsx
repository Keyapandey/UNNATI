import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Confirmation() {
  return (
    <LegacyPage
      title="Review | UNNATI"
      styles={["/css/setup.css"]}
      scripts={["confirmation.js", "language.js"]}
    >
      <>

<header className="setup-header">
<a className="setup-brand" href="index.html">
<img alt="Unnati logo" className="setup-brand-logo" src="assets/unnati-logo.png" />
<div className="setup-brand-text">
<span>UNNATI</span>
<small>Know your market. Grow your business.</small>
</div>
</a>
<div className="step-text" data-i18n="finalReview">
            Final Review
        </div>
</header>
<main className="setup-container">

<div className="progress-area">
<div className="progress-step completed">
<span>✓</span>
<span data-i18n="location">Location</span>
</div>
<div className="progress-line completed-line"></div>
<div className="progress-step completed">
<span>✓</span>
<span data-i18n="business">Business</span>
</div>
<div className="progress-line completed-line"></div>
<div className="progress-step completed">
<span>✓</span>
<span data-i18n="capital">Capital</span>
</div>
</div>

<section className="setup-card confirmation-card">
<div className="setup-title">
<div>
<h1 data-i18n="reviewTitle">
                        Review your details
                    </h1>
<p data-i18n="reviewDescription">
                        Make sure everything looks correct
                        before we start your AI analysis.
                    </p>
</div>
</div>

<div className="review-section">
<div className="review-heading">
<span>📍</span>
<strong data-i18n="location">
                        Location
                    </strong>
</div>
<div className="review-value" id="locationValue">
                    Loading...
                </div>
</div>

<div className="review-section">
<div className="review-heading">
<span>🏪</span>
<strong data-i18n="business">
                        Business
                    </strong>
</div>
<div className="review-value" id="businessValue">
                    Loading...
                </div>
</div>

<div className="review-section">
<div className="review-heading">
<span>💰</span>
<strong data-i18n="availableCapital">
                        Available Capital
                    </strong>
</div>
<div className="review-value capital-value" id="capitalValue">
                    Loading...
                </div>
</div>

<div className="confirmation-actions">
<button aria-label="Go Back" className="back-button" id="reviewBackBtn" type="button">
                    ←
                </button>
<button className="continue-btn" data-i18n="startAIAnalysis" id="startAnalysisBtn" type="button">
                    Start AI Analysis →
                </button>
</div>
</section>
<p className="privacy-note" data-i18n="privacyNote">
            🔒 Your information is used only to
            personalize your business analysis.
        </p>
</main>

      </>
    </LegacyPage>
  );
}
