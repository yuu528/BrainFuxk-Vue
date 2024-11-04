import './index.css';var mi = Object.defineProperty;
var gi = (e, n, t) => n in e ? mi(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var le = (e, n, t) => gi(e, typeof n != "symbol" ? n + "" : n, t);
import { ref as R, Fragment as ie, reactive as St, computed as b, watchEffect as Fe, toRefs as _a, capitalize as Ht, isVNode as yi, Comment as hi, shallowRef as Y, unref as ke, warn as wn, getCurrentInstance as bi, provide as Ie, inject as ue, defineComponent as el, camelize as Ia, h as wt, isRef as Ct, createVNode as u, toRef as H, watch as K, onScopeDispose as xe, effectScope as tl, toRaw as me, onBeforeUnmount as Re, onMounted as ct, onUpdated as Si, mergeProps as X, Text as Ci, readonly as nl, Transition as ut, resolveDynamicComponent as pi, nextTick as he, withDirectives as we, TransitionGroup as ll, vShow as dt, resolveDirective as Ze, onBeforeMount as Ea, Teleport as wi, onDeactivated as xi, cloneVNode as ki, createTextVNode as Ye, vModelText as Vi, openBlock as Pe, createElementBlock as ht, withCtx as z, renderList as Pt, createBlock as at, toDisplayString as _t, createElementVNode as Qt, createCommentVNode as Pi, withKeys as _i } from "vue";
class Ll {
  static copyToClipboard(n) {
    return navigator.clipboard ? (navigator.clipboard.writeText(n), !0) : !1;
  }
  static factor(n) {
    let t = [], l = n;
    for (let a = 2; l > 1 && a <= l; a++)
      l % a === 0 && (t.push(a), l /= a, a = 1);
    return l > 1 && t.push(l), t.sort((a, o) => a - o), t;
  }
}
const Tt = class Tt {
  constructor(n) {
    le(this, "inc");
    le(this, "dec");
    le(this, "incVal");
    le(this, "decVal");
    le(this, "output");
    le(this, "input");
    le(this, "loopStart");
    le(this, "loopEnd");
    n !== void 0 ? Object.entries(n).forEach(([t, l]) => {
      this[t] = l;
    }) : Object.entries(Tt.PRESETS.Brainfuxk).forEach(([t, l]) => {
      this[t] = l;
    });
  }
};
le(Tt, "enum", {
  inc: 0,
  dec: 1,
  incVal: 2,
  decVal: 3,
  output: 4,
  input: 5,
  loopStart: 6,
  loopEnd: 7
}), le(Tt, "PRESETS", {
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
let Z = Tt;
const Aa = () => R(
  [
    {
      label: "Inc. Ptr.",
      model: R("")
    },
    {
      label: "Dec. Ptr.",
      model: R("")
    },
    {
      label: "Inc. Value",
      model: R("")
    },
    {
      label: "Dec. Value",
      model: R("")
    },
    {
      label: "Output",
      model: R("")
    },
    {
      label: "Input",
      model: R("")
    },
    {
      label: "Loop Start",
      model: R("")
    },
    {
      label: "Loop End",
      model: R("")
    }
  ]
), ot = [
  {
    name: "Brainfuxk",
    markSpec: new Z()
  },
  {
    name: "Ook!",
    markSpec: new Z(Z.PRESETS.Ook)
  },
  {
    name: "Nyaruko",
    markSpec: new Z(Z.PRESETS.Nyaruko)
  },
  {
    name: "Kemono",
    markSpec: new Z(Z.PRESETS.Kemono)
  },
  {
    name: "Jojo",
    markSpec: new Z(Z.PRESETS.Jojo)
  },
  {
    name: "BF-BASIC'n",
    markSpec: new Z(Z.PRESETS.BFBASICn)
  },
  {
    name: "Misa",
    markSpec: new Z(Z.PRESETS.Misa)
  },
  {
    name: "BrainHakke",
    markSpec: new Z(Z.PRESETS.BrainHakke)
  },
  {
    name: "Gochiusa",
    markSpec: new Z(Z.PRESETS.Gochiusa)
  },
  {
    name: "NekoMimiFu*k",
    markSpec: new Z(Z.PRESETS.NekoMimi)
  },
  {
    name: "nico-lang",
    markSpec: new Z(Z.PRESETS.YazawaNico)
  },
  {
    name: "EiMun!",
    markSpec: new Z(Z.PRESETS.Eimun)
  },
  {
    name: "Custom"
  }
], be = typeof window < "u", al = be && "IntersectionObserver" in window;
function Ba(e, n, t) {
  const l = n.length - 1;
  if (l < 0) return e === void 0 ? t : e;
  for (let a = 0; a < l; a++) {
    if (e == null)
      return t;
    e = e[n[a]];
  }
  return e == null || e[n[l]] === void 0 ? t : e[n[l]];
}
function xt(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((l) => xt(e[l], n[l]));
}
function Ii(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), Ba(e, n.split("."), t));
}
function je(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const a = n(e, t);
    return typeof a > "u" ? t : a;
  }
  if (typeof n == "string") return Ii(e, n, t);
  if (Array.isArray(n)) return Ba(e, n, t);
  if (typeof n != "function") return t;
  const l = n(e, t);
  return typeof l > "u" ? t : l;
}
function J(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Ei(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ml(e) {
  let n;
  return e !== null && typeof e == "object" && ((n = Object.getPrototypeOf(e)) === Object.prototype || n === null);
}
function ol(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const Rl = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Bn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function il(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function Fl(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    n.some((i) => i instanceof RegExp ? i.test(o) : i === o) && !(t != null && t.some((i) => i === o)) ? l[o] = e[o] : a[o] = e[o];
  return [l, a];
}
function et(e, n) {
  const t = {
    ...e
  };
  return n.forEach((l) => delete t[l]), t;
}
function Ai(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const Ta = /^on[^a-z]/, sl = (e) => Ta.test(e), Bi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function xn(e) {
  const [n, t] = Fl(e, [Ta]), l = et(n, Bi), [a, o] = Fl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(o, l), [a, o];
}
function Le(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ti(e, n) {
  let t = 0;
  const l = function() {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    clearTimeout(t), t = setTimeout(() => e(...o), ke(n));
  };
  return l.clear = () => {
    clearTimeout(t);
  }, l.immediate = e, l;
}
function Ge(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function $l(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function Oi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let l = 0;
  for (; l < e.length; )
    t.push(e.substr(l, n)), l += n;
  return t;
}
function We() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in n) {
    const o = e[a], i = n[a];
    if (Ml(o) && Ml(i)) {
      l[a] = We(o, i, t);
      continue;
    }
    if (t && Array.isArray(o) && Array.isArray(i)) {
      l[a] = t(o, i);
      continue;
    }
    l[a] = i;
  }
  return l;
}
function Oa(e) {
  return e.map((n) => n.type === ie ? Oa(n.children) : n).flat();
}
function it() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (it.cache.has(e)) return it.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return it.cache.set(e, n), n;
}
it.cache = /* @__PURE__ */ new Map();
function It(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => It(e, t)).flat(1);
  if (n.suspense)
    return It(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => It(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return It(e, n.component.subTree).flat(1);
  }
  return [];
}
function rl(e) {
  const n = St({}), t = b(e);
  return Fe(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), _a(n);
}
function un(e, n) {
  return e.includes(n);
}
function La(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ve = () => [Function, Array];
function Nl(e, n) {
  return n = "on" + Ht(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Ma(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...t);
  else typeof e == "function" && e(...t);
}
function cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Ra(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const o = n === "next" ? 1 : -1;
  do
    a += o, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function At(e, n) {
  var l, a, o, i;
  const t = cn(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((l = t[0]) == null || l.focus());
  else if (n === "first")
    (a = t[0]) == null || a.focus();
  else if (n === "last")
    (o = t.at(-1)) == null || o.focus();
  else if (typeof n == "number")
    (i = t[n]) == null || i.focus();
  else {
    const s = Ra(t, n);
    s ? s.focus() : At(e, n === "next" ? "first" : "last");
  }
}
function dn(e, n) {
  if (!(be && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function Fa(e) {
  return e.some((n) => yi(n) ? n.type === hi ? !1 : n.type !== ie || Fa(n.children) : !0) ? e : null;
}
function Li(e, n) {
  if (!be || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function Mi(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), o = a.left, i = a.top, s = a.right, r = a.bottom;
  return t >= o && t <= s && l >= i && l <= r;
}
function Hn() {
  const e = Y(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ol(e.value)
  }), n;
}
function Dl(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
const $a = ["top", "bottom"], Ri = ["start", "end", "left", "right"];
function jn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = un($a, t) ? "start" : un(Ri, t) ? "top" : "center"), {
    side: zl(t, n),
    align: zl(l, n)
  };
}
function zl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function Tn(e) {
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
function On(e) {
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
function Hl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function jl(e) {
  return un($a, e.side) ? "y" : "x";
}
class st {
  constructor(n) {
    let {
      x: t,
      y: l,
      width: a,
      height: o
    } = n;
    this.x = t, this.y = l, this.width = a, this.height = o;
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
function Ul(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function Na(e) {
  return Array.isArray(e) ? new st({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function ul(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let a, o, i, s, r;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), o = +a[0], i = +a[5], s = +a[12], r = +a[13];
    else if (l.startsWith("matrix("))
      a = l.slice(7, -1).split(/, /), o = +a[0], i = +a[3], s = +a[4], r = +a[5];
    else
      return new st(n);
    const c = t.transformOrigin, m = n.x - s - (1 - o) * parseFloat(c), g = n.y - r - (1 - i) * parseFloat(c.slice(c.indexOf(" ") + 1)), d = o ? n.width / o : e.offsetWidth + 1, v = i ? n.height / i : e.offsetHeight + 1;
    return new st({
      x: m,
      y: g,
      width: d,
      height: v
    });
  } else
    return new st(n);
}
function bt(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let l;
  try {
    l = e.animate(n, t);
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
const ln = /* @__PURE__ */ new WeakMap();
function Fi(e, n) {
  Object.keys(n).forEach((t) => {
    if (sl(t)) {
      const l = La(t), a = ln.get(e);
      if (n[t] == null)
        a == null || a.forEach((o) => {
          const [i, s] = o;
          i === l && (e.removeEventListener(l, s), a.delete(o));
        });
      else if (!a || ![...a].some((o) => o[0] === l && o[1] === n[t])) {
        e.addEventListener(l, n[t]);
        const o = a || /* @__PURE__ */ new Set();
        o.add([l, n[t]]), ln.has(e) || ln.set(e, o);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function $i(e, n) {
  Object.keys(n).forEach((t) => {
    if (sl(t)) {
      const l = La(t), a = ln.get(e);
      a == null || a.forEach((o) => {
        const [i, s] = o;
        i === l && (e.removeEventListener(l, s), a.delete(o));
      });
    } else
      e.removeAttribute(t);
  });
}
const yt = 2.4, Wl = 0.2126729, Gl = 0.7151522, Kl = 0.072175, Ni = 0.55, Di = 0.58, zi = 0.57, Hi = 0.62, Jt = 0.03, ql = 1.45, ji = 5e-4, Ui = 1.25, Wi = 1.25, Yl = 0.078, Xl = 12.82051282051282, Zt = 0.06, Ql = 1e-3;
function Jl(e, n) {
  const t = (e.r / 255) ** yt, l = (e.g / 255) ** yt, a = (e.b / 255) ** yt, o = (n.r / 255) ** yt, i = (n.g / 255) ** yt, s = (n.b / 255) ** yt;
  let r = t * Wl + l * Gl + a * Kl, c = o * Wl + i * Gl + s * Kl;
  if (r <= Jt && (r += (Jt - r) ** ql), c <= Jt && (c += (Jt - c) ** ql), Math.abs(c - r) < ji) return 0;
  let m;
  if (c > r) {
    const g = (c ** Ni - r ** Di) * Ui;
    m = g < Ql ? 0 : g < Yl ? g - g * Xl * Zt : g - Zt;
  } else {
    const g = (c ** Hi - r ** zi) * Wi;
    m = g > -Ql ? 0 : g > -Yl ? g - g * Xl * Zt : g + Zt;
  }
  return m * 100;
}
function rt(e) {
  wn(`Vuetify: ${e}`);
}
function Da(e) {
  wn(`Vuetify error: ${e}`);
}
function Gi(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, wn(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function Un(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ki(e) {
  return Un(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Zl = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, qi = {
  rgb: (e, n, t, l) => ({
    r: e,
    g: n,
    b: t,
    a: l
  }),
  rgba: (e, n, t, l) => ({
    r: e,
    g: n,
    b: t,
    a: l
  }),
  hsl: (e, n, t, l) => ea({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsla: (e, n, t, l) => ea({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsv: (e, n, t, l) => Ot({
    h: e,
    s: n,
    v: t,
    a: l
  }),
  hsva: (e, n, t, l) => Ot({
    h: e,
    s: n,
    v: t,
    a: l
  })
};
function Et(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && rt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Zl.test(e)) {
    const {
      groups: n
    } = e.match(Zl), {
      fn: t,
      values: l
    } = n, a = l.split(/,\s*/).map((o) => o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(o) / 100 : parseFloat(o));
    return qi[t](...a);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || rt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && rt(`'${e}' is not a valid hex(a) color`), Yi(n);
  } else if (typeof e == "object") {
    if (Bn(e, ["r", "g", "b"]))
      return e;
    if (Bn(e, ["h", "s", "l"]))
      return Ot(za(e));
    if (Bn(e, ["h", "s", "v"]))
      return Ot(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Ot(e) {
  const {
    h: n,
    s: t,
    v: l,
    a
  } = e, o = (s) => {
    const r = (s + n / 60) % 6;
    return l - l * t * Math.max(Math.min(r, 4 - r, 1), 0);
  }, i = [o(5), o(3), o(1)].map((s) => Math.round(s * 255));
  return {
    r: i[0],
    g: i[1],
    b: i[2],
    a
  };
}
function ea(e) {
  return Ot(za(e));
}
function za(e) {
  const {
    h: n,
    s: t,
    l,
    a
  } = e, o = l + t * Math.min(l, 1 - l), i = o === 0 ? 0 : 2 - 2 * l / o;
  return {
    h: n,
    s: i,
    v: o,
    a
  };
}
function Yi(e) {
  e = Xi(e);
  let [n, t, l, a] = Oi(e, 2).map((o) => parseInt(o, 16));
  return a = a === void 0 ? a : a / 255, {
    r: n,
    g: t,
    b: l,
    a
  };
}
function Xi(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = $l($l(e, 6), 8, "F")), e;
}
function Qi(e) {
  const n = Math.abs(Jl(Et(0), Et(e)));
  return Math.abs(Jl(Et(16777215), Et(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function F(e, n) {
  return (t) => Object.keys(e).reduce((l, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : {
      type: e[a]
    };
    return t && a in t ? l[a] = {
      ...i,
      default: t[a]
    } : l[a] = i, n && !l[a].source && (l[a].source = n), l;
  }, {});
}
const ee = F({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function ge(e, n) {
  const t = bi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function $e() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ge(e).type;
  return it((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Ha = 0, an = /* @__PURE__ */ new WeakMap();
function Ne() {
  const e = ge("getUid");
  if (an.has(e)) return an.get(e);
  {
    const n = Ha++;
    return an.set(e, n), n;
  }
}
Ne.reset = () => {
  Ha = 0, an = /* @__PURE__ */ new WeakMap();
};
function Ji(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const fn = Symbol.for("vuetify:defaults");
function cl() {
  const e = ue(fn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function kt(e, n) {
  const t = cl(), l = R(e), a = b(() => {
    if (ke(n == null ? void 0 : n.disabled)) return t.value;
    const i = ke(n == null ? void 0 : n.scoped), s = ke(n == null ? void 0 : n.reset), r = ke(n == null ? void 0 : n.root);
    if (l.value == null && !(i || s || r)) return t.value;
    let c = We(l.value, {
      prev: t.value
    });
    if (i) return c;
    if (s || r) {
      const m = Number(s || 1 / 0);
      for (let g = 0; g <= m && !(!c || !("prev" in c)); g++)
        c = c.prev;
      return c && typeof r == "string" && r in c && (c = We(We(c, {
        prev: c
      }), c[r])), c;
    }
    return c.prev ? We(c.prev, c) : c;
  });
  return Ie(fn, a), a;
}
function Zi(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[it(n)]) < "u";
}
function es() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cl();
  const l = ge("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = b(() => {
    var r;
    return (r = t.value) == null ? void 0 : r[e._as ?? n];
  }), o = new Proxy(e, {
    get(r, c) {
      var g, d, v, f, y, h, S;
      const m = Reflect.get(r, c);
      return c === "class" || c === "style" ? [(g = a.value) == null ? void 0 : g[c], m].filter((k) => k != null) : typeof c == "string" && !Zi(l.vnode, c) ? ((d = a.value) == null ? void 0 : d[c]) !== void 0 ? (v = a.value) == null ? void 0 : v[c] : ((y = (f = t.value) == null ? void 0 : f.global) == null ? void 0 : y[c]) !== void 0 ? (S = (h = t.value) == null ? void 0 : h.global) == null ? void 0 : S[c] : m : m;
    }
  }), i = Y();
  Fe(() => {
    if (a.value) {
      const r = Object.entries(a.value).filter((c) => {
        let [m] = c;
        return m.startsWith(m[0].toUpperCase());
      });
      i.value = r.length ? Object.fromEntries(r) : void 0;
    } else
      i.value = void 0;
  });
  function s() {
    const r = Ji(fn, l);
    Ie(fn, b(() => i.value ? We((r == null ? void 0 : r.value) ?? {}, i.value) : r == null ? void 0 : r.value));
  }
  return {
    props: o,
    provideSubDefaults: s
  };
}
function jt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return rt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = F(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return il(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const o = cl();
      if (!o.value) return e._setup(l, a);
      const {
        props: i,
        provideSubDefaults: s
      } = es(l, l._as ?? e.name, o), r = e._setup(i, a);
      return s(), r;
    };
  }
  return e;
}
function W() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? jt : el)(n);
}
function ts(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return W()({
    name: t ?? Ht(Ia(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...ee()
    },
    setup(l, a) {
      let {
        slots: o
      } = a;
      return () => {
        var i;
        return wt(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (i = o.default) == null ? void 0 : i.call(o));
      };
    }
  });
}
function ja(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const vn = "cubic-bezier(0.4, 0, 0.2, 1)", ns = "cubic-bezier(0.0, 0, 0.2, 1)", ls = "cubic-bezier(0.4, 0, 1, 1)";
function Ua(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? as(e) : dl(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function mn(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (dl(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function dl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function as(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function os(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Q(e) {
  const n = ge("useRender");
  n.render = e;
}
const ft = F({
  border: [Boolean, Number, String]
}, "border");
function vt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  return {
    borderClasses: b(() => {
      const l = Ct(e) ? e.value : e.border, a = [];
      if (l === !0 || l === "")
        a.push(`${n}--border`);
      else if (typeof l == "string" || l === 0)
        for (const o of String(l).split(" "))
          a.push(`border-${o}`);
      return a;
    })
  };
}
const is = [null, "default", "comfortable", "compact"], tt = F({
  density: {
    type: String,
    default: "default",
    validator: (e) => is.includes(e)
  }
}, "density");
function nt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  return {
    densityClasses: b(() => `${n}--density-${e.density}`)
  };
}
const mt = F({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function gt(e) {
  return {
    elevationClasses: b(() => {
      const t = Ct(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
const Be = F({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Te(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  return {
    roundedClasses: b(() => {
      const l = Ct(e) ? e.value : e.rounded, a = Ct(e) ? e.value : e.tile, o = [];
      if (l === !0 || l === "")
        o.push(`${n}--rounded`);
      else if (typeof l == "string" || l === 0)
        for (const i of String(l).split(" "))
          o.push(`rounded-${i}`);
      else (a || l === !1) && o.push("rounded-0");
      return o;
    })
  };
}
const de = F({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), ta = Symbol.for("vuetify:theme"), ye = F({
  theme: String
}, "theme");
function pe(e) {
  ge("provideTheme");
  const n = ue(ta, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = b(() => e.theme ?? n.name.value), l = b(() => n.themes.value[t.value]), a = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return Ie(ta, o), o;
}
function fl(e) {
  return rl(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Un(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Ki(e.value.background)) {
          const l = Et(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = Qi(l);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Un(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function Ke(e, n) {
  const t = b(() => ({
    text: Ct(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = fl(t);
  return {
    textColorClasses: l,
    textColorStyles: a
  };
}
function Me(e, n) {
  const t = b(() => ({
    background: Ct(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = fl(t);
  return {
    backgroundColorClasses: l,
    backgroundColorStyles: a
  };
}
const ss = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ut(e, n) {
  return u(ie, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const lt = F({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => ss.includes(e)
  }
}, "variant");
function Wt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  const t = b(() => {
    const {
      variant: o
    } = ke(e);
    return `${n}--variant-${o}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = fl(b(() => {
    const {
      variant: o,
      color: i
    } = ke(e);
    return {
      [["elevated", "flat"].includes(o) ? "background" : "text"]: i
    };
  }));
  return {
    colorClasses: l,
    colorStyles: a,
    variantClasses: t
  };
}
const Wa = F({
  baseColor: String,
  divided: Boolean,
  ...ft(),
  ...ee(),
  ...tt(),
  ...mt(),
  ...Be(),
  ...de(),
  ...ye(),
  ...lt()
}, "VBtnGroup"), na = W()({
  name: "VBtnGroup",
  props: Wa(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = pe(e), {
      densityClasses: a
    } = nt(e), {
      borderClasses: o
    } = vt(e), {
      elevationClasses: i
    } = gt(e), {
      roundedClasses: s
    } = Te(e);
    kt({
      VBtn: {
        height: "auto",
        baseColor: H(e, "baseColor"),
        color: H(e, "color"),
        density: H(e, "density"),
        flat: !0,
        variant: H(e, "variant")
      }
    }), Q(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, l.value, o.value, a.value, i.value, s.value, e.class],
      style: e.style
    }, t));
  }
});
function Je(e, n) {
  let t;
  function l() {
    t = tl(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  K(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), xe(() => {
    t == null || t.stop();
  });
}
function ce(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const o = ge("useProxiedModel"), i = R(e[n] !== void 0 ? e[n] : t), s = it(n), c = s !== n ? b(() => {
    var g, d, v, f;
    return e[n], !!(((g = o.vnode.props) != null && g.hasOwnProperty(n) || (d = o.vnode.props) != null && d.hasOwnProperty(s)) && ((v = o.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`) || (f = o.vnode.props) != null && f.hasOwnProperty(`onUpdate:${s}`)));
  }) : b(() => {
    var g, d;
    return e[n], !!((g = o.vnode.props) != null && g.hasOwnProperty(n) && ((d = o.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`)));
  });
  Je(() => !c.value, () => {
    K(() => e[n], (g) => {
      i.value = g;
    });
  });
  const m = b({
    get() {
      const g = e[n];
      return l(c.value ? g : i.value);
    },
    set(g) {
      const d = a(g), v = me(c.value ? e[n] : i.value);
      v === d || l(v) === g || (i.value = d, o == null || o.emit(`update:${n}`, d));
    }
  });
  return Object.defineProperty(m, "externalValue", {
    get: () => c.value ? e[n] : i.value
  }), m;
}
const kn = F({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), vl = F({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function ml(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const l = ge("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Ne();
  Ie(Symbol.for(`${n.description}:id`), a);
  const o = ue(n, null);
  if (!o) {
    if (!t) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const i = H(e, "value"), s = b(() => !!(o.disabled.value || e.disabled));
  o.register({
    id: a,
    value: i,
    disabled: s
  }, l), Re(() => {
    o.unregister(a);
  });
  const r = b(() => o.isSelected(a)), c = b(() => o.items.value[0].id === a), m = b(() => o.items.value[o.items.value.length - 1].id === a), g = b(() => r.value && [o.selectedClass.value, e.selectedClass]);
  return K(r, (d) => {
    l.emit("group:selected", {
      value: d
    });
  }, {
    flush: "sync"
  }), {
    id: a,
    isSelected: r,
    isFirst: c,
    isLast: m,
    toggle: () => o.select(a, !r.value),
    select: (d) => o.select(a, d),
    selectedClass: g,
    value: i,
    disabled: s,
    group: o
  };
}
function Vn(e, n) {
  let t = !1;
  const l = St([]), a = ce(e, "modelValue", [], (d) => d == null ? [] : Ga(l, Le(d)), (d) => {
    const v = us(l, d);
    return e.multiple ? v : v[0];
  }), o = ge("useGroup");
  function i(d, v) {
    const f = d, y = Symbol.for(`${n.description}:id`), S = It(y, o == null ? void 0 : o.vnode).indexOf(v);
    ke(f.value) == null && (f.value = S, f.useIndexAsValue = !0), S > -1 ? l.splice(S, 0, f) : l.push(f);
  }
  function s(d) {
    if (t) return;
    r();
    const v = l.findIndex((f) => f.id === d);
    l.splice(v, 1);
  }
  function r() {
    const d = l.find((v) => !v.disabled);
    d && e.mandatory === "force" && !a.value.length && (a.value = [d.id]);
  }
  ct(() => {
    r();
  }), Re(() => {
    t = !0;
  }), Si(() => {
    for (let d = 0; d < l.length; d++)
      l[d].useIndexAsValue && (l[d].value = d);
  });
  function c(d, v) {
    const f = l.find((y) => y.id === d);
    if (!(v && (f != null && f.disabled)))
      if (e.multiple) {
        const y = a.value.slice(), h = y.findIndex((k) => k === d), S = ~h;
        if (v = v ?? !S, S && e.mandatory && y.length <= 1 || !S && e.max != null && y.length + 1 > e.max) return;
        h < 0 && v ? y.push(d) : h >= 0 && !v && y.splice(h, 1), a.value = y;
      } else {
        const y = a.value.includes(d);
        if (e.mandatory && y) return;
        a.value = v ?? !y ? [d] : [];
      }
  }
  function m(d) {
    if (e.multiple && rt('This method is not supported when using "multiple" prop'), a.value.length) {
      const v = a.value[0], f = l.findIndex((S) => S.id === v);
      let y = (f + d) % l.length, h = l[y];
      for (; h.disabled && y !== f; )
        y = (y + d) % l.length, h = l[y];
      if (h.disabled) return;
      a.value = [l[y].id];
    } else {
      const v = l.find((f) => !f.disabled);
      v && (a.value = [v.id]);
    }
  }
  const g = {
    register: i,
    unregister: s,
    selected: a,
    select: c,
    disabled: H(e, "disabled"),
    prev: () => m(l.length - 1),
    next: () => m(1),
    isSelected: (d) => a.value.includes(d),
    selectedClass: b(() => e.selectedClass),
    items: b(() => l),
    getItemIndex: (d) => rs(l, d)
  };
  return Ie(n, g), g;
}
function rs(e, n) {
  const t = Ga(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function Ga(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((i) => xt(l, i.value)), o = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : o != null && t.push(o.id);
  }), t;
}
function us(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((o) => o.id === l);
    if (~a) {
      const o = e[a];
      t.push(o.value != null ? o.value : a);
    }
  }), t;
}
const Ka = Symbol.for("vuetify:v-btn-toggle"), cs = F({
  ...Wa(),
  ...kn()
}, "VBtnToggle");
W()({
  name: "VBtnToggle",
  props: cs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: l,
      next: a,
      prev: o,
      select: i,
      selected: s
    } = Vn(e, Ka);
    return Q(() => {
      const r = na.filterProps(e);
      return u(na, X({
        class: ["v-btn-toggle", e.class]
      }, r, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: l,
            next: a,
            prev: o,
            select: i,
            selected: s
          })];
        }
      });
    }), {
      next: a,
      prev: o,
      select: i
    };
  }
});
const ds = F({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Se = W(!1)({
  name: "VDefaultsProvider",
  props: ds(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: l,
      disabled: a,
      reset: o,
      root: i,
      scoped: s
    } = _a(e);
    return kt(l, {
      reset: o,
      root: i,
      scoped: s,
      disabled: a
    }), () => {
      var r;
      return (r = t.default) == null ? void 0 : r.call(t);
    };
  }
}), se = [String, Function, Object, Array], fs = Symbol.for("vuetify:icons"), Pn = F({
  icon: {
    type: se
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), la = W()({
  name: "VComponentIcon",
  props: Pn(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const l = e.icon;
      return u(e.tag, null, {
        default: () => {
          var a;
          return [e.icon ? u(l, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
        }
      });
    };
  }
}), vs = jt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Pn(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => u(e.tag, X(t, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? u("path", {
        d: l[0],
        "fill-opacity": l[1]
      }, null) : u("path", {
        d: l
      }, null)) : u("path", {
        d: e.icon
      }, null)])]
    });
  }
});
jt({
  name: "VLigatureIcon",
  props: Pn(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
jt({
  name: "VClassIcon",
  props: Pn(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const ms = (e) => {
  const n = ue(fs);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      var r;
      const l = ke(e);
      if (!l) return {
        component: la
      };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (r = n.aliases) == null ? void 0 : r[a.slice(1)])), a || rt(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: vs,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: la,
          icon: a
        };
      const o = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), i = o ? a.slice(o.length + 1) : a;
      return {
        component: n.sets[o ?? n.defaultSet].component,
        icon: i
      };
    })
  };
}, gs = ["x-small", "small", "default", "large", "x-large"], Gt = F({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Kt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  return rl(() => {
    let t, l;
    return un(gs, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: J(e.size),
      height: J(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const ys = F({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: se,
  ...ee(),
  ...Gt(),
  ...de({
    tag: "i"
  }),
  ...ye()
}, "VIcon"), Ce = W()({
  name: "VIcon",
  props: ys(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = R(), {
      themeClasses: o
    } = pe(e), {
      iconData: i
    } = ms(b(() => a.value || e.icon)), {
      sizeClasses: s
    } = Kt(e), {
      textColorClasses: r,
      textColorStyles: c
    } = Ke(H(e, "color"));
    return Q(() => {
      var d, v;
      const m = (d = l.default) == null ? void 0 : d.call(l);
      m && (a.value = (v = Oa(m).filter((f) => f.type === Ci && f.children && typeof f.children == "string")[0]) == null ? void 0 : v.children);
      const g = !!(t.onClick || t.onClickOnce);
      return u(i.value.component, {
        tag: e.tag,
        icon: i.value.icon,
        class: ["v-icon", "notranslate", o.value, s.value, r.value, {
          "v-icon--clickable": g,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [s.value ? void 0 : {
          fontSize: J(e.size),
          height: J(e.size),
          width: J(e.size)
        }, c.value, e.style],
        role: g ? "button" : void 0,
        "aria-hidden": !g,
        tabindex: g ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [m]
      });
    }), {};
  }
});
function qa(e, n) {
  const t = R(), l = Y(!1);
  if (al) {
    const a = new IntersectionObserver((o) => {
      l.value = !!o.find((i) => i.isIntersecting);
    }, n);
    Re(() => {
      a.disconnect();
    }), K(t, (o, i) => {
      i && (a.unobserve(i), l.value = !1), o && a.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: l
  };
}
function Lt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = Hn(), l = R();
  if (be) {
    const a = new ResizeObserver((o) => {
      o.length && (n === "content" ? l.value = o[0].contentRect : l.value = o[0].target.getBoundingClientRect());
    });
    Re(() => {
      a.disconnect();
    }), K(() => t.el, (o, i) => {
      i && (a.unobserve(i), l.value = void 0), o && a.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: nl(l)
  };
}
const hs = F({
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
  ...ee(),
  ...Gt(),
  ...de({
    tag: "div"
  }),
  ...ye()
}, "VProgressCircular"), bs = W()({
  name: "VProgressCircular",
  props: hs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = 20, a = 2 * Math.PI * l, o = R(), {
      themeClasses: i
    } = pe(e), {
      sizeClasses: s,
      sizeStyles: r
    } = Kt(e), {
      textColorClasses: c,
      textColorStyles: m
    } = Ke(H(e, "color")), {
      textColorClasses: g,
      textColorStyles: d
    } = Ke(H(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: f
    } = qa(), {
      resizeRef: y,
      contentRect: h
    } = Lt(), S = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = b(() => Number(e.width)), A = b(() => r.value ? Number(e.size) : h.value ? h.value.width : Math.max(k.value, 32)), E = b(() => l / (1 - k.value / A.value) * 2), T = b(() => k.value / A.value * E.value), B = b(() => J((100 - S.value) / 100 * a));
    return Fe(() => {
      v.value = o.value, y.value = o.value;
    }), Q(() => u(e.tag, {
      ref: o,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": f.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, i.value, s.value, c.value, e.class],
      style: [r.value, m.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${E.value} ${E.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", g.value],
        style: d.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: l,
        "stroke-width": T.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: l,
        "stroke-width": T.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": B.value
      }, null)]), t.default && u("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: S.value
      })])]
    })), {};
  }
}), De = F({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ze(e) {
  return {
    dimensionStyles: b(() => {
      const t = {}, l = J(e.height), a = J(e.maxHeight), o = J(e.maxWidth), i = J(e.minHeight), s = J(e.minWidth), r = J(e.width);
      return l != null && (t.height = l), a != null && (t.maxHeight = a), o != null && (t.maxWidth = o), i != null && (t.minHeight = i), s != null && (t.minWidth = s), r != null && (t.width = r), t;
    })
  };
}
const Ya = Symbol.for("vuetify:locale");
function gl() {
  const e = ue(Ya);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function qe() {
  const e = ue(Ya);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const aa = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, _n = F({
  location: String
}, "location");
function yl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = qe();
  return {
    locationStyles: b(() => {
      if (!e.location) return {};
      const {
        side: o,
        align: i
      } = jn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function s(c) {
        return t ? t(c) : 0;
      }
      const r = {};
      return o !== "center" && (n ? r[aa[o]] = `calc(100% - ${s(o)}px)` : r[o] = 0), i !== "center" ? n ? r[aa[i]] = `calc(100% - ${s(i)}px)` : r[i] = 0 : (o === "center" ? r.top = r.left = "50%" : r[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[o]] = "50%", r.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[o]), r;
    })
  };
}
const Ss = F({
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
  ...ee(),
  ..._n({
    location: "top"
  }),
  ...Be(),
  ...de(),
  ...ye()
}, "VProgressLinear"), Xa = W()({
  name: "VProgressLinear",
  props: Ss(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var V;
    let {
      slots: t
    } = n;
    const l = ce(e, "modelValue"), {
      isRtl: a,
      rtlClasses: o
    } = qe(), {
      themeClasses: i
    } = pe(e), {
      locationStyles: s
    } = yl(e), {
      textColorClasses: r,
      textColorStyles: c
    } = Ke(e, "color"), {
      backgroundColorClasses: m,
      backgroundColorStyles: g
    } = Me(b(() => e.bgColor || e.color)), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = Me(b(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: f,
      backgroundColorStyles: y
    } = Me(e, "color"), {
      roundedClasses: h
    } = Te(e), {
      intersectionRef: S,
      isIntersecting: k
    } = qa(), A = b(() => parseFloat(e.max)), E = b(() => parseFloat(e.height)), T = b(() => Ge(parseFloat(e.bufferValue) / A.value * 100, 0, 100)), B = b(() => Ge(parseFloat(l.value) / A.value * 100, 0, 100)), _ = b(() => a.value !== e.reverse), P = b(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), D = be && ((V = window.matchMedia) == null ? void 0 : V.call(window, "(forced-colors: active)").matches);
    function U(w) {
      if (!S.value) return;
      const {
        left: x,
        right: I,
        width: O
      } = S.value.getBoundingClientRect(), M = _.value ? O - w.clientX + (I - O) : w.clientX - x;
      l.value = Math.round(M / O * A.value);
    }
    return Q(() => u(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": _.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, h.value, i.value, o.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? J(E.value) : 0,
        "--v-progress-linear-height": J(E.value),
        ...e.absolute ? s.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : B.value,
      onClick: e.clickable && U
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", r.value],
        style: {
          ...c.value,
          [_.value ? "left" : "right"]: J(-E.value),
          borderTop: `${J(E.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${J(E.value / 4)})`,
          width: J(100 - T.value, "%"),
          "--v-progress-linear-stream-to": J(E.value * (_.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", D ? void 0 : m.value],
        style: [g.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", D ? void 0 : d.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: J(T.value, "%")
        }]
      }, null), u(ut, {
        name: P.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((w) => u("div", {
          key: w,
          class: ["v-progress-linear__indeterminate", w, D ? void 0 : f.value],
          style: y.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", D ? void 0 : f.value],
          style: [y.value, {
            width: J(B.value, "%")
          }]
        }, null)]
      }), t.default && u("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: B.value,
        buffer: T.value
      })])]
    })), {};
  }
}), Qa = F({
  loading: [Boolean, String]
}, "loader");
function Ja(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  return {
    loaderClasses: b(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function Cs(e, n) {
  var l;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((l = t.default) == null ? void 0 : l.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(Xa, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const ps = ["static", "relative", "fixed", "absolute", "sticky"], hl = F({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => ps.includes(e)
    )
  }
}, "position");
function bl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  return {
    positionClasses: b(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function ws() {
  const e = ge("useRoute");
  return b(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function xs() {
  var e, n;
  return (n = (e = ge("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function Sl(e, n) {
  var g, d;
  const t = pi("RouterLink"), l = b(() => !!(e.href || e.to)), a = b(() => (l == null ? void 0 : l.value) || Nl(n, "click") || Nl(e, "click"));
  if (typeof t == "string" || !("useLink" in t)) {
    const v = H(e, "href");
    return {
      isLink: l,
      isClickable: a,
      href: v,
      linkProps: St({
        href: v
      })
    };
  }
  const o = b(() => ({
    ...e,
    to: H(() => e.to || "")
  })), i = t.useLink(o.value), s = b(() => e.to ? i : void 0), r = ws(), c = b(() => {
    var v, f, y;
    return s.value ? e.exact ? r.value ? ((y = s.value.isExactActive) == null ? void 0 : y.value) && xt(s.value.route.value.query, r.value.query) : ((f = s.value.isExactActive) == null ? void 0 : f.value) ?? !1 : ((v = s.value.isActive) == null ? void 0 : v.value) ?? !1 : !1;
  }), m = b(() => {
    var v;
    return e.to ? (v = s.value) == null ? void 0 : v.route.value.href : e.href;
  });
  return {
    isLink: l,
    isClickable: a,
    isActive: c,
    route: (g = s.value) == null ? void 0 : g.route,
    navigate: (d = s.value) == null ? void 0 : d.navigate,
    href: m,
    linkProps: St({
      href: m,
      "aria-current": b(() => c.value ? "page" : void 0)
    })
  };
}
const Cl = F({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Ln = !1;
function ks(e, n) {
  let t = !1, l, a;
  be && (he(() => {
    window.addEventListener("popstate", o), l = e == null ? void 0 : e.beforeEach((i, s, r) => {
      Ln ? t ? n(r) : r() : setTimeout(() => t ? n(r) : r()), Ln = !0;
    }), a = e == null ? void 0 : e.afterEach(() => {
      Ln = !1;
    });
  }), xe(() => {
    window.removeEventListener("popstate", o), l == null || l(), a == null || a();
  }));
  function o(i) {
    var s;
    (s = i.state) != null && s.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function Vs(e, n) {
  K(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && he(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const Wn = Symbol("rippleStop"), Ps = 80;
function oa(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Gn(e) {
  return e.constructor.name === "TouchEvent";
}
function Za(e) {
  return e.constructor.name === "KeyboardEvent";
}
const _s = function(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!Za(e)) {
    const d = n.getBoundingClientRect(), v = Gn(e) ? e.touches[e.touches.length - 1] : e;
    l = v.clientX - d.left, a = v.clientY - d.top;
  }
  let o = 0, i = 0.3;
  (g = n._ripple) != null && g.circle ? (i = 0.15, o = n.clientWidth / 2, o = t.center ? o : o + Math.sqrt((l - o) ** 2 + (a - o) ** 2) / 4) : o = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const s = `${(n.clientWidth - o * 2) / 2}px`, r = `${(n.clientHeight - o * 2) / 2}px`, c = t.center ? s : `${l - o}px`, m = t.center ? r : `${a - o}px`;
  return {
    radius: o,
    scale: i,
    x: c,
    y: m,
    centerX: s,
    centerY: r
  };
}, gn = {
  /* eslint-disable max-statements */
  show(e, n) {
    var v;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = n == null ? void 0 : n._ripple) != null && v.enabled))
      return;
    const l = document.createElement("span"), a = document.createElement("span");
    l.appendChild(a), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
    const {
      radius: o,
      scale: i,
      x: s,
      y: r,
      centerX: c,
      centerY: m
    } = _s(e, n, t), g = `${o * 2}px`;
    a.className = "v-ripple__animation", a.style.width = g, a.style.height = g, n.appendChild(l);
    const d = window.getComputedStyle(n);
    d && d.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), oa(a, `translate(${s}, ${r}) scale3d(${i},${i},${i})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), oa(a, `translate(${c}, ${m}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var o;
    if (!((o = e == null ? void 0 : e._ripple) != null && o.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const l = performance.now() - Number(t.dataset.activated), a = Math.max(250 - l, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var s;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((s = t.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, a);
  }
};
function eo(e) {
  return typeof e > "u" || !!e;
}
function Mt(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Wn])) {
    if (e[Wn] = !0, Gn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || Za(e), t._ripple.class && (n.class = t._ripple.class), Gn(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        gn.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Ps);
    } else
      gn.show(e, t, n);
  }
}
function ia(e) {
  e[Wn] = !0;
}
function _e(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        _e(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), gn.hide(n);
  }
}
function to(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Rt = !1;
function no(e) {
  !Rt && (e.keyCode === Rl.enter || e.keyCode === Rl.space) && (Rt = !0, Mt(e));
}
function lo(e) {
  Rt = !1, _e(e);
}
function ao(e) {
  Rt && (Rt = !1, _e(e));
}
function oo(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, o = eo(l);
  if (o || gn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = a.center, e._ripple.circle = a.circle, Ei(l) && l.class && (e._ripple.class = l.class), o && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", ia, {
        passive: !0
      }), e.addEventListener("mousedown", ia);
      return;
    }
    e.addEventListener("touchstart", Mt, {
      passive: !0
    }), e.addEventListener("touchend", _e, {
      passive: !0
    }), e.addEventListener("touchmove", to, {
      passive: !0
    }), e.addEventListener("touchcancel", _e), e.addEventListener("mousedown", Mt), e.addEventListener("mouseup", _e), e.addEventListener("mouseleave", _e), e.addEventListener("keydown", no), e.addEventListener("keyup", lo), e.addEventListener("blur", ao), e.addEventListener("dragstart", _e, {
      passive: !0
    });
  } else !o && t && io(e);
}
function io(e) {
  e.removeEventListener("mousedown", Mt), e.removeEventListener("touchstart", Mt), e.removeEventListener("touchend", _e), e.removeEventListener("touchmove", to), e.removeEventListener("touchcancel", _e), e.removeEventListener("mouseup", _e), e.removeEventListener("mouseleave", _e), e.removeEventListener("keydown", no), e.removeEventListener("keyup", lo), e.removeEventListener("dragstart", _e), e.removeEventListener("blur", ao);
}
function Is(e, n) {
  oo(e, n, !1);
}
function Es(e) {
  delete e._ripple, io(e);
}
function As(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = eo(n.oldValue);
  oo(e, n, t);
}
const qt = {
  mounted: Is,
  unmounted: Es,
  updated: As
}, Bs = F({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Ka
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: se,
  appendIcon: se,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...ft(),
  ...ee(),
  ...tt(),
  ...De(),
  ...mt(),
  ...vl(),
  ...Qa(),
  ..._n(),
  ...hl(),
  ...Be(),
  ...Cl(),
  ...Gt(),
  ...de({
    tag: "button"
  }),
  ...ye(),
  ...lt({
    variant: "elevated"
  })
}, "VBtn"), Bt = W()({
  name: "VBtn",
  props: Bs(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = pe(e), {
      borderClasses: o
    } = vt(e), {
      densityClasses: i
    } = nt(e), {
      dimensionStyles: s
    } = ze(e), {
      elevationClasses: r
    } = gt(e), {
      loaderClasses: c
    } = Ja(e), {
      locationStyles: m
    } = yl(e), {
      positionClasses: g
    } = bl(e), {
      roundedClasses: d
    } = Te(e), {
      sizeClasses: v,
      sizeStyles: f
    } = Kt(e), y = ml(e, e.symbol, !1), h = Sl(e, t), S = b(() => {
      var V;
      return e.active !== void 0 ? e.active : h.isLink.value ? (V = h.isActive) == null ? void 0 : V.value : y == null ? void 0 : y.isSelected.value;
    }), k = b(() => S.value ? e.activeColor ?? e.color : e.color), A = b(() => {
      var w, x;
      return {
        color: (y == null ? void 0 : y.isSelected.value) && (!h.isLink.value || ((w = h.isActive) == null ? void 0 : w.value)) || !y || ((x = h.isActive) == null ? void 0 : x.value) ? k.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: E,
      colorStyles: T,
      variantClasses: B
    } = Wt(A), _ = b(() => (y == null ? void 0 : y.disabled.value) || e.disabled), P = b(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), D = b(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function U(V) {
      var w;
      _.value || h.isLink.value && (V.metaKey || V.ctrlKey || V.shiftKey || V.button !== 0 || t.target === "_blank") || ((w = h.navigate) == null || w.call(h, V), y == null || y.toggle());
    }
    return Vs(h, y == null ? void 0 : y.select), Q(() => {
      const V = h.isLink.value ? "a" : e.tag, w = !!(e.prependIcon || l.prepend), x = !!(e.appendIcon || l.append), I = !!(e.icon && e.icon !== !0);
      return we(u(V, X({
        type: V === "a" ? void 0 : "button",
        class: ["v-btn", y == null ? void 0 : y.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": _.value,
          "v-btn--elevated": P.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, a.value, o.value, E.value, i.value, r.value, c.value, g.value, d.value, v.value, B.value, e.class],
        style: [T.value, s.value, m.value, f.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: _.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: U,
        value: D.value
      }, h.linkProps), {
        default: () => {
          var O;
          return [Ut(!0, "v-btn"), !e.icon && w && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [l.prepend ? u(Se, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, l.prepend) : u(Ce, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!l.default && I ? u(Ce, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(Se, {
            key: "content-defaults",
            disabled: !I,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var M;
              return [((M = l.default) == null ? void 0 : M.call(l)) ?? e.text];
            }
          })]), !e.icon && x && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [l.append ? u(Se, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, l.append) : u(Ce, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((O = l.loader) == null ? void 0 : O.call(l)) ?? u(bs, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[qt, !_.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: y
    };
  }
}), Ft = Symbol.for("vuetify:v-expansion-panel"), Ts = F({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Ee(e, n, t) {
  return W()({
    name: e,
    props: Ts({
      mode: t,
      origin: n
    }),
    setup(l, a) {
      let {
        slots: o
      } = a;
      const i = {
        onBeforeEnter(s) {
          l.origin && (s.style.transformOrigin = l.origin);
        },
        onLeave(s) {
          if (l.leaveAbsolute) {
            const {
              offsetTop: r,
              offsetLeft: c,
              offsetWidth: m,
              offsetHeight: g
            } = s;
            s._transitionInitialStyles = {
              position: s.style.position,
              top: s.style.top,
              left: s.style.left,
              width: s.style.width,
              height: s.style.height
            }, s.style.position = "absolute", s.style.top = `${r}px`, s.style.left = `${c}px`, s.style.width = `${m}px`, s.style.height = `${g}px`;
          }
          l.hideOnLeave && s.style.setProperty("display", "none", "important");
        },
        onAfterLeave(s) {
          if (l.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
            const {
              position: r,
              top: c,
              left: m,
              width: g,
              height: d
            } = s._transitionInitialStyles;
            delete s._transitionInitialStyles, s.style.position = r || "", s.style.top = c || "", s.style.left = m || "", s.style.width = g || "", s.style.height = d || "";
          }
        }
      };
      return () => {
        const s = l.group ? ll : ut;
        return wt(s, {
          name: l.disabled ? "" : e,
          css: !l.disabled,
          ...l.group ? void 0 : {
            mode: l.mode
          },
          ...l.disabled ? {} : i
        }, o.default);
      };
    }
  });
}
function so(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return W()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(l, a) {
      let {
        slots: o
      } = a;
      const i = l.group ? ll : ut;
      return () => wt(i, {
        name: l.disabled ? "" : e,
        css: !l.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...l.disabled ? {} : n
      }, o.default);
    }
  });
}
function ro() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = Ia(`offset-${t}`);
  return {
    onBeforeEnter(i) {
      i._parent = i.parentNode, i._initialStyle = {
        transition: i.style.transition,
        overflow: i.style.overflow,
        [t]: i.style[t]
      };
    },
    onEnter(i) {
      const s = i._initialStyle;
      i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
      const r = `${i[l]}px`;
      i.style[t] = "0", i.offsetHeight, i.style.transition = s.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
        i.style[t] = r;
      });
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(i) {
      i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        [t]: i.style[t]
      }, i.style.overflow = "hidden", i.style[t] = `${i[l]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[t] = "0");
    },
    onAfterLeave: a,
    onLeaveCancelled: a
  };
  function a(i) {
    e && i._parent && i._parent.classList.remove(e), o(i);
  }
  function o(i) {
    const s = i._initialStyle[t];
    i.style.overflow = i._initialStyle.overflow, s != null && (i.style[t] = s), delete i._initialStyle;
  }
}
const Os = F({
  target: [Object, Array]
}, "v-dialog-transition"), uo = W()({
  name: "VDialogTransition",
  props: Os(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = {
      onBeforeEnter(a) {
        a.style.pointerEvents = "none", a.style.visibility = "hidden";
      },
      async onEnter(a, o) {
        var d;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), a.style.visibility = "";
        const {
          x: i,
          y: s,
          sx: r,
          sy: c,
          speed: m
        } = ra(e.target, a), g = bt(a, [{
          transform: `translate(${i}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * m,
          easing: ns
        });
        (d = sa(a)) == null || d.forEach((v) => {
          bt(v, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * m,
            easing: vn
          });
        }), g.finished.then(() => o());
      },
      onAfterEnter(a) {
        a.style.removeProperty("pointer-events");
      },
      onBeforeLeave(a) {
        a.style.pointerEvents = "none";
      },
      async onLeave(a, o) {
        var d;
        await new Promise((v) => requestAnimationFrame(v));
        const {
          x: i,
          y: s,
          sx: r,
          sy: c,
          speed: m
        } = ra(e.target, a);
        bt(a, [{}, {
          transform: `translate(${i}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * m,
          easing: ls
        }).finished.then(() => o()), (d = sa(a)) == null || d.forEach((v) => {
          bt(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * m,
            easing: vn
          });
        });
      },
      onAfterLeave(a) {
        a.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(ut, X({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), t) : u(ut, {
      name: "dialog-transition"
    }, t);
  }
});
function sa(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function ra(e, n) {
  const t = Na(e), l = ul(n), [a, o] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [i, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let r = t.left + t.width / 2;
  i === "left" || s === "left" ? r -= t.width / 2 : (i === "right" || s === "right") && (r += t.width / 2);
  let c = t.top + t.height / 2;
  i === "top" || s === "top" ? c -= t.height / 2 : (i === "bottom" || s === "bottom") && (c += t.height / 2);
  const m = t.width / l.width, g = t.height / l.height, d = Math.max(1, m, g), v = m / d || 0, f = g / d || 0, y = l.width * l.height / (window.innerWidth * window.innerHeight), h = y > 0.12 ? Math.min(1.5, (y - 0.12) * 10 + 1) : 1;
  return {
    x: r - (a + l.left),
    y: c - (o + l.top),
    sx: v,
    sy: f,
    speed: h
  };
}
Ee("fab-transition", "center center", "out-in");
Ee("dialog-bottom-transition");
Ee("dialog-top-transition");
const ua = Ee("fade-transition");
Ee("scale-transition");
Ee("scroll-x-transition");
Ee("scroll-x-reverse-transition");
Ee("scroll-y-transition");
Ee("scroll-y-reverse-transition");
Ee("slide-x-transition");
Ee("slide-x-reverse-transition");
const co = Ee("slide-y-transition");
Ee("slide-y-reverse-transition");
const fo = so("expand-transition", ro()), vo = so("expand-x-transition", ro("", !0)), mo = F({
  eager: Boolean
}, "lazy");
function go(e, n) {
  const t = Y(!1), l = b(() => t.value || e.eager || n.value);
  K(n, () => t.value = !0);
  function a() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: l,
    onAfterLeave: a
  };
}
const yo = F({
  ...ee(),
  ...mo()
}, "VExpansionPanelText"), yn = W()({
  name: "VExpansionPanelText",
  props: yo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(Ft);
    if (!l) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: a,
      onAfterLeave: o
    } = go(e, l.isSelected);
    return Q(() => u(fo, {
      onAfterLeave: o
    }, {
      default: () => {
        var i;
        return [we(u("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && a.value && u("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(i = t.default) == null ? void 0 : i.call(t)])]), [[dt, l.isSelected.value]])];
      }
    })), {};
  }
}), ho = F({
  color: String,
  expandIcon: {
    type: se,
    default: "$expand"
  },
  collapseIcon: {
    type: se,
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
  ...ee(),
  ...De()
}, "VExpansionPanelTitle"), ca = W()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: qt
  },
  props: ho(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(Ft);
    if (!l) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: o
    } = Me(e, "color"), {
      dimensionStyles: i
    } = ze(e), s = b(() => ({
      collapseIcon: e.collapseIcon,
      disabled: l.disabled.value,
      expanded: l.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), r = b(() => l.isSelected.value ? e.collapseIcon : e.expandIcon);
    return Q(() => {
      var c;
      return we(u("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": l.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, a.value, e.class],
        style: [o.value, i.value, e.style],
        type: "button",
        tabindex: l.disabled.value ? -1 : void 0,
        disabled: l.disabled.value,
        "aria-expanded": l.isSelected.value,
        onClick: e.readonly ? void 0 : l.toggle
      }, [u("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, s.value), !e.hideActions && u(Se, {
        defaults: {
          VIcon: {
            icon: r.value
          }
        }
      }, {
        default: () => {
          var m;
          return [u("span", {
            class: "v-expansion-panel-title__icon"
          }, [((m = t.actions) == null ? void 0 : m.call(t, s.value)) ?? u(Ce, null, null)])];
        }
      })]), [[Ze("ripple"), e.ripple]]);
    }), {};
  }
}), bo = F({
  title: String,
  text: String,
  bgColor: String,
  ...mt(),
  ...vl(),
  ...Be(),
  ...de(),
  ...ho(),
  ...yo()
}, "VExpansionPanel"), So = W()({
  name: "VExpansionPanel",
  props: bo(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ml(e, Ft), {
      backgroundColorClasses: a,
      backgroundColorStyles: o
    } = Me(e, "bgColor"), {
      elevationClasses: i
    } = gt(e), {
      roundedClasses: s
    } = Te(e), r = b(() => (l == null ? void 0 : l.disabled.value) || e.disabled), c = b(() => l.group.items.value.reduce((d, v, f) => (l.group.selected.value.includes(v.id) && d.push(f), d), [])), m = b(() => {
      const d = l.group.items.value.findIndex((v) => v.id === l.id);
      return !l.isSelected.value && c.value.some((v) => v - d === 1);
    }), g = b(() => {
      const d = l.group.items.value.findIndex((v) => v.id === l.id);
      return !l.isSelected.value && c.value.some((v) => v - d === -1);
    });
    return Ie(Ft, l), Q(() => {
      const d = !!(t.text || e.text), v = !!(t.title || e.title), f = ca.filterProps(e), y = yn.filterProps(e);
      return u(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": l.isSelected.value,
          "v-expansion-panel--before-active": m.value,
          "v-expansion-panel--after-active": g.value,
          "v-expansion-panel--disabled": r.value
        }, s.value, a.value, e.class],
        style: [o.value, e.style]
      }, {
        default: () => [u("div", {
          class: ["v-expansion-panel__shadow", ...i.value]
        }, null), u(Se, {
          defaults: {
            VExpansionPanelTitle: {
              ...f
            },
            VExpansionPanelText: {
              ...y
            }
          }
        }, {
          default: () => {
            var h;
            return [v && u(ca, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), d && u(yn, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (h = t.default) == null ? void 0 : h.call(t)];
          }
        })]
      });
    }), {
      groupItem: l
    };
  }
}), Ls = ["default", "accordion", "inset", "popout"], Ms = F({
  flat: Boolean,
  ...kn(),
  ...il(bo(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ye(),
  ...ee(),
  ...de(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => Ls.includes(e)
  }
}, "VExpansionPanels"), Co = W()({
  name: "VExpansionPanels",
  props: Ms(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: l,
      prev: a
    } = Vn(e, Ft), {
      themeClasses: o
    } = pe(e), i = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return kt({
      VExpansionPanel: {
        bgColor: H(e, "bgColor"),
        collapseIcon: H(e, "collapseIcon"),
        color: H(e, "color"),
        eager: H(e, "eager"),
        elevation: H(e, "elevation"),
        expandIcon: H(e, "expandIcon"),
        focusable: H(e, "focusable"),
        hideActions: H(e, "hideActions"),
        readonly: H(e, "readonly"),
        ripple: H(e, "ripple"),
        rounded: H(e, "rounded"),
        static: H(e, "static")
      }
    }), Q(() => u(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, o.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var s;
        return [(s = t.default) == null ? void 0 : s.call(t, {
          prev: a,
          next: l
        })];
      }
    })), {
      next: l,
      prev: a
    };
  }
}), Rs = F({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...ee(),
  ...De(),
  ...de()
}, "VContainer"), Xe = W()({
  name: "VContainer",
  props: Rs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: l
    } = qe(), {
      dimensionStyles: a
    } = ze(e);
    return Q(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class],
      style: [a.value, e.style]
    }, t)), {};
  }
}), In = ["sm", "md", "lg", "xl", "xxl"], Fs = Symbol.for("vuetify:display"), $s = F({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function pl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  const t = ue(Fs);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const l = b(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return t.mobile.value;
    const o = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < o;
  }), a = b(() => n ? {
    [`${n}--mobile`]: l.value
  } : {});
  return {
    ...t,
    displayClasses: a,
    mobile: l
  };
}
const po = In.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), wo = In.reduce((e, n) => {
  const t = "offset" + Ht(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), xo = In.reduce((e, n) => {
  const t = "order" + Ht(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), da = {
  col: Object.keys(po),
  offset: Object.keys(wo),
  order: Object.keys(xo)
};
function Ns(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const Ds = ["auto", "start", "end", "center", "baseline", "stretch"], zs = F({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...po,
  offset: {
    type: [String, Number],
    default: null
  },
  ...wo,
  order: {
    type: [String, Number],
    default: null
  },
  ...xo,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Ds.includes(e)
  },
  ...ee(),
  ...de()
}, "VCol"), fe = W()({
  name: "VCol",
  props: zs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = b(() => {
      const a = [];
      let o;
      for (o in da)
        da[o].forEach((s) => {
          const r = e[s], c = Ns(o, s, r);
          c && a.push(c);
        });
      const i = a.some((s) => s.startsWith("v-col-"));
      return a.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !i || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), a;
    });
    return () => {
      var a;
      return wt(e.tag, {
        class: [l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), wl = ["start", "end", "center"], ko = ["space-between", "space-around", "space-evenly"];
function xl(e, n) {
  return In.reduce((t, l) => {
    const a = e + Ht(l);
    return t[a] = n(), t;
  }, {});
}
const Hs = [...wl, "baseline", "stretch"], Vo = (e) => Hs.includes(e), Po = xl("align", () => ({
  type: String,
  default: null,
  validator: Vo
})), js = [...wl, ...ko], _o = (e) => js.includes(e), Io = xl("justify", () => ({
  type: String,
  default: null,
  validator: _o
})), Us = [...wl, ...ko, "stretch"], Eo = (e) => Us.includes(e), Ao = xl("alignContent", () => ({
  type: String,
  default: null,
  validator: Eo
})), fa = {
  align: Object.keys(Po),
  justify: Object.keys(Io),
  alignContent: Object.keys(Ao)
}, Ws = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Gs(e, n, t) {
  let l = Ws[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const Ks = F({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Vo
  },
  ...Po,
  justify: {
    type: String,
    default: null,
    validator: _o
  },
  ...Io,
  alignContent: {
    type: String,
    default: null,
    validator: Eo
  },
  ...Ao,
  ...ee(),
  ...de()
}, "VRow"), ve = W()({
  name: "VRow",
  props: Ks(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = b(() => {
      const a = [];
      let o;
      for (o in fa)
        fa[o].forEach((i) => {
          const s = e[i], r = Gs(o, i, s);
          r && a.push(r);
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
      return wt(e.tag, {
        class: ["v-row", l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
});
function qs(e) {
  return {
    aspectStyles: b(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Bo = F({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ee(),
  ...De()
}, "VResponsive"), va = W()({
  name: "VResponsive",
  props: Bo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = qs(e), {
      dimensionStyles: a
    } = ze(e);
    return Q(() => {
      var o;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [a.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: l.value
      }, null), (o = t.additional) == null ? void 0 : o.call(t), t.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
}), Yt = F({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Qe = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: l,
    disabled: a,
    group: o,
    ...i
  } = e, {
    component: s = o ? ll : ut,
    ...r
  } = typeof l == "object" ? l : {};
  return wt(s, X(typeof l == "string" ? {
    name: a ? "" : l
  } : r, typeof l == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: a,
    group: o
  }).filter((c) => {
    let [m, g] = c;
    return g !== void 0;
  })), i), t);
};
function Ys(e, n) {
  if (!al) return;
  const t = n.modifiers || {}, l = n.value, {
    handler: a,
    options: o
  } = typeof l == "object" ? l : {
    handler: l,
    options: {}
  }, i = new IntersectionObserver(function() {
    var g;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0;
    const c = (g = e._observe) == null ? void 0 : g[n.instance.$.uid];
    if (!c) return;
    const m = s.some((d) => d.isIntersecting);
    a && (!t.quiet || c.init) && (!t.once || m || c.init) && a(m, s, r), m && t.once ? To(e, n) : c.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: i
  }, i.observe(e);
}
function To(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const kl = {
  mounted: Ys,
  unmounted: To
}, Xs = F({
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
  ...Bo(),
  ...ee(),
  ...Be(),
  ...Yt()
}, "VImg"), Qs = W()({
  name: "VImg",
  directives: {
    intersect: kl
  },
  props: Xs(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: l
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: o
    } = Me(H(e, "color")), {
      roundedClasses: i
    } = Te(e), s = ge("VImg"), r = Y(""), c = R(), m = Y(e.eager ? "loading" : "idle"), g = Y(), d = Y(), v = b(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), f = b(() => v.value.aspect || g.value / d.value || 0);
    K(() => e.src, () => {
      y(m.value !== "idle");
    }), K(f, (w, x) => {
      !w && x && c.value && E(c.value);
    }), Ea(() => y());
    function y(w) {
      if (!(e.eager && w) && !(al && !w && !e.eager)) {
        if (m.value = "loading", v.value.lazySrc) {
          const x = new Image();
          x.src = v.value.lazySrc, E(x, null);
        }
        v.value.src && he(() => {
          var x;
          t("loadstart", ((x = c.value) == null ? void 0 : x.currentSrc) || v.value.src), setTimeout(() => {
            var I;
            if (!s.isUnmounted)
              if ((I = c.value) != null && I.complete) {
                if (c.value.naturalWidth || S(), m.value === "error") return;
                f.value || E(c.value, null), m.value === "loading" && h();
              } else
                f.value || E(c.value), k();
          });
        });
      }
    }
    function h() {
      var w;
      s.isUnmounted || (k(), E(c.value), m.value = "loaded", t("load", ((w = c.value) == null ? void 0 : w.currentSrc) || v.value.src));
    }
    function S() {
      var w;
      s.isUnmounted || (m.value = "error", t("error", ((w = c.value) == null ? void 0 : w.currentSrc) || v.value.src));
    }
    function k() {
      const w = c.value;
      w && (r.value = w.currentSrc || w.src);
    }
    let A = -1;
    Re(() => {
      clearTimeout(A);
    });
    function E(w) {
      let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const I = () => {
        if (clearTimeout(A), s.isUnmounted) return;
        const {
          naturalHeight: O,
          naturalWidth: M
        } = w;
        O || M ? (g.value = M, d.value = O) : !w.complete && m.value === "loading" && x != null ? A = window.setTimeout(I, x) : (w.currentSrc.endsWith(".svg") || w.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, d.value = 1);
      };
      I();
    }
    const T = b(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), B = () => {
      var I;
      if (!v.value.src || m.value === "idle") return null;
      const w = u("img", {
        class: ["v-img__img", T.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: h,
        onError: S
      }, null), x = (I = l.sources) == null ? void 0 : I.call(l);
      return u(Qe, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [we(x ? u("picture", {
          class: "v-img__picture"
        }, [x, w]) : w, [[dt, m.value === "loaded"]])]
      });
    }, _ = () => u(Qe, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && m.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", T.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), P = () => l.placeholder ? u(Qe, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(m.value === "loading" || m.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, D = () => l.error ? u(Qe, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [m.value === "error" && u("div", {
        class: "v-img__error"
      }, [l.error()])]
    }) : null, U = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, V = Y(!1);
    {
      const w = K(f, (x) => {
        x && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = !0;
          });
        }), w());
      });
    }
    return Q(() => {
      const w = va.filterProps(e);
      return we(u(va, X({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !V.value
        }, a.value, i.value, e.class],
        style: [{
          width: J(e.width === "auto" ? g.value : e.width)
        }, o.value, e.style]
      }, w, {
        aspectRatio: f.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(ie, null, [u(B, null, null), u(_, null, null), u(U, null, null), u(P, null, null), u(D, null, null)]),
        default: l.default
      }), [[Ze("intersect"), {
        handler: y,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: r,
      image: c,
      state: m,
      naturalWidth: g,
      naturalHeight: d
    };
  }
}), Js = F({
  start: Boolean,
  end: Boolean,
  icon: se,
  image: String,
  text: String,
  ...ft(),
  ...ee(),
  ...tt(),
  ...Be(),
  ...Gt(),
  ...de(),
  ...ye(),
  ...lt({
    variant: "flat"
  })
}, "VAvatar"), $t = W()({
  name: "VAvatar",
  props: Js(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = pe(e), {
      borderClasses: a
    } = vt(e), {
      colorClasses: o,
      colorStyles: i,
      variantClasses: s
    } = Wt(e), {
      densityClasses: r
    } = nt(e), {
      roundedClasses: c
    } = Te(e), {
      sizeClasses: m,
      sizeStyles: g
    } = Kt(e);
    return Q(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, l.value, a.value, o.value, r.value, c.value, m.value, s.value, e.class],
      style: [i.value, g.value, e.style]
    }, {
      default: () => [t.default ? u(Se, {
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
        default: () => [t.default()]
      }) : e.image ? u(Qs, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(Ce, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ut(!1, "v-avatar")]
    })), {};
  }
}), Zs = F({
  text: String,
  onClick: Ve(),
  ...ee(),
  ...ye()
}, "VLabel"), Oo = W()({
  name: "VLabel",
  props: Zs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Q(() => {
      var l;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), Lo = Symbol.for("vuetify:selection-control-group"), Mo = F({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: se,
  trueIcon: se,
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
    default: xt
  },
  ...ee(),
  ...tt(),
  ...ye()
}, "SelectionControlGroup"), er = F({
  ...Mo({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
W()({
  name: "VSelectionControlGroup",
  props: er(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ce(e, "modelValue"), a = Ne(), o = b(() => e.id || `v-selection-control-group-${a}`), i = b(() => e.name || o.value), s = /* @__PURE__ */ new Set();
    return Ie(Lo, {
      modelValue: l,
      forceUpdate: () => {
        s.forEach((r) => r());
      },
      onForceUpdate: (r) => {
        s.add(r), xe(() => {
          s.delete(r);
        });
      }
    }), kt({
      [e.defaultsTarget]: {
        color: H(e, "color"),
        disabled: H(e, "disabled"),
        density: H(e, "density"),
        error: H(e, "error"),
        inline: H(e, "inline"),
        modelValue: l,
        multiple: b(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
        name: i,
        falseIcon: H(e, "falseIcon"),
        trueIcon: H(e, "trueIcon"),
        readonly: H(e, "readonly"),
        ripple: H(e, "ripple"),
        type: H(e, "type"),
        valueComparator: H(e, "valueComparator")
      }
    }), Q(() => {
      var r;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(r = t.default) == null ? void 0 : r.call(t)]);
    }), {};
  }
});
const Ro = F({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ee(),
  ...Mo()
}, "VSelectionControl");
function tr(e) {
  const n = ue(Lo, void 0), {
    densityClasses: t
  } = nt(e), l = ce(e, "modelValue"), a = b(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), o = b(() => e.falseValue !== void 0 ? e.falseValue : !1), i = b(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), s = b({
    get() {
      const v = n ? n.modelValue.value : l.value;
      return i.value ? Le(v).some((f) => e.valueComparator(f, a.value)) : e.valueComparator(v, a.value);
    },
    set(v) {
      if (e.readonly) return;
      const f = v ? a.value : o.value;
      let y = f;
      i.value && (y = v ? [...Le(l.value), f] : Le(l.value).filter((h) => !e.valueComparator(h, a.value))), n ? n.modelValue.value = y : l.value = y;
    }
  }), {
    textColorClasses: r,
    textColorStyles: c
  } = Ke(b(() => {
    if (!(e.error || e.disabled))
      return s.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: m,
    backgroundColorStyles: g
  } = Me(b(() => s.value && !e.error && !e.disabled ? e.color : e.baseColor)), d = b(() => s.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: a,
    falseValue: o,
    model: s,
    textColorClasses: r,
    textColorStyles: c,
    backgroundColorClasses: m,
    backgroundColorStyles: g,
    icon: d
  };
}
const ma = W()({
  name: "VSelectionControl",
  directives: {
    Ripple: qt
  },
  inheritAttrs: !1,
  props: Ro(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      group: a,
      densityClasses: o,
      icon: i,
      model: s,
      textColorClasses: r,
      textColorStyles: c,
      backgroundColorClasses: m,
      backgroundColorStyles: g,
      trueValue: d
    } = tr(e), v = Ne(), f = Y(!1), y = Y(!1), h = R(), S = b(() => e.id || `input-${v}`), k = b(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      h.value && (h.value.checked = s.value);
    });
    function A(_) {
      k.value && (f.value = !0, dn(_.target, ":focus-visible") !== !1 && (y.value = !0));
    }
    function E() {
      f.value = !1, y.value = !1;
    }
    function T(_) {
      _.stopPropagation();
    }
    function B(_) {
      if (!k.value) {
        h.value && (h.value.checked = s.value);
        return;
      }
      e.readonly && a && he(() => a.forceUpdate()), s.value = _.target.checked;
    }
    return Q(() => {
      var V, w;
      const _ = l.label ? l.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [P, D] = xn(t), U = u("input", X({
        ref: h,
        checked: s.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: E,
        onFocus: A,
        onInput: B,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: d.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? s.value : void 0
      }, D), null);
      return u("div", X({
        class: ["v-selection-control", {
          "v-selection-control--dirty": s.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": f.value,
          "v-selection-control--focus-visible": y.value,
          "v-selection-control--inline": e.inline
        }, o.value, e.class]
      }, P, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", r.value],
        style: c.value
      }, [(V = l.default) == null ? void 0 : V.call(l, {
        backgroundColorClasses: m,
        backgroundColorStyles: g
      }), we(u("div", {
        class: ["v-selection-control__input"]
      }, [((w = l.input) == null ? void 0 : w.call(l, {
        model: s,
        textColorClasses: r,
        textColorStyles: c,
        backgroundColorClasses: m,
        backgroundColorStyles: g,
        inputNode: U,
        icon: i.value,
        props: {
          onFocus: A,
          onBlur: E,
          id: S.value
        }
      })) ?? u(ie, null, [i.value && u(Ce, {
        key: "icon",
        icon: i.value
      }, null), U])]), [[Ze("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), _ && u(Oo, {
        for: S.value,
        onClick: T
      }, {
        default: () => [_]
      })]);
    }), {
      isFocused: f,
      input: h
    };
  }
}), Fo = F({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: se,
    default: "$checkboxIndeterminate"
  },
  ...Ro({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Kn = W()({
  name: "VCheckboxBtn",
  props: Fo(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ce(e, "indeterminate"), a = ce(e, "modelValue");
    function o(r) {
      l.value && (l.value = !1);
    }
    const i = b(() => l.value ? e.indeterminateIcon : e.falseIcon), s = b(() => l.value ? e.indeterminateIcon : e.trueIcon);
    return Q(() => {
      const r = et(ma.filterProps(e), ["modelValue"]);
      return u(ma, X(r, {
        modelValue: a.value,
        "onUpdate:modelValue": [(c) => a.value = c, o],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: i.value,
        trueIcon: s.value,
        "aria-checked": l.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function $o(e) {
  const {
    t: n
  } = gl();
  function t(l) {
    let {
      name: a
    } = l;
    const o = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[a], i = e[`onClick:${a}`], s = i && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return u(Ce, {
      icon: e[`${a}Icon`],
      "aria-label": s,
      onClick: i
    }, null);
  }
  return {
    InputIcon: t
  };
}
const nr = F({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ee(),
  ...Yt({
    transition: {
      component: co,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), lr = W()({
  name: "VMessages",
  props: nr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = b(() => Le(e.messages)), {
      textColorClasses: a,
      textColorStyles: o
    } = Ke(b(() => e.color));
    return Q(() => u(Qe, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", a.value, e.class],
      style: [o.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && l.value.map((i, s) => u("div", {
        class: "v-messages__message",
        key: `${s}-${l.value}`
      }, [t.message ? t.message({
        message: i
      }) : i]))]
    })), {};
  }
}), No = F({
  focused: Boolean,
  "onUpdate:focused": Ve()
}, "focus");
function En(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e();
  const t = ce(e, "focused"), l = b(() => ({
    [`${n}--focused`]: t.value
  }));
  function a() {
    t.value = !0;
  }
  function o() {
    t.value = !1;
  }
  return {
    focusClasses: l,
    isFocused: t,
    focus: a,
    blur: o
  };
}
const ar = Symbol.for("vuetify:form");
function Do() {
  return ue(ar, null);
}
const or = F({
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
  ...No()
}, "validation");
function ir(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ne();
  const l = ce(e, "modelValue"), a = b(() => e.validationValue === void 0 ? l.value : e.validationValue), o = Do(), i = R([]), s = Y(!0), r = b(() => !!(Le(l.value === "" ? null : l.value).length || Le(a.value === "" ? null : a.value).length)), c = b(() => !!(e.disabled ?? (o == null ? void 0 : o.isDisabled.value))), m = b(() => !!(e.readonly ?? (o == null ? void 0 : o.isReadonly.value))), g = b(() => {
    var T;
    return (T = e.errorMessages) != null && T.length ? Le(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value;
  }), d = b(() => {
    let T = (e.validateOn ?? (o == null ? void 0 : o.validateOn.value)) || "input";
    T === "lazy" && (T = "input lazy"), T === "eager" && (T = "input eager");
    const B = new Set((T == null ? void 0 : T.split(" ")) ?? []);
    return {
      input: B.has("input"),
      blur: B.has("blur") || B.has("input") || B.has("invalid-input"),
      invalidInput: B.has("invalid-input"),
      lazy: B.has("lazy"),
      eager: B.has("eager")
    };
  }), v = b(() => {
    var T;
    return e.error || (T = e.errorMessages) != null && T.length ? !1 : e.rules.length ? s.value ? i.value.length || d.value.lazy ? null : !0 : !i.value.length : !0;
  }), f = Y(!1), y = b(() => ({
    [`${n}--error`]: v.value === !1,
    [`${n}--dirty`]: r.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: m.value
  })), h = ge("validation"), S = b(() => e.name ?? ke(t));
  Ea(() => {
    o == null || o.register({
      id: S.value,
      vm: h,
      validate: E,
      reset: k,
      resetValidation: A
    });
  }), Re(() => {
    o == null || o.unregister(S.value);
  }), ct(async () => {
    d.value.lazy || await E(!d.value.eager), o == null || o.update(S.value, v.value, g.value);
  }), Je(() => d.value.input || d.value.invalidInput && v.value === !1, () => {
    K(a, () => {
      if (a.value != null)
        E();
      else if (e.focused) {
        const T = K(() => e.focused, (B) => {
          B || E(), T();
        });
      }
    });
  }), Je(() => d.value.blur, () => {
    K(() => e.focused, (T) => {
      T || E();
    });
  }), K([v, g], () => {
    o == null || o.update(S.value, v.value, g.value);
  });
  async function k() {
    l.value = null, await he(), await A();
  }
  async function A() {
    s.value = !0, d.value.lazy ? i.value = [] : await E(!d.value.eager);
  }
  async function E() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const B = [];
    f.value = !0;
    for (const _ of e.rules) {
      if (B.length >= +(e.maxErrors ?? 1))
        break;
      const D = await (typeof _ == "function" ? _ : () => _)(a.value);
      if (D !== !0) {
        if (D !== !1 && typeof D != "string") {
          console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        B.push(D || "");
      }
    }
    return i.value = B, f.value = !1, s.value = T, i.value;
  }
  return {
    errorMessages: g,
    isDirty: r,
    isDisabled: c,
    isReadonly: m,
    isPristine: s,
    isValid: v,
    isValidating: f,
    reset: k,
    resetValidation: A,
    validate: E,
    validationClasses: y
  };
}
const An = F({
  id: String,
  appendIcon: se,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: se,
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
  "onClick:prepend": Ve(),
  "onClick:append": Ve(),
  ...ee(),
  ...tt(),
  ...Ai(De(), ["maxWidth", "minWidth", "width"]),
  ...ye(),
  ...or()
}, "VInput"), pt = W()({
  name: "VInput",
  props: {
    ...An()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const {
      densityClasses: o
    } = nt(e), {
      dimensionStyles: i
    } = ze(e), {
      themeClasses: s
    } = pe(e), {
      rtlClasses: r
    } = qe(), {
      InputIcon: c
    } = $o(e), m = Ne(), g = b(() => e.id || `input-${m}`), d = b(() => `${g.value}-messages`), {
      errorMessages: v,
      isDirty: f,
      isDisabled: y,
      isReadonly: h,
      isPristine: S,
      isValid: k,
      isValidating: A,
      reset: E,
      resetValidation: T,
      validate: B,
      validationClasses: _
    } = ir(e, "v-input", g), P = b(() => ({
      id: g,
      messagesId: d,
      isDirty: f,
      isDisabled: y,
      isReadonly: h,
      isPristine: S,
      isValid: k,
      isValidating: A,
      reset: E,
      resetValidation: T,
      validate: B
    })), D = b(() => {
      var U;
      return (U = e.errorMessages) != null && U.length || !S.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return Q(() => {
      var I, O, M, N;
      const U = !!(l.prepend || e.prependIcon), V = !!(l.append || e.appendIcon), w = D.value.length > 0, x = !e.hideDetails || e.hideDetails === "auto" && (w || !!l.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, o.value, s.value, r.value, _.value, e.class],
        style: [i.value, e.style]
      }, [U && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(I = l.prepend) == null ? void 0 : I.call(l, P.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), l.default && u("div", {
        class: "v-input__control"
      }, [(O = l.default) == null ? void 0 : O.call(l, P.value)]), V && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (M = l.append) == null ? void 0 : M.call(l, P.value)]), x && u("div", {
        class: "v-input__details"
      }, [u(lr, {
        id: d.value,
        active: w,
        messages: D.value
      }, {
        message: l.message
      }), (N = l.details) == null ? void 0 : N.call(l, P.value)])]);
    }), {
      reset: E,
      resetValidation: T,
      validate: B,
      isValid: k,
      errorMessages: v
    };
  }
}), sr = F({
  ...An(),
  ...et(Fo(), ["inline"])
}, "VCheckbox"), rr = W()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: sr(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = ce(e, "modelValue"), {
      isFocused: o,
      focus: i,
      blur: s
    } = En(e), r = Ne(), c = b(() => e.id || `checkbox-${r}`);
    return Q(() => {
      const [m, g] = xn(t), d = pt.filterProps(e), v = Kn.filterProps(e);
      return u(pt, X({
        class: ["v-checkbox", e.class]
      }, m, d, {
        modelValue: a.value,
        "onUpdate:modelValue": (f) => a.value = f,
        id: c.value,
        focused: o.value,
        style: e.style
      }), {
        ...l,
        default: (f) => {
          let {
            id: y,
            messagesId: h,
            isDisabled: S,
            isReadonly: k,
            isValid: A
          } = f;
          return u(Kn, X(v, {
            id: y.value,
            "aria-describedby": h.value,
            disabled: S.value,
            readonly: k.value
          }, g, {
            error: A.value === !1,
            modelValue: a.value,
            "onUpdate:modelValue": (E) => a.value = E,
            onFocus: i,
            onBlur: s
          }), l);
        }
      });
    }), {};
  }
}), ur = Symbol.for("vuetify:goto");
function cr() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
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
    }
  };
}
function dr(e) {
  return Vl(e) ?? (document.scrollingElement || document.body);
}
function Vl(e) {
  return typeof e == "string" ? document.querySelector(e) : ol(e);
}
function Mn(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let l = Vl(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function ga(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", o = We((l == null ? void 0 : l.options) ?? cr(), n), i = l == null ? void 0 : l.rtl.value, s = (typeof e == "number" ? e : Vl(e)) ?? 0, r = o.container === "parent" && s instanceof HTMLElement ? s.parentElement : dr(o.container), c = typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!c) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let m;
  if (typeof s == "number")
    m = Mn(s, t, i);
  else if (m = Mn(s, t, i) - Mn(r, t, i), o.layout) {
    const f = window.getComputedStyle(s).getPropertyValue("--v-layout-top");
    f && (m -= parseInt(f, 10));
  }
  m += o.offset, m = vr(r, m, !!i, !!t);
  const g = r[a] ?? 0;
  if (m === g) return Promise.resolve(m);
  const d = performance.now();
  return new Promise((v) => requestAnimationFrame(function f(y) {
    const S = (y - d) / o.duration, k = Math.floor(g + (m - g) * c(Ge(S, 0, 1)));
    if (r[a] = k, S >= 1 && Math.abs(k - r[a]) < 10)
      return v(m);
    if (S > 2)
      return rt("Scroll target is not reachable"), v(r[a]);
    requestAnimationFrame(f);
  }));
}
function fr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = ue(ur), {
    isRtl: t
  } = qe();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...n,
    // can be set via VLocaleProvider
    rtl: b(() => n.rtl.value || t.value)
  };
  async function a(o, i) {
    return ga(o, We(e, i), !1, l);
  }
  return a.horizontal = async (o, i) => ga(o, We(e, i), !0, l), a;
}
function vr(e, n, t, l) {
  const {
    scrollWidth: a,
    scrollHeight: o
  } = e, [i, s] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let r, c;
  return l ? t ? (r = -(a - i), c = 0) : (r = 0, c = a - i) : (r = 0, c = o + -s), Math.max(Math.min(n, c), r);
}
function mr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: l,
    isHorizontal: a
  } = e;
  const o = Nt(a, t), i = zo(a, l, t), s = Nt(a, n), r = Ho(a, n), c = s * 0.4;
  return i > r ? r - c : i + o < r + s ? r - o + s + c : i;
}
function gr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: l
  } = e;
  const a = Nt(l, t), o = Ho(l, n), i = Nt(l, n);
  return o - a / 2 + i / 2;
}
function ya(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function yr(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function zo(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: l,
    offsetWidth: a,
    scrollWidth: o
  } = t;
  return e ? n ? o - a + l : l : t.scrollTop;
}
function Nt(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ho(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const hr = Symbol.for("vuetify:v-slide-group"), jo = F({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: hr
  },
  nextIcon: {
    type: se,
    default: "$next"
  },
  prevIcon: {
    type: se,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...ee(),
  ...$s({
    mobile: null
  }),
  ...de(),
  ...kn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), ha = W()({
  name: "VSlideGroup",
  props: jo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: l
    } = qe(), {
      displayClasses: a,
      mobile: o
    } = pl(e), i = Vn(e, e.symbol), s = Y(!1), r = Y(0), c = Y(0), m = Y(0), g = b(() => e.direction === "horizontal"), {
      resizeRef: d,
      contentRect: v
    } = Lt(), {
      resizeRef: f,
      contentRect: y
    } = Lt(), h = fr(), S = b(() => ({
      container: d.el,
      duration: 200,
      easing: "easeOutQuart"
    })), k = b(() => i.selected.value.length ? i.items.value.findIndex((p) => p.id === i.selected.value[0]) : -1), A = b(() => i.selected.value.length ? i.items.value.findIndex((p) => p.id === i.selected.value[i.selected.value.length - 1]) : -1);
    if (be) {
      let p = -1;
      K(() => [i.selected.value, v.value, y.value, g.value], () => {
        cancelAnimationFrame(p), p = requestAnimationFrame(() => {
          if (v.value && y.value) {
            const L = g.value ? "width" : "height";
            c.value = v.value[L], m.value = y.value[L], s.value = c.value + 1 < m.value;
          }
          if (k.value >= 0 && f.el) {
            const L = f.el.children[A.value];
            T(L, e.centerActive);
          }
        });
      });
    }
    const E = Y(!1);
    function T(p, L) {
      let $ = 0;
      L ? $ = gr({
        containerElement: d.el,
        isHorizontal: g.value,
        selectedElement: p
      }) : $ = mr({
        containerElement: d.el,
        isHorizontal: g.value,
        isRtl: l.value,
        selectedElement: p
      }), B($);
    }
    function B(p) {
      if (!be || !d.el) return;
      const L = Nt(g.value, d.el), $ = zo(g.value, l.value, d.el);
      if (!(ya(g.value, d.el) <= L || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(p - $) < 16)) {
        if (g.value && l.value && d.el) {
          const {
            scrollWidth: q,
            offsetWidth: ne
          } = d.el;
          p = q - ne - p;
        }
        g.value ? h.horizontal(p, S.value) : h(p, S.value);
      }
    }
    function _(p) {
      const {
        scrollTop: L,
        scrollLeft: $
      } = p.target;
      r.value = g.value ? $ : L;
    }
    function P(p) {
      if (E.value = !0, !(!s.value || !f.el)) {
        for (const L of p.composedPath())
          for (const $ of f.el.children)
            if ($ === L) {
              T($);
              return;
            }
      }
    }
    function D(p) {
      E.value = !1;
    }
    let U = !1;
    function V(p) {
      var L;
      !U && !E.value && !(p.relatedTarget && ((L = f.el) != null && L.contains(p.relatedTarget))) && I(), U = !1;
    }
    function w() {
      U = !0;
    }
    function x(p) {
      if (!f.el) return;
      function L($) {
        p.preventDefault(), I($);
      }
      g.value ? p.key === "ArrowRight" ? L(l.value ? "prev" : "next") : p.key === "ArrowLeft" && L(l.value ? "next" : "prev") : p.key === "ArrowDown" ? L("next") : p.key === "ArrowUp" && L("prev"), p.key === "Home" ? L("first") : p.key === "End" && L("last");
    }
    function I(p) {
      var $, te;
      if (!f.el) return;
      let L;
      if (!p)
        L = cn(f.el)[0];
      else if (p === "next") {
        if (L = ($ = f.el.querySelector(":focus")) == null ? void 0 : $.nextElementSibling, !L) return I("first");
      } else if (p === "prev") {
        if (L = (te = f.el.querySelector(":focus")) == null ? void 0 : te.previousElementSibling, !L) return I("last");
      } else p === "first" ? L = f.el.firstElementChild : p === "last" && (L = f.el.lastElementChild);
      L && L.focus({
        preventScroll: !0
      });
    }
    function O(p) {
      const L = g.value && l.value ? -1 : 1, $ = (p === "prev" ? -L : L) * c.value;
      let te = r.value + $;
      if (g.value && l.value && d.el) {
        const {
          scrollWidth: q,
          offsetWidth: ne
        } = d.el;
        te += q - ne;
      }
      B(te);
    }
    const M = b(() => ({
      next: i.next,
      prev: i.prev,
      select: i.select,
      isSelected: i.isSelected
    })), N = b(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !o.value;
        case !0:
          return s.value || Math.abs(r.value) > 0;
        case "mobile":
          return o.value || s.value || Math.abs(r.value) > 0;
        default:
          return !o.value && (s.value || Math.abs(r.value) > 0);
      }
    }), j = b(() => Math.abs(r.value) > 1), C = b(() => {
      if (!d.value) return !1;
      const p = ya(g.value, d.el), L = yr(g.value, d.el);
      return p - L - Math.abs(r.value) > 1;
    });
    return Q(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !g.value,
        "v-slide-group--has-affixes": N.value,
        "v-slide-group--is-overflowing": s.value
      }, a.value, e.class],
      style: e.style,
      tabindex: E.value || i.selected.value.length ? -1 : 0,
      onFocus: V
    }, {
      default: () => {
        var p, L, $;
        return [N.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !j.value
          }],
          onMousedown: w,
          onClick: () => j.value && O("prev")
        }, [((p = t.prev) == null ? void 0 : p.call(t, M.value)) ?? u(ua, null, {
          default: () => [u(Ce, {
            icon: l.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: d,
          class: "v-slide-group__container",
          onScroll: _
        }, [u("div", {
          ref: f,
          class: "v-slide-group__content",
          onFocusin: P,
          onFocusout: D,
          onKeydown: x
        }, [(L = t.default) == null ? void 0 : L.call(t, M.value)])]), N.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !C.value
          }],
          onMousedown: w,
          onClick: () => C.value && O("next")
        }, [(($ = t.next) == null ? void 0 : $.call(t, M.value)) ?? u(ua, null, {
          default: () => [u(Ce, {
            icon: l.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: i.selected,
      scrollTo: O,
      scrollOffset: r,
      focus: I,
      hasPrev: j,
      hasNext: C
    };
  }
}), Uo = Symbol.for("vuetify:v-chip-group"), br = F({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: xt
  },
  ...jo(),
  ...ee(),
  ...kn({
    selectedClass: "v-chip--selected"
  }),
  ...de(),
  ...ye(),
  ...lt({
    variant: "tonal"
  })
}, "VChipGroup");
W()({
  name: "VChipGroup",
  props: br(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = pe(e), {
      isSelected: a,
      select: o,
      next: i,
      prev: s,
      selected: r
    } = Vn(e, Uo);
    return kt({
      VChip: {
        color: H(e, "color"),
        disabled: H(e, "disabled"),
        filter: H(e, "filter"),
        variant: H(e, "variant")
      }
    }), Q(() => {
      const c = ha.filterProps(e);
      return u(ha, X(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, l.value, e.class],
        style: e.style
      }), {
        default: () => {
          var m;
          return [(m = t.default) == null ? void 0 : m.call(t, {
            isSelected: a,
            select: o,
            next: i,
            prev: s,
            selected: r.value
          })];
        }
      });
    }), {};
  }
});
const Sr = F({
  activeClass: String,
  appendAvatar: String,
  appendIcon: se,
  closable: Boolean,
  closeIcon: {
    type: se,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Ve(),
  onClickOnce: Ve(),
  ...ft(),
  ...ee(),
  ...tt(),
  ...mt(),
  ...vl(),
  ...Be(),
  ...Cl(),
  ...Gt(),
  ...de({
    tag: "span"
  }),
  ...ye(),
  ...lt({
    variant: "tonal"
  })
}, "VChip"), Wo = W()({
  name: "VChip",
  directives: {
    Ripple: qt
  },
  props: Sr(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const {
      t: o
    } = gl(), {
      borderClasses: i
    } = vt(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = Wt(e), {
      densityClasses: m
    } = nt(e), {
      elevationClasses: g
    } = gt(e), {
      roundedClasses: d
    } = Te(e), {
      sizeClasses: v
    } = Kt(e), {
      themeClasses: f
    } = pe(e), y = ce(e, "modelValue"), h = ml(e, Uo, !1), S = Sl(e, t), k = b(() => e.link !== !1 && S.isLink.value), A = b(() => !e.disabled && e.link !== !1 && (!!h || e.link || S.isClickable.value)), E = b(() => ({
      "aria-label": o(e.closeLabel),
      onClick(_) {
        _.preventDefault(), _.stopPropagation(), y.value = !1, l("click:close", _);
      }
    }));
    function T(_) {
      var P;
      l("click", _), A.value && ((P = S.navigate) == null || P.call(S, _), h == null || h.toggle());
    }
    function B(_) {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), T(_));
    }
    return () => {
      const _ = S.isLink.value ? "a" : e.tag, P = !!(e.appendIcon || e.appendAvatar), D = !!(P || a.append), U = !!(a.close || e.closable), V = !!(a.filter || e.filter) && h, w = !!(e.prependIcon || e.prependAvatar), x = !!(w || a.prepend), I = !h || h.isSelected.value;
      return y.value && we(u(_, X({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": A.value,
          "v-chip--filter": V,
          "v-chip--pill": e.pill
        }, f.value, i.value, I ? s.value : void 0, m.value, g.value, d.value, v.value, c.value, h == null ? void 0 : h.selectedClass.value, e.class],
        style: [I ? r.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: A.value ? 0 : void 0,
        onClick: T,
        onKeydown: A.value && !k.value && B
      }, S.linkProps), {
        default: () => {
          var O;
          return [Ut(A.value, "v-chip"), V && u(vo, {
            key: "filter"
          }, {
            default: () => [we(u("div", {
              class: "v-chip__filter"
            }, [a.filter ? u(Se, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, a.filter) : u(Ce, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[dt, h.isSelected.value]])]
          }), x && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [a.prepend ? u(Se, {
            key: "prepend-defaults",
            disabled: !w,
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
          }, a.prepend) : u(ie, null, [e.prependIcon && u(Ce, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u($t, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((O = a.default) == null ? void 0 : O.call(a, {
            isSelected: h == null ? void 0 : h.isSelected.value,
            selectedClass: h == null ? void 0 : h.selectedClass.value,
            select: h == null ? void 0 : h.select,
            toggle: h == null ? void 0 : h.toggle,
            value: h == null ? void 0 : h.value.value,
            disabled: e.disabled
          })) ?? e.text]), D && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [a.append ? u(Se, {
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
          }, a.append) : u(ie, null, [e.appendIcon && u(Ce, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u($t, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), U && u("button", X({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, E.value), [a.close ? u(Se, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, a.close) : u(Ce, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[Ze("ripple"), A.value && e.ripple, null]]);
    };
  }
}), qn = Symbol.for("vuetify:list");
function Go() {
  const e = ue(qn, {
    hasPrepend: Y(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: Y(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return Ie(qn, n), e;
}
function Ko() {
  return ue(qn, null);
}
const Pl = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: l,
        value: a,
        activated: o
      } = t;
      return l = me(l), e && !a && o.size === 1 && o.has(l) || (a ? o.add(l) : o.delete(l)), o;
    },
    in: (t, l, a) => {
      let o = /* @__PURE__ */ new Set();
      if (t != null)
        for (const i of Le(t))
          o = n.activate({
            id: i,
            value: !0,
            activated: new Set(o),
            children: l,
            parents: a
          });
      return o;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, qo = (e) => {
  const n = Pl(e);
  return {
    activate: (l) => {
      let {
        activated: a,
        id: o,
        ...i
      } = l;
      o = me(o);
      const s = a.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...i,
        id: o,
        activated: s
      });
    },
    in: (l, a, o) => {
      let i = /* @__PURE__ */ new Set();
      if (l != null) {
        const s = Le(l);
        s.length && (i = n.in(s.slice(0, 1), a, o));
      }
      return i;
    },
    out: (l, a, o) => n.out(l, a, o)
  };
}, Cr = (e) => {
  const n = Pl(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: o,
        children: i,
        ...s
      } = l;
      return a = me(a), i.has(a) ? o : n.activate({
        id: a,
        activated: o,
        children: i,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, pr = (e) => {
  const n = qo(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: o,
        children: i,
        ...s
      } = l;
      return a = me(a), i.has(a) ? o : n.activate({
        id: a,
        activated: o,
        children: i,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, wr = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: l,
      parents: a
    } = e;
    if (t) {
      const o = /* @__PURE__ */ new Set();
      o.add(n);
      let i = a.get(n);
      for (; i != null; )
        o.add(i), i = a.get(i);
      return o;
    } else
      return l.delete(n), l;
  },
  select: () => null
}, Yo = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: l,
      parents: a
    } = e;
    if (t) {
      let o = a.get(n);
      for (l.add(n); o != null && o !== n; )
        l.add(o), o = a.get(o);
      return l;
    } else
      l.delete(n);
    return l;
  },
  select: () => null
}, xr = {
  open: Yo.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: l,
      parents: a
    } = e;
    if (!t) return l;
    const o = [];
    let i = a.get(n);
    for (; i != null; )
      o.push(i), i = a.get(i);
    return new Set(o);
  }
}, _l = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: o
      } = t;
      if (l = me(l), e && !a) {
        const i = Array.from(o.entries()).reduce((s, r) => {
          let [c, m] = r;
          return m === "on" && s.push(c), s;
        }, []);
        if (i.length === 1 && i[0] === l) return o;
      }
      return o.set(l, a ? "on" : "off"), o;
    },
    in: (t, l, a) => {
      let o = /* @__PURE__ */ new Map();
      for (const i of t || [])
        o = n.select({
          id: i,
          value: !0,
          selected: new Map(o),
          children: l,
          parents: a
        });
      return o;
    },
    out: (t) => {
      const l = [];
      for (const [a, o] of t.entries())
        o === "on" && l.push(a);
      return l;
    }
  };
  return n;
}, Xo = (e) => {
  const n = _l(e);
  return {
    select: (l) => {
      let {
        selected: a,
        id: o,
        ...i
      } = l;
      o = me(o);
      const s = a.has(o) ? /* @__PURE__ */ new Map([[o, a.get(o)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...i,
        id: o,
        selected: s
      });
    },
    in: (l, a, o) => {
      let i = /* @__PURE__ */ new Map();
      return l != null && l.length && (i = n.in(l.slice(0, 1), a, o)), i;
    },
    out: (l, a, o) => n.out(l, a, o)
  };
}, kr = (e) => {
  const n = _l(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: o,
        children: i,
        ...s
      } = l;
      return a = me(a), i.has(a) ? o : n.select({
        id: a,
        selected: o,
        children: i,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, Vr = (e) => {
  const n = Xo(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: o,
        children: i,
        ...s
      } = l;
      return a = me(a), i.has(a) ? o : n.select({
        id: a,
        selected: o,
        children: i,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, Pr = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: o,
        children: i,
        parents: s
      } = t;
      l = me(l);
      const r = new Map(o), c = [l];
      for (; c.length; ) {
        const g = c.shift();
        o.set(me(g), a ? "on" : "off"), i.has(g) && c.push(...i.get(g));
      }
      let m = me(s.get(l));
      for (; m; ) {
        const g = i.get(m), d = g.every((f) => o.get(me(f)) === "on"), v = g.every((f) => !o.has(me(f)) || o.get(me(f)) === "off");
        o.set(m, d ? "on" : v ? "off" : "indeterminate"), m = me(s.get(m));
      }
      return e && !a && Array.from(o.entries()).reduce((d, v) => {
        let [f, y] = v;
        return y === "on" && d.push(f), d;
      }, []).length === 0 ? r : o;
    },
    in: (t, l, a) => {
      let o = /* @__PURE__ */ new Map();
      for (const i of t || [])
        o = n.select({
          id: i,
          value: !0,
          selected: new Map(o),
          children: l,
          parents: a
        });
      return o;
    },
    out: (t, l) => {
      const a = [];
      for (const [o, i] of t.entries())
        i === "on" && !l.has(o) && a.push(o);
      return a;
    }
  };
  return n;
}, Dt = Symbol.for("vuetify:nested"), Qo = {
  id: Y(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: R(/* @__PURE__ */ new Map()),
    children: R(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: R(!1),
    selectable: R(!1),
    opened: R(/* @__PURE__ */ new Set()),
    activated: R(/* @__PURE__ */ new Set()),
    selected: R(/* @__PURE__ */ new Map()),
    selectedValues: R([]),
    getPath: () => []
  }
}, _r = F({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Ir = (e) => {
  let n = !1;
  const t = R(/* @__PURE__ */ new Map()), l = R(/* @__PURE__ */ new Map()), a = ce(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), o = b(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Cr(e.mandatory);
      case "single-leaf":
        return pr(e.mandatory);
      case "independent":
        return Pl(e.mandatory);
      case "single-independent":
      default:
        return qo(e.mandatory);
    }
  }), i = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Vr(e.mandatory);
      case "leaf":
        return kr(e.mandatory);
      case "independent":
        return _l(e.mandatory);
      case "single-independent":
        return Xo(e.mandatory);
      case "classic":
      default:
        return Pr(e.mandatory);
    }
  }), s = b(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return xr;
      case "single":
        return wr;
      case "multiple":
      default:
        return Yo;
    }
  }), r = ce(e, "activated", e.activated, (f) => o.value.in(f, t.value, l.value), (f) => o.value.out(f, t.value, l.value)), c = ce(e, "selected", e.selected, (f) => i.value.in(f, t.value, l.value), (f) => i.value.out(f, t.value, l.value));
  Re(() => {
    n = !0;
  });
  function m(f) {
    const y = [];
    let h = f;
    for (; h != null; )
      y.unshift(h), h = l.value.get(h);
    return y;
  }
  const g = ge("nested"), d = /* @__PURE__ */ new Set(), v = {
    id: Y(),
    root: {
      opened: a,
      activatable: H(e, "activatable"),
      selectable: H(e, "selectable"),
      activated: r,
      selected: c,
      selectedValues: b(() => {
        const f = [];
        for (const [y, h] of c.value.entries())
          h === "on" && f.push(y);
        return f;
      }),
      register: (f, y, h) => {
        if (d.has(f)) {
          const S = m(f).map(String).join(" -> "), k = m(y).concat(f).map(String).join(" -> ");
          Da(`Multiple nodes with the same ID
	${S}
	${k}`);
          return;
        } else
          d.add(f);
        y && f !== y && l.value.set(f, y), h && t.value.set(f, []), y != null && t.value.set(y, [...t.value.get(y) || [], f]);
      },
      unregister: (f) => {
        if (n) return;
        d.delete(f), t.value.delete(f);
        const y = l.value.get(f);
        if (y) {
          const h = t.value.get(y) ?? [];
          t.value.set(y, h.filter((S) => S !== f));
        }
        l.value.delete(f);
      },
      open: (f, y, h) => {
        g.emit("click:open", {
          id: f,
          value: y,
          path: m(f),
          event: h
        });
        const S = s.value.open({
          id: f,
          value: y,
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: h
        });
        S && (a.value = S);
      },
      openOnSelect: (f, y, h) => {
        const S = s.value.select({
          id: f,
          value: y,
          selected: new Map(c.value),
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: h
        });
        S && (a.value = S);
      },
      select: (f, y, h) => {
        g.emit("click:select", {
          id: f,
          value: y,
          path: m(f),
          event: h
        });
        const S = i.value.select({
          id: f,
          value: y,
          selected: new Map(c.value),
          children: t.value,
          parents: l.value,
          event: h
        });
        S && (c.value = S), v.root.openOnSelect(f, y, h);
      },
      activate: (f, y, h) => {
        if (!e.activatable)
          return v.root.select(f, !0, h);
        g.emit("click:activate", {
          id: f,
          value: y,
          path: m(f),
          event: h
        });
        const S = o.value.activate({
          id: f,
          value: y,
          activated: new Set(r.value),
          children: t.value,
          parents: l.value,
          event: h
        });
        S && (r.value = S);
      },
      children: t,
      parents: l,
      getPath: m
    }
  };
  return Ie(Dt, v), v.root;
}, Jo = (e, n) => {
  const t = ue(Dt, Qo), l = Symbol(Ne()), a = b(() => e.value !== void 0 ? e.value : l), o = {
    ...t,
    id: a,
    open: (i, s) => t.root.open(a.value, i, s),
    openOnSelect: (i, s) => t.root.openOnSelect(a.value, i, s),
    isOpen: b(() => t.root.opened.value.has(a.value)),
    parent: b(() => t.root.parents.value.get(a.value)),
    activate: (i, s) => t.root.activate(a.value, i, s),
    isActivated: b(() => t.root.activated.value.has(me(a.value))),
    select: (i, s) => t.root.select(a.value, i, s),
    isSelected: b(() => t.root.selected.value.get(me(a.value)) === "on"),
    isIndeterminate: b(() => t.root.selected.value.get(a.value) === "indeterminate"),
    isLeaf: b(() => !t.root.children.value.get(a.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Re(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && Ie(Dt, o), o;
}, Er = () => {
  const e = ue(Dt, Qo);
  Ie(Dt, {
    ...e,
    isGroupActivator: !0
  });
};
function Ar() {
  const e = Y(!1);
  return ct(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: b(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: nl(e)
  };
}
const Br = jt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Er(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), Tr = F({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: se,
    default: "$collapse"
  },
  expandIcon: {
    type: se,
    default: "$expand"
  },
  prependIcon: se,
  appendIcon: se,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ee(),
  ...de()
}, "VListGroup"), ba = W()({
  name: "VListGroup",
  props: Tr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: l,
      open: a,
      id: o
    } = Jo(H(e, "value"), !0), i = b(() => `v-list-group--id-${String(o.value)}`), s = Ko(), {
      isBooted: r
    } = Ar();
    function c(v) {
      v.stopPropagation(), a(!l.value, v);
    }
    const m = b(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: i.value
    })), g = b(() => l.value ? e.collapseIcon : e.expandIcon), d = b(() => ({
      VListItem: {
        active: l.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && g.value,
        appendIcon: e.appendIcon || !e.subgroup && g.value,
        title: e.title,
        value: e.value
      }
    }));
    return Q(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": l.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(Se, {
        defaults: d.value
      }, {
        default: () => [u(Br, null, {
          default: () => [t.activator({
            props: m.value,
            isOpen: l.value
          })]
        })]
      }), u(Qe, {
        transition: {
          component: fo
        },
        disabled: !r.value
      }, {
        default: () => {
          var v;
          return [we(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": i.value
          }, [(v = t.default) == null ? void 0 : v.call(t)]), [[dt, l.value]])];
        }
      })]
    })), {
      isOpen: l
    };
  }
}), Or = F({
  opacity: [Number, String],
  ...ee(),
  ...de()
}, "VListItemSubtitle"), Lr = W()({
  name: "VListItemSubtitle",
  props: Or(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Q(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Mr = ts("v-list-item-title"), Rr = F({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: se,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Ve(),
  onClickOnce: Ve(),
  ...ft(),
  ...ee(),
  ...tt(),
  ...De(),
  ...mt(),
  ...Be(),
  ...Cl(),
  ...de(),
  ...ye(),
  ...lt({
    variant: "text"
  })
}, "VListItem"), hn = W()({
  name: "VListItem",
  directives: {
    Ripple: qt
  },
  props: Rr(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const o = Sl(e, t), i = b(() => e.value === void 0 ? o.href.value : e.value), {
      activate: s,
      isActivated: r,
      select: c,
      isOpen: m,
      isSelected: g,
      isIndeterminate: d,
      isGroupActivator: v,
      root: f,
      parent: y,
      openOnSelect: h,
      id: S
    } = Jo(i, !1), k = Ko(), A = b(() => {
      var $;
      return e.active !== !1 && (e.active || (($ = o.isActive) == null ? void 0 : $.value) || (f.activatable.value ? r.value : g.value));
    }), E = b(() => e.link !== !1 && o.isLink.value), T = b(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || !!k && (f.selectable.value || f.activatable.value || e.value != null))), B = b(() => e.rounded || e.nav), _ = b(() => e.color ?? e.activeColor), P = b(() => ({
      color: A.value ? _.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    K(() => {
      var $;
      return ($ = o.isActive) == null ? void 0 : $.value;
    }, ($) => {
      $ && y.value != null && f.open(y.value, !0), $ && h($);
    }, {
      immediate: !0
    });
    const {
      themeClasses: D
    } = pe(e), {
      borderClasses: U
    } = vt(e), {
      colorClasses: V,
      colorStyles: w,
      variantClasses: x
    } = Wt(P), {
      densityClasses: I
    } = nt(e), {
      dimensionStyles: O
    } = ze(e), {
      elevationClasses: M
    } = gt(e), {
      roundedClasses: N
    } = Te(B), j = b(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), C = b(() => ({
      isActive: A.value,
      select: c,
      isOpen: m.value,
      isSelected: g.value,
      isIndeterminate: d.value
    }));
    function p($) {
      var te;
      a("click", $), T.value && ((te = o.navigate) == null || te.call(o, $), !v && (f.activatable.value ? s(!r.value, $) : (f.selectable.value || e.value != null) && c(!g.value, $)));
    }
    function L($) {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), $.target.dispatchEvent(new MouseEvent("click", $)));
    }
    return Q(() => {
      const $ = E.value ? "a" : e.tag, te = l.title || e.title != null, q = l.subtitle || e.subtitle != null, ne = !!(e.appendAvatar || e.appendIcon), G = !!(ne || l.append), ae = !!(e.prependAvatar || e.prependIcon), re = !!(ae || l.prepend);
      return k == null || k.updateHasPrepend(re), e.activeColor && Gi("active-color", ["color", "base-color"]), we(u($, X({
        class: ["v-list-item", {
          "v-list-item--active": A.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": T.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !re && (k == null ? void 0 : k.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && A.value
        }, D.value, U.value, V.value, I.value, M.value, j.value, N.value, x.value, e.class],
        style: [w.value, O.value, e.style],
        tabindex: T.value ? k ? -2 : 0 : void 0,
        "aria-selected": f.activatable.value ? r.value : g.value,
        onClick: p,
        onKeydown: T.value && !E.value && L
      }, o.linkProps), {
        default: () => {
          var Ae;
          return [Ut(T.value || A.value, "v-list-item"), re && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [l.prepend ? u(Se, {
            key: "prepend-defaults",
            disabled: !ae,
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
              var oe;
              return [(oe = l.prepend) == null ? void 0 : oe.call(l, C.value)];
            }
          }) : u(ie, null, [e.prependAvatar && u($t, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(Ce, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [te && u(Mr, {
            key: "title"
          }, {
            default: () => {
              var oe;
              return [((oe = l.title) == null ? void 0 : oe.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), q && u(Lr, {
            key: "subtitle"
          }, {
            default: () => {
              var oe;
              return [((oe = l.subtitle) == null ? void 0 : oe.call(l, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (Ae = l.default) == null ? void 0 : Ae.call(l, C.value)]), G && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [l.append ? u(Se, {
            key: "append-defaults",
            disabled: !ne,
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
              var oe;
              return [(oe = l.append) == null ? void 0 : oe.call(l, C.value)];
            }
          }) : u(ie, null, [e.appendIcon && u(Ce, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u($t, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[Ze("ripple"), T.value && e.ripple]]);
    }), {
      activate: s,
      isActivated: r,
      isGroupActivator: v,
      isSelected: g,
      list: k,
      select: c,
      root: f,
      id: S
    };
  }
}), Fr = F({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ee(),
  ...de()
}, "VListSubheader"), $r = W()({
  name: "VListSubheader",
  props: Fr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: a
    } = Ke(H(e, "color"));
    return Q(() => {
      const o = !!(t.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, l.value, e.class],
        style: [{
          textColorStyles: a
        }, e.style]
      }, {
        default: () => {
          var i;
          return [o && u("div", {
            class: "v-list-subheader__text"
          }, [((i = t.default) == null ? void 0 : i.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), Nr = F({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ee(),
  ...ye()
}, "VDivider"), on = W()({
  name: "VDivider",
  props: Nr(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = pe(e), {
      textColorClasses: o,
      textColorStyles: i
    } = Ke(H(e, "color")), s = b(() => {
      const r = {};
      return e.length && (r[e.vertical ? "height" : "width"] = J(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), r;
    });
    return Q(() => {
      const r = u("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, a.value, o.value, e.class],
        style: [s.value, i.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return l.default ? u("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [r, u("div", {
        class: "v-divider__content"
      }, [l.default()]), r]) : r;
    }), {};
  }
}), Dr = F({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Zo = W()({
  name: "VListChildren",
  props: Dr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Go(), () => {
      var l, a;
      return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((o) => {
        var d, v;
        let {
          children: i,
          props: s,
          type: r,
          raw: c
        } = o;
        if (r === "divider")
          return ((d = t.divider) == null ? void 0 : d.call(t, {
            props: s
          })) ?? u(on, s, null);
        if (r === "subheader")
          return ((v = t.subheader) == null ? void 0 : v.call(t, {
            props: s
          })) ?? u($r, s, null);
        const m = {
          subtitle: t.subtitle ? (f) => {
            var y;
            return (y = t.subtitle) == null ? void 0 : y.call(t, {
              ...f,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (f) => {
            var y;
            return (y = t.prepend) == null ? void 0 : y.call(t, {
              ...f,
              item: c
            });
          } : void 0,
          append: t.append ? (f) => {
            var y;
            return (y = t.append) == null ? void 0 : y.call(t, {
              ...f,
              item: c
            });
          } : void 0,
          title: t.title ? (f) => {
            var y;
            return (y = t.title) == null ? void 0 : y.call(t, {
              ...f,
              item: c
            });
          } : void 0
        }, g = ba.filterProps(s);
        return i ? u(ba, X({
          value: s == null ? void 0 : s.value
        }, g), {
          activator: (f) => {
            let {
              props: y
            } = f;
            const h = {
              ...s,
              ...y,
              value: e.returnObject ? c : s.value
            };
            return t.header ? t.header({
              props: h
            }) : u(hn, h, m);
          },
          default: () => u(Zo, {
            items: i,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: s
        }) : u(hn, X(s, {
          value: e.returnObject ? c : s.value
        }), m);
      }));
    };
  }
}), ei = F({
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
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: xt
  }
}, "list-items");
function Yn(e, n) {
  const t = je(n, e.itemTitle, n), l = je(n, e.itemValue, t), a = je(n, e.itemChildren), o = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? et(n, ["children"]) : n : void 0 : je(n, e.itemProps), i = {
    title: t,
    value: l,
    ...o
  };
  return {
    title: String(i.title ?? ""),
    value: i.value,
    props: i,
    children: Array.isArray(a) ? ti(e, a) : void 0,
    raw: n
  };
}
function ti(e, n) {
  const t = [];
  for (const l of n)
    t.push(Yn(e, l));
  return t;
}
function zr(e) {
  const n = b(() => ti(e, e.items)), t = b(() => n.value.some((o) => o.value === null));
  function l(o) {
    return t.value || (o = o.filter((i) => i !== null)), o.map((i) => e.returnObject && typeof i == "string" ? Yn(e, i) : n.value.find((s) => e.valueComparator(i, s.value)) || Yn(e, i));
  }
  function a(o) {
    return e.returnObject ? o.map((i) => {
      let {
        raw: s
      } = i;
      return s;
    }) : o.map((i) => {
      let {
        value: s
      } = i;
      return s;
    });
  }
  return {
    items: n,
    transformIn: l,
    transformOut: a
  };
}
function Hr(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function jr(e, n) {
  const t = je(n, e.itemType, "item"), l = Hr(n) ? n : je(n, e.itemTitle), a = je(n, e.itemValue, void 0), o = je(n, e.itemChildren), i = e.itemProps === !0 ? et(n, ["children"]) : je(n, e.itemProps), s = {
    title: l,
    value: a,
    ...i
  };
  return {
    type: t,
    title: s.title,
    value: s.value,
    props: s,
    children: t === "item" && o ? ni(e, o) : void 0,
    raw: n
  };
}
function ni(e, n) {
  const t = [];
  for (const l of n)
    t.push(jr(e, l));
  return t;
}
function Ur(e) {
  return {
    items: b(() => ni(e, e.items))
  };
}
const Wr = F({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Ve(),
  "onClick:select": Ve(),
  "onUpdate:opened": Ve(),
  ..._r({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...ft(),
  ...ee(),
  ...tt(),
  ...De(),
  ...mt(),
  itemType: {
    type: String,
    default: "type"
  },
  ...ei(),
  ...Be(),
  ...de(),
  ...ye(),
  ...lt({
    variant: "text"
  })
}, "VList"), Gr = W()({
  name: "VList",
  props: Wr(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: l
    } = Ur(e), {
      themeClasses: a
    } = pe(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = Me(H(e, "bgColor")), {
      borderClasses: s
    } = vt(e), {
      densityClasses: r
    } = nt(e), {
      dimensionStyles: c
    } = ze(e), {
      elevationClasses: m
    } = gt(e), {
      roundedClasses: g
    } = Te(e), {
      children: d,
      open: v,
      parents: f,
      select: y,
      getPath: h
    } = Ir(e), S = b(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = H(e, "activeColor"), A = H(e, "baseColor"), E = H(e, "color");
    Go(), kt({
      VListGroup: {
        activeColor: k,
        baseColor: A,
        color: E,
        expandIcon: H(e, "expandIcon"),
        collapseIcon: H(e, "collapseIcon")
      },
      VListItem: {
        activeClass: H(e, "activeClass"),
        activeColor: k,
        baseColor: A,
        color: E,
        density: H(e, "density"),
        disabled: H(e, "disabled"),
        lines: H(e, "lines"),
        nav: H(e, "nav"),
        slim: H(e, "slim"),
        variant: H(e, "variant")
      }
    });
    const T = Y(!1), B = R();
    function _(x) {
      T.value = !0;
    }
    function P(x) {
      T.value = !1;
    }
    function D(x) {
      var I;
      !T.value && !(x.relatedTarget && ((I = B.value) != null && I.contains(x.relatedTarget))) && w();
    }
    function U(x) {
      const I = x.target;
      if (!(!B.value || ["INPUT", "TEXTAREA"].includes(I.tagName))) {
        if (x.key === "ArrowDown")
          w("next");
        else if (x.key === "ArrowUp")
          w("prev");
        else if (x.key === "Home")
          w("first");
        else if (x.key === "End")
          w("last");
        else
          return;
        x.preventDefault();
      }
    }
    function V(x) {
      T.value = !0;
    }
    function w(x) {
      if (B.value)
        return At(B.value, x);
    }
    return Q(() => u(e.tag, {
      ref: B,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, a.value, o.value, s.value, r.value, m.value, S.value, g.value, e.class],
      style: [i.value, c.value, e.style],
      tabindex: e.disabled || T.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: _,
      onFocusout: P,
      onFocus: D,
      onKeydown: U,
      onMousedown: V
    }, {
      default: () => [u(Zo, {
        items: l.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: v,
      select: y,
      focus: w,
      children: d,
      parents: f,
      getPath: h
    };
  }
});
function Rn(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function Kr(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Sa(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: l
    } = e, a = l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, o = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return Rn({
      x: a,
      y: o
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: l
    } = e, a = t === "left" ? 0 : t === "right" ? n.width : t, o = l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l;
    return Rn({
      x: a,
      y: o
    }, n);
  }
  return Rn({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const li = {
  static: Xr,
  // specific viewport position, usually centered
  connected: Jr
  // connected to a certain element
}, qr = F({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in li
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
function Yr(e, n) {
  const t = R({}), l = R();
  be && Je(() => !!(n.isActive.value && e.locationStrategy), (o) => {
    var i, s;
    K(() => e.locationStrategy, o), xe(() => {
      window.removeEventListener("resize", a), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (i = e.locationStrategy(n, e, t)) == null ? void 0 : i.updateLocation : l.value = (s = li[e.locationStrategy](n, e, t)) == null ? void 0 : s.updateLocation;
  });
  function a(o) {
    var i;
    (i = l.value) == null || i.call(l, o);
  }
  return {
    contentStyles: t,
    updateLocation: l
  };
}
function Xr() {
}
function Qr(e, n) {
  const t = ul(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Jr(e, n, t) {
  (Array.isArray(e.target.value) || os(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: o
  } = rl(() => {
    const f = jn(n.location, e.isRtl.value), y = n.origin === "overlap" ? f : n.origin === "auto" ? Tn(f) : jn(n.origin, e.isRtl.value);
    return f.side === y.side && f.align === On(y).align ? {
      preferredAnchor: Hl(f),
      preferredOrigin: Hl(y)
    } : {
      preferredAnchor: f,
      preferredOrigin: y
    };
  }), [i, s, r, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => b(() => {
    const y = parseFloat(n[f]);
    return isNaN(y) ? 1 / 0 : y;
  })), m = b(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const f = n.offset.split(" ").map(parseFloat);
      return f.length < 2 && f.push(0), f;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let g = !1;
  const d = new ResizeObserver(() => {
    g && v();
  });
  K([e.target, e.contentEl], (f, y) => {
    let [h, S] = f, [k, A] = y;
    k && !Array.isArray(k) && d.unobserve(k), h && !Array.isArray(h) && d.observe(h), A && d.unobserve(A), S && d.observe(S);
  }, {
    immediate: !0
  }), xe(() => {
    d.disconnect();
  });
  function v() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value) return;
    const f = Na(e.target.value), y = Qr(e.contentEl.value, e.isRtl.value), h = mn(e.contentEl.value), S = 12;
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = h.reduce((V, w) => {
      const x = w.getBoundingClientRect(), I = new st({
        x: w === document.documentElement ? 0 : x.x,
        y: w === document.documentElement ? 0 : x.y,
        width: w.clientWidth,
        height: w.clientHeight
      });
      return V ? new st({
        x: Math.max(V.left, I.left),
        y: Math.max(V.top, I.top),
        width: Math.min(V.right, I.right) - Math.max(V.left, I.left),
        height: Math.min(V.bottom, I.bottom) - Math.max(V.top, I.top)
      }) : I;
    }, void 0);
    k.x += S, k.y += S, k.width -= S * 2, k.height -= S * 2;
    let A = {
      anchor: a.value,
      origin: o.value
    };
    function E(V) {
      const w = new st(y), x = Sa(V.anchor, f), I = Sa(V.origin, w);
      let {
        x: O,
        y: M
      } = Kr(x, I);
      switch (V.anchor.side) {
        case "top":
          M -= m.value[0];
          break;
        case "bottom":
          M += m.value[0];
          break;
        case "left":
          O -= m.value[0];
          break;
        case "right":
          O += m.value[0];
          break;
      }
      switch (V.anchor.align) {
        case "top":
          M -= m.value[1];
          break;
        case "bottom":
          M += m.value[1];
          break;
        case "left":
          O -= m.value[1];
          break;
        case "right":
          O += m.value[1];
          break;
      }
      return w.x += O, w.y += M, w.width = Math.min(w.width, r.value), w.height = Math.min(w.height, c.value), {
        overflows: Ul(w, k),
        x: O,
        y: M
      };
    }
    let T = 0, B = 0;
    const _ = {
      x: 0,
      y: 0
    }, P = {
      x: !1,
      y: !1
    };
    let D = -1;
    for (; ; ) {
      if (D++ > 10) {
        Da("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: V,
        y: w,
        overflows: x
      } = E(A);
      T += V, B += w, y.x += V, y.y += w;
      {
        const I = jl(A.anchor), O = x.x.before || x.x.after, M = x.y.before || x.y.after;
        let N = !1;
        if (["x", "y"].forEach((j) => {
          if (j === "x" && O && !P.x || j === "y" && M && !P.y) {
            const C = {
              anchor: {
                ...A.anchor
              },
              origin: {
                ...A.origin
              }
            }, p = j === "x" ? I === "y" ? On : Tn : I === "y" ? Tn : On;
            C.anchor = p(C.anchor), C.origin = p(C.origin);
            const {
              overflows: L
            } = E(C);
            (L[j].before <= x[j].before && L[j].after <= x[j].after || L[j].before + L[j].after < (x[j].before + x[j].after) / 2) && (A = C, N = P[j] = !0);
          }
        }), N) continue;
      }
      x.x.before && (T += x.x.before, y.x += x.x.before), x.x.after && (T -= x.x.after, y.x -= x.x.after), x.y.before && (B += x.y.before, y.y += x.y.before), x.y.after && (B -= x.y.after, y.y -= x.y.after);
      {
        const I = Ul(y, k);
        _.x = k.width - I.x.before - I.x.after, _.y = k.height - I.y.before - I.y.after, T += I.x.before, y.x += I.x.before, B += I.y.before, y.y += I.y.before;
      }
      break;
    }
    const U = jl(A.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${A.anchor.side} ${A.anchor.align}`,
      transformOrigin: `${A.origin.side} ${A.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: J(Fn(B)),
      left: e.isRtl.value ? void 0 : J(Fn(T)),
      right: e.isRtl.value ? J(Fn(-T)) : void 0,
      minWidth: J(U === "y" ? Math.min(i.value, f.width) : i.value),
      maxWidth: J(Ca(Ge(_.x, i.value === 1 / 0 ? 0 : i.value, r.value))),
      maxHeight: J(Ca(Ge(_.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
    }), {
      available: _,
      contentBox: y
    };
  }
  return K(() => [a.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => v()), he(() => {
    const f = v();
    if (!f) return;
    const {
      available: y,
      contentBox: h
    } = f;
    h.height > y.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function Fn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ca(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Xn = !0;
const bn = [];
function Zr(e) {
  !Xn || bn.length ? (bn.push(e), Qn()) : (Xn = !1, e(), Qn());
}
let pa = -1;
function Qn() {
  cancelAnimationFrame(pa), pa = requestAnimationFrame(() => {
    const e = bn.shift();
    e && e(), bn.length ? Qn() : Xn = !0;
  });
}
const sn = {
  none: null,
  close: nu,
  block: lu,
  reposition: au
}, eu = F({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in sn
  }
}, "VOverlay-scroll-strategies");
function tu(e, n) {
  if (!be) return;
  let t;
  Fe(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = tl(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = sn[e.scrollStrategy]) == null || l.call(sn, n, e, t);
    }));
  }), xe(() => {
    t == null || t.stop();
  });
}
function nu(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  ai(e.targetEl.value ?? e.contentEl.value, n);
}
function lu(e, n) {
  var i;
  const t = (i = e.root.value) == null ? void 0 : i.offsetParent, l = [.../* @__PURE__ */ new Set([...mn(e.targetEl.value, n.contained ? t : void 0), ...mn(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, o = ((s) => dl(s) && s)(t || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, r) => {
    s.style.setProperty("--v-body-scroll-x", J(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", J(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", J(a)), s.classList.add("v-overlay-scroll-blocked");
  }), xe(() => {
    l.forEach((s, r) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), m = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), g = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -m, s.style.scrollBehavior = g;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function au(e, n, t) {
  let l = !1, a = -1, o = -1;
  function i(s) {
    Zr(() => {
      var m, g;
      const r = performance.now();
      (g = (m = e.updateLocation).value) == null || g.call(m, s), l = (performance.now() - r) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      ai(e.targetEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            i(s);
          });
        })) : i(s);
      });
    });
  }), xe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(a);
  });
}
function ai(e, n) {
  const t = [document, ...mn(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, {
      passive: !0
    });
  }), xe(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const Jn = Symbol.for("vuetify:v-menu"), ou = F({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function iu(e, n) {
  let t = () => {
  };
  function l(i) {
    t == null || t();
    const s = Number(i ? e.openDelay : e.closeDelay);
    return new Promise((r) => {
      t = Li(s, () => {
        n == null || n(i), r(i);
      });
    });
  }
  function a() {
    return l(!0);
  }
  function o() {
    return l(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: a,
    runCloseDelay: o
  };
}
const su = F({
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
  ...ou()
}, "VOverlay-activator");
function ru(e, n) {
  let {
    isActive: t,
    isTop: l,
    contentEl: a
  } = n;
  const o = ge("useActivator"), i = R();
  let s = !1, r = !1, c = !0;
  const m = b(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), g = b(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !m.value), {
    runOpenDelay: d,
    runCloseDelay: v
  } = iu(e, (P) => {
    P === (e.openOnHover && s || m.value && r) && !(e.openOnHover && t.value && !l.value) && (t.value !== P && (c = !0), t.value = P);
  }), f = R(), y = {
    onClick: (P) => {
      P.stopPropagation(), i.value = P.currentTarget || P.target, t.value || (f.value = [P.clientX, P.clientY]), t.value = !t.value;
    },
    onMouseenter: (P) => {
      var D;
      (D = P.sourceCapabilities) != null && D.firesTouchEvents || (s = !0, i.value = P.currentTarget || P.target, d());
    },
    onMouseleave: (P) => {
      s = !1, v();
    },
    onFocus: (P) => {
      dn(P.target, ":focus-visible") !== !1 && (r = !0, P.stopPropagation(), i.value = P.currentTarget || P.target, d());
    },
    onBlur: (P) => {
      r = !1, P.stopPropagation(), v();
    }
  }, h = b(() => {
    const P = {};
    return g.value && (P.onClick = y.onClick), e.openOnHover && (P.onMouseenter = y.onMouseenter, P.onMouseleave = y.onMouseleave), m.value && (P.onFocus = y.onFocus, P.onBlur = y.onBlur), P;
  }), S = b(() => {
    const P = {};
    if (e.openOnHover && (P.onMouseenter = () => {
      s = !0, d();
    }, P.onMouseleave = () => {
      s = !1, v();
    }), m.value && (P.onFocusin = () => {
      r = !0, d();
    }, P.onFocusout = () => {
      r = !1, v();
    }), e.closeOnContentClick) {
      const D = ue(Jn, null);
      P.onClick = () => {
        t.value = !1, D == null || D.closeParents();
      };
    }
    return P;
  }), k = b(() => {
    const P = {};
    return e.openOnHover && (P.onMouseenter = () => {
      c && (s = !0, c = !1, d());
    }, P.onMouseleave = () => {
      s = !1, v();
    }), P;
  });
  K(l, (P) => {
    var D;
    P && (e.openOnHover && !s && (!m.value || !r) || m.value && !r && (!e.openOnHover || !s)) && !((D = a.value) != null && D.contains(document.activeElement)) && (t.value = !1);
  }), K(t, (P) => {
    P || setTimeout(() => {
      f.value = void 0;
    });
  }, {
    flush: "post"
  });
  const A = Hn();
  Fe(() => {
    A.value && he(() => {
      i.value = A.el;
    });
  });
  const E = Hn(), T = b(() => e.target === "cursor" && f.value ? f.value : E.value ? E.el : oi(e.target, o) || i.value), B = b(() => Array.isArray(T.value) ? void 0 : T.value);
  let _;
  return K(() => !!e.activator, (P) => {
    P && be ? (_ = tl(), _.run(() => {
      uu(e, o, {
        activatorEl: i,
        activatorEvents: h
      });
    })) : _ && _.stop();
  }, {
    flush: "post",
    immediate: !0
  }), xe(() => {
    _ == null || _.stop();
  }), {
    activatorEl: i,
    activatorRef: A,
    target: T,
    targetEl: B,
    targetRef: E,
    activatorEvents: h,
    contentEvents: S,
    scrimEvents: k
  };
}
function uu(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  K(() => e.activator, (r, c) => {
    if (c && r !== c) {
      const m = s(c);
      m && i(m);
    }
    r && he(() => o());
  }, {
    immediate: !0
  }), K(() => e.activatorProps, () => {
    o();
  }), xe(() => {
    i();
  });
  function o() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && Fi(r, X(a.value, c));
  }
  function i() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && $i(r, X(a.value, c));
  }
  function s() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = oi(r, n);
    return l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, l.value;
  }
}
function oi(e, n) {
  var l, a;
  if (!e) return;
  let t;
  if (e === "parent") {
    let o = (a = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : a.parentNode;
    for (; o != null && o.hasAttribute("data-no-activator"); )
      o = o.parentNode;
    t = o;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function cu() {
  if (!be) return Y(!1);
  const {
    ssr: e
  } = pl();
  if (e) {
    const n = Y(!1);
    return ct(() => {
      n.value = !0;
    }), n;
  } else
    return Y(!0);
}
function Il() {
  const n = ge("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const wa = Symbol.for("vuetify:stack"), Vt = St([]);
function du(e, n, t) {
  const l = ge("useStack"), a = !t, o = ue(wa, void 0), i = St({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ie(wa, i);
  const s = Y(+n.value);
  Je(e, () => {
    var g;
    const m = (g = Vt.at(-1)) == null ? void 0 : g[1];
    s.value = m ? m + 10 : +n.value, a && Vt.push([l.uid, s.value]), o == null || o.activeChildren.add(l.uid), xe(() => {
      if (a) {
        const d = me(Vt).findIndex((v) => v[0] === l.uid);
        Vt.splice(d, 1);
      }
      o == null || o.activeChildren.delete(l.uid);
    });
  });
  const r = Y(!0);
  a && Fe(() => {
    var g;
    const m = ((g = Vt.at(-1)) == null ? void 0 : g[0]) === l.uid;
    setTimeout(() => r.value = m);
  });
  const c = b(() => !i.activeChildren.size);
  return {
    globalTop: nl(r),
    localTop: c,
    stackStyles: b(() => ({
      zIndex: s.value
    }))
  };
}
function fu(e) {
  return {
    teleportTarget: b(() => {
      const t = e();
      if (t === !0 || !be) return;
      const l = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (l == null) {
        wn(`Unable to locate target ${t}`);
        return;
      }
      let a = [...l.children].find((o) => o.matches(".v-overlay-container"));
      return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
    })
  };
}
function vu() {
  return !0;
}
function ii(e, n, t) {
  if (!e || si(e, t) === !1) return !1;
  const l = ja(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target) return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((o) => o == null ? void 0 : o.contains(e.target));
}
function si(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || vu)(e);
}
function mu(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && ii(e, n, t) && setTimeout(() => {
    si(e, t) && l && l(e);
  }, 0);
}
function xa(e, n) {
  const t = ja(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const gu = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => mu(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = ii(a, e, n);
    };
    xa(e, (a) => {
      a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: l
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (xa(e, (t) => {
      var o;
      if (!t || !((o = e._clickOutside) != null && o[n.instance.$.uid])) return;
      const {
        onClick: l,
        onMousedown: a
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", a, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function yu(e) {
  const {
    modelValue: n,
    color: t,
    ...l
  } = e;
  return u(ut, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", X({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const El = F({
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
  ...su(),
  ...ee(),
  ...De(),
  ...mo(),
  ...qr(),
  ...eu(),
  ...ye(),
  ...Yt()
}, "VOverlay"), Sn = W()({
  name: "VOverlay",
  directives: {
    ClickOutside: gu
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...El()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: l,
      emit: a
    } = n;
    const o = ge("VOverlay"), i = R(), s = R(), r = R(), c = ce(e, "modelValue"), m = b({
      get: () => c.value,
      set: (G) => {
        G && e.disabled || (c.value = G);
      }
    }), {
      themeClasses: g
    } = pe(e), {
      rtlClasses: d,
      isRtl: v
    } = qe(), {
      hasContent: f,
      onAfterLeave: y
    } = go(e, m), h = Me(b(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: S,
      localTop: k,
      stackStyles: A
    } = du(m, H(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: E,
      activatorRef: T,
      target: B,
      targetEl: _,
      targetRef: P,
      activatorEvents: D,
      contentEvents: U,
      scrimEvents: V
    } = ru(e, {
      isActive: m,
      isTop: k,
      contentEl: r
    }), {
      teleportTarget: w
    } = fu(() => {
      var re, Ae, oe;
      const G = e.attach || e.contained;
      if (G) return G;
      const ae = ((re = E == null ? void 0 : E.value) == null ? void 0 : re.getRootNode()) || ((oe = (Ae = o.proxy) == null ? void 0 : Ae.$el) == null ? void 0 : oe.getRootNode());
      return ae instanceof ShadowRoot ? ae : !1;
    }), {
      dimensionStyles: x
    } = ze(e), I = cu(), {
      scopeId: O
    } = Il();
    K(() => e.disabled, (G) => {
      G && (m.value = !1);
    });
    const {
      contentStyles: M,
      updateLocation: N
    } = Yr(e, {
      isRtl: v,
      contentEl: r,
      target: B,
      isActive: m
    });
    tu(e, {
      root: i,
      contentEl: r,
      targetEl: _,
      isActive: m,
      updateLocation: N
    });
    function j(G) {
      a("click:outside", G), e.persistent ? te() : m.value = !1;
    }
    function C(G) {
      return m.value && S.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || G.target === s.value || G instanceof MouseEvent && G.shadowTarget === s.value);
    }
    be && K(m, (G) => {
      G ? window.addEventListener("keydown", p) : window.removeEventListener("keydown", p);
    }, {
      immediate: !0
    }), Re(() => {
      be && window.removeEventListener("keydown", p);
    });
    function p(G) {
      var ae, re;
      G.key === "Escape" && S.value && (e.persistent ? te() : (m.value = !1, (ae = r.value) != null && ae.contains(document.activeElement) && ((re = E.value) == null || re.focus())));
    }
    const L = xs();
    Je(() => e.closeOnBack, () => {
      ks(L, (G) => {
        S.value && m.value ? (G(!1), e.persistent ? te() : m.value = !1) : G();
      });
    });
    const $ = R();
    K(() => m.value && (e.absolute || e.contained) && w.value == null, (G) => {
      if (G) {
        const ae = Ua(i.value);
        ae && ae !== document.scrollingElement && ($.value = ae.scrollTop);
      }
    });
    function te() {
      e.noClickAnimation || r.value && bt(r.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: vn
      });
    }
    function q() {
      a("afterEnter");
    }
    function ne() {
      y(), a("afterLeave");
    }
    return Q(() => {
      var G;
      return u(ie, null, [(G = t.activator) == null ? void 0 : G.call(t, {
        isActive: m.value,
        targetRef: P,
        props: X({
          ref: T
        }, D.value, e.activatorProps)
      }), I.value && f.value && u(wi, {
        disabled: !w.value,
        to: w.value
      }, {
        default: () => [u("div", X({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": m.value,
            "v-overlay--contained": e.contained
          }, g.value, d.value, e.class],
          style: [A.value, {
            "--v-overlay-opacity": e.opacity,
            top: J($.value)
          }, e.style],
          ref: i
        }, O, l), [u(yu, X({
          color: h,
          modelValue: m.value && !!e.scrim,
          ref: s
        }, V.value), null), u(Qe, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: B.value,
          onAfterEnter: q,
          onAfterLeave: ne
        }, {
          default: () => {
            var ae;
            return [we(u("div", X({
              ref: r,
              class: ["v-overlay__content", e.contentClass],
              style: [x.value, M.value]
            }, U.value, e.contentProps), [(ae = t.default) == null ? void 0 : ae.call(t, {
              isActive: m
            })]), [[dt, m.value], [Ze("click-outside"), {
              handler: j,
              closeConditional: C,
              include: () => [E.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: E,
      scrimEl: s,
      target: B,
      animateClick: te,
      contentEl: r,
      globalTop: S,
      localTop: k,
      updateLocation: N
    };
  }
}), $n = Symbol("Forwarded refs");
function Nn(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l) return l;
    t = Object.getPrototypeOf(t);
  }
}
function Xt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[$n] = t, new Proxy(e, {
    get(a, o) {
      if (Reflect.has(a, o))
        return Reflect.get(a, o);
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const i of t)
          if (i.value && Reflect.has(i.value, o)) {
            const s = Reflect.get(i.value, o);
            return typeof s == "function" ? s.bind(i.value) : s;
          }
      }
    },
    has(a, o) {
      if (Reflect.has(a, o))
        return !0;
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const i of t)
        if (i.value && Reflect.has(i.value, o))
          return !0;
      return !1;
    },
    set(a, o, i) {
      if (Reflect.has(a, o))
        return Reflect.set(a, o, i);
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const s of t)
        if (s.value && Reflect.has(s.value, o))
          return Reflect.set(s.value, o, i);
      return !1;
    },
    getOwnPropertyDescriptor(a, o) {
      var s;
      const i = Reflect.getOwnPropertyDescriptor(a, o);
      if (i) return i;
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const r of t) {
          if (!r.value) continue;
          const c = Nn(r.value, o) ?? ("_" in r.value ? Nn((s = r.value._) == null ? void 0 : s.setupState, o) : void 0);
          if (c) return c;
        }
        for (const r of t) {
          const c = r.value && r.value[$n];
          if (!c) continue;
          const m = c.slice();
          for (; m.length; ) {
            const g = m.shift(), d = Nn(g.value, o);
            if (d) return d;
            const v = g.value && g.value[$n];
            v && m.push(...v);
          }
        }
      }
    }
  });
}
const hu = F({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...et(El({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: uo
    }
  }), ["absolute"])
}, "VMenu"), bu = W()({
  name: "VMenu",
  props: hu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ce(e, "modelValue"), {
      scopeId: a
    } = Il(), {
      isRtl: o
    } = qe(), i = Ne(), s = b(() => e.id || `v-menu-${i}`), r = R(), c = ue(Jn, null), m = Y(/* @__PURE__ */ new Set());
    Ie(Jn, {
      register() {
        m.value.add(i);
      },
      unregister() {
        m.value.delete(i);
      },
      closeParents(h) {
        setTimeout(() => {
          var S;
          !m.value.size && !e.persistent && (h == null || (S = r.value) != null && S.contentEl && !Mi(h, r.value.contentEl)) && (l.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), Re(() => c == null ? void 0 : c.unregister()), xi(() => l.value = !1);
    async function g(h) {
      var A, E, T;
      const S = h.relatedTarget, k = h.target;
      await he(), l.value && S !== k && ((A = r.value) != null && A.contentEl) && // We're the topmost menu
      ((E = r.value) != null && E.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(k) && // It isn't inside the menu body
      !r.value.contentEl.contains(k) && ((T = cn(r.value.contentEl)[0]) == null || T.focus());
    }
    K(l, (h) => {
      h ? (c == null || c.register(), document.addEventListener("focusin", g, {
        once: !0
      })) : (c == null || c.unregister(), document.removeEventListener("focusin", g));
    });
    function d(h) {
      c == null || c.closeParents(h);
    }
    function v(h) {
      var S, k, A, E, T;
      if (!e.disabled)
        if (h.key === "Tab" || h.key === "Enter" && !e.closeOnContentClick) {
          if (h.key === "Enter" && (h.target instanceof HTMLTextAreaElement || h.target instanceof HTMLInputElement && h.target.closest("form"))) return;
          h.key === "Enter" && h.preventDefault(), Ra(cn((S = r.value) == null ? void 0 : S.contentEl, !1), h.shiftKey ? "prev" : "next", (_) => _.tabIndex >= 0) || (l.value = !1, (A = (k = r.value) == null ? void 0 : k.activatorEl) == null || A.focus());
        } else e.submenu && h.key === (o.value ? "ArrowRight" : "ArrowLeft") && (l.value = !1, (T = (E = r.value) == null ? void 0 : E.activatorEl) == null || T.focus());
    }
    function f(h) {
      var k;
      if (e.disabled) return;
      const S = (k = r.value) == null ? void 0 : k.contentEl;
      S && l.value ? h.key === "ArrowDown" ? (h.preventDefault(), h.stopImmediatePropagation(), At(S, "next")) : h.key === "ArrowUp" ? (h.preventDefault(), h.stopImmediatePropagation(), At(S, "prev")) : e.submenu && (h.key === (o.value ? "ArrowRight" : "ArrowLeft") ? l.value = !1 : h.key === (o.value ? "ArrowLeft" : "ArrowRight") && (h.preventDefault(), At(S, "first"))) : (e.submenu ? h.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(h.key)) && (l.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => f(h))));
    }
    const y = b(() => X({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": s.value,
      onKeydown: f
    }, e.activatorProps));
    return Q(() => {
      const h = Sn.filterProps(e);
      return u(Sn, X({
        ref: r,
        id: s.value,
        class: ["v-menu", e.class],
        style: e.style
      }, h, {
        modelValue: l.value,
        "onUpdate:modelValue": (S) => l.value = S,
        absolute: !0,
        activatorProps: y.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": d,
        onKeydown: v
      }, a), {
        activator: t.activator,
        default: function() {
          for (var S = arguments.length, k = new Array(S), A = 0; A < S; A++)
            k[A] = arguments[A];
          return u(Se, {
            root: "VMenu"
          }, {
            default: () => {
              var E;
              return [(E = t.default) == null ? void 0 : E.call(t, ...k)];
            }
          });
        }
      });
    }), Xt({
      id: s,
      ΨopenChildren: m
    }, r);
  }
}), Su = F({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ee(),
  ...Yt({
    transition: {
      component: co
    }
  })
}, "VCounter"), ri = W()({
  name: "VCounter",
  functional: !0,
  props: Su(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = b(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return Q(() => u(Qe, {
      transition: e.transition
    }, {
      default: () => [we(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: l.value,
        max: e.max,
        value: e.value
      }) : l.value]), [[dt, e.active]])]
    })), {};
  }
}), Cu = F({
  floating: Boolean,
  ...ee()
}, "VFieldLabel"), en = W()({
  name: "VFieldLabel",
  props: Cu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Q(() => u(Oo, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), pu = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Al = F({
  appendInnerIcon: se,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: se,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: se,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => pu.includes(e)
  },
  "onClick:clear": Ve(),
  "onClick:appendInner": Ve(),
  "onClick:prependInner": Ve(),
  ...ee(),
  ...Qa(),
  ...Be(),
  ...ye()
}, "VField"), Bl = W()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...No(),
    ...Al()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const {
      themeClasses: o
    } = pe(e), {
      loaderClasses: i
    } = Ja(e), {
      focusClasses: s,
      isFocused: r,
      focus: c,
      blur: m
    } = En(e), {
      InputIcon: g
    } = $o(e), {
      roundedClasses: d
    } = Te(e), {
      rtlClasses: v
    } = qe(), f = b(() => e.dirty || e.active), y = b(() => !e.singleLine && !!(e.label || a.label)), h = Ne(), S = b(() => e.id || `input-${h}`), k = b(() => `${S.value}-messages`), A = R(), E = R(), T = R(), B = b(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: _,
      backgroundColorStyles: P
    } = Me(H(e, "bgColor")), {
      textColorClasses: D,
      textColorStyles: U
    } = Ke(b(() => e.error || e.disabled ? void 0 : f.value && r.value ? e.color : e.baseColor));
    K(f, (I) => {
      if (y.value) {
        const O = A.value.$el, M = E.value.$el;
        requestAnimationFrame(() => {
          const N = ul(O), j = M.getBoundingClientRect(), C = j.x - N.x, p = j.y - N.y - (N.height / 2 - j.height / 2), L = j.width / 0.75, $ = Math.abs(L - N.width) > 1 ? {
            maxWidth: J(L)
          } : void 0, te = getComputedStyle(O), q = getComputedStyle(M), ne = parseFloat(te.transitionDuration) * 1e3 || 150, G = parseFloat(q.getPropertyValue("--v-field-label-scale")), ae = q.getPropertyValue("color");
          O.style.visibility = "visible", M.style.visibility = "hidden", bt(O, {
            transform: `translate(${C}px, ${p}px) scale(${G})`,
            color: ae,
            ...$
          }, {
            duration: ne,
            easing: vn,
            direction: I ? "normal" : "reverse"
          }).finished.then(() => {
            O.style.removeProperty("visibility"), M.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const V = b(() => ({
      isActive: f,
      isFocused: r,
      controlRef: T,
      blur: m,
      focus: c
    }));
    function w(I) {
      I.target !== document.activeElement && I.preventDefault();
    }
    function x(I) {
      var O;
      I.key !== "Enter" && I.key !== " " || (I.preventDefault(), I.stopPropagation(), (O = e["onClick:clear"]) == null || O.call(e, new MouseEvent("click")));
    }
    return Q(() => {
      var C, p, L;
      const I = e.variant === "outlined", O = !!(a["prepend-inner"] || e.prependInnerIcon), M = !!(e.clearable || a.clear), N = !!(a["append-inner"] || e.appendInnerIcon || M), j = () => a.label ? a.label({
        ...V.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return u("div", X({
        class: ["v-field", {
          "v-field--active": f.value,
          "v-field--appended": N,
          "v-field--center-affix": e.centerAffix ?? !B.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": O,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !j(),
          [`v-field--variant-${e.variant}`]: !0
        }, o.value, _.value, s.value, i.value, d.value, v.value, e.class],
        style: [P.value, e.style],
        onClick: w
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(Cs, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: a.loader
      }), O && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(g, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (C = a["prepend-inner"]) == null ? void 0 : C.call(a, V.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && u(en, {
        key: "floating-label",
        ref: E,
        class: [D.value],
        floating: !0,
        for: S.value,
        style: U.value
      }, {
        default: () => [j()]
      }), u(en, {
        ref: A,
        for: S.value
      }, {
        default: () => [j()]
      }), (p = a.default) == null ? void 0 : p.call(a, {
        ...V.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: m
      })]), M && u(vo, {
        key: "clear"
      }, {
        default: () => [we(u("div", {
          class: "v-field__clearable",
          onMousedown: ($) => {
            $.preventDefault(), $.stopPropagation();
          }
        }, [u(Se, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [a.clear ? a.clear({
            ...V.value,
            props: {
              onKeydown: x,
              onFocus: c,
              onBlur: m,
              onClick: e["onClick:clear"]
            }
          }) : u(g, {
            name: "clear",
            onKeydown: x,
            onFocus: c,
            onBlur: m
          }, null)]
        })]), [[dt, e.dirty]])]
      }), N && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(L = a["append-inner"]) == null ? void 0 : L.call(a, V.value), e.appendInnerIcon && u(g, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", D.value],
        style: U.value
      }, [I && u(ie, null, [u("div", {
        class: "v-field__outline__start"
      }, null), y.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(en, {
        ref: E,
        floating: !0,
        for: S.value
      }, {
        default: () => [j()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), B.value && y.value && u(en, {
        ref: E,
        floating: !0,
        for: S.value
      }, {
        default: () => [j()]
      })])]);
    }), {
      controlRef: T
    };
  }
});
function ui(e) {
  const n = Object.keys(Bl.props).filter((t) => !sl(t) && t !== "class" && t !== "style");
  return il(e, n);
}
const wu = ["color", "file", "time", "date", "datetime-local", "week", "month"], ci = F({
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
  ...An(),
  ...Al()
}, "VTextField"), zt = W()({
  name: "VTextField",
  directives: {
    Intersect: kl
  },
  inheritAttrs: !1,
  props: ci(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const o = ce(e, "modelValue"), {
      isFocused: i,
      focus: s,
      blur: r
    } = En(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), m = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), g = b(() => ["plain", "underlined"].includes(e.variant));
    function d(B, _) {
      var P, D;
      !e.autofocus || !B || (D = (P = _[0].target) == null ? void 0 : P.focus) == null || D.call(P);
    }
    const v = R(), f = R(), y = R(), h = b(() => wu.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
    function S() {
      var B;
      y.value !== document.activeElement && ((B = y.value) == null || B.focus()), i.value || s();
    }
    function k(B) {
      l("mousedown:control", B), B.target !== y.value && (S(), B.preventDefault());
    }
    function A(B) {
      S(), l("click:control", B);
    }
    function E(B) {
      B.stopPropagation(), S(), he(() => {
        o.value = null, Ma(e["onClick:clear"], B);
      });
    }
    function T(B) {
      var P;
      const _ = B.target;
      if (o.value = _.value, (P = e.modelModifiers) != null && P.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const D = [_.selectionStart, _.selectionEnd];
        he(() => {
          _.selectionStart = D[0], _.selectionEnd = D[1];
        });
      }
    }
    return Q(() => {
      const B = !!(a.counter || e.counter !== !1 && e.counter != null), _ = !!(B || a.details), [P, D] = xn(t), {
        modelValue: U,
        ...V
      } = pt.filterProps(e), w = ui(e);
      return u(pt, X({
        ref: v,
        modelValue: o.value,
        "onUpdate:modelValue": (x) => o.value = x,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": g.value
        }, e.class],
        style: e.style
      }, P, V, {
        centerAffix: !g.value,
        focused: i.value
      }), {
        ...a,
        default: (x) => {
          let {
            id: I,
            isDisabled: O,
            isDirty: M,
            isReadonly: N,
            isValid: j
          } = x;
          return u(Bl, X({
            ref: f,
            onMousedown: k,
            onClick: A,
            "onClick:clear": E,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, w, {
            id: I.value,
            active: h.value || M.value,
            dirty: M.value || e.dirty,
            disabled: O.value,
            focused: i.value,
            error: j.value === !1
          }), {
            ...a,
            default: (C) => {
              let {
                props: {
                  class: p,
                  ...L
                }
              } = C;
              const $ = we(u("input", X({
                ref: y,
                value: o.value,
                onInput: T,
                autofocus: e.autofocus,
                readonly: N.value,
                disabled: O.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: r
              }, L, D), null), [[Ze("intersect"), {
                handler: d
              }, null, {
                once: !0
              }]]);
              return u(ie, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), a.default ? u("div", {
                class: p,
                "data-no-activator": ""
              }, [a.default(), $]) : ki($, {
                class: p
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: _ ? (x) => {
          var I;
          return u(ie, null, [(I = a.details) == null ? void 0 : I.call(a, x), B && u(ie, null, [u("span", null, null), u(ri, {
            active: e.persistentCounter || i.value,
            value: c.value,
            max: m.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), Xt({}, v, f, y);
  }
}), xu = F({
  renderless: Boolean,
  ...ee()
}, "VVirtualScrollItem"), ku = W()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: xu(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const {
      resizeRef: o,
      contentRect: i
    } = Lt(void 0, "border");
    K(() => {
      var s;
      return (s = i.value) == null ? void 0 : s.height;
    }, (s) => {
      s != null && l("update:height", s);
    }), Q(() => {
      var s, r;
      return e.renderless ? u(ie, null, [(s = a.default) == null ? void 0 : s.call(a, {
        itemRef: o
      })]) : u("div", X({
        ref: o,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(r = a.default) == null ? void 0 : r.call(a)]);
    });
  }
}), Vu = -1, Pu = 1, Dn = 100, _u = F({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Iu(e, n) {
  const t = pl(), l = Y(0);
  Fe(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = Y(0), o = Y(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (l.value || 16)
  ) || 1), i = Y(0), s = Y(0), r = R(), c = R();
  let m = 0;
  const {
    resizeRef: g,
    contentRect: d
  } = Lt();
  Fe(() => {
    g.value = r.value;
  });
  const v = b(() => {
    var C;
    return r.value === document.documentElement ? t.height.value : ((C = d.value) == null ? void 0 : C.height) || parseInt(e.height) || 0;
  }), f = b(() => !!(r.value && c.value && v.value && l.value));
  let y = Array.from({
    length: n.value.length
  }), h = Array.from({
    length: n.value.length
  });
  const S = Y(0);
  let k = -1;
  function A(C) {
    return y[C] || l.value;
  }
  const E = Ti(() => {
    const C = performance.now();
    h[0] = 0;
    const p = n.value.length;
    for (let L = 1; L <= p - 1; L++)
      h[L] = (h[L - 1] || 0) + A(L - 1);
    S.value = Math.max(S.value, performance.now() - C);
  }, S), T = K(f, (C) => {
    C && (T(), m = c.value.offsetTop, E.immediate(), O(), ~k && he(() => {
      be && window.requestAnimationFrame(() => {
        N(k), k = -1;
      });
    }));
  });
  xe(() => {
    E.clear();
  });
  function B(C, p) {
    const L = y[C], $ = l.value;
    l.value = $ ? Math.min(l.value, p) : p, (L !== p || $ !== l.value) && (y[C] = p, E());
  }
  function _(C) {
    return C = Ge(C, 0, n.value.length - 1), h[C] || 0;
  }
  function P(C) {
    return Eu(h, C);
  }
  let D = 0, U = 0, V = 0;
  K(v, (C, p) => {
    p && (O(), C < p && requestAnimationFrame(() => {
      U = 0, O();
    }));
  });
  function w() {
    if (!r.value || !c.value) return;
    const C = r.value.scrollTop, p = performance.now();
    p - V > 500 ? (U = Math.sign(C - D), m = c.value.offsetTop) : U = C - D, D = C, V = p, O();
  }
  function x() {
    !r.value || !c.value || (U = 0, V = 0, O());
  }
  let I = -1;
  function O() {
    cancelAnimationFrame(I), I = requestAnimationFrame(M);
  }
  function M() {
    if (!r.value || !v.value) return;
    const C = D - m, p = Math.sign(U), L = Math.max(0, C - Dn), $ = Ge(P(L), 0, n.value.length), te = C + v.value + Dn, q = Ge(P(te) + 1, $ + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (p !== Vu || $ < a.value) && (p !== Pu || q > o.value)
    ) {
      const ne = _(a.value) - _($), G = _(q) - _(o.value);
      Math.max(ne, G) > Dn ? (a.value = $, o.value = q) : ($ <= 0 && (a.value = $), q >= n.value.length && (o.value = q));
    }
    i.value = _(a.value), s.value = _(n.value.length) - _(o.value);
  }
  function N(C) {
    const p = _(C);
    !r.value || C && !p ? k = C : r.value.scrollTop = p;
  }
  const j = b(() => n.value.slice(a.value, o.value).map((C, p) => ({
    raw: C,
    index: p + a.value
  })));
  return K(n, () => {
    y = Array.from({
      length: n.value.length
    }), h = Array.from({
      length: n.value.length
    }), E.immediate(), O();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: O,
    containerRef: r,
    markerRef: c,
    computedItems: j,
    paddingTop: i,
    paddingBottom: s,
    scrollToIndex: N,
    handleScroll: w,
    handleScrollend: x,
    handleItemResize: B
  };
}
function Eu(e, n) {
  let t = e.length - 1, l = 0, a = 0, o = null, i = -1;
  if (e[t] < n)
    return t;
  for (; l <= t; )
    if (a = l + t >> 1, o = e[a], o > n)
      t = a - 1;
    else if (o < n)
      i = a, l = a + 1;
    else return o === n ? a : l;
  return i;
}
const Au = F({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ..._u(),
  ...ee(),
  ...De()
}, "VVirtualScroll"), Bu = W()({
  name: "VVirtualScroll",
  props: Au(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ge("VVirtualScroll"), {
      dimensionStyles: a
    } = ze(e), {
      calculateVisibleItems: o,
      containerRef: i,
      markerRef: s,
      handleScroll: r,
      handleScrollend: c,
      handleItemResize: m,
      scrollToIndex: g,
      paddingTop: d,
      paddingBottom: v,
      computedItems: f
    } = Iu(e, H(e, "items"));
    return Je(() => e.renderless, () => {
      function y() {
        var k, A;
        const S = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[S]("scroll", r, {
          passive: !0
        }), document[S]("scrollend", c)) : ((k = i.value) == null || k[S]("scroll", r, {
          passive: !0
        }), (A = i.value) == null || A[S]("scrollend", c));
      }
      ct(() => {
        i.value = Ua(l.vnode.el, !0), y(!0);
      }), xe(y);
    }), Q(() => {
      const y = f.value.map((h) => u(ku, {
        key: h.index,
        renderless: e.renderless,
        "onUpdate:height": (S) => m(h.index, S)
      }, {
        default: (S) => {
          var k;
          return (k = t.default) == null ? void 0 : k.call(t, {
            item: h.raw,
            index: h.index,
            ...S
          });
        }
      }));
      return e.renderless ? u(ie, null, [u("div", {
        ref: s,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: J(d.value)
        }
      }, null), y, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: J(v.value)
        }
      }, null)]) : u("div", {
        ref: i,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: r,
        onScrollend: c,
        style: [a.value, e.style]
      }, [u("div", {
        ref: s,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: J(d.value),
          paddingBottom: J(v.value)
        }
      }, [y])]);
    }), {
      calculateVisibleItems: o,
      scrollToIndex: g
    };
  }
});
function Tu(e, n) {
  const t = Y(!1);
  let l;
  function a(s) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function o() {
    await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => {
      if (t.value) {
        const r = K(t, () => {
          r(), s();
        });
      } else s();
    });
  }
  async function i(s) {
    var m, g;
    if (s.key === "Tab" && ((m = n.value) == null || m.focus()), !["PageDown", "PageUp", "Home", "End"].includes(s.key)) return;
    const r = (g = e.value) == null ? void 0 : g.$el;
    if (!r) return;
    (s.key === "Home" || s.key === "End") && r.scrollTo({
      top: s.key === "Home" ? 0 : r.scrollHeight,
      behavior: "smooth"
    }), await o();
    const c = r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (s.key === "PageDown" || s.key === "Home") {
      const d = r.getBoundingClientRect().top;
      for (const v of c)
        if (v.getBoundingClientRect().top >= d) {
          v.focus();
          break;
        }
    } else {
      const d = r.getBoundingClientRect().bottom;
      for (const v of [...c].reverse())
        if (v.getBoundingClientRect().bottom <= d) {
          v.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: a,
    onKeydown: i
  };
}
const Ou = F({
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
    type: se,
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
  ...ei({
    itemChildren: !1
  })
}, "Select"), Lu = F({
  ...Ou(),
  ...et(ci({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Yt({
    transition: {
      component: uo
    }
  })
}, "VSelect"), Zn = W()({
  name: "VSelect",
  props: Lu(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: l
    } = gl(), a = R(), o = R(), i = R(), s = ce(e, "menu"), r = b({
      get: () => s.value,
      set: (C) => {
        var p;
        s.value && !C && ((p = o.value) != null && p.ΨopenChildren.size) || (s.value = C);
      }
    }), {
      items: c,
      transformIn: m,
      transformOut: g
    } = zr(e), d = ce(e, "modelValue", [], (C) => m(C === null ? [null] : Le(C)), (C) => {
      const p = g(C);
      return e.multiple ? p : p[0] ?? null;
    }), v = b(() => typeof e.counterValue == "function" ? e.counterValue(d.value) : typeof e.counterValue == "number" ? e.counterValue : d.value.length), f = Do(), y = b(() => d.value.map((C) => C.value)), h = Y(!1), S = b(() => r.value ? e.closeText : e.openText);
    let k = "", A;
    const E = b(() => e.hideSelected ? c.value.filter((C) => !d.value.some((p) => e.valueComparator(p, C))) : c.value), T = b(() => e.hideNoData && !E.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value)), B = b(() => {
      var C;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((C = e.menuProps) == null ? void 0 : C.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), _ = R(), P = Tu(_, a);
    function D(C) {
      e.openOnClear && (r.value = !0);
    }
    function U() {
      T.value || (r.value = !r.value);
    }
    function V(C) {
      Dl(C) && w(C);
    }
    function w(C) {
      var te, q;
      if (!C.key || e.readonly || f != null && f.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(C.key) && C.preventDefault(), ["Enter", "ArrowDown", " "].includes(C.key) && (r.value = !0), ["Escape", "Tab"].includes(C.key) && (r.value = !1), C.key === "Home" ? (te = _.value) == null || te.focus("first") : C.key === "End" && ((q = _.value) == null || q.focus("last"));
      const p = 1e3;
      if (e.multiple || !Dl(C)) return;
      const L = performance.now();
      L - A > p && (k = ""), k += C.key.toLowerCase(), A = L;
      const $ = c.value.find((ne) => ne.title.toLowerCase().startsWith(k));
      if ($ !== void 0) {
        d.value = [$];
        const ne = E.value.indexOf($);
        be && window.requestAnimationFrame(() => {
          var G;
          ne >= 0 && ((G = i.value) == null || G.scrollToIndex(ne));
        });
      }
    }
    function x(C) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!C.props.disabled)
        if (e.multiple) {
          const L = d.value.findIndex((te) => e.valueComparator(te.value, C.value)), $ = p ?? !~L;
          if (~L) {
            const te = $ ? [...d.value, C] : [...d.value];
            te.splice(L, 1), d.value = te;
          } else $ && (d.value = [...d.value, C]);
        } else {
          const L = p !== !1;
          d.value = L ? [C] : [], he(() => {
            r.value = !1;
          });
        }
    }
    function I(C) {
      var p;
      (p = _.value) != null && p.$el.contains(C.relatedTarget) || (r.value = !1);
    }
    function O() {
      var C;
      e.eager && ((C = i.value) == null || C.calculateVisibleItems());
    }
    function M() {
      var C;
      h.value && ((C = a.value) == null || C.focus());
    }
    function N(C) {
      h.value = !0;
    }
    function j(C) {
      if (C == null) d.value = [];
      else if (dn(a.value, ":autofill") || dn(a.value, ":-webkit-autofill")) {
        const p = c.value.find((L) => L.title === C);
        p && x(p);
      } else a.value && (a.value.value = "");
    }
    return K(r, () => {
      if (!e.hideSelected && r.value && d.value.length) {
        const C = E.value.findIndex((p) => d.value.some((L) => e.valueComparator(L.value, p.value)));
        be && window.requestAnimationFrame(() => {
          var p;
          C >= 0 && ((p = i.value) == null || p.scrollToIndex(C));
        });
      }
    }), K(() => e.items, (C, p) => {
      r.value || h.value && !p.length && C.length && (r.value = !0);
    }), Q(() => {
      const C = !!(e.chips || t.chip), p = !!(!e.hideNoData || E.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), L = d.value.length > 0, $ = zt.filterProps(e), te = L || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(zt, X({
        ref: a
      }, $, {
        modelValue: d.value.map((q) => q.props.value).join(", "),
        "onUpdate:modelValue": j,
        focused: h.value,
        "onUpdate:focused": (q) => h.value = q,
        validationValue: d.externalValue,
        counterValue: v.value,
        dirty: L,
        class: ["v-select", {
          "v-select--active-menu": r.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": d.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: te,
        "onClick:clear": D,
        "onMousedown:control": U,
        onBlur: I,
        onKeydown: w,
        "aria-label": l(S.value),
        title: l(S.value)
      }), {
        ...t,
        default: () => u(ie, null, [u(bu, X({
          ref: o,
          modelValue: r.value,
          "onUpdate:modelValue": (q) => r.value = q,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: T.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: O,
          onAfterLeave: M
        }, B.value), {
          default: () => [p && u(Gr, X({
            ref: _,
            selected: y.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (q) => q.preventDefault(),
            onKeydown: V,
            onFocusin: N,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, P, e.listProps), {
            default: () => {
              var q, ne, G;
              return [(q = t["prepend-item"]) == null ? void 0 : q.call(t), !E.value.length && !e.hideNoData && (((ne = t["no-data"]) == null ? void 0 : ne.call(t)) ?? u(hn, {
                title: l(e.noDataText)
              }, null)), u(Bu, {
                ref: i,
                renderless: !0,
                items: E.value
              }, {
                default: (ae) => {
                  var Ol;
                  let {
                    item: re,
                    index: Ae,
                    itemRef: oe
                  } = ae;
                  const Tl = X(re.props, {
                    ref: oe,
                    key: Ae,
                    onClick: () => x(re, null)
                  });
                  return ((Ol = t.item) == null ? void 0 : Ol.call(t, {
                    item: re,
                    index: Ae,
                    props: Tl
                  })) ?? u(hn, X(Tl, {
                    role: "option"
                  }), {
                    prepend: (fi) => {
                      let {
                        isSelected: vi
                      } = fi;
                      return u(ie, null, [e.multiple && !e.hideSelected ? u(Kn, {
                        key: re.value,
                        modelValue: vi,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, re.props.prependAvatar && u($t, {
                        image: re.props.prependAvatar
                      }, null), re.props.prependIcon && u(Ce, {
                        icon: re.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (G = t["append-item"]) == null ? void 0 : G.call(t)];
            }
          })]
        }), d.value.map((q, ne) => {
          function G(oe) {
            oe.stopPropagation(), oe.preventDefault(), x(q, !1);
          }
          const ae = {
            "onClick:close": G,
            onKeydown(oe) {
              oe.key !== "Enter" && oe.key !== " " || (oe.preventDefault(), oe.stopPropagation(), G(oe));
            },
            onMousedown(oe) {
              oe.preventDefault(), oe.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, re = C ? !!t.chip : !!t.selection, Ae = re ? Fa(C ? t.chip({
            item: q,
            index: ne,
            props: ae
          }) : t.selection({
            item: q,
            index: ne
          })) : void 0;
          if (!(re && !Ae))
            return u("div", {
              key: q.value,
              class: "v-select__selection"
            }, [C ? t.chip ? u(Se, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: q.title
                }
              }
            }, {
              default: () => [Ae]
            }) : u(Wo, X({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: q.title,
              disabled: q.props.disabled
            }, ae), null) : Ae ?? u("span", {
              class: "v-select__selection-text"
            }, [q.title, e.multiple && ne < d.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [Ye(",")])])]);
        })]),
        "append-inner": function() {
          var ae;
          for (var q = arguments.length, ne = new Array(q), G = 0; G < q; G++)
            ne[G] = arguments[G];
          return u(ie, null, [(ae = t["append-inner"]) == null ? void 0 : ae.call(t, ...ne), e.menuIcon ? u(Ce, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), Xt({
      isFocused: h,
      menu: r,
      select: x
    }, a);
  }
}), di = Symbol.for("vuetify:layout");
function Mu() {
  const e = ue(di);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function Ru(e) {
  const n = Y(e());
  let t = -1;
  function l() {
    clearInterval(t);
  }
  function a() {
    l(), he(() => n.value = e());
  }
  function o(i) {
    const s = i ? getComputedStyle(i) : {
      transitionDuration: 0.2
    }, r = parseFloat(s.transitionDuration) * 1e3 || 200;
    if (l(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const m = performance.now() - c + r;
      n.value = Math.max(e() - m, 0), n.value <= 0 && l();
    }, r);
  }
  return xe(l), {
    clear: l,
    time: n,
    start: o,
    reset: a
  };
}
const Fu = F({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ..._n({
    location: "bottom"
  }),
  ...hl(),
  ...Be(),
  ...lt(),
  ...ye(),
  ...et(El({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), $u = W()({
  name: "VSnackbar",
  props: Fu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ce(e, "modelValue"), {
      positionClasses: a
    } = bl(e), {
      scopeId: o
    } = Il(), {
      themeClasses: i
    } = pe(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = Wt(e), {
      roundedClasses: m
    } = Te(e), g = Ru(() => Number(e.timeout)), d = R(), v = R(), f = Y(!1), y = Y(0), h = R(), S = ue(di, void 0);
    Je(() => !!S, () => {
      const V = Mu();
      Fe(() => {
        h.value = V.mainStyles.value;
      });
    }), K(l, A), K(() => e.timeout, A), ct(() => {
      l.value && A();
    });
    let k = -1;
    function A() {
      g.reset(), window.clearTimeout(k);
      const V = Number(e.timeout);
      if (!l.value || V === -1) return;
      const w = ol(v.value);
      g.start(w), k = window.setTimeout(() => {
        l.value = !1;
      }, V);
    }
    function E() {
      g.reset(), window.clearTimeout(k);
    }
    function T() {
      f.value = !0, E();
    }
    function B() {
      f.value = !1, A();
    }
    function _(V) {
      y.value = V.touches[0].clientY;
    }
    function P(V) {
      Math.abs(y.value - V.changedTouches[0].clientY) > 50 && (l.value = !1);
    }
    function D() {
      f.value && B();
    }
    const U = b(() => e.location.split(" ").reduce((V, w) => (V[`v-snackbar--${w}`] = !0, V), {}));
    return Q(() => {
      const V = Sn.filterProps(e), w = !!(t.default || t.text || e.text);
      return u(Sn, X({
        ref: d,
        class: ["v-snackbar", {
          "v-snackbar--active": l.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, U.value, a.value, e.class],
        style: [h.value, e.style]
      }, V, {
        modelValue: l.value,
        "onUpdate:modelValue": (x) => l.value = x,
        contentProps: X({
          class: ["v-snackbar__wrapper", i.value, s.value, m.value, c.value],
          style: [r.value],
          onPointerenter: T,
          onPointerleave: B
        }, V.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: _,
        onTouchend: P,
        onAfterLeave: D
      }, o), {
        default: () => {
          var x, I;
          return [Ut(!1, "v-snackbar"), e.timer && !f.value && u("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [u(Xa, {
            ref: v,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": g.time.value
          }, null)]), w && u("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((x = t.text) == null ? void 0 : x.call(t)) ?? e.text, (I = t.default) == null ? void 0 : I.call(t)]), t.actions && u(Se, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: l
            })])]
          })];
        },
        activator: t.activator
      });
    }), Xt({}, d);
  }
}), Nu = F({
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
  ...An(),
  ...Al()
}, "VTextarea"), Cn = W()({
  name: "VTextarea",
  directives: {
    Intersect: kl
  },
  inheritAttrs: !1,
  props: Nu(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const o = ce(e, "modelValue"), {
      isFocused: i,
      focus: s,
      blur: r
    } = En(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), m = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function g(V, w) {
      var x, I;
      !e.autofocus || !V || (I = (x = w[0].target) == null ? void 0 : x.focus) == null || I.call(x);
    }
    const d = R(), v = R(), f = Y(""), y = R(), h = b(() => e.persistentPlaceholder || i.value || e.active);
    function S() {
      var V;
      y.value !== document.activeElement && ((V = y.value) == null || V.focus()), i.value || s();
    }
    function k(V) {
      S(), l("click:control", V);
    }
    function A(V) {
      l("mousedown:control", V);
    }
    function E(V) {
      V.stopPropagation(), S(), he(() => {
        o.value = "", Ma(e["onClick:clear"], V);
      });
    }
    function T(V) {
      var x;
      const w = V.target;
      if (o.value = w.value, (x = e.modelModifiers) != null && x.trim) {
        const I = [w.selectionStart, w.selectionEnd];
        he(() => {
          w.selectionStart = I[0], w.selectionEnd = I[1];
        });
      }
    }
    const B = R(), _ = R(+e.rows), P = b(() => ["plain", "underlined"].includes(e.variant));
    Fe(() => {
      e.autoGrow || (_.value = +e.rows);
    });
    function D() {
      e.autoGrow && he(() => {
        if (!B.value || !v.value) return;
        const V = getComputedStyle(B.value), w = getComputedStyle(v.value.$el), x = parseFloat(V.getPropertyValue("--v-field-padding-top")) + parseFloat(V.getPropertyValue("--v-input-padding-top")) + parseFloat(V.getPropertyValue("--v-field-padding-bottom")), I = B.value.scrollHeight, O = parseFloat(V.lineHeight), M = Math.max(parseFloat(e.rows) * O + x, parseFloat(w.getPropertyValue("--v-input-control-height"))), N = parseFloat(e.maxRows) * O + x || 1 / 0, j = Ge(I ?? 0, M, N);
        _.value = Math.floor((j - x) / O), f.value = J(j);
      });
    }
    ct(D), K(o, D), K(() => e.rows, D), K(() => e.maxRows, D), K(() => e.density, D);
    let U;
    return K(B, (V) => {
      V ? (U = new ResizeObserver(D), U.observe(B.value)) : U == null || U.disconnect();
    }), Re(() => {
      U == null || U.disconnect();
    }), Q(() => {
      const V = !!(a.counter || e.counter || e.counterValue), w = !!(V || a.details), [x, I] = xn(t), {
        modelValue: O,
        ...M
      } = pt.filterProps(e), N = ui(e);
      return u(pt, X({
        ref: d,
        modelValue: o.value,
        "onUpdate:modelValue": (j) => o.value = j,
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
      }, x, M, {
        centerAffix: _.value === 1 && !P.value,
        focused: i.value
      }), {
        ...a,
        default: (j) => {
          let {
            id: C,
            isDisabled: p,
            isDirty: L,
            isReadonly: $,
            isValid: te
          } = j;
          return u(Bl, X({
            ref: v,
            style: {
              "--v-textarea-control-height": f.value
            },
            onClick: k,
            onMousedown: A,
            "onClick:clear": E,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, N, {
            id: C.value,
            active: h.value || L.value,
            centerAffix: _.value === 1 && !P.value,
            dirty: L.value || e.dirty,
            disabled: p.value,
            focused: i.value,
            error: te.value === !1
          }), {
            ...a,
            default: (q) => {
              let {
                props: {
                  class: ne,
                  ...G
                }
              } = q;
              return u(ie, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), we(u("textarea", X({
                ref: y,
                class: ne,
                value: o.value,
                onInput: T,
                autofocus: e.autofocus,
                readonly: $.value,
                disabled: p.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: S,
                onBlur: r
              }, G, I), null), [[Ze("intersect"), {
                handler: g
              }, null, {
                once: !0
              }]]), e.autoGrow && we(u("textarea", {
                class: [ne, "v-textarea__sizer"],
                id: `${G.id}-sizer`,
                "onUpdate:modelValue": (ae) => o.value = ae,
                ref: B,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Vi, o.value]]), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: w ? (j) => {
          var C;
          return u(ie, null, [(C = a.details) == null ? void 0 : C.call(a, j), V && u(ie, null, [u("span", null, null), u(ri, {
            active: e.persistentCounter || i.value,
            value: c.value,
            max: m.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), Xt({}, d, v, y);
  }
}), Du = /* @__PURE__ */ el({
  __name: "BFGenerate",
  setup(e) {
    const n = R(""), t = R(""), l = R(!1), a = R("success"), o = R(""), i = Aa(), s = R(ot[0].name);
    r(ot[0].name), K(s, (g, d) => {
      r(g);
    });
    function r(g) {
      if (g === "Custom") return;
      const d = ot.find((v) => v.name === g);
      [
        "inc",
        "dec",
        "incVal",
        "decVal",
        "output",
        "input",
        "loopStart",
        "loopEnd"
      ].forEach((v, f) => {
        i.value[f].model = d.markSpec[v];
      });
    }
    function c() {
      t.value = "";
      const g = n.value.split("");
      let d = "";
      g.forEach((v, f) => {
        if (d === v)
          t.value += i.value[
            4
            /* OUTPUT */
          ].model;
        else {
          f > 0 && (t.value += i.value[
            0
            /* INC */
          ].model), d = v;
          const y = Ll.factor(v.charCodeAt(0));
          y.forEach((h, S) => {
            t.value += i.value[
              2
              /* INCVAL */
            ].model.repeat(h), S < y.length - 1 && (t.value += [
              i.value[
                6
                /* LOOPSTART */
              ].model,
              i.value[
                0
                /* INC */
              ].model
            ].join(""));
          }), t.value += [
            i.value[
              1
              /* DEC */
            ].model,
            i.value[
              3
              /* DECVAL */
            ].model,
            i.value[
              7
              /* LOOPEND */
            ].model
          ].join("").repeat(y.length - 1), t.value += [
            i.value[
              0
              /* INC */
            ].model.repeat(y.length - 1),
            i.value[
              4
              /* OUTPUT */
            ].model
          ].join("");
        }
      });
    }
    function m() {
      Ll.copyToClipboard(t.value) ? (o.value = "Success", l.value = !0) : (o.value = "Failed", a.value = "error", l.value = !0);
    }
    return (g, d) => (Pe(), ht(ie, null, [
      u(Xe, null, {
        default: z(() => [
          u(ve, null, {
            default: z(() => [
              u(fe, {
                cols: "12",
                lg: "6"
              }, {
                default: z(() => [
                  u(Xe, null, {
                    default: z(() => [
                      u(ve, null, {
                        default: z(() => [
                          u(fe, null, {
                            default: z(() => [
                              u(Cn, {
                                label: "String",
                                name: "code",
                                modelValue: n.value,
                                "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
                                clearable: ""
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      u(ve, { "no-gutters": "" }, {
                        default: z(() => [
                          u(fe, null, {
                            default: z(() => [
                              u(Co, null, {
                                default: z(() => [
                                  u(So, { title: "Instruction Settings" }, {
                                    default: z(() => [
                                      u(yn, null, {
                                        default: z(() => [
                                          u(Xe, null, {
                                            default: z(() => [
                                              u(ve, { "no-gutters": "" }, {
                                                default: z(() => [
                                                  u(Zn, {
                                                    label: "Instruction Preset",
                                                    items: ke(ot).map((v) => v.name),
                                                    modelValue: s.value,
                                                    "onUpdate:modelValue": d[1] || (d[1] = (v) => s.value = v)
                                                  }, null, 8, ["items", "modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              u(ve, { "no-gutters": "" }, {
                                                default: z(() => [
                                                  (Pe(!0), ht(ie, null, Pt(ke(i), (v) => (Pe(), at(fe, { cols: "3" }, {
                                                    default: z(() => [
                                                      u(zt, {
                                                        label: v.label,
                                                        density: "compact",
                                                        class: "mx-1",
                                                        variant: s.value !== "Custom" ? "outlined" : "filled",
                                                        readonly: s.value !== "Custom",
                                                        modelValue: v.model,
                                                        "onUpdate:modelValue": (f) => v.model = f
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
                      u(ve, null, {
                        default: z(() => [
                          u(fe, null, {
                            default: z(() => [
                              u(Bt, {
                                color: "primary",
                                block: "",
                                onClick: d[2] || (d[2] = (v) => c())
                              }, {
                                default: z(() => d[6] || (d[6] = [
                                  Ye(" Convert ")
                                ])),
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
              u(fe, {
                cols: "12",
                lg: "6"
              }, {
                default: z(() => [
                  u(Xe, null, {
                    default: z(() => [
                      u(ve, null, {
                        default: z(() => [
                          u(fe, null, {
                            default: z(() => [
                              u(Cn, {
                                label: "Output",
                                name: "output",
                                modelValue: t.value,
                                "onUpdate:modelValue": d[3] || (d[3] = (v) => t.value = v),
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
                      u(ve, null, {
                        default: z(() => [
                          u(fe, null, {
                            default: z(() => [
                              u(Bt, {
                                color: "primary",
                                block: "",
                                onClick: d[4] || (d[4] = (v) => m())
                              }, {
                                default: z(() => d[7] || (d[7] = [
                                  Ye(" Copy ")
                                ])),
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
      u($u, {
        modelValue: l.value,
        "onUpdate:modelValue": d[5] || (d[5] = (v) => l.value = v),
        color: a.value
      }, {
        default: z(() => [
          Ye(_t(o.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "color"])
    ], 64));
  }
});
var ka = "M14,19H18V5H14M6,19H10V5H6V19Z", zu = "M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z", Va = "M8,5.14V19.14L19,12.14L8,5.14Z", Hu = "M5,5V19H8V5M10,5V19L21,12", Pa = "M18,18H6V6H18V18Z", Oe;
let rn = (Oe = class {
  constructor(n) {
    le(this, "id");
    this.id = n;
  }
  toString() {
    return Oe.errorMsgs[this.id];
  }
}, le(Oe, "INVALID_SYNTAX", 1), le(Oe, "UNMATCHED_LOOP", 2), le(Oe, "errorMsgs", {
  [Oe.INVALID_SYNTAX]: "Invalid syntax",
  [Oe.UNMATCHED_LOOP]: "Unmatched loop"
}), Oe);
class zn {
  constructor(n, t, l) {
    le(this, "error");
    le(this, "line");
    le(this, "col");
    this.error = new rn(n), this.line = t, this.col = l;
  }
}
var Ue = /* @__PURE__ */ ((e) => (e[e.HALTED = 0] = "HALTED", e[e.RUNNING = 1] = "RUNNING", e[e.WAITING_INPUT = 2] = "WAITING_INPUT", e))(Ue || {});
class tn {
  constructor(n, t, l) {
    le(this, "id");
    le(this, "stdout");
    le(this, "error");
    this.id = n, this.stdout = t, this.error = l;
  }
}
class ju {
  constructor() {
    le(this, "_progMem");
    le(this, "_progPtr");
    le(this, "_mem");
    le(this, "_ptr");
    le(this, "loopStack");
    le(this, "_mark");
    this._mark = new Z(), this.reset();
  }
  setMark(n) {
    this._mark = n;
  }
  load(n) {
    let t = {};
    Object.entries(this._mark).forEach(([i, s]) => {
      Array.isArray(s) ? s.forEach((r) => t[r.replace(/\s/g, "")] = Z.enum[i]) : t[s.replace(/\s/g, "")] = Z.enum[i];
    });
    const l = new RegExp(
      "^s*(" + Object.values(this._mark).map((i) => Array.isArray(i) ? i.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s/g, "")).join("|") : i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s/g, "")).sort((i, s) => s.length - i.length).join("|") + ")(.*)$",
      "s"
    );
    let a, o = n.replace(/\s/g, "");
    do {
      if (a = o.match(l), a === null || !(a[1] in t))
        return new zn(rn.INVALID_SYNTAX, 0, 0);
      this._progMem.push(t[a[1]]), o = a[2];
    } while (o !== "");
    return !0;
  }
  reset() {
    this._progPtr = 0, this._progMem = [], this._ptr = 0, this._mem = [], this.loopStack = [];
  }
  step() {
    if (this._progPtr >= this._progMem.length)
      return new tn(Ue.HALTED, "");
    const n = new tn(Ue.RUNNING, "");
    switch (this._progMem[this._progPtr]) {
      case Z.enum.inc:
        this._ptr++;
        break;
      case Z.enum.dec:
        this._ptr--;
        break;
      case Z.enum.incVal:
        this._mem[this._ptr] === void 0 ? this._mem[this._ptr] = 1 : this._mem[this._ptr]++;
        break;
      case Z.enum.decVal:
        this._mem[this._ptr] === void 0 ? this._mem[this._ptr] = -1 : this._mem[this._ptr]--;
        break;
      case Z.enum.output:
        n.stdout = String.fromCharCode(this._mem[this._ptr]);
        break;
      case Z.enum.input:
        n.id = Ue.WAITING_INPUT;
        break;
      case Z.enum.loopStart:
        if (this.loopStack.push(this._progPtr), this._mem[this._ptr] === 0) {
          let l = this.loopStack.length;
          do
            switch (this._progPtr++, this._progMem[this._progPtr]) {
              case Z.enum.loopStart:
                this.loopStack.push(this._progPtr);
                break;
              case Z.enum.loopEnd:
                if (this.loopStack.pop() === void 0)
                  return new tn(
                    Ue.HALTED,
                    "",
                    new zn(rn.UNMATCHED_LOOP, 0, 0)
                    // Line and column is not implemented yet
                  );
                break;
            }
          while (this.loopStack.length >= l);
        }
        break;
      case Z.enum.loopEnd:
        let t = this.loopStack.pop();
        if (t === void 0)
          return new tn(
            Ue.HALTED,
            "",
            new zn(rn.UNMATCHED_LOOP, 0, 0)
            // Line and column is not implemented yet
          );
        this._mem[this._ptr] !== 0 && (this._progPtr = t, this.loopStack.push(t));
        break;
    }
    return this._progPtr++, n;
  }
  store(n) {
    this._mem[this._ptr] = n.charCodeAt(0);
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
const He = class He {
  static initialize() {
    window.addEventListener("message", (n) => {
      n.source !== window || n.data !== He._MESSAGE_NAME || (n.stopPropagation(), He._calls.length > 0 && He._calls.shift()());
    }, !0);
  }
  static asyncCall(n) {
    He._calls.push(n), window.postMessage(He._MESSAGE_NAME, "*");
  }
};
le(He, "_calls", []), le(He, "_MESSAGE_NAME", "async-call-message");
let pn = He;
const Uu = F({
  color: String,
  ...ft(),
  ...ee(),
  ...De(),
  ...mt(),
  ..._n(),
  ...hl(),
  ...Be(),
  ...de(),
  ...ye()
}, "VSheet"), nn = W()({
  name: "VSheet",
  props: Uu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = pe(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: o
    } = Me(H(e, "color")), {
      borderClasses: i
    } = vt(e), {
      dimensionStyles: s
    } = ze(e), {
      elevationClasses: r
    } = gt(e), {
      locationStyles: c
    } = yl(e), {
      positionClasses: m
    } = bl(e), {
      roundedClasses: g
    } = Te(e);
    return Q(() => u(e.tag, {
      class: ["v-sheet", l.value, a.value, i.value, r.value, m.value, g.value, e.class],
      style: [o.value, s.value, c.value, e.style]
    }, t)), {};
  }
}), Wu = { class: "mx-2" }, Gu = { class: "mx-2" }, Ku = /* @__PURE__ */ el({
  __name: "BFRun",
  setup(e) {
    pn.initialize();
    const n = new ju(), t = R(
      0
      /* HALTED */
    ), l = R(!1), a = b(() => ({
      0: "Halted",
      1: "Running",
      2: "Waiting for input",
      3: "Paused"
    })[t.value]), o = b(() => ({
      0: Pa,
      1: Va,
      2: zu,
      3: ka
    })[t.value]), i = R(!1), s = R(""), r = R(""), c = R(""), m = R(!1), g = ["Dec", "Hex", "Oct", "Bin"], d = R([
      {
        label: "Address Base",
        items: g,
        model: R(g[0])
      },
      {
        label: "Value Base",
        items: g,
        model: R(g[0])
      }
    ]), v = Aa(), f = R(ot[0].name);
    B();
    const y = R([
      {
        icon: Va,
        text: "Run",
        fn: () => {
          t.value === 0 ? x() : (i.value = !1, I());
        },
        disabled: b(
          () => s.value === "" || t.value === 2 || t.value === 1 && !i.value
        ),
        cols: 3
      },
      {
        icon: Hu,
        text: "Step",
        fn: () => {
          t.value === 0 ? x(!0) : (i.value = !0, I());
        },
        disabled: b(
          () => s.value === "" || t.value === 2 || t.value === 1 && !i.value
        ),
        cols: 3
      },
      {
        icon: ka,
        text: "Pause",
        fn: () => {
          l.value = !0, t.value = 3;
        },
        disabled: b(
          () => t.value !== 1 || i.value
        ),
        cols: 3
      },
      {
        icon: Pa,
        text: "Halt",
        fn: () => {
          l.value = !0, t.value = 0;
        },
        disabled: b(
          () => t.value === 0
          /* HALTED */
        ),
        cols: 3
      }
    ]), h = R(!1), S = R(n.mem), k = b({
      get() {
        h.value;
        const O = {
          [g[0]]: {
            base: 10,
            prefix: ""
          },
          [g[1]]: {
            base: 16,
            prefix: "0x"
          },
          [g[2]]: {
            base: 8,
            prefix: "0o"
          },
          [g[3]]: {
            base: 2,
            prefix: "0b"
          }
        };
        return S.value.map((M, N) => {
          const j = O[d.value[0].model], C = O[d.value[1].model];
          return [
            j.prefix + N.toString(j.base),
            C.prefix + M.toString(C.base)
          ];
        });
      },
      set(O) {
        S.value = O, h.value = !h.value;
      }
    }), A = R(!1), E = R(n.ptr), T = b({
      get() {
        return E.value;
      },
      set(O) {
        E.value = O, A.value = !A.value;
      }
    });
    K(t, (O, M) => {
      switch (O) {
        case 0:
        case 1:
        case 3:
          r.value = "";
          break;
        case 2:
          r.value = "", he(() => {
            document.getElementById("input-field").focus();
          });
          break;
      }
    }), K(f, (O, M) => {
      _(O);
    });
    function B() {
      [
        "inc",
        "dec",
        "incVal",
        "decVal",
        "output",
        "input",
        "loopStart",
        "loopEnd"
      ].forEach((O, M) => {
        v.value[M].model = n.mark[O];
      });
    }
    function _(O) {
      O !== "Custom" && (n.setMark(ot.find((M) => M.name === O).markSpec), B());
    }
    function P() {
      n.setMark(new Z({
        inc: v.value[0].model,
        dec: v.value[1].model,
        incVal: v.value[2].model,
        decVal: v.value[3].model,
        output: v.value[4].model,
        input: v.value[5].model,
        loopStart: v.value[6].model,
        loopEnd: v.value[7].model
      }));
    }
    function D() {
      m.value && V();
    }
    function U() {
      r.value = "";
    }
    function V() {
      n.store(r.value), I();
    }
    function w(O) {
      c.value = "Error: " + O.error.toString();
    }
    function x(O) {
      n.reset();
      let M = n.load(s.value);
      M === !0 ? (c.value = "", l.value = !1, i.value = O || !1, I()) : w(M);
    }
    function I() {
      if (l.value) {
        l.value = !1;
        return;
      }
      let O = n.step();
      if (k.value = n.mem, T.value = n.ptr, O.error !== void 0) {
        w(O.error), t.value = 0;
        return;
      }
      switch (O.id) {
        case Ue.RUNNING:
          c.value += O.stdout, t.value = 1, i.value ? t.value = 3 : pn.asyncCall(I);
          break;
        case Ue.HALTED:
          c.value += O.stdout, t.value = 0;
          break;
        case Ue.WAITING_INPUT:
          t.value = 2;
          break;
      }
    }
    return (O, M) => (Pe(), at(Xe, null, {
      default: z(() => [
        u(ve, null, {
          default: z(() => [
            u(fe, {
              cols: "12",
              lg: "6"
            }, {
              default: z(() => [
                u(Xe, null, {
                  default: z(() => [
                    u(ve, null, {
                      default: z(() => [
                        u(fe, null, {
                          default: z(() => [
                            u(Cn, {
                              label: "Code",
                              name: "code",
                              modelValue: s.value,
                              "onUpdate:modelValue": M[0] || (M[0] = (N) => s.value = N),
                              variant: t.value !== 0 ? "outlined" : "filled",
                              readonly: t.value !== 0,
                              clearable: ""
                            }, null, 8, ["modelValue", "variant", "readonly"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    u(ve, { "no-gutters": "" }, {
                      default: z(() => [
                        u(fe, null, {
                          default: z(() => [
                            u(Co, null, {
                              default: z(() => [
                                u(So, { title: "Instruction Settings" }, {
                                  default: z(() => [
                                    u(yn, null, {
                                      default: z(() => [
                                        u(Xe, null, {
                                          default: z(() => [
                                            u(ve, { "no-gutters": "" }, {
                                              default: z(() => [
                                                u(Zn, {
                                                  label: "Instruction Preset",
                                                  items: ke(ot).map((N) => N.name),
                                                  modelValue: f.value,
                                                  "onUpdate:modelValue": M[1] || (M[1] = (N) => f.value = N)
                                                }, null, 8, ["items", "modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            u(ve, { "no-gutters": "" }, {
                                              default: z(() => [
                                                (Pe(!0), ht(ie, null, Pt(ke(v), (N) => (Pe(), at(fe, { cols: "3" }, {
                                                  default: z(() => [
                                                    u(zt, {
                                                      label: N.label,
                                                      density: "compact",
                                                      class: "mx-1",
                                                      variant: t.value !== 0 || f.value !== "Custom" ? "outlined" : "filled",
                                                      readonly: t.value !== 0 || f.value !== "Custom",
                                                      modelValue: N.model,
                                                      "onUpdate:modelValue": (j) => N.model = j
                                                    }, null, 8, ["label", "variant", "readonly", "modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 2
                                                }, 1024))), 256))
                                              ]),
                                              _: 1
                                            }),
                                            u(ve, { "no-gutters": "" }, {
                                              default: z(() => [
                                                u(fe, null, {
                                                  default: z(() => [
                                                    u(Bt, {
                                                      color: "primary",
                                                      disabled: t.value !== 0 || f.value !== "Custom",
                                                      onClick: M[2] || (M[2] = (N) => P()),
                                                      block: ""
                                                    }, {
                                                      default: z(() => M[10] || (M[10] = [
                                                        Ye("Update Marks")
                                                      ])),
                                                      _: 1
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
            u(fe, {
              cols: "12",
              lg: "6"
            }, {
              default: z(() => [
                u(Xe, null, {
                  default: z(() => [
                    u(ve, null, {
                      default: z(() => [
                        u(fe, null, {
                          default: z(() => [
                            u(Cn, {
                              label: "Output",
                              name: "output",
                              modelValue: c.value,
                              "onUpdate:modelValue": M[3] || (M[3] = (N) => c.value = N),
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
                    u(ve, { "no-gutters": "" }, {
                      default: z(() => [
                        (Pe(!0), ht(ie, null, Pt(d.value, (N) => (Pe(), at(fe, { cols: "6" }, {
                          default: z(() => [
                            u(Zn, {
                              label: N.label,
                              items: N.items,
                              density: "compact",
                              class: "mx-1",
                              modelValue: N.model,
                              "onUpdate:modelValue": (j) => N.model = j
                            }, null, 8, ["label", "items", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024))), 256))
                      ]),
                      _: 1
                    }),
                    k.value.length > 0 ? (Pe(), at(ve, {
                      key: 0,
                      "no-gutters": ""
                    }, {
                      default: z(() => [
                        u(fe, null, {
                          default: z(() => [
                            u(nn, {
                              class: "d-flex flex-wrap",
                              elevation: "2",
                              rounded: "",
                              style: { width: "fit-content" }
                            }, {
                              default: z(() => [
                                u(nn, { class: "text-center" }, {
                                  default: z(() => [
                                    M[11] || (M[11] = Qt("span", { class: "mx-2" }, " Address ", -1)),
                                    u(on),
                                    M[12] || (M[12] = Qt("span", { class: "mx-2" }, " Value ", -1))
                                  ]),
                                  _: 1
                                }),
                                u(on, { vertical: "" }),
                                (Pe(!0), ht(ie, null, Pt(k.value, (N, j) => (Pe(), at(nn, {
                                  class: "text-center",
                                  color: j === T.value ? "red-lighten-4" : ""
                                }, {
                                  default: z(() => [
                                    Qt("span", Wu, _t(N[0]), 1),
                                    u(on),
                                    Qt("span", Gu, _t(N[1]), 1)
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
                    })) : Pi("", !0),
                    u(ve, null, {
                      default: z(() => [
                        (Pe(!0), ht(ie, null, Pt(y.value, (N) => (Pe(), at(fe, {
                          cols: N.cols || 6
                        }, {
                          default: z(() => [
                            u(Bt, {
                              "prepend-icon": N.icon,
                              color: "primary",
                              block: "",
                              disabled: N.disabled,
                              onClick: (j) => N.fn()
                            }, {
                              default: z(() => [
                                Ye(_t(N.text), 1)
                              ]),
                              _: 2
                            }, 1032, ["prepend-icon", "disabled", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]))), 256))
                      ]),
                      _: 1
                    }),
                    u(ve, { align: "center" }, {
                      default: z(() => [
                        u(fe, null, {
                          default: z(() => [
                            u(nn, { class: "d-flex align-stretch" }, {
                              default: z(() => [
                                u(Wo, {
                                  class: "mt-2",
                                  "prepend-icon": o.value
                                }, {
                                  default: z(() => [
                                    Ye(_t(a.value), 1)
                                  ]),
                                  _: 1
                                }, 8, ["prepend-icon"]),
                                u(zt, {
                                  id: "input-field",
                                  class: "mx-4",
                                  label: "Input",
                                  modelValue: r.value,
                                  "onUpdate:modelValue": [
                                    M[4] || (M[4] = (N) => r.value = N),
                                    M[5] || (M[5] = (N) => D())
                                  ],
                                  density: "compact",
                                  maxlength: "1",
                                  disabled: t.value !== 2,
                                  onKeydown: M[6] || (M[6] = _i((N) => V(), ["enter"]))
                                }, null, 8, ["modelValue", "disabled"]),
                                u(rr, {
                                  label: "Auto Enter",
                                  color: "primary",
                                  density: "compact",
                                  modelValue: m.value,
                                  "onUpdate:modelValue": M[7] || (M[7] = (N) => m.value = N),
                                  "hide-details": "",
                                  onClick: M[8] || (M[8] = (N) => U())
                                }, null, 8, ["modelValue"]),
                                u(Bt, {
                                  class: "mt-2",
                                  disabled: r.value === "" || m.value,
                                  onClick: M[9] || (M[9] = (N) => V())
                                }, {
                                  default: z(() => M[13] || (M[13] = [
                                    Ye(" Enter ")
                                  ])),
                                  _: 1
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
}), Xu = {
  install(e, n = {}) {
    e.component("BFGenerate", Du), e.component("BFRun", Ku);
  }
};
export {
  Xu as default
};
