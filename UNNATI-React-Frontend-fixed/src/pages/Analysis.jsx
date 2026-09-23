import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Analysis() {
  return (
    <LegacyPage
      title="AI Analysis | UNNATI"
      styles={["/css/setup.css", "/css/unnati-assistant.css"]}
      scripts={["analysis.js", "language.js", "unnati-assistant.js"]}
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
<div className="step-text" data-i18n="aiAnalysis">
            AI Analysis
        </div>
</header>
<main className="setup-container">
<section className="setup-card analysis-card">
<div className="analysis-icon">
                ✦
            </div>
<h1 data-i18n="analysisTitle">
                Analyzing your business
            </h1>
<p className="analysis-description" data-i18n="analysisDescription">
                Our AI is analyzing your location,
                market, competition and financial potential.
            </p>

<div className="analysis-progress">
<div className="analysis-progress-bar" id="analysisProgressBar"></div>
</div>
<div className="progress-percent" id="progressPercent">
                0%
            </div>

<div className="analysis-steps">
<div className="analysis-item" id="locationAnalysis">
<span className="analysis-status">
                        1
                    </span>
<span data-i18n="analyzingLocation">
                        Analyzing location
                    </span>
</div>
<div className="analysis-item" id="marketAnalysis">
<span className="analysis-status">
                        2
                    </span>
<span data-i18n="analyzingMarket">
                        Studying local market
                    </span>
</div>
<div className="analysis-item" id="competitionAnalysis">
<span className="analysis-status">
                        3
                    </span>
<span data-i18n="analyzingCompetition">
                        Checking competition
                    </span>
</div>
<div className="analysis-item" id="opportunityAnalysis">
<span className="analysis-status">
                        4
                    </span>
<span data-i18n="analyzingOpportunities">
                        Finding opportunities
                    </span>
</div>
<div className="analysis-item" id="financialAnalysis">
<span className="analysis-status">
                        5
                    </span>
<span data-i18n="analyzingFinancials">
                        Structuring finances
                    </span>
</div>
</div>
</section>
<p className="privacy-note" data-i18n="analysisPrivacy">
            🔒 Your information is securely used to
            create your personalized business analysis.
        </p>
</main>

      </>
    </LegacyPage>
  );
}
