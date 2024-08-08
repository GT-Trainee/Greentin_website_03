! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9be519c3-db06-4f04-8ed9-10f90c2c0fd9", t._sentryDebugIdIdentifier = "sentry-dbid-9be519c3-db06-4f04-8ed9-10f90c2c0fd9")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4912], {
        24912: function(t, e, i) {
            i.d(e, {
                D: function() {
                    return tP
                }
            });
            var a = i(85893),
                r = i(67294),
                n = i(56607),
                s = i(26370),
                o = i(22674),
                l = i(8954),
                c = i(37903),
                u = i(15059),
                d = i(2297),
                h = i(20010),
                g = i(49363),
                p = i(62052),
                w = i(79645),
                f = i(58363),
                m = i(4641),
                v = i(9538),
                x = i(76459),
                y = i(35758),
                b = i(83755),
                C = i(11163),
                k = i(50023),
                j = i(6484);
            let {
                publicRuntimeConfig: S
            } = (0, p.i)(), A = (0, g.ZP)(y.C).withConfig({
                componentId: "sc-8a988c3f-0"
            })({
                width: "auto"
            }), N = t => {
                var e;
                let {
                    referralCode: r
                } = t, s = (0, w.T)(), {
                    locale: o
                } = (0, C.useRouter)(), l = (0, k.F)(), d = [o, "waitlist"].filter(j.fQ).join("/"), h = "".concat(S.websiteDomain, "/").concat(d, "?r=").concat(r), g = "https://".concat(h), p = (null == l ? void 0 : l.os.name) === "iOS", f = (null == l ? void 0 : l.os.name) === "Android";
                return (p || f) && (0, j.mf)(null === (e = i.g) || void 0 === e ? void 0 : e.navigator.share) ? (0, a.jsx)(b.A, {
                    color: "accent",
                    onClick: async () => {
                        (0, j.mf)(navigator.share) && await navigator.share({
                            url: g,
                            title: s("widget.waitlist.join.the.waitlist"),
                            text: s("widget.waitlist.join.the.waitlist")
                        })
                    },
                    children: (0, a.jsxs)(c.U, {
                        align: "center",
                        space: "s-8",
                        children: [(0, a.jsx)(u.J, {
                            name: p ? "ShareIOs" : "ShareAndroid"
                        }), (0, a.jsx)(v.x, {
                            children: s("widget.waitlist.referralCode.share")
                        })]
                    })
                }) : (0, a.jsxs)(n.g, {
                    align: {
                        all: "start",
                        md: "center"
                    },
                    gap: "s-8",
                    backgroundColor: "grey-tone-2",
                    borderRadius: 12,
                    paddingY: {
                        all: "s-16",
                        xxl: "s-24"
                    },
                    paddingX: {
                        all: "s-16",
                        xxl: "s-32"
                    },
                    width: "100%",
                    children: [(0, a.jsx)(v.x, {
                        variant: "subtitle2",
                        children: s("widget.waitlist.referralCode.copy")
                    }), (0, a.jsx)(A, {
                        value: g,
                        labelButtonCopy: h,
                        children: h
                    })]
                })
            };
            var O = i(36409),
                P = i(59038);
            let {
                publicRuntimeConfig: {
                    assetsUrl: T
                }
            } = (0, p.i)(), _ = (0, g.ZP)(s.h).withConfig({
                componentId: "sc-ee22d193-0"
            })({
                color: o.WU.color.grey50,
                transition: o.WU.transition.text,
                ":hover": {
                    color: o.WU.color.accent
                }
            }), I = t => {
                let {
                    onSubmit: e
                } = t, i = (0, w.T)(), {
                    countryCode: r,
                    referralCode: n,
                    step: s,
                    referralCodeSupport: o
                } = (0, O.tk)(), g = n && o, p = (0, f.J)(), y = new x.C(i(s === P.ZO.Done ? "widget.waitlist.congratulations.you.are.in.waitlist" : "widget.waitlist.already.in.waitlist")).format({
                    country: p(r)
                }), b = (0, m.o)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.Ee, {
                        alt: "",
                        maxWidth: "auto",
                        size: {
                            all: 160,
                            xxl: 208
                        },
                        src: "".concat(T, "/assets/3d-images-v2/3D194.png"),
                        srcSet: "".concat(T, "/assets/3d-images-v2/3D194@2x.png 2x, ").concat(T, "/assets/3d-images-v2/3D194@3x.png 3x")
                    }), (0, a.jsx)(v.x, {
                        use: "h2",
                        variant: "h5",
                        textAlign: {
                            all: "start",
                            md: "center"
                        },
                        width: "100%",
                        children: y
                    }), (0, a.jsx)(v.x, {
                        use: "p",
                        variant: "subtitle1",
                        textAlign: {
                            all: "start",
                            md: "center"
                        },
                        width: "100%",
                        children: i("widget.waitlist.we.will.contact.you")
                    }), g && (0, a.jsx)(N, {
                        referralCode: n
                    }), (0, a.jsx)(c.U, {
                        gap: "s-24",
                        children: b.filter(t => t.icon).map(t => {
                            let {
                                url: e,
                                icon: i,
                                name: r
                            } = t;
                            return (0, a.jsx)(_, {
                                "aria-label": r,
                                href: e,
                                rel: "noopener",
                                target: "_blank",
                                use: "a",
                                useIcon: (0, a.jsx)(u.J, {
                                    name: i,
                                    color: "inherit"
                                })
                            }, e)
                        })
                    }), (0, a.jsx)(d.L, {
                        height: "s-16"
                    }), (0, a.jsx)(h.z, {
                        variant: "black",
                        onClick: e,
                        children: i("widget.waitlist.got.it")
                    })]
                })
            };
            var D = i(3506),
                E = i(64230),
                R = i(47036),
                W = i(76554),
                J = i(81410),
                F = i(6388),
                z = i(26832),
                U = i(96027),
                Z = i(16125),
                G = i(44948),
                L = i(94779),
                M = i(49988),
                X = i(28127);
            let B = (t, e) => btoa("".concat(t, ":").concat(e));
            class V extends Error {
                static getBaseErrorMessage(t, e, i) {
                    let a = "Request failed with ".concat(t, " status.");
                    return e && (a += " Error code: ".concat(e, ".")), i && (a += ' Response message: "'.concat(i, '"')), a
                }
                constructor(t, e) {
                    let i = e && "object" == typeof e && "code" in e ? Number(e.code) : void 0;
                    super(V.getBaseErrorMessage(t, i, e && "object" == typeof e && "message" in e ? JSON.stringify(e.message) : JSON.stringify(e))), this.statusCode = t, this.code = i
                }
            }
            let q = (t, e) => (0, X.D)("expansion-waitlist-api", t, {
                    request: e
                }),
                Y = t => t instanceof V && 9001 === t.code,
                $ = t => t instanceof V && 1031 === t.code,
                K = t => t instanceof V && 9105 === t.code,
                Q = (t, e) => Y(t) ? {
                    status: "error",
                    reason: "code-is-invalid"
                } : K(t) ? {
                    status: "error",
                    reason: "phone-is-blocked"
                } : $(t) ? {
                    status: "error",
                    reason: "email-is-used"
                } : (q(t, e), {
                    status: "error"
                });
            class H {
                constructor() {
                    this.fetcher = async (t, e) => {
                        let {
                            deviceId: i,
                            token: a,
                            captchaToken: r,
                            ...n
                        } = e, s = await fetch("/api/expansion".concat(t), { ...n,
                            headers: {
                                [M.r.DeviceId]: i,
                                ...a && {
                                    [M.r.Authorization]: "Basic ".concat(a)
                                },
                                ...r && {
                                    [M.r.CaptchaToken]: r
                                }
                            }
                        });
                        if (!s.ok) {
                            let t;
                            try {
                                t = await s.json()
                            } catch (t) {
                                throw Error(s.status.toString())
                            }
                            throw new V(s.status, t)
                        }
                        let o = await s.text();
                        try {
                            return JSON.parse(o)
                        } catch (t) {
                            return o
                        }
                    }, this.config = async t => this.fetcher("/config/common", {
                        deviceId: t
                    }), this.requestSmsCode = async (t, e, i) => {
                        try {
                            return await this.fetcher("/signup", {
                                deviceId: t,
                                captchaToken: i,
                                method: "POST",
                                body: JSON.stringify({
                                    phone: e
                                })
                            }), {
                                status: "success"
                            }
                        } catch (t) {
                            return Q(t, "/signup")
                        }
                    }, this.resendSmsCode = async (t, e, i) => {
                        await this.fetcher("/verification-codes/sms", {
                            deviceId: t,
                            captchaToken: i,
                            method: "POST",
                            body: JSON.stringify({
                                scopes: ["SIGNIN"],
                                phone: e
                            })
                        })
                    }, this.signin = async (t, e, i) => {
                        try {
                            let a = await this.fetcher("/signin", {
                                deviceId: t,
                                method: "POST",
                                body: JSON.stringify({
                                    phone: e,
                                    code: i
                                })
                            });
                            return {
                                status: "success",
                                data: a
                            }
                        } catch (t) {
                            return Q(t, "/signin")
                        }
                    }, this.verificationCode = async (t, e) => {
                        if (!J.eG) try {
                            return (await this.fetcher("/verification-codes/".concat(e), {
                                deviceId: t
                            })).code
                        } catch (t) {
                            return
                        }
                    }, this.waitlistStatus = async (t, e) => {
                        let {
                            userId: i,
                            token: a
                        } = e;
                        try {
                            return await this.fetcher("/waiting-list/current", {
                                deviceId: t,
                                token: B(i, a)
                            })
                        } catch (t) {
                            return q(t, "/waiting-list/current"), {
                                state: t instanceof V && 404 === t.statusCode ? P.y_.NotFound : P.y_.Error
                            }
                        }
                    }, this.joinWaitlist = async (t, e) => {
                        let {
                            email: i,
                            country: a,
                            userId: r,
                            token: n
                        } = e;
                        try {
                            return await this.fetcher("/waiting-list/join", {
                                method: "POST",
                                deviceId: t,
                                token: B(r, n),
                                body: JSON.stringify({
                                    email: i,
                                    country: a
                                })
                            }), {
                                status: "success"
                            }
                        } catch (t) {
                            return Q(t, "/waiting-list/join")
                        }
                    }, this.saveMarketingSettings = async (t, e) => {
                        let {
                            userId: i,
                            token: a
                        } = e;
                        try {
                            await this.fetcher("/user/current/settings", {
                                method: "PUT",
                                deviceId: t,
                                token: B(i, a),
                                body: JSON.stringify({
                                    notifications: [{
                                        id: "marketing",
                                        email: !0,
                                        push: !0
                                    }, {
                                        id: "offers",
                                        email: !0,
                                        push: !0
                                    }]
                                })
                            })
                        } catch (t) {
                            Q(t, "/user/current/settings")
                        }
                    }
                }
            }
            let tt = new H;
            var te = i(6857),
                ti = i(92675);
            let ta = () => {
                    let t = (0, te.i)();
                    return (0, r.useCallback)(e => t.show((0, a.jsx)(ti.u, {
                        variant: "error",
                        children: (0, a.jsx)(ti.u.Title, {
                            children: e
                        })
                    })), [t])
                },
                tr = () => {
                    let t = (0, w.T)(),
                        e = ta();
                    return (0, r.useCallback)(i => {
                        let a = t("widget.waitlist.something.went.wrong");
                        "code-is-invalid" === i && (a = t("widget.waitlist.user.information.is.incorrect")), "email-is-used" === i && (a = t("widget.waitlist.error.email.is.used")), "phone-is-blocked" === i && (a = t("widget.waitlist.error.phone.is.blocked")), e(a)
                    }, [t, e])
                };
            var tn = i(92032),
                ts = i(23279),
                to = i.n(ts);
            let tl = t => {
                    let {
                        email: e
                    } = (0, O.tk)(), i = (0, O.A4)(), n = (0, w.T)(), [s, o] = (0, r.useState)(!0), l = (0, r.useCallback)(to()(t => o((0, L.vV)(t)), 1e3), []);
                    return (0, a.jsx)(tn.I, {
                        label: n("widget.waitlist.email"),
                        value: e,
                        name: "email",
                        type: "email",
                        "aria-invalid": !!(e && !s),
                        onClear: () => i({
                            email: ""
                        }),
                        onChange: t => {
                            let e = t.currentTarget.value;
                            i({
                                email: e
                            }), l(e)
                        },
                        ...t
                    })
                },
                {
                    publicRuntimeConfig: {
                        waitlistCaptchaKey: tc,
                        isHCaptchaEnabled: tu
                    }
                } = (0, p.i)(),
                td = {
                    legalDocumentId: "fbfd9742-4739-4c5c-b1ae-1a610458f2c6",
                    type: Z._i.Legal
                },
                th = (0, g.ZP)(F.r).withConfig({
                    componentId: "sc-cab35828-0"
                })({
                    textDecoration: "underline",
                    transition: o.WU.transition.text,
                    "&:hover": {
                        color: o.WU.color.accent
                    }
                }),
                tg = () => {
                    let t = (0, w.T)(),
                        [e, i] = (0, r.useState)({
                            status: "idle"
                        }),
                        {
                            countryCode: s,
                            deviceId: o,
                            email: l,
                            isMarketingCommsAccepted: u,
                            phoneCountryCode: g,
                            phoneNumber: p = "",
                            isPrivacyPolicyAccepted: m
                        } = (0, O.tk)(),
                        y = "loading" === e.status,
                        {
                            trackEvent: b
                        } = (0, z.z$)(),
                        {
                            setPhone: C,
                            setPhoneCode: k
                        } = (0, U.z)(),
                        j = (0, O.A4)(),
                        S = tr(),
                        A = (0, f.J)(),
                        N = (0, r.useCallback)(async t => {
                            let {
                                phone: e,
                                captchaToken: i
                            } = t, a = await tt.requestSmsCode(o, e, i);
                            if ("error" === a.status) {
                                var r;
                                return b({
                                    action: "Waitlist_Fail",
                                    component_name: "expansion-waitlist-widget",
                                    vertical: "Retail",
                                    payload: {
                                        error: null !== (r = a.reason) && void 0 !== r ? r : "error"
                                    }
                                }), S(a.reason), {
                                    status: "idle"
                                }
                            }
                            return C(p), k(g), j({
                                captchaToken: i,
                                step: P.ZO.Otp,
                                otpCode: ""
                            }), b({
                                action: "Waitlist_Enter",
                                component_name: "expansion-waitlist-widget",
                                vertical: "Retail"
                            }), J.eG || j({
                                otpCode: await tt.verificationCode(o, e)
                            }), {
                                status: "idle"
                            }
                        }, [o, p, g, b, C, k, j, S]),
                        {
                            isPhoneValid: T,
                            buttonEnabled: _,
                            captchaRef: I,
                            handleCaptchaLoad: F,
                            handleCountryCodeChange: Z,
                            handleSubmit: M
                        } = (0, E.e)({
                            countryCode: g,
                            setCountryCode: t => {
                                j({
                                    phoneCountryCode: t
                                }), i({
                                    status: "idle"
                                })
                            },
                            link: G.li.RetailOpenApp,
                            phoneNumber: p,
                            setFormState: i,
                            formState: e,
                            requestFunc: N
                        }),
                        X = (0, r.useRef)(null),
                        B = new x.C(t("widget.waitlist.revolut.privacy.policy.agreement")).format({
                            link: t => (0, a.jsx)(th, {
                                target: "_blank",
                                value: td,
                                children: t.join(" ")
                            }, "link")
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(v.x, {
                            use: "h2",
                            variant: "h3",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: new x.C(t("widget.waitlist.join.the.waitlist")).format({
                                country: A(s)
                            })
                        }), (0, a.jsx)(v.x, {
                            use: "p",
                            variant: "subtitle1",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: t("widget.waitlist.user.information")
                        }), (0, a.jsxs)(n.g, {
                            id: "expansion-waitlist-form",
                            onSubmit: M,
                            space: {
                                all: "s-16",
                                xxl: "s-24"
                            },
                            use: "form",
                            width: "100%",
                            children: [(0, a.jsx)(tl, {
                                disabled: y
                            }), (0, a.jsx)(R.s, {
                                ref: X,
                                countryCode: g,
                                onCountryCodeChange: Z,
                                phoneNumber: p,
                                onPhoneNumberChange: t => {
                                    j({
                                        phoneNumber: t
                                    }), i({
                                        status: "idle"
                                    })
                                },
                                disabled: y,
                                invalid: !!(p && !T)
                            }), (0, a.jsxs)(c.U, {
                                use: "label",
                                gap: "s-16",
                                align: "center",
                                style: {
                                    cursor: "pointer"
                                },
                                children: [(0, a.jsx)(D.X, {
                                    disabled: y,
                                    "aria-label": t("widget.waitlist.revolut.privacy.policy.agreement"),
                                    checked: m,
                                    onChange: t => j({
                                        isPrivacyPolicyAccepted: t.target.checked
                                    })
                                }), (0, a.jsx)(D.X.Label, {
                                    children: B
                                })]
                            }), (0, a.jsx)(D.X, {
                                disabled: y,
                                "aria-label": t("widget.waitlist.marketing.communicatins.agreement"),
                                checked: u,
                                onChange: t => j({
                                    isMarketingCommsAccepted: t.target.checked
                                }),
                                children: (0, a.jsx)(D.X.Label, {
                                    children: t("widget.waitlist.marketing.communicatins.agreement")
                                })
                            })]
                        }), tu && (0, a.jsx)(W.m, {
                            ref: I,
                            onLoad: F,
                            captchaKey: tc
                        }), (0, a.jsx)(d.L, {
                            height: "s-16"
                        }), (0, a.jsx)(h.z, {
                            form: "expansion-waitlist-form",
                            pending: y,
                            type: "submit",
                            variant: "black",
                            disabled: !T || !m || !(0, L.vV)(l) || y || !_,
                            onClick: M,
                            children: t("widget.waitlist.join.now")
                        })]
                    })
                };
            var tp = i(18972),
                tw = i(31072),
                tf = i(87688),
                tm = i(29339),
                tv = i(1332),
                tx = i(56718);
            let ty = t => {
                    let [e, i] = (0, r.useState)(t), a = (0, r.useCallback)(() => i(t), [t]);
                    return (0, tx.Y)(() => i(e - 1), e < 0 ? null : 1e3), {
                        remainingTime: e,
                        resetRemainingTime: a
                    }
                },
                tb = t => {
                    let {
                        onClick: e
                    } = t, i = (0, w.T)(), {
                        remainingTime: n,
                        resetRemainingTime: s
                    } = ty(30), o = (0, r.useCallback)(() => {
                        e(), s()
                    }, [e, s]);
                    return n < 0 ? (0, a.jsx)(b.A, {
                        onClick: o,
                        children: i("widget.waitlist.resend.code")
                    }) : (0, a.jsx)(v.x, {
                        color: "grey-tone-50",
                        children: new x.C(i("widget.waitlist.resent.code.in.time")).format({
                            time: "00:".concat(n.toString().padStart(2, "0"))
                        })
                    })
                },
                tC = () => {
                    let {
                        query: t
                    } = (0, C.useRouter)();
                    return t.r
                },
                tk = (t, e) => {
                    var i;
                    let a = (0, tw.S)(t, e);
                    return null !== (i = null == a ? void 0 : a.formatInternational()) && void 0 !== i ? i : t
                },
                tj = t => (0, tm.In)("/api/invitation", {
                    method: "post",
                    body: JSON.stringify({
                        referralCode: t
                    })
                }),
                tS = t => {
                    let {
                        navigateToGetTheApp: e
                    } = t, i = (0, w.T)(), [n, s] = (0, r.useState)(!1), {
                        otpCode: o,
                        deviceId: l,
                        email: c,
                        countryCode: u,
                        isMarketingCommsAccepted: g,
                        captchaToken: p,
                        referralCodeSupport: f
                    } = (0, O.tk)(), m = tC(), {
                        phone: y,
                        phoneCode: b
                    } = (0, U.z)(), C = (0, O.A4)(), [k, j] = (0, r.useState)(""), {
                        trackEvent: S
                    } = (0, z.z$)(), A = "+".concat((0, tf.G)(b)).concat(y), N = tr(), T = (0, r.useCallback)(t => S({
                        action: "Waitlist_Submit",
                        component_name: "expansion-waitlist-widget",
                        vertical: "Retail",
                        payload: {
                            status: t
                        }
                    }), [S]), _ = (0, r.useCallback)(t => {
                        S({
                            action: "Waitlist_Fail",
                            component_name: "expansion-waitlist-widget",
                            vertical: "Retail",
                            payload: {
                                error: t
                            }
                        }), N(t)
                    }, [S, N]), I = (0, r.useCallback)(async (t, e) => {
                        if (m) try {
                            let i = await tj(m);
                            await (0, tv.ho)({
                                component: tv.sN.Waitlist,
                                phone: A,
                                referralCode: m,
                                inviteId: i,
                                token: B(t, e)
                            })
                        } catch (t) {
                            (0, X.D)(tv.sN.Waitlist, t)
                        }
                    }, [A, m]), D = (0, r.useCallback)(async (t, e) => {
                        try {
                            let i = await tt.joinWaitlist(l, {
                                email: c,
                                country: u,
                                userId: t,
                                token: e
                            });
                            if (g && await tt.saveMarketingSettings(l, {
                                    userId: t,
                                    token: e
                                }), "success" === i.status) {
                                S({
                                    action: "Waitlist_NewUserJoined",
                                    component_name: "expansion-waitlist-widget",
                                    vertical: "Retail"
                                }), T("new");
                                let i = await tt.waitlistStatus(l, {
                                        userId: t,
                                        token: e
                                    }),
                                    a = null == i ? void 0 : i.referralCode;
                                f && await I(t, e), C({
                                    referralCode: a,
                                    step: P.ZO.Done
                                })
                            } else _(i.reason)
                        } catch (t) {
                            _("error")
                        }
                    }, [u, l, c, _, g, f, S, I, T, C]), E = (0, r.useCallback)(async (t, i) => {
                        let a = await tt.waitlistStatus(l, {
                            userId: t,
                            token: i
                        });
                        a.state === P.y_.Active && (T("active"), e()), a.state === P.y_.Pending && (T("pending"), C({
                            step: P.ZO.Already,
                            referralCode: a.referralCode,
                            countryCode: a.country
                        })), a.state === P.y_.NotFound && await D(t, i), a.state === P.y_.Error && _("error")
                    }, [l, T, e, C, D, _]), R = (0, r.useCallback)(async t => {
                        clearTimeout(W.current), s(!0);
                        try {
                            let i = await tt.signin(l, A, t);
                            if ("error" === i.status) {
                                var e;
                                _(null !== (e = i.reason) && void 0 !== e ? e : "error");
                                return
                            }
                            let a = i.data.token.accessToken,
                                r = i.data.token.ownerId,
                                n = i.data.user.state;
                            (n === P.Vp.Confirmed || n === P.Vp.Created) && await D(r, a), n === P.Vp.Waiting && await E(r, a)
                        } catch (t) {
                            _("error")
                        } finally {
                            s(!1)
                        }
                    }, [l, A, D, _, E]), W = (0, r.useRef)(), F = (0, r.useCallback)(t => {
                        let e = t.trim();
                        j(e), 6 === e.length && (clearTimeout(W.current), W.current = setTimeout(() => R(e), 500))
                    }, [R]), Z = (0, r.useCallback)(async () => {
                        j(""), await tt.resendSmsCode(l, A, p), J.eG || C({
                            otpCode: await tt.verificationCode(l, A)
                        })
                    }, [l, A, p, C]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(v.x, {
                            use: "h2",
                            variant: "h3",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: i("widget.waitlist.verify.phone.number")
                        }), (0, a.jsx)(v.x, {
                            use: "p",
                            variant: "subtitle1",
                            textAlign: {
                                all: "start",
                                md: "center"
                            },
                            width: "100%",
                            children: new x.C(i("widget.waitlist.code.sent.to")).format({
                                phone: tk(A, b)
                            })
                        }), !J.eG && o && (0, a.jsx)(v.x, {
                            color: "accent",
                            onClick: () => j(o),
                            children: o
                        }), (0, a.jsx)(tp.E, {
                            "aria-label": "code-input",
                            autoFocus: !0,
                            mask: !0,
                            onChange: F,
                            otp: !0,
                            size: 6
                        }), (0, a.jsx)(tb, {
                            onClick: Z
                        }), (0, a.jsx)(d.L, {
                            height: "s-16"
                        }), (0, a.jsx)(h.z, {
                            disabled: 6 !== k.length || n,
                            onClick: () => R(k),
                            pending: n,
                            variant: "black",
                            children: i("widget.waitlist.verify")
                        })]
                    })
                };
            var tA = i(81758),
                tN = i(49181);
            let tO = t => {
                    let e = (0, tN._)(),
                        {
                            data: i
                        } = (0, tA.ZP)([e], () => tt.config(e), {
                            keepPreviousData: !0
                        });
                    return (null == i ? void 0 : i["countries.supported"].includes(t)) && !(null == i ? void 0 : i["countries.waiting_list"].includes(t))
                },
                tP = t => {
                    let {
                        onClose: e,
                        navigateToGetTheApp: i
                    } = t, {
                        step: s,
                        countryCode: o
                    } = (0, O.tk)(), l = tO(o);
                    return (0, r.useEffect)(() => {
                        l && i()
                    }, [l, i]), (0, a.jsxs)(n.g, {
                        align: {
                            all: "start",
                            md: "center"
                        },
                        marginX: {
                            all: 0,
                            md: "auto"
                        },
                        maxWidth: {
                            all: "420px",
                            xxl: "504px"
                        },
                        space: {
                            all: "s-16",
                            md: "s-24",
                            xxl: "s-32"
                        },
                        width: "100%",
                        children: [s === P.ZO.Initial && (0, a.jsx)(tg, {}), s === P.ZO.Otp && (0, a.jsx)(tS, {
                            navigateToGetTheApp: i
                        }), (s === P.ZO.Done || s === P.ZO.Already) && (0, a.jsx)(I, {
                            onSubmit: e
                        })]
                    })
                }
        },
        64230: function(t, e, i) {
            i.d(e, {
                e: function() {
                    return h
                }
            });
            var a = i(67294),
                r = i(45630),
                n = i(56248),
                s = i(87688),
                o = i(23279),
                l = i.n(o),
                c = i(62052),
                u = i(26832);
            let {
                publicRuntimeConfig: {
                    isHCaptchaEnabled: d
                }
            } = (0, c.i)(), h = t => {
                let {
                    countryCode: e,
                    phoneNumber: i,
                    link: o,
                    formState: c,
                    setCountryCode: h,
                    setFormState: g,
                    requestFunc: p
                } = t, w = (0, a.useRef)(null), f = (0, a.useRef)(null), {
                    linkContext: m
                } = (0, u.z$)(), [v, x] = (0, a.useState)(!1), y = !(0, r.A)(), [b, C] = (0, a.useState)(!0), k = y && "" !== i && b, j = (0, a.useCallback)(l()(t => C(t), 700), []);
                (0, a.useEffect)(() => {
                    j((0, n.y)("+".concat((0, s.G)(e)).concat(i)))
                }, [e, i, j]);
                let S = (0, a.useCallback)(async () => {
                        var t, a, r;
                        if (!b || d && !(null === (t = f.current) || void 0 === t ? void 0 : t.isLoaded) || "idle" !== c.status) return;
                        if ("" === i) return null === (a = w.current) || void 0 === a ? void 0 : a.focus();
                        g({
                            status: "loading"
                        });
                        let n = "";
                        if (d && f.current) try {
                            n = await (null === (r = f.current) || void 0 === r ? void 0 : r.getToken())
                        } catch (t) {
                            return g({
                                status: "error",
                                event: "captcha-error"
                            })
                        }
                        let l = await (null == m ? void 0 : m.createLink(o, {
                            type: "SMS"
                        }));
                        return g(await p({
                            captchaToken: n,
                            phone: "+".concat((0, s.G)(e)).concat(i),
                            getAppUrl: l
                        }))
                    }, [e, c.status, b, o, m, i, p, g]),
                    A = (0, a.useCallback)(t => (t.preventDefault(), x(!0), S()), [S]),
                    N = (0, a.useCallback)(async () => {
                        v && await S()
                    }, [v, S]),
                    O = (0, a.useCallback)(t => {
                        t && h(t), setTimeout(() => {
                            var t;
                            return null === (t = w.current) || void 0 === t ? void 0 : t.focus()
                        })
                    }, [h]);
                return (0, a.useMemo)(() => ({
                    isPhoneValid: b,
                    captchaRef: f,
                    buttonEnabled: k,
                    handleSubmit: A,
                    handleCaptchaLoad: N,
                    handleCountryCodeChange: O
                }), [b, f, k, A, N, O])
            }
        },
        56718: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return r
                }
            });
            var a = i(67294);
            let r = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    i = (0, a.useRef)(t);
                (0, a.useEffect)(() => {
                    i.current = t
                }, [t]), (0, a.useEffect)(() => {
                    if (null !== e) {
                        let t = setInterval(() => i.current(), e);
                        return () => clearInterval(t)
                    }
                }, [e])
            }
        },
        49988: function(t, e, i) {
            var a, r;
            i.d(e, {
                r: function() {
                    return a
                }
            }), (r = a || (a = {})).BrowserApplication = "x-browser-application", r.CaptchaToken = "X-Captcha-Token", r.ClientVersion = "x-client-version", r.DeviceId = "x-device-id", r.GeoLocation = "x-client-geo-location", r.UserAgent = "user-agent", r.Authorization = "Authorization"
        },
        76459: function(t, e, i) {
            i.d(e, {
                C: function() {
                    return n
                }
            });
            var a = i(13695),
                r = i(28127);
            class n {
                constructor(t, e, i, n) {
                    this.message = t, this.locales = e, this.overrideFormats = i, this.opts = n, this.format = t => {
                        try {
                            return new a.ZP(this.message, this.locales, this.overrideFormats, this.opts).format(t)
                        } catch (t) {
                            return (0, r.D)("IntlMessageFormatSafe", t), this.message
                        }
                    }
                }
            }
        },
        1332: function(t, e, i) {
            i.d(e, {
                Ah: function() {
                    return u
                },
                ho: function() {
                    return c
                },
                sN: function() {
                    return s
                }
            });
            var a, r, n, s, o = i(49988),
                l = i(28127);
            let c = async t => {
                    let {
                        component: e,
                        phone: i,
                        referralCode: a,
                        inviteId: r,
                        captchaToken: n,
                        token: s
                    } = t;
                    try {
                        if (!a || !n && !s) return {
                            status: "error"
                        };
                        let t = await fetch("/api/v2/invitation/accept", {
                            method: "post",
                            headers: { ...s && {
                                    [o.r.Authorization]: "Basic ".concat(s)
                                },
                                ...n && {
                                    [o.r.CaptchaToken]: n
                                }
                            },
                            body: JSON.stringify({
                                phone: i,
                                referralCode: a,
                                ...r && {
                                    inviteId: r
                                }
                            })
                        });
                        if (t.ok) return {
                            status: "success"
                        };
                        return await g(e, t, a)
                    } catch (t) {
                        return (0, l.D)(e, t, {
                            extra: {
                                promoCode: a
                            }
                        }), {
                            status: "error"
                        }
                    }
                },
                u = async t => {
                    let {
                        component: e,
                        phone: i,
                        urlQuery: a,
                        promoCode: r,
                        captchaToken: n,
                        getAppUrl: s
                    } = t;
                    try {
                        let t = await fetch("/api/partnerships", {
                            method: "POST",
                            headers: { ...n && {
                                    [o.r.CaptchaToken]: n
                                },
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                phone: i,
                                urlQuery: a,
                                promoCode: r,
                                ...s && {
                                    getAppUrl: s
                                }
                            })
                        });
                        if (t.ok) return {
                            status: "success"
                        };
                        return await g(e, t, r)
                    } catch (t) {
                        return (0, l.D)(e, t, {
                            extra: {
                                promoCode: r
                            }
                        }), {
                            status: "error"
                        }
                    }
                };
            (a = n || (n = {}))[a.PromotionExpired = 1100] = "PromotionExpired", a[a.PromotionExhausted = 1101] = "PromotionExhausted", a[a.PromotionNotFound = 1102] = "PromotionNotFound", a[a.ReferralCodeNotFound = 1103] = "ReferralCodeNotFound", a[a.AnotherPromotionUsed = 1104] = "AnotherPromotionUsed", a[a.PromotionNotApplicable = 1105] = "PromotionNotApplicable", a[a.PromotionInactive = 1106] = "PromotionInactive", a[a.IgnoredPromotionNotAllowed = 1110] = "IgnoredPromotionNotAllowed", a[a.ParticipationTerminated = 1002] = "ParticipationTerminated";
            let d = Object.fromEntries(Object.entries(n).map(t => {
                    let [e, i] = t;
                    return [i, e]
                })),
                h = t => {
                    let {
                        code: e
                    } = t;
                    return Object.values(n).includes(e)
                };
            (r = s || (s = {})).GetTheApp = "get-the-app", r.Invitation = "invitation", r.Waitlist = "expansion-waitlist-referral";
            let g = async (t, e, i) => {
                let a;
                if (429 === e.status) return {
                    status: "error",
                    event: "too-many-requests"
                };
                let r = await e.text();
                try {
                    a = JSON.parse(r)
                } catch (t) {
                    return {
                        status: "error",
                        event: "json-parse-error"
                    }
                }
                return a && h(a) ? {
                    status: "error",
                    event: "promo-code-error",
                    extra: {
                        promoCode: i,
                        error: "".concat(a.code, " ").concat(d[a.code]),
                        errorMessage: a.message
                    }
                } : ((0, l.D)(t, Error("Unhandled server response for ".concat(e.url)), {
                    extra: {
                        promoCode: i,
                        ...a
                    }
                }), {
                    status: "error"
                })
            }
        }
    }
]);
//# sourceMappingURL=4912.1c9bf50fc942b65b.js.map