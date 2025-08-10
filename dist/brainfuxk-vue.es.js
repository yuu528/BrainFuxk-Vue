import './index.css';var Eo = Object.defineProperty;
var Ao = (e, t, n) => t in e ? Eo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ce = (e, t, n) => Ao(e, typeof t != "symbol" ? t + "" : t, n);
import { ref as $, Fragment as de, reactive as Tt, watchEffect as Ue, toRef as V, capitalize as tn, isVNode as Bo, Comment as To, camelize as gl, shallowRef as X, unref as ze, warn as Tn, getCurrentInstance as Oo, computed as C, provide as Le, inject as ve, defineComponent as yl, h as Rt, isRef as el, toValue as Ke, createElementVNode as w, normalizeClass as Y, createVNode as g, normalizeStyle as ie, watch as Q, onScopeDispose as Ee, effectScope as hl, toRaw as xe, useId as ct, onBeforeUnmount as qe, onMounted as pt, onUpdated as Lo, mergeProps as J, toRefs as Ro, Text as Fo, readonly as bl, Transition as Ct, resolveDynamicComponent as Mo, nextTick as Ce, withDirectives as Ie, toDisplayString as tt, TransitionGroup as Sl, vShow as wt, onBeforeMount as On, Teleport as No, onDeactivated as $o, cloneVNode as Do, createTextVNode as ot, vModelText as zo, openBlock as Te, createElementBlock as Et, withCtx as W, renderList as $t, createBlock as yt, createCommentVNode as Ho, withKeys as jo } from "vue";
class Yl {
  static copyToClipboard(t) {
    return navigator.clipboard ? (navigator.clipboard.writeText(t), !0) : !1;
  }
  static factor(t) {
    let n = [], l = t;
    for (let a = 2; l > 1 && a <= l; a++)
      l % a === 0 && (n.push(a), l /= a, a = 1);
    return l > 1 && n.push(l), n.sort((a, i) => a - i), n;
  }
}
const Ut = class Ut {
  constructor(t) {
    ce(this, "inc");
    ce(this, "dec");
    ce(this, "incVal");
    ce(this, "decVal");
    ce(this, "output");
    ce(this, "input");
    ce(this, "loopStart");
    ce(this, "loopEnd");
    t !== void 0 ? Object.entries(t).forEach(([n, l]) => {
      this[n] = l;
    }) : Object.entries(Ut.PRESETS.Brainfuxk).forEach(([n, l]) => {
      this[n] = l;
    });
  }
};
ce(Ut, "enum", {
  inc: 0,
  dec: 1,
  incVal: 2,
  decVal: 3,
  output: 4,
  input: 5,
  loopStart: 6,
  loopEnd: 7
}), ce(Ut, "PRESETS", {
  Brainfuxk: {
    inc: ">",
    dec: "<",
    incVal: "+",
    decVal: "-",
    output: ".",
    input: ",",
    loopStart: "[",
    loopEnd: "]"
  },
  Ook: {
    inc: "Ook. Ook?",
    dec: "Ook? Ook.",
    incVal: "Ook. Ook.",
    decVal: "Ook! Ook!",
    output: "Ook! Ook.",
    input: "Ook. Ook!",
    loopStart: "Ook! Ook?",
    loopEnd: "Ook? Ook!"
  },
  Nyaruko: {
    inc: "(」・ω・)」うー(／・ω・)／にゃー",
    dec: "(」・ω・)」うー!!(／・ω・)／にゃー!!",
    incVal: "(」・ω・)」うー!(／・ω・)／にゃー!",
    decVal: "(」・ω・)」うー!!!(／・ω・)／にゃー!!!",
    output: "Let's＼(・ω・)／にゃー",
    input: "cosmic!",
    loopStart: "CHAOS☆CHAOS!",
    loopEnd: "I WANNA CHAOS!"
  },
  Kemono: {
    inc: "たのしー！",
    dec: "すごーい！",
    incVal: "たーのしー！",
    decVal: "すっごーい！",
    output: "なにこれなにこれ！",
    input: "おもしろーい！",
    loopStart: "うわー！",
    loopEnd: "わーい！"
  },
  Jojo: {
    inc: ["スターフィンガー！", "やれやれだぜ"],
    dec: ["ロードローラーだ！", "貧弱ゥ"],
    incVal: "オラ",
    decVal: "無駄",
    output: "ハーミットパープル",
    input: "新手のスタンド使いか！",
    loopStart: "あ…ありのまま 今　起こった事を話すぜ！",
    loopEnd: "ザ・ワールド！"
  },
  BFBASICn: {
    inc: "す",
    dec: "ばぼーん",
    incVal: "ぽ",
    decVal: "び",
    output: "ぽーん",
    input: "うすらの",
    loopStart: "すてらの",
    loopEnd: "なばびこーん"
  },
  Misa: {
    inc: [">", "→", "～", "ー"],
    dec: ["<", "←", "★", "☆"],
    incVal: ["+", "あ", "ぁ", "お", "ぉ"],
    decVal: ["-", "っ", "ッ"],
    input: [",", "？"],
    output: [".", "！"],
    loopStart: ["[", "「", "『"],
    loopEnd: ["]", "」", "』"]
  },
  BrainHakke: {
    inc: "☰",
    dec: "☷",
    incVal: "☳",
    decVal: "☴",
    output: "☵",
    input: "☲",
    loopStart: "☶",
    loopEnd: "☱"
  },
  Gochiusa: {
    inc: "こころ",
    dec: "いつも",
    incVal: "ぴょん",
    decVal: "らんらん",
    output: "言いなさいっ",
    input: "待ち？",
    loopStart: "はじめんがかんじん",
    loopEnd: "つーんだつーんだ"
  },
  NekoMimi: {
    inc: "ネコミミ！",
    dec: "ネコミミモード",
    incVal: "おにいさま",
    decVal: "私のしもべー",
    output: "や・く・そ・く・よ",
    input: "フルフルフルムーン",
    loopStart: "キスキス…",
    loopEnd: "キス…したくなっちゃった…"
  },
  YazawaNico: {
    inc: "笑顔届ける矢澤にこにこ！",
    dec: "だめだめだめっ！",
    incVal: "にっこにっこにー",
    decVal: "にこにーって覚えてラブニコ！",
    output: "ぴょんぴょんぴょんっ！",
    input: "あなたのハートににこにこにー！",
    loopStart: "にこにーはみんなのもの！",
    loopEnd: "ｷﾓﾁﾜﾙｲ"
  },
  Eimun: {
    inc: "えい！",
    dec: "むん！",
    incVal: "えい",
    decVal: "むん",
    output: "ばばんば～",
    input: "とまと！",
    loopStart: "っ",
    loopEnd: "、"
  }
});
let te = Ut;
const Wa = () => $(
  [
    {
      label: "Inc. Ptr.",
      model: $("")
    },
    {
      label: "Dec. Ptr.",
      model: $("")
    },
    {
      label: "Inc. Value",
      model: $("")
    },
    {
      label: "Dec. Value",
      model: $("")
    },
    {
      label: "Output",
      model: $("")
    },
    {
      label: "Input",
      model: $("")
    },
    {
      label: "Loop Start",
      model: $("")
    },
    {
      label: "Loop End",
      model: $("")
    }
  ]
), ht = [
  {
    name: "Brainfuxk",
    markSpec: new te()
  },
  {
    name: "Ook!",
    markSpec: new te(te.PRESETS.Ook)
  },
  {
    name: "Nyaruko",
    markSpec: new te(te.PRESETS.Nyaruko)
  },
  {
    name: "Kemono",
    markSpec: new te(te.PRESETS.Kemono)
  },
  {
    name: "Jojo",
    markSpec: new te(te.PRESETS.Jojo)
  },
  {
    name: "BF-BASIC'n",
    markSpec: new te(te.PRESETS.BFBASICn)
  },
  {
    name: "Misa",
    markSpec: new te(te.PRESETS.Misa)
  },
  {
    name: "BrainHakke",
    markSpec: new te(te.PRESETS.BrainHakke)
  },
  {
    name: "Gochiusa",
    markSpec: new te(te.PRESETS.Gochiusa)
  },
  {
    name: "NekoMimiFu*k",
    markSpec: new te(te.PRESETS.NekoMimi)
  },
  {
    name: "nico-lang",
    markSpec: new te(te.PRESETS.YazawaNico)
  },
  {
    name: "EiMun!",
    markSpec: new te(te.PRESETS.Eimun)
  },
  {
    name: "Custom"
  }
], pe = typeof window < "u", Cl = pe && "IntersectionObserver" in window;
function Xl(e, t, n) {
  Wo(e, t), t.set(e, n);
}
function Wo(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ql(e, t, n) {
  return e.set(Ua(e, t), n), n;
}
function Je(e, t) {
  return e.get(Ua(e, t));
}
function Ua(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Ga(e, t, n) {
  const l = t.length - 1;
  if (l < 0) return e === void 0 ? n : e;
  for (let a = 0; a < l; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]];
}
function Fe(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((l) => Fe(e[l], t[l]));
}
function Uo(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ga(e, t.split("."), n));
}
function De(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const a = t(e, n);
    return typeof a > "u" ? n : a;
  }
  if (typeof t == "string") return Uo(e, t, n);
  if (Array.isArray(t)) return Ga(e, t, n);
  if (typeof t != "function") return n;
  const l = t(e, n);
  return typeof l > "u" ? n : l;
}
function ee(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function tl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Jl(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function pl(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function Hn(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function nn(e, t) {
  const n = {};
  for (const l of t)
    Object.prototype.hasOwnProperty.call(e, l) && (n[l] = e[l]);
  return n;
}
function Zl(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(n != null && n.some((o) => o === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function dt(e, t) {
  const n = {
    ...e
  };
  return t.forEach((l) => delete n[l]), n;
}
const Ka = /^on[^a-z]/, qa = (e) => Ka.test(e), Go = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Ln(e) {
  const [t, n] = Zl(e, [Ka]), l = dt(t, Go), [a, i] = Zl(n, ["class", "style", "id", /^data-/]);
  return Object.assign(a, t), Object.assign(i, l), [a, i];
}
function He(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ko(e, t) {
  let n = 0;
  const l = function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    clearTimeout(n), n = setTimeout(() => e(...i), ze(t));
  };
  return l.clear = () => {
    clearTimeout(n);
  }, l.immediate = e, l;
}
function je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ea(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function qo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let l = 0;
  for (; l < e.length; )
    n.push(e.substr(l, t)), l += t;
  return n;
}
function nt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in t) {
    const i = e[a], o = t[a];
    if (Jl(i) && Jl(o)) {
      l[a] = nt(i, o, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(o)) {
      l[a] = n(i, o);
      continue;
    }
    l[a] = o;
  }
  return l;
}
function Ya(e) {
  return e.map((t) => t.type === de ? Ya(t.children) : t).flat();
}
function bt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (bt.cache.has(e)) return bt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return bt.cache.set(e, t), t;
}
bt.cache = /* @__PURE__ */ new Map();
function Dt(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => Dt(e, n)).flat(1);
  if (t.suspense)
    return Dt(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => Dt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Dt(e, t.component.subTree).flat(1);
  }
  return [];
}
var _t = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap();
class Yo {
  constructor(t) {
    Xl(this, _t, []), Xl(this, gt, 0), this.size = t;
  }
  get isFull() {
    return Je(_t, this).length === this.size;
  }
  push(t) {
    Je(_t, this)[Je(gt, this)] = t, Ql(gt, this, (Je(gt, this) + 1) % this.size);
  }
  values() {
    return Je(_t, this).slice(Je(gt, this)).concat(Je(_t, this).slice(0, Je(gt, this)));
  }
  clear() {
    Je(_t, this).length = 0, Ql(gt, this, 0);
  }
}
function wl(e) {
  const t = Tt({});
  Ue(() => {
    const l = e();
    for (const a in l)
      t[a] = l[a];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const l in t)
    n[l] = V(() => t[l]);
  return n;
}
function bn(e, t) {
  return e.includes(t);
}
function Xa(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Be = () => [Function, Array];
function ta(e, t) {
  return t = "on" + tn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function kl(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...n);
  else typeof e == "function" && e(...n);
}
function Sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Qa(e, t, n) {
  let l, a = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((n == null ? void 0 : n(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function Ht(e, t) {
  var l, a, i, o;
  const n = Sn(e);
  if (t == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((l = n[0]) == null || l.focus());
  else if (t === "first")
    (a = n[0]) == null || a.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (o = n[t]) == null || o.focus();
  else {
    const r = Qa(n, t);
    r ? r.focus() : Ht(e, t === "next" ? "first" : "last");
  }
}
function Cn(e, t) {
  if (!(pe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Ja(e) {
  return e.some((t) => Bo(t) ? t.type === To ? !1 : t.type !== de || Ja(t.children) : !0) ? e : null;
}
function Xo(e, t) {
  if (!pe || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Qo(e, t) {
  const n = e.clientX, l = e.clientY, a = t.getBoundingClientRect(), i = a.left, o = a.top, r = a.right, s = a.bottom;
  return n >= i && n <= r && l >= o && l <= s;
}
function nl() {
  const e = X(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => pl(e.value)
  }), t;
}
function na(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function ll(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Jo(e) {
  const t = {};
  for (const n in e)
    t[gl(n)] = e[n];
  return t;
}
function Zo(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [l, a] = n;
    return t.includes(l) ? !!a : a !== void 0;
  }));
}
const Za = ["top", "bottom"], er = ["start", "end", "left", "right"];
function al(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = bn(Za, n) ? "start" : bn(er, n) ? "top" : "center"), {
    side: la(n, t),
    align: la(l, t)
  };
}
function la(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function jn(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Wn(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function aa(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function ia(e) {
  return bn(Za, e.side) ? "y" : "x";
}
class Ge {
  constructor(t) {
    let {
      x: n,
      y: l,
      width: a,
      height: i
    } = t;
    this.x = n, this.y = l, this.width = a, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function oa(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function ei(e) {
  return Array.isArray(e) ? new Ge({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function tr(e) {
  if (e === document.documentElement)
    return visualViewport ? new Ge({
      x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
      y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
      width: visualViewport.width * visualViewport.scale,
      height: visualViewport.height * visualViewport.scale
    }) : new Ge({
      x: 0,
      y: 0,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  {
    const t = e.getBoundingClientRect();
    return new Ge({
      x: t.x,
      y: t.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function xl(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let a, i, o, r, s;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = Number(a[0]), o = Number(a[5]), r = Number(a[12]), s = Number(a[13]);
    else if (l.startsWith("matrix("))
      a = l.slice(7, -1).split(/, /), i = Number(a[0]), o = Number(a[3]), r = Number(a[4]), s = Number(a[5]);
    else
      return new Ge(t);
    const u = n.transformOrigin, c = t.x - r - (1 - i) * parseFloat(u), f = t.y - s - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), v = i ? t.width / i : e.offsetWidth + 1, d = o ? t.height / o : e.offsetHeight + 1;
    return new Ge({
      x: c,
      y: f,
      width: v,
      height: d
    });
  } else
    return new Ge(t);
}
function At(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let l;
  try {
    l = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof l.finished > "u" && (l.finished = new Promise((a) => {
    l.onfinish = () => {
      a(l);
    };
  })), l;
}
const gn = /* @__PURE__ */ new WeakMap();
function nr(e, t) {
  Object.keys(t).forEach((n) => {
    if (qa(n)) {
      const l = Xa(n), a = gn.get(e);
      if (t[n] == null)
        a == null || a.forEach((i) => {
          const [o, r] = i;
          o === l && (e.removeEventListener(l, r), a.delete(i));
        });
      else if (!a || ![...a].some((i) => i[0] === l && i[1] === t[n])) {
        e.addEventListener(l, t[n]);
        const i = a || /* @__PURE__ */ new Set();
        i.add([l, t[n]]), gn.has(e) || gn.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function lr(e, t) {
  Object.keys(t).forEach((n) => {
    if (qa(n)) {
      const l = Xa(n), a = gn.get(e);
      a == null || a.forEach((i) => {
        const [o, r] = i;
        o === l && (e.removeEventListener(l, r), a.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const It = 2.4, ra = 0.2126729, sa = 0.7151522, ua = 0.072175, ar = 0.55, ir = 0.58, or = 0.57, rr = 0.62, cn = 0.03, ca = 1.45, sr = 5e-4, ur = 1.25, cr = 1.25, da = 0.078, fa = 12.82051282051282, dn = 0.06, va = 1e-3;
function ma(e, t) {
  const n = (e.r / 255) ** It, l = (e.g / 255) ** It, a = (e.b / 255) ** It, i = (t.r / 255) ** It, o = (t.g / 255) ** It, r = (t.b / 255) ** It;
  let s = n * ra + l * sa + a * ua, u = i * ra + o * sa + r * ua;
  if (s <= cn && (s += (cn - s) ** ca), u <= cn && (u += (cn - u) ** ca), Math.abs(u - s) < sr) return 0;
  let c;
  if (u > s) {
    const f = (u ** ar - s ** ir) * ur;
    c = f < va ? 0 : f < da ? f - f * fa * dn : f - dn;
  } else {
    const f = (u ** rr - s ** or) * cr;
    c = f > -va ? 0 : f > -da ? f - f * fa * dn : f + dn;
  }
  return c * 100;
}
function St(e) {
  Tn(`Vuetify: ${e}`);
}
function ti(e) {
  Tn(`Vuetify error: ${e}`);
}
function dr(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, Tn(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
function il(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function fr(e) {
  return il(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const ga = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, vr = {
  rgb: (e, t, n, l) => ({
    r: e,
    g: t,
    b: n,
    a: l
  }),
  rgba: (e, t, n, l) => ({
    r: e,
    g: t,
    b: n,
    a: l
  }),
  hsl: (e, t, n, l) => ya({
    h: e,
    s: t,
    l: n,
    a: l
  }),
  hsla: (e, t, n, l) => ya({
    h: e,
    s: t,
    l: n,
    a: l
  }),
  hsv: (e, t, n, l) => Gt({
    h: e,
    s: t,
    v: n,
    a: l
  }),
  hsva: (e, t, n, l) => Gt({
    h: e,
    s: t,
    v: n,
    a: l
  })
};
function zt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && St(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && ga.test(e)) {
    const {
      groups: t
    } = e.match(ga), {
      fn: n,
      values: l
    } = t, a = l.split(/,\s*|\s*\/\s*|\s+/).map((i, o) => i.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return vr[n](...a);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || St(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && St(`'${e}' is not a valid hex(a) color`), mr(t);
  } else if (typeof e == "object") {
    if (Hn(e, ["r", "g", "b"]))
      return e;
    if (Hn(e, ["h", "s", "l"]))
      return Gt(ni(e));
    if (Hn(e, ["h", "s", "v"]))
      return Gt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Gt(e) {
  const {
    h: t,
    s: n,
    v: l,
    a
  } = e, i = (r) => {
    const s = (r + t / 60) % 6;
    return l - l * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a
  };
}
function ya(e) {
  return Gt(ni(e));
}
function ni(e) {
  const {
    h: t,
    s: n,
    l,
    a
  } = e, i = l + n * Math.min(l, 1 - l), o = i === 0 ? 0 : 2 - 2 * l / i;
  return {
    h: t,
    s: o,
    v: i,
    a
  };
}
function mr(e) {
  e = gr(e);
  let [t, n, l, a] = qo(e, 2).map((i) => parseInt(i, 16));
  return a = a === void 0 ? a : a / 255, {
    r: t,
    g: n,
    b: l,
    a
  };
}
function gr(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ea(ea(e, 6), 8, "F")), e;
}
function yr(e) {
  const t = Math.abs(ma(zt(0), zt(e)));
  return Math.abs(ma(zt(16777215), zt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function N(e, t) {
  return (n) => Object.keys(e).reduce((l, a) => {
    const o = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : {
      type: e[a]
    };
    return n && a in n ? l[a] = {
      ...o,
      default: n[a]
    } : l[a] = o, t && !l[a].source && (l[a].source = t), l;
  }, {});
}
const le = N({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function we(e, t) {
  const n = Oo();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Ye() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = we(e).type;
  return bt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const pn = Symbol.for("vuetify:defaults");
function Vl() {
  const e = ve(pn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ft(e, t) {
  const n = Vl(), l = $(e), a = C(() => {
    if (ze(t == null ? void 0 : t.disabled)) return n.value;
    const o = ze(t == null ? void 0 : t.scoped), r = ze(t == null ? void 0 : t.reset), s = ze(t == null ? void 0 : t.root);
    if (l.value == null && !(o || r || s)) return n.value;
    let u = nt(l.value, {
      prev: n.value
    });
    if (o) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let f = 0; f <= c && !(!u || !("prev" in u)); f++)
        u = u.prev;
      return u && typeof s == "string" && s in u && (u = nt(nt(u, {
        prev: u
      }), u[s])), u;
    }
    return u.prev ? nt(u.prev, u) : u;
  });
  return Le(pn, a), a;
}
function br(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[bt(t)] < "u");
}
function Sr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vl();
  const l = we("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const a = C(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), i = new Proxy(e, {
    get(s, u) {
      var d, h, m, y;
      const c = Reflect.get(s, u);
      if (u === "class" || u === "style")
        return [(d = a.value) == null ? void 0 : d[u], c].filter((b) => b != null);
      if (br(l.vnode, u)) return c;
      const f = (h = a.value) == null ? void 0 : h[u];
      if (f !== void 0) return f;
      const v = (y = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : y[u];
      return v !== void 0 ? v : c;
    }
  }), o = X();
  Ue(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = hr(pn, l);
    Le(pn, C(() => o.value ? nt((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function ln(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return St("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(l) {
      return nn(l, t);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = Vl();
      if (!i.value) return e._setup(l, a);
      const {
        props: o,
        provideSubDefaults: r
      } = Sr(l, l._as ?? e.name, i), s = e._setup(o, a);
      return r(), s;
    };
  }
  return e;
}
function q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? ln : yl)(t);
}
function Cr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return q()({
    name: n ?? tn(gl(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...le()
    },
    setup(l, a) {
      let {
        slots: i
      } = a;
      return () => {
        var o;
        return Rt(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function li(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const wn = "cubic-bezier(0.4, 0, 0.2, 1)", pr = "cubic-bezier(0.0, 0, 0.2, 1)", wr = "cubic-bezier(0.4, 0, 1, 1)", kr = {
  linear: (e) => e,
  easeInQuad: (e) => e ** 2,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e ** 3,
  easeOutCubic: (e) => --e ** 3 + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e ** 4,
  easeOutQuart: (e) => 1 - --e ** 4,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
  easeInQuint: (e) => e ** 5,
  easeOutQuint: (e) => 1 + --e ** 5,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
};
function ai(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? xr(e) : Pl(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function kn(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Pl(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Pl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, l = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || l;
}
function xr(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Vr(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Z(e) {
  const t = we("useRender");
  t.render = e;
}
const kt = N({
  border: [Boolean, Number, String]
}, "border");
function xt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  return {
    borderClasses: C(() => {
      const l = e.border;
      return l === !0 || l === "" ? `${t}--border` : typeof l == "string" || l === 0 ? String(l).split(" ").map((a) => `border-${a}`) : [];
    })
  };
}
const Pr = [null, "default", "comfortable", "compact"], ft = N({
  density: {
    type: String,
    default: "default",
    validator: (e) => Pr.includes(e)
  }
}, "density");
function vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  return {
    densityClasses: V(() => `${t}--density-${e.density}`)
  };
}
const Vt = N({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function Pt(e) {
  return {
    elevationClasses: V(() => {
      const n = el(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
const Me = N({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ne(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  return {
    roundedClasses: C(() => {
      const l = el(e) ? e.value : e.rounded, a = el(e) ? e.value : e.tile, i = [];
      if (l === !0 || l === "")
        i.push(`${t}--rounded`);
      else if (typeof l == "string" || l === 0)
        for (const o of String(l).split(" "))
          i.push(`rounded-${o}`);
      else (a || l === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const he = N({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), ol = Symbol.for("vuetify:theme"), ke = N({
  theme: String
}, "theme");
function Ae(e) {
  we("provideTheme");
  const t = ve(ol, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = V(() => e.theme ?? t.name.value), l = V(() => t.themes.value[n.value]), a = V(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`), i = {
    ...t,
    name: n,
    current: l,
    themeClasses: a
  };
  return Le(ol, i), i;
}
function _r() {
  we("useTheme");
  const e = ve(ol, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function _l(e) {
  return wl(() => {
    const t = Ke(e), n = [], l = {};
    if (t.background)
      if (il(t.background)) {
        if (l.backgroundColor = t.background, !t.text && fr(t.background)) {
          const a = zt(t.background);
          if (a.a == null || a.a === 1) {
            const i = yr(a);
            l.color = i, l.caretColor = i;
          }
        }
      } else
        n.push(`bg-${t.background}`);
    return t.text && (il(t.text) ? (l.color = t.text, l.caretColor = t.text) : n.push(`text-${t.text}`)), {
      colorClasses: n,
      colorStyles: l
    };
  });
}
function lt(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = _l(() => ({
    text: Ke(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function We(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = _l(() => ({
    background: Ke(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
const Ir = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function an(e, t) {
  return w(de, null, [e && w("span", {
    key: "overlay",
    class: Y(`${t}__overlay`)
  }, null), w("span", {
    key: "underlay",
    class: Y(`${t}__underlay`)
  }, null)]);
}
const mt = N({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Ir.includes(e)
  }
}, "variant");
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  const n = V(() => {
    const {
      variant: i
    } = Ke(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = _l(() => {
    const {
      variant: i,
      color: o
    } = Ke(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  });
  return {
    colorClasses: l,
    colorStyles: a,
    variantClasses: n
  };
}
const ii = N({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...kt(),
  ...le(),
  ...ft(),
  ...Vt(),
  ...Me(),
  ...he(),
  ...ke(),
  ...mt()
}, "VBtnGroup"), ha = q()({
  name: "VBtnGroup",
  props: ii(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      densityClasses: a
    } = vt(e), {
      borderClasses: i
    } = xt(e), {
      elevationClasses: o
    } = Pt(e), {
      roundedClasses: r
    } = Ne(e);
    Ft({
      VBtn: {
        height: V(() => e.direction === "horizontal" ? "auto" : null),
        baseColor: V(() => e.baseColor),
        color: V(() => e.color),
        density: V(() => e.density),
        flat: !0,
        variant: V(() => e.variant)
      }
    }), Z(() => g(e.tag, {
      class: Y(["v-btn-group", `v-btn-group--${e.direction}`, {
        "v-btn-group--divided": e.divided
      }, l.value, i.value, a.value, o.value, r.value, e.class]),
      style: ie(e.style)
    }, n));
  }
});
function ut(e, t) {
  let n;
  function l() {
    n = hl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  Q(e, (a) => {
    a && !n ? l() : a || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), Ee(() => {
    n == null || n.stop();
  });
}
function ye(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = we("useProxiedModel"), o = $(e[t] !== void 0 ? e[t] : n), r = bt(t), u = r !== t ? C(() => {
    var f, v, d, h;
    return e[t], !!(((f = i.vnode.props) != null && f.hasOwnProperty(t) || (v = i.vnode.props) != null && v.hasOwnProperty(r)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`) || (h = i.vnode.props) != null && h.hasOwnProperty(`onUpdate:${r}`)));
  }) : C(() => {
    var f, v;
    return e[t], !!((f = i.vnode.props) != null && f.hasOwnProperty(t) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`)));
  });
  ut(() => !u.value, () => {
    Q(() => e[t], (f) => {
      o.value = f;
    });
  });
  const c = C({
    get() {
      const f = e[t];
      return l(u.value ? f : o.value);
    },
    set(f) {
      const v = a(f), d = xe(u.value ? e[t] : o.value);
      d === v || l(d) === f || (o.value = v, i == null || i.emit(`update:${t}`, v));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? e[t] : o.value
  }), c;
}
const Rn = N({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Il = N({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function El(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const l = we("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = ct();
  Le(Symbol.for(`${t.description}:id`), a);
  const i = ve(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = V(() => e.value), r = C(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: a,
    value: o,
    disabled: r
  }, l), qe(() => {
    i.unregister(a);
  });
  const s = C(() => i.isSelected(a)), u = C(() => i.items.value[0].id === a), c = C(() => i.items.value[i.items.value.length - 1].id === a), f = C(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return Q(s, (v) => {
    l.emit("group:selected", {
      value: v
    });
  }, {
    flush: "sync"
  }), {
    id: a,
    isSelected: s,
    isFirst: u,
    isLast: c,
    toggle: () => i.select(a, !s.value),
    select: (v) => i.select(a, v),
    selectedClass: f,
    value: o,
    disabled: r,
    group: i
  };
}
function Fn(e, t) {
  let n = !1;
  const l = Tt([]), a = ye(e, "modelValue", [], (v) => v == null ? [] : oi(l, He(v)), (v) => {
    const d = Ar(l, v);
    return e.multiple ? d : d[0];
  }), i = we("useGroup");
  function o(v, d) {
    const h = v, m = Symbol.for(`${t.description}:id`), b = Dt(m, i == null ? void 0 : i.vnode).indexOf(d);
    ze(h.value) == null && (h.value = b, h.useIndexAsValue = !0), b > -1 ? l.splice(b, 0, h) : l.push(h);
  }
  function r(v) {
    if (n) return;
    s();
    const d = l.findIndex((h) => h.id === v);
    l.splice(d, 1);
  }
  function s() {
    const v = l.find((d) => !d.disabled);
    v && e.mandatory === "force" && !a.value.length && (a.value = [v.id]);
  }
  pt(() => {
    s();
  }), qe(() => {
    n = !0;
  }), Lo(() => {
    for (let v = 0; v < l.length; v++)
      l[v].useIndexAsValue && (l[v].value = v);
  });
  function u(v, d) {
    const h = l.find((m) => m.id === v);
    if (!(d && (h != null && h.disabled)))
      if (e.multiple) {
        const m = a.value.slice(), y = m.findIndex((S) => S === v), b = ~y;
        if (d = d ?? !b, b && e.mandatory && m.length <= 1 || !b && e.max != null && m.length + 1 > e.max) return;
        y < 0 && d ? m.push(v) : y >= 0 && !d && m.splice(y, 1), a.value = m;
      } else {
        const m = a.value.includes(v);
        if (e.mandatory && m || !m && !d) return;
        a.value = d ?? !m ? [v] : [];
      }
  }
  function c(v) {
    if (e.multiple && St('This method is not supported when using "multiple" prop'), a.value.length) {
      const d = a.value[0], h = l.findIndex((b) => b.id === d);
      let m = (h + v) % l.length, y = l[m];
      for (; y.disabled && m !== h; )
        m = (m + v) % l.length, y = l[m];
      if (y.disabled) return;
      a.value = [l[m].id];
    } else {
      const d = l.find((h) => !h.disabled);
      d && (a.value = [d.id]);
    }
  }
  const f = {
    register: o,
    unregister: r,
    selected: a,
    select: u,
    disabled: V(() => e.disabled),
    prev: () => c(l.length - 1),
    next: () => c(1),
    isSelected: (v) => a.value.includes(v),
    selectedClass: V(() => e.selectedClass),
    items: V(() => l),
    getItemIndex: (v) => Er(l, v)
  };
  return Le(t, f), f;
}
function Er(e, t) {
  const n = oi(e, [t]);
  return n.length ? e.findIndex((l) => l.id === n[0]) : -1;
}
function oi(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.find((o) => Fe(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && i.useIndexAsValue && n.push(i.id);
  }), n;
}
function Ar(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      n.push(i.value != null ? i.value : a);
    }
  }), n;
}
const ri = Symbol.for("vuetify:v-btn-toggle"), Br = N({
  ...ii(),
  ...Rn()
}, "VBtnToggle");
q()({
  name: "VBtnToggle",
  props: Br(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: l,
      next: a,
      prev: i,
      select: o,
      selected: r
    } = Fn(e, ri);
    return Z(() => {
      const s = ha.filterProps(e);
      return g(ha, J({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = n.default) == null ? void 0 : u.call(n, {
            isSelected: l,
            next: a,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: a,
      prev: i,
      select: o
    };
  }
});
const Tr = N({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Pe = q(!1)({
  name: "VDefaultsProvider",
  props: Tr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: l,
      disabled: a,
      reset: i,
      root: o,
      scoped: r
    } = Ro(e);
    return Ft(l, {
      reset: i,
      root: o,
      scoped: r,
      disabled: a
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
}), ue = [String, Function, Object, Array], Or = Symbol.for("vuetify:icons"), Mn = N({
  icon: {
    type: ue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), ba = q()({
  name: "VComponentIcon",
  props: Mn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const l = e.icon;
      return g(e.tag, null, {
        default: () => {
          var a;
          return [e.icon ? g(l, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
        }
      });
    };
  }
}), Lr = ln({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Mn(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => g(e.tag, J(n, {
      style: null
    }), {
      default: () => [w("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? w("path", {
        d: l[0],
        "fill-opacity": l[1]
      }, null) : w("path", {
        d: l
      }, null)) : w("path", {
        d: e.icon
      }, null)])]
    });
  }
});
ln({
  name: "VLigatureIcon",
  props: Mn(),
  setup(e) {
    return () => g(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
ln({
  name: "VClassIcon",
  props: Mn(),
  setup(e) {
    return () => g(e.tag, {
      class: Y(e.icon)
    }, null);
  }
});
const Rr = (e) => {
  const t = ve(Or);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: C(() => {
      var s;
      const l = Ke(e);
      if (!l) return {
        component: ba
      };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (s = t.aliases) == null ? void 0 : s[a.slice(1)])), a || St(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: Lr,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: ba,
          icon: a
        };
      const i = Object.keys(t.sets).find((u) => typeof a == "string" && a.startsWith(`${u}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, Fr = ["x-small", "small", "default", "large", "x-large"], rn = N({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  return wl(() => {
    const n = e.size;
    let l, a;
    return bn(Fr, n) ? l = `${t}--size-${n}` : n && (a = {
      width: ee(n),
      height: ee(n)
    }), {
      sizeClasses: l,
      sizeStyles: a
    };
  });
}
const Mr = N({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ue,
  opacity: [String, Number],
  ...le(),
  ...rn(),
  ...he({
    tag: "i"
  }),
  ...ke()
}, "VIcon"), _e = q()({
  name: "VIcon",
  props: Mr(),
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const a = X(), {
      themeClasses: i
    } = _r(), {
      iconData: o
    } = Rr(() => a.value || e.icon), {
      sizeClasses: r
    } = sn(e), {
      textColorClasses: s,
      textColorStyles: u
    } = lt(() => e.color);
    return Z(() => {
      var v, d;
      const c = (v = l.default) == null ? void 0 : v.call(l);
      c && (a.value = (d = Ya(c).filter((h) => h.type === Fo && h.children && typeof h.children == "string")[0]) == null ? void 0 : d.children);
      const f = !!(n.onClick || n.onClickOnce);
      return g(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: Y(["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: ie([{
          "--v-icon-opacity": e.opacity
        }, r.value ? void 0 : {
          fontSize: ee(e.size),
          height: ee(e.size),
          width: ee(e.size)
        }, u.value, e.style]),
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function si(e, t) {
  const n = $(), l = X(!1);
  if (Cl) {
    const a = new IntersectionObserver((i) => {
      l.value = !!i.find((o) => o.isIntersecting);
    }, t);
    Ee(() => {
      a.disconnect();
    }), Q(n, (i, o) => {
      o && (a.unobserve(o), l.value = !1), i && a.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: l
  };
}
function Kt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = nl(), l = $();
  if (pe) {
    const a = new ResizeObserver((i) => {
      i.length && (t === "content" ? l.value = i[0].contentRect : l.value = i[0].target.getBoundingClientRect());
    });
    qe(() => {
      a.disconnect();
    }), Q(() => n.el, (i, o) => {
      o && (a.unobserve(o), l.value = void 0), i && a.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: bl(l)
  };
}
const Nr = N({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...le(),
  ...rn(),
  ...he({
    tag: "div"
  }),
  ...ke()
}, "VProgressCircular"), $r = q()({
  name: "VProgressCircular",
  props: Nr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = 20, a = 2 * Math.PI * l, i = $(), {
      themeClasses: o
    } = Ae(e), {
      sizeClasses: r,
      sizeStyles: s
    } = sn(e), {
      textColorClasses: u,
      textColorStyles: c
    } = lt(() => e.color), {
      textColorClasses: f,
      textColorStyles: v
    } = lt(() => e.bgColor), {
      intersectionRef: d,
      isIntersecting: h
    } = si(), {
      resizeRef: m,
      contentRect: y
    } = Kt(), b = V(() => je(parseFloat(e.modelValue), 0, 100)), S = V(() => Number(e.width)), I = V(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(S.value, 32)), x = V(() => l / (1 - S.value / I.value) * 2), E = V(() => S.value / I.value * x.value), F = V(() => ee((100 - b.value) / 100 * a));
    return Ue(() => {
      d.value = i.value, m.value = i.value;
    }), Z(() => g(e.tag, {
      ref: i,
      class: Y(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": h.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, u.value, e.class]),
      style: ie([s.value, c.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : b.value
    }, {
      default: () => [w("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${x.value} ${x.value}`
      }, [w("circle", {
        class: Y(["v-progress-circular__underlay", f.value]),
        style: ie(v.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: l,
        "stroke-width": E.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": 0
      }, null), w("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: l,
        "stroke-width": E.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": F.value
      }, null)]), n.default && w("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: b.value
      })])]
    })), {};
  }
}), Xe = N({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Qe(e) {
  return {
    dimensionStyles: C(() => {
      const n = {}, l = ee(e.height), a = ee(e.maxHeight), i = ee(e.maxWidth), o = ee(e.minHeight), r = ee(e.minWidth), s = ee(e.width);
      return l != null && (n.height = l), a != null && (n.maxHeight = a), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), r != null && (n.minWidth = r), s != null && (n.width = s), n;
    })
  };
}
const ui = Symbol.for("vuetify:locale");
function Al() {
  const e = ve(ui);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function it() {
  const e = ve(ui);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Sa = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Nn = N({
  location: String
}, "location");
function Bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = it();
  return {
    locationStyles: C(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = al(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function r(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return i !== "center" && (t ? s[Sa[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? t ? s[Sa[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const Dr = N({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...le(),
  ...Nn({
    location: "top"
  }),
  ...Me(),
  ...he(),
  ...ke()
}, "VProgressLinear"), ci = q()({
  name: "VProgressLinear",
  props: Dr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var R;
    let {
      slots: n
    } = t;
    const l = ye(e, "modelValue"), {
      isRtl: a,
      rtlClasses: i
    } = it(), {
      themeClasses: o
    } = Ae(e), {
      locationStyles: r
    } = Bl(e), {
      textColorClasses: s,
      textColorStyles: u
    } = lt(() => e.color), {
      backgroundColorClasses: c,
      backgroundColorStyles: f
    } = We(() => e.bgColor || e.color), {
      backgroundColorClasses: v,
      backgroundColorStyles: d
    } = We(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: h,
      backgroundColorStyles: m
    } = We(() => e.color), {
      roundedClasses: y
    } = Ne(e), {
      intersectionRef: b,
      isIntersecting: S
    } = si(), I = C(() => parseFloat(e.max)), x = C(() => parseFloat(e.height)), E = C(() => je(parseFloat(e.bufferValue) / I.value * 100, 0, 100)), F = C(() => je(parseFloat(l.value) / I.value * 100, 0, 100)), A = C(() => a.value !== e.reverse), P = C(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), j = pe && ((R = window.matchMedia) == null ? void 0 : R.call(window, "(forced-colors: active)").matches);
    function G(T) {
      if (!b.value) return;
      const {
        left: O,
        right: M,
        width: B
      } = b.value.getBoundingClientRect(), L = A.value ? B - T.clientX + (M - B) : T.clientX - O;
      l.value = Math.round(L / B * I.value);
    }
    return Z(() => g(e.tag, {
      ref: b,
      class: Y(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && S.value,
        "v-progress-linear--reverse": A.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped,
        "v-progress-linear--clickable": e.clickable
      }, y.value, o.value, i.value, e.class]),
      style: ie([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? ee(x.value) : 0,
        "--v-progress-linear-height": ee(x.value),
        ...e.absolute ? r.value : {}
      }, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), I.value),
      onClick: e.clickable && G
    }, {
      default: () => [e.stream && w("div", {
        key: "stream",
        class: Y(["v-progress-linear__stream", s.value]),
        style: {
          ...u.value,
          [A.value ? "left" : "right"]: ee(-x.value),
          borderTop: `${ee(x.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${ee(x.value / 4)})`,
          width: ee(100 - E.value, "%"),
          "--v-progress-linear-stream-to": ee(x.value * (A.value ? 1 : -1))
        }
      }, null), w("div", {
        class: Y(["v-progress-linear__background", j ? void 0 : c.value]),
        style: ie([f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), w("div", {
        class: Y(["v-progress-linear__buffer", j ? void 0 : v.value]),
        style: ie([d.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: ee(E.value, "%")
        }])
      }, null), g(Ct, {
        name: P.value
      }, {
        default: () => [e.indeterminate ? w("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((T) => w("div", {
          key: T,
          class: Y(["v-progress-linear__indeterminate", T, j ? void 0 : h.value]),
          style: ie(m.value)
        }, null))]) : w("div", {
          class: Y(["v-progress-linear__determinate", j ? void 0 : h.value]),
          style: ie([m.value, {
            width: ee(F.value, "%")
          }])
        }, null)]
      }), n.default && w("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: F.value,
        buffer: E.value
      })])]
    })), {};
  }
}), di = N({
  loading: [Boolean, String]
}, "loader");
function fi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  return {
    loaderClasses: V(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function zr(e, t) {
  var l;
  let {
    slots: n
  } = t;
  return w("div", {
    class: Y(`${e.name}__loader`)
  }, [((l = n.default) == null ? void 0 : l.call(n, {
    color: e.color,
    isActive: e.active
  })) || g(ci, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Hr = ["static", "relative", "fixed", "absolute", "sticky"], Tl = N({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Hr.includes(e)
    )
  }
}, "position");
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  return {
    positionClasses: V(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function jr() {
  const e = we("useRoute");
  return C(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function Wr() {
  var e, t;
  return (t = (e = we("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function Ll(e, t) {
  var c, f;
  const n = Mo("RouterLink"), l = V(() => !!(e.href || e.to)), a = C(() => (l == null ? void 0 : l.value) || ta(t, "click") || ta(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const v = V(() => e.href);
    return {
      isLink: l,
      isClickable: a,
      href: v,
      linkProps: Tt({
        href: v
      })
    };
  }
  const i = n.useLink({
    to: V(() => e.to || ""),
    replace: V(() => e.replace)
  }), o = C(() => e.to ? i : void 0), r = jr(), s = C(() => {
    var v, d, h;
    return o.value ? e.exact ? r.value ? ((h = o.value.isExactActive) == null ? void 0 : h.value) && Fe(o.value.route.value.query, r.value.query) : ((d = o.value.isExactActive) == null ? void 0 : d.value) ?? !1 : ((v = o.value.isActive) == null ? void 0 : v.value) ?? !1 : !1;
  }), u = C(() => {
    var v;
    return e.to ? (v = o.value) == null ? void 0 : v.route.value.href : e.href;
  });
  return {
    isLink: l,
    isClickable: a,
    isActive: s,
    route: (c = o.value) == null ? void 0 : c.route,
    navigate: (f = o.value) == null ? void 0 : f.navigate,
    href: u,
    linkProps: Tt({
      href: u,
      "aria-current": V(() => s.value ? "page" : void 0)
    })
  };
}
const Rl = N({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Un = !1;
function Ur(e, t) {
  let n = !1, l, a;
  pe && (e != null && e.beforeEach) && (Ce(() => {
    window.addEventListener("popstate", i), l = e.beforeEach((o, r, s) => {
      Un ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Un = !0;
    }), a = e == null ? void 0 : e.afterEach(() => {
      Un = !1;
    });
  }), Ee(() => {
    window.removeEventListener("popstate", i), l == null || l(), a == null || a();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Gr(e, t) {
  Q(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ce(() => {
      t(n);
    });
  }, {
    immediate: !0
  });
}
const rl = Symbol("rippleStop"), Kr = 80;
function Ca(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function sl(e) {
  return e.constructor.name === "TouchEvent";
}
function vi(e) {
  return e.constructor.name === "KeyboardEvent";
}
const qr = function(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!vi(e)) {
    const v = t.getBoundingClientRect(), d = sl(e) ? e.touches[e.touches.length - 1] : e;
    l = d.clientX - v.left, a = d.clientY - v.top;
  }
  let i = 0, o = 0.3;
  (f = t._ripple) != null && f.circle ? (o = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((l - i) ** 2 + (a - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, u = n.center ? r : `${l - i}px`, c = n.center ? s : `${a - i}px`;
  return {
    radius: i,
    scale: o,
    x: u,
    y: c,
    centerX: r,
    centerY: s
  };
}, xn = {
  /* eslint-disable max-statements */
  show(e, t) {
    var d;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((d = t == null ? void 0 : t._ripple) != null && d.enabled))
      return;
    const l = document.createElement("span"), a = document.createElement("span");
    l.appendChild(a), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: u,
      centerY: c
    } = qr(e, t, n), f = `${i * 2}px`;
    a.className = "v-ripple__animation", a.style.width = f, a.style.height = f, t.appendChild(l);
    const v = window.getComputedStyle(t);
    v && v.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), Ca(a, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), Ca(a, `translate(${u}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = Array.from(t).findLast((o) => !o.dataset.isHiding);
    if (n) n.dataset.isHiding = "true";
    else return;
    const l = performance.now() - Number(n.dataset.activated), a = Math.max(250 - l, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, a);
  }
};
function mi(e) {
  return typeof e > "u" || !!e;
}
function qt(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[rl])) {
    if (e[rl] = !0, sl(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || vi(e), n._ripple.class && (t.class = n._ripple.class), sl(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        xn.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Kr);
    } else
      xn.show(e, n, t);
  }
}
function pa(e) {
  e[rl] = !0;
}
function Oe(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Oe(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), xn.hide(t);
  }
}
function gi(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Yt = !1;
function wa(e, t) {
  !Yt && t.includes(e.key) && (Yt = !0, qt(e));
}
function yi(e) {
  Yt = !1, Oe(e);
}
function hi(e) {
  Yt && (Yt = !1, Oe(e));
}
function bi(e, t, n) {
  const {
    value: l,
    modifiers: a
  } = t, i = mi(l);
  i || xn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle;
  const o = tl(l) ? l : {};
  o.class && (e._ripple.class = o.class);
  const r = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => wa(s, r), i && !n) {
    if (a.stop) {
      e.addEventListener("touchstart", pa, {
        passive: !0
      }), e.addEventListener("mousedown", pa);
      return;
    }
    e.addEventListener("touchstart", qt, {
      passive: !0
    }), e.addEventListener("touchend", Oe, {
      passive: !0
    }), e.addEventListener("touchmove", gi, {
      passive: !0
    }), e.addEventListener("touchcancel", Oe), e.addEventListener("mousedown", qt), e.addEventListener("mouseup", Oe), e.addEventListener("mouseleave", Oe), e.addEventListener("keydown", (s) => wa(s, r)), e.addEventListener("keyup", yi), e.addEventListener("blur", hi), e.addEventListener("dragstart", Oe, {
      passive: !0
    });
  } else !i && n && Si(e);
}
function Si(e) {
  var t;
  e.removeEventListener("mousedown", qt), e.removeEventListener("touchstart", qt), e.removeEventListener("touchend", Oe), e.removeEventListener("touchmove", gi), e.removeEventListener("touchcancel", Oe), e.removeEventListener("mouseup", Oe), e.removeEventListener("mouseleave", Oe), (t = e._ripple) != null && t.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", yi), e.removeEventListener("dragstart", Oe), e.removeEventListener("blur", hi);
}
function Yr(e, t) {
  bi(e, t, !1);
}
function Xr(e) {
  Si(e), delete e._ripple;
}
function Qr(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = mi(t.oldValue);
  bi(e, t, n);
}
const at = {
  mounted: Yr,
  unmounted: Xr,
  updated: Qr
}, Jr = N({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: ri
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ue,
  appendIcon: ue,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...kt(),
  ...le(),
  ...ft(),
  ...Xe(),
  ...Vt(),
  ...Il(),
  ...di(),
  ...Nn(),
  ...Tl(),
  ...Me(),
  ...Rl(),
  ...rn(),
  ...he({
    tag: "button"
  }),
  ...ke(),
  ...mt({
    variant: "elevated"
  })
}, "VBtn"), jt = q()({
  name: "VBtn",
  props: Jr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      borderClasses: i
    } = xt(e), {
      densityClasses: o
    } = vt(e), {
      dimensionStyles: r
    } = Qe(e), {
      elevationClasses: s
    } = Pt(e), {
      loaderClasses: u
    } = fi(e), {
      locationStyles: c
    } = Bl(e), {
      positionClasses: f
    } = Ol(e), {
      roundedClasses: v
    } = Ne(e), {
      sizeClasses: d,
      sizeStyles: h
    } = sn(e), m = El(e, e.symbol, !1), y = Ll(e, n), b = C(() => {
      var R;
      return e.active !== void 0 ? e.active : y.isLink.value ? (R = y.isActive) == null ? void 0 : R.value : m == null ? void 0 : m.isSelected.value;
    }), S = V(() => b.value ? e.activeColor ?? e.color : e.color), I = C(() => {
      var T, O;
      return {
        color: (m == null ? void 0 : m.isSelected.value) && (!y.isLink.value || ((T = y.isActive) == null ? void 0 : T.value)) || !m || ((O = y.isActive) == null ? void 0 : O.value) ? S.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: x,
      colorStyles: E,
      variantClasses: F
    } = on(I), A = C(() => (m == null ? void 0 : m.disabled.value) || e.disabled), P = V(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), j = C(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function G(R) {
      var T;
      A.value || y.isLink.value && (R.metaKey || R.ctrlKey || R.shiftKey || R.button !== 0 || n.target === "_blank") || ((T = y.navigate) == null || T.call(y, R), m == null || m.toggle());
    }
    return Gr(y, m == null ? void 0 : m.select), Z(() => {
      const R = y.isLink.value ? "a" : e.tag, T = !!(e.prependIcon || l.prepend), O = !!(e.appendIcon || l.append), M = !!(e.icon && e.icon !== !0);
      return Ie(g(R, J({
        type: R === "a" ? void 0 : "button",
        class: ["v-btn", m == null ? void 0 : m.selectedClass.value, {
          "v-btn--active": b.value,
          "v-btn--block": e.block,
          "v-btn--disabled": A.value,
          "v-btn--elevated": P.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, a.value, i.value, x.value, o.value, s.value, u.value, f.value, v.value, d.value, F.value, e.class],
        style: [E.value, r.value, c.value, h.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: A.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: G,
        value: j.value
      }, y.linkProps), {
        default: () => {
          var B;
          return [an(!0, "v-btn"), !e.icon && T && w("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [l.prepend ? g(Pe, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, l.prepend) : g(_e, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), w("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!l.default && M ? g(_e, {
            key: "content-icon",
            icon: e.icon
          }, null) : g(Pe, {
            key: "content-defaults",
            disabled: !M,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var L;
              return [((L = l.default) == null ? void 0 : L.call(l)) ?? tt(e.text)];
            }
          })]), !e.icon && O && w("span", {
            key: "append",
            class: "v-btn__append"
          }, [l.append ? g(Pe, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, l.append) : g(_e, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && w("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((B = l.loader) == null ? void 0 : B.call(l)) ?? g($r, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[at, !A.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: m
    };
  }
}), Xt = Symbol.for("vuetify:v-expansion-panel"), Zr = N({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Re(e, t, n) {
  return q()({
    name: e,
    props: Zr({
      mode: n,
      origin: t
    }),
    setup(l, a) {
      let {
        slots: i
      } = a;
      const o = {
        onBeforeEnter(r) {
          l.origin && (r.style.transformOrigin = l.origin);
        },
        onLeave(r) {
          if (l.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: u,
              offsetWidth: c,
              offsetHeight: f
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${u}px`, r.style.width = `${c}px`, r.style.height = `${f}px`;
          }
          l.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (l.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: u,
              left: c,
              width: f,
              height: v
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = u || "", r.style.left = c || "", r.style.width = f || "", r.style.height = v || "";
          }
        }
      };
      return () => {
        const r = l.group ? Sl : Ct;
        return Rt(r, {
          name: l.disabled ? "" : e,
          css: !l.disabled,
          ...l.group ? void 0 : {
            mode: l.mode
          },
          ...l.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function Ci(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return q()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(l, a) {
      let {
        slots: i
      } = a;
      const o = l.group ? Sl : Ct;
      return () => Rt(o, {
        name: l.disabled ? "" : e,
        css: !l.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...l.disabled ? {} : t
      }, i.default);
    }
  });
}
function pi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = gl(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [n]: o.style[n]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      if (!r) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[l]}px`;
      o.style[n] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[n] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n]
      }, o.style.overflow = "hidden", o.style[n] = `${o[l]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
    },
    onAfterLeave: a,
    onLeaveCancelled: a
  };
  function a(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const r = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[n] = r), delete o._initialStyle;
  }
}
const es = N({
  target: [Object, Array]
}, "v-dialog-transition"), Gn = /* @__PURE__ */ new WeakMap(), wi = q()({
  name: "VDialogTransition",
  props: es(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = {
      onBeforeEnter(a) {
        a.style.pointerEvents = "none", a.style.visibility = "hidden";
      },
      async onEnter(a, i) {
        var d;
        await new Promise((h) => requestAnimationFrame(h)), await new Promise((h) => requestAnimationFrame(h)), a.style.visibility = "";
        const o = xa(e.target, a), {
          x: r,
          y: s,
          sx: u,
          sy: c,
          speed: f
        } = o;
        Gn.set(a, o);
        const v = At(a, [{
          transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * f,
          easing: pr
        });
        (d = ka(a)) == null || d.forEach((h) => {
          At(h, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * f,
            easing: wn
          });
        }), v.finished.then(() => i());
      },
      onAfterEnter(a) {
        a.style.removeProperty("pointer-events");
      },
      onBeforeLeave(a) {
        a.style.pointerEvents = "none";
      },
      async onLeave(a, i) {
        var d;
        await new Promise((h) => requestAnimationFrame(h));
        let o;
        !Gn.has(a) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = xa(e.target, a) : o = Gn.get(a);
        const {
          x: r,
          y: s,
          sx: u,
          sy: c,
          speed: f
        } = o;
        At(a, [{}, {
          transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * f,
          easing: wr
        }).finished.then(() => i()), (d = ka(a)) == null || d.forEach((h) => {
          At(h, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * f,
            easing: wn
          });
        });
      },
      onAfterLeave(a) {
        a.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? g(Ct, J({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), n) : g(Ct, {
      name: "dialog-transition"
    }, n);
  }
});
function ka(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function xa(e, t) {
  const n = ei(e), l = xl(t), [a, i] = getComputedStyle(t).transformOrigin.split(" ").map((b) => parseFloat(b)), [o, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  o === "left" || r === "left" ? s -= n.width / 2 : (o === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || r === "top" ? u -= n.height / 2 : (o === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / l.width, f = n.height / l.height, v = Math.max(1, c, f), d = c / v || 0, h = f / v || 0, m = l.width * l.height / (window.innerWidth * window.innerHeight), y = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return {
    x: s - (a + l.left),
    y: u - (i + l.top),
    sx: d,
    sy: h,
    speed: y
  };
}
Re("fab-transition", "center center", "out-in");
Re("dialog-bottom-transition");
Re("dialog-top-transition");
const Va = Re("fade-transition");
Re("scale-transition");
Re("scroll-x-transition");
Re("scroll-x-reverse-transition");
Re("scroll-y-transition");
Re("scroll-y-reverse-transition");
Re("slide-x-transition");
Re("slide-x-reverse-transition");
const ki = Re("slide-y-transition");
Re("slide-y-reverse-transition");
const xi = Ci("expand-transition", pi()), Vi = Ci("expand-x-transition", pi("", !0)), Pi = N({
  eager: Boolean
}, "lazy");
function _i(e, t) {
  const n = X(!1), l = V(() => n.value || e.eager || t.value);
  Q(t, () => n.value = !0);
  function a() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: l,
    onAfterLeave: a
  };
}
const Ii = N({
  ...le(),
  ...Pi()
}, "VExpansionPanelText"), Vn = q()({
  name: "VExpansionPanelText",
  props: Ii(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = ve(Xt);
    if (!l) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: a,
      onAfterLeave: i
    } = _i(e, l.isSelected);
    return Z(() => g(xi, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [Ie(w("div", {
          class: Y(["v-expansion-panel-text", e.class]),
          style: ie(e.style)
        }, [n.default && a.value && w("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = n.default) == null ? void 0 : o.call(n)])]), [[wt, l.isSelected.value]])];
      }
    })), {};
  }
}), Ei = N({
  color: String,
  expandIcon: {
    type: ue,
    default: "$expand"
  },
  collapseIcon: {
    type: ue,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...le(),
  ...Xe()
}, "VExpansionPanelTitle"), Pa = q()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: at
  },
  props: Ei(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = ve(Xt);
    if (!l) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = We(() => e.color), {
      dimensionStyles: o
    } = Qe(e), r = C(() => ({
      collapseIcon: e.collapseIcon,
      disabled: l.disabled.value,
      expanded: l.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = V(() => l.isSelected.value ? e.collapseIcon : e.expandIcon);
    return Z(() => {
      var u;
      return Ie(w("button", {
        class: Y(["v-expansion-panel-title", {
          "v-expansion-panel-title--active": l.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, a.value, e.class]),
        style: ie([i.value, o.value, e.style]),
        type: "button",
        tabindex: l.disabled.value ? -1 : void 0,
        disabled: l.disabled.value,
        "aria-expanded": l.isSelected.value,
        onClick: e.readonly ? void 0 : l.toggle
      }, [w("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (u = n.default) == null ? void 0 : u.call(n, r.value), !e.hideActions && g(Pe, {
        defaults: {
          VIcon: {
            icon: s.value
          }
        }
      }, {
        default: () => {
          var c;
          return [w("span", {
            class: "v-expansion-panel-title__icon"
          }, [((c = n.actions) == null ? void 0 : c.call(n, r.value)) ?? g(_e, null, null)])];
        }
      })]), [[at, e.ripple]]);
    }), {};
  }
}), Ai = N({
  title: String,
  text: String,
  bgColor: String,
  ...Vt(),
  ...Il(),
  ...Me(),
  ...he(),
  ...Ei(),
  ...Ii()
}, "VExpansionPanel"), Bi = q()({
  name: "VExpansionPanel",
  props: Ai(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = El(e, Xt), {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = We(() => e.bgColor), {
      elevationClasses: o
    } = Pt(e), {
      roundedClasses: r
    } = Ne(e), s = V(() => (l == null ? void 0 : l.disabled.value) || e.disabled), u = C(() => l.group.items.value.reduce((v, d, h) => (l.group.selected.value.includes(d.id) && v.push(h), v), [])), c = C(() => {
      const v = l.group.items.value.findIndex((d) => d.id === l.id);
      return !l.isSelected.value && u.value.some((d) => d - v === 1);
    }), f = C(() => {
      const v = l.group.items.value.findIndex((d) => d.id === l.id);
      return !l.isSelected.value && u.value.some((d) => d - v === -1);
    });
    return Le(Xt, l), Z(() => {
      const v = !!(n.text || e.text), d = !!(n.title || e.title), h = Pa.filterProps(e), m = Vn.filterProps(e);
      return g(e.tag, {
        class: Y(["v-expansion-panel", {
          "v-expansion-panel--active": l.isSelected.value,
          "v-expansion-panel--before-active": c.value,
          "v-expansion-panel--after-active": f.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, a.value, e.class]),
        style: ie([i.value, e.style])
      }, {
        default: () => [w("div", {
          class: Y(["v-expansion-panel__shadow", ...o.value])
        }, null), g(Pe, {
          defaults: {
            VExpansionPanelTitle: {
              ...h
            },
            VExpansionPanelText: {
              ...m
            }
          }
        }, {
          default: () => {
            var y;
            return [d && g(Pa, {
              key: "title"
            }, {
              default: () => [n.title ? n.title() : e.title]
            }), v && g(Vn, {
              key: "text"
            }, {
              default: () => [n.text ? n.text() : e.text]
            }), (y = n.default) == null ? void 0 : y.call(n)];
          }
        })]
      });
    }), {
      groupItem: l
    };
  }
}), ts = ["default", "accordion", "inset", "popout"], ns = N({
  flat: Boolean,
  ...Rn(),
  ...nn(Ai(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ke(),
  ...le(),
  ...he(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => ts.includes(e)
  }
}, "VExpansionPanels"), Ti = q()({
  name: "VExpansionPanels",
  props: ns(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      next: l,
      prev: a
    } = Fn(e, Xt), {
      themeClasses: i
    } = Ae(e), o = V(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return Ft({
      VExpansionPanel: {
        bgColor: V(() => e.bgColor),
        collapseIcon: V(() => e.collapseIcon),
        color: V(() => e.color),
        eager: V(() => e.eager),
        elevation: V(() => e.elevation),
        expandIcon: V(() => e.expandIcon),
        focusable: V(() => e.focusable),
        hideActions: V(() => e.hideActions),
        readonly: V(() => e.readonly),
        ripple: V(() => e.ripple),
        rounded: V(() => e.rounded),
        static: V(() => e.static)
      }
    }), Z(() => g(e.tag, {
      class: Y(["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class]),
      style: ie(e.style)
    }, {
      default: () => {
        var r;
        return [(r = n.default) == null ? void 0 : r.call(n, {
          prev: a,
          next: l
        })];
      }
    })), {
      next: l,
      prev: a
    };
  }
}), ls = N({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...le(),
  ...Xe(),
  ...he()
}, "VContainer"), rt = q()({
  name: "VContainer",
  props: ls(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: l
    } = it(), {
      dimensionStyles: a
    } = Qe(e);
    return Z(() => g(e.tag, {
      class: Y(["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class]),
      style: ie([a.value, e.style])
    }, n)), {};
  }
}), $n = ["sm", "md", "lg", "xl", "xxl"], as = Symbol.for("vuetify:display"), is = N({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function Fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  const n = ve(as);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const l = C(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), a = V(() => t ? {
    [`${t}--mobile`]: l.value
  } : {});
  return {
    ...n,
    displayClasses: a,
    mobile: l
  };
}
const Oi = $n.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Li = $n.reduce((e, t) => {
  const n = "offset" + tn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Ri = $n.reduce((e, t) => {
  const n = "order" + tn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), _a = {
  col: Object.keys(Oi),
  offset: Object.keys(Li),
  order: Object.keys(Ri)
};
function os(e, t, n) {
  let l = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const a = t.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (n === "" || n === !0) || (l += `-${n}`), l.toLowerCase();
  }
}
const rs = ["auto", "start", "end", "center", "baseline", "stretch"], ss = N({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Oi,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Li,
  order: {
    type: [String, Number],
    default: null
  },
  ...Ri,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => rs.includes(e)
  },
  ...le(),
  ...he()
}, "VCol"), be = q()({
  name: "VCol",
  props: ss(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = C(() => {
      const a = [];
      let i;
      for (i in _a)
        _a[i].forEach((r) => {
          const s = e[r], u = os(i, r, s);
          u && a.push(u);
        });
      const o = a.some((r) => r.startsWith("v-col-"));
      return a.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), a;
    });
    return () => {
      var a;
      return Rt(e.tag, {
        class: [l.value, e.class],
        style: e.style
      }, (a = n.default) == null ? void 0 : a.call(n));
    };
  }
}), Ml = ["start", "end", "center"], Fi = ["space-between", "space-around", "space-evenly"];
function Nl(e, t) {
  return $n.reduce((n, l) => {
    const a = e + tn(l);
    return n[a] = t(), n;
  }, {});
}
const us = [...Ml, "baseline", "stretch"], Mi = (e) => us.includes(e), Ni = Nl("align", () => ({
  type: String,
  default: null,
  validator: Mi
})), cs = [...Ml, ...Fi], $i = (e) => cs.includes(e), Di = Nl("justify", () => ({
  type: String,
  default: null,
  validator: $i
})), ds = [...Ml, ...Fi, "stretch"], zi = (e) => ds.includes(e), Hi = Nl("alignContent", () => ({
  type: String,
  default: null,
  validator: zi
})), Ia = {
  align: Object.keys(Ni),
  justify: Object.keys(Di),
  alignContent: Object.keys(Hi)
}, fs = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function vs(e, t, n) {
  let l = fs[e];
  if (n != null) {
    if (t) {
      const a = t.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${n}`, l.toLowerCase();
  }
}
const ms = N({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Mi
  },
  ...Ni,
  justify: {
    type: String,
    default: null,
    validator: $i
  },
  ...Di,
  alignContent: {
    type: String,
    default: null,
    validator: zi
  },
  ...Hi,
  ...le(),
  ...he()
}, "VRow"), Se = q()({
  name: "VRow",
  props: ms(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = C(() => {
      const a = [];
      let i;
      for (i in Ia)
        Ia[i].forEach((o) => {
          const r = e[o], s = vs(i, o, r);
          s && a.push(s);
        });
      return a.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), a;
    });
    return () => {
      var a;
      return Rt(e.tag, {
        class: ["v-row", l.value, e.class],
        style: e.style
      }, (a = n.default) == null ? void 0 : a.call(n));
    };
  }
});
function gs(e) {
  return {
    aspectStyles: C(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const ji = N({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...le(),
  ...Xe()
}, "VResponsive"), Ea = q()({
  name: "VResponsive",
  props: ji(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: l
    } = gs(e), {
      dimensionStyles: a
    } = Qe(e);
    return Z(() => {
      var i;
      return w("div", {
        class: Y(["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class]),
        style: ie([a.value, e.style])
      }, [w("div", {
        class: "v-responsive__sizer",
        style: ie(l.value)
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && w("div", {
        class: Y(["v-responsive__content", e.contentClass])
      }, [n.default()])]);
    }), {};
  }
}), un = N({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), st = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: l,
    disabled: a,
    group: i,
    ...o
  } = e, {
    component: r = i ? Sl : Ct,
    ...s
  } = tl(l) ? l : {};
  let u;
  return tl(l) ? u = J(s, Zo({
    disabled: a,
    group: i
  }), o) : u = J({
    name: a || !l ? "" : l
  }, o), Rt(r, u, n);
};
function ys(e, t) {
  if (!Cl) return;
  const n = t.modifiers || {}, l = t.value, {
    handler: a,
    options: i
  } = typeof l == "object" ? l : {
    handler: l,
    options: {}
  }, o = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (f = e._observe) == null ? void 0 : f[t.instance.$.uid];
    if (!u) return;
    const c = r.some((v) => v.isIntersecting);
    a && (!n.quiet || u.init) && (!n.once || c || u.init) && a(c, r, s), c && n.once ? Wi(e, t) : u.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Wi(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Ot = {
  mounted: ys,
  unmounted: Wi
}, hs = N({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...ji(),
  ...le(),
  ...Me(),
  ...un()
}, "VImg"), bs = q()({
  name: "VImg",
  directives: {
    vIntersect: Ot
  },
  props: hs(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: l
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = We(() => e.color), {
      roundedClasses: o
    } = Ne(e), r = we("VImg"), s = X(""), u = $(), c = X(e.eager ? "loading" : "idle"), f = X(), v = X(), d = C(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), h = C(() => d.value.aspect || f.value / v.value || 0);
    Q(() => e.src, () => {
      m(c.value !== "idle");
    }), Q(h, (T, O) => {
      !T && O && u.value && x(u.value);
    }), On(() => m());
    function m(T) {
      if (!(e.eager && T) && !(Cl && !T && !e.eager)) {
        if (c.value = "loading", d.value.lazySrc) {
          const O = new Image();
          O.src = d.value.lazySrc, x(O, null);
        }
        d.value.src && Ce(() => {
          var O;
          n("loadstart", ((O = u.value) == null ? void 0 : O.currentSrc) || d.value.src), setTimeout(() => {
            var M;
            if (!r.isUnmounted)
              if ((M = u.value) != null && M.complete) {
                if (u.value.naturalWidth || b(), c.value === "error") return;
                h.value || x(u.value, null), c.value === "loading" && y();
              } else
                h.value || x(u.value), S();
          });
        });
      }
    }
    function y() {
      var T;
      r.isUnmounted || (S(), x(u.value), c.value = "loaded", n("load", ((T = u.value) == null ? void 0 : T.currentSrc) || d.value.src));
    }
    function b() {
      var T;
      r.isUnmounted || (c.value = "error", n("error", ((T = u.value) == null ? void 0 : T.currentSrc) || d.value.src));
    }
    function S() {
      const T = u.value;
      T && (s.value = T.currentSrc || T.src);
    }
    let I = -1;
    qe(() => {
      clearTimeout(I);
    });
    function x(T) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const M = () => {
        if (clearTimeout(I), r.isUnmounted) return;
        const {
          naturalHeight: B,
          naturalWidth: L
        } = T;
        B || L ? (f.value = L, v.value = B) : !T.complete && c.value === "loading" && O != null ? I = window.setTimeout(M, O) : (T.currentSrc.endsWith(".svg") || T.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, v.value = 1);
      };
      M();
    }
    const E = V(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), F = () => {
      var M;
      if (!d.value.src || c.value === "idle") return null;
      const T = w("img", {
        class: Y(["v-img__img", E.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: d.value.src,
        srcset: d.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: u,
        onLoad: y,
        onError: b
      }, null), O = (M = l.sources) == null ? void 0 : M.call(l);
      return g(st, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ie(O ? w("picture", {
          class: "v-img__picture"
        }, [O, T]) : T, [[wt, c.value === "loaded"]])]
      });
    }, A = () => g(st, {
      transition: e.transition
    }, {
      default: () => [d.value.lazySrc && c.value !== "loaded" && w("img", {
        class: Y(["v-img__img", "v-img__img--preload", E.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: d.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), P = () => l.placeholder ? g(st, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !l.error) && w("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, j = () => l.error ? g(st, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [c.value === "error" && w("div", {
        class: "v-img__error"
      }, [l.error()])]
    }) : null, G = () => e.gradient ? w("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, R = X(!1);
    {
      const T = Q(h, (O) => {
        O && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            R.value = !0;
          });
        }), T());
      });
    }
    return Z(() => {
      const T = Ea.filterProps(e);
      return Ie(g(Ea, J({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !R.value
        }, a.value, o.value, e.class],
        style: [{
          width: ee(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, T, {
        aspectRatio: h.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => w(de, null, [g(F, null, null), g(A, null, null), g(G, null, null), g(P, null, null), g(j, null, null)]),
        default: l.default
      }), [[Ot, {
        handler: m,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: u,
      state: c,
      naturalWidth: f,
      naturalHeight: v
    };
  }
}), Ss = N({
  start: Boolean,
  end: Boolean,
  icon: ue,
  image: String,
  text: String,
  ...kt(),
  ...le(),
  ...ft(),
  ...Me(),
  ...rn(),
  ...he(),
  ...ke(),
  ...mt({
    variant: "flat"
  })
}, "VAvatar"), Qt = q()({
  name: "VAvatar",
  props: Ss(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      borderClasses: a
    } = xt(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = on(e), {
      densityClasses: s
    } = vt(e), {
      roundedClasses: u
    } = Ne(e), {
      sizeClasses: c,
      sizeStyles: f
    } = sn(e);
    return Z(() => g(e.tag, {
      class: Y(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, l.value, a.value, i.value, s.value, u.value, c.value, r.value, e.class]),
      style: ie([o.value, f.value, e.style])
    }, {
      default: () => [n.default ? g(Pe, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? g(bs, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? g(_e, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, an(!1, "v-avatar")]
    })), {};
  }
}), Cs = N({
  text: String,
  onClick: Be(),
  ...le(),
  ...ke()
}, "VLabel"), Ui = q()({
  name: "VLabel",
  props: Cs(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => {
      var l;
      return w("label", {
        class: Y(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: ie(e.style),
        onClick: e.onClick
      }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
    }), {};
  }
}), Gi = Symbol.for("vuetify:selection-control-group"), Ki = N({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ue,
  trueIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: Fe
  },
  ...le(),
  ...ft(),
  ...ke()
}, "SelectionControlGroup"), ps = N({
  ...Ki({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
q()({
  name: "VSelectionControlGroup",
  props: ps(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = ye(e, "modelValue"), a = ct(), i = V(() => e.id || `v-selection-control-group-${a}`), o = V(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Le(Gi, {
      modelValue: l,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), Ee(() => {
          r.delete(s);
        });
      }
    }), Ft({
      [e.defaultsTarget]: {
        color: V(() => e.color),
        disabled: V(() => e.disabled),
        density: V(() => e.density),
        error: V(() => e.error),
        inline: V(() => e.inline),
        modelValue: l,
        multiple: V(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
        name: o,
        falseIcon: V(() => e.falseIcon),
        trueIcon: V(() => e.trueIcon),
        readonly: V(() => e.readonly),
        ripple: V(() => e.ripple),
        type: V(() => e.type),
        valueComparator: V(() => e.valueComparator)
      }
    }), Z(() => {
      var s;
      return w("div", {
        class: Y(["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class]),
        style: ie(e.style),
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {};
  }
});
const qi = N({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...le(),
  ...Ki()
}, "VSelectionControl");
function ws(e) {
  const t = ve(Gi, void 0), {
    densityClasses: n
  } = vt(e), l = ye(e, "modelValue"), a = C(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = C(() => e.falseValue !== void 0 ? e.falseValue : !1), o = C(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), r = C({
    get() {
      const d = t ? t.modelValue.value : l.value;
      return o.value ? He(d).some((h) => e.valueComparator(h, a.value)) : e.valueComparator(d, a.value);
    },
    set(d) {
      if (e.readonly) return;
      const h = d ? a.value : i.value;
      let m = h;
      o.value && (m = d ? [...He(l.value), h] : He(l.value).filter((y) => !e.valueComparator(y, a.value))), t ? t.modelValue.value = m : l.value = m;
    }
  }), {
    textColorClasses: s,
    textColorStyles: u
  } = lt(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  }), {
    backgroundColorClasses: c,
    backgroundColorStyles: f
  } = We(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), v = C(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: a,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: c,
    backgroundColorStyles: f,
    icon: v
  };
}
const Aa = q()({
  name: "VSelectionControl",
  directives: {
    vRipple: at
  },
  inheritAttrs: !1,
  props: qi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const {
      group: a,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: u,
      backgroundColorClasses: c,
      backgroundColorStyles: f,
      trueValue: v
    } = ws(e), d = ct(), h = X(!1), m = X(!1), y = $(), b = V(() => e.id || `input-${d}`), S = V(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      y.value && (y.value.checked = r.value);
    });
    function I(A) {
      S.value && (h.value = !0, Cn(A.target, ":focus-visible") !== !1 && (m.value = !0));
    }
    function x() {
      h.value = !1, m.value = !1;
    }
    function E(A) {
      A.stopPropagation();
    }
    function F(A) {
      if (!S.value) {
        y.value && (y.value.checked = r.value);
        return;
      }
      e.readonly && a && Ce(() => a.forceUpdate()), r.value = A.target.checked;
    }
    return Z(() => {
      var R, T;
      const A = l.label ? l.label({
        label: e.label,
        props: {
          for: b.value
        }
      }) : e.label, [P, j] = Ln(n), G = w("input", J({
        ref: y,
        checked: r.value,
        disabled: !!e.disabled,
        id: b.value,
        onBlur: x,
        onFocus: I,
        onInput: F,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, j), null);
      return w("div", J({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": h.value,
          "v-selection-control--focus-visible": m.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, P, {
        style: e.style
      }), [w("div", {
        class: Y(["v-selection-control__wrapper", s.value]),
        style: ie(u.value)
      }, [(R = l.default) == null ? void 0 : R.call(l, {
        backgroundColorClasses: c,
        backgroundColorStyles: f
      }), Ie(w("div", {
        class: Y(["v-selection-control__input"])
      }, [((T = l.input) == null ? void 0 : T.call(l, {
        model: r,
        textColorClasses: s,
        textColorStyles: u,
        backgroundColorClasses: c,
        backgroundColorStyles: f,
        inputNode: G,
        icon: o.value,
        props: {
          onFocus: I,
          onBlur: x,
          id: b.value
        }
      })) ?? w(de, null, [o.value && g(_e, {
        key: "icon",
        icon: o.value
      }, null), G])]), [[at, !e.disabled && !e.readonly && e.ripple, null, {
        center: !0,
        circle: !0
      }]])]), A && g(Ui, {
        for: b.value,
        onClick: E
      }, {
        default: () => [A]
      })]);
    }), {
      isFocused: h,
      input: y
    };
  }
}), Yi = N({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ue,
    default: "$checkboxIndeterminate"
  },
  ...qi({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), ul = q()({
  name: "VCheckboxBtn",
  props: Yi(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = ye(e, "indeterminate"), a = ye(e, "modelValue");
    function i(s) {
      l.value && (l.value = !1);
    }
    const o = V(() => l.value ? e.indeterminateIcon : e.falseIcon), r = V(() => l.value ? e.indeterminateIcon : e.trueIcon);
    return Z(() => {
      const s = dt(Aa.filterProps(e), ["modelValue"]);
      return g(Aa, J(s, {
        modelValue: a.value,
        "onUpdate:modelValue": [(u) => a.value = u, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": l.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function Xi(e) {
  const {
    t
  } = Al();
  function n(l) {
    let {
      name: a,
      color: i,
      ...o
    } = l;
    const r = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[a], s = e[`onClick:${a}`];
    function u(f) {
      f.key !== "Enter" && f.key !== " " || (f.preventDefault(), f.stopPropagation(), kl(s, new PointerEvent("click", f)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return g(_e, J({
      icon: e[`${a}Icon`],
      "aria-label": c,
      onClick: s,
      onKeydown: u,
      color: i
    }, o), null);
  }
  return {
    InputIcon: n
  };
}
const ks = N({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...le(),
  ...un({
    transition: {
      component: ki,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), xs = q()({
  name: "VMessages",
  props: ks(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = C(() => He(e.messages)), {
      textColorClasses: a,
      textColorStyles: i
    } = lt(() => e.color);
    return Z(() => g(st, {
      transition: e.transition,
      tag: "div",
      class: Y(["v-messages", a.value, e.class]),
      style: ie([i.value, e.style])
    }, {
      default: () => [e.active && l.value.map((o, r) => w("div", {
        class: "v-messages__message",
        key: `${r}-${l.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Qi = N({
  focused: Boolean,
  "onUpdate:focused": Be()
}, "focus");
function Dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye();
  const n = ye(e, "focused"), l = V(() => ({
    [`${t}--focused`]: n.value
  }));
  function a() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: l,
    isFocused: n,
    focus: a,
    blur: i
  };
}
const Vs = Symbol.for("vuetify:form");
function Ji(e) {
  const t = ve(Vs, null);
  return {
    ...t,
    isReadonly: C(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: C(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const Ps = Symbol.for("vuetify:rules");
function _s(e) {
  const t = ve(Ps, null);
  if (!e) {
    if (!t)
      throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? V(e);
}
const Is = N({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Qi()
}, "validation");
function Es(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ct();
  const l = ye(e, "modelValue"), a = C(() => e.validationValue === void 0 ? l.value : e.validationValue), i = Ji(e), o = _s(() => e.rules), r = $([]), s = X(!0), u = C(() => !!(He(l.value === "" ? null : l.value).length || He(a.value === "" ? null : a.value).length)), c = C(() => {
    var x;
    return (x = e.errorMessages) != null && x.length ? He(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), f = C(() => {
    var F;
    let x = (e.validateOn ?? ((F = i.validateOn) == null ? void 0 : F.value)) || "input";
    x === "lazy" && (x = "input lazy"), x === "eager" && (x = "input eager");
    const E = new Set((x == null ? void 0 : x.split(" ")) ?? []);
    return {
      input: E.has("input"),
      blur: E.has("blur") || E.has("input") || E.has("invalid-input"),
      invalidInput: E.has("invalid-input"),
      lazy: E.has("lazy"),
      eager: E.has("eager")
    };
  }), v = C(() => {
    var x;
    return e.error || (x = e.errorMessages) != null && x.length ? !1 : e.rules.length ? s.value ? r.value.length || f.value.lazy ? null : !0 : !r.value.length : !0;
  }), d = X(!1), h = C(() => ({
    [`${t}--error`]: v.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: i.isDisabled.value,
    [`${t}--readonly`]: i.isReadonly.value
  })), m = we("validation"), y = C(() => e.name ?? ze(n));
  On(() => {
    var x;
    (x = i.register) == null || x.call(i, {
      id: y.value,
      vm: m,
      validate: I,
      reset: b,
      resetValidation: S
    });
  }), qe(() => {
    var x;
    (x = i.unregister) == null || x.call(i, y.value);
  }), pt(async () => {
    var x;
    f.value.lazy || await I(!f.value.eager), (x = i.update) == null || x.call(i, y.value, v.value, c.value);
  }), ut(() => f.value.input || f.value.invalidInput && v.value === !1, () => {
    Q(a, () => {
      if (a.value != null)
        I();
      else if (e.focused) {
        const x = Q(() => e.focused, (E) => {
          E || I(), x();
        });
      }
    });
  }), ut(() => f.value.blur, () => {
    Q(() => e.focused, (x) => {
      x || I();
    });
  }), Q([v, c], () => {
    var x;
    (x = i.update) == null || x.call(i, y.value, v.value, c.value);
  });
  async function b() {
    l.value = null, await Ce(), await S();
  }
  async function S() {
    s.value = !0, f.value.lazy ? r.value = [] : await I(!f.value.eager);
  }
  async function I() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const E = [];
    d.value = !0;
    for (const F of o.value) {
      if (E.length >= Number(e.maxErrors ?? 1))
        break;
      const P = await (typeof F == "function" ? F : () => F)(a.value);
      if (P !== !0) {
        if (P !== !1 && typeof P != "string") {
          console.warn(`${P} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        E.push(P || "");
      }
    }
    return r.value = E, d.value = !1, s.value = x, r.value;
  }
  return {
    errorMessages: c,
    isDirty: u,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: s,
    isValid: v,
    isValidating: d,
    reset: b,
    resetValidation: S,
    validate: I,
    validationClasses: h
  };
}
const zn = N({
  id: String,
  appendIcon: ue,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: ue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Be(),
  "onClick:append": Be(),
  ...le(),
  ...ft(),
  ...nn(Xe(), ["maxWidth", "minWidth", "width"]),
  ...ke(),
  ...Is()
}, "VInput"), Lt = q()({
  name: "VInput",
  props: {
    ...zn()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l,
      emit: a
    } = t;
    const {
      densityClasses: i
    } = vt(e), {
      dimensionStyles: o
    } = Qe(e), {
      themeClasses: r
    } = Ae(e), {
      rtlClasses: s
    } = it(), {
      InputIcon: u
    } = Xi(e), c = ct(), f = C(() => e.id || `input-${c}`), {
      errorMessages: v,
      isDirty: d,
      isDisabled: h,
      isReadonly: m,
      isPristine: y,
      isValid: b,
      isValidating: S,
      reset: I,
      resetValidation: x,
      validate: E,
      validationClasses: F
    } = Es(e, "v-input", f), A = C(() => {
      var M;
      return (M = e.errorMessages) != null && M.length || !y.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    }), P = V(() => A.value.length > 0), j = V(() => !e.hideDetails || e.hideDetails === "auto" && (P.value || !!l.details)), G = C(() => j.value ? `${f.value}-messages` : void 0), R = C(() => ({
      id: f,
      messagesId: G,
      isDirty: d,
      isDisabled: h,
      isReadonly: m,
      isPristine: y,
      isValid: b,
      isValidating: S,
      hasDetails: j,
      reset: I,
      resetValidation: x,
      validate: E
    })), T = V(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), O = V(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? T.value : e.iconColor;
    });
    return Z(() => {
      var L, D, K, ne;
      const M = !!(l.prepend || e.prependIcon), B = !!(l.append || e.appendIcon);
      return w("div", {
        class: Y(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, F.value, e.class]),
        style: ie([o.value, e.style])
      }, [M && w("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(L = l.prepend) == null ? void 0 : L.call(l, R.value), e.prependIcon && g(u, {
        key: "prepend-icon",
        name: "prepend",
        color: O.value
      }, null)]), l.default && w("div", {
        class: "v-input__control"
      }, [(D = l.default) == null ? void 0 : D.call(l, R.value)]), B && w("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && g(u, {
        key: "append-icon",
        name: "append",
        color: O.value
      }, null), (K = l.append) == null ? void 0 : K.call(l, R.value)]), j.value && w("div", {
        id: G.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [g(xs, {
        active: P.value,
        messages: A.value
      }, {
        message: l.message
      }), (ne = l.details) == null ? void 0 : ne.call(l, R.value)])]);
    }), {
      reset: I,
      resetValidation: x,
      validate: E,
      isValid: b,
      errorMessages: v
    };
  }
}), Kn = Symbol("Forwarded refs");
function qn(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l) return l;
    n = Object.getPrototypeOf(n);
  }
}
function Mt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return e[Kn] = n, new Proxy(e, {
    get(a, i) {
      if (Reflect.has(a, i))
        return Reflect.get(a, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of n)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(a, i) {
      if (Reflect.has(a, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(a, i, o) {
      if (Reflect.has(a, i))
        return Reflect.set(a, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(a, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(a, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n) {
          if (!s.value) continue;
          const u = qn(s.value, i) ?? ("_" in s.value ? qn((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (u) return u;
        }
        for (const s of n) {
          const u = s.value && s.value[Kn];
          if (!u) continue;
          const c = u.slice();
          for (; c.length; ) {
            const f = c.shift(), v = qn(f.value, i);
            if (v) return v;
            const d = f.value && f.value[Kn];
            d && c.push(...d);
          }
        }
      }
    }
  });
}
const As = N({
  ...zn(),
  ...dt(Yi(), ["inline"])
}, "VCheckbox"), Bs = q()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: As(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const a = ye(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = Dn(e), s = $(), u = ct();
    return Z(() => {
      const [c, f] = Ln(n), v = Lt.filterProps(e), d = ul.filterProps(e);
      return g(Lt, J({
        ref: s,
        class: ["v-checkbox", e.class]
      }, c, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (h) => a.value = h,
        id: e.id || `checkbox-${u}`,
        focused: i.value,
        style: e.style
      }), {
        ...l,
        default: (h) => {
          let {
            id: m,
            messagesId: y,
            isDisabled: b,
            isReadonly: S,
            isValid: I
          } = h;
          return g(ul, J(d, {
            id: m.value,
            "aria-describedby": y.value,
            disabled: b.value,
            readonly: S.value
          }, f, {
            error: I.value === !1,
            modelValue: a.value,
            "onUpdate:modelValue": (x) => a.value = x,
            onFocus: o,
            onBlur: r
          }), l);
        }
      });
    }), Mt({}, s);
  }
}), Ts = Symbol.for("vuetify:goto");
function Os() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: kr
  };
}
function Ls(e) {
  return $l(e) ?? (document.scrollingElement || document.body);
}
function $l(e) {
  return typeof e == "string" ? document.querySelector(e) : pl(e);
}
function Yn(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let l = $l(e), a = 0;
  for (; l; )
    a += t ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Ba(e, t, n, l) {
  const a = n ? "scrollLeft" : "scrollTop", i = nt((l == null ? void 0 : l.options) ?? Os(), t), o = l == null ? void 0 : l.rtl.value, r = (typeof e == "number" ? e : $l(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Ls(i.container), u = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!u) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let c;
  if (typeof r == "number")
    c = Yn(r, n, o);
  else if (c = Yn(r, n, o) - Yn(s, n, o), i.layout) {
    const h = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    h && (c -= parseInt(h, 10));
  }
  c += i.offset, c = Fs(s, c, !!o, !!n);
  const f = s[a] ?? 0;
  if (c === f) return Promise.resolve(c);
  const v = performance.now();
  return new Promise((d) => requestAnimationFrame(function h(m) {
    const b = (m - v) / i.duration, S = Math.floor(f + (c - f) * u(je(b, 0, 1)));
    if (s[a] = S, b >= 1 && Math.abs(S - s[a]) < 10)
      return d(c);
    if (b > 2)
      return St("Scroll target is not reachable"), d(s[a]);
    requestAnimationFrame(h);
  }));
}
function Rs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = ve(Ts), {
    isRtl: n
  } = it();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...t,
    // can be set via VLocaleProvider
    rtl: V(() => t.rtl.value || n.value)
  };
  async function a(i, o) {
    return Ba(i, nt(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Ba(i, nt(e, o), !0, l), a;
}
function Fs(e, t, n, l) {
  const {
    scrollWidth: a,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return l ? n ? (s = -(a - o), u = 0) : (s = 0, u = a - o) : (s = 0, u = i + -r), je(t, s, u);
}
function Ms(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: l,
    isHorizontal: a
  } = e;
  const i = Jt(a, n), o = Zi(a, l, n), r = Jt(a, t), s = eo(a, t), u = r * 0.4;
  return o > s ? s - u : o + i < s + r ? s - i + r + u : o;
}
function Ns(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isHorizontal: l
  } = e;
  const a = Jt(l, n), i = eo(l, t), o = Jt(l, t);
  return i - a / 2 + o / 2;
}
function Ta(e, t) {
  const n = e ? "scrollWidth" : "scrollHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function $s(e, t) {
  const n = e ? "clientWidth" : "clientHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function Zi(e, t, n) {
  if (!n)
    return 0;
  const {
    scrollLeft: l,
    offsetWidth: a,
    scrollWidth: i
  } = n;
  return e ? t ? i - a + l : l : n.scrollTop;
}
function Jt(e, t) {
  const n = e ? "offsetWidth" : "offsetHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function eo(e, t) {
  const n = e ? "offsetLeft" : "offsetTop";
  return (t == null ? void 0 : t[n]) || 0;
}
const Ds = Symbol.for("vuetify:v-slide-group"), to = N({
  centerActive: Boolean,
  contentClass: null,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Ds
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...le(),
  ...is({
    mobile: null
  }),
  ...he(),
  ...Rn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Oa = q()({
  name: "VSlideGroup",
  props: to(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: l
    } = it(), {
      displayClasses: a,
      mobile: i
    } = Fl(e), o = Fn(e, e.symbol), r = X(!1), s = X(0), u = X(0), c = X(0), f = C(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: d
    } = Kt(), {
      resizeRef: h,
      contentRect: m
    } = Kt(), y = Rs(), b = C(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), S = C(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[0]) : -1), I = C(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (pe) {
      let k = -1;
      Q(() => [o.selected.value, d.value, m.value, f.value], () => {
        cancelAnimationFrame(k), k = requestAnimationFrame(() => {
          if (d.value && m.value) {
            const _ = f.value ? "width" : "height";
            u.value = d.value[_], c.value = m.value[_], r.value = u.value + 1 < c.value;
          }
          if (S.value >= 0 && h.el) {
            const _ = h.el.children[I.value];
            E(_, e.centerActive);
          }
        });
      });
    }
    const x = X(!1);
    function E(k, _) {
      let H = 0;
      _ ? H = Ns({
        containerElement: v.el,
        isHorizontal: f.value,
        selectedElement: k
      }) : H = Ms({
        containerElement: v.el,
        isHorizontal: f.value,
        isRtl: l.value,
        selectedElement: k
      }), F(H);
    }
    function F(k) {
      if (!pe || !v.el) return;
      const _ = Jt(f.value, v.el), H = Zi(f.value, l.value, v.el);
      if (!(Ta(f.value, v.el) <= _ || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(k - H) < 16)) {
        if (f.value && l.value && v.el) {
          const {
            scrollWidth: z,
            offsetWidth: oe
          } = v.el;
          k = z - oe - k;
        }
        f.value ? y.horizontal(k, b.value) : y(k, b.value);
      }
    }
    function A(k) {
      const {
        scrollTop: _,
        scrollLeft: H
      } = k.target;
      s.value = f.value ? H : _;
    }
    function P(k) {
      if (x.value = !0, !(!r.value || !h.el)) {
        for (const _ of k.composedPath())
          for (const H of h.el.children)
            if (H === _) {
              E(H);
              return;
            }
      }
    }
    function j(k) {
      x.value = !1;
    }
    let G = !1;
    function R(k) {
      var _;
      !G && !x.value && !(k.relatedTarget && ((_ = h.el) != null && _.contains(k.relatedTarget))) && B(), G = !1;
    }
    function T() {
      G = !0;
    }
    function O(k) {
      if (!h.el) return;
      function _(H) {
        k.preventDefault(), B(H);
      }
      f.value ? k.key === "ArrowRight" ? _(l.value ? "prev" : "next") : k.key === "ArrowLeft" && _(l.value ? "next" : "prev") : k.key === "ArrowDown" ? _("next") : k.key === "ArrowUp" && _("prev"), k.key === "Home" ? _("first") : k.key === "End" && _("last");
    }
    function M(k, _) {
      if (!k) return;
      let H = k;
      do
        H = H == null ? void 0 : H[_ === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (H != null && H.hasAttribute("disabled"));
      return H;
    }
    function B(k) {
      if (!h.el) return;
      let _;
      if (!k)
        _ = Sn(h.el)[0];
      else if (k === "next") {
        if (_ = M(h.el.querySelector(":focus"), k), !_) return B("first");
      } else if (k === "prev") {
        if (_ = M(h.el.querySelector(":focus"), k), !_) return B("last");
      } else k === "first" ? (_ = h.el.firstElementChild, _ != null && _.hasAttribute("disabled") && (_ = M(_, "next"))) : k === "last" && (_ = h.el.lastElementChild, _ != null && _.hasAttribute("disabled") && (_ = M(_, "prev")));
      _ && _.focus({
        preventScroll: !0
      });
    }
    function L(k) {
      const _ = f.value && l.value ? -1 : 1, H = (k === "prev" ? -_ : _) * u.value;
      let ae = s.value + H;
      if (f.value && l.value && v.el) {
        const {
          scrollWidth: z,
          offsetWidth: oe
        } = v.el;
        ae += z - oe;
      }
      F(ae);
    }
    const D = C(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), K = C(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return r.value || Math.abs(s.value) > 0;
        case "mobile":
          return i.value || r.value || Math.abs(s.value) > 0;
        default:
          return !i.value && (r.value || Math.abs(s.value) > 0);
      }
    }), ne = C(() => Math.abs(s.value) > 1), p = C(() => {
      if (!v.value) return !1;
      const k = Ta(f.value, v.el), _ = $s(f.value, v.el);
      return k - _ - Math.abs(s.value) > 1;
    });
    return Z(() => g(e.tag, {
      class: Y(["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": K.value,
        "v-slide-group--is-overflowing": r.value
      }, a.value, e.class]),
      style: ie(e.style),
      tabindex: x.value || o.selected.value.length ? -1 : 0,
      onFocus: R
    }, {
      default: () => {
        var k, _, H;
        return [K.value && w("div", {
          key: "prev",
          class: Y(["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !ne.value
          }]),
          onMousedown: T,
          onClick: () => ne.value && L("prev")
        }, [((k = n.prev) == null ? void 0 : k.call(n, D.value)) ?? g(Va, null, {
          default: () => [g(_e, {
            icon: l.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), w("div", {
          key: "container",
          ref: v,
          class: Y(["v-slide-group__container", e.contentClass]),
          onScroll: A
        }, [w("div", {
          ref: h,
          class: "v-slide-group__content",
          onFocusin: P,
          onFocusout: j,
          onKeydown: O
        }, [(_ = n.default) == null ? void 0 : _.call(n, D.value)])]), K.value && w("div", {
          key: "next",
          class: Y(["v-slide-group__next", {
            "v-slide-group__next--disabled": !p.value
          }]),
          onMousedown: T,
          onClick: () => p.value && L("next")
        }, [((H = n.next) == null ? void 0 : H.call(n, D.value)) ?? g(Va, null, {
          default: () => [g(_e, {
            icon: l.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: L,
      scrollOffset: s,
      focus: B,
      hasPrev: ne,
      hasNext: p
    };
  }
}), no = Symbol.for("vuetify:v-chip-group"), zs = N({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: Fe
  },
  ...to(),
  ...le(),
  ...Rn({
    selectedClass: "v-chip--selected"
  }),
  ...he(),
  ...ke(),
  ...mt({
    variant: "tonal"
  })
}, "VChipGroup");
q()({
  name: "VChipGroup",
  props: zs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      isSelected: a,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = Fn(e, no);
    return Ft({
      VChip: {
        baseColor: V(() => e.baseColor),
        color: V(() => e.color),
        disabled: V(() => e.disabled),
        filter: V(() => e.filter),
        variant: V(() => e.variant)
      }
    }), Z(() => {
      const u = Oa.filterProps(e);
      return g(Oa, J(u, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, l.value, e.class],
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: a,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
});
const Hs = N({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ue,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: ue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: ue,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Be(),
  onClickOnce: Be(),
  ...kt(),
  ...le(),
  ...ft(),
  ...Vt(),
  ...Il(),
  ...Me(),
  ...Rl(),
  ...rn(),
  ...he({
    tag: "span"
  }),
  ...ke(),
  ...mt({
    variant: "tonal"
  })
}, "VChip"), lo = q()({
  name: "VChip",
  directives: {
    vRipple: at
  },
  props: Hs(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: l,
      slots: a
    } = t;
    const {
      t: i
    } = Al(), {
      borderClasses: o
    } = xt(e), {
      densityClasses: r
    } = vt(e), {
      elevationClasses: s
    } = Pt(e), {
      roundedClasses: u
    } = Ne(e), {
      sizeClasses: c
    } = sn(e), {
      themeClasses: f
    } = Ae(e), v = ye(e, "modelValue"), d = El(e, no, !1), h = Ll(e, n), m = V(() => e.link !== !1 && h.isLink.value), y = C(() => !e.disabled && e.link !== !1 && (!!d || e.link || h.isClickable.value)), b = V(() => ({
      "aria-label": i(e.closeLabel),
      disabled: e.disabled,
      onClick(A) {
        A.preventDefault(), A.stopPropagation(), v.value = !1, l("click:close", A);
      }
    })), {
      colorClasses: S,
      colorStyles: I,
      variantClasses: x
    } = on(() => ({
      color: !d || d.isSelected.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    function E(A) {
      var P;
      l("click", A), y.value && ((P = h.navigate) == null || P.call(h, A), d == null || d.toggle());
    }
    function F(A) {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), E(A));
    }
    return () => {
      var M;
      const A = h.isLink.value ? "a" : e.tag, P = !!(e.appendIcon || e.appendAvatar), j = !!(P || a.append), G = !!(a.close || e.closable), R = !!(a.filter || e.filter) && d, T = !!(e.prependIcon || e.prependAvatar), O = !!(T || a.prepend);
      return v.value && Ie(g(A, J({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": y.value,
          "v-chip--filter": R,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && ((M = h.isActive) == null ? void 0 : M.value)
        }, f.value, o.value, S.value, r.value, s.value, u.value, c.value, x.value, d == null ? void 0 : d.selectedClass.value, e.class],
        style: [I.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: y.value ? 0 : void 0,
        onClick: E,
        onKeydown: y.value && !m.value && F
      }, h.linkProps), {
        default: () => {
          var B;
          return [an(y.value, "v-chip"), R && g(Vi, {
            key: "filter"
          }, {
            default: () => [Ie(w("div", {
              class: "v-chip__filter"
            }, [a.filter ? g(Pe, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, a.filter) : g(_e, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[wt, d.isSelected.value]])]
          }), O && w("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [a.prepend ? g(Pe, {
            key: "prepend-defaults",
            disabled: !T,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, a.prepend) : w(de, null, [e.prependIcon && g(_e, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && g(Qt, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), w("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((B = a.default) == null ? void 0 : B.call(a, {
            isSelected: d == null ? void 0 : d.isSelected.value,
            selectedClass: d == null ? void 0 : d.selectedClass.value,
            select: d == null ? void 0 : d.select,
            toggle: d == null ? void 0 : d.toggle,
            value: d == null ? void 0 : d.value.value,
            disabled: e.disabled
          })) ?? tt(e.text)]), j && w("div", {
            key: "append",
            class: "v-chip__append"
          }, [a.append ? g(Pe, {
            key: "append-defaults",
            disabled: !P,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, a.append) : w(de, null, [e.appendIcon && g(_e, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && g(Qt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), G && w("button", J({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, b.value), [a.close ? g(Pe, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, a.close) : g(_e, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[at, y.value && e.ripple, null]]);
    };
  }
}), js = N({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...le(),
  ...ke()
}, "VDivider"), Wt = q()({
  name: "VDivider",
  props: js(),
  setup(e, t) {
    let {
      attrs: n,
      slots: l
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      textColorClasses: i,
      textColorStyles: o
    } = lt(() => e.color), r = C(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = ee(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ee(e.thickness)), s;
    });
    return Z(() => {
      const s = w("hr", {
        class: Y([{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, a.value, i.value, e.class]),
        style: ie([r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return l.default ? w("div", {
        class: Y(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }])
      }, [s, w("div", {
        class: "v-divider__content"
      }, [l.default()]), s]) : s;
    }), {};
  }
}), cl = Symbol.for("vuetify:list");
function ao() {
  let {
    filterable: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    filterable: !1
  };
  const t = ve(cl, {
    filterable: !1,
    hasPrepend: X(!1),
    updateHasPrepend: () => null
  }), n = {
    filterable: t.filterable || e,
    hasPrepend: X(!1),
    updateHasPrepend: (l) => {
      l && (n.hasPrepend.value = l);
    }
  };
  return Le(cl, n), t;
}
function io() {
  return ve(cl, null);
}
const Dl = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: l,
        value: a,
        activated: i
      } = n;
      return l = xe(l), e && !a && i.size === 1 && i.has(l) || (a ? i.add(l) : i.delete(l)), i;
    },
    in: (n, l, a) => {
      let i = /* @__PURE__ */ new Set();
      if (n != null)
        for (const o of He(n))
          i = t.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: l,
            parents: a
          });
      return i;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, oo = (e) => {
  const t = Dl(e);
  return {
    activate: (l) => {
      let {
        activated: a,
        id: i,
        ...o
      } = l;
      i = xe(i);
      const r = a.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (l, a, i) => {
      let o = /* @__PURE__ */ new Set();
      if (l != null) {
        const r = He(l);
        r.length && (o = t.in(r.slice(0, 1), a, i));
      }
      return o;
    },
    out: (l, a, i) => t.out(l, a, i)
  };
}, Ws = (e) => {
  const t = Dl(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...r
      } = l;
      return a = xe(a), o.has(a) ? i : t.activate({
        id: a,
        activated: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, Us = (e) => {
  const t = oo(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...r
      } = l;
      return a = xe(a), o.has(a) ? i : t.activate({
        id: a,
        activated: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, Gs = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: l,
      parents: a
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let o = a.get(t);
      for (; o != null; )
        i.add(o), o = a.get(o);
      return i;
    } else
      return l.delete(t), l;
  },
  select: () => null
}, ro = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: l,
      parents: a
    } = e;
    if (n) {
      let i = a.get(t);
      for (l.add(t); i != null && i !== t; )
        l.add(i), i = a.get(i);
      return l;
    } else
      l.delete(t);
    return l;
  },
  select: () => null
}, Ks = {
  open: ro.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: l,
      parents: a
    } = e;
    if (!n) return l;
    const i = [];
    let o = a.get(t);
    for (; o != null; )
      i.push(o), o = a.get(o);
    return new Set(i);
  }
}, zl = (e) => {
  const t = {
    select: (n) => {
      let {
        id: l,
        value: a,
        selected: i
      } = n;
      if (l = xe(l), e && !a) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [u, c] = s;
          return c === "on" && r.push(u), r;
        }, []);
        if (o.length === 1 && o[0] === l) return i;
      }
      return i.set(l, a ? "on" : "off"), i;
    },
    in: (n, l, a, i) => {
      const o = /* @__PURE__ */ new Map();
      for (const r of n || [])
        t.select({
          id: r,
          value: !0,
          selected: o,
          children: l,
          parents: a,
          disabled: i
        });
      return o;
    },
    out: (n) => {
      const l = [];
      for (const [a, i] of n.entries())
        i === "on" && l.push(a);
      return l;
    }
  };
  return t;
}, so = (e) => {
  const t = zl(e);
  return {
    select: (l) => {
      let {
        selected: a,
        id: i,
        ...o
      } = l;
      i = xe(i);
      const r = a.has(i) ? /* @__PURE__ */ new Map([[i, a.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (l, a, i, o) => l != null && l.length ? t.in(l.slice(0, 1), a, i, o) : /* @__PURE__ */ new Map(),
    out: (l, a, i) => t.out(l, a, i)
  };
}, qs = (e) => {
  const t = zl(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...r
      } = l;
      return a = xe(a), o.has(a) ? i : t.select({
        id: a,
        selected: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, Ys = (e) => {
  const t = so(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...r
      } = l;
      return a = xe(a), o.has(a) ? i : t.select({
        id: a,
        selected: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, uo = (e) => {
  const t = {
    select: (n) => {
      let {
        id: l,
        value: a,
        selected: i,
        children: o,
        parents: r,
        disabled: s
      } = n;
      l = xe(l);
      const u = new Map(i), c = [l];
      for (; c.length; ) {
        const v = c.shift();
        s.has(v) || i.set(xe(v), a ? "on" : "off"), o.has(v) && c.push(...o.get(v));
      }
      let f = xe(r.get(l));
      for (; f; ) {
        let v = !0, d = !0;
        for (const h of o.get(f)) {
          const m = xe(h);
          if (!s.has(m) && (i.get(m) !== "on" && (v = !1), i.has(m) && i.get(m) !== "off" && (d = !1), !v && !d))
            break;
        }
        i.set(f, v ? "on" : d ? "off" : "indeterminate"), f = xe(r.get(f));
      }
      return e && !a && Array.from(i.entries()).reduce((d, h) => {
        let [m, y] = h;
        return y === "on" && d.push(m), d;
      }, []).length === 0 ? u : i;
    },
    in: (n, l, a, i) => {
      let o = /* @__PURE__ */ new Map();
      for (const r of n || [])
        o = t.select({
          id: r,
          value: !0,
          selected: o,
          children: l,
          parents: a,
          disabled: i
        });
      return o;
    },
    out: (n, l) => {
      const a = [];
      for (const [i, o] of n.entries())
        o === "on" && !l.has(i) && a.push(i);
      return a;
    }
  };
  return t;
}, Xs = (e) => {
  const t = uo(e);
  return {
    select: t.select,
    in: t.in,
    out: (l, a, i) => {
      const o = [];
      for (const [r, s] of l.entries())
        if (s === "on") {
          if (i.has(r)) {
            const u = i.get(r);
            if (l.get(u) === "on") continue;
          }
          o.push(r);
        }
      return o;
    }
  };
}, Zt = Symbol.for("vuetify:nested"), co = {
  id: X(),
  root: {
    register: () => null,
    unregister: () => null,
    children: $(/* @__PURE__ */ new Map()),
    parents: $(/* @__PURE__ */ new Map()),
    disabled: $(/* @__PURE__ */ new Set()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: $(!1),
    selectable: $(!1),
    opened: $(/* @__PURE__ */ new Set()),
    activated: $(/* @__PURE__ */ new Set()),
    selected: $(/* @__PURE__ */ new Map()),
    selectedValues: $([]),
    getPath: () => []
  }
}, Qs = N({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Js = (e) => {
  let t = !1;
  const n = X(/* @__PURE__ */ new Map()), l = X(/* @__PURE__ */ new Map()), a = X(/* @__PURE__ */ new Set()), i = ye(e, "opened", e.opened, (m) => new Set(Array.isArray(m) ? m.map((y) => xe(y)) : m), (m) => [...m.values()]), o = C(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Ws(e.mandatory);
      case "single-leaf":
        return Us(e.mandatory);
      case "independent":
        return Dl(e.mandatory);
      case "single-independent":
      default:
        return oo(e.mandatory);
    }
  }), r = C(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Ys(e.mandatory);
      case "leaf":
        return qs(e.mandatory);
      case "independent":
        return zl(e.mandatory);
      case "single-independent":
        return so(e.mandatory);
      case "trunk":
        return Xs(e.mandatory);
      case "classic":
      default:
        return uo(e.mandatory);
    }
  }), s = C(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Ks;
      case "single":
        return Gs;
      case "multiple":
      default:
        return ro;
    }
  }), u = ye(e, "activated", e.activated, (m) => o.value.in(m, n.value, l.value), (m) => o.value.out(m, n.value, l.value)), c = ye(e, "selected", e.selected, (m) => r.value.in(m, n.value, l.value, a.value), (m) => r.value.out(m, n.value, l.value));
  qe(() => {
    t = !0;
  });
  function f(m) {
    const y = [];
    let b = xe(m);
    for (; b != null; )
      y.unshift(b), b = l.value.get(b);
    return y;
  }
  const v = we("nested"), d = /* @__PURE__ */ new Set(), h = {
    id: X(),
    root: {
      opened: i,
      activatable: V(() => e.activatable),
      selectable: V(() => e.selectable),
      activated: u,
      selected: c,
      selectedValues: C(() => {
        const m = [];
        for (const [y, b] of c.value.entries())
          b === "on" && m.push(y);
        return m;
      }),
      register: (m, y, b, S) => {
        if (d.has(m)) {
          const I = f(m).map(String).join(" -> "), x = f(y).concat(m).map(String).join(" -> ");
          ti(`Multiple nodes with the same ID
	${I}
	${x}`);
          return;
        } else
          d.add(m);
        y && m !== y && l.value.set(m, y), b && a.value.add(m), S && n.value.set(m, []), y != null && n.value.set(y, [...n.value.get(y) || [], m]);
      },
      unregister: (m) => {
        if (t) return;
        d.delete(m), n.value.delete(m), a.value.delete(m);
        const y = l.value.get(m);
        if (y) {
          const b = n.value.get(y) ?? [];
          n.value.set(y, b.filter((S) => S !== m));
        }
        l.value.delete(m);
      },
      open: (m, y, b) => {
        v.emit("click:open", {
          id: m,
          value: y,
          path: f(m),
          event: b
        });
        const S = s.value.open({
          id: m,
          value: y,
          opened: new Set(i.value),
          children: n.value,
          parents: l.value,
          event: b
        });
        S && (i.value = S);
      },
      openOnSelect: (m, y, b) => {
        const S = s.value.select({
          id: m,
          value: y,
          selected: new Map(c.value),
          opened: new Set(i.value),
          children: n.value,
          parents: l.value,
          event: b
        });
        S && (i.value = S);
      },
      select: (m, y, b) => {
        v.emit("click:select", {
          id: m,
          value: y,
          path: f(m),
          event: b
        });
        const S = r.value.select({
          id: m,
          value: y,
          selected: new Map(c.value),
          children: n.value,
          parents: l.value,
          disabled: a.value,
          event: b
        });
        S && (c.value = S), h.root.openOnSelect(m, y, b);
      },
      activate: (m, y, b) => {
        if (!e.activatable)
          return h.root.select(m, !0, b);
        v.emit("click:activate", {
          id: m,
          value: y,
          path: f(m),
          event: b
        });
        const S = o.value.activate({
          id: m,
          value: y,
          activated: new Set(u.value),
          children: n.value,
          parents: l.value,
          event: b
        });
        if (S.size !== u.value.size)
          u.value = S;
        else {
          for (const I of S)
            if (!u.value.has(I)) {
              u.value = S;
              return;
            }
          for (const I of u.value)
            if (!S.has(I)) {
              u.value = S;
              return;
            }
        }
      },
      children: n,
      parents: l,
      disabled: a,
      getPath: f
    }
  };
  return Le(Zt, h), h.root;
}, fo = (e, t, n) => {
  const l = ve(Zt, co), a = Symbol("nested item"), i = C(() => xe(Ke(e)) ?? a), o = {
    ...l,
    id: i,
    open: (r, s) => l.root.open(i.value, r, s),
    openOnSelect: (r, s) => l.root.openOnSelect(i.value, r, s),
    isOpen: C(() => l.root.opened.value.has(i.value)),
    parent: C(() => l.root.parents.value.get(i.value)),
    activate: (r, s) => l.root.activate(i.value, r, s),
    isActivated: C(() => l.root.activated.value.has(i.value)),
    select: (r, s) => l.root.select(i.value, r, s),
    isSelected: C(() => l.root.selected.value.get(i.value) === "on"),
    isIndeterminate: C(() => l.root.selected.value.get(i.value) === "indeterminate"),
    isLeaf: C(() => !l.root.children.value.get(i.value)),
    isGroupActivator: l.isGroupActivator
  };
  return On(() => {
    l.isGroupActivator || l.root.register(i.value, l.id.value, Ke(t), n);
  }), qe(() => {
    l.isGroupActivator || l.root.unregister(i.value);
  }), n && Le(Zt, o), o;
}, Zs = () => {
  const e = ve(Zt, co);
  Le(Zt, {
    ...e,
    isGroupActivator: !0
  });
};
function eu() {
  const e = X(!1);
  return pt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: V(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: bl(e)
  };
}
const tu = ln({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Zs(), () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n);
    };
  }
}), nu = N({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ue,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: ue,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: ue,
  appendIcon: ue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...le(),
  ...he()
}, "VListGroup"), La = q()({
  name: "VListGroup",
  props: nu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: l,
      open: a,
      id: i
    } = fo(() => e.value, () => e.disabled, !0), o = C(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), r = io(), {
      isBooted: s
    } = eu();
    function u(d) {
      var h;
      ["INPUT", "TEXTAREA"].includes((h = d.target) == null ? void 0 : h.tagName) || a(!l.value, d);
    }
    const c = C(() => ({
      onClick: u,
      class: "v-list-group__header",
      id: o.value
    })), f = C(() => l.value ? e.collapseIcon : e.expandIcon), v = C(() => ({
      VListItem: {
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
        title: e.title,
        value: e.value
      }
    }));
    return Z(() => g(e.tag, {
      class: Y(["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": l.value
      }, e.class]),
      style: ie(e.style)
    }, {
      default: () => [n.activator && g(Pe, {
        defaults: v.value
      }, {
        default: () => [g(tu, null, {
          default: () => [n.activator({
            props: c.value,
            isOpen: l.value
          })]
        })]
      }), g(st, {
        transition: {
          component: xi
        },
        disabled: !s.value
      }, {
        default: () => {
          var d;
          return [Ie(w("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(d = n.default) == null ? void 0 : d.call(n)]), [[wt, l.value]])];
        }
      })]
    })), {
      isOpen: l
    };
  }
}), lu = N({
  opacity: [Number, String],
  ...le(),
  ...he()
}, "VListItemSubtitle"), au = q()({
  name: "VListItemSubtitle",
  props: lu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => g(e.tag, {
      class: Y(["v-list-item-subtitle", e.class]),
      style: ie([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), iu = Cr("v-list-item-title"), ou = N({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ue,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: Be(),
  onClickOnce: Be(),
  ...kt(),
  ...le(),
  ...ft(),
  ...Xe(),
  ...Vt(),
  ...Me(),
  ...Rl(),
  ...he(),
  ...ke(),
  ...mt({
    variant: "text"
  })
}, "VListItem"), Pn = q()({
  name: "VListItem",
  directives: {
    vRipple: at
  },
  props: ou(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: l,
      emit: a
    } = t;
    const i = Ll(e, n), o = C(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: u,
      isOpen: c,
      isSelected: f,
      isIndeterminate: v,
      isGroupActivator: d,
      root: h,
      parent: m,
      openOnSelect: y,
      id: b
    } = fo(o, () => e.disabled, !1), S = io(), I = C(() => {
      var z;
      return e.active !== !1 && (e.active || ((z = i.isActive) == null ? void 0 : z.value) || (h.activatable.value ? s.value : f.value));
    }), x = V(() => e.link !== !1 && i.isLink.value), E = C(() => !!S && (h.selectable.value || h.activatable.value || e.value != null)), F = C(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || E.value)), A = V(() => e.rounded || e.nav), P = V(() => e.color ?? e.activeColor), j = V(() => ({
      color: I.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    Q(() => {
      var z;
      return (z = i.isActive) == null ? void 0 : z.value;
    }, (z) => {
      z && G();
    }), On(() => {
      var z;
      (z = i.isActive) != null && z.value && G();
    });
    function G() {
      m.value != null && h.open(m.value, !0), y(!0);
    }
    const {
      themeClasses: R
    } = Ae(e), {
      borderClasses: T
    } = xt(e), {
      colorClasses: O,
      colorStyles: M,
      variantClasses: B
    } = on(j), {
      densityClasses: L
    } = vt(e), {
      dimensionStyles: D
    } = Qe(e), {
      elevationClasses: K
    } = Pt(e), {
      roundedClasses: ne
    } = Ne(A), p = V(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), k = V(() => e.ripple !== void 0 && e.ripple && (S != null && S.filterable) ? {
      keys: ["Enter"]
    } : e.ripple), _ = C(() => ({
      isActive: I.value,
      select: u,
      isOpen: c.value,
      isSelected: f.value,
      isIndeterminate: v.value
    }));
    function H(z) {
      var oe, U;
      a("click", z), !["INPUT", "TEXTAREA"].includes((oe = z.target) == null ? void 0 : oe.tagName) && F.value && ((U = i.navigate) == null || U.call(i, z), !d && (h.activatable.value ? r(!s.value, z) : (h.selectable.value || e.value != null) && u(!f.value, z)));
    }
    function ae(z) {
      const oe = z.target;
      ["INPUT", "TEXTAREA"].includes(oe.tagName) || (z.key === "Enter" || z.key === " " && !(S != null && S.filterable)) && (z.preventDefault(), z.stopPropagation(), z.target.dispatchEvent(new MouseEvent("click", z)));
    }
    return Z(() => {
      const z = x.value ? "a" : e.tag, oe = l.title || e.title != null, U = l.subtitle || e.subtitle != null, re = !!(e.appendAvatar || e.appendIcon), se = !!(re || l.append), me = !!(e.prependAvatar || e.prependIcon), fe = !!(me || l.prepend);
      return S == null || S.updateHasPrepend(fe), e.activeColor && dr("active-color", ["color", "base-color"]), Ie(g(z, J({
        class: ["v-list-item", {
          "v-list-item--active": I.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": F.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !fe && (S == null ? void 0 : S.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && I.value
        }, R.value, T.value, O.value, L.value, K.value, p.value, ne.value, B.value, e.class],
        style: [M.value, D.value, e.style],
        tabindex: F.value ? S ? -2 : 0 : void 0,
        "aria-selected": E.value ? h.activatable.value ? s.value : h.selectable.value ? f.value : I.value : void 0,
        onClick: H,
        onKeydown: F.value && !x.value && ae
      }, i.linkProps), {
        default: () => {
          var ge;
          return [an(F.value || I.value, "v-list-item"), fe && w("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [l.prepend ? g(Pe, {
            key: "prepend-defaults",
            disabled: !me,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var Ve;
              return [(Ve = l.prepend) == null ? void 0 : Ve.call(l, _.value)];
            }
          }) : w(de, null, [e.prependAvatar && g(Qt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && g(_e, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), w("div", {
            class: "v-list-item__spacer"
          }, null)]), w("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [oe && g(iu, {
            key: "title"
          }, {
            default: () => {
              var Ve;
              return [((Ve = l.title) == null ? void 0 : Ve.call(l, {
                title: e.title
              })) ?? tt(e.title)];
            }
          }), U && g(au, {
            key: "subtitle"
          }, {
            default: () => {
              var Ve;
              return [((Ve = l.subtitle) == null ? void 0 : Ve.call(l, {
                subtitle: e.subtitle
              })) ?? tt(e.subtitle)];
            }
          }), (ge = l.default) == null ? void 0 : ge.call(l, _.value)]), se && w("div", {
            key: "append",
            class: "v-list-item__append"
          }, [l.append ? g(Pe, {
            key: "append-defaults",
            disabled: !re,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var Ve;
              return [(Ve = l.append) == null ? void 0 : Ve.call(l, _.value)];
            }
          }) : w(de, null, [e.appendIcon && g(_e, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && g(Qt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), w("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[at, F.value && k.value]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: d,
      isSelected: f,
      list: S,
      select: u,
      root: h,
      id: b,
      link: i
    };
  }
}), ru = N({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...le(),
  ...he()
}, "VListSubheader"), vo = q()({
  name: "VListSubheader",
  props: ru(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: a
    } = lt(() => e.color);
    return Z(() => {
      const i = !!(n.default || e.title);
      return g(e.tag, {
        class: Y(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, l.value, e.class]),
        style: ie([{
          textColorStyles: a
        }, e.style])
      }, {
        default: () => {
          var o;
          return [i && w("div", {
            class: "v-list-subheader__text"
          }, [((o = n.default) == null ? void 0 : o.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), su = N({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), mo = q()({
  name: "VListChildren",
  props: su(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ao(), () => {
      var l, a;
      return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
        var v, d;
        let {
          children: o,
          props: r,
          type: s,
          raw: u
        } = i;
        if (s === "divider")
          return ((v = n.divider) == null ? void 0 : v.call(n, {
            props: r
          })) ?? g(Wt, r, null);
        if (s === "subheader")
          return ((d = n.subheader) == null ? void 0 : d.call(n, {
            props: r
          })) ?? g(vo, r, null);
        const c = {
          subtitle: n.subtitle ? (h) => {
            var m;
            return (m = n.subtitle) == null ? void 0 : m.call(n, {
              ...h,
              item: u
            });
          } : void 0,
          prepend: n.prepend ? (h) => {
            var m;
            return (m = n.prepend) == null ? void 0 : m.call(n, {
              ...h,
              item: u
            });
          } : void 0,
          append: n.append ? (h) => {
            var m;
            return (m = n.append) == null ? void 0 : m.call(n, {
              ...h,
              item: u
            });
          } : void 0,
          title: n.title ? (h) => {
            var m;
            return (m = n.title) == null ? void 0 : m.call(n, {
              ...h,
              item: u
            });
          } : void 0
        }, f = La.filterProps(r);
        return o ? g(La, J(f, {
          value: e.returnObject ? u : r == null ? void 0 : r.value,
          rawId: r == null ? void 0 : r.value
        }), {
          activator: (h) => {
            let {
              props: m
            } = h;
            const y = J(r, m, {
              value: e.returnObject ? u : r.value
            });
            return n.header ? n.header({
              props: y
            }) : g(Pn, y, c);
          },
          default: () => g(mo, {
            items: o,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: r
        }) : g(Pn, J(r, {
          value: e.returnObject ? u : r.value
        }), c);
      }));
    };
  }
}), go = N({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  itemType: {
    type: [Boolean, String, Array, Function],
    default: "type"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items"), uu = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Bt(e, t) {
  const n = De(t, e.itemTitle, t), l = De(t, e.itemValue, n), a = De(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? dt(t, ["children"]) : t : void 0 : De(t, e.itemProps);
  let o = De(t, e.itemType, "item");
  uu.has(o) || (o = "item");
  const r = {
    title: n,
    value: l,
    ...i
  };
  return {
    type: o,
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: o === "item" && Array.isArray(a) ? yo(e, a) : void 0,
    raw: t
  };
}
Bt.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function yo(e, t) {
  const n = nn(e, Bt.neededProps), l = [];
  for (const a of t)
    l.push(Bt(n, a));
  return l;
}
function cu(e) {
  const t = C(() => yo(e, e.items)), n = C(() => t.value.some((r) => r.value === null)), l = X(/* @__PURE__ */ new Map()), a = X([]);
  Ue(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      if (ll(f.value) || f.value === null) {
        let v = s.get(f.value);
        v || (v = [], s.set(f.value, v)), v.push(f);
      } else
        u.push(f);
    }
    l.value = s, a.value = u;
  });
  function i(r) {
    const s = l.value, u = t.value, c = a.value, f = n.value, v = e.returnObject, d = !!e.valueComparator, h = e.valueComparator || Fe, m = nn(e, Bt.neededProps), y = [];
    e: for (const b of r) {
      if (!f && b === null) continue;
      if (v && typeof b == "string") {
        y.push(Bt(m, b));
        continue;
      }
      const S = s.get(b);
      if (d || !S) {
        for (const I of d ? u : c)
          if (h(b, I.value)) {
            y.push(I);
            continue e;
          }
        y.push(Bt(m, b));
        continue;
      }
      y.push(...S);
    }
    return y;
  }
  function o(r) {
    return e.returnObject ? r.map((s) => {
      let {
        raw: u
      } = s;
      return u;
    }) : r.map((s) => {
      let {
        value: u
      } = s;
      return u;
    });
  }
  return {
    items: t,
    transformIn: i,
    transformOut: o
  };
}
const du = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function fu(e, t) {
  const n = ll(t) ? t : De(t, e.itemTitle), l = ll(t) ? t : De(t, e.itemValue, void 0), a = De(t, e.itemChildren), i = e.itemProps === !0 ? dt(t, ["children"]) : De(t, e.itemProps);
  let o = De(t, e.itemType, "item");
  du.has(o) || (o = "item");
  const r = {
    title: n,
    value: l,
    ...i
  };
  return {
    type: o,
    title: r.title,
    value: r.value,
    props: r,
    children: o === "item" && a ? ho(e, a) : void 0,
    raw: t
  };
}
function ho(e, t) {
  const n = [];
  for (const l of t)
    n.push(fu(e, l));
  return n;
}
function vu(e) {
  return {
    items: C(() => ho(e, e.items))
  };
}
const mu = N({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: ue,
  collapseIcon: ue,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Be(),
  "onClick:select": Be(),
  "onUpdate:opened": Be(),
  ...Qs({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...kt(),
  ...le(),
  ...ft(),
  ...Xe(),
  ...Vt(),
  ...go(),
  ...Me(),
  ...he(),
  ...ke(),
  ...mt({
    variant: "text"
  })
}, "VList"), gu = q()({
  name: "VList",
  props: mu(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: l
    } = vu(e), {
      themeClasses: a
    } = Ae(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = We(() => e.bgColor), {
      borderClasses: r
    } = xt(e), {
      densityClasses: s
    } = vt(e), {
      dimensionStyles: u
    } = Qe(e), {
      elevationClasses: c
    } = Pt(e), {
      roundedClasses: f
    } = Ne(e), {
      children: v,
      open: d,
      parents: h,
      select: m,
      getPath: y
    } = Js(e), b = V(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = V(() => e.activeColor), I = V(() => e.baseColor), x = V(() => e.color);
    ao({
      filterable: e.filterable
    }), Ft({
      VListGroup: {
        activeColor: S,
        baseColor: I,
        color: x,
        expandIcon: V(() => e.expandIcon),
        collapseIcon: V(() => e.collapseIcon)
      },
      VListItem: {
        activeClass: V(() => e.activeClass),
        activeColor: S,
        baseColor: I,
        color: x,
        density: V(() => e.density),
        disabled: V(() => e.disabled),
        lines: V(() => e.lines),
        nav: V(() => e.nav),
        slim: V(() => e.slim),
        variant: V(() => e.variant)
      }
    });
    const E = X(!1), F = $();
    function A(O) {
      E.value = !0;
    }
    function P(O) {
      E.value = !1;
    }
    function j(O) {
      var M;
      !E.value && !(O.relatedTarget && ((M = F.value) != null && M.contains(O.relatedTarget))) && T();
    }
    function G(O) {
      const M = O.target;
      if (!(!F.value || M.tagName === "INPUT" && ["Home", "End"].includes(O.key) || M.tagName === "TEXTAREA")) {
        if (O.key === "ArrowDown")
          T("next");
        else if (O.key === "ArrowUp")
          T("prev");
        else if (O.key === "Home")
          T("first");
        else if (O.key === "End")
          T("last");
        else
          return;
        O.preventDefault();
      }
    }
    function R(O) {
      E.value = !0;
    }
    function T(O) {
      if (F.value)
        return Ht(F.value, O);
    }
    return Z(() => g(e.tag, {
      ref: F,
      class: Y(["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, a.value, i.value, r.value, s.value, c.value, b.value, f.value, e.class]),
      style: ie([o.value, u.value, e.style]),
      tabindex: e.disabled ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: A,
      onFocusout: P,
      onFocus: j,
      onKeydown: G,
      onMousedown: R
    }, {
      default: () => [g(mo, {
        items: l.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: d,
      select: m,
      focus: T,
      children: v,
      parents: h,
      getPath: y
    };
  }
});
function Xn(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function yu(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Ra(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: l
    } = e, a = l === "left" ? 0 : l === "center" ? t.width / 2 : l === "right" ? t.width : l, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Xn({
      x: a,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: l
    } = e, a = n === "left" ? 0 : n === "right" ? t.width : n, i = l === "top" ? 0 : l === "center" ? t.height / 2 : l === "bottom" ? t.height : l;
    return Xn({
      x: a,
      y: i
    }, t);
  }
  return Xn({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const bo = {
  static: Su,
  // specific viewport position, usually centered
  connected: pu
  // connected to a certain element
}, hu = N({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in bo
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function bu(e, t) {
  const n = $({}), l = $();
  pe && ut(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var s, u;
    Q(() => e.locationStrategy, r), Ee(() => {
      window.removeEventListener("resize", a), visualViewport == null || visualViewport.removeEventListener("resize", i), visualViewport == null || visualViewport.removeEventListener("scroll", o), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", i, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (s = e.locationStrategy(t, e, n)) == null ? void 0 : s.updateLocation : l.value = (u = bo[e.locationStrategy](t, e, n)) == null ? void 0 : u.updateLocation;
  });
  function a(r) {
    var s;
    (s = l.value) == null || s.call(l, r);
  }
  function i(r) {
    var s;
    (s = l.value) == null || s.call(l, r);
  }
  function o(r) {
    var s;
    (s = l.value) == null || s.call(l, r);
  }
  return {
    contentStyles: n,
    updateLocation: l
  };
}
function Su() {
}
function Cu(e, t) {
  const n = xl(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function pu(e, t, n) {
  (Array.isArray(e.target.value) || Vr(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = wl(() => {
    const b = al(t.location, e.isRtl.value), S = t.origin === "overlap" ? b : t.origin === "auto" ? jn(b) : al(t.origin, e.isRtl.value);
    return b.side === S.side && b.align === Wn(S).align ? {
      preferredAnchor: aa(b),
      preferredOrigin: aa(S)
    } : {
      preferredAnchor: b,
      preferredOrigin: S
    };
  }), [o, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((b) => C(() => {
    const S = parseFloat(t[b]);
    return isNaN(S) ? 1 / 0 : S;
  })), c = C(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const b = t.offset.split(" ").map(parseFloat);
      return b.length < 2 && b.push(0), b;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = !1, v = -1;
  const d = new Yo(4), h = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((S) => {
      S !== v && d.clear(), requestAnimationFrame((I) => {
        v = I;
      });
    }), d.isFull) {
      const S = d.values();
      if (Fe(S.at(-1), S.at(-3)) && !Fe(S.at(-1), S.at(-2)))
        return;
    }
    const b = y();
    b && d.push(b.flipped);
  });
  let m = new Ge({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  Q(e.target, (b, S) => {
    S && !Array.isArray(S) && h.unobserve(S), Array.isArray(b) ? Fe(b, S) || y() : b && h.observe(b);
  }, {
    immediate: !0
  }), Q(e.contentEl, (b, S) => {
    S && h.unobserve(S), b && h.observe(b);
  }, {
    immediate: !0
  }), Ee(() => {
    h.disconnect();
  });
  function y() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = ei(e.target.value));
    const b = Cu(e.contentEl.value, e.isRtl.value), S = kn(e.contentEl.value), I = 12;
    S.length || (S.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const x = S.reduce((O, M) => {
      const B = tr(M);
      return O ? new Ge({
        x: Math.max(O.left, B.left),
        y: Math.max(O.top, B.top),
        width: Math.min(O.right, B.right) - Math.max(O.left, B.left),
        height: Math.min(O.bottom, B.bottom) - Math.max(O.top, B.top)
      }) : B;
    }, void 0);
    x.x += I, x.y += I, x.width -= I * 2, x.height -= I * 2;
    let E = {
      anchor: a.value,
      origin: i.value
    };
    function F(O) {
      const M = new Ge(b), B = Ra(O.anchor, m), L = Ra(O.origin, M);
      let {
        x: D,
        y: K
      } = yu(B, L);
      switch (O.anchor.side) {
        case "top":
          K -= c.value[0];
          break;
        case "bottom":
          K += c.value[0];
          break;
        case "left":
          D -= c.value[0];
          break;
        case "right":
          D += c.value[0];
          break;
      }
      switch (O.anchor.align) {
        case "top":
          K -= c.value[1];
          break;
        case "bottom":
          K += c.value[1];
          break;
        case "left":
          D -= c.value[1];
          break;
        case "right":
          D += c.value[1];
          break;
      }
      return M.x += D, M.y += K, M.width = Math.min(M.width, s.value), M.height = Math.min(M.height, u.value), {
        overflows: oa(M, x),
        x: D,
        y: K
      };
    }
    let A = 0, P = 0;
    const j = {
      x: 0,
      y: 0
    }, G = {
      x: !1,
      y: !1
    };
    let R = -1;
    for (; ; ) {
      if (R++ > 10) {
        ti("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: M,
        overflows: B
      } = F(E);
      A += O, P += M, b.x += O, b.y += M;
      {
        const L = ia(E.anchor), D = B.x.before || B.x.after, K = B.y.before || B.y.after;
        let ne = !1;
        if (["x", "y"].forEach((p) => {
          if (p === "x" && D && !G.x || p === "y" && K && !G.y) {
            const k = {
              anchor: {
                ...E.anchor
              },
              origin: {
                ...E.origin
              }
            }, _ = p === "x" ? L === "y" ? Wn : jn : L === "y" ? jn : Wn;
            k.anchor = _(k.anchor), k.origin = _(k.origin);
            const {
              overflows: H
            } = F(k);
            (H[p].before <= B[p].before && H[p].after <= B[p].after || H[p].before + H[p].after < (B[p].before + B[p].after) / 2) && (E = k, ne = G[p] = !0);
          }
        }), ne) continue;
      }
      B.x.before && (A += B.x.before, b.x += B.x.before), B.x.after && (A -= B.x.after, b.x -= B.x.after), B.y.before && (P += B.y.before, b.y += B.y.before), B.y.after && (P -= B.y.after, b.y -= B.y.after);
      {
        const L = oa(b, x);
        j.x = x.width - L.x.before - L.x.after, j.y = x.height - L.y.before - L.y.after, A += L.x.before, b.x += L.x.before, P += L.y.before, b.y += L.y.before;
      }
      break;
    }
    const T = ia(E.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${E.anchor.side} ${E.anchor.align}`,
      transformOrigin: `${E.origin.side} ${E.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: ee(Qn(P)),
      left: e.isRtl.value ? void 0 : ee(Qn(A)),
      right: e.isRtl.value ? ee(Qn(-A)) : void 0,
      minWidth: ee(T === "y" ? Math.min(o.value, m.width) : o.value),
      maxWidth: ee(Fa(je(j.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: ee(Fa(je(j.y, r.value === 1 / 0 ? 0 : r.value, u.value)))
    }), {
      available: j,
      contentBox: b,
      flipped: G
    };
  }
  return Q(() => [a.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Ce(() => {
    const b = y();
    if (!b) return;
    const {
      available: S,
      contentBox: I
    } = b;
    I.height > S.y && requestAnimationFrame(() => {
      y(), requestAnimationFrame(() => {
        y();
      });
    });
  }), {
    updateLocation: y
  };
}
function Qn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Fa(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let dl = !0;
const _n = [];
function wu(e) {
  !dl || _n.length ? (_n.push(e), fl()) : (dl = !1, e(), fl());
}
let Ma = -1;
function fl() {
  cancelAnimationFrame(Ma), Ma = requestAnimationFrame(() => {
    const e = _n.shift();
    e && e(), _n.length ? fl() : dl = !0;
  });
}
const yn = {
  none: null,
  close: Vu,
  block: Pu,
  reposition: _u
}, ku = N({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in yn
  }
}, "VOverlay-scroll-strategies");
function xu(e, t) {
  if (!pe) return;
  let n;
  Ue(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = hl(), await new Promise((l) => setTimeout(l)), n.active && n.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (l = yn[e.scrollStrategy]) == null || l.call(yn, t, e, n);
    }));
  }), Ee(() => {
    n == null || n.stop();
  });
}
function Vu(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  So(Hl(e.target.value, e.contentEl.value), t);
}
function Pu(e, t) {
  var r;
  const n = (r = e.root.value) == null ? void 0 : r.offsetParent, l = Hl(e.target.value, e.contentEl.value), a = [.../* @__PURE__ */ new Set([...kn(l, t.contained ? n : void 0), ...kn(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, o = ((s) => Pl(s) && s)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((s, u) => {
    s.style.setProperty("--v-body-scroll-x", ee(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", ee(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", ee(i)), s.classList.add("v-overlay-scroll-blocked");
  }), Ee(() => {
    a.forEach((s, u) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), v = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -f, s.style.scrollBehavior = v;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function _u(e, t, n) {
  let l = !1, a = -1, i = -1;
  function o(r) {
    wu(() => {
      var c, f;
      const s = performance.now();
      (f = (c = e.updateLocation).value) == null || f.call(c, r), l = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      So(Hl(e.target.value, e.contentEl.value), (r) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), Ee(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
}
function Hl(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t != null && t.contains(n))) : e ?? t;
}
function So(e, t) {
  const n = [document, ...kn(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, {
      passive: !0
    });
  }), Ee(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const vl = Symbol.for("vuetify:v-menu"), Iu = N({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Eu(e, t) {
  let n = () => {
  };
  function l(o) {
    n == null || n();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      n = Xo(r, () => {
        t == null || t(o), s(o);
      });
    });
  }
  function a() {
    return l(!0);
  }
  function i() {
    return l(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: a,
    runCloseDelay: i
  };
}
const Au = N({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Iu()
}, "VOverlay-activator");
function Bu(e, t) {
  let {
    isActive: n,
    isTop: l,
    contentEl: a
  } = t;
  const i = we("useActivator"), o = $();
  let r = !1, s = !1, u = !0;
  const c = C(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = C(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: v,
    runCloseDelay: d
  } = Eu(e, (P) => {
    P === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !l.value) && (n.value !== P && (u = !0), n.value = P);
  }), h = $(), m = {
    onClick: (P) => {
      P.stopPropagation(), o.value = P.currentTarget || P.target, n.value || (h.value = [P.clientX, P.clientY]), n.value = !n.value;
    },
    onMouseenter: (P) => {
      var j;
      (j = P.sourceCapabilities) != null && j.firesTouchEvents || (r = !0, o.value = P.currentTarget || P.target, v());
    },
    onMouseleave: (P) => {
      r = !1, d();
    },
    onFocus: (P) => {
      Cn(P.target, ":focus-visible") !== !1 && (s = !0, P.stopPropagation(), o.value = P.currentTarget || P.target, v());
    },
    onBlur: (P) => {
      s = !1, P.stopPropagation(), d();
    }
  }, y = C(() => {
    const P = {};
    return f.value && (P.onClick = m.onClick), e.openOnHover && (P.onMouseenter = m.onMouseenter, P.onMouseleave = m.onMouseleave), c.value && (P.onFocus = m.onFocus, P.onBlur = m.onBlur), P;
  }), b = C(() => {
    const P = {};
    if (e.openOnHover && (P.onMouseenter = () => {
      r = !0, v();
    }, P.onMouseleave = () => {
      r = !1, d();
    }), c.value && (P.onFocusin = () => {
      s = !0, v();
    }, P.onFocusout = () => {
      s = !1, d();
    }), e.closeOnContentClick) {
      const j = ve(vl, null);
      P.onClick = () => {
        n.value = !1, j == null || j.closeParents();
      };
    }
    return P;
  }), S = C(() => {
    const P = {};
    return e.openOnHover && (P.onMouseenter = () => {
      u && (r = !0, u = !1, v());
    }, P.onMouseleave = () => {
      r = !1, d();
    }), P;
  });
  Q(l, (P) => {
    var j;
    P && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((j = a.value) != null && j.contains(document.activeElement)) && (n.value = !1);
  }), Q(n, (P) => {
    P || setTimeout(() => {
      h.value = void 0;
    });
  }, {
    flush: "post"
  });
  const I = nl();
  Ue(() => {
    I.value && Ce(() => {
      o.value = I.el;
    });
  });
  const x = nl(), E = C(() => e.target === "cursor" && h.value ? h.value : x.value ? x.el : Co(e.target, i) || o.value), F = C(() => Array.isArray(E.value) ? void 0 : E.value);
  let A;
  return Q(() => !!e.activator, (P) => {
    P && pe ? (A = hl(), A.run(() => {
      Tu(e, i, {
        activatorEl: o,
        activatorEvents: y
      });
    })) : A && A.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ee(() => {
    A == null || A.stop();
  }), {
    activatorEl: o,
    activatorRef: I,
    target: E,
    targetEl: F,
    targetRef: x,
    activatorEvents: y,
    contentEvents: b,
    scrimEvents: S
  };
}
function Tu(e, t, n) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = n;
  Q(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && o(c);
    }
    s && Ce(() => i());
  }, {
    immediate: !0
  }), Q(() => e.activatorProps, () => {
    i();
  }), Ee(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && nr(s, J(a.value, u));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && lr(s, J(a.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Co(s, t);
    return l.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, l.value;
  }
}
function Co(e, t) {
  var l, a;
  if (!e) return;
  let n;
  if (e === "parent") {
    let i = (a = (l = t == null ? void 0 : t.proxy) == null ? void 0 : l.$el) == null ? void 0 : a.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function Ou() {
  if (!pe) return X(!1);
  const {
    ssr: e
  } = Fl();
  if (e) {
    const t = X(!1);
    return pt(() => {
      t.value = !0;
    }), t;
  } else
    return X(!0);
}
function jl() {
  const t = we("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Na = Symbol.for("vuetify:stack"), Nt = Tt([]);
function Lu(e, t, n) {
  const l = we("useStack"), a = !n, i = ve(Na, void 0), o = Tt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Le(Na, o);
  const r = X(Number(Ke(t)));
  ut(e, () => {
    var f;
    const c = (f = Nt.at(-1)) == null ? void 0 : f[1];
    r.value = c ? c + 10 : Number(Ke(t)), a && Nt.push([l.uid, r.value]), i == null || i.activeChildren.add(l.uid), Ee(() => {
      if (a) {
        const v = xe(Nt).findIndex((d) => d[0] === l.uid);
        Nt.splice(v, 1);
      }
      i == null || i.activeChildren.delete(l.uid);
    });
  });
  const s = X(!0);
  a && Ue(() => {
    var f;
    const c = ((f = Nt.at(-1)) == null ? void 0 : f[0]) === l.uid;
    setTimeout(() => s.value = c);
  });
  const u = V(() => !o.activeChildren.size);
  return {
    globalTop: bl(s),
    localTop: u,
    stackStyles: V(() => ({
      zIndex: r.value
    }))
  };
}
function Ru(e) {
  return {
    teleportTarget: C(() => {
      const n = e();
      if (n === !0 || !pe) return;
      const l = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (l == null) {
        Tn(`Unable to locate target ${n}`);
        return;
      }
      let a = [...l.children].find((i) => i.matches(".v-overlay-container"));
      return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
    })
  };
}
function Fu() {
  return !0;
}
function po(e, t, n) {
  if (!e || wo(e, n) === !1) return !1;
  const l = li(t);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target) return !1;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(t), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function wo(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Fu)(e);
}
function Mu(e, t, n) {
  const l = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && po(e, t, n) && setTimeout(() => {
    wo(e, n) && l && l(e);
  }, 0);
}
function $a(e, t) {
  const n = li(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Da = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (a) => Mu(a, e, t), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = po(a, e, t);
    };
    $a(e, (a) => {
      a.addEventListener("click", n, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: l
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && ($a(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid])) return;
      const {
        onClick: l,
        onMousedown: a
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", l, !0), n.removeEventListener("mousedown", a, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function Nu(e) {
  const {
    modelValue: t,
    color: n,
    ...l
  } = e;
  return g(Ct, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && w("div", J({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const Wl = N({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Au(),
  ...le(),
  ...Xe(),
  ...Pi(),
  ...hu(),
  ...ku(),
  ...ke(),
  ...un()
}, "VOverlay"), In = q()({
  name: "VOverlay",
  directives: {
    vClickOutside: Da
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Wl()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: l,
      emit: a
    } = t;
    const i = we("VOverlay"), o = $(), r = $(), s = $(), u = ye(e, "modelValue"), c = C({
      get: () => u.value,
      set: (U) => {
        U && e.disabled || (u.value = U);
      }
    }), {
      themeClasses: f
    } = Ae(e), {
      rtlClasses: v,
      isRtl: d
    } = it(), {
      hasContent: h,
      onAfterLeave: m
    } = _i(e, c), y = We(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: b,
      localTop: S,
      stackStyles: I
    } = Lu(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: x,
      activatorRef: E,
      target: F,
      targetEl: A,
      targetRef: P,
      activatorEvents: j,
      contentEvents: G,
      scrimEvents: R
    } = Bu(e, {
      isActive: c,
      isTop: S,
      contentEl: s
    }), {
      teleportTarget: T
    } = Ru(() => {
      var se, me, fe;
      const U = e.attach || e.contained;
      if (U) return U;
      const re = ((se = x == null ? void 0 : x.value) == null ? void 0 : se.getRootNode()) || ((fe = (me = i.proxy) == null ? void 0 : me.$el) == null ? void 0 : fe.getRootNode());
      return re instanceof ShadowRoot ? re : !1;
    }), {
      dimensionStyles: O
    } = Qe(e), M = Ou(), {
      scopeId: B
    } = jl();
    Q(() => e.disabled, (U) => {
      U && (c.value = !1);
    });
    const {
      contentStyles: L,
      updateLocation: D
    } = bu(e, {
      isRtl: d,
      contentEl: s,
      target: F,
      isActive: c
    });
    xu(e, {
      root: o,
      contentEl: s,
      targetEl: A,
      target: F,
      isActive: c,
      updateLocation: D
    });
    function K(U) {
      a("click:outside", U), e.persistent ? ae() : c.value = !1;
    }
    function ne(U) {
      return c.value && b.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || U.target === r.value || U instanceof MouseEvent && U.shadowTarget === r.value);
    }
    pe && Q(c, (U) => {
      U ? window.addEventListener("keydown", p) : window.removeEventListener("keydown", p);
    }, {
      immediate: !0
    }), qe(() => {
      pe && window.removeEventListener("keydown", p);
    });
    function p(U) {
      var re, se, me;
      U.key === "Escape" && b.value && ((re = s.value) != null && re.contains(document.activeElement) || a("keydown", U), e.persistent ? ae() : (c.value = !1, (se = s.value) != null && se.contains(document.activeElement) && ((me = x.value) == null || me.focus())));
    }
    function k(U) {
      U.key === "Escape" && !b.value || a("keydown", U);
    }
    const _ = Wr();
    ut(() => e.closeOnBack, () => {
      Ur(_, (U) => {
        b.value && c.value ? (U(!1), e.persistent ? ae() : c.value = !1) : U();
      });
    });
    const H = $();
    Q(() => c.value && (e.absolute || e.contained) && T.value == null, (U) => {
      if (U) {
        const re = ai(o.value);
        re && re !== document.scrollingElement && (H.value = re.scrollTop);
      }
    });
    function ae() {
      e.noClickAnimation || s.value && At(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: wn
      });
    }
    function z() {
      a("afterEnter");
    }
    function oe() {
      m(), a("afterLeave");
    }
    return Z(() => {
      var U;
      return w(de, null, [(U = n.activator) == null ? void 0 : U.call(n, {
        isActive: c.value,
        targetRef: P,
        props: J({
          ref: E
        }, j.value, e.activatorProps)
      }), M.value && h.value && g(No, {
        disabled: !T.value,
        to: T.value
      }, {
        default: () => [w("div", J({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": c.value,
            "v-overlay--contained": e.contained
          }, f.value, v.value, e.class],
          style: [I.value, {
            "--v-overlay-opacity": e.opacity,
            top: ee(H.value)
          }, e.style],
          ref: o,
          onKeydown: k
        }, B, l), [g(Nu, J({
          color: y,
          modelValue: c.value && !!e.scrim,
          ref: r
        }, R.value), null), g(st, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: F.value,
          onAfterEnter: z,
          onAfterLeave: oe
        }, {
          default: () => {
            var re;
            return [Ie(w("div", J({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [O.value, L.value]
            }, G.value, e.contentProps), [(re = n.default) == null ? void 0 : re.call(n, {
              isActive: c
            })]), [[wt, c.value], [Da, {
              handler: K,
              closeConditional: ne,
              include: () => [x.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: x,
      scrimEl: r,
      target: F,
      animateClick: ae,
      contentEl: s,
      globalTop: b,
      localTop: S,
      updateLocation: D
    };
  }
}), $u = N({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  disableInitialFocus: Boolean,
  ...dt(Wl({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: wi
    }
  }), ["absolute"])
}, "VMenu"), Du = q()({
  name: "VMenu",
  props: $u(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = ye(e, "modelValue"), {
      scopeId: a
    } = jl(), {
      isRtl: i
    } = it(), o = ct(), r = V(() => e.id || `v-menu-${o}`), s = $(), u = ve(vl, null), c = X(/* @__PURE__ */ new Set());
    Le(vl, {
      register() {
        c.value.add(o);
      },
      unregister() {
        c.value.delete(o);
      },
      closeParents(y) {
        setTimeout(() => {
          var b;
          !c.value.size && !e.persistent && (y == null || (b = s.value) != null && b.contentEl && !Qo(y, s.value.contentEl)) && (l.value = !1, u == null || u.closeParents());
        }, 40);
      }
    }), qe(() => {
      u == null || u.unregister(), document.removeEventListener("focusin", f);
    }), $o(() => l.value = !1);
    async function f(y) {
      var I, x, E;
      const b = y.relatedTarget, S = y.target;
      await Ce(), l.value && b !== S && ((I = s.value) != null && I.contentEl) && // We're the topmost menu
      ((x = s.value) != null && x.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((E = Sn(s.value.contentEl)[0]) == null || E.focus());
    }
    Q(l, (y) => {
      y ? (u == null || u.register(), pe && !e.disableInitialFocus && document.addEventListener("focusin", f, {
        once: !0
      })) : (u == null || u.unregister(), pe && document.removeEventListener("focusin", f));
    }, {
      immediate: !0
    });
    function v(y) {
      u == null || u.closeParents(y);
    }
    function d(y) {
      var b, S, I, x, E;
      if (!e.disabled)
        if (y.key === "Tab" || y.key === "Enter" && !e.closeOnContentClick) {
          if (y.key === "Enter" && (y.target instanceof HTMLTextAreaElement || y.target instanceof HTMLInputElement && y.target.closest("form"))) return;
          y.key === "Enter" && y.preventDefault(), Qa(Sn((b = s.value) == null ? void 0 : b.contentEl, !1), y.shiftKey ? "prev" : "next", (A) => A.tabIndex >= 0) || (l.value = !1, (I = (S = s.value) == null ? void 0 : S.activatorEl) == null || I.focus());
        } else e.submenu && y.key === (i.value ? "ArrowRight" : "ArrowLeft") && (l.value = !1, (E = (x = s.value) == null ? void 0 : x.activatorEl) == null || E.focus());
    }
    function h(y) {
      var S;
      if (e.disabled) return;
      const b = (S = s.value) == null ? void 0 : S.contentEl;
      b && l.value ? y.key === "ArrowDown" ? (y.preventDefault(), y.stopImmediatePropagation(), Ht(b, "next")) : y.key === "ArrowUp" ? (y.preventDefault(), y.stopImmediatePropagation(), Ht(b, "prev")) : e.submenu && (y.key === (i.value ? "ArrowRight" : "ArrowLeft") ? l.value = !1 : y.key === (i.value ? "ArrowLeft" : "ArrowRight") && (y.preventDefault(), Ht(b, "first"))) : (e.submenu ? y.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(y.key)) && (l.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => h(y))));
    }
    const m = C(() => J({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-controls": r.value,
      onKeydown: h
    }, e.activatorProps));
    return Z(() => {
      const y = In.filterProps(e);
      return g(In, J({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, y, {
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        absolute: !0,
        activatorProps: m.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": v,
        onKeydown: d
      }, a), {
        activator: n.activator,
        default: function() {
          for (var b = arguments.length, S = new Array(b), I = 0; I < b; I++)
            S[I] = arguments[I];
          return g(Pe, {
            root: "VMenu"
          }, {
            default: () => {
              var x;
              return [(x = n.default) == null ? void 0 : x.call(n, ...S)];
            }
          });
        }
      });
    }), Mt({
      id: r,
      ΨopenChildren: c
    }, s);
  }
}), zu = N({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...le(),
  ...un({
    transition: {
      component: ki
    }
  })
}, "VCounter"), ko = q()({
  name: "VCounter",
  functional: !0,
  props: zu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = V(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return Z(() => g(st, {
      transition: e.transition
    }, {
      default: () => [Ie(w("div", {
        class: Y(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: ie(e.style)
      }, [n.default ? n.default({
        counter: l.value,
        max: e.max,
        value: e.value
      }) : l.value]), [[wt, e.active]])]
    })), {};
  }
}), Hu = N({
  floating: Boolean,
  ...le()
}, "VFieldLabel"), fn = q()({
  name: "VFieldLabel",
  props: Hu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => g(Ui, {
      class: Y(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: ie(e.style)
    }, n)), {};
  }
}), ju = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ul = N({
  appendInnerIcon: ue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  details: Boolean,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => ju.includes(e)
  },
  "onClick:clear": Be(),
  "onClick:appendInner": Be(),
  "onClick:prependInner": Be(),
  ...le(),
  ...di(),
  ...Me(),
  ...ke()
}, "VField"), En = q()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Qi(),
    ...Ul()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: l,
      slots: a
    } = t;
    const {
      themeClasses: i
    } = Ae(e), {
      loaderClasses: o
    } = fi(e), {
      focusClasses: r,
      isFocused: s,
      focus: u,
      blur: c
    } = Dn(e), {
      InputIcon: f
    } = Xi(e), {
      roundedClasses: v
    } = Ne(e), {
      rtlClasses: d
    } = it(), h = V(() => e.dirty || e.active), m = V(() => !!(e.label || a.label)), y = V(() => !e.singleLine && m.value), b = ct(), S = C(() => e.id || `input-${b}`), I = V(() => e.details ? `${S.value}-messages` : void 0), x = $(), E = $(), F = $(), A = C(() => ["plain", "underlined"].includes(e.variant)), P = C(() => e.error || e.disabled ? void 0 : h.value && s.value ? e.color : e.baseColor), j = C(() => {
      if (!(!e.iconColor || e.glow && !s.value))
        return e.iconColor === !0 ? P.value : e.iconColor;
    }), {
      backgroundColorClasses: G,
      backgroundColorStyles: R
    } = We(() => e.bgColor), {
      textColorClasses: T,
      textColorStyles: O
    } = lt(P);
    Q(h, (L) => {
      if (y.value) {
        const D = x.value.$el, K = E.value.$el;
        requestAnimationFrame(() => {
          const ne = xl(D), p = K.getBoundingClientRect(), k = p.x - ne.x, _ = p.y - ne.y - (ne.height / 2 - p.height / 2), H = p.width / 0.75, ae = Math.abs(H - ne.width) > 1 ? {
            maxWidth: ee(H)
          } : void 0, z = getComputedStyle(D), oe = getComputedStyle(K), U = parseFloat(z.transitionDuration) * 1e3 || 150, re = parseFloat(oe.getPropertyValue("--v-field-label-scale")), se = oe.getPropertyValue("color");
          D.style.visibility = "visible", K.style.visibility = "hidden", At(D, {
            transform: `translate(${k}px, ${_}px) scale(${re})`,
            color: se,
            ...ae
          }, {
            duration: U,
            easing: wn,
            direction: L ? "normal" : "reverse"
          }).finished.then(() => {
            D.style.removeProperty("visibility"), K.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const M = C(() => ({
      isActive: h,
      isFocused: s,
      controlRef: F,
      blur: c,
      focus: u
    }));
    function B(L) {
      L.target !== document.activeElement && L.preventDefault();
    }
    return Z(() => {
      var k, _, H;
      const L = e.variant === "outlined", D = !!(a["prepend-inner"] || e.prependInnerIcon), K = !!(e.clearable || a.clear) && !e.disabled, ne = !!(a["append-inner"] || e.appendInnerIcon || K), p = () => a.label ? a.label({
        ...M.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return w("div", J({
        class: ["v-field", {
          "v-field--active": h.value,
          "v-field--appended": ne,
          "v-field--center-affix": e.centerAffix ?? !A.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": D,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !p(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, G.value, r.value, o.value, v.value, d.value, e.class],
        style: [R.value, e.style],
        onClick: B
      }, n), [w("div", {
        class: "v-field__overlay"
      }, null), g(zr, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: a.loader
      }), D && w("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && g(f, {
        key: "prepend-icon",
        name: "prependInner",
        color: j.value
      }, null), (k = a["prepend-inner"]) == null ? void 0 : k.call(a, M.value)]), w("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && g(fn, {
        key: "floating-label",
        ref: E,
        class: Y([T.value]),
        floating: !0,
        for: S.value,
        "aria-hidden": !h.value,
        style: ie(O.value)
      }, {
        default: () => [p()]
      }), m.value && g(fn, {
        key: "label",
        ref: x,
        for: S.value
      }, {
        default: () => [p()]
      }), ((_ = a.default) == null ? void 0 : _.call(a, {
        ...M.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": I.value
        },
        focus: u,
        blur: c
      })) ?? w("div", {
        id: S.value,
        class: "v-field__input",
        "aria-describedby": I.value
      }, null)]), K && g(Vi, {
        key: "clear"
      }, {
        default: () => [Ie(w("div", {
          class: "v-field__clearable",
          onMousedown: (ae) => {
            ae.preventDefault(), ae.stopPropagation();
          }
        }, [g(Pe, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [a.clear ? a.clear({
            ...M.value,
            props: {
              onFocus: u,
              onBlur: c,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : g(f, {
            name: "clear",
            onFocus: u,
            onBlur: c,
            tabindex: -1
          }, null)]
        })]), [[wt, e.dirty]])]
      }), ne && w("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(H = a["append-inner"]) == null ? void 0 : H.call(a, M.value), e.appendInnerIcon && g(f, {
        key: "append-icon",
        name: "appendInner",
        color: j.value
      }, null)]), w("div", {
        class: Y(["v-field__outline", T.value]),
        style: ie(O.value)
      }, [L && w(de, null, [w("div", {
        class: "v-field__outline__start"
      }, null), y.value && w("div", {
        class: "v-field__outline__notch"
      }, [g(fn, {
        ref: E,
        floating: !0,
        for: S.value,
        "aria-hidden": !h.value
      }, {
        default: () => [p()]
      })]), w("div", {
        class: "v-field__outline__end"
      }, null)]), A.value && y.value && g(fn, {
        ref: E,
        floating: !0,
        for: S.value,
        "aria-hidden": !h.value
      }, {
        default: () => [p()]
      })])]);
    }), {
      controlRef: F,
      fieldIconColor: j
    };
  }
});
function xo(e) {
  function t(n, l) {
    var a, i;
    !e.autofocus || !n || (i = (a = l[0].target) == null ? void 0 : a.focus) == null || i.call(a);
  }
  return {
    onIntersect: t
  };
}
const Wu = ["color", "file", "time", "date", "datetime-local", "week", "month"], Vo = N({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...zn(),
  ...Ul()
}, "VTextField"), en = q()({
  name: "VTextField",
  directives: {
    vIntersect: Ot
  },
  inheritAttrs: !1,
  props: Vo(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: l,
      slots: a
    } = t;
    const i = ye(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Dn(e), {
      onIntersect: u
    } = xo(e), c = C(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), f = C(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = C(() => ["plain", "underlined"].includes(e.variant)), d = $(), h = $(), m = $(), y = C(() => Wu.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function b() {
      o.value || r(), Ce(() => {
        var F;
        m.value !== document.activeElement && ((F = m.value) == null || F.focus());
      });
    }
    function S(F) {
      l("mousedown:control", F), F.target !== m.value && (b(), F.preventDefault());
    }
    function I(F) {
      l("click:control", F);
    }
    function x(F, A) {
      F.stopPropagation(), b(), Ce(() => {
        i.value = null, A(), kl(e["onClick:clear"], F);
      });
    }
    function E(F) {
      var P;
      const A = F.target;
      if (i.value = A.value, (P = e.modelModifiers) != null && P.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const j = [A.selectionStart, A.selectionEnd];
        Ce(() => {
          A.selectionStart = j[0], A.selectionEnd = j[1];
        });
      }
    }
    return Z(() => {
      const F = !!(a.counter || e.counter !== !1 && e.counter != null), A = !!(F || a.details), [P, j] = Ln(n), {
        modelValue: G,
        ...R
      } = Lt.filterProps(e), T = En.filterProps(e);
      return g(Lt, J({
        ref: d,
        modelValue: i.value,
        "onUpdate:modelValue": (O) => i.value = O,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, P, R, {
        centerAffix: !v.value,
        focused: o.value
      }), {
        ...a,
        default: (O) => {
          let {
            id: M,
            isDisabled: B,
            isDirty: L,
            isReadonly: D,
            isValid: K,
            hasDetails: ne,
            reset: p
          } = O;
          return g(En, J({
            ref: h,
            onMousedown: S,
            onClick: I,
            "onClick:clear": (k) => x(k, p),
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, T, {
            id: M.value,
            active: y.value || L.value,
            dirty: L.value || e.dirty,
            disabled: B.value,
            focused: o.value,
            details: ne.value,
            error: K.value === !1
          }), {
            ...a,
            default: (k) => {
              let {
                props: {
                  class: _,
                  ...H
                }
              } = k;
              const ae = Ie(w("input", J({
                ref: m,
                value: i.value,
                onInput: E,
                autofocus: e.autofocus,
                readonly: D.value,
                disabled: B.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: r,
                onBlur: s
              }, H, j), null), [[Ot, {
                handler: u
              }, null, {
                once: !0
              }]]);
              return w(de, null, [e.prefix && w("span", {
                class: "v-text-field__prefix"
              }, [w("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), a.default ? w("div", {
                class: Y(_),
                "data-no-activator": ""
              }, [a.default(), ae]) : Do(ae, {
                class: _
              }), e.suffix && w("span", {
                class: "v-text-field__suffix"
              }, [w("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: A ? (O) => {
          var M;
          return w(de, null, [(M = a.details) == null ? void 0 : M.call(a, O), F && w(de, null, [w("span", null, null), g(ko, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: f.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), Mt({}, d, h, m);
  }
}), Uu = N({
  renderless: Boolean,
  ...le()
}, "VVirtualScrollItem"), Gu = q()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Uu(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: l,
      slots: a
    } = t;
    const {
      resizeRef: i,
      contentRect: o
    } = Kt(void 0, "border");
    Q(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && l("update:height", r);
    }), Z(() => {
      var r, s;
      return e.renderless ? w(de, null, [(r = a.default) == null ? void 0 : r.call(a, {
        itemRef: i
      })]) : w("div", J({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(s = a.default) == null ? void 0 : s.call(a)]);
    });
  }
}), Ku = -1, qu = 1, Jn = 100, Yu = N({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Xu(e, t) {
  const n = Fl(), l = X(0);
  Ue(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = X(0), i = X(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (l.value || 16)
  ) || 1), o = X(0), r = X(0), s = $(), u = $();
  let c = 0;
  const {
    resizeRef: f,
    contentRect: v
  } = Kt();
  Ue(() => {
    f.value = s.value;
  });
  const d = C(() => {
    var p;
    return s.value === document.documentElement ? n.height.value : ((p = v.value) == null ? void 0 : p.height) || parseInt(e.height) || 0;
  }), h = C(() => !!(s.value && u.value && d.value && l.value));
  let m = Array.from({
    length: t.value.length
  }), y = Array.from({
    length: t.value.length
  });
  const b = X(0);
  let S = -1;
  function I(p) {
    return m[p] || l.value;
  }
  const x = Ko(() => {
    const p = performance.now();
    y[0] = 0;
    const k = t.value.length;
    for (let _ = 1; _ <= k - 1; _++)
      y[_] = (y[_ - 1] || 0) + I(_ - 1);
    b.value = Math.max(b.value, performance.now() - p);
  }, b), E = Q(h, (p) => {
    p && (E(), c = u.value.offsetTop, x.immediate(), L(), ~S && Ce(() => {
      pe && window.requestAnimationFrame(() => {
        K(S), S = -1;
      });
    }));
  });
  Ee(() => {
    x.clear();
  });
  function F(p, k) {
    const _ = m[p], H = l.value;
    l.value = H ? Math.min(l.value, k) : k, (_ !== k || H !== l.value) && (m[p] = k, x());
  }
  function A(p) {
    p = je(p, 0, t.value.length - 1);
    const k = Math.floor(p), _ = p % 1, H = k + 1, ae = y[k] || 0, z = y[H] || ae;
    return ae + (z - ae) * _;
  }
  function P(p) {
    return Qu(y, p);
  }
  let j = 0, G = 0, R = 0;
  Q(d, (p, k) => {
    k && (L(), p < k && requestAnimationFrame(() => {
      G = 0, L();
    }));
  });
  let T = -1;
  function O() {
    if (!s.value || !u.value) return;
    const p = s.value.scrollTop, k = performance.now();
    k - R > 500 ? (G = Math.sign(p - j), c = u.value.offsetTop) : G = p - j, j = p, R = k, window.clearTimeout(T), T = window.setTimeout(M, 500), L();
  }
  function M() {
    !s.value || !u.value || (G = 0, R = 0, window.clearTimeout(T), L());
  }
  let B = -1;
  function L() {
    cancelAnimationFrame(B), B = requestAnimationFrame(D);
  }
  function D() {
    if (!s.value || !d.value || !l.value) return;
    const p = j - c, k = Math.sign(G), _ = Math.max(0, p - Jn), H = je(P(_), 0, t.value.length), ae = p + d.value + Jn, z = je(P(ae) + 1, H + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (k !== Ku || H < a.value) && (k !== qu || z > i.value)
    ) {
      const oe = A(a.value) - A(H), U = A(z) - A(i.value);
      Math.max(oe, U) > Jn ? (a.value = H, i.value = z) : (H <= 0 && (a.value = H), z >= t.value.length && (i.value = z));
    }
    o.value = A(a.value), r.value = A(t.value.length) - A(i.value);
  }
  function K(p) {
    const k = A(p);
    !s.value || p && !k ? S = p : s.value.scrollTop = k;
  }
  const ne = C(() => t.value.slice(a.value, i.value).map((p, k) => {
    const _ = k + a.value;
    return {
      raw: p,
      index: _,
      key: De(p, e.itemKey, _)
    };
  }));
  return Q(t, () => {
    m = Array.from({
      length: t.value.length
    }), y = Array.from({
      length: t.value.length
    }), x.immediate(), L();
  }, {
    deep: 1
  }), {
    calculateVisibleItems: L,
    containerRef: s,
    markerRef: u,
    computedItems: ne,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: K,
    handleScroll: O,
    handleScrollend: M,
    handleItemResize: F
  };
}
function Qu(e, t) {
  let n = e.length - 1, l = 0, a = 0, i = null, o = -1;
  if (e[n] < t)
    return n;
  for (; l <= n; )
    if (a = l + n >> 1, i = e[a], i > t)
      n = a - 1;
    else if (i < t)
      o = a, l = a + 1;
    else return i === t ? a : l;
  return o;
}
const Ju = N({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...Yu(),
  ...le(),
  ...Xe()
}, "VVirtualScroll"), Zu = q()({
  name: "VVirtualScroll",
  props: Ju(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = we("VVirtualScroll"), {
      dimensionStyles: a
    } = Qe(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: u,
      handleItemResize: c,
      scrollToIndex: f,
      paddingTop: v,
      paddingBottom: d,
      computedItems: h
    } = Xu(e, V(() => e.items));
    return ut(() => e.renderless, () => {
      function m() {
        var S, I;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[b]("scroll", s, {
          passive: !0
        }), document[b]("scrollend", u)) : ((S = o.value) == null || S[b]("scroll", s, {
          passive: !0
        }), (I = o.value) == null || I[b]("scrollend", u));
      }
      pt(() => {
        o.value = ai(l.vnode.el, !0), m(!0);
      }), Ee(m);
    }), Z(() => {
      const m = h.value.map((y) => g(Gu, {
        key: y.key,
        renderless: e.renderless,
        "onUpdate:height": (b) => c(y.index, b)
      }, {
        default: (b) => {
          var S;
          return (S = n.default) == null ? void 0 : S.call(n, {
            item: y.raw,
            index: y.index,
            ...b
          });
        }
      }));
      return e.renderless ? w(de, null, [w("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: ee(v.value)
        }
      }, null), m, w("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: ee(d.value)
        }
      }, null)]) : w("div", {
        ref: o,
        class: Y(["v-virtual-scroll", e.class]),
        onScrollPassive: s,
        onScrollend: u,
        style: ie([a.value, e.style])
      }, [w("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: ee(v.value),
          paddingBottom: ee(d.value)
        }
      }, [m])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: f
    };
  }
});
function ec(e, t) {
  const n = X(!1);
  let l;
  function a(r) {
    cancelAnimationFrame(l), n.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const s = Q(n, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var c, f;
    if (r.key === "Tab" && ((c = t.value) == null || c.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (f = e.value) == null ? void 0 : f.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const u = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const v = s.getBoundingClientRect().top;
      for (const d of u)
        if (d.getBoundingClientRect().top >= v) {
          d.focus();
          break;
        }
    } else {
      const v = s.getBoundingClientRect().bottom;
      for (const d of [...u].reverse())
        if (d.getBoundingClientRect().bottom <= v) {
          d.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: a,
    onKeydown: o
  };
}
const tc = N({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: ue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...go({
    itemChildren: !1
  })
}, "Select"), nc = N({
  ...tc(),
  ...dt(Vo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...un({
    transition: {
      component: wi
    }
  })
}, "VSelect"), ml = q()({
  name: "VSelect",
  props: nc(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: l
    } = Al(), a = $(), i = $(), o = $(), {
      items: r,
      transformIn: s,
      transformOut: u
    } = cu(e), c = ye(e, "modelValue", [], (p) => s(p === null ? [null] : He(p)), (p) => {
      const k = u(p);
      return e.multiple ? k : k[0] ?? null;
    }), f = C(() => typeof e.counterValue == "function" ? e.counterValue(c.value) : typeof e.counterValue == "number" ? e.counterValue : c.value.length), v = Ji(e), d = C(() => c.value.map((p) => p.value)), h = X(!1);
    let m = "", y = -1, b;
    const S = C(() => e.hideSelected ? r.value.filter((p) => !c.value.some((k) => (e.valueComparator || Fe)(k, p))) : r.value), I = C(() => e.hideNoData && !S.value.length || v.isReadonly.value || v.isDisabled.value), x = ye(e, "menu"), E = C({
      get: () => x.value,
      set: (p) => {
        var k;
        x.value && !p && ((k = i.value) != null && k.ΨopenChildren.size) || p && I.value || (x.value = p);
      }
    }), F = V(() => E.value ? e.closeText : e.openText), A = C(() => {
      var p;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((p = e.menuProps) == null ? void 0 : p.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), P = $(), j = ec(P, a);
    function G(p) {
      e.openOnClear && (E.value = !0);
    }
    function R() {
      I.value || (E.value = !E.value);
    }
    function T(p) {
      na(p) && O(p);
    }
    function O(p) {
      var se, me, fe;
      if (!p.key || v.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(p.key) && p.preventDefault(), ["Enter", "ArrowDown", " "].includes(p.key) && (E.value = !0), ["Escape", "Tab"].includes(p.key) && (E.value = !1), p.key === "Home" ? (se = P.value) == null || se.focus("first") : p.key === "End" && ((me = P.value) == null || me.focus("last"));
      const k = 1e3;
      if (!na(p)) return;
      const _ = performance.now();
      _ - b > k && (m = "", y = -1), m += p.key.toLowerCase(), b = _;
      const H = S.value;
      function ae() {
        let ge = z();
        return ge || m.at(-1) === m.at(-2) && (m = m.slice(0, -1), ge = z(), ge) || (y = -1, ge = z(), ge) ? ge : (m = p.key.toLowerCase(), z());
      }
      function z() {
        for (let ge = y + 1; ge < H.length; ge++) {
          const Ve = H[ge];
          if (Ve.title.toLowerCase().startsWith(m))
            return [Ve, ge];
        }
      }
      const oe = ae();
      if (!oe) return;
      const [U, re] = oe;
      y = re, (fe = P.value) == null || fe.focus(re), e.multiple || (c.value = [U]);
    }
    function M(p) {
      let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!p.props.disabled)
        if (e.multiple) {
          const _ = c.value.findIndex((ae) => (e.valueComparator || Fe)(ae.value, p.value)), H = k ?? !~_;
          if (~_) {
            const ae = H ? [...c.value, p] : [...c.value];
            ae.splice(_, 1), c.value = ae;
          } else H && (c.value = [...c.value, p]);
        } else {
          const _ = k !== !1;
          c.value = _ ? [p] : [], Ce(() => {
            E.value = !1;
          });
        }
    }
    function B(p) {
      var k;
      (k = P.value) != null && k.$el.contains(p.relatedTarget) || (E.value = !1);
    }
    function L() {
      var p;
      e.eager && ((p = o.value) == null || p.calculateVisibleItems());
    }
    function D() {
      var p;
      h.value && ((p = a.value) == null || p.focus());
    }
    function K(p) {
      h.value = !0;
    }
    function ne(p) {
      if (p == null) c.value = [];
      else if (Cn(a.value, ":autofill") || Cn(a.value, ":-webkit-autofill")) {
        const k = r.value.find((_) => _.title === p);
        k && M(k);
      } else a.value && (a.value.value = "");
    }
    return Q(E, () => {
      if (!e.hideSelected && E.value && c.value.length) {
        const p = S.value.findIndex((k) => c.value.some((_) => (e.valueComparator || Fe)(_.value, k.value)));
        pe && !e.noAutoScroll && window.requestAnimationFrame(() => {
          var k;
          p >= 0 && ((k = o.value) == null || k.scrollToIndex(p));
        });
      }
    }), Q(() => e.items, (p, k) => {
      E.value || h.value && e.hideNoData && !k.length && p.length && (E.value = !0);
    }), Z(() => {
      const p = !!(e.chips || n.chip), k = !!(!e.hideNoData || S.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), _ = c.value.length > 0, H = en.filterProps(e), ae = _ || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return g(en, J({
        ref: a
      }, H, {
        modelValue: c.value.map((z) => z.props.value).join(", "),
        "onUpdate:modelValue": ne,
        focused: h.value,
        "onUpdate:focused": (z) => h.value = z,
        validationValue: c.externalValue,
        counterValue: f.value,
        dirty: _,
        class: ["v-select", {
          "v-select--active-menu": E.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": c.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: ae,
        "onClick:clear": G,
        "onMousedown:control": R,
        onBlur: B,
        onKeydown: O,
        "aria-label": l(F.value),
        title: l(F.value)
      }), {
        ...n,
        default: () => w(de, null, [g(Du, J({
          ref: i,
          modelValue: E.value,
          "onUpdate:modelValue": (z) => E.value = z,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: I.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: L,
          onAfterLeave: D
        }, A.value), {
          default: () => [k && g(gu, J({
            ref: P,
            selected: d.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (z) => z.preventDefault(),
            onKeydown: T,
            onFocusin: K,
            tabindex: "-1",
            "aria-live": "polite",
            "aria-label": `${e.label}-list`,
            color: e.itemColor ?? e.color
          }, j, e.listProps), {
            default: () => {
              var z, oe, U;
              return [(z = n["prepend-item"]) == null ? void 0 : z.call(n), !S.value.length && !e.hideNoData && (((oe = n["no-data"]) == null ? void 0 : oe.call(n)) ?? g(Pn, {
                key: "no-data",
                title: l(e.noDataText)
              }, null)), g(Zu, {
                ref: o,
                renderless: !0,
                items: S.value,
                itemKey: "value"
              }, {
                default: (re) => {
                  var Gl, Kl, ql;
                  let {
                    item: se,
                    index: me,
                    itemRef: fe
                  } = re;
                  const ge = Jo(se.props), Ve = J(se.props, {
                    ref: fe,
                    key: se.value,
                    onClick: () => M(se, null)
                  });
                  return se.type === "divider" ? ((Gl = n.divider) == null ? void 0 : Gl.call(n, {
                    props: se.raw,
                    index: me
                  })) ?? g(Wt, J(se.props, {
                    key: `divider-${me}`
                  }), null) : se.type === "subheader" ? ((Kl = n.subheader) == null ? void 0 : Kl.call(n, {
                    props: se.raw,
                    index: me
                  })) ?? g(vo, J(se.props, {
                    key: `subheader-${me}`
                  }), null) : ((ql = n.item) == null ? void 0 : ql.call(n, {
                    item: se,
                    index: me,
                    props: Ve
                  })) ?? g(Pn, J(Ve, {
                    role: "option"
                  }), {
                    prepend: (_o) => {
                      let {
                        isSelected: Io
                      } = _o;
                      return w(de, null, [e.multiple && !e.hideSelected ? g(ul, {
                        key: se.value,
                        modelValue: Io,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ge.prependAvatar && g(Qt, {
                        image: ge.prependAvatar
                      }, null), ge.prependIcon && g(_e, {
                        icon: ge.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (U = n["append-item"]) == null ? void 0 : U.call(n)];
            }
          })]
        }), c.value.map((z, oe) => {
          function U(fe) {
            fe.stopPropagation(), fe.preventDefault(), M(z, !1);
          }
          const re = {
            "onClick:close": U,
            onKeydown(fe) {
              fe.key !== "Enter" && fe.key !== " " || (fe.preventDefault(), fe.stopPropagation(), U(fe));
            },
            onMousedown(fe) {
              fe.preventDefault(), fe.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, se = p ? !!n.chip : !!n.selection, me = se ? Ja(p ? n.chip({
            item: z,
            index: oe,
            props: re
          }) : n.selection({
            item: z,
            index: oe
          })) : void 0;
          if (!(se && !me))
            return w("div", {
              key: z.value,
              class: "v-select__selection"
            }, [p ? n.chip ? g(Pe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: z.title
                }
              }
            }, {
              default: () => [me]
            }) : g(lo, J({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: z.title,
              disabled: z.props.disabled
            }, re), null) : me ?? w("span", {
              class: "v-select__selection-text"
            }, [z.title, e.multiple && oe < c.value.length - 1 && w("span", {
              class: "v-select__selection-comma"
            }, [ot(",")])])]);
        })]),
        "append-inner": function() {
          var re, se;
          for (var z = arguments.length, oe = new Array(z), U = 0; U < z; U++)
            oe[U] = arguments[U];
          return w(de, null, [(re = n["append-inner"]) == null ? void 0 : re.call(n, ...oe), e.menuIcon ? g(_e, {
            class: "v-select__menu-icon",
            color: (se = a.value) == null ? void 0 : se.fieldIconColor,
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), Mt({
      isFocused: h,
      menu: E,
      select: M
    }, a);
  }
}), Po = Symbol.for("vuetify:layout");
function lc() {
  const e = ve(Po);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function ac(e) {
  const t = X(e());
  let n = -1;
  function l() {
    clearInterval(n);
  }
  function a() {
    l(), Ce(() => t.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (l(), t.value <= 0) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      t.value = Math.max(e() - c, 0), t.value <= 0 && l();
    }, s);
  }
  return Ee(l), {
    clear: l,
    time: t,
    start: i,
    reset: a
  };
}
const ic = N({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Nn({
    location: "bottom"
  }),
  ...Tl(),
  ...Me(),
  ...mt(),
  ...ke(),
  ...dt(Wl({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), oc = q()({
  name: "VSnackbar",
  props: ic(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const l = ye(e, "modelValue"), {
      positionClasses: a
    } = Ol(e), {
      scopeId: i
    } = jl(), {
      themeClasses: o
    } = Ae(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: u
    } = on(e), {
      roundedClasses: c
    } = Ne(e), f = ac(() => Number(e.timeout)), v = $(), d = $(), h = X(!1), m = X(0), y = $(), b = ve(Po, void 0);
    ut(() => !!b, () => {
      const R = lc();
      Ue(() => {
        y.value = R.mainStyles.value;
      });
    }), Q(l, I), Q(() => e.timeout, I), pt(() => {
      l.value && I();
    });
    let S = -1;
    function I() {
      f.reset(), window.clearTimeout(S);
      const R = Number(e.timeout);
      if (!l.value || R === -1) return;
      const T = pl(d.value);
      f.start(T), S = window.setTimeout(() => {
        l.value = !1;
      }, R);
    }
    function x() {
      f.reset(), window.clearTimeout(S);
    }
    function E() {
      h.value = !0, x();
    }
    function F() {
      h.value = !1, I();
    }
    function A(R) {
      m.value = R.touches[0].clientY;
    }
    function P(R) {
      Math.abs(m.value - R.changedTouches[0].clientY) > 50 && (l.value = !1);
    }
    function j() {
      h.value && F();
    }
    const G = C(() => e.location.split(" ").reduce((R, T) => (R[`v-snackbar--${T}`] = !0, R), {}));
    return Z(() => {
      const R = In.filterProps(e), T = !!(n.default || n.text || e.text);
      return g(In, J({
        ref: v,
        class: ["v-snackbar", {
          "v-snackbar--active": l.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, G.value, a.value, e.class],
        style: [y.value, e.style]
      }, R, {
        modelValue: l.value,
        "onUpdate:modelValue": (O) => l.value = O,
        contentProps: J({
          class: ["v-snackbar__wrapper", o.value, r.value, c.value, u.value],
          style: [s.value],
          onPointerenter: E,
          onPointerleave: F
        }, R.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: A,
        onTouchend: P,
        onAfterLeave: j
      }, i), {
        default: () => {
          var O, M;
          return [an(!1, "v-snackbar"), e.timer && !h.value && w("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [g(ci, {
            ref: d,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            modelValue: f.time.value
          }, null)]), T && w("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((O = n.text) == null ? void 0 : O.call(n)) ?? e.text, (M = n.default) == null ? void 0 : M.call(n)]), n.actions && g(Pe, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [w("div", {
              class: "v-snackbar__actions"
            }, [n.actions({
              isActive: l
            })])]
          })];
        },
        activator: n.activator
      });
    }), Mt({}, v);
  }
}), rc = N({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...zn(),
  ...Ul()
}, "VTextarea"), An = q()({
  name: "VTextarea",
  directives: {
    vIntersect: Ot
  },
  inheritAttrs: !1,
  props: rc(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:rows": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: l,
      slots: a
    } = t;
    const i = ye(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Dn(e), {
      onIntersect: u
    } = xo(e), c = C(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), f = C(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = $(), d = $(), h = X(""), m = $(), y = C(() => e.persistentPlaceholder || o.value || e.active);
    function b() {
      var R;
      m.value !== document.activeElement && ((R = m.value) == null || R.focus()), o.value || r();
    }
    function S(R) {
      b(), l("click:control", R);
    }
    function I(R) {
      l("mousedown:control", R);
    }
    function x(R) {
      R.stopPropagation(), b(), Ce(() => {
        i.value = "", kl(e["onClick:clear"], R);
      });
    }
    function E(R) {
      var O;
      const T = R.target;
      if (i.value = T.value, (O = e.modelModifiers) != null && O.trim) {
        const M = [T.selectionStart, T.selectionEnd];
        Ce(() => {
          T.selectionStart = M[0], T.selectionEnd = M[1];
        });
      }
    }
    const F = $(), A = $(Number(e.rows)), P = C(() => ["plain", "underlined"].includes(e.variant));
    Ue(() => {
      e.autoGrow || (A.value = Number(e.rows));
    });
    function j() {
      e.autoGrow && Ce(() => {
        if (!F.value || !d.value) return;
        const R = getComputedStyle(F.value), T = getComputedStyle(d.value.$el), O = parseFloat(R.getPropertyValue("--v-field-padding-top")) + parseFloat(R.getPropertyValue("--v-input-padding-top")) + parseFloat(R.getPropertyValue("--v-field-padding-bottom")), M = F.value.scrollHeight, B = parseFloat(R.lineHeight), L = Math.max(parseFloat(e.rows) * B + O, parseFloat(T.getPropertyValue("--v-input-control-height"))), D = parseFloat(e.maxRows) * B + O || 1 / 0, K = je(M ?? 0, L, D);
        A.value = Math.floor((K - O) / B), h.value = ee(K);
      });
    }
    pt(j), Q(i, j), Q(() => e.rows, j), Q(() => e.maxRows, j), Q(() => e.density, j), Q(A, (R) => {
      l("update:rows", R);
    });
    let G;
    return Q(F, (R) => {
      R ? (G = new ResizeObserver(j), G.observe(F.value)) : G == null || G.disconnect();
    }), qe(() => {
      G == null || G.disconnect();
    }), Z(() => {
      const R = !!(a.counter || e.counter || e.counterValue), T = !!(R || a.details), [O, M] = Ln(n), {
        modelValue: B,
        ...L
      } = Lt.filterProps(e), D = En.filterProps(e);
      return g(Lt, J({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": (K) => i.value = K,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": P.value
        }, e.class],
        style: e.style
      }, O, L, {
        centerAffix: A.value === 1 && !P.value,
        focused: o.value
      }), {
        ...a,
        default: (K) => {
          let {
            id: ne,
            isDisabled: p,
            isDirty: k,
            isReadonly: _,
            isValid: H,
            hasDetails: ae
          } = K;
          return g(En, J({
            ref: d,
            style: {
              "--v-textarea-control-height": h.value
            },
            onClick: S,
            onMousedown: I,
            "onClick:clear": x,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, D, {
            id: ne.value,
            active: y.value || k.value,
            centerAffix: A.value === 1 && !P.value,
            dirty: k.value || e.dirty,
            disabled: p.value,
            focused: o.value,
            details: ae.value,
            error: H.value === !1
          }), {
            ...a,
            default: (z) => {
              let {
                props: {
                  class: oe,
                  ...U
                }
              } = z;
              return w(de, null, [e.prefix && w("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), Ie(w("textarea", J({
                ref: m,
                class: oe,
                value: i.value,
                onInput: E,
                autofocus: e.autofocus,
                readonly: _.value,
                disabled: p.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: b,
                onBlur: s
              }, U, M), null), [[Ot, {
                handler: u
              }, null, {
                once: !0
              }]]), e.autoGrow && Ie(w("textarea", {
                class: Y([oe, "v-textarea__sizer"]),
                id: `${U.id}-sizer`,
                "onUpdate:modelValue": (re) => i.value = re,
                ref: F,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[zo, i.value]]), e.suffix && w("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: T ? (K) => {
          var ne;
          return w(de, null, [(ne = a.details) == null ? void 0 : ne.call(a, K), R && w(de, null, [w("span", null, null), g(ko, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: f.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), Mt({}, v, d, m);
  }
}), sc = /* @__PURE__ */ yl({
  __name: "BFGenerate",
  setup(e) {
    const t = $(""), n = $(""), l = $(!1), a = $("success"), i = $(""), o = Wa(), r = $(ht[0].name);
    s(ht[0].name), Q(r, (f, v) => {
      s(f);
    });
    function s(f) {
      if (f === "Custom") return;
      const v = ht.find((d) => d.name === f);
      [
        "inc",
        "dec",
        "incVal",
        "decVal",
        "output",
        "input",
        "loopStart",
        "loopEnd"
      ].forEach((d, h) => {
        o.value[h].model = v.markSpec[d];
      });
    }
    function u() {
      n.value = "";
      const f = t.value.split("");
      let v = "";
      f.forEach((d, h) => {
        if (v === d)
          n.value += o.value[
            4
            /* OUTPUT */
          ].model;
        else {
          h > 0 && (n.value += o.value[
            0
            /* INC */
          ].model), v = d;
          const m = Yl.factor(d.charCodeAt(0));
          m.forEach((y, b) => {
            n.value += o.value[
              2
              /* INCVAL */
            ].model.repeat(y), b < m.length - 1 && (n.value += [
              o.value[
                6
                /* LOOPSTART */
              ].model,
              o.value[
                0
                /* INC */
              ].model
            ].join(""));
          }), n.value += [
            o.value[
              1
              /* DEC */
            ].model,
            o.value[
              3
              /* DECVAL */
            ].model,
            o.value[
              7
              /* LOOPEND */
            ].model
          ].join("").repeat(m.length - 1), n.value += [
            o.value[
              0
              /* INC */
            ].model.repeat(m.length - 1),
            o.value[
              4
              /* OUTPUT */
            ].model
          ].join("");
        }
      });
    }
    function c() {
      Yl.copyToClipboard(n.value) ? (i.value = "Success", l.value = !0) : (i.value = "Failed", a.value = "error", l.value = !0);
    }
    return (f, v) => (Te(), Et(de, null, [
      g(rt, null, {
        default: W(() => [
          g(Se, null, {
            default: W(() => [
              g(be, {
                cols: "12",
                lg: "6"
              }, {
                default: W(() => [
                  g(rt, null, {
                    default: W(() => [
                      g(Se, null, {
                        default: W(() => [
                          g(be, null, {
                            default: W(() => [
                              g(An, {
                                label: "String",
                                name: "code",
                                modelValue: t.value,
                                "onUpdate:modelValue": v[0] || (v[0] = (d) => t.value = d),
                                clearable: ""
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      g(Se, { "no-gutters": "" }, {
                        default: W(() => [
                          g(be, null, {
                            default: W(() => [
                              g(Ti, null, {
                                default: W(() => [
                                  g(Bi, { title: "Instruction Settings" }, {
                                    default: W(() => [
                                      g(Vn, null, {
                                        default: W(() => [
                                          g(rt, null, {
                                            default: W(() => [
                                              g(Se, { "no-gutters": "" }, {
                                                default: W(() => [
                                                  g(ml, {
                                                    label: "Instruction Preset",
                                                    items: ze(ht).map((d) => d.name),
                                                    modelValue: r.value,
                                                    "onUpdate:modelValue": v[1] || (v[1] = (d) => r.value = d)
                                                  }, null, 8, ["items", "modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              g(Se, { "no-gutters": "" }, {
                                                default: W(() => [
                                                  (Te(!0), Et(de, null, $t(ze(o), (d) => (Te(), yt(be, { cols: "3" }, {
                                                    default: W(() => [
                                                      g(en, {
                                                        label: d.label,
                                                        density: "compact",
                                                        class: "mx-1",
                                                        variant: r.value !== "Custom" ? "outlined" : "filled",
                                                        readonly: r.value !== "Custom",
                                                        modelValue: d.model,
                                                        "onUpdate:modelValue": (h) => d.model = h
                                                      }, null, 8, ["label", "variant", "readonly", "modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 2
                                                  }, 1024))), 256))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      g(Se, null, {
                        default: W(() => [
                          g(be, null, {
                            default: W(() => [
                              g(jt, {
                                color: "primary",
                                block: "",
                                onClick: v[2] || (v[2] = (d) => u())
                              }, {
                                default: W(() => v[6] || (v[6] = [
                                  ot(" Convert ", -1)
                                ])),
                                _: 1,
                                __: [6]
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              g(be, {
                cols: "12",
                lg: "6"
              }, {
                default: W(() => [
                  g(rt, null, {
                    default: W(() => [
                      g(Se, null, {
                        default: W(() => [
                          g(be, null, {
                            default: W(() => [
                              g(An, {
                                label: "Output",
                                name: "output",
                                modelValue: n.value,
                                "onUpdate:modelValue": v[3] || (v[3] = (d) => n.value = d),
                                variant: "outlined",
                                "auto-grow": "",
                                readonly: ""
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      g(Se, null, {
                        default: W(() => [
                          g(be, null, {
                            default: W(() => [
                              g(jt, {
                                color: "primary",
                                block: "",
                                onClick: v[4] || (v[4] = (d) => c())
                              }, {
                                default: W(() => v[7] || (v[7] = [
                                  ot(" Copy ", -1)
                                ])),
                                _: 1,
                                __: [7]
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g(oc, {
        modelValue: l.value,
        "onUpdate:modelValue": v[5] || (v[5] = (d) => l.value = d),
        color: a.value
      }, {
        default: W(() => [
          ot(tt(i.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "color"])
    ], 64));
  }
});
var za = "M14,19H18V5H14M6,19H10V5H6V19Z", uc = "M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z", Ha = "M8,5.14V19.14L19,12.14L8,5.14Z", cc = "M5,5V19H8V5M10,5V19L21,12", ja = "M18,18H6V6H18V18Z", $e;
let hn = ($e = class {
  constructor(t) {
    ce(this, "id");
    this.id = t;
  }
  toString() {
    return $e.errorMsgs[this.id];
  }
}, ce($e, "INVALID_SYNTAX", 1), ce($e, "UNMATCHED_LOOP", 2), ce($e, "errorMsgs", {
  [$e.INVALID_SYNTAX]: "Invalid syntax",
  [$e.UNMATCHED_LOOP]: "Unmatched loop"
}), $e);
class Zn {
  constructor(t, n, l) {
    ce(this, "error");
    ce(this, "line");
    ce(this, "col");
    this.error = new hn(t), this.line = n, this.col = l;
  }
}
var et = /* @__PURE__ */ ((e) => (e[e.HALTED = 0] = "HALTED", e[e.RUNNING = 1] = "RUNNING", e[e.WAITING_INPUT = 2] = "WAITING_INPUT", e))(et || {});
class vn {
  constructor(t, n, l) {
    ce(this, "id");
    ce(this, "stdout");
    ce(this, "error");
    this.id = t, this.stdout = n, this.error = l;
  }
}
class dc {
  constructor() {
    ce(this, "_progMem");
    ce(this, "_progPtr");
    ce(this, "_mem");
    ce(this, "_ptr");
    ce(this, "loopStack");
    ce(this, "_mark");
    this._mark = new te(), this.reset();
  }
  setMark(t) {
    this._mark = t;
  }
  load(t) {
    let n = {};
    Object.entries(this._mark).forEach(([o, r]) => {
      Array.isArray(r) ? r.forEach((s) => n[s.replace(/\s/g, "")] = te.enum[o]) : n[r.replace(/\s/g, "")] = te.enum[o];
    });
    const l = new RegExp(
      "^s*(" + Object.values(this._mark).map((o) => Array.isArray(o) ? o.map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s/g, "")).join("|") : o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s/g, "")).sort((o, r) => r.length - o.length).join("|") + ")(.*)$",
      "s"
    );
    let a, i = t.replace(/\s/g, "");
    do {
      if (a = i.match(l), a === null || !(a[1] in n))
        return new Zn(hn.INVALID_SYNTAX, 0, 0);
      this._progMem.push(n[a[1]]), i = a[2];
    } while (i !== "");
    return !0;
  }
  reset() {
    this._progPtr = 0, this._progMem = [], this._ptr = 0, this._mem = [], this.loopStack = [];
  }
  step() {
    if (this._progPtr >= this._progMem.length)
      return new vn(et.HALTED, "");
    const t = new vn(et.RUNNING, "");
    switch (this._progMem[this._progPtr]) {
      case te.enum.inc:
        this._ptr++;
        break;
      case te.enum.dec:
        this._ptr--;
        break;
      case te.enum.incVal:
        this._mem[this._ptr] === void 0 ? this._mem[this._ptr] = 1 : this._mem[this._ptr]++;
        break;
      case te.enum.decVal:
        this._mem[this._ptr] === void 0 ? this._mem[this._ptr] = -1 : this._mem[this._ptr]--;
        break;
      case te.enum.output:
        t.stdout = String.fromCharCode(this._mem[this._ptr]);
        break;
      case te.enum.input:
        t.id = et.WAITING_INPUT;
        break;
      case te.enum.loopStart:
        if (this.loopStack.push(this._progPtr), this._mem[this._ptr] === 0) {
          let l = this.loopStack.length;
          do
            switch (this._progPtr++, this._progMem[this._progPtr]) {
              case te.enum.loopStart:
                this.loopStack.push(this._progPtr);
                break;
              case te.enum.loopEnd:
                if (this.loopStack.pop() === void 0)
                  return new vn(
                    et.HALTED,
                    "",
                    new Zn(hn.UNMATCHED_LOOP, 0, 0)
                    // Line and column is not implemented yet
                  );
                break;
            }
          while (this.loopStack.length >= l);
        }
        break;
      case te.enum.loopEnd:
        let n = this.loopStack.pop();
        if (n === void 0)
          return new vn(
            et.HALTED,
            "",
            new Zn(hn.UNMATCHED_LOOP, 0, 0)
            // Line and column is not implemented yet
          );
        this._mem[this._ptr] !== 0 && (this._progPtr = n, this.loopStack.push(n));
        break;
    }
    return this._progPtr++, t;
  }
  store(t) {
    this._mem[this._ptr] = t.charCodeAt(0);
  }
  get progMem() {
    return this._progMem;
  }
  get progPtr() {
    return this._progPtr;
  }
  get mem() {
    return this._mem;
  }
  get ptr() {
    return this._ptr;
  }
  get mark() {
    return this._mark;
  }
}
const Ze = class Ze {
  static initialize() {
    window.addEventListener("message", (t) => {
      t.source !== window || t.data !== Ze._MESSAGE_NAME || (t.stopPropagation(), Ze._calls.length > 0 && Ze._calls.shift()());
    }, !0);
  }
  static asyncCall(t) {
    Ze._calls.push(t), window.postMessage(Ze._MESSAGE_NAME, "*");
  }
};
ce(Ze, "_calls", []), ce(Ze, "_MESSAGE_NAME", "async-call-message");
let Bn = Ze;
const fc = N({
  color: String,
  ...kt(),
  ...le(),
  ...Xe(),
  ...Vt(),
  ...Nn(),
  ...Tl(),
  ...Me(),
  ...he(),
  ...ke()
}, "VSheet"), mn = q()({
  name: "VSheet",
  props: fc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = We(() => e.color), {
      borderClasses: o
    } = xt(e), {
      dimensionStyles: r
    } = Qe(e), {
      elevationClasses: s
    } = Pt(e), {
      locationStyles: u
    } = Bl(e), {
      positionClasses: c
    } = Ol(e), {
      roundedClasses: f
    } = Ne(e);
    return Z(() => g(e.tag, {
      class: Y(["v-sheet", l.value, a.value, o.value, s.value, c.value, f.value, e.class]),
      style: ie([i.value, r.value, u.value, e.style])
    }, n)), {};
  }
}), vc = { class: "mx-2" }, mc = { class: "mx-2" }, gc = /* @__PURE__ */ yl({
  __name: "BFRun",
  setup(e) {
    Bn.initialize();
    const t = new dc(), n = $(
      0
      /* HALTED */
    ), l = $(!1), a = C(() => ({
      0: "Halted",
      1: "Running",
      2: "Waiting for input",
      3: "Paused"
    })[n.value]), i = C(() => ({
      0: ja,
      1: Ha,
      2: uc,
      3: za
    })[n.value]), o = $(!1), r = $(""), s = $(""), u = $(""), c = $(!1), f = ["Dec", "Hex", "Oct", "Bin"], v = $([
      {
        label: "Address Base",
        items: f,
        model: $(f[0])
      },
      {
        label: "Value Base",
        items: f,
        model: $(f[0])
      }
    ]), d = Wa(), h = $(ht[0].name);
    F();
    const m = $([
      {
        icon: Ha,
        text: "Run",
        fn: () => {
          n.value === 0 ? O() : (o.value = !1, M());
        },
        disabled: C(
          () => r.value === "" || n.value === 2 || n.value === 1 && !o.value
        ),
        cols: 3
      },
      {
        icon: cc,
        text: "Step",
        fn: () => {
          n.value === 0 ? O(!0) : (o.value = !0, M());
        },
        disabled: C(
          () => r.value === "" || n.value === 2 || n.value === 1 && !o.value
        ),
        cols: 3
      },
      {
        icon: za,
        text: "Pause",
        fn: () => {
          l.value = !0, n.value = 3;
        },
        disabled: C(
          () => n.value !== 1 || o.value
        ),
        cols: 3
      },
      {
        icon: ja,
        text: "Halt",
        fn: () => {
          l.value = !0, n.value = 0;
        },
        disabled: C(
          () => n.value === 0
          /* HALTED */
        ),
        cols: 3
      }
    ]), y = $(!1), b = $(t.mem), S = C({
      get() {
        y.value;
        const B = {
          [f[0]]: {
            base: 10,
            prefix: ""
          },
          [f[1]]: {
            base: 16,
            prefix: "0x"
          },
          [f[2]]: {
            base: 8,
            prefix: "0o"
          },
          [f[3]]: {
            base: 2,
            prefix: "0b"
          }
        };
        return b.value.map((L, D) => {
          const K = B[v.value[0].model], ne = B[v.value[1].model];
          return [
            K.prefix + D.toString(K.base),
            ne.prefix + L.toString(ne.base)
          ];
        });
      },
      set(B) {
        b.value = B, y.value = !y.value;
      }
    }), I = $(!1), x = $(t.ptr), E = C({
      get() {
        return x.value;
      },
      set(B) {
        x.value = B, I.value = !I.value;
      }
    });
    Q(n, (B, L) => {
      switch (B) {
        case 0:
        case 1:
        case 3:
          s.value = "";
          break;
        case 2:
          s.value = "", Ce(() => {
            document.getElementById("input-field").focus();
          });
          break;
      }
    }), Q(h, (B, L) => {
      A(B);
    });
    function F() {
      [
        "inc",
        "dec",
        "incVal",
        "decVal",
        "output",
        "input",
        "loopStart",
        "loopEnd"
      ].forEach((B, L) => {
        d.value[L].model = t.mark[B];
      });
    }
    function A(B) {
      B !== "Custom" && (t.setMark(ht.find((L) => L.name === B).markSpec), F());
    }
    function P() {
      t.setMark(new te({
        inc: d.value[0].model,
        dec: d.value[1].model,
        incVal: d.value[2].model,
        decVal: d.value[3].model,
        output: d.value[4].model,
        input: d.value[5].model,
        loopStart: d.value[6].model,
        loopEnd: d.value[7].model
      }));
    }
    function j() {
      c.value && R();
    }
    function G() {
      s.value = "";
    }
    function R() {
      t.store(s.value), M();
    }
    function T(B) {
      u.value = "Error: " + B.error.toString();
    }
    function O(B) {
      t.reset();
      let L = t.load(r.value);
      L === !0 ? (u.value = "", l.value = !1, o.value = B || !1, M()) : T(L);
    }
    function M() {
      if (l.value) {
        l.value = !1;
        return;
      }
      let B = t.step();
      if (S.value = t.mem, E.value = t.ptr, B.error !== void 0) {
        T(B.error), n.value = 0;
        return;
      }
      switch (B.id) {
        case et.RUNNING:
          u.value += B.stdout, n.value = 1, o.value ? n.value = 3 : Bn.asyncCall(M);
          break;
        case et.HALTED:
          u.value += B.stdout, n.value = 0;
          break;
        case et.WAITING_INPUT:
          n.value = 2;
          break;
      }
    }
    return (B, L) => (Te(), yt(rt, null, {
      default: W(() => [
        g(Se, null, {
          default: W(() => [
            g(be, {
              cols: "12",
              lg: "6"
            }, {
              default: W(() => [
                g(rt, null, {
                  default: W(() => [
                    g(Se, null, {
                      default: W(() => [
                        g(be, null, {
                          default: W(() => [
                            g(An, {
                              label: "Code",
                              name: "code",
                              modelValue: r.value,
                              "onUpdate:modelValue": L[0] || (L[0] = (D) => r.value = D),
                              variant: n.value !== 0 ? "outlined" : "filled",
                              readonly: n.value !== 0,
                              clearable: ""
                            }, null, 8, ["modelValue", "variant", "readonly"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    g(Se, { "no-gutters": "" }, {
                      default: W(() => [
                        g(be, null, {
                          default: W(() => [
                            g(Ti, null, {
                              default: W(() => [
                                g(Bi, { title: "Instruction Settings" }, {
                                  default: W(() => [
                                    g(Vn, null, {
                                      default: W(() => [
                                        g(rt, null, {
                                          default: W(() => [
                                            g(Se, { "no-gutters": "" }, {
                                              default: W(() => [
                                                g(ml, {
                                                  label: "Instruction Preset",
                                                  items: ze(ht).map((D) => D.name),
                                                  modelValue: h.value,
                                                  "onUpdate:modelValue": L[1] || (L[1] = (D) => h.value = D)
                                                }, null, 8, ["items", "modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            g(Se, { "no-gutters": "" }, {
                                              default: W(() => [
                                                (Te(!0), Et(de, null, $t(ze(d), (D) => (Te(), yt(be, { cols: "3" }, {
                                                  default: W(() => [
                                                    g(en, {
                                                      label: D.label,
                                                      density: "compact",
                                                      class: "mx-1",
                                                      variant: n.value !== 0 || h.value !== "Custom" ? "outlined" : "filled",
                                                      readonly: n.value !== 0 || h.value !== "Custom",
                                                      modelValue: D.model,
                                                      "onUpdate:modelValue": (K) => D.model = K
                                                    }, null, 8, ["label", "variant", "readonly", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 2
                                                }, 1024))), 256))
                                              ]),
                                              _: 1
                                            }),
                                            g(Se, { "no-gutters": "" }, {
                                              default: W(() => [
                                                g(be, null, {
                                                  default: W(() => [
                                                    g(jt, {
                                                      color: "primary",
                                                      disabled: n.value !== 0 || h.value !== "Custom",
                                                      onClick: L[2] || (L[2] = (D) => P()),
                                                      block: ""
                                                    }, {
                                                      default: W(() => L[10] || (L[10] = [
                                                        ot("Update Marks", -1)
                                                      ])),
                                                      _: 1,
                                                      __: [10]
                                                    }, 8, ["disabled"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            g(be, {
              cols: "12",
              lg: "6"
            }, {
              default: W(() => [
                g(rt, null, {
                  default: W(() => [
                    g(Se, null, {
                      default: W(() => [
                        g(be, null, {
                          default: W(() => [
                            g(An, {
                              label: "Output",
                              name: "output",
                              modelValue: u.value,
                              "onUpdate:modelValue": L[3] || (L[3] = (D) => u.value = D),
                              variant: "outlined",
                              "auto-grow": "",
                              readonly: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    g(Se, { "no-gutters": "" }, {
                      default: W(() => [
                        (Te(!0), Et(de, null, $t(v.value, (D) => (Te(), yt(be, { cols: "6" }, {
                          default: W(() => [
                            g(ml, {
                              label: D.label,
                              items: D.items,
                              density: "compact",
                              class: "mx-1",
                              modelValue: D.model,
                              "onUpdate:modelValue": (K) => D.model = K
                            }, null, 8, ["label", "items", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024))), 256))
                      ]),
                      _: 1
                    }),
                    S.value.length > 0 ? (Te(), yt(Se, {
                      key: 0,
                      "no-gutters": ""
                    }, {
                      default: W(() => [
                        g(be, null, {
                          default: W(() => [
                            g(mn, {
                              class: "d-flex flex-wrap",
                              elevation: "2",
                              rounded: "",
                              style: { width: "fit-content" }
                            }, {
                              default: W(() => [
                                g(mn, { class: "text-center" }, {
                                  default: W(() => [
                                    L[11] || (L[11] = w("span", { class: "mx-2" }, " Address ", -1)),
                                    g(Wt),
                                    L[12] || (L[12] = w("span", { class: "mx-2" }, " Value ", -1))
                                  ]),
                                  _: 1,
                                  __: [11, 12]
                                }),
                                g(Wt, { vertical: "" }),
                                (Te(!0), Et(de, null, $t(S.value, (D, K) => (Te(), yt(mn, {
                                  class: "text-center",
                                  color: K === E.value ? "red-lighten-4" : ""
                                }, {
                                  default: W(() => [
                                    w("span", vc, tt(D[0]), 1),
                                    g(Wt),
                                    w("span", mc, tt(D[1]), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"]))), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : Ho("", !0),
                    g(Se, null, {
                      default: W(() => [
                        (Te(!0), Et(de, null, $t(m.value, (D) => (Te(), yt(be, {
                          cols: D.cols || 6
                        }, {
                          default: W(() => [
                            g(jt, {
                              "prepend-icon": D.icon,
                              color: "primary",
                              block: "",
                              disabled: D.disabled,
                              onClick: (K) => D.fn()
                            }, {
                              default: W(() => [
                                ot(tt(D.text), 1)
                              ]),
                              _: 2
                            }, 1032, ["prepend-icon", "disabled", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]))), 256))
                      ]),
                      _: 1
                    }),
                    g(Se, { align: "center" }, {
                      default: W(() => [
                        g(be, null, {
                          default: W(() => [
                            g(mn, { class: "d-flex align-stretch" }, {
                              default: W(() => [
                                g(lo, {
                                  class: "mt-2",
                                  "prepend-icon": i.value
                                }, {
                                  default: W(() => [
                                    ot(tt(a.value), 1)
                                  ]),
                                  _: 1
                                }, 8, ["prepend-icon"]),
                                g(en, {
                                  id: "input-field",
                                  class: "mx-4",
                                  label: "Input",
                                  modelValue: s.value,
                                  "onUpdate:modelValue": [
                                    L[4] || (L[4] = (D) => s.value = D),
                                    L[5] || (L[5] = (D) => j())
                                  ],
                                  density: "compact",
                                  maxlength: "1",
                                  disabled: n.value !== 2,
                                  onKeydown: L[6] || (L[6] = jo((D) => R(), ["enter"]))
                                }, null, 8, ["modelValue", "disabled"]),
                                g(Bs, {
                                  label: "Auto Enter",
                                  color: "primary",
                                  density: "compact",
                                  modelValue: c.value,
                                  "onUpdate:modelValue": L[7] || (L[7] = (D) => c.value = D),
                                  "hide-details": "",
                                  onClick: L[8] || (L[8] = (D) => G())
                                }, null, 8, ["modelValue"]),
                                g(jt, {
                                  class: "mt-2",
                                  disabled: s.value === "" || c.value,
                                  onClick: L[9] || (L[9] = (D) => R())
                                }, {
                                  default: W(() => L[13] || (L[13] = [
                                    ot(" Enter ", -1)
                                  ])),
                                  _: 1,
                                  __: [13]
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), bc = {
  install(e, t = {}) {
    e.component("BFGenerate", sc), e.component("BFRun", gc);
  }
};
export {
  bc as default
};
