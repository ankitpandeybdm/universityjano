/* UniversityJano design kit: scroll reveal + count-up. Add class ujk-reveal / data-count. */
(function(){if(window.__ujk)return;window.__ujk=1;var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;d.documentElement.classList.add('ujk-js');
if(!d.querySelector('.uj-rv'))[].forEach.call(d.querySelectorAll('main h2, .pg-sec, .qa, .card, .uni-card, .ud-c, details, .cmp-steps li, .ujk-card'),function(e){if(!e.closest('.ujk-hero')&&!e.classList.contains('ujk-reveal')){e.classList.add('ujk-reveal','ujk-auto')}});
var hh=d.querySelector('.pg-hero,.u-hero');if(hh){var p=location.pathname,cn=getComputedStyle(hh,'::before').content;hh.classList.add('ujk-h');if(cn==='none'||cn==='normal')hh.classList.add('ujk-glow');var sp=d.createElement('span');sp.className='ujk-heroart '+(p.indexOf('/vs/')>-1?'ujk-art-compare':'ujk-art-campus');sp.setAttribute('aria-hidden','true');hh.appendChild(sp)}
var els=[].slice.call(d.querySelectorAll('.ujk-reveal'));
if(!('IntersectionObserver' in window)||rm){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
[].forEach.call(d.querySelectorAll('[data-count]'),function(e){var t=+e.dataset.count;if(rm||!('IntersectionObserver' in window))return;e.textContent='0';
var s=null;function f(ts){s=s||ts;var p=Math.min((ts-s)/1200,1);e.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}
var o=new IntersectionObserver(function(en){if(en[0].isIntersecting){requestAnimationFrame(f);o.disconnect()}});o.observe(e)})})();
