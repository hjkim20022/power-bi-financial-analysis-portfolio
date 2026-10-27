# Power BI Financial Analysis Portfolio

### HeeJung Kim · Project Owner

**Financial Analysis · Power BI · DAX · KPI Reporting · Data Visualization**

This independent portfolio project presents my eight-page Power BI financial report and the analytical questions behind it. I use financial statements, profitability measures, working capital, and ratio analysis to examine business performance and communicate key financial information clearly.

The original Power BI report exists, and I am refining its design and validating selected measures. This public repository provides a **project case study, visual redesign concepts, and implementation documentation** that employers can review without signing in to Power BI.

**[Explore the visual portfolio](./index.html)** · **[Review the Power BI improvement plan](./POWERBI_REDESIGN_GUIDE.md)** · **[GitHub profile](https://github.com/hjkim20022)**

**Project ownership:** HeeJung Kim owns and maintains this GitHub repository. This is **personal portfolio work**, not a project delivered to an employer or client.

## Project highlights

- **Executive reporting:** KPIs for revenue, cost of goods sold, gross profit, and net profit.
- **Financial statement analysis:** Income Statement, Balance Sheet, and Cash Flow reporting.
- **Liquidity and financial health:** Working Capital, profitability margins, liquidity ratios, and leverage ratios.
- **Reporting design:** Information hierarchy, understandable number formats, consistent styling, and clear navigation.
- **Data quality:** Reviewing DAX measures, filter context, accounting reconciliations, and differences between model sources.

## Financial report pages

| Page | Business purpose | Design improvement |
|---|---|---|
| **Dashboard** | Summarize financial performance | Executive KPI cards, concise comparisons, readable trends |
| **IS — Income Statement** | Analyze revenues, expenses, and earnings | Strong subtotal hierarchy and consistent number formats |
| **BS — Balance Sheet** | Review assets, liabilities, and equity | Clear groupings and balance checks |
| **CF — Cash Flow** | Examine operating, investing, and financing activities | Clean activity sections and reconciled cash movements |
| **WC — Working Capital** | Assess short-term liquidity | Current assets/liabilities and working capital reporting |
| **Ratios** | Review detailed financial measures | Logical groups, definitions, and percent-vs-multiple formatting |
| **Financials** | Explore revenue and profit drivers | Clear slicers, period trends, and category analysis |
| **Ratios 1** | Compare profitability, liquidity, and solvency | Three financial-health sections instead of crowded multi-row cards |

## Portfolio gallery

These eight illustrations are **conceptual design previews**, not screenshots of finalized Power BI pages. They show proposed page structure and styling. Source report calculations and data-dependent charts must be verified in Power BI Desktop before being represented as completed results.

| Dashboard — Executive Overview | IS — Income Statement |
|:---:|:---:|
| [![Executive dashboard redesign concept](assets/01_dashboard.svg)](assets/01_dashboard.svg) | [![Income statement redesign concept](assets/02_income_statement.svg)](assets/02_income_statement.svg) |

| BS — Balance Sheet | CF — Cash Flow |
|:---:|:---:|
| [![Balance sheet redesign concept](assets/03_balance_sheet.svg)](assets/03_balance_sheet.svg) | [![Cash flow redesign concept](assets/04_cash_flow.svg)](assets/04_cash_flow.svg) |

| WC — Working Capital | Ratios — Financial Ratios |
|:---:|:---:|
| [![Working capital redesign concept](assets/05_working_capital.svg)](assets/05_working_capital.svg) | [![Financial ratios redesign concept](assets/06_ratios.svg)](assets/06_ratios.svg) |

| Financials — Detailed Financials | Ratios 1 — Financial Health |
|:---:|:---:|
| [![Detailed financials redesign concept](assets/07_financials.svg)](assets/07_financials.svg) | [![Financial health redesign concept](assets/08_ratios_trends.svg)](assets/08_ratios_trends.svg) |

## Original dashboard KPI snapshot

The following amounts were **displayed on the original Power BI Service dashboard**. They are recorded as examples of the report, not independently audited results. Reporting period and currency are not yet confirmed here.

| Measure | Value displayed |
|---|---:|
| Revenue | 18.90K |
| Cost of goods sold | 7.84K |
| Gross profit | 11.06K |
| Net profit | 2.55K |

A [labeled schematic of the original layout](assets/original-report-schematic.svg) is included as a reference. It is **not** a screenshot or a replacement for the original Power BI file.

**Calculation review:** The original dashboard displayed Operating Margin Ratio as `1.25E-5` and Net Profit Margin as `0.24`. The correct interpretation and formatting are pending a review of the DAX expressions, data types, reporting periods, and filter context. No corrected values are claimed here.

## Technical approach and evidence

| Area | How it relates to the project |
|---|---|
| Power BI | Eight-page financial report and existing analytical visuals |
| DAX | KPI and ratio measures requiring consistent calculation and formatting |
| Power Query / data model | Financial report transformations and model relationships to be reviewed |
| Financial analysis | Profitability, liquidity, statement structure, and reconciliation |
| Portfolio presentation | Page-level design concepts and documented improvement priorities |

**Completed:** original eight-page report, GitHub case study, portfolio gallery, visual theme, and redesign specifications.

**In progress:** applying the redesign to the source PBIX, verifying ratios and report data, confirming source attribution, and capturing actual finalized screenshots. See the [implementation checklist](IMPLEMENTATION_CHECKLIST.md).

The original `.pbix` and embedded data are **not publicly included**. I will confirm the source data's origin and publication rights before adding any dataset or Power BI export. The public gallery is not a live Power BI report.

## Repository contents

| File or folder | Contents |
|---|---|
| [`index.html`](index.html) | Portfolio website presenting the report and planned improvements |
| [`assets/`](assets/) | Eight labeled concept illustrations and an original-layout schematic |
| [`POWERBI_REDESIGN_GUIDE.md`](POWERBI_REDESIGN_GUIDE.md) | Page-by-page design and measure-review specifications |
| [`IMPLEMENTATION_CHECKLIST.md`](IMPLEMENTATION_CHECKLIST.md) | Remaining validation and report-production steps |
| [`powerbi-theme.json`](powerbi-theme.json) | Consistent Power BI colour and typography settings |

## More projects

- [Accounts Receivable & Collections Analytics](https://github.com/hjkim20022/HeeJung_Kim_AR_Collection_Portfolio)
- [Enterprise Retail Analytics Platform](https://github.com/hjkim20022/enterprise-retail-analytics-platform)
- [Databricks CI/CD Project](https://github.com/hjkim20022/databricks-cicd-project)

**HeeJung Kim — Project Owner** · [GitHub](https://github.com/hjkim20022) · [LinkedIn](https://www.linkedin.com/in/hee-jung-kim-1428781bb/)

*This repository is a public case study. The intended [GitHub Pages website](https://hjkim20022.github.io/power-bi-financial-analysis-portfolio/) should be tested independently before adding it to job applications.*
