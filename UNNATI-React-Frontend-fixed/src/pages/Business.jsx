import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Business() {
  return (
    <LegacyPage
      title="Business Setup | UNNATI"
      styles={["/css/setup.css"]}
      scripts={["setup.js", "language.js"]}
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
<div className="step-text" data-i18n="step2of3">
            Step 2 of 3
        </div>
</header>
<main className="setup-container">

<div className="progress-area">
<div className="progress-step completed">
<span>✓</span>
<span data-i18n="location">Location</span>
</div>
<div className="progress-line completed-line"></div>
<div className="progress-step active">
<span>2</span>
<span data-i18n="business">Business</span>
</div>
<div className="progress-line"></div>
<div className="progress-step">
<span>3</span>
<span data-i18n="capital">Capital</span>
</div>
</div>

<section className="setup-card">
<div className="setup-title">
<button className="back-button" id="backBtn" type="button">
                    ←
                </button>
<div>
<h1 data-i18n="businessTitle">
                        What business are you planning?
                    </h1>
<p data-i18n="businessDescription">
                        Choose the category that best describes
                        your business idea.
                    </p>
</div>
</div>
<form id="businessForm">
<div className="business-grid">

<label className="business-option">
<input name="business" type="radio" value="Dairy" />
<div className="business-content">
<div className="business-icon">🐄</div>
<strong data-i18n="dairy">
                                Dairy
                            </strong>
<small data-i18n="dairyDescription">
                                Milk & dairy products
                            </small>
</div>
</label>

<label className="business-option">
<input name="business" type="radio" value="Retail" />
<div className="business-content">
<div className="business-icon">🏪</div>
<strong data-i18n="retail">
                                Retail
                            </strong>
<small data-i18n="retailDescription">
                                Local shop & trading
                            </small>
</div>
</label>

<label className="business-option">
<input name="business" type="radio" value="Textiles" />
<div className="business-content">
<div className="business-icon">👕</div>
<strong data-i18n="textiles">
                                Textiles
                            </strong>
<small data-i18n="textilesDescription">
                                Clothing & tailoring
                            </small>
</div>
</label>

<label className="business-option">
<input name="business" type="radio" value="Agriculture" />
<div className="business-content">
<div className="business-icon">🌱</div>
<strong data-i18n="agriculture">
                                Agriculture
                            </strong>
<small data-i18n="agricultureDescription">
                                Farming & produce
                            </small>
</div>
</label>

<label className="business-option">
<input name="business" type="radio" value="Food" />
<div className="business-content">
<div className="business-icon">🌾</div>
<strong data-i18n="food">
                                Food
                            </strong>
<small data-i18n="foodDescription">
                                Food & processing
                            </small>
</div>
</label>

<label className="business-option">
<input name="business" type="radio" value="Poultry" />
<div className="business-content">
<div className="business-icon">🐔</div>
<strong data-i18n="poultry">
                                Poultry
                            </strong>
<small data-i18n="poultryDescription">
                                Birds & eggs
                            </small>
</div>
</label>

<label className="business-option">
<input name="business" type="radio" value="Services" />
<div className="business-content">
<div className="business-icon">🛠️</div>
<strong data-i18n="services">
                                Services
                            </strong>
<small data-i18n="servicesDescription">
                                Local services
                            </small>
</div>
</label>

<label className="business-option">
<input id="otherBusiness" name="business" type="radio" value="Other" />
<div className="business-content">
<div className="business-icon">•••</div>
<strong data-i18n="other">
                                Other
                            </strong>
<small data-i18n="otherDescription">
                                Something else
                            </small>
</div>
</label>
</div>

<div className="other-business-container" id="otherBusinessContainer" style={{display: "none"}}>
<label data-i18n="otherBusinessLabel" htmlFor="otherBusinessInput">
                        Enter your business type
                    </label>
<input data-i18n-placeholder="otherBusinessPlaceholder" id="otherBusinessInput" placeholder="e.g. Handicrafts, Mobile Repair, Beauty Parlour" type="text" />
</div>
<div className="form-footer">
<span data-i18n="changeLater">
                        You can change this later.
                    </span>
<button className="continue-btn" data-i18n="continue" type="submit">
                        Continue →
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
