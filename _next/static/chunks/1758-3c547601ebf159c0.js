! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "648c4752-9313-4b39-90ff-c831280211d9", e._sentryDebugIdIdentifier = "sentry-dbid-648c4752-9313-4b39-90ff-c831280211d9")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1758], {
        81758: function(e, t, r) {
            let n;
            r.d(t, {
                ZP: function() {
                    return ee
                }
            });
            var i = r(67294),
                a = r(61688);
            let u = () => {},
                o = u(),
                l = Object,
                s = e => e === o,
                d = e => "function" == typeof e,
                c = (e, t) => ({ ...e,
                    ...t
                }),
                f = e => d(e.then),
                g = new WeakMap,
                E = 0,
                w = e => {
                    let t, r;
                    let n = typeof e,
                        i = e && e.constructor,
                        a = i == Date;
                    if (l(e) !== e || a || i == RegExp) t = a ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = g.get(e)) return t;
                        if (t = ++E + "~", g.set(e, t), i == Array) {
                            for (r = 0, t = "@"; r < e.length; r++) t += w(e[r]) + ",";
                            g.set(e, t)
                        }
                        if (i == l) {
                            t = "#";
                            let n = l.keys(e).sort();
                            for (; !s(r = n.pop());) s(e[r]) || (t += r + ":" + w(e[r]) + ",");
                            g.set(e, t)
                        }
                    }
                    return t
                },
                h = new WeakMap,
                y = {},
                _ = {},
                p = "undefined",
                v = typeof window != p,
                b = typeof document != p,
                R = () => v && typeof window.requestAnimationFrame != p,
                T = (e, t) => {
                    let r = h.get(e);
                    return [() => !s(t) && e.get(t) || y, n => {
                        if (!s(t)) {
                            let i = e.get(t);
                            t in _ || (_[t] = i), r[5](t, c(i, n), i || y)
                        }
                    }, r[6], () => !s(t) && t in _ ? _[t] : !s(t) && e.get(t) || y]
                },
                m = !0,
                [O, V] = v && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [u, u],
                L = {
                    initFocus: e => (b && document.addEventListener("visibilitychange", e), O("focus", e), () => {
                        b && document.removeEventListener("visibilitychange", e), V("focus", e)
                    }),
                    initReconnect: e => {
                        let t = () => {
                                m = !0, e()
                            },
                            r = () => {
                                m = !1
                            };
                        return O("online", t), O("offline", r), () => {
                            V("online", t), V("offline", r)
                        }
                    }
                },
                S = !i.useId,
                k = !v || "Deno" in window,
                C = e => R() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                D = k ? i.useEffect : i.useLayoutEffect,
                N = "undefined" != typeof navigator && navigator.connection,
                I = !k && N && (["slow-2g", "2g"].includes(N.effectiveType) || N.saveData),
                A = e => {
                    if (d(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? w(e) : "", t]
                },
                F = 0,
                P = () => ++F;
            var M = {
                ERROR_REVALIDATE_EVENT: 3,
                FOCUS_EVENT: 0,
                MUTATE_EVENT: 2,
                RECONNECT_EVENT: 1
            };
            async function x(...e) {
                let [t, r, n, i] = e, a = c({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof i ? {
                    revalidate: i
                } : i || {}), u = a.populateCache, l = a.rollbackOnError, g = a.optimisticData, E = e => "function" == typeof l ? l(e) : !1 !== l, w = a.throwOnError;
                if (d(r)) {
                    let e = [];
                    for (let n of t.keys()) !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
                    return Promise.all(e.map(y))
                }
                return y(r);
                async function y(r) {
                    let i;
                    let [l] = A(r);
                    if (!l) return;
                    let [c, y] = T(t, l), [_, p, v, b] = h.get(t), R = () => {
                        let e = _[l];
                        return (d(a.revalidate) ? a.revalidate(c().data, r) : !1 !== a.revalidate) && (delete v[l], delete b[l], e && e[0]) ? e[0](2).then(() => c().data) : c().data
                    };
                    if (e.length < 3) return R();
                    let m = n,
                        O = P();
                    p[l] = [O, 0];
                    let V = !s(g),
                        L = c(),
                        S = L.data,
                        k = L._c,
                        C = s(k) ? S : k;
                    if (V && y({
                            data: g = d(g) ? g(C, S) : g,
                            _c: C
                        }), d(m)) try {
                        m = m(C)
                    } catch (e) {
                        i = e
                    }
                    if (m && f(m)) {
                        if (m = await m.catch(e => {
                                i = e
                            }), O !== p[l][0]) {
                            if (i) throw i;
                            return m
                        }
                        i && V && E(i) && (u = !0, y({
                            data: C,
                            _c: o
                        }))
                    }
                    if (u && !i && (d(u) ? y({
                            data: u(m, C),
                            error: o,
                            _c: o
                        }) : y({
                            data: m,
                            error: o,
                            _c: o
                        })), p[l][1] = P(), Promise.resolve(R()).then(() => {
                            y({
                                _c: o
                            })
                        }), i) {
                        if (w) throw i;
                        return
                    }
                    return m
                }
            }
            let U = (e, t) => {
                    for (let r in e) e[r][0] && e[r][0](t)
                },
                W = (e, t) => {
                    if (!h.has(e)) {
                        let r = c(L, t),
                            n = {},
                            i = x.bind(o, e),
                            a = u,
                            l = {},
                            s = (e, t) => {
                                let r = l[e] || [];
                                return l[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            d = (t, r, n) => {
                                e.set(t, r);
                                let i = l[t];
                                if (i)
                                    for (let e of i) e(r, n)
                            },
                            f = () => {
                                if (!h.has(e) && (h.set(e, [n, {}, {}, {}, i, d, s]), !k)) {
                                    let t = r.initFocus(setTimeout.bind(o, U.bind(o, n, 0))),
                                        i = r.initReconnect(setTimeout.bind(o, U.bind(o, n, 1)));
                                    a = () => {
                                        t && t(), i && i(), h.delete(e)
                                    }
                                }
                            };
                        return f(), [e, i, f, a]
                    }
                    return [e, h.get(e)[4]]
                },
                [$, j] = W(new Map),
                q = c({
                    onLoadingSlow: u,
                    onSuccess: u,
                    onError: u,
                    onErrorRetry: (e, t, r, n, i) => {
                        let a = r.errorRetryCount,
                            u = i.retryCount,
                            o = ~~((Math.random() + .5) * (1 << (u < 8 ? u : 8))) * r.errorRetryInterval;
                        (s(a) || !(u > a)) && setTimeout(n, o, i)
                    },
                    onDiscarded: u,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: I ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: I ? 5e3 : 3e3,
                    compare: (e, t) => w(e) == w(t),
                    isPaused: () => !1,
                    cache: $,
                    mutate: j,
                    fallback: {}
                }, {
                    isOnline: () => m,
                    isVisible: () => {
                        let e = b && document.visibilityState;
                        return s(e) || "hidden" !== e
                    }
                }),
                J = (e, t) => {
                    let r = c(e, t);
                    if (t) {
                        let {
                            use: n,
                            fallback: i
                        } = e, {
                            use: a,
                            fallback: u
                        } = t;
                        n && a && (r.use = n.concat(a)), i && u && (r.fallback = c(i, u))
                    }
                    return r
                },
                Z = (0, i.createContext)({}),
                z = v && window.__SWR_DEVTOOLS_USE__,
                B = z ? window.__SWR_DEVTOOLS_USE__ : [],
                G = e => d(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                H = () => c(q, (0, i.useContext)(Z)),
                K = B.concat(e => (t, r, n) => {
                    let i = r && ((...e) => {
                        let [n] = A(t), [, , , i] = h.get($);
                        if (n.startsWith("$inf$")) return r(...e);
                        let a = i[n];
                        return s(a) ? r(...e) : (delete i[n], a)
                    });
                    return e(t, i, n)
                }),
                Q = (e, t, r) => {
                    let n = t[e] || (t[e] = []);
                    return n.push(r), () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1], n.pop())
                    }
                };
            z && (window.__SWR_DEVTOOLS_REACT__ = i);
            let X = i.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    if ("rejected" === e.status) throw e.reason;
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
                }),
                Y = {
                    dedupe: !0
                };
            l.defineProperty(e => {
                let {
                    value: t
                } = e, r = (0, i.useContext)(Z), n = d(t), a = (0, i.useMemo)(() => n ? t(r) : t, [n, r, t]), u = (0, i.useMemo)(() => n ? a : J(r, a), [n, r, a]), l = a && a.provider, s = (0, i.useRef)(o);
                l && !s.current && (s.current = W(l(u.cache || $), a));
                let f = s.current;
                return f && (u.cache = f[0], u.mutate = f[1]), D(() => {
                    if (f) return f[2] && f[2](), f[3]
                }, []), (0, i.createElement)(Z.Provider, c(e, {
                    value: u
                }))
            }, "defaultValue", {
                value: q
            });
            let ee = (n = (e, t, r) => {
                let {
                    cache: n,
                    compare: u,
                    suspense: l,
                    fallbackData: f,
                    revalidateOnMount: g,
                    revalidateIfStale: E,
                    refreshInterval: w,
                    refreshWhenHidden: y,
                    refreshWhenOffline: _,
                    keepPreviousData: p
                } = r, [v, b, R, m] = h.get(n), [O, V] = A(e), L = (0, i.useRef)(!1), N = (0, i.useRef)(!1), I = (0, i.useRef)(O), F = (0, i.useRef)(t), U = (0, i.useRef)(r), W = () => U.current, $ = () => W().isVisible() && W().isOnline(), [j, q, J, Z] = T(n, O), z = (0, i.useRef)({}).current, B = s(f) ? r.fallback[O] : f, G = (e, t) => {
                    for (let r in z)
                        if ("data" === r) {
                            if (!u(e[r], t[r]) && (!s(e[r]) || !u(eu, t[r]))) return !1
                        } else if (t[r] !== e[r]) return !1;
                    return !0
                }, H = (0, i.useMemo)(() => {
                    let e = !!O && !!t && (s(g) ? !W().isPaused() && !l && (!!s(E) || E) : g),
                        r = t => {
                            let r = c(t);
                            return (delete r._k, e) ? {
                                isValidating: !0,
                                isLoading: !0,
                                ...r
                            } : r
                        },
                        n = j(),
                        i = Z(),
                        a = r(n),
                        u = n === i ? a : r(i),
                        o = a;
                    return [() => {
                        let e = r(j());
                        return G(e, o) ? (o.data = e.data, o.isLoading = e.isLoading, o.isValidating = e.isValidating, o.error = e.error, o) : (o = e, e)
                    }, () => u]
                }, [n, O]), K = (0, a.useSyncExternalStore)((0, i.useCallback)(e => J(O, (t, r) => {
                    G(r, t) || e()
                }), [n, O]), H[0], H[1]), ee = !L.current, et = v[O] && v[O].length > 0, er = K.data, en = s(er) ? B : er, ei = K.error, ea = (0, i.useRef)(en), eu = p ? s(er) ? ea.current : er : en, eo = (!et || !!s(ei)) && (ee && !s(g) ? g : !W().isPaused() && (l ? !s(en) && E : s(en) || E)), el = !!(O && t && ee && eo), es = s(K.isValidating) ? el : K.isValidating, ed = s(K.isLoading) ? el : K.isLoading, ec = (0, i.useCallback)(async e => {
                    let t, n;
                    let i = F.current;
                    if (!O || !i || N.current || W().isPaused()) return !1;
                    let a = !0,
                        l = e || {},
                        c = !R[O] || !l.dedupe,
                        f = () => S ? !N.current && O === I.current && L.current : O === I.current,
                        g = {
                            isValidating: !1,
                            isLoading: !1
                        },
                        E = () => {
                            q(g)
                        },
                        w = () => {
                            let e = R[O];
                            e && e[1] === n && delete R[O]
                        },
                        h = {
                            isValidating: !0
                        };
                    s(j().data) && (h.isLoading = !0);
                    try {
                        if (c && (q(h), r.loadingTimeout && s(j().data) && setTimeout(() => {
                                a && f() && W().onLoadingSlow(O, r)
                            }, r.loadingTimeout), R[O] = [i(V), P()]), [t, n] = R[O], t = await t, c && setTimeout(w, r.dedupingInterval), !R[O] || R[O][1] !== n) return c && f() && W().onDiscarded(O), !1;
                        g.error = o;
                        let e = b[O];
                        if (!s(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return E(), c && f() && W().onDiscarded(O), !1;
                        let l = j().data;
                        g.data = u(l, t) ? l : t, c && f() && W().onSuccess(t, O, r)
                    } catch (r) {
                        w();
                        let e = W(),
                            {
                                shouldRetryOnError: t
                            } = e;
                        !e.isPaused() && (g.error = r, c && f() && (e.onError(r, O, e), (!0 === t || d(t) && t(r)) && (!W().revalidateOnFocus || !W().revalidateOnReconnect || $()) && e.onErrorRetry(r, O, e, e => {
                            let t = v[O];
                            t && t[0] && t[0](M.ERROR_REVALIDATE_EVENT, e)
                        }, {
                            retryCount: (l.retryCount || 0) + 1,
                            dedupe: !0
                        })))
                    }
                    return a = !1, E(), !0
                }, [O, n]), ef = (0, i.useCallback)((...e) => x(n, I.current, ...e), []);
                if (D(() => {
                        F.current = t, U.current = r, s(er) || (ea.current = er)
                    }), D(() => {
                        if (!O) return;
                        let e = ec.bind(o, Y),
                            t = 0,
                            r = Q(O, v, (r, n = {}) => {
                                if (r == M.FOCUS_EVENT) {
                                    let r = Date.now();
                                    W().revalidateOnFocus && r > t && $() && (t = r + W().focusThrottleInterval, e())
                                } else if (r == M.RECONNECT_EVENT) W().revalidateOnReconnect && $() && e();
                                else if (r == M.MUTATE_EVENT) return ec();
                                else if (r == M.ERROR_REVALIDATE_EVENT) return ec(n)
                            });
                        return N.current = !1, I.current = O, L.current = !0, q({
                            _k: V
                        }), eo && (s(en) || k ? e() : C(e)), () => {
                            N.current = !0, r()
                        }
                    }, [O]), D(() => {
                        let e;

                        function t() {
                            let t = d(w) ? w(j().data) : w;
                            t && -1 !== e && (e = setTimeout(r, t))
                        }

                        function r() {
                            !j().error && (y || W().isVisible()) && (_ || W().isOnline()) ? ec(Y).then(t) : t()
                        }
                        return t(), () => {
                            e && (clearTimeout(e), e = -1)
                        }
                    }, [w, y, _, O]), (0, i.useDebugValue)(eu), l && s(en) && O) {
                    if (!S && k) throw Error("Fallback data is required when using suspense in SSR.");
                    F.current = t, U.current = r, N.current = !1;
                    let e = m[O];
                    if (s(e) || X(ef(e)), s(ei)) {
                        let e = ec(Y);
                        s(eu) || (e.status = "fulfilled", e.value = !0), X(e)
                    } else throw ei
                }
                return {
                    mutate: ef,
                    get data() {
                        return z.data = !0, eu
                    },
                    get error() {
                        return z.error = !0, ei
                    },
                    get isValidating() {
                        return z.isValidating = !0, es
                    },
                    get isLoading() {
                        return z.isLoading = !0, ed
                    }
                }
            }, function(...e) {
                let t = H(),
                    [r, i, a] = G(e),
                    u = J(t, a),
                    o = n,
                    {
                        use: l
                    } = u,
                    s = (l || []).concat(K);
                for (let e = s.length; e--;) o = s[e](o);
                return o(r, i || u.fetcher || null, u)
            })
        }
    }
]);
//# sourceMappingURL=1758-3c547601ebf159c0.js.map