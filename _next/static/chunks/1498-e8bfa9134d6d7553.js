! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a566d5fb-c351-4696-86ba-5f88ccbdf29c", e._sentryDebugIdIdentifier = "sentry-dbid-a566d5fb-c351-4696-86ba-5f88ccbdf29c")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1498], {
        6388: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return f
                }
            });
            var l = t(85893),
                r = t(67294),
                u = t(939),
                o = t(49363),
                i = t(73307),
                a = t(26832),
                c = t(6484),
                s = t(36598);
            let d = (0, o.ZP)(u.xv).withConfig({
                    componentId: "sc-349000c0-0"
                })({
                    wordBreak: "break-word"
                }),
                f = (0, r.forwardRef)((e, n) => {
                    let {
                        value: t,
                        gaEvent: r,
                        query: u,
                        onClick: o,
                        ...f
                    } = e, v = (0, i.U)(), {
                        trackLink: h
                    } = (0, a.z$)(), m = e => {
                        if (v) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }(0, c.mf)(o) && o(e), h(e, r, t)
                    };
                    return t ? (0, l.jsx)(s._, {
                        value: t,
                        query: u,
                        children: (0, l.jsx)(d, {
                            ref: n,
                            use: "a",
                            onClick: m,
                            ...f
                        })
                    }) : (0, l.jsx)(d, {
                        ref: n,
                        use: "a",
                        onClick: m,
                        ...f
                    })
                });
            f.displayName = "Link"
        },
        20440: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return l
                }
            });
            let l = 3
        },
        49990: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return S
                }
            });
            var l = t(50361),
                r = t.n(l),
                u = t(67294),
                o = t(42378),
                i = t(26832),
                a = t(36934),
                c = t(20107),
                s = t(13634),
                d = t(73307),
                f = t(45550),
                v = t(52661),
                h = t(31188),
                m = t(29991),
                g = t(6484),
                p = t(78112);

            function w() {
                document.body.style.overflow = "", document.documentElement.style.scrollbarGutter = "auto"
            }
            var x = t(40743),
                b = t(23493),
                k = t.n(b),
                y = t(77408),
                C = t(69884);

            function S() {
                var e;
                let {
                    trackEvent: n
                } = (0, i.z$)(), {
                    isBusiness: t
                } = (0, a.C)(), {
                    indexLocationId: l,
                    getSitemapIndexLocations: b,
                    getSitemapLocationsByParentId: S
                } = (0, c.j)(), {
                    getLocationProps: Y,
                    getLocationLink: j,
                    getLocationTitle: M
                } = (0, s.Yt)(), O = (0, u.useRef)(null), z = (0, u.useRef)(null), D = (0, u.useRef)(null), [R, I] = (0, u.useState)(), U = (0, d.U)(), [_, E] = (0, u.useState)(U), L = (0, u.useRef)(0), T = (0, f.b)("lg"), {
                    maxScrollableHeight: W
                } = function(e) {
                    let {
                        isDesktopView: n,
                        isLockedScroll: t,
                        navigationMenuRef: l,
                        navigationSignUpButtonsRef: r
                    } = e, [o, i] = (0, u.useState)("");
                    return (0, u.useEffect)(() => {
                        let e = null == l ? void 0 : l.current,
                            u = null == r ? void 0 : r.current;
                        if (!e) {
                            n || i(""), w();
                            return
                        }
                        if (t) {
                            var o;
                            let {
                                top: t
                            } = e.getBoundingClientRect(), l = window.innerHeight, r = null !== (o = null == u ? void 0 : u.clientHeight) && void 0 !== o ? o : 0;
                            n ? i("".concat(Math.round((l - t) * .9), "px")) : e.style.height = "".concat(l - t - r, "px"), document.body.style.overflow = "hidden", document.documentElement.style.scrollbarGutter = "stable"
                        } else e.style.height = "", i(""), w()
                    }, [n, t, l, r]), {
                        maxScrollableHeight: o
                    }
                }({
                    isDesktopView: T,
                    isLockedScroll: _,
                    navigationMenuRef: z,
                    navigationSignUpButtonsRef: D
                }), B = (0, u.useMemo)(() => b().filter(e => e.scope.includes(h.d.Menu)), [b]), H = null == B ? void 0 : null === (e = B[0]) || void 0 === e ? void 0 : e.locationId, N = (0, u.useMemo)(() => l ? j(l) : void 0, [j, l]), K = (0, u.useMemo)(() => l && M(l), [M, l]), V = (0, u.useMemo)(() => B.map(e => {
                    let {
                        locationId: n
                    } = e;
                    return n
                }), [B]);
                (0, u.useEffect)(() => {
                    I(H)
                }, [H]);
                let P = (0, u.useMemo)(() => S(R).filter(e => {
                        let {
                            locationId: n,
                            scope: t
                        } = e;
                        return t.includes(h.d.Menu) && !(null == V ? void 0 : V.includes(n))
                    }), [R, S, V]),
                    X = (0, u.useMemo)(() => {
                        if (2 === P.length) {
                            let e = r()(P);
                            return e[1].items = [e[1].locationId], e
                        }
                        return P
                    }, [P]);
                (0, u.useEffect)(() => {
                    let e = X.find(e => {
                        var n;
                        return null === (n = e.items) || void 0 === n ? void 0 : n.length
                    });
                    T && A(null == e ? void 0 : e.locationId)
                }, [T, X]);
                let F = (0, u.useCallback)(e => {
                        T && !_ && E(!0), I(e)
                    }, [T, _]),
                    [G, A] = (0, u.useState)(),
                    Z = (0, u.useCallback)((e, n) => {
                        var t, l, r, u;
                        let {
                            unlocalisedValue: o
                        } = null !== (t = Y(e)) && void 0 !== t ? t : {}, {
                            unlocalisedValue: i
                        } = null !== (l = Y(null != n ? n : "")) && void 0 !== l ? l : {}, {
                            unlocalisedValue: a
                        } = null !== (r = Y(null != G ? G : "")) && void 0 !== r ? r : {}, {
                            unlocalisedValue: c
                        } = null !== (u = Y(null != R ? R : "")) && void 0 !== u ? u : {};
                        return {
                            item: o,
                            path: [c, a, i].filter(g.fQ)
                        }
                    }, [Y, R, G]),
                    $ = (0, u.useCallback)((e, l) => {
                        let {
                            item: r,
                            path: u
                        } = Z(e, l);
                        n({
                            action: "MenuLink_Click",
                            component_name: "navigation",
                            vertical: t ? "Business" : "Retail",
                            payload: {
                                item: r,
                                path: JSON.stringify(u)
                            }
                        })
                    }, [Z, t, n]),
                    q = (0, u.useCallback)(() => {
                        n({
                            action: "MenuSection_Open",
                            component_name: "navigation",
                            vertical: t ? "Business" : "Retail",
                            payload: {
                                count: L.current
                            }
                        }), L.current = 0
                    }, [t, n]);
                (0, u.useEffect)(() => {
                    !_ && L.current > 0 && q()
                }, [_, q]);
                let J = (0, u.useMemo)(() => P.some(e => {
                        let {
                            items: n
                        } = e;
                        return null == n ? void 0 : n.length
                    }), [P]),
                    {
                        scrolled: Q,
                        scrollDirection: ee
                    } = function() {
                        let [e, n] = (0, u.useState)(!1), [t, l] = (0, u.useState)("initial"), [r, o] = (0, u.useState)(0), i = (0, u.useContext)(y.im), a = (0, C.nI)(), c = (0, u.useMemo)(() => Object.values(null != i ? i : {}).some(e => e.componentName === m._C.HeroCarousel), [i]) ? 10 : 100;
                        return (0, u.useEffect)(() => {
                            let e = k()(() => {
                                n(window.scrollY > a), Math.abs(window.scrollY - r) > 100 && (o(window.scrollY), l(window.scrollY < r ? "up" : "down"))
                            }, null != c ? c : 100);
                            return window.addEventListener("scroll", e), () => {
                                window.removeEventListener("scroll", e)
                            }
                        }, [a, r, c]), (0, u.useMemo)(() => ({
                            scrolled: e,
                            scrollDirection: t
                        }), [t, e])
                    }(),
                    [en, et] = (0, u.useState)(!1),
                    {
                        menuStyle: el
                    } = (0, v.K)(),
                    er = Q || _ || en,
                    eu = er ? m.YO.Default : null != el ? el : m.YO.TransparentDefault,
                    eo = function(e) {
                        let {
                            menuStyle: n
                        } = (0, v.K)();
                        return e || n === m.YO.Default || n === m.YO.TransparentDefault ? void 0 : n === m.YO.TransparentDark || n === m.YO.SolidDark ? x.UX.DARK : n === m.YO.TransparentLight || n === m.YO.SolidLight ? x.UX.LIGHT : void 0
                    }(er),
                    ei = eu === m.YO.SolidLight || eu === m.YO.TransparentLight,
                    ea = eu === m.YO.SolidDark || eu === m.YO.TransparentDark,
                    ec = (0, o.F)(),
                    es = (0, p.j)(ec.mode),
                    [ed, ef] = (0, u.useState)(void 0);
                return {
                    maxScrollableHeight: W,
                    overLocationId: ed,
                    setOverLocationId: ef,
                    hasThemeMismatch: ea && !es || ei && es,
                    scrolled: Q,
                    scrollDirection: ee,
                    changeSelectedLocationId: F,
                    indexLink: N,
                    indexLocations: B,
                    indexTitle: K,
                    isMenuDesktopStyle: T,
                    isMenuMultiLevel: J,
                    isMenuOpen: _,
                    menuItems: X,
                    navigationButtonMenuRef: O,
                    navigationMenuRef: z,
                    navigationSignUpButtonsRef: D,
                    selectedLocationId: R,
                    setIsMenuOpen: E,
                    incrementMenuSectionOpenCount: () => {
                        L.current += 1
                    },
                    trackMenuLinkClick: $,
                    navigationThemeMode: eo,
                    isMenuHighlighted: en,
                    setMenuHighlighted: et,
                    hasToResetStyle: er,
                    currentMenuStyle: eu
                }
            }
        },
        62482: function(e, n, t) {
            t.d(n, {
                X: function() {
                    return u
                },
                s: function() {
                    return r
                }
            });
            var l = t(67294);
            let r = (0, l.createContext)({}),
                u = () => (0, l.useContext)(r)
        },
        1341: function(e, n, t) {
            t.d(n, {
                a: function() {
                    return a
                }
            });
            var l = t(85893),
                r = t(67294),
                u = t(22674),
                o = t(31346);
            let i = t(49363).ZP.svg.withConfig({
                    componentId: "sc-81786132-0"
                })(e => {
                    let {
                        variant: n
                    } = e;
                    return {
                        marginTop: "-2px",
                        height: "small" === n ? u.WU.size.s16 : u.WU.size.s24,
                        ["@media ".concat(u.WU.media.xxl)]: {
                            height: "small" === n ? u.WU.size.s24 : u.WU.size.s32
                        }
                    }
                }),
                a = (0, r.forwardRef)((e, n) => {
                    let {
                        color: t = u.WU.color.foreground,
                        variant: r = "default",
                        title: a
                    } = e;
                    return (0, l.jsx)(o.k, {
                        alignItems: "center",
                        flex: "1 1",
                        height: "small" === r ? {
                            all: "s-24",
                            xxl: "s-32"
                        } : {
                            all: "s-32",
                            xxl: "s-40"
                        },
                        ref: n,
                        use: "span",
                        title: "Revolut",
                        children: (0, l.jsxs)(i, {
                            fill: t,
                            variant: r,
                            viewBox: "0 0 145 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [a && (0, l.jsx)("title", {
                                children: a
                            }), (0, l.jsx)("path", {
                                clipRule: "evenodd",
                                d: "m98.8039 0h5.6871v31.7312h-5.6871zm46.0571 13.3685v-4.92408h-5.881v-6.41996h-5.687v23.40534c0 2.1506.541 3.7895 1.608 4.8714 1.066 1.0828 2.728 1.6317 4.939 1.6317h5.021v-4.924h-3.674c-.799 0-1.372-.1757-1.704-.5226-.305-.3175-.503-1.1195-.503-2.043v-11.0748zm-84.6893 12.1865 5.8804-17.11125h5.9749l-8.4889 23.28775h-6.7327l-8.489-23.28775h5.9749zm63.8513-5.4451c0 1.4743-.224 2.7569-.664 3.8121-.437 1.0495-1.063 1.8541-1.861 2.3908s-1.779.8089-2.916.8089c-1.626 0-2.853-.5344-3.646-1.5878-.802-1.0646-1.209-2.6781-1.209-4.7954v-12.29412h-5.687v12.92272c0 2.0122.251 3.7189.748 5.0721.497 1.3573 1.18 2.4614 2.029 3.281.849.8187 1.84 1.41 2.946 1.7581 1.1.3463 2.284.5217 3.518.5217 1.778 0 3.25-.3225 4.373-.9586 1.024-.5819 1.883-1.2622 2.555-2.0251l.509 2.7148h4.992v-23.28672h-5.687zm-33.913-10.43745c-1.7923-.99372-3.9206-1.49716-6.3249-1.49716-2.3749 0-4.4953.50344-6.3024 1.49684-1.8092.99597-3.2308 2.40247-4.2254 4.18037-.9931 1.7763-1.4966 3.8817-1.4966 6.2574 0 2.3466.5035 4.4373 1.4966 6.2136.994 1.7773 2.4159 3.1835 4.2254 4.1793 1.8071.9935 3.9276 1.4969 6.3024 1.4969 2.4042 0 4.5325-.5034 6.3249-1.4972 1.7942-.9953 3.2082-2.4014 4.2026-4.179.9934-1.7773 1.4971-3.868 1.4971-6.2136 0-2.3748-.5037-4.4802-1.4971-6.2575-.995-1.7781-2.4087-3.1847-4.2026-4.17995zm-3.0047 16.63905c-.9162.5966-2.0332.8993-3.3199.8993-1.2572 0-2.367-.3026-3.2986-.8995-.9332-.5976-1.665-1.441-2.1757-2.5072-.5128-1.0672-.7732-2.3099-.7732-3.6942 0-1.4128.2601-2.6627.7732-3.7154.5104-1.0518 1.2428-1.8955 2.1769-2.5081.9313-.612 2.0408-.9222 3.2973-.9222 1.2861 0 2.4025.3102 3.319.9215.9191.613 1.6443 1.457 2.1559 2.5091.5125 1.0552.7725 2.3052.7725 3.7152 0 1.3811-.26 2.6242-.7725 3.6941-.5115 1.0664-1.2364 1.9099-2.1549 2.5074zm-81.19475-18.48035h-5.91055v23.90035h5.91055zm18.53525 1.36671c0-5.07148-4.1298-9.19751668-9.2063-9.19751668h-15.2395v5.10407668h14.5149c2.2974 0 4.2004 1.80488 4.2425 4.02316.021 1.11072-.3959 2.15902-1.1738 2.95172-.7782.7929-1.818 1.2299-2.9278 1.2299h-5.65434c-.20074 0-.36413.1631-.36413.3639v4.5363c0 .0772.02383.1509.06866.213l9.59341 13.3092h7.0225l-9.6157-13.3456c4.8425-.2431 8.7396-4.3118 8.7396-9.18814zm18.1745.33907c-1.7026-.90368-3.7242-1.36164-6.0087-1.36164-2.2874 0-4.3325.50376-6.0787 1.4978-1.7491.99501-3.1251 2.40181-4.0897 4.18061-.9636 1.7748-1.452 3.8949-1.452 6.3017 0 2.3457.4959 4.4357 1.4746 6.2123.9808 1.7807 2.3955 3.1797 4.2041 4.158 1.8052.9784 3.9706 1.4743 6.4354 1.4743 1.9554 0 3.7114-.3663 5.2192-1.0894 1.5081-.7249 2.7393-1.712 3.6596-2.9341.8742-1.1615 1.464-2.4752 1.7525-3.9042l.0311-.1525h-5.6559l-.0267.0916c-.3114 1.0659-.9156 1.9081-1.7964 2.5038-.9454.6405-2.1066.9654-3.4519.9654-1.1402 0-2.17-.2443-3.0605-.7261-.8862-.479-1.5791-1.164-2.059-2.0367-.4818-.8757-.756-1.9294-.8146-3.1254v-.187h17.0842l.0191-.1044c.0596-.3278.0979-.6656.1145-1.0053.0141-.331.0223-.6616.0223-.9953-.0305-2.2563-.5348-4.2409-1.4987-5.8993-.9677-1.6603-2.3215-2.9605-4.0238-3.86417zm-2.0724 4.38547c.9717.8178 1.5762 1.9799 1.7979 3.4564h-11.2467c.1285-.958.4466-1.7877.9463-2.4683.5242-.7139 1.1957-1.2748 1.9962-1.6672.8014-.3936 1.6813-.5934 2.6148-.5934 1.5781-.0001 2.8874.4281 3.8915 1.2725z",
                                fillRule: "evenodd"
                            })]
                        })
                    })
                });
            a.displayName = "RevolutLogo"
        },
        20176: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return f
                },
                y: function() {
                    return d
                }
            });
            var l = t(85893),
                r = t(67294),
                u = t(27061),
                o = t(42378),
                i = t(88027);
            let a = e => {
                    let {
                        backgroundColor: n,
                        ...t
                    } = e;
                    return (0, l.jsx)(u.x, {
                        backgroundColor: n,
                        color: "foreground",
                        width: "100%",
                        ...t
                    })
                },
                c = r.createContext(!1),
                s = e => {
                    let {
                        children: n
                    } = e;
                    return (0, l.jsx)(c.Provider, {
                        value: !0,
                        children: n
                    })
                },
                d = () => (0, r.useContext)(c),
                f = e => {
                    let {
                        mode: n,
                        children: t,
                        backgroundColor: r
                    } = e, u = (0, o.F)();
                    return n && n !== u.mode ? (0, l.jsx)(s, {
                        children: (0, l.jsx)(i.f, {
                            mode: n,
                            highContrast: !0,
                            children: (0, l.jsx)(a, {
                                backgroundColor: r,
                                children: t
                            })
                        })
                    }) : (0, l.jsx)(l.Fragment, {
                        children: t
                    })
                }
        },
        45550: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return u
                }
            });
            var l = t(25533),
                r = t(22674);
            let u = function(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return (0, l.a)(r.WU.media[e], n)
            }
        },
        69884: function(e, n, t) {
            t.d(n, {
                K7: function() {
                    return u
                },
                RY: function() {
                    return i
                },
                cB: function() {
                    return o
                },
                nI: function() {
                    return a
                }
            });
            var l = t(25533),
                r = t(22674);
            let u = 56,
                o = 72,
                i = 88;

            function a() {
                let e = (0, l.a)(r.WU.media.xxl),
                    n = (0, l.a)(r.WU.media.lg);
                return e ? i : n ? o : u
            }
        },
        78112: function(e, n, t) {
            t.d(n, {
                j: function() {
                    return r
                }
            });
            var l = t(40743);
            let r = e => e === l.UX.DARK
        }
    }
]);
//# sourceMappingURL=1498-e8bfa9134d6d7553.js.map