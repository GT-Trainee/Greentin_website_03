! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b6bfe399-616e-4bed-af7c-79a455eaa88f", e._sentryDebugIdIdentifier = "sentry-dbid-b6bfe399-616e-4bed-af7c-79a455eaa88f")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2877], {
        27077: function(e, r, t) {
            t.d(r, {
                z: function() {
                    return h
                }
            });
            var o = t(85893),
                n = t(67294),
                i = t(22674),
                a = t(20010),
                l = t(49363),
                c = t(16678),
                d = t(26832),
                u = t(6484),
                s = t(36598),
                f = t(89463);
            let g = (0, l.ZP)(a.z).withConfig({
                    componentId: "sc-dd364494-0"
                })(f._F.subtitle2, e => {
                    let {
                        height: r = "auto",
                        maxWidth: t,
                        width: o = "min-content"
                    } = e;
                    return {
                        height: r,
                        width: o,
                        maxWidth: null != t ? t : "240px",
                        paddingLeft: i.WU.size.s24,
                        paddingRight: i.WU.size.s24,
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        "&:focus-visible": {
                            boxShadow: "0 0 0 0.125rem rgb(".concat(i.WU.colorChannel.blue, " / 0.5) inset, 0 0 0 0.225rem ").concat(i.WU.color.background, " inset")
                        },
                        ["@media ".concat(i.WU.media.md)]: {
                            maxWidth: null != t ? t : "440px"
                        },
                        ["@media ".concat(i.WU.media.lg)]: {
                            maxWidth: null != t ? t : "720px"
                        },
                        ["@media ".concat(i.WU.media.xxl)]: {
                            maxWidth: null != t ? t : "1024px",
                            paddingLeft: i.WU.size.s32,
                            paddingRight: i.WU.size.s32,
                            paddingTop: "14px",
                            paddingBottom: "14px"
                        }
                    }
                }, (0, c.bU)({
                    variants: {
                        default: {
                            backgroundColor: i.WU.color.background,
                            color: i.WU.color.foreground,
                            "&:hover": {
                                backgroundColor: i.WU.color.background,
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: i.WU.color.background,
                                opacity: .75
                            },
                            "&:disabled": {
                                backgroundColor: i.WU.color.background,
                                color: i.WU.color.grey50
                            }
                        },
                        text: {
                            "&:hover": {
                                backgroundColor: i.WU.color.greyTone2,
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: i.WU.color.greyTone2,
                                opacity: .75
                            },
                            "&:disabled": {
                                color: i.WU.color.grey50
                            }
                        },
                        primary: {
                            backgroundColor: i.WU.color.foreground,
                            color: i.WU.color.background,
                            "&:hover": {
                                backgroundColor: i.WU.color.foreground,
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: i.WU.color.foreground,
                                opacity: .75
                            },
                            "&:disabled": {
                                backgroundColor: i.WU.color.foreground,
                                color: i.WU.color.grey50
                            }
                        },
                        secondary: {
                            backgroundColor: "transparent",
                            color: i.WU.color.foreground,
                            borderColor: i.WU.color.foreground,
                            borderStyle: "solid",
                            borderWidth: 2,
                            "&:hover": {
                                backgroundColor: "transparent",
                                opacity: .85
                            },
                            "&:active": {
                                backgroundColor: "transparent",
                                opacity: .75
                            },
                            "&:disabled": {
                                backgroundColor: "transparent",
                                borderColor: i.WU.color.grey50,
                                color: i.WU.color.grey50
                            }
                        }
                    }
                })),
                h = (0, n.forwardRef)((e, r) => {
                    let {
                        gaEvent: t,
                        link: n,
                        query: i,
                        onClick: a,
                        children: l,
                        ...c
                    } = e, {
                        trackLink: f
                    } = (0, d.z$)(), h = e => {
                        (0, u.mf)(a) && a(e), f(e, t, n)
                    };
                    return n ? (0, o.jsx)(s._, {
                        value: n,
                        query: i,
                        children: (0, o.jsx)(g, {
                            use: "a",
                            size: "sm",
                            ref: r,
                            onClick: h,
                            ...c,
                            children: l
                        })
                    }) : (0, o.jsx)(g, {
                        size: "sm",
                        ref: r,
                        onClick: h,
                        ...c,
                        children: l
                    })
                });
            h.displayName = "Button"
        },
        7043: function(e, r, t) {
            t.d(r, {
                E: function() {
                    return m
                }
            });
            var o = t(85893),
                n = t(67294),
                i = t(25675),
                a = t.n(i),
                l = t(9008),
                c = t.n(l),
                d = t(14743),
                u = t(94779),
                s = t(73307),
                f = t(2868);
            let g = function(e, r, t) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 75,
                        i = (0, s.U)();
                    return (0, n.useMemo)(() => ({
                        defaultSrcSet: (0, f.gA)(e, r, o, t, i),
                        sources: (0, f.f$)(r).map(r => ({
                            srcSet: (0, f.gA)(e, r, o, t, i),
                            mimeType: (0, f.bh)(r)
                        }))
                    }), [i, t, r, e, o])
                },
                h = (0, n.forwardRef)((e, r) => {
                    var t, n;
                    let {
                        image: a,
                        originalCodecName: l,
                        quality: d,
                        optimisedResources: u,
                        priority: s,
                        sizes: f,
                        ...h
                    } = e, {
                        value: p,
                        alt: m
                    } = a, {
                        defaultSrcSet: b,
                        sources: x
                    } = g(p, l, u, d), {
                        props: {
                            srcSet: v,
                            src: y,
                            ...C
                        }
                    } = (0, i.getImageProps)({
                        alt: null != m ? m : "",
                        src: p,
                        priority: s,
                        sizes: f,
                        unoptimized: !0,
                        ...h
                    });
                    return (0, o.jsxs)(o.Fragment, {
                        children: [s && (0, o.jsx)(c(), {
                            children: (0, o.jsx)("link", {
                                rel: "preload",
                                as: "image",
                                imageSrcSet: null !== (n = null === (t = x[0]) || void 0 === t ? void 0 : t.srcSet) && void 0 !== n ? n : b,
                                imageSizes: f,
                                fetchpriority: "high"
                            })
                        }), (0, o.jsxs)("picture", {
                            children: [x.map(e => {
                                let {
                                    srcSet: r,
                                    mimeType: t
                                } = e;
                                return (0, o.jsx)("source", {
                                    srcSet: r,
                                    type: t
                                }, t)
                            }), (0, o.jsx)("img", {
                                ref: r,
                                src: p,
                                srcSet: b,
                                ...C
                            })]
                        })]
                    })
                });
            h.displayName = "OptimisedImage";
            let p = (0, n.forwardRef)((e, r) => {
                var t;
                let {
                    image: n,
                    ...i
                } = e, l = (0, d.e)();
                return (0, o.jsx)(a(), {
                    ref: r,
                    alt: null !== (t = n.alt) && void 0 !== t ? t : "",
                    loader: l,
                    src: n.value,
                    ...i
                })
            });
            p.displayName = "ImgProxyImage";
            let m = (0, n.forwardRef)((e, r) => {
                var t;
                let {
                    image: n,
                    ...i
                } = e, a = null !== (t = n.codecName) && void 0 !== t ? t : (0, u.Nb)(n.value);
                return a && n.optimisedResources ? (0, o.jsx)(h, {
                    ref: r,
                    originalCodecName: a,
                    optimisedResources: n.optimisedResources,
                    image: n,
                    ...i
                }) : (0, o.jsx)(p, {
                    ref: r,
                    image: n,
                    ...i
                })
            });
            m.displayName = "Image"
        },
        2868: function(e, r, t) {
            t.d(r, {
                Q4: function() {
                    return c
                },
                bh: function() {
                    return g
                },
                f$: function() {
                    return f
                },
                gA: function() {
                    return s
                }
            });
            var o = t(11881),
                n = t(62052);
            let i = [1080, 2048, 3840],
                {
                    publicRuntimeConfig: a
                } = (0, n.i)(),
                l = (e, r, t) => "https://".concat(a.websiteDomain, "/_next/image?url=").concat(encodeURIComponent(e), "&w=").concat(t, "&q=").concat(r),
                c = (e, r, t, o) => "/_next/image-asset/w:".concat(t, "/q:").concat(r > 80 ? 90 : 75, "/").concat(encodeURIComponent(e)).concat(o ? "@".concat(o) : ""),
                d = (e, r, t, o) => {
                    var n;
                    return null === (n = e.find(e => {
                        let {
                            optimisationParams: n
                        } = e;
                        return n.width === o && n.codecName === r && n.quality === t
                    })) || void 0 === n ? void 0 : n.value
                },
                u = (e, r, t, o, n, i) => d(n, r, t, o) || (i ? l(e, t, o) : c(e, t, o, r)),
                s = (e, r, t, o, n) => {
                    if (!i) throw Error("Device sizes is not defined in image config");
                    return i.map(i => {
                        let a = u(e, r, t, i, o, n);
                        return "".concat(a, " ").concat(i, "w")
                    }).join(", ")
                },
                f = e => {
                    switch (e) {
                        case o.OC.Png:
                        case o.OC.Jpeg:
                        case o.OC.Jpg:
                            return [o.OC.Webp];
                        default:
                            return []
                    }
                },
                g = e => {
                    switch (e) {
                        case o.OC.Png:
                            return "image/png";
                        case o.OC.Jpeg:
                        case o.OC.Jpg:
                            return "image/jpeg";
                        case o.OC.Webp:
                            return "image/webp";
                        default:
                            return "image/".concat(e)
                    }
                }
        },
        14743: function(e, r, t) {
            t.d(r, {
                e: function() {
                    return c
                }
            });
            var o = t(62052),
                n = t(2868),
                i = t(73307);
            let {
                publicRuntimeConfig: a
            } = (0, o.i)();

            function l(e) {
                let {
                    src: r,
                    width: t,
                    quality: o = 75
                } = e;
                return (0, n.Q4)(r, o, t)
            }
            let c = () => (0, i.U)() ? e => {
                let {
                    src: r,
                    width: t,
                    quality: o = 75
                } = e;
                return "https://".concat(a.websiteDomain, "/_next/image?url=").concat(encodeURIComponent(r), "&w=").concat(t, "&q=").concat(o)
            } : l
        },
        50663: function(e, r, t) {
            t.d(r, {
                CD: function() {
                    return w
                },
                Ty: function() {
                    return W
                },
                bh: function() {
                    return v
                },
                gV: function() {
                    return S
                },
                tJ: function() {
                    return n
                },
                zT: function() {
                    return _
                }
            });
            var o, n, i = t(85893),
                a = t(67294),
                l = t(59467),
                c = t(22674),
                d = t(27061),
                u = t(76335),
                s = t(939),
                f = t(37903),
                g = t(15059),
                h = t(47311),
                p = t(11163),
                m = t(49363),
                b = t(36598),
                x = t(16125);
            (o = n || (n = {})).A = "a", o.B = "b", o.Blockquote = "blockquote", o.Br = "br", o.Em = "em", o.H1 = "h1", o.H2 = "h2", o.H3 = "h3", o.H4 = "h4", o.H5 = "h5", o.H6 = "h6", o.I = "i", o.Li = "li", o.Ol = "ol", o.P = "p", o.S = "s", o.Small = "small", o.Strong = "strong", o.Table = "table", o.Tbody = "tbody", o.Td = "td", o.Th = "th", o.Thead = "thead", o.Tr = "tr", o.U = "u", o.Ul = "ul";
            let v = (e, r) => {
                    let {
                        attribs: t
                    } = e;
                    return t && (t[r] || t[r.toLowerCase()])
                },
                y = (0, m.ZP)(l.r).withConfig({
                    componentId: "sc-814ad180-0"
                })({
                    "&:hover": {
                        color: c.WU.color.accent
                    }
                }),
                C = e => {
                    let {
                        locale: r,
                        defaultLocale: t,
                        customReplace: o,
                        allowedTags: l = Object.values(n),
                        trim: c = !0
                    } = e;
                    return function(e) {
                        let n = e.name,
                            d = e.children && (0, h.du)(e.children, {
                                trim: c,
                                replace: C({
                                    locale: r,
                                    defaultLocale: t,
                                    customReplace: o,
                                    allowedTags: l,
                                    trim: c
                                })
                            });
                        if (o) {
                            let r = o(e, d);
                            if (r) return r
                        }
                        if ("text" !== String(e.type)) {
                            if (!l.includes(n)) return (0, i.jsx)(i.Fragment, {
                                children: d
                            });
                            if (e.attribs && "a" === n) {
                                var u, s, f;
                                if ((null === (u = e.attribs.href) || void 0 === u ? void 0 : u.toLowerCase().startsWith("javascript:")) || (null === (s = e.attribs.href) || void 0 === s ? void 0 : s.toLowerCase().startsWith("data:"))) return (0, i.jsx)(i.Fragment, {
                                    children: d
                                });
                                if (null === (f = e.attribs.href) || void 0 === f ? void 0 : f.startsWith("mailto:")) return (0, i.jsx)(y, {
                                    color: "inherit",
                                    textDecoration: "underline",
                                    href: e.attribs.href,
                                    children: d
                                });
                                let o = v(e, "data-location-type"),
                                    n = v(e, "data-location-legalDocumentId"),
                                    a = v(e, "data-location-locationId"),
                                    l = v(e, "data-location-locale");
                                if (o === x._i.Legal && n) return (0, i.jsx)(b._, {
                                    value: {
                                        type: x._i.Legal,
                                        legalDocumentId: n
                                    },
                                    children: (0, i.jsx)(y, {
                                        color: "inherit",
                                        rel: "noopener",
                                        target: "_blank",
                                        textDecoration: "underline",
                                        children: d
                                    })
                                });
                                if (o === x._i.Internal && a) return (0, i.jsx)(b._, {
                                    value: {
                                        type: x._i.Internal,
                                        locationId: a,
                                        locale: r
                                    },
                                    children: (0, i.jsx)(y, {
                                        color: "inherit",
                                        textDecoration: "underline",
                                        children: d
                                    })
                                });
                                if (o === x._i.External) {
                                    let {
                                        href: o
                                    } = e.attribs, n = r && r === t ? "" : r, a = new URL(o), c = a.href.replace(a.origin, "".concat(a.origin).concat("true" === l && n ? "/".concat(n) : ""));
                                    return (0, i.jsx)(b._, {
                                        value: {
                                            type: x._i.External,
                                            uri: c
                                        },
                                        children: (0, i.jsx)(y, {
                                            color: "inherit",
                                            rel: "noopener",
                                            target: "_blank",
                                            textDecoration: "underline",
                                            children: d
                                        })
                                    })
                                }
                                return (0, i.jsx)(y, {
                                    color: "inherit",
                                    href: e.attribs.href,
                                    rel: "noopener",
                                    target: "_self",
                                    textDecoration: "underline",
                                    children: d
                                })
                            }
                            return Array.isArray(d) && 0 === d.length ? (0, a.createElement)(n) : (0, a.createElement)(n, null, d)
                        }
                    }
                },
                W = function() {
                    let {
                        allowedTags: e,
                        customReplace: r,
                        trim: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        defaultLocale: o,
                        locale: n
                    } = (0, p.useRouter)();
                    return (0, a.useCallback)(i => i ? (0, h.ZP)(i, {
                        trim: t,
                        replace: C({
                            locale: n,
                            defaultLocale: o,
                            customReplace: r,
                            allowedTags: e,
                            trim: t
                        })
                    }) : null, [t, n, o, r, e])
                },
                U = /<a\s+href="/,
                w = e => {
                    let {
                        text: r = ""
                    } = e, {
                        defaultLocale: t,
                        locale: o
                    } = (0, p.useRouter)();
                    return (0, a.useMemo)(() => U.test(r) ? (0, h.ZP)(r, {
                        trim: !0,
                        replace: C({
                            locale: o,
                            defaultLocale: t
                        })
                    }) : r, [t, o, r])
                },
                k = (0, m.ZP)(d.x).withConfig({
                    componentId: "sc-814ad180-1"
                })({
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    tableLayout: "fixed",
                    wordBreak: "break-word",
                    "p, ol, ul, h1, h2, h3, h3, h5, h6": {
                        margin: 0
                    }
                }),
                j = (0, m.ZP)(d.x).withConfig({
                    componentId: "sc-814ad180-2"
                })({
                    backgroundColor: (0, u.O)(c.WU.colorChannel.deepGrey, .2)
                }),
                I = m.ZP.td.withConfig({
                    componentId: "sc-814ad180-3"
                })(e => {
                    let {
                        width: r,
                        height: t
                    } = e;
                    return {
                        borderColor: c.WU.color.grey50,
                        borderStyle: "solid",
                        borderWidth: 1,
                        height: t ? "".concat(t, "px") : "auto",
                        padding: "".concat(c.WU.space.s12, " ").concat(c.WU.space.s4),
                        width: r ? "".concat(r, "px") : "auto"
                    }
                }),
                S = (e, r) => {
                    let t = e.name;
                    return "table" === t ? (0, i.jsx)(k, {
                        use: t,
                        minWidth: "100%",
                        children: r
                    }) : "thead" === t ? (0, i.jsx)(j, {
                        use: t,
                        children: r
                    }) : "tbody" === t || "th" === t ? (0, i.jsx)(d.x, {
                        use: t,
                        children: r
                    }) : "td" === t ? (0, i.jsx)(I, {
                        colSpan: e.attribs.colspan ? Number(e.attribs.colspan) : void 0,
                        height: e.attribs.height,
                        rowSpan: e.attribs.rowspan ? Number(e.attribs.rowspan) : void 0,
                        width: e.attribs.width,
                        children: r
                    }) : void 0
                },
                _ = (e, r) => {
                    let t = e.name,
                        o = e.parentNode,
                        n = null == o ? void 0 : o.name;
                    return "ul" === t || "ol" === t ? (0, i.jsx)(d.x, {
                        use: "div",
                        children: (0, i.jsx)(s.xv, {
                            use: t,
                            display: "inline-block",
                            textAlign: "start",
                            pl: "ol" === t ? "s-20" : "0",
                            children: r
                        })
                    }) : "li" === t && "ul" === n ? (0, i.jsxs)(f.U, {
                        use: "li",
                        mb: "s-8",
                        children: [(0, i.jsx)(g.J, {
                            mr: "s-12",
                            mt: "s-4",
                            name: "CheckSuccess",
                            size: {
                                all: 20,
                                xxl: 28
                            },
                            style: {
                                flexShrink: 0
                            },
                            use: "span"
                        }), (0, i.jsx)(s.xv, {
                            lineHeight: {
                                all: "1.6rem",
                                xxl: "2rem"
                            },
                            children: r
                        })]
                    }) : "li" === t && "ol" === n ? (0, i.jsx)(s.xv, {
                        use: "li",
                        mb: "s-8",
                        lineHeight: {
                            all: "1.6rem",
                            xxl: "2rem"
                        },
                        children: (0, i.jsx)(d.x, {
                            pl: "s-12",
                            children: r
                        })
                    }) : void 0
                }
        },
        98356: function(e, r, t) {
            t.d(r, {
                y: function() {
                    return a
                }
            });
            var o = t(67294),
                n = t(14743),
                i = t(94779);

            function a(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 75,
                    a = (0, n.e)();
                return (0, o.useMemo)(() => {
                    var o, n, l;
                    if (!e) return;
                    let c = null === (o = e.optimisedResources) || void 0 === o ? void 0 : o.find(o => {
                        let {
                            optimisationParams: n
                        } = o;
                        return n.width === r && n.quality === t && n.codecName === (0, i.Nb)(e.value)
                    });
                    return null !== (l = null !== (n = null == c ? void 0 : c.value) && void 0 !== n ? n : null == a ? void 0 : a({
                        src: e.value,
                        width: r
                    })) && void 0 !== l ? l : e.value
                }, [e, a, t, r])
            }
        },
        30537: function(e, r, t) {
            t.d(r, {
                A: function() {
                    return l
                }
            });
            var o = t(67294),
                n = t(47887),
                i = t(28127);

            function a(e) {
                (e instanceof Error && "AbortError" !== e.name && "NotAllowedError" !== e.name || !(e instanceof Error)) && (0, i.D)("useViewportVideoRef", e)
            }

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    r = (0, o.useRef)(null),
                    t = (0, o.useRef)(),
                    [i, l] = (0, o.useState)(!1),
                    [c, d] = (0, o.useState)(!1);
                return (0, n.t)(r, e => l(e), .1), (0, o.useEffect)(() => {
                    let o = r.current;
                    if (o) {
                        if (i && e) {
                            if (!c) {
                                clearTimeout(t.current);
                                try {
                                    let e = o.play();
                                    void 0 !== e && e.then(() => d(!0)).catch(a)
                                } catch (e) {
                                    a(e)
                                }
                            }
                        } else c && (clearTimeout(t.current), t.current = setTimeout(() => {
                            o.pause(), o.currentTime = 0, d(!1)
                        }, 500))
                    }
                }, [e, i, c]), {
                    videoRef: r,
                    inViewport: i
                }
            }
        },
        27160: function(e, r, t) {
            var o, n;
            t.d(r, {
                D: function() {
                    return o
                }
            }), (n = o || (o = {})).Loop = "loop", n.StartImmediately = "startImmediately", n.PlayButton = "playButton", n.SoundButton = "soundButton", n.FullscreenButton = "fullscreenButton"
        }
    }
]);
//# sourceMappingURL=2877.9666b4bc1935da12.js.map