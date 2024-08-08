! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "36d4be29-cdf9-41d1-a218-8430eaed44bd", e._sentryDebugIdIdentifier = "sentry-dbid-36d4be29-cdf9-41d1-a218-8430eaed44bd")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6251], {
        15183: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return g
                }
            });
            var l = n(85893),
                o = n(58308),
                i = n(20176),
                r = n(31249),
                a = n(62482),
                s = n(67294),
                c = n(81758),
                d = n(11163),
                u = n(99123),
                h = n(28127),
                p = n(73307);
            async function m(e) {
                try {
                    let t = await fetch(e);
                    if (!t.ok) return [];
                    let n = await t.json();
                    if (n && Array.isArray(n)) return n;
                    return []
                } catch (e) {
                    return []
                }
            }
            let f = [],
                g = e => {
                    let {
                        blocks: t
                    } = e, n = function(e) {
                        let t = function() {
                                var e;
                                let t = (0, d.useRouter)(),
                                    {
                                        region: n
                                    } = (0, u.i4)(t.locale),
                                    l = (0, p.U)(),
                                    o = n !== window.initialFlagsRegion || void 0 === window.initialFlags,
                                    i = n === window.initialFlagsRegion && null !== (e = window.initialFlags) && void 0 !== e ? e : f,
                                    {
                                        data: r
                                    } = (0, c.ZP)(l ? null : "/api/ui-flags/?country=".concat(n), m, {
                                        fallbackData: i,
                                        revalidateOnMount: o,
                                        revalidateOnFocus: !1,
                                        shouldRetryOnError: !0,
                                        keepPreviousData: !0,
                                        onErrorRetry: (e, t, n, l, o) => {
                                            let {
                                                retryCount: i
                                            } = o;
                                            if (i > 3) {
                                                (0, h.D)("UI Flags", e);
                                                return
                                            }
                                            setTimeout(() => l({
                                                retryCount: i
                                            }), 40 * Math.pow(5, i))
                                        }
                                    });
                                return r
                            }(),
                            [n, l] = (0, s.useState)(null != e ? e : []);
                        return (0, s.useEffect)(() => {
                            var n;
                            l(null !== (n = null == e ? void 0 : e.filter(e => {
                                let n = e.feature;
                                return !n || (t.includes(n.name) ? "active" === n.state : "inactive" === n.state)
                            })) && void 0 !== n ? n : [])
                        }, [t, e]), n
                    }(t), g = (0, r.R)(n), {
                        backgroundColor: v,
                        backgroundImage: x
                    } = (0, a.X)(), w = !!v || !!x;
                    return (0, l.jsx)(l.Fragment, {
                        children: g.map((e, t) => {
                            var n;
                            return (0, l.jsx)(i.O, {
                                mode: e.themeMode,
                                backgroundColor: w ? void 0 : "background",
                                children: null === (n = e.blocks) || void 0 === n ? void 0 : n.map(e => (0, l.jsx)(o.b, { ...e
                                }, e.id))
                            }, t)
                        })
                    })
                }
        },
        78425: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return s
                }
            });
            var l = n(85893),
                o = n(67294),
                i = n(17802),
                r = n(83128),
                a = n(94779);
            let s = (0, o.memo)(function(e) {
                let {
                    countryCode: t,
                    ...n
                } = e, o = t ? (0, a.mv)(t) : void 0;
                return (0, l.jsx)(r.Y, {
                    display: "inline-block",
                    src: o,
                    size: 24,
                    borderRadius: i.w.ROUND,
                    alt: null != t ? t : "Country flag",
                    ...n
                })
            })
        },
        33953: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return y
                }
            });
            var l = n(85893),
                o = n(51303),
                i = n(19054),
                r = n(69903),
                a = n(72256),
                s = n(96932),
                c = n(37903),
                d = n(939),
                u = n(56607),
                h = n(8954),
                p = n(67294),
                m = n(78425),
                f = n(62052),
                g = n(80829),
                v = n(4633),
                x = n(58363),
                w = n(79645);
            let {
                publicRuntimeConfig: {
                    assetsUrl: j
                }
            } = (0, f.i)(), b = Array.from(g.J$), y = e => {
                let {
                    isOpen: t,
                    onClose: n,
                    analyticsComponent: f
                } = e, g = (0, x.J)(), [y, C] = (0, p.useState)(""), k = (0, p.useDeferredValue)(y), U = (0, w.T)(), W = (0, v.n)(f), I = (0, p.useMemo)(() => b.filter(e => g(e).toLowerCase().includes(k.toLowerCase())).map(e => ({
                    countryCode: e,
                    countryName: g(e)
                })).sort((e, t) => e.countryName.localeCompare(t.countryName)), [g, k]), R = (0, p.useCallback)(() => {
                    n(), C("")
                }, [C, n]), L = (0, p.useCallback)(async e => {
                    R(), await W(e)
                }, [W, R]);
                return (0, l.jsxs)(o.G, {
                    open: t,
                    onClose: R,
                    "aria-label": U("shared.labelSearch"),
                    labelButtonClose: U("shared.button.close"),
                    variant: "bottom-sheet",
                    shouldKeepMaxHeight: !0,
                    children: [(0, l.jsx)(i.h, {
                        variant: "bottom-sheet",
                        children: (0, l.jsx)(i.h.Sticky, {
                            children: (0, l.jsx)(r.o, {
                                placeholder: U("shared.labelSearch"),
                                value: y,
                                onChange: C
                            })
                        })
                    }), I.length > 0 ? (0, l.jsx)(a.Z, {
                        children: I.map(e => {
                            let {
                                countryCode: t,
                                countryName: n
                            } = e;
                            return (0, l.jsx)(s.c, {
                                onClick: () => L(t),
                                use: "button",
                                children: (0, l.jsxs)(c.U, {
                                    use: "span",
                                    space: "s-12",
                                    align: "center",
                                    children: [(0, l.jsx)(m.A, {
                                        countryCode: t
                                    }), (0, l.jsx)(d.xv, {
                                        variant: "primary",
                                        children: n
                                    })]
                                })
                            }, t)
                        })
                    }) : (0, l.jsxs)(u.g, {
                        space: "s-12",
                        align: "center",
                        children: [(0, l.jsx)(h.Ee, {
                            size: 104,
                            alt: U("shared.search.noResult"),
                            src: "".concat(j, "/assets/3d-images-v2/3D086.png"),
                            srcSet: "".concat(j, "/assets/3d-images-v2/3D086@2x.png 2x, ").concat(j, "/assets-v2/3d-images/3D086@3x.png 3x")
                        }), (0, l.jsx)(d.xv, {
                            variant: "primary",
                            children: U("shared.search.noResult")
                        })]
                    })]
                })
            }
        },
        76251: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return ec
                }
            });
            var l = n(85893),
                o = n(67294),
                i = n(47154),
                r = n(11163),
                a = n(15183),
                s = n(80829),
                c = n(99123),
                d = n(29991),
                u = n(73307),
                h = n(58363),
                p = n(94779),
                m = n(83128),
                f = n(33953),
                g = n(9166),
                v = n(22674),
                x = n(49363),
                w = n(89463);
            let j = (0, x.ZP)(g.a).withConfig({
                    componentId: "sc-c1d9e90e-0"
                })(w._F.small, {
                    height: 26,
                    display: "flex",
                    alignItems: "center",
                    color: v.WU.color.grey20,
                    transition: v.WU.transition.text,
                    wordBreak: "break-word",
                    "&:hover": {
                        color: v.WU.color.white
                    },
                    "&:active": {
                        color: v.WU.color.white_80
                    },
                    ["@media ".concat(v.WU.media.xxl)]: {
                        height: 32
                    }
                }),
                b = () => {
                    let [e, t] = (0, o.useState)(!1), n = (0, h.J)(), {
                        locale: i
                    } = (0, r.useRouter)(), {
                        region: a
                    } = (0, c.i4)(i), s = n(a), d = (0, p.mv)(a);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(j, {
                            onClick: () => t(!0),
                            useIcon: (0, l.jsx)(m.Y, {
                                src: d,
                                size: 14,
                                alt: a
                            }),
                            children: s
                        }), (0, l.jsx)(f.j, {
                            isOpen: e,
                            onClose: () => t(!1),
                            analyticsComponent: "footer"
                        })]
                    })
                };
            var y = n(15916),
                C = n(21569),
                k = n(6484),
                U = n(26832),
                W = n(36934),
                I = n(92943),
                R = n(23122);
            let L = c.Mj.reduce((e, t) => {
                    let {
                        language: n,
                        title: l
                    } = t;
                    return { ...e,
                        [n]: {
                            label: l,
                            value: n
                        }
                    }
                }, {}),
                _ = e => e in L,
                D = () => {
                    let e = (0, r.useRouter)(),
                        {
                            language: t,
                            region: n
                        } = (0, c.i4)(e.locale),
                        i = (0, y.x)(),
                        a = function() {
                            let {
                                asPath: e,
                                locale: t,
                                push: n,
                                query: {
                                    slug: l,
                                    ...i
                                } = {}
                            } = (0, r.useRouter)(), {
                                region: a
                            } = (0, c.i4)(t), [, s] = (0, I.B)(R.cn.NextLocale);
                            return (0, o.useCallback)(async (t, l) => {
                                var o;
                                let r = {
                                        pathname: null !== (o = e.split("?")[0]) && void 0 !== o ? o : "/",
                                        query: i
                                    },
                                    d = (0, c.$2)(t, null != l ? l : a);
                                r && d && (s(d), await n(r, r, {
                                    locale: d
                                }))
                            }, [e, i, a, s, n])
                        }(),
                        {
                            trackEvent: d
                        } = (0, U.z$)(),
                        {
                            isBusiness: u
                        } = (0, W.C)(),
                        h = (0, o.useMemo)(() => n ? (0, s.uj)(n).map(e => L[e]).filter(k.fQ) : [], [n]),
                        p = (0, o.useCallback)(async e => {
                            i.toggle(!1), d({
                                action: "Locale_Change",
                                component_name: "footer",
                                vertical: u ? "Business" : "Retail",
                                payload: {
                                    previousLocale: (0, c.$2)(t, n),
                                    nextLocale: (0, c.$2)(e, n)
                                }
                            }), await a(e)
                        }, [i, a, t, n, d, u]);
                    if (!t || h.length <= 1 || e.pathname.startsWith("/careers") && "JP" !== n) return null;
                    let m = _(t) ? L[t].label : "Unknown";
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(j, {
                            useIcon: "Language",
                            "aria-label": m,
                            ...i.getAnchorProps(),
                            children: m
                        }), (0, l.jsx)(C.L, { ...i.getTargetProps(),
                            maxWidth: 240,
                            placement: "top-start",
                            flip: !1,
                            width: "100%",
                            children: h.map(e => {
                                let {
                                    value: t,
                                    label: n
                                } = e;
                                return (0, l.jsx)(C.L.Item, {
                                    use: "button",
                                    value: t,
                                    onClick: () => p(t),
                                    children: n
                                }, t)
                            })
                        })]
                    })
                };
            var S = n(57093),
                F = n(31346),
                M = n(27061),
                P = n(31188),
                B = n(16125),
                Z = n(13634),
                $ = n(20107),
                A = n(6388);
            let E = (0, x.ZP)(A.r).withConfig({
                    componentId: "sc-16dc4177-0"
                })({
                    transition: "color 0.15s",
                    "&:hover": {
                        color: v.WU.color.white
                    },
                    "&:active": {
                        color: v.WU.color.white_80
                    }
                }),
                N = e => {
                    let {
                        children: t = "",
                        value: n,
                        title: o,
                        ...i
                    } = e, r = o;
                    return !r && (0, k.HD)(t) && (r = t), (0, l.jsx)(E, {
                        color: "grey-20",
                        display: "block",
                        py: "s-4",
                        title: r,
                        value: n,
                        variant: "small",
                        ...i,
                        children: t
                    })
                },
                T = (0, x.ZP)(F.k).withConfig({
                    componentId: "sc-943ad925-0"
                })({
                    flexWrap: "wrap",
                    gridColumn: "1 / span 3",
                    gridRow: 2,
                    listStyle: "none",
                    ["@media ".concat(v.WU.media.lg)]: {
                        gridColumn: 3,
                        gridRow: 1
                    }
                }),
                J = () => {
                    var e, t;
                    let {
                        getLocation: n,
                        getLocationLink: o,
                        getLocationTitle: i
                    } = (0, Z.Yt)(), {
                        getSitemapLocationsByScope: r
                    } = (0, $.j)(), a = null === (t = r([P.d.Legal])) || void 0 === t ? void 0 : null === (e = t.find(e => {
                        var t;
                        let {
                            locationId: l
                        } = e;
                        return (null === (t = n(l)) || void 0 === t ? void 0 : t.type) === B._i.Section
                    })) || void 0 === e ? void 0 : e.items;
                    return (0, l.jsx)(T, {
                        use: "ul",
                        children: null == a ? void 0 : a.map(e => {
                            let t = i(e),
                                n = o(e);
                            return t && n ? (0, l.jsx)(M.x, {
                                use: "li",
                                mr: "s-24",
                                children: (0, l.jsx)(N, {
                                    value: n,
                                    children: t
                                })
                            }, e) : null
                        })
                    })
                };
            var z = n(25533),
                O = n(3179),
                Y = n(94166),
                Q = n(37903),
                X = n(939),
                G = n(15059),
                H = n(58003);
            let q = (0, x.ZP)(O.X).withConfig({
                    componentId: "sc-9e0ecf7f-0"
                })({
                    width: "100%"
                }),
                K = (0, x.ZP)(N).withConfig({
                    componentId: "sc-9e0ecf7f-1"
                })({
                    paddingTop: v.WU.space.s8,
                    paddingBottom: v.WU.space.s8
                }),
                V = e => {
                    let {
                        sitemapLocation: t
                    } = e, {
                        getLocationTitle: n,
                        getLocationLink: i,
                        getLocationProps: r
                    } = (0, Z.Yt)(), a = n(t.locationId), s = (0, o.useMemo)(() => {
                        var e;
                        return null === (e = t.items) || void 0 === e ? void 0 : e.map(e => {
                            let t = r(e),
                                o = n(e),
                                a = i(e);
                            return (null == t ? void 0 : t.scope.includes(P.d.Footer)) && a ? (0, l.jsx)(K, {
                                value: a,
                                children: o
                            }, e) : null
                        })
                    }, [t.items, r, n, i]);
                    return a ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(M.x, {
                            hide: "md-*",
                            mb: "s-8",
                            children: (0, l.jsx)(Y.Z, {
                                children: e => {
                                    let {
                                        state: t,
                                        toggle: n
                                    } = e;
                                    return (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(q, {
                                            onClick: () => n(),
                                            children: (0, l.jsxs)(Q.U, {
                                                use: "div",
                                                py: "s-8",
                                                children: [(0, l.jsx)(X.xv, {
                                                    use: "h4",
                                                    mr: "auto",
                                                    color: "white",
                                                    variant: "caption",
                                                    children: a
                                                }), (0, l.jsx)(G.J, {
                                                    name: t ? "16/ChevronUpSmall" : "16/ChevronDownSmall",
                                                    color: "white",
                                                    size: 16,
                                                    "aria-label": a
                                                })]
                                            })
                                        }), (0, l.jsx)(H.K, { in: t,
                                            children: s
                                        })]
                                    })
                                }
                            })
                        }), (0, l.jsxs)(M.x, {
                            hide: "*-md",
                            overflow: "hidden",
                            flex: 1,
                            pb: "s-8",
                            pr: "s-16",
                            children: [(0, l.jsx)(X.xv, {
                                use: "h4",
                                py: "s-8",
                                color: "white",
                                variant: "caption",
                                children: a
                            }), s]
                        })]
                    }) : null
                };

            function ee(e) {
                var t, n;
                return (null !== (n = null === (t = e.items) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + 1
            }
            let et = (0, x.ZP)(F.k).withConfig({
                    componentId: "sc-61708f77-0"
                })({
                    paddingLeft: v.WU.space.s20,
                    paddingRight: v.WU.space.s20,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    ["@media ".concat(v.WU.media.md)]: {
                        gap: v.WU.space.s16,
                        flexDirection: "row"
                    },
                    ["@media ".concat(v.WU.media.lg)]: {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }),
                en = () => {
                    let e = function() {
                            let {
                                getLocation: e
                            } = (0, Z.Yt)(), {
                                isBusiness: t
                            } = (0, W.C)(), {
                                getSitemapLocation: n,
                                getSitemapIndexLocations: l,
                                getSitemapLocationsByParentId: i
                            } = (0, $.j)();
                            return (0, o.useMemo)(() => {
                                var o, r;
                                let a = l(),
                                    s = t ? null == a ? void 0 : null === (o = a[1]) || void 0 === o ? void 0 : o.locationId : null == a ? void 0 : null === (r = a[0]) || void 0 === r ? void 0 : r.locationId;
                                return s ? i(s).reduce((t, l) => {
                                    let o = l.items || [];
                                    if (!o.length) return t;
                                    if (o.some(t => {
                                            var n;
                                            return (null === (n = e(t)) || void 0 === n ? void 0 : n.type) === B._i.Section
                                        })) return [...t, ...o.map(e => n(e)).filter(k.fQ)];
                                    if (1 === o.length) {
                                        var r;
                                        let l = null === (r = n(o[0])) || void 0 === r ? void 0 : r.scope;
                                        if (l && l.includes(P.d.SectionLink) && !l.includes(P.d.Footer)) return [...t, ...o.flatMap(t => i(t).filter(t => {
                                            var n;
                                            return (null === (n = e(t.locationId)) || void 0 === n ? void 0 : n.type) === B._i.Section
                                        }))]
                                    }
                                    return [...t, l]
                                }, []).filter(e => e.scope.includes(P.d.Footer)) : []
                            }, [e, n, l, i, t])
                        }(),
                        t = (0, z.a)(v.WU.media.lg),
                        n = (0, z.a)(v.WU.media.xxl);
                    if (!e.flatMap(e => e.locationId).length) return null;
                    let i = function(e, t) {
                        let n = Math.min(t.length, e),
                            l = Array.from({
                                length: n
                            }).map(() => []);
                        if (t.length <= n) return t.forEach((e, t) => l[t].push(e)), l;
                        let o = Array.from({
                            length: n
                        }).map(() => 0);
                        return [...t].sort((e, t) => ee(t) - ee(e)).forEach(e => {
                            let t = ee(e),
                                i = n - 1,
                                r = 1 / 0;
                            for (let e = n - 1; e >= 0; e--) o[e] < r && (i = e, r = o[e]);
                            l[i].push(e), o[i] += t
                        }), l
                    }(n ? 8 : t ? 6 : 4, e);
                    return (0, l.jsx)(et, {
                        children: i.map((e, t) => (0, l.jsx)(M.x, {
                            width: "100%",
                            children: e.map(e => (0, l.jsx)(V, {
                                sitemapLocation: e
                            }, e.locationId))
                        }, "".concat(t, "-").concat(i.length, "-column")))
                    })
                };
            var el = n(1341),
                eo = n(49990),
                ei = n(4641);
            let er = (0, x.ZP)(A.r).withConfig({
                    componentId: "sc-7c77f6e6-0"
                })({
                    display: "block",
                    padding: v.WU.space.s8,
                    textAlign: "center",
                    ["".concat(G.J)]: {
                        color: v.WU.color.grey20,
                        transition: v.WU.transition.text
                    },
                    ["&:hover ".concat(G.J)]: {
                        color: v.WU.color.white_90
                    }
                }),
                ea = (0, x.ZP)(M.x).withConfig({
                    componentId: "sc-7c77f6e6-1"
                })({
                    listStyle: "none"
                }),
                es = () => {
                    let e = (0, eo.H)(),
                        t = (0, ei.o)();
                    return (0, l.jsxs)(Q.U, {
                        use: "ul",
                        marginY: "s-40",
                        paddingBottom: "s-8",
                        borderBottom: "1px solid",
                        borderBottomColor: "white-10",
                        space: "s-8",
                        paddingX: {
                            all: "s-20",
                            lg: 0
                        },
                        children: [(0, l.jsx)(ea, {
                            use: "li",
                            width: "100%",
                            children: (0, l.jsx)(A.r, {
                                value: e.indexLink,
                                children: (0, l.jsx)(el.a, {
                                    color: v.WU.color.white,
                                    variant: "small",
                                    title: "Revolut"
                                })
                            })
                        }), t.filter(e => e.icon).map(e => {
                            let {
                                url: t,
                                icon: n,
                                name: o
                            } = e;
                            return (0, l.jsx)(ea, {
                                use: "li",
                                children: (0, l.jsx)(er, {
                                    target: "_blank",
                                    rel: "noopener",
                                    "aria-label": o,
                                    href: t,
                                    children: (0, l.jsx)(G.J, {
                                        name: n,
                                        size: 16
                                    })
                                })
                            }, t)
                        })]
                    })
                },
                ec = e => {
                    let {
                        blocks: t = [],
                        isSitemapHidden: n = !1
                    } = e, h = (0, u.U)(), {
                        locale: p
                    } = (0, r.useRouter)(), {
                        region: m
                    } = (0, c.i4)(p), f = s.sv.has(m), g = null == p ? void 0 : p.toLowerCase(), v = !!(g && s.tN.has(g)), x = (0, o.useMemo)(() => v ? null == t ? void 0 : t.filter(e => {
                        let {
                            type: t
                        } = e;
                        return t === d._C.Text
                    }) : t, [v, t]);
                    return (0, l.jsxs)(S.L, {
                        use: "footer",
                        role: "contentinfo",
                        children: [(0, l.jsx)(a.Q, {
                            blocks: x
                        }), n || h || v || (0, l.jsx)(en, {}), (0, l.jsx)(es, {}), h || f || (0, l.jsxs)(i.r, {
                            columnGap: "s-32",
                            columns: "auto auto 1fr",
                            marginBottom: "s-40",
                            paddingX: {
                                all: "s-20",
                                lg: 0
                            },
                            rowGap: "s-12",
                            children: [(0, l.jsx)(b, {}), (0, l.jsx)(D, {}), v || (0, l.jsx)(J, {})]
                        })]
                    })
                }
        },
        57093: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return a
                }
            });
            var l = n(22674),
                o = n(49363),
                i = n(96526),
                r = n(89463);
            let a = (0, o.ZP)(i.o).withConfig({
                componentId: "sc-d0c249d9-0"
            })({
                display: "flex",
                flexDirection: "column",
                marginTop: 0,
                marginBottom: 0,
                width: "100%",
                maxWidth: "initial",
                padding: "".concat(l.WU.space.s20, " calc((100vw - ").concat(r.W9.layoutMaxWidth, ") / 2)"),
                backgroundColor: l.WU.color.black,
                ["@media ".concat(l.WU.media.lg)]: {
                    paddingTop: l.WU.space.s40,
                    paddingBottom: l.WU.space.s40
                }
            })
        },
        83128: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return h
                }
            });
            var l = n(85893),
                o = n(67294),
                i = n(8954),
                r = n(22674),
                a = n(17802),
                s = n(49363),
                c = n(6484);
            let d = (0, s.ZP)(i.Ee).withConfig({
                    componentId: "sc-10a0aa14-0"
                })({
                    color: "transparent",
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                        position: "absolute",
                        inset: 0,
                        content: '""',
                        backgroundColor: r.WU.color.actionBackground
                    }
                }),
                u = e => null == e ? void 0 : e.endsWith(".webp"),
                h = (0, o.memo)(function(e) {
                    let {
                        src: t,
                        alt: n,
                        size: o = 24,
                        ...i
                    } = e;
                    return (0, l.jsx)(d, {
                        image: t ? {
                            default: t,
                            "1x": [t, u(t) ? t.replace(/.webp$/, ".png") : void 0].filter(c.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: a.w.ROUND,
                        alt: null != n ? n : "",
                        size: o,
                        minWidth: o,
                        ...i
                    })
                })
        },
        4633: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return p
                }
            });
            var l = n(67294),
                o = n(11163),
                i = n(80829),
                r = n(23122),
                a = n(5257),
                s = n(99123),
                c = n(77420),
                d = n(26832),
                u = n(92943),
                h = n(36934);

            function p(e) {
                let [, t, n] = (0, u.B)(r.cn.NextLocale), {
                    asPath: p,
                    query: m,
                    push: f,
                    locale: g
                } = (0, o.useRouter)(), {
                    trackEvent: v
                } = (0, d.z$)(), {
                    language: x,
                    region: w
                } = (0, s.i4)(g), {
                    isBusiness: j
                } = (0, h.C)(), b = (0, l.useCallback)((e, l) => l ? t(e) : n(), [t, n]);
                return (0, l.useCallback)(async t => {
                    let n = i.J$.has(t),
                        l = n ? (0, i.bS)(t) : i.k$,
                        o = (0, s.$2)(l, t);
                    v({
                        action: "Locale_Change",
                        component_name: e,
                        vertical: j ? "Business" : "Retail",
                        payload: {
                            previousLocale: (0, s.$2)(x, w),
                            nextLocale: o
                        }
                    }), b(o, n);
                    let r = (0, c.Ty)(p, m, {
                        [a.AS.FallbackToIndex]: ""
                    });
                    await f(r, void 0, {
                        locale: o
                    })
                }, [e, p, j, x, f, m, w, b, v])
            }
        },
        31249: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return s
                }
            });
            var l = n(67294),
                o = n(42378),
                i = n(29991),
                r = n(2969);
            let a = e => e.type === i._C.Widget && e.content.widget === r.l.ThemeSwitcherWidget;

            function s(e) {
                let t = (0, o.F)();
                return (0, l.useMemo)(() => {
                    if (!(null == e ? void 0 : e.length)) return [];
                    let n = [],
                        l = t.mode,
                        o = 0;
                    for (let t = 0; t < e.length; t++)
                        if (a(e[t])) {
                            let i = e.slice(o, t);
                            i.length && n.push({
                                themeMode: l,
                                blocks: i
                            }), l = "dark" === l ? "light" : "dark", o = t + 1
                        }
                    let i = e.slice(o, e.length);
                    return i.length && n.push({
                        themeMode: l,
                        blocks: i
                    }), n
                }, [t, e])
            }
        }
    }
]);
//# sourceMappingURL=6251-a171de5bdae37fd9.js.map