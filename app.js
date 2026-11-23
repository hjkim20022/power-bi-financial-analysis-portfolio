'use strict';

const github = 'https://github.com/hjkim20022/';
const projects = [
  {
    id: 'financial', categoryLabel: 'Financial Reporting',
    title: 'Power BI Financial Report',
    summary: 'Explore consolidated financial statements, working capital, and profitability and liquidity ratios in an eight-page Power BI report. A separate sales page breaks down revenue and gross profit by market and product.',
    question: 'What do profitability, liquidity, and cash flow tell us about financial performance and near-term funding needs?',
    skills: ['Power BI', 'DAX', 'Financial analysis', 'KPI reporting', 'Calculation review'],
    artifact: 'Dashboard previews, PDF & PBIX',
    proof: ['Eight report pages', 'Includes financial statements, a performance dashboard, and ratio analysis.'],
    evidence: 'The Power BI Desktop export shows the report’s original figures. See the companion analysis for recalculated December 2017 ratios and balance-sheet corrections. Currency, scale, and source classifications remain unconfirmed. The forecast in the 2013–2014 sales sample still needs validation.',
    caption: 'Static analytical visuals · December 2017 · Separate sales sample: 2013–2014',
    repo: github + 'power-bi-financial-analysis-portfolio',
    pdf: 'reports/HeeJung_Kim_Financial_Portfolio.pdf',
    pdfLocal: 'reports/HeeJung_Kim_Financial_Portfolio.pdf',
    report: {
      pdf: 'reports/Original_PowerBI_Export.pdf',
      pbix: 'reports/HeeJung_Kim_Financial_Report.pbix'
    },
    groups: [{id: 'report', label: 'Power BI report'}, {id: 'analysis', label: 'Companion analysis'}],
    evidenceLabel: 'Calculation review',
    evidenceUrl: 'assets/calculation-review.png',
    details: [
      'Eight Power BI report pages cover the income statement, balance sheet, cash flow, working capital, ratio table, financial dashboard, sales dashboard, and ratio dashboard. PDF and PBIX source files are included.',
      'A seven-page analytical PDF covers an executive overview, income statement, balance sheet, cash flow, working capital, a separate sales sample, and calculation review.',
      'Source-based recalculations include gross margin of 58.50%, operating margin of 21.00%, and a current ratio of 1.04x for 2017.',
      'Closing assets of 14,666 equal liabilities of 11,926 plus equity of 2,740 in the displayed source units.',
      'The calculation review retains an unexplained gross-profit-to-EBIT bridge of 472.58. Company-labelled data has not been checked against company filings.'
    ],
    pages: [
      {title: 'Financial dashboard', group: 'report', sourcePage: 6, src: 'assets/financial-report/06-dashboard.webp', alt: 'Power BI financial dashboard exported from the supplied report, including KPI cards, charts, and financial position visuals'},
      {title: 'Ratio dashboard', group: 'report', sourcePage: 8, src: 'assets/financial-report/08-ratio-dashboard.webp', alt: 'Power BI report page with liquidity, profitability, and solvency ratio cards as exported'},
      {title: 'Income statement', group: 'report', sourcePage: 1, src: 'assets/financial-report/01-income-statement.webp', alt: 'Power BI consolidated income statement matrix covering 2007 to 2017'},
      {title: 'Balance sheet', group: 'report', sourcePage: 2, src: 'assets/financial-report/02-balance-sheet.webp', alt: 'Power BI consolidated balance sheet matrix covering 2007 to 2018'},
      {title: 'Cash flow', group: 'report', sourcePage: 3, src: 'assets/financial-report/03-cash-flow.webp', alt: 'Power BI consolidated cash flow statement with operating, investing, and financing activities'},
      {title: 'Working capital', group: 'report', sourcePage: 4, src: 'assets/financial-report/04-working-capital.webp', alt: 'Power BI consolidated working capital matrix with non-cash current assets and liabilities'},
      {title: 'Ratio table', group: 'report', sourcePage: 5, src: 'assets/financial-report/05-ratio-table.webp', alt: 'Power BI ratio table showing liquidity, profitability, and solvency measures by year'},
      {title: 'Sales dashboard', group: 'report', sourcePage: 7, src: 'assets/financial-report/07-sales-dashboard.webp', alt: 'Power BI sales sample dashboard with year, country, and product slicers, sales and profit charts, and an unvalidated forecast'},
      {title: 'Financial dashboard', src: 'assets/financial-dashboard.svg', alt: 'Static financial performance dashboard using recalculated December 2017 figures'},
      {title: 'Ratio dashboard', src: 'assets/financial-ratios-dashboard.svg', alt: 'Static financial ratios dashboard covering liquidity, profitability, and solvency'},
      {title: 'Executive overview', src: 'assets/executive-overview.png', alt: 'Executive overview page from the financial analytical PDF'},
      {title: 'Income statement', src: 'assets/income-statement.png', alt: 'Income statement analysis with reviewed financial calculations'},
      {title: 'Balance sheet', src: 'assets/balance-sheet-liquidity.png', alt: 'Balance sheet and liquidity analysis showing assets, liabilities, and equity'},
      {title: 'Cash flow', src: 'assets/cash-flow-analysis.png', alt: 'Cash flow and funding analysis from the analytical PDF'},
      {title: 'Working capital', src: 'assets/working-capital-ratios.png', alt: 'Working capital and ratio analysis'},
      {title: 'Sales sample', src: 'assets/original-sales-dashboard.png', alt: 'Screenshot of the separate 2013 to 2014 Power BI sales sample; forecast unvalidated'},
      {title: 'Calculation review', src: 'assets/calculation-review.png', alt: 'Calculation corrections and source limitations documented in the financial portfolio'}
    ]
  }
];

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const external = (url, label, className = '') => `<a href="${escapeHTML(url)}" class="${className}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}</a>`;
const download = (url, label, className = '') => `<a href="${escapeHTML(url)}" class="${className}" download>${escapeHTML(label)}</a>`;
const tags = project => project.skills.map(skill => `<span class="tag">${escapeHTML(skill)}</span>`).join('');
const pageGroup = page => page.group || 'analysis';
const pageCaption = (project, page) => page.group === 'report'
  ? `Power BI Desktop export · PDF page ${page.sourcePage} of 8 · Displayed figures preserved`
  : project.caption;

function groupButtons(project, viewer = false) {
  if (!project.groups) return '';
  return `<div class="preview-groups" role="group" aria-label="${viewer ? 'Viewer' : 'Preview'} collection">
    ${project.groups.map((group, index) => {
      const data = viewer ? 'data-viewer-group' : `data-card-group="${project.id}" data-group`;
      return `<button type="button" class="preview-group ${index === 0 ? 'selected' : ''}" ${data}="${group.id}" aria-pressed="${index === 0}">${group.label}</button>`;
    }).join('')}
  </div>`;
}

function artifactLinks(project, viewer = false) {
  const links = [];
  if (project.report) {
    links.push(external(project.report.pdf, 'Power BI report PDF'));
    links.push(download(project.report.pbix, 'Download Power BI file (.pbix)'));
  }
  if (project.pdf) {
    links.push(external(viewer ? project.pdfLocal : project.pdf, project.report ? 'Analytical review PDF' : 'Portfolio PDF'));
  }
  if (project.workbook) links.push(download(project.workbook, 'Download Excel workbook'));
  if (project.source) links.push(external(project.source.url, project.source.label));
  links.push(external(project.evidenceUrl, project.evidenceLabel));
  return links.join('');
}

const cardPages = new Map(projects.map(project => [project.id, 0]));
const list = document.querySelector('#project-list');
list.innerHTML = projects.map(project => {
  const [headline, support] = project.proof;
  const firstPage = project.pages[0];
  return `<article class="project-card" id="project-${project.id}" aria-labelledby="title-${project.id}">
    <div class="card-top"><span class="project-label">${escapeHTML(project.categoryLabel)}</span><span class="artifact-label">${escapeHTML(project.artifact)}</span></div>
    <div class="card-main">
      <div class="card-gallery">
        ${groupButtons(project)}
        <button type="button" class="dashboard-button" data-open="${project.id}" aria-label="Enlarge ${escapeHTML(project.title)} preview">
          <img id="preview-${project.id}" src="${firstPage.src}" alt="${escapeHTML(firstPage.alt)}" loading="lazy">
          <span class="preview-expand">Enlarge preview</span>
        </button>
        <div class="page-tabs" role="group" aria-label="${escapeHTML(project.title)} preview pages">
          ${project.pages.map((page, index) => `<button type="button" class="page-tab ${index === 0 ? 'selected' : ''}" data-card="${project.id}" data-index="${index}" aria-pressed="${index === 0}" ${pageGroup(page) === pageGroup(firstPage) ? '' : 'hidden'}>${escapeHTML(page.title)}</button>`).join('')}
        </div>
        <p class="preview-caption" id="caption-${project.id}">${escapeHTML(pageCaption(project, firstPage))}</p>
      </div>
      <div class="card-copy">
        <h1 id="title-${project.id}">${escapeHTML(project.title)}</h1>
        <p class="project-summary">${escapeHTML(project.summary)}</p>
        <div class="tags">${tags(project)}</div>
        <div class="proof"><strong>${escapeHTML(headline)}</strong><span>${escapeHTML(support)}</span></div>
        <div class="card-links">
          <button type="button" class="button primary" data-open="${project.id}">View project</button>
          ${external(project.repo, 'View on GitHub', 'button secondary')}
        </div>
        <div class="artifact-links">${artifactLinks(project)}</div>
      </div>
    </div>
  </article>`;
}).join('');

function selectCardPage(project, index) {
  cardPages.set(project.id, index);
  const img = document.querySelector(`#preview-${project.id}`);
  img.src = project.pages[index].src;
  img.alt = project.pages[index].alt;
  document.querySelector(`#caption-${project.id}`).textContent = pageCaption(project, project.pages[index]);
  document.querySelectorAll(`[data-card="${project.id}"]`).forEach(tab => {
    const active = Number(tab.dataset.index) === index;
    tab.hidden = pageGroup(project.pages[Number(tab.dataset.index)]) !== pageGroup(project.pages[index]);
    tab.classList.toggle('selected', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll(`[data-card-group="${project.id}"]`).forEach(button => {
    const active = button.dataset.group === pageGroup(project.pages[index]);
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
document.querySelectorAll('[data-card]').forEach(button => button.addEventListener('click', () => {
  selectCardPage(projects.find(item => item.id === button.dataset.card), Number(button.dataset.index));
}));
document.querySelectorAll('[data-card-group]').forEach(button => button.addEventListener('click', () => {
  const project = projects.find(item => item.id === button.dataset.cardGroup);
  selectCardPage(project, project.pages.findIndex(page => pageGroup(page) === button.dataset.group));
}));

const dialog = document.querySelector('#project-dialog');
let currentProject = null;
let currentPage = 0;
let zoom = 100;
const viewerIndices = () => currentProject.pages.map((page, index) => ({page, index})).filter(item => pageGroup(item.page) === pageGroup(currentProject.pages[currentPage])).map(item => item.index);
function setZoom(value) {
  zoom = Math.min(250, Math.max(100, value));
  document.querySelector('#viewer-image').style.width = `${zoom}%`;
  document.querySelector('#zoom-level').textContent = `${zoom}%`;
  document.querySelector('#zoom-out').disabled = zoom === 100;
  document.querySelector('#zoom-in').disabled = zoom === 250;
}
function renderPage() {
  const page = currentProject.pages[currentPage];
  const img = document.querySelector('#viewer-image');
  img.src = page.src;
  img.alt = page.alt;
  document.querySelector('#viewer-name').textContent = page.title;
  document.querySelector('#full-image').href = page.src;
  const indices = viewerIndices();
  const position = indices.indexOf(currentPage);
  document.querySelector('#viewer-counter').textContent = `${position + 1} / ${indices.length}`;
  document.querySelector('#viewer-note').textContent = pageCaption(currentProject, page);
  document.querySelector('#previous-page').disabled = position === 0;
  document.querySelector('#next-page').disabled = position === indices.length - 1;
  document.querySelectorAll('[data-viewer-group]').forEach(button => {
    const active = button.dataset.viewerGroup === pageGroup(page);
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-viewer-page]').forEach(button => {
    const active = Number(button.dataset.viewerPage) === currentPage;
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  setZoom(100);
  document.querySelector('#viewer-stage').scrollTo(0, 0);
}
function showProject(id, pageIndex) {
  currentProject = projects.find(project => project.id === id);
  if (!currentProject) return;
  currentPage = pageIndex ?? cardPages.get(id) ?? 0;
  document.querySelector('#dialog-title').textContent = currentProject.title;
  document.querySelector('#dialog-category').textContent = currentProject.categoryLabel;
  document.querySelector('#dialog-question').textContent = currentProject.question;
  document.querySelector('#dialog-skills').innerHTML = tags(currentProject);
  document.querySelector('#dialog-details').innerHTML = currentProject.details.map(detail => `<li>${escapeHTML(detail)}</li>`).join('');
  document.querySelector('#dialog-evidence').textContent = currentProject.evidence;
  document.querySelector('#dialog-links').innerHTML = external(currentProject.repo, 'Project repository', 'button primary')
    + `<div class="artifact-links">${artifactLinks(currentProject, true)}</div>`;
  document.querySelector('#viewer-groups').innerHTML = groupButtons(currentProject, true);
  document.querySelectorAll('[data-viewer-group]').forEach(button => button.addEventListener('click', () => {
    currentPage = currentProject.pages.findIndex(page => pageGroup(page) === button.dataset.viewerGroup);
    renderThumbnails();
    renderPage();
  }));
  renderThumbnails();
  renderPage();
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.scrollTop = 0;
}
function renderThumbnails() {
  document.querySelector('#viewer-thumbnails').innerHTML = viewerIndices().map(index => {
    const page = currentProject.pages[index];
    return `<button class="thumbnail" data-viewer-page="${index}" aria-pressed="false" aria-label="Show ${escapeHTML(page.title)}"><img src="${page.src}" alt="" loading="lazy"><span>${escapeHTML(page.title)}</span></button>`;
  }).join('');
  document.querySelectorAll('[data-viewer-page]').forEach(button => button.addEventListener('click', () => {
    currentPage = Number(button.dataset.viewerPage);
    renderPage();
  }));
}
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => showProject(button.dataset.open, button.dataset.page === undefined ? undefined : Number(button.dataset.page))));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
function movePage(offset) {
  const indices = viewerIndices();
  const next = indices.indexOf(currentPage) + offset;
  if (next >= 0 && next < indices.length) { currentPage = indices[next]; renderPage(); }
}
document.querySelector('#previous-page').addEventListener('click', () => movePage(-1));
document.querySelector('#next-page').addEventListener('click', () => movePage(1));
document.querySelector('#zoom-out').addEventListener('click', () => setZoom(zoom - 25));
document.querySelector('#zoom-in').addEventListener('click', () => setZoom(zoom + 25));
document.querySelector('#zoom-fit').addEventListener('click', () => { setZoom(100); document.querySelector('#viewer-stage').scrollTo(0, 0); });
dialog.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); movePage(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); movePage(1); }
});
