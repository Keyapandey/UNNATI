import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Capital() {
  return (
    <LegacyPage
      title="Capital | UNNATI"
      styles={["/css/setup.css"]}
      scripts={["capital.js", "language.js"]}
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
<div className="step-text" data-i18n="step3of3">
            Step 3 of 3
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
<div className="progress-step active">
<span>3</span>
<span data-i18n="capital">Capital</span>
</div>
</div>

<section className="setup-card">
<div className="setup-title">
<button className="back-button" id="capitalBackBtn" type="button">
                    ←
                </button>
<div>
<h1 data-i18n="capitalTitle">
                        How much can you invest?
                    </h1>
<p data-i18n="capitalDescription">
                        Tell us your available starting capital.
                        We'll use this to build a realistic plan.
                    </p>
</div>
</div>
<form id="capitalForm">
<div className="capital-input">
<span>₹</span>
<input data-i18n-placeholder="capitalPlaceholder" id="capital" min="1" placeholder="50,000" required={true} type="number" />
</div>
<p className="input-help" data-i18n="capitalHelp">
                    Enter the amount you can realistically invest
                    in starting or expanding your business.
                </p>
<div className="capital-options">
<button data-amount="25000" type="button">
                        ₹25,000
                    </button>
<button data-amount="50000" type="button">
                        ₹50,000
                    </button>
<button data-amount="100000" type="button">
                        ₹1,00,000
                    </button>
<button data-amount="250000" type="button">
                        ₹2,50,000
                    </button>
</div>
<div className="form-footer">
<span data-i18n="capitalUpdateLater">
                        You can update this later.
                    </span>
<button className="continue-btn" data-i18n="review" type="submit">
                        Review →
                    </button>
</div>
</form>
</section>
<p className="privacy-note" data-i18n="privacyNote">
            🔒 Your information is used only to personalize your business analysis.
        </p>
</main>

      </>
    </LegacyPage>
  );
}
