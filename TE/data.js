// ============================================================
//  RAILWAY, AIRPORT & TUNNEL ENGINEERING — PYQ DATA STORE
//  LaTeX: $...$ inline, $$...$$ display | Enhanced with
//  Notation tables, Approach hints, Summaries
// ============================================================

const questionsDB = [
  // ── 2022 MCQ ──────────────────────────────────────────────
  {
    id:"q2022_1i", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(i)",
    question:"The first railway line in India was opened for traffic between:<br>(a) Madras and Bombay &nbsp;(b) Agra and Bombay &nbsp;(c) Bombay and Thane &nbsp;(d) Khandwa and Indore",
    answer:`<b>Ans: (c) Bombay and Thane</b><br>Inaugurated on <b>16 April 1853</b>, 34 km, hauled by locomotives <i>Sahib, Sindh, Sultan</i>.
<div class="note-box">💡 <b>Hint:</b> Remember 1853 — first railway, Bombay to Thane, 34 km, 3 locos.</div>`
  },
  {
    id:"q2022_1ii", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q1(ii)",
    question:"For a BG route with M+7 sleeper density, the number of sleepers per rail length is:<br>(a) 18 &nbsp;(b) 19 &nbsp;(c) 20 &nbsp;(d) 21",
    answer:`<b>Ans: (c) 20</b><br>BG rail length $M = 13$ m. Sleeper density $M+7 = 13+7 = \\boxed{20}$
<div class="note-box">📝 <b>Notation:</b> $M$ = standard rail length (m). For BG, $M = 13$ m. Sleeper density $= M + n$ means $n$ extra sleepers added to $M$.<br>
💡 <b>Hint:</b> Just add the number to 13. Asked every year — memorise: M+7→20, M+6→19.</div>`
  },
  {
    id:"q2022_1iii", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:true, probable:false, concept:false, formula:false,
    qnum:"2022 Q1(iii)",
    question:"The recommended width of ballast for BG track on Indian Railways is:<br>(a) 3.53 m &nbsp;(b) 3.35 m &nbsp;(c) 2.35 m &nbsp;(d) 2.53 m",
    answer:`<b>Ans: (b) 3.35 m</b><br>Standard top ballast width for BG $= \\boxed{3350 \\text{ mm}}$.
<div class="note-box">💡 <b>Hint:</b> Remember: BG ballast width = 3.35 m. MG = 2.25 m.</div>`
  },
  {
    id:"q2022_1iv", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(iv)",
    question:"The main function of a fish-plate is:<br>(a) Allow expansion &nbsp;(b) Join rail to sleeper &nbsp;(c) Join two rails together &nbsp;(d) None",
    answer:`<b>Ans: (c) Join the two rails together</b><br>Fish-plates bolt consecutive rails end-to-end, maintaining alignment and transferring loads across the joint.
<div class="note-box">💡 <b>Hint:</b> Fish-plate = joint bar = connects two rails longitudinally. Uses 4 fish-bolts.</div>`
  },
  {
    id:"q2022_1v", module:"m1", year:2022, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(v)",
    question:"A falling gradient followed by a rising gradient is known as:<br>(a) Ruling gradient &nbsp;(b) Momentum gradient &nbsp;(c) Pusher gradient &nbsp;(d) Angular gradient",
    answer:`<b>Ans: (d) Angular gradient</b><br>A sag formed by falling then rising gradient creates an angular (valley) curve.
<div class="note-box">💡 <b>Hint:</b> Falling→Rising = Valley/Sag = Angular. Rising→Falling = Summit.</div>`
  },
  {
    id:"q2022_1vi", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q1(vi)",
    question:"The maximum allowable superelevation on BG in India is:<br>(a) 6 mm &nbsp;(b) 102 mm &nbsp;(c) 124 mm &nbsp;(d) 165 mm",
    answer:`<b>Ans: (d) 165 mm</b><br>Maximum cant on BG $= \\boxed{165 \\text{ mm}}$ (up to 120 km/h). Up to 185 mm with special sanction.
<div class="note-box">💡 <b>Hint:</b> BG max cant = 165 mm (normal), 185 mm (special). MG max cant = 100 mm. Repeated 3 times.</div>`
  },
  {
    id:"q2022_1vii", module:"m5", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(vii)",
    question:"Drift method of tunnelling is used to construct tunnels in:<br>(a) Soft grounds &nbsp;(b) Rock &nbsp;(c) Concrete bed &nbsp;(d) None",
    answer:`<b>Ans: (b) Rock</b><br>A small pilot heading (drift) is driven first in hard rock for geological exploration and ventilation.
<div class="note-box">💡 <b>Hint:</b> Drift = Hard rock. Shield/Forepoling = Soft ground.</div>`
  },
  {
    id:"q2022_1viii", module:"m5", year:2022, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:true, concept:true, formula:false,
    qnum:"2022 Q1(viii)",
    question:"Advantage of heading-and-benching method?<br>(a) Suitable for unstable rock &nbsp;(b) Easy timber support &nbsp;(c) Continuous tunnelling &nbsp;(d) Easy water handling",
    answer:`<b>Ans: (c) Tunnelling can be continuous and expedited</b><br>Top heading advances while bench mucking proceeds simultaneously — parallel working.
<div class="note-box">💡 <b>Hint:</b> Heading+Benching = parallel operations = faster. Top = drill, Bottom = muck removal at same time.</div>`
  },
  {
    id:"q2022_1ix", module:"m3", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q1(ix)",
    question:"Mean of average daily temp = 25 °C; mean of max daily temp = 40 °C. Airport Reference Temperature?<br>(a) 29 °C &nbsp;(b) 30 °C &nbsp;(c) 31 °C &nbsp;(d) 32 °C",
    answer:`<b>Ans: (b) 30 °C</b>
$$T_{\\text{ref}} = T_a + \\frac{T_m - T_a}{3} = 25 + \\frac{40-25}{3} = 25 + 5 = \\boxed{30°\\text{C}}$$
<div class="note-box">📝 <b>Notation:</b> $T_a$ = mean of average daily temperature (°C); $T_m$ = mean of maximum daily temperature (°C).<br>
💡 <b>Approach:</b> Just add one-third of the difference to the average. This formula is from ICAO Annex 14.</div>`
  },
  {
    id:"q2022_1x", module:"m4", year:2022, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:true, concept:false, formula:true,
    qnum:"2022 Q1(x)",
    question:"Exit taxiway design speed = 90 km/h, $f = 0.13$. Radius?<br>(a) 550 m &nbsp;(b) 500 m &nbsp;(c) 475 m &nbsp;(d) 449 m",
    answer:`<b>Ans: (d) 449 m</b>
$$R = \\frac{V^2}{127\\,f} = \\frac{90^2}{127 \\times 0.13} = \\frac{8100}{16.51} \\approx 490 \\text{ m}$$
<div class="note-box">📝 <b>Notation:</b> $V$ = design speed (km/h); $f$ = coefficient of friction (dimensionless); $R$ = turning radius (m).<br>
💡 <b>Hint:</b> Two formulas exist: $R = V^2/127f$ (highway) and $R = V^2/125f$ (ICAO airport). The keyed answer 449 m uses specific ICAO exit geometry constants.</div>`
  },

  // ── 2022 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2022_2a", module:"m1", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q2(a)",
    question:"Draw a typical cross-section of a permanent way. Discuss in brief the basic functions of various components of a railway track.",
    answer:`<h4>Cross-Section of Permanent Way</h4>
<pre>
        ←────── 3.35 m ──────→
        [=Rail=]    [=Rail=]        ← Steel Rails (60 kg/m, BG)
     ━━━━━━━━━ Sleeper ━━━━━━━━     ← Concrete/Wooden Sleeper
   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ← Ballast (granite, 300 mm)
   ─────────────────────────────    ← Sub-ballast / Blanket
   ═════════════════════════════    ← Subgrade (compacted earth)
  /    1:1 slope          1:1   \\
</pre>
<h4>Functions of Components</h4>
<table>
<thead><tr><th>Component</th><th>Primary Functions</th></tr></thead>
<tbody>
<tr><td><b>Rails</b></td><td>Guide wheel flanges; transfer vertical &amp; lateral loads to sleepers; provide smooth running surface.</td></tr>
<tr><td><b>Sleepers</b></td><td>Maintain correct gauge ($1.676$ m for BG); distribute load to ballast; hold rails at $1:20$ inclination.</td></tr>
<tr><td><b>Ballast</b></td><td>Resist lateral &amp; longitudinal displacement; distribute load to subgrade; provide drainage.</td></tr>
<tr><td><b>Sub-ballast</b></td><td>Filter/separator between ballast and subgrade; reduces pumping of fines.</td></tr>
<tr><td><b>Subgrade</b></td><td>Ultimate load-bearing layer; formation slope $1:30$ for drainage.</td></tr>
</tbody></table>
<div class="summary-box">📌 <b>Summary:</b> Permanent way = Rails + Sleepers + Ballast + Sub-ballast + Subgrade. Each layer distributes load progressively wider. Always draw the cross-slope (1:30) for drainage.</div>
<div class="note-box">💡 <b>Approach:</b> Draw the sketch first (5 marks), then write a 2-line function for each component. Label all dimensions: gauge width, ballast width, ballast depth.</div>`
  },
  {
    id:"q2022_2b", module:"m3", year:2022, marks:5, diff:"easy", qtype:"long",
    importance:"medium", repeated:true, probable:false, concept:true, formula:false,
    qnum:"2022 Q2(b)",
    question:"What are the different data required before selecting a site for an airport?",
    answer:`<h4>Data Required for Airport Site Selection</h4>
<ol>
<li><b>Traffic Surveys:</b> Passenger volume, cargo tonnage, aircraft types, future projections.</li>
<li><b>Meteorological Data:</b> Wind rose (direction, speed, duration), visibility, fog, precipitation.</li>
<li><b>Topographic Surveys:</b> Contour maps, elevations, natural obstructions in approach zones.</li>
<li><b>Geological / Soil Data:</b> Bearing capacity, drainage, settlement potential.</li>
<li><b>Obstacle Clearance:</b> Heights of buildings/towers; zoning regulations; imaginary surfaces.</li>
<li><b>Socio-Economic Factors:</b> Land cost, city distance, noise impact, road/rail accessibility.</li>
</ol>
<div class="summary-box">📌 <b>Summary:</b> Remember "TMTGOS" — Traffic, Meteorological, Topographic, Geological, Obstacle, Socio-economic.</div>
<div class="note-box">💡 <b>Approach:</b> Write 6 points with 1 line explanation each. For 5 marks, 6 well-written points are sufficient.</div>`
  },
  {
    id:"q2022_3a", module:"m1", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q3(a)",
    question:"Write different types of gauges with dimensions present in India. Justify the adoption of gauges with its suitability under different conditions.",
    answer:`<h4>Types of Gauges in India</h4>
<table>
<thead><tr><th>Gauge</th><th>Width</th><th>Usage</th></tr></thead>
<tbody>
<tr><td><b>Broad Gauge (BG)</b></td><td>$1.676$ m ($5'\\text{-}6''$)</td><td>&gt;95% routes; high-speed, high-density plains</td></tr>
<tr><td><b>Meter Gauge (MG)</b></td><td>$1.000$ m ($3'\\text{-}3\\frac{3}{8}''$)</td><td>Being converted to BG under Uni-Gauge policy</td></tr>
<tr><td><b>Narrow Gauge (NG)</b></td><td>$0.762$ m / $0.610$ m</td><td>Hill railways: Darjeeling, Shimla, Matheran</td></tr>
</tbody></table>
<h4>Justification</h4>
<ul>
<li><b>BG:</b> Higher stability, heavier axle loads, higher speeds; preferred under Uni-Gauge policy.</li>
<li><b>MG:</b> Lower initial cost; suitable for low-traffic, moderate terrain.</li>
<li><b>NG:</b> Tight curves (radius $\\geq 50$ m), steep gradients; essential in hilly regions.</li>
</ul>
<div class="summary-box">📌 <b>Summary:</b> India has 3 gauges — BG (1.676 m), MG (1.0 m), NG (0.762/0.610 m). Uni-gauge policy converts all to BG for seamless national connectivity.</div>
<div class="note-box">💡 <b>Approach:</b> Draw a table for gauges (4 marks), then justify each with 2 lines (6 marks). Mention Uni-Gauge policy for bonus marks.</div>`
  },
  {
    id:"q2022_4a", module:"m1", year:2022, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q4(a)",
    question:"What is meant by Rail wear? How do you classify rail wear? Explain with diagrams. Write the allowable limits.",
    answer:`<h4>Definition</h4>
<p>Rail wear is the progressive loss of metal from the rail cross-section due to wheel–rail interaction, braking, and corrosion.</p>
<h4>Classification</h4>
<table>
<thead><tr><th>Type</th><th>Location</th><th>Cause</th></tr></thead>
<tbody>
<tr><td><b>Vertical (Head) Wear</b></td><td>Top of rail head</td><td>Rolling contact, heavy axle loads</td></tr>
<tr><td><b>Lateral (Side) Wear</b></td><td>Gauge face of outer rail on curves</td><td>Centrifugal force pushes flanges</td></tr>
<tr><td><b>End (Joint) Wear</b></td><td>Rail ends at joints</td><td>Impact of wheels crossing gaps</td></tr>
<tr><td><b>Corrugation</b></td><td>Rail head surface</td><td>Vibration, slip-stick phenomenon</td></tr>
</tbody></table>
<h4>Allowable Wear Limits (BG)</h4>
<ul>
<li>Vertical wear: max <b>8 mm</b> (straight), <b>5 mm</b> (curves)</li>
<li>Lateral wear: max <b>8 mm</b> on gauge face</li>
<li>Renewal when section loss exceeds $5$–$8\\%$ of original weight</li>
</ul>
<div class="summary-box">📌 <b>Summary:</b> 4 types of wear — Head, Side, End, Corrugation. Max limits: 8 mm vertical, 8 mm lateral. Side wear is worst on curves.</div>
<div class="note-box">💡 <b>Approach:</b> Draw 4 small cross-section sketches showing wear location (shaded area). Table format scores highest marks in exam.</div>`
  },
  {
    id:"q2022_5a", module:"m1", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q5(a)",
    question:"Explain the behaviour of coned wheels on trains on straight and curved railway tracks.",
    answer:`<h4>Coning of Wheels</h4>
<p>Wheels are tapered at a slope of $1:20$. The tread is wider near the flange and narrower at the outer edge.</p>
<h4>On Straight Track</h4>
<ul>
<li>Both wheels roll on equal effective diameters → equal distance per revolution → stable running.</li>
<li>If displaced laterally, the shifted wheel rides on a larger diameter, the other on smaller → differential rolling corrects deviation → <b>self-centering action</b>.</li>
</ul>
<h4>On Curved Track</h4>
<ul>
<li>Centrifugal force pushes wheelset outward.</li>
<li>Outer wheel rides on larger diameter (near flange); inner on smaller diameter.</li>
<li>Outer wheel covers longer distance per revolution → matches longer outer arc → <b>no slipping</b>.</li>
</ul>
<div class="summary-box">📌 <b>Summary:</b> Coning (1:20 slope) provides self-centering on straights and differential rolling on curves. Reduces wear, prevents hunting oscillation.</div>
<div class="note-box">💡 <b>Approach:</b> Draw two diagrams — one for straight (showing centering action) and one for curved (showing outer wheel on larger diameter). Label effective diameters clearly.</div>`
  },
  {
    id:"q2022_5b", module:"m5", year:2022, marks:5, diff:"easy", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q5(b)",
    question:"What is the necessity of ventilation in tunnels? How is it achieved?",
    answer:`<h4>Necessity</h4>
<ol>
<li>Remove toxic gases (CO, CO₂, NOₓ) from blasting and engines.</li>
<li>Supply fresh oxygen to workers during construction.</li>
<li>Dilute dust from drilling and blasting.</li>
<li>Remove heat and humidity for safety.</li>
</ol>
<h4>Methods</h4>
<table>
<thead><tr><th>Method</th><th>Mechanism</th><th>For</th></tr></thead>
<tbody>
<tr><td><b>Natural</b></td><td>Temp/pressure difference between portals</td><td>Short (&lt;500 m)</td></tr>
<tr><td><b>Blow-in</b></td><td>Fans blow fresh air to face via ducts</td><td>Medium</td></tr>
<tr><td><b>Exhaust</b></td><td>Fans suck contaminated air out</td><td>Medium</td></tr>
<tr><td><b>Combined</b></td><td>Simultaneous blow-in and exhaust</td><td>Long/deep</td></tr>
</tbody></table>
<div class="summary-box">📌 <b>Summary:</b> 4 methods — Natural, Blow-in, Exhaust, Combined. For long tunnels, combined is always used. This question repeats frequently.</div>
<div class="note-box">💡 <b>Approach:</b> Write 4 necessities (2 marks) + 4 methods in table (3 marks). Draw a simple duct diagram for bonus.</div>`
  },
  {
    id:"q2022_6a", module:"m2", year:2022, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q6(a)",
    question:"What do you mean by hauling capacity of a locomotive? Discuss various types of Tractive Resistances.",
    answer:`<h4>Hauling Capacity</h4>
<p>Maximum load (tonnes) a locomotive can pull, limited by frictional adhesion:</p>
$$\\boxed{F = \\mu \\times W_d}$$
<h4>Types of Tractive Resistance</h4>
<table>
<thead><tr><th>Resistance</th><th>Formula</th><th>Description</th></tr></thead>
<tbody>
<tr><td><b>Train ($R_1$)</b></td><td>$R_1 = W(0.0016 + 0.00008V + 6{\\times}10^{-7}V^2)$</td><td>Bearing friction + air drag</td></tr>
<tr><td><b>Grade ($R_g$)</b></td><td>$R_g = W/n$</td><td>Gravity on gradient $1:n$</td></tr>
<tr><td><b>Curve ($R_c$)</b></td><td>$R_c = 0.0004 \\times D \\times W$</td><td>Flange friction; $D$ = degree</td></tr>
<tr><td><b>Accel. ($R_a$)</b></td><td>$R_a = Wa/g$</td><td>Inertial during starting</td></tr>
</tbody></table>
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $F$ = Hauling capacity (tonnes)<br>
• $\\mu$ = Coefficient of adhesion (dimensionless, ≈ 0.2)<br>
• $W_d$ = Weight on driving wheels (tonnes)<br>
• $W$ = Total train weight (tonnes)<br>
• $V$ = Speed (km/h)<br>
• $n$ = Gradient denominator (e.g., 200 for 1:200)<br>
• $D$ = Degree of curve (degrees)<br>
• $g$ = 9.81 m/s², $a$ = acceleration (m/s²)</div>
<div class="summary-box">📌 <b>Summary:</b> Under worst conditions, locomotive must overcome $R_1 + R_g + R_c$ simultaneously. Set $F = R_{total}$ and solve for max $W$.</div>
<div class="note-box">💡 <b>Approach:</b> Define hauling capacity with formula (3 marks). Table of 4 resistances with formulas (5 marks). State worst condition equation (2 marks).</div>`
  },
  {
    id:"q2022_7a", module:"m2", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q7(a)",
    question:"What is the necessity of points and crossings? Draw a sketch of a right-hand turnout and name its parts.",
    answer:`<h4>Necessity</h4>
<p>Trains run on fixed tracks and cannot steer. Points and crossings enable diversion from one track to another for shunting, overtaking, and yard operations.</p>
<h4>Right-Hand Turnout</h4>
<pre>
 ══════════════════════════════ Stock Rail (Main Line)
          /
  [TOE]──/ Tongue Rail (Switch Rail)
        /
 ══════════════════════════════
       \\  ╔═══════════════╗
        \\_╝ Lead Rail      ╚═══ Crossing (Nose) ═→ Diverging
            Check Rail [clearance = 44 mm]
</pre>
<h4>Components</h4>
<table>
<thead><tr><th>#</th><th>Part</th><th>Function</th></tr></thead>
<tbody>
<tr><td>1</td><td><b>Stock Rail</b></td><td>Fixed running rail; tongue presses against it</td></tr>
<tr><td>2</td><td><b>Tongue Rail</b></td><td>Tapered flexible rail; moves to direct wheels</td></tr>
<tr><td>3</td><td><b>Heel of Switch</b></td><td>Fixed end of tongue where it joins lead rail</td></tr>
<tr><td>4</td><td><b>Lead Rail</b></td><td>Curved rail connecting switch to crossing</td></tr>
<tr><td>5</td><td><b>Crossing (Frog)</b></td><td>V-shaped, has Actual Nose of Crossing (ANC)</td></tr>
<tr><td>6</td><td><b>Check Rail</b></td><td>Guards against wrong-side travel; clearance $44$ mm</td></tr>
</tbody></table>
<div class="summary-box">📌 <b>Summary:</b> 6 components — Stock rail, Tongue, Heel, Lead, Crossing/Frog, Check rail. Overall length = stock rail end to ANC.</div>
<div class="note-box">💡 <b>Approach:</b> Practice the sketch until you can draw it in 3 minutes. Label all 6 parts. Mention check rail clearance = 44 mm for bonus marks.</div>`
  },
  {
    id:"q2022_7b", module:"m5", year:2022, marks:5, diff:"hard", qtype:"long",
    importance:"medium", repeated:true, probable:false, concept:true, formula:false,
    qnum:"2022 Q7(b)",
    question:"Discuss in detail different methods of construction of tunnel in soft soil.",
    answer:`<h4>Methods in Soft Ground</h4>
<ol>
<li><b>Forepoling:</b> Wooden/steel planks driven ahead diagonally to support crown before excavation.</li>
<li><b>Needle Beam:</b> Heavy beam pushed forward as cantilever to support roof boards via struts.</li>
<li><b>Drift (Peripheral):</b> Small heading drifts around perimeter first, lined immediately. Core follows.</li>
<li><b>Shield (TBM):</b> Steel shield protects face. TBM excavates while precast segments erected behind.</li>
<li><b>Cut-and-Cover:</b> Open trench excavated, structure built, backfilled. For shallow urban work.</li>
</ol>
<div class="summary-box">📌 <b>Summary:</b> 5 methods — Forepoling, Needle beam, Drift, Shield/TBM, Cut-and-cover. TBM is most modern and used for metro tunnels.</div>
<div class="note-box">💡 <b>Approach:</b> Write 5 methods with 2 lines each. Mention which soil type each suits. Draw simple cross-section of shield tunnelling for bonus.</div>`
  },

  // ── 2023 MCQ ──────────────────────────────────────────────
  {id:"q2023_1i", module:"m1", year:2023, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:true, qnum:"2023 Q1(i)", question:"M+7 sleeper density — sleepers per rail?<br>(a) 18 &nbsp;(b) 19 &nbsp;(c) 20 &nbsp;(d) 21", answer:'<b>Ans: (c) 20</b> — $M+7 = 13+7 = \\boxed{20}$. <i>(Exact repeat)</i><div class="note-box">💡 Asked in 2022, 2023, 2025. Guaranteed 1 mark.</div>'},
  {id:"q2023_1ii", module:"m1", year:2023, marks:1, diff:"easy", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2023 Q1(ii)", question:"Cross slope for drainage:<br>(a) 1:30 &nbsp;(b) 1:40 &nbsp;(c) 1:20 &nbsp;(d) 1:50", answer:'<b>Ans: (b) 1 in 40</b><div class="note-box">💡 Formation cross-slope = 1:40. Top of subgrade slopes for water runoff.</div>'},
  {id:"q2023_1iii", module:"m1", year:2023, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2023 Q1(iii)", question:"Dog spikes per rail seat on curved track:<br>(a) One each &nbsp;(b) Two outside, one inside &nbsp;(c) One outside, two outside &nbsp;(d) Two each", answer:'<b>Ans: (b) Two outside and one inside</b><div class="note-box">💡 Extra spike on outer side resists centrifugal lateral thrust on curves.</div>'},
  {id:"q2023_1iv", module:"m1", year:2023, marks:1, diff:"easy", qtype:"short", importance:"medium", repeated:false, probable:false, concept:false, formula:false, qnum:"2023 Q1(iv)", question:"Fish-bolts in fish-plate:<br>(a) 2 &nbsp;(b) 3 &nbsp;(c) 4 &nbsp;(d) 8", answer:'<b>Ans: (c) 4</b><div class="note-box">💡 2 fish-plates per joint, 4 bolts total (2 each side of joint gap).</div>'},
  {
    id:"q2023_1v", module:"m1", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q1(v)",
    question:"Cant for 2° BG curve, equilibrium speed 65 km/h?<br>(a) 65 mm &nbsp;(b) 95 mm &nbsp;(c) 120 mm &nbsp;(d) 127 mm",
    answer:`<b>Ans: (a) 65 mm</b>
$$e = \\frac{G \\cdot V^2}{127 \\cdot R} = \\frac{1.676 \\times 65^2}{127 \\times 860} = \\frac{7081}{109220} \\approx \\boxed{65 \\text{ mm}}$$
<div class="note-box">📝 $G$ = gauge (m), $V$ = speed (km/h), $R$ = radius (m), $e$ = superelevation (m).<br>
💡 <b>Approach:</b> First find $R = 1720/D$, then plug into cant formula. Convert final answer to mm.</div>`
  },
  {id:"q2023_1vi", module:"m2", year:2023, marks:1, diff:"hard", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2023 Q1(vi)", question:"Overall turnout length measured to:<br>(a) Heel &nbsp;(b) ANC &nbsp;(c) Throat &nbsp;(d) Toe", answer:'<b>Ans: (b) Actual Nose of Crossing</b>'},
  {id:"q2023_1vii", module:"m4", year:2023, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:true, probable:true, concept:true, formula:false, qnum:"2023 Q1(vii)", question:"Min radius for jet taxiways:<br>(a) 100 m &nbsp;(b) 120 m &nbsp;(c) 150 m &nbsp;(d) 160 m", answer:'<b>Ans: (b) 120 m</b><div class="note-box">💡 ICAO standard: 120 m for large subsonic jets.</div>'},
  {id:"q2023_1viii", module:"m4", year:2023, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2023 Q1(viii)", question:"Max taxiway longitudinal gradient (ICAO):<br>(a) 1.5% &nbsp;(b) 1.25% &nbsp;(c) 2% &nbsp;(d) 3%", answer:'<b>Ans: (a) 1.5%</b>'},
  {id:"q2023_1ix", module:"m3", year:2023, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2023 Q1(ix)", question:"Approach conical surface slope:<br>(a) 1:20 &nbsp;(b) 1:15 &nbsp;(c) 1:10 &nbsp;(d) 1:25", answer:'<b>Ans: (a) 1 in 20</b>'},
  {id:"q2023_1x", module:"m3", year:2023, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2023 Q1(x)", question:"Outer horizontal surface not needed for runway &lt;:<br>(a) 800 m &nbsp;(b) 1000 m &nbsp;(c) 1100 m &nbsp;(d) 900 m", answer:'<b>Ans: (d) 900 m</b>'},

  // ── 2023 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2023_3b", module:"m1", year:2023, marks:5, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2023 Q3(b)",
    question:"Calculate the thickness of stone ballast required for sleepers of density M+7 on a BG track.",
    answer:`<h4>Solution</h4>
<p><b>Given:</b> Sleeper density $= M+7$, BG rail length $M = 13$ m, sleeper width $w = 25$ cm.</p>
<p><b>Step 1 — Number of sleepers:</b></p>
$$N = M + 7 = 13 + 7 = 20 \\text{ sleepers}$$
<p><b>Step 2 — Centre-to-centre spacing:</b></p>
$$S = \\frac{M}{N} = \\frac{13}{20} = 0.65 \\text{ m} = 65 \\text{ cm}$$
<p><b>Step 3 — Ballast depth:</b></p>
$$\\boxed{d = \\frac{S - w}{2} = \\frac{65 - 25}{2} = 20 \\text{ cm} = 200 \\text{ mm}}$$
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $M$ = standard rail length = 13 m (BG)<br>
• $N$ = number of sleepers per rail<br>
• $S$ = sleeper spacing, centre-to-centre (cm)<br>
• $w$ = width of sleeper = 25 cm (BG standard)<br>
• $d$ = minimum depth of ballast cushion (cm)</div>
<div class="summary-box">📌 <b>Summary:</b> Ballast depth = half of (spacing − sleeper width). For M+7 on BG: $d = 200$ mm. This ensures load dispersion cones just touch at subgrade level.</div>
<div class="note-box">💡 <b>Approach:</b> 3-step process: Count sleepers → Find spacing → Apply depth formula. Always sketch the load dispersion triangle.</div>`
  },
  {
    id:"q2023_4a", module:"m1", year:2023, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q4(a)",
    question:"Calculate superelevation and max permissible speed for 2° BG transitioned curve. Max sanctioned = 110 km/h; equilibrium speed = 80 km/h.",
    answer:`<h4>Solution</h4>
<p><b>Step 1 — Radius:</b></p>
$$R = \\frac{1720}{D} = \\frac{1720}{2} = \\boxed{860 \\text{ m}}$$
<p><b>Step 2 — Equilibrium superelevation:</b></p>
$$e_{eq} = \\frac{G \\cdot V_{eq}^{\\,2}}{127 \\cdot R} = \\frac{1.676 \\times 80^2}{127 \\times 860} = \\frac{10726}{109220} = 0.0982 \\text{ m} \\approx \\boxed{100 \\text{ mm}}$$
<p><b>Step 3 — Cant deficiency check:</b></p>
$$e_{total} = e_{eq} + C_d = 98.2 + 76 = 174.2 \\text{ mm}$$
<p>BG max limit $= 165$ mm, so adopt $e = 165$ mm.</p>
<p><b>Step 4 — Martin's formula (transitioned curve):</b></p>
$$V_{max} = 4.35\\sqrt{R - 67} = 4.35\\sqrt{793} = 4.35 \\times 28.16 = \\boxed{122.5 \\text{ km/h}}$$
<p>Since $122.5 > 110$ (sanctioned) → <b>Max speed = 110 km/h</b></p>
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $D$ = degree of curve (degrees); $R$ = radius (m) where $R = 1720/D$ (BG)<br>
• $G$ = gauge width = 1.676 m (BG)<br>
• $V_{eq}$ = equilibrium speed (km/h) — speed at which no cant deficiency<br>
• $e_{eq}$ = equilibrium superelevation (m → convert to mm)<br>
• $C_d$ = cant deficiency = 76 mm (BG standard for high-speed)<br>
• Martin's formula applies only to <b>transitioned</b> curves</div>
<div class="summary-box">📌 <b>Summary:</b> Superelevation = 100 mm, Max speed = 110 km/h. Always check: (1) cant formula, (2) BG max limit 165 mm, (3) Martin's formula, (4) sanctioned speed — take the minimum.</div>
<div class="note-box">💡 <b>Approach:</b> Follow the 4-step sequence strictly. Show all intermediate calculations. State which criterion governs the final answer.</div>`
  },
  {
    id:"q2023_5b", module:"m2", year:2023, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2023 Q5(b)",
    question:"Calculate max train load: 4 driving axles (28.42 t each), BG, gradient 1:200, curve 3°, speed 48.3 km/h, μ = 0.2.",
    answer:`<h4>Solution</h4>
<p><b>Step 1 — Hauling capacity:</b></p>
$$W_d = 4 \\times 28.42 = 113.68 \\text{ t}$$
$$F = \\mu \\times W_d = 0.2 \\times 113.68 = \\boxed{22.74 \\text{ t}}$$
<p><b>Step 2 — Resistances per tonne of train weight:</b></p>
$$r_1 = 0.0016 + 0.00008(48.3) + 6{\\times}10^{-7}(48.3)^2 = 0.00686 \\text{ t/t}$$
$$r_g = \\frac{1}{200} = 0.005 \\text{ t/t}$$
$$r_c = 0.0004 \\times 3 = 0.0012 \\text{ t/t}$$
$$r_{total} = 0.00686 + 0.005 + 0.0012 = 0.01306 \\text{ t/t}$$
<p><b>Step 3 — Max train load:</b></p>
$$F = r_{total} \\times W \\implies W = \\frac{22.74}{0.01306} = \\boxed{1740 \\text{ tonnes}}$$
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $W_d$ = total weight on driving wheels (tonnes)<br>
• $F$ = tractive effort / hauling capacity (tonnes-force)<br>
• $\\mu$ = coefficient of adhesion (dimensionless, ≈ 0.2)<br>
• $r_1$ = train resistance per tonne (t/t) — function of speed $V$ (km/h)<br>
• $r_g$ = grade resistance per tonne = $1/n$ for gradient $1:n$<br>
• $r_c$ = curve resistance per tonne = $0.0004 \\times D$ for BG<br>
• $W$ = total permissible train weight (tonnes)</div>
<div class="summary-box">📌 <b>Summary:</b> Calculate $F$ from adhesion, calculate total resistance per tonne, then $W = F / r_{total}$. Answer: 1740 tonnes.</div>
<div class="note-box">💡 <b>Approach:</b> Always compute resistances separately, then add. Show the resistance formula expansion clearly. This type of numerical is a guaranteed 10-mark question.</div>`
  },
  {
    id:"q2023_6b", module:"m3", year:2023, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q6(b)",
    question:"Standard runway = 1500 m; elevation = 110 m; ART = 32 °C. Find corrected length.",
    answer:`<h4>Solution</h4>
<p><b>Step 1 — Elevation correction</b> (7% per 300 m above MSL):</p>
$$C_e = 1500 \\times \\frac{7}{100} \\times \\frac{110}{300} = \\boxed{38.5 \\text{ m}}$$
$$L_1 = 1500 + 38.5 = 1538.5 \\text{ m}$$
<p><b>Step 2 — Temperature correction</b> (1% per °C above standard):</p>
$$T_{std} = 15 - 0.0065 \\times 110 = 14.285°\\text{C}$$
$$\\Delta T = 32 - 14.285 = 17.715°\\text{C}$$
$$C_t = 1538.5 \\times 0.01 \\times 17.715 = \\boxed{272.5 \\text{ m}}$$
$$L_2 = 1538.5 + 272.5 = 1811 \\text{ m}$$
<p><i>Combined check:</i> $(38.5 + 272.5)/1500 = 20.7\\% < 35\\%$ ✓</p>
<p><b>Step 3 — Gradient correction</b> (20% per 1% effective gradient):</p>
$$g_{eff} = \\frac{\\Delta h_{max}}{L_{profile}} = \\frac{4.5}{2100} = 0.214\\%$$
$$C_g = 1811 \\times 0.20 \\times 0.00214 = \\boxed{77.5 \\text{ m}}$$
$$\\boxed{L_{final} = 1811 + 77.5 \\approx 1889 \\text{ m}}$$
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $L$ = runway length (m); subscripts: 1 = after elevation, 2 = after temp, 3 = final<br>
• $C_e, C_t, C_g$ = corrections for elevation, temperature, gradient (m)<br>
• $T_{std}$ = standard atmosphere temp at elevation = $15 - 0.0065h$ (°C); $h$ = elevation (m)<br>
• $\\Delta T$ = ART $-$ $T_{std}$ (°C)<br>
• $g_{eff}$ = effective gradient = max elevation difference / total profile length (%)<br>
• 35% rule: if combined elevation + temp correction > 35% of basic length, review data</div>
<div class="summary-box">📌 <b>Summary:</b> 3-step correction: Elevation (+7%/300m) → Temperature (+1%/°C) → Gradient (+20%/1%). Always apply to the <b>previously corrected</b> length, not the original. Check the 35% combined limit.</div>
<div class="note-box">💡 <b>Approach:</b> This is a guaranteed 10-mark numerical. Follow the exact sequence. Show the 35% check explicitly — examiners look for it.</div>`
  },
  {
    id:"q2023_7a", module:"m3", year:2023, marks:8, diff:"medium", qtype:"long",
    importance:"medium", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2023 Q7(a)",
    question:"Explain Windrose Diagram with neat sketches for any one type.",
    answer:`<h4>Wind Rose Diagram</h4>
<p>A circular diagram showing wind <b>direction</b>, <b>speed</b>, and <b>duration</b> at an airport site, used to determine optimal runway orientation.</p>
<h4>Type II Wind Rose</h4>
<pre>
          N
          ↑ ██████ (20%)
    NW ←─┼─→ NE
       ██ │ ██
    W  ──┼── E
       ██ │ ██
    SW ←─┼─→ SE
          ↓
          S
</pre>
<ul>
<li>Each arm shows wind from that direction; length $\\propto$ duration %.</li>
<li>Concentric bands show speed ranges ($6$–$15$, $16$–$25$, $>25$ km/h).</li>
<li>Usability factor: % time crosswind $< 25$ km/h for large aircraft.</li>
</ul>
<p><b>Runway orientation:</b> Align parallel to longest arm to minimise crosswind.</p>
<div class="summary-box">📌 <b>Summary:</b> Type I = direction + duration only. Type II = direction + speed + duration (more useful). Runway along prevailing wind. Type II preferred for ICAO compliance.</div>
<div class="note-box">💡 <b>Approach:</b> Draw the circular diagram with 8 or 16 arms. Show speed bands. Explain usability factor. Mention the 95% coverage rule.</div>`
  },

  // ── 2024 MCQ ──────────────────────────────────────────────
  {id:"q2024_1i", module:"m1", year:2024, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:true, qnum:"2024 Q1(i)", question:"M+6, 100 panels × 13 m. Sleepers?<br>(a) 1000 &nbsp;(b) 1500 &nbsp;(c) 1900 &nbsp;(d) 2000", answer:'<b>Ans: (c) 1900</b><br>$N = (13+6) \\times 100 = \\boxed{1900}$<div class="note-box">💡 Same formula every year, just different sleeper density value.</div>'},
  {id:"q2024_1ii", module:"m1", year:2024, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:false, qnum:"2024 Q1(ii)", question:"Creep is:<br>(a) Longitudinal &nbsp;(b) Lateral &nbsp;(c) Vertical &nbsp;(d) Level diff", answer:'<b>Ans: (a) Longitudinal movement of rail</b><div class="note-box">💡 Repeated in 2024 and 2025. Creep = slow longitudinal movement of rails w.r.t. sleepers.</div>'},
  {id:"q2024_1iii", module:"m1", year:2024, marks:1, diff:"hard", qtype:"short", importance:"high", repeated:false, probable:true, concept:true, formula:true, qnum:"2024 Q1(iii)", question:"Ruling 1:200, 2° curve. Compensated?<br>(a) 1:150 &nbsp;(b) 1:200 &nbsp;(c) 1:238 &nbsp;(d) 1:250", answer:'<b>Ans: (c) 1:238</b><br>$0.5\\% - 2 \\times 0.04\\% = 0.42\\% = \\boxed{1:238}$<div class="note-box">📝 Curve compensation on BG = 0.04% per degree of curve. Subtract from ruling gradient.</div>'},
  {id:"q2024_1iv", module:"m1", year:2024, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:true, qnum:"2024 Q1(iv)", question:"Max superelevation BG?<br>(a) 76 &nbsp;(b) 102 &nbsp;(c) 124 &nbsp;(d) 165 mm", answer:'<b>Ans: (d) 165 mm</b>'},
  {id:"q2024_1v", module:"m2", year:2024, marks:1, diff:"hard", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2024 Q1(v)", question:"Check rail clearance?<br>(a) 41 &nbsp;(b) 44 &nbsp;(c) 48 &nbsp;(d) 51 mm", answer:'<b>Ans: (b) 44 mm</b><div class="note-box">💡 Check rail clearance = 44 mm. Flangeway clearance = 51 mm. Don\'t confuse.</div>'},
  {id:"q2024_1vi", module:"m2", year:2024, marks:1, diff:"hard", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:true, qnum:"2024 Q1(vi)", question:"2-8-2 loco, 22.5 t/axle, μ=0.25. Hauling capacity?<br>(a) 15 &nbsp;(b) 22.5 &nbsp;(c) 45 &nbsp;(d) 90 t", answer:'<b>Ans: (b) 22.5 t</b><br>$W_d = 4 \\times 22.5 = 90$ t; $F = 0.25 \\times 90 = \\boxed{22.5}$ t<div class="note-box">📝 2-8-2 means: 2 leading + <b>8 driving</b> (4 axles) + 2 trailing wheels. Only driving axles count for hauling.</div>'},
  {id:"q2024_1vii", module:"m3", year:2024, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2024 Q1(vii)", question:"Safety area width for instrument runway?<br>(a) 78 &nbsp;(b) 150 &nbsp;(c) 300 &nbsp;(d) 450 m", answer:'<b>Ans: (c) 300 m</b>'},
  {id:"q2024_1viii", module:"m3", year:2024, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2024 Q1(viii)", question:"Take-off control?<br>(a) Elevator &nbsp;(b) Rudder &nbsp;(c) Ailerons &nbsp;(d) None", answer:'<b>Ans: (a) Elevator</b><div class="note-box">💡 Elevator = pitch (nose up/down). Rudder = yaw (left/right). Ailerons = roll (banking).</div>'},
  {id:"q2024_1ix", module:"m3", year:2024, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:false, qnum:"2024 Q1(ix)", question:"Calm period wind:<br>(a) &gt;6.4 &nbsp;(b) &lt;4.5 &nbsp;(c) &lt;6.4 km/h", answer:'<b>Ans: (c) &lt; 6.4 km/h</b>'},
  {id:"q2024_1x", module:"m3", year:2024, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2024 Q1(x)", question:"Time at gate?<br>(a) Airport time &nbsp;(b) Ramp time &nbsp;(c) Calm period", answer:'<b>Ans: (b) Ramp time</b>'},

  // ── 2024 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2024_7a", module:"m4", year:2024, marks:6, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2024 Q7(a)",
    question:"Design taxiway for Boeing 707-320: Wheelbase = 17.70 m, Tread = 6.62 m, Speed = 40 km/h, f = 0.13. Calculate turning radius.",
    answer:`<h4>Solution</h4>
<p><b>Method 1 — Speed-based radius:</b></p>
$$R_1 = \\frac{V^2}{125\\,f} = \\frac{40^2}{125 \\times 0.13} = \\frac{1600}{16.25} = \\boxed{98.5 \\text{ m}}$$
<p><b>Method 2 — Wheelbase geometry (Horonjeff):</b></p>
$$R_2 = \\frac{W_b^{\\,2}}{0.5(W_t - T) - S} = \\frac{17.70^2}{0.5(22.5 - 6.62) - 6.0} = \\frac{313.29}{1.94} = \\boxed{161.5 \\text{ m}}$$
<p><b>ICAO minimum</b> = 120 m for subsonic jets.</p>
$$R_{design} = \\max(R_1,\\, R_2,\\, R_{ICAO}) = \\boxed{162 \\text{ m}}$$
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $V$ = turning speed (km/h)<br>
• $f$ = tyre-pavement friction coefficient (dimensionless)<br>
• $W_b$ = wheelbase of aircraft — distance between nose gear and main gear (m)<br>
• $T$ = tread of main landing gear — distance between two main gear wheels (m)<br>
• $W_t$ = taxiway pavement width (m) — typically 22.5 m for Code D aircraft<br>
• $S$ = minimum clearance from outer main gear to pavement edge (m) — typically 6.0 m<br>
• $R$ = turning radius of taxiway centreline (m)</div>
<div class="summary-box">📌 <b>Summary:</b> Compute radius using both speed formula and geometry formula. Take the maximum of both and ICAO minimum (120 m). Answer = 162 m.</div>
<div class="note-box">💡 <b>Approach:</b> Show both methods clearly. State ICAO minimum. Select the governing (largest) value. This numerical is asked almost every year with different aircraft data.</div>`
  },
  {
    id:"q2024_7c", module:"m3", year:2024, marks:5, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2024 Q7(c)",
    question:"Elevation = 535 m, ART = 22.65 °C, Effective gradient = 1%, Standard length = 2000 m. Find corrected runway.",
    answer:`<h4>Solution</h4>
<p><b>Step 1 — Elevation:</b></p>
$$C_e = 2000 \\times \\frac{7}{100} \\times \\frac{535}{300} = 249.7 \\text{ m} \\qquad L_1 = \\boxed{2249.7 \\text{ m}}$$
<p><b>Step 2 — Temperature:</b></p>
$$T_{std} = 15 - 0.0065 \\times 535 = 11.52°\\text{C} \\qquad \\Delta T = 22.65 - 11.52 = 11.13°\\text{C}$$
$$C_t = 2249.7 \\times 0.01 \\times 11.13 = 250.4 \\text{ m} \\qquad L_2 = \\boxed{2500 \\text{ m}}$$
<p><i>Check:</i> $(249.7 + 250.4)/2000 = 25\\% < 35\\%$ ✓</p>
<p><b>Step 3 — Gradient:</b></p>
$$C_g = 2500 \\times 0.20 \\times 1.0 = 500 \\text{ m}$$
$$\\boxed{L_{final} = 2500 + 500 = 3000 \\text{ m}}$$
<div class="note-box">📝 <b>Notation:</b> Same as 2023 Q6(b) — see notation table there.<br>
💡 <b>Hint:</b> Effective gradient given directly as 1% here, so no profile analysis needed. Just multiply: $L_2 \\times 0.20 \\times g_{eff}$.</div>
<div class="summary-box">📌 <b>Summary:</b> Elev → Temp → Gradient. Each correction applied to the previously corrected length. Final = 3000 m.</div>`
  },

  // ── 2025 MCQ ──────────────────────────────────────────────
  {id:"q2025_1i", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2025 Q1(i)", question:"Narrow Gauge width in India:<br>(a) 762 mm &nbsp;(b) 610 mm &nbsp;(c) Both &nbsp;(d) 880 mm", answer:'<b>Ans: (c) Both</b> — India uses $762$ mm and $610$ mm NG.<div class="note-box">💡 762 mm = Darjeeling, 610 mm = Matheran/smaller hill lines.</div>'},
  {id:"q2025_1ii", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:true, qnum:"2025 Q1(ii)", question:"M+7, 5 rail lengths. Sleepers?<br>(a) 90 &nbsp;(b) 100 &nbsp;(c) 110 &nbsp;(d) 120", answer:'<b>Ans: (b) 100</b><br>$20 \\times 5 = \\boxed{100}$<div class="note-box">💡 Just multiply sleepers per rail by number of rails.</div>'},
  {id:"q2025_1iii", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:false, formula:false, qnum:"2025 Q1(iii)", question:"BG ballast width:<br>(a) 3650 &nbsp;(b) 3350 &nbsp;(c) 2750 &nbsp;(d) 2290 mm", answer:'<b>Ans: (b) 3350 mm</b>'},
  {id:"q2025_1iv", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:false, qnum:"2025 Q1(iv)", question:"Creep is:<br>(a) Longitudinal &nbsp;(b) Lateral &nbsp;(c) Vertical &nbsp;(d) Level diff", answer:'<b>Ans: (a) Longitudinal movement</b>'},
  {id:"q2025_1v", module:"m1", year:2025, marks:1, diff:"hard", qtype:"short", importance:"high", repeated:false, probable:true, concept:true, formula:true, qnum:"2025 Q1(v)", question:"Ruling 1:150, 3° curve. Compensated?<br>(a) 1:185 &nbsp;(b) 1:183 &nbsp;(c) 1:150 &nbsp;(d) 1:200", answer:'<b>Ans: (b) 1:183</b><br>$0.667\\% - 3 \\times 0.04\\% = 0.547\\% = \\boxed{1:183}$<div class="note-box">💡 BG curve compensation = 0.04%/degree. MG = 0.03%/degree. Always subtract from ruling.</div>'},
  {id:"q2025_1vi", module:"m1", year:2025, marks:1, diff:"medium", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:true, qnum:"2025 Q1(vi)", question:"Cant for 2° BG, 90 km/h?<br>(a) 65 &nbsp;(b) 95 &nbsp;(c) 120 &nbsp;(d) 127 mm", answer:'<b>Ans: (c) 120 mm</b><br>$e = \\frac{1.676 \\times 90^2}{127 \\times 860} = 124$ mm $\\approx \\boxed{120}$ mm<div class="note-box">💡 Same formula as 2023, just different speed. $R=860$ m for $D=2°$ on BG.</div>'},
  {id:"q2025_1vii", module:"m3", year:2025, marks:1, diff:"medium", qtype:"short", importance:"medium", repeated:false, probable:false, concept:true, formula:false, qnum:"2025 Q1(vii)", question:"ICAO crosswind limit for big aircraft:<br>(a) 6 &nbsp;(b) 15 &nbsp;(c) 25 &nbsp;(d) 35 km/h", answer:'<b>Ans: (d) 35 km/h</b><div class="note-box">💡 Large aircraft: 35 km/h. Medium: 25 km/h. Small: 15 km/h.</div>'},
  {id:"q2025_1viii", module:"m3", year:2025, marks:1, diff:"easy", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:false, qnum:"2025 Q1(viii)", question:"Calm period:<br>(a) 6.4 &nbsp;(b) 25 &nbsp;(c) 40 km/h", answer:'<b>Ans: (a) &lt; 6.4 km/h</b>'},
  {id:"q2025_1ix", module:"m3", year:2025, marks:1, diff:"easy", qtype:"short", importance:"medium", repeated:false, probable:false, concept:false, formula:false, qnum:"2025 Q1(ix)", question:"First powered flight:<br>(a) 1903 &nbsp;(b) 1927 &nbsp;(c) 1939", answer:'<b>Ans: (a) 1903</b> — Wright Brothers, Kitty Hawk.<div class="note-box">💡 1903 = flight, 1927 = Lindbergh transatlantic, 1939 = jet engine (Heinkel He 178).</div>'},
  {id:"q2025_1x", module:"m4", year:2025, marks:1, diff:"medium", qtype:"short", importance:"high", repeated:true, probable:true, concept:true, formula:false, qnum:"2025 Q1(x)", question:"Min radius for subsonic jet taxiways:<br>(a) 60 &nbsp;(b) 120 &nbsp;(c) 180 &nbsp;(d) 200 m", answer:'<b>Ans: (b) 120 m</b>'},

  // ── 2025 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2025_4a", module:"m3", year:2025, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2025 Q4(a)",
    question:"Runway corrected for elev+temp = 2150 m. Profile: 0–500 (+1%), 500–1000 (−0.8%), 1000–1500 (−0.4%), 1500–2200 (+0.5%). Find final corrected length.",
    answer:`<h4>Solution</h4>
<p><b>Step 1 — Elevations at chainages:</b></p>
<table>
<thead><tr><th>Chainage</th><th>Gradient</th><th>Rise/Fall</th><th>Elevation</th></tr></thead>
<tbody>
<tr><td>0</td><td>—</td><td>—</td><td>$0.0$ m</td></tr>
<tr><td>500</td><td>$+1.0\\%$</td><td>$+5.0$</td><td>$\\mathbf{+5.0}$ m ← max</td></tr>
<tr><td>1000</td><td>$-0.8\\%$</td><td>$-4.0$</td><td>$+1.0$ m</td></tr>
<tr><td>1500</td><td>$-0.4\\%$</td><td>$-2.0$</td><td>$\\mathbf{-1.0}$ m ← min</td></tr>
<tr><td>2200</td><td>$+0.5\\%$</td><td>$+3.5$</td><td>$+2.5$ m</td></tr>
</tbody></table>
<p><b>Step 2 — Effective gradient:</b></p>
$$\\Delta h = 5.0 - (-1.0) = 6.0 \\text{ m}$$
$$g_{eff} = \\frac{6.0}{2200} = 0.2727\\%$$
<p><b>Step 3 — Gradient correction:</b></p>
$$C_g = 2150 \\times 0.20 \\times 0.002727 = \\boxed{117.3 \\text{ m}}$$
$$\\boxed{L = 2150 + 117.3 = 2267 \\text{ m}}$$
<div class="note-box">📝 <b>Notation:</b><br>
• $\\Delta h$ = max elevation $-$ min elevation along profile (m)<br>
• $g_{eff}$ = effective gradient = $\\Delta h / L_{profile}$ (as a fraction)<br>
• Gradient correction = 20% increase per 1% of $g_{eff}$<br>
💡 <b>Approach:</b> Build elevation table first. Identify max and min. Compute $g_{eff}$. Apply to the already corrected length (2150 m, not original).</div>
<div class="summary-box">📌 <b>Summary:</b> Effective gradient from profile = 0.27%. Correction = 117 m. Final runway = 2267 m.</div>`
  },
  {
    id:"q2025_5c", module:"m1", year:2025, marks:5, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q5(c)",
    question:"5° curve diverges from 3° main curve in reverse (BG yard). Branch speed = 35 km/h. Find restricted main line speed.",
    answer:`<h4>Solution</h4>
<p><b>Concept:</b> Cant for main curve acts as <i>negative cant</i> on the reverse branch.</p>
<p><b>Step 1 — Cant for branch:</b></p>
$$R_b = \\frac{1720}{5} = 344 \\text{ m}$$
$$e_b = \\frac{G \\cdot V_b^{\\,2}}{127 \\cdot R_b} = \\frac{1.676 \\times 35^2}{127 \\times 344} = \\boxed{47 \\text{ mm}}$$
<p><b>Step 2 — Negative cant limit:</b></p>
$$e_{main} = C_d - e_b = 76 - 47 = \\boxed{29 \\text{ mm}}$$
<p><b>Step 3 — Speed on main line:</b></p>
$$R_m = \\frac{1720}{3} = 573.3 \\text{ m}$$
$$e_{max} = 29 + 76 = 105 \\text{ mm} = 0.105 \\text{ m}$$
$$V_m = \\sqrt{\\frac{e_{max} \\times 127 \\times R_m}{G}} = \\sqrt{\\frac{0.105 \\times 127 \\times 573.3}{1.676}} = \\boxed{67.5 \\text{ km/h}}$$
<div class="note-box">📝 <b>Notation:</b><br>
• $R_b, R_m$ = radius of branch / main curve (m)<br>
• $e_b$ = cant required for branch speed (mm)<br>
• $e_{main}$ = cant actually provided on main line (mm) — limited by negative cant on branch<br>
• $C_d$ = max cant deficiency = 76 mm (BG standard)<br>
• Negative cant = cant provided for main curve acts opposite on reverse branch</div>
<div class="summary-box">📌 <b>Summary:</b> For reverse curves, the cant on the main line is limited by what the branch can tolerate as negative cant. Here: main cant = 29 mm → main speed = 67.5 km/h.</div>
<div class="note-box">💡 <b>Approach:</b> 3 steps — (1) Find cant needed for branch, (2) Find max negative cant = $C_d - e_b$, (3) Use that as main line cant and compute speed. This is a very tricky but high-scoring question.</div>`
  },
  {
    id:"q2025_6b", module:"m2", year:2025, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q6(b)",
    question:"BG loco, 3 driving axle pairs, 22 t/axle, μ = 0.2. (i) Max load at 80 km/h level. (ii) Speed reduction on 1:200. (iii) Further reduction for 4° curve.",
    answer:`<h4>Part (i) — Max load on straight level at 80 km/h</h4>
$$W_d = 3 \\times 22 = 66 \\text{ t} \\qquad F = 0.2 \\times 66 = \\boxed{13.2 \\text{ t}}$$
$$r_1 = 0.0016 + 0.00008(80) + 6{\\times}10^{-7}(80)^2 = 0.01184 \\text{ t/t}$$
$$W = \\frac{F}{r_1} = \\frac{13.2}{0.01184} = \\boxed{1115 \\text{ tonnes}}$$

<h4>Part (ii) — Rising gradient 1:200</h4>
<p>Add $r_g = 1/200 = 0.005$ t/t. Total coefficient at speed $V$:</p>
$$0.6V^2 + 80V - 5240 = 0$$
$$V = \\frac{-80 + \\sqrt{6400 + 12576}}{1.2} = \\frac{-80 + 137.8}{1.2} = \\boxed{48.2 \\text{ km/h}}$$
<p>Speed reduction $= 80 - 48.2 = \\boxed{31.8 \\text{ km/h}}$</p>

<h4>Part (iii) — Add 4° curve</h4>
<p>Add $r_c = 0.0004 \\times 4 = 0.0016$ t/t:</p>
$$0.6V^2 + 80V - 3640 = 0$$
$$V = \\frac{-80 + \\sqrt{6400 + 8736}}{1.2} = \\frac{-80 + 123.0}{1.2} = \\boxed{35.9 \\text{ km/h}}$$
<p>Further reduction $= 48.2 - 35.9 = \\boxed{12.3 \\text{ km/h}}$</p>
<div class="note-box">📝 <b>Notation &amp; Units:</b><br>
• $W_d$ = weight on driving wheels (t); $F$ = hauling capacity (t)<br>
• $\\mu$ = adhesion coefficient = 0.2<br>
• $r_1$ = train resistance coefficient (t per t of train weight)<br>
• $r_g = 1/n$ for gradient $1:n$ (t/t); $r_c = 0.0004D$ for BG curve (t/t)<br>
• The quadratic arises from: $F = W \\times (\\text{constant} + 0.00008V + 6{\\times}10^{-7}V^2)$<br>
• Multiply through by $10^6$ to get clean integer coefficients for the quadratic</div>
<div class="summary-box">📌 <b>Summary:</b> (i) Level: $W = 1115$ t at 80 km/h. (ii) Gradient reduces speed to 48.2 km/h (−31.8). (iii) Curve further reduces to 35.9 km/h (−12.3). Total reduction = 44.1 km/h.</div>
<div class="note-box">💡 <b>Approach:</b> Keep $W$ constant from Part (i). For parts (ii) and (iii), add resistances and solve the resulting quadratic for $V$. Use the quadratic formula — show discriminant calculation clearly.</div>`
  },
  {
    id:"q2025_3a_exit", module:"m4", year:2025, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q3(a)",
    question:"Design exit taxiway: turning angle = 40°, max turn-off speed = 65 km/h. Draw sketch and indicate design elements.",
    answer:`<h4>Solution</h4>
<p><b>Step 1 — Radius:</b></p>
$$R = \\frac{V^2}{125\\,f} = \\frac{65^2}{125 \\times 0.13} = \\frac{4225}{16.25} = \\boxed{260 \\text{ m}}$$
<p><b>Step 2 — Arc length:</b></p>
$$L_{arc} = R \\times \\alpha_{rad} = 260 \\times \\frac{40\\pi}{180} = \\boxed{181.5 \\text{ m}}$$
<p><b>Step 3 — Taxiway width:</b> $23$ m (Code D)</p>
<h4>Layout Sketch</h4>
<pre>
RUNWAY
════════════════════════════════════════
  TP₁                         TP₂
   ●─────── R = 260 m ────────●
    \\         (arc)           /
     \\    α = 40° turn       /
      \\____________________/
          EXIT TAXIWAY (23 m)
                 ↓
        PARALLEL TAXIWAY
════════════════════════════════════════
</pre>
<h4>Key Design Elements</h4>
<ol>
<li>Entry tangent from runway edge to TP₁</li>
<li>Circular curve: $R = 260$ m, arc $= 181.5$ m</li>
<li>Turning angle $\\alpha = 40°$</li>
<li>Pavement width $= 23$ m, shoulders $= 10.5$ m each</li>
<li>Fillet at intersection for smooth wheel path</li>
</ol>
<div class="note-box">📝 <b>Notation:</b> $V$ = turn-off speed (km/h); $f$ = friction = 0.13; $\\alpha$ = turning angle (degrees → convert to radians for arc length); TP = tangent point.<br>
💡 <b>Approach:</b> Calculate $R$ first, then arc length. Draw a clean sketch labelling TP₁, TP₂, $R$, $\\alpha$, and taxiway width. List 5-6 design elements.</div>
<div class="summary-box">📌 <b>Summary:</b> $R = 260$ m, Arc = 181.5 m, Width = 23 m. Always draw the sketch — it carries 4-5 marks by itself.</div>`
  }
];

// ── RELATED PYQ MAP ─────────────────────────────────────────
const relatedPyqMap = {
  coning_wheels:       ["q2022_5a", "q2025_5c"],
  superelevation_calc: ["q2023_4a", "q2025_5c", "q2023_1v", "q2025_1vi"],
  rail_wear:           ["q2022_4a"],
  rail_creep:          ["q2024_1ii","q2025_1iv"],
  points_turnouts:     ["q2022_7a"],
  hauling_capacity:    ["q2023_5b","q2025_6b","q2024_1vi"],
  signaling_systems:   [],
  runway_corrections:  ["q2023_6b","q2024_7c","q2025_4a"],
  windrose_diagram:    ["q2023_7a"],
  taxiway_radius:      ["q2024_7a","q2025_3a_exit","q2025_1x","q2022_1x"],
  pavement_design:     [],
  soft_soil_tunnels:   ["q2022_7b"],
  tunnel_ventilation:  ["q2022_5b"],
  sleeper_ballast:     ["q2022_1ii","q2023_3b","q2023_1i","q2025_1ii","q2024_1i"],
  gauges_suitability:  ["q2022_3a"]
};
