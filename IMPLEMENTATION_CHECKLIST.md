# Finish polishing the real Financial Report.pbix in Power BI Desktop

**Important:** The included website is a professional **design prototype**, not a modification of your PBIX. Your original report remains unchanged.

## 1. Preserve the report

- [ ] Open `Financial report.pbix` in Power BI Desktop.
- [ ] Save a copy as `Financial_Report_Portfolio_v2.pbix`.
- [ ] In **View → Themes → Browse for themes**, import `powerbi-theme.json`.
- [ ] Set the canvas to 1280 × 720 where useful; confirm page scaling and every visualization before publishing.

## 2. Dashboard / Executive Overview

- [ ] Keep 4 large cards: Revenue, COGS, Gross Profit, Net Profit.
- [ ] Remove redundant gauges or place margins in a compact secondary row only after validation.
- [ ] Replace long cluttered axes with monthly or annual trend charts showing legible dates.
- [ ] Remove unused Data Agent area or replace it with validated narrative insights.
- [ ] Show the reporting date, source and units (e.g., CAD thousands only if confirmed).
- [ ] Verify Operating Margin DAX (displayed in scientific notation) and net margin formatting.

## 3. Ratios 1 / Financial Health

- [ ] Replace 3 multi-row card visuals with titled Liquidity, Profitability, Solvency panels.
- [ ] For each measure, check its numerator, denominator, aggregation and period filters.
- [ ] Format margins as % only if stored as decimal fractions; format Current/Quick/Cash and Debt-to-Equity as multiples where appropriate.
- [ ] Do not publish ratio values until validation is complete.

## 4. The other six pages

- [ ] IS — subtotal hierarchy, currency units, clear report period and comparison if model supports it.
- [ ] BS — align amounts, reconcile assets = liabilities + equity, group current / noncurrent.
- [ ] CF — operating, investing and financing sections; add cash flow bridge only if reconciled.
- [ ] WC — current assets, current liabilities and net working capital with matching dates.
- [ ] Ratios — right-aligned numeric table and each ratio's correct formatting.
- [ ] Financials — one filter band (Year, Product, Country), readable trend / category analysis; note table-source differences.

## 5. Finish the GitHub portfolio

- [ ] Export a screenshot of each updated Power BI page after verifying its values.
- [ ] Add screenshots to `assets/` and update the website/README to reflect *completed* report changes, not proposals.
- [ ] Keep your original PBIX private unless data-sharing permissions are confirmed.
- [ ] Test the Pages URL in an Incognito browser without Microsoft sign-in.