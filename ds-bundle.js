/* @ds-bundle: {"format":4,"namespace":"SHBSHVAIDesignSystem_3ba733","components":[{"name":"FacetMark","sourcePath":"components/brand/FacetMark.jsx"},{"name":"FACET_MARKS","sourcePath":"components/brand/FacetMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"FacetPanel","sourcePath":"components/core/FacetPanel.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SpectrumRule","sourcePath":"components/core/SpectrumRule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/FacetMark.jsx":"f0589e7d8e3a","components/core/Badge.jsx":"685a99d049cc","components/core/Button.jsx":"52aa6653511d","components/core/Card.jsx":"c4e4a840ae45","components/core/Divider.jsx":"00aee424514a","components/core/FacetPanel.jsx":"de4758894dc4","components/core/Icon.jsx":"8d2fc4bc8f68","components/core/IconButton.jsx":"f3c4ed3b48c4","components/core/SpectrumRule.jsx":"22419f2f35bb","components/core/Tag.jsx":"b767b4317980","components/feedback/Dialog.jsx":"4358fb203da6","components/feedback/Toast.jsx":"0191dc293c77","components/feedback/Tooltip.jsx":"6bd42c548f9a","components/forms/Checkbox.jsx":"7ca5084f4e44","components/forms/Input.jsx":"4baa3eb641e3","components/forms/Radio.jsx":"433fc2ca18bc","components/forms/Select.jsx":"50156ae198d0","components/forms/Switch.jsx":"6a1eac51d17c","components/forms/Textarea.jsx":"be9c2eef095f","components/navigation/Tabs.jsx":"ef5bb68aaa10","ui_kits/landing/AboutSection.jsx":"ab9c2a274b33","ui_kits/landing/Atmosphere.jsx":"eb05c8d0b8e0","ui_kits/landing/AudienceSection.jsx":"cd2d6442bde8","ui_kits/landing/CasePost.jsx":"8f4e8c1b686c","ui_kits/landing/CasesPage.jsx":"e3f280b88f85","ui_kits/landing/CasesTeaser.jsx":"daac46379161","ui_kits/landing/CoursesPage.jsx":"d322fbe321db","ui_kits/landing/FaqSection.jsx":"4dd3b01f09da","ui_kits/landing/HeroSection.jsx":"c0e0f6071f17","ui_kits/landing/LandingChrome.jsx":"b51561740dfe","ui_kits/landing/LeadSection.jsx":"c1ab2a006c7a","ui_kits/landing/LegalPage.jsx":"d9a7e4205432","ui_kits/landing/OfferSection.jsx":"b6dc5f9f3f71","ui_kits/landing/ResultsSection.jsx":"2b41f2279276","ui_kits/landing/ReviewsSection.jsx":"b73c49f39e9c","ui_kits/landing/image-slot.js":"fff26d081c8d","ui_kits/landing/legal-oferta.js":"7ae864c3f5e6","ui_kits/landing/legal-privacy.js":"fbc8cc781414","ui_kits/landing/legal-soglasie.js":"d95cb239cce8","ui_kits/site/ApplyScreen.jsx":"892714727049","ui_kits/site/EssaysScreen.jsx":"fc5b6f42eca5","ui_kits/site/HomeScreen.jsx":"2ba13d02cbc0","ui_kits/site/ProgramScreen.jsx":"cd7065340a2e","ui_kits/site/SiteChrome.jsx":"f354796a18c3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SHBSHVAIDesignSystem_3ba733 = window.SHBSHVAIDesignSystem_3ba733 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/FacetMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Знаковая система бренда: не предметные иконки, а геометрия преломления.
   Всё строится на сетке 24×24 волосяной линией: грань, входящий луч, дисперсия,
   горизонт. Ничего изобразительного — только то, что делает свет в материале. */

const G = {
  /* — смысловые знаки — */
  grain: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5 L20 8.5 L17 20.5 L7 20.5 L4 8.5 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5 V20.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8.5 H20"
  })),
  ray: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 4.5 V19.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 7.5 L11.5 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 12 L22 8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 12 L22 12.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 12 L22 16.5"
  })),
  dispersion: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 20 A 9 9 0 0 1 21 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 20 A 6 6 0 0 1 18 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 20 A 3 3 0 0 1 15 20"
  })),
  prism: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5 L21 19.5 H3 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5 V19.5"
  })),
  planes: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 9 L12 5 L20 9 L12 13 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 15 L12 11 L20 15 L12 19 Z"
  })),
  orbit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "12",
    rx: "10",
    ry: "4.4",
    transform: "rotate(-22 12 12)"
  })),
  horizon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.4 15.5 H20.6"
  })),
  node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 19.5 H19.5"
  })),
  cluster: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8.5",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "8.5",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16.5",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.1 9.7 L13.9 14.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.9 9.7 L10.1 14.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 8.5 H13.6"
  })),
  spark: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 V21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12 H21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.6 6.6 L17.4 17.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.4 6.6 L6.6 17.4"
  })),
  facetCut: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4 H16 L20 8 V20 H4 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4 V8 H20"
  })),
  /* — служебные знаки, та же геометрия — */
  arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 12 H19.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 6.5 L19.5 12 L14 17.5"
  })),
  arrowUp: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 17.5 L17.5 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 6.5 H17.5 V15"
  })),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 4.5 V19.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 12 H19.5"
  })),
  minus: /*#__PURE__*/React.createElement("path", {
    d: "M4.5 12 H19.5"
  }),
  close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5.5 L18.5 18.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 5.5 L5.5 18.5"
  })),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8 H20.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 12 H20.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 16 H14"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5 L9.5 18 L20 5.5"
  }),
  checkRing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.2 L11 15.2 L16.2 9"
  })),
  play: /*#__PURE__*/React.createElement("path", {
    d: "M9 5.5 L19 12 L9 18.5 Z"
  }),
  quote: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 17 C4.5 10 7 7.5 10.5 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 17 V12.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 17 C13.5 10 16 7.5 19.5 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 17 V12.5"
  }))
};
function FacetMark({
  name = 'grain',
  size = 22,
  tone = 'gold',
  strokeWidth = 1,
  title,
  className = '',
  style,
  ...rest
}) {
  const uid = React.useId ? React.useId().replace(/:/g, '') : 'fm';
  const stroke = tone === 'spectrum' ? `url(#fm-${uid})` : tone === 'ink' ? 'var(--ink-900)' : tone === 'current' ? 'currentColor' : tone === 'light' ? 'var(--paper-1)' : 'var(--gold-deep)';
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className: className,
    role: title ? 'img' : 'presentation',
    "aria-hidden": title ? undefined : 'true',
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, tone === 'spectrum' ? /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `fm-${uid}`,
    x1: "0",
    y1: "0",
    x2: "24",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--spectrum-1)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".35",
    stopColor: "var(--spectrum-2)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".7",
    stopColor: "var(--spectrum-4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--spectrum-6)"
  }))) : null, /*#__PURE__*/React.createElement("g", {
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    vectorEffect: "non-scaling-stroke"
  }, G[name] || G.grain));
}
const FACET_MARKS = Object.keys(G);
Object.assign(__ds_scope, { FacetMark, FACET_MARKS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FacetMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-badge{display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:var(--radius-pill);font-family:var(--font-sans);font-size:var(--fs-label);font-weight:var(--fw-medium);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;border:1px solid transparent}
.sh-badge--neutral{background:var(--paper-3);color:var(--text-secondary)}
.sh-badge--info{background:var(--state-info-surface);color:#3E5B69}
.sh-badge--positive{background:var(--state-positive-surface);color:#415A48}
.sh-badge--warning{background:var(--state-warning-surface);color:var(--gold-deep)}
.sh-badge--critical{background:var(--state-critical-surface);color:var(--state-critical)}
.sh-badge--gold{background:var(--gradient-gold-solid);color:var(--ink-900)}
.sh-badge--ink{background:var(--ink-900);color:var(--paper-1)}
.sh-badge--outline{background:transparent;border-color:var(--border-strong);color:var(--text-secondary)}
.sh-badge__dot{width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.75}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-badge-css')) {
  const s = document.createElement('style');
  s.id = 'sh-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['sh-badge', 'sh-badge--' + tone, className].filter(Boolean).join(' ')
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "sh-badge__dot",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-btn{--sh-btn-h:var(--control-h-md);position:relative;display:inline-flex;align-items:center;justify-content:center;gap:var(--control-gap);height:var(--sh-btn-h);padding:0 var(--control-pad-x);border:1px solid transparent;border-radius:var(--radius-control);font-family:var(--font-sans);font-size:var(--fs-body-sm);font-weight:var(--fw-medium);letter-spacing:.005em;line-height:1;text-decoration:none;cursor:pointer;white-space:nowrap;transition:var(--transition-control);-webkit-tap-highlight-color:transparent}
.sh-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sh-btn[disabled],.sh-btn[aria-disabled="true"]{opacity:.36;cursor:not-allowed;transform:none!important;box-shadow:none!important}
.sh-btn--sm{--sh-btn-h:var(--control-h-sm);padding:0 14px;font-size:var(--fs-caption)}
.sh-btn--lg{--sh-btn-h:var(--control-h-lg);padding:0 28px;font-size:var(--fs-body)}
.sh-btn--block{display:flex;width:100%}

.sh-btn--primary{background:var(--accent);color:var(--text-on-accent);box-shadow:var(--shadow-1)}
.sh-btn--primary:hover{background:var(--accent-hover);box-shadow:var(--shadow-2);transform:translateY(var(--lift-hover))}
.sh-btn--primary:active{background:var(--accent-press);box-shadow:var(--shadow-1);transform:scale(var(--press-scale))}

.sh-btn--secondary{background:transparent;color:var(--text-strong);border-color:var(--border-strong)}
.sh-btn--secondary:hover{border-color:var(--ink-700);background:var(--accent-quiet)}
.sh-btn--secondary:active{background:var(--accent-quiet-hover);transform:scale(var(--press-scale))}

.sh-btn--ghost{background:transparent;color:var(--text-secondary)}
.sh-btn--ghost:hover{background:var(--accent-quiet);color:var(--text-strong)}
.sh-btn--ghost:active{background:var(--accent-quiet-hover);transform:scale(var(--press-scale))}

.sh-btn--gold{background:var(--gradient-gold-solid);color:var(--ink-900);border-color:rgba(154,116,52,.5);box-shadow:var(--shadow-1)}
.sh-btn--gold:hover{box-shadow:var(--shadow-gold);transform:translateY(var(--lift-hover))}
.sh-btn--gold:active{transform:scale(var(--press-scale));box-shadow:var(--shadow-1)}

.sh-btn--inverse{background:var(--paper-1);color:var(--ink-900)}
.sh-btn--inverse:hover{background:var(--paper-0);transform:translateY(var(--lift-hover))}
.sh-btn--inverse:active{background:var(--paper-2);transform:scale(var(--press-scale))}

.sh-btn__spinner{width:14px;height:14px;border-radius:50%;border:1.5px solid currentColor;border-top-color:transparent;animation:sh-btn-spin 700ms linear infinite}
@keyframes sh-btn-spin{to{transform:rotate(360deg)}}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-btn-css')) {
  const s = document.createElement('style');
  s.id = 'sh-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  children,
  className = '',
  style,
  ...rest
}) {
  const Tag = href ? 'a' : as;
  const cls = ['sh-btn', 'sh-btn--' + variant, size !== 'md' && 'sh-btn--' + size, block && 'sh-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    style: style,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-disabled": Tag !== 'button' && (disabled || loading) ? 'true' : undefined
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "sh-btn__spinner",
    "aria-hidden": "true"
  }) : iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-card{position:relative;display:flex;flex-direction:column;gap:var(--space-4);padding:var(--card-pad);border:1px solid var(--border-hairline);border-radius:var(--radius-card);background:var(--surface-card);box-shadow:var(--shadow-1);transition:var(--transition-surface)}
.sh-card--pad-sm{padding:var(--space-6)}
.sh-card--pad-lg{padding:var(--card-pad-lg)}
.sh-card--quiet{background:var(--surface-card-quiet);box-shadow:none;border-color:transparent}
.sh-card--raised{box-shadow:var(--shadow-3)}
.sh-card--inverse{background:var(--gradient-ink);border-color:var(--border-inverse);color:var(--text-inverse-muted);box-shadow:var(--shadow-3)}
.sh-card--inverse h1,.sh-card--inverse h2,.sh-card--inverse h3,.sh-card--inverse h4{color:var(--text-inverse)}
.sh-card--glass{background:var(--glass-fill);border-color:var(--glass-border);backdrop-filter:var(--backdrop-glass);-webkit-backdrop-filter:var(--backdrop-glass);box-shadow:var(--shadow-2)}
.sh-card--cold{background:var(--surface-cold);border-color:var(--border-cold);box-shadow:none}
.sh-card--facet{clip-path:var(--clip-facet);border:0;box-shadow:var(--shadow-2)}
.sh-card--interactive{cursor:pointer}
.sh-card--interactive:hover{box-shadow:var(--shadow-3);transform:translateY(var(--lift-hover));border-color:var(--border-soft)}
.sh-card--interactive:active{transform:scale(var(--press-scale))}
.sh-card__media{margin:calc(-1 * var(--card-pad)) calc(-1 * var(--card-pad)) var(--space-2);border-radius:var(--radius-card) var(--radius-card) 0 0;overflow:hidden;aspect-ratio:16/10}
.sh-card--pad-lg .sh-card__media{margin:calc(-1 * var(--card-pad-lg)) calc(-1 * var(--card-pad-lg)) var(--space-3)}
.sh-card__media img{width:100%;height:100%;object-fit:cover}
.sh-card__edge{position:absolute;inset:0 0 auto;height:1px;background:var(--gradient-gold);border-radius:inherit}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-card-css')) {
  const s = document.createElement('style');
  s.id = 'sh-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  variant = 'default',
  padding = 'md',
  interactive = false,
  goldEdge = false,
  media,
  mediaAlt = '',
  children,
  className = '',
  ...rest
}) {
  const cls = ['sh-card', variant !== 'default' && 'sh-card--' + variant, padding !== 'md' && 'sh-card--pad-' + padding, interactive && 'sh-card--interactive', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), goldEdge ? /*#__PURE__*/React.createElement("span", {
    className: "sh-card__edge",
    "aria-hidden": "true"
  }) : null, media ? /*#__PURE__*/React.createElement("div", {
    className: "sh-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: mediaAlt
  })) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = 'soft',
  orientation = 'horizontal',
  spacing = 'md',
  label,
  style,
  ...rest
}) {
  const bg = {
    hairline: 'var(--border-hairline)',
    soft: 'var(--border-soft)',
    strong: 'var(--border-strong)',
    gold: 'var(--gradient-gold)',
    spectrum: 'var(--gradient-spectrum)',
    inverse: 'var(--border-inverse)'
  }[tone];
  const gap = {
    none: '0',
    sm: 'var(--space-5)',
    md: 'var(--space-8)',
    lg: 'var(--space-10)'
  }[spacing];
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "separator",
      "aria-orientation": "vertical",
      style: {
        display: 'inline-block',
        width: 1,
        alignSelf: 'stretch',
        background: bg,
        margin: `0 ${gap}`,
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        margin: `${gap} 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: bg
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-label)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontWeight: 500
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: bg
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      height: 1,
      border: 0,
      background: bg,
      margin: `${gap} 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/FacetPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-facet{position:relative;isolation:isolate;overflow:hidden;padding:var(--space-11) var(--space-10);border-radius:var(--radius-card-lg);background:var(--gradient-paper);clip-path:var(--clip-facet)}
.sh-facet--flush{padding:0}
.sh-facet--ink{background:var(--gradient-ink);color:var(--text-inverse-muted)}
.sh-facet--ink h1,.sh-facet--ink h2,.sh-facet--ink h3{color:var(--text-inverse)}
.sh-facet--cold{background:linear-gradient(180deg,var(--sky-light) 0%,var(--paper-1) 100%)}
.sh-facet--sand{background:var(--gradient-sand)}
.sh-facet__caustic{position:absolute;inset:0;background:var(--gradient-caustic);opacity:.9;pointer-events:none;z-index:-1}
.sh-facet--ink .sh-facet__caustic{opacity:.42;mix-blend-mode:screen}
.sh-facet__image{position:absolute;inset:0;z-index:-2}
.sh-facet__image img{width:100%;height:100%;object-fit:cover}
.sh-facet__veil{position:absolute;inset:0;z-index:-1;background:var(--scrim-paper-bottom)}
.sh-facet--ink .sh-facet__veil{background:var(--scrim-bottom)}
.sh-facet__edge{position:absolute;top:0;left:0;right:0;height:1px;background:var(--gradient-gold);z-index:1}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-facet-css')) {
  const s = document.createElement('style');
  s.id = 'sh-facet-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function FacetPanel({
  tone = 'paper',
  cut = 22,
  image,
  imageAlt = '',
  caustic = true,
  goldEdge = true,
  flush = false,
  children,
  className = '',
  style,
  ...rest
}) {
  const cls = ['sh-facet', tone !== 'paper' && 'sh-facet--' + tone, flush && 'sh-facet--flush', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls,
    style: {
      '--facet-cut': cut + 'px',
      ...style
    }
  }, rest), image ? /*#__PURE__*/React.createElement("div", {
    className: "sh-facet__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  })) : null, image ? /*#__PURE__*/React.createElement("span", {
    className: "sh-facet__veil",
    "aria-hidden": "true"
  }) : null, caustic ? /*#__PURE__*/React.createElement("span", {
    className: "sh-facet__caustic",
    "aria-hidden": "true"
  }) : null, goldEdge ? /*#__PURE__*/React.createElement("span", {
    className: "sh-facet__edge",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { FacetPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FacetPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icons are Lucide SVGs copied into assets/icons and re-stroked to 1.25.
   Rendered as a CSS mask so a glyph always inherits currentColor. */
function Icon({
  name,
  size = 18,
  base = 'assets/icons',
  strokeColor,
  className = '',
  style,
  ...rest
}) {
  const url = `url("${base}/${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": rest['aria-label'] ? undefined : 'true',
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: strokeColor || 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-iconbtn{--sh-ib:44px;display:inline-flex;align-items:center;justify-content:center;width:var(--sh-ib);height:var(--sh-ib);padding:0;border:1px solid transparent;border-radius:var(--radius-control);background:transparent;color:var(--text-secondary);cursor:pointer;transition:var(--transition-control)}
.sh-iconbtn--sm{--sh-ib:34px}
.sh-iconbtn--lg{--sh-ib:54px}
.sh-iconbtn--round{border-radius:var(--radius-circle)}
.sh-iconbtn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sh-iconbtn[disabled]{opacity:.36;cursor:not-allowed}
.sh-iconbtn--ghost:hover{background:var(--accent-quiet);color:var(--text-strong)}
.sh-iconbtn--ghost:active{background:var(--accent-quiet-hover);transform:scale(var(--press-scale))}
.sh-iconbtn--outline{border-color:var(--border-soft);color:var(--text-strong);background:var(--surface-card)}
.sh-iconbtn--outline:hover{border-color:var(--border-strong);box-shadow:var(--shadow-1)}
.sh-iconbtn--outline:active{transform:scale(var(--press-scale))}
.sh-iconbtn--solid{background:var(--accent);color:var(--text-on-accent)}
.sh-iconbtn--solid:hover{background:var(--accent-hover);transform:translateY(var(--lift-hover))}
.sh-iconbtn--solid:active{background:var(--accent-press);transform:scale(var(--press-scale))}
.sh-iconbtn--glass{background:var(--glass-fill);border-color:var(--glass-border);color:var(--text-strong);backdrop-filter:var(--backdrop-glass);-webkit-backdrop-filter:var(--backdrop-glass)}
.sh-iconbtn--glass:hover{background:var(--glass-fill-strong)}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'sh-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  label,
  children,
  className = '',
  ...rest
}) {
  const cls = ['sh-iconbtn', 'sh-iconbtn--' + variant, size !== 'md' && 'sh-iconbtn--' + size, round && 'sh-iconbtn--round', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SpectrumRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
@keyframes sh-spectrum-drift{0%{background-position:0% 50%}100%{background-position:200% 50%}}
.sh-spectrum{border:0;border-radius:2px;background:var(--gradient-spectrum);background-size:200% 100%}
.sh-spectrum--animated{animation:sh-spectrum-drift var(--dur-ambient) linear infinite alternate}
.sh-spectrum--soft{background:var(--gradient-spectrum-soft);background-size:200% 100%}
.sh-spectrum--vertical{background:var(--gradient-spectrum-vertical);background-size:100% 200%}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-spectrum-css')) {
  const s = document.createElement('style');
  s.id = 'sh-spectrum-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SpectrumRule({
  thickness = 1,
  length = '100%',
  orientation = 'horizontal',
  soft = false,
  animated = false,
  className = '',
  style,
  ...rest
}) {
  const vertical = orientation === 'vertical';
  const cls = ['sh-spectrum', soft && 'sh-spectrum--soft', vertical && 'sh-spectrum--vertical', animated && 'sh-spectrum--animated', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: cls,
    style: {
      display: 'block',
      width: vertical ? thickness : length,
      height: vertical ? length : thickness,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SpectrumRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpectrumRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tag{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 14px;border:1px solid var(--border-soft);border-radius:var(--radius-pill);background:var(--surface-card);color:var(--text-secondary);font-size:var(--fs-caption);font-weight:var(--fw-medium);letter-spacing:.01em;transition:var(--transition-control)}
.sh-tag--quiet{background:var(--paper-3);border-color:transparent}
.sh-tag--selectable{cursor:pointer}
.sh-tag--selectable:hover{border-color:var(--border-strong);color:var(--text-strong)}
.sh-tag--selected{background:var(--ink-900);border-color:var(--ink-900);color:var(--paper-1)}
.sh-tag__spectrum{width:18px;height:2px;border-radius:2px;background:var(--gradient-spectrum)}
.sh-tag__remove{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;margin-right:-4px;border:0;border-radius:50%;background:transparent;color:inherit;cursor:pointer;opacity:.55;transition:opacity var(--dur-fast) var(--ease-standard)}
.sh-tag__remove:hover{opacity:1}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-tag-css')) {
  const s = document.createElement('style');
  s.id = 'sh-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  variant = 'default',
  selected = false,
  selectable = false,
  spectrum = false,
  onRemove,
  children,
  className = '',
  ...rest
}) {
  const cls = ['sh-tag', variant !== 'default' && 'sh-tag--' + variant, selectable && 'sh-tag--selectable', selected && 'sh-tag--selected', className].filter(Boolean).join(' ');
  const Tag_ = selectable ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    type: selectable ? 'button' : undefined,
    "aria-pressed": selectable ? selected : undefined
  }, rest), spectrum ? /*#__PURE__*/React.createElement("span", {
    className: "sh-tag__spectrum",
    "aria-hidden": "true"
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-tag__remove",
    "aria-label": "\u0423\u0431\u0440\u0430\u0442\u044C",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
@keyframes sh-dialog-in{from{opacity:0;transform:translateY(var(--enter-rise)) scale(.99)}to{opacity:1;transform:none}}
@keyframes sh-overlay-in{from{opacity:0}to{opacity:1}}
.sh-overlay{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;padding:var(--space-7);background:var(--overlay-ink);backdrop-filter:var(--backdrop-veil);-webkit-backdrop-filter:var(--backdrop-veil);animation:sh-overlay-in var(--dur-base) var(--ease-standard)}
.sh-dialog{position:relative;width:100%;max-width:520px;max-height:88vh;overflow:auto;padding:var(--space-10);background:var(--surface-card);border-radius:var(--radius-sheet);box-shadow:var(--shadow-4);animation:sh-dialog-in var(--dur-slow) var(--ease-out-soft)}
.sh-dialog--wide{max-width:760px}
.sh-dialog--ink{background:var(--gradient-ink);color:var(--text-inverse-muted)}
.sh-dialog--ink h3{color:var(--text-inverse)}
.sh-dialog__edge{position:absolute;top:0;left:var(--space-10);right:var(--space-10);height:1px;background:var(--gradient-spectrum)}
.sh-dialog__close{position:absolute;top:20px;right:20px;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border:0;border-radius:50%;background:transparent;color:var(--text-muted);cursor:pointer;transition:var(--transition-control)}
.sh-dialog__close:hover{background:var(--accent-quiet);color:var(--text-strong)}
.sh-dialog__eyebrow{font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--text-muted);font-weight:var(--fw-medium)}
.sh-dialog__title{margin:10px 0 0;font-family:var(--font-display);font-weight:var(--fw-display);font-size:var(--fs-display-3);line-height:var(--lh-display-3);letter-spacing:var(--ls-display-3);color:var(--text-strong)}
.sh-dialog__body{margin-top:var(--space-6);color:var(--text-secondary);font-size:var(--fs-body-sm);line-height:var(--lh-body)}
.sh-dialog__footer{display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-9)}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-dialog-css')) {
  const s = document.createElement('style');
  s.id = 'sh-dialog-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Dialog({
  open = true,
  onClose,
  eyebrow,
  title,
  tone = 'paper',
  width = 'default',
  spectrumEdge = true,
  footer,
  children,
  className = '',
  ...rest
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose(e);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const cls = ['sh-dialog', tone === 'ink' && 'sh-dialog--ink', width === 'wide' && 'sh-dialog--wide', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose(e);
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    className: cls
  }, rest), spectrumEdge ? /*#__PURE__*/React.createElement("span", {
    className: "sh-dialog__edge",
    "aria-hidden": "true"
  }) : null, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-dialog__close",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose
  }, "\xD7") : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "sh-dialog__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "sh-dialog__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "sh-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "sh-dialog__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
@keyframes sh-toast-in{from{opacity:0;transform:translateY(var(--enter-rise))}to{opacity:1;transform:none}}
.sh-toast{display:flex;align-items:flex-start;gap:var(--space-4);width:100%;max-width:400px;padding:16px 18px;background:var(--surface-card);border:1px solid var(--border-hairline);border-radius:var(--radius-card);box-shadow:var(--shadow-3);animation:sh-toast-in var(--dur-slow) var(--ease-out-soft)}
.sh-toast__mark{flex:0 0 auto;width:6px;align-self:stretch;border-radius:3px;background:var(--paper-5)}
.sh-toast--info .sh-toast__mark{background:var(--state-info)}
.sh-toast--positive .sh-toast__mark{background:var(--state-positive)}
.sh-toast--warning .sh-toast__mark{background:var(--gold-base)}
.sh-toast--critical .sh-toast__mark{background:var(--state-critical)}
.sh-toast__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
.sh-toast__title{font-size:var(--fs-body-sm);font-weight:var(--fw-semibold);color:var(--text-strong);line-height:1.4}
.sh-toast__desc{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--text-muted)}
.sh-toast__close{flex:0 0 auto;width:24px;height:24px;margin:-2px -4px 0 0;border:0;background:transparent;color:var(--text-faint);border-radius:50%;cursor:pointer;transition:var(--transition-control)}
.sh-toast__close:hover{color:var(--text-strong);background:var(--accent-quiet)}
.sh-toaststack{position:fixed;z-index:70;display:flex;flex-direction:column;gap:12px;pointer-events:none}
.sh-toaststack>*{pointer-events:auto}
.sh-toaststack--br{right:var(--space-8);bottom:var(--space-8)}
.sh-toaststack--bc{left:50%;transform:translateX(-50%);bottom:var(--space-8)}
.sh-toaststack--tr{right:var(--space-8);top:var(--space-8)}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-toast-css')) {
  const s = document.createElement('style');
  s.id = 'sh-toast-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Toast({
  tone = 'neutral',
  title,
  children,
  onClose,
  icon,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: ['sh-toast', 'sh-toast--' + tone, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sh-toast__mark",
    "aria-hidden": "true"
  }), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    className: "sh-toast__text"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "sh-toast__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "sh-toast__desc"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-toast__close",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose
  }, "\xD7") : null);
}
function ToastStack({
  position = 'br',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['sh-toaststack', 'sh-toaststack--' + position, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tip{position:relative;display:inline-flex}
.sh-tip__bubble{position:absolute;z-index:50;max-width:240px;padding:8px 11px;background:var(--ink-900);color:var(--paper-1);font-family:var(--font-sans);font-size:var(--fs-caption);line-height:1.45;letter-spacing:.005em;border-radius:var(--radius-md);box-shadow:var(--shadow-3);opacity:0;transform:translateY(4px);pointer-events:none;transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard);white-space:normal}
.sh-tip--open .sh-tip__bubble{opacity:1;transform:none}
.sh-tip__bubble--top{bottom:calc(100% + 8px);left:50%;translate:-50% 0}
.sh-tip__bubble--bottom{top:calc(100% + 8px);left:50%;translate:-50% 0}
.sh-tip__bubble--left{right:calc(100% + 8px);top:50%;translate:0 -50%}
.sh-tip__bubble--right{left:calc(100% + 8px);top:50%;translate:0 -50%}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-tip-css')) {
  const s = document.createElement('style');
  s.id = 'sh-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  content,
  placement = 'top',
  open: openProp,
  children,
  className = '',
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const open = openProp !== undefined ? openProp : hovered;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['sh-tip', open && 'sh-tip--open', className].filter(Boolean).join(' '),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: 'sh-tip__bubble sh-tip__bubble--' + placement
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-check{display:inline-flex;align-items:flex-start;gap:12px;cursor:pointer;font-size:var(--fs-body-sm);line-height:1.5;color:var(--text-body)}
.sh-check input{position:absolute;opacity:0;width:0;height:0}
.sh-check__box{position:relative;flex:0 0 auto;width:18px;height:18px;margin-top:2px;border:1px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--surface-card);box-shadow:var(--shadow-inset-light);transition:var(--transition-control)}
.sh-check:hover .sh-check__box{border-color:var(--ink-700)}
.sh-check__box::after{content:"";position:absolute;inset:0;background:var(--paper-1);opacity:0;transform:scale(.6);transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard);-webkit-mask:var(--sh-check-glyph) center/11px 11px no-repeat;mask:var(--sh-check-glyph) center/11px 11px no-repeat}
.sh-check input:checked+.sh-check__box{background:var(--accent);border-color:var(--accent)}
.sh-check input:checked+.sh-check__box::after{opacity:1;transform:scale(1)}
.sh-check input:indeterminate+.sh-check__box{background:var(--accent);border-color:var(--accent)}
.sh-check input:indeterminate+.sh-check__box::after{opacity:1;transform:scale(1);-webkit-mask:var(--sh-minus-glyph) center/11px 11px no-repeat;mask:var(--sh-minus-glyph) center/11px 11px no-repeat}
.sh-check input:focus-visible+.sh-check__box{box-shadow:var(--shadow-focus)}
.sh-check--disabled{opacity:.45;pointer-events:none}
.sh-check__text{display:flex;flex-direction:column;gap:2px}
.sh-check__hint{font-size:var(--fs-caption);color:var(--text-faint)}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-check-css')) {
  const s = document.createElement('style');
  s.id = 'sh-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  hint,
  disabled = false,
  indeterminate = false,
  iconBase = 'assets/icons',
  className = '',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: ['sh-check', disabled && 'sh-check--disabled', className].filter(Boolean).join(' '),
    style: {
      '--sh-check-glyph': `url("${iconBase}/check.svg")`,
      '--sh-minus-glyph': `url("${iconBase}/minus.svg")`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-check__box",
    "aria-hidden": "true"
  }), label ? /*#__PURE__*/React.createElement("span", {
    className: "sh-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-check__hint"
  }, hint) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-field{display:flex;flex-direction:column;gap:8px;min-width:0}
.sh-field__label{font-family:var(--font-sans);font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;font-weight:var(--fw-medium);color:var(--text-muted)}
.sh-field__req{color:var(--gold-deep);margin-left:4px}
.sh-field__hint{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--text-faint)}
.sh-field__error{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--state-critical)}
.sh-control{--sh-c-h:var(--control-h-md);display:flex;align-items:center;gap:10px;height:var(--sh-c-h);padding:0 14px;background:var(--surface-card);border:1px solid var(--border-soft);border-radius:var(--radius-control);color:var(--text-strong);box-shadow:var(--shadow-inset-light);transition:var(--transition-control)}
.sh-control--sm{--sh-c-h:var(--control-h-sm);padding:0 10px}
.sh-control--lg{--sh-c-h:var(--control-h-lg);padding:0 18px}
.sh-control:hover{border-color:var(--border-strong)}
.sh-control:focus-within{border-color:var(--gold-base);box-shadow:var(--shadow-focus)}
.sh-control--invalid{border-color:var(--state-critical)}
.sh-control--invalid:focus-within{box-shadow:0 0 0 3px rgba(77,14,18,.18)}
.sh-control--disabled{opacity:.5;background:var(--paper-3);box-shadow:none;pointer-events:none}
.sh-control__input{flex:1;min-width:0;height:100%;border:0;background:transparent;outline:none;font-family:var(--font-sans);font-size:var(--fs-body-sm);color:var(--text-strong)}
.sh-control__input::placeholder{color:var(--text-faint)}
.sh-control__affix{display:inline-flex;align-items:center;color:var(--text-faint);flex:0 0 auto}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-field-css')) {
  const s = document.createElement('style');
  s.id = 'sh-field-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  size = 'md',
  prefix,
  suffix,
  disabled = false,
  id,
  className = '',
  style,
  ...rest
}) {
  const uid = React.useId ? React.useId() : 'sh-in';
  const inputId = id || uid;
  const shell = ['sh-control', size !== 'md' && 'sh-control--' + size, error && 'sh-control--invalid', disabled && 'sh-control--disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['sh-field', className].filter(Boolean).join(' '),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sh-field__label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: shell
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "sh-control__affix"
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "sh-control__input",
    disabled: disabled,
    "aria-invalid": error ? 'true' : undefined
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    className: "sh-control__affix"
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-radio{display:inline-flex;align-items:flex-start;gap:12px;cursor:pointer;font-size:var(--fs-body-sm);line-height:1.5;color:var(--text-body)}
.sh-radio input{position:absolute;opacity:0;width:0;height:0}
.sh-radio__dot{position:relative;flex:0 0 auto;width:18px;height:18px;margin-top:2px;border:1px solid var(--border-strong);border-radius:50%;background:var(--surface-card);box-shadow:var(--shadow-inset-light);transition:var(--transition-control)}
.sh-radio:hover .sh-radio__dot{border-color:var(--ink-700)}
.sh-radio__dot::after{content:"";position:absolute;inset:4px;border-radius:50%;background:var(--paper-1);opacity:0;transform:scale(.4);transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)}
.sh-radio input:checked+.sh-radio__dot{background:var(--accent);border-color:var(--accent)}
.sh-radio input:checked+.sh-radio__dot::after{opacity:1;transform:scale(1)}
.sh-radio input:focus-visible+.sh-radio__dot{box-shadow:var(--shadow-focus)}
.sh-radio--disabled{opacity:.45;pointer-events:none}
.sh-radio__text{display:flex;flex-direction:column;gap:2px}
.sh-radio__hint{font-size:var(--fs-caption);color:var(--text-faint)}
.sh-radiogroup{display:flex;flex-direction:column;gap:14px}
.sh-radiogroup--row{flex-direction:row;gap:24px;flex-wrap:wrap}
.sh-radiogroup__label{font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;font-weight:var(--fw-medium);color:var(--text-muted);margin-bottom:2px}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-radio-css')) {
  const s = document.createElement('style');
  s.id = 'sh-radio-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Radio({
  label,
  hint,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['sh-radio', disabled && 'sh-radio--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-radio__dot",
    "aria-hidden": "true"
  }), label ? /*#__PURE__*/React.createElement("span", {
    className: "sh-radio__text"
  }, /*#__PURE__*/React.createElement("span", null, label), hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-radio__hint"
  }, hint) : null) : null);
}
function RadioGroup({
  label,
  row = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    className: ['sh-radiogroup', row && 'sh-radiogroup--row', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "sh-radiogroup__label"
  }, label) : null, children);
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-field{display:flex;flex-direction:column;gap:8px;min-width:0}
.sh-field__label{font-family:var(--font-sans);font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;font-weight:var(--fw-medium);color:var(--text-muted)}
.sh-field__req{color:var(--gold-deep);margin-left:4px}
.sh-field__hint{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--text-faint)}
.sh-field__error{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--state-critical)}
.sh-control{--sh-c-h:var(--control-h-md);display:flex;align-items:center;gap:10px;height:var(--sh-c-h);padding:0 14px;background:var(--surface-card);border:1px solid var(--border-soft);border-radius:var(--radius-control);color:var(--text-strong);box-shadow:var(--shadow-inset-light);transition:var(--transition-control)}
.sh-control--sm{--sh-c-h:var(--control-h-sm);padding:0 10px}
.sh-control--lg{--sh-c-h:var(--control-h-lg);padding:0 18px}
.sh-control:hover{border-color:var(--border-strong)}
.sh-control:focus-within{border-color:var(--gold-base);box-shadow:var(--shadow-focus)}
.sh-control--invalid{border-color:var(--state-critical)}
.sh-control--invalid:focus-within{box-shadow:0 0 0 3px rgba(77,14,18,.18)}
.sh-control--disabled{opacity:.5;background:var(--paper-3);box-shadow:none;pointer-events:none}
.sh-control__input{flex:1;min-width:0;height:100%;border:0;background:transparent;outline:none;font-family:var(--font-sans);font-size:var(--fs-body-sm);color:var(--text-strong)}
.sh-control__input::placeholder{color:var(--text-faint)}
.sh-control__affix{display:inline-flex;align-items:center;color:var(--text-faint);flex:0 0 auto}

.sh-control--select{position:relative;cursor:pointer}
.sh-control--select select{appearance:none;-webkit-appearance:none;flex:1;min-width:0;height:100%;padding-right:22px;border:0;background:transparent;outline:none;font-family:var(--font-sans);font-size:var(--fs-body-sm);color:var(--text-strong);cursor:pointer}
.sh-control--select .sh-select__chev{position:absolute;right:14px;width:14px;height:14px;background:var(--text-muted);pointer-events:none;-webkit-mask:var(--sh-chev) center/contain no-repeat;mask:var(--sh-chev) center/contain no-repeat}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-select-css')) {
  const s = document.createElement('style');
  s.id = 'sh-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  hint,
  error,
  required = false,
  size = 'md',
  options = [],
  placeholder,
  disabled = false,
  iconBase = 'assets/icons',
  id,
  className = '',
  style,
  children,
  ...rest
}) {
  const uid = React.useId ? React.useId() : 'sh-sel';
  const inputId = id || uid;
  const shell = ['sh-control', 'sh-control--select', size !== 'md' && 'sh-control--' + size, error && 'sh-control--invalid', disabled && 'sh-control--disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['sh-field', className].filter(Boolean).join(' '),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sh-field__label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: shell,
    style: {
      '--sh-chev': `url("${iconBase}/chevron-down.svg")`
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    disabled: disabled,
    "aria-invalid": error ? 'true' : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label)), children), /*#__PURE__*/React.createElement("span", {
    className: "sh-select__chev",
    "aria-hidden": "true"
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-switch{display:inline-flex;align-items:center;gap:12px;cursor:pointer;font-size:var(--fs-body-sm);color:var(--text-body)}
.sh-switch input{position:absolute;opacity:0;width:0;height:0}
.sh-switch__track{position:relative;flex:0 0 auto;width:44px;height:26px;border-radius:var(--radius-pill);background:var(--paper-4);box-shadow:var(--shadow-inset-sunken);transition:background-color var(--dur-base) var(--ease-standard)}
.sh-switch__track::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:var(--paper-0);box-shadow:var(--shadow-1);transition:transform var(--dur-base) var(--ease-standard)}
.sh-switch input:checked+.sh-switch__track{background:var(--accent)}
.sh-switch input:checked+.sh-switch__track::after{transform:translateX(18px)}
.sh-switch input:focus-visible+.sh-switch__track{box-shadow:var(--shadow-focus)}
.sh-switch--sm .sh-switch__track{width:36px;height:21px}
.sh-switch--sm .sh-switch__track::after{width:16px;height:16px;top:2.5px;left:2.5px}
.sh-switch--sm input:checked+.sh-switch__track::after{transform:translateX(15px)}
.sh-switch--disabled{opacity:.45;pointer-events:none}
.sh-switch__text{display:flex;flex-direction:column;gap:2px}
.sh-switch__hint{font-size:var(--fs-caption);color:var(--text-faint)}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-switch-css')) {
  const s = document.createElement('style');
  s.id = 'sh-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  hint,
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['sh-switch', size === 'sm' && 'sh-switch--sm', disabled && 'sh-switch--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-switch__track",
    "aria-hidden": "true"
  }), label ? /*#__PURE__*/React.createElement("span", {
    className: "sh-switch__text"
  }, /*#__PURE__*/React.createElement("span", null, label), hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-switch__hint"
  }, hint) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-field{display:flex;flex-direction:column;gap:8px;min-width:0}
.sh-field__label{font-family:var(--font-sans);font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;font-weight:var(--fw-medium);color:var(--text-muted)}
.sh-field__req{color:var(--gold-deep);margin-left:4px}
.sh-field__hint{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--text-faint)}
.sh-field__error{font-size:var(--fs-caption);line-height:var(--lh-caption);color:var(--state-critical)}
.sh-control{--sh-c-h:var(--control-h-md);display:flex;align-items:center;gap:10px;height:var(--sh-c-h);padding:0 14px;background:var(--surface-card);border:1px solid var(--border-soft);border-radius:var(--radius-control);color:var(--text-strong);box-shadow:var(--shadow-inset-light);transition:var(--transition-control)}
.sh-control--sm{--sh-c-h:var(--control-h-sm);padding:0 10px}
.sh-control--lg{--sh-c-h:var(--control-h-lg);padding:0 18px}
.sh-control:hover{border-color:var(--border-strong)}
.sh-control:focus-within{border-color:var(--gold-base);box-shadow:var(--shadow-focus)}
.sh-control--invalid{border-color:var(--state-critical)}
.sh-control--invalid:focus-within{box-shadow:0 0 0 3px rgba(77,14,18,.18)}
.sh-control--disabled{opacity:.5;background:var(--paper-3);box-shadow:none;pointer-events:none}
.sh-control__input{flex:1;min-width:0;height:100%;border:0;background:transparent;outline:none;font-family:var(--font-sans);font-size:var(--fs-body-sm);color:var(--text-strong)}
.sh-control__input::placeholder{color:var(--text-faint)}
.sh-control__affix{display:inline-flex;align-items:center;color:var(--text-faint);flex:0 0 auto}

.sh-control--area{height:auto;align-items:stretch;padding:12px 14px}
.sh-control--area .sh-control__input{height:auto;min-height:104px;resize:vertical;line-height:var(--lh-body-sm);padding:0}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-area-css')) {
  const s = document.createElement('style');
  s.id = 'sh-area-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Textarea({
  label,
  hint,
  error,
  required = false,
  rows = 4,
  disabled = false,
  id,
  className = '',
  style,
  ...rest
}) {
  const uid = React.useId ? React.useId() : 'sh-ta';
  const inputId = id || uid;
  const shell = ['sh-control', 'sh-control--area', error && 'sh-control--invalid', disabled && 'sh-control--disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['sh-field', className].filter(Boolean).join(' '),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sh-field__label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: shell
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    className: "sh-control__input",
    disabled: disabled,
    "aria-invalid": error ? 'true' : undefined
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tabs{display:flex;align-items:stretch;gap:var(--space-8);border-bottom:1px solid var(--border-soft)}
.sh-tabs__item{position:relative;padding:0 0 14px;border:0;background:transparent;font-family:var(--font-sans);font-size:var(--fs-body-sm);font-weight:var(--fw-medium);letter-spacing:.005em;color:var(--text-muted);cursor:pointer;transition:color var(--dur-fast) var(--ease-standard)}
.sh-tabs__item:hover{color:var(--text-secondary)}
.sh-tabs__item[aria-selected="true"]{color:var(--text-strong)}
.sh-tabs__item::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;border-radius:2px;background:var(--gradient-spectrum);opacity:0;transform:scaleX(.4);transform-origin:left;transition:opacity var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)}
.sh-tabs__item[aria-selected="true"]::after{opacity:1;transform:none}
.sh-tabs__item:focus-visible{outline:none;box-shadow:var(--shadow-focus);border-radius:var(--radius-xs)}
.sh-tabs__count{margin-left:8px;font-family:var(--font-mono);font-size:11px;color:var(--text-faint)}
.sh-tabs--pill{gap:6px;border-bottom:0;padding:4px;background:var(--paper-3);border-radius:var(--radius-pill);display:inline-flex}
.sh-tabs--pill .sh-tabs__item{padding:8px 18px;border-radius:var(--radius-pill)}
.sh-tabs--pill .sh-tabs__item::after{display:none}
.sh-tabs--pill .sh-tabs__item[aria-selected="true"]{background:var(--surface-card);box-shadow:var(--shadow-1)}
.sh-tabs--inverse{border-bottom-color:var(--border-inverse)}
.sh-tabs--inverse .sh-tabs__item{color:var(--text-inverse-muted)}
.sh-tabs--inverse .sh-tabs__item[aria-selected="true"]{color:var(--text-inverse)}
`;
if (typeof document !== 'undefined' && !document.getElementById('sh-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'sh-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  const current = value !== undefined ? value : items[0] && (items[0].value ?? items[0]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['sh-tabs', variant !== 'underline' && 'sh-tabs--' + variant, className].filter(Boolean).join(' ')
  }, rest), items.map(it => {
    const v = it.value ?? it;
    const label = it.label ?? it;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      role: "tab",
      "aria-selected": v === current,
      className: "sh-tabs__item",
      onClick: () => onChange && onChange(v)
    }, label, it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      className: "sh-tabs__count"
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/AboutSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const FACTS = ['Предприниматель, в IT с 2012 года', 'Научила работать с ИИ больше 250 человек', 'Курировала внедрение CRM, разработку сайтов, SEO', 'Работала с крупными брендами и медийными персонами', 'Веду канал «ИИ на спокойном»'];
const T = 'assets/people/talks/';
/* превью кадрированы 3:2, по клику открывается целый кадр из full/ */
/* Отбор: восемь сильных кадров. Отсеяны тёмные, издалека и с перекрытым кадром
   (09, 13, 12, 16, 10) и второй групповой портрет (08) — дубль к 07. */
const SHOTS = ['talk-05.jpg', 'talk-11.jpg', 'talk-03.jpg', 'talk-17.jpg', 'talk-15.jpg', 'talk-07.jpg', 'talk-02.jpg', 'talk-14.jpg'];
const VENUES = ['Торгово-промышленная палата', 'Менеджер-клуб', 'HR-клуб', 'Дизайн-выходные', 'Ярославский колледж управления', 'Женский синдикат', '«Код легенды»', 'Академия красоты Larey', 'Супертур76', 'Креативный квартал «Фабрика КОРД»'];
function AboutSection() {
  const {
    FacetMark
  } = DS();
  const [shot, setShot] = React.useState(null);
  React.useEffect(() => {
    if (!shot) return;
    const esc = e => {
      if (e.key === 'Escape') setShot(null);
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [shot]);
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-stack__tile l-float",
    style: {
      position: 'relative',
      inset: 'auto',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/people/yulia-suit-v2.jpg",
    alt: "\u042E\u043B\u0438\u044F \u0428\u0430\u0431\u0430\u0448\u043E\u0432\u0430"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--sheen l-rise",
    "data-d": "2",
    style: {
      padding: 'clamp(28px,3.2vw,48px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u0431\u043E \u043C\u043D\u0435"), /*#__PURE__*/React.createElement("h2", {
    className: "l-display",
    style: {
      fontSize: 'clamp(28px,3.4vw,46px)'
    }
  }, "\u041F\u0435\u0440\u0435\u0432\u043E\u0436\u0443 \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, FACTS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 7,
      flex: '0 0 auto',
      width: 16,
      height: 1,
      background: 'var(--gold-base)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, f)))), /*#__PURE__*/React.createElement("p", {
    className: "l-display",
    style: {
      fontSize: 'clamp(22px,2.2vw,30px)',
      lineHeight: 1.18,
      maxWidth: '26ch'
    }
  }, "\u0421\u0443\u043F\u0435\u0440\u0441\u0438\u043B\u0430 \u2014 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0442\u044C ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u0441\u043B\u043E\u0436\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u043E")))), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    style: {
      marginTop: 'clamp(48px,6vw,88px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(20px,2.4vw,30px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u0413\u0434\u0435 \u043C\u0435\u043D\u044F \u0441\u043B\u0443\u0448\u0430\u043B\u0438")), /*#__PURE__*/React.createElement("ul", {
    className: "l-roster"
  }, VENUES.map(v => /*#__PURE__*/React.createElement("li", {
    key: v
  }, v))), /*#__PURE__*/React.createElement("div", {
    className: "l-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-strip__track"
  }, [...SHOTS, ...SHOTS].map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "l-frame",
    onClick: () => setShot(s),
    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0442\u043E"
  }, /*#__PURE__*/React.createElement("img", {
    src: T + s,
    alt: "",
    loading: "lazy"
  }))))))), shot ? /*#__PURE__*/React.createElement("div", {
    className: "l-lightbox",
    role: "dialog",
    "aria-modal": "true",
    onClick: () => setShot(null)
  }, /*#__PURE__*/React.createElement("figure", {
    className: "l-lightbox__frame",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("img", {
    src: T + 'full/' + shot,
    alt: "\u0424\u043E\u0442\u043E \u0441 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "l-lightbox__close",
    onClick: () => setShot(null),
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement(FacetMark, {
    name: "close",
    size: 16,
    tone: "ink"
  })))) : null);
}
Object.assign(window, {
  AboutSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Atmosphere.jsx
try { (() => {
/* Фон — не градиент, а преломление: поле складывается в тонкие каустические нити,
   как свет, прошедший сквозь грань льда. Нити считаются с высокой степенью (узкие и
   яркие), у каждой — хроматическая кайма: красный и синий каналы берутся со сдвигом
   фазы, отсюда дисперсия по краю блика. Считается на буфере 256×160 и растягивается. */
const RAMP = [[0.00, 252, 254, 255], [0.10, 236, 247, 252], [0.22, 210, 233, 245], [0.34, 183, 214, 234], [0.46, 162, 194, 221], [0.58, 158, 178, 210], [0.70, 178, 180, 212], [0.82, 205, 192, 210], [0.92, 229, 208, 205], [1.00, 250, 240, 232]];
function ramp(v) {
  if (v <= 0) return RAMP[0];
  if (v >= 1) return RAMP[RAMP.length - 1];
  for (let i = 1; i < RAMP.length; i++) {
    if (v <= RAMP[i][0]) {
      const a = RAMP[i - 1],
        b = RAMP[i];
      const k = (v - a[0]) / (b[0] - a[0]);
      return [a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k, a[3] + (b[3] - a[3]) * k];
    }
  }
  return RAMP[RAMP.length - 1];
}
function Atmosphere() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const W = 256,
      H = 160;
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext('2d', {
      alpha: false
    });
    const img = ctx.createImageData(W, H);
    const d = img.data;
    const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const draw = t => {
      let p = 0;
      for (let j = 0; j < H; j++) {
        const y = j / H;
        for (let i = 0; i < W; i++) {
          const x = i / W;
          /* поле: наложение волн + радиальная — даёт медленное перетекание без швов */
          let f = Math.sin(x * 2.4 + t) * 0.46 + Math.sin(y * 1.9 - t * 0.72) * 0.36 + Math.sin((x + y * 0.8) * 2.1 + t * 0.46) * 0.40 + Math.sin(Math.sqrt((x - 0.22) * (x - 0.22) + (y - 0.84) * (y - 0.84)) * 4.6 - t * 0.86) * 0.34
          /* вторая октава — облачность, а не одна большая волна */ + Math.sin(x * 6.1 - y * 4.7 + t * 1.3) * 0.15 + Math.sin(x * 4.3 + y * 5.6 - t * 1.05) * 0.13;
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
    if (still) {
      draw(0);
      return;
    }
    let raf = 0,
      last = 0,
      t0 = performance.now();
    const loop = now => {
      raf = requestAnimationFrame(loop);
      if (now - last < 42) return; /* ~24 к/с: течёт, но не греет машину */
      last = now;
      if (document.hidden) return;
      draw((now - t0) / 3600); /* нити текут заметно, но спокойно */
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "l-bg"
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    className: "l-bg-canvas",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "l-bg-caustic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "l-bg-veil"
  }));
}

/* Появление при скролле. Наблюдатель даёт мягкий стагger, а проход по скроллу
   добирает всё, что вьюпорт перепрыгнул (IO не присылает событие, если состояние
   элемента не менялось). */
function useReveal() {
  React.useEffect(() => {
    let pending = Array.prototype.slice.call(document.querySelectorAll('.l-rise'));
    const show = el => el.classList.add('is-in');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting || e.boundingClientRect.bottom < 0) {
          show(e.target);
          io.unobserve(e.target);
        }
      });
    }, {
      rootMargin: '-8% 0px -12% 0px'
    });
    pending.forEach(el => io.observe(el));
    let raf = 0;
    const sweep = () => {
      raf = 0;
      const limit = window.innerHeight * 0.94;
      const rest = [];
      for (const el of pending) {
        if (el.classList.contains('is-in')) continue;
        if (el.getBoundingClientRect().top < limit) {
          show(el);
          io.unobserve(el);
        } else rest.push(el);
      }
      pending = rest;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
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
    let cur = null,
      raf = 0,
      pt = null;
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
      if (panel !== cur) {
        clear();
        cur = panel;
        if (cur) cur.classList.add('is-lit');
      }
      if (!cur) return;
      const r = cur.getBoundingClientRect();
      const x = (pt.x - r.left) / r.width * 100;
      const y = (pt.y - r.top) / r.height * 100;
      cur.style.setProperty('--mx', x.toFixed(1) + '%');
      cur.style.setProperty('--my', y.toFixed(1) + '%');
      if (cur.classList.contains('l-tilt')) {
        cur.style.setProperty('--ry', ((x - 50) / 50 * 2.6).toFixed(2) + 'deg');
        cur.style.setProperty('--rx', (-((y - 50) / 50) * 2.2).toFixed(2) + 'deg');
      }
    };
    const onMove = e => {
      pt = {
        x: e.clientX,
        y: e.clientY
      };
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      pt = null;
      clear();
    };
    window.addEventListener('pointermove', onMove, {
      passive: true
    });
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
function Counter({
  to,
  suffix = '',
  duration = 1400
}) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setN(to);
    };
    if (el.getBoundingClientRect().bottom < 0) {
      finish();
      return;
    }
    /* IO не присылает событие, если элемент так и не стал видимым (прыжок по странице) */
    let raf = 0;
    const check = () => {
      raf = 0;
      if (done) return;
      if (el.getBoundingClientRect().bottom < 0) {
        finish();
        window.removeEventListener('scroll', onScroll);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting && e.boundingClientRect.bottom > 0) return;
      io.disconnect();
      if (!e.isIntersecting) {
        finish();
        return;
      }
      done = true;
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, {
      threshold: .4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n, suffix);
}

/* Рельс разделов справа — как в референсе */
const RAIL = [['top', 'Начало'], ['audience', 'Для кого'], ['about', 'Обо мне'], ['results', 'Результаты'], ['offer', 'Обучение'], ['cases', 'Кейсы'], ['reviews', 'Отзывы'], ['lead', 'Бесплатно'], ['faq', 'Вопросы']];
function Rail({
  onNav
}) {
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
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "l-rail l-glass l-glass--blur",
    "aria-label": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"
  }, RAIL.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    "aria-current": active === id,
    title: label
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, label))));
}
Object.assign(window, {
  Atmosphere,
  useReveal,
  useTactile,
  Counter,
  Rail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Atmosphere.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/AudienceSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const CASES = [['Вы руководите и видите, что команда тратит часы на то, что ИИ делает за минуты.'], ['Вы эксперт, и на вас висит весь контент, тексты и упаковка, а времени на это нет.'], ['Вы пробовали нейросети, получили в ответ ерунду и решили, что это не для вас.'], ['Вы думаете, что не разберётесь, потому что вы не технарь. Разберётесь.']];
function AudienceSection() {
  const {
    FacetMark
  } = DS();
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "audience",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(32px,4.4vw,60px)'
    }
  }, "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u0440\u043E \u0432\u0430\u0441 \u2014 \u0432\u044B \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443")), /*#__PURE__*/React.createElement("div", {
    className: "l-grid-2",
    style: {
      marginTop: 'clamp(32px,4vw,56px)'
    }
  }, CASES.map(([t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "l-glass l-tilt l-rise",
    "data-d": String(i % 2 + 1),
    style: {
      padding: 'clamp(26px,2.6vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(16px,1.4vw,18px)',
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--ink l-glass--keep-ink l-rise",
    style: {
      marginTop: 20,
      padding: 'clamp(24px,2.4vw,32px)',
      cursor: 'pointer'
    },
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--gold-light)'
    }
  }, "\u041A\u043E\u043C\u0443 \u044F \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0436\u0443"), /*#__PURE__*/React.createElement(FacetMark, {
    name: open ? 'minus' : 'plus',
    size: 20,
    tone: "light"
  })), /*#__PURE__*/React.createElement("div", {
    className: 'l-open' + (open ? ' is-open' : '')
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-inverse-muted)',
      maxWidth: '74ch'
    }
  }, "\u041A\u0440\u0443\u043F\u043D\u043E\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443, \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u2014 \u044D\u0442\u043E \u043D\u0435 \u043A\u043E \u043C\u043D\u0435. \u0418 \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0434\u0430\u0451\u0442\u0441\u044F \u0442\u044F\u0436\u0435\u043B\u043E: \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0418\u0418 \u043D\u0443\u0436\u043D\u0430 \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u2014 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435, \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438 \u043F\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438."))))));
}
Object.assign(window, {
  AudienceSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/AudienceSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CasePost.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const POSTS = {
  digest: {
    tag: 'Личный инструмент',
    title: ['Дайджест новостей', 'который собирается сам'],
    lead: 'Система всю неделю собирает ИИ-новости на почту, а раз в неделю сама сводит их в готовый черновик дайджеста и присылает в Telegram.',
    blocks: [['Задача', 'ray', 'Собрать недельный дайджест руками — это каждый день обойти источники, отобрать важное, свести в читаемый вид. Час утром впустую. А готовые агрегаторы дают шум, а не суть.'], ['Что собрала', 'planes', 'Два звена. Ежедневный агент обходит источники и присылает выжимку на почту. Раз в неделю система читает эти письма за пн–вс, смотрит, что уже выходило в канале, убирает повторы и собирает блок «Ранее на канале». Дальше дедуплицирует новости, отбирает 30–35 пунктов по правилам канала, формулирует живым языком, группирует в блоки и присылает готовый черновик в приватный Telegram-канал.'], ['Результат', 'grain', 'Черновик приходит собранным: 30–35 отобранных пунктов по блокам, с живыми формулировками и вшитыми ссылками. Остаётся отобрать лучшие двадцать и поправить акценты — минуты вместо часа.'], ['На чём сделано', 'cluster', 'Еженедельная сборка — на Claude по подробному ТЗ и файлам-правилам. Чтение писем из Gmail, отправка через Telegram Bot API, автосбор первоисточников, правила и память в Dropbox. Тон и запреты вшиты в ТЗ: не больше одной-двух финансовых новостей и до четырёх курьёзов на выпуск.']],
    steps: ['Агент обходит источники и присылает выжимку на почту', 'Раз в неделю система читает письма за пн–вс', 'Убирает повторы, собирает блок «Ранее на канале»', 'Отбирает 30–35 пунктов и формулирует живым языком', 'Присылает готовый черновик в Telegram'],
    slots: [['digest-1', 'Черновик поста в Telegram'], ['digest-2', 'Канал @stpnv_ai']]
  },
  wardrobe: {
    tag: 'Личный инструмент',
    title: ['Гардероб', 'который сам собирает образы'],
    lead: 'Система из фотографий вещей собирает каталог гардероба и сама генерирует коллажи-образы — включая отдельный набор для собачника.',
    blocks: [['Задача', 'ray', 'Собрать образы из большого гардероба руками долго: держать в голове, что с чем сочетается, что уже есть, а что надо докупить, и каждый раз вручную сводить вещи в картинку.'], ['Что собрала', 'planes', 'Кидаешь фото вещи с прозрачным фоном в папку — система распознаёт её, предлагает код и описание, после подтверждения вносит в каталог. В таблице образов набираешь лук из кодов, скрипт собирает из этих вещей коллаж на бежевом фоне: портрет, верх и низ, обувь, сумка, украшения — всё разложено по правилам стиля. Для собачьих образов — отдельная изолированная логика, чтобы собачья одежда не путалась с основным гардеробом.'], ['Результат', 'grain', 'Готовые луки складываются в папку — отдельно обычные, отдельно для собачника. Сборка образа из набора кодов занимает секунды, каталог всегда актуален, а плейсхолдеры «докупить» показывают, чего не хватает.'], ['На чём сделано', 'cluster', 'Python-скрипты сборки коллажей и каталога плюс Claude для распознавания фото и ведения каталога. CSV-каталоги вещей, украшений и образов, PNG с прозрачным фоном, рендер на Pillow, синхронизация через Dropbox. Правила раскладки — силуэт, размеры, расположение аксессуаров — зашиты в скрипт.']],
    steps: ['Кидаешь фото вещи в папку', 'Система распознаёт её и предлагает код', 'После подтверждения вещь попадает в каталог', 'В таблице образов набираешь лук из кодов', 'Скрипт собирает коллаж и кладёт в папку'],
    cover: 'assets/cases/wardrobe-cover.jpg',
    slots: [['wardrobe-1', 'Готовый коллаж-образ'], ['wardrobe-2', 'Каталог вещей']]
  }
};
function CasePost({
  id,
  onLead
}) {
  const {
    Button,
    FacetMark
  } = DS();
  const p = POSTS[id];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "l-section",
    style: {
      paddingTop: 164
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("a", {
    href: "cases.html",
    className: "l-underline l-rise",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'var(--gold-base)'
    }
  }), "\u0412\u0441\u0435 \u043A\u0435\u0439\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, p.tag), /*#__PURE__*/React.createElement("h1", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(34px,5vw,68px)',
      maxWidth: '18ch'
    }
  }, p.title[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, p.title[1])), /*#__PURE__*/React.createElement("p", {
    className: "l-lead l-rise",
    "data-d": "2",
    style: {
      maxWidth: '48ch'
    }
  }, p.lead)), p.cover ? /*#__PURE__*/React.createElement("div", {
    className: "l-stack__tile l-rise",
    "data-d": "3",
    style: {
      position: 'relative',
      inset: 'auto',
      aspectRatio: '3/2',
      marginTop: 'clamp(28px,3.4vw,44px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.cover,
    alt: ""
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "l-rise l-grid-2",
    "data-d": "3",
    style: {
      marginTop: 'clamp(14px,1.6vw,20px)'
    }
  }, p.slots.map(([sid, label]) => /*#__PURE__*/React.createElement("div", {
    key: sid,
    className: "l-stack__tile",
    style: {
      position: 'relative',
      inset: 'auto',
      aspectRatio: '4/3',
      borderRadius: 22
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: sid,
    shape: "rect",
    placeholder: label
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(14px,1.6vw,20px)'
    }
  }, p.blocks.map(([title, mark, text], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    className: "l-glass l-rise",
    "data-d": String(i % 4 + 1),
    style: {
      padding: 'clamp(24px,2.6vw,38px)',
      display: 'grid',
      gap: 'clamp(14px,1.6vw,20px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(20px,2vw,27px)',
      lineHeight: 1.16
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.68,
      color: 'var(--text-body)',
      maxWidth: '62ch'
    }
  }, text))))), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--sheen l-rise",
    style: {
      marginTop: 'clamp(14px,1.6vw,20px)',
      padding: 'clamp(24px,2.6vw,38px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-gold)'
    }
  }, "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043F\u043E \u0448\u0430\u0433\u0430\u043C"), /*#__PURE__*/React.createElement("ol", {
    className: "l-steps"
  }, p.steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-steps__n"
  }, i + 1), /*#__PURE__*/React.createElement("span", null, s))))), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--ink l-glass--sheen l-rise",
    style: {
      marginTop: 'clamp(24px,3vw,44px)',
      padding: 'clamp(30px,3.6vw,52px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "l-display",
    style: {
      fontSize: 'clamp(24px,2.8vw,38px)',
      color: 'var(--paper-1)',
      maxWidth: '22ch',
      margin: 0
    }
  }, "\u0422\u0430\u043A\u043E\u0435 \u044F \u043C\u043E\u0433\u0443 \u0441\u043E\u0431\u0440\u0430\u0442\u044C ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic",
    style: {
      color: 'var(--gold-light)'
    }
  }, "\u0438 \u0432\u0430\u043C")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--text-inverse-muted)',
      maxWidth: '46ch'
    }
  }, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u2014 \u043E\u0431\u0441\u0443\u0434\u0438\u043C \u0444\u043E\u0440\u043C\u0430\u0442, \u0441\u0440\u043E\u043A\u0438 \u0438 \u0447\u0442\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0438\u043C\u0435\u0435\u0442 \u0441\u043C\u044B\u0441\u043B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: onLead,
    style: {
      alignSelf: 'flex-start',
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 15,
      tone: "current"
    })
  }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443")))));
}
Object.assign(window, {
  CasePost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CasePost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CasesPage.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const CASES = [['Дайджест новостей', 'Всю неделю собирает ИИ-новости на почту, а раз в неделю присылает готовый черновик в Telegram.', 'grain', 'case-digest.html'], ['Работа с гардеробом', 'Распознаёт вещи по фото, ведёт каталог и сама собирает коллажи-образы.', 'cluster', 'case-wardrobe.html'], ['Бот для личных финансов', 'Ведёт учёт расходов и показывает картину по деньгам.', 'orbit', ''], ['Бот для управления личной энергией', 'Помогает следить за нагрузкой и не выгорать.', 'ray', ''], ['«Вселенная дома»', 'Лендинг и бот, который проводит по трём шагам к дому мечты.', 'facetCut', ''], ['Этот сайт', 'yuliashabashova.ru тоже собран с ИИ — вы смотрите пример прямо сейчас.', 'dispersion', '']];
function CasesHero() {
  const {
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "l-section",
    style: {
      paddingTop: 168
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-split",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u041A\u0435\u0439\u0441\u044B"), /*#__PURE__*/React.createElement("h1", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(38px,5.4vw,76px)'
    }
  }, "\u0427\u0442\u043E \u044F \u0441\u043E\u0431\u0438\u0440\u0430\u044E ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u0441 \u0418\u0418")), /*#__PURE__*/React.createElement("p", {
    className: "l-lead l-rise",
    "data-d": "2",
    style: {
      maxWidth: '46ch'
    }
  }, "\u042F \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0447\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0418\u0418, \u043D\u043E \u0438 \u0441\u0430\u043C\u0430 \u043D\u0430 \u043D\u0451\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u044E: \u0441\u0430\u0439\u0442\u044B, Telegram-\u0431\u043E\u0442\u044B, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u043C\u0435\u043B\u043A\u043E\u0439 \u0440\u0443\u0442\u0438\u043D\u044B."), /*#__PURE__*/React.createElement("p", {
    className: "l-body l-rise",
    "data-d": "3",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, "\u0427\u0430\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435 \u043C\u043E\u0433\u0443 \u2014 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0441\u0434\u0435\u043B\u0430\u043D \u043D\u0430 \u0418\u0418. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u043A\u0430\u0436\u0443 \u0442\u043E, \u0447\u0442\u043E \u0441\u043E\u0431\u0440\u0430\u043B\u0430 \u0434\u043B\u044F \u0441\u0435\u0431\u044F. \u041F\u043E \u044D\u0442\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u043C \u0432\u0438\u0434\u043D\u043E, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438 \u0432\u0430\u043C.")), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    "data-d": "2",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-stack__tile l-float",
    style: {
      position: 'relative',
      inset: 'auto',
      aspectRatio: '4/3',
      borderRadius: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/imagery/prism-crystal.png",
    alt: "\u041F\u0440\u0438\u0437\u043C\u0430 \u0432 \u043F\u043E\u0442\u043E\u043A\u0435 \u0441\u0432\u0435\u0442\u0430"
  })), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--blur l-float l-float--c",
    style: {
      position: 'absolute',
      left: '4%',
      bottom: '-6%',
      padding: '14px 22px',
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u0421\u043E\u0431\u0440\u0430\u043D\u043E \u0440\u0443\u043A\u0430\u043C\u0438 \u0438 \u0418\u0418"))))));
}
function CasesGrid() {
  const {
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "list",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-grid-2",
    style: {
      gap: 'clamp(14px,1.6vw,20px)'
    }
  }, CASES.map(([title, lead, mark, href], i) => {
    const Tag = href ? 'a' : 'div';
    return /*#__PURE__*/React.createElement(Tag, {
      key: title,
      href: href || undefined,
      className: 'l-glass l-rise l-casecard' + (href ? '' : ' is-soon'),
      "data-d": String(i % 4 + 1)
    }, /*#__PURE__*/React.createElement("span", {
      className: "l-casecard__cover"
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/cases/wardrobe-cover.jpg",
      alt: "",
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("span", {
      className: "l-display",
      style: {
        fontSize: 'clamp(20px,2.1vw,28px)',
        lineHeight: 1.14
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-secondary)'
      }
    }, lead), /*#__PURE__*/React.createElement("span", {
      className: "l-casecard__go"
    }, href ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "l-tag"
    }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0435\u0439\u0441"), /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 15
    })) : /*#__PURE__*/React.createElement("span", {
      className: "l-tag",
      style: {
        color: 'var(--text-faint)'
      }
    }, "\u0421\u043A\u043E\u0440\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443")));
  }))));
}
function CasesCta({
  onLead
}) {
  const {
    Button,
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "order",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--sheen l-rise",
    style: {
      padding: 'clamp(30px,3.6vw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u041F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443")), /*#__PURE__*/React.createElement("h2", {
    className: "l-display",
    style: {
      fontSize: 'clamp(28px,3.6vw,48px)',
      maxWidth: '20ch'
    }
  }, "\u0427\u0442\u043E \u044F \u043C\u043E\u0433\u0443 ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0432\u0430\u043C")), /*#__PURE__*/React.createElement("div", {
    className: "l-split",
    style: {
      gap: 'clamp(24px,3vw,48px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '46ch',
      margin: 0
    }
  }, "\u041F\u043E \u0442\u0435\u043C \u0436\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C \u0434\u0435\u043B\u0430\u044E \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443:"), ['Telegram-бот под вашу задачу', 'Автоматизацию повторяющейся рутины', 'Сайт или лендинг'].map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 9,
      width: 16,
      height: 1,
      background: 'var(--gold-base)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    className: "l-glass",
    style: {
      padding: 'clamp(20px,2.2vw,28px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u0427\u0435\u0441\u0442\u043D\u043E \u043F\u0440\u043E \u0440\u0430\u043C\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--text-body)'
    }
  }, "\u0411\u0435\u0440\u0443 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438. \u0421\u043B\u043E\u0436\u043D\u0443\u044E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0432 \u043A\u0440\u0443\u043F\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043D\u0435 \u0432\u0435\u0434\u0443 \u2014 \u044D\u0442\u043E \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C. \u0410 \u0435\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u0441\u0430\u043C\u0438, \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u043C \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onLead,
    style: {
      alignSelf: 'flex-start',
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 16,
      tone: "current"
    })
  }, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0444\u043E\u0440\u043C\u0430\u0442 \u0438 \u0441\u0440\u043E\u043A\u0438, \u0446\u0435\u043D\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0437\u0430\u0434\u0430\u0447\u0438.")))));
}
Object.assign(window, {
  CasesHero,
  CasesGrid,
  CasesCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CasesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CasesTeaser.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
function CasesTeaser() {
  const {
    Button,
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "cases",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--sheen l-rise",
    style: {
      padding: 'clamp(30px,3.6vw,56px)',
      display: 'grid',
      gap: 'clamp(24px,3vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("h2", {
    className: "l-display",
    style: {
      fontSize: 'clamp(28px,3.6vw,48px)',
      maxWidth: '18ch'
    }
  }, "\u041D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0447\u0443 \u2014 \u0441\u043E\u0431\u0438\u0440\u0430\u044E \u0441\u0430\u043C\u0430"), /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, "\u0421\u0430\u0439\u0442\u044B, Telegram-\u0431\u043E\u0442\u044B, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u043C\u0435\u043B\u043A\u043E\u0439 \u0440\u0443\u0442\u0438\u043D\u044B. \u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0442\u043E\u0436\u0435 \u0441\u043E\u0431\u0440\u0430\u043D \u0441 \u0418\u0418 \u2014 \u0432\u044B \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440. \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0432 \u043A\u0435\u0439\u0441\u044B: \u0442\u0430\u043C \u0432\u0438\u0434\u043D\u043E, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "cases.html",
    style: {
      alignSelf: 'flex-start',
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 16,
      tone: "current"
    })
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0435\u0439\u0441\u044B")))));
}
Object.assign(window, {
  CasesTeaser
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CasesTeaser.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CoursesPage.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const CT = 'assets/people/talks/';
const COURSES = [{
  id: 'week',
  name: 'ИИ за неделю',
  sub: 'от новичка до уверенного пользователя',
  who: 'для тех, кто не технарь, но хочет разобраться',
  format: '5 понятных уроков в Telegram по 5–10 минут плюс вводный урок для новичков',
  inside: ['Как работает ИИ простым языком и что из него работает в России', 'Как построить запрос, чтобы получать результат, а не отписку', 'Какой сервис выбрать под задачу: ChatGPT, Claude, Gemini, DeepSeek, Алиса, ГигаЧат', 'Генерация контента: картинки, презентация за 5 минут, озвучка, видео, цифровой аватар', 'Умный поиск и работа с вашими файлами', 'Как встроить ИИ в жизнь и с чего начать'],
  out: 'Навык общения с ИИ, готовые визуалы без дизайнера, шаблоны для работы и дома, проверенный список сервисов и спокойное «я умею».',
  plus: 'PDF-конспекты, библиотека промптов копируй-вставляй, все ссылки, 20+ готовых промптов бонусом.',
  when: 'Первый урок придёт сразу после оплаты.',
  was: '3 900 ₽',
  now: '990 ₽',
  rating: 'Средняя оценка курса — 9 из 10 по опросам учеников.',
  cta: 'Пройти за 990 ₽',
  mark: 'grain',
  slot: 'course-week',
  cover: 'assets/imagery/course-week-preview.jpg'
}, {
  id: 'expert',
  name: 'ИИ для эксперта',
  sub: 'от хаоса в голове к чёткой стратегии',
  who: 'для тех, кто уже работает с ИИ и хочет продавать свою экспертность',
  format: 'практикум на 2–3 часа, проходится за вечер',
  inside: ['Видео-настройка: зачем эксперту ИИ', 'Готовые промпты под задачу', 'Бот-методолог, который сам соберёт вам продуктовую линейку с ценами'],
  out: 'Ясное позиционирование без самозванца, карта аудитории с болями и желаниями, продуктовая линейка от лид-магнита до флагмана, контент-план с темами и продающими текстами, понимание, как расти дальше по шагам.',
  plus: 'За один вечер сделаете то, что откладывали годами: разложите, кто вы и зачем людям, придумаете продукт, который купят, получите контент на месяц вперёд.',
  when: 'Ссылка на вход придёт сразу после оплаты.',
  was: '5 900 ₽',
  now: '1 900 ₽',
  rating: '',
  cta: 'Собрать стратегию за 1 900 ₽',
  mark: 'planes',
  slot: 'course-expert'
}];
const NAV = [['Только пробуете ИИ', 'вам «ИИ за неделю»', 'week'], ['Уже работаете с ИИ и хотите продавать экспертность', 'вам «ИИ для эксперта»', 'expert'], ['Не уверены', 'пройдите оба по порядку — они дополняют друг друга', 'week']];
const QA = [['Я совсем новичок, будет понятно?', 'Да. «ИИ за неделю» с нуля: куда зайти, что написать. Технических знаний не нужно.'], ['У меня Mac, Windows или телефон — подойдёт?', 'Да. ИИ работает через браузер на любом устройстве.'], ['Сколько времени займёт?', 'Базовый курс — уроки по 5–10 минут, проходится за выходные. Практикум для эксперта — вечер.'], ['Материалы останутся у меня?', 'Да, всё хранится в Telegram, возвращаетесь когда угодно.'], ['Чем курсы отличаются?', '«ИИ за неделю» даёт базу для всех. «ИИ для эксперта» — для тех, кто уже работает с ИИ и хочет упаковать и продавать экспертность.'], ['Как вернуть деньги, если не будет результата?', 'Пройдите все уроки. Если результата нет — напишите мне, верну 100% оплаты. Условия возврата описаны в оферте.']];
function CoursesHero({
  onGo
}) {
  const {
    Button,
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "l-section",
    style: {
      paddingTop: 164
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-split",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u041A\u0443\u0440\u0441\u044B \xB7 \u043E\u0442 990 \u20BD"), /*#__PURE__*/React.createElement("h1", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(36px,5vw,72px)'
    }
  }, "\u041A\u0443\u0440\u0441\u044B \u043F\u043E \u0418\u0418 \u2014 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0434\u043E \u0441\u0432\u043E\u0435\u0439 ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u043E\u0439 \u043B\u0438\u043D\u0435\u0439\u043A\u0438")), /*#__PURE__*/React.createElement("p", {
    className: "l-lead l-rise",
    "data-d": "2",
    style: {
      maxWidth: '44ch'
    }
  }, "\u0414\u0432\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0430 \u043D\u0430 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435. \u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0430\u0437\u043E\u0432 \u0438\u043B\u0438 \u0441\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430 \u0437\u0430 \u0432\u0435\u0447\u0435\u0440."), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    "data-d": "3",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onGo('week'),
    style: {
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 16,
      tone: "current"
    })
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0441 \u0430\u0437\u043E\u0432 \u2014 990 \u20BD"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onGo('expert'),
    style: {
      borderRadius: 999
    }
  }, "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C \u0434\u043B\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--blur l-rise",
    "data-d": "4",
    style: {
      padding: '18px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(18px,3vw,38px)',
      borderRadius: 20
    }
  }, [['9 из 10', 'средняя оценка'], ['250+', 'учеников'], ['100%', 'возврат, если без результата']].map(([b, s]) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 26,
      lineHeight: 1
    }
  }, b), /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    "data-d": "2",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-stack__tile l-float",
    style: {
      position: 'relative',
      inset: 'auto',
      aspectRatio: '4/5',
      maxHeight: 560,
      marginLeft: 'auto',
      borderRadius: 26
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "courses-hero",
    shape: "rect",
    placeholder: "\u0424\u043E\u0442\u043E: \u0432\u044B \u043D\u0430 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0438 \u0438\u043B\u0438 \u0437\u0430 \u0440\u0430\u0431\u043E\u0442\u043E\u0439"
  })), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--blur l-float l-float--c",
    style: {
      position: 'absolute',
      left: '-4%',
      bottom: '10%',
      padding: '14px 22px',
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0443\u0440\u043E\u043A \u2014 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B"))))));
}
function CoursesNav({
  onGo
}) {
  const {
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u0421 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "l-grid-3"
  }, NAV.map(([q, a, go], i) => /*#__PURE__*/React.createElement("button", {
    key: q,
    type: "button",
    onClick: () => onGo(go),
    className: "l-glass l-rise l-navcard",
    "data-d": String(i + 1)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, q, " \u2014"), /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(19px,1.9vw,24px)',
      lineHeight: 1.18
    }
  }, a))))));
}
function CourseCard({
  c,
  onLead
}) {
  const {
    Button,
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("article", {
    id: c.id,
    className: "l-glass l-glass--sheen l-rise l-course"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-course__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-course__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, c.who), /*#__PURE__*/React.createElement("h2", {
    className: "l-display",
    style: {
      fontSize: 'clamp(30px,3.6vw,50px)',
      lineHeight: 1.04
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "l-italic",
    style: {
      fontSize: 'clamp(18px,1.9vw,25px)',
      color: 'var(--text-muted)'
    }
  }, c.sub), /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      margin: '6px 0 0',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, c.format)), /*#__PURE__*/React.createElement("div", {
    className: "l-course__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-gold)'
    }
  }, "\u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438"), /*#__PURE__*/React.createElement("ul", {
    className: "l-course__list"
  }, c.inside.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-course__dash"
  }), /*#__PURE__*/React.createElement("span", null, b))))), /*#__PURE__*/React.createElement("div", {
    className: "l-course__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-gold)'
    }
  }, "\u0421 \u0447\u0435\u043C \u0443\u0439\u0434\u0451\u0442\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--text-body)',
      maxWidth: '80ch'
    }
  }, c.out)), /*#__PURE__*/React.createElement("div", {
    className: "l-course__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-gold)'
    }
  }, "\u041F\u043B\u044E\u0441"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      maxWidth: '84ch'
    }
  }, c.plus)), /*#__PURE__*/React.createElement("div", {
    className: "l-course__foot"
  }, c.cover ? /*#__PURE__*/React.createElement("figure", {
    className: "l-peek"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.cover,
    alt: 'Кадры из уроков курса «' + c.name + '»'
  }), /*#__PURE__*/React.createElement("figcaption", null, "\u0422\u0430\u043A \u0432\u044B\u0433\u043B\u044F\u0434\u044F\u0442 \u0443\u0440\u043E\u043A\u0438")) : /*#__PURE__*/React.createElement("div", {
    className: "l-peek l-peek--empty"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: c.slot,
    shape: "rect",
    placeholder: "\u041A\u0430\u0434\u0440\u044B \u0438\u0437 \u0443\u0440\u043E\u043A\u043E\u0432"
  })), /*#__PURE__*/React.createElement("div", {
    className: "l-course__buy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-price-was"
  }, c.was), /*#__PURE__*/React.createElement("span", {
    className: "l-price-now"
  }, c.now)), c.rating ? /*#__PURE__*/React.createElement("span", {
    className: "l-course__note"
  }, c.rating) : null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onLead,
    style: {
      borderRadius: 999,
      alignSelf: 'flex-start',
      marginTop: 4
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 16,
      tone: "current"
    })
  }, c.cta), /*#__PURE__*/React.createElement("span", {
    className: "l-course__note"
  }, "\u041F\u0440\u043E\u0439\u0434\u0451\u0442\u0435 \u0432\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u0431\u0435\u0437 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u2014 \u0432\u0435\u0440\u043D\u0443 100% \u043E\u043F\u043B\u0430\u0442\u044B. ", c.when)))));
}
function CoursesList({
  onLead
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "list",
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(18px,2.2vw,28px)'
    }
  }, COURSES.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    c: c,
    onLead: onLead
  }))));
}
function CoursesSoon() {
  const {
    Button,
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-rise",
    style: {
      padding: 'clamp(26px,3vw,44px)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      borderStyle: 'dashed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: '48ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(22px,2.4vw,32px)'
    }
  }, "\u0421\u043A\u043E\u0440\u043E \u0431\u043E\u043B\u044C\u0448\u0435")), /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      margin: 0,
      color: 'var(--text-secondary)'
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u043B\u044E \u043D\u043E\u0432\u044B\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u044B, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \xAB\u0418\u0418 \u0434\u043B\u044F \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\xBB. \u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043A\u0430\u043D\u0430\u043B \u2014 \u0442\u0430\u043C \u0430\u043D\u043E\u043D\u0441\u044B \u043F\u0435\u0440\u0432\u044B\u043C\u0438.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {},
    style: {
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrowUp",
      size: 15,
      tone: "current"
    })
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u0430\u043D\u0430\u043B"))));
}
function CoursesGuarantee() {
  const {
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--ink l-glass--sheen l-rise",
    style: {
      padding: 'clamp(30px,4vw,60px)',
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr)',
      gap: 'clamp(20px,3vw,40px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(FacetMark, {
    name: "checkRing",
    size: 40,
    tone: "light",
    strokeWidth: .85
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(26px,3vw,40px)',
      color: 'var(--paper-1)'
    }
  }, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16.5,
      lineHeight: 1.62,
      color: 'var(--text-inverse-muted)',
      maxWidth: '52ch'
    }
  }, "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0443\u0440\u043E\u043A\u0438. \u0415\u0441\u043B\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u2014 \u0432\u0435\u0440\u043D\u0443 100% \u043E\u043F\u043B\u0430\u0442\u044B. \u0421\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435: \u0432\u044B \u043D\u0438\u0447\u0435\u043C \u043D\u0435 \u0440\u0438\u0441\u043A\u0443\u0435\u0442\u0435.")))));
}
function CoursesQuote() {
  return /*#__PURE__*/React.createElement("section", {
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--gold l-rise",
    style: {
      padding: 'clamp(32px,4vw,64px)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "l-display",
    style: {
      fontSize: 'clamp(26px,3.8vw,54px)',
      maxWidth: '20ch',
      margin: 0
    }
  }, "\xAB\u0420\u0430\u0431\u043E\u0442\u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u0431\u0435\u0437 \u0418\u0418 \u0443\u0436\u0435 \u043D\u0435 \u0442\u0430 \u0438 ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0436\u043D\u0435\u0439"), "\xBB"), /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u0422\u043E\u0440\u0433\u043E\u0432\u043E-\u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043B\u0430\u0442\u0430 \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"))));
}
function CoursesFaq() {
  const {
    FacetMark
  } = DS();
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u0412\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0432\u0435\u0442")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, QA.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      className: "l-glass l-rise",
      "data-d": String(i % 4 + 1),
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'clamp(18px,2vw,26px)',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(15.5px,1.5vw,17.5px)',
        fontWeight: 500,
        color: 'var(--ink-900)'
      }
    }, q), /*#__PURE__*/React.createElement(FacetMark, {
      name: isOpen ? 'minus' : 'plus',
      size: 19,
      tone: "ink"
    })), /*#__PURE__*/React.createElement("div", {
      className: 'l-open' + (isOpen ? ' is-open' : '')
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 clamp(18px,2vw,26px) clamp(20px,2vw,26px)',
        fontFamily: 'var(--font-sans)',
        fontSize: 15.5,
        lineHeight: 1.66,
        color: 'var(--text-secondary)',
        maxWidth: '62ch'
      }
    }, a))));
  }))));
}
function CoursesPersonal() {
  const {
    FacetMark
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    className: "l-section",
    style: {
      paddingTop: 'clamp(26px,3.2vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-rise",
    style: {
      padding: 'clamp(22px,2.4vw,34px)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxWidth: '56ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(18px,1.9vw,24px)'
    }
  }, "\u041D\u0443\u0436\u0435\u043D \u0440\u0430\u0437\u0431\u043E\u0440 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u0434\u0430\u0447, \u0430 \u043D\u0435 \u043E\u0431\u0449\u0438\u0439 \u043A\u0443\u0440\u0441?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "\u041F\u0440\u043E\u0432\u043E\u0436\u0443 \u043B\u0438\u0447\u043D\u044B\u0435 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438: \u0441\u043C\u043E\u0442\u0440\u044E \u0432\u0430\u0448\u0443 \u0440\u0430\u0431\u043E\u0442\u0443 \u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E, \u0447\u0442\u043E \u0438 \u043A\u0430\u043A \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u044C \u0441 \u0418\u0418.")), /*#__PURE__*/React.createElement("a", {
    className: "l-underline",
    href: "index.html#offer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, "\u041F\u0440\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438", /*#__PURE__*/React.createElement(FacetMark, {
    name: "arrow",
    size: 15
  })))));
}
Object.assign(window, {
  CoursesHero,
  CoursesNav,
  CoursesList,
  CoursesSoon,
  CoursesGuarantee,
  CoursesQuote,
  CoursesFaq,
  CoursesPersonal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CoursesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/FaqSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const QA = [['Я совсем новичок, разберусь?', 'Да. Я объясняю с нуля и на понятном языке. Если справляетесь с телефоном и почтой — этого достаточно, чтобы начать.'], ['За нейросети надо платить? И что из них работает в России?', 'Часть инструментов бесплатные, часть платные. На курсах и консультациях показываю, что работает из России и как это настроить.'], ['Сколько времени это займёт?', 'Базовый курс — несколько вечеров. Консультация — полтора часа. Дальше вы работаете сами.'], ['Чем консультация отличается от курса?', 'Курс — общая база для всех. Консультация — про ваши задачи: я смотрю вашу работу и показываю, что и как упростить.'], ['Мне некогда разбираться самой, но нужна автоматизация простой повторяющейся рутины. Это можно заказать у вас?', 'Да, небольшие задачи беру. Загляните в кейсы — там примеры того, что я собираю с ИИ. Расскажете свою задачу, обсудим.', 'cases.html'], ['Как оплатить и получить доступ?', 'Курсы — картой на сайте, ссылку на материалы пришлю после оплаты. Консультации и обучение — картой или по счёту на реквизиты ИП.']];
function FaqSection({
  onLead
}) {
  const {
    Button,
    FacetMark
  } = DS();
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-split",
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      position: 'sticky',
      top: 120
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u0412\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0432\u0435\u0442"), /*#__PURE__*/React.createElement("h2", {
    className: "l-display",
    style: {
      fontSize: 'clamp(30px,3.8vw,52px)'
    }
  }, "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0442\u043E, \u0447\u0442\u043E \u043D\u0435\u0443\u0434\u043E\u0431\u043D\u043E"), /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '32ch'
    }
  }, "\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u0442 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Telegram, \u043E\u0442\u0432\u0435\u0447\u0430\u044E \u0441\u0430\u043C\u0430."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onLead,
    style: {
      alignSelf: 'flex-start',
      borderRadius: 999
    }
  }, "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, QA.map(([q, a, link], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      className: "l-glass l-faq-bare l-rise",
      "data-d": String(i % 4 + 1),
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'clamp(20px,2.2vw,26px) 2px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(16px,1.5vw,18px)',
        fontWeight: 500,
        letterSpacing: '-.008em',
        color: 'var(--ink-900)'
      }
    }, q), /*#__PURE__*/React.createElement(FacetMark, {
      name: isOpen ? 'minus' : 'plus',
      size: 20,
      tone: "ink"
    })), /*#__PURE__*/React.createElement("div", {
      className: 'l-open' + (isOpen ? ' is-open' : '')
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 40px clamp(22px,2.2vw,28px) 2px',
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        lineHeight: 1.68,
        color: 'var(--text-secondary)',
        maxWidth: '62ch'
      }
    }, a, link ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("a", {
      className: "l-underline",
      href: link,
      style: {
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0435\u0439\u0441\u044B")) : null))));
  })))));
}
Object.assign(window, {
  FaqSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/FaqSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/HeroSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
function HeroSection({
  onLead,
  onNav
}) {
  const {
    Button,
    FacetMark
  } = DS();
  const wrap = React.useRef(null);
  const [p, setP] = React.useState({
    x: 0,
    y: 0
  });
  React.useEffect(() => {
    const onMove = e => {
      const r = wrap.current && wrap.current.getBoundingClientRect();
      if (!r) return;
      setP({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height
      });
    };
    window.addEventListener('pointermove', onMove, {
      passive: true
    });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  const par = k => ({
    transform: `translate3d(${p.x * k}px, ${p.y * k}px, 0)`
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    ref: wrap,
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 120,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0418\u0418 \xB7 \u0432 IT \u0441 2012 \u0433\u043E\u0434\u0430"), /*#__PURE__*/React.createElement("h1", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(44px,6.2vw,92px)'
    }
  }, "\u0423\u0447\u0443 \u0431\u0438\u0437\u043D\u0435\u0441", /*#__PURE__*/React.createElement("br", null), "\u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432", /*#__PURE__*/React.createElement("br", null), "\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0418\u0418 ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E")), /*#__PURE__*/React.createElement("p", {
    className: "l-lead l-rise",
    "data-d": "2",
    style: {
      maxWidth: '42ch'
    }
  }, "\u0421 \u043D\u0443\u043B\u044F, \u043F\u043E \u0448\u0430\u0433\u0430\u043C, \u0431\u0435\u0437 \u0433\u043E\u043D\u043A\u0438 \u0437\u0430 \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    "data-d": "3",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onLead,
    style: {
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 16,
      tone: "current"
    })
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "kursy.html"
  }, "\u041A\u0443\u0440\u0441\u044B \u043E\u0442 990 \u20BD")), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--blur l-rise",
    "data-d": "4",
    style: {
      marginTop: 10,
      padding: '22px 26px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
      gap: 22,
      borderRadius: 22
    }
  }, [['обучила', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Counter, {
    to: 250,
    suffix: "+"
  }), " \u0447\u0435\u043B\u043E\u0432\u0435\u043A"), 30], ['в IT с', '2012 года', 30], ['выступала для', 'ЯрТПП · Дизайн-выходные', 22]].map(([small, big, fs], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, small), /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: fs,
      lineHeight: 1.12
    }
  }, big)))), /*#__PURE__*/React.createElement("div", {
    className: "l-scrollcue l-rise",
    "data-d": "4",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "l-stack l-rise",
    "data-d": "2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-stack__tile l-float",
    style: {
      inset: '0% 32% 14% 0%',
      ...par(14)
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/people/yulia-hero-v5.jpg",
    alt: "\u042E\u043B\u0438\u044F \u0428\u0430\u0431\u0430\u0448\u043E\u0432\u0430"
  })), /*#__PURE__*/React.createElement("div", {
    className: "l-stack__tile l-float l-float--b",
    style: {
      inset: '48% 0% 4% 52%',
      ...par(-22)
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/imagery/prism-crystal.png",
    alt: "\u041F\u0440\u0438\u0437\u043C\u0430 \u0432 \u043F\u043E\u0442\u043E\u043A\u0435 \u0441\u0432\u0435\u0442\u0430"
  }))))));
}
Object.assign(window, {
  HeroSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LandingChrome.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
function LandingHeader({
  onNav,
  onLead
}) {
  const {
    Button,
    IconButton,
    FacetMark
  } = DS();
  const nav = [['audience', 'Для кого'], ['about', 'Обо мне'], ['offer', 'Обучение'], ['cases', 'Кейсы'], ['faq', 'Вопросы']];
  const isLink = id => id.indexOf('.html') !== -1;
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [menu, setMenu] = React.useState(false);
  const [lifted, setLifted] = React.useState(false);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth);
    const s = () => setLifted(window.scrollY > 24);
    window.addEventListener('resize', r);
    window.addEventListener('scroll', s, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', r);
      window.removeEventListener('scroll', s);
    };
  }, []);
  const compact = w < 1040;
  React.useEffect(() => {
    if (!compact) setMenu(false);
  }, [compact]);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: lifted ? '12px 0' : '20px 0',
      transition: 'padding .5s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--blur",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(14px,2.4vw,34px)',
      height: 64,
      padding: '0 14px 0 22px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('top'),
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 20,
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap'
    }
  }, "\u042E\u043B\u0438\u044F \u0428\u0430\u0431\u0430\u0448\u043E\u0432\u0430")), compact ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'clamp(14px,2vw,26px)',
      marginRight: 'auto',
      minWidth: 0
    }
  }, nav.map(([id, label]) => isLink(id) ? /*#__PURE__*/React.createElement("a", {
    key: id,
    href: id,
    style: {
      padding: '6px 0',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, label) : /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      border: 0,
      background: 'none',
      padding: '6px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, label))), w < 720 ? null : /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "kursy.html",
    style: {
      flex: '0 0 auto'
    }
  }, "\u041A\u0443\u0440\u0441\u044B \u043E\u0442 990 \u20BD"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onLead,
    style: {
      flex: '0 0 auto',
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 15,
      tone: "current"
    })
  }, compact ? 'Выступление' : 'Смотреть выступление'), compact ? /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0420\u0430\u0437\u0434\u0435\u043B\u044B",
    variant: "ghost",
    size: "sm",
    round: true,
    "aria-expanded": menu,
    onClick: () => setMenu(v => !v),
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(FacetMark, {
    name: menu ? 'close' : 'menu',
    size: 17,
    tone: "ink"
  })) : null), compact && menu ? /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--blur",
    style: {
      marginTop: 8,
      padding: '8px 22px 14px'
    }
  }, [...nav, ['reviews', 'Отзывы'], ['kursy.html', 'Курсы'], ['lead', 'Бесплатно']].map(([id, label]) => isLink(id) ? /*#__PURE__*/React.createElement("a", {
    key: id,
    href: id,
    style: {
      display: 'block',
      borderBottom: '1px solid rgba(77,14,18,.08)',
      padding: '15px 0',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label) : /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => {
      setMenu(false);
      onNav(id);
    },
    style: {
      display: 'block',
      width: '100%',
      border: 0,
      borderBottom: '1px solid rgba(77,14,18,.08)',
      background: 'none',
      padding: '15px 0',
      textAlign: 'left',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, label))) : null));
}

/* Уведомление о cookies — требование 152-ФЗ: сообщить, дать ссылку и получить согласие. */
function CookieBar() {
  const KEY = 'shbshv-cookies-ok';
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    let taken = false;
    try {
      if (localStorage.getItem(KEY)) return;
    } catch (e) {}
    const reveal = () => {
      if (taken) return;
      taken = true;
      setShow(true);
      window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => {
      if (window.scrollY > 260) reveal();
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    const t = setTimeout(reveal, 4200);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const accept = () => {
    try {
      localStorage.setItem(KEY, '1');
    } catch (e) {}
    setShow(false);
  };
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "l-cookies",
    role: "region",
    "aria-label": "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E \u0444\u0430\u0439\u043B\u0430\u0445 cookie"
  }, /*#__PURE__*/React.createElement("p", null, "\u0421\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B cookie \u0438 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u2014 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u0439\u0442\u043E\u043C, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441", ' ', /*#__PURE__*/React.createElement("a", {
    href: "privacy.html"
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), "."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "l-cookies__ok",
    onClick: accept
  }, "\u0425\u043E\u0440\u043E\u0448\u043E"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "l-cookies__x",
    onClick: accept,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, "\xD7"));
}
function LandingFooter() {
  const S = 'assets/icons/social/';
  const nav = [['index.html#audience', 'Для кого'], ['index.html#about', 'Обо мне'], ['index.html#offer', 'Как работать'], ['kursy.html', 'Курсы'], ['cases.html', 'Кейсы'], ['index.html#reviews', 'Отзывы'], ['index.html#faq', 'Вопросы']];
  const contacts = [['telegram.svg', 'Telegram', '@shbshv_support_bot', 'https://t.me/shbshv_support_bot'], ['vk.svg', 'ВКонтакте', 'Юлия Шабашова', 'https://vk.com/'], ['mail.svg', 'Почта', 'yulia@shabashova.ru', 'mailto:yulia@shabashova.ru']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'clamp(80px,10vw,140px)',
      padding: '0 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--ink l-glass--sheen",
    style: {
      padding: 'clamp(32px,4vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-foot"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(28px,3vw,40px)',
      color: 'var(--paper-1)'
    }
  }, "\u042E\u043B\u0438\u044F \u0428\u0430\u0431\u0430\u0448\u043E\u0432\u0430"), /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      color: 'var(--text-inverse-muted)',
      maxWidth: '32ch'
    }
  }, "\u0423\u0447\u0443 \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0418\u0418 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E. \u041F\u0435\u0440\u0435\u0432\u043E\u0436\u0443 \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-inverse-muted)'
    }
  }, "\u0418\u041F \u0428\u0430\u0431\u0430\u0448\u043E\u0432\u0430 \u042E\u043B\u0438\u044F \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u043E\u0432\u043D\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "l-docs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "oferta.html"
  }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043E\u0444\u0435\u0440\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "privacy.html"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "soglasie.html"
  }, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--gold-light)'
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("nav", {
    className: "l-footnav",
    "aria-label": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0441\u0430\u0439\u0442\u0430"
  }, nav.map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--gold-light)'
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, contacts.map(([icon, name, value, href]) => /*#__PURE__*/React.createElement("a", {
    key: name,
    href: href,
    className: "l-contact"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-contact__ic"
  }, /*#__PURE__*/React.createElement("img", {
    src: S + icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--gold-light)',
      fontSize: 10
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--text-inverse-muted)'
    }
  }, value))))))))), /*#__PURE__*/React.createElement(CookieBar, null));
}
Object.assign(window, {
  LandingHeader,
  LandingFooter,
  CookieBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LandingChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LeadSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const LdB = 'assets/icons';

/* Три согласия по 152-ФЗ: по умолчанию отжаты, кнопка недоступна, пока не отмечены все. */
const CONSENTS = [['oferta', /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u044E ", /*#__PURE__*/React.createElement("a", {
  href: "oferta.html",
  target: "_blank",
  rel: "noopener"
}, "\u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u0444\u0435\u0440\u0442\u044B"))], ['pdn', /*#__PURE__*/React.createElement(React.Fragment, null, "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 ", /*#__PURE__*/React.createElement("a", {
  href: "soglasie.html",
  target: "_blank",
  rel: "noopener"
}, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))], ['privacy', /*#__PURE__*/React.createElement(React.Fragment, null, "\u0421\u043E\u0433\u043B\u0430\u0441\u043D\u0430 \u0441 ", /*#__PURE__*/React.createElement("a", {
  href: "privacy.html",
  target: "_blank",
  rel: "noopener"
}, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))]];
function LeadSection({
  sent,
  onSubmit
}) {
  const {
    Button,
    Input,
    Checkbox,
    FacetMark
  } = DS();
  const [ok, setOk] = React.useState({});
  const allOk = CONSENTS.every(([k]) => ok[k]);
  return /*#__PURE__*/React.createElement("section", {
    id: "lead",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-split",
    style: {
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--sheen l-rise",
    style: {
      padding: 'clamp(30px,3.4vw,52px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(FacetMark, {
    name: "ray",
    size: 26,
    strokeWidth: .9
  }), /*#__PURE__*/React.createElement("span", {
    className: "l-tag"
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")), /*#__PURE__*/React.createElement("h2", {
    className: "l-display",
    style: {
      fontSize: 'clamp(26px,3.2vw,44px)',
      maxWidth: '20ch'
    }
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043A\u0430\u043A \u044D\u0442\u043E \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0432\u0436\u0438\u0432\u0443\u044E"), /*#__PURE__*/React.createElement("p", {
    className: "l-body",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '48ch'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u044C \u043C\u043E\u0435\u0433\u043E \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-\u043A\u043B\u0443\u0431\u0435. \u0417\u0430 \u0447\u0430\u0441 \u2014 \u043F\u0440\u043E \u0442\u043E, \u0447\u0442\u043E \u0418\u0418 \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u043C\u0435\u043D\u044F\u0435\u0442 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F, \u0431\u0435\u0437 \u043C\u0430\u0433\u0438\u0438 \u0438 \u0431\u0435\u0437 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0439. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443, \u0438 \u044F \u043F\u0440\u0438\u0448\u043B\u044E \u0437\u0430\u043F\u0438\u0441\u044C."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '20px 22px',
      background: 'rgba(255,252,244,.6)',
      borderRadius: 18,
      border: '1px solid rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement(FacetMark, {
    name: "checkRing",
    size: 24,
    strokeWidth: .9
  }), /*#__PURE__*/React.createElement("span", {
    className: "l-body"
  }, "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0435.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442",
    style: {
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041F\u043E\u0447\u0442\u0430",
    type: "email",
    placeholder: "you@mail.ru",
    style: {
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "l-consents"
  }, CONSENTS.map(([k, label]) => /*#__PURE__*/React.createElement(Checkbox, {
    key: k,
    label: label,
    iconBase: LdB,
    checked: !!ok[k],
    onChange: e => setOk(s => ({
      ...s,
      [k]: e.target.checked
    }))
  }))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onSubmit,
    disabled: !allOk,
    style: {
      alignSelf: 'flex-start'
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrow",
      size: 16,
      tone: "current"
    })
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-faint)',
      maxWidth: '52ch'
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u0448\u043B\u044E \u043F\u0430\u0440\u0443 \u043F\u0438\u0441\u0435\u043C \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0432\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0418\u0418 \u0432 \u0440\u0430\u0431\u043E\u0442\u0443. \u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u043D\u043E \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A."))), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    "data-d": "2",
    style: {
      position: 'relative',
      borderRadius: 26,
      overflow: 'hidden',
      minHeight: 380,
      border: '1px solid rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/people/yulia-tg.jpg",
    alt: "\u042E\u043B\u0438\u044F \u0428\u0430\u0431\u0430\u0448\u043E\u0432\u0430",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '48% 16%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(77,14,18,0) 0%,rgba(77,14,18,.14) 34%,rgba(77,14,18,.74) 68%,rgba(58,10,14,.93) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 'clamp(28px,3.2vw,44px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--gold-light)'
    }
  }, "\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C-\u043A\u0430\u043D\u0430\u043B"), /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(26px,3vw,42px)',
      color: 'var(--paper-1)'
    }
  }, "\u0418\u0418 \u043D\u0430 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E\u043C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)',
      maxWidth: '38ch'
    }
  }, "\u041A\u0430\u043A \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0418\u0418 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0438 \u0436\u0438\u0437\u043D\u0438. \u0411\u0435\u0437 \u0433\u043E\u043D\u043A\u0438 \u0437\u0430 \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u043C\u0438 \u0438 \u0431\u0435\u0437 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0439, \u0447\u0442\u043E \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0441\u0451 \u0437\u0430 \u0432\u0430\u0441."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => {},
    style: {
      alignSelf: 'flex-start',
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "arrowUp",
      size: 15,
      tone: "current"
    })
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))))));
}
Object.assign(window, {
  LeadSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LeadSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LegalPage.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

/* Рендерит текст документа: «## » — раздел, «- » и «• » — списки, остальное — абзацы. */
function LegalPage({
  doc
}) {
  const {
    FacetMark
  } = DS();
  const d = doc;
  const blocks = [];
  let list = null;
  d.body.trim().split('\n').forEach((raw, i) => {
    const line = raw.trim();
    if (!line) {
      if (list) {
        blocks.push(list);
        list = null;
      }
      return;
    }
    if (line === '---') {
      if (list) {
        blocks.push(list);
        list = null;
      }
      blocks.push({
        t: 'rule',
        k: i
      });
      return;
    }
    if (line.indexOf('## ') === 0) {
      if (list) {
        blocks.push(list);
        list = null;
      }
      blocks.push({
        t: 'h',
        k: i,
        s: line.slice(3)
      });
      return;
    }
    if (line.indexOf('- ') === 0 || line.indexOf('• ') === 0) {
      if (!list) list = {
        t: 'ul',
        k: i,
        items: []
      };
      list.items.push(line.slice(2));
      return;
    }
    if (list) {
      blocks.push(list);
      list = null;
    }
    blocks.push({
      t: 'p',
      k: i,
      s: line
    });
  });
  if (list) blocks.push(list);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "l-section",
    style: {
      paddingTop: 156
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "l-underline l-rise",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'var(--gold-base)'
    }
  }), "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"), /*#__PURE__*/React.createElement("div", {
    className: "l-legal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"), /*#__PURE__*/React.createElement("h1", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(30px,4.2vw,56px)',
      maxWidth: '24ch'
    }
  }, d.title), d.updated ? /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise",
    "data-d": "2",
    style: {
      color: 'var(--text-faint)'
    }
  }, d.updated) : null), /*#__PURE__*/React.createElement("article", {
    className: "l-glass l-rise l-legal",
    "data-d": "2"
  }, blocks.map(b => {
    if (b.t === 'rule') return /*#__PURE__*/React.createElement("span", {
      key: b.k,
      className: "l-legal__rule"
    });
    if (b.t === 'h') return /*#__PURE__*/React.createElement("h2", {
      key: b.k,
      className: "l-display l-legal__h"
    }, b.s);
    if (b.t === 'ul') return /*#__PURE__*/React.createElement("ul", {
      key: b.k,
      className: "l-legal__ul"
    }, b.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement("span", {
      className: "l-legal__dash"
    }), it)));
    return /*#__PURE__*/React.createElement("p", {
      key: b.k,
      className: "l-legal__p"
    }, b.s);
  })), /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-rise l-legal-nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-gold)'
    }
  }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 22px'
    }
  }, [['oferta.html', 'Договор оферты'], ['privacy.html', 'Политика конфиденциальности'], ['soglasie.html', 'Согласие на обработку данных']].filter(([href]) => href !== d.self).map(([href, l]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    className: "l-underline",
    style: {
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, l, /*#__PURE__*/React.createElement(FacetMark, {
    name: "arrow",
    size: 13
  })))))));
}
Object.assign(window, {
  LegalPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LegalPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/OfferSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const OFFERS = [['ИИ за неделю', '990 ₽', 'Если начинаете с нуля. Шесть коротких уроков в Telegram.', ['Шесть уроков по 10–15 минут', 'Читать и делать можно в транспорте', 'Доступ остаётся навсегда'], 'Подробнее о курсе', 'kursy.html#week', false, ['онлайн', 'самостоятельно']], ['ИИ для эксперта', '1 900 ₽', 'Если уже работаете с ИИ и хотите упаковать себя и свои продукты. Практикум на вечер.', ['Один вечер практики', 'Упаковка себя, продукта и контента', 'Готовые рабочие контуры'], 'Подробнее о курсе', 'kursy.html#expert', false, ['онлайн', 'самостоятельно']], ['Личная консультация', '15 000 ₽', 'Если у вас свои задачи и типовые советы не подходят. Полтора часа в зуме, разбираем именно вашу работу.', ['Полтора часа в зуме', 'Смотрю вашу реальную работу', 'Запись и конспект после встречи'], 'Записаться', '', true, ['онлайн', 'офлайн — Ярославль']], ['Обучение для команды', 'от 20 000 ₽', 'Когда с ИИ нужно подружить не вас одного, а всю команду. Групповая консультация или мастер-класс.', ['Групповая консультация или мастер-класс', 'Программа под ваши процессы', 'Оплата по счёту на ИП'], 'Обсудить', '', false, ['онлайн', 'офлайн — Ярославль']]];
function OfferSection({
  onLead
}) {
  const {
    Button,
    FacetMark
  } = DS();
  const [open, setOpen] = React.useState(2);
  return /*#__PURE__*/React.createElement("section", {
    id: "offer",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u0424\u043E\u0440\u043C\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("h2", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(32px,4.4vw,60px)'
    }
  }, "\u041A\u0430\u043A \u0441\u043E \u043C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("p", {
    className: "l-lead l-rise",
    "data-d": "2",
    style: {
      maxWidth: '46ch'
    }
  }, "\u041E\u0442 \u0448\u0435\u0441\u0442\u0438 \u0443\u0440\u043E\u043A\u043E\u0432 \u0432 Telegram \u0434\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0444\u043E\u0440\u043C\u0430\u0442 \u2014 \u0440\u0430\u0441\u043A\u0440\u043E\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 'clamp(32px,4vw,56px)'
    }
  }, OFFERS.map(([title, price, text, bullets, cta, href, featured, tags], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: title,
      className: 'l-glass l-rise' + (featured ? ' l-glass--gold' : ''),
      "data-d": String(i % 4 + 1),
      style: {
        padding: 0,
        background: featured ? 'linear-gradient(135deg,rgba(220,234,241,.58),rgba(255,252,244,.42))' : undefined
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'clamp(22px,2.4vw,32px)',
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        gap: 'clamp(16px,2vw,28px)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "l-display",
      style: {
        fontSize: 'clamp(21px,2.1vw,30px)',
        lineHeight: 1.1
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        lineHeight: 1.5,
        color: 'var(--text-muted)'
      }
    }, text), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        letterSpacing: '.03em',
        lineHeight: 1.4,
        color: 'var(--text-faint)',
        marginTop: 2
      }
    }, tags.join(' · '))), /*#__PURE__*/React.createElement("span", {
      className: "l-display",
      style: {
        fontSize: 'clamp(18px,1.9vw,26px)',
        color: 'var(--ink-700)',
        whiteSpace: 'nowrap'
      }
    }, price), /*#__PURE__*/React.createElement(FacetMark, {
      name: isOpen ? 'minus' : 'plus',
      size: 20,
      tone: "ink"
    })), /*#__PURE__*/React.createElement("div", {
      className: 'l-open' + (isOpen ? ' is-open' : '')
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 clamp(22px,2.4vw,32px) clamp(24px,2.4vw,32px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxWidth: '52ch'
      }
    }, bullets.map(b => /*#__PURE__*/React.createElement("span", {
      key: b,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 8,
        width: 14,
        height: 1,
        background: 'var(--gold-base)',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, b)))), /*#__PURE__*/React.createElement(Button, {
      variant: featured ? 'primary' : 'secondary',
      href: href || undefined,
      onClick: href ? undefined : onLead,
      style: {
        borderRadius: 999
      },
      iconRight: /*#__PURE__*/React.createElement(FacetMark, {
        name: "arrow",
        size: 15,
        tone: "current"
      })
    }, cta)))));
  }))));
}
Object.assign(window, {
  OfferSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/OfferSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ResultsSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;
const RESULTS = [['Регламент', 'из одного созвона', 'руководитель проекта', 'Расшифровку полуторачасового совещания ИИ собрал в готовый регламент и презентацию к нему. Руководителю осталось причесать.', 'prism'], ['Анализ рынка', 'своими силами', 'сфера гостеприимства', 'Цены конкурентов, тренды, позиционирование. То, ради чего обычно зовут подрядчика, теперь собирается самостоятельно и быстро.', 'planes'], ['Инструкции для команды', 'за вечер', 'сфера гостеприимства', 'Чек-листы для администраторов на острые ситуации и правила для персонала. То, до чего долго не доходили руки.', 'ray'], ['От опаски', 'к работе каждый день', 'была новичком', 'Начинала с нуля и с осторожностью. Теперь общается с ИИ каждый день, а качество запросов выросло в разы.', 'dispersion']];
function ResultsSection() {
  const [flipped, setFlipped] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    id: "results"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "l-band__q l-rise"
  }, "\u0418\u0418 \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u0442 \u0432\u0430\u0441. \u041E\u043D \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u0440\u0443\u0442\u0438\u043D\u0443, \u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u044F ", /*#__PURE__*/React.createElement("span", {
    className: "l-italic"
  }, "\u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432\u0430\u0448\u0438\u043C\u0438")))), /*#__PURE__*/React.createElement("div", {
    className: "l-shell",
    style: {
      paddingTop: 'clamp(72px,9vw,132px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u0427\u0442\u043E \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043E \u043C\u043D\u043E\u0439")), /*#__PURE__*/React.createElement("div", {
    className: "l-grid-2",
    style: {
      marginTop: 24
    }
  }, RESULTS.map(([big, small, who, detail], i) => /*#__PURE__*/React.createElement("div", {
    key: big,
    className: "l-flip l-rise",
    "data-d": String(i % 2 + 1),
    "data-flipped": flipped === i ? 'true' : 'false',
    onClick: () => setFlipped(flipped === i ? -1 : i),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-flip__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-flip__face l-flip__face--front"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass",
    style: {
      height: '100%',
      padding: 'clamp(26px,2.6vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-num",
    style: {
      marginBottom: 6
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(24px,2.5vw,34px)',
      lineHeight: 1.08
    }
  }, big), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(14px,1.2vw,16px)',
      color: 'var(--text-secondary)'
    }
  }, small))), /*#__PURE__*/React.createElement("div", {
    className: "l-flip__face l-flip__face--back"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-glass l-glass--ink",
    style: {
      height: '100%',
      padding: 'clamp(26px,2.6vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--gold-light)'
    }
  }, who), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--paper-1)'
    }
  }, detail), /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      color: 'var(--text-inverse-muted)'
    }
  }, big)))))))));
}
Object.assign(window, {
  ResultsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ResultsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ReviewsSection.jsx
try { (() => {
const DS = () => window.SHBSHVAIDesignSystem_3ba733;

/* Отзывы и портреты — с yuliashabashova.ru. Тексты дословные, убраны только эмодзи
   (бренд-гайд их не допускает). Портреты — из папки «Отзывы ИИ», лежат в
   assets/people/reviews/. */
const P = 'assets/people/reviews/';
const REVIEWS = [['Торгово-промышленная палата Ярославской области', 'org', 'Вся палата активно обсуждает встречу с Вами! Встряхнули Вы наших сотрудников! Девиз появился: работа теперь без ИИ уже не та и никогда не будет прежней!', '02-tpp.jpg'], ['Анастасия', 'person', 'Я уже внедряю в маркетинге, написали текст к подкасту за 3 мин. Сегодня завтра буду заниматься табличками. Он мой лучший друг — благодаря тебе. Спасибо большое.', '06-anastasia.jpg'], ['Менеджер-клуб. Объединение руководителей', 'org', 'Я даже не ожидал, что практикум будет настолько информативным.', '05-manager-club.jpg'], ['Елена', 'person', '100% пользы, без воды и понятным языком. Я под впечатлением, мне будто открыли двери во что-то новое, красивое, интересное и совершенно не страшно, а интерес зашкаливает.', '08-elena.jpg'], ['Ксения', 'person', 'Раньше смотрела на нейрокреаторов и думала: как они это делают? Боялась даже начинать. После курса страх ушёл — я прошла первый порог. Теперь понимаю, с чего стартовать, и появился азарт копать глубже. Главное — получила структуру: что изучать, а на что время не тратить.', '13-ksenia.jpg'], ['Юлия', 'person', 'Спасибо за инсайдерскую информацию, которая каждую минуту вызвала ВАУ-эмоции и вопрос «А что так можно было?». Технологии и ИИ, конечно, оооочень упрощают процесс анализа заданной информации и выжимки сути.', '01-yulia.jpg'], ['Академия красоты LAREY', 'org', 'Всё очень понравилось! Я рада, что с вами познакомилась и теперь есть такой контакт.', '09-larey.jpg'], ['Анастасия', 'person', 'Очень интересно и понятно! Слушала бы бесконечно! Сейчас я каждый день использую нейросети: в ведении соцсетей рабочих, в личных вопросах, в работе с клиентами. Это высвобождает огромное количество времени, плюс помогает делать работу качественней. Спасибо, что подружила меня с нейронками.', '10-anastasia-2.jpg'], ['Марина', 'person', 'Я пообщалась и создала мини-продукт и лид-магнит прямо с шагами: рилсы, посты и так далее. Это прямо то, что я не могла сформулировать и подобраться к этой теме. А тут целый контент-план! Я в восторге.', '15-marina.jpg'], ['Татьяна', 'person', 'Много полезной и структурированной информации. У меня появилась прекрасная база знаний о ИИ-инструментах и очень много практических возможностей. Отдельно благодарю за информацию про редактирование фото.', '04-tatyana.jpg'], ['Дмитрий', 'person', 'Очень благодарен за курс, узнал много полезного и самое главное начал пользоваться ИИ каждый день!', '07-dmitry.jpg'], ['Екатерина', 'person', 'Информация в доступном для мозга формате: структурно, объёмно и просто одновременно! У меня теперь есть отличный помощник и для работы, и для познания себя, и для увлечений. Круто!', '11-ekaterina.jpg'], ['Ольга', 'person', 'Практикум превосходный. Мне очень понравилось. И я рада, что осуществила задуманное.', '03-olga.jpg'], ['Мария', 'person', 'Удивлена новым возможностям использования ИИ на практике!', '12-maria.jpg'], ['Ольга', 'person', 'Я в восторге! Море вдохновения и идей!', '14-olga-2.jpg']];
const V = 'assets/people/video/';
const VIDEO = {
  id: 'c7zH1nr5q8fwovUkRQ26Wp',
  name: 'Радислав Гандапас',
  role: 'самый известный в России специалист по лидерству',
  photo: '01-gandapas.jpg'
};
function ReviewsSection({
  title,
  lead,
  orgsFirst
}) {
  const {
    FacetMark,
    Button
  } = DS();
  const [playing, setPlaying] = React.useState(false);
  const [all, setAll] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-tag l-rise"
  }, "\u041E\u0442\u0437\u044B\u0432\u044B"), /*#__PURE__*/React.createElement("h2", {
    className: "l-display l-rise",
    "data-d": "1",
    style: {
      fontSize: 'clamp(32px,4.4vw,60px)'
    }
  }, title || /*#__PURE__*/React.createElement(React.Fragment, null, "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043F\u0440\u043E \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u043E \u043C\u043D\u043E\u0439")))), /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    style: {
      marginTop: 'clamp(28px,3.4vw,48px)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-vstage",
    style: {
      maxWidth: 520,
      width: '100%'
    }
  }, playing ? /*#__PURE__*/React.createElement("iframe", {
    src: 'https://kinescope.io/embed/' + VIDEO.id + '?autoplay=1',
    title: VIDEO.name,
    allow: "autoplay; fullscreen; picture-in-picture; encrypted-media;",
    frameBorder: "0",
    allowFullScreen: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: V + VIDEO.photo,
    alt: VIDEO.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(77,14,18,.04) 40%,rgba(77,14,18,.66) 100%)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(true),
    "aria-label": 'Смотреть отзыв: ' + VIDEO.name,
    style: {
      position: 'absolute',
      inset: 0,
      border: 0,
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      padding: '0 clamp(18px,2vw,28px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-play"
  }, /*#__PURE__*/React.createElement(FacetMark, {
    name: "play",
    size: 25,
    tone: "light"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: 'left',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 'clamp(19px,1.9vw,26px)',
      color: 'var(--paper-1)',
      lineHeight: 1.14
    }
  }, VIDEO.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      lineHeight: 1.4,
      color: 'rgba(255,248,244,.82)'
    }
  }, VIDEO.role)))))), /*#__PURE__*/React.createElement("div", {
    className: "l-cols",
    style: {
      marginTop: 20
    }
  }, (orgsFirst ? [...REVIEWS].sort((a, b) => (a[1] === 'org' ? 0 : 1) - (b[1] === 'org' ? 0 : 1)) : REVIEWS).slice(0, all ? undefined : 7).map(([name, kind, text, photo], i) => /*#__PURE__*/React.createElement("figure", {
    key: name + i,
    className: 'l-glass l-quote' + (all ? ' is-in' : ' l-rise'),
    "data-d": String(i % 4 + 1),
    style: {
      padding: 'clamp(24px,2.2vw,32px)',
      margin: '0 0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--text-body)'
    }
  }, text), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: P + photo,
    alt: name,
    loading: "lazy",
    onError: e => {
      e.target.parentNode.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l-display",
    style: {
      fontSize: 17,
      lineHeight: 1.2
    }
  }, name), kind === 'org' ? /*#__PURE__*/React.createElement("span", {
    className: "l-tag",
    style: {
      fontSize: 10
    }
  }, "\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F") : null))))), all ? null : /*#__PURE__*/React.createElement("div", {
    className: "l-rise",
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'clamp(18px,2vw,28px)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => setAll(true),
    style: {
      borderRadius: 999
    },
    iconRight: /*#__PURE__*/React.createElement(FacetMark, {
      name: "plus",
      size: 15,
      tone: "current"
    })
  }, `Показать ещё ${REVIEWS.length - 7} отзывов`))));
}
Object.assign(window, {
  ReviewsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ReviewsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/legal-oferta.js
try { (() => {
window.LEGAL_OFERTA = {
  self: 'oferta.html',
  title: 'Публичная оферта на оказание информационно-консультационных услуг в форме онлайн-курса',
  updated: '',
  body: `
Индивидуальный предприниматель Шабашова Юлия Валентиновна, ИНН 440401123380, ОГРНИП 315443400001406 (далее — «Исполнитель»), публикует настоящую публичную оферту о заключении Договора об оказании информационно-консультационных услуг (далее — «Договор») на изложенных ниже условиях.

Настоящий документ является официальным предложением (публичной офертой) Исполнителя в адрес любого дееспособного физического лица или юридического лица (далее — «Заказчик») заключить Договор на оказание информационно-консультационных услуг.

Акцепт (принятие) настоящей оферты означает полное и безоговорочное согласие Заказчика со всеми условиями Договора.

---

## 1. Термины и определения

1.1. Оферта — настоящий документ, опубликованный на сайте Исполнителя и содержащий все существенные условия Договора.

1.2. Акцепт оферты — полное и безоговорочное принятие условий настоящей оферты путем совершения Заказчиком действий, указанных в разделе 3 настоящей оферты.

1.3. Заказчик (Клиент, Участник) — дееспособное физическое лицо или юридическое лицо, заключившее с Исполнителем Договор на условиях, изложенных в настоящей оферте.

1.4. Исполнитель — ИП Шабашова Юлия Валентиновна, оказывающий информационно-консультационные услуги в форме онлайн-курса.

1.5. Договор — договор между Исполнителем и Заказчиком на оказание информационно-консультационных услуг, который заключается посредством акцепта настоящей оферты.

1.6. Онлайн-курс (Курс, Услуга) — комплекс информационно-консультационных услуг под названием «ИИ за неделю: от новичка до уверенного пользователя», включающий предоставление доступа к видеоурокам в записи и методическим материалам через мессенджер Telegram.

1.7. Методические материалы — авторские информационные материалы Исполнителя, включающие PDF-конспекты к урокам, библиотеку промптов, чек-листы, инструкции, ссылки на сервисы и иные материалы, предоставляемые в рамках Курса.

1.8. Интеллектуальная собственность — все материалы Курса, включая видеоуроки, методические материалы, тексты, изображения, аудио- и видеозаписи, дизайн и иные объекты авторского права и смежных прав, принадлежащие Исполнителю.

1.9. Telegram — мессенджер, через который предоставляется доступ к материалам Курса в личные сообщения Заказчика.

---

## 2. Предмет договора

2.1. Предметом настоящего Договора является оказание Исполнителем информационно-консультационных услуг в форме онлайн-курса «ИИ за неделю: от новичка до уверенного пользователя» (далее — «Курс»), а Заказчик обязуется принять и оплатить данные Услуги в порядке и на условиях, предусмотренных настоящим Договором.

2.2. Услуги не являются образовательной деятельностью в смысле 273-ФЗ, не сопровождаются итоговой аттестацией и выдачей документов об образовании установленного образца; предоставляются как информационно-консультационные.

2.3. Услуги оказываются дистанционно, посредством информационно-телекоммуникационной сети Интернет через мессенджер Telegram. Материалы Курса направляются Заказчику в личные сообщения в Telegram.

2.4. В рамках Курса Исполнитель предоставляет Заказчику:

2.4.1. Доступ к видеоматериалам в записи:

- Вводный урок для новичков (~30 минут);
- 6 (шесть) основных видеоуроков общей продолжительностью ~40 минут;
- 1 (один) бонусный материал (~5 минут).

2.4.2. Методические материалы:

- PDF-конспекты к урокам;
- Библиотеку из 20+ готовых промптов для работы с искусственным интеллектом;
- Чек-листы и инструкции;
- Список рекомендованных сервисов и инструментов.

2.5. Доступ к видеоурокам и методическим материалам предоставляется Заказчику через мессенджер Telegram в личные сообщения сразу после подтверждения оплаты Услуг и действует бессрочно при условии полной оплаты Услуг.

2.6. «Бессрочный» доступ означает отсутствие заранее установленного срока окончания доступа к материалам, размещенным в личных сообщениях Telegram, но не является обязательством хранения контента при наступлении обстоятельств вне контроля Исполнителя (форс-мажор, блокировка аккаунта Telegram по инициативе мессенджера, технические сбои и т.п.).

2.7. Конкретное содержание Курса, последовательность уроков, темы и материалы определяются Исполнителем и размещаются на Сайте.

2.8. Исполнитель вправе вносить изменения в содержание Курса, последовательность уроков и методические материалы с целью улучшения качества Услуг. Существенные изменения, влияющие на предмет Договора, не применяются к уже заключенным Договорам.

2.9. Результатом оказания Услуг является предоставление Заказчику доступа ко всем материалам Курса в объеме, предусмотренном настоящим Договором, через личные сообщения в Telegram.

2.10. Исполнитель не гарантирует достижение Заказчиком каких-либо конкретных результатов в области применения технологий искусственного интеллекта, поскольку результат зависит от индивидуальных особенностей Заказчика, его активности, добросовестности при изучении материалов и применения полученных знаний на практике.

---

## 3. Порядок заключения договора (акцепт оферты)

3.1. Настоящая оферта является публичной офертой в соответствии со статьей 437 Гражданского кодекса Российской Федерации.

3.2. Для заключения Договора Заказчик совершает следующие действия.

3.2.1. На Сайте Исполнителя оформляет заказ на Курс, указывая следующие данные:

- Имя;
- Номер телефона;
- Адрес электронной почты (e-mail);
- Telegram-аккаунт (username).

3.2.2. Производит оплату Услуг в полном объеме через платежную форму на Сайте способом, доступным на момент оплаты (банковская карта, электронные кошельки и иные способы оплаты).

3.3. Моментом заключения Договора (акцепта оферты) считается момент подтверждения оплаты платежной системой.

3.4. После оплаты Исполнитель открывает Заказчику ссылку на доступ к материалам Курса на странице с подтверждением оплаты.

3.5. Совершая акцепт настоящей оферты, Заказчик подтверждает, что:

- Полностью ознакомился с условиями настоящей оферты;
- Понимает предмет Договора, порядок и условия оказания Услуг;
- Полностью согласен со всеми условиями настоящей оферты без каких-либо изъятий и ограничений;
- Дает согласие на обработку персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»;
- Подтверждает свою дееспособность и правоспособность для заключения настоящего Договора;
- Имеет активный аккаунт в мессенджере Telegram и согласен получать материалы Курса через личные сообщения в Telegram.

3.6. Договор, заключенный посредством акцепта настоящей оферты, имеет юридическую силу, эквивалентную договору, подписанному собственноручно сторонами.

3.7. До оплаты Исполнитель вправе отказать в заключении договора без объяснения причин.

---

## 4. Стоимость услуг и порядок расчетов

4.1. Стоимость Услуг определяется Исполнителем и указывается на Сайте Исполнителя на момент оформления заказа.

4.2. Исполнитель вправе в одностороннем порядке изменять стоимость Услуг, устанавливать скидки и специальные предложения. Изменение стоимости не распространяется на Заказчиков, которые уже произвели оплату Услуг.

4.3. Оплата Услуг производится Заказчиком в полном объеме до получения доступа к материалам Курса путем безналичного перечисления денежных средств через платежную форму на Сайте.

4.4. Платежная форма на Сайте принимает платежи следующими способами (в зависимости от доступных на момент оплаты):

- Банковскими картами;
- Электронными кошельками;
- Иными способами, доступными в платежной форме.

4.5. Обязательство Заказчика по оплате Услуг считается исполненным с момента подтверждения оплаты платежной системой.

4.6. После успешной оплаты Исполнитель направляет Заказчику ссылку на доступ к материалам Курса в личные сообщения в Telegram, а также дублирует информацию на адрес электронной почты, указанный Заказчиком при оформлении заказа.

4.7. Заказчик самостоятельно несет ответственность за правильность предоставленных данных при оформлении заказа и за правильность производимых им платежей.

4.8. Цены на Услуги указаны в российских рублях.

4.9. При оплате Услуг Заказчик может воспользоваться услугами банков по предоставлению кредитных средств или сервисами рассрочки платежей, если такая возможность доступна в платежной форме. Отношения между Заказчиком и указанными банками или сервисами регулируются отдельными договорами, к которым Исполнитель не является стороной. Все связанные с этим комиссии и расходы несет Заказчик.

4.10. Кассовый чек или иной платежный документ направляется Заказчику на адрес электронной почты, указанный при оформлении заказа, в соответствии с требованиями действующего законодательства Российской Федерации.

---

## 5. Права и обязанности сторон

5.1. Исполнитель обязуется:

5.1.1. После оплаты предоставить Заказчику ссылку на доступ к материалам Курса на странице с подтверждением оплаты.

5.1.2. Обеспечить наличие и доступность всех материалов Курса в объеме, предусмотренном настоящим Договором.

5.1.3. Предоставить Заказчику доступ ко всем видеоурокам и методическим материалам Курса через личные сообщения в Telegram сразу после подтверждения оплаты.

5.1.4. Соблюдать конфиденциальность персональных данных Заказчика в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».

5.2. Исполнитель вправе:

5.2.1. Использовать сервисы третьих лиц для приема платежей, направления материалов Курса и коммуникации с Заказчиками, включая платежные системы, мессенджер Telegram и сервисы электронной почты.

5.2.2. Вносить изменения в содержание Курса, последовательность уроков и методические материалы с целью улучшения качества Услуг для новых Заказчиков. Изменения не применяются к уже заключенным Договорам.

5.2.3. Изменять способ предоставления доступа к материалам Курса (вместо личных сообщений в Telegram использовать иной способ) с обязательным уведомлением Заказчиков, уже получивших доступ, и предоставлением им доступа новым способом.

5.2.4. Отказать в возврате денежных средств, если Заказчик нарушил условия настоящего Договора.

5.3. Исполнитель не несет ответственности за:

5.3.1. Технические сбои, перерывы в работе мессенджера Telegram, действия или бездействие компании Telegram или иных третьих лиц.

5.3.2. Блокировку или ограничение доступа к аккаунту Заказчика в Telegram по инициативе мессенджера или по иным причинам, не зависящим от Исполнителя.

5.3.3. Невозможность доступа к материалам Курса по причинам, связанным с работой мессенджера Telegram, при условии, что Исполнитель предпринял разумные меры для решения проблемы.

5.3.4. Качество и скорость работы технической поддержки мессенджера Telegram.

5.4. Заказчик обязуется:

5.4.1. Своевременно и в полном объеме оплатить Услуги.

5.4.2. Предоставить достоверные и актуальные данные при оформлении заказа на Сайте (имя, номер телефона, адрес электронной почты, Telegram-аккаунт).

5.4.3. Иметь активный аккаунт в мессенджере Telegram и обеспечить возможность получения личных сообщений в Telegram от Исполнителя.

5.4.4. Самостоятельно обеспечить наличие технических средств (компьютер, планшет, смартфон) и доступа к сети Интернет, необходимых для получения Услуг и работы с мессенджером Telegram.

5.4.5. Не передавать доступ к материалам Курса третьим лицам.

5.4.6. Соблюдать права Исполнителя на интеллектуальную собственность: не копировать, не распространять, не передавать третьим лицам, не воспроизводить публично, не использовать в коммерческих целях любые материалы Курса без письменного согласия Исполнителя.

5.4.7. Использовать материалы Курса исключительно в личных некоммерческих целях для собственного обучения и развития.

5.4.8. Не осуществлять действий, направленных на нарушение нормальной работы технических средств и программного обеспечения, используемого Исполнителем для оказания Услуг.

5.4.9. При возникновении технических проблем с доступом к материалам Курса обращаться к Исполнителю по адресу электронной почты yulia@shabashova.ru или в Telegram @shbshv_support_bot.

5.5. Заказчик вправе:

5.5.1. Получить доступ ко всем материалам Курса после оплаты Услуг через личные сообщения в Telegram.

5.5.2. Изучать материалы Курса в удобном для себя темпе без ограничения по времени в пределах предоставленного доступа.

5.5.3. Обратиться к Исполнителю с просьбой о возврате денежных средств в соответствии с условиями раздела 6 настоящего Договора.

5.5.4. Получить от Исполнителя разъяснения по условиям настоящего Договора.

---

## 6. Условия возврата денежных средств

6.1. Общие положения.

6.1.1. В соответствии со статьей 32 Закона Российской Федерации от 07.02.1992 № 2300-1 «О защите прав потребителей» Заказчик вправе отказаться от исполнения договора об оказании услуг в любое время при условии оплаты Исполнителю фактически понесенных им расходов, связанных с исполнением обязательств по настоящему Договору.

6.1.2. Возврат денежных средств осуществляется за вычетом:

- Стоимости фактически оказанных Услуг (предоставленных материалов Курса);
- Фактически понесенных расходов Исполнителя.

6.1.3. Поскольку Услуги оказываются дистанционно и предполагают предоставление доступа к цифровому контенту, услуга считается оказанной с момента направления Заказчику ссылки на доступ к соответствующему материалу Курса в личные сообщения в Telegram.

6.2. Структура стоимости Услуг и распределение по компонентам. Для целей расчета суммы возврата денежных средств стоимость Услуг распределяется следующим образом.

6.2.1. Методические материалы — 30% от стоимости, в том числе:

- Методические материалы к каждому из 6 основных уроков — по 4,5% (всего 27%);
- Бонусный материал (библиотека промптов) — 3%.

6.2.2. Видеоуроки — 70% от стоимости, в том числе:

- Вводный урок для новичков — 10%;
- Каждый из 6 основных видеоуроков — по 10% (всего 60%).

6.3. Порядок расчета суммы возврата.

6.3.1. При подаче Заказчиком заявления о возврате денежных средств до направления Исполнителем ссылки на доступ к материалам Курса в личные сообщения Telegram Заказчику возвращается полная стоимость Услуг за вычетом фактически понесенных расходов Исполнителя.

6.3.2. Доступ ко всем материалам Курса предоставляется Заказчику одновременно сразу после подтверждения оплаты путем направления ссылки в личные сообщения в Telegram. С момента направления ссылки все материалы считаются предоставленными и оказанными, следовательно, стоимость оказанных Услуг составляет 100% от уплаченной суммы.

6.3.3. После направления Исполнителем ссылки на доступ к материалам Курса в личные сообщения Telegram возврат денежных средств возможен только в случае, если Заказчик докажет существенные недостатки оказанных Услуг, а именно:

- Материалы Курса не соответствуют описанию, размещенному на Сайте Исполнителя;
- Материалы Курса содержат существенные технические недостатки, делающие невозможным их использование (не воспроизводятся видеофайлы, не открываются PDF-файлы и т.п.);
- Содержание Курса существенно отличается от заявленной программы;
- Исполнитель не открыл страницу со ссылкой на старт Курса после подтверждения оплаты (за исключением случаев, когда задержка произошла по вине Заказчика: указан неверный Telegram-аккаунт, Заказчик заблокировал личные сообщения от незнакомых пользователей и т.п.).

6.3.4. Возврат денежных средств не осуществляется в следующих случаях:

- Заказчик субъективно не удовлетворен содержанием или качеством Курса, при этом Курс соответствует описанию и заявленной программе;
- Заказчик не применяет полученные знания на практике;
- Заказчик не изучает предоставленные материалы;
- Заказчик не достиг ожидаемых результатов обучения по причинам, не зависящим от Исполнителя (отсутствие мотивации, недостаток времени или усилий, индивидуальные особенности восприятия информации);
- Заказчик не смог получить доступ к материалам по причинам, связанным с работой мессенджера Telegram (блокировка аккаунта, технические сбои и т.п.), при условии, что Исполнитель направил ссылку на доступ в установленный срок;
- Заказчик указал неверный Telegram-аккаунт при оформлении заказа;
- Заказчик заблокировал возможность получения личных сообщений от незнакомых пользователей в настройках Telegram;
- Заказчик нарушил условия настоящего Договора, в том числе передал доступ к материалам третьим лицам, незаконно распространял материалы Курса, нарушал авторские права Исполнителя.

6.3.5. Из суммы возврата вычитаются фактически понесенные расходы Исполнителя, связанные с исполнением обязательств по настоящему Договору, включая:

- Комиссии платежных систем за обработку платежа;
- Комиссии банков за проведение платежных операций;
- Комиссии за возврат денежных средств, установленные банками и платежными системами;
- Расходы на подключение и использование платежной формы на Сайте;
- Расходы на рассылку материалов через Telegram.

6.3.6. Сумма возврата рассчитывается по следующей формуле: сумма возврата = стоимость Услуг − стоимость фактически оказанных Услуг − фактически понесенные расходы Исполнителя.

6.3.7. Если в результате расчета сумма возврата составляет ноль или отрицательное значение, возврат денежных средств не производится.

6.4. Порядок подачи заявления о возврате денежных средств.

6.4.1. Для возврата денежных средств Заказчик направляет Исполнителю письменное заявление в свободной форме на адрес электронной почты: yulia@shabashova.ru

6.4.2. Заявление должно содержать:

- Фамилию, имя, отчество (при наличии) Заказчика;
- Адрес электронной почты, указанный при оформлении заказа;
- Telegram-аккаунт, указанный при оформлении заказа;
- Дату оплаты Услуг;
- Причину возврата денежных средств с подробным описанием обстоятельств;
- Доказательства существенных недостатков Услуг (если применимо);
- Реквизиты банковского счета или банковской карты для возврата денежных средств.

6.4.3. Исполнитель рассматривает заявление Заказчика в течение 10 (десяти) рабочих дней с момента получения заявления.

6.4.4. По результатам рассмотрения заявления Исполнитель направляет Заказчику письменный ответ по электронной почте с решением о возврате денежных средств, расчетом суммы возврата либо мотивированным отказом.

6.4.5. В случае принятия решения о возврате денежных средств Исполнитель производит возврат в течение 10 (десяти) рабочих дней с момента направления Заказчику уведомления о принятии решения.

6.4.6. Возврат денежных средств осуществляется тем же способом, которым была произведена оплата, если иное не согласовано Сторонами. Сроки зачисления денежных средств зависят от банка Заказчика и платежной системы и могут составлять до 30 календарных дней.

6.5. Дополнительные условия.

6.5.1. При возврате денежных средств доступ Заказчика к материалам Курса может быть ограничен или прекращен по усмотрению Исполнителя.

6.5.2. Если Заказчик оплатил Услуги с использованием кредитных средств банка или сервиса рассрочки, возврат осуществляется в соответствии с условиями договора между Заказчиком и соответствующей кредитной организацией. Исполнитель не несет ответственности за условия возврата кредитных средств.

---

## 7. Интеллектуальная собственность и лицензия

7.1. Права на интеллектуальную собственность.

7.1.1. Все материалы Курса, включая, но не ограничиваясь: видеоуроки, методические материалы (PDF-конспекты, чек-листы, инструкции), библиотеку промптов, тексты, изображения, графику, дизайн, аудио- и видеозаписи, а также структура и содержание Курса в целом (далее — «Материалы») являются объектами исключительных прав Исполнителя и охраняются законодательством Российской Федерации об авторском праве и смежных правах, в том числе Гражданским кодексом Российской Федерации (часть четвертая).

7.1.2. Материалы являются результатом интеллектуальной деятельности Исполнителя и созданы исключительно для личного некоммерческого использования участниками Курса в образовательных целях.

7.1.3. Исключительное право на Материалы принадлежит Исполнителю. Никакие положения настоящего Договора не могут быть истолкованы как передача исключительных прав на Материалы Заказчику.

7.2. Предоставление лицензии.

7.2.1. После оплаты Услуг и получения доступа к материалам Курса Исполнитель предоставляет Заказчику простую (неисключительную) лицензию на использование Материалов на следующих условиях:

- Территория использования: территория Российской Федерации и любая другая территория мира, где Заказчик получает доступ к Материалам через информационно-телекоммуникационную сеть Интернет.
- Срок лицензии: бессрочно при условии соблюдения Заказчиком условий настоящего Договора. «Бессрочный» доступ означает отсутствие заранее установленного срока окончания доступа, но не является обязательством хранения контента при наступлении обстоятельств вне контроля Исполнителя (форс-мажор, блокировка аккаунта в Telegram, технические сбои и т.п.).
- Способы использования: просматривать видеоуроки в личных некоммерческих целях; изучать методические материалы, чек-листы, инструкции; использовать полученные знания, навыки и информацию в личных или профессиональных целях.

7.2.2. Лицензия предоставляется исключительно для личного некоммерческого использования Заказчиком. Любое коммерческое использование Материалов запрещено без письменного согласия Исполнителя.

7.3. Запреты и ограничения.

7.3.1. Заказчику строго запрещается:

- Копировать, воспроизводить, дублировать Материалы полностью или частично в любой форме;
- Распространять, передавать, предоставлять доступ к Материалам третьим лицам в любой форме (безвозмездно или за плату), включая публикацию в сети Интернет, социальных сетях, мессенджерах, на файлообменных сервисах и т.п.;
- Публиковать, размещать в открытом доступе, демонстрировать публично Материалы или их части;
- Использовать Материалы в коммерческих целях, в том числе для оказания услуг третьим лицам, проведения обучающих мероприятий, создания собственных образовательных продуктов на основе Материалов;
- Продавать, сдавать в аренду, передавать по лицензии Материалы или доступ к ним;
- Изменять, модифицировать, адаптировать, переводить, создавать производные произведения на основе Материалов без письменного согласия Исполнителя;
- Удалять, скрывать или изменять любые уведомления об авторских правах, товарных знаках или иные указания на правообладателя, содержащиеся в Материалах;
- Передавать доступ к материалам Курса в Telegram третьим лицам, в том числе путем пересылки сообщений с материалами;
- Осуществлять запись (скринкаст, захват экрана) видеоуроков с целью последующего распространения или публикации;
- Использовать Материалы способами, не предусмотренными настоящим Договором.

7.3.2. Запрещается любое использование Материалов, нарушающее авторские и смежные права Исполнителя в соответствии с законодательством Российской Федерации.

7.4. Ответственность за нарушение прав на интеллектуальную собственность.

7.4.1. В случае нарушения Заказчиком условий настоящего раздела, включая, но не ограничиваясь, копирование, распространение, передачу третьим лицам, публикацию в открытом доступе, использование в коммерческих целях или любое иное незаконное использование Материалов, Заказчик обязан выплатить Исполнителю штраф в размере 20 000 (двадцать тысяч) рублей за каждый факт нарушения.

7.4.2. Каждый отдельный случай копирования, распространения, передачи третьему лицу, публикации в открытом доступе, использования в публичном поле или иного незаконного использования Материалов считается отдельным фактом нарушения, за который взимается указанный штраф.

7.4.3. Под «фактом нарушения» понимается:

- Передача доступа к Материалам одному третьему лицу (каждому отдельному лицу);
- Публикация Материалов или их части на одном интернет-ресурсе (сайте, странице в социальной сети, канале, чате и т.п.);
- Копирование и распространение одного файла Материалов;
- Использование Материалов в одном коммерческом проекте или мероприятии;
- Любое иное отдельное действие, нарушающее права Исполнителя на интеллектуальную собственность.

7.4.4. Штраф за нарушение прав на интеллектуальную собственность является мерой гражданско-правовой ответственности и не освобождает Заказчика от обязанности возместить Исполнителю убытки, причиненные таким нарушением, в полном объеме, превышающем сумму штрафа.

7.4.5. Помимо уплаты штрафа и возмещения убытков, Заказчик обязан немедленно прекратить нарушение прав Исполнителя на интеллектуальную собственность, удалить все незаконно размещенные Материалы, прекратить их использование и распространение.

7.4.6. Исполнитель вправе требовать от Заказчика уплаты штрафа, возмещения убытков и прекращения нарушений в досудебном порядке путем направления письменной претензии. В случае неисполнения требований Исполнителя в течение 5 (пяти) рабочих дней с момента получения претензии, Исполнитель вправе обратиться в суд за защитой своих прав.

7.4.7. Кроме того, нарушение авторских и смежных прав влечет за собой гражданскую, административную и уголовную ответственность в соответствии с законодательством Российской Федерации.

7.5. Мониторинг и выявление нарушений.

7.5.1. Исполнитель вправе осуществлять мониторинг использования Материалов, в том числе с применением технических средств защиты авторских прав (цифровые водяные знаки, уникальные идентификаторы и т.п.).

7.5.2. Заказчик соглашается с тем, что Материалы могут содержать технические средства защиты авторских прав, и обязуется не обходить, не удалять и не модифицировать такие средства защиты.

7.6. Уведомление о нарушениях третьими лицами.

7.6.1. Если Заказчик обнаружит факты незаконного использования Материалов третьими лицами, он обязуется незамедлительно сообщить об этом Исполнителю по адресу электронной почты: yulia@shabashova.ru

7.7. Исключения.

7.7.1. Заказчик вправе делиться общедоступной информацией о Курсе (название, описание, отзывы) в социальных сетях и иных публичных площадках с указанием авторства Исполнителя и ссылкой на Сайт.

7.7.2. Заказчик вправе использовать полученные в ходе Курса знания, навыки, идеи и методы в своей профессиональной деятельности, при условии, что это не связано с копированием, распространением или воспроизведением Материалов.
`
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/legal-oferta.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/legal-privacy.js
try { (() => {
window.LEGAL_PRIVACY = {
  self: 'privacy.html',
  title: 'Политика в отношении обработки персональных данных',
  updated: 'Последнее обновление: 24 ноября 2025 г.',
  body: `
Настоящая Политика в отношении обработки персональных данных (далее — Политика) определяет порядок обработки и меры по обеспечению безопасности персональных данных ИП Шабашова Юлия Валентиновна.

Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».

---

## 1. Общие положения

1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.

1.2. Настоящая Политика применяется ко всей информации, которую Оператор может получить о Пользователях при использовании сайта и при оказании услуг.

1.3. Оператором персональных данных является Индивидуальный предприниматель Шабашова Юлия Валентиновна, ОГРНИП 315443400001406, ИНН 440401123380. Юридический адрес: 157302, Костромская область, г. Мантурово, ул. Нагорная, д. 6, кв. 77. Адрес для корреспонденции: 150005, г. Ярославль, ул. Первомайская, д. 53, оф. 202. Электронная почта: yulia@shabashova.ru, Telegram: @shbshv_support_bot.

---

## 2. Основные понятия

Персональные данные (ПДн) — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).

Обработка персональных данных — любое действие (операция) или совокупность действий (операций) с персональными данными, совершаемых с использованием средств автоматизации или без их использования. Включает в себя: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение.

Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.

Распространение персональных данных — действия, направленные на раскрытие персональных данных неопределенному кругу лиц.

Предоставление персональных данных — действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.

Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).

Уничтожение персональных данных — действия, в результате которых становится невозможным восстановить содержание персональных данных в информационной системе персональных данных и (или) в результате которых уничтожаются материальные носители персональных данных.

Обезличивание персональных данных — действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту персональных данных.

Оператор — ИП Шабашова Юлия Валентиновна, который самостоятельно или совместно с другими лицами организует и (или) осуществляет обработку персональных данных, а также определяет цели обработки, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.

Пользователь — любое физическое лицо, которое посещает Сайт или приобретает услуги Оператора.

Cookies — небольшие файлы, отправляемые веб-приложением и хранящиеся на устройстве Пользователя.

---

## 3. Сбор персональных данных

3.1. Оператор собирает персональные данные Пользователя при:

- Оформлении заказа на Сайте;
- Посещении Сайта (автоматический сбор технических данных).

3.2. При оформлении заказа на Сайте Оператор собирает следующие персональные данные Пользователя:

- Имя;
- Номер телефона;
- Адрес электронной почты (e-mail);
- Telegram-аккаунт (username).

3.3. При посещении Сайта автоматически собираются следующие технические данные:

- IP-адрес;
- Информация о браузере;
- Информация об устройстве;
- Данные о посещенных страницах и времени посещения;
- Информация, собираемая с помощью файлов cookies.

3.4. Данные банковской карты Пользователя при оплате передаются напрямую в платежную систему и не поступают к Оператору. Оператор не имеет доступа к данным банковской карты Пользователя и не хранит их.

---

## 4. Цели обработки персональных данных

4.1. Оператор обрабатывает персональные данные Пользователя в следующих целях.

4.1.1. Исполнение договора:

- Обработка заказа и предоставление доступа к приобретенным материалам онлайн-курса;
- Направление материалов курса в личные сообщения Telegram;
- Связь с Пользователем по вопросам исполнения договора;
- Ответы на вопросы и обращения Пользователя.

4.1.2. Улучшение услуг Оператора:

- Анализ использования Сайта;
- Улучшение функциональности и удобства Сайта;
- Разработка новых услуг.

4.1.3. Маркетинг (с согласия Пользователя):

- Направление информационных и рекламных материалов об услугах Оператора;
- Информирование о специальных предложениях и акциях.

4.1.4. Соблюдение законодательства:

- Выполнение требований налогового и бухгалтерского учета;
- Предоставление информации по запросам государственных органов.

4.2. Обработка персональных данных Оператором ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.

4.3. Обработке подлежат только персональные данные, которые отвечают целям их обработки. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки.

---

## 5. Правовые основания обработки персональных данных

5.1. Правовыми основаниями обработки персональных данных Оператором являются:

- Согласие Пользователя на обработку персональных данных;
- Договор, стороной которого является Пользователь;
- Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных»;
- Иные федеральные законы и нормативные правовые акты Российской Федерации.

5.2. Оформляя заказ на Сайте, Пользователь выражает свое согласие с настоящей Политикой и дает согласие Оператору на обработку своих персональных данных в целях, указанных в разделе 4 настоящей Политики.

5.3. Обработка персональных данных осуществляется с соблюдением принципов и правил, предусмотренных Федеральным законом «О персональных данных».

---

## 6. Порядок и условия обработки персональных данных

6.1. Оператор осуществляет обработку персональных данных — операции, совершаемые с использованием средств автоматизации или без использования таких средств, включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение.

6.2. Обработка персональных данных осуществляется Оператором с использованием баз данных, находящихся на территории Российской Федерации, в соответствии с частью 5 статьи 18 Федерального закона «О персональных данных».

6.3. Оператор обрабатывает персональные данные как с использованием средств автоматизации, так и без их использования.

6.4. Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий.

6.5. К мерам по обеспечению безопасности персональных данных относятся:

- Ограничение доступа к персональным данным (доступ имеют только лица, которым это необходимо для исполнения своих трудовых обязанностей);
- Использование средств защиты информации при хранении и передаче персональных данных;
- Использование защищенных каналов связи (HTTPS) для передачи данных через Сайт;
- Хранение персональных данных на защищенных серверах с ограниченным доступом;
- Регулярное резервное копирование данных;
- Обеспечение конфиденциальности персональных данных работниками Оператора, имеющими доступ к персональным данным.

---

## 7. Сроки обработки и хранения персональных данных

7.1. Оператор хранит персональные данные Пользователя в течение срока, необходимого для достижения целей обработки, указанных в разделе 4 настоящей Политики.

7.2. Персональные данные, необходимые для исполнения договора, хранятся в течение всего срока действия договора и в течение 3 (трех) лет после его прекращения, если иной срок не установлен законодательством Российской Федерации.

7.3. Персональные данные для целей бухгалтерского и налогового учета хранятся в течение сроков, установленных законодательством Российской Федерации (не менее 5 лет с момента совершения операции).

7.4. Персональные данные для целей маркетинговых рассылок хранятся до момента отказа Пользователя от получения рассылок или отзыва согласия на обработку.

7.5. Технические данные о посещении Сайта хранятся в течение 1 (одного) года с момента сбора.

7.6. По истечении сроков хранения персональные данные подлежат уничтожению либо обезличиванию, если иное не предусмотрено федеральным законом.

7.7. Условием прекращения обработки персональных данных является достижение целей обработки, истечение срока действия согласия или отзыв согласия Пользователя, а также выявление неправомерной обработки персональных данных.

---

## 8. Передача персональных данных третьим лицам

8.1. Оператор передает персональные данные Пользователя следующим третьим лицам.

8.1.1. Платежная система. Для обработки оплаты и направления кассового чека Оператор передает контактные данные Пользователя (имя, email, номер телефона) платежной системе, используемой на Сайте.

8.1.2. Telegram. Для направления материалов курса в личные сообщения Оператор передает Telegram-аккаунт Пользователя мессенджеру Telegram.

8.1.3. Провайдеры IT-услуг. Оператор использует услуги хостинг-провайдеров и сервисов электронной почты для хранения данных и коммуникации с Пользователями.

8.2. Передача персональных данных третьим лицам осуществляется при соблюдении следующих условий:

- Третье лицо осуществляет обработку персональных данных с использованием баз данных на территории Российской Федерации;
- Третье лицо обеспечивает конфиденциальность персональных данных при их обработке и использовании, обязуется не раскрывать иным лицам, а также не распространять персональные данные Пользователей без их согласия;
- Третье лицо гарантирует соблюдение мер по обеспечению безопасности персональных данных при их обработке.

8.3. Оператор не передает персональные данные Пользователя иным третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.

8.4. Оператор вправе раскрыть персональные данные Пользователя государственным органам (налоговая служба, правоохранительные органы и другие уполномоченные органы), если это требуется по закону или по официальному запросу таких органов.

8.5. Оператор не продает и не передает персональные данные Пользователей третьим лицам в маркетинговых целях без согласия Пользователей.

---

## 9. Права субъекта персональных данных

9.1. Пользователь имеет право.

9.1.1. Получать информацию, касающуюся обработки его персональных данных, в том числе содержащую:

- Подтверждение факта обработки персональных данных Оператором;
- Правовые основания и цели обработки персональных данных;
- Цели и применяемые Оператором способы обработки персональных данных;
- Наименование и место нахождения Оператора, сведения о лицах, которые имеют доступ к персональным данным или которым могут быть раскрыты персональные данные;
- Обрабатываемые персональные данные, относящиеся к соответствующему Пользователю, источник их получения;
- Сроки обработки персональных данных, в том числе сроки их хранения;
- Порядок осуществления Пользователем прав, предусмотренных Федеральным законом «О персональных данных».

9.1.2. Требовать от Оператора уточнения своих персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки.

9.1.3. Отозвать согласие на обработку персональных данных.

9.1.4. Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор) или в судебном порядке.

9.1.5. Защищать свои права и законные интересы, в том числе на возмещение убытков и компенсацию морального вреда в судебном порядке.

9.2. Для реализации своих прав Пользователь направляет Оператору письменный запрос на адрес электронной почты: yulia@shabashova.ru

9.3. В запросе Пользователь указывает:

- Фамилию, имя, отчество (при наличии);
- Контактную информацию (email, телефон);
- Описание запроса или требования.

9.4. Оператор рассматривает запрос Пользователя и направляет ответ в течение 30 (тридцати) дней с момента получения запроса.

9.5. Предоставление информации о персональных данных осуществляется Оператором безвозмездно.

9.6. В срок, не превышающий семи рабочих дней со дня предоставления Пользователем сведений, подтверждающих, что персональные данные являются неполными, неточными или неактуальными, Оператор обязан внести в них необходимые изменения.

9.7. В срок, не превышающий семи рабочих дней со дня представления Пользователем сведений, подтверждающих, что персональные данные являются незаконно полученными или не являются необходимыми для заявленной цели обработки, Оператор обязан уничтожить такие персональные данные.

9.8. Оператор обязан уведомить Пользователя о внесенных изменениях и предпринятых мерах.

---

## 10. Отзыв согласия на обработку персональных данных

10.1. Пользователь вправе в любое время отозвать свое согласие на обработку персональных данных, направив Оператору письменное уведомление на адрес электронной почты: yulia@shabashova.ru

10.2. В уведомлении Пользователь указывает:

- Фамилию, имя, отчество (при наличии);
- Контактную информацию;
- Какое именно согласие отзывается (на обработку всех данных или только на маркетинговые рассылки).

10.3. После получения уведомления Оператор прекращает обработку персональных данных в течение 30 (тридцати) дней, за исключением случаев, когда законодательство Российской Федерации требует сохранения данных (например, для бухгалтерского учета).

10.4. Оператор уведомляет Пользователя о прекращении обработки персональных данных и удалении данных.

10.5. Отзыв согласия на обработку персональных данных, необходимых для исполнения договора, может привести к невозможности предоставления Оператором услуг Пользователю.

---

## 11. Использование файлов cookies

11.1. Оператор использует файлы cookies (небольшие текстовые файлы, которые сохраняются на устройстве Пользователя при посещении Сайта) для:

- Обеспечения работы Сайта;
- Запоминания предпочтений Пользователя;
- Анализа посещаемости и поведения пользователей;
- Улучшения функциональности Сайта.

11.2. Пользователь может настроить свой браузер так, чтобы он блокировал все файлы cookies или уведомлял об их отправке. Однако некоторые функции Сайта могут не работать без файлов cookies.

11.3. Используя Сайт, Пользователь соглашается с использованием файлов cookies в соответствии с настоящей Политикой.

---

## 12. Изменение политики конфиденциальности

12.1. Оператор вправе вносить изменения в настоящую Политику в любое время.

12.2. Новая редакция Политики вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики.

12.3. О существенных изменениях в Политике Оператор информирует Пользователей одним из следующих способов:

- Размещением уведомления на Сайте;
- Направлением уведомления на адрес электронной почты Пользователя.

12.4. Дата последнего обновления Политики указана в начале документа.

12.5. Продолжение использования Сайта или услуг Оператора после публикации новой редакции Политики означает согласие Пользователя с внесенными изменениями.

---

## 13. Применимое законодательство

13.1. К настоящей Политике и отношениям между Оператором и Пользователем, возникающим в связи с обработкой персональных данных, применяется законодательство Российской Федерации.

13.2. Все споры, возникающие из настоящей Политики или в связи с ней, разрешаются в соответствии с законодательством Российской Федерации.

---

## 14. Обратная связь и контактная информация

14.1. Если у Пользователя есть вопросы по настоящей Политике или по обработке персональных данных, Пользователь может связаться с Оператором по электронной почте yulia@shabashova.ru или в Telegram @shbshv_support_bot. Юридический адрес: 157302, Костромская область, г. Мантурово, ул. Нагорная, д. 6, кв. 77. Адрес для корреспонденции: 150005, г. Ярославль, ул. Первомайская, д. 53, оф. 202.

14.2. Оператор рассматривает обращения Пользователей и направляет ответы в течение 30 (тридцати) дней с момента получения обращения.

---

## Реквизиты

ИП Шабашова Юлия Валентиновна
ОГРНИП: 315443400001406
ИНН: 440401123380
Электронная почта: yulia@shabashova.ru
Telegram: @shbshv_support_bot
`
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/legal-privacy.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/legal-soglasie.js
try { (() => {
window.LEGAL_SOGLASIE = {
  self: 'soglasie.html',
  title: 'Согласие на обработку персональных данных',
  updated: '',
  body: `
Оформляя заказ на сайте и проставляя галочку согласия при оформлении заказа, Пользователь в соответствии со статьей 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» дает согласие Индивидуальному предпринимателю Шабашовой Юлии Валентиновне, ИНН 440401123380, ОГРНИП 315443400001406, зарегистрированному по адресу: 157302, Костромская область, г. Мантурово, ул. Нагорная, д. 6, кв. 77, адрес для корреспонденции: 150005, г. Ярославль, ул. Первомайская, д. 53, оф. 202 (далее — Оператор), на обработку своих персональных данных на следующих условиях:

---

## 1. Цели обработки персональных данных

Оператор обрабатывает персональные данные Пользователя в следующих целях:

1.1. Подготовка, заключение и исполнение гражданско-правовых договоров между Пользователем и Оператором на оказание информационно-консультационных услуг.

1.2. Предоставление Пользователю доступа к сервисам, информации и/или материалам, содержащимся на веб-сайте Оператора.

1.3. Установление обратной связи с Пользователем, включая направление уведомлений, запросов и информации, касающихся исполнения договора, а также обработку запросов и заявок от Пользователя.

1.4. Направление Пользователю информационных рассылок и рекламных материалов об услугах Оператора (с возможностью отказа от получения).

1.5. Создание учетной записи для доступа к материалам сайта и онлайн-курсам Оператора.

1.6. Направление материалов онлайн-курсов в мессенджер Telegram.

---

## 2. Перечень персональных данных, на обработку которых дается согласие

Пользователь дает согласие на обработку следующих персональных данных:

- Имя;
- Номер телефона;
- Адрес электронной почты (e-mail);
- Telegram-аккаунт (username).

---

## 3. Перечень действий с персональными данными

Пользователь дает согласие на совершение Оператором следующих действий с персональными данными, совершаемых с использованием средств автоматизации или без использования таких средств: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), обезличивание, блокирование, удаление, уничтожение.

---

## 4. Способ обработки персональных данных

Оператор осуществляет обработку персональных данных как с использованием средств автоматизации (автоматизированная обработка), так и без использования таких средств (неавтоматизированная обработка).

Обработка персональных данных осуществляется с использованием баз данных, находящихся на территории Российской Федерации.

---

## 5. Передача персональных данных третьим лицам

Пользователь выражает согласие на передачу Оператором его персональных данных следующим третьим лицам для достижения указанных выше целей:

- АО «Тинькофф Банк» (Т-Банк) для обработки платежей и направления кассовых чеков;
- Мессенджеру Telegram для направления материалов онлайн-курсов в личные сообщения;
- ООО «ЮниСендер» (Unisender) для рассылки информационных и рекламных материалов по электронной почте и предоставления доступа к материалам курса через чат-бота Telegram.

---

## 6. Срок действия согласия

Настоящее согласие действует с момента его предоставления до достижения целей обработки персональных данных или до момента его отзыва Пользователем.

Персональные данные, необходимые для исполнения договора, могут храниться в течение 3 (трех) лет после прекращения договора, а также в течение сроков, установленных законодательством Российской Федерации для целей бухгалтерского и налогового учета.

---

## 7. Порядок отзыва согласия

Пользователь вправе отозвать настоящее согласие в любой момент, направив Оператору письменное уведомление на адрес электронной почты: yulia@shabashova.ru или по почтовому адресу: 150005, г. Ярославль, ул. Первомайская, д. 53, оф. 202.

В случае отзыва согласия Оператор прекращает обработку персональных данных в течение 30 (тридцати) дней, за исключением случаев, когда законодательство Российской Федерации требует сохранения данных.

---

## 8. Дополнительные условия

8.1. Пользователь подтверждает, что дает данное согласие добровольно, по собственной воле и в своих интересах.

8.2. Пользователь подтверждает, что ознакомлен с Политикой в отношении обработки персональных данных Оператора.

8.3. Пользователь проинформирован о своих правах, предусмотренных Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных», в том числе о праве:

- получать информацию, касающуюся обработки своих персональных данных;
- требовать уточнения своих персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;
- обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор) или в судебном порядке.

8.4. Пользователь понимает, что отзыв согласия на обработку персональных данных, необходимых для исполнения договора, может привести к невозможности предоставления Оператором услуг.

---

Проставляя галочку при оформлении заказа на сайте, Пользователь подтверждает свое согласие со всеми условиями настоящего документа.

---

## Реквизиты

ИП Шабашова Юлия Валентиновна
ОГРНИП: 315443400001406
ИНН: 440401123380
Юридический адрес: 157302, Костромская область, г. Мантурово, ул. Нагорная, д. 6, кв. 77
Адрес для корреспонденции: 150005, г. Ярославль, ул. Первомайская, д. 53, оф. 202
Электронная почта: yulia@shabashova.ru
Telegram: @shbshv_support_bot
`
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/legal-soglasie.js", error: String((e && e.message) || e) }); }

// ui_kits/site/ApplyScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Card,
  Divider,
  Icon,
  FacetPanel,
  Badge
} = window.SHBSHVAIDesignSystem_3ba733;
const AB = 'assets/icons';
function ApplyScreen({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-pad) 0'
    }
  }, /*#__PURE__*/React.createElement(FacetPanel, {
    cut: 34,
    tone: "cold",
    style: {
      padding: 'var(--space-10)',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \xB7 \u043F\u043E\u0442\u043E\u043A 4"), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display",
    style: {
      margin: '10px 0 0',
      fontSize: 'var(--fs-display-3)'
    }
  }, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0432\u043E\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "\u041C\u044B \u0447\u0438\u0442\u0430\u0435\u043C \u043A\u0430\u0436\u0434\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443 \u0441\u0430\u043C\u0438 \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u0434\u043D\u0435\u0439.")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041F\u043E\u0447\u0442\u0430",
    type: "email",
    placeholder: "you@studio.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0427\u0435\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0435\u0441\u044C",
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435",
    iconBase: AB,
    options: ['Дизайн', 'Продукт', 'Исследования', 'Преподавание', 'Другое']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C",
    placeholder: "@username",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 15,
      base: AB
    })
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u0417\u0430\u0434\u0430\u0447\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u0438\u0434\u0451\u0442\u0435",
    rows: 4,
    placeholder: "\u041F\u0430\u0440\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u2014 \u044D\u0442\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E"
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: "none"
  }), /*#__PURE__*/React.createElement(RadioGroup, {
    label: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0443\u0447\u0430\u0441\u0442\u0438\u044F"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "fmt",
    defaultChecked: true,
    label: "\u041F\u043E\u0442\u043E\u043A",
    hint: "\u0416\u0438\u0432\u044B\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0438 \u0440\u0430\u0437\u0431\u043E\u0440\u044B \u0432 \u0433\u0440\u0443\u043F\u043F\u0435"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "fmt",
    label: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E",
    hint: "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "\u041F\u0438\u0441\u044C\u043C\u0430 \u043E \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0437\u0431\u043E\u0440\u0430\u0445",
    hint: "\u041E\u0434\u043D\u043E \u043F\u0438\u0441\u044C\u043C\u043E \u0432 \u043D\u0435\u0434\u0435\u043B\u044E, \u0431\u0435\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u044F",
    iconBase: AB,
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onSubmit,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16,
      base: AB
    })
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 4 \u043C\u0435\u0441\u0442\u0430"))));
}
Object.assign(window, {
  ApplyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/EssaysScreen.jsx
try { (() => {
const {
  Card,
  Tag,
  Badge,
  Icon,
  Tabs,
  SpectrumRule,
  Button
} = window.SHBSHVAIDesignSystem_3ba733;
const EB = 'assets/icons';
const ESSAYS = [['Почему модель не спорит', 'Разборы', '12 мин', 'quartz-rose-linen.jpg'], ['Контекст — это свет', 'Эссе', '8 мин', 'hourglass-glow.jpg'], ['Тишина как инструмент', 'Практика', '6 мин', 'lotus-pale.jpg'], ['Что значит «не знаю» для машины', 'Эссе', '11 мин', 'frosted-cube.jpg']];
function EssaysScreen() {
  const [tab, setTab] = React.useState('Все');
  const list = tab === 'Все' ? ESSAYS : ESSAYS.filter(e => e[1] === tab);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-pad-lg) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "\u041F\u0438\u0441\u044C\u043C\u0430 \u0438 \u044D\u0441\u0441\u0435"), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display",
    style: {
      margin: 0,
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-display-2)'
    }
  }, "\u041A\u0430\u043A \u0434\u0443\u043C\u0430\u0442\u044C \u0440\u044F\u0434\u043E\u043C \u0441 \u043C\u0430\u0448\u0438\u043D\u043E\u0439")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: ['Все', 'Эссе', 'Разборы', 'Практика']
  })), /*#__PURE__*/React.createElement(SpectrumRule, {
    thickness: 1,
    soft: true,
    style: {
      marginTop: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--gutter-lg)',
      marginTop: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-card-lg)',
      overflow: 'hidden',
      height: 380,
      clipPath: 'var(--clip-facet)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/imagery/figure-spectrum-dune.jpg",
    alt: "\u0424\u0438\u0433\u0443\u0440\u0430 \u043D\u0430 \u0441\u0432\u0435\u0442\u043B\u043E\u043C \u0441\u043A\u043B\u043E\u043D\u0435",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, "\u041D\u043E\u0432\u043E\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--text-faint)'
    }
  }, "18 \u043C\u0438\u043D \xB7 \u0438\u044E\u043B\u044C 2026")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 1.08,
      color: 'var(--ink-900)'
    }
  }, "\u0421\u0442\u043E\u044E \u043D\u0430 \u0437\u0435\u043C\u043B\u0435 \u0438 \u0432\u0438\u0436\u0443 \u043A\u043E\u0441\u043C\u043E\u0441"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043D\u0430\u0432\u044B\u043A \u0440\u044F\u0434\u043E\u043C \u0441 \u043C\u043E\u0434\u0435\u043B\u044C\u044E \u2014 \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0434\u0432\u0430 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E: \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u043F\u043E\u0434 \u0440\u0443\u043A\u043E\u0439 \u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043C\u0438\u0440\u0430 \u0437\u0430 \u043D\u0435\u0439."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      alignSelf: 'flex-start',
      paddingLeft: 0
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15,
      base: EB
    })
  }, "\u0427\u0438\u0442\u0430\u0442\u044C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-11)'
    }
  }, list.map(([title, kind, mins, img]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    padding: "sm",
    media: 'assets/imagery/' + img,
    mediaAlt: "",
    style: {
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "quiet"
  }, kind), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--text-faint)'
    }
  }, mins)))));
}
Object.assign(window, {
  EssaysScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/EssaysScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag,
  FacetPanel,
  SpectrumRule,
  Divider
} = window.SHBSHVAIDesignSystem_3ba733;
const HB = 'assets/icons';
function HomeScreen({
  onRoute,
  onApply
}) {
  const principles = [['gem', 'Грань', 'Сложное объясняем через материал: где входит свет, там и смысл.'], ['orbit', 'Масштаб', 'Стою на земле и вижу космос — от практики к устройству мира.'], ['layers', 'Слои', 'Восемь модулей, каждый — один принцип, доведённый до руки.']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(FacetPanel, {
    cut: 64,
    image: "assets/imagery/prism-crystal.png",
    imageAlt: "\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u0432 \u043F\u043E\u0442\u043E\u043A\u0435 \u0441\u0432\u0435\u0442\u0430",
    style: {
      minHeight: 560,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-13) var(--page-pad-lg) var(--space-11)',
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "\u041F\u043E\u0442\u043E\u043A 4 \xB7 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C"), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "\u0418\u0434\u0451\u0442 \u043D\u0430\u0431\u043E\u0440")), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display",
    style: {
      fontSize: 'var(--fs-display-1)',
      lineHeight: 'var(--lh-display-1)',
      letterSpacing: 'var(--ls-display-1)',
      margin: 0
    }
  }, "\u0421\u0432\u0435\u0442 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0433\u0440\u0430\u043D\u044C", /*#__PURE__*/React.createElement("br", null), "\u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F"), /*#__PURE__*/React.createElement(SpectrumRule, {
    thickness: 2,
    length: "280px"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '52ch',
      margin: 0
    }
  }, "\u041A\u0443\u0440\u0441 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0434\u0443\u043C\u0430\u044E\u0442 \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043A\u0430\u043A \u0434\u0443\u043C\u0430\u0442\u044C \u0440\u044F\u0434\u043E\u043C \u0441 \u043D\u0438\u043C\u0438. \u0411\u0435\u0437 \u043C\u0430\u0433\u0438\u0438 \u0438 \u0431\u0435\u0437 \u0448\u0435\u0441\u0442\u0435\u0440\u0451\u043D\u043E\u043A \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u0438\u0437\u0438\u043A\u0430 \u0441\u043C\u044B\u0441\u043B\u0430."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onApply,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      base: HB
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u0442\u043E\u043A"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onRoute('program')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--page-pad-lg) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--gutter)'
    }
  }, principles.map(([icon, title, text]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    padding: "lg",
    style: {
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    base: HB,
    style: {
      color: 'var(--gold-deep)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, text))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--page-pad-lg) 0'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",
    spacing: "none"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter-lg)',
      marginTop: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      lineHeight: 'var(--lh-display-3)'
    }
  }, "\u0412\u043E\u0441\u0435\u043C\u044C \u043C\u043E\u0434\u0443\u043B\u0435\u0439, \u043E\u0434\u0438\u043D \u043F\u0440\u0438\u043D\u0446\u0438\u043F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)'
    }
  }, "\u041A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E \u2014 \u043E\u0434\u043D\u0430 \u0433\u0440\u0430\u043D\u044C: \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442, \u043F\u0430\u043C\u044F\u0442\u044C, \u0433\u0440\u0430\u043D\u0438\u0446\u044B. \u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445, \u0430 \u043D\u0435 \u043D\u0430 \u0434\u0435\u043C\u043E."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    spectrum: true
  }, "\u041F\u0440\u0435\u043B\u043E\u043C\u043B\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Tag, null, "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement(Tag, null, "\u0420\u0430\u0437\u0431\u043E\u0440\u044B"), /*#__PURE__*/React.createElement(Tag, {
    variant: "quiet"
  }, "12 \u043C\u0435\u0441\u0442")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => onRoute('program'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 15,
      base: HB
    })
  }, "\u0412\u0441\u0435 \u043C\u043E\u0434\u0443\u043B\u0438")), /*#__PURE__*/React.createElement(Card, {
    variant: "facet",
    padding: "lg",
    style: {
      background: 'var(--gradient-sand)',
      gap: 'var(--space-6)',
      minHeight: 300,
      justifyContent: 'center'
    }
  }, [['01', 'Как думает модель'], ['02', 'Контекст как материал'], ['03', 'Границы и отказ']].map(([n, t]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-6)',
      paddingBottom: 'var(--space-5)',
      borderBottom: '1px solid rgba(77,14,18,.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--gold-deep)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--ink-900)'
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "\u2026\u0438 \u0435\u0449\u0451 \u043F\u044F\u0442\u044C")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--page-pad-lg) 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    goldEdge: true,
    padding: "lg",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center',
      padding: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 22,
    base: HB,
    style: {
      color: 'var(--gold-light)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-quote)',
      lineHeight: 'var(--lh-quote)',
      color: 'var(--paper-1)'
    }
  }, "\u042F \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B\u0430 \u0441\u043F\u043E\u0440\u0438\u0442\u044C \u0441 \u043C\u0430\u0448\u0438\u043D\u043E\u0439 \u0438 \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u0433\u0434\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u043E\u043D\u0430 \u0432\u0438\u0434\u0438\u0442 \u043C\u0438\u0440 \u0438\u043D\u0430\u0447\u0435."), /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--text-inverse-muted)'
    }
  }, "\u041C\u0430\u0440\u0438\u043D\u0430 \u041A. \xB7 \u043F\u043E\u0442\u043E\u043A 3")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      height: 240
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/imagery/caustics-room.jpg",
    alt: "\u041A\u0430\u0443\u0441\u0442\u0438\u043A\u0430 \u043D\u0430 \u0441\u0442\u0435\u043D\u0435",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ProgramScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tabs,
  Divider,
  Tooltip,
  Tag
} = window.SHBSHVAIDesignSystem_3ba733;
const PB = 'assets/icons';
const MODULES = [['01', 'Как думает модель', 'Внимание, вероятность, температура — на пальцах и на бумаге.', '42 мин'], ['02', 'Контекст как материал', 'Почему длина окна меняет смысл ответа.', '38 мин'], ['03', 'Границы и отказ', 'Где модель обязана сказать «нет» и почему это ценность.', '31 мин'], ['04', 'Память и забывание', 'Что сохраняется между разговорами, а что нет.', '45 мин'], ['05', 'Инструменты', 'Модель, которая умеет действовать: вызовы, файлы, поиск.', '52 мин'], ['06', 'Оценка', 'Как понять, что ответ хороший, без веры на слово.', '36 мин'], ['07', 'Практика письма', 'Собираем свой рабочий контур: от задачи до результата.', '61 мин'], ['08', 'Тишина', 'Когда не звать модель вовсе — и почему это часть мастерства.', '24 мин']];
function ProgramScreen({
  onApply
}) {
  const [tab, setTab] = React.useState('modules');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-pad-lg) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \xB7 \u043F\u043E\u0442\u043E\u043A 4"), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display",
    style: {
      margin: 0,
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-display-2)',
      letterSpacing: 'var(--ls-display-2)'
    }
  }, "\u0412\u043E\u0441\u0435\u043C\u044C \u043D\u0435\u0434\u0435\u043B\u044C, \u0432\u043E\u0441\u0435\u043C\u044C \u0433\u0440\u0430\u043D\u0435\u0439"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, "\u0416\u0438\u0432\u044B\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u043F\u043E \u0432\u0442\u043E\u0440\u043D\u0438\u043A\u0430\u043C, \u0440\u0430\u0437\u0431\u043E\u0440 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u043F\u043E \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430\u043C. \u0417\u0430\u043F\u0438\u0441\u0438 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'about',
      label: 'О программе'
    }, {
      value: 'modules',
      label: 'Модули',
      count: 8
    }, {
      value: 'faq',
      label: 'Вопросы'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--gutter-lg)',
      marginTop: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, tab === 'modules' && MODULES.map(([n, title, text, dur]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      gap: 'var(--space-6)',
      alignItems: 'baseline',
      padding: 'var(--space-7) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--gold-deep)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, text)), /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, dur))), tab === 'about' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 'var(--text-measure)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u041A\u0443\u0440\u0441 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u043C\u043E\u0434\u0435\u043B\u044F\u043C\u0438 \u0438 \u0445\u043E\u0447\u0435\u0442 \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C, \u0430 \u043D\u0435 \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u0442\u044C. \u041C\u044B \u043D\u0435 \u0443\u0447\u0438\u043C \u043F\u0440\u043E\u043C\u043F\u0442\u0430\u043C \u043A\u0430\u043A \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u043C: \u043C\u044B \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432\u043D\u0443\u0442\u0440\u0438, \u0438 \u0441\u0442\u0440\u043E\u0438\u043C \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0441\u0432\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0440\u0430\u0431\u043E\u0442\u044B."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)'
    }
  }, "\u0413\u0440\u0443\u043F\u043F\u0430 \u2014 \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A. \u042D\u0442\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u043A\u0430\u0437\u0430\u043B \u0441\u0432\u043E\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0440\u0430\u0437\u0431\u043E\u0440."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    spectrum: true
  }, "\u041F\u0440\u0435\u043B\u043E\u043C\u043B\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Tag, null, "8 \u043D\u0435\u0434\u0435\u043B\u044C"), /*#__PURE__*/React.createElement(Tag, null, "12 \u043C\u0435\u0441\u0442"))), tab === 'faq' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Нужен ли опыт в программировании?', 'Нет. Нужен опыт в своём деле — модель подстроится под него.'], ['Что если пропущу встречу?', 'Записи остаются навсегда, вопросы можно задать письмом.'], ['Есть ли рассрочка?', 'Да, на три части без процентов.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      padding: 'var(--space-7) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, a))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    goldEdge: true,
    style: {
      position: 'sticky',
      top: 100,
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "12 \u043C\u0435\u0441\u0442"), /*#__PURE__*/React.createElement(Tooltip, {
    content: "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0447\u0435\u0442\u044B\u0440\u0435"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    base: PB,
    style: {
      color: 'var(--text-faint)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-display",
    style: {
      fontSize: 48,
      color: 'var(--ink-900)'
    }
  }, "84 000"), /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u20BD")), /*#__PURE__*/React.createElement(Divider, {
    spacing: "none"
  }), [['calendar', 'Старт 8 сентября'], ['clock', 'Вторник и четверг, 19:00'], ['users', 'Группа 12 человек'], ['book-open', 'Записи навсегда']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    base: PB,
    style: {
      color: 'var(--gold-deep)'
    }
  }), t)), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: onApply
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)',
      textAlign: 'center'
    }
  }, "\u041C\u044B \u0447\u0438\u0442\u0430\u0435\u043C \u043A\u0430\u0436\u0434\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443 \u0441\u0430\u043C\u0438"))));
}
Object.assign(window, {
  ProgramScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ProgramScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteChrome.jsx
try { (() => {
const {
  Button,
  Icon,
  SpectrumRule,
  Divider
} = window.SHBSHVAIDesignSystem_3ba733;
const IB = 'assets/icons';
function Wordmark({
  inverse = false,
  size = 22
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ds-display",
    style: {
      fontSize: size,
      letterSpacing: '.02em',
      color: inverse ? 'var(--paper-1)' : 'var(--ink-900)',
      lineHeight: 1
    }
  }, "shbshv", /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'var(--gold-light)' : 'var(--gold-deep)'
    }
  }, " ai"));
}
function SiteHeader({
  route,
  onRoute,
  onApply
}) {
  const nav = [['home', 'Главная'], ['program', 'Программа'], ['essays', 'Эссе']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--glass-fill-strong)',
      backdropFilter: 'var(--backdrop-glass)',
      WebkitBackdropFilter: 'var(--backdrop-glass)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad-lg)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onRoute('home'),
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginRight: 'auto'
    }
  }, nav.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => onRoute(k),
    style: {
      position: 'relative',
      border: 0,
      background: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 500,
      color: route === k ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, label, route === k ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -2,
      height: 2,
      borderRadius: 2,
      background: 'var(--gradient-spectrum)'
    }
  }) : null))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15,
      base: IB
    }),
    onClick: () => onRoute('essays')
  }, "\u041F\u0438\u0441\u044C\u043C\u0430"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onApply
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")));
}
function SiteFooter({
  onRoute
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gradient-ink)',
      color: 'var(--text-inverse-muted)',
      marginTop: 'var(--space-13)'
    }
  }, /*#__PURE__*/React.createElement(SpectrumRule, {
    thickness: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-pad-lg) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true,
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '34ch',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.65,
      margin: 0
    }
  }, "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u044C: \u043A\u0430\u043A \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u043C\u0430\u0448\u0438\u043D\u044B, \u043D\u0435 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u0430\u044F \u0431\u044B\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C.")), [['Разделы', ['Главная', 'Программа', 'Эссе']], ['Связь', ['Письма', 'Телеграм', 'Почта']]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--gold-light)'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 'var(--fs-body-sm)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad-lg) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    tone: "inverse",
    spacing: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-mono",
    style: {
      fontSize: 11,
      color: 'var(--text-inverse-muted)'
    }
  }, "\xA9 2026 shbshv ai")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FacetMark = __ds_scope.FacetMark;

__ds_ns.FACET_MARKS = __ds_scope.FACET_MARKS;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FacetPanel = __ds_scope.FacetPanel;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SpectrumRule = __ds_scope.SpectrumRule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
