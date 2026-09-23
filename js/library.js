const KA = "https://www.khanacademy.org/test-prep/digital-sat";
const OFFICIALS = [
  { t:"Official DSAT course — Khan Academy", u:KA, k:"khan", why:"The full College Board–partnered course. 30–60 real-video lessons per skill." },
  { t:"Download Bluebook (for the real test interface)", u:"https://bluebook.collegeboard.org/students/download-bluebook", k:"official", why:"The actual test-taking app. Free full-length adaptive tests." },
  { t:"CB Student Question Bank", u:"https://satsuite.collegeboard.org/practice/student-question-bank", k:"official", why:"Thousands of real College Board questions, filterable by skill & difficulty." },
  { t:"Question of the Day", u:"https://qotd.collegeboard.org/", k:"official", why:"One official question daily — a 2-minute habit." }
];

const LIBRARY = [
// ================= READING & WRITING =================
{ skill:"ci", sec:"rw", topic:"Central Ideas & Details",
  what:"Every R&W passage proves ONE main claim. Your job is to name that claim exactly — not the closest thing.",
  playbook:[
    "Read the stem FIRST and mark the job: main idea vs supporting detail. Different jobs, different scan.",
    "Main idea = the claim the WHOLE passage defends. Wrong options over-broaden it or restate one supporting detail.",
    "Details: locate the exact line region first, then answer. Never answer a detail question from memory of the topic.",
    "Beware absolute words (always / never / all) — passages almost never claim universals."],
  traps:["Picking a 'big-sounding' answer that over-generalizes.", "Matching words instead of meaning (paraphrase beats keyword-matching).", "Forgetting that the stem question type decides the job."],
  res:[{ t:"Watch a walkthrough of Central Ideas on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+central+ideas+main+idea", k:"watch", why:"Instant curated walkthroughs on the topic." }],
  yt:"digital SAT central ideas main idea" },

{ skill:"evT", sec:"rw", topic:"Evidence: Textual",
  what:"Choose the answer that, if TRUE, most directly confirms or undermines the claim. The 'why' is everything.",
  playbook:[
    "PSDA the stem: is the support question asking to STRENGTHEN or WEAKEN? Flip your scan accordingly.",
    "Look for the answer that makes the STRONGEST logical tie to the claim — not the most interesting fact.",
    "Test each option against the claim in one sentence: 'If true, this supports the claim because…'",
    "For 'best supported by the text' questions, the right answer is the narrowest evidence that the passage's own words verify."],
  traps:["Picking evidence that supports a slightly different claim.", "Choosing based on 'sounds important' rather than logical fit.", "Ignoring the strength signal (weakens = contradicts the claim directly)."],
  res:[
    { t:"Command of Evidence: Textual — official worked example", u:"https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:foundations-information-and-ideas/x0d47bcec73eb6c4b:command-of-evidence-textual/v/v2-sat-command-of-evidence-textual-video", k:"khan", why:"Official KA lesson with a real question walkthrough." },
    { t:"Top tips article: Command of Evidence: Textual", u:"https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:foundations-information-and-ideas/x0d47bcec73eb6c4b:command-of-evidence-textual/a/command-of-evidence-textual-top-tips", k:"read", why:"Khan's distilled tips for this question type." },
    { t:"Command of Evidence video (strategy + practice)", u:"https://www.youtube.com/watch?v=POcYofMngBw", k:"watch", why:"Focused breakdown of this exact question type." }],
  yt:"digital SAT command of evidence textual" },

{ skill:"evQ", sec:"rw", topic:"Evidence: Quantitative",
  what:"The evidence lives in tables, graphs, and notes. Read the label and the trend before the numbers.",
  playbook:[
    "Read the axis labels + units FIRST. The 'headline' of a graph is usually where right answers come from.",
    "Translate the claim into a prediction: 'if the claim is true, the data should show ___ pattern.'",
    "Match the numbers to the answer — the right choice always reflects the actual values, not a vibe.",
    "For data questions, compute exactly once; a near-number is the trap."],
  traps:["Reading a table upside down (rows vs columns).", "Choosing the trend that supports a different claim.", "Roughing numbers when the trap is the exact value."],
  res:[{ t:"Quantitative evidence walkthroughs on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+quantitative+evidence+tables+graphs", k:"watch", why:"Curated videos on graph/table evidence questions." }],
  yt:"digital SAT quantitative evidence tables graphs" },

{ skill:"inf", sec:"rw", topic:"Inferences",
  what:"Choose the statement the passage MOST strongly supports. 'Most strongly' = safest, not most dramatic.",
  playbook:[
    "An inference is a LEAP the author's words justify — but a small, safe leap.",
    "Read the claim the author made, then ask: 'what must also be true if this is true?'",
    "Eliminate choices that are possible but not REQUIRED by the text. If it could be false while the text stays true, it's out.",
    "Strongest support ≠ strongest wording. 'Some' beats 'all' almost every time."],
  traps:["Over-committing: picking the exciting conclusion instead of the safe one.", "Reading outside the text (background knowledge ≠ evidence).", "Choosing 'obviously true in real life' over 'implied by THIS passage'."],
  res:[{ t:"SAT Inference walkthroughs on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+inference+questions", k:"watch", why:"Explanations of the 'safest leap' logic." }],
  yt:"digital SAT inference questions" },

{ skill:"wic", sec:"rw", topic:"Words in Context",
  what:"The blank is a hole in the author's argument. The word must carry the sentence's intended meaning.",
  playbook:[
    "Cover the blank. Ask: 'what role does this sentence play in the argument?' Then fill it with YOUR word.",
    "Compare your word to the options — right answers are precise, not just plausible.",
    "Positive/negative: decide the valence (approving / neutral / harsh) before choosing.",
    "Tone beats definition: pick the option that fits the register and the argument."],
  traps:["Picking a synonym of the RIGHT word in the wrong register.", "Choosing dictionary-correct but argument-wrong words.", "Matching one clause and ignoring the sentence's overall claim."],
  res:[{ t:"Words in Context practice on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+words+in+context", k:"watch", why:"Quick strategy breakdowns." }],
  yt:"digital SAT words in context" },

{ skill:"tsp", sec:"rw", topic:"Text Structure & Purpose",
  what:"What job does this sentence/paragraph/whole text DO? Purpose is a function, not a summary.",
  playbook:[
    "Purpose answers 'why is this here?', not 'what does it say?'",
    "Signal words (however, for example, therefore) reveal the sentence's function in the structure.",
    "For whole-text purpose: distinguish a claim, a challenge, a concession, and an explanation.",
    "Wrong options name the content but not the function."],
  traps:["Answering 'what it says' when asked 'what it does'.", "Missing concession vs rebuttal phrasing.", "Picking a function from a word match instead of the role."],
  res:[{ t:"Text structure & purpose videos on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+text+structure+and+purpose", k:"watch", why:"Walkthroughs of function questions." }],
  yt:"digital SAT text structure and purpose" },

{ skill:"cross", sec:"rw", topic:"Cross-Text Connections",
  what:"Two short passages, one relationship: support, contradict, or refine. Name the relationship exactly.",
  playbook:[
    "Read both passages, then write ONE line: 'Passage 2 thinks X about Y; Passage 1 thinks Z.'",
    "The stem pins the relationship word (supports / challenges / similar to). Answer to THAT relationship.",
    "The right answer describes how the second idea interacts with the first — not both ideas separately.",
    "Watch who claims what: mistakes come from attributing Passage 2's view to Passage 1."],
  traps:["Describing each passage instead of the relationship.", "Choosing a yes-but answer when the stem asks for a straight challenge.", "Assuming 'both are critical' means they agree."],
  res:[{ t:"Cross-text connections on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+cross-text+connections", k:"watch", why:"Examples of the two-passage logic." }],
  yt:"digital SAT cross text connections" },

{ skill:"trans", sec:"rw", topic:"Transitions",
  what:"Pick the single word that makes the logic of the sentence pair airtight. This is pure PSDA.",
  playbook:[
    "Read the logic BETWEEN the sentences: does sentence 2 add, contrast, result, or exemplify?",
    "State the relationship in your words BEFORE looking at options.",
    "Each wrong option is a different relationship (contrast vs cause vs emphasis). Match it exactly.",
    "Commas/dashes are already placed — check the transition fits the punctuation."],
  traps:["Picking 'however' for any contrast even when it means 'additionally'", "Ignoring the second half of the paragraph's logic.", "Choosing a word that breaks the clause grammar."],
  res:[{ t:"Transitions practice on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+transitions+questions", k:"watch", why:"The most-missed easy question type — worth 2 minutes of study." }],
  yt:"digital SAT transitions questions" },

{ skill:"rsynth", sec:"rw", topic:"Rhetorical Synthesis",
  what:"Meet notes, reach one goal. The right answer includes only the notes needed to satisfy the goal.",
  playbook:[
    "Read the GOAL sentence — it tells you what to keep and what to cut.",
    "Check the answer against each note: does it need THAT note to reach the goal? Unneeded = exclude.",
    "Keep the answer's wording close to the notes (no invented facts).",
    "The trap answer is 'everything in order' — goals almost always want a subset."],
  traps:["Including a note the goal never asked for.", "Paraphrasing to invent a fact not in the notes.", "Choosing a slightly-overlong answer when one is precisely scoped."],
  res:[{ t:"Rhetorical synthesis walkthroughs on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+rhetorical+synthesis", k:"watch", why:"The 'meet-the-goal' logic in action." }],
  yt:"digital SAT rhetorical synthesis" },

{ skill:"conv", sec:"rw", topic:"Conventions (Grammar)",
  what:"Subject-verb, tense, pronoun, and punctuation. Know the rule cold; it's the most learnable question type.",
  playbook:[
    "For each answer, ask WHAT RULE it's testing (comma splice? parallelism? pronoun case?). Naming = 80% of the win.",
    "Insert each option and READ OUT LOUD — your ear catches comma splices and fragments.",
    "A single comma can't separate two complete sentences. A semicolon can. Memorize that.",
    "Check agreement: plural noun → plural verb, even when stuff sits between them."],
  traps:["Two complete sentences joined by a bare comma (the classic).", "The 'everyone/someone/nobody is' agreement rule.", "Switching tense mid-paragraph for no reason."],
  res:[{ t:"SAT grammar & punctuation on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+grammar+conventions+punctuation", k:"watch", why:"The fastest points on the test if you master these." }],
  yt:"digital SAT grammar conventions punctuation" },

// ================= MATH =================
{ skill:"lin1", sec:"math", topic:"Linear Equations I (one variable)",
  what:"Solve exactly, one variable. Method beats arithmetic — the trap is a sign flip or a skipped 'no solution' case.",
  playbook:[
    "Collect the variable on one side, constants on the other, in the FEWEST steps possible.",
    "Special cases: if x cancels and you get a true statement = infinite solutions; false = no solution.",
    "Fraction coefficients: multiply the whole equation by the LCD first — kills the trap.",
    "Check your answer in the ORIGINAL equation, not your simplified one."],
  traps:["Distributing a negative (the -1 trap).", "Missing x=0 as a root/answer.", "Mixing up 'no solution' vs 'all real numbers'."],
  res:[
    { t:"Two-variable linear equations intro (Khan video)", u:"https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs/x2f8bb11595b61c86:two-variable-linear-equations-intro/v/2-variable-linear-equations-graphs", k:"khan", why:"Foundation video — equations, graphs, and solutions." },
    { t:"Linear equations unit on Khan Academy", u:"https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs", k:"khan", why:"The full algebra unit with practice." }],
  yt:"digital SAT linear equations one variable" },

{ skill:"lin2", sec:"math", topic:"Slope & Forms",
  what:"y=mx+b in your sleep. Every digital SAT module drops 2-3 of these.",
  playbook:[
    "Given two points: slope = (y2−y1)/(x2−x1). Write it as a fraction; do NOT simplify early.",
    "Slope = rise/run; intercept = where the line crosses the axis (set the other variable = 0).",
    "Parallel slopes equal, perpendicular slopes multiply to −1. Say it before you solve.",
    "For context (cost, distance): answer the 'meaning of slope' question in real-world words, not in math."],
  traps:["Transposing slope (run/rise flipped).", "Reading the y-intercept off a graph where y isn't 0 at the origin.", "Meaning-of-slope answers that repeat the formula instead of the story."],
  res:[{ t:"Slope & forms on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+slope+intercept+forms+lines", k:"watch", why:"Quick refreshers on the forms." }],
  yt:"digital SAT slope intercept forms" },

{ skill:"lfun", sec:"math", topic:"Linear Functions",
  what:"f(x) = ax + b as a MODEL. The question tells you the context; you supply the letters.",
  playbook:[
    "Translate the story: 'start' = b, 'per …' = a, 'after t things' = f(t).",
    "For f(k)=c questions, SWAP the side and solve — f of k means plug k in for x.",
    "Compare two functions: set them equal and solve; the intersection is where they match.",
    "Units matter: watch for 'per week' vs 'per month' scaling traps."],
  traps:["Plugging into the wrong variable (k vs f(k)).", "Forgetting the starting value when it's zero.", "Adding the rate when the model is subtractive."],
  res:[{ t:"Linear functions on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+linear+functions+models", k:"watch", why:"Modelling context questions broken down." }],
  yt:"digital SAT linear functions models" },

{ skill:"sys", sec:"math", topic:"Systems & Inequalities",
  what:"Solve for the intersection of two lines. Same variable, two equations — elimination or substitution.",
  playbook:[
    "Prefer ELIMINATION (add/subtract to kill a variable) — fewer algebra slips than substitution.",
    "No intersection = parallel lines (same slope). Same line = infinite solutions. Know the look.",
    "For inequalities: flipping the sign when multiplying/dividing by a negative is the #1 trap.",
    "Graphically: pick a test point (0,0 usually) to shade correctly."],
  traps:["Sign flip on inequality multiplication by −1.", "Misreading 'no solution' as a numeric answer.", "Substitution slip on negatives."],
  res:[{ t:"Systems of equations on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+systems+of+equations+inequalities", k:"watch", why:"Elimination & special cases." }],
  yt:"digital SAT systems of equations inequalities" },

{ skill:"adv", sec:"math", topic:"Advanced Math (Quadratics & Nonlinear)",
  what:"The module-2 difficulty driver. Factoring, the quadratic formula, vertex form, and function transformation.",
  playbook:[
    "ax²+bx+c=0: try factoring first (product/sum), then quadratic formula. Desmos can graph it — use it.",
    "Vertex form y=a(x−h)²+k: the vertex is (h,k). The sign inside is the trap (x−2)² → h=2, not −2.",
    "Discriminant b²−4ac: >0 two roots, =0 one (double) root, <0 none real. Instant classification answers.",
    "Transformations: f(x)+k shifts up, f(x+k) shifts LEFT. Outside vs inside the parentheses."],
  traps:["Vertex sign error ((x−2)² vertex x=+2).", "Dropping a zero root when solving by factoring.", "Forgetting the discriminant exists for 'number of solutions' questions."],
  res:[{ t:"Quadratics & advanced math on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+advanced+math+quadratics+vertex", k:"watch", why:"The module-2 make-or-break topic." }],
  yt:"digital SAT advanced math quadratics vertex" },

{ skill:"geo", sec:"math", topic:"Geometry & Trigonometry",
  what:"A few clean formulas — circles, triangles, 30-60-90, sine/cosine of am angle. 1-2 questions, easy points if prepared.",
  playbook:[
    "Circle: area πr², circumference 2πr. Arc length & sector area are fractions: (θ/360)×circle.",
    "30-60-90: sides 1:√3:2. 45-45-90: 1:1:√2. Memorize; the test loves them.",
    "With the reference sheet at the top of the screen, you don't memorize formulas — you memorize WHICH formula applies.",
    "sin/cos of complementary angles are equal. If two angles sum to 90°, sin(A)=cos(B)."],
  traps:["Degree vs radian settings (angles lowercase today).", "Using diameter as radius.", "30-60-90 side ratios on the wrong leg."],
  res:[{ t:"Geometry & trig on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+geometry+trigonometry+triangles", k:"watch", why:"The full formula play in under an hour." }],
  yt:"digital SAT geometry trigonometry triangles" },

{ skill:"psda", sec:"math", topic:"Ratios, Rates & Percent",
  what:"Proportional reasoning: unit rates, percent change, mixtures. The single most reliable scoring area.",
  playbook:[
    "Percent change = (new−old)/old. The denominator is ALWAYS the original value.",
    "Set up the ratio with UNITS written out — unit alignment catches most mistakes.",
    "Proportional setup: cross-multiply but only after checking units match.",
    "For 'increased by 20%' multiply by 1.2; 'decreased by 20%' by 0.8. Never add informally."],
  traps:["Percent change denominator = new value (the classic).", "Mixing up part/whole in the ratio.", "Rounding before the final step."],
  res:[{ t:"Rates & percent on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+ratios+r+rates+percent", k:"watch", why:"Fast scoring — lock this one down first." }],
  yt:"digital SAT ratios rates percent" },

{ skill:"data", sec:"math", topic:"Data & Statistics",
  what:"Mean/median/mode/range + standard deviation intuition + scatterplots & lines of best fit.",
  playbook:[
    "Median needs order: sort first (it's the middle, not the average).",
    "Adding a huge outlier: mean moves, median barely does. The test compares them exactly this way.",
    "On scatterplots, 'fit a line' = find slope from two representative points, then the answer is close.",
    "Standard deviation asks 'which group is more spread out' — eyeball the spread, no formula needed."],
  traps:["Unsorted median.", "Confusing 'which set has greater mean' with 'greater median'.", "Reading the line of best fit instead of the plotted point."],
  res:[{ t:"Data & stats on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+statistics+mean+median+standard+deviation", k:"watch", why:"Intuition-first explanations." }],
  yt:"digital SAT statistics mean median standard deviation" },

{ skill:"prob", sec:"math", topic:"Probability & Claims",
  what:"A probability is a fraction of a total. Conditional probability reads the correct subset as the denominator.",
  playbook:[
    "Definition: desired/total. Write the subset in words so you pick the right total.",
    "Two-way tables: 'given X' → denominator is the X column/row TOTAL, not the grand total.",
    "Independence claims: compare the conditional probability to the overall probability — equal means independent.",
    "Reasonable inference from samples: the right answer mirrors the sample proportion but only for the SAME population."],
  traps:["Conditional vs joint probability denominator.", "Claiming causation from correlation in survey results.", "Word 'and/or' conflation."],
  res:[{ t:"Probability on YouTube", u:"https://www.youtube.com/results?search_query=digital+SAT+probability+two-way+tables", k:"watch", why:"Table-based probability made simple." }],
  yt:"digital SAT probability two way tables" }
];