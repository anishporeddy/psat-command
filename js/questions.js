const SKILL_NAMES = {
  ci:"Central Ideas", evT:"Evidence: Textual", evQ:"Evidence: Quantitative", inf:"Inferences",
  wic:"Words in Context", tsp:"Text Structure & Purpose", cross:"Cross-Text Connections",
  trans:"Transitions", rsynth:"Rhetorical Synthesis", conv:"Conventions",
  lin1:"Linear Equations I", lin2:"Slope & Forms", lfun:"Linear Functions", sys:"Systems & Inequalities",
  adv:"Advanced Math", geo:"Geometry & Trig", psda:"Ratios & Percent", data:"Data & Stats", prob:"Probability & Claims"
};

const DQuest = {
  ci:["ci","evT","evQ","inf"], evT:["evT","ci"], evQ:["evQ","ci","inf"], inf:["inf","ci"],
  lin1:["lin1","lin2"], lin2:["lin2","lin1"], lfun:["lfun","lin2","sys"], sys:["sys","lin1"],
  psda:["psda","data","prob"], data:["data","prob","psda"], prob:["prob","data"]
};

const QUESTION_POOL = [
// ---------- READING & WRITING: Information & Ideas ----------
{id:"ci1", sec:"rw", skill:"ci", diff:1, p:"Bats navigate in darkness by emitting high-frequency calls and reading the returning echoes. Some insects, however, escape predation by folding their wings, shrinking to a size that the echoes barely register.", q:"Which choice best states the central idea of the text?", c:[
  "Bats are more accurate navigators than other nocturnal animals.",
  "Some insects have evolved adaptations that help them avoid bat echolocation.",
  "Insects cannot detect the high-frequency calls of bats.",
  "Echolocation is only effective over short distances."], a:1,
  ex:"Sentence 1 describes how bats navigate; sentence 2 answers how insects defend themselves (wing-folding shrinks the echo target). The central idea is that insects have adapted to evade echolocation.",
  trap:"Choice 0 is true-ish but out of scope (the passage never compares bats to other animals). 2 and 3 are unsupported details."},

{id:"ci2", sec:"rw", skill:"ci", diff:1, p:"City leaders touted the new stadium as an economic engine. A year in, the venue has hosted fewer events than expected, and nearby businesses report only modest gains. Supporters still point to the jobs created, while critics call the public subsidy a poor investment.", q:"Which choice best states the central idea of the text?", c:[
  "The stadium has clearly benefited the city.",
  "The stadium's economic value remains disputed.",
  "The stadium hosted fewer events than expected.",
  "Jobs created by the stadium outweigh its cost."], a:1,
  ex:"The text presents both a positive view (jobs, supporter case) and a negative one (fewer events, critique). The measured central idea is that the value is contested.",
  trap:"2 is a detail, not the point. 0 and 3 each take one side only — the text is balanced, so a one-sided answer is too strong."},

{id:"ci3", sec:"rw", skill:"ci", diff:2, p:"Prairie dogs use distinct alarm calls. Studies show that for each predator type — hawk, coyote, human — the emitted call differs in structure, and colony members respond with predator-appropriate evasive behavior.", q:"Which choice best states the central idea of the text?", c:[
  "Prairie dogs warn one another using predator-specific calls.",
  "Hawks are the clearest threat to prairie dogs.",
  "Prairie dogs cannot distinguish between predators.",
  "Alarm calls have no effect on prairie dog behavior."], a:0,
  ex:"Call structure varies by predator and behavior matches the predator type — so calls are predator-specific warnings.",
  trap:"2 and 3 contradict the text. 1 overreaches; no comparison of threats is made."},

{id:"ci4", sec:"rw", skill:"ci", diff:2, p:"Bird migration is governed largely by temperature and food availability. In urban corridors, artificial light disrupts the cues birds rely on, shifting migration timing and, in some cases, redirecting flight paths.", q:"Which choice best states the central idea of the text?", c:[
  "Urban light pollution alters the timing and routing of bird migration.",
  "Temperature is the only factor governing migration.",
  "Migration timing never changes between years.",
  "Artificial light has no measurable effect on birds."], a:0,
  ex:"The second sentence states the effect (disrupts cues, shifts timing and paths); combined with the first, the idea is that urban light disrupts migration patterns.",
  trap:"1 and 3 contradict the text; 4 negates it entirely."},

{id:"evT1", sec:"rw", skill:"evT", diff:1, p:"A biologist hypothesizes that female tree frogs select mates by recognizing bright coloring rather than by call alone.", q:"Which finding, if true, would most directly support the biologist's hypothesis?", c:[
  "Females consistently approached speakers broadcasting calls from frogs of their own color morph.",
  "Leaf brightness varies with a frog's age and diet.",
  "Males with the most vibrant colors also produced the loudest calls.",
  "In complete darkness, females still approached any male call."], a:0,
  ex:"Females going for same-colored but unfamiliar calls isolates color as the cue — exactly what the hypothesis predicts.",
  trap:"3 is irrelevant (confounds color and volume); 4 actually weakens the hypothesis (call alone is enough in darkness)."},

{id:"evT2", sec:"rw", skill:"evT", diff:2, p:"Some historians argue that the trade treaty mattered mainly for its economic provisions.", q:"Which piece of evidence would most directly support this view?", c:[
  "Diplomatic records show negotiators spent nearly all sessions on tariff schedules.",
  "The treaty also included a short section on cultural exchange.",
  "Signatories ratified the treaty in the same year.",
  "The treaty was widely reported in the international press."], a:0,
  ex:"If most negotiating time went to tariffs (an economic provision), the economy was the core — direct support.",
  trap:"1 and 2 are irrelevant to the claim's focus; 3 says nothing about which provisions mattered."},

{id:"evT3", sec:"rw", skill:"evT", diff:2, p:"Researchers argue that crashes involving phone use stem from distraction rather than from higher driving speeds.", q:"Which finding, if true, would most directly support this argument?", c:[
  "Injury rates rose over the same period that average driving speeds decreased.",
  "Phone use is more common among younger drivers.",
  "Crashes also correlated with rainy-weather conditions.",
  "Older cars lack hands-free calling features."], a:0,
  ex:"Crashes up while speeds down rules out speed as the cause — leaving distraction as the explanation.",
  trap:"2 and 4 are background facts; 3 introduces a competing correlation but does not touch the distraction-vs-speed question."},

{id:"evT4", sec:"rw", skill:"evT", diff:3, p:"A researcher is skeptical of the claim that bilingual children have a general cognitive 'bilingual advantage.'", q:"Which finding, if true, would most directly support the researcher's skepticism?", c:[
  "When socioeconomic status was accounted for, the bilingual advantage disappeared.",
  "Bilingual toddlers scored higher on attention tests.",
  "Test scores varied widely within each language group.",
  "Researchers used the very same test in every study."], a:0,
  ex:"If the advantage vanishes once background is controlled, the apparent edge was not caused by bilingualism.",
  trap:"1 would support the advantage, not the skepticism; 2 and 3 don't test whether the advantage is real."},

{id:"evQ1", sec:"rw", skill:"evQ", diff:1, g:`<b>Apple & pear harvest (kg)</b>
<table><tr><th>Year</th><th>Apples</th><th>Pears</th></tr>
<tr><td>2020</td><td>120</td><td>90</td></tr>
<tr><td>2021</td><td>100</td><td>110</td></tr></table>`, q:"Which choice is best supported by the data in the table?", c:[
  "Both crops were harvested more in 2021 than in 2020.",
  "The apple harvest rose while the pear harvest fell.",
  "The apple harvest fell while the pear harvest rose.",
  "The harvests were identical in both years."], a:2,
  ex:"Apples: 120 → 100 (fell). Pears: 90 → 110 (rose).",
  trap:"Reading across the wrong row, or rounding by 'feel' instead of comparing exact cells, produces 0 and 1."},

{id:"evQ2", sec:"rw", skill:"evQ", diff:1, g:`<b>Quarterly sales (thousands of units)</b>
<table><tr><th>Quarter</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr>
<tr><td>Sales</td><td>40</td><td>55</td><td>50</td><td>62</td></tr></table>`, q:"Which choice is best supported by the data in the table?", c:[
  "Sales rose every quarter of the year.",
  "Sales were higher in the second half of the year than in the first.",
  "Sales were identical in Q1 and Q4.",
  "Sales peaked in the first quarter."], a:1,
  ex:"First half: 40+55 = 95. Second half: 50+62 = 112. 112 > 95, so the second half was stronger.",
  trap:"Q2→Q3 actually fell, so 0 is false; 3 and 4 contradict the numbers (40 vs 62)."},

{id:"evQ3", sec:"rw", skill:"evQ", diff:2, g:`<b>Average monthly temperature (°C)</b>
<table><tr><th>Month</th><td>J</td><td>F</td><td>M</td><td>A</td><td>M</td><td>J</td><td>J</td><td>A</td><td>S</td></tr>
<tr><td>Temp</td><td>2</td><td>5</td><td>9</td><td>14</td><td>19</td><td>23</td><td>24</td><td>24</td><td>24</td></tr></table>`, q:"Which choice is best supported by the data in the table?", c:[
  "Temperatures increased steadily across the entire period.",
  "Temperatures rose sharply through spring and then leveled off in late summer.",
  "Temperatures fell steadily during the summer months.",
  "Temperatures were highest in April."], a:1,
  ex:"Spring jumps (2→23 by June), then the value holds at 24 from July to September — rise then plateau.",
  trap:"0 ignores the plateau (July–September are flat, not steadily rising)."},

{id:"evQ4", sec:"rw", skill:"evQ", diff:2, g:"<b>Scatterplot:</b> x-axis = hours studied per week (0–10); y-axis = test score (0–100). Points trend upward from (1, 40) to (10, 95).", q:"Which choice best describes the relationship shown in the scatterplot?", c:[
  "Generally positive: more study hours are associated with higher scores.",
  "Negative: study hours and scores move in opposite directions.",
  "No discernible relationship exists between the variables.",
  "Scores fell as study time increased."], a:0,
  ex:"Points rise left to right, so higher study hours pair with higher scores — a positive association.",
  trap:"The trap is pattern-matching to 'trend' without reading the axes; 1 and 3 misread the direction entirely."},

{id:"inf1", sec:"rw", skill:"inf", diff:1, p:"In glaciers, ice layers accumulate annually, and thicker layers result from heavier snowfall in that year.", q:"It can be inferred from the text that:", c:[
  "A thick layer indicates a high-snowfall year.",
  "Thick layers signal warmer temperatures.",
  "Layer depth measures the glacier's age directly.",
  "Snowfall has no effect on layer thickness."], a:0,
  ex:"Thicker layer ↔ heavier snowfall is a direct if-then chain the text asserts; the inference is immediate.",
  trap:"2 and 4 contradict or ignore the stated link; 3 confuses density with age."},

{id:"inf2", sec:"rw", skill:"inf", diff:2, p:"A species of warbler begins migrating only once day length falls below 12 hours. In October, daylight at the region's latitude stays under 11 hours.", q:"Which conclusion is most strongly supported by the text?", c:[
  "Warblers in the region are likely within their migration window in October.",
  "The warblers migrate only when temperatures rise.",
  "Day length has no influence on warbler behavior.",
  "The warblers live in the region year-round."], a:0,
  ex:"Below 12h is the trigger; October gives under 11h, so the trigger is met — migration is likely underway.",
  trap:"The passage says nothing about temperature or residency, so 1, 2, 3 are unsupported imports from the real world."},

{id:"inf3", sec:"rw", skill:"inf", diff:2, p:"When the company raised widget prices by 20%, unit sales changed by less than 2%.", q:"Which inference about demand for widgets is best supported by the text?", c:[
  "Demand for widgets is relatively insensitive to price.",
  "Customers abandoned widgets entirely after the increase.",
  "The price increase caused sales to collapse.",
  "Company profits certainly fell after the increase."], a:0,
  ex:"A 20% price hike barely moved sales — quantity demanded resisted the price change (inelastic demand).",
  trap:"1 and 2 contradict 'less than 2%'; 3 (profits) is unstated — revenue math isn't given."},

{id:"inf4", sec:"rw", skill:"inf", diff:3, p:"In 1815, Mount Tambora erupted, ejecting vast sulfur aerosols that block sunlight. In 1816, dubbed 'the year without a summer,' global temperatures fell and crops failed across the Northern Hemisphere.", q:"Which inference is best supported by the text?", c:[
  "The 1815 eruption likely contributed to the 1816 cooling.",
  "Volcanoes always cool every hemisphere equally.",
  "Crop failures caused the 1815 eruption.",
  "Sulfur aerosols warm the atmosphere."], a:0,
  ex:"The eruption produced a sunlight-blocking effect and was immediately followed by global cooling — a supported causal chain.",
  trap:"1 and 3 are too absolute or reversed; 4 contradicts the stated mechanism."},

// ---------- R&W: Craft & Structure ----------
{id:"wic1", sec:"rw", skill:"wic", diff:1, p:"Though the town's population had been stagnant for decades, the new factory brought an influx of workers, and by the season's end the census rolls had swelled.", q:"As used in the text, 'influx' most nearly means:", c:[
  "a steady decrease",
  "a deliberate plan",
  "a sudden large arrival",
  "an economic downturn"], a:2,
  ex:"Workers arriving and rolls swelling after a factory = a sudden large arrival. The factory is the cause; the swelling is the effect.",
  trap:"Choosing based on a memorized 'premium vocab' guess instead of the sentence's cause-and-effect clues (0, 1, 3)."},

{id:"wic2", sec:"rw", skill:"wic", diff:2, p:"Although the results did not prove the hypothesis, they were consistent with it, and the team flagged follow-up tests.", q:"As used in the text, 'consistent with' most nearly means:", c:[
  "in opposition to",
  "in agreement with",
  "unrelated to",
  "roughly equal to the size of"], a:1,
  ex:"The results did not prove it but did fit it — 'in agreement with.' The key is nuance: supported/agreeable, not confirmed.",
  trap:"0 and 2 reverse the meaning; 3 is an idiom misread ('consistent with' is not about physical size)."},

{id:"wic3", sec:"rw", skill:"wic", diff:2, p:"Rather than a single overhaul, the team pursued incremental reforms, each step small enough to keep services running throughout the transition.", q:"As used in the text, 'incremental' most nearly means:", c:[
  "intended to be permanent and final",
  "moving in small stages or steps",
  "risky and unplanned",
  "identical in scale to its predecessor"], a:1,
  ex:"'Each step small enough' defines it: changes made gradually, in small stages.",
  trap:"0 and 3 import ideas (permanence, identical scale) that the sentence never supports."},

{id:"tsp1", sec:"rw", skill:"tsp", diff:1, p:"Critics argue that electric vehicles simply shift emissions from the tailpipe to the power plant. However, a closer look at grid projections suggests that most electricity will be low-carbon by 2040.", q:"The second sentence primarily serves to:", c:[
  "concede a point about power plants",
  "introduce a counterargument to the critics' claim",
  "restate the critics' concern in new words",
  "offer a specific example of tailpipe emissions"], a:1,
  ex:"'However' + the low-carbon projection directly opposes the critics' framing — a counterargument.",
  trap:"0 misreads concession; 2 would be repeating; 3 describes something the text never does."},

{id:"tsp2", sec:"rw", skill:"tsp", diff:2, p:"Kepler described planetary orbits with elegant mathematical rules, but he could not explain why planets moved as they did. Newton's law of gravitation supplied that underlying cause, unifying terrestrial and celestial motion.", q:"The second sentence primarily serves to:", c:[
  "criticize Kepler's mathematical methods",
  "explain the broader significance of Newton's discovery",
  "question the value of mathematics",
  "compare Kepler unfavorably to Newton"], a:1,
  ex:"The second sentence takes Newton's law and marks what it accomplished (the cause, unification) — significance, not a comparison.",
  trap:"0 and 3 read criticism into a neutral statement; the sentence describes achievement, not value judgment."},

{id:"tsp3", sec:"rw", skill:"tsp", diff:2, p:"The poem opens with a stanza describing an autumn harvest, moves to a domestic scene, and closes with a reflection on change.", q:"The primary purpose of the passage is to:", c:[
  "analyze the poem's rhyme scheme in detail",
  "provide an overview of the poem's structure and progression",
  "argue against the poem's central theme",
  "identify the poem's author"], a:1,
  ex:"The sentence walks through beginning → middle → end: a structural overview.",
  trap:"0 invents content (rhyme) the text never mentions."},

{id:"cross1", sec:"rw", skill:"cross", diff:2, p:"<b>Text 1 —</b> The painter's early landscapes capture light with photographic precision. <b>Text 2 —</b> In later works, the painter dissolved form into luminous patches, prioritizing feeling over accuracy.", q:"How would the author of Text 2 most likely respond to the claim that precision is the painter's greatest achievement?", c:[
  "He would agree that precision was always the goal.",
  "He would argue that the painter's later work moved beyond precision.",
  "He would claim accuracy never mattered at all.",
  "He would say critics misread the early landscapes."], a:1,
  ex:"Text 2 values feeling over accuracy in later work — the author's whole point is that the painter outgrew precision.",
  trap:"0 contradicts Text 2; 2 is too absolute; 3 invents an argument Text 2 never makes."},

{id:"cross2", sec:"rw", skill:"cross", diff:3, p:"<b>Text 1 —</b> Solar geoengineering remains too risky to deploy. Its regional effects are poorly understood, and halting it abruptly could trigger shocks. <b>Text 2 —</b> Declining costs will make solar geoengineering increasingly attractive as warming accelerates; the question is no longer whether, but how to govern it.", q:"The author of Text 2 would most likely respond to Text 1's 'too risky to deploy' claim by arguing that:", c:[
  "risk is irrelevant to the deployment decision",
  "deployment is no longer avoidable, so the task is to manage risk rather than to prevent it",
  "risks are identical in every region and climate",
  "geoengineering should be permanently banned"], a:1,
  ex:"Text 2 says the question became how to govern it, i.e., it's coming — manage the risk instead of avoiding deployment.",
  trap:"0 is too absolute ('irrelevant'); 3 and 4 are unsupported and directly contradict Text 2's 'how to govern' stance."},

// ---------- R&W: Expression of Ideas ----------
{id:"trans1", sec:"rw", skill:"trans", diff:1, p:"The lab's equipment is decades old. ______ its results remain reproducible.", q:"Which choice completes the text with the most logical transition?", c:[
  "Therefore",
  "Nevertheless",
  "For example",
  "Similarly"], a:1,
  ex:"Old equipment normally predicts worse results — the results are good anyway. That contrast needs a contrast word.",
  trap:"0 makes a cause-effect claim; 2 and 3 signal example/similarity, not opposition."},

{id:"trans2", sec:"rw", skill:"trans", diff:2, p:"Most frogs lay eggs in standing water. ______, some tropical species deposit eggs in moist leaf litter instead.", q:"Which choice completes the text with the most logical transition?", c:[
  "Therefore",
  "However",
  "For example",
  "In addition"], a:1,
  ex:"The second idea (leaf litter) contradicts the general pattern (standing water) → contrast → 'However.'",
  trap:"4 ('In addition') has the right vague feel but signals agreement; the correct cue is the exception."},

{id:"trans3", sec:"rw", skill:"trans", diff:3, p:"Across forty trials the effect, though small, reappeared. ______, the consistency of the result was striking.", q:"Which choice completes the text with the most logical transition?", c:[
  "Therefore",
  "By contrast",
  "For instance",
  "Indeed"], a:3,
  ex:"The second sentence strengthens/emphasizes the first ('striking') — emphasis word 'Indeed' fits; 'Therefore' would suggest a conclusion (cause→effect) that isn't present.",
  trap:"0 implies the consistency caused something; 1 and 2 signal contrast and example, not intensification."},

{id:"rsynth1", sec:"rw", skill:"rsynth", diff:1, p:"The student wants to note the age range of a study on teenagers' sleep. Notes: Survey of 1,200 students; ages 14–18; average sleep 7.1 hours.", q:"Which choice most effectively uses the information from the notes to accomplish the goal?", c:[
  "A study found that teens sleep an average of 7.1 hours.",
  "In a survey of 1,200 students ages 14–18, average sleep was 7.1 hours.",
  "Most teens sleep exactly 7.1 hours per night.",
  "A large, well-known study found that teens are sleeping poorly."], a:1,
  ex:"The goal is the age range; only the correct choice states 'ages 14–18' without adding claims beyond the notes.",
  trap:"2 adds 'exactly' (unstated); 3 adds 'sleeping poorly'; 0 omits the very detail the goal demands."},

{id:"rsynth2", sec:"rw", skill:"rsynth", diff:2, p:"The student wants to identify the region that reported the greatest increase in exports. Notes: Region A — exports +5%, imports +12%; Region B — exports +11%, imports +3%; Region C — exports +8%, imports +9%.", q:"Which choice most effectively uses the information to accomplish the goal?", c:[
  "Region A, whose imports rose 12%, posted the strongest trade performance.",
  "Region B reported the largest export growth, at 11%.",
  "Region C's exports rose moderately, by 8%.",
  "All regions increased exports and imports equally."], a:1,
  ex:"Goal = greatest export increase → +11% (Region B) wins. The answer names Region B and cites the right number.",
  trap:"0 answers the wrong metric (imports); 3 is a fact but incomplete relative to the goal ('identify the region')."},

{id:"rsynth3", sec:"rw", skill:"rsynth", diff:3, p:"The student wants to emphasize how participants were selected. Notes: survey of 1,200 adults; participants reached by random-digit dialing; margin of error ±2.8%.", q:"Which choice most effectively uses the information to accomplish the goal?", c:[
  "A random-digit-dialing survey of 1,200 adults reported a margin of error of ±2.8%.",
  "A survey of 1,200 adults asked them about many different topics.",
  "The margin of error was modest because the sample was so large.",
  "Adults reached by phone reported higher satisfaction than others."], a:0,
  ex:"Goal = selection method → 'random-digit dialing' is named, and no extra claim is smuggled in.",
  trap:"2, 3, 4 add material not in the notes ('modest because…', 'reported higher satisfaction') — invented details."},

// ---------- R&W: Conventions ----------
{id:"conv1", sec:"rw", skill:"conv", diff:1, p:"The streetlights flickered back to life, one by one, after the storm.", q:"Which version of the sentence correctly conforms to the conventions of Standard English?", c:[
  "After the storm, the streetlights flickered back to life.",
  "After the storm: the streetlights flickered back to life.",
  "After the storm. the streetlights flickered back to life.",
  "After the storm; flickered back to life the streetlights."], a:0,
  ex:"A short introductory phrase ('after the storm') takes a comma before the main clause.",
  trap:"1: a colon can't separate an intro phrase from the clause. 2: period makes a fragment. 3: semicolon requires an independent clause on both sides."},

{id:"conv2", sec:"rw", skill:"conv", diff:2, p:"The flock of birds, spooked by the sudden noise, ______ from the tree.", q:"Which choice completes the text so that it conforms to Standard English conventions?", c:[
  "scatter",
  "scatters",
  "was scatter",
  "have scattered"], a:1,
  ex:"The subject is 'flock' (singular); 'of birds' is a prepositional phrase and can never be the subject. Singular subject → singular verb 'scatters.'",
  trap:"0 and 3 match 'birds' instead of 'flock' — the classic prepositional-phrase bait."},

{id:"conv3", sec:"rw", skill:"conv", diff:2, p:"The plan, which the committee had debated for months, ______ approved at last.", q:"Which choice completes the text so that it conforms to Standard English conventions?", c:[
  "were",
  "are",
  "was",
  "have been"], a:2,
  ex:"Subject = 'the plan' (singular, noncount context), so the singular past 'was' agrees. 'Which the committee…' is a modifying clause, not the subject.",
  trap:"0 and 3 lean on 'committee' (a crossed-out noun) instead of 'plan.'"},

{id:"conv4", sec:"rw", skill:"conv", diff:3, p:"The results were consistent ______ they were not definitive.", q:"Which choice completes the text so that it conforms to Standard English conventions?", c:[
  "The results were consistent, they were not definitive.",
  "The results were consistent; they were not definitive.",
  "The results were consistent they were not definitive.",
  "The results were consistent: they were, not definitive."], a:1,
  ex:"Two full independent clauses joined with a contrast word get a semicolon.",
  trap:"0 is a comma splice; 2 is a run-on; 3 misuses the colon and breaks the second clause."},

// ---------- MATH: Algebra ----------
{id:"lin1_1", sec:"math", skill:"lin1", diff:1, q:"If 4(x − 3) = 20, what is the value of x?", c:["4","5","8","12"], a:2,
  ex:"Divide both sides by 4 → x − 3 = 5 → x = 8.",
  trap:"Rushing: subtracting 3 instead of adding (−→ x = 2 is not an option, but adding wrong constants is the error)."},

{id:"lin1_2", sec:"math", skill:"lin1", diff:1, q:"If 3(x + 2) = 2(x + 7), what is the value of x?", c:["6","7","8","10"], a:2,
  ex:"3x + 6 = 2x + 14 → x = 8.",
  trap:"(x+2) and (x+7) both get a term; forgetting either distribution creates 7 or 10."},

{id:"lin1_3", sec:"math", skill:"lin1", diff:2, q:"If 2x − 7 = 3x + 4, what is the value of x?", c:["−11","3","11","18"], a:0,
  ex:"2x − 7 − 3x = 4 → −x = 11 → x = −11.",
  trap:"Sign slips moving the 3x across are the #1 error — write the subtraction step down."},

{id:"lin1_4", sec:"math", skill:"lin1", diff:2, q:"If x/3 + 5 = 8, what is the value of x?", c:["6","9","12","15"], a:1,
  ex:"x/3 = 3 → x = 9.",
  trap:"Doing the final multiply in the wrong direction: x/3 = 3 means x = 3×3 = 9, not 3÷3."},

{id:"lin1_5", sec:"math", skill:"lin1", diff:2, q:"Solve for x: 5 = 3x/4 − 4", grid:true, gr:["12"],
  ex:"9 = 3x/4 → multiply by 4: 36 = 3x → x = 12.",
  trap:"Grid-in: keep it integer; if your answer were 12/3 you'd be mid-solve."},

{id:"lin2_1", sec:"math", skill:"lin2", diff:1, q:"What is the slope of the line through the points (2, 5) and (6, −7)?", c:["−3","3","−1/3","12"], a:0,
  ex:"m = (−7 − 5)/(6 − 2) = −12/4 = −3.",
  trap:"Inverting rise/run or mixing the order of the differences flips or inverts the answer."},

{id:"lin2_2", sec:"math", skill:"lin2", diff:1, q:"What is the y-intercept of the line y = (2/3)x + 6?", c:["2/3","6","−9","−6"], a:1,
  ex:"y = mx + b → b = 6 is the y-intercept.",
  trap:"−9 is the x-intercept (a classic switch error); 2/3 is the slope."},

{id:"lin2_3", sec:"math", skill:"lin2", diff:2, q:"At what x-value does the line y = (2/3)x + 6 cross the x-axis?", c:["−9","6","9","−6"], a:0,
  ex:"Set y = 0: (2/3)x = −6 → x = −9.",
  trap:"Solving (2/3)x = −6: x = −6 × (3/2) = −9. Dividing by 2/3 (instead of multiplying) gives the wrong sign/shape."},

{id:"lin2_4", sec:"math", skill:"lin2", diff:1, q:"What is the slope of the line y = 3x − 1?", c:["−1","1","3","−3"], a:2,
  ex:"Slope-intercept form: coefficient of x is the slope → 3.",
  trap:"The y-intercept (−1) is a distractor; don't read slope from the constant term."},

{id:"lin2_5", sec:"math", skill:"lin2", diff:2, q:"A line is parallel to y = 2x + 5 and passes through (0, −1). Which equation describes it?", c:["y = 2x − 1","y = −2x − 1","y = 2x + 5","y = x − 1"], a:0,
  ex:"Parallel → same slope (2). Through (0, −1) → y-intercept −1 → y = 2x − 1.",
  trap:"Copying the original equation (2) without swapping the intercept, or negating the slope (1)."},

{id:"lfun1", sec:"math", skill:"lfun", diff:2, q:"A car rental charges $5 per day plus $0.40 per mile. A customer pays $37 (not including tax) for a one-day rental. How many miles were driven?", grid:true, gr:["80"],
  ex:"37 = 5 + 0.40m → 0.40m = 32 → m = 80.",
  trap:"The $5 fixed fee is the intercept; forgetting it inflates the miles to 92.5."},

{id:"lfun2", sec:"math", skill:"lfun", diff:1, q:"A plant is 4 cm tall and grows 1.5 cm per day. After t days its height is h = 4 + 1.5t. What is its height after 10 days?", c:["15 cm","17.5 cm","19 cm","22 cm"], a:2,
  ex:"h = 4 + 1.5(10) = 4 + 15 = 19.",
  trap:"Computing 1.5×10 off, or reading '4 cm' as the slope instead of the intercept."},

{id:"lfun3", sec:"math", skill:"lfun", diff:2, q:"The graph of a linear function passes through (0, 2), (1, 5), and (2, 8). What is the value of the function at x = 5?", c:["15","17","20","23"], a:1,
  ex:"Slope = 3, intercept 2 → y = 3x + 2 → at x=5 gives 17.",
  trap:"Using the rule backward or only extrapolating from the nearest row instead of the rule."},

{id:"lfun4", sec:"math", skill:"lfun", diff:3, q:"A car uses fuel at a constant rate, consuming 6 gallons over 150 miles. At the same rate, how many gallons does it need for 300 miles?", c:["8","10","12","15"], a:2,
  ex:"6 gal / 150 mi = 1 gal per 25 mi → 300/25 = 12 gallons.",
  trap:"Halving/doubling by 'feel' (300 is 2×150, so 12 gal) works here only if you first lock the rate — the trap is answering 8 or 10 from a guessed rate."},

{id:"sys1", sec:"math", skill:"sys", diff:1, q:"If 2a + b = 17 and a − b = 1, what is the value of a?", c:["5","6","7","11"], a:1,
  ex:"Add the equations: 3a = 18 → a = 6.",
  trap:"Adding incorrectly (dropping the −b) or solving for b first and stopping."},

{id:"sys2", sec:"math", skill:"sys", diff:2, q:"If 3x + 2y = 12 and x − 2y = −8, what is the value of x?", c:["−1","1","4","20"], a:1,
  ex:"Add: 4x = 4 → x = 1.",
  trap:"Adding the y-terms to zero (2y and −2y) is the fast kill; doing substitution instead invites sign errors."},

{id:"sys3", sec:"math", skill:"sys", diff:2, q:"If y = 2x + 3 and y = −x + 9, what is the value of x + y?", c:["7","9","11","12"], a:1,
  ex:"2x + 3 = −x + 9 → 3x = 6 → x = 2, y = 7 → x + y = 9.",
  trap:"Answering just x (2) or just y (7) when asked for the sum — reread the last 3 words."},

{id:"sys4", sec:"math", skill:"sys", diff:2, q:"5x − 7 < 3x + 11. What is the largest integer that satisfies the inequality?", c:["7","8","9","10"], a:1,
  ex:"2x < 18 → x < 9 → largest integer is 8.",
  trap:"Answering 9 (forgetting the strict <) — the inequality excludes 9 itself."},

{id:"sys5", sec:"math", skill:"sys", diff:2, q:"How many solutions does the system 3x + 6y = 12 and x + 2y = 4 have?", c:["Exactly one","Exactly two","No solution","Infinitely many"], a:3,
  ex:"Second equation ×3 gives the first — the same line. Same line → infinitely many solutions.",
  trap:"Seeing 'two equations' and assuming one solution; check proportionality first."},

// ---------- MATH: Advanced Math ----------
{id:"adv1", sec:"math", skill:"adv", diff:1, q:"When the expression (3x + 1)(x − 2) is written in the form ax² + bx + c, what is the value of b?", c:["−5","5","−2","−1"], a:0,
  ex:"= 3x² − 6x + x − 2 = 3x² − 5x − 2 → b = −5.",
  trap:"Adding the two middle terms with the wrong sign (−6x + x = −5x, not −7x or +5x)."},

{id:"adv2", sec:"math", skill:"adv", diff:2, q:"What is the sum of the solutions of x² − 4x − 12 = 0?", c:["2","4","6","−4"], a:1,
  ex:"(x − 6)(x + 2) = 0 → solutions 6 and −2 → sum 4. (Or Vieta: sum = −b/a = 4.)",
  trap:"Answering the sum of the factors' signs wrong, or listing roots 6 and −2 and adding as 6 − 2."},

{id:"adv3", sec:"math", skill:"adv", diff:2, q:"How many distinct real solutions does the equation 3x² + 6x + 3 = 0 have?", c:["0","1","2","3"], a:1,
  ex:"Divide by 3 → (x + 1)² = 0 → one distinct solution, x = −1.",
  trap:"Counting the double root twice — 'two solutions, both −1' — yields 2; the correct count is distinct solutions."},

{id:"adv4", sec:"math", skill:"adv", diff:1, q:"Let f(x) = 2x² − 3x + 1. What is f(3)?", c:["10","12","16","28"], a:0,
  ex:"f(3) = 2(9) − 9 + 1 = 18 − 9 + 1 = 10.",
  trap:"Evaluating −3x as −3·3 with a sign slip, or computing 3² as 6."},

{id:"adv5", sec:"math", skill:"adv", diff:2, q:"An object's value is modeled by y = 250(0.8)^t, where t is time in years. Each year, the value changes by what percent?", c:["increases 8%","decreases 20%","decreases 80%","increases 20%"], a:1,
  ex:"Base 0.8 = 1 − 0.20 → decreases 20% per year.",
  trap:"Reading 0.8 as '80% of the value stays' correctly but answering 'decreases 80%' — you want the change amount."},

{id:"adv6", sec:"math", skill:"adv", diff:3, q:"If √(3x + 6) = 6, what is the value of x?", grid:true, gr:["10"],
  ex:"Square both sides: 3x + 6 = 36 → 3x = 30 → x = 10.",
  trap:"When you square, check your solution in the original equation — extraneous roots are real on this test."},

// ---------- MATH: Geometry & Trig ----------
{id:"geo1", sec:"math", skill:"geo", diff:1, q:"The angles of a triangle measure 2x°, 3x°, and 4x°. What is the measure of the largest angle?", c:["40°","60°","80°","100°"], a:2,
  ex:"9x = 180 → x = 20 → largest = 4(20) = 80°.",
  trap:"Answering x (20°) instead of the angle, or the smallest angle (40°)."},

{id:"geo2", sec:"math", skill:"geo", diff:1, q:"A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?", c:["10","12","14","100"], a:0,
  ex:"6² + 8² = 36 + 64 = 100 → √100 = 10 (a 3-4-5 family triple).",
  trap:"Adding 6 + 8 = 14 (careless), or forgetting to take the square root (100)."},

{id:"geo3", sec:"math", skill:"geo", diff:2, q:"In a right triangle, sin θ = 5/13. What is the value of cos θ?", c:["5/12","12/13","13/12","8/13"], a:1,
  ex:"sin = opp/hyp → opp 5, hyp 13 → third side 12 → cos = adj/hyp = 12/13.",
  trap:"Mixing sin and cos, or assuming the 5-12-13 triple has hyp 12 (it's 13)."},

{id:"geo4", sec:"math", skill:"geo", diff:1, q:"A circle has radius 9. What is its circumference?", c:["9π","18π","36π","81π"], a:1,
  ex:"C = 2πr = 2π(9) = 18π.",
  trap:"Using the area formula (81π) or mixing r² into circumference."},

{id:"geo5", sec:"math", skill:"geo", diff:3, q:"A circle has radius 12. What is the length of the arc cut by a central angle of 60°?", c:["2π","4π","6π","12π"], a:1,
  ex:"Arc = (60/360)·2πr = (1/6)·24π = 4π.",
  trap:"Using 2πr fractionally wrong, or computing sector area (which would be 24π) instead."},

{id:"geo6", sec:"math", skill:"geo", diff:1, q:"A rectangular prism measures 4 by 5 by 6. What is its volume?", c:["15","90","120","210"], a:2,
  ex:"V = l·w·h = 4·5·6 = 120.",
  trap:"Using surface-area thinking (4·5 + 5·6 + 4·6) or adding two dimensions only."},

// ---------- MATH: PSDA ----------
{id:"psda1", sec:"math", skill:"psda", diff:1, q:"In a club, the ratio of boys to girls is 3:5. There are 24 boys. How many students are in the club?", c:["40","48","64","80"], a:2,
  ex:"Each part = 24/3 = 8 → girls = 40, total = 24 + 40 = 64.",
  trap:"Answering just the girls (40) or adding parts to the boys' number directly (24 + 3 + 5)."},

{id:"psda2", sec:"math", skill:"psda", diff:1, q:"A shirt costs $45. It is on sale for 20% off. What is the sale price?", c:["$34","$36","$45","$54"], a:1,
  ex:"×0.80: 45 × 0.80 = $36.",
  trap:"Subtracting 20 dollars instead of 20% (25), or computing $45 − $9 correctly but then adding tax/rounding."},

{id:"psda3", sec:"math", skill:"psda", diff:2, q:"A quantity increases from 80 to 100. What is the percent increase?", c:["20%","25%","30%","80%"], a:1,
  ex:"(100 − 80)/80 = 20/80 = 25%. The denominator is the STARTING value (80).",
  trap:"Using the final value as the denominator (20/100 = 20%) — the most common percent error on the test."},

{id:"psda4", sec:"math", skill:"psda", diff:1, q:"A cyclist rides 240 miles in 4 hours at a constant rate. At the same rate, what distance does she cover in 1 hour?", c:["40 miles","60 miles","80 miles","240 miles"], a:1,
  ex:"Unit rate = 240/4 = 60 mph.",
  trap:"Dividing hours by miles (4/240) or halving mentally from a spicier story set."},

{id:"data1", sec:"math", skill:"data", diff:1, q:"The mean of the five numbers {3, 5, 8, x, 12} is 8. What is the value of x?", c:["8","10","12","36"], a:2,
  ex:"Sum must be 40 → 28 + x = 40 → x = 12.",
  trap:"Confusing mean with median and picking the middle value (8)."},

{id:"data2", sec:"math", skill:"data", diff:2, q:"What is the mean of the set {2, 5, 9, 12}?", c:["7","9","10","28"], a:0,
  ex:"(2+5+9+12)/4 = 28/4 = 7.",
  trap:"Using the median instead (7 also equals the median here — but for the right reason: sum/4). If you used the median shortcut, it passes; know why."},

{id:"data3", sec:"math", skill:"data", diff:2, q:"A model predicts a score with the equation y = 3.5x + 12. What score does it predict when x = 20?", c:["70","78","82","92"], a:2,
  ex:"y = 3.5(20) + 12 = 70 + 12 = 82.",
  trap:"Reading the intercept as slope and vice versa (70 + 12 reversed = folly of 92, or 78 from mis-added arithmetic)."},

{id:"prob1", sec:"math", skill:"prob", diff:2, g:`<b>Brand preference by age group</b>
<table><tr><th></th><th>Prefers Brand A</th><th>Prefers Brand B</th></tr>
<tr><td>Under 18</td><td>25</td><td>15</td></tr>
<tr><td>18 or older</td><td>30</td><td>30</td></tr></table>`, q:"A person is chosen at random from those who are 18 or older. What is the probability that the person prefers Brand B?", c:["1/4","1/3","1/2","3/5"], a:2,
  ex:"18+ total = 30 + 30 = 60; Brand B among them = 30 → 30/60 = 1/2.",
  trap:"Using the whole-table total (100) as the denominator instead of the 18+ group (60) — conditional probability, not plain probability."},

{id:"prob2", sec:"math", skill:"prob", diff:2, q:"A poll of 1,200 people finds that 40% approve of a policy, with a margin of error of ±3.1%. Which interval describes the plausible range for the approval?", c:[
  "36.9% to 43.1%",
  "39% to 43%",
  "40% exactly",
  "3.1% to 40%"], a:0,
  ex:"Interval = estimate ± margin of error → 40 − 3.1 = 36.9 and 40 + 3.1 = 43.1.",
  trap:"Subtracting the margin from the wrong side, or reading ±3.1 as a total width — it's half-width."},

{id:"prob3", sec:"math", skill:"prob", diff:3, q:"A researcher wants to determine whether a running program CAUSES lower blood pressure. Which of the following designs would best support a causal claim?", c:[
  "Randomly assign participants to the running program or to a control group and compare outcomes.",
  "Survey runners and non-runners and compare reported blood pressure.",
  "Compare two different cities with different running rates.",
  "Track one group's exercise in a log and check correlation with their own past readings."], a:0,
  ex:"A randomized controlled experiment is the only design that supports causation.",
  trap:"All three others are observational/correlational — associated, not causal. This exact distinction is tested repeatedly."}
];

const QUESTION_INDEX = {};
QUESTION_POOL.forEach(q => QUESTION_INDEX[q.id] = q);