! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3acf30fa-361d-4e11-8e8a-eb07278443ca", e._sentryDebugIdIdentifier = "sentry-dbid-3acf30fa-361d-4e11-8e8a-eb07278443ca")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3994], {
        3506: function(e, n, t) {
            t.d(n, {
                X: function() {
                    return E
                }
            });
            var r = t(67294),
                i = t(73245),
                a = t(99105);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = t(58200),
                l = t(49363),
                u = t(79500),
                s = t(22674),
                d = t(939),
                f = (0, l.ZP)(d.xv).attrs(function(e) {
                    var n = e.display,
                        t = e.color,
                        r = void 0 === t ? s.WU.color.greyTone50 : t,
                        i = e.variant;
                    return {
                        display: void 0 === n ? "block" : n,
                        color: r,
                        variant: void 0 === i ? u.pn.CAPTION : i
                    }
                }).withConfig({
                    displayName: "CheckboxDescription",
                    componentId: "rui__sc-b4kajo-0"
                })([""]),
                v = t(7019),
                p = (0, l.ZP)(d.xv).attrs(function(e) {
                    var n = e.variant,
                        t = void 0 === n ? u.pn.SECONDARY : n,
                        r = e.display;
                    return {
                        display: void 0 === r ? "block" : r,
                        variant: t
                    }
                }).withConfig({
                    displayName: "CheckboxLabel",
                    componentId: "rui__sc-1cilvwb-0"
                })([""]),
                b = t(27061),
                y = t(37903),
                h = t(28193),
                g = ["isDisabled", "label", "input", "color", "indicator"];

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var m = (0, l.ZP)(function(e) {
                    var n = e.isDisabled,
                        t = e.label,
                        i = e.input,
                        a = e.color,
                        o = e.indicator,
                        c = function(e, n) {
                            if (null == e) return {};
                            var t, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i
                        }(e, g);
                    return null != t ? r.createElement(y.U, C({
                        use: "label",
                        align: "center"
                    }, c), r.createElement(h.Ig, {
                        color: a
                    }, o, i), r.createElement(b.x, {
                        ml: o ? s.WU.space.s16 : void 0,
                        color: n ? s.WU.color.greyTone50 : void 0,
                        minWidth: 0
                    }, t)) : r.createElement(h.Ig, C({
                        color: a
                    }, c), o, i)
                }).withConfig({
                    displayName: "CheckboxWrapper",
                    componentId: "rui__sc-167fmps-0"
                })(["position:relative;transition:", ";cursor:pointer;"], s.WU.transition.text),
                O = ["type", "checked", "defaultChecked", "disabled", "indeterminate", "wrapper", "children", "onChange", "color", "render", "readOnly", "align", "aria-invalid", "invalid"];

            function k() {
                return (k = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var E = Object.assign((0, r.forwardRef)(function(e, n) {
                var t, l, u, s, d, f, p, b, y, h, g, C, E, w, I, j, x, D, _, R, P = e.type,
                    Z = e.checked,
                    A = e.defaultChecked,
                    T = e.disabled,
                    W = e.indeterminate,
                    N = e.wrapper,
                    F = e.children,
                    U = e.onChange,
                    B = void 0 === U ? i.ZT : U,
                    S = e.color,
                    L = e.render,
                    $ = (e.readOnly, e.align),
                    K = e["aria-invalid"],
                    z = void 0 !== K && K,
                    M = e.invalid,
                    X = void 0 === M ? z && "false" !== z : M,
                    H = function(e, n) {
                        if (null == e) return {};
                        var t, r, i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                        return i
                    }(e, O),
                    V = (l = (t = {
                        isIndeterminate: void 0 !== W && W,
                        isActive: Z,
                        defaultIsActive: A,
                        onChange: B,
                        isDisabled: void 0 !== T && T
                    }).defaultIsActive, s = void 0 !== (u = t.isIndeterminate) && u, d = t.isActive, p = void 0 !== (f = t.isDisabled) && f, y = void 0 === (b = t.onChange) ? i.ZT : b, h = (0, r.useRef)(null), C = (g = (0, r.useState)(!1))[0], E = g[1], I = (w = (0, a.O)({
                        defaultState: void 0 !== l && l,
                        state: d,
                        disabled: p
                    }))[0], j = w[1], (0, r.useEffect)(function() {
                        null !== h.current && (h.current.indeterminate = s)
                    }, [s, h]), x = (0, r.useCallback)(function(e) {
                        try {
                            E(e.target.matches(":focus-visible"))
                        } catch (e) {
                            E(!0)
                        }
                    }, []), D = (0, r.useCallback)(function() {
                        E(!1)
                    }, []), _ = (0, r.useCallback)(function(e) {
                        p || (j(e.target.checked), y(e))
                    }, [p, y, j]), R = (0, r.useCallback)(function(e) {
                        return o({}, e, {
                            ref: (0, i.ZM)(h, e.ref),
                            checked: I,
                            disabled: p,
                            onChange: (0, i.$e)(_, e.onChange),
                            onFocus: (0, i.$e)(x, e.onFocus),
                            onBlur: (0, i.$e)(D, e.onBlur)
                        })
                    }, [D, _, x, I, p]), [{
                        isActive: I,
                        isIndeterminate: s,
                        isDisabled: p,
                        isFocused: C
                    }, R]),
                    q = V[0],
                    G = V[1];
                return r.createElement(m, k({
                    label: F,
                    input: r.createElement(v.I, k({}, G({
                        ref: n,
                        type: void 0 === P ? "checkbox" : P
                    }), H, {
                        invalid: X
                    })),
                    indicator: (void 0 === L ? function(e) {
                        return r.createElement(c.FZ, {
                            checked: e.isActive,
                            indeterminate: e.isIndeterminate,
                            inherit: !0
                        })
                    } : L)(q),
                    color: (void 0 === S ? function(e) {
                        return (0, c.pf)({
                            checked: e.isActive,
                            indeterminate: e.isIndeterminate,
                            disabled: e.isDisabled,
                            focused: e.isFocused,
                            invalid: e.hasError
                        })
                    } : S)(k({}, q, {
                        hasError: X
                    })),
                    align: void 0 === $ ? "center" : $
                }, q, N))
            }), {
                Label: p,
                Description: f
            })
        },
        35758: function(e, n, t) {
            t.d(n, {
                C: function() {
                    return v
                }
            });
            var r = t(67294),
                i = t(49363),
                a = t(45151),
                o = t(22674),
                c = t(65142),
                l = t(3179),
                u = t(15059),
                s = ["value", "onCopy", "labelButtonCopy", "children", "onClick", "onError"];

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var f = (0, i.ZP)(l.X).withConfig({
                displayName: "Copyable__StyledButtonBase",
                componentId: "rui__sc-lx09u2-0"
            })(["display:flex;align-items:center;justify-content:space-between;color:", ";width:100%;"], o.WU.color.accent);

            function v(e) {
                var n = e.value,
                    t = e.onCopy,
                    i = e.labelButtonCopy,
                    l = e.children,
                    v = e.onClick,
                    p = e.onError,
                    b = function(e, n) {
                        if (null == e) return {};
                        var t, r, i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                        return i
                    }(e, s),
                    y = (0, a.U)();
                return r.createElement(f, d({
                    onClick: function(e) {
                        null == v || v(e), null == n || e.defaultPrevented || (0, c.vQ)(n, e.currentTarget.ownerDocument).then(function() {
                            return null == t ? void 0 : t(n)
                        }).catch(p)
                    },
                    "aria-label": null != i ? i : y("action.copy")
                }, b), l, r.createElement(u.J, {
                    name: "Copy",
                    size: 16,
                    ml: o.WU.space.s8
                }))
            }
        },
        18972: function(e, n, t) {
            t.d(n, {
                E: function() {
                    return W
                }
            });
            var r = t(67294),
                i = t(79500),
                a = t(26251),
                o = t(73245),
                c = t(32820),
                l = function(e, n, t, r) {
                    var i = [].concat(e.split(""));
                    return i[n] = t, (0, o.DZ)(function(e) {
                        return i[e] || " "
                    }, r).join("")
                },
                u = RegExp("^[0-9]$"),
                s = {
                    ARROW_LEFT: "arrowleft",
                    ARROW_RIGHT: "arrowright"
                },
                d = function(e) {
                    return u.test(e)
                },
                f = function(e) {
                    var n = e.size,
                        t = e.value,
                        i = e.onChange,
                        a = e.onKeyDown,
                        u = e.autoFocus,
                        f = (0, r.useRef)((0, o.DZ)(function() {
                            return r.createRef()
                        }, n)),
                        v = (0, c.k)(),
                        p = (0, r.useCallback)(function(e) {
                            return (null == v ? void 0 : v.activeElement) && v.activeElement === (null == e ? void 0 : e.current)
                        }, [v]),
                        b = function(e) {
                            var n;
                            null == (n = f.current[e]) || null == (n = n.current) || n.focus(), setTimeout(function() {
                                var n;
                                return null == (n = f.current[e]) || null == (n = n.current) || null == n.select ? void 0 : n.select()
                            }, 0)
                        },
                        y = (0, r.useCallback)(function(e) {
                            return e < n - 1 && b(e + 1)
                        }, [n]),
                        h = (0, r.useCallback)(function(e) {
                            return e > 0 && b(e - 1)
                        }, []),
                        g = (0, r.useCallback)(function(e) {
                            return function(r) {
                                r || d(t[e]) ? i(l(t, e, r, n)) : 0 !== e && i(l(t, e - 1, r, n)), r ? y(e) : d(t[e]) || h(e)
                            }
                        }, [i, n, t, h, y]),
                        C = (0, r.useCallback)(function(e) {
                            return function(n) {
                                switch (n.key.toLowerCase()) {
                                    case s.ARROW_LEFT:
                                        h(e);
                                        break;
                                    case s.ARROW_RIGHT:
                                        y(e)
                                }
                                null == a || a(n)
                            }
                        }, [a, h, y]);
                    return (0, r.useEffect)(function() {
                        0 === t.trim().length && f.current.slice(1).some(p) && b(0)
                    }, [p, t]), f.current.map(function(e, n) {
                        return {
                            autoFocus: u && 0 === n,
                            ref: e,
                            key: "codeInput_" + n,
                            inputMode: "numeric",
                            isFilled: d(t[n]),
                            value: d(t[n]) ? t[n] : void 0,
                            onChange: g(n),
                            onKeyDown: C(n)
                        }
                    })
                },
                v = t(22674),
                p = t(53650),
                b = t(9880),
                y = t(49363),
                h = t(2207),
                g = t(26625),
                C = t(90305),
                m = t(92032),
                O = t(6945),
                k = ["isFilled", "onChange", "onKeyDown", "type", "symbol", "value"];

            function E() {
                return (E = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var w = {
                    NUMBER: "number",
                    PIN: "pin"
                },
                I = RegExp("^[0-9]$"),
                j = v.WU.size.s40,
                x = (0, y.ZP)(m.I).withConfig({
                    displayName: "CodeInput__CodeInputBase",
                    componentId: "rui__sc-1fvxdl-0"
                })(["position:relative;input{", " text-align:center;height:", ";caret-color:transparent;}", "{padding:0;input{height:", ";caret-color:", ";}}"], (0, g.B)(i.pn.H4), (0, C.hO)(44), O.W, (0, C.hO)(48), v.WU.color.accent),
                D = (0, r.forwardRef)(function(e, n) {
                    var t = e.isFilled,
                        i = void 0 !== t && t,
                        a = e.onChange,
                        c = void 0 === a ? o.ZT : a,
                        l = e.onKeyDown,
                        u = void 0 === l ? o.ZT : l,
                        s = e.type,
                        d = void 0 === s ? w.PIN : s,
                        f = e.symbol,
                        v = e.value,
                        p = function(e, n) {
                            if (null == e) return {};
                            var t, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i
                        }(e, k),
                        b = (0, r.useRef)(!0),
                        y = d === w.PIN,
                        g = (0, r.useCallback)(function(e) {
                            var n = e.target.value,
                                t = (y || v) && i && !y ? n.replace(null != v ? v : "", "") : n;
                            I.test(t) && c(t)
                        }, [i, y, c, v]),
                        C = (0, r.useCallback)(function(e) {
                            (e.key === h.m.BACKSPACE || e.key === h.m.DELETE) && c(""), u(e)
                        }, [c, u]);
                    (0, r.useEffect)(function() {
                        b.current = !i
                    }, [i]);
                    var m = "";
                    return y ? i && (m = void 0 === f ? "•" : f) : v && (m = v), r.createElement(x, E({
                        ref: n,
                        value: m,
                        tabIndex: 0,
                        type: "text",
                        width: j,
                        onKeyDown: C,
                        onChange: g
                    }, p))
                }),
                _ = t(939),
                R = ["key"];

            function P() {
                return (P = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Z = /^\d+$/,
                A = function(e, n) {
                    return Z.test(e) && e.length === n
                },
                T = function(e) {
                    return e.replace(/[-–—]/gi, "")
                },
                W = (0, r.forwardRef)(function(e, n) {
                    var t = e.mask,
                        c = e.otp,
                        l = e.defaultValue,
                        u = e.value,
                        s = e.size,
                        d = void 0 === s ? 4 : s,
                        y = e["aria-invalid"],
                        h = e.invalid,
                        g = void 0 === h ? y && "false" !== y : h,
                        C = e["aria-label"],
                        m = e.readOnly,
                        O = e.required,
                        k = e.disabled,
                        E = e.autoFocus,
                        I = e.onChange,
                        j = void 0 === I ? o.ZT : I,
                        x = e.onComplete,
                        Z = void 0 === x ? o.ZT : x,
                        W = (0, a.u)({
                            defaultValue: l,
                            value: u,
                            onChange: function(e) {
                                j(e), A(e, d) && Z(e)
                            }
                        }, ""),
                        N = W[0],
                        F = W[1],
                        U = f({
                            autoFocus: E,
                            size: d,
                            value: N,
                            onChange: F
                        }),
                        B = (0, r.useCallback)(function(e) {
                            if (!e.defaultPrevented) {
                                e.preventDefault();
                                var n = T(e.clipboardData.getData("text"));
                                A(n, d) && F(n)
                            }
                        }, [F, d]),
                        S = (0, r.useCallback)(function(e) {
                            var n = T(e.target.value);
                            A(n, d) && F(n)
                        }, [F, d]);
                    return r.createElement(p.$, {
                        ref: n,
                        variant: b.V.CODE
                    }, U.map(function(e, n) {
                        var a = e.key,
                            o = function(e, n) {
                                if (null == e) return {};
                                var t, r, i = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                                return i
                            }(e, R);
                        return r.createElement(r.Fragment, {
                            key: a
                        }, r.createElement(D, P({
                            type: t ? w.PIN : w.NUMBER,
                            readOnly: m,
                            invalid: g,
                            "aria-label": C ? C.replace("{index}", String(n + 1)) : void 0,
                            disabled: k,
                            onPaste: B,
                            onChangeCapture: S,
                            autoComplete: c ? "one-time-code" : "off",
                            required: O
                        }, o)), 6 === d && 2 === n && r.createElement(_.xv, {
                            variant: i.pn.SECONDARY,
                            color: v.WU.color.greyTone50
                        }, "-"))
                    }))
                })
        },
        83755: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return f
                }
            });
            var r = t(49363),
                i = t(16678),
                a = t(25348),
                o = t(27634),
                c = t(22674),
                l = t(3179),
                u = t(40743);

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = s({
                    DEFAULT: "default"
                }, u.Il),
                f = (0, r.ZP)(l.X).attrs(function(e) {
                    var n = e.variant,
                        t = void 0 === n ? d.DEFAULT : n,
                        r = e.display,
                        i = e.width,
                        a = e.maxWidth;
                    return {
                        variant: t,
                        display: void 0 === r ? "inline-block" : r,
                        width: void 0 === i ? "max-content" : i,
                        maxWidth: void 0 === a ? "100%" : a
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
                        scale: a.C.COLORS
                    }
                }), o.C, i.I8, i.JB, i.Ue, i.rX, i.Nv, i.yd, i.$_, i.Dh, i.bf, i.Cb, i.kk)
        },
        45630: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return c
                }
            });
            var r = t(61688),
                i = function(e) {
                    return e
                },
                a = function() {
                    return !1
                },
                o = function() {
                    return !0
                },
                c = function() {
                    return (0, r.useSyncExternalStore)(i, a, o)
                }
        },
        56248: function(e, n, t) {
            t.d(n, {
                y: function() {
                    return a
                }
            });
            var r = t(10233),
                i = t(6500);

            function a() {
                return (0, r.Z)(i.Z, arguments)
            }
        },
        31072: function(e, n, t) {
            t.d(n, {
                S: function() {
                    return c
                }
            });
            var r = t(10233),
                i = t(55178),
                a = t(19770);

            function o() {
                var e = (0, i.Z)(arguments),
                    n = e.text,
                    t = e.options,
                    r = e.metadata;
                return (0, a.Z)(n, t, r)
            }

            function c() {
                return (0, r.Z)(o, arguments)
            }
        }
    }
]);
//# sourceMappingURL=3994.8ab8448f89d11b32.js.map