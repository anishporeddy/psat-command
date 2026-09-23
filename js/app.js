const STORE_KEY = "psatcmd_v2";
const TEST_DATE = new Date("2026-10-06T08:00:00");
const T0 = new Date("2026-09-23T00:00:00");
const RULE = { rw:71, math:95 };
const OHIO_CUT = 221;

function estSI(rw, mt){
  if(!rw || !mt) return null;
  const tE = 8 + Math.max(0, (rw - 160)) / 20;
  const tM = 8 + Math.max(0, (mt - 160)) / 20;
  return Math.round(2 * (2 * tE + tM));
}

const ZONES = [
  {label:"Info & Ideas", skills:["ci","evT","evQ","inf"]},
  {label:"Craft & Structure", skills:["wic","tsp","cross"]},
  {label:"Expression", skills:["trans","rsynth"]},
  {label:"Conventions", skills:["conv"]},
  {label:"Algebra", skills:["lin1","lin2","lfun","sys"]},
  {label:"Advanced Math", skills:["adv"]},
  {label:"PSDA / Data", skills:["psda","data","prob"]},
  {label:"Geometry & Trig", skills:["geo"]}
];
const ALL_RW = ["ci","evT","evQ","inf","wic","tsp","cross","trans","rsynth","conv"];
const ALL_MATH = ["lin1","lin2","lfun","sys","psda","data","prob","adv","geo"];

function newState(){
  return { xp:0, quests:{}, skillStats:{}, log:[], sessions:[], bestStreak:0 };
}
let S = newState();
try{ S = Object.assign(S, JSON.parse(localStorage.getItem(STORE_KEY)||"{}")); }catch(e){}
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(S)); }

const $ = id => document.getElementById(id);
const show = id => { document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden")); $(id).classList.remove("hidden"); window.scrollTo(0,0); };

function todayIndex(){
  const diff = Math.floor((new Date() - T0)/86400000);
  return Math.max(0, Math.min(12, diff));
}
function day(){ return DAYS[todayIndex()]; }

function xpForLevel(l){ return 100*l*(l-1)/2; }
function level(){ let l=1; while(xpForLevel(l+1)<=S.xp) l++; return l; }
function levelProgress(){
  const l=level();
  const lo=xpForLevel(l), hi=xpForLevel(l+1);
  return Math.round((S.xp-lo)/Math.max(1,hi-lo)*100);
}

function addXp(n){
  const before = level();
  S.xp += n; save();
  if(level()>before) flash(`LEVEL UP! You reached level ${level()} 🏆`);
}
function flash(msg){
  const box=document.createElement("div");
  box.style.cssText="position:fixed;top:36%;left:50%;transform:translate(-50%,-50%);background:#1d2b3f;border:2px solid var(--gold);color:var(--gold);padding:22px 34px;border-radius:16px;font-size:20px;font-weight:900;z-index:300;box-shadow:0 12px 44px rgba(0,0,0,.6);text-align:center";
  box.textContent=msg;
  document.body.appendChild(box);
  setTimeout(()=>box.remove(),2600);
}

function zoneAll(skills){
  let c=0,n=0;
  skills.forEach(s=>{ const st=S.skillStats[s]||[]; c+=st.filter(Boolean).length; n+=st.length; });
  return n? Math.round(c/n*100):0;
}

SESS = null;

const APP = {
  go(scr){ if(scr==="dashboard") this.renderDash(); if(scr==="lesson") this.renderLesson(); if(scr==="tips") this.renderTips(); show(`screen-${scr}`); },

  // ================= DASHBOARD =================
  renderDash(){
    const d=day();
    this.updateCountdown();

    $("dayHeader").innerHTML=`<div class="day-title">${d.title}</div><div class="day-sub">${d.subtitle}</div>`;
    let doneN=0;
    const list = d.quests.map((q,i)=>{
      const key=`${d.id}.${i}`;
      const done=!!S.quests[key];
      if(done)doneN++;
      return `<div class="quest ${done?'done':''}" onclick="APP.toggleQuest(${d.id},${i})">
        <div class="qcheck">✓</div>
        <div class="qname">${q.name}</div>
        <div class="qxp">${done?'✓'+q.xp: q.type==='spot'||q.type==='quiz'?'Boss · '+q.xp+' XP':'+'+q.xp+' XP'}</div>
      </div>`;
    }).join("");
    const pct=d.quests.length?Math.round(doneN/d.quests.length*100):0;
    $("questList").innerHTML = `<div class="bar" style="margin-bottom:6px"><i class="cool" style="width:${pct}%"></i></div>
      <p class="dim" style="margin-bottom:8px">${doneN}/${d.quests.length} quests · ${pct}% — complete all to close the day</p>` + list;

    $("skillBars").innerHTML = ZONES.map(z=>{
      const acc=zoneAll(z.skills);
      const cls=acc>=75?"cool":acc<50?"hot":"";
      return `<div class="skillrow"><div class="top"><span>${z.label}</span><span>${acc?acc+"%":"—"}</span></div>
        <div class="bar"><i class="${cls}" style="width:${acc||2}%"></i></div></div>`;
    }).join("");

    $("logList").innerHTML = S.sessions.length
      ? [...S.sessions].reverse().slice(0,8).map(s=>`<div class="log-row"><span>${s.date} · ${s.label}</span><b>${s.score}</b></div>`).join("")
      : `<div class="dim">No sessions yet. Run today's practice quest to start your campaign.</div>`;

    $("xpPill").textContent=`⚡ ${S.xp} XP`;
    $("lvlPill").textContent=`LV ${level()} · ${levelProgress()}%`;
    $("streakPill").textContent=`🔥 ${S.bestStreak}`;

    const host = location.host;
    const proto = location.protocol;
    if(proto==="http:" || proto==="https:"){
      if(host==="localhost" || host==="" || host.startsWith("127.0.0.1") || host.startsWith("0.0.0.0")){
        $("phoneInfo").textContent = "Run: ipconfig getifaddr en0\nThen on your phone open the IP shown.";
      } else {
        $("phoneInfo").textContent = proto + "//" + host + "/";
      }
    } else {
      $("phoneInfo").textContent = "Open via the server, not the file, to use your phone.";
    }

    $("rwScore").value = (S.scores && S.scores.rw) || "";
    $("mathScore").value = (S.scores && S.scores.mt) || "";
    this.siChange();
  },

  updateCountdown(){
    const left = TEST_DATE - new Date();
    const days = Math.max(0, Math.floor(left/86400000));
    const hh = Math.max(0, Math.floor((left%86400000)/3600000));
    const mm = Math.max(0, Math.floor((left%3600000)/60000));
    const ss = Math.max(0, Math.floor((left%60000)/1000));
    $("countdownBanner").innerHTML = days>0
      ? `⏳ <b>T-MINUS ${days}D ${hh}H ${mm}M ${ss}S</b> · PSAT/NMSQT Tue Oct 6 · OHIO NMSF cutline ≈ ${OHIO_CUT}`
      : days===0 ? "⏳ TEST DAY IS TODAY. You are ready."
      : "✅ Campaign complete — log your score!";
  },

  siChange(){
    const a = parseInt($("rwScore").value,10);
    const b = parseInt($("mathScore").value,10);
    S.scores = S.scores || {};
    S.scores.rw = $("rwScore").value;
    S.scores.mt = $("mathScore").value;
    save();
    const si = estSI(a,b);
    const out = $("siOut"), gap = $("siGap");
    if(si===null){ out.innerHTML = "Estimated Selection Index: —"; gap.textContent = "Enter both section scores from your latest Bluebook run."; return; }
    const diff = OHIO_CUT - si;
    if(diff>0){
      out.innerHTML = `Estimated Selection Index: <span class="off">${si}</span> vs Ohio cutline ${OHIO_CUT} · gap ${diff}`;
      gap.textContent = `≈ +${Math.ceil(diff/2)}×10 pts on R&W (each +10 ≈ +2 SI), or +${diff}×10 on Math (+10 ≈ +1 SI), or any mix.`;
    } else {
      out.innerHTML = `Estimated Selection Index: <span class="on">${si}</span> ≥ Ohio cutline ${OHIO_CUT} ✅`;
      gap.textContent = "Index clears Ohio — lock it with PSDA + pacing; guard the margin by +2.";
    }
  },

  toggleQuest(did,i){
    const d=DAYS.find(x=>x.id===did); const q=d.quests[i];
    const key=`${did}.${i}`;
    if(q.type==="practice"||q.type==="quiz"){ this.launchDayPractice(); return; }
    if(q.type==="lesson"){ this.go("lesson"); return; }
    if(q.type==="grill"){ openGrill((done)=>{ if(done&&!S.quests[key]){ S.quests[key]=true; addXp(q.xp); this.renderDash(); } }); return; }
    if(q.type==="spot"){ flash("Full-length day — open Bluebook and run it in one sitting."); return; }
    if(S.quests[key]){ flash("Already completed."); return; }
    S.quests[key]=true; addXp(q.xp); this.renderDash();
  },

  // ================= LESSON / TIPS =================
  renderLesson(){
    const d=day();
    $("lessonTitle").textContent=d.lesson.h;
    $("lessonBody").innerHTML=d.lesson.html;
    const key=`${d.id}.0`;
    const btn=$("lessonDoneBtn");
    if(S.quests[key]){ btn.textContent="✓ Lesson mastered"; btn.disabled=true; }
    else { btn.textContent="✅ Mark Lesson Learned (+50 XP)"; btn.disabled=false; }
  },
  completeLesson(){
    const key=`${day().id}.0`;
    if(S.quests[key]) return;
    S.quests[key]=true; addXp(50);
    this.renderDash(); this.renderLesson();
    flash("Lesson learned. Now the speed tips.");
    this.go("tips");
  },
  renderTips(){
    const t=day().tips||[];
    $("tipsList").innerHTML = t.length
      ? t.map((x,i)=>`<div class="tip"><b>${i+1}. ${x.t}</b><br><span class="dim">${x.d}</span></div>`).join("")
      : `<div class="tip"><b>No separate tips today.</b><div class="dim">Full-length day — the ritual is the tips.</div></div>`;
  },

  // ================= PRACTICE =================
  practice(mode, sec){ this.startSession(this.buildSet(this.targetsFor(sec), sec==="mixed"?14:10, sec)); },
  startPracticeFromDay(){ this.launchDayPractice(); },
  launchDayPractice(){
    const d=day();
    if(d.isolateForTest){ flash("Full-length day — run the Bluebook test instead."); return; }
    const rw = d.skills.rw === "mixed" ? ALL_RW : (Array.isArray(d.skills.rw)? d.skills.rw : []);
    const mt = d.skills.math === "mixed" ? ALL_MATH : (Array.isArray(d.skills.math)? d.skills.math : []);
    const skills = [...rw, ...mt];
    let have = QUESTION_POOL.filter(q=>skills.includes(q.skill)).length;
    if(have<10){
      const pad = [...ALL_RW.filter(s=>!skills.includes(s)), ...ALL_MATH.filter(s=>!skills.includes(s))];
      let i=0;
      while(have<10 && i<pad.length){ skills.push(pad[i++]); have = QUESTION_POOL.filter(q=>skills.includes(q.skill)).length; }
    }
    this.startSession(this.buildSet(skills,10,null,`${d.date} — ${d.focus}`));
  },
  targetsFor(sec){
    return sec==="rw"? ALL_RW : sec==="math"? ALL_MATH : [...ALL_RW,...ALL_MATH];
  },
  buildSet(skills, n, secLabel, label){
    const pool = QUESTION_POOL.filter(q=>skills.includes(q.skill));
    return { pool, skills, n, secLabel, label: label||(secLabel?`Training (${secLabel})`:"Mixed") };
  },

  startSession(spec){
    this._finished = false;
    SESS = {
      spec, qs:[], idx:0, mod:1, mod1corr:0, picks:[], attempts:[],
      used:{}, marks:new Set(), streak:0, best:0, timer:0, submitted:false,
      _int:null, start:Date.now(), xpGained:0
    };
    this.loadModule(1);
    this.runQ(0);
  },

  loadModule(mod){
    const used=SESS.used;
    const need=5;
    const skills = SESS.spec.skills;
    const hard = mod===2 && SESS.mod1corr>=4;
    const picks=[];
    let guard=0;
    while(picks.length<need && guard++<200){
      const s=skills[Math.floor(Math.random()*skills.length)];
      const diff = mod===1 ? (Math.random()<0.5?1:2) : hard ? (Math.random()<0.5?2:3) : (Math.random()<0.5?1:2);
      const cand=SESS.spec.pool.filter(q=>q.skill===s&&q.diff===diff&&!used[q.id]);
      if(cand.length){ const k=Math.floor(Math.random()*cand.length); picks.push(cand[k]); used[cand[k].id]=true; }
    }
    if(picks.length<need){
      for(const q of SESS.spec.pool){
        if(picks.length>=need) break;
        if(!used[q.id]){ picks.push(q); used[q.id]=true; }
      }
    }
    SESS.qs=SESS.qs.concat(picks);
  },

  runQ(i){
    SESS.idx=i; SESS.mod=i<5?1:2; SESS.submitted=false; SESS.pick=null; SESS.currentStart=Date.now();
    if(i===5) this.loadModule(2);
    const q=SESS.qs[i];

    $("satModeLabel").textContent = (q.sec==="rw"?"Reading and Writing":"Math") + ` • Module ${SESS.mod}`;
    $("qCount").textContent=`Question ${i+1} of ${SESS.qs.length}` + (SESS.marks.has(i)?" ◆":"");
    $("qProgress").style.width=((i)/SESS.qs.length*100)+"%";
    $("qSkillTag").textContent=SKILL_NAMES[q.skill]||q.skill;
    $("qTypeTag").textContent=q.sec==="rw"?"Reading and Writing":q.grid?"Student-produced response":"Math multiple choice";

    $("passageBox").innerHTML=q.p?`<div>${q.p}</div>`:"";
    $("graphicBox").innerHTML=q.g?`<div class="graphic">${q.g}</div>`:"";
    $("questionBox").innerHTML=q.q;
    $("#refBtn").classList.toggle("hidden", q.sec!=="math");
    $("referenceBox").classList.add("hidden");

    const ob=$("optionsBox");
    if(q.grid){
      ob.innerHTML=`<input class="grid-in" id="gridInput" type="text" placeholder="Enter answer" oninput="APP.touchGrid()">`;
    } else {
      ob.innerHTML=q.c.map((opt,idx)=>
        `<div class="opt" data-i="${idx}" onclick="APP.select(${idx})"><span class="letter">${String.fromCharCode(65+idx)}</span><span>${opt}</span></div>`).join("");
    }
    const fb=$("feedback"); fb.className="hidden feedback"; fb.innerHTML="";
    $("submitBtn").classList.remove("hidden");
    $("nextBtn").classList.add("hidden");
    SESS.timer=RULE[q.sec];
    $("timerPill").textContent=this.timerStr(SESS.timer);
    $("timerPill").classList.remove("low");
    if(SESS._int) clearInterval(SESS._int);
    SESS._int=setInterval(()=>this.tick(),1000);
  },

  touchGrid(){ const g=$("gridInput"); if(g&&/^[\d./-]*$/.test(g.value)) SESS.pick=g.value.trim(); },

  tick(){
    if(SESS.submitted) return;
    SESS.timer-=1;
    if(SESS.timer<0){ SESS.timer=0; this.timeout(); return; }
    const p=$("timerPill"); p.textContent=this.timerStr(SESS.timer);
    p.classList.toggle("low", SESS.timer<=15);
  },
  timerStr(s){ return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`; },

  select(i){
    document.querySelectorAll("#optionsBox .opt").forEach(o=>o.classList.toggle("selected", parseInt(o.dataset.i)===i));
    SESS.pick=i;
  },
  toggleMark(){
    if(SESS.marks.has(SESS.idx)) SESS.marks.delete(SESS.idx); else SESS.marks.add(SESS.idx);
    $("qCount").textContent=`Question ${SESS.idx+1} of ${SESS.qs.length}` + (SESS.marks.has(SESS.idx)?" ◆":"");
  },
  timeout(){ SESS.submitted=true; clearInterval(SESS._int); this.resolve(null,true); },
  submit(){
    if(SESS.submitted) return;
    const q=SESS.qs[SESS.idx];
    if(q.grid){
      const v=$("gridInput").value.trim();
      if(!v){ flash("Enter an answer first."); return; }
      SESS.pick=v.toLowerCase();
    } else if(SESS.pick===null){ flash("Choose an option first."); return; }
    SESS.submitted=true; clearInterval(SESS._int);
    this.resolve(SESS.pick,false);
  },

  resolve(answer, timedOut){
    const q=SESS.qs[SESS.idx];
    let correct=false;
    if(q.grid){
      const norm=s=>s.replace(/\s+/g,"").replace(/^0+(?=\d)/,"").replace(/\.0+$/,"");
      correct=!!answer && (q.gr||[]).map(norm).includes(norm(answer));
    } else {
      correct=!timedOut && answer===q.a;
    }
    const spent=(Date.now()-SESS.currentStart)/1000;
    const att={ id:q.id, skill:q.skill, sec:q.sec, diff:q.diff, correct, answer,
      correctIdx:q.a, c:q.c, gr:q.gr, text:q.q, ex:q.ex, spent, timedOut, attribution:null };

    if(correct){ SESS.streak++; SESS.best=Math.max(SESS.best,SESS.streak); if(SESS.mod===1)SESS.mod1corr++; }
    else { SESS.streak=0; }
    SESS.attempts.push(att);

    const gained = correct ? this.xpFor(q,SESS.streak) : 0;
    if(gained){ SESS.xpGained+=gained; addXp(gained); }
    this.feedbackFor(q,att,gained);
  },

  xpFor(q,streak){ return Math.round((10+(q.diff-1)*5)*(1+Math.min(streak,10)*0.05)); },

  feedbackFor(q,att,gained){
    const fb=$("feedback"); fb.classList.remove("hidden");
    if(att.correct){
      fb.className="feedback good";
      fb.innerHTML=`<b>✔ Correct! +${gained} XP</b><br>${q.ex}`;
    } else {
      fb.className="feedback bad";
      const right = q.grid ? `The correct answer is <b>${q.gr[0]}</b>.`
        : `The correct answer is <b>${String.fromCharCode(65+q.a)}</b>.`;
      fb.innerHTML=`<b>✖ ${att.timedOut?"Time up":"Incorrect"}</b> — ${right}<br>${q.ex}
        <div class="chips"><span class="dim" style="width:100%">Why did you miss? (feeds your error log)</span>
        ${["Misread","Concept","Careless","Timing"].map(c=>`<div class="chip" onclick="APP.attribute('${c}')">${c}</div>`).join("")}</div>`;
      fb._att=att;
    }
    $("submitBtn").classList.add("hidden");
    $("nextBtn").classList.remove("hidden");
  },

  attribute(cat){
    const att=SESS.attempts[SESS.attempts.length-1];
    if(att.attribution) return;
    att.attribution=cat;
    const fb=$("feedback");
    fb.querySelector(".chips").innerHTML=`<span style="color:var(--gold)">Logged: ${cat}. Rule goes on your sheet.</span>`;
  },

  next(){
    SESS.pick=null;
    if(SESS.idx+1>=SESS.qs.length){
      if(SESS.mod===1) this.runQ(SESS.idx+1);
      else this.finish();
      return;
    }
    this.runQ(SESS.idx+1);
  },

  finish(){
    if(this._finished) return;
    this._finished=true;
    if(SESS._int) clearInterval(SESS._int);
    const acc=SESS.attempts.filter(a=>a.correct).length/SESS.attempts.length;
    if(acc>=0.75){ SESS.xpGained+=30; addXp(30); }
    if(SESS.best>S.bestStreak) S.bestStreak=SESS.best;

    SESS.attempts.forEach(a=>{
      const arr=S.skillStats[a.skill]=S.skillStats[a.skill]||[];
      arr.push(a.correct);
      if(arr.length>20) arr.shift();
    });

    const ok=SESS.attempts.filter(a=>a.correct).length;
    // mark day's practice/quiz quest done if present
    const d=day();
    d.quests.forEach((q,qi)=>{
      if((q.type==="practice"||q.type==="quiz") && !S.quests[`${d.id}.${qi}`]){
        S.quests[`${d.id}.${qi}`]=true;
      }
    });

    S.sessions.push({ date:new Date().toLocaleDateString(), label:SESS.spec.label||day().title, score:`${ok}/${SESS.attempts.length}` });
    save();
    this.renderResults();
    show("screen-results");
  },

  // ================= RESULTS =================
  renderResults(){
    const a=SESS.attempts;
    const total=a.length, ok=a.filter(x=>x.correct).length;
    const pct=Math.round(ok/total*100);
    $("bigScore").textContent=`${ok}/${total}`;
    $("scoreBreak").textContent=`${pct}% correct · ${a.filter(x=>x.timedOut).length} timeouts · gate ${pct>=80?"PASSED ✅":"NOT YET (<80%)"}`;
    $("xpGained").textContent=`+${SESS.xpGained} XP this session`;

    const bySkill={};
    a.forEach(x=>{ (bySkill[x.skill]=bySkill[x.skill]||[]).push(x); });
    $("breakdownList").innerHTML=Object.entries(bySkill).map(([sk,arrs])=>{
      const okk=arrs.filter(x=>x.correct).length;
      const p=okk/arrs.length;
      return `<div class="skillrow"><div class="top"><span>${SKILL_NAMES[sk]}</span><span>${okk}/${arrs.length}</span></div>
        <div class="bar"><i class="${p>=.75?"cool":p<.5?"hot":""}" style="width:${p*100}%"></i></div></div>`;
    }).join("")||`<span class="dim">No data.</span>`;

    const pace=s=>{
      const g=s.filter(x=>!x.timedOut);
      if(!g.length) return "—";
      return (g.reduce((n,x)=>n+x.spent,0)/g.length).toFixed(0)+"s avg";
    };
    const rwA=a.filter(x=>x.sec==="rw"), mthA=a.filter(x=>x.sec==="math");
    $("paceList").innerHTML=[
      rwA.length?`<div class="log-row"><span>R&W pace</span><b>${pace(rwA)} (limit 71s)</b></div>`:"",
      mthA.length?`<div class="log-row"><span>Math pace</span><b>${pace(mthA)} (limit 95s)</b></div>`:"",
      `<div class="log-row"><span>Timeouts</span><b>${a.filter(x=>x.timedOut).length}</b></div>`,
      `<div class="log-row"><span>Marked for review</span><b>${SESS.marks.size}</b></div>`
    ].join("");

    const attr={};
    a.filter(x=>!x.correct&&x.attribution).forEach(x=>attr[x.attribution]=(attr[x.attribution]||0)+1);
    $("attributionList").innerHTML=["Misread","Concept","Careless","Timing"].map(c=>
      `<div class="log-row"><span>${c}</span><b>${attr[c]||0}</b></div>`).join("");

    this.buildReport();
  },

  buildReport(){
    const a=SESS.attempts;
    const ok=a.filter(x=>x.correct).length;
    const bySkill={};
    a.forEach(x=>{ (bySkill[x.skill]=bySkill[x.skill]||[]).push(x); });
    const skillLines=Object.entries(bySkill).map(([sk,arrs])=>`- ${SKILL_NAMES[sk]} (${sk}): ${arrs.filter(x=>x.correct).length}/${arrs.length}`).join("\n");
    const worst=Object.entries(bySkill).filter(([,arrs])=>arrs.filter(x=>!x.correct).length>arrs.length/2).map(([sk])=>SKILL_NAMES[sk]);
    const rows=a.filter(x=>!x.correct).map(x=>{
      const mine = x.timedOut? "[timeout]" : (typeof x.answer==="number"? String.fromCharCode(65+x.answer) : x.answer);
      const corr = x.grid? x.gr[0] : String.fromCharCode(65+x.correctIdx);
      return `| ${x.id} | ${SKILL_NAMES[x.skill]} | ${mine} | ${corr} | ${x.attribution||"n/a"} | ${x.ex.slice(0,90)} |`;
    }).join("\n");
    const pace=a.filter(x=>!x.timedOut);
    const avg=pace.length? (pace.reduce((n,x)=>n+x.spent,0)/pace.length).toFixed(0)+"s/q" : "—";
    $("coachReport").value=`PSAT PREP SESSION REPORT
Date: ${new Date().toLocaleString()} · ${SESS.spec.label||"Training"}
Result: ${ok}/${a.length} (${Math.round(ok/a.length*100)}%) · Gate: ${Math.round(ok/a.length*100)>=80?"PASS":"FAIL (<80%)"} · XP +${SESS.xpGained}
${skillLines}
Worst zones: ${worst.join(", ")||"none"}
Error log rows (give to coach):
${rows||"No misses — clean run."}
Next focus: ${worst[0]?`Re-drill ${worst.slice(0,2).join(" & ")} until ≥85%`:"All zones stable — keep pace work."}
Pace: ${a.filter(x=>x.timedOut).length} timeouts · avg ${avg}`;
    $("reportHint").textContent="Paste this into your PSAT coach chat and say 'log these errors.'";
  },

  copyReport(){
    const t=$("coachReport");
    t.select(); t.setSelectionRange(0,999999);
    try{ document.execCommand("copy"); }catch(e){ if(navigator.clipboard) navigator.clipboard.writeText(t.value); }
    flash("Report copied — paste it to your coach!");
  }
};

// ---------- grill ----------
function openGrill(onDone){
  const bg=document.createElement("div");
  bg.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px";
  const box=document.createElement("div");
  box.style.cssText="background:var(--panel);border:1px solid var(--line);border-radius:16px;max-width:640px;width:100%;max-height:86vh;overflow:auto;padding:22px";
  box.innerHTML=`<h2 style="color:var(--gold)">🔥 5-Minute Recall Grill</h2>
    <p class="dim">Write your answer BEFORE clicking reveal. Reciting is what makes it stick.</p>
    <style>@media(max-width:600px){.deep{width:100%}}</style>
    ${GRILL_CARDS.map((g,k)=>`
      <div style="margin:10px 0;padding:11px;background:var(--bg2);border-radius:10px">
        <b>Q${k+1}. ${g.q}</b>
        <div class="hidden" id="grillA${k}" style="color:var(--green);margin-top:7px">→ ${g.a}</div>
        <button class="satbtn" style="margin-top:8px" onclick="document.getElementById('grillA${k}').classList.remove('hidden');this.style.display='none'">Reveal</button>
      </div>`).join("")}
    <div class="btnrow"><button class="btn btn-primary" id="grillDone">✅ Done — mark quest complete</button></div>`;
  box.querySelector("#grillDone").onclick=()=>{ document.body.removeChild(bg); if(onDone)onDone(true); };
  bg.onclick=e=>{ if(e.target===bg) document.body.removeChild(bg); };
  bg.appendChild(box);
  document.body.appendChild(bg);
}

let _lastDay = todayIndex(), _clock = null;
function startClock(){
  if(_clock) return;
  _clock = setInterval(()=>{
    const d = todayIndex();
    if(d !== _lastDay){ _lastDay = d; APP.renderDash(); return; }
    const vis = document.querySelector ? (document.querySelector(".screen:not(.hidden)") || {}).id : null;
    if(!vis || vis === "screen-dashboard") APP.updateCountdown();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", ()=>{
  if("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }
  startClock();
  APP.renderDash();
});
window.addEventListener("beforeunload", save);

APP.installHint = function(){
  if(/^https?:$/.test(location.protocol)){
    flash("Browser menu → 'Add to Home Screen' / 'Install app'." + (location.hostname==="localhost"||location.hostname==="127.0.0.1"?" Use the phone URL above instead.":""));
  } else {
    flash("Serve over http (python3 -m http.server) first, then this install button works.");
  }
};

APP.exportSync = function(){
  const code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
  $("syncCode").value = code;
  $("syncCode").select(); $("syncCode").setSelectionRange(0,999999);
  try{ document.execCommand("copy"); }catch(e){ if(navigator.clipboard) navigator.clipboard.writeText(code); }
  flash("Backup code copied — open the app on your other device and hit Restore.");
};

APP.importSync = function(){
  const raw = $("syncCode").value.trim();
  if(!raw){ flash("Paste a backup code first."); return; }
  try{
    const data = JSON.parse(decodeURIComponent(escape(atob(raw))));
    if(typeof data != "object" || data === null) throw 0;
    const base = newState();
    S = Object.assign(base, data);
    save();
    this.renderDash();
    flash("Progress restored. XP now " + S.xp + ".");
  }catch(e){ flash("That doesn't look like a valid backup code."); }
};