! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "51b99d72-f2f0-48fe-aa4c-dd294cf8888d", e._sentryDebugIdIdentifier = "sentry-dbid-51b99d72-f2f0-48fe-aa4c-dd294cf8888d")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2004], {
        9996: function(e) {
            "use strict";
            var t = function(e) {
                    var t;
                    return !!e && "object" == typeof e && "[object RegExp]" !== (t = Object.prototype.toString.call(e)) && "[object Date]" !== t && e.$$typeof !== r
                },
                r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function n(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? l(Array.isArray(e) ? [] : {}, e, t) : e
            }

            function a(e, t, r) {
                return e.concat(t).map(function(e) {
                    return n(e, r)
                })
            }

            function o(e) {
                return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.propertyIsEnumerable.call(e, t)
                }) : [])
            }

            function i(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }

            function l(e, r, s) {
                (s = s || {}).arrayMerge = s.arrayMerge || a, s.isMergeableObject = s.isMergeableObject || t, s.cloneUnlessOtherwiseSpecified = n;
                var u, c, p = Array.isArray(r);
                return p !== Array.isArray(e) ? n(r, s) : p ? s.arrayMerge(e, r, s) : (c = {}, (u = s).isMergeableObject(e) && o(e).forEach(function(t) {
                    c[t] = n(e[t], u)
                }), o(r).forEach(function(t) {
                    (!i(e, t) || Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) && (i(e, t) && u.isMergeableObject(r[t]) ? c[t] = (function(e, t) {
                        if (!t.customMerge) return l;
                        var r = t.customMerge(e);
                        return "function" == typeof r ? r : l
                    })(t, u)(e[t], r[t], u) : c[t] = n(r[t], u))
                }), c)
            }
            l.all = function(e, t) {
                if (!Array.isArray(e)) throw Error("first argument should be an array");
                return e.reduce(function(e, r) {
                    return l(e, r, t)
                }, {})
            }, e.exports = l
        },
        49090: function(e) {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(Error("Failed to load " + this.src), e)
                }
            }
            e.exports = function(e, r, n) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                "function" == typeof r && (n = r, r = {}), r = r || {}, n = n || function() {}, o.type = r.type || "text/javascript", o.charset = r.charset || "utf8", o.async = !("async" in r) || !!r.async, o.src = e, r.attrs && function(e, t) {
                    for (var r in t) e.setAttribute(r, t[r])
                }(o, r.attrs), r.text && (o.text = "" + r.text), ("onload" in o ? t : function(e, t) {
                    e.onreadystatechange = function() {
                        ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null, t(null, e))
                    }
                })(o, n), o.onload || t(o, n), a.appendChild(o)
            }
        },
        30845: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function a(e, t) {
                if (e.length !== t.length) return !1;
                for (var r, a, o = 0; o < e.length; o++)
                    if (!((r = e[o]) === (a = t[o]) || n(r) && n(a))) return !1;
                return !0
            }
            t.default = function(e, t) {
                void 0 === t && (t = a);
                var r, n, o = [],
                    i = !1;
                return function() {
                    for (var a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
                    return i && r === this && t(a, o) || (n = e.apply(this, a), i = !0, r = this, o = a), n
                }
            }
        },
        92703: function(e, t, r) {
            "use strict";
            var n = r(50414);

            function a() {}

            function o() {}
            o.resetWarningCache = a, e.exports = function() {
                function e(e, t, r, a, o, i) {
                    if (i !== n) {
                        var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation", l
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: a
                };
                return r.PropTypes = r, r
            }
        },
        45697: function(e, t, r) {
            e.exports = r(92703)()
        },
        50414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        69590: function(e) {
            var t = "undefined" != typeof Element,
                r = "function" == typeof Map,
                n = "function" == typeof Set,
                a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, o) {
                try {
                    return function e(o, i) {
                        if (o === i) return !0;
                        if (o && i && "object" == typeof o && "object" == typeof i) {
                            var l, s, u, c;
                            if (o.constructor !== i.constructor) return !1;
                            if (Array.isArray(o)) {
                                if ((l = o.length) != i.length) return !1;
                                for (s = l; 0 != s--;)
                                    if (!e(o[s], i[s])) return !1;
                                return !0
                            }
                            if (r && o instanceof Map && i instanceof Map) {
                                if (o.size !== i.size) return !1;
                                for (c = o.entries(); !(s = c.next()).done;)
                                    if (!i.has(s.value[0])) return !1;
                                for (c = o.entries(); !(s = c.next()).done;)
                                    if (!e(s.value[1], i.get(s.value[0]))) return !1;
                                return !0
                            }
                            if (n && o instanceof Set && i instanceof Set) {
                                if (o.size !== i.size) return !1;
                                for (c = o.entries(); !(s = c.next()).done;)
                                    if (!i.has(s.value[0])) return !1;
                                return !0
                            }
                            if (a && ArrayBuffer.isView(o) && ArrayBuffer.isView(i)) {
                                if ((l = o.length) != i.length) return !1;
                                for (s = l; 0 != s--;)
                                    if (o[s] !== i[s]) return !1;
                                return !0
                            }
                            if (o.constructor === RegExp) return o.source === i.source && o.flags === i.flags;
                            if (o.valueOf !== Object.prototype.valueOf && "function" == typeof o.valueOf && "function" == typeof i.valueOf) return o.valueOf() === i.valueOf();
                            if (o.toString !== Object.prototype.toString && "function" == typeof o.toString && "function" == typeof i.toString) return o.toString() === i.toString();
                            if ((l = (u = Object.keys(o)).length) !== Object.keys(i).length) return !1;
                            for (s = l; 0 != s--;)
                                if (!Object.prototype.hasOwnProperty.call(i, u[s])) return !1;
                            if (t && o instanceof Element) return !1;
                            for (s = l; 0 != s--;)
                                if (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s] || !o.$$typeof) && !e(o[u[s]], i[u[s]])) return !1;
                            return !0
                        }
                        return o != o && i != i
                    }(e, o)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        60722: function(e, t, r) {
            var n = Object.create,
                a = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                i = Object.getOwnPropertyNames,
                l = Object.getPrototypeOf,
                s = Object.prototype.hasOwnProperty,
                u = (e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                c = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let l of i(t)) s.call(e, l) || l === r || a(e, l, {
                            get: () => t[l],
                            enumerable: !(n = o(t, l)) || n.enumerable
                        });
                    return e
                },
                p = (e, t, r) => (r = null != e ? n(l(e)) : {}, c(!t && e && e.__esModule ? r : a(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                y = (e, t, r) => (u(e, "symbol" != typeof t ? t + "" : t, r), r),
                d = {};
            ((e, t) => {
                for (var r in t) a(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(d, {
                default: () => P
            }), e.exports = c(a({}, "__esModule", {
                value: !0
            }), d);
            var f = p(r(67294)),
                h = p(r(69590)),
                b = r(85741),
                m = r(38045);
            class P extends f.Component {
                constructor() {
                    super(...arguments), y(this, "mounted", !1), y(this, "isReady", !1), y(this, "isPlaying", !1), y(this, "isLoading", !0), y(this, "loadOnReady", null), y(this, "startOnPlay", !0), y(this, "seekOnPlay", null), y(this, "onDurationCalled", !1), y(this, "handlePlayerMount", e => {
                        if (this.player) {
                            this.progress();
                            return
                        }
                        this.player = e, this.player.load(this.props.url), this.progress()
                    }), y(this, "getInternalPlayer", e => this.player ? this.player[e] : null), y(this, "progress", () => {
                        if (this.props.url && this.player && this.isReady) {
                            let e = this.getCurrentTime() || 0,
                                t = this.getSecondsLoaded(),
                                r = this.getDuration();
                            if (r) {
                                let n = {
                                    playedSeconds: e,
                                    played: e / r
                                };
                                null !== t && (n.loadedSeconds = t, n.loaded = t / r), (n.playedSeconds !== this.prevPlayed || n.loadedSeconds !== this.prevLoaded) && this.props.onProgress(n), this.prevPlayed = n.playedSeconds, this.prevLoaded = n.loadedSeconds
                            }
                        }
                        this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval)
                    }), y(this, "handleReady", () => {
                        if (!this.mounted) return;
                        this.isReady = !0, this.isLoading = !1;
                        let {
                            onReady: e,
                            playing: t,
                            volume: r,
                            muted: n
                        } = this.props;
                        e(), n || null === r || this.player.setVolume(r), this.loadOnReady ? (this.player.load(this.loadOnReady, !0), this.loadOnReady = null) : t && this.player.play(), this.handleDurationCheck()
                    }), y(this, "handlePlay", () => {
                        this.isPlaying = !0, this.isLoading = !1;
                        let {
                            onStart: e,
                            onPlay: t,
                            playbackRate: r
                        } = this.props;
                        this.startOnPlay && (this.player.setPlaybackRate && 1 !== r && this.player.setPlaybackRate(r), e(), this.startOnPlay = !1), t(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck()
                    }), y(this, "handlePause", e => {
                        this.isPlaying = !1, this.isLoading || this.props.onPause(e)
                    }), y(this, "handleEnded", () => {
                        let {
                            activePlayer: e,
                            loop: t,
                            onEnded: r
                        } = this.props;
                        e.loopOnEnded && t && this.seekTo(0), t || (this.isPlaying = !1, r())
                    }), y(this, "handleError", (...e) => {
                        this.isLoading = !1, this.props.onError(...e)
                    }), y(this, "handleDurationCheck", () => {
                        clearTimeout(this.durationCheckTimeout);
                        let e = this.getDuration();
                        e ? this.onDurationCalled || (this.props.onDuration(e), this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100)
                    }), y(this, "handleLoaded", () => {
                        this.isLoading = !1
                    })
                }
                componentDidMount() {
                    this.mounted = !0
                }
                componentWillUnmount() {
                    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                }
                componentDidUpdate(e) {
                    if (!this.player) return;
                    let {
                        url: t,
                        playing: r,
                        volume: n,
                        muted: a,
                        playbackRate: o,
                        pip: i,
                        loop: l,
                        activePlayer: s,
                        disableDeferredLoading: u
                    } = this.props;
                    if (!(0, h.default)(e.url, t)) {
                        if (this.isLoading && !s.forceLoad && !u && !(0, m.isMediaStream)(t)) {
                            console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`), this.loadOnReady = t;
                            return
                        }
                        this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(t, this.isReady)
                    }
                    e.playing || !r || this.isPlaying || this.player.play(), e.playing && !r && this.isPlaying && this.player.pause(), !e.pip && i && this.player.enablePIP && this.player.enablePIP(), e.pip && !i && this.player.disablePIP && this.player.disablePIP(), e.volume !== n && null !== n && this.player.setVolume(n), e.muted !== a && (a ? this.player.mute() : (this.player.unmute(), null !== n && setTimeout(() => this.player.setVolume(n)))), e.playbackRate !== o && this.player.setPlaybackRate && this.player.setPlaybackRate(o), e.loop !== l && this.player.setLoop && this.player.setLoop(l)
                }
                getDuration() {
                    return this.isReady ? this.player.getDuration() : null
                }
                getCurrentTime() {
                    return this.isReady ? this.player.getCurrentTime() : null
                }
                getSecondsLoaded() {
                    return this.isReady ? this.player.getSecondsLoaded() : null
                }
                seekTo(e, t, r) {
                    if (!this.isReady) {
                        0 !== e && (this.seekOnPlay = e, setTimeout(() => {
                            this.seekOnPlay = null
                        }, 5e3));
                        return
                    }
                    if (t ? "fraction" === t : e > 0 && e < 1) {
                        let t = this.player.getDuration();
                        if (!t) {
                            console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                            return
                        }
                        this.player.seekTo(t * e, r);
                        return
                    }
                    this.player.seekTo(e, r)
                }
                render() {
                    let e = this.props.activePlayer;
                    return e ? f.default.createElement(e, { ...this.props,
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError
                    }) : null
                }
            }
            y(P, "displayName", "Player"), y(P, "propTypes", b.propTypes), y(P, "defaultProps", b.defaultProps)
        },
        70390: function(e, t, r) {
            var n = Object.create,
                a = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                i = Object.getOwnPropertyNames,
                l = Object.getPrototypeOf,
                s = Object.prototype.hasOwnProperty,
                u = (e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                c = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let l of i(t)) s.call(e, l) || l === r || a(e, l, {
                            get: () => t[l],
                            enumerable: !(n = o(t, l)) || n.enumerable
                        });
                    return e
                },
                p = (e, t, r) => (r = null != e ? n(l(e)) : {}, c(!t && e && e.__esModule ? r : a(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                y = (e, t, r) => (u(e, "symbol" != typeof t ? t + "" : t, r), r),
                d = {};
            ((e, t) => {
                for (var r in t) a(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(d, {
                createReactPlayer: () => j
            }), e.exports = c(a({}, "__esModule", {
                value: !0
            }), d);
            var f = p(r(67294)),
                h = p(r(9996)),
                b = p(r(30845)),
                m = p(r(69590)),
                P = r(85741),
                g = r(38045),
                w = p(r(60722));
            let O = (0, g.lazy)(() => r.e(7664).then(r.t.bind(r, 83855, 23))),
                v = "undefined" != typeof window && window.document && "undefined" != typeof document,
                _ = void 0 !== r.g && r.g.window && r.g.window.document,
                k = Object.keys(P.propTypes),
                T = v || _ ? f.Suspense : () => null,
                S = [],
                j = (e, t) => {
                    var r;
                    return r = class extends f.Component {
                        constructor() {
                            super(...arguments), y(this, "state", {
                                showPreview: !!this.props.light
                            }), y(this, "references", {
                                wrapper: e => {
                                    this.wrapper = e
                                },
                                player: e => {
                                    this.player = e
                                }
                            }), y(this, "handleClickPreview", e => {
                                this.setState({
                                    showPreview: !1
                                }), this.props.onClickPreview(e)
                            }), y(this, "showPreview", () => {
                                this.setState({
                                    showPreview: !0
                                })
                            }), y(this, "getDuration", () => this.player ? this.player.getDuration() : null), y(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), y(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), y(this, "getInternalPlayer", (e = "player") => this.player ? this.player.getInternalPlayer(e) : null), y(this, "seekTo", (e, t, r) => {
                                if (!this.player) return null;
                                this.player.seekTo(e, t, r)
                            }), y(this, "handleReady", () => {
                                this.props.onReady(this)
                            }), y(this, "getActivePlayer", (0, b.default)(r => {
                                for (let t of [...S, ...e])
                                    if (t.canPlay(r)) return t;
                                return t || null
                            })), y(this, "getConfig", (0, b.default)((e, t) => {
                                let {
                                    config: r
                                } = this.props;
                                return h.default.all([P.defaultProps.config, P.defaultProps.config[t] || {}, r, r[t] || {}])
                            })), y(this, "getAttributes", (0, b.default)(e => (0, g.omit)(this.props, k))), y(this, "renderActivePlayer", e => {
                                if (!e) return null;
                                let t = this.getActivePlayer(e);
                                if (!t) return null;
                                let r = this.getConfig(e, t.key);
                                return f.default.createElement(w.default, { ...this.props,
                                    key: t.key,
                                    ref: this.references.player,
                                    config: r,
                                    activePlayer: t.lazyPlayer || t,
                                    onReady: this.handleReady
                                })
                            })
                        }
                        shouldComponentUpdate(e, t) {
                            return !(0, m.default)(this.props, e) || !(0, m.default)(this.state, t)
                        }
                        componentDidUpdate(e) {
                            let {
                                light: t
                            } = this.props;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                        renderPreview(e) {
                            if (!e) return null;
                            let {
                                light: t,
                                playIcon: r,
                                previewTabIndex: n,
                                oEmbedUrl: a,
                                previewAriaLabel: o
                            } = this.props;
                            return f.default.createElement(O, {
                                url: e,
                                light: t,
                                playIcon: r,
                                previewTabIndex: n,
                                previewAriaLabel: o,
                                oEmbedUrl: a,
                                onClick: this.handleClickPreview
                            })
                        }
                        render() {
                            let {
                                url: e,
                                style: t,
                                width: r,
                                height: n,
                                fallback: a,
                                wrapper: o
                            } = this.props, {
                                showPreview: i
                            } = this.state, l = this.getAttributes(e), s = "string" == typeof o ? this.references.wrapper : void 0;
                            return f.default.createElement(o, {
                                ref: s,
                                style: { ...t,
                                    width: r,
                                    height: n
                                },
                                ...l
                            }, f.default.createElement(T, {
                                fallback: a
                            }, i ? this.renderPreview(e) : this.renderActivePlayer(e)))
                        }
                    }, y(r, "displayName", "ReactPlayer"), y(r, "propTypes", P.propTypes), y(r, "defaultProps", P.defaultProps), y(r, "addCustomPlayer", e => {
                        S.push(e)
                    }), y(r, "removeCustomPlayers", () => {
                        S.length = 0
                    }), y(r, "canPlay", t => {
                        for (let r of [...S, ...e])
                            if (r.canPlay(t)) return !0;
                        return !1
                    }), y(r, "canEnablePIP", t => {
                        for (let r of [...S, ...e])
                            if (r.canEnablePIP && r.canEnablePIP(t)) return !0;
                        return !1
                    }), r
                }
        },
        22004: function(e, t, r) {
            let n, a, o;
            var i = Object.create,
                l = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                u = Object.getOwnPropertyNames,
                c = Object.getPrototypeOf,
                p = Object.prototype.hasOwnProperty,
                y = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let a of u(t)) p.call(e, a) || a === r || l(e, a, {
                            get: () => t[a],
                            enumerable: !(n = s(t, a)) || n.enumerable
                        });
                    return e
                },
                d = {};
            ((e, t) => {
                for (var r in t) l(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(d, {
                default: () => m
            }), e.exports = y(l({}, "__esModule", {
                value: !0
            }), d);
            var f = (o = null != (n = r(86497)) ? i(c(n)) : {}, y(!a && n && n.__esModule ? o : l(o, "default", {
                    value: n,
                    enumerable: !0
                }), n)),
                h = r(70390);
            let b = f.default[f.default.length - 1];
            var m = (0, h.createReactPlayer)(f.default, b)
        },
        71776: function(e, t, r) {
            var n = Object.defineProperty,
                a = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                i = Object.prototype.hasOwnProperty,
                l = {};
            ((e, t) => {
                for (var r in t) n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(l, {
                AUDIO_EXTENSIONS: () => _,
                DASH_EXTENSIONS: () => S,
                FLV_EXTENSIONS: () => j,
                HLS_EXTENSIONS: () => T,
                MATCH_URL_DAILYMOTION: () => g,
                MATCH_URL_FACEBOOK: () => d,
                MATCH_URL_FACEBOOK_WATCH: () => f,
                MATCH_URL_KALTURA: () => v,
                MATCH_URL_MIXCLOUD: () => w,
                MATCH_URL_MUX: () => y,
                MATCH_URL_SOUNDCLOUD: () => c,
                MATCH_URL_STREAMABLE: () => h,
                MATCH_URL_TWITCH_CHANNEL: () => P,
                MATCH_URL_TWITCH_VIDEO: () => m,
                MATCH_URL_VIDYARD: () => O,
                MATCH_URL_VIMEO: () => p,
                MATCH_URL_WISTIA: () => b,
                MATCH_URL_YOUTUBE: () => u,
                VIDEO_EXTENSIONS: () => k,
                canPlay: () => I
            }), e.exports = ((e, t, r, l) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let s of o(t)) i.call(e, s) || s === r || n(e, s, {
                        get: () => t[s],
                        enumerable: !(l = a(t, s)) || l.enumerable
                    });
                return e
            })(n({}, "__esModule", {
                value: !0
            }), l);
            var s = r(38045);
            let u = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
                c = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
                p = /vimeo\.com\/(?!progressive_redirect).+/,
                y = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
                d = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
                f = /^https?:\/\/fb\.watch\/.+$/,
                h = /streamable\.com\/([a-z0-9]+)$/,
                b = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
                m = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
                P = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
                g = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
                w = /mixcloud\.com\/([^/]+\/[^/]+)/,
                O = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
                v = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
                _ = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
                k = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
                T = /\.(m3u8)($|\?)/i,
                S = /\.(mpd)($|\?)/i,
                j = /\.(flv)($|\?)/i,
                E = e => {
                    if (e instanceof Array) {
                        for (let t of e)
                            if ("string" == typeof t && E(t) || E(t.src)) return !0;
                        return !1
                    }
                    return !!((0, s.isMediaStream)(e) || (0, s.isBlobUrl)(e)) || _.test(e) || k.test(e) || T.test(e) || S.test(e) || j.test(e)
                },
                I = {
                    youtube: e => e instanceof Array ? e.every(e => u.test(e)) : u.test(e),
                    soundcloud: e => c.test(e) && !_.test(e),
                    vimeo: e => p.test(e) && !k.test(e) && !T.test(e),
                    mux: e => y.test(e),
                    facebook: e => d.test(e) || f.test(e),
                    streamable: e => h.test(e),
                    wistia: e => b.test(e),
                    twitch: e => m.test(e) || P.test(e),
                    dailymotion: e => g.test(e),
                    mixcloud: e => w.test(e),
                    vidyard: e => O.test(e),
                    kaltura: e => v.test(e),
                    file: E
                }
        },
        86497: function(e, t, r) {
            var n = Object.defineProperty,
                a = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                i = Object.prototype.hasOwnProperty,
                l = {};
            ((e, t) => {
                for (var r in t) n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(l, {
                default: () => c
            }), e.exports = ((e, t, r, l) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let s of o(t)) i.call(e, s) || s === r || n(e, s, {
                        get: () => t[s],
                        enumerable: !(l = a(t, s)) || l.enumerable
                    });
                return e
            })(n({}, "__esModule", {
                value: !0
            }), l);
            var s = r(38045),
                u = r(71776),
                c = [{
                    key: "youtube",
                    name: "YouTube",
                    canPlay: u.canPlay.youtube,
                    lazyPlayer: (0, s.lazy)(() => r.e(4439).then(r.t.bind(r, 60356, 23)))
                }, {
                    key: "soundcloud",
                    name: "SoundCloud",
                    canPlay: u.canPlay.soundcloud,
                    lazyPlayer: (0, s.lazy)(() => r.e(6125).then(r.t.bind(r, 72648, 23)))
                }, {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: u.canPlay.vimeo,
                    lazyPlayer: (0, s.lazy)(() => r.e(3743).then(r.t.bind(r, 80868, 23)))
                }, {
                    key: "mux",
                    name: "Mux",
                    canPlay: u.canPlay.mux,
                    lazyPlayer: (0, s.lazy)(() => r.e(4258).then(r.t.bind(r, 58376, 23)))
                }, {
                    key: "facebook",
                    name: "Facebook",
                    canPlay: u.canPlay.facebook,
                    lazyPlayer: (0, s.lazy)(() => r.e(2121).then(r.t.bind(r, 31972, 23)))
                }, {
                    key: "streamable",
                    name: "Streamable",
                    canPlay: u.canPlay.streamable,
                    lazyPlayer: (0, s.lazy)(() => r.e(2546).then(r.t.bind(r, 50993, 23)))
                }, {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: u.canPlay.wistia,
                    lazyPlayer: (0, s.lazy)(() => r.e(8055).then(r.t.bind(r, 8018, 23)))
                }, {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: u.canPlay.twitch,
                    lazyPlayer: (0, s.lazy)(() => r.e(6216).then(r.t.bind(r, 29482, 23)))
                }, {
                    key: "dailymotion",
                    name: "DailyMotion",
                    canPlay: u.canPlay.dailymotion,
                    lazyPlayer: (0, s.lazy)(() => r.e(7596).then(r.t.bind(r, 36807, 23)))
                }, {
                    key: "mixcloud",
                    name: "Mixcloud",
                    canPlay: u.canPlay.mixcloud,
                    lazyPlayer: (0, s.lazy)(() => r.e(4667).then(r.t.bind(r, 50143, 23)))
                }, {
                    key: "vidyard",
                    name: "Vidyard",
                    canPlay: u.canPlay.vidyard,
                    lazyPlayer: (0, s.lazy)(() => r.e(8888).then(r.t.bind(r, 36596, 23)))
                }, {
                    key: "kaltura",
                    name: "Kaltura",
                    canPlay: u.canPlay.kaltura,
                    lazyPlayer: (0, s.lazy)(() => r.e(261).then(r.t.bind(r, 73911, 23)))
                }, {
                    key: "file",
                    name: "FilePlayer",
                    canPlay: u.canPlay.file,
                    canEnablePIP: e => u.canPlay.file(e) && (document.pictureInPictureEnabled || (0, s.supportsWebKitPresentationMode)()) && !u.AUDIO_EXTENSIONS.test(e),
                    lazyPlayer: (0, s.lazy)(() => r.e(6011).then(r.t.bind(r, 14926, 23)))
                }]
        },
        85741: function(e, t, r) {
            let n, a, o;
            var i = Object.create,
                l = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                u = Object.getOwnPropertyNames,
                c = Object.getPrototypeOf,
                p = Object.prototype.hasOwnProperty,
                y = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let a of u(t)) p.call(e, a) || a === r || l(e, a, {
                            get: () => t[a],
                            enumerable: !(n = s(t, a)) || n.enumerable
                        });
                    return e
                },
                d = {};
            ((e, t) => {
                for (var r in t) l(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(d, {
                defaultProps: () => T,
                propTypes: () => _
            }), e.exports = y(l({}, "__esModule", {
                value: !0
            }), d);
            let {
                string: f,
                bool: h,
                number: b,
                array: m,
                oneOfType: P,
                shape: g,
                object: w,
                func: O,
                node: v
            } = (o = null != (n = r(45697)) ? i(c(n)) : {}, y(!a && n && n.__esModule ? o : l(o, "default", {
                value: n,
                enumerable: !0
            }), n)).default, _ = {
                url: P([f, m, w]),
                playing: h,
                loop: h,
                controls: h,
                volume: b,
                muted: h,
                playbackRate: b,
                width: P([f, b]),
                height: P([f, b]),
                style: w,
                progressInterval: b,
                playsinline: h,
                pip: h,
                stopOnUnmount: h,
                light: P([h, f, w]),
                playIcon: v,
                previewTabIndex: b,
                previewAriaLabel: f,
                fallback: v,
                oEmbedUrl: f,
                wrapper: P([f, O, g({
                    render: O.isRequired
                })]),
                config: g({
                    soundcloud: g({
                        options: w
                    }),
                    youtube: g({
                        playerVars: w,
                        embedOptions: w,
                        onUnstarted: O
                    }),
                    facebook: g({
                        appId: f,
                        version: f,
                        playerId: f,
                        attributes: w
                    }),
                    dailymotion: g({
                        params: w
                    }),
                    vimeo: g({
                        playerOptions: w,
                        title: f
                    }),
                    mux: g({
                        attributes: w,
                        version: f
                    }),
                    file: g({
                        attributes: w,
                        tracks: m,
                        forceVideo: h,
                        forceAudio: h,
                        forceHLS: h,
                        forceSafariHLS: h,
                        forceDisableHls: h,
                        forceDASH: h,
                        forceFLV: h,
                        hlsOptions: w,
                        hlsVersion: f,
                        dashVersion: f,
                        flvVersion: f
                    }),
                    wistia: g({
                        options: w,
                        playerId: f,
                        customControls: m
                    }),
                    mixcloud: g({
                        options: w
                    }),
                    twitch: g({
                        options: w,
                        playerId: f
                    }),
                    vidyard: g({
                        options: w
                    })
                }),
                onReady: O,
                onStart: O,
                onPlay: O,
                onPause: O,
                onBuffer: O,
                onBufferEnd: O,
                onEnded: O,
                onError: O,
                onDuration: O,
                onSeek: O,
                onPlaybackRateChange: O,
                onPlaybackQualityChange: O,
                onProgress: O,
                onClickPreview: O,
                onEnablePIP: O,
                onDisablePIP: O
            }, k = () => {}, T = {
                playing: !1,
                loop: !1,
                controls: !1,
                volume: null,
                muted: !1,
                playbackRate: 1,
                width: "640px",
                height: "360px",
                style: {},
                progressInterval: 1e3,
                playsinline: !1,
                pip: !1,
                stopOnUnmount: !0,
                light: !1,
                fallback: null,
                wrapper: "div",
                previewTabIndex: 0,
                previewAriaLabel: "",
                oEmbedUrl: "https://noembed.com/embed?url={url}",
                config: {
                    soundcloud: {
                        options: {
                            visual: !0,
                            buying: !1,
                            liking: !1,
                            download: !1,
                            sharing: !1,
                            show_comments: !1,
                            show_playcount: !1
                        }
                    },
                    youtube: {
                        playerVars: {
                            playsinline: 1,
                            showinfo: 0,
                            rel: 0,
                            iv_load_policy: 3,
                            modestbranding: 1
                        },
                        embedOptions: {},
                        onUnstarted: k
                    },
                    facebook: {
                        appId: "1309697205772819",
                        version: "v3.3",
                        playerId: null,
                        attributes: {}
                    },
                    dailymotion: {
                        params: {
                            api: 1,
                            "endscreen-enable": !1
                        }
                    },
                    vimeo: {
                        playerOptions: {
                            autopause: !1,
                            byline: !1,
                            portrait: !1,
                            title: !1
                        },
                        title: null
                    },
                    mux: {
                        attributes: {},
                        version: "2"
                    },
                    file: {
                        attributes: {},
                        tracks: [],
                        forceVideo: !1,
                        forceAudio: !1,
                        forceHLS: !1,
                        forceDASH: !1,
                        forceFLV: !1,
                        hlsOptions: {},
                        hlsVersion: "1.1.4",
                        dashVersion: "3.1.3",
                        flvVersion: "1.5.0",
                        forceDisableHls: !1
                    },
                    wistia: {
                        options: {},
                        playerId: null,
                        customControls: null
                    },
                    mixcloud: {
                        options: {
                            hide_cover: 1
                        }
                    },
                    twitch: {
                        options: {},
                        playerId: null
                    },
                    vidyard: {
                        options: {}
                    }
                },
                onReady: k,
                onStart: k,
                onPlay: k,
                onPause: k,
                onBuffer: k,
                onBufferEnd: k,
                onEnded: k,
                onError: k,
                onDuration: k,
                onSeek: k,
                onPlaybackRateChange: k,
                onPlaybackQualityChange: k,
                onProgress: k,
                onClickPreview: k,
                onEnablePIP: k,
                onDisablePIP: k
            }
        },
        38045: function(e, t, r) {
            var n = Object.create,
                a = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                i = Object.getOwnPropertyNames,
                l = Object.getPrototypeOf,
                s = Object.prototype.hasOwnProperty,
                u = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let l of i(t)) s.call(e, l) || l === r || a(e, l, {
                            get: () => t[l],
                            enumerable: !(n = o(t, l)) || n.enumerable
                        });
                    return e
                },
                c = (e, t, r) => (r = null != e ? n(l(e)) : {}, u(!t && e && e.__esModule ? r : a(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                p = {};
            ((e, t) => {
                for (var r in t) a(e, r, {
                    get: t[r],
                    enumerable: !0
                })
            })(p, {
                callPlayer: () => C,
                getConfig: () => E,
                getSDK: () => j,
                isBlobUrl: () => R,
                isMediaStream: () => A,
                lazy: () => h,
                omit: () => I,
                parseEndTime: () => v,
                parseStartTime: () => O,
                queryString: () => k,
                randomString: () => _,
                supportsWebKitPresentationMode: () => M
            }), e.exports = u(a({}, "__esModule", {
                value: !0
            }), p);
            var y = c(r(67294)),
                d = c(r(49090)),
                f = c(r(9996));
            let h = e => y.default.lazy(async () => {
                    let t = await e();
                    return "function" == typeof t.default ? t : t.default
                }),
                b = /[?&#](?:start|t)=([0-9hms]+)/,
                m = /[?&#]end=([0-9hms]+)/,
                P = /(\d+)(h|m|s)/g,
                g = /^\d+$/;

            function w(e, t) {
                if (e instanceof Array) return;
                let r = e.match(t);
                if (r) {
                    let e = r[1];
                    if (e.match(P)) return function(e) {
                        let t = 0,
                            r = P.exec(e);
                        for (; null !== r;) {
                            let [, n, a] = r;
                            "h" === a && (t += 3600 * parseInt(n, 10)), "m" === a && (t += 60 * parseInt(n, 10)), "s" === a && (t += parseInt(n, 10)), r = P.exec(e)
                        }
                        return t
                    }(e);
                    if (g.test(e)) return parseInt(e)
                }
            }

            function O(e) {
                return w(e, b)
            }

            function v(e) {
                return w(e, m)
            }

            function _() {
                return Math.random().toString(36).substr(2, 5)
            }

            function k(e) {
                return Object.keys(e).map(t => `${t}=${e[t]}`).join("&")
            }

            function T(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            let S = {},
                j = function(e, t, r = null, n = () => !0, a = d.default) {
                    let o = T(t);
                    return o && n(o) ? Promise.resolve(o) : new Promise((n, o) => {
                        if (S[e]) {
                            S[e].push({
                                resolve: n,
                                reject: o
                            });
                            return
                        }
                        S[e] = [{
                            resolve: n,
                            reject: o
                        }];
                        let i = t => {
                            S[e].forEach(e => e.resolve(t))
                        };
                        if (r) {
                            let e = window[r];
                            window[r] = function() {
                                e && e(), i(T(t))
                            }
                        }
                        a(e, n => {
                            n ? (S[e].forEach(e => e.reject(n)), S[e] = null) : r || i(T(t))
                        })
                    })
                };

            function E(e, t) {
                return (0, f.default)(t.config, e.config)
            }

            function I(e, ...t) {
                let r = [].concat(...t),
                    n = {};
                for (let t of Object.keys(e)) - 1 === r.indexOf(t) && (n[t] = e[t]);
                return n
            }

            function C(e, ...t) {
                if (!this.player || !this.player[e]) {
                    let t = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;
                    return this.player ? this.player[e] || (t += "The method was not available") : t += "The player was not available", console.warn(t, "font-weight: bold", ""), null
                }
                return this.player[e](...t)
            }

            function A(e) {
                return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
            }

            function R(e) {
                return /^blob:/.test(e)
            }

            function M(e = document.createElement("video")) {
                let t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
            }
        }
    }
]);
//# sourceMappingURL=2004-1ad995691078d61a.js.map