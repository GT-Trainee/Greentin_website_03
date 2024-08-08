! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3228357-f422-421e-9ae3-82db817655bb", e._sentryDebugIdIdentifier = "sentry-dbid-b3228357-f422-421e-9ae3-82db817655bb")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5876], {
        65876: function(e, t, n) {
            n.r(t), n.d(t, {
                ExpansionWaitlistPopup: function() {
                    return p
                }
            });
            var a = n(85893),
                l = n(67294),
                i = n(51303),
                o = n(19054),
                s = n(36409),
                d = n(24912),
                c = n(26832),
                r = n(98829),
                u = n(59038),
                b = n(11788);
            let p = () => {
                let {
                    isOpen: e,
                    setIsOpen: t
                } = (0, b.I9)(), [, n] = (0, r.Ly)(), {
                    step: p
                } = (0, s.tk)(), f = (0, s.A4)(), k = (0, b.wZ)(), {
                    trackEvent: y
                } = (0, c.z$)(), w = (0, l.useCallback)(() => t(!1), [t]), C = (0, l.useCallback)(() => f({
                    step: u.ZO.Initial
                }), [f]), h = (0, l.useCallback)(() => {
                    n(!0), w()
                }, [n, w]);
                return (0, l.useEffect)(() => {
                    e && y({
                        action: "Waitlist_Start",
                        component_name: "expansion-waitlist-widget",
                        vertical: "Retail",
                        payload: {
                            mode: "popup"
                        }
                    })
                }, [y, e]), (0, a.jsxs)(i.G, {
                    "aria-label": "wide-modal",
                    closeOnOverlayClick: !1,
                    "data-blockid": k.blockId,
                    onClose: w,
                    open: e,
                    variant: "modal-view",
                    children: [p !== u.ZO.Done && p !== u.ZO.Already && (0, a.jsxs)(o.h, {
                        variant: "compact",
                        children: [p === u.ZO.Initial && (0, a.jsx)(o.h.CloseButton, {
                            onClick: w
                        }), p === u.ZO.Otp && (0, a.jsx)(o.h.BackButton, {
                            onClick: C
                        })]
                    }), (0, a.jsx)(d.D, {
                        onClose: w,
                        navigateToGetTheApp: h
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=5876.cb6ace3339a1163e.js.map