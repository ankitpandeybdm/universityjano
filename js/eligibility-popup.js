/* UniversityJano: loan eligibility popup
   Shows once, 5 seconds after a page loads. Self-contained (injects its own CSS and HTML). */
(function () {
  "use strict";

  /* ============ EDIT THESE ============ */
  var DELAY_MS = 5000;                           // wait before showing the popup
  var COOLDOWN_HOURS = 24;                       // after it is closed, stay quiet for this long
  var CLICKED_COOLDOWN_HOURS = 24 * 7;           // after "Check My Eligibility" is clicked
  var TARGET_URL = "/loan-eligibility-checker.html?ref=popup";
  // Student photo (Unsplash, free to use). To change it, paste any other image URL here.
  var PHOTO = "https://images.unsplash.com/photo-1758612215020-842383aadb9e?auto=format&fit=crop&w=900&q=75";
  var PHOTO_POSITION = "center 30%";             // which part of the photo stays visible when it is cropped
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
    ".ujep-back{position:fixed;inset:0;background:rgba(8,16,40,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:1rem;font-family:inherit;animation:ujep-fade .25s ease-out}" +
    ".ujep-box{position:relative;display:flex;background:#fff;color:#0f172a;border-radius:22px;max-width:780px;width:100%;overflow:hidden;box-shadow:0 30px 70px rgba(8,16,40,.5);line-height:1.5;animation:ujep-in .4s cubic-bezier(.2,.8,.2,1)}" +
    ".ujep-photo{position:relative;flex:0 0 43%;min-height:420px;background:linear-gradient(145deg,#0b1b3d,#1d4ed8 60%,#4f46e5);overflow:hidden}" +
    ".ujep-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}" +
    ".ujep-photo:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,16,40,.05) 35%,rgba(8,16,40,.78) 100%)}" +
    ".ujep-fallback{position:absolute;inset:0;display:none;align-items:center;justify-content:center;font-size:5rem;z-index:1}" +
    ".ujep-free{position:absolute;top:1rem;left:1rem;z-index:2;background:#fbbf24;color:#3b2a00;font-weight:800;font-size:.72rem;letter-spacing:.08em;padding:.35rem .7rem;border-radius:999px;box-shadow:0 4px 12px rgba(0,0,0,.25)}" +
    ".ujep-float{position:absolute;left:1rem;right:1rem;bottom:1rem;z-index:2;display:flex;align-items:center;gap:.7rem;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.35);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff;border-radius:14px;padding:.7rem .85rem}" +
    ".ujep-float b{display:block;font-size:.95rem;line-height:1.2}" +
    ".ujep-float span.s{display:block;font-size:.76rem;opacity:.9}" +
    ".ujep-float i{font-style:normal;font-size:1.6rem}" +
    ".ujep-body{flex:1;padding:2rem 1.9rem 1.7rem;display:flex;flex-direction:column;justify-content:center;text-align:left}" +
    ".ujep-kick{display:inline-block;align-self:flex-start;background:#e0e7ff;color:#3730a3;font-weight:700;font-size:.74rem;letter-spacing:.06em;padding:.3rem .65rem;border-radius:999px;margin-bottom:.8rem}" +
    ".ujep-body h2{font-size:1.6rem;line-height:1.2;margin:0 0 .6rem;color:#0b1b3d;letter-spacing:-.01em}" +
    ".ujep-body h2 em{font-style:normal;color:#1d4ed8}" +
    ".ujep-body p{margin:0 0 1rem;color:#475569;font-size:.98rem}" +
    ".ujep-list{list-style:none;margin:0 0 1.3rem;padding:0;display:grid;gap:.5rem}" +
    ".ujep-list li{display:flex;align-items:center;gap:.6rem;font-size:.93rem;font-weight:600;color:#1e293b}" +
    ".ujep-list li:before{content:'\\2713';flex:0 0 22px;height:22px;border-radius:50%;background:#dcfce7;color:#15803d;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800}" +
    ".ujep-cta{display:flex;align-items:center;justify-content:center;gap:.5rem;background:linear-gradient(135deg,#1d4ed8,#4f46e5);color:#fff;text-decoration:none;font-weight:700;padding:.95rem 1.2rem;border-radius:12px;font-size:1.02rem;box-shadow:0 10px 24px rgba(37,56,200,.35);transition:transform .15s,box-shadow .15s}" +
    ".ujep-cta:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(37,56,200,.45)}" +
    ".ujep-cta span{transition:transform .15s}.ujep-cta:hover span{transform:translateX(4px)}" +
    ".ujep-later{align-self:center;margin-top:.8rem;border:0;background:transparent;color:#64748b;cursor:pointer;font-size:.9rem;text-decoration:underline}" +
    ".ujep-x{position:absolute;top:.7rem;right:.7rem;z-index:5;width:36px;height:36px;border:0;border-radius:50%;background:rgba(255,255,255,.95);color:#334155;font-size:1.5rem;line-height:1;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.2)}" +
    ".ujep-x:hover{background:#fff;color:#0f172a}" +
    "@keyframes ujep-fade{from{opacity:0}to{opacity:1}}" +
    "@keyframes ujep-in{from{opacity:0;transform:translateY(26px) scale(.97)}to{opacity:1;transform:none}}" +
    "@media(max-width:680px){" +
      ".ujep-back{align-items:flex-end;padding:0}" +
      ".ujep-box{flex-direction:column;max-width:none;border-radius:22px 22px 0 0;max-height:94vh;overflow-y:auto}" +
      ".ujep-photo{flex:0 0 auto;min-height:0;height:190px}" +
      ".ujep-float{display:none}" +
      ".ujep-body{padding:1.3rem 1.3rem 1.5rem}" +
      ".ujep-body h2{font-size:1.35rem}" +
    "}" +
    "@media(prefers-reduced-motion:reduce){.ujep-back,.ujep-box{animation:none}.ujep-cta,.ujep-cta span{transition:none}}";

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
        '<div class="ujep-photo">' +
          '<div class="ujep-fallback" aria-hidden="true">🎓</div>' +
          '<img src="' + PHOTO + '" alt="Student studying online for a degree" style="object-position:' + PHOTO_POSITION + '" decoding="async">' +
          '<span class="ujep-free">FREE TOOL</span>' +
          '<div class="ujep-float"><i aria-hidden="true">💸</i><div><b>Your EMI, instantly</b><span class="s">Loan range and monthly EMI in under a minute</span></div></div>' +
        '</div>' +
        '<div class="ujep-body">' +
          '<span class="ujep-kick">EDUCATION LOAN CHECK</span>' +
          '<h2 id="ujep-t">Ready to study? <em>Check your loan eligibility</em></h2>' +
          '<p>Find out how much education loan you may get for your online degree, and what your monthly EMI could be.</p>' +
          '<ul class="ujep-list"><li>No PAN or Aadhaar needed</li><li>0% interest EMI option included</li><li>Result in about a minute</li></ul>' +
          '<a class="ujep-cta" href="' + TARGET_URL + '">Check My Eligibility <span aria-hidden="true">&rarr;</span></a>' +
          '<button type="button" class="ujep-later">Maybe later</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(back);

    // If the photo cannot load, fall back to the gradient with a graduation cap
    var img = back.querySelector(".ujep-photo img");
    img.addEventListener("error", function () {
      img.style.display = "none";
      back.querySelector(".ujep-fallback").style.display = "flex";
    });

    back.querySelector(".ujep-x").addEventListener("click", function () { close(COOLDOWN_HOURS); });
    back.querySelector(".ujep-later").addEventListener("click", function () { close(COOLDOWN_HOURS); });
    back.querySelector(".ujep-cta").addEventListener("click", function () { snooze(CLICKED_COOLDOWN_HOURS); });
    back.addEventListener("click", function (e) { if (e.target === back) close(COOLDOWN_HOURS); });
    document.addEventListener("keydown", onKey, true);
    back.querySelector(".ujep-cta").focus();
  }

  function start() {
    // Start downloading the photo a little before the popup appears, so it shows fully loaded
    setTimeout(function () { var im = new Image(); im.src = PHOTO; }, Math.max(0, DELAY_MS - 2500));
    setTimeout(show, DELAY_MS);
  }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
})();
