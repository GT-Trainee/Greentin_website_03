! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9805c08b-772d-4fe5-9bc2-9143c6860e94", e._sentryDebugIdIdentifier = "sentry-dbid-9805c08b-772d-4fe5-9bc2-9143c6860e94")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8377], {
        58377: function(e, r, t) {
            t.r(r), t.d(r, {
                PhoneFormPopup: function() {
                    return i
                }
            });
            var n = t(85893),
                s = t(92675),
                o = t(79645);
            let i = e => {
                let {
                    formState: r,
                    handlePopupExit: t
                } = e, i = (0, o.T)(), u = function(e) {
                    let r = (0, o.T)();
                    return r("country-not-supported" === e ? "widget.getTheApp.notSupportedCountry" : "widget.getTheApp.errorTryAgainLater")
                }("error" === r.status && r.event || void 0);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.u, {
                        variant: "success-optional",
                        open: "success" === r.status,
                        onClose: t,
                        children: (0, n.jsx)(s.u.Title, {
                            children: i("widget.getTheApp.successTitlePrefix")
                        })
                    }), (0, n.jsxs)(s.u, {
                        variant: "error",
                        open: "error" === r.status,
                        onClose: t,
                        children: [(0, n.jsx)(s.u.Title, {
                            children: i("shared.error.generic")
                        }), (0, n.jsx)(s.u.Description, {
                            children: u
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=8377.cf9cf105385cfed3.js.map