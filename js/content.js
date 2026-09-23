const DAYS = [
  {
    id:1, date:"Wed Sep 23", title:"Day 1 — Central Ideas + Linear Equations I", focus:"Kill-set 1",
    subtitle:"Evidence the score report says you're weakest at. This is where the +50 lives.",
    skills:{rw:["ci"], math:["lin1"], label:"Central Ideas · Linear Equations"},
    quests:[
      {name:"Learn the Central Ideas playbook", xp:50, type:"lesson"},
      {name:"Practice set: Central Ideas + Linear Equations (SAT format)", xp:120, type:"practice"},
      {name:"Autopsy every miss into the Error Log", xp:40, type:"log"},
      {name:"Run the 5-min Recall Grill", xp:30, type:"grill"}
    ],
    lesson:{
      h:"How to destroy 'Central Ideas and Details' questions",
      html:`
        <p>Central Idea questions ask: <i>"Which choice best states the main idea?"</i> or <i>"Which choice best summarizes the text?"</i></p>
        <div class="box"><b>The 3-rule playbook:</b>
        <ol><li><b>Scope = the WHOLE passage.</b> A choice that only covers one paragraph is bait — even if it's true.</li>
        <li><b>Find the forest, not the trees.</b> Read the first and last sentence of each paragraph; the main point is where they converge.</li>
        <li><b>Beware 'too strong' wording.</b> Words like <i>prove, always, eliminate, only</i> usually overreach. The best answer is measured.</li></ol></div>
        <div class="box trap"><b>Trap alert:</b> choices that restate a <i>detail</i> but miss the <i>point</i>. A correct central idea covers causes, not just events — ask "why did the author write it?"</div>
        <h3>Linear equations in one variable</h3>
        <div class="box"><b>Golden rules:</b>
        <ul><li><b>Same operation, both sides.</b> Whatever you do to one side, do to the other. Every time.</li>
        <li><b>Shrink first when possible.</b> If everything divides by a number, divide first (3x+6=  → ÷3) and the algebra gets tiny.</li>
        <li><b>Distribution trap:</b> 4(x−3) = 4x <b>− 12</b>, not −3. Sign-stealing is the #1 way smart people lose these.</li></ul></div>
        <div class="box trap"><b>Proof your work:</b> plug your answer back into the original equation. If the two sides aren't equal, you blew a sign. 5 extra seconds, guaranteed check.</div>`
    },
    tips:[
      {t:"Central Ideas — read the first and last lines of the passage FIRST.", d:"The main idea almost always hides there. Then run the choice elimination."},
      {t:"Eliminate by 'scope + strength'.", d:"Wrong = too narrow, too broad, or too strong. You rarely need to fully 'understand' the passage."},
      {t:"Math — work on paper, type in the calculator.", d:"Never solve a linear equation in your head. Paper for steps, calculator for arithmetic. Stops sign errors."},
      {t:"If you're stuck 45s in on Math: skim the choices.", d:"Plug the choices back in — plug-and-check beats algebra when you're panicking."}
    ]
  },
  {
    id:2, date:"Thu Sep 24", title:"Day 2 — Evidence: Textual + Slope & Forms", focus:"Kill-set 1",
    subtitle:"The 'which choice supports the claim' family — plus slope you should recognize on sight.",
    skills:{rw:["evT"], math:["lin2"], label:"Evidence (Textual) · Slope & Forms"},
    quests:[
      {name:"Learn the Textual Evidence playbook", xp:50, type:"lesson"},
      {name:"Practice set: Textual Evidence + Slope (SAT format)", xp:120, type:"practice"},
      {name:"Autopsy every miss into the Error Log", xp:40, type:"log"},
      {name:"Run the 5-min Recall Grill", xp:30, type:"grill"}
    ],
    lesson:{
      h:"How to destroy 'Command of Evidence: Textual' questions",
      html:`
        <p>These ask: <i>"Which finding, if true, would most directly support / weaken the claim?"</i></p>
        <div class="box"><b>The playbook:</b>
        <ol><li><b>Translate the claim into a test.</b> The evidence choice must make the claim <i>more likely true</i> — not just 'related'.</li>
        <li><b>Read every choice and score each +/0/−.</b> + it supports, − it weakens, 0 it does nothing. Pick the biggest +.</li>
        <li><b>'If true' lets you use the answer's own logic.</b> Don't fight the hypotheticals — assume each is real and judge its impact.</li></ol></div>
        <div class="box trap"><b>Trap alert:</b> tempting choices that are <i>interesting</i> or <i>true</i> but don't touch the claim. Ask: "does this change whether the claim holds?" No → wrong.</div>
        <h3>Slope & forms of a line</h3>
        <div class="box"><b>Recognize instantly:</b>
        <ul><li><b>Slope-intercept:</b> y = mx + b → m = slope, b = y-intercept. Most common form on the test.</li>
        <li><b>Point-slope:</b> y − y₁ = m(x − x₁). Use when you have a point and a slope.</li>
        <li><b>Standard:</b> Ax + By = C.</li>
        <li><b>Slope from 2 points:</b> m = (y₂ − y₁) / (x₂ − x₁), rise over run.</li>
        <li><b>Parallel lines:</b> same m. <b>Perpendicular:</b> m·m₂ = −1.</li></ul></div>
        <div class="box trap"><b>Context reading (the real skill):</b> in a story problem, slope is the <i>per-unit change</i> (cost per mile, rate per hour) and y-intercept is the <i>starting/fixed value</i>. Pick these up from the words, not just the equation.</div>`
    },
    tips:[
      {t:"Evidence: score each choice +/0/− before deciding.", d:"Slows you down 10 seconds, saves you from the 'related but irrelevant' trap every time."},
      {t:"Math: isolate the slope from the words first.", d:"'Charges $3 plus $0.20 per mile' → slope 0.20, intercept 3. Write it down instantly."},
      {t:"Point-slope is your friend when they hand you a point and slope.", d:"Plug straight in; zero solving needed."},
      {t:"Know perpendicular by heart: flip the slope and negate it.", d:"m=2 → perp m=−1/2. 3 seconds of recall saves 60 seconds of algebra."}
    ]
  },
  {
    id:3, date:"Fri Sep 25", title:"Day 3 — Evidence: Quantitative + Linear Functions", focus:"Kill-set 1",
    subtitle:"Tables and graphs stop lying to you once you obey the axis labels.",
    skills:{rw:["evQ"], math:["lfun"], label:"Evidence (Quantitative) · Linear Functions"},
    quests:[
      {name:"Learn the Quantitative Evidence playbook", xp:50, type:"lesson"},
      {name:"Practice set: Quantitative Evidence + Functions (SAT format)", xp:120, type:"practice"},
      {name:"Autopsy every miss into the Error Log", xp:40, type:"log"},
      {name:"Fire Drill: Weekly Kill-set Quiz (10 Q, timed)", xp:100, type:"quiz"}
    ],
    lesson:{
      h:"How to destroy 'Command of Evidence: Quantitative' questions",
      html:`
        <p>You get a table, bar graph, or line graph plus a claim. <i>"Which choice is best supported by the data?"</i></p>
        <div class="box"><b>The playbook:</b>
        <ol><li><b>Read the labels & units FIRST</b> — rows, columns, axes, what the numbers count. Most wrong answers read the wrong column.</li>
        <li><b>Compare exact cells, don't 'feel' the chart.</b> Write the two numbers you need; compute the change or ratio.</li>
        <li><b>Choose the choice that's literally true.</b> Every quantitative answer must be 100% backed by numbers you can point to.</li></ol></div>
        <div class="box trap"><b>Trap alert:</b> 'both increased' when one rose and one fell. And 'the gap grew' when it didn't. Verify with numbers, always.</div>
        <h3>Linear functions & word problems</h3>
        <div class="box"><b>The story → equation machine:</b>
        <ul><li><b>Start value</b> → y-intercept (b). <b>Per-unit value</b> → slope (m).</li>
        <li><b>Write it as</b> y = mx + b using the words, THEN match the answer.</li>
        <li><b>Tables:</b> find the slope from any two rows (rate of change), then back-solve for b at x=0.</li></ul></div>
        <div class="box trap"><b>Unit-rate trap:</b> "3 miles per every 4 hours" is slope = 3/4, not 4/3. Lay the fraction as (change in y)/(change in x) and it can't flip.</div>`
    },
    tips:[
      {t:"Cover the answer choices before reading the graph.", d:"Read the question statement fully; most of what you need is in the words, not the chart."},
      {t:"Compute the delta (Δ) for any 'increase/decrease' claim.", d:"Write 120→100 means fell 20. Don't keep it in your head."},
      {t:"Linear table: slope = Δy/Δx between two clean rows.", d:"Pick rows with easy numbers, skip rows that are ugly."},
      {t:"The built-in Desmos can find slope for you.", d:"Type the two points, read the line. 10 seconds, zero errors."}
    ]
  },
  {
    id:4, date:"Sat Sep 26", title:"Day 4 — ⚔️ FULL-LENGTH TEST #1 (BLUEBOOK)", focus:"Proof",
    subtitle:"One sitting. Timed. Phone in another room. This is the truth serum.",
    skills:{rw:[], math:[], label:"Full-length · Bluebook"},
    isolateForTest:true,
    quests:[
      {name:"Take a full-length practice test in Bluebook (one sitting)", xp:250, type:"spot", boss:true},
      {name:"Record your score in the Campaign Log", xp:30, type:"log"}
    ],
    lesson:{
      h:"Full-length day — zero learning, zero shortcuts",
      html:`
        <p>Open Bluebook, pick a full-length adaptive practice test. Start between 8–10am to match test conditions.</p>
        <div class="box"><b>Test-day rules to rehearse now:</b>
        <ul><li>Same room you'll test in, phone in another room, no snacks during modules.</li>
        <li>R&W: 32 min/module. Math: 35 min/module. Use the built-in Desmos on every Math question.</li>
        <li>Answer EVERY question. There is no guessing penalty.</li>
        <li>Stuck &gt;45s → mark for review, move on, come back.</li></ul></div>
        <div class="box trap"><b>Do not</b> review answers as you go. Note the time pressure — that's data too.</div>
        <div class="box"><b>After scoring:</b> open the 🎯 NMSQT Ohio Goal card on this dashboard, enter your R&W and Math section scores. It computes your Selection Index vs the Ohio cutline (~221). That gap is your new mission list.</div>`
    },
    tips:[
      {t:"After the test, do NOT re-take it.", d:"Same-day redo is tomorrow's job (Day 5 autopsy). Score it, close the app, rest."}
    ]
  },
  {
    id:5, date:"Sun Sep 27", title:"Day 5 — Autopsy & Error Log Day", focus:"Proof → Fix",
    subtitle:"The most valuable day of the campaign. This is where the +50 actually gets banked.",
    skills:{rw:[], math:[], label:"Autopsy"},
    quests:[
      {name:"Redo every missed question COLD, untimed", xp:80, type:"log"},
      {name:"Classify each miss (Misread / Concept / Careless / Timing)", xp:40, type:"log"},
      {name:"Write the 3 biggest fixes on your Rule Sheet", xp:40, type:"rule"},
      {name:"Schedule tomorrow's drill around the 3 worst skills", xp:20, type:"log"}
    ],
    lesson:{
      h:"The autopsy ritual (50-minute session)",
      html:`
        <p>You just got a free diagnostic. Milk it.</p>
        <div class="box"><b>The two-pass autopsy:</b>
        <ol><li><b>Pass 1 — Cold redo:</b> re-attempt every miss without seeing notes. Right this time = timing/misread (log as TIMING or MISREAD). Still wrong = CONCEPT gap (that's tomorrow's lesson target).</li>
        <li><b>Pass 2 — Classify:</b> tag each with one of the four categories in your log.</li></ol></div>
        <div class="box trap"><b>If &gt;40% of your misses are 'MISREAD',</b> you're rushing. The fix is brutal: read the question twice before choosing. Slower is faster.</div>
        <div class="box"><b>Rule Sheet update:</b> distill each concept gap into a ONE-LINE rule (e.g., "flip inequality on ×÷ negative"). That sheet is everything between you and test day.</div>`
    },
    tips:[
      {t:"The error log is your syllabus.", d:"School-style ground-up review is over. Every future lesson starts from a logged miss."},
      {t:"Redo clean = confidence. Redo wrong = lesson.", d:"Don't punish yourself either way — the jobs are different."}
    ]
  },
  {
    id:6, date:"Mon Sep 28", title:"Day 6 — Inferences + Systems & Inequalities", focus:"Kill-set 2",
    subtitle:"MUST-be-true logic, plus the system moves that nail Algebra's biggest share.",
    skills:{rw:["inf"], math:["sys"], label:"Inferences · Systems & Inequalities"},
    quests:[
      {name:"Learn the Inference playbook", xp:50, type:"lesson"},
      {name:"Practice set: Inferences + Systems (SAT format)", xp:120, type:"practice"},
      {name:"Autopsy every miss into the Error Log", xp:40, type:"log"},
      {name:"Run the 5-min Recall Grill", xp:30, type:"grill"}
    ],
    lesson:{
      h:"How to destroy Inference questions",
      html:`
        <p>Inference Qs: <i>"Which choice is most strongly supported by the text?"</i> KEY DIFFERENCE — it's not 'what could be true'.</p>
        <div class="box"><b>The MUST-be-true test:</b>
        <ol><li><b>Read the fact chain</b> — passage gives premise(s), answer must logically follow.</li>
        <li><b>Apply the MUST test:</b> if the choice could be false given the passage, it's wrong. Literally argue: "could the passage be true and this choice false?" Yes → kill it.</li>
        <li><b>Nearby ≠ inferred.</b> 'Could', 'may', 'might' answers are almost always bait.</li></ol></div>
        <div class="box trap"><b>Classic trap:</b> an answer that's plausible in real life but <i>unsupported by this text</i>. Evidence must come from the passage, not the world.</div>
        <h3>Systems of linear equations</h3>
        <div class="box"><b>Two weapons:</b>
        <ul><li><b>Elimination</b> (preferred when coefficients already match): add or subtract the equations to kill a variable.</li>
        <li><b>Substitution</b> (when one variable is already alone: y=…): plug it into the other equation.</li></ul></div>
        <div class="box"><b>Solution counts:</b> same slope, different intercept → 0 solutions. Different slopes → 1 solution. Same line → infinite. Spot these before doing any work.</div>
        <div class="box trap"><b>Inequality flip:</b> multiply or divide by a NEGATIVE → flip the sign. −2x &gt; 6 → x &lt; −3. The single most-tested careless trap in Algebra.</div>`
    },
    tips:[
      {t:"Inference: say 'MUST be true' out loud before choosing.", d:"If you can imagine the passage + the opposite of the answer coexisting, it's out."},
      {t:"Systems: prefer elimination always.", d:"Kill a variable in one line instead of juggling substitutions. Fewer steps = fewer sign slips."},
      {t:"Before solving a system, glance at both equations.", d:"Already-ready to add? Do it. It's the #1 fastest path on the test."},
      {t:"Inequality answer in a story = usually an integer.", d:"If they ask 'largest whole number of people/tickets', your answer is the edge case, not the inequality itself."}
    ]
  },
  {
    id:7, date:"Tue Sep 29", title:"Day 7 — Algebra Gauntlet + ⚡ Module Sprint", focus:"Kill-set 2",
    subtitle:"20 straight Algebra questions, timed, + one full timed R&W module. Pain now, ease later.",
    skills:{rw:[], math:["lin1","lin2","lfun","sys"], label:"Algebra Gauntlet · Sprint"},
    quests:[
      {name:"Algebra Gauntlet — 20 Qs, timed (target ≥85%)", xp:150, type:"practice", boss:true},
      {name:"R&W Module Sprint — 25 min, one sitting", xp:100, type:"quiz"},
      {name:"Autopsy everything into the Error Log", xp:40, type:"log"}
    ],
    lesson:{
      h:"How to survive the gauntlet (and why it works)",
      html:`
        <p>The gauntlet isn't a lesson — it's a <b>pressure test of everything from Days 1–3 and 6</b>. Interleaving (mixing skills) is what makes answers stick on test day.</p>
        <div class="box"><b>Before you start:</b>
        <ul><li>Recite the Algebra grill card from memory (3 forms, slope formula, elimination, flip rule, solution counts).</li>
        <li>Set the same 95s/question timer the real test uses.</li></ul></div>
        <div class="box trap"><b>Rules while you grind:</b> no notes, no stopping mid-set, wrong answers get the autopsy treatment after. 85% or better or you re-run it tomorrow morning.</div>
        <div class="box"><b>Sprint tip:</b> in the timed R&W module, treat every 71-second question as an investment — finish the doable ones, mark the brutal ones, return. Never sit idle >45s.</div>`
    },
    tips:[
      {t:"The gauntlet's real enemy is your streak.", d:"Two in a row wrong = you're rushing. Re-read the question before the next one."},
      {t:"Algebra on the test is ~35% of all Math.", d:"This single gauntlet touches more of your score than any other session in the campaign."}
    ]
  },
  {
    id:8, date:"Wed Sep 30", title:"Day 8 — I&I Mixed + PSDA (Ratios, %, Units)", focus:"Kill-set 2 + cheap points",
    subtitle:"Your weakest R&W family gets a mixed barrage; your cheapest Math stars appear.",
    skills:{rw:["ci","evT","evQ","inf"], math:["psda"], label:"I&I Mixed · PSDA 1"},
    quests:[
      {name:"Learn the PSDA (ratios/% /units) playbook", xp:50, type:"lesson"},
      {name:"Practice set: I&I Mixed + PSDA (SAT format)", xp:120, type:"practice"},
      {name:"Autopsy every miss into the Error Log", xp:40, type:"log"},
      {name:"Run the 5-min Recall Grill", xp:30, type:"grill"}
    ],
    lesson:{
      h:"PSDA — the cheap points you can't afford to give away",
      html:`
        <p>Only ~5–7 questions, but they're gimmes once drilled. And I&I mixed review keeps your biggest R&W gain paying.</p>
        <div class="box"><b>Ratios & proportions:</b>
        <ul><li><b>Find the unit multiplier first.</b> 3:5 ratio with 24 of the '3' group → each part = 8 → total = (3+5)×8 = 64.</li>
        <li><b>Unit rate = per one:</b> 240 mi / 4 h → 60 mph. Then scale.</li></ul></div>
        <div class="box"><b>Percent the SAT way (multipliers — MUCH faster than formulas):</b>
        <ul><li>+25% = ×1.25 · −20% = ×0.80 · +4% = ×1.04 · −3.5% = ×0.965.</li>
        <li>Increase 80→100 = (100−80)/80 = 25%. Decrease 100→80 = 20/100 = 20%. <b>The denominator is the STARTING value.</b> This asymmetry is tested constantly.</li></ul></div>
        <div class="box trap"><b>Unit trap:</b> converting hours↔minutes, miles↔feet. Set up the conversion so units cancel; one fraction, done.</div>
        <h3>I&I mixed discipline</h3>
        <p>Central Ideas + Evidence + Inference all ride together. Strategy per question type stays exactly as Days 1–3, 6. Switching costs seconds — practice makes the pattern switch automatic.</p>`
    },
    tips:[
      {t:"For ratio questions, write 'each part = ?' before solving.", d:"24 boys at 3 parts → 8 per part. Everything else falls out."},
      {t:"Percent multipliers beat percent formulas.", d:"×0.80 is one calculator keystroke; the formula is three steps and two places to slip."},
      {t:"Word problems: cancel units like fractions.", d:"mph × hours = miles. Watch them disappear."},
      {t:"I&I mixed: the question type tells you the process.", d:"'Supports' → evidence. 'Summarizes' → central ideas. 'Most strongly implies' → inference. Match fast."}
    ]
  },
  {
    id:9, date:"Thu Oct 1", title:"Day 9 — I&I Mixed + PSDA 2 (Data, Probability) + Sprint", focus:"Kill-set 2 + cheap points",
    subtitle:"Statistics, scatterplots, and the margin-of-error questions that punish the unprepared.",
    skills:{rw:["ci","evT","evQ","inf"], math:["data","prob"], label:"I&I Mixed · PSDA 2 · Sprint"},
    quests:[
      {name:"Learn the Data & Probability playbook", xp:50, type:"lesson"},
      {name:"Practice set: I&I Mixed + Data/Probability (SAT format)", xp:120, type:"practice"},
      {name:"Math Module Sprint — 35 min, one sitting", xp:100, type:"quiz"},
      {name:"Autopsy every miss into the Error Log", xp:40, type:"log"}
    ],
    lesson:{
      h:"Data, probability, and statistical claims — the logic, not the formulas",
      html:`
        <div class="box"><b>Measurements you must know cold:</b>
        <ul><li><b>Mean</b> = average (sensitive to outliers). <b>Median</b> = middle (immune to outliers). <b>Range</b> = max − min.</li>
        <li><b>Standard deviation</b> = how spread out. Lower std-dev = tighter cluster. You only need the <i>concept</i>, not the formula.</li></ul></div>
        <div class="box"><b>Probability:</b>
        <ul><li>P(A|B) = P(A&nbsp;and&nbsp;B) / P(B). From a table: read the row/column total that B defines, then the cell inside it.</li>
        <li>"What fraction of those who are 18+ prefer B?" → look WITHIN the 18+ row. Denominator = the group you're conditioning on.</li></ul></div>
        <div class="box"><b>The two statistical claims rules (highest-value easy points):</b>
        <ul><li><b>Random sampling</b> (who you asked) → can <b>generalize to the population</b>. Margin of error gives the plausible range around the result.</li>
        <li><b>Random assignment</b> (in an experiment) → can claim <b>causation</b>. Correlation alone NO. Mixing these two up is the most common miss here.</li></ul></div>
        <div class="box trap"><b>Margin of error:</b> 40% ± 3.1% means "between 36.9% and 43.1% is plausible". It is NOT "40% is false" and NOT "the range is guaranteed".</div>`
    },
    tips:[
      {t:"Conditional probability = the group AFTER the 'given'.", d:"'Given they are 18+' → denominator is 18+ total. Read that before you compute."},
      {t:"Spotted 'margin of error' → just add and subtract it.", d:"Two numbers, done. Don't overthink."},
      {t:"Correlation/causation questions are pattern-matching.", d:"Random assignment = causation. Everything else = association. && both."},
      {t:"Scatterplot answer: match the sentence to the trend.", d:"Rising dots = 'positive relationship'. Flat = 'little relationship'. Read the axis first."}
    ]
  },
  {
    id:10, date:"Fri Oct 2", title:"Day 10 — Mixed Gauntlet (Band +1)", focus:"Integration",
    subtitle:"Everything for real: mixed skills, harder questions, test pacing.",
    skills:{rw:"mixed", math:"mixed", label:"Mixed Gauntlet"},
    quests:[
      {name:"Mixed 25-Q Gauntlet — band +1 difficulty, timed", xp:180, type:"practice", boss:true},
      {name:"Autopsy every miss with cold redo", xp:50, type:"log"},
      {name:"Run the full grill catch-all from memory", xp:40, type:"grill"}
    ],
    lesson:{
      h:"Everything, harder, on the clock",
      html:`
        <p>No new skills today. This is <b>retrieval with resistance</b>: every question counts, harder than your comfort band, timed to test pace.</p>
        <div class="box"><b>Why it works:</b> research on the 'testing effect' is unambiguous — pulling an answer from memory under time pressure is what makes it survive a stressful test. Re-reading is the weakest way to learn; recall is the strongest. This gauntlet is pure recall.</div>
        <div class="box trap"><b>If you dip under 85%:</b> do NOT grind 50 more questions tonight. Go to the exact skill of each miss, read its playbook again (Days 1–3, 6, 8–9), redo 5 cold. Then sleep.</div>
        <div class="box"><b>Steel yourself:</b> expect 1–2 questions to feel unfair. The adaptive engine hands you band+1 on purpose. Missing a hard one isn't the test's opinion of you — it's tomorrow's lesson list.</div>`
    },
    tips:[
      {t:"Band +1 rule: if a question makes you lost in 30s, mark it.", d:"Skip, bank the easy ones, come back. Same as test day."},
      {t:"After the set, your error log IS the plan.", d:"Tomorrow's me gives you re-drills based on today's misses. Life is one seamless loop."}
    ]
  },
  {
    id:11, date:"Sat Oct 3", title:"Day 11 — ⚔️ FULL-LENGTH TEST #2 (BLUEBOOK)", focus:"Proof",
    subtitle:"3 days before the real thing. This number predicts October 6 better than anything.",
    skills:{rw:[], math:[], label:"Full-length · Bluebook"},
    isolateForTest:true,
    quests:[
      {name:"Take a full-length practice test in Bluebook (one sitting)", xp:250, type:"spot", boss:true},
      {name:"Compare sections vs Test #1 → log the delta", xp:30, type:"log"}
    ],
    lesson:{
      h:"Same ritual as Day 4",
      html:`
        <p>One sitting, timed, same conditions. This is your predictive moment.</p>
        <div class="box"><b>Compare vs #1:</b> target +40–80 total. If the delta is there — great, that's October 6. If not, the autopsy tomorrow targets the exact stalls.</div>
        <div class="box"><b>Also:</b> feed both section scores into the 🎯 Ohio SI tracker on the dashboard. See how close you are to the ~221 National Merit cutline — it should be 10+ points closer than Day 4.</div>
        <div class="box trap"><b>Do not let a bad module derail the day.</b> The adaptive engine gets harder when you're sharp — a 'hard' module actually means you've been doing well. Judge the section total, not the module vibe. Then log, close, rest.</div>`
    },
    tips:[
      {t:"Three days out means: no more discovery.", d:"You're in polish-and-lock mode from here."}
    ]
  },
  {
    id:12, date:"Sun Oct 4", title:"Day 12 — Autopsy · Re-drill · Lock", focus:"Polish & lock",
    subtitle:"Targeted surgery on the exact skills Test #2 flagged. Nothing new.",
    skills:{rw:[], math:[], label:"Autopsy · Re-drill"},
    quests:[
      {name:"Cold-redo every miss from Test #2", xp:80, type:"log"},
      {name:"Re-drill the 3 worst skills (10 Q each)", xp:120, type:"practice"},
      {name:"Update Rule Sheet with final 3 rules", xp:30, type:"rule"},
      {name:"Lock in sleep & logistics plan for test day", xp:20, type:"log"}
    ],
    lesson:{
      h:"The last real session",
      html:`
        <div class="box"><b>Autopsy, again, for real:</b> cold-redo every Test #2 miss. Right → TIMING/MISREAD. Wrong → CONCEPT, and that concept gets a focused 10-Q re-drill today.</div>
        <div class="box"><b>Re-drill format:</b> 10 questions on EACH of your 3 worst skills, timed, ≥85% target. No new material.</div>
        <div class="box"><b>Close the loop:</b> your Rule Sheet should now have every one-line lesson you've earned. Read it once tonight. That page is the entire course.</div>
        <div class="box trap"><b>Tonight's rules:</b> no new studying after this session, no late screens, sleep 8+. The work is done. Rest is the training.</div>`
    },
    tips:[
      {t:"Taper rule: a calm, tested brain beats a crammed one, always.", d:"You have 13 days of real work in the bank. The test is a formality."}
    ]
  },
  {
    id:13, date:"Mon Oct 5", title:"Day 13 — TAPER: Recall Only", focus:"Locked & loaded",
    subtitle:"Grill cards + one light warm-up. Nothing new. Tomorrow you walk in cold and confident.",
    skills:{rw:["ci","evT","evQ","inf"], math:["psda"], label:"Taper Warm-up"},
    quests:[
      {name:"Grill catch-all — all cards from memory (no errors)", xp:50, type:"grill"},
      {name:"20-min mixed warm-up (SAT format)", xp:60, type:"practice"},
      {name:"Prep test-day bag & device (already done tonight)", xp:20, type:"log"}
    ],
    lesson:{
      h:"Taper — the discipline of stopping",
      html:`
        <div class="box"><b>What to do:</b> run every grill card from memory (Algebra forms, slope, elimination, flip rule, MUST-be-true test, MoE rule, correlation-vs-causation). Then one 20-minute SAT-format warm-up to keep the engines warm.</div>
        <div class="box"><b>What NOT to do:</b> no new topics, no YouTube rabbit holes, no 'one more practice test'. New information tonight crowds out what you've already banked.</div>
        <div class="box"><b>Logistics lock:</b> device charged, Bluebook exam setup done, admission ticket saved, route and wake time set, breakfast sorted. Leave nothing to tomorrow-morning-you.</div>
        <div class="box trap"><b>Sleeper tip:</b> dim lights after dinner, no screens 60 min before bed. A rested recall system is worth 30–50 points you've already earned.</div>`
    },
    tips:[
      {t:"Day-before rule: if you're tempted to study, re-read the Rule Sheet instead.", d:"One page, two minutes, done."}
    ]
  }
];

const GRILL_CARDS = [
  {q:"Name the 3 forms of a linear equation.", a:"Standard Ax+By=C · Slope-intercept y=mx+b · Point-slope y−y1=m(x−x1)"},
  {q:"Two points (x1,y1), (x2,y2): slope = ?", a:"m = (y2−y1)/(x2−x1)"},
  {q:"A system has 0 / 1 / ∞ solutions when…", a:"0: same slope, diff intercept · 1: different slopes · ∞: same line"},
  {q:"When must you flip an inequality sign?", a:"Multiplying or dividing by a negative"},
  {q:"Slope and y-intercept mean what in a 'cost per mile' story?", a:"Slope = per-unit cost · intercept = fixed/base fee"},
  {q:"Elimination's first instinct?", a:"Add/subtract the equations to kill a matched variable"},
  {q:"The Inference MUST rule?", a:"If the passage could be true while the choice is false, the choice is wrong — MUST hold."},
  {q:"'Support the claim' evidence — how to judge choices?", a:"Score each + (supports), − (weakens), 0 (does nothing). Pick the strongest +."},
  {q:"Quantitative evidence — what do you read FIRST?", a:"Axis labels, row/column headers, units. Then exact cells."},
  {q:"Margin of error 40% ±3.1% means…?", a:"The true value plausibly lies between 36.9% and 43.1%."},
  {q:"Random sampling vs random assignment — what each proves?", a:"Sampling → generalize to population · Random assignment (experiment) → causation."},
  {q:"P(A|B) = ?", a:"P(A and B) / P(B). Denominator = the group B defines."},
  {q:"+25% multiplier? −20%? +4%?", a:"×1.25 · ×0.80 · ×1.04"},
  {q:"3:5 ratio, 24 in the '3' group — total?", a:"Each part = 8 → (3+5)×8 = 64"},
  {q:"Central Idea answer must…", a:"Cover the WHOLE passage, at the right strength (not too strong)"},
  {q:"Perpendicular slope of m = 2?", a:"−1/2 (flip and negate)"},
  {q:"Transitions to score on the test… (name 3 categories)", a:"Contrast (however) · Cause/effect (therefore) · Addition (moreover) · Sequence (meanwhile) · Emphasis (indeed) · Example (for instance)"},
  {q:"Grid-in sanity rule", a:"If your answer describes a person/count/object, it can't be negative or a decimal — re-check."}
];