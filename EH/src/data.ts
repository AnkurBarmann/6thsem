// Engineering Hydrology (CE-301) Previous Year Questions Database
export interface Question {
  id: string;
  module: number;
  year: number;
  marks: number;
  diff: 'Easy' | 'Medium' | 'Hard';
  qtype: 'MCQ' | 'Theory' | 'Numerical';
  importance: 'High' | 'Medium' | 'Low';
  repeated: boolean;
  probable: boolean;
  concept: string;
  formula: string;
  qnum: string;
  question: string;
  answer: string;
}

export const questionsDB: Question[] = [
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
        📌 <b>Summary:</b> For the ungauged $560\\text{ km}^2$ catchment, Snyder's method yields a 3-hr Synthetic UH with lag $8.94\\text{ hr}$, peak discharge $121.9\\text{ m}^3/\\text{s}$, and base time $52.2\\text{ hours}$.
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

export const relatedPyqMap: { [key: string]: string[] } = {
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
