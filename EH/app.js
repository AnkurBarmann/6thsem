// Engineering Hydrology (CE-301) Dashboard Application Logic
// Offline interactive controls

import { questionsDB, relatedPyqMap, modulesData } from './data.js';
import katex from 'katex';
import 'katex/dist/katex.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // --- STATE ---
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
  
  // Storage keys
  const SYLLABUS_KEY = 'astu_hydrology_syllabus_checklist';
  const TIMETABLE_KEY = 'astu_hydrology_timetable_checklist';

  // Load from storage
  let syllabusChecklist = JSON.parse(localStorage.getItem(SYLLABUS_KEY)) || {};
  let timetableChecklist = JSON.parse(localStorage.getItem(TIMETABLE_KEY)) || {};

  // --- DOM ELEMENTS ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.dashboard-section');
  const questionsGrid = document.getElementById('questions-grid');
  
  // Filters
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
  
  // Modal
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

  // Progress Bar Header
  const progressCovered = document.getElementById('progress-covered');
  const progressPercentText = document.getElementById('progress-percent-text');
  const progressFill = document.getElementById('progress-fill');

  // --- INITIALIZE & TAB SWITCHING ---
  function switchTab(tabId) {
    activeTab = tabId;
    tabButtons.forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    sections.forEach(sec => {
      if (sec.id === `${tabId}-section`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // Render contents as needed
    if (tabId === 'pyq-bank') {
      renderQuestions();
    } else if (tabId === 'syllabus') {
      renderSyllabusList();
    } else if (tabId === 'timetable') {
      renderTimetable();
    }

    // Trigger math rendering
    renderMath();
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // --- FILTERING & SORTING LOGIC ---
  function getFilteredQuestions() {
    return questionsDB.filter(q => {
      const qText = q.question.toLowerCase();
      const aText = q.answer.toLowerCase();
      const cText = q.concept.toLowerCase();
      const fText = q.formula.toLowerCase();
      const query = searchTerm.toLowerCase();

      const matchesSearch = searchTerm === '' || 
        qText.includes(query) || 
        aText.includes(query) || 
        cText.includes(query) || 
        fText.includes(query);

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

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      if (sortBy === 'marks-desc') return b.marks - a.marks;
      if (sortBy === 'marks-asc') return a.marks - b.marks;
      if (sortBy === 'diff-desc') {
        const rank = { 'Hard': 3, 'Medium': 2, 'Easy': 1 };
        return rank[b.diff] - rank[a.diff];
      }
      if (sortBy === 'diff-asc') {
        const rank = { 'Hard': 3, 'Medium': 2, 'Easy': 1 };
        return rank[a.diff] - rank[b.diff];
      }
      return 0;
    });

    if (matchCount) {
      matchCount.textContent = `Showing ${filtered.length} of ${questionsDB.length} PYQs`;
    }

    questionsGrid.innerHTML = '';

    if (filtered.length === 0) {
      questionsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; background-color: var(--card-bg); padding: 3rem; text-align: center; border-radius: 0.75rem; border: 1px dashed var(--border-color)">
          <div style="font-size: 2rem; margin-bottom: 0.5rem">🔍</div>
          <h3 style="margin-bottom: 0.25rem">No Matching Questions</h3>
          <p style="font-size: 0.85rem; color: #64748b; margin: 0">Adjust your search keyword or toggle the smart checkboxes.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement('div');
      card.className = 'card';
      
      let diffBadge = `<span class="badge badge-diff-easy">${q.diff}</span>`;
      if (q.diff === 'Medium') diffBadge = `<span class="badge badge-diff-medium">${q.diff}</span>`;
      if (q.diff === 'Hard') diffBadge = `<span class="badge badge-diff-hard">${q.diff}</span>`;

      let repeatedLabel = q.repeated ? `<span class="badge" style="background-color: #fef2f2; color: #991b1b; border: 1px solid #fecaca">Repeated</span>` : '';
      let probableLabel = q.probable ? `<span class="badge" style="background-color: #faf5ff; color: #6b21a8; border: 1px solid #e9d5ff">Probable 2026</span>` : '';

      // Determine quick hint
      let quickHint = "Focus on clear sketches and core definitions.";
      if (q.id.includes('phi')) quickHint = "Identify rain hours where intensity exceeds Φ. Infiltration depth = P - Runoff.";
      if (q.id.includes('musk')) quickHint = "C0 + C1 + C2 must equal 1. Outflow matches storage lag.";
      if (q.id.includes('scurve')) quickHint = "Accumulate S-curve values by lagging unit hydrographs.";
      if (q.id.includes('snyder')) quickHint = "Use t_p = C_t * (L * L_ca)^0.3 and adjust for t_R lag.";
      if (q.id.includes('gumbel')) quickHint = "Reduced variate is y_T = -ln(-ln(1 - 1/T)).";
      if (q.id.includes('evap')) quickHint = "Volumes must match weekly seconds and reservoir area.";
      if (q.id.includes('humidity')) quickHint = "Saturation pressure uses dry bulb; actual uses dew point.";
      if (q.id.includes('adequacy')) quickHint = "Standard error formula is E_s = C_v / sqrt(m).";

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
            ${renderLatexString(q.question)}
          </div>
          
          <div class="note-box" style="margin: 0.75rem 0; padding: 0.5rem 0.75rem; font-size: 0.75rem; border-left-width: 3px; display: flex; align-items: start; gap: 0.5rem">
            <span style="font-size: 0.85rem">💡</span>
            <div>
              <b style="color: #1d4ed8">Quick Hint:</b>
              <span style="color: #1e3a8a">${quickHint}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.75rem; margin-top: auto">
          <div style="display: flex; gap: 0.25rem">
            ${repeatedLabel}
            ${probableLabel}
          </div>
          <button class="view-sol-btn" style="background-color: var(--primary-accent); color: #ffffff; border: none; padding: 0.375rem 0.75rem; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 700; cursor: pointer">
            📖 View Solution
          </button>
        </div>
      `;

      card.querySelector('.view-sol-btn').addEventListener('click', () => {
        openModal(q);
      });

      questionsGrid.appendChild(card);
    });

    renderMath();
  }

  // --- SEARCH & FILTER LISTENERS ---
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderQuestions();
    });
  }
  if (moduleSelect) {
    moduleSelect.addEventListener('change', (e) => {
      selectedModule = e.target.value;
      renderQuestions();
    });
  }
  if (yearSelect) {
    yearSelect.addEventListener('change', (e) => {
      selectedYear = e.target.value;
      renderQuestions();
    });
  }
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      selectedDifficulty = e.target.value;
      renderQuestions();
    });
  }
  if (typeSelect) {
    typeSelect.addEventListener('change', (e) => {
      selectedType = e.target.value;
      renderQuestions();
    });
  }

  // Checkboxes
  if (cbRepeated) {
    cbRepeated.addEventListener('change', (e) => {
      filterRepeated = e.target.checked;
      renderQuestions();
    });
  }
  if (cbImportant) {
    cbImportant.addEventListener('change', (e) => {
      filterImportant = e.target.checked;
      renderQuestions();
    });
  }
  if (cbProbable) {
    cbProbable.addEventListener('change', (e) => {
      filterProbable = e.target.checked;
      renderQuestions();
    });
  }
  if (cbConceptual) {
    cbConceptual.addEventListener('change', (e) => {
      filterConceptual = e.target.checked;
      renderQuestions();
    });
  }
  if (cbFormula) {
    cbFormula.addEventListener('change', (e) => {
      filterFormula = e.target.checked;
      renderQuestions();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderQuestions();
    });
  }

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
      
      searchTerm = '';
      selectedModule = 'all';
      selectedYear = 'all';
      selectedDifficulty = 'all';
      selectedType = 'all';
      filterRepeated = false;
      filterImportant = false;
      filterProbable = false;
      filterConceptual = false;
      filterFormula = false;
      sortBy = 'year-desc';

      renderQuestions();
    });
  }

  // --- INTERACTIVE NAVIGATION (PRIORITY MATRIX & FREQUENCY REDIRECTS) ---
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

  function renderLatexInDom(root) {
    if (!root) return;

    const ignoredTags = new Set(['SCRIPT', 'NOSCRIPT', 'STYLE', 'TEXTAREA', 'PRE', 'CODE']);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ignoredTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest('.katex, [data-latex-rendered="true"]')) return NodeFilter.FILTER_REJECT;
        return node.nodeValue && node.nodeValue.includes('$')
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const source = node.nodeValue;
      const tokens = [];
      let index = 0;
      const pattern = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
      let match;

      while ((match = pattern.exec(source)) !== null) {
        if (match.index > index) {
          tokens.push({ type: 'text', value: source.slice(index, match.index) });
        }

        tokens.push({
          type: 'math',
          value: (match[1] || match[2] || '').trim(),
          display: Boolean(match[1])
        });
        index = pattern.lastIndex;
      }

      if (!tokens.length) return;
      if (index < source.length) {
        tokens.push({ type: 'text', value: source.slice(index) });
      }

      const fragment = document.createDocumentFragment();
      tokens.forEach((token) => {
        if (token.type === 'text') {
          fragment.appendChild(document.createTextNode(token.value));
          return;
        }

        const wrapper = document.createElement(token.display ? 'div' : 'span');
        wrapper.dataset.latexRendered = 'true';
        if (token.display) wrapper.className = 'rendered-display-math';
        try {
          wrapper.innerHTML = katex.renderToString(token.value, {
            displayMode: token.display,
            throwOnError: false,
            strict: 'ignore',
            trust: false,
            output: 'html'
          });
        } catch (error) {
          wrapper.textContent = token.display ? `$$${token.value}$$` : `$${token.value}$`;
        }
        fragment.appendChild(wrapper);
      });

      node.parentNode.replaceChild(fragment, node);
    });
  }

  function renderLatexString(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    renderLatexInDom(temp);
    return temp.innerHTML;
  }

  function getTopicSupport(question) {
    const concept = `${question.concept || ''} ${question.formula || ''} ${question.question || ''}`.toLowerCase();

    if (concept.includes('phi') || concept.includes('infiltration')) {
      return {
        notation: '$\\Phi$ = infiltration index ($\\text{cm/hr}$ or $\\text{mm/hr}$); $f$ = infiltration capacity ($\\text{cm/hr}$); $f_0$ = initial infiltration capacity; $f_c$ = final infiltration capacity; $k$ = decay constant ($\\text{hr}^{-1}$); $P$ = rainfall depth ($\\text{cm}$); $R$ = runoff depth ($\\text{cm}$); $I_a$ = initial loss ($\\text{cm}$); $t$ = time (hr).',
        theory: 'Infiltration is the entry of water into soil. Horton proposed that infiltration capacity decreases exponentially with time and approaches a constant final value. The $\\Phi$-index is the constant abstraction rate that makes rainfall excess equal the direct runoff depth.',
        approach: 'First compute runoff depth if volume is given. Then identify the active rainfall periods, apply the infiltration-index concept, test the trial value against each rainfall block, and recompute if any block is smaller than the trial rate.'
      };
    }

    if (concept.includes('snyder') || concept.includes('unit hydrograph') || concept.includes('s-curve') || concept.includes('hydrograph')) {
      return {
        notation: '$U(t)$ = unit hydrograph ordinate ($\\text{m}^3/\\text{s}$); $S(t)$ = S-curve ordinate; $A$ = catchment area ($\\text{km}^2$); $D$ = duration of rainfall excess (hr); $t_p$ = basin lag (hr); $t_R$ = required UH duration (hr); $Q_p$ = peak discharge ($\\text{m}^3/\\text{s}$); $C_t, C_p$ = Snyder coefficients.',
        theory: 'A unit hydrograph represents the direct runoff produced by one unit depth of effective rainfall over a basin for a specified duration. The S-curve is formed by summing successive unit hydrographs and is used to convert hydrographs from one duration to another. Snyder\'s synthetic unit hydrograph is used for ungauged catchments using basin characteristics.',
        approach: 'Write the governing hydrograph relation first. For S-curve problems, build the summation curve, apply the lag, subtract ordinates, and scale them correctly. For Snyder problems, compute lag time first, then adjust it for the required duration, and finally compute peak discharge.'
      };
    }

    if (concept.includes('gumbel') || concept.includes('frequency') || concept.includes('return period')) {
      return {
        notation: '$X_T$ = flood magnitude for return period $T$ ($\\text{m}^3/\\text{s}$); $\\bar{X}$ = sample mean; $S$ or $\\sigma$ = standard deviation; $K$ = frequency factor; $y_T$ = reduced variate; $Y_n$ = reduced mean; $S_n$ = reduced standard deviation; $T$ = return period (years).',
        theory: 'Flood frequency analysis estimates design floods associated with specified return periods. In Gumbel\'s extreme value method, the return period is transformed into a reduced variate, which is then used to compute the design flood through a frequency factor.',
        approach: 'Arrange the solution in clear steps: compute the reduced variate, determine the frequency factor, then substitute into the flood-frequency equation. If two flood values are given directly, use the reduced-variate linear form $X_T = a + by_T$.'
      };
    }

    if (concept.includes('muskingum') || concept.includes('routing')) {
      return {
        notation: '$I_1, I_2$ = successive inflows ($\\text{m}^3/\\text{s}$); $Q_1, Q_2$ = successive outflows ($\\text{m}^3/\\text{s}$); $K$ = storage/travel-time coefficient (hr); $x$ = weighting factor; $\\Delta t$ = routing interval (hr); $C_0, C_1, C_2$ = Muskingum routing coefficients; $S$ = storage.',
        theory: 'Flood routing studies how a flood wave is translated and attenuated through a river reach or reservoir. The Muskingum method is a hydrologic routing method that represents channel storage as a weighted function of inflow and outflow and leads to a practical recursive routing equation.',
        approach: 'Compute $C_0$, $C_1$, and $C_2$ first and verify that their sum is 1. Then use the recursive routing equation interval by interval, maintaining a neat tabular format.'
      };
    }

    if (concept.includes('humidity') || concept.includes('dew point')) {
      return {
        notation: '$e$ = actual vapour pressure ($\\text{kPa}$); $e_s$ = saturation vapour pressure ($\\text{kPa}$); $RH$ = relative humidity ($\\%$); $q$ = specific humidity ($\\text{kg/kg}$ or $\\text{g/kg}$); $p$ = atmospheric pressure ($\\text{kPa}$); $T_d$ = dew point temperature ($^\\circ\\text{C}$); $T$ = air temperature ($^\\circ\\text{C}$).',
        theory: 'Relative humidity expresses how close air is to saturation, whereas specific humidity gives the actual mass of water vapour contained in moist air. Dew point temperature is the temperature at which air becomes saturated when cooled at constant pressure.',
        approach: 'Find actual vapour pressure from the dew point temperature and saturation vapour pressure from the dry-bulb temperature. Then calculate relative humidity and specific humidity in sequence.'
      };
    }

    if (concept.includes('evaporation') || concept.includes('water budget') || concept.includes('energy-budget')) {
      return {
        notation: '$I$ = inflow volume; $O$ = outflow volume; $P$ = precipitation input; $E$ = evaporation loss; $G$ = seepage / groundwater loss; $\\Delta S$ = change in storage; $A$ = reservoir area ($\\text{km}^2$ or $\\text{m}^2$).',
        theory: 'Evaporation is the conversion of liquid water into vapour from a free water surface. In the water-budget method, evaporation is obtained from the balance of inflows, outflows, precipitation, seepage, and storage change over a lake or reservoir.',
        approach: 'Convert all quantities into consistent units first, usually cubic metres. Write the water-budget equation explicitly and then isolate evaporation or evaporation depth.'
      };
    }

    if (concept.includes('rational')) {
      return {
        notation: '$Q_p$ = peak runoff ($\\text{m}^3/\\text{s}$); $C$ = runoff coefficient; $i$ = rainfall intensity ($\\text{mm/hr}$); $A$ = area ($\\text{km}^2$); $t_c$ = time of concentration.',
        theory: 'The rational method is a simple peak-runoff estimation method for small catchments. It assumes the critical rainfall duration is equal to the time of concentration of the basin.',
        approach: 'Identify the rainfall duration equal to the time of concentration, convert rainfall depth to intensity, and then apply the rational formula carefully with proper units.'
      };
    }

    if (concept.includes('precipitation') || concept.includes('rain')) {
      return {
        notation: '$P_x$ = missing rainfall at station $x$; $N_x$ = normal annual rainfall at station $x$; $P_i$ = observed rainfall at station $i$; $N_i$ = normal annual rainfall at station $i$; $n$ = number of neighboring stations.',
        theory: 'Precipitation forms when atmospheric moisture condenses and droplets or ice crystals grow large enough to fall under gravity. Hydrologic rainfall analysis also includes averaging basin rainfall, checking record consistency, and estimating missing data.',
        approach: 'For theory, classify the precipitation types first. For missing-rainfall numericals, decide whether arithmetic mean or normal-ratio method is appropriate and then substitute the station data systematically.'
      };
    }

    if (concept.includes('runoff') || concept.includes('base flow')) {
      return {
        notation: '$Q$ = discharge ($\\text{m}^3/\\text{s}$); DRH = direct runoff hydrograph; base flow = groundwater contribution; $R$ = runoff depth ($\\text{cm}$); $A$ = catchment area.',
        theory: 'Runoff is the portion of precipitation that appears as streamflow at the basin outlet. Direct runoff responds quickly to storms, whereas base flow is the delayed groundwater contribution that sustains streamflow between storm events.',
        approach: 'Separate the response into direct runoff and base flow first. For numerical questions, convert hydrograph area into runoff depth using basin area.'
      };
    }

    return {
      notation: 'Use standard hydrology notation consistently. Unless stated otherwise, take discharge in $\\text{m}^3/\\text{s}$, rainfall/runoff depth in $\\text{cm}$ or $\\text{mm}$, catchment area in $\\text{km}^2$, and time in hours.',
      theory: `This topic belongs to <b>${question.concept}</b> and should be understood through its governing physical process, standard formula, assumptions, and engineering significance.`,
      approach: 'Begin with the key formula or definition, define every symbol with unit, solve stepwise in textbook style, and box the final answer where appropriate.'
    };
  }

  function buildNotationBox(question) {
    const support = getTopicSupport(question);
    return `
      <div class="note-box">
        <b>📝 Notation & Units:</b> ${support.notation}
      </div>
    `;
  }

  function buildSummaryBox(question) {
    return `
      <div class="summary-box">
        📌 <b>Summary:</b> This question mainly tests <b>${question.concept}</b>. Write the governing relation first, substitute data carefully, and present the final result with correct units.
      </div>
    `;
  }

  function buildTheoryBox(question) {
    const support = getTopicSupport(question);
    return `
      <div class="theory-box">
        <b>📚 Theory to Know:</b> ${support.theory}
      </div>
    `;
  }

  function buildApproachBox(question) {
    const support = getTopicSupport(question);
    return `
      <div class="note-box">
        💡 <b>Approach / Hint:</b> ${support.approach}
      </div>
    `;
  }

  function buildRelatedInline(question) {
    const relatedIds = relatedPyqMap[question.id] || [];
    if (!relatedIds.length) return '';

    const relatedButtons = relatedIds
      .map(relId => {
        const relQ = questionsDB.find(q => q.id === relId);
        if (!relQ) return '';
        return `
          <button class="related-jump-btn" data-related-id="${relQ.id}">
            <div style="font-size:0.68rem; font-weight:700; color: var(--primary-accent); font-family:'JetBrains Mono', monospace; margin-bottom:0.2rem;">${relQ.year} • ${relQ.qnum}</div>
            <div style="font-size:0.82rem; font-weight:600;">${relQ.concept}</div>
          </button>
        `;
      })
      .join('');

    return `
      <div class="related-inline">
        <h4>Related PYQs</h4>
        <div class="related-chip-grid">${relatedButtons}</div>
      </div>
    `;
  }

  function formatDisplayMath(html) {
    return html.replace(/\s*\$\$([\s\S]*?)\$\$\s*/g, (_, equation) => {
      const cleanEquation = equation.trim();
      return `<div class="math-display-block">$$${cleanEquation}$$</div>`;
    });
  }

  function ensureBookFormat(question) {
    let html = (question.answer || '').trim();

    if (!/<h4[\s>]/i.test(html)) {
      html = `<h4>Structured Solution</h4>${html}`;
    }

    const hasSummary = /class=["']summary-box["']/i.test(html);

    html += buildNotationBox(question);

    if (!hasSummary) {
      html += buildSummaryBox(question);
    }

    html += buildTheoryBox(question);
    html += buildApproachBox(question);
    html += buildRelatedInline(question);

    html = formatDisplayMath(html);

    return renderLatexString(`<article class="answer-book">${html}</article>`);
  }

  // --- MODAL CONTROLS ---
  function openModal(question) {
    if (!modalOverlay) return;
    
    currentZoom = 100;
    updateZoomClass();
    
    modalYear.textContent = question.year;
    modalMarks.textContent = `${question.marks} Marks`;
    modalModule.textContent = `Module ${question.module}`;
    modalDifficulty.textContent = question.diff;
    modalDifficulty.className = `badge badge-diff-${question.diff.toLowerCase()}`;
    
    modalQnum.textContent = question.qnum;
    modalQuestionText.innerHTML = `<div class="modal-question-body">${renderLatexString(question.question)}</div>`;
    modalAnswerArea.innerHTML = ensureBookFormat(question);
    modalQuestionText.scrollTop = 0;
    modalAnswerArea.scrollTop = 0;

    modalOverlay.style.display = 'flex';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDone) modalDone.addEventListener('click', closeModal);

  if (modalAnswerArea) {
    modalAnswerArea.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-related-id]');
      if (!btn) return;
      const targetId = btn.getAttribute('data-related-id');
      const relatedQuestion = questionsDB.find(q => q.id === targetId);
      if (relatedQuestion) {
        openModal(relatedQuestion);
      }
    });
  }

  // Zoom control listeners
  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      currentZoom = Math.min(200, currentZoom + 10);
      updateZoomClass();
    });
  }
  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      currentZoom = Math.max(70, currentZoom - 10);
      updateZoomClass();
    });
  }
  if (btnZoomReset) {
    btnZoomReset.addEventListener('click', () => {
      currentZoom = 100;
      updateZoomClass();
    });
  }

  function updateZoomClass() {
    if (zoomText) zoomText.textContent = `${currentZoom}%`;
    if (modalAnswerArea) {
      modalAnswerArea.className = 'modal-answer-area';
      if (currentZoom === 70) modalAnswerArea.classList.add('zoom-xs');
      else if (currentZoom === 85 || currentZoom === 80 || currentZoom === 90) modalAnswerArea.classList.add('zoom-sm');
      else if (currentZoom === 110 || currentZoom === 120) modalAnswerArea.classList.add('zoom-lg');
      else if (currentZoom === 130 || currentZoom === 140) modalAnswerArea.classList.add('zoom-xl');
      else if (currentZoom === 150 || currentZoom === 160 || currentZoom === 170 || currentZoom === 180 || currentZoom === 190 || currentZoom === 200) modalAnswerArea.classList.add('zoom-2xl');
      else modalAnswerArea.classList.add('zoom-base');
    }
  }

  // Copy Buttons
  if (btnCopyQ) {
    btnCopyQ.addEventListener('click', () => {
      const text = modalQuestionText.innerText;
      navigator.clipboard.writeText(text).then(() => {
        btnCopyQ.textContent = 'Copied!';
        setTimeout(() => btnCopyQ.textContent = 'Copy Question', 1500);
      });
    });
  }
  if (btnCopyA) {
    btnCopyA.addEventListener('click', () => {
      const clone = modalAnswerArea.cloneNode(true);
      const related = clone.querySelector('.related-inline');
      if (related) related.remove();
      const text = clone.innerText;
      navigator.clipboard.writeText(text).then(() => {
        btnCopyA.textContent = 'Copied!';
        setTimeout(() => btnCopyA.textContent = 'Copy Answer', 1500);
      });
    });
  }

  // --- SYLLABUS RENDERING & CHECKLIST ---
  const syllabusTopics = [
    { id: 'sb-phi', text: 'Φ-index & infiltration indices calculation', cat: 'must-study' },
    { id: 'sb-musk', text: 'Muskingum flood routing equation & table', cat: 'must-study' },
    { id: 'sb-scurve', text: 'S-curve derivation & UH duration conversion', cat: 'must-study' },
    { id: 'sb-snyder', text: 'Snyder\'s Synthetic UH lag & peak', cat: 'must-study' },
    { id: 'sb-gumbel', text: 'Gumbel\'s peak flood 100/200/500yr prediction', cat: 'must-study' },
    { id: 'sb-gauge', text: 'Raingauge network adequacy & error calculation', cat: 'must-study' },
    { id: 'sb-baseflow', text: 'Base flow separation (3 methods)', cat: 'must-study' },
    { id: 'sb-evap-wb', text: 'Water budget method for reservoir evaporation', cat: 'study' },
    { id: 'sb-evap-eb', text: 'Energy budget method for lake evaporation', cat: 'study' },
    { id: 'sb-humid', text: 'Atmospheric relative & specific humidity from dew point', cat: 'study' },
    { id: 'sb-dmc', text: 'Double Mass Curve consistency verification', cat: 'study' },
    { id: 'sb-rational', text: 'Rational method peak discharge culvert design', cat: 'study' },
    { id: 'sb-stream', text: 'Catchment characteristics: stream order & density', cat: 'study' },
    { id: 'sb-eq-qe', text: 'S-curve equilibrium discharge (2.778 A/D)', cat: 'study' },
    { id: 'sb-precip-def', text: 'Precipitation types (convective, orographic, frontal)', cat: 'skim' },
    { id: 'sb-hydro-cycle', text: 'Hydrologic cycle schematic & components', cat: 'skim' },
    { id: 'sb-fdc', text: 'Flow duration curve definition & dependability', cat: 'skim' },
    { id: 'sb-series', text: 'Annual vs Partial duration series explanation', cat: 'skim' },
    { id: 'sb-stv', text: 'Saint-Venant hydraulic routing proof', cat: 'skip' },
    { id: 'sb-waterbudg', text: 'Global water budget details', cat: 'skip' },
  ];

  function renderSyllabusList() {
    const categories = ['must-study', 'study', 'skim', 'skip'];
    
    categories.forEach(cat => {
      const container = document.getElementById(`syllabus-${cat}-list`);
      if (!container) return;

      container.innerHTML = '';
      const items = syllabusTopics.filter(t => t.cat === cat);
      
      items.forEach(item => {
        const label = document.createElement('label');
        label.className = 'flex items-start gap-3 text-sm cursor-pointer select-none';
        label.style.display = 'flex';
        label.style.alignItems = 'start';
        label.style.gap = '0.75rem';
        label.style.marginBottom = '0.75rem';
        label.style.cursor = 'pointer';

        const checked = syllabusChecklist[item.id] || false;

        label.innerHTML = `
          <input type="checkbox" ${checked ? 'checked' : ''} style="margin-top: 0.25rem; transform: scale(1.1); accent-color: var(--primary-accent)">
          <span style="font-size: 0.9rem; font-weight: 500; color: ${checked ? '#94a3b8' : 'var(--text-color)'}; text-decoration: ${checked ? 'line-through' : 'none'}">
            ${item.text}
          </span>
        `;

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
    if (progressPercentText) progressPercentText.textContent = `${percent}%`;
    if (progressFill) progressFill.style.width = `${percent}%`;
    
    // Also update on specific syllabus elements if present
    const innerPercent = document.getElementById('inner-syllabus-percent');
    const innerCount = document.getElementById('inner-syllabus-count');
    const innerFill = document.getElementById('inner-syllabus-fill');

    if (innerPercent) innerPercent.textContent = `${percent}%`;
    if (innerCount) innerCount.textContent = `${completed}/${total} Topics`;
    if (innerFill) innerFill.style.width = `${percent}%`;
  }

  // --- TIMETABLE RENDERING & CHECKLIST ---
  const timetableDays = [
    { day: 'Day 1', module: 'Mod 1 & 2', topic: 'Precipitation Forms & Humidity', details: 'Precipitation types, Dew point, relative and specific humidity formulas.', practice: 'Humidity calculations (2024 Q2b, 2025 Q2b)' },
    { day: 'Day 2', module: 'Mod 2', topic: 'Raingauge Adequacy', details: 'adequacy of raingauges, mean annual rainfall, standard deviation, optimum station density.', practice: 'Gauges adequacy numericals (2023 Q2b, 2025 Q2c)' },
    { day: 'Day 3', module: 'Mod 2', topic: 'Precipitation Consistency', details: 'Double Mass Curve construction, consistency testing, missing annual data adjustment.', practice: 'Double mass curve correction theory (2022 Q2b)' },
    { day: 'Day 4', module: 'Mod 3', topic: 'Infiltration & Horton\'s Curve', details: 'Horton\'s infiltration equation, parameter fitting, integration for cumulative infiltration.', practice: 'Horton curve integration (2025 Q3b(i))' },
    { day: 'Day 5', module: 'Mod 3', topic: 'Infiltration Indices', details: 'Φ-index and W-index concepts, rainfall excess, storm hyetograph analysis.', practice: 'Phi-index calculations (2022 Q3b, 2023 Q3b, 2024 Q3b)' },
    { day: 'Day 6', module: 'Mod 4', topic: 'Reservoir Evaporation', details: 'Water budget method, Energy budget method, seepage calculations.', practice: 'Reservoir evaporation water budget (2023 Q5b)' },
    { day: 'Day 7', module: 'Mod 5', topic: 'Catchment Runoff', details: 'Catchment properties, Stream order, Stream density, Flow duration curve.', practice: 'Runoff calculations from mass curve (2025 Q4b)' },
    { day: 'Day 8', module: 'Mod 6', topic: 'Unit Hydrograph Foundation', details: 'UH definition, LTI assumptions (linearity & time invariance), limitations, base flow separation.', practice: 'Base flow separation methods theory (2022 Q5a, 2024 Q5a)' },
    { day: 'Day 9', module: 'Mod 6', topic: 'S-Curve & Duration Conversion', details: 'Derivation of S-Curve from D-hr UH, conversion of UH duration.', practice: 'S-curve derivation calculations (2022 Q4c)' },
    { day: 'Day 10', module: 'Mod 6', topic: 'Synthetic Unit Hydrograph', details: 'Snyder\'s method for ungauged basins, lag time adjustment, peak discharge.', practice: 'Snyder Synthetic UH development (2022 Q5b, 2024 Q5b)' },
    { day: 'Day 11', module: 'Mod 7', topic: 'Peak Flood & Rational Method', details: 'Rational method culvert design, storm duration vs time of concentration.', practice: 'Rational method peak discharge (2023 Q7b)' },
    { day: 'Day 12', module: 'Mod 7', topic: 'Flood Frequency (Gumbel\'s)', details: 'Gumbel\'s Extreme Value Distribution, linear frequency factor, return periods.', practice: 'Gumbel return period prediction (2022 Q6b, 2024 Q4b)' },
    { day: 'Day 13', module: 'Mod 8', topic: 'Flood Routing & Pul\'s Method', details: 'Hydrologic vs Hydraulic routing, level pool routing, Pul\'s method.', practice: 'Outflow peak intersection proof (2024 Q6b, 2025 Q6a)' },
    { day: 'Day 14', module: 'Mod 8', topic: 'Channel Routing (Muskingum)', details: 'Muskingum equation derivation, wedge and prism storage, routing table coefficients.', practice: 'Muskingum routing tables (2022 Q7b, 2025 Q6b)' },
  ];

  function renderTimetable() {
    const container = document.getElementById('timetable-list-container');
    if (!container) return;

    container.innerHTML = '';
    
    timetableDays.forEach(d => {
      const isCompleted = timetableChecklist[d.day] || false;
      const dayCard = document.createElement('div');
      dayCard.className = `card ${isCompleted ? 'completed-day' : ''}`;
      dayCard.style.padding = '1.25rem';
      dayCard.style.opacity = isCompleted ? '0.7' : '1';
      dayCard.style.borderStyle = isCompleted ? 'dashed' : 'solid';
      dayCard.style.display = 'flex';
      dayCard.style.flexDirection = 'row';
      dayCard.style.alignItems = 'start';
      dayCard.style.gap = '1rem';
      dayCard.style.justifyContent = 'start';
      
      dayCard.innerHTML = `
        <input type="checkbox" ${isCompleted ? 'checked' : ''} style="margin-top: 0.25rem; width: 1.25rem; height: 1.25rem; cursor: pointer; accent-color: var(--primary-accent)">
        <div style="flex: 1">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem">
            <span class="badge" style="background-color: #fef3c7; color: #92400e; border: 1px solid var(--primary-accent)">${d.day}</span>
            <span style="font-size: 0.75rem; color: #64748b; font-weight: 600">${d.module}</span>
          </div>
          <h4 style="margin-bottom: 0.25rem; text-decoration: ${isCompleted ? 'line-through' : 'none'}">${d.topic}</h4>
          <p style="font-size: 0.8rem; color: #475569; margin-bottom: 0.5rem">${d.details}</p>
          <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; color: #1e3a8a; font-size: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.25rem; display: flex; flex-direction: column; gap: 0.15rem">
            <span style="font-weight: 700">🎯 Practice Target:</span>
            <span>${d.practice}</span>
          </div>
        </div>
      `;

      dayCard.querySelector('input').addEventListener('change', (e) => {
        timetableChecklist[d.day] = e.target.checked;
        localStorage.setItem(TIMETABLE_KEY, JSON.stringify(timetableChecklist));
        updateTimetableProgress();
        renderTimetable();
      });

      container.appendChild(dayCard);
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

  // --- KATEX MATH RENDERING ---
  function renderMath() {
    // Math is now rendered directly into HTML strings before insertion.
  }

  // Initialize
  updateProgressGauges();
  updateTimetableProgress();
  switchTab('priority');
});
