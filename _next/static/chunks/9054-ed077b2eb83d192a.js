! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d60e015a-c7f6-433f-abf4-7ad1634b2aad", e._sentryDebugIdIdentifier = "sentry-dbid-d60e015a-c7f6-433f-abf4-7ad1634b2aad")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9054], {
        53650: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return o
                }
            });
            var r = n(67294),
                a = n(27061),
                i = n(9880),
                l = ["children", "variant"];

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = r.forwardRef(function(e, t) {
                var n = e.children,
                    o = e.variant,
                    u = void 0 === o ? i.V.ACTIONS : o,
                    s = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, l);
                return r.Children.toArray(n).length > 0 ? r.createElement(a.x, c({
                    __variants: i.r,
                    variant: u
                }, s, {
                    ref: t
                }), n) : null
            })
        },
        9880: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return f
                },
                r: function() {
                    return m
                }
            });
            var r, a = n(22674);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = {
                    display: "grid",
                    alignItems: "center",
                    gridAutoFlow: "column",
                    gridAutoColumns: "max-content"
                },
                c = i({}, l, {
                    gridColumnGap: a.WU.space.s8
                }),
                o = i({}, l, {
                    gridColumnGap: a.WU.space.s16
                }),
                u = i({}, l, {
                    paddingY: a.WU.space.s8,
                    gridColumnGap: a.WU.space.s8
                }),
                s = i({}, l, {
                    gridColumnGap: a.WU.space.s24
                }),
                d = i({}, l, {
                    gridColumnGap: a.WU.space.s4
                }),
                f = {
                    ACTIONS: "actions",
                    CODE: "code",
                    ATTACHMENTS: "attachments",
                    ICONS: "icons",
                    SUGGESTIONS: "suggestions",
                    TAGS: "tags"
                },
                m = ((r = {})[f.ACTIONS] = c, r[f.CODE] = c, r[f.ATTACHMENTS] = o, r[f.SUGGESTIONS] = u, r[f.ICONS] = s, r[f.TAGS] = d, r)
        },
        19054: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return tn
                }
            });
            var r, a, i = n(67294),
                l = n(25394),
                c = n(36017),
                o = n(25533),
                u = n(22674),
                s = n(90305),
                d = n(65142),
                f = n(73245),
                m = n(27061),
                E = n(38628),
                p = n(31346),
                T = n(49363),
                v = n(16678),
                O = n(79500),
                I = n(45151),
                g = n(53650),
                h = n(9880),
                A = n(86e3),
                C = n(26370),
                S = n(939),
                N = ["aria-label", "title"],
                b = ["aria-label", "title"],
                y = ["children"],
                M = ["children"];

            function R(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function U() {
                return (U = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var w = (0, s.hO)(44),
                _ = {
                    NAV_BUTTON: "nav-button",
                    TITLE: "title",
                    ACTIONS: "actions"
                },
                x = (0, T.ZP)(m.x).attrs(function(e) {
                    var t = e.height,
                        n = void 0 === t ? w : t,
                        r = e.textStyle;
                    return {
                        height: n,
                        textStyle: void 0 === r ? O.pn.PRIMARY : r
                    }
                }).withConfig({
                    displayName: "NavBar__NavBarWrapper",
                    componentId: "rui__sc-1qirrji-0"
                })(v.cq, v.zI, v.K$, v.RG, {
                    display: "grid",
                    alignItems: "center"
                }),
                B = (0, T.ZP)(m.x).attrs(function(e) {
                    var t = e.display;
                    return {
                        display: void 0 === t ? "flex" : t
                    }
                }).withConfig({
                    displayName: "NavBar__NavBarItem",
                    componentId: "rui__sc-1qirrji-1"
                })(v.fD, v.zo),
                L = i.forwardRef(function(e, t) {
                    return i.createElement(B, {
                        gridArea: _.NAV_BUTTON,
                        justifySelf: "start",
                        pr: u.WU.space.s8
                    }, i.createElement(C.h, U({
                        ref: t
                    }, e)))
                }),
                j = i.forwardRef(function(e, t) {
                    var n = e["aria-label"],
                        r = e.title,
                        a = R(e, N),
                        l = (0, I.U)();
                    return i.createElement(L, U({
                        "aria-label": null != n ? n : null != r ? void 0 : l("action.close"),
                        title: r
                    }, a, {
                        useIcon: "Cross",
                        ref: t
                    }))
                }),
                P = i.forwardRef(function(e, t) {
                    var n = e["aria-label"],
                        r = e.title,
                        a = R(e, b),
                        l = (0, I.U)();
                    return i.createElement(L, U({
                        "aria-label": null != n ? n : null != r ? void 0 : l("action.back"),
                        title: r,
                        useIcon: "BackButtonArrow"
                    }, a, {
                        ref: t
                    }))
                }),
                D = function(e) {
                    return i.createElement(x, U({
                        gridTemplateAreas: '"' + _.NAV_BUTTON + " " + _.TITLE + " " + _.ACTIONS + '"',
                        gridTemplateColumns: "1fr minmax(0, auto) 1fr"
                    }, e))
                };
            D.CloseButton = j, D.BackButton = P, D.Title = function(e) {
                var t = e.children,
                    n = R(e, y);
                return i.createElement(B, {
                    maxWidth: "100%",
                    gridArea: _.TITLE,
                    justifySelf: "center"
                }, i.createElement(S.xv, U({
                    use: "div",
                    variant: O.pn.PRIMARY
                }, n), i.createElement(A.m, null, t)))
            }, D.Actions = function(e) {
                var t = e.children,
                    n = R(e, M);
                return i.createElement(B, U({
                    gridArea: _.ACTIONS,
                    justifySelf: "end",
                    pl: u.WU.space.s8
                }, n), i.createElement(g.$, {
                    variant: h.V.ICONS
                }, null != t ? t : i.createElement(m.x, {
                    use: "span",
                    role: "presentation",
                    size: 24
                })))
            };
            var W = n(91499),
                Y = n(79580),
                k = "avatar",
                H = "action-bar",
                G = (0, T.ZP)(B).withConfig({
                    displayName: "HeaderBaseBar__HeaderBaseBarBase",
                    componentId: "rui__sc-xqc5s2-0"
                })(["padding-top:", ";&:empty{padding-top:unset;}"], u.WU.space.s16),
                V = "header-title",
                F = "header-description",
                Z = ["color"];

            function z() {
                return (z = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var K = "description",
                q = function(e) {
                    switch (e) {
                        case Y.d.BOTTOM_SHEET:
                            return u.WU.space.s16;
                        case Y.d.MODAL:
                            return u.WU.space.none;
                        default:
                            return u.WU.space.s4
                    }
                },
                J = function(e) {
                    switch (e) {
                        case Y.d.MAIN:
                        case Y.d.ITEM:
                            return u.WU.space.s8;
                        default:
                            return
                    }
                },
                X = (0, T.ZP)(S.xv).withConfig({
                    displayName: "HeaderBaseDescription__NavBarItemText",
                    componentId: "rui__sc-w719id-0"
                })(["[data-rui-part='", "'] + [data-rui-part='", "'] &&{margin-top:", ";}"], V, F, function(e) {
                    return e.specialMarginTop
                });

            function $() {
                return ($ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Q = "subtitle",
                ee = function(e) {
                    switch (e) {
                        case Y.d.ITEM:
                        case Y.d.MAIN:
                            return u.WU.space.s8;
                        default:
                            return u.WU.space.none
                    }
                },
                et = function(e) {
                    switch (e) {
                        case Y.d.ITEM:
                        case Y.d.MAIN:
                        case Y.d.COMPACT:
                        case Y.d.SECONDARY:
                            return O.pn.PRIMARY;
                        default:
                            return O.pn.CAPTION
                    }
                },
                en = function(e) {
                    switch (e) {
                        case Y.d.ITEM:
                        case Y.d.MAIN:
                        case Y.d.COMPACT:
                        case Y.d.SECONDARY:
                            return u.WU.color.foreground;
                        default:
                            return u.WU.color.greyTone50
                    }
                },
                er = n(51482),
                ea = ["children", "variant"],
                ei = ["hide"];

            function el() {
                return (el = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function ec(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function eo(e) {
                var t = e.children,
                    n = e.variant,
                    r = ec(e, ea),
                    a = (0, W.s)(),
                    l = (0, o.a)(u.WU.media.md),
                    c = n === Y.d.SECONDARY && l;
                switch (n) {
                    case Y.d.BOTTOM_SHEET:
                        return i.createElement(S.xv, el({
                            use: "div",
                            variant: O.pn.H5
                        }, r), i.createElement(er.x, {
                            max: 2
                        }, t));
                    case Y.d.MODAL:
                        return i.createElement(S.xv, el({
                            use: "div",
                            variant: O.pn.PRIMARY,
                            textAlign: "center"
                        }, r), i.createElement(er.x, {
                            max: 2
                        }, t));
                    case Y.d.MAIN:
                    case Y.d.ITEM:
                    case Y.d.SECONDARY:
                        return i.createElement(S.xv, el({
                            use: "div",
                            variant: a || c ? O.pn.HEADING2 : O.pn.H1,
                            textOverflow: "ellipsis"
                        }, r), i.createElement(er.x, {
                            max: c ? 1 : 3
                        }, t));
                    case Y.d.COMPACT:
                        return i.createElement(S.xv, el({
                            use: "div",
                            variant: O.pn.H5,
                            textOverflow: "ellipsis"
                        }, r), t)
                }
            }
            var eu = (0, i.forwardRef)(function(e, t) {
                var n = e.hide,
                    r = ec(e, ei),
                    a = (0, E.i)();
                return i.createElement(B, {
                    ref: t,
                    gridArea: _.TITLE,
                    justifySelf: a === Y.d.MODAL ? "center" : "start",
                    maxWidth: "100%",
                    minWidth: 0,
                    hide: n,
                    "data-rui-part": V
                }, i.createElement(eo, el({
                    variant: a
                }, r)))
            });

            function es() {
                return (es = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ed = '\n  "' + _.TITLE + " " + _.ACTIONS + '"\n  "' + Q + " " + Q + '"\n  "' + K + " " + K + '"\n',
                ef = '\n  "' + _.NAV_BUTTON + " " + _.ACTIONS + '"\n  "' + _.TITLE + " " + k + '"\n  "' + Q + " " + k + '"\n  "' + K + " " + k + '"\n  "' + H + " " + H + '"\n',
                em = '\n  "' + _.NAV_BUTTON + " " + _.TITLE + " " + _.ACTIONS + '"\n  "' + Q + " " + Q + " " + k + '"\n  "' + K + " " + K + " " + k + '"\n  "' + H + " " + H + " " + H + '"\n',
                eE = '\n  "' + _.TITLE + " " + _.ACTIONS + '"\n  "' + Q + " " + k + '"\n  "' + K + " " + k + '"\n',
                ep = '\n  "' + _.NAV_BUTTON + " " + _.TITLE + " " + _.ACTIONS + '"\n  "' + Q + " " + Q + " " + k + '"\n  "' + K + " " + K + " " + k + '"\n',
                eT = function(e) {
                    var t = e.children,
                        n = (0, E.i)(),
                        r = (0, W.s)(),
                        a = (0, o.a)(u.WU.media.md);
                    switch (n) {
                        case Y.d.BOTTOM_SHEET:
                            return i.createElement(x, {
                                gridTemplateAreas: ed,
                                gridTemplateColumns: "minmax(0, auto) 1fr",
                                gridTemplateRows: "repeat(2, auto)",
                                height: "unset"
                            }, t);
                        case Y.d.ITEM:
                            return i.createElement(x, {
                                gridTemplateAreas: ef,
                                gridTemplateRows: "repeat(5, auto)",
                                gridTemplateColumns: "1fr minmax(0, auto)",
                                height: "unset"
                            }, t);
                        case Y.d.MAIN:
                            return i.createElement(x, {
                                gridTemplateAreas: eE,
                                gridTemplateRows: r && a ? w + " auto" : "minmax(" + w + ", auto) auto",
                                height: "unset"
                            }, t);
                        case Y.d.COMPACT:
                            return i.createElement(x, {
                                gridTemplateAreas: ep,
                                gridTemplateColumns: "minmax(0, auto) 1fr auto",
                                gridTemplateRows: "minmax(2rem, auto) auto",
                                height: "unset"
                            }, t);
                        case Y.d.MODAL:
                            return i.createElement(D, null, t);
                        case Y.d.SECONDARY:
                            return a ? i.createElement(x, {
                                gridTemplateAreas: em,
                                gridTemplateColumns: "minmax(0, auto) 1fr auto",
                                gridTemplateRows: w + " auto",
                                height: "unset"
                            }, t) : i.createElement(x, {
                                gridTemplateAreas: ef,
                                gridTemplateRows: "repeat(5, auto)",
                                gridTemplateColumns: "1fr minmax(0, auto)",
                                height: "unset"
                            }, t)
                    }
                },
                ev = function(e) {
                    var t = e.children,
                        n = (0, E.i)();
                    return n === Y.d.BOTTOM_SHEET || n === Y.d.MAIN ? null : n === Y.d.ITEM ? i.createElement(p.k, {
                        height: w,
                        alignItems: "center"
                    }, t) : i.createElement(i.Fragment, null, t)
                },
                eO = (0, i.forwardRef)(function(e, t) {
                    return i.createElement(ev, null, i.createElement(D.CloseButton, es({
                        ref: t
                    }, e)))
                }),
                eI = (0, i.forwardRef)(function(e, t) {
                    return i.createElement(ev, null, i.createElement(D.BackButton, es({
                        ref: t
                    }, e)))
                }),
                eg = function(e) {
                    switch (e) {
                        case Y.d.MODAL:
                            return u.WU.space.s6;
                        case Y.d.BOTTOM_SHEET:
                        case Y.d.MAIN:
                        case Y.d.COMPACT:
                        case Y.d.SECONDARY:
                            return u.WU.space.s16;
                        default:
                            return u.WU.space.s24
                    }
                },
                eh = function(e, t) {
                    switch (e) {
                        case Y.d.MODAL:
                            return u.WU.space.s6;
                        case Y.d.BOTTOM_SHEET:
                        case Y.d.MAIN:
                        case Y.d.COMPACT:
                            return u.WU.space.s16;
                        case Y.d.SECONDARY:
                            return t ? u.WU.space.s16 : u.WU.space.none;
                        default:
                            return u.WU.space.none
                    }
                },
                eA = Object.assign((0, i.forwardRef)(function(e, t) {
                    var n = e.children,
                        r = e.variant,
                        a = (0, o.a)(u.WU.media.md);
                    return i.createElement(E.f.Provider, {
                        value: r
                    }, i.createElement(m.x, {
                        ref: t,
                        pb: eg(r),
                        pt: eh(r, a)
                    }, i.createElement(eT, null, n)))
                }), {
                    CloseButton: eO,
                    BackButton: eI,
                    Actions: function(e) {
                        return (0, E.i)() === Y.d.ITEM ? i.createElement(p.k, {
                            height: w,
                            justifyContent: "flex-end"
                        }, i.createElement(D.Actions, e)) : i.createElement(D.Actions, e)
                    },
                    Title: eu,
                    Subtitle: function(e) {
                        var t = (0, E.i)();
                        return t === Y.d.MODAL ? null : i.createElement(B, {
                            gridArea: Q,
                            "data-rui-part": "header-subtitle"
                        }, i.createElement(S.xv, $({
                            mt: ee(t),
                            variant: et(t),
                            color: en(t)
                        }, e)))
                    },
                    Description: function(e) {
                        var t = e.color,
                            n = void 0 === t ? u.WU.color.greyTone50 : t,
                            r = function(e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(e, Z),
                            a = (0, E.i)();
                        return i.createElement(B, {
                            gridArea: K,
                            color: n,
                            minWidth: 0,
                            "data-rui-part": F
                        }, i.createElement(X, z({
                            mt: q(a),
                            variant: O.pn.CAPTION,
                            specialMarginTop: J(a),
                            maxWidth: "100%"
                        }, r)))
                    },
                    Avatar: function(e) {
                        var t = e.children,
                            n = e.hide,
                            r = (0, E.i)();
                        if (r !== Y.d.ITEM && r !== Y.d.SECONDARY && r !== Y.d.MAIN && r !== Y.d.COMPACT) return null;
                        var a = r === Y.d.ITEM || r === Y.d.SECONDARY;
                        return i.createElement(B, {
                            gridArea: a ? k : _.TITLE,
                            ml: a ? u.WU.space.s4 : void 0,
                            maxWidth: "100%",
                            justifySelf: a ? "end" : "start",
                            alignSelf: a ? "start" : "center",
                            hide: n
                        }, t)
                    },
                    Bar: function(e) {
                        var t = e.children,
                            n = (0, E.i)();
                        return n !== Y.d.ITEM && n !== Y.d.SECONDARY ? null : i.createElement(G, {
                            gridArea: H,
                            maxWidth: "100%",
                            minWidth: 0
                        }, t)
                    }
                }),
                eC = {
                    HEADER_ACTIONS: "layout-header-actions"
                },
                eS = {
                    MAIN: "main",
                    SECONDARY: "secondary"
                },
                eN = (0, i.createContext)({
                    variant: "default",
                    setPageVariant: function() {}
                }),
                eb = n(96944),
                ey = n(56607),
                eM = ((r = {})[r.TITLE = 0] = "TITLE", r[r.INLINE_TITLE = 1] = "INLINE_TITLE", r[r.NAVIGATION_BUTTON = 2] = "NAVIGATION_BUTTON", r[r.ACTIONS = 3] = "ACTIONS", r[r.DESCRIPTION = 4] = "DESCRIPTION", r[r.STATIC = 5] = "STATIC", r[r.STICKY = 6] = "STICKY", r[r.SUBTITLE = 7] = "SUBTITLE", r),
                eR = {
                    AUTO: "auto",
                    MANUAL: "manual"
                },
                eU = {
                    AUTO: "auto",
                    INLINE: "inline",
                    LARGE: "large"
                };

            function ew() {
                var e = (0, i.createContext)(e_());
                return {
                    Provider: function(t) {
                        var n = (0, i.useState)(e_)[0];
                        return (0, i.createElement)(e.Provider, {
                            value: n
                        }, t.children)
                    },
                    Slot: function(t) {
                        var n = (0, i.useContext)(e),
                            r = (0, i.useState)(),
                            a = r[0],
                            l = r[1];
                        ex(function() {
                            return l(n.get(t.name)), n.on(t.name, l)
                        }, [n, t.name]);
                        var c = void 0 !== a;
                        return ex(function() {
                            t.onChange && t.onChange(c)
                        }, [c, t.onChange]), (0, i.createElement)(i.Fragment, null, c ? a : t.children)
                    },
                    Fill: function(t) {
                        var n = (0, i.useContext)(e);
                        return ex(function() {
                            return n.emit(t.name, t.children)
                        }, [n, t.name, t.children]), null
                    }
                }
            }

            function e_() {
                var e = {},
                    t = {};

                function n(n, r) {
                    var a = t[n];
                    a && a.forEach(function(e) {
                        return e(r)
                    }), e[n] = r
                }
                return {
                    emit: function(e, t) {
                        return n(e, t),
                            function() {
                                return n(e)
                            }
                    },
                    get: function(t) {
                        return e[t]
                    },
                    on: function(e, n) {
                        var r = t[e] = t[e] || [];
                        return r.push(n),
                            function() {
                                var e = r.indexOf(n);
                                e > -1 && r.splice(e, 1)
                            }
                    }
                }
            }

            function ex(e, t) {
                "undefined" != typeof window && (0, i.useLayoutEffect)(e, t)
            }(a = ew()).Provider, a.Slot, a.Fill;
            var eB = ew(),
                eL = ew(),
                ej = n(29341),
                eP = n(80571);

            function eD() {
                return (eD = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eW = (0, T.ZP)(function(e) {
                    var t = (0, ej.q)();
                    return i.createElement(eL.Fill, {
                        name: eM.DESCRIPTION
                    }, i.createElement(eA.Description, eD({
                        id: (0, eP.k)(t)
                    }, e)))
                }).withConfig({
                    displayName: "HeaderDescription",
                    componentId: "rui__sc-jtlzwp-0"
                })([""]),
                eY = (0, i.createContext)({
                    titleRef: null,
                    isCollapsed: !1
                }),
                ek = function() {
                    return (0, i.useContext)(eY)
                },
                eH = function(e) {
                    var t = e.titleRef,
                        n = e.isCollapsed,
                        r = e.children;
                    return i.createElement(eY.Provider, {
                        value: (0, i.useMemo)(function() {
                            return {
                                titleRef: t,
                                isCollapsed: n
                            }
                        }, [t, n])
                    }, r)
                },
                eG = ["behaviour"],
                eV = {
                    REPLACE: "replace"
                },
                eF = T.ZP.span.withConfig({
                    displayName: "HeaderInlineTitle__HeaderInlineTitlePlaceholder",
                    componentId: "rui__sc-wq2kvz-0"
                })({
                    '[data-collapsed="false"]& + *, [data-collapsed="true"]&': {
                        display: "none"
                    }
                }),
                eZ = T.ZP.span.withConfig({
                    displayName: "HeaderInlineTitle__HeaderInlineTitleReplace",
                    componentId: "rui__sc-wq2kvz-1"
                })({
                    "& + *": {
                        display: "none"
                    }
                }),
                ez = n(86900),
                eK = ["onClick"],
                eq = ["onClick"];

            function eJ() {
                return (eJ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function eX(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function e$(e) {
                var t = (0, ez.p)();
                return function(n) {
                    e ? e(n) : null == t || t(!1)
                }
            }
            var eQ = i.forwardRef(function(e, t) {
                    var n = e.onClick,
                        r = eX(e, eK),
                        a = e$(n);
                    return i.createElement(eL.Fill, {
                        name: eM.NAVIGATION_BUTTON
                    }, i.createElement(eA.CloseButton, eJ({
                        ref: t,
                        onClick: a
                    }, r)))
                }),
                e0 = i.forwardRef(function(e, t) {
                    var n = e.onClick,
                        r = eX(e, eq),
                        a = e$(n);
                    return i.createElement(eL.Fill, {
                        name: eM.NAVIGATION_BUTTON
                    }, i.createElement(eA.BackButton, eJ({
                        ref: t,
                        onClick: a
                    }, r)))
                });

            function e1() {
                return (e1 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function e6() {
                return (e6 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var e4 = (0, i.forwardRef)(function(e, t) {
                    return i.createElement(eL.Fill, {
                        name: eM.STICKY
                    }, i.createElement(m.x, e6({
                        ref: t,
                        pb: u.WU.space.s16
                    }, e)))
                }),
                e2 = n(31234),
                e3 = (0, T.ZP)(function(e) {
                    return i.createElement(eL.Fill, {
                        name: eM.SUBTITLE
                    }, i.createElement(eA.Subtitle, e))
                }).withConfig({
                    displayName: "HeaderSubtitle",
                    componentId: "rui__sc-1g5twdg-0"
                })([""]);

            function e5() {
                return (e5 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var e8 = n(43411),
                e9 = function(e, t, n) {
                    var r = (0, i.useState)(!1),
                        a = r[0],
                        l = r[1];
                    return (0, i.useEffect)(function() {
                        var r = t.current;
                        if (r && e) {
                            var a = (0, d.sK)((0, d.zr)(r, r.ownerDocument)),
                                i = function() {
                                    n.current && (0, d.IM)(n.current) ? l(n.current.getBoundingClientRect().bottom < r.getBoundingClientRect().bottom) : l(!1)
                                };
                            return i(), a.addEventListener("scroll", i, {
                                    passive: !0
                                }),
                                function() {
                                    a.removeEventListener("scroll", i), l(!1)
                                }
                        }
                    }, [e, t, n]), a
                },
                e7 = ["children", "scrollMode", "displayMode", "displayCollapsedDescription", "onHeightChange"];

            function te() {
                return (te = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var tt = function() {
                    return i.createElement(B, {
                        gridArea: _.NAV_BUTTON,
                        justifySelf: "start",
                        pr: u.WU.space.s8
                    }, i.createElement(m.x, {
                        use: "span",
                        role: "presentation",
                        size: 24
                    }))
                },
                tn = Object.assign((0, i.forwardRef)(function(e, t) {
                    var n, r, a = e.children,
                        m = e.scrollMode,
                        p = void 0 === m ? eR.AUTO : m,
                        T = e.displayMode,
                        v = void 0 === T ? eU.AUTO : T,
                        O = e.displayCollapsedDescription,
                        I = void 0 !== O && O,
                        g = e.onHeightChange,
                        h = function(e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(e, e7),
                        A = (0, i.useContext)(E.f),
                        C = (0, o.a)(u.WU.media.md),
                        S = null != (n = null != (r = h.variant) ? r : A) ? n : Y.d.ITEM,
                        N = function(e, t) {
                            var n = (0, s.z3)(l.G.HEADER_BACKGROUND_COLOR, "inherit");
                            switch (e) {
                                case eR.MANUAL:
                                    return te({
                                        "data-variant": t.variant,
                                        bg: n
                                    }, t);
                                case eR.AUTO:
                                default:
                                    return te({
                                        "data-variant": t.variant,
                                        top: 0,
                                        zIndex: 1,
                                        mx: u.WU.space.n16,
                                        px: u.WU.space.s16,
                                        bg: n
                                    }, t)
                            }
                        }(p, h),
                        b = (0, i.useRef)(null),
                        y = (0, i.useRef)(null),
                        M = (0, i.useRef)(null),
                        R = (0, i.useRef)(null),
                        U = e9(p === eR.AUTO, b, M),
                        w = (0, i.useState)(0),
                        _ = w[0],
                        x = w[1],
                        B = (0, i.useState)(0),
                        L = B[0],
                        j = B[1],
                        P = S === Y.d.SECONDARY && C,
                        D = (0, i.useContext)(eN).setPageVariant;
                    if ((0, i.useEffect)(function() {
                            if (S === Y.d.SECONDARY) return D(eS.SECONDARY),
                                function() {
                                    return D(eS.MAIN)
                                }
                        }, [S, D]), (0, i.useEffect)(function() {
                            var e = b.current,
                                t = y.current;
                            if (e && t) {
                                var n = (0, d.Xe)(e);
                                if (n.ResizeObserver) {
                                    var r = new n.ResizeObserver(function(t) {
                                        var r = 0;
                                        t.forEach(function(t) {
                                            if (t.target instanceof n.HTMLElement) {
                                                var a = t.target.getBoundingClientRect();
                                                r += a.height, t.target === e && x(a.height)
                                            }
                                        }), j(r)
                                    });
                                    return r.observe(e), r.observe(t),
                                        function() {
                                            r.disconnect(), j(0)
                                        }
                                }
                            }
                        }, [g, b, y, P]), (0, i.useEffect)(function() {
                            g && g(L)
                        }, [g, L]), S === Y.d.BOTTOM_SHEET || S === Y.d.MODAL || S === Y.d.MAIN || S === Y.d.COMPACT || P) return i.createElement(eL.Provider, null, i.createElement(e8.M, te({
                        ref: (0, f.ZM)(b, t)
                    }, N), i.createElement(eA, {
                        variant: S
                    }, i.createElement(eL.Slot, {
                        name: eM.NAVIGATION_BUTTON
                    }), i.createElement(eL.Slot, {
                        name: eM.ACTIONS
                    }), i.createElement(eL.Slot, {
                        name: eM.TITLE
                    }), i.createElement(eL.Slot, {
                        name: eM.SUBTITLE
                    }), i.createElement(eL.Slot, {
                        name: eM.DESCRIPTION
                    }), a)), i.createElement(eL.Slot, {
                        name: eM.STATIC
                    }), i.createElement(e2.J, {
                        ref: y,
                        style: {
                            top: _
                        },
                        "data-nocollapse": !0
                    }, i.createElement(eL.Slot, {
                        name: eM.STICKY
                    })));
                    switch (v) {
                        case eU.LARGE:
                            return i.createElement(eL.Provider, null, i.createElement(e8.M, te({
                                ref: (0, f.ZM)(b, t)
                            }, N), i.createElement(eA, {
                                variant: Y.d.MODAL
                            }, i.createElement(eL.Slot, {
                                name: eM.NAVIGATION_BUTTON
                            }), i.createElement(eL.Slot, {
                                name: eM.ACTIONS
                            }))), i.createElement(eA, {
                                variant: S
                            }, i.createElement(eL.Slot, {
                                name: eM.TITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.SUBTITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.DESCRIPTION
                            }), a), i.createElement(eL.Slot, {
                                name: eM.STATIC
                            }), i.createElement(e2.J, {
                                ref: y
                            }, i.createElement(eL.Slot, {
                                name: eM.STICKY
                            })));
                        case eU.INLINE:
                            return i.createElement(eL.Provider, null, i.createElement(e8.M, te({
                                ref: (0, f.ZM)(b, t),
                                style: {
                                    paddingTop: 0
                                },
                                mb: u.WU.space.s8
                            }, N), i.createElement(eA, {
                                variant: Y.d.MODAL
                            }, i.createElement(eL.Slot, {
                                name: eM.NAVIGATION_BUTTON
                            }, i.createElement(tt, null)), i.createElement(eL.Slot, {
                                name: eM.ACTIONS
                            }, i.createElement(eA.Actions, null)), I ? i.createElement(ey.g, {
                                align: "center"
                            }, i.createElement(eL.Slot, {
                                name: eM.TITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.SUBTITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.DESCRIPTION
                            })) : i.createElement(eL.Slot, {
                                name: eM.TITLE
                            }), a), i.createElement(eL.Slot, {
                                name: eM.STATIC
                            }), i.createElement(e2.J, {
                                ref: y
                            }, i.createElement(eL.Slot, {
                                name: eM.STICKY
                            }))));
                        case eU.AUTO:
                            return i.createElement(eL.Provider, null, i.createElement(eH, {
                                titleRef: M,
                                isCollapsed: U
                            }, i.createElement(e8.M, te({
                                ref: (0, f.ZM)(b, t),
                                style: {
                                    paddingTop: 0
                                }
                            }, N), i.createElement(eA, {
                                variant: Y.d.MODAL
                            }, i.createElement(eL.Slot, {
                                name: eM.NAVIGATION_BUTTON
                            }, i.createElement(tt, null)), i.createElement(eL.Slot, {
                                name: eM.ACTIONS
                            }, i.createElement(eA.Actions, null)), i.createElement(eL.Slot, {
                                name: eM.INLINE_TITLE
                            }), i.createElement(eb.n, {
                                nodeRef: R,
                                in: U,
                                duration: c.n.XS,
                                offsetY: -12
                            }, I ? i.createElement(ey.g, {
                                ref: R,
                                align: "center",
                                "aria-hidden": !0
                            }, i.createElement(eL.Slot, {
                                name: eM.TITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.SUBTITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.DESCRIPTION
                            })) : i.createElement("span", {
                                ref: R,
                                "aria-hidden": !0
                            }, i.createElement(eL.Slot, {
                                name: eM.TITLE
                            }))))), i.createElement(eA, {
                                variant: S
                            }, i.createElement(eL.Slot, {
                                name: eM.TITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.SUBTITLE
                            }), i.createElement(eL.Slot, {
                                name: eM.DESCRIPTION
                            }), a), i.createElement(eL.Slot, {
                                name: eM.STATIC
                            }), i.createElement(e2.J, {
                                ref: y
                            }, i.createElement(eL.Slot, {
                                name: eM.STICKY
                            }))));
                        default:
                            return null
                    }
                }), {
                    Title: function(e) {
                        var t = (0, ej.q)(),
                            n = ek().titleRef;
                        return i.createElement(eL.Fill, {
                            name: eM.TITLE
                        }, i.createElement(eA.Title, e5({
                            ref: function(e) {
                                e && n && (n.current && (0, d.IM)(n.current) || (n.current = e))
                            },
                            id: (0, eP.u)(t)
                        }, e)))
                    },
                    InlineTitle: function(e) {
                        var t = e.behaviour,
                            n = void 0 === t ? eV.REPLACE : t,
                            r = function(e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(e, eG),
                            a = ek().isCollapsed,
                            l = (0, i.useRef)(null),
                            o = "placeholder" === n;
                        return i.createElement(eL.Fill, {
                            name: eM.INLINE_TITLE
                        }, i.createElement(eb.n, {
                            nodeRef: l,
                            appear: !1,
                            in: o ? !a : a,
                            duration: c.n.XS,
                            offsetY: o ? 12 : -12
                        }, i.createElement(o ? eF : eZ, {
                            ref: l,
                            "data-collapsed": a
                        }, i.createElement(eA.Title, r))))
                    },
                    CloseButton: eQ,
                    BackButton: e0,
                    Actions: function(e) {
                        var t = (0, E.i)();
                        return (0, W.s)() && (t === Y.d.MAIN || t === Y.d.SECONDARY) ? i.createElement(eB.Fill, {
                            name: eC.HEADER_ACTIONS
                        }, e.children) : i.createElement(eL.Fill, {
                            name: eM.ACTIONS
                        }, i.createElement(eA.Actions, e))
                    },
                    Subtitle: e3,
                    Description: eW,
                    Avatar: eA.Avatar,
                    Bar: eA.Bar,
                    Sticky: e4,
                    Static: function(e) {
                        return i.createElement(eL.Fill, {
                            name: eM.STATIC
                        }, i.createElement(m.x, e1({
                            pb: u.WU.space.s16
                        }, e)))
                    }
                })
        },
        38628: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return a
                },
                i: function() {
                    return i
                }
            });
            var r = n(67294),
                a = (0, r.createContext)(null);

            function i() {
                var e = (0, r.useContext)(a);
                if (null === e) throw Error("You can access `HeaderBaseContext` only in components inside `HeaderBase` component");
                return e
            }
        },
        79580: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return r
                }
            });
            var r = {
                ITEM: "item",
                MAIN: "main",
                MODAL: "modal",
                COMPACT: "compact",
                BOTTOM_SHEET: "bottom-sheet",
                SECONDARY: "secondary"
            }
        },
        51482: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return T
                }
            });
            var r = n(67294),
                a = n(49363),
                i = n(554),
                l = n(1377),
                c = n(11859),
                o = n(53889),
                u = n(10903),
                s = ["children", "tooltip"],
                d = ["children", "tooltip"];

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function m(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }
            var E = a.ZP.span.withConfig({
                displayName: "LineClamp__LineClampBase",
                componentId: "rui__sc-1asyw6f-0"
            })((0, o.d)("max"));

            function p(e) {
                var t = e.children,
                    n = e.tooltip,
                    a = m(e, s),
                    o = (0, r.useRef)(null),
                    d = (0, l.l)(),
                    p = (0, r.useState)(!1),
                    T = p[0],
                    v = p[1],
                    O = (0, r.useState)(0),
                    I = O[0],
                    g = O[1];
                return (0, c.d)(o, n === i.l.AUTO, function(e, t) {
                    v(e.height < t.height), g(e.width)
                }), r.createElement(r.Fragment, null, r.createElement(E, d.getAnchorProps(f({
                    ref: o
                }, a)), t), r.createElement(u.u, d.getTargetProps({
                    open: n === i.l.ALWAYS || T,
                    placement: "bottom-start",
                    maxWidth: Math.max(I, 320)
                }), t))
            }

            function T(e) {
                var t = e.children,
                    n = e.tooltip,
                    a = void 0 === n ? i.l.NEVER : n,
                    l = m(e, d);
                return a === i.l.ALWAYS || a === i.l.AUTO ? r.createElement(p, f({
                    tooltip: a
                }, l), t) : r.createElement(E, l, t)
            }
        }
    }
]);
//# sourceMappingURL=9054-ed077b2eb83d192a.js.map