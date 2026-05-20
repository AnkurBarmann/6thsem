// Engineering Hydrology (CE-301) Dashboard - Standalone Plain JS
// Uses globals from data.js and KaTeX auto-render from CDN.

document.addEventListener('DOMContentLoaded', () => {
  let activeTab = 'priority';
  let searchTerm = '';
  let selectedModule = 'all';
  let selectedYear = 'all';
  let selectedDifficulty = 'all';
  let selectedType = 'all';
  let filterRepeated = false;
  let filterImportant = false;
  let filterProbable = false;
  let filterConceptual = false;
  let filterFormula = false;
  let sortBy = 'year-desc';
  let currentZoom = 100;

  const SYLLABUS_KEY = 'astu_hydrology_syllabus_checklist';
  const TIMETABLE_KEY = 'astu_hydrology_timetable_checklist';

  let syllabusChecklist = JSON.parse(localStorage.getItem(SYLLABUS_KEY)) || {};
  let timetableChecklist = JSON.parse(localStorage.getItem(TIMETABLE_KEY)) || {};

  const tabButtons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.dashboard-section');
  const questionsGrid = document.getElementById('questions-grid');

  const searchInput = document.getElementById('search-input');
  const moduleSelect = document.getElementById('module-select');
  const yearSelect = document.getElementById('year-select');
  const diffSelect = document.getElementById('diff-select');
  const typeSelect = document.getElementById('type-select');

  const cbRepeated = document.getElementById('cb-repeated');
  const cbImportant = document.getElementById('cb-important');
  const cbProbable = document.getElementById('cb-probable');
  const cbConceptual = document.getElementById('cb-conceptual');
  const cbFormula = document.getElementById('cb-formula');

  const sortSelect = document.getElementById('sort-select');
  const btnReset = document.getElementById('btn-reset');
  const matchCount = document.getElementById('match-count');

  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalDone = document.getElementById('modal-done');
  const modalYear = document.getElementById('modal-year');
  const modalMarks = document.getElementById('modal-marks');
  const modalModule = document.getElementById('modal-module');
  const modalDifficulty = document.getElementById('modal-difficulty');
  const modalQnum = document.getElementById('modal-qnum');
  const modalQuestionText = document.getElementById('modal-question-text');
  const modalAnswerArea = document.getElementById('modal-answer-area');

  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomReset = document.getElementById('btn-zoom-reset');
  const zoomText = document.getElementById('zoom-text');

  const btnCopyQ = document.getElementById('btn-copy-q');
  const btnCopyA = document.getElementById('btn-copy-a');

  const progressCovered = document.getElementById('progress-covered');
  const progressFill = document.getElementById('progress-fill');

  function switchTab(tabId) {
    activeTab = tabId;
    tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    sections.forEach(sec => sec.classList.toggle('active', sec.id === `${tabId}-section`));
    if (tabId === 'pyq-bank') renderQuestions();
    else if (tabId === 'syllabus') renderSyllabusList();
    else if (tabId === 'timetable') renderTimetable();
    renderMath();
  }

  tabButtons.forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

  function getFilteredQuestions() {
    return questionsDB.filter(q => {
      const query = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm ||
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query) ||
        q.concept.toLowerCase().includes(query) ||
        q.formula.toLowerCase().includes(query);
      const matchesModule = selectedModule === 'all' || q.module.toString() === selectedModule;
      const matchesYear = selectedYear === 'all' || q.year.toString() === selectedYear;
      const matchesDifficulty = selectedDifficulty === 'all' || q.diff === selectedDifficulty;
      const matchesType = selectedType === 'all' || q.qtype === selectedType;
      const matchesRepeated = !filterRepeated || q.repeated;
      const matchesImportant = !filterImportant || q.importance === 'High';
      const matchesProbable = !filterProbable || q.probable;
      const matchesConceptual = !filterConceptual || q.qtype === 'Theory';
      const matchesFormula = !filterFormula || q.qtype === 'Numerical';
      return matchesSearch && matchesModule && matchesYear && matchesDifficulty && matchesType &&
        matchesRepeated && matchesImportant && matchesProbable && matchesConceptual && matchesFormula;
    });
  }

  function renderQuestions() {
    if (!questionsGrid) return;
    let filtered = getFilteredQuestions();
    filtered.sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      if (sortBy === 'marks-desc') return b.marks - a.marks;
      if (sortBy === 'marks-asc') return a.marks - b.marks;
      const rank = { 'Hard': 3, 'Medium': 2, 'Easy': 1 };
      if (sortBy === 'diff-desc') return rank[b.diff] - rank[a.diff];
      if (sortBy === 'diff-asc') return rank[a.diff] - rank[b.diff];
      return 0;
    });

    if (matchCount) matchCount.textContent = `Showing ${filtered.length} of ${questionsDB.length} PYQs`;
    questionsGrid.innerHTML = '';

    if (filtered.length === 0) {
      questionsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; background-color: var(--card-bg); padding: 3rem; text-align: center; border-radius: 0.75rem; border: 1px dashed var(--border-color)">
          <div style="font-size: 2rem; margin-bottom: 0.5rem">🔍</div>
          <h3 style="margin-bottom: 0.25rem">No Matching Questions</h3>
          <p style="font-size: 0.85rem; color: #64748b; margin: 0">Adjust your search or filters.</p>
        </div>`;
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement('div');
      card.className = 'card';
      const diffBadge = `<span class="badge badge-diff-${q.diff.toLowerCase()}">${q.diff}</span>`;
      const repeatedLabel = q.repeated ? `<span class="badge" style="background-color:#fef2f2;color:#991b1b;border:1px solid #fecaca">Repeated</span>` : '';
      const probableLabel = q.probable ? `<span class="badge" style="background-color:#faf5ff;color:#6b21a8;border:1px solid #e9d5ff">Probable 2026</span>` : '';

      let quickHint = "Focus on clear sketches and core definitions.";
      if (q.id.includes('phi')) quickHint = "Find rain hours where intensity exceeds Φ. Infiltration depth = P − Runoff.";
      if (q.id.includes('musk')) quickHint = "C0 + C1 + C2 = 1. Outflow lags inflow by ~ K.";
      if (q.id.includes('scurve')) quickHint = "Accumulate S-curve by lagging unit hydrographs.";
      if (q.id.includes('snyder')) quickHint = "Use t_p = C_t (L·L_ca)^0.3; adjust for required t_R.";
      if (q.id.includes('gumbel')) quickHint = "Reduced variate y_T = −ln(−ln(1 − 1/T)).";
      if (q.id.includes('evap')) quickHint = "Match volumes (m³). 1 ha-m = 10⁴ m³.";
      if (q.id.includes('humidity')) quickHint = "Saturation pressure uses dry bulb; actual uses dew point.";
      if (q.id.includes('adequacy')) quickHint = "Standard error E_s = C_v / √m; N = (C_v/ε)².";

      card.innerHTML = `
        <div style="margin-bottom: 1rem">
          <div class="badge-group" style="margin-bottom: 0.75rem">
            <span class="badge badge-year">${q.year}</span>
            <span class="badge badge-marks">${q.marks} Marks</span>
            <span class="badge badge-module">Mod ${q.module}</span>
            ${diffBadge}
          </div>
          <div style="font-size: 0.75rem; color: #92400e; font-weight: 700; font-family: 'JetBrains Mono', monospace; margin-bottom: 0.25rem">${q.qnum}</div>
          <div class="question-body" style="font-size: 0.875rem; font-weight: 600; line-height: 1.5; color: var(--text-color); margin-bottom: 1rem">
            ${q.question}
          </div>
          <div class="note-box" style="margin: 0.75rem 0; padding: 0.5rem 0.75rem; font-size: 0.75rem; border-left-width: 3px; display: flex; gap: 0.5rem">
            <span style="font-size: 0.85rem">💡</span>
            <div><b style="color:#1d4ed8">Quick Hint:</b> <span style="color:#1e3a8a">${quickHint}</span></div>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.75rem; margin-top: auto">
          <div style="display: flex; gap: 0.25rem">${repeatedLabel}${probableLabel}</div>
          <button class="view-sol-btn" style="background-color: var(--primary-accent); color:#fff; border:none; padding:0.375rem 0.75rem; border-radius:0.375rem; font-size:0.75rem; font-weight:700; cursor:pointer">
            📖 View Solution
          </button>
        </div>`;

      card.querySelector('.view-sol-btn').addEventListener('click', () => openModal(q));
      questionsGrid.appendChild(card);
    });

    renderMath();
  }

  if (searchInput) searchInput.addEventListener('input', (e) => { searchTerm = e.target.value; renderQuestions(); });
  if (moduleSelect) moduleSelect.addEventListener('change', (e) => { selectedModule = e.target.value; renderQuestions(); });
  if (yearSelect) yearSelect.addEventListener('change', (e) => { selectedYear = e.target.value; renderQuestions(); });
  if (diffSelect) diffSelect.addEventListener('change', (e) => { selectedDifficulty = e.target.value; renderQuestions(); });
  if (typeSelect) typeSelect.addEventListener('change', (e) => { selectedType = e.target.value; renderQuestions(); });
  if (cbRepeated) cbRepeated.addEventListener('change', (e) => { filterRepeated = e.target.checked; renderQuestions(); });
  if (cbImportant) cbImportant.addEventListener('change', (e) => { filterImportant = e.target.checked; renderQuestions(); });
  if (cbProbable) cbProbable.addEventListener('change', (e) => { filterProbable = e.target.checked; renderQuestions(); });
  if (cbConceptual) cbConceptual.addEventListener('change', (e) => { filterConceptual = e.target.checked; renderQuestions(); });
  if (cbFormula) cbFormula.addEventListener('change', (e) => { filterFormula = e.target.checked; renderQuestions(); });
  if (sortSelect) sortSelect.addEventListener('change', (e) => { sortBy = e.target.value; renderQuestions(); });

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (moduleSelect) moduleSelect.value = 'all';
      if (yearSelect) yearSelect.value = 'all';
      if (diffSelect) diffSelect.value = 'all';
      if (typeSelect) typeSelect.value = 'all';
      if (cbRepeated) cbRepeated.checked = false;
      if (cbImportant) cbImportant.checked = false;
      if (cbProbable) cbProbable.checked = false;
      if (cbConceptual) cbConceptual.checked = false;
      if (cbFormula) cbFormula.checked = false;
      searchTerm = ''; selectedModule = 'all'; selectedYear = 'all';
      selectedDifficulty = 'all'; selectedType = 'all';
      filterRepeated = filterImportant = filterProbable = filterConceptual = filterFormula = false;
      sortBy = 'year-desc';
      renderQuestions();
    });
  }

  window.navigateToPyq = (type, value) => {
    if (type === 'module') {
      selectedModule = value;
      if (moduleSelect) moduleSelect.value = value;
    } else if (type === 'search') {
      searchTerm = value;
      if (searchInput) searchInput.value = value;
    }
    switchTab('pyq-bank');
  };

  function buildNotationBox() {
    return `<div class="note-box"><b>📝 Notation & Units:</b> Use standard hydrology notation. Discharge in $\\text{m}^3/\\text{s}$, rainfall/runoff in cm or mm, area in $\\text{km}^2$, time in hours.</div>`;
  }
  function buildSummaryBox(q) {
    return `<div class="summary-box">📌 <b>Summary:</b> This question tests <b>${q.concept}</b>. State the governing equation, substitute carefully, present final answer with units.</div>`;
  }
  function buildApproachBox() {
    return `<div class="note-box">💡 <b>Approach / Hint:</b> Start with the core formula, show unit conversions, solve step by step, box the final answer.</div>`;
  }
  function buildRelatedInline(q) {
    const ids = relatedPyqMap[q.id] || [];
    if (!ids.length) return '';
    const buttons = ids.map(id => {
      const rq = questionsDB.find(x => x.id === id);
      if (!rq) return '';
      return `<button class="related-jump-btn" data-related-id="${rq.id}">
        <div style="font-size:0.68rem;font-weight:700;color:var(--primary-accent);font-family:'JetBrains Mono',monospace;margin-bottom:0.2rem;">${rq.year} • ${rq.qnum}</div>
        <div style="font-size:0.82rem;font-weight:600;">${rq.concept}</div>
      </button>`;
    }).join('');
    return `<div class="related-inline"><h4>Related PYQs</h4><div class="related-chip-grid">${buttons}</div></div>`;
  }
  function formatDisplayMath(html) {
    return html.replace(/\s*\$\$([\s\S]*?)\$\$\s*/g, (_, eq) => `<div class="math-display-block">$$${eq.trim()}$$</div>`);
  }
  function ensureBookFormat(q) {
    let html = (q.answer || '').trim();
    if (!/<h4[\s>]/i.test(html)) html = `<h4>Structured Solution</h4>${html}`;
    let noteCount = (html.match(/class=["']note-box["']/gi) || []).length;
    const hasSummary = /class=["']summary-box["']/i.test(html);
    if (noteCount === 0) { html += buildNotationBox(); noteCount += 1; }
    if (!hasSummary) html += buildSummaryBox(q);
    if (noteCount < 2) html += buildApproachBox();
    html += buildRelatedInline(q);
    html = formatDisplayMath(html);
    return `<article class="answer-book">${html}</article>`;
  }

  function openModal(q) {
    if (!modalOverlay) return;
    currentZoom = 100;
    updateZoomClass();
    modalYear.textContent = q.year;
    modalMarks.textContent = `${q.marks} Marks`;
    modalModule.textContent = `Module ${q.module}`;
    modalDifficulty.textContent = q.diff;
    modalDifficulty.className = `badge badge-diff-${q.diff.toLowerCase()}`;
    modalQnum.textContent = q.qnum;
    modalQuestionText.innerHTML = q.question;
    modalAnswerArea.innerHTML = ensureBookFormat(q);
    modalQuestionText.scrollTop = 0;
    modalAnswerArea.scrollTop = 0;
    modalOverlay.style.display = 'flex';
    renderMath(modalAnswerArea);
    renderMath(modalQuestionText);
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.style.display = 'none';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDone) modalDone.addEventListener('click', closeModal);

  if (modalAnswerArea) {
    modalAnswerArea.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-related-id]');
      if (!btn) return;
      const target = questionsDB.find(q => q.id === btn.getAttribute('data-related-id'));
      if (target) openModal(target);
    });
  }

  if (btnZoomIn) btnZoomIn.addEventListener('click', () => { currentZoom = Math.min(200, currentZoom + 10); updateZoomClass(); });
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => { currentZoom = Math.max(70, currentZoom - 10); updateZoomClass(); });
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => { currentZoom = 100; updateZoomClass(); });

  function updateZoomClass() {
    if (zoomText) zoomText.textContent = `${currentZoom}%`;
    if (!modalAnswerArea) return;
    modalAnswerArea.className = 'modal-answer-area';
    if (currentZoom <= 75) modalAnswerArea.classList.add('zoom-xs');
    else if (currentZoom <= 95) modalAnswerArea.classList.add('zoom-sm');
    else if (currentZoom <= 105) modalAnswerArea.classList.add('zoom-base');
    else if (currentZoom <= 125) modalAnswerArea.classList.add('zoom-lg');
    else if (currentZoom <= 145) modalAnswerArea.classList.add('zoom-xl');
    else modalAnswerArea.classList.add('zoom-2xl');
  }

  if (btnCopyQ) {
    btnCopyQ.addEventListener('click', () => {
      navigator.clipboard.writeText(modalQuestionText.innerText).then(() => {
        btnCopyQ.textContent = 'Copied!';
        setTimeout(() => btnCopyQ.textContent = 'Copy Question', 1500);
      });
    });
  }
  if (btnCopyA) {
    btnCopyA.addEventListener('click', () => {
      const clone = modalAnswerArea.cloneNode(true);
      const r = clone.querySelector('.related-inline');
      if (r) r.remove();
      navigator.clipboard.writeText(clone.innerText).then(() => {
        btnCopyA.textContent = 'Copied!';
        setTimeout(() => btnCopyA.textContent = 'Copy Answer', 1500);
      });
    });
  }

  const syllabusTopics = [
    { id: 'sb-phi', text: 'Φ-index & infiltration indices calculation', cat: 'must-study' },
    { id: 'sb-musk', text: 'Muskingum flood routing equation & table', cat: 'must-study' },
    { id: 'sb-scurve', text: 'S-curve derivation & UH duration conversion', cat: 'must-study' },
    { id: 'sb-snyder', text: "Snyder's Synthetic UH lag & peak", cat: 'must-study' },
    { id: 'sb-gumbel', text: "Gumbel's peak flood 100/200/500yr prediction", cat: 'must-study' },
    { id: 'sb-gauge', text: 'Raingauge network adequacy & error', cat: 'must-study' },
    { id: 'sb-baseflow', text: 'Base flow separation (3 methods)', cat: 'must-study' },
    { id: 'sb-evap-wb', text: 'Water budget method for reservoir evaporation', cat: 'study' },
    { id: 'sb-evap-eb', text: 'Energy budget method for lake evaporation', cat: 'study' },
    { id: 'sb-humid', text: 'Relative & specific humidity from dew point', cat: 'study' },
    { id: 'sb-dmc', text: 'Double Mass Curve consistency', cat: 'study' },
    { id: 'sb-rational', text: 'Rational method peak discharge', cat: 'study' },
    { id: 'sb-stream', text: 'Stream order & density', cat: 'study' },
    { id: 'sb-eq-qe', text: 'S-curve equilibrium discharge (2.778 A/D)', cat: 'study' },
    { id: 'sb-precip-def', text: 'Precipitation types (convective, orographic, frontal)', cat: 'skim' },
    { id: 'sb-hydro-cycle', text: 'Hydrologic cycle schematic & components', cat: 'skim' },
    { id: 'sb-fdc', text: 'Flow duration curve & dependability', cat: 'skim' },
    { id: 'sb-series', text: 'Annual vs Partial duration series', cat: 'skim' },
    { id: 'sb-stv', text: 'Saint-Venant hydraulic routing proof', cat: 'skip' },
    { id: 'sb-waterbudg', text: 'Global water budget details', cat: 'skip' }
  ];

  function renderSyllabusList() {
    ['must-study', 'study', 'skim', 'skip'].forEach(cat => {
      const container = document.getElementById(`syllabus-${cat}-list`);
      if (!container) return;
      container.innerHTML = '';
      syllabusTopics.filter(t => t.cat === cat).forEach(item => {
        const label = document.createElement('label');
        Object.assign(label.style, { display: 'flex', alignItems: 'start', gap: '0.75rem', marginBottom: '0.75rem', cursor: 'pointer' });
        const checked = syllabusChecklist[item.id] || false;
        label.innerHTML = `
          <input type="checkbox" ${checked ? 'checked' : ''} style="margin-top:0.25rem;transform:scale(1.1);accent-color:var(--primary-accent)">
          <span style="font-size:0.9rem;font-weight:500;color:${checked ? '#94a3b8' : 'var(--text-color)'};text-decoration:${checked ? 'line-through' : 'none'}">${item.text}</span>`;
        label.querySelector('input').addEventListener('change', (e) => {
          syllabusChecklist[item.id] = e.target.checked;
          localStorage.setItem(SYLLABUS_KEY, JSON.stringify(syllabusChecklist));
          updateProgressGauges();
          renderSyllabusList();
        });
        container.appendChild(label);
      });
    });
  }

  function updateProgressGauges() {
    const total = syllabusTopics.length;
    const completed = syllabusTopics.filter(t => syllabusChecklist[t.id]).length;
    const percent = Math.round((completed / total) * 100);
    if (progressCovered) progressCovered.textContent = `${completed}/${total} Topics (${percent}%)`;
    if (progressFill) progressFill.style.width = `${percent}%`;
    const innerPercent = document.getElementById('inner-syllabus-percent');
    const innerCount = document.getElementById('inner-syllabus-count');
    const innerFill = document.getElementById('inner-syllabus-fill');
    if (innerPercent) innerPercent.textContent = `${percent}%`;
    if (innerCount) innerCount.textContent = `${completed}/${total} Topics`;
    if (innerFill) innerFill.style.width = `${percent}%`;
  }

  const timetableDays = [
    { day: 'Day 1', module: 'Mod 1 & 2', topic: 'Precipitation Forms & Humidity', details: 'Precipitation types, dew point, RH & specific humidity formulas.', practice: 'Humidity calculations (2024 Q2b, 2025 Q2b)' },
    { day: 'Day 2', module: 'Mod 2', topic: 'Raingauge Adequacy', details: 'Mean, std dev, optimum number of stations.', practice: 'Adequacy numericals (2023 Q2b, 2025 Q2c)' },
    { day: 'Day 3', module: 'Mod 2', topic: 'Precipitation Consistency', details: 'Double Mass Curve, missing data adjustment.', practice: 'DMC correction theory (2022 Q2b)' },
    { day: 'Day 4', module: 'Mod 3', topic: "Infiltration & Horton's Curve", details: "Horton's equation, fitting, cumulative integration.", practice: 'Horton integration (2025 Q3b(i))' },
    { day: 'Day 5', module: 'Mod 3', topic: 'Infiltration Indices', details: 'Φ-index, W-index, hyetograph analysis.', practice: 'Φ-index (2022 Q3b, 2023 Q3b, 2024 Q3b)' },
    { day: 'Day 6', module: 'Mod 4', topic: 'Reservoir Evaporation', details: 'Water/Energy budget, seepage.', practice: 'Water budget (2023 Q5b)' },
    { day: 'Day 7', module: 'Mod 5', topic: 'Catchment Runoff', details: 'Stream order/density, flow duration curve.', practice: 'Mass curve runoff (2025 Q4b)' },
    { day: 'Day 8', module: 'Mod 6', topic: 'Unit Hydrograph Foundation', details: 'UH definition, LTI assumptions, base flow separation.', practice: 'Base flow theory (2022 Q5a, 2024 Q5a)' },
    { day: 'Day 9', module: 'Mod 6', topic: 'S-Curve & Duration Conversion', details: 'Derive S-curve, change UH duration.', practice: 'S-curve (2022 Q4c)' },
    { day: 'Day 10', module: 'Mod 6', topic: 'Synthetic Unit Hydrograph', details: "Snyder's method for ungauged basins.", practice: 'Snyder SUH (2022 Q5b, 2024 Q5b)' },
    { day: 'Day 11', module: 'Mod 7', topic: 'Peak Flood & Rational Method', details: 'Rational method, time of concentration.', practice: 'Rational peak (2023 Q7b)' },
    { day: 'Day 12', module: 'Mod 7', topic: "Flood Frequency (Gumbel's)", details: 'Gumbel EVD, return periods.', practice: 'Gumbel prediction (2022 Q6b, 2024 Q4b)' },
    { day: 'Day 13', module: 'Mod 8', topic: "Flood Routing & Pul's Method", details: 'Hydrologic vs hydraulic routing, level pool.', practice: 'Outflow peak proof (2024 Q6b, 2025 Q6a)' },
    { day: 'Day 14', module: 'Mod 8', topic: 'Channel Routing (Muskingum)', details: 'Muskingum equation, coefficients, routing table.', practice: 'Muskingum tables (2022 Q7b, 2025 Q6b)' }
  ];

  function renderTimetable() {
    const container = document.getElementById('timetable-list-container');
    if (!container) return;
    container.innerHTML = '';
    timetableDays.forEach(d => {
      const isCompleted = timetableChecklist[d.day] || false;
      const card = document.createElement('div');
      card.className = `card ${isCompleted ? 'completed-day' : ''}`;
      Object.assign(card.style, {
        padding: '1.25rem', opacity: isCompleted ? '0.7' : '1',
        borderStyle: isCompleted ? 'dashed' : 'solid',
        display: 'flex', flexDirection: 'row', alignItems: 'start', gap: '1rem', justifyContent: 'start'
      });
      card.innerHTML = `
        <input type="checkbox" ${isCompleted ? 'checked' : ''} style="margin-top:0.25rem;width:1.25rem;height:1.25rem;cursor:pointer;accent-color:var(--primary-accent)">
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
            <span class="badge" style="background-color:#fef3c7;color:#92400e;border:1px solid var(--primary-accent)">${d.day}</span>
            <span style="font-size:0.75rem;color:#64748b;font-weight:600">${d.module}</span>
          </div>
          <h4 style="margin-bottom:0.25rem;text-decoration:${isCompleted ? 'line-through' : 'none'}">${d.topic}</h4>
          <p style="font-size:0.8rem;color:#475569;margin-bottom:0.5rem">${d.details}</p>
          <div style="background-color:#eff6ff;border:1px solid #bfdbfe;color:#1e3a8a;font-size:0.75rem;padding:0.5rem 0.75rem;border-radius:0.25rem">
            <span style="font-weight:700">🎯 Practice Target:</span>
            <div>${d.practice}</div>
          </div>
        </div>`;
      card.querySelector('input').addEventListener('change', (e) => {
        timetableChecklist[d.day] = e.target.checked;
        localStorage.setItem(TIMETABLE_KEY, JSON.stringify(timetableChecklist));
        updateTimetableProgress();
        renderTimetable();
      });
      container.appendChild(card);
    });
  }

  function updateTimetableProgress() {
    const total = timetableDays.length;
    const completed = timetableDays.filter(d => timetableChecklist[d.day]).length;
    const percent = Math.round((completed / total) * 100);
    const percentText = document.getElementById('timetable-percent-text');
    const countText = document.getElementById('timetable-count');
    const fillBar = document.getElementById('timetable-fill-bar');
    if (percentText) percentText.textContent = `${percent}%`;
    if (countText) countText.textContent = `${completed}/${total} Days`;
    if (fillBar) fillBar.style.width = `${percent}%`;
  }

  // KaTeX rendering using auto-render from CDN (retries until script loads)
  function renderMath(root, attempt) {
    root = root || document.body;
    attempt = attempt || 0;
    if (!window.renderMathInElement) {
      if (attempt < 40) setTimeout(() => renderMath(root, attempt + 1), 100);
      return;
    }
    try {
      window.renderMathInElement(root, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        throwOnError: false,
        strict: 'ignore'
      });
    } catch (e) { /* ignore */ }
  }

  updateProgressGauges();
  updateTimetableProgress();
  switchTab('priority');
});
