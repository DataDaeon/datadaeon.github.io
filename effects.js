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
