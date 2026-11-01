/* UniversityJano: loan eligibility popup
   Shows once, 5 seconds after a page loads. Self-contained (injects its own CSS and HTML). */
(function () {
  "use strict";

  /* ============ EDIT THESE ============ */
  var DELAY_MS = 5000;                           // wait before showing the popup
  var COOLDOWN_HOURS = 24;                       // after it is closed, stay quiet for this long
  var CLICKED_COOLDOWN_HOURS = 24 * 7;           // after "Check My Eligibility" is clicked
  var TARGET_URL = "/loan-eligibility-checker.html?ref=popup";
  var SKIP_PATHS = ["/loan-eligibility-checker.html", "/loan-eligibility-checker"]; // pages where the popup never shows
  var STORAGE_KEY = "uj_elig_popup_until";
  /* ==================================== */

  var path = location.pathname.replace(/\/index\.html$/, "/");
  if (SKIP_PATHS.indexOf(path) !== -1) return;

  function readUntil() {
    try { return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0; } catch (e) { return 0; }
  }
  function snooze(hours) {
    try { localStorage.setItem(STORAGE_KEY, String(Date.now() + hours * 3600 * 1000)); } catch (e) {}
  }
  var shownThisPage = false, retries = 0;
  if (Date.now() < readUntil()) return;

  var css = "" +
    ".ujep-back{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:1rem;font-family:inherit}" +
    ".ujep-box{position:relative;background:#fff;color:#0f172a;border-radius:16px;max-width:420px;width:100%;padding:1.75rem 1.5rem 1.5rem;box-shadow:0 20px 50px rgba(15,23,42,.35);text-align:center;line-height:1.5}" +
    ".ujep-x{position:absolute;top:.5rem;right:.6rem;border:0;background:transparent;font-size:1.6rem;line-height:1;cursor:pointer;color:#475569;padding:.25rem .5rem;border-radius:8px}" +
    ".ujep-x:hover{background:#f1f5f9}" +
    ".ujep-ico{font-size:2.2rem;margin-bottom:.25rem}" +
    ".ujep-box h2{font-size:1.25rem;margin:.25rem 0 .5rem;line-height:1.3}" +
    ".ujep-box p{margin:0 0 1.1rem;color:#475569;font-size:.97rem}" +
    ".ujep-cta{display:block;background:#1d4ed8;color:#fff;text-decoration:none;font-weight:700;padding:.8rem 1rem;border-radius:10px;font-size:1rem}" +
    ".ujep-cta:hover{filter:brightness(1.08)}" +
    ".ujep-later{display:inline-block;margin-top:.7rem;border:0;background:transparent;color:#475569;cursor:pointer;font-size:.9rem;text-decoration:underline}" +
    "@media(max-width:560px){.ujep-back{align-items:flex-end;padding:0}.ujep-box{max-width:none;border-radius:16px 16px 0 0;padding-bottom:1.75rem}}";

  var lastFocus = null, back = null;

  function close(hours) {
    if (!back) return;
    snooze(hours);
    document.removeEventListener("keydown", onKey, true);
    back.parentNode && back.parentNode.removeChild(back);
    back = null;
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }

  function onKey(e) {
    if (!back) return;
    if (e.key === "Escape") { close(COOLDOWN_HOURS); return; }
    if (e.key === "Tab") {
      var f = back.querySelectorAll("a[href],button");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function show() {
    if (shownThisPage || back) return;
    // Do not interrupt someone who is typing in a form: try again a bit later.
    var a = document.activeElement;
    if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && retries++ < 6) { setTimeout(show, 5000); return; }
    // Do not stack on top of another modal (for example the exit-intent scholarship modal on the home page).
    if (document.querySelector(".modal-overlay") && retries++ < 6) { setTimeout(show, 5000); return; }
    shownThisPage = true;
    lastFocus = a;

    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    back = document.createElement("div");
    back.className = "ujep-back";
    back.innerHTML =
      '<div class="ujep-box" role="dialog" aria-modal="true" aria-labelledby="ujep-t">' +
        '<button type="button" class="ujep-x" aria-label="Close">&times;</button>' +
        '<div class="ujep-ico" aria-hidden="true">🎓</div>' +
        '<h2 id="ujep-t">Planning an education loan for your online degree?</h2>' +
        '<p>Please check your eligibility. Get an indicative loan amount and EMI in under a minute. No PAN or Aadhaar needed.</p>' +
        '<a class="ujep-cta" href="' + TARGET_URL + '">Check My Eligibility</a>' +
        '<button type="button" class="ujep-later">Maybe later</button>' +
      '</div>';
    document.body.appendChild(back);

    back.querySelector(".ujep-x").addEventListener("click", function () { close(COOLDOWN_HOURS); });
    back.querySelector(".ujep-later").addEventListener("click", function () { close(COOLDOWN_HOURS); });
    back.querySelector(".ujep-cta").addEventListener("click", function () { snooze(CLICKED_COOLDOWN_HOURS); });
    back.addEventListener("click", function (e) { if (e.target === back) close(COOLDOWN_HOURS); });
    document.addEventListener("keydown", onKey, true);
    back.querySelector(".ujep-cta").focus();
  }

  function start() { setTimeout(show, DELAY_MS); }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
})();
