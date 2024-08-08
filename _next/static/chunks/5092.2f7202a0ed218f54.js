! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9ea0e207-943f-43e5-b5ae-95353908050c", e._sentryDebugIdIdentifier = "sentry-dbid-9ea0e207-943f-43e5-b5ae-95353908050c")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5092], {
        47154: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return d
                }
            });
            var r = n(49363),
                a = n(39072),
                o = n(44547),
                i = n(63537);

            function l(e) {
                return (0, i.hj)(e) ? "repeat(" + e + ", 1fr)" : e
            }
            var s = (0, o.By)({
                    template: {
                        property: "gridTemplate"
                    },
                    columns: {
                        property: "gridTemplateColumns",
                        transform: l
                    },
                    rows: {
                        property: "gridTemplateRows",
                        transform: l
                    },
                    autoFlow: {
                        property: "gridAutoFlow"
                    },
                    autoRows: {
                        property: "gridAutoRows"
                    },
                    autoColumns: {
                        property: "gridAutoColumns"
                    },
                    placeItems: !0,
                    placeContent: !0
                }),
                c = n(27061),
                d = (0, r.ZP)(c.x).withConfig({
                    displayName: "Grid",
                    componentId: "rui__sc-11lbuez-0"
                })(["display:grid;", ";", ";"], a.S, s)
        },
        8954: function(e, t, n) {
            n.d(t, {
                Ee: function() {
                    return d
                },
                s1: function() {
                    return c
                }
            });
            var r = n(67294),
                a = n(22674),
                o = n(69526),
                i = n(27061),
                l = ["role", "scale", "sizes", "src", "srcSet", "image", "alt", "style", "variant"];

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = {
                    COVER: "cover",
                    CONTAIN: "contain"
                },
                d = (0, r.forwardRef)(function(e, t) {
                    var n, c = e.role,
                        d = e.scale,
                        u = e.sizes,
                        g = e.src,
                        p = e.srcSet,
                        f = e.image,
                        m = e.alt,
                        h = e.style,
                        x = e.variant,
                        w = function(e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(e, l);
                    return r.createElement(i.x, s({
                        use: "img",
                        ref: t,
                        role: c,
                        display: "block",
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        radius: "round" === x ? a.bQ.radius.image : void 0,
                        sizes: u,
                        alt: m,
                        style: s({
                            objectFit: d
                        }, h)
                    }, "image" in (n = {
                        src: g,
                        srcSet: p,
                        image: f
                    }) && void 0 !== n.image ? (0, o.Nf)(n.image) : n, w))
                })
        },
        6388: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return g
                }
            });
            var r = n(85893),
                a = n(67294),
                o = n(939),
                i = n(49363),
                l = n(73307),
                s = n(26832),
                c = n(6484),
                d = n(36598);
            let u = (0, i.ZP)(o.xv).withConfig({
                    componentId: "sc-349000c0-0"
                })({
                    wordBreak: "break-word"
                }),
                g = (0, a.forwardRef)((e, t) => {
                    let {
                        value: n,
                        gaEvent: a,
                        query: o,
                        onClick: i,
                        ...g
                    } = e, p = (0, l.U)(), {
                        trackLink: f
                    } = (0, s.z$)(), m = e => {
                        if (p) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }(0, c.mf)(i) && i(e), f(e, a, n)
                    };
                    return n ? (0, r.jsx)(d._, {
                        value: n,
                        query: o,
                        children: (0, r.jsx)(u, {
                            ref: t,
                            use: "a",
                            onClick: m,
                            ...g
                        })
                    }) : (0, r.jsx)(u, {
                        ref: t,
                        use: "a",
                        onClick: m,
                        ...g
                    })
                });
            g.displayName = "Link"
        },
        52976: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return p
                }
            });
            var r = n(85893),
                a = n(31346),
                o = n(22674),
                i = n(15059),
                l = n(49363),
                s = n(79645),
                c = n(9538),
                d = n(6388);
            let u = (0, l.ZP)(a.k).withConfig({
                    componentId: "sc-8a0391c3-0"
                })(e => {
                    let {
                        alignSelf: t = "end",
                        arrowVariant: n
                    } = e;
                    return {
                        alignItems: "center",
                        alignSelf: t,
                        borderRadius: 9999,
                        color: "default" === n ? o.WU.color.foreground : o.WU.color.accent,
                        flexShrink: 0,
                        height: 32,
                        justifyContent: "center",
                        justifySelf: "end",
                        transition: "all 0.3s",
                        width: 32
                    }
                }),
                g = (0, l.ZP)(d.r).withConfig({
                    componentId: "sc-8a0391c3-1"
                })(e => {
                    let {
                        flexDirection: t,
                        arrowVariant: n
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: t,
                        ["&:hover ".concat(u)]: {
                            backgroundColor: "default" === n ? o.WU.color.foreground : o.WU.color.accent,
                            color: "default" === n ? o.WU.color.background : o.WU.color.white
                        }
                    }
                }),
                p = e => {
                    let {
                        children: t,
                        useIcon: n,
                        variant: o = "vertical",
                        arrowVariant: l = "default",
                        title: d,
                        ...p
                    } = e, f = (0, s.T)(), m = null != d ? d : f("shared.button.learnMore");
                    return (0, r.jsxs)(g, {
                        flexDirection: "horizontal" === o ? "row" : "column",
                        arrowVariant: l,
                        title: m,
                        ...p,
                        children: [t, (0, r.jsxs)(a.k, {
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "s-8",
                            color: l,
                            children: [d && (0, r.jsx)(c.x, {
                                variant: "subtitle2",
                                children: m
                            }), (0, r.jsx)(u, {
                                use: "span",
                                alignSelf: "horizontal" === o ? "center" : "end",
                                ml: d ? "initial" : "auto",
                                arrowVariant: l,
                                children: n ? (0, r.jsx)(n, {}) : (0, r.jsx)(i.J, {
                                    name: "ArrowThinRight",
                                    marginRight: "1px"
                                })
                            })]
                        })]
                    })
                }
        },
        75092: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var r, a, o = n(85893),
                i = n(25533),
                l = n(22674),
                s = n(47154),
                c = n(96526),
                d = n(27061),
                u = n(56607),
                g = n(49363),
                p = n(16678),
                f = n(52976),
                m = n(83128),
                h = n(9538),
                x = n(89463);
            (r = a || (a = {})).Default = "default", r.Images = "images";
            let w = (e, t, n) => {
                    let r = Math.ceil(n / Math.ceil(n / t)),
                        a = n % r,
                        o = e >= n - a,
                        i = o ? 12 / a : 12 / r,
                        l = o ? (e + a) % n : e % r;
                    return "".concat(l * i + 1, " / ").concat((l + 1) * i + 1)
                },
                v = (0, g.ZP)(d.x).withConfig({
                    componentId: "sc-72e82ad0-0"
                })(e => {
                    let {
                        hasLink: t,
                        index: n,
                        rowLength: r
                    } = e;
                    return {
                        listStyle: "none",
                        backgroundColor: x.W9.groupedBackground,
                        borderRadius: 20,
                        color: l.WU.color.foreground,
                        minWidth: 0,
                        padding: l.WU.space.s24,
                        paddingBottom: t ? 0 : l.WU.space.s24,
                        gridColumn: "1",
                        ["@media ".concat(l.WU.media.md)]: {
                            gridColumn: w(n, 3, r)
                        },
                        ["@media ".concat(l.WU.media.lg)]: {
                            gridColumn: w(n, 4, r)
                        },
                        ["@media ".concat(l.WU.media.xxl)]: {
                            padding: l.WU.space.s32,
                            paddingBottom: t ? 0 : l.WU.space.s32
                        }
                    }
                }),
                b = (0, g.ZP)(f.A).withConfig({
                    componentId: "sc-72e82ad0-1"
                })({
                    display: "grid",
                    gridTemplateRows: "1fr auto",
                    height: "100%",
                    paddingBottom: l.WU.space.s16,
                    ["@media ".concat(l.WU.media.xxl)]: {
                        paddingBottom: l.WU.space.s24
                    }
                }),
                y = (0, g.ZP)(u.g).withConfig({
                    componentId: "sc-72e82ad0-2"
                })(p.bU({
                    variants: {
                        [a.Default]: {
                            alignItems: "flex-start",
                            gap: l.WU.space.s8,
                            marginBottom: l.WU.space.s4,
                            ["@media ".concat(l.WU.media.lg)]: {
                                marginBottom: l.WU.space.s8
                            }
                        },
                        [a.Images]: {
                            alignItems: "center",
                            textAlign: "center",
                            gap: l.WU.space.s16,
                            marginBottom: l.WU.space.s8,
                            ["@media ".concat(l.WU.media.lg)]: {
                                marginBottom: l.WU.space.s16
                            },
                            ["@media ".concat(l.WU.media.xl)]: {
                                gap: l.WU.space.s24
                            }
                        }
                    }
                })),
                W = (0, g.ZP)(h.x).withConfig({
                    componentId: "sc-72e82ad0-3"
                })({
                    hyphens: "auto",
                    wordBreak: "break-word"
                }),
                U = e => {
                    let {
                        button: t,
                        caption: n,
                        description: r,
                        image: i,
                        index: l,
                        rowLength: s,
                        prefix: c,
                        title: d,
                        variant: g,
                        titleVariant: p
                    } = e, f = null == t ? void 0 : t.link, x = g === a.Images, w = (0, o.jsxs)(y, {
                        height: "100%",
                        variant: g,
                        children: [x && i && (0, o.jsx)(m.Y, {
                            alt: i.alt,
                            src: i.value,
                            size: {
                                all: 56,
                                lg: 64,
                                xxl: 88
                            }
                        }), (0, o.jsxs)(u.g, {
                            gap: {
                                all: "s-4",
                                xl: "s-8"
                            },
                            children: [c && (0, o.jsx)(h.x, {
                                variant: "h6",
                                children: c
                            }), (0, o.jsx)(W, {
                                use: "h3",
                                variant: x ? p : "h6",
                                children: d
                            })]
                        }), n && (0, o.jsx)(h.x, {
                            use: "h4",
                            variant: x ? "h6" : "subtitle1",
                            marginTop: x ? {
                                all: "-s-12",
                                xl: "-s-16"
                            } : "0",
                            children: n
                        }), r && (0, o.jsx)(h.x, {
                            use: "p",
                            variant: "secondary",
                            color: "grey-50",
                            whiteSpace: "pre-line",
                            children: r
                        })]
                    });
                    return (0, o.jsx)(v, {
                        use: "li",
                        hasLink: !!f,
                        index: l,
                        rowLength: s,
                        children: f ? (0, o.jsx)(b, {
                            value: f,
                            title: x ? null == t ? void 0 : t.label : void 0,
                            arrowVariant: x ? "accent" : "default",
                            children: w
                        }) : w
                    })
                },
                j = e => {
                    let {
                        id: t,
                        anchor: n,
                        content: {
                            items: r = [],
                            style: {
                                variant: d = a.Default
                            } = {}
                        }
                    } = e, u = (0, i.a)(l.WU.media.md);
                    return r.length ? (0, o.jsx)(c.o, {
                        id: null != n ? n : t,
                        "data-blockid": t,
                        marginY: "s-20",
                        children: (0, o.jsx)(s.r, {
                            use: "ul",
                            columns: {
                                all: 1,
                                md: 12
                            },
                            gap: {
                                all: "s-16",
                                lg: "s-24"
                            },
                            children: r.map((e, t) => (0, o.jsx)(U, {
                                variant: d,
                                index: t,
                                rowLength: r.length,
                                titleVariant: u ? "h3" : "h1",
                                ...e
                            }, t))
                        })
                    }) : null
                }
        },
        83128: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return g
                }
            });
            var r = n(85893),
                a = n(67294),
                o = n(8954),
                i = n(22674),
                l = n(17802),
                s = n(49363),
                c = n(6484);
            let d = (0, s.ZP)(o.Ee).withConfig({
                    componentId: "sc-10a0aa14-0"
                })({
                    color: "transparent",
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                        position: "absolute",
                        inset: 0,
                        content: '""',
                        backgroundColor: i.WU.color.actionBackground
                    }
                }),
                u = e => null == e ? void 0 : e.endsWith(".webp"),
                g = (0, a.memo)(function(e) {
                    let {
                        src: t,
                        alt: n,
                        size: a = 24,
                        ...o
                    } = e;
                    return (0, r.jsx)(d, {
                        image: t ? {
                            default: t,
                            "1x": [t, u(t) ? t.replace(/.webp$/, ".png") : void 0].filter(c.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: l.w.ROUND,
                        alt: null != n ? n : "",
                        size: a,
                        minWidth: a,
                        ...o
                    })
                })
        }
    }
]);
//# sourceMappingURL=5092.2f7202a0ed218f54.js.map