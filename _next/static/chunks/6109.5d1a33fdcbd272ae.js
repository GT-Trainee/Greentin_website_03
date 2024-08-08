! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e78a12f2-d932-4350-a392-81a7410f9ce4", e._sentryDebugIdIdentifier = "sentry-dbid-e78a12f2-d932-4350-a392-81a7410f9ce4")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6109], {
        75667: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return d
                }
            });
            var o = r(49363),
                n = r(16678),
                i = r(25394),
                a = r(25110),
                l = r(22674),
                s = r(90305),
                c = r(27061),
                u = (0, r(47098).h)(c.x),
                d = (0, o.ZP)(u).attrs(function(e) {
                    var t = e.bg,
                        r = void 0 === t ? l.WU.color.widgetBackground : t,
                        o = e.color,
                        n = void 0 === o ? l.WU.color.foreground : o,
                        i = e.radius,
                        a = void 0 === i ? l.WU.radius.widget : i,
                        s = e.display;
                    return {
                        bg: r,
                        color: n,
                        radius: a,
                        display: void 0 === s ? "block" : s
                    }
                }).withConfig({
                    displayName: "Widget",
                    componentId: "rui__sc-1vzekdg-0"
                })(["", " ", " & &{background-color:", ";}", ""], a.k, (0, s.fw)(i.G.TABLE_ROW_X_BORDER_WIDTH, "1px"), l.WU.color.greyTone5, n.$_)
        },
        74584: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return x
                }
            });
            var o = r(85893),
                n = r(67294),
                i = r(31346),
                a = r(27061),
                l = r(58374),
                s = r(10654),
                c = r(9538),
                u = r(79645),
                d = r(36934),
                p = r(13633),
                h = r(26832),
                f = r(44948),
                m = r(58491),
                g = r(38674);
            let x = e => {
                var t;
                let {
                    phoneFormControl: r,
                    promoCode: x
                } = e, v = (0, u.T)(), {
                    isRevolutUnder18: b,
                    isRevolutInvest: P
                } = (0, d.C)(), y = (0, p.W)(), {
                    urlQuery: C
                } = (0, m.g)(), k = (0, n.useMemo)(() => (0, g.o)({
                    promoCode: x,
                    hasMobileStore: y,
                    urlQuery: C
                }), [x, y, C]), {
                    link: w
                } = (0, h.PF)(null !== (t = null == r ? void 0 : r.link) && void 0 !== t ? t : f.li.RetailOpenApp, {
                    type: "SMS",
                    data: {
                        qr_code: !0
                    }
                }), [A] = [b && f.li.RevolutUnder18GetTheApp, P && f.li.RevolutInvestGetTheApp, w].filter(Boolean), _ = "".concat(f.li.QRCodeLink, "?link=").concat(encodeURIComponent(A)), j = !(b || P) && r;
                return (0, o.jsxs)(i.k, {
                    role: "group",
                    p: "s-40",
                    alignItems: {
                        all: "stretch",
                        md: "center"
                    },
                    flexDirection: "column",
                    children: [(0, o.jsx)(c.x, {
                        use: "h2",
                        variant: "h3",
                        textAlign: "center",
                        children: v("widget.getTheAppPopup.title")
                    }), (0, o.jsx)(c.x, {
                        variant: "subtitle1",
                        use: "p",
                        textAlign: "center",
                        mt: "s-16",
                        children: v("widget.getTheAppPopup.QRCodeDescription")
                    }), (0, o.jsx)(i.k, {
                        alignItems: "center",
                        flexDirection: "column",
                        mt: "s-24",
                        children: (0, o.jsx)(s.s, {
                            value: _,
                            style: {
                                width: "100%",
                                maxWidth: "160px"
                            }
                        })
                    }), j && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(c.x, {
                            variant: "subtitle1",
                            use: "p",
                            textAlign: "center",
                            mt: "s-24",
                            children: v("widget.getTheAppPopup.phoneDescription")
                        }), (0, o.jsx)(a.x, {
                            maxWidth: {
                                all: "",
                                md: "370px"
                            },
                            mt: "s-24",
                            children: (0, o.jsx)(l.bV.Controlled, { ...r,
                                layout: x ? "text-button" : "default",
                                requestFunc: k,
                                __tuneCountryListExp: !0
                            })
                        })]
                    })]
                })
            }
        },
        38674: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return a
                }
            });
            var o = r(1332),
                n = r(5257),
                i = r(28127);
            let a = e => {
                let {
                    hasMobileStore: t,
                    promoCode: r,
                    urlQuery: a = ""
                } = e;
                return async e => {
                    let {
                        captchaToken: l,
                        getAppUrl: s,
                        phone: c
                    } = e, u = r || function() {
                        try {
                            let e = new URL(window.location.href).searchParams.get(n.AS.PromoCode);
                            if (e && e.length > 50) return (0, i.D)("GetTheApp", TypeError("Promo code too long")), null;
                            return e || null
                        } catch (e) {
                            return null
                        }
                    }() || "WEBSITE19", d = t && u ? void 0 : s;
                    return (0, o.Ah)({
                        component: o.sN.GetTheApp,
                        promoCode: u,
                        captchaToken: l,
                        getAppUrl: d,
                        phone: c,
                        urlQuery: a
                    })
                }
            }
        },
        36109: function(e, t, r) {
            r.r(t), r.d(t, {
                GetTheAppPopup: function() {
                    return u
                }
            });
            var o = r(85893),
                n = r(67294),
                i = r(69021),
                a = r(58374),
                l = r(74584),
                s = r(793),
                c = r(98829);
            let u = () => {
                let [e, t] = (0, c.Ly)(), r = (0, c.XB)(), u = (0, i.O)({
                    blockId: r.blockId,
                    link: r.link
                }), d = u.formState.status;
                return (0, n.useEffect)(() => {
                    ("error" === d || "success" === d) && t(!1)
                }, [d, t]), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s.G, {
                        open: e,
                        onClose: () => t(!1),
                        children: (0, o.jsx)(l.K, {
                            phoneFormControl: u
                        }, r.key)
                    }), (0, o.jsx)(a.bV.Popup, { ...u
                    })]
                })
            }
        },
        58374: function(e, t, r) {
            r.d(t, {
                bV: function() {
                    return l
                }
            });
            var o = r(5152),
                n = r.n(o);
            let i = n()(() => Promise.all([r.e(1569), r.e(6155), r.e(9054), r.e(2032), r.e(546), r.e(2613), r.e(5236), r.e(4129), r.e(8961), r.e(5520)]).then(r.bind(r, 24278)).then(e => e.PhoneFormControlled), {
                    loadableGenerated: {
                        webpack: () => [24278]
                    }
                }),
                a = n()(() => r.e(8377).then(r.bind(r, 58377)).then(e => e.PhoneFormPopup), {
                    loadableGenerated: {
                        webpack: () => [58377]
                    },
                    ssr: !1
                }),
                l = Object.assign(n()(() => Promise.all([r.e(1569), r.e(6155), r.e(9054), r.e(2032), r.e(546), r.e(2613), r.e(5236), r.e(4129), r.e(8961), r.e(5520)]).then(r.bind(r, 24278)).then(e => e.PhoneForm), {
                    loadableGenerated: {
                        webpack: () => [24278]
                    },
                    ssr: !0
                }), {
                    Controlled: i,
                    Popup: a
                })
        },
        69021: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return u
                }
            });
            var o = r(67294),
                n = r(26832),
                i = r(13633),
                a = r(96027),
                l = r(77408),
                s = r(44948),
                c = r(11163);
            let u = function() {
                let {
                    blockId: e,
                    link: t = s.li.RetailOpenApp
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, u] = (0, o.useState)({
                    status: "idle"
                }), {
                    phone: d,
                    phoneCode: p,
                    setPhone: h,
                    setPhoneCode: f
                } = (0, a.z)(), {
                    getResourceBlockContext: m
                } = (0, l.EL)(), g = m(e);
                return ! function(e) {
                    let {
                        status: t,
                        redirectUrl: r
                    } = e, {
                        link: a
                    } = (0, n.PF)(r), l = (0, o.useRef)(), s = (0, i.W)();
                    (0, o.useEffect)(() => {
                        s && "idle" === t && "success" === l.current && (l.current = t, window.location.href = a), l.current !== t && (l.current = t)
                    }, [t, r, s, a])
                }({
                    status: r.status,
                    redirectUrl: t
                }), ! function(e) {
                    let {
                        formState: t,
                        countryCode: r,
                        context: i,
                        componentName: a,
                        featureToggle: s,
                        position: u
                    } = e, {
                        locale: d
                    } = (0, c.useRouter)(), {
                        trackEvent: p
                    } = (0, n.z$)(), h = (0, o.useRef)("idle"), f = t.status, m = "error" === t.status && t.event || "error", g = (0, o.useMemo)(() => ({
                        phoneCountryCode: r,
                        locale: d,
                        context: i,
                        position: u
                    }), [i, r, d, u]);
                    (0, o.useEffect)(() => {
                        a !== l.T4.componentName && p({
                            action: "Signup_Start",
                            component_name: a,
                            feature_toggle: s,
                            vertical: "Retail",
                            payload: g
                        })
                    }, [a]), (0, o.useEffect)(() => {
                        if (a !== l.T4.componentName && h.current !== f) {
                            if (h.current = f, "loading" === f) {
                                p({
                                    action: "Phone_Enter",
                                    component_name: a,
                                    feature_toggle: s,
                                    vertical: "Retail",
                                    payload: g
                                });
                                return
                            }
                            if ("success" === f) {
                                p({
                                    action: "Phone_Submit",
                                    component_name: a,
                                    feature_toggle: s,
                                    vertical: "Retail",
                                    payload: g
                                });
                                return
                            }
                            if ("error" === f) {
                                let e = t.extra;
                                p({
                                    action: "Phone_Fail",
                                    component_name: a,
                                    feature_toggle: s,
                                    vertical: "Retail",
                                    ...(null == e ? void 0 : e.promoCode) && {
                                        promo_code: e.promoCode
                                    },
                                    ...(null == e ? void 0 : e.error) && {
                                        error: e.error
                                    },
                                    payload: { ...g,
                                        error: m,
                                        ...(null == e ? void 0 : e.errorMessage) && {
                                            error: e.errorMessage
                                        }
                                    }
                                });
                                return
                            }
                        }
                    }, [a, s, m, t, g, f, p])
                }({
                    formState: r,
                    countryCode: p,
                    ...g
                }), {
                    countryCode: p,
                    formState: r,
                    link: t,
                    phoneNumber: d,
                    handlePopupExit: (0, o.useCallback)(() => {
                        u({
                            status: "idle"
                        }), h("")
                    }, [u, h]),
                    setCountryCode: f,
                    setFormState: u,
                    setPhoneNumber: h
                }
            }
        },
        793: function(e, t, r) {
            r.d(t, {
                G: function() {
                    return u
                }
            });
            var o = r(85893),
                n = r(56843),
                i = r(96944),
                a = r(75667),
                l = r(51303),
                s = r(79645),
                c = r(45550);
            let u = e => {
                let {
                    open: t,
                    onClose: r,
                    children: u,
                    ...d
                } = e, p = (0, s.T)();
                return (0, c.b)("md") ? (0, o.jsxs)(n.a, {
                    open: !!t,
                    display: "flex",
                    onClose: r,
                    ...d,
                    role: "dialog",
                    children: [(0, o.jsx)(i.n, { in: !!t,
                        offsetX: 0,
                        offsetY: -24,
                        children: (0, o.jsx)(a.$, {
                            radius: "popup",
                            maxWidth: {
                                all: "500px",
                                xxl: "700px"
                            },
                            width: {
                                all: "500px",
                                xxl: "700px"
                            },
                            m: "auto",
                            children: u
                        })
                    }), (0, o.jsx)(n.a.CloseButton, {
                        "aria-label": p("shared.button.close"),
                        onClick: r
                    })]
                }) : (0, o.jsx)(l.G, {
                    open: t,
                    onClose: r,
                    "aria-label": "Modal",
                    ...d,
                    variant: "bottom-sheet",
                    children: u
                })
            }
        },
        10654: function(e, t, r) {
            r.d(t, {
                s: function() {
                    return l
                }
            });
            var o = r(85893),
                n = r(67294),
                i = r(36876),
                a = r.n(i);
            let l = e => {
                let {
                    value: t,
                    padding: r = 1,
                    ...i
                } = e, {
                    children: l,
                    size: s
                } = (0, n.useMemo)(() => {
                    let {
                        modules: e,
                        moduleCount: r
                    } = a()(t), n = [];
                    return e.forEach((e, t) => e.forEach((e, r) => {
                        if (!e) return;
                        let i = {
                            x: t,
                            y: r,
                            key: "".concat(t, ":").concat(r)
                        };
                        n.push((0, o.jsx)("rect", { ...i,
                            width: "1",
                            height: "1",
                            shapeRendering: "crispEdges",
                            strokeWidth: "0",
                            fill: "currentColor",
                            stroke: "currentColor"
                        }))
                    })), {
                        children: n,
                        size: r
                    }
                }, [t]), c = (0, n.useMemo)(() => {
                    let [e, t] = [-1 * r, s + 2 * r];
                    return [e, e, t, t].join(" ")
                }, [s, r]);
                return (0, o.jsx)("svg", {
                    "aria-label": "qr-code",
                    viewBox: c,
                    ...i,
                    children: l
                })
            }
        },
        49988: function(e, t, r) {
            var o, n;
            r.d(t, {
                r: function() {
                    return o
                }
            }), (n = o || (o = {})).BrowserApplication = "x-browser-application", n.CaptchaToken = "X-Captcha-Token", n.ClientVersion = "x-client-version", n.DeviceId = "x-device-id", n.GeoLocation = "x-client-geo-location", n.UserAgent = "user-agent", n.Authorization = "Authorization"
        },
        1332: function(e, t, r) {
            r.d(t, {
                Ah: function() {
                    return u
                },
                ho: function() {
                    return c
                },
                sN: function() {
                    return a
                }
            });
            var o, n, i, a, l = r(49988),
                s = r(28127);
            let c = async e => {
                    let {
                        component: t,
                        phone: r,
                        referralCode: o,
                        inviteId: n,
                        captchaToken: i,
                        token: a
                    } = e;
                    try {
                        if (!o || !i && !a) return {
                            status: "error"
                        };
                        let e = await fetch("/api/v2/invitation/accept", {
                            method: "post",
                            headers: { ...a && {
                                    [l.r.Authorization]: "Basic ".concat(a)
                                },
                                ...i && {
                                    [l.r.CaptchaToken]: i
                                }
                            },
                            body: JSON.stringify({
                                phone: r,
                                referralCode: o,
                                ...n && {
                                    inviteId: n
                                }
                            })
                        });
                        if (e.ok) return {
                            status: "success"
                        };
                        return await h(t, e, o)
                    } catch (e) {
                        return (0, s.D)(t, e, {
                            extra: {
                                promoCode: o
                            }
                        }), {
                            status: "error"
                        }
                    }
                },
                u = async e => {
                    let {
                        component: t,
                        phone: r,
                        urlQuery: o,
                        promoCode: n,
                        captchaToken: i,
                        getAppUrl: a
                    } = e;
                    try {
                        let e = await fetch("/api/partnerships", {
                            method: "POST",
                            headers: { ...i && {
                                    [l.r.CaptchaToken]: i
                                },
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                phone: r,
                                urlQuery: o,
                                promoCode: n,
                                ...a && {
                                    getAppUrl: a
                                }
                            })
                        });
                        if (e.ok) return {
                            status: "success"
                        };
                        return await h(t, e, n)
                    } catch (e) {
                        return (0, s.D)(t, e, {
                            extra: {
                                promoCode: n
                            }
                        }), {
                            status: "error"
                        }
                    }
                };
            (o = i || (i = {}))[o.PromotionExpired = 1100] = "PromotionExpired", o[o.PromotionExhausted = 1101] = "PromotionExhausted", o[o.PromotionNotFound = 1102] = "PromotionNotFound", o[o.ReferralCodeNotFound = 1103] = "ReferralCodeNotFound", o[o.AnotherPromotionUsed = 1104] = "AnotherPromotionUsed", o[o.PromotionNotApplicable = 1105] = "PromotionNotApplicable", o[o.PromotionInactive = 1106] = "PromotionInactive", o[o.IgnoredPromotionNotAllowed = 1110] = "IgnoredPromotionNotAllowed", o[o.ParticipationTerminated = 1002] = "ParticipationTerminated";
            let d = Object.fromEntries(Object.entries(i).map(e => {
                    let [t, r] = e;
                    return [r, t]
                })),
                p = e => {
                    let {
                        code: t
                    } = e;
                    return Object.values(i).includes(t)
                };
            (n = a || (a = {})).GetTheApp = "get-the-app", n.Invitation = "invitation", n.Waitlist = "expansion-waitlist-referral";
            let h = async (e, t, r) => {
                let o;
                if (429 === t.status) return {
                    status: "error",
                    event: "too-many-requests"
                };
                let n = await t.text();
                try {
                    o = JSON.parse(n)
                } catch (e) {
                    return {
                        status: "error",
                        event: "json-parse-error"
                    }
                }
                return o && p(o) ? {
                    status: "error",
                    event: "promo-code-error",
                    extra: {
                        promoCode: r,
                        error: "".concat(o.code, " ").concat(d[o.code]),
                        errorMessage: o.message
                    }
                } : ((0, s.D)(e, Error("Unhandled server response for ".concat(t.url)), {
                    extra: {
                        promoCode: r,
                        ...o
                    }
                }), {
                    status: "error"
                })
            }
        }
    }
]);
//# sourceMappingURL=6109.5d1a33fdcbd272ae.js.map