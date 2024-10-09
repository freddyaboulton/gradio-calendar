const {
  SvelteComponent: uc,
  assign: ic,
  children: sc,
  claim_element: lc,
  create_slot: oc,
  detach: fi,
  element: cc,
  get_all_dirty_from_scope: fc,
  get_slot_changes: hc,
  get_spread_update: dc,
  init: mc,
  insert_hydration: pc,
  safe_not_equal: gc,
  set_dynamic_element_data: hi,
  set_style: Re,
  toggle_class: ut,
  transition_in: rl,
  transition_out: al,
  update_slot_base: bc
} = window.__gradio__svelte__internal;
function vc(a) {
  let e, t, r;
  const n = (
    /*#slots*/
    a[22].default
  ), u = oc(
    n,
    a,
    /*$$scope*/
    a[21],
    null
  );
  let i = [
    { "data-testid": (
      /*test_id*/
      a[9]
    ) },
    { id: (
      /*elem_id*/
      a[4]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      a[5].join(" ") + " svelte-1ezsyiy"
    }
  ], l = {};
  for (let s = 0; s < i.length; s += 1)
    l = ic(l, i[s]);
  return {
    c() {
      e = cc(
        /*tag*/
        a[18]
      ), u && u.c(), this.h();
    },
    l(s) {
      e = lc(
        s,
        /*tag*/
        (a[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var f = sc(e);
      u && u.l(f), f.forEach(fi), this.h();
    },
    h() {
      hi(
        /*tag*/
        a[18]
      )(e, l), ut(
        e,
        "hidden",
        /*visible*/
        a[12] === !1
      ), ut(
        e,
        "padded",
        /*padding*/
        a[8]
      ), ut(
        e,
        "flex",
        /*flex*/
        a[17]
      ), ut(
        e,
        "border_focus",
        /*border_mode*/
        a[7] === "focus"
      ), ut(
        e,
        "border_contrast",
        /*border_mode*/
        a[7] === "contrast"
      ), ut(e, "hide-container", !/*explicit_call*/
      a[10] && !/*container*/
      a[11]), Re(
        e,
        "height",
        /*get_dimension*/
        a[19](
          /*height*/
          a[0]
        )
      ), Re(
        e,
        "min-height",
        /*get_dimension*/
        a[19](
          /*min_height*/
          a[1]
        )
      ), Re(
        e,
        "max-height",
        /*get_dimension*/
        a[19](
          /*max_height*/
          a[2]
        )
      ), Re(e, "width", typeof /*width*/
      a[3] == "number" ? `calc(min(${/*width*/
      a[3]}px, 100%))` : (
        /*get_dimension*/
        a[19](
          /*width*/
          a[3]
        )
      )), Re(
        e,
        "border-style",
        /*variant*/
        a[6]
      ), Re(
        e,
        "overflow",
        /*allow_overflow*/
        a[13] ? (
          /*overflow_behavior*/
          a[14]
        ) : "hidden"
      ), Re(
        e,
        "flex-grow",
        /*scale*/
        a[15]
      ), Re(e, "min-width", `calc(min(${/*min_width*/
      a[16]}px, 100%))`), Re(e, "border-width", "var(--block-border-width)");
    },
    m(s, f) {
      pc(s, e, f), u && u.m(e, null), r = !0;
    },
    p(s, f) {
      u && u.p && (!r || f & /*$$scope*/
      2097152) && bc(
        u,
        n,
        s,
        /*$$scope*/
        s[21],
        r ? hc(
          n,
          /*$$scope*/
          s[21],
          f,
          null
        ) : fc(
          /*$$scope*/
          s[21]
        ),
        null
      ), hi(
        /*tag*/
        s[18]
      )(e, l = dc(i, [
        (!r || f & /*test_id*/
        512) && { "data-testid": (
          /*test_id*/
          s[9]
        ) },
        (!r || f & /*elem_id*/
        16) && { id: (
          /*elem_id*/
          s[4]
        ) },
        (!r || f & /*elem_classes*/
        32 && t !== (t = "block " + /*elem_classes*/
        s[5].join(" ") + " svelte-1ezsyiy")) && { class: t }
      ])), ut(
        e,
        "hidden",
        /*visible*/
        s[12] === !1
      ), ut(
        e,
        "padded",
        /*padding*/
        s[8]
      ), ut(
        e,
        "flex",
        /*flex*/
        s[17]
      ), ut(
        e,
        "border_focus",
        /*border_mode*/
        s[7] === "focus"
      ), ut(
        e,
        "border_contrast",
        /*border_mode*/
        s[7] === "contrast"
      ), ut(e, "hide-container", !/*explicit_call*/
      s[10] && !/*container*/
      s[11]), f & /*height*/
      1 && Re(
        e,
        "height",
        /*get_dimension*/
        s[19](
          /*height*/
          s[0]
        )
      ), f & /*min_height*/
      2 && Re(
        e,
        "min-height",
        /*get_dimension*/
        s[19](
          /*min_height*/
          s[1]
        )
      ), f & /*max_height*/
      4 && Re(
        e,
        "max-height",
        /*get_dimension*/
        s[19](
          /*max_height*/
          s[2]
        )
      ), f & /*width*/
      8 && Re(e, "width", typeof /*width*/
      s[3] == "number" ? `calc(min(${/*width*/
      s[3]}px, 100%))` : (
        /*get_dimension*/
        s[19](
          /*width*/
          s[3]
        )
      )), f & /*variant*/
      64 && Re(
        e,
        "border-style",
        /*variant*/
        s[6]
      ), f & /*allow_overflow, overflow_behavior*/
      24576 && Re(
        e,
        "overflow",
        /*allow_overflow*/
        s[13] ? (
          /*overflow_behavior*/
          s[14]
        ) : "hidden"
      ), f & /*scale*/
      32768 && Re(
        e,
        "flex-grow",
        /*scale*/
        s[15]
      ), f & /*min_width*/
      65536 && Re(e, "min-width", `calc(min(${/*min_width*/
      s[16]}px, 100%))`);
    },
    i(s) {
      r || (rl(u, s), r = !0);
    },
    o(s) {
      al(u, s), r = !1;
    },
    d(s) {
      s && fi(e), u && u.d(s);
    }
  };
}
function yc(a) {
  let e, t = (
    /*tag*/
    a[18] && vc(a)
  );
  return {
    c() {
      t && t.c();
    },
    l(r) {
      t && t.l(r);
    },
    m(r, n) {
      t && t.m(r, n), e = !0;
    },
    p(r, [n]) {
      /*tag*/
      r[18] && t.p(r, n);
    },
    i(r) {
      e || (rl(t, r), e = !0);
    },
    o(r) {
      al(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function xc(a, e, t) {
  let { $$slots: r = {}, $$scope: n } = e, { height: u = void 0 } = e, { min_height: i = void 0 } = e, { max_height: l = void 0 } = e, { width: s = void 0 } = e, { elem_id: f = "" } = e, { elem_classes: m = [] } = e, { variant: b = "solid" } = e, { border_mode: h = "base" } = e, { padding: d = !0 } = e, { type: k = "normal" } = e, { test_id: E = void 0 } = e, { explicit_call: w = !1 } = e, { container: F = !0 } = e, { visible: x = !0 } = e, { allow_overflow: D = !0 } = e, { overflow_behavior: A = "auto" } = e, { scale: _ = null } = e, { min_width: B = 0 } = e, { flex: O = !1 } = e, H = k === "fieldset" ? "fieldset" : "div";
  const R = (L) => {
    if (L !== void 0) {
      if (typeof L == "number")
        return L + "px";
      if (typeof L == "string")
        return L;
    }
  };
  return a.$$set = (L) => {
    "height" in L && t(0, u = L.height), "min_height" in L && t(1, i = L.min_height), "max_height" in L && t(2, l = L.max_height), "width" in L && t(3, s = L.width), "elem_id" in L && t(4, f = L.elem_id), "elem_classes" in L && t(5, m = L.elem_classes), "variant" in L && t(6, b = L.variant), "border_mode" in L && t(7, h = L.border_mode), "padding" in L && t(8, d = L.padding), "type" in L && t(20, k = L.type), "test_id" in L && t(9, E = L.test_id), "explicit_call" in L && t(10, w = L.explicit_call), "container" in L && t(11, F = L.container), "visible" in L && t(12, x = L.visible), "allow_overflow" in L && t(13, D = L.allow_overflow), "overflow_behavior" in L && t(14, A = L.overflow_behavior), "scale" in L && t(15, _ = L.scale), "min_width" in L && t(16, B = L.min_width), "flex" in L && t(17, O = L.flex), "$$scope" in L && t(21, n = L.$$scope);
  }, [
    u,
    i,
    l,
    s,
    f,
    m,
    b,
    h,
    d,
    E,
    w,
    F,
    x,
    D,
    A,
    _,
    B,
    O,
    H,
    R,
    k,
    n,
    r
  ];
}
class wc extends uc {
  constructor(e) {
    super(), mc(this, e, xc, yc, gc, {
      height: 0,
      min_height: 1,
      max_height: 2,
      width: 3,
      elem_id: 4,
      elem_classes: 5,
      variant: 6,
      border_mode: 7,
      padding: 8,
      type: 20,
      test_id: 9,
      explicit_call: 10,
      container: 11,
      visible: 12,
      allow_overflow: 13,
      overflow_behavior: 14,
      scale: 15,
      min_width: 16,
      flex: 17
    });
  }
}
const Ac = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], di = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Ac.reduce(
  (a, { color: e, primary: t, secondary: r }) => ({
    ...a,
    [e]: {
      primary: di[e][t],
      secondary: di[e][r]
    }
  }),
  {}
);
class Je {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Je(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class lt {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new lt(t, Je.range(this, e));
  }
}
class G {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + e, n, u, i = t && t.loc;
    if (i && i.start <= i.end) {
      var l = i.lexer.input;
      n = i.start, u = i.end, n === l.length ? r += " at end of input: " : r += " at position " + (n + 1) + ": ";
      var s = l.slice(n, u).replace(/[^]/g, "$&̲"), f;
      n > 15 ? f = "…" + l.slice(n - 15, n) : f = l.slice(0, n);
      var m;
      u + 15 < l.length ? m = l.slice(u, u + 15) + "…" : m = l.slice(u), r += f + s + m;
    }
    var b = new Error(r);
    return b.name = "ParseError", b.__proto__ = G.prototype, b.position = n, n != null && u != null && (b.length = u - n), b.rawMessage = e, b;
  }
}
G.prototype.__proto__ = Error.prototype;
var Dc = function(e, t) {
  return e.indexOf(t) !== -1;
}, Sc = function(e, t) {
  return e === void 0 ? t : e;
}, kc = /([A-Z])/g, Ec = function(e) {
  return e.replace(kc, "-$1").toLowerCase();
}, Tc = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Cc = /[&><"']/g;
function Fc(a) {
  return String(a).replace(Cc, (e) => Tc[e]);
}
var nl = function a(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? a(e.body[0]) : e : e.type === "font" ? a(e.body) : e;
}, Mc = function(e) {
  var t = nl(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, _c = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Nc = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, re = {
  contains: Dc,
  deflt: Sc,
  escape: Fc,
  hyphenate: Ec,
  getBaseElem: nl,
  isCharacterBox: Mc,
  protocolFromUrl: Nc
}, Xr = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (a) => "#" + a
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (a, e) => (e.push(a), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (a) => Math.max(0, a),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (a) => Math.max(0, a),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (a) => Math.max(0, a),
    cli: "-e, --max-expand <n>",
    cliProcessor: (a) => a === "Infinity" ? 1 / 0 : parseInt(a)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function Oc(a) {
  if (a.default)
    return a.default;
  var e = a.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Kn {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Xr)
      if (Xr.hasOwnProperty(t)) {
        var r = Xr[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : Oc(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, r) {
    var n = this.strict;
    if (typeof n == "function" && (n = n(e, t, r)), !(!n || n === "ignore")) {
      if (n === !0 || n === "error")
        throw new G("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, r) {
    var n = this.strict;
    if (typeof n == "function")
      try {
        n = n(e, t, r);
      } catch {
        n = "error";
      }
    return !n || n === "ignore" ? !1 : n === !0 || n === "error" ? !0 : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = re.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!r;
  }
}
class Xt {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Dt[Bc[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Dt[Ic[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Dt[Rc[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Dt[Lc[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Dt[zc[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Dt[Pc[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Jn = 0, ua = 1, S0 = 2, qt = 3, J0 = 4, st = 5, k0 = 6, Ue = 7, Dt = [new Xt(Jn, 0, !1), new Xt(ua, 0, !0), new Xt(S0, 1, !1), new Xt(qt, 1, !0), new Xt(J0, 2, !1), new Xt(st, 2, !0), new Xt(k0, 3, !1), new Xt(Ue, 3, !0)], Bc = [J0, st, J0, st, k0, Ue, k0, Ue], Ic = [st, st, st, st, Ue, Ue, Ue, Ue], Rc = [S0, qt, J0, st, k0, Ue, k0, Ue], Lc = [qt, qt, st, st, Ue, Ue, Ue, Ue], zc = [ua, ua, qt, qt, st, st, Ue, Ue], Pc = [Jn, ua, S0, qt, S0, qt, S0, qt], ne = {
  DISPLAY: Dt[Jn],
  TEXT: Dt[S0],
  SCRIPT: Dt[J0],
  SCRIPTSCRIPT: Dt[k0]
}, xn = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function qc(a) {
  for (var e = 0; e < xn.length; e++)
    for (var t = xn[e], r = 0; r < t.blocks.length; r++) {
      var n = t.blocks[r];
      if (a >= n[0] && a <= n[1])
        return t.name;
    }
  return null;
}
var Yr = [];
xn.forEach((a) => a.blocks.forEach((e) => Yr.push(...e)));
function ul(a) {
  for (var e = 0; e < Yr.length; e += 2)
    if (a >= Yr[e] && a <= Yr[e + 1])
      return !0;
  return !1;
}
var x0 = 80, Hc = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Uc = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, jc = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Gc = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Vc = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, $c = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Wc = function(e, t, r) {
  var n = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Xc = function(e, t, r) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = Hc(t, x0);
      break;
    case "sqrtSize1":
      n = Uc(t, x0);
      break;
    case "sqrtSize2":
      n = jc(t, x0);
      break;
    case "sqrtSize3":
      n = Gc(t, x0);
      break;
    case "sqrtSize4":
      n = Vc(t, x0);
      break;
    case "sqrtTall":
      n = Wc(t, x0, r);
  }
  return n;
}, Yc = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, mi = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Zc = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class or {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var St = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, Ar = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, pi = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Qc(a, e) {
  St[a] = e;
}
function eu(a, e, t) {
  if (!St[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = a.charCodeAt(0), n = St[e][r];
  if (!n && a[0] in pi && (r = pi[a[0]].charCodeAt(0), n = St[e][r]), !n && t === "text" && ul(r) && (n = St[e][77]), n)
    return {
      depth: n[0],
      height: n[1],
      italic: n[2],
      skew: n[3],
      width: n[4]
    };
}
var Ga = {};
function Kc(a) {
  var e;
  if (a >= 5 ? e = 0 : a >= 3 ? e = 1 : e = 2, !Ga[e]) {
    var t = Ga[e] = {
      cssEmPerMu: Ar.quad[e] / 18
    };
    for (var r in Ar)
      Ar.hasOwnProperty(r) && (t[r] = Ar[r][e]);
  }
  return Ga[e];
}
var Jc = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], gi = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], bi = function(e, t) {
  return t.size < 2 ? e : Jc[e - 1][t.size - 1];
};
class Pt {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Pt.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = gi[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return new Pt(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: bi(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: gi[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = bi(Pt.BASESIZE, e);
    return this.size === t && this.textSize === Pt.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== Pt.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Pt.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Kc(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Pt.BASESIZE = 6;
var wn = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, ef = {
  ex: !0,
  em: !0,
  mu: !0
}, il = function(e) {
  return typeof e != "string" && (e = e.unit), e in wn || e in ef || e === "ex";
}, Te = function(e, t) {
  var r;
  if (e.unit in wn)
    r = wn[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = t.havingStyle(t.style.text()) : n = t, e.unit === "ex")
      r = n.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = n.fontMetrics().quad;
    else
      throw new G("Invalid unit: '" + e.unit + "'");
    n !== t && (r *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, W = function(e) {
  return +e.toFixed(4) + "em";
}, Jt = function(e) {
  return e.filter((t) => t).join(" ");
}, sl = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, ll = function(e) {
  var t = document.createElement(e);
  t.className = Jt(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var n in this.attributes)
    this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
  for (var u = 0; u < this.children.length; u++)
    t.appendChild(this.children[u].toNode());
  return t;
}, ol = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + re.escape(Jt(this.classes)) + '"');
  var r = "";
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (r += re.hyphenate(n) + ":" + this.style[n] + ";");
  r && (t += ' style="' + re.escape(r) + '"');
  for (var u in this.attributes)
    this.attributes.hasOwnProperty(u) && (t += " " + u + '="' + re.escape(this.attributes[u]) + '"');
  t += ">";
  for (var i = 0; i < this.children.length; i++)
    t += this.children[i].toMarkup();
  return t += "</" + e + ">", t;
};
class cr {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, sl.call(this, e, r, n), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  toNode() {
    return ll.call(this, "span");
  }
  toMarkup() {
    return ol.call(this, "span");
  }
}
class tu {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, sl.call(this, t, n), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  toNode() {
    return ll.call(this, "a");
  }
  toMarkup() {
    return ol.call(this, "a");
  }
}
class tf {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + re.escape(this.src) + '"' + (' alt="' + re.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += re.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + re.escape(t) + '"'), e += "'/>", e;
  }
}
var rf = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class ot {
  constructor(e, t, r, n, u, i, l, s) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = u || 0, this.width = i || 0, this.classes = l || [], this.style = s || {}, this.maxFontSize = 0;
    var f = qc(this.text.charCodeAt(0));
    f && this.classes.push(f + "_fallback"), /[îïíì]/.test(this.text) && (this.text = rf[this.text]);
  }
  hasClass(e) {
    return re.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = W(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Jt(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += re.escape(Jt(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r += re.hyphenate(n) + ":" + this.style[n] + ";");
    r && (e = !0, t += ' style="' + re.escape(r) + '"');
    var u = re.escape(this.text);
    return e ? (t += ">", t += u, t += "</span>", t) : u;
  }
}
class Ut {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    for (var n = 0; n < this.children.length; n++)
      t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + re.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class e0 {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", mi[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + re.escape(this.alternate) + '"/>' : '<path d="' + re.escape(mi[this.pathName]) + '"/>';
  }
}
class An {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + re.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function vi(a) {
  if (a instanceof ot)
    return a;
  throw new Error("Expected symbolNode but got " + String(a) + ".");
}
function af(a) {
  if (a instanceof cr)
    return a;
  throw new Error("Expected span<HtmlDomNode> but got " + String(a) + ".");
}
var nf = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, uf = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Ae = {
  math: {},
  text: {}
};
function o(a, e, t, r, n, u) {
  Ae[a][n] = {
    font: e,
    group: t,
    replace: r
  }, u && r && (Ae[a][r] = Ae[a][n]);
}
var c = "math", q = "text", p = "main", v = "ams", ke = "accent-token", Z = "bin", Ge = "close", _0 = "inner", ae = "mathord", _e = "op-token", nt = "open", wa = "punct", y = "rel", Wt = "spacing", S = "textord";
o(c, p, y, "≡", "\\equiv", !0);
o(c, p, y, "≺", "\\prec", !0);
o(c, p, y, "≻", "\\succ", !0);
o(c, p, y, "∼", "\\sim", !0);
o(c, p, y, "⊥", "\\perp");
o(c, p, y, "⪯", "\\preceq", !0);
o(c, p, y, "⪰", "\\succeq", !0);
o(c, p, y, "≃", "\\simeq", !0);
o(c, p, y, "∣", "\\mid", !0);
o(c, p, y, "≪", "\\ll", !0);
o(c, p, y, "≫", "\\gg", !0);
o(c, p, y, "≍", "\\asymp", !0);
o(c, p, y, "∥", "\\parallel");
o(c, p, y, "⋈", "\\bowtie", !0);
o(c, p, y, "⌣", "\\smile", !0);
o(c, p, y, "⊑", "\\sqsubseteq", !0);
o(c, p, y, "⊒", "\\sqsupseteq", !0);
o(c, p, y, "≐", "\\doteq", !0);
o(c, p, y, "⌢", "\\frown", !0);
o(c, p, y, "∋", "\\ni", !0);
o(c, p, y, "∝", "\\propto", !0);
o(c, p, y, "⊢", "\\vdash", !0);
o(c, p, y, "⊣", "\\dashv", !0);
o(c, p, y, "∋", "\\owns");
o(c, p, wa, ".", "\\ldotp");
o(c, p, wa, "⋅", "\\cdotp");
o(c, p, S, "#", "\\#");
o(q, p, S, "#", "\\#");
o(c, p, S, "&", "\\&");
o(q, p, S, "&", "\\&");
o(c, p, S, "ℵ", "\\aleph", !0);
o(c, p, S, "∀", "\\forall", !0);
o(c, p, S, "ℏ", "\\hbar", !0);
o(c, p, S, "∃", "\\exists", !0);
o(c, p, S, "∇", "\\nabla", !0);
o(c, p, S, "♭", "\\flat", !0);
o(c, p, S, "ℓ", "\\ell", !0);
o(c, p, S, "♮", "\\natural", !0);
o(c, p, S, "♣", "\\clubsuit", !0);
o(c, p, S, "℘", "\\wp", !0);
o(c, p, S, "♯", "\\sharp", !0);
o(c, p, S, "♢", "\\diamondsuit", !0);
o(c, p, S, "ℜ", "\\Re", !0);
o(c, p, S, "♡", "\\heartsuit", !0);
o(c, p, S, "ℑ", "\\Im", !0);
o(c, p, S, "♠", "\\spadesuit", !0);
o(c, p, S, "§", "\\S", !0);
o(q, p, S, "§", "\\S");
o(c, p, S, "¶", "\\P", !0);
o(q, p, S, "¶", "\\P");
o(c, p, S, "†", "\\dag");
o(q, p, S, "†", "\\dag");
o(q, p, S, "†", "\\textdagger");
o(c, p, S, "‡", "\\ddag");
o(q, p, S, "‡", "\\ddag");
o(q, p, S, "‡", "\\textdaggerdbl");
o(c, p, Ge, "⎱", "\\rmoustache", !0);
o(c, p, nt, "⎰", "\\lmoustache", !0);
o(c, p, Ge, "⟯", "\\rgroup", !0);
o(c, p, nt, "⟮", "\\lgroup", !0);
o(c, p, Z, "∓", "\\mp", !0);
o(c, p, Z, "⊖", "\\ominus", !0);
o(c, p, Z, "⊎", "\\uplus", !0);
o(c, p, Z, "⊓", "\\sqcap", !0);
o(c, p, Z, "∗", "\\ast");
o(c, p, Z, "⊔", "\\sqcup", !0);
o(c, p, Z, "◯", "\\bigcirc", !0);
o(c, p, Z, "∙", "\\bullet", !0);
o(c, p, Z, "‡", "\\ddagger");
o(c, p, Z, "≀", "\\wr", !0);
o(c, p, Z, "⨿", "\\amalg");
o(c, p, Z, "&", "\\And");
o(c, p, y, "⟵", "\\longleftarrow", !0);
o(c, p, y, "⇐", "\\Leftarrow", !0);
o(c, p, y, "⟸", "\\Longleftarrow", !0);
o(c, p, y, "⟶", "\\longrightarrow", !0);
o(c, p, y, "⇒", "\\Rightarrow", !0);
o(c, p, y, "⟹", "\\Longrightarrow", !0);
o(c, p, y, "↔", "\\leftrightarrow", !0);
o(c, p, y, "⟷", "\\longleftrightarrow", !0);
o(c, p, y, "⇔", "\\Leftrightarrow", !0);
o(c, p, y, "⟺", "\\Longleftrightarrow", !0);
o(c, p, y, "↦", "\\mapsto", !0);
o(c, p, y, "⟼", "\\longmapsto", !0);
o(c, p, y, "↗", "\\nearrow", !0);
o(c, p, y, "↩", "\\hookleftarrow", !0);
o(c, p, y, "↪", "\\hookrightarrow", !0);
o(c, p, y, "↘", "\\searrow", !0);
o(c, p, y, "↼", "\\leftharpoonup", !0);
o(c, p, y, "⇀", "\\rightharpoonup", !0);
o(c, p, y, "↙", "\\swarrow", !0);
o(c, p, y, "↽", "\\leftharpoondown", !0);
o(c, p, y, "⇁", "\\rightharpoondown", !0);
o(c, p, y, "↖", "\\nwarrow", !0);
o(c, p, y, "⇌", "\\rightleftharpoons", !0);
o(c, v, y, "≮", "\\nless", !0);
o(c, v, y, "", "\\@nleqslant");
o(c, v, y, "", "\\@nleqq");
o(c, v, y, "⪇", "\\lneq", !0);
o(c, v, y, "≨", "\\lneqq", !0);
o(c, v, y, "", "\\@lvertneqq");
o(c, v, y, "⋦", "\\lnsim", !0);
o(c, v, y, "⪉", "\\lnapprox", !0);
o(c, v, y, "⊀", "\\nprec", !0);
o(c, v, y, "⋠", "\\npreceq", !0);
o(c, v, y, "⋨", "\\precnsim", !0);
o(c, v, y, "⪹", "\\precnapprox", !0);
o(c, v, y, "≁", "\\nsim", !0);
o(c, v, y, "", "\\@nshortmid");
o(c, v, y, "∤", "\\nmid", !0);
o(c, v, y, "⊬", "\\nvdash", !0);
o(c, v, y, "⊭", "\\nvDash", !0);
o(c, v, y, "⋪", "\\ntriangleleft");
o(c, v, y, "⋬", "\\ntrianglelefteq", !0);
o(c, v, y, "⊊", "\\subsetneq", !0);
o(c, v, y, "", "\\@varsubsetneq");
o(c, v, y, "⫋", "\\subsetneqq", !0);
o(c, v, y, "", "\\@varsubsetneqq");
o(c, v, y, "≯", "\\ngtr", !0);
o(c, v, y, "", "\\@ngeqslant");
o(c, v, y, "", "\\@ngeqq");
o(c, v, y, "⪈", "\\gneq", !0);
o(c, v, y, "≩", "\\gneqq", !0);
o(c, v, y, "", "\\@gvertneqq");
o(c, v, y, "⋧", "\\gnsim", !0);
o(c, v, y, "⪊", "\\gnapprox", !0);
o(c, v, y, "⊁", "\\nsucc", !0);
o(c, v, y, "⋡", "\\nsucceq", !0);
o(c, v, y, "⋩", "\\succnsim", !0);
o(c, v, y, "⪺", "\\succnapprox", !0);
o(c, v, y, "≆", "\\ncong", !0);
o(c, v, y, "", "\\@nshortparallel");
o(c, v, y, "∦", "\\nparallel", !0);
o(c, v, y, "⊯", "\\nVDash", !0);
o(c, v, y, "⋫", "\\ntriangleright");
o(c, v, y, "⋭", "\\ntrianglerighteq", !0);
o(c, v, y, "", "\\@nsupseteqq");
o(c, v, y, "⊋", "\\supsetneq", !0);
o(c, v, y, "", "\\@varsupsetneq");
o(c, v, y, "⫌", "\\supsetneqq", !0);
o(c, v, y, "", "\\@varsupsetneqq");
o(c, v, y, "⊮", "\\nVdash", !0);
o(c, v, y, "⪵", "\\precneqq", !0);
o(c, v, y, "⪶", "\\succneqq", !0);
o(c, v, y, "", "\\@nsubseteqq");
o(c, v, Z, "⊴", "\\unlhd");
o(c, v, Z, "⊵", "\\unrhd");
o(c, v, y, "↚", "\\nleftarrow", !0);
o(c, v, y, "↛", "\\nrightarrow", !0);
o(c, v, y, "⇍", "\\nLeftarrow", !0);
o(c, v, y, "⇏", "\\nRightarrow", !0);
o(c, v, y, "↮", "\\nleftrightarrow", !0);
o(c, v, y, "⇎", "\\nLeftrightarrow", !0);
o(c, v, y, "△", "\\vartriangle");
o(c, v, S, "ℏ", "\\hslash");
o(c, v, S, "▽", "\\triangledown");
o(c, v, S, "◊", "\\lozenge");
o(c, v, S, "Ⓢ", "\\circledS");
o(c, v, S, "®", "\\circledR");
o(q, v, S, "®", "\\circledR");
o(c, v, S, "∡", "\\measuredangle", !0);
o(c, v, S, "∄", "\\nexists");
o(c, v, S, "℧", "\\mho");
o(c, v, S, "Ⅎ", "\\Finv", !0);
o(c, v, S, "⅁", "\\Game", !0);
o(c, v, S, "‵", "\\backprime");
o(c, v, S, "▲", "\\blacktriangle");
o(c, v, S, "▼", "\\blacktriangledown");
o(c, v, S, "■", "\\blacksquare");
o(c, v, S, "⧫", "\\blacklozenge");
o(c, v, S, "★", "\\bigstar");
o(c, v, S, "∢", "\\sphericalangle", !0);
o(c, v, S, "∁", "\\complement", !0);
o(c, v, S, "ð", "\\eth", !0);
o(q, p, S, "ð", "ð");
o(c, v, S, "╱", "\\diagup");
o(c, v, S, "╲", "\\diagdown");
o(c, v, S, "□", "\\square");
o(c, v, S, "□", "\\Box");
o(c, v, S, "◊", "\\Diamond");
o(c, v, S, "¥", "\\yen", !0);
o(q, v, S, "¥", "\\yen", !0);
o(c, v, S, "✓", "\\checkmark", !0);
o(q, v, S, "✓", "\\checkmark");
o(c, v, S, "ℶ", "\\beth", !0);
o(c, v, S, "ℸ", "\\daleth", !0);
o(c, v, S, "ℷ", "\\gimel", !0);
o(c, v, S, "ϝ", "\\digamma", !0);
o(c, v, S, "ϰ", "\\varkappa");
o(c, v, nt, "┌", "\\@ulcorner", !0);
o(c, v, Ge, "┐", "\\@urcorner", !0);
o(c, v, nt, "└", "\\@llcorner", !0);
o(c, v, Ge, "┘", "\\@lrcorner", !0);
o(c, v, y, "≦", "\\leqq", !0);
o(c, v, y, "⩽", "\\leqslant", !0);
o(c, v, y, "⪕", "\\eqslantless", !0);
o(c, v, y, "≲", "\\lesssim", !0);
o(c, v, y, "⪅", "\\lessapprox", !0);
o(c, v, y, "≊", "\\approxeq", !0);
o(c, v, Z, "⋖", "\\lessdot");
o(c, v, y, "⋘", "\\lll", !0);
o(c, v, y, "≶", "\\lessgtr", !0);
o(c, v, y, "⋚", "\\lesseqgtr", !0);
o(c, v, y, "⪋", "\\lesseqqgtr", !0);
o(c, v, y, "≑", "\\doteqdot");
o(c, v, y, "≓", "\\risingdotseq", !0);
o(c, v, y, "≒", "\\fallingdotseq", !0);
o(c, v, y, "∽", "\\backsim", !0);
o(c, v, y, "⋍", "\\backsimeq", !0);
o(c, v, y, "⫅", "\\subseteqq", !0);
o(c, v, y, "⋐", "\\Subset", !0);
o(c, v, y, "⊏", "\\sqsubset", !0);
o(c, v, y, "≼", "\\preccurlyeq", !0);
o(c, v, y, "⋞", "\\curlyeqprec", !0);
o(c, v, y, "≾", "\\precsim", !0);
o(c, v, y, "⪷", "\\precapprox", !0);
o(c, v, y, "⊲", "\\vartriangleleft");
o(c, v, y, "⊴", "\\trianglelefteq");
o(c, v, y, "⊨", "\\vDash", !0);
o(c, v, y, "⊪", "\\Vvdash", !0);
o(c, v, y, "⌣", "\\smallsmile");
o(c, v, y, "⌢", "\\smallfrown");
o(c, v, y, "≏", "\\bumpeq", !0);
o(c, v, y, "≎", "\\Bumpeq", !0);
o(c, v, y, "≧", "\\geqq", !0);
o(c, v, y, "⩾", "\\geqslant", !0);
o(c, v, y, "⪖", "\\eqslantgtr", !0);
o(c, v, y, "≳", "\\gtrsim", !0);
o(c, v, y, "⪆", "\\gtrapprox", !0);
o(c, v, Z, "⋗", "\\gtrdot");
o(c, v, y, "⋙", "\\ggg", !0);
o(c, v, y, "≷", "\\gtrless", !0);
o(c, v, y, "⋛", "\\gtreqless", !0);
o(c, v, y, "⪌", "\\gtreqqless", !0);
o(c, v, y, "≖", "\\eqcirc", !0);
o(c, v, y, "≗", "\\circeq", !0);
o(c, v, y, "≜", "\\triangleq", !0);
o(c, v, y, "∼", "\\thicksim");
o(c, v, y, "≈", "\\thickapprox");
o(c, v, y, "⫆", "\\supseteqq", !0);
o(c, v, y, "⋑", "\\Supset", !0);
o(c, v, y, "⊐", "\\sqsupset", !0);
o(c, v, y, "≽", "\\succcurlyeq", !0);
o(c, v, y, "⋟", "\\curlyeqsucc", !0);
o(c, v, y, "≿", "\\succsim", !0);
o(c, v, y, "⪸", "\\succapprox", !0);
o(c, v, y, "⊳", "\\vartriangleright");
o(c, v, y, "⊵", "\\trianglerighteq");
o(c, v, y, "⊩", "\\Vdash", !0);
o(c, v, y, "∣", "\\shortmid");
o(c, v, y, "∥", "\\shortparallel");
o(c, v, y, "≬", "\\between", !0);
o(c, v, y, "⋔", "\\pitchfork", !0);
o(c, v, y, "∝", "\\varpropto");
o(c, v, y, "◀", "\\blacktriangleleft");
o(c, v, y, "∴", "\\therefore", !0);
o(c, v, y, "∍", "\\backepsilon");
o(c, v, y, "▶", "\\blacktriangleright");
o(c, v, y, "∵", "\\because", !0);
o(c, v, y, "⋘", "\\llless");
o(c, v, y, "⋙", "\\gggtr");
o(c, v, Z, "⊲", "\\lhd");
o(c, v, Z, "⊳", "\\rhd");
o(c, v, y, "≂", "\\eqsim", !0);
o(c, p, y, "⋈", "\\Join");
o(c, v, y, "≑", "\\Doteq", !0);
o(c, v, Z, "∔", "\\dotplus", !0);
o(c, v, Z, "∖", "\\smallsetminus");
o(c, v, Z, "⋒", "\\Cap", !0);
o(c, v, Z, "⋓", "\\Cup", !0);
o(c, v, Z, "⩞", "\\doublebarwedge", !0);
o(c, v, Z, "⊟", "\\boxminus", !0);
o(c, v, Z, "⊞", "\\boxplus", !0);
o(c, v, Z, "⋇", "\\divideontimes", !0);
o(c, v, Z, "⋉", "\\ltimes", !0);
o(c, v, Z, "⋊", "\\rtimes", !0);
o(c, v, Z, "⋋", "\\leftthreetimes", !0);
o(c, v, Z, "⋌", "\\rightthreetimes", !0);
o(c, v, Z, "⋏", "\\curlywedge", !0);
o(c, v, Z, "⋎", "\\curlyvee", !0);
o(c, v, Z, "⊝", "\\circleddash", !0);
o(c, v, Z, "⊛", "\\circledast", !0);
o(c, v, Z, "⋅", "\\centerdot");
o(c, v, Z, "⊺", "\\intercal", !0);
o(c, v, Z, "⋒", "\\doublecap");
o(c, v, Z, "⋓", "\\doublecup");
o(c, v, Z, "⊠", "\\boxtimes", !0);
o(c, v, y, "⇢", "\\dashrightarrow", !0);
o(c, v, y, "⇠", "\\dashleftarrow", !0);
o(c, v, y, "⇇", "\\leftleftarrows", !0);
o(c, v, y, "⇆", "\\leftrightarrows", !0);
o(c, v, y, "⇚", "\\Lleftarrow", !0);
o(c, v, y, "↞", "\\twoheadleftarrow", !0);
o(c, v, y, "↢", "\\leftarrowtail", !0);
o(c, v, y, "↫", "\\looparrowleft", !0);
o(c, v, y, "⇋", "\\leftrightharpoons", !0);
o(c, v, y, "↶", "\\curvearrowleft", !0);
o(c, v, y, "↺", "\\circlearrowleft", !0);
o(c, v, y, "↰", "\\Lsh", !0);
o(c, v, y, "⇈", "\\upuparrows", !0);
o(c, v, y, "↿", "\\upharpoonleft", !0);
o(c, v, y, "⇃", "\\downharpoonleft", !0);
o(c, p, y, "⊶", "\\origof", !0);
o(c, p, y, "⊷", "\\imageof", !0);
o(c, v, y, "⊸", "\\multimap", !0);
o(c, v, y, "↭", "\\leftrightsquigarrow", !0);
o(c, v, y, "⇉", "\\rightrightarrows", !0);
o(c, v, y, "⇄", "\\rightleftarrows", !0);
o(c, v, y, "↠", "\\twoheadrightarrow", !0);
o(c, v, y, "↣", "\\rightarrowtail", !0);
o(c, v, y, "↬", "\\looparrowright", !0);
o(c, v, y, "↷", "\\curvearrowright", !0);
o(c, v, y, "↻", "\\circlearrowright", !0);
o(c, v, y, "↱", "\\Rsh", !0);
o(c, v, y, "⇊", "\\downdownarrows", !0);
o(c, v, y, "↾", "\\upharpoonright", !0);
o(c, v, y, "⇂", "\\downharpoonright", !0);
o(c, v, y, "⇝", "\\rightsquigarrow", !0);
o(c, v, y, "⇝", "\\leadsto");
o(c, v, y, "⇛", "\\Rrightarrow", !0);
o(c, v, y, "↾", "\\restriction");
o(c, p, S, "‘", "`");
o(c, p, S, "$", "\\$");
o(q, p, S, "$", "\\$");
o(q, p, S, "$", "\\textdollar");
o(c, p, S, "%", "\\%");
o(q, p, S, "%", "\\%");
o(c, p, S, "_", "\\_");
o(q, p, S, "_", "\\_");
o(q, p, S, "_", "\\textunderscore");
o(c, p, S, "∠", "\\angle", !0);
o(c, p, S, "∞", "\\infty", !0);
o(c, p, S, "′", "\\prime");
o(c, p, S, "△", "\\triangle");
o(c, p, S, "Γ", "\\Gamma", !0);
o(c, p, S, "Δ", "\\Delta", !0);
o(c, p, S, "Θ", "\\Theta", !0);
o(c, p, S, "Λ", "\\Lambda", !0);
o(c, p, S, "Ξ", "\\Xi", !0);
o(c, p, S, "Π", "\\Pi", !0);
o(c, p, S, "Σ", "\\Sigma", !0);
o(c, p, S, "Υ", "\\Upsilon", !0);
o(c, p, S, "Φ", "\\Phi", !0);
o(c, p, S, "Ψ", "\\Psi", !0);
o(c, p, S, "Ω", "\\Omega", !0);
o(c, p, S, "A", "Α");
o(c, p, S, "B", "Β");
o(c, p, S, "E", "Ε");
o(c, p, S, "Z", "Ζ");
o(c, p, S, "H", "Η");
o(c, p, S, "I", "Ι");
o(c, p, S, "K", "Κ");
o(c, p, S, "M", "Μ");
o(c, p, S, "N", "Ν");
o(c, p, S, "O", "Ο");
o(c, p, S, "P", "Ρ");
o(c, p, S, "T", "Τ");
o(c, p, S, "X", "Χ");
o(c, p, S, "¬", "\\neg", !0);
o(c, p, S, "¬", "\\lnot");
o(c, p, S, "⊤", "\\top");
o(c, p, S, "⊥", "\\bot");
o(c, p, S, "∅", "\\emptyset");
o(c, v, S, "∅", "\\varnothing");
o(c, p, ae, "α", "\\alpha", !0);
o(c, p, ae, "β", "\\beta", !0);
o(c, p, ae, "γ", "\\gamma", !0);
o(c, p, ae, "δ", "\\delta", !0);
o(c, p, ae, "ϵ", "\\epsilon", !0);
o(c, p, ae, "ζ", "\\zeta", !0);
o(c, p, ae, "η", "\\eta", !0);
o(c, p, ae, "θ", "\\theta", !0);
o(c, p, ae, "ι", "\\iota", !0);
o(c, p, ae, "κ", "\\kappa", !0);
o(c, p, ae, "λ", "\\lambda", !0);
o(c, p, ae, "μ", "\\mu", !0);
o(c, p, ae, "ν", "\\nu", !0);
o(c, p, ae, "ξ", "\\xi", !0);
o(c, p, ae, "ο", "\\omicron", !0);
o(c, p, ae, "π", "\\pi", !0);
o(c, p, ae, "ρ", "\\rho", !0);
o(c, p, ae, "σ", "\\sigma", !0);
o(c, p, ae, "τ", "\\tau", !0);
o(c, p, ae, "υ", "\\upsilon", !0);
o(c, p, ae, "ϕ", "\\phi", !0);
o(c, p, ae, "χ", "\\chi", !0);
o(c, p, ae, "ψ", "\\psi", !0);
o(c, p, ae, "ω", "\\omega", !0);
o(c, p, ae, "ε", "\\varepsilon", !0);
o(c, p, ae, "ϑ", "\\vartheta", !0);
o(c, p, ae, "ϖ", "\\varpi", !0);
o(c, p, ae, "ϱ", "\\varrho", !0);
o(c, p, ae, "ς", "\\varsigma", !0);
o(c, p, ae, "φ", "\\varphi", !0);
o(c, p, Z, "∗", "*", !0);
o(c, p, Z, "+", "+");
o(c, p, Z, "−", "-", !0);
o(c, p, Z, "⋅", "\\cdot", !0);
o(c, p, Z, "∘", "\\circ", !0);
o(c, p, Z, "÷", "\\div", !0);
o(c, p, Z, "±", "\\pm", !0);
o(c, p, Z, "×", "\\times", !0);
o(c, p, Z, "∩", "\\cap", !0);
o(c, p, Z, "∪", "\\cup", !0);
o(c, p, Z, "∖", "\\setminus", !0);
o(c, p, Z, "∧", "\\land");
o(c, p, Z, "∨", "\\lor");
o(c, p, Z, "∧", "\\wedge", !0);
o(c, p, Z, "∨", "\\vee", !0);
o(c, p, S, "√", "\\surd");
o(c, p, nt, "⟨", "\\langle", !0);
o(c, p, nt, "∣", "\\lvert");
o(c, p, nt, "∥", "\\lVert");
o(c, p, Ge, "?", "?");
o(c, p, Ge, "!", "!");
o(c, p, Ge, "⟩", "\\rangle", !0);
o(c, p, Ge, "∣", "\\rvert");
o(c, p, Ge, "∥", "\\rVert");
o(c, p, y, "=", "=");
o(c, p, y, ":", ":");
o(c, p, y, "≈", "\\approx", !0);
o(c, p, y, "≅", "\\cong", !0);
o(c, p, y, "≥", "\\ge");
o(c, p, y, "≥", "\\geq", !0);
o(c, p, y, "←", "\\gets");
o(c, p, y, ">", "\\gt", !0);
o(c, p, y, "∈", "\\in", !0);
o(c, p, y, "", "\\@not");
o(c, p, y, "⊂", "\\subset", !0);
o(c, p, y, "⊃", "\\supset", !0);
o(c, p, y, "⊆", "\\subseteq", !0);
o(c, p, y, "⊇", "\\supseteq", !0);
o(c, v, y, "⊈", "\\nsubseteq", !0);
o(c, v, y, "⊉", "\\nsupseteq", !0);
o(c, p, y, "⊨", "\\models");
o(c, p, y, "←", "\\leftarrow", !0);
o(c, p, y, "≤", "\\le");
o(c, p, y, "≤", "\\leq", !0);
o(c, p, y, "<", "\\lt", !0);
o(c, p, y, "→", "\\rightarrow", !0);
o(c, p, y, "→", "\\to");
o(c, v, y, "≱", "\\ngeq", !0);
o(c, v, y, "≰", "\\nleq", !0);
o(c, p, Wt, " ", "\\ ");
o(c, p, Wt, " ", "\\space");
o(c, p, Wt, " ", "\\nobreakspace");
o(q, p, Wt, " ", "\\ ");
o(q, p, Wt, " ", " ");
o(q, p, Wt, " ", "\\space");
o(q, p, Wt, " ", "\\nobreakspace");
o(c, p, Wt, null, "\\nobreak");
o(c, p, Wt, null, "\\allowbreak");
o(c, p, wa, ",", ",");
o(c, p, wa, ";", ";");
o(c, v, Z, "⊼", "\\barwedge", !0);
o(c, v, Z, "⊻", "\\veebar", !0);
o(c, p, Z, "⊙", "\\odot", !0);
o(c, p, Z, "⊕", "\\oplus", !0);
o(c, p, Z, "⊗", "\\otimes", !0);
o(c, p, S, "∂", "\\partial", !0);
o(c, p, Z, "⊘", "\\oslash", !0);
o(c, v, Z, "⊚", "\\circledcirc", !0);
o(c, v, Z, "⊡", "\\boxdot", !0);
o(c, p, Z, "△", "\\bigtriangleup");
o(c, p, Z, "▽", "\\bigtriangledown");
o(c, p, Z, "†", "\\dagger");
o(c, p, Z, "⋄", "\\diamond");
o(c, p, Z, "⋆", "\\star");
o(c, p, Z, "◃", "\\triangleleft");
o(c, p, Z, "▹", "\\triangleright");
o(c, p, nt, "{", "\\{");
o(q, p, S, "{", "\\{");
o(q, p, S, "{", "\\textbraceleft");
o(c, p, Ge, "}", "\\}");
o(q, p, S, "}", "\\}");
o(q, p, S, "}", "\\textbraceright");
o(c, p, nt, "{", "\\lbrace");
o(c, p, Ge, "}", "\\rbrace");
o(c, p, nt, "[", "\\lbrack", !0);
o(q, p, S, "[", "\\lbrack", !0);
o(c, p, Ge, "]", "\\rbrack", !0);
o(q, p, S, "]", "\\rbrack", !0);
o(c, p, nt, "(", "\\lparen", !0);
o(c, p, Ge, ")", "\\rparen", !0);
o(q, p, S, "<", "\\textless", !0);
o(q, p, S, ">", "\\textgreater", !0);
o(c, p, nt, "⌊", "\\lfloor", !0);
o(c, p, Ge, "⌋", "\\rfloor", !0);
o(c, p, nt, "⌈", "\\lceil", !0);
o(c, p, Ge, "⌉", "\\rceil", !0);
o(c, p, S, "\\", "\\backslash");
o(c, p, S, "∣", "|");
o(c, p, S, "∣", "\\vert");
o(q, p, S, "|", "\\textbar", !0);
o(c, p, S, "∥", "\\|");
o(c, p, S, "∥", "\\Vert");
o(q, p, S, "∥", "\\textbardbl");
o(q, p, S, "~", "\\textasciitilde");
o(q, p, S, "\\", "\\textbackslash");
o(q, p, S, "^", "\\textasciicircum");
o(c, p, y, "↑", "\\uparrow", !0);
o(c, p, y, "⇑", "\\Uparrow", !0);
o(c, p, y, "↓", "\\downarrow", !0);
o(c, p, y, "⇓", "\\Downarrow", !0);
o(c, p, y, "↕", "\\updownarrow", !0);
o(c, p, y, "⇕", "\\Updownarrow", !0);
o(c, p, _e, "∐", "\\coprod");
o(c, p, _e, "⋁", "\\bigvee");
o(c, p, _e, "⋀", "\\bigwedge");
o(c, p, _e, "⨄", "\\biguplus");
o(c, p, _e, "⋂", "\\bigcap");
o(c, p, _e, "⋃", "\\bigcup");
o(c, p, _e, "∫", "\\int");
o(c, p, _e, "∫", "\\intop");
o(c, p, _e, "∬", "\\iint");
o(c, p, _e, "∭", "\\iiint");
o(c, p, _e, "∏", "\\prod");
o(c, p, _e, "∑", "\\sum");
o(c, p, _e, "⨂", "\\bigotimes");
o(c, p, _e, "⨁", "\\bigoplus");
o(c, p, _e, "⨀", "\\bigodot");
o(c, p, _e, "∮", "\\oint");
o(c, p, _e, "∯", "\\oiint");
o(c, p, _e, "∰", "\\oiiint");
o(c, p, _e, "⨆", "\\bigsqcup");
o(c, p, _e, "∫", "\\smallint");
o(q, p, _0, "…", "\\textellipsis");
o(c, p, _0, "…", "\\mathellipsis");
o(q, p, _0, "…", "\\ldots", !0);
o(c, p, _0, "…", "\\ldots", !0);
o(c, p, _0, "⋯", "\\@cdots", !0);
o(c, p, _0, "⋱", "\\ddots", !0);
o(c, p, S, "⋮", "\\varvdots");
o(c, p, ke, "ˊ", "\\acute");
o(c, p, ke, "ˋ", "\\grave");
o(c, p, ke, "¨", "\\ddot");
o(c, p, ke, "~", "\\tilde");
o(c, p, ke, "ˉ", "\\bar");
o(c, p, ke, "˘", "\\breve");
o(c, p, ke, "ˇ", "\\check");
o(c, p, ke, "^", "\\hat");
o(c, p, ke, "⃗", "\\vec");
o(c, p, ke, "˙", "\\dot");
o(c, p, ke, "˚", "\\mathring");
o(c, p, ae, "", "\\@imath");
o(c, p, ae, "", "\\@jmath");
o(c, p, S, "ı", "ı");
o(c, p, S, "ȷ", "ȷ");
o(q, p, S, "ı", "\\i", !0);
o(q, p, S, "ȷ", "\\j", !0);
o(q, p, S, "ß", "\\ss", !0);
o(q, p, S, "æ", "\\ae", !0);
o(q, p, S, "œ", "\\oe", !0);
o(q, p, S, "ø", "\\o", !0);
o(q, p, S, "Æ", "\\AE", !0);
o(q, p, S, "Œ", "\\OE", !0);
o(q, p, S, "Ø", "\\O", !0);
o(q, p, ke, "ˊ", "\\'");
o(q, p, ke, "ˋ", "\\`");
o(q, p, ke, "ˆ", "\\^");
o(q, p, ke, "˜", "\\~");
o(q, p, ke, "ˉ", "\\=");
o(q, p, ke, "˘", "\\u");
o(q, p, ke, "˙", "\\.");
o(q, p, ke, "¸", "\\c");
o(q, p, ke, "˚", "\\r");
o(q, p, ke, "ˇ", "\\v");
o(q, p, ke, "¨", '\\"');
o(q, p, ke, "˝", "\\H");
o(q, p, ke, "◯", "\\textcircled");
var cl = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
o(q, p, S, "–", "--", !0);
o(q, p, S, "–", "\\textendash");
o(q, p, S, "—", "---", !0);
o(q, p, S, "—", "\\textemdash");
o(q, p, S, "‘", "`", !0);
o(q, p, S, "‘", "\\textquoteleft");
o(q, p, S, "’", "'", !0);
o(q, p, S, "’", "\\textquoteright");
o(q, p, S, "“", "``", !0);
o(q, p, S, "“", "\\textquotedblleft");
o(q, p, S, "”", "''", !0);
o(q, p, S, "”", "\\textquotedblright");
o(c, p, S, "°", "\\degree", !0);
o(q, p, S, "°", "\\degree");
o(q, p, S, "°", "\\textdegree", !0);
o(c, p, S, "£", "\\pounds");
o(c, p, S, "£", "\\mathsterling", !0);
o(q, p, S, "£", "\\pounds");
o(q, p, S, "£", "\\textsterling", !0);
o(c, v, S, "✠", "\\maltese");
o(q, v, S, "✠", "\\maltese");
var yi = '0123456789/@."';
for (var Va = 0; Va < yi.length; Va++) {
  var xi = yi.charAt(Va);
  o(c, p, S, xi, xi);
}
var wi = '0123456789!@*()-=+";:?/.,';
for (var $a = 0; $a < wi.length; $a++) {
  var Ai = wi.charAt($a);
  o(q, p, S, Ai, Ai);
}
var ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Wa = 0; Wa < ia.length; Wa++) {
  var Dr = ia.charAt(Wa);
  o(c, p, ae, Dr, Dr), o(q, p, S, Dr, Dr);
}
o(c, v, S, "C", "ℂ");
o(q, v, S, "C", "ℂ");
o(c, v, S, "H", "ℍ");
o(q, v, S, "H", "ℍ");
o(c, v, S, "N", "ℕ");
o(q, v, S, "N", "ℕ");
o(c, v, S, "P", "ℙ");
o(q, v, S, "P", "ℙ");
o(c, v, S, "Q", "ℚ");
o(q, v, S, "Q", "ℚ");
o(c, v, S, "R", "ℝ");
o(q, v, S, "R", "ℝ");
o(c, v, S, "Z", "ℤ");
o(q, v, S, "Z", "ℤ");
o(c, p, ae, "h", "ℎ");
o(q, p, ae, "h", "ℎ");
var ie = "";
for (var Pe = 0; Pe < ia.length; Pe++) {
  var Ce = ia.charAt(Pe);
  ie = String.fromCharCode(55349, 56320 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56372 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56424 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56580 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56684 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56736 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56788 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56840 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56944 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), Pe < 26 && (ie = String.fromCharCode(55349, 56632 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie), ie = String.fromCharCode(55349, 56476 + Pe), o(c, p, ae, Ce, ie), o(q, p, S, Ce, ie));
}
ie = "𝕜";
o(c, p, ae, "k", ie);
o(q, p, S, "k", ie);
for (var n0 = 0; n0 < 10; n0++) {
  var Yt = n0.toString();
  ie = String.fromCharCode(55349, 57294 + n0), o(c, p, ae, Yt, ie), o(q, p, S, Yt, ie), ie = String.fromCharCode(55349, 57314 + n0), o(c, p, ae, Yt, ie), o(q, p, S, Yt, ie), ie = String.fromCharCode(55349, 57324 + n0), o(c, p, ae, Yt, ie), o(q, p, S, Yt, ie), ie = String.fromCharCode(55349, 57334 + n0), o(c, p, ae, Yt, ie), o(q, p, S, Yt, ie);
}
var Dn = "ÐÞþ";
for (var Xa = 0; Xa < Dn.length; Xa++) {
  var Sr = Dn.charAt(Xa);
  o(c, p, ae, Sr, Sr), o(q, p, S, Sr, Sr);
}
var kr = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Di = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], sf = function(e, t) {
  var r = e.charCodeAt(0), n = e.charCodeAt(1), u = (r - 55296) * 1024 + (n - 56320) + 65536, i = t === "math" ? 0 : 1;
  if (119808 <= u && u < 120484) {
    var l = Math.floor((u - 119808) / 26);
    return [kr[l][2], kr[l][i]];
  } else if (120782 <= u && u <= 120831) {
    var s = Math.floor((u - 120782) / 10);
    return [Di[s][2], Di[s][i]];
  } else {
    if (u === 120485 || u === 120486)
      return [kr[0][2], kr[0][i]];
    if (120486 < u && u < 120782)
      return ["", ""];
    throw new G("Unsupported character: " + e);
  }
}, Aa = function(e, t, r) {
  return Ae[r][e] && Ae[r][e].replace && (e = Ae[r][e].replace), {
    value: e,
    metrics: eu(e, t, r)
  };
}, pt = function(e, t, r, n, u) {
  var i = Aa(e, t, r), l = i.metrics;
  e = i.value;
  var s;
  if (l) {
    var f = l.italic;
    (r === "text" || n && n.font === "mathit") && (f = 0), s = new ot(e, l.height, l.depth, f, l.skew, l.width, u);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), s = new ot(e, 0, 0, 0, 0, 0, u);
  if (n) {
    s.maxFontSize = n.sizeMultiplier, n.style.isTight() && s.classes.push("mtight");
    var m = n.getColor();
    m && (s.style.color = m);
  }
  return s;
}, lf = function(e, t, r, n) {
  return n === void 0 && (n = []), r.font === "boldsymbol" && Aa(e, "Main-Bold", t).metrics ? pt(e, "Main-Bold", t, r, n.concat(["mathbf"])) : e === "\\" || Ae[t][e].font === "main" ? pt(e, "Main-Regular", t, r, n) : pt(e, "AMS-Regular", t, r, n.concat(["amsrm"]));
}, of = function(e, t, r, n, u) {
  return u !== "textord" && Aa(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, cf = function(e, t, r) {
  var n = e.mode, u = e.text, i = ["mord"], l = n === "math" || n === "text" && t.font, s = l ? t.font : t.fontFamily, f = "", m = "";
  if (u.charCodeAt(0) === 55349 && ([f, m] = sf(u, n)), f.length > 0)
    return pt(u, f, n, t, i.concat(m));
  if (s) {
    var b, h;
    if (s === "boldsymbol") {
      var d = of(u, n, t, i, r);
      b = d.fontName, h = [d.fontClass];
    } else l ? (b = dl[s].fontName, h = [s]) : (b = Er(s, t.fontWeight, t.fontShape), h = [s, t.fontWeight, t.fontShape]);
    if (Aa(u, b, n).metrics)
      return pt(u, b, n, t, i.concat(h));
    if (cl.hasOwnProperty(u) && b.slice(0, 10) === "Typewriter") {
      for (var k = [], E = 0; E < u.length; E++)
        k.push(pt(u[E], b, n, t, i.concat(h)));
      return hl(k);
    }
  }
  if (r === "mathord")
    return pt(u, "Math-Italic", n, t, i.concat(["mathnormal"]));
  if (r === "textord") {
    var w = Ae[n][u] && Ae[n][u].font;
    if (w === "ams") {
      var F = Er("amsrm", t.fontWeight, t.fontShape);
      return pt(u, F, n, t, i.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (w === "main" || !w) {
      var x = Er("textrm", t.fontWeight, t.fontShape);
      return pt(u, x, n, t, i.concat(t.fontWeight, t.fontShape));
    } else {
      var D = Er(w, t.fontWeight, t.fontShape);
      return pt(u, D, n, t, i.concat(D, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, ff = (a, e) => {
  if (Jt(a.classes) !== Jt(e.classes) || a.skew !== e.skew || a.maxFontSize !== e.maxFontSize)
    return !1;
  if (a.classes.length === 1) {
    var t = a.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var r in a.style)
    if (a.style.hasOwnProperty(r) && a.style[r] !== e.style[r])
      return !1;
  for (var n in e.style)
    if (e.style.hasOwnProperty(n) && a.style[n] !== e.style[n])
      return !1;
  return !0;
}, hf = (a) => {
  for (var e = 0; e < a.length - 1; e++) {
    var t = a[e], r = a[e + 1];
    t instanceof ot && r instanceof ot && ff(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, a.splice(e + 1, 1), e--);
  }
  return a;
}, ru = function(e) {
  for (var t = 0, r = 0, n = 0, u = 0; u < e.children.length; u++) {
    var i = e.children[u];
    i.height > t && (t = i.height), i.depth > r && (r = i.depth), i.maxFontSize > n && (n = i.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = n;
}, We = function(e, t, r, n) {
  var u = new cr(e, t, r, n);
  return ru(u), u;
}, fl = (a, e, t, r) => new cr(a, e, t, r), df = function(e, t, r) {
  var n = We([e], [], t);
  return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = W(n.height), n.maxFontSize = 1, n;
}, mf = function(e, t, r, n) {
  var u = new tu(e, t, r, n);
  return ru(u), u;
}, hl = function(e) {
  var t = new or(e);
  return ru(t), t;
}, pf = function(e, t) {
  return e instanceof or ? We([], [e], t) : e;
}, gf = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, u = n, i = 1; i < t.length; i++) {
      var l = -t[i].shift - u - t[i].elem.depth, s = l - (t[i - 1].elem.height + t[i - 1].elem.depth);
      u = u + l, r.push({
        type: "kern",
        size: s
      }), r.push(t[i]);
    }
    return {
      children: r,
      depth: n
    };
  }
  var f;
  if (e.positionType === "top") {
    for (var m = e.positionData, b = 0; b < e.children.length; b++) {
      var h = e.children[b];
      m -= h.type === "kern" ? h.size : h.elem.height + h.elem.depth;
    }
    f = m;
  } else if (e.positionType === "bottom")
    f = -e.positionData;
  else {
    var d = e.children[0];
    if (d.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      f = -d.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      f = -d.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: f
  };
}, bf = function(e, t) {
  for (var {
    children: r,
    depth: n
  } = gf(e), u = 0, i = 0; i < r.length; i++) {
    var l = r[i];
    if (l.type === "elem") {
      var s = l.elem;
      u = Math.max(u, s.maxFontSize, s.height);
    }
  }
  u += 2;
  var f = We(["pstrut"], []);
  f.style.height = W(u);
  for (var m = [], b = n, h = n, d = n, k = 0; k < r.length; k++) {
    var E = r[k];
    if (E.type === "kern")
      d += E.size;
    else {
      var w = E.elem, F = E.wrapperClasses || [], x = E.wrapperStyle || {}, D = We(F, [f, w], void 0, x);
      D.style.top = W(-u - d - w.depth), E.marginLeft && (D.style.marginLeft = E.marginLeft), E.marginRight && (D.style.marginRight = E.marginRight), m.push(D), d += w.height + w.depth;
    }
    b = Math.min(b, d), h = Math.max(h, d);
  }
  var A = We(["vlist"], m);
  A.style.height = W(h);
  var _;
  if (b < 0) {
    var B = We([], []), O = We(["vlist"], [B]);
    O.style.height = W(-b);
    var H = We(["vlist-s"], [new ot("​")]);
    _ = [We(["vlist-r"], [A, H]), We(["vlist-r"], [O])];
  } else
    _ = [We(["vlist-r"], [A])];
  var R = We(["vlist-t"], _);
  return _.length === 2 && R.classes.push("vlist-t2"), R.height = h, R.depth = -b, R;
}, vf = (a, e) => {
  var t = We(["mspace"], [], e), r = Te(a, e);
  return t.style.marginRight = W(r), t;
}, Er = function(e, t, r) {
  var n = "";
  switch (e) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = e;
  }
  var u;
  return t === "textbf" && r === "textit" ? u = "BoldItalic" : t === "textbf" ? u = "Bold" : t === "textit" ? u = "Italic" : u = "Regular", n + "-" + u;
}, dl = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, ml = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, yf = function(e, t) {
  var [r, n, u] = ml[e], i = new e0(r), l = new Ut([i], {
    width: W(n),
    height: W(u),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + W(n),
    viewBox: "0 0 " + 1e3 * n + " " + 1e3 * u,
    preserveAspectRatio: "xMinYMin"
  }), s = fl(["overlay"], [l], t);
  return s.height = u, s.style.height = W(u), s.style.width = W(n), s;
}, M = {
  fontMap: dl,
  makeSymbol: pt,
  mathsym: lf,
  makeSpan: We,
  makeSvgSpan: fl,
  makeLineSpan: df,
  makeAnchor: mf,
  makeFragment: hl,
  wrapFragment: pf,
  makeVList: bf,
  makeOrd: cf,
  makeGlue: vf,
  staticSvg: yf,
  svgData: ml,
  tryCombineChars: hf
}, Ee = {
  number: 3,
  unit: "mu"
}, u0 = {
  number: 4,
  unit: "mu"
}, Rt = {
  number: 5,
  unit: "mu"
}, xf = {
  mord: {
    mop: Ee,
    mbin: u0,
    mrel: Rt,
    minner: Ee
  },
  mop: {
    mord: Ee,
    mop: Ee,
    mrel: Rt,
    minner: Ee
  },
  mbin: {
    mord: u0,
    mop: u0,
    mopen: u0,
    minner: u0
  },
  mrel: {
    mord: Rt,
    mop: Rt,
    mopen: Rt,
    minner: Rt
  },
  mopen: {},
  mclose: {
    mop: Ee,
    mbin: u0,
    mrel: Rt,
    minner: Ee
  },
  mpunct: {
    mord: Ee,
    mop: Ee,
    mrel: Rt,
    mopen: Ee,
    mclose: Ee,
    mpunct: Ee,
    minner: Ee
  },
  minner: {
    mord: Ee,
    mop: Ee,
    mbin: u0,
    mrel: Rt,
    mopen: Ee,
    mpunct: Ee,
    minner: Ee
  }
}, wf = {
  mord: {
    mop: Ee
  },
  mop: {
    mord: Ee,
    mop: Ee
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Ee
  },
  mpunct: {},
  minner: {
    mop: Ee
  }
}, pl = {}, sa = {}, la = {};
function Y(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: u,
    mathmlBuilder: i
  } = a, l = {
    type: e,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: n
  }, s = 0; s < t.length; ++s)
    pl[t[s]] = l;
  e && (u && (sa[e] = u), i && (la[e] = i));
}
function f0(a) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = a;
  Y({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: r
  });
}
var oa = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, Me = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, jt = M.makeSpan, Af = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Df = ["rightmost", "mrel", "mclose", "mpunct"], Sf = {
  display: ne.DISPLAY,
  text: ne.TEXT,
  script: ne.SCRIPT,
  scriptscript: ne.SCRIPTSCRIPT
}, kf = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Ne = function(e, t, r, n) {
  n === void 0 && (n = [null, null]);
  for (var u = [], i = 0; i < e.length; i++) {
    var l = me(e[i], t);
    if (l instanceof or) {
      var s = l.children;
      u.push(...s);
    } else
      u.push(l);
  }
  if (M.tryCombineChars(u), !r)
    return u;
  var f = t;
  if (e.length === 1) {
    var m = e[0];
    m.type === "sizing" ? f = t.havingSize(m.size) : m.type === "styling" && (f = t.havingStyle(Sf[m.style]));
  }
  var b = jt([n[0] || "leftmost"], [], t), h = jt([n[1] || "rightmost"], [], t), d = r === "root";
  return Si(u, (k, E) => {
    var w = E.classes[0], F = k.classes[0];
    w === "mbin" && re.contains(Df, F) ? E.classes[0] = "mord" : F === "mbin" && re.contains(Af, w) && (k.classes[0] = "mord");
  }, {
    node: b
  }, h, d), Si(u, (k, E) => {
    var w = Sn(E), F = Sn(k), x = w && F ? k.hasClass("mtight") ? wf[w][F] : xf[w][F] : null;
    if (x)
      return M.makeGlue(x, f);
  }, {
    node: b
  }, h, d), u;
}, Si = function a(e, t, r, n, u) {
  n && e.push(n);
  for (var i = 0; i < e.length; i++) {
    var l = e[i], s = gl(l);
    if (s) {
      a(s.children, t, r, null, u);
      continue;
    }
    var f = !l.hasClass("mspace");
    if (f) {
      var m = t(l, r.node);
      m && (r.insertAfter ? r.insertAfter(m) : (e.unshift(m), i++));
    }
    f ? r.node = l : u && l.hasClass("newline") && (r.node = jt(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((b) => (h) => {
      e.splice(b + 1, 0, h), i++;
    })(i);
  }
  n && e.pop();
}, gl = function(e) {
  return e instanceof or || e instanceof tu || e instanceof cr && e.hasClass("enclosing") ? e : null;
}, Ef = function a(e, t) {
  var r = gl(e);
  if (r) {
    var n = r.children;
    if (n.length) {
      if (t === "right")
        return a(n[n.length - 1], "right");
      if (t === "left")
        return a(n[0], "left");
    }
  }
  return e;
}, Sn = function(e, t) {
  return e ? (t && (e = Ef(e, t)), kf[e.classes[0]] || null) : null;
}, er = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return jt(t.concat(r));
}, me = function(e, t, r) {
  if (!e)
    return jt();
  if (sa[e.type]) {
    var n = sa[e.type](e, t);
    if (r && t.size !== r.size) {
      n = jt(t.sizingClasses(r), [n], t);
      var u = t.sizeMultiplier / r.sizeMultiplier;
      n.height *= u, n.depth *= u;
    }
    return n;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Tr(a, e) {
  var t = jt(["base"], a, e), r = jt(["strut"]);
  return r.style.height = W(t.height + t.depth), t.depth && (r.style.verticalAlign = W(-t.depth)), t.children.unshift(r), t;
}
function kn(a, e) {
  var t = null;
  a.length === 1 && a[0].type === "tag" && (t = a[0].tag, a = a[0].body);
  var r = Ne(a, e, "root"), n;
  r.length === 2 && r[1].hasClass("tag") && (n = r.pop());
  for (var u = [], i = [], l = 0; l < r.length; l++)
    if (i.push(r[l]), r[l].hasClass("mbin") || r[l].hasClass("mrel") || r[l].hasClass("allowbreak")) {
      for (var s = !1; l < r.length - 1 && r[l + 1].hasClass("mspace") && !r[l + 1].hasClass("newline"); )
        l++, i.push(r[l]), r[l].hasClass("nobreak") && (s = !0);
      s || (u.push(Tr(i, e)), i = []);
    } else r[l].hasClass("newline") && (i.pop(), i.length > 0 && (u.push(Tr(i, e)), i = []), u.push(r[l]));
  i.length > 0 && u.push(Tr(i, e));
  var f;
  t ? (f = Tr(Ne(t, e, !0)), f.classes = ["tag"], u.push(f)) : n && u.push(n);
  var m = jt(["katex-html"], u);
  if (m.setAttribute("aria-hidden", "true"), f) {
    var b = f.children[0];
    b.style.height = W(m.height + m.depth), m.depth && (b.style.verticalAlign = W(-m.depth));
  }
  return m;
}
function bl(a) {
  return new or(a);
}
class it {
  constructor(e, t, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = Jt(this.classes));
    for (var r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += re.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + re.escape(Jt(this.classes)) + '"'), e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Y0 {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return re.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Tf {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", W(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + W(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var U = {
  MathNode: it,
  TextNode: Y0,
  SpaceNode: Tf,
  newDocumentFragment: bl
}, ct = function(e, t, r) {
  return Ae[t][e] && Ae[t][e].replace && e.charCodeAt(0) !== 55349 && !(cl.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Ae[t][e].replace), new U.TextNode(e);
}, au = function(e) {
  return e.length === 1 ? e[0] : new U.MathNode("mrow", e);
}, nu = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var r = t.font;
  if (!r || r === "mathnormal")
    return null;
  var n = e.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var u = e.text;
  if (re.contains(["\\imath", "\\jmath"], u))
    return null;
  Ae[n][u] && Ae[n][u].replace && (u = Ae[n][u].replace);
  var i = M.fontMap[r].fontName;
  return eu(u, i, n) ? M.fontMap[r].variant : null;
}, Qe = function(e, t, r) {
  if (e.length === 1) {
    var n = xe(e[0], t);
    return r && n instanceof it && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var u = [], i, l = 0; l < e.length; l++) {
    var s = xe(e[l], t);
    if (s instanceof it && i instanceof it) {
      if (s.type === "mtext" && i.type === "mtext" && s.getAttribute("mathvariant") === i.getAttribute("mathvariant")) {
        i.children.push(...s.children);
        continue;
      } else if (s.type === "mn" && i.type === "mn") {
        i.children.push(...s.children);
        continue;
      } else if (s.type === "mi" && s.children.length === 1 && i.type === "mn") {
        var f = s.children[0];
        if (f instanceof Y0 && f.text === ".") {
          i.children.push(...s.children);
          continue;
        }
      } else if (i.type === "mi" && i.children.length === 1) {
        var m = i.children[0];
        if (m instanceof Y0 && m.text === "̸" && (s.type === "mo" || s.type === "mi" || s.type === "mn")) {
          var b = s.children[0];
          b instanceof Y0 && b.text.length > 0 && (b.text = b.text.slice(0, 1) + "̸" + b.text.slice(1), u.pop());
        }
      }
    }
    u.push(s), i = s;
  }
  return u;
}, t0 = function(e, t, r) {
  return au(Qe(e, t, r));
}, xe = function(e, t) {
  if (!e)
    return new U.MathNode("mrow");
  if (la[e.type]) {
    var r = la[e.type](e, t);
    return r;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function ki(a, e, t, r, n) {
  var u = Qe(a, t), i;
  u.length === 1 && u[0] instanceof it && re.contains(["mrow", "mtable"], u[0].type) ? i = u[0] : i = new U.MathNode("mrow", u);
  var l = new U.MathNode("annotation", [new U.TextNode(e)]);
  l.setAttribute("encoding", "application/x-tex");
  var s = new U.MathNode("semantics", [i, l]), f = new U.MathNode("math", [s]);
  f.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && f.setAttribute("display", "block");
  var m = n ? "katex" : "katex-mathml";
  return M.makeSpan([m], [f]);
}
var vl = function(e) {
  return new Pt({
    style: e.displayMode ? ne.DISPLAY : ne.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, yl = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = M.makeSpan(r, [e]);
  }
  return e;
}, Cf = function(e, t, r) {
  var n = vl(r), u;
  if (r.output === "mathml")
    return ki(e, t, n, r.displayMode, !0);
  if (r.output === "html") {
    var i = kn(e, n);
    u = M.makeSpan(["katex"], [i]);
  } else {
    var l = ki(e, t, n, r.displayMode, !1), s = kn(e, n);
    u = M.makeSpan(["katex"], [l, s]);
  }
  return yl(u, r);
}, Ff = function(e, t, r) {
  var n = vl(r), u = kn(e, n), i = M.makeSpan(["katex"], [u]);
  return yl(i, r);
}, Mf = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, _f = function(e) {
  var t = new U.MathNode("mo", [new U.TextNode(Mf[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Nf = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Of = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Bf = function(e, t) {
  function r() {
    var l = 4e5, s = e.label.slice(1);
    if (re.contains(["widehat", "widecheck", "widetilde", "utilde"], s)) {
      var f = e, m = Of(f.base), b, h, d;
      if (m > 5)
        s === "widehat" || s === "widecheck" ? (b = 420, l = 2364, d = 0.42, h = s + "4") : (b = 312, l = 2340, d = 0.34, h = "tilde4");
      else {
        var k = [1, 1, 2, 2, 3, 3][m];
        s === "widehat" || s === "widecheck" ? (l = [0, 1062, 2364, 2364, 2364][k], b = [0, 239, 300, 360, 420][k], d = [0, 0.24, 0.3, 0.3, 0.36, 0.42][k], h = s + k) : (l = [0, 600, 1033, 2339, 2340][k], b = [0, 260, 286, 306, 312][k], d = [0, 0.26, 0.286, 0.3, 0.306, 0.34][k], h = "tilde" + k);
      }
      var E = new e0(h), w = new Ut([E], {
        width: "100%",
        height: W(d),
        viewBox: "0 0 " + l + " " + b,
        preserveAspectRatio: "none"
      });
      return {
        span: M.makeSvgSpan([], [w], t),
        minWidth: 0,
        height: d
      };
    } else {
      var F = [], x = Nf[s], [D, A, _] = x, B = _ / 1e3, O = D.length, H, R;
      if (O === 1) {
        var L = x[3];
        H = ["hide-tail"], R = [L];
      } else if (O === 2)
        H = ["halfarrow-left", "halfarrow-right"], R = ["xMinYMin", "xMaxYMin"];
      else if (O === 3)
        H = ["brace-left", "brace-center", "brace-right"], R = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + O + " children.");
      for (var C = 0; C < O; C++) {
        var I = new e0(D[C]), j = new Ut([I], {
          width: "400em",
          height: W(B),
          viewBox: "0 0 " + l + " " + _,
          preserveAspectRatio: R[C] + " slice"
        }), X = M.makeSvgSpan([H[C]], [j], t);
        if (O === 1)
          return {
            span: X,
            minWidth: A,
            height: B
          };
        X.style.height = W(B), F.push(X);
      }
      return {
        span: M.makeSpan(["stretchy"], F, t),
        minWidth: A,
        height: B
      };
    }
  }
  var {
    span: n,
    minWidth: u,
    height: i
  } = r();
  return n.height = i, n.style.height = W(i), u > 0 && (n.style.minWidth = W(u)), n;
}, If = function(e, t, r, n, u) {
  var i, l = e.height + e.depth + r + n;
  if (/fbox|color|angl/.test(t)) {
    if (i = M.makeSpan(["stretchy", t], [], u), t === "fbox") {
      var s = u.color && u.getColor();
      s && (i.style.borderColor = s);
    }
  } else {
    var f = [];
    /^[bx]cancel$/.test(t) && f.push(new An({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && f.push(new An({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var m = new Ut(f, {
      width: "100%",
      height: W(l)
    });
    i = M.makeSvgSpan([], [m], u);
  }
  return i.height = l, i.style.height = W(l), i;
}, Gt = {
  encloseSpan: If,
  mathMLnode: _f,
  svgSpan: Bf
};
function ce(a, e) {
  if (!a || a.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (a ? "node of type " + a.type : String(a)));
  return a;
}
function uu(a) {
  var e = Da(a);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (a ? "node of type " + a.type : String(a)));
  return e;
}
function Da(a) {
  return a && (a.type === "atom" || uf.hasOwnProperty(a.type)) ? a : null;
}
var iu = (a, e) => {
  var t, r, n;
  a && a.type === "supsub" ? (r = ce(a.base, "accent"), t = r.base, a.base = t, n = af(me(a, e)), a.base = r) : (r = ce(a, "accent"), t = r.base);
  var u = me(t, e.havingCrampedStyle()), i = r.isShifty && re.isCharacterBox(t), l = 0;
  if (i) {
    var s = re.getBaseElem(t), f = me(s, e.havingCrampedStyle());
    l = vi(f).skew;
  }
  var m = r.label === "\\c", b = m ? u.height + u.depth : Math.min(u.height, e.fontMetrics().xHeight), h;
  if (r.isStretchy)
    h = Gt.svgSpan(r, e), h = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: u
      }, {
        type: "elem",
        elem: h,
        wrapperClasses: ["svg-align"],
        wrapperStyle: l > 0 ? {
          width: "calc(100% - " + W(2 * l) + ")",
          marginLeft: W(2 * l)
        } : void 0
      }]
    }, e);
  else {
    var d, k;
    r.label === "\\vec" ? (d = M.staticSvg("vec", e), k = M.svgData.vec[1]) : (d = M.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), d = vi(d), d.italic = 0, k = d.width, m && (b += d.depth)), h = M.makeSpan(["accent-body"], [d]);
    var E = r.label === "\\textcircled";
    E && (h.classes.push("accent-full"), b = u.height);
    var w = l;
    E || (w -= k / 2), h.style.left = W(w), r.label === "\\textcircled" && (h.style.top = ".2em"), h = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: u
      }, {
        type: "kern",
        size: -b
      }, {
        type: "elem",
        elem: h
      }]
    }, e);
  }
  var F = M.makeSpan(["mord", "accent"], [h], e);
  return n ? (n.children[0] = F, n.height = Math.max(F.height, n.height), n.classes[0] = "mord", n) : F;
}, xl = (a, e) => {
  var t = a.isStretchy ? Gt.mathMLnode(a.label) : new U.MathNode("mo", [ct(a.label, a.mode)]), r = new U.MathNode("mover", [xe(a.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, Rf = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((a) => "\\" + a).join("|"));
Y({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var t = oa(e[0]), r = !Rf.test(a.funcName), n = !r || a.funcName === "\\widehat" || a.funcName === "\\widetilde" || a.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: a.parser.mode,
      label: a.funcName,
      isStretchy: r,
      isShifty: n,
      base: t
    };
  },
  htmlBuilder: iu,
  mathmlBuilder: xl
});
Y({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = e[0], r = a.parser.mode;
    return r === "math" && (a.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + a.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: a.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: iu,
  mathmlBuilder: xl
});
Y({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: r,
      base: n
    };
  },
  htmlBuilder: (a, e) => {
    var t = me(a.base, e), r = Gt.svgSpan(a, e), n = a.label === "\\utilde" ? 0.12 : 0, u = M.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord", "accentunder"], [u], e);
  },
  mathmlBuilder: (a, e) => {
    var t = Gt.mathMLnode(a.label), r = new U.MathNode("munder", [xe(a.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var Cr = (a) => {
  var e = new U.MathNode("mpadded", a ? [a] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
Y({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a;
    return {
      type: "xArrow",
      mode: r.mode,
      label: n,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(a, e) {
    var t = e.style, r = e.havingStyle(t.sup()), n = M.wrapFragment(me(a.body, r, e), e), u = a.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(u + "-arrow-pad");
    var i;
    a.below && (r = e.havingStyle(t.sub()), i = M.wrapFragment(me(a.below, r, e), e), i.classes.push(u + "-arrow-pad"));
    var l = Gt.svgSpan(a, e), s = -e.fontMetrics().axisHeight + 0.5 * l.height, f = -e.fontMetrics().axisHeight - 0.5 * l.height - 0.111;
    (n.depth > 0.25 || a.label === "\\xleftequilibrium") && (f -= n.depth);
    var m;
    if (i) {
      var b = -e.fontMetrics().axisHeight + i.height + 0.5 * l.height + 0.111;
      m = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: f
        }, {
          type: "elem",
          elem: l,
          shift: s
        }, {
          type: "elem",
          elem: i,
          shift: b
        }]
      }, e);
    } else
      m = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: f
        }, {
          type: "elem",
          elem: l,
          shift: s
        }]
      }, e);
    return m.children[0].children[0].children[1].classes.push("svg-align"), M.makeSpan(["mrel", "x-arrow"], [m], e);
  },
  mathmlBuilder(a, e) {
    var t = Gt.mathMLnode(a.label);
    t.setAttribute("minsize", a.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (a.body) {
      var n = Cr(xe(a.body, e));
      if (a.below) {
        var u = Cr(xe(a.below, e));
        r = new U.MathNode("munderover", [t, u, n]);
      } else
        r = new U.MathNode("mover", [t, n]);
    } else if (a.below) {
      var i = Cr(xe(a.below, e));
      r = new U.MathNode("munder", [t, i]);
    } else
      r = Cr(), r = new U.MathNode("mover", [t, r]);
    return r;
  }
});
var Lf = M.makeSpan;
function wl(a, e) {
  var t = Ne(a.body, e, !0);
  return Lf([a.mclass], t, e);
}
function Al(a, e) {
  var t, r = Qe(a.body, e);
  return a.mclass === "minner" ? t = new U.MathNode("mpadded", r) : a.mclass === "mord" ? a.isCharacterBox ? (t = r[0], t.type = "mi") : t = new U.MathNode("mi", r) : (a.isCharacterBox ? (t = r[0], t.type = "mo") : t = new U.MathNode("mo", r), a.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : a.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : a.mclass === "mopen" || a.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : a.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
Y({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: Me(n),
      isCharacterBox: re.isCharacterBox(n)
    };
  },
  htmlBuilder: wl,
  mathmlBuilder: Al
});
var Sa = (a) => {
  var e = a.type === "ordgroup" && a.body.length ? a.body[0] : a;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
Y({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Sa(e[0]),
      body: Me(e[1]),
      isCharacterBox: re.isCharacterBox(e[1])
    };
  }
});
Y({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[1], u = e[0], i;
    r !== "\\stackrel" ? i = Sa(n) : i = "mrel";
    var l = {
      type: "op",
      mode: n.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: Me(n)
    }, s = {
      type: "supsub",
      mode: u.mode,
      base: l,
      sup: r === "\\underset" ? null : u,
      sub: r === "\\underset" ? u : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: i,
      body: [s],
      isCharacterBox: re.isCharacterBox(s)
    };
  },
  htmlBuilder: wl,
  mathmlBuilder: Al
});
Y({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: Sa(e[0]),
      body: Me(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = Ne(a.body, e, !0), r = M.makeSpan([a.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(a, e) {
    var t = Qe(a.body, e), r = new U.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var zf = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Ei = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ti = (a) => a.type === "textord" && a.text === "@", Pf = (a, e) => (a.type === "mathord" || a.type === "atom") && a.text === e;
function qf(a, e, t) {
  var r = zf[a];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(r, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []), u = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, i = t.callFunction("\\Big", [u], []), l = t.callFunction("\\\\cdright", [e[1]], []), s = {
        type: "ordgroup",
        mode: "math",
        body: [n, i, l]
      };
      return t.callFunction("\\\\cdparent", [s], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var f = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [f], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Hf(a) {
  var e = [];
  for (a.gullet.beginGroup(), a.gullet.macros.set("\\cr", "\\\\\\relax"), a.gullet.beginGroup(); ; ) {
    e.push(a.parseExpression(!1, "\\\\")), a.gullet.endGroup(), a.gullet.beginGroup();
    var t = a.fetch().text;
    if (t === "&" || t === "\\\\")
      a.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new G("Expected \\\\ or \\cr or \\end", a.nextToken);
  }
  for (var r = [], n = [r], u = 0; u < e.length; u++) {
    for (var i = e[u], l = Ei(), s = 0; s < i.length; s++)
      if (!Ti(i[s]))
        l.body.push(i[s]);
      else {
        r.push(l), s += 1;
        var f = uu(i[s]).text, m = new Array(2);
        if (m[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, m[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(f) > -1)) if ("<>AV".indexOf(f) > -1)
          for (var b = 0; b < 2; b++) {
            for (var h = !0, d = s + 1; d < i.length; d++) {
              if (Pf(i[d], f)) {
                h = !1, s = d;
                break;
              }
              if (Ti(i[d]))
                throw new G("Missing a " + f + " character to complete a CD arrow.", i[d]);
              m[b].body.push(i[d]);
            }
            if (h)
              throw new G("Missing a " + f + " character to complete a CD arrow.", i[s]);
          }
        else
          throw new G('Expected one of "<>AV=|." after @', i[s]);
        var k = qf(f, m, a), E = {
          type: "styling",
          body: [k],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(E), l = Ei();
      }
    u % 2 === 0 ? r.push(l) : r.shift(), r = [], n.push(r);
  }
  a.gullet.endGroup(), a.gullet.endGroup();
  var w = new Array(n[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: w,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(n.length + 1).fill([])
  };
}
Y({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: r.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = e.havingStyle(e.style.sup()), r = M.wrapFragment(me(a.label, t, e), e);
    return r.classes.push("cd-label-" + a.side), r.style.bottom = W(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mrow", [xe(a.label, e)]);
    return t = new U.MathNode("mpadded", [t]), t.setAttribute("width", "0"), a.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new U.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
Y({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = M.wrapFragment(me(a.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(a, e) {
    return new U.MathNode("mrow", [xe(a.fragment, e)]);
  }
});
Y({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    for (var {
      parser: t
    } = a, r = ce(e[0], "ordgroup"), n = r.body, u = "", i = 0; i < n.length; i++) {
      var l = ce(n[i], "textord");
      u += l.text;
    }
    var s = parseInt(u), f;
    if (isNaN(s))
      throw new G("\\@char has non-numeric argument " + u);
    if (s < 0 || s >= 1114111)
      throw new G("\\@char with invalid code point " + u);
    return s <= 65535 ? f = String.fromCharCode(s) : (s -= 65536, f = String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: f
    };
  }
});
var Dl = (a, e) => {
  var t = Ne(a.body, e.withColor(a.color), !1);
  return M.makeFragment(t);
}, Sl = (a, e) => {
  var t = Qe(a.body, e.withColor(a.color)), r = new U.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", a.color), r;
};
Y({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = ce(e[0], "color-token").color, n = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: Me(n)
    };
  },
  htmlBuilder: Dl,
  mathmlBuilder: Sl
});
Y({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(a, e) {
    var {
      parser: t,
      breakOnTokenText: r
    } = a, n = ce(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", n);
    var u = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: u
    };
  },
  htmlBuilder: Dl,
  mathmlBuilder: Sl
});
Y({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, u = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: u,
      size: n && ce(n, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(a, e) {
    var t = M.makeSpan(["mspace"], [], e);
    return a.newLine && (t.classes.push("newline"), a.size && (t.style.marginTop = W(Te(a.size, e)))), t;
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mspace");
    return a.newLine && (t.setAttribute("linebreak", "newline"), a.size && t.setAttribute("height", W(Te(a.size, e)))), t;
  }
});
var En = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, kl = (a) => {
  var e = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", a);
  return e;
}, Uf = (a) => {
  var e = a.gullet.popToken();
  return e.text === "=" && (e = a.gullet.popToken(), e.text === " " && (e = a.gullet.popToken())), e;
}, El = (a, e, t, r) => {
  var n = a.gullet.macros.get(t.text);
  n == null && (t.noexpand = !0, n = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !a.gullet.isExpandable(t.text)
  }), a.gullet.macros.set(e, n, r);
};
Y({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    e.consumeSpaces();
    var r = e.fetch();
    if (En[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = En[r.text]), ce(e.parseFunction(), "internal");
    throw new G("Invalid token after macro prefix", r);
  }
});
Y({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = e.gullet.popToken(), n = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(n))
      throw new G("Expected a control sequence", r);
    for (var u = 0, i, l = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          i = e.gullet.future(), l[u].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new G('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== u + 1)
          throw new G('Argument number "' + r.text + '" out of order');
        u++, l.push([]);
      } else {
        if (r.text === "EOF")
          throw new G("Expected a macro definition");
        l[u].push(r.text);
      }
    var {
      tokens: s
    } = e.gullet.consumeArg();
    return i && s.unshift(i), (t === "\\edef" || t === "\\xdef") && (s = e.gullet.expandTokens(s), s.reverse()), e.gullet.macros.set(n, {
      tokens: s,
      numArgs: u,
      delimiters: l
    }, t === En[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
Y({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = kl(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = Uf(e);
    return El(e, r, n, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
Y({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = kl(e.gullet.popToken()), n = e.gullet.popToken(), u = e.gullet.popToken();
    return El(e, r, u, t === "\\\\globalfuture"), e.gullet.pushToken(u), e.gullet.pushToken(n), {
      type: "internal",
      mode: e.mode
    };
  }
});
var $0 = function(e, t, r) {
  var n = Ae.math[e] && Ae.math[e].replace, u = eu(n || e, t, r);
  if (!u)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return u;
}, su = function(e, t, r, n) {
  var u = r.havingBaseStyle(t), i = M.makeSpan(n.concat(u.sizingClasses(r)), [e], r), l = u.sizeMultiplier / r.sizeMultiplier;
  return i.height *= l, i.depth *= l, i.maxFontSize = u.sizeMultiplier, i;
}, Tl = function(e, t, r) {
  var n = t.havingBaseStyle(r), u = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = W(u), e.height -= u, e.depth += u;
}, jf = function(e, t, r, n, u, i) {
  var l = M.makeSymbol(e, "Main-Regular", u, n), s = su(l, t, n, i);
  return r && Tl(s, n, t), s;
}, Gf = function(e, t, r, n) {
  return M.makeSymbol(e, "Size" + t + "-Regular", r, n);
}, Cl = function(e, t, r, n, u, i) {
  var l = Gf(e, t, u, n), s = su(M.makeSpan(["delimsizing", "size" + t], [l], n), ne.TEXT, n, i);
  return r && Tl(s, n, ne.TEXT), s;
}, Ya = function(e, t, r) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var u = M.makeSpan(["delimsizinginner", n], [M.makeSpan([], [M.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: u
  };
}, Za = function(e, t, r) {
  var n = St["Size4-Regular"][e.charCodeAt(0)] ? St["Size4-Regular"][e.charCodeAt(0)][4] : St["Size1-Regular"][e.charCodeAt(0)][4], u = new e0("inner", Yc(e, Math.round(1e3 * t))), i = new Ut([u], {
    width: W(n),
    height: W(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + W(n),
    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), l = M.makeSvgSpan([], [i], r);
  return l.height = t, l.style.height = W(t), l.style.width = W(n), {
    type: "elem",
    elem: l
  };
}, Tn = 8e-3, Fr = {
  type: "kern",
  size: -1 * Tn
}, Vf = ["|", "\\lvert", "\\rvert", "\\vert"], $f = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Fl = function(e, t, r, n, u, i) {
  var l, s, f, m, b = "", h = 0;
  l = f = m = e, s = null;
  var d = "Size1-Regular";
  e === "\\uparrow" ? f = m = "⏐" : e === "\\Uparrow" ? f = m = "‖" : e === "\\downarrow" ? l = f = "⏐" : e === "\\Downarrow" ? l = f = "‖" : e === "\\updownarrow" ? (l = "\\uparrow", f = "⏐", m = "\\downarrow") : e === "\\Updownarrow" ? (l = "\\Uparrow", f = "‖", m = "\\Downarrow") : re.contains(Vf, e) ? (f = "∣", b = "vert", h = 333) : re.contains($f, e) ? (f = "∥", b = "doublevert", h = 556) : e === "[" || e === "\\lbrack" ? (l = "⎡", f = "⎢", m = "⎣", d = "Size4-Regular", b = "lbrack", h = 667) : e === "]" || e === "\\rbrack" ? (l = "⎤", f = "⎥", m = "⎦", d = "Size4-Regular", b = "rbrack", h = 667) : e === "\\lfloor" || e === "⌊" ? (f = l = "⎢", m = "⎣", d = "Size4-Regular", b = "lfloor", h = 667) : e === "\\lceil" || e === "⌈" ? (l = "⎡", f = m = "⎢", d = "Size4-Regular", b = "lceil", h = 667) : e === "\\rfloor" || e === "⌋" ? (f = l = "⎥", m = "⎦", d = "Size4-Regular", b = "rfloor", h = 667) : e === "\\rceil" || e === "⌉" ? (l = "⎤", f = m = "⎥", d = "Size4-Regular", b = "rceil", h = 667) : e === "(" || e === "\\lparen" ? (l = "⎛", f = "⎜", m = "⎝", d = "Size4-Regular", b = "lparen", h = 875) : e === ")" || e === "\\rparen" ? (l = "⎞", f = "⎟", m = "⎠", d = "Size4-Regular", b = "rparen", h = 875) : e === "\\{" || e === "\\lbrace" ? (l = "⎧", s = "⎨", m = "⎩", f = "⎪", d = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (l = "⎫", s = "⎬", m = "⎭", f = "⎪", d = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (l = "⎧", m = "⎩", f = "⎪", d = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (l = "⎫", m = "⎭", f = "⎪", d = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (l = "⎧", m = "⎭", f = "⎪", d = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (l = "⎫", m = "⎩", f = "⎪", d = "Size4-Regular");
  var k = $0(l, d, u), E = k.height + k.depth, w = $0(f, d, u), F = w.height + w.depth, x = $0(m, d, u), D = x.height + x.depth, A = 0, _ = 1;
  if (s !== null) {
    var B = $0(s, d, u);
    A = B.height + B.depth, _ = 2;
  }
  var O = E + D + A, H = Math.max(0, Math.ceil((t - O) / (_ * F))), R = O + H * _ * F, L = n.fontMetrics().axisHeight;
  r && (L *= n.sizeMultiplier);
  var C = R / 2 - L, I = [];
  if (b.length > 0) {
    var j = R - E - D, X = Math.round(R * 1e3), N = Zc(b, Math.round(j * 1e3)), P = new e0(b, N), z = (h / 1e3).toFixed(3) + "em", $ = (X / 1e3).toFixed(3) + "em", fe = new Ut([P], {
      width: z,
      height: $,
      viewBox: "0 0 " + h + " " + X
    }), le = M.makeSvgSpan([], [fe], n);
    le.height = X / 1e3, le.style.width = z, le.style.height = $, I.push({
      type: "elem",
      elem: le
    });
  } else {
    if (I.push(Ya(m, d, u)), I.push(Fr), s === null) {
      var J = R - E - D + 2 * Tn;
      I.push(Za(f, J, n));
    } else {
      var ee = (R - E - D - A) / 2 + 2 * Tn;
      I.push(Za(f, ee, n)), I.push(Fr), I.push(Ya(s, d, u)), I.push(Fr), I.push(Za(f, ee, n));
    }
    I.push(Fr), I.push(Ya(l, d, u));
  }
  var pe = n.havingBaseStyle(ne.TEXT), se = M.makeVList({
    positionType: "bottom",
    positionData: C,
    children: I
  }, pe);
  return su(M.makeSpan(["delimsizing", "mult"], [se], pe), ne.TEXT, n, i);
}, Qa = 80, Ka = 0.08, Ja = function(e, t, r, n, u) {
  var i = Xc(e, n, r), l = new e0(e, i), s = new Ut([l], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: W(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return M.makeSvgSpan(["hide-tail"], [s], u);
}, Wf = function(e, t) {
  var r = t.havingBaseSizing(), n = Ol("\\surd", e * r.sizeMultiplier, Nl, r), u = r.sizeMultiplier, i = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), l, s = 0, f = 0, m = 0, b;
  return n.type === "small" ? (m = 1e3 + 1e3 * i + Qa, e < 1 ? u = 1 : e < 1.4 && (u = 0.7), s = (1 + i + Ka) / u, f = (1 + i) / u, l = Ja("sqrtMain", s, m, i, t), l.style.minWidth = "0.853em", b = 0.833 / u) : n.type === "large" ? (m = (1e3 + Qa) * Z0[n.size], f = (Z0[n.size] + i) / u, s = (Z0[n.size] + i + Ka) / u, l = Ja("sqrtSize" + n.size, s, m, i, t), l.style.minWidth = "1.02em", b = 1 / u) : (s = e + i + Ka, f = e + i, m = Math.floor(1e3 * e + i) + Qa, l = Ja("sqrtTall", s, m, i, t), l.style.minWidth = "0.742em", b = 1.056), l.height = f, l.style.height = W(s), {
    span: l,
    advanceWidth: b,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + i) * u
  };
}, Ml = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Xf = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], _l = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Z0 = [0, 1.2, 1.8, 2.4, 3], Yf = function(e, t, r, n, u) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), re.contains(Ml, e) || re.contains(_l, e))
    return Cl(e, t, !1, r, n, u);
  if (re.contains(Xf, e))
    return Fl(e, Z0[t], !1, r, n, u);
  throw new G("Illegal delimiter: '" + e + "'");
}, Zf = [{
  type: "small",
  style: ne.SCRIPTSCRIPT
}, {
  type: "small",
  style: ne.SCRIPT
}, {
  type: "small",
  style: ne.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], Qf = [{
  type: "small",
  style: ne.SCRIPTSCRIPT
}, {
  type: "small",
  style: ne.SCRIPT
}, {
  type: "small",
  style: ne.TEXT
}, {
  type: "stack"
}], Nl = [{
  type: "small",
  style: ne.SCRIPTSCRIPT
}, {
  type: "small",
  style: ne.SCRIPT
}, {
  type: "small",
  style: ne.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], Kf = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Ol = function(e, t, r, n) {
  for (var u = Math.min(2, 3 - n.style.size), i = u; i < r.length && r[i].type !== "stack"; i++) {
    var l = $0(e, Kf(r[i]), "math"), s = l.height + l.depth;
    if (r[i].type === "small") {
      var f = n.havingBaseStyle(r[i].style);
      s *= f.sizeMultiplier;
    }
    if (s > t)
      return r[i];
  }
  return r[r.length - 1];
}, Bl = function(e, t, r, n, u, i) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var l;
  re.contains(_l, e) ? l = Zf : re.contains(Ml, e) ? l = Nl : l = Qf;
  var s = Ol(e, t, l, n);
  return s.type === "small" ? jf(e, s.style, r, n, u, i) : s.type === "large" ? Cl(e, s.size, r, n, u, i) : Fl(e, t, r, n, u, i);
}, Jf = function(e, t, r, n, u, i) {
  var l = n.fontMetrics().axisHeight * n.sizeMultiplier, s = 901, f = 5 / n.fontMetrics().ptPerEm, m = Math.max(t - l, r + l), b = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    m / 500 * s,
    2 * m - f
  );
  return Bl(e, b, !0, n, u, i);
}, Ht = {
  sqrtImage: Wf,
  sizedDelim: Yf,
  sizeToMaxHeight: Z0,
  customSizedDelim: Bl,
  leftRightDelim: Jf
}, Ci = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, eh = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function ka(a, e) {
  var t = Da(a);
  if (t && re.contains(eh, t.text))
    return t;
  throw t ? new G("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", a) : new G("Invalid delimiter type '" + a.type + "'", a);
}
Y({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = ka(e[0], a);
    return {
      type: "delimsizing",
      mode: a.parser.mode,
      size: Ci[a.funcName].size,
      mclass: Ci[a.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => a.delim === "." ? M.makeSpan([a.mclass]) : Ht.sizedDelim(a.delim, a.size, e, a.mode, [a.mclass]),
  mathmlBuilder: (a) => {
    var e = [];
    a.delim !== "." && e.push(ct(a.delim, a.mode));
    var t = new U.MathNode("mo", e);
    a.mclass === "mopen" || a.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = W(Ht.sizeToMaxHeight[a.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function Fi(a) {
  if (!a.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
Y({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = a.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new G("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: a.parser.mode,
      delim: ka(e[0], a).text,
      color: t
      // undefined if not set via \color
    };
  }
});
Y({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = ka(e[0], a), r = a.parser;
    ++r.leftrightDepth;
    var n = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var u = ce(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: n,
      left: t.text,
      right: u.delim,
      rightColor: u.color
    };
  },
  htmlBuilder: (a, e) => {
    Fi(a);
    for (var t = Ne(a.body, e, !0, ["mopen", "mclose"]), r = 0, n = 0, u = !1, i = 0; i < t.length; i++)
      t[i].isMiddle ? u = !0 : (r = Math.max(t[i].height, r), n = Math.max(t[i].depth, n));
    r *= e.sizeMultiplier, n *= e.sizeMultiplier;
    var l;
    if (a.left === "." ? l = er(e, ["mopen"]) : l = Ht.leftRightDelim(a.left, r, n, e, a.mode, ["mopen"]), t.unshift(l), u)
      for (var s = 1; s < t.length; s++) {
        var f = t[s], m = f.isMiddle;
        m && (t[s] = Ht.leftRightDelim(m.delim, r, n, m.options, a.mode, []));
      }
    var b;
    if (a.right === ".")
      b = er(e, ["mclose"]);
    else {
      var h = a.rightColor ? e.withColor(a.rightColor) : e;
      b = Ht.leftRightDelim(a.right, r, n, h, a.mode, ["mclose"]);
    }
    return t.push(b), M.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (a, e) => {
    Fi(a);
    var t = Qe(a.body, e);
    if (a.left !== ".") {
      var r = new U.MathNode("mo", [ct(a.left, a.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (a.right !== ".") {
      var n = new U.MathNode("mo", [ct(a.right, a.mode)]);
      n.setAttribute("fence", "true"), a.rightColor && n.setAttribute("mathcolor", a.rightColor), t.push(n);
    }
    return au(t);
  }
});
Y({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = ka(e[0], a);
    if (!a.parser.leftrightDepth)
      throw new G("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: a.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    if (a.delim === ".")
      t = er(e, []);
    else {
      t = Ht.sizedDelim(a.delim, 1, e, a.mode, []);
      var r = {
        delim: a.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (a, e) => {
    var t = a.delim === "\\vert" || a.delim === "|" ? ct("|", "text") : ct(a.delim, a.mode), r = new U.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var lu = (a, e) => {
  var t = M.wrapFragment(me(a.body, e), e), r = a.label.slice(1), n = e.sizeMultiplier, u, i = 0, l = re.isCharacterBox(a.body);
  if (r === "sout")
    u = M.makeSpan(["stretchy", "sout"]), u.height = e.fontMetrics().defaultRuleThickness / n, i = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var s = Te({
      number: 0.6,
      unit: "pt"
    }, e), f = Te({
      number: 0.35,
      unit: "ex"
    }, e), m = e.havingBaseSizing();
    n = n / m.sizeMultiplier;
    var b = t.height + t.depth + s + f;
    t.style.paddingLeft = W(b / 2 + s);
    var h = Math.floor(1e3 * b * n), d = $c(h), k = new Ut([new e0("phase", d)], {
      width: "400em",
      height: W(h / 1e3),
      viewBox: "0 0 400000 " + h,
      preserveAspectRatio: "xMinYMin slice"
    });
    u = M.makeSvgSpan(["hide-tail"], [k], e), u.style.height = W(b), i = t.depth + s + f;
  } else {
    /cancel/.test(r) ? l || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var E = 0, w = 0, F = 0;
    /box/.test(r) ? (F = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), E = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : F), w = E) : r === "angl" ? (F = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), E = 4 * F, w = Math.max(0, 0.25 - t.depth)) : (E = l ? 0.2 : 0, w = E), u = Gt.encloseSpan(t, r, E, w, e), /fbox|boxed|fcolorbox/.test(r) ? (u.style.borderStyle = "solid", u.style.borderWidth = W(F)) : r === "angl" && F !== 0.049 && (u.style.borderTopWidth = W(F), u.style.borderRightWidth = W(F)), i = t.depth + w, a.backgroundColor && (u.style.backgroundColor = a.backgroundColor, a.borderColor && (u.style.borderColor = a.borderColor));
  }
  var x;
  if (a.backgroundColor)
    x = M.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: u,
          shift: i
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var D = /cancel|phase/.test(r) ? ["svg-align"] : [];
    x = M.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: u,
          shift: i,
          wrapperClasses: D
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (x.height = t.height, x.depth = t.depth), /cancel/.test(r) && !l ? M.makeSpan(["mord", "cancel-lap"], [x], e) : M.makeSpan(["mord"], [x], e);
}, ou = (a, e) => {
  var t = 0, r = new U.MathNode(a.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [xe(a.body, e)]);
  switch (a.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * t + "pt"), r.setAttribute("height", "+" + 2 * t + "pt"), r.setAttribute("lspace", t + "pt"), r.setAttribute("voffset", t + "pt"), a.label === "\\fcolorbox") {
        var n = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + n + "em solid " + String(a.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return a.backgroundColor && r.setAttribute("mathbackground", a.backgroundColor), r;
};
Y({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a, u = ce(e[0], "color-token").color, i = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: u,
      body: i
    };
  },
  htmlBuilder: lu,
  mathmlBuilder: ou
});
Y({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a, u = ce(e[0], "color-token").color, i = ce(e[1], "color-token").color, l = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: i,
      borderColor: u,
      body: l
    };
  },
  htmlBuilder: lu,
  mathmlBuilder: ou
});
Y({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
Y({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: r,
      body: n
    };
  },
  htmlBuilder: lu,
  mathmlBuilder: ou
});
Y({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Il = {};
function Ct(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: u,
    mathmlBuilder: i
  } = a, l = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: n
  }, s = 0; s < t.length; ++s)
    Il[t[s]] = l;
  u && (sa[e] = u), i && (la[e] = i);
}
var Rl = {};
function g(a, e) {
  Rl[a] = e;
}
function Mi(a) {
  var e = [];
  a.consumeSpaces();
  var t = a.fetch().text;
  for (t === "\\relax" && (a.consume(), a.consumeSpaces(), t = a.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    a.consume(), e.push(t === "\\hdashline"), a.consumeSpaces(), t = a.fetch().text;
  return e;
}
var Ea = (a) => {
  var e = a.parser.settings;
  if (!e.displayMode)
    throw new G("{" + a.envName + "} can be used only in display mode.");
};
function cu(a) {
  if (a.indexOf("ed") === -1)
    return a.indexOf("*") === -1;
}
function r0(a, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: n,
    cols: u,
    arraystretch: i,
    colSeparationType: l,
    autoTag: s,
    singleRow: f,
    emptySingleRow: m,
    maxNumCols: b,
    leqno: h
  } = e;
  if (a.gullet.beginGroup(), f || a.gullet.macros.set("\\cr", "\\\\\\relax"), !i) {
    var d = a.gullet.expandMacroAsText("\\arraystretch");
    if (d == null)
      i = 1;
    else if (i = parseFloat(d), !i || i < 0)
      throw new G("Invalid \\arraystretch: " + d);
  }
  a.gullet.beginGroup();
  var k = [], E = [k], w = [], F = [], x = s != null ? [] : void 0;
  function D() {
    s && a.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function A() {
    x && (a.gullet.macros.get("\\df@tag") ? (x.push(a.subparse([new lt("\\df@tag")])), a.gullet.macros.set("\\df@tag", void 0, !0)) : x.push(!!s && a.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (D(), F.push(Mi(a)); ; ) {
    var _ = a.parseExpression(!1, f ? "\\end" : "\\\\");
    a.gullet.endGroup(), a.gullet.beginGroup(), _ = {
      type: "ordgroup",
      mode: a.mode,
      body: _
    }, t && (_ = {
      type: "styling",
      mode: a.mode,
      style: t,
      body: [_]
    }), k.push(_);
    var B = a.fetch().text;
    if (B === "&") {
      if (b && k.length === b) {
        if (f || l)
          throw new G("Too many tab characters: &", a.nextToken);
        a.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      a.consume();
    } else if (B === "\\end") {
      A(), k.length === 1 && _.type === "styling" && _.body[0].body.length === 0 && (E.length > 1 || !m) && E.pop(), F.length < E.length + 1 && F.push([]);
      break;
    } else if (B === "\\\\") {
      a.consume();
      var O = void 0;
      a.gullet.future().text !== " " && (O = a.parseSizeGroup(!0)), w.push(O ? O.value : null), A(), F.push(Mi(a)), k = [], E.push(k), D();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", a.nextToken);
  }
  return a.gullet.endGroup(), a.gullet.endGroup(), {
    type: "array",
    mode: a.mode,
    addJot: n,
    arraystretch: i,
    body: E,
    cols: u,
    rowGaps: w,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: F,
    colSeparationType: l,
    tags: x,
    leqno: h
  };
}
function fu(a) {
  return a.slice(0, 1) === "d" ? "display" : "text";
}
var Ft = function(e, t) {
  var r, n, u = e.body.length, i = e.hLinesBeforeRow, l = 0, s = new Array(u), f = [], m = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), b = 1 / t.fontMetrics().ptPerEm, h = 5 * b;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var d = t.havingStyle(ne.SCRIPT).sizeMultiplier;
    h = 0.2778 * (d / t.sizeMultiplier);
  }
  var k = e.colSeparationType === "CD" ? Te({
    number: 3,
    unit: "ex"
  }, t) : 12 * b, E = 3 * b, w = e.arraystretch * k, F = 0.7 * w, x = 0.3 * w, D = 0;
  function A(Nt) {
    for (var Ot = 0; Ot < Nt.length; ++Ot)
      Ot > 0 && (D += 0.25), f.push({
        pos: D,
        isDashed: Nt[Ot]
      });
  }
  for (A(i[0]), r = 0; r < e.body.length; ++r) {
    var _ = e.body[r], B = F, O = x;
    l < _.length && (l = _.length);
    var H = new Array(_.length);
    for (n = 0; n < _.length; ++n) {
      var R = me(_[n], t);
      O < R.depth && (O = R.depth), B < R.height && (B = R.height), H[n] = R;
    }
    var L = e.rowGaps[r], C = 0;
    L && (C = Te(L, t), C > 0 && (C += x, O < C && (O = C), C = 0)), e.addJot && (O += E), H.height = B, H.depth = O, D += B, H.pos = D, D += O + C, s[r] = H, A(i[r + 1]);
  }
  var I = D / 2 + t.fontMetrics().axisHeight, j = e.cols || [], X = [], N, P, z = [];
  if (e.tags && e.tags.some((Nt) => Nt))
    for (r = 0; r < u; ++r) {
      var $ = s[r], fe = $.pos - I, le = e.tags[r], J = void 0;
      le === !0 ? J = M.makeSpan(["eqn-num"], [], t) : le === !1 ? J = M.makeSpan([], [], t) : J = M.makeSpan([], Ne(le, t, !0), t), J.depth = $.depth, J.height = $.height, z.push({
        type: "elem",
        elem: J,
        shift: fe
      });
    }
  for (
    n = 0, P = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    n < l || P < j.length;
    ++n, ++P
  ) {
    for (var ee = j[P] || {}, pe = !0; ee.type === "separator"; ) {
      if (pe || (N = M.makeSpan(["arraycolsep"], []), N.style.width = W(t.fontMetrics().doubleRuleSep), X.push(N)), ee.separator === "|" || ee.separator === ":") {
        var se = ee.separator === "|" ? "solid" : "dashed", Q = M.makeSpan(["vertical-separator"], [], t);
        Q.style.height = W(D), Q.style.borderRightWidth = W(m), Q.style.borderRightStyle = se, Q.style.margin = "0 " + W(-m / 2);
        var Fe = D - I;
        Fe && (Q.style.verticalAlign = W(-Fe)), X.push(Q);
      } else
        throw new G("Invalid separator type: " + ee.separator);
      P++, ee = j[P] || {}, pe = !1;
    }
    if (!(n >= l)) {
      var De = void 0;
      (n > 0 || e.hskipBeforeAndAfter) && (De = re.deflt(ee.pregap, h), De !== 0 && (N = M.makeSpan(["arraycolsep"], []), N.style.width = W(De), X.push(N)));
      var Se = [];
      for (r = 0; r < u; ++r) {
        var Ke = s[r], Ve = Ke[n];
        if (Ve) {
          var ht = Ke.pos - I;
          Ve.depth = Ke.depth, Ve.height = Ke.height, Se.push({
            type: "elem",
            elem: Ve,
            shift: ht
          });
        }
      }
      Se = M.makeVList({
        positionType: "individualShift",
        children: Se
      }, t), Se = M.makeSpan(["col-align-" + (ee.align || "c")], [Se]), X.push(Se), (n < l - 1 || e.hskipBeforeAndAfter) && (De = re.deflt(ee.postgap, h), De !== 0 && (N = M.makeSpan(["arraycolsep"], []), N.style.width = W(De), X.push(N)));
    }
  }
  if (s = M.makeSpan(["mtable"], X), f.length > 0) {
    for (var vt = M.makeLineSpan("hline", t, m), _t = M.makeLineSpan("hdashline", t, m), dt = [{
      type: "elem",
      elem: s,
      shift: 0
    }]; f.length > 0; ) {
      var m0 = f.pop(), p0 = m0.pos - I;
      m0.isDashed ? dt.push({
        type: "elem",
        elem: _t,
        shift: p0
      }) : dt.push({
        type: "elem",
        elem: vt,
        shift: p0
      });
    }
    s = M.makeVList({
      positionType: "individualShift",
      children: dt
    }, t);
  }
  if (z.length === 0)
    return M.makeSpan(["mord"], [s], t);
  var yt = M.makeVList({
    positionType: "individualShift",
    children: z
  }, t);
  return yt = M.makeSpan(["tag"], [yt], t), M.makeFragment([s, yt]);
}, th = {
  c: "center ",
  l: "left ",
  r: "right "
}, Mt = function(e, t) {
  for (var r = [], n = new U.MathNode("mtd", [], ["mtr-glue"]), u = new U.MathNode("mtd", [], ["mml-eqn-num"]), i = 0; i < e.body.length; i++) {
    for (var l = e.body[i], s = [], f = 0; f < l.length; f++)
      s.push(new U.MathNode("mtd", [xe(l[f], t)]));
    e.tags && e.tags[i] && (s.unshift(n), s.push(n), e.leqno ? s.unshift(u) : s.push(u)), r.push(new U.MathNode("mtr", s));
  }
  var m = new U.MathNode("mtable", r), b = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  m.setAttribute("rowspacing", W(b));
  var h = "", d = "";
  if (e.cols && e.cols.length > 0) {
    var k = e.cols, E = "", w = !1, F = 0, x = k.length;
    k[0].type === "separator" && (h += "top ", F = 1), k[k.length - 1].type === "separator" && (h += "bottom ", x -= 1);
    for (var D = F; D < x; D++)
      k[D].type === "align" ? (d += th[k[D].align], w && (E += "none "), w = !0) : k[D].type === "separator" && w && (E += k[D].separator === "|" ? "solid " : "dashed ", w = !1);
    m.setAttribute("columnalign", d.trim()), /[sd]/.test(E) && m.setAttribute("columnlines", E.trim());
  }
  if (e.colSeparationType === "align") {
    for (var A = e.cols || [], _ = "", B = 1; B < A.length; B++)
      _ += B % 2 ? "0em " : "1em ";
    m.setAttribute("columnspacing", _.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
  var O = "", H = e.hLinesBeforeRow;
  h += H[0].length > 0 ? "left " : "", h += H[H.length - 1].length > 0 ? "right " : "";
  for (var R = 1; R < H.length - 1; R++)
    O += H[R].length === 0 ? "none " : H[R][0] ? "dashed " : "solid ";
  return /[sd]/.test(O) && m.setAttribute("rowlines", O.trim()), h !== "" && (m = new U.MathNode("menclose", [m]), m.setAttribute("notation", h.trim())), e.arraystretch && e.arraystretch < 1 && (m = new U.MathNode("mstyle", [m]), m.setAttribute("scriptlevel", "1")), m;
}, Ll = function(e, t) {
  e.envName.indexOf("ed") === -1 && Ea(e);
  var r = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", u = e.envName === "split", i = r0(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: u ? void 0 : cu(e.envName),
    emptySingleRow: !0,
    colSeparationType: n,
    maxNumCols: u ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), l, s = 0, f = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var m = "", b = 0; b < t[0].body.length; b++) {
      var h = ce(t[0].body[b], "textord");
      m += h.text;
    }
    l = Number(m), s = l * 2;
  }
  var d = !s;
  i.body.forEach(function(F) {
    for (var x = 1; x < F.length; x += 2) {
      var D = ce(F[x], "styling"), A = ce(D.body[0], "ordgroup");
      A.body.unshift(f);
    }
    if (d)
      s < F.length && (s = F.length);
    else {
      var _ = F.length / 2;
      if (l < _)
        throw new G("Too many math in a row: " + ("expected " + l + ", but got " + _), F[0]);
    }
  });
  for (var k = 0; k < s; ++k) {
    var E = "r", w = 0;
    k % 2 === 1 ? E = "l" : k > 0 && d && (w = 1), r[k] = {
      type: "align",
      align: E,
      pregap: w,
      postgap: 0
    };
  }
  return i.colSeparationType = d ? "align" : "alignat", i;
};
Ct({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = Da(e[0]), r = t ? [e[0]] : ce(e[0], "ordgroup").body, n = r.map(function(i) {
      var l = uu(i), s = l.text;
      if ("lcr".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      if (s === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (s === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new G("Unknown column alignment: " + s, i);
    }), u = {
      cols: n,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: n.length
    };
    return r0(a.parser, u, fu(a.envName));
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[a.envName.replace("*", "")], t = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (a.envName.charAt(a.envName.length - 1) === "*") {
      var n = a.parser;
      if (n.consumeSpaces(), n.fetch().text === "[") {
        if (n.consume(), n.consumeSpaces(), t = n.fetch().text, "lcr".indexOf(t) === -1)
          throw new G("Expected l or c or r", n.nextToken);
        n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var u = r0(a.parser, r, fu(a.envName)), i = Math.max(0, ...u.body.map((l) => l.length));
    return u.cols = new Array(i).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: a.mode,
      body: [u],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : u;
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 0.5
    }, t = r0(a.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = Da(e[0]), r = t ? [e[0]] : ce(e[0], "ordgroup").body, n = r.map(function(i) {
      var l = uu(i), s = l.text;
      if ("lc".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      throw new G("Unknown column alignment: " + s, i);
    });
    if (n.length > 1)
      throw new G("{subarray} can contain only one column");
    var u = {
      cols: n,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (u = r0(a.parser, u, "script"), u.body.length > 0 && u.body[0].length > 1)
      throw new G("{subarray} can contain only one column");
    return u;
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = r0(a.parser, e, fu(a.envName));
    return {
      type: "leftright",
      mode: a.mode,
      body: [t],
      left: a.envName.indexOf("r") > -1 ? "." : "\\{",
      right: a.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Ll,
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    re.contains(["gather", "gather*"], a.envName) && Ea(a);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: cu(a.envName),
      emptySingleRow: !0,
      leqno: a.parser.settings.leqno
    };
    return r0(a.parser, e, "display");
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Ll,
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    Ea(a);
    var e = {
      autoTag: cu(a.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: a.parser.settings.leqno
    };
    return r0(a.parser, e, "display");
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
Ct({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(a) {
    return Ea(a), Hf(a.parser);
  },
  htmlBuilder: Ft,
  mathmlBuilder: Mt
});
g("\\nonumber", "\\gdef\\@eqnsw{0}");
g("\\notag", "\\nonumber");
Y({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(a, e) {
    throw new G(a.funcName + " valid only within array environment");
  }
});
var _i = Il;
Y({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    if (n.type !== "ordgroup")
      throw new G("Invalid environment name", n);
    for (var u = "", i = 0; i < n.body.length; ++i)
      u += ce(n.body[i], "textord").text;
    if (r === "\\begin") {
      if (!_i.hasOwnProperty(u))
        throw new G("No such environment: " + u, n);
      var l = _i[u], {
        args: s,
        optArgs: f
      } = t.parseArguments("\\begin{" + u + "}", l), m = {
        mode: t.mode,
        envName: u,
        parser: t
      }, b = l.handler(m, s, f);
      t.expect("\\end", !1);
      var h = t.nextToken, d = ce(t.parseFunction(), "environment");
      if (d.name !== u)
        throw new G("Mismatch: \\begin{" + u + "} matched by \\end{" + d.name + "}", h);
      return b;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: u,
      nameGroup: n
    };
  }
});
var zl = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return me(a.body, r);
}, Pl = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return xe(a.body, r);
}, Ni = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
Y({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = oa(e[0]), u = r;
    return u in Ni && (u = Ni[u]), {
      type: "font",
      mode: t.mode,
      font: u.slice(1),
      body: n
    };
  },
  htmlBuilder: zl,
  mathmlBuilder: Pl
});
Y({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0], n = re.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Sa(r),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: n
    };
  }
});
Y({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r,
      breakOnTokenText: n
    } = a, {
      mode: u
    } = t, i = t.parseExpression(!0, n), l = "math" + r.slice(1);
    return {
      type: "font",
      mode: u,
      font: l,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: i
      }
    };
  },
  htmlBuilder: zl,
  mathmlBuilder: Pl
});
var ql = (a, e) => {
  var t = e;
  return a === "display" ? t = t.id >= ne.SCRIPT.id ? t.text() : ne.DISPLAY : a === "text" && t.size === ne.DISPLAY.size ? t = ne.TEXT : a === "script" ? t = ne.SCRIPT : a === "scriptscript" && (t = ne.SCRIPTSCRIPT), t;
}, hu = (a, e) => {
  var t = ql(a.size, e.style), r = t.fracNum(), n = t.fracDen(), u;
  u = e.havingStyle(r);
  var i = me(a.numer, u, e);
  if (a.continued) {
    var l = 8.5 / e.fontMetrics().ptPerEm, s = 3.5 / e.fontMetrics().ptPerEm;
    i.height = i.height < l ? l : i.height, i.depth = i.depth < s ? s : i.depth;
  }
  u = e.havingStyle(n);
  var f = me(a.denom, u, e), m, b, h;
  a.hasBarLine ? (a.barSize ? (b = Te(a.barSize, e), m = M.makeLineSpan("frac-line", e, b)) : m = M.makeLineSpan("frac-line", e), b = m.height, h = m.height) : (m = null, b = 0, h = e.fontMetrics().defaultRuleThickness);
  var d, k, E;
  t.size === ne.DISPLAY.size || a.size === "display" ? (d = e.fontMetrics().num1, b > 0 ? k = 3 * h : k = 7 * h, E = e.fontMetrics().denom1) : (b > 0 ? (d = e.fontMetrics().num2, k = h) : (d = e.fontMetrics().num3, k = 3 * h), E = e.fontMetrics().denom2);
  var w;
  if (m) {
    var x = e.fontMetrics().axisHeight;
    d - i.depth - (x + 0.5 * b) < k && (d += k - (d - i.depth - (x + 0.5 * b))), x - 0.5 * b - (f.height - E) < k && (E += k - (x - 0.5 * b - (f.height - E)));
    var D = -(x - 0.5 * b);
    w = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: f,
        shift: E
      }, {
        type: "elem",
        elem: m,
        shift: D
      }, {
        type: "elem",
        elem: i,
        shift: -d
      }]
    }, e);
  } else {
    var F = d - i.depth - (f.height - E);
    F < k && (d += 0.5 * (k - F), E += 0.5 * (k - F)), w = M.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: f,
        shift: E
      }, {
        type: "elem",
        elem: i,
        shift: -d
      }]
    }, e);
  }
  u = e.havingStyle(t), w.height *= u.sizeMultiplier / e.sizeMultiplier, w.depth *= u.sizeMultiplier / e.sizeMultiplier;
  var A;
  t.size === ne.DISPLAY.size ? A = e.fontMetrics().delim1 : t.size === ne.SCRIPTSCRIPT.size ? A = e.havingStyle(ne.SCRIPT).fontMetrics().delim2 : A = e.fontMetrics().delim2;
  var _, B;
  return a.leftDelim == null ? _ = er(e, ["mopen"]) : _ = Ht.customSizedDelim(a.leftDelim, A, !0, e.havingStyle(t), a.mode, ["mopen"]), a.continued ? B = M.makeSpan([]) : a.rightDelim == null ? B = er(e, ["mclose"]) : B = Ht.customSizedDelim(a.rightDelim, A, !0, e.havingStyle(t), a.mode, ["mclose"]), M.makeSpan(["mord"].concat(u.sizingClasses(e)), [_, M.makeSpan(["mfrac"], [w]), B], e);
}, du = (a, e) => {
  var t = new U.MathNode("mfrac", [xe(a.numer, e), xe(a.denom, e)]);
  if (!a.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (a.barSize) {
    var r = Te(a.barSize, e);
    t.setAttribute("linethickness", W(r));
  }
  var n = ql(a.size, e.style);
  if (n.size !== e.style.size) {
    t = new U.MathNode("mstyle", [t]);
    var u = n.size === ne.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", u), t.setAttribute("scriptlevel", "0");
  }
  if (a.leftDelim != null || a.rightDelim != null) {
    var i = [];
    if (a.leftDelim != null) {
      var l = new U.MathNode("mo", [new U.TextNode(a.leftDelim.replace("\\", ""))]);
      l.setAttribute("fence", "true"), i.push(l);
    }
    if (i.push(t), a.rightDelim != null) {
      var s = new U.MathNode("mo", [new U.TextNode(a.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), i.push(s);
    }
    return au(i);
  }
  return t;
};
Y({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], u = e[1], i, l = null, s = null, f = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        i = !0;
        break;
      case "\\\\atopfrac":
        i = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        i = !1, l = "(", s = ")";
        break;
      case "\\\\bracefrac":
        i = !1, l = "\\{", s = "\\}";
        break;
      case "\\\\brackfrac":
        i = !1, l = "[", s = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        f = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        f = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: n,
      denom: u,
      hasBarLine: i,
      leftDelim: l,
      rightDelim: s,
      size: f,
      barSize: null
    };
  },
  htmlBuilder: hu,
  mathmlBuilder: du
});
Y({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], u = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: n,
      denom: u,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
Y({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t,
      token: r
    } = a, n;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: n,
      token: r
    };
  }
});
var Oi = ["display", "text", "script", "scriptscript"], Bi = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
Y({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = e[4], n = e[5], u = oa(e[0]), i = u.type === "atom" && u.family === "open" ? Bi(u.text) : null, l = oa(e[1]), s = l.type === "atom" && l.family === "close" ? Bi(l.text) : null, f = ce(e[2], "size"), m, b = null;
    f.isBlank ? m = !0 : (b = f.value, m = b.number > 0);
    var h = "auto", d = e[3];
    if (d.type === "ordgroup") {
      if (d.body.length > 0) {
        var k = ce(d.body[0], "textord");
        h = Oi[Number(k.text)];
      }
    } else
      d = ce(d, "textord"), h = Oi[Number(d.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: n,
      continued: !1,
      hasBarLine: m,
      barSize: b,
      leftDelim: i,
      rightDelim: s,
      size: h
    };
  },
  htmlBuilder: hu,
  mathmlBuilder: du
});
Y({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r,
      token: n
    } = a;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: ce(e[0], "size").value,
      token: n
    };
  }
});
Y({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], u = _c(ce(e[1], "infix").size), i = e[2], l = u.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: i,
      continued: !1,
      hasBarLine: l,
      barSize: u,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: hu,
  mathmlBuilder: du
});
var Hl = (a, e) => {
  var t = e.style, r, n;
  a.type === "supsub" ? (r = a.sup ? me(a.sup, e.havingStyle(t.sup()), e) : me(a.sub, e.havingStyle(t.sub()), e), n = ce(a.base, "horizBrace")) : n = ce(a, "horizBrace");
  var u = me(n.base, e.havingBaseStyle(ne.DISPLAY)), i = Gt.svgSpan(n, e), l;
  if (n.isOver ? (l = M.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: u
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), l.children[0].children[0].children[1].classes.push("svg-align")) : (l = M.makeVList({
    positionType: "bottom",
    positionData: u.depth + 0.1 + i.height,
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: u
    }]
  }, e), l.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var s = M.makeSpan(["mord", n.isOver ? "mover" : "munder"], [l], e);
    n.isOver ? l = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, e) : l = M.makeVList({
      positionType: "bottom",
      positionData: s.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: s
      }]
    }, e);
  }
  return M.makeSpan(["mord", n.isOver ? "mover" : "munder"], [l], e);
}, rh = (a, e) => {
  var t = Gt.mathMLnode(a.label);
  return new U.MathNode(a.isOver ? "mover" : "munder", [xe(a.base, e), t]);
};
Y({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: e[0]
    };
  },
  htmlBuilder: Hl,
  mathmlBuilder: rh
});
Y({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[1], n = ce(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: n
    }) ? {
      type: "href",
      mode: t.mode,
      href: n,
      body: Me(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (a, e) => {
    var t = Ne(a.body, e, !1);
    return M.makeAnchor(a.href, [], t, e);
  },
  mathmlBuilder: (a, e) => {
    var t = t0(a.body, e);
    return t instanceof it || (t = new it("mrow", [t])), t.setAttribute("href", a.href), t;
  }
});
Y({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = ce(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var n = [], u = 0; u < r.length; u++) {
      var i = r[u];
      i === "~" && (i = "\\textasciitilde"), n.push({
        type: "textord",
        mode: "text",
        text: i
      });
    }
    var l = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: Me(l)
    };
  }
});
Y({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "hbox",
      mode: t.mode,
      body: Me(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = Ne(a.body, e, !1);
    return M.makeFragment(t);
  },
  mathmlBuilder(a, e) {
    return new U.MathNode("mrow", Qe(a.body, e));
  }
});
Y({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r,
      token: n
    } = a, u = ce(e[0], "raw").string, i = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var l, s = {};
    switch (r) {
      case "\\htmlClass":
        s.class = u, l = {
          command: "\\htmlClass",
          class: u
        };
        break;
      case "\\htmlId":
        s.id = u, l = {
          command: "\\htmlId",
          id: u
        };
        break;
      case "\\htmlStyle":
        s.style = u, l = {
          command: "\\htmlStyle",
          style: u
        };
        break;
      case "\\htmlData": {
        for (var f = u.split(","), m = 0; m < f.length; m++) {
          var b = f[m].split("=");
          if (b.length !== 2)
            throw new G("Error parsing key-value for \\htmlData");
          s["data-" + b[0].trim()] = b[1].trim();
        }
        l = {
          command: "\\htmlData",
          attributes: s
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(l) ? {
      type: "html",
      mode: t.mode,
      attributes: s,
      body: Me(i)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (a, e) => {
    var t = Ne(a.body, e, !1), r = ["enclosing"];
    a.attributes.class && r.push(...a.attributes.class.trim().split(/\s+/));
    var n = M.makeSpan(r, t, e);
    for (var u in a.attributes)
      u !== "class" && a.attributes.hasOwnProperty(u) && n.setAttribute(u, a.attributes[u]);
    return n;
  },
  mathmlBuilder: (a, e) => t0(a.body, e)
});
Y({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: Me(e[0]),
      mathml: Me(e[1])
    };
  },
  htmlBuilder: (a, e) => {
    var t = Ne(a.html, e, !1);
    return M.makeFragment(t);
  },
  mathmlBuilder: (a, e) => t0(a.mathml, e)
});
var en = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new G("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!il(r))
    throw new G("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
Y({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (a, e, t) => {
    var {
      parser: r
    } = a, n = {
      number: 0,
      unit: "em"
    }, u = {
      number: 0.9,
      unit: "em"
    }, i = {
      number: 0,
      unit: "em"
    }, l = "";
    if (t[0])
      for (var s = ce(t[0], "raw").string, f = s.split(","), m = 0; m < f.length; m++) {
        var b = f[m].split("=");
        if (b.length === 2) {
          var h = b[1].trim();
          switch (b[0].trim()) {
            case "alt":
              l = h;
              break;
            case "width":
              n = en(h);
              break;
            case "height":
              u = en(h);
              break;
            case "totalheight":
              i = en(h);
              break;
            default:
              throw new G("Invalid key: '" + b[0] + "' in \\includegraphics.");
          }
        }
      }
    var d = ce(e[0], "url").url;
    return l === "" && (l = d, l = l.replace(/^.*[\\/]/, ""), l = l.substring(0, l.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: d
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: l,
      width: n,
      height: u,
      totalheight: i,
      src: d
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (a, e) => {
    var t = Te(a.height, e), r = 0;
    a.totalheight.number > 0 && (r = Te(a.totalheight, e) - t);
    var n = 0;
    a.width.number > 0 && (n = Te(a.width, e));
    var u = {
      height: W(t + r)
    };
    n > 0 && (u.width = W(n)), r > 0 && (u.verticalAlign = W(-r));
    var i = new tf(a.src, a.alt, u);
    return i.height = t, i.depth = r, i;
  },
  mathmlBuilder: (a, e) => {
    var t = new U.MathNode("mglyph", []);
    t.setAttribute("alt", a.alt);
    var r = Te(a.height, e), n = 0;
    if (a.totalheight.number > 0 && (n = Te(a.totalheight, e) - r, t.setAttribute("valign", W(-n))), t.setAttribute("height", W(r + n)), a.width.number > 0) {
      var u = Te(a.width, e);
      t.setAttribute("width", W(u));
    }
    return t.setAttribute("src", a.src), t;
  }
});
Y({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = ce(e[0], "size");
    if (t.settings.strict) {
      var u = r[1] === "m", i = n.value.unit === "mu";
      u ? (i || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : i && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: n.value
    };
  },
  htmlBuilder(a, e) {
    return M.makeGlue(a.dimension, e);
  },
  mathmlBuilder(a, e) {
    var t = Te(a.dimension, e);
    return new U.SpaceNode(t);
  }
});
Y({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: r.slice(5),
      body: n
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    a.alignment === "clap" ? (t = M.makeSpan([], [me(a.body, e)]), t = M.makeSpan(["inner"], [t], e)) : t = M.makeSpan(["inner"], [me(a.body, e)]);
    var r = M.makeSpan(["fix"], []), n = M.makeSpan([a.alignment], [t, r], e), u = M.makeSpan(["strut"]);
    return u.style.height = W(n.height + n.depth), n.depth && (u.style.verticalAlign = W(-n.depth)), n.children.unshift(u), n = M.makeSpan(["thinbox"], [n], e), M.makeSpan(["mord", "vbox"], [n], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new U.MathNode("mpadded", [xe(a.body, e)]);
    if (a.alignment !== "rlap") {
      var r = a.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
Y({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    var {
      funcName: t,
      parser: r
    } = a, n = r.mode;
    r.switchMode("math");
    var u = t === "\\(" ? "\\)" : "$", i = r.parseExpression(!1, u);
    return r.expect(u), r.switchMode(n), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: i
    };
  }
});
Y({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    throw new G("Mismatched " + a.funcName);
  }
});
var Ii = (a, e) => {
  switch (e.style.size) {
    case ne.DISPLAY.size:
      return a.display;
    case ne.TEXT.size:
      return a.text;
    case ne.SCRIPT.size:
      return a.script;
    case ne.SCRIPTSCRIPT.size:
      return a.scriptscript;
    default:
      return a.text;
  }
};
Y({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: Me(e[0]),
      text: Me(e[1]),
      script: Me(e[2]),
      scriptscript: Me(e[3])
    };
  },
  htmlBuilder: (a, e) => {
    var t = Ii(a, e), r = Ne(t, e, !1);
    return M.makeFragment(r);
  },
  mathmlBuilder: (a, e) => {
    var t = Ii(a, e);
    return t0(t, e);
  }
});
var Ul = (a, e, t, r, n, u, i) => {
  a = M.makeSpan([], [a]);
  var l = t && re.isCharacterBox(t), s, f;
  if (e) {
    var m = me(e, r.havingStyle(n.sup()), r);
    f = {
      elem: m,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - m.depth)
    };
  }
  if (t) {
    var b = me(t, r.havingStyle(n.sub()), r);
    s = {
      elem: b,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - b.height)
    };
  }
  var h;
  if (f && s) {
    var d = r.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + a.depth + i;
    h = M.makeVList({
      positionType: "bottom",
      positionData: d,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: W(-u)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: f.kern
      }, {
        type: "elem",
        elem: f.elem,
        marginLeft: W(u)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (s) {
    var k = a.height - i;
    h = M.makeVList({
      positionType: "top",
      positionData: k,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: W(-u)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: a
      }]
    }, r);
  } else if (f) {
    var E = a.depth + i;
    h = M.makeVList({
      positionType: "bottom",
      positionData: E,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: f.kern
      }, {
        type: "elem",
        elem: f.elem,
        marginLeft: W(u)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return a;
  var w = [h];
  if (s && u !== 0 && !l) {
    var F = M.makeSpan(["mspace"], [], r);
    F.style.marginRight = W(u), w.unshift(F);
  }
  return M.makeSpan(["mop", "op-limits"], w, r);
}, jl = ["\\smallint"], N0 = (a, e) => {
  var t, r, n = !1, u;
  a.type === "supsub" ? (t = a.sup, r = a.sub, u = ce(a.base, "op"), n = !0) : u = ce(a, "op");
  var i = e.style, l = !1;
  i.size === ne.DISPLAY.size && u.symbol && !re.contains(jl, u.name) && (l = !0);
  var s;
  if (u.symbol) {
    var f = l ? "Size2-Regular" : "Size1-Regular", m = "";
    if ((u.name === "\\oiint" || u.name === "\\oiiint") && (m = u.name.slice(1), u.name = m === "oiint" ? "\\iint" : "\\iiint"), s = M.makeSymbol(u.name, f, "math", e, ["mop", "op-symbol", l ? "large-op" : "small-op"]), m.length > 0) {
      var b = s.italic, h = M.staticSvg(m + "Size" + (l ? "2" : "1"), e);
      s = M.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: 0
        }, {
          type: "elem",
          elem: h,
          shift: l ? 0.08 : 0
        }]
      }, e), u.name = "\\" + m, s.classes.unshift("mop"), s.italic = b;
    }
  } else if (u.body) {
    var d = Ne(u.body, e, !0);
    d.length === 1 && d[0] instanceof ot ? (s = d[0], s.classes[0] = "mop") : s = M.makeSpan(["mop"], d, e);
  } else {
    for (var k = [], E = 1; E < u.name.length; E++)
      k.push(M.mathsym(u.name[E], u.mode, e));
    s = M.makeSpan(["mop"], k, e);
  }
  var w = 0, F = 0;
  return (s instanceof ot || u.name === "\\oiint" || u.name === "\\oiiint") && !u.suppressBaseShift && (w = (s.height - s.depth) / 2 - e.fontMetrics().axisHeight, F = s.italic), n ? Ul(s, t, r, e, i, F, w) : (w && (s.style.position = "relative", s.style.top = W(w)), s);
}, fr = (a, e) => {
  var t;
  if (a.symbol)
    t = new it("mo", [ct(a.name, a.mode)]), re.contains(jl, a.name) && t.setAttribute("largeop", "false");
  else if (a.body)
    t = new it("mo", Qe(a.body, e));
  else {
    t = new it("mi", [new Y0(a.name.slice(1))]);
    var r = new it("mo", [ct("⁡", "text")]);
    a.parentIsSupSub ? t = new it("mrow", [t, r]) : t = bl([t, r]);
  }
  return t;
}, ah = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
Y({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = r;
    return n.length === 1 && (n = ah[n]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: N0,
  mathmlBuilder: fr
});
Y({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: Me(r)
    };
  },
  htmlBuilder: N0,
  mathmlBuilder: fr
});
var nh = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
Y({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: N0,
  mathmlBuilder: fr
});
Y({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: N0,
  mathmlBuilder: fr
});
Y({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = t;
    return r.length === 1 && (r = nh[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: N0,
  mathmlBuilder: fr
});
var Gl = (a, e) => {
  var t, r, n = !1, u;
  a.type === "supsub" ? (t = a.sup, r = a.sub, u = ce(a.base, "operatorname"), n = !0) : u = ce(a, "operatorname");
  var i;
  if (u.body.length > 0) {
    for (var l = u.body.map((b) => {
      var h = b.text;
      return typeof h == "string" ? {
        type: "textord",
        mode: b.mode,
        text: h
      } : b;
    }), s = Ne(l, e.withFont("mathrm"), !0), f = 0; f < s.length; f++) {
      var m = s[f];
      m instanceof ot && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    i = M.makeSpan(["mop"], s, e);
  } else
    i = M.makeSpan(["mop"], [], e);
  return n ? Ul(i, t, r, e, e.style, 0, 0) : i;
}, uh = (a, e) => {
  for (var t = Qe(a.body, e.withFont("mathrm")), r = !0, n = 0; n < t.length; n++) {
    var u = t[n];
    if (!(u instanceof U.SpaceNode)) if (u instanceof U.MathNode)
      switch (u.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var i = u.children[0];
          u.children.length === 1 && i instanceof U.TextNode ? i.text = i.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var l = t.map((m) => m.toText()).join("");
    t = [new U.TextNode(l)];
  }
  var s = new U.MathNode("mi", t);
  s.setAttribute("mathvariant", "normal");
  var f = new U.MathNode("mo", [ct("⁡", "text")]);
  return a.parentIsSupSub ? new U.MathNode("mrow", [s, f]) : U.newDocumentFragment([s, f]);
};
Y({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: Me(n),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Gl,
  mathmlBuilder: uh
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
f0({
  type: "ordgroup",
  htmlBuilder(a, e) {
    return a.semisimple ? M.makeFragment(Ne(a.body, e, !1)) : M.makeSpan(["mord"], Ne(a.body, e, !0), e);
  },
  mathmlBuilder(a, e) {
    return t0(a.body, e, !0);
  }
});
Y({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder(a, e) {
    var t = me(a.body, e.havingCrampedStyle()), r = M.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, u = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: n
      }]
    }, e);
    return M.makeSpan(["mord", "overline"], [u], e);
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mo", [new U.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new U.MathNode("mover", [xe(a.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
Y({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: Me(r)
    };
  },
  htmlBuilder: (a, e) => {
    var t = Ne(a.body, e.withPhantom(), !1);
    return M.makeFragment(t);
  },
  mathmlBuilder: (a, e) => {
    var t = Qe(a.body, e);
    return new U.MathNode("mphantom", t);
  }
});
Y({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = M.makeSpan([], [me(a.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), M.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (a, e) => {
    var t = Qe(Me(a.body), e), r = new U.MathNode("mphantom", t), n = new U.MathNode("mpadded", [r]);
    return n.setAttribute("height", "0px"), n.setAttribute("depth", "0px"), n;
  }
});
Y({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = M.makeSpan(["inner"], [me(a.body, e.withPhantom())]), r = M.makeSpan(["fix"], []);
    return M.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (a, e) => {
    var t = Qe(Me(a.body), e), r = new U.MathNode("mphantom", t), n = new U.MathNode("mpadded", [r]);
    return n.setAttribute("width", "0px"), n;
  }
});
Y({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = ce(e[0], "size").value, n = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: n
    };
  },
  htmlBuilder(a, e) {
    var t = me(a.body, e), r = Te(a.dy, e);
    return M.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mpadded", [xe(a.body, e)]), r = a.dy.number + a.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
Y({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e
    } = a;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
Y({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = t[0], u = ce(e[0], "size"), i = ce(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: n && ce(n, "size").value,
      width: u.value,
      height: i.value
    };
  },
  htmlBuilder(a, e) {
    var t = M.makeSpan(["mord", "rule"], [], e), r = Te(a.width, e), n = Te(a.height, e), u = a.shift ? Te(a.shift, e) : 0;
    return t.style.borderRightWidth = W(r), t.style.borderTopWidth = W(n), t.style.bottom = W(u), t.width = r, t.height = n + u, t.depth = -u, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(a, e) {
    var t = Te(a.width, e), r = Te(a.height, e), n = a.shift ? Te(a.shift, e) : 0, u = e.color && e.getColor() || "black", i = new U.MathNode("mspace");
    i.setAttribute("mathbackground", u), i.setAttribute("width", W(t)), i.setAttribute("height", W(r));
    var l = new U.MathNode("mpadded", [i]);
    return n >= 0 ? l.setAttribute("height", W(n)) : (l.setAttribute("height", W(n)), l.setAttribute("depth", W(-n))), l.setAttribute("voffset", W(n)), l;
  }
});
function Vl(a, e, t) {
  for (var r = Ne(a, e, !1), n = e.sizeMultiplier / t.sizeMultiplier, u = 0; u < r.length; u++) {
    var i = r[u].classes.indexOf("sizing");
    i < 0 ? Array.prototype.push.apply(r[u].classes, e.sizingClasses(t)) : r[u].classes[i + 1] === "reset-size" + e.size && (r[u].classes[i + 1] = "reset-size" + t.size), r[u].height *= n, r[u].depth *= n;
  }
  return M.makeFragment(r);
}
var Ri = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], ih = (a, e) => {
  var t = e.havingSize(a.size);
  return Vl(a.body, t, e);
};
Y({
  type: "sizing",
  names: Ri,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: n
    } = a, u = n.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: n.mode,
      // Figure out what size to use based on the list of functions above
      size: Ri.indexOf(r) + 1,
      body: u
    };
  },
  htmlBuilder: ih,
  mathmlBuilder: (a, e) => {
    var t = e.havingSize(a.size), r = Qe(a.body, t), n = new U.MathNode("mstyle", r);
    return n.setAttribute("mathsize", W(t.sizeMultiplier)), n;
  }
});
Y({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (a, e, t) => {
    var {
      parser: r
    } = a, n = !1, u = !1, i = t[0] && ce(t[0], "ordgroup");
    if (i)
      for (var l = "", s = 0; s < i.body.length; ++s) {
        var f = i.body[s];
        if (l = f.text, l === "t")
          n = !0;
        else if (l === "b")
          u = !0;
        else {
          n = !1, u = !1;
          break;
        }
      }
    else
      n = !0, u = !0;
    var m = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: m,
      smashHeight: n,
      smashDepth: u
    };
  },
  htmlBuilder: (a, e) => {
    var t = M.makeSpan([], [me(a.body, e)]);
    if (!a.smashHeight && !a.smashDepth)
      return t;
    if (a.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (a.smashDepth && (t.depth = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].depth = 0;
    var u = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord"], [u], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new U.MathNode("mpadded", [xe(a.body, e)]);
    return a.smashHeight && t.setAttribute("height", "0px"), a.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
Y({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = t[0], u = e[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: u,
      index: n
    };
  },
  htmlBuilder(a, e) {
    var t = me(a.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = M.wrapFragment(t, e);
    var r = e.fontMetrics(), n = r.defaultRuleThickness, u = n;
    e.style.id < ne.TEXT.id && (u = e.fontMetrics().xHeight);
    var i = n + u / 4, l = t.height + t.depth + i + n, {
      span: s,
      ruleWidth: f,
      advanceWidth: m
    } = Ht.sqrtImage(l, e), b = s.height - f;
    b > t.height + t.depth + i && (i = (i + b - t.height - t.depth) / 2);
    var h = s.height - t.height - i - f;
    t.style.paddingLeft = W(m);
    var d = M.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + h)
      }, {
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: f
      }]
    }, e);
    if (a.index) {
      var k = e.havingStyle(ne.SCRIPTSCRIPT), E = me(a.index, k, e), w = 0.6 * (d.height - d.depth), F = M.makeVList({
        positionType: "shift",
        positionData: -w,
        children: [{
          type: "elem",
          elem: E
        }]
      }, e), x = M.makeSpan(["root"], [F]);
      return M.makeSpan(["mord", "sqrt"], [x, d], e);
    } else
      return M.makeSpan(["mord", "sqrt"], [d], e);
  },
  mathmlBuilder(a, e) {
    var {
      body: t,
      index: r
    } = a;
    return r ? new U.MathNode("mroot", [xe(t, e), xe(r, e)]) : new U.MathNode("msqrt", [xe(t, e)]);
  }
});
var Li = {
  display: ne.DISPLAY,
  text: ne.TEXT,
  script: ne.SCRIPT,
  scriptscript: ne.SCRIPTSCRIPT
};
Y({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: n
    } = a, u = n.parseExpression(!0, t), i = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: n.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: i,
      body: u
    };
  },
  htmlBuilder(a, e) {
    var t = Li[a.style], r = e.havingStyle(t).withFont("");
    return Vl(a.body, r, e);
  },
  mathmlBuilder(a, e) {
    var t = Li[a.style], r = e.havingStyle(t), n = Qe(a.body, r), u = new U.MathNode("mstyle", n), i = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, l = i[a.style];
    return u.setAttribute("scriptlevel", l[0]), u.setAttribute("displaystyle", l[1]), u;
  }
});
var sh = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var n = r.limits && (t.style.size === ne.DISPLAY.size || r.alwaysHandleSupSub);
      return n ? N0 : null;
    } else if (r.type === "operatorname") {
      var u = r.alwaysHandleSupSub && (t.style.size === ne.DISPLAY.size || r.limits);
      return u ? Gl : null;
    } else {
      if (r.type === "accent")
        return re.isCharacterBox(r.base) ? iu : null;
      if (r.type === "horizBrace") {
        var i = !e.sub;
        return i === r.isOver ? Hl : null;
      } else
        return null;
    }
  else return null;
};
f0({
  type: "supsub",
  htmlBuilder(a, e) {
    var t = sh(a, e);
    if (t)
      return t(a, e);
    var {
      base: r,
      sup: n,
      sub: u
    } = a, i = me(r, e), l, s, f = e.fontMetrics(), m = 0, b = 0, h = r && re.isCharacterBox(r);
    if (n) {
      var d = e.havingStyle(e.style.sup());
      l = me(n, d, e), h || (m = i.height - d.fontMetrics().supDrop * d.sizeMultiplier / e.sizeMultiplier);
    }
    if (u) {
      var k = e.havingStyle(e.style.sub());
      s = me(u, k, e), h || (b = i.depth + k.fontMetrics().subDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    var E;
    e.style === ne.DISPLAY ? E = f.sup1 : e.style.cramped ? E = f.sup3 : E = f.sup2;
    var w = e.sizeMultiplier, F = W(0.5 / f.ptPerEm / w), x = null;
    if (s) {
      var D = a.base && a.base.type === "op" && a.base.name && (a.base.name === "\\oiint" || a.base.name === "\\oiiint");
      (i instanceof ot || D) && (x = W(-i.italic));
    }
    var A;
    if (l && s) {
      m = Math.max(m, E, l.depth + 0.25 * f.xHeight), b = Math.max(b, f.sub2);
      var _ = f.defaultRuleThickness, B = 4 * _;
      if (m - l.depth - (s.height - b) < B) {
        b = B - (m - l.depth) + s.height;
        var O = 0.8 * f.xHeight - (m - l.depth);
        O > 0 && (m += O, b -= O);
      }
      var H = [{
        type: "elem",
        elem: s,
        shift: b,
        marginRight: F,
        marginLeft: x
      }, {
        type: "elem",
        elem: l,
        shift: -m,
        marginRight: F
      }];
      A = M.makeVList({
        positionType: "individualShift",
        children: H
      }, e);
    } else if (s) {
      b = Math.max(b, f.sub1, s.height - 0.8 * f.xHeight);
      var R = [{
        type: "elem",
        elem: s,
        marginLeft: x,
        marginRight: F
      }];
      A = M.makeVList({
        positionType: "shift",
        positionData: b,
        children: R
      }, e);
    } else if (l)
      m = Math.max(m, E, l.depth + 0.25 * f.xHeight), A = M.makeVList({
        positionType: "shift",
        positionData: -m,
        children: [{
          type: "elem",
          elem: l,
          marginRight: F
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var L = Sn(i, "right") || "mord";
    return M.makeSpan([L], [i, M.makeSpan(["msupsub"], [A])], e);
  },
  mathmlBuilder(a, e) {
    var t = !1, r, n;
    a.base && a.base.type === "horizBrace" && (n = !!a.sup, n === a.base.isOver && (t = !0, r = a.base.isOver)), a.base && (a.base.type === "op" || a.base.type === "operatorname") && (a.base.parentIsSupSub = !0);
    var u = [xe(a.base, e)];
    a.sub && u.push(xe(a.sub, e)), a.sup && u.push(xe(a.sup, e));
    var i;
    if (t)
      i = r ? "mover" : "munder";
    else if (a.sub)
      if (a.sup) {
        var f = a.base;
        f && f.type === "op" && f.limits && e.style === ne.DISPLAY || f && f.type === "operatorname" && f.alwaysHandleSupSub && (e.style === ne.DISPLAY || f.limits) ? i = "munderover" : i = "msubsup";
      } else {
        var s = a.base;
        s && s.type === "op" && s.limits && (e.style === ne.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === ne.DISPLAY) ? i = "munder" : i = "msub";
      }
    else {
      var l = a.base;
      l && l.type === "op" && l.limits && (e.style === ne.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === ne.DISPLAY) ? i = "mover" : i = "msup";
    }
    return new U.MathNode(i, u);
  }
});
f0({
  type: "atom",
  htmlBuilder(a, e) {
    return M.mathsym(a.text, a.mode, e, ["m" + a.family]);
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mo", [ct(a.text, a.mode)]);
    if (a.family === "bin") {
      var r = nu(a, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else a.family === "punct" ? t.setAttribute("separator", "true") : (a.family === "open" || a.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var $l = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
f0({
  type: "mathord",
  htmlBuilder(a, e) {
    return M.makeOrd(a, e, "mathord");
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mi", [ct(a.text, a.mode, e)]), r = nu(a, e) || "italic";
    return r !== $l[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
f0({
  type: "textord",
  htmlBuilder(a, e) {
    return M.makeOrd(a, e, "textord");
  },
  mathmlBuilder(a, e) {
    var t = ct(a.text, a.mode, e), r = nu(a, e) || "normal", n;
    return a.mode === "text" ? n = new U.MathNode("mtext", [t]) : /[0-9]/.test(a.text) ? n = new U.MathNode("mn", [t]) : a.text === "\\prime" ? n = new U.MathNode("mo", [t]) : n = new U.MathNode("mi", [t]), r !== $l[n.type] && n.setAttribute("mathvariant", r), n;
  }
});
var tn = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, rn = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
f0({
  type: "spacing",
  htmlBuilder(a, e) {
    if (rn.hasOwnProperty(a.text)) {
      var t = rn[a.text].className || "";
      if (a.mode === "text") {
        var r = M.makeOrd(a, e, "textord");
        return r.classes.push(t), r;
      } else
        return M.makeSpan(["mspace", t], [M.mathsym(a.text, a.mode, e)], e);
    } else {
      if (tn.hasOwnProperty(a.text))
        return M.makeSpan(["mspace", tn[a.text]], [], e);
      throw new G('Unknown type of space "' + a.text + '"');
    }
  },
  mathmlBuilder(a, e) {
    var t;
    if (rn.hasOwnProperty(a.text))
      t = new U.MathNode("mtext", [new U.TextNode(" ")]);
    else {
      if (tn.hasOwnProperty(a.text))
        return new U.MathNode("mspace");
      throw new G('Unknown type of space "' + a.text + '"');
    }
    return t;
  }
});
var zi = () => {
  var a = new U.MathNode("mtd", []);
  return a.setAttribute("width", "50%"), a;
};
f0({
  type: "tag",
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mtable", [new U.MathNode("mtr", [zi(), new U.MathNode("mtd", [t0(a.body, e)]), zi(), new U.MathNode("mtd", [t0(a.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Pi = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, qi = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, lh = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Hi = (a, e) => {
  var t = a.font;
  if (t) {
    if (Pi[t])
      return e.withTextFontFamily(Pi[t]);
    if (qi[t])
      return e.withTextFontWeight(qi[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(lh[t]);
};
Y({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: Me(n),
      font: r
    };
  },
  htmlBuilder(a, e) {
    var t = Hi(a, e), r = Ne(a.body, t, !0);
    return M.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(a, e) {
    var t = Hi(a, e);
    return t0(a.body, t);
  }
});
Y({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = me(a.body, e), r = M.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, u = M.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return M.makeSpan(["mord", "underline"], [u], e);
  },
  mathmlBuilder(a, e) {
    var t = new U.MathNode("mo", [new U.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new U.MathNode("munder", [xe(a.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
Y({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = me(a.body, e), r = e.fontMetrics().axisHeight, n = 0.5 * (t.height - r - (t.depth + r));
    return M.makeVList({
      positionType: "shift",
      positionData: n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    return new U.MathNode("mpadded", [xe(a.body, e)], ["vcenter"]);
  }
});
Y({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    throw new G("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(a, e) {
    for (var t = Ui(a), r = [], n = e.havingStyle(e.style.text()), u = 0; u < t.length; u++) {
      var i = t[u];
      i === "~" && (i = "\\textasciitilde"), r.push(M.makeSymbol(i, "Typewriter-Regular", a.mode, n, ["mord", "texttt"]));
    }
    return M.makeSpan(["mord", "text"].concat(n.sizingClasses(e)), M.tryCombineChars(r), n);
  },
  mathmlBuilder(a, e) {
    var t = new U.TextNode(Ui(a)), r = new U.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var Ui = (a) => a.body.replace(/ /g, a.star ? "␣" : " "), Qt = pl, Wl = `[ \r
	]`, oh = "\\\\[a-zA-Z@]+", ch = "\\\\[^\uD800-\uDFFF]", fh = "(" + oh + ")" + Wl + "*", hh = `\\\\(
|[ \r	]+
?)[ \r	]*`, Cn = "[̀-ͯ]", dh = new RegExp(Cn + "+$"), mh = "(" + Wl + "+)|" + // whitespace
(hh + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Cn + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Cn + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + fh) + // \macroName + spaces
("|" + ch + ")");
class ji {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(mh, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new lt("EOF", new Je(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new G("Unexpected character: '" + e[t] + "'", new lt(e[t], new Je(this, t, t + 1)));
    var n = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var u = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return u === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = u + 1, this.lex();
    }
    return new lt(n, new Je(this, t, this.tokenRegex.lastIndex));
  }
}
class ph {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new G("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, r) {
    if (r === void 0 && (r = !1), r) {
      for (var n = 0; n < this.undefStack.length; n++)
        delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var u = this.undefStack[this.undefStack.length - 1];
      u && !u.hasOwnProperty(e) && (u[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var gh = Rl;
g("\\noexpand", function(a) {
  var e = a.popToken();
  return a.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
g("\\expandafter", function(a) {
  var e = a.popToken();
  return a.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
g("\\@firstoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
g("\\@secondoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
g("\\@ifnextchar", function(a) {
  var e = a.consumeArgs(3);
  a.consumeSpaces();
  var t = a.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
g("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
g("\\TextOrMath", function(a) {
  var e = a.consumeArgs(2);
  return a.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var Gi = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
g("\\char", function(a) {
  var e = a.popToken(), t, r = "";
  if (e.text === "'")
    t = 8, e = a.popToken();
  else if (e.text === '"')
    t = 16, e = a.popToken();
  else if (e.text === "`")
    if (e = a.popToken(), e.text[0] === "\\")
      r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new G("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = Gi[e.text], r == null || r >= t)
      throw new G("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = Gi[a.future().text]) != null && n < t; )
      r *= t, r += n, a.popToken();
  }
  return "\\@char{" + r + "}";
});
var mu = (a, e, t) => {
  var r = a.consumeArg().tokens;
  if (r.length !== 1)
    throw new G("\\newcommand's first argument must be a macro name");
  var n = r[0].text, u = a.isDefined(n);
  if (u && !e)
    throw new G("\\newcommand{" + n + "} attempting to redefine " + (n + "; use \\renewcommand"));
  if (!u && !t)
    throw new G("\\renewcommand{" + n + "} when command " + n + " does not yet exist; use \\newcommand");
  var i = 0;
  if (r = a.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var l = "", s = a.expandNextToken(); s.text !== "]" && s.text !== "EOF"; )
      l += s.text, s = a.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new G("Invalid number of arguments: " + l);
    i = parseInt(l), r = a.consumeArg().tokens;
  }
  return a.macros.set(n, {
    tokens: r,
    numArgs: i
  }), "";
};
g("\\newcommand", (a) => mu(a, !1, !0));
g("\\renewcommand", (a) => mu(a, !0, !1));
g("\\providecommand", (a) => mu(a, !0, !0));
g("\\message", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
g("\\errmessage", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
g("\\show", (a) => {
  var e = a.popToken(), t = e.text;
  return console.log(e, a.macros.get(t), Qt[t], Ae.math[t], Ae.text[t]), "";
});
g("\\bgroup", "{");
g("\\egroup", "}");
g("~", "\\nobreakspace");
g("\\lq", "`");
g("\\rq", "'");
g("\\aa", "\\r a");
g("\\AA", "\\r A");
g("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
g("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
g("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
g("ℬ", "\\mathscr{B}");
g("ℰ", "\\mathscr{E}");
g("ℱ", "\\mathscr{F}");
g("ℋ", "\\mathscr{H}");
g("ℐ", "\\mathscr{I}");
g("ℒ", "\\mathscr{L}");
g("ℳ", "\\mathscr{M}");
g("ℛ", "\\mathscr{R}");
g("ℭ", "\\mathfrak{C}");
g("ℌ", "\\mathfrak{H}");
g("ℨ", "\\mathfrak{Z}");
g("\\Bbbk", "\\Bbb{k}");
g("·", "\\cdotp");
g("\\llap", "\\mathllap{\\textrm{#1}}");
g("\\rlap", "\\mathrlap{\\textrm{#1}}");
g("\\clap", "\\mathclap{\\textrm{#1}}");
g("\\mathstrut", "\\vphantom{(}");
g("\\underbar", "\\underline{\\text{#1}}");
g("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
g("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
g("\\ne", "\\neq");
g("≠", "\\neq");
g("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
g("∉", "\\notin");
g("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
g("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
g("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
g("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
g("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
g("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
g("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
g("⟂", "\\perp");
g("‼", "\\mathclose{!\\mkern-0.8mu!}");
g("∌", "\\notni");
g("⌜", "\\ulcorner");
g("⌝", "\\urcorner");
g("⌞", "\\llcorner");
g("⌟", "\\lrcorner");
g("©", "\\copyright");
g("®", "\\textregistered");
g("️", "\\textregistered");
g("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
g("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
g("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
g("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
g("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
g("⋮", "\\vdots");
g("\\varGamma", "\\mathit{\\Gamma}");
g("\\varDelta", "\\mathit{\\Delta}");
g("\\varTheta", "\\mathit{\\Theta}");
g("\\varLambda", "\\mathit{\\Lambda}");
g("\\varXi", "\\mathit{\\Xi}");
g("\\varPi", "\\mathit{\\Pi}");
g("\\varSigma", "\\mathit{\\Sigma}");
g("\\varUpsilon", "\\mathit{\\Upsilon}");
g("\\varPhi", "\\mathit{\\Phi}");
g("\\varPsi", "\\mathit{\\Psi}");
g("\\varOmega", "\\mathit{\\Omega}");
g("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
g("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
g("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
g("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
g("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
g("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var Vi = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
g("\\dots", function(a) {
  var e = "\\dotso", t = a.expandAfterFuture().text;
  return t in Vi ? e = Vi[t] : (t.slice(0, 4) === "\\not" || t in Ae.math && re.contains(["bin", "rel"], Ae.math[t].group)) && (e = "\\dotsb"), e;
});
var pu = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
g("\\dotso", function(a) {
  var e = a.future().text;
  return e in pu ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(a) {
  var e = a.future().text;
  return e in pu && e !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(a) {
  var e = a.future().text;
  return e in pu ? "\\@cdots\\," : "\\@cdots";
});
g("\\dotsb", "\\cdots");
g("\\dotsm", "\\cdots");
g("\\dotsi", "\\!\\cdots");
g("\\dotsx", "\\ldots\\,");
g("\\DOTSI", "\\relax");
g("\\DOTSB", "\\relax");
g("\\DOTSX", "\\relax");
g("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
g("\\,", "\\tmspace+{3mu}{.1667em}");
g("\\thinspace", "\\,");
g("\\>", "\\mskip{4mu}");
g("\\:", "\\tmspace+{4mu}{.2222em}");
g("\\medspace", "\\:");
g("\\;", "\\tmspace+{5mu}{.2777em}");
g("\\thickspace", "\\;");
g("\\!", "\\tmspace-{3mu}{.1667em}");
g("\\negthinspace", "\\!");
g("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
g("\\negthickspace", "\\tmspace-{5mu}{.277em}");
g("\\enspace", "\\kern.5em ");
g("\\enskip", "\\hskip.5em\\relax");
g("\\quad", "\\hskip1em\\relax");
g("\\qquad", "\\hskip2em\\relax");
g("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
g("\\tag@paren", "\\tag@literal{({#1})}");
g("\\tag@literal", (a) => {
  if (a.macros.get("\\df@tag"))
    throw new G("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
g("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
g("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
g("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
g("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
g("\\newline", "\\\\\\relax");
g("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Xl = W(St["Main-Regular"][84][1] - 0.7 * St["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Xl + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Xl + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
g("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
g("\\@hspace", "\\hskip #1\\relax");
g("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
g("\\ordinarycolon", ":");
g("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
g("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
g("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
g("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
g("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
g("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
g("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
g("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
g("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
g("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
g("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
g("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
g("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
g("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
g("∷", "\\dblcolon");
g("∹", "\\eqcolon");
g("≔", "\\coloneqq");
g("≕", "\\eqqcolon");
g("⩴", "\\Coloneqq");
g("\\ratio", "\\vcentcolon");
g("\\coloncolon", "\\dblcolon");
g("\\colonequals", "\\coloneqq");
g("\\coloncolonequals", "\\Coloneqq");
g("\\equalscolon", "\\eqqcolon");
g("\\equalscoloncolon", "\\Eqqcolon");
g("\\colonminus", "\\coloneq");
g("\\coloncolonminus", "\\Coloneq");
g("\\minuscolon", "\\eqcolon");
g("\\minuscoloncolon", "\\Eqcolon");
g("\\coloncolonapprox", "\\Colonapprox");
g("\\coloncolonsim", "\\Colonsim");
g("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
g("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
g("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
g("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
g("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
g("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
g("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
g("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
g("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
g("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
g("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
g("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
g("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
g("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
g("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
g("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
g("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
g("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
g("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
g("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
g("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
g("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
g("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
g("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
g("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
g("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
g("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
g("\\imath", "\\html@mathml{\\@imath}{ı}");
g("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
g("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
g("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
g("⟦", "\\llbracket");
g("⟧", "\\rrbracket");
g("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
g("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
g("⦃", "\\lBrace");
g("⦄", "\\rBrace");
g("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
g("⦵", "\\minuso");
g("\\darr", "\\downarrow");
g("\\dArr", "\\Downarrow");
g("\\Darr", "\\Downarrow");
g("\\lang", "\\langle");
g("\\rang", "\\rangle");
g("\\uarr", "\\uparrow");
g("\\uArr", "\\Uparrow");
g("\\Uarr", "\\Uparrow");
g("\\N", "\\mathbb{N}");
g("\\R", "\\mathbb{R}");
g("\\Z", "\\mathbb{Z}");
g("\\alef", "\\aleph");
g("\\alefsym", "\\aleph");
g("\\Alpha", "\\mathrm{A}");
g("\\Beta", "\\mathrm{B}");
g("\\bull", "\\bullet");
g("\\Chi", "\\mathrm{X}");
g("\\clubs", "\\clubsuit");
g("\\cnums", "\\mathbb{C}");
g("\\Complex", "\\mathbb{C}");
g("\\Dagger", "\\ddagger");
g("\\diamonds", "\\diamondsuit");
g("\\empty", "\\emptyset");
g("\\Epsilon", "\\mathrm{E}");
g("\\Eta", "\\mathrm{H}");
g("\\exist", "\\exists");
g("\\harr", "\\leftrightarrow");
g("\\hArr", "\\Leftrightarrow");
g("\\Harr", "\\Leftrightarrow");
g("\\hearts", "\\heartsuit");
g("\\image", "\\Im");
g("\\infin", "\\infty");
g("\\Iota", "\\mathrm{I}");
g("\\isin", "\\in");
g("\\Kappa", "\\mathrm{K}");
g("\\larr", "\\leftarrow");
g("\\lArr", "\\Leftarrow");
g("\\Larr", "\\Leftarrow");
g("\\lrarr", "\\leftrightarrow");
g("\\lrArr", "\\Leftrightarrow");
g("\\Lrarr", "\\Leftrightarrow");
g("\\Mu", "\\mathrm{M}");
g("\\natnums", "\\mathbb{N}");
g("\\Nu", "\\mathrm{N}");
g("\\Omicron", "\\mathrm{O}");
g("\\plusmn", "\\pm");
g("\\rarr", "\\rightarrow");
g("\\rArr", "\\Rightarrow");
g("\\Rarr", "\\Rightarrow");
g("\\real", "\\Re");
g("\\reals", "\\mathbb{R}");
g("\\Reals", "\\mathbb{R}");
g("\\Rho", "\\mathrm{P}");
g("\\sdot", "\\cdot");
g("\\sect", "\\S");
g("\\spades", "\\spadesuit");
g("\\sub", "\\subset");
g("\\sube", "\\subseteq");
g("\\supe", "\\supseteq");
g("\\Tau", "\\mathrm{T}");
g("\\thetasym", "\\vartheta");
g("\\weierp", "\\wp");
g("\\Zeta", "\\mathrm{Z}");
g("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
g("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
g("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
g("\\bra", "\\mathinner{\\langle{#1}|}");
g("\\ket", "\\mathinner{|{#1}\\rangle}");
g("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
g("\\Bra", "\\left\\langle#1\\right|");
g("\\Ket", "\\left|#1\\right\\rangle");
var Yl = (a) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, n = e.consumeArg().tokens, u = e.consumeArg().tokens, i = e.macros.get("|"), l = e.macros.get("\\|");
  e.macros.beginGroup();
  var s = (b) => (h) => {
    a && (h.macros.set("|", i), n.length && h.macros.set("\\|", l));
    var d = b;
    if (!b && n.length) {
      var k = h.future();
      k.text === "|" && (h.popToken(), d = !0);
    }
    return {
      tokens: d ? n : r,
      numArgs: 0
    };
  };
  e.macros.set("|", s(!1)), n.length && e.macros.set("\\|", s(!0));
  var f = e.consumeArg().tokens, m = e.expandTokens([
    ...u,
    ...f,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: m.reverse(),
    numArgs: 0
  };
};
g("\\bra@ket", Yl(!1));
g("\\bra@set", Yl(!0));
g("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
g("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
g("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
g("\\angln", "{\\angl n}");
g("\\blue", "\\textcolor{##6495ed}{#1}");
g("\\orange", "\\textcolor{##ffa500}{#1}");
g("\\pink", "\\textcolor{##ff00af}{#1}");
g("\\red", "\\textcolor{##df0030}{#1}");
g("\\green", "\\textcolor{##28ae7b}{#1}");
g("\\gray", "\\textcolor{gray}{#1}");
g("\\purple", "\\textcolor{##9d38bd}{#1}");
g("\\blueA", "\\textcolor{##ccfaff}{#1}");
g("\\blueB", "\\textcolor{##80f6ff}{#1}");
g("\\blueC", "\\textcolor{##63d9ea}{#1}");
g("\\blueD", "\\textcolor{##11accd}{#1}");
g("\\blueE", "\\textcolor{##0c7f99}{#1}");
g("\\tealA", "\\textcolor{##94fff5}{#1}");
g("\\tealB", "\\textcolor{##26edd5}{#1}");
g("\\tealC", "\\textcolor{##01d1c1}{#1}");
g("\\tealD", "\\textcolor{##01a995}{#1}");
g("\\tealE", "\\textcolor{##208170}{#1}");
g("\\greenA", "\\textcolor{##b6ffb0}{#1}");
g("\\greenB", "\\textcolor{##8af281}{#1}");
g("\\greenC", "\\textcolor{##74cf70}{#1}");
g("\\greenD", "\\textcolor{##1fab54}{#1}");
g("\\greenE", "\\textcolor{##0d923f}{#1}");
g("\\goldA", "\\textcolor{##ffd0a9}{#1}");
g("\\goldB", "\\textcolor{##ffbb71}{#1}");
g("\\goldC", "\\textcolor{##ff9c39}{#1}");
g("\\goldD", "\\textcolor{##e07d10}{#1}");
g("\\goldE", "\\textcolor{##a75a05}{#1}");
g("\\redA", "\\textcolor{##fca9a9}{#1}");
g("\\redB", "\\textcolor{##ff8482}{#1}");
g("\\redC", "\\textcolor{##f9685d}{#1}");
g("\\redD", "\\textcolor{##e84d39}{#1}");
g("\\redE", "\\textcolor{##bc2612}{#1}");
g("\\maroonA", "\\textcolor{##ffbde0}{#1}");
g("\\maroonB", "\\textcolor{##ff92c6}{#1}");
g("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
g("\\maroonD", "\\textcolor{##ca337c}{#1}");
g("\\maroonE", "\\textcolor{##9e034e}{#1}");
g("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
g("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
g("\\purpleC", "\\textcolor{##aa87ff}{#1}");
g("\\purpleD", "\\textcolor{##7854ab}{#1}");
g("\\purpleE", "\\textcolor{##543b78}{#1}");
g("\\mintA", "\\textcolor{##f5f9e8}{#1}");
g("\\mintB", "\\textcolor{##edf2df}{#1}");
g("\\mintC", "\\textcolor{##e0e5cc}{#1}");
g("\\grayA", "\\textcolor{##f6f7f7}{#1}");
g("\\grayB", "\\textcolor{##f0f1f2}{#1}");
g("\\grayC", "\\textcolor{##e3e5e6}{#1}");
g("\\grayD", "\\textcolor{##d6d8da}{#1}");
g("\\grayE", "\\textcolor{##babec2}{#1}");
g("\\grayF", "\\textcolor{##888d93}{#1}");
g("\\grayG", "\\textcolor{##626569}{#1}");
g("\\grayH", "\\textcolor{##3b3e40}{#1}");
g("\\grayI", "\\textcolor{##21242c}{#1}");
g("\\kaBlue", "\\textcolor{##314453}{#1}");
g("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Zl = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class bh {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new ph(gh, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new ji(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, r, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: n,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: n,
        start: t,
        end: r
      } = this.consumeArg());
    return this.pushToken(new lt("EOF", r.loc)), this.pushTokens(n), t.range(r, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], r = e && e.length > 0;
    r || this.consumeSpaces();
    var n = this.future(), u, i = 0, l = 0;
    do {
      if (u = this.popToken(), t.push(u), u.text === "{")
        ++i;
      else if (u.text === "}") {
        if (--i, i === -1)
          throw new G("Extra }", u);
      } else if (u.text === "EOF")
        throw new G("Unexpected end of input in a macro argument, expected '" + (e && r ? e[l] : "}") + "'", u);
      if (e && r)
        if ((i === 0 || i === 1 && e[l] === "{") && u.text === e[l]) {
          if (++l, l === e.length) {
            t.splice(-l, l);
            break;
          }
        } else
          l = 0;
    } while (i !== 0 || r);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: n,
      end: u
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new G("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], n = 0; n < r.length; n++) {
        var u = this.popToken();
        if (r[n] !== u.text)
          throw new G("Use of the macro doesn't match its definition", u);
      }
    }
    for (var i = [], l = 0; l < e; l++)
      i.push(this.consumeArg(t && t[l + 1]).tokens);
    return i;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new G("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), r = t.text, n = t.noexpand ? null : this._getExpansion(r);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && r[0] === "\\" && !this.isDefined(r))
        throw new G("Undefined control sequence: " + r);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var u = n.tokens, i = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      u = u.slice();
      for (var l = u.length - 1; l >= 0; --l) {
        var s = u[l];
        if (s.text === "#") {
          if (l === 0)
            throw new G("Incomplete placeholder at end of macro body", s);
          if (s = u[--l], s.text === "#")
            u.splice(l + 1, 1);
          else if (/^[1-9]$/.test(s.text))
            u.splice(l, 2, ...i[+s.text - 1]);
          else
            throw new G("Not a valid argument number", s);
        }
      }
    }
    return this.pushTokens(u), u.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new lt(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], r = this.stack.length;
    for (this.pushTokens(e); this.stack.length > r; )
      if (this.expandOnce(!0) === !1) {
        var n = this.stack.pop();
        n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(n);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var r = this.lexer.catcodes[e];
      if (r != null && r !== 13)
        return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var u = 0;
      if (n.indexOf("#") !== -1)
        for (var i = n.replace(/##/g, ""); i.indexOf("#" + (u + 1)) !== -1; )
          ++u;
      for (var l = new ji(n, this.settings), s = [], f = l.lex(); f.text !== "EOF"; )
        s.push(f), f = l.lex();
      s.reverse();
      var m = {
        tokens: s,
        numArgs: u
      };
      return m;
    }
    return n;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || Qt.hasOwnProperty(e) || Ae.math.hasOwnProperty(e) || Ae.text.hasOwnProperty(e) || Zl.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Qt.hasOwnProperty(e) && !Qt[e].primitive;
  }
}
var $i = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Mr = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), an = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, Wi = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
let Ql = class Kl {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new bh(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new G("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new lt("}")), this.gullet.pushTokens(e);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (Kl.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && Qt[n.text] && Qt[n.text].infix)
        break;
      var u = this.parseAtom(t);
      if (u) {
        if (u.type === "internal")
          continue;
      } else break;
      r.push(u);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, r, n = 0; n < e.length; n++)
      if (e[n].type === "infix") {
        if (t !== -1)
          throw new G("only one infix operator per group", e[n].token);
        t = n, r = e[n].replaceWith;
      }
    if (t !== -1 && r) {
      var u, i, l = e.slice(0, t), s = e.slice(t + 1);
      l.length === 1 && l[0].type === "ordgroup" ? u = l[0] : u = {
        type: "ordgroup",
        mode: this.mode,
        body: l
      }, s.length === 1 && s[0].type === "ordgroup" ? i = s[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      };
      var f;
      return r === "\\\\abovefrac" ? f = this.callFunction(r, [u, e[t], i], []) : f = this.callFunction(r, [u, i], []), [f];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), r = t.text;
    this.consume(), this.consumeSpaces();
    var n = this.parseGroup(e);
    if (!n)
      throw new G("Expected group after '" + r + "'", t);
    return n;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
    var n = {
      type: "text",
      mode: this.mode,
      body: t
    }, u = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [n]
    };
    return u;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var r, n; ; ) {
      this.consumeSpaces();
      var u = this.fetch();
      if (u.text === "\\limits" || u.text === "\\nolimits") {
        if (t && t.type === "op") {
          var i = u.text === "\\limits";
          t.limits = i, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = u.text === "\\limits");
        else
          throw new G("Limit controls must follow a math operator", u);
        this.consume();
      } else if (u.text === "^") {
        if (r)
          throw new G("Double superscript", u);
        r = this.handleSupSubscript("superscript");
      } else if (u.text === "_") {
        if (n)
          throw new G("Double subscript", u);
        n = this.handleSupSubscript("subscript");
      } else if (u.text === "'") {
        if (r)
          throw new G("Double superscript", u);
        var l = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, s = [l];
        for (this.consume(); this.fetch().text === "'"; )
          s.push(l), this.consume();
        this.fetch().text === "^" && s.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: s
        };
      } else if (Mr[u.text]) {
        var f = $i.test(u.text), m = [];
        for (m.push(new lt(Mr[u.text])), this.consume(); ; ) {
          var b = this.fetch().text;
          if (!Mr[b] || $i.test(b) !== f)
            break;
          m.unshift(new lt(Mr[b])), this.consume();
        }
        var h = this.subparse(m);
        f ? n = {
          type: "ordgroup",
          mode: "math",
          body: h
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: h
        };
      } else
        break;
    }
    return r || n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: r,
      sub: n
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var r = this.fetch(), n = r.text, u = Qt[n];
    if (!u)
      return null;
    if (this.consume(), t && t !== "atom" && !u.allowedInArgument)
      throw new G("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !u.allowedInText)
      throw new G("Can't use function '" + n + "' in text mode", r);
    if (this.mode === "math" && u.allowedInMath === !1)
      throw new G("Can't use function '" + n + "' in math mode", r);
    var {
      args: i,
      optArgs: l
    } = this.parseArguments(n, u);
    return this.callFunction(n, i, l, r, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, r, n, u) {
    var i = {
      funcName: e,
      parser: this,
      token: n,
      breakOnTokenText: u
    }, l = Qt[e];
    if (l && l.handler)
      return l.handler(i, t, r);
    throw new G("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var r = t.numArgs + t.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var n = [], u = [], i = 0; i < r; i++) {
      var l = t.argTypes && t.argTypes[i], s = i < t.numOptionalArgs;
      (t.primitive && l == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && i === 1 && u[0] == null) && (l = "primitive");
      var f = this.parseGroupOfType("argument to '" + e + "'", l, s);
      if (s)
        u.push(f);
      else if (f != null)
        n.push(f);
      else
        throw new G("Null argument, please report this as a bug");
    }
    return {
      args: n,
      optArgs: u
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, r) {
    switch (t) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, t);
      case "hbox": {
        var n = this.parseArgumentGroup(r, "text");
        return n != null ? {
          type: "styling",
          mode: n.mode,
          body: [n],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var u = this.parseStringGroup("raw", r);
        return u != null ? {
          type: "raw",
          mode: "text",
          string: u.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new G("A primitive argument cannot be optional");
        var i = this.parseGroup(e);
        if (i == null)
          throw new G("Expected group as " + e, this.fetch());
        return i;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new G("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    for (var n = "", u; (u = this.fetch()).text !== "EOF"; )
      n += u.text, this.consume();
    return this.consume(), r.text = n, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var r = this.fetch(), n = r, u = "", i; (i = this.fetch()).text !== "EOF" && e.test(u + i.text); )
      n = i, u += n.text, this.consume();
    if (u === "")
      throw new G("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(n, u);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!r)
      throw new G("Invalid color: '" + t.text + "'", t);
    var n = r[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {
      type: "color-token",
      mode: this.mode,
      color: n
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, r = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", r = !0);
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n)
      throw new G("Invalid size: '" + t.text + "'", t);
    var u = {
      number: +(n[1] + n[2]),
      // sign + magnitude, cast to number
      unit: n[3]
    };
    if (!il(u))
      throw new G("Invalid unit: '" + u.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: u,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var u = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var i = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: u
    };
    return t && this.switchMode(n), i;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var r = this.fetch(), n = r.text, u;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var i = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var l = this.parseExpression(!1, i), s = this.fetch();
      this.expect(i), this.gullet.endGroup(), u = {
        type: "ordgroup",
        mode: this.mode,
        loc: Je.range(r, s),
        body: l,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: n === "\\begingroup" || void 0
      };
    } else if (u = this.parseFunction(t, e) || this.parseSymbol(), u == null && n[0] === "\\" && !Zl.hasOwnProperty(n)) {
      if (this.settings.throwOnError)
        throw new G("Undefined control sequence: " + n, r);
      u = this.formatUnsupportedCmd(n), this.consume();
    }
    return u;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, r = 0; r < t; ++r) {
      var n = e[r], u = n.text;
      u === "-" && e[r + 1].text === "-" && (r + 1 < t && e[r + 2].text === "-" ? (e.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: Je.range(n, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Je.range(n, e[r + 1]),
        text: "--"
      }), t -= 1)), (u === "'" || u === "`") && e[r + 1].text === u && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Je.range(n, e[r + 1]),
        text: u + u
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var r = t.slice(5), n = r.charAt(0) === "*";
      if (n && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new G(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: n
      };
    }
    Wi.hasOwnProperty(t[0]) && !Ae[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Wi[t[0]] + t.slice(1));
    var u = dh.exec(t);
    u && (t = t.substring(0, u.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var i;
    if (Ae[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Dn.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var l = Ae[this.mode][t].group, s = Je.range(e), f;
      if (nf.hasOwnProperty(l)) {
        var m = l;
        f = {
          type: "atom",
          mode: this.mode,
          family: m,
          loc: s,
          text: t
        };
      } else
        f = {
          type: l,
          mode: this.mode,
          loc: s,
          text: t
        };
      i = f;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (ul(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), i = {
        type: "textord",
        mode: "text",
        loc: Je.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), u)
      for (var b = 0; b < u[0].length; b++) {
        var h = u[0][b];
        if (!an[h])
          throw new G("Unknown accent ' " + h + "'", e);
        var d = an[h][this.mode] || an[h].text;
        if (!d)
          throw new G("Accent " + h + " unsupported in " + this.mode + " mode", e);
        i = {
          type: "accent",
          mode: this.mode,
          loc: Je.range(e),
          label: d,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: i
        };
      }
    return i;
  }
};
Ql.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var gu = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new Ql(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var n = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new G("\\tag works only in display equations");
    n = [{
      type: "tag",
      mode: "text",
      body: n,
      tag: r.subparse([new lt("\\df@tag")])
    }];
  }
  return n;
}, Jl = function(e, t, r) {
  t.textContent = "";
  var n = bu(e, r).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Jl = function() {
  throw new G("KaTeX doesn't work in quirks mode.");
});
var vh = function(e, t) {
  var r = bu(e, t).toMarkup();
  return r;
}, yh = function(e, t) {
  var r = new Kn(t);
  return gu(e, r);
}, eo = function(e, t, r) {
  if (r.throwOnError || !(e instanceof G))
    throw e;
  var n = M.makeSpan(["katex-error"], [new ot(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + r.errorColor), n;
}, bu = function(e, t) {
  var r = new Kn(t);
  try {
    var n = gu(e, r);
    return Cf(n, e, r);
  } catch (u) {
    return eo(u, e, r);
  }
}, xh = function(e, t) {
  var r = new Kn(t);
  try {
    var n = gu(e, r);
    return Ff(n, e, r);
  } catch (u) {
    return eo(u, e, r);
  }
}, Xi = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Jl,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: vh,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: G,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: Xr,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: yh,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: bu,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: xh,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Qc,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: o,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: Y,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: g,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: cr,
    Anchor: tu,
    SymbolNode: ot,
    SvgNode: Ut,
    PathNode: e0,
    LineNode: An
  }
}, wh = function(e, t, r) {
  for (var n = r, u = 0, i = e.length; n < t.length; ) {
    var l = t[n];
    if (u <= 0 && t.slice(n, n + i) === e)
      return n;
    l === "\\" ? n++ : l === "{" ? u++ : l === "}" && u--, n++;
  }
  return -1;
}, Ah = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, Dh = /^\\begin{/, Sh = function(e, t) {
  for (var r, n = [], u = new RegExp("(" + t.map((f) => Ah(f.left)).join("|") + ")"); r = e.search(u), r !== -1; ) {
    r > 0 && (n.push({
      type: "text",
      data: e.slice(0, r)
    }), e = e.slice(r));
    var i = t.findIndex((f) => e.startsWith(f.left));
    if (r = wh(t[i].right, e, t[i].left.length), r === -1)
      break;
    var l = e.slice(0, r + t[i].right.length), s = Dh.test(l) ? l : e.slice(t[i].left.length, r);
    n.push({
      type: "math",
      data: s,
      rawData: l,
      display: t[i].display
    }), e = e.slice(r + t[i].right.length);
  }
  return e !== "" && n.push({
    type: "text",
    data: e
  }), n;
}, kh = function(e, t) {
  var r = Sh(e, t.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var n = document.createDocumentFragment(), u = 0; u < r.length; u++)
    if (r[u].type === "text")
      n.appendChild(document.createTextNode(r[u].data));
    else {
      var i = document.createElement("span"), l = r[u].data;
      t.displayMode = r[u].display;
      try {
        t.preProcess && (l = t.preProcess(l)), Xi.render(l, i, t);
      } catch (s) {
        if (!(s instanceof Xi.ParseError))
          throw s;
        t.errorCallback("KaTeX auto-render: Failed to parse `" + r[u].data + "` with ", s), n.appendChild(document.createTextNode(r[u].rawData));
        continue;
      }
      n.appendChild(i);
    }
  return n;
}, Eh = function a(e, t) {
  for (var r = 0; r < e.childNodes.length; r++) {
    var n = e.childNodes[r];
    if (n.nodeType === 3) {
      for (var u = n.textContent, i = n.nextSibling, l = 0; i && i.nodeType === Node.TEXT_NODE; )
        u += i.textContent, i = i.nextSibling, l++;
      var s = kh(u, t);
      if (s) {
        for (var f = 0; f < l; f++)
          n.nextSibling.remove();
        r += s.childNodes.length - 1, e.replaceChild(s, n);
      } else
        r += l;
    } else n.nodeType === 1 && function() {
      var m = " " + n.className + " ", b = t.ignoredTags.indexOf(n.nodeName.toLowerCase()) === -1 && t.ignoredClasses.every((h) => m.indexOf(" " + h + " ") === -1);
      b && a(n, t);
    }();
  }
}, Th = function(e, t) {
  if (!e)
    throw new Error("No element provided to render");
  var r = {};
  for (var n in t)
    t.hasOwnProperty(n) && (r[n] = t[n]);
  r.delimiters = r.delimiters || [
    {
      left: "$$",
      right: "$$",
      display: !0
    },
    {
      left: "\\(",
      right: "\\)",
      display: !1
    },
    // LaTeX uses $…$, but it ruins the display of normal `$` in text:
    // {left: "$", right: "$", display: false},
    // $ must come after $$
    // Render AMS environments even if outside $$…$$ delimiters.
    {
      left: "\\begin{equation}",
      right: "\\end{equation}",
      display: !0
    },
    {
      left: "\\begin{align}",
      right: "\\end{align}",
      display: !0
    },
    {
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
      display: !0
    },
    {
      left: "\\begin{gather}",
      right: "\\end{gather}",
      display: !0
    },
    {
      left: "\\begin{CD}",
      right: "\\end{CD}",
      display: !0
    },
    {
      left: "\\[",
      right: "\\]",
      display: !0
    }
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, Eh(e, r);
};
function vu() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let h0 = vu();
function to(a) {
  h0 = a;
}
const ro = /[&<>"']/, Ch = new RegExp(ro.source, "g"), ao = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Fh = new RegExp(ao.source, "g"), Mh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Yi = (a) => Mh[a];
function et(a, e) {
  if (e) {
    if (ro.test(a))
      return a.replace(Ch, Yi);
  } else if (ao.test(a))
    return a.replace(Fh, Yi);
  return a;
}
const _h = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Nh(a) {
  return a.replace(_h, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Oh = /(^|[^\[])\^/g;
function ye(a, e) {
  let t = typeof a == "string" ? a : a.source;
  e = e || "";
  const r = {
    replace: (n, u) => {
      let i = typeof u == "string" ? u : u.source;
      return i = i.replace(Oh, "$1"), t = t.replace(n, i), r;
    },
    getRegex: () => new RegExp(t, e)
  };
  return r;
}
function Zi(a) {
  try {
    a = encodeURI(a).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return a;
}
const Q0 = { exec: () => null };
function Qi(a, e) {
  const t = a.replace(/\|/g, (u, i, l) => {
    let s = !1, f = i;
    for (; --f >= 0 && l[f] === "\\"; )
      s = !s;
    return s ? "|" : " |";
  }), r = t.split(/ \|/);
  let n = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; n < r.length; n++)
    r[n] = r[n].trim().replace(/\\\|/g, "|");
  return r;
}
function _r(a, e, t) {
  const r = a.length;
  if (r === 0)
    return "";
  let n = 0;
  for (; n < r; ) {
    const u = a.charAt(r - n - 1);
    if (u === e && !t)
      n++;
    else if (u !== e && t)
      n++;
    else
      break;
  }
  return a.slice(0, r - n);
}
function Bh(a, e) {
  if (a.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < a.length; r++)
    if (a[r] === "\\")
      r++;
    else if (a[r] === e[0])
      t++;
    else if (a[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function Ki(a, e, t, r) {
  const n = e.href, u = e.title ? et(e.title) : null, i = a[1].replace(/\\([\[\]])/g, "$1");
  if (a[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const l = {
      type: "link",
      raw: t,
      href: n,
      title: u,
      text: i,
      tokens: r.inlineTokens(i)
    };
    return r.state.inLink = !1, l;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: u,
    text: et(i)
  };
}
function Ih(a, e) {
  const t = a.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const r = t[1];
  return e.split(`
`).map((n) => {
    const u = n.match(/^\s+/);
    if (u === null)
      return n;
    const [i] = u;
    return i.length >= r.length ? n.slice(r.length) : n;
  }).join(`
`);
}
class ca {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(e) {
    this.options = e || h0;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : _r(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], n = Ih(r, t[3] || "");
      return {
        type: "code",
        raw: r,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: n
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const n = _r(r, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (r = n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = _r(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const n = this.lexer.state.top;
      this.lexer.state.top = !0;
      const u = this.lexer.blockTokens(r);
      return this.lexer.state.top = n, {
        type: "blockquote",
        raw: t[0],
        tokens: u,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const n = r.length > 1, u = {
        type: "list",
        raw: "",
        ordered: n,
        start: n ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = n ? r : "[*+-]");
      const i = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = "", s = "", f = !1;
      for (; e; ) {
        let m = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e))
          break;
        l = t[0], e = e.substring(l.length);
        let b = t[2].split(`
`, 1)[0].replace(/^\t+/, (F) => " ".repeat(3 * F.length)), h = e.split(`
`, 1)[0], d = 0;
        this.options.pedantic ? (d = 2, s = b.trimStart()) : (d = t[2].search(/[^ ]/), d = d > 4 ? 1 : d, s = b.slice(d), d += t[1].length);
        let k = !1;
        if (!b && /^ *$/.test(h) && (l += h + `
`, e = e.substring(h.length + 1), m = !0), !m) {
          const F = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), x = new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), D = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`), A = new RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
          for (; e; ) {
            const _ = e.split(`
`, 1)[0];
            if (h = _, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), D.test(h) || A.test(h) || F.test(h) || x.test(e))
              break;
            if (h.search(/[^ ]/) >= d || !h.trim())
              s += `
` + h.slice(d);
            else {
              if (k || b.search(/[^ ]/) >= 4 || D.test(b) || A.test(b) || x.test(b))
                break;
              s += `
` + h;
            }
            !k && !h.trim() && (k = !0), l += _ + `
`, e = e.substring(_.length + 1), b = h.slice(d);
          }
        }
        u.loose || (f ? u.loose = !0 : /\n *\n *$/.test(l) && (f = !0));
        let E = null, w;
        this.options.gfm && (E = /^\[[ xX]\] /.exec(s), E && (w = E[0] !== "[ ] ", s = s.replace(/^\[[ xX]\] +/, ""))), u.items.push({
          type: "list_item",
          raw: l,
          task: !!E,
          checked: w,
          loose: !1,
          text: s,
          tokens: []
        }), u.raw += l;
      }
      u.items[u.items.length - 1].raw = l.trimEnd(), u.items[u.items.length - 1].text = s.trimEnd(), u.raw = u.raw.trimEnd();
      for (let m = 0; m < u.items.length; m++)
        if (this.lexer.state.top = !1, u.items[m].tokens = this.lexer.blockTokens(u.items[m].text, []), !u.loose) {
          const b = u.items[m].tokens.filter((d) => d.type === "space"), h = b.length > 0 && b.some((d) => /\n.*\n/.test(d.raw));
          u.loose = h;
        }
      if (u.loose)
        for (let m = 0; m < u.items.length; m++)
          u.items[m].loose = !0;
      return u;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", u = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: r,
        raw: t[0],
        href: n,
        title: u
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const r = Qi(t[1]), n = t[2].replace(/^\||\| *$/g, "").split("|"), u = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === n.length) {
      for (const l of n)
        /^ *-+: *$/.test(l) ? i.align.push("right") : /^ *:-+: *$/.test(l) ? i.align.push("center") : /^ *:-+ *$/.test(l) ? i.align.push("left") : i.align.push(null);
      for (const l of r)
        i.header.push({
          text: l,
          tokens: this.lexer.inline(l)
        });
      for (const l of u)
        i.rows.push(Qi(l, i.header.length).map((s) => ({
          text: s,
          tokens: this.lexer.inline(s)
        })));
      return i;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: et(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const i = _r(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 === 0)
          return;
      } else {
        const i = Bh(t[2], "()");
        if (i > -1) {
          const s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let n = t[2], u = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        i && (n = i[1], u = i[3]);
      } else
        u = t[3] ? t[3].slice(1, -1) : "";
      return n = n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(r) ? n = n.slice(1) : n = n.slice(1, -1)), Ki(t, {
        href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
        title: u && u.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const n = (r[2] || r[1]).replace(/\s+/g, " "), u = t[n.toLowerCase()];
      if (!u) {
        const i = r[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return Ki(r, u, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let n = this.rules.inline.emStrongLDelim.exec(e);
    if (!n || n[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(n[1] || n[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const i = [...n[0]].length - 1;
      let l, s, f = i, m = 0;
      const b = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (b.lastIndex = 0, t = t.slice(-1 * e.length + i); (n = b.exec(t)) != null; ) {
        if (l = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !l)
          continue;
        if (s = [...l].length, n[3] || n[4]) {
          f += s;
          continue;
        } else if ((n[5] || n[6]) && i % 3 && !((i + s) % 3)) {
          m += s;
          continue;
        }
        if (f -= s, f > 0)
          continue;
        s = Math.min(s, s + f + m);
        const h = [...n[0]][0].length, d = e.slice(0, i + n.index + h + s);
        if (Math.min(i, s) % 2) {
          const E = d.slice(1, -1);
          return {
            type: "em",
            raw: d,
            text: E,
            tokens: this.lexer.inlineTokens(E)
          };
        }
        const k = d.slice(2, -2);
        return {
          type: "strong",
          raw: d,
          text: k,
          tokens: this.lexer.inlineTokens(k)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const n = /[^ ]/.test(r), u = /^ /.test(r) && / $/.test(r);
      return n && u && (r = r.substring(1, r.length - 1)), r = et(r, !0), {
        type: "codespan",
        raw: t[0],
        text: r
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, n;
      return t[2] === "@" ? (r = et(t[1]), n = "mailto:" + r) : (r = et(t[1]), n = r), {
        type: "link",
        raw: t[0],
        text: r,
        href: n,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let r, n;
      if (t[2] === "@")
        r = et(t[0]), n = "mailto:" + r;
      else {
        let u;
        do
          u = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (u !== t[0]);
        r = et(t[0]), t[1] === "www." ? n = "http://" + t[0] : n = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: n,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = et(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const Rh = /^(?: *(?:\n|$))+/, Lh = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, zh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ph = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, no = /(?:[*+-]|\d{1,9}[.)])/, uo = ye(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, no).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), yu = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, qh = /^[^\n]+/, xu = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Hh = ye(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", xu).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Uh = ye(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, no).getRegex(), Ta = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", wu = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, jh = ye("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", wu).replace("tag", Ta).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), io = ye(yu).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ta).getRegex(), Gh = ye(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", io).getRegex(), Au = {
  blockquote: Gh,
  code: Lh,
  def: Hh,
  fences: zh,
  heading: Ph,
  hr,
  html: jh,
  lheading: uo,
  list: Uh,
  newline: Rh,
  paragraph: io,
  table: Q0,
  text: qh
}, Ji = ye("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ta).getRegex(), Vh = {
  ...Au,
  table: Ji,
  paragraph: ye(yu).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ji).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ta).getRegex()
}, $h = {
  ...Au,
  html: ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", wu).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Q0,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ye(yu).replace("hr", hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", uo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, so = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Wh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, lo = /^( {2,}|\\)\n(?!\s*$)/, Xh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, dr = "\\p{P}\\p{S}", Yh = ye(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, dr).getRegex(), Zh = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Qh = ye(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, dr).getRegex(), Kh = ye("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, dr).getRegex(), Jh = ye("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, dr).getRegex(), ed = ye(/\\([punct])/, "gu").replace(/punct/g, dr).getRegex(), td = ye(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), rd = ye(wu).replace("(?:-->|$)", "-->").getRegex(), ad = ye("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", rd).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), fa = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, nd = ye(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", fa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), oo = ye(/^!?\[(label)\]\[(ref)\]/).replace("label", fa).replace("ref", xu).getRegex(), co = ye(/^!?\[(ref)\](?:\[\])?/).replace("ref", xu).getRegex(), ud = ye("reflink|nolink(?!\\()", "g").replace("reflink", oo).replace("nolink", co).getRegex(), Du = {
  _backpedal: Q0,
  // only used for GFM url
  anyPunctuation: ed,
  autolink: td,
  blockSkip: Zh,
  br: lo,
  code: Wh,
  del: Q0,
  emStrongLDelim: Qh,
  emStrongRDelimAst: Kh,
  emStrongRDelimUnd: Jh,
  escape: so,
  link: nd,
  nolink: co,
  punctuation: Yh,
  reflink: oo,
  reflinkSearch: ud,
  tag: ad,
  text: Xh,
  url: Q0
}, id = {
  ...Du,
  link: ye(/^!?\[(label)\]\((.*?)\)/).replace("label", fa).getRegex(),
  reflink: ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", fa).getRegex()
}, Fn = {
  ...Du,
  escape: ye(so).replace("])", "~|])").getRegex(),
  url: ye(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, sd = {
  ...Fn,
  br: ye(lo).replace("{2,}", "*").getRegex(),
  text: ye(Fn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Nr = {
  normal: Au,
  gfm: Vh,
  pedantic: $h
}, L0 = {
  normal: Du,
  gfm: Fn,
  breaks: sd,
  pedantic: id
};
class kt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || h0, this.options.tokenizer = this.options.tokenizer || new ca(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Nr.normal,
      inline: L0.normal
    };
    this.options.pedantic ? (t.block = Nr.pedantic, t.inline = L0.pedantic) : this.options.gfm && (t.block = Nr.gfm, this.options.breaks ? t.inline = L0.breaks : t.inline = L0.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Nr,
      inline: L0
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new kt(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new kt(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (l, s, f) => s + "    ".repeat(f.length));
    let r, n, u, i;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (r = l.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + r.raw, n.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + r.raw, n.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (u = e, this.options.extensions && this.options.extensions.startBlock) {
          let l = 1 / 0;
          const s = e.slice(1);
          let f;
          this.options.extensions.startBlock.forEach((m) => {
            f = m.call({ lexer: this }, s), typeof f == "number" && f >= 0 && (l = Math.min(l, f));
          }), l < 1 / 0 && l >= 0 && (u = e.substring(0, l + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(u))) {
          n = t[t.length - 1], i && n.type === "paragraph" ? (n.raw += `
` + r.raw, n.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(r), i = u.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && n.type === "text" ? (n.raw += `
` + r.raw, n.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(r);
          continue;
        }
        if (e) {
          const l = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else
            throw new Error(l);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let r, n, u, i = e, l, s, f;
    if (this.tokens.links) {
      const m = Object.keys(this.tokens.links);
      if (m.length > 0)
        for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
          m.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
      i = i.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
      i = i.slice(0, l.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (s || (f = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((m) => (r = m.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && r.type === "text" && n.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && r.type === "text" && n.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, i, f)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (u = e, this.options.extensions && this.options.extensions.startInline) {
          let m = 1 / 0;
          const b = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach((d) => {
            h = d.call({ lexer: this }, b), typeof h == "number" && h >= 0 && (m = Math.min(m, h));
          }), m < 1 / 0 && m >= 0 && (u = e.substring(0, m + 1));
        }
        if (r = this.tokenizer.inlineText(u)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (f = r.raw.slice(-1)), s = !0, n = t[t.length - 1], n && n.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const m = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(m);
            break;
          } else
            throw new Error(m);
        }
      }
    return t;
  }
}
class ha {
  options;
  constructor(e) {
    this.options = e || h0;
  }
  code(e, t, r) {
    const n = (t || "").match(/^\S*/)?.[0];
    return e = e.replace(/\n$/, "") + `
`, n ? '<pre><code class="language-' + et(n) + '">' + (r ? e : et(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : et(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    const n = t ? "ol" : "ul", u = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + n + u + `>
` + e + "</" + n + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    const n = Zi(e);
    if (n === null)
      return r;
    e = n;
    let u = '<a href="' + e + '"';
    return t && (u += ' title="' + t + '"'), u += ">" + r + "</a>", u;
  }
  image(e, t, r) {
    const n = Zi(e);
    if (n === null)
      return r;
    e = n;
    let u = `<img src="${e}" alt="${r}"`;
    return t && (u += ` title="${t}"`), u += ">", u;
  }
  text(e) {
    return e;
  }
}
class Su {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class Et {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || h0, this.options.renderer = this.options.renderer || new ha(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Su();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Et(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Et(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "";
    for (let n = 0; n < e.length; n++) {
      const u = e[n];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u.type]) {
        const i = u, l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          r += l || "";
          continue;
        }
      }
      switch (u.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const i = u;
          r += this.renderer.heading(this.parseInline(i.tokens), i.depth, Nh(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const i = u;
          r += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = u;
          let l = "", s = "";
          for (let m = 0; m < i.header.length; m++)
            s += this.renderer.tablecell(this.parseInline(i.header[m].tokens), { header: !0, align: i.align[m] });
          l += this.renderer.tablerow(s);
          let f = "";
          for (let m = 0; m < i.rows.length; m++) {
            const b = i.rows[m];
            s = "";
            for (let h = 0; h < b.length; h++)
              s += this.renderer.tablecell(this.parseInline(b[h].tokens), { header: !1, align: i.align[h] });
            f += this.renderer.tablerow(s);
          }
          r += this.renderer.table(l, f);
          continue;
        }
        case "blockquote": {
          const i = u, l = this.parse(i.tokens);
          r += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          const i = u, l = i.ordered, s = i.start, f = i.loose;
          let m = "";
          for (let b = 0; b < i.items.length; b++) {
            const h = i.items[b], d = h.checked, k = h.task;
            let E = "";
            if (h.task) {
              const w = this.renderer.checkbox(!!d);
              f ? h.tokens.length > 0 && h.tokens[0].type === "paragraph" ? (h.tokens[0].text = w + " " + h.tokens[0].text, h.tokens[0].tokens && h.tokens[0].tokens.length > 0 && h.tokens[0].tokens[0].type === "text" && (h.tokens[0].tokens[0].text = w + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                type: "text",
                text: w + " "
              }) : E += w + " ";
            }
            E += this.parse(h.tokens, f), m += this.renderer.listitem(E, k, !!d);
          }
          r += this.renderer.list(m, l, s);
          continue;
        }
        case "html": {
          const i = u;
          r += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = u;
          r += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = u, l = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; n + 1 < e.length && e[n + 1].type === "text"; )
            i = e[++n], l += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          r += t ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const i = 'Token with "' + u.type + '" type was not found.';
          if (this.options.silent)
            return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let n = 0; n < e.length; n++) {
      const u = e[n];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u.type]) {
        const i = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(u.type)) {
          r += i || "";
          continue;
        }
      }
      switch (u.type) {
        case "escape": {
          const i = u;
          r += t.text(i.text);
          break;
        }
        case "html": {
          const i = u;
          r += t.html(i.text);
          break;
        }
        case "link": {
          const i = u;
          r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          const i = u;
          r += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = u;
          r += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          const i = u;
          r += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          const i = u;
          r += t.codespan(i.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          const i = u;
          r += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          const i = u;
          r += t.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + u.type + '" type was not found.';
          if (this.options.silent)
            return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
}
class Zr {
  options;
  constructor(e) {
    this.options = e || h0;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
class fo {
  defaults = vu();
  options = this.setOptions;
  parse = this.#e(kt.lex, Et.parse);
  parseInline = this.#e(kt.lexInline, Et.parseInline);
  Parser = Et;
  Renderer = ha;
  TextRenderer = Su;
  Lexer = kt;
  Tokenizer = ca;
  Hooks = Zr;
  constructor(...e) {
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    let r = [];
    for (const n of e)
      switch (r = r.concat(t.call(this, n)), n.type) {
        case "table": {
          const u = n;
          for (const i of u.header)
            r = r.concat(this.walkTokens(i.tokens, t));
          for (const i of u.rows)
            for (const l of i)
              r = r.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          const u = n;
          r = r.concat(this.walkTokens(u.items, t));
          break;
        }
        default: {
          const u = n;
          this.defaults.extensions?.childTokens?.[u.type] ? this.defaults.extensions.childTokens[u.type].forEach((i) => {
            const l = u[i].flat(1 / 0);
            r = r.concat(this.walkTokens(l, t));
          }) : u.tokens && (r = r.concat(this.walkTokens(u.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      const n = { ...r };
      if (n.async = this.defaults.async || n.async || !1, r.extensions && (r.extensions.forEach((u) => {
        if (!u.name)
          throw new Error("extension name required");
        if ("renderer" in u) {
          const i = t.renderers[u.name];
          i ? t.renderers[u.name] = function(...l) {
            let s = u.renderer.apply(this, l);
            return s === !1 && (s = i.apply(this, l)), s;
          } : t.renderers[u.name] = u.renderer;
        }
        if ("tokenizer" in u) {
          if (!u.level || u.level !== "block" && u.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const i = t[u.level];
          i ? i.unshift(u.tokenizer) : t[u.level] = [u.tokenizer], u.start && (u.level === "block" ? t.startBlock ? t.startBlock.push(u.start) : t.startBlock = [u.start] : u.level === "inline" && (t.startInline ? t.startInline.push(u.start) : t.startInline = [u.start]));
        }
        "childTokens" in u && u.childTokens && (t.childTokens[u.name] = u.childTokens);
      }), n.extensions = t), r.renderer) {
        const u = this.defaults.renderer || new ha(this.defaults);
        for (const i in r.renderer) {
          if (!(i in u))
            throw new Error(`renderer '${i}' does not exist`);
          if (i === "options")
            continue;
          const l = i, s = r.renderer[l], f = u[l];
          u[l] = (...m) => {
            let b = s.apply(u, m);
            return b === !1 && (b = f.apply(u, m)), b || "";
          };
        }
        n.renderer = u;
      }
      if (r.tokenizer) {
        const u = this.defaults.tokenizer || new ca(this.defaults);
        for (const i in r.tokenizer) {
          if (!(i in u))
            throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i))
            continue;
          const l = i, s = r.tokenizer[l], f = u[l];
          u[l] = (...m) => {
            let b = s.apply(u, m);
            return b === !1 && (b = f.apply(u, m)), b;
          };
        }
        n.tokenizer = u;
      }
      if (r.hooks) {
        const u = this.defaults.hooks || new Zr();
        for (const i in r.hooks) {
          if (!(i in u))
            throw new Error(`hook '${i}' does not exist`);
          if (i === "options")
            continue;
          const l = i, s = r.hooks[l], f = u[l];
          Zr.passThroughHooks.has(i) ? u[l] = (m) => {
            if (this.defaults.async)
              return Promise.resolve(s.call(u, m)).then((h) => f.call(u, h));
            const b = s.call(u, m);
            return f.call(u, b);
          } : u[l] = (...m) => {
            let b = s.apply(u, m);
            return b === !1 && (b = f.apply(u, m)), b;
          };
        }
        n.hooks = u;
      }
      if (r.walkTokens) {
        const u = this.defaults.walkTokens, i = r.walkTokens;
        n.walkTokens = function(l) {
          let s = [];
          return s.push(i.call(this, l)), u && (s = s.concat(u.call(this, l))), s;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return kt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Et.parse(e, t ?? this.defaults);
  }
  #e(e, t) {
    return (r, n) => {
      const u = { ...n }, i = { ...this.defaults, ...u };
      this.defaults.async === !0 && u.async === !1 && (i.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), i.async = !0);
      const l = this.#t(!!i.silent, !!i.async);
      if (typeof r > "u" || r === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (i.hooks && (i.hooks.options = i), i.async)
        return Promise.resolve(i.hooks ? i.hooks.preprocess(r) : r).then((s) => e(s, i)).then((s) => i.hooks ? i.hooks.processAllTokens(s) : s).then((s) => i.walkTokens ? Promise.all(this.walkTokens(s, i.walkTokens)).then(() => s) : s).then((s) => t(s, i)).then((s) => i.hooks ? i.hooks.postprocess(s) : s).catch(l);
      try {
        i.hooks && (r = i.hooks.preprocess(r));
        let s = e(r, i);
        i.hooks && (s = i.hooks.processAllTokens(s)), i.walkTokens && this.walkTokens(s, i.walkTokens);
        let f = t(s, i);
        return i.hooks && (f = i.hooks.postprocess(f)), f;
      } catch (s) {
        return l(s);
      }
    };
  }
  #t(e, t) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const n = "<p>An error occurred:</p><pre>" + et(r.message + "", !0) + "</pre>";
        return t ? Promise.resolve(n) : n;
      }
      if (t)
        return Promise.reject(r);
      throw r;
    };
  }
}
const o0 = new fo();
function ve(a, e) {
  return o0.parse(a, e);
}
ve.options = ve.setOptions = function(a) {
  return o0.setOptions(a), ve.defaults = o0.defaults, to(ve.defaults), ve;
};
ve.getDefaults = vu;
ve.defaults = h0;
ve.use = function(...a) {
  return o0.use(...a), ve.defaults = o0.defaults, to(ve.defaults), ve;
};
ve.walkTokens = function(a, e) {
  return o0.walkTokens(a, e);
};
ve.parseInline = o0.parseInline;
ve.Parser = Et;
ve.parser = Et.parse;
ve.Renderer = ha;
ve.TextRenderer = Su;
ve.Lexer = kt;
ve.lexer = kt.lex;
ve.Tokenizer = ca;
ve.Hooks = Zr;
ve.parse = ve;
ve.options;
ve.setOptions;
ve.use;
ve.walkTokens;
ve.parseInline;
Et.parse;
kt.lex;
function ld(a) {
  if (typeof a == "function" && (a = {
    highlight: a
  }), !a || typeof a.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof a.langPrefix != "string" && (a.langPrefix = "language-"), {
    async: !!a.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = es(e.lang);
      if (a.async)
        return Promise.resolve(a.highlight(e.text, t, e.lang || "")).then(ts(e));
      const r = a.highlight(e.text, t, e.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      ts(e)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, r) {
        typeof e == "object" && (r = e.escaped, t = e.lang, e = e.text);
        const n = es(t), u = n ? ` class="${a.langPrefix}${as(n)}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${u}>${r ? e : as(e, !0)}
</code></pre>`;
      }
    }
  };
}
function es(a) {
  return (a || "").match(/\S*/)[0];
}
function ts(a) {
  return (e) => {
    typeof e == "string" && e !== a.text && (a.escaped = !0, a.text = e);
  };
}
const ho = /[&<>"']/, od = new RegExp(ho.source, "g"), mo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, cd = new RegExp(mo.source, "g"), fd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, rs = (a) => fd[a];
function as(a, e) {
  if (e) {
    if (ho.test(a))
      return a.replace(od, rs);
  } else if (mo.test(a))
    return a.replace(cd, rs);
  return a;
}
const hd = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, dd = Object.hasOwnProperty;
class ku {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, t) {
    const r = this;
    let n = md(e, t === !0);
    const u = n;
    for (; dd.call(r.occurrences, n); )
      r.occurrences[u]++, n = u + "-" + r.occurrences[u];
    return r.occurrences[n] = 0, n;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function md(a, e) {
  return typeof a != "string" ? "" : (e || (a = a.toLowerCase()), a.replace(hd, "").replace(/ /g, "-"));
}
let po = new ku(), go = [];
function pd({ prefix: a = "", globalSlugs: e = !1 } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(t) {
        return e || gd(), t;
      }
    },
    renderer: {
      heading(t, r, n) {
        n = n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const u = `${a}${po.slug(n)}`, i = { level: r, text: t, id: u };
        return go.push(i), `<h${r} id="${u}">${t}</h${r}>
`;
      }
    }
  };
}
function gd() {
  go = [], po = new ku();
}
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bd(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function vd(a) {
  if (a.__esModule) return a;
  var e = a.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(a).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(a, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return a[r];
      }
    });
  }), t;
}
var bo = { exports: {} };
(function(a) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, u = 0, i = {}, l = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function x(D) {
          return D instanceof s ? new s(D.type, x(D.content), D.alias) : Array.isArray(D) ? D.map(x) : D.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(x) {
          return Object.prototype.toString.call(x).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(x) {
          return x.__id || Object.defineProperty(x, "__id", { value: ++u }), x.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function x(D, A) {
          A = A || {};
          var _, B;
          switch (l.util.type(D)) {
            case "Object":
              if (B = l.util.objId(D), A[B])
                return A[B];
              _ = /** @type {Record<string, any>} */
              {}, A[B] = _;
              for (var O in D)
                D.hasOwnProperty(O) && (_[O] = x(D[O], A));
              return (
                /** @type {any} */
                _
              );
            case "Array":
              return B = l.util.objId(D), A[B] ? A[B] : (_ = [], A[B] = _, /** @type {Array} */
              /** @type {any} */
              D.forEach(function(H, R) {
                _[R] = x(H, A);
              }), /** @type {any} */
              _);
            default:
              return D;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(x) {
          for (; x; ) {
            var D = n.exec(x.className);
            if (D)
              return D[1].toLowerCase();
            x = x.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(x, D) {
          x.className = x.className.replace(RegExp(n, "gi"), ""), x.classList.add("language-" + D);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (_) {
            var x = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(_.stack) || [])[1];
            if (x) {
              var D = document.getElementsByTagName("script");
              for (var A in D)
                if (D[A].src == x)
                  return D[A];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(x, D, A) {
          for (var _ = "no-" + D; x; ) {
            var B = x.classList;
            if (B.contains(D))
              return !0;
            if (B.contains(_))
              return !1;
            x = x.parentElement;
          }
          return !!A;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: i,
        plaintext: i,
        text: i,
        txt: i,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(x, D) {
          var A = l.util.clone(l.languages[x]);
          for (var _ in D)
            A[_] = D[_];
          return A;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(x, D, A, _) {
          _ = _ || /** @type {any} */
          l.languages;
          var B = _[x], O = {};
          for (var H in B)
            if (B.hasOwnProperty(H)) {
              if (H == D)
                for (var R in A)
                  A.hasOwnProperty(R) && (O[R] = A[R]);
              A.hasOwnProperty(H) || (O[H] = B[H]);
            }
          var L = _[x];
          return _[x] = O, l.languages.DFS(l.languages, function(C, I) {
            I === L && C != x && (this[C] = O);
          }), O;
        },
        // Traverse a language definition with Depth First Search
        DFS: function x(D, A, _, B) {
          B = B || {};
          var O = l.util.objId;
          for (var H in D)
            if (D.hasOwnProperty(H)) {
              A.call(D, H, D[H], _ || H);
              var R = D[H], L = l.util.type(R);
              L === "Object" && !B[O(R)] ? (B[O(R)] = !0, x(R, A, null, B)) : L === "Array" && !B[O(R)] && (B[O(R)] = !0, x(R, A, H, B));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(x, D) {
        l.highlightAllUnder(document, x, D);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(x, D, A) {
        var _ = {
          callback: A,
          container: x,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        l.hooks.run("before-highlightall", _), _.elements = Array.prototype.slice.apply(_.container.querySelectorAll(_.selector)), l.hooks.run("before-all-elements-highlight", _);
        for (var B = 0, O; O = _.elements[B++]; )
          l.highlightElement(O, D === !0, _.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(x, D, A) {
        var _ = l.util.getLanguage(x), B = l.languages[_];
        l.util.setLanguage(x, _);
        var O = x.parentElement;
        O && O.nodeName.toLowerCase() === "pre" && l.util.setLanguage(O, _);
        var H = x.textContent, R = {
          element: x,
          language: _,
          grammar: B,
          code: H
        };
        function L(I) {
          R.highlightedCode = I, l.hooks.run("before-insert", R), R.element.innerHTML = R.highlightedCode, l.hooks.run("after-highlight", R), l.hooks.run("complete", R), A && A.call(R.element);
        }
        if (l.hooks.run("before-sanity-check", R), O = R.element.parentElement, O && O.nodeName.toLowerCase() === "pre" && !O.hasAttribute("tabindex") && O.setAttribute("tabindex", "0"), !R.code) {
          l.hooks.run("complete", R), A && A.call(R.element);
          return;
        }
        if (l.hooks.run("before-highlight", R), !R.grammar) {
          L(l.util.encode(R.code));
          return;
        }
        if (D && r.Worker) {
          var C = new Worker(l.filename);
          C.onmessage = function(I) {
            L(I.data);
          }, C.postMessage(JSON.stringify({
            language: R.language,
            code: R.code,
            immediateClose: !0
          }));
        } else
          L(l.highlight(R.code, R.grammar, R.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(x, D, A) {
        var _ = {
          code: x,
          grammar: D,
          language: A
        };
        if (l.hooks.run("before-tokenize", _), !_.grammar)
          throw new Error('The language "' + _.language + '" has no grammar.');
        return _.tokens = l.tokenize(_.code, _.grammar), l.hooks.run("after-tokenize", _), s.stringify(l.util.encode(_.tokens), _.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(x, D) {
        var A = D.rest;
        if (A) {
          for (var _ in A)
            D[_] = A[_];
          delete D.rest;
        }
        var B = new b();
        return h(B, B.head, x), m(x, B, D, B.head, 0), k(B);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(x, D) {
          var A = l.hooks.all;
          A[x] = A[x] || [], A[x].push(D);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(x, D) {
          var A = l.hooks.all[x];
          if (!(!A || !A.length))
            for (var _ = 0, B; B = A[_++]; )
              B(D);
        }
      },
      Token: s
    };
    r.Prism = l;
    function s(x, D, A, _) {
      this.type = x, this.content = D, this.alias = A, this.length = (_ || "").length | 0;
    }
    s.stringify = function x(D, A) {
      if (typeof D == "string")
        return D;
      if (Array.isArray(D)) {
        var _ = "";
        return D.forEach(function(L) {
          _ += x(L, A);
        }), _;
      }
      var B = {
        type: D.type,
        content: x(D.content, A),
        tag: "span",
        classes: ["token", D.type],
        attributes: {},
        language: A
      }, O = D.alias;
      O && (Array.isArray(O) ? Array.prototype.push.apply(B.classes, O) : B.classes.push(O)), l.hooks.run("wrap", B);
      var H = "";
      for (var R in B.attributes)
        H += " " + R + '="' + (B.attributes[R] || "").replace(/"/g, "&quot;") + '"';
      return "<" + B.tag + ' class="' + B.classes.join(" ") + '"' + H + ">" + B.content + "</" + B.tag + ">";
    };
    function f(x, D, A, _) {
      x.lastIndex = D;
      var B = x.exec(A);
      if (B && _ && B[1]) {
        var O = B[1].length;
        B.index += O, B[0] = B[0].slice(O);
      }
      return B;
    }
    function m(x, D, A, _, B, O) {
      for (var H in A)
        if (!(!A.hasOwnProperty(H) || !A[H])) {
          var R = A[H];
          R = Array.isArray(R) ? R : [R];
          for (var L = 0; L < R.length; ++L) {
            if (O && O.cause == H + "," + L)
              return;
            var C = R[L], I = C.inside, j = !!C.lookbehind, X = !!C.greedy, N = C.alias;
            if (X && !C.pattern.global) {
              var P = C.pattern.toString().match(/[imsuy]*$/)[0];
              C.pattern = RegExp(C.pattern.source, P + "g");
            }
            for (var z = C.pattern || C, $ = _.next, fe = B; $ !== D.tail && !(O && fe >= O.reach); fe += $.value.length, $ = $.next) {
              var le = $.value;
              if (D.length > x.length)
                return;
              if (!(le instanceof s)) {
                var J = 1, ee;
                if (X) {
                  if (ee = f(z, fe, x, j), !ee || ee.index >= x.length)
                    break;
                  var Fe = ee.index, pe = ee.index + ee[0].length, se = fe;
                  for (se += $.value.length; Fe >= se; )
                    $ = $.next, se += $.value.length;
                  if (se -= $.value.length, fe = se, $.value instanceof s)
                    continue;
                  for (var Q = $; Q !== D.tail && (se < pe || typeof Q.value == "string"); Q = Q.next)
                    J++, se += Q.value.length;
                  J--, le = x.slice(fe, se), ee.index -= fe;
                } else if (ee = f(z, 0, le, j), !ee)
                  continue;
                var Fe = ee.index, De = ee[0], Se = le.slice(0, Fe), Ke = le.slice(Fe + De.length), Ve = fe + le.length;
                O && Ve > O.reach && (O.reach = Ve);
                var ht = $.prev;
                Se && (ht = h(D, ht, Se), fe += Se.length), d(D, ht, J);
                var vt = new s(H, I ? l.tokenize(De, I) : De, N, De);
                if ($ = h(D, ht, vt), Ke && h(D, $, Ke), J > 1) {
                  var _t = {
                    cause: H + "," + L,
                    reach: Ve
                  };
                  m(x, D, A, $.prev, fe, _t), O && _t.reach > O.reach && (O.reach = _t.reach);
                }
              }
            }
          }
        }
    }
    function b() {
      var x = { value: null, prev: null, next: null }, D = { value: null, prev: x, next: null };
      x.next = D, this.head = x, this.tail = D, this.length = 0;
    }
    function h(x, D, A) {
      var _ = D.next, B = { value: A, prev: D, next: _ };
      return D.next = B, _.prev = B, x.length++, B;
    }
    function d(x, D, A) {
      for (var _ = D.next, B = 0; B < A && _ !== x.tail; B++)
        _ = _.next;
      D.next = _, _.prev = D, x.length -= B;
    }
    function k(x) {
      for (var D = [], A = x.head.next; A !== x.tail; )
        D.push(A.value), A = A.next;
      return D;
    }
    if (!r.document)
      return r.addEventListener && (l.disableWorkerMessageHandler || r.addEventListener("message", function(x) {
        var D = JSON.parse(x.data), A = D.language, _ = D.code, B = D.immediateClose;
        r.postMessage(l.highlight(_, l.languages[A], A)), B && r.close();
      }, !1)), l;
    var E = l.util.currentScript();
    E && (l.filename = E.src, E.hasAttribute("data-manual") && (l.manual = !0));
    function w() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var F = document.readyState;
      F === "loading" || F === "interactive" && E && E.defer ? document.addEventListener("DOMContentLoaded", w) : window.requestAnimationFrame ? window.requestAnimationFrame(w) : window.setTimeout(w, 16);
    }
    return l;
  }(e);
  a.exports && (a.exports = t), typeof ue < "u" && (ue.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(n, u) {
      var i = {};
      i["language-" + u] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[u]
      }, i.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var l = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: i
        }
      };
      l["language-" + u] = {
        pattern: /[\s\S]+/,
        inside: t.languages[u]
      };
      var s = {};
      s[n] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return n;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: l
      }, t.languages.insertBefore("markup", "cdata", s);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, n) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [n, "language-" + n],
                inside: t.languages[n]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + n.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: n,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var u = r.languages.markup;
    u && (u.tag.addInlined("style", "css"), u.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", n = function(E, w) {
      return "✖ Error " + E + " while fetching file: " + w;
    }, u = "✖ Error: File does not exist or is empty", i = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, l = "data-src-status", s = "loading", f = "loaded", m = "failed", b = "pre[data-src]:not([" + l + '="' + f + '"]):not([' + l + '="' + s + '"])';
    function h(E, w, F) {
      var x = new XMLHttpRequest();
      x.open("GET", E, !0), x.onreadystatechange = function() {
        x.readyState == 4 && (x.status < 400 && x.responseText ? w(x.responseText) : x.status >= 400 ? F(n(x.status, x.statusText)) : F(u));
      }, x.send(null);
    }
    function d(E) {
      var w = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E || "");
      if (w) {
        var F = Number(w[1]), x = w[2], D = w[3];
        return x ? D ? [F, Number(D)] : [F, void 0] : [F, F];
      }
    }
    t.hooks.add("before-highlightall", function(E) {
      E.selector += ", " + b;
    }), t.hooks.add("before-sanity-check", function(E) {
      var w = (
        /** @type {HTMLPreElement} */
        E.element
      );
      if (w.matches(b)) {
        E.code = "", w.setAttribute(l, s);
        var F = w.appendChild(document.createElement("CODE"));
        F.textContent = r;
        var x = w.getAttribute("data-src"), D = E.language;
        if (D === "none") {
          var A = (/\.(\w+)$/.exec(x) || [, "none"])[1];
          D = i[A] || A;
        }
        t.util.setLanguage(F, D), t.util.setLanguage(w, D);
        var _ = t.plugins.autoloader;
        _ && _.loadLanguages(D), h(
          x,
          function(B) {
            w.setAttribute(l, f);
            var O = d(w.getAttribute("data-range"));
            if (O) {
              var H = B.split(/\r\n?|\n/g), R = O[0], L = O[1] == null ? H.length : O[1];
              R < 0 && (R += H.length), R = Math.max(0, Math.min(R - 1, H.length)), L < 0 && (L += H.length), L = Math.max(0, Math.min(L, H.length)), B = H.slice(R, L).join(`
`), w.hasAttribute("data-start") || w.setAttribute("data-start", String(R + 1));
            }
            F.textContent = B, t.highlightElement(F);
          },
          function(B) {
            w.setAttribute(l, m), F.textContent = B;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(w) {
        for (var F = (w || document).querySelectorAll(b), x = 0, D; D = F[x++]; )
          t.highlightElement(D);
      }
    };
    var k = !1;
    t.fileHighlight = function() {
      k || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), k = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(bo);
var nn = bo.exports;
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(a) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  a.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex;
})(Prism);
(function(a) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  a.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: r.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, t.inside = a.languages.bash;
  for (var n = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], u = r.variable[1].inside, i = 0; i < n.length; i++)
    u[n[i]] = a.languages.bash[n[i]];
  a.languages.sh = a.languages.bash, a.languages.shell = a.languages.bash;
})(Prism);
const yd = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', xd = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" color="currentColor" aria-hidden="true" aria-label="Copy" stroke-width="1.3" width="15" height="15">
  <path fill="currentColor" d="M12.728 4.545v8.182H4.545V4.545zm0 -0.909H4.545a0.909 0.909 0 0 0 -0.909 0.909v8.182a0.909 0.909 0 0 0 0.909 0.909h8.182a0.909 0.909 0 0 0 0.909 -0.909V4.545a0.909 0.909 0 0 0 -0.909 -0.909"/>
  <path fill="currentColor" d="M1.818 8.182H0.909V1.818a0.909 0.909 0 0 1 0.909 -0.909h6.364v0.909H1.818Z"/>
</svg>

`, wd = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" aria-label="Copied" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="m13.813 4.781 -7.438 7.438 -3.188 -3.188"/>
</svg>
`, ns = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${xd}</span>
  <span class="check">${wd}</span>
</button>`, vo = /[&<>"']/, Ad = new RegExp(vo.source, "g"), yo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Dd = new RegExp(yo.source, "g"), Sd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, us = (a) => Sd[a] || "";
function un(a, e) {
  if (e) {
    if (vo.test(a))
      return a.replace(Ad, us);
  } else if (yo.test(a))
    return a.replace(Dd, us);
  return a;
}
function kd(a) {
  const e = a.map((t) => ({
    start: new RegExp(t.left.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
    end: new RegExp(t.right.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
  }));
  return {
    name: "latex",
    level: "block",
    start(t) {
      for (const r of e) {
        const n = t.match(r.start);
        if (n)
          return n.index;
      }
      return -1;
    },
    tokenizer(t, r) {
      for (const n of e) {
        const u = new RegExp(
          `${n.start.source}([\\s\\S]+?)${n.end.source}`
        ).exec(t);
        if (u)
          return {
            type: "latex",
            raw: u[0],
            text: u[1].trim()
          };
      }
    },
    renderer(t) {
      return `<div class="latex-block">${t.text}</div>`;
    }
  };
}
const Ed = {
  code(a, e, t) {
    const r = (e ?? "").match(/\S*/)?.[0] ?? "";
    return a = a.replace(/\n$/, "") + `
`, r ? '<div class="code_wrap">' + ns + '<pre><code class="language-' + un(r) + '">' + (t ? a : un(a, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + ns + "<pre><code>" + (t ? a : un(a, !0)) + `</code></pre></div>
`;
  }
}, Td = new ku();
function Cd({
  header_links: a,
  line_breaks: e,
  latex_delimiters: t
}) {
  const r = new fo();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: e
    },
    ld({
      highlight: (u, i) => nn.languages[i] ? nn.highlight(u, nn.languages[i], i) : u
    }),
    { renderer: Ed }
  ), a && (r.use(pd()), r.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(u) {
          const i = u.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), l = "h" + Td.slug(i), s = u.depth, f = this.parser.parseInline(u.tokens);
          return `<h${s} id="${l}"><a class="md-header-anchor" href="#${l}">${yd}</a>${f}</h${s}>
`;
        }
      }
    ]
  }));
  const n = kd(t);
  return r.use({
    extensions: [n]
  }), r;
}
var xo = {}, tr = {}, Eu = {}, rr = {}, Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(a) {
    return a.charCodeAt(0);
  })
);
var Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
Cu.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(a) {
    return a.charCodeAt(0);
  })
);
var Mn = {};
(function(a) {
  var e;
  Object.defineProperty(a, "__esModule", { value: !0 }), a.replaceCodePoint = a.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  a.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (e = String.fromCodePoint) !== null && e !== void 0 ? e : function(u) {
    var i = "";
    return u > 65535 && (u -= 65536, i += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), i += String.fromCharCode(u), i;
  };
  function r(u) {
    var i;
    return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (i = t.get(u)) !== null && i !== void 0 ? i : u;
  }
  a.replaceCodePoint = r;
  function n(u) {
    return (0, a.fromCodePoint)(r(u));
  }
  a.default = n;
})(Mn);
(function(a) {
  var e = ue && ue.__createBinding || (Object.create ? function(C, I, j, X) {
    X === void 0 && (X = j);
    var N = Object.getOwnPropertyDescriptor(I, j);
    (!N || ("get" in N ? !I.__esModule : N.writable || N.configurable)) && (N = { enumerable: !0, get: function() {
      return I[j];
    } }), Object.defineProperty(C, X, N);
  } : function(C, I, j, X) {
    X === void 0 && (X = j), C[X] = I[j];
  }), t = ue && ue.__setModuleDefault || (Object.create ? function(C, I) {
    Object.defineProperty(C, "default", { enumerable: !0, value: I });
  } : function(C, I) {
    C.default = I;
  }), r = ue && ue.__importStar || function(C) {
    if (C && C.__esModule) return C;
    var I = {};
    if (C != null) for (var j in C) j !== "default" && Object.prototype.hasOwnProperty.call(C, j) && e(I, C, j);
    return t(I, C), I;
  }, n = ue && ue.__importDefault || function(C) {
    return C && C.__esModule ? C : { default: C };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.decodeXML = a.decodeHTMLStrict = a.decodeHTMLAttribute = a.decodeHTML = a.determineBranch = a.EntityDecoder = a.DecodingMode = a.BinTrieFlags = a.fromCodePoint = a.replaceCodePoint = a.decodeCodePoint = a.xmlDecodeTree = a.htmlDecodeTree = void 0;
  var u = n(Tu);
  a.htmlDecodeTree = u.default;
  var i = n(Cu);
  a.xmlDecodeTree = i.default;
  var l = r(Mn);
  a.decodeCodePoint = l.default;
  var s = Mn;
  Object.defineProperty(a, "replaceCodePoint", { enumerable: !0, get: function() {
    return s.replaceCodePoint;
  } }), Object.defineProperty(a, "fromCodePoint", { enumerable: !0, get: function() {
    return s.fromCodePoint;
  } });
  var f;
  (function(C) {
    C[C.NUM = 35] = "NUM", C[C.SEMI = 59] = "SEMI", C[C.EQUALS = 61] = "EQUALS", C[C.ZERO = 48] = "ZERO", C[C.NINE = 57] = "NINE", C[C.LOWER_A = 97] = "LOWER_A", C[C.LOWER_F = 102] = "LOWER_F", C[C.LOWER_X = 120] = "LOWER_X", C[C.LOWER_Z = 122] = "LOWER_Z", C[C.UPPER_A = 65] = "UPPER_A", C[C.UPPER_F = 70] = "UPPER_F", C[C.UPPER_Z = 90] = "UPPER_Z";
  })(f || (f = {}));
  var m = 32, b;
  (function(C) {
    C[C.VALUE_LENGTH = 49152] = "VALUE_LENGTH", C[C.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", C[C.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(b = a.BinTrieFlags || (a.BinTrieFlags = {}));
  function h(C) {
    return C >= f.ZERO && C <= f.NINE;
  }
  function d(C) {
    return C >= f.UPPER_A && C <= f.UPPER_F || C >= f.LOWER_A && C <= f.LOWER_F;
  }
  function k(C) {
    return C >= f.UPPER_A && C <= f.UPPER_Z || C >= f.LOWER_A && C <= f.LOWER_Z || h(C);
  }
  function E(C) {
    return C === f.EQUALS || k(C);
  }
  var w;
  (function(C) {
    C[C.EntityStart = 0] = "EntityStart", C[C.NumericStart = 1] = "NumericStart", C[C.NumericDecimal = 2] = "NumericDecimal", C[C.NumericHex = 3] = "NumericHex", C[C.NamedEntity = 4] = "NamedEntity";
  })(w || (w = {}));
  var F;
  (function(C) {
    C[C.Legacy = 0] = "Legacy", C[C.Strict = 1] = "Strict", C[C.Attribute = 2] = "Attribute";
  })(F = a.DecodingMode || (a.DecodingMode = {}));
  var x = (
    /** @class */
    function() {
      function C(I, j, X) {
        this.decodeTree = I, this.emitCodePoint = j, this.errors = X, this.state = w.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = F.Strict;
      }
      return C.prototype.startEntity = function(I) {
        this.decodeMode = I, this.state = w.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, C.prototype.write = function(I, j) {
        switch (this.state) {
          case w.EntityStart:
            return I.charCodeAt(j) === f.NUM ? (this.state = w.NumericStart, this.consumed += 1, this.stateNumericStart(I, j + 1)) : (this.state = w.NamedEntity, this.stateNamedEntity(I, j));
          case w.NumericStart:
            return this.stateNumericStart(I, j);
          case w.NumericDecimal:
            return this.stateNumericDecimal(I, j);
          case w.NumericHex:
            return this.stateNumericHex(I, j);
          case w.NamedEntity:
            return this.stateNamedEntity(I, j);
        }
      }, C.prototype.stateNumericStart = function(I, j) {
        return j >= I.length ? -1 : (I.charCodeAt(j) | m) === f.LOWER_X ? (this.state = w.NumericHex, this.consumed += 1, this.stateNumericHex(I, j + 1)) : (this.state = w.NumericDecimal, this.stateNumericDecimal(I, j));
      }, C.prototype.addToNumericResult = function(I, j, X, N) {
        if (j !== X) {
          var P = X - j;
          this.result = this.result * Math.pow(N, P) + parseInt(I.substr(j, P), N), this.consumed += P;
        }
      }, C.prototype.stateNumericHex = function(I, j) {
        for (var X = j; j < I.length; ) {
          var N = I.charCodeAt(j);
          if (h(N) || d(N))
            j += 1;
          else
            return this.addToNumericResult(I, X, j, 16), this.emitNumericEntity(N, 3);
        }
        return this.addToNumericResult(I, X, j, 16), -1;
      }, C.prototype.stateNumericDecimal = function(I, j) {
        for (var X = j; j < I.length; ) {
          var N = I.charCodeAt(j);
          if (h(N))
            j += 1;
          else
            return this.addToNumericResult(I, X, j, 10), this.emitNumericEntity(N, 2);
        }
        return this.addToNumericResult(I, X, j, 10), -1;
      }, C.prototype.emitNumericEntity = function(I, j) {
        var X;
        if (this.consumed <= j)
          return (X = this.errors) === null || X === void 0 || X.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (I === f.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === F.Strict)
          return 0;
        return this.emitCodePoint((0, l.replaceCodePoint)(this.result), this.consumed), this.errors && (I !== f.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, C.prototype.stateNamedEntity = function(I, j) {
        for (var X = this.decodeTree, N = X[this.treeIndex], P = (N & b.VALUE_LENGTH) >> 14; j < I.length; j++, this.excess++) {
          var z = I.charCodeAt(j);
          if (this.treeIndex = A(X, N, this.treeIndex + Math.max(1, P), z), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === F.Attribute && // We shouldn't have consumed any characters after the entity,
            (P === 0 || // And there should be no invalid characters.
            E(z)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (N = X[this.treeIndex], P = (N & b.VALUE_LENGTH) >> 14, P !== 0) {
            if (z === f.SEMI)
              return this.emitNamedEntityData(this.treeIndex, P, this.consumed + this.excess);
            this.decodeMode !== F.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, C.prototype.emitNotTerminatedNamedEntity = function() {
        var I, j = this, X = j.result, N = j.decodeTree, P = (N[X] & b.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(X, P, this.consumed), (I = this.errors) === null || I === void 0 || I.missingSemicolonAfterCharacterReference(), this.consumed;
      }, C.prototype.emitNamedEntityData = function(I, j, X) {
        var N = this.decodeTree;
        return this.emitCodePoint(j === 1 ? N[I] & ~b.VALUE_LENGTH : N[I + 1], X), j === 3 && this.emitCodePoint(N[I + 2], X), X;
      }, C.prototype.end = function() {
        var I;
        switch (this.state) {
          case w.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== F.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case w.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case w.NumericHex:
            return this.emitNumericEntity(0, 3);
          case w.NumericStart:
            return (I = this.errors) === null || I === void 0 || I.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case w.EntityStart:
            return 0;
        }
      }, C;
    }()
  );
  a.EntityDecoder = x;
  function D(C) {
    var I = "", j = new x(C, function(X) {
      return I += (0, l.fromCodePoint)(X);
    });
    return function(N, P) {
      for (var z = 0, $ = 0; ($ = N.indexOf("&", $)) >= 0; ) {
        I += N.slice(z, $), j.startEntity(P);
        var fe = j.write(
          N,
          // Skip the "&"
          $ + 1
        );
        if (fe < 0) {
          z = $ + j.end();
          break;
        }
        z = $ + fe, $ = fe === 0 ? z + 1 : z;
      }
      var le = I + N.slice(z);
      return I = "", le;
    };
  }
  function A(C, I, j, X) {
    var N = (I & b.BRANCH_LENGTH) >> 7, P = I & b.JUMP_TABLE;
    if (N === 0)
      return P !== 0 && X === P ? j : -1;
    if (P) {
      var z = X - P;
      return z < 0 || z >= N ? -1 : C[j + z] - 1;
    }
    for (var $ = j, fe = $ + N - 1; $ <= fe; ) {
      var le = $ + fe >>> 1, J = C[le];
      if (J < X)
        $ = le + 1;
      else if (J > X)
        fe = le - 1;
      else
        return C[le + N];
    }
    return -1;
  }
  a.determineBranch = A;
  var _ = D(u.default), B = D(i.default);
  function O(C, I) {
    return I === void 0 && (I = F.Legacy), _(C, I);
  }
  a.decodeHTML = O;
  function H(C) {
    return _(C, F.Attribute);
  }
  a.decodeHTMLAttribute = H;
  function R(C) {
    return _(C, F.Strict);
  }
  a.decodeHTMLStrict = R;
  function L(C) {
    return B(C, F.Strict);
  }
  a.decodeXML = L;
})(rr);
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.QuoteType = void 0;
  var e = rr, t;
  (function(h) {
    h[h.Tab = 9] = "Tab", h[h.NewLine = 10] = "NewLine", h[h.FormFeed = 12] = "FormFeed", h[h.CarriageReturn = 13] = "CarriageReturn", h[h.Space = 32] = "Space", h[h.ExclamationMark = 33] = "ExclamationMark", h[h.Number = 35] = "Number", h[h.Amp = 38] = "Amp", h[h.SingleQuote = 39] = "SingleQuote", h[h.DoubleQuote = 34] = "DoubleQuote", h[h.Dash = 45] = "Dash", h[h.Slash = 47] = "Slash", h[h.Zero = 48] = "Zero", h[h.Nine = 57] = "Nine", h[h.Semi = 59] = "Semi", h[h.Lt = 60] = "Lt", h[h.Eq = 61] = "Eq", h[h.Gt = 62] = "Gt", h[h.Questionmark = 63] = "Questionmark", h[h.UpperA = 65] = "UpperA", h[h.LowerA = 97] = "LowerA", h[h.UpperF = 70] = "UpperF", h[h.LowerF = 102] = "LowerF", h[h.UpperZ = 90] = "UpperZ", h[h.LowerZ = 122] = "LowerZ", h[h.LowerX = 120] = "LowerX", h[h.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  })(t || (t = {}));
  var r;
  (function(h) {
    h[h.Text = 1] = "Text", h[h.BeforeTagName = 2] = "BeforeTagName", h[h.InTagName = 3] = "InTagName", h[h.InSelfClosingTag = 4] = "InSelfClosingTag", h[h.BeforeClosingTagName = 5] = "BeforeClosingTagName", h[h.InClosingTagName = 6] = "InClosingTagName", h[h.AfterClosingTagName = 7] = "AfterClosingTagName", h[h.BeforeAttributeName = 8] = "BeforeAttributeName", h[h.InAttributeName = 9] = "InAttributeName", h[h.AfterAttributeName = 10] = "AfterAttributeName", h[h.BeforeAttributeValue = 11] = "BeforeAttributeValue", h[h.InAttributeValueDq = 12] = "InAttributeValueDq", h[h.InAttributeValueSq = 13] = "InAttributeValueSq", h[h.InAttributeValueNq = 14] = "InAttributeValueNq", h[h.BeforeDeclaration = 15] = "BeforeDeclaration", h[h.InDeclaration = 16] = "InDeclaration", h[h.InProcessingInstruction = 17] = "InProcessingInstruction", h[h.BeforeComment = 18] = "BeforeComment", h[h.CDATASequence = 19] = "CDATASequence", h[h.InSpecialComment = 20] = "InSpecialComment", h[h.InCommentLike = 21] = "InCommentLike", h[h.BeforeSpecialS = 22] = "BeforeSpecialS", h[h.SpecialStartSequence = 23] = "SpecialStartSequence", h[h.InSpecialTag = 24] = "InSpecialTag", h[h.BeforeEntity = 25] = "BeforeEntity", h[h.BeforeNumericEntity = 26] = "BeforeNumericEntity", h[h.InNamedEntity = 27] = "InNamedEntity", h[h.InNumericEntity = 28] = "InNumericEntity", h[h.InHexEntity = 29] = "InHexEntity";
  })(r || (r = {}));
  function n(h) {
    return h === t.Space || h === t.NewLine || h === t.Tab || h === t.FormFeed || h === t.CarriageReturn;
  }
  function u(h) {
    return h === t.Slash || h === t.Gt || n(h);
  }
  function i(h) {
    return h >= t.Zero && h <= t.Nine;
  }
  function l(h) {
    return h >= t.LowerA && h <= t.LowerZ || h >= t.UpperA && h <= t.UpperZ;
  }
  function s(h) {
    return h >= t.UpperA && h <= t.UpperF || h >= t.LowerA && h <= t.LowerF;
  }
  var f;
  (function(h) {
    h[h.NoValue = 0] = "NoValue", h[h.Unquoted = 1] = "Unquoted", h[h.Single = 2] = "Single", h[h.Double = 3] = "Double";
  })(f = a.QuoteType || (a.QuoteType = {}));
  var m = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    // `</title`
  }, b = (
    /** @class */
    function() {
      function h(d, k) {
        var E = d.xmlMode, w = E === void 0 ? !1 : E, F = d.decodeEntities, x = F === void 0 ? !0 : F;
        this.cbs = k, this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = w, this.decodeEntities = x, this.entityTrie = w ? e.xmlDecodeTree : e.htmlDecodeTree;
      }
      return h.prototype.reset = function() {
        this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
      }, h.prototype.write = function(d) {
        this.offset += this.buffer.length, this.buffer = d, this.parse();
      }, h.prototype.end = function() {
        this.running && this.finish();
      }, h.prototype.pause = function() {
        this.running = !1;
      }, h.prototype.resume = function() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
      }, h.prototype.getIndex = function() {
        return this.index;
      }, h.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, h.prototype.stateText = function(d) {
        d === t.Lt || !this.decodeEntities && this.fastForwardTo(t.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = r.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && d === t.Amp && (this.state = r.BeforeEntity);
      }, h.prototype.stateSpecialStartSequence = function(d) {
        var k = this.sequenceIndex === this.currentSequence.length, E = k ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          u(d)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (d | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!E)
          this.isSpecial = !1;
        else if (!k) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = r.InTagName, this.stateInTagName(d);
      }, h.prototype.stateInSpecialTag = function(d) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (d === t.Gt || n(d)) {
            var k = this.index - this.currentSequence.length;
            if (this.sectionStart < k) {
              var E = this.index;
              this.index = k, this.cbs.ontext(this.sectionStart, k), this.index = E;
            }
            this.isSpecial = !1, this.sectionStart = k + 2, this.stateInClosingTagName(d);
            return;
          }
          this.sequenceIndex = 0;
        }
        (d | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === m.TitleEnd ? this.decodeEntities && d === t.Amp && (this.state = r.BeforeEntity) : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(d === t.Lt);
      }, h.prototype.stateCDATASequence = function(d) {
        d === m.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === m.Cdata.length && (this.state = r.InCommentLike, this.currentSequence = m.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = r.InDeclaration, this.stateInDeclaration(d));
      }, h.prototype.fastForwardTo = function(d) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === d)
            return !0;
        return this.index = this.buffer.length + this.offset - 1, !1;
      }, h.prototype.stateInCommentLike = function(d) {
        d === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === m.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = r.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : d !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, h.prototype.isTagStartChar = function(d) {
        return this.xmlMode ? !u(d) : l(d);
      }, h.prototype.startSpecial = function(d, k) {
        this.isSpecial = !0, this.currentSequence = d, this.sequenceIndex = k, this.state = r.SpecialStartSequence;
      }, h.prototype.stateBeforeTagName = function(d) {
        if (d === t.ExclamationMark)
          this.state = r.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (d === t.Questionmark)
          this.state = r.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(d)) {
          var k = d | 32;
          this.sectionStart = this.index, !this.xmlMode && k === m.TitleEnd[2] ? this.startSpecial(m.TitleEnd, 3) : this.state = !this.xmlMode && k === m.ScriptEnd[2] ? r.BeforeSpecialS : r.InTagName;
        } else d === t.Slash ? this.state = r.BeforeClosingTagName : (this.state = r.Text, this.stateText(d));
      }, h.prototype.stateInTagName = function(d) {
        u(d) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(d));
      }, h.prototype.stateBeforeClosingTagName = function(d) {
        n(d) || (d === t.Gt ? this.state = r.Text : (this.state = this.isTagStartChar(d) ? r.InClosingTagName : r.InSpecialComment, this.sectionStart = this.index));
      }, h.prototype.stateInClosingTagName = function(d) {
        (d === t.Gt || n(d)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterClosingTagName, this.stateAfterClosingTagName(d));
      }, h.prototype.stateAfterClosingTagName = function(d) {
        (d === t.Gt || this.fastForwardTo(t.Gt)) && (this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1);
      }, h.prototype.stateBeforeAttributeName = function(d) {
        d === t.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = r.InSpecialTag, this.sequenceIndex = 0) : this.state = r.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : d === t.Slash ? this.state = r.InSelfClosingTag : n(d) || (this.state = r.InAttributeName, this.sectionStart = this.index);
      }, h.prototype.stateInSelfClosingTag = function(d) {
        d === t.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : n(d) || (this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(d));
      }, h.prototype.stateInAttributeName = function(d) {
        (d === t.Eq || u(d)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterAttributeName, this.stateAfterAttributeName(d));
      }, h.prototype.stateAfterAttributeName = function(d) {
        d === t.Eq ? this.state = r.BeforeAttributeValue : d === t.Slash || d === t.Gt ? (this.cbs.onattribend(f.NoValue, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(d)) : n(d) || (this.cbs.onattribend(f.NoValue, this.index), this.state = r.InAttributeName, this.sectionStart = this.index);
      }, h.prototype.stateBeforeAttributeValue = function(d) {
        d === t.DoubleQuote ? (this.state = r.InAttributeValueDq, this.sectionStart = this.index + 1) : d === t.SingleQuote ? (this.state = r.InAttributeValueSq, this.sectionStart = this.index + 1) : n(d) || (this.sectionStart = this.index, this.state = r.InAttributeValueNq, this.stateInAttributeValueNoQuotes(d));
      }, h.prototype.handleInAttributeValue = function(d, k) {
        d === k || !this.decodeEntities && this.fastForwardTo(k) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(k === t.DoubleQuote ? f.Double : f.Single, this.index), this.state = r.BeforeAttributeName) : this.decodeEntities && d === t.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, h.prototype.stateInAttributeValueDoubleQuotes = function(d) {
        this.handleInAttributeValue(d, t.DoubleQuote);
      }, h.prototype.stateInAttributeValueSingleQuotes = function(d) {
        this.handleInAttributeValue(d, t.SingleQuote);
      }, h.prototype.stateInAttributeValueNoQuotes = function(d) {
        n(d) || d === t.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(f.Unquoted, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(d)) : this.decodeEntities && d === t.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, h.prototype.stateBeforeDeclaration = function(d) {
        d === t.OpeningSquareBracket ? (this.state = r.CDATASequence, this.sequenceIndex = 0) : this.state = d === t.Dash ? r.BeforeComment : r.InDeclaration;
      }, h.prototype.stateInDeclaration = function(d) {
        (d === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, h.prototype.stateInProcessingInstruction = function(d) {
        (d === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, h.prototype.stateBeforeComment = function(d) {
        d === t.Dash ? (this.state = r.InCommentLike, this.currentSequence = m.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = r.InDeclaration;
      }, h.prototype.stateInSpecialComment = function(d) {
        (d === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = r.Text, this.sectionStart = this.index + 1);
      }, h.prototype.stateBeforeSpecialS = function(d) {
        var k = d | 32;
        k === m.ScriptEnd[3] ? this.startSpecial(m.ScriptEnd, 4) : k === m.StyleEnd[3] ? this.startSpecial(m.StyleEnd, 4) : (this.state = r.InTagName, this.stateInTagName(d));
      }, h.prototype.stateBeforeEntity = function(d) {
        this.entityExcess = 1, this.entityResult = 0, d === t.Number ? this.state = r.BeforeNumericEntity : d === t.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = r.InNamedEntity, this.stateInNamedEntity(d));
      }, h.prototype.stateInNamedEntity = function(d) {
        if (this.entityExcess += 1, this.trieIndex = (0, e.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, d), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var k = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
        if (k) {
          var E = (k >> 14) - 1;
          if (!this.allowLegacyEntity() && d !== t.Semi)
            this.trieIndex += E;
          else {
            var w = this.index - this.entityExcess + 1;
            w > this.sectionStart && this.emitPartial(this.sectionStart, w), this.entityResult = this.trieIndex, this.trieIndex += E, this.entityExcess = 0, this.sectionStart = this.index + 1, E === 0 && this.emitNamedEntity();
          }
        }
      }, h.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var d = (this.entityTrie[this.entityResult] & e.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (d) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~e.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, h.prototype.stateBeforeNumericEntity = function(d) {
        (d | 32) === t.LowerX ? (this.entityExcess++, this.state = r.InHexEntity) : (this.state = r.InNumericEntity, this.stateInNumericEntity(d));
      }, h.prototype.emitNumericEntity = function(d) {
        var k = this.index - this.entityExcess - 1, E = k + 2 + +(this.state === r.InHexEntity);
        E !== this.index && (k > this.sectionStart && this.emitPartial(this.sectionStart, k), this.sectionStart = this.index + Number(d), this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, h.prototype.stateInNumericEntity = function(d) {
        d === t.Semi ? this.emitNumericEntity(!0) : i(d) ? (this.entityResult = this.entityResult * 10 + (d - t.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, h.prototype.stateInHexEntity = function(d) {
        d === t.Semi ? this.emitNumericEntity(!0) : i(d) ? (this.entityResult = this.entityResult * 16 + (d - t.Zero), this.entityExcess++) : s(d) ? (this.entityResult = this.entityResult * 16 + ((d | 32) - t.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, h.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === r.Text || this.baseState === r.InSpecialTag);
      }, h.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === r.Text || this.state === r.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === r.InAttributeValueDq || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, h.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, h.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var d = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case r.Text: {
              this.stateText(d);
              break;
            }
            case r.SpecialStartSequence: {
              this.stateSpecialStartSequence(d);
              break;
            }
            case r.InSpecialTag: {
              this.stateInSpecialTag(d);
              break;
            }
            case r.CDATASequence: {
              this.stateCDATASequence(d);
              break;
            }
            case r.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(d);
              break;
            }
            case r.InAttributeName: {
              this.stateInAttributeName(d);
              break;
            }
            case r.InCommentLike: {
              this.stateInCommentLike(d);
              break;
            }
            case r.InSpecialComment: {
              this.stateInSpecialComment(d);
              break;
            }
            case r.BeforeAttributeName: {
              this.stateBeforeAttributeName(d);
              break;
            }
            case r.InTagName: {
              this.stateInTagName(d);
              break;
            }
            case r.InClosingTagName: {
              this.stateInClosingTagName(d);
              break;
            }
            case r.BeforeTagName: {
              this.stateBeforeTagName(d);
              break;
            }
            case r.AfterAttributeName: {
              this.stateAfterAttributeName(d);
              break;
            }
            case r.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(d);
              break;
            }
            case r.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(d);
              break;
            }
            case r.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(d);
              break;
            }
            case r.AfterClosingTagName: {
              this.stateAfterClosingTagName(d);
              break;
            }
            case r.BeforeSpecialS: {
              this.stateBeforeSpecialS(d);
              break;
            }
            case r.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(d);
              break;
            }
            case r.InSelfClosingTag: {
              this.stateInSelfClosingTag(d);
              break;
            }
            case r.InDeclaration: {
              this.stateInDeclaration(d);
              break;
            }
            case r.BeforeDeclaration: {
              this.stateBeforeDeclaration(d);
              break;
            }
            case r.BeforeComment: {
              this.stateBeforeComment(d);
              break;
            }
            case r.InProcessingInstruction: {
              this.stateInProcessingInstruction(d);
              break;
            }
            case r.InNamedEntity: {
              this.stateInNamedEntity(d);
              break;
            }
            case r.BeforeEntity: {
              this.stateBeforeEntity(d);
              break;
            }
            case r.InHexEntity: {
              this.stateInHexEntity(d);
              break;
            }
            case r.InNumericEntity: {
              this.stateInNumericEntity(d);
              break;
            }
            default:
              this.stateBeforeNumericEntity(d);
          }
          this.index++;
        }
        this.cleanup();
      }, h.prototype.finish = function() {
        this.state === r.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, h.prototype.handleTrailingData = function() {
        var d = this.buffer.length + this.offset;
        this.state === r.InCommentLike ? this.currentSequence === m.CdataEnd ? this.cbs.oncdata(this.sectionStart, d, 0) : this.cbs.oncomment(this.sectionStart, d, 0) : this.state === r.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InTagName || this.state === r.BeforeAttributeName || this.state === r.BeforeAttributeValue || this.state === r.AfterAttributeName || this.state === r.InAttributeName || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueDq || this.state === r.InAttributeValueNq || this.state === r.InClosingTagName || this.cbs.ontext(this.sectionStart, d);
      }, h.prototype.emitPartial = function(d, k) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribdata(d, k) : this.cbs.ontext(d, k);
      }, h.prototype.emitCodePoint = function(d) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribentity(d) : this.cbs.ontextentity(d);
      }, h;
    }()
  );
  a.default = b;
})(Eu);
var Fd = ue && ue.__createBinding || (Object.create ? function(a, e, t, r) {
  r === void 0 && (r = t);
  var n = Object.getOwnPropertyDescriptor(e, t);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(a, r, n);
} : function(a, e, t, r) {
  r === void 0 && (r = t), a[r] = e[t];
}), Md = ue && ue.__setModuleDefault || (Object.create ? function(a, e) {
  Object.defineProperty(a, "default", { enumerable: !0, value: e });
} : function(a, e) {
  a.default = e;
}), _d = ue && ue.__importStar || function(a) {
  if (a && a.__esModule) return a;
  var e = {};
  if (a != null) for (var t in a) t !== "default" && Object.prototype.hasOwnProperty.call(a, t) && Fd(e, a, t);
  return Md(e, a), e;
};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.Parser = void 0;
var Or = _d(Eu), is = rr, w0 = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), be = /* @__PURE__ */ new Set(["p"]), ss = /* @__PURE__ */ new Set(["thead", "tbody"]), ls = /* @__PURE__ */ new Set(["dd", "dt"]), os = /* @__PURE__ */ new Set(["rt", "rp"]), Nd = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", be],
  ["h1", be],
  ["h2", be],
  ["h3", be],
  ["h4", be],
  ["h5", be],
  ["h6", be],
  ["select", w0],
  ["input", w0],
  ["output", w0],
  ["button", w0],
  ["datalist", w0],
  ["textarea", w0],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", ls],
  ["dt", ls],
  ["address", be],
  ["article", be],
  ["aside", be],
  ["blockquote", be],
  ["details", be],
  ["div", be],
  ["dl", be],
  ["fieldset", be],
  ["figcaption", be],
  ["figure", be],
  ["footer", be],
  ["form", be],
  ["header", be],
  ["hr", be],
  ["main", be],
  ["nav", be],
  ["ol", be],
  ["pre", be],
  ["section", be],
  ["table", be],
  ["ul", be],
  ["rt", os],
  ["rp", os],
  ["tbody", ss],
  ["tfoot", ss]
]), Od = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), cs = /* @__PURE__ */ new Set(["math", "svg"]), fs = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), Bd = /\s|\//, Id = (
  /** @class */
  function() {
    function a(e, t) {
      t === void 0 && (t = {});
      var r, n, u, i, l;
      this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ?? {}, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : !t.xmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : !t.xmlMode, this.tokenizer = new ((u = t.Tokenizer) !== null && u !== void 0 ? u : Or.default)(this.options, this), (l = (i = this.cbs).onparserinit) === null || l === void 0 || l.call(i, this);
    }
    return a.prototype.ontext = function(e, t) {
      var r, n, u = this.getSlice(e, t);
      this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, u), this.startIndex = t;
    }, a.prototype.ontextentity = function(e) {
      var t, r, n = this.tokenizer.getSectionStart();
      this.endIndex = n - 1, (r = (t = this.cbs).ontext) === null || r === void 0 || r.call(t, (0, is.fromCodePoint)(e)), this.startIndex = n;
    }, a.prototype.isVoidElement = function(e) {
      return !this.options.xmlMode && Od.has(e);
    }, a.prototype.onopentagname = function(e, t) {
      this.endIndex = t;
      var r = this.getSlice(e, t);
      this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r);
    }, a.prototype.emitOpenTag = function(e) {
      var t, r, n, u;
      this.openTagStart = this.startIndex, this.tagname = e;
      var i = !this.options.xmlMode && Nd.get(e);
      if (i)
        for (; this.stack.length > 0 && i.has(this.stack[this.stack.length - 1]); ) {
          var l = this.stack.pop();
          (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, l, !0);
        }
      this.isVoidElement(e) || (this.stack.push(e), cs.has(e) ? this.foreignContext.push(!0) : fs.has(e) && this.foreignContext.push(!1)), (u = (n = this.cbs).onopentagname) === null || u === void 0 || u.call(n, e), this.cbs.onopentag && (this.attribs = {});
    }, a.prototype.endOpenTag = function(e) {
      var t, r;
      this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
    }, a.prototype.onopentagend = function(e) {
      this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1;
    }, a.prototype.onclosetag = function(e, t) {
      var r, n, u, i, l, s;
      this.endIndex = t;
      var f = this.getSlice(e, t);
      if (this.lowerCaseTagNames && (f = f.toLowerCase()), (cs.has(f) || fs.has(f)) && this.foreignContext.pop(), this.isVoidElement(f))
        !this.options.xmlMode && f === "br" && ((n = (r = this.cbs).onopentagname) === null || n === void 0 || n.call(r, "br"), (i = (u = this.cbs).onopentag) === null || i === void 0 || i.call(u, "br", {}, !0), (s = (l = this.cbs).onclosetag) === null || s === void 0 || s.call(l, "br", !1));
      else {
        var m = this.stack.lastIndexOf(f);
        if (m !== -1)
          if (this.cbs.onclosetag)
            for (var b = this.stack.length - m; b--; )
              this.cbs.onclosetag(this.stack.pop(), b !== 0);
          else
            this.stack.length = m;
        else !this.options.xmlMode && f === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = t + 1;
    }, a.prototype.onselfclosingtag = function(e) {
      this.endIndex = e, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e);
    }, a.prototype.closeCurrentTag = function(e) {
      var t, r, n = this.tagname;
      this.endOpenTag(e), this.stack[this.stack.length - 1] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !e), this.stack.pop());
    }, a.prototype.onattribname = function(e, t) {
      this.startIndex = e;
      var r = this.getSlice(e, t);
      this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
    }, a.prototype.onattribdata = function(e, t) {
      this.attribvalue += this.getSlice(e, t);
    }, a.prototype.onattribentity = function(e) {
      this.attribvalue += (0, is.fromCodePoint)(e);
    }, a.prototype.onattribend = function(e, t) {
      var r, n;
      this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, e === Or.QuoteType.Double ? '"' : e === Or.QuoteType.Single ? "'" : e === Or.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, a.prototype.getInstructionName = function(e) {
      var t = e.search(Bd), r = t < 0 ? e : e.substr(0, t);
      return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
    }, a.prototype.ondeclaration = function(e, t) {
      this.endIndex = t;
      var r = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
      }
      this.startIndex = t + 1;
    }, a.prototype.onprocessinginstruction = function(e, t) {
      this.endIndex = t;
      var r = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
      }
      this.startIndex = t + 1;
    }, a.prototype.oncomment = function(e, t, r) {
      var n, u, i, l;
      this.endIndex = t, (u = (n = this.cbs).oncomment) === null || u === void 0 || u.call(n, this.getSlice(e, t - r)), (l = (i = this.cbs).oncommentend) === null || l === void 0 || l.call(i), this.startIndex = t + 1;
    }, a.prototype.oncdata = function(e, t, r) {
      var n, u, i, l, s, f, m, b, h, d;
      this.endIndex = t;
      var k = this.getSlice(e, t - r);
      this.options.xmlMode || this.options.recognizeCDATA ? ((u = (n = this.cbs).oncdatastart) === null || u === void 0 || u.call(n), (l = (i = this.cbs).ontext) === null || l === void 0 || l.call(i, k), (f = (s = this.cbs).oncdataend) === null || f === void 0 || f.call(s)) : ((b = (m = this.cbs).oncomment) === null || b === void 0 || b.call(m, "[CDATA[".concat(k, "]]")), (d = (h = this.cbs).oncommentend) === null || d === void 0 || d.call(h)), this.startIndex = t + 1;
    }, a.prototype.onend = function() {
      var e, t;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = this.stack.length; r > 0; this.cbs.onclosetag(this.stack[--r], !0))
          ;
      }
      (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e);
    }, a.prototype.reset = function() {
      var e, t, r, n;
      (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }, a.prototype.parseComplete = function(e) {
      this.reset(), this.end(e);
    }, a.prototype.getSlice = function(e, t) {
      for (; e - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      for (var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); t - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset);
      return r;
    }, a.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, a.prototype.write = function(e) {
      var t, r;
      if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++);
    }, a.prototype.end = function(e) {
      var t, r;
      if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
      }
      e && this.write(e), this.ended = !0, this.tokenizer.end();
    }, a.prototype.pause = function() {
      this.tokenizer.pause();
    }, a.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, a.prototype.parseChunk = function(e) {
      this.write(e);
    }, a.prototype.done = function(e) {
      this.end(e);
    }, a;
  }()
);
tr.Parser = Id;
var Vt = {}, O0 = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Doctype = a.CDATA = a.Tag = a.Style = a.Script = a.Comment = a.Directive = a.Text = a.Root = a.isTag = a.ElementType = void 0;
  var e;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(e = a.ElementType || (a.ElementType = {}));
  function t(r) {
    return r.type === e.Tag || r.type === e.Script || r.type === e.Style;
  }
  a.isTag = t, a.Root = e.Root, a.Text = e.Text, a.Directive = e.Directive, a.Comment = e.Comment, a.Script = e.Script, a.Style = e.Style, a.Tag = e.Tag, a.CDATA = e.CDATA, a.Doctype = e.Doctype;
})(O0);
var de = {}, a0 = ue && ue.__extends || /* @__PURE__ */ function() {
  var a = function(e, t) {
    return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
      r.__proto__ = n;
    } || function(r, n) {
      for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
    }, a(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    a(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), K0 = ue && ue.__assign || function() {
  return K0 = Object.assign || function(a) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
    }
    return a;
  }, K0.apply(this, arguments);
};
Object.defineProperty(de, "__esModule", { value: !0 });
de.cloneNode = de.hasChildren = de.isDocument = de.isDirective = de.isComment = de.isText = de.isCDATA = de.isTag = de.Element = de.Document = de.CDATA = de.NodeWithChildren = de.ProcessingInstruction = de.Comment = de.Text = de.DataNode = de.Node = void 0;
var Ze = O0, Fu = (
  /** @class */
  function() {
    function a() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(a.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), Mu(this, e);
    }, a;
  }()
);
de.Node = Fu;
var Ca = (
  /** @class */
  function(a) {
    a0(e, a);
    function e(t) {
      var r = a.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Fu)
);
de.DataNode = Ca;
var wo = (
  /** @class */
  function(a) {
    a0(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = Ze.ElementType.Text, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ca)
);
de.Text = wo;
var Ao = (
  /** @class */
  function(a) {
    a0(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = Ze.ElementType.Comment, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ca)
);
de.Comment = Ao;
var Do = (
  /** @class */
  function(a) {
    a0(e, a);
    function e(t, r) {
      var n = a.call(this, r) || this;
      return n.name = t, n.type = Ze.ElementType.Directive, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ca)
);
de.ProcessingInstruction = Do;
var Fa = (
  /** @class */
  function(a) {
    a0(e, a);
    function e(t) {
      var r = a.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Fu)
);
de.NodeWithChildren = Fa;
var So = (
  /** @class */
  function(a) {
    a0(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = Ze.ElementType.CDATA, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Fa)
);
de.CDATA = So;
var ko = (
  /** @class */
  function(a) {
    a0(e, a);
    function e() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.type = Ze.ElementType.Root, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Fa)
);
de.Document = ko;
var Eo = (
  /** @class */
  function(a) {
    a0(e, a);
    function e(t, r, n, u) {
      n === void 0 && (n = []), u === void 0 && (u = t === "script" ? Ze.ElementType.Script : t === "style" ? Ze.ElementType.Style : Ze.ElementType.Tag);
      var i = a.call(this, n) || this;
      return i.name = t, i.attribs = r, i.type = u, i;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var n, u;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (n = t["x-attribsNamespace"]) === null || n === void 0 ? void 0 : n[r],
            prefix: (u = t["x-attribsPrefix"]) === null || u === void 0 ? void 0 : u[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Fa)
);
de.Element = Eo;
function To(a) {
  return (0, Ze.isTag)(a);
}
de.isTag = To;
function Co(a) {
  return a.type === Ze.ElementType.CDATA;
}
de.isCDATA = Co;
function Fo(a) {
  return a.type === Ze.ElementType.Text;
}
de.isText = Fo;
function Mo(a) {
  return a.type === Ze.ElementType.Comment;
}
de.isComment = Mo;
function _o(a) {
  return a.type === Ze.ElementType.Directive;
}
de.isDirective = _o;
function No(a) {
  return a.type === Ze.ElementType.Root;
}
de.isDocument = No;
function Rd(a) {
  return Object.prototype.hasOwnProperty.call(a, "children");
}
de.hasChildren = Rd;
function Mu(a, e) {
  e === void 0 && (e = !1);
  var t;
  if (Fo(a))
    t = new wo(a.data);
  else if (Mo(a))
    t = new Ao(a.data);
  else if (To(a)) {
    var r = e ? sn(a.children) : [], n = new Eo(a.name, K0({}, a.attribs), r);
    r.forEach(function(s) {
      return s.parent = n;
    }), a.namespace != null && (n.namespace = a.namespace), a["x-attribsNamespace"] && (n["x-attribsNamespace"] = K0({}, a["x-attribsNamespace"])), a["x-attribsPrefix"] && (n["x-attribsPrefix"] = K0({}, a["x-attribsPrefix"])), t = n;
  } else if (Co(a)) {
    var r = e ? sn(a.children) : [], u = new So(r);
    r.forEach(function(f) {
      return f.parent = u;
    }), t = u;
  } else if (No(a)) {
    var r = e ? sn(a.children) : [], i = new ko(r);
    r.forEach(function(f) {
      return f.parent = i;
    }), a["x-mode"] && (i["x-mode"] = a["x-mode"]), t = i;
  } else if (_o(a)) {
    var l = new Do(a.name, a.data);
    a["x-name"] != null && (l["x-name"] = a["x-name"], l["x-publicId"] = a["x-publicId"], l["x-systemId"] = a["x-systemId"]), t = l;
  } else
    throw new Error("Not implemented yet: ".concat(a.type));
  return t.startIndex = a.startIndex, t.endIndex = a.endIndex, a.sourceCodeLocation != null && (t.sourceCodeLocation = a.sourceCodeLocation), t;
}
de.cloneNode = Mu;
function sn(a) {
  for (var e = a.map(function(r) {
    return Mu(r, !0);
  }), t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t];
  return e;
}
(function(a) {
  var e = ue && ue.__createBinding || (Object.create ? function(l, s, f, m) {
    m === void 0 && (m = f);
    var b = Object.getOwnPropertyDescriptor(s, f);
    (!b || ("get" in b ? !s.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return s[f];
    } }), Object.defineProperty(l, m, b);
  } : function(l, s, f, m) {
    m === void 0 && (m = f), l[m] = s[f];
  }), t = ue && ue.__exportStar || function(l, s) {
    for (var f in l) f !== "default" && !Object.prototype.hasOwnProperty.call(s, f) && e(s, l, f);
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.DomHandler = void 0;
  var r = O0, n = de;
  t(de, a);
  var u = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, i = (
    /** @class */
    function() {
      function l(s, f, m) {
        this.dom = [], this.root = new n.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof f == "function" && (m = f, f = u), typeof s == "object" && (f = s, s = void 0), this.callback = s ?? null, this.options = f ?? u, this.elementCB = m ?? null;
      }
      return l.prototype.onparserinit = function(s) {
        this.parser = s;
      }, l.prototype.onreset = function() {
        this.dom = [], this.root = new n.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, l.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, l.prototype.onerror = function(s) {
        this.handleCallback(s);
      }, l.prototype.onclosetag = function() {
        this.lastNode = null;
        var s = this.tagStack.pop();
        this.options.withEndIndices && (s.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(s);
      }, l.prototype.onopentag = function(s, f) {
        var m = this.options.xmlMode ? r.ElementType.Tag : void 0, b = new n.Element(s, f, void 0, m);
        this.addNode(b), this.tagStack.push(b);
      }, l.prototype.ontext = function(s) {
        var f = this.lastNode;
        if (f && f.type === r.ElementType.Text)
          f.data += s, this.options.withEndIndices && (f.endIndex = this.parser.endIndex);
        else {
          var m = new n.Text(s);
          this.addNode(m), this.lastNode = m;
        }
      }, l.prototype.oncomment = function(s) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += s;
          return;
        }
        var f = new n.Comment(s);
        this.addNode(f), this.lastNode = f;
      }, l.prototype.oncommentend = function() {
        this.lastNode = null;
      }, l.prototype.oncdatastart = function() {
        var s = new n.Text(""), f = new n.CDATA([s]);
        this.addNode(f), s.parent = f, this.lastNode = s;
      }, l.prototype.oncdataend = function() {
        this.lastNode = null;
      }, l.prototype.onprocessinginstruction = function(s, f) {
        var m = new n.ProcessingInstruction(s, f);
        this.addNode(m);
      }, l.prototype.handleCallback = function(s) {
        if (typeof this.callback == "function")
          this.callback(s, this.dom);
        else if (s)
          throw s;
      }, l.prototype.addNode = function(s) {
        var f = this.tagStack[this.tagStack.length - 1], m = f.children[f.children.length - 1];
        this.options.withStartIndices && (s.startIndex = this.parser.startIndex), this.options.withEndIndices && (s.endIndex = this.parser.endIndex), f.children.push(s), m && (s.prev = m, m.next = s), s.parent = f, this.lastNode = null;
      }, l;
    }()
  );
  a.DomHandler = i, a.default = i;
})(Vt);
var Qr = {}, tt = {}, mr = {}, Oo = {}, c0 = {}, _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
function Br(a) {
  for (var e = 1; e < a.length; e++)
    a[e][0] += a[e - 1][0] + 1;
  return a;
}
_u.default = new Map(/* @__PURE__ */ Br([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ Br([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ Br([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ Br([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var da = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.escapeText = a.escapeAttribute = a.escapeUTF8 = a.escape = a.encodeXML = a.getCodePoint = a.xmlReplacer = void 0, a.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var e = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  a.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(n, u) {
    return n.codePointAt(u);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(n, u) {
      return (n.charCodeAt(u) & 64512) === 55296 ? (n.charCodeAt(u) - 55296) * 1024 + n.charCodeAt(u + 1) - 56320 + 65536 : n.charCodeAt(u);
    }
  );
  function t(n) {
    for (var u = "", i = 0, l; (l = a.xmlReplacer.exec(n)) !== null; ) {
      var s = l.index, f = n.charCodeAt(s), m = e.get(f);
      m !== void 0 ? (u += n.substring(i, s) + m, i = s + 1) : (u += "".concat(n.substring(i, s), "&#x").concat((0, a.getCodePoint)(n, s).toString(16), ";"), i = a.xmlReplacer.lastIndex += +((f & 64512) === 55296));
    }
    return u + n.substr(i);
  }
  a.encodeXML = t, a.escape = t;
  function r(n, u) {
    return function(l) {
      for (var s, f = 0, m = ""; s = n.exec(l); )
        f !== s.index && (m += l.substring(f, s.index)), m += u.get(s[0].charCodeAt(0)), f = s.index + 1;
      return m + l.substring(f);
    };
  }
  a.escapeUTF8 = r(/[&<>'"]/g, e), a.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), a.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(da);
var Ld = ue && ue.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(c0, "__esModule", { value: !0 });
c0.encodeNonAsciiHTML = c0.encodeHTML = void 0;
var zd = Ld(_u), Bo = da, Pd = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function qd(a) {
  return Io(Pd, a);
}
c0.encodeHTML = qd;
function Hd(a) {
  return Io(Bo.xmlReplacer, a);
}
c0.encodeNonAsciiHTML = Hd;
function Io(a, e) {
  for (var t = "", r = 0, n; (n = a.exec(e)) !== null; ) {
    var u = n.index;
    t += e.substring(r, u);
    var i = e.charCodeAt(u), l = zd.default.get(i);
    if (typeof l == "object") {
      if (u + 1 < e.length) {
        var s = e.charCodeAt(u + 1), f = typeof l.n == "number" ? l.n === s ? l.o : void 0 : l.n.get(s);
        if (f !== void 0) {
          t += f, r = a.lastIndex += 1;
          continue;
        }
      }
      l = l.v;
    }
    if (l !== void 0)
      t += l, r = u + 1;
    else {
      var m = (0, Bo.getCodePoint)(e, u);
      t += "&#x".concat(m.toString(16), ";"), r = a.lastIndex += +(m !== i);
    }
  }
  return t + e.substr(r);
}
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.decodeXMLStrict = a.decodeHTML5Strict = a.decodeHTML4Strict = a.decodeHTML5 = a.decodeHTML4 = a.decodeHTMLAttribute = a.decodeHTMLStrict = a.decodeHTML = a.decodeXML = a.DecodingMode = a.EntityDecoder = a.encodeHTML5 = a.encodeHTML4 = a.encodeNonAsciiHTML = a.encodeHTML = a.escapeText = a.escapeAttribute = a.escapeUTF8 = a.escape = a.encodeXML = a.encode = a.decodeStrict = a.decode = a.EncodingMode = a.EntityLevel = void 0;
  var e = rr, t = c0, r = da, n;
  (function(h) {
    h[h.XML = 0] = "XML", h[h.HTML = 1] = "HTML";
  })(n = a.EntityLevel || (a.EntityLevel = {}));
  var u;
  (function(h) {
    h[h.UTF8 = 0] = "UTF8", h[h.ASCII = 1] = "ASCII", h[h.Extensive = 2] = "Extensive", h[h.Attribute = 3] = "Attribute", h[h.Text = 4] = "Text";
  })(u = a.EncodingMode || (a.EncodingMode = {}));
  function i(h, d) {
    d === void 0 && (d = n.XML);
    var k = typeof d == "number" ? d : d.level;
    if (k === n.HTML) {
      var E = typeof d == "object" ? d.mode : void 0;
      return (0, e.decodeHTML)(h, E);
    }
    return (0, e.decodeXML)(h);
  }
  a.decode = i;
  function l(h, d) {
    var k;
    d === void 0 && (d = n.XML);
    var E = typeof d == "number" ? { level: d } : d;
    return (k = E.mode) !== null && k !== void 0 || (E.mode = e.DecodingMode.Strict), i(h, E);
  }
  a.decodeStrict = l;
  function s(h, d) {
    d === void 0 && (d = n.XML);
    var k = typeof d == "number" ? { level: d } : d;
    return k.mode === u.UTF8 ? (0, r.escapeUTF8)(h) : k.mode === u.Attribute ? (0, r.escapeAttribute)(h) : k.mode === u.Text ? (0, r.escapeText)(h) : k.level === n.HTML ? k.mode === u.ASCII ? (0, t.encodeNonAsciiHTML)(h) : (0, t.encodeHTML)(h) : (0, r.encodeXML)(h);
  }
  a.encode = s;
  var f = da;
  Object.defineProperty(a, "encodeXML", { enumerable: !0, get: function() {
    return f.encodeXML;
  } }), Object.defineProperty(a, "escape", { enumerable: !0, get: function() {
    return f.escape;
  } }), Object.defineProperty(a, "escapeUTF8", { enumerable: !0, get: function() {
    return f.escapeUTF8;
  } }), Object.defineProperty(a, "escapeAttribute", { enumerable: !0, get: function() {
    return f.escapeAttribute;
  } }), Object.defineProperty(a, "escapeText", { enumerable: !0, get: function() {
    return f.escapeText;
  } });
  var m = c0;
  Object.defineProperty(a, "encodeHTML", { enumerable: !0, get: function() {
    return m.encodeHTML;
  } }), Object.defineProperty(a, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return m.encodeNonAsciiHTML;
  } }), Object.defineProperty(a, "encodeHTML4", { enumerable: !0, get: function() {
    return m.encodeHTML;
  } }), Object.defineProperty(a, "encodeHTML5", { enumerable: !0, get: function() {
    return m.encodeHTML;
  } });
  var b = rr;
  Object.defineProperty(a, "EntityDecoder", { enumerable: !0, get: function() {
    return b.EntityDecoder;
  } }), Object.defineProperty(a, "DecodingMode", { enumerable: !0, get: function() {
    return b.DecodingMode;
  } }), Object.defineProperty(a, "decodeXML", { enumerable: !0, get: function() {
    return b.decodeXML;
  } }), Object.defineProperty(a, "decodeHTML", { enumerable: !0, get: function() {
    return b.decodeHTML;
  } }), Object.defineProperty(a, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return b.decodeHTMLStrict;
  } }), Object.defineProperty(a, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return b.decodeHTMLAttribute;
  } }), Object.defineProperty(a, "decodeHTML4", { enumerable: !0, get: function() {
    return b.decodeHTML;
  } }), Object.defineProperty(a, "decodeHTML5", { enumerable: !0, get: function() {
    return b.decodeHTML;
  } }), Object.defineProperty(a, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return b.decodeHTMLStrict;
  } }), Object.defineProperty(a, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return b.decodeHTMLStrict;
  } }), Object.defineProperty(a, "decodeXMLStrict", { enumerable: !0, get: function() {
    return b.decodeXML;
  } });
})(Oo);
var E0 = {};
Object.defineProperty(E0, "__esModule", { value: !0 });
E0.attributeNames = E0.elementNames = void 0;
E0.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(a) {
  return [a.toLowerCase(), a];
}));
E0.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(a) {
  return [a.toLowerCase(), a];
}));
var D0 = ue && ue.__assign || function() {
  return D0 = Object.assign || function(a) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
    }
    return a;
  }, D0.apply(this, arguments);
}, Ud = ue && ue.__createBinding || (Object.create ? function(a, e, t, r) {
  r === void 0 && (r = t);
  var n = Object.getOwnPropertyDescriptor(e, t);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(a, r, n);
} : function(a, e, t, r) {
  r === void 0 && (r = t), a[r] = e[t];
}), jd = ue && ue.__setModuleDefault || (Object.create ? function(a, e) {
  Object.defineProperty(a, "default", { enumerable: !0, value: e });
} : function(a, e) {
  a.default = e;
}), Gd = ue && ue.__importStar || function(a) {
  if (a && a.__esModule) return a;
  var e = {};
  if (a != null) for (var t in a) t !== "default" && Object.prototype.hasOwnProperty.call(a, t) && Ud(e, a, t);
  return jd(e, a), e;
};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.render = void 0;
var Lt = Gd(O0), ma = Oo, Ro = E0, Vd = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function $d(a) {
  return a.replace(/"/g, "&quot;");
}
function Wd(a, e) {
  var t;
  if (a) {
    var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? $d : e.xmlMode || e.encodeEntities !== "utf8" ? ma.encodeXML : ma.escapeAttribute;
    return Object.keys(a).map(function(n) {
      var u, i, l = (u = a[n]) !== null && u !== void 0 ? u : "";
      return e.xmlMode === "foreign" && (n = (i = Ro.attributeNames.get(n)) !== null && i !== void 0 ? i : n), !e.emptyAttrs && !e.xmlMode && l === "" ? n : "".concat(n, '="').concat(r(l), '"');
    }).join(" ");
  }
}
var hs = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Ma(a, e) {
  e === void 0 && (e = {});
  for (var t = ("length" in a) ? a : [a], r = "", n = 0; n < t.length; n++)
    r += Xd(t[n], e);
  return r;
}
mr.render = Ma;
mr.default = Ma;
function Xd(a, e) {
  switch (a.type) {
    case Lt.Root:
      return Ma(a.children, e);
    case Lt.Doctype:
    case Lt.Directive:
      return Kd(a);
    case Lt.Comment:
      return t2(a);
    case Lt.CDATA:
      return e2(a);
    case Lt.Script:
    case Lt.Style:
    case Lt.Tag:
      return Qd(a, e);
    case Lt.Text:
      return Jd(a, e);
  }
}
var Yd = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), Zd = /* @__PURE__ */ new Set(["svg", "math"]);
function Qd(a, e) {
  var t;
  e.xmlMode === "foreign" && (a.name = (t = Ro.elementNames.get(a.name)) !== null && t !== void 0 ? t : a.name, a.parent && Yd.has(a.parent.name) && (e = D0(D0({}, e), { xmlMode: !1 }))), !e.xmlMode && Zd.has(a.name) && (e = D0(D0({}, e), { xmlMode: "foreign" }));
  var r = "<".concat(a.name), n = Wd(a.attribs, e);
  return n && (r += " ".concat(n)), a.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && hs.has(a.name)
  )) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", a.children.length > 0 && (r += Ma(a.children, e)), (e.xmlMode || !hs.has(a.name)) && (r += "</".concat(a.name, ">"))), r;
}
function Kd(a) {
  return "<".concat(a.data, ">");
}
function Jd(a, e) {
  var t, r = a.data || "";
  return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && a.parent && Vd.has(a.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? (0, ma.encodeXML)(r) : (0, ma.escapeText)(r)), r;
}
function e2(a) {
  return "<![CDATA[".concat(a.children[0].data, "]]>");
}
function t2(a) {
  return "<!--".concat(a.data, "-->");
}
var r2 = ue && ue.__importDefault || function(a) {
  return a && a.__esModule ? a : { default: a };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.innerText = tt.textContent = tt.getText = tt.getInnerHTML = tt.getOuterHTML = void 0;
var Tt = Vt, a2 = r2(mr), n2 = O0;
function Lo(a, e) {
  return (0, a2.default)(a, e);
}
tt.getOuterHTML = Lo;
function u2(a, e) {
  return (0, Tt.hasChildren)(a) ? a.children.map(function(t) {
    return Lo(t, e);
  }).join("") : "";
}
tt.getInnerHTML = u2;
function Kr(a) {
  return Array.isArray(a) ? a.map(Kr).join("") : (0, Tt.isTag)(a) ? a.name === "br" ? `
` : Kr(a.children) : (0, Tt.isCDATA)(a) ? Kr(a.children) : (0, Tt.isText)(a) ? a.data : "";
}
tt.getText = Kr;
function _n(a) {
  return Array.isArray(a) ? a.map(_n).join("") : (0, Tt.hasChildren)(a) && !(0, Tt.isComment)(a) ? _n(a.children) : (0, Tt.isText)(a) ? a.data : "";
}
tt.textContent = _n;
function Nn(a) {
  return Array.isArray(a) ? a.map(Nn).join("") : (0, Tt.hasChildren)(a) && (a.type === n2.ElementType.Tag || (0, Tt.isCDATA)(a)) ? Nn(a.children) : (0, Tt.isText)(a) ? a.data : "";
}
tt.innerText = Nn;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.prevElementSibling = Be.nextElementSibling = Be.getName = Be.hasAttrib = Be.getAttributeValue = Be.getSiblings = Be.getParent = Be.getChildren = void 0;
var Nu = Vt;
function zo(a) {
  return (0, Nu.hasChildren)(a) ? a.children : [];
}
Be.getChildren = zo;
function Po(a) {
  return a.parent || null;
}
Be.getParent = Po;
function i2(a) {
  var e, t, r = Po(a);
  if (r != null)
    return zo(r);
  for (var n = [a], u = a.prev, i = a.next; u != null; )
    n.unshift(u), e = u, u = e.prev;
  for (; i != null; )
    n.push(i), t = i, i = t.next;
  return n;
}
Be.getSiblings = i2;
function s2(a, e) {
  var t;
  return (t = a.attribs) === null || t === void 0 ? void 0 : t[e];
}
Be.getAttributeValue = s2;
function l2(a, e) {
  return a.attribs != null && Object.prototype.hasOwnProperty.call(a.attribs, e) && a.attribs[e] != null;
}
Be.hasAttrib = l2;
function o2(a) {
  return a.name;
}
Be.getName = o2;
function c2(a) {
  for (var e, t = a.next; t !== null && !(0, Nu.isTag)(t); )
    e = t, t = e.next;
  return t;
}
Be.nextElementSibling = c2;
function f2(a) {
  for (var e, t = a.prev; t !== null && !(0, Nu.isTag)(t); )
    e = t, t = e.prev;
  return t;
}
Be.prevElementSibling = f2;
var Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.prepend = Ye.prependChild = Ye.append = Ye.appendChild = Ye.replaceElement = Ye.removeElement = void 0;
function pr(a) {
  if (a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.parent) {
    var e = a.parent.children, t = e.lastIndexOf(a);
    t >= 0 && e.splice(t, 1);
  }
  a.next = null, a.prev = null, a.parent = null;
}
Ye.removeElement = pr;
function h2(a, e) {
  var t = e.prev = a.prev;
  t && (t.next = e);
  var r = e.next = a.next;
  r && (r.prev = e);
  var n = e.parent = a.parent;
  if (n) {
    var u = n.children;
    u[u.lastIndexOf(a)] = e, a.parent = null;
  }
}
Ye.replaceElement = h2;
function d2(a, e) {
  if (pr(e), e.next = null, e.parent = a, a.children.push(e) > 1) {
    var t = a.children[a.children.length - 2];
    t.next = e, e.prev = t;
  } else
    e.prev = null;
}
Ye.appendChild = d2;
function m2(a, e) {
  pr(e);
  var t = a.parent, r = a.next;
  if (e.next = r, e.prev = a, a.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
      var n = t.children;
      n.splice(n.lastIndexOf(r), 0, e);
    }
  } else t && t.children.push(e);
}
Ye.append = m2;
function p2(a, e) {
  if (pr(e), e.parent = a, e.prev = null, a.children.unshift(e) !== 1) {
    var t = a.children[1];
    t.prev = e, e.next = t;
  } else
    e.next = null;
}
Ye.prependChild = p2;
function g2(a, e) {
  pr(e);
  var t = a.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(a), 0, e);
  }
  a.prev && (a.prev.next = e), e.parent = t, e.prev = a.prev, e.next = a, a.prev = e;
}
Ye.prepend = g2;
var He = {};
Object.defineProperty(He, "__esModule", { value: !0 });
He.findAll = He.existsOne = He.findOne = He.findOneChild = He.find = He.filter = void 0;
var _a = Vt;
function b2(a, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), qo(a, Array.isArray(e) ? e : [e], t, r);
}
He.filter = b2;
function qo(a, e, t, r) {
  for (var n = [], u = [e], i = [0]; ; ) {
    if (i[0] >= u[0].length) {
      if (i.length === 1)
        return n;
      u.shift(), i.shift();
      continue;
    }
    var l = u[0][i[0]++];
    if (a(l) && (n.push(l), --r <= 0))
      return n;
    t && (0, _a.hasChildren)(l) && l.children.length > 0 && (i.unshift(0), u.unshift(l.children));
  }
}
He.find = qo;
function v2(a, e) {
  return e.find(a);
}
He.findOneChild = v2;
function Ho(a, e, t) {
  t === void 0 && (t = !0);
  for (var r = null, n = 0; n < e.length && !r; n++) {
    var u = e[n];
    if ((0, _a.isTag)(u))
      a(u) ? r = u : t && u.children.length > 0 && (r = Ho(a, u.children, !0));
    else continue;
  }
  return r;
}
He.findOne = Ho;
function Uo(a, e) {
  return e.some(function(t) {
    return (0, _a.isTag)(t) && (a(t) || Uo(a, t.children));
  });
}
He.existsOne = Uo;
function y2(a, e) {
  for (var t = [], r = [e], n = [0]; ; ) {
    if (n[0] >= r[0].length) {
      if (r.length === 1)
        return t;
      r.shift(), n.shift();
      continue;
    }
    var u = r[0][n[0]++];
    (0, _a.isTag)(u) && (a(u) && t.push(u), u.children.length > 0 && (n.unshift(0), r.unshift(u.children)));
  }
}
He.findAll = y2;
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.getElementsByTagType = rt.getElementsByTagName = rt.getElementById = rt.getElements = rt.testElement = void 0;
var l0 = Vt, Na = He, pa = {
  tag_name: function(a) {
    return typeof a == "function" ? function(e) {
      return (0, l0.isTag)(e) && a(e.name);
    } : a === "*" ? l0.isTag : function(e) {
      return (0, l0.isTag)(e) && e.name === a;
    };
  },
  tag_type: function(a) {
    return typeof a == "function" ? function(e) {
      return a(e.type);
    } : function(e) {
      return e.type === a;
    };
  },
  tag_contains: function(a) {
    return typeof a == "function" ? function(e) {
      return (0, l0.isText)(e) && a(e.data);
    } : function(e) {
      return (0, l0.isText)(e) && e.data === a;
    };
  }
};
function jo(a, e) {
  return typeof e == "function" ? function(t) {
    return (0, l0.isTag)(t) && e(t.attribs[a]);
  } : function(t) {
    return (0, l0.isTag)(t) && t.attribs[a] === e;
  };
}
function x2(a, e) {
  return function(t) {
    return a(t) || e(t);
  };
}
function Go(a) {
  var e = Object.keys(a).map(function(t) {
    var r = a[t];
    return Object.prototype.hasOwnProperty.call(pa, t) ? pa[t](r) : jo(t, r);
  });
  return e.length === 0 ? null : e.reduce(x2);
}
function w2(a, e) {
  var t = Go(a);
  return t ? t(e) : !0;
}
rt.testElement = w2;
function A2(a, e, t, r) {
  r === void 0 && (r = 1 / 0);
  var n = Go(a);
  return n ? (0, Na.filter)(n, e, t, r) : [];
}
rt.getElements = A2;
function D2(a, e, t) {
  return t === void 0 && (t = !0), Array.isArray(e) || (e = [e]), (0, Na.findOne)(jo("id", a), e, t);
}
rt.getElementById = D2;
function S2(a, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Na.filter)(pa.tag_name(a), e, t, r);
}
rt.getElementsByTagName = S2;
function k2(a, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Na.filter)(pa.tag_type(a), e, t, r);
}
rt.getElementsByTagType = k2;
var Vo = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.uniqueSort = a.compareDocumentPosition = a.DocumentPosition = a.removeSubsets = void 0;
  var e = Vt;
  function t(i) {
    for (var l = i.length; --l >= 0; ) {
      var s = i[l];
      if (l > 0 && i.lastIndexOf(s, l - 1) >= 0) {
        i.splice(l, 1);
        continue;
      }
      for (var f = s.parent; f; f = f.parent)
        if (i.includes(f)) {
          i.splice(l, 1);
          break;
        }
    }
    return i;
  }
  a.removeSubsets = t;
  var r;
  (function(i) {
    i[i.DISCONNECTED = 1] = "DISCONNECTED", i[i.PRECEDING = 2] = "PRECEDING", i[i.FOLLOWING = 4] = "FOLLOWING", i[i.CONTAINS = 8] = "CONTAINS", i[i.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = a.DocumentPosition || (a.DocumentPosition = {}));
  function n(i, l) {
    var s = [], f = [];
    if (i === l)
      return 0;
    for (var m = (0, e.hasChildren)(i) ? i : i.parent; m; )
      s.unshift(m), m = m.parent;
    for (m = (0, e.hasChildren)(l) ? l : l.parent; m; )
      f.unshift(m), m = m.parent;
    for (var b = Math.min(s.length, f.length), h = 0; h < b && s[h] === f[h]; )
      h++;
    if (h === 0)
      return r.DISCONNECTED;
    var d = s[h - 1], k = d.children, E = s[h], w = f[h];
    return k.indexOf(E) > k.indexOf(w) ? d === l ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : d === i ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  a.compareDocumentPosition = n;
  function u(i) {
    return i = i.filter(function(l, s, f) {
      return !f.includes(l, s + 1);
    }), i.sort(function(l, s) {
      var f = n(l, s);
      return f & r.PRECEDING ? -1 : f & r.FOLLOWING ? 1 : 0;
    }), i;
  }
  a.uniqueSort = u;
})(Vo);
var Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.getFeed = void 0;
var E2 = tt, gr = rt;
function T2(a) {
  var e = ga(N2, a);
  return e ? e.name === "feed" ? C2(e) : F2(e) : null;
}
Oa.getFeed = T2;
function C2(a) {
  var e, t = a.children, r = {
    type: "atom",
    items: (0, gr.getElementsByTagName)("entry", t).map(function(i) {
      var l, s = i.children, f = { media: $o(s) };
      Xe(f, "id", "id", s), Xe(f, "title", "title", s);
      var m = (l = ga("link", s)) === null || l === void 0 ? void 0 : l.attribs.href;
      m && (f.link = m);
      var b = Kt("summary", s) || Kt("content", s);
      b && (f.description = b);
      var h = Kt("updated", s);
      return h && (f.pubDate = new Date(h)), f;
    })
  };
  Xe(r, "id", "id", t), Xe(r, "title", "title", t);
  var n = (e = ga("link", t)) === null || e === void 0 ? void 0 : e.attribs.href;
  n && (r.link = n), Xe(r, "description", "subtitle", t);
  var u = Kt("updated", t);
  return u && (r.updated = new Date(u)), Xe(r, "author", "email", t, !0), r;
}
function F2(a) {
  var e, t, r = (t = (e = ga("channel", a.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], n = {
    type: a.name.substr(0, 3),
    id: "",
    items: (0, gr.getElementsByTagName)("item", a.children).map(function(i) {
      var l = i.children, s = { media: $o(l) };
      Xe(s, "id", "guid", l), Xe(s, "title", "title", l), Xe(s, "link", "link", l), Xe(s, "description", "description", l);
      var f = Kt("pubDate", l) || Kt("dc:date", l);
      return f && (s.pubDate = new Date(f)), s;
    })
  };
  Xe(n, "title", "title", r), Xe(n, "link", "link", r), Xe(n, "description", "description", r);
  var u = Kt("lastBuildDate", r);
  return u && (n.updated = new Date(u)), Xe(n, "author", "managingEditor", r, !0), n;
}
var M2 = ["url", "type", "lang"], _2 = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function $o(a) {
  return (0, gr.getElementsByTagName)("media:content", a).map(function(e) {
    for (var t = e.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, n = 0, u = M2; n < u.length; n++) {
      var i = u[n];
      t[i] && (r[i] = t[i]);
    }
    for (var l = 0, s = _2; l < s.length; l++) {
      var i = s[l];
      t[i] && (r[i] = parseInt(t[i], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function ga(a, e) {
  return (0, gr.getElementsByTagName)(a, e, !0, 1)[0];
}
function Kt(a, e, t) {
  return t === void 0 && (t = !1), (0, E2.textContent)((0, gr.getElementsByTagName)(a, e, t, 1)).trim();
}
function Xe(a, e, t, r, n) {
  n === void 0 && (n = !1);
  var u = Kt(t, r, n);
  u && (a[e] = u);
}
function N2(a) {
  return a === "rss" || a === "feed" || a === "rdf:RDF";
}
(function(a) {
  var e = ue && ue.__createBinding || (Object.create ? function(n, u, i, l) {
    l === void 0 && (l = i);
    var s = Object.getOwnPropertyDescriptor(u, i);
    (!s || ("get" in s ? !u.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return u[i];
    } }), Object.defineProperty(n, l, s);
  } : function(n, u, i, l) {
    l === void 0 && (l = i), n[l] = u[i];
  }), t = ue && ue.__exportStar || function(n, u) {
    for (var i in n) i !== "default" && !Object.prototype.hasOwnProperty.call(u, i) && e(u, n, i);
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.hasChildren = a.isDocument = a.isComment = a.isText = a.isCDATA = a.isTag = void 0, t(tt, a), t(Be, a), t(Ye, a), t(He, a), t(rt, a), t(Vo, a), t(Oa, a);
  var r = Vt;
  Object.defineProperty(a, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(a, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(a, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(a, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(a, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(a, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(Qr);
(function(a) {
  var e = ue && ue.__createBinding || (Object.create ? function(F, x, D, A) {
    A === void 0 && (A = D);
    var _ = Object.getOwnPropertyDescriptor(x, D);
    (!_ || ("get" in _ ? !x.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return x[D];
    } }), Object.defineProperty(F, A, _);
  } : function(F, x, D, A) {
    A === void 0 && (A = D), F[A] = x[D];
  }), t = ue && ue.__setModuleDefault || (Object.create ? function(F, x) {
    Object.defineProperty(F, "default", { enumerable: !0, value: x });
  } : function(F, x) {
    F.default = x;
  }), r = ue && ue.__importStar || function(F) {
    if (F && F.__esModule) return F;
    var x = {};
    if (F != null) for (var D in F) D !== "default" && Object.prototype.hasOwnProperty.call(F, D) && e(x, F, D);
    return t(x, F), x;
  }, n = ue && ue.__importDefault || function(F) {
    return F && F.__esModule ? F : { default: F };
  };
  Object.defineProperty(a, "__esModule", { value: !0 }), a.DomUtils = a.parseFeed = a.getFeed = a.ElementType = a.Tokenizer = a.createDomStream = a.parseDOM = a.parseDocument = a.DefaultHandler = a.DomHandler = a.Parser = void 0;
  var u = tr, i = tr;
  Object.defineProperty(a, "Parser", { enumerable: !0, get: function() {
    return i.Parser;
  } });
  var l = Vt, s = Vt;
  Object.defineProperty(a, "DomHandler", { enumerable: !0, get: function() {
    return s.DomHandler;
  } }), Object.defineProperty(a, "DefaultHandler", { enumerable: !0, get: function() {
    return s.DomHandler;
  } });
  function f(F, x) {
    var D = new l.DomHandler(void 0, x);
    return new u.Parser(D, x).end(F), D.root;
  }
  a.parseDocument = f;
  function m(F, x) {
    return f(F, x).children;
  }
  a.parseDOM = m;
  function b(F, x, D) {
    var A = new l.DomHandler(F, x, D);
    return new u.Parser(A, x);
  }
  a.createDomStream = b;
  var h = Eu;
  Object.defineProperty(a, "Tokenizer", { enumerable: !0, get: function() {
    return n(h).default;
  } }), a.ElementType = r(O0);
  var d = Qr, k = Qr;
  Object.defineProperty(a, "getFeed", { enumerable: !0, get: function() {
    return k.getFeed;
  } });
  var E = { xmlMode: !0 };
  function w(F, x) {
    return x === void 0 && (x = E), (0, d.getFeed)(m(F, x));
  }
  a.parseFeed = w, a.DomUtils = r(Qr);
})(xo);
var O2 = (a) => {
  if (typeof a != "string")
    throw new TypeError("Expected a string");
  return a.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function ds(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function B2(a) {
  var e, t;
  return ds(a) === !1 ? !1 : (e = a.constructor, e === void 0 ? !0 : (t = e.prototype, !(ds(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
Ou.isPlainObject = B2;
var I2 = function(e) {
  return R2(e) && !L2(e);
};
function R2(a) {
  return !!a && typeof a == "object";
}
function L2(a) {
  var e = Object.prototype.toString.call(a);
  return e === "[object RegExp]" || e === "[object Date]" || q2(a);
}
var z2 = typeof Symbol == "function" && Symbol.for, P2 = z2 ? Symbol.for("react.element") : 60103;
function q2(a) {
  return a.$$typeof === P2;
}
function H2(a) {
  return Array.isArray(a) ? [] : {};
}
function ar(a, e) {
  return e.clone !== !1 && e.isMergeableObject(a) ? T0(H2(a), a, e) : a;
}
function U2(a, e, t) {
  return a.concat(e).map(function(r) {
    return ar(r, t);
  });
}
function j2(a, e) {
  if (!e.customMerge)
    return T0;
  var t = e.customMerge(a);
  return typeof t == "function" ? t : T0;
}
function G2(a) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(a).filter(function(e) {
    return Object.propertyIsEnumerable.call(a, e);
  }) : [];
}
function ms(a) {
  return Object.keys(a).concat(G2(a));
}
function Wo(a, e) {
  try {
    return e in a;
  } catch {
    return !1;
  }
}
function V2(a, e) {
  return Wo(a, e) && !(Object.hasOwnProperty.call(a, e) && Object.propertyIsEnumerable.call(a, e));
}
function $2(a, e, t) {
  var r = {};
  return t.isMergeableObject(a) && ms(a).forEach(function(n) {
    r[n] = ar(a[n], t);
  }), ms(e).forEach(function(n) {
    V2(a, n) || (Wo(a, n) && t.isMergeableObject(e[n]) ? r[n] = j2(n, t)(a[n], e[n], t) : r[n] = ar(e[n], t));
  }), r;
}
function T0(a, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || U2, t.isMergeableObject = t.isMergeableObject || I2, t.cloneUnlessOtherwiseSpecified = ar;
  var r = Array.isArray(e), n = Array.isArray(a), u = r === n;
  return u ? r ? t.arrayMerge(a, e, t) : $2(a, e, t) : ar(e, t);
}
T0.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, n) {
    return T0(r, n, t);
  }, {});
};
var W2 = T0, X2 = W2, Xo = { exports: {} };
(function(a) {
  (function(e, t) {
    a.exports ? a.exports = t() : e.parseSrcset = t();
  })(ue, function() {
    return function(e) {
      function t(A) {
        return A === " " || // space
        A === "	" || // horizontal tab
        A === `
` || // new line
        A === "\f" || // form feed
        A === "\r";
      }
      function r(A) {
        var _, B = A.exec(e.substring(w));
        if (B)
          return _ = B[0], w += _.length, _;
      }
      for (var n = e.length, u = /^[ \t\n\r\u000c]+/, i = /^[, \t\n\r\u000c]+/, l = /^[^ \t\n\r\u000c]+/, s = /[,]+$/, f = /^\d+$/, m = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, b, h, d, k, E, w = 0, F = []; ; ) {
        if (r(i), w >= n)
          return F;
        b = r(l), h = [], b.slice(-1) === "," ? (b = b.replace(s, ""), D()) : x();
      }
      function x() {
        for (r(u), d = "", k = "in descriptor"; ; ) {
          if (E = e.charAt(w), k === "in descriptor")
            if (t(E))
              d && (h.push(d), d = "", k = "after descriptor");
            else if (E === ",") {
              w += 1, d && h.push(d), D();
              return;
            } else if (E === "(")
              d = d + E, k = "in parens";
            else if (E === "") {
              d && h.push(d), D();
              return;
            } else
              d = d + E;
          else if (k === "in parens")
            if (E === ")")
              d = d + E, k = "in descriptor";
            else if (E === "") {
              h.push(d), D();
              return;
            } else
              d = d + E;
          else if (k === "after descriptor" && !t(E))
            if (E === "") {
              D();
              return;
            } else
              k = "in descriptor", w -= 1;
          w += 1;
        }
      }
      function D() {
        var A = !1, _, B, O, H, R = {}, L, C, I, j, X;
        for (H = 0; H < h.length; H++)
          L = h[H], C = L[L.length - 1], I = L.substring(0, L.length - 1), j = parseInt(I, 10), X = parseFloat(I), f.test(I) && C === "w" ? ((_ || B) && (A = !0), j === 0 ? A = !0 : _ = j) : m.test(I) && C === "x" ? ((_ || B || O) && (A = !0), X < 0 ? A = !0 : B = X) : f.test(I) && C === "h" ? ((O || B) && (A = !0), j === 0 ? A = !0 : O = j) : A = !0;
        A ? console && console.log && console.log("Invalid srcset descriptor found in '" + e + "' at '" + L + "'.") : (R.url = b, _ && (R.w = _), B && (R.d = B), O && (R.h = O), F.push(R));
      }
    };
  });
})(Xo);
var Y2 = Xo.exports, Bu = { exports: {} }, oe = String, Yo = function() {
  return { isColorSupported: !1, reset: oe, bold: oe, dim: oe, italic: oe, underline: oe, inverse: oe, hidden: oe, strikethrough: oe, black: oe, red: oe, green: oe, yellow: oe, blue: oe, magenta: oe, cyan: oe, white: oe, gray: oe, bgBlack: oe, bgRed: oe, bgGreen: oe, bgYellow: oe, bgBlue: oe, bgMagenta: oe, bgCyan: oe, bgWhite: oe, blackBright: oe, redBright: oe, greenBright: oe, yellowBright: oe, blueBright: oe, magentaBright: oe, cyanBright: oe, whiteBright: oe, bgBlackBright: oe, bgRedBright: oe, bgGreenBright: oe, bgYellowBright: oe, bgBlueBright: oe, bgMagentaBright: oe, bgCyanBright: oe, bgWhiteBright: oe };
};
Bu.exports = Yo();
Bu.exports.createColors = Yo;
var Z2 = Bu.exports;
const Q2 = {}, K2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q2
}, Symbol.toStringTag, { value: "Module" })), bt = /* @__PURE__ */ vd(K2);
let ps = Z2, gs = bt, On = class Zo extends Error {
  constructor(e, t, r, n, u, i) {
    super(e), this.name = "CssSyntaxError", this.reason = e, u && (this.file = u), n && (this.source = n), i && (this.plugin = i), typeof t < "u" && typeof r < "u" && (typeof t == "number" ? (this.line = t, this.column = r) : (this.line = t.line, this.column = t.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Zo);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = ps.isColorSupported);
    let r = (m) => m, n = (m) => m, u = (m) => m;
    if (e) {
      let { bold: m, gray: b, red: h } = ps.createColors(!0);
      n = (d) => m(h(d)), r = (d) => b(d), gs && (u = (d) => gs(d));
    }
    let i = t.split(/\r?\n/), l = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, i.length), f = String(s).length;
    return i.slice(l, s).map((m, b) => {
      let h = l + 1 + b, d = " " + (" " + h).slice(-f) + " | ";
      if (h === this.line) {
        if (m.length > 160) {
          let E = 20, w = Math.max(0, this.column - E), F = Math.max(
            this.column + E,
            this.endColumn + E
          ), x = m.slice(w, F), D = r(d.replace(/\d/g, " ")) + m.slice(0, Math.min(this.column - 1, E - 1)).replace(/[^\t]/g, " ");
          return n(">") + r(d) + u(x) + `
 ` + D + n("^");
        }
        let k = r(d.replace(/\d/g, " ")) + m.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return n(">") + r(d) + u(m) + `
 ` + k + n("^");
      }
      return " " + r(d) + u(m);
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var Iu = On;
On.default = On;
const bs = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function J2(a) {
  return a[0].toUpperCase() + a.slice(1);
}
let Bn = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let r = "@" + e.name, n = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? r += e.raws.afterName : n && (r += " "), e.nodes)
      this.block(e, r + n);
    else {
      let u = (e.raws.between || "") + (t ? ";" : "");
      this.builder(r + n + u, e);
    }
  }
  beforeAfter(e, t) {
    let r;
    e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : t === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
    let n = e.parent, u = 0;
    for (; n && n.type !== "root"; )
      u += 1, n = n.parent;
    if (r.includes(`
`)) {
      let i = this.raw(e, null, "indent");
      if (i.length)
        for (let l = 0; l < u; l++) r += i;
    }
    return r;
  }
  block(e, t) {
    let r = this.raw(e, "between", "beforeOpen");
    this.builder(t + r + "{", e, "start");
    let n;
    e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody"), n && this.builder(n), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let r = this.raw(e, "semicolon");
    for (let n = 0; n < e.nodes.length; n++) {
      let u = e.nodes[n], i = this.raw(u, "before");
      i && this.builder(i), this.stringify(u, t !== n || r);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + r + "*/", e);
  }
  decl(e, t) {
    let r = this.raw(e, "between", "colon"), n = e.prop + r + this.rawValue(e, "value");
    e.important && (n += e.raws.important || " !important"), t && (n += ";"), this.builder(n, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, r) {
    let n;
    if (r || (r = t), t && (n = e.raws[t], typeof n < "u"))
      return n;
    let u = e.parent;
    if (r === "before" && (!u || u.type === "root" && u.first === e || u && u.type === "document"))
      return "";
    if (!u) return bs[r];
    let i = e.root();
    if (i.rawCache || (i.rawCache = {}), typeof i.rawCache[r] < "u")
      return i.rawCache[r];
    if (r === "before" || r === "after")
      return this.beforeAfter(e, r);
    {
      let l = "raw" + J2(r);
      this[l] ? n = this[l](i, e) : i.walk((s) => {
        if (n = s.raws[t], typeof n < "u") return !1;
      });
    }
    return typeof n > "u" && (n = bs[r]), i.rawCache[r] = n, n;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
        return t = r.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let r;
    return e.walkComments((n) => {
      if (typeof n.raws.before < "u")
        return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeDecl(e, t) {
    let r;
    return e.walkDecls((n) => {
      if (typeof n.raws.before < "u")
        return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((r) => {
      if (r.type !== "decl" && (t = r.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u")
        return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((r) => {
      if (typeof r.raws.between < "u")
        return t = r.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length === 0 && (t = r.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((r) => {
      let n = r.parent;
      if (n && n !== e && n.parent && n.parent === e && typeof r.raws.before < "u") {
        let u = r.raws.before.split(`
`);
        return t = u[u.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length && r.last.type === "decl" && (t = r.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let r = e[t], n = e.raws[t];
    return n && n.value === r ? n.raw : r;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var Qo = Bn;
Bn.default = Bn;
let e4 = Qo;
function In(a, e) {
  new e4(e).stringify(a);
}
var Ba = In;
In.default = In;
var br = {};
br.isClean = Symbol("isClean");
br.my = Symbol("my");
let t4 = Iu, r4 = Qo, a4 = Ba, { isClean: z0, my: n4 } = br;
function Rn(a, e) {
  let t = new a.constructor();
  for (let r in a) {
    if (!Object.prototype.hasOwnProperty.call(a, r) || r === "proxyCache") continue;
    let n = a[r], u = typeof n;
    r === "parent" && u === "object" ? e && (t[r] = e) : r === "source" ? t[r] = n : Array.isArray(n) ? t[r] = n.map((i) => Rn(i, t)) : (u === "object" && n !== null && (n = Rn(n)), t[r] = n);
  }
  return t;
}
let Ln = class {
  constructor(e = {}) {
    this.raws = {}, this[z0] = !1, this[n4] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let r of e[t])
          typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
      } else
        this[t] = e[t];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = Rn(this);
    for (let r in e)
      t[r] = e[r];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: r, start: n } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: n.column, line: n.line },
        { column: r.column, line: r.line },
        t
      );
    }
    return new t4(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[z0] = !0;
  }
  markDirty() {
    if (this[z0]) {
      this[z0] = !1;
      let e = this;
      for (; e = e.parent; )
        e[z0] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let r = this.source.start;
    if (e.index)
      r = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let n = t.indexOf(e.word);
      n !== -1 && (r = this.positionInside(n, t));
    }
    return r;
  }
  positionInside(e, t) {
    let r = t || this.toString(), n = this.source.start.column, u = this.source.start.line;
    for (let i = 0; i < e; i++)
      r[i] === `
` ? (n = 1, u += 1) : n += 1;
    return { column: n, line: u };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = {
      column: this.source.start.column,
      line: this.source.start.line
    }, r = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let n = this.toString(), u = n.indexOf(e.word);
      u !== -1 && (t = this.positionInside(u, n), r = this.positionInside(
        u + e.word.length,
        n
      ));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? r = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
    return (r.line < t.line || r.line === t.line && r.column <= t.column) && (r = { column: t.column + 1, line: t.line }), { end: r, start: t };
  }
  raw(e, t) {
    return new r4().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, r = !1;
      for (let n of e)
        n === this ? r = !0 : r ? (this.parent.insertAfter(t, n), t = n) : this.parent.insertBefore(t, n);
      r || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let r = {}, n = t == null;
    t = t || /* @__PURE__ */ new Map();
    let u = 0;
    for (let i in this) {
      if (!Object.prototype.hasOwnProperty.call(this, i) || i === "parent" || i === "proxyCache") continue;
      let l = this[i];
      if (Array.isArray(l))
        r[i] = l.map((s) => typeof s == "object" && s.toJSON ? s.toJSON(null, t) : s);
      else if (typeof l == "object" && l.toJSON)
        r[i] = l.toJSON(null, t);
      else if (i === "source") {
        let s = t.get(l.input);
        s == null && (s = u, t.set(l.input, u), u++), r[i] = {
          end: l.end,
          inputId: s,
          start: l.start
        };
      } else
        r[i] = l;
    }
    return n && (r.inputs = [...t.keys()].map((i) => i.toJSON())), r;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = a4) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (r) => {
      t += r;
    }), t;
  }
  warn(e, t, r) {
    let n = { node: this };
    for (let u in r) n[u] = r[u];
    return e.warn(t, n);
  }
  get proxyOf() {
    return this;
  }
};
var Ia = Ln;
Ln.default = Ln;
let u4 = Ia, zn = class extends u4 {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Ra = zn;
zn.default = zn;
let i4 = Ia, Pn = class extends i4 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var La = Pn;
Pn.default = Pn;
let Ko = Ra, Jo = La, s4 = Ia, { isClean: e1, my: t1 } = br, Ru, r1, a1, Lu;
function n1(a) {
  return a.map((e) => (e.nodes && (e.nodes = n1(e.nodes)), delete e.source, e));
}
function u1(a) {
  if (a[e1] = !1, a.proxyOf.nodes)
    for (let e of a.proxyOf.nodes)
      u1(e);
}
let $t = class i1 extends s4 {
  append(...e) {
    for (let t of e) {
      let r = this.normalize(t, this.last);
      for (let n of r) this.proxyOf.nodes.push(n);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), r, n;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (r = this.indexes[t], n = e(this.proxyOf.nodes[r], r), n !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], n;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...r) => e[t](
          ...r.map((n) => typeof n == "function" ? (u, i) => n(u.toProxy(), i) : n)
        ) : t === "every" || t === "some" ? (r) => e[t](
          (n, ...u) => r(n.toProxy(), ...u)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((r) => r.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let r = this.index(e), n = this.normalize(t, this.proxyOf.nodes[r]).reverse();
    r = this.index(e);
    for (let i of n) this.proxyOf.nodes.splice(r + 1, 0, i);
    let u;
    for (let i in this.indexes)
      u = this.indexes[i], r < u && (this.indexes[i] = u + n.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let r = this.index(e), n = r === 0 ? "prepend" : !1, u = this.normalize(
      t,
      this.proxyOf.nodes[r],
      n
    ).reverse();
    r = this.index(e);
    for (let l of u) this.proxyOf.nodes.splice(r, 0, l);
    let i;
    for (let l in this.indexes)
      i = this.indexes[l], r <= i && (this.indexes[l] = i + u.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = n1(r1(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Jo(e)];
    } else if (e.selector || e.selectors)
      e = [new Lu(e)];
    else if (e.name)
      e = [new Ru(e)];
    else if (e.text)
      e = [new Ko(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((n) => (n[t1] || i1.rebuild(n), n = n.proxyOf, n.parent && n.parent.removeChild(n), n[e1] && u1(n), n.raws || (n.raws = {}), typeof n.raws.before > "u" && t && typeof t.raws.before < "u" && (n.raws.before = t.raws.before.replace(/\S/g, "")), n.parent = this.proxyOf, n));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let r = this.normalize(t, this.first, "prepend").reverse();
      for (let n of r) this.proxyOf.nodes.unshift(n);
      for (let n in this.indexes)
        this.indexes[n] = this.indexes[n] + r.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let r in this.indexes)
      t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, r) {
    return r || (r = t, t = {}), this.walkDecls((n) => {
      t.props && !t.props.includes(n.prop) || t.fast && !n.value.includes(t.fast) || (n.value = n.value.replace(e, r));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, r) => {
      let n;
      try {
        n = e(t, r);
      } catch (u) {
        throw t.addToError(u);
      }
      return n !== !1 && t.walk && (n = t.walk(e)), n;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, n) => {
      if (r.type === "atrule" && e.test(r.name))
        return t(r, n);
    }) : this.walk((r, n) => {
      if (r.type === "atrule" && r.name === e)
        return t(r, n);
    }) : (t = e, this.walk((r, n) => {
      if (r.type === "atrule")
        return t(r, n);
    }));
  }
  walkComments(e) {
    return this.walk((t, r) => {
      if (t.type === "comment")
        return e(t, r);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, n) => {
      if (r.type === "decl" && e.test(r.prop))
        return t(r, n);
    }) : this.walk((r, n) => {
      if (r.type === "decl" && r.prop === e)
        return t(r, n);
    }) : (t = e, this.walk((r, n) => {
      if (r.type === "decl")
        return t(r, n);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, n) => {
      if (r.type === "rule" && e.test(r.selector))
        return t(r, n);
    }) : this.walk((r, n) => {
      if (r.type === "rule" && r.selector === e)
        return t(r, n);
    }) : (t = e, this.walk((r, n) => {
      if (r.type === "rule")
        return t(r, n);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
$t.registerParse = (a) => {
  r1 = a;
};
$t.registerRule = (a) => {
  Lu = a;
};
$t.registerAtRule = (a) => {
  Ru = a;
};
$t.registerRoot = (a) => {
  a1 = a;
};
var d0 = $t;
$t.default = $t;
$t.rebuild = (a) => {
  a.type === "atrule" ? Object.setPrototypeOf(a, Ru.prototype) : a.type === "rule" ? Object.setPrototypeOf(a, Lu.prototype) : a.type === "decl" ? Object.setPrototypeOf(a, Jo.prototype) : a.type === "comment" ? Object.setPrototypeOf(a, Ko.prototype) : a.type === "root" && Object.setPrototypeOf(a, a1.prototype), a[t1] = !0, a.nodes && a.nodes.forEach((e) => {
    $t.rebuild(e);
  });
};
let s1 = d0, ba = class extends s1 {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var zu = ba;
ba.default = ba;
s1.registerAtRule(ba);
let l4 = d0, l1, o1, nr = class extends l4 {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new l1(new o1(), this, e).stringify();
  }
};
nr.registerLazyResult = (a) => {
  l1 = a;
};
nr.registerProcessor = (a) => {
  o1 = a;
};
var Pu = nr;
nr.default = nr;
let o4 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", c4 = (a, e = 21) => (t = e) => {
  let r = "", n = t;
  for (; n--; )
    r += a[Math.random() * a.length | 0];
  return r;
}, f4 = (a = 21) => {
  let e = "", t = a;
  for (; t--; )
    e += o4[Math.random() * 64 | 0];
  return e;
};
var h4 = { nanoid: f4, customAlphabet: c4 };
let { existsSync: d4, readFileSync: m4 } = bt, { dirname: ln, join: p4 } = bt, { SourceMapConsumer: vs, SourceMapGenerator: ys } = bt;
function g4(a) {
  return Buffer ? Buffer.from(a, "base64").toString() : window.atob(a);
}
let qn = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let r = t.map ? t.map.prev : void 0, n = this.loadMap(t.from, r);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = ln(this.mapFile)), n && (this.text = n);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new vs(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, r = /^data:application\/json;base64,/, n = /^data:application\/json;charset=utf-?8,/, u = /^data:application\/json,/, i = e.match(n) || e.match(u);
    if (i)
      return decodeURIComponent(e.substr(i[0].length));
    let l = e.match(t) || e.match(r);
    if (l)
      return g4(e.substr(l[0].length));
    let s = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!t) return;
    let r = e.lastIndexOf(t.pop()), n = e.indexOf("*/", r);
    r > -1 && n > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, n)));
  }
  loadFile(e) {
    if (this.root = ln(e), d4(e))
      return this.mapFile = e, m4(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let r = t(e);
        if (r) {
          let n = this.loadFile(r);
          if (!n)
            throw new Error(
              "Unable to load previous source map: " + r.toString()
            );
          return n;
        }
      } else {
        if (t instanceof vs)
          return ys.fromSourceMap(t).toString();
        if (t instanceof ys)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let r = this.annotation;
        return e && (r = p4(ln(e), r)), this.loadFile(r);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var c1 = qn;
qn.default = qn;
let { nanoid: b4 } = h4, { isAbsolute: Hn, resolve: Un } = bt, { SourceMapConsumer: v4, SourceMapGenerator: y4 } = bt, { fileURLToPath: xs, pathToFileURL: Ir } = bt, ws = Iu, x4 = c1, on = bt, cn = Symbol("fromOffsetCache"), w4 = !!(v4 && y4), As = !!(Un && Hn), va = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!As || /^\w+:\/\//.test(t.from) || Hn(t.from) ? this.file = t.from : this.file = Un(t.from)), As && w4) {
      let r = new x4(this.css, t);
      if (r.text) {
        this.map = r;
        let n = r.consumer().file;
        !this.file && n && (this.file = this.mapResolve(n));
      }
    }
    this.file || (this.id = "<input css " + b4(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, r, n = {}) {
    let u, i, l;
    if (t && typeof t == "object") {
      let f = t, m = r;
      if (typeof f.offset == "number") {
        let b = this.fromOffset(f.offset);
        t = b.line, r = b.col;
      } else
        t = f.line, r = f.column;
      if (typeof m.offset == "number") {
        let b = this.fromOffset(m.offset);
        i = b.line, u = b.col;
      } else
        i = m.line, u = m.column;
    } else if (!r) {
      let f = this.fromOffset(t);
      t = f.line, r = f.col;
    }
    let s = this.origin(t, r, i, u);
    return s ? l = new ws(
      e,
      s.endLine === void 0 ? s.line : { column: s.column, line: s.line },
      s.endLine === void 0 ? s.column : { column: s.endColumn, line: s.endLine },
      s.source,
      s.file,
      n.plugin
    ) : l = new ws(
      e,
      i === void 0 ? t : { column: r, line: t },
      i === void 0 ? r : { column: u, line: i },
      this.css,
      this.file,
      n.plugin
    ), l.input = { column: r, endColumn: u, endLine: i, line: t, source: this.css }, this.file && (Ir && (l.input.url = Ir(this.file).toString()), l.input.file = this.file), l;
  }
  fromOffset(e) {
    let t, r;
    if (this[cn])
      r = this[cn];
    else {
      let u = this.css.split(`
`);
      r = new Array(u.length);
      let i = 0;
      for (let l = 0, s = u.length; l < s; l++)
        r[l] = i, i += u[l].length + 1;
      this[cn] = r;
    }
    t = r[r.length - 1];
    let n = 0;
    if (e >= t)
      n = r.length - 1;
    else {
      let u = r.length - 2, i;
      for (; n < u; )
        if (i = n + (u - n >> 1), e < r[i])
          u = i - 1;
        else if (e >= r[i + 1])
          n = i + 1;
        else {
          n = i;
          break;
        }
    }
    return {
      col: e - r[n] + 1,
      line: n + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : Un(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, r, n) {
    if (!this.map) return !1;
    let u = this.map.consumer(), i = u.originalPositionFor({ column: t, line: e });
    if (!i.source) return !1;
    let l;
    typeof r == "number" && (l = u.originalPositionFor({ column: n, line: r }));
    let s;
    Hn(i.source) ? s = Ir(i.source) : s = new URL(
      i.source,
      this.map.consumer().sourceRoot || Ir(this.map.mapFile)
    );
    let f = {
      column: i.column,
      endColumn: l && l.column,
      endLine: l && l.line,
      line: i.line,
      url: s.toString()
    };
    if (s.protocol === "file:")
      if (xs)
        f.file = xs(s);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let m = u.sourceContentFor(i.source);
    return m && (f.source = m), f;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var za = va;
va.default = va;
on && on.registerInput && on.registerInput(va);
let f1 = d0, h1, d1, C0 = class extends f1 {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, r) {
    let n = super.normalize(e);
    if (t) {
      if (r === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let u of n)
          u.raws.before = t.raws.before;
    }
    return n;
  }
  removeChild(e, t) {
    let r = this.index(e);
    return !t && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new h1(new d1(), this, e).stringify();
  }
};
C0.registerLazyResult = (a) => {
  h1 = a;
};
C0.registerProcessor = (a) => {
  d1 = a;
};
var vr = C0;
C0.default = C0;
f1.registerRoot(C0);
let ur = {
  comma(a) {
    return ur.split(a, [","], !0);
  },
  space(a) {
    let e = [" ", `
`, "	"];
    return ur.split(a, e);
  },
  split(a, e, t) {
    let r = [], n = "", u = !1, i = 0, l = !1, s = "", f = !1;
    for (let m of a)
      f ? f = !1 : m === "\\" ? f = !0 : l ? m === s && (l = !1) : m === '"' || m === "'" ? (l = !0, s = m) : m === "(" ? i += 1 : m === ")" ? i > 0 && (i -= 1) : i === 0 && e.includes(m) && (u = !0), u ? (n !== "" && r.push(n.trim()), n = "", u = !1) : n += m;
    return (t || n !== "") && r.push(n.trim()), r;
  }
};
var m1 = ur;
ur.default = ur;
let p1 = d0, A4 = m1, ya = class extends p1 {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return A4.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, r = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(r);
  }
};
var qu = ya;
ya.default = ya;
p1.registerRule(ya);
let D4 = zu, S4 = Ra, k4 = La, E4 = za, T4 = c1, C4 = vr, F4 = qu;
function ir(a, e) {
  if (Array.isArray(a)) return a.map((n) => ir(n));
  let { inputs: t, ...r } = a;
  if (t) {
    e = [];
    for (let n of t) {
      let u = { ...n, __proto__: E4.prototype };
      u.map && (u.map = {
        ...u.map,
        __proto__: T4.prototype
      }), e.push(u);
    }
  }
  if (r.nodes && (r.nodes = a.nodes.map((n) => ir(n, e))), r.source) {
    let { inputId: n, ...u } = r.source;
    r.source = u, n != null && (r.source.input = e[n]);
  }
  if (r.type === "root")
    return new C4(r);
  if (r.type === "decl")
    return new k4(r);
  if (r.type === "rule")
    return new F4(r);
  if (r.type === "comment")
    return new S4(r);
  if (r.type === "atrule")
    return new D4(r);
  throw new Error("Unknown node type: " + a.type);
}
var M4 = ir;
ir.default = ir;
let { dirname: Jr, relative: g1, resolve: b1, sep: v1 } = bt, { SourceMapConsumer: y1, SourceMapGenerator: ea } = bt, { pathToFileURL: Ds } = bt, _4 = za, N4 = !!(y1 && ea), O4 = !!(Jr && b1 && g1 && v1), B4 = class {
  constructor(e, t, r, n) {
    this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = n, this.originalCSS = n, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), r = e.root || Jr(e.file), n;
      this.mapOpts.sourcesContent === !1 ? (n = new y1(e.text), n.sourcesContent && (n.sourcesContent = null)) : n = e.consumer(), this.map.applySourceMap(n, t, this.toUrl(this.path(r)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(t);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), O4 && N4 && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = ea.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new ea({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new ea({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, r = "<no source>", n = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, u, i;
    this.stringify(this.root, (l, s, f) => {
      if (this.css += l, s && f !== "end" && (n.generated.line = e, n.generated.column = t - 1, s.source && s.source.start ? (n.source = this.sourcePath(s), n.original.line = s.source.start.line, n.original.column = s.source.start.column - 1, this.map.addMapping(n)) : (n.source = r, n.original.line = 1, n.original.column = 0, this.map.addMapping(n))), i = l.match(/\n/g), i ? (e += i.length, u = l.lastIndexOf(`
`), t = l.length - u) : t += l.length, s && f !== "start") {
        let m = s.parent || { raws: {} };
        (!(s.type === "decl" || s.type === "atrule" && !s.nodes) || s !== m.last || m.raws.semicolon) && (s.source && s.source.end ? (n.source = this.sourcePath(s), n.original.line = s.source.end.line, n.original.column = s.source.end.column - 1, n.generated.line = e, n.generated.column = t - 2, this.map.addMapping(n)) : (n.source = r, n.original.line = 1, n.original.column = 0, n.generated.line = e, n.generated.column = t - 1, this.map.addMapping(n)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let t = this.memoizedPaths.get(e);
    if (t) return t;
    let r = this.opts.to ? Jr(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (r = Jr(b1(r, this.mapOpts.annotation)));
    let n = g1(r, e);
    return this.memoizedPaths.set(e, n), n;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new _4(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let r = t.source.input.from;
          if (r && !e[r]) {
            e[r] = !0;
            let n = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
            this.map.setSourceContent(n, t.source.input.css);
          }
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let t = this.memoizedFileURLs.get(e);
    if (t) return t;
    if (Ds) {
      let r = Ds(e).toString();
      return this.memoizedFileURLs.set(e, r), r;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    v1 === "\\" && (e = e.replace(/\\/g, "/"));
    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, r), r;
  }
};
var x1 = B4;
const fn = 39, Ss = 34, Rr = 92, ks = 47, Lr = 10, P0 = 32, zr = 12, Pr = 9, qr = 13, I4 = 91, R4 = 93, L4 = 40, z4 = 41, P4 = 123, q4 = 125, H4 = 59, U4 = 42, j4 = 58, G4 = 64, Hr = /[\t\n\f\r "#'()/;[\\\]{}]/g, Ur = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, V4 = /.[\r\n"'(/\\]/, Es = /[\da-f]/i;
var $4 = function(e, t = {}) {
  let r = e.css.valueOf(), n = t.ignoreErrors, u, i, l, s, f, m, b, h, d, k, E = r.length, w = 0, F = [], x = [];
  function D() {
    return w;
  }
  function A(H) {
    throw e.error("Unclosed " + H, w);
  }
  function _() {
    return x.length === 0 && w >= E;
  }
  function B(H) {
    if (x.length) return x.pop();
    if (w >= E) return;
    let R = H ? H.ignoreUnclosed : !1;
    switch (u = r.charCodeAt(w), u) {
      case Lr:
      case P0:
      case Pr:
      case qr:
      case zr: {
        s = w;
        do
          s += 1, u = r.charCodeAt(s);
        while (u === P0 || u === Lr || u === Pr || u === qr || u === zr);
        m = ["space", r.slice(w, s)], w = s - 1;
        break;
      }
      case I4:
      case R4:
      case P4:
      case q4:
      case j4:
      case H4:
      case z4: {
        let L = String.fromCharCode(u);
        m = [L, L, w];
        break;
      }
      case L4: {
        if (k = F.length ? F.pop()[1] : "", d = r.charCodeAt(w + 1), k === "url" && d !== fn && d !== Ss && d !== P0 && d !== Lr && d !== Pr && d !== zr && d !== qr) {
          s = w;
          do {
            if (b = !1, s = r.indexOf(")", s + 1), s === -1)
              if (n || R) {
                s = w;
                break;
              } else
                A("bracket");
            for (h = s; r.charCodeAt(h - 1) === Rr; )
              h -= 1, b = !b;
          } while (b);
          m = ["brackets", r.slice(w, s + 1), w, s], w = s;
        } else
          s = r.indexOf(")", w + 1), i = r.slice(w, s + 1), s === -1 || V4.test(i) ? m = ["(", "(", w] : (m = ["brackets", i, w, s], w = s);
        break;
      }
      case fn:
      case Ss: {
        f = u === fn ? "'" : '"', s = w;
        do {
          if (b = !1, s = r.indexOf(f, s + 1), s === -1)
            if (n || R) {
              s = w + 1;
              break;
            } else
              A("string");
          for (h = s; r.charCodeAt(h - 1) === Rr; )
            h -= 1, b = !b;
        } while (b);
        m = ["string", r.slice(w, s + 1), w, s], w = s;
        break;
      }
      case G4: {
        Hr.lastIndex = w + 1, Hr.test(r), Hr.lastIndex === 0 ? s = r.length - 1 : s = Hr.lastIndex - 2, m = ["at-word", r.slice(w, s + 1), w, s], w = s;
        break;
      }
      case Rr: {
        for (s = w, l = !0; r.charCodeAt(s + 1) === Rr; )
          s += 1, l = !l;
        if (u = r.charCodeAt(s + 1), l && u !== ks && u !== P0 && u !== Lr && u !== Pr && u !== qr && u !== zr && (s += 1, Es.test(r.charAt(s)))) {
          for (; Es.test(r.charAt(s + 1)); )
            s += 1;
          r.charCodeAt(s + 1) === P0 && (s += 1);
        }
        m = ["word", r.slice(w, s + 1), w, s], w = s;
        break;
      }
      default: {
        u === ks && r.charCodeAt(w + 1) === U4 ? (s = r.indexOf("*/", w + 2) + 1, s === 0 && (n || R ? s = r.length : A("comment")), m = ["comment", r.slice(w, s + 1), w, s], w = s) : (Ur.lastIndex = w + 1, Ur.test(r), Ur.lastIndex === 0 ? s = r.length - 1 : s = Ur.lastIndex - 2, m = ["word", r.slice(w, s + 1), w, s], F.push(m), w = s);
        break;
      }
    }
    return w++, m;
  }
  function O(H) {
    x.push(H);
  }
  return {
    back: O,
    endOfFile: _,
    nextToken: B,
    position: D
  };
};
let W4 = zu, X4 = Ra, Y4 = La, Z4 = vr, Ts = qu, Q4 = $4;
const Cs = {
  empty: !0,
  space: !0
};
function K4(a) {
  for (let e = a.length - 1; e >= 0; e--) {
    let t = a[e], r = t[3] || t[2];
    if (r) return r;
  }
}
let J4 = class {
  constructor(e) {
    this.input = e, this.root = new Z4(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new W4();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let r, n, u, i = !1, l = !1, s = [], f = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), r = e[0], r === "(" || r === "[" ? f.push(r === "(" ? ")" : "]") : r === "{" && f.length > 0 ? f.push("}") : r === f[f.length - 1] && f.pop(), f.length === 0)
        if (r === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (r === "{") {
          l = !0;
          break;
        } else if (r === "}") {
          if (s.length > 0) {
            for (u = s.length - 1, n = s[u]; n && n[0] === "space"; )
              n = s[--u];
            n && (t.source.end = this.getPosition(n[3] || n[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          s.push(e);
      else
        s.push(e);
      if (this.tokenizer.endOfFile()) {
        i = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(s), s.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(s), this.raw(t, "params", s), i && (e = s[s.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), l && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let r = 0, n;
    for (let u = t - 1; u >= 0 && (n = e[u], !(n[0] !== "space" && (r += 1, r === 2))); u--)
      ;
    throw this.input.error(
      "Missed semicolon",
      n[0] === "word" ? n[3] + 1 : n[2]
    );
  }
  colon(e) {
    let t = 0, r, n, u;
    for (let [i, l] of e.entries()) {
      if (n = l, u = n[0], u === "(" && (t += 1), u === ")" && (t -= 1), t === 0 && u === ":")
        if (!r)
          this.doubleColon(n);
        else {
          if (r[0] === "word" && r[1] === "progid")
            continue;
          return i;
        }
      r = n;
    }
    return !1;
  }
  comment(e) {
    let t = new X4();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let r = e[1].slice(2, -2);
    if (/^\s*$/.test(r))
      t.text = "", t.raws.left = r, t.raws.right = "";
    else {
      let n = r.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = n[2], t.raws.left = n[1], t.raws.right = n[3];
    }
  }
  createTokenizer() {
    this.tokenizer = Q4(this.input);
  }
  decl(e, t) {
    let r = new Y4();
    this.init(r, e[0][2]);
    let n = e[e.length - 1];
    for (n[0] === ";" && (this.semicolon = !0, e.pop()), r.source.end = this.getPosition(
      n[3] || n[2] || K4(e)
    ), r.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), r.raws.before += e.shift()[1];
    for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length; ) {
      let f = e[0][0];
      if (f === ":" || f === "space" || f === "comment")
        break;
      r.prop += e.shift()[1];
    }
    r.raws.between = "";
    let u;
    for (; e.length; )
      if (u = e.shift(), u[0] === ":") {
        r.raws.between += u[1];
        break;
      } else
        u[0] === "word" && /\w/.test(u[1]) && this.unknownWord([u]), r.raws.between += u[1];
    (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
    let i = [], l;
    for (; e.length && (l = e[0][0], !(l !== "space" && l !== "comment")); )
      i.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let f = e.length - 1; f >= 0; f--) {
      if (u = e[f], u[1].toLowerCase() === "!important") {
        r.important = !0;
        let m = this.stringFrom(e, f);
        m = this.spacesFromEnd(e) + m, m !== " !important" && (r.raws.important = m);
        break;
      } else if (u[1].toLowerCase() === "important") {
        let m = e.slice(0), b = "";
        for (let h = f; h > 0; h--) {
          let d = m[h][0];
          if (b.trim().startsWith("!") && d !== "space")
            break;
          b = m.pop()[1] + b;
        }
        b.trim().startsWith("!") && (r.important = !0, r.raws.important = b, e = m);
      }
      if (u[0] !== "space" && u[0] !== "comment")
        break;
    }
    e.some((f) => f[0] !== "space" && f[0] !== "comment") && (r.raws.between += i.map((f) => f[1]).join(""), i = []), this.raw(r, "value", i.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new Ts();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      column: t.col,
      line: t.line,
      offset: e
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(t)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1, r = null, n = !1, u = null, i = [], l = e[1].startsWith("--"), s = [], f = e;
    for (; f; ) {
      if (r = f[0], s.push(f), r === "(" || r === "[")
        u || (u = f), i.push(r === "(" ? ")" : "]");
      else if (l && n && r === "{")
        u || (u = f), i.push("}");
      else if (i.length === 0)
        if (r === ";")
          if (n) {
            this.decl(s, l);
            return;
          } else
            break;
        else if (r === "{") {
          this.rule(s);
          return;
        } else if (r === "}") {
          this.tokenizer.back(s.pop()), t = !0;
          break;
        } else r === ":" && (n = !0);
      else r === i[i.length - 1] && (i.pop(), i.length === 0 && (u = null));
      f = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), i.length > 0 && this.unclosedBracket(u), t && n) {
      if (!l)
        for (; s.length && (f = s[s.length - 1][0], !(f !== "space" && f !== "comment")); )
          this.tokenizer.back(s.pop());
      this.decl(s, l);
    } else
      this.unknownWord(s);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, t, r, n) {
    let u, i, l = r.length, s = "", f = !0, m, b;
    for (let h = 0; h < l; h += 1)
      u = r[h], i = u[0], i === "space" && h === l - 1 && !n ? f = !1 : i === "comment" ? (b = r[h - 1] ? r[h - 1][0] : "empty", m = r[h + 1] ? r[h + 1][0] : "empty", !Cs[b] && !Cs[m] ? s.slice(-1) === "," ? f = !1 : s += u[1] : f = !1) : s += u[1];
    if (!f) {
      let h = r.reduce((d, k) => d + k[1], "");
      e.raws[t] = { raw: h, value: s };
    }
    e[t] = s;
  }
  rule(e) {
    e.pop();
    let t = new Ts();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      r = e.pop()[1] + r;
    return r;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, r = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      r += e.shift()[1];
    return r;
  }
  spacesFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      r = e.pop()[1] + r;
    return r;
  }
  stringFrom(e, t) {
    let r = "";
    for (let n = t; n < e.length; n++)
      r += e[n][1];
    return e.splice(t, e.length - t), r;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var e3 = J4;
let t3 = d0, r3 = za, a3 = e3;
function xa(a, e) {
  let t = new r3(a, e), r = new a3(t);
  try {
    r.parse();
  } catch (n) {
    throw process.env.NODE_ENV !== "production" && n.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? n.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? n.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (n.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), n;
  }
  return r.root;
}
var Hu = xa;
xa.default = xa;
t3.registerParse(xa);
let jn = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let r = t.node.rangeBy(t);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (let r in t) this[r] = t[r];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var w1 = jn;
jn.default = jn;
let n3 = w1, Gn = class {
  constructor(e, t, r) {
    this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let r = new n3(e, t);
    return this.messages.push(r), r;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Uu = Gn;
Gn.default = Gn;
let Fs = {};
var A1 = function(e) {
  Fs[e] || (Fs[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let u3 = d0, i3 = Pu, s3 = x1, l3 = Hu, Ms = Uu, o3 = vr, c3 = Ba, { isClean: At, my: f3 } = br, h3 = A1;
const d3 = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, m3 = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, p3 = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, F0 = 0;
function q0(a) {
  return typeof a == "object" && typeof a.then == "function";
}
function D1(a) {
  let e = !1, t = d3[a.type];
  return a.type === "decl" ? e = a.prop.toLowerCase() : a.type === "atrule" && (e = a.name.toLowerCase()), e && a.append ? [
    t,
    t + "-" + e,
    F0,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : a.append ? [t, F0, t + "Exit"] : [t, t + "Exit"];
}
function _s(a) {
  let e;
  return a.type === "document" ? e = ["Document", F0, "DocumentExit"] : a.type === "root" ? e = ["Root", F0, "RootExit"] : e = D1(a), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: a,
    visitorIndex: 0,
    visitors: []
  };
}
function Vn(a) {
  return a[At] = !1, a.nodes && a.nodes.forEach((e) => Vn(e)), a;
}
let $n = {}, M0 = class S1 {
  constructor(e, t, r) {
    this.stringified = !1, this.processed = !1;
    let n;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      n = Vn(t);
    else if (t instanceof S1 || t instanceof Ms)
      n = Vn(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = t.map);
    else {
      let u = l3;
      r.syntax && (u = r.syntax.parse), r.parser && (u = r.parser), u.parse && (u = u.parse);
      try {
        n = u(t, r);
      } catch (i) {
        this.processed = !0, this.error = i;
      }
      n && !n[f3] && u3.rebuild(n);
    }
    this.result = new Ms(e, n, r), this.helpers = { ...$n, postcss: $n, result: this.result }, this.plugins = this.processor.plugins.map((u) => typeof u == "object" && u.prepare ? { ...u, ...u.prepare(this.result) } : u);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let r = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = r.postcssPlugin, e.setMessage();
      else if (r.postcssVersion && process.env.NODE_ENV !== "production") {
        let n = r.postcssPlugin, u = r.postcssVersion, i = this.result.processor.version, l = u.split("."), s = i.split(".");
        (l[0] !== s[0] || parseInt(l[1]) > parseInt(s[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + i + ", but " + n + " uses " + u + ". Perhaps this is the source of the error below."
        );
      }
    } catch (n) {
      console && console.error && console.error(n);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, r, n) => {
      this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([t, n]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let r in t) {
          if (!m3[r] && /^[A-Z]/.test(r))
            throw new Error(
              `Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!p3[r])
            if (typeof t[r] == "object")
              for (let n in t[r])
                n === "*" ? e(t, r, t[r][n]) : e(
                  t,
                  r + "-" + n.toLowerCase(),
                  t[r][n]
                );
            else typeof t[r] == "function" && e(t, r, t[r]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], r = this.runOnRoot(t);
      if (q0(r))
        try {
          await r;
        } catch (n) {
          throw this.handleError(n);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[At]; ) {
        e[At] = !0;
        let t = [_s(e)];
        for (; t.length > 0; ) {
          let r = this.visitTick(t);
          if (q0(r))
            try {
              await r;
            } catch (n) {
              let u = t[t.length - 1].node;
              throw this.handleError(n, u);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, r] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let n = e.nodes.map(
                (u) => r(u, this.helpers)
              );
              await Promise.all(n);
            } else
              await r(e, this.helpers);
          } catch (n) {
            throw this.handleError(n);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map(
            (r) => e.Once(r, this.helpers)
          );
          return q0(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, t = c3;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let n = new s3(t, this.result.root, this.result.opts).generate();
    return this.result.css = n[0], this.result.map = n[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (q0(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[At]; )
        e[At] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || h3(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [r, n] of e) {
      this.result.lastPlugin = r;
      let u;
      try {
        u = n(t, this.helpers);
      } catch (i) {
        throw this.handleError(i, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (q0(u))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: r, visitors: n } = t;
    if (r.type !== "root" && r.type !== "document" && !r.parent) {
      e.pop();
      return;
    }
    if (n.length > 0 && t.visitorIndex < n.length) {
      let [i, l] = n[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === n.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = i;
      try {
        return l(r.toProxy(), this.helpers);
      } catch (s) {
        throw this.handleError(s, r);
      }
    }
    if (t.iterator !== 0) {
      let i = t.iterator, l;
      for (; l = r.nodes[r.indexes[i]]; )
        if (r.indexes[i] += 1, !l[At]) {
          l[At] = !0, e.push(_s(l));
          return;
        }
      t.iterator = 0, delete r.indexes[i];
    }
    let u = t.events;
    for (; t.eventIndex < u.length; ) {
      let i = u[t.eventIndex];
      if (t.eventIndex += 1, i === F0) {
        r.nodes && r.nodes.length && (r[At] = !0, t.iterator = r.getIterator());
        return;
      } else if (this.listeners[i]) {
        t.visitors = this.listeners[i];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[At] = !0;
    let t = D1(e);
    for (let r of t)
      if (r === F0)
        e.nodes && e.each((n) => {
          n[At] || this.walkSync(n);
        });
      else {
        let n = this.listeners[r];
        if (n && this.visitSync(n, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
M0.registerPostcss = (a) => {
  $n = a;
};
var k1 = M0;
M0.default = M0;
o3.registerLazyResult(M0);
i3.registerLazyResult(M0);
let g3 = x1, b3 = Hu;
const v3 = Uu;
let y3 = Ba, x3 = A1, Wn = class {
  constructor(e, t, r) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
    let n, u = y3;
    this.result = new v3(this._processor, n, this._opts), this.result.css = t;
    let i = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return i.root;
      }
    });
    let l = new g3(u, n, this._opts, t);
    if (l.isMap()) {
      let [s, f] = l.generate();
      s && (this.result.css = s), f && (this.result.map = f);
    } else
      l.clearAnnotation(), this.result.css = l.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || x3(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = b3;
    try {
      e = t(this._css, this._opts);
    } catch (r) {
      this.error = r;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var w3 = Wn;
Wn.default = Wn;
let A3 = Pu, D3 = k1, S3 = w3, k3 = vr, sr = class {
  constructor(e = []) {
    this.version = "8.4.47", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let r of e)
      if (r.postcss === !0 ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins))
        t = t.concat(r.plugins);
      else if (typeof r == "object" && r.postcssPlugin)
        t.push(r);
      else if (typeof r == "function")
        t.push(r);
      else if (typeof r == "object" && (r.parse || r.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(r + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new S3(this, e, t) : new D3(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var E3 = sr;
sr.default = sr;
k3.registerProcessor(sr);
A3.registerProcessor(sr);
let E1 = zu, T1 = Ra, T3 = d0, C3 = Iu, C1 = La, F1 = Pu, F3 = M4, M3 = za, _3 = k1, N3 = m1, O3 = Ia, B3 = Hu, ju = E3, I3 = Uu, M1 = vr, _1 = qu, R3 = Ba, L3 = w1;
function ge(...a) {
  return a.length === 1 && Array.isArray(a[0]) && (a = a[0]), new ju(a);
}
ge.plugin = function(e, t) {
  let r = !1;
  function n(...i) {
    console && console.warn && !r && (r = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let l = t(...i);
    return l.postcssPlugin = e, l.postcssVersion = new ju().version, l;
  }
  let u;
  return Object.defineProperty(n, "postcss", {
    get() {
      return u || (u = n()), u;
    }
  }), n.process = function(i, l, s) {
    return ge([n(s)]).process(i, l);
  }, n;
};
ge.stringify = R3;
ge.parse = B3;
ge.fromJSON = F3;
ge.list = N3;
ge.comment = (a) => new T1(a);
ge.atRule = (a) => new E1(a);
ge.decl = (a) => new C1(a);
ge.rule = (a) => new _1(a);
ge.root = (a) => new M1(a);
ge.document = (a) => new F1(a);
ge.CssSyntaxError = C3;
ge.Declaration = C1;
ge.Container = T3;
ge.Processor = ju;
ge.Document = F1;
ge.Comment = T1;
ge.Warning = L3;
ge.AtRule = E1;
ge.Result = I3;
ge.Input = M3;
ge.Rule = _1;
ge.Root = M1;
ge.Node = O3;
_3.registerPostcss(ge);
var z3 = ge;
ge.default = ge;
const P3 = xo, Ns = O2, { isPlainObject: q3 } = Ou, Os = X2, H3 = Y2, { parse: U3 } = z3, j3 = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], G3 = ["script", "style"];
function W0(a, e) {
  a && Object.keys(a).forEach(function(t) {
    e(a[t], t);
  });
}
function zt(a, e) {
  return {}.hasOwnProperty.call(a, e);
}
function Bs(a, e) {
  const t = [];
  return W0(a, function(r) {
    e(r) && t.push(r);
  }), t;
}
function V3(a) {
  for (const e in a)
    if (zt(a, e))
      return !1;
  return !0;
}
function $3(a) {
  return a.map(function(e) {
    if (!e.url)
      throw new Error("URL missing");
    return e.url + (e.w ? ` ${e.w}w` : "") + (e.h ? ` ${e.h}h` : "") + (e.d ? ` ${e.d}x` : "");
  }).join(", ");
}
var W3 = lr;
const X3 = /^[^\0\t\n\f\r /<=>]+$/;
function lr(a, e, t) {
  if (a == null)
    return "";
  typeof a == "number" && (a = a.toString());
  let r = "", n = "";
  function u(N, P) {
    const z = this;
    this.tag = N, this.attribs = P || {}, this.tagPosition = r.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (w.length) {
        const $ = w[w.length - 1];
        $.text += z.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      w.length && j3.includes(this.tag) && w[w.length - 1].mediaChildren.push(this.tag);
    };
  }
  e = Object.assign({}, lr.defaults, e), e.parser = Object.assign({}, Y3, e.parser);
  const i = function(N) {
    return e.allowedTags === !1 || (e.allowedTags || []).indexOf(N) > -1;
  };
  G3.forEach(function(N) {
    i(N) && !e.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${N}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const l = e.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let s, f;
  e.allowedAttributes && (s = {}, f = {}, W0(e.allowedAttributes, function(N, P) {
    s[P] = [];
    const z = [];
    N.forEach(function($) {
      typeof $ == "string" && $.indexOf("*") >= 0 ? z.push(Ns($).replace(/\\\*/g, ".*")) : s[P].push($);
    }), z.length && (f[P] = new RegExp("^(" + z.join("|") + ")$"));
  }));
  const m = {}, b = {}, h = {};
  W0(e.allowedClasses, function(N, P) {
    if (s && (zt(s, P) || (s[P] = []), s[P].push("class")), m[P] = N, Array.isArray(N)) {
      const z = [];
      m[P] = [], h[P] = [], N.forEach(function($) {
        typeof $ == "string" && $.indexOf("*") >= 0 ? z.push(Ns($).replace(/\\\*/g, ".*")) : $ instanceof RegExp ? h[P].push($) : m[P].push($);
      }), z.length && (b[P] = new RegExp("^(" + z.join("|") + ")$"));
    }
  });
  const d = {};
  let k;
  W0(e.transformTags, function(N, P) {
    let z;
    typeof N == "function" ? z = N : typeof N == "string" && (z = lr.simpleTransform(N)), P === "*" ? k = z : d[P] = z;
  });
  let E, w, F, x, D, A, _ = !1;
  O();
  const B = new P3.Parser({
    onopentag: function(N, P) {
      if (e.enforceHtmlBoundary && N === "html" && O(), D) {
        A++;
        return;
      }
      const z = new u(N, P);
      w.push(z);
      let $ = !1;
      const fe = !!z.text;
      let le;
      if (zt(d, N) && (le = d[N](N, P), z.attribs = P = le.attribs, le.text !== void 0 && (z.innerText = le.text), N !== le.tagName && (z.name = N = le.tagName, x[E] = le.tagName)), k && (le = k(N, P), z.attribs = P = le.attribs, N !== le.tagName && (z.name = N = le.tagName, x[E] = le.tagName)), (!i(N) || e.disallowedTagsMode === "recursiveEscape" && !V3(F) || e.nestingLimit != null && E >= e.nestingLimit) && ($ = !0, F[E] = !0, (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && l.indexOf(N) !== -1 && (D = !0, A = 1), F[E] = !0), E++, $) {
        if (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard")
          return;
        n = r, r = "";
      }
      r += "<" + N, N === "script" && (e.allowedScriptHostnames || e.allowedScriptDomains) && (z.innerText = ""), (!s || zt(s, N) || s["*"]) && W0(P, function(J, ee) {
        if (!X3.test(ee)) {
          delete z.attribs[ee];
          return;
        }
        if (J === "" && !e.allowedEmptyAttributes.includes(ee) && (e.nonBooleanAttributes.includes(ee) || e.nonBooleanAttributes.includes("*"))) {
          delete z.attribs[ee];
          return;
        }
        let pe = !1;
        if (!s || zt(s, N) && s[N].indexOf(ee) !== -1 || s["*"] && s["*"].indexOf(ee) !== -1 || zt(f, N) && f[N].test(ee) || f["*"] && f["*"].test(ee))
          pe = !0;
        else if (s && s[N]) {
          for (const se of s[N])
            if (q3(se) && se.name && se.name === ee) {
              pe = !0;
              let Q = "";
              if (se.multiple === !0) {
                const Fe = J.split(" ");
                for (const De of Fe)
                  se.values.indexOf(De) !== -1 && (Q === "" ? Q = De : Q += " " + De);
              } else se.values.indexOf(J) >= 0 && (Q = J);
              J = Q;
            }
        }
        if (pe) {
          if (e.allowedSchemesAppliedToAttributes.indexOf(ee) !== -1 && R(N, J)) {
            delete z.attribs[ee];
            return;
          }
          if (N === "script" && ee === "src") {
            let se = !0;
            try {
              const Q = L(J);
              if (e.allowedScriptHostnames || e.allowedScriptDomains) {
                const Fe = (e.allowedScriptHostnames || []).find(function(Se) {
                  return Se === Q.url.hostname;
                }), De = (e.allowedScriptDomains || []).find(function(Se) {
                  return Q.url.hostname === Se || Q.url.hostname.endsWith(`.${Se}`);
                });
                se = Fe || De;
              }
            } catch {
              se = !1;
            }
            if (!se) {
              delete z.attribs[ee];
              return;
            }
          }
          if (N === "iframe" && ee === "src") {
            let se = !0;
            try {
              const Q = L(J);
              if (Q.isRelativeUrl)
                se = zt(e, "allowIframeRelativeUrls") ? e.allowIframeRelativeUrls : !e.allowedIframeHostnames && !e.allowedIframeDomains;
              else if (e.allowedIframeHostnames || e.allowedIframeDomains) {
                const Fe = (e.allowedIframeHostnames || []).find(function(Se) {
                  return Se === Q.url.hostname;
                }), De = (e.allowedIframeDomains || []).find(function(Se) {
                  return Q.url.hostname === Se || Q.url.hostname.endsWith(`.${Se}`);
                });
                se = Fe || De;
              }
            } catch {
              se = !1;
            }
            if (!se) {
              delete z.attribs[ee];
              return;
            }
          }
          if (ee === "srcset")
            try {
              let se = H3(J);
              if (se.forEach(function(Q) {
                R("srcset", Q.url) && (Q.evil = !0);
              }), se = Bs(se, function(Q) {
                return !Q.evil;
              }), se.length)
                J = $3(Bs(se, function(Q) {
                  return !Q.evil;
                })), z.attribs[ee] = J;
              else {
                delete z.attribs[ee];
                return;
              }
            } catch {
              delete z.attribs[ee];
              return;
            }
          if (ee === "class") {
            const se = m[N], Q = m["*"], Fe = b[N], De = h[N], Se = h["*"], Ke = b["*"], Ve = [
              Fe,
              Ke
            ].concat(De, Se).filter(function(ht) {
              return ht;
            });
            if (se && Q ? J = X(J, Os(se, Q), Ve) : J = X(J, se || Q, Ve), !J.length) {
              delete z.attribs[ee];
              return;
            }
          }
          if (ee === "style") {
            if (e.parseStyleAttributes)
              try {
                const se = U3(N + " {" + J + "}", { map: !1 }), Q = C(se, e.allowedStyles);
                if (J = I(Q), J.length === 0) {
                  delete z.attribs[ee];
                  return;
                }
              } catch {
                typeof window < "u" && console.warn('Failed to parse "' + N + " {" + J + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete z.attribs[ee];
                return;
              }
            else if (e.allowedStyles)
              throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          r += " " + ee, J && J.length ? r += '="' + H(J, !0) + '"' : e.allowedEmptyAttributes.includes(ee) && (r += '=""');
        } else
          delete z.attribs[ee];
      }), e.selfClosing.indexOf(N) !== -1 ? r += " />" : (r += ">", z.innerText && !fe && !e.textFilter && (r += H(z.innerText), _ = !0)), $ && (r = n + H(r), n = "");
    },
    ontext: function(N) {
      if (D)
        return;
      const P = w[w.length - 1];
      let z;
      if (P && (z = P.tag, N = P.innerText !== void 0 ? P.innerText : N), e.disallowedTagsMode === "completelyDiscard" && !i(z))
        N = "";
      else if ((e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && (z === "script" || z === "style"))
        r += N;
      else {
        const $ = H(N, !1);
        e.textFilter && !_ ? r += e.textFilter($, z) : _ || (r += $);
      }
      if (w.length) {
        const $ = w[w.length - 1];
        $.text += N;
      }
    },
    onclosetag: function(N, P) {
      if (D)
        if (A--, !A)
          D = !1;
        else
          return;
      const z = w.pop();
      if (!z)
        return;
      if (z.tag !== N) {
        w.push(z);
        return;
      }
      D = e.enforceHtmlBoundary ? N === "html" : !1, E--;
      const $ = F[E];
      if ($) {
        if (delete F[E], e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") {
          z.updateParentNodeText();
          return;
        }
        n = r, r = "";
      }
      if (x[E] && (N = x[E], delete x[E]), e.exclusiveFilter && e.exclusiveFilter(z)) {
        r = r.substr(0, z.tagPosition);
        return;
      }
      if (z.updateParentNodeMediaChildren(), z.updateParentNodeText(), // Already output />
      e.selfClosing.indexOf(N) !== -1 || // Escaped tag, closing tag is implied
      P && !i(N) && ["escape", "recursiveEscape"].indexOf(e.disallowedTagsMode) >= 0) {
        $ && (r = n, n = "");
        return;
      }
      r += "</" + N + ">", $ && (r = n + H(r), n = ""), _ = !1;
    }
  }, e.parser);
  return B.write(a), B.end(), r;
  function O() {
    r = "", E = 0, w = [], F = {}, x = {}, D = !1, A = 0;
  }
  function H(N, P) {
    return typeof N != "string" && (N = N + ""), e.parser.decodeEntities && (N = N.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), P && (N = N.replace(/"/g, "&quot;"))), N = N.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), P && (N = N.replace(/"/g, "&quot;")), N;
  }
  function R(N, P) {
    for (P = P.replace(/[\x00-\x20]+/g, ""); ; ) {
      const fe = P.indexOf("<!--");
      if (fe === -1)
        break;
      const le = P.indexOf("-->", fe + 4);
      if (le === -1)
        break;
      P = P.substring(0, fe) + P.substring(le + 3);
    }
    const z = P.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!z)
      return P.match(/^[/\\]{2}/) ? !e.allowProtocolRelative : !1;
    const $ = z[1].toLowerCase();
    return zt(e.allowedSchemesByTag, N) ? e.allowedSchemesByTag[N].indexOf($) === -1 : !e.allowedSchemes || e.allowedSchemes.indexOf($) === -1;
  }
  function L(N) {
    if (N = N.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), N.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let P = "relative://relative-site";
    for (let fe = 0; fe < 100; fe++)
      P += `/${fe}`;
    const z = new URL(N, P);
    return {
      isRelativeUrl: z && z.hostname === "relative-site" && z.protocol === "relative:",
      url: z
    };
  }
  function C(N, P) {
    if (!P)
      return N;
    const z = N.nodes[0];
    let $;
    return P[z.selector] && P["*"] ? $ = Os(
      P[z.selector],
      P["*"]
    ) : $ = P[z.selector] || P["*"], $ && (N.nodes[0].nodes = z.nodes.reduce(j($), [])), N;
  }
  function I(N) {
    return N.nodes[0].nodes.reduce(function(P, z) {
      return P.push(
        `${z.prop}:${z.value}${z.important ? " !important" : ""}`
      ), P;
    }, []).join(";");
  }
  function j(N) {
    return function(P, z) {
      return zt(N, z.prop) && N[z.prop].some(function(fe) {
        return fe.test(z.value);
      }) && P.push(z), P;
    };
  }
  function X(N, P, z) {
    return P ? (N = N.split(/\s+/), N.filter(function($) {
      return P.indexOf($) !== -1 || z.some(function(fe) {
        return fe.test($);
      });
    }).join(" ")) : N;
  }
}
const Y3 = {
  decodeEntities: !0
};
lr.defaults = {
  allowedTags: [
    // Sections derived from MDN element categories and limited to the more
    // benign categories.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // Content sectioning
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    // Text content
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    // Inline text semantics
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    // Table content
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  // Tags that cannot be boolean
  nonBooleanAttributes: [
    "abbr",
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "allow",
    "alt",
    "as",
    "autocapitalize",
    "autocomplete",
    "blocking",
    "charset",
    "cite",
    "class",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "coords",
    "crossorigin",
    "data",
    "datetime",
    "decoding",
    "dir",
    "dirname",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "fetchpriority",
    "for",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "id",
    "imagesizes",
    "imagesrcset",
    "inputmode",
    "integrity",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "name",
    "nonce",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "referrerpolicy",
    "rel",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    // Event handlers
    "onauxclick",
    "onafterprint",
    "onbeforematch",
    "onbeforeprint",
    "onbeforeunload",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onlanguagechange",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmessageerror",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onrejectionhandled",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onunhandledrejection",
    "onunload",
    "onvolumechange",
    "onwaiting",
    "onwheel"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  allowedEmptyAttributes: [
    "alt"
  ],
  // Lots of these won't come up by default because we don't allow them
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1,
  parseStyleAttributes: !0
};
lr.simpleTransform = function(a, e, t) {
  return t = t === void 0 ? !0 : t, e = e || {}, function(r, n) {
    let u;
    if (t)
      for (u in e)
        n[u] = e[u];
    else
      n = e;
    return {
      tagName: a,
      attribs: n
    };
  };
};
const Z3 = /* @__PURE__ */ bd(W3), Xn = (a) => JSON.parse(JSON.stringify(a)), Q3 = (a) => a.nodeType === 1, K3 = (a) => ym.has(a.tagName), J3 = (a) => "action" in a, em = (a) => a.tagName === "IFRAME", tm = (a) => "formAction" in a, rm = (a) => "protocol" in a, jr = /* @__PURE__ */ (() => {
  const a = /^(?:\w+script|data):/i;
  return (e) => a.test(e);
})(), am = /* @__PURE__ */ (() => {
  const a = /(?:script|data):/i;
  return (e) => a.test(e);
})(), nm = (a) => {
  const e = {};
  for (let t = 0, r = a.length; t < r; t++) {
    const n = a[t];
    for (const u in n)
      e[u] ? e[u] = e[u].concat(n[u]) : e[u] = n[u];
  }
  return e;
}, N1 = (a, e) => {
  let t = a.firstChild;
  for (; t; ) {
    const r = t.nextSibling;
    Q3(t) && (e(t, a), t.parentNode && N1(t, e)), t = r;
  }
}, um = (a, e) => {
  const t = document.createNodeIterator(a, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = t.nextNode(); ) {
    const n = r.parentNode;
    n && e(r, n);
  }
}, im = (a, e) => !!globalThis.document && !!globalThis.document.createNodeIterator ? um(a, e) : N1(a, e), O1 = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], sm = [
  "basefont",
  "command",
  "data",
  "iframe",
  "image",
  "plaintext",
  "portal",
  "slot",
  // 'template', //TODO: Not exactly correct to never allow this, too strict
  "textarea",
  "title",
  "xmp"
], lm = /* @__PURE__ */ new Set([
  ...O1,
  ...sm
]), B1 = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], om = [
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "fedropshadow",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
], cm = /* @__PURE__ */ new Set([
  ...B1,
  ...om
]), I1 = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], fm = [
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
], hm = /* @__PURE__ */ new Set([
  ...I1,
  ...fm
]), dm = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], mm = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], pm = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
], gt = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, gm = {
  [gt.HTML]: lm,
  [gt.SVG]: cm,
  [gt.MATH]: hm
}, bm = {
  [gt.HTML]: "html",
  [gt.SVG]: "svg",
  [gt.MATH]: "math"
}, vm = {
  [gt.HTML]: "",
  [gt.SVG]: "svg:",
  [gt.MATH]: "math:"
}, ym = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), R1 = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...O1,
    ...B1.map((a) => `svg:${a}`),
    ...I1.map((a) => `math:${a}`)
  ],
  allowAttributes: nm([
    Object.fromEntries(dm.map((a) => [a, ["*"]])),
    Object.fromEntries(mm.map((a) => [a, ["svg:*"]])),
    Object.fromEntries(pm.map((a) => [a, ["math:*"]]))
  ])
};
var hn = function(a, e, t, r, n) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? a !== e || !n : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? n.call(a, t) : n ? n.value = t : e.set(a, t), t;
}, i0 = function(a, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? a !== e || !r : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(a) : r ? r.value : e.get(a);
}, Zt, ta, ra;
class L1 {
  /* CONSTRUCTOR */
  constructor(e = {}) {
    Zt.set(this, void 0), ta.set(this, void 0), ra.set(this, void 0), this.getConfiguration = () => Xn(i0(this, Zt, "f")), this.sanitize = (m) => {
      const b = i0(this, ta, "f"), h = i0(this, ra, "f");
      return im(m, (d, k) => {
        const E = d.namespaceURI || gt.HTML, w = k.namespaceURI || gt.HTML, F = gm[E], x = bm[E], D = vm[E], A = d.tagName.toLowerCase(), _ = `${D}${A}`, O = `${D}*`;
        if (!F.has(A) || !b.has(_) || E !== w && A !== x)
          k.removeChild(d);
        else {
          const H = d.getAttributeNames(), R = H.length;
          if (R) {
            for (let L = 0; L < R; L++) {
              const C = H[L], I = h[C];
              (!I || !I.has(O) && !I.has(_)) && d.removeAttribute(C);
            }
            if (K3(d))
              if (rm(d)) {
                const L = d.getAttribute("href");
                L && am(L) && jr(d.protocol) && d.removeAttribute("href");
              } else J3(d) ? jr(d.action) && d.removeAttribute("action") : tm(d) ? jr(d.formAction) && d.removeAttribute("formaction") : em(d) && (jr(d.src) && d.removeAttribute("formaction"), d.setAttribute("sandbox", "allow-scripts"));
          }
        }
      }), m;
    }, this.sanitizeFor = (m, b) => {
      throw new Error('"sanitizeFor" is not implemented yet');
    };
    const { allowComments: t, allowCustomElements: r, allowUnknownMarkup: n, blockElements: u, dropElements: i, dropAttributes: l } = e;
    if (t === !1)
      throw new Error('A false "allowComments" is not supported yet');
    if (r)
      throw new Error('A true "allowCustomElements" is not supported yet');
    if (n)
      throw new Error('A true "allowUnknownMarkup" is not supported yet');
    if (u)
      throw new Error('"blockElements" is not supported yet, use "allowElements" instead');
    if (i)
      throw new Error('"dropElements" is not supported yet, use "allowElements" instead');
    if (l)
      throw new Error('"dropAttributes" is not supported yet, use "allowAttributes" instead');
    hn(this, Zt, Xn(R1), "f");
    const { allowElements: s, allowAttributes: f } = e;
    s && (i0(this, Zt, "f").allowElements = e.allowElements), f && (i0(this, Zt, "f").allowAttributes = e.allowAttributes), hn(this, ta, new Set(i0(this, Zt, "f").allowElements), "f"), hn(this, ra, Object.fromEntries(Object.entries(i0(this, Zt, "f").allowAttributes || {}).map(([m, b]) => [m, new Set(b)])), "f");
  }
}
Zt = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap();
L1.getDefaultConfiguration = () => Xn(R1);
const {
  HtmlTagHydration: xm,
  SvelteComponent: wm,
  attr: Am,
  binding_callbacks: Dm,
  children: Sm,
  claim_element: km,
  claim_html_tag: Em,
  detach: Is,
  element: Tm,
  init: Cm,
  insert_hydration: Fm,
  noop: Rs,
  safe_not_equal: Mm,
  toggle_class: Gr
} = window.__gradio__svelte__internal, { afterUpdate: _m } = window.__gradio__svelte__internal;
function Nm(a) {
  let e, t;
  return {
    c() {
      e = Tm("span"), t = new xm(!1), this.h();
    },
    l(r) {
      e = km(r, "SPAN", { class: !0 });
      var n = Sm(e);
      t = Em(n, !1), n.forEach(Is), this.h();
    },
    h() {
      t.a = null, Am(e, "class", "md svelte-1m32c2s"), Gr(
        e,
        "chatbot",
        /*chatbot*/
        a[0]
      ), Gr(
        e,
        "prose",
        /*render_markdown*/
        a[1]
      );
    },
    m(r, n) {
      Fm(r, e, n), t.m(
        /*html*/
        a[3],
        e
      ), a[10](e);
    },
    p(r, [n]) {
      n & /*html*/
      8 && t.p(
        /*html*/
        r[3]
      ), n & /*chatbot*/
      1 && Gr(
        e,
        "chatbot",
        /*chatbot*/
        r[0]
      ), n & /*render_markdown*/
      2 && Gr(
        e,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: Rs,
    o: Rs,
    d(r) {
      r && Is(e), a[10](null);
    }
  };
}
function z1(a, e, t) {
  a && (a.nodeName === e || typeof e == "function") && t(a);
  const r = a?.childNodes || [];
  for (let n = 0; n < r.length; n++)
    z1(r[n], e, t);
}
function Ls(a) {
  return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Om(a, e, t) {
  var r = this && this.__awaiter || function(O, H, R, L) {
    function C(I) {
      return I instanceof R ? I : new R(function(j) {
        j(I);
      });
    }
    return new (R || (R = Promise))(function(I, j) {
      function X(z) {
        try {
          P(L.next(z));
        } catch ($) {
          j($);
        }
      }
      function N(z) {
        try {
          P(L.throw(z));
        } catch ($) {
          j($);
        }
      }
      function P(z) {
        z.done ? I(z.value) : C(z.value).then(X, N);
      }
      P((L = L.apply(O, H || [])).next());
    });
  };
  let { chatbot: n = !0 } = e, { message: u } = e, { sanitize_html: i = !0 } = e, { latex_delimiters: l = [] } = e, { render_markdown: s = !0 } = e, { line_breaks: f = !0 } = e, { header_links: m = !1 } = e, { root: b } = e, h, d;
  const k = Cd({
    header_links: m,
    line_breaks: f,
    latex_delimiters: l
  }), E = new L1();
  let F = typeof window < "u" ? x : Z3;
  function x(O) {
    const H = new DOMParser().parseFromString(O, "text/html");
    return z1(H.body, "A", (R) => {
      R instanceof HTMLElement && "target" in R && D(R.getAttribute("href")) && (R.setAttribute("target", "_blank"), R.setAttribute("rel", "noopener noreferrer"));
    }), E.sanitize(H).body.innerHTML;
  }
  const D = (O) => {
    try {
      return !!O && new URL(O).origin !== new URL(b).origin;
    } catch {
      return !1;
    }
  };
  function A(O) {
    let H = O;
    if (s) {
      const R = [];
      l.forEach((L, C) => {
        const I = Ls(L.left), j = Ls(L.right), X = new RegExp(`${I}([\\s\\S]+?)${j}`, "g");
        H = H.replace(X, (N, P) => (R.push(N), `%%%LATEX_BLOCK_${R.length - 1}%%%`));
      }), H = k.parse(H), H = H.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (L, C) => R[parseInt(C, 10)]);
    }
    return i && F && (H = F(H)), H;
  }
  function _(O) {
    return r(this, void 0, void 0, function* () {
      l.length > 0 && O && l.some((R) => O.includes(R.left) && O.includes(R.right)) && Th(h, {
        delimiters: l,
        throwOnError: !1
      });
    });
  }
  _m(() => r(void 0, void 0, void 0, function* () {
    h && document.body.contains(h) ? yield _(u) : console.error("Element is not in the DOM");
  }));
  function B(O) {
    Dm[O ? "unshift" : "push"](() => {
      h = O, t(2, h);
    });
  }
  return a.$$set = (O) => {
    "chatbot" in O && t(0, n = O.chatbot), "message" in O && t(4, u = O.message), "sanitize_html" in O && t(5, i = O.sanitize_html), "latex_delimiters" in O && t(6, l = O.latex_delimiters), "render_markdown" in O && t(1, s = O.render_markdown), "line_breaks" in O && t(7, f = O.line_breaks), "header_links" in O && t(8, m = O.header_links), "root" in O && t(9, b = O.root);
  }, a.$$.update = () => {
    a.$$.dirty & /*message*/
    16 && (u && u.trim() ? t(3, d = A(u)) : t(3, d = ""));
  }, [
    n,
    s,
    h,
    d,
    u,
    i,
    l,
    f,
    m,
    b,
    B
  ];
}
class Bm extends wm {
  constructor(e) {
    super(), Cm(this, e, Om, Nm, Mm, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7,
      header_links: 8,
      root: 9
    });
  }
}
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: P1,
  setPrototypeOf: zs,
  isFrozen: Im,
  getPrototypeOf: Rm,
  getOwnPropertyDescriptor: Lm
} = Object;
let {
  freeze: je,
  seal: ft,
  create: q1
} = Object, {
  apply: Yn,
  construct: Zn
} = typeof Reflect < "u" && Reflect;
je || (je = function(e) {
  return e;
});
ft || (ft = function(e) {
  return e;
});
Yn || (Yn = function(e, t, r) {
  return e.apply(t, r);
});
Zn || (Zn = function(e, t) {
  return new e(...t);
});
const Vr = at(Array.prototype.forEach), Ps = at(Array.prototype.pop), H0 = at(Array.prototype.push), aa = at(String.prototype.toLowerCase), dn = at(String.prototype.toString), qs = at(String.prototype.match), U0 = at(String.prototype.replace), zm = at(String.prototype.indexOf), Pm = at(String.prototype.trim), mt = at(Object.prototype.hasOwnProperty), qe = at(RegExp.prototype.test), j0 = qm(TypeError);
function at(a) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    return Yn(a, e, r);
  };
}
function qm(a) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return Zn(a, t);
  };
}
function he(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : aa;
  zs && zs(a, null);
  let r = e.length;
  for (; r--; ) {
    let n = e[r];
    if (typeof n == "string") {
      const u = t(n);
      u !== n && (Im(e) || (e[r] = u), n = u);
    }
    a[n] = !0;
  }
  return a;
}
function Hm(a) {
  for (let e = 0; e < a.length; e++)
    mt(a, e) || (a[e] = null);
  return a;
}
function s0(a) {
  const e = q1(null);
  for (const [t, r] of P1(a))
    mt(a, t) && (Array.isArray(r) ? e[t] = Hm(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = s0(r) : e[t] = r);
  return e;
}
function G0(a, e) {
  for (; a !== null; ) {
    const r = Lm(a, e);
    if (r) {
      if (r.get)
        return at(r.get);
      if (typeof r.value == "function")
        return at(r.value);
    }
    a = Rm(a);
  }
  function t() {
    return null;
  }
  return t;
}
const Hs = je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), mn = je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pn = je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Um = je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), gn = je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jm = je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Us = je(["#text"]), js = je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), bn = je(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gs = je(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $r = je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Gm = ft(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Vm = ft(/<%[\w\W]*|[\w\W]*%>/gm), $m = ft(/\${[\w\W]*}/gm), Wm = ft(/^data-[\-\w.\u00B7-\uFFFF]/), Xm = ft(/^aria-[\-\w]+$/), H1 = ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ym = ft(/^(?:\w+script|data):/i), Zm = ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), U1 = ft(/^html$/i), Qm = ft(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Vs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Gm,
  ERB_EXPR: Vm,
  TMPLIT_EXPR: $m,
  DATA_ATTR: Wm,
  ARIA_ATTR: Xm,
  IS_ALLOWED_URI: H1,
  IS_SCRIPT_OR_DATA: Ym,
  ATTR_WHITESPACE: Zm,
  DOCTYPE_NAME: U1,
  CUSTOM_ELEMENT: Qm
});
const V0 = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Km = function() {
  return typeof window > "u" ? null : window;
}, Jm = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const u = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(u, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
};
function j1() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Km();
  const e = (te) => j1(te);
  if (e.version = "3.1.7", e.removed = [], !a || !a.document || a.document.nodeType !== V0.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = a;
  const r = t, n = r.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: i,
    Node: l,
    Element: s,
    NodeFilter: f,
    NamedNodeMap: m = a.NamedNodeMap || a.MozNamedAttrMap,
    HTMLFormElement: b,
    DOMParser: h,
    trustedTypes: d
  } = a, k = s.prototype, E = G0(k, "cloneNode"), w = G0(k, "remove"), F = G0(k, "nextSibling"), x = G0(k, "childNodes"), D = G0(k, "parentNode");
  if (typeof i == "function") {
    const te = t.createElement("template");
    te.content && te.content.ownerDocument && (t = te.content.ownerDocument);
  }
  let A, _ = "";
  const {
    implementation: B,
    createNodeIterator: O,
    createDocumentFragment: H,
    getElementsByTagName: R
  } = t, {
    importNode: L
  } = r;
  let C = {};
  e.isSupported = typeof P1 == "function" && typeof D == "function" && B && B.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: I,
    ERB_EXPR: j,
    TMPLIT_EXPR: X,
    DATA_ATTR: N,
    ARIA_ATTR: P,
    IS_SCRIPT_OR_DATA: z,
    ATTR_WHITESPACE: $,
    CUSTOM_ELEMENT: fe
  } = Vs;
  let {
    IS_ALLOWED_URI: le
  } = Vs, J = null;
  const ee = he({}, [...Hs, ...mn, ...pn, ...gn, ...Us]);
  let pe = null;
  const se = he({}, [...js, ...bn, ...Gs, ...$r]);
  let Q = Object.seal(q1(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Fe = null, De = null, Se = !0, Ke = !0, Ve = !1, ht = !0, vt = !1, _t = !0, dt = !1, m0 = !1, p0 = !1, yt = !1, Nt = !1, Ot = !1, Gu = !0, Vu = !1;
  const Q1 = "user-content-";
  let Pa = !0, B0 = !1, g0 = {}, b0 = null;
  const $u = he({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Wu = null;
  const Xu = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let qa = null;
  const Yu = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yr = "http://www.w3.org/1998/Math/MathML", xr = "http://www.w3.org/2000/svg", Bt = "http://www.w3.org/1999/xhtml";
  let v0 = Bt, Ha = !1, Ua = null;
  const K1 = he({}, [yr, xr, Bt], dn);
  let I0 = null;
  const J1 = ["application/xhtml+xml", "text/html"], ec = "text/html";
  let Oe = null, y0 = null;
  const tc = t.createElement("form"), Zu = function(T) {
    return T instanceof RegExp || T instanceof Function;
  }, ja = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(y0 && y0 === T)) {
      if ((!T || typeof T != "object") && (T = {}), T = s0(T), I0 = // eslint-disable-next-line unicorn/prefer-includes
      J1.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? ec : T.PARSER_MEDIA_TYPE, Oe = I0 === "application/xhtml+xml" ? dn : aa, J = mt(T, "ALLOWED_TAGS") ? he({}, T.ALLOWED_TAGS, Oe) : ee, pe = mt(T, "ALLOWED_ATTR") ? he({}, T.ALLOWED_ATTR, Oe) : se, Ua = mt(T, "ALLOWED_NAMESPACES") ? he({}, T.ALLOWED_NAMESPACES, dn) : K1, qa = mt(T, "ADD_URI_SAFE_ATTR") ? he(
        s0(Yu),
        // eslint-disable-line indent
        T.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Oe
        // eslint-disable-line indent
      ) : Yu, Wu = mt(T, "ADD_DATA_URI_TAGS") ? he(
        s0(Xu),
        // eslint-disable-line indent
        T.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Oe
        // eslint-disable-line indent
      ) : Xu, b0 = mt(T, "FORBID_CONTENTS") ? he({}, T.FORBID_CONTENTS, Oe) : $u, Fe = mt(T, "FORBID_TAGS") ? he({}, T.FORBID_TAGS, Oe) : {}, De = mt(T, "FORBID_ATTR") ? he({}, T.FORBID_ATTR, Oe) : {}, g0 = mt(T, "USE_PROFILES") ? T.USE_PROFILES : !1, Se = T.ALLOW_ARIA_ATTR !== !1, Ke = T.ALLOW_DATA_ATTR !== !1, Ve = T.ALLOW_UNKNOWN_PROTOCOLS || !1, ht = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1, vt = T.SAFE_FOR_TEMPLATES || !1, _t = T.SAFE_FOR_XML !== !1, dt = T.WHOLE_DOCUMENT || !1, yt = T.RETURN_DOM || !1, Nt = T.RETURN_DOM_FRAGMENT || !1, Ot = T.RETURN_TRUSTED_TYPE || !1, p0 = T.FORCE_BODY || !1, Gu = T.SANITIZE_DOM !== !1, Vu = T.SANITIZE_NAMED_PROPS || !1, Pa = T.KEEP_CONTENT !== !1, B0 = T.IN_PLACE || !1, le = T.ALLOWED_URI_REGEXP || H1, v0 = T.NAMESPACE || Bt, Q = T.CUSTOM_ELEMENT_HANDLING || {}, T.CUSTOM_ELEMENT_HANDLING && Zu(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q.tagNameCheck = T.CUSTOM_ELEMENT_HANDLING.tagNameCheck), T.CUSTOM_ELEMENT_HANDLING && Zu(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q.attributeNameCheck = T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), T.CUSTOM_ELEMENT_HANDLING && typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q.allowCustomizedBuiltInElements = T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), vt && (Ke = !1), Nt && (yt = !0), g0 && (J = he({}, Us), pe = [], g0.html === !0 && (he(J, Hs), he(pe, js)), g0.svg === !0 && (he(J, mn), he(pe, bn), he(pe, $r)), g0.svgFilters === !0 && (he(J, pn), he(pe, bn), he(pe, $r)), g0.mathMl === !0 && (he(J, gn), he(pe, Gs), he(pe, $r))), T.ADD_TAGS && (J === ee && (J = s0(J)), he(J, T.ADD_TAGS, Oe)), T.ADD_ATTR && (pe === se && (pe = s0(pe)), he(pe, T.ADD_ATTR, Oe)), T.ADD_URI_SAFE_ATTR && he(qa, T.ADD_URI_SAFE_ATTR, Oe), T.FORBID_CONTENTS && (b0 === $u && (b0 = s0(b0)), he(b0, T.FORBID_CONTENTS, Oe)), Pa && (J["#text"] = !0), dt && he(J, ["html", "head", "body"]), J.table && (he(J, ["tbody"]), delete Fe.tbody), T.TRUSTED_TYPES_POLICY) {
        if (typeof T.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw j0('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof T.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw j0('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        A = T.TRUSTED_TYPES_POLICY, _ = A.createHTML("");
      } else
        A === void 0 && (A = Jm(d, n)), A !== null && typeof _ == "string" && (_ = A.createHTML(""));
      je && je(T), y0 = T;
    }
  }, Qu = he({}, ["mi", "mo", "mn", "ms", "mtext"]), Ku = he({}, ["annotation-xml"]), rc = he({}, ["title", "style", "font", "a", "script"]), Ju = he({}, [...mn, ...pn, ...Um]), ei = he({}, [...gn, ...jm]), ac = function(T) {
    let V = D(T);
    (!V || !V.tagName) && (V = {
      namespaceURI: v0,
      tagName: "template"
    });
    const K = aa(T.tagName), we = aa(V.tagName);
    return Ua[T.namespaceURI] ? T.namespaceURI === xr ? V.namespaceURI === Bt ? K === "svg" : V.namespaceURI === yr ? K === "svg" && (we === "annotation-xml" || Qu[we]) : !!Ju[K] : T.namespaceURI === yr ? V.namespaceURI === Bt ? K === "math" : V.namespaceURI === xr ? K === "math" && Ku[we] : !!ei[K] : T.namespaceURI === Bt ? V.namespaceURI === xr && !Ku[we] || V.namespaceURI === yr && !Qu[we] ? !1 : !ei[K] && (rc[K] || !Ju[K]) : !!(I0 === "application/xhtml+xml" && Ua[T.namespaceURI]) : !1;
  }, xt = function(T) {
    H0(e.removed, {
      element: T
    });
    try {
      D(T).removeChild(T);
    } catch {
      w(T);
    }
  }, wr = function(T, V) {
    try {
      H0(e.removed, {
        attribute: V.getAttributeNode(T),
        from: V
      });
    } catch {
      H0(e.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(T), T === "is" && !pe[T])
      if (yt || Nt)
        try {
          xt(V);
        } catch {
        }
      else
        try {
          V.setAttribute(T, "");
        } catch {
        }
  }, ti = function(T) {
    let V = null, K = null;
    if (p0)
      T = "<remove></remove>" + T;
    else {
      const Ie = qs(T, /^[\r\n\t ]+/);
      K = Ie && Ie[0];
    }
    I0 === "application/xhtml+xml" && v0 === Bt && (T = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + T + "</body></html>");
    const we = A ? A.createHTML(T) : T;
    if (v0 === Bt)
      try {
        V = new h().parseFromString(we, I0);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = B.createDocument(v0, "template", null);
      try {
        V.documentElement.innerHTML = Ha ? _ : we;
      } catch {
      }
    }
    const Le = V.body || V.documentElement;
    return T && K && Le.insertBefore(t.createTextNode(K), Le.childNodes[0] || null), v0 === Bt ? R.call(V, dt ? "html" : "body")[0] : dt ? V.documentElement : Le;
  }, ri = function(T) {
    return O.call(
      T.ownerDocument || T,
      T,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, ai = function(T) {
    return T instanceof b && (typeof T.nodeName != "string" || typeof T.textContent != "string" || typeof T.removeChild != "function" || !(T.attributes instanceof m) || typeof T.removeAttribute != "function" || typeof T.setAttribute != "function" || typeof T.namespaceURI != "string" || typeof T.insertBefore != "function" || typeof T.hasChildNodes != "function");
  }, ni = function(T) {
    return typeof l == "function" && T instanceof l;
  }, It = function(T, V, K) {
    C[T] && Vr(C[T], (we) => {
      we.call(e, V, K, y0);
    });
  }, ui = function(T) {
    let V = null;
    if (It("beforeSanitizeElements", T, null), ai(T))
      return xt(T), !0;
    const K = Oe(T.nodeName);
    if (It("uponSanitizeElement", T, {
      tagName: K,
      allowedTags: J
    }), T.hasChildNodes() && !ni(T.firstElementChild) && qe(/<[/\w]/g, T.innerHTML) && qe(/<[/\w]/g, T.textContent) || T.nodeType === V0.progressingInstruction || _t && T.nodeType === V0.comment && qe(/<[/\w]/g, T.data))
      return xt(T), !0;
    if (!J[K] || Fe[K]) {
      if (!Fe[K] && si(K) && (Q.tagNameCheck instanceof RegExp && qe(Q.tagNameCheck, K) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(K)))
        return !1;
      if (Pa && !b0[K]) {
        const we = D(T) || T.parentNode, Le = x(T) || T.childNodes;
        if (Le && we) {
          const Ie = Le.length;
          for (let $e = Ie - 1; $e >= 0; --$e) {
            const wt = E(Le[$e], !0);
            wt.__removalCount = (T.__removalCount || 0) + 1, we.insertBefore(wt, F(T));
          }
        }
      }
      return xt(T), !0;
    }
    return T instanceof s && !ac(T) || (K === "noscript" || K === "noembed" || K === "noframes") && qe(/<\/no(script|embed|frames)/i, T.innerHTML) ? (xt(T), !0) : (vt && T.nodeType === V0.text && (V = T.textContent, Vr([I, j, X], (we) => {
      V = U0(V, we, " ");
    }), T.textContent !== V && (H0(e.removed, {
      element: T.cloneNode()
    }), T.textContent = V)), It("afterSanitizeElements", T, null), !1);
  }, ii = function(T, V, K) {
    if (Gu && (V === "id" || V === "name") && (K in t || K in tc))
      return !1;
    if (!(Ke && !De[V] && qe(N, V))) {
      if (!(Se && qe(P, V))) {
        if (!pe[V] || De[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(si(T) && (Q.tagNameCheck instanceof RegExp && qe(Q.tagNameCheck, T) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(T)) && (Q.attributeNameCheck instanceof RegExp && qe(Q.attributeNameCheck, V) || Q.attributeNameCheck instanceof Function && Q.attributeNameCheck(V)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && Q.allowCustomizedBuiltInElements && (Q.tagNameCheck instanceof RegExp && qe(Q.tagNameCheck, K) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(K)))
          ) return !1;
        } else if (!qa[V]) {
          if (!qe(le, U0(K, $, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && T !== "script" && zm(K, "data:") === 0 && Wu[T])) {
              if (!(Ve && !qe(z, U0(K, $, "")))) {
                if (K)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, si = function(T) {
    return T !== "annotation-xml" && qs(T, fe);
  }, li = function(T) {
    It("beforeSanitizeAttributes", T, null);
    const {
      attributes: V
    } = T;
    if (!V)
      return;
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: pe
    };
    let we = V.length;
    for (; we--; ) {
      const Le = V[we], {
        name: Ie,
        namespaceURI: $e,
        value: wt
      } = Le, R0 = Oe(Ie);
      let ze = Ie === "value" ? wt : Pm(wt);
      if (K.attrName = R0, K.attrValue = ze, K.keepAttr = !0, K.forceKeepAttr = void 0, It("uponSanitizeAttribute", T, K), ze = K.attrValue, K.forceKeepAttr || (wr(Ie, T), !K.keepAttr))
        continue;
      if (!ht && qe(/\/>/i, ze)) {
        wr(Ie, T);
        continue;
      }
      vt && Vr([I, j, X], (ci) => {
        ze = U0(ze, ci, " ");
      });
      const oi = Oe(T.nodeName);
      if (ii(oi, R0, ze)) {
        if (Vu && (R0 === "id" || R0 === "name") && (wr(Ie, T), ze = Q1 + ze), _t && qe(/((--!?|])>)|<\/(style|title)/i, ze)) {
          wr(Ie, T);
          continue;
        }
        if (A && typeof d == "object" && typeof d.getAttributeType == "function" && !$e)
          switch (d.getAttributeType(oi, R0)) {
            case "TrustedHTML": {
              ze = A.createHTML(ze);
              break;
            }
            case "TrustedScriptURL": {
              ze = A.createScriptURL(ze);
              break;
            }
          }
        try {
          $e ? T.setAttributeNS($e, Ie, ze) : T.setAttribute(Ie, ze), ai(T) ? xt(T) : Ps(e.removed);
        } catch {
        }
      }
    }
    It("afterSanitizeAttributes", T, null);
  }, nc = function te(T) {
    let V = null;
    const K = ri(T);
    for (It("beforeSanitizeShadowDOM", T, null); V = K.nextNode(); )
      It("uponSanitizeShadowNode", V, null), !ui(V) && (V.content instanceof u && te(V.content), li(V));
    It("afterSanitizeShadowDOM", T, null);
  };
  return e.sanitize = function(te) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, K = null, we = null, Le = null;
    if (Ha = !te, Ha && (te = "<!-->"), typeof te != "string" && !ni(te))
      if (typeof te.toString == "function") {
        if (te = te.toString(), typeof te != "string")
          throw j0("dirty is not a string, aborting");
      } else
        throw j0("toString is not a function");
    if (!e.isSupported)
      return te;
    if (m0 || ja(T), e.removed = [], typeof te == "string" && (B0 = !1), B0) {
      if (te.nodeName) {
        const wt = Oe(te.nodeName);
        if (!J[wt] || Fe[wt])
          throw j0("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (te instanceof l)
      V = ti("<!---->"), K = V.ownerDocument.importNode(te, !0), K.nodeType === V0.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? V = K : V.appendChild(K);
    else {
      if (!yt && !vt && !dt && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return A && Ot ? A.createHTML(te) : te;
      if (V = ti(te), !V)
        return yt ? null : Ot ? _ : "";
    }
    V && p0 && xt(V.firstChild);
    const Ie = ri(B0 ? te : V);
    for (; we = Ie.nextNode(); )
      ui(we) || (we.content instanceof u && nc(we.content), li(we));
    if (B0)
      return te;
    if (yt) {
      if (Nt)
        for (Le = H.call(V.ownerDocument); V.firstChild; )
          Le.appendChild(V.firstChild);
      else
        Le = V;
      return (pe.shadowroot || pe.shadowrootmode) && (Le = L.call(r, Le, !0)), Le;
    }
    let $e = dt ? V.outerHTML : V.innerHTML;
    return dt && J["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && qe(U1, V.ownerDocument.doctype.name) && ($e = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + $e), vt && Vr([I, j, X], (wt) => {
      $e = U0($e, wt, " ");
    }), A && Ot ? A.createHTML($e) : $e;
  }, e.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ja(te), m0 = !0;
  }, e.clearConfig = function() {
    y0 = null, m0 = !1;
  }, e.isValidAttribute = function(te, T, V) {
    y0 || ja({});
    const K = Oe(te), we = Oe(T);
    return ii(K, we, V);
  }, e.addHook = function(te, T) {
    typeof T == "function" && (C[te] = C[te] || [], H0(C[te], T));
  }, e.removeHook = function(te) {
    if (C[te])
      return Ps(C[te]);
  }, e.removeHooks = function(te) {
    C[te] && (C[te] = []);
  }, e.removeAllHooks = function() {
    C = {};
  }, e;
}
j1();
const {
  SvelteComponent: e6,
  attr: t6,
  children: r6,
  claim_component: a6,
  claim_element: n6,
  create_component: u6,
  destroy_component: i6,
  detach: $s,
  element: s6,
  init: l6,
  insert_hydration: o6,
  mount_component: c6,
  safe_not_equal: f6,
  transition_in: h6,
  transition_out: d6
} = window.__gradio__svelte__internal;
function m6(a) {
  let e, t, r;
  return t = new Bm({
    props: {
      root: (
        /*root*/
        a[1]
      ),
      message: (
        /*info*/
        a[0]
      ),
      sanitize_html: !0
    }
  }), {
    c() {
      e = s6("div"), u6(t.$$.fragment), this.h();
    },
    l(n) {
      e = n6(n, "DIV", { class: !0 });
      var u = r6(e);
      a6(t.$$.fragment, u), u.forEach($s), this.h();
    },
    h() {
      t6(e, "class", "svelte-1hnfib2");
    },
    m(n, u) {
      o6(n, e, u), c6(t, e, null), r = !0;
    },
    p(n, [u]) {
      const i = {};
      u & /*root*/
      2 && (i.root = /*root*/
      n[1]), u & /*info*/
      1 && (i.message = /*info*/
      n[0]), t.$set(i);
    },
    i(n) {
      r || (h6(t.$$.fragment, n), r = !0);
    },
    o(n) {
      d6(t.$$.fragment, n), r = !1;
    },
    d(n) {
      n && $s(e), i6(t);
    }
  };
}
function p6(a, e, t) {
  let { info: r } = e, { root: n } = e;
  return a.$$set = (u) => {
    "info" in u && t(0, r = u.info), "root" in u && t(1, n = u.root);
  }, [r, n];
}
class g6 extends e6 {
  constructor(e) {
    super(), l6(this, e, p6, m6, f6, { info: 0, root: 1 });
  }
}
const {
  SvelteComponent: b6,
  attr: Ws,
  check_outros: v6,
  children: y6,
  claim_component: x6,
  claim_element: w6,
  claim_space: A6,
  create_component: D6,
  create_slot: S6,
  destroy_component: k6,
  detach: Wr,
  element: E6,
  empty: Xs,
  get_all_dirty_from_scope: T6,
  get_slot_changes: C6,
  group_outros: F6,
  init: M6,
  insert_hydration: vn,
  mount_component: _6,
  safe_not_equal: N6,
  space: O6,
  toggle_class: A0,
  transition_in: X0,
  transition_out: na,
  update_slot_base: B6
} = window.__gradio__svelte__internal;
function Ys(a) {
  let e, t;
  return e = new g6({
    props: {
      root: (
        /*root*/
        a[2]
      ),
      info: (
        /*info*/
        a[1]
      )
    }
  }), {
    c() {
      D6(e.$$.fragment);
    },
    l(r) {
      x6(e.$$.fragment, r);
    },
    m(r, n) {
      _6(e, r, n), t = !0;
    },
    p(r, n) {
      const u = {};
      n & /*root*/
      4 && (u.root = /*root*/
      r[2]), n & /*info*/
      2 && (u.info = /*info*/
      r[1]), e.$set(u);
    },
    i(r) {
      t || (X0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      na(e.$$.fragment, r), t = !1;
    },
    d(r) {
      k6(e, r);
    }
  };
}
function I6(a) {
  let e, t, r, n;
  const u = (
    /*#slots*/
    a[4].default
  ), i = S6(
    u,
    a,
    /*$$scope*/
    a[3],
    null
  );
  let l = (
    /*info*/
    a[1] && Ys(a)
  );
  return {
    c() {
      e = E6("span"), i && i.c(), t = O6(), l && l.c(), r = Xs(), this.h();
    },
    l(s) {
      e = w6(s, "SPAN", { "data-testid": !0, class: !0 });
      var f = y6(e);
      i && i.l(f), f.forEach(Wr), t = A6(s), l && l.l(s), r = Xs(), this.h();
    },
    h() {
      Ws(e, "data-testid", "block-info"), Ws(e, "class", "svelte-22c38v"), A0(e, "sr-only", !/*show_label*/
      a[0]), A0(e, "hide", !/*show_label*/
      a[0]), A0(
        e,
        "has-info",
        /*info*/
        a[1] != null
      );
    },
    m(s, f) {
      vn(s, e, f), i && i.m(e, null), vn(s, t, f), l && l.m(s, f), vn(s, r, f), n = !0;
    },
    p(s, [f]) {
      i && i.p && (!n || f & /*$$scope*/
      8) && B6(
        i,
        u,
        s,
        /*$$scope*/
        s[3],
        n ? C6(
          u,
          /*$$scope*/
          s[3],
          f,
          null
        ) : T6(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!n || f & /*show_label*/
      1) && A0(e, "sr-only", !/*show_label*/
      s[0]), (!n || f & /*show_label*/
      1) && A0(e, "hide", !/*show_label*/
      s[0]), (!n || f & /*info*/
      2) && A0(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? l ? (l.p(s, f), f & /*info*/
      2 && X0(l, 1)) : (l = Ys(s), l.c(), X0(l, 1), l.m(r.parentNode, r)) : l && (F6(), na(l, 1, 1, () => {
        l = null;
      }), v6());
    },
    i(s) {
      n || (X0(i, s), X0(l), n = !0);
    },
    o(s) {
      na(i, s), na(l), n = !1;
    },
    d(s) {
      s && (Wr(e), Wr(t), Wr(r)), i && i.d(s), l && l.d(s);
    }
  };
}
function R6(a, e, t) {
  let { $$slots: r = {}, $$scope: n } = e, { show_label: u = !0 } = e, { info: i = void 0 } = e, { root: l } = e;
  return a.$$set = (s) => {
    "show_label" in s && t(0, u = s.show_label), "info" in s && t(1, i = s.info), "root" in s && t(2, l = s.root), "$$scope" in s && t(3, n = s.$$scope);
  }, [u, i, l, n, r];
}
class L6 extends b6 {
  constructor(e) {
    super(), M6(this, e, R6, I6, N6, { show_label: 0, info: 1, root: 2 });
  }
}
const {
  SvelteComponent: z6,
  append_hydration: Zs,
  attr: yn,
  binding_callbacks: P6,
  children: q6,
  claim_component: G1,
  claim_element: Qs,
  claim_space: H6,
  claim_text: U6,
  create_component: V1,
  destroy_component: $1,
  detach: Qn,
  element: Ks,
  init: j6,
  insert_hydration: W1,
  listen: Js,
  mount_component: X1,
  run_all: G6,
  safe_not_equal: V6,
  set_data: $6,
  set_input_value: el,
  space: W6,
  text: X6,
  toggle_class: tl,
  transition_in: Y1,
  transition_out: Z1
} = window.__gradio__svelte__internal;
function Y6(a) {
  let e;
  return {
    c() {
      e = X6(
        /*label*/
        a[1]
      );
    },
    l(t) {
      e = U6(
        t,
        /*label*/
        a[1]
      );
    },
    m(t, r) {
      W1(t, e, r);
    },
    p(t, r) {
      r & /*label*/
      2 && $6(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function Z6(a) {
  let e, t, r, n, u, i, l, s;
  return t = new L6({
    props: {
      show_label: (
        /*show_label*/
        a[8]
      ),
      info: (
        /*info*/
        a[6]
      ),
      $$slots: { default: [Y6] },
      $$scope: { ctx: a }
    }
  }), {
    c() {
      e = Ks("label"), V1(t.$$.fragment), r = W6(), n = Ks("input"), this.h();
    },
    l(f) {
      e = Qs(f, "LABEL", { class: !0 });
      var m = q6(e);
      G1(t.$$.fragment, m), r = H6(m), n = Qs(m, "INPUT", { type: !0, class: !0 }), m.forEach(Qn), this.h();
    },
    h() {
      yn(n, "type", "date"), n.disabled = u = !/*interactive*/
      a[10], yn(n, "class", "svelte-c6v8zr"), yn(e, "class", "svelte-c6v8zr"), tl(
        e,
        "container",
        /*container*/
        a[9]
      );
    },
    m(f, m) {
      W1(f, e, m), X1(t, e, null), Zs(e, r), Zs(e, n), a[15](n), el(
        n,
        /*value*/
        a[0]
      ), i = !0, l || (s = [
        Js(
          n,
          "input",
          /*input_input_handler*/
          a[16]
        ),
        Js(
          n,
          "change",
          /*handle_change*/
          a[12]
        )
      ], l = !0);
    },
    p(f, m) {
      const b = {};
      m & /*show_label*/
      256 && (b.show_label = /*show_label*/
      f[8]), m & /*info*/
      64 && (b.info = /*info*/
      f[6]), m & /*$$scope, label*/
      131074 && (b.$$scope = { dirty: m, ctx: f }), t.$set(b), (!i || m & /*interactive*/
      1024 && u !== (u = !/*interactive*/
      f[10])) && (n.disabled = u), m & /*value*/
      1 && el(
        n,
        /*value*/
        f[0]
      ), (!i || m & /*container*/
      512) && tl(
        e,
        "container",
        /*container*/
        f[9]
      );
    },
    i(f) {
      i || (Y1(t.$$.fragment, f), i = !0);
    },
    o(f) {
      Z1(t.$$.fragment, f), i = !1;
    },
    d(f) {
      f && Qn(e), $1(t), a[15](null), l = !1, G6(s);
    }
  };
}
function Q6(a) {
  let e, t;
  return e = new wc({
    props: {
      visible: (
        /*visible*/
        a[2]
      ),
      elem_id: (
        /*elem_id*/
        a[4]
      ),
      elem_classes: (
        /*elem_classes*/
        a[3]
      ),
      scale: (
        /*scale*/
        a[5]
      ),
      min_width: (
        /*min_width*/
        a[7]
      ),
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [Z6] },
      $$scope: { ctx: a }
    }
  }), {
    c() {
      V1(e.$$.fragment);
    },
    l(r) {
      G1(e.$$.fragment, r);
    },
    m(r, n) {
      X1(e, r, n), t = !0;
    },
    p(r, [n]) {
      const u = {};
      n & /*visible*/
      4 && (u.visible = /*visible*/
      r[2]), n & /*elem_id*/
      16 && (u.elem_id = /*elem_id*/
      r[4]), n & /*elem_classes*/
      8 && (u.elem_classes = /*elem_classes*/
      r[3]), n & /*scale*/
      32 && (u.scale = /*scale*/
      r[5]), n & /*min_width*/
      128 && (u.min_width = /*min_width*/
      r[7]), n & /*$$scope, container, interactive, el, value, show_label, info, label*/
      134979 && (u.$$scope = { dirty: n, ctx: r }), e.$set(u);
    },
    i(r) {
      t || (Y1(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Z1(e.$$.fragment, r), t = !1;
    },
    d(r) {
      $1(e, r);
    }
  };
}
function K6(a, e, t) {
  let { value: r = null } = e, { value_is_output: n = !1 } = e, { label: u } = e, { visible: i = !0 } = e, { elem_classes: l } = e, { elem_id: s } = e, { scale: f } = e, { info: m } = e, { min_width: b } = e, { show_label: h = !0 } = e, { container: d = !0 } = e, { interactive: k = !0 } = e, { gradio: E } = e, w;
  function F() {
    E.dispatch("change"), n || (E.dispatch("submit"), E.dispatch("input"));
  }
  function x(A) {
    P6[A ? "unshift" : "push"](() => {
      w = A, t(11, w);
    });
  }
  function D() {
    r = this.value, t(0, r);
  }
  return a.$$set = (A) => {
    "value" in A && t(0, r = A.value), "value_is_output" in A && t(13, n = A.value_is_output), "label" in A && t(1, u = A.label), "visible" in A && t(2, i = A.visible), "elem_classes" in A && t(3, l = A.elem_classes), "elem_id" in A && t(4, s = A.elem_id), "scale" in A && t(5, f = A.scale), "info" in A && t(6, m = A.info), "min_width" in A && t(7, b = A.min_width), "show_label" in A && t(8, h = A.show_label), "container" in A && t(9, d = A.container), "interactive" in A && t(10, k = A.interactive), "gradio" in A && t(14, E = A.gradio);
  }, a.$$.update = () => {
    a.$$.dirty & /*value*/
    1 && r === null && t(0, r = (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), a.$$.dirty & /*value*/
    1 && F();
  }, [
    r,
    u,
    i,
    l,
    s,
    f,
    m,
    b,
    h,
    d,
    k,
    w,
    F,
    n,
    E,
    x,
    D
  ];
}
class pp extends z6 {
  constructor(e) {
    super(), j6(this, e, K6, Q6, V6, {
      value: 0,
      value_is_output: 13,
      label: 1,
      visible: 2,
      elem_classes: 3,
      elem_id: 4,
      scale: 5,
      info: 6,
      min_width: 7,
      show_label: 8,
      container: 9,
      interactive: 10,
      gradio: 14
    });
  }
}
export {
  pp as default
};
