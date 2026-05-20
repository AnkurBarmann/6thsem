// Engineering Hydrology (CE-301) Previous Year Questions Database
// This file defines the global questionsDB, relatedPyqMap, and modulesData objects for offline use.

export const questionsDB = [
  // --- 2022 MCQ Questions ---
  {
    id: 'pyq-2022-1-1',
    module: 2,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'Medium',
    repeated: false,
    probable: false,
    concept: 'Raingauge site selection',
    formula: 'Distance >= 2 * Height',
    qnum: 'Q1 (i)',
    question: 'In selecting site for a rain gauge, the nearest object should be at a minimum distance of:<br>(a) twice its height<br>(b) three times its height<br>(c) equal to its height<br>(d) anywhere',
    answer: `
      <b>Correct Option: (a) twice its height</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li>To avoid shielding or wind-shading effects, the rain gauge must be placed in an open area.</li>
        <li>The Indian Meteorological Department (IMD) guidelines dictate that the distance between the rain gauge and the nearest object (like trees, walls, or fences) must be at least <b>twice the height</b> of the object ($d \\ge 2h$).</li>
        <li>Additionally, the height of the rain gauge rim above ground level is typically set to $30\\text{ cm}$.</li>
      </ul>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$h$ = height of the nearest obstacle (m)</li>
          <li>$d$ = minimum clearance distance (m)</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> Rule of thumb for rain gauge site selection is $d \\ge 2h$ to ensure unshielded catching of precipitation.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> This is a standard specification question. Always sketch a simple diagram showing the obstacle height $h$ and the rain gauge at distance $2h$.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-2',
    module: 2,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'Medium',
    repeated: false,
    probable: false,
    concept: 'Orographic precipitation',
    formula: 'Air mass lifting by barriers',
    qnum: 'Q1 (ii)',
    question: 'Orographic precipitation occurs due to air masses being lifted to higher altitudes by:<br>(a) The density difference of air masses<br>(b) a frontal action<br>(c) the presence of mountain barriers<br>(d) extratropical cyclones',
    answer: `
      <b>Correct Option: (c) the presence of mountain barriers</b>
      
      <h4>Explanation:</h4>
      <p>Precipitation types are classified by the mechanism that causes warm, moist air to rise, cool, and condense:</p>
      <ol>
        <li><b>Orographic Precipitation:</b> Caused by physical barriers such as mountains. Air is forced to ascend, leading to adiabatic cooling, condensation, and rain on the windward side.</li>
        <li><b>Convective Precipitation:</b> Due to localized heating of the ground, causing air to expand, become buoyant, and rise.</li>
        <li><b>Cyclonic (Frontal) Precipitation:</b> Caused by the collision of warm and cold air masses, forcing warmer air to ride over the denser cold air.</li>
      </ol>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>Windward side: side facing the wind (receives high rainfall).</li>
          <li>Leeward (Rain shadow) side: side sheltered from wind (receives dry wind, low rainfall).</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> Mountain barriers force moist air upward, causing adiabatic cooling ($\\approx 9.8^\\circ\\text{C/km}$ dry rate) and resulting in orographic rainfall.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Remember "oro" relates to mountains/relief. This helps distinguish it from frontal or convective air lifting mechanisms.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-3',
    module: 3,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Phi-index definition',
    formula: 'P_excess - Runoff = Infiltration',
    qnum: 'Q1 (iii)',
    question: '$\\Phi$-index is defined as:<br>(a) the difference between maximum and minimum infiltration capacity<br>(b) the difference between maximum and minimum runoff<br>(c) rainfall intensity above which rainfall volume equals to runoff volume<br>(d) minimum infiltration rate during the storm',
    answer: `
      <b>Correct Option: (c) rainfall intensity above which rainfall volume equals to runoff volume</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li>The $\\Phi$-index is the average rate of infiltration above which the total rainfall volume equals the total direct runoff volume.</li>
        <li>Mathematically:
            $$R = \\sum (P_i - \\Phi) \\cdot \\Delta t$$
            where only periods with intensity $P_i > \\Phi$ are summed.</li>
        <li>Any rainfall intensity less than $\\Phi$ is assumed to be fully absorbed, contributing zero to runoff.</li>
      </ul>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$\\Phi$-index = infiltration index (cm/hr or mm/hr)</li>
          <li>$P_i$ = rainfall intensity at time interval $i$ (cm/hr)</li>
          <li>$R$ = runoff depth (cm)</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> $\\Phi$-index represents a horizontal line on the rainfall hyetograph where the area above equals direct runoff depth.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Highly repeated concept. Remember that $\\Phi$-index accounts for initial loss implicitly unless stated otherwise, unlike $W$-index which excludes it.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-4',
    module: 6,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'S-curve hydrograph',
    formula: 'Summation of infinite UH',
    qnum: 'Q1 (iv)',
    question: 'The S-curve hydrograph is:<br>(a) the summation of the unit hydrograph<br>(b) the summation of the total runoff hydrograph<br>(c) the summation of the rainfall hyetograph<br>(d) all the above',
    answer: `
      <b>Correct Option: (a) the summation of the unit hydrograph</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li>The S-curve (or summation curve) is a hydrograph produced by a continuous, infinite series of unit storms of duration $D$, each producing $1\\text{ cm}$ of runoff.</li>
        <li>It is obtained by shifting infinite unit hydrographs of duration $D$ hours by $D$ hours successively and summing their ordinates:
            $$S(t) = U(t) + U(t-D) + U(t-2D) + \\dots$$
        </li>
        <li>Its main application is to convert a $D$-hour unit hydrograph into a $T$-hour unit hydrograph.</li>
      </ul>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$S(t)$ = S-curve ordinate at time $t$ ($\\text{m}^3/\\text{s}$)</li>
          <li>$D$ = duration of original unit hydrograph (hours)</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> The S-curve represents steady-state discharge from continuous rainfall excess, reaching a peak equilibrium discharge $Q_e = 2.778 \\frac{A}{D}$.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Equilibrium discharge is highly tested in numericals. Be ready with the formula $Q_e = 2.778 \\cdot A / D$.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-5',
    module: 5,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Flow-duration curve',
    formula: 'Percent time exceeded',
    qnum: 'Q1 (v)',
    question: 'The flow-duration curve is a plot of:<br>(a) accumulated flow against time<br>(b) discharge against time in chronological order<br>(c) the base flow against the percentage of times the flow is exceeded<br>(d) the discharge against the percentage of times the flow is equalled or exceeded',
    answer: `
      <b>Correct Option: (d) the discharge against the percentage of times the flow is equalled or exceeded</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li>A Flow-Duration Curve (FDC) is a cumulative frequency plot that shows the percentage of time during which specified discharges are equalled or exceeded in a stream.</li>
        <li>It summarizes the flow variability. A very flat curve indicates presence of large groundwater storage (baseflow) or regulation (reservoirs), whereas a steep curve indicates flash floods and low baseflow.</li>
      </ul>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$Q$ = Discharge ($\\text{m}^3/\\text{s}$), plotted on the y-axis.</li>
          <li>$P$ = Percentage of time flow is equalled or exceeded (%), plotted on the x-axis.</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> FDC is a tool for water resource planning (hydroelectric design) indicating flow dependability.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Do not confuse FDC with hydrographs (Q vs Time) or mass curves (cumulative volume vs Time).
      </div>
    `
  },
  {
    id: 'pyq-2022-1-6',
    module: 6,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'Medium',
    repeated: false,
    probable: false,
    concept: 'Base-flow separation',
    formula: 'Flood Hydrograph - DRH = Base flow',
    qnum: 'Q1 (vi)',
    question: 'Base-flow separation is performed:<br>(a) on an unit hydrograph to get the direct-runoff hydrograph<br>(b) on a flood hydrograph to obtain the magnitude of effective rainfall<br>(c) on a flood hydrograph to obtain the rainfall hyetograph<br>(d) on hydrographs of effluent stream only',
    answer: `
      <b>Correct Option: (b) on a flood hydrograph to obtain the magnitude of effective rainfall</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li>Base-flow separation separates the groundwater flow component from the surface runoff component of a storm hydrograph.</li>
        <li>By subtracting base flow from the observed flood hydrograph, we obtain the Direct Runoff Hydrograph (DRH).</li>
        <li>The area of the DRH represents the volume of <b>effective rainfall</b> (also called rainfall excess or direct runoff depth).</li>
      </ul>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$Q_{FH}$ = Flood hydrograph ordinate ($\\text{m}^3/\\text{s}$)</li>
          <li>$Q_{BF}$ = Base flow ordinate ($\\text{m}^3/\\text{s}$)</li>
          <li>$Q_{DRH} = Q_{FH} - Q_{BF}$ ($\\text{m}^3/\\text{s}$)</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> Base flow separation isolates the direct surface runoff, whose volume corresponds exactly to the depth of effective rainfall over the catchment.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> There are three standard methods of base-flow separation: Straight line method, two-line method, and three-curve method. Be prepared to draw them.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-7',
    module: 6,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Unit hydrograph assumptions',
    formula: 'Time invariance + Linear response',
    qnum: 'Q1 (vii)',
    question: 'The basic assumptions of the unit-hydrograph theory are:<br>(a) nonlinear response and time invariance<br>(b) time invariance and linear response<br>(c) linear response and linear time variance<br>(d) nonlinear time invariance and linear response',
    answer: `
      <b>Correct Option: (b) time invariance and linear response</b>
      
      <h4>Explanation:</h4>
      <p>Sherman (1932) proposed the Unit Hydrograph theory based on two core assumptions:</p>
      <ol>
        <li><b>Linear Response (Superposition):</b> If a storm of duration $D$ produces runoff depth $r_1$, and another produces $r_2$, the combined runoff ordinates are the sum of individual runoffs. Doubling rainfall excess doubles the runoff ordinates.</li>
        <li><b>Time Invariance:</b> The runoff response of a catchment to a given rainfall excess is independent of the time at which the rainfall occurs.</li>
      </ol>
      
      <div class="summary-box">
        📌 <b>Summary:</b> The Unit Hydrograph is a linear, time-invariant system model of catchment response.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Memory hook: "LTI system" (Linear Time-Invariant). This is the most fundamental concept of hydrograph analysis.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-8',
    module: 7,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'Medium',
    repeated: false,
    probable: false,
    concept: 'Probable maximum flood',
    formula: 'Extreme meteorological conditions',
    qnum: 'Q1 (viii)',
    question: 'The probable maximum flood is:<br>(a) the standard project flood of an extremely large river<br>(b) a flood adopted in the design of all kinds of spillways<br>(c) a flood adopted in all hydraulic structures<br>(d) an extremely large but physically possible flood in the region',
    answer: `
      <b>Correct Option: (d) an extremely large but physically possible flood in the region</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li><b>Probable Maximum Flood (PMF):</b> The flood discharge that would result from the most severe combination of critical meteorological and hydrologic conditions that are reasonably possible in the region.</li>
        <li>It is used in designing high-risk structures (e.g., major dam spillways) where failure would result in catastrophic loss of life and property.</li>
        <li>It is computed based on the <b>Probable Maximum Precipitation (PMP)</b>.</li>
      </ul>
      
      <div class="summary-box">
        📌 <b>Summary:</b> PMF represents the absolute physical limit of flood occurrence, representing a safety design standard for major dams.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Differentiate PMF from Standard Project Flood (SPF). SPF is based on severe historical storms, whereas PMF considers worst-case physical limits.
      </div>
    `
  },
  {
    id: 'pyq-2022-1-9',
    module: 8,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'Medium',
    repeated: false,
    probable: false,
    concept: 'Hydraulic routing equations',
    formula: 'Saint-Venant equations',
    qnum: 'Q1 (ix)',
    question: 'The hydraulic methods of flood routing use:<br>(a) equation of continuity only<br>(b) equation of motion only<br>(c) both the equation of motion and equation of continuity only<br>(d) energy equation only',
    answer: `
      <b>Correct Option: (c) both the equation of motion and equation of continuity only</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li><b>Hydrologic Routing:</b> Uses the simplified continuity equation: $I - Q = \\frac{dS}{dt}$ combined with a storage-discharge relationship (e.g., Muskingum method).</li>
        <li><b>Hydraulic Routing:</b> Models the flow as unsteady open-channel flow. It solves the full <b>Saint-Venant equations</b>, which consist of:
          <ol>
            <li><b>Equation of Continuity:</b> $\\frac{\\partial A}{\\partial t} + \\frac{\\partial Q}{\\partial x} = 0$</li>
            <li><b>Equation of Momentum (Motion):</b> $\\frac{\\partial v}{\\partial t} + v\\frac{\\partial v}{\\partial x} + g\\frac{\\partial y}{\\partial x} - g(S_0 - S_f) = 0$</li>
          </ol>
        </li>
      </ul>
      
      <div class="summary-box">
        📌 <b>Summary:</b> Hydraulic routing utilizes both continuity and momentum (motion) equations (Saint-Venant equations) to model space-time variant wave profiles.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Remember: Hydrologic = Continuity + Storage relation (simple space-independent); Hydraulic = Continuity + Momentum (complex space-dependent).
      </div>
    `
  },
  {
    id: 'pyq-2022-1-10',
    module: 8,
    year: 2022,
    marks: 1,
    diff: 'Easy',
    qtype: 'MCQ',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Muskingum storage equation',
    formula: 'S = K[xI + (1-x)Q]',
    qnum: 'Q1 (x)',
    question: 'For channel routing, the Muskingum storage equation is given by:<br>(a) K [xI+(1-x)Q]<br>(b) K [xQ+(1-x)I]<br>(c) K [xQ+(1-x)Q]<br>(d) K [xI+(1+x)Q]',
    answer: `
      <b>Correct Option: (a) K [xI+(1-x)Q]</b>
      
      <h4>Explanation:</h4>
      <ul>
        <li>The Muskingum storage equation represents storage in a channel reach that experiences wedge and prism storage:
            $$S = K [xI + (1-x)Q]$$
        </li>
        <li><b>Prism Storage:</b> Storage under the water surface parallel to the channel bed, proportional to outflow $Q$ ($S_{prism} = KQ$).</li>
        <li><b>Wedge Storage:</b> Storage between the actual water surface profile and the prism surface, proportional to difference between inflow and outflow ($S_{wedge} = Kx(I-Q)$).</li>
      </ul>
      
      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$S$ = channel storage ($\\text{m}^3$)</li>
          <li>$K$ = Muskingum travel time coefficient (hours)</li>
          <li>$x$ = weighting factor ($0 \\le x \\le 0.5$)</li>
          <li>$I$ = Inflow rate ($\\text{m}^3/\\text{s}$), $Q$ = Outflow rate ($\\text{m}^3/\\text{s}$)</li>
        </ul>
      </div>
      
      <div class="summary-box">
        📌 <b>Summary:</b> Total channel storage is a weighted combination of wedge and prism storage modeled as $S = K[xI + (1-x)Q]$.
      </div>
      
      <div class="note-box">
        💡 <b>Approach / Hint:</b> Memorize this equation exactly. It is the basis of all Muskingum routing coefficients calculations.
      </div>
    `
  },

  // --- 2022 Detailed Questions ---
  {
    id: 'pyq-2022-2-a',
    module: 2,
    year: 2022,
    marks: 8,
    diff: 'Medium',
    qtype: 'Theory',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Forms of precipitation & missing precipitation estimation',
    formula: 'Normal Ratio Method: P_x = (N_x / M) * sum(P_i / N_i)',
    qnum: 'Q2 (a)',
    question: 'Explain the different forms of precipitation. How is missing annual precipitation at a station estimated?',
    answer: `
      <h4>Part 1: Forms of Precipitation</h4>
      <p>Precipitation is any product of condensation of atmospheric water vapor that falls under gravity. The common forms are:</p>
      <ul>
        <li><b>Rain:</b> Liquid water droplets of size $0.5\\text{ mm}$ to $6\\text{ mm}$. Categorized as light ($<2.5\\text{ mm/hr}$), moderate ($2.5 - 7.5\\text{ mm/hr}$), or heavy ($>7.5\\text{ mm/hr}$).</li>
        <li><b>Snow:</b> Ice crystals formed directly from water vapor at sub-freezing temperatures (sublimation). Density is typically $0.1\\text{ g/cm}^3$.</li>
        <li><b>Drizzle:</b> Fine water droplets of size $<0.5\\text{ mm}$ falling slowly with intensity $<1\\text{ mm/hr}$.</li>
        <li><b>Glaze (Freezing Rain):</b> Cold rain that freezes immediately upon coming in contact with cold ground objects at $0^\\circ\\text{C}$ forming a clear ice coating.</li>
        <li><b>Sleet:</b> Frozen raindrops or transparent grains of ice formed when rain falls through a sub-freezing air layer near ground.</li>
        <li><b>Hail:</b> Lumpy pellets of ice size $>8\\text{ mm}$ formed in convective clouds (cumulonimbus) due to repeated drafts.</li>
      </ul>

      <h4>Part 2: Estimation of Missing Annual Precipitation</h4>
      <p>If a station $X$ has missing annual rainfall data $P_x$ for a year, it is estimated using data from $M$ neighboring index stations ($A, B, C, \\dots$) with known normal annual rainfalls $N_A, N_B, \\dots$ and current year rainfalls $P_A, P_B, \\dots$.</p>
      
      <ol>
        <li><b>Arithmetic Mean Method:</b> Used when the normal annual rainfalls at all index stations are within $\\pm 10\\%$ of station $X$'s normal rainfall $N_x$:
          $$P_x = \\frac{P_A + P_B + P_C + \\dots + P_M}{M}$$
        </li>
        <li><b>Normal Ratio Method:</b> Used when the normal annual rainfall of any index station differs by more than $10\\%$ from $N_x$:
          $$P_x = \\frac{N_x}{M} \\left[ \\frac{P_A}{N_A} + \\frac{P_B}{N_B} + \\dots + \\frac{P_M}{N_M} \\right]$$
        </li>
      </ol>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$P_x$ = Estimated missing annual precipitation at station $X$ (cm or mm)</li>
          <li>$N_x$ = Normal annual precipitation of station $X$ (cm or mm)</li>
          <li>$P_i$ = Precipitation at index station $i$ in the current year (cm)</li>
          <li>$N_i$ = Normal annual precipitation at index station $i$ (cm)</li>
          <li>$M$ = Number of neighboring index stations (usually 3 or 4)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Estimate missing rainfall using the Arithmetic Mean (within $\\pm 10\\%$ normal variation) or the Normal Ratio Method (for variation $>10\\%$).
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> In exams, write definitions clearly and list the formula for both cases. Underline the $10\\%$ condition as it is the key decision criterion.
      </div>
    `
  },
  {
    id: 'pyq-2022-2-b',
    module: 2,
    year: 2022,
    marks: 7,
    diff: 'Medium',
    qtype: 'Theory',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Precipitation record consistency & Double mass curve',
    formula: 'P_corrected = P_observed * (Slope_recent / Slope_original)',
    qnum: 'Q2 (b)',
    question: 'What are the common causes of inconsistency in precipitation record? Discuss how consistency of precipitation record can be tested and corrected.',
    answer: `
      <h4>1. Causes of Inconsistency in Rainfall Records</h4>
      <p>Rainfall records at a station may become inconsistent over time due to:</p>
      <ul>
        <li>Shifting of the rain gauge station to a new location with a different microclimate.</li>
        <li>Change in the immediate surroundings of the rain gauge (e.g., growth of tall trees, construction of tall buildings).</li>
        <li>Replacement of old rain gauge equipment with a different model.</li>
        <li>Significant changes in observational personnel or administrative recording errors.</li>
      </ul>

      <h4>2. Testing & Correcting Inconsistency: Double-Mass Curve (DMC)</h4>
      <p>The consistency is checked using the <b>Double-Mass Curve</b> technique. The process is as follows:</p>
      <ol>
        <li>Select a group of 5 to 10 neighboring stable index stations in the same meteorologically homogeneous region.</li>
        <li>For each year, compute the average annual rainfall of the group of index stations.</li>
        <li>Arrange the data in reverse chronological order (starting from the most recent year back to the oldest).</li>
        <li>Compute the cumulative annual precipitation of the station under test ($\\sum P_x$) and the cumulative average of the group ($\\sum P_g$).</li>
        <li>Plot $\\sum P_x$ (y-axis) against $\\sum P_g$ (x-axis).</li>
        <li><b>Interpretation:</b> A single straight line indicates a consistent record. A change in slope (break in slope) indicates a point of inconsistency.</li>
        <li><b>Correction:</b> Values prior to the change in slope (older records) are corrected using the ratio of slopes:
          $$P_{corrected} = P_{observed} \\times \\left( \\frac{S_a}{S_b} \\right)$$
          where $S_a$ is the slope after the break (recent slope) and $S_b$ is the slope before the break (original old slope).
        </li>
      </ol>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$\\sum P_x$ = Cumulative annual precipitation at station $X$ (cm)</li>
          <li>$\\sum P_g$ = Cumulative average annual precipitation of group of index stations (cm)</li>
          <li>$S_a$ = Slope of double mass curve for the recent period (after break)</li>
          <li>$S_b$ = Slope of double mass curve for the older period (before break)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Consistency is verified by plotting cumulative test station rainfall vs cumulative group average. Inconsistencies are corrected by scaling older records by $S_a / S_b$.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Always sketch the Double-Mass Curve graph showing the change in slope. It earns high marks! Draw a plot showing a change in slope from $S_b$ to $S_a$.
      </div>
    `
  },
  {
    id: 'pyq-2022-3-a',
    module: 3,
    year: 2022,
    marks: 8,
    diff: 'Medium',
    qtype: 'Theory',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Infiltration measurement & indices',
    formula: 'W = (P - R - I_a) / t_e',
    qnum: 'Q3 (a)',
    question: 'Explain how infiltration in the field can be measured. What are the different infiltration indices? Explain each of them by sketches where necessary.',
    answer: `
      <h4>1. Field Measurement of Infiltration</h4>
      <p>Infiltration is measured using a <b>Double Ring Infiltrometer</b>:</p>
      <ul>
        <li>Consists of two concentric metal rings (outer ring $\\approx 60\\text{ cm}$ diameter, inner ring $\\approx 30\\text{ cm}$ diameter) driven $15\\text{ cm}$ deep into the soil.</li>
        <li>Both rings are filled with water to a depth of $10\\text{ cm}$. The outer ring acts as a barrier to prevent lateral spreading of water infiltrating from the inner ring.</li>
        <li>The rate of drop of water level in the inner ring is recorded over time using a point gauge. This rate represents the vertical infiltration capacity of the soil.</li>
      </ul>

      <h4>2. Infiltration Indices</h4>
      <p>Infiltration indices are used to estimate surface runoff from a storm hyetograph:</p>
      
      <ol>
        <li><b>$\\Phi$-index:</b> The constant rate of infiltration above which the total rainfall volume equals the total direct runoff volume:
          $$R = \\sum (P_i - \\Phi) \\cdot \\Delta t \\quad \\text{for } P_i > \\Phi$$
        </li>
        <li><b>$W$-index:</b> The average infiltration rate during the period of rainfall excess, explicitly accounting for initial losses $I_a$ (depression storage, interception):
          $$W = \\frac{P - R - I_a}{t_e}$$
          where $P$ is total rainfall, $R$ is runoff, $I_a$ is initial loss, and $t_e$ is duration of rainfall excess (when rain intensity $i > f_c$).
        </li>
      </ol>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$\\Phi$ = $\\Phi$-index (cm/hr or mm/hr)</li>
          <li>$W$ = $W$-index (cm/hr or mm/hr)</li>
          <li>$P$ = Total storm rainfall (cm)</li>
          <li>$R$ = Total surface runoff depth (cm)</li>
          <li>$I_a$ = Initial losses (cm)</li>
          <li>$t_e$ = Total duration of rainfall excess (hours)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Double ring infiltrometers ensure vertical-only flow measurements. $\\Phi$-index aggregates initial losses, whereas $W$-index separates them: $W \\le \\Phi$.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Draw a rainfall hyetograph showing the $\\Phi$-index line cutting the rainfall blocks, identifying the shaded area above as Runoff.
      </div>
    `
  },
  {
    id: 'pyq-2022-3-b',
    module: 3,
    year: 2022,
    marks: 7,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Phi-index numerical calculation',
    formula: 'R = sum(P_i - phi) * dt',
    qnum: 'Q3 (b)',
    question: 'The average rainfall over 55 hectares of watershed for a particular storm was as follows:<br>Time (hr): 0, 1, 2, 3, 4, 5, 6, 7<br>Rainfall (cm): 0, 0.75, 1.25, 3.40, 2.95, 1.40, 0.80, 0.<br>The volume of runoff from the storm was determined as 3.20 ha-m. Establish the $\\Phi$-index.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Calculate Runoff Depth ($R$)</b>
      <p>The catchment area is $A = 55\\text{ hectares}$. Runoff volume $= 3.20\\text{ ha-m}$.</p>
      $$R = \\frac{\\text{Volume}}{\\text{Area}} = \\frac{3.20\\text{ ha-m}}{55\\text{ ha}} = 0.05818\\text{ m} = 5.818\\text{ cm}$$

      <b>Step 2: List the hourly rainfall increments</b>
      <p>The time intervals are $\\Delta t = 1\\text{ hour}$. The rainfall amounts in successive hours are:</p>
      <div class="answer-table-wrapper">
        <table class="answer-table">
          <thead>
            <tr>
              <th>Time Interval (hr)</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>Total ($P$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rainfall $P_i$ (cm)</td>
              <td>0.75</td>
              <td>1.25</td>
              <td>3.40</td>
              <td>2.95</td>
              <td>1.40</td>
              <td>0.80</td>
              <td><b>10.55 cm</b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <b>Step 3: Trial 1 - Assume all rain-bearing hours contribute to runoff</b>
      <p>Number of active intervals $n = 6$. Total infiltration $= P - R = 10.55 - 5.818 = 4.732\\text{ cm}$.</p>
      $$\\text{Trial } \\Phi = \\frac{4.732\\text{ cm}}{6\\text{ hr}} = 0.789\\text{ cm/hr}$$
      <p>Checking consistency: We compare rainfall intensities $P_i$ with the trial $\\Phi = 0.789\\text{ cm/hr}$:</p>
      <ul>
        <li>$P_1 = 0.75 < 0.789$ (Inconsistent! This hour does not produce runoff, so it must be excluded.)</li>
        <li>Other intensities are $> 0.789$.</li>
      </ul>

      <b>Step 4: Trial 2 - Exclude Period 1 ($P_1 = 0.75\\text{ cm}$)</b>
      <p>Number of active intervals $n = 5$ (from hr 1 to 6). Rain in these periods $= 1.25 + 3.40 + 2.95 + 1.40 + 0.80 = 9.80\\text{ cm}$.</p>
      <p>Total infiltration in these 5 periods $= \\sum P_{active} - R = 9.80 - 5.818 = 3.982\\text{ cm}$.</p>
      $$\\text{New } \\Phi = \\frac{3.982\\text{ cm}}{5\\text{ hr}} = 0.796\\text{ cm/hr}$$
      <p>Checking consistency with $\\Phi = 0.796\\text{ cm/hr}$:</p>
      <ul>
        <li>$P_1 = 0.75 < 0.796$ (Consistent, excluded)</li>
        <li>$P_6 = 0.80 > 0.796$ (Consistent, included)</li>
        <li>All other active intensities ($1.25, 3.40, 2.95, 1.40$) are $> 0.796$ (Consistent).</li>
      </ul>
      <p>Therefore, the calculated $\\Phi$-index is <b>$0.796\\text{ cm/hr}$</b>.</p>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$A$ = Area of watershed = $55\\text{ ha}$ ($1\\text{ ha} = 10,000\\text{ m}^2$)</li>
          <li>Volume = $3.20\\text{ ha-m} = 3.20 \\times 10,000\\text{ m}^3$</li>
          <li>$\\Phi$-index = $0.796\\text{ cm/hr}$</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The $\\Phi$-index is $0.796\\text{ cm/hr}$. It filters out the first hour's rainfall of $0.75\\text{ cm}$ which is entirely lost to infiltration.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Show each trial clearly. State which rainfall values are excluded after comparison. Getting the units of runoff depth correct is crucial!
      </div>
    `
  },
  {
    id: 'pyq-2022-4-a',
    module: 6,
    year: 2022,
    marks: 4,
    diff: 'Easy',
    qtype: 'Theory',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Unit hydrograph definition & limitations',
    formula: 'Runoff depth = 1 cm',
    qnum: 'Q4 (a)',
    question: 'Define Unit hydrograph and state its limitations.',
    answer: `
      <h4>1. Definition of Unit Hydrograph (UH)</h4>
      <p>A Unit Hydrograph is defined as the direct runoff hydrograph (DRH) resulting from one unit ($1\\text{ cm}$ or $1\\text{ mm}$) of effective rainfall (rainfall excess) occurring uniformly over the catchment at a uniform rate during a specified duration $D$ hours.</p>

      <h4>2. Limitations of Unit Hydrograph Theory</h4>
      <p>The unit hydrograph is a powerful tool but has several major limitations:</p>
      <ul>
        <li><b>Catchment Size:</b> Best suited for medium-sized catchments ($2.0\\text{ km}^2$ to $5000\\text{ km}^2$). For larger catchments, rainfall is rarely uniform, and channel routing effects dominate. For smaller catchments, overland flow dynamics are highly non-linear.</li>
        <li><b>Uniform Distribution Assumption:</b> Assumes rainfall is uniformly distributed over the entire basin. If a storm is concentrated in only one part of the basin, the resulting hydrograph can differ significantly.</li>
        <li><b>Time Invariance Assumption:</b> Catchment conditions change over time (e.g., changes in vegetation, urbanization, channel modifications), which violates the time-invariance assumption.</li>
        <li><b>Linearity Assumption:</b> Assumes a linear relationship between rainfall excess and runoff depth. In reality, runoff hydraulics are non-linear due to frictional variations with depth.</li>
      </ul>

      <div class="summary-box">
        📌 <b>Summary:</b> A Unit Hydrograph represents $1\\text{ cm}$ of direct runoff from a uniform storm. Its accuracy is limited by the assumptions of spatial uniformity and linear response.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Make sure to mention the specific size limit ($2 - 5000\\text{ km}^2$) and state both core assumptions (linearity and time-invariance) when explaining the limitations.
      </div>
    `
  },
  {
    id: 'pyq-2022-4-b',
    module: 6,
    year: 2022,
    marks: 4,
    diff: 'Easy',
    qtype: 'Theory',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'S-curve and uses',
    formula: 'S_t = sum(UH_t)',
    qnum: 'Q4 (b)',
    question: 'What is S-curve? Explain its uses.',
    answer: `
      <h4>1. Definition of S-curve</h4>
      <p>An S-curve (or summation curve) is a hydrograph produced by a continuous, infinite series of unit storms of duration $D$, each producing $1\\text{ cm}$ of runoff. It is obtained by shifting infinite unit hydrographs of duration $D$ hours by $D$ hours successively and summing their ordinates:</p>
      $$S(t) = U(t) + U(t-D) + U(t-2D) + \\dots$$
      <p>The flow rate rises gradually and asymptotically approaches a constant equilibrium discharge $Q_e$ when runoff generation rate matches the continuous rainfall input rate:</p>
      $$Q_e = 2.778 \\frac{A}{D}$$

      <h4>2. Uses of S-curve</h4>
      <ul>
        <li><b>Changing UH Duration:</b> The primary use of the S-curve is to convert a unit hydrograph of one duration ($D$-hr) to another duration ($T$-hr), where $T$ can be larger or smaller than $D$ and not necessarily an integer multiple.</li>
        <li><b>Construction of Synthetic UH:</b> Used to normalize or shift hydrographs during synthetic unit hydrograph development.</li>
        <li><b>Derivation of Instantaneous UH (IUH):</b> As duration $D \\to 0$, the derivative of the S-curve yields the Instantaneous Unit Hydrograph.</li>
      </ul>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$Q_e$ = Equilibrium discharge ($\\text{m}^3/\\text{s}$)</li>
          <li>$A$ = Catchment area ($\\text{km}^2$)</li>
          <li>$D$ = Duration of rainfall excess (hours)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> S-curve summation converts a $D$-hr UH to a $T$-hr UH. It achieves equilibrium discharge $Q_e = 2.778 A / D$ under infinite uniform rainfall.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Memorize the equilibrium discharge formula $Q_e = 2.778 A/D$ in SI units. This conversion factor is highly tested.
      </div>
    `
  },
  {
    id: 'pyq-2022-4-c',
    module: 6,
    year: 2022,
    marks: 7,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'S-curve derivation and unit hydrograph conversion',
    formula: 'UH_T(t) = (D / T) * [S(t) - S(t-T)]',
    qnum: 'Q4 (c)',
    question: 'The ordinates of a 4-hr unit hydrograph are given as:<br>Time (hr): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.<br>UH Ordinates (m³/sec): 0, 1.8, 4.9, 8.8, 11.9, 9.2, 5.3, 2.8, 0.9, 0.<br>Derive S-curve and obtain 1-hr unit hydrograph.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <p>Given original duration $D = 4\\text{ hr}$, required duration $T = 1\\text{ hr}$.</p>
      <p>The relationship to find a $T$-hr UH from S-curve is:
        $$U_T(t) = \\frac{D}{T} \\left[ S(t) - S(t-T) \\right] = 4 \\times \\left[ S(t) - S(t-1) \\right]$$
      </p>

      <b>Step 1: Calculate S-curve ordinates ($S(t)$)</b>
      <p>Since the UH ordinates are at 1-hour intervals, we lag the 4-hr UH by 4 hours successively to build the S-curve.
      Let $S(t) = U_4(t) + S(t-4)$.</p>

      <div class="answer-table-wrapper">
        <table class="answer-table">
          <thead>
            <tr>
              <th>Time (hr)</th>
              <th>4-hr UH Ordinate</th>
              <th>Lagged S-curve $S(t-4)$</th>
              <th>S-curve $S(t)$</th>
              <th>S(t-1) (Lagged by 1hr)</th>
              <th>Difference $S(t) - S(t-1)$</th>
              <th>1-hr UH Ordinate $= 4 \\times \\text{Diff}$</th>
            </tr>
          </thead>
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
            <tr><td>9</td><td>0</td><td>11.0</td><td>11.0</td><td>12.8</td><td>-1.8</td><td>0</td></tr>
            <tr><td>10</td><td>0</td><td>10.2</td><td>10.2</td><td>11.0</td><td>-0.8</td><td>0</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$U_4(t)$ = 4-hr UH ordinate ($\\text{m}^3/\\text{s}$)</li>
          <li>$S(t)$ = S-curve ordinate ($\\text{m}^3/\\text{s}$)</li>
          <li>$U_1(t)$ = Derived 1-hr UH ordinate ($\\text{m}^3/\\text{s}$)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Standard S-curve technique is used to interpolate the unit hydrograph down to a smaller duration ($T = 1\\text{ hr}$) by scaling the lagged difference by $D/T = 4$.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Lagging by $D$ hours (4 hours) is essential for accumulating the S-curve. Once $S(t)$ is established, shifting it by $T$ hours (1 hour) yields the required $U_T$ ordinates.
      </div>
    `
  },
  {
    id: 'pyq-2022-5-a',
    module: 5,
    year: 2022,
    marks: 8,
    diff: 'Medium',
    qtype: 'Theory',
    importance: 'Medium',
    repeated: false,
    probable: false,
    concept: 'Runoff factors and base flow separation',
    formula: 'Q_total - Q_base = Q_direct',
    qnum: 'Q5 (a)',
    question: 'What is runoff? Discuss the factors that affect the runoff. Explain any two methods of separation of base flow from the flood hydrograph.',
    answer: `
      <h4>1. Runoff & Factors Affecting It</h4>
      <p><b>Runoff</b> is the portion of precipitation that makes its way toward stream channels, lakes, or oceans as surface flow, interflow, or groundwater flow.</p>
      <p>Factors affecting runoff include:</p>
      <ul>
        <li><b>Precipitation Characteristics:</b> Intensity, duration, areal distribution, and time-sequence of rainfall.</li>
        <li><b>Catchment Characteristics:</b> Area, shape, channel slope, soil type, and land use/urbanization.</li>
      </ul>

      <h4>2. Methods of Base Flow Separation</h4>
      <ol>
        <li><b>Method 1: Straight-Line Method</b>
          <ul>
            <li>Draw a straight line from the point of onset of the rising limb (point $A$) to a point on the recession limb (point $B$) representing the end of direct runoff.</li>
            <li>$N = 0.83 \\cdot A^{0.2}$ (days from peak).</li>
          </ul>
        </li>
        <li><b>Method 2: Two-Line Method</b>
          <ul>
            <li>Extend the pre-storm recession curve until it meets the ordinate at the peak (point $C$).</li>
            <li>Connect this intersection point $C$ to point $B$ (the end of direct runoff) with a second straight line.</li>
          </ul>
        </li>
      </ol>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$N$ = Time base of direct runoff (days)</li>
          <li>$A$ = Catchment area ($\\text{km}^2$)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Base flow separation separates groundwater flow from surface runoff. The straight-line method utilizes $N = 0.83 A^{0.2}$ to identify the end of surface runoff.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Always sketch the hydrograph indicating points $A$, $B$, and the peak. This is crucial for obtaining full marks.
      </div>
    `
  },
  {
    id: 'pyq-2022-5-b',
    module: 6,
    year: 2022,
    marks: 7,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Synthetic Unit Hydrograph (Snyder\'s method)',
    formula: 't_p = C_t * (L * L_ca)^0.3',
    qnum: 'Q5 (b)',
    question: 'Explain Synthetic unit hydrograph. A basin has 560 sq.km of area, L=30km, Lca=18km. Assuming Ct=1.30, Cp=0.70, develop a 3-hr Synthetic unit hydrograph for the basin using Snyder\'s method.',
    answer: `
      <h4>Part 1: Synthetic Unit Hydrograph Concept</h4>
      <p>For ungauged catchments, standard unit hydrographs cannot be derived due to lack of streamflow records. A <b>Synthetic Unit Hydrograph (SUH)</b> is developed using empirical equations that relate physical characteristics of the basin to hydrograph parameters.</p>

      <h4>Part 2: Numerical Solution using Snyder\'s Method</h4>
      
      <b>Step 1: Calculate the Basin Lag Time ($t_p$)</b>
      $$t_p = C_t \\cdot (L \\cdot L_{ca})^{0.3}$$
      $$t_p = 1.30 \\times (30 \\times 18)^{0.3} = 1.30 \\times (540)^{0.3} = 8.58\\text{ hours}$$

      <b>Step 2: Determine Standard Duration ($t_r$)</b>
      $$t_r = \\frac{t_p}{5.5} = \\frac{8.58}{5.5} = 1.56\\text{ hours}$$

      <b>Step 3: Adjust for Required Duration ($T = 3\\text{ hr}$ or $t_R$)</b>
      $$t'_{p} = t_p + 0.25 (t_R - t_r)$$
      $$t'_{p} = 8.58 + 0.25 (3 - 1.56) = 8.94\\text{ hours}$$

      <b>Step 4: Calculate Peak Discharge ($Q_{p}$)</b>
      $$Q_p = \\frac{2.78 \\cdot C_p \\cdot A}{t'_{p}}$$
      $$Q_p = \\frac{2.78 \\times 0.70 \\times 560}{8.94} = 121.9\\text{ m}^3/\\text{s}$$

      <b>Step 5: Determine Time Base of the SUH ($T_b$)</b>
      $$T_b = 5 \\cdot \\left( t'_{p} + \\frac{t_R}{2} \\right) = 5 \\times \\left( 8.94 + 1.5 \\right) = 52.2\\text{ hours}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$L$ = Main channel length = $30\\text{ km}$</li>
          <li>$L_{ca}$ = Distance to centroid of basin = $18\\text{ km}$</li>
          <li>$t_p$ = Basin lag time (hours)</li>
          <li>$Q_p$ = Peak discharge ($\\text{m}^3/\\text{s}$)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> For the ungauged $560\\text{ km}^2$ catchment, Snyder's method yields a 3-hr Synthetic UH with lag $8.94\\text{ hr}$, peak discharge $121.9\\text{ m}^3/\\text{s}$, and base time $52.2\\text{ hr}$.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Write down all equations first. Note that $t_r = t_p / 5.5$ is the standard duration; if the required duration is different, the lag time must be adjusted.
      </div>
    `
  },
  {
    id: 'pyq-2022-6-b',
    module: 7,
    year: 2022,
    marks: 8,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Gumbel\'s method flood frequency analysis',
    formula: 'X_T = mean_X + K * S_x',
    qnum: 'Q6 (b)',
    question: 'The observed annual flood peak in m³/sec of a river for the period 2001 to 2015 are:<br>3210, 4000, 2250, 1846, 3160, 2842, 1985, 4260, 2194, 3625, 3180, 1826, 3629, 2944 and 4380.<br>Estimate the peak flood of 100 years return period by Gumbel\'s method.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Compute Mean ($\\bar{X}$) and Standard Deviation ($S_x$)</b>
      <p>Number of samples $N = 15$. Sum $= 45,331\\text{ m}^3/\\text{s}$.</p>
      $$\\bar{X} = \\frac{45331}{15} = 3022.07\\text{ m}^3/\\text{s}$$
      $$S_x = \\sqrt{\\frac{\\sum (X_i - \\bar{X})^2}{N - 1}} = 878.83\\text{ m}^3/\\text{s}$$

      <b>Step 2: Gumbel parameters for $N = 15$</b>
      <ul>
        <li>Reduced Mean $Y_n = 0.5128$</li>
        <li>Reduced Standard Deviation $S_n = 1.0206$</li>
      </ul>

      <b>Step 3: Calculate Reduced Variate ($y_T$) for $T = 100$ years</b>
      $$y_T = -\\ln \\left[ -\\ln \\left( 1 - \\frac{1}{T} \\right) \\right] = -\\ln \\left[ -\\ln(0.99) \\right] = 4.60015$$

      <b>Step 4: Compute Frequency Factor ($K_{100}$)</b>
      $$K_{100} = \\frac{y_T - Y_n}{S_n} = \\frac{4.60015 - 0.5128}{1.0206} = 4.00485$$

      <b>Step 5: Estimate the Peak Flood ($X_{100}$)</b>
      $$X_{100} = \\bar{X} + K_{100} \\cdot S_x$$
      $$X_{100} = 3022.07 + 4.00485 \\times 878.83 = 6541.66\\text{ m}^3/\\text{s}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$\\bar{X}$ = mean flood peak ($\\text{m}^3/\\text{s}$)</li>
          <li>$S_x$ = standard deviation ($\\text{m}^3/\\text{s}$)</li>
          <li>$X_{100}$ = 100-year return period peak flood ($\\text{m}^3/\\text{s}$)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The estimated 100-year peak flood is $6541.66\\text{ m}^3/\\text{s}$, representing a significant increase over the maximum observed historical value of $4380\\text{ m}^3/\\text{s}$.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Show standard deviation calculations step-by-step to secure maximum marks.
      </div>
    `
  },
  {
    id: 'pyq-2022-7-b',
    module: 8,
    year: 2022,
    marks: 7,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Muskingum flood routing numerical calculation',
    formula: 'Q_2 = C_0*I_2 + C_1*I_1 + C_2*Q_1',
    qnum: 'Q7 (b)',
    question: 'Route the following flood through a reach for which $K = 22\\text{ hours}$ and $X = 0.25$. Initial outflow $= 20\\text{ m}^3/\\text{sec}$.<br>Time (hr): 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66.<br>Inflow (m³/sec): 20, 80, 210, 240, 215, 170, 130, 90, 60, 40, 28, 16.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <p>Given parameters: $K = 22\\text{ hr}$, $X = 0.25$, routing period $\\Delta t = 6\\text{ hr}$.</p>
      
      <b>Step 1: Calculate Muskingum Coefficients ($C_0, C_1, C_2$)</b>
      <p>$D_{m} = K(1-X) + 0.5\\Delta t = 22(1-0.25) + 3 = 19.5\\text{ hours}$</p>
      $$C_0 = \\frac{-KX + 0.5\\Delta t}{D_{m}} = \\frac{-22(0.25) + 3}{19.5} = -0.1282$$
      $$C_1 = \\frac{KX + 0.5\\Delta t}{D_{m}} = \\frac{22(0.25) + 3}{19.5} = 0.4359$$
      $$C_2 = \\frac{K(1-X) - 0.5\\Delta t}{D_{m}} = \\frac{22(1-0.25) - 3}{19.5} = 0.6923$$
      <p>Check: $C_0 + C_1 + C_2 = 1.0000$ (Correct!).</p>

      <b>Step 2: Apply the routing equation</b>
      $$Q_2 = C_0 I_2 + C_1 I_1 + C_2 Q_1$$
      <p>The resulting outflows are:</p>
      <ul>
        <li>$t = 6\\text{ hr}: Q = 12.31\\text{ m}^3/\\text{s}$</li>
        <li>$t = 12\\text{ hr}: Q = 16.47\\text{ m}^3/\\text{s}$</li>
        <li>$t = 18\\text{ hr}: Q = 72.17\\text{ m}^3/\\text{s}$</li>
        <li>$t = 24\\text{ hr}: Q = 127.02\\text{ m}^3/\\text{s}$</li>
        <li>$t = 30\\text{ hr}: Q = 159.87\\text{ m}^3/\\text{s}$</li>
        <li>$t = 36\\text{ hr}: Q = 168.11\\text{ m}^3/\\text{s}$ (Peak!)</li>
        <li>$t = 42\\text{ hr}: Q = 161.51\\text{ m}^3/\\text{s}$</li>
      </ul>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$K$ = Travel time coefficient = $22\\text{ hours}$</li>
          <li>$\\Delta t$ = Routing time step = $6\\text{ hours}$</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The peak inflow of $240\\text{ m}^3/\\text{s}$ at $18\\text{ hr}$ is routed and attenuated to a peak outflow of $168.11\\text{ m}^3/\\text{s}$ at $36\\text{ hr}$ (attenuation lag $= 18\\text{ hours}$).
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Double-check that coefficients sum to $1$. Keep track of negative signs (especially for $C_0$).
      </div>
    `
  },

  // --- 2023 Detailed Questions ---
  {
    id: 'pyq-2023-2-b',
    module: 2,
    year: 2023,
    marks: 5,
    diff: 'Medium',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Rain gauge network adequacy calculation',
    formula: 'N = (C_v / epsilon)^2',
    qnum: 'Q2 (b)',
    question: 'The annual rainfall at 7 rain gauge stations in a basin are 58, 94, 60, 45, 20, 88 and 68 cm respectively. What is the percentage accuracy of the existing network in the estimation of the average depth of rainfall over the basin? How many additional gauges are required if it is desired to limit the error to only 10%?',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Compute Mean Rainfall ($\\bar{P}$)</b>
      $$\\bar{P} = \\frac{58 + 94 + 60 + 45 + 20 + 88 + 68}{7} = 61.86\\text{ cm}$$

      <b>Step 2: Calculate Standard Deviation ($s$)</b>
      $$s = \\sqrt{\\frac{\\sum(P_i - \\bar{P})^2}{m-1}} = 25.20\\text{ cm}$$

      <b>Step 3: Compute Coefficient of Variation ($C_v$)</b>
      $$C_v = \\frac{s}{\\bar{P}} \\times 100 = 40.74\\%$$

      <b>Step 4: Calculate Existing Percentage Accuracy</b>
      $$\\epsilon_{act} = \\frac{C_v}{\\sqrt{m}} = \\frac{40.74}{\\sqrt{7}} = 15.40\\%$$
      $$\\text{Percentage Accuracy} = 100 - 15.40 = 84.60\\%$$

      <b>Step 5: Compute Optimum Number of Gauges ($N$) for $\\epsilon = 10\\%$</b>
      $$N = \\left( \\frac{C_v}{\\epsilon} \\right)^2 = (4.074)^2 = 16.60 \\approx 17\\text{ stations}$$

      <b>Step 6: Compute Additional Gauges Required</b>
      $$\\text{Additional Gauges} = N - m = 17 - 7 = 10\\text{ stations}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$\\bar{P}$ = mean rainfall (cm)</li>
          <li>$s$ = sample standard deviation (cm)</li>
          <li>$C_v$ = coefficient of variation (%)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The existing network provides $84.6\\%$ accuracy. To reduce the error margin to $10\\%$, a total of $17$ gauges are needed, requiring $10$ additional stations.
      </div>

      <div class="note-box">
        💡 <b>Approach / Hint:</b> Always round up the calculated value of $N$ to the next higher integer.
      </div>
    `
  },
  {
    id: 'pyq-2023-3-b',
    module: 3,
    year: 2023,
    marks: 7,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Phi-index with initial loss',
    formula: 'P_excess - initial_loss - Runoff = Infiltration',
    qnum: 'Q3 (b)',
    question: 'The rainfall depth in where successive 8 hours period are 1.6, 5.4 and 4.1 cm respectively. If the initial loss is 0.6 cm and the surface runoff resulting from this storm is 4.7 cm. What will be the phi index for this storm?',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Adjust Rainfall for Initial Loss</b>
      <ul>
        <li>$P_1$ adjusted $= 1.6 - 0.6 = 1.0\\text{ cm}$.</li>
        <li>$P_2$ adjusted $= 5.4\\text{ cm}$.</li>
        <li>$P_3$ adjusted $= 4.1\\text{ cm}$.</li>
        <li>Total adjusted rain $= 10.5\\text{ cm}$.</li>
      </ul>

      <b>Step 2: Calculate Infiltration during Excess period</b>
      <p>Total infiltration $F = 10.5 - 4.7 = 5.8\\text{ cm}$.</p>

      <b>Step 3: Trial 1 - Assume all three 8-hr periods contribute to runoff</b>
      <p>$\\Phi = \\frac{5.8}{24\\text{ hr}} = 0.242\\text{ cm/hr} \\implies \\Phi_{8\\text{-hr}} = 1.933\\text{ cm}$.</p>
      <p>Since Period 1 ($1.0\\text{ cm}$) is $< 1.933\\text{ cm}$, it must be excluded.</p>

      <b>Step 4: Trial 2 - Exclude Period 1</b>
      <p>Rain in active periods $= 5.4 + 4.1 = 9.5\\text{ cm}$.</p>
      <p>Total infiltration in these 2 periods $= 9.5 - 4.7 = 4.8\\text{ cm}$.</p>
      $$\\text{New } \\Phi = \\frac{4.8\\text{ cm}}{16\\text{ hr}} = 0.30\\text{ cm/hr}$$
      <p>Checking consistency: Period 1 ($1.0\\text{ cm} < 2.4\\text{ cm}$), Periods 2/3 ($5.4, 4.1 > 2.4\\text{ cm}$). Consistent!</p>
      <p>Therefore, the $\\Phi$-index is <b>$0.30\\text{ cm/hr}$</b>.</p>

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$I_a$ = initial loss = $0.6\\text{ cm}$</li>
          <li>$\\Phi$-index = $0.30\\text{ cm/hr}$</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Satisfying initial loss first reduces the first block's rainfall to $1.0\\text{ cm}$. Since this block is fully absorbed, the effective infiltration index is determined from the remaining blocks to be $0.30\\text{ cm/hr}$.
      </div>
    `
  },
  {
    id: 'pyq-2023-5-b',
    module: 4,
    year: 2023,
    marks: 8,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'Medium',
    repeated: false,
    probable: true,
    concept: 'Water budget evaporation calculation',
    formula: 'Storage change = Inflows - Outflows',
    qnum: 'Q5 (b)',
    question: 'Compute the weekly evaporation from reservoir using the water budget method from the following record during the week:<br>Average inflow into the reservoir = 31.50 m³/s<br>Average outflow from the reservoir = 40.20 m³/s<br>Rainfall during the week = 73.6 mm<br>Surface area of reservoir = 15.8 km²<br>Estimate seepage = 0.25 million m³<br>Storage at the beginning of the week = 9180 ha.m<br>Storage at the end of the week = 8630 ha.m',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <p>Time period: 1 week $= 604,800\\text{ seconds}$.</p>

      <b>Step 1: Calculate Volumes ($\\text{m}^3$)</b>
      <ul>
        <li>Inflow Volume $V_I = 31.50 \\times 604,800 = 19,051,200\\text{ m}^3$</li>
        <li>Outflow Volume $V_O = 40.20 \\times 604,800 = 24,312,960\\text{ m}^3$</li>
        <li>Rainfall Volume $V_P = 0.0736 \\times (15.8 \\times 10^6) = 1,162,880\\text{ m}^3$</li>
        <li>Seepage Volume $V_S = 250,000\\text{ m}^3$</li>
        <li>Change in Storage $\\Delta V = (8630 - 9180) \\times 10^4 = -5,500,000\\text{ m}^3$</li>
      </ul>

      <b>Step 2: Solve for Evaporation Volume ($V_E$)</b>
      $$V_E = (V_I + V_P) - (V_O + V_S) - \\Delta V$$
      $$V_E = 20,214,080 - 24,562,960 - (-5,500,000) = 1,151,120\\text{ m}^3$$

      <b>Step 3: Calculate Evaporation Depth ($E$)</b>
      $$E = \\frac{1,151,120}{15.8 \\times 10^6} = 0.07285\\text{ m} = 72.85\\text{ mm}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$1\\text{ ha-m} = 10,000\\text{ m}^3$</li>
          <li>$E$ = Weekly evaporation depth (mm)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> Total weekly evaporation volume from the reservoir is $1.151\\times10^6\\text{ m}^3$, yielding an average daily evaporation depth of approximately $10.4\\text{ mm/day}$.
      </div>
    `
  },
  {
    id: 'pyq-2023-7-b',
    module: 7,
    year: 2023,
    marks: 7,
    diff: 'Medium',
    qtype: 'Numerical',
    importance: 'Medium',
    repeated: false,
    probable: true,
    concept: 'Rational method peak flow calculation',
    formula: 'Q_p = (C * i * A) / 3.6',
    qnum: 'Q7 (b)',
    question: 'An urban area has a runoff co-efficient of 0.3 and an area of 0.85 km². The maximum depth of rainfall with a 25 year return period is as below:<br>Duration (min): 5, 10, 20, 30, 60.<br>Depth of rainfall (mm): 17, 26, 40, 50, 62.<br>If a culvert for drainage at the outlet of this area is to be designed for a return period of 25 years, estimate the required peak flow rate. Take time of concentration for the drainage area as 30 min.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Determine design rainfall duration</b>
      $$\\text{Design Duration } D = t_c = 30\\text{ minutes}$$

      <b>Step 2: Obtain design rainfall depth and intensity</b>
      <p>From the given table, for $D = 30\\text{ minutes}$, the cumulative rainfall depth is $d = 50\\text{ mm}$.</p>
      $$i = \\frac{50\\text{ mm}}{30\\text{ min}} \\times 60 = 100\\text{ mm/hr}$$

      <b>Step 3: Apply the Rational Formula</b>
      $$Q_p = \\frac{C \\cdot i \\cdot A}{3.6} = \\frac{0.3 \\times 100 \\times 0.85}{3.6} = 7.083\\text{ m}^3/\\text{s}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$Q_p$ = Peak runoff rate ($\\text{m}^3/\\text{s}$)</li>
          <li>$C$ = Runoff coefficient</li>
          <li>$i$ = Intensity (mm/hr); $A$ = Area ($\\text{km}^2$)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The design peak discharge for the culvert is $7.08\\text{ m}^3/\\text{s}$, based on an intensity of $100\\text{ mm/hr}$ corresponding to a 30-minute time of concentration.
      </div>
    `
  },

  // --- 2024 Detailed Questions ---
  {
    id: 'pyq-2024-2-b',
    module: 2,
    year: 2024,
    marks: 5,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Dew point temperature and humidity calculations',
    formula: 'RH = (e_s(T_d) / e_s(T)) * 100',
    qnum: 'Q2 (b)',
    question: 'What is dew point temperature? At a climatic station, air pressure is measured as 100 kPa, air temperature as 20 C and the dew point temperature is 16º C. Calculate corresponding relative humidity and specific humidity.',
    answer: `
      <h4>1. Definition of Dew Point Temperature</h4>
      <p>The <b>Dew Point Temperature</b> ($T_d$) is the temperature to which moist air must be cooled at constant pressure and water vapor content to become saturated.</p>

      <h4>2. Humidity Calculation</h4>
      
      <b>Step 1: Calculate Saturation Vapor Pressure ($e_s$)</b>
      $$e_s(T) = 0.611 \\cdot e^{\\left( \\frac{17.27 \\cdot T}{T + 237.3} \\right)}$$
      <ul>
        <li>$e_s(20) = 0.611 \\times e^{1.3424} = 2.339\\text{ kPa}$</li>
        <li>$e = e_s(16) = 0.611 \\times e^{1.0906} = 1.818\\text{ kPa}$</li>
      </ul>

      <b>Step 2: Calculate Relative Humidity ($RH$)</b>
      $$RH = \\frac{e}{e_s(T)} \\times 100 = \\frac{1.818}{2.339} \\times 100 = 77.7\\%$$

      <b>Step 3: Calculate Specific Humidity ($q$)</b>
      $$q = \\frac{0.622 \\cdot e}{p - 0.378 \\cdot e} = \\frac{0.622 \\times 1.818}{100 - (0.378 \\times 1.818)} = 0.01138\\text{ kg/kg} = 11.38\\text{ g/kg}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$e$ = vapor pressure (kPa); $p$ = atmospheric pressure (kPa)</li>
          <li>$RH$ = relative humidity (%); $q$ = specific humidity (g/kg)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The relative humidity of the air mass is $77.7\\%$ and the specific humidity is $11.38\\text{ g/kg}$.
      </div>
    `
  },
  {
    id: 'pyq-2024-4-b',
    module: 7,
    year: 2024,
    marks: 6,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: false,
    concept: 'Gumbel\'s method 500 year flood prediction',
    formula: 'X_T = a + b * y_T',
    qnum: 'Q4 (b)',
    question: 'Flood frequency computations for a river using Gumbel\'s method yielded the following results:<br>Return Period T (years): 50, 100.<br>Peak flood (m³/s): 25,650; 30,100.<br>Using Gumbel\'s extreme value distribution predict the flood for a return period of 500 years.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Calculate $y_T$ for $T = 50$, $100$, and $500$ years</b>
      <ul>
        <li>$y_{50} = -\\ln \\left[ -\\ln(0.98) \\right] = 3.9019$</li>
        <li>$y_{100} = -\\ln \\left[ -\\ln(0.99) \\right] = 4.6001$</li>
        <li>$y_{500} = -\\ln \\left[ -\\ln(0.998) \\right] = 6.2136$</li>
      </ul>

      <b>Step 2: Setup Simultaneous Equations for coefficients $a$ and $b$</b>
      <ol>
        <li>$25,650 = a + b \\times 3.9019$</li>
        <li>$30,100 = a + b \\times 4.6001$</li>
      </ol>
      <p>Subtracting:</p>
      $$4,450 = b \\times 0.6982 \\implies b = 6,373.53$$
      $$a = 25,650 - (6,373.53 \\times 3.9019) = 781.09$$

      <b>Step 3: Predict peak flood for $T = 500$ years</b>
      $$X_{500} = a + b \\cdot y_{500} = 781.09 + (6,373.53 \\times 6.2136) = 40,379.75\\text{ m}^3/\\text{s}$$

      <div class="note-box">
        <b>📝 Notation & Units:</b>
        <ul>
          <li>$y_T$ = Gumbel reduced variate</li>
          <li>$X_T$ = peak flood discharge ($\\text{m}^3/\\text{s}$)</li>
        </ul>
      </div>

      <div class="summary-box">
        📌 <b>Summary:</b> The predicted 500-year peak flood is $40,379.75\\text{ m}^3/\\text{s}$.
      </div>
    `
  },
  {
    id: 'pyq-2024-5-b',
    module: 6,
    year: 2024,
    marks: 8,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'Medium',
    repeated: false,
    probable: true,
    concept: 'Snyder\'s Synthetic UH multi-catchment development',
    formula: 't_p = C_t * (L * L_ca)^0.3',
    qnum: 'Q5 (b)',
    question: 'Characteristics of two catchments A and B measured from a map are given below:<br>L (A=52 km, B=40 km)<br>Lca (A=28 km, B=21 km)<br>Area (A=450 km², B=375 km²)<br>For catchment A, a 4-h unit hydrograph was developed and was found to have a peak discharge of 70 m³/s after 12-hr from the beginning of rainfall excess. Using Snyder\'s method, develop a unit hydrograph for catchment B.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Analyze Catchment A to find coefficients $C_t$ and $C_p$</b>
      <ul>
        <li>$t_{p}' + 2 = 12 \\implies t_{p}' = 10\\text{ hours}$.</li>
        <li>$10 = t_p + 0.25(4 - t_p/5.5) \\implies t_p = 9.43\\text{ hours}$.</li>
        <li>$9.43 = C_t (52 \\times 28)^{0.3} \\implies C_t = 1.06$.</li>
        <li>$70 = \\frac{2.78 \\times C_p \\times 450}{10} \\implies C_p = 0.56$.</li>
      </ul>

      <b>Step 2: Apply coefficients to Catchment B</b>
      <ul>
        <li>$t_{pB} = 1.06 \\times (40 \\times 21)^{0.3} = 8.02\\text{ hours}$.</li>
        <li>$t_{rB} = 8.02 / 5.5 = 1.46\\text{ hours}$.</li>
        <li>$t'_{pB} = 8.02 + 0.25 (4 - 1.46) = 8.655\\text{ hours}$.</li>
        <li>$Q_{pB} = \\frac{2.78 \\times 0.56 \\times 375}{8.655} = 67.45\\text{ m}^3/\\text{s}$.</li>
        <li>$T_{bB} = 5 \\times (8.655 + 2) = 53.28\\text{ hours}$.</li>
      </ul>

      <div class="summary-box">
        📌 <b>Summary:</b> Catchment A parameters yield regional coefficients $C_t = 1.06$ and $C_p = 0.56$. Applying these to Catchment B results in a 4-h UH with peak $67.45\\text{ m}^3/\\text{s}$ occurring after $10.66\\text{ hours}$ ($t'_{p} + 2$).
      </div>
    `
  },

  // --- 2025 Detailed Questions ---
  {
    id: 'pyq-2025-2-c',
    module: 2,
    year: 2025,
    marks: 5,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Standard error and raingauge adequacy',
    formula: 'Standard Error = C_v / sqrt(m)',
    qnum: 'Q2 (c)',
    question: 'A catchment area has six raingauge stations. In a year, the annual rainfall recorded by the gauges are as follows:<br>Station: A B C D E F.<br>Rainfall (cm): 130.0, 142.1, 118.2, 108.5, 156.5, 103.2.<br>(i) Determine the standard error in the estimation of the mean rainfall in the existing set of raingauges.<br>(ii) For a 10% error in the estimation of the mean rainfall, calculate the optimum number of raingauge stations in the catchment.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Compute Mean Annual Rainfall ($\\bar{P}$)</b>
      $$\\bar{P} = \\frac{130.0 + 142.1 + 118.2 + 108.5 + 156.5 + 103.2}{6} = 126.42\\text{ cm}$$

      <b>Step 2: Calculate Standard Deviation ($s$)</b>
      $$s = \\sqrt{\\frac{\\sum(P_i - \\bar{P})^2}{m-1}} = 20.45\\text{ cm}$$

      <b>Step 3: Compute Coefficient of Variation ($C_v$)</b>
      $$C_v = \\frac{20.45}{126.42} \\times 100 = 16.18\\%$$

      <b>Step 4: Answer Part (i) - Standard Error ($E_s$) of the current network</b>
      $$E_s = \\frac{C_v}{\\sqrt{m}} = \\frac{16.18}{\\sqrt{6}} = 6.61\\%$$

      <b>Step 5: Answer Part (ii) - Optimum number of stations ($N$) for $\\epsilon = 10\\%$</b>
      $$N = \\left( \\frac{C_v}{\\epsilon} \\right)^2 = (1.618)^2 = 2.62 \\approx 3\\text{ stations}$$
      <p>The existing 6 stations are adequate (actual error $6.61\\% < 10\\%$).</p>

      <div class="summary-box">
        📌 <b>Summary:</b> The current network has a standard error of $6.61\\%$. To achieve a target error of $10\\%$, only $3$ stations are mathematically required.
      </div>
    `
  },
  {
    id: 'pyq-2025-3-b-1',
    module: 3,
    year: 2025,
    marks: 4,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'Medium',
    repeated: false,
    probable: true,
    concept: 'Horton\'s infiltration equation parameters fitting',
    formula: 'f_p = f_c + (f_0 - f_c) * e^(-k * t)',
    qnum: 'Q3 (b)(i)',
    question: 'For a small catchment, the infiltration rate at the beginning of a rain was observed to be 90 mm/hr and decreased to a constant rate of 8 mm/hr after 2.5 hrs. The total infiltration during 2.5 hrs was 50 mm. Develop the Horton\'s equation for the infiltration rate at any time t<2.5 hr.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Write cumulative infiltration equation</b>
      $$F = f_c \\cdot T + \\frac{f_0 - f_c}{k} \\left( 1 - e^{-k \\cdot T} \\right)$$

      <b>Step 2: Substitute known values to find decay constant $k$</b>
      $$50 = 8 \\times 2.5 + \\frac{90 - 8}{k} \\left( 1 - e^{-2.5 \\cdot k} \right)$$
      $$30 = \\frac{82}{k} \\left( 1 - e^{-2.5 \\cdot k} \\right) \\implies 0.36585 = \\frac{1 - e^{-2.5 \\cdot k}}{k}$$

      <b>Step 3: Solve for $k$ using iteration</b>
      <p>Adopt $k \\approx 2.72\\text{ hr}^{-1}$ (for which $(1 - e^{-6.8})/2.72 = 0.367$).</p>

      <b>Step 4: Formulate the Horton\'s Equation</b>
      $$f_p = 8 + 82 \\cdot e^{-2.72 \\cdot t} \\quad (\\text{mm/hr})$$

      <div class="summary-box">
        📌 <b>Summary:</b> Horton's infiltration capacity curve for this soil is modeled by $f_p = 8 + 82 e^{-2.72 t}$ mm/hr.
      </div>
    `
  },
  {
    id: 'pyq-2025-4-b',
    module: 5,
    year: 2025,
    marks: 6,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'Medium',
    repeated: false,
    probable: true,
    concept: 'Mass curve and phi-index runoff calculation',
    formula: 'Runoff = sum(Rainfall_i - phi * dt)',
    qnum: 'Q4 (b)',
    question: 'The mass curve of rainfall of duration 180 minutes on a catchment is given below. The phi-index of the catchment is known to be 0.4 cm/hr. Calculate the total surface runoff from the catchment due to this storm.<br>Time from start (min): 0, 30, 60, 80, 100, 120, 150, 180.<br>Cumulative rainfall (cm): 0, 0.6, 1.3, 2.0, 2.8, 3.0, 3.2, 3.3.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Compute incremental rainfalls and durations</b>
      <ul>
        <li>Interval 1 (0-30m): $\\Delta P = 0.6\\text{ cm}$. Infilt loss $= 0.4 \\times 0.5 = 0.2\\text{ cm}$. Runoff $= 0.4\\text{ cm}$.</li>
        <li>Interval 2 (30-60m): $\\Delta P = 0.7\\text{ cm}$. Infilt loss $= 0.2\\text{ cm}$. Runoff $= 0.5\\text{ cm}$.</li>
        <li>Interval 3 (60-80m): $\\Delta P = 0.7\\text{ cm}$. Infilt loss $= 0.4 \\times 20/60 = 0.133\\text{ cm}$. Runoff $= 0.567\\text{ cm}$.</li>
        <li>Interval 4 (80-100m): $\\Delta P = 0.8\\text{ cm}$. Infilt loss $= 0.133\\text{ cm}$. Runoff $= 0.667\\text{ cm}$.</li>
        <li>Interval 5 (100-120m): $\\Delta P = 0.2\\text{ cm}$. Infilt loss $= 0.133\\text{ cm}$. Runoff $= 0.067\\text{ cm}$.</li>
        <li>Interval 6 (120-150m): $\\Delta P = 0.2\\text{ cm}$. Infilt loss $= 0.2\\text{ cm}$. Runoff $= 0.0\\text{ cm}$.</li>
        <li>Interval 7 (150-180m): $\\Delta P = 0.1\\text{ cm} < 0.2\\text{ cm}$. Runoff $= 0.0\\text{ cm}$.</li>
      </ul>

      <b>Step 2: Sum the incremental runoff values</b>
      $$R_{total} = 0.40 + 0.50 + 0.567 + 0.667 + 0.067 = 2.20\\text{ cm}$$

      <div class="summary-box">
        📌 <b>Summary:</b> Summing the incremental runoffs yields a total surface runoff depth of $2.20\\text{ cm}$ out of $3.30\\text{ cm}$ total rainfall. The remaining $1.10\\text{ cm}$ is lost to infiltration.
      </div>
    `
  },
  {
    id: 'pyq-2025-6-b',
    module: 8,
    year: 2025,
    marks: 10,
    diff: 'Hard',
    qtype: 'Numerical',
    importance: 'High',
    repeated: true,
    probable: true,
    concept: 'Muskingum method routing 6hr interval',
    formula: 'Q_2 = C_0*I_2 + C_1*I_1 + C_2*Q_1',
    qnum: 'Q6 (b)',
    question: 'Route the following flood hydrograph through a river reach for which Muskingum coefficient K = 10 hr and x = 0.25. The initial outflow discharge is 8.0 m³/s.<br>Time(hrs): 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66.<br>Inflow (m³/s): 10, 25, 50, 75, 80, 74, 65, 50, 40, 30, 20, 10.',
    answer: `
      <h4>Step-by-Step Solution:</h4>
      
      <b>Step 1: Calculate Muskingum Coefficients</b>
      <p>$D_{m} = K(1-X) + 0.5\\Delta t = 10(1-0.25) + 3 = 10.5\\text{ hours}$.</p>
      $$C_0 = \\frac{-2.5 + 3}{10.5} = 0.0476, \\quad C_1 = \\frac{2.5 + 3}{10.5} = 0.5238, \\quad C_2 = \\frac{7.5 - 3}{10.5} = 0.4286$$

      <b>Step 2: Apply the routing equation</b>
      $$Q_2 = C_0 I_2 + C_1 I_1 + C_2 Q_1$$
      <p>Outflows sequential values are:</p>
      <ul>
        <li>$t=6\\text{ hr}: Q = 9.86\\text{ m}^3/\\text{s}$</li>
        <li>$t=12\\text{ hr}: Q = 19.71\\text{ m}^3/\\text{s}$</li>
        <li>$t=18\\text{ hr}: Q = 38.21\\text{ m}^3/\\text{s}$</li>
        <li>$t=24\\text{ hr}: Q = 59.48\\text{ m}^3/\\text{s}$</li>
        <li>$t=30\\text{ hr}: Q = 70.92\\text{ m}^3/\\text{s}$</li>
        <li>$t=36\\text{ hr}: Q = 72.25\\text{ m}^3/\\text{s}$ (Peak!)</li>
        <li>$t=42\\text{ hr}: Q = 67.40\\text{ m}^3/\\text{s}$</li>
      </ul>

      <div class="summary-box">
        📌 <b>Summary:</b> Peak inflow of $80\\text{ m}^3/\\text{s}$ at $24\\text{ hr}$ is routed and attenuated to a peak outflow of $72.25\\text{ m}^3/\\text{s}$ at $36\\text{ hr}$.
      </div>
    `
  }
];

const buildFooter = (notation, summary, hint) => `
  <div class="note-box"><b>📝 Notation & Units:</b> ${notation}</div>
  <div class="summary-box">📌 <b>Summary:</b> ${summary}</div>
  <div class="note-box">💡 <b>Approach / Hint:</b> ${hint}</div>
`;

const additionalQuestions = [
  {
    id: 'pyq-2022-6-a', module: 7, year: 2022, marks: 7, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Peak flood estimation methods and series', formula: 'Q = f(A, i, C, T)', qnum: 'Q6 (a)',
    question: 'Explain the different methods of estimation of peak flood. Explain briefly the difference between annual duration series and partial duration series.',
    answer: `
      <h4>Methods of Estimation of Peak Flood</h4>
      <ol>
        <li><b>Empirical Formulae:</b> Regional relations such as Dickens, Ryves, and Inglis formulae based mainly on catchment area.</li>
        <li><b>Rational Method:</b> Suitable for small catchments:
          $$Q_p = \frac{C i A}{3.6}$$
        </li>
        <li><b>Unit Hydrograph Method:</b> Converts rainfall excess into runoff hydrograph and estimates flood peak from storm response.</li>
        <li><b>Flood Frequency Analysis:</b> Statistical methods such as Gumbel and Log-Pearson Type III for return-period floods.</li>
        <li><b>Envelope Curves / PMP-PMF Approach:</b> Used for critical structures and extreme design conditions.</li>
      </ol>
      <h4>Annual Duration Series vs Partial Duration Series</h4>
      <ul>
        <li><b>Annual Duration Series:</b> Only the maximum flood of each year is used.</li>
        <li><b>Partial Duration Series:</b> All floods above a specified base are included, even if multiple occur in one year.</li>
        <li>Annual series is simpler and widely used; partial duration series is more informative for frequent floods.</li>
      </ul>
      ${buildFooter(
        '$Q_p$ = peak flood discharge; $C$ = runoff coefficient; $i$ = rainfall intensity; $A$ = catchment area; PMF = probable maximum flood.',
        'Peak flood may be estimated by empirical, rational, hydrograph, or statistical approaches; the choice depends on basin size and design purpose.',
        'In exam answers, first classify the methods, then write 2–3 lines on each. For the second part, compare annual series and partial series pointwise.'
      )}
    `
  },
  {
    id: 'pyq-2022-7-a', module: 8, year: 2022, marks: 8, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Stream flow routing vs reservoir routing and Puls method', formula: 'I - Q = dS/dt', qnum: 'Q7 (a)',
    question: 'How does stream flow routing differ from reservoir flood routing? Discuss Pul\'s method of reservoir routing. Also give the stepwise solution of the method.',
    answer: `
      <h4>Difference between Stream Flow Routing and Reservoir Routing</h4>
      <table class="answer-table">
        <tr><th>Aspect</th><th>Reservoir Routing</th><th>Channel / Stream Routing</th></tr>
        <tr><td>Storage</td><td>Mainly level-pool storage</td><td>Prism + wedge storage</td></tr>
        <tr><td>Method</td><td>Modified Pul\'s method</td><td>Muskingum / hydrologic routing</td></tr>
        <tr><td>Objective</td><td>Find outflow from known inflow</td><td>Route flood wave through a reach</td></tr>
      </table>
      <h4>Modified Pul\'s Method</h4>
      <p>The continuity equation is:</p>
      $$I - Q = \frac{dS}{dt}$$
      <p>For a finite interval:</p>
      $$\frac{I_1 + I_2}{2} - \frac{Q_1 + Q_2}{2} = \frac{S_2 - S_1}{\Delta t}$$
      <p>Rearranging:</p>
      $$\left(\frac{2S_2}{\Delta t} + Q_2\right) = (I_1 + I_2) + \left(\frac{2S_1}{\Delta t} - Q_1\right)$$
      <h4>Stepwise Procedure</h4>
      <ol>
        <li>Prepare storage-outflow and elevation-outflow data for the reservoir.</li>
        <li>Compute the storage-indication function $\left(\frac{2S}{\Delta t} + Q\right)$ for each elevation.</li>
        <li>At each time interval, evaluate the right-hand side using inflow and previous outflow.</li>
        <li>From the storage-indication table, obtain the new outflow $Q_2$.</li>
        <li>Repeat for all intervals to obtain the routed outflow hydrograph.</li>
      </ol>
      ${buildFooter(
        '$I$ = inflow, $Q$ = outflow, $S$ = storage, $\Delta t$ = time interval.',
        'Pul\'s method is a level-pool reservoir routing method derived from the continuity equation and a storage-indication relationship.',
        'Write the continuity equation first, then derive the routing form, and finally present the algorithm in numbered steps.'
      )}
    `
  },

  {
    id: 'pyq-2023-1-set', module: 0, year: 2023, marks: 10, diff: 'Medium', qtype: 'MCQ', importance: 'High', repeated: true, probable: true,
    concept: '2023 MCQ set', formula: 'Objective concepts', qnum: 'Q1 (MCQ Set)',
    question: '2023 complete MCQ set covering isohyet, double-mass-curve, infiltration capacity, direct runoff, evaporation inhibitor, triangular UH area, Muskingum coefficients, urbanization effect, UH assumption and general frequency equation.',
    answer: `
      <h4>2023 MCQ Answer Key</h4>
      <table class="answer-table">
        <tr><th>Part</th><th>Correct Option</th><th>Core Idea</th></tr>
        <tr><td>(i)</td><td>(c)</td><td>Isohyet joins points of equal rainfall depth.</td></tr>
        <tr><td>(ii)</td><td>(c)</td><td>Double mass curve checks rainfall consistency.</td></tr>
        <tr><td>(iii)</td><td>(b)</td><td>If $i < f_c$, actual infiltration is $f=i$.</td></tr>
        <tr><td>(iv)</td><td>(d)</td><td>Direct runoff includes surface runoff, prompt interflow and channel precipitation.</td></tr>
        <tr><td>(v)</td><td>(b)</td><td>Cetyl alcohol is used as evaporation inhibitor.</td></tr>
        <tr><td>(vi)</td><td>(b)</td><td>Area from triangular UH volume relation gives $116.64\text{ km}^2$.</td></tr>
        <tr><td>(vii)</td><td>(d)</td><td>In Muskingum routing, $C_0 + C_1 + C_2 = 1$.</td></tr>
        <tr><td>(viii)</td><td>(c)</td><td>Urbanization decreases time base and increases peak.</td></tr>
        <tr><td>(ix)</td><td>(b)</td><td>UH assumes linear response and time invariance.</td></tr>
        <tr><td>(x)</td><td>(b)</td><td>General frequency equation: $X_T = \bar{X} + K\sigma$.</td></tr>
      </table>
      ${buildFooter(
        'Key symbols: $i$ = rainfall intensity; $f_c$ = infiltration capacity; $X_T$ = value corresponding to return period $T$; $\sigma$ = standard deviation.',
        'The 2023 MCQ set mostly tests definitions, standard hydrology assumptions, and one-step formula recognition.',
        'For MCQ sets, prepare a quick revision sheet of core definitions, assumptions, and standard formula forms.'
      )}
    `
  },
  {
    id: 'pyq-2023-2-a', module: 2, year: 2023, marks: 10, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Types of precipitation and hydrologic cycle', formula: 'Hydrologic cycle continuity concept', qnum: 'Q2 (a)',
    question: 'Explain different types of precipitation. Define hydrologic cycle with its different components.',
    answer: `
      <h4>Types of Precipitation</h4>
      <ul>
        <li><b>Convective precipitation:</b> Caused by localized heating and upward movement of air.</li>
        <li><b>Orographic precipitation:</b> Occurs when moist air is forced to rise over mountains.</li>
        <li><b>Cyclonic / Frontal precipitation:</b> Produced when warm and cold air masses meet.</li>
      </ul>
      <h4>Hydrologic Cycle</h4>
      <p>The hydrologic cycle is the continuous circulation of water between the atmosphere, land, and oceans.</p>
      <ul>
        <li>Evaporation and transpiration</li>
        <li>Condensation and precipitation</li>
        <li>Infiltration and percolation</li>
        <li>Surface runoff, streamflow, and groundwater flow</li>
      </ul>
      <pre>
Ocean → Evaporation → Clouds → Precipitation
                     ↓
           Infiltration / Runoff / Groundwater
      </pre>
      ${buildFooter(
        'Evaporation = vapour loss from water surfaces; transpiration = vapour loss through plants; infiltration = entry of water into soil.',
        'The hydrologic cycle links atmospheric, surface, and subsurface water through continuous circulation.',
        'Draw a neat hydrologic cycle sketch first. Then explain the three precipitation mechanisms separately.'
      )}
    `
  },
  {
    id: 'pyq-2023-3-a', module: 3, year: 2023, marks: 8, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Horton infiltration capacity curve and infiltration indices', formula: 'f = f_c + (f_0-f_c)e^{-kt}', qnum: 'Q3 (a)',
    question: 'Explain Horton\'s infiltration capacity curve. What are the different infiltration indices? Explain each of them by sketches where necessary.',
    answer: `
      <h4>Horton\'s Infiltration Capacity Curve</h4>
      <p>Horton proposed that infiltration capacity decreases exponentially with time and approaches a constant value:</p>
      $$f = f_c + (f_0 - f_c)e^{-kt}$$
      <p>Initially, dry soil has high infiltration capacity $f_0$. With time, as the soil wets up, the infiltration rate drops toward the ultimate value $f_c$.</p>
      <h4>Infiltration Indices</h4>
      <ul>
        <li><b>$\Phi$-index:</b> Constant loss rate above which rainfall excess equals direct runoff.</li>
        <li><b>$W$-index:</b> Average infiltration rate during the period of rainfall excess excluding initial losses:
          $$W = \frac{P - R - I_a}{t_e}$$
        </li>
      </ul>
      ${buildFooter(
        '$f$ = infiltration capacity; $f_0$ = initial infiltration capacity; $f_c$ = final infiltration capacity; $k$ = decay constant.',
        'Horton\'s curve explains the progressive decline of infiltration capacity, while $\Phi$- and $W$-indices are practical storm-loss measures.',
        'Draw a decaying infiltration-capacity curve and a rainfall hyetograph with the $\Phi$-index line for full marks.'
      )}
    `
  },
  {
    id: 'pyq-2023-4-a', module: 6, year: 2023, marks: 8, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Storm hydrograph components and factors', formula: 'Q = f(t)', qnum: 'Q4 (a)',
    question: 'Define storm or flood hydrograph with its different components. Explain different factors affecting hydrograph.',
    answer: `
      <h4>Storm / Flood Hydrograph</h4>
      <p>A storm hydrograph is a graph showing variation of stream discharge with time at a given section during and after a storm.</p>
      <h4>Main Components</h4>
      <ul>
        <li>Rising limb</li>
        <li>Crest segment and peak discharge</li>
        <li>Falling limb / recession limb</li>
        <li>Base flow</li>
        <li>Time to peak, lag time, and time base</li>
      </ul>
      <h4>Factors Affecting Hydrograph</h4>
      <ul>
        <li>Rainfall intensity, duration, and distribution</li>
        <li>Catchment area, shape, slope, and drainage density</li>
        <li>Soil type, infiltration characteristics, and land use</li>
        <li>Antecedent moisture condition</li>
      </ul>
      ${buildFooter(
        '$Q$ = discharge; time to peak = time from beginning of storm excess to peak; base flow = groundwater contribution.',
        'Hydrograph shape depends on both storm characteristics and basin characteristics.',
        'In answers, first draw the hydrograph and label all components before explaining the influencing factors.'
      )}
    `
  },
  {
    id: 'pyq-2023-4-b', module: 6, year: 2023, marks: 7, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: '2-hr to 4-hr unit hydrograph by S-curve method', formula: 'UH_{new} from S-curve difference', qnum: 'Q4 (b)',
    question: 'The ordinates of a 2 hour unit hydrograph are given. Find the ordinates of 4 hour unit hydrograph by S-curve method.',
    answer: `
      <h4>Method</h4>
      <ol>
        <li>Construct the <b>S-curve</b> by successively lagging the 2-hr unit hydrograph by 2 hours and summing ordinates.</li>
        <li>Lag the S-curve by 4 hours.</li>
        <li>Subtract the lagged S-curve from the original S-curve to obtain the hydrograph corresponding to 2 cm excess over 4 hours.</li>
        <li>Divide all ordinates by 2 to get the required 4-hr unit hydrograph.</li>
      </ol>
      <p>The transformation relation is conceptually:</p>
      $$U_{4h}(t) = \frac{S(t) - S(t-4)}{2}$$
      ${buildFooter(
        '$S(t)$ = S-curve ordinate; $U_{4h}(t)$ = required 4-hour unit hydrograph ordinate.',
        'S-curve conversion is a standard hydrograph-duration transformation method.',
        'Set up the ordinance table neatly. Even if arithmetic is lengthy, the correct procedure earns substantial marks.'
      )}
    `
  },
  {
    id: 'pyq-2023-5-a', module: 4, year: 2023, marks: 7, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Evaporation and water budget method', formula: 'E = inflow + rainfall - outflow - seepage - storage change', qnum: 'Q5 (a)',
    question: 'What do you mean by evaporation? Discuss the water budget method for measurement of evaporation.',
    answer: `
      <h4>Evaporation</h4>
      <p>Evaporation is the process by which liquid water changes into vapour from free water surfaces due to heat energy from the atmosphere and solar radiation.</p>
      <h4>Water Budget Method</h4>
      <p>The reservoir water budget for a period may be written as:</p>
      $$\Delta S = I + P - O - E - G$$
      <p>Rearranging for evaporation loss:</p>
      $$E = I + P - O - G - \Delta S$$
      <p>Thus evaporation is estimated by balancing all inflows, outflows, seepage losses, rainfall input, and change in storage.</p>
      ${buildFooter(
        '$I$ = inflow; $P$ = precipitation input; $O$ = outflow; $G$ = seepage/ground loss; $\Delta S$ = storage change; $E$ = evaporation loss.',
        'Water budget is a mass-balance approach and is especially useful for lakes and reservoirs.',
        'Write the balance equation first, then explain each term physically.'
      )}
    `
  },
  {
    id: 'pyq-2023-6-a', module: 8, year: 2023, marks: 10, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Flood routing methods and comparison', formula: 'I-Q=dS/dt', qnum: 'Q6 (a)',
    question: 'What is flood routing? Discuss different methods of flood routing. How does stream flow routing differ from reservoir flood routing?',
    answer: `
      <h4>Flood Routing</h4>
      <p>Flood routing is the procedure used to determine the progressive translation and attenuation of a flood wave as it moves through a reservoir or channel reach.</p>
      <h4>Methods of Flood Routing</h4>
      <ul>
        <li><b>Hydrologic routing:</b> Based on continuity equation and storage-discharge relation.</li>
        <li><b>Hydraulic routing:</b> Based on continuity and momentum equations (Saint-Venant equations).</li>
        <li><b>Reservoir routing:</b> Usually level-pool routing / modified Pul\'s method.</li>
        <li><b>Channel routing:</b> Muskingum and Muskingum-Cunge methods.</li>
      </ul>
      <h4>Stream Flow Routing vs Reservoir Routing</h4>
      <table class="answer-table">
        <tr><th>Reservoir Routing</th><th>Stream Flow Routing</th></tr>
        <tr><td>Mainly level-pool storage</td><td>Prism and wedge storage</td></tr>
        <tr><td>Outflow controlled by stage-storage relation</td><td>Outflow affected by both inflow and channel reach properties</td></tr>
        <tr><td>Often by Pul\'s method</td><td>Often by Muskingum method</td></tr>
      </table>
      ${buildFooter(
        '$I$ = inflow; $Q$ = outflow; $S$ = storage; routing determines change in flood wave with time and space.',
        'Flood routing predicts how a flood wave attenuates and shifts downstream or through a reservoir.',
        'Start with the definition, list routing methods, then compare reservoir and channel routing pointwise.'
      )}
    `
  },
  {
    id: 'pyq-2023-6-b', module: 8, year: 2023, marks: 5, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Muskingum routing with 12-hour period', formula: 'Q_2=C_0I_2+C_1I_1+C_2Q_1', qnum: 'Q6 (b)',
    question: 'Route the inflow hydrograph for a river reach using Muskingum method with $K=18$ hr, $X=0.3$, and routing period of 12 hours.',
    answer: `
      <h4>Solution Outline</h4>
      <p>The routing equation is:</p>
      $$Q_2 = C_0I_2 + C_1I_1 + C_2Q_1$$
      <p>where</p>
      $$C_0 = \frac{-KX + \Delta t/2}{K - KX + \Delta t/2}, \quad C_1 = \frac{KX + \Delta t/2}{K - KX + \Delta t/2}, \quad C_2 = \frac{K - KX - \Delta t/2}{K - KX + \Delta t/2}$$
      <p>Substitute $K=18\text{ hr}$, $X=0.3$, and $\Delta t=12\text{ hr}$ to compute the coefficients, then route the hydrograph sequentially from the given initial outflow.</p>
      ${buildFooter(
        '$K$ = storage coefficient; $X$ = weighting factor; $\Delta t$ = routing interval; $I_1,I_2,Q_1,Q_2$ are successive inflows and outflows.',
        'The Muskingum method converts the continuity-storage relation into a practical recursive routing equation.',
        'Compute the coefficients first, verify their sum is 1, and then fill the routing table row by row.'
      )}
    `
  },
  {
    id: 'pyq-2023-7-a', module: 7, year: 2023, marks: 8, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Methods of estimation of peak flood', formula: 'Q_p = CiA/3.6', qnum: 'Q7 (a)',
    question: 'What are the different methods of estimation of peak flood? Explain any two of them.',
    answer: `
      <h4>Methods of Peak Flood Estimation</h4>
      <ul>
        <li>Empirical formulae</li>
        <li>Rational method</li>
        <li>Unit hydrograph method</li>
        <li>Flood frequency analysis</li>
        <li>PMP-PMF method for major structures</li>
      </ul>
      <h4>1. Rational Method</h4>
      $$Q_p = \frac{CiA}{3.6}$$
      <p>Used for small catchments, where $C$ is runoff coefficient, $i$ is design rainfall intensity, and $A$ is catchment area.</p>
      <h4>2. Flood Frequency Method</h4>
      <p>Uses statistical analysis of historical floods to estimate design floods for specified return periods, such as by Gumbel\'s method.</p>
      ${buildFooter(
        '$Q_p$ = peak flood; $C$ = runoff coefficient; $i$ = rainfall intensity; $A$ = catchment area.',
        'Peak flood may be estimated by hydrologic, empirical, or statistical methods depending on the basin and design objective.',
        'Explain the list first, then expand any two methods with formula, use, and limitation.'
      )}
    `
  },

  {
    id: 'pyq-2024-1-set', module: 0, year: 2024, marks: 10, diff: 'Medium', qtype: 'MCQ', importance: 'High', repeated: true, probable: true,
    concept: '2024 MCQ set', formula: 'Objective concepts', qnum: 'Q1 (MCQ Set)',
    question: '2024 complete MCQ set covering fresh groundwater percentage, evaporation inhibitor, lysimeter, wind velocity height relation, flow duration curve, triangular UH time base, equivalent runoff coefficient, hyetograph, reservoir routing effect, and IUH.',
    answer: `
      <h4>2024 MCQ Answer Key</h4>
      <table class="answer-table">
        <tr><th>Part</th><th>Correct Option</th><th>Core Idea</th></tr>
        <tr><td>(i)</td><td>(b)</td><td>Fresh groundwater is approximately $0.76\%$ of total earth water.</td></tr>
        <tr><td>(ii)</td><td>(c)</td><td>Cetyl alcohol is the standard evaporation inhibitor.</td></tr>
        <tr><td>(iii)</td><td>(d)</td><td>Lysimeter measures evapotranspiration.</td></tr>
        <tr><td>(iv)</td><td>(d)</td><td>Wind speed increases with height; answer is about $10.6\text{ km/hr}$.</td></tr>
        <tr><td>(v)</td><td>(c)</td><td>Flow duration curve plots discharge vs percent time exceeded.</td></tr>
        <tr><td>(vi)</td><td>(d)</td><td>Time base of triangular UH is $80\text{ hr}$.</td></tr>
        <tr><td>(vii)</td><td>(c)</td><td>Weighted runoff coefficient = $0.4(0.35)+0.6(0.65)=0.53$.</td></tr>
        <tr><td>(viii)</td><td>(c)</td><td>Hyetograph is rainfall intensity vs time.</td></tr>
        <tr><td>(ix)</td><td>(c)</td><td>Reservoir routing attenuates peak and increases time base.</td></tr>
        <tr><td>(x)</td><td>(b)</td><td>IUH corresponds to infinitesimal duration and unit rainfall excess.</td></tr>
      </table>
      ${buildFooter(
        'Lysimeter = ET measurement device; IUH = instantaneous unit hydrograph; FDC = flow duration curve.',
        'The 2024 MCQs mix direct fact recall and short one-step computations.',
        'Practice weighted averages, triangle-area UH relations, and standard definitions for quick scoring.'
      )}
    `
  },
  {
    id: 'pyq-2024-2-a', module: 2, year: 2024, marks: 6, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: false, probable: true,
    concept: 'Mechanism of precipitation formation in clouds', formula: 'Condensation and droplet growth', qnum: 'Q2 (a)',
    question: 'State the mechanism of formation of precipitation in clouds stating the process of condensation with the growth of droplets.',
    answer: `
      <h4>Mechanism of Formation of Precipitation</h4>
      <ol>
        <li>Moist air rises and cools adiabatically.</li>
        <li>When temperature falls to the dew point, condensation begins around condensation nuclei.</li>
        <li>Tiny droplets grow by collision, coalescence, and ice-crystal processes.</li>
        <li>When droplet size and weight become sufficient, they fall as precipitation.</li>
      </ol>
      <h4>Condensation and Droplet Growth</h4>
      <p>Condensation alone produces extremely small droplets. Further growth occurs due to supersaturation, droplet collision, and Bergeron ice-crystal process in mixed clouds.</p>
      ${buildFooter(
        'Dew point = saturation temperature; condensation nuclei = microscopic particles aiding condensation.',
        'Precipitation requires both cooling to saturation and subsequent droplet or ice-crystal growth to precipitable size.',
        'Write the sequence: uplift → cooling → condensation → droplet growth → precipitation. A small cloud sketch helps.'
      )}
    `
  },
  {
    id: 'pyq-2024-2-c', module: 2, year: 2024, marks: 4, diff: 'Medium', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Isohyetal method average precipitation', formula: 'Weighted average by inter-isohyetal area', qnum: 'Q2 (c)',
    question: 'For a drainage basin of 600 km², isohyetal data are given. Estimate the average depth of precipitation.',
    answer: `
      <h4>Isohyetal Method</h4>
      <p>Average precipitation is obtained by weighting the mean rainfall between two isohyets with the corresponding inter-isohyetal area:</p>
      $$\bar{P} = \frac{\sum A_i P_i}{\sum A_i}$$
      <p>For the given intervals:</p>
      <ul>
        <li>$15-12$: mean = $13.5$, area = $92$</li>
        <li>$12-9$: mean = $10.5$, area = $128$</li>
        <li>$9-6$: mean = $7.5$, area = $120$</li>
        <li>$6-3$: mean = $4.5$, area = $175$</li>
        <li>$3-1$: mean = $2.0$, area = $85$</li>
      </ul>
      $$\bar{P} = \frac{92(13.5)+128(10.5)+120(7.5)+175(4.5)+85(2.0)}{600} = 7.38\text{ cm}$$
      ${buildFooter(
        '$A_i$ = inter-isohyetal area; $P_i$ = mean precipitation between isohyets.',
        'Isohyetal method is a weighted-average method and is generally more accurate than arithmetic mean and Thiessen methods.',
        'Write all interval means first, then multiply by area, sum, and divide by the total basin area.'
      )}
    `
  },
  {
    id: 'pyq-2024-3-a', module: 4, year: 2024, marks: 8, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Initial loss and energy-budget method', formula: 'Net radiation and latent heat relation', qnum: 'Q3 (a)',
    question: 'Explain the initial loss of precipitation. Explain the energy-budget method of estimating lake evaporation with a sketch.',
    answer: `
      <h4>Initial Loss of Precipitation</h4>
      <p>Initial loss includes interception, depression storage, and early infiltration before runoff begins. It must be satisfied before effective rainfall is available for direct runoff.</p>
      <h4>Energy-Budget Method</h4>
      <p>The energy available at the water surface is used in heating, evaporation, and outgoing losses. In simplified form:</p>
      $$Q_n = Q_h + Q_e + Q_s$$
      <p>where evaporation is related to latent heat transfer:</p>
      $$Q_e = \rho L E$$
      <p>Thus evaporation is estimated from the available net energy balance of the water body.</p>
      ${buildFooter(
        '$Q_n$ = net radiation energy; $Q_h$ = sensible heat; $Q_e$ = latent heat used in evaporation; $Q_s$ = storage/other losses; $L$ = latent heat.',
        'Initial loss must be satisfied before runoff begins, while energy-budget method estimates evaporation from the lake energy balance.',
        'Separate the answer into two distinct parts: first define and explain initial loss, then write the energy-balance relation and explain each term.'
      )}
    `
  },
  {
    id: 'pyq-2024-3-b', module: 3, year: 2024, marks: 7, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Phi-index from hydrograph', formula: 'Runoff depth from DRH and Phi-index', qnum: 'Q3 (b)',
    question: 'Define phi-index. Rainfall magnitudes of 3.8 and 2.8 cm occur on two consecutive 4-h periods. Using the observed hydrograph and base flow 5 m³/s, estimate rainfall excess and phi-index.',
    answer: `
      <h4>Definition</h4>
      <p>$\Phi$-index is the constant infiltration rate such that rainfall excess above it equals direct runoff.</p>
      <h4>Runoff Depth from Hydrograph</h4>
      <p>After subtracting base flow $5\text{ m}^3/\text{s}$, the direct runoff hydrograph ordinates are integrated to obtain runoff volume. The corresponding runoff depth over the catchment is approximately:</p>
      $$R = 5.52\text{ cm}$$
      <h4>Phi-index</h4>
      <p>Total rainfall = $3.8 + 2.8 = 6.6\text{ cm}$ over $8$ hours.</p>
      $$\Phi = \frac{6.6 - 5.52}{8} = 0.135\text{ cm/hr}$$
      $$\boxed{\Phi = 0.135\text{ cm/hr}}$$
      ${buildFooter(
        '$R$ = runoff depth; $\Phi$ = infiltration index; base flow = groundwater contribution removed from the observed hydrograph.',
        'First derive direct runoff depth from the hydrograph, then compute the constant loss rate using total storm duration.',
        'Always subtract base flow first before converting the hydrograph area into runoff depth.'
      )}
    `
  },
  {
    id: 'pyq-2024-4-a', module: 5, year: 2024, marks: 6, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Direct runoff vs base flow and catchment characteristics', formula: 'Runoff response concept', qnum: 'Q4 (a)',
    question: 'Distinguish between direct runoff and base flow. Explain the catchment characteristics affecting runoff.',
    answer: `
      <h4>Direct Runoff vs Base Flow</h4>
      <table class="answer-table">
        <tr><th>Direct Runoff</th><th>Base Flow</th></tr>
        <tr><td>Prompt response to rainfall</td><td>Delayed groundwater contribution</td></tr>
        <tr><td>Composed of surface runoff and quick interflow</td><td>Sustained dry-weather flow</td></tr>
        <tr><td>Controls the storm peak</td><td>Controls the low-flow component</td></tr>
      </table>
      <h4>Catchment Characteristics Affecting Runoff</h4>
      <ul>
        <li>Area and shape of basin</li>
        <li>Slope and drainage density</li>
        <li>Soil type and infiltration characteristics</li>
        <li>Land use, vegetation, and urbanization</li>
      </ul>
      ${buildFooter(
        'Direct runoff = quick storm response; base flow = groundwater contribution to streamflow.',
        'Storm hydrograph peak is mainly governed by direct runoff, while base flow sustains flow between storms.',
        'Use a comparison table for the first part, then list catchment characteristics with one-line effects.'
      )}
    `
  },
  {
    id: 'pyq-2024-4-c', module: 7, year: 2024, marks: 3, diff: 'Easy', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Rational method explanation', formula: 'Q = CiA/3.6', qnum: 'Q4 (c)',
    question: 'Explain the rational method of determining flood peak with a sketch.',
    answer: `
      <h4>Rational Method</h4>
      <p>The rational method estimates the peak runoff for small catchments using:</p>
      $$Q_p = \frac{CiA}{3.6}$$
      <p>It assumes that the peak occurs when the entire catchment contributes runoff, i.e., when storm duration equals the time of concentration.</p>
      <pre>
Rainfall duration = time of concentration
       ↓
 Entire basin contributes → peak discharge
      </pre>
      ${buildFooter(
        '$Q_p$ = peak runoff; $C$ = runoff coefficient; $i$ = design rainfall intensity; $A$ = area.',
        'The rational method is simple and widely used for small drainage areas.',
        'Always mention the fundamental assumption: storm duration equals the time of concentration.'
      )}
    `
  },
  {
    id: 'pyq-2024-5-a', module: 6, year: 2024, marks: 7, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Unit hydrograph uses and base flow separation methods', formula: 'DRH concept', qnum: 'Q5 (a)',
    question: 'Define unit hydrograph and state its uses. Explain three methods of separation of base flow with sketches.',
    answer: `
      <h4>Unit Hydrograph</h4>
      <p>A unit hydrograph is the direct runoff hydrograph resulting from one unit depth of effective rainfall occurring uniformly over the basin for a specified duration.</p>
      <h4>Uses</h4>
      <ul>
        <li>Prediction of runoff hydrograph for a given effective rainfall</li>
        <li>Estimation of design flood hydrographs</li>
        <li>Development of synthetic unit hydrographs</li>
      </ul>
      <h4>Methods of Base Flow Separation</h4>
      <ol>
        <li>Straight-line method</li>
        <li>Fixed base method</li>
        <li>Concave or variable-slope method</li>
      </ol>
      ${buildFooter(
        'UH = unit hydrograph; DRH = direct runoff hydrograph; base flow = groundwater contribution.',
        'Unit hydrograph theory is central to runoff prediction, while base flow separation isolates the direct runoff portion.',
        'Define UH in one sentence, list its uses, then explain the three base-flow separation methods separately.'
      )}
    `
  },
  {
    id: 'pyq-2024-6-a', module: 8, year: 2024, marks: 5, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Flood routing and hydrologic vs hydraulic routing', formula: 'Continuity and momentum basis', qnum: 'Q6 (a)',
    question: 'What is flood routing? Distinguish between the hydraulic routing and hydrologic routing.',
    answer: `
      <h4>Flood Routing</h4>
      <p>Flood routing is the process of determining how a flood wave changes in magnitude and time as it moves through a channel or reservoir.</p>
      <h4>Hydrologic Routing vs Hydraulic Routing</h4>
      <table class="answer-table">
        <tr><th>Hydrologic Routing</th><th>Hydraulic Routing</th></tr>
        <tr><td>Uses continuity equation and storage relation</td><td>Uses continuity and momentum equations</td></tr>
        <tr><td>Simpler and lumped</td><td>More rigorous and distributed</td></tr>
        <tr><td>Examples: Muskingum, Pul\'s method</td><td>Example: Saint-Venant equations</td></tr>
      </table>
      ${buildFooter(
        'Hydrologic routing = storage-based routing; hydraulic routing = dynamic-flow routing.',
        'Hydrologic routing is simpler for engineering practice, while hydraulic routing is more physically detailed.',
        'A comparison table is the best way to answer distinction questions.'
      )}
    `
  },
  {
    id: 'pyq-2024-6-b', module: 8, year: 2024, marks: 3, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Level pool routing peak intersection proof', formula: 'At peak outflow dS/dt=0', qnum: 'Q6 (b)',
    question: 'Show that in the level pool routing the peak of the outflow hydrograph must intersect the inflow hydrograph.',
    answer: `
      <h4>Proof</h4>
      <p>For level-pool routing, the continuity equation is:</p>
      $$I - Q = \frac{dS}{dt}$$
      <p>At the instant when outflow reaches its peak, the rate of change of storage is zero with respect to outflow peak condition, which implies:</p>
      $$\frac{dS}{dt} = 0$$
      <p>Hence,</p>
      $$I = Q$$
      <p>Therefore, the peak of the outflow hydrograph must intersect the inflow hydrograph.</p>
      ${buildFooter(
        '$I$ = inflow; $Q$ = outflow; $S$ = storage.',
        'At the instant of peak outflow in level-pool routing, inflow equals outflow; thus the two hydrographs intersect.',
        'This is a short proof question—write the continuity equation first, then apply the peak-storage condition.'
      )}
    `
  },
  {
    id: 'pyq-2024-6-c', module: 8, year: 2024, marks: 7, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Muskingum routing with 4-hour interval', formula: 'Q_2=C_0I_2+C_1I_1+C_2Q_1', qnum: 'Q6 (c)',
    question: 'Route the given flood hydrograph through a river reach for which Muskingum coefficient $K = 8$ hr and $x = 0.25$. Initial outflow = 8.0 m³/s.',
    answer: `
      <h4>Routing Equation</h4>
      $$Q_2 = C_0I_2 + C_1I_1 + C_2Q_1$$
      <p>For $K=8\text{ hr}$, $x=0.25$, and $\Delta t=4\text{ hr}$, compute:</p>
      $$C_0 = \frac{-Kx + \Delta t/2}{K-Kx+\Delta t/2},\quad C_1 = \frac{Kx + \Delta t/2}{K-Kx+\Delta t/2},\quad C_2 = \frac{K-Kx-\Delta t/2}{K-Kx+\Delta t/2}$$
      <p>Then route the inflow hydrograph stepwise using the above recursive equation.</p>
      ${buildFooter(
        '$K$ = storage time constant; $x$ = weighting factor; $\Delta t$ = routing interval.',
        'Muskingum routing transforms the flood hydrograph through storage-based recursive calculations.',
        'Always calculate the coefficients first and then carry out routing interval by interval in a table.'
      )}
    `
  },
  {
    id: 'pyq-2024-7-a', module: 3, year: 2024, marks: 6, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Short notes: double ring infiltrometer, factors affecting infiltration, IUH', formula: 'IUH conceptual limit', qnum: 'Q7 (a)',
    question: 'Write short notes on the following (any two): (i) Double ring infiltrometer (ii) Factors affecting infiltration (iii) Instantaneous unit hydrograph.',
    answer: `
      <h4>(i) Double Ring Infiltrometer</h4>
      <p>It consists of two concentric metal rings inserted into soil. Water is maintained in both rings; the outer ring reduces lateral flow so the inner ring measures nearly vertical infiltration.</p>
      <h4>(ii) Factors Affecting Infiltration</h4>
      <ul>
        <li>Soil texture and structure</li>
        <li>Vegetation cover</li>
        <li>Antecedent moisture condition</li>
        <li>Surface compaction and land use</li>
      </ul>
      <h4>(iii) Instantaneous Unit Hydrograph (IUH)</h4>
      <p>IUH is the direct runoff hydrograph resulting from a unit depth of rainfall excess occurring instantaneously over the catchment. It is the limiting case of unit hydrograph duration tending to zero.</p>
      ${buildFooter(
        'IUH = instantaneous unit hydrograph; infiltration = entry of water into soil.',
        'These short notes require compact definitions with 2–3 useful technical points each.',
        'Write each short note under a separate heading. Keep them concise but include one practical use or property.'
      )}
    `
  },
  {
    id: 'pyq-2024-7-b', module: 6, year: 2024, marks: 9, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: '4-hr to 2-hr unit hydrograph by S-curve method', formula: 'U_{2h}(t)=2[S(t)-S(t-2)]', qnum: 'Q7 (b)',
    question: 'The ordinates of a 4-hr U.H are given. Derive S-curve and obtain 2-hr unit hydrograph.',
    answer: `
      <h4>Procedure</h4>
      <ol>
        <li>Construct the S-curve from the given 4-hr unit hydrograph by summing successive 4-hour-lagged ordinates.</li>
        <li>Lag the S-curve by 2 hours.</li>
        <li>Subtract the lagged values from the original S-curve to obtain the hydrograph due to 0.5 cm excess over 2 hours.</li>
        <li>Multiply ordinates suitably to obtain the 2-hr unit hydrograph.</li>
      </ol>
      <p>The working relation is:</p>
      $$U_{2h}(t) = 2\,[S(t)-S(t-2)]$$
      ${buildFooter(
        '$S(t)$ = S-curve ordinate; $U_{2h}(t)$ = desired 2-hour unit hydrograph.',
        'The S-curve method converts a known-duration unit hydrograph into another duration by lagging and differencing.',
        'Set up the ordinates in a table with columns for given UH, S-curve, lagged S-curve, difference, and final converted UH.'
      )}
    `
  },

  {
    id: 'pyq-2025-1-set', module: 0, year: 2025, marks: 10, diff: 'Medium', qtype: 'MCQ', importance: 'High', repeated: true, probable: true,
    concept: '2025 MCQ set', formula: 'Objective concepts', qnum: 'Q1 (MCQ Set)',
    question: '2025 complete MCQ set covering glaze, flood probability, ephemeral stream, wind-speed height relation, double mass curve, triangular UH time base, phi-index runoff, Saint-Venant equations, reservoir routing effect, and UH assumptions.',
    answer: `
      <h4>2025 MCQ Answer Key</h4>
      <table class="answer-table">
        <tr><th>Part</th><th>Correct Option</th><th>Core Idea</th></tr>
        <tr><td>(i)</td><td>(d)</td><td>Freezing rain coating is glaze.</td></tr>
        <tr><td>(ii)</td><td>(c)</td><td>Probability of at least one 10-year flood in 5 years is $1-(0.9)^5\approx 0.4095$; use the exam's intended option logic if provided.</td></tr>
        <tr><td>(iii)</td><td>(d)</td><td>Ephemeral streams have no base flow contribution.</td></tr>
        <tr><td>(iv)</td><td>(d)</td><td>Wind speed increases with height to about $8.12\text{ km/hr}$.</td></tr>
        <tr><td>(v)</td><td>(a)</td><td>Double mass curve checks rainfall consistency.</td></tr>
        <tr><td>(vi)</td><td>(a)</td><td>Triangular UH time base from volume relation gives $60\text{ hr}$.</td></tr>
        <tr><td>(vii)</td><td>(b)</td><td>Runoff depth above $\Phi=3\text{ cm/day}$ totals $11\text{ cm}$.</td></tr>
        <tr><td>(viii)</td><td>(d)</td><td>Saint-Venant equations are continuity and momentum equations.</td></tr>
        <tr><td>(ix)</td><td>(b)</td><td>Reservoir routing attenuates peak and increases time base.</td></tr>
        <tr><td>(x)</td><td>(c)</td><td>Basic UH assumptions: time invariance and linear response.</td></tr>
      </table>
      ${buildFooter(
        'Saint-Venant = continuity + momentum; $\Phi$-index runoff = rainfall excess above constant loss rate.',
        'The 2025 MCQs heavily emphasize standard hydrology definitions and frequently repeated routing/UH concepts.',
        'Treat MCQ sets as formula-recall drills. Rehearse standard answers for routing, UH assumptions, and rain-gauge consistency.'
      )}
    `
  },
  {
    id: 'pyq-2025-2-a', module: 2, year: 2025, marks: 6, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Specific humidity vs relative humidity, frontal vs convective, hyetograph vs mass curve', formula: 'Comparative definitions', qnum: 'Q2 (a)',
    question: 'Distinguish between (i) Specific humidity and relative humidity (ii) Frontal precipitation and Convective precipitation (iii) Hyetograph and the mass curve of rainfall.',
    answer: `
      <h4>(i) Specific Humidity vs Relative Humidity</h4>
      <table class="answer-table">
        <tr><th>Specific Humidity</th><th>Relative Humidity</th></tr>
        <tr><td>Mass of water vapour per mass of moist air</td><td>Ratio of actual vapour pressure to saturation vapour pressure</td></tr>
        <tr><td>Usually expressed in g/kg</td><td>Expressed in %</td></tr>
      </table>
      <h4>(ii) Frontal vs Convective Precipitation</h4>
      <ul>
        <li><b>Frontal:</b> Produced when warm and cold air masses meet.</li>
        <li><b>Convective:</b> Produced due to surface heating and vertical uplift.</li>
      </ul>
      <h4>(iii) Hyetograph vs Mass Curve</h4>
      <ul>
        <li><b>Hyetograph:</b> Plot of rainfall intensity versus time.</li>
        <li><b>Mass curve:</b> Plot of cumulative rainfall versus time.</li>
      </ul>
      ${buildFooter(
        'Specific humidity in g/kg; relative humidity in %; hyetograph = intensity-time plot; mass curve = cumulative rainfall-time plot.',
        'This is a distinction question best answered through short comparison tables and crisp pointwise contrasts.',
        'Use separate subheadings for each distinction and avoid mixing the three comparisons into one paragraph.'
      )}
    `
  },
  {
    id: 'pyq-2025-2-b', module: 2, year: 2025, marks: 4, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Humidity from dew point', formula: 'RH=e/e_s x 100', qnum: 'Q2 (b)',
    question: 'At a climatic station, air pressure is 102 kPa, air temperature is 19°C and dew point is 15°C. Calculate corresponding relative humidity and specific humidity.',
    answer: `
      <h4>Method</h4>
      <p>Use saturation vapour pressure evaluated at the air temperature and at the dew-point temperature. Then:</p>
      $$RH = \frac{e}{e_s}\times 100$$
      $$q = \frac{0.622e}{p-0.378e}$$
      <p>Here $e$ is obtained from the dew point and $e_s$ from the dry-bulb air temperature.</p>
      ${buildFooter(
        '$e$ = actual vapour pressure; $e_s$ = saturation vapour pressure; $p$ = atmospheric pressure; $q$ = specific humidity.',
        'Humidity numericals are solved by computing actual vapour pressure from the dew point and then using the two standard formulas.',
        'First evaluate the two vapour pressures, then compute relative humidity, and finally compute specific humidity carefully with correct units.'
      )}
    `
  },
  {
    id: 'pyq-2025-3-a', module: 4, year: 2025, marks: 5, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Evaporation vs vaporization, PET, AET, energy budget', formula: 'Energy budget principle', qnum: 'Q3 (a)',
    question: 'Distinguish between evaporation and vaporisation. Define PET and AET. Explain the energy-budget method of estimating lake evaporation with a sketch.',
    answer: `
      <h4>Evaporation vs Vaporisation</h4>
      <ul>
        <li><b>Evaporation:</b> Slow vapour formation from a free surface below boiling point.</li>
        <li><b>Vaporisation:</b> General phase change of liquid into vapour, including boiling.</li>
      </ul>
      <h4>PET and AET</h4>
      <ul>
        <li><b>PET:</b> Potential evapotranspiration under unlimited water availability.</li>
        <li><b>AET:</b> Actual evapotranspiration under field moisture conditions.</li>
      </ul>
      <h4>Energy-Budget Method</h4>
      $$Q_n = Q_h + Q_e + Q_s$$
      <p>Lake evaporation is estimated from the latent heat term after accounting for other energy components.</p>
      ${buildFooter(
        'PET = potential evapotranspiration; AET = actual evapotranspiration; $Q_e$ = latent heat term.',
        'Energy-budget method estimates evaporation by balancing incoming and outgoing heat fluxes over the water body.',
        'Write the distinctions first in short points, then define PET and AET, and finally write the energy-budget equation with term meanings.'
      )}
    `
  },
  {
    id: 'pyq-2025-3-b-2', module: 3, year: 2025, marks: 4, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Average infiltration from Horton equation', formula: 'f_p = 0.5 + 1.2e^{-0.5t}', qnum: 'Q3 (b)(ii)',
    question: 'The infiltration capacity of a catchment is represented by Horton\'s equation as $f_p = 0.5 + 1.2e^{-0.5t}$ where $f_p$ is in cm/hr and $t$ is in hours. Estimate the average infiltration for a 4-hour storm duration.',
    answer: `
      <h4>Average Infiltration</h4>
      <p>The average infiltration over duration $T$ is:</p>
      $$\bar{f} = \frac{1}{T}\int_0^T f_p\,dt$$
      $$\bar{f} = \frac{1}{4}\int_0^4 \left(0.5 + 1.2e^{-0.5t}\right)dt$$
      $$\bar{f} = \frac{1}{4}\left[0.5t - 2.4e^{-0.5t}\right]_0^4$$
      $$\bar{f} = \frac{1}{4}\left(2 + 2.4(1-e^{-2})\right) \approx 1.02\text{ cm/hr}$$
      ${buildFooter(
        '$\bar{f}$ = average infiltration; $f_p$ = infiltration capacity; $T$ = storm duration.',
        'Average infiltration is obtained by integrating the Horton equation over the storm duration and dividing by total time.',
        'Always integrate first and only then divide by duration. Show the limits of integration clearly.'
      )}
    `
  },
  {
    id: 'pyq-2025-4-a', module: 5, year: 2025, marks: 3, diff: 'Easy', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Stream order and stream density', formula: 'Drainage density = total channel length / area', qnum: 'Q4 (a)',
    question: 'Explain the following parameters of catchment characteristics affecting runoff: (i) Stream order (ii) Stream density.',
    answer: `
      <h4>Stream Order</h4>
      <p>Stream order is a numerical ranking of streams in a drainage basin according to branching hierarchy. Higher stream order generally indicates a more developed drainage network.</p>
      <h4>Stream Density / Drainage Density</h4>
      <p>Drainage density is the total length of streams per unit catchment area:</p>
      $$D_d = \frac{L_{total}}{A}$$
      <p>Higher drainage density usually indicates quicker runoff response and smaller infiltration opportunity time.</p>
      ${buildFooter(
        '$D_d$ = drainage density; $L_{total}$ = total stream length; $A$ = basin area.',
        'Stream order reflects drainage hierarchy, whereas drainage density reflects channel concentration within the basin.',
        'Define each term first and then state how it affects runoff peak and response time.'
      )}
    `
  },
  {
    id: 'pyq-2025-4-c', module: 7, year: 2025, marks: 6, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Gumbel 200-year flood prediction', formula: 'X_T = a + by_T', qnum: 'Q4 (c)',
    question: 'Flood frequency computations for a river using Gumbel\'s method yielded: $T=50, X=15150$ and $T=100, X=18870$. Predict the flood for a return period of 200 years.',
    answer: `
      <h4>Reduced Variates</h4>
      $$y_{50}=3.9019, \quad y_{100}=4.6001, \quad y_{200}=5.2933$$
      <h4>Linear Form</h4>
      $$X_T = a + by_T$$
      <p>Using the two given flood values:</p>
      $$15150 = a + b(3.9019)$$
      $$18870 = a + b(4.6001)$$
      <p>Subtracting gives:</p>
      $$3720 = b(0.6982) \Rightarrow b = 5327.99$$
      $$a = 15150 - 5327.99(3.9019) = -5639.77$$
      <p>Therefore, for $T=200$ years:</p>
      $$X_{200} = -5639.77 + 5327.99(5.2933) = 22562.8\text{ m}^3/\text{s}$$
      $$\boxed{X_{200} = 22562.8\text{ m}^3/\text{s}}$$
      ${buildFooter(
        '$X_T$ = flood value for return period $T$; $y_T$ = reduced variate; $a,b$ = linear fitting constants.',
        'When two return-period floods are given, a direct linear reduced-variate approach is efficient for estimating any other design flood.',
        'Write the reduced variates first, fit the linear equation, and then evaluate the required return period.'
      )}
    `
  },
  {
    id: 'pyq-2025-5-a', module: 6, year: 2025, marks: 7, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: '3-hour to 6-hour unit hydrograph', formula: 'S-curve / superposition', qnum: 'Q5 (a)',
    question: 'The 3-hour unit hydrograph ordinates of a basin are given below. Determine the 6-h unit hydrograph ordinates of the basin.',
    answer: `
      <h4>Method of Solution</h4>
      <p>To derive the 6-hour unit hydrograph from the 3-hour unit hydrograph, use either superposition or the S-curve method. Since 6 hours is twice the original duration, the simpler superposition form is:</p>
      $$U_{6h}(t) = \frac{U_{3h}(t) + U_{3h}(t-3)}{2}$$
      <p>Each 6-hour ordinate is obtained by adding two successive 3-hour unit hydrograph ordinates lagged by 3 hours and then dividing by 2.</p>
      ${buildFooter(
        '$U_{3h}$ = 3-hour unit hydrograph ordinate; $U_{6h}$ = 6-hour unit hydrograph ordinate.',
        'When the required duration is an integer multiple of the original duration, superposition is the quickest method.',
        'Make a table with columns for original ordinate, lagged ordinate, sum, and final divided value.'
      )}
    `
  },
  {
    id: 'pyq-2025-5-b', module: 6, year: 2025, marks: 6, diff: 'Hard', qtype: 'Numerical', importance: 'High', repeated: true, probable: true,
    concept: 'Snyder 6-hour unit hydrograph for catchment B', formula: 't_p=C_t(LL_{ca})^{0.3}', qnum: 'Q5 (b)',
    question: 'For catchment A, a 6-h UH was developed and was found to have a peak discharge of 200 m³/s after 37 hr from the beginning of rainfall excess. Using Snyder\'s method, develop a 6-h unit hydrograph for catchment B.',
    answer: `
      <h4>Approach</h4>
      <ol>
        <li>Use catchment A data to determine regional coefficients $C_t$ and $C_p$.</li>
        <li>Apply the same coefficients to catchment B using its $L$, $L_{ca}$, and $A$ values.</li>
        <li>Since the required unit hydrograph duration is 6 hours, adjust the basin lag if necessary before computing the peak.</li>
      </ol>
      <p>Main relations used are:</p>
      $$t_p = C_t(LL_{ca})^{0.3}, \qquad Q_p = \frac{2.78C_pA}{t_p'}$$
      ${buildFooter(
        '$C_t$ = lag coefficient; $C_p$ = peak coefficient; $L$ = main stream length; $L_{ca}$ = centroid distance.',
        'This is a regional transfer problem: calibrate Snyder coefficients from catchment A and apply them to catchment B.',
        'Always derive the regional coefficients from the known basin first before applying them to the unknown basin.'
      )}
    `
  },
  {
    id: 'pyq-2025-6-a', module: 8, year: 2025, marks: 5, diff: 'Medium', qtype: 'Theory', importance: 'High', repeated: true, probable: true,
    concept: 'Channel routing vs reservoir routing and level-pool proof', formula: 'I-Q=dS/dt', qnum: 'Q6 (a)',
    question: 'Distinguish between channel routing and reservoir routing. Show that in the level pool routing the peak of the outflow hydrograph must intersect the inflow hydrograph.',
    answer: `
      <h4>Channel Routing vs Reservoir Routing</h4>
      <table class="answer-table">
        <tr><th>Channel Routing</th><th>Reservoir Routing</th></tr>
        <tr><td>Wave movement through a channel reach</td><td>Storage and release through a reservoir</td></tr>
        <tr><td>Uses Muskingum-type relations</td><td>Uses level-pool / Pul\'s method</td></tr>
        <tr><td>Storage depends on inflow and outflow</td><td>Storage primarily related to stage and outflow</td></tr>
      </table>
      <h4>Proof of Intersection</h4>
      $$I - Q = \frac{dS}{dt}$$
      <p>At the peak of outflow, the storage change condition gives:</p>
      $$\frac{dS}{dt} = 0$$
      <p>Hence,</p>
      $$I = Q$$
      <p>Thus, the outflow hydrograph peak must intersect the inflow hydrograph.</p>
      ${buildFooter(
        '$I$ = inflow; $Q$ = outflow; $S$ = storage.',
        'The proof follows directly from continuity by applying the peak condition to the storage-change term.',
        'Write the distinction in a table and then give the short proof separately using the continuity equation.'
      )}
    `
  },
  {
    id: 'pyq-2025-7-a', module: 0, year: 2025, marks: 15, diff: 'Medium', qtype: 'Theory', importance: 'Medium', repeated: true, probable: true,
    concept: 'Short notes set 2025', formula: 'Conceptual notes', qnum: 'Q7 (Short Notes Set)',
    question: 'Write short notes on the following with sketches (any three): (a) Double ring infiltrometer (b) Flow duration curve (c) Hydrologic cycle (d) Methods of Base flow separation.',
    answer: `
      <h4>(a) Double Ring Infiltrometer</h4>
      <p>Consists of two concentric rings driven into the soil. The outer ring minimizes lateral spread so that infiltration in the inner ring is nearly vertical.</p>
      <h4>(b) Flow Duration Curve</h4>
      <p>A flow duration curve is a plot of discharge versus the percentage of time that the discharge is equalled or exceeded.</p>
      <h4>(c) Hydrologic Cycle</h4>
      <p>The hydrologic cycle is the continuous movement of water through evaporation, condensation, precipitation, infiltration, runoff, and groundwater flow.</p>
      <h4>(d) Methods of Base Flow Separation</h4>
      <p>Common methods are straight-line method, fixed base method, and variable-slope or concave method.</p>
      ${buildFooter(
        'Infiltrometer = infiltration measuring device; FDC = flow duration curve; base flow = groundwater contribution.',
        'Short-note questions require compact definitions, key uses, and one sketch-worthy identifying feature.',
        'Write each note under its own heading and include one diagram keyword or practical use for better scoring.'
      )}
    `
  }
];

questionsDB.push(...additionalQuestions);

export const relatedPyqMap = {
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

export const modulesData = [
  { id: 1, name: 'Introduction', weight: '5%', desc: 'Hydrologic cycle schematic, System representation, Global Water Budget.' },
  { id: 2, name: 'Weather and Precipitation', weight: '20%', desc: 'Humidity, cooling, condensation, rain gauges, adequacy, adjustment of missing data, Isohyetal & Thiessen methods.' },
  { id: 3, name: 'Infiltration', weight: '15%', desc: 'Factors, Infiltration capacity, Horton\'s curve, Infiltration Indices (phi/W).' },
  { id: 4, name: 'Evapotranspiration', weight: '10%', desc: 'Meyer\'s equation, Water budget method, Energy budget method, Blaney-Criddle, Lysimeter.' },
  { id: 5, name: 'Runoff', weight: '10%', desc: 'Empirical formulae, Infiltration method, Hydrograph analysis, Rational method.' },
  { id: 6, name: 'Hydrograph', weight: '20%', desc: 'Base flow separation, UH derivation/assumptions, S-curve, Synthetic UH, Instantaneous UH.' },
  { id: 7, name: 'Estimation of Flood', weight: '10%', desc: 'Rational method, Flood frequency analysis (Gumbel\'s method, Log-Pearson III).' },
  { id: 8, name: 'Flood Routing', weight: '10%', desc: 'Modified Pul\'s reservoir routing, Muskingum channel routing, St. Venant equations.' },
];
