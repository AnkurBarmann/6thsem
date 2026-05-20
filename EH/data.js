// Engineering Hydrology (CE-301) Previous Year Questions Database
// Defines questionsDB, relatedPyqMap, modulesData as global variables.

const questionsDB = [
  // --- 2022 MCQ Questions ---
  {
    id: 'pyq-2022-1-1', module: 2, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'Medium', repeated: false, probable: false,
    concept: 'Raingauge site selection', formula: 'Distance >= 2 * Height', qnum: 'Q1 (i)',
    question: 'In selecting site for a rain gauge, the nearest object should be at a minimum distance of:<br>(a) twice its height<br>(b) three times its height<br>(c) equal to its height<br>(d) anywhere',
    answer: `
      <b>Correct Option: (a) twice its height</b>
      <h4>Explanation:</h4>
      <ul>
        <li>To avoid shielding or wind-shading effects, the rain gauge must be placed in an open area.</li>
        <li>IMD guidelines: distance between the rain gauge and the nearest object must be at least <b>twice the height</b> of the object ($d \\ge 2h$).</li>
        <li>The height of the rain gauge rim above ground is typically set to $30\\text{ cm}$.</li>
      </ul>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$h$ = height of the nearest obstacle (m)</li><li>$d$ = minimum clearance distance (m)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Rule for rain gauge site selection: $d \\ge 2h$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Sketch a simple diagram showing obstacle height $h$ and rain gauge at distance $2h$.</div>`
  },
  {
    id: 'pyq-2022-1-2', module: 2, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'Medium', repeated: false, probable: false,
    concept: 'Orographic precipitation', formula: 'Air mass lifting by barriers', qnum: 'Q1 (ii)',
    question: 'Orographic precipitation occurs due to air masses being lifted to higher altitudes by:<br>(a) The density difference of air masses<br>(b) a frontal action<br>(c) the presence of mountain barriers<br>(d) extratropical cyclones',
    answer: `
      <b>Correct Option: (c) the presence of mountain barriers</b>
      <h4>Explanation:</h4>
      <ol>
        <li><b>Orographic Precipitation:</b> caused by mountain barriers forcing air to ascend.</li>
        <li><b>Convective Precipitation:</b> due to localized heating.</li>
        <li><b>Cyclonic (Frontal) Precipitation:</b> due to collision of warm and cold air masses.</li>
      </ol>
      <div class="summary-box">📌 <b>Summary:</b> Mountain barriers force moist air upward → adiabatic cooling ($\\approx 9.8^\\circ\\text{C/km}$ dry rate) → orographic rainfall.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> "Oro" = mountains/relief. Distinguish from frontal or convective lifting.</div>`
  },
  {
    id: 'pyq-2022-1-3', module: 3, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'High', repeated: true, probable: false,
    concept: 'Phi-index definition', formula: 'P_excess - Runoff = Infiltration', qnum: 'Q1 (iii)',
    question: '$\\Phi$-index is defined as:<br>(a) the difference between maximum and minimum infiltration capacity<br>(b) the difference between maximum and minimum runoff<br>(c) rainfall intensity above which rainfall volume equals to runoff volume<br>(d) minimum infiltration rate during the storm',
    answer: `
      <b>Correct Option: (c) rainfall intensity above which rainfall volume equals to runoff volume</b>
      <h4>Explanation:</h4>
      <ul>
        <li>The $\\Phi$-index is the average infiltration rate above which rainfall volume equals direct runoff volume.</li>
        <li>$$R = \\sum (P_i - \\Phi) \\cdot \\Delta t \\quad \\text{for } P_i > \\Phi$$</li>
      </ul>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$\\Phi$-index (cm/hr)</li><li>$P_i$ = rainfall intensity (cm/hr)</li><li>$R$ = runoff depth (cm)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> $\\Phi$-index is a horizontal line on the hyetograph; area above it = direct runoff depth.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> $\\Phi$-index includes initial loss implicitly; $W$-index excludes it.</div>`
  },
  {
    id: 'pyq-2022-1-4', module: 6, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'High', repeated: true, probable: false,
    concept: 'S-curve hydrograph', formula: 'Summation of infinite UH', qnum: 'Q1 (iv)',
    question: 'The S-curve hydrograph is:<br>(a) the summation of the unit hydrograph<br>(b) the summation of the total runoff hydrograph<br>(c) the summation of the rainfall hyetograph<br>(d) all the above',
    answer: `
      <b>Correct Option: (a) the summation of the unit hydrograph</b>
      <h4>Explanation:</h4>
      <ul>
        <li>$$S(t) = U(t) + U(t-D) + U(t-2D) + \\dots$$</li>
        <li>It produces equilibrium discharge $Q_e = 2.778 \\dfrac{A}{D}$.</li>
        <li>Used to convert a $D$-hr UH into a $T$-hr UH.</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> S-curve = infinite lagged UH summation; reaches $Q_e = 2.778 A/D$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Memorize $Q_e = 2.778 A/D$ — heavily tested.</div>`
  },
  {
    id: 'pyq-2022-1-5', module: 5, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'High', repeated: true, probable: false,
    concept: 'Flow-duration curve', formula: 'Percent time exceeded', qnum: 'Q1 (v)',
    question: 'The flow-duration curve is a plot of:<br>(a) accumulated flow against time<br>(b) discharge against time in chronological order<br>(c) the base flow against the percentage of times the flow is exceeded<br>(d) the discharge against the percentage of times the flow is equalled or exceeded',
    answer: `
      <b>Correct Option: (d) discharge against percentage of time equalled or exceeded</b>
      <h4>Explanation:</h4>
      <ul>
        <li>FDC = cumulative frequency plot of $Q$ vs % time exceeded.</li>
        <li>Flat curve → large baseflow; steep curve → flash floods.</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> FDC is used for hydroelectric design and flow dependability.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Don't confuse with hydrograph (Q vs t) or mass curve.</div>`
  },
  {
    id: 'pyq-2022-1-6', module: 6, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'Medium', repeated: false, probable: false,
    concept: 'Base-flow separation', formula: 'Flood Hydrograph - DRH = Base flow', qnum: 'Q1 (vi)',
    question: 'Base-flow separation is performed:<br>(a) on an unit hydrograph to get the direct-runoff hydrograph<br>(b) on a flood hydrograph to obtain the magnitude of effective rainfall<br>(c) on a flood hydrograph to obtain the rainfall hyetograph<br>(d) on hydrographs of effluent stream only',
    answer: `
      <b>Correct Option: (b) on a flood hydrograph to obtain the magnitude of effective rainfall</b>
      <h4>Explanation:</h4>
      <ul>
        <li>$Q_{DRH} = Q_{FH} - Q_{BF}$</li>
        <li>Area under DRH = volume of effective rainfall (rainfall excess).</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> Base flow separation isolates direct surface runoff; its volume = effective rainfall depth.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Three methods: Straight line, Two-line, Three-curve. Be ready to sketch.</div>`
  },
  {
    id: 'pyq-2022-1-7', module: 6, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'High', repeated: true, probable: false,
    concept: 'Unit hydrograph assumptions', formula: 'Time invariance + Linear response', qnum: 'Q1 (vii)',
    question: 'The basic assumptions of the unit-hydrograph theory are:<br>(a) nonlinear response and time invariance<br>(b) time invariance and linear response<br>(c) linear response and linear time variance<br>(d) nonlinear time invariance and linear response',
    answer: `
      <b>Correct Option: (b) time invariance and linear response</b>
      <h4>Explanation:</h4>
      <ol>
        <li><b>Linear Response (Superposition):</b> Doubling rainfall excess doubles runoff ordinates.</li>
        <li><b>Time Invariance:</b> Catchment response is independent of when the rainfall occurs.</li>
      </ol>
      <div class="summary-box">📌 <b>Summary:</b> UH is a Linear Time-Invariant (LTI) catchment system.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Mnemonic — "LTI system".</div>`
  },
  {
    id: 'pyq-2022-1-8', module: 7, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'Medium', repeated: false, probable: false,
    concept: 'Probable maximum flood', formula: 'Extreme meteorological conditions', qnum: 'Q1 (viii)',
    question: 'The probable maximum flood is:<br>(a) the standard project flood of an extremely large river<br>(b) a flood adopted in the design of all kinds of spillways<br>(c) a flood adopted in all hydraulic structures<br>(d) an extremely large but physically possible flood in the region',
    answer: `
      <b>Correct Option: (d) extremely large but physically possible flood in the region</b>
      <ul>
        <li><b>PMF:</b> flood from the most severe combination of physically possible conditions.</li>
        <li>Used for high-risk structures (major dam spillways).</li>
        <li>Computed from <b>Probable Maximum Precipitation (PMP)</b>.</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> PMF = absolute physical limit; design standard for major dams.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Distinguish PMF from SPF (Standard Project Flood).</div>`
  },
  {
    id: 'pyq-2022-1-9', module: 8, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'Medium', repeated: false, probable: false,
    concept: 'Hydraulic routing equations', formula: 'Saint-Venant equations', qnum: 'Q1 (ix)',
    question: 'The hydraulic methods of flood routing use:<br>(a) equation of continuity only<br>(b) equation of motion only<br>(c) both the equation of motion and equation of continuity only<br>(d) energy equation only',
    answer: `
      <b>Correct Option: (c) both equation of motion and continuity</b>
      <ul>
        <li><b>Hydrologic Routing:</b> $I - Q = \\dfrac{dS}{dt}$ + storage relation.</li>
        <li><b>Hydraulic Routing:</b> full Saint-Venant equations:
          <ol>
            <li>Continuity: $\\dfrac{\\partial A}{\\partial t} + \\dfrac{\\partial Q}{\\partial x} = 0$</li>
            <li>Momentum: $\\dfrac{\\partial v}{\\partial t} + v\\dfrac{\\partial v}{\\partial x} + g\\dfrac{\\partial y}{\\partial x} - g(S_0 - S_f) = 0$</li>
          </ol>
        </li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> Hydraulic routing uses continuity + momentum (Saint-Venant equations).</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Hydrologic = Continuity + Storage; Hydraulic = Continuity + Momentum.</div>`
  },
  {
    id: 'pyq-2022-1-10', module: 8, year: 2022, marks: 1, diff: 'Easy', qtype: 'MCQ',
    importance: 'High', repeated: true, probable: false,
    concept: 'Muskingum storage equation', formula: 'S = K[xI + (1-x)Q]', qnum: 'Q1 (x)',
    question: 'For channel routing, the Muskingum storage equation is given by:<br>(a) K [xI+(1-x)Q]<br>(b) K [xQ+(1-x)I]<br>(c) K [xQ+(1-x)Q]<br>(d) K [xI+(1+x)Q]',
    answer: `
      <b>Correct Option: (a) K [xI+(1-x)Q]</b>
      <ul>
        <li>$$S = K [xI + (1-x)Q]$$</li>
        <li><b>Prism Storage:</b> $S_{prism} = KQ$ (proportional to outflow).</li>
        <li><b>Wedge Storage:</b> $S_{wedge} = Kx(I-Q)$.</li>
      </ul>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$S$ = storage ($\\text{m}^3$)</li><li>$K$ = travel time (hours)</li><li>$x$ = weighting factor ($0 \\le x \\le 0.5$)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Total channel storage = weighted wedge + prism: $S = K[xI + (1-x)Q]$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Memorize — basis of all Muskingum coefficient calculations.</div>`
  },

  // --- 2022 Detailed Questions ---
  {
    id: 'pyq-2022-2-a', module: 2, year: 2022, marks: 8, diff: 'Medium', qtype: 'Theory',
    importance: 'High', repeated: true, probable: true,
    concept: 'Forms of precipitation & missing precipitation estimation',
    formula: 'Normal Ratio Method: P_x = (N_x / M) * sum(P_i / N_i)', qnum: 'Q2 (a)',
    question: 'Explain the different forms of precipitation. How is missing annual precipitation at a station estimated?',
    answer: `
      <h4>Part 1: Forms of Precipitation</h4>
      <ul>
        <li><b>Rain:</b> droplets $0.5\\text{ mm}$ to $6\\text{ mm}$. Light $<2.5$, moderate $2.5–7.5$, heavy $>7.5\\text{ mm/hr}$.</li>
        <li><b>Snow:</b> ice crystals (sublimation). Density $\\approx 0.1\\text{ g/cm}^3$.</li>
        <li><b>Drizzle:</b> droplets $<0.5\\text{ mm}$, intensity $<1\\text{ mm/hr}$.</li>
        <li><b>Glaze (Freezing Rain):</b> freezes on contact with ground at $0^\\circ\\text{C}$.</li>
        <li><b>Sleet:</b> frozen raindrops formed in sub-freezing air layer.</li>
        <li><b>Hail:</b> ice pellets $>8\\text{ mm}$ from cumulonimbus.</li>
      </ul>
      <h4>Part 2: Estimating Missing Annual Precipitation</h4>
      <ol>
        <li><b>Arithmetic Mean Method</b> — when all $N_i$ within $\\pm 10\\%$ of $N_x$:
          $$P_x = \\frac{P_A + P_B + \\dots + P_M}{M}$$
        </li>
        <li><b>Normal Ratio Method</b> — when any $N_i$ differs by $>10\\%$:
          $$P_x = \\frac{N_x}{M} \\left[ \\frac{P_A}{N_A} + \\frac{P_B}{N_B} + \\dots + \\frac{P_M}{N_M} \\right]$$
        </li>
      </ol>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$P_x$ = missing rainfall at $X$ (cm)</li><li>$N_x$ = normal rainfall at $X$ (cm)</li><li>$M$ = number of index stations</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Arithmetic mean within $\\pm 10\\%$, else Normal Ratio Method.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Underline the $10\\%$ decision criterion in the answer.</div>`
  },
  {
    id: 'pyq-2022-2-b', module: 2, year: 2022, marks: 7, diff: 'Medium', qtype: 'Theory',
    importance: 'High', repeated: true, probable: false,
    concept: 'Precipitation record consistency & Double mass curve',
    formula: 'P_corrected = P_observed * (Slope_recent / Slope_original)', qnum: 'Q2 (b)',
    question: 'What are the common causes of inconsistency in precipitation record? Discuss how consistency of precipitation record can be tested and corrected.',
    answer: `
      <h4>1. Causes of Inconsistency</h4>
      <ul>
        <li>Shifting of rain gauge to new microclimate.</li>
        <li>Change of surroundings (trees, buildings).</li>
        <li>Replacement of equipment.</li>
        <li>Observational/admin errors.</li>
      </ul>
      <h4>2. Double-Mass Curve (DMC) Method</h4>
      <ol>
        <li>Choose 5–10 stable neighbouring index stations.</li>
        <li>Compute average annual rainfall of the group.</li>
        <li>Arrange data in reverse chronological order.</li>
        <li>Plot $\\sum P_x$ (test) vs $\\sum P_g$ (group).</li>
        <li>A straight line = consistent. Break in slope = inconsistency.</li>
        <li>Correction: $$P_{corrected} = P_{observed} \\times \\left( \\frac{S_a}{S_b} \\right)$$</li>
      </ol>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$S_a$ = recent slope (after break)</li><li>$S_b$ = older slope (before break)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Plot cumulative test vs group; scale older records by $S_a / S_b$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Always sketch the DMC graph with break in slope.</div>`
  },
  {
    id: 'pyq-2022-3-a', module: 3, year: 2022, marks: 8, diff: 'Medium', qtype: 'Theory',
    importance: 'High', repeated: true, probable: true,
    concept: 'Infiltration measurement & indices', formula: 'W = (P - R - I_a) / t_e', qnum: 'Q3 (a)',
    question: 'Explain how infiltration in the field can be measured. What are the different infiltration indices? Explain each of them by sketches where necessary.',
    answer: `
      <h4>1. Field Measurement — Double Ring Infiltrometer</h4>
      <ul>
        <li>Two concentric rings: outer $\\approx 60\\text{ cm}$, inner $\\approx 30\\text{ cm}$, driven $15\\text{ cm}$ deep.</li>
        <li>Both rings filled with $10\\text{ cm}$ water; outer ring prevents lateral spread.</li>
        <li>Rate of fall of water in inner ring = vertical infiltration capacity.</li>
      </ul>
      <h4>2. Infiltration Indices</h4>
      <ol>
        <li><b>$\\Phi$-index:</b> $$R = \\sum (P_i - \\Phi) \\cdot \\Delta t \\quad \\text{for } P_i > \\Phi$$</li>
        <li><b>$W$-index:</b> $$W = \\frac{P - R - I_a}{t_e}$$</li>
      </ol>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$\\Phi, W$ (cm/hr)</li><li>$P$ = total rainfall (cm)</li><li>$R$ = runoff (cm)</li><li>$I_a$ = initial loss (cm)</li><li>$t_e$ = duration of rainfall excess (hr)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Double-ring ensures vertical flow only. $W \\le \\Phi$ since $W$ excludes initial loss.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Draw a hyetograph showing $\\Phi$ line cutting rainfall blocks.</div>`
  },
  {
    id: 'pyq-2022-3-b', module: 3, year: 2022, marks: 7, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'Phi-index numerical calculation', formula: 'R = sum(P_i - phi) * dt', qnum: 'Q3 (b)',
    question: 'The average rainfall over 55 hectares of watershed for a particular storm was as follows:<br>Time (hr): 0, 1, 2, 3, 4, 5, 6, 7<br>Rainfall (cm): 0, 0.75, 1.25, 3.40, 2.95, 1.40, 0.80, 0.<br>The volume of runoff from the storm was determined as 3.20 ha-m. Establish the $\\Phi$-index.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Runoff depth</b>
      $$R = \\frac{3.20\\text{ ha-m}}{55\\text{ ha}} = 0.05818\\text{ m} = 5.818\\text{ cm}$$
      <b>Step 2: Hourly rainfall increments</b>
      <table>
        <thead><tr><th>Hour</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>Total</th></tr></thead>
        <tbody><tr><td>$P_i$ (cm)</td><td>0.75</td><td>1.25</td><td>3.40</td><td>2.95</td><td>1.40</td><td>0.80</td><td><b>10.55</b></td></tr></tbody>
      </table>
      <b>Step 3: Trial 1</b> — all 6 hours active.
      $$\\Phi = \\frac{10.55 - 5.818}{6} = 0.789\\text{ cm/hr}$$
      But $P_1 = 0.75 < 0.789$ → exclude hour 1.
      <b>Step 4: Trial 2</b> — 5 active hours.
      $$\\Phi = \\frac{9.80 - 5.818}{5} = 0.796\\text{ cm/hr}$$
      Consistency check ✓ — Result: $\\Phi$-index $= 0.796\\text{ cm/hr}$.
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$A = 55\\text{ ha}$; $1\\text{ ha-m} = 10^4\\text{ m}^3$</li><li>$\\Phi = 0.796\\text{ cm/hr}$</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> $\\Phi = 0.796\\text{ cm/hr}$; hour-1 rainfall fully infiltrates.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Show each trial; verify consistency after assumption.</div>`
  },
  {
    id: 'pyq-2022-4-a', module: 6, year: 2022, marks: 4, diff: 'Easy', qtype: 'Theory',
    importance: 'High', repeated: true, probable: false,
    concept: 'Unit hydrograph definition & limitations', formula: 'Runoff depth = 1 cm', qnum: 'Q4 (a)',
    question: 'Define Unit hydrograph and state its limitations.',
    answer: `
      <h4>1. Definition</h4>
      <p>A Unit Hydrograph (UH) is the DRH from <b>1 cm</b> of effective rainfall occurring uniformly over the catchment at a uniform rate during a specified duration $D$ hours.</p>
      <h4>2. Limitations</h4>
      <ul>
        <li><b>Size:</b> works best for $2$ to $5000\\text{ km}^2$.</li>
        <li><b>Uniform rainfall</b> assumption rarely valid for large basins.</li>
        <li><b>Time invariance</b> violated by changing land use.</li>
        <li><b>Linearity</b> not strictly true.</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> UH = 1 cm DRH; limited by uniformity & linearity.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> State size range ($2 - 5000\\text{ km}^2$) explicitly.</div>`
  },
  {
    id: 'pyq-2022-4-b', module: 6, year: 2022, marks: 4, diff: 'Easy', qtype: 'Theory',
    importance: 'High', repeated: true, probable: false,
    concept: 'S-curve and uses', formula: 'S_t = sum(UH_t)', qnum: 'Q4 (b)',
    question: 'What is S-curve? Explain its uses.',
    answer: `
      <h4>1. Definition</h4>
      <p>The S-curve is the hydrograph from infinite continuous unit storms of duration $D$:</p>
      $$S(t) = U(t) + U(t-D) + U(t-2D) + \\dots$$
      $$Q_e = 2.778 \\frac{A}{D}$$
      <h4>2. Uses</h4>
      <ul>
        <li>Convert $D$-hr UH to $T$-hr UH.</li>
        <li>Build synthetic UH.</li>
        <li>Derive Instantaneous UH (IUH) as $D \\to 0$.</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> S-curve summation converts UH duration; reaches $Q_e = 2.778 A/D$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Memorize $Q_e = 2.778 A/D$ (SI units).</div>`
  },
  {
    id: 'pyq-2022-4-c', module: 6, year: 2022, marks: 7, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'S-curve derivation and unit hydrograph conversion',
    formula: 'UH_T(t) = (D / T) * [S(t) - S(t-T)]', qnum: 'Q4 (c)',
    question: 'The ordinates of a 4-hr unit hydrograph are given as:<br>Time (hr): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.<br>UH Ordinates (m³/sec): 0, 1.8, 4.9, 8.8, 11.9, 9.2, 5.3, 2.8, 0.9, 0.<br>Derive S-curve and obtain 1-hr unit hydrograph.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <p>Given $D = 4\\text{ hr}$, required $T = 1\\text{ hr}$:</p>
      $$U_T(t) = \\frac{D}{T} [S(t) - S(t-T)] = 4 [S(t) - S(t-1)]$$
      <p>S-curve obtained by lagging the 4-hr UH by 4 hours and summing.</p>
      <table>
        <thead><tr><th>t</th><th>UH</th><th>S(t-4)</th><th>S(t)</th><th>S(t-1)</th><th>Diff</th><th>1-hr UH</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>0</td><td>-</td><td>0</td><td>-</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1.8</td><td>-</td><td>1.8</td><td>0</td><td>1.8</td><td>7.2</td></tr>
          <tr><td>2</td><td>4.9</td><td>-</td><td>4.9</td><td>1.8</td><td>3.1</td><td>12.4</td></tr>
          <tr><td>3</td><td>8.8</td><td>-</td><td>8.8</td><td>4.9</td><td>3.9</td><td>15.6</td></tr>
          <tr><td>4</td><td>11.9</td><td>0</td><td>11.9</td><td>8.8</td><td>3.1</td><td>12.4</td></tr>
          <tr><td>5</td><td>9.2</td><td>1.8</td><td>11.0</td><td>11.9</td><td>-0.9</td><td>0</td></tr>
          <tr><td>6</td><td>5.3</td><td>4.9</td><td>10.2</td><td>11.0</td><td>-0.8</td><td>0</td></tr>
          <tr><td>7</td><td>2.8</td><td>8.8</td><td>11.6</td><td>10.2</td><td>1.4</td><td>5.6</td></tr>
          <tr><td>8</td><td>0.9</td><td>11.9</td><td>12.8</td><td>11.6</td><td>1.2</td><td>4.8</td></tr>
        </tbody>
      </table>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$U_4(t), S(t), U_1(t)$ all in $\\text{m}^3/\\text{s}$</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> 1-hr UH = lagged S-curve difference scaled by $D/T = 4$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Lag by $D$ for S-curve; then by $T$ for $U_T$.</div>`
  },
  {
    id: 'pyq-2022-5-a', module: 5, year: 2022, marks: 8, diff: 'Medium', qtype: 'Theory',
    importance: 'Medium', repeated: false, probable: false,
    concept: 'Runoff factors and base flow separation', formula: 'Q_total - Q_base = Q_direct', qnum: 'Q5 (a)',
    question: 'What is runoff? Discuss the factors that affect the runoff. Explain any two methods of separation of base flow from the flood hydrograph.',
    answer: `
      <h4>1. Runoff & Factors</h4>
      <p>Runoff = portion of precipitation reaching streams via surface, interflow, or groundwater flow.</p>
      <ul>
        <li><b>Rainfall:</b> intensity, duration, distribution.</li>
        <li><b>Catchment:</b> area, shape, slope, soil, land use.</li>
      </ul>
      <h4>2. Base Flow Separation</h4>
      <ol>
        <li><b>Straight-line:</b> A to B; $N = 0.83 A^{0.2}$ days from peak.</li>
        <li><b>Two-line:</b> extend pre-storm recession to peak ordinate, then join to B.</li>
      </ol>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$N$ (days), $A$ (km²)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> $N = 0.83 A^{0.2}$ identifies end of direct runoff.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Always sketch hydrograph showing A, B, peak.</div>`
  },
  {
    id: 'pyq-2022-5-b', module: 6, year: 2022, marks: 7, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: "Synthetic Unit Hydrograph (Snyder's method)",
    formula: 't_p = C_t * (L * L_ca)^0.3', qnum: 'Q5 (b)',
    question: "Explain Synthetic unit hydrograph. A basin has 560 sq.km of area, L=30km, Lca=18km. Assuming Ct=1.30, Cp=0.70, develop a 3-hr Synthetic unit hydrograph for the basin using Snyder's method.",
    answer: `
      <h4>Concept</h4>
      <p>Synthetic UH is derived from physiographic data of an ungauged catchment using empirical equations (Snyder's method).</p>
      <h4>Numerical</h4>
      <b>Step 1: Basin lag</b>
      $$t_p = C_t (L L_{ca})^{0.3} = 1.30 (30 \\times 18)^{0.3} = 8.58\\text{ hr}$$
      <b>Step 2: Standard duration</b>
      $$t_r = t_p / 5.5 = 1.56\\text{ hr}$$
      <b>Step 3: Adjusted lag for $t_R = 3\\text{ hr}$</b>
      $$t'_p = t_p + 0.25 (t_R - t_r) = 8.94\\text{ hr}$$
      <b>Step 4: Peak discharge</b>
      $$Q_p = \\frac{2.78 \\, C_p \\, A}{t'_p} = \\frac{2.78 \\times 0.70 \\times 560}{8.94} = 121.9\\text{ m}^3/\\text{s}$$
      <b>Step 5: Base time</b>
      $$T_b = 5(t'_p + t_R/2) = 5(8.94 + 1.5) = 52.2\\text{ hr}$$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$L, L_{ca}$ (km)</li><li>$t_p, T_b$ (hr); $Q_p$ (m³/s)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Lag $= 8.94\\text{ hr}$; peak $= 121.9\\text{ m}^3/\\text{s}$; base $= 52.2\\text{ hr}$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Always adjust $t_p$ when required $t_R \\ne t_r$.</div>`
  },
  {
    id: 'pyq-2022-6-b', module: 7, year: 2022, marks: 8, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: false,
    concept: "Gumbel's method flood frequency analysis",
    formula: 'X_T = mean_X + K * S_x', qnum: 'Q6 (b)',
    question: "The observed annual flood peak in m³/sec of a river for the period 2001 to 2015 are:<br>3210, 4000, 2250, 1846, 3160, 2842, 1985, 4260, 2194, 3625, 3180, 1826, 3629, 2944 and 4380.<br>Estimate the peak flood of 100 years return period by Gumbel's method.",
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Statistics</b> ($N=15$, sum $= 45{,}331$):
      $$\\bar{X} = 3022.07\\text{ m}^3/\\text{s}, \\quad S_x = 878.83\\text{ m}^3/\\text{s}$$
      <b>Step 2: Gumbel parameters</b> ($N=15$): $Y_n = 0.5128$, $S_n = 1.0206$.
      <b>Step 3: Reduced variate</b>
      $$y_T = -\\ln[-\\ln(0.99)] = 4.6001$$
      <b>Step 4: Frequency factor</b>
      $$K_{100} = \\frac{y_T - Y_n}{S_n} = \\frac{4.6001 - 0.5128}{1.0206} = 4.0048$$
      <b>Step 5: Peak flood</b>
      $$X_{100} = \\bar{X} + K_{100} S_x = 3022.07 + 4.0048 \\times 878.83 = 6541.66\\text{ m}^3/\\text{s}$$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$\\bar{X}, S_x, X_T$ (m³/s)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> 100-yr peak flood $\\approx 6541.66\\text{ m}^3/\\text{s}$.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Show $\\sigma$ calculation step by step.</div>`
  },
  {
    id: 'pyq-2022-7-b', module: 8, year: 2022, marks: 7, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'Muskingum flood routing numerical calculation',
    formula: 'Q_2 = C_0*I_2 + C_1*I_1 + C_2*Q_1', qnum: 'Q7 (b)',
    question: 'Route the following flood through a reach for which $K = 22\\text{ hours}$ and $X = 0.25$. Initial outflow $= 20\\text{ m}^3/\\text{sec}$.<br>Time (hr): 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66.<br>Inflow (m³/sec): 20, 80, 210, 240, 215, 170, 130, 90, 60, 40, 28, 16.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <p>$K = 22\\text{ hr}$, $X = 0.25$, $\\Delta t = 6\\text{ hr}$.</p>
      <b>Step 1: Coefficients</b>
      $$D_m = K(1-X) + 0.5\\Delta t = 19.5$$
      $$C_0 = -0.1282, \\quad C_1 = 0.4359, \\quad C_2 = 0.6923$$
      $C_0 + C_1 + C_2 = 1$ ✓
      <b>Step 2: Routing equation</b>
      $$Q_2 = C_0 I_2 + C_1 I_1 + C_2 Q_1$$
      <b>Outflow sequence (m³/s):</b>
      <ul>
        <li>$t=6$: 12.31</li>
        <li>$t=12$: 16.47</li>
        <li>$t=18$: 72.17</li>
        <li>$t=24$: 127.02</li>
        <li>$t=30$: 159.87</li>
        <li>$t=36$: <b>168.11 (Peak)</b></li>
        <li>$t=42$: 161.51</li>
      </ul>
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$K$ (hr), $\\Delta t$ (hr), $Q$ (m³/s)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Peak inflow $240\\text{ m}^3/\\text{s}$ at 18 hr → attenuated to $168.11\\text{ m}^3/\\text{s}$ at 36 hr.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Verify $\\sum C = 1$; watch sign of $C_0$.</div>`
  },

  // --- 2023 Detailed Questions ---
  {
    id: 'pyq-2023-2-b', module: 2, year: 2023, marks: 5, diff: 'Medium', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'Rain gauge network adequacy calculation', formula: 'N = (C_v / epsilon)^2', qnum: 'Q2 (b)',
    question: 'The annual rainfall at 7 rain gauge stations in a basin are 58, 94, 60, 45, 20, 88 and 68 cm respectively. What is the percentage accuracy of the existing network in the estimation of the average depth of rainfall over the basin? How many additional gauges are required if it is desired to limit the error to only 10%?',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Mean</b>
      $$\\bar{P} = \\frac{58 + 94 + 60 + 45 + 20 + 88 + 68}{7} = 61.86\\text{ cm}$$
      <b>Step 2: Standard deviation</b>
      $$s = \\sqrt{\\frac{\\sum (P_i - \\bar{P})^2}{m-1}} = 25.20\\text{ cm}$$
      <b>Step 3: Coefficient of variation</b>
      $$C_v = \\frac{s}{\\bar{P}} \\times 100 = 40.74\\%$$
      <b>Step 4: Existing accuracy</b>
      $$\\epsilon_{act} = \\frac{C_v}{\\sqrt{m}} = \\frac{40.74}{\\sqrt{7}} = 15.40\\%$$
      $$\\text{Accuracy} = 100 - 15.40 = 84.60\\%$$
      <b>Step 5: Required stations</b>
      $$N = \\left( \\frac{C_v}{\\epsilon} \\right)^2 = (4.074)^2 = 16.60 \\approx 17$$
      <b>Step 6: Additional gauges</b> $= 17 - 7 = \\mathbf{10}$.
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$\\bar{P}, s$ (cm); $C_v, \\epsilon$ (%); $N$ stations</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Existing accuracy $84.6\\%$; need 10 additional gauges to reach $10\\%$ error.</div>
      <div class="note-box">💡 <b>Approach / Hint:</b> Always round up $N$ to next integer.</div>`
  },
  {
    id: 'pyq-2023-3-b', module: 3, year: 2023, marks: 7, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: false,
    concept: 'Phi-index with initial loss', formula: 'P_excess - initial_loss - Runoff = Infiltration', qnum: 'Q3 (b)',
    question: 'The rainfall depth in where successive 8 hours period are 1.6, 5.4 and 4.1 cm respectively. If the initial loss is 0.6 cm and the surface runoff resulting from this storm is 4.7 cm. What will be the phi index for this storm?',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Adjust for initial loss</b>
      <ul><li>$P_1 = 1.6 - 0.6 = 1.0$</li><li>$P_2 = 5.4$</li><li>$P_3 = 4.1$</li><li>Total $= 10.5\\text{ cm}$</li></ul>
      <b>Step 2: Infiltration during excess</b>
      $$F = 10.5 - 4.7 = 5.8\\text{ cm}$$
      <b>Step 3: Trial 1 (all 3 periods active)</b>
      $$\\Phi = \\frac{5.8}{24} = 0.242\\text{ cm/hr} \\Rightarrow \\Phi_{8\\text{-hr}} = 1.933\\text{ cm}$$
      Period 1 ($1.0$ cm) $< 1.933$ → exclude.
      <b>Step 4: Trial 2 (Periods 2 & 3)</b>
      $$\\Phi = \\frac{9.5 - 4.7}{16} = 0.30\\text{ cm/hr}$$
      Consistency ✓ → $\\boxed{\\Phi = 0.30\\text{ cm/hr}}$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$I_a = 0.6$ cm; $\\Phi$ cm/hr</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> $\\Phi$-index $= 0.30\\text{ cm/hr}$.</div>`
  },
  {
    id: 'pyq-2023-5-b', module: 4, year: 2023, marks: 8, diff: 'Hard', qtype: 'Numerical',
    importance: 'Medium', repeated: false, probable: true,
    concept: 'Water budget evaporation calculation', formula: 'Storage change = Inflows - Outflows', qnum: 'Q5 (b)',
    question: 'Compute the weekly evaporation from reservoir using the water budget method from the following record during the week:<br>Average inflow into the reservoir = 31.50 m³/s<br>Average outflow from the reservoir = 40.20 m³/s<br>Rainfall during the week = 73.6 mm<br>Surface area of reservoir = 15.8 km²<br>Estimate seepage = 0.25 million m³<br>Storage at the beginning of the week = 9180 ha.m<br>Storage at the end of the week = 8630 ha.m',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <p>1 week $= 604{,}800\\text{ s}$.</p>
      <b>Step 1: Volumes (m³)</b>
      <ul>
        <li>$V_I = 31.50 \\times 604{,}800 = 19{,}051{,}200$</li>
        <li>$V_O = 40.20 \\times 604{,}800 = 24{,}312{,}960$</li>
        <li>$V_P = 0.0736 \\times 15.8 \\times 10^6 = 1{,}162{,}880$</li>
        <li>$V_S = 250{,}000$</li>
        <li>$\\Delta V = (8630 - 9180) \\times 10^4 = -5{,}500{,}000$</li>
      </ul>
      <b>Step 2: Evaporation volume</b>
      $$V_E = (V_I + V_P) - (V_O + V_S) - \\Delta V = 1{,}151{,}120\\text{ m}^3$$
      <b>Step 3: Depth</b>
      $$E = \\frac{1{,}151{,}120}{15.8 \\times 10^6} = 72.85\\text{ mm}$$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$1\\text{ ha-m} = 10{,}000\\text{ m}^3$</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Weekly evaporation $= 72.85\\text{ mm}$ ($\\approx 10.4\\text{ mm/day}$).</div>`
  },
  {
    id: 'pyq-2023-7-b', module: 7, year: 2023, marks: 7, diff: 'Medium', qtype: 'Numerical',
    importance: 'Medium', repeated: false, probable: true,
    concept: 'Rational method peak flow calculation', formula: 'Q_p = (C * i * A) / 3.6', qnum: 'Q7 (b)',
    question: 'An urban area has a runoff co-efficient of 0.3 and an area of 0.85 km². The maximum depth of rainfall with a 25 year return period is as below:<br>Duration (min): 5, 10, 20, 30, 60.<br>Depth of rainfall (mm): 17, 26, 40, 50, 62.<br>If a culvert for drainage at the outlet of this area is to be designed for a return period of 25 years, estimate the required peak flow rate. Take time of concentration for the drainage area as 30 min.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1:</b> $D = t_c = 30\\text{ min}$ → depth $= 50\\text{ mm}$.
      <b>Step 2:</b> Intensity $i = \\dfrac{50}{30} \\times 60 = 100\\text{ mm/hr}$.
      <b>Step 3:</b> Rational formula
      $$Q_p = \\frac{C i A}{3.6} = \\frac{0.3 \\times 100 \\times 0.85}{3.6} = 7.083\\text{ m}^3/\\text{s}$$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$Q_p$ (m³/s), $i$ (mm/hr), $A$ (km²)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> Design peak discharge for culvert $= 7.08\\text{ m}^3/\\text{s}$.</div>`
  },

  // --- 2024 Detailed Questions ---
  {
    id: 'pyq-2024-2-b', module: 2, year: 2024, marks: 5, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'Dew point temperature and humidity calculations',
    formula: 'RH = (e_s(T_d) / e_s(T)) * 100', qnum: 'Q2 (b)',
    question: 'What is dew point temperature? At a climatic station, air pressure is measured as 100 kPa, air temperature as 20 C and the dew point temperature is 16º C. Calculate corresponding relative humidity and specific humidity.',
    answer: `
      <h4>Dew Point Temperature</h4>
      <p>$T_d$ = temperature to which moist air must be cooled (at constant pressure & vapor content) to become saturated.</p>
      <h4>Humidity Calculation</h4>
      <b>Step 1: Saturation vapor pressure</b>
      $$e_s(T) = 0.611 \\exp\\!\\left(\\frac{17.27 T}{T + 237.3}\\right)$$
      <ul><li>$e_s(20) = 2.339\\text{ kPa}$</li><li>$e = e_s(16) = 1.818\\text{ kPa}$</li></ul>
      <b>Step 2: Relative humidity</b>
      $$RH = \\frac{e}{e_s(T)} \\times 100 = \\frac{1.818}{2.339} \\times 100 = 77.7\\%$$
      <b>Step 3: Specific humidity</b>
      $$q = \\frac{0.622 e}{p - 0.378 e} = 0.01138\\text{ kg/kg} = 11.38\\text{ g/kg}$$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$e, p$ (kPa); $RH$ (%); $q$ (g/kg)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> $RH = 77.7\\%$, $q = 11.38\\text{ g/kg}$.</div>`
  },
  {
    id: 'pyq-2024-4-b', module: 7, year: 2024, marks: 6, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: false,
    concept: "Gumbel's method 500 year flood prediction", formula: 'X_T = a + b * y_T', qnum: 'Q4 (b)',
    question: "Flood frequency computations for a river using Gumbel's method yielded the following results:<br>Return Period T (years): 50, 100.<br>Peak flood (m³/s): 25,650; 30,100.<br>Using Gumbel's extreme value distribution predict the flood for a return period of 500 years.",
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Reduced variate</b>
      <ul>
        <li>$y_{50} = -\\ln[-\\ln(0.98)] = 3.9019$</li>
        <li>$y_{100} = -\\ln[-\\ln(0.99)] = 4.6001$</li>
        <li>$y_{500} = -\\ln[-\\ln(0.998)] = 6.2136$</li>
      </ul>
      <b>Step 2: Solve simultaneous equations</b>
      <ol>
        <li>$25{,}650 = a + 3.9019 b$</li>
        <li>$30{,}100 = a + 4.6001 b$</li>
      </ol>
      $$b = \\frac{4450}{0.6982} = 6373.53, \\quad a = 781.09$$
      <b>Step 3: 500-yr flood</b>
      $$X_{500} = 781.09 + 6373.53 \\times 6.2136 = 40{,}379.75\\text{ m}^3/\\text{s}$$
      <div class="note-box"><b>📝 Notation & Units:</b><ul><li>$X_T$ (m³/s)</li></ul></div>
      <div class="summary-box">📌 <b>Summary:</b> $X_{500} \\approx 40{,}380\\text{ m}^3/\\text{s}$.</div>`
  },
  {
    id: 'pyq-2024-5-b', module: 6, year: 2024, marks: 8, diff: 'Hard', qtype: 'Numerical',
    importance: 'Medium', repeated: false, probable: true,
    concept: "Snyder's Synthetic UH multi-catchment development",
    formula: 't_p = C_t * (L * L_ca)^0.3', qnum: 'Q5 (b)',
    question: "Characteristics of two catchments A and B measured from a map are given below:<br>L (A=52 km, B=40 km)<br>Lca (A=28 km, B=21 km)<br>Area (A=450 km², B=375 km²)<br>For catchment A, a 4-h unit hydrograph was developed and was found to have a peak discharge of 70 m³/s after 12-hr from the beginning of rainfall excess. Using Snyder's method, develop a unit hydrograph for catchment B.",
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Find $C_t$ and $C_p$ from A</b>
      <ul>
        <li>$t'_p + t_R/2 = 12 \\Rightarrow t'_p = 10\\text{ hr}$</li>
        <li>$10 = t_p + 0.25(4 - t_p/5.5) \\Rightarrow t_p = 9.43\\text{ hr}$</li>
        <li>$C_t = 9.43 / (52 \\times 28)^{0.3} = 1.06$</li>
        <li>$C_p = 70 \\times 10 / (2.78 \\times 450) = 0.56$</li>
      </ul>
      <b>Step 2: Apply to B</b>
      <ul>
        <li>$t_{pB} = 1.06 (40 \\times 21)^{0.3} = 8.02\\text{ hr}$</li>
        <li>$t_{rB} = 8.02/5.5 = 1.46\\text{ hr}$</li>
        <li>$t'_{pB} = 8.02 + 0.25(4 - 1.46) = 8.655\\text{ hr}$</li>
        <li>$Q_{pB} = \\dfrac{2.78 \\times 0.56 \\times 375}{8.655} = 67.45\\text{ m}^3/\\text{s}$</li>
        <li>$T_{bB} = 5(8.655 + 2) = 53.28\\text{ hr}$</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> Regional coeffs $C_t = 1.06$, $C_p = 0.56$. For B: peak $= 67.45\\text{ m}^3/\\text{s}$ at $10.66\\text{ hr}$.</div>`
  },

  // --- 2025 Detailed Questions ---
  {
    id: 'pyq-2025-2-c', module: 2, year: 2025, marks: 5, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'Standard error and raingauge adequacy', formula: 'Standard Error = C_v / sqrt(m)', qnum: 'Q2 (c)',
    question: 'A catchment area has six raingauge stations. In a year, the annual rainfall recorded by the gauges are as follows:<br>Station: A B C D E F.<br>Rainfall (cm): 130.0, 142.1, 118.2, 108.5, 156.5, 103.2.<br>(i) Determine the standard error in the estimation of the mean rainfall in the existing set of raingauges.<br>(ii) For a 10% error in the estimation of the mean rainfall, calculate the optimum number of raingauge stations in the catchment.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Mean</b>
      $$\\bar{P} = \\frac{758.5}{6} = 126.42\\text{ cm}$$
      <b>Step 2: Std deviation</b>
      $$s = \\sqrt{\\frac{\\sum (P_i - \\bar{P})^2}{m-1}} = 20.45\\text{ cm}$$
      <b>Step 3: $C_v$</b>
      $$C_v = \\frac{20.45}{126.42} \\times 100 = 16.18\\%$$
      <b>Step 4 (i): Standard error</b>
      $$E_s = \\frac{C_v}{\\sqrt{6}} = 6.61\\%$$
      <b>Step 5 (ii): Optimum N</b>
      $$N = \\left(\\frac{16.18}{10}\\right)^2 = 2.62 \\approx 3$$
      <p>Existing 6 stations already exceed required 3 → network adequate.</p>
      <div class="summary-box">📌 <b>Summary:</b> $E_s = 6.61\\%$; only 3 stations needed for 10% error.</div>`
  },
  {
    id: 'pyq-2025-3-b-1', module: 3, year: 2025, marks: 4, diff: 'Hard', qtype: 'Numerical',
    importance: 'Medium', repeated: false, probable: true,
    concept: "Horton's infiltration equation parameters fitting",
    formula: 'f_p = f_c + (f_0 - f_c) * e^(-k * t)', qnum: 'Q3 (b)(i)',
    question: "For a small catchment, the infiltration rate at the beginning of a rain was observed to be 90 mm/hr and decreased to a constant rate of 8 mm/hr after 2.5 hrs. The total infiltration during 2.5 hrs was 50 mm. Develop the Horton's equation for the infiltration rate at any time t<2.5 hr.",
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Cumulative infiltration</b>
      $$F = f_c T + \\frac{f_0 - f_c}{k}\\left(1 - e^{-kT}\\right)$$
      <b>Step 2: Substitute</b>
      $$50 = 8 \\times 2.5 + \\frac{82}{k}\\left(1 - e^{-2.5 k}\\right)$$
      $$\\frac{30}{82} = \\frac{1 - e^{-2.5 k}}{k} \\Rightarrow 0.36585 = \\frac{1 - e^{-2.5 k}}{k}$$
      <b>Step 3: Iterate</b> → $k \\approx 2.72\\text{ hr}^{-1}$.
      <b>Step 4: Horton equation</b>
      $$\\boxed{f_p = 8 + 82 e^{-2.72 t} \\text{ (mm/hr)}}$$
      <div class="summary-box">📌 <b>Summary:</b> $f_p = 8 + 82 e^{-2.72 t}$ mm/hr.</div>`
  },
  {
    id: 'pyq-2025-4-b', module: 5, year: 2025, marks: 6, diff: 'Hard', qtype: 'Numerical',
    importance: 'Medium', repeated: false, probable: true,
    concept: 'Mass curve and phi-index runoff calculation',
    formula: 'Runoff = sum(Rainfall_i - phi * dt)', qnum: 'Q4 (b)',
    question: 'The mass curve of rainfall of duration 180 minutes on a catchment is given below. The phi-index of the catchment is known to be 0.4 cm/hr. Calculate the total surface runoff from the catchment due to this storm.<br>Time from start (min): 0, 30, 60, 80, 100, 120, 150, 180.<br>Cumulative rainfall (cm): 0, 0.6, 1.3, 2.0, 2.8, 3.0, 3.2, 3.3.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <table>
        <thead><tr><th>Interval</th><th>$\\Delta P$ (cm)</th><th>Loss (cm)</th><th>Runoff (cm)</th></tr></thead>
        <tbody>
          <tr><td>0–30</td><td>0.6</td><td>0.20</td><td>0.40</td></tr>
          <tr><td>30–60</td><td>0.7</td><td>0.20</td><td>0.50</td></tr>
          <tr><td>60–80</td><td>0.7</td><td>0.133</td><td>0.567</td></tr>
          <tr><td>80–100</td><td>0.8</td><td>0.133</td><td>0.667</td></tr>
          <tr><td>100–120</td><td>0.2</td><td>0.133</td><td>0.067</td></tr>
          <tr><td>120–150</td><td>0.2</td><td>0.20</td><td>0.00</td></tr>
          <tr><td>150–180</td><td>0.1</td><td>0.20</td><td>0.00</td></tr>
        </tbody>
      </table>
      $$R_{total} = 0.40 + 0.50 + 0.567 + 0.667 + 0.067 = 2.20\\text{ cm}$$
      <div class="summary-box">📌 <b>Summary:</b> Total surface runoff $= 2.20\\text{ cm}$ out of 3.30 cm rainfall.</div>`
  },
  {
    id: 'pyq-2025-6-b', module: 8, year: 2025, marks: 10, diff: 'Hard', qtype: 'Numerical',
    importance: 'High', repeated: true, probable: true,
    concept: 'Muskingum method routing 6hr interval',
    formula: 'Q_2 = C_0*I_2 + C_1*I_1 + C_2*Q_1', qnum: 'Q6 (b)',
    question: 'Route the following flood hydrograph through a river reach for which Muskingum coefficient K = 10 hr and x = 0.25. The initial outflow discharge is 8.0 m³/s.<br>Time(hrs): 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66.<br>Inflow (m³/s): 10, 25, 50, 75, 80, 74, 65, 50, 40, 30, 20, 10.',
    answer: `
      <h4>Step-by-Step Solution</h4>
      <b>Step 1: Coefficients</b>
      $$D_m = 10(1-0.25) + 3 = 10.5\\text{ hr}$$
      $$C_0 = 0.0476, \\quad C_1 = 0.5238, \\quad C_2 = 0.4286$$
      <b>Step 2: Routing</b>
      $$Q_2 = C_0 I_2 + C_1 I_1 + C_2 Q_1$$
      <ul>
        <li>$t=6$: 9.86</li>
        <li>$t=12$: 19.71</li>
        <li>$t=18$: 38.21</li>
        <li>$t=24$: 59.48</li>
        <li>$t=30$: 70.92</li>
        <li>$t=36$: <b>72.25 (Peak)</b></li>
        <li>$t=42$: 67.40</li>
      </ul>
      <div class="summary-box">📌 <b>Summary:</b> Peak inflow $80\\text{ m}^3/\\text{s}$ at 24 hr → attenuated to $72.25\\text{ m}^3/\\text{s}$ at 36 hr.</div>`
  }
];

const relatedPyqMap = {
  'pyq-2022-1-3': ['pyq-2022-3-b', 'pyq-2023-3-b', 'pyq-2025-4-b'],
  'pyq-2022-3-b': ['pyq-2022-1-3', 'pyq-2023-3-b', 'pyq-2025-4-b'],
  'pyq-2023-3-b': ['pyq-2022-1-3', 'pyq-2022-3-b', 'pyq-2025-4-b'],
  'pyq-2025-4-b': ['pyq-2022-1-3', 'pyq-2022-3-b', 'pyq-2023-3-b'],
  'pyq-2022-1-10': ['pyq-2022-7-b', 'pyq-2025-6-b'],
  'pyq-2022-7-b': ['pyq-2022-1-10', 'pyq-2025-6-b'],
  'pyq-2025-6-b': ['pyq-2022-1-10', 'pyq-2022-7-b'],
  'pyq-2023-2-b': ['pyq-2025-2-c'],
  'pyq-2025-2-c': ['pyq-2023-2-b'],
  'pyq-2022-5-b': ['pyq-2024-5-b'],
  'pyq-2024-5-b': ['pyq-2022-5-b'],
  'pyq-2022-6-b': ['pyq-2024-4-b'],
  'pyq-2024-4-b': ['pyq-2022-6-b']
};

const modulesData = [
  { id: 1, name: 'Introduction', weight: '5%', desc: 'Hydrologic cycle schematic, System representation, Global Water Budget.' },
  { id: 2, name: 'Weather and Precipitation', weight: '20%', desc: 'Humidity, cooling, condensation, rain gauges, adequacy, adjustment of missing data, Isohyetal & Thiessen methods.' },
  { id: 3, name: 'Infiltration', weight: '15%', desc: "Factors, Infiltration capacity, Horton's curve, Infiltration Indices (phi/W)." },
  { id: 4, name: 'Evapotranspiration', weight: '10%', desc: "Meyer's equation, Water budget method, Energy budget method, Blaney-Criddle, Lysimeter." },
  { id: 5, name: 'Runoff', weight: '10%', desc: 'Empirical formulae, Infiltration method, Hydrograph analysis, Rational method.' },
  { id: 6, name: 'Hydrograph', weight: '20%', desc: 'Base flow separation, UH derivation/assumptions, S-curve, Synthetic UH, Instantaneous UH.' },
  { id: 7, name: 'Estimation of Flood', weight: '10%', desc: "Rational method, Flood frequency analysis (Gumbel's method, Log-Pearson III)." },
  { id: 8, name: 'Flood Routing', weight: '10%', desc: "Modified Pul's reservoir routing, Muskingum channel routing, St. Venant equations." }
];
