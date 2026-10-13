const jobs=[
 {title:'Senior Editor & Team Leader',copy:'Leads editorial workflows, improves technical articles for clarity and consistency, mentors writers and coordinates reviews across the team.',loot:['Team leadership','Technical editing','Mentoring']},
 {title:'IT Intern',copy:'Contributed to frontend and web-development tasks at PlanetHackBD while performing software testing, bug reporting, feature validation and issue verification.',loot:['Frontend','Software testing','Bug reporting']},
 {title:'Teacher',copy:'Teaches students from English-medium and English-version backgrounds, drawing on six years of experience to make difficult ideas approachable.',loot:['Teaching','Communication','Student support']},
 {title:'Substitute Teacher',copy:'Supported classes 6–10 at Holy Cross High Girls School across science, general mathematics, higher mathematics, physics and chemistry.',loot:['Science','Mathematics','Classroom support']}
];

document.querySelectorAll('.swatch').forEach(s=>s.addEventListener('click',()=>{document.body.classList.remove('fit-mint','fit-blue');if(s.dataset.fit!=='pink')document.body.classList.add(`fit-${s.dataset.fit}`);document.querySelectorAll('.swatch').forEach(x=>{x.classList.toggle('active',x===s);x.setAttribute('aria-checked',x===s)})}));
document.querySelector('#startBtn').addEventListener('click',()=>{document.querySelector('#story').classList.add('playing');document.querySelector('#about').scrollIntoView({behavior:'smooth'});document.querySelector('#chapterCount').textContent='01'});
document.querySelectorAll('.chapter-nav button').forEach(btn=>btn.addEventListener('click',()=>document.querySelector(`#${btn.dataset.target}`).scrollIntoView({behavior:'smooth'})));
document.querySelectorAll('.job').forEach((btn,i)=>btn.addEventListener('click',()=>{document.querySelectorAll('.job').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.querySelector('#jobTitle').textContent=jobs[i].title;document.querySelector('#jobCopy').textContent=jobs[i].copy;document.querySelector('#jobLoot').innerHTML=jobs[i].loot.map(x=>`<span>${x}</span>`).join('')}));
const chapters=[...document.querySelectorAll('.chapter')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const n=e.target.dataset.chapter;document.querySelector('#chapterCount').textContent=`0${n}`;document.querySelectorAll('.chapter-nav button').forEach((b,i)=>b.classList.toggle('active',i===Number(n)-1))}}),{threshold:.32});
chapters.forEach(c=>observer.observe(c));



// Normal portfolio mode. Game mode removed.
(() => {
  const soundBtn=document.getElementById('soundBtn');
  let audioContext=null,musicTimer=null,step=0;
  const melody=[523.25,659.25,783.99,659.25];
  function note(freq){if(!audioContext)return;const o=audioContext.createOscillator(),g=audioContext.createGain();o.frequency.value=freq;g.gain.value=.02;o.connect(g).connect(audioContext.destination);o.start();o.stop(audioContext.currentTime+.12)}
  if(soundBtn) soundBtn.addEventListener('click',async()=>{
    if(musicTimer){clearInterval(musicTimer);musicTimer=null;soundBtn.textContent='SOUND: OFF';return}
    const AC=window.AudioContext||window.webkitAudioContext; if(!AC)return;
    audioContext ||= new AC(); await audioContext.resume();
    musicTimer=setInterval(()=>note(melody[step++%melody.length]),300);
    soundBtn.textContent='SOUND: ON';
  });
})();


// Remi technology facts + interaction sounds
(() => {
 const remi=document.getElementById('miniRemi');
 const fact=document.getElementById('techFact');
 const facts=[
 "AI models learn patterns from huge datasets to generate text, images and code.",
 "Git was created by Linus Torvalds in 2005 to manage Linux development.",
 "Web browsers translate HTML, CSS and JavaScript into interactive experiences.",
 "IoT devices combine sensors, connectivity and software to collect real-world data.",
 "Machine learning improves by finding patterns instead of following only fixed rules."
 ];
 let i=0;
 const clickSound=()=>{try{const a=new AudioContext(),o=a.createOscillator(),g=a.createGain();o.frequency.value=700;g.gain.value=.04;o.connect(g).connect(a.destination);o.start();o.stop(a.currentTime+.08)}catch(e){}};
 if(remi) remi.onclick=()=>{fact.textContent='✨ Remi Tech Fact\\n\\n'+facts[i++%facts.length];fact.classList.toggle('show');clickSound()};
 document.querySelectorAll('button,a,.swatch,.mission').forEach(el=>el.addEventListener('click',clickSound));
})();
