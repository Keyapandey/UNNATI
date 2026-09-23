import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Location() {
  return (
    <LegacyPage
      title="Location | UNNATI"
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
<div className="step-text" data-i18n="step1of3">
        Step 1 of 3
    </div>
</header>
<main className="setup-container">
<div className="progress-area">
<div className="progress-step active">
<span>1</span>
<span data-i18n="location">Location</span>
</div>
<div className="progress-line"></div>
<div className="progress-step">
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
<div>
<h1 data-i18n="locationTitle">Where is your business located?</h1>
<p data-i18n="locationDescription">
                    Your location helps us understand
                    your local market and opportunities.
                </p>
</div>
</div>
<button className="location-button" data-i18n="useCurrentLocation" id="useLocationBtn" type="button">
            📍 Use my current location
        </button>
<div className="or-divider">
<span data-i18n="or">OR</span>
</div>
<form id="locationForm">
<div className="form-group">
<label data-i18n="villageTown" htmlFor="village">
                    Village / Town
                </label>
<input data-i18n-placeholder="villagePlaceholder" id="village" placeholder="Enter village or town" required={true} type="text" />
</div>
<div className="form-group">
<label data-i18n="block" htmlFor="block">
                    Block
                </label>
<input data-i18n-placeholder="blockPlaceholder" id="block" placeholder="Enter block" required={true} type="text" />
</div>
<div className="form-group">
<label data-i18n="district" htmlFor="district">
                    District
                </label>
<input data-i18n-placeholder="districtPlaceholder" id="district" placeholder="Enter district" required={true} type="text" />
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
