import React from "react";

const TABS = [
  { key: "overview",  href: "financial.html",          icon: "◈",  label: "Financial Overview" },
  { key: "scheme",    href: "scheme-calculator.html",  icon: "🧮", label: "Scheme Calculator" },
  { key: "planner",   href: "financial-planner.html",  icon: "📅", label: "Financial Planner" },
  { key: "repayment", href: "repayment-planner.html",  icon: "💳", label: "Repayment Planner" },
  { key: "cost",      href: "cost-profitability.html", icon: "📈", label: "Cost & Profitability" },
];

const barStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px",
  margin: "20px 0 30px",
  background: "#ffffff",
  border: "1px solid #dfe7df",
  borderRadius: "16px",
  boxSizing: "border-box",
  width: "100%",
  overflowX: "auto",
};

const tabStyle = (isActive) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "18px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontSize: "16px",
  fontWeight: isActive ? 700 : 600,
  color: isActive ? "#237b38" : "#52615a",
  background: isActive ? "#eaf5e8" : "transparent",
});

export default function FinancialTabs({ active }) {
  return (
    <div className="financial-tabs" style={barStyle}>
      {TABS.map((tab) => (
        <a key={tab.key} href={tab.href} style={tabStyle(tab.key === active)} aria-current={tab.key === active ? "page" : undefined}>
          <span>{tab.icon}</span>
          {tab.label}
        </a>
      ))}
    </div>
  );
}