import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";

const PAGE_MAP = {
  "/": "index.html",
  "/index.html": "index.html",
  "/login.html": "login.html",
  "/signup.html": "signup.html",
  "/location.html": "location.html",
  "/business.html": "business.html",
  "/capital.html": "capital.html",
  "/analysis.html": "analysis.html",
  "/confirmation.html": "confirmation.html",
  "/dashboard.html": "dashboard.html",
  "/market.html": "market.html",
  "/opportunities.html": "opportunities.html",
  "/competitors.html": "competitors.html",
  "/pricing.html": "pricing.html",
  "/financial.html": "financial.html",
  "/scheme-calculator.html": "scheme-calculator.html",
  "/financial-planner.html": "financial-planner.html",
  "/repayment-planner.html": "repayment-planner.html",
  "/cost-profitability.html": "cost-profitability.html",
  "/risk.html": "risk.html",
  "/businessPlan.html": "businessPlan.html",
};

const fileToPath = Object.fromEntries(
  Object.entries(PAGE_MAP).map(([path, file]) => [file, path])
);

function normalizePath(value) {
  try {
    const u = new URL(value, window.location.origin);
    const path = u.pathname === "/index.html" ? "/" : u.pathname;
    return PAGE_MAP[path] ? path : "/";
  } catch {
    return "/";
  }
}

function routeFromLegacyHref(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }
  try {
    const u = new URL(href, window.location.origin);
    if (u.origin !== window.location.origin) return null;
    return normalizePath(u.pathname);
  } catch {
    return null;
  }
}

async function fetchPage(file) {
  const response = await fetch(`/pages/${file}`);
  if (!response.ok) throw new Error(`Could not load ${file}`);
  return response.text();
}

function cleanupRouteStyles() {
  document.querySelectorAll("link[data-unnati-route-style]").forEach((el) => el.remove());
}

function installStyles(doc) {
  cleanupRouteStyles();
  doc.querySelectorAll('link[rel="stylesheet"]').forEach((source) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = source.getAttribute("href");
    link.dataset.unnatiRouteStyle = "true";
    document.head.appendChild(link);
  });
}

function transformNavigation(source) {
  // Navigation is the only adaptation made to the original JS:
  // replace full browser redirects with the SPA history navigation bridge.
  return source.replace(
    /(?:window\.)?location\.href\s*=\s*([^;]+);/g,
    "window.__unnatiNavigate($1);"
  );
}

async function runOriginalScripts(doc) {
  const scripts = Array.from(doc.querySelectorAll("script[src]"));
  for (const script of scripts) {
    const src = script.getAttribute("src");
    const response = await fetch(src.startsWith("/") ? src : `/${src}`);
    if (!response.ok) continue;
    const source = await response.text();
    const adapted = transformNavigation(source);
    try {
      const execute = new Function(adapted + `\n//# sourceURL=${src}`);
      execute();
    } catch (error) {
      console.error(`UNNATI script error in ${src}:`, error);
    }
  }
}

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);

    window.__unnatiNavigate = (target) => {
      const next = routeFromLegacyHref(target);
      if (!next) return;
      if (next === path) return;
      window.history.pushState({}, "", next);
      setPath(next);
      window.scrollTo(0, 0);
    };

    return () => {
      window.removeEventListener("popstate", onPopState);
      delete window.__unnatiNavigate;
    };
  }, [path]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const file = PAGE_MAP[path] || "index.html";
        const text = await fetchPage(file);
        if (cancelled) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        document.title = doc.title || "UNNATI";
        installStyles(doc);

        const body = doc.body;
        const root = contentRef.current;
        if (!root) return;

        // Preserve the exact existing HTML markup. React owns the page shell;
        // the original page markup/CSS/JS remains unchanged.
        root.innerHTML = body.innerHTML;

        // Make legacy relative links work inside the SPA without modifying
        // their original HTML.
        root.querySelectorAll("a[href]").forEach((a) => {
          a.addEventListener("click", (event) => {
            const href = a.getAttribute("href");
            const next = routeFromLegacyHref(href);
            if (!next) return;
            event.preventDefault();
            window.__unnatiNavigate(href);
          });
        });

        // A few original pages use inline onclick redirects. Adapt only those
        // redirects to the same SPA bridge; every other inline behavior stays
        // exactly as it was.
        root.querySelectorAll("[onclick]").forEach((element) => {
          const onclick = element.getAttribute("onclick") || "";
          if (!/(?:window\.)?location\.href\s*=/.test(onclick)) return;
          const adapted = onclick.replace(
            /(?:window\.)?location\.href\s*=\s*([^;]+)/g,
            "window.__unnatiNavigate($1)"
          );
          element.setAttribute("onclick", adapted);
        });

        await runOriginalScripts(doc);

        if (!cancelled) {
          setLoading(false);
          window.scrollTo(0, 0);
        }
      } catch (e) {
        if (!cancelled) {
          console.error(e);
          setError("Unable to load this page.");
          setLoading(false);
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, [path]);

  return (
    <div className="unnati-react-shell">
      <div ref={contentRef} />
      {loading && <div className="unnati-route-loading" aria-hidden="true" />}
      {error && <div className="unnati-route-error">{error}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
