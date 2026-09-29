/* UniversityJano – global compare tray + picker popup. Load on EVERY page (before </body>). */
(function () {
  if (window.UJCompare) return;
  var KEY = 'uj_compare', MAX = 4;

  function data() { return window.UNIVERSITIES_DATA || []; }
  function nm(u) { return u.name || u.title || String(u.id); }
  function get() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function set(a) {
    try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {}
    draw();
    window.dispatchEvent(new CustomEvent('uj-compare-change'));
  }
  function has(id) { return get().some(function (x) { return String(x.id) === String(id); }); }
  function add(id, name) {
    var a = get();
    if (has(id)) { draw(true); return; }
    if (a.length >= MAX) { alert('Maximum ' + MAX + ' universities compare kar sakte ho. Pehle ek hata do.'); return; }
    if (!name) { var u = data().filter(function (x) { return String(x.id) === String(id); })[0]; name = u ? nm(u) : String(id); }
    a.push({ id: id, name: name });
    set(a);
    draw(true);
  }
  function remove(id) { set(get().filter(function (x) { return String(x.id) !== String(id); })); }
  function clear() { set([]); }

  var css = document.createElement('style');
  css.textContent =
    '.ujc-tray{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9998;width:min(760px,calc(100% - 24px));background:#0f1f4d;color:#fff;border-radius:14px;padding:12px 14px;display:none;gap:10px;align-items:center;box-shadow:0 10px 30px rgba(15,31,77,.35);font-family:inherit}' +
    '.ujc-tray.on{display:flex}.ujc-chips{display:flex;gap:8px;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none}' +
    '.ujc-chip{display:flex;align-items:center;gap:6px;max-width:190px;min-width:0;background:rgba(255,255,255,.12);border-radius:999px;padding:6px 8px 6px 12px;font-size:.82rem;font-weight:600}' +
    '.ujc-chip span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}' +
    '.ujc-chip button{all:unset;cursor:pointer;font-size:1rem;line-height:1;padding:0 4px;opacity:.8}' +
    '.ujc-btn{all:unset;cursor:pointer;flex-shrink:0;background:#f97316;color:#fff;font-weight:700;font-size:.85rem;padding:10px 16px;border-radius:10px;text-align:center}' +
    '.ujc-x{all:unset;cursor:pointer;flex-shrink:0;font-size:.78rem;opacity:.75;padding:4px}' +
    '.ujc-ov{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9999;display:none;align-items:center;justify-content:center;padding:16px}.ujc-ov.on{display:flex}' +
    '.ujc-box{background:#fff;color:#0f172a;border-radius:16px;width:min(520px,100%);max-height:80vh;display:flex;flex-direction:column;overflow:hidden}' +
    '.ujc-hd{display:flex;justify-content:space-between;align-items:center;padding:16px 18px 8px;font-weight:800;font-size:1.05rem}' +
    '.ujc-hd button{all:unset;cursor:pointer;font-size:1.4rem;line-height:1;padding:0 4px}' +
    '.ujc-q{margin:6px 18px 10px;padding:10px 12px;border:1px solid #cbd5e1;border-radius:10px;font-size:.95rem}' +
    '.ujc-list{overflow-y:auto;padding:0 10px 12px}' +
    '.ujc-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px;border-radius:10px;cursor:pointer;min-width:0}' +
    '.ujc-row:hover{background:#f1f5f9}.ujc-row b{font-size:.92rem;overflow-wrap:anywhere;min-width:0}' +
    '.ujc-row i{font-style:normal;font-size:.78rem;font-weight:700;flex-shrink:0;color:#f97316}.ujc-row.sel i{color:#059669}' +
    '@media(max-width:560px){.ujc-tray{flex-wrap:wrap}.ujc-btn{flex:1}}';
  document.head.appendChild(css);

  var tray = document.createElement('div'); tray.className = 'ujc-tray';
  var ov = document.createElement('div'); ov.className = 'ujc-ov';
  ov.innerHTML = '<div class="ujc-box"><div class="ujc-hd">Compare ke liye university choose karo<button aria-label="Close">×</button></div><input class="ujc-q" placeholder="University ka naam search karo"><div class="ujc-list"></div></div>';
  function mount() { document.body.appendChild(tray); document.body.appendChild(ov); draw(); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  var onCompare = /compare(\.html)?\/?$/.test(location.pathname);

  function draw(pop) {
    var a = get();
    if (!a.length || (onCompare && !pop)) { tray.classList.remove('on'); return; }
    if (onCompare) { tray.classList.remove('on'); return; }
    tray.innerHTML = '<div class="ujc-chips">' + a.map(function (x) {
      return '<div class="ujc-chip"><span>' + String(x.name).replace(/</g, '&lt;') + '</span><button data-rm="' + x.id + '" aria-label="Hatao">×</button></div>';
    }).join('') + '</div><a class="ujc-btn" href="/compare.html">Compare karo (' + a.length + ')</a><button class="ujc-x" data-clear="1">Clear</button>';
    tray.classList.add('on');
  }

  function drawList() {
    var q = ov.querySelector('.ujc-q').value.toLowerCase();
    ov.querySelector('.ujc-list').innerHTML = data().filter(function (u) { return nm(u).toLowerCase().indexOf(q) > -1; }).map(function (u) {
      var s = has(u.id);
      return '<div class="ujc-row' + (s ? ' sel' : '') + '" data-pick="' + u.id + '"><b>' + nm(u).replace(/</g, '&lt;') + '</b><i>' + (s ? '✓ Added' : '+ Add') + '</i></div>';
    }).join('') || '<p style="padding:14px;font-size:.9rem">Koi university nahi mili.</p>';
  }
  function openPicker() { ov.classList.add('on'); ov.querySelector('.ujc-q').value = ''; drawList(); ov.querySelector('.ujc-q').focus(); }
  function closePicker() { ov.classList.remove('on'); }

  document.addEventListener('click', function (e) {
    var t = e.target, el;
    if ((el = t.closest('[data-compare-id]'))) { e.preventDefault(); add(el.getAttribute('data-compare-id'), el.getAttribute('data-compare-name')); return; }
    if ((el = t.closest('[data-compare-open]'))) { e.preventDefault(); openPicker(); return; }
    if ((el = t.closest('[data-rm]'))) { remove(el.getAttribute('data-rm')); return; }
    if (t.closest('[data-clear]')) { clear(); return; }
    if ((el = t.closest('[data-pick]'))) {
      var id = el.getAttribute('data-pick');
      if (has(id)) remove(id); else add(id);
      drawList(); return;
    }
    if (t === ov || t.closest('.ujc-hd button')) closePicker();
  });
  document.addEventListener('input', function (e) { if (e.target.classList && e.target.classList.contains('ujc-q')) drawList(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePicker(); });

  window.UJCompare = { get: get, add: add, remove: remove, clear: clear, has: has, openPicker: openPicker, MAX: MAX };
})();
