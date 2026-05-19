// ============================================================
//  RAILWAY, AIRPORT & TUNNEL ENGINEERING — APP LOGIC
// ============================================================

// ── STATE ───────────────────────────────────────────────────
var currentZoom = 100;

// ── TAB SWITCHING ───────────────────────────────────────────
function switchTab(tabEl, sectionId) {
  // Deactivate all tabs & sections
  document.querySelectorAll('.nav-tab').forEach(function(t) {
    t.classList.remove('active');
  });
  document.querySelectorAll('.section').forEach(function(s) {
    s.classList.remove('active');
  });
  // Activate chosen
  tabEl.classList.add('active');
  var sec = document.getElementById(sectionId);
  if (sec) sec.classList.add('active');
  window.scrollTo(0, 0);
}

// ── RENDER PYQ CARDS ────────────────────────────────────────
function renderCards() {
  var grid = document.getElementById('pyq-grid');
  if (!grid) return;
  grid.innerHTML = '';
  questionsDB.forEach(function(q) {
    var card = document.createElement('div');
    card.className = 'pyq-card';
    card.dataset.id        = q.id;
    card.dataset.module    = q.module;
    card.dataset.year      = q.year;
    card.dataset.diff      = q.diff;
    card.dataset.qtype     = q.qtype;
    card.dataset.marks     = q.marks;
    card.dataset.important = q.importance === 'high' ? 'true' : 'false';
    card.dataset.repeated  = q.repeated  ? 'true' : 'false';
    card.dataset.probable  = q.probable  ? 'true' : 'false';
    card.dataset.concept   = q.concept   ? 'true' : 'false';
    card.dataset.formula   = q.formula   ? 'true' : 'false';

    var diffCls = q.diff === 'hard' ? 'dh' : q.diff === 'medium' ? 'dm' : 'de';
    var badges = '<span class="mod-tag ' + q.module + '">' + q.module.toUpperCase() + '</span>'
               + '<span class="pyq-year">' + q.year + '</span>'
               + '<span class="pyq-marks">' + q.marks + ' Mark' + (q.marks > 1 ? 's' : '') + '</span>'
               + '<span class="' + diffCls + '">' + q.diff.toUpperCase() + '</span>';
    if (q.repeated) badges += '<span class="rep-badge">🔁 Repeated</span>';
    if (q.probable) badges += '<span class="prob-badge">🎯 Probable</span>';

    // Extract short hint from answer (first sentence or first line)
    var hintHtml = extractHint(q.answer);

    card.innerHTML =
      '<div class="pyq-card-head">' + badges + '</div>' +
      '<div class="pyq-card-body">' +
        '<div class="pyq-card-q">' +
          '<span class="qnum-badge">' + q.qnum + '</span>' + q.question +
        '</div>' +
        '<div class="pyq-card-hint">' +
          '<div class="pyq-card-hint-label">💡 QUICK HINT</div>' +
          hintHtml +
        '</div>' +
        '<button class="sol-btn" data-qid="' + q.id + '">📖 View Full Solution</button>' +
      '</div>';

    grid.appendChild(card);
  });
  applyFilters();
  // Render LaTeX in all cards after building
  setTimeout(function() { renderMathIn(grid); }, 100);
}

// Extract a short hint from the full answer (first ~200 chars or first sentence)
function extractHint(fullAnswer) {
  // Remove HTML tags for length check, but keep some formatting
  var textOnly = fullAnswer.replace(/<[^>]*>/g, '');
  if (textOnly.length <= 200) return fullAnswer;
  // Take first sentence or first 200 chars
  var firstSent = textOnly.split('.')[0];
  if (firstSent.length < 100) {
    // Try to get a bit more
    var idx = textOnly.indexOf('. ', 50);
    if (idx > 0) return textOnly.substring(0, idx + 1);
  }
  return textOnly.substring(0, 200) + '…';
}

// ── FILTER ENGINE ────────────────────────────────────────────
function applyFilters() {
  var search  = (document.getElementById('search-input').value || '').toLowerCase();
  var mod     = document.getElementById('sel-module').value;
  var yr      = document.getElementById('sel-year').value;
  var diff    = document.getElementById('sel-diff').value;
  var qtype   = document.getElementById('sel-qtype').value;
  var sortBy  = document.getElementById('sel-sort').value;

  var chkImp  = document.getElementById('chk-imp').checked;
  var chkHigh = document.getElementById('chk-high').checked;
  var chkRep  = document.getElementById('chk-rep').checked;
  var chkProb = document.getElementById('chk-prob').checked;
  var chkConc = document.getElementById('chk-conc').checked;
  var chkForm = document.getElementById('chk-form').checked;

  var cards = Array.from(document.querySelectorAll('.pyq-card'));
  var visible = 0;

  cards.forEach(function(card) {
    var id = card.dataset.id;
    var q  = questionsDB.find(function(x) { return x.id === id; });
    if (!q) { card.style.display = 'none'; return; }

    var show = true;

    if (search) {
      var haystack = q.question.toLowerCase() + ' ' + q.qnum.toLowerCase();
      if (haystack.indexOf(search) === -1) show = false;
    }
    if (mod   !== 'all' && q.module !== mod)          show = false;
    if (yr    !== 'all' && String(q.year) !== yr)      show = false;
    if (diff  !== 'all' && q.diff !== diff)            show = false;
    if (qtype !== 'all' && q.qtype !== qtype)          show = false;
    if (chkImp  && q.importance !== 'high')            show = false;
    if (chkHigh && !q.probable)                        show = false;
    if (chkRep  && !q.repeated)                        show = false;
    if (chkProb && !q.probable)                        show = false;
    if (chkConc && !q.concept)                         show = false;
    if (chkForm && !q.formula)                         show = false;

    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });

  // Sort visible cards
  cards.sort(function(a, b) {
    var qa = questionsDB.find(function(x) { return x.id === a.dataset.id; });
    var qb = questionsDB.find(function(x) { return x.id === b.dataset.id; });
    if (!qa || !qb) return 0;
    if (sortBy === 'marks-hi')  return qb.marks - qa.marks;
    if (sortBy === 'marks-lo')  return qa.marks - qb.marks;
    if (sortBy === 'imp-hi') {
      var wi = function(q) { return q.importance === 'high' ? 3 : q.importance === 'medium' ? 2 : 1; };
      return wi(qb) - wi(qa);
    }
    if (sortBy === 'rep-hi')    return (qb.repeated ? 1 : 0) - (qa.repeated ? 1 : 0);
    if (sortBy === 'year-new')  return qb.year - qa.year;
    return questionsDB.indexOf(qa) - questionsDB.indexOf(qb);
  });
  var grid = document.getElementById('pyq-grid');
  cards.forEach(function(c) { grid.appendChild(c); });

  // Count label
  document.getElementById('result-count').textContent = 'Found ' + visible + ' PYQ' + (visible !== 1 ? 's' : '');

  // Empty state
  var empty = document.getElementById('empty-state');
  if (empty) empty.remove();
  if (visible === 0) {
    var em = document.createElement('div');
    em.id = 'empty-state';
    em.className = 'empty-state';
    em.innerHTML = '<h3>No questions match your filters</h3><p>Try relaxing the filters or clearing the search.</p>';
    grid.appendChild(em);
  }

  updateChips();
}

// ── SMART CHECKBOX TOGGLE ────────────────────────────────────
function toggleSmart(chkId, lblId) {
  var chk = document.getElementById(chkId);
  var lbl = document.getElementById(lblId);
  if (!chk || !lbl) return;
  if (chk.checked) lbl.classList.add('on');
  else lbl.classList.remove('on');
  applyFilters();
}

// ── CHIPS ───────────────────────────────────────────────────
function updateChips() {
  var container = document.getElementById('chips-list');
  container.innerHTML = '';

  var pairs = [
    ['sel-module', 'Module'],
    ['sel-year',   'Year'],
    ['sel-diff',   'Difficulty'],
    ['sel-qtype',  'Type']
  ];
  pairs.forEach(function(p) {
    var el = document.getElementById(p[0]);
    if (el && el.value !== 'all') {
      addChip(container, p[1] + ': ' + el.options[el.selectedIndex].text, function() {
        el.value = 'all'; applyFilters();
      });
    }
  });
  var search = document.getElementById('search-input').value;
  if (search) {
    addChip(container, 'Search: "' + search.substring(0, 12) + '…"', function() {
      document.getElementById('search-input').value = ''; applyFilters();
    });
  }
}

function addChip(parent, text, onRemove) {
  var chip = document.createElement('span');
  chip.className = 'chip';
  chip.innerHTML = text + ' <span class="chip-x">&times;</span>';
  chip.querySelector('.chip-x').onclick = onRemove;
  parent.appendChild(chip);
}

// ── RESET FILTERS ────────────────────────────────────────────
function resetFilters() {
  document.getElementById('search-input').value = '';
  ['sel-module','sel-year','sel-diff','sel-qtype'].forEach(function(id) {
    document.getElementById(id).value = 'all';
  });
  document.getElementById('sel-sort').value = 'default';
  ['chk-imp','chk-high','chk-rep','chk-prob','chk-conc','chk-form'].forEach(function(id) {
    document.getElementById(id).checked = false;
  });
  ['lbl-imp','lbl-high','lbl-rep','lbl-prob','lbl-conc','lbl-form'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('on');
  });
  applyFilters();
}

// ── SOLUTION MODAL ────────────────────────────────────────────
function openSolutionModal(qid) {
  var q = questionsDB.find(function(x) { return x.id === qid; });
  if (!q) { console.warn('Q not found:', qid); return; }

  var diffCls = q.diff === 'hard' ? 'dh' : q.diff === 'medium' ? 'dm' : 'de';
  document.getElementById('modal-tags').innerHTML =
    '<span class="mod-tag ' + q.module + '">' + q.module.toUpperCase() + '</span>' +
    '<span class="pyq-year">' + q.year + '</span>' +
    '<span class="pyq-marks">' + q.marks + ' Marks</span>' +
    '<span class="' + diffCls + '">' + q.diff.toUpperCase() + '</span>' +
    (q.repeated ? '<span class="rep-badge">🔁 Repeated</span>' : '');

  document.getElementById('modal-question-text').innerHTML = q.question;
  document.getElementById('ans-content').innerHTML         = q.answer;

  // Reset zoom to 100% on open
  currentZoom = 100;
  document.getElementById('ans-content').style.zoom = '100%';
  document.getElementById('zoom-lbl').textContent = '100%';
  document.getElementById('ans-scroll').scrollTop = 0;

  document.getElementById('sol-modal').classList.add('open');

  // Render LaTeX in modal
  renderMathIn(document.getElementById('ans-content'));
  renderMathIn(document.getElementById('modal-question-text'));
}

function renderMathIn(el) {
  if (el && typeof renderMathInElement === 'function') {
    renderMathInElement(el, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\[', right: '\\]', display: true},
        {left: '\\(', right: '\\)', display: false},
        {left: '$', right: '$', display: false}
      ],
      throwOnError: false
    });
  }
}

function closeSolutionModal() {
  document.getElementById('sol-modal').classList.remove('open');
}

function adjustZoom(delta) {
  currentZoom = Math.max(50, Math.min(200, currentZoom + delta));
  document.getElementById('ans-content').style.zoom = currentZoom + '%';
  document.getElementById('zoom-lbl').textContent = currentZoom + '%';
}

function resetZoom() {
  currentZoom = 100;
  document.getElementById('ans-content').style.zoom = '100%';
  document.getElementById('zoom-lbl').textContent = '100%';
  document.getElementById('ans-scroll').scrollTop = 0;
}

function copyQuestion() {
  var text = document.getElementById('modal-question-text').innerText;
  var btn  = document.getElementById('copy-btn');
  if (!text) return;
  var doCopy = function() {
    btn.textContent = '✅ Copied!';
    setTimeout(function() { btn.textContent = '📋 Copy Question'; }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(doCopy).catch(function() {
      fallbackCopy(text, doCopy);
    });
  } else { fallbackCopy(text, doCopy); }
}

function fallbackCopy(text, cb) {
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); if (cb) cb(); } catch(e) {}
  document.body.removeChild(ta);
}

// ── RELATED PYQ MODAL ─────────────────────────────────────────
function openRelatedModal(topicKey) {
  var ids  = relatedPyqMap[topicKey] || [];
  var list = document.getElementById('related-list');
  list.innerHTML = '';

  if (ids.length === 0) {
    list.innerHTML = '<p style="color:var(--muted);text-align:center;padding:20px;">No related PYQs found in 2022–2025 data.</p>';
  } else {
    ids.forEach(function(qid) {
      var q = questionsDB.find(function(x) { return x.id === qid; });
      if (!q) return;
      var diffCls = q.diff === 'hard' ? 'dh' : q.diff === 'medium' ? 'dm' : 'de';
      var item = document.createElement('div');
      item.className = 'related-item';
      item.innerHTML =
        '<div class="related-item-head">' +
          '<span class="qnum-badge">' + q.qnum + '</span>' +
          '<span class="pyq-marks">' + q.marks + ' Marks</span>' +
          '<span class="' + diffCls + '">' + q.diff.toUpperCase() + '</span>' +
          (q.repeated ? '<span class="rep-badge">🔁</span>' : '') +
          '<button class="sol-btn" style="padding:3px 10px;font-size:11px;" data-qid="' + q.id + '">👁 View Solution</button>' +
        '</div>' +
        '<div class="related-item-q">' + q.question + '</div>';
      list.appendChild(item);
    });
  }
  document.getElementById('rel-modal').classList.add('open');
}

function closeRelatedModal() {
  document.getElementById('rel-modal').classList.remove('open');
}

// ── CHECKLIST PERSISTENCE ─────────────────────────────────────
function saveCheck(el) {
  localStorage.setItem(el.id, el.checked ? '1' : '0');
}

function loadChecks() {
  document.querySelectorAll('.chk-persist').forEach(function(el) {
    if (localStorage.getItem(el.id) === '1') el.checked = true;
  });
}

// ── BOOT ─────────────────────────────────────────────────────
window.onload = function() {
  renderCards();
  loadChecks();

  // Render LaTeX on all static page content (tables, strategy cards, etc.)
  setTimeout(function() { renderMathIn(document.body); }, 300);

  // ── Event delegation: sol-btn clicks anywhere on page ──
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.sol-btn');
    if (!btn) return;
    e.preventDefault();
    var qid = btn.getAttribute('data-qid');
    if (!qid) return;
    // If inside related modal, close it first then open solution
    if (document.getElementById('rel-modal').classList.contains('open')) {
      closeRelatedModal();
      setTimeout(function() { openSolutionModal(qid); }, 200);
    } else {
      openSolutionModal(qid);
    }
  });

  // Backdrop click to close modals
  document.getElementById('sol-modal').addEventListener('click', function(e) {
    if (e.target === this) closeSolutionModal();
  });
  document.getElementById('rel-modal').addEventListener('click', function(e) {
    if (e.target === this) closeRelatedModal();
  });

  // ESC closes any open modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSolutionModal();
      closeRelatedModal();
    }
  });
};
