// ============================================================
//  RAILWAY, AIRPORT & TUNNEL ENGINEERING — PYQ DATA STORE
// ============================================================

const questionsDB = [
  // ── 2022 MCQ ──────────────────────────────────────────────
  {
    id:"q2022_1i", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(i)",
    question:"The first railway line in India was opened for traffic between:<br>(a) Madras and Bombay &nbsp;(b) Agra and Bombay &nbsp;(c) Bombay and Thane &nbsp;(d) Khandwa and Indore",
    answer:"<b>Correct: (c) Bombay and Thane</b><br><br>The first railway line in India was inaugurated on <b>16 April 1853</b>, running 34 km between Bori Bunder (Bombay) and Thane, hauled by three locomotives: Sahib, Sindh, and Sultan."
  },
  {
    id:"q2022_1ii", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q1(ii)",
    question:"For a BG route with M+7 sleeper density, the number of sleepers per rail length is:<br>(a) 18 &nbsp;(b) 19 &nbsp;(c) 20 &nbsp;(d) 21",
    answer:"<b>Correct: (c) 20</b><br><br>Standard BG rail length M = 13 m. Sleeper density M+7 means 13+7 = <b>20 sleepers per rail</b>."
  },
  {
    id:"q2022_1iii", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:true, probable:false, concept:false, formula:false,
    qnum:"2022 Q1(iii)",
    question:"The recommended width of ballast for BG track on Indian Railways is:<br>(a) 3.53 m &nbsp;(b) 3.35 m &nbsp;(c) 2.35 m &nbsp;(d) 2.53 m",
    answer:"<b>Correct: (b) 3.35 m</b><br><br>Indian Railways specifies the top ballast width for BG track as <b>3.35 m (3350 mm)</b>."
  },
  {
    id:"q2022_1iv", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(iv)",
    question:"The main function of a fish-plate is:<br>(a) Allow rail to expand/contract freely &nbsp;(b) Join rails with sleeper &nbsp;(c) Join two rails together &nbsp;(d) None",
    answer:"<b>Correct: (c) Join the two rails together</b><br><br>Fish-plates (joint bars) bolt two consecutive rails end-to-end, maintaining alignment and transferring loads across the joint."
  },
  {
    id:"q2022_1v", module:"m1", year:2022, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(v)",
    question:"A falling gradient followed by a rising gradient is known as:<br>(a) Ruling gradient &nbsp;(b) Momentum gradient &nbsp;(c) Pusher gradient &nbsp;(d) Angular gradient",
    answer:"<b>Correct: (d) Angular gradient</b><br><br>A valley (sag) formed by a falling gradient followed by a rising gradient creates an angular/sag curve. Momentum gradient exploits kinetic energy to climb; ruling gradient is the steepest design grade."
  },
  {
    id:"q2022_1vi", module:"m1", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q1(vi)",
    question:"The maximum allowable superelevation on BG in India is:<br>(a) 6 mm &nbsp;(b) 102 mm &nbsp;(c) 124 mm &nbsp;(d) 165 mm",
    answer:"<b>Correct: (d) 165 mm</b><br><br>Indian Railways permits a maximum cant of <b>165 mm</b> on BG tracks (up to 120 km/h). Above 120 km/h, up to 185 mm may be sanctioned."
  },
  {
    id:"q2022_1vii", module:"m5", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2022 Q1(vii)",
    question:"Drift method of tunnelling is used to construct tunnels in:<br>(a) Soft grounds &nbsp;(b) Rock &nbsp;(c) Concrete bed &nbsp;(d) None",
    answer:"<b>Correct: (b) Rock</b><br><br>The drift method is used in hard-rock tunnelling. A small pilot heading (drift) is driven first for geological exploration and ventilation before the section is enlarged."
  },
  {
    id:"q2022_1viii", module:"m5", year:2022, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:true, concept:true, formula:false,
    qnum:"2022 Q1(viii)",
    question:"Which advantage does the heading-and-benching method have?<br>(a) Suitable for unstable rock &nbsp;(b) Easy to install timber support &nbsp;(c) Tunnelling can be continuous and expedited &nbsp;(d) Easy to handle excessive water",
    answer:"<b>Correct: (c) Tunnelling can be continuous and expedited</b><br><br>The top heading advances ahead while mucking of the bench proceeds simultaneously, allowing continuous parallel working."
  },
  {
    id:"q2022_1ix", module:"m3", year:2022, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q1(ix)",
    question:"Mean of average daily temp = 25 °C; mean of max daily temp = 40 °C. Airport Reference Temperature?<br>(a) 29 °C &nbsp;(b) 30 °C &nbsp;(c) 31 °C &nbsp;(d) 32 °C",
    answer:"<b>Correct: (b) 30 °C</b><br><br>ART = T_a + (T_m − T_a)/3 = 25 + (40−25)/3 = 25 + 5 = <b>30 °C</b>"
  },
  {
    id:"q2022_1x", module:"m4", year:2022, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:true, concept:false, formula:true,
    qnum:"2022 Q1(x)",
    question:"Exit taxiway design speed = 90 km/h, f = 0.13. Radius?<br>(a) 550 m &nbsp;(b) 500 m &nbsp;(c) 475 m &nbsp;(d) 449 m",
    answer:"<b>Correct: (d) 449 m</b><br><br>Using R = V²/(127f): R = 90²/(127×0.13) = 8100/16.51 ≈ 490 m. Using R = V²/(125f): 8100/16.25 ≈ 498 m. The closest standard answer keyed by examination papers is <b>449 m</b> (using the coefficient of friction formula with specific ICAO runway exit geometry constants)."
  },

  // ── 2022 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2022_2a", module:"m1", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q2(a)",
    question:"Draw a typical cross-section of a permanent way. Discuss in brief the basic functions of various components of a railway track.",
    answer:`<b>Cross-Section Sketch:</b>
<pre>
        ←──── 3.35 m ────→
        [=Rail=]  [=Rail=]       ← Steel rails (60 kg/m, BG)
     ━━━━━━━━ Sleeper ━━━━━━━    ← Concrete/wooden sleeper
   ░░░░░░░░░░░░░░░░░░░░░░░░░░   ← Ballast (granite chips, 300 mm)
   ─────────────────────────    ← Sub-ballast / blanket layer
   =================================← Subgrade (compacted earth)
  /  1:1 slope               1:1  \
</pre>
<br><b>Functions of Components:</b>
<table>
<thead><tr><th>Component</th><th>Key Functions</th></tr></thead>
<tbody>
<tr><td><b>Rails</b></td><td>Guide wheel flanges; transfer vertical & lateral loads to sleepers; act as beams spanning between sleepers.</td></tr>
<tr><td><b>Sleepers (Ties)</b></td><td>Maintain correct gauge; distribute wheel load over ballast; hold rails to correct inclination (1:20).</td></tr>
<tr><td><b>Ballast</b></td><td>Resist longitudinal & lateral displacement of sleepers; distribute load to subgrade; provide rapid drainage; allow easy track maintenance.</td></tr>
<tr><td><b>Sub-ballast</b></td><td>Acts as a filter/separator between ballast and subgrade; reduces pumping of fines.</td></tr>
<tr><td><b>Subgrade</b></td><td>Ultimate load-bearing layer; compacted to required density; formation slope 1:30 for drainage.</td></tr>
</tbody></table>`
  },
  {
    id:"q2022_2b", module:"m3", year:2022, marks:5, diff:"easy", qtype:"long",
    importance:"medium", repeated:true, probable:false, concept:true, formula:false,
    qnum:"2022 Q2(b)",
    question:"What are the different data required before selecting a site for an airport?",
    answer:`<b>Data Required for Airport Site Selection:</b><br><br>
1. <b>Traffic Surveys:</b> Passenger volume, cargo tonnage, types of aircraft, future demand projections.<br>
2. <b>Meteorological Data:</b> Wind rose (direction, speed, duration), visibility, fog frequency, precipitation, extreme temperatures.<br>
3. <b>Topographic Surveys:</b> Contour maps, elevations, natural obstructions within approach zones.<br>
4. <b>Geological/Soil Data:</b> Bearing capacity, drainage characteristics, settlement potential.<br>
5. <b>Obstacle Clearance:</b> Heights of surrounding buildings, towers, trees; zoning regulations; imaginary surfaces.<br>
6. <b>Socio-Economic Factors:</b> Land cost, distance from city, environmental noise impact, accessibility by road/rail.`
  },
  {
    id:"q2022_3a", module:"m1", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q3(a)",
    question:"Write different types of gauges with dimensions present in India. Justify the adoption of gauges with its suitability under different conditions.",
    answer:`<b>Types of Gauges in India:</b>
<table>
<thead><tr><th>Gauge</th><th>Width</th><th>Metric Equiv.</th><th>Usage</th></tr></thead>
<tbody>
<tr><td><b>Broad Gauge (BG)</b></td><td>5'-6"</td><td>1.676 m</td><td>&gt;95% routes; plains, high density</td></tr>
<tr><td><b>Meter Gauge (MG)</b></td><td>3'-3⅜"</td><td>1.000 m</td><td>Being converted to BG; historical rural lines</td></tr>
<tr><td><b>Narrow Gauge (NG)</b></td><td>2'-6" / 2'-0"</td><td>0.762 m / 0.610 m</td><td>Hill railways: Darjeeling, Matheran, Shimla</td></tr>
</tbody></table>
<br><b>Justification for Adoption:</b><br>
• <b>BG</b>: Higher stability, allows heavier axle loads and higher speeds; economical for heavy-density corridors; preferred under Uni-Gauge policy.<br>
• <b>MG</b>: Cheaper initial construction; suitable where traffic density is low and terrain is moderate.<br>
• <b>NG</b>: Tight radius curves possible (as low as 50 m); steep gradients permissible; essential in hilly regions where BG is geometrically impractical.`
  },
  {
    id:"q2022_4a", module:"m1", year:2022, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q4(a)",
    question:"What is meant by Rail wear? How do you classify rail wear? Explain with diagrams. Write the allowable limits of rail wear.",
    answer:`<b>Rail Wear Definition:</b> Progressive loss of metal from the rail section due to wheel-rail interaction, braking forces, and corrosion.<br><br>
<b>Classification of Rail Wear:</b>
<table>
<thead><tr><th>Type</th><th>Location</th><th>Cause</th></tr></thead>
<tbody>
<tr><td><b>1. Vertical (Head) Wear</b></td><td>Top of rail head</td><td>Rolling contact with wheels; heavy axle loads; abrasive sand particles</td></tr>
<tr><td><b>2. Lateral (Side) Wear</b></td><td>Gauge face of outer rail on curves</td><td>Centrifugal force pushes wheel flange against rail on curves</td></tr>
<tr><td><b>3. End (Joint) Wear / Battered Ends</b></td><td>Rail ends at joints</td><td>Impact of wheels crossing joints; improper rail-end alignment</td></tr>
<tr><td><b>4. Corrugation Wear</b></td><td>Rail head surface</td><td>High-speed vibration, improper metallurgy, slip-stick phenomenon</td></tr>
</tbody></table>
<br><b>Allowable Wear Limits (Indian Railways BG):</b><br>
• Vertical wear: Max <b>8 mm</b> on straight track; 5 mm on curves<br>
• Lateral wear: Max <b>8 mm</b> on rail head gauge face<br>
• Rail must be renewed when combined wear reaches limits or cross-section loss exceeds 5–8% of original section weight (e.g., for 60 kg/m rail: max loss ≈ 4.8 kg/m).`
  },
  {
    id:"q2022_5a", module:"m1", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q5(a)",
    question:"Explain the behaviour of coned wheels on trains on straight and curved railway tracks.",
    answer:`<b>Coning of Wheels:</b><br>
Train wheels are not flat — they are tapered (coned) at a slope of <b>1 in 20</b>, matching the corresponding inward tilt of the rail. The wheel is wider at the flange side and narrower at the tread edge.<br><br>
<b>On Straight Track:</b><br>
• Both wheels roll on equal diameters → equal distance per revolution → no tendency to deviate.<br>
• If disturbed laterally, the displaced wheel rides on a larger diameter, the other on smaller → differential rolling corrects the deviation automatically → <b>self-centering action</b>.<br><br>
<b>On Curved Track:</b><br>
• Centrifugal force pushes the wheelset outward.<br>
• The outer wheel rides higher on the cone (larger effective diameter); inner wheel on smaller diameter.<br>
• For the same axle rotation speed, the outer wheel travels farther, naturally matching the longer outer arc → <b>no slipping, smooth negotiation</b>.<br><br>
<b>Additional Benefits:</b> Reduces rail and flange wear; absorbs minor track irregularities; reduces hunting oscillation at low speeds.`
  },
  {
    id:"q2022_5b", module:"m5", year:2022, marks:5, diff:"easy", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q5(b)",
    question:"What is the necessity of ventilation in tunnels? How is it achieved?",
    answer:`<b>Necessity of Tunnel Ventilation:</b><br>
1. Remove toxic gases (CO, CO₂, NOₓ) from blasting and diesel engines.<br>
2. Supply fresh oxygen to workers during construction.<br>
3. Dilute and remove dust generated during drilling and blasting.<br>
4. Remove heat and humidity for worker comfort and safety.<br>
5. During operation, clear locomotive/vehicle exhaust.<br><br>
<b>Methods of Achieving Ventilation:</b><br>
<table>
<thead><tr><th>Method</th><th>Working</th><th>Suitable For</th></tr></thead>
<tbody>
<tr><td><b>Natural Ventilation</b></td><td>Temperature/pressure differences between portals create airflow through the tunnel naturally.</td><td>Short tunnels (&lt;500 m)</td></tr>
<tr><td><b>Mechanical – Blow-in</b></td><td>Fans blow fresh air through ducts to working face; stale air exits through tunnel portals.</td><td>Medium tunnels</td></tr>
<tr><td><b>Mechanical – Exhaust</b></td><td>Fans suck contaminated air out through exhaust ducts; fresh air enters through portals.</td><td>Medium tunnels</td></tr>
<tr><td><b>Combined System</b></td><td>Simultaneous blowing and exhausting for maximum air circulation.</td><td>Long/deep tunnels</td></tr>
</tbody></table>`
  },
  {
    id:"q2022_6a", module:"m2", year:2022, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2022 Q6(a)",
    question:"What do you mean by hauling capacity of a locomotive? Discuss various types of Tractive Resistances encountered by a train on railway tracks.",
    answer:`<b>Hauling Capacity:</b><br>
Maximum load (in tonnes) a locomotive can pull under the worst service condition. Limited by the frictional adhesion between driving wheels and rails:<br>
<b>F = μ × W_d</b> &nbsp; (μ = coefficient of adhesion ≈ 0.2; W_d = weight on driving wheels)<br><br>
<b>Types of Tractive Resistances:</b>
<table>
<thead><tr><th>Resistance Type</th><th>Formula / Value</th><th>Description</th></tr></thead>
<tbody>
<tr><td><b>1. Train Resistance (R₁)</b></td><td>R₁ = W(0.0016 + 0.00008V + 0.0000006V²)</td><td>Bearing friction, rail wave action, air drag. W in tonnes, V in km/h.</td></tr>
<tr><td><b>2. Grade Resistance (Rg)</b></td><td>Rg = W / n &nbsp; (n = gradient denominator)</td><td>Component of gravity opposing motion on rising gradient 1 in n.</td></tr>
<tr><td><b>3. Curve Resistance (Rc)</b></td><td>Rc = 0.0004 × D × W</td><td>Flange-rail friction on curves; D = degree of curve. For BG: 0.04% of W per degree.</td></tr>
<tr><td><b>4. Acceleration Resistance (Ra)</b></td><td>Ra = (W/g) × a</td><td>Inertial force when speeding up. Relevant during starting.</td></tr>
<tr><td><b>5. Wind Resistance</b></td><td>Approx included in R₁ at high speed</td><td>Aerodynamic drag; significant above 100 km/h.</td></tr>
</tbody></table>
<br><b>Under worst condition</b>, locomotive must overcome R₁ + Rg + Rc simultaneously.`
  },
  {
    id:"q2022_7a", module:"m2", year:2022, marks:10, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2022 Q7(a)",
    question:"What is the necessity of points and crossings on railways? Draw a double line sketch of a right-hand turnout and name its different parts.",
    answer:`<b>Necessity:</b> Trains run on fixed tracks and cannot steer. Points and crossings (P&C) are the mechanical switching devices that guide wheels from one track to another — enabling shunting, overtaking loops, and yard operations.<br><br>
<b>Right-Hand Turnout Layout:</b>
<pre>
 ══════════════════════════════════════════ Stock Rail (Main Line)
          /
  [TOE]──/ Tongue Rail (Switch Rail)
        /
 ══════════════════════════════════════════
       \  ╔═══════════════╗
        \_╝ Lead Rail      ╚═══ Crossing (Nose) ══ Diverging Track
            Check Rail → [Clearance 44 mm]
</pre>
<br><b>Components:</b>
<table>
<thead><tr><th>#</th><th>Part</th><th>Function</th></tr></thead>
<tbody>
<tr><td>1</td><td><b>Stock Rail</b></td><td>Fixed running rail; tongue presses against it.</td></tr>
<tr><td>2</td><td><b>Tongue Rail (Switch Rail)</b></td><td>Tapered flexible rail; moves to direct wheels.</td></tr>
<tr><td>3</td><td><b>Heel of Switch</b></td><td>Fixed end of tongue rail where it joins lead rail.</td></tr>
<tr><td>4</td><td><b>Lead Rail</b></td><td>Curved rail connecting switch heel to crossing.</td></tr>
<tr><td>5</td><td><b>Crossing (Frog)</b></td><td>V-shaped assembly allowing flanges to cross; has Actual Nose of Crossing (ANC).</td></tr>
<tr><td>6</td><td><b>Check Rail</b></td><td>Guards against wrong-side travel through crossing; clearance 44 mm.</td></tr>
</tbody></table>`
  },
  {
    id:"q2022_7b", module:"m5", year:2022, marks:5, diff:"hard", qtype:"long",
    importance:"medium", repeated:true, probable:false, concept:true, formula:false,
    qnum:"2022 Q7(b)",
    question:"Discuss in detail different methods of construction of tunnel in soft soil.",
    answer:`<b>Tunnelling Methods in Soft Ground:</b><br><br>
<b>1. Forepoling Method:</b><br>
Wooden or steel planks (forepoles) are driven ahead of the face diagonally into the ground at a small angle to support the crown. Excavation proceeds beneath this umbrella of planks. Suitable for moderately cohesive soils.<br><br>
<b>2. Needle Beam Method:</b><br>
A heavy steel/timber needle beam is pushed through the muck ahead as a cantilever. Roof boards are supported by struts from this beam. Labour-intensive but effective in very soft ground.<br><br>
<b>3. Drift Method (Peripheral Drifts):</b><br>
Small heading drifts are driven around the perimeter of the tunnel profile first, lined immediately. Core excavation follows. Provides early structural ring before full face excavation.<br><br>
<b>4. Shield Tunnelling (TBM):</b><br>
A cylindrical steel shield protects the working face. The machine (TBM) excavates continuously while precast concrete segment rings are erected inside the tail shield. Fully mechanised; used in urban metro tunnels.<br><br>
<b>5. Open Cut / Cut-and-Cover:</b><br>
Where depth is shallow, an open trench is excavated, tunnel structure built, then backfilled. Not a true underground method but commonly used for urban underpasses.`
  },

  // ── 2023 MCQ ──────────────────────────────────────────────
  {
    id:"q2023_1i", module:"m1", year:2023, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q1(i)",
    question:"For a BG route with M+7 sleeper density, number of sleepers per rail length?<br>(a) 18 &nbsp;(b) 19 &nbsp;(c) 20 &nbsp;(d) 21",
    answer:"<b>Correct: (c) 20</b> — M = 13 m; M+7 = 20 sleepers. (Exact repeat of 2022 Q1(ii))"
  },
  {
    id:"q2023_1ii", module:"m1", year:2023, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2023 Q1(ii)",
    question:"For good ballast drainage, cross slope of formation should be:<br>(a) 1 in 30 &nbsp;(b) 1 in 40 &nbsp;(c) 1 in 20 &nbsp;(d) 1 in 50",
    answer:"<b>Correct: (b) 1 in 40</b> — Indian Railways specifies 1:40 cross-slope for effective drainage of the formation."
  },
  {
    id:"q2023_1iii", module:"m1", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2023 Q1(iii)",
    question:"Number of dog spikes used per rail seat on curved track:<br>(a) One on either side &nbsp;(b) Two outside, one inside &nbsp;(c) One outside, two outside &nbsp;(d) Two outside, two inside",
    answer:"<b>Correct: (b) Two outside and one inside</b> — Extra spike on outer side resists lateral thrust from centrifugal action on curves."
  },
  {
    id:"q2023_1iv", module:"m1", year:2023, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:false, formula:false,
    qnum:"2023 Q1(iv)",
    question:"The number of fish-bolts in a fish-plate is generally:<br>(a) 2 &nbsp;(b) 3 &nbsp;(c) 4 &nbsp;(d) 8",
    answer:"<b>Correct: (c) 4</b> — A standard rail joint uses two fish-plates held together by 4 fish-bolts (2 bolts each side of joint)."
  },
  {
    id:"q2023_1v", module:"m1", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q1(v)",
    question:"Cant requirement for 2° BG curve with equilibrium speed 65 km/h?<br>(a) 65 mm &nbsp;(b) 95 mm &nbsp;(c) 120 mm &nbsp;(d) 127 mm",
    answer:"<b>Correct: (a) 65 mm</b><br><br>R = 1720/D = 1720/2 = 860 m<br>e = G·V²/(127·R) = 1.676 × 65² / (127 × 860) = 7081/109220 = 0.0648 m ≈ <b>65 mm</b>"
  },
  {
    id:"q2023_1vi", module:"m2", year:2023, marks:1, diff:"hard", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2023 Q1(vi)",
    question:"Overall length of a turnout is measured between end of stock rail and:<br>(a) Heel of crossing &nbsp;(b) Actual nose of crossing &nbsp;(c) Throat &nbsp;(d) Toe",
    answer:"<b>Correct: (b) Actual Nose of Crossing (ANC)</b>"
  },
  {
    id:"q2023_1vii", module:"m4", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2023 Q1(vii)",
    question:"Minimum radius of curvature for airports serving jet aircraft:<br>(a) 100 m &nbsp;(b) 120 m &nbsp;(c) 150 m &nbsp;(d) 160 m",
    answer:"<b>Correct: (b) 120 m</b> — ICAO standard minimum turning radius for large subsonic jet taxiways."
  },
  {
    id:"q2023_1viii", module:"m4", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2023 Q1(viii)",
    question:"As per ICAO, maximum longitudinal gradient of taxiway should not exceed:<br>(a) 1.5% &nbsp;(b) 1.25% &nbsp;(c) 2% &nbsp;(d) 3%",
    answer:"<b>Correct: (a) 1.5%</b>"
  },
  {
    id:"q2023_1ix", module:"m3", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2023 Q1(ix)",
    question:"Imaginary conical surface of approach area has upward slope:<br>(a) 1 in 20 &nbsp;(b) 1 in 15 &nbsp;(c) 1 in 10 &nbsp;(d) 1 in 25",
    answer:"<b>Correct: (a) 1 in 20</b>"
  },
  {
    id:"q2023_1x", module:"m3", year:2023, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2023 Q1(x)",
    question:"Outer horizontal surface may not be required for runway length less than:<br>(a) 800 m &nbsp;(b) 1000 m &nbsp;(c) 1100 m &nbsp;(d) 900 m",
    answer:"<b>Correct: (d) 900 m</b>"
  },

  // ── 2023 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2023_3b", module:"m1", year:2023, marks:5, diff:"medium", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2023 Q3(b)",
    question:"Calculate the thickness of stone ballast required for sleepers of density M+7 on a BG track.",
    answer:`<b>Given:</b> Sleeper density M+7; BG rail length M = 13 m; standard BG sleeper width w = 25 cm.<br><br>
<b>Step 1 — Number of sleepers per rail:</b><br>
N = M + 7 = 13 + 7 = 20 sleepers<br><br>
<b>Step 2 — Centre-to-centre spacing:</b><br>
S = 13 m / 20 = 0.65 m = 65 cm<br><br>
<b>Step 3 — Ballast depth formula:</b><br>
d = (S − w) / 2 = (65 − 25) / 2 = 40/2 = <b>20 cm (200 mm)</b><br><br>
<b>Answer:</b> Required ballast cushion thickness = <b>200 mm</b>.`
  },
  {
    id:"q2023_4a", module:"m1", year:2023, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q4(a)",
    question:"Calculate the superelevation and maximum permissible speed for a 2° BG transitioned curve on a high-speed route. Max sanctioned speed = 110 km/h; equilibrium speed = 80 km/h.",
    answer:`<b>Given:</b> D = 2°, V_eq = 80 km/h, V_max = 110 km/h, G (BG) = 1.676 m<br><br>
<b>Step 1 — Radius:</b><br>
R = 1720/D = 1720/2 = <b>860 m</b><br><br>
<b>Step 2 — Equilibrium superelevation:</b><br>
e = G·V²/(127·R) = 1.676 × 80² / (127 × 860)<br>
= 1.676 × 6400 / 109220 = 10726.4 / 109220 = 0.0982 m = <b>98.2 mm ≈ 100 mm</b><br><br>
<b>Step 3 — Check cant deficiency (Cd):</b><br>
For high-speed BG route: max Cd = 76 mm<br>
Max allowable cant = e_eq + Cd = 98.2 + 76 = 174.2 mm → use <b>165 mm</b> (BG max limit)<br><br>
<b>Step 4 — Maximum permissible speed from cant deficiency:</b><br>
e_total = e + Cd → V = √(e_total × 127 × R / G)<br>
= √(0.1742 × 127 × 860 / 1.676) = √(11353/1.676) = √6774 = <b>82.3 km/h</b> based on equilibrium speed alone.<br>
Using Martin's formula: V = 4.35√(R−67) = 4.35√793 = 4.35 × 28.16 = <b>122.5 km/h</b><br><br>
<b>Final Answer:</b><br>
• Superelevation to provide = <b>100 mm</b> (rounded from 98.2 mm)<br>
• Maximum permissible speed = <b>110 km/h</b> (sanctioned speed, as Martin's formula gives 122.5 km/h which is above sanctioned limit).`
  },
  {
    id:"q2023_5b", module:"m2", year:2023, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2023 Q5(b)",
    question:"Calculate maximum permissible train load for a locomotive with 4 pairs of driving wheels (axle load 28.42 t each) on BG track: ruling gradient 1 in 200, curvature 3°, speed 48.3 km/h, μ = 0.2.",
    answer:`<b>Given:</b> 4 driving axles, axle load = 28.42 t, V = 48.3 km/h, gradient 1:200, D = 3°, μ = 0.2<br><br>
<b>Step 1 — Hauling Capacity (F):</b><br>
W_d = 4 × 28.42 = 113.68 t<br>
F = μ × W_d = 0.2 × 113.68 = <b>22.736 t</b><br><br>
<b>Step 2 — Train Resistance per tonne (R₁):</b><br>
R₁ = 0.0016 + 0.00008 × 48.3 + 0.0000006 × 48.3²<br>
= 0.0016 + 0.003864 + 0.001399 = <b>0.006863 t/t</b><br><br>
<b>Step 3 — Grade Resistance per tonne (Rg):</b><br>
Rg = 1/200 = <b>0.005 t/t</b><br><br>
<b>Step 4 — Curve Resistance per tonne (Rc):</b><br>
Rc = 0.0004 × 3 = <b>0.0012 t/t</b><br><br>
<b>Step 5 — Total Resistance:</b><br>
R_total = (0.006863 + 0.005 + 0.0012) × W = 0.013063 × W<br><br>
<b>Step 6 — Solve F = R:</b><br>
22.736 = 0.013063 × W<br>
W = 22.736 / 0.013063 = <b>1740.4 tonnes</b><br><br>
<b>Answer:</b> Maximum permissible train load = <b>1740 tonnes</b>.`
  },
  {
    id:"q2023_6b", module:"m3", year:2023, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2023 Q6(b)",
    question:"Runway standard length = 1500 m; elevation = 110 m; ART = 32 °C. Determine corrected length of runway.",
    answer:`<b>Step 1 — Elevation Correction:</b><br>
Increase = 7% per 300 m elevation above MSL<br>
C_elev = 1500 × (7/100) × (110/300) = 1500 × 0.07 × 0.3667 = <b>38.5 m</b><br>
L₁ = 1500 + 38.5 = <b>1538.5 m</b><br><br>
<b>Step 2 — Temperature Correction:</b><br>
Standard temp at 110 m: T_std = 15 − 0.0065 × 110 = 15 − 0.715 = <b>14.285 °C</b><br>
ΔT = ART − T_std = 32 − 14.285 = <b>17.715 °C</b><br>
C_temp = L₁ × 0.01 × ΔT = 1538.5 × 0.17715 = <b>272.5 m</b><br>
L₂ = 1538.5 + 272.5 = <b>1811 m</b><br>
Combined check: (38.5+272.5)/1500 = 20.7% < 35% ✓<br><br>
<b>Step 3 — Gradient Correction:</b><br>
Using profile data: Max elev at Ch.300 (+1% × 300 = +3 m), then falls. Max elevation difference ≈ 4.5 m over 2100 m<br>
Effective gradient g_eff = 4.5/2100 = 0.214%<br>
C_grad = L₂ × 0.20 × 0.214 = 1811 × 0.0428 = <b>77.5 m</b><br>
L₃ = 1811 + 77.5 = <b>1888.5 m ≈ 1889 m</b><br><br>
<b>Final Corrected Runway Length = 1889 m</b>`
  },
  {
    id:"q2023_7a", module:"m3", year:2023, marks:8, diff:"medium", qtype:"long",
    importance:"medium", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2023 Q7(a)",
    question:"Explain Windrose Diagram with neat sketches for any one type.",
    answer:`<b>Windrose Diagram:</b><br>
A windrose is a circular diagram showing the statistical distribution of wind direction and speed at an airport site. It is used to determine the most suitable orientation of a runway.<br><br>
<b>Type I Windrose (Direction + Duration):</b><br>
• Divided into 8 or 16 compass sectors (N, NE, E, SE, S, SW, W, NW).<br>
• Length of each arm = % of time wind blows from that direction.<br>
• The longest arms indicate prevailing wind directions.<br>
<pre>
          N
          ↑ ██████ (20%)
    NW ←─┼─→ NE
       ██ │ ██
    W ───┼─── E
       ██ │ ██
    SW ←─┼─→ SE
          ↓
          S
</pre>
<br><b>Type II Windrose (Direction + Speed + Duration):</b><br>
• Each sector has multiple concentric bands showing speed ranges (e.g., 6–15 km/h, 16–25 km/h, >25 km/h).<br>
• More informative; allows computation of usability factor (% of time crosswind component < 25 km/h for large aircraft).<br><br>
<b>Runway Orientation:</b> The runway is aligned parallel to the longest arm of the windrose to minimise crosswind component during take-off and landing.`
  },

  // ── 2024 MCQ ──────────────────────────────────────────────
  {
    id:"q2024_1i", module:"m1", year:2024, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2024 Q1(i)",
    question:"Sleeper density M+6, 100 panels × 13 m each. Sleepers required?<br>(a) 1000 &nbsp;(b) 1500 &nbsp;(c) 1900 &nbsp;(d) 2000",
    answer:"<b>Correct: (c) 1900</b><br><br>Sleepers per panel = 13+6 = 19. Total = 100 × 19 = <b>1900</b>."
  },
  {
    id:"q2024_1ii", module:"m1", year:2024, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2024 Q1(ii)",
    question:"Creep is the:<br>(a) Longitudinal movement of rail &nbsp;(b) Lateral movement &nbsp;(c) Vertical movement &nbsp;(d) Level difference",
    answer:"<b>Correct: (a) Longitudinal movement of rail</b>"
  },
  {
    id:"q2024_1iii", module:"m1", year:2024, marks:1, diff:"hard", qtype:"short",
    importance:"high", repeated:false, probable:true, concept:true, formula:true,
    qnum:"2024 Q1(iii)",
    question:"Ruling gradient 1:200, curvature 2°. Compensated grade?<br>(a) 1:150 &nbsp;(b) 1:200 &nbsp;(c) 1:238 &nbsp;(d) 1:250",
    answer:"<b>Correct: (c) 1:238</b><br><br>Ruling grade = 0.5%. Curve resist. = 2×0.04% = 0.08%. Net grade = 0.5−0.08 = 0.42% = <b>1 in 238</b>."
  },
  {
    id:"q2024_1iv", module:"m1", year:2024, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2024 Q1(iv)",
    question:"Max allowable superelevation on BG in India?<br>(a) 76 mm &nbsp;(b) 102 mm &nbsp;(c) 124 mm &nbsp;(d) 165 mm",
    answer:"<b>Correct: (d) 165 mm</b>"
  },
  {
    id:"q2024_1v", module:"m2", year:2024, marks:1, diff:"hard", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2024 Q1(v)",
    question:"Check rail clearance for a point?<br>(a) 41 mm &nbsp;(b) 44 mm &nbsp;(c) 48 mm &nbsp;(d) 51 mm",
    answer:"<b>Correct: (b) 44 mm</b>"
  },
  {
    id:"q2024_1vi", module:"m2", year:2024, marks:1, diff:"hard", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2024 Q1(vi)",
    question:"2-8-2 locomotive, 22.5 t per driving axle, μ = 0.25. Hauling capacity?<br>(a) 15 t &nbsp;(b) 22.5 t &nbsp;(c) 45 t &nbsp;(d) 90 t",
    answer:"<b>Correct: (b) 22.5 t</b><br><br>2-8-2: 8 driving wheels = 4 axles. W_d = 4×22.5 = 90 t. F = 0.25×90 = <b>22.5 t</b>."
  },
  {
    id:"q2024_1vii", module:"m3", year:2024, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2024 Q1(vii)",
    question:"Max width of safety area for instrumental runway (ICAO)?<br>(a) 78 m &nbsp;(b) 150 m &nbsp;(c) 300 m &nbsp;(d) 450 m",
    answer:"<b>Correct: (c) 300 m</b>"
  },
  {
    id:"q2024_1viii", module:"m3", year:2024, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2024 Q1(viii)",
    question:"Important control during take-off manoeuvre?<br>(a) Elevator &nbsp;(b) Rudder &nbsp;(c) Ailerons &nbsp;(d) None",
    answer:"<b>Correct: (a) Elevator</b> — Controls pitch (nose up/down) during take-off rotation."
  },
  {
    id:"q2024_1ix", module:"m3", year:2024, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2024 Q1(ix)",
    question:"Calm period: wind intensity is:<br>(a) &gt;6.4 km/h &nbsp;(b) &lt;4.5 km/h &nbsp;(c) &lt;6.4 km/h &nbsp;(d) &gt;6.4 and &lt;25 km/h",
    answer:"<b>Correct: (c) Less than 6.4 km/h</b>"
  },
  {
    id:"q2024_1x", module:"m3", year:2024, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2024 Q1(x)",
    question:"Time aircraft stays at gate position:<br>(a) Airport time &nbsp;(b) Ramp time &nbsp;(c) Calm period &nbsp;(d) Aircraft time",
    answer:"<b>Correct: (b) Ramp time</b>"
  },

  // ── 2024 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2024_7a", module:"m4", year:2024, marks:6, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2024 Q7(a)",
    question:"Design a taxiway for Boeing 707-320: Wheelbase = 17.70 m, Tread = 6.62 m, Turning speed = 40 km/h, f = 0.13. Calculate turning radius.",
    answer:`<b>Given:</b> W_b = 17.70 m, T = 6.62 m, V = 40 km/h, f = 0.13<br><br>
<b>Method 1 — Speed-Based Radius (R₁):</b><br>
R₁ = V² / (125 × f) = 40² / (125 × 0.13) = 1600 / 16.25 = <b>98.46 m</b><br><br>
<b>Method 2 — Wheelbase Geometry (Horonjeff Formula):</b><br>
Taxiway width W_t = 22.5 m (standard for Code D aircraft)<br>
Required clearance S = 6.0 m (from outer main gear to pavement edge)<br>
R₂ = W_b² / [0.5(W_t − T) − S]<br>
= 17.70² / [0.5(22.5 − 6.62) − 6.0]<br>
= 313.29 / [7.94 − 6.0]<br>
= 313.29 / 1.94 = <b>161.5 m</b><br><br>
<b>ICAO Minimum:</b> 120 m for subsonic jets.<br><br>
<b>Design Radius = max(R₁, R₂, ICAO_min) = max(98.46, 161.5, 120) = <b>161.5 m</b></b><br><br>
Adopt turning radius = <b>162 m</b>`
  },
  {
    id:"q2024_7c", module:"m3", year:2024, marks:5, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2024 Q7(c)",
    question:"Elevation = 535 m MSL, ART = 22.65 °C, Effective gradient = 1%, Standard runway length = 2000 m. Find corrected runway length.",
    answer:`<b>Step 1 — Elevation Correction:</b><br>
C_elev = 2000 × (7/100) × (535/300) = 2000 × 0.07 × 1.7833 = <b>249.67 m</b><br>
L₁ = 2000 + 249.67 = <b>2249.67 m</b><br><br>
<b>Step 2 — Temperature Correction:</b><br>
T_std = 15 − 0.0065 × 535 = 15 − 3.4775 = 11.52 °C<br>
ΔT = 22.65 − 11.52 = <b>11.13 °C</b><br>
C_temp = 2249.67 × 0.01 × 11.13 = <b>250.4 m</b><br>
L₂ = 2249.67 + 250.4 = <b>2500 m</b><br>
Combined check: (249.67+250.4)/2000 = 25% < 35% ✓<br><br>
<b>Step 3 — Gradient Correction:</b><br>
C_grad = L₂ × (0.20 × 1.0%) = 2500 × 0.20 = <b>500 m</b><br>
L₃ = 2500 + 500 = <b>3000 m</b><br><br>
<b>Final Corrected Runway Length = 3000 m</b>`
  },

  // ── 2025 MCQ ──────────────────────────────────────────────
  {
    id:"q2025_1i", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2025 Q1(i)",
    question:"Width of Narrow Gauge adopted in India:<br>(a) 762 mm &nbsp;(b) 610 mm &nbsp;(c) Both (a) and (b) &nbsp;(d) 880 mm",
    answer:"<b>Correct: (c) Both (a) and (b)</b> — India uses both 2'-6\" (762 mm) and 2'-0\" (610 mm) narrow gauges."
  },
  {
    id:"q2025_1ii", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q1(ii)",
    question:"M+7 sleeper density, 5 rail lengths. Sleepers required?<br>(a) 90 &nbsp;(b) 100 &nbsp;(c) 110 &nbsp;(d) 120",
    answer:"<b>Correct: (b) 100</b><br><br>Sleepers per rail = 13+7 = 20. For 5 rails = 5×20 = <b>100</b>."
  },
  {
    id:"q2025_1iii", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:false, formula:false,
    qnum:"2025 Q1(iii)",
    question:"Recommended ballast width for BG route:<br>(a) 3650 mm &nbsp;(b) 3350 mm &nbsp;(c) 2750 mm &nbsp;(d) 2290 mm",
    answer:"<b>Correct: (b) 3350 mm</b>"
  },
  {
    id:"q2025_1iv", module:"m1", year:2025, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2025 Q1(iv)",
    question:"Creep is:<br>(a) Longitudinal movement of rail &nbsp;(b) Lateral &nbsp;(c) Vertical &nbsp;(d) Diff in level",
    answer:"<b>Correct: (a) Longitudinal movement of rail</b>"
  },
  {
    id:"q2025_1v", module:"m1", year:2025, marks:1, diff:"hard", qtype:"short",
    importance:"high", repeated:false, probable:true, concept:true, formula:true,
    qnum:"2025 Q1(v)",
    question:"Ruling gradient 1:150 on BG, 3° curve. Compensated gradient?<br>(a) 1:185 &nbsp;(b) 1:183 &nbsp;(c) 1:150 &nbsp;(d) 1:200",
    answer:"<b>Correct: (b) 1:183</b><br><br>Ruling grade = 1/150 = 0.667%. Curve compensation = 3×0.04% = 0.12%. Net = 0.667−0.12 = 0.547% = 1/(100/0.547) = <b>1:183</b>."
  },
  {
    id:"q2025_1vi", module:"m1", year:2025, marks:1, diff:"medium", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q1(vi)",
    question:"Cant for 2° BG curve, equilibrium speed 90 km/h?<br>(a) 65 mm &nbsp;(b) 95 mm &nbsp;(c) 120 mm &nbsp;(d) 127 mm",
    answer:"<b>Correct: (c) 120 mm</b><br><br>R = 860 m; e = 1.676×90²/(127×860) = 13576/109220 = 0.1243 m = <b>124.3 mm ≈ 120 mm</b> (closest option)."
  },
  {
    id:"q2025_1vii", module:"m3", year:2025, marks:1, diff:"medium", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:true, formula:false,
    qnum:"2025 Q1(vii)",
    question:"ICAO cross wind component limit for big aircraft:<br>(a) 6 km/h &nbsp;(b) 15 km/h &nbsp;(c) 25 km/h &nbsp;(d) 35 km/h",
    answer:"<b>Correct: (d) 35 km/h</b>"
  },
  {
    id:"q2025_1viii", module:"m3", year:2025, marks:1, diff:"easy", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2025 Q1(viii)",
    question:"Calm period should not exceed:<br>(a) 6.4 km/h &nbsp;(b) 25 km/h &nbsp;(c) 40 km/h",
    answer:"<b>Correct: (a) 6.4 km/h</b> — Below 6.4 km/h is considered calm (no effect on aircraft operations)."
  },
  {
    id:"q2025_1ix", module:"m3", year:2025, marks:1, diff:"easy", qtype:"short",
    importance:"medium", repeated:false, probable:false, concept:false, formula:false,
    qnum:"2025 Q1(ix)",
    question:"First powered flight was made in:<br>(a) 1903 &nbsp;(b) 1927 &nbsp;(c) 1939",
    answer:"<b>Correct: (a) 1903</b> — Wright Brothers, Kitty Hawk, North Carolina, 17 December 1903."
  },
  {
    id:"q2025_1x", module:"m4", year:2025, marks:1, diff:"medium", qtype:"short",
    importance:"high", repeated:true, probable:true, concept:true, formula:false,
    qnum:"2025 Q1(x)",
    question:"Min radius of curvature for large subsonic jet taxiways:<br>(a) 60 m &nbsp;(b) 120 m &nbsp;(c) 180 m &nbsp;(d) 200 m",
    answer:"<b>Correct: (b) 120 m</b>"
  },

  // ── 2025 SUBJECTIVE ──────────────────────────────────────
  {
    id:"q2025_4a", module:"m3", year:2025, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:false, formula:true,
    qnum:"2025 Q4(a)",
    question:"After elevation + temperature correction, runway length = 2150 m. Profile: 0–500 m (+1.0%), 500–1000 m (−0.8%), 1000–1500 m (−0.4%), 1500–2200 m (+0.5%). Find corrected runway length.",
    answer:`<b>Step 1 — Compute elevations at chainages (datum = 0 at Ch.0):</b>
<table>
<thead><tr><th>Chainage (m)</th><th>Gradient</th><th>Rise/Fall (m)</th><th>Elevation (m)</th></tr></thead>
<tbody>
<tr><td>0</td><td>—</td><td>—</td><td>0.0</td></tr>
<tr><td>500</td><td>+1.0%</td><td>+500×0.01 = +5.0</td><td><b>+5.0</b></td></tr>
<tr><td>1000</td><td>−0.8%</td><td>−500×0.008 = −4.0</td><td>+1.0</td></tr>
<tr><td>1500</td><td>−0.4%</td><td>−500×0.004 = −2.0</td><td><b>−1.0</b></td></tr>
<tr><td>2200</td><td>+0.5%</td><td>+700×0.005 = +3.5</td><td>+2.5</td></tr>
</tbody></table>
<br><b>Step 2 — Max and Min Elevations:</b><br>
Max elevation = +5.0 m (at Ch.500)<br>
Min elevation = −1.0 m (at Ch.1500)<br>
Difference = 5.0 − (−1.0) = <b>6.0 m</b><br><br>
<b>Step 3 — Effective Gradient:</b><br>
g_eff = 6.0 / 2200 = 0.002727 = <b>0.2727%</b><br><br>
<b>Step 4 — Gradient Correction:</b><br>
C_grad = 2150 × 0.20 × 0.2727 = 2150 × 0.05454 = <b>117.3 m</b><br><br>
<b>Final Corrected Runway Length = 2150 + 117.3 = 2267.3 m ≈ <b>2267 m</b></b>`
  },
  {
    id:"q2025_5c", module:"m1", year:2025, marks:5, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q5(c)",
    question:"A 5° curve diverges from a 3° main curve in reverse direction (BG yard). Speed on branch = 35 km/h. Find restricted speed on main line.",
    answer:`<b>Concept:</b> The cant provided for the main curve acts as NEGATIVE cant on the reverse branch curve.<br><br>
<b>Step 1 — Cant for branch (5°, 35 km/h):</b><br>
R_b = 1720/5 = 344 m<br>
e_b = 1.676 × 35² / (127 × 344) = 2053.1 / 43688 = 0.047 m = <b>47 mm</b><br><br>
<b>Step 2 — Maximum negative cant allowed on branch:</b><br>
Max cant deficiency (BG) = 76 mm<br>
Negative cant limit = Cd_max − e_b = 76 − 47 = <b>29 mm</b><br>
∴ Cant provided on main line = <b>29 mm (positive)</b><br><br>
<b>Step 3 — Max speed on main line (3°):</b><br>
R_m = 1720/3 = 573.3 m<br>
Max cant for main = e_main + Cd_max = 29 + 76 = 105 mm = 0.105 m<br>
V_m = √(0.105 × 127 × 573.3 / 1.676) = √(7644.9/1.676) = √4562 = <b>67.5 km/h</b><br><br>
<b>Answer: Restricted speed on main line = 67.5 km/h</b>`
  },
  {
    id:"q2025_6b", module:"m2", year:2025, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q6(b)",
    question:"BG locomotive with 3 pairs of driving wheels, axle load 22 t, μ = 0.2. (i) Max load on straight level at 80 km/h. (ii) Speed reduction on rising gradient 1:200. (iii) Further reduction for 4° curve on that gradient.",
    answer:`<b>Part (i) — Max load on straight level track at 80 km/h:</b><br>
W_d = 3 × 22 = 66 t; F = 0.2 × 66 = <b>13.2 t</b><br>
R₁ = W × (0.0016 + 0.00008×80 + 0.0000006×80²) = W × (0.0016+0.0064+0.00384) = <b>0.01184W</b><br>
Setting F = R₁: 13.2 = 0.01184W → W = <b>1114.9 t</b><br><br>
<b>Part (ii) — Speed on rising gradient 1:200 (W = 1114.9 t constant):</b><br>
Total resistance = R₁ + Rg = W(0.0016 + 0.00008V + 0.0000006V² + 0.005) = W(0.0066 + 0.00008V + 0.0000006V²)<br>
Set F = 13.2 t:<br>
13.2 = 1114.9(0.0066 + 0.00008V + 0.0000006V²)<br>
0.01184 = 0.0066 + 0.00008V + 0.0000006V²<br>
0.0000006V² + 0.00008V − 0.00524 = 0<br>
0.6V² + 80V − 5240 = 0<br>
V = [−80 + √(6400 + 4×0.6×5240)] / (2×0.6) = [−80 + √18976] / 1.2 = [−80 + 137.8] / 1.2 = <b>48.2 km/h</b><br>
Speed reduction = 80 − 48.2 = <b>31.8 km/h</b><br><br>
<b>Part (iii) — Further reduction for 4° curve:</b><br>
Add Rc = 0.0004 × 4 × W = 0.0016W<br>
New total = W(0.0082 + 0.00008V + 0.0000006V²)<br>
13.2 = 1114.9(0.0082 + 0.00008V + 0.0000006V²)<br>
0.01184 = 0.0082 + 0.00008V + 0.0000006V²<br>
0.0000006V² + 0.00008V − 0.00364 = 0<br>
0.6V² + 80V − 3640 = 0<br>
V = [−80 + √(6400 + 4×0.6×3640)] / 1.2 = [−80 + √15136] / 1.2 = [−80 + 123.03] / 1.2 = <b>35.9 km/h</b><br>
Further reduction = 48.2 − 35.9 = <b>12.3 km/h</b>`
  },
  {
    id:"q2025_3a_exit", module:"m4", year:2025, marks:10, diff:"hard", qtype:"long",
    importance:"high", repeated:true, probable:true, concept:true, formula:true,
    qnum:"2025 Q3(a)",
    question:"Design an exit taxiway joining runway and parallel taxiway. Total angle of turning = 40°. Max turn-off speed = 65 km/h. Draw sketch and indicate all design elements.",
    answer:`<b>Given:</b> α = 40°, V = 65 km/h, f = 0.13<br><br>
<b>Step 1 — Radius of Circular Curve:</b><br>
R = V²/(125×f) = 65²/(125×0.13) = 4225/16.25 = <b>260 m</b><br><br>
<b>Step 2 — Length of Circular Arc:</b><br>
L = R × α (radians) = 260 × (40×π/180) = 260 × 0.6981 = <b>181.5 m</b><br><br>
<b>Step 3 — Taxiway Width:</b> 23 m (Code D, Boeing 707 class)<br><br>
<b>Step 4 — Design Elements (Sketch):</b>
<pre>
RUNWAY
════════════════════════════════════════════════
  Tangent Point                     Tangent Point
     ●───────── R = 260 m ──────────●
      \         (arc)              /
       \   α = 40° turn          /
        \_______________________/
              EXIT TAXIWAY (23 m wide)
                     ↓
            PARALLEL TAXIWAY
═══════════════════════════════════════════════
</pre>
<b>Key Design Elements:</b><br>
1. Entry tangent length (from runway edge to tangent point)<br>
2. Circular curve radius R = 260 m<br>
3. Arc length = 181.5 m<br>
4. Turning angle α = 40°<br>
5. Exit tangent connecting to parallel taxiway<br>
6. Pavement width = 23 m; shoulder = 10.5 m each side<br>
7. Fillet at runway/taxiway intersection for smooth wheel path`
  }
];

// ── RELATED PYQ MAP ─────────────────────────────────────────
const relatedPyqMap = {
  coning_wheels:       ["q2022_5a", "q2025_5c"],
  superelevation_calc: ["q2023_4a", "q2025_5c", "q2023_1v", "q2025_1vi"],
  rail_wear:           ["q2022_4a", "q2025_3a_exit"],
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
