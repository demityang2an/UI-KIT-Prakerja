(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    0: function(t, e, n) {
        n("GcxT"),
        t.exports = n("nOHt")
    },
    "01Yd": function(t, e, n) {
        n("7tlc");
        var r = n("7v0J");
        function i(t) {
            r("function" === typeof t ? t : "string" === typeof t && t ? ()=>t + " " + a() : a)
        }
        function a() {
            return "[" + (new Date).toISOString() + "]"
        }
        t.exports = i,
        i()
    },
    "1TCz": function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var r = n("q1tI")
              , i = n.n(r)
              , a = (n("01Yd"),
            n("8Kt/"))
              , o = n.n(a)
              , s = (n("iOjB"),
            n("RDVA"),
            n("RIPL"))
              , c = n("qKvR");
            i.a.createElement;
            Object(s.a)({
                serviceName: "WEBSITE_LANDING_PRODUCTION",
                serverUrl: "https://api.prakerja.go.id",
                serviceVersion: "1.0.0",
                active: "1" === t.env.RUM_ACTIVE
            }),
            e.default = function(e) {
                var n = e.Component
                  , r = e.pageProps;
                return Object(c.d)(i.a.Fragment, null, Object(c.d)(o.a, null, Object(c.d)("script", {
                    async: !0,
                    src: "https://www.googletagmanager.com/gtag/js?id=UA-161104941-1"
                }), Object(c.d)("script", {
                    src: "/js/analytics.js"
                }), "1" === t.env.LIVECHAT_ACTIVE && Object(c.d)("script", {
                    src: "https://chat.sociomile.com/5f5893cc801ddf6dd90bd762",
                    async: !0
                }), Object(c.d)("title", null, "Kartu Prakerja")), Object(c.d)(n, r))
            }
        }
        .call(this, n("8oxB"))
    },
    "7v0J": function(t, e, n) {
        var r = n("7tlc")
          , i = {
            log: console.log.bind(console),
            info: console.info.bind(console),
            warn: console.warn.bind(console),
            error: console.error.bind(console),
            debug: (console.debug || console.log).bind(console)
        };
        t.exports = function(t) {
            Object.keys(i).forEach((function(e) {
                console[e] = function() {
                    var n = "function" === typeof t ? t() : t;
                    arguments[0] = r.format(n, arguments[0]),
                    i[e].apply(console, arguments)
                }
            }
            ))
        }
    },
    "9fj9": function(t, e, n) {
        var r, i, a;
        !function(n, o) {
            "use strict";
            i = [],
            void 0 === (a = "function" === typeof (r = function() {
                function t(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }
                function e(t, e, n, r, i, a) {
                    void 0 !== t && this.setFunctionName(t),
                    void 0 !== e && this.setArgs(e),
                    void 0 !== n && this.setFileName(n),
                    void 0 !== r && this.setLineNumber(r),
                    void 0 !== i && this.setColumnNumber(i),
                    void 0 !== a && this.setSource(a)
                }
                return e.prototype = {
                    getFunctionName: function() {
                        return this.functionName
                    },
                    setFunctionName: function(t) {
                        this.functionName = String(t)
                    },
                    getArgs: function() {
                        return this.args
                    },
                    setArgs: function(t) {
                        if ("[object Array]" !== Object.prototype.toString.call(t))
                            throw new TypeError("Args must be an Array");
                        this.args = t
                    },
                    getFileName: function() {
                        return this.fileName
                    },
                    setFileName: function(t) {
                        this.fileName = String(t)
                    },
                    getLineNumber: function() {
                        return this.lineNumber
                    },
                    setLineNumber: function(e) {
                        if (!t(e))
                            throw new TypeError("Line Number must be a Number");
                        this.lineNumber = Number(e)
                    },
                    getColumnNumber: function() {
                        return this.columnNumber
                    },
                    setColumnNumber: function(e) {
                        if (!t(e))
                            throw new TypeError("Column Number must be a Number");
                        this.columnNumber = Number(e)
                    },
                    getSource: function() {
                        return this.source
                    },
                    setSource: function(t) {
                        this.source = String(t)
                    },
                    toString: function() {
                        return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (t(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (t(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                    }
                },
                e
            }
            ) ? r.apply(e, i) : r) || (t.exports = a)
        }()
    },
    GcxT: function(t, e, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n("1TCz")
        }
        ])
    },
    MjPQ: function(t, e, n) {
        var r, i, a;
        !function(o, s) {
            "use strict";
            i = [n("9fj9")],
            void 0 === (a = "function" === typeof (r = function(t) {
                var e = /(^|@)\S+\:\d+/
                  , n = /^\s*at .*(\S+\:\d+|\(native\))/m
                  , r = /^(eval@)?(\[native code\])?$/;
                function i(t, e, n) {
                    if ("function" === typeof Array.prototype.map)
                        return t.map(e, n);
                    for (var r = new Array(t.length), i = 0; i < t.length; i++)
                        r[i] = e.call(n, t[i]);
                    return r
                }
                function a(t, e, n) {
                    if ("function" === typeof Array.prototype.filter)
                        return t.filter(e, n);
                    for (var r = [], i = 0; i < t.length; i++)
                        e.call(n, t[i]) && r.push(t[i]);
                    return r
                }
                return {
                    parse: function(t) {
                        if ("undefined" !== typeof t.stacktrace || "undefined" !== typeof t["opera#sourceloc"])
                            return this.parseOpera(t);
                        if (t.stack && t.stack.match(n))
                            return this.parseV8OrIE(t);
                        if (t.stack)
                            return this.parseFFOrSafari(t);
                        throw new Error("Cannot parse given Error object")
                    },
                    extractLocation: function(t) {
                        if (-1 === t.indexOf(":"))
                            return [t];
                        var e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g, ""));
                        return [e[1], e[2] || void 0, e[3] || void 0]
                    },
                    parseV8OrIE: function(e) {
                        return i(a(e.stack.split("\n"), (function(t) {
                            return !!t.match(n)
                        }
                        ), this), (function(e) {
                            e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                            var n = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1)
                              , r = this.extractLocation(n.pop())
                              , i = n.join(" ") || void 0
                              , a = function(t, e) {
                                if ("function" === typeof Array.prototype.indexOf)
                                    return t.indexOf(e);
                                for (var n = 0; n < t.length; n++)
                                    if (t[n] === e)
                                        return n;
                                return -1
                            }(["eval", "<anonymous>"], r[0]) > -1 ? void 0 : r[0];
                            return new t(i,void 0,a,r[1],r[2],e)
                        }
                        ), this)
                    },
                    parseFFOrSafari: function(e) {
                        return i(a(e.stack.split("\n"), (function(t) {
                            return !t.match(r)
                        }
                        ), this), (function(e) {
                            if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
                            -1 === e.indexOf("@") && -1 === e.indexOf(":"))
                                return new t(e);
                            var n = e.split("@")
                              , r = this.extractLocation(n.pop())
                              , i = n.join("@") || void 0;
                            return new t(i,void 0,r[0],r[1],r[2],e)
                        }
                        ), this)
                    },
                    parseOpera: function(t) {
                        return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
                    },
                    parseOpera9: function(e) {
                        for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], a = 2, o = r.length; a < o; a += 2) {
                            var s = n.exec(r[a]);
                            s && i.push(new t(void 0,void 0,s[2],s[1],void 0,r[a]))
                        }
                        return i
                    },
                    parseOpera10: function(e) {
                        for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], a = 0, o = r.length; a < o; a += 2) {
                            var s = n.exec(r[a]);
                            s && i.push(new t(s[3] || void 0,void 0,s[2],s[1],void 0,r[a]))
                        }
                        return i
                    },
                    parseOpera11: function(n) {
                        return i(a(n.stack.split("\n"), (function(t) {
                            return !!t.match(e) && !t.match(/^Error created at/)
                        }
                        ), this), (function(e) {
                            var n, r = e.split("@"), i = this.extractLocation(r.pop()), a = r.shift() || "", o = a.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                            a.match(/\(([^\)]*)\)/) && (n = a.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                            var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                            return new t(o,s,i[0],i[1],i[2],e)
                        }
                        ), this)
                    }
                }
            }
            ) ? r.apply(e, i) : r) || (t.exports = a)
        }()
    },
    RDVA: function(t, e, n) {},
    RIPL: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return Je
        }
        ));
        var r = function(t) {
            var e = this.constructor;
            return this.then((function(n) {
                return e.resolve(t()).then((function() {
                    return n
                }
                ))
            }
            ), (function(n) {
                return e.resolve(t()).then((function() {
                    return e.reject(n)
                }
                ))
            }
            ))
        }
          , i = setTimeout;
        function a(t) {
            return Boolean(t && "undefined" !== typeof t.length)
        }
        function o() {}
        function s(t) {
            if (!(this instanceof s))
                throw new TypeError("Promises must be constructed via new");
            if ("function" !== typeof t)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            l(t, this)
        }
        function c(t, e) {
            for (; 3 === t._state; )
                t = t._value;
            0 !== t._state ? (t._handled = !0,
            s._immediateFn((function() {
                var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(t._value)
                    } catch (i) {
                        return void f(e.promise, i)
                    }
                    u(e.promise, r)
                } else
                    (1 === t._state ? u : f)(e.promise, t._value)
            }
            ))) : t._deferreds.push(e)
        }
        function u(t, e) {
            try {
                if (e === t)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" === typeof e || "function" === typeof e)) {
                    var n = e.then;
                    if (e instanceof s)
                        return t._state = 3,
                        t._value = e,
                        void d(t);
                    if ("function" === typeof n)
                        return void l((r = n,
                        i = e,
                        function() {
                            r.apply(i, arguments)
                        }
                        ), t)
                }
                t._state = 1,
                t._value = e,
                d(t)
            } catch (a) {
                f(t, a)
            }
            var r, i
        }
        function f(t, e) {
            t._state = 2,
            t._value = e,
            d(t)
        }
        function d(t) {
            2 === t._state && 0 === t._deferreds.length && s._immediateFn((function() {
                t._handled || s._unhandledRejectionFn(t._value)
            }
            ));
            for (var e = 0, n = t._deferreds.length; e < n; e++)
                c(t, t._deferreds[e]);
            t._deferreds = null
        }
        function p(t, e, n) {
            this.onFulfilled = "function" === typeof t ? t : null,
            this.onRejected = "function" === typeof e ? e : null,
            this.promise = n
        }
        function l(t, e) {
            var n = !1;
            try {
                t((function(t) {
                    n || (n = !0,
                    u(e, t))
                }
                ), (function(t) {
                    n || (n = !0,
                    f(e, t))
                }
                ))
            } catch (r) {
                if (n)
                    return;
                n = !0,
                f(e, r)
            }
        }
        s.prototype.catch = function(t) {
            return this.then(null, t)
        }
        ,
        s.prototype.then = function(t, e) {
            var n = new this.constructor(o);
            return c(this, new p(t,e,n)),
            n
        }
        ,
        s.prototype.finally = r,
        s.all = function(t) {
            return new s((function(e, n) {
                if (!a(t))
                    return n(new TypeError("Promise.all accepts an array"));
                var r = Array.prototype.slice.call(t);
                if (0 === r.length)
                    return e([]);
                var i = r.length;
                function o(t, a) {
                    try {
                        if (a && ("object" === typeof a || "function" === typeof a)) {
                            var s = a.then;
                            if ("function" === typeof s)
                                return void s.call(a, (function(e) {
                                    o(t, e)
                                }
                                ), n)
                        }
                        r[t] = a,
                        0 === --i && e(r)
                    } catch (c) {
                        n(c)
                    }
                }
                for (var s = 0; s < r.length; s++)
                    o(s, r[s])
            }
            ))
        }
        ,
        s.resolve = function(t) {
            return t && "object" === typeof t && t.constructor === s ? t : new s((function(e) {
                e(t)
            }
            ))
        }
        ,
        s.reject = function(t) {
            return new s((function(e, n) {
                n(t)
            }
            ))
        }
        ,
        s.race = function(t) {
            return new s((function(e, n) {
                if (!a(t))
                    return n(new TypeError("Promise.race accepts an array"));
                for (var r = 0, i = t.length; r < i; r++)
                    s.resolve(t[r]).then(e, n)
            }
            ))
        }
        ,
        s._immediateFn = "function" === typeof setImmediate && function(t) {
            setImmediate(t)
        }
        || function(t) {
            i(t, 0)
        }
        ,
        s._unhandledRejectionFn = function(t) {
            "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }
        ;
        var v = s
          , h = {};
        y ? h = window : "undefined" !== typeof self && (h = self);
        var g = "Promise"in h ? h.Promise : v
          , m = [].slice
          , y = "undefined" !== typeof window
          , _ = y && "undefined" !== typeof performance ? performance : {};
        for (var b = [], w = 0; w < 256; ++w)
            b[w] = (w + 256).toString(16).substr(1);
        var S = new Uint8Array(16);
        function T(t) {
            return function(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    e.push(b[t[n]]);
                return e.join("")
            }("undefined" != typeof crypto && "function" == typeof crypto.getRandomValues ? crypto.getRandomValues(S) : "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues ? msCrypto.getRandomValues(S) : S).substr(0, t)
        }
        function E(t, e) {
            var n = !1;
            return "string" === typeof e ? n = t === e : Array.isArray(e) && e.forEach((function(e) {
                n || (n = E(t, e))
            }
            )),
            n
        }
        function x() {
            return y && "function" === typeof Set && "function" === typeof JSON.stringify && _ && "function" === typeof _.now && "withCredentials"in new window.XMLHttpRequest
        }
        function k(t, e, n) {
            if (n && t) {
                var r = R(t)
                  , i = typeof e;
                return void 0 != e && "boolean" !== i && "number" !== i && (e = String(e)),
                n[r] = e,
                n
            }
        }
        function L(t) {
            return t && t.split("?")[0]
        }
        function O(t) {
            return null !== t && "object" === typeof t
        }
        function C(t, e, n) {
            for (var r = 0, i = e.length; r < i; ++r) {
                var a = e[r];
                if (O(a) || "function" === typeof a)
                    for (var o = Object.keys(a), s = 0, c = o.length; s < c; s++) {
                        var u = o[s]
                          , f = a[u];
                        n && O(f) ? (O(t[u]) || (t[u] = Array.isArray(f) ? [] : {}),
                        C(t[u], [f], !1)) : t[u] = f
                    }
            }
            return t
        }
        function N() {
            if ("undefined" !== typeof document) {
                var t = document.currentScript;
                return t || function() {
                    if ("undefined" !== typeof document)
                        for (var t = document.getElementsByTagName("script"), e = 0, n = t.length; e < n; e++) {
                            var r = t[e];
                            if (r.src.indexOf("elastic") > 0)
                                return r
                        }
                }()
            }
        }
        function I(t) {
            return C(t, m.call(arguments, 1), !1)
        }
        function j(t) {
            return C(t, m.call(arguments, 1), !0)
        }
        function F(t) {
            return "undefined" === typeof t
        }
        function A() {}
        function R(t) {
            return t.replace(/[.*"]/g, "_")
        }
        function P() {
            return _.now()
        }
        function M(t) {
            return "number" === typeof t && t >= 0 ? t : P()
        }
        function q(t, e) {
            return F(e) || F(t) ? null : parseInt(e - t)
        }
        function H(t) {
            g.resolve().then(t)
        }
        function D() {
            return "function" === typeof _.getEntriesByType
        }
        function z(t) {
            return "undefined" !== typeof PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(t) >= 0
        }
        var B = {
            fetchInProgress: !1
        };
        function U(t) {
            return "__apm_symbol__" + t
        }
        function V(t, e, n) {
            for (var r = t; r && !r.hasOwnProperty(e); )
                r = Object.getPrototypeOf(r);
            !r && t[e] && (r = t);
            var i, a, o, s, c = U(e);
            if (r && !(i = r[c])) {
                i = r[c] = r[e];
                var u = r && Object.getOwnPropertyDescriptor(r, e);
                if (!(s = u) || !1 !== s.writable && ("function" !== typeof s.get || "undefined" !== typeof s.set)) {
                    var f = n(i, c, e);
                    r[e] = function() {
                        return f(this, arguments)
                    }
                    ,
                    a = r[e],
                    o = i,
                    a[U("OriginalDelegate")] = o
                }
            }
            return i
        }
        var $ = U("xhrIgnore")
          , J = U("xhrSync")
          , X = U("xhrURL")
          , G = U("xhrMethod")
          , K = "schedule"
          , Z = "invoke"
          , Q = "addEventListener"
          , W = "removeEventListener"
          , Y = ["link", "css", "script", "img", "xmlhttprequest", "fetch", "beacon", "iframe"]
          , tt = 3e5
          , et = "page-load"
          , nt = "custom"
          , rt = "Unknown"
          , it = [et, "route-change", "user-interaction", "http-request", nt, "temporary"]
          , at = 60
          , ot = "xmlhttprequest"
          , st = "fetch"
          , ct = "history"
          , ut = "eventtarget"
          , ft = "error"
          , dt = "longtask"
          , pt = "measure"
          , lt = "navigation"
          , vt = "resource"
          , ht = "first-contentful-paint"
          , gt = "largest-contentful-paint"
          , mt = "first-input"
          , yt = "layout-shift"
          , _t = "ConfigService"
          , bt = "LoggingService"
          , wt = "ApmServer"
          , St = ".truncated"
          , Tt = 1024;
        function Et(t) {
            var e = XMLHttpRequest.prototype;
            if (e && e[Q])
                var n = "readystatechange"
                  , r = "load"
                  , i = "error"
                  , a = "timeout"
                  , o = "abort"
                  , s = V(e, "open", (function() {
                    return function(t, e) {
                        return t[$] || (t[G] = e[0],
                        t[X] = e[1],
                        t[J] = !1 === e[2]),
                        s.apply(t, e)
                    }
                }
                ))
                  , c = V(e, "send", (function() {
                    return function(e, s) {
                        if (e[$])
                            return c.apply(e, s);
                        var f = {
                            source: ot,
                            state: "",
                            type: "macroTask",
                            data: {
                                target: e,
                                method: e[G],
                                sync: e[J],
                                url: e[X],
                                status: ""
                            }
                        };
                        try {
                            return function(e) {
                                if (e.state !== K) {
                                    e.state = K,
                                    t(K, e);
                                    var s = e.data.target;
                                    c(n),
                                    c(r),
                                    c(a),
                                    c(i),
                                    c(o)
                                }
                                function c(t) {
                                    s[Q](t, (function(t) {
                                        var i = t.type;
                                        i === n ? 4 === s.readyState && 0 !== s.status && u(e, "success") : u(e, i === r ? "success" : i)
                                    }
                                    ))
                                }
                            }(f),
                            c.apply(e, s)
                        } catch (d) {
                            throw u(f, i),
                            d
                        }
                    }
                }
                ));
            function u(e, n) {
                e.state !== Z && (e.state = Z,
                e.data.status = n,
                t(Z, e))
            }
        }
        for (var xt = ["click"], kt = {}, Lt = 0; Lt < xt.length; Lt++) {
            var Ot = xt[Lt];
            kt[Ot] = U(Ot)
        }
        function Ct(t, e, n) {
            return t instanceof Element && xt.indexOf(e) >= 0 && "function" === typeof n
        }
        var Nt = function() {
            function t() {
                this.observers = {}
            }
            var e = t.prototype;
            return e.observe = function(t, e) {
                var n = this;
                if ("function" === typeof e)
                    return this.observers[t] || (this.observers[t] = []),
                    this.observers[t].push(e),
                    function() {
                        var r = n.observers[t].indexOf(e);
                        r > -1 && n.observers[t].splice(r, 1)
                    }
            }
            ,
            e.sendOnly = function(t, e) {
                var n = this.observers[t];
                n && n.forEach((function(t) {
                    try {
                        t.apply(void 0, e)
                    } catch (n) {
                        console.log(n, n.stack)
                    }
                }
                ))
            }
            ,
            e.send = function(t, e) {
                this.sendOnly(t + ":before", e),
                this.sendOnly(t, e),
                this.sendOnly(t + ":after", e)
            }
            ,
            t
        }()
          , It = new Nt
          , jt = !1;
        function Ft() {
            return jt || (jt = !0,
            Et((function(t, e) {
                It.send(ot, [t, e])
            }
            )),
            function(t) {
                if (window.fetch && window.Request) {
                    var e = window.fetch;
                    window.fetch = function(t, i) {
                        var a, o, s = this, c = arguments;
                        if ("string" === typeof t)
                            a = new Request(t,i),
                            o = t;
                        else {
                            if (!t)
                                return e.apply(s, c);
                            o = (a = t).url
                        }
                        var u = {
                            source: st,
                            state: "",
                            type: "macroTask",
                            data: {
                                target: a,
                                method: a.method,
                                url: o,
                                aborted: !1
                            }
                        };
                        return new g((function(t, i) {
                            var o;
                            B.fetchInProgress = !0,
                            n(u);
                            try {
                                o = e.apply(s, [a])
                            } catch (c) {
                                return i(c),
                                u.data.error = c,
                                r(u),
                                void (B.fetchInProgress = !1)
                            }
                            o.then((function(e) {
                                t(e),
                                H((function() {
                                    u.data.response = e,
                                    r(u)
                                }
                                ))
                            }
                            ), (function(t) {
                                i(t),
                                H((function() {
                                    u.data.error = t,
                                    r(u)
                                }
                                ))
                            }
                            )),
                            B.fetchInProgress = !1
                        }
                        ))
                    }
                }
                function n(e) {
                    e.state = K,
                    t(K, e)
                }
                function r(e) {
                    e.state = Z,
                    t(Z, e)
                }
            }((function(t, e) {
                It.send(st, [t, e])
            }
            )),
            function(t) {
                if (window.history) {
                    var e = history.pushState;
                    "function" === typeof e && (history.pushState = function(n, r, i) {
                        var a = {
                            source: ct,
                            data: {
                                state: n,
                                title: r,
                                url: i
                            }
                        };
                        t(Z, a),
                        e.apply(this, arguments)
                    }
                    )
                }
            }((function(t, e) {
                It.send(ct, [t, e])
            }
            )),
            function(t) {
                if (window.EventTarget) {
                    var e = window.EventTarget.prototype
                      , n = e[Q]
                      , r = e[W];
                    e[Q] = function(t, e, r) {
                        var i = this;
                        if (!Ct(i, t, e))
                            return n.apply(i, arguments);
                        var a = o(i, t, e, r)
                          , s = Array.prototype.slice.call(arguments);
                        return s[1] = a,
                        n.apply(i, s)
                    }
                    ,
                    e[W] = function(t, e, n) {
                        var i = this;
                        if (!Ct(i, t, e))
                            return r.apply(i, arguments);
                        var a = s(i, t, e, n)
                          , o = Array.prototype.slice.call(arguments);
                        return o[1] = a,
                        r.apply(i, o)
                    }
                }
                function i(t, e, n, r) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        if (a.eventType === e && a.listenerFn === n && a.capture === r)
                            return i
                    }
                    return -1
                }
                function a(t) {
                    return "boolean" === typeof t ? t : !!t && !!t.capture
                }
                function o(e, n, r, o) {
                    var s = kt[n];
                    if (!s)
                        return r;
                    var c = e[s]
                      , u = a(o);
                    if (c) {
                        var f = i(c, n, r, u);
                        if (-1 !== f)
                            return c[f].wrappingFn
                    } else
                        c = e[s] = [];
                    var d = {
                        source: ut,
                        target: e,
                        eventType: n,
                        listenerFn: r,
                        capture: u,
                        wrappingFn: p
                    };
                    function p() {
                        var e;
                        t(K, d);
                        try {
                            e = r.apply(this, arguments)
                        } finally {
                            t(Z, d)
                        }
                        return e
                    }
                    return c.push(d),
                    p
                }
                function s(t, e, n, r) {
                    var o = kt[e]
                      , s = t[o];
                    if (s) {
                        var c = i(s, e, n, a(r));
                        if (-1 !== c) {
                            var u = s[c];
                            return s.splice(c, 1),
                            0 === s.length && (t[o] = void 0),
                            u.wrappingFn
                        }
                    }
                    return n
                }
            }((function(t, e) {
                It.send(ut, [t, e])
            }
            ))),
            It
        }
        var At = {
            bootstrapTime: null,
            lastHiddenStart: Number.MIN_SAFE_INTEGER
        }
          , Rt = !1;
        function Pt() {
            return x() ? (Ft(),
            function() {
                "hidden" === document.visibilityState && (At.lastHiddenStart = 0);
                window.addEventListener("visibilitychange", (function() {
                    "hidden" === document.visibilityState && (At.lastHiddenStart = performance.now())
                }
                ), {
                    capture: !0
                })
            }(),
            At.bootstrapTime = P(),
            Rt = !0) : y && console.log("[Elastic APM] platform is not supported!"),
            Rt
        }
        var Mt = n("MjPQ")
          , qt = n.n(Mt);
        function Ht(t) {
            var e = t.error
              , n = t.filename
              , r = t.lineno
              , i = t.colno
              , a = [];
            if (e)
                try {
                    a = qt.a.parse(e)
                } catch (o) {}
            return 0 === a.length && (a = [{
                fileName: n,
                lineNumber: r,
                columnNumber: i
            }]),
            a.map((function(t) {
                return t.functionName && (t.functionName = function(t) {
                    var e = t.split("/");
                    return t = (t = (t = e.length > 1 ? ["Object", e[e.length - 1]].join(".") : e[0]).replace(/.<$/gi, ".<anonymous>")).replace(/^Anonymous function$/, "<anonymous>"),
                    t = (e = t.split(".")).length > 1 ? e[e.length - 1] : e[0]
                }(t.functionName)),
                t
            }
            )).map((function(t) {
                var e = t.fileName
                  , n = t.lineNumber
                  , r = t.columnNumber
                  , i = t.functionName
                  , a = void 0 === i ? "<anonymous>" : i;
                if (!e && !n)
                    return {};
                if (!r && !n)
                    return {};
                var o, s = function(t) {
                    return void 0 === t && (t = ""),
                    "<anonymous>" === t && (t = ""),
                    t
                }(e), c = function(t) {
                    var e = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
                    return t.indexOf(e) > -1 && (t = t.replace(e + "/", "")),
                    t
                }(s);
                return (o = s) && 0 === window.location.href.indexOf(o) && (c = "(inline script)"),
                {
                    abs_path: e,
                    filename: c,
                    function: a,
                    lineno: n,
                    colno: r
                }
            }
            ))
        }
        var Dt = [["#", "hash"], ["?", "query"], ["/", "path"], ["@", "auth", 1], [NaN, "host", void 0, 1]]
          , zt = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
          , Bt = function() {
            function t(t) {
                var e, n = this.extractProtocol(t || ""), r = n.protocol, i = n.address, a = n.slashes, o = !r && !a, s = this.getLocation(), c = Dt.slice();
                i = i.replace("\\", "/"),
                a || (c[2] = [NaN, "path"]);
                for (var u = 0; u < c.length; u++) {
                    var f = c[u]
                      , d = f[0]
                      , p = f[1];
                    if ("string" === typeof d) {
                        if (~(e = i.indexOf(d))) {
                            var l = f[2];
                            if (l) {
                                var v = i.lastIndexOf(d);
                                e = Math.max(e, v),
                                this[p] = i.slice(0, e),
                                i = i.slice(e + l)
                            } else
                                this[p] = i.slice(e),
                                i = i.slice(0, e)
                        }
                    } else
                        this[p] = i,
                        i = "";
                    this[p] = this[p] || o && f[3] && s[p] || "",
                    f[3] && (this[p] = this[p].toLowerCase())
                }
                if (o && "/" !== this.path.charAt(0) && (this.path = "/" + this.path),
                this.relative = o,
                this.protocol = r || s.protocol,
                this.hostname = this.host,
                this.port = "",
                /:\d+$/.test(this.host)) {
                    var h = this.host.split(":")
                      , g = h.pop()
                      , m = h.join(":");
                    !function(t, e) {
                        switch (e) {
                        case "http:":
                            return "80" === t;
                        case "https:":
                            return "443" === t
                        }
                        return !0
                    }(g, this.protocol) ? this.port = g : this.host = m,
                    this.hostname = m
                }
                this.origin = this.protocol && this.host && "file:" !== this.protocol ? this.protocol + "//" + this.host : "null",
                this.href = this.toString()
            }
            var e = t.prototype;
            return e.toString = function() {
                var t = this.protocol;
                if (t += "//",
                this.auth) {
                    var e = this.auth.split(":");
                    t += (e[0] ? "[REDACTED]" : "") + (e[1] ? ":[REDACTED]" : "") + "@"
                }
                return t += this.host,
                t += this.path,
                t += this.query,
                t += this.hash
            }
            ,
            e.getLocation = function() {
                var t = {};
                return y && (t = window),
                t.location
            }
            ,
            e.extractProtocol = function(t) {
                var e = zt.exec(t);
                return {
                    protocol: e[1] ? e[1].toLowerCase() : "",
                    slashes: !!e[2],
                    address: e[3]
                }
            }
            ,
            t
        }();
        var Ut = 91
          , Vt = 93
          , $t = "external"
          , Jt = "resource"
          , Xt = "hard-navigation";
        function Gt(t) {
            var e = {
                transfer_size: t.transferSize,
                encoded_body_size: t.encodedBodySize,
                decoded_body_size: t.decodedBodySize
            }
              , n = function(t) {
                void 0 === t && (t = []);
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n]
                      , i = r.name
                      , a = r.duration
                      , o = r.description
                      , s = i;
                    o && (s += ";desc=" + o),
                    a && (s += ";dur=" + a),
                    e.push(s)
                }
                return e.join(", ")
            }(t.serverTiming);
            return n && (e.headers = {
                "server-timing": n
            }),
            e
        }
        function Kt(t, e) {
            var n = t.port
              , r = t.protocol
              , i = t.hostname
              , a = t.host
              , o = function(t, e) {
                return "" === t && (t = "http:" === e ? "80" : "https:" === e ? "443" : ""),
                t
            }(n, r)
              , s = i.charCodeAt(0) === Ut && i.charCodeAt(i.length - 1) === Vt
              , c = i;
            return s && (c = i.slice(1, -1)),
            {
                service: {
                    name: r + "//" + a,
                    resource: i + ":" + o,
                    type: e
                },
                address: c,
                port: Number(o)
            }
        }
        function Zt() {
            return {
                page: {
                    referer: document.referrer,
                    url: location.href
                }
            }
        }
        function Qt(t, e) {
            if (e) {
                var n;
                switch (t.type) {
                case $t:
                    n = function(t) {
                        var e, n = t.url, r = t.method, i = t.target, a = t.response, o = new Bt(n), s = Kt(o, $t), c = {
                            http: {
                                method: r,
                                url: o.href
                            },
                            destination: s
                        };
                        return i && "undefined" !== typeof i.status ? e = i.status : a && (e = a.status),
                        c.http.status_code = e,
                        c
                    }(e);
                    break;
                case Jt:
                    n = function(t) {
                        var e = t.entry
                          , n = t.url
                          , r = Kt(new Bt(n), Jt);
                        return {
                            http: {
                                url: n,
                                response: Gt(e)
                            },
                            destination: r
                        }
                    }(e);
                    break;
                case Xt:
                    n = function(t) {
                        var e = t.url;
                        return {
                            destination: Kt(new Bt(e), Xt)
                        }
                    }(e)
                }
                t.addContext(n)
            }
        }
        function Wt(t, e) {
            var n = void 0 === e ? {} : e
              , r = (n.tags,
            function(t, e) {
                if (null == t)
                    return {};
                var n, r, i = {}, a = Object.keys(t);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i
            }(n, ["tags"]))
              , i = Zt()
              , a = {};
            if (t.type === et && D()) {
                var o = _.getEntriesByType(lt);
                o && o.length > 0 && (a = {
                    response: Gt(o[0])
                })
            }
            t.addContext(i, a, r)
        }
        var Yt = {
            service: {
                name: [Tt, !0],
                version: !0,
                agent: {
                    version: [Tt, !0]
                },
                environment: !0
            },
            labels: {
                "*": !0
            }
        }
          , te = {
            "*": !0,
            headers: {
                "*": !0
            }
        }
          , ee = {
            user: {
                id: !0,
                email: !0,
                username: !0
            },
            tags: {
                "*": !0
            },
            http: {
                response: te
            },
            destination: {
                address: [Tt],
                service: {
                    "*": [Tt, !0]
                }
            },
            response: te
        }
          , ne = {
            name: [Tt, !0],
            type: [Tt, !0],
            id: [Tt, !0],
            trace_id: [Tt, !0],
            parent_id: [Tt, !0],
            transaction_id: [Tt, !0],
            subtype: !0,
            action: !0,
            context: ee
        }
          , re = {
            name: !0,
            parent_id: !0,
            type: [Tt, !0],
            id: [Tt, !0],
            trace_id: [Tt, !0],
            span_count: {
                started: [Tt, !0]
            },
            context: ee
        }
          , ie = {
            id: [Tt, !0],
            trace_id: !0,
            transaction_id: !0,
            parent_id: !0,
            culprit: !0,
            exception: {
                type: !0
            },
            transaction: {
                type: !0
            },
            context: ee
        };
        function ae(t) {
            return null == t || "" === t || "undefined" === typeof t
        }
        function oe(t, e, n) {
            var r = function(t, e, n, r) {
                return void 0 === e && (e = Tt),
                void 0 === n && (n = !1),
                void 0 === r && (r = "N/A"),
                n && ae(t) && (t = r),
                "string" === typeof t ? t.substring(0, e) : t
            }(t[e], n[0], n[1]);
            ae(r) ? delete t[e] : t[e] = r
        }
        function se(t, e, n) {
            void 0 === t && (t = {}),
            void 0 === n && (n = e);
            for (var r = Object.keys(t), i = [], a = function(a) {
                var o = r[a]
                  , s = !0 === t[o] ? i : t[o];
                Array.isArray(s) ? "*" === o ? Object.keys(n).forEach((function(t) {
                    return oe(n, t, s)
                }
                )) : oe(n, o, s) : se(s, e, n[o])
            }, o = 0; o < r.length; o++)
                a(o);
            return e
        }
        var ce = ["stack", "message"];
        var ue = function() {
            function t(t, e, n) {
                this._apmServer = t,
                this._configService = e,
                this._transactionService = n
            }
            var e = t.prototype;
            return e.createErrorDataModel = function(t) {
                var e = function(t) {
                    return t.filter((function(t) {
                        var e = t.filename
                          , n = t.lineno;
                        return "undefined" !== typeof e && "undefined" !== typeof n
                    }
                    ))
                }(Ht(t))
                  , n = "(inline script)"
                  , r = e[e.length - 1];
                r && r.filename && (n = r.filename);
                var i = t.message
                  , a = t.error
                  , o = i
                  , s = ""
                  , c = {};
                if (a && "object" === typeof a) {
                    o = o || a.message,
                    s = a.name;
                    var u = function(t) {
                        var e = !1
                          , n = {};
                        if (Object.keys(t).forEach((function(r) {
                            if (!(ce.indexOf(r) >= 0)) {
                                var i = t[r];
                                if (null != i && "function" !== typeof i) {
                                    if ("object" === typeof i) {
                                        if ("function" !== typeof i.toISOString)
                                            return;
                                        i = i.toISOString()
                                    }
                                    n[r] = i,
                                    e = !0
                                }
                            }
                        }
                        )),
                        e)
                            return n
                    }(a);
                    u && (c.custom = u)
                }
                s || o && o.indexOf(":") > -1 && (s = o.split(":")[0]);
                var f = this._transactionService.getCurrentTransaction()
                  , d = f ? f.context : {}
                  , p = this._configService.get("context")
                  , l = (p.tags,
                function(t, e) {
                    if (null == t)
                        return {};
                    var n, r, i = {}, a = Object.keys(t);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(p, ["tags"]))
                  , v = j({}, Zt(), d, l, c)
                  , h = {
                    id: T(),
                    culprit: n,
                    exception: {
                        message: o,
                        stacktrace: e,
                        type: s
                    },
                    context: v
                };
                return f && (h = I(h, {
                    trace_id: f.traceId,
                    parent_id: f.id,
                    transaction_id: f.id,
                    transaction: {
                        type: f.type,
                        sampled: f.sampled
                    }
                })),
                se(ie, h)
            }
            ,
            e.logErrorEvent = function(t) {
                if ("undefined" !== typeof t) {
                    var e = this.createErrorDataModel(t);
                    "undefined" !== typeof e.exception.message && this._apmServer.addError(e)
                }
            }
            ,
            e.registerListeners = function() {
                var t = this;
                window.addEventListener("error", (function(e) {
                    return t.logErrorEvent(e)
                }
                )),
                window.addEventListener("unhandledrejection", (function(e) {
                    return t.logPromiseEvent(e)
                }
                ))
            }
            ,
            e.logPromiseEvent = function(t) {
                var e, n = "Unhandled promise rejection: ", r = t.reason, i = void 0 === r ? "<no reason specified>" : r;
                "string" === typeof i.message ? e = {
                    error: i,
                    message: n + (i.name ? i.name + ": " : "") + i.message
                } : e = {
                    message: n + (i = "object" === typeof i ? "<object>" : "function" === typeof i ? "<function>" : i)
                };
                this.logErrorEvent(e)
            }
            ,
            e.logError = function(t) {
                var e = {};
                return "string" === typeof t ? e.message = t : e.error = t,
                this.logErrorEvent(e)
            }
            ,
            t
        }()
          , fe = function() {
            function t(t, e) {
                void 0 === e && (e = {}),
                this.onFlush = t,
                this.items = [],
                this.queueLimit = e.queueLimit || -1,
                this.flushInterval = e.flushInterval || 0,
                this.timeoutId = void 0
            }
            var e = t.prototype;
            return e._setTimer = function() {
                var t = this;
                this.timeoutId = setTimeout((function() {
                    return t.flush()
                }
                ), this.flushInterval)
            }
            ,
            e._clear = function() {
                "undefined" !== typeof this.timeoutId && (clearTimeout(this.timeoutId),
                this.timeoutId = void 0),
                this.items = []
            }
            ,
            e.flush = function() {
                this.onFlush(this.items),
                this._clear()
            }
            ,
            e.add = function(t) {
                this.items.push(t),
                -1 !== this.queueLimit && this.items.length >= this.queueLimit ? this.flush() : "undefined" === typeof this.timeoutId && this._setTimer()
            }
            ,
            t
        }();
        var de = function() {
            function t() {}
            return t.stringify = function(t) {
                return JSON.stringify(t) + "\n"
            }
            ,
            t
        }()
          , pe = function() {
            function t(t, e, n) {
                void 0 === n && (n = {}),
                t || (t = rt),
                e || (e = nt),
                this.name = t,
                this.type = e,
                this.options = n,
                this.id = n.id || T(16),
                this.traceId = n.traceId,
                this.sampled = n.sampled,
                this.timestamp = n.timestamp,
                this._start = M(n.startTime),
                this._end = void 0,
                this.ended = !1,
                this.onEnd = n.onEnd
            }
            var e = t.prototype;
            return e.ensureContext = function() {
                this.context || (this.context = {})
            }
            ,
            e.addLabels = function(t) {
                this.ensureContext();
                var e = this.context;
                e.tags || (e.tags = {}),
                Object.keys(t).forEach((function(n) {
                    return k(n, t[n], e.tags)
                }
                ))
            }
            ,
            e.addContext = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                0 !== e.length && (this.ensureContext(),
                j.apply(void 0, [this.context].concat(e)))
            }
            ,
            e.end = function(t) {
                this.ended || (this.ended = !0,
                this._end = M(t),
                this.callOnEnd())
            }
            ,
            e.callOnEnd = function() {
                "function" === typeof this.onEnd && this.onEnd(this)
            }
            ,
            e.duration = function() {
                return q(this._start, this._end)
            }
            ,
            t
        }();
        var le = function(t) {
            var e, n;
            function r(e, n, r) {
                var i;
                if ((i = t.call(this, e, n, r) || this).parentId = i.options.parentId,
                i.subtype = void 0,
                i.action = void 0,
                -1 !== i.type.indexOf(".")) {
                    var a = i.type.split(".", 3);
                    i.type = a[0],
                    i.subtype = a[1],
                    i.action = a[2]
                }
                return i.sync = i.options.sync,
                i
            }
            return n = t,
            (e = r).prototype = Object.create(n.prototype),
            e.prototype.constructor = e,
            e.__proto__ = n,
            r.prototype.end = function(e, n) {
                t.prototype.end.call(this, e),
                Qt(this, n)
            }
            ,
            r
        }(pe)
          , ve = [["domainLookupStart", "domainLookupEnd", "Domain lookup"], ["connectStart", "connectEnd", "Making a connection to the server"], ["requestStart", "responseEnd", "Requesting and receiving the document"], ["domLoading", "domInteractive", "Parsing the document, executing sync. scripts"], ["domContentLoadedEventStart", "domContentLoadedEventEnd", 'Fire "DOMContentLoaded" event'], ["loadEventStart", "loadEventEnd", 'Fire "load" event']];
        function he(t, e, n, r, i) {
            return void 0 === i && (i = 0),
            "number" === typeof t && "number" === typeof e && t >= i && e > t && t - i >= n && e - i <= r && e - t < tt && t - i < tt && e - i < tt
        }
        function ge(t) {
            var e = t.name
              , n = t.initiatorType
              , r = t.startTime
              , i = t.responseEnd
              , a = "resource";
            n && (a += "." + n);
            var o = L(e)
              , s = new le(o,a);
            return s._start = r,
            s.end(i, {
                url: e,
                entry: t
            }),
            s
        }
        function me(t, e) {
            return null != e && t > e
        }
        var ye = ["fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"]
          , _e = ["fs", "ls", "le", "cs", "ce", "qs", "rs", "re", "dl", "di", "ds", "de", "dc", "es", "ee"];
        function be(t) {
            var e = function(t) {
                var e = t.fetchStart
                  , n = t.navigationStart;
                if (n && e < n)
                    return null;
                var r = {};
                return ye.forEach((function(n) {
                    var i = t[n];
                    i && i >= e && (r[n] = parseInt(i - e))
                }
                )),
                r
            }(t);
            return null == e ? null : {
                navigationTiming: e,
                agent: {
                    timeToFirstByte: e.responseStart,
                    domInteractive: e.domInteractive,
                    domComplete: e.domComplete
                }
            }
        }
        function we(t) {
            if (t.captureTimings) {
                var e = t._end;
                if (t.type === et) {
                    if (t.marks && t.marks.custom) {
                        var n = t.marks.custom;
                        Object.keys(n).forEach((function(e) {
                            n[e] += t._start
                        }
                        ))
                    }
                    t._start = 0;
                    var r = _.timing;
                    (function(t, e, n, r) {
                        for (var i = [], a = 0; a < ve.length; a++) {
                            var o = t[ve[a][0]]
                              , s = t[ve[a][1]];
                            if (he(o, s, n, r, e)) {
                                var c = new le(ve[a][2],"hard-navigation.browser-timing")
                                  , u = null;
                                "requestStart" === ve[a][0] && (c.pageResponse = !0,
                                u = {
                                    url: location.origin
                                }),
                                c._start = o - e,
                                c.end(s - e, u),
                                i.push(c)
                            }
                        }
                        return i
                    }
                    )(r, r.fetchStart, 0, e).forEach((function(e) {
                        e.traceId = t.traceId,
                        e.sampled = t.sampled,
                        e.pageResponse && t.options.pageLoadSpanId && (e.id = t.options.pageLoadSpanId),
                        t.spans.push(e)
                    }
                    )),
                    t.addMarks(be(r))
                }
                if (D()) {
                    var i = t._start;
                    (function(t, e, n, r) {
                        for (var i = [], a = 0; a < t.length; a++) {
                            var o = t[a]
                              , s = o.initiatorType
                              , c = o.name
                              , u = o.startTime
                              , f = o.responseEnd;
                            -1 !== Y.indexOf(s) && null != c && (("xmlhttprequest" === s || "fetch" === s) && (/intake\/v\d+\/rum\/events/.test(c) || me(u, e)) || he(u, f, n, r) && i.push(ge(t[a])))
                        }
                        return i
                    }
                    )(_.getEntriesByType(vt), At.bootstrapTime, i, e).forEach((function(e) {
                        return t.spans.push(e)
                    }
                    )),
                    function(t, e, n) {
                        for (var r = [], i = 0; i < t.length; i++) {
                            var a = t[i]
                              , o = a.name
                              , s = a.startTime
                              , c = a.duration
                              , u = s + c;
                            if (!(c <= at) && he(s, u, e, n)) {
                                var f = new le(o,"app");
                                f._start = s,
                                f.end(u),
                                r.push(f)
                            }
                        }
                        return r
                    }(_.getEntriesByType(pt), i, e).forEach((function(e) {
                        return t.spans.push(e)
                    }
                    ))
                }
            }
        }
        function Se(t) {
            return {
                ts: t.transfer_size,
                ebs: t.encoded_body_size,
                dbs: t.decoded_body_size
            }
        }
        function Te(t) {
            if (!t)
                return null;
            var e = {}
              , n = t.page
              , r = t.http
              , i = t.response
              , a = t.destination
              , o = t.user
              , s = t.custom;
            if (n && (e.p = {
                rf: n.referer,
                url: n.url
            }),
            r && (e.h = function(t) {
                var e = {}
                  , n = t.method
                  , r = t.status_code
                  , i = t.url
                  , a = t.response;
                return e.url = i,
                n && (e.mt = n),
                r && (e.sc = r),
                a && (e.r = Se(a)),
                e
            }(r)),
            i && (e.r = Se(i)),
            a) {
                var c = a.service;
                e.dt = {
                    se: {
                        n: c.name,
                        t: c.type,
                        rc: c.resource
                    },
                    ad: a.address,
                    po: a.port
                }
            }
            return o && (e.u = {
                id: o.id,
                un: o.username,
                em: o.email
            }),
            s && (e.cu = s),
            e
        }
        function Ee(t) {
            if (!t)
                return null;
            var e = t.navigationTiming
              , n = t.agent
              , r = {
                nt: {}
            };
            _e.forEach((function(t, n) {
                var i = ye[n];
                r.nt[t] = e[i]
            }
            )),
            r.a = {
                fb: r.nt.rs,
                di: r.nt.di,
                dc: r.nt.dc
            };
            var i = n.firstContentfulPaint
              , a = n.largestContentfulPaint;
            return i && (r.a.fp = i),
            a && (r.a.lp = a),
            r
        }
        var xe = function() {
            function t(t, e) {
                this._configService = t,
                this._loggingService = e,
                this.queue = void 0,
                this.throttleEvents = A
            }
            var e = t.prototype;
            return e.init = function() {
                var t = this
                  , e = this._configService.get("queueLimit")
                  , n = this._configService.get("flushInterval")
                  , r = this._configService.get("eventsLimit");
                this.queue = new fe((function(e) {
                    var n = t.sendEvents(e);
                    n && n.catch((function(e) {
                        t._loggingService.warn("Failed sending events!", t._constructError(e))
                    }
                    ))
                }
                ),{
                    queueLimit: e,
                    flushInterval: n
                }),
                this.throttleEvents = function(t, e, n) {
                    var r, i = this, a = n.limit, o = n.interval, s = 0;
                    return function() {
                        return s++,
                        "undefined" === typeof r && (r = setTimeout((function() {
                            s = 0,
                            r = void 0
                        }
                        ), o)),
                        s > a && "function" === typeof e ? e.apply(i, arguments) : t.apply(i, arguments)
                    }
                }(this.queue.add.bind(this.queue), (function() {
                    return t._loggingService.warn("Dropped events due to throttling!")
                }
                ), {
                    limit: r,
                    interval: 6e4
                })
            }
            ,
            e._postJson = function(t, e) {
                var n = this
                  , r = {
                    "Content-Type": "application/x-ndjson"
                };
                return function(t, e, n) {
                    void 0 === n && (n = "gzip");
                    var r = "function" === typeof CompressionStream;
                    return new g((function(i) {
                        if (!r)
                            return i({
                                payload: t,
                                headers: e
                            });
                        var a = new Blob([t]).stream().pipeThrough(new CompressionStream(n));
                        return new Response(a).blob().then((function(t) {
                            return e["Content-Encoding"] = n,
                            i({
                                payload: t,
                                headers: e
                            })
                        }
                        ))
                    }
                    ))
                }(e, r).catch((function(t) {
                    return {
                        payload: e,
                        headers: r
                    }
                }
                )).then((function(e) {
                    return n._makeHttpRequest("POST", t, e)
                }
                )).then((function(t) {
                    return t.responseText
                }
                ))
            }
            ,
            e._constructError = function(t) {
                var e = t.url
                  , n = t.status;
                t.responseText;
                if ("undefined" == typeof n)
                    return t;
                var r = e + " HTTP status: " + n;
                return new Error(r)
            }
            ,
            e._makeHttpRequest = function(t, e, n) {
                var r = void 0 === n ? {
                    timeout: 1e4
                } : n
                  , i = r.timeout
                  , a = r.payload
                  , o = r.headers;
                return new g((function(n, r) {
                    var s = new window.XMLHttpRequest;
                    if (s[$] = !0,
                    s.open(t, e, !0),
                    s.timeout = i,
                    o)
                        for (var c in o)
                            o.hasOwnProperty(c) && s.setRequestHeader(c, o[c]);
                    s.onreadystatechange = function() {
                        if (4 === s.readyState) {
                            var t = s.status
                              , i = s.responseText;
                            0 === t || t > 399 && t < 600 ? r({
                                url: e,
                                status: t,
                                responseText: i
                            }) : n(s)
                        }
                    }
                    ,
                    s.onerror = function() {
                        var t = s.status
                          , n = s.responseText;
                        r({
                            url: e,
                            status: t,
                            responseText: n
                        })
                    }
                    ,
                    s.send(a)
                }
                ))
            }
            ,
            e.fetchConfig = function(t, e) {
                var n = this
                  , r = this._configService.get("serverUrl") + "/config/v1/rum/agents";
                if (!t)
                    return g.reject("serviceName is required for fetching central config.");
                r += "?service.name=" + t,
                e && (r += "&service.environment=" + e);
                var i = this._configService.getLocalConfig();
                return i && (r += "&ifnonematch=" + i.etag),
                this._makeHttpRequest("GET", r, {
                    timeout: 5e3
                }).then((function(t) {
                    var e = t.status
                      , r = t.responseText;
                    if (304 === e)
                        return i;
                    var a = JSON.parse(r)
                      , o = t.getResponseHeader("etag");
                    return o && (a.etag = o.replace(/["]/g, ""),
                    n._configService.setLocalConfig(a)),
                    a
                }
                )).catch((function(t) {
                    var e = n._constructError(t);
                    return g.reject(e)
                }
                ))
            }
            ,
            e.createMetaData = function() {
                var t = this._configService
                  , e = {
                    service: {
                        name: t.get("serviceName"),
                        version: t.get("serviceVersion"),
                        agent: {
                            name: "rum-js",
                            version: t.version
                        },
                        language: {
                            name: "javascript"
                        },
                        environment: t.get("environment")
                    },
                    labels: t.get("context.tags")
                };
                return se(Yt, e)
            }
            ,
            e.addError = function(t) {
                var e;
                this.throttleEvents(((e = {}).errors = t,
                e))
            }
            ,
            e.addTransaction = function(t) {
                var e;
                this.throttleEvents(((e = {}).transactions = t,
                e))
            }
            ,
            e.ndjsonErrors = function(t, e) {
                var n = e ? "e" : "error";
                return t.map((function(t) {
                    var r;
                    return de.stringify(((r = {})[n] = e ? function(t) {
                        var e, n = t.exception, r = {
                            id: t.id,
                            cl: t.culprit,
                            ex: {
                                mg: n.message,
                                st: (e = n.stacktrace,
                                e.map((function(t) {
                                    return {
                                        ap: t.abs_path,
                                        f: t.filename,
                                        fn: t.function,
                                        li: t.lineno,
                                        co: t.colno
                                    }
                                }
                                ))),
                                t: t.type
                            },
                            c: Te(t.context)
                        }, i = t.transaction;
                        return i && (r.tid = t.trace_id,
                        r.pid = t.parent_id,
                        r.xid = t.transaction_id,
                        r.x = {
                            t: i.type,
                            sm: i.sampled
                        }),
                        r
                    }(t) : t,
                    r))
                }
                ))
            }
            ,
            e.ndjsonMetricsets = function(t) {
                return t.map((function(t) {
                    return de.stringify({
                        metricset: t
                    })
                }
                )).join("")
            }
            ,
            e.ndjsonTransactions = function(t, e) {
                var n = this
                  , r = e ? "x" : "transaction";
                return t.map((function(t) {
                    var i, a = "", o = "";
                    return e || (t.spans && (a = t.spans.map((function(t) {
                        return de.stringify({
                            span: t
                        })
                    }
                    )).join(""),
                    delete t.spans),
                    t.breakdown && (o = n.ndjsonMetricsets(t.breakdown),
                    delete t.breakdown)),
                    de.stringify(((i = {})[r] = e ? function(t) {
                        var e, n = t.spans.map((function(e) {
                            var n = {
                                id: e.id,
                                n: e.name,
                                t: e.type,
                                s: e.start,
                                d: e.duration,
                                c: Te(e.context)
                            };
                            return e.parent_id !== t.id && (n.pid = e.parent_id),
                            !0 === e.sync && (n.sy = !0),
                            e.subtype && (n.su = e.subtype),
                            e.action && (n.ac = e.action),
                            n
                        }
                        ));
                        return {
                            id: t.id,
                            tid: t.trace_id,
                            n: t.name,
                            t: t.type,
                            d: t.duration,
                            c: Te(t.context),
                            m: Ee(t.marks),
                            me: (e = t.breakdown,
                            e.map((function(t) {
                                var e = t.span
                                  , n = t.samples
                                  , r = null != e;
                                return r ? {
                                    y: {
                                        t: e.type
                                    },
                                    sa: {
                                        ysc: {
                                            v: n["span.self_time.count"].value
                                        },
                                        yss: {
                                            v: n["span.self_time.sum.us"].value
                                        }
                                    }
                                } : {
                                    sa: {
                                        xdc: {
                                            v: n["transaction.duration.count"].value
                                        },
                                        xds: {
                                            v: n["transaction.duration.sum.us"].value
                                        },
                                        xbc: {
                                            v: n["transaction.breakdown.count"].value
                                        }
                                    }
                                }
                            }
                            ))),
                            y: n,
                            yc: {
                                sd: n.length
                            },
                            sm: t.sampled,
                            exp: t.experience
                        }
                    }(t) : t,
                    i)) + a + o
                }
                ))
            }
            ,
            e.sendEvents = function(t) {
                var e, n;
                if (0 !== t.length) {
                    for (var r = [], i = [], a = 0; a < t.length; a++) {
                        var o = t[a];
                        o.transactions && r.push(o.transactions),
                        o.errors && i.push(o.errors)
                    }
                    if (0 !== r.length || 0 !== i.length) {
                        var s = this._configService
                          , c = ((e = {}).transactions = r,
                        e.errors = i,
                        e)
                          , u = s.applyFilters(c);
                        if (u) {
                            var f = s.get("apiVersion")
                              , d = f > 2
                              , p = []
                              , l = this.createMetaData()
                              , v = d ? "m" : "metadata";
                            p.push(de.stringify(((n = {})[v] = d ? function(t) {
                                var e = t.service
                                  , n = t.labels
                                  , r = e.agent
                                  , i = e.language;
                                return {
                                    se: {
                                        n: e.name,
                                        ve: e.version,
                                        a: {
                                            n: r.name,
                                            ve: r.version
                                        },
                                        la: {
                                            n: i.name
                                        },
                                        en: e.environment
                                    },
                                    l: n
                                }
                            }(l) : l,
                            n)));
                            var h = (p = p.concat(this.ndjsonErrors(u.errors, d), this.ndjsonTransactions(u.transactions, d))).join("")
                              , g = s.get("serverUrl") + "/intake/v" + f + "/rum/events";
                            return this._postJson(g, h)
                        }
                        this._loggingService.warn("Dropped payload due to filtering!")
                    }
                }
            }
            ,
            t
        }();
        var ke, Le = function() {
            function t() {
                this.config = {
                    serviceName: "",
                    serviceVersion: "",
                    environment: "",
                    serverUrl: "http://localhost:8200",
                    active: !0,
                    instrument: !0,
                    disableInstrumentations: [],
                    logLevel: "warn",
                    breakdownMetrics: !1,
                    ignoreTransactions: [],
                    eventsLimit: 80,
                    queueLimit: -1,
                    flushInterval: 500,
                    distributedTracing: !0,
                    distributedTracingOrigins: [],
                    distributedTracingHeaderName: "traceparent",
                    pageLoadTraceId: "",
                    pageLoadSpanId: "",
                    pageLoadSampled: !1,
                    pageLoadTransactionName: "",
                    transactionSampleRate: 1,
                    centralConfig: !1,
                    monitorLongtasks: !0,
                    apiVersion: 2,
                    context: {}
                },
                this.events = new Nt,
                this.filters = [],
                this.version = ""
            }
            var e = t.prototype;
            return e.init = function() {
                var t = function(t) {
                    if (!t)
                        return {};
                    for (var e = {}, n = /^data-([\w-]+)$/, r = t.attributes, i = 0; i < r.length; i++) {
                        var a = r[i];
                        if (n.test(a.nodeName)) {
                            var o = a.nodeName.match(n)[1].split("-").map((function(t, e) {
                                return e > 0 ? t.charAt(0).toUpperCase() + t.substring(1) : t
                            }
                            )).join("");
                            e[o] = a.value || a.nodeValue
                        }
                    }
                    return e
                }(N());
                this.setConfig(t)
            }
            ,
            e.isActive = function() {
                return this.get("active")
            }
            ,
            e.setVersion = function(t) {
                this.version = t
            }
            ,
            e.addFilter = function(t) {
                if ("function" !== typeof t)
                    throw new Error("Argument to must be function");
                this.filters.push(t)
            }
            ,
            e.applyFilters = function(t) {
                for (var e = 0; e < this.filters.length; e++)
                    if (!(t = this.filters[e](t)))
                        return;
                return t
            }
            ,
            e.get = function(t) {
                return t.split(".").reduce((function(t, e) {
                    return t && t[e]
                }
                ), this.config)
            }
            ,
            e.setUserContext = function(t) {
                void 0 === t && (t = {});
                var e = {}
                  , n = t
                  , r = n.id
                  , i = n.username
                  , a = n.email;
                "number" !== typeof r && "string" !== typeof r || (e.id = r),
                "string" === typeof i && (e.username = i),
                "string" === typeof a && (e.email = a),
                this.config.context.user = I(this.config.context.user || {}, e)
            }
            ,
            e.setCustomContext = function(t) {
                void 0 === t && (t = {}),
                this.config.context.custom = I(this.config.context.custom || {}, t)
            }
            ,
            e.addLabels = function(t) {
                var e = this;
                this.config.context.tags || (this.config.context.tags = {}),
                Object.keys(t).forEach((function(n) {
                    return k(n, t[n], e.config.context.tags)
                }
                ))
            }
            ,
            e.setConfig = function(t) {
                void 0 === t && (t = {}),
                t.serverUrl && (t.serverUrl = t.serverUrl.replace(/\/+$/, "")),
                j(this.config, t),
                this.events.send("config:change", [this.config])
            }
            ,
            e.validate = function(t) {
                void 0 === t && (t = {});
                var e = ["serviceName", "serverUrl"]
                  , n = {
                    missing: [],
                    invalid: []
                };
                Object.keys(t).forEach((function(r) {
                    -1 === e.indexOf(r) || t[r] || n.missing.push(r)
                }
                )),
                t.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(t.serviceName) && n.invalid.push({
                    key: "serviceName",
                    value: t.serviceName,
                    allowed: "a-z, A-Z, 0-9, _, -, <space>"
                });
                var r = t.transactionSampleRate;
                return "undefined" !== typeof r && ("number" !== typeof r || isNaN(r) || r < 0 || r > 1) && n.invalid.push({
                    key: "transactionSampleRate",
                    value: r,
                    allowed: "Number between 0 and 1"
                }),
                n
            }
            ,
            e.getLocalConfig = function() {
                var t = sessionStorage.getItem("elastic_apm_config");
                if (t)
                    return JSON.parse(t)
            }
            ,
            e.setLocalConfig = function(t) {
                t && sessionStorage.setItem("elastic_apm_config", JSON.stringify(t))
            }
            ,
            t
        }(), Oe = function() {
            function t(t) {
                void 0 === t && (t = {}),
                this.levels = ["trace", "debug", "info", "warn", "error"],
                this.level = t.level || "warn",
                this.prefix = t.prefix || "",
                this.resetLogMethods()
            }
            var e = t.prototype;
            return e.shouldLog = function(t) {
                return this.levels.indexOf(t) >= this.levels.indexOf(this.level)
            }
            ,
            e.setLevel = function(t) {
                t !== this.level && (this.level = t,
                this.resetLogMethods())
            }
            ,
            e.resetLogMethods = function() {
                var t = this;
                this.levels.forEach((function(e) {
                    t[e] = t.shouldLog(e) ? function() {
                        var t = e;
                        "trace" !== e && "debug" !== e || (t = "info");
                        var n = arguments;
                        if (n[0] = this.prefix + n[0],
                        console) {
                            var r = console[t] || console.log;
                            "function" === typeof r && r.apply(console, n)
                        }
                    }
                    : A
                }
                ))
            }
            ,
            t
        }(), Ce = ((ke = {})[_t] = function() {
            return new Le
        }
        ,
        ke[bt] = function() {
            return new Oe({
                prefix: "[Elastic APM] "
            })
        }
        ,
        ke[wt] = function(t) {
            var e = t.getService([_t, bt])
              , n = e[0]
              , r = e[1];
            return new xe(n,r)
        }
        ,
        ke), Ne = function() {
            function t() {
                this.instances = {},
                this.initialized = !1
            }
            var e = t.prototype;
            return e.init = function() {
                if (!this.initialized) {
                    this.initialized = !0;
                    var t = this.getService(_t);
                    t.init();
                    var e = this.getService([bt, wt])
                      , n = e[0]
                      , r = e[1];
                    t.events.observe("config:change", (function() {
                        var e = t.get("logLevel");
                        n.setLevel(e)
                    }
                    )),
                    r.init()
                }
            }
            ,
            e.getService = function(t) {
                var e = this;
                return "string" === typeof t ? (this.instances[t] || "function" === typeof Ce[t] && (this.instances[t] = Ce[t](this)),
                this.instances[t]) : Array.isArray(t) ? t.map((function(t) {
                    return e.getService(t)
                }
                )) : void 0
            }
            ,
            t
        }();
        var Ie = .05;
        var je = function() {
            function t(t, e, n, r) {
                this._apmServer = t,
                this._configService = e,
                this._logginService = n,
                this._transactionService = r
            }
            var e = t.prototype;
            return e.init = function(t) {
                var e = this;
                void 0 === t && (t = {}),
                this._configService.events.observe("transaction:end:after", (function(t) {
                    var n = e.createTransactionPayload(t);
                    n && e._apmServer.addTransaction(n)
                }
                )),
                t[ct] && It.observe(ct, this.getHistorySub()),
                t[ot] && It.observe(ot, this.getXHRSub()),
                t[st] && It.observe(st, this.getFetchSub()),
                t[ut] && It.observe(ut, this.getEventTargetSub())
            }
            ,
            e.getEventTargetSub = function() {
                var t = this._transactionService;
                return function(e, n) {
                    if (e === K && n.source === ut && "click" === n.eventType) {
                        var r = n.target
                          , i = r.getAttribute("name")
                          , a = "";
                        i && (a = '["' + i + '"]');
                        var o = r.tagName.toLowerCase()
                          , s = t.startTransaction("Click - " + o + a, "user-interaction", {
                            managed: !0,
                            canReuse: !0,
                            reuseThreshold: 100
                        });
                        if (s) {
                            var c = r.getAttribute("class");
                            c && s.addContext({
                                custom: {
                                    classes: c
                                }
                            })
                        }
                    }
                }
            }
            ,
            e.getHistorySub = function() {
                var t = this._transactionService;
                return function(e, n) {
                    n.source === ct && e === Z && t.startTransaction(n.data.title, "route-change", {
                        managed: !0,
                        canReuse: !0
                    })
                }
            }
            ,
            e.getXHRSub = function() {
                var t = this;
                return function(e, n) {
                    n.source !== ot || B.fetchInProgress || t.processAPICalls(e, n)
                }
            }
            ,
            e.getFetchSub = function() {
                var t = this;
                return function(e, n) {
                    n.source === st && t.processAPICalls(e, n)
                }
            }
            ,
            e.processAPICalls = function(t, e) {
                var n = this._configService
                  , r = this._transactionService;
                if (t === K && e.data) {
                    var i = e.data
                      , a = new Bt(i.url)
                      , o = i.method + " " + (a.relative ? a.path : L(a.href));
                    r.getCurrentTransaction() || r.startTransaction(o, "http-request", {
                        managed: !0
                    });
                    var s = r.startSpan(o, "external.http", {
                        blocking: !0
                    });
                    if (!s)
                        return;
                    var c = n.get("distributedTracing")
                      , u = n.get("distributedTracingOrigins")
                      , f = new Bt(window.location.href)
                      , d = E(a.origin, f.origin) || E(a.origin, u)
                      , p = i.target;
                    c && d && p && this.injectDtHeader(s, p),
                    i.sync && (s.sync = i.sync),
                    i.span = s
                } else if (t === Z) {
                    var l = e.data;
                    l && l.span && r.endSpan(l.span, l)
                }
            }
            ,
            e.injectDtHeader = function(t, e) {
                var n, r = this._configService.get("distributedTracingHeaderName"), i = function(t) {
                    if (t && t.traceId && t.id && t.parentId) {
                        var e = t.sampled ? "01" : "00"
                          , n = t.sampled ? t.id : t.parentId;
                        return "00-" + t.traceId + "-" + n + "-" + e
                    }
                }(t), a = /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(n = i) && "00000000000000000000000000000000" !== n.slice(3, 35) && "0000000000000000" !== n.slice(36, 52);
                r && i && a && ("function" === typeof e.setRequestHeader ? e.setRequestHeader(r, i) : e.headers && "function" === typeof e.headers.append ? e.headers.append(r, i) : e[r] = i)
            }
            ,
            e.extractDtHeader = function(t) {
                var e = this._configService.get("distributedTracingHeaderName");
                if (t)
                    return function(t) {
                        var e = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(t);
                        if (e) {
                            var n = "00" !== e[4];
                            return {
                                traceId: e[2],
                                id: e[3],
                                sampled: n
                            }
                        }
                    }(t[e])
            }
            ,
            e.filterTransaction = function(t) {
                var e = t.duration();
                if (!e)
                    return !1;
                if (t.isManaged()) {
                    if (e > 6e4)
                        return !1;
                    if (t.sampled && 0 === t.spans.length)
                        return !1
                }
                return !0
            }
            ,
            e.createTransactionDataModel = function(t) {
                var e = t._start
                  , n = t.spans.map((function(n) {
                    var r = {
                        id: n.id,
                        transaction_id: t.id,
                        parent_id: n.parentId || t.id,
                        trace_id: t.traceId,
                        name: n.name,
                        type: n.type,
                        subtype: n.subtype,
                        action: n.action,
                        sync: n.sync,
                        start: parseInt(n._start - e),
                        duration: n.duration(),
                        context: n.context
                    };
                    return se(ne, r)
                }
                ))
                  , r = {
                    id: t.id,
                    trace_id: t.traceId,
                    name: t.name,
                    type: t.type,
                    duration: t.duration(),
                    spans: n,
                    context: t.context,
                    marks: t.marks,
                    breakdown: t.breakdownTimings,
                    span_count: {
                        started: n.length
                    },
                    sampled: t.sampled,
                    experience: t.experience
                };
                return se(re, r)
            }
            ,
            e.createTransactionPayload = function(t) {
                var e = function(t) {
                    if (t.sampled) {
                        var e = t.spans.filter((function(e) {
                            return e.duration() > 0 && e._start >= t._start && e._end <= t._end
                        }
                        ));
                        if (t.isManaged()) {
                            var n = function(t, e, n) {
                                t.sort((function(t, e) {
                                    return t._start - e._start
                                }
                                ));
                                var r = []
                                  , i = 1;
                                return t.forEach((function(a, o) {
                                    if (0 === r.length)
                                        r.push(a);
                                    else {
                                        var s = r[r.length - 1]
                                          , c = s.type === a.type && s.subtype === a.subtype && s.action === a.action && s.name === a.name && a.duration() / e < n && (a._start - s._end) / e < n
                                          , u = t.length === o + 1;
                                        c && (i++,
                                        s._end = a._end),
                                        i > 1 && (!c || u) && (s.name = i + "x " + s.name,
                                        i = 1),
                                        c || r.push(a)
                                    }
                                }
                                )),
                                r
                            }(e, t.duration(), Ie);
                            t.spans = n
                        } else
                            t.spans = e
                    } else
                        t.resetSpans();
                    return t
                }(t);
                if (this.filterTransaction(e))
                    return this.createTransactionDataModel(t)
            }
            ,
            t
        }()
          , Fe = [["domainLookupStart", "domainLookupEnd", "DNS"], ["connectStart", "connectEnd", "TCP"], ["requestStart", "responseStart", "Request"], ["responseStart", "responseEnd", "Response"], ["domLoading", "domComplete", "Processing"], ["loadEventStart", "loadEventEnd", "Load"]];
        function Ae(t) {
            return {
                value: t
            }
        }
        function Re(t, e) {
            var n = e.details
              , r = e.count
              , i = void 0 === r ? 1 : r
              , a = e.duration;
            return {
                transaction: t,
                span: n,
                samples: {
                    "span.self_time.count": Ae(i),
                    "span.self_time.sum.us": Ae(a)
                }
            }
        }
        function Pe(t, e) {
            void 0 === e && (e = _.timing);
            var n = []
              , r = t.duration()
              , i = t.name
              , a = t.type
              , o = t.sampled
              , s = {
                name: i,
                type: a
            };
            if (n.push({
                transaction: s,
                samples: {
                    "transaction.duration.count": Ae(1),
                    "transaction.duration.sum.us": Ae(r),
                    "transaction.breakdown.count": Ae(o ? 1 : 0)
                }
            }),
            !o)
                return n;
            if (a === et && e)
                for (var c = 0; c < Fe.length; c++) {
                    var u = Fe[c]
                      , f = q(e[u[0]], e[u[1]]);
                    0 !== f && null != f && n.push(Re(s, {
                        details: {
                            type: u[2]
                        },
                        duration: f
                    }))
                }
            else {
                var d = function(t) {
                    var e = {}
                      , n = function(t) {
                        var e = t.spans
                          , n = t._start
                          , r = t._end;
                        if (0 === e.length)
                            return t.duration();
                        e.sort((function(t, e) {
                            return t._start - e._start
                        }
                        ));
                        for (var i = e[0], a = i._end, o = i._start, s = a, c = o - n, u = 1; u < e.length; u++)
                            o = (i = e[u])._start,
                            a = i._end,
                            o > s ? (c += o - s,
                            s = a) : a > s && (s = a);
                        return s < r && (c += r - s),
                        c
                    }(t);
                    e.app = {
                        count: 1,
                        duration: n
                    };
                    for (var r = t.spans, i = 0; i < r.length; i++) {
                        var a = r[i]
                          , o = a.duration();
                        if (0 !== o && null != o) {
                            var s = a.type
                              , c = a.subtype
                              , u = s.replace(St, "");
                            c && (u += "." + c),
                            e[u] || (e[u] = {
                                duration: 0,
                                count: 0
                            }),
                            e[u].count++,
                            e[u].duration += o
                        }
                    }
                    return e
                }(t);
                Object.keys(d).forEach((function(t) {
                    var e = t.split(".")
                      , r = e[0]
                      , i = e[1]
                      , a = d[t]
                      , o = a.duration
                      , c = a.count;
                    n.push(Re(s, {
                        details: {
                            type: r,
                            subtype: i
                        },
                        duration: o,
                        count: c
                    }))
                }
                ))
            }
            return n
        }
        var Me = function(t) {
            var e, n;
            function r(e, n, r) {
                var i;
                return (i = t.call(this, e, n, r) || this).traceId = T(),
                i.marks = void 0,
                i.spans = [],
                i._activeSpans = {},
                i._activeTasks = new Set,
                i.blocked = !1,
                i.captureTimings = !1,
                i.breakdownTimings = [],
                i.sampled = Math.random() <= i.options.transactionSampleRate,
                i
            }
            n = t,
            (e = r).prototype = Object.create(n.prototype),
            e.prototype.constructor = e,
            e.__proto__ = n;
            var i = r.prototype;
            return i.addMarks = function(t) {
                this.marks = j(this.marks || {}, t)
            }
            ,
            i.mark = function(t) {
                var e = R(t)
                  , n = P() - this._start
                  , r = {};
                r[e] = n,
                this.addMarks({
                    custom: r
                })
            }
            ,
            i.canReuse = function() {
                var t = this.options.reuseThreshold || 5e3;
                return !!this.options.canReuse && !this.ended && P() - this._start < t
            }
            ,
            i.redefine = function(t, e, n) {
                t && (this.name = t),
                e && (this.type = e),
                n && I(this.options, n)
            }
            ,
            i.startSpan = function(t, e, n) {
                var r = this;
                if (!this.ended) {
                    var i = I({}, n);
                    i.onEnd = function(t) {
                        r._onSpanEnd(t)
                    }
                    ,
                    i.traceId = this.traceId,
                    i.sampled = this.sampled,
                    i.parentId || (i.parentId = this.id);
                    var a = new le(t,e,i);
                    return this._activeSpans[a.id] = a,
                    i.blocking && this.addTask(a.id),
                    a
                }
            }
            ,
            i.isFinished = function() {
                return !this.blocked && 0 === this._activeTasks.size
            }
            ,
            i.detectFinish = function() {
                this.isFinished() && this.end()
            }
            ,
            i.end = function(t) {
                if (!this.ended) {
                    for (var e in this.ended = !0,
                    this._end = M(t),
                    this._activeSpans) {
                        var n = this._activeSpans[e];
                        n.type = n.type + St,
                        n.end(t)
                    }
                    this.callOnEnd()
                }
            }
            ,
            i.captureBreakdown = function() {
                this.breakdownTimings = Pe(this)
            }
            ,
            i.block = function(t) {
                this.blocked = t,
                this.blocked || this.detectFinish()
            }
            ,
            i.addTask = function(t) {
                return t || (t = "task-" + T(16)),
                this._activeTasks.add(t),
                t
            }
            ,
            i.removeTask = function(t) {
                this._activeTasks.delete(t) && this.detectFinish()
            }
            ,
            i.resetSpans = function() {
                this.spans = []
            }
            ,
            i._onSpanEnd = function(t) {
                this.spans.push(t),
                delete this._activeSpans[t.id],
                this.removeTask(t.id)
            }
            ,
            i.isManaged = function() {
                return !!this.options.managed
            }
            ,
            r
        }(pe)
          , qe = {
            fid: 0,
            fcp: 0,
            tbt: {
                start: 1 / 0,
                duration: 0
            },
            cls: 0
        }
          , He = 50;
        function De(t, e) {
            var n = e.capturePaint
              , r = t.getEntriesByType(dt)
              , i = {
                spans: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n]
                          , i = r.name
                          , a = r.startTime
                          , o = r.duration
                          , s = r.attribution
                          , c = a + o
                          , u = new le("Longtask(" + i + ")",dt,{
                            startTime: a
                        });
                        if (s.length > 0) {
                            var f = s[0]
                              , d = f.name
                              , p = f.containerType
                              , l = f.containerName
                              , v = f.containerId
                              , h = {
                                attribution: d,
                                type: p
                            };
                            l && (h.name = l),
                            v && (h.id = v),
                            u.addContext({
                                custom: h
                            })
                        }
                        u.end(c),
                        e.push(u)
                    }
                    return e
                }(r),
                marks: {}
            };
            if (!n)
                return i;
            var a = t.getEntriesByType(gt)
              , o = a[a.length - 1];
            if (o) {
                var s = parseInt(o.startTime);
                qe.lcp = s,
                i.marks.largestContentfulPaint = s
            }
            var c = _.timing
              , u = c.fetchStart - c.navigationStart
              , f = t.getEntriesByName(ht)[0];
            if (f) {
                var d = parseInt(u >= 0 ? f.startTime - u : f.startTime);
                qe.fcp = d,
                i.marks.firstContentfulPaint = d
            }
            var p = function(t) {
                var e = t[0];
                if (e) {
                    var n = e.startTime
                      , r = e.processingStart
                      , i = new le("First Input Delay",mt,{
                        startTime: n
                    });
                    return i.end(r),
                    i
                }
            }(t.getEntriesByType(mt));
            return p && (qe.fid = p._start,
            i.spans.push(p)),
            function(t) {
                t.forEach((function(t) {
                    var e = t.name
                      , n = t.startTime
                      , r = t.duration;
                    if (!(n < qe.fcp) && ("self" === e || -1 !== e.indexOf("same-origin"))) {
                        qe.tbt.start = Math.min(qe.tbt.start, n);
                        var i = r - He;
                        i > 0 && (qe.tbt.duration += i)
                    }
                }
                ))
            }(r),
            function(t) {
                t.forEach((function(t) {
                    t.hadRecentInput || (qe.cls += t.value)
                }
                ))
            }(t.getEntriesByType(yt)),
            i
        }
        var ze = function() {
            function t(t) {
                this.po = {
                    observe: A,
                    disconnect: A
                },
                window.PerformanceObserver && (this.po = new PerformanceObserver(t))
            }
            var e = t.prototype;
            return e.start = function(t) {
                try {
                    var e = !0;
                    t === dt && (e = !1),
                    this.po.observe({
                        type: t,
                        buffered: e
                    })
                } catch (n) {}
            }
            ,
            e.stop = function() {
                this.po.disconnect()
            }
            ,
            t
        }()
          , Be = function() {
            function t(t, e) {
                var n = this;
                this._config = e,
                this._logger = t,
                this.currentTransaction = void 0,
                this.respIntervalId = void 0,
                this.recorder = new ze((function(t) {
                    var e = n.getCurrentTransaction();
                    if (e && e.captureTimings) {
                        var r, i = !1;
                        e.type === et && (i = !0);
                        var a = De(t, {
                            capturePaint: i
                        })
                          , o = a.spans
                          , s = a.marks;
                        (r = e.spans).push.apply(r, o),
                        e.addMarks({
                            agent: s
                        })
                    }
                }
                ))
            }
            var e = t.prototype;
            return e.ensureCurrentTransaction = function(t, e, n) {
                var r = this.getCurrentTransaction();
                return r || (r = new Me(t,e,n),
                this.setCurrentTransaction(r),
                r)
            }
            ,
            e.getCurrentTransaction = function() {
                if (this.currentTransaction && !this.currentTransaction.ended)
                    return this.currentTransaction
            }
            ,
            e.setCurrentTransaction = function(t) {
                this.currentTransaction = t
            }
            ,
            e.createOptions = function(t) {
                var e = this._config.config
                  , n = I({
                    transactionSampleRate: e.transactionSampleRate
                }, t);
                return n.managed && (n = I({
                    pageLoadTraceId: e.pageLoadTraceId,
                    pageLoadSampled: e.pageLoadSampled,
                    pageLoadSpanId: e.pageLoadSpanId,
                    pageLoadTransactionName: e.pageLoadTransactionName
                }, n)),
                n
            }
            ,
            e.startManagedTransaction = function(t, e, n) {
                var r = this.getCurrentTransaction()
                  , i = !1;
                if (r)
                    if (r.canReuse() && n.canReuse) {
                        var a = r.type
                          , o = it.indexOf(r.type)
                          , s = it.indexOf(e);
                        o >= 0 && s < o && (a = e),
                        r.redefine(t, a, n),
                        i = !0
                    } else
                        r.end(),
                        r = this.ensureCurrentTransaction(t, e, n);
                else
                    r = this.ensureCurrentTransaction(t, e, n);
                return r.type === et && (i || (this.recorder.start(gt),
                this.recorder.start("paint"),
                this.recorder.start(mt),
                this.recorder.start(yt)),
                n.pageLoadTraceId && (r.traceId = n.pageLoadTraceId),
                n.pageLoadSampled && (r.sampled = n.pageLoadSampled),
                r.name === rt && n.pageLoadTransactionName && (r.name = n.pageLoadTransactionName)),
                !i && this._config.get("monitorLongtasks") && this.recorder.start(dt),
                r.sampled && (r.captureTimings = !0),
                r
            }
            ,
            e.startTransaction = function(t, e, n) {
                var r, i = this, a = this.createOptions(n), o = !0;
                a.managed ? this.currentTransaction === (r = this.startManagedTransaction(t, e, a)) && (o = !1) : r = new Me(t,e,a);
                return r.onEnd = function() {
                    return i.handleTransactionEnd(r)
                }
                ,
                o && this._config.events.send("transaction:start", [r]),
                r
            }
            ,
            e.handleTransactionEnd = function(t) {
                var e = this;
                this.recorder.stop();
                var n = window.location.href;
                return g.resolve().then((function() {
                    var r = t.name
                      , i = t.type;
                    if (!(At.lastHiddenStart >= t._start) && !e.shouldIgnoreTransaction(r) && "temporary" !== i) {
                        if (i === et) {
                            var a = e._config.get("pageLoadTransactionName");
                            if (r === rt && a && (t.name = a),
                            t.captureTimings) {
                                var o = qe.cls
                                  , s = qe.fid
                                  , c = qe.tbt;
                                c.duration > 0 && t.spans.push(function(t) {
                                    var e = t.start
                                      , n = t.duration
                                      , r = new le("Total Blocking Time",dt,{
                                        startTime: e
                                    });
                                    return r.end(e + n),
                                    r
                                }(c)),
                                t.experience = {},
                                z(dt) && (t.experience.tbt = c.duration),
                                z(yt) && (t.experience.cls = o),
                                s > 0 && (t.experience.fid = s)
                            }
                        }
                        t.name === rt && (t.name = function(t, e) {
                            void 0 === e && (e = 2);
                            for (var n = new Bt(t), r = n.query, i = n.path.substring(1).split("/"), a = /\W|_/g, o = /[0-9]/g, s = /[a-z]/g, c = /[A-Z]/g, u = [], f = !1, d = 0; d < i.length; d++) {
                                var p = i[d];
                                if (f || d > e - 1) {
                                    p && u.push("*");
                                    break
                                }
                                if ((p.match(a) || []).length >= 2)
                                    u.push(":id"),
                                    f = !0;
                                else {
                                    var l = (p.match(o) || []).length;
                                    if (l > 3 || p.length > 3 && l / p.length >= .3)
                                        u.push(":id"),
                                        f = !0;
                                    else {
                                        var v = (p.match(c) || []).length
                                          , h = (p.match(s) || []).length / p.length
                                          , g = v / p.length;
                                        p.length > 5 && (g > .3 && g < .6 || h > .3 && h < .6) ? (u.push(":id"),
                                        f = !0) : p && u.push(p)
                                    }
                                }
                            }
                            return "/" + (u.length >= 2 ? u.join("/") : u.join("")) + (r ? "?{query}" : "")
                        }(n)),
                        we(t),
                        e.adjustTransactionTime(t),
                        e._config.get("breakdownMetrics") && t.captureBreakdown();
                        var u = e._config.get("context");
                        Wt(t, u),
                        e._config.events.send("transaction:end", [t])
                    }
                }
                ), (function(t) {
                    0
                }
                ))
            }
            ,
            e.adjustTransactionTime = function(t) {
                var e = t.spans
                  , n = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) {
                        var r = t[n];
                        e._start > r._start && (e = r)
                    }
                    return e
                }(e);
                n && n._start < t._start && (t._start = n._start);
                var r = function(t) {
                    for (var e = null, n = 0; n < t.length; n++) {
                        var r = t[n];
                        -1 === String(r.type).indexOf("external") && (!e || e._end < r._end) && (e = r)
                    }
                    return e
                }(e);
                r && r._end > t._end && (t._end = r._end);
                for (var i = t._end, a = 0; a < e.length; a++) {
                    var o = e[a];
                    o._end > i && (o._end = i,
                    o.type += St),
                    o._start > i && (o._start = i)
                }
            }
            ,
            e.shouldIgnoreTransaction = function(t) {
                var e = this._config.get("ignoreTransactions");
                if (e && e.length)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if ("function" === typeof r.test) {
                            if (r.test(t))
                                return !0
                        } else if (r === t)
                            return !0
                    }
                return !1
            }
            ,
            e.startSpan = function(t, e, n) {
                var r = this.ensureCurrentTransaction(void 0, "temporary", this.createOptions({
                    canReuse: !0,
                    managed: !0
                }));
                if (r) {
                    var i = r.startSpan(t, e, n);
                    return i
                }
            }
            ,
            e.endSpan = function(t, e) {
                t && t.end(null, e)
            }
            ,
            t
        }();
        function Ue() {
            return Ce.TransactionService = function(t) {
                var e = t.getService([bt, _t])
                  , n = e[0]
                  , r = e[1];
                return new Be(n,r)
            }
            ,
            Ce.PerformanceMonitoring = function(t) {
                var e = t.getService([wt, _t, bt, "TransactionService"])
                  , n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , a = e[3];
                return new je(n,r,i,a)
            }
            ,
            Ce.ErrorLogging = function(t) {
                var e = t.getService([wt, _t, "TransactionService"])
                  , n = e[0]
                  , r = e[1]
                  , i = e[2];
                return new ue(n,r,i)
            }
            ,
            new Ne
        }
        var Ve = function() {
            function t(t, e) {
                this._disable = e,
                this.serviceFactory = t,
                this._initialized = !1
            }
            var e = t.prototype;
            return e.init = function(t) {
                var e = this;
                if (this.isEnabled() && !this._initialized) {
                    this._initialized = !0;
                    var n = this.serviceFactory.getService([_t, bt])
                      , r = n[0]
                      , i = n[1];
                    r.setVersion("5.5.0"),
                    this.config(t);
                    var a = r.get("logLevel");
                    if (i.setLevel(a),
                    r.isActive()) {
                        this.serviceFactory.init();
                        var o = function(t, e) {
                            var n, r = ((n = {})[ot] = !1,
                            n[st] = !1,
                            n[ct] = !1,
                            n[et] = !1,
                            n[ft] = !1,
                            n[ut] = !1,
                            n);
                            return t ? (Object.keys(r).forEach((function(t) {
                                -1 === e.indexOf(t) && (r[t] = !0)
                            }
                            )),
                            r) : r
                        }(r.get("instrument"), r.get("disableInstrumentations"));
                        if (this.serviceFactory.getService("PerformanceMonitoring").init(o),
                        o[ft])
                            this.serviceFactory.getService("ErrorLogging").registerListeners();
                        var s = function() {
                            return o[et] && e._sendPageLoadMetrics()
                        };
                        r.get("centralConfig") ? this.fetchCentralConfig().then(s) : s()
                    } else
                        this._disable = !0,
                        i.warn("RUM agent is inactive")
                }
                return this
            }
            ,
            e.fetchCentralConfig = function() {
                var t = this.serviceFactory.getService([wt, bt, _t])
                  , e = t[0]
                  , n = t[1]
                  , r = t[2];
                return e.fetchConfig(r.get("serviceName"), r.get("environment")).then((function(t) {
                    var e = t.transaction_sample_rate;
                    if (e) {
                        var i = {
                            transactionSampleRate: e = Number(e)
                        }
                          , a = r.validate(i).invalid;
                        if (0 === a.length)
                            r.setConfig(i);
                        else {
                            var o = a[0]
                              , s = o.key
                              , c = o.value
                              , u = o.allowed;
                            n.warn('invalid value "' + c + '" for ' + s + ". Allowed: " + u + ".")
                        }
                    }
                    return t
                }
                )).catch((function(t) {
                    n.warn("failed fetching config:", t)
                }
                ))
            }
            ,
            e._sendPageLoadMetrics = function() {
                var t = this.startTransaction(void 0, et, {
                    managed: !0,
                    canReuse: !0
                });
                if (t) {
                    t.addTask(et);
                    var e = function() {
                        setTimeout((function() {
                            return t.removeTask(et)
                        }
                        ))
                    };
                    "complete" === document.readyState ? e() : window.addEventListener("load", e)
                }
            }
            ,
            e.isEnabled = function() {
                return !this._disable
            }
            ,
            e.observe = function(t, e) {
                this.serviceFactory.getService(_t).events.observe(t, e)
            }
            ,
            e.config = function(t) {
                var e = this.serviceFactory.getService(_t)
                  , n = e.validate(t)
                  , r = n.missing
                  , i = n.invalid;
                if (0 === r.length && 0 === i.length)
                    e.setConfig(t);
                else {
                    var a = this.serviceFactory.getService(bt)
                      , o = "RUM agent isn't correctly configured. ";
                    r.length > 0 && (o += r.join(", ") + " is missing",
                    i.length > 0 && (o += ", ")),
                    i.forEach((function(t, e) {
                        var n = t.key
                          , r = t.value
                          , a = t.allowed;
                        o += n + ' "' + r + '" contains invalid characters! (allowed: ' + a + ")" + (e !== i.length - 1 ? ", " : "")
                    }
                    )),
                    a.error(o),
                    e.setConfig({
                        active: !1
                    })
                }
            }
            ,
            e.setUserContext = function(t) {
                this.serviceFactory.getService(_t).setUserContext(t)
            }
            ,
            e.setCustomContext = function(t) {
                this.serviceFactory.getService(_t).setCustomContext(t)
            }
            ,
            e.addLabels = function(t) {
                this.serviceFactory.getService(_t).addLabels(t)
            }
            ,
            e.setInitialPageLoadName = function(t) {
                this.isEnabled() && this.serviceFactory.getService(_t).setConfig({
                    pageLoadTransactionName: t
                })
            }
            ,
            e.startTransaction = function(t, e, n) {
                if (this.isEnabled())
                    return this.serviceFactory.getService("TransactionService").startTransaction(t, e, n)
            }
            ,
            e.startSpan = function(t, e, n) {
                if (this.isEnabled())
                    return this.serviceFactory.getService("TransactionService").startSpan(t, e, n)
            }
            ,
            e.getCurrentTransaction = function() {
                if (this.isEnabled())
                    return this.serviceFactory.getService("TransactionService").getCurrentTransaction()
            }
            ,
            e.captureError = function(t) {
                if (this.isEnabled())
                    return this.serviceFactory.getService("ErrorLogging").logError(t)
            }
            ,
            e.addFilter = function(t) {
                this.serviceFactory.getService(_t).addFilter(t)
            }
            ,
            t
        }();
        var $e = function() {
            if (y && window.elasticApm)
                return window.elasticApm;
            var t = Pt()
              , e = Ue()
              , n = new Ve(e,!t);
            return y && (window.elasticApm = n),
            n
        }()
          , Je = $e.init.bind($e)
    },
    iOjB: function(t, e, n) {}
}, [[0, 0, 2, 1, 5]]]);
