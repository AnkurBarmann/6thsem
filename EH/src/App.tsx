import { useState, useEffect, useRef } from 'react';
import { questionsDB, relatedPyqMap, modulesData, Question } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('priority');
  
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  
  // Smart checkbox states
  const [filterRepeated, setFilterRepeated] = useState<boolean>(false);
  const [filterImportant, setFilterImportant] = useState<boolean>(false);
  const [filterProbable, setFilterProbable] = useState<boolean>(false);
  const [filterConceptual, setFilterConceptual] = useState<boolean>(false);
  const [filterFormula, setFilterFormula] = useState<boolean>(false);
  
  // Sorting State
  const [sortBy, setSortBy] = useState<string>('year-desc');

  // Modal State
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Smart Syllabus checklist state
  const [syllabusChecklist, setSyllabusChecklist] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem('astu_hydrology_syllabus_checklist');
    return saved ? JSON.parse(saved) : {};
  });

  // Timetable daily checklist state
  const [timetableChecklist, setTimetableChecklist] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem('astu_hydrology_timetable_checklist');
    return saved ? JSON.parse(saved) : {};
  });

  // Save checklist states
  useEffect(() => {
    localStorage.setItem('astu_hydrology_syllabus_checklist', JSON.stringify(syllabusChecklist));
  }, [syllabusChecklist]);

  useEffect(() => {
    localStorage.setItem('astu_hydrology_timetable_checklist', JSON.stringify(timetableChecklist));
  }, [timetableChecklist]);

  // Modal and Ref for KaTeX auto-rendering
  const modalContentRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Function to trigger KaTeX rendering in a container
  const triggerKaTeX = (element: HTMLElement | null) => {
    if (!element) return;
    setTimeout(() => {
      if ((window as any).renderMathInElement) {
        (window as any).renderMathInElement(element, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      }
    }, 50);
  };

  // Trigger KaTeX when tab changes or modal opens
  useEffect(() => {
    triggerKaTeX(cardsContainerRef.current);
  }, [
    activeTab, 
    searchTerm, 
    selectedModule, 
    selectedYear, 
    selectedDifficulty, 
    selectedType,
    filterRepeated,
    filterImportant,
    filterProbable,
    filterConceptual,
    filterFormula,
    sortBy
  ]);

  useEffect(() => {
    if (selectedQuestion) {
      triggerKaTeX(modalContentRef.current);
    }
  }, [selectedQuestion, zoomLevel]);

  // Handle syllabus toggle
  const toggleSyllabusItem = (id: string) => {
    setSyllabusChecklist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle timetable day toggle
  const toggleTimetableDay = (day: string) => {
    setTimetableChecklist(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedModule('all');
    setSelectedYear('all');
    setSelectedDifficulty('all');
    setSelectedType('all');
    setFilterRepeated(false);
    setFilterImportant(false);
    setFilterProbable(false);
    setFilterConceptual(false);
    setFilterFormula(false);
    setSortBy('year-desc');
  };

  // Navigate from Priority Matrix/PYQ Frequency to PYQ Bank with pre-applied filter
  const navigateToPyqFilter = (filterType: string, value: string) => {
    handleResetFilters();
    if (filterType === 'module') {
      setSelectedModule(value);
    } else if (filterType === 'concept') {
      setSearchTerm(value);
    } else if (filterType === 'year') {
      setSelectedYear(value);
    } else if (filterType === 'repeated') {
      setFilterRepeated(true);
    }
    setActiveTab('pyq-bank');
  };

  // Copy helper
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const handleCopyToClipboard = (text: string, type: 'Q' | 'A') => {
    const plainText = text.replace(/<[^>]*>/g, ''); // strip HTML tags for clipboard
    navigator.clipboard.writeText(plainText).then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  // Math Zoom Controls
  const adjustZoom = (amount: number) => {
    setZoomLevel(prev => Math.max(70, Math.min(200, prev + amount)));
  };

  const resetZoom = () => setZoomLevel(100);

  // Filter & Sort Logic
  const filteredQuestions = questionsDB.filter(q => {
    // Search match (question, answer, concept, formula)
    const matchesSearch = searchTerm.trim() === '' || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.formula.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesModule = selectedModule === 'all' || q.module.toString() === selectedModule;
    const matchesYear = selectedYear === 'all' || q.year.toString() === selectedYear;
    const matchesDifficulty = selectedDifficulty === 'all' || q.diff === selectedDifficulty;
    const matchesType = selectedType === 'all' || q.qtype === selectedType;

    // Checkboxes logic
    const matchesRepeated = !filterRepeated || q.repeated;
    const matchesImportant = !filterImportant || q.importance === 'High';
    const matchesProbable = !filterProbable || q.probable;
    const matchesConceptual = !filterConceptual || q.qtype === 'Theory';
    const matchesFormula = !filterFormula || q.qtype === 'Numerical';

    return matchesSearch && matchesModule && matchesYear && matchesDifficulty && matchesType &&
           matchesRepeated && matchesImportant && matchesProbable && matchesConceptual && matchesFormula;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
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

  // Calculate Syllabus Completion Gauge
  const syllabusTopics = [
    { id: 'sb-phi', text: 'Φ-index & infiltration calculation', cat: 'must-study' },
    { id: 'sb-musk', text: 'Muskingum flood routing & table', cat: 'must-study' },
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

  const totalSyllabus = syllabusTopics.length;
  const completedSyllabus = syllabusTopics.filter(item => syllabusChecklist[item.id]).length;
  const percentCompleted = totalSyllabus > 0 ? Math.round((completedSyllabus / totalSyllabus) * 100) : 0;

  // 14-Day intensive timetable schedule
  const timetableDays = [
    { day: 'Day 1', module: 'Mod 1 & 2', topic: 'Precipitation Forms & Humidity', details: 'Precipitation types (convective, orographic), Dew point, relative and specific humidity formulas.', practice: 'Humidity calculations (2024 Q2b, 2025 Q2b)' },
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

  const totalDays = timetableDays.length;
  const completedDays = timetableDays.filter(d => timetableChecklist[d.day]).length;
  const timetablePercent = Math.round((completedDays / totalDays) * 100);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-[#1a1510]">
      
      {/* --- PREMIUM HEADER --- */}
      <header className="sticky top-0 z-40 bg-[#fffdf8] border-b border-[#e7dfd3] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#b45309] text-white rounded-xl shadow-md">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#b45309]">ASTU EXAM PORTAL</h1>
                <span className="bg-[#fef3c7] text-[#92400e] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#f59e0b]">OFFLINE APP</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-mono">CE-301: Engineering Hydrology &bull; Sem 5/6 Civil</p>
            </div>
          </div>

          {/* Quick Progress Bar */}
          <div className="flex items-center gap-4 bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3] self-stretch md:self-auto">
            <div className="text-right">
              <div className="text-xs text-slate-500">Syllabus Covered</div>
              <div className="text-sm font-bold text-[#b45309]">{completedSyllabus}/{totalSyllabus} Topics ({percentCompleted}%)</div>
            </div>
            <div className="w-24 bg-[#e7dfd3] h-2.5 rounded-full overflow-hidden">
              <div className="bg-[#b45309] h-full rounded-full transition-all duration-300" style={{ width: `${percentCompleted}%` }}></div>
            </div>
          </div>
        </div>

        {/* --- STICKY TABS --- */}
        <div className="bg-[#fdfbfa] border-t border-[#e7dfd3] overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 flex space-x-1 sm:space-x-2 py-2">
            {[
              { id: 'priority', label: '📊 Priority Matrix' },
              { id: 'frequency', label: '📈 PYQ Frequency' },
              { id: 'strategy', label: '📚 Module Strategy' },
              { id: 'timetable', label: '🗓️ Timetable (14-Day)' },
              { id: 'pyq-bank', label: '📝 PYQ Bank' },
              { id: 'syllabus', label: '🎯 Smart Syllabus' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#b45309] text-white shadow-sm'
                    : 'text-[#1a1510] hover:bg-[#f5f0e8] hover:text-[#b45309]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ============================================================== */}
        {/* TAB 1: PRIORITY MATRIX */}
        {/* ============================================================== */}
        {activeTab === 'priority' && (
          <div className="space-y-6">
            <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#b45309] mb-2">🎯 Strategic Priority Matrix</h2>
              <p className="text-sm text-slate-600">
                Analysis of the past 4 years of exam questions shows that <b>~60% of all marks</b> are concentrated in just 6 key numerical topics. Focus your study efforts where they generate the highest yield.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* HIGH PRIORITY */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border-l-4 border-l-red-500 border border-[#e7dfd3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-red-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                      🔴 HIGH PRIORITY
                    </h3>
                    <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-bold border border-red-200">~60% of Marks</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">Master these immediately. Must practice step-by-step calculations.</p>
                  
                  <div className="space-y-3">
                    {[
                      { topic: 'Φ-index & Infiltration', detail: 'Horton infiltration curves & precipitation losses.', query: 'phi-index' },
                      { topic: 'Muskingum Channel Routing', detail: 'Routing tables, C0/C1/C2 coefficients.', query: 'Muskingum' },
                      { topic: 'S-Curve & UH Conversion', detail: 'Deriving D-hr to T-hr unit hydrographs.', query: 'S-curve' },
                      { topic: 'Snyder\'s Synthetic UH', detail: 'Regional lag and peak discharge equations.', query: 'Snyder' },
                      { topic: 'Gumbel\'s Flood Frequency', detail: 'Return periods (50, 100, 200, 500yr).', query: 'Gumbel' },
                      { topic: 'Raingauge network adequacy', detail: 'm-station error variance & additions.', query: 'adequacy' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3] flex justify-between items-center hover:border-[#b45309] transition-all">
                        <div>
                          <div className="text-sm font-semibold text-[#1a1510]">{item.topic}</div>
                          <div className="text-xs text-slate-500">{item.detail}</div>
                        </div>
                        <button
                          onClick={() => navigateToPyqFilter('concept', item.query)}
                          className="bg-red-50 hover:bg-red-100 text-red-700 text-xs px-2.5 py-1.5 rounded font-medium border border-red-200"
                        >
                          View PYQs
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e7dfd3]">
                  <div className="text-xs text-slate-400 font-mono">Verdict: Non-negotiable for passing.</div>
                </div>
              </div>

              {/* MEDIUM PRIORITY */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border-l-4 border-l-amber-500 border border-[#e7dfd3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-amber-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      🟡 MEDIUM PRIORITY
                    </h3>
                    <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-bold border border-amber-200">~25% of Marks</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">Study after mastering High Priority. Solidifies passing margin.</p>
                  
                  <div className="space-y-3">
                    {[
                      { topic: 'Reservoir Evaporation', detail: 'Water budget & Energy budget methods.', query: 'evaporation' },
                      { topic: 'Atmospheric Humidity', detail: 'Relative & specific humidity from dew point.', query: 'humidity' },
                      { topic: 'Double Mass Curve consistency', detail: 'Testing and correcting rainfall records.', query: 'Double mass' },
                      { topic: 'Rational Method peak flow', detail: 'Culvert design & time of concentration.', query: 'Rational' },
                      { topic: 'Base flow separation', detail: 'Straight line, 2-line & 3-curve methods.', query: 'separation' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3] flex justify-between items-center hover:border-[#b45309] transition-all">
                        <div>
                          <div className="text-sm font-semibold text-[#1a1510]">{item.topic}</div>
                          <div className="text-xs text-slate-500">{item.detail}</div>
                        </div>
                        <button
                          onClick={() => navigateToPyqFilter('concept', item.query)}
                          className="bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs px-2.5 py-1.5 rounded font-medium border border-amber-200"
                        >
                          View PYQs
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e7dfd3]">
                  <div className="text-xs text-slate-400 font-mono">Verdict: Elevates grade to Distinction.</div>
                </div>
              </div>

              {/* LOW PRIORITY */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border-l-4 border-l-green-600 border border-[#e7dfd3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-green-700 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
                      🟢 LOW / SKIM PRIORITY
                    </h3>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-bold border border-green-200">~15% of Marks</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">Theoretical topics and descriptive details. Skim before the exam.</p>
                  
                  <div className="space-y-3">
                    {[
                      { topic: 'Precipitation Forms & Types', detail: 'Standard classifications, definitions.', query: 'precipitation' },
                      { topic: 'Hydrologic Cycle Components', detail: 'Schematic representation & global water budget.', query: 'hydrologic' },
                      { topic: 'Flow dependability curve', detail: 'Flow-duration curve properties & storage.', query: 'duration' },
                      { topic: 'Annual vs Partial series', detail: 'Peak flood calculation theory.', query: 'series' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3] flex justify-between items-center hover:border-[#b45309] transition-all">
                        <div>
                          <div className="text-sm font-semibold text-[#1a1510]">{item.topic}</div>
                          <div className="text-xs text-slate-500">{item.detail}</div>
                        </div>
                        <button
                          onClick={() => navigateToPyqFilter('concept', item.query)}
                          className="bg-green-50 hover:bg-green-100 text-green-700 text-xs px-2.5 py-1.5 rounded font-medium border border-green-200"
                        >
                          View PYQs
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e7dfd3]">
                  <div className="text-xs text-slate-400 font-mono">Verdict: Minimal preparation needed.</div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: PYQ FREQUENCY ANALYSIS */}
        {/* ============================================================== */}
        {activeTab === 'frequency' && (
          <div className="space-y-6">
            <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#b45309] mb-2">📈 Year-wise Marks & Frequency Matrix</h2>
              <p className="text-sm text-slate-600">
                Detailed breakdown of marks allocated to each syllabus module over the last four years. Use this chart to determine high-yield focus areas.
              </p>
            </div>

            <div className="bg-[#fffdf8] rounded-xl border border-[#e7dfd3] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#e7dfd3] text-left">
                  <thead className="bg-[#fcf9f4]">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Module</th>
                      <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">2022</th>
                      <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">2023</th>
                      <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">2024</th>
                      <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">2025</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Verdict Badge</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Explore</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#e7dfd3] text-sm">
                    {[
                      { mod: 1, name: 'Mod 1: Introduction', y22: '1m', y23: '5m', y24: '1m', y25: '5m', verdict: 'Minimal Theory', color: 'bg-green-50 text-green-700 border-green-200' },
                      { mod: 2, name: 'Mod 2: Weather & Precipitation', y22: '17m', y23: '17m', y24: '11m', y25: '11m', verdict: 'Highly Recommended', color: 'bg-red-50 text-red-700 border-red-200' },
                      { mod: 3, name: 'Mod 3: Infiltration', y22: '16m', y23: '16m', y24: '11m', y25: '12m', verdict: 'Core Numerical Focus', color: 'bg-red-50 text-red-700 border-red-200' },
                      { mod: 4, name: 'Mod 4: Evapotranspiration', y22: '1m', y23: '16m', y24: '10m', y25: '7m', verdict: 'Evaporation Focus', color: 'bg-amber-50 text-amber-700 border-amber-200' },
                      { mod: 5, name: 'Mod 5: Runoff', y22: '9m', y23: '1m', y24: '3m', y25: '10m', verdict: 'Theory & Calculations', color: 'bg-amber-50 text-amber-700 border-amber-200' },
                      { mod: 6, name: 'Mod 6: Hydrograph', y22: '24m', y23: '16m', y24: '26m', y25: '22m', verdict: 'Supreme High Yield', color: 'bg-red-50 text-red-700 border-red-200' },
                      { mod: 7, name: 'Mod 7: Flood Estimation', y22: '16m', y23: '16m', y24: '10m', y25: '13m', verdict: 'Core Mathematical Focus', color: 'bg-red-50 text-red-700 border-red-200' },
                      { mod: 8, name: 'Mod 8: Flood Routing', y22: '16m', y23: '11m', y24: '12m', y25: '16m', verdict: 'Routing Calculations', color: 'bg-red-50 text-red-700 border-red-200' },
                    ].map(row => (
                      <tr key={row.mod} className="hover:bg-[#fdfbfa] transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1a1510]">{row.name}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-center font-mono">{row.y22}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-center font-mono">{row.y23}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-center font-mono">{row.y24}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-center font-mono">{row.y25}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${row.color}`}>
                            {row.verdict}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <button
                            onClick={() => navigateToPyqFilter('module', row.mod.toString())}
                            className="text-[#b45309] hover:text-[#92400e] text-xs font-semibold flex items-center justify-center gap-1 mx-auto"
                          >
                            Browse PYQs &rarr;
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: MODULE STRATEGY */}
        {/* ============================================================== */}
        {activeTab === 'strategy' && (
          <div className="space-y-6">
            <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#b45309] mb-2">📚 Module-level Strategy Guide</h2>
              <p className="text-sm text-slate-600">
                Actionable guidelines to direct your revision time. Know what to Master, Skim, and Skip based on previous year frequency analysis.
              </p>
            </div>

            <div className="space-y-4">
              {modulesData.map(mod => (
                <div key={mod.id} className="bg-[#fffdf8] rounded-xl border border-[#e7dfd3] overflow-hidden shadow-sm">
                  {/* Collapsible header */}
                  <div className="bg-[#fcf9f4] px-6 py-4 border-b border-[#e7dfd3] flex justify-between items-center">
                    <div>
                      <h3 className="text-md sm:text-lg font-bold text-[#b45309]">Module {mod.id}: {mod.name}</h3>
                      <p className="text-xs text-slate-500">{mod.desc}</p>
                    </div>
                    <span className="bg-[#fffdf8] border border-[#e7dfd3] px-3 py-1 rounded-lg text-xs font-semibold font-mono">
                      Weightage: {mod.weight}
                    </span>
                  </div>

                  {/* Body strategies */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Master Column */}
                    <div className="bg-red-50/30 p-4 rounded-lg border border-red-100">
                      <h4 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                        🎓 Master (Core Focus)
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {mod.id === 1 && "Basic schematic representation of the Hydrologic cycle."}
                        {mod.id === 2 && "Precipitation data calculations: station network adequacy, average precipitation using Thiessen polygon, double mass curve adjustment."}
                        {mod.id === 3 && "Horton's infiltration curves (decay coefficient 'k' parameters) and W & Φ infiltration indices."}
                        {mod.id === 4 && "Evaporation water budget calculations; reservoir seepage estimation; energy budget principles."}
                        {mod.id === 5 && "Direct surface runoff from mass curve data; runoff coefficient mapping."}
                        {mod.id === 6 && "S-curve unit hydrograph conversions; Snyder's synthetic unit hydrograph parameters."}
                        {mod.id === 7 && "Gumbel's extreme value method for flood recurrence; Rational method peak discharge calculation."}
                        {mod.id === 8 && "Muskingum channel routing coefficients (C0, C1, C2) and table calculations."}
                      </p>
                    </div>

                    {/* Skim Column */}
                    <div className="bg-amber-50/30 p-4 rounded-lg border border-amber-100">
                      <h4 className="text-xs font-bold text-[#b45309] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        📖 Skim (Secondary Focus)
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {mod.id === 1 && "Global water budget statistics, history of hydrology."}
                        {mod.id === 2 && "Cloud precipitation mechanisms, forms of precipitation definitions (Glaze, Sleet, Hail)."}
                        {mod.id === 3 && "Double ring infiltrometer operation and factors affecting soil infiltration."}
                        {mod.id === 4 && "Meyer's equation, Blaney-Criddle formula, Lysimeter usage."}
                        {mod.id === 5 && "Flow-duration curve properties, stream order and density definitions."}
                        {mod.id === 6 && "Base flow separation methods (straight line, two-line, three-curve)."}
                        {mod.id === 7 && "Annual duration series vs partial duration series; envelope curves."}
                        {mod.id === 8 && "Level pool reservoir routing concepts (Modified Pul's method)."}
                      </p>
                    </div>

                    {/* Skip Column */}
                    <div className="bg-green-50/20 p-4 rounded-lg border border-green-100">
                      <h4 className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        ⚠️ Skip (Low Priority)
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {mod.id === 1 && "Non-examinable timeline details."}
                        {mod.id === 2 && "Radar measurement calculation detail."}
                        {mod.id === 3 && "Complex infiltrometer calibration calculations."}
                        {mod.id === 4 && "Thornthwaite equation complex calculations."}
                        {mod.id === 5 && "Hydrologic runoff empirical formulas."}
                        {mod.id === 6 && "Advanced Instantaneous UH derivations."}
                        {mod.id === 7 && "Log-Pearson Type III complex tables."}
                        {mod.id === 8 && "Detailed derivation of Saint-Venant momentum equations."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: TIMETABLE */}
        {/* ============================================================== */}
        {activeTab === 'timetable' && (
          <div className="space-y-6">
            <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#b45309] mb-2">🗓️ 14-Day Intensive Revision Plan</h2>
                <p className="text-sm text-slate-600">
                  Targeted daily preparation leading to the exam. Follow this plan to ensure comprehensive numerical coverage.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3]">
                <div className="text-right">
                  <div className="text-xs text-slate-500">Timetable Progress</div>
                  <div className="text-sm font-bold text-[#b45309]">{completedDays}/{totalDays} Days ({timetablePercent}%)</div>
                </div>
                <div className="w-24 bg-[#e7dfd3] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#b45309] h-full rounded-full transition-all duration-300" style={{ width: `${timetablePercent}%` }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timetableDays.map((day, idx) => (
                <div 
                  key={idx} 
                  className={`bg-[#fffdf8] p-5 rounded-xl border border-[#e7dfd3] shadow-sm flex items-start gap-4 transition-all ${
                    timetableChecklist[day.day] ? 'bg-[#fdfbfa]/60 opacity-70 border-dashed' : ''
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={timetableChecklist[day.day] || false}
                    onChange={() => toggleTimetableDay(day.day)}
                    className="mt-1 w-5 h-5 accent-[#b45309] border-[#e7dfd3] rounded cursor-pointer"
                  />
                  <div className="flex-1 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="bg-[#fef3c7] text-[#92400e] text-xs font-bold px-2 py-0.5 rounded border border-[#f59e0b] font-mono">
                        {day.day}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{day.module}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1a1510]">{day.topic}</h3>
                    <p className="text-xs text-slate-600">{day.details}</p>
                    <div className="bg-[#eff6ff] text-[#1e3a8a] text-xs p-2.5 rounded border border-blue-100 flex flex-col gap-1">
                      <span className="font-bold flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Practice Target
                      </span>
                      <span>{day.practice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 5: PYQ BANK */}
        {/* ============================================================== */}
        {activeTab === 'pyq-bank' && (
          <div className="space-y-6">
            
            {/* Filters Bar */}
            <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#b45309]">📝 Previous Year Questions Bank</h2>
                <div className="text-xs text-slate-500 font-mono">
                  Showing <b>{sortedQuestions.length}</b> of <b>{questionsDB.length}</b> PYQs
                </div>
              </div>

              {/* Search and Select Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                <div className="relative col-span-1 sm:col-span-2 md:col-span-1">
                  <input
                    type="text"
                    placeholder="Search concept/question..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#fdfbfa] border border-[#e7dfd3] px-3 py-2 text-xs rounded-lg focus:outline-none focus:border-[#b45309] font-medium"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-sm font-bold"
                    >
                      &times;
                    </button>
                  )}
                </div>

                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="bg-[#fdfbfa] border border-[#e7dfd3] px-3 py-2 text-xs rounded-lg focus:outline-none focus:border-[#b45309] font-medium"
                >
                  <option value="all">All Modules</option>
                  <option value="1">Mod 1: Intro</option>
                  <option value="2">Mod 2: Precip</option>
                  <option value="3">Mod 3: Infilt</option>
                  <option value="4">Mod 4: Evap</option>
                  <option value="5">Mod 5: Runoff</option>
                  <option value="6">Mod 6: Hydr</option>
                  <option value="7">Mod 7: Flood</option>
                  <option value="8">Mod 8: Rout</option>
                </select>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-[#fdfbfa] border border-[#e7dfd3] px-3 py-2 text-xs rounded-lg focus:outline-none focus:border-[#b45309] font-medium"
                >
                  <option value="all">All Years</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="bg-[#fdfbfa] border border-[#e7dfd3] px-3 py-2 text-xs rounded-lg focus:outline-none focus:border-[#b45309] font-medium"
                >
                  <option value="all">All Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-[#fdfbfa] border border-[#e7dfd3] px-3 py-2 text-xs rounded-lg focus:outline-none focus:border-[#b45309] font-medium"
                >
                  <option value="all">All Types</option>
                  <option value="MCQ">MCQ</option>
                  <option value="Theory">Theory</option>
                  <option value="Numerical">Numerical</option>
                </select>
              </div>

              {/* Checkbox filters */}
              <div className="flex flex-wrap items-center gap-4 bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3]">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Smart Filters:</span>
                {[
                  { label: '🔥 Repeated', state: filterRepeated, setter: setFilterRepeated },
                  { label: '🎯 High Importance', state: filterImportant, setter: setFilterImportant },
                  { label: '🔮 Probable 2026', state: filterProbable, setter: setFilterProbable },
                  { label: '💡 Conceptual', state: filterConceptual, setter: setFilterConceptual },
                  { label: '🧮 Formula-Heavy', state: filterFormula, setter: setFilterFormula },
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2 text-xs font-medium cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={item.state} 
                      onChange={(e) => item.setter(e.target.checked)}
                      className="w-4 h-4 accent-[#b45309] border-[#e7dfd3] rounded"
                    />
                    {item.label}
                  </label>
                ))}
              </div>

              {/* Sorting and Reset */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#fdfbfa] border border-[#e7dfd3] px-3 py-1.5 text-xs rounded-lg focus:outline-none focus:border-[#b45309] font-medium"
                  >
                    <option value="year-desc">Year (Newest)</option>
                    <option value="year-asc">Year (Oldest)</option>
                    <option value="marks-desc">Marks (High to Low)</option>
                    <option value="marks-asc">Marks (Low to High)</option>
                    <option value="diff-desc">Difficulty (Hard to Easy)</option>
                    <option value="diff-asc">Difficulty (Easy to Hard)</option>
                  </select>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="bg-[#f5f0e8] hover:bg-[#e7dfd3] text-slate-700 text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all border border-[#e7dfd3]"
                >
                  Reset All Filters
                </button>
              </div>
            </div>

            {/* Questions Grid */}
            <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedQuestions.length > 0 ? (
                sortedQuestions.map(q => (
                  <div key={q.id} className="bg-[#fffdf8] rounded-xl border border-[#e7dfd3] shadow-sm flex flex-col justify-between hover:border-[#b45309] transition-all group">
                    <div className="p-5 space-y-4">
                      {/* Badge bar */}
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="bg-[#b45309] text-white text-xxs font-bold px-2 py-0.5 rounded font-mono uppercase">
                            {q.year}
                          </span>
                          <span className="bg-slate-100 text-slate-700 text-xxs font-bold px-2 py-0.5 rounded border border-slate-200">
                            {q.marks} Marks
                          </span>
                          <span className="bg-[#fdfbfa] border border-[#e7dfd3] text-slate-500 text-xxs font-semibold px-2 py-0.5 rounded">
                            Mod {q.module}
                          </span>
                        </div>
                        <span className={`text-xxs font-bold px-2 py-0.5 rounded-full border ${
                          q.diff === 'Hard' ? 'bg-red-50 text-red-700 border-red-200' :
                          q.diff === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          'bg-green-50 text-green-700 border-green-200'
                        }`}>
                          {q.diff}
                        </span>
                      </div>

                      {/* Question Text */}
                      <div className="space-y-2">
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">{q.qnum}</div>
                        <div 
                          className="text-sm font-semibold text-[#1a1510] leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all"
                          dangerouslySetInnerHTML={{ __html: q.question }}
                        />
                      </div>

                      {/* Quick Hint Box */}
                      <div className="bg-[#eff6ff] text-[#1e3a8a] text-xs p-3 rounded-lg border border-blue-100 flex items-start gap-2">
                        <span className="mt-0.5">💡</span>
                        <div className="space-y-0.5">
                          <div className="font-bold">Quick Hint:</div>
                          <div className="text-[11px] leading-relaxed">
                            {q.id.includes('phi') ? "Identify rain hours where intensity exceeds Φ. Infiltration rate = P - R." : ""}
                            {q.id.includes('musk') ? "C0 + C1 + C2 must equal 1. Outflow matches storage lag." : ""}
                            {q.id.includes('scurve') ? "Accumulate S-curve values by lagging unit hydrographs." : ""}
                            {q.id.includes('snyder') ? "Use t_p = C_t * (L * L_ca)^0.3 and adjust for t_R lag." : ""}
                            {q.id.includes('gumbel') ? "Reduced variate is y_T = -ln(-ln(1 - 1/T))." : ""}
                            {q.id.includes('evap') ? "Volumes must match weekly seconds and reservoir area." : ""}
                            {q.id.includes('humidity') ? "Saturation pressure uses dry bulb; actual uses dew point." : ""}
                            {q.id.includes('adequacy') ? "Standard error formula is E_s = C_v / sqrt(m)." : ""}
                            {!q.id.includes('phi') && !q.id.includes('musk') && !q.id.includes('scurve') && !q.id.includes('snyder') && !q.id.includes('gumbel') && !q.id.includes('evap') && !q.id.includes('humidity') && !q.id.includes('adequacy') && "Focus on clear sketches and core hydrograph/precipitation definitions."}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 border-t border-[#e7dfd3] bg-[#fdfbfa] rounded-b-xl flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {q.repeated && (
                          <span className="text-xxs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                            Repeated
                          </span>
                        )}
                        {q.probable && (
                          <span className="text-xxs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                            Probable 2026
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedQuestion(q)}
                        className="bg-[#b45309] hover:bg-[#92400e] text-white text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all shadow-sm"
                      >
                        📖 View Solution
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full bg-[#fffdf8] p-12 text-center rounded-xl border border-[#e7dfd3]">
                  <div className="text-2xl mb-2">🔍</div>
                  <h3 className="text-lg font-bold text-slate-800">No Questions Found</h3>
                  <p className="text-xs text-slate-500">Try adjusting your filters or search query.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 6: SMART SYLLABUS */}
        {/* ============================================================== */}
        {activeTab === 'syllabus' && (
          <div className="space-y-6">
            <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#b45309] mb-2">🎯 Smart Syllabus Checklist</h2>
                <p className="text-sm text-slate-600">
                  Track your understanding of individual key syllabus items. Syncs with your local browser storage.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-[#fcf9f4] p-3 rounded-lg border border-[#e7dfd3]">
                <div className="text-right">
                  <div className="text-xs text-slate-500">Syllabus Covered</div>
                  <div className="text-sm font-bold text-[#b45309]">{completedSyllabus}/{totalSyllabus} Topics ({percentCompleted}%)</div>
                </div>
                <div className="w-24 bg-[#e7dfd3] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#b45309] h-full rounded-full transition-all duration-300" style={{ width: `${percentCompleted}%` }}></div>
                </div>
              </div>
            </div>

            {/* Checklist categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Must study */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7dfd3] pb-3">
                  <h3 className="text-base font-bold text-red-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    Must Study (Immediate Focus)
                  </h3>
                  <span className="text-xxs bg-red-50 text-red-700 px-2 py-0.5 rounded font-bold border border-red-200">High Yield</span>
                </div>
                <div className="space-y-3">
                  {syllabusTopics.filter(t => t.cat === 'must-study').map(item => (
                    <label key={item.id} className="flex items-start gap-3 text-sm cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={syllabusChecklist[item.id] || false}
                        onChange={() => toggleSyllabusItem(item.id)}
                        className="mt-1 w-4.5 h-4.5 accent-[#b45309] border-[#e7dfd3] rounded"
                      />
                      <span className={syllabusChecklist[item.id] ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Study */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7dfd3] pb-3">
                  <h3 className="text-base font-bold text-amber-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Study (Secondary Focus)
                  </h3>
                  <span className="text-xxs bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold border border-amber-200">Medium Yield</span>
                </div>
                <div className="space-y-3">
                  {syllabusTopics.filter(t => t.cat === 'study').map(item => (
                    <label key={item.id} className="flex items-start gap-3 text-sm cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={syllabusChecklist[item.id] || false}
                        onChange={() => toggleSyllabusItem(item.id)}
                        className="mt-1 w-4.5 h-4.5 accent-[#b45309] border-[#e7dfd3] rounded"
                      />
                      <span className={syllabusChecklist[item.id] ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skim */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7dfd3] pb-3">
                  <h3 className="text-base font-bold text-green-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                    Skim (Theoretical Only)
                  </h3>
                  <span className="text-xxs bg-green-50 text-green-700 px-2 py-0.5 rounded font-bold border border-green-200">Low Yield</span>
                </div>
                <div className="space-y-3">
                  {syllabusTopics.filter(t => t.cat === 'skim').map(item => (
                    <label key={item.id} className="flex items-start gap-3 text-sm cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={syllabusChecklist[item.id] || false}
                        onChange={() => toggleSyllabusItem(item.id)}
                        className="mt-1 w-4.5 h-4.5 accent-[#b45309] border-[#e7dfd3] rounded"
                      />
                      <span className={syllabusChecklist[item.id] ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skip */}
              <div className="bg-[#fffdf8] p-6 rounded-xl border border-[#e7dfd3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7dfd3] pb-3">
                  <h3 className="text-base font-bold text-slate-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    Skip (Non-Exam Topics)
                  </h3>
                  <span className="text-xxs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold border border-slate-200">Zero Yield</span>
                </div>
                <div className="space-y-3">
                  {syllabusTopics.filter(t => t.cat === 'skip').map(item => (
                    <label key={item.id} className="flex items-start gap-3 text-sm cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        checked={syllabusChecklist[item.id] || false}
                        onChange={() => toggleSyllabusItem(item.id)}
                        className="mt-1 w-4.5 h-4.5 accent-[#b45309] border-[#e7dfd3] rounded"
                      />
                      <span className={syllabusChecklist[item.id] ? 'line-through text-slate-400' : 'text-slate-500 font-medium'}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#fffdf8] border-t border-[#e7dfd3] py-8 text-center text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-mono">CE-301 Engineering Hydrology &bull; Assam Science and Technology University (ASTU) Exam Preparation Dashboard</p>
          <p>&copy; {new Date().getFullYear()} Exam Prep Portal. Built with React + Tailwind + KaTeX for Offline Revision.</p>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* SOLUTION MODAL CONTAINER */}
      {/* ============================================================== */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-50 bg-[#1a1510]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          <div className="bg-[#fffdf8] w-full max-w-4xl h-[92vh] sm:h-[88vh] rounded-2xl border border-[#e7dfd3] shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Top Bar / Header */}
            <div className="bg-[#fcf9f4] px-6 py-4 border-b border-[#e7dfd3] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#b45309] text-white text-xs font-bold px-2.5 py-1 rounded font-mono uppercase">
                  {selectedQuestion.year}
                </span>
                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded border border-slate-200">
                  {selectedQuestion.marks} Marks
                </span>
                <span className="bg-[#fdfbfa] border border-[#e7dfd3] text-slate-500 text-xs font-semibold px-2.5 py-1 rounded">
                  Module {selectedQuestion.module}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                  selectedQuestion.diff === 'Hard' ? 'bg-red-50 text-red-700 border-red-200' :
                  selectedQuestion.diff === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-green-50 text-green-700 border-green-200'
                }`}>
                  {selectedQuestion.diff}
                </span>
              </div>
              
              {/* Zoom controls & Close */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#fffdf8] border border-[#e7dfd3] rounded-lg p-1 gap-1">
                  <button 
                    onClick={() => adjustZoom(-10)} 
                    className="p-1 hover:bg-[#f5f0e8] rounded text-xs font-bold w-6 h-6 flex items-center justify-center"
                    title="Zoom Out"
                  >
                    &minus;
                  </button>
                  <span className="text-xxs font-bold text-slate-500 px-1 font-mono">{zoomLevel}%</span>
                  <button 
                    onClick={() => adjustZoom(10)} 
                    className="p-1 hover:bg-[#f5f0e8] rounded text-xs font-bold w-6 h-6 flex items-center justify-center"
                    title="Zoom In"
                  >
                    +
                  </button>
                  <button 
                    onClick={resetZoom} 
                    className="p-1 hover:bg-[#f5f0e8] rounded text-xxs font-bold px-1.5"
                    title="Reset Zoom"
                  >
                    Reset
                  </button>
                </div>
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="bg-[#f5f0e8] hover:bg-[#e7dfd3] text-[#1a1510] text-sm p-1.5 rounded-lg border border-[#e7dfd3] font-bold w-8 h-8 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div ref={modalContentRef} className="flex-1 flex flex-col min-h-0 overflow-y-auto">
              
              {/* Question Body Area (compact) */}
              <div className="bg-[#1a1510] text-white p-5 border-b border-[#e7dfd3] max-h-[25vh] overflow-y-auto">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider font-mono mb-1">{selectedQuestion.qnum}</div>
                <div 
                  className="text-xs sm:text-sm font-semibold leading-relaxed font-mono"
                  dangerouslySetInnerHTML={{ __html: selectedQuestion.question }}
                />
              </div>

              {/* Answer Area */}
              <div 
                className={`flex-1 p-6 space-y-4 overflow-y-auto bg-[#fffdf8] leading-relaxed transition-all duration-100 ${
                  zoomLevel === 70 ? 'zoom-xs' :
                  zoomLevel === 80 ? 'zoom-sm' :
                  zoomLevel === 90 ? 'zoom-sm' :
                  zoomLevel === 100 ? 'zoom-base' :
                  zoomLevel === 110 ? 'zoom-lg' :
                  zoomLevel === 120 ? 'zoom-lg' :
                  zoomLevel === 130 ? 'zoom-xl' :
                  zoomLevel === 140 ? 'zoom-xl' :
                  zoomLevel === 150 ? 'zoom-2xl' : 'zoom-base'
                }`}
              >
                <div className="space-y-4" dangerouslySetInnerHTML={{ __html: selectedQuestion.answer }} />

                {/* Related PYQs Section */}
                {relatedPyqMap[selectedQuestion.id] && (
                  <div className="mt-8 pt-6 border-t border-[#e7dfd3] space-y-3">
                    <h4 className="text-sm font-bold text-[#b45309] flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Related Exam Questions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {relatedPyqMap[selectedQuestion.id].map(relId => {
                        const relQ = questionsDB.find(q => q.id === relId);
                        if (!relQ) return null;
                        return (
                          <div 
                            key={relId} 
                            onClick={() => setSelectedQuestion(relQ)}
                            className="bg-[#fcf9f4] hover:bg-[#f5f0e8] p-3 rounded-lg border border-[#e7dfd3] cursor-pointer flex justify-between items-center transition-all group"
                          >
                            <div className="space-y-0.5 flex-1 min-w-0 pr-2">
                              <div className="flex items-center gap-1.5">
                                <span className="bg-[#b45309] text-white text-[9px] font-bold px-1 py-0.5 rounded font-mono uppercase">
                                  {relQ.year}
                                </span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">
                                  {relQ.qnum}
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-[#1a1510] truncate">
                                {relQ.concept}
                              </div>
                            </div>
                            <span className="text-[#b45309] group-hover:translate-x-1 transition-transform text-xs font-bold">
                              &rarr;
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="bg-[#fcf9f4] px-6 py-4 border-t border-[#e7dfd3] flex items-center justify-between flex-wrap gap-4 rounded-b-2xl">
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopyToClipboard(selectedQuestion.question, 'Q')}
                  className="bg-[#fffdf8] hover:bg-[#f5f0e8] text-[#1a1510] text-xs px-3.5 py-2 rounded-lg font-bold border border-[#e7dfd3] transition-all flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  {copiedText === 'Q' ? 'Copied!' : 'Copy Question'}
                </button>
                <button
                  onClick={() => handleCopyToClipboard(selectedQuestion.answer, 'A')}
                  className="bg-[#fffdf8] hover:bg-[#f5f0e8] text-[#1a1510] text-xs px-3.5 py-2 rounded-lg font-bold border border-[#e7dfd3] transition-all flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  {copiedText === 'A' ? 'Copied!' : 'Copy Answer'}
                </button>
              </div>
              
              <button
                onClick={() => setSelectedQuestion(null)}
                className="bg-[#b45309] hover:bg-[#92400e] text-white text-xs px-5 py-2.5 rounded-lg font-bold transition-all shadow-md"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
