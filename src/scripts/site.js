/* Весь интерактив сайта — один маленький ванильный скрипт (~5 КБ).
   Никаких фреймворков: страница уже собрана в HTML на этапе сборки. */

/* ── Шапка: подъём при скролле + мобильное меню ── */
const header = document.getElementById('site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-lifted', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.hidden;
    mobileMenu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); }
  });
}

/* ── Появление при скролле (.l-rise) ── */
(() => {
  let pending = Array.prototype.slice.call(document.querySelectorAll('.l-rise'));
  if (!pending.length) return;
  const show = (el) => el.classList.add('is-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting || e.boundingClientRect.bottom < 0) { show(e.target); io.unobserve(e.target); }
    });
  }, { rootMargin: '-8% 0px -12% 0px' });
  pending.forEach((el) => io.observe(el));
  let raf = 0;
  const sweep = () => {
    raf = 0;
    const limit = window.innerHeight * 0.94;
    const rest = [];
    for (const el of pending) {
      if (el.classList.contains('is-in')) continue;
      if (el.getBoundingClientRect().top < limit) { show(el); io.unobserve(el); } else rest.push(el);
    }
    pending = rest;
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(sweep); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();

/* ── Блик и наклон — только у панели под курсором ── */
(() => {
  if (!window.matchMedia('(hover:hover)').matches) return;
  let cur = null, raf = 0, pt = null;
  const clear = () => {
    if (!cur) return;
    cur.classList.remove('is-lit');
    cur.style.removeProperty('--rx');
    cur.style.removeProperty('--ry');
    cur = null;
  };
  const apply = () => {
    raf = 0;
    if (!pt) return;
    const el = document.elementFromPoint(pt.x, pt.y);
    const panel = el && el.closest ? el.closest('.l-glass') : null;
    if (panel !== cur) { clear(); cur = panel; if (cur) cur.classList.add('is-lit'); }
    if (!cur) return;
    const r = cur.getBoundingClientRect();
    const x = ((pt.x - r.left) / r.width) * 100;
    const y = ((pt.y - r.top) / r.height) * 100;
    cur.style.setProperty('--mx', x.toFixed(1) + '%');
    cur.style.setProperty('--my', y.toFixed(1) + '%');
    if (cur.classList.contains('l-tilt')) {
      cur.style.setProperty('--ry', (((x - 50) / 50) * 2.6).toFixed(2) + 'deg');
      cur.style.setProperty('--rx', (-((y - 50) / 50) * 2.2).toFixed(2) + 'deg');
    }
  };
  window.addEventListener('pointermove', (e) => {
    pt = { x: e.clientX, y: e.clientY };
    if (!raf) raf = requestAnimationFrame(apply);
  }, { passive: true });
  window.addEventListener('pointerleave', () => { pt = null; clear(); });
})();

/* ── Параллакс плиток героя ── */
(() => {
  const tiles = document.querySelectorAll('[data-par]');
  if (!tiles.length || !window.matchMedia('(hover:hover)').matches) return;
  const wrap = document.getElementById('top');
  if (!wrap) return;
  let raf = 0, ev = null;
  const apply = () => {
    raf = 0;
    const r = wrap.getBoundingClientRect();
    const x = (ev.clientX - r.left - r.width / 2) / r.width;
    const y = (ev.clientY - r.top - r.height / 2) / r.height;
    tiles.forEach((t) => {
      const k = parseFloat(t.dataset.par);
      t.style.transform = `translate3d(${x * k}px, ${y * k}px, 0)`;
    });
  };
  window.addEventListener('pointermove', (e) => { ev = e; if (!raf) raf = requestAnimationFrame(apply); }, { passive: true });
})();

/* ── Счётчики ── */
document.querySelectorAll('[data-count]').forEach((el) => {
  const to = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1400);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, { threshold: 0.4 });
  io.observe(el);
});

/* ── Рельс разделов ── */
(() => {
  const rail = document.querySelector('.l-rail');
  if (!rail) return;
  const links = Array.prototype.slice.call(rail.querySelectorAll('a[data-rail]'));
  const onScroll = () => {
    let cur = links[0];
    links.forEach((a) => {
      const el = document.getElementById(a.dataset.rail);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.42) cur = a;
    });
    links.forEach((a) => a.setAttribute('aria-current', a === cur ? 'true' : 'false'));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Аккордеоны: .l-acc c кнопкой [data-acc]; в группе открыт один ── */
document.querySelectorAll('[data-acc]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.l-acc');
    const group = btn.dataset.acc;
    const wasOpen = item.classList.contains('is-open');
    if (group) {
      document.querySelectorAll(`[data-acc="${group}"]`).forEach((b) => b.closest('.l-acc').classList.remove('is-open'));
    }
    item.classList.toggle('is-open', !wasOpen);
  });
});

/* ── Карточки-перевёртыши ── */
document.querySelectorAll('.l-flip').forEach((card) => {
  card.addEventListener('click', () => {
    card.dataset.flipped = card.dataset.flipped === 'true' ? 'false' : 'true';
  });
});

/* ── Лайтбокс галереи выступлений ── */
(() => {
  const box = document.getElementById('lightbox');
  if (!box) return;
  const img = box.querySelector('img');
  const close = () => { box.hidden = true; img.src = ''; };
  document.querySelectorAll('[data-full]').forEach((b) => {
    b.addEventListener('click', () => { img.src = b.dataset.full; box.hidden = false; });
  });
  box.addEventListener('click', (e) => { if (!e.target.closest('.l-lightbox__frame') || e.target.closest('.l-lightbox__close')) close(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !box.hidden) close(); });
})();

/* ── Отзывы: показать ещё. Скрытые появляются отдельным блоком ниже,
   первые семь остаются на своих местах ── */
(() => {
  const btn = document.getElementById('reviews-more');
  const extra = document.getElementById('reviews-extra');
  if (!btn || !extra) return;
  btn.addEventListener('click', () => {
    extra.hidden = false;
    btn.closest('div').hidden = true;
  });
})();

/* ── Видеоотзыв: подгрузка iframe по клику ── */
document.querySelectorAll('[data-video]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const stage = btn.closest('.l-vstage');
    const f = document.createElement('iframe');
    f.src = 'https://kinescope.io/embed/' + btn.dataset.video + '?autoplay=1';
    f.title = btn.getAttribute('aria-label') || 'Видеоотзыв';
    f.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media;';
    f.allowFullscreen = true;
    f.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
    stage.innerHTML = '';
    stage.appendChild(f);
  });
});

/* ── Тост ── */
let toastTimer = 0;
function showToast(title, desc) {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-desc').textContent = desc;
  stack.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { stack.hidden = true; }, 4500);
}
const toastClose = document.getElementById('toast-close');
if (toastClose) toastClose.addEventListener('click', () => { document.getElementById('toast-stack').hidden = true; });

/* ── Форма записи: согласия + отправка ── */
(() => {
  const form = document.getElementById('lead-form');
  if (!form) return;
  const submit = document.getElementById('lead-submit');
  const boxes = form.querySelectorAll('.l-consents input[type="checkbox"]');
  const update = () => { submit.disabled = !Array.prototype.every.call(boxes, (b) => b.checked); };
  boxes.forEach((b) => b.addEventListener('change', update));
  update();
  submit.addEventListener('click', () => {
    form.hidden = true;
    document.getElementById('lead-sent').hidden = false;
    showToast('Запись отправлена', 'Письмо придёт в течение пары минут.');
  });
})();

/* ── Кнопки оплаты на странице курсов ── */
document.querySelectorAll('[data-pay]').forEach((b) => {
  b.addEventListener('click', () => showToast('Оплата', 'Здесь подключится приём платежа — доступ придёт сразу после оплаты.'));
});

/* ── Уведомление о cookies ── */
(() => {
  const bar = document.getElementById('cookie-bar');
  if (!bar) return;
  const KEY = 'shbshv-cookies-ok';
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  let taken = false;
  const reveal = () => { if (taken) return; taken = true; bar.hidden = false; window.removeEventListener('scroll', onScroll); };
  const onScroll = () => { if (window.scrollY > 260) reveal(); };
  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(reveal, 4200);
  bar.querySelectorAll('[data-cookie-ok]').forEach((b) => b.addEventListener('click', () => {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
    bar.hidden = true;
  }));
})();
