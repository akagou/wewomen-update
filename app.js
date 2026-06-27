(function(){
  "use strict";
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* header scroll state */
  var head = document.getElementById('head');
  if (head){
    var onScroll = function(){ head.classList.toggle('scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* mobile menu (native dialog) */
  var menu = document.getElementById('menu');
  var openB = document.getElementById('menuOpen');
  var closeB = document.getElementById('menuClose');
  if (menu && openB && menu.showModal){
    openB.addEventListener('click', function(){ menu.showModal(); });
    if (closeB) closeB.addEventListener('click', function(){ menu.close(); });
    menu.addEventListener('click', function(e){ if (e.target === menu) menu.close(); });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ menu.close(); }); });
  }

  /* reveals — content is visible by default; only opt into hidden+animate when allowed */
  if (!reduce && 'IntersectionObserver' in window){
    var els = [].slice.call(document.querySelectorAll('[data-reveal]'));
    if (els.length){
      document.documentElement.classList.add('js-anim');
      var reveal = function(el){ el.classList.add('in'); };
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){ if (en.isIntersecting){ reveal(en.target); io.unobserve(en.target); } });
      }, {threshold:0, rootMargin:'0px 0px -5% 0px'});
      els.forEach(function(el){ io.observe(el); });
      /* failsafe: never let content stay hidden (headless renderers / missed callbacks) */
      window.addEventListener('load', function(){ setTimeout(function(){ els.forEach(reveal); }, 1400); });
    }
  }

  /* gentle hero parallax */
  var frame = document.getElementById('heroFrame');
  if (frame && !reduce){
    var ticking = false;
    window.addEventListener('scroll', function(){
      if (ticking) return; ticking = true;
      requestAnimationFrame(function(){
        var y = window.scrollY;
        if (y < 900) frame.style.transform = 'translateY(' + (y * 0.045) + 'px)';
        ticking = false;
      });
    }, {passive:true});
  }

  /* simple email-form feedback (newsletter + unlock) */
  function wireEmail(formId, okId){
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var email = form.querySelector('input[type=email]');
      if (!email || !email.value || email.value.indexOf('@') === -1){ if(email){email.focus(); email.reportValidity && email.reportValidity();} return; }
      var ok = document.getElementById(okId);
      if (ok) ok.classList.add('show');
      form.reset();
    });
  }
  wireEmail('nform','nok');
  wireEmail('uform','uok');

  /* contact form */
  var cform = document.getElementById('cform');
  if (cform){
    cform.addEventListener('submit', function(e){
      e.preventDefault();
      if (!cform.checkValidity()){ cform.reportValidity(); return; }
      var ok = document.getElementById('cok');
      if (ok) ok.classList.add('show');
      cform.reset();
    });
  }

  /* resources filter chips */
  var chips = document.querySelectorAll('[data-filter]');
  if (chips.length){
    var cards = [].slice.call(document.querySelectorAll('[data-cat]'));
    chips.forEach(function(chip){
      chip.addEventListener('click', function(){
        chips.forEach(function(c){ c.setAttribute('aria-pressed','false'); });
        chip.setAttribute('aria-pressed','true');
        var f = chip.getAttribute('data-filter');
        cards.forEach(function(card){
          card.style.display = (f === 'all' || card.getAttribute('data-cat') === f) ? '' : 'none';
        });
      });
    });
  }

  /* year */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
