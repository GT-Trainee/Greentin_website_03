! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3e73491-f41b-48ae-ac52-59af15539edd", e._sentryDebugIdIdentifier = "sentry-dbid-b3e73491-f41b-48ae-ac52-59af15539edd")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7633], {
        57093: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return a
                }
            });
            var n = r(22674),
                i = r(49363),
                o = r(96526),
                l = r(89463);
            let a = (0, i.ZP)(o.o).withConfig({
                componentId: "sc-d0c249d9-0"
            })({
                display: "flex",
                flexDirection: "column",
                marginTop: 0,
                marginBottom: 0,
                width: "100%",
                maxWidth: "initial",
                padding: "".concat(n.WU.space.s20, " calc((100vw - ").concat(l.W9.layoutMaxWidth, ") / 2)"),
                backgroundColor: n.WU.color.black,
                ["@media ".concat(n.WU.media.lg)]: {
                    paddingTop: n.WU.space.s40,
                    paddingBottom: n.WU.space.s40
                }
            })
        },
        7633: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return p
                }
            });
            var n = r(85893),
                i = r(22674),
                o = r(49363),
                l = r(96526),
                a = r(57093),
                c = r(9538),
                d = r(50663),
                s = r(6484);
            let u = (0, o.ZP)(l.o).withConfig({
                    componentId: "sc-a6d9bd37-0"
                })({
                    ["".concat(a.L, " &")]: {
                        order: 1e3,
                        color: i.WU.color.grey20,
                        marginBottom: i.WU.size.s40,
                        a: {
                            color: "inherit",
                            textDecoration: "underline",
                            transition: i.WU.transition.text
                        },
                        "a:hover": {
                            color: i.WU.color.white_80
                        }
                    }
                }),
                h = (0, o.ZP)(c.x).withConfig({
                    componentId: "sc-a6d9bd37-1"
                })({
                    whiteSpace: "pre-wrap",
                    p: {
                        margin: 0,
                        marginBottom: i.WU.space.s40
                    },
                    "table p": {
                        margin: 0
                    },
                    li: {
                        margin: "".concat(i.WU.space.s16, " 0")
                    },
                    "ul, ol": {
                        margin: "0 0 ".concat(i.WU.space.s40, " ").concat(i.WU.space.s24),
                        padding: 0
                    }
                }),
                p = e => {
                    let {
                        id: t,
                        anchor: r,
                        content: {
                            description: i = "",
                            style: {
                                color: o = "foreground",
                                variant: l,
                                align: a
                            } = {}
                        }
                    } = e, c = (0, d.Ty)({
                        customReplace: d.gV
                    })(i);
                    return (0, n.jsx)(u, {
                        id: null != r ? r : t,
                        "data-blockid": t,
                        color: o,
                        marginY: 0,
                        children: (0, n.jsx)(h, {
                            textAlign: {
                                all: "start",
                                md: a
                            },
                            use: (0, s.HD)(c) ? "p" : "div",
                            variant: "h6" === l ? "subtitle2" : l,
                            children: c
                        })
                    })
                }
        },
        50663: function(e, t, r) {
            r.d(t, {
                CD: function() {
                    return U
                },
                Ty: function() {
                    return W
                },
                bh: function() {
                    return v
                },
                gV: function() {
                    return I
                },
                tJ: function() {
                    return i
                },
                zT: function() {
                    return D
                }
            });
            var n, i, o = r(85893),
                l = r(67294),
                a = r(59467),
                c = r(22674),
                d = r(27061),
                s = r(76335),
                u = r(939),
                h = r(37903),
                p = r(15059),
                f = r(47311),
                b = r(11163),
                g = r(49363),
                x = r(36598),
                m = r(16125);
            (n = i || (i = {})).A = "a", n.B = "b", n.Blockquote = "blockquote", n.Br = "br", n.Em = "em", n.H1 = "h1", n.H2 = "h2", n.H3 = "h3", n.H4 = "h4", n.H5 = "h5", n.H6 = "h6", n.I = "i", n.Li = "li", n.Ol = "ol", n.P = "p", n.S = "s", n.Small = "small", n.Strong = "strong", n.Table = "table", n.Tbody = "tbody", n.Td = "td", n.Th = "th", n.Thead = "thead", n.Tr = "tr", n.U = "u", n.Ul = "ul";
            let v = (e, t) => {
                    let {
                        attribs: r
                    } = e;
                    return r && (r[t] || r[t.toLowerCase()])
                },
                y = (0, g.ZP)(a.r).withConfig({
                    componentId: "sc-814ad180-0"
                })({
                    "&:hover": {
                        color: c.WU.color.accent
                    }
                }),
                w = e => {
                    let {
                        locale: t,
                        defaultLocale: r,
                        customReplace: n,
                        allowedTags: a = Object.values(i),
                        trim: c = !0
                    } = e;
                    return function(e) {
                        let i = e.name,
                            d = e.children && (0, f.du)(e.children, {
                                trim: c,
                                replace: w({
                                    locale: t,
                                    defaultLocale: r,
                                    customReplace: n,
                                    allowedTags: a,
                                    trim: c
                                })
                            });
                        if (n) {
                            let t = n(e, d);
                            if (t) return t
                        }
                        if ("text" !== String(e.type)) {
                            if (!a.includes(i)) return (0, o.jsx)(o.Fragment, {
                                children: d
                            });
                            if (e.attribs && "a" === i) {
                                var s, u, h;
                                if ((null === (s = e.attribs.href) || void 0 === s ? void 0 : s.toLowerCase().startsWith("javascript:")) || (null === (u = e.attribs.href) || void 0 === u ? void 0 : u.toLowerCase().startsWith("data:"))) return (0, o.jsx)(o.Fragment, {
                                    children: d
                                });
                                if (null === (h = e.attribs.href) || void 0 === h ? void 0 : h.startsWith("mailto:")) return (0, o.jsx)(y, {
                                    color: "inherit",
                                    textDecoration: "underline",
                                    href: e.attribs.href,
                                    children: d
                                });
                                let n = v(e, "data-location-type"),
                                    i = v(e, "data-location-legalDocumentId"),
                                    l = v(e, "data-location-locationId"),
                                    a = v(e, "data-location-locale");
                                if (n === m._i.Legal && i) return (0, o.jsx)(x._, {
                                    value: {
                                        type: m._i.Legal,
                                        legalDocumentId: i
                                    },
                                    children: (0, o.jsx)(y, {
                                        color: "inherit",
                                        rel: "noopener",
                                        target: "_blank",
                                        textDecoration: "underline",
                                        children: d
                                    })
                                });
                                if (n === m._i.Internal && l) return (0, o.jsx)(x._, {
                                    value: {
                                        type: m._i.Internal,
                                        locationId: l,
                                        locale: t
                                    },
                                    children: (0, o.jsx)(y, {
                                        color: "inherit",
                                        textDecoration: "underline",
                                        children: d
                                    })
                                });
                                if (n === m._i.External) {
                                    let {
                                        href: n
                                    } = e.attribs, i = t && t === r ? "" : t, l = new URL(n), c = l.href.replace(l.origin, "".concat(l.origin).concat("true" === a && i ? "/".concat(i) : ""));
                                    return (0, o.jsx)(x._, {
                                        value: {
                                            type: m._i.External,
                                            uri: c
                                        },
                                        children: (0, o.jsx)(y, {
                                            color: "inherit",
                                            rel: "noopener",
                                            target: "_blank",
                                            textDecoration: "underline",
                                            children: d
                                        })
                                    })
                                }
                                return (0, o.jsx)(y, {
                                    color: "inherit",
                                    href: e.attribs.href,
                                    rel: "noopener",
                                    target: "_self",
                                    textDecoration: "underline",
                                    children: d
                                })
                            }
                            return Array.isArray(d) && 0 === d.length ? (0, l.createElement)(i) : (0, l.createElement)(i, null, d)
                        }
                    }
                },
                W = function() {
                    let {
                        allowedTags: e,
                        customReplace: t,
                        trim: r = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        defaultLocale: n,
                        locale: i
                    } = (0, b.useRouter)();
                    return (0, l.useCallback)(o => o ? (0, f.ZP)(o, {
                        trim: r,
                        replace: w({
                            locale: i,
                            defaultLocale: n,
                            customReplace: t,
                            allowedTags: e,
                            trim: r
                        })
                    }) : null, [r, i, n, t, e])
                },
                j = /<a\s+href="/,
                U = e => {
                    let {
                        text: t = ""
                    } = e, {
                        defaultLocale: r,
                        locale: n
                    } = (0, b.useRouter)();
                    return (0, l.useMemo)(() => j.test(t) ? (0, f.ZP)(t, {
                        trim: !0,
                        replace: w({
                            locale: n,
                            defaultLocale: r
                        })
                    }) : t, [r, n, t])
                },
                _ = (0, g.ZP)(d.x).withConfig({
                    componentId: "sc-814ad180-1"
                })({
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    tableLayout: "fixed",
                    wordBreak: "break-word",
                    "p, ol, ul, h1, h2, h3, h3, h5, h6": {
                        margin: 0
                    }
                }),
                C = (0, g.ZP)(d.x).withConfig({
                    componentId: "sc-814ad180-2"
                })({
                    backgroundColor: (0, s.O)(c.WU.colorChannel.deepGrey, .2)
                }),
                k = g.ZP.td.withConfig({
                    componentId: "sc-814ad180-3"
                })(e => {
                    let {
                        width: t,
                        height: r
                    } = e;
                    return {
                        borderColor: c.WU.color.grey50,
                        borderStyle: "solid",
                        borderWidth: 1,
                        height: r ? "".concat(r, "px") : "auto",
                        padding: "".concat(c.WU.space.s12, " ").concat(c.WU.space.s4),
                        width: t ? "".concat(t, "px") : "auto"
                    }
                }),
                I = (e, t) => {
                    let r = e.name;
                    return "table" === r ? (0, o.jsx)(_, {
                        use: r,
                        minWidth: "100%",
                        children: t
                    }) : "thead" === r ? (0, o.jsx)(C, {
                        use: r,
                        children: t
                    }) : "tbody" === r || "th" === r ? (0, o.jsx)(d.x, {
                        use: r,
                        children: t
                    }) : "td" === r ? (0, o.jsx)(k, {
                        colSpan: e.attribs.colspan ? Number(e.attribs.colspan) : void 0,
                        height: e.attribs.height,
                        rowSpan: e.attribs.rowspan ? Number(e.attribs.rowspan) : void 0,
                        width: e.attribs.width,
                        children: t
                    }) : void 0
                },
                D = (e, t) => {
                    let r = e.name,
                        n = e.parentNode,
                        i = null == n ? void 0 : n.name;
                    return "ul" === r || "ol" === r ? (0, o.jsx)(d.x, {
                        use: "div",
                        children: (0, o.jsx)(u.xv, {
                            use: r,
                            display: "inline-block",
                            textAlign: "start",
                            pl: "ol" === r ? "s-20" : "0",
                            children: t
                        })
                    }) : "li" === r && "ul" === i ? (0, o.jsxs)(h.U, {
                        use: "li",
                        mb: "s-8",
                        children: [(0, o.jsx)(p.J, {
                            mr: "s-12",
                            mt: "s-4",
                            name: "CheckSuccess",
                            size: {
                                all: 20,
                                xxl: 28
                            },
                            style: {
                                flexShrink: 0
                            },
                            use: "span"
                        }), (0, o.jsx)(u.xv, {
                            lineHeight: {
                                all: "1.6rem",
                                xxl: "2rem"
                            },
                            children: t
                        })]
                    }) : "li" === r && "ol" === i ? (0, o.jsx)(u.xv, {
                        use: "li",
                        mb: "s-8",
                        lineHeight: {
                            all: "1.6rem",
                            xxl: "2rem"
                        },
                        children: (0, o.jsx)(d.x, {
                            pl: "s-12",
                            children: t
                        })
                    }) : void 0
                }
        }
    }
]);
//# sourceMappingURL=7633.4b1d9cdac6e1bbc1.js.map