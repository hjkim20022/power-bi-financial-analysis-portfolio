# Financial Report — Professional Portfolio Redesign Blueprint

**Based on:** user-provided `Financial report.pbix` inspected October 2026.
**Scope:** visual organization, labels, units, audit points, theme and quality checks. The underlying dataset and DAX were **not changed**. Exact rendered appearance and calculated values cannot be verified here without Power BI Desktop.

## Apply the companion theme

1. Keep your downloaded original PBIX unchanged. In Power BI Desktop, open it and use **File → Save As** to make `Financial_Report_Portfolio_v2.pbix`.
2. Select **Design → Import theme** (or **View → Themes → Browse for themes**, depending on your Desktop version), and import `powerbi-theme.json`.
3. Some existing visuals have explicit formatting that overrides theme defaults. Update those visuals manually and check each page before saving.
4. Use a pale gray page canvas `#F4F7FA`, white visual backgrounds, navy headings `#172B44`, teal highlights `#0A7B83`. Maintain 16–24 px gutters and one primary title per page.

## Actual file inventory

| Original page | Visuals found | Recommended display title |
|---|---:|---|
| IS | 1 | Income Statement |
| BS | 1 | Balance Sheet |
| WC | 1 | Working Capital |
| CF | 1 | Cash Flow |
| Ratios 1 | 3 | Financial Health Overview |
| Ratios | 1 | Ratio Detail |
| dashboard | 24 | Executive Overview |
| financials | 10 | Revenue & Profit Drivers |

## Page-by-page design specifications

### IS → Income Statement

Keep the original consolidated income statement matrix but add a clear title, reporting period, compact financial KPIs (Net Sales, Gross Profit, Operating Income if available, Net Income), and variance measures only after validating base calculations. Use thousands separators, aligned values and subtotals with clear contrast. Show a year-over-year comparison if supported by the Date table.

### BS → Balance Sheet

Keep the balance sheet matrix, aligned right for money. Add a compact Assets / Liabilities / Equity summary using existing validated measures. Consider a stacked comparison by year only if the assets and liabilities line items are consistently modeled. Flag the accounting balance check rather than showing an unverified number.

### WC → Working Capital

Promote Working Capital to a headline KPI, then show Current Assets and Current Liabilities and an optional trend by period. Validate Current Ratio and Quick Ratio against the underlying period-specific balance sheet fields before visualization.

### CF → Cash Flow

Keep the consolidated cash-flow matrix and group operating, investing, and financing activity with readable indentation. Provide a cash movement summary based on reconciled amounts. Avoid a decorative chart if those categories are unavailable or unreconciled.

### Ratios 1 → Financial Health Overview

Replace the three oversized multi-row cards with **three clearly titled sections**: Liquidity (Cash, Current, Quick ratios); Profitability (Gross, Operating, Net, Pretax margins, Return on Total Capital); Solvency (Debt-to-Assets, Debt-to-Capital, Debt-to-Equity). Each section should show 2–5 aligned KPI tiles with units and a short interpretation. Add small trend charts by year only if the measure responds correctly to date filters. Keep a dedicated Ratio Detail table for users who need all metrics.

**Existing measures detected**: Cash Ratio, Current Ratio, Quick Ratio; Gross Profit Margin Ratio, Net Profit Margin Ratio, Operating Margin Ratio, Pretax Margin Ratio, Return on total Capital Ratio; Debt-to-Assets Ratio, Debt-to-Capital Ratio, Debt-to-Equity Ratio.

### Ratios → Ratio Detail

Keep the ratio matrix as the detailed reference page. Use separate number formats: margins and Debt-to-Assets as percentages; Current/Quick/Cash Ratio and Debt-to-Equity as x (multiples) unless your conventions differ. Right-align numbers, limit decimals to 1–2, and mark unavailable/zero-denominator ratios as blank rather than misleading zero. The matrix currently uses `_Measures_Table.value (Ratio)` grouped by Dim_Row_Table Ratio.Name.

### dashboard → Executive Overview

Create a one-screen executive summary. Place **four KPI cards** (Revenue, Cost of Sales, Gross Profit, Net Profit) on the top row, and **three margin cards** (gross, operating, net) underneath. Use a full-width revenue and gross-profit trend chart, followed by one profitability/COGS comparison. Move Total Assets and Total Liabilities to the Balance Sheet or Working Capital detail page. Replace the custom “Data Agent”/blank interactive area with 2–3 short business insights **verified from the filtered data**. Use a visible reporting period and data-source note.

**Existing issues:** current dashboard contains gauges, overlapping assets/liabilities components, dense date labels, a narrative text box and a custom visual. In the prior screenshot, Operating Margin Ratio displays `1.25E-5` and Net Profit Margin displays `0.24`; investigate the DAX logic, filter context and model formatting before interpreting these as percentages. The column chart uses a combination of Net sales, EBITDA and Net Profit Margin, so make the axis/units explicit.

### financials → Revenue & Profit Drivers

Use the existing Year, Product, and Country slicers in one filter band. Show Sales Revenue and Gross Profit cards, then one clean sales trend and one gross profit by product bar chart. Keep the forecast only if the date horizon and assumptions are explained; otherwise prefer actuals. Reduce duplicated matrices and line charts, which currently compete for space. Note: this page queries a different model table named `financials`; validate how its metrics relate to IS, BS, and other financial statement pages.

## Formatting standards

| Element | Standard |
|---|---|
| Canvas | 1280 × 720 for consistent presentation where feasible; adapt Dashboard from 1280 × 900 only after rearranging content |
| Page background | `#F4F7FA` |
| Visual card background | `#FFFFFF`, subtle border `#E5ECF3` |
| Primary text | `#172B44` |
| Accent | `#0A7B83` |
| Negative / unfavorable | `#C4545A` (only when semantics make sense) |
| KPI numbers | 28–34 pt, concise units ($K/$M or %), 1–2 decimals |
| Charts | 10–12 pt axes, 12–14 pt titles, descriptive legends, no truncated dates |
| Matrix | 10–11 pt labels, right-aligned numeric values, consistent subtotal styling |

## Accuracy review before portfolio publication

- Confirm **Operating Margin Ratio** formula, denominator, percentage format and filter context. A displayed number in scientific notation is not enough to determine the intended result.
- Confirm all percentage measures are stored as fractions before applying `%` formatting; avoid double multiplying by 100.
- Verify net margin and gross margin using independently reconciled Revenue / Cost / Net Profit figures and the same reporting period.
- Check that visual cross-filtering produces coherent numbers and that financial statement vs `financials` sources are not being mixed without explanation.
- Label report dates and currency units. Avoid claiming the dashboard represents your employer’s actual confidential data unless permitted. A model query references `Net income attributable to Colgate-Palmolive Company`; verify and cite the original data source if used publicly.
- Test on a typical laptop at 100% scale, verify titles and labels are readable, click all slicers, and confirm there are no errors.
- Capture a full-page screenshot for each finalized page and write 3 specific validated findings plus 2 practical recommended actions for your GitHub README.

## Suggested work order

1. Import theme, update overall typography and page backgrounds.
2. Rebuild Dashboard with a clean KPI hierarchy.
3. Rebuild Ratios 1 from the actual ratio measures.
4. Format IS, BS, CF, WC and Ratios matrices.
5. Simplify financials and test how slicers work across each set of measures.
6. Proofread source notes, date coverage, formatting and accessible export.

**Note:** The companion theme is a valid JSON file, not a finished PBIX edit. Apply it in Power BI Desktop and save the report there.