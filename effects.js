/* ================================================================
   effects.js — dario-cv-website shared interactions
   Session 9 — June 2026

   1. initNoiseButtons  — grain + shimmer on every .btn
   2. initTracingBeam   — scroll-driven beam on project pages
   3. initCometCards    — mouse-glow on content images
   4. initCompareSliders — drag before/after compare
   ================================================================ */

(function () {
  'use strict';

  /* Reduced-motion flag — JS-driven effects check this (Session 10c) */
  var REDUCED_MOTION = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /* ────────────────────────────────────────────────────────────
     1. NOISE BUTTONS
     Injects .btn-grain (animated noise texture) and
     .btn-shimmer (one-shot highlight sweep) into every .btn.
  ──────────────────────────────────────────────────────────── */
  function initNoiseButtons() {
    document.querySelectorAll('.btn').forEach(function (btn) {
      if (btn.querySelector('.btn-grain')) return; // already initialised

      var grain = document.createElement('span');
      grain.className = 'btn-grain';
      grain.setAttribute('aria-hidden', 'true');
      btn.appendChild(grain);

      var shimmer = document.createElement('span');
      shimmer.className = 'btn-shimmer';
      shimmer.setAttribute('aria-hidden', 'true');
      btn.appendChild(shimmer);

      // Reset shimmer animation on re-hover (CSS animation only fires once)
      btn.addEventListener('mouseenter', function () {
        shimmer.style.animation = 'none';
        // Force reflow so the keyframe re-starts
        void shimmer.offsetWidth;
        shimmer.style.animation = '';
      });
    });
  }

  /* ────────────────────────────────────────────────────────────
     2. TRACING BEAM
     Injects a fixed left-side beam that fills as you scroll.
     Only active on project pages (where .block exists).
  ──────────────────────────────────────────────────────────── */
  function initTracingBeam() {
    if (!document.querySelector('.block')) return;        // project pages only
    if (document.getElementById('tracing-beam')) return; // already injected

    var beam = document.createElement('div');
    beam.id = 'tracing-beam';
    beam.setAttribute('aria-hidden', 'true');
    beam.innerHTML =
      '<div class="beam-track"></div>' +
      '<div class="beam-fill"><div class="beam-dot"></div></div>';
    document.body.appendChild(beam);

    var fill   = beam.querySelector('.beam-fill');
    var ticking = false;

    function update() {
      var scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
      var maxScroll  = document.documentElement.scrollHeight - window.innerHeight;
      var pct        = maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0;
      fill.style.height = pct + '%';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });

    update(); // set initial position
  }

  /* ────────────────────────────────────────────────────────────
     3. COMET CARD
     Wraps each content image in a .comet-wrap span and
     tracks mouse position to paint a radial gradient glow.
     Preserves existing click→modal handlers on the <img>.
  ──────────────────────────────────────────────────────────── */
  function initCometCards() {
    var SELECTORS = [
      '.block img',
      '.slide img',
      '.grid-2 img',
      '.img-single img',
      '.img-grid img',
      '.cols-2 img',
      '.cols-3 img',
      '.cs-screen img',
      '.cs-gallery img'
    ].join(',');

    document.querySelectorAll(SELECTORS).forEach(function (img) {
      // Skip images already wrapped, inside dialog/modal, or inside SVG
      if (
        img.closest('.comet-wrap') ||
        img.closest('#img-modal')  ||
        img.closest('dialog')      ||
        img.closest('svg')
      ) return;

      // Build wrapper
      var wrap = document.createElement('span');
      wrap.className = 'comet-wrap';

      // Build glow layer
      var glow = document.createElement('span');
      glow.className = 'comet-glow';
      glow.setAttribute('aria-hidden', 'true');

      // Transplant img into wrapper (click listeners stay on img)
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
      wrap.appendChild(glow);

      // Track mouse within wrapper
      wrap.addEventListener('mousemove', function (e) {
        var rect = wrap.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
        var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
        glow.style.background =
          'radial-gradient(circle at ' + x + '% ' + y + '%, ' +
          'rgba(80,227,194,0.20) 0%, transparent 52%)';
      });

      wrap.addEventListener('mouseleave', function () {
        glow.style.background = '';
      });
    });
  }

  /* ────────────────────────────────────────────────────────────
     4. COMPARE SLIDERS
     Activates all .compare-slider elements on the page.

     Expected markup (see effects.css for the full template):
     ──────────────────────────────────────────────────────────
     <div class="compare-slider">
       <img class="compare-img-after"  src="after.jpg"  alt="After">
       <div class="compare-before-clip">
         <img class="compare-img-before" src="before.jpg" alt="Before">
       </div>
       <div class="compare-handle"></div>
       <span class="compare-label before-label">before</span>
       <span class="compare-label after-label">after</span>
     </div>
     ──────────────────────────────────────────────────────────
  ──────────────────────────────────────────────────────────── */
  function initCompareSliders() {
    document.querySelectorAll('.compare-slider').forEach(function (slider) {
      var clip   = slider.querySelector('.compare-before-clip');
      var handle = slider.querySelector('.compare-handle');
      if (!clip || !handle) return;

      var dragging = false;

      function setPos(clientX) {
        var rect = slider.getBoundingClientRect();
        var pct  = Math.max(3, Math.min(97, (clientX - rect.left) / rect.width * 100));
        clip.style.width  = pct + '%';
        handle.style.left = pct + '%';
      }

      /* Mouse */
      slider.addEventListener('mousedown', function (e) {
        dragging = true;
        setPos(e.clientX);
      });
      document.addEventListener('mousemove', function (e) {
        if (dragging) setPos(e.clientX);
      });
      document.addEventListener('mouseup', function () { dragging = false; });

      /* Touch */
      slider.addEventListener('touchstart', function (e) {
        dragging = true;
        setPos(e.touches[0].clientX);
      }, { passive: true });
      document.addEventListener('touchmove', function (e) {
        if (dragging) setPos(e.touches[0].clientX);
      }, { passive: true });
      document.addEventListener('touchend', function () { dragging = false; });
    });
  }

  /* ────────────────────────────────────────────────────────────
     5. SCROLL HERO (Container Scroll Animation)
     Finds .scroll-hero-wrap[data-auto] elements, auto-populates
     each with the page's first qualifying content image, then
     drives rotateX 20°→0° + scale 0.88→1.0 on scroll.
  ──────────────────────────────────────────────────────────── */
  function initScrollHeroes() {
    var wraps = document.querySelectorAll('.scroll-hero-wrap[data-auto], .scroll-hero-wrap[data-src]');
    if (!wraps.length) return;

    /* Candidate selectors — ordered by preference */
    var IMAGE_SEL = [
      '.block img',
      '.slide img',
      '.grid-2 img',
      '.cols-2 img',
      '.cols-3 img',
      '.img-single img',
      '.img-grid img',
      '.cs-screen img',
      '.cs-gallery img'
    ].join(',');

    wraps.forEach(function (wrap) {
      /* ── Explicit src override via data-src ─────────────── */
      var explicitSrc = wrap.getAttribute('data-src');

      var heroSrc, heroAlt;

      if (explicitSrc) {
        heroSrc = explicitSrc;
        heroAlt = wrap.getAttribute('data-alt') || 'Project UI preview';
      } else {
        /* ── Pick image by index (data-index="N", default 0) ── */
        var targetIndex = parseInt(wrap.getAttribute('data-index') || '0', 10);
        var picked = null;
        var count  = 0;
        var candidates = document.querySelectorAll(IMAGE_SEL);
        for (var i = 0; i < candidates.length; i++) {
          var c = candidates[i];
          if (
            c.closest('#img-modal') ||
            c.closest('dialog')     ||
            c.closest('svg')        ||
            c.closest('.scroll-hero-wrap')
          ) continue;
          if (count === targetIndex) { picked = c; break; }
          count++;
        }
        if (!picked) return;
        heroSrc = picked.src;
        heroAlt = picked.alt || 'Project UI preview';
      }

      /* ── Build the hero card ────────────────────────────── */
      var hero = document.createElement('div');
      hero.className = 'scroll-hero';

      var heroImg = new Image();
      heroImg.src = heroSrc;
      heroImg.alt = heroAlt;
      heroImg.setAttribute('aria-hidden', 'true');
      hero.appendChild(heroImg);
      wrap.appendChild(hero);

      /* ── Scroll-driven 3-D rotation ─────────────────────── */
      if (REDUCED_MOTION) {
        hero.style.transform = 'none'; // static card, no scroll rotation
        return;
      }
      var ticking = false;

      function update() {
        var rect  = wrap.getBoundingClientRect();
        var vh    = window.innerHeight;

        /* progress 0 = element just entered viewport bottom
           progress 1 = element top is 30% from viewport top  */
        var progress = Math.max(0, Math.min(1,
          (vh - rect.top) / (vh * 0.70)
        ));

        var rotX  = (20  * (1 - progress)).toFixed(3);
        var sc    = (0.88 + 0.12 * progress).toFixed(4);

        hero.style.transform =
          'perspective(1000px) rotateX(' + rotX + 'deg) scale(' + sc + ')';

        ticking = false;
      }

      window.addEventListener('scroll', function () {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
      }, { passive: true });

      /* Run once after image loads so initial transform is correct */
      heroImg.onload  = function () { requestAnimationFrame(update); };
      if (heroImg.complete) requestAnimationFrame(update);
      requestAnimationFrame(update);
    });
  }

  /* ────────────────────────────────────────────────────────────
     BOOT — run on DOMContentLoaded (or immediately if late)
  ──────────────────────────────────────────────────────────── */
  function boot() {
    initNoiseButtons();
    initTracingBeam();
    initCometCards();
    initCompareSliders();
    initScrollHeroes();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();

/* ═══ PAGE TRANSITIONS + THEME HAND-OFF (Session 38) ═══════════════════════
   Glitch out on internal link clicks, glitch in on arrival. The index decides
   the theme: leaving from the face view → light, from the classic view → dark;
   other pages keep whatever theme they were opened with. */
(function () {
  'use strict';
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var KEY = 'siteTheme', IN = 'pgGlitchIn';
  function get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  var isIndex = !!document.getElementById('hero-name');
  if (!isIndex && get(KEY) === 'light') document.documentElement.classList.add('theme-light');

  var g = document.createElement('div');
  g.className = 'pg-glitch'; g.setAttribute('aria-hidden', 'true');
  g.innerHTML = '<div class="pg-flash"></div>'
    + '<div class="pg-band" style="top:14%;height:5%;background:#50e3c2"></div>'
    + '<div class="pg-band" style="top:38%;height:3%;background:#a78bfa;animation-delay:.04s"></div>'
    + '<div class="pg-band" style="top:55%;height:8%;background:#fff;animation-delay:.02s"></div>'
    + '<div class="pg-band" style="top:79%;height:6%;background:#50e3c2;animation-delay:.07s"></div>';
  document.body.appendChild(g);

  function play(kind, ms, done) {
    if (RM) { if (done) done(); return; }
    g.className = 'pg-glitch on ' + kind; document.documentElement.classList.add('pg-shake');
    setTimeout(function () { document.documentElement.classList.remove('pg-shake'); if (kind === 'in') g.className = 'pg-glitch'; if (done) done(); }, ms);
  }
  if (get(IN) === '1') { try { sessionStorage.removeItem(IN); } catch (e) {} play('in', 440); }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    if (a.target && a.target !== '_self') return;
    if (a.hasAttribute('download')) return;
    var href = a.getAttribute('href') || '';
    if (/^(#|mailto:|tel:|javascript:)/i.test(href)) return;
    var url; try { url = new URL(a.href, location.href); } catch (err) { return; }
    if (url.origin !== location.origin && location.protocol !== 'file:') return;
    if (/^https?:/i.test(href) && url.host !== location.host) return;
    if (url.pathname === location.pathname && url.hash) return;           // same-page anchor
    if (isIndex) set(KEY, document.body.classList.contains('face-mode') ? 'light' : 'dark');
    set('navFrom', location.pathname.split('/').pop() || 'index.html');
    set(IN, '1');
    e.preventDefault();
    play('out', 300, function () {
      location.href = a.href;
      // safety: if the browser didn't leave (blocked, offline, redirect error), clear the overlay
      setTimeout(function () { g.className = 'pg-glitch'; document.documentElement.classList.remove('pg-shake'); try { sessionStorage.removeItem(IN); } catch (e) {} }, 1800);
    });
  });
  // back/forward cache: never come back to a page frozen mid-glitch
  // ── BACK BUTTON (Session 41) — every page except the index. Goes back to the page
  // you came from inside the site (history.back), otherwise to the index. Themed by
  // the same tokens as the page, so it is dark or light automatically.
  if (!isIndex) {
    var NAMES = { 'index.html': 'Home', 'work.html': 'Work', 'about.html': 'About', 'archive.html': 'Archive', 'founder-mode.html': 'Myself as Client' };
    var from = get('navFrom'), internal = !!from && history.length > 1;
    var b = document.createElement('a');
    b.className = 'pg-back'; b.href = internal ? from : 'index.html';
    var lbl = internal ? (NAMES[from] || 'Back') : 'Home';
    b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg><span>' + (internal ? 'Back' : 'Home') + '</span>';
    b.setAttribute('aria-label', internal ? 'Go back to ' + lbl : 'Go to the home page');
    // ── NEXT PROJECT (Session 46) — on case studies, a pill next to Back that opens the
    // next case in the same order as the index cards (wraps around after the last one).
    var CASES = [['gradeline', 'GradeLine'], ['siemens', 'Railway Back Office'], ['att', 'AT&T México'], ['blendops', 'Blend Optimizer'], ['benefitbridge', 'UX Center of Excellence'], ['metaverse', 'Metaverse'], ['benefits-platform', 'Benefits Platform'], ['virtu4lslacksagent', 'VOS'], ['nielseniq', 'Dashboard Redesign'], ['oolalife', 'Life Coaching'], ['research-at-scale', 'Research at Scale']];
    var here = (location.pathname.split('/').pop() || '').replace(/\.html$/, ''), ci = -1;
    CASES.forEach(function (c, i) { if (c[0] === here) ci = i; });
    var nav = document.createElement('div');
    nav.className = 'pg-nav'; nav.setAttribute('role', 'group'); nav.setAttribute('aria-label', 'Page navigation');
    if (document.getElementById('music-widget')) nav.classList.add('pg-nav--raised');
    nav.appendChild(b);
    if (ci >= 0) {
      var nx = CASES[(ci + 1) % CASES.length], n = document.createElement('a');
      n.className = 'pg-back pg-next'; n.href = nx[0] + '.html';
      n.setAttribute('aria-label', 'Next project: ' + nx[1] + ' (' + ((ci + 1) % CASES.length + 1) + ' of ' + CASES.length + ')');
      n.innerHTML = '<span class="pg-next-k">Next</span><span class="pg-next-t">' + nx[1].replace(/&/g, '&amp;') + '</span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
      nav.appendChild(n);
    }
    document.body.appendChild(nav);
    b.addEventListener('click', function (e) {
      if (!internal || e.metaKey || e.ctrlKey || e.shiftKey) return;   // no history: let the link go to the index
      e.preventDefault(); e.stopPropagation(); set(IN, '1');
      play('out', 300, function () { history.back(); });
    });
    // let Alt/⌥ + ← and Backspace-free browsers behave normally; nothing else to bind
  }
  window.addEventListener('pageshow', function (ev) { if (ev.persisted) { g.className = 'pg-glitch'; document.documentElement.classList.remove('pg-shake'); } });
})();


/* ═══ PIXEL TWIN (Session 38) ═══════════════════════════════════════════════
   Shared, scripted Q&A about Dario — answers only from this site's own content
   (bio, work history, cases, skills, contact), so it never invents facts.
   window.PixelTwin.ask(text) is the one seam a real AI endpoint could replace.
   Used by the index face-view chat and by the floating mini face on project
   pages opened from the face view (light theme). */
(function () {
  'use strict';
  var WORK = [{"href": "blendops.html", "ind": "energy", "title": "Replacing Legacy Tools: AI-Powered Blend Optimizer", "desc": "Replacing a decades-old Excel model with an ML-driven web app that lets Plant Operations Managers optimize oil-well fluid formulas in minutes instead of hours. Designed using an AI-assisted prototyping workflow (Claude), reaching React-ready fidelity at v7.", "mv": "Excel", "ml": "replaced"}, {"href": "benefits-platform.html", "ind": "enterprise-saas", "title": "Rebuilding Benefits Software", "desc": "Leading UX for a from-scratch rebuild of a legacy employee-benefits platform, and building the code-first, AI-assisted workflow (HTML-to-Figma, connected requirements, a shared token system) that let a small, multinational team ship two full portals to WCAG 2.2 AA.", "mv": "v1.3\u2192v1.8", "ml": "iterations shipped"}, {"href": "gradeline.html", "ind": "construction", "title": "From Bid to Blacktop: One Field App for Three Different Jobs", "desc": "Designing a mobile-first field platform for a national paving contractor \u2014 the sales bid, the dispatcher's desk, and the crew foreman's phone \u2014 through a forked, versioned prototyping pipeline a founder could click through without touching code.", "mv": "8", "ml": "versions shipped"}, {"href": "virtu4lslacksagent.html", "ind": "entertainment", "title": "VOS \u2014 VIRTU4L Operations System with Local AI", "desc": "A Slack-native operations brain for a real-world VR venue: daily checklists, reservations, sales tracking, and Dasha, an AI assistant running locally that handles what the team would otherwise forget.", "mv": "293", "ml": "tests passing"}, {"href": "nielseniq.html", "ind": "analytics", "title": "Revolutionizing Data Insights: Dashboard Redesign", "desc": "Introduced Double Track Agile and a consolidated Figma design system to a burned-out team. Feature delivery got 30% faster, and UX bugs dropped by half.", "mv": "+30%", "ml": "delivery speed"}, {"href": "siemens.html", "ind": "transportation", "title": "Modernizing Railway Systems: Back Office Overhaul", "desc": "After a fatal collision exposed a decades-old dispatcher tool, I led the full redesign solo \u2014 research, workflow restructuring, and a component-driven Figma + Flutter UI \u2014 with a direct line to the Product Director and no design committee in between. Operator task time dropped 40%, onboarding time 60%.", "mv": "\u221240%", "ml": "task time"}, {"href": "att.html", "ind": "telecommunications", "title": "Digital Transformation: AEM & eCommerce Evolution", "desc": "Led AT&T M\u00e9xico\u2019s five-year digital transformation across the flagship site, eCommerce platform, and dozens of microsites \u2014 including a 2021 AEM design system that moved seven teams from Photoshop into one shared Figma component library. Online sales rose 500%, with 96% accessibility compliance.", "mv": "+500%", "ml": "online sales"}, {"href": "oolalife.html", "ind": "health & wellness", "title": "From Philosophy to Digital Engagement: Life Coaching Platform", "desc": "Turned a bestselling self-help book into a product people would actually open daily \u2014 not preachy, more like a coach than a checklist. ~50 interviews shaped a 7-area gamification framework behind a COVID-era pivot, shipped in 6 months.", "mv": "7", "ml": "life areas"}, {"href": "benefitbridge.html", "ind": "healthcare", "title": "Building a UX Powerhouse: Center of Excellence", "desc": "First designer hired at a live healthcare SaaS platform with no design function. Built the UX practice and the product at the same time \u2014 the rebuilt admin flow now ships under one promise: \u201cManage benefits in under an hour per month.\u201d", "mv": "+50%", "ml": "dev efficiency"}, {"href": "metaverse.html", "ind": "technology", "title": "Exploring the Future: Metaverse Experience", "desc": "Designed a fully navigable immersive exhibition for a major European tech convention in 4 months, using Spatial + Unity. It drew 1,500+ virtual visitors.", "mv": "1,500+", "ml": "visitors"}, {"href": "research-at-scale.html", "ind": "construction", "title": "Optimizing User Research at Scale", "desc": "Built scalable research guidelines and AI-assisted synthesis workflows across product verticals. Research turnaround dropped 50%, and cross-team adoption of the methodology followed.", "mv": "\u221250%", "ml": "turnaround"}];
  var EMAIL = 'despi@softserveinc.com', LI = 'https://www.linkedin.com/in/data-espinosa/';
  // ---- knowledge (verbatim facts from index/about/work/founder-mode pages) ----
  var ROLES = [
    ['Jan 2025 – present', 'Experience Design Lead', 'SoftServe'],
    ['Jun 2022 – Jan 2025', 'Senior User Experience Designer', 'SoftServe'],
    ['Jul 2021 – May 2022', 'Lead User Experience Designer', '3Pillar Global'],
    ['Nov 2020 – Jul 2021', 'Senior UX Designer · Software Eng. IV', '3Pillar Global'],
    ['Apr 2019 – Nov 2020', 'Web & eCommerce Manager', 'AT&T México'],
    ['Jan 2017 – Apr 2019', 'UX·UI, Accessibility & AEM Design Lead', 'AT&T México'],
    ['Jan 2015 – Jan 2017', 'Web Designer · Digital Marketing', 'AT&T México'],
    ['Jan 2013 – Jan 2015', 'Web / Wap Developer', 'Nextel de México'],
    ['2007 – 2013', 'Developer · Designer · Founder', 'Latin3 · Alog3no · Freelance']
  ];
  var CASE_KEYS = {
    'siemens.html': 'tren trenes ferroviario ferrocarril rail railway railways train dispatcher siemens transportation back office',
    'att.html': 'telecomunicaciones at&t att telecom telecommunications ecommerce aem adobe experience',
    'blendops.html': 'energia petroleo energy oil blend blendops excel ml optimizer',
    'nielseniq.html': 'tablero datos nielsen nielseniq dashboard analytics data insights',
    'gradeline.html': 'construccion pavimento construction paving field bid blacktop gradeline',
    'benefitbridge.html': 'salud healthcare center of excellence benefitbridge ux powerhouse',
    'benefits-platform.html': 'beneficios benefits enterprise saas employee benefits platform',
    'virtu4lslacksagent.html': 'vos slack local ai operations system',
    'metaverse.html': 'metaverso realidad virtual metaverse vr xr spatial unity convention',
    'oolalife.html': 'bienestar coaching wellness life coaching oolalife',
    'research-at-scale.html': 'investigacion research at scale research ops user research turnaround'
  };
  var T = {
    en: {
      hello: 'Hi — I’m Dario’s pixel twin. Ask me about his work, experience, skills or how to reach him. I only answer from what’s on this site. Heads-up: the site is still under construction, so new case studies and features keep landing.',
      construction: 'Yes — this site is under construction. Dario keeps adding case studies, the interactive home and this chat, so some pages may change or still be rough. Everything here is real work; if something looks off, tell him at [' + EMAIL + '](mailto:' + EMAIL + ').',
      who: 'Dario Espinosa is a Lead Experience Designer based in Chiapas, Mexico, with 18+ years turning complex, outdated systems into clear, human experiences — from enterprise telecom to AI-powered tools and immersive spatial design.\nHe prototypes in code with Claude and coding agents, so stakeholders review a working interface from the first session. More on [the About page](about.html).',
      current: 'Today he’s an Experience Design Lead at SoftServe (since January 2025), leading how design and AI-assisted workflows plug into each other across healthcare, energy and spatial computing.',
      years: '18+ years — shipping across field operations, industrial software, enterprise platforms and healthcare products, from startups to Fortune 500 companies.',
      history: 'His path, most recent first:\n',
      work: 'Here are a few case studies (all 11 are in the cards):\n',
      skills: 'Core focus: IA & Design Systems, Accessibility, Product Design, Art Direction and AI-native prototyping.\nSelf-rated levels: Design Systems 95, Figma/Prototyping 96, Accessibility/WCAG 93, UX Research 91, DesignOps 88, AI-Augmented UX 81, Spatial/XR 74.',
      ai: 'He prototypes in code with Claude, Cursor and local LLMs, so stakeholders see a working interface — not a static mockup — from the first review. Decisions get tested, not just presented.',
      a11y: 'Accessibility is core to how he works (WCAG, inclusive UX). He received the 2020 AT&T International Accessibility in Action Award and the 2020 IFETEL Digital Accessibility Recognition in México.',
      tools: 'Design & prototyping: Figma, Affinity, Sketch, Adobe CC, AEM, Penpot. AI agents & dev: Claude, Cursor, local LLMs. Research: Miro, Maze, UserTesting, HotJar.',
      where: 'He’s based in Chiapas, México.',
      lang: 'Spanish (native) and English (B2).',
      contact: 'He’s available for new opportunities. Email [' + EMAIL + '](mailto:' + EMAIL + '), connect on [LinkedIn](' + LI + '), or grab the [quick portfolio PDF](dario-espinosa-portfolio.pdf).',
      ventures: 'When he’s the client: VIRTU4L (a VR business built from scratch), EDGA (a multi-agent design-thinking Claude plugin) and Ascend Restyle (an internal portfolio-redesign skill). See [Myself as Client](founder-mode.html).',
      thanks: 'Anytime! Anything else you’d like to know?',
      fallback: 'I don’t have that on this site, so I won’t guess. Try his work, experience, skills, AI prototyping or contact — or email [' + EMAIL + '](mailto:' + EMAIL + ').',
      open: 'Open the case study',
      chips: ['What do you do?', 'Current role', 'Show me your work', 'AI prototyping', 'Accessibility award', 'How can I contact you?']
    },
    es: {
      hello: 'Hola — soy el gemelo pixel de Dario. Pregúntame por su trabajo, experiencia, habilidades o cómo contactarlo. Solo respondo con lo que está en este sitio. Ojo: el sitio sigue en construcción, así que van llegando casos y funciones nuevas.',
      construction: 'Sí — este sitio está en construcción. Dario sigue agregando casos de estudio, el home interactivo y este chat, así que algunas páginas pueden cambiar o verse incompletas. Todo el trabajo aquí es real; si algo se ve raro, avísale a [' + EMAIL + '](mailto:' + EMAIL + ').',
      who: 'Dario Espinosa es Lead Experience Designer en Chiapas, México, con más de 18 años convirtiendo sistemas complejos y obsoletos en experiencias claras y humanas — desde telecom empresarial hasta herramientas con IA y diseño espacial inmersivo.\nPrototipa en código con Claude y agentes, así los stakeholders revisan una interfaz funcional desde la primera sesión. Más en [About](about.html).',
      current: 'Hoy es Experience Design Lead en SoftServe (desde enero de 2025), liderando cómo se conectan el diseño y los flujos asistidos por IA en salud, energía y computación espacial.',
      years: 'Más de 18 años, entregando en operaciones de campo, software industrial, plataformas empresariales y productos de salud, de startups a empresas Fortune 500.',
      history: 'Su trayectoria, de lo más reciente a lo más antiguo:\n',
      work: 'Algunos casos de estudio (los 11 están en las tarjetas):\n',
      skills: 'Enfoque: IA y Design Systems, Accesibilidad, Diseño de Producto, Dirección de Arte y prototipado nativo con IA.\nNiveles (autoevaluados): Design Systems 95, Figma/Prototipado 96, Accesibilidad/WCAG 93, UX Research 91, DesignOps 88, UX con IA 81, Espacial/XR 74.',
      ai: 'Prototipa en código con Claude, Cursor y LLMs locales, así los stakeholders ven una interfaz funcional — no un mockup estático — desde la primera revisión.',
      a11y: 'La accesibilidad es central en su trabajo (WCAG, UX inclusivo). Recibió el 2020 AT&T International Accessibility in Action Award y el reconocimiento 2020 de IFETEL a la accesibilidad digital en México.',
      tools: 'Diseño y prototipado: Figma, Affinity, Sketch, Adobe CC, AEM, Penpot. IA y desarrollo: Claude, Cursor, LLMs locales. Research: Miro, Maze, UserTesting, HotJar.',
      where: 'Vive en Chiapas, México.',
      lang: 'Español (nativo) e inglés (B2).',
      contact: 'Está disponible para nuevas oportunidades. Escríbele a [' + EMAIL + '](mailto:' + EMAIL + '), conecta en [LinkedIn](' + LI + ') o descarga el [PDF de portafolio](dario-espinosa-portfolio.pdf).',
      ventures: 'Cuando él es el cliente: VIRTU4L (un negocio de VR desde cero), EDGA (un plugin de Claude multi-agente de design thinking) y Ascend Restyle (una skill interna para rediseñar portafolios). Ver [Myself as Client](founder-mode.html).',
      thanks: '¡Con gusto! ¿Algo más que quieras saber?',
      fallback: 'Eso no está en este sitio, así que no voy a inventarlo. Prueba con su trabajo, experiencia, habilidades, prototipado con IA o contacto — o escríbele a [' + EMAIL + '](mailto:' + EMAIL + ').',
      open: 'Ver el caso',
      chips: ['¿Qué haces?', 'Rol actual', 'Muéstrame tu trabajo', 'Prototipado con IA', 'Premio de accesibilidad', '¿Cómo te contacto?']
    }
  };
  var INTENTS = [
    ['construction', 'construction under unfinished finished done wip beta broken bug bugs new update updated construccion terminado incompleto roto actualizado nuevo'],
    ['thanks', 'thanks thank gracias genial perfect'],
    ['contact', 'contact email mail hire hiring reach available availability linkedin cv resume pdf contacto contactar correo contratar disponible'],
    ['current', 'current currently now today present softserve actual actualmente hoy ahora'],
    ['history', 'history career roles worked companies previous before 3pillar nextel jobs trayectoria historial empresas trabajado puestos'],
    ['years', 'years long how much experience senior años cuanto'],
    ['a11y', 'accessibility wcag a11y inclusive award awards prize recognition ifetel accesibilidad premio premios reconocimiento'],
    ['ai', 'ai claude cursor llm code coding prototype prototyping agents ia prototipo prototipado codigo agentes'],
    ['tools', 'tools tool figma stack software sketch adobe penpot herramientas'],
    ['skills', 'skills skill strengths good best competencies expertise design systems habilidades fortalezas competencias'],
    ['where', 'where based location live city country chiapas mexico donde vive ubicacion'],
    ['lang', 'language languages english spanish speak idioma idiomas ingles espanol habla'],
    ['ventures', 'own venture ventures client founder side virtu4l edga ascend startup cliente emprendimiento propios'],
    ['work', 'work projects project portfolio case cases studies examples show trabajo proyectos casos portafolio ejemplos muestrame'],
    ['who', 'who yourself dario bio background introduce quien eres sobre haces dedicas'],
    ['hello', 'hi hello hey hola buenas saludos']
  ];
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9&@.+\s]/g, ' '); }
  function isEs(s) { return /[¿¡ñáéíóú]/i.test(s) || /\b(que|como|donde|quien|cual|cuantos|anos|trabajo|experiencia|hola|gracias|contacto|proyectos|habilidades|idiomas|eres|tienes|muestrame|haces|rol)\b/.test(norm(s)); }
  function score(q, keys) { var n = 0; keys.split(' ').forEach(function (k) { if (k && (' ' + q + ' ').indexOf(' ' + k + ' ') > -1) n += k.length > 3 ? 2 : 1; }); if (keys.indexOf(' ') < 0 && q.indexOf(keys) > -1) n += 2; return n; }
  function caseLine(w) { return '• [' + w.title + '](' + w.href + ')' + (w.mv ? ' — ' + w.mv + ' ' + w.ml : ''); }

  // the single seam a real AI endpoint would replace
  function ask(text) {
    var L = isEs(text) ? T.es : T.en, q = norm(text);
    // a specific case wins when the question names it
    var best = null, bs = 0;
    WORK.forEach(function (w) { var s = score(q, CASE_KEYS[w.href] || ''); if (s > bs) { bs = s; best = w; } });
    var intent = null, is = 0;
    INTENTS.forEach(function (it) { var s = score(q, it[1]); if (s > is) { is = s; intent = it[0]; } });
    if (best && bs >= 2 && (bs >= is || intent === 'work')) {
      return best.title + ' (' + best.ind + ')\n' + best.desc + (best.mv ? '\nImpact: ' + best.mv + ' ' + best.ml + '.' : '') + '\n[' + L.open + ' →](' + best.href + ')';
    }
    if (!intent || is < 1) return L.fallback;
    if (intent === 'history') return L.history + ROLES.map(function (r) { return '• ' + r[0] + ' — ' + r[1] + ', ' + r[2]; }).join('\n');
    if (intent === 'work') return L.work + WORK.slice(0, 5).map(caseLine).join('\n');
    return L[intent];
  }


  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function md(s) {
    return esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, label, url) {
      var ext = /^https?:/.test(url);
      return '<a href="' + url + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + label + '</a>';
    });
  }
  function pageCase() { var f = location.pathname.split('/').pop() || 'index.html'; for (var i = 0; i < WORK.length; i++) if (WORK[i].href === f) return WORK[i]; return null; }
  window.PixelTwin = { ask: ask, isEs: isEs, T: T, md: md, esc: esc, WORK: WORK, pageCase: pageCase };
})();

/* ═══ MINI TWIN — floating pixel face on project pages (light theme only) ═══
   A 72 px pixelated circle, bottom-right. Floats, follows the pointer with its
   eyes, blinks, smiles on hover, looks surprised on a fast scroll. One short
   intro bubble per session. Click → a compact chat about this page and Dario.
   Stays out of the way: no auto-open, small, Esc closes, reduced motion = static. */
(function () {
  'use strict';
  if (document.getElementById('hero-name')) return;                       // not on the index
  if (!document.documentElement.classList.contains('theme-light')) return; // only when coming from the face view
  var PT = window.PixelTwin; if (!PT) return;
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = document.createElement('style');
  css.textContent = [
    '.pt-orb{position:fixed;right:22px;bottom:22px;z-index:900;width:72px;height:72px;padding:0;border:0;background:none;cursor:pointer;border-radius:50%;animation:ptFloat 4.2s ease-in-out infinite;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}',
    '.pt-orb:hover{transform:scale(1.08)}',
    '.pt-orb:focus-visible{outline:2px solid #0a8f78;outline-offset:4px}',
    '.pt-orb canvas{width:72px;height:72px;display:block;image-rendering:pixelated;filter:drop-shadow(0 14px 22px rgba(20,20,42,.28)) drop-shadow(0 3px 6px rgba(20,20,42,.18))}',
    '.pt-orb:hover canvas{filter:drop-shadow(0 18px 28px rgba(20,20,42,.32)) drop-shadow(0 4px 8px rgba(20,20,42,.2))}',
    '.pt-fx{position:fixed;right:22px;bottom:22px;width:72px;height:72px;z-index:899;pointer-events:none}',
    '.pt-px{position:absolute;left:50%;top:50%;width:7px;height:7px;border-radius:1px;opacity:0;will-change:transform,opacity}',
    '@media(max-width:600px){.pt-fx{right:14px;bottom:14px;width:60px;height:60px}}',
    '@keyframes ptFloat{0%,100%{translate:0 0}50%{translate:0 -6px}}',
    '.pt-tip{position:fixed;right:104px;bottom:44px;z-index:900;max-width:220px;font:500 12px/1.45 "Geist Mono",ui-monospace,monospace;color:#14142a;background:#fff;border:1.5px solid #14142a;border-radius:10px 10px 2px 10px;padding:8px 11px;box-shadow:3px 3px 0 #14142a;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;pointer-events:none}',
    '.pt-tip.on{opacity:1;transform:none}',
    '.pt-panel{position:fixed;right:22px;bottom:106px;z-index:901;width:min(360px,calc(100vw - 32px));height:min(480px,calc(100vh - 140px));display:flex;flex-direction:column;background:#fff;color:#14142a;border:1.5px solid #14142a;border-radius:16px;box-shadow:6px 6px 0 #14142a;overflow:hidden;font-family:"Geist",system-ui,sans-serif}',
    '.pt-panel[hidden]{display:none}',
    '.pt-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border-bottom:1px solid rgba(20,20,42,.12)}',
    '.pt-head b{font-family:"Pixelify Sans","Geist Mono",monospace;font-size:18px;line-height:1}',
    '.pt-head small{display:block;font:11px "Geist Mono",monospace;color:rgba(20,20,42,.6);margin-top:3px}',
    '.pt-x{width:32px;height:32px;border:1px solid rgba(20,20,42,.2);border-radius:50%;background:#fff;color:#14142a;cursor:pointer;font-size:14px;line-height:1}',
    '.pt-log{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:9px}',
    '.pt-msg{max-width:90%;padding:9px 12px;border-radius:13px;font-size:13.5px;line-height:1.5;white-space:pre-line}',
    '.pt-msg.bot{background:#f1f2f5;border-top-left-radius:4px;align-self:flex-start}',
    '.pt-msg.me{background:#14142a;color:#fff;border-top-right-radius:4px;align-self:flex-end}',
    '.pt-msg a{color:#0a7d68;font-weight:600}',
    '.pt-chips{display:flex;gap:6px;overflow-x:auto;padding:0 14px 8px;scrollbar-width:none}',
    '.pt-chip{flex:none;white-space:nowrap;font:12px "Geist Mono",monospace;color:#14142a;background:#fff;border:1px solid rgba(20,20,42,.22);border-radius:999px;padding:6px 10px;cursor:pointer}',
    '.pt-chip:hover{border-color:#14142a}',
    '.pt-form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid rgba(20,20,42,.12)}',
    '.pt-form input{flex:1;min-width:0;font:inherit;font-size:14px;color:#14142a;border:1.5px solid #14142a;border-radius:10px;padding:9px 11px}',
    '.pt-form input:focus{outline:2px solid #0a8f78;outline-offset:1px}',
    '.pt-form button{width:42px;height:42px;border:0;border-radius:10px;background:#14142a;color:#fff;cursor:pointer;display:grid;place-items:center}',
    '.pt-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '@media(max-width:600px){.pt-orb{right:14px;bottom:14px;width:60px;height:60px}.pt-orb canvas{width:60px;height:60px}.pt-panel{right:12px;left:12px;width:auto;bottom:86px}.pt-tip{right:84px;bottom:30px}}',
    '@media(prefers-reduced-motion:reduce){.pt-orb{animation:none;transition:none}.pt-tip{transition:none}}'
  ].join('\n');
  document.head.appendChild(css);

  // ---- the orb: a pixel circle with a tiny tile face ----
  var orb = document.createElement('button');
  orb.type = 'button'; orb.className = 'pt-orb';
  orb.setAttribute('aria-label', 'Ask Dario’s pixel twin about this project'); orb.setAttribute('aria-expanded', 'false');
  var cv = document.createElement('canvas'), N = 18, CELL = 8; cv.width = cv.height = N * CELL;
  orb.appendChild(cv); document.body.appendChild(orb);
  var ctx = cv.getContext('2d');
  var st = { lx: 0, ly: 0, tx: 0, ty: 0, blink: 0, mood: 'smile', until: 0, talk: 0 };
  function cellOn(x, y) { var dx = x + .5 - N / 2, dy = y + .5 - N / 2; return dx * dx + dy * dy <= (N / 2) * (N / 2); }
  function face() {
    var on = {}, ex = Math.round(st.lx * 1.4), ey = Math.round(st.ly * 1.1);
    function m(x, y) { on[x + ',' + y] = 1; }
    var talking = performance.now() < st.talk, ph = Math.sin(performance.now() / 60) > 0;
    [5, 11].forEach(function (cx) {
      cx += ex;
      if (st.blink > 0 || st.mood === 'squint') { m(cx, 7 + ey); m(cx + 1, 7 + ey); }
      else if (st.mood === 'happy') { m(cx, 7 + ey); m(cx + 1, 7 + ey); m(cx - 1, 8 + ey); m(cx + 2, 8 + ey); }
      else { var h = st.mood === 'surprised' ? 4 : 3; for (var y = 0; y < h; y++) { m(cx, 6 + y + ey); m(cx + 1, 6 + y + ey); } }
    });
    var mx = 8 + Math.round(st.lx * .6);
    if (talking && ph || st.mood === 'surprised') { m(mx, 11); m(mx + 1, 11); m(mx - 1, 12); m(mx + 2, 12); m(mx, 13); m(mx + 1, 13); }
    else { m(mx - 2, 11); m(mx + 3, 11); for (var x = -1; x <= 2; x++) m(mx + x, 12); if (st.mood === 'happy') { m(mx - 3, 10); m(mx + 4, 10); } }
    return on;
  }
  function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    var on = face();
    for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
      if (!cellOn(x, y)) continue;
      var edge = !cellOn(x - 1, y) || !cellOn(x + 1, y) || !cellOn(x, y - 1) || !cellOn(x, y + 1);
      ctx.fillStyle = edge ? '#a7adb8' : '#d7dae0';   // soft grey rim so the orb blends with the light grid ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
      if (edge) continue;
      if (on[x + ',' + y]) { ctx.fillStyle = '#7d838d'; ctx.fillRect(x * CELL + 1, y * CELL + 2, CELL - 2, CELL - 2); ctx.fillStyle = '#16181d'; ctx.fillRect(x * CELL + 1, y * CELL, CELL - 2, CELL - 2); }
      else { ctx.fillStyle = y > 12 && st.mood === 'happy' && (x === 3 || x === 4 || x === 13 || x === 14) && y < 14 ? '#f3a3c4' : '#f3f4f6'; ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2); }
    }
  }
  // soft-colour pixels drift out of the orb now and then, then fade
  var fx = document.createElement('div'); fx.className = 'pt-fx'; fx.setAttribute('aria-hidden', 'true'); document.body.appendChild(fx);
  var PAL = ['#6ee7b7', '#a78bfa', '#f9a8d4', '#7dd3fc', '#fcd34d', '#5eead4', '#c4b5fd'];   // soft but visible on the light grid
  function sparks(n) {
    if (RM || document.hidden || !fx.animate) return;
    for (var i = 0; i < n; i++) {
      var d = document.createElement('i'); d.className = 'pt-px';
      var sz = 5 + Math.round(Math.random() * 5); d.style.width = d.style.height = sz + 'px';
      d.style.background = PAL[(Math.random() * PAL.length) | 0]; fx.appendChild(d);
      var a = (i / n) * Math.PI * 2 + (Math.random() - .5) * (Math.PI * 2 / n), r = 44 + Math.random() * 40;   // evenly spread all around, centre → out
      var tx = Math.cos(a) * r, ty = Math.sin(a) * r - 10, dur = 1100 + Math.random() * 900;
      var an = d.animate([
        { transform: 'translate(-50%,-50%) translate(0,0) scale(.6)', opacity: 0 },
        { transform: 'translate(-50%,-50%) translate(' + tx * .35 + 'px,' + ty * .35 + 'px) scale(1)', opacity: .95, offset: .22 },
        { transform: 'translate(-50%,-50%) translate(' + tx + 'px,' + ty + 'px) scale(.4)', opacity: 0 }
      ], { duration: dur, delay: i * 45, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' });
      an.onfinish = (function (el) { return function () { el.remove(); }; })(d);
    }
  }
  (function schedule() { setTimeout(function () { if (panel.hidden) sparks(6 + ((Math.random() * 6) | 0)); schedule(); }, 4500 + Math.random() * 5500); })();
  function mood(name, ms) { st.mood = name; st.until = performance.now() + (ms || 1400); }
  var px = null, py = null, lastY = scrollY, lastT = 0, raf = 0, nextBlink = performance.now() + 2500;
  addEventListener('pointermove', function (e) { px = e.clientX; py = e.clientY; }, { passive: true });
  addEventListener('scroll', function () {
    var now = performance.now(), v = Math.abs(scrollY - lastY) / Math.max(16, now - lastT); lastY = scrollY; lastT = now;
    if (v > 4 && st.mood === 'smile') mood('surprised', 700);
  }, { passive: true });
  function loop(now) {
    if (px !== null) {
      var r = orb.getBoundingClientRect(), dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height / 2);
      st.tx = Math.max(-1, Math.min(1, dx / 260)); st.ty = Math.max(-1, Math.min(1, dy / 260));
    }
    st.lx += (st.tx - st.lx) * .12; st.ly += (st.ty - st.ly) * .12;
    if (now > nextBlink) { st.blink = 7; nextBlink = now + 2600 + Math.random() * 3600; }
    if (st.blink > 0) st.blink--;
    if (st.until && now > st.until) { st.until = 0; st.mood = 'smile'; }
    draw(); raf = requestAnimationFrame(loop);
  }
  if (RM) draw(); else raf = requestAnimationFrame(loop);
  document.addEventListener('visibilitychange', function () { if (RM) return; if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(loop); });
  orb.addEventListener('pointerenter', function () { mood('happy', 1600); sparks(5); });

  // ---- one gentle intro bubble per session ----
  var tip = document.createElement('div'); tip.className = 'pt-tip'; tip.setAttribute('aria-hidden', 'true');
  var pc = PT.pageCase();
  tip.textContent = (pc ? 'Questions about this project? Ask me.' : 'Questions about Dario? Ask me.') + ' (The site is under construction — new stuff keeps landing.)';
  document.body.appendChild(tip);
  var seen = false; try { seen = sessionStorage.getItem('ptTip') === '1'; } catch (e) {}
  if (!seen) { setTimeout(function () { if (!panel.hidden) return; tip.classList.add('on'); mood('happy', 1500); setTimeout(function () { tip.classList.remove('on'); }, 5200); }, 3500); try { sessionStorage.setItem('ptTip', '1'); } catch (e) {} }

  // ---- compact chat ----
  var panel = document.createElement('section');
  panel.className = 'pt-panel'; panel.hidden = true; panel.setAttribute('aria-label', 'Ask about this project');
  panel.innerHTML = '<div class="pt-head"><div><b>Ask about this page</b><small>Answers come from this site’s own content.</small></div><button type="button" class="pt-x" aria-label="Close chat">✕</button></div>'
    + '<div class="pt-log" role="log" aria-live="polite"></div><div class="pt-chips"></div>'
    + '<form class="pt-form" autocomplete="off"><label class="pt-sr" for="pt-in">Your question</label><input id="pt-in" maxlength="240" placeholder="Ask about this project or Dario…"><button type="submit" aria-label="Send question"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg></button></form>';
  document.body.appendChild(panel);
  var log = panel.querySelector('.pt-log'), chips = panel.querySelector('.pt-chips'), form = panel.querySelector('.pt-form'), input = panel.querySelector('input');
  function add(cls, html) { var d = document.createElement('div'); d.className = 'pt-msg ' + cls; d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; }
  function reply(text) { st.talk = performance.now() + Math.min(3600, 500 + text.length * 20); add('bot', PT.md(text)); }
  // Page brief: read THIS page (title, lead, meta row, metrics, section headings + text)
  // so answers stay consistent with what the visitor is looking at.
  function txt(el) { return el ? (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  var BRIEF = (function () {
    var b = { title: txt(document.querySelector('.cs-hero h1, main h1, h1')), lead: '', meta: [], metrics: [], sections: [] };
    var lead = document.querySelector('.cs-hero p, .hero p, main p'); b.lead = txt(lead);
    [].forEach.call(document.querySelectorAll('.meta-label'), function (l) { var v = l.nextElementSibling; if (v && txt(v)) b.meta.push([txt(l).toLowerCase(), txt(v)]); });
    [].forEach.call(document.querySelectorAll('.metric-box, .cs-metric'), function (m) {
      var v = m.querySelector('.metric-val, .cs-mval'), l = m.querySelector('.metric-label, .cs-mlabel'); if (v && txt(v)) b.metrics.push(txt(v) + ' ' + txt(l));
    });
    [].forEach.call(document.querySelectorAll('main h2, .block h2, section h2'), function (h) {
      var box = h.closest('.block, section') || h.parentNode, ps = [].slice.call(box.querySelectorAll('p, li')).map(txt).filter(function (t) { return t.length > 40; });
      if (txt(h)) b.sections.push({ h: txt(h), t: ps.join(' ') });
    });
    return b;
  })();
  function sentences(t, n) { var m = t.match(/[^.!?]+[.!?]+/g) || [t]; return m.slice(0, n).join(' ').trim(); }
  var STOP = ' the a an of to and or in on for with is are was were how what why who did does do you your this that it about me tell more de la el los las que como por para con es un una del al y o en ';
  function keywords(q) { return q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(function (w) { return w.length > 2 && STOP.indexOf(' ' + w + ' ') < 0; }); }
  function fromPage(q) {
    var ks = keywords(q); if (!ks.length) return null;
    var best = null, bs = 0;
    BRIEF.sections.forEach(function (s) {
      var hay = (s.h + ' ' + s.t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''), sc = 0;
      ks.forEach(function (k) { if (s.h.toLowerCase().indexOf(k) > -1) sc += 3; else if (hay.indexOf(k) > -1) sc += 1; });
      if (sc > bs) { bs = sc; best = s; }
    });
    if (!best || bs < 2 || !best.t) return null;
    return best.h + '\n' + sentences(best.t, 3);
  }
  function metaOf(keys) { for (var i = 0; i < BRIEF.meta.length; i++) if (keys.test(BRIEF.meta[i][0])) return BRIEF.meta[i][1]; return ''; }
  function summary() {
    if (BRIEF.title && (BRIEF.lead || pc)) {
      var m = BRIEF.meta.filter(function (x) { return x[1] && x[0] !== 'tags'; }).map(function (x) { return x[0] + ': ' + x[1]; }).join(' · ');
      return (pc ? pc.title : BRIEF.title) + '\n' + (BRIEF.lead || pc.desc) + (m ? '\n' + m : '') + (BRIEF.metrics.length ? '\nResults: ' + BRIEF.metrics.slice(0, 3).join(', ') + '.' : '');
    }
    if (pc) return pc.title + ' (' + pc.ind + ')\n' + pc.desc + (pc.mv ? '\nImpact: ' + pc.mv + ' ' + pc.ml + '.' : '');
    var d = document.querySelector('meta[name="description"]'); return d ? d.content : 'This page is part of Dario’s portfolio.';
  }
  function answer(q) {
    var n = q.toLowerCase();
    if (/summar|about this|this (project|page)|what is this|de que trata|resumen|este proyecto/.test(n)) return summary();
    if (/result|impact|metric|outcome|numbers|resultado|impacto|metricas/.test(n)) {
      if (BRIEF.metrics.length) return 'On this project: ' + BRIEF.metrics.join(', ') + '.';
      if (pc) return pc.mv ? 'Headline result: ' + pc.mv + ' ' + pc.ml + '.\n' + pc.desc : summary();
    }
    if (/\b(role|my role|your role|position|rol|papel)\b/.test(n) && !/current|actual/.test(n)) { var r = metaOf(/role|rol/); if (r) return 'His role on this project: ' + r + '.'; }
    if (/client|company|who was it for|cliente|empresa/.test(n)) { var c = metaOf(/client|cliente|context/); if (c) return 'Client / context: ' + c + '.'; }
    if (/section|cover|topics|parts|outline|secciones|temas/.test(n) && BRIEF.sections.length) return 'This page covers:\n' + BRIEF.sections.map(function (s) { return '• ' + s.h; }).join('\n');
    var hit = fromPage(q); if (hit) return hit;
    return PT.ask(q);
  }
  function send(q) { q = (q || '').trim(); if (!q) return; add('me', PT.esc(q)); input.value = ''; setTimeout(function () { reply(answer(q)); }, RM ? 0 : 350); }
  var CH = pc || BRIEF.metrics.length ? ['Summarize this project', 'Key results', 'Your role here', 'What does it cover?', 'How can I contact you?'] : ['What is this page about?', 'What do you do?', 'Show me your work', 'How can I contact you?'];
  chips.innerHTML = CH.map(function (c) { return '<button type="button" class="pt-chip">' + PT.esc(c) + '</button>'; }).join('');
  var greeted = false;
  function open() {
    panel.hidden = false; orb.setAttribute('aria-expanded', 'true'); tip.classList.remove('on'); input.focus({ preventScroll: true });
    if (!greeted) { greeted = true; reply((pc ? 'Hi! You’re looking at “' + pc.title + '”. Want a quick summary, the key results, or anything else about Dario?' : 'Hi! Ask me about this page or anything about Dario’s work.') + '\nHeads-up: the site is still under construction, so some pages may change.'); }
  }
  function close() { panel.hidden = true; orb.setAttribute('aria-expanded', 'false'); orb.focus({ preventScroll: true }); }
  orb.addEventListener('click', function () { panel.hidden ? open() : close(); });
  panel.querySelector('.pt-x').addEventListener('click', close);
  form.addEventListener('submit', function (e) { e.preventDefault(); send(input.value); });
  chips.addEventListener('click', function (e) { var b = e.target.closest('.pt-chip'); if (b) send(b.textContent); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { e.preventDefault(); close(); } });
})();
