import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";

import Analysis from "./pages/Analysis.jsx";
import Business from "./pages/Business.jsx";
import Businessplan from "./pages/Businessplan.jsx";
import Capital from "./pages/Capital.jsx";
import Competitors from "./pages/Competitors.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import CostProfitability from "./pages/CostProfitability.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FinancialPlanner from "./pages/FinancialPlanner.jsx";
import Financial from "./pages/Financial.jsx";
import Index from "./pages/Index.jsx";
import Location from "./pages/Location.jsx";
import Login from "./pages/Login.jsx";
import Market from "./pages/Market.jsx";
import Opportunities from "./pages/Opportunities.jsx";
import Pricing from "./pages/Pricing.jsx";
import RepaymentPlanner from "./pages/RepaymentPlanner.jsx";
import Risk from "./pages/Risk.jsx";
import SchemeCalculator from "./pages/SchemeCalculator.jsx";
import Signup from "./pages/Signup.jsx";

const ROUTES = {
  "/analysis.html": Analysis,
  "/business.html": Business,
  "/businessPlan.html": Businessplan,
  "/capital.html": Capital,
  "/competitors.html": Competitors,
  "/confirmation.html": Confirmation,
  "/cost-profitability.html": CostProfitability,
  "/dashboard.html": Dashboard,
  "/financial-planner.html": FinancialPlanner,
  "/financial.html": Financial,
  "/": Index,
  "/location.html": Location,
  "/login.html": Login,
  "/market.html": Market,
  "/opportunities.html": Opportunities,
  "/pricing.html": Pricing,
  "/repayment-planner.html": RepaymentPlanner,
  "/risk.html": Risk,
  "/scheme-calculator.html": SchemeCalculator,
  "/signup.html": Signup,
};

function normalizePath(value) {
  try {
    const url = new URL(value, window.location.origin);
    const path = url.pathname === "/index.html" ? "/" : url.pathname;
    return ROUTES[path] ? path : "/";
  } catch {
    return "/";
  }
}

function routeFromHref(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }

  try {
    const url = new URL(href, window.location.origin + window.location.pathname);
    if (url.origin !== window.location.origin) return null;
    return normalizePath(url.pathname);
  } catch {
    return null;
  }
}

function navigate(target) {
  const next = routeFromHref(target);
  if (!next) return;
  if (next === normalizePath(window.location.pathname)) return;
  window.history.pushState({}, "", next);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));
  const Page = useMemo(() => ROUTES[path] || ROUTES["/"], [path]);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);

    window.__unnatiNavigate = navigate;

    const onDocumentClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = event.target.closest?.("a[href]");
      if (anchor) {
        const next = routeFromHref(anchor.getAttribute("href"));
        if (next) {
          event.preventDefault();
          navigate(anchor.getAttribute("href"));
          return;
        }
      }
    };

    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onDocumentClick);
      delete window.__unnatiNavigate;
    };
  }, []);

  return <Page />;
}

createRoot(document.getElementById("root")).render(<App />);
