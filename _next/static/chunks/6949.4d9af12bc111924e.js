! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            o = Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "6e7c7077-3f71-4809-9e62-36947483eeea", e._sentryDebugIdIdentifier = "sentry-dbid-6e7c7077-3f71-4809-9e62-36947483eeea")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6949, 1690], {
        89880: function(e, o, n) {
            n.d(o, {
                C: function() {
                    return v
                },
                O: function() {
                    return f
                }
            });
            var t, i = n(67294),
                r = n(49363),
                a = n(79500),
                c = n(40199),
                s = n(22674),
                l = n(2660),
                d = n(6763),
                u = n(49339),
                p = ["size", "useIcon", "variant", "children"];

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var f = {
                    SIZE_5: 5,
                    SIZE_16: 16,
                    SIZE_20: 20,
                    SIZE_24: 24
                },
                h = ((t = {})[u.P.DEFAULT] = f.SIZE_20, t[u.P.OUTLINED] = f.SIZE_16, t[u.P.DOT] = f.SIZE_5, t),
                b = (0, r.ZP)(l.C).withConfig({
                    displayName: "Badge__CircleButton",
                    componentId: "rui__sc-igjrv7-0"
                })(["appearance:none;transition:", ";&:focus-visible{", "}:enabled:not([aria-disabled='true']){cursor:pointer;}&:disabled{pointer-events:none;}"], s.WU.transition.shadow, c.j),
                v = (0, i.forwardRef)(function(e, o) {
                    var n = e.size,
                        t = e.useIcon,
                        r = e.variant,
                        c = void 0 === r ? u.P.DEFAULT : r,
                        s = e.children,
                        l = function(e, o) {
                            if (null == e) return {};
                            var n, t, i = {},
                                r = Object.keys(e);
                            for (t = 0; t < r.length; t++) n = r[t], o.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, p),
                        v = n === f.SIZE_5 ? u.P.DOT : c,
                        x = null != n ? n : h[c],
                        m = v === u.P.DOT;
                    return i.createElement(b, g({
                        ref: o,
                        display: "inline-flex",
                        px: m || null == s ? void 0 : "0.4em",
                        height: x,
                        minWidth: x,
                        __variants: u.E,
                        variant: v,
                        textStyle: function(e) {
                            switch (e) {
                                case f.SIZE_16:
                                case f.SIZE_20:
                                    return a.pn.TINY;
                                case f.SIZE_24:
                                default:
                                    return a.pn.SMALL
                            }
                        }(n)
                    }, l), m ? null : i.createElement(i.Fragment, null, (0, d.i)(t, function(e) {
                        switch (e) {
                            case f.SIZE_16:
                            case f.SIZE_20:
                                return 12;
                            case f.SIZE_24:
                            default:
                                return 16
                        }
                    }(x)), s))
                })
        },
        49339: function(e, o, n) {
            n.d(o, {
                E: function() {
                    return d
                },
                P: function() {
                    return a
                }
            });
            var t, i = n(22674);

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = {
                    DEFAULT: "default",
                    DOT: "dot",
                    OUTLINED: "outlined"
                },
                c = {
                    color: i.WU.color.background,
                    backgroundColor: i.WU.color.red,
                    borderWidth: 0,
                    ":hover:enabled": {
                        cursor: "pointer"
                    }
                },
                s = r({}, c, {
                    margin: i.WU.space.s4
                }),
                l = r({}, c, {
                    backgroundColor: i.WU.color.accent,
                    boxSizing: "content-box",
                    borderStyle: "solid",
                    borderColor: i.WU.color.background,
                    borderWidth: i.WU.space.s2
                }),
                d = ((t = {})[a.DEFAULT] = c, t[a.DOT] = s, t[a.OUTLINED] = l, t)
        },
        26370: function(e, o, n) {
            n.d(o, {
                h: function() {
                    return y
                }
            });
            var t = n(67294),
                i = n(49363),
                r = n(16678),
                a = n(47574),
                c = n(22674),
                s = n(90305),
                l = n(73245),
                d = n(3179),
                u = n(6763),
                p = n(19550),
                g = n(60260),
                f = n(49339),
                h = n(89880);

            function b() {
                return (b = Object.assign ? Object.assign.bind() : function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var v = (0, i.ZP)(h.C).attrs(function(e) {
                    var o, n = null != (o = e.margin ? null : e.variant === f.P.DOT ? {
                            margin: c.WU.space.n2
                        } : {
                            margin: c.WU.space.n8
                        }) ? o : {},
                        t = e.size,
                        i = void 0 === t ? h.O.SIZE_16 : t;
                    return b({}, n, {
                        size: i
                    })
                }).withConfig({
                    displayName: "IconButtonBadge",
                    componentId: "rui__sc-f4gzaw-0"
                })(["z-index:1;place-self:start end;"]),
                x = ["useIcon", "useHoverIcon", "variant", "active", "size", "tapArea", "children"];

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var k = {
                    ICON: "icon"
                },
                C = (0, i.ZP)(d.X).withConfig({
                    displayName: "IconButton__IconButtonBase",
                    componentId: "rui__sc-1xan14r-0"
                })([":focus-visible{background-color:", ";color:", ";}", " ", " ", " ", " ", ""], c.WU.color.background, c.WU.color.foreground, function(e) {
                    var o = e.active;
                    return e.variant === k.ICON ? (0, r.$_)(e) : {
                        color: o ? c.WU.color.accent : c.WU.color.greyTone50,
                        backgroundColor: o ? c.WU.color.background : "transparent",
                        transition: c.WU.transition.background,
                        '&:hover:not(:disabled), &[aria-expanded="true"]': {
                            backgroundColor: c.WU.color.greyTone10
                        },
                        "&:disabled": {
                            color: c.WU.color.greyTone20,
                            backgroundColor: "transparent"
                        }
                    }
                }, function(e) {
                    var o = e.variant,
                        n = e.size;
                    return o === k.ICON ? {
                        display: "block",
                        width: (0, s.hO)(n),
                        height: (0, s.hO)(n)
                    } : {
                        padding: c.WU.space.s8,
                        width: c.bQ.size.buttonSm,
                        height: c.bQ.size.buttonSm
                    }
                }, r.e6, (0, a.N)({
                    top: -2,
                    right: -5
                }), function(e) {
                    var o = e.size,
                        n = e.tapArea;
                    if (!(o >= n)) {
                        var t = (0, s.hO)(-(n - o) / 2);
                        return {
                            position: "relative",
                            zIndex: 0,
                            "&::before": {
                                content: "''",
                                position: "absolute",
                                top: t,
                                bottom: t,
                                left: t,
                                right: t
                            }
                        }
                    }
                }),
                y = Object.assign((0, t.forwardRef)(function(e, o) {
                    var n = e.useIcon,
                        i = e.useHoverIcon,
                        r = e.variant,
                        a = void 0 === r ? k.ICON : r,
                        c = e.active,
                        s = e.size,
                        d = void 0 === s ? 24 : s,
                        f = e.tapArea,
                        h = void 0 === f ? a === k.ICON && 44 : f,
                        b = e.children,
                        y = function(e, o) {
                            if (null == e) return {};
                            var n, t, i = {},
                                r = Object.keys(e);
                            for (t = 0; t < r.length; t++) n = r[t], o.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, x),
                        W = (0, t.useState)(!1),
                        U = W[0],
                        w = W[1];
                    return t.createElement(C, m({
                        ref: o,
                        size: d,
                        tapArea: !1 === h ? 0 : h,
                        active: void 0 !== c && c,
                        variant: a
                    }, y, {
                        onMouseEnter: (0, l.$e)(function() {
                            return w(!0)
                        }, y.onMouseEnter),
                        onMouseLeave: (0, l.$e)(function() {
                            return w(!1)
                        }, y.onMouseLeave)
                    }), t.createElement(g.G, null, (0, u.i)(U && i ? i : n, d), t.isValidElement(b) && b.type === v ? b : t.createElement(p.T, null, b)))
                }), {
                    Badge: v
                })
        },
        83755: function(e, o, n) {
            n.d(o, {
                A: function() {
                    return p
                }
            });
            var t = n(49363),
                i = n(16678),
                r = n(25348),
                a = n(27634),
                c = n(22674),
                s = n(3179),
                l = n(40743);

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            var u = d({
                    DEFAULT: "default"
                }, l.Il),
                p = (0, t.ZP)(s.X).attrs(function(e) {
                    var o = e.variant,
                        n = void 0 === o ? u.DEFAULT : o,
                        t = e.display,
                        i = e.width,
                        r = e.maxWidth;
                    return {
                        variant: n,
                        display: void 0 === t ? "inline-block" : t,
                        width: void 0 === i ? "max-content" : i,
                        maxWidth: void 0 === r ? "100%" : r
                    }
                }).withConfig({
                    displayName: "TextButton",
                    componentId: "rui__sc-wk5noy-0"
                })({
                    color: c.WU.color.accent,
                    transition: c.bQ.transition.button,
                    "&:disabled, &[aria-disabled=true]": {
                        opacity: .5
                    }
                }, (0, i.By)({
                    variant: {
                        property: "color",
                        scale: r.C.COLORS
                    }
                }), a.C, i.I8, i.JB, i.Ue, i.rX, i.Nv, i.yd, i.$_, i.Dh, i.bf, i.Cb, i.kk)
        },
        27077: function(e, o, n) {
            n.d(o, {
                z: function() {
                    return f
                }
            });
            var t = n(85893),
                i = n(67294),
                r = n(22674),
                a = n(20010),
                c = n(49363),
                s = n(16678),
                l = n(26832),
                d = n(6484),
                u = n(36598),
                p = n(89463);
            let g = (0, c.ZP)(a.z).withConfig({
                    componentId: "sc-dd364494-0"
                })(p._F.subtitle2, e => {
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
                }, (0, s.bU)({
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
                f = (0, i.forwardRef)((e, o) => {
                    let {
                        gaEvent: n,
                        link: i,
                        query: r,
                        onClick: a,
                        children: c,
                        ...s
                    } = e, {
                        trackLink: p
                    } = (0, l.z$)(), f = e => {
                        (0, d.mf)(a) && a(e), p(e, n, i)
                    };
                    return i ? (0, t.jsx)(u._, {
                        value: i,
                        query: r,
                        children: (0, t.jsx)(g, {
                            use: "a",
                            size: "sm",
                            ref: o,
                            onClick: f,
                            ...s,
                            children: c
                        })
                    }) : (0, t.jsx)(g, {
                        size: "sm",
                        ref: o,
                        onClick: f,
                        ...s,
                        children: c
                    })
                });
            f.displayName = "Button"
        },
        71690: function(e, o, n) {
            n.r(o), n.d(o, {
                CookieSettingsDetails: function() {
                    return O
                }
            });
            var t = n(85893),
                i = n(22674),
                r = n(56607),
                a = n(27061),
                c = n(31346),
                s = n(67294),
                l = n(49363),
                d = n(27077),
                u = n(76459),
                p = n(6388),
                g = n(16125),
                f = n(9538),
                h = n(26832),
                b = n(36934),
                v = n(79645),
                x = n(3179),
                m = n(99105),
                k = n(37903),
                C = n(15059),
                y = n(68439),
                W = n(58003),
                U = n(94779);
            let w = (0, l.ZP)(x.X).withConfig({
                    componentId: "sc-c9ee92b-0"
                })({
                    alignItems: "center",
                    display: "flex",
                    flexBasis: "100%",
                    flexDirection: "row",
                    gap: i.WU.space.s16,
                    paddingBottom: i.WU.space.s16,
                    paddingTop: i.WU.space.s16
                }),
                j = e => {
                    let {
                        description: o,
                        onChange: n = U.ZT,
                        state: i,
                        title: c
                    } = e, s = (0, v.T)(), [l, d] = (0, m.O)();
                    return (0, t.jsxs)(r.g, {
                        use: "div",
                        width: "100%",
                        maxWidth: {
                            md: "488px",
                            xxl: "700px"
                        },
                        children: [(0, t.jsxs)(k.U, {
                            use: "div",
                            align: "center",
                            width: "100%",
                            space: "s-16",
                            children: [(0, t.jsxs)(w, {
                                onClick: () => d(),
                                children: [(0, t.jsx)(C.J, {
                                    size: 24,
                                    name: l ? "Minus" : "Plus"
                                }), (0, t.jsx)(f.x, {
                                    variant: "subtitle2",
                                    children: c
                                })]
                            }), (0, t.jsx)(a.x, {
                                maxWidth: "50%",
                                style: {
                                    flexShrink: 0
                                },
                                children: void 0 === i ? (0, t.jsx)(f.x, {
                                    use: "p",
                                    variant: "secondary",
                                    color: "green",
                                    textAlign: "end",
                                    children: s("widget.cookieSettings.alwaysActive")
                                }) : (0, t.jsx)(y.r, {
                                    checked: i,
                                    onChange: e => n(e.target.checked),
                                    title: c
                                })
                            })]
                        }), (0, t.jsx)(W.K, { in: l,
                            children: (0, t.jsx)(f.x, {
                                use: "p",
                                ml: "s-40",
                                mb: "s-16",
                                mr: "s-16",
                                variant: "secondary",
                                children: o
                            })
                        })]
                    })
                };
            var S = n(58178);
            let I = {
                    legalDocumentId: "43b90a5f-dc2b-4a39-b6c3-1932b49cc8a3",
                    type: g._i.Legal
                },
                _ = (0, l.ZP)(d.z).withConfig({
                    componentId: "sc-e6b98c59-0"
                })({
                    maxWidth: "100%",
                    width: "100%",
                    ["@media ".concat(i.WU.media.md)]: {
                        width: "auto"
                    }
                }),
                O = e => {
                    let {
                        onSubmit: o
                    } = e, n = (0, v.T)(), {
                        submitCookieSettings: i,
                        isPreferencesEnabled: l,
                        isAdvertisingEnabled: d,
                        isAnalyticsEnabled: g
                    } = (0, S.eK)(), {
                        trackEvent: x
                    } = (0, h.z$)(), {
                        isBusiness: m
                    } = (0, b.C)(), [k, C] = (0, s.useState)(l), [y, W] = (0, s.useState)(g), [U, w] = (0, s.useState)(d), O = (0, s.useCallback)(() => {
                        i({
                            preferences: k,
                            analytics: y,
                            advertising: U
                        }), o(), x({
                            action: "CookieConsent_Customise",
                            component_name: "cookie-consent",
                            vertical: m ? "Business" : "Retail",
                            payload: {
                                preferences: k,
                                analytics: y,
                                advertising: U
                            }
                        })
                    }, [m, o, i, U, y, k, x]), E = (0, s.useCallback)(() => {
                        C(!0), W(!0), w(!0), i({
                            preferences: !0,
                            analytics: !0,
                            advertising: !0
                        }), o(), x({
                            action: "CookieConsent_Customise",
                            component_name: "cookie-consent",
                            vertical: m ? "Business" : "Retail",
                            payload: {
                                preferences: !0,
                                analytics: !0,
                                advertising: !0
                            }
                        })
                    }, [o, i, x, m]);
                    return (0, t.jsxs)(r.g, {
                        use: "div",
                        height: "100%",
                        space: {
                            all: "s-16",
                            xxl: "s-32"
                        },
                        children: [(0, t.jsx)(f.x, {
                            use: "h2",
                            variant: "h6",
                            children: n("widget.cookieSettings.title")
                        }), (0, t.jsx)(f.x, {
                            use: "p",
                            variant: "secondary",
                            children: n("widget.cookieSettings.description1")
                        }), (0, t.jsx)(f.x, {
                            use: "p",
                            variant: "secondary",
                            children: new u.C(n("widget.cookieSettings.description2")).format({
                                cookiePolicyLink: e => (0, t.jsx)(p.r, {
                                    style: {
                                        textDecoration: "underline"
                                    },
                                    target: "_blank",
                                    value: I,
                                    children: e.join(" ")
                                }, "cookie-policy-legal-link")
                            })
                        }), (0, t.jsxs)(a.x, {
                            children: [(0, t.jsx)(j, {
                                description: n("widget.cookieSettings.essentialCookies.description"),
                                title: n("widget.cookieSettings.essentialCookies")
                            }), (0, t.jsx)(j, {
                                description: n("widget.cookieSettings.preferencesCookies.description"),
                                onChange: C,
                                state: k,
                                title: n("widget.cookieSettings.preferencesCookies")
                            }), (0, t.jsx)(j, {
                                description: n("widget.cookieSettings.analyticsCookies.description"),
                                onChange: W,
                                state: y,
                                title: n("widget.cookieSettings.analyticsCookies")
                            }), (0, t.jsx)(j, {
                                description: n("widget.cookieSettings.advertisingCookies.description"),
                                onChange: w,
                                state: U,
                                title: n("widget.cookieSettings.advertisingCookies")
                            })]
                        }), (0, t.jsxs)(c.k, {
                            flexDirection: {
                                all: "column",
                                md: "row"
                            },
                            gap: "s-16",
                            mt: "auto",
                            pb: {
                                all: "s-20",
                                md: "s-24",
                                xxl: "s-32"
                            },
                            children: [(0, t.jsx)(_, {
                                variant: "primary",
                                onClick: O,
                                children: n("widget.cookieSettings.confirm")
                            }), (0, t.jsx)(_, {
                                onClick: E,
                                children: n("widget.cookieSettings.acceptAll")
                            })]
                        })]
                    })
                }
        },
        96949: function(e, o, n) {
            n.r(o), n.d(o, {
                CookieSettingsPopup: function() {
                    return I
                }
            });
            var t = n(85893),
                i = n(67294),
                r = n(99105),
                a = n(56843),
                c = n(96944),
                s = n(79645),
                l = n(45550),
                d = n(31346),
                u = n(22674),
                p = n(26370),
                g = n(49363),
                f = n(71690);
            let h = (0, g.ZP)(d.k).withConfig({
                    componentId: "sc-ce388bf5-0"
                })({
                    background: u.WU.color.widgetBackground,
                    flexDirection: "column",
                    gap: u.WU.space.s16,
                    overflow: "scroll",
                    padding: "".concat(u.WU.space.s20, " ").concat(u.WU.space.s20, " 0"),
                    position: "fixed",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    ["@media ".concat(u.WU.media.md)]: {
                        maxWidth: "448px",
                        padding: "".concat(u.WU.space.s24, " ").concat(u.WU.space.s24, " 0")
                    },
                    ["@media ".concat(u.WU.media.xxl)]: {
                        maxWidth: "584px",
                        padding: "".concat(u.WU.space.s32, " ").concat(u.WU.space.s32, " 0")
                    }
                }),
                b = e => {
                    let {
                        onSubmit: o,
                        onClose: n
                    } = e, i = (0, s.T)();
                    return (0, t.jsxs)(h, {
                        children: [(0, t.jsx)(p.h, {
                            useIcon: "Cross",
                            onClick: n,
                            title: i("shared.button.close")
                        }), (0, t.jsx)(f.CookieSettingsDetails, {
                            onSubmit: o
                        })]
                    })
                };
            var v = n(83755),
                x = n(2297),
                m = n(27077),
                k = n(9538),
                C = n(26832),
                y = n(36934),
                W = n(58178);
            let U = (0, g.ZP)(d.k).withConfig({
                    componentId: "sc-23ee4756-0"
                })({
                    background: u.WU.color.widgetBackground,
                    borderRadius: "20px 20px 0 0",
                    bottom: 0,
                    flexDirection: "column",
                    gap: u.WU.space.s16,
                    overflow: "auto",
                    padding: u.WU.space.s20,
                    position: "fixed",
                    right: 0,
                    width: "100%",
                    ["@media ".concat(u.WU.media.md)]: {
                        borderRadius: "20px",
                        bottom: u.WU.space.s48,
                        maxWidth: "400px",
                        padding: u.WU.space.s24,
                        right: u.WU.space.s48
                    },
                    ["@media ".concat(u.WU.media.xxl)]: {
                        maxWidth: "520px",
                        padding: u.WU.space.s32
                    }
                }),
                w = (0, g.ZP)(m.z).withConfig({
                    componentId: "sc-23ee4756-1"
                })({
                    maxWidth: "100%",
                    width: "100%"
                }),
                j = (0, g.ZP)(v.A).withConfig({
                    componentId: "sc-23ee4756-2"
                })({
                    color: u.WU.color.foreground,
                    textDecoration: "underline"
                }),
                S = e => {
                    let {
                        onSubmit: o,
                        onClickMore: n
                    } = e, i = (0, s.T)(), {
                        trackEvent: r
                    } = (0, C.z$)(), {
                        isBusiness: a
                    } = (0, y.C)(), {
                        submitCookieSettings: c
                    } = (0, W.eK)();
                    return (0, t.jsxs)(U, {
                        children: [(0, t.jsx)(k.x, {
                            use: "h2",
                            variant: "h6",
                            children: i("widget.cookieSettings.popup.title")
                        }), (0, t.jsxs)(k.x, {
                            use: "p",
                            variant: "secondary",
                            children: [i("widget.cookieSettings.popup.description"), (0, t.jsx)("br", {}), (0, t.jsx)(j, {
                                onClick: n,
                                children: i("widget.cookieSettings.popup.learnMore")
                            })]
                        }), (0, t.jsx)(x.L, {}), (0, t.jsx)(w, {
                            variant: "primary",
                            onClick: () => {
                                c({
                                    preferences: !0,
                                    analytics: !0,
                                    advertising: !0
                                }), o(), r({
                                    action: "CookieConsent_Granted",
                                    component_name: "cookie-consent",
                                    vertical: a ? "Business" : "Retail"
                                })
                            },
                            children: i("widget.cookieSettings.acceptAll")
                        }), (0, t.jsx)(w, {
                            variant: "secondary",
                            onClick: () => {
                                c({
                                    preferences: !1,
                                    analytics: !1,
                                    advertising: !1
                                }), o(), r({
                                    action: "CookieConsent_Denied",
                                    component_name: "cookie-consent",
                                    vertical: a ? "Business" : "Retail"
                                })
                            },
                            children: i("widget.cookieSettings.rejectNonEssential")
                        })]
                    })
                },
                I = () => {
                    let e = (0, s.T)(),
                        [o, n] = (0, r.O)({
                            defaultState: !0
                        }),
                        [d, u] = (0, i.useState)("initial"),
                        p = (0, l.b)("md");
                    return (0, t.jsxs)(a.a, {
                        "aria-label": e("widget.cookieSettings.popup.title"),
                        closeOnOverlayClick: !1,
                        open: o,
                        role: "dialog",
                        scrollLock: !1,
                        onExit: () => u(null),
                        children: [(0, t.jsx)(c.n, { in: "initial" === d,
                            offsetY: -16,
                            children: (0, t.jsx)(S, {
                                onClickMore: () => u("details"),
                                onSubmit: n.off
                            })
                        }), (0, t.jsx)(c.n, { in: "details" === d,
                            offsetX: p ? "-100%" : void 0,
                            offsetY: p ? void 0 : "-10%",
                            children: (0, t.jsx)(b, {
                                onClose: () => u("initial"),
                                onSubmit: n.off
                            })
                        })]
                    })
                }
        },
        6388: function(e, o, n) {
            n.d(o, {
                r: function() {
                    return p
                }
            });
            var t = n(85893),
                i = n(67294),
                r = n(939),
                a = n(49363),
                c = n(73307),
                s = n(26832),
                l = n(6484),
                d = n(36598);
            let u = (0, a.ZP)(r.xv).withConfig({
                    componentId: "sc-349000c0-0"
                })({
                    wordBreak: "break-word"
                }),
                p = (0, i.forwardRef)((e, o) => {
                    let {
                        value: n,
                        gaEvent: i,
                        query: r,
                        onClick: a,
                        ...p
                    } = e, g = (0, c.U)(), {
                        trackLink: f
                    } = (0, s.z$)(), h = e => {
                        if (g) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }(0, l.mf)(a) && a(e), f(e, i, n)
                    };
                    return n ? (0, t.jsx)(d._, {
                        value: n,
                        query: r,
                        children: (0, t.jsx)(u, {
                            ref: o,
                            use: "a",
                            onClick: h,
                            ...p
                        })
                    }) : (0, t.jsx)(u, {
                        ref: o,
                        use: "a",
                        onClick: h,
                        ...p
                    })
                });
            p.displayName = "Link"
        },
        45550: function(e, o, n) {
            n.d(o, {
                b: function() {
                    return r
                }
            });
            var t = n(25533),
                i = n(22674);
            let r = function(e) {
                let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return (0, t.a)(i.WU.media[e], o)
            }
        },
        76459: function(e, o, n) {
            n.d(o, {
                C: function() {
                    return r
                }
            });
            var t = n(13695),
                i = n(28127);
            class r {
                constructor(e, o, n, r) {
                    this.message = e, this.locales = o, this.overrideFormats = n, this.opts = r, this.format = e => {
                        try {
                            return new t.ZP(this.message, this.locales, this.overrideFormats, this.opts).format(e)
                        } catch (e) {
                            return (0, i.D)("IntlMessageFormatSafe", e), this.message
                        }
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=6949.4d9af12bc111924e.js.map