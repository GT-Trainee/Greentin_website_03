! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4353a849-6de0-4d29-947d-ada2020a44e3", e._sentryDebugIdIdentifier = "sentry-dbid-4353a849-6de0-4d29-947d-ada2020a44e3")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4309], {
        57093: function(e, t, a) {
            a.d(t, {
                L: function() {
                    return i
                }
            });
            var o = a(22674),
                n = a(49363),
                d = a(96526),
                c = a(89463);
            let i = (0, n.ZP)(d.o).withConfig({
                componentId: "sc-d0c249d9-0"
            })({
                display: "flex",
                flexDirection: "column",
                marginTop: 0,
                marginBottom: 0,
                width: "100%",
                maxWidth: "initial",
                padding: "".concat(o.WU.space.s20, " calc((100vw - ").concat(c.W9.layoutMaxWidth, ") / 2)"),
                backgroundColor: o.WU.color.black,
                ["@media ".concat(o.WU.media.lg)]: {
                    paddingTop: o.WU.space.s40,
                    paddingBottom: o.WU.space.s40
                }
            })
        },
        44309: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var o = a(85893),
                n = a(22674),
                d = a(49363),
                c = a(57093),
                i = a(96526),
                r = a(89463);
            let l = (0, d.ZP)(i.o).withConfig({
                    componentId: "sc-566dae73-0"
                })(r._F.h5, {
                    color: n.WU.color.grey50,
                    marginTop: n.WU.space.s48,
                    marginBottom: n.WU.space.s48,
                    textAlign: "left",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    ["@media ".concat(n.WU.media.md)]: {
                        textAlign: "center"
                    },
                    ["@media ".concat(n.WU.media.lg)]: {
                        marginTop: n.WU.space.s64,
                        marginBottom: n.WU.space.s64
                    },
                    ["@media ".concat(n.WU.media.xxl)]: {
                        marginTop: "80px",
                        marginBottom: "80px"
                    },
                    ["".concat(c.L, " &")]: {
                        color: n.WU.color.white,
                        marginTop: n.WU.space.s40,
                        marginBottom: n.WU.space.s40,
                        textAlign: "left",
                        ...r._F.h4
                    }
                }),
                s = e => {
                    let {
                        id: t,
                        anchor: a,
                        content: {
                            title: n
                        }
                    } = e;
                    return (0, o.jsx)(l, {
                        id: null != a ? a : t,
                        "data-blockid": t,
                        color: "grey-50",
                        role: "doc-subtitle",
                        use: "h2",
                        children: n
                    })
                }
        }
    }
]);
//# sourceMappingURL=4309.c20bbeb67aa2b244.js.map