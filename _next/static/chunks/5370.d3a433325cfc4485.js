! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "58f1dfd3-1016-47c0-9f1b-ca219e135d37", e._sentryDebugIdIdentifier = "sentry-dbid-58f1dfd3-1016-47c0-9f1b-ca219e135d37")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5370], {
        78425: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return u
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(17802),
                i = r(83128),
                s = r(94779);
            let u = (0, o.memo)(function(e) {
                let {
                    countryCode: t,
                    ...r
                } = e, o = t ? (0, s.mv)(t) : void 0;
                return (0, n.jsx)(i.Y, {
                    display: "inline-block",
                    src: o,
                    size: 24,
                    borderRadius: a.w.ROUND,
                    alt: null != t ? t : "Country flag",
                    ...r
                })
            })
        },
        38674: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return i
                }
            });
            var n = r(1332),
                o = r(5257),
                a = r(28127);
            let i = e => {
                let {
                    hasMobileStore: t,
                    promoCode: r,
                    urlQuery: i = ""
                } = e;
                return async e => {
                    let {
                        captchaToken: s,
                        getAppUrl: u,
                        phone: l
                    } = e, c = r || function() {
                        try {
                            let e = new URL(window.location.href).searchParams.get(o.AS.PromoCode);
                            if (e && e.length > 50) return (0, a.D)("GetTheApp", TypeError("Promo code too long")), null;
                            return e || null
                        } catch (e) {
                            return null
                        }
                    }() || "WEBSITE19", d = t && c ? void 0 : u;
                    return (0, n.Ah)({
                        component: n.sN.GetTheApp,
                        promoCode: c,
                        captchaToken: s,
                        getAppUrl: d,
                        phone: l,
                        urlQuery: i
                    })
                }
            }
        },
        34133: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return w
                }
            });
            var n = r(85893),
                o = r(58374),
                a = r(11788),
                i = r(44948),
                s = r(67294),
                u = r(13633),
                l = r(58491),
                c = r(38674);
            let d = e => {
                let {
                    children: t,
                    promoCode: r
                } = e, o = (0, u.W)(), {
                    urlQuery: a
                } = (0, l.g)(), i = (0, s.useMemo)(() => (0, c.o)({
                    promoCode: r,
                    hasMobileStore: o,
                    urlQuery: a
                }), [r, o, a]);
                return (0, n.jsx)(n.Fragment, {
                    children: t({
                        layout: r ? "text-button" : "default",
                        requestFunc: i,
                        __tuneCountryListExp: !0
                    })
                })
            };
            var p = r(56607),
                f = r(939),
                h = r(1332),
                v = r(79645);
            let m = e => {
                let [t, r] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    let t = async () => {
                        try {
                            let t = await fetch("/api/invitation/".concat(e, "/validateCampaign"));
                            422 === t.status && r(!0)
                        } catch (e) {}
                    };
                    e && t()
                }, [e]), t
            };
            var g = r(11163),
                b = r(6484);

            function y() {
                let {
                    query: e
                } = (0, g.useRouter)();
                return (0, b.HD)(e["referral-code"]) ? e["referral-code"] : void 0
            }
            let C = e => {
                    let {
                        children: t
                    } = e, r = (0, v.T)(), o = y(), a = m(o), i = (0, s.useCallback)(e => {
                        let {
                            captchaToken: t,
                            phone: r
                        } = e;
                        return (0, h.ho)({
                            component: h.sN.Invitation,
                            captchaToken: t,
                            phone: r,
                            referralCode: o
                        })
                    }, [o]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [t({
                            layout: "default",
                            requestFunc: i
                        }), (0, n.jsxs)(p.g, {
                            align: "center",
                            pt: "s-32",
                            space: "s-16",
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, n.jsx)(f.xv, {
                                color: "grey-50",
                                use: "p",
                                children: r("widget.getTheApp.referral.privacy")
                            }), a && (0, n.jsx)(f.xv, {
                                color: "grey-50",
                                use: "p",
                                pt: "s-16",
                                children: r("widget.getTheApp.referral.rewardExpired")
                            })]
                        })]
                    })
                },
                x = (e, t) => "referral" === e && t ? C : d,
                w = e => {
                    let {
                        blockId: t,
                        type: r
                    } = e, s = y(), u = (0, a.Xb)(), {
                        isWaitlistCountry: l
                    } = (0, a.I9)(), c = x(r, s);
                    return (0, n.jsx)(c, { ...e,
                        children: e => {
                            let {
                                layout: r,
                                requestFunc: a
                            } = e;
                            return (0, n.jsx)(o.bV, {
                                link: i.li.RetailOpenApp,
                                blockId: t,
                                layout: r,
                                requestFunc: function() {
                                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                    return l ? (u(t), Promise.resolve({
                                        status: "idle"
                                    })) : a(...r)
                                },
                                __tuneCountryListExp: c === d
                            })
                        }
                    })
                }
        },
        58374: function(e, t, r) {
            r.d(t, {
                bV: function() {
                    return s
                }
            });
            var n = r(5152),
                o = r.n(n);
            let a = o()(() => Promise.all([r.e(1569), r.e(6155), r.e(9054), r.e(2032), r.e(546), r.e(2613), r.e(5236), r.e(4129), r.e(8961), r.e(5520)]).then(r.bind(r, 24278)).then(e => e.PhoneFormControlled), {
                    loadableGenerated: {
                        webpack: () => [24278]
                    }
                }),
                i = o()(() => r.e(8377).then(r.bind(r, 58377)).then(e => e.PhoneFormPopup), {
                    loadableGenerated: {
                        webpack: () => [58377]
                    },
                    ssr: !1
                }),
                s = Object.assign(o()(() => Promise.all([r.e(1569), r.e(6155), r.e(9054), r.e(2032), r.e(546), r.e(2613), r.e(5236), r.e(4129), r.e(8961), r.e(5520)]).then(r.bind(r, 24278)).then(e => e.PhoneForm), {
                    loadableGenerated: {
                        webpack: () => [24278]
                    },
                    ssr: !0
                }), {
                    Controlled: a,
                    Popup: i
                })
        },
        69021: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return c
                }
            });
            var n = r(67294),
                o = r(26832),
                a = r(13633),
                i = r(96027),
                s = r(77408),
                u = r(44948),
                l = r(11163);
            let c = function() {
                let {
                    blockId: e,
                    link: t = u.li.RetailOpenApp
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, c] = (0, n.useState)({
                    status: "idle"
                }), {
                    phone: d,
                    phoneCode: p,
                    setPhone: f,
                    setPhoneCode: h
                } = (0, i.z)(), {
                    getResourceBlockContext: v
                } = (0, s.EL)(), m = v(e);
                return ! function(e) {
                    let {
                        status: t,
                        redirectUrl: r
                    } = e, {
                        link: i
                    } = (0, o.PF)(r), s = (0, n.useRef)(), u = (0, a.W)();
                    (0, n.useEffect)(() => {
                        u && "idle" === t && "success" === s.current && (s.current = t, window.location.href = i), s.current !== t && (s.current = t)
                    }, [t, r, u, i])
                }({
                    status: r.status,
                    redirectUrl: t
                }), ! function(e) {
                    let {
                        formState: t,
                        countryCode: r,
                        context: a,
                        componentName: i,
                        featureToggle: u,
                        position: c
                    } = e, {
                        locale: d
                    } = (0, l.useRouter)(), {
                        trackEvent: p
                    } = (0, o.z$)(), f = (0, n.useRef)("idle"), h = t.status, v = "error" === t.status && t.event || "error", m = (0, n.useMemo)(() => ({
                        phoneCountryCode: r,
                        locale: d,
                        context: a,
                        position: c
                    }), [a, r, d, c]);
                    (0, n.useEffect)(() => {
                        i !== s.T4.componentName && p({
                            action: "Signup_Start",
                            component_name: i,
                            feature_toggle: u,
                            vertical: "Retail",
                            payload: m
                        })
                    }, [i]), (0, n.useEffect)(() => {
                        if (i !== s.T4.componentName && f.current !== h) {
                            if (f.current = h, "loading" === h) {
                                p({
                                    action: "Phone_Enter",
                                    component_name: i,
                                    feature_toggle: u,
                                    vertical: "Retail",
                                    payload: m
                                });
                                return
                            }
                            if ("success" === h) {
                                p({
                                    action: "Phone_Submit",
                                    component_name: i,
                                    feature_toggle: u,
                                    vertical: "Retail",
                                    payload: m
                                });
                                return
                            }
                            if ("error" === h) {
                                let e = t.extra;
                                p({
                                    action: "Phone_Fail",
                                    component_name: i,
                                    feature_toggle: u,
                                    vertical: "Retail",
                                    ...(null == e ? void 0 : e.promoCode) && {
                                        promo_code: e.promoCode
                                    },
                                    ...(null == e ? void 0 : e.error) && {
                                        error: e.error
                                    },
                                    payload: { ...m,
                                        error: v,
                                        ...(null == e ? void 0 : e.errorMessage) && {
                                            error: e.errorMessage
                                        }
                                    }
                                });
                                return
                            }
                        }
                    }, [i, u, v, t, m, h, p])
                }({
                    formState: r,
                    countryCode: p,
                    ...m
                }), {
                    countryCode: p,
                    formState: r,
                    link: t,
                    phoneNumber: d,
                    handlePopupExit: (0, n.useCallback)(() => {
                        c({
                            status: "idle"
                        }), f("")
                    }, [c, f]),
                    setCountryCode: h,
                    setFormState: c,
                    setPhoneNumber: f
                }
            }
        },
        83128: function(e, t, r) {
            r.d(t, {
                Y: function() {
                    return p
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(8954),
                i = r(22674),
                s = r(17802),
                u = r(49363),
                l = r(6484);
            let c = (0, u.ZP)(a.Ee).withConfig({
                    componentId: "sc-10a0aa14-0"
                })({
                    color: "transparent",
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                        position: "absolute",
                        inset: 0,
                        content: '""',
                        backgroundColor: i.WU.color.actionBackground
                    }
                }),
                d = e => null == e ? void 0 : e.endsWith(".webp"),
                p = (0, o.memo)(function(e) {
                    let {
                        src: t,
                        alt: r,
                        size: o = 24,
                        ...a
                    } = e;
                    return (0, n.jsx)(c, {
                        image: t ? {
                            default: t,
                            "1x": [t, d(t) ? t.replace(/.webp$/, ".png") : void 0].filter(l.fQ)
                        } : void 0,
                        display: "inline-block",
                        borderRadius: s.w.ROUND,
                        alt: null != r ? r : "",
                        size: o,
                        minWidth: o,
                        ...a
                    })
                })
        },
        51943: function(e, t, r) {
            r.d(t, {
                n: function() {
                    return E
                }
            });
            var n = r(85893),
                o = r(45630),
                a = r(31346),
                i = r(20010),
                s = r(92675),
                u = r(9522),
                l = r(45004),
                c = r(67294),
                d = r(11163),
                p = r(23279),
                f = r.n(p),
                h = r(62052),
                v = r(69021),
                m = r(47036),
                g = r(79645),
                b = r(13633),
                y = r(26832),
                C = r(50663),
                x = r(76554),
                w = r(6484),
                P = r(44948);
            let k = e => {
                let {
                    captchaToken: t,
                    code: r,
                    countryCode: n,
                    phone: o
                } = e, a = {};
                return t && (a["X-Captcha-Token"] = t), fetch("/api/youth/guardians/ssu-invitations/accept", {
                    method: "post",
                    headers: a,
                    body: JSON.stringify({
                        code: r,
                        countryCode: n,
                        phone: o
                    })
                })
            };
            async function j(e) {
                let {
                    captchaToken: t,
                    code: r,
                    countryCode: n,
                    phone: o
                } = e;
                try {
                    let e = await k({
                        captchaToken: t,
                        code: r,
                        countryCode: n,
                        phone: o
                    });
                    return await e.json()
                } catch (e) {
                    return {
                        success: !1
                    }
                }
            }
            let {
                publicRuntimeConfig: {
                    isHCaptchaEnabled: A
                }
            } = (0, h.i)(), E = e => {
                var t, r, p, h;
                let {
                    formState: k,
                    countryCode: E,
                    setCountryCode: T,
                    phoneNumber: _,
                    setPhoneNumber: N,
                    setFormState: R
                } = (0, v.O)({
                    blockId: e.blockId
                }), {
                    captchaKey: I
                } = e, S = (0, g.T)(), F = (0, c.useRef)(null), [D, O] = (0, c.useState)(!0), U = !(0, o.A)(), [z, G] = (0, c.useState)(), W = function(e) {
                    let {
                        query: t
                    } = (0, d.useRouter)(), r = t[e];
                    return (0, w.HD)(r) ? r : ""
                }(e.under18CodeParameterName), L = (0, c.useRef)(null), [q, B] = (0, c.useState)(!1), M = (0, b.W)(), {
                    link: J
                } = (0, y.PF)(P.li.RetailOpenApp), X = (0, C.Ty)(), V = (0, c.useCallback)(e => {
                    e && T(e)
                }, [T]);
                (0, c.useEffect)(() => {
                    setTimeout(() => {
                        var e;
                        null === (e = F.current) || void 0 === e || e.focus()
                    })
                }, [E, F]);
                let H = (0, c.useCallback)(f()(e => O(e), 700), []);
                (0, c.useEffect)(() => {
                    H((0, l.y)("+".concat((0, u.G)(E)).concat(_)))
                }, [E, _, H]);
                let K = (0, c.useCallback)(async () => {
                        var e, t, r;
                        if (!D || A && !(null === (e = L.current) || void 0 === e ? void 0 : e.isLoaded) || "idle" !== k.status) return;
                        if ("" === _) return null === (t = F.current) || void 0 === t ? void 0 : t.focus();
                        R({
                            status: "loading"
                        });
                        let n = "";
                        if (A && L.current) try {
                            n = await (null === (r = L.current) || void 0 === r ? void 0 : r.getToken())
                        } catch (e) {
                            return R({
                                status: "error",
                                event: "captcha-error"
                            })
                        }
                        let o = await j({
                            captchaToken: n,
                            phone: "+".concat((0, u.G)(E)).concat(_),
                            countryCode: E,
                            code: W
                        });
                        return G(o), R({
                            status: o.success ? "success" : "error"
                        })
                    }, [W, E, k.status, D, _, R]),
                    Y = U && ("" === _ || D),
                    Z = (0, c.useCallback)(e => {
                        e.preventDefault(), B(!0), K()
                    }, [K]),
                    $ = (0, c.useCallback)(() => {
                        "success" !== k.status || M || (window.location.href = J), R({
                            status: "idle"
                        }), G(void 0)
                    }, [k.status, M, J, R]),
                    Q = async () => {
                        q && await K()
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(a.k, {
                        use: "form",
                        alignItems: "center",
                        justifyContent: "stretch",
                        flexWrap: "wrap",
                        onSubmit: Z,
                        children: [A && (0, n.jsx)(x.m, {
                            ref: L,
                            onLoad: Q,
                            captchaKey: I
                        }), (0, n.jsx)(m.s, {
                            "aria-invalid": !!(_ && !D),
                            disabled: "loading" === k.status,
                            ref: F,
                            countryCode: E,
                            phoneNumber: _,
                            onPhoneNumberChange: N,
                            onCountryCodeChange: V
                        }), (0, n.jsx)(i.z, {
                            disabled: !Y,
                            pending: "loading" === k.status,
                            type: "submit",
                            height: "s-48",
                            width: "s-48",
                            marginTop: "s-24",
                            variant: "black",
                            style: {
                                flexBasis: "100%"
                            },
                            children: S("shared.button.getStarted")
                        })]
                    }), (0, n.jsxs)(s.u, {
                        variant: (null == z ? void 0 : z.success) ? "success" : "error",
                        open: void 0 !== z,
                        onClose: $,
                        children: [(0, n.jsx)(s.u.Title, {
                            children: null !== (p = null == z ? void 0 : null === (t = z.message) || void 0 === t ? void 0 : t.title) && void 0 !== p ? p : S("widget.under18approve.acceptErrorTitle")
                        }), (0, n.jsx)(s.u.Description, {
                            children: X(null !== (h = null == z ? void 0 : null === (r = z.message) || void 0 === r ? void 0 : r.description) && void 0 !== h ? h : S("widget.under18approve.acceptErrorDescription"))
                        })]
                    })]
                })
            }
        },
        96027: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return c
                },
                z: function() {
                    return l
                }
            });
            var n = r(85893),
                o = r(67294),
                a = r(80829),
                i = r(18841);
            let s = (0, o.createContext)({
                    phone: "",
                    phoneCode: a.UF
                }),
                u = (0, o.createContext)({
                    setPhone: () => {},
                    setPhoneCode: () => {}
                }),
                l = () => {
                    let {
                        phone: e,
                        phoneCode: t
                    } = (0, o.useContext)(s), {
                        setPhone: r,
                        setPhoneCode: n
                    } = (0, o.useContext)(u);
                    return {
                        phone: e,
                        phoneCode: t,
                        setPhone: r,
                        setPhoneCode: n
                    }
                },
                c = e => {
                    let {
                        children: t
                    } = e, r = (0, i.E)(), [a, l] = (0, o.useState)(""), [c, d] = (0, o.useState)(r);
                    return (0, n.jsx)(s.Provider, {
                        value: {
                            phone: a,
                            phoneCode: c
                        },
                        children: (0, n.jsx)(u.Provider, {
                            value: {
                                setPhone: l,
                                setPhoneCode: d
                            },
                            children: t
                        })
                    })
                }
        },
        49988: function(e, t, r) {
            var n, o;
            r.d(t, {
                r: function() {
                    return n
                }
            }), (o = n || (n = {})).BrowserApplication = "x-browser-application", o.CaptchaToken = "X-Captcha-Token", o.ClientVersion = "x-client-version", o.DeviceId = "x-device-id", o.GeoLocation = "x-client-geo-location", o.UserAgent = "user-agent", o.Authorization = "Authorization"
        },
        1332: function(e, t, r) {
            r.d(t, {
                Ah: function() {
                    return c
                },
                ho: function() {
                    return l
                },
                sN: function() {
                    return i
                }
            });
            var n, o, a, i, s = r(49988),
                u = r(28127);
            let l = async e => {
                    let {
                        component: t,
                        phone: r,
                        referralCode: n,
                        inviteId: o,
                        captchaToken: a,
                        token: i
                    } = e;
                    try {
                        if (!n || !a && !i) return {
                            status: "error"
                        };
                        let e = await fetch("/api/v2/invitation/accept", {
                            method: "post",
                            headers: { ...i && {
                                    [s.r.Authorization]: "Basic ".concat(i)
                                },
                                ...a && {
                                    [s.r.CaptchaToken]: a
                                }
                            },
                            body: JSON.stringify({
                                phone: r,
                                referralCode: n,
                                ...o && {
                                    inviteId: o
                                }
                            })
                        });
                        if (e.ok) return {
                            status: "success"
                        };
                        return await f(t, e, n)
                    } catch (e) {
                        return (0, u.D)(t, e, {
                            extra: {
                                promoCode: n
                            }
                        }), {
                            status: "error"
                        }
                    }
                },
                c = async e => {
                    let {
                        component: t,
                        phone: r,
                        urlQuery: n,
                        promoCode: o,
                        captchaToken: a,
                        getAppUrl: i
                    } = e;
                    try {
                        let e = await fetch("/api/partnerships", {
                            method: "POST",
                            headers: { ...a && {
                                    [s.r.CaptchaToken]: a
                                },
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                phone: r,
                                urlQuery: n,
                                promoCode: o,
                                ...i && {
                                    getAppUrl: i
                                }
                            })
                        });
                        if (e.ok) return {
                            status: "success"
                        };
                        return await f(t, e, o)
                    } catch (e) {
                        return (0, u.D)(t, e, {
                            extra: {
                                promoCode: o
                            }
                        }), {
                            status: "error"
                        }
                    }
                };
            (n = a || (a = {}))[n.PromotionExpired = 1100] = "PromotionExpired", n[n.PromotionExhausted = 1101] = "PromotionExhausted", n[n.PromotionNotFound = 1102] = "PromotionNotFound", n[n.ReferralCodeNotFound = 1103] = "ReferralCodeNotFound", n[n.AnotherPromotionUsed = 1104] = "AnotherPromotionUsed", n[n.PromotionNotApplicable = 1105] = "PromotionNotApplicable", n[n.PromotionInactive = 1106] = "PromotionInactive", n[n.IgnoredPromotionNotAllowed = 1110] = "IgnoredPromotionNotAllowed", n[n.ParticipationTerminated = 1002] = "ParticipationTerminated";
            let d = Object.fromEntries(Object.entries(a).map(e => {
                    let [t, r] = e;
                    return [r, t]
                })),
                p = e => {
                    let {
                        code: t
                    } = e;
                    return Object.values(a).includes(t)
                };
            (o = i || (i = {})).GetTheApp = "get-the-app", o.Invitation = "invitation", o.Waitlist = "expansion-waitlist-referral";
            let f = async (e, t, r) => {
                let n;
                if (429 === t.status) return {
                    status: "error",
                    event: "too-many-requests"
                };
                let o = await t.text();
                try {
                    n = JSON.parse(o)
                } catch (e) {
                    return {
                        status: "error",
                        event: "json-parse-error"
                    }
                }
                return n && p(n) ? {
                    status: "error",
                    event: "promo-code-error",
                    extra: {
                        promoCode: r,
                        error: "".concat(n.code, " ").concat(d[n.code]),
                        errorMessage: n.message
                    }
                } : ((0, u.D)(e, Error("Unhandled server response for ".concat(t.url)), {
                    extra: {
                        promoCode: r,
                        ...n
                    }
                }), {
                    status: "error"
                })
            }
        },
        78112: function(e, t, r) {
            r.d(t, {
                j: function() {
                    return o
                }
            });
            var n = r(40743);
            let o = e => e === n.UX.DARK
        }
    }
]);
//# sourceMappingURL=5370.d3a433325cfc4485.js.map