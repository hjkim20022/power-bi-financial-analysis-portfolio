# Power BI Financial Analysis Portfolio

**HeeJung Kim**  
**Financial Reporting · Business Intelligence · Power BI · DAX · Data Visualization**

This is my financial analysis portfolio project, organized around an eight-page Power BI report. The report brings together financial statements, profitability measures, working capital, and key financial ratios. My focus is on making financial performance easier to interpret through clear KPIs, consistent calculations, and useful visuals.

The repository includes an **interactive website walkthrough** of the report structure and proposed visual improvements. The walkthrough is a **design prototype**; it is not the live Power BI Service report, and the redesigned pages have not yet all been implemented in the PBIX.

## Explore my project

| Resource | What it contains |
|---|---|
| [Portfolio website source](./index.html) | Interactive, eight-page financial-reporting walkthrough |
| [Report redesign plan](./POWERBI_REDESIGN_GUIDE.md) | Layout, DAX review, financial-ratio and reporting recommendations |
| [Implementation checklist](./IMPLEMENTATION_CHECKLIST.md) | Outstanding work to complete and validate in Power BI Desktop |
| [Power BI theme](./powerbi-theme.json) | Consistent navy-and-teal visual theme |
| [Report layout reference](./assets/original-report-schematic.svg) | A labeled schematic of the original dashboard, not a screenshot |

**GitHub Pages website:** `https://hjkim20022.github.io/power-bi-financial-analysis-portfolio/`  
*Use the website link once GitHub Pages deployment has been verified. The repository itself is public and accessible without a Power BI account.*

## Report overview

| Page | Financial question explored |
|---|---|
| Dashboard | How are revenue, cost of sales, gross profit, and net profit performing? |
| IS — Income Statement | How do revenues and expenses contribute to earnings? |
| BS — Balance Sheet | What are the assets, liabilities, and equity balances? |
| CF — Cash Flow | How do operating, investing, and financing activities affect cash? |
| WC — Working Capital | What does the short-term liquidity position look like? |
| Ratios | What do the financial ratios indicate? |
| Ratios 1 | How can liquidity, profitability, and solvency be compared? |
| Financials | What trends and categories influence financial performance? |

## Example KPI snapshot

The following numbers are displayed on the **original Power BI dashboard**. They are shown here as report examples, not independently audited results. The reporting period and currency should be confirmed in the source model before interpreting them.

| KPI | Displayed value |
|---|---:|
| Revenue | 18.90K |
| Cost of goods sold (COGS) | 7.84K |
| Gross profit | 11.06K |
| Net profit | 2.55K |

The source dashboard also includes profitability gauges and revenue charts. The redesigned concept presents the four main KPIs first and makes the detailed analysis easier to navigate.

## Tools and analytical skills

- **Power BI:** report design, financial dashboards, and analytical visuals
- **DAX:** calculations for financial KPIs and ratio analysis
- **Financial analysis:** income statement, balance sheet, cash flow, working capital, profitability, and solvency
- **Data validation:** checking calculations, date filters, numerical formats, and reconciliation logic
- **Portfolio presentation:** documenting business questions, report structure, and design decisions

## Report quality and next improvements

The original Power BI report contains eight pages. I am refining its visual presentation and reviewing financial measures before publishing a final set of dashboard screenshots.

The priorities are to simplify the Dashboard, organize Ratios 1 into liquidity/profitability/solvency sections, correct confusing number formatting, check calculation context, and make every page consistent.

One value in the original dashboard was displayed in scientific notation (`1.25E-5`) for Operating Margin Ratio. I will validate its DAX formula and formatting before drawing conclusions from it. Net Profit Margin displayed `0.24`; whether that should appear as a percentage also requires confirmation of the measure definition.

The **PBIX file and embedded data model are not included** in this public repository. This project is presented as independent portfolio work, not as an employer engagement or a claim of audited business results.

## More of my work

- [Accounts Receivable Collection Portfolio](https://github.com/hjkim20022/HeeJung_Kim_AR_Collection_Portfolio)
- [Enterprise Retail Analytics Platform](https://github.com/hjkim20022/enterprise-retail-analytics-platform)
- [Databricks CI/CD Pipeline](https://github.com/hjkim20022/databricks-cicd-project)

**Contact:** [LinkedIn](https://www.linkedin.com/in/hee-jung-kim-1428781bb/) · [GitHub profile](https://github.com/hjkim20022)
