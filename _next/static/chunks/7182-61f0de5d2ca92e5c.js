! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            o = Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a7f40b32-6a0a-4cbd-a60b-214283e1202d", e._sentryDebugIdIdentifier = "sentry-dbid-a7f40b32-6a0a-4cbd-a60b-214283e1202d")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7182], {
        27077: function(e, o, n) {
            n.d(o, {
                z: function() {
                    return m
                }
            });
            var t = n(85893),
                a = n(67294),
                r = n(22674),
                i = n(20010),
                c = n(49363),
                l = n(16678),
                d = n(26832),
                s = n(6484),
                u = n(36598),
                g = n(89463);
            let p = (0, c.ZP)(i.z).withConfig({
                    componentId: "sc-dd364494-0"
                })(g._F.subtitle2, e => {
                    let {
                        height: o = "auto",
                        maxWidth: n,
                        width: t = "min-content"
                    } = e;
                    return {
                        height: o,
                        width: t,
                        maxWidth: null != n ? n : "240px",
                        paddingLeft: r.WU.size.s24,
                        paddingRight: r.WU.size.s24,
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        "&:focus-visible": {
                            boxShadow: "0 0 0 0.125rem rgb(".concat(r.WU.colorChannel.blue, " / 0.5) inset, 0 0 0 0.225rem ").concat(r.WU.color.background, " inset")
                        },
                        ["@media ".concat(r.WU.media.md)]: {
                            maxWidth: null != n ? n : "440px"
                        },
                        ["@media ".concat(r.WU.media.lg)]: {
                            maxWidth: null != n ? n : "720px"
                        },
                        ["@media ".concat(r.WU.media.xxl)]: {
                            maxWidth: null != n ? n : "1024px",
                            paddingLeft: r.WU.size.s32,
                            paddingRight: r.WU.size.s32,
                            paddingTop: "14px",
                            paddingBottom: "14px"
                        }
                    }
                }, (0, l.bU)({
                    variants: {
                        default: {
                            backgroundColor: r.WU.color.background,
                            color: r.WU.color.foreground,
                            "&:hover": {
                                backgroundColor: r.WU.color.background,
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: r.WU.color.background,
                                opacity: .75
                            },
                            "&:disabled": {
                                backgroundColor: r.WU.color.background,
                                color: r.WU.color.grey50
                            }
                        },
                        text: {
                            "&:hover": {
                                backgroundColor: r.WU.color.greyTone2,
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: r.WU.color.greyTone2,
                                opacity: .75
                            },
                            "&:disabled": {
                                color: r.WU.color.grey50
                            }
                        },
                        primary: {
                            backgroundColor: r.WU.color.foreground,
                            color: r.WU.color.background,
                            "&:hover": {
                                backgroundColor: r.WU.color.foreground,
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: r.WU.color.foreground,
                                opacity: .75
                            },
                            "&:disabled": {
                                backgroundColor: r.WU.color.foreground,
                                color: r.WU.color.grey50
                            }
                        },
                        secondary: {
                            backgroundColor: "transparent",
                            color: r.WU.color.foreground,
                            borderColor: r.WU.color.foreground,
                            borderStyle: "solid",
                            borderWidth: 2,
                            "&:hover": {
                                backgroundColor: "transparent",
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: "transparent",
                                opacity: .75
                            },
                            "&:disabled": {
                                backgroundColor: "transparent",
                                borderColor: r.WU.color.grey50,
                                color: r.WU.color.grey50
                            }
                        }
                    }
                })),
                m = (0, a.forwardRef)((e, o) => {
                    let {
                        gaEvent: n,
                        link: a,
                        query: r,
                        onClick: i,
                        children: c,
                        ...l
                    } = e, {
                        trackLink: g
                    } = (0, d.z$)(), m = e => {
                        (0, s.mf)(i) && i(e), g(e, n, a)
                    };
                    return a ? (0, t.jsx)(u._, {
                        value: a,
                        query: r,
                        children: (0, t.jsx)(p, {
                            use: "a",
                            size: "sm",
                            ref: o,
                            onClick: m,
                            ...l,
                            children: c
                        })
                    }) : (0, t.jsx)(p, {
                        size: "sm",
                        ref: o,
                        onClick: m,
                        ...l,
                        children: c
                    })
                });
            m.displayName = "Button"
        },
        57182: function(e, o, n) {
            n.d(o, {
                h4: function() {
                    return eI
                },
                B5: function() {
                    return ew
                }
            });
            var t = n(85893),
                a = n(67294),
                r = n(27061),
                i = n(22674),
                c = n(26370),
                l = n(49363),
                d = n(41664),
                s = n.n(d),
                u = n(11163),
                g = n(62052),
                p = n(45550),
                m = n(73307),
                h = n(79645),
                x = n(52661),
                f = n(78112),
                b = n(99123),
                W = n(6388),
                U = n(1341),
                k = n(82168),
                v = n(89463),
                C = n(80829),
                y = n(69884),
                j = n(29991);
            let w = (0, a.createContext)(null);

            function I() {
                let e = (0, a.useContext)(w);
                if (null === e) throw Error("You can access `NavigationContext` only in components inside `Navigation` component");
                return e
            }
            var L = n(20107),
                T = n(31188),
                O = n(3179),
                R = n(94166),
                Y = n(31346),
                S = n(15059),
                D = n(58003),
                z = n(13634),
                B = n(16125),
                M = n(9538),
                _ = n(939),
                E = n(27077);
            let P = (0, l.ZP)(E.z).withConfig({
                    componentId: "sc-1f583c34-0"
                })(e => {
                    let {
                        hasGroupWrapper: o = !0
                    } = e;
                    return {
                        breakInside: "avoid",
                        backgroundColor: o ? i.WU.color.background : "transparent",
                        position: "relative",
                        padding: "".concat(i.WU.space.s12, " ").concat(i.WU.space.s16),
                        maxWidth: "100%",
                        textAlign: "left",
                        display: "block",
                        width: "100%",
                        whiteSpace: "normal",
                        borderRadius: 0,
                        ["@media ".concat(i.WU.media.md)]: {
                            borderRadius: i.WU.radius.round,
                            padding: "".concat(i.WU.space.s8, " ").concat(i.WU.space.s16)
                        },
                        ["@media ".concat(i.WU.media.xl)]: {
                            padding: "10px ".concat(i.WU.space.s16)
                        },
                        '[data-rui="state-layer"]': {
                            backgroundColor: "unset"
                        },
                        "&[href]:hover": {
                            backgroundColor: i.WU.color.greyTone2
                        }
                    }
                }),
                Z = e => {
                    var o;
                    let {
                        groupLocationId: n,
                        locationId: r
                    } = e, {
                        getLocationProps: i,
                        getLocationLink: c
                    } = (0, z.Yt)(), {
                        setIsMenuOpen: l,
                        trackMenuLinkClick: d
                    } = I(), {
                        title: s
                    } = null !== (o = i(r)) && void 0 !== o ? o : {}, u = (0, a.useCallback)(() => {
                        d(r, n), l(!1)
                    }, [n, r, l, d]);
                    return s ? (0, t.jsx)(P, {
                        link: c(r),
                        onClick: u,
                        children: (0, t.jsx)(_.xv, {
                            variant: "secondary",
                            whiteSpace: "normal",
                            children: s
                        })
                    }, r) : null
                },
                F = (0, l.ZP)(O.X).withConfig({
                    componentId: "sc-81fcb44-0"
                })({
                    width: "100%"
                }),
                A = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-81fcb44-1"
                })({
                    breakInside: "avoid",
                    paddingBottom: i.WU.space.s16,
                    color: i.WU.color.foreground,
                    overflow: "hidden"
                }),
                N = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-81fcb44-2"
                })(() => ({
                    maxWidth: "100%",
                    ["@media ".concat(i.WU.media.md)]: {
                        columnGap: i.WU.space.s16,
                        columnCount: 3
                    },
                    ["@media ".concat(i.WU.media.lg)]: {
                        columnCount: 4
                    },
                    ["@media ".concat(i.WU.media.xxl)]: {
                        columnCount: 5
                    }
                })),
                G = e => {
                    var o;
                    let {
                        sitemapLocation: {
                            locationId: n
                        }
                    } = e, {
                        getSitemapLocationsByParentId: c
                    } = (0, L.j)(), {
                        getLocationProps: l,
                        getLocationLink: d
                    } = (0, z.Yt)(), {
                        incrementMenuSectionOpenCount: s,
                        setIsMenuOpen: u,
                        trackMenuLinkClick: g
                    } = I(), p = (0, a.useMemo)(() => c(n).filter(e => {
                        let {
                            scope: o
                        } = e;
                        return o.includes(T.d.Menu)
                    }).map(e => {
                        let {
                            locationId: o
                        } = e;
                        return (0, t.jsx)(Z, {
                            groupLocationId: n,
                            locationId: o
                        }, o)
                    }), [c, n]), {
                        type: m,
                        title: h
                    } = null !== (o = l(n)) && void 0 !== o ? o : {}, x = (0, a.useCallback)(() => {
                        g(n), u(!1)
                    }, [g, n, u]);
                    return h ? m === B._i.Section ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(r.x, {
                            hide: "md-*",
                            children: (0, t.jsx)(R.Z, {
                                children: e => {
                                    let {
                                        state: o,
                                        toggle: n
                                    } = e;
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)(F, {
                                            onClick: () => {
                                                s(), n()
                                            },
                                            children: (0, t.jsxs)(Y.k, {
                                                use: "span",
                                                alignItems: "center",
                                                children: [(0, t.jsx)(M.x, {
                                                    use: "h6",
                                                    mr: "auto",
                                                    padding: "s-8",
                                                    variant: "subtitle2",
                                                    py: "s-12",
                                                    children: h
                                                }), (0, t.jsx)(S.J, {
                                                    name: "16/ChevronDownSmall",
                                                    size: 16
                                                })]
                                            })
                                        }), (0, t.jsx)(D.K, { in: o,
                                            children: (0, t.jsx)(r.x, {
                                                ml: "s-8",
                                                backgroundColor: "background",
                                                borderRadius: i.WU.radius.r8,
                                                overflow: "hidden",
                                                children: p
                                            })
                                        })]
                                    })
                                }
                            })
                        }), (0, t.jsxs)(A, {
                            hide: "*-md",
                            children: [(0, t.jsx)(M.x, {
                                use: "h6",
                                paddingX: "s-16",
                                paddingY: "s-8",
                                variant: "subtitle2",
                                children: h
                            }), p]
                        }, n)]
                    }) : (0, t.jsx)(P, {
                        hasGroupWrapper: !1,
                        link: d(n),
                        onClick: x,
                        children: (0, t.jsx)(M.x, {
                            variant: "secondary",
                            whiteSpace: "normal",
                            children: h
                        })
                    }, n) : null
                },
                H = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-67bd0de4-0"
                })(e => {
                    let {
                        hasExtraCategory: o,
                        prefersColumns: n
                    } = e;
                    return n ? {
                        ["@media ".concat(i.WU.media.md)]: {
                            columnGap: i.WU.space.s16,
                            columnCount: o ? 2 : 3
                        },
                        ["@media ".concat(i.WU.media.lg)]: {
                            columnCount: o ? 3 : 4
                        },
                        ["@media ".concat(i.WU.media.xxl)]: {
                            columnCount: o ? 5 : 6
                        }
                    } : {}
                }),
                K = e => {
                    let {
                        prefersColumns: o,
                        sitemapLocation: {
                            items: n
                        },
                        hasExtraCategory: a
                    } = e, {
                        getSitemapLocation: r
                    } = (0, L.j)();
                    return (0, t.jsx)(H, {
                        prefersColumns: o,
                        hasExtraCategory: a,
                        children: null == n ? void 0 : n.map(e => {
                            let o = r(e);
                            return (null == o ? void 0 : o.scope.includes(T.d.Menu)) ? (0, t.jsx)(G, {
                                sitemapLocation: o
                            }, e) : null
                        })
                    })
                },
                X = (0, l.ZP)(W.r).withConfig({
                    componentId: "sc-c66f4350-0"
                })(v._F.h6, {
                    alignItems: "center",
                    columnGap: i.WU.space.s8,
                    display: "grid",
                    gridAutoFlow: "column",
                    gridTemplateColumns: "auto 1fr",
                    padding: i.WU.space.s8,
                    paddingLeft: i.WU.space.s8,
                    marginBottom: i.WU.space.s16,
                    ["@media ".concat(i.WU.media.md)]: {
                        paddingLeft: i.WU.space.s16,
                        marginBottom: i.WU.space.s12
                    },
                    ["@media ".concat(i.WU.media.lg)]: {
                        marginBottom: 0
                    },
                    ["@media ".concat(i.WU.media.xxl)]: {
                        marginBottom: i.WU.space.s16
                    },
                    "&:focus-visible": {
                        outlineOffset: "-1px"
                    }
                }),
                q = e => {
                    var o;
                    let {
                        locationId: n,
                        spanToExtraCategory: i
                    } = e, {
                        getLocationProps: c,
                        getLocationLink: l
                    } = (0, z.Yt)(), {
                        title: d,
                        type: s
                    } = null !== (o = c(n)) && void 0 !== o ? o : {}, {
                        setIsMenuOpen: u,
                        trackMenuLinkClick: g
                    } = I(), p = (0, a.useCallback)(() => {
                        g(n), u(!1)
                    }, [n, u, g]);
                    return s !== B._i.Internal ? null : (0, t.jsx)(r.x, {
                        style: {
                            gridColumn: "1 / ".concat(i ? 3 : 2)
                        },
                        children: (0, t.jsxs)(X, {
                            value: l(n),
                            onClick: p,
                            children: [d, (0, t.jsx)(S.J, {
                                name: "ArrowThinRight"
                            })]
                        })
                    })
                };
            var J = n(20440);
            let $ = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-8dcca462-0"
                })(e => {
                    let {
                        theme: o
                    } = e;
                    return {
                        backgroundColor: i.WU.color.greyTone2,
                        position: "absolute",
                        overflow: "auto",
                        padding: i.WU.space.s24,
                        borderBottom: "1px solid",
                        borderBottomColor: i.WU.color.greyTone8,
                        top: 0,
                        left: 0,
                        right: 0,
                        marginTop: "calc(".concat(v.W9.navigationHeight, " - 1px)"),
                        ["@media ".concat(i.WU.media.md)]: {
                            backgroundColor: i.WU.color.background
                        },
                        ["@media ".concat(i.WU.media.lg)]: {
                            padding: "0 ".concat(i.WU.space.s16),
                            gap: i.WU.space.s16
                        },
                        ["@media ".concat(i.WU.media.xl)]: {
                            gap: i.WU.space.s32
                        },
                        "&::before": {
                            content: '""',
                            display: "none",
                            position: "sticky",
                            zIndex: J.B - 1,
                            background: (0, f.j)(o.mode) ? "linear-gradient(180deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)" : "linear-gradient(180deg, rgba(255,255,255, 1) 20%, rgba(255,255,255, 0) 100%)",
                            left: 0,
                            right: 0,
                            ["@media ".concat(i.WU.media.lg)]: {
                                display: "block",
                                top: 0,
                                height: i.WU.size.s16
                            },
                            ["@media ".concat(i.WU.media.xxl)]: {
                                height: i.WU.size.s32
                            }
                        },
                        "&::after": {
                            content: '""',
                            display: "none",
                            position: "sticky",
                            zIndex: J.B - 1,
                            background: (0, f.j)(o.mode) ? "linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)" : "linear-gradient(0deg, rgba(255,255,255, 1) 20%, rgba(255,255,255, 0) 100%)",
                            left: 0,
                            right: 0,
                            ["@media ".concat(i.WU.media.lg)]: {
                                display: "block",
                                bottom: 0,
                                height: i.WU.size.s24
                            },
                            ["@media ".concat(i.WU.media.xxl)]: {
                                height: i.WU.size.s32
                            }
                        }
                    }
                }, {
                    "-webkit-overflow-scrolling": "touch"
                }),
                Q = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-8dcca462-1"
                })(e => {
                    let {
                        hasExtraCategory: o
                    } = e;
                    return {
                        maxWidth: v.W9.layoutMaxWidth,
                        overflow: "initial",
                        marginLeft: "auto",
                        marginRight: "auto",
                        ["@media ".concat(i.WU.media.lg)]: {
                            overflow: "hidden",
                            display: "grid",
                            gridTemplateColumns: o ? "3fr 1fr" : "1fr",
                            gap: o ? i.WU.space.s16 : void 0
                        },
                        ["@media ".concat(i.WU.media.xl)]: {
                            gridTemplateColumns: o ? "4fr 1fr" : "1fr"
                        }
                    }
                }),
                V = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-8dcca462-2"
                })({
                    opacity: 0,
                    content: '""',
                    display: "none",
                    pointerEvents: "none",
                    position: "absolute",
                    height: "20px",
                    width: "100%",
                    right: 0,
                    left: 0,
                    ["@media ".concat(i.WU.media.lg)]: {
                        display: "block",
                        pointerEvents: "all",
                        bottom: 0
                    },
                    ["@media ".concat(i.WU.media.xxl)]: {
                        height: "26px"
                    }
                }),
                ee = e => {
                    let {
                        children: o
                    } = e, {
                        menuItems: n,
                        isMenuOpen: a,
                        navigationMenuRef: i,
                        isMenuMultiLevel: c,
                        maxScrollableHeight: l
                    } = I();
                    if (!a) return null;
                    let d = n[0],
                        s = n.length > 1 && c;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(V, {}), (0, t.jsx)($, {
                            use: "nav",
                            role: "navigation",
                            ref: i,
                            maxHeight: l,
                            children: (0, t.jsxs)(Q, {
                                hasExtraCategory: s,
                                children: [o && (0, t.jsx)(r.x, {
                                    hide: "lg-*",
                                    mb: "s-16",
                                    ml: "-s-8",
                                    children: o
                                }), c && d && (0, t.jsx)(q, {
                                    spanToExtraCategory: s,
                                    locationId: d.locationId
                                }), c ? n.map((e, o) => (0, t.jsx)(K, {
                                    hasExtraCategory: s,
                                    sitemapLocation: e,
                                    prefersColumns: 0 === o
                                }, e.locationId)) : (0, t.jsx)(N, {
                                    children: n.map(e => (0, t.jsx)(G, {
                                        sitemapLocation: e
                                    }, e.locationId))
                                })]
                            })
                        })]
                    })
                };
            var eo = n(37903),
                en = n(44948),
                et = n(36934),
                ea = n(20176);

            function er() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.YO.TransparentDefault;
                switch (e) {
                    case j.YO.TransparentLight:
                    case j.YO.SolidLight:
                        return i.WU.color.black;
                    case j.YO.TransparentDark:
                    case j.YO.SolidDark:
                        return i.WU.color.white;
                    case j.YO.Default:
                    case j.YO.TransparentDefault:
                    default:
                        return i.WU.color.foreground
                }
            }
            let ei = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-2e114bd7-0"
                })({
                    backgroundColor: i.WU.color.greyTone2,
                    bottom: 0,
                    columnGap: i.WU.size.s16,
                    display: "grid",
                    gridAutoFlow: "column",
                    justifyContent: "center",
                    left: 0,
                    padding: i.WU.size.s12,
                    position: "fixed",
                    width: "100%",
                    zIndex: J.B,
                    boxShadow: "\n      0 -1px 0 rgba(25, 28, 31, 0.04),\n      0 8px 16px rgba(25, 28, 31, 0.04),\n      0 14px 28px rgba(25, 28, 31, 0.04)",
                    ["@media ".concat(i.WU.media.lg)]: {
                        display: "none"
                    }
                }),
                ec = (0, a.forwardRef)((e, o) => {
                    let {
                        children: n,
                        isOpen: a
                    } = e;
                    return a && (0, t.jsx)(ei, {
                        ref: o,
                        children: n
                    })
                });
            ec.displayName = "NavigationSignUpButtonsContainer";
            let el = () => {
                    let e = (0, h.T)(),
                        {
                            loginLink: o,
                            signupLink: n
                        } = function() {
                            let {
                                isBusiness: e,
                                isRevolutUnder18: o
                            } = (0, et.C)();
                            return e ? {
                                loginLink: {
                                    uri: en.li.BusinessWebAppLogin,
                                    type: B._i.External
                                },
                                signupLink: {
                                    uri: en.li.BusinessWebAppSignUp,
                                    type: B._i.External
                                }
                            } : o ? {
                                loginLink: void 0,
                                signupLink: {
                                    uri: en.li.RevolutUnder18GetTheApp,
                                    type: B._i.External
                                }
                            } : {
                                loginLink: {
                                    uri: en.li.RetailWebAppLogin,
                                    type: B._i.External
                                },
                                signupLink: {
                                    uri: en.li.RetailOpenApp,
                                    type: B._i.External
                                }
                            }
                        }(),
                        {
                            setIsMenuOpen: a,
                            hasToResetStyle: r,
                            navigationThemeMode: i
                        } = I(),
                        c = e("shared.button.login"),
                        l = e("shared.button.signUp"),
                        d = (0, p.b)("lg"),
                        {
                            menuStyle: s
                        } = (0, x.K)();
                    return (0, t.jsx)(ea.O, {
                        mode: i,
                        children: (0, t.jsxs)(eo.U, {
                            space: "s-16",
                            children: [o && c && (0, t.jsx)(E.z, {
                                link: o,
                                variant: d ? "text" : "default",
                                color: r ? "foreground" : er(s),
                                children: c
                            }), n && l && (0, t.jsx)(E.z, {
                                "data-blockid": "signup-button",
                                link: n,
                                variant: "primary",
                                onClick: () => a(!1),
                                children: e("shared.button.signUp")
                            })]
                        })
                    })
                },
                ed = (0, l.ZP)(Y.k).withConfig({
                    componentId: "sc-cb77fa67-0"
                })({
                    alignItems: "center",
                    overflowX: "auto",
                    marginLeft: i.WU.space.n24,
                    marginRight: i.WU.space.n24,
                    paddingLeft: i.WU.space.s24,
                    paddingRight: i.WU.space.s24,
                    ["@media ".concat(i.WU.media.lg)]: {
                        overflowX: "visible",
                        marginLeft: 0,
                        marginRight: 0,
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    "::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                es = (0, l.ZP)(E.z).withConfig({
                    componentId: "sc-cb77fa67-1"
                })(e => {
                    let {
                        menuStyle: o,
                        withLink: n
                    } = e;
                    return {
                        alignItems: "center",
                        marginLeft: i.WU.space.s4,
                        marginRight: i.WU.space.s4,
                        transition: "".concat(i.WU.transition.text, ", ").concat(i.WU.transition.background),
                        whiteSpace: "nowrap",
                        minWidth: "min-content",
                        display: "block",
                        padding: "".concat(i.WU.space.s8, " 10px"),
                        backgroundColor: "transparent",
                        color: er(o),
                        ["@media ".concat(i.WU.media.xl)]: {
                            padding: "".concat(i.WU.space.s8, " ").concat(i.WU.space.s20)
                        },
                        ["@media ".concat(i.WU.media.xxl)]: {
                            padding: "".concat(i.WU.space.s8, " ").concat(i.WU.space.s24)
                        },
                        "&:hover": {
                            cursor: n ? "pointer" : "default !important",
                            color: i.WU.color.foreground,
                            backgroundColor: i.WU.color.greyTone10
                        },
                        "&[aria-current='page'], &[aria-selected='true'], &[aria-pressed='true']": {
                            color: i.WU.color.foreground,
                            backgroundColor: i.WU.color.greyTone10
                        }
                    }
                }),
                eu = (0, l.ZP)(r.x).withConfig({
                    componentId: "sc-cb77fa67-2"
                })(e => {
                    let {
                        isRightAlign: o
                    } = e;
                    return o ? {
                        ["@media ".concat(i.WU.media.lg)]: {
                            marginLeft: "auto"
                        }
                    } : {}
                }),
                eg = e => {
                    let {
                        children: o,
                        isRightAlign: n
                    } = e;
                    return (0, t.jsx)(eu, {
                        isRightAlign: n,
                        children: o
                    })
                },
                ep = (0, a.forwardRef)((e, o) => {
                    let {
                        isDesktop: n,
                        children: r,
                        ...i
                    } = e, {
                        getLocationProps: c,
                        getLocationLink: l,
                        locationId: d
                    } = (0, z.Yt)(), {
                        getSitemapLocation: s
                    } = (0, L.j)(), u = (0, m.U)(), {
                        changeSelectedLocationId: g,
                        incrementMenuSectionOpenCount: p,
                        indexLocations: h,
                        isMenuDesktopStyle: x,
                        isMenuOpen: f,
                        selectedLocationId: b,
                        setIsMenuOpen: W,
                        currentMenuStyle: U,
                        overLocationId: k,
                        setOverLocationId: v
                    } = I(), {
                        getSitemapLocationsByParentId: C
                    } = (0, L.j)(), y = (0, a.useMemo)(() => h.reduce((e, o) => {
                        var n;
                        return (null === (n = o.style) || void 0 === n ? void 0 : n.align) === "right" ? e[1].push(o) : e[0].push(o), e
                    }, [
                        [],
                        []
                    ]), [h]), j = y[0].length, w = y.flat(), T = d && s(d) || void 0, O = (0, a.useRef)(!1);
                    return (0, t.jsx)(ed, { ...i,
                        ref: o,
                        children: w.map((e, o) => {
                            var i, d, s;
                            let {
                                locationId: m
                            } = e, {
                                title: h,
                                type: y
                            } = null !== (d = c(m)) && void 0 !== d ? d : {}, w = C(m), I = b === m, L = o === j, R = w[0], {
                                type: Y
                            } = null !== (s = c(null == R ? void 0 : R.locationId)) && void 0 !== s ? s : {}, S = (null == R ? void 0 : null === (i = R.items) || void 0 === i ? void 0 : i.length) && Y !== B._i.Section ? R : void 0, D = null == S ? void 0 : S.resourceId, z = D && D === (null == T ? void 0 : T.resourceId), M = () => {
                                (u || x) && k !== m && (v(m), g(m), p())
                            }, E = () => {
                                v(void 0)
                            };
                            return y === B._i.Section && S && n ? (0, t.jsxs)(a.Fragment, {
                                children: [(0, t.jsx)(eg, {
                                    isRightAlign: L,
                                    children: (0, t.jsx)(es, {
                                        withLink: !0,
                                        menuStyle: U,
                                        "aria-current": f && I ? "page" : void 0,
                                        link: l(S.locationId),
                                        onTouchStart: () => O.current = !0,
                                        onClick: e => {
                                            O.current || z ? (e.preventDefault(), e.stopPropagation()) : W(!1)
                                        },
                                        onFocus: () => g(m),
                                        onMouseEnter: M,
                                        onMouseLeave: E,
                                        children: h
                                    })
                                }), I && r]
                            }, m) : y === B._i.Section ? (0, t.jsxs)(a.Fragment, {
                                children: [(0, t.jsx)(eg, {
                                    isRightAlign: L,
                                    children: (0, t.jsx)(es, {
                                        withLink: !1,
                                        menuStyle: U,
                                        "aria-current": f && I ? "page" : void 0,
                                        onClick: () => {
                                            g(m), p()
                                        },
                                        onFocus: () => g(m),
                                        onMouseEnter: M,
                                        onMouseLeave: E,
                                        children: (0, t.jsx)(_.xv, {
                                            style: {
                                                pointerEvents: "none"
                                            },
                                            children: h
                                        })
                                    })
                                }), I && r]
                            }, m) : (0, t.jsxs)(a.Fragment, {
                                children: [(0, t.jsx)(eu, {
                                    isRightAlign: L,
                                    children: (0, t.jsx)(es, {
                                        withLink: !0,
                                        menuStyle: U,
                                        link: l(m),
                                        onMouseEnter: () => x && W(!1),
                                        onFocus: () => x && W(!1),
                                        onClick: () => W(!1),
                                        children: h
                                    })
                                }), I && r]
                            }, m)
                        })
                    })
                });
            ep.displayName = "NavigationTopLevel";
            var em = n(49990),
                eh = n(78606);
            let {
                publicRuntimeConfig: ex
            } = (0, g.i)(), ef = (0, l.ZP)(r.x).withConfig({
                componentId: "sc-ee472300-0"
            })(e => {
                let {
                    menuStyle: o,
                    withBorder: n,
                    opaque: t,
                    theme: a,
                    scrollDirection: r,
                    $offset: c
                } = e, l = c && c - 1, d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.YO.TransparentDefault;
                    switch (e) {
                        case j.YO.TransparentLight:
                        case j.YO.TransparentDark:
                        case j.YO.TransparentDefault:
                            return "transparent";
                        case j.YO.SolidDark:
                            return i.WU.color.black;
                        case j.YO.SolidLight:
                            return i.WU.color.white;
                        case j.YO.Default:
                        default:
                            return i.WU.color.background
                    }
                }(o), s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.YO.TransparentDefault,
                        o = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e) {
                        case j.YO.TransparentLight:
                        case j.YO.TransparentDark:
                        case j.YO.TransparentDefault:
                            return "transparent";
                        case j.YO.SolidDark:
                            return i.WU.color.black_80;
                        case j.YO.SolidLight:
                            return i.WU.color.white_80;
                        case j.YO.Default:
                        default:
                            return o ? i.WU.color.black_80 : i.WU.color.white_80
                    }
                }(o, (0, f.j)(a.mode));
                return {
                    backgroundColor: o === j.YO.Default ? i.WU.color.greyTone2 : d,
                    color: er(o),
                    boxSizing: "content-box",
                    borderBottom: n ? "".concat(1, "px solid") : "none",
                    borderBottomColor: i.WU.color.greyTone8,
                    position: "sticky",
                    top: "down" === r ? -y.K7 + l : c,
                    width: "100%",
                    height: v.W9.navigationHeight,
                    zIndex: J.B,
                    transition: "background-color 200ms ease, top 200ms ease, opacity 300ms ease",
                    "&:hover": {
                        transition: "top 200ms ease"
                    },
                    ["@media ".concat(i.WU.media.md)]: {
                        backgroundColor: d
                    },
                    ["@media ".concat(i.WU.media.lg)]: {
                        top: "down" === r ? -y.cB + l : c
                    },
                    ["@media ".concat(i.WU.media.xxl)]: {
                        top: "down" === r ? -y.RY + l : c
                    },
                    "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) ": {
                        backdropFilter: o === j.YO.Default ? "blur(16px)" : "none",
                        backgroundColor: t ? s : void 0
                    }
                }
            }), eb = (0, l.ZP)(r.x).withConfig({
                componentId: "sc-ee472300-1"
            })({
                alignItems: "center",
                display: "flex",
                height: "100%",
                justifyContent: "space-between",
                marginRight: "auto",
                marginLeft: "auto",
                maxWidth: v.W9.layoutMaxWidth,
                width: "100%",
                padding: "".concat(i.WU.space.s12, " ").concat(i.WU.space.s20),
                ["@media ".concat(i.WU.media.lg)]: {
                    padding: "".concat(i.WU.space.s16, " 0")
                }
            }), eW = (0, l.ZP)(r.x).withConfig({
                componentId: "sc-ee472300-2"
            })({
                alignItems: "center",
                columnGap: i.WU.space.s16,
                display: "none",
                gridTemplateColumns: "1fr auto",
                marginLeft: i.WU.space.s32,
                ["@media ".concat(i.WU.media.lg)]: {
                    display: "grid"
                }
            }), eU = e => {
                let {
                    children: o
                } = e, {
                    setNavigationRef: n
                } = (0, eh.o)(), {
                    bannersOffset: r
                } = (0, k.s)(), {
                    isMenuOpen: i,
                    scrolled: c,
                    scrollDirection: l,
                    isMenuHighlighted: d,
                    setMenuHighlighted: s,
                    currentMenuStyle: u,
                    hasThemeMismatch: g
                } = I(), m = (0, p.b)("lg") && g && !1, h = (0, a.useCallback)(e => {
                    n(e)
                }, [n]);
                return (0, t.jsx)(ef, {
                    onMouseEnter: () => s(m),
                    onMouseLeave: () => s(!1),
                    "data-blockid": "navigation",
                    use: "header",
                    opaque: !d && !i,
                    withBorder: c && !i,
                    menuStyle: u,
                    scrollDirection: l,
                    $offset: r,
                    ref: h,
                    children: o
                })
            }, ek = e => {
                let {
                    children: o
                } = e, n = I(), a = (0, m.U)(), r = () => {
                    !a && n.isMenuOpen && n.setIsMenuOpen(!1)
                };
                return (0, t.jsx)(ep, {
                    isDesktop: !0,
                    onMouseLeave: r,
                    onBlur: e => {
                        let o = e.currentTarget;
                        requestAnimationFrame(() => {
                            o.contains(document.activeElement) || r()
                        })
                    },
                    children: o
                })
            }, ev = e => {
                let {
                    children: o
                } = e;
                return (0, t.jsxs)(eW, {
                    width: o ? "100%" : "auto",
                    children: [o, (0, t.jsx)(el, {})]
                })
            }, eC = e => {
                let {
                    children: o
                } = e, n = (0, h.T)(), a = I();
                return (0, t.jsxs)(r.x, {
                    hide: "lg-*",
                    children: [(0, t.jsx)(c.h, {
                        onClick: () => a.setIsMenuOpen(e => !e),
                        ref: a.navigationButtonMenuRef,
                        "aria-label": n(a.isMenuOpen ? "shared.button.close" : "shared.button.openMenu"),
                        useIcon: a.isMenuOpen ? "Cross" : "Menu"
                    }), o]
                })
            }, ey = (0, l.ZP)(r.x).withConfig({
                componentId: "sc-ee472300-3"
            })({
                content: '""',
                backgroundColor: i.WU.color.black_40,
                display: "none",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: J.B - 1,
                ["@media ".concat(i.WU.media.lg)]: {
                    display: "block"
                }
            }), ej = e => {
                let {
                    children: o
                } = e, n = (0, em.H)(), a = (0, m.U)(), {
                    menuStyle: r
                } = (0, x.K)();
                return (0, t.jsxs)(w.Provider, {
                    value: n,
                    children: [n.isMenuOpen && (0, t.jsx)(ey, {}), (0, t.jsx)(eU, {
                        children: (0, t.jsxs)(eb, {
                            children: [(0, t.jsx)(W.r, {
                                value: n.indexLink,
                                title: "Revolut",
                                children: (0, t.jsx)(U.a, {
                                    color: n.hasToResetStyle ? void 0 : er(r)
                                })
                            }), o]
                        })
                    }), a || (0, t.jsx)(ec, {
                        isOpen: n.isMenuOpen,
                        ref: n.navigationSignUpButtonsRef,
                        children: (0, t.jsx)(el, {})
                    })]
                })
            }, ew = () => {
                let e = (0, p.b)("lg");
                return (0, t.jsxs)(ej, {
                    children: [(0, t.jsx)(ev, {
                        children: (0, t.jsx)(ek, {
                            children: e && (0, t.jsx)(ee, {})
                        })
                    }), (0, t.jsx)(eC, {
                        children: !e && (0, t.jsx)(ee, {
                            children: (0, t.jsx)(ep, {
                                isDesktop: !1
                            })
                        })
                    })]
                })
            };
            ew.Layout = ej, ew.Menu = ek, ew.Desktop = ev, ew.Mobile = eC;
            let eI = e => {
                let {
                    logoColor: o
                } = e, n = (0, em.H)(), {
                    locale: a
                } = (0, u.useRouter)(), {
                    region: r
                } = (0, b.i4)(a), i = C.sv.has(r), c = "https://www.".concat(ex.websiteDomain, "/"), l = (0, x.K)(), d = null != o ? o : er(l.menuStyle);
                return (0, t.jsx)(w.Provider, {
                    value: n,
                    children: (0, t.jsx)(eU, {
                        children: (0, t.jsx)(eb, {
                            children: i ? (0, t.jsx)(U.a, {
                                color: d
                            }) : (0, t.jsx)(s(), {
                                href: c,
                                title: "Revolut",
                                prefetch: !1,
                                children: (0, t.jsx)(U.a, {
                                    color: d
                                })
                            })
                        })
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=7182-61f0de5d2ca92e5c.js.map