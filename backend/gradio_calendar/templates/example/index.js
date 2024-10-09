const {
  SvelteComponent: f,
  append_hydration: r,
  attr: u,
  children: o,
  claim_element: h,
  claim_text: g,
  detach: d,
  element: v,
  init: m,
  insert_hydration: y,
  noop: _,
  safe_not_equal: b,
  set_data: w,
  text: E,
  toggle_class: s
} = window.__gradio__svelte__internal;
function q(a) {
  let e, n;
  return {
    c() {
      e = v("div"), n = E(
        /*value*/
        a[0]
      ), this.h();
    },
    l(t) {
      e = h(t, "DIV", { class: !0 });
      var l = o(e);
      n = g(
        l,
        /*value*/
        a[0]
      ), l.forEach(d), this.h();
    },
    h() {
      u(e, "class", "svelte-1gecy8w"), s(
        e,
        "table",
        /*type*/
        a[1] === "table"
      ), s(
        e,
        "gallery",
        /*type*/
        a[1] === "gallery"
      ), s(
        e,
        "selected",
        /*selected*/
        a[2]
      );
    },
    m(t, l) {
      y(t, e, l), r(e, n);
    },
    p(t, [l]) {
      l & /*value*/
      1 && w(
        n,
        /*value*/
        t[0]
      ), l & /*type*/
      2 && s(
        e,
        "table",
        /*type*/
        t[1] === "table"
      ), l & /*type*/
      2 && s(
        e,
        "gallery",
        /*type*/
        t[1] === "gallery"
      ), l & /*selected*/
      4 && s(
        e,
        "selected",
        /*selected*/
        t[2]
      );
    },
    i: _,
    o: _,
    d(t) {
      t && d(e);
    }
  };
}
function C(a, e, n) {
  let { value: t } = e, { type: l } = e, { selected: c = !1 } = e;
  return a.$$set = (i) => {
    "value" in i && n(0, t = i.value), "type" in i && n(1, l = i.type), "selected" in i && n(2, c = i.selected);
  }, [t, l, c];
}
class D extends f {
  constructor(e) {
    super(), m(this, e, C, q, b, { value: 0, type: 1, selected: 2 });
  }
}
export {
  D as default
};
