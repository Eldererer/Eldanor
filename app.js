
const SKILLS = {"Akrobatik": "DEX", "Arkane Kunde": "INT", "Athletik": "STR", "Auftreten": "CHA", "Einschüchtern": "CHA", "Fingerfertigkeit": "DEX", "Geschichte": "INT", "Heilkunde": "WIS", "Heimlichkeit": "DEX", "Mit Tieren umgehen": "WIS", "Motiv erkennen": "WIS", "Nachforschungen": "INT", "Naturkunde": "INT", "Religion": "INT", "Täuschen": "CHA", "Überleben": "WIS", "Überreden": "CHA", "Wahrnehmung": "WIS"};
const BASE_HEROES = [{"id": "borealis", "name": "Borealis", "role": "Koch · Tank · Heiler", "image": "portraits/borealis.webp", "level": 1, "story": "Ein standhafter Koch und Beschützer, dessen Kürbissuppe ebenso wichtig sein kann wie seine Kelle.", "maxHp": 14, "hp": 14, "ac": 16, "speed": 9, "prof": 2, "stats": {"STR": 16, "DEX": 10, "CON": 15, "INT": 11, "WIS": 13, "CHA": 12}, "proficiencies": ["Athletik", "Heilkunde", "Überleben"], "abilities": [{"name": "Heilende Kürbissuppe", "text": "1× pro lange Rast kann Borealis eine besondere Kürbissuppe kochen, die die Gruppe stärkt und heilt."}, {"name": "Starker Körper", "text": "Bei passenden Konstitutionsproben gegen Erschöpfung oder körperliche Belastung kann Vorteil gewährt werden."}], "attacks": [{"name": "Große Kochkelle", "stat": "STR", "bonus": 5, "damage": "1W8+3"}, {"name": "Kurzes Schwert", "stat": "STR", "bonus": 5, "damage": "1W6+3"}], "inventory": ["Große Kochkelle", "Suppenkessel", "Kurzes Schwert", "Magische Lebensgewürze (3)", "Seil 15 m", "2 Fackeln", "Wasserschlauch", "Proviant (2 Tage)"], "notes": ""}, {"id": "thalen", "name": "Thalen", "role": "Waldläufer · Schütze", "image": "portraits/thalen.webp", "level": 1, "story": "Ein wortkarger Halbelf mit schnellen Reflexen, scharfem Blick und Talent für Spuren, Schatten und präzise Schüsse.", "maxHp": 12, "hp": 12, "ac": 14, "speed": 10, "prof": 2, "stats": {"STR": 11, "DEX": 17, "CON": 12, "INT": 13, "WIS": 14, "CHA": 9}, "proficiencies": ["Heimlichkeit", "Wahrnehmung", "Überleben"], "abilities": [{"name": "Meisterschuss", "text": "1× pro Kampf kann Thalen Vorteil auf einen Fernkampfangriff erhalten."}, {"name": "Spurenlesen", "text": "Bei deutlichen Spuren kann der Spielleiter Vorteil gewähren."}], "attacks": [{"name": "Langbogen", "stat": "DEX", "bonus": 5, "damage": "1W8+3"}, {"name": "Federstahl", "stat": "DEX", "bonus": 5, "damage": "1W8+3"}], "inventory": ["Langbogen", "20 Pfeile", "2 Giftpfeile", "Messer", "Federstahl", "Seil 15 m", "2 Fackeln", "Wasserschlauch", "Proviant (2 Tage)"], "notes": ""}, {"id": "xyra", "name": "Xyra", "role": "Amazone · Kosmische Kriegerin", "image": "portraits/xyra.webp", "level": 1, "story": "Eine starke, charismatische Amazone mit kosmischer Gravitation in den Händen und einer heldenhaften Ausstrahlung.", "maxHp": 16, "hp": 16, "ac": 15, "speed": 9, "prof": 2, "stats": {"STR": 18, "DEX": 13, "CON": 14, "INT": 11, "WIS": 10, "CHA": 15}, "proficiencies": ["Athletik", "Einschüchtern", "Auftreten"], "abilities": [{"name": "Schwarzes Loch", "text": "1× pro lange Rast kann Xyra ein kleines gravitationsmagisches Feld erschaffen."}, {"name": "Überwältigende Stärke", "text": "Bei passenden Kraftakten kann Vorteil gewährt werden."}], "attacks": [{"name": "Runenhammer Standhaft", "stat": "STR", "bonus": 6, "damage": "1W12+4"}], "inventory": ["Runenhammer Standhaft", "Kosmischer Kristall", "Lederrüstung", "Seil 15 m", "2 Fackeln", "Wasserschlauch", "Proviant (2 Tage)"], "notes": ""}, {"id": "serenya", "name": "Serenya", "role": "Blitzmagierin", "image": "portraits/serenya.webp", "level": 1, "story": "Eine flinke Zauberin, die Blitze und kurze Teleportationen verbindet. Ihr treuer Hund Funke begleitet sie.", "maxHp": 10, "hp": 10, "ac": 13, "speed": 9, "prof": 2, "stats": {"STR": 9, "DEX": 14, "CON": 12, "INT": 16, "WIS": 13, "CHA": 15}, "proficiencies": ["Arkane Kunde", "Überreden", "Nachforschungen"], "abilities": [{"name": "Teleportationsblitz", "text": "Kurze Teleportation mit elektrischer Entladung."}, {"name": "Funke", "text": "Der treue Hund kann suchen, warnen, apportieren und Gegner ablenken."}], "attacks": [{"name": "Blitzstrahl", "stat": "INT", "bonus": 5, "damage": "1W10+3"}], "inventory": ["Magiestab", "Reiseumhang", "Funke (Hund)", "Seil 15 m", "2 Fackeln", "Wasserschlauch", "Proviant (2 Tage)"], "notes": ""}, {"id": "mjolnir", "name": "Mjölnir", "role": "Druide · Feuermagier", "image": "portraits/mjolnir.webp", "level": 1, "story": "Ein ruhiger, nachdenklicher Flammenrufer mit einem Kopf aus reinem Feuer. Er kennt Runen und die alte Geschichte des Nordens.", "maxHp": 13, "hp": 13, "ac": 13, "speed": 9, "prof": 2, "stats": {"STR": 11, "DEX": 13, "CON": 14, "INT": 16, "WIS": 17, "CHA": 12}, "proficiencies": ["Arkane Kunde", "Geschichte", "Naturkunde"], "abilities": [{"name": "Feuermagie", "text": "Mjölnir kann Feuer formen und als Zauber einsetzen."}, {"name": "Runenkunde", "text": "Besondere Expertise für alte Runen, vergessene Symbole und die Geschichte des Nordens."}, {"name": "Druidenkraft", "text": "Kann Naturkräfte und Tiere beeinflussen."}], "attacks": [{"name": "Flammenpeitsche", "stat": "WIS", "bonus": 5, "damage": "1W8+3"}, {"name": "Runenstab", "stat": "WIS", "bonus": 5, "damage": "1W8+3"}], "inventory": ["Runenstab", "Auge der Flammen", "Flammengewand", "Seil 15 m", "2 Fackeln", "Wasserschlauch", "Proviant (2 Tage)"], "notes": ""}, {"id": "kaelen", "name": "Kaelen", "role": "Zeitmagier", "image": "portraits/kaelen.webp", "level": 1, "story": "Ein junger, schneller und charismatischer Zeitmagier. Seine Chronoklinge erlaubt ihm, den Zeitfluss kurz zu beeinflussen.", "maxHp": 11, "hp": 11, "ac": 14, "speed": 10, "prof": 2, "stats": {"STR": 9, "DEX": 15, "CON": 12, "INT": 17, "WIS": 13, "CHA": 16}, "proficiencies": ["Arkane Kunde", "Nachforschungen", "Überreden"], "abilities": [{"name": "Zeit verlangsamen", "text": "Kaelen kann den Zeitfluss in einem Bereich kurz verlangsamen."}, {"name": "Zeitsprung", "text": "Kurze zeitmagische Bewegung zum Ausweichen oder Positionieren."}, {"name": "Charismatischer Redner", "text": "Besonders stark in Gesprächen und Verhandlungen."}], "attacks": [{"name": "Chronoklinge", "stat": "DEX", "bonus": 4, "damage": "1W4+2"}], "inventory": ["Chronoklinge", "Reisekleidung", "Runenfragmente", "Seil 15 m", "Proviant"], "notes": ""}, {"id": "lyra", "name": "Lyra", "role": "Bestienbändigerin", "image": "portraits/lyra.webp", "level": 1, "story": "Eine drahtige, bewegliche Bestienbändigerin mit scharfem Instinkt. Ein magischer Panther steht in enger Verbindung zu ihr.", "maxHp": 13, "hp": 13, "ac": 14, "speed": 10, "prof": 2, "stats": {"STR": 14, "DEX": 16, "CON": 13, "INT": 12, "WIS": 15, "CHA": 11}, "proficiencies": ["Mit Tieren umgehen", "Überleben", "Wahrnehmung"], "abilities": [{"name": "Panthergefährte", "text": "Der magische Panther kann suchen, verfolgen, ablenken und kämpfen."}, {"name": "Bestienverstand", "text": "Lyra versteht Tiere und natürliche Gefahren besonders gut."}, {"name": "Wilde Reflexe", "text": "Bei Reaktions- und Ausweichsituationen kann Vorteil gewährt werden."}], "attacks": [{"name": "Schlankes Langschwert", "stat": "DEX", "bonus": 5, "damage": "1W8+3"}], "inventory": ["Schlankes Langschwert", "Leder- und Fellrüstung", "Tierhorn", "Seil 15 m", "Proviant"], "notes": ""}];
const STORAGE_KEY = "eldanorV4";
let journalFilter = "Alle";
let heroRollMode = "normal";
let mapScale = 1;

function deepClone(x){return JSON.parse(JSON.stringify(x));}
function attrMod(n){return Math.floor((Number(n)-10)/2);}
function fmt(n){return Number(n)>=0 ? "+"+Number(n) : String(Number(n));}
function safeText(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function baseHeroById(id){return BASE_HEROES.find(h=>h.id===id);}

function loadState(){
  let v = JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");
  if(v) return normalizeState(v);
  let v3 = JSON.parse(localStorage.getItem("eldanorV3")||"null");
  if(v3){
    return normalizeState(v3);
  }
  let v2 = JSON.parse(localStorage.getItem("eldanorV2")||"null");
  if(v2){
    let migrated={heroes:[],current:v2.current||null,journal:(v2.quests||[]).map(q=>({type:"Quest",title:q.t,text:q.x,date:new Date().toLocaleDateString("de-DE")})),rollHistory:[]};
    const mapOld=new Map((v2.heroes||[]).map(h=>[h.id,h]));
    for(const base of BASE_HEROES){
      const old=mapOld.get(base.id);
      migrated.heroes.push(old ? Object.assign(deepClone(base),old,{active:true}) : deepClone(base));
      mapOld.delete(base.id);
    }
    for(const custom of mapOld.values()) migrated.heroes.push(Object.assign({image:"",story:"",notes:"",attacks:[],abilities:[],inventory:[],proficiencies:[]},custom));
    return normalizeState(migrated);
  }
  return {heroes:deepClone(BASE_HEROES),current:null,journal:[],rollHistory:[]};
}

function normalizeState(s){
 s.heroes=s.heroes||deepClone(BASE_HEROES); s.journal=s.journal||[]; s.rollHistory=s.rollHistory||[];
 const byId=new Map(BASE_HEROES.map(h=>[h.id,h]));
 s.heroes=s.heroes.map(h=>{let b=byId.get(h.id); return b?Object.assign(deepClone(b),h):Object.assign({image:"",story:"",notes:"",attacks:[],abilities:[],inventory:[],proficiencies:[],level:1,prof:2,hp:10,maxHp:10,ac:10,speed:9,stats:{STR:10,DEX:10,CON:10,INT:10,WIS:10,CHA:10}},h);});
 for(const b of BASE_HEROES) if(!s.heroes.some(h=>h.id===b.id)) s.heroes.push(deepClone(b));
 return s;
}
let state=loadState();
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function currentHero(){return state.heroes.find(h=>h.id===state.current);}
function skillBonus(h,skill){const a=SKILLS[skill]||"WIS";return attrMod(h.stats[a])+(h.proficiencies.includes(skill)?Number(h.prof||0):0);}

function renderHero(){
 const h=currentHero(), el=document.getElementById("myHero");
 if(!h){
   el.innerHTML=`<div class="feature-banner"><img src="assets/backgrounds/cosmic.webp" alt=""><div class="overlayText"><small>WILLKOMMEN IN</small><h2>Eldanor</h2><p>Wähle deinen Helden und beginne deine persönliche Chronik.</p><button class="gold" onclick="openHeroChooser()">Helden wählen</button> <button onclick="openCreator()">Neu erschaffen</button></div></div>`;
   document.getElementById("headerHero").textContent="Chroniken einer erwachenden Welt"; return;
 }
 document.getElementById("headerHero").textContent=h.name+" · "+h.role;
 const hpPct=Math.max(0,Math.min(100,Math.round((h.hp/h.maxHp)*100)));
 const attrs=Object.entries(h.stats).map(([k,v])=>`<div class="attr"><small>${k}</small><strong>${v}</strong><em>${fmt(attrMod(v))}</em></div>`).join("");
 const skills=Object.keys(SKILLS).map(s=>`<div class="list-row"><span>${h.proficiencies.includes(s)?'<span class="skill-prof">◆</span>':""}${s}</span><button onclick="rollCheck('${s.replace(/'/g,"\'")}')">${fmt(skillBonus(h,s))} 🎲</button></div>`).join("");
 const atks=(h.attacks||[]).map((a,i)=>`<div class="attack-card"><b>${safeText(a.name)}</b><div>${safeText(a.stat||"")} · Angriff ${fmt(a.bonus)} · Schaden ${safeText(a.damage)}</div><div class="attack-actions"><button onclick="rollAttack(${i})">Angriff 🎲</button><button onclick="rollDamage('${String(a.damage).replace(/'/g,"\'")}','${String(a.name).replace(/'/g,"\'")}')">Schaden 🎲</button></div></div>`).join("")||"<p>Noch keine Angriffe.</p>";
 const abilities=(h.abilities||[]).map(a=>`<div class="ability-card"><b>${safeText(a.name)}</b><div>${safeText(a.text)}</div></div>`).join("");
 const inv=(h.inventory||[]).map((x,i)=>`<div class="list-row"><span>${safeText(x)}</span><button onclick="removeItem(${i})">−</button></div>`).join("");
 el.innerHTML=`
 <div class="hero-cover"><img src="${h.image}" alt="${safeText(h.name)}"><div class="hero-cover-info"><div class="hero-title"><img src="assets/icons/crown.webp" alt=""><div><h2>${safeText(h.name)}</h2><p>${safeText(h.role)} · Stufe ${h.level||1}</p></div></div><div class="hero-story">${safeText(h.story||"")}</div><div class="cover-actions"><button onclick="openGameMode()">Spielmodus</button><button onclick="openProgression()">Stufenaufstieg</button><button onclick="openPortraitPicker()">Porträt ändern</button><button onclick="resetHero()">Zurücksetzen</button></div></div></div>
 <div class="dark-panel"><div class="hp-control"><span class="hp-number">♥ ${h.hp} / ${h.maxHp}</span><div class="hp-bar"><div class="hp-fill" style="width:${hpPct}%"></div></div><button onclick="changeHp(-1)">−</button><button onclick="changeHp(1)">＋</button><button onclick="setHp()">setzen</button></div><div class="quick-stats"><div class="quick"><b>${h.ac}</b><small>RK</small></div><div class="quick"><b>${fmt(attrMod(h.stats.DEX))}</b><small>Initiative</small></div><div class="quick"><b>${h.speed}m</b><small>Bewegung</small></div><div class="quick"><b>${fmt(h.prof)}</b><small>Übung</small></div><div class="quick"><b>${h.level||1}</b><small>Stufe</small></div></div><div class="roll-mode"><button class="${heroRollMode==="normal"?"on":""}" onclick="setHeroRollMode('normal')">Normal</button><button class="${heroRollMode==="adv"?"on":""}" onclick="setHeroRollMode('adv')">Vorteil</button><button class="${heroRollMode==="dis"?"on":""}" onclick="setHeroRollMode('dis')">Nachteil</button></div></div>
 <div class="parchment"><h3>Attribute</h3><div class="attr-grid">${attrs}</div></div>
 <div class="parchment"><h3>Fertigkeiten</h3>${skills}</div>
 <div class="parchment"><h3>Angriffe</h3>${atks}</div>
 <div class="parchment"><h3>Fähigkeiten & Merkmale</h3>${abilities}</div>
 <div class="parchment"><h3>Inventar</h3>${inv}<div class="inventory-add"><input id="newItem" placeholder="Neuer Gegenstand"><button class="gold" onclick="addItem()">＋</button></div></div>`;
}
function setHeroRollMode(m){heroRollMode=m;renderHero();}
function changeHp(n){const h=currentHero();h.hp=Math.max(0,Math.min(h.maxHp,h.hp+n));save();renderHero();renderParty();renderGameMode();}
function setHp(){const h=currentHero(),x=prompt("Aktuelle HP:",h.hp);if(x!==null&&!Number.isNaN(Number(x))){h.hp=Math.max(0,Math.min(h.maxHp,Number(x)));save();renderHero();renderParty();renderGameMode();}}
function addItem(){const h=currentHero(),i=document.getElementById("newItem");if(i.value.trim()){h.inventory.push(i.value.trim());i.value="";save();renderHero();}}
function removeItem(i){const h=currentHero();if(confirm("Gegenstand entfernen?")){h.inventory.splice(i,1);save();renderHero();}}

function openHeroChooser(){renderChooser();document.getElementById("chooser").classList.add("open");}
function renderChooser(){document.getElementById("chooserGrid").innerHTML=state.heroes.map(h=>`<button class="hero-choice" onclick="chooseHero('${h.id}')"><img src="${h.image}" alt=""><span class="hc-info"><strong>${safeText(h.name)}</strong><small>${safeText(h.role)}</small></span></button>`).join("");}
function chooseHero(id){state.current=id;save();closeOverlay("chooser");renderHero();renderNotes();renderParty();renderGameMode();}
function closeOverlay(id){document.getElementById(id).classList.remove("open");}

function openCreator(){closeOverlay("chooser");document.getElementById("creator").classList.add("open");creatorStep(1);}
function creatorStep(n){document.querySelectorAll(".creator-step").forEach(x=>x.classList.remove("active"));document.querySelector(`.creator-step[data-step="${n}"]`).classList.add("active");for(let i=1;i<=4;i++)document.getElementById("prog"+i).classList.toggle("on",i<=n);}
function fileToDataURL(file){return new Promise((resolve,reject)=>{if(!file)return resolve("");let r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});}
async function createHero(){
 const name=document.getElementById("cName").value.trim(); if(!name){alert("Bitte einen Namen eingeben.");return;}
 const img=await fileToDataURL(document.getElementById("cImage").files[0]);
 const id="custom-"+Date.now();
 const abs=document.getElementById("cAbilities").value.split("\n").map(x=>x.trim()).filter(Boolean).map(x=>{let p=x.split(":");return {name:p.shift().trim(),text:p.join(":").trim()};});
 const atkName=document.getElementById("cAttackName").value.trim();
 const hp=+document.getElementById("cHP").value||10;
 const ac=+document.getElementById("cAC").value||10;
 const speed=+document.getElementById("cSpeed").value||9;
 const prof=+document.getElementById("cProf").value||2;
 const h={id,name,role:document.getElementById("cRole").value.trim()||"Abenteurer",image:img||"portraits/borealis.webp",level:1,story:document.getElementById("cStory").value.trim(),
 maxHp:hp,hp:hp,ac:ac,speed:speed,prof:prof,
 stats:{STR:+document.getElementById("cSTR").value||10,DEX:+document.getElementById("cDEX").value||10,CON:+document.getElementById("cCON").value||10,INT:+document.getElementById("cINT").value||10,WIS:+document.getElementById("cWIS").value||10,CHA:+document.getElementById("cCHA").value||10},
 proficiencies:document.getElementById("cSkills").value.split(",").map(x=>x.trim()).filter(Boolean),abilities:abs,
 attacks:atkName?[{name:atkName,stat:document.getElementById("cAttackStat").value,bonus:+document.getElementById("cAttackBonus").value||0,damage:document.getElementById("cAttackDamage").value.trim()||"1W6"}]:[],
 inventory:document.getElementById("cInventory").value.split("\n").map(x=>x.trim()).filter(Boolean),notes:""};
 state.heroes.push(h);state.current=id;save();closeOverlay("creator");renderHero();renderNotes();renderParty();renderGameMode();
}

function openPortraitPicker(){if(!currentHero())return;document.getElementById("portraitOverlay").classList.add("open");}
async function changePortrait(e){const f=e.target.files[0];if(!f)return;currentHero().image=await fileToDataURL(f);save();closeOverlay("portraitOverlay");renderHero();renderChooser();renderParty();renderGameMode();document.getElementById('portraitFile').value='';}
function resetPortrait(){const h=currentHero();const b=baseHeroById(h.id);if(b){h.image=b.image;save();renderHero();renderChooser();renderParty();renderGameMode();closeOverlay('portraitOverlay');}else alert('Bei eigenen Helden gibt es kein hinterlegtes Originalporträt.');}
function resetHero(){const h=currentHero();if(!h) return;const b=baseHeroById(h.id);if(!b){alert('Eigene Helden können nicht automatisch auf Vorlage zurückgesetzt werden.');return;} if(confirm('Diesen Helden vollständig auf die Originalwerte zurücksetzen?')){const idx=state.heroes.findIndex(x=>x.id===h.id);state.heroes[idx]=deepClone(b);save();renderHero();renderChooser();renderParty();renderNotes();renderGameMode();}}
function deleteCurrentCustomHero(){const h=currentHero();if(!h)return; if(baseHeroById(h.id)){alert('Die Standardhelden können nicht gelöscht werden.');return;} if(confirm('Diesen eigenen Helden löschen?')){state.heroes=state.heroes.filter(x=>x.id!==h.id);state.current=BASE_HEROES[0].id;save();renderHero();renderChooser();renderParty();renderGameMode();}}

function openProgression(){const h=currentHero(); if(!h)return; document.getElementById('pLevel').value=h.level||1;document.getElementById('pMaxHp').value=h.maxHp;document.getElementById('pAC').value=h.ac;document.getElementById('pSpeed').value=h.speed;document.getElementById('pProf').value=h.prof; renderProgressLists(); document.getElementById('progressionOverlay').classList.add('open');}
function renderProgressLists(){const h=currentHero(); document.getElementById('progressAttacks').innerHTML=(h.attacks||[]).map((a,i)=>`<div class="list-row"><span><b>${safeText(a.name)}</b><br><small>${safeText(a.stat)} · ${fmt(a.bonus)} · ${safeText(a.damage)}</small></span><button onclick="removeAttack(${i})">−</button></div>`).join('')||'<p>Keine Angriffe.</p>'; document.getElementById('progressAbilities').innerHTML=(h.abilities||[]).map((a,i)=>`<div class="list-row"><span><b>${safeText(a.name)}</b><br><small>${safeText(a.text)}</small></span><button onclick="removeAbility(${i})">−</button></div>`).join('')||'<p>Keine Fähigkeiten.</p>';}
function changeLevel(delta){const h=currentHero(); h.level=Math.max(1,(h.level||1)+delta); document.getElementById('pLevel').value=h.level; save(); renderHero(); renderParty(); renderGameMode();}
function saveProgressBasics(){const h=currentHero(); h.level=Math.max(1,+document.getElementById('pLevel').value||1); h.maxHp=Math.max(1,+document.getElementById('pMaxHp').value||1); h.hp=Math.min(h.hp,h.maxHp); h.ac=Math.max(1,+document.getElementById('pAC').value||1); h.speed=Math.max(0,+document.getElementById('pSpeed').value||0); h.prof=+document.getElementById('pProf').value||0; save(); renderHero(); renderParty(); renderGameMode(); alert('Basiswerte gespeichert.');}
function addAttack(){const h=currentHero(); const name=document.getElementById('newAtkName').value.trim(); if(!name)return; h.attacks.push({name,stat:document.getElementById('newAtkStat').value,bonus:+document.getElementById('newAtkBonus').value||0,damage:document.getElementById('newAtkDamage').value.trim()||'1W6'}); ['newAtkName','newAtkBonus','newAtkDamage'].forEach(id=>document.getElementById(id).value=id==='newAtkDamage'?'1W6':''); save(); renderHero(); renderProgressLists(); renderGameMode();}
function removeAttack(i){if(confirm('Angriff entfernen?')){currentHero().attacks.splice(i,1); save(); renderHero(); renderProgressLists(); renderGameMode();}}
function addAbility(){const h=currentHero(); const name=document.getElementById('newAbilityName').value.trim(); const text=document.getElementById('newAbilityText').value.trim(); if(!name||!text)return; h.abilities.push({name,text}); document.getElementById('newAbilityName').value=''; document.getElementById('newAbilityText').value=''; save(); renderHero(); renderProgressLists(); renderGameMode();}
function removeAbility(i){if(confirm('Fähigkeit entfernen?')){currentHero().abilities.splice(i,1); save(); renderHero(); renderProgressLists(); renderGameMode();}}

function openGameMode(){renderGameMode(); document.getElementById('gameMode').classList.add('open');}
function renderGameMode(){const h=currentHero(); if(!h) return; const attacks=(h.attacks||[]).map((a,i)=>`<button onclick="rollAttack(${i})">${safeText(a.name)}</button>`).join(''); document.getElementById('gameModeInner').innerHTML=`<div class="quickmode-card"><div class="herohead"><img src="${h.image}" alt=""><div><h2>${safeText(h.name)}</h2><div>${safeText(h.role)} · Stufe ${h.level}</div><div class="big-hp">${h.hp} / ${h.maxHp} HP</div><div>RK ${h.ac} · Initiative ${fmt(attrMod(h.stats.DEX))} · Bewegung ${h.speed} m</div></div></div><div class="quick-actions"><button onclick="changeHp(-1)">HP −1</button><button onclick="changeHp(1)">HP +1</button><button onclick="rollCheck('Wahrnehmung')">Wahrnehmung</button><button onclick="rollCheck('Überreden')">Überreden</button>${attacks}</div></div>`;}

function rollDie(s){return 1+Math.floor(Math.random()*s);}
function d20(mode){const a=rollDie(20),b=rollDie(20);if(mode==='adv')return {raw:Math.max(a,b),display:`${a} / ${b}`};if(mode==='dis')return {raw:Math.min(a,b),display:`${a} / ${b}`};return {raw:a,display:String(a)};}
function parseDamage(expr){const m=String(expr).toUpperCase().match(/(\d+)W(\d+)([+-]\d+)?/);if(!m)return null;const count=+m[1],sides=+m[2],bonus=+(m[3]||0),rolls=[];for(let i=0;i<count;i++)rolls.push(rollDie(sides));return {sides,rolls,bonus,total:rolls.reduce((a,b)=>a+b,0)+bonus};}
function switchView(id){document.querySelectorAll('.view,.bottom-nav button').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');const b=document.querySelector(`.bottom-nav button[data-v="${id}"]`);if(b)b.classList.add('active');if(id==='journal')renderNotes();if(id==='more')renderParty();}
function animateRoll({sides,title,raw,display,total,detail}){switchView('dice');const die=document.getElementById('dieVisual'),n=document.getElementById('dieNumber'),t=document.getElementById('dieType'),cap=document.getElementById('diceCaption'),res=document.getElementById('diceResult');t.textContent='W'+sides;n.textContent='?';cap.textContent=title;res.textContent='Der Würfel rollt …';die.classList.remove('rolling');void die.offsetWidth;die.classList.add('rolling');setTimeout(()=>{die.classList.remove('rolling');n.textContent=raw;let cls=sides===20&&raw===20?'crit':sides===20&&raw===1?'fumble':'';n.className='die-number '+cls;let verdict=sides===20&&raw===20?' · KRITISCH!':sides===20&&raw===1?' · PATZER!':'';res.innerHTML=`${safeText(display)}${total!==raw?` → <b>${total}</b>`:''}${verdict}`;addRollHistory(title,detail||display,total,raw,sides);},720);}
function addRollHistory(title,detail,total,raw,sides){state.rollHistory.unshift({title,detail,total,raw,sides,time:new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})});state.rollHistory=state.rollHistory.slice(0,12);save();renderRollHistory();}
function freeRoll(sides){const bonus=Number(document.getElementById('freeMod').value||0),mode=document.getElementById('freeAdv').value;if(sides===20){const r=d20(mode);animateRoll({sides,title:'Freier W20-Wurf',raw:r.raw,display:r.display,total:r.raw+bonus,detail:`${r.display} ${fmt(bonus)}`});} else {const raw=rollDie(sides);animateRoll({sides,title:'Freier W'+sides+'-Wurf',raw,display:String(raw),total:raw+bonus,detail:`${raw} ${fmt(bonus)}`});}}
function rollCheck(skill){const h=currentHero(),bonus=skillBonus(h,skill),r=d20(heroRollMode);animateRoll({sides:20,title:h.name+' · '+skill,raw:r.raw,display:r.display,total:r.raw+bonus,detail:`${r.display} ${fmt(bonus)}`});}
function rollAttack(i){const h=currentHero(),a=h.attacks[i],r=d20(heroRollMode);animateRoll({sides:20,title:h.name+' · '+a.name,raw:r.raw,display:r.display,total:r.raw+Number(a.bonus),detail:`Angriff: ${r.display} ${fmt(a.bonus)}`});}
function rollDamage(expr,name){const x=parseDamage(expr);if(!x){alert('Schadensformel nicht erkannt.');return;} const shown=x.rolls.join(' + ')+(x.bonus?` ${fmt(x.bonus)}`:'' ); animateRoll({sides:x.sides,title:name+' · Schaden',raw:x.rolls[0],display:shown,total:x.total,detail:expr+' = '+x.total});}
function renderRollHistory(){const el=document.getElementById('rollHistory');el.innerHTML=(state.rollHistory||[]).map(r=>`<div class="history-row"><span><b>${safeText(r.title)}</b><br><small class="muted">${safeText(r.detail)} · ${r.time}</small></span><b>${r.total}</b></div>`).join('')||'<p class="muted">Noch keine Würfe.</p>';}
for(const n of [4,6,8,10,12,20]){const b=document.createElement('button');b.innerHTML=`⬡<br>W${n}`;b.onclick=()=>freeRoll(n);document.getElementById('diceButtons').appendChild(b);}

function savePersonalNotes(){const h=currentHero();if(h){h.notes=document.getElementById('personalNotes').value;save();}}
function renderNotes(){document.getElementById('personalNotes').value=currentHero()?.notes||'';renderJournal();}
function setJournalFilter(f,btn){journalFilter=f;document.querySelectorAll('.journal-filter .chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderJournal();}
function addJournalEntry(){const title=document.getElementById('entryTitle').value.trim();if(!title)return;state.journal.unshift({type:entryType.value,title,text:entryText.value.trim(),date:new Date().toLocaleDateString('de-DE')});entryTitle.value='';entryText.value='';save();renderJournal();}
function editLatestEntry(){if(!state.journal.length) return alert('Noch kein Eintrag vorhanden.'); const e=state.journal[0]; const t=prompt('Titel bearbeiten:',e.title); if(t===null) return; const x=prompt('Text bearbeiten:',e.text); if(x===null) return; e.title=t; e.text=x; save(); renderJournal();}
function deleteJournal(i){if(confirm('Eintrag löschen?')){state.journal.splice(i,1);save();renderJournal();}}
function renderJournal(){const filtered=state.journal.map((x,i)=>({...x,_i:i})).filter(x=>journalFilter==='Alle'||x.type===journalFilter);document.getElementById('journalEntries').innerHTML=filtered.map(e=>`<div class="entry"><button onclick="deleteJournal(${e._i})">✕</button><small>${safeText(e.type)} · ${safeText(e.date)}</small><b>${safeText(e.title)}</b><div>${safeText(e.text)}</div></div>`).join('')||'<p class="dark-text muted">Noch keine Einträge in dieser Kategorie.</p>';}

function mapZoom(delta){mapScale=Math.max(.6,Math.min(3.2,mapScale+delta));document.getElementById('worldMap').style.width=(mapScale*100)+'%';}
function resetMap(){mapScale=1;document.getElementById('worldMap').style.width='100%';document.getElementById('mapViewport').scrollTo(0,0);}

function renderParty(){document.getElementById('partyRoster').innerHTML=state.heroes.map(h=>`<div class="party-mini"><img src="${h.image}" alt=""><div><b>${safeText(h.name)}</b><small>${safeText(h.role)}<br>HP ${h.hp}/${h.maxHp} · Stufe ${h.level||1}</small></div></div>`).join('');}
function exportHero(){const h=currentHero();if(!h)return;downloadJSON(h,h.name.replace(/\s+/g,'_')+'_Eldanor.json');}
function importHero(e){const f=e.target.files[0];if(!f)return;readJSON(f,obj=>{obj.id='import-'+Date.now();state.heroes.push(obj);state.current=obj.id;save();renderHero();renderParty();renderChooser();renderGameMode();alert('Held importiert.');});}
function exportCampaign(){downloadJSON({journal:state.journal,rollHistory:state.rollHistory}, 'Eldanor_Chronik.json');}
function importCampaign(e){const f=e.target.files[0];if(!f)return;readJSON(f,obj=>{if(Array.isArray(obj.journal))state.journal=obj.journal;if(Array.isArray(obj.rollHistory))state.rollHistory=obj.rollHistory;save();renderJournal();renderRollHistory();alert('Chronik importiert.');});}
function downloadJSON(obj,name){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
function readJSON(file,cb){const r=new FileReader();r.onload=()=>{try{cb(JSON.parse(r.result));}catch(e){alert('Datei konnte nicht gelesen werden.');}};r.readAsText(file);}

document.querySelectorAll('.bottom-nav button').forEach(b=>b.onclick=()=>switchView(b.dataset.v));
renderHero();renderJournal();renderRollHistory();renderParty();renderNotes();renderGameMode(); if(!state.current)setTimeout(openHeroChooser,180); save();
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').then(reg=>reg.update()).catch(()=>{});}
