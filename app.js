/* Сайт Юлии Шабашовой — секции страниц. Собрано из исходников дизайн-системы. */

;(function(){
/* Фон — не градиент, а преломление: поле складывается в тонкие каустические нити,
   как свет, прошедший сквозь грань льда. Нити считаются с высокой степенью (узкие и
   яркие), у каждой — хроматическая кайма: красный и синий каналы берутся со сдвигом
   фазы, отсюда дисперсия по краю блика. Считается на буфере 256×160 и растягивается. */
const RAMP = [
  [0.00, 252, 254, 255],
  [0.10, 236, 247, 252],
  [0.22, 210, 233, 245],
  [0.34, 183, 214, 234],
  [0.46, 162, 194, 221],
  [0.58, 158, 178, 210],
  [0.70, 178, 180, 212],
  [0.82, 205, 192, 210],
  [0.92, 229, 208, 205],
  [1.00, 250, 240, 232],
];

function ramp(v) {
  if (v <= 0) return RAMP[0];
  if (v >= 1) return RAMP[RAMP.length - 1];
  for (let i = 1; i < RAMP.length; i++) {
    if (v <= RAMP[i][0]) {
      const a = RAMP[i - 1], b = RAMP[i];
      const k = (v - a[0]) / (b[0] - a[0]);
      return [a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k, a[3] + (b[3] - a[3]) * k];
    }
  }
  return RAMP[RAMP.length - 1];
}

function Atmosphere() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const W = 256, H = 160;
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d', { alpha: false });
    const img = ctx.createImageData(W, H);
    const d = img.data;
    const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = (t) => {
      let p = 0;
      for (let j = 0; j < H; j++) {
        const y = j / H;
        for (let i = 0; i < W; i++) {
          const x = i / W;
          /* поле: наложение волн + радиальная — даёт медленное перетекание без швов */
          let f = Math.sin(x * 2.4 + t) * 0.46
                + Math.sin(y * 1.9 - t * 0.72) * 0.36
                + Math.sin((x + y * 0.8) * 2.1 + t * 0.46) * 0.40
                + Math.sin(Math.sqrt((x - 0.22) * (x - 0.22) + (y - 0.84) * (y - 0.84)) * 4.6 - t * 0.86) * 0.34
                /* вторая октава — облачность, а не одна большая волна */
                + Math.sin(x * 6.1 - y * 4.7 + t * 1.3) * 0.15
                + Math.sin((x * 4.3 + y * 5.6) - t * 1.05) * 0.13;
          f = f / 1.84;
          /* холодная нота вверху, тёплая роза внизу */
          let v = 0.5 + 0.5 * f;
          v = v * 0.74 + y * 0.30 - 0.06;
          const c = ramp(v < 0 ? 0 : v > 1 ? 1 : v);
          /* каустика: поле сворачивается в полосы, высокая степень оставляет
             от полосы только тонкую яркую нить — так выглядит свет в грани */
          const ph = f * 4.6 + t * 0.3;
          /* Глянец мягкий: широкий влажный подъём света без яркого ребра.
             Низкая степень — свет наливается в поле, а не режет его полосой. */
          const k0 = 1 - Math.abs(Math.sin(ph));
          const q = k0 * k0;
          const gloss = q * 15;
          /* дисперсия остаётся, но еле слышной каймой */
          const kr = 1 - Math.abs(Math.sin(ph + 0.1));
          const kb = 1 - Math.abs(Math.sin(ph - 0.1));
          const fr = kr * kr * 9;
          const fb = kb * kb * 9;
          /* золотой кант — тёплая нота напротив блика */
          const gl = Math.abs(f + 0.52);
          const gd = gl < 0.3 ? 1 - gl / 0.3 : 0;
          const gold = gd * gd * gd * 0.9;
          d[p++] = Math.min(255, c[0] + gloss + fr + gold * 30);
          d[p++] = Math.min(255, c[1] + gloss + gold * 15);
          d[p++] = Math.min(255, c[2] + gloss + fb - gold * 8);
          d[p++] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    if (still) { draw(0); return; }

    let raf = 0, last = 0, t0 = performance.now();
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 42) return;           /* ~24 к/с: течёт, но не греет машину */
      last = now;
      if (document.hidden) return;
      draw((now - t0) / 3600);               /* нити текут заметно, но спокойно */
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (<>
    <div className="l-bg" />
    <canvas ref={ref} className="l-bg-canvas" aria-hidden="true" />
    <div className="l-bg-caustic" />
    <div className="l-bg-veil" />
  </>);
}

/* Появление при скролле. Наблюдатель даёт мягкий стагger, а проход по скроллу
   добирает всё, что вьюпорт перепрыгнул (IO не присылает событие, если состояние
   элемента не менялось). */
function useReveal() {
  React.useEffect(() => {
    let pending = Array.prototype.slice.call(document.querySelectorAll('.l-rise'));
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
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/* Блик и наклон — только у панели под курсором. Глобальный обход всех .l-glass
   каждый кадр вешал рендерер, поэтому здесь строго одна панель за раз. */
function useTactile() {
  React.useEffect(() => {
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
    const onMove = (e) => { pt = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(apply); };
    const onLeave = () => { pt = null; clear(); };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
      clear();
    };
  }, []);
}

/* Счётчик, оживающий при появлении */
function Counter({ to, suffix = '', duration = 1400 }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let done = false;
    const finish = () => { if (done) return; done = true; setN(to); };
    if (el.getBoundingClientRect().bottom < 0) { finish(); return; }
    /* IO не присылает событие, если элемент так и не стал видимым (прыжок по странице) */
    let raf = 0;
    const check = () => {
      raf = 0;
      if (done) return;
      if (el.getBoundingClientRect().bottom < 0) { finish(); window.removeEventListener('scroll', onScroll); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting && e.boundingClientRect.bottom > 0) return;
      io.disconnect();
      if (!e.isIntersecting) { finish(); return; }
      done = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: .4 });
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* Рельс разделов справа — как в референсе */
const RAIL = [['top', 'Начало'], ['audience', 'Для кого'], ['about', 'Обо мне'], ['results', 'Результаты'], ['offer', 'Обучение'], ['cases', 'Кейсы'], ['reviews', 'Отзывы'], ['lead', 'Бесплатно'], ['faq', 'Вопросы']];

function Rail({ onNav }) {
  const [active, setActive] = React.useState('top');
  React.useEffect(() => {
    const onScroll = () => {
      let cur = 'top';
      RAIL.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.42) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className="l-rail l-glass l-glass--blur" aria-label="Разделы">
      {RAIL.map(([id, label]) => (
        <button key={id} onClick={() => onNav(id)} aria-current={active === id} title={label}>
          <span className="dot" /><span className="lbl">{label}</span>
        </button>
      ))}
    </nav>
  );
}

Object.assign(window, { Atmosphere, useReveal, useTactile, Counter, Rail });

Object.assign(window, {ramp, Atmosphere, useReveal, useTactile, Counter, Rail});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

function LandingHeader({ onNav, onLead }) {
  const { Button, IconButton, FacetMark } = DS();
  const nav = [['audience', 'Для кого'], ['about', 'Обо мне'], ['offer', 'Обучение'], ['cases', 'Кейсы'], ['faq', 'Вопросы']];
  const isLink = (id) => id.indexOf('.html') !== -1;
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [menu, setMenu] = React.useState(false);
  const [lifted, setLifted] = React.useState(false);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth);
    const s = () => setLifted(window.scrollY > 24);
    window.addEventListener('resize', r); window.addEventListener('scroll', s, { passive: true });
    return () => { window.removeEventListener('resize', r); window.removeEventListener('scroll', s); };
  }, []);
  const compact = w < 1040;
  React.useEffect(() => { if (!compact) setMenu(false); }, [compact]);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: lifted ? '12px 0' : '20px 0', transition: 'padding .5s var(--ease-standard)' }}>
      <div className="l-shell">
        <div className="l-glass l-glass--blur" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,34px)', height: 64, padding: '0 14px 0 22px' }}>
          <button onClick={() => onNav('top')} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', flex: '0 0 auto' }}>
            <span className="l-display" style={{ fontSize: 20, letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>Юлия Шабашова</span>
          </button>
          {compact ? <span style={{ marginRight: 'auto' }} /> : (
            <nav style={{ display: 'flex', gap: 'clamp(14px,2vw,26px)', marginRight: 'auto', minWidth: 0 }}>
              {nav.map(([id, label]) => isLink(id) ? (
                <a key={id} href={id} style={{ padding: '6px 0', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{label}</a>
              ) : (
                <button key={id} onClick={() => onNav(id)} style={{ border: 0, background: 'none', padding: '6px 0', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{label}</button>
              ))}
            </nav>
          )}
          {w < 720 ? null : <Button variant="ghost" size="sm" href="kursy.html" style={{ flex: '0 0 auto' }}>Курсы от 990 ₽</Button>}
          <Button size="sm" onClick={onLead} style={{ flex: '0 0 auto', borderRadius: 999 }} iconRight={<FacetMark name="arrow" size={15} tone="current" />}>{compact ? 'Выступление' : 'Смотреть выступление'}</Button>
          {compact ? (
            <IconButton label="Разделы" variant="ghost" size="sm" round aria-expanded={menu} onClick={() => setMenu((v) => !v)} style={{ flex: '0 0 auto' }}>
              <FacetMark name={menu ? 'close' : 'menu'} size={17} tone="ink" />
            </IconButton>
          ) : null}
        </div>
        {compact && menu ? (
          <div className="l-glass l-glass--blur" style={{ marginTop: 8, padding: '8px 22px 14px' }}>
            {[...nav, ['reviews', 'Отзывы'], ['kursy.html', 'Курсы'], ['lead', 'Бесплатно']].map(([id, label]) => isLink(id) ? (
              <a key={id} href={id} style={{ display: 'block', borderBottom: '1px solid rgba(77,14,18,.08)', padding: '15px 0', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500, color: 'var(--text-body)' }}>{label}</a>
            ) : (
              <button key={id} onClick={() => { setMenu(false); onNav(id); }}
                style={{ display: 'block', width: '100%', border: 0, borderBottom: '1px solid rgba(77,14,18,.08)', background: 'none', padding: '15px 0', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500, color: 'var(--ink-900)' }}>{label}</button>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}

/* Уведомление о cookies — требование 152-ФЗ: сообщить, дать ссылку и получить согласие. */
function CookieBar() {
  const KEY = 'shbshv-cookies-ok';
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    let taken = false;
    try { if (localStorage.getItem(KEY)) return; } catch (e) {}
    const reveal = () => { if (taken) return; taken = true; setShow(true); window.removeEventListener('scroll', onScroll); };
    const onScroll = () => { if (window.scrollY > 260) reveal(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(reveal, 4200);
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); };
  }, []);
  const accept = () => {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="l-cookies" role="region" aria-label="Уведомление о файлах cookie">
      <p>
        Сайт использует файлы cookie и обрабатывает данные о посещении — это нужно, чтобы страницы
        работали корректно. Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
        <a href="privacy.html">политикой конфиденциальности</a>.
      </p>
      <button type="button" className="l-cookies__ok" onClick={accept}>Хорошо</button>
      <button type="button" className="l-cookies__x" onClick={accept} aria-label="Закрыть">×</button>
    </div>
  );
}

function LandingFooter() {
  const S = 'assets/icons/social/';
  const nav = [
    ['index.html#audience', 'Для кого'],
    ['index.html#about', 'Обо мне'],
    ['index.html#offer', 'Как работать'],
    ['kursy.html', 'Курсы'],
    ['cases.html', 'Кейсы'],
    ['index.html#reviews', 'Отзывы'],
    ['index.html#faq', 'Вопросы'],
  ];
  const contacts = [
    ['telegram.svg', 'Telegram', '@shbshv_support_bot', 'https://t.me/shbshv_support_bot'],
    ['vk.svg', 'ВКонтакте', 'Юлия Шабашова', 'https://vk.com/'],
    ['mail.svg', 'Почта', 'yulia@shabashova.ru', 'mailto:yulia@shabashova.ru'],
  ];
  return (
    <footer style={{ marginTop: 'clamp(80px,10vw,140px)', padding: '0 0 24px' }}>
      <div className="l-shell">
        <div className="l-glass l-glass--ink l-glass--sheen" style={{ padding: 'clamp(32px,4vw,56px)' }}>
          <div className="l-foot">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span className="l-display" style={{ fontSize: 'clamp(28px,3vw,40px)', color: 'var(--paper-1)' }}>Юлия Шабашова</span>
              <p className="l-body" style={{ color: 'var(--text-inverse-muted)', maxWidth: '32ch' }}>
                Учу бизнес и экспертов работать с ИИ спокойно. Перевожу с технического на человеческий.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6 }}>
                <span className="l-tag" style={{ color: 'var(--text-inverse-muted)' }}>ИП Шабашова Юлия Валентиновна</span>
                <div className="l-docs">
                  <a href="oferta.html">Договор оферты</a>
                  <a href="privacy.html">Политика конфиденциальности</a>
                  <a href="soglasie.html">Согласие на обработку данных</a>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="l-tag" style={{ color: 'var(--gold-light)' }}>Разделы</span>
              <nav className="l-footnav" aria-label="Разделы сайта">
                {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
              </nav>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="l-tag" style={{ color: 'var(--gold-light)' }}>Контакты</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {contacts.map(([icon, name, value, href]) => (
                  <a key={name} href={href} className="l-contact">
                    <span className="l-contact__ic"><img src={S + icon} alt="" /></span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
                      <span className="l-tag" style={{ color: 'var(--gold-light)', fontSize: 10 }}>{name}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.4, color: 'var(--text-inverse-muted)' }}>{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CookieBar />
    </footer>
  );
}

Object.assign(window, { LandingHeader, LandingFooter, CookieBar });

Object.assign(window, {LandingHeader, CookieBar, LandingFooter});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

function HeroSection({ onLead, onNav }) {
  const { Button, FacetMark } = DS();
  const wrap = React.useRef(null);
  const [p, setP] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const onMove = (e) => {
      const r = wrap.current && wrap.current.getBoundingClientRect(); if (!r) return;
      setP({ x: (e.clientX - r.left - r.width / 2) / r.width, y: (e.clientY - r.top - r.height / 2) / r.height });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  const par = (k) => ({ transform: `translate3d(${p.x * k}px, ${p.y * k}px, 0)` });

  return (
    <section id="top" ref={wrap} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 120, paddingBottom: 40 }}>
      <div className="l-shell" style={{ width: '100%' }}>
        <div className="l-split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span className="l-tag l-rise">Обучение работе с ИИ · в IT с 2012 года</span>
            <h1 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(44px,6.2vw,92px)' }}>
              Учу бизнес<br />и экспертов<br />работать с ИИ <span className="l-italic">спокойно</span>
            </h1>
            <p className="l-lead l-rise" data-d="2" style={{ maxWidth: '42ch' }}>
              С нуля, по шагам, без гонки за новинками.
            </p>
            <div className="l-rise" data-d="3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button size="lg" onClick={onLead} style={{ borderRadius: 999 }} iconRight={<FacetMark name="arrow" size={16} tone="current" />}>Смотреть выступление</Button>
              <Button size="lg" variant="secondary" href="kursy.html">Курсы от 990 ₽</Button>
            </div>

            <div className="l-glass l-glass--blur l-rise" data-d="4" style={{ marginTop: 10, padding: '22px 26px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 22, borderRadius: 22 }}>
              {[['обучила', <><Counter to={250} suffix="+" /> человек</>, 30], ['в IT с', '2012 года', 30], ['выступала для', 'ЯрТПП · Дизайн-выходные', 22]].map(([small, big, fs], i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span className="l-tag">{small}</span>
                  <span className="l-display" style={{ fontSize: fs, lineHeight: 1.12 }}>{big}</span>
                </div>
              ))}
            </div>

            <div className="l-scrollcue l-rise" data-d="4" style={{ marginTop: 6 }}>
              <i />
            </div>
          </div>

          {/* Плавающие стеклянные плитки — материал, а не декор */}
          <div className="l-stack l-rise" data-d="2">
            <div className="l-stack__tile l-float" style={{ inset: '0% 32% 14% 0%', ...par(14) }}>
              <img src="assets/people/yulia-hero-v5.jpg" alt="Юлия Шабашова" />
            </div>
            <div className="l-stack__tile l-float l-float--b" style={{ inset: '48% 0% 4% 52%', ...par(-22) }}>
              <img src="assets/imagery/prism-crystal.png" alt="Призма в потоке света" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { HeroSection });

Object.assign(window, {HeroSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const CASES = [
  ['Вы руководите и видите, что команда тратит часы на то, что ИИ делает за минуты.'],
  ['Вы эксперт, и на вас висит весь контент, тексты и упаковка, а времени на это нет.'],
  ['Вы пробовали нейросети, получили в ответ ерунду и решили, что это не для вас.'],
  ['Вы думаете, что не разберётесь, потому что вы не технарь. Разберётесь.'],
];

function AudienceSection() {
  const { FacetMark } = DS();
  const [open, setOpen] = React.useState(false);
  return (
    <section id="audience" className="l-section">
      <div className="l-shell">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 640 }}>
          <h2 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(32px,4.4vw,60px)' }}>
            Если это про вас — вы по адресу
          </h2>
        </div>
        <div className="l-grid-2" style={{ marginTop: 'clamp(32px,4vw,56px)' }}>
          {CASES.map(([t], i) => (
            <div key={i} className="l-glass l-tilt l-rise" data-d={String((i % 2) + 1)}
              style={{ padding: 'clamp(26px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span className="l-num">0{i + 1}</span>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px,1.4vw,18px)', lineHeight: 1.55, color: 'var(--text-body)' }}>{t}</p>
            </div>
          ))}
        </div>

        <div className="l-glass l-glass--ink l-glass--keep-ink l-rise" style={{ marginTop: 20, padding: 'clamp(24px,2.4vw,32px)', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between' }}>
            <span className="l-tag" style={{ color: 'var(--gold-light)' }}>Кому я не подхожу</span>
            <FacetMark name={open ? 'minus' : 'plus'} size={20} tone="light" />
          </div>
          <div className={'l-open' + (open ? ' is-open' : '')}>
            <div>
              <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-inverse-muted)', maxWidth: '74ch' }}>
                Крупному бизнесу, которому нужна автоматизация процессов, — это не ко мне. И если компьютер даётся тяжело: для работы с ИИ нужна базовая уверенность — установить программу, зарегистрироваться в сервисе, разобраться с настройками по инструкции.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AudienceSection });

Object.assign(window, {AudienceSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const FACTS = [
  'Предприниматель, в IT с 2012 года',
  'Научила работать с ИИ больше 250 человек',
  'Курировала внедрение CRM, разработку сайтов, SEO',
  'Работала с крупными брендами и медийными персонами',
  'Веду канал «ИИ на спокойном»',
];

const T = 'assets/people/talks/';
/* превью кадрированы 3:2, по клику открывается целый кадр из full/ */
/* Отбор: восемь сильных кадров. Отсеяны тёмные, издалека и с перекрытым кадром
   (09, 13, 12, 16, 10) и второй групповой портрет (08) — дубль к 07. */
const SHOTS = ['talk-05.jpg', 'talk-11.jpg', 'talk-03.jpg', 'talk-17.jpg', 'talk-15.jpg', 'talk-07.jpg', 'talk-02.jpg', 'talk-14.jpg'];

const VENUES = ['Торгово-промышленная палата', 'Менеджер-клуб', 'HR-клуб', 'Дизайн-выходные', 'Ярославский колледж управления', 'Женский синдикат', '«Код легенды»', 'Академия красоты Larey', 'Супертур76', 'Креативный квартал «Фабрика КОРД»'];

function AboutSection() {
  const { FacetMark } = DS();
  const [shot, setShot] = React.useState(null);
  React.useEffect(() => {
    if (!shot) return;
    const esc = (e) => { if (e.key === 'Escape') setShot(null); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [shot]);
  return (
    <section id="about" className="l-section">
      <div className="l-shell">
        <div className="l-split">
          <div className="l-rise" style={{ position: 'relative' }}>
            <div className="l-stack__tile l-float" style={{ position: 'relative', inset: 'auto', aspectRatio: '4/5' }}>
              <img src="assets/people/yulia-suit-v2.jpg" alt="Юлия Шабашова" />
            </div>
          </div>

          <div className="l-glass l-glass--sheen l-rise" data-d="2" style={{ padding: 'clamp(28px,3.2vw,48px)', display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span className="l-tag">Коротко обо мне</span>
            <h2 className="l-display" style={{ fontSize: 'clamp(28px,3.4vw,46px)' }}>
              Перевожу с технического<br />на человеческий
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {FACTS.map((f, i) => (
                <div key={f} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '9px 0' }}>
                  <span style={{ marginTop: 7, flex: '0 0 auto', width: 16, height: 1, background: 'var(--gold-base)' }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{f}</span>
                </div>
              ))}
            </div>
            <p className="l-display" style={{ fontSize: 'clamp(22px,2.2vw,30px)', lineHeight: 1.18, maxWidth: '26ch' }}>
              Суперсила — объяснять <span className="l-italic">сложное просто</span>
            </p>
          </div>
        </div>

        <div className="l-rise" style={{ marginTop: 'clamp(48px,6vw,88px)', display: 'flex', flexDirection: 'column', gap: 'clamp(20px,2.4vw,30px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span className="l-tag">Где меня слушали</span>
          </div>

          <ul className="l-roster">
            {VENUES.map((v) => <li key={v}>{v}</li>)}
          </ul>

          <div className="l-strip">
            <div className="l-strip__track">
              {[...SHOTS, ...SHOTS].map((s, i) => (
                <button key={i} type="button" className="l-frame" onClick={() => setShot(s)} aria-label="Открыть фото">
                  <img src={T + s} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {shot ? (
        <div className="l-lightbox" role="dialog" aria-modal="true" onClick={() => setShot(null)}>
          <figure className="l-lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <img src={T + 'full/' + shot} alt="Фото с выступления" />
            <button type="button" className="l-lightbox__close" onClick={() => setShot(null)} aria-label="Закрыть">
              <FacetMark name="close" size={16} tone="ink" />
            </button>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
Object.assign(window, { AboutSection });

Object.assign(window, {AboutSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const RESULTS = [
  ['Регламент', 'из одного созвона', 'руководитель проекта', 'Расшифровку полуторачасового совещания ИИ собрал в готовый регламент и презентацию к нему. Руководителю осталось причесать.', 'prism'],
  ['Анализ рынка', 'своими силами', 'сфера гостеприимства', 'Цены конкурентов, тренды, позиционирование. То, ради чего обычно зовут подрядчика, теперь собирается самостоятельно и быстро.', 'planes'],
  ['Инструкции для команды', 'за вечер', 'сфера гостеприимства', 'Чек-листы для администраторов на острые ситуации и правила для персонала. То, до чего долго не доходили руки.', 'ray'],
  ['От опаски', 'к работе каждый день', 'была новичком', 'Начинала с нуля и с осторожностью. Теперь общается с ИИ каждый день, а качество запросов выросло в разы.', 'dispersion'],
];

function ResultsSection() {
  const [flipped, setFlipped] = React.useState(-1);
  return (
    <section id="results">
      <div className="l-band">
        <div className="l-shell">
          <p className="l-band__q l-rise">
            ИИ не заменяет вас. Он забирает рутину, а решения <span className="l-italic">остаются вашими</span>
          </p>
        </div>
      </div>

      <div className="l-shell" style={{ paddingTop: 'clamp(72px,9vw,132px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="l-tag l-rise">Что меняется после работы со мной</span>
        </div>

        <div className="l-grid-2" style={{ marginTop: 24 }}>
          {RESULTS.map(([big, small, who, detail], i) => (
            <div key={big} className="l-flip l-rise" data-d={String((i % 2) + 1)} data-flipped={flipped === i ? 'true' : 'false'}
              onClick={() => setFlipped(flipped === i ? -1 : i)} style={{ cursor: 'pointer' }}>
              <div className="l-flip__inner">
                <div className="l-flip__face l-flip__face--front"><div className="l-glass" style={{ height: '100%', padding: 'clamp(26px,2.6vw,36px)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span className="l-num" style={{ marginBottom: 6 }}>0{i + 1}</span>
                  <span className="l-display" style={{ fontSize: 'clamp(24px,2.5vw,34px)', lineHeight: 1.08 }}>{big}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(14px,1.2vw,16px)', color: 'var(--text-secondary)' }}>{small}</span>
                </div></div>
                <div className="l-flip__face l-flip__face--back"><div className="l-glass l-glass--ink" style={{ height: '100%', padding: 'clamp(26px,2.6vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}>
                  <span className="l-tag" style={{ color: 'var(--gold-light)' }}>{who}</span>
                  <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--paper-1)' }}>{detail}</p>
                  <span className="l-tag" style={{ color: 'var(--text-inverse-muted)' }}>{big}</span>
                </div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ResultsSection });

Object.assign(window, {ResultsSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const OFFERS = [
  ['ИИ за неделю', '990 ₽', 'Если начинаете с нуля. Шесть коротких уроков в Telegram.',
   ['Шесть уроков по 10–15 минут', 'Читать и делать можно в транспорте', 'Доступ остаётся навсегда'], 'Подробнее о курсе', 'kursy.html#week', false,
   ['онлайн', 'самостоятельно']],
  ['ИИ для эксперта', '1 900 ₽', 'Если уже работаете с ИИ и хотите упаковать себя и свои продукты. Практикум на вечер.',
   ['Один вечер практики', 'Упаковка себя, продукта и контента', 'Готовые рабочие контуры'], 'Подробнее о курсе', 'kursy.html#expert', false,
   ['онлайн', 'самостоятельно']],
  ['Личная консультация', '15 000 ₽', 'Если у вас свои задачи и типовые советы не подходят. Полтора часа в зуме, разбираем именно вашу работу.',
   ['Полтора часа в зуме', 'Смотрю вашу реальную работу', 'Запись и конспект после встречи'], 'Записаться', '', true,
   ['онлайн', 'офлайн — Ярославль']],
  ['Обучение для команды', 'от 20 000 ₽', 'Когда с ИИ нужно подружить не вас одного, а всю команду. Групповая консультация или мастер-класс.',
   ['Групповая консультация или мастер-класс', 'Программа под ваши процессы', 'Оплата по счёту на ИП'], 'Обсудить', '', false,
   ['онлайн', 'офлайн — Ярославль']],
];

function OfferSection({ onLead }) {
  const { Button, FacetMark } = DS();
  const [open, setOpen] = React.useState(2);
  return (
    <section id="offer" className="l-section">
      <div className="l-shell">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 620 }}>
          <span className="l-tag l-rise">Форматы</span>
          <h2 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(32px,4.4vw,60px)' }}>
            Как со мной работать
          </h2>
          <p className="l-lead l-rise" data-d="2" style={{ maxWidth: '46ch' }}>
            От шести уроков в Telegram до обучения всей команды. Нажмите на формат — раскроется, что внутри.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 'clamp(32px,4vw,56px)' }}>
          {OFFERS.map(([title, price, text, bullets, cta, href, featured, tags], i) => {
            const isOpen = open === i;
            return (
              <div key={title} className={'l-glass l-rise' + (featured ? ' l-glass--gold' : '')} data-d={String((i % 4) + 1)}
                style={{ padding: 0, background: featured ? 'linear-gradient(135deg,rgba(220,234,241,.58),rgba(255,252,244,.42))' : undefined }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ width: '100%', border: 0, background: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(22px,2.4vw,32px)', display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 'clamp(16px,2vw,28px)', alignItems: 'center' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                    <span className="l-display" style={{ fontSize: 'clamp(21px,2.1vw,30px)', lineHeight: 1.1 }}>{title}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>{text}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.03em', lineHeight: 1.4, color: 'var(--text-faint)', marginTop: 2 }}>{tags.join(' · ')}</span>
                  </span>
                  <span className="l-display" style={{ fontSize: 'clamp(18px,1.9vw,26px)', color: 'var(--ink-700)', whiteSpace: 'nowrap' }}>{price}</span>
                  <FacetMark name={isOpen ? 'minus' : 'plus'} size={20} tone="ink" />
                </button>
                <div className={'l-open' + (isOpen ? ' is-open' : '')}>
                  <div>
                    <div style={{ padding: '0 clamp(22px,2.4vw,32px) clamp(24px,2.4vw,32px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: '52ch' }}>
                        {bullets.map((b) => (
                          <span key={b} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                            <span style={{ marginTop: 8, width: 14, height: 1, background: 'var(--gold-base)', flex: '0 0 auto' }} />
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</span>
                          </span>
                        ))}
                      </div>
                      <Button variant={featured ? 'primary' : 'secondary'} href={href || undefined} onClick={href ? undefined : onLead} style={{ borderRadius: 999 }}
                        iconRight={<FacetMark name="arrow" size={15} tone="current" />}>{cta}</Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { OfferSection });

Object.assign(window, {OfferSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

function CasesTeaser() {
  const { Button, FacetMark } = DS();
  return (
    <section id="cases" className="l-section">
      <div className="l-shell">
        <div className="l-glass l-glass--sheen l-rise" style={{ padding: 'clamp(30px,3.6vw,56px)', display: 'grid', gap: 'clamp(24px,3vw,48px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
            <span className="l-tag">Практика</span>
            <h2 className="l-display" style={{ fontSize: 'clamp(28px,3.6vw,48px)', maxWidth: '18ch' }}>
              Не только учу — собираю сама
            </h2>
            <p className="l-body" style={{ color: 'var(--text-secondary)', maxWidth: '54ch' }}>
              Сайты, Telegram-боты, автоматизацию мелкой рутины. Этот сайт тоже собран с ИИ — вы прямо сейчас смотрите пример. Загляните в кейсы: там видно, что можно сделать под вашу задачу.
            </p>
            <Button size="lg" href="cases.html" style={{ alignSelf: 'flex-start', borderRadius: 999 }}
              iconRight={<FacetMark name="arrow" size={16} tone="current" />}>Смотреть кейсы</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { CasesTeaser });

Object.assign(window, {CasesTeaser});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

/* Отзывы и портреты — с yuliashabashova.ru. Тексты дословные, убраны только эмодзи
   (бренд-гайд их не допускает). Портреты — из папки «Отзывы ИИ», лежат в
   assets/people/reviews/. */
const P = 'assets/people/reviews/';
const REVIEWS = [
  ['Торгово-промышленная палата Ярославской области', 'org', 'Вся палата активно обсуждает встречу с Вами! Встряхнули Вы наших сотрудников! Девиз появился: работа теперь без ИИ уже не та и никогда не будет прежней!', '02-tpp.jpg'],
  ['Анастасия', 'person', 'Я уже внедряю в маркетинге, написали текст к подкасту за 3 мин. Сегодня завтра буду заниматься табличками. Он мой лучший друг — благодаря тебе. Спасибо большое.', '06-anastasia.jpg'],
  ['Менеджер-клуб. Объединение руководителей', 'org', 'Я даже не ожидал, что практикум будет настолько информативным.', '05-manager-club.jpg'],
  ['Елена', 'person', '100% пользы, без воды и понятным языком. Я под впечатлением, мне будто открыли двери во что-то новое, красивое, интересное и совершенно не страшно, а интерес зашкаливает.', '08-elena.jpg'],
  ['Ксения', 'person', 'Раньше смотрела на нейрокреаторов и думала: как они это делают? Боялась даже начинать. После курса страх ушёл — я прошла первый порог. Теперь понимаю, с чего стартовать, и появился азарт копать глубже. Главное — получила структуру: что изучать, а на что время не тратить.', '13-ksenia.jpg'],
  ['Юлия', 'person', 'Спасибо за инсайдерскую информацию, которая каждую минуту вызвала ВАУ-эмоции и вопрос «А что так можно было?». Технологии и ИИ, конечно, оооочень упрощают процесс анализа заданной информации и выжимки сути.', '01-yulia.jpg'],
  ['Академия красоты LAREY', 'org', 'Всё очень понравилось! Я рада, что с вами познакомилась и теперь есть такой контакт.', '09-larey.jpg'],
  ['Анастасия', 'person', 'Очень интересно и понятно! Слушала бы бесконечно! Сейчас я каждый день использую нейросети: в ведении соцсетей рабочих, в личных вопросах, в работе с клиентами. Это высвобождает огромное количество времени, плюс помогает делать работу качественней. Спасибо, что подружила меня с нейронками.', '10-anastasia-2.jpg'],
  ['Марина', 'person', 'Я пообщалась и создала мини-продукт и лид-магнит прямо с шагами: рилсы, посты и так далее. Это прямо то, что я не могла сформулировать и подобраться к этой теме. А тут целый контент-план! Я в восторге.', '15-marina.jpg'],
  ['Татьяна', 'person', 'Много полезной и структурированной информации. У меня появилась прекрасная база знаний о ИИ-инструментах и очень много практических возможностей. Отдельно благодарю за информацию про редактирование фото.', '04-tatyana.jpg'],
  ['Дмитрий', 'person', 'Очень благодарен за курс, узнал много полезного и самое главное начал пользоваться ИИ каждый день!', '07-dmitry.jpg'],
  ['Екатерина', 'person', 'Информация в доступном для мозга формате: структурно, объёмно и просто одновременно! У меня теперь есть отличный помощник и для работы, и для познания себя, и для увлечений. Круто!', '11-ekaterina.jpg'],
  ['Ольга', 'person', 'Практикум превосходный. Мне очень понравилось. И я рада, что осуществила задуманное.', '03-olga.jpg'],
  ['Мария', 'person', 'Удивлена новым возможностям использования ИИ на практике!', '12-maria.jpg'],
  ['Ольга', 'person', 'Я в восторге! Море вдохновения и идей!', '14-olga-2.jpg'],
];

const V = 'assets/people/video/';
const VIDEO = { id: 'c7zH1nr5q8fwovUkRQ26Wp', name: 'Радислав Гандапас', role: 'самый известный в России специалист по лидерству', photo: '01-gandapas.jpg' };

function ReviewsSection({ title, lead, orgsFirst }) {
  const { FacetMark, Button } = DS();
  const [playing, setPlaying] = React.useState(false);
  const [all, setAll] = React.useState(false);

  return (
    <section id="reviews" className="l-section">
      <div className="l-shell">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 560 }}>
            <span className="l-tag l-rise">Отзывы</span>
            <h2 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(32px,4.4vw,60px)' }}>{title || <>Что говорят про работу со мной</>}</h2>
          </div>
        </div>

        <div className="l-rise" style={{ marginTop: 'clamp(28px,3.4vw,48px)', display: 'flex', justifyContent: 'center' }}>
          <div className="l-vstage" style={{ maxWidth: 520, width: '100%' }}>
            {playing ? (
              <iframe src={'https://kinescope.io/embed/' + VIDEO.id + '?autoplay=1'}
                title={VIDEO.name} allow="autoplay; fullscreen; picture-in-picture; encrypted-media;" frameBorder="0" allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
            ) : (
              <>
                <img src={V + VIDEO.photo} alt={VIDEO.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(77,14,18,.04) 40%,rgba(77,14,18,.66) 100%)' }} />
                <button onClick={() => setPlaying(true)} aria-label={'Смотреть отзыв: ' + VIDEO.name}
                  style={{ position: 'absolute', inset: 0, border: 0, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, padding: '0 clamp(18px,2vw,28px)' }}>
                  <span className="l-play">
                    <FacetMark name="play" size={25} tone="light" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'left', minWidth: 0 }}>
                    <span className="l-display" style={{ fontSize: 'clamp(19px,1.9vw,26px)', color: 'var(--paper-1)', lineHeight: 1.14 }}>{VIDEO.name}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.4, color: 'rgba(255,248,244,.82)' }}>{VIDEO.role}</span>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="l-cols" style={{ marginTop: 20 }}>
          {(orgsFirst ? [...REVIEWS].sort((a, b) => (a[1] === 'org' ? 0 : 1) - (b[1] === 'org' ? 0 : 1)) : REVIEWS).slice(0, all ? undefined : 7).map(([name, kind, text, photo], i) => (
            <figure key={name + i} className={'l-glass l-quote' + (all ? ' is-in' : ' l-rise')} data-d={String((i % 4) + 1)}
              style={{ padding: 'clamp(24px,2.2vw,32px)', margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <blockquote style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.62, color: 'var(--text-body)' }}>{text}</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 4 }}>
                <span className="l-avatar"><img src={P + photo} alt={name} loading="lazy" onError={(e) => { e.target.parentNode.style.display = 'none'; }} /></span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                  <span className="l-display" style={{ fontSize: 17, lineHeight: 1.2 }}>{name}</span>
                  {kind === 'org' ? <span className="l-tag" style={{ fontSize: 10 }}>организация</span> : null}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {all ? null : (
          <div className="l-rise" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(18px,2vw,28px)' }}>
            <Button variant="secondary" size="lg" onClick={() => setAll(true)} style={{ borderRadius: 999 }}
              iconRight={<FacetMark name="plus" size={15} tone="current" />}>{`Показать ещё ${REVIEWS.length - 7} отзывов`}</Button>
          </div>
        )}

      </div>
    </section>
  );
}
Object.assign(window, { ReviewsSection });

Object.assign(window, {ReviewsSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const LdB = 'assets/icons';

/* Три согласия по 152-ФЗ: по умолчанию отжаты, кнопка недоступна, пока не отмечены все. */
const CONSENTS = [
  ['oferta', <>Принимаю <a href="oferta.html" target="_blank" rel="noopener">условия оферты</a></>],
  ['pdn', <>Даю согласие на <a href="soglasie.html" target="_blank" rel="noopener">обработку персональных данных</a></>],
  ['privacy', <>Согласна с <a href="privacy.html" target="_blank" rel="noopener">политикой конфиденциальности</a></>],
];

function LeadSection({ sent, onSubmit }) {
  const { Button, Input, Checkbox, FacetMark } = DS();
  const [ok, setOk] = React.useState({});
  const allOk = CONSENTS.every(([k]) => ok[k]);
  return (
    <section id="lead" className="l-section">
      <div className="l-shell">
        <div className="l-split" style={{ alignItems: 'stretch' }}>
          <div className="l-glass l-glass--sheen l-rise" style={{ padding: 'clamp(30px,3.4vw,52px)', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <FacetMark name="ray" size={26} strokeWidth={.9} />
              <span className="l-tag">Бесплатно</span>
            </div>
            <h2 className="l-display" style={{ fontSize: 'clamp(26px,3.2vw,44px)', maxWidth: '20ch' }}>
              Посмотрите, как это выглядит вживую
            </h2>
            <p className="l-body" style={{ color: 'var(--text-secondary)', maxWidth: '48ch' }}>
              Запись моего выступления для руководителей в Менеджер-клубе. За час — про то, что ИИ реально меняет в работе руководителя, без магии и без обещаний. Оставьте почту, и я пришлю запись.
            </p>
            {sent ? (
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '20px 22px', background: 'rgba(255,252,244,.6)', borderRadius: 18, border: '1px solid rgba(255,255,255,.6)' }}>
                <FacetMark name="checkRing" size={24} strokeWidth={.9} />
                <span className="l-body">Запись отправлена на почту. Проверьте входящие.</span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 16 }}>
                  <Input label="Имя" placeholder="Как вас зовут" style={{ minWidth: 0 }} />
                  <Input label="Почта" type="email" placeholder="you@mail.ru" style={{ minWidth: 0 }} />
                </div>
                <div className="l-consents">
                  {CONSENTS.map(([k, label]) => (
                    <Checkbox key={k} label={label} iconBase={LdB} checked={!!ok[k]}
                      onChange={(e) => setOk((s) => ({ ...s, [k]: e.target.checked }))} />
                  ))}
                </div>
                <Button size="lg" onClick={onSubmit} disabled={!allOk} style={{ alignSelf: 'flex-start' }}
                  iconRight={<FacetMark name="arrow" size={16} tone="current" />}>Получить запись</Button>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.55, color: 'var(--text-faint)', maxWidth: '52ch' }}>
                  После записи пришлю пару писем о том, как встроить ИИ в работу. Отписаться можно в один клик.
                </span>
              </div>
            )}
          </div>

          <div className="l-rise" data-d="2" style={{ position: 'relative', borderRadius: 26, overflow: 'hidden', minHeight: 380, border: '1px solid rgba(255,255,255,.5)' }}>
            <img src="assets/people/yulia-tg.jpg" alt="Юлия Шабашова" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '48% 16%' }} />
            <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(77,14,18,0) 0%,rgba(77,14,18,.14) 34%,rgba(77,14,18,.74) 68%,rgba(58,10,14,.93) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, padding: 'clamp(28px,3.2vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 18 }}>
              <span className="l-tag" style={{ color: 'var(--gold-light)' }}>Телеграм-канал</span>
              <span className="l-display" style={{ fontSize: 'clamp(26px,3vw,42px)', color: 'var(--paper-1)' }}>ИИ на спокойном</span>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-inverse-muted)', maxWidth: '38ch' }}>
                Как использовать ИИ в работе и жизни. Без гонки за новинками и без обещаний, что нейросеть сделает всё за вас.
              </p>
              <Button variant="inverse" onClick={() => {}} style={{ alignSelf: 'flex-start', borderRadius: 999 }}
                iconRight={<FacetMark name="arrowUp" size={15} tone="current" />}>Подписаться</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { LeadSection });

Object.assign(window, {LeadSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const QA = [
  ['Я совсем новичок, разберусь?', 'Да. Я объясняю с нуля и на понятном языке. Если справляетесь с телефоном и почтой — этого достаточно, чтобы начать.'],
  ['За нейросети надо платить? И что из них работает в России?', 'Часть инструментов бесплатные, часть платные. На курсах и консультациях показываю, что работает из России и как это настроить.'],
  ['Сколько времени это займёт?', 'Базовый курс — несколько вечеров. Консультация — полтора часа. Дальше вы работаете сами.'],
  ['Чем консультация отличается от курса?', 'Курс — общая база для всех. Консультация — про ваши задачи: я смотрю вашу работу и показываю, что и как упростить.'],
  ['Мне некогда разбираться самой, но нужна автоматизация простой повторяющейся рутины. Это можно заказать у вас?', 'Да, небольшие задачи беру. Загляните в кейсы — там примеры того, что я собираю с ИИ. Расскажете свою задачу, обсудим.', 'cases.html'],
  ['Как оплатить и получить доступ?', 'Курсы — картой на сайте, ссылку на материалы пришлю после оплаты. Консультации и обучение — картой или по счёту на реквизиты ИП.'],
];

function FaqSection({ onLead }) {
  const { Button, FacetMark } = DS();
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="l-section">
      <div className="l-shell">
        <div className="l-split" style={{ alignItems: 'start' }}>
          <div className="l-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, position: 'sticky', top: 120 }}>
            <span className="l-tag">Вопрос — ответ</span>
            <h2 className="l-display" style={{ fontSize: 'clamp(30px,3.8vw,52px)' }}>Спросите то, что неудобно</h2>
            <p className="l-body" style={{ color: 'var(--text-secondary)', maxWidth: '32ch' }}>Если вашего вопроса здесь нет — напишите в Telegram, отвечаю сама.</p>
            <Button variant="secondary" onClick={onLead} style={{ alignSelf: 'flex-start', borderRadius: 999 }}>Задать вопрос</Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {QA.map(([q, a, link], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="l-glass l-faq-bare l-rise" data-d={String((i % 4) + 1)} style={{ padding: 0 }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{ width: '100%', border: 0, background: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(20px,2.2vw,26px) 2px', display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px,1.5vw,18px)', fontWeight: 500, letterSpacing: '-.008em', color: 'var(--ink-900)' }}>{q}</span>
                    <FacetMark name={isOpen ? 'minus' : 'plus'} size={20} tone="ink" />
                  </button>
                  <div className={'l-open' + (isOpen ? ' is-open' : '')}>
                    <div>
                      <p style={{ margin: 0, padding: '0 40px clamp(22px,2.2vw,28px) 2px', fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.68, color: 'var(--text-secondary)', maxWidth: '62ch' }}>
                        {a}{link ? <> <a className="l-underline" href={link} style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>Смотреть кейсы</a></> : null}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { FaqSection });

Object.assign(window, {FaqSection});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const CT = 'assets/people/talks/';

const COURSES = [
  {
    id: 'week',
    name: 'ИИ за неделю',
    sub: 'от новичка до уверенного пользователя',
    who: 'для тех, кто не технарь, но хочет разобраться',
    format: '5 понятных уроков в Telegram по 5–10 минут плюс вводный урок для новичков',
    inside: [
      'Как работает ИИ простым языком и что из него работает в России',
      'Как построить запрос, чтобы получать результат, а не отписку',
      'Какой сервис выбрать под задачу: ChatGPT, Claude, Gemini, DeepSeek, Алиса, ГигаЧат',
      'Генерация контента: картинки, презентация за 5 минут, озвучка, видео, цифровой аватар',
      'Умный поиск и работа с вашими файлами',
      'Как встроить ИИ в жизнь и с чего начать',
    ],
    out: 'Навык общения с ИИ, готовые визуалы без дизайнера, шаблоны для работы и дома, проверенный список сервисов и спокойное «я умею».',
    plus: 'PDF-конспекты, библиотека промптов копируй-вставляй, все ссылки, 20+ готовых промптов бонусом.',
    when: 'Первый урок придёт сразу после оплаты.',
    was: '3 900 ₽',
    now: '990 ₽',
    rating: 'Средняя оценка курса — 9 из 10 по опросам учеников.',
    cta: 'Пройти за 990 ₽',
    mark: 'grain',
    slot: 'course-week',
    cover: 'assets/imagery/course-week-preview.jpg',
  },
  {
    id: 'expert',
    name: 'ИИ для эксперта',
    sub: 'от хаоса в голове к чёткой стратегии',
    who: 'для тех, кто уже работает с ИИ и хочет продавать свою экспертность',
    format: 'практикум на 2–3 часа, проходится за вечер',
    inside: [
      'Видео-настройка: зачем эксперту ИИ',
      'Готовые промпты под задачу',
      'Бот-методолог, который сам соберёт вам продуктовую линейку с ценами',
    ],
    out: 'Ясное позиционирование без самозванца, карта аудитории с болями и желаниями, продуктовая линейка от лид-магнита до флагмана, контент-план с темами и продающими текстами, понимание, как расти дальше по шагам.',
    plus: 'За один вечер сделаете то, что откладывали годами: разложите, кто вы и зачем людям, придумаете продукт, который купят, получите контент на месяц вперёд.',
    when: 'Ссылка на вход придёт сразу после оплаты.',
    was: '5 900 ₽',
    now: '1 900 ₽',
    rating: '',
    cta: 'Собрать стратегию за 1 900 ₽',
    mark: 'planes',
    slot: 'course-expert',
  },
];

const NAV = [
  ['Только пробуете ИИ', 'вам «ИИ за неделю»', 'week'],
  ['Уже работаете с ИИ и хотите продавать экспертность', 'вам «ИИ для эксперта»', 'expert'],
  ['Не уверены', 'пройдите оба по порядку — они дополняют друг друга', 'week'],
];

const QA = [
  ['Я совсем новичок, будет понятно?', 'Да. «ИИ за неделю» с нуля: куда зайти, что написать. Технических знаний не нужно.'],
  ['У меня Mac, Windows или телефон — подойдёт?', 'Да. ИИ работает через браузер на любом устройстве.'],
  ['Сколько времени займёт?', 'Базовый курс — уроки по 5–10 минут, проходится за выходные. Практикум для эксперта — вечер.'],
  ['Материалы останутся у меня?', 'Да, всё хранится в Telegram, возвращаетесь когда угодно.'],
  ['Чем курсы отличаются?', '«ИИ за неделю» даёт базу для всех. «ИИ для эксперта» — для тех, кто уже работает с ИИ и хочет упаковать и продавать экспертность.'],
  ['Как вернуть деньги, если не будет результата?', 'Пройдите все уроки. Если результата нет — напишите мне, верну 100% оплаты. Условия возврата описаны в оферте.'],
];

function CoursesHero({ onGo }) {
  const { Button, FacetMark } = DS();
  return (
    <section id="top" className="l-section" style={{ paddingTop: 164 }}>
      <div className="l-shell">
        <div className="l-split" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span className="l-tag l-rise">Курсы · от 990 ₽</span>
            <h1 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(36px,5vw,72px)' }}>
              Курсы по ИИ — от первого запроса до своей <span className="l-italic">продуктовой линейки</span>
            </h1>
            <p className="l-lead l-rise" data-d="2" style={{ maxWidth: '44ch' }}>
              Два практикума на понятном языке. Начните с азов или соберите стратегию эксперта за вечер.
            </p>
            <div className="l-rise" data-d="3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button size="lg" onClick={() => onGo('week')} style={{ borderRadius: 999 }}
                iconRight={<FacetMark name="arrow" size={16} tone="current" />}>Начать с азов — 990 ₽</Button>
              <Button size="lg" variant="secondary" onClick={() => onGo('expert')} style={{ borderRadius: 999}}>Практикум для эксперта</Button>
            </div>
            <div className="l-glass l-glass--blur l-rise" data-d="4" style={{ padding: '18px 24px', display: 'flex', flexWrap: 'wrap', gap: 'clamp(18px,3vw,38px)', borderRadius: 20 }}>
              {[['9 из 10', 'средняя оценка'], ['250+', 'учеников'], ['100%', 'возврат, если без результата']].map(([b, s]) => (
                <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span className="l-display" style={{ fontSize: 26, lineHeight: 1 }}>{b}</span>
                  <span className="l-tag">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="l-rise" data-d="2" style={{ position: 'relative' }}>
            <div className="l-stack__tile l-float" style={{ position: 'relative', inset: 'auto', aspectRatio: '4/5', maxHeight: 560, marginLeft: 'auto', borderRadius: 26 }}>
              <image-slot id="courses-hero" shape="rect" placeholder="Фото: вы на выступлении или за работой"></image-slot>
            </div>
            <div className="l-glass l-glass--blur l-float l-float--c" style={{ position: 'absolute', left: '-4%', bottom: '10%', padding: '14px 22px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="l-tag" style={{ color: 'var(--text-secondary)' }}>Первый урок — сразу после оплаты</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesNav({ onGo }) {
  const { FacetMark } = DS();
  return (
    <section className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
          <span className="l-tag l-rise">С чего начать</span>
        </div>
        <div className="l-grid-3">
          {NAV.map(([q, a, go], i) => (
            <button key={q} type="button" onClick={() => onGo(go)} className="l-glass l-rise l-navcard" data-d={String(i + 1)}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{q} —</span>
              <span className="l-display" style={{ fontSize: 'clamp(19px,1.9vw,24px)', lineHeight: 1.18 }}>{a}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ c, onLead }) {
  const { Button, FacetMark } = DS();
  return (
    <article id={c.id} className="l-glass l-glass--sheen l-rise l-course">
      <div className="l-course__body">
        <div className="l-course__head">
          <span className="l-tag">{c.who}</span>
          <h2 className="l-display" style={{ fontSize: 'clamp(30px,3.6vw,50px)', lineHeight: 1.04 }}>{c.name}</h2>
          <span className="l-italic" style={{ fontSize: 'clamp(18px,1.9vw,25px)', color: 'var(--text-muted)' }}>{c.sub}</span>
          <p className="l-body" style={{ margin: '6px 0 0', color: 'var(--text-secondary)', maxWidth: '46ch' }}>{c.format}</p>
        </div>

        <div className="l-course__row">
          <span className="l-tag" style={{ color: 'var(--text-gold)' }}>Что внутри</span>
          <ul className="l-course__list">
            {c.inside.map((b) => (
              <li key={b}>
                <span className="l-course__dash" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="l-course__row">
          <span className="l-tag" style={{ color: 'var(--text-gold)' }}>С чем уйдёте</span>
          <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.62, color: 'var(--text-body)', maxWidth: '80ch' }}>{c.out}</p>
        </div>

        <div className="l-course__row">
          <span className="l-tag" style={{ color: 'var(--text-gold)' }}>Плюс</span>
          <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.62, color: 'var(--text-secondary)', maxWidth: '84ch' }}>{c.plus}</p>
        </div>

        <div className="l-course__foot">
          {c.cover ? (
            <figure className="l-peek">
              <img src={c.cover} alt={'Кадры из уроков курса «' + c.name + '»'} />
              <figcaption>Так выглядят уроки</figcaption>
            </figure>
          ) : (
            <div className="l-peek l-peek--empty">
              <image-slot id={c.slot} shape="rect" placeholder="Кадры из уроков"></image-slot>
            </div>
          )}
          <div className="l-course__buy">
            <span className="l-price">
              <span className="l-price-was">{c.was}</span>
              <span className="l-price-now">{c.now}</span>
            </span>
            {c.rating ? <span className="l-course__note">{c.rating}</span> : null}
            <Button size="lg" onClick={onLead} style={{ borderRadius: 999, alignSelf: 'flex-start', marginTop: 4 }}
              iconRight={<FacetMark name="arrow" size={16} tone="current" />}>{c.cta}</Button>
            <span className="l-course__note">Пройдёте все уроки без результата — верну 100% оплаты. {c.when}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function CoursesList({ onLead }) {
  return (
    <section id="list" className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(18px,2.2vw,28px)' }}>
        {COURSES.map((c) => <CourseCard key={c.id} c={c} onLead={onLead} />)}
      </div>
    </section>
  );
}

function CoursesSoon() {
  const { Button, FacetMark } = DS();
  return (
    <section className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell">
        <div className="l-glass l-rise" style={{ padding: 'clamp(26px,3vw,44px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, borderStyle: 'dashed' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: '48ch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span className="l-display" style={{ fontSize: 'clamp(22px,2.4vw,32px)' }}>Скоро больше</span>
            </div>
            <p className="l-body" style={{ margin: 0, color: 'var(--text-secondary)' }}>
              Готовлю новые практикумы, в том числе «ИИ для руководителя». Подпишитесь на канал — там анонсы первыми.
            </p>
          </div>
          <Button variant="secondary" onClick={() => {}} style={{ borderRadius: 999 }}
            iconRight={<FacetMark name="arrowUp" size={15} tone="current" />}>Подписаться на канал</Button>
        </div>
      </div>
    </section>
  );
}

function CoursesGuarantee() {
  const { FacetMark } = DS();
  return (
    <section className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell">
        <div className="l-glass l-glass--ink l-glass--sheen l-rise" style={{ padding: 'clamp(30px,4vw,60px)', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(20px,3vw,40px)', alignItems: 'center' }}>
          <FacetMark name="checkRing" size={40} tone="light" strokeWidth={.85} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span className="l-display" style={{ fontSize: 'clamp(26px,3vw,40px)', color: 'var(--paper-1)' }}>Гарантия</span>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 16.5, lineHeight: 1.62, color: 'var(--text-inverse-muted)', maxWidth: '52ch' }}>
              Пройдите все уроки. Если результата не будет — верну 100% оплаты. Спокойно попробуйте: вы ничем не рискуете.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesQuote() {
  return (
    <section className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell">
        <div className="l-glass l-glass--gold l-rise" style={{ padding: 'clamp(32px,4vw,64px)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
          <p className="l-display" style={{ fontSize: 'clamp(26px,3.8vw,54px)', maxWidth: '20ch', margin: 0 }}>
            «Работа теперь без ИИ уже не та и <span className="l-italic">никогда не будет прежней</span>»
          </p>
          <span className="l-tag" style={{ color: 'var(--text-secondary)' }}>Торгово-промышленная палата Ярославской области</span>
        </div>
      </div>
    </section>
  );
}

function CoursesFaq() {
  const { FacetMark } = DS();
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
          <span className="l-tag l-rise">Вопрос — ответ</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {QA.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="l-glass l-rise" data-d={String((i % 4) + 1)} style={{ padding: 0 }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ width: '100%', border: 0, background: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(18px,2vw,26px)', display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(15.5px,1.5vw,17.5px)', fontWeight: 500, color: 'var(--ink-900)' }}>{q}</span>
                  <FacetMark name={isOpen ? 'minus' : 'plus'} size={19} tone="ink" />
                </button>
                <div className={'l-open' + (isOpen ? ' is-open' : '')}>
                  <div>
                    <p style={{ margin: 0, padding: '0 clamp(18px,2vw,26px) clamp(20px,2vw,26px)', fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.66, color: 'var(--text-secondary)', maxWidth: '62ch' }}>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoursesPersonal() {
  const { FacetMark } = DS();
  return (
    <section className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
      <div className="l-shell">
        <div className="l-glass l-rise" style={{ padding: 'clamp(22px,2.4vw,34px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: '56ch' }}>
            <span className="l-display" style={{ fontSize: 'clamp(18px,1.9vw,24px)' }}>Нужен разбор ваших задач, а не общий курс?</span>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              Провожу личные и командные консультации: смотрю вашу работу и показываю, что и как упростить с ИИ.
            </p>
          </div>
          <a className="l-underline" href="index.html#offer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            Про консультации<FacetMark name="arrow" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { CoursesHero, CoursesNav, CoursesList, CoursesSoon, CoursesGuarantee, CoursesQuote, CoursesFaq, CoursesPersonal });

Object.assign(window, {CoursesHero, CoursesNav, CourseCard, CoursesList, CoursesSoon, CoursesGuarantee, CoursesQuote, CoursesFaq, CoursesPersonal});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const CASES = [
  ['Дайджест новостей', 'Всю неделю собирает ИИ-новости на почту, а раз в неделю присылает готовый черновик в Telegram.', 'grain', 'case-digest.html'],
  ['Работа с гардеробом', 'Распознаёт вещи по фото, ведёт каталог и сама собирает коллажи-образы.', 'cluster', 'case-wardrobe.html'],
  ['Бот для личных финансов', 'Ведёт учёт расходов и показывает картину по деньгам.', 'orbit', ''],
  ['Бот для управления личной энергией', 'Помогает следить за нагрузкой и не выгорать.', 'ray', ''],
  ['«Вселенная дома»', 'Лендинг и бот, который проводит по трём шагам к дому мечты.', 'facetCut', ''],
  ['Этот сайт', 'yuliashabashova.ru тоже собран с ИИ — вы смотрите пример прямо сейчас.', 'dispersion', ''],
];

function CasesHero() {
  const { FacetMark } = DS();
  return (
    <section id="top" className="l-section" style={{ paddingTop: 168 }}>
      <div className="l-shell">
        <div className="l-split" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span className="l-tag l-rise">Кейсы</span>
            <h1 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(38px,5.4vw,76px)' }}>
              Что я собираю <span className="l-italic">с ИИ</span>
            </h1>
            <p className="l-lead l-rise" data-d="2" style={{ maxWidth: '46ch' }}>
              Я не только учу работать с ИИ, но и сама на нём собираю: сайты, Telegram-боты, автоматизацию мелкой рутины.
            </p>
            <p className="l-body l-rise" data-d="3" style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}>
              Часть заказных проектов показать не могу — клиенты не всегда готовы раскрывать, что их продукт сделан на ИИ. Поэтому покажу то, что собрала для себя. По этим работам видно, что можно сделать и вам.
            </p>
          </div>
          <div className="l-rise" data-d="2" style={{ position: 'relative' }}>
            <div className="l-stack__tile l-float" style={{ position: 'relative', inset: 'auto', aspectRatio: '4/3', borderRadius: 26 }}>
              <img src="assets/imagery/prism-crystal.png" alt="Призма в потоке света" />
            </div>
            <div className="l-glass l-glass--blur l-float l-float--c" style={{ position: 'absolute', left: '4%', bottom: '-6%', padding: '14px 22px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="l-tag" style={{ color: 'var(--text-secondary)' }}>Собрано руками и ИИ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesGrid() {
  const { FacetMark } = DS();
  return (
    <section id="list" className="l-section">
      <div className="l-shell">
        <div className="l-grid-2" style={{ gap: 'clamp(14px,1.6vw,20px)' }}>
          {CASES.map(([title, lead, mark, href], i) => {
            const Tag = href ? 'a' : 'div';
            return (
              <Tag key={title} href={href || undefined} className={'l-glass l-rise l-casecard' + (href ? '' : ' is-soon')} data-d={String((i % 4) + 1)}>
                <span className="l-casecard__cover"><img src="assets/cases/wardrobe-cover.jpg" alt="" loading="lazy" /></span>
                <span className="l-display" style={{ fontSize: 'clamp(20px,2.1vw,28px)', lineHeight: 1.14 }}>{title}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{lead}</span>
                <span className="l-casecard__go">
                  {href ? <><span className="l-tag">Смотреть кейс</span><FacetMark name="arrow" size={15} /></> : <span className="l-tag" style={{ color: 'var(--text-faint)' }}>Скоро расскажу</span>}
                </span>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CasesCta({ onLead }) {
  const { Button, FacetMark } = DS();
  return (
    <section id="order" className="l-section">
      <div className="l-shell">
        <div className="l-glass l-glass--sheen l-rise" style={{ padding: 'clamp(30px,3.6vw,56px)', display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="l-tag">Под задачу</span>
          </div>
          <h2 className="l-display" style={{ fontSize: 'clamp(28px,3.6vw,48px)', maxWidth: '20ch' }}>
            Что я могу <span className="l-italic">собрать вам</span>
          </h2>
          <div className="l-split" style={{ gap: 'clamp(24px,3vw,48px)', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p className="l-body" style={{ color: 'var(--text-secondary)', maxWidth: '46ch', margin: 0 }}>По тем же принципам делаю под задачу:</p>
              {['Telegram-бот под вашу задачу', 'Автоматизацию повторяющейся рутины', 'Сайт или лендинг'].map((b) => (
                <span key={b} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 9, width: 16, height: 1, background: 'var(--gold-base)', flex: '0 0 auto' }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{b}</span>
                </span>
              ))}
            </div>
            <div className="l-glass" style={{ padding: 'clamp(20px,2.2vw,28px)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="l-tag">Честно про рамки</span>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.62, color: 'var(--text-body)' }}>
                Беру небольшие и понятные задачи. Сложную автоматизацию процессов в крупной компании не веду — это к другим специалистам. А если хотите собрать что-то сами, разберём на консультации.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Button size="lg" onClick={onLead} style={{ alignSelf: 'flex-start', borderRadius: 999 }}
              iconRight={<FacetMark name="arrow" size={16} tone="current" />}>Расскажите задачу</Button>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-faint)' }}>Обсудим формат и сроки, цена зависит от задачи.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { CasesHero, CasesGrid, CasesCta });

Object.assign(window, {CasesHero, CasesGrid, CasesCta});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

const POSTS = {
  digest: {
    tag: 'Личный инструмент',
    title: ['Дайджест новостей', 'который собирается сам'],
    lead: 'Система всю неделю собирает ИИ-новости на почту, а раз в неделю сама сводит их в готовый черновик дайджеста и присылает в Telegram.',
    blocks: [
      ['Задача', 'ray', 'Собрать недельный дайджест руками — это каждый день обойти источники, отобрать важное, свести в читаемый вид. Час утром впустую. А готовые агрегаторы дают шум, а не суть.'],
      ['Что собрала', 'planes', 'Два звена. Ежедневный агент обходит источники и присылает выжимку на почту. Раз в неделю система читает эти письма за пн–вс, смотрит, что уже выходило в канале, убирает повторы и собирает блок «Ранее на канале». Дальше дедуплицирует новости, отбирает 30–35 пунктов по правилам канала, формулирует живым языком, группирует в блоки и присылает готовый черновик в приватный Telegram-канал.'],
      ['Результат', 'grain', 'Черновик приходит собранным: 30–35 отобранных пунктов по блокам, с живыми формулировками и вшитыми ссылками. Остаётся отобрать лучшие двадцать и поправить акценты — минуты вместо часа.'],
      ['На чём сделано', 'cluster', 'Еженедельная сборка — на Claude по подробному ТЗ и файлам-правилам. Чтение писем из Gmail, отправка через Telegram Bot API, автосбор первоисточников, правила и память в Dropbox. Тон и запреты вшиты в ТЗ: не больше одной-двух финансовых новостей и до четырёх курьёзов на выпуск.'],
    ],
    steps: ['Агент обходит источники и присылает выжимку на почту', 'Раз в неделю система читает письма за пн–вс', 'Убирает повторы, собирает блок «Ранее на канале»', 'Отбирает 30–35 пунктов и формулирует живым языком', 'Присылает готовый черновик в Telegram'],
    slots: [['digest-1', 'Черновик поста в Telegram'], ['digest-2', 'Канал @stpnv_ai']],
  },
  wardrobe: {
    tag: 'Личный инструмент',
    title: ['Гардероб', 'который сам собирает образы'],
    lead: 'Система из фотографий вещей собирает каталог гардероба и сама генерирует коллажи-образы — включая отдельный набор для собачника.',
    blocks: [
      ['Задача', 'ray', 'Собрать образы из большого гардероба руками долго: держать в голове, что с чем сочетается, что уже есть, а что надо докупить, и каждый раз вручную сводить вещи в картинку.'],
      ['Что собрала', 'planes', 'Кидаешь фото вещи с прозрачным фоном в папку — система распознаёт её, предлагает код и описание, после подтверждения вносит в каталог. В таблице образов набираешь лук из кодов, скрипт собирает из этих вещей коллаж на бежевом фоне: портрет, верх и низ, обувь, сумка, украшения — всё разложено по правилам стиля. Для собачьих образов — отдельная изолированная логика, чтобы собачья одежда не путалась с основным гардеробом.'],
      ['Результат', 'grain', 'Готовые луки складываются в папку — отдельно обычные, отдельно для собачника. Сборка образа из набора кодов занимает секунды, каталог всегда актуален, а плейсхолдеры «докупить» показывают, чего не хватает.'],
      ['На чём сделано', 'cluster', 'Python-скрипты сборки коллажей и каталога плюс Claude для распознавания фото и ведения каталога. CSV-каталоги вещей, украшений и образов, PNG с прозрачным фоном, рендер на Pillow, синхронизация через Dropbox. Правила раскладки — силуэт, размеры, расположение аксессуаров — зашиты в скрипт.'],
    ],
    steps: ['Кидаешь фото вещи в папку', 'Система распознаёт её и предлагает код', 'После подтверждения вещь попадает в каталог', 'В таблице образов набираешь лук из кодов', 'Скрипт собирает коллаж и кладёт в папку'],
    cover: 'assets/cases/wardrobe-cover.jpg',
    slots: [['wardrobe-1', 'Готовый коллаж-образ'], ['wardrobe-2', 'Каталог вещей']],
  },
};

function CasePost({ id, onLead }) {
  const { Button, FacetMark } = DS();
  const p = POSTS[id];
  return (
    <>
      <section id="top" className="l-section" style={{ paddingTop: 164 }}>
        <div className="l-shell">
          <a href="cases.html" className="l-underline l-rise" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 26 }}>
            <span style={{ width: 16, height: 1, background: 'var(--gold-base)' }} />Все кейсы
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span className="l-tag l-rise">{p.tag}</span>
            <h1 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(34px,5vw,68px)', maxWidth: '18ch' }}>
              {p.title[0]}<br /><span className="l-italic">{p.title[1]}</span>
            </h1>
            <p className="l-lead l-rise" data-d="2" style={{ maxWidth: '48ch' }}>{p.lead}</p>
          </div>

          {p.cover ? (
            <div className="l-stack__tile l-rise" data-d="3" style={{ position: 'relative', inset: 'auto', aspectRatio: '3/2', marginTop: 'clamp(28px,3.4vw,44px)' }}>
              <img src={p.cover} alt="" />
            </div>
          ) : null}

          <div className="l-rise l-grid-2" data-d="3" style={{ marginTop: 'clamp(14px,1.6vw,20px)' }}>
            {p.slots.map(([sid, label]) => (
              <div key={sid} className="l-stack__tile" style={{ position: 'relative', inset: 'auto', aspectRatio: '4/3', borderRadius: 22 }}>
                <image-slot id={sid} shape="rect" placeholder={label}></image-slot>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="l-section" style={{ paddingTop: 'clamp(26px,3.2vw,52px)' }}>
        <div className="l-shell">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vw,20px)' }}>
            {p.blocks.map(([title, mark, text], i) => (
              <div key={title} className="l-glass l-rise" data-d={String((i % 4) + 1)}
                style={{ padding: 'clamp(24px,2.6vw,38px)', display: 'grid', gap: 'clamp(14px,1.6vw,20px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span className="l-display" style={{ fontSize: 'clamp(20px,2vw,27px)', lineHeight: 1.16 }}>{title}</span>
                  <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.68, color: 'var(--text-body)', maxWidth: '62ch' }}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="l-glass l-glass--sheen l-rise" style={{ marginTop: 'clamp(14px,1.6vw,20px)', padding: 'clamp(24px,2.6vw,38px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="l-tag" style={{ color: 'var(--text-gold)' }}>Как работает, по шагам</span>
            <ol className="l-steps">
              {p.steps.map((s, i) => (
                <li key={s}><span className="l-steps__n">{i + 1}</span><span>{s}</span></li>
              ))}
            </ol>
          </div>

          <div className="l-glass l-glass--ink l-glass--sheen l-rise" style={{ marginTop: 'clamp(24px,3vw,44px)', padding: 'clamp(30px,3.6vw,52px)', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="l-display" style={{ fontSize: 'clamp(24px,2.8vw,38px)', color: 'var(--paper-1)', maxWidth: '22ch', margin: 0 }}>
              Такое я могу собрать <span className="l-italic" style={{ color: 'var(--gold-light)' }}>и вам</span>
            </p>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.62, color: 'var(--text-inverse-muted)', maxWidth: '46ch' }}>
              Расскажите задачу — обсудим формат, сроки и что реально имеет смысл автоматизировать.
            </p>
            <Button variant="inverse" onClick={onLead} style={{ alignSelf: 'flex-start', borderRadius: 999 }}
              iconRight={<FacetMark name="arrow" size={15} tone="current" />}>Обсудить задачу</Button>
          </div>
        </div>
      </section>
    </>
  );
}
Object.assign(window, { CasePost });

Object.assign(window, {CasePost});
})();

;(function(){
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

/* Рендерит текст документа: «## » — раздел, «- » и «• » — списки, остальное — абзацы. */
function LegalPage({ doc }) {
  const { FacetMark } = DS();
  const d = doc;
  const blocks = [];
  let list = null;
  d.body.trim().split('\n').forEach((raw, i) => {
    const line = raw.trim();
    if (!line) { if (list) { blocks.push(list); list = null; } return; }
    if (line === '---') { if (list) { blocks.push(list); list = null; } blocks.push({ t: 'rule', k: i }); return; }
    if (line.indexOf('## ') === 0) { if (list) { blocks.push(list); list = null; } blocks.push({ t: 'h', k: i, s: line.slice(3) }); return; }
    if (line.indexOf('- ') === 0 || line.indexOf('• ') === 0) {
      if (!list) list = { t: 'ul', k: i, items: [] };
      list.items.push(line.slice(2));
      return;
    }
    if (list) { blocks.push(list); list = null; }
    blocks.push({ t: 'p', k: i, s: line });
  });
  if (list) blocks.push(list);

  return (
    <section id="top" className="l-section" style={{ paddingTop: 156 }}>
      <div className="l-shell">
        <a href="index.html" className="l-underline l-rise" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 26 }}>
          <span style={{ width: 16, height: 1, background: 'var(--gold-base)' }} />На главную
        </a>
        <div className="l-legal-head">
          <span className="l-tag l-rise">Документы</span>
          <h1 className="l-display l-rise" data-d="1" style={{ fontSize: 'clamp(30px,4.2vw,56px)', maxWidth: '24ch' }}>{d.title}</h1>
          {d.updated ? <span className="l-tag l-rise" data-d="2" style={{ color: 'var(--text-faint)' }}>{d.updated}</span> : null}
        </div>

        <article className="l-glass l-rise l-legal" data-d="2">
          {blocks.map((b) => {
            if (b.t === 'rule') return <span key={b.k} className="l-legal__rule" />;
            if (b.t === 'h') return <h2 key={b.k} className="l-display l-legal__h">{b.s}</h2>;
            if (b.t === 'ul') return (
              <ul key={b.k} className="l-legal__ul">
                {b.items.map((it, j) => <li key={j}><span className="l-legal__dash" />{it}</li>)}
              </ul>
            );
            return <p key={b.k} className="l-legal__p">{b.s}</p>;
          })}
        </article>

        <div className="l-glass l-rise l-legal-nav">
          <span className="l-tag" style={{ color: 'var(--text-gold)' }}>Другие документы</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px' }}>
            {[['oferta.html', 'Договор оферты'], ['privacy.html', 'Политика конфиденциальности'], ['soglasie.html', 'Согласие на обработку данных']]
              .filter(([href]) => href !== d.self).map(([href, l]) => (
                <a key={href} href={href} className="l-underline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  {l}<FacetMark name="arrow" size={13} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { LegalPage });

Object.assign(window, {LegalPage});
})();
