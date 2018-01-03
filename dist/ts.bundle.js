!function (e) {
    function n(e) {
        delete installedChunks[e]
    }

    function t(e) {
        var n = document.getElementsByTagName("head")[0], t = document.createElement("script");
        t.type = "text/javascript", t.charset = "utf-8", t.src = f.p + "" + e + "." + g + ".hot-update.js", n.appendChild(t)
    }

    function r(e) {
        return e = e || 1e4, new Promise(function (n, t) {
            if ("undefined" == typeof XMLHttpRequest) return t(new Error("No browser support"));
            try {
                var r = new XMLHttpRequest, o = f.p + "" + g + ".hot-update.json";
                r.open("GET", o, !0), r.timeout = e, r.send(null)
            } catch (e) {
                return t(e)
            }
            r.onreadystatechange = function () {
                if (4 === r.readyState) if (0 === r.status) t(new Error("Manifest request to " + o + " timed out.")); else if (404 === r.status) n(); else if (200 !== r.status && 304 !== r.status) t(new Error("Manifest request to " + o + " failed.")); else {
                    try {
                        var e = JSON.parse(r.responseText)
                    } catch (e) {
                        return void t(e)
                    }
                    n(e)
                }
            }
        })
    }

    function o(e) {
        var n = M[e];
        if (!n) return f;
        var t = function (t) {
            return n.hot.active ? (M[t] ? M[t].parents.indexOf(e) < 0 && M[t].parents.push(e) : (x = [e], y = t), n.children.indexOf(t) < 0 && n.children.push(t)) : (console.warn("[HMR] unexpected require(" + t + ") from disposed module " + e), x = []), f(t)
        };
        for (var r in f) Object.prototype.hasOwnProperty.call(f, r) && "e" !== r && Object.defineProperty(t, r, function (e) {
            return {
                configurable: !0, enumerable: !0, get: function () {
                    return f[e]
                }, set: function (n) {
                    f[e] = n
                }
            }
        }(r));
        return t.e = function (e) {
            function n() {
                H--, "prepare" === j && (k[e] || u(e), 0 === H && 0 === P && l())
            }

            return "ready" === j && c("prepare"), H++, f.e(e).then(n, function (e) {
                throw n(), e
            })
        }, t
    }

    function i(e) {
        var n = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: y !== e,
            active: !0,
            accept: function (e, t) {
                if (void 0 === e) n._selfAccepted = !0; else if ("function" == typeof e) n._selfAccepted = e; else if ("object" == typeof e) for (var r = 0; r < e.length; r++) n._acceptedDependencies[e[r]] = t || function () {
                }; else n._acceptedDependencies[e] = t || function () {
                }
            },
            decline: function (e) {
                if (void 0 === e) n._selfDeclined = !0; else if ("object" == typeof e) for (var t = 0; t < e.length; t++) n._declinedDependencies[e[t]] = !0; else n._declinedDependencies[e] = !0
            },
            dispose: function (e) {
                n._disposeHandlers.push(e)
            },
            addDisposeHandler: function (e) {
                n._disposeHandlers.push(e)
            },
            removeDisposeHandler: function (e) {
                var t = n._disposeHandlers.indexOf(e);
                t >= 0 && n._disposeHandlers.splice(t, 1)
            },
            check: d,
            apply: p,
            status: function (e) {
                if (!e) return j;
                E.push(e)
            },
            addStatusHandler: function (e) {
                E.push(e)
            },
            removeStatusHandler: function (e) {
                var n = E.indexOf(e);
                n >= 0 && E.splice(n, 1)
            },
            data: O[e]
        };
        return y = void 0, n
    }

    function c(e) {
        j = e;
        for (var n = 0; n < E.length; n++) E[n].call(null, e)
    }

    function a(e) {
        return +e + "" === e ? +e : e
    }

    function d(e) {
        if ("idle" !== j) throw new Error("check() is only allowed in idle status");
        return m = e, c("check"), r(_).then(function (e) {
            if (!e) return c("idle"), null;
            I = {}, k = {}, A = e.c, b = e.h, c("prepare");
            var n = new Promise(function (e, n) {
                v = {resolve: e, reject: n}
            });
            w = {};
            return u(2), "prepare" === j && 0 === H && 0 === P && l(), n
        })
    }

    function s(e, n) {
        if (A[e] && I[e]) {
            I[e] = !1;
            for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (w[t] = n[t]);
            0 == --P && 0 === H && l()
        }
    }

    function u(e) {
        A[e] ? (I[e] = !0, P++, t(e)) : k[e] = !0
    }

    function l() {
        c("ready");
        var e = v;
        if (v = null, e) if (m) Promise.resolve().then(function () {
            return p(m)
        }).then(function (n) {
            e.resolve(n)
        }, function (n) {
            e.reject(n)
        }); else {
            var n = [];
            for (var t in w) Object.prototype.hasOwnProperty.call(w, t) && n.push(a(t));
            e.resolve(n)
        }
    }

    function p(t) {
        function r(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                e.indexOf(r) < 0 && e.push(r)
            }
        }

        if ("ready" !== j) throw new Error("apply() is only allowed in ready status");
        t = t || {};
        var o, i, d, s, u, l = {}, p = [], h = {}, y = function () {
            console.warn("[HMR] unexpected require(" + m.moduleId + ") to disposed module")
        };
        for (var v in w) if (Object.prototype.hasOwnProperty.call(w, v)) {
            u = a(v);
            var m;
            m = w[v] ? function (e) {
                for (var n = [e], t = {}, o = n.slice().map(function (e) {
                    return {chain: [e], id: e}
                }); o.length > 0;) {
                    var i = o.pop(), c = i.id, a = i.chain;
                    if ((s = M[c]) && !s.hot._selfAccepted) {
                        if (s.hot._selfDeclined) return {type: "self-declined", chain: a, moduleId: c};
                        if (s.hot._main) return {type: "unaccepted", chain: a, moduleId: c};
                        for (var d = 0; d < s.parents.length; d++) {
                            var u = s.parents[d], l = M[u];
                            if (l) {
                                if (l.hot._declinedDependencies[c]) return {
                                    type: "declined",
                                    chain: a.concat([u]),
                                    moduleId: c,
                                    parentId: u
                                };
                                n.indexOf(u) >= 0 || (l.hot._acceptedDependencies[c] ? (t[u] || (t[u] = []), r(t[u], [c])) : (delete t[u], n.push(u), o.push({
                                    chain: a.concat([u]),
                                    id: u
                                })))
                            }
                        }
                    }
                }
                return {type: "accepted", moduleId: e, outdatedModules: n, outdatedDependencies: t}
            }(u) : {type: "disposed", moduleId: v};
            var _ = !1, D = !1, E = !1, P = "";
            switch (m.chain && (P = "\nUpdate propagation: " + m.chain.join(" -> ")), m.type) {
                case"self-declined":
                    t.onDeclined && t.onDeclined(m), t.ignoreDeclined || (_ = new Error("Aborted because of self decline: " + m.moduleId + P));
                    break;
                case"declined":
                    t.onDeclined && t.onDeclined(m), t.ignoreDeclined || (_ = new Error("Aborted because of declined dependency: " + m.moduleId + " in " + m.parentId + P));
                    break;
                case"unaccepted":
                    t.onUnaccepted && t.onUnaccepted(m), t.ignoreUnaccepted || (_ = new Error("Aborted because " + u + " is not accepted" + P));
                    break;
                case"accepted":
                    t.onAccepted && t.onAccepted(m), D = !0;
                    break;
                case"disposed":
                    t.onDisposed && t.onDisposed(m), E = !0;
                    break;
                default:
                    throw new Error("Unexception type " + m.type)
            }
            if (_) return c("abort"), Promise.reject(_);
            if (D) {
                h[u] = w[u], r(p, m.outdatedModules);
                for (u in m.outdatedDependencies) Object.prototype.hasOwnProperty.call(m.outdatedDependencies, u) && (l[u] || (l[u] = []), r(l[u], m.outdatedDependencies[u]))
            }
            E && (r(p, [m.moduleId]), h[u] = y)
        }
        var H = [];
        for (i = 0; i < p.length; i++) u = p[i], M[u] && M[u].hot._selfAccepted && H.push({
            module: u,
            errorHandler: M[u].hot._selfAccepted
        });
        c("dispose"), Object.keys(A).forEach(function (e) {
            !1 === A[e] && n(e)
        });
        for (var k, I = p.slice(); I.length > 0;) if (u = I.pop(), s = M[u]) {
            var T = {}, S = s.hot._disposeHandlers;
            for (d = 0; d < S.length; d++) (o = S[d])(T);
            for (O[u] = T, s.hot.active = !1, delete M[u], delete l[u], d = 0; d < s.children.length; d++) {
                var U = M[s.children[d]];
                U && ((k = U.parents.indexOf(u)) >= 0 && U.parents.splice(k, 1))
            }
        }
        var q, R;
        for (u in l) if (Object.prototype.hasOwnProperty.call(l, u) && (s = M[u])) for (R = l[u], d = 0; d < R.length; d++) q = R[d], (k = s.children.indexOf(q)) >= 0 && s.children.splice(k, 1);
        c("apply"), g = b;
        for (u in h) Object.prototype.hasOwnProperty.call(h, u) && (e[u] = h[u]);
        var N = null;
        for (u in l) if (Object.prototype.hasOwnProperty.call(l, u) && (s = M[u])) {
            R = l[u];
            var C = [];
            for (i = 0; i < R.length; i++) if (q = R[i], o = s.hot._acceptedDependencies[q]) {
                if (C.indexOf(o) >= 0) continue;
                C.push(o)
            }
            for (i = 0; i < C.length; i++) {
                o = C[i];
                try {
                    o(R)
                } catch (e) {
                    t.onErrored && t.onErrored({
                        type: "accept-errored",
                        moduleId: u,
                        dependencyId: R[i],
                        error: e
                    }), t.ignoreErrored || N || (N = e)
                }
            }
        }
        for (i = 0; i < H.length; i++) {
            var G = H[i];
            u = G.module, x = [u];
            try {
                f(u)
            } catch (e) {
                if ("function" == typeof G.errorHandler) try {
                    G.errorHandler(e)
                } catch (n) {
                    t.onErrored && t.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: u,
                        error: n,
                        orginalError: e,
                        originalError: e
                    }), t.ignoreErrored || N || (N = n), N || (N = e)
                } else t.onErrored && t.onErrored({
                    type: "self-accept-errored",
                    moduleId: u,
                    error: e
                }), t.ignoreErrored || N || (N = e)
            }
        }
        return N ? (c("fail"), Promise.reject(N)) : (c("idle"), new Promise(function (e) {
            e(p)
        }))
    }

    function f(n) {
        if (M[n]) return M[n].exports;
        var t = M[n] = {i: n, l: !1, exports: {}, hot: i(n), parents: (D = x, x = [], D), children: []};
        return e[n].call(t.exports, t, t.exports, o(n)), t.l = !0, t.exports
    }

    var h = window.webpackHotUpdate;
    window.webpackHotUpdate = function (e, n) {
        s(e, n), h && h(e, n)
    };
    var y, v, w, b, m = !0, g = "7cdcc636688b946399f2", _ = 1e4, O = {}, x = [], D = [], E = [], j = "idle", P = 0,
        H = 0, k = {}, I = {}, A = {}, M = {};
    f.m = e, f.c = M, f.d = function (e, n, t) {
        f.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: t})
    }, f.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return f.d(n, "a", n), n
    }, f.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, f.p = "", f.h = function () {
        return g
    }, o(1)(f.s = 1)
}({
    "./src/ts/index.ts": function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), t.d(n, "Test", function () {
            return i
        });
        var r = this && this.__awaiter || function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
                function c(e) {
                    try {
                        d(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        d(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function d(e) {
                    e.done ? o(e.value) : new t(function (n) {
                        n(e.value)
                    }).then(c, a)
                }

                d((r = r.apply(e, n || [])).next())
            })
        }, o = this && this.__generator || function (e, n) {
            function t(e) {
                return function (n) {
                    return r([e, n])
                }
            }

            function r(t) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d;) try {
                    if (o = 1, i && (c = i[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(c = c.call(i, t[1])).done) return c;
                    switch (i = 0, c && (t = [0, c.value]), t[0]) {
                        case 0:
                        case 1:
                            c = t;
                            break;
                        case 4:
                            return d.label++, {value: t[1], done: !1};
                        case 5:
                            d.label++, i = t[1], t = [0];
                            continue;
                        case 7:
                            t = d.ops.pop(), d.trys.pop();
                            continue;
                        default:
                            if (c = d.trys, !(c = c.length > 0 && c[c.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                d = 0;
                                continue
                            }
                            if (3 === t[0] && (!c || t[1] > c[0] && t[1] < c[3])) {
                                d.label = t[1];
                                break
                            }
                            if (6 === t[0] && d.label < c[1]) {
                                d.label = c[1], c = t;
                                break
                            }
                            if (c && d.label < c[2]) {
                                d.label = c[2], d.ops.push(t);
                                break
                            }
                            c[2] && d.ops.pop(), d.trys.pop();
                            continue
                    }
                    t = n.call(e, d)
                } catch (e) {
                    t = [6, e], i = 0
                } finally {
                    o = c = 0
                }
                if (5 & t[0]) throw t[1];
                return {value: t[0] ? t[1] : void 0, done: !0}
            }

            var o, i, c, a, d = {
                label: 0, sent: function () {
                    if (1 & c[0]) throw c[1];
                    return c[1]
                }, trys: [], ops: []
            };
            return a = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a
        }, i = function () {
            function e() {
                this.model = {foo: "sdsdsd", bar: 123}, console.log("ts go")
            }

            return e.prototype.getModel = function () {
                return this.model
            }, e.prototype.p = function () {
                return new Promise(function (e, n) {
                    setTimeout(function () {
                        e("async TS")
                    }, 1e3)
                })
            }, e.prototype.getTest = function () {
                return r(this, void 0, void 0, function () {
                    var e;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.p()];
                            case 1:
                                return e = n.sent(), console.log(e), [2]
                        }
                    })
                })
            }, e
        }();
        (new i).getTest()
    }, 1: function (e, n, t) {
        e.exports = t("./src/ts/index.ts")
    }
});