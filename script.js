/* ===== Smooth Reveal on Scroll (uses .fade-in elements) ===== */
(function(){
  const els = Array.from(document.querySelectorAll('.fade-in'));
  if(!els.length) return;
  const onScroll = () => {
    const h = window.innerHeight - 80;
    els.forEach(el => {
      if(el.getBoundingClientRect().top < h) el.classList.add('show');
    });
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();

/* ===== Sticky Nav Active Link (if <nav> anchors exist) ===== */
(function(){
  const links = Array.from(document.querySelectorAll('nav a[href^="#"]'));
  if(!links.length) return;

  const byId = id => document.getElementById(id);
  const sections = links
    .map(a => ({ a, id: a.getAttribute('href').slice(1), el: byId(a.getAttribute('href').slice(1)) }))
    .filter(s => s.el);

  const setActive = () => {
    let current = sections[0]?.a;
    sections.forEach(s=>{
      const top = s.el.getBoundingClientRect().top;
      if(top <= window.innerHeight * 0.35) current = s.a;
    });
    links.forEach(l => l.classList.toggle('is-active', l === current));
  };

  window.addEventListener('scroll', setActive, {passive:true});
  setActive();

  // smooth-scroll (for browsers without native smooth on html)
  links.forEach(({ href })=>{}); // no-op; CSS handles smooth scroll
})();

/* ===== Typing Effect (works only if .typing exists) ===== */
(function(){
  const el = document.querySelector('.typing');
  if(!el) return;
  const roles = ["Data Scientist","Python Developer","ML Enthusiast","AI Explorer"];
  let i = 0, j = 0, deleting = false;

  const tick = () => {
    const word = roles[i];
    if(!deleting){
      j++;
      el.textContent = word.slice(0,j);
      if(j === word.length){ deleting = true; setTimeout(tick, 1100); return; }
    } else {
      j--;
      el.textContent = word.slice(0,j);
      if(j === 0){ deleting = false; i = (i+1)%roles.length; }
    }
    setTimeout(tick, deleting ? 60 : 110);
  };
  tick();
})();

/* ===== Shadow on Nav when scrolling ===== */
(function(){
  const nav = document.querySelector('nav');
  if(!nav) return;
  const toggle = () => {
    if(window.scrollY > 6){
      nav.style.boxShadow = "0 6px 24px rgba(0,0,0,.25)";
    } else {
      nav.style.boxShadow = "none";
    }
  };
  window.addEventListener('scroll', toggle, {passive:true});
  toggle();
})();
