! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "072a11e8-c4d4-410d-a47a-6aef9389fbc4", e._sentryDebugIdIdentifier = "sentry-dbid-072a11e8-c4d4-410d-a47a-6aef9389fbc4")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1664], {
        46691: function(e, t) {
            "use strict";
            var n, r, o, u;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ACTION_FAST_REFRESH: function() {
                        return s
                    },
                    ACTION_NAVIGATE: function() {
                        return f
                    },
                    ACTION_PREFETCH: function() {
                        return c
                    },
                    ACTION_REFRESH: function() {
                        return l
                    },
                    ACTION_RESTORE: function() {
                        return a
                    },
                    ACTION_SERVER_ACTION: function() {
                        return d
                    },
                    ACTION_SERVER_PATCH: function() {
                        return i
                    },
                    PrefetchCacheEntryStatus: function() {
                        return r
                    },
                    PrefetchKind: function() {
                        return n
                    },
                    isThenable: function() {
                        return p
                    }
                });
            let l = "refresh",
                f = "navigate",
                a = "restore",
                i = "server-patch",
                c = "prefetch",
                s = "fast-refresh",
                d = "server-action";

            function p(e) {
                return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            }(o = n || (n = {})).AUTO = "auto", o.FULL = "full", o.TEMPORARY = "temporary", (u = r || (r = {})).fresh = "fresh", u.reusable = "reusable", u.expired = "expired", u.stale = "stale", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        64318: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(98364);

            function o(e, t, o, u) {
                {
                    let l = n(19720).normalizeLocalePath,
                        f = n(13656).detectDomainLocale,
                        a = t || l(e, o).detectedLocale,
                        i = f(u, void 0, a);
                    if (i) {
                        let t = "http" + (i.http ? "" : "s") + "://",
                            n = a === i.defaultLocale ? "" : "/" + a;
                        return "" + t + i.domain + (0, r.normalizePathTrailingSlash)("" + n + e)
                    }
                    return !1
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        89577: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let r = n(38754),
                o = n(85893),
                u = r._(n(67294)),
                l = n(71401),
                f = n(2045),
                a = n(27420),
                i = n(57201),
                c = n(11443),
                s = n(9953),
                d = n(15320),
                p = n(52905),
                b = n(64318),
                y = n(90953),
                h = n(46691),
                _ = new Set;

            function v(e, t, n, r, o, u) {
                if (u || (0, f.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (_.has(o)) return;
                        _.add(o)
                    }(async () => u ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function g(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let O = u.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: _,
                    children: O,
                    prefetch: P = null,
                    passHref: j,
                    replace: C,
                    shallow: E,
                    scroll: m,
                    locale: M,
                    onClick: T,
                    onMouseEnter: I,
                    onTouchStart: R,
                    legacyBehavior: L = !1,
                    ...k
                } = e;
                n = O, L && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let A = u.default.useContext(s.RouterContext),
                    x = u.default.useContext(d.AppRouterContext),
                    S = null != A ? A : x,
                    w = !A,
                    N = !1 !== P,
                    D = null === P ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: U,
                        as: K
                    } = u.default.useMemo(() => {
                        if (!A) {
                            let e = g(a);
                            return {
                                href: e,
                                as: _ ? g(_) : e
                            }
                        }
                        let [e, t] = (0, l.resolveHref)(A, a, !0);
                        return {
                            href: e,
                            as: _ ? (0, l.resolveHref)(A, _) : t || e
                        }
                    }, [A, a, _]),
                    F = u.default.useRef(U),
                    H = u.default.useRef(K);
                L && (r = u.default.Children.only(n));
                let z = L ? r && "object" == typeof r && r.ref : t,
                    [V, q, B] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    G = u.default.useCallback(e => {
                        (H.current !== K || F.current !== U) && (B(), H.current = K, F.current = U), V(e), z && ("function" == typeof z ? z(e) : "object" == typeof z && (z.current = e))
                    }, [K, z, U, B, V]);
                u.default.useEffect(() => {
                    S && q && N && v(S, U, K, {
                        locale: M
                    }, {
                        kind: D
                    }, w)
                }, [K, U, q, M, N, null == A ? void 0 : A.locale, S, w, D]);
                let Y = {
                    ref: G,
                    onClick(e) {
                        L || "function" != typeof T || T(e), L && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, l, a, i, c) {
                            let {
                                nodeName: s
                            } = e.currentTarget;
                            if ("A" === s.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let d = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: i,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? u.default.startTransition(d) : d()
                        }(e, S, U, K, C, E, m, M, w)
                    },
                    onMouseEnter(e) {
                        L || "function" != typeof I || I(e), L && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (N || !w) && v(S, U, K, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: D
                        }, w)
                    },
                    onTouchStart: function(e) {
                        L || "function" != typeof R || R(e), L && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (N || !w) && v(S, U, K, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: D
                        }, w)
                    }
                };
                if ((0, i.isAbsoluteUrl)(K)) Y.href = K;
                else if (!L || j || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== M ? M : null == A ? void 0 : A.locale,
                        t = (null == A ? void 0 : A.isLocaleDomain) && (0, b.getDomainLocale)(K, e, null == A ? void 0 : A.locales, null == A ? void 0 : A.domainLocales);
                    Y.href = t || (0, y.addBasePath)((0, c.addLocale)(K, e, null == A ? void 0 : A.defaultLocale))
                }
                return L ? u.default.cloneElement(r, Y) : (0, o.jsx)("a", { ...k,
                    ...Y,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        19720: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (e, t) => n(1808).normalizeLocalePath(e, t);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        52905: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(67294),
                o = n(33815),
                u = "function" == typeof IntersectionObserver,
                l = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, i = a || !u, [c, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (u) {
                        if (i || c) return;
                        let e = d.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: u
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), l.set(n, t), t
                            }(n);
                            return u.set(e, t), o.observe(e),
                                function() {
                                    if (u.delete(e), o.unobserve(e), 0 === u.size) {
                                        o.disconnect(), l.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [i, n, t, c, d.current]), [p, c, (0, r.useCallback)(() => {
                    s(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        41664: function(e, t, n) {
            e.exports = n(89577)
        }
    }
]);
//# sourceMappingURL=1664-30a881eb06af588a.js.map