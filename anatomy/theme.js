/* Anatomy plates follow the site theme (html.theme-light set by effects.js / the head snippet). */
(function () {
  function sync() { var light = document.documentElement.classList.contains("theme-light"); document.querySelectorAll(".anat-wrap").forEach(function (el) { el.setAttribute("data-theme", light ? "light" : "dark"); }); }
  sync(); new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
})();
