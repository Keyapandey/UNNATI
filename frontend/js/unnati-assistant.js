/* ==========================================================
   UNNATI BUSINESS ASSISTANT
   Frontend intelligence layer. Uses the user's saved UNNATI
   business/financial data and is ready for a real AI API later.
========================================================== */
(function () {
    "use strict";

    if (document.getElementById("unnatiAiLauncher")) return;

    const storage = (key, fallback = "") => localStorage.getItem(key) || fallback;
    const json = (key, fallback = {}) => {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; }
        catch (e) { return fallback; }
    };
    const money = (value) => `₹${Math.round(Number(value) || 0).toLocaleString("en-IN")}`;
    const pct = (value) => `${Number(value || 0).toFixed(1)}%`;

    function getBusinessContext() {
        const financial = json("grambizFinancialData", {});
        const plan = json("grambizFinancialPlan", {});
        const profitability = json("grambizProfitabilityPlan", {});
        const repayment = json("grambizRepaymentPlan", {});
        const scheme = financial.scheme || {};
        const selectedScheme = scheme.selectedScheme || {};

        const sales = Number(plan.sales) || 0;
        const expenses = Number(plan.expenses) || Number(profitability.totalExpenses) || 0;
        const profit = sales - expenses;
        const margin = sales > 0 ? (profit / sales) * 100 : Number(profitability.profitMargin) || 0;
        const capital = Number(storage("grambizCapital")) || 0;
        const funding = Number(scheme.fundingRequired) || Number(storage("grambizFundingRequired")) || 0;
        const emi = Number(repayment.emi) || 0;
        const riskChecklist = json("grambizRiskChecklist", []);

        return {
            name: storage("grambizUserName", "there"),
            business: storage("grambizBusiness", "your business"),
            category: storage("grambizBusinessCategory", storage("grambizBusiness", "business")),
            village: storage("grambizVillage"),
            block: storage("grambizBlock"),
            district: storage("grambizDistrict"),
            capital,
            sales,
            expenses,
            profit,
            margin,
            funding,
            emi,
            selectedScheme: selectedScheme.name || selectedScheme.schemeName || storage("grambizSelectedScheme"),
            riskItemsDone: Array.isArray(riskChecklist) ? riskChecklist.filter(Boolean).length : 0,
            riskItemsTotal: Array.isArray(riskChecklist) ? riskChecklist.length : 0,
            profitability
        };
    }

    function locationText(c) {
        return [c.village, c.block, c.district].filter(Boolean).join(", ") || "your local area";
    }

    function contextIntro(c) {
        const parts = [];
        if (c.business !== "your business") parts.push(`<strong>${escapeHtml(c.business)}</strong>`);
        if (c.capital) parts.push(`<strong>${money(c.capital)}</strong> available capital`);
        if (c.sales) parts.push(`<strong>${money(c.sales)}</strong> estimated monthly sales`);
        return parts.length ? `I’m using your saved UNNATI data: ${parts.join(" • ")}.` : "I can guide you using the business information saved in UNNATI.";
    }

    function answerQuestion(raw) {
        const q = raw.toLowerCase().trim();
        const c = getBusinessContext();
        const business = escapeHtml(c.business);
        const place = escapeHtml(locationText(c));

        if (!q) return "Please type a business question and I’ll guide you.";

        // Profit / earnings
        if (/profit|कमाई|munafa|मुनाफ|earn|earning|margin|मार्जिन/.test(q)) {
            if (c.sales && c.expenses) {
                const marginText = pct(c.margin);
                let advice;
                if (c.profit <= 0) {
                    advice = "Your saved plan currently shows no positive monthly profit. First reduce avoidable costs and review your selling price before expanding.";
                } else if (c.margin < 20) {
                    advice = "Your estimated margin is relatively tight. Focus first on your highest-cost items, wastage and pricing before putting more money into expansion.";
                } else {
                    advice = "Your estimated margin is reasonably healthy. The next focus should be increasing sales per customer while protecting your current cost structure.";
                }
                return `<strong>Profit view</strong><br>${money(c.sales)} sales − ${money(c.expenses)} expenses = <strong>${money(c.profit)}</strong> estimated monthly profit (${marginText} margin).<br><br>${advice}<ul><li>Review the biggest expense category.</li><li>Test a small price or bundle improvement.</li><li>Reinvest only after the change improves actual sales or margin.</li></ul>`;
            }
            return `<strong>Profit view</strong><br>I don’t yet have a completed Financial Planner result for ${business}. Complete the Financial Planner so I can use your actual sales and expense estimates instead of guessing.`;
        }

        // Capital / expansion
        if (/capital|expand|expansion|investment|invest|विस्तार|पैसा|पूंजी|budget/.test(q)) {
            if (c.capital) {
                const safeTest = Math.round(c.capital * 0.25);
                return `<strong>Expansion guidance</strong><br>You currently have about <strong>${money(c.capital)}</strong> available capital. I would avoid putting all of it into one expansion.<br><br>A sensible first test is around <strong>${money(safeTest)}</strong> (about 25% of available capital), then measure whether sales or profit actually improve.<ul><li>Keep a cash buffer for routine expenses.</li><li>Start with one measurable improvement.</li><li>Scale only after the result is positive.</li></ul>`;
            }
            return `<strong>Expansion guidance</strong><br>I need your available capital from the Business Setup data before giving a meaningful expansion recommendation.`;
        }

        // Funding / loan / scheme
        if (/loan|finance|fund|funding|scheme|credit|borrow|ऋण|लोन|फंड|finance option/.test(q)) {
            if (c.funding || c.selectedScheme) {
                const selected = c.selectedScheme ? `<br>Your saved scheme selection is <strong>${escapeHtml(c.selectedScheme)}</strong>.` : "";
                const amount = c.funding ? ` The saved funding requirement is <strong>${money(c.funding)}</strong>.` : "";
                return `<strong>Funding guidance</strong><br>${amount}${selected}<br><br>Before taking finance, compare the required amount with your monthly cash flow and repayment capacity. The most suitable option should depend on your business stage, project cost, own contribution and ability to repay—not only the maximum amount available.<br><br><strong>Important:</strong> this is a planning recommendation, not loan approval or financial advice.`;
            }
            return `<strong>Funding guidance</strong><br>I can compare financing suitability once your Scheme Calculator has saved the project cost, own contribution and funding requirement. Avoid choosing a loan only because it offers a larger amount.`;
        }

        // Repayment / EMI
        if (/emi|repay|repayment|installment|instalment|किस्त|चुक|interest|ब्याज/.test(q)) {
            if (c.emi && c.profit > 0) {
                const ratio = (c.emi / c.profit) * 100;
                let view = ratio <= 30 ? "This is a comparatively comfortable planning range." : ratio <= 50 ? "This suggests moderate repayment pressure and deserves a closer cash-flow review." : "This looks like high repayment pressure relative to your estimated profit.";
                return `<strong>Repayment view</strong><br>Your saved EMI is <strong>${money(c.emi)}</strong> against estimated monthly profit of <strong>${money(c.profit)}</strong>. That is about <strong>${pct(ratio)}</strong> of estimated profit.<br><br>${view}<ul><li>Check whether the business can still cover normal expenses after EMI.</li><li>Consider a lower borrowing amount if cash flow feels tight.</li><li>Do not treat this ratio as a lender approval rule.</li></ul>`;
            }
            return `<strong>Repayment view</strong><br>I don’t have a saved EMI and positive monthly profit yet. Complete the Financial Planner and Repayment Planner for a meaningful repayment-capacity check.`;
        }

        // Customers / market / local growth
        if (/customer|customers|sales|market|local|nearby|reach|ग्राहक|बिक्री|बाजार|customer बढ़|grow/.test(q)) {
            return `<strong>Local growth ideas</strong><br>For <strong>${business}</strong> in <strong>${place}</strong>, start with low-cost experiments rather than a large marketing spend.<ul><li>Identify the 2–3 customer groups most likely to buy repeatedly.</li><li>Offer one simple bundle or repeat-customer incentive.</li><li>Track which product/service brings the highest margin, not just the highest sales.</li><li>Ask existing customers what would make them buy more often.</li></ul><br>Use the Market Reach and Opportunities sections to validate the idea before investing heavily.`;
        }

        // Competitors / pricing
        if (/competitor|competition|compete|price|pricing|दाम|कीमत|प्रतियोग|competition/.test(q)) {
            return `<strong>Competition & pricing</strong><br>Don’t compete only by lowering price. For <strong>${business}</strong>, compare competitors on price, quality, convenience, location, service and repeat-customer experience.<ul><li>Find one reason a customer should choose you.</li><li>Protect your margin before offering discounts.</li><li>Test a small price change and watch actual demand.</li></ul><br>If your current Financial Planner data is available, I can also explain what your present margin means for pricing decisions.`;
        }

        // Risk
        if (/risk|danger|problem|loss|unsafe|जोखिम|नुकसान|खतरा/.test(q)) {
            let riskText = "Your Risk section should be used as the first check.";
            if (c.capital && c.profit <= 0 && c.sales) riskText = "The biggest immediate concern is profitability: your saved estimates do not currently show positive monthly profit.";
            else if (c.capital && c.profit > 0) riskText = `Your business currently has positive estimated profit of ${money(c.profit)}, so the main focus should be protecting cash flow and avoiding over-borrowing.`;
            return `<strong>Risk view</strong><br>${riskText}<br><br>Keep your emergency cash buffer, monitor expenses and avoid taking on repayment that the business cannot comfortably support. Check the Risk section regularly as your numbers change.`;
        }

        // Generic business guidance — still contextual, not a random generic answer
        if (/business|idea|start|improve|help|what should|kya|kaise|क्या|कैसे|suggest|advice|guide/.test(q)) {
            return `<strong>Business guidance</strong><br>For <strong>${business}</strong> in <strong>${place}</strong>, I’d focus on three things first:<ul><li><strong>Demand:</strong> make sure customers actually want the offer.</li><li><strong>Profit:</strong> protect your margin instead of chasing sales alone.</li><li><strong>Cash:</strong> keep enough working capital before expansion or borrowing.</li></ul><br>${contextIntro(c)}`;
        }

        return `<strong>I can help with your business.</strong><br>Try asking about your profit, expenses, customers, pricing, competitors, expansion, funding, EMI/repayment, or business risks. I’ll use the information saved in UNNATI when it is available.`;
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>'"]/g, ch => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
        }[ch]));
    }

    function suggestions() {
        const c = getBusinessContext();
        const list = [
            "How can I improve my profit?",
            "How can I get more local customers?",
            "Is my current capital enough for expansion?",
            "What should I consider before taking a loan?"
        ];
        if (c.emi) list[3] = "Can my business comfortably handle the EMI?";
        return list;
    }

    const launcher = document.createElement("button");
    launcher.id = "unnatiAiLauncher";
    launcher.className = "unnati-ai-launcher";
    launcher.type = "button";
    launcher.innerHTML = `<span class="unnati-ai-launcher-icon">✦</span><span>Ask UNNATI</span>`;
    launcher.setAttribute("aria-label", "Open UNNATI business assistant");

    const win = document.createElement("section");
    win.className = "unnati-ai-window";
    win.setAttribute("aria-label", "UNNATI business assistant");
    win.innerHTML = `
        <div class="unnati-ai-header">
            <div class="unnati-ai-title">
                <div class="unnati-ai-avatar">✦</div>
                <div><strong>UNNATI Guide</strong><span>Your business assistant</span></div>
            </div>
            <button class="unnati-ai-close" type="button" aria-label="Close assistant">×</button>
        </div>
        <div class="unnati-ai-messages" id="unnatiAiMessages"></div>
        <form class="unnati-ai-input-area" id="unnatiAiForm">
            <textarea class="unnati-ai-input" id="unnatiAiInput" placeholder="Ask about your business..." rows="1"></textarea>
            <button class="unnati-ai-send" type="submit" aria-label="Send">➤</button>
        </form>`;

    document.body.appendChild(launcher);
    document.body.appendChild(win);

    const messages = win.querySelector("#unnatiAiMessages");
    const input = win.querySelector("#unnatiAiInput");
    const close = win.querySelector(".unnati-ai-close");

    function addMessage(content, type) {
        const el = document.createElement("div");
        el.className = `unnati-ai-message ${type}`;
        el.innerHTML = content;
        messages.appendChild(el);
        messages.scrollTop = messages.scrollHeight;
        return el;
    }

    function showTyping() {
        return addMessage(`<span class="unnati-ai-typing"><i></i><i></i><i></i></span>`, "bot");
    }

    function renderWelcome() {
        const c = getBusinessContext();
        const name = escapeHtml(c.name);
        const intro = c.business !== "your business"
            ? `I know you’re working on <strong>${escapeHtml(c.business)}</strong>. Ask me a business question and I’ll use your saved numbers when available.`
            : "Ask me a business question and I’ll use your saved UNNATI data when available.";

        messages.innerHTML = `
            <div class="unnati-ai-welcome"><strong>Hi ${name} 👋</strong><br>${intro}</div>
            <div class="unnati-ai-suggestions">
                ${suggestions().map(q => `<button type="button" class="unnati-ai-suggestion">${escapeHtml(q)}</button>`).join("")}
            </div>`;

        messages.querySelectorAll(".unnati-ai-suggestion").forEach(btn => {
            btn.addEventListener("click", () => sendQuestion(btn.textContent));
        });
    }

    function sendQuestion(question) {
        const text = String(question || "").trim();
        if (!text) return;
        addMessage(escapeHtml(text), "user");
        input.value = "";
        input.focus();
        const typing = showTyping();
        setTimeout(() => {
            typing.remove();
            addMessage(answerQuestion(text), "bot");
        }, 450);
    }

    launcher.addEventListener("click", () => {
        const opening = !win.classList.contains("open");
        win.classList.toggle("open", opening);
        if (opening) {
            renderWelcome();
            setTimeout(() => input.focus(), 50);
        }
    });

    close.addEventListener("click", () => win.classList.remove("open"));

    win.querySelector("#unnatiAiForm").addEventListener("submit", e => {
        e.preventDefault();
        sendQuestion(input.value);
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendQuestion(input.value);
        }
    });
})();
