! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "af602ec0-fb69-4d2d-85d2-76e0d61b229e", e._sentryDebugIdIdentifier = "sentry-dbid-af602ec0-fb69-4d2d-85d2-76e0d61b229e")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5412], {
        85412: function(e, t, n) {
            n.r(t), n.d(t, {
                MobileAppBanner: function() {
                    return g
                }
            });
            var r = n(85893),
                a = n(5152),
                l = n.n(a),
                d = n(2962),
                s = n(67294),
                u = n(23122),
                i = n(50023),
                o = n(13633),
                c = n(26832),
                f = n(6484);
            let b = (e, t) => {
                    try {
                        window.localStorage.setItem(e, (0, f.HD)(t) ? t : JSON.stringify(t))
                    } catch (e) {}
                    return t
                },
                p = (e, t) => {
                    let n;
                    if ((0, f.yF)()) return t;
                    try {
                        n = window.localStorage.getItem(e)
                    } catch (e) {
                        return t
                    }
                    if (null !== n) try {
                        return JSON.parse(n)
                    } catch (e) {
                        return n
                    }
                    return t
                };
            var y = n(58178);
            let w = l()(() => n.e(9436).then(n.bind(n, 59436)).then(e => e.MobileAppBannerView), {
                    loadableGenerated: {
                        webpack: () => [59436]
                    },
                    ssr: !1
                }),
                g = () => {
                    let {
                        isCookieSettingsConfirmed: e,
                        isPreferencesEnabled: t
                    } = (0, y.eK)(), n = (0, i.F)(), a = (0, o.v)(), {
                        linkContext: l
                    } = (0, c.z$)(), [f, g] = (0, s.useState)(!1), [h, k] = function(e, t) {
                        let n = p(e, void 0),
                            [r, a] = (0, s.useState)(n);
                        return [r, (0, s.useCallback)(t => a(t instanceof Function ? n => b(e, t(n)) : b(e, t)), [e])]
                    }(u.Fe.MobileAppBannerDisplayed);
                    (0, s.useEffect)(() => {
                        g(!h)
                    }, [h]);
                    let _ = (0, s.useCallback)(() => {
                        g(!1), t && k(!0)
                    }, [t, k]);
                    return (null == n ? void 0 : n.os.name) === "iOS" && (null == l ? void 0 : l.status) === "error" ? (0, r.jsx)(d.PB, {
                        additionalMetaTags: [{
                            name: "apple-itunes-app",
                            content: "app-id=932493382"
                        }]
                    }) : f && e && a ? (0, r.jsx)(w, {
                        onClose: _
                    }) : null
                }
        }
    }
]);
//# sourceMappingURL=5412.82bbe5e6e117afda.js.map