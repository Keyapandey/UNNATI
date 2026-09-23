import React from "react";
import LegacyPage from "../components/LegacyPage";

export default function Login() {
  return (
    <LegacyPage
      title="Login | UNNATI"
      styles={["/css/auth.css"]}
      scripts={["auth.js", "language.js"]}
    >
      <>

<div className="auth-container">
<div className="auth-brand">
<div className="dashboard-logo unnati-brand">
<img alt="Unnati logo" className="unnati-logo" src="assets/unnati-logo.png" />
<div className="brand-text">
<span><strong>UNNATI</strong></span>
<small>Know your market. Grow your business.</small>
</div>
</div>
<h1 data-i18n="welcomeBack">Welcome back.</h1>
<p data-i18n="loginWelcomeText">
                Login to continue building and growing your business
                with UNNATI.
            </p>
</div>
<div className="auth-language">
<select aria-label="Select Language" id="languageSelector">
<option value="en">English</option>
<option value="hi">हिन्दी</option>
</select>
</div>
<div className="auth-card">
<h2 data-i18n="loginTitle">
                Login to UNNATI
            </h2>
<p data-i18n="loginSubtitle">
                Enter your details to continue.
            </p>
<form id="loginForm">
<div className="form-group">
<label data-i18n="emailAddress" htmlFor="email">Email address</label>
<input id="email" placeholder="you@example.com" required={true} type="email" />
</div>
<div className="form-group">
<label data-i18n="password" htmlFor="password">Password</label>
<input id="password" placeholder="Enter your password" required={true} type="password" />
</div>
<div className="form-options">
<label className="remember">
<input type="checkbox" />
<span data-i18n="rememberMe">Remember me</span>
</label>
<a data-i18n="forgotPassword" href="#">Forgot password?</a>
</div>
<button className="auth-btn" type="submit">
<span data-i18n="login">Login</span>
<span>→</span>
</button>
</form>
<div className="divider">
<span data-i18n="or">or</span>
</div>
<p className="switch-auth">
<span data-i18n="noAccount">Don't have an account?</span>
<a data-i18n="createAccount" href="signup.html">Create an account</a>
</p>
</div>
</div>

      </>
    </LegacyPage>
  );
}
