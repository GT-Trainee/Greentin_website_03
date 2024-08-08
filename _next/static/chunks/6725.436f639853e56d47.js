! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c0081914-f4eb-495f-8ff2-001d98cff30b", t._sentryDebugIdIdentifier = "sentry-dbid-c0081914-f4eb-495f-8ff2-001d98cff30b")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6725], {
        47154: function(t, e, i) {
            i.d(e, {
                r: function() {
                    return s
                }
            });
            var a = i(49363),
                n = i(39072),
                o = i(44547),
                r = i(63537);

            function l(t) {
                return (0, r.hj)(t) ? "repeat(" + t + ", 1fr)" : t
            }
            var c = (0, o.By)({
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
                d = i(27061),
                s = (0, a.ZP)(d.x).withConfig({
                    displayName: "Grid",
                    componentId: "rui__sc-11lbuez-0"
                })(["display:grid;", ";", ";"], n.S, c)
        },
        47887: function(t, e, i) {
            i.d(e, {
                t: function() {
                    return r
                }
            });
            var a = i(67294),
                n = i(65142),
                o = i(50157);

            function r(t, e, i) {
                var r = (0, o.i)(e);
                (0, a.useEffect)(function() {
                    var e = null == t ? void 0 : t.current;
                    if (e) {
                        var a = (0, n.Xe)(e);
                        if (a.IntersectionObserver) {
                            var o = new a.IntersectionObserver(function(t) {
                                r(t[0].isIntersecting)
                            }, {
                                threshold: i
                            });
                            return o.observe(e),
                                function() {
                                    return o.disconnect()
                                }
                        }
                    }
                }, [t, i, r])
            }
        },
        494: function(t, e, i) {
            i.d(e, {
                W: function() {
                    return b
                }
            });
            var a = i(85893),
                n = i(28193),
                o = i(67294),
                r = i(82539),
                l = i(47887);
            let c = (t, e) => {
                let i = t - window.scrollY;
                if (i < 0 || e > window.innerHeight) return -i / 6;
                let a = i - (window.innerHeight - e);
                return a > 0 ? -a / 6 : 0
            };

            function d(t) {
                let [e, i] = (0, o.useState)(!1);
                (0, l.t)(t, t => i(t), 0), (0, o.useEffect)(() => {
                    let i = () => {
                        let e = t.current;
                        if (e) {
                            let t = function(t) {
                                let e = 0;
                                for (; t;) e += t.offsetTop - t.scrollTop, t = t.offsetParent;
                                return e
                            }(e);
                            e.style.transform = "translateY(".concat(c(t, e.getBoundingClientRect().height), "px)")
                        }
                    };
                    t.current && !e && (t.current.style.willChange = "transform", t.current.style.transform = "translateY(0)");
                    let a = window;
                    return e && a.addEventListener("scroll", i, {
                        passive: !0
                    }), () => {
                        a.removeEventListener("scroll", i)
                    }
                }, [t, e])
            }
            var s = i(37596),
                g = i(23033);
            let u = t => {
                let {
                    video: e,
                    videoSmall: i,
                    poster: l,
                    posterSmall: c,
                    align: u,
                    active: m,
                    opacity: p
                } = t, h = (0, g.P)(e, i), f = (0, g.P)(l, c), b = (0, o.useRef)(null);
                return d(b), (0, a.jsx)(s.X, {
                    coverAlign: u,
                    opacity: p,
                    children: (0, a.jsx)(n.Ig, {
                        ref: b,
                        height: "100%",
                        width: "100%",
                        children: h && (0, a.jsx)(r.I, {
                            video: null == h ? void 0 : h.value,
                            options: null == h ? void 0 : h.options,
                            poster: f,
                            active: m,
                            backgroundSize: "cover"
                        })
                    })
                })
            };
            var m = i(84353),
                p = i(99305);
            let h = t => "right" === t ? "left center" : "left" === t ? "right center" : t,
                f = t => {
                    let {
                        image: e,
                        imageSmall: i,
                        align: r = "center",
                        opacity: l
                    } = t, c = (0, o.useRef)(null);
                    d(c);
                    let g = h(r);
                    return (0, a.jsx)(s.X, {
                        coverAlign: r,
                        opacity: l,
                        children: (0, a.jsxs)(n.Ig, {
                            ref: c,
                            height: "100%",
                            children: [(0, a.jsx)(m.o, {
                                ratio: 16 / 9,
                                height: "100%",
                                hide: "*-lg",
                                children: (0, a.jsx)(p.x, {
                                    image: e,
                                    backgroundSize: "cover",
                                    backgroundPosition: g
                                })
                            }), (0, a.jsx)(m.o, {
                                ratio: 375 / 220,
                                height: "100%",
                                hide: "lg-*",
                                children: (0, a.jsx)(p.x, {
                                    image: null != i ? i : e,
                                    backgroundSize: "cover",
                                    backgroundPosition: g
                                })
                            })]
                        })
                    })
                },
                b = t => {
                    let {
                        image: e,
                        imageSmall: i,
                        video: n,
                        videoSmall: o,
                        align: r,
                        backgroundColor: l,
                        active: c = !0,
                        opacity: d
                    } = t;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [l && (0, a.jsx)(s.X, {
                            bg: l,
                            opacity: d
                        }), n && (0, a.jsx)(u, {
                            active: c,
                            video: n,
                            videoSmall: o,
                            poster: e,
                            posterSmall: i,
                            align: r,
                            opacity: d
                        }), !n && e && (0, a.jsx)(f, {
                            image: e,
                            imageSmall: i,
                            align: r,
                            opacity: d
                        })]
                    })
                }
        },
        37596: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return l
                },
                v: function() {
                    return r
                }
            });
            var a = i(28193),
                n = i(22674),
                o = i(49363);
            let r = 600,
                l = (0, o.ZP)(a.e2).withConfig({
                    componentId: "sc-61d74b99-0"
                })(t => {
                    let {
                        coverAlign: e
                    } = t;
                    return {
                        left: 0,
                        right: 0,
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        transition: "opacity ".concat(r, "ms"),
                        ["@media ".concat(n.WU.media.lg)]: {
                            left: "right" !== e ? 0 : "unset",
                            right: "right" === e ? 0 : "unset",
                            width: e && "center" !== e ? "43%" : "100%"
                        }
                    }
                })
        },
        99305: function(t, e, i) {
            i.d(e, {
                x: function() {
                    return c
                }
            });
            var a = i(85893),
                n = i(49363),
                o = i(22674),
                r = i(7043);
            let l = (0, n.ZP)(r.E).withConfig({
                    componentId: "sc-b8e86e9c-0"
                })(t => {
                    let {
                        $backgroundSize: e,
                        $prefersCoverOnMobile: i
                    } = t;
                    return {
                        objectFit: i ? "cover" : e,
                        ["@media ".concat(o.WU.media.md)]: {
                            objectFit: e
                        }
                    }
                }),
                c = t => {
                    let {
                        image: e,
                        backgroundPosition: i = "center",
                        backgroundSize: n = "contain",
                        prefersCoverOnMobile: o
                    } = t;
                    return (0, a.jsx)(l, {
                        image: e,
                        quality: 90,
                        fill: !0,
                        sizes: "100vw",
                        loading: "lazy",
                        $backgroundSize: n,
                        $prefersCoverOnMobile: o,
                        style: {
                            objectPosition: i
                        }
                    })
                }
        },
        69105: function(t, e, i) {
            i.r(e), i.d(e, {
                default: function() {
                    return tO
                }
            });
            var a, n, o, r, l, c, d, s, g = i(85893),
                u = i(28193),
                m = i(22674),
                p = i(49363);
            (a = l || (l = {})).Media = "media", a.Tabs = "tabs", a.Carousel = "carousel", a.Cards = "cards", (n = c || (c = {})).Left = "left", n.Center = "center", n.Right = "right", (o = d || (d = {})).Default = "default", o.Difference = "difference", (r = s || (s = {})).None = "none", r.GradientTop = "gradient-top";
            var h = i(84353),
                f = i(45550),
                b = i(37596),
                x = i(67294),
                v = i(56607),
                S = i(47154),
                C = i(27077),
                y = i(9538),
                w = i(89463),
                j = i(50663),
                W = i(47887),
                k = i(51292),
                U = i(56718);
            let I = 3 / 4,
                T = 5 / 3,
                A = 9 / 16,
                R = 360 / 508,
                L = 450 / 534,
                P = {
                    all: 388,
                    lg: 500,
                    xxl: 718
                },
                B = {
                    all: {
                        padding: 48,
                        margin: 24,
                        pageIndicatorHeight: 6,
                        pageIndicatorOffset: 16,
                        tabsHeight: 42
                    },
                    lg: {
                        padding: 64,
                        margin: 24,
                        pageIndicatorHeight: 6,
                        pageIndicatorOffset: 24,
                        tabsHeight: 42
                    },
                    xxl: {
                        padding: 80,
                        margin: 48,
                        pageIndicatorHeight: 6,
                        pageIndicatorOffset: 32,
                        tabsHeight: 56
                    }
                },
                M = (t, e) => {
                    let [i, a] = (0, x.useState)(0), [n, o] = (0, x.useState)(0), r = (0, x.useRef)(null), [l, c] = (0, x.useState)(!1), d = (0, x.useRef)(!0);
                    (0, W.t)(r, t => c(t), .2), (0, k.G)(r);
                    let s = (0, x.useCallback)(function(t) {
                        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        e && (d.current = !1), o(i), a(t)
                    }, [i]);
                    return (0, x.useEffect)(() => {
                        l || (d.current = !0)
                    }, [l]), (0, U.Y)(() => {
                        s((i + 1) % t.length, !1)
                    }, l && d.current ? 8e3 : null), {
                        content: e,
                        items: t,
                        autoplay: d.current && l,
                        activeItem: t[i],
                        activeIndex: i,
                        prevActiveItem: t[n],
                        prevActiveIndex: n,
                        updateActiveIndex: s,
                        blockRef: r
                    }
                },
                E = (0, x.createContext)(void 0),
                H = t => {
                    let {
                        children: e,
                        items: i,
                        content: a
                    } = t, n = M(i, a);
                    return (0, g.jsx)(E.Provider, {
                        value: n,
                        children: e
                    })
                },
                z = () => {
                    let t = (0, x.useContext)(E);
                    if (void 0 === t) throw Error("`useFeatureItemsBlockContext` is accessible in `FeatureItemsBlockProvider` component only");
                    return t
                },
                D = "transform ".concat(300, "ms ease-in-out"),
                _ = "opacity ".concat(300, "ms ease-in-out"),
                Z = (0, p.ZP)(v.g).withConfig({
                    componentId: "sc-b5e3a8ff-0"
                })(t => {
                    let {
                        backgroundAlign: e,
                        align: i
                    } = t;
                    return {
                        flexShrink: 0,
                        maxWidth: w.W9.layoutMaxWidth,
                        gap: m.WU.space.s16,
                        paddingLeft: m.WU.space.s20,
                        paddingRight: m.WU.space.s20,
                        alignItems: "start",
                        marginBottom: m.WU.space.s24,
                        ["@media ".concat(m.WU.media.md)]: {
                            alignItems: "center"
                        },
                        ["@media ".concat(m.WU.media.lg)]: {
                            gap: m.WU.space.s24,
                            paddingLeft: 0,
                            paddingRight: 0,
                            alignItems: null != i ? i : void 0,
                            marginBottom: e === c.Center ? m.WU.space.s32 : 0
                        },
                        ["@media ".concat(m.WU.media.xxl)]: {
                            gap: m.WU.space.s32,
                            marginBottom: e === c.Center ? m.WU.space.s48 : 0
                        }
                    }
                }),
                G = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return new Promise(e => setTimeout(e, t))
                },
                F = (0, x.forwardRef)((t, e) => {
                    let {
                        color: i = "foreground",
                        title: a,
                        description: n,
                        footnote: o,
                        caption: r,
                        button: l,
                        backgroundAlign: d,
                        ...s
                    } = t, u = (0, j.Ty)(), m = u(o), p = u(n);
                    return (0, g.jsxs)(Z, {
                        color: i,
                        backgroundAlign: d,
                        ref: e,
                        ...s,
                        children: [r && (0, g.jsx)(y.x, {
                            color: "grey-tone-50",
                            variant: "h6",
                            children: r
                        }), a && (0, g.jsx)(y.x, {
                            use: "h2",
                            variant: "h2",
                            align: s.align === c.Center ? "center" : "left",
                            disableScalingOnMobiles: !0,
                            whiteSpace: "pre-wrap",
                            children: a
                        }), (0, g.jsxs)(v.g, {
                            gap: {
                                all: "s-4",
                                md: "s-8"
                            },
                            width: "center" === s.align ? {
                                all: "100%",
                                lg: "60%",
                                xxl: "80%"
                            } : void 0,
                            children: [p && (0, g.jsx)(y.x, {
                                variant: "subtitle1",
                                children: p
                            }), m && (0, g.jsx)(y.x, {
                                variant: "small",
                                children: m
                            })]
                        }), l && (0, g.jsx)(C.z, {
                            variant: "primary",
                            link: l.link,
                            mt: {
                                all: "s-4",
                                lg: "s-8"
                            },
                            children: l.label
                        })]
                    })
                });
            F.displayName = "FeatureItemsBlockMain";
            let O = async (t, e) => {
                    let i = t.childNodes,
                        a = e.childNodes;
                    t.style.visibility = "visible", e.style.visibility = "visible", i.forEach((t, e) => {
                        let i = a[e],
                            n = null == i ? void 0 : i.offsetTop,
                            o = null == i ? void 0 : i.style,
                            r = null == t ? void 0 : t.style;
                        if (n && o && r) {
                            let e = n - t.offsetTop;
                            r.transform = "translateY(".concat(e, "px)"), o.opacity = "1"
                        }
                        r && (r.opacity = "0")
                    }), await G(), i.forEach((t, e) => {
                        let i = a[e],
                            n = null == i ? void 0 : i.style,
                            o = null == t ? void 0 : t.style;
                        o && (o.transition = D), n && o && t.textContent !== i.textContent && (n.transition = _, o.transition = "".concat(D, ", ").concat(_))
                    }), await G(), i.forEach(t => {
                        t.style.transform = "translateY(".concat(0, "px)"), t.style.opacity = "1"
                    }), a.forEach(t => t.style.opacity = "0"), await G(300), i.forEach(t => t.style.transition = "none"), a.forEach(t => t.style.transition = "none"), t.style.visibility = "visible", e.style.visibility = "hidden"
                },
                N = t => {
                    let {
                        caption: e,
                        alignSelf: i
                    } = t, {
                        activeIndex: a,
                        prevActiveIndex: n,
                        content: {
                            title: o,
                            description: r,
                            button: l,
                            footnote: d,
                            style: {
                                color: s,
                                align: u = c.Left
                            }
                        },
                        items: m
                    } = z(), p = (0, x.useRef)(null), h = (0, x.useRef)(null);
                    return (0, x.useEffect)(() => {
                        let t = p.current,
                            e = h.current;
                        t && e && O(t, e)
                    }, [a]), (0, g.jsx)(S.r, {
                        template: "'text'",
                        gridArea: "content",
                        children: m.map((t, m) => {
                            let {
                                title: f,
                                description: b,
                                footnote: x,
                                button: v,
                                style: {
                                    color: S
                                } = {}
                            } = t, C = null;
                            return a === m ? C = p : n === m && (C = h), (0, g.jsx)(F, {
                                ref: C,
                                gridArea: "text",
                                color: null != S ? S : s,
                                title: null != f ? f : o,
                                caption: e,
                                description: null != b ? b : r,
                                footnote: null != x ? x : d,
                                button: null != v ? v : l,
                                backgroundAlign: u,
                                align: u === c.Center ? "center" : "start",
                                alignSelf: i,
                                style: {
                                    visibility: a === m ? "visible" : "hidden"
                                }
                            }, m)
                        })
                    })
                };
            var X = i(99305),
                V = i(82539),
                Y = i(23033);
            let J = t => {
                let {
                    item: e,
                    ratio: i,
                    imageTitle: a,
                    active: n = !0,
                    objectFit: o = "contain",
                    children: r,
                    ...l
                } = t, c = (0, Y.P)(e.video, e.videoSmall), d = (0, Y.P)(e.image, e.imageSmall);
                return c || d ? (0, g.jsxs)(u.Ig, {
                    height: "100%",
                    style: {
                        aspectRatio: i
                    },
                    ...l,
                    children: [c && (0, g.jsx)(V.I, {
                        active: n,
                        video: c.value,
                        poster: d,
                        options: c.options,
                        width: "100%",
                        backgroundSize: o,
                        prefersCoverOnMobile: !0
                    }), !c && d && (0, g.jsx)(X.x, {
                        image: d,
                        backgroundSize: o,
                        prefersCoverOnMobile: !0,
                        title: a
                    }), r]
                }) : null
            };
            var q = i(27061),
                $ = i(16678);
            let Q = (0, p.ZP)(q.x).withConfig({
                componentId: "sc-c250207e-0"
            })(t => {
                let {
                    coverAlign: e = "center"
                } = t;
                return {
                    position: "relative",
                    width: "100%",
                    maxWidth: w.W9.layoutMaxWidth,
                    textAlign: "start",
                    paddingTop: B.all.padding,
                    paddingBottom: e && "center" !== e ? 0 : B.all.padding,
                    ["@media ".concat(m.WU.media.lg)]: {
                        paddingTop: B.lg.padding,
                        paddingBottom: B.lg.padding
                    },
                    ["@media ".concat(m.WU.media.xxl)]: {
                        paddingTop: B.xxl.padding,
                        paddingBottom: B.xxl.padding
                    }
                }
            }, $.bU({
                prop: "contentAlign",
                variants: {
                    [c.Left]: {
                        display: "grid",
                        gridTemplateAreas: "'content' 'media'",
                        gridTemplateRows: "auto 1fr",
                        gridTemplateColumns: "1fr",
                        justifyContent: "space-between",
                        textAlign: "start",
                        ["@media ".concat(m.WU.media.md)]: {
                            textAlign: "center"
                        },
                        ["@media ".concat(m.WU.media.lg)]: {
                            gridTemplateAreas: "'content media'",
                            gridTemplateRows: "initial",
                            gridTemplateColumns: "488px 450px",
                            justifyContent: "space-between",
                            textAlign: "start"
                        },
                        ["@media ".concat(m.WU.media.xxl)]: {
                            gridTemplateColumns: "696px 600px"
                        }
                    },
                    [c.Center]: {
                        display: "grid",
                        gridTemplateAreas: "'content' 'media'",
                        gridTemplateRows: "auto 1fr",
                        gridTemplateColumns: "auto",
                        alignContent: "center",
                        textAlign: "start",
                        ["@media ".concat(m.WU.media.md)]: {
                            textAlign: "center"
                        }
                    },
                    [c.Right]: {
                        display: "grid",
                        gridTemplateAreas: "'content' 'media'",
                        gridTemplateRows: "auto 1fr",
                        gridTemplateColumns: "1fr",
                        justifyContent: "space-between",
                        textAlign: "start",
                        ["@media ".concat(m.WU.media.md)]: {
                            textAlign: "center"
                        },
                        ["@media ".concat(m.WU.media.lg)]: {
                            gridTemplateAreas: "'media content'",
                            gridTemplateRows: "initial",
                            gridTemplateColumns: "450px 488px",
                            textAlign: "start"
                        },
                        ["@media ".concat(m.WU.media.xxl)]: {
                            gridTemplateColumns: "600px 696px"
                        }
                    }
                }
            }));
            var K = i(494);
            let tt = (t, e) => {
                    var i, a, n, o, r, l, c, d, s, g;
                    return (null === (i = t.cover) || void 0 === i ? void 0 : i.image) === (null === (a = e.cover) || void 0 === a ? void 0 : a.image) && (null === (n = t.cover) || void 0 === n ? void 0 : n.imageSmall) === (null === (o = e.cover) || void 0 === o ? void 0 : o.imageSmall) && (null === (r = t.cover) || void 0 === r ? void 0 : r.video) === (null === (l = e.cover) || void 0 === l ? void 0 : l.video) && (null === (c = t.cover) || void 0 === c ? void 0 : c.videoSmall) === (null === (d = e.cover) || void 0 === d ? void 0 : d.videoSmall) && (null === (s = t.style) || void 0 === s ? void 0 : s.backgroundColor) === (null === (g = e.style) || void 0 === g ? void 0 : g.backgroundColor)
                },
                te = t => {
                    let {
                        items: e,
                        activeIndex: i,
                        backgroundColor: a
                    } = t;
                    return e.map((t, n) => {
                        var o, r, l, c, d, s, u;
                        let m = n === i || tt(e[n], e[i]) ? 1 : 0;
                        return (0, g.jsx)(K.W, {
                            image: null === (o = t.cover) || void 0 === o ? void 0 : o.image,
                            imageSmall: null === (r = t.cover) || void 0 === r ? void 0 : r.imageSmall,
                            video: null === (l = t.cover) || void 0 === l ? void 0 : l.video,
                            videoSmall: null === (c = t.cover) || void 0 === c ? void 0 : c.videoSmall,
                            align: null === (d = t.cover) || void 0 === d ? void 0 : d.align,
                            backgroundColor: null !== (u = null === (s = t.style) || void 0 === s ? void 0 : s.backgroundColor) && void 0 !== u ? u : a,
                            opacity: n !== i ? m : void 0
                        }, n)
                    })
                },
                ti = {
                    all: {
                        height: 446
                    },
                    lg: {
                        height: 600
                    },
                    xxl: {
                        height: 860
                    }
                },
                ta = () => {
                    var t, e, i, a, n;
                    let {
                        activeItem: o,
                        blockRef: r,
                        content: {
                            title: l,
                            caption: d,
                            description: s,
                            button: m,
                            footnote: p,
                            style: {
                                color: x,
                                align: v = c.Left,
                                backgroundColor: S
                            }
                        }
                    } = z(), {
                        title: C = l,
                        description: y = s,
                        footnote: w = p,
                        button: j = m,
                        caption: W = d,
                        style: {
                            color: k = x,
                            backgroundColor: U = S
                        } = {}
                    } = o, A = (0, f.b)("md"), R = (0, f.b)("lg"), L = v === c.Center, P = !(null === (t = o.cover) || void 0 === t ? void 0 : t.align) || (null === (e = o.cover) || void 0 === e ? void 0 : e.align) === "center", B = L && A ? T : I;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(P || R) && (0, g.jsx)(te, {
                            items: [o],
                            backgroundColor: U,
                            activeIndex: 0
                        }), !P && !R && (0, g.jsx)(b.X, {
                            backgroundColor: null !== (n = null === (i = o.style) || void 0 === i ? void 0 : i.backgroundColor) && void 0 !== n ? n : U
                        }), (0, g.jsxs)(Q, {
                            contentAlign: v,
                            coverAlign: null === (a = o.cover) || void 0 === a ? void 0 : a.align,
                            ref: r,
                            children: [(0, g.jsx)(F, {
                                gridArea: "content",
                                color: k,
                                title: C,
                                caption: W,
                                description: y,
                                footnote: w,
                                button: j,
                                backgroundAlign: v,
                                align: v === c.Center ? "center" : "start",
                                alignSelf: {
                                    all: "flex-start",
                                    md: "center"
                                }
                            }), (0, g.jsx)(u.Ig, {
                                gridArea: "media",
                                width: "100%",
                                height: "100%",
                                alignSelf: "center",
                                minHeight: {
                                    all: P ? ti.all.height : "initial",
                                    md: "initial"
                                },
                                maxHeight: {
                                    all: ti.all.height,
                                    lg: ti.lg.height,
                                    xxl: ti.xxl.height
                                },
                                children: (0, g.jsx)(u.e2, {
                                    top: 0,
                                    bottom: 0,
                                    left: {
                                        all: L ? 0 : 20,
                                        lg: 0
                                    },
                                    right: {
                                        all: L ? 0 : 20,
                                        lg: 0
                                    },
                                    margin: "auto",
                                    height: "100%",
                                    width: {
                                        all: L ? "100%" : "initial",
                                        lg: "initial"
                                    },
                                    children: (0, g.jsx)(J, {
                                        item: o,
                                        ratio: B,
                                        width: "100%",
                                        height: "100%",
                                        imageTitle: C
                                    })
                                })
                            }), !P && !R && (0, g.jsx)(h.o, {
                                width: "100%",
                                gridArea: "media",
                                ratio: I,
                                children: (0, g.jsx)(te, {
                                    items: [o],
                                    backgroundColor: U,
                                    activeIndex: 0
                                })
                            })]
                        })]
                    })
                };
            var tn = i(37903),
                to = i(76335);
            let tr = (0, p.ZP)(u.e2).withConfig({
                    componentId: "sc-4c1f8d64-0"
                })({
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    transition: "opacity ".concat(b.v, "ms ease-in-out")
                }),
                tl = (0, p.ZP)(tn.U).withConfig({
                    componentId: "sc-4c1f8d64-1"
                })({
                    gap: m.WU.size.s12,
                    maxWidth: "100vw",
                    paddingLeft: m.WU.size.s20,
                    paddingRight: m.WU.size.s20,
                    marginLeft: m.WU.space.n20,
                    marginRight: m.WU.space.n20,
                    overflowX: "scroll",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    "::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                tc = (0, p.ZP)(C.z).withConfig({
                    componentId: "sc-4c1f8d64-2"
                })(t => {
                    let {
                        active: e,
                        autoplay: i,
                        hasBackground: a
                    } = t, n = a ? m.WU.color.grey10 : m.WU.color.background, o = "transparent";
                    return e ? o = m.WU.color.foreground : a && (o = (0, to.O)(m.WU.colorChannel.foreground, .1)), {
                        position: "relative",
                        height: "42px",
                        paddingLeft: e ? "26px" : "24px",
                        paddingRight: e ? "26px" : "24px",
                        minWidth: "min-content",
                        ["@media ".concat(m.WU.media.xxl)]: {
                            height: "56px",
                            paddingLeft: e ? "34px" : "32px",
                            paddingRight: e ? "34px" : "32px"
                        },
                        backgroundColor: o,
                        color: e ? m.WU.color.background : m.WU.color.foreground,
                        borderColor: e ? "transparent" : m.WU.color.foreground,
                        border: e ? "none" : "2px solid",
                        WebkitTapHighlightColor: "transparent",
                        backdropFilter: "blur(16px)",
                        transition: "".concat(m.WU.transition.background, " ").concat(m.WU.transition.text, " ").concat(m.WU.transition.opacity, " ").concat(m.WU.transition.shadow, " border-color ").concat(m.WU.timing.md),
                        "&:hover": {
                            backgroundColor: e ? m.WU.color.foreground : m.WU.color.shimmer
                        },
                        "&:active": {
                            opacity: e ? 1 : .8,
                            backgroundColor: e ? m.WU.color.foreground : "transparent"
                        },
                        "&:disabled": {
                            color: m.WU.color.grey50
                        },
                        "&:before": {
                            position: "absolute",
                            content: '""',
                            inset: 0,
                            borderRadius: m.WU.radius.round,
                            opacity: a ? 1 : .15,
                            transition: e && i ? "background-size ".concat(8e3, "ms linear") : "none",
                            backgroundSize: e && i ? "100% 100%" : "0 100%",
                            backgroundImage: "linear-gradient(".concat(n, ", ").concat(n, ")"),
                            backgroundRepeat: "no-repeat",
                            zIndex: -1
                        }
                    }
                }),
                td = () => {
                    var t, e, i, a, n;
                    let {
                        items: o,
                        activeItem: r,
                        activeIndex: l,
                        updateActiveIndex: c,
                        autoplay: d
                    } = z(), s = !!(null !== (n = null !== (a = null === (t = r.style) || void 0 === t ? void 0 : t.backgroundColor) && void 0 !== a ? a : null === (e = r.cover) || void 0 === e ? void 0 : e.image) && void 0 !== n ? n : null === (i = r.cover) || void 0 === i ? void 0 : i.video), u = (0, x.useRef)(null), m = (0, x.useRef)(null);
                    return (0, x.useEffect)(() => {
                        var t, e;
                        let i = u.current,
                            a = m.current,
                            n = null === (t = u.current) || void 0 === t ? void 0 : t.children.item(l);
                        if (i && a && n) {
                            let t = n.offsetLeft - a.getBoundingClientRect().width / 2 + n.getBoundingClientRect().width / 2;
                            null === (e = u.current) || void 0 === e || e.scrollTo({
                                left: t,
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    }, [l]), (0, g.jsx)(q.x, {
                        gridArea: "tabs",
                        overflow: {
                            all: "visible",
                            md: "hidden"
                        },
                        alignSelf: "flex-start",
                        width: "fit-content",
                        maxWidth: "100%",
                        px: {
                            all: "s-20",
                            lg: 0
                        },
                        mx: "auto",
                        mt: {
                            all: "s-16",
                            md: "s-24",
                            xxl: "s-32"
                        },
                        ref: m,
                        children: (0, g.jsx)(tl, {
                            role: "tablist",
                            ref: u,
                            children: o.map((t, e) => (0, g.jsx)(tc, {
                                role: "tab",
                                autoplay: d,
                                hasBackground: s,
                                onClick: () => c(e),
                                variant: "secondary",
                                active: e === l,
                                "aria-selected": e === l,
                                children: t.caption
                            }, e))
                        })
                    })
                },
                ts = (0, p.ZP)(Q).withConfig({
                    componentId: "sc-4c1f8d64-3"
                })({
                    position: "relative"
                }, $.bU({
                    prop: "contentAlign",
                    variants: {
                        [c.Left]: {
                            paddingBottom: B.all.padding + B.all.tabsHeight,
                            gridTemplateAreas: "'content' 'media' 'tabs'",
                            gridTemplateRows: "auto 1fr auto",
                            justifyContent: "space-between",
                            ["@media ".concat(m.WU.media.lg)]: {
                                paddingBottom: B.lg.padding + B.lg.tabsHeight,
                                gridTemplateAreas: "'content media' '. tabs'",
                                gridTemplateRows: "1fr auto"
                            },
                            ["@media ".concat(m.WU.media.xxl)]: {
                                paddingBottom: B.xxl.padding + B.xxl.tabsHeight
                            }
                        },
                        [c.Center]: {
                            alignContent: "initial",
                            gridTemplateAreas: "'content' 'media' 'tabs'",
                            gridTemplateRows: "auto 1fr auto",
                            height: "100%",
                            minHeight: "640px",
                            ["@media ".concat(m.WU.media.lg)]: {
                                minHeight: "max(640px, 100vh)"
                            },
                            ["@media ".concat(m.WU.media.xxl)]: {
                                minHeight: "max(864px, 100vh)"
                            }
                        },
                        [c.Right]: {
                            paddingBottom: B.all.padding + B.all.tabsHeight,
                            gridTemplateAreas: "'content' 'media' 'tabs'",
                            gridTemplateRows: "auto 1fr auto",
                            justifyContent: "space-between",
                            ["@media ".concat(m.WU.media.lg)]: {
                                paddingBottom: B.lg.padding + B.lg.tabsHeight,
                                gridTemplateAreas: "'media content' 'tabs .'",
                                gridTemplateRows: "1fr auto"
                            },
                            ["@media ".concat(m.WU.media.xxl)]: {
                                paddingBottom: B.xxl.padding + B.xxl.tabsHeight
                            }
                        }
                    }
                })),
                tg = t => {
                    let {
                        caption: e,
                        items: i,
                        style: {
                            align: a = c.Left,
                            backgroundColor: n
                        }
                    } = t, {
                        activeItem: o,
                        activeIndex: r,
                        blockRef: l
                    } = z(), d = (0, f.b)("md"), {
                        style: {
                            backgroundColor: s = n
                        } = {}
                    } = o, m = a === c.Center && d ? 2 : L;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(te, {
                            items: i,
                            activeIndex: r,
                            backgroundColor: s
                        }), (0, g.jsxs)(ts, {
                            contentAlign: a,
                            ref: l,
                            children: [(0, g.jsx)(N, {
                                caption: e,
                                alignSelf: a === c.Center ? "top" : "center"
                            }), (0, g.jsxs)(u.Ig, {
                                gridArea: "media",
                                width: "100%",
                                height: "100%",
                                alignSelf: "center",
                                minHeight: {
                                    all: P.all,
                                    md: "initial"
                                },
                                maxHeight: P,
                                children: [i.map((t, e) => t.image || t.video ? (0, g.jsx)(tr, {
                                    height: "100%",
                                    style: {
                                        aspectRatio: m
                                    },
                                    opacity: e !== r ? 0 : void 0,
                                    role: "tabpanel",
                                    margin: "auto",
                                    children: (0, g.jsx)(J, {
                                        item: t,
                                        ratio: m,
                                        active: e === r,
                                        imageTitle: t.caption
                                    })
                                }, e) : null), a !== c.Center && (0, g.jsx)(u.e2, {
                                    top: "100%",
                                    left: 0,
                                    right: 0,
                                    children: (0, g.jsx)(td, {})
                                })]
                            }), a === c.Center && (0, g.jsx)(td, {})]
                        })]
                    })
                };
            var tu = i(91747),
                tm = i(6484),
                tp = i(14600);
            let th = (0, p.ZP)(q.x).withConfig({
                    componentId: "sc-22d9833c-0"
                })({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    transition: "transform ".concat(350, "ms, opacity ").concat(350, "ms")
                }),
                tf = (0, p.ZP)(u.Ig).withConfig({
                    componentId: "sc-22d9833c-1"
                })({
                    "--website-feature-items-carousel-gap": "16px",
                    ["@media ".concat(m.WU.media.md)]: {
                        "--website-feature-items-carousel-gap": "8%"
                    }
                }),
                tb = t => {
                    let {
                        items: e,
                        ratio: i,
                        activeIndex: a,
                        updateActiveIndex: n,
                        children: o
                    } = t, {
                        onTouchStart: r,
                        onTouchMove: l,
                        onTouchEnd: c
                    } = (0, tu.Y)({
                        onSwipedLeft: () => n((a + 1) % e.length),
                        onSwipedRight: () => n((a - 1 + e.length) % e.length)
                    }), d = e.length - a, s = "calc(".concat(d, " * var(--website-feature-items-carousel-gap))"), m = "translateX(".concat(s, ") translateX(").concat(100 * d - 4.999999999999999 * (2 * Math.abs(d) - 1), "%) scale(").concat(.9, ")");
                    return (0, g.jsxs)(tf, {
                        onTouchStart: r,
                        onTouchMove: l,
                        onTouchEnd: c,
                        height: "100%",
                        style: {
                            aspectRatio: i
                        },
                        children: [(0, g.jsx)(th, {
                            height: "100%",
                            opacity: d < 3 ? .5 : 0,
                            onClick: () => n(0),
                            style: {
                                transform: m,
                                aspectRatio: i
                            },
                            children: o({
                                item: e[0]
                            })
                        }), e.map((t, e) => {
                            let r = e - a,
                                l = a === e ? 0 : 4.999999999999999,
                                c = ["translateX(calc(".concat(e - a, " * var(--website-feature-items-carousel-gap)))"), "translateX(".concat((e > a ? r : 0) * 100 - l * (2 * Math.abs(e - a) - 1), "%)"), e < a ? "scale(".concat(.6, ")") : "", e !== a ? "scale(".concat(.9, ")") : ""].filter(tm.fQ).join(" ");
                            return (0, g.jsx)(th, {
                                height: "100%",
                                opacity: e < a ? 0 : 1,
                                onClick: () => n(e),
                                style: {
                                    transform: c,
                                    aspectRatio: i
                                },
                                children: o({
                                    item: t
                                })
                            }, e)
                        }), (0, g.jsx)(u.e2, {
                            left: 0,
                            right: 0,
                            top: "100%",
                            children: (0, g.jsx)(tp.J, {
                                mt: {
                                    all: "s-16",
                                    md: "s-24",
                                    xxl: "s-32"
                                },
                                current: a,
                                total: e.length,
                                onClick: n
                            })
                        })]
                    })
                },
                tx = "ease",
                tv = ["transform ".concat(350, "ms ").concat(tx), "opacity ".concat(350, "ms ").concat(tx)].join(","),
                tS = (0, p.ZP)(h.o).withConfig({
                    componentId: "sc-be9b4af6-0"
                })(t => ({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    transition: tv,
                    zIndex: t.zIndex
                })),
                tC = (t, e) => Math.abs(t) > e ? Math.sign(t) * e : t,
                ty = (t, e, i) => {
                    let a = Math.floor(i / 2);
                    if (e !== t) {
                        let n = tj(t, e, i),
                            o = tw(t, e, i);
                        return o > a ? -n : o
                    }
                    return 0
                },
                tw = (t, e, i) => {
                    let a = e - t;
                    return a < 0 ? a + i : a
                },
                tj = (t, e, i) => {
                    let a = t - e;
                    return a < 0 ? a + i : a
                },
                tW = t => t < 0 ? -4.999999999999999 : t > 0 ? 4.999999999999999 : 0,
                tk = t => {
                    let e = "translateX(calc(".concat(t, " * var(--website-feature-items-carousel-gap)))"),
                        i = 100 * t - tW(t) * (2 * Math.abs(t) - 1);
                    return "".concat(e, " translateX(").concat(i, "%)")
                },
                tU = (t, e, i) => tj(t, e, i) > tw(t, e, i),
                tI = t => {
                    let {
                        appearing: e,
                        left: i,
                        children: a,
                        ratio: n
                    } = t, o = tk(i);
                    return (0, g.jsx)(tS, {
                        height: "100%",
                        opacity: e ? 1 : 0,
                        style: {
                            aspectRatio: n,
                            transform: e ? "".concat(o, " scale(").concat(.9, ")") : "".concat(o, " scale(").concat(.6, ")"),
                            transition: e ? tv : "none"
                        },
                        children: a
                    })
                },
                tT = t => {
                    let {
                        isActive: e,
                        animating: i,
                        disappearing: a,
                        cardPosition: n,
                        onClick: o,
                        children: r,
                        hidden: l,
                        ratio: c
                    } = t, d = a && i || l, s = tk(n);
                    return e || (s += " scale(".concat(.9, ")")), d && (s += " scale(".concat(.6, ")")), (0, g.jsx)(tS, {
                        onClick: o,
                        height: "100%",
                        opacity: d ? 0 : 1,
                        zIndex: d ? 0 : 1,
                        style: {
                            aspectRatio: c,
                            transition: i ? tv : "none",
                            ...s && {
                                transform: s
                            }
                        },
                        children: r
                    })
                },
                tA = (0, p.ZP)(u.Ig).withConfig({
                    componentId: "sc-be9b4af6-1"
                })({
                    "--website-feature-items-carousel-gap": "16px",
                    ["@media ".concat(m.WU.media.md)]: {
                        "--website-feature-items-carousel-gap": "8%"
                    }
                }),
                tR = t => {
                    let {
                        items: e,
                        activeIndex: i,
                        updateActiveIndex: a,
                        children: n,
                        ratio: o,
                        swipeable: r
                    } = t, l = Math.floor((e.length % 2 == 0 ? e.length - 1 : e.length) / 2), c = (0, x.useRef)(), [d, s] = (0, x.useState)(!1), [m, p] = (0, x.useState)(i), [h, f] = (0, x.useState)(i), b = tU(h, m, e.length), v = m - l - 1, S = m + l + 1, C = v < 0 ? v + e.length : v, y = S >= e.length ? S - e.length : S, w = (0, x.useCallback)((t, i) => {
                        if (r && i !== t && !d) {
                            if (s(!0), t + 1 === i || t - 1 === i || t === e.length - 1 && 0 === i || 0 === t && i === e.length - 1) clearTimeout(c.current), f(i), a(i, !1), c.current = setTimeout(() => {
                                p(i), s(!1)
                            }, 350);
                            else {
                                let a = tU(i, t, e.length) ? (t - 1 + e.length) % e.length : (t + 1) % e.length;
                                w(t, a), setTimeout(() => w(a, i), 450)
                            }
                        }
                    }, [r, e.length, d, a]);
                    (0, x.useEffect)(() => {
                        w(m, i)
                    }, [m, i, w]);
                    let {
                        onTouchStart: j,
                        onTouchMove: W,
                        onTouchEnd: k
                    } = (0, tu.Y)({
                        onSwipedLeft: () => w(m, (m + 1) % e.length),
                        onSwipedRight: () => w(m, (m - 1 + e.length) % e.length)
                    });
                    return (0, g.jsxs)(tA, {
                        onTouchStart: j,
                        onTouchMove: W,
                        onTouchEnd: k,
                        height: "100%",
                        margin: "auto",
                        style: {
                            aspectRatio: o
                        },
                        children: [(0, g.jsx)(tI, {
                            appearing: d && b,
                            left: -l,
                            ratio: o,
                            children: n({
                                item: e[C]
                            })
                        }), e.map((t, i) => {
                            let r = ty(m, i, e.length),
                                c = ty(h, i, e.length),
                                s = Math.abs(r) > l || Math.abs(c) > l;
                            r = tC(r, l);
                            let u = (c = tC(c, l)) < 0 && r > 0 || c > 0 && r < 0;
                            return (0, g.jsx)(tT, {
                                isActive: h === i,
                                animating: d,
                                disappearing: u,
                                onClick: d ? void 0 : () => a(i),
                                cardPosition: !u && d ? c : r,
                                hidden: s,
                                ratio: o,
                                children: n({
                                    item: t
                                })
                            }, i)
                        }), (0, g.jsx)(tI, {
                            appearing: d && !b,
                            left: l,
                            ratio: o,
                            children: n({
                                item: e[y]
                            })
                        }), r && (0, g.jsx)(u.e2, {
                            left: 0,
                            right: 0,
                            top: "100%",
                            children: (0, g.jsx)(tp.J, {
                                mt: {
                                    all: "s-16",
                                    md: "s-24",
                                    xxl: "s-32"
                                },
                                current: m,
                                total: e.length,
                                onClick: a
                            })
                        })]
                    })
                },
                tL = (0, p.ZP)(J).withConfig({
                    componentId: "sc-33db82b-0"
                })(t => {
                    var e, i;
                    let {
                        item: a,
                        swipeable: n = !0
                    } = t;
                    return {
                        backgroundColor: null !== (i = null === (e = a.style) || void 0 === e ? void 0 : e.backgroundColor) && void 0 !== i ? i : m.WU.color.greyTone5,
                        borderRadius: "20px",
                        WebkitTapHighlightColor: "transparent",
                        cursor: n ? "pointer" : "default",
                        overflow: "hidden"
                    }
                }),
                tP = (0, p.ZP)(Q).withConfig({
                    componentId: "sc-2180ef79-0"
                })({
                    paddingBottom: B.all.padding + B.all.pageIndicatorOffset,
                    ["@media ".concat(m.WU.media.lg)]: {
                        paddingBottom: B.lg.padding + B.lg.pageIndicatorOffset
                    },
                    ["@media ".concat(m.WU.media.xxl)]: {
                        paddingBottom: B.xxl.padding + B.xxl.pageIndicatorOffset
                    }
                }, $.bU({
                    prop: "contentAlign",
                    variants: {
                        [c.Center]: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textAlign: "left",
                            ["@media ".concat(m.WU.media.md)]: {
                                textAlign: "center"
                            }
                        },
                        [c.Right]: {
                            gridTemplateAreas: "'content' 'media'",
                            gridTemplateRows: "1fr",
                            gridTemplateColumns: "1fr",
                            justifyContent: "space-between",
                            ["@media ".concat(m.WU.media.lg)]: {
                                gridTemplateAreas: "'content media'",
                                gridTemplateRows: "initial",
                                gridTemplateColumns: "488px 450px"
                            },
                            ["@media ".concat(m.WU.media.xxl)]: {
                                gridTemplateColumns: "696px 600px"
                            }
                        }
                    }
                })),
                tB = t => {
                    let {
                        title: e,
                        description: i,
                        footnote: a,
                        button: n,
                        caption: o,
                        items: r,
                        style: {
                            color: l,
                            align: d = c.Left,
                            backgroundColor: s
                        }
                    } = t, m = (0, f.b)("md"), p = (0, f.b)("lg"), {
                        activeIndex: h,
                        updateActiveIndex: b,
                        activeItem: x,
                        blockRef: v
                    } = z(), {
                        title: S = e,
                        description: C = i,
                        footnote: y = a,
                        button: j = n,
                        caption: W = o,
                        style: {
                            color: k = l
                        } = {}
                    } = x, U = m && (d === c.Center || !p);
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(te, {
                            activeIndex: h,
                            items: r,
                            backgroundColor: s
                        }), (0, g.jsxs)(tP, {
                            contentAlign: d,
                            ref: v,
                            children: [(0, g.jsx)(F, {
                                gridArea: "content",
                                color: k,
                                title: S,
                                caption: W,
                                description: C,
                                footnote: y,
                                button: j,
                                backgroundAlign: d,
                                align: d === c.Center ? "center" : "start",
                                alignSelf: {
                                    all: "flex-start",
                                    md: "center"
                                }
                            }), (0, g.jsxs)(u.Ig, {
                                gridArea: "media",
                                alignSelf: U ? "center" : {
                                    all: "flex-start",
                                    lg: "center"
                                },
                                marginLeft: U ? "initial" : {
                                    all: "s-20",
                                    lg: 0
                                },
                                style: U ? {
                                    aspectRatio: A
                                } : {},
                                width: {
                                    all: "100%",
                                    lg: "initial"
                                },
                                height: "100%",
                                minHeight: {
                                    all: 412,
                                    md: "initial"
                                },
                                maxHeight: {
                                    all: 412,
                                    lg: 568,
                                    xxl: 752
                                },
                                children: [U && (0, g.jsx)(tR, {
                                    swipeable: !0,
                                    items: r,
                                    ratio: A,
                                    activeIndex: h,
                                    updateActiveIndex: b,
                                    children: t => {
                                        let {
                                            item: e
                                        } = t;
                                        return (0, g.jsx)(tL, {
                                            objectFit: "cover",
                                            item: e,
                                            ratio: A,
                                            border: w.W9.featureItemsCarouselCardBorder
                                        })
                                    }
                                }), !U && (0, g.jsx)(u.e2, {
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    style: {
                                        aspectRatio: A
                                    },
                                    children: (0, g.jsx)(tb, {
                                        items: r,
                                        ratio: A,
                                        activeIndex: h,
                                        updateActiveIndex: b,
                                        children: t => {
                                            let {
                                                item: e
                                            } = t;
                                            return (0, g.jsx)(tL, {
                                                objectFit: "cover",
                                                item: e,
                                                ratio: A,
                                                border: w.W9.featureItemsCarouselCardBorder
                                            })
                                        }
                                    })
                                })]
                            })]
                        })]
                    })
                };
            var tM = i(15059),
                tE = i(53197);
            let tH = (0, p.ZP)(C.z).withConfig({
                    componentId: "sc-884744a8-0"
                })({
                    padding: 0,
                    "&:hover": {
                        backgroundColor: "transparent",
                        opacity: .8
                    }
                }),
                tz = (0, p.ZP)(Q).withConfig({
                    componentId: "sc-884744a8-1"
                })({
                    paddingBottom: B.all.padding + B.all.pageIndicatorOffset,
                    ["@media ".concat(m.WU.media.lg)]: {
                        paddingBottom: B.lg.padding + B.lg.pageIndicatorOffset
                    },
                    ["@media ".concat(m.WU.media.xxl)]: {
                        paddingBottom: B.xxl.padding + B.xxl.pageIndicatorOffset
                    }
                }, $.bU({
                    prop: "contentAlign",
                    variants: {
                        [c.Center]: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textAlign: "left",
                            ["@media ".concat(m.WU.media.md)]: {
                                textAlign: "center"
                            }
                        },
                        [c.Right]: {
                            gridTemplateAreas: "'content' 'media'",
                            gridTemplateRows: "1fr",
                            gridTemplateColumns: "1fr",
                            justifyContent: "space-between",
                            ["@media ".concat(m.WU.media.lg)]: {
                                gridTemplateAreas: "'content media'",
                                gridTemplateRows: "initial",
                                gridTemplateColumns: "488px 450px"
                            },
                            ["@media ".concat(m.WU.media.xxl)]: {
                                gridTemplateColumns: "696px 600px"
                            }
                        }
                    }
                })),
                tD = (0, p.ZP)(tL).withConfig({
                    componentId: "sc-884744a8-2"
                })({
                    containerType: "inline-size",
                    containerName: "feature-items-cards"
                }),
                t_ = (0, p.ZP)(v.g).withConfig({
                    componentId: "sc-884744a8-3"
                })({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    padding: m.WU.space.s24,
                    width: "100%",
                    height: "100%",
                    gap: m.WU.space.s16,
                    ["@media ".concat(m.WU.media.md)]: {
                        gap: m.WU.space.s24
                    },
                    ["@media ".concat(m.WU.media.lg)]: {
                        padding: m.WU.space.s32
                    },
                    ["@media ".concat(m.WU.media.xxl)]: {
                        padding: m.WU.space.s40
                    }
                }),
                tZ = t => {
                    var e, i;
                    let {
                        item: a,
                        ...n
                    } = t, o = null !== (i = null === (e = a.style) || void 0 === e ? void 0 : e.color) && void 0 !== i ? i : "foreground";
                    return (0, g.jsx)(tD, {
                        item: a,
                        objectFit: "cover",
                        imageTitle: a.title,
                        ...n,
                        children: (0, g.jsxs)(t_, {
                            className: "feature-items-block-card",
                            children: [a.icon && (0, g.jsx)(q.x, {
                                height: {
                                    all: 24,
                                    lg: 32
                                },
                                width: {
                                    all: 24,
                                    lg: 32
                                },
                                className: "feature-items-block-card__icon",
                                children: (0, g.jsx)(tM.J, {
                                    name: (0, tE.G)(a.icon),
                                    color: o,
                                    size: "100%"
                                })
                            }), a.title && (0, g.jsx)(y.x, {
                                color: o,
                                textAlign: "left",
                                variant: "h5",
                                mt: "s-8",
                                className: "feature-items-block-card__text",
                                children: a.title
                            }), a.button && (0, g.jsx)(tH, {
                                color: o,
                                link: a.button.link,
                                variant: "text",
                                className: "feature-items-block-card__item",
                                children: a.button.label
                            })]
                        })
                    })
                },
                tG = t => {
                    let {
                        title: e,
                        caption: i,
                        description: a,
                        footnote: n,
                        button: o,
                        items: r,
                        style: {
                            color: l,
                            align: d = c.Left,
                            backgroundColor: s
                        }
                    } = t, m = (0, f.b)("md"), p = (0, f.b)("lg"), {
                        activeIndex: h,
                        updateActiveIndex: b,
                        blockRef: x
                    } = z(), v = m && (d === c.Center || !p), S = !p || r.length > 3;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("style", {
                            children: "@media (min-width: 720px) {\n            @container feature-items-cards (max-width: 380px) {\n              .feature-items-block-card { padding: 10cqw; gap: 5cqw; }\n              .feature-items-block-card__icon { width: 8cqw; height: 8cqw; }\n              .feature-items-block-card__text { font-size: 8cqw; line-height: 1.2; }\n              .feature-items-block-card__button { font-size: 5cqw; line-height: 1.2; }\n            }\n          }"
                        }), (0, g.jsx)(te, {
                            activeIndex: h,
                            items: r,
                            backgroundColor: s
                        }), (0, g.jsxs)(tz, {
                            contentAlign: d,
                            ref: x,
                            children: [(0, g.jsx)(F, {
                                gridArea: "content",
                                color: l,
                                title: e,
                                caption: i,
                                description: a,
                                footnote: n,
                                button: o,
                                backgroundAlign: d,
                                align: d === c.Center ? "center" : "start",
                                alignSelf: {
                                    all: "flex-start",
                                    md: "center"
                                }
                            }), (0, g.jsxs)(u.Ig, {
                                gridArea: "media",
                                alignSelf: v ? "center" : {
                                    all: "flex-start",
                                    lg: "center"
                                },
                                marginLeft: v ? "initial" : {
                                    all: "s-20",
                                    lg: 0
                                },
                                style: v ? {
                                    aspectRatio: R
                                } : {},
                                height: "100%",
                                width: {
                                    all: "100%",
                                    lg: "initial"
                                },
                                minHeight: {
                                    all: 412,
                                    md: "initial"
                                },
                                maxHeight: {
                                    all: 412,
                                    lg: 508,
                                    xxl: 643
                                },
                                children: [v && (0, g.jsx)(tR, {
                                    items: r,
                                    ratio: R,
                                    activeIndex: h,
                                    updateActiveIndex: b,
                                    swipeable: S,
                                    children: t => {
                                        let {
                                            item: e
                                        } = t;
                                        return (0, g.jsx)(tZ, {
                                            item: e,
                                            ratio: R,
                                            swipeable: S
                                        })
                                    }
                                }), !v && (0, g.jsx)(u.e2, {
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    style: {
                                        aspectRatio: R
                                    },
                                    children: (0, g.jsx)(tb, {
                                        items: r,
                                        ratio: R,
                                        activeIndex: h,
                                        updateActiveIndex: b,
                                        children: t => {
                                            let {
                                                item: e
                                            } = t;
                                            return (0, g.jsx)(tZ, {
                                                item: e,
                                                ratio: R
                                            })
                                        }
                                    })
                                })]
                            })]
                        })]
                    })
                },
                tF = (0, p.ZP)(u.Ig).withConfig({
                    componentId: "sc-627083b9-0"
                })(t => {
                    let {
                        contentAlign: e
                    } = t, i = e === c.Center ? "100vh" : "90vh";
                    return {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        overflow: "hidden",
                        minHeight: "640px",
                        ["@media ".concat(m.WU.media.lg)]: {
                            minHeight: "max(640px, ".concat(i, ")")
                        },
                        ["@media ".concat(m.WU.media.xxl)]: {
                            minHeight: "max(864px, ".concat(i, ")")
                        }
                    }
                }),
                tO = t => {
                    var e;
                    let {
                        id: i,
                        anchor: a,
                        content: {
                            items: n,
                            ...o
                        }
                    } = t, r = o.style.variant, d = null !== (e = o.style.align) && void 0 !== e ? e : c.Center;
                    return (0, g.jsx)(tF, {
                        id: null != a ? a : i,
                        "data-blockid": i,
                        use: "section",
                        contentAlign: d,
                        children: (0, g.jsxs)(H, {
                            content: o,
                            items: n,
                            children: [r === l.Media && (0, g.jsx)(ta, {}), r === l.Tabs && (0, g.jsx)(tg, { ...o,
                                items: n
                            }), n.length > 1 && r === l.Carousel && (0, g.jsx)(tB, { ...o,
                                items: n
                            }), n.length > 1 && r === l.Cards && (0, g.jsx)(tG, { ...o,
                                items: n
                            })]
                        })
                    })
                }
        },
        23033: function(t, e, i) {
            i.d(e, {
                P: function() {
                    return n
                }
            });
            var a = i(45550);
            let n = (t, e) => !(0, a.b)("md", !1) && e ? e : t
        },
        82539: function(t, e, i) {
            i.d(e, {
                I: function() {
                    return u
                }
            });
            var a = i(85893),
                n = i(22674),
                o = i(28193),
                r = i(67294),
                l = i(49363),
                c = i(27160),
                d = i(30537),
                s = i(98356);
            let g = l.ZP.video.withConfig({
                    componentId: "sc-ca0e39d9-0"
                })(t => {
                    let {
                        $backgroundSize: e,
                        $prefersCoverOnMobile: i
                    } = t;
                    return {
                        width: "100%",
                        height: "100%",
                        objectFit: i ? "cover" : e,
                        ["@media ".concat(n.WU.media.md)]: {
                            objectFit: e
                        },
                        backfaceVisibility: "hidden",
                        webkitMaskImage: "-webkit-radial-gradient(#fff, #000)"
                    }
                }),
                u = t => {
                    let {
                        video: e,
                        options: i,
                        poster: n,
                        active: l = !0,
                        backgroundSize: u = "contain",
                        prefersCoverOnMobile: m,
                        ...p
                    } = t, {
                        videoRef: h
                    } = (0, d.A)(l), f = (0, s.y)(n, 2048);
                    return (0, r.useEffect)(() => {
                        var t;
                        null === (t = h.current) || void 0 === t || t.load()
                    }, [h, e]), (0, a.jsx)(o.Ig, {
                        width: "100%",
                        height: "100%",
                        children: (0, a.jsx)(g, {
                            ref: h,
                            muted: !0,
                            playsInline: !0,
                            "aria-hidden": "true",
                            loop: null == i ? void 0 : i.includes(c.D.Loop),
                            poster: f,
                            $backgroundSize: u,
                            $prefersCoverOnMobile: m,
                            ...p,
                            children: (0, a.jsx)("source", {
                                src: e,
                                type: "video/mp4"
                            })
                        })
                    })
                }
        },
        14600: function(t, e, i) {
            i.d(e, {
                J: function() {
                    return g
                }
            });
            var a = i(85893),
                n = i(49363),
                o = i(22674),
                r = i(37903),
                l = i(27061);
            let c = n.ZP.li.withConfig({
                    componentId: "sc-2ea0e7b1-0"
                })(t => [{
                    listStyleType: "none",
                    transition: "\n      ".concat(o.WU.transition.width, ",\n      ").concat(o.WU.transition.height, ",\n      ").concat(o.WU.transition.opacity),
                    opacity: .7,
                    width: o.WU.space.s6,
                    height: o.WU.space.s6,
                    ["@media ".concat(o.WU.media.xxl)]: {
                        height: o.WU.space.s12,
                        width: o.WU.space.s12
                    }
                }, t.current && {
                    opacity: 1,
                    width: o.WU.space.s8,
                    height: o.WU.space.s8,
                    ["@media ".concat(o.WU.media.xxl)]: {
                        height: o.WU.space.s16,
                        width: o.WU.space.s16
                    }
                }]),
                d = n.ZP.button.withConfig({
                    componentId: "sc-2ea0e7b1-1"
                })({
                    display: "block",
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: o.WU.radius.round,
                    backgroundColor: o.WU.color.grey20,
                    cursor: "pointer"
                }),
                s = (0, n.ZP)(r.U).withConfig({
                    componentId: "sc-2ea0e7b1-2"
                })({
                    isolation: "isolate",
                    height: o.WU.space.s6,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: o.WU.space.s6,
                    ["@media ".concat(o.WU.media.xxl)]: {
                        bottom: o.WU.space.n12,
                        gap: o.WU.space.s12
                    }
                }),
                g = t => {
                    let {
                        current: e,
                        total: i,
                        onClick: n,
                        ...o
                    } = t;
                    return (0, a.jsx)(l.x, {
                        use: "nav",
                        role: "navigation",
                        color: "grey-20",
                        ...o,
                        children: (0, a.jsx)(s, {
                            use: "ul",
                            children: Array.from({
                                length: i
                            }).map((t, i) => {
                                let o = i === e;
                                return (0, a.jsx)(c, {
                                    current: o,
                                    children: (0, a.jsx)(d, {
                                        "aria-current": o,
                                        "aria-label": (o ? "Current page, " : "") + "Page ".concat(i + 1),
                                        onClick: n ? () => n(i) : void 0
                                    })
                                }, i)
                            }, i)
                        })
                    })
                }
        },
        51292: function(t, e, i) {
            i.d(e, {
                G: function() {
                    return c
                }
            });
            var a = i(25533),
                n = i(22674),
                o = i(47887),
                r = i(67294),
                l = i(34155);

            function c(t) {
                let e = (0, a.a)(n.WU.media.md);
                (0, o.t)(t, e => {
                    t.current && !l.env.NEXT_PUBLIC_TEST_ENV && (t.current.style.opacity = e ? "1" : "0")
                }, e ? .2 : 0), (0, r.useEffect)(() => {
                    t.current && (t.current.style.transition = "opacity ".concat(300, "ms ease-in-out"), t.current.style.opacity = "1")
                }, [t])
            }
        },
        56718: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            var a = i(67294);
            let n = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    i = (0, a.useRef)(t);
                (0, a.useEffect)(() => {
                    i.current = t
                }, [t]), (0, a.useEffect)(() => {
                    if (null !== e) {
                        let t = setInterval(() => i.current(), e);
                        return () => clearInterval(t)
                    }
                }, [e])
            }
        },
        91747: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            var a = i(67294);
            let n = t => {
                let [e, i] = (0, a.useState)(), [n, o] = (0, a.useState)();
                return {
                    onTouchStart: t => {
                        o(void 0), i(t.targetTouches[0].clientX)
                    },
                    onTouchMove: t => o(t.targetTouches[0].clientX),
                    onTouchEnd: () => {
                        if (void 0 === e || void 0 === n) return;
                        let i = e - n;
                        i > 50 && t.onSwipedLeft(), i < -50 && t.onSwipedRight()
                    }
                }
            }
        },
        53197: function(t, e, i) {
            i.d(e, {
                G: function() {
                    return n
                }
            });
            let a = {
                    AmexPay: "AmexPay|image",
                    ApplePay: "ApplePay|image",
                    BadgeLeft: "10/BadgeLeft",
                    BadgeRight: "10/BadgeRight",
                    CardCode: "CardCode|image",
                    CardExpiry: "CardExpiry|image",
                    CardNumber: "CardNumber|image",
                    GooglePay: "GooglePay|image",
                    LogoAirplus: "LogoAirplus|image",
                    LogoAirplusColour: "LogoAirplusColour|image",
                    LogoAmex: "LogoAmex|image",
                    LogoAmexColour: "LogoAmexColour|image",
                    LogoDinersClub: "LogoDinersClub|image",
                    LogoDinersClubColour: "LogoDinersClubColour|image",
                    LogoDiscover: "LogoDiscover|image",
                    LogoDiscoverColour: "LogoDiscoverColour|image",
                    LogoGoogle: "LogoGoogle|image",
                    LogoJcb: "LogoJcb|image",
                    LogoJcbColour: "LogoJcbColour|image",
                    LogoMa: "LogoMa|image",
                    LogoMc: "LogoMc|image",
                    LogoMcMetal: "LogoMcMetal|image",
                    LogoMcPremium: "LogoMcPremium|image",
                    LogoMicrosoft: "LogoMicrosoft|image",
                    LogoPix: "LogoPix|image",
                    LogoRevolutColour: "LogoRevolutColour|image",
                    LogoVisaColour: "LogoVisaColour|image",
                    LogoYahoo: "LogoYahoo|image",
                    Peakon: "Peakon|image",
                    StocksArrowDown: "10/StocksArrowDown",
                    StocksArrowUp: "10/StocksArrowUp",
                    StocksDividend: "10/StocksDividend",
                    StocksTax: "10/StocksTax",
                    StocksTopup: "10/StocksTopup",
                    StocksWithdraw: "10/StocksWithdraw",
                    SubtractApps: "40/SubtractApps",
                    SubtractBackpack: "40/SubtractBackpack",
                    SubtractBank: "40/SubtractBank",
                    SubtractBitcoin: "40/SubtractBitcoin",
                    SubtractBudget: "40/SubtractBudget",
                    SubtractCalendar: "40/SubtractCalendar",
                    SubtractCalendarRecurring: "40/SubtractCalendarRecurring",
                    SubtractCard: "40/SubtractCard",
                    SubtractCash: "40/SubtractCash",
                    SubtractCashback: "40/SubtractCashback",
                    SubtractChat: "40/SubtractChat",
                    SubtractCloud: "40/SubtractCloud",
                    SubtractCoins: "40/SubtractCoins",
                    SubtractCommodities: "40/SubtractCommodities",
                    SubtractCompare: "40/SubtractCompare",
                    SubtractConcierge: "40/SubtractConcierge",
                    SubtractCredit: "40/SubtractCredit",
                    SubtractCreditBag: "40/SubtractCreditBag",
                    SubtractCreditCard: "40/SubtractCreditCard",
                    SubtractDocument: "40/SubtractDocument",
                    SubtractDrop: "40/SubtractDrop",
                    SubtractEntertainment: "40/SubtractEntertainment",
                    SubtractExchange: "40/SubtractExchange",
                    SubtractFastfood: "40/SubtractFastfood",
                    SubtractGift: "40/SubtractGift",
                    SubtractGlobe: "40/SubtractGlobe",
                    SubtractGlobeP2P: "40/SubtractGlobeP2P",
                    SubtractGroceries: "40/SubtractGroceries",
                    SubtractGroupVault: "40/SubtractGroupVault",
                    SubtractHealth: "40/SubtractHealth",
                    SubtractIndustrialGear: "40/SubtractIndustrialGear",
                    SubtractInsurance: "40/SubtractInsurance",
                    SubtractLightning: "40/SubtractLightning",
                    SubtractLink: "40/SubtractLink",
                    SubtractLogoRevolut: "40/SubtractLogoRevolut",
                    SubtractLounges: "40/SubtractLounges",
                    SubtractMaterials: "40/SubtractMaterials",
                    SubtractMedicalCross: "40/SubtractMedicalCross",
                    SubtractMerchant: "40/SubtractMerchant",
                    SubtractPeople: "40/SubtractPeople",
                    SubtractPocket: "40/SubtractPocket",
                    SubtractPremium: "40/SubtractPremium",
                    SubtractPresent: "40/SubtractPresent",
                    SubtractProfile: "40/SubtractProfile",
                    SubtractRPoint: "40/SubtractRPoint",
                    SubtractRestaurants: "40/SubtractRestaurants",
                    SubtractRocket: "40/SubtractRocket",
                    SubtractSavingsVault: "40/SubtractSavingsVault",
                    SubtractServices: "40/SubtractServices",
                    SubtractShopping: "40/SubtractShopping",
                    SubtractSmartphoneUmbrella: "40/SubtractSmartphoneUmbrella",
                    SubtractStar: "40/SubtractStar",
                    SubtractStatement: "40/SubtractStatement",
                    SubtractTech: "40/SubtractTech",
                    SubtractTopUp: "40/SubtractTopUp",
                    SubtractTransfers: "40/SubtractTransfers",
                    SubtractTransport: "40/SubtractTransport",
                    SubtractTravel: "40/SubtractTravel",
                    SubtractUtilities: "40/SubtractUtilities",
                    SubtractVault: "40/SubtractVault",
                    SubtractVegan: "40/SubtractVegan",
                    SubtractWealth: "40/SubtractWealth"
                },
                n = t => t && a[t] || t
        }
    }
]);
//# sourceMappingURL=6725.436f639853e56d47.js.map