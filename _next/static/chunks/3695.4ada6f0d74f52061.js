! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a69031d7-975c-40ca-bc54-7ab563331510", e._sentryDebugIdIdentifier = "sentry-dbid-a69031d7-975c-40ca-bc54-7ab563331510")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3695], {
        13695: function(e, t, r) {
            r.d(t, {
                ZP: function() {
                    return ed
                }
            });
            var n, i, o, h, s, a, u, c, l, p, f, E, m = function(e, t) {
                return (m = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function b(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                m(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var g = function() {
                return (g = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function H(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function y(e) {
                return e.type === u.literal
            }

            function T(e) {
                return e.type === u.number
            }

            function d(e) {
                return e.type === u.date
            }

            function B(e) {
                return e.type === u.time
            }

            function v(e) {
                return e.type === u.select
            }

            function _(e) {
                return e.type === u.plural
            }

            function A(e) {
                return e.type === u.tag
            }

            function P(e) {
                return !!(e && "object" == typeof e && e.type === c.number)
            }

            function L(e) {
                return !!(e && "object" == typeof e && e.type === c.dateTime)
            }
            "function" == typeof SuppressedError && SuppressedError, (n = a || (a = {}))[n.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", n[n.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", n[n.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", n[n.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", n[n.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", n[n.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", n[n.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", n[n.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", n[n.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", n[n.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", n[n.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", n[n.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", n[n.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", n[n.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", n[n.INVALID_TAG = 23] = "INVALID_TAG", n[n.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", n[n.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", n[n.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (i = u || (u = {}))[i.literal = 0] = "literal", i[i.argument = 1] = "argument", i[i.number = 2] = "number", i[i.date = 3] = "date", i[i.time = 4] = "time", i[i.select = 5] = "select", i[i.plural = 6] = "plural", i[i.pound = 7] = "pound", i[i.tag = 8] = "tag", (o = c || (c = {}))[o.number = 0] = "number", o[o.dateTime = 1] = "dateTime";
            var S = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                N = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
                I = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
                C = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                R = /^(@+)?(\+|#+)?[rs]?$/g,
                M = /(\*)(0+)|(#+)(0+)|(0+)/g,
                O = /^(0+)$/;

            function U(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(R, function(e, r, n) {
                    return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
                }), t
            }

            function G(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function D(e) {
                return G(e) || {}
            }
            var w = {
                    "001": ["H", "h"],
                    AC: ["H", "h", "hb", "hB"],
                    AD: ["H", "hB"],
                    AE: ["h", "hB", "hb", "H"],
                    AF: ["H", "hb", "hB", "h"],
                    AG: ["h", "hb", "H", "hB"],
                    AI: ["H", "h", "hb", "hB"],
                    AL: ["h", "H", "hB"],
                    AM: ["H", "hB"],
                    AO: ["H", "hB"],
                    AR: ["H", "h", "hB", "hb"],
                    AS: ["h", "H"],
                    AT: ["H", "hB"],
                    AU: ["h", "hb", "H", "hB"],
                    AW: ["H", "hB"],
                    AX: ["H"],
                    AZ: ["H", "hB", "h"],
                    BA: ["H", "hB", "h"],
                    BB: ["h", "hb", "H", "hB"],
                    BD: ["h", "hB", "H"],
                    BE: ["H", "hB"],
                    BF: ["H", "hB"],
                    BG: ["H", "hB", "h"],
                    BH: ["h", "hB", "hb", "H"],
                    BI: ["H", "h"],
                    BJ: ["H", "hB"],
                    BL: ["H", "hB"],
                    BM: ["h", "hb", "H", "hB"],
                    BN: ["hb", "hB", "h", "H"],
                    BO: ["H", "hB", "h", "hb"],
                    BQ: ["H"],
                    BR: ["H", "hB"],
                    BS: ["h", "hb", "H", "hB"],
                    BT: ["h", "H"],
                    BW: ["H", "h", "hb", "hB"],
                    BY: ["H", "h"],
                    BZ: ["H", "h", "hb", "hB"],
                    CA: ["h", "hb", "H", "hB"],
                    CC: ["H", "h", "hb", "hB"],
                    CD: ["hB", "H"],
                    CF: ["H", "h", "hB"],
                    CG: ["H", "hB"],
                    CH: ["H", "hB", "h"],
                    CI: ["H", "hB"],
                    CK: ["H", "h", "hb", "hB"],
                    CL: ["H", "h", "hB", "hb"],
                    CM: ["H", "h", "hB"],
                    CN: ["H", "hB", "hb", "h"],
                    CO: ["h", "H", "hB", "hb"],
                    CP: ["H"],
                    CR: ["H", "h", "hB", "hb"],
                    CU: ["H", "h", "hB", "hb"],
                    CV: ["H", "hB"],
                    CW: ["H", "hB"],
                    CX: ["H", "h", "hb", "hB"],
                    CY: ["h", "H", "hb", "hB"],
                    CZ: ["H"],
                    DE: ["H", "hB"],
                    DG: ["H", "h", "hb", "hB"],
                    DJ: ["h", "H"],
                    DK: ["H"],
                    DM: ["h", "hb", "H", "hB"],
                    DO: ["h", "H", "hB", "hb"],
                    DZ: ["h", "hB", "hb", "H"],
                    EA: ["H", "h", "hB", "hb"],
                    EC: ["H", "hB", "h", "hb"],
                    EE: ["H", "hB"],
                    EG: ["h", "hB", "hb", "H"],
                    EH: ["h", "hB", "hb", "H"],
                    ER: ["h", "H"],
                    ES: ["H", "hB", "h", "hb"],
                    ET: ["hB", "hb", "h", "H"],
                    FI: ["H"],
                    FJ: ["h", "hb", "H", "hB"],
                    FK: ["H", "h", "hb", "hB"],
                    FM: ["h", "hb", "H", "hB"],
                    FO: ["H", "h"],
                    FR: ["H", "hB"],
                    GA: ["H", "hB"],
                    GB: ["H", "h", "hb", "hB"],
                    GD: ["h", "hb", "H", "hB"],
                    GE: ["H", "hB", "h"],
                    GF: ["H", "hB"],
                    GG: ["H", "h", "hb", "hB"],
                    GH: ["h", "H"],
                    GI: ["H", "h", "hb", "hB"],
                    GL: ["H", "h"],
                    GM: ["h", "hb", "H", "hB"],
                    GN: ["H", "hB"],
                    GP: ["H", "hB"],
                    GQ: ["H", "hB", "h", "hb"],
                    GR: ["h", "H", "hb", "hB"],
                    GT: ["H", "h", "hB", "hb"],
                    GU: ["h", "hb", "H", "hB"],
                    GW: ["H", "hB"],
                    GY: ["h", "hb", "H", "hB"],
                    HK: ["h", "hB", "hb", "H"],
                    HN: ["H", "h", "hB", "hb"],
                    HR: ["H", "hB"],
                    HU: ["H", "h"],
                    IC: ["H", "h", "hB", "hb"],
                    ID: ["H"],
                    IE: ["H", "h", "hb", "hB"],
                    IL: ["H", "hB"],
                    IM: ["H", "h", "hb", "hB"],
                    IN: ["h", "H"],
                    IO: ["H", "h", "hb", "hB"],
                    IQ: ["h", "hB", "hb", "H"],
                    IR: ["hB", "H"],
                    IS: ["H"],
                    IT: ["H", "hB"],
                    JE: ["H", "h", "hb", "hB"],
                    JM: ["h", "hb", "H", "hB"],
                    JO: ["h", "hB", "hb", "H"],
                    JP: ["H", "K", "h"],
                    KE: ["hB", "hb", "H", "h"],
                    KG: ["H", "h", "hB", "hb"],
                    KH: ["hB", "h", "H", "hb"],
                    KI: ["h", "hb", "H", "hB"],
                    KM: ["H", "h", "hB", "hb"],
                    KN: ["h", "hb", "H", "hB"],
                    KP: ["h", "H", "hB", "hb"],
                    KR: ["h", "H", "hB", "hb"],
                    KW: ["h", "hB", "hb", "H"],
                    KY: ["h", "hb", "H", "hB"],
                    KZ: ["H", "hB"],
                    LA: ["H", "hb", "hB", "h"],
                    LB: ["h", "hB", "hb", "H"],
                    LC: ["h", "hb", "H", "hB"],
                    LI: ["H", "hB", "h"],
                    LK: ["H", "h", "hB", "hb"],
                    LR: ["h", "hb", "H", "hB"],
                    LS: ["h", "H"],
                    LT: ["H", "h", "hb", "hB"],
                    LU: ["H", "h", "hB"],
                    LV: ["H", "hB", "hb", "h"],
                    LY: ["h", "hB", "hb", "H"],
                    MA: ["H", "h", "hB", "hb"],
                    MC: ["H", "hB"],
                    MD: ["H", "hB"],
                    ME: ["H", "hB", "h"],
                    MF: ["H", "hB"],
                    MG: ["H", "h"],
                    MH: ["h", "hb", "H", "hB"],
                    MK: ["H", "h", "hb", "hB"],
                    ML: ["H"],
                    MM: ["hB", "hb", "H", "h"],
                    MN: ["H", "h", "hb", "hB"],
                    MO: ["h", "hB", "hb", "H"],
                    MP: ["h", "hb", "H", "hB"],
                    MQ: ["H", "hB"],
                    MR: ["h", "hB", "hb", "H"],
                    MS: ["H", "h", "hb", "hB"],
                    MT: ["H", "h"],
                    MU: ["H", "h"],
                    MV: ["H", "h"],
                    MW: ["h", "hb", "H", "hB"],
                    MX: ["H", "h", "hB", "hb"],
                    MY: ["hb", "hB", "h", "H"],
                    MZ: ["H", "hB"],
                    NA: ["h", "H", "hB", "hb"],
                    NC: ["H", "hB"],
                    NE: ["H"],
                    NF: ["H", "h", "hb", "hB"],
                    NG: ["H", "h", "hb", "hB"],
                    NI: ["H", "h", "hB", "hb"],
                    NL: ["H", "hB"],
                    NO: ["H", "h"],
                    NP: ["H", "h", "hB"],
                    NR: ["H", "h", "hb", "hB"],
                    NU: ["H", "h", "hb", "hB"],
                    NZ: ["h", "hb", "H", "hB"],
                    OM: ["h", "hB", "hb", "H"],
                    PA: ["h", "H", "hB", "hb"],
                    PE: ["H", "hB", "h", "hb"],
                    PF: ["H", "h", "hB"],
                    PG: ["h", "H"],
                    PH: ["h", "hB", "hb", "H"],
                    PK: ["h", "hB", "H"],
                    PL: ["H", "h"],
                    PM: ["H", "hB"],
                    PN: ["H", "h", "hb", "hB"],
                    PR: ["h", "H", "hB", "hb"],
                    PS: ["h", "hB", "hb", "H"],
                    PT: ["H", "hB"],
                    PW: ["h", "H"],
                    PY: ["H", "h", "hB", "hb"],
                    QA: ["h", "hB", "hb", "H"],
                    RE: ["H", "hB"],
                    RO: ["H", "hB"],
                    RS: ["H", "hB", "h"],
                    RU: ["H"],
                    RW: ["H", "h"],
                    SA: ["h", "hB", "hb", "H"],
                    SB: ["h", "hb", "H", "hB"],
                    SC: ["H", "h", "hB"],
                    SD: ["h", "hB", "hb", "H"],
                    SE: ["H"],
                    SG: ["h", "hb", "H", "hB"],
                    SH: ["H", "h", "hb", "hB"],
                    SI: ["H", "hB"],
                    SJ: ["H"],
                    SK: ["H"],
                    SL: ["h", "hb", "H", "hB"],
                    SM: ["H", "h", "hB"],
                    SN: ["H", "h", "hB"],
                    SO: ["h", "H"],
                    SR: ["H", "hB"],
                    SS: ["h", "hb", "H", "hB"],
                    ST: ["H", "hB"],
                    SV: ["H", "h", "hB", "hb"],
                    SX: ["H", "h", "hb", "hB"],
                    SY: ["h", "hB", "hb", "H"],
                    SZ: ["h", "hb", "H", "hB"],
                    TA: ["H", "h", "hb", "hB"],
                    TC: ["h", "hb", "H", "hB"],
                    TD: ["h", "H", "hB"],
                    TF: ["H", "h", "hB"],
                    TG: ["H", "hB"],
                    TH: ["H", "h"],
                    TJ: ["H", "h"],
                    TL: ["H", "hB", "hb", "h"],
                    TM: ["H", "h"],
                    TN: ["h", "hB", "hb", "H"],
                    TO: ["h", "H"],
                    TR: ["H", "hB"],
                    TT: ["h", "hb", "H", "hB"],
                    TW: ["hB", "hb", "h", "H"],
                    TZ: ["hB", "hb", "H", "h"],
                    UA: ["H", "hB", "h"],
                    UG: ["hB", "hb", "H", "h"],
                    UM: ["h", "hb", "H", "hB"],
                    US: ["h", "hb", "H", "hB"],
                    UY: ["H", "h", "hB", "hb"],
                    UZ: ["H", "hB", "h"],
                    VA: ["H", "h", "hB"],
                    VC: ["h", "hb", "H", "hB"],
                    VE: ["h", "H", "hB", "hb"],
                    VG: ["h", "hb", "H", "hB"],
                    VI: ["h", "hb", "H", "hB"],
                    VN: ["H", "h"],
                    VU: ["h", "H"],
                    WF: ["H", "hB"],
                    WS: ["h", "H"],
                    XK: ["H", "hB", "h"],
                    YE: ["h", "hB", "hb", "H"],
                    YT: ["H", "hB"],
                    ZA: ["H", "h", "hb", "hB"],
                    ZM: ["h", "hb", "H", "hB"],
                    ZW: ["H", "h"],
                    "af-ZA": ["H", "h", "hB", "hb"],
                    "ar-001": ["h", "hB", "hb", "H"],
                    "ca-ES": ["H", "h", "hB"],
                    "en-001": ["h", "hb", "H", "hB"],
                    "es-BO": ["H", "h", "hB", "hb"],
                    "es-BR": ["H", "h", "hB", "hb"],
                    "es-EC": ["H", "h", "hB", "hb"],
                    "es-ES": ["H", "h", "hB", "hb"],
                    "es-GQ": ["H", "h", "hB", "hb"],
                    "es-PE": ["H", "h", "hB", "hb"],
                    "fr-CA": ["H", "h", "hB"],
                    "gl-ES": ["H", "h", "hB"],
                    "gu-IN": ["hB", "hb", "h", "H"],
                    "hi-IN": ["hB", "h", "H"],
                    "it-CH": ["H", "h", "hB"],
                    "it-IT": ["H", "h", "hB"],
                    "kn-IN": ["hB", "h", "H"],
                    "ml-IN": ["hB", "h", "H"],
                    "mr-IN": ["hB", "hb", "h", "H"],
                    "pa-IN": ["hB", "hb", "h", "H"],
                    "ta-IN": ["hB", "h", "hb", "H"],
                    "te-IN": ["hB", "h", "H"],
                    "zu-ZA": ["H", "hB", "hb", "h"]
                },
                F = new RegExp("^".concat(S.source, "*")),
                k = new RegExp("".concat(S.source, "*$"));

            function V(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var X = !!String.prototype.startsWith && "_a".startsWith("a", 1),
                x = !!String.fromCodePoint,
                K = !!Object.fromEntries,
                j = !!String.prototype.codePointAt,
                Y = !!String.prototype.trimStart,
                Z = !!String.prototype.trimEnd,
                W = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e)
                },
                z = !0;
            try {
                var Q = en("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                z = (null === (l = Q.exec("a")) || void 0 === l ? void 0 : l[0]) === "a"
            } catch (e) {
                z = !1
            }
            var J = X ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                q = x ? String.fromCodePoint : function() {
                    for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    for (var n = "", i = t.length, o = 0; i > o;) {
                        if ((e = t[o++]) > 1114111) throw RangeError(e + " is not a valid code point");
                        n += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320)
                    }
                    return n
                },
                $ = K ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r],
                            i = n[0],
                            o = n[1];
                        t[i] = o
                    }
                    return t
                },
                ee = j ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r, n = e.length;
                    if (!(t < 0) && !(t >= n)) {
                        var i = e.charCodeAt(t);
                        return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : (i - 55296 << 10) + (r - 56320) + 65536
                    }
                },
                et = Y ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(F, "")
                },
                er = Z ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(k, "")
                };

            function en(e, t) {
                return new RegExp(e, t)
            }
            if (z) {
                var ei = en("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                p = function(e, t) {
                    var r;
                    return ei.lastIndex = t, null !== (r = ei.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else p = function(e, t) {
                for (var r = [];;) {
                    var n, i = ee(e, t);
                    if (void 0 === i || es(i) || (n = i) >= 33 && n <= 35 || 36 === n || n >= 37 && n <= 39 || 40 === n || 41 === n || 42 === n || 43 === n || 44 === n || 45 === n || n >= 46 && n <= 47 || n >= 58 && n <= 59 || n >= 60 && n <= 62 || n >= 63 && n <= 64 || 91 === n || 92 === n || 93 === n || 94 === n || 96 === n || 123 === n || 124 === n || 125 === n || 126 === n || 161 === n || n >= 162 && n <= 165 || 166 === n || 167 === n || 169 === n || 171 === n || 172 === n || 174 === n || 176 === n || 177 === n || 182 === n || 187 === n || 191 === n || 215 === n || 247 === n || n >= 8208 && n <= 8213 || n >= 8214 && n <= 8215 || 8216 === n || 8217 === n || 8218 === n || n >= 8219 && n <= 8220 || 8221 === n || 8222 === n || 8223 === n || n >= 8224 && n <= 8231 || n >= 8240 && n <= 8248 || 8249 === n || 8250 === n || n >= 8251 && n <= 8254 || n >= 8257 && n <= 8259 || 8260 === n || 8261 === n || 8262 === n || n >= 8263 && n <= 8273 || 8274 === n || 8275 === n || n >= 8277 && n <= 8286 || n >= 8592 && n <= 8596 || n >= 8597 && n <= 8601 || n >= 8602 && n <= 8603 || n >= 8604 && n <= 8607 || 8608 === n || n >= 8609 && n <= 8610 || 8611 === n || n >= 8612 && n <= 8613 || 8614 === n || n >= 8615 && n <= 8621 || 8622 === n || n >= 8623 && n <= 8653 || n >= 8654 && n <= 8655 || n >= 8656 && n <= 8657 || 8658 === n || 8659 === n || 8660 === n || n >= 8661 && n <= 8691 || n >= 8692 && n <= 8959 || n >= 8960 && n <= 8967 || 8968 === n || 8969 === n || 8970 === n || 8971 === n || n >= 8972 && n <= 8991 || n >= 8992 && n <= 8993 || n >= 8994 && n <= 9e3 || 9001 === n || 9002 === n || n >= 9003 && n <= 9083 || 9084 === n || n >= 9085 && n <= 9114 || n >= 9115 && n <= 9139 || n >= 9140 && n <= 9179 || n >= 9180 && n <= 9185 || n >= 9186 && n <= 9254 || n >= 9255 && n <= 9279 || n >= 9280 && n <= 9290 || n >= 9291 && n <= 9311 || n >= 9472 && n <= 9654 || 9655 === n || n >= 9656 && n <= 9664 || 9665 === n || n >= 9666 && n <= 9719 || n >= 9720 && n <= 9727 || n >= 9728 && n <= 9838 || 9839 === n || n >= 9840 && n <= 10087 || 10088 === n || 10089 === n || 10090 === n || 10091 === n || 10092 === n || 10093 === n || 10094 === n || 10095 === n || 10096 === n || 10097 === n || 10098 === n || 10099 === n || 10100 === n || 10101 === n || n >= 10132 && n <= 10175 || n >= 10176 && n <= 10180 || 10181 === n || 10182 === n || n >= 10183 && n <= 10213 || 10214 === n || 10215 === n || 10216 === n || 10217 === n || 10218 === n || 10219 === n || 10220 === n || 10221 === n || 10222 === n || 10223 === n || n >= 10224 && n <= 10239 || n >= 10240 && n <= 10495 || n >= 10496 && n <= 10626 || 10627 === n || 10628 === n || 10629 === n || 10630 === n || 10631 === n || 10632 === n || 10633 === n || 10634 === n || 10635 === n || 10636 === n || 10637 === n || 10638 === n || 10639 === n || 10640 === n || 10641 === n || 10642 === n || 10643 === n || 10644 === n || 10645 === n || 10646 === n || 10647 === n || 10648 === n || n >= 10649 && n <= 10711 || 10712 === n || 10713 === n || 10714 === n || 10715 === n || n >= 10716 && n <= 10747 || 10748 === n || 10749 === n || n >= 10750 && n <= 11007 || n >= 11008 && n <= 11055 || n >= 11056 && n <= 11076 || n >= 11077 && n <= 11078 || n >= 11079 && n <= 11084 || n >= 11085 && n <= 11123 || n >= 11124 && n <= 11125 || n >= 11126 && n <= 11157 || 11158 === n || n >= 11159 && n <= 11263 || n >= 11776 && n <= 11777 || 11778 === n || 11779 === n || 11780 === n || 11781 === n || n >= 11782 && n <= 11784 || 11785 === n || 11786 === n || 11787 === n || 11788 === n || 11789 === n || n >= 11790 && n <= 11798 || 11799 === n || n >= 11800 && n <= 11801 || 11802 === n || 11803 === n || 11804 === n || 11805 === n || n >= 11806 && n <= 11807 || 11808 === n || 11809 === n || 11810 === n || 11811 === n || 11812 === n || 11813 === n || 11814 === n || 11815 === n || 11816 === n || 11817 === n || n >= 11818 && n <= 11822 || 11823 === n || n >= 11824 && n <= 11833 || n >= 11834 && n <= 11835 || n >= 11836 && n <= 11839 || 11840 === n || 11841 === n || 11842 === n || n >= 11843 && n <= 11855 || n >= 11856 && n <= 11857 || 11858 === n || n >= 11859 && n <= 11903 || n >= 12289 && n <= 12291 || 12296 === n || 12297 === n || 12298 === n || 12299 === n || 12300 === n || 12301 === n || 12302 === n || 12303 === n || 12304 === n || 12305 === n || n >= 12306 && n <= 12307 || 12308 === n || 12309 === n || 12310 === n || 12311 === n || 12312 === n || 12313 === n || 12314 === n || 12315 === n || 12316 === n || 12317 === n || n >= 12318 && n <= 12319 || 12320 === n || 12336 === n || 64830 === n || 64831 === n || n >= 65093 && n <= 65094) break;
                    r.push(i), t += i >= 65536 ? 2 : 1
                }
                return q.apply(void 0, r)
            };
            var eo = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var n = []; !this.isEOF();) {
                        var i = this.char();
                        if (123 === i) {
                            var o = this.parseArgument(e, r);
                            if (o.err) return o;
                            n.push(o.val)
                        } else if (125 === i && e > 0) break;
                        else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                            var h = this.clonePosition();
                            this.bump(), n.push({
                                type: u.pound,
                                location: V(h, this.clonePosition())
                            })
                        } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                            if (60 === i && !this.ignoreTag && eh(this.peek() || 0)) {
                                var o = this.parseTag(e, t);
                                if (o.err) return o;
                                n.push(o.val)
                            } else {
                                var o = this.parseLiteral(e, t);
                                if (o.err) return o;
                                n.push(o.val)
                            }
                        } else {
                            if (!r) return this.error(a.UNMATCHED_CLOSING_TAG, V(this.clonePosition(), this.clonePosition()));
                            break
                        }
                    }
                    return {
                        val: n,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var n = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: u.literal,
                            value: "<".concat(n, "/>"),
                            location: V(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (!this.bumpIf(">")) return this.error(a.INVALID_TAG, V(r, this.clonePosition()));
                    var i = this.parseMessage(e + 1, t, !0);
                    if (i.err) return i;
                    var o = i.val,
                        h = this.clonePosition();
                    if (!this.bumpIf("</")) return this.error(a.UNCLOSED_TAG, V(r, this.clonePosition()));
                    if (this.isEOF() || !eh(this.char())) return this.error(a.INVALID_TAG, V(h, this.clonePosition()));
                    var s = this.clonePosition();
                    return n !== this.parseTagName() ? this.error(a.UNMATCHED_CLOSING_TAG, V(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                        val: {
                            type: u.tag,
                            value: n,
                            children: o,
                            location: V(r, this.clonePosition())
                        },
                        err: null
                    } : this.error(a.INVALID_TAG, V(h, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var i = this.tryParseQuote(t);
                        if (i) {
                            n += i;
                            continue
                        }
                        var o = this.tryParseUnquoted(e, t);
                        if (o) {
                            n += o;
                            continue
                        }
                        var h = this.tryParseLeftAngleBracket();
                        if (h) {
                            n += h;
                            continue
                        }
                        break
                    }
                    var s = V(r, this.clonePosition());
                    return {
                        val: {
                            type: u.literal,
                            value: n,
                            location: s
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    var e;
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (eh(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 === this.peek()) t.push(39), this.bump();
                            else {
                                this.bump();
                                break
                            }
                        } else t.push(r);
                        this.bump()
                    }
                    return q.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), q(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(a.EMPTY_ARGUMENT, V(r, this.clonePosition()));
                    var n = this.parseIdentifierIfPossible().value;
                    if (!n) return this.error(a.MALFORMED_ARGUMENT, V(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: u.argument,
                                    value: n,
                                    location: V(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(r, this.clonePosition()));
                            return this.parseArgumentOptions(e, t, n, r);
                        default:
                            return this.error(a.MALFORMED_ARGUMENT, V(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = p(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: V(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
                    var i, o = this.clonePosition(),
                        h = this.parseIdentifierIfPossible().value,
                        s = this.clonePosition();
                    switch (h) {
                        case "":
                            return this.error(a.EXPECT_ARGUMENT_TYPE, V(o, s));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var l = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var p = this.clonePosition(),
                                    f = this.parseSimpleArgStyleIfPossible();
                                if (f.err) return f;
                                var E = er(f.val);
                                if (0 === E.length) return this.error(a.EXPECT_ARGUMENT_STYLE, V(this.clonePosition(), this.clonePosition()));
                                l = {
                                    style: E,
                                    styleLocation: V(p, this.clonePosition())
                                }
                            }
                            var m = this.tryParseArgumentClose(n);
                            if (m.err) return m;
                            var b = V(n, this.clonePosition());
                            if (l && J(null == l ? void 0 : l.style, "::", 0)) {
                                var H, y = et(l.style.slice(2));
                                if ("number" === h) {
                                    var f = this.parseNumberSkeletonFromString(y, l.styleLocation);
                                    if (f.err) return f;
                                    return {
                                        val: {
                                            type: u.number,
                                            value: r,
                                            location: b,
                                            style: f.val
                                        },
                                        err: null
                                    }
                                }
                                if (0 === y.length) return this.error(a.EXPECT_DATE_TIME_SKELETON, b);
                                var T = y;
                                this.locale && (T = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var i = e.charAt(n);
                                        if ("j" === i) {
                                            for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                                            var h = 1 + (1 & o),
                                                s = o < 2 ? 1 : 3 + (o >> 1),
                                                a = function(e) {
                                                    var t, r = e.hourCycle;
                                                    if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle")
                                                    }
                                                    var n = e.language;
                                                    return "root" !== n && (t = e.maximize().region), (w[t || ""] || w[n || ""] || w["".concat(n, "-001")] || w["001"])[0]
                                                }(t);
                                            for (("H" == a || "k" == a) && (s = 0); s-- > 0;) r += "a";
                                            for (; h-- > 0;) r = a + r
                                        } else "J" === i ? r += "H" : r += i
                                    }
                                    return r
                                }(y, this.locale));
                                var E = {
                                    type: c.dateTime,
                                    pattern: T,
                                    location: l.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? (H = {}, T.replace(N, function(e) {
                                        var t = e.length;
                                        switch (e[0]) {
                                            case "G":
                                                H.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "y":
                                                H.year = 2 === t ? "2-digit" : "numeric";
                                                break;
                                            case "Y":
                                            case "u":
                                            case "U":
                                            case "r":
                                                throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                            case "q":
                                            case "Q":
                                                throw RangeError("`q/Q` (quarter) patterns are not supported");
                                            case "M":
                                            case "L":
                                                H.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                break;
                                            case "w":
                                            case "W":
                                                throw RangeError("`w/W` (week) patterns are not supported");
                                            case "d":
                                                H.day = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "D":
                                            case "F":
                                            case "g":
                                                throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                            case "E":
                                                H.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "e":
                                                if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                H.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "c":
                                                if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                H.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "a":
                                                H.hour12 = !0;
                                                break;
                                            case "b":
                                            case "B":
                                                throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                            case "h":
                                                H.hourCycle = "h12", H.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "H":
                                                H.hourCycle = "h23", H.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "K":
                                                H.hourCycle = "h11", H.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "k":
                                                H.hourCycle = "h24", H.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "j":
                                            case "J":
                                            case "C":
                                                throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                            case "m":
                                                H.minute = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "s":
                                                H.second = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "S":
                                            case "A":
                                                throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                            case "z":
                                                H.timeZoneName = t < 4 ? "short" : "long";
                                                break;
                                            case "Z":
                                            case "O":
                                            case "v":
                                            case "V":
                                            case "X":
                                            case "x":
                                                throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                        }
                                        return ""
                                    }), H) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === h ? u.date : u.time,
                                        value: r,
                                        location: b,
                                        style: E
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === h ? u.number : "date" === h ? u.date : u.time,
                                    value: r,
                                    location: b,
                                    style: null !== (i = null == l ? void 0 : l.style) && void 0 !== i ? i : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var d = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS, V(d, g({}, d)));
                            this.bumpSpace();
                            var B = this.parseIdentifierIfPossible(),
                                v = 0;
                            if ("select" !== h && "offset" === B.value) {
                                if (!this.bumpIf(":")) return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, V(this.clonePosition(), this.clonePosition()));
                                this.bumpSpace();
                                var f = this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                                if (f.err) return f;
                                this.bumpSpace(), B = this.parseIdentifierIfPossible(), v = f.val
                            }
                            var _ = this.tryParsePluralOrSelectOptions(e, h, t, B);
                            if (_.err) return _;
                            var m = this.tryParseArgumentClose(n);
                            if (m.err) return m;
                            var A = V(n, this.clonePosition());
                            if ("select" === h) return {
                                val: {
                                    type: u.select,
                                    value: r,
                                    options: $(_.val),
                                    location: A
                                },
                                err: null
                            };
                            return {
                                val: {
                                    type: u.plural,
                                    value: r,
                                    options: $(_.val),
                                    offset: v,
                                    pluralType: "plural" === h ? "cardinal" : "ordinal",
                                    location: A
                                },
                                err: null
                            };
                        default:
                            return this.error(a.INVALID_ARGUMENT_TYPE, V(o, s))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, V(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
                        case 39:
                            this.bump();
                            var r = this.clonePosition();
                            if (!this.bumpUntil("'")) return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, V(r, this.clonePosition()));
                            this.bump();
                            break;
                        case 123:
                            e += 1, this.bump();
                            break;
                        case 125:
                            if (!(e > 0)) return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                            e -= 1;
                            break;
                        default:
                            this.bump()
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw Error("Number skeleton cannot be empty");
                            for (var t = e.split(I).filter(function(e) {
                                    return e.length > 0
                                }), r = [], n = 0; n < t.length; n++) {
                                var i = t[n].split("/");
                                if (0 === i.length) throw Error("Invalid number skeleton");
                                for (var o = i[0], h = i.slice(1), s = 0; s < h.length; s++)
                                    if (0 === h[s].length) throw Error("Invalid number skeleton");
                                r.push({
                                    stem: o,
                                    options: h
                                })
                            }
                            return r
                        }(e)
                    } catch (e) {
                        return this.error(a.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: c.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? function(e) {
                                for (var t = {}, r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    switch (n.stem) {
                                        case "percent":
                                        case "%":
                                            t.style = "percent";
                                            continue;
                                        case "%x100":
                                            t.style = "percent", t.scale = 100;
                                            continue;
                                        case "currency":
                                            t.style = "currency", t.currency = n.options[0];
                                            continue;
                                        case "group-off":
                                        case ",_":
                                            t.useGrouping = !1;
                                            continue;
                                        case "precision-integer":
                                        case ".":
                                            t.maximumFractionDigits = 0;
                                            continue;
                                        case "measure-unit":
                                        case "unit":
                                            t.style = "unit", t.unit = n.options[0].replace(/^(.*?)-/, "");
                                            continue;
                                        case "compact-short":
                                        case "K":
                                            t.notation = "compact", t.compactDisplay = "short";
                                            continue;
                                        case "compact-long":
                                        case "KK":
                                            t.notation = "compact", t.compactDisplay = "long";
                                            continue;
                                        case "scientific":
                                            t = g(g(g({}, t), {
                                                notation: "scientific"
                                            }), n.options.reduce(function(e, t) {
                                                return g(g({}, e), G(t) || {})
                                            }, {}));
                                            continue;
                                        case "engineering":
                                            t = g(g(g({}, t), {
                                                notation: "engineering"
                                            }), n.options.reduce(function(e, t) {
                                                return g(g({}, e), G(t) || {})
                                            }, {}));
                                            continue;
                                        case "notation-simple":
                                            t.notation = "standard";
                                            continue;
                                        case "unit-width-narrow":
                                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                            continue;
                                        case "unit-width-short":
                                            t.currencyDisplay = "code", t.unitDisplay = "short";
                                            continue;
                                        case "unit-width-full-name":
                                            t.currencyDisplay = "name", t.unitDisplay = "long";
                                            continue;
                                        case "unit-width-iso-code":
                                            t.currencyDisplay = "symbol";
                                            continue;
                                        case "scale":
                                            t.scale = parseFloat(n.options[0]);
                                            continue;
                                        case "rounding-mode-floor":
                                            t.roundingMode = "floor";
                                            continue;
                                        case "rounding-mode-ceiling":
                                            t.roundingMode = "ceil";
                                            continue;
                                        case "rounding-mode-down":
                                            t.roundingMode = "trunc";
                                            continue;
                                        case "rounding-mode-up":
                                            t.roundingMode = "expand";
                                            continue;
                                        case "rounding-mode-half-even":
                                            t.roundingMode = "halfEven";
                                            continue;
                                        case "rounding-mode-half-down":
                                            t.roundingMode = "halfTrunc";
                                            continue;
                                        case "rounding-mode-half-up":
                                            t.roundingMode = "halfExpand";
                                            continue;
                                        case "integer-width":
                                            if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                            n.options[0].replace(M, function(e, r, n, i, o, h) {
                                                if (r) t.minimumIntegerDigits = n.length;
                                                else if (i && o) throw Error("We currently do not support maximum integer digits");
                                                else if (h) throw Error("We currently do not support exact integer digits");
                                                return ""
                                            });
                                            continue
                                    }
                                    if (O.test(n.stem)) {
                                        t.minimumIntegerDigits = n.stem.length;
                                        continue
                                    }
                                    if (C.test(n.stem)) {
                                        if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                        n.stem.replace(C, function(e, r, n, i, o, h) {
                                            return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && h ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + h.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                        });
                                        var i = n.options[0];
                                        "w" === i ? t = g(g({}, t), {
                                            trailingZeroDisplay: "stripIfInteger"
                                        }) : i && (t = g(g({}, t), U(i)));
                                        continue
                                    }
                                    if (R.test(n.stem)) {
                                        t = g(g({}, t), U(n.stem));
                                        continue
                                    }
                                    var o = G(n.stem);
                                    o && (t = g(g({}, t), o));
                                    var h = function(e) {
                                        var t;
                                        if ("E" === e[0] && "E" === e[1] ? (t = {
                                                notation: "engineering"
                                            }, e = e.slice(2)) : "E" === e[0] && (t = {
                                                notation: "scientific"
                                            }, e = e.slice(1)), t) {
                                            var r = e.slice(0, 2);
                                            if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !O.test(e)) throw Error("Malformed concise eng/scientific notation");
                                            t.minimumIntegerDigits = e.length
                                        }
                                        return t
                                    }(n.stem);
                                    h && (t = g(g({}, t), h))
                                }
                                return t
                            }(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
                    for (var i, o = !1, h = [], s = new Set, u = n.value, c = n.location;;) {
                        if (0 === u.length) {
                            var l = this.clonePosition();
                            if ("select" !== t && this.bumpIf("=")) {
                                var p = this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR, a.INVALID_PLURAL_ARGUMENT_SELECTOR);
                                if (p.err) return p;
                                c = V(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
                            } else break
                        }
                        if (s.has(u)) return this.error("select" === t ? a.DUPLICATE_SELECT_ARGUMENT_SELECTOR : a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (o = !0), this.bumpSpace();
                        var f = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, V(this.clonePosition(), this.clonePosition()));
                        var E = this.parseMessage(e + 1, t, r);
                        if (E.err) return E;
                        var m = this.tryParseArgumentClose(f);
                        if (m.err) return m;
                        h.push([u, {
                            value: E.val,
                            location: V(f, this.clonePosition())
                        }]), s.add(u), this.bumpSpace(), u = (i = this.parseIdentifierIfPossible()).value, c = i.location
                    }
                    return 0 === h.length ? this.error("select" === t ? a.EXPECT_SELECT_ARGUMENT_SELECTOR : a.EXPECT_PLURAL_ARGUMENT_SELECTOR, V(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(a.MISSING_OTHER_CLAUSE, V(this.clonePosition(), this.clonePosition())) : {
                        val: h,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var i = !1, o = 0; !this.isEOF();) {
                        var h = this.char();
                        if (h >= 48 && h <= 57) i = !0, o = 10 * o + (h - 48), this.bump();
                        else break
                    }
                    var s = V(n, this.clonePosition());
                    return i ? W(o *= r) ? {
                        val: o,
                        err: null
                    } : this.error(t, s) : this.error(e, s)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = ee(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (J(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && es(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null != r ? r : null
                }, e
            }();

            function eh(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function es(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function ea(e, t) {
                void 0 === t && (t = {});
                var r = new eo(e, t = g({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t)).parse();
                if (r.err) {
                    var n = SyntaxError(a[r.err.kind]);
                    throw n.location = r.err.location, n.originalMessage = r.err.message, n
                }
                return (null == t ? void 0 : t.captureLocation) || function e(t) {
                    t.forEach(function(t) {
                        if (delete t.location, v(t) || _(t))
                            for (var r in t.options) delete t.options[r].location, e(t.options[r].value);
                        else T(t) && P(t.style) ? delete t.style.location : (d(t) || B(t)) && L(t.style) ? delete t.style.location : A(t) && e(t.children)
                    })
                }(r.val), r.val
            }

            function eu(e, t) {
                var r = t && t.cache ? t.cache : eE,
                    n = t && t.serializer ? t.serializer : ep;
                return (t && t.strategy ? t.strategy : function(e, t) {
                    var r, n, i = 1 === e.length ? ec : el;
                    return r = t.cache.create(), n = t.serializer, i.bind(this, e, r, n)
                })(e, {
                    cache: r,
                    serializer: n
                })
            }

            function ec(e, t, r, n) {
                var i = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
                    o = t.get(i);
                return void 0 === o && (o = e.call(this, n), t.set(i, o)), o
            }

            function el(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    o = t.get(i);
                return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
            }
            var ep = function() {
                return JSON.stringify(arguments)
            };

            function ef() {
                this.cache = Object.create(null)
            }
            ef.prototype.get = function(e) {
                return this.cache[e]
            }, ef.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var eE = {
                    create: function() {
                        return new ef
                    }
                },
                em = {
                    variadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, el.bind(this, e, r, n)
                    },
                    monadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, ec.bind(this, e, r, n)
                    }
                };
            (h = f || (f = {})).MISSING_VALUE = "MISSING_VALUE", h.INVALID_VALUE = "INVALID_VALUE", h.MISSING_INTL_API = "MISSING_INTL_API";
            var eb = function(e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return i.code = r, i.originalMessage = n, i
                    }
                    return b(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                eg = function(e) {
                    function t(t, r, n, i) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), f.INVALID_VALUE, i) || this
                    }
                    return b(t, e), t
                }(eb),
                eH = function(e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), f.INVALID_VALUE, n) || this
                    }
                    return b(t, e), t
                }(eb),
                ey = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), f.MISSING_VALUE, r) || this
                    }
                    return b(t, e), t
                }(eb);

            function eT(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }(s = E || (E = {}))[s.literal = 0] = "literal", s[s.object = 1] = "object";
            var ed = function() {
                function e(t, r, n, i) {
                    var o, h, s = this;
                    if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(e) {
                            var t = s.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function(e, t) {
                                return e.length && t.type === E.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                            }, []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(e) {
                            return function e(t, r, n, i, o, h, s) {
                                if (1 === t.length && y(t[0])) return [{
                                    type: E.literal,
                                    value: t[0].value
                                }];
                                for (var a = [], c = 0; c < t.length; c++) {
                                    var l = t[c];
                                    if (y(l)) {
                                        a.push({
                                            type: E.literal,
                                            value: l.value
                                        });
                                        continue
                                    }
                                    if (l.type === u.pound) {
                                        "number" == typeof h && a.push({
                                            type: E.literal,
                                            value: n.getNumberFormat(r).format(h)
                                        });
                                        continue
                                    }
                                    var p = l.value;
                                    if (!(o && p in o)) throw new ey(p, s);
                                    var m = o[p];
                                    if (l.type === u.argument) {
                                        m && "string" != typeof m && "number" != typeof m || (m = "string" == typeof m || "number" == typeof m ? String(m) : ""), a.push({
                                            type: "string" == typeof m ? E.literal : E.object,
                                            value: m
                                        });
                                        continue
                                    }
                                    if (d(l)) {
                                        var b = "string" == typeof l.style ? i.date[l.style] : L(l.style) ? l.style.parsedOptions : void 0;
                                        a.push({
                                            type: E.literal,
                                            value: n.getDateTimeFormat(r, b).format(m)
                                        });
                                        continue
                                    }
                                    if (B(l)) {
                                        var b = "string" == typeof l.style ? i.time[l.style] : L(l.style) ? l.style.parsedOptions : i.time.medium;
                                        a.push({
                                            type: E.literal,
                                            value: n.getDateTimeFormat(r, b).format(m)
                                        });
                                        continue
                                    }
                                    if (T(l)) {
                                        var b = "string" == typeof l.style ? i.number[l.style] : P(l.style) ? l.style.parsedOptions : void 0;
                                        b && b.scale && (m *= b.scale || 1), a.push({
                                            type: E.literal,
                                            value: n.getNumberFormat(r, b).format(m)
                                        });
                                        continue
                                    }
                                    if (A(l)) {
                                        var g = l.children,
                                            H = l.value,
                                            S = o[H];
                                        if ("function" != typeof S) throw new eH(H, "function", s);
                                        var N = S(e(g, r, n, i, o, h).map(function(e) {
                                            return e.value
                                        }));
                                        Array.isArray(N) || (N = [N]), a.push.apply(a, N.map(function(e) {
                                            return {
                                                type: "string" == typeof e ? E.literal : E.object,
                                                value: e
                                            }
                                        }))
                                    }
                                    if (v(l)) {
                                        var I = l.options[m] || l.options.other;
                                        if (!I) throw new eg(l.value, m, Object.keys(l.options), s);
                                        a.push.apply(a, e(I.value, r, n, i, o));
                                        continue
                                    }
                                    if (_(l)) {
                                        var I = l.options["=".concat(m)];
                                        if (!I) {
                                            if (!Intl.PluralRules) throw new eb('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', f.MISSING_INTL_API, s);
                                            var C = n.getPluralRules(r, {
                                                type: l.pluralType
                                            }).select(m - (l.offset || 0));
                                            I = l.options[C] || l.options.other
                                        }
                                        if (!I) throw new eg(l.value, m, Object.keys(l.options), s);
                                        a.push.apply(a, e(I.value, r, n, i, o, m - (l.offset || 0)));
                                        continue
                                    }
                                }
                                return a.length < 2 ? a : a.reduce(function(e, t) {
                                    var r = e[e.length - 1];
                                    return r && r.type === E.literal && t.type === E.literal ? r.value += t.value : e.push(t), e
                                }, [])
                            }(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
                        }, this.resolvedOptions = function() {
                            var e;
                            return {
                                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
                            }
                        }, this.getAst = function() {
                            return s.ast
                        }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                        if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var a = i || {},
                            c = (a.formatters, function(e, t) {
                                var r = {};
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                                return r
                            }(a, ["formatters"]));
                        this.ast = e.__parse(t, g(g({}, c), {
                            locale: this.resolvedLocale
                        }))
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                    this.formats = (o = e.formats, n ? Object.keys(o).reduce(function(e, t) {
                        var r, i;
                        return e[t] = (r = o[t], (i = n[t]) ? g(g(g({}, r || {}), i || {}), Object.keys(r).reduce(function(e, t) {
                            return e[t] = g(g({}, r[t]), i[t] || {}), e
                        }, {})) : r), e
                    }, g({}, o)) : o), this.formatters = i && i.formatters || (void 0 === (h = this.formatterCache) && (h = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: eu(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.NumberFormat).bind.apply(e, H([void 0], t, !1)))
                        }, {
                            cache: eT(h.number),
                            strategy: em.variadic
                        }),
                        getDateTimeFormat: eu(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.DateTimeFormat).bind.apply(e, H([void 0], t, !1)))
                        }, {
                            cache: eT(h.dateTime),
                            strategy: em.variadic
                        }),
                        getPluralRules: eu(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.PluralRules).bind.apply(e, H([void 0], t, !1)))
                        }, {
                            cache: eT(h.pluralRules),
                            strategy: em.variadic
                        })
                    })
                }
                return Object.defineProperty(e, "defaultLocale", {
                    get: function() {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                    if (void 0 !== Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
                    }
                }, e.__parse = ea, e.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, e
            }()
        }
    }
]);
//# sourceMappingURL=3695.4ada6f0d74f52061.js.map