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

// ── BOOK-STYLE LATEX SOLUTIONS ───────────────────────────────
// High-yield numerical answers are rewritten here in clean textbook form.
var latexSolutions = {
  q2022_1ii: `
    <div class="solution-book">
      <h3 class="sol-title">Sleeper Density Calculation</h3>
      <div class="given-box"><b>Given:</b> Broad Gauge route with sleeper density \(M+7\).</div>
      <div class="formula-box">
        \[
          M = 13\,\text{m} \quad \Rightarrow \quad N = M+7 = 13+7 = 20
        \]
      </div>
      <div class="final-box"><b>Answer:</b> Number of sleepers per rail length = \(\boxed{20}\). Hence option <b>(c)</b>.</div>
    </div>`,
  q2022_1ix: `
    <div class="solution-book">
      <h3 class="sol-title">Airport Reference Temperature</h3>
      <div class="given-box">\(T_a = 25^\circ\text{C}\), \(T_m = 40^\circ\text{C}\)</div>
      <div class="step">Formula</div>
      \[
        T_R = T_a + \frac{T_m - T_a}{3}
      \]
      <div class="step">Substitution</div>
      \[
        T_R = 25 + \frac{40-25}{3}
            = 25 + 5
            = 30^\circ\text{C}
      \]
      <div class="final-box"><b>Answer:</b> \(\boxed{30^\circ\text{C}}\), option <b>(b)</b>.</div>
    </div>`,
  q2023_1v: `
    <div class="solution-book">
      <h3 class="sol-title">Cant Requirement for 2° BG Curve</h3>
      <div class="given-box">\(D=2^\circ\), \(V=65\,\text{km/h}\), \(G=1.676\,\text{m}\)</div>
      <div class="step">Radius of curve</div>
      \[
        R = \frac{1720}{D} = \frac{1720}{2} = 860\,\text{m}
      \]
      <div class="step">Superelevation</div>
      \[
        e = \frac{G V^2}{127R}
          = \frac{1.676 \times 65^2}{127 \times 860}
          = 0.0648\,\text{m}
          = 64.8\,\text{mm}
      \]
      <div class="final-box"><b>Answer:</b> \(\boxed{65\,\text{mm}}\), option <b>(a)</b>.</div>
    </div>`,
  q2023_3b: `
    <div class="solution-book">
      <h3 class="sol-title">Thickness of Stone Ballast</h3>
      <div class="given-box">
        Sleeper density \(=M+7\), Broad Gauge rail length \(M=13\,\text{m}\), sleeper width \(w=25\,\text{cm}\).
      </div>
      <div class="step">Number of sleepers per rail length</div>
      \[
        N = M+7 = 13+7 = 20
      \]
      <div class="step">Sleeper spacing</div>
      \[
        S = \frac{13}{20} = 0.65\,\text{m} = 65\,\text{cm}
      \]
      <div class="step">Minimum ballast depth</div>
      \[
        d = \frac{S-w}{2}
          = \frac{65-25}{2}
          = 20\,\text{cm}
          = 200\,\text{mm}
      \]
      <div class="final-box"><b>Required ballast thickness:</b> \(\boxed{200\,\text{mm}}\).</div>
    </div>`,
  q2023_4a: `
    <div class="solution-book">
      <h3 class="sol-title">Superelevation and Maximum Permissible Speed</h3>
      <div class="given-box">
        \(D=2^\circ\), \(G=1.676\,\text{m}\), equilibrium speed \(V_e=80\,\text{km/h}\), sanctioned speed \(=110\,\text{km/h}\).
      </div>
      <div class="step">1. Radius of curve</div>
      \[
        R = \frac{1720}{D} = \frac{1720}{2} = 860\,\text{m}
      \]
      <div class="step">2. Equilibrium superelevation</div>
      \[
        \begin{aligned}
        e &= \frac{G V_e^2}{127R} \\
          &= \frac{1.676\times 80^2}{127\times 860} \\
          &= \frac{10726.4}{109220} = 0.0982\,\text{m}
        \end{aligned}
      \]
      \[
        e = 98.2\,\text{mm} \approx \boxed{100\,\text{mm}}
      \]
      <div class="step">3. Speed check using Martin's formula</div>
      \[
        V_{\max} = 4.35\sqrt{R-67}
                 = 4.35\sqrt{860-67}
                 = 122.5\,\text{km/h}
      \]
      <div class="final-box">
        Since \(122.5\,\text{km/h}\) is greater than sanctioned speed, adopt \(\boxed{110\,\text{km/h}}\).<br>
        <b>Final:</b> Superelevation \(\boxed{100\,\text{mm}}\), speed \(\boxed{110\,\text{km/h}}\).
      </div>
    </div>`,
  q2023_5b: `
    <div class="solution-book">
      <h3 class="sol-title">Maximum Permissible Train Load</h3>
      <div class="given-box">
        Four driving axles, axle load \(=28.42\,\text{t}\), \(\mu=0.2\), \(V=48.3\,\text{km/h}\), gradient \(1:200\), curve \(D=3^\circ\).
      </div>
      <div class="step">1. Hauling capacity</div>
      \[
        W_d = 4\times 28.42 = 113.68\,\text{t}
      \]
      \[
        F = \mu W_d = 0.2\times 113.68 = 22.736\,\text{t}
      \]
      <div class="step">2. Resistance per tonne</div>
      \[
        R_1 = 0.0016 + 0.00008V + 0.0000006V^2
      \]
      \[
        R_1 = 0.0016 + 0.00008(48.3) + 0.0000006(48.3)^2 = 0.006863
      \]
      \[
        R_g = \frac{1}{200}=0.005, \qquad
        R_c = 0.0004D = 0.0004(3)=0.0012
      \]
      <div class="step">3. Total train load</div>
      \[
        R = W(0.006863+0.005+0.0012)=0.013063W
      \]
      \[
        F=R \Rightarrow 22.736 = 0.013063W
      \]
      \[
        W = \frac{22.736}{0.013063}=1740.4\,\text{t}
      \]
      <div class="final-box"><b>Maximum permissible train load:</b> \(\boxed{1740\,\text{tonnes}}\).</div>
    </div>`,
  q2023_6b: `
    <div class="solution-book">
      <h3 class="sol-title">Corrected Runway Length</h3>
      <div class="given-box">Standard length \(L_0=1500\,\text{m}\), elevation \(h=110\,\text{m}\), \(T_R=32^\circ\text{C}\).</div>
      <div class="step">1. Elevation correction</div>
      \[
        C_e = 1500\left(0.07\times\frac{110}{300}\right)=38.5\,\text{m}
      \]
      \[
        L_1 = 1500+38.5=1538.5\,\text{m}
      \]
      <div class="step">2. Temperature correction</div>
      \[
        T_s = 15-0.0065h = 15-0.0065(110)=14.285^\circ\text{C}
      \]
      \[
        \Delta T = 32-14.285=17.715^\circ\text{C}
      \]
      \[
        C_t = L_1(0.01\Delta T)=1538.5(0.17715)=272.5\,\text{m}
      \]
      \[
        L_2 = 1538.5+272.5=1811\,\text{m}
      \]
      <div class="note">Combined correction check: \((38.5+272.5)/1500 = 20.7\% < 35\%\), hence acceptable.</div>
      <div class="step">3. Gradient correction</div>
      \[
        g_{\text{eff}}=0.214\%, \qquad
        C_g = L_2(0.20\times 0.214)=77.5\,\text{m}
      \]
      \[
        L = 1811+77.5=1888.5\,\text{m}
      \]
      <div class="final-box"><b>Corrected runway length:</b> \(\boxed{1889\,\text{m}}\).</div>
    </div>`,
  q2024_7a: `
    <div class="solution-book">
      <h3 class="sol-title">Taxiway Turning Radius for Boeing 707-320</h3>
      <div class="given-box">\(W_b=17.70\,\text{m}\), \(T=6.62\,\text{m}\), \(V=40\,\text{km/h}\), \(f=0.13\).</div>
      <div class="step">1. Radius based on speed</div>
      \[
        R_1 = \frac{V^2}{125f}
            = \frac{40^2}{125\times0.13}
            = 98.46\,\text{m}
      \]
      <div class="step">2. Radius based on wheelbase geometry</div>
      \[
        R_2 = \frac{W_b^2}{0.5(W_t-T)-S}
      \]
      \[
        R_2 = \frac{17.70^2}{0.5(22.5-6.62)-6.0}
            = \frac{313.29}{1.94}
            = 161.49\,\text{m}
      \]
      <div class="step">3. Select design radius</div>
      \[
        R = \max(98.46,\;161.49,\;120)=161.49\,\text{m}
      \]
      <div class="final-box"><b>Adopt:</b> \(\boxed{R=162\,\text{m}}\).</div>
    </div>`,
  q2024_7c: `
    <div class="solution-book">
      <h3 class="sol-title">Runway Length Correction as per ICAO</h3>
      <div class="given-box">\(L_0=2000\,\text{m}\), \(h=535\,\text{m}\), \(T_R=22.65^\circ\text{C}\), \(g=1\%\).</div>
      <div class="step">1. Elevation correction</div>
      \[
        C_e = 2000\left(0.07\times\frac{535}{300}\right)=249.67\,\text{m}
      \]
      \[
        L_1 = 2249.67\,\text{m}
      \]
      <div class="step">2. Temperature correction</div>
      \[
        T_s = 15-0.0065(535)=11.52^\circ\text{C}
      \]
      \[
        \Delta T = 22.65-11.52=11.13^\circ\text{C}
      \]
      \[
        C_t = 2249.67(0.1113)=250.4\,\text{m}
      \]
      \[
        L_2 = 2249.67+250.4 \approx 2500\,\text{m}
      \]
      <div class="step">3. Gradient correction</div>
      \[
        C_g = 2500(0.20\times1)=500\,\text{m}
      \]
      \[
        L = 2500+500=3000\,\text{m}
      \]
      <div class="final-box"><b>Final corrected runway length:</b> \(\boxed{3000\,\text{m}}\).</div>
    </div>`,
  q2025_4a: `
    <div class="solution-book">
      <h3 class="sol-title">Runway Gradient Correction</h3>
      <div class="given-box">Length after elevation and temperature corrections: \(L=2150\,\text{m}\).</div>
      <div class="step">1. Elevation profile</div>
      <table><thead><tr><th>Chainage</th><th>Gradient</th><th>Elevation</th></tr></thead><tbody>
        <tr><td>0 m</td><td>—</td><td>0.0 m</td></tr>
        <tr><td>500 m</td><td>+1.0%</td><td>+5.0 m</td></tr>
        <tr><td>1000 m</td><td>−0.8%</td><td>+1.0 m</td></tr>
        <tr><td>1500 m</td><td>−0.4%</td><td>−1.0 m</td></tr>
        <tr><td>2200 m</td><td>+0.5%</td><td>+2.5 m</td></tr>
      </tbody></table>
      <div class="step">2. Effective gradient</div>
      \[
        H_{\max}=5.0\,\text{m},\quad H_{\min}=-1.0\,\text{m}
      \]
      \[
        g_{\text{eff}} = \frac{H_{\max}-H_{\min}}{2200}\times100
        = \frac{6.0}{2200}\times100
        = 0.2727\%
      \]
      <div class="step">3. Gradient correction</div>
      \[
        C_g = 2150(0.20\times0.2727)=117.3\,\text{m}
      \]
      \[
        L_f = 2150+117.3=2267.3\,\text{m}
      \]
      <div class="final-box"><b>Corrected runway length:</b> \(\boxed{2267\,\text{m}}\).</div>
    </div>`,
  q2025_5c: `
    <div class="solution-book">
      <h3 class="sol-title">Restricted Speed on Main Line with Reverse Curve</h3>
      <div class="given-box">Branch curve \(D_b=5^\circ\), main curve \(D_m=3^\circ\), branch speed \(V_b=35\,\text{km/h}\).</div>
      <div class="step">1. Branch curve cant requirement</div>
      \[
        R_b = \frac{1720}{5}=344\,\text{m}
      \]
      \[
        e_b = \frac{1.676\times 35^2}{127\times344}=0.047\,\text{m}=47\,\text{mm}
      \]
      <div class="step">2. Negative cant available on branch</div>
      \[
        e_{\text{main}} = C_d - e_b = 76-47=29\,\text{mm}
      \]
      <div class="step">3. Speed on main line</div>
      \[
        R_m = \frac{1720}{3}=573.3\,\text{m}
      \]
      \[
        e_{\text{total}}=29+76=105\,\text{mm}=0.105\,\text{m}
      \]
      \[
        V_m=\sqrt{\frac{0.105\times127\times573.3}{1.676}}
            =67.5\,\text{km/h}
      \]
      <div class="final-box"><b>Restricted speed on main line:</b> \(\boxed{67.5\,\text{km/h}}\).</div>
    </div>`,
  q2025_6b: `
    <div class="solution-book">
      <h3 class="sol-title">Hauling Capacity and Speed Reduction</h3>
      <div class="given-box">Three driving axles, axle load \(22\,\text{t}\), \(\mu=0.2\), speed \(80\,\text{km/h}\).</div>
      <div class="step">1. Maximum load on straight level track</div>
      \[
        W_d=3\times22=66\,\text{t},\qquad F=0.2\times66=13.2\,\text{t}
      \]
      \[
        R_1=W(0.0016+0.00008V+0.0000006V^2)
      \]
      \[
        R_1=W(0.0016+0.00008(80)+0.0000006(80)^2)=0.01184W
      \]
      \[
        13.2=0.01184W \Rightarrow W=1114.9\,\text{t}
      \]
      <div class="step">2. Speed on gradient \(1:200\)</div>
      \[
        0.01184 = 0.0066 + 0.00008V + 0.0000006V^2
      \]
      \[
        0.6V^2+80V-5240=0 \Rightarrow V=48.2\,\text{km/h}
      \]
      \[
        \Delta V_1=80-48.2=31.8\,\text{km/h}
      \]
      <div class="step">3. Speed on gradient plus 4° curve</div>
      \[
        R_c = 0.0004(4)W=0.0016W
      \]
      \[
        0.01184=0.0082+0.00008V+0.0000006V^2
      \]
      \[
        0.6V^2+80V-3640=0 \Rightarrow V=35.9\,\text{km/h}
      \]
      \[
        \Delta V_2=48.2-35.9=12.3\,\text{km/h}
      \]
      <div class="final-box">
        \(\boxed{W=1115\,\text{t}}\), gradient speed \(\boxed{48.2\,\text{km/h}}\), curve+gradient speed \(\boxed{35.9\,\text{km/h}}\).
      </div>
    </div>`,
  q2025_3a_exit: `
    <div class="solution-book">
      <h3 class="sol-title">Design of Exit Taxiway</h3>
      <div class="given-box">Turning angle \(\alpha=40^\circ\), turn-off speed \(V=65\,\text{km/h}\), coefficient of friction \(f=0.13\).</div>
      <div class="step">1. Radius of circular curve</div>
      \[
        R=\frac{V^2}{125f}=\frac{65^2}{125\times0.13}=260\,\text{m}
      \]
      <div class="step">2. Arc length</div>
      \[
        L=R\alpha_{\text{rad}}=260\left(\frac{40\pi}{180}\right)=181.5\,\text{m}
      \]
      <div class="step">3. Layout sketch</div>
      <pre>
RUNWAY  ═══════════════════════════════════════════
           ●──────── R = 260 m ────────●
            \                           /
             \       α = 40°           /
              \_______________________/
                   EXIT TAXIWAY
      </pre>
      <div class="final-box"><b>Adopt:</b> Circular curve radius \(\boxed{260\,\text{m}}\), arc length \(\boxed{181.5\,\text{m}}\).</div>
    </div>`
};

function getFormattedSolution(q) {
  var base = latexSolutions[q.id]
    ? latexSolutions[q.id]
    : '<div class="solution-book"><h3 class="sol-title">Worked Answer</h3>' + q.answer + '</div>';
  return base + buildStudyTail(q);
}

function buildStudyTail(q) {
  var data = getApproachData(q);
  var termsRows = data.terms.map(function(t) {
    return '<tr><td class="term-symbol">' + t[0] + '</td><td>' + t[1] + '</td><td>' + t[2] + '</td></tr>';
  }).join('');

  var termsTable = termsRows
    ? '<div class="step">Symbols / Terms Used</div>' +
      '<table class="term-table"><thead><tr><th>Term</th><th>Meaning</th><th>Unit / Note</th></tr></thead><tbody>' + termsRows + '</tbody></table>'
    : '';

  return String.raw`
    <div class="solution-book study-tail">
      <h3 class="study-tail-title">Summary, Approach & Exam Hint</h3>
      ${termsTable}
      <div class="approach-box"><b>Approach:</b> ${data.approach}</div>
      <div class="summary-box"><b>Final Summary:</b> ${data.summary}</div>
      <div class="exam-hint-box"><b>Exam Hint:</b> ${data.hint}</div>
    </div>`;
}

function getApproachData(q) {
  var text = (q.question + ' ' + q.qnum).toLowerCase();

  if (text.includes('taxiway') || text.includes('turning radius') || text.includes('boeing')) {
    return {
      terms: [
        ['\\(R_1\\)', 'Radius based on speed and side friction', 'm'],
        ['\\(R_2\\)', 'Radius based on aircraft wheelbase geometry', 'm'],
        ['\\(V\\)', 'Design turning or exit speed of aircraft', 'km/h'],
        ['\\(f\\)', 'Coefficient of side friction between tyre and pavement', 'dimensionless'],
        ['\\(W_b\\)', 'Wheelbase of aircraft', 'm'],
        ['\\(T\\)', 'Tread of main landing gear', 'm'],
        ['\\(W_t\\)', 'Taxiway pavement width', 'm'],
        ['\\(S\\)', 'Required clearance from outer wheel to pavement edge', 'm']
      ],
      approach: 'First calculate the speed-based radius using side friction. Then calculate the geometry-based radius using wheelbase and tread. Finally choose the maximum of speed radius, geometry radius, and ICAO minimum radius.',
      summary: 'The answer is governed by the most restrictive safe radius, not by one formula alone. For Boeing-type aircraft, geometry often controls the final design value.',
      hint: 'In the exam, write both formulae before substituting values. Even if one radius is enough for the answer, showing both checks earns method marks.'
    };
  }

  if (text.includes('runway') || text.includes('airport reference temperature') || text.includes('art')) {
    return {
      terms: [
        ['\\(L_0\\)', 'Basic runway length under standard conditions', 'm'],
        ['\\(L_1\\)', 'Runway length after elevation correction', 'm'],
        ['\\(L_2\\)', 'Runway length after temperature correction', 'm'],
        ['\\(L_f\\)', 'Final corrected runway length', 'm'],
        ['\\(h\\)', 'Elevation of airport above mean sea level', 'm'],
        ['\\(T_R\\)', 'Airport reference temperature', '°C'],
        ['\\(T_s\\)', 'Standard atmospheric temperature at site elevation', '°C'],
        ['\\(g_{eff}\\)', 'Effective runway gradient', '%'],
        ['\\(C_e, C_t, C_g\\)', 'Elevation, temperature, and gradient corrections', 'm']
      ],
      approach: 'Apply corrections in the fixed order: elevation first, temperature second, gradient last. Use the corrected length from the previous step as the base for the next correction.',
      summary: 'Runway length increases with elevation, higher temperature, and runway gradient. Always check the combined elevation plus temperature correction percentage before applying gradient correction.',
      hint: 'Most mistakes happen when students apply gradient correction on the original length. Apply it on the length already corrected for elevation and temperature.'
    };
  }

  if (text.includes('superelevation') || text.includes('cant') || text.includes('curve')) {
    return {
      terms: [
        ['\\(e\\)', 'Superelevation or cant provided between outer and inner rail', 'm or mm'],
        ['\\(G\\)', 'Gauge width for Broad Gauge', 'm; BG = 1.676 m'],
        ['\\(V\\)', 'Train speed', 'km/h'],
        ['\\(R\\)', 'Radius of horizontal curve', 'm'],
        ['\\(D\\)', 'Degree of curve', 'degree'],
        ['\\(C_d\\)', 'Cant deficiency allowed on BG track', 'mm'],
        ['\\(R=1720/D\\)', 'Approximate BG curve-radius relation', 'm']
      ],
      approach: 'Convert degree of curve to radius first. Then use the equilibrium cant formula. If the question asks speed, combine actual cant and cant deficiency and solve the same relation for speed.',
      summary: 'For a 2° BG curve, radius is 860 m. This value appears repeatedly, so keep it ready for fast substitution.',
      hint: 'Keep units consistent: use \(G\) and \(R\) in metres, \(V\) in km/h, and convert final \(e\) from metres to millimetres.'
    };
  }

  if (text.includes('hauling') || text.includes('tractive') || text.includes('locomotive') || text.includes('train load')) {
    return {
      terms: [
        ['\\(F\\)', 'Available tractive effort or hauling capacity', 'tonnes'],
        ['\\(\\mu\\)', 'Coefficient of rail-wheel adhesion/friction', 'dimensionless'],
        ['\\(W_d\\)', 'Weight on driving wheels only', 'tonnes'],
        ['\\(W\\)', 'Total train load to be hauled', 'tonnes'],
        ['\\(V\\)', 'Train speed', 'km/h'],
        ['\\(R_1\\)', 'Basic train resistance', 'tonnes resistance per tonne load'],
        ['\\(R_g\\)', 'Grade resistance on rising gradient', 'tonnes per tonne'],
        ['\\(R_c\\)', 'Curve resistance', 'tonnes per tonne'],
        ['\\(D\\)', 'Degree of curve', 'degree']
      ],
      approach: 'First compute available tractive effort from adhesion. Next calculate each resistance per tonne. Add resistances and equate total resistance to tractive effort to solve for load or speed.',
      summary: 'Hauling capacity problems are force-balance questions: available effort equals total resistance under the given condition.',
      hint: 'Use only driving axle load for \(W_d\), not the total locomotive weight unless the question says so.'
    };
  }

  if (text.includes('sleeper') || text.includes('ballast')) {
    return {
      terms: [
        ['\\(M\\)', 'Standard rail length for BG', 'm; usually 13 m'],
        ['\\(N\\)', 'Number of sleepers per rail length', 'count'],
        ['\\(S\\)', 'Centre-to-centre sleeper spacing', 'm or cm'],
        ['\\(w\\)', 'Width of sleeper', 'cm'],
        ['\\(d\\)', 'Minimum ballast cushion depth', 'cm or mm']
      ],
      approach: 'Convert sleeper density into number of sleepers first. Find sleeper spacing by dividing rail length by number of sleepers. Then use the load dispersion formula for ballast depth.',
      summary: 'For BG with \(M+7\), sleepers per rail length are 20. Ballast depth often comes out as 200 mm using standard assumptions.',
      hint: 'Remember: \(M\) is not a variable to solve; it is the standard rail length, normally 13 m for BG.'
    };
  }

  if (text.includes('coning')) {
    return {
      terms: [
        ['Coning slope', 'Taper provided on wheel tread and rail inclination', 'usually 1 in 20'],
        ['Outer wheel', 'Wheel travelling on larger radius in a curve', 'covers longer distance'],
        ['Inner wheel', 'Wheel travelling on smaller radius in a curve', 'covers shorter distance'],
        ['Self-centering', 'Restoring effect that brings wheelset back to centre', 'conceptual']
      ],
      approach: 'Explain the purpose first, then separately write behaviour on straight track and curved track. Add a small sketch if possible.',
      summary: 'Coning allows a rigid axle to negotiate curves smoothly by automatically creating different effective rolling diameters for inner and outer wheels.',
      hint: 'Use the phrase “outer wheel runs on larger diameter and inner wheel on smaller diameter” — it directly earns marks.'
    };
  }

  if (text.includes('tunnel') || text.includes('ventilation') || text.includes('soft soil')) {
    return {
      terms: [
        ['Face', 'Exposed surface at which tunnel excavation proceeds', 'construction term'],
        ['Muck', 'Excavated material removed from tunnel', 'm³ or tonnes'],
        ['Heading', 'Upper portion of tunnel excavation', 'method term'],
        ['Bench', 'Lower portion excavated after heading', 'method term'],
        ['Ventilation', 'Supply of fresh air and removal of foul gases', 'm³/min or air changes/hr']
      ],
      approach: 'For theory answers, classify first and then explain each method with suitability, advantages, and limitations. Diagrams are not mandatory but flow sequence improves marks.',
      summary: 'Tunnel answers score well when written in method-wise format: definition, process, suitability, and one advantage.',
      hint: 'Do not write only names of methods. Add one working line for each method to get full theory marks.'
    };
  }

  if (text.includes('points') || text.includes('crossing') || text.includes('turnout')) {
    return {
      terms: [
        ['Stock rail', 'Fixed rail against which tongue rail fits', 'track component'],
        ['Tongue rail', 'Movable tapered rail that diverts wheels', 'track component'],
        ['Heel', 'Fixed end of tongue rail', 'track component'],
        ['Crossing / frog', 'V-shaped portion where wheel flange crosses rail gap', 'track component'],
        ['Check rail', 'Guard rail preventing flange from taking wrong path', 'clearance ≈ 44 mm']
      ],
      approach: 'Start with the necessity of turnouts, then draw the sketch, then label all parts in a table. The sketch carries major marks.',
      summary: 'Points and crossings are used to safely divert trains from one track to another because railway vehicles cannot steer like road vehicles.',
      hint: 'Even a rough sketch gets marks if the six labels are correct and placed logically.'
    };
  }

  return {
    terms: [
      ['Given data', 'Values supplied in the question', 'write with units'],
      ['Required', 'What the question asks to find or explain', 'final answer'],
      ['Standard value', 'Code/railway/ICAO value used from memory', 'mention source if known']
    ],
    approach: 'Read the question, underline the topic, write the standard formula or classification, substitute values carefully if numerical, and finish with a boxed final answer.',
    summary: 'A complete answer should contain the definition or formula, the working steps, and a clear final result with units.',
    hint: 'In the exam, never leave a numerical without units and never leave a theory answer as only bullet names without explanations.'
  };
}

function renderMathInModal() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([
      document.getElementById('modal-question-text'),
      document.getElementById('ans-content')
    ]).catch(function(err) { console.warn('MathJax render error:', err); });
  }
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
  document.getElementById('ans-content').innerHTML         = getFormattedSolution(q);

  // Reset zoom to 100% on open
  currentZoom = 100;
  document.getElementById('ans-content').style.zoom = '100%';
  document.getElementById('zoom-lbl').textContent = '100%';
  document.getElementById('ans-scroll').scrollTop = 0;

  document.getElementById('sol-modal').classList.add('open');
  renderMathInModal();
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
