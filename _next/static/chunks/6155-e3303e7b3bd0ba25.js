! function() {
    try {
        var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "dc6020ba-42a1-48a3-8a61-3a3669945156", n._sentryDebugIdIdentifier = "sentry-dbid-dc6020ba-42a1-48a3-8a61-3a3669945156")
    } catch (n) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6155], {
        96155: function(n, e, r) {
            r.d(e, {
                k: function() {
                    return N
                }
            });
            var t = r(67294),
                u = r(34324),
                i = r(48315),
                a = r(2207),
                c = r(65142),
                o = r(48366),
                l = r(73245),
                s = r(26251),
                f = r(93909),
                m = function(n) {
                    var e = (0, f.W)();
                    return (0, o.T9)(n, e)
                },
                d = r(8257),
                y = ["placeholder", "onChange", "onKeyPress"];

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function v(n) {
                if ((0, c.Cy)(n)) {
                    var e = (0, c.Xe)(n.currentTarget);
                    return n.currentTarget instanceof e.HTMLInputElement
                }
                return !1
            }
            var p = function(n) {
                    var e = n.locale,
                        r = n.currency,
                        t = n.showSign,
                        u = n.minimumFractionDigits,
                        i = void 0 === u ? 0 : u,
                        a = n.maximumFractionDigits;
                    return Intl.NumberFormat(e, r ? {
                        style: "currency",
                        currency: (0, o.ze)(r),
                        minimumFractionDigits: i,
                        maximumFractionDigits: a,
                        signDisplay: t ? "always" : void 0
                    } : {
                        minimumFractionDigits: i,
                        maximumFractionDigits: a,
                        signDisplay: t ? "always" : void 0
                    })
                },
                h = function(n) {
                    var e = n.formatter,
                        r = n.value,
                        t = n.showCurrency,
                        u = n.currencySymbol,
                        i = e.formatToParts(r);
                    return t ? u && (i = (0, o.RK)(i, u)) : i = (0, o.W)(i), (0, o.Y5)(i)
                },
                b = function(n, e, r) {
                    var t = Math.pow(10, r),
                        i = n === u.T.MONEY ? Math.round(e * t) : e;
                    return 2 === r && i % t ? r : void 0
                },
                w = function(n, e, r) {
                    var t, u;
                    return n.includes(e) ? Math.min(null != (t = null == (u = n.slice(O(n, e).lastIndexOf(e) + 1).match(/\d/g)) ? void 0 : u.length) ? t : 0, r) : null
                },
                O = function(n, e) {
                    var r = n.indexOf(e);
                    return r >= 0 ? n.slice(0, r + 1) + n.slice(r + 1).replace(RegExp("\\" + e, "g"), "") : n
                },
                D = function(n, e) {
                    return e ? n.replace(e, "") : n
                },
                C = function(n, e, r) {
                    var t = n.split(e),
                        u = t[0],
                        i = t[1],
                        a = RegExp("^(\\d{" + r + "})\\d*(\\s*\\D*)$", "g"),
                        c = null != i ? i.replace(a, "$1$2") : "";
                    return "" === c ? n : "" + u + e + c
                },
                E = ["type", "value", "defaultValue", "onChange", "currency", "showSign", "showCurrency", "negative", "render"];

            function T() {
                return (T = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function x(n) {
                var e, r, c, f, T, x, N, F, S, M, k, P, R, I, j, A, _, L, Y, K, $, V, W, X, z, H, Z, B, G, q, J, Q, U, nn, ne, nr = n.type,
                    nt = n.value,
                    nu = n.defaultValue,
                    ni = n.onChange,
                    na = n.currency,
                    nc = n.showSign,
                    no = n.showCurrency,
                    nl = n.negative,
                    ns = n.render,
                    nf = function(n, e) {
                        if (null == n) return {};
                        var r, t, u = {},
                            i = Object.keys(n);
                        for (t = 0; t < i.length; t++) r = i[t], e.indexOf(r) >= 0 || (u[r] = n[r]);
                        return u
                    }(n, E);
                return ns((r = (e = {
                    type: nr,
                    value: nt,
                    defaultValue: nu,
                    onChange: ni,
                    currency: na,
                    showSign: nc,
                    showCurrency: no,
                    negative: nl
                }).type, c = e.value, f = e.defaultValue, T = e.onChange, x = e.currency, F = void 0 !== (N = e.showSign) && N, M = void 0 === (S = e.showCurrency) || S, P = void 0 !== (k = e.negative) && k, R = (0, d.b)(), I = (0, t.useMemo)(function() {
                    var n = p({
                        locale: R
                    });
                    return {
                        group: n.format(11111).replace(/1/g, ""),
                        decimal: n.format(1.1).replace(/1/g, "")
                    }
                }, [R]), j = (0, t.useCallback)(function(n) {
                    var e = n.trim();
                    if (I.group && (e = e.replace(RegExp("\\" + I.group, "g"), "")), I.decimal && (e = e.replace(RegExp("\\" + I.decimal, "g"), ".")), "" === (e = (e = O(e, ".")).replace(RegExp("[^\\d.," + (P ? "" : "-") + "]", "g"), ""))) return null;
                    if ("-" === e) return -0;
                    var r = Number(e);
                    return Number.isNaN(r) ? null : r
                }, [I.group, I.decimal, P]), _ = null == (A = m(x)) ? void 0 : A.symbol, L = (0, t.useMemo)(function() {
                    return p({
                        locale: R,
                        currency: x,
                        showSign: F,
                        maximumFractionDigits: null == A ? void 0 : A.fractionalPart
                    })
                }, [R, x, F, A]), Y = (0, t.useMemo)(function() {
                    var n;
                    return null != (n = null == A ? void 0 : A.fractionalPart) ? n : (0, o.kE)(R, x)
                }, [R, x, A]), K = (0, t.useMemo)(function() {
                    return RegExp("[" + (P ? "" : "-") + "\\d" + I.decimal + "]", "g")
                }, [I.decimal, P]), $ = (0, t.useCallback)(function(n, e) {
                    if (void 0 === e && (e = null), null == n) return "";
                    if (Object.is(n, -0)) return "-";
                    var r = P && n >= 0 ? -n : n;
                    if (null === e) return h({
                        formatter: L,
                        value: r,
                        showCurrency: M,
                        currencySymbol: _
                    });
                    if (0 === e) {
                        var t = L.formatToParts(r);
                        (0, o.VA)(x) && (t = (0, o.RK)(t, x)), _ && (t = (0, o.RK)(t, _));
                        var u = [].concat(t).reverse().find(function(n) {
                            return "integer" === n.type
                        });
                        return u && t.splice(t.indexOf(u) + 1, 0, {
                            type: "decimal",
                            value: I.decimal
                        }), M || (t = (0, o.W)(t)), (0, o.Y5)(t)
                    }
                    return h({
                        formatter: p({
                            locale: R,
                            currency: x,
                            minimumFractionDigits: e,
                            maximumFractionDigits: null == A ? void 0 : A.fractionalPart,
                            showSign: F
                        }),
                        value: r,
                        showCurrency: M,
                        currencySymbol: _
                    })
                }, [L, I.decimal, x, R, F, M, P, A, _]), W = (V = (0, s.u)({
                    defaultValue: void 0 === f ? null : f,
                    value: c,
                    onChange: T
                }))[0], X = V[1], H = (z = (0, t.useState)(W))[0], Z = z[1], (0, t.useEffect)(function() {
                    H !== W && Z(W)
                }, [W, H]), G = (B = (0, t.useState)(null !== W ? w($(W, b(r, W, Y)), ".", Y) : null))[0], q = B[1], J = (0, t.useCallback)(function(n) {
                    X(r === u.T.MONEY_FRACTIONAL && n ? Number(n.toFixed(Y).replace(".", "")) : n), Z(n)
                }, [X, r, Y]), Q = $(r === u.T.MONEY_FRACTIONAL && W ? W / Math.pow(10, Y) : W, null === G ? null : Math.min(G, A.fractionalPart)), U = (0, i.u)({
                    accept: K,
                    value: Q,
                    format: function(n) {
                        var e = C(D(n, _), I.decimal, Y);
                        return $(j(e), w(e, I.decimal, Y))
                    },
                    onChange: function(n) {
                        var e = D(n, _);
                        q(w(e, I.decimal, Y)), J(j(e))
                    }
                }), nn = (0, t.useCallback)(function(n) {
                    if (n.key === a.m.PERIOD && I.decimal !== a.m.PERIOD) {
                        var e = n.currentTarget.selectionStart;
                        e && (n.currentTarget.value = n.currentTarget.value.substr(0, e) + I.decimal + n.currentTarget.value.substr(e, n.currentTarget.value.length), n.currentTarget.selectionStart = e + 1, n.currentTarget.selectionEnd = n.currentTarget.selectionStart)
                    }
                }, [I.decimal]), ne = (0, t.useCallback)(function() {
                    for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                    var t = e.find(v);
                    t && U.onChange(t)
                }, [U]), function(n) {
                    var e = n.placeholder,
                        r = n.onChange,
                        t = n.onKeyPress,
                        u = function(n, e) {
                            if (null == n) return {};
                            var r, t, u = {},
                                i = Object.keys(n);
                            for (t = 0; t < i.length; t++) r = i[t], e.indexOf(r) >= 0 || (u[r] = n[r]);
                            return u
                        }(n, y);
                    return g({
                        use: "input",
                        placeholder: null != e ? e : $(0),
                        inputMode: "decimal"
                    }, u, U, {
                        onChange: (0, l.$e)(r, ne),
                        onKeyPress: (0, l.$e)(t, nn)
                    })
                })(nf))
            }

            function N(n) {
                switch (n.type) {
                    case u.T.MONEY:
                    case u.T.MONEY_FRACTIONAL:
                        return t.createElement(x, T({
                            key: n.currency + "-" + n.type
                        }, n));
                    default:
                        return n.render(n)
                }
            }
        },
        34324: function(n, e, r) {
            r.d(e, {
                T: function() {
                    return t
                }
            });
            var t = {
                MONEY: "money",
                MONEY_FRACTIONAL: "money-fractional"
            }
        },
        93909: function(n, e, r) {
            r.d(e, {
                W: function() {
                    return i
                }
            });
            var t = r(67294),
                u = r(13686),
                i = function() {
                    return (0, t.useContext)(u.$)
                }
        },
        8257: function(n, e, r) {
            r.d(e, {
                b: function() {
                    return i
                }
            });
            var t = r(67294),
                u = r(10254),
                i = function() {
                    return (0, t.useContext)(u.f).locale
                }
        },
        48366: function(n, e, r) {
            r.d(e, {
                RK: function() {
                    return l
                },
                W: function() {
                    return o
                },
                T9: function() {
                    return g
                },
                Dh: function() {
                    return v
                },
                kE: function() {
                    return y
                },
                ze: function() {
                    return d
                },
                VA: function() {
                    return m
                },
                Y5: function() {
                    return c
                },
                A2: function() {
                    return p
                }
            });
            var t = r(18337),
                u = r(34324),
                i = r(63537);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t])
                    }
                    return n
                }).apply(this, arguments)
            }
            var c = function(n) {
                    return n.map(function(n) {
                        return n.value
                    }).join("")
                },
                o = function(n) {
                    var e;
                    return n.filter(function(n, r) {
                        return "currency" === n.type ? (e = r, !1) : !!("literal" !== n.type || Number.isNaN(e)) || r !== e + 1
                    })
                },
                l = function(n, e) {
                    return n.map(function(n) {
                        return "currency" === n.type ? a({}, n, {
                            value: e
                        }) : n
                    })
                },
                s = function(n) {
                    var e, r, t, u, i;
                    return (null == (e = n[0]) ? void 0 : e.type) === "currency" ? (null == (u = n[1]) ? void 0 : u.type) === "literal" ? [].concat(n.slice(2), [n[1], n[0]]) : [].concat(n.slice(1), [n[0]]) : null != (r = n[0]) && r.type.includes("Sign") && (null == (t = n[1]) ? void 0 : t.type) === "currency" ? (null == (i = n[2]) ? void 0 : i.type) === "literal" ? [n[0]].concat(n.slice(3), [n[2], n[1]]) : [n[0]].concat(n.slice(2), [n[1]]) : n
                },
                f = 1 / 3;

            function m(n) {
                if (!(0, i.HD)(n)) return !1;
                try {
                    return Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: n
                    }), !1
                } catch (n) {
                    return !0
                }
            }
            var d = function(n) {
                    return m(n) ? "XXX" : n
                },
                y = function(n, e) {
                    var r, t;
                    return null != (r = null == (t = f.toLocaleString(n, e ? {
                        currency: d(e),
                        style: "currency"
                    } : {}).match(/3/g)) ? void 0 : t.length) ? r : 0
                };

            function g(n, e) {
                if (n) {
                    var r = e.get(n);
                    if (r) return r
                }
                return {
                    code: n,
                    fractionalPart: y(t.ZW, n)
                }
            }

            function v(n, e) {
                return (0, i.Kn)(n) && null != n.amount && null != n.currency ? n : {
                    amount: n,
                    currency: e
                }
            }

            function p(n, e) {
                var r, t, i, a, c, o, f, y, g, v, p, h, b, w, O = function(n) {
                        switch (n.type) {
                            case u.T.MONEY:
                                return n.amount;
                            case u.T.MONEY_FRACTIONAL:
                                return n.amount / Math.pow(10, n.fractionalPart);
                            default:
                                throw Error("Invalid input type: " + n.type)
                        }
                    }({
                        type: e.type,
                        amount: n.amount,
                        fractionalPart: e.definition.fractionalPart
                    }),
                    D = new Intl.NumberFormat(e.locale, (a = (i = {
                        currency: d(n.currency),
                        minimumFractionDigits: e.minimumFractionDigits,
                        maximumFractionDigits: null != (b = e.maximumFractionDigits) ? b : e.definition.fractionalPart,
                        showSign: e.showSign,
                        compactNotation: e.compactNotation,
                        symbolType: e.symbolType
                    }).currency, c = i.showSign, o = i.compactNotation, f = i.minimumFractionDigits, y = i.maximumFractionDigits, g = i.symbolType, v = void 0 !== c && c ? "exceptZero" : void 0, p = void 0 !== o && o ? "compact" : void 0, h = "narrow" === g ? "narrowSymbol" : void 0, a ? {
                        style: "currency",
                        currency: a,
                        minimumFractionDigits: null != y && null == f ? y : f,
                        maximumFractionDigits: y,
                        signDisplay: v,
                        notation: p,
                        currencyDisplay: h
                    } : {
                        minimumFractionDigits: Math.min(null != f ? f : 2, null != y ? y : 2),
                        maximumFractionDigits: null != y ? y : 2,
                        signDisplay: v,
                        notation: p,
                        currencyDisplay: h
                    })).formatToParts(O);
                return (m(n.currency) && (D = l(D, n.currency)), (null != (w = e.crypto) ? w : e.definition.crypto) && (D = s(D)), e.definition.symbol) ? l(D, e.definition.symbol) : e.minimumFractionDigits ? D : (t = (r = D).find(function(n) {
                    return "fraction" === n.type
                })) && t.value === "0".repeat(t.value.length) ? r.filter(function(n) {
                    return "decimal" !== n.type && "fraction" !== n.type
                }) : r
            }
        },
        48315: function(n, e, r) {
            r.d(e, {
                u: function() {
                    return u
                }
            });
            var t = r(67294);
            let u = n => {
                let [, e] = (0, t.useReducer)(n => n + 1, 0), r = (0, t.useRef)(null), {
                    replace: u,
                    append: i
                } = n, a = u ? u(n.format(n.value)) : n.format(n.value), c = (0, t.useRef)(!1);
                return (0, t.useLayoutEffect)(() => {
                    if (null == r.current) return;
                    let [t, c, o, l, s] = r.current;
                    r.current = null;
                    let f = l && s,
                        m = t.slice(c.selectionStart).search(n.accept || /\d/g),
                        d = -1 !== m ? m : 0,
                        y = e => (e.match(n.accept || /\d/g) || []).join(""),
                        g = y(t.substr(0, c.selectionStart)),
                        v = n => {
                            let e = 0,
                                r = 0;
                            for (let t = 0; t !== g.length; ++t) {
                                let u = n.indexOf(g[t], e) + 1,
                                    i = y(n).indexOf(g[t], r) + 1;
                                i - r > 1 && (u = e, i = r), r = Math.max(i, r), e = Math.max(e, u)
                            }
                            return e
                        };
                    if (!0 === n.mask && o && !s) {
                        let n = v(t),
                            e = y(t.substr(n))[0];
                        n = t.indexOf(e, n), t = `${t.substr(0,n)}${t.substr(n+1)}`
                    }
                    let p = n.format(t);
                    null == i || c.selectionStart !== t.length || s || (o ? p = i(p) : "" === y(p.slice(-1)) && (p = p.slice(0, -1)));
                    let h = u ? u(p) : p;
                    return a === h ? e() : n.onChange(h), () => {
                        let e = v(p);
                        if (null != n.mask && (o || l && !f))
                            for (; p[e] && "" === y(p[e]);) e += 1;
                        c.selectionStart = c.selectionEnd = e + (f ? 1 + d : 0)
                    }
                }), (0, t.useEffect)(() => {
                    let n = n => {
                            "Delete" === n.code && (c.current = !0)
                        },
                        e = n => {
                            "Delete" === n.code && (c.current = !1)
                        };
                    return document.addEventListener("keydown", n), document.addEventListener("keyup", e), () => {
                        document.removeEventListener("keydown", n), document.removeEventListener("keyup", e)
                    }
                }, []), {
                    value: null != r.current ? r.current[0] : a,
                    onChange: t => {
                        let u = t.target.value;
                        r.current = [u, t.target, u.length > a.length, c.current, a === n.format(u)], e()
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=6155-e3303e7b3bd0ba25.js.map