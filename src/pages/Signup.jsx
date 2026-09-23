import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Signup() {
  return (
    <LegacyPage
      title="Sign Up | UNNATI"
      styles={["/css/auth.css"]}
      scripts={["auth.js", "language.js"]}
    >
      <>

<div className="auth-container">

<div className="auth-language">
<select aria-label="Select Language" id="languageSelector">
<option value="en">English</option>
<option value="hi">हिन्दी</option>
</select>
</div>

<div className="auth-brand">
<div className="dashboard-logo unnati-brand">
<img alt="Unnati logo" className="unnati-logo" src="assets/unnati-logo.png" />
<div className="brand-text">
<span>UNNATI</span>
<small>Know your market. Grow your business.</small>
</div>
</div>
<h1 data-i18n="startJourney">
            Start your journey.
        </h1>
<p data-i18n="signupWelcomeText">

            Create your UNNATI account and get personalized
            guidance for your business.

        </p>
</div>

<div className="auth-card">
<div className="auth-header">
<h2 data-i18n="createAccountTitle">
                Create your account
            </h2>
<p data-i18n="signupSubtitle">
                It only takes a minute to get started.
            </p>
</div>

<form id="signupForm">

<div className="form-group">
<label data-i18n="fullName" htmlFor="name">
                    Full name
                </label>
<input data-i18n-placeholder="fullNamePlaceholder" id="name" placeholder="Your full name" required={true} type="text" />
</div>

<div className="form-group">
<label data-i18n="emailAddress" htmlFor="signupEmail">
                    Email address
                </label>
<input data-i18n-placeholder="emailPlaceholder" id="signupEmail" placeholder="you@example.com" required={true} type="email" />
</div>

<div className="form-group">
<label data-i18n="password" htmlFor="signupPassword">
                    Password
                </label>
<input data-i18n-placeholder="createPasswordPlaceholder" id="signupPassword" placeholder="Create a password" required={true} type="password" />
</div>

<div className="form-group">
<label data-i18n="confirmPassword" htmlFor="confirmPassword">
                    Confirm password
                </label>
<input data-i18n-placeholder="confirmPasswordPlaceholder" id="confirmPassword" placeholder="Confirm your password" required={true} type="password" />
</div>

<button className="auth-btn" type="submit">
<span data-i18n="createAccount">
                    Create Account
                </span>
<span>→</span>
</button>
</form>

<div className="divider">
<span data-i18n="or">
                or
            </span>
</div>

<p className="switch-auth">
<span data-i18n="alreadyHaveAccount">
                Already have an account?
            </span>
<a data-i18n="login" href="login.html">
                Login
            </a>
</p>
</div>
</div>


      </>
    </LegacyPage>
  );
}
