var Dh = e => {
    throw TypeError(e)
}
;
var ql = (e, t, n) => t.has(e) || Dh("Cannot " + n);
var A = (e, t, n) => (ql(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? Dh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (ql(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Oe = (e, t, n) => (ql(e, t, "access private method"),
n);
var bi = (e, t, n, r) => ({
    set _(s) {
        H(e, t, s, n)
    },
    get _() {
        return A(e, t, r)
    }
});
function SS(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, s);
                    o && Object.defineProperty(e, s, o.get ? o : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
}
)();
function ly(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var uy = {
    exports: {}
}
  , al = {}
  , cy = {
    exports: {}
}
  , q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li = Symbol.for("react.element")
  , CS = Symbol.for("react.portal")
  , bS = Symbol.for("react.fragment")
  , ES = Symbol.for("react.strict_mode")
  , TS = Symbol.for("react.profiler")
  , PS = Symbol.for("react.provider")
  , kS = Symbol.for("react.context")
  , AS = Symbol.for("react.forward_ref")
  , NS = Symbol.for("react.suspense")
  , RS = Symbol.for("react.memo")
  , jS = Symbol.for("react.lazy")
  , Lh = Symbol.iterator;
function MS(e) {
    return e === null || typeof e != "object" ? null : (e = Lh && e[Lh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var dy = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , fy = Object.assign
  , hy = {};
function Hs(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = hy,
    this.updater = n || dy
}
Hs.prototype.isReactComponent = {};
Hs.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Hs.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function py() {}
py.prototype = Hs.prototype;
function Rd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = hy,
    this.updater = n || dy
}
var jd = Rd.prototype = new py;
jd.constructor = Rd;
fy(jd, Hs.prototype);
jd.isPureReactComponent = !0;
var Oh = Array.isArray
  , my = Object.prototype.hasOwnProperty
  , Md = {
    current: null
}
  , gy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function yy(e, t, n) {
    var r, s = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            my.call(t, r) && !gy.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            s[r] === void 0 && (s[r] = a[r]);
    return {
        $$typeof: li,
        type: e,
        key: o,
        ref: i,
        props: s,
        _owner: Md.current
    }
}
function DS(e, t) {
    return {
        $$typeof: li,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Dd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === li
}
function LS(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ih = /\/+/g;
function Xl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? LS("" + e.key) : t.toString(36)
}
function Zi(e, t, n, r, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case li:
            case CS:
                i = !0
            }
        }
    if (i)
        return i = e,
        s = s(i),
        e = r === "" ? "." + Xl(i, 0) : r,
        Oh(s) ? (n = "",
        e != null && (n = e.replace(Ih, "$&/") + "/"),
        Zi(s, t, n, "", function(u) {
            return u
        })) : s != null && (Dd(s) && (s = DS(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(Ih, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Oh(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + Xl(o, a);
            i += Zi(o, t, n, l, s)
        }
    else if (l = MS(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + Xl(o, a++),
            i += Zi(o, t, n, l, s);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Ei(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return Zi(e, r, "", "", function(o) {
        return t.call(n, o, s++)
    }),
    r
}
function OS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ye = {
    current: null
}
  , Ji = {
    transition: null
}
  , IS = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: Ji,
    ReactCurrentOwner: Md
};
function vy() {
    throw Error("act(...) is not supported in production builds of React.")
}
q.Children = {
    map: Ei,
    forEach: function(e, t, n) {
        Ei(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ei(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ei(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Dd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
q.Component = Hs;
q.Fragment = bS;
q.Profiler = TS;
q.PureComponent = Rd;
q.StrictMode = ES;
q.Suspense = NS;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IS;
q.act = vy;
q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = fy({}, e.props)
      , s = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = Md.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            my.call(t, l) && !gy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: li,
        type: e.type,
        key: s,
        ref: o,
        props: r,
        _owner: i
    }
}
;
q.createContext = function(e) {
    return e = {
        $$typeof: kS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: PS,
        _context: e
    },
    e.Consumer = e
}
;
q.createElement = yy;
q.createFactory = function(e) {
    var t = yy.bind(null, e);
    return t.type = e,
    t
}
;
q.createRef = function() {
    return {
        current: null
    }
}
;
q.forwardRef = function(e) {
    return {
        $$typeof: AS,
        render: e
    }
}
;
q.isValidElement = Dd;
q.lazy = function(e) {
    return {
        $$typeof: jS,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: OS
    }
}
;
q.memo = function(e, t) {
    return {
        $$typeof: RS,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
q.startTransition = function(e) {
    var t = Ji.transition;
    Ji.transition = {};
    try {
        e()
    } finally {
        Ji.transition = t
    }
}
;
q.unstable_act = vy;
q.useCallback = function(e, t) {
    return Ye.current.useCallback(e, t)
}
;
q.useContext = function(e) {
    return Ye.current.useContext(e)
}
;
q.useDebugValue = function() {}
;
q.useDeferredValue = function(e) {
    return Ye.current.useDeferredValue(e)
}
;
q.useEffect = function(e, t) {
    return Ye.current.useEffect(e, t)
}
;
q.useId = function() {
    return Ye.current.useId()
}
;
q.useImperativeHandle = function(e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n)
}
;
q.useInsertionEffect = function(e, t) {
    return Ye.current.useInsertionEffect(e, t)
}
;
q.useLayoutEffect = function(e, t) {
    return Ye.current.useLayoutEffect(e, t)
}
;
q.useMemo = function(e, t) {
    return Ye.current.useMemo(e, t)
}
;
q.useReducer = function(e, t, n) {
    return Ye.current.useReducer(e, t, n)
}
;
q.useRef = function(e) {
    return Ye.current.useRef(e)
}
;
q.useState = function(e) {
    return Ye.current.useState(e)
}
;
q.useSyncExternalStore = function(e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n)
}
;
q.useTransition = function() {
    return Ye.current.useTransition()
}
;
q.version = "18.3.1";
cy.exports = q;
var S = cy.exports;
const M = ly(S)
  , Ld = SS({
    __proto__: null,
    default: M
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FS = S
  , _S = Symbol.for("react.element")
  , VS = Symbol.for("react.fragment")
  , zS = Object.prototype.hasOwnProperty
  , $S = FS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , BS = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function xy(e, t, n) {
    var r, s = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        zS.call(t, r) && !BS.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: _S,
        type: e,
        key: o,
        ref: i,
        props: s,
        _owner: $S.current
    }
}
al.Fragment = VS;
al.jsx = xy;
al.jsxs = xy;
uy.exports = al;
var p = uy.exports
  , wy = {
    exports: {}
}
  , dt = {}
  , Sy = {
    exports: {}
}
  , Cy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, N) {
        var O = k.length;
        k.push(N);
        e: for (; 0 < O; ) {
            var U = O - 1 >>> 1
              , $ = k[U];
            if (0 < s($, N))
                k[U] = N,
                k[O] = $,
                O = U;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var N = k[0]
          , O = k.pop();
        if (O !== N) {
            k[0] = O;
            e: for (var U = 0, $ = k.length, Q = $ >>> 1; U < Q; ) {
                var X = 2 * (U + 1) - 1
                  , we = k[X]
                  , Le = X + 1
                  , te = k[Le];
                if (0 > s(we, O))
                    Le < $ && 0 > s(te, we) ? (k[U] = te,
                    k[Le] = O,
                    U = Le) : (k[U] = we,
                    k[X] = O,
                    U = X);
                else if (Le < $ && 0 > s(te, O))
                    k[U] = te,
                    k[Le] = O,
                    U = Le;
                else
                    break e
            }
        }
        return N
    }
    function s(k, N) {
        var O = k.sortIndex - N.sortIndex;
        return O !== 0 ? O : k.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , x = !1
      , y = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(k) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= k)
                r(u),
                N.sortIndex = N.expirationTime,
                t(l, N);
            else
                break;
            N = n(u)
        }
    }
    function C(k) {
        if (y = !1,
        v(k),
        !x)
            if (n(l) !== null)
                x = !0,
                B(b);
            else {
                var N = n(u);
                N !== null && V(C, N.startTime - k)
            }
    }
    function b(k, N) {
        x = !1,
        y && (y = !1,
        g(P),
        P = -1),
        h = !0;
        var O = f;
        try {
            for (v(N),
            d = n(l); d !== null && (!(d.expirationTime > N) || k && !z()); ) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var $ = U(d.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof $ == "function" ? d.callback = $ : d === n(l) && r(l),
                    v(N)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Q = !0;
            else {
                var X = n(u);
                X !== null && V(C, X.startTime - N),
                Q = !1
            }
            return Q
        } finally {
            d = null,
            f = O,
            h = !1
        }
    }
    var E = !1
      , T = null
      , P = -1
      , R = 5
      , j = -1;
    function z() {
        return !(e.unstable_now() - j < R)
    }
    function I() {
        if (T !== null) {
            var k = e.unstable_now();
            j = k;
            var N = !0;
            try {
                N = T(!0, k)
            } finally {
                N ? K() : (E = !1,
                T = null)
            }
        } else
            E = !1
    }
    var K;
    if (typeof m == "function")
        K = function() {
            m(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , Y = L.port2;
        L.port1.onmessage = I,
        K = function() {
            Y.postMessage(null)
        }
    } else
        K = function() {
            w(I, 0)
        }
        ;
    function B(k) {
        T = k,
        E || (E = !0,
        K())
    }
    function V(k, N) {
        P = w(function() {
            k(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || h || (x = !0,
        B(b))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = f
        }
        var O = f;
        f = N;
        try {
            return k()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, N) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var O = f;
        f = k;
        try {
            return N()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, N, O) {
        var U = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? U + O : U) : O = U,
        k) {
        case 1:
            var $ = -1;
            break;
        case 2:
            $ = 250;
            break;
        case 5:
            $ = 1073741823;
            break;
        case 4:
            $ = 1e4;
            break;
        default:
            $ = 5e3
        }
        return $ = O + $,
        k = {
            id: c++,
            callback: N,
            priorityLevel: k,
            startTime: O,
            expirationTime: $,
            sortIndex: -1
        },
        O > U ? (k.sortIndex = O,
        t(u, k),
        n(l) === null && k === n(u) && (y ? (g(P),
        P = -1) : y = !0,
        V(C, O - U))) : (k.sortIndex = $,
        t(l, k),
        x || h || (x = !0,
        B(b))),
        k
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(k) {
        var N = f;
        return function() {
            var O = f;
            f = N;
            try {
                return k.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
}
)(Cy);
Sy.exports = Cy;
var US = Sy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WS = S
  , ut = US;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var by = new Set
  , Oo = {};
function Ur(e, t) {
    Os(e, t),
    Os(e + "Capture", t)
}
function Os(e, t) {
    for (Oo[e] = t,
    e = 0; e < t.length; e++)
        by.add(t[e])
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Yu = Object.prototype.hasOwnProperty
  , HS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Fh = {}
  , _h = {};
function KS(e) {
    return Yu.call(_h, e) ? !0 : Yu.call(Fh, e) ? !1 : HS.test(e) ? _h[e] = !0 : (Fh[e] = !0,
    !1)
}
function GS(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function YS(e, t, n, r) {
    if (t === null || typeof t > "u" || GS(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Qe(e, t, n, r, s, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Qe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Qe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Qe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Qe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Qe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Qe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Od = /[\-:]([a-z])/g;
function Id(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Od, Id);
    De[t] = new Qe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Od, Id);
    De[t] = new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Od, Id);
    De[t] = new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Fd(e, t, n, r) {
    var s = De.hasOwnProperty(t) ? De[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (YS(t, n, s, r) && (n = null),
    r || s === null ? KS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Cn = WS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ti = Symbol.for("react.element")
  , es = Symbol.for("react.portal")
  , ts = Symbol.for("react.fragment")
  , _d = Symbol.for("react.strict_mode")
  , Qu = Symbol.for("react.profiler")
  , Ey = Symbol.for("react.provider")
  , Ty = Symbol.for("react.context")
  , Vd = Symbol.for("react.forward_ref")
  , qu = Symbol.for("react.suspense")
  , Xu = Symbol.for("react.suspense_list")
  , zd = Symbol.for("react.memo")
  , On = Symbol.for("react.lazy")
  , Py = Symbol.for("react.offscreen")
  , Vh = Symbol.iterator;
function ro(e) {
    return e === null || typeof e != "object" ? null : (e = Vh && e[Vh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pe = Object.assign, Zl;
function mo(e) {
    if (Zl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Zl = t && t[1] || ""
        }
    return `
` + Zl + e
}
var Jl = !1;
function eu(e, t) {
    if (!e || Jl)
        return "";
    Jl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, a = o.length - 1; 1 <= i && 0 <= a && s[i] !== o[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (s[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || s[i] !== o[a]) {
                                var l = `
` + s[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Jl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? mo(e) : ""
}
function QS(e) {
    switch (e.tag) {
    case 5:
        return mo(e.type);
    case 16:
        return mo("Lazy");
    case 13:
        return mo("Suspense");
    case 19:
        return mo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = eu(e.type, !1),
        e;
    case 11:
        return e = eu(e.type.render, !1),
        e;
    case 1:
        return e = eu(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ts:
        return "Fragment";
    case es:
        return "Portal";
    case Qu:
        return "Profiler";
    case _d:
        return "StrictMode";
    case qu:
        return "Suspense";
    case Xu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ty:
            return (e.displayName || "Context") + ".Consumer";
        case Ey:
            return (e._context.displayName || "Context") + ".Provider";
        case Vd:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case zd:
            return t = e.displayName || null,
            t !== null ? t : Zu(e.type) || "Memo";
        case On:
            t = e._payload,
            e = e._init;
            try {
                return Zu(e(t))
            } catch {}
        }
    return null
}
function qS(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zu(t);
    case 8:
        return t === _d ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function rr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ky(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function XS(e) {
    var t = ky(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Pi(e) {
    e._valueTracker || (e._valueTracker = XS(e))
}
function Ay(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ky(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function xa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ju(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function zh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = rr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ny(e, t) {
    t = t.checked,
    t != null && Fd(e, "checked", t, !1)
}
function ec(e, t) {
    Ny(e, t);
    var n = rr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? tc(e, t.type, n) : t.hasOwnProperty("defaultValue") && tc(e, t.type, rr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function $h(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function tc(e, t, n) {
    (t !== "number" || xa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var go = Array.isArray;
function ys(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rr(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function nc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Bh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (go(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: rr(n)
    }
}
function Ry(e, t) {
    var n = rr(t.value)
      , r = rr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Uh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function jy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function rc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? jy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ki, My = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ki = ki || document.createElement("div"),
        ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ki.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Io(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , ZS = ["Webkit", "ms", "Moz", "O"];
Object.keys(wo).forEach(function(e) {
    ZS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        wo[t] = wo[e]
    })
});
function Dy(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wo.hasOwnProperty(e) && wo[e] ? ("" + t).trim() : t + "px"
}
function Ly(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = Dy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var JS = pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function sc(e, t) {
    if (t) {
        if (JS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function oc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ic = null;
function $d(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ac = null
  , vs = null
  , xs = null;
function Wh(e) {
    if (e = di(e)) {
        if (typeof ac != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = fl(t),
        ac(e.stateNode, e.type, t))
    }
}
function Oy(e) {
    vs ? xs ? xs.push(e) : xs = [e] : vs = e
}
function Iy() {
    if (vs) {
        var e = vs
          , t = xs;
        if (xs = vs = null,
        Wh(e),
        t)
            for (e = 0; e < t.length; e++)
                Wh(t[e])
    }
}
function Fy(e, t) {
    return e(t)
}
function _y() {}
var tu = !1;
function Vy(e, t, n) {
    if (tu)
        return e(t, n);
    tu = !0;
    try {
        return Fy(e, t, n)
    } finally {
        tu = !1,
        (vs !== null || xs !== null) && (_y(),
        Iy())
    }
}
function Fo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = fl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var lc = !1;
if (mn)
    try {
        var so = {};
        Object.defineProperty(so, "passive", {
            get: function() {
                lc = !0
            }
        }),
        window.addEventListener("test", so, so),
        window.removeEventListener("test", so, so)
    } catch {
        lc = !1
    }
function eC(e, t, n, r, s, o, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var So = !1
  , wa = null
  , Sa = !1
  , uc = null
  , tC = {
    onError: function(e) {
        So = !0,
        wa = e
    }
};
function nC(e, t, n, r, s, o, i, a, l) {
    So = !1,
    wa = null,
    eC.apply(tC, arguments)
}
function rC(e, t, n, r, s, o, i, a, l) {
    if (nC.apply(this, arguments),
    So) {
        if (So) {
            var u = wa;
            So = !1,
            wa = null
        } else
            throw Error(D(198));
        Sa || (Sa = !0,
        uc = u)
    }
}
function Wr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function zy(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Hh(e) {
    if (Wr(e) !== e)
        throw Error(D(188))
}
function sC(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Wr(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var o = s.alternate;
        if (o === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === o.child) {
            for (o = s.child; o; ) {
                if (o === n)
                    return Hh(s),
                    e;
                if (o === r)
                    return Hh(s),
                    t;
                o = o.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = s,
            r = o;
        else {
            for (var i = !1, a = s.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = s,
                    r = o;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = s,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = o,
                        r = s;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = o,
                        n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function $y(e) {
    return e = sC(e),
    e !== null ? By(e) : null
}
function By(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = By(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Uy = ut.unstable_scheduleCallback
  , Kh = ut.unstable_cancelCallback
  , oC = ut.unstable_shouldYield
  , iC = ut.unstable_requestPaint
  , ve = ut.unstable_now
  , aC = ut.unstable_getCurrentPriorityLevel
  , Bd = ut.unstable_ImmediatePriority
  , Wy = ut.unstable_UserBlockingPriority
  , Ca = ut.unstable_NormalPriority
  , lC = ut.unstable_LowPriority
  , Hy = ut.unstable_IdlePriority
  , ll = null
  , Jt = null;
function uC(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
            Jt.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var It = Math.clz32 ? Math.clz32 : fC
  , cC = Math.log
  , dC = Math.LN2;
function fC(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (cC(e) / dC | 0) | 0
}
var Ai = 64
  , Ni = 4194304;
function yo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ba(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~s;
        a !== 0 ? r = yo(a) : (o &= i,
        o !== 0 && (r = yo(o)))
    } else
        i = n & ~s,
        i !== 0 ? r = yo(i) : o !== 0 && (r = yo(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    o = t & -t,
    s >= o || s === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - It(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function hC(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function pC(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - It(o)
          , a = 1 << i
          , l = s[i];
        l === -1 ? (!(a & n) || a & r) && (s[i] = hC(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function cc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ky() {
    var e = Ai;
    return Ai <<= 1,
    !(Ai & 4194240) && (Ai = 64),
    e
}
function nu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ui(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - It(t),
    e[t] = n
}
function mC(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - It(n)
          , o = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~o
    }
}
function Ud(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - It(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var ne = 0;
function Gy(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Yy, Wd, Qy, qy, Xy, dc = !1, Ri = [], Qn = null, qn = null, Xn = null, _o = new Map, Vo = new Map, Fn = [], gC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Qn = null;
        break;
    case "dragenter":
    case "dragleave":
        qn = null;
        break;
    case "mouseover":
    case "mouseout":
        Xn = null;
        break;
    case "pointerover":
    case "pointerout":
        _o.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Vo.delete(t.pointerId)
    }
}
function oo(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s]
    },
    t !== null && (t = di(t),
    t !== null && Wd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function yC(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return Qn = oo(Qn, e, t, n, r, s),
        !0;
    case "dragenter":
        return qn = oo(qn, e, t, n, r, s),
        !0;
    case "mouseover":
        return Xn = oo(Xn, e, t, n, r, s),
        !0;
    case "pointerover":
        var o = s.pointerId;
        return _o.set(o, oo(_o.get(o) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return o = s.pointerId,
        Vo.set(o, oo(Vo.get(o) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function Zy(e) {
    var t = Cr(e.target);
    if (t !== null) {
        var n = Wr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = zy(n),
                t !== null) {
                    e.blockedOn = t,
                    Xy(e.priority, function() {
                        Qy(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ea(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ic = r,
            n.target.dispatchEvent(r),
            ic = null
        } else
            return t = di(n),
            t !== null && Wd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Yh(e, t, n) {
    ea(e) && n.delete(t)
}
function vC() {
    dc = !1,
    Qn !== null && ea(Qn) && (Qn = null),
    qn !== null && ea(qn) && (qn = null),
    Xn !== null && ea(Xn) && (Xn = null),
    _o.forEach(Yh),
    Vo.forEach(Yh)
}
function io(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    dc || (dc = !0,
    ut.unstable_scheduleCallback(ut.unstable_NormalPriority, vC)))
}
function zo(e) {
    function t(s) {
        return io(s, e)
    }
    if (0 < Ri.length) {
        io(Ri[0], e);
        for (var n = 1; n < Ri.length; n++) {
            var r = Ri[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Qn !== null && io(Qn, e),
    qn !== null && io(qn, e),
    Xn !== null && io(Xn, e),
    _o.forEach(t),
    Vo.forEach(t),
    n = 0; n < Fn.length; n++)
        r = Fn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Fn.length && (n = Fn[0],
    n.blockedOn === null); )
        Zy(n),
        n.blockedOn === null && Fn.shift()
}
var ws = Cn.ReactCurrentBatchConfig
  , Ea = !0;
function xC(e, t, n, r) {
    var s = ne
      , o = ws.transition;
    ws.transition = null;
    try {
        ne = 1,
        Hd(e, t, n, r)
    } finally {
        ne = s,
        ws.transition = o
    }
}
function wC(e, t, n, r) {
    var s = ne
      , o = ws.transition;
    ws.transition = null;
    try {
        ne = 4,
        Hd(e, t, n, r)
    } finally {
        ne = s,
        ws.transition = o
    }
}
function Hd(e, t, n, r) {
    if (Ea) {
        var s = fc(e, t, n, r);
        if (s === null)
            fu(e, t, r, Ta, n),
            Gh(e, r);
        else if (yC(s, e, t, n, r))
            r.stopPropagation();
        else if (Gh(e, r),
        t & 4 && -1 < gC.indexOf(e)) {
            for (; s !== null; ) {
                var o = di(s);
                if (o !== null && Yy(o),
                o = fc(e, t, n, r),
                o === null && fu(e, t, r, Ta, n),
                o === s)
                    break;
                s = o
            }
            s !== null && r.stopPropagation()
        } else
            fu(e, t, r, null, n)
    }
}
var Ta = null;
function fc(e, t, n, r) {
    if (Ta = null,
    e = $d(r),
    e = Cr(e),
    e !== null)
        if (t = Wr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = zy(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ta = e,
    null
}
function Jy(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (aC()) {
        case Bd:
            return 1;
        case Wy:
            return 4;
        case Ca:
        case lC:
            return 16;
        case Hy:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Wn = null
  , Kd = null
  , ta = null;
function ev() {
    if (ta)
        return ta;
    var e, t = Kd, n = t.length, r, s = "value"in Wn ? Wn.value : Wn.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === s[o - r]; r++)
        ;
    return ta = s.slice(e, 1 < r ? 1 - r : void 0)
}
function na(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ji() {
    return !0
}
function Qh() {
    return !1
}
function ft(e) {
    function t(n, r, s, o, i) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ji : Qh,
        this.isPropagationStopped = Qh,
        this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ji)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ji)
        },
        persist: function() {},
        isPersistent: ji
    }),
    t
}
var Ks = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Gd = ft(Ks), ci = pe({}, Ks, {
    view: 0,
    detail: 0
}), SC = ft(ci), ru, su, ao, ul = pe({}, ci, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ao && (ao && e.type === "mousemove" ? (ru = e.screenX - ao.screenX,
        su = e.screenY - ao.screenY) : su = ru = 0,
        ao = e),
        ru)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : su
    }
}), qh = ft(ul), CC = pe({}, ul, {
    dataTransfer: 0
}), bC = ft(CC), EC = pe({}, ci, {
    relatedTarget: 0
}), ou = ft(EC), TC = pe({}, Ks, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), PC = ft(TC), kC = pe({}, Ks, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), AC = ft(kC), NC = pe({}, Ks, {
    data: 0
}), Xh = ft(NC), RC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, jC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, MC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function DC(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = MC[e]) ? !!t[e] : !1
}
function Yd() {
    return DC
}
var LC = pe({}, ci, {
    key: function(e) {
        if (e.key) {
            var t = RC[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = na(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jC[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yd,
    charCode: function(e) {
        return e.type === "keypress" ? na(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? na(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , OC = ft(LC)
  , IC = pe({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Zh = ft(IC)
  , FC = pe({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yd
})
  , _C = ft(FC)
  , VC = pe({}, Ks, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , zC = ft(VC)
  , $C = pe({}, ul, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , BC = ft($C)
  , UC = [9, 13, 27, 32]
  , Qd = mn && "CompositionEvent"in window
  , Co = null;
mn && "documentMode"in document && (Co = document.documentMode);
var WC = mn && "TextEvent"in window && !Co
  , tv = mn && (!Qd || Co && 8 < Co && 11 >= Co)
  , Jh = " "
  , ep = !1;
function nv(e, t) {
    switch (e) {
    case "keyup":
        return UC.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function rv(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ns = !1;
function HC(e, t) {
    switch (e) {
    case "compositionend":
        return rv(t);
    case "keypress":
        return t.which !== 32 ? null : (ep = !0,
        Jh);
    case "textInput":
        return e = t.data,
        e === Jh && ep ? null : e;
    default:
        return null
    }
}
function KC(e, t) {
    if (ns)
        return e === "compositionend" || !Qd && nv(e, t) ? (e = ev(),
        ta = Kd = Wn = null,
        ns = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return tv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var GC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function tp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!GC[e.type] : t === "textarea"
}
function sv(e, t, n, r) {
    Oy(r),
    t = Pa(t, "onChange"),
    0 < t.length && (n = new Gd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var bo = null
  , $o = null;
function YC(e) {
    mv(e, 0)
}
function cl(e) {
    var t = os(e);
    if (Ay(t))
        return e
}
function QC(e, t) {
    if (e === "change")
        return t
}
var ov = !1;
if (mn) {
    var iu;
    if (mn) {
        var au = "oninput"in document;
        if (!au) {
            var np = document.createElement("div");
            np.setAttribute("oninput", "return;"),
            au = typeof np.oninput == "function"
        }
        iu = au
    } else
        iu = !1;
    ov = iu && (!document.documentMode || 9 < document.documentMode)
}
function rp() {
    bo && (bo.detachEvent("onpropertychange", iv),
    $o = bo = null)
}
function iv(e) {
    if (e.propertyName === "value" && cl($o)) {
        var t = [];
        sv(t, $o, e, $d(e)),
        Vy(YC, t)
    }
}
function qC(e, t, n) {
    e === "focusin" ? (rp(),
    bo = t,
    $o = n,
    bo.attachEvent("onpropertychange", iv)) : e === "focusout" && rp()
}
function XC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return cl($o)
}
function ZC(e, t) {
    if (e === "click")
        return cl(t)
}
function JC(e, t) {
    if (e === "input" || e === "change")
        return cl(t)
}
function eb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Vt = typeof Object.is == "function" ? Object.is : eb;
function Bo(e, t) {
    if (Vt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!Yu.call(t, s) || !Vt(e[s], t[s]))
            return !1
    }
    return !0
}
function sp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function op(e, t) {
    var n = sp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = sp(n)
    }
}
function av(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? av(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function lv() {
    for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = xa(e.document)
    }
    return t
}
function qd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function tb(e) {
    var t = lv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && av(n.ownerDocument.documentElement, n)) {
        if (r !== null && qd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , o = Math.min(r.start, s);
                r = r.end === void 0 ? o : Math.min(r.end, s),
                !e.extend && o > r && (s = r,
                r = o,
                o = s),
                s = op(n, o);
                var i = op(n, r);
                s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var nb = mn && "documentMode"in document && 11 >= document.documentMode
  , rs = null
  , hc = null
  , Eo = null
  , pc = !1;
function ip(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pc || rs == null || rs !== xa(r) || (r = rs,
    "selectionStart"in r && qd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Eo && Bo(Eo, r) || (Eo = r,
    r = Pa(hc, "onSelect"),
    0 < r.length && (t = new Gd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = rs)))
}
function Mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ss = {
    animationend: Mi("Animation", "AnimationEnd"),
    animationiteration: Mi("Animation", "AnimationIteration"),
    animationstart: Mi("Animation", "AnimationStart"),
    transitionend: Mi("Transition", "TransitionEnd")
}
  , lu = {}
  , uv = {};
mn && (uv = document.createElement("div").style,
"AnimationEvent"in window || (delete ss.animationend.animation,
delete ss.animationiteration.animation,
delete ss.animationstart.animation),
"TransitionEvent"in window || delete ss.transitionend.transition);
function dl(e) {
    if (lu[e])
        return lu[e];
    if (!ss[e])
        return e;
    var t = ss[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in uv)
            return lu[e] = t[n];
    return e
}
var cv = dl("animationend")
  , dv = dl("animationiteration")
  , fv = dl("animationstart")
  , hv = dl("transitionend")
  , pv = new Map
  , ap = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dr(e, t) {
    pv.set(e, t),
    Ur(t, [e])
}
for (var uu = 0; uu < ap.length; uu++) {
    var cu = ap[uu]
      , rb = cu.toLowerCase()
      , sb = cu[0].toUpperCase() + cu.slice(1);
    dr(rb, "on" + sb)
}
dr(cv, "onAnimationEnd");
dr(dv, "onAnimationIteration");
dr(fv, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(hv, "onTransitionEnd");
Os("onMouseEnter", ["mouseout", "mouseover"]);
Os("onMouseLeave", ["mouseout", "mouseover"]);
Os("onPointerEnter", ["pointerout", "pointerover"]);
Os("onPointerLeave", ["pointerout", "pointerover"]);
Ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ob = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
function lp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    rC(r, t, void 0, e),
    e.currentTarget = null
}
function mv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== o && s.isPropagationStopped())
                        break e;
                    lp(s, a, u),
                    o = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== o && s.isPropagationStopped())
                        break e;
                    lp(s, a, u),
                    o = l
                }
        }
    }
    if (Sa)
        throw e = uc,
        Sa = !1,
        uc = null,
        e
}
function ie(e, t) {
    var n = t[xc];
    n === void 0 && (n = t[xc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (gv(t, e, 2, !1),
    n.add(r))
}
function du(e, t, n) {
    var r = 0;
    t && (r |= 4),
    gv(n, e, r, t)
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
    if (!e[Di]) {
        e[Di] = !0,
        by.forEach(function(n) {
            n !== "selectionchange" && (ob.has(n) || du(n, !1, e),
            du(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Di] || (t[Di] = !0,
        du("selectionchange", !1, t))
    }
}
function gv(e, t, n, r) {
    switch (Jy(t)) {
    case 1:
        var s = xC;
        break;
    case 4:
        s = wC;
        break;
    default:
        s = Hd
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function fu(e, t, n, r, s) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = Cr(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = o = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Vy(function() {
        var u = o
          , c = $d(n)
          , d = [];
        e: {
            var f = pv.get(e);
            if (f !== void 0) {
                var h = Gd
                  , x = e;
                switch (e) {
                case "keypress":
                    if (na(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = OC;
                    break;
                case "focusin":
                    x = "focus",
                    h = ou;
                    break;
                case "focusout":
                    x = "blur",
                    h = ou;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = ou;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = qh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = bC;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = _C;
                    break;
                case cv:
                case dv:
                case fv:
                    h = PC;
                    break;
                case hv:
                    h = zC;
                    break;
                case "scroll":
                    h = SC;
                    break;
                case "wheel":
                    h = BC;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = AC;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Zh
                }
                var y = (t & 4) !== 0
                  , w = !y && e === "scroll"
                  , g = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var m = u, v; m !== null; ) {
                    v = m;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C,
                    g !== null && (C = Fo(m, g),
                    C != null && y.push(Wo(m, C, v)))),
                    w)
                        break;
                    m = m.return
                }
                0 < y.length && (f = new h(f,x,null,n,c),
                d.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== ic && (x = n.relatedTarget || n.fromElement) && (Cr(x) || x[gn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (x = n.relatedTarget || n.toElement,
                h = u,
                x = x ? Cr(x) : null,
                x !== null && (w = Wr(x),
                x !== w || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null,
                x = u),
                h !== x)) {
                    if (y = qh,
                    C = "onMouseLeave",
                    g = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Zh,
                    C = "onPointerLeave",
                    g = "onPointerEnter",
                    m = "pointer"),
                    w = h == null ? f : os(h),
                    v = x == null ? f : os(x),
                    f = new y(C,m + "leave",h,n,c),
                    f.target = w,
                    f.relatedTarget = v,
                    C = null,
                    Cr(c) === u && (y = new y(g,m + "enter",x,n,c),
                    y.target = v,
                    y.relatedTarget = w,
                    C = y),
                    w = C,
                    h && x)
                        t: {
                            for (y = h,
                            g = x,
                            m = 0,
                            v = y; v; v = Xr(v))
                                m++;
                            for (v = 0,
                            C = g; C; C = Xr(C))
                                v++;
                            for (; 0 < m - v; )
                                y = Xr(y),
                                m--;
                            for (; 0 < v - m; )
                                g = Xr(g),
                                v--;
                            for (; m--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = Xr(y),
                                g = Xr(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    h !== null && up(d, f, h, y, !1),
                    x !== null && w !== null && up(d, w, x, y, !0)
                }
            }
            e: {
                if (f = u ? os(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var b = QC;
                else if (tp(f))
                    if (ov)
                        b = JC;
                    else {
                        b = XC;
                        var E = qC
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = ZC);
                if (b && (b = b(e, u))) {
                    sv(d, b, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && tc(f, "number", f.value)
            }
            switch (E = u ? os(u) : window,
            e) {
            case "focusin":
                (tp(E) || E.contentEditable === "true") && (rs = E,
                hc = u,
                Eo = null);
                break;
            case "focusout":
                Eo = hc = rs = null;
                break;
            case "mousedown":
                pc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                pc = !1,
                ip(d, n, c);
                break;
            case "selectionchange":
                if (nb)
                    break;
            case "keydown":
            case "keyup":
                ip(d, n, c)
            }
            var T;
            if (Qd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                ns ? nv(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (tv && n.locale !== "ko" && (ns || P !== "onCompositionStart" ? P === "onCompositionEnd" && ns && (T = ev()) : (Wn = c,
            Kd = "value"in Wn ? Wn.value : Wn.textContent,
            ns = !0)),
            E = Pa(u, P),
            0 < E.length && (P = new Xh(P,e,null,n,c),
            d.push({
                event: P,
                listeners: E
            }),
            T ? P.data = T : (T = rv(n),
            T !== null && (P.data = T)))),
            (T = WC ? HC(e, n) : KC(e, n)) && (u = Pa(u, "onBeforeInput"),
            0 < u.length && (c = new Xh("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        mv(d, t)
    })
}
function Wo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Pa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , o = s.stateNode;
        s.tag === 5 && o !== null && (s = o,
        o = Fo(e, n),
        o != null && r.unshift(Wo(e, o, s)),
        o = Fo(e, t),
        o != null && r.push(Wo(e, o, s))),
        e = e.return
    }
    return r
}
function Xr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function up(e, t, n, r, s) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = Fo(n, o),
        l != null && i.unshift(Wo(n, l, a))) : s || (l = Fo(n, o),
        l != null && i.push(Wo(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var ib = /\r\n?/g
  , ab = /\u0000|\uFFFD/g;
function cp(e) {
    return (typeof e == "string" ? e : "" + e).replace(ib, `
`).replace(ab, "")
}
function Li(e, t, n) {
    if (t = cp(t),
    cp(e) !== t && n)
        throw Error(D(425))
}
function ka() {}
var mc = null
  , gc = null;
function yc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var vc = typeof setTimeout == "function" ? setTimeout : void 0
  , lb = typeof clearTimeout == "function" ? clearTimeout : void 0
  , dp = typeof Promise == "function" ? Promise : void 0
  , ub = typeof queueMicrotask == "function" ? queueMicrotask : typeof dp < "u" ? function(e) {
    return dp.resolve(null).then(e).catch(cb)
}
: vc;
function cb(e) {
    setTimeout(function() {
        throw e
    })
}
function hu(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    zo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    zo(t)
}
function Zn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function fp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Gs = Math.random().toString(36).slice(2)
  , Xt = "__reactFiber$" + Gs
  , Ho = "__reactProps$" + Gs
  , gn = "__reactContainer$" + Gs
  , xc = "__reactEvents$" + Gs
  , db = "__reactListeners$" + Gs
  , fb = "__reactHandles$" + Gs;
function Cr(e) {
    var t = e[Xt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[gn] || n[Xt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = fp(e); e !== null; ) {
                    if (n = e[Xt])
                        return n;
                    e = fp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function di(e) {
    return e = e[Xt] || e[gn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function os(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function fl(e) {
    return e[Ho] || null
}
var wc = []
  , is = -1;
function fr(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > is || (e.current = wc[is],
    wc[is] = null,
    is--)
}
function se(e, t) {
    is++,
    wc[is] = e.current,
    e.current = t
}
var sr = {}
  , $e = fr(sr)
  , Je = fr(!1)
  , Ir = sr;
function Is(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return sr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n)
        s[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function et(e) {
    return e = e.childContextTypes,
    e != null
}
function Aa() {
    ae(Je),
    ae($e)
}
function hp(e, t, n) {
    if ($e.current !== sr)
        throw Error(D(168));
    se($e, t),
    se(Je, n)
}
function yv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(D(108, qS(e) || "Unknown", s));
    return pe({}, n, r)
}
function Na(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sr,
    Ir = $e.current,
    se($e, e),
    se(Je, Je.current),
    !0
}
function pp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = yv(e, t, Ir),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(Je),
    ae($e),
    se($e, e)) : ae(Je),
    se(Je, n)
}
var cn = null
  , hl = !1
  , pu = !1;
function vv(e) {
    cn === null ? cn = [e] : cn.push(e)
}
function hb(e) {
    hl = !0,
    vv(e)
}
function hr() {
    if (!pu && cn !== null) {
        pu = !0;
        var e = 0
          , t = ne;
        try {
            var n = cn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            cn = null,
            hl = !1
        } catch (s) {
            throw cn !== null && (cn = cn.slice(e + 1)),
            Uy(Bd, hr),
            s
        } finally {
            ne = t,
            pu = !1
        }
    }
    return null
}
var as = []
  , ls = 0
  , Ra = null
  , ja = 0
  , mt = []
  , gt = 0
  , Fr = null
  , fn = 1
  , hn = "";
function xr(e, t) {
    as[ls++] = ja,
    as[ls++] = Ra,
    Ra = e,
    ja = t
}
function xv(e, t, n) {
    mt[gt++] = fn,
    mt[gt++] = hn,
    mt[gt++] = Fr,
    Fr = e;
    var r = fn;
    e = hn;
    var s = 32 - It(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var o = 32 - It(t) + s;
    if (30 < o) {
        var i = s - s % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        s -= i,
        fn = 1 << 32 - It(t) + s | n << s | r,
        hn = o + e
    } else
        fn = 1 << o | n << s | r,
        hn = e
}
function Xd(e) {
    e.return !== null && (xr(e, 1),
    xv(e, 1, 0))
}
function Zd(e) {
    for (; e === Ra; )
        Ra = as[--ls],
        as[ls] = null,
        ja = as[--ls],
        as[ls] = null;
    for (; e === Fr; )
        Fr = mt[--gt],
        mt[gt] = null,
        hn = mt[--gt],
        mt[gt] = null,
        fn = mt[--gt],
        mt[gt] = null
}
var at = null
  , it = null
  , ue = !1
  , Ot = null;
function wv(e, t) {
    var n = yt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function mp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        it = Zn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        it = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Fr !== null ? {
            id: fn,
            overflow: hn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = yt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        at = e,
        it = null,
        !0) : !1;
    default:
        return !1
    }
}
function Sc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Cc(e) {
    if (ue) {
        var t = it;
        if (t) {
            var n = t;
            if (!mp(e, t)) {
                if (Sc(e))
                    throw Error(D(418));
                t = Zn(n.nextSibling);
                var r = at;
                t && mp(e, t) ? wv(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                at = e)
            }
        } else {
            if (Sc(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            at = e
        }
    }
}
function gp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    at = e
}
function Oi(e) {
    if (e !== at)
        return !1;
    if (!ue)
        return gp(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !yc(e.type, e.memoizedProps)),
    t && (t = it)) {
        if (Sc(e))
            throw Sv(),
            Error(D(418));
        for (; t; )
            wv(e, t),
            t = Zn(t.nextSibling)
    }
    if (gp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = Zn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else
        it = at ? Zn(e.stateNode.nextSibling) : null;
    return !0
}
function Sv() {
    for (var e = it; e; )
        e = Zn(e.nextSibling)
}
function Fs() {
    it = at = null,
    ue = !1
}
function Jd(e) {
    Ot === null ? Ot = [e] : Ot.push(e)
}
var pb = Cn.ReactCurrentBatchConfig;
function lo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var s = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var a = s.refs;
                i === null ? delete a[o] : a[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function Ii(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function yp(e) {
    var t = e._init;
    return t(e._payload)
}
function Cv(e) {
    function t(g, m) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [m],
            g.flags |= 16) : v.push(m)
        }
    }
    function n(g, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(g, m),
            m = m.sibling;
        return null
    }
    function r(g, m) {
        for (g = new Map; m !== null; )
            m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
            m = m.sibling;
        return g
    }
    function s(g, m) {
        return g = nr(g, m),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, m, v) {
        return g.index = v,
        e ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < m ? (g.flags |= 2,
        m) : v) : (g.flags |= 2,
        m)) : (g.flags |= 1048576,
        m)
    }
    function i(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, m, v, C) {
        return m === null || m.tag !== 6 ? (m = Su(v, g.mode, C),
        m.return = g,
        m) : (m = s(m, v),
        m.return = g,
        m)
    }
    function l(g, m, v, C) {
        var b = v.type;
        return b === ts ? c(g, m, v.props.children, C, v.key) : m !== null && (m.elementType === b || typeof b == "object" && b !== null && b.$$typeof === On && yp(b) === m.type) ? (C = s(m, v.props),
        C.ref = lo(g, m, v),
        C.return = g,
        C) : (C = ua(v.type, v.key, v.props, null, g.mode, C),
        C.ref = lo(g, m, v),
        C.return = g,
        C)
    }
    function u(g, m, v, C) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Cu(v, g.mode, C),
        m.return = g,
        m) : (m = s(m, v.children || []),
        m.return = g,
        m)
    }
    function c(g, m, v, C, b) {
        return m === null || m.tag !== 7 ? (m = Lr(v, g.mode, C, b),
        m.return = g,
        m) : (m = s(m, v),
        m.return = g,
        m)
    }
    function d(g, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = Su("" + m, g.mode, v),
            m.return = g,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Ti:
                return v = ua(m.type, m.key, m.props, null, g.mode, v),
                v.ref = lo(g, null, m),
                v.return = g,
                v;
            case es:
                return m = Cu(m, g.mode, v),
                m.return = g,
                m;
            case On:
                var C = m._init;
                return d(g, C(m._payload), v)
            }
            if (go(m) || ro(m))
                return m = Lr(m, g.mode, v, null),
                m.return = g,
                m;
            Ii(g, m)
        }
        return null
    }
    function f(g, m, v, C) {
        var b = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return b !== null ? null : a(g, m, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ti:
                return v.key === b ? l(g, m, v, C) : null;
            case es:
                return v.key === b ? u(g, m, v, C) : null;
            case On:
                return b = v._init,
                f(g, m, b(v._payload), C)
            }
            if (go(v) || ro(v))
                return b !== null ? null : c(g, m, v, C, null);
            Ii(g, v)
        }
        return null
    }
    function h(g, m, v, C, b) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return g = g.get(v) || null,
            a(m, g, "" + C, b);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Ti:
                return g = g.get(C.key === null ? v : C.key) || null,
                l(m, g, C, b);
            case es:
                return g = g.get(C.key === null ? v : C.key) || null,
                u(m, g, C, b);
            case On:
                var E = C._init;
                return h(g, m, v, E(C._payload), b)
            }
            if (go(C) || ro(C))
                return g = g.get(v) || null,
                c(m, g, C, b, null);
            Ii(m, C)
        }
        return null
    }
    function x(g, m, v, C) {
        for (var b = null, E = null, T = m, P = m = 0, R = null; T !== null && P < v.length; P++) {
            T.index > P ? (R = T,
            T = null) : R = T.sibling;
            var j = f(g, T, v[P], C);
            if (j === null) {
                T === null && (T = R);
                break
            }
            e && T && j.alternate === null && t(g, T),
            m = o(j, m, P),
            E === null ? b = j : E.sibling = j,
            E = j,
            T = R
        }
        if (P === v.length)
            return n(g, T),
            ue && xr(g, P),
            b;
        if (T === null) {
            for (; P < v.length; P++)
                T = d(g, v[P], C),
                T !== null && (m = o(T, m, P),
                E === null ? b = T : E.sibling = T,
                E = T);
            return ue && xr(g, P),
            b
        }
        for (T = r(g, T); P < v.length; P++)
            R = h(T, g, P, v[P], C),
            R !== null && (e && R.alternate !== null && T.delete(R.key === null ? P : R.key),
            m = o(R, m, P),
            E === null ? b = R : E.sibling = R,
            E = R);
        return e && T.forEach(function(z) {
            return t(g, z)
        }),
        ue && xr(g, P),
        b
    }
    function y(g, m, v, C) {
        var b = ro(v);
        if (typeof b != "function")
            throw Error(D(150));
        if (v = b.call(v),
        v == null)
            throw Error(D(151));
        for (var E = b = null, T = m, P = m = 0, R = null, j = v.next(); T !== null && !j.done; P++,
        j = v.next()) {
            T.index > P ? (R = T,
            T = null) : R = T.sibling;
            var z = f(g, T, j.value, C);
            if (z === null) {
                T === null && (T = R);
                break
            }
            e && T && z.alternate === null && t(g, T),
            m = o(z, m, P),
            E === null ? b = z : E.sibling = z,
            E = z,
            T = R
        }
        if (j.done)
            return n(g, T),
            ue && xr(g, P),
            b;
        if (T === null) {
            for (; !j.done; P++,
            j = v.next())
                j = d(g, j.value, C),
                j !== null && (m = o(j, m, P),
                E === null ? b = j : E.sibling = j,
                E = j);
            return ue && xr(g, P),
            b
        }
        for (T = r(g, T); !j.done; P++,
        j = v.next())
            j = h(T, g, P, j.value, C),
            j !== null && (e && j.alternate !== null && T.delete(j.key === null ? P : j.key),
            m = o(j, m, P),
            E === null ? b = j : E.sibling = j,
            E = j);
        return e && T.forEach(function(I) {
            return t(g, I)
        }),
        ue && xr(g, P),
        b
    }
    function w(g, m, v, C) {
        if (typeof v == "object" && v !== null && v.type === ts && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ti:
                e: {
                    for (var b = v.key, E = m; E !== null; ) {
                        if (E.key === b) {
                            if (b = v.type,
                            b === ts) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    m = s(E, v.props.children),
                                    m.return = g,
                                    g = m;
                                    break e
                                }
                            } else if (E.elementType === b || typeof b == "object" && b !== null && b.$$typeof === On && yp(b) === E.type) {
                                n(g, E.sibling),
                                m = s(E, v.props),
                                m.ref = lo(g, E, v),
                                m.return = g,
                                g = m;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    v.type === ts ? (m = Lr(v.props.children, g.mode, C, v.key),
                    m.return = g,
                    g = m) : (C = ua(v.type, v.key, v.props, null, g.mode, C),
                    C.ref = lo(g, m, v),
                    C.return = g,
                    g = C)
                }
                return i(g);
            case es:
                e: {
                    for (E = v.key; m !== null; ) {
                        if (m.key === E)
                            if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                n(g, m.sibling),
                                m = s(m, v.children || []),
                                m.return = g,
                                g = m;
                                break e
                            } else {
                                n(g, m);
                                break
                            }
                        else
                            t(g, m);
                        m = m.sibling
                    }
                    m = Cu(v, g.mode, C),
                    m.return = g,
                    g = m
                }
                return i(g);
            case On:
                return E = v._init,
                w(g, m, E(v._payload), C)
            }
            if (go(v))
                return x(g, m, v, C);
            if (ro(v))
                return y(g, m, v, C);
            Ii(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        m !== null && m.tag === 6 ? (n(g, m.sibling),
        m = s(m, v),
        m.return = g,
        g = m) : (n(g, m),
        m = Su(v, g.mode, C),
        m.return = g,
        g = m),
        i(g)) : n(g, m)
    }
    return w
}
var _s = Cv(!0)
  , bv = Cv(!1)
  , Ma = fr(null)
  , Da = null
  , us = null
  , ef = null;
function tf() {
    ef = us = Da = null
}
function nf(e) {
    var t = Ma.current;
    ae(Ma),
    e._currentValue = t
}
function bc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ss(e, t) {
    Da = e,
    ef = us = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0),
    e.firstContext = null)
}
function St(e) {
    var t = e._currentValue;
    if (ef !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        us === null) {
            if (Da === null)
                throw Error(D(308));
            us = e,
            Da.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            us = us.next = e;
    return t
}
var br = null;
function rf(e) {
    br === null ? br = [e] : br.push(e)
}
function Ev(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    rf(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    yn(e, r)
}
function yn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var In = !1;
function sf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Tv(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function pn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Jn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        yn(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    rf(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    yn(e, n)
}
function ra(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ud(e, n)
    }
}
function vp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? s = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? s = o = t : o = o.next = t
        } else
            s = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function La(e, t, n, r) {
    var s = e.updateQueue;
    In = !1;
    var o = s.firstBaseUpdate
      , i = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        i === null ? o = u : i.next = u,
        i = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = s.baseState;
        i = 0,
        c = u = l = null,
        a = o;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , y = a;
                    switch (f = t,
                    h = n,
                    y.tag) {
                    case 1:
                        if (x = y.payload,
                        typeof x == "function") {
                            d = x.call(h, d, f);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = y.payload,
                        f = typeof x == "function" ? x.call(h, d, f) : x,
                        f == null)
                            break e;
                        d = pe({}, d, f);
                        break e;
                    case 2:
                        In = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                i |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = c,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                i |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            o === null && (s.shared.lanes = 0);
        Vr |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function xp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(D(191, s));
                s.call(r)
            }
        }
}
var fi = {}
  , en = fr(fi)
  , Ko = fr(fi)
  , Go = fr(fi);
function Er(e) {
    if (e === fi)
        throw Error(D(174));
    return e
}
function of(e, t) {
    switch (se(Go, t),
    se(Ko, e),
    se(en, fi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : rc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = rc(t, e)
    }
    ae(en),
    se(en, t)
}
function Vs() {
    ae(en),
    ae(Ko),
    ae(Go)
}
function Pv(e) {
    Er(Go.current);
    var t = Er(en.current)
      , n = rc(t, e.type);
    t !== n && (se(Ko, e),
    se(en, n))
}
function af(e) {
    Ko.current === e && (ae(en),
    ae(Ko))
}
var de = fr(0);
function Oa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var mu = [];
function lf() {
    for (var e = 0; e < mu.length; e++)
        mu[e]._workInProgressVersionPrimary = null;
    mu.length = 0
}
var sa = Cn.ReactCurrentDispatcher
  , gu = Cn.ReactCurrentBatchConfig
  , _r = 0
  , he = null
  , Ee = null
  , Ae = null
  , Ia = !1
  , To = !1
  , Yo = 0
  , mb = 0;
function Ie() {
    throw Error(D(321))
}
function uf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Vt(e[n], t[n]))
            return !1;
    return !0
}
function cf(e, t, n, r, s, o) {
    if (_r = o,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    sa.current = e === null || e.memoizedState === null ? xb : wb,
    e = n(r, s),
    To) {
        o = 0;
        do {
            if (To = !1,
            Yo = 0,
            25 <= o)
                throw Error(D(301));
            o += 1,
            Ae = Ee = null,
            t.updateQueue = null,
            sa.current = Sb,
            e = n(r, s)
        } while (To)
    }
    if (sa.current = Fa,
    t = Ee !== null && Ee.next !== null,
    _r = 0,
    Ae = Ee = he = null,
    Ia = !1,
    t)
        throw Error(D(300));
    return e
}
function df() {
    var e = Yo !== 0;
    return Yo = 0,
    e
}
function Kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ae === null ? he.memoizedState = Ae = e : Ae = Ae.next = e,
    Ae
}
function Ct() {
    if (Ee === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ee.next;
    var t = Ae === null ? he.memoizedState : Ae.next;
    if (t !== null)
        Ae = t,
        Ee = e;
    else {
        if (e === null)
            throw Error(D(310));
        Ee = e,
        e = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        Ae === null ? he.memoizedState = Ae = e : Ae = Ae.next = e
    }
    return Ae
}
function Qo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yu(e) {
    var t = Ct()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Ee
      , s = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (s !== null) {
            var i = s.next;
            s.next = o.next,
            o.next = i
        }
        r.baseQueue = s = o,
        n.pending = null
    }
    if (s !== null) {
        o = s.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , u = o;
        do {
            var c = u.lane;
            if ((_r & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                i = r) : l = l.next = d,
                he.lanes |= c,
                Vr |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? i = r : l.next = a,
        Vt(r, t.memoizedState) || (Ze = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            o = s.lane,
            he.lanes |= o,
            Vr |= o,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function vu(e) {
    var t = Ct()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , o = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var i = s = s.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== s);
        Vt(o, t.memoizedState) || (Ze = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function kv() {}
function Av(e, t) {
    var n = he
      , r = Ct()
      , s = t()
      , o = !Vt(r.memoizedState, s);
    if (o && (r.memoizedState = s,
    Ze = !0),
    r = r.queue,
    ff(jv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ae !== null && Ae.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        qo(9, Rv.bind(null, n, r, s, t), void 0, null),
        Ne === null)
            throw Error(D(349));
        _r & 30 || Nv(n, t, s)
    }
    return s
}
function Nv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Rv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Mv(t) && Dv(e)
}
function jv(e, t, n) {
    return n(function() {
        Mv(t) && Dv(e)
    })
}
function Mv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Vt(e, n)
    } catch {
        return !0
    }
}
function Dv(e) {
    var t = yn(e, 1);
    t !== null && Ft(t, e, 1, -1)
}
function wp(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = vb.bind(null, he, e),
    [t.memoizedState, e]
}
function qo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Lv() {
    return Ct().memoizedState
}
function oa(e, t, n, r) {
    var s = Kt();
    he.flags |= e,
    s.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r)
}
function pl(e, t, n, r) {
    var s = Ct();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ee !== null) {
        var i = Ee.memoizedState;
        if (o = i.destroy,
        r !== null && uf(r, i.deps)) {
            s.memoizedState = qo(t, n, o, r);
            return
        }
    }
    he.flags |= e,
    s.memoizedState = qo(1 | t, n, o, r)
}
function Sp(e, t) {
    return oa(8390656, 8, e, t)
}
function ff(e, t) {
    return pl(2048, 8, e, t)
}
function Ov(e, t) {
    return pl(4, 2, e, t)
}
function Iv(e, t) {
    return pl(4, 4, e, t)
}
function Fv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function _v(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    pl(4, 4, Fv.bind(null, t, e), n)
}
function hf() {}
function Vv(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && uf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function zv(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && uf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function $v(e, t, n) {
    return _r & 21 ? (Vt(n, t) || (n = Ky(),
    he.lanes |= n,
    Vr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ze = !0),
    e.memoizedState = n)
}
function gb(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = gu.transition;
    gu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        gu.transition = r
    }
}
function Bv() {
    return Ct().memoizedState
}
function yb(e, t, n) {
    var r = tr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Uv(e))
        Wv(t, n);
    else if (n = Ev(e, t, n, r),
    n !== null) {
        var s = Ge();
        Ft(n, e, r, s),
        Hv(n, t, r)
    }
}
function vb(e, t, n) {
    var r = tr(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Uv(e))
        Wv(t, s);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , a = o(i, n);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                Vt(a, i)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    rf(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = Ev(e, t, s, r),
        n !== null && (s = Ge(),
        Ft(n, e, r, s),
        Hv(n, t, r))
    }
}
function Uv(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function Wv(e, t) {
    To = Ia = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Hv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ud(e, n)
    }
}
var Fa = {
    readContext: St,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1
}
  , xb = {
    readContext: St,
    useCallback: function(e, t) {
        return Kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: St,
    useEffect: Sp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        oa(4194308, 4, Fv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return oa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return oa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Kt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = yb.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: wp,
    useDebugValue: hf,
    useDeferredValue: function(e) {
        return Kt().memoizedState = e
    },
    useTransition: function() {
        var e = wp(!1)
          , t = e[0];
        return e = gb.bind(null, e[1]),
        Kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , s = Kt();
        if (ue) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            Ne === null)
                throw Error(D(349));
            _r & 30 || Nv(r, t, n)
        }
        s.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return s.queue = o,
        Sp(jv.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        qo(9, Rv.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Kt()
          , t = Ne.identifierPrefix;
        if (ue) {
            var n = hn
              , r = fn;
            n = (r & ~(1 << 32 - It(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Yo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = mb++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , wb = {
    readContext: St,
    useCallback: Vv,
    useContext: St,
    useEffect: ff,
    useImperativeHandle: _v,
    useInsertionEffect: Ov,
    useLayoutEffect: Iv,
    useMemo: zv,
    useReducer: yu,
    useRef: Lv,
    useState: function() {
        return yu(Qo)
    },
    useDebugValue: hf,
    useDeferredValue: function(e) {
        var t = Ct();
        return $v(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = yu(Qo)[0]
          , t = Ct().memoizedState;
        return [e, t]
    },
    useMutableSource: kv,
    useSyncExternalStore: Av,
    useId: Bv,
    unstable_isNewReconciler: !1
}
  , Sb = {
    readContext: St,
    useCallback: Vv,
    useContext: St,
    useEffect: ff,
    useImperativeHandle: _v,
    useInsertionEffect: Ov,
    useLayoutEffect: Iv,
    useMemo: zv,
    useReducer: vu,
    useRef: Lv,
    useState: function() {
        return vu(Qo)
    },
    useDebugValue: hf,
    useDeferredValue: function(e) {
        var t = Ct();
        return Ee === null ? t.memoizedState = e : $v(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = vu(Qo)[0]
          , t = Ct().memoizedState;
        return [e, t]
    },
    useMutableSource: kv,
    useSyncExternalStore: Av,
    useId: Bv,
    unstable_isNewReconciler: !1
};
function Rt(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ec(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : pe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ml = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Wr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ge()
          , s = tr(e)
          , o = pn(r, s);
        o.payload = t,
        n != null && (o.callback = n),
        t = Jn(e, o, s),
        t !== null && (Ft(t, e, s, r),
        ra(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ge()
          , s = tr(e)
          , o = pn(r, s);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Jn(e, o, s),
        t !== null && (Ft(t, e, s, r),
        ra(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ge()
          , r = tr(e)
          , s = pn(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = Jn(e, s, r),
        t !== null && (Ft(t, e, r, n),
        ra(t, e, r))
    }
};
function Cp(e, t, n, r, s, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Bo(n, r) || !Bo(s, o) : !0
}
function Kv(e, t, n) {
    var r = !1
      , s = sr
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = St(o) : (s = et(t) ? Ir : $e.current,
    r = t.contextTypes,
    o = (r = r != null) ? Is(e, s) : sr),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ml,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function bp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null)
}
function Tc(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    sf(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = St(o) : (o = et(t) ? Ir : $e.current,
    s.context = Is(e, o)),
    s.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Ec(e, t, o, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && ml.enqueueReplaceState(s, s.state, null),
    La(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function zs(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += QS(r),
            r = r.return;
        while (r);
        var s = n
    } catch (o) {
        s = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function xu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Pc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Cb = typeof WeakMap == "function" ? WeakMap : Map;
function Gv(e, t, n) {
    n = pn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Va || (Va = !0,
        Ic = r),
        Pc(e, t)
    }
    ,
    n
}
function Yv(e, t, n) {
    n = pn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            Pc(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Pc(e, t),
        typeof r != "function" && (er === null ? er = new Set([this]) : er.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Ep(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Cb;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = Ib.bind(null, e, t, n),
    t.then(e, e))
}
function Tp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Pp(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1),
    t.tag = 2,
    Jn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var bb = Cn.ReactCurrentOwner
  , Ze = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? bv(t, null, n, r) : _s(t, e.child, n, r)
}
function kp(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Ss(t, s),
    r = cf(e, t, n, r, o, s),
    n = df(),
    e !== null && !Ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    vn(e, t, s)) : (ue && n && Xd(t),
    t.flags |= 1,
    Ue(e, t, r, s),
    t.child)
}
function Ap(e, t, n, r, s) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Sf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Qv(e, t, o, r, s)) : (e = ua(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & s)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Bo,
        n(i, r) && e.ref === t.ref)
            return vn(e, t, s)
    }
    return t.flags |= 1,
    e = nr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Qv(e, t, n, r, s) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Bo(o, r) && e.ref === t.ref)
            if (Ze = !1,
            t.pendingProps = r = o,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (Ze = !0);
            else
                return t.lanes = e.lanes,
                vn(e, t, s)
    }
    return kc(e, t, n, r, s)
}
function qv(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            se(ds, st),
            st |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                se(ds, st),
                st |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            se(ds, st),
            st |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        se(ds, st),
        st |= r;
    return Ue(e, t, s, n),
    t.child
}
function Xv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function kc(e, t, n, r, s) {
    var o = et(n) ? Ir : $e.current;
    return o = Is(t, o),
    Ss(t, s),
    n = cf(e, t, n, r, o, s),
    r = df(),
    e !== null && !Ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    vn(e, t, s)) : (ue && r && Xd(t),
    t.flags |= 1,
    Ue(e, t, n, s),
    t.child)
}
function Np(e, t, n, r, s) {
    if (et(n)) {
        var o = !0;
        Na(t)
    } else
        o = !1;
    if (Ss(t, s),
    t.stateNode === null)
        ia(e, t),
        Kv(t, n, r),
        Tc(t, n, r, s),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = St(u) : (u = et(n) ? Ir : $e.current,
        u = Is(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && bp(t, i, r, u),
        In = !1;
        var f = t.memoizedState;
        i.state = f,
        La(t, r, i, s),
        l = t.memoizedState,
        a !== r || f !== l || Je.current || In ? (typeof c == "function" && (Ec(t, n, c, r),
        l = t.memoizedState),
        (a = In || Cp(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Tv(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Rt(t.type, a),
        i.props = u,
        d = t.pendingProps,
        f = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = St(l) : (l = et(n) ? Ir : $e.current,
        l = Is(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && bp(t, i, r, l),
        In = !1,
        f = t.memoizedState,
        i.state = f,
        La(t, r, i, s);
        var x = t.memoizedState;
        a !== d || f !== x || Je.current || In ? (typeof h == "function" && (Ec(t, n, h, r),
        x = t.memoizedState),
        (u = In || Cp(t, n, u, r, f, x, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        i.props = r,
        i.state = x,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ac(e, t, n, r, o, s)
}
function Ac(e, t, n, r, s, o) {
    Xv(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return s && pp(t, n, !1),
        vn(e, t, o);
    r = t.stateNode,
    bb.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = _s(t, e.child, null, o),
    t.child = _s(t, null, a, o)) : Ue(e, t, a, o),
    t.memoizedState = r.state,
    s && pp(t, n, !0),
    t.child
}
function Zv(e) {
    var t = e.stateNode;
    t.pendingContext ? hp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hp(e, t.context, !1),
    of(e, t.containerInfo)
}
function Rp(e, t, n, r, s) {
    return Fs(),
    Jd(s),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var Nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Rc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Jv(e, t, n) {
    var r = t.pendingProps, s = de.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    se(de, s & 1),
    e === null)
        return Cc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = vl(i, r, 0, null),
        e = Lr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Rc(n),
        t.memoizedState = Nc,
        e) : pf(t, i));
    if (s = e.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return Eb(e, t, i, r, a, s, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        s = e.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = nr(s, l),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? o = nr(a, o) : (o = Lr(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? Rc(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Nc,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = nr(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function pf(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Fi(e, t, n, r) {
    return r !== null && Jd(r),
    _s(t, e.child, null, n),
    e = pf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Eb(e, t, n, r, s, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = xu(Error(D(422))),
        Fi(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        s = t.mode,
        r = vl({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        o = Lr(o, s, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && _s(t, e.child, null, i),
        t.child.memoizedState = Rc(i),
        t.memoizedState = Nc,
        o);
    if (!(t.mode & 1))
        return Fi(e, t, i, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(D(419)),
        r = xu(o, r, void 0),
        Fi(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    Ze || a) {
        if (r = Ne,
        r !== null) {
            switch (i & -i) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | i) ? 0 : s,
            s !== 0 && s !== o.retryLane && (o.retryLane = s,
            yn(e, s),
            Ft(r, e, s, -1))
        }
        return wf(),
        r = xu(Error(D(421))),
        Fi(e, t, i, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Fb.bind(null, e),
    s._reactRetry = t,
    null) : (e = o.treeContext,
    it = Zn(s.nextSibling),
    at = t,
    ue = !0,
    Ot = null,
    e !== null && (mt[gt++] = fn,
    mt[gt++] = hn,
    mt[gt++] = Fr,
    fn = e.id,
    hn = e.overflow,
    Fr = t),
    t = pf(t, r.children),
    t.flags |= 4096,
    t)
}
function jp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    bc(e.return, t, n)
}
function wu(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = s)
}
function e0(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , o = r.tail;
    if (Ue(e, t, r.children, n),
    r = de.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && jp(e, n, t);
                else if (e.tag === 19)
                    jp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (se(de, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && Oa(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            wu(t, !1, s, n, o);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Oa(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            wu(t, !0, n, null, o);
            break;
        case "together":
            wu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ia(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function vn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Vr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = nr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = nr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Tb(e, t, n) {
    switch (t.tag) {
    case 3:
        Zv(t),
        Fs();
        break;
    case 5:
        Pv(t);
        break;
    case 1:
        et(t.type) && Na(t);
        break;
    case 4:
        of(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        se(Ma, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (se(de, de.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Jv(e, t, n) : (se(de, de.current & 1),
            e = vn(e, t, n),
            e !== null ? e.sibling : null);
        se(de, de.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return e0(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        se(de, de.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        qv(e, t, n)
    }
    return vn(e, t, n)
}
var t0, jc, n0, r0;
t0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
jc = function() {}
;
n0 = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Er(en.current);
        var o = null;
        switch (n) {
        case "input":
            s = Ju(e, s),
            r = Ju(e, r),
            o = [];
            break;
        case "select":
            s = pe({}, s, {
                value: void 0
            }),
            r = pe({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            s = nc(e, s),
            r = nc(e, r),
            o = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ka)
        }
        sc(n, r);
        var i;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Oo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Oo.hasOwnProperty(u) ? (l != null && u === "onScroll" && ie("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
r0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function uo(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Pb(e, t, n) {
    var r = t.pendingProps;
    switch (Zd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Fe(t),
        null;
    case 1:
        return et(t.type) && Aa(),
        Fe(t),
        null;
    case 3:
        return r = t.stateNode,
        Vs(),
        ae(Je),
        ae($e),
        lf(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ot !== null && (Vc(Ot),
        Ot = null))),
        jc(e, t),
        Fe(t),
        null;
    case 5:
        af(t);
        var s = Er(Go.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            n0(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return Fe(t),
                null
            }
            if (e = Er(en.current),
            Oi(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Xt] = t,
                r[Ho] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ie("cancel", r),
                    ie("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < vo.length; s++)
                        ie(vo[s], r);
                    break;
                case "source":
                    ie("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", r),
                    ie("load", r);
                    break;
                case "details":
                    ie("toggle", r);
                    break;
                case "input":
                    zh(r, o),
                    ie("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    ie("invalid", r);
                    break;
                case "textarea":
                    Bh(r, o),
                    ie("invalid", r)
                }
                sc(n, o),
                s = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var a = o[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Li(r.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Li(r.textContent, a, e),
                        s = ["children", "" + a]) : Oo.hasOwnProperty(i) && a != null && i === "onScroll" && ie("scroll", r)
                    }
                switch (n) {
                case "input":
                    Pi(r),
                    $h(r, o, !0);
                    break;
                case "textarea":
                    Pi(r),
                    Uh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ka)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = jy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Xt] = t,
                e[Ho] = r,
                t0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = oc(n, r),
                    n) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < vo.length; s++)
                            ie(vo[s], e);
                        s = r;
                        break;
                    case "source":
                        ie("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        s = r;
                        break;
                    case "details":
                        ie("toggle", e),
                        s = r;
                        break;
                    case "input":
                        zh(e, r),
                        s = Ju(e, r),
                        ie("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = pe({}, r, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        Bh(e, r),
                        s = nc(e, r),
                        ie("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    sc(n, s),
                    a = s;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Ly(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && My(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Io(e, l) : typeof l == "number" && Io(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Oo.hasOwnProperty(o) ? l != null && o === "onScroll" && ie("scroll", e) : l != null && Fd(e, o, l, i))
                        }
                    switch (n) {
                    case "input":
                        Pi(e),
                        $h(e, r, !1);
                        break;
                    case "textarea":
                        Pi(e),
                        Uh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + rr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? ys(e, !!r.multiple, o, !1) : r.defaultValue != null && ys(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = ka)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Fe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            r0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = Er(Go.current),
            Er(en.current),
            Oi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Xt] = t,
                (o = r.nodeValue !== n) && (e = at,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Li(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Li(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Xt] = t,
                t.stateNode = r
        }
        return Fe(t),
        null;
    case 13:
        if (ae(de),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && it !== null && t.mode & 1 && !(t.flags & 128))
                Sv(),
                Fs(),
                t.flags |= 98560,
                o = !1;
            else if (o = Oi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(D(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(D(317));
                    o[Xt] = t
                } else
                    Fs(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Fe(t),
                o = !1
            } else
                Ot !== null && (Vc(Ot),
                Ot = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || de.current & 1 ? Te === 0 && (Te = 3) : wf())),
        t.updateQueue !== null && (t.flags |= 4),
        Fe(t),
        null);
    case 4:
        return Vs(),
        jc(e, t),
        e === null && Uo(t.stateNode.containerInfo),
        Fe(t),
        null;
    case 10:
        return nf(t.type._context),
        Fe(t),
        null;
    case 17:
        return et(t.type) && Aa(),
        Fe(t),
        null;
    case 19:
        if (ae(de),
        o = t.memoizedState,
        o === null)
            return Fe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                uo(o, !1);
            else {
                if (Te !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Oa(e),
                        i !== null) {
                            for (t.flags |= 128,
                            uo(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return se(de, de.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && ve() > $s && (t.flags |= 128,
                r = !0,
                uo(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Oa(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    uo(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !ue)
                        return Fe(t),
                        null
                } else
                    2 * ve() - o.renderingStartTime > $s && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    uo(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = ve(),
        t.sibling = null,
        n = de.current,
        se(de, r ? n & 1 | 2 : n & 1),
        t) : (Fe(t),
        null);
    case 22:
    case 23:
        return xf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? st & 1073741824 && (Fe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function kb(e, t) {
    switch (Zd(t),
    t.tag) {
    case 1:
        return et(t.type) && Aa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Vs(),
        ae(Je),
        ae($e),
        lf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return af(t),
        null;
    case 13:
        if (ae(de),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            Fs()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(de),
        null;
    case 4:
        return Vs(),
        null;
    case 10:
        return nf(t.type._context),
        null;
    case 22:
    case 23:
        return xf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _i = !1
  , Ve = !1
  , Ab = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function cs(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ge(e, t, r)
            }
        else
            n.current = null
}
function Mc(e, t, n) {
    try {
        n()
    } catch (r) {
        ge(e, t, r)
    }
}
var Mp = !1;
function Nb(e, t) {
    if (mc = Ea,
    e = lv(),
    qd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || s !== 0 && d.nodeType !== 3 || (a = i + s),
                        d !== o || r !== 0 && d.nodeType !== 3 || (l = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === s && (a = i),
                            f === o && ++c === r && (l = i),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (gc = {
        focusedElem: e,
        selectionRange: n
    },
    Ea = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var y = x.memoizedProps
                                  , w = x.memoizedState
                                  , g = t.stateNode
                                  , m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Rt(t.type, y), w);
                                g.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (C) {
                    ge(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return x = Mp,
    Mp = !1,
    x
}
function Po(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var o = s.destroy;
                s.destroy = void 0,
                o !== void 0 && Mc(t, n, o)
            }
            s = s.next
        } while (s !== r)
    }
}
function gl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Dc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function s0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    s0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Xt],
    delete t[Ho],
    delete t[xc],
    delete t[db],
    delete t[fb])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function o0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Dp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || o0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Lc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ka));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Lc(e, t, n),
        e = e.sibling; e !== null; )
            Lc(e, t, n),
            e = e.sibling
}
function Oc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Oc(e, t, n),
        e = e.sibling; e !== null; )
            Oc(e, t, n),
            e = e.sibling
}
var je = null
  , Lt = !1;
function Nn(e, t, n) {
    for (n = n.child; n !== null; )
        i0(e, t, n),
        n = n.sibling
}
function i0(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
        try {
            Jt.onCommitFiberUnmount(ll, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ve || cs(n, t);
    case 6:
        var r = je
          , s = Lt;
        je = null,
        Nn(e, t, n),
        je = r,
        Lt = s,
        je !== null && (Lt ? (e = je,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
        break;
    case 18:
        je !== null && (Lt ? (e = je,
        n = n.stateNode,
        e.nodeType === 8 ? hu(e.parentNode, n) : e.nodeType === 1 && hu(e, n),
        zo(e)) : hu(je, n.stateNode));
        break;
    case 4:
        r = je,
        s = Lt,
        je = n.stateNode.containerInfo,
        Lt = !0,
        Nn(e, t, n),
        je = r,
        Lt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ve && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var o = s
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && Mc(n, t, i),
                s = s.next
            } while (s !== r)
        }
        Nn(e, t, n);
        break;
    case 1:
        if (!Ve && (cs(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ge(n, t, a)
            }
        Nn(e, t, n);
        break;
    case 21:
        Nn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null,
        Nn(e, t, n),
        Ve = r) : Nn(e, t, n);
        break;
    default:
        Nn(e, t, n)
    }
}
function Lp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ab),
        t.forEach(function(r) {
            var s = _b.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var o = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        je = a.stateNode,
                        Lt = !1;
                        break e;
                    case 3:
                        je = a.stateNode.containerInfo,
                        Lt = !0;
                        break e;
                    case 4:
                        je = a.stateNode.containerInfo,
                        Lt = !0;
                        break e
                    }
                    a = a.return
                }
                if (je === null)
                    throw Error(D(160));
                i0(o, i, s),
                je = null,
                Lt = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                ge(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            a0(t, e),
            t = t.sibling
}
function a0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pt(t, e),
        Ht(e),
        r & 4) {
            try {
                Po(3, e, e.return),
                gl(3, e)
            } catch (y) {
                ge(e, e.return, y)
            }
            try {
                Po(5, e, e.return)
            } catch (y) {
                ge(e, e.return, y)
            }
        }
        break;
    case 1:
        Pt(t, e),
        Ht(e),
        r & 512 && n !== null && cs(n, n.return);
        break;
    case 5:
        if (Pt(t, e),
        Ht(e),
        r & 512 && n !== null && cs(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                Io(s, "")
            } catch (y) {
                ge(e, e.return, y)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Ny(s, o),
                    oc(a, i);
                    var u = oc(a, o);
                    for (i = 0; i < l.length; i += 2) {
                        var c = l[i]
                          , d = l[i + 1];
                        c === "style" ? Ly(s, d) : c === "dangerouslySetInnerHTML" ? My(s, d) : c === "children" ? Io(s, d) : Fd(s, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        ec(s, o);
                        break;
                    case "textarea":
                        Ry(s, o);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        h != null ? ys(s, !!o.multiple, h, !1) : f !== !!o.multiple && (o.defaultValue != null ? ys(s, !!o.multiple, o.defaultValue, !0) : ys(s, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    s[Ho] = o
                } catch (y) {
                    ge(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Pt(t, e),
        Ht(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            s = e.stateNode,
            o = e.memoizedProps;
            try {
                s.nodeValue = o
            } catch (y) {
                ge(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Pt(t, e),
        Ht(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                zo(t.containerInfo)
            } catch (y) {
                ge(e, e.return, y)
            }
        break;
    case 4:
        Pt(t, e),
        Ht(e);
        break;
    case 13:
        Pt(t, e),
        Ht(e),
        s = e.child,
        s.flags & 8192 && (o = s.memoizedState !== null,
        s.stateNode.isHidden = o,
        !o || s.alternate !== null && s.alternate.memoizedState !== null || (yf = ve())),
        r & 4 && Lp(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ve = (u = Ve) || c,
        Pt(t, e),
        Ve = u) : Pt(t, e),
        Ht(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (F = e,
                c = e.child; c !== null; ) {
                    for (d = F = c; F !== null; ) {
                        switch (f = F,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Po(4, f, f.return);
                            break;
                        case 1:
                            cs(f, f.return);
                            var x = f.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (y) {
                                    ge(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            cs(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Ip(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        F = h) : Ip(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            s = d.stateNode,
                            u ? (o = s.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Dy("display", i))
                        } catch (y) {
                            ge(e, e.return, y)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            ge(e, e.return, y)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Pt(t, e),
        Ht(e),
        r & 4 && Lp(e);
        break;
    case 21:
        break;
    default:
        Pt(t, e),
        Ht(e)
    }
}
function Ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (o0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (Io(s, ""),
                r.flags &= -33);
                var o = Dp(e);
                Oc(e, o, s);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = Dp(e);
                Lc(e, a, i);
                break;
            default:
                throw Error(D(161))
            }
        } catch (l) {
            ge(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Rb(e, t, n) {
    F = e,
    l0(e)
}
function l0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var s = F
          , o = s.child;
        if (s.tag === 22 && r) {
            var i = s.memoizedState !== null || _i;
            if (!i) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || Ve;
                a = _i;
                var u = Ve;
                if (_i = i,
                (Ve = l) && !u)
                    for (F = s; F !== null; )
                        i = F,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Fp(s) : l !== null ? (l.return = i,
                        F = l) : Fp(s);
                for (; o !== null; )
                    F = o,
                    l0(o),
                    o = o.sibling;
                F = s,
                _i = a,
                Ve = u
            }
            Op(e)
        } else
            s.subtreeFlags & 8772 && o !== null ? (o.return = s,
            F = o) : Op(e)
    }
}
function Op(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ve || gl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ve)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : Rt(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && xp(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            xp(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && zo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(D(163))
                    }
                Ve || t.flags & 512 && Dc(t)
            } catch (f) {
                ge(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Ip(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Fp(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    gl(4, t)
                } catch (l) {
                    ge(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ge(t, s, l)
                    }
                }
                var o = t.return;
                try {
                    Dc(t)
                } catch (l) {
                    ge(t, o, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Dc(t)
                } catch (l) {
                    ge(t, i, l)
                }
            }
        } catch (l) {
            ge(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var jb = Math.ceil
  , _a = Cn.ReactCurrentDispatcher
  , mf = Cn.ReactCurrentOwner
  , xt = Cn.ReactCurrentBatchConfig
  , Z = 0
  , Ne = null
  , Ce = null
  , Me = 0
  , st = 0
  , ds = fr(0)
  , Te = 0
  , Xo = null
  , Vr = 0
  , yl = 0
  , gf = 0
  , ko = null
  , Xe = null
  , yf = 0
  , $s = 1 / 0
  , un = null
  , Va = !1
  , Ic = null
  , er = null
  , Vi = !1
  , Hn = null
  , za = 0
  , Ao = 0
  , Fc = null
  , aa = -1
  , la = 0;
function Ge() {
    return Z & 6 ? ve() : aa !== -1 ? aa : aa = ve()
}
function tr(e) {
    return e.mode & 1 ? Z & 2 && Me !== 0 ? Me & -Me : pb.transition !== null ? (la === 0 && (la = Ky()),
    la) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Jy(e.type)),
    e) : 1
}
function Ft(e, t, n, r) {
    if (50 < Ao)
        throw Ao = 0,
        Fc = null,
        Error(D(185));
    ui(e, n, r),
    (!(Z & 2) || e !== Ne) && (e === Ne && (!(Z & 2) && (yl |= n),
    Te === 4 && _n(e, Me)),
    tt(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && ($s = ve() + 500,
    hl && hr()))
}
function tt(e, t) {
    var n = e.callbackNode;
    pC(e, t);
    var r = ba(e, e === Ne ? Me : 0);
    if (r === 0)
        n !== null && Kh(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Kh(n),
        t === 1)
            e.tag === 0 ? hb(_p.bind(null, e)) : vv(_p.bind(null, e)),
            ub(function() {
                !(Z & 6) && hr()
            }),
            n = null;
        else {
            switch (Gy(r)) {
            case 1:
                n = Bd;
                break;
            case 4:
                n = Wy;
                break;
            case 16:
                n = Ca;
                break;
            case 536870912:
                n = Hy;
                break;
            default:
                n = Ca
            }
            n = g0(n, u0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function u0(e, t) {
    if (aa = -1,
    la = 0,
    Z & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (Cs() && e.callbackNode !== n)
        return null;
    var r = ba(e, e === Ne ? Me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = $a(e, r);
    else {
        t = r;
        var s = Z;
        Z |= 2;
        var o = d0();
        (Ne !== e || Me !== t) && (un = null,
        $s = ve() + 500,
        Dr(e, t));
        do
            try {
                Lb();
                break
            } catch (a) {
                c0(e, a)
            }
        while (!0);
        tf(),
        _a.current = o,
        Z = s,
        Ce !== null ? t = 0 : (Ne = null,
        Me = 0,
        t = Te)
    }
    if (t !== 0) {
        if (t === 2 && (s = cc(e),
        s !== 0 && (r = s,
        t = _c(e, s))),
        t === 1)
            throw n = Xo,
            Dr(e, 0),
            _n(e, r),
            tt(e, ve()),
            n;
        if (t === 6)
            _n(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !Mb(s) && (t = $a(e, r),
            t === 2 && (o = cc(e),
            o !== 0 && (r = o,
            t = _c(e, o))),
            t === 1))
                throw n = Xo,
                Dr(e, 0),
                _n(e, r),
                tt(e, ve()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                wr(e, Xe, un);
                break;
            case 3:
                if (_n(e, r),
                (r & 130023424) === r && (t = yf + 500 - ve(),
                10 < t)) {
                    if (ba(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        Ge(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = vc(wr.bind(null, e, Xe, un), t);
                    break
                }
                wr(e, Xe, un);
                break;
            case 4:
                if (_n(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var i = 31 - It(r);
                    o = 1 << i,
                    i = t[i],
                    i > s && (s = i),
                    r &= ~o
                }
                if (r = s,
                r = ve() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jb(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = vc(wr.bind(null, e, Xe, un), r);
                    break
                }
                wr(e, Xe, un);
                break;
            case 5:
                wr(e, Xe, un);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return tt(e, ve()),
    e.callbackNode === n ? u0.bind(null, e) : null
}
function _c(e, t) {
    var n = ko;
    return e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256),
    e = $a(e, t),
    e !== 2 && (t = Xe,
    Xe = n,
    t !== null && Vc(t)),
    e
}
function Vc(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e)
}
function Mb(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , o = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Vt(o(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function _n(e, t) {
    for (t &= ~gf,
    t &= ~yl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - It(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function _p(e) {
    if (Z & 6)
        throw Error(D(327));
    Cs();
    var t = ba(e, 0);
    if (!(t & 1))
        return tt(e, ve()),
        null;
    var n = $a(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = cc(e);
        r !== 0 && (t = r,
        n = _c(e, r))
    }
    if (n === 1)
        throw n = Xo,
        Dr(e, 0),
        _n(e, t),
        tt(e, ve()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    wr(e, Xe, un),
    tt(e, ve()),
    null
}
function vf(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && ($s = ve() + 500,
        hl && hr())
    }
}
function zr(e) {
    Hn !== null && Hn.tag === 0 && !(Z & 6) && Cs();
    var t = Z;
    Z |= 1;
    var n = xt.transition
      , r = ne;
    try {
        if (xt.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = r,
        xt.transition = n,
        Z = t,
        !(Z & 6) && hr()
    }
}
function xf() {
    st = ds.current,
    ae(ds)
}
function Dr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    lb(n)),
    Ce !== null)
        for (n = Ce.return; n !== null; ) {
            var r = n;
            switch (Zd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Aa();
                break;
            case 3:
                Vs(),
                ae(Je),
                ae($e),
                lf();
                break;
            case 5:
                af(r);
                break;
            case 4:
                Vs();
                break;
            case 13:
                ae(de);
                break;
            case 19:
                ae(de);
                break;
            case 10:
                nf(r.type._context);
                break;
            case 22:
            case 23:
                xf()
            }
            n = n.return
        }
    if (Ne = e,
    Ce = e = nr(e.current, null),
    Me = st = t,
    Te = 0,
    Xo = null,
    gf = yl = Vr = 0,
    Xe = ko = null,
    br !== null) {
        for (t = 0; t < br.length; t++)
            if (n = br[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = s,
                    r.next = i
                }
                n.pending = r
            }
        br = null
    }
    return e
}
function c0(e, t) {
    do {
        var n = Ce;
        try {
            if (tf(),
            sa.current = Fa,
            Ia) {
                for (var r = he.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Ia = !1
            }
            if (_r = 0,
            Ae = Ee = he = null,
            To = !1,
            Yo = 0,
            mf.current = null,
            n === null || n.return === null) {
                Te = 1,
                Xo = t,
                Ce = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = Me,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = Tp(i);
                    if (h !== null) {
                        h.flags &= -257,
                        Pp(h, i, a, o, t),
                        h.mode & 1 && Ep(o, u, t),
                        t = h,
                        l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ep(o, u, t),
                            wf();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (ue && a.mode & 1) {
                    var w = Tp(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Pp(w, i, a, o, t),
                        Jd(zs(l, a));
                        break e
                    }
                }
                o = l = zs(l, a),
                Te !== 4 && (Te = 2),
                ko === null ? ko = [o] : ko.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = Gv(o, l, t);
                        vp(o, g);
                        break e;
                    case 1:
                        a = l;
                        var m = o.type
                          , v = o.stateNode;
                        if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (er === null || !er.has(v)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var C = Yv(o, a, t);
                            vp(o, C);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            h0(n)
        } catch (b) {
            t = b,
            Ce === n && n !== null && (Ce = n = n.return);
            continue
        }
        break
    } while (!0)
}
function d0() {
    var e = _a.current;
    return _a.current = Fa,
    e === null ? Fa : e
}
function wf() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Ne === null || !(Vr & 268435455) && !(yl & 268435455) || _n(Ne, Me)
}
function $a(e, t) {
    var n = Z;
    Z |= 2;
    var r = d0();
    (Ne !== e || Me !== t) && (un = null,
    Dr(e, t));
    do
        try {
            Db();
            break
        } catch (s) {
            c0(e, s)
        }
    while (!0);
    if (tf(),
    Z = n,
    _a.current = r,
    Ce !== null)
        throw Error(D(261));
    return Ne = null,
    Me = 0,
    Te
}
function Db() {
    for (; Ce !== null; )
        f0(Ce)
}
function Lb() {
    for (; Ce !== null && !oC(); )
        f0(Ce)
}
function f0(e) {
    var t = m0(e.alternate, e, st);
    e.memoizedProps = e.pendingProps,
    t === null ? h0(e) : Ce = t,
    mf.current = null
}
function h0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = kb(n, t),
            n !== null) {
                n.flags &= 32767,
                Ce = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Te = 6,
                Ce = null;
                return
            }
        } else if (n = Pb(n, t, st),
        n !== null) {
            Ce = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ce = t;
            return
        }
        Ce = t = e
    } while (t !== null);
    Te === 0 && (Te = 5)
}
function wr(e, t, n) {
    var r = ne
      , s = xt.transition;
    try {
        xt.transition = null,
        ne = 1,
        Ob(e, t, n, r)
    } finally {
        xt.transition = s,
        ne = r
    }
    return null
}
function Ob(e, t, n, r) {
    do
        Cs();
    while (Hn !== null);
    if (Z & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (mC(e, o),
    e === Ne && (Ce = Ne = null,
    Me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vi || (Vi = !0,
    g0(Ca, function() {
        return Cs(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = xt.transition,
        xt.transition = null;
        var i = ne;
        ne = 1;
        var a = Z;
        Z |= 4,
        mf.current = null,
        Nb(e, n),
        a0(n, e),
        tb(gc),
        Ea = !!mc,
        gc = mc = null,
        e.current = n,
        Rb(n),
        iC(),
        Z = a,
        ne = i,
        xt.transition = o
    } else
        e.current = n;
    if (Vi && (Vi = !1,
    Hn = e,
    za = s),
    o = e.pendingLanes,
    o === 0 && (er = null),
    uC(n.stateNode),
    tt(e, ve()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (Va)
        throw Va = !1,
        e = Ic,
        Ic = null,
        e;
    return za & 1 && e.tag !== 0 && Cs(),
    o = e.pendingLanes,
    o & 1 ? e === Fc ? Ao++ : (Ao = 0,
    Fc = e) : Ao = 0,
    hr(),
    null
}
function Cs() {
    if (Hn !== null) {
        var e = Gy(za)
          , t = xt.transition
          , n = ne;
        try {
            if (xt.transition = null,
            ne = 16 > e ? 16 : e,
            Hn === null)
                var r = !1;
            else {
                if (e = Hn,
                Hn = null,
                za = 0,
                Z & 6)
                    throw Error(D(331));
                var s = Z;
                for (Z |= 4,
                F = e.current; F !== null; ) {
                    var o = F
                      , i = o.child;
                    if (F.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null; ) {
                                    var c = F;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Po(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        F = d;
                                    else
                                        for (; F !== null; ) {
                                            c = F;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (s0(c),
                                            c === u) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                F = f;
                                                break
                                            }
                                            F = h
                                        }
                                }
                            }
                            var x = o.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null,
                                        y = w
                                    } while (y !== null)
                                }
                            }
                            F = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        F = i;
                    else
                        e: for (; F !== null; ) {
                            if (o = F,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Po(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                F = g;
                                break e
                            }
                            F = o.return
                        }
                }
                var m = e.current;
                for (F = m; F !== null; ) {
                    i = F;
                    var v = i.child;
                    if (i.subtreeFlags & 2064 && v !== null)
                        v.return = i,
                        F = v;
                    else
                        e: for (i = m; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gl(9, a)
                                    }
                                } catch (b) {
                                    ge(a, a.return, b)
                                }
                            if (a === i) {
                                F = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                F = C;
                                break e
                            }
                            F = a.return
                        }
                }
                if (Z = s,
                hr(),
                Jt && typeof Jt.onPostCommitFiberRoot == "function")
                    try {
                        Jt.onPostCommitFiberRoot(ll, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            xt.transition = t
        }
    }
    return !1
}
function Vp(e, t, n) {
    t = zs(n, t),
    t = Gv(e, t, 1),
    e = Jn(e, t, 1),
    t = Ge(),
    e !== null && (ui(e, 1, t),
    tt(e, t))
}
function ge(e, t, n) {
    if (e.tag === 3)
        Vp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (er === null || !er.has(r))) {
                    e = zs(n, e),
                    e = Yv(t, e, 1),
                    t = Jn(t, e, 1),
                    e = Ge(),
                    t !== null && (ui(t, 1, e),
                    tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ib(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ge(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ne === e && (Me & n) === n && (Te === 4 || Te === 3 && (Me & 130023424) === Me && 500 > ve() - yf ? Dr(e, 0) : gf |= n),
    tt(e, t)
}
function p0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ni,
    Ni <<= 1,
    !(Ni & 130023424) && (Ni = 4194304)) : t = 1);
    var n = Ge();
    e = yn(e, t),
    e !== null && (ui(e, t, n),
    tt(e, n))
}
function Fb(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    p0(e, n)
}
function _b(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    p0(e, n)
}
var m0;
m0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Je.current)
            Ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ze = !1,
                Tb(e, t, n);
            Ze = !!(e.flags & 131072)
        }
    else
        Ze = !1,
        ue && t.flags & 1048576 && xv(t, ja, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ia(e, t),
        e = t.pendingProps;
        var s = Is(t, $e.current);
        Ss(t, n),
        s = cf(null, t, r, e, s, n);
        var o = df();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        et(r) ? (o = !0,
        Na(t)) : o = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        sf(t),
        s.updater = ml,
        t.stateNode = s,
        s._reactInternals = t,
        Tc(t, r, e, n),
        t = Ac(null, t, r, !0, o, n)) : (t.tag = 0,
        ue && o && Xd(t),
        Ue(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ia(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = zb(r),
            e = Rt(r, e),
            s) {
            case 0:
                t = kc(null, t, r, e, n);
                break e;
            case 1:
                t = Np(null, t, r, e, n);
                break e;
            case 11:
                t = kp(null, t, r, e, n);
                break e;
            case 14:
                t = Ap(null, t, r, Rt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Rt(r, s),
        kc(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Rt(r, s),
        Np(e, t, r, s, n);
    case 3:
        e: {
            if (Zv(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            o = t.memoizedState,
            s = o.element,
            Tv(e, t),
            La(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    s = zs(Error(D(423)), t),
                    t = Rp(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = zs(Error(D(424)), t),
                    t = Rp(e, t, r, n, s);
                    break e
                } else
                    for (it = Zn(t.stateNode.containerInfo.firstChild),
                    at = t,
                    ue = !0,
                    Ot = null,
                    n = bv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fs(),
                r === s) {
                    t = vn(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Pv(t),
        e === null && Cc(t),
        r = t.type,
        s = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = s.children,
        yc(r, s) ? i = null : o !== null && yc(r, o) && (t.flags |= 32),
        Xv(e, t),
        Ue(e, t, i, n),
        t.child;
    case 6:
        return e === null && Cc(t),
        null;
    case 13:
        return Jv(e, t, n);
    case 4:
        return of(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = _s(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Rt(r, s),
        kp(e, t, r, s, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            o = t.memoizedProps,
            i = s.value,
            se(Ma, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Vt(o.value, i)) {
                    if (o.children === s.children && !Je.current) {
                        t = vn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            i = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = pn(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    bc(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(D(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            bc(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            Ue(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        Ss(t, n),
        s = St(s),
        r = r(s),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = Rt(r, t.pendingProps),
        s = Rt(r.type, s),
        Ap(e, t, r, s, n);
    case 15:
        return Qv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Rt(r, s),
        ia(e, t),
        t.tag = 1,
        et(r) ? (e = !0,
        Na(t)) : e = !1,
        Ss(t, n),
        Kv(t, r, s),
        Tc(t, r, s, n),
        Ac(null, t, r, !0, e, n);
    case 19:
        return e0(e, t, n);
    case 22:
        return qv(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function g0(e, t) {
    return Uy(e, t)
}
function Vb(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function yt(e, t, n, r) {
    return new Vb(e,t,n,r)
}
function Sf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function zb(e) {
    if (typeof e == "function")
        return Sf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Vd)
            return 11;
        if (e === zd)
            return 14
    }
    return 2
}
function nr(e, t) {
    var n = e.alternate;
    return n === null ? (n = yt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ua(e, t, n, r, s, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Sf(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case ts:
            return Lr(n.children, s, o, t);
        case _d:
            i = 8,
            s |= 8;
            break;
        case Qu:
            return e = yt(12, n, t, s | 2),
            e.elementType = Qu,
            e.lanes = o,
            e;
        case qu:
            return e = yt(13, n, t, s),
            e.elementType = qu,
            e.lanes = o,
            e;
        case Xu:
            return e = yt(19, n, t, s),
            e.elementType = Xu,
            e.lanes = o,
            e;
        case Py:
            return vl(n, s, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ey:
                    i = 10;
                    break e;
                case Ty:
                    i = 9;
                    break e;
                case Vd:
                    i = 11;
                    break e;
                case zd:
                    i = 14;
                    break e;
                case On:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = yt(i, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Lr(e, t, n, r) {
    return e = yt(7, e, r, t),
    e.lanes = n,
    e
}
function vl(e, t, n, r) {
    return e = yt(22, e, r, t),
    e.elementType = Py,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Su(e, t, n) {
    return e = yt(6, e, null, t),
    e.lanes = n,
    e
}
function Cu(e, t, n) {
    return t = yt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function $b(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = nu(0),
    this.expirationTimes = nu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = nu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Cf(e, t, n, r, s, o, i, a, l) {
    return e = new $b(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = yt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    sf(o),
    e
}
function Bb(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: es,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function y0(e) {
    if (!e)
        return sr;
    e = e._reactInternals;
    e: {
        if (Wr(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (et(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n))
            return yv(e, n, t)
    }
    return t
}
function v0(e, t, n, r, s, o, i, a, l) {
    return e = Cf(n, r, !0, e, s, o, i, a, l),
    e.context = y0(null),
    n = e.current,
    r = Ge(),
    s = tr(n),
    o = pn(r, s),
    o.callback = t ?? null,
    Jn(n, o, s),
    e.current.lanes = s,
    ui(e, s, r),
    tt(e, r),
    e
}
function xl(e, t, n, r) {
    var s = t.current
      , o = Ge()
      , i = tr(s);
    return n = y0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = pn(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Jn(s, t, i),
    e !== null && (Ft(e, s, i, o),
    ra(e, s, i)),
    i
}
function Ba(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function zp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function bf(e, t) {
    zp(e, t),
    (e = e.alternate) && zp(e, t)
}
function Ub() {
    return null
}
var x0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ef(e) {
    this._internalRoot = e
}
wl.prototype.render = Ef.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    xl(e, t, null, null)
}
;
wl.prototype.unmount = Ef.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zr(function() {
            xl(null, e, null, null)
        }),
        t[gn] = null
    }
}
;
function wl(e) {
    this._internalRoot = e
}
wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = qy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++)
            ;
        Fn.splice(n, 0, e),
        n === 0 && Zy(e)
    }
}
;
function Tf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function $p() {}
function Wb(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Ba(i);
                o.call(u)
            }
        }
        var i = v0(t, r, e, 0, null, !1, !1, "", $p);
        return e._reactRootContainer = i,
        e[gn] = i.current,
        Uo(e.nodeType === 8 ? e.parentNode : e),
        zr(),
        i
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ba(l);
            a.call(u)
        }
    }
    var l = Cf(e, 0, !1, null, null, !1, !1, "", $p);
    return e._reactRootContainer = l,
    e[gn] = l.current,
    Uo(e.nodeType === 8 ? e.parentNode : e),
    zr(function() {
        xl(t, l, n, r)
    }),
    l
}
function Cl(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = Ba(i);
                a.call(l)
            }
        }
        xl(t, i, e, s)
    } else
        i = Wb(n, t, e, s, r);
    return Ba(i)
}
Yy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = yo(t.pendingLanes);
            n !== 0 && (Ud(t, n | 1),
            tt(t, ve()),
            !(Z & 6) && ($s = ve() + 500,
            hr()))
        }
        break;
    case 13:
        zr(function() {
            var r = yn(e, 1);
            if (r !== null) {
                var s = Ge();
                Ft(r, e, 1, s)
            }
        }),
        bf(e, 1)
    }
}
;
Wd = function(e) {
    if (e.tag === 13) {
        var t = yn(e, 134217728);
        if (t !== null) {
            var n = Ge();
            Ft(t, e, 134217728, n)
        }
        bf(e, 134217728)
    }
}
;
Qy = function(e) {
    if (e.tag === 13) {
        var t = tr(e)
          , n = yn(e, t);
        if (n !== null) {
            var r = Ge();
            Ft(n, e, t, r)
        }
        bf(e, t)
    }
}
;
qy = function() {
    return ne
}
;
Xy = function(e, t) {
    var n = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = n
    }
}
;
ac = function(e, t, n) {
    switch (t) {
    case "input":
        if (ec(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = fl(r);
                    if (!s)
                        throw Error(D(90));
                    Ay(r),
                    ec(r, s)
                }
            }
        }
        break;
    case "textarea":
        Ry(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ys(e, !!n.multiple, t, !1)
    }
}
;
Fy = vf;
_y = zr;
var Hb = {
    usingClientEntryPoint: !1,
    Events: [di, os, fl, Oy, Iy, vf]
}
  , co = {
    findFiberByHostInstance: Cr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Kb = {
    bundleType: co.bundleType,
    version: co.version,
    rendererPackageName: co.rendererPackageName,
    rendererConfig: co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = $y(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: co.findFiberByHostInstance || Ub,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zi.isDisabled && zi.supportsFiber)
        try {
            ll = zi.inject(Kb),
            Jt = zi
        } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hb;
dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Tf(t))
        throw Error(D(200));
    return Bb(e, t, null, n)
}
;
dt.createRoot = function(e, t) {
    if (!Tf(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , s = x0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Cf(e, 1, !1, null, null, n, !1, r, s),
    e[gn] = t.current,
    Uo(e.nodeType === 8 ? e.parentNode : e),
    new Ef(t)
}
;
dt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = $y(t),
    e = e === null ? null : e.stateNode,
    e
}
;
dt.flushSync = function(e) {
    return zr(e)
}
;
dt.hydrate = function(e, t, n) {
    if (!Sl(t))
        throw Error(D(200));
    return Cl(null, e, t, !0, n)
}
;
dt.hydrateRoot = function(e, t, n) {
    if (!Tf(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , o = ""
      , i = x0;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = v0(t, null, e, 1, n ?? null, s, !1, o, i),
    e[gn] = t.current,
    Uo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new wl(t)
}
;
dt.render = function(e, t, n) {
    if (!Sl(t))
        throw Error(D(200));
    return Cl(null, e, t, !1, n)
}
;
dt.unmountComponentAtNode = function(e) {
    if (!Sl(e))
        throw Error(D(40));
    return e._reactRootContainer ? (zr(function() {
        Cl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[gn] = null
        })
    }),
    !0) : !1
}
;
dt.unstable_batchedUpdates = vf;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sl(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return Cl(e, t, n, !1, r)
}
;
dt.version = "18.3.1-next-f1338f8080-20240426";
function w0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)
        } catch (e) {
            console.error(e)
        }
}
w0(),
wy.exports = dt;
var hi = wy.exports;
const S0 = ly(hi);
var C0, Bp = hi;
C0 = Bp.createRoot,
Bp.hydrateRoot;
const Gb = 1
  , Yb = 1e6;
let bu = 0;
function Qb() {
    return bu = (bu + 1) % Number.MAX_SAFE_INTEGER,
    bu.toString()
}
const Eu = new Map
  , Up = e => {
    if (Eu.has(e))
        return;
    const t = setTimeout( () => {
        Eu.delete(e),
        No({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Yb);
    Eu.set(e, t)
}
  , qb = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Gb)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Up(n) : e.toasts.forEach(r => {
                Up(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ca = [];
let da = {
    toasts: []
};
function No(e) {
    da = qb(da, e),
    ca.forEach(t => {
        t(da)
    }
    )
}
function Xb({...e}) {
    const t = Qb()
      , n = s => No({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: t
        }
    })
      , r = () => No({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return No({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: s => {
                s || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Zb() {
    const [e,t] = S.useState(da);
    return S.useEffect( () => (ca.push(t),
    () => {
        const n = ca.indexOf(t);
        n > -1 && ca.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Xb,
        dismiss: n => No({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function xe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(s) {
        if (e == null || e(s),
        n === !1 || !s.defaultPrevented)
            return t == null ? void 0 : t(s)
    }
}
function Wp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function b0(...e) {
    return t => {
        let n = !1;
        const r = e.map(s => {
            const o = Wp(s, t);
            return !n && typeof o == "function" && (n = !0),
            o
        }
        );
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const o = r[s];
                    typeof o == "function" ? o() : Wp(e[s], null)
                }
            }
    }
}
function ct(...e) {
    return S.useCallback(b0(...e), e)
}
function Ys(e, t=[]) {
    let n = [];
    function r(o, i) {
        const a = S.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = d => {
            var g;
            const {scope: f, children: h, ...x} = d
              , y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , w = S.useMemo( () => x, Object.values(x));
            return p.jsx(y.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = o + "Provider";
        function c(d, f) {
            var y;
            const h = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
              , x = S.useContext(h);
            if (x)
                return x;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${o}\``)
        }
        return [u, c]
    }
    const s = () => {
        const o = n.map(i => S.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return S.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, Jb(s, ...t)]
}
function Jb(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(o)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return S.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function zc(e) {
    const t = eE(e)
      , n = S.forwardRef( (r, s) => {
        const {children: o, ...i} = r
          , a = S.Children.toArray(o)
          , l = a.find(nE);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? S.Children.count(u) > 1 ? S.Children.only(null) : S.isValidElement(u) ? u.props.children : null : d);
            return p.jsx(t, {
                ...i,
                ref: s,
                children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null
            })
        }
        return p.jsx(t, {
            ...i,
            ref: s,
            children: o
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function eE(e) {
    const t = S.forwardRef( (n, r) => {
        const {children: s, ...o} = n;
        if (S.isValidElement(s)) {
            const i = sE(s)
              , a = rE(o, s.props);
            return s.type !== S.Fragment && (a.ref = r ? b0(r, i) : i),
            S.cloneElement(s, a)
        }
        return S.Children.count(s) > 1 ? S.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var E0 = Symbol("radix.slottable");
function tE(e) {
    const t = ({children: n}) => p.jsx(p.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = E0,
    t
}
function nE(e) {
    return S.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === E0
}
function rE(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const s = e[r]
          , o = t[r];
        /^on[A-Z]/.test(r) ? s && o ? n[r] = (...a) => {
            const l = o(...a);
            return s(...a),
            l
        }
        : s && (n[r] = s) : r === "style" ? n[r] = {
            ...s,
            ...o
        } : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function sE(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function T0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Ys(t)
      , [s,o] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = y => {
        const {scope: w, children: g} = y
          , m = M.useRef(null)
          , v = M.useRef(new Map).current;
        return p.jsx(s, {
            scope: w,
            itemMap: v,
            collectionRef: m,
            children: g
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = zc(a)
      , u = M.forwardRef( (y, w) => {
        const {scope: g, children: m} = y
          , v = o(a, g)
          , C = ct(w, v.collectionRef);
        return p.jsx(l, {
            ref: C,
            children: m
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = zc(c)
      , h = M.forwardRef( (y, w) => {
        const {scope: g, children: m, ...v} = y
          , C = M.useRef(null)
          , b = ct(w, C)
          , E = o(c, g);
        return M.useEffect( () => (E.itemMap.set(C, {
            ref: C,
            ...v
        }),
        () => void E.itemMap.delete(C))),
        p.jsx(f, {
            [d]: "",
            ref: b,
            children: m
        })
    }
    );
    h.displayName = c;
    function x(y) {
        const w = o(e + "CollectionConsumer", y);
        return M.useCallback( () => {
            const m = w.collectionRef.current;
            if (!m)
                return [];
            const v = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (E, T) => v.indexOf(E.ref.current) - v.indexOf(T.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: h
    }, x, r]
}
var oE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Pe = oE.reduce( (e, t) => {
    const n = zc(`Primitive.${t}`)
      , r = S.forwardRef( (s, o) => {
        const {asChild: i, ...a} = s
          , l = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(l, {
            ...a,
            ref: o
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function P0(e, t) {
    e && hi.flushSync( () => e.dispatchEvent(t))
}
function or(e) {
    const t = S.useRef(e);
    return S.useEffect( () => {
        t.current = e
    }
    ),
    S.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function iE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = or(e);
    S.useEffect( () => {
        const r = s => {
            s.key === "Escape" && n(s)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var aE = "DismissableLayer", $c = "dismissableLayer.update", lE = "dismissableLayer.pointerDownOutside", uE = "dismissableLayer.focusOutside", Hp, k0 = S.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Pf = S.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: o, onInteractOutside: i, onDismiss: a, ...l} = e
      , u = S.useContext(k0)
      , [c,d] = S.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = S.useState({})
      , x = ct(t, T => d(T))
      , y = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = y.indexOf(w)
      , m = c ? y.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = m >= g
      , b = dE(T => {
        const P = T.target
          , R = [...u.branches].some(j => j.contains(P));
        !C || R || (s == null || s(T),
        i == null || i(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , E = fE(T => {
        const P = T.target;
        [...u.branches].some(j => j.contains(P)) || (o == null || o(T),
        i == null || i(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return iE(T => {
        m === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    S.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Hp = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Kp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Hp)
            }
    }
    , [c, f, n, u]),
    S.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Kp())
    }
    , [c, u]),
    S.useEffect( () => {
        const T = () => h({});
        return document.addEventListener($c, T),
        () => document.removeEventListener($c, T)
    }
    , []),
    p.jsx(Pe.div, {
        ...l,
        ref: x,
        style: {
            pointerEvents: v ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: xe(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: xe(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
Pf.displayName = aE;
var cE = "DismissableLayerBranch"
  , A0 = S.forwardRef( (e, t) => {
    const n = S.useContext(k0)
      , r = S.useRef(null)
      , s = ct(t, r);
    return S.useEffect( () => {
        const o = r.current;
        if (o)
            return n.branches.add(o),
            () => {
                n.branches.delete(o)
            }
    }
    , [n.branches]),
    p.jsx(Pe.div, {
        ...e,
        ref: s
    })
}
);
A0.displayName = cE;
function dE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = or(e)
      , r = S.useRef(!1)
      , s = S.useRef( () => {}
    );
    return S.useEffect( () => {
        const o = a => {
            if (a.target && !r.current) {
                let l = function() {
                    N0(lE, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = l,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", s.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", o)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", o),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function fE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = or(e)
      , r = S.useRef(!1);
    return S.useEffect( () => {
        const s = o => {
            o.target && !r.current && N0(uE, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Kp() {
    const e = new CustomEvent($c);
    document.dispatchEvent(e)
}
function N0(e, t, n, {discrete: r}) {
    const s = n.originalEvent.target
      , o = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? P0(s, o) : s.dispatchEvent(o)
}
var hE = Pf
  , pE = A0
  , nn = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {}
  , mE = "Portal"
  , R0 = S.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [s,o] = S.useState(!1);
    nn( () => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? S0.createPortal(p.jsx(Pe.div, {
        ...r,
        ref: t
    }), i) : null
}
);
R0.displayName = mE;
function gE(e, t) {
    return S.useReducer( (n, r) => t[n][r] ?? n, e)
}
var bl = e => {
    const {present: t, children: n} = e
      , r = yE(t)
      , s = typeof n == "function" ? n({
        present: r.isPresent
    }) : S.Children.only(n)
      , o = ct(r.ref, vE(s));
    return typeof n == "function" || r.isPresent ? S.cloneElement(s, {
        ref: o
    }) : null
}
;
bl.displayName = "Presence";
function yE(e) {
    const [t,n] = S.useState()
      , r = S.useRef(null)
      , s = S.useRef(e)
      , o = S.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = gE(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect( () => {
        const u = $i(r.current);
        o.current = a === "mounted" ? u : "none"
    }
    , [a]),
    nn( () => {
        const u = r.current
          , c = s.current;
        if (c !== e) {
            const f = o.current
              , h = $i(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = e
        }
    }
    , [e, l]),
    nn( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const y = $i(r.current).includes(h.animationName);
                if (h.target === t && y && (l("ANIMATION_END"),
                !s.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (o.current = $i(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: S.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function $i(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function vE(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var xE = Ld[" useInsertionEffect ".trim().toString()] || nn;
function El({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [s,o,i] = wE({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : s;
    {
        const c = S.useRef(e !== void 0);
        S.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = S.useCallback(c => {
        var d;
        if (a) {
            const f = SE(c) ? c(e) : c;
            f !== e && ((d = i.current) == null || d.call(i, f))
        } else
            o(c)
    }
    , [a, e, o, i]);
    return [l, u]
}
function wE({defaultProp: e, onChange: t}) {
    const [n,r] = S.useState(e)
      , s = S.useRef(n)
      , o = S.useRef(t);
    return xE( () => {
        o.current = t
    }
    , [t]),
    S.useEffect( () => {
        var i;
        s.current !== n && ((i = o.current) == null || i.call(o, n),
        s.current = n)
    }
    , [n, s]),
    [n, r, o]
}
function SE(e) {
    return typeof e == "function"
}
var CE = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , bE = "VisuallyHidden"
  , Tl = S.forwardRef( (e, t) => p.jsx(Pe.span, {
    ...e,
    ref: t,
    style: {
        ...CE,
        ...e.style
    }
}));
Tl.displayName = bE;
var EE = Tl
  , kf = "ToastProvider"
  , [Af,TE,PE] = T0("Toast")
  , [j0,fL] = Ys("Toast", [PE])
  , [kE,Pl] = j0(kf)
  , M0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: s="right", swipeThreshold: o=50, children: i} = e
      , [a,l] = S.useState(null)
      , [u,c] = S.useState(0)
      , d = S.useRef(!1)
      , f = S.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${kf}\`. Expected non-empty \`string\`.`),
    p.jsx(Af.Provider, {
        scope: t,
        children: p.jsx(kE, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: s,
            swipeThreshold: o,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: S.useCallback( () => c(h => h + 1), []),
            onToastRemove: S.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: i
        })
    })
}
;
M0.displayName = kf;
var D0 = "ToastViewport"
  , AE = ["F8"]
  , Bc = "toast.viewportPause"
  , Uc = "toast.viewportResume"
  , L0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=AE, label: s="Notifications ({hotkey})", ...o} = e
      , i = Pl(D0, n)
      , a = TE(n)
      , l = S.useRef(null)
      , u = S.useRef(null)
      , c = S.useRef(null)
      , d = S.useRef(null)
      , f = ct(t, d, i.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = i.toastCount > 0;
    S.useEffect( () => {
        const w = g => {
            var v;
            r.length !== 0 && r.every(C => g[C] || g.code === C) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    S.useEffect( () => {
        const w = l.current
          , g = d.current;
        if (x && w && g) {
            const m = () => {
                if (!i.isClosePausedRef.current) {
                    const E = new CustomEvent(Bc);
                    g.dispatchEvent(E),
                    i.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (i.isClosePausedRef.current) {
                    const E = new CustomEvent(Uc);
                    g.dispatchEvent(E),
                    i.isClosePausedRef.current = !1
                }
            }
              , C = E => {
                !w.contains(E.relatedTarget) && v()
            }
              , b = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", m),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", b),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [x, i.isClosePausedRef]);
    const y = S.useCallback( ({tabbingDirection: w}) => {
        const m = a().map(v => {
            const C = v.ref.current
              , b = [C, ...$E(C)];
            return w === "forwards" ? b : b.reverse()
        }
        );
        return (w === "forwards" ? m.reverse() : m).flat()
    }
    , [a]);
    return S.useEffect( () => {
        const w = d.current;
        if (w) {
            const g = m => {
                var b, E, T;
                const v = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !v) {
                    const P = document.activeElement
                      , R = m.shiftKey;
                    if (m.target === w && R) {
                        (b = u.current) == null || b.focus();
                        return
                    }
                    const I = y({
                        tabbingDirection: R ? "backwards" : "forwards"
                    })
                      , K = I.findIndex(L => L === P);
                    Tu(I.slice(K + 1)) ? m.preventDefault() : R ? (E = u.current) == null || E.focus() : (T = c.current) == null || T.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [a, y]),
    p.jsxs(pE, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && p.jsx(Wc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "forwards"
                });
                Tu(w)
            }
        }), p.jsx(Af.Slot, {
            scope: n,
            children: p.jsx(Pe.ol, {
                tabIndex: -1,
                ...o,
                ref: f
            })
        }), x && p.jsx(Wc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "backwards"
                });
                Tu(w)
            }
        })]
    })
}
);
L0.displayName = D0;
var O0 = "ToastFocusProxy"
  , Wc = S.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...s} = e
      , o = Pl(O0, n);
    return p.jsx(Tl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const a = i.relatedTarget;
            !((u = o.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Wc.displayName = O0;
var pi = "Toast"
  , NE = "toast.swipeStart"
  , RE = "toast.swipeMove"
  , jE = "toast.swipeCancel"
  , ME = "toast.swipeEnd"
  , I0 = S.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: s, onOpenChange: o, ...i} = e
      , [a,l] = El({
        prop: r,
        defaultProp: s ?? !0,
        onChange: o,
        caller: pi
    });
    return p.jsx(bl, {
        present: n || a,
        children: p.jsx(OE, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: or(e.onPause),
            onResume: or(e.onResume),
            onSwipeStart: xe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: xe(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: xe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: xe(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
I0.displayName = pi;
var [DE,LE] = j0(pi, {
    onClose() {}
})
  , OE = S.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: s, open: o, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...x} = e
      , y = Pl(pi, n)
      , [w,g] = S.useState(null)
      , m = ct(t, L => g(L))
      , v = S.useRef(null)
      , C = S.useRef(null)
      , b = s || y.duration
      , E = S.useRef(0)
      , T = S.useRef(b)
      , P = S.useRef(0)
      , {onToastAdd: R, onToastRemove: j} = y
      , z = or( () => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = y.viewport) == null || Y.focus()),
        i()
    }
    )
      , I = S.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(P.current),
        E.current = new Date().getTime(),
        P.current = window.setTimeout(z, L))
    }
    , [z]);
    S.useEffect( () => {
        const L = y.viewport;
        if (L) {
            const Y = () => {
                I(T.current),
                u == null || u()
            }
              , B = () => {
                const V = new Date().getTime() - E.current;
                T.current = T.current - V,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return L.addEventListener(Bc, B),
            L.addEventListener(Uc, Y),
            () => {
                L.removeEventListener(Bc, B),
                L.removeEventListener(Uc, Y)
            }
        }
    }
    , [y.viewport, b, l, u, I]),
    S.useEffect( () => {
        o && !y.isClosePausedRef.current && I(b)
    }
    , [o, b, y.isClosePausedRef, I]),
    S.useEffect( () => (R(),
    () => j()), [R, j]);
    const K = S.useMemo( () => w ? U0(w) : null, [w]);
    return y.viewport ? p.jsxs(p.Fragment, {
        children: [K && p.jsx(IE, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), p.jsx(DE, {
            scope: n,
            onClose: z,
            children: hi.createPortal(p.jsx(Af.ItemSlot, {
                scope: n,
                children: p.jsx(hE, {
                    asChild: !0,
                    onEscapeKeyDown: xe(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || z(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: p.jsx(Pe.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...x,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: xe(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent),
                            L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: xe(e.onPointerDown, L => {
                            L.button === 0 && (v.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }
                        ),
                        onPointerMove: xe(e.onPointerMove, L => {
                            if (!v.current)
                                return;
                            const Y = L.clientX - v.current.x
                              , B = L.clientY - v.current.y
                              , V = !!C.current
                              , k = ["left", "right"].includes(y.swipeDirection)
                              , N = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , O = k ? N(0, Y) : 0
                              , U = k ? 0 : N(0, B)
                              , $ = L.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: O,
                                y: U
                            }
                              , X = {
                                originalEvent: L,
                                delta: Q
                            };
                            V ? (C.current = Q,
                            Bi(RE, d, X, {
                                discrete: !1
                            })) : Gp(Q, y.swipeDirection, $) ? (C.current = Q,
                            Bi(NE, c, X, {
                                discrete: !1
                            }),
                            L.target.setPointerCapture(L.pointerId)) : (Math.abs(Y) > $ || Math.abs(B) > $) && (v.current = null)
                        }
                        ),
                        onPointerUp: xe(e.onPointerUp, L => {
                            const Y = C.current
                              , B = L.target;
                            if (B.hasPointerCapture(L.pointerId) && B.releasePointerCapture(L.pointerId),
                            C.current = null,
                            v.current = null,
                            Y) {
                                const V = L.currentTarget
                                  , k = {
                                    originalEvent: L,
                                    delta: Y
                                };
                                Gp(Y, y.swipeDirection, y.swipeThreshold) ? Bi(ME, h, k, {
                                    discrete: !0
                                }) : Bi(jE, f, k, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", N => N.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , IE = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , s = Pl(pi, t)
      , [o,i] = S.useState(!1)
      , [a,l] = S.useState(!1);
    return VE( () => i(!0)),
    S.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : p.jsx(R0, {
        asChild: !0,
        children: p.jsx(Tl, {
            ...r,
            children: o && p.jsxs(p.Fragment, {
                children: [s.label, " ", n]
            })
        })
    })
}
  , FE = "ToastTitle"
  , F0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(Pe.div, {
        ...r,
        ref: t
    })
}
);
F0.displayName = FE;
var _E = "ToastDescription"
  , _0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(Pe.div, {
        ...r,
        ref: t
    })
}
);
_0.displayName = _E;
var V0 = "ToastAction"
  , z0 = S.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? p.jsx(B0, {
        altText: n,
        asChild: !0,
        children: p.jsx(Nf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${V0}\`. Expected non-empty \`string\`.`),
    null)
}
);
z0.displayName = V0;
var $0 = "ToastClose"
  , Nf = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , s = LE($0, n);
    return p.jsx(B0, {
        asChild: !0,
        children: p.jsx(Pe.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: xe(e.onClick, s.onClose)
        })
    })
}
);
Nf.displayName = $0;
var B0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...s} = e;
    return p.jsx(Pe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...s,
        ref: t
    })
}
);
function U0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        zE(r)) {
            const s = r.ariaHidden || r.hidden || r.style.display === "none"
              , o = r.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (o) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...U0(r))
        }
    }
    ),
    t
}
function Bi(e, t, n, {discrete: r}) {
    const s = n.originalEvent.currentTarget
      , o = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? P0(s, o) : s.dispatchEvent(o)
}
var Gp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , s = Math.abs(e.y)
      , o = r > s;
    return t === "left" || t === "right" ? o && r > n : !o && s > n
}
;
function VE(e= () => {}
) {
    const t = or(e);
    nn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function zE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function $E(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Tu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var BE = M0
  , W0 = L0
  , H0 = I0
  , K0 = F0
  , G0 = _0
  , Y0 = z0
  , Q0 = Nf;
function q0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++)
                e[t] && (n = q0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function X0() {
    for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
        (e = arguments[n]) && (t = q0(e)) && (r && (r += " "),
        r += t);
    return r
}
const Yp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Qp = X0
  , UE = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Qp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: s, defaultVariants: o} = t
      , i = Object.keys(s).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = o == null ? void 0 : o[u];
        if (c === null)
            return null;
        const f = Yp(c) || Yp(d);
        return s[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(x => {
            let[y,w] = x;
            return Array.isArray(w) ? w.includes({
                ...o,
                ...a
            }[y]) : {
                ...o,
                ...a
            }[y] === w
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Qp(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Z0 = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var HE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = S.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: s="", children: o, iconNode: i, ...a}, l) => S.createElement("svg", {
    ref: l,
    ...HE,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Z0("lucide", s),
    ...a
}, [...i.map( ([u,c]) => S.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = (e, t) => {
    const n = S.forwardRef( ({className: r, ...s}, o) => S.createElement(KE, {
        ref: o,
        iconNode: t,
        className: Z0(`lucide-${WE(e)}`, r),
        ...s
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = ye("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GE = ye("BadgeCheck", [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YE = ye("Ban", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m4.9 4.9 14.2 14.2",
    key: "1m5liu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = ye("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = ye("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = ye("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = ye("CircleX", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZE = ye("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JE = ye("Landmark", [["line", {
    x1: "3",
    x2: "21",
    y1: "22",
    y2: "22",
    key: "j8o0r"
}], ["line", {
    x1: "6",
    x2: "6",
    y1: "18",
    y2: "11",
    key: "10tf0k"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "18",
    y2: "11",
    key: "54lgf6"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "18",
    y2: "11",
    key: "380y"
}], ["line", {
    x1: "18",
    x2: "18",
    y1: "18",
    y2: "11",
    key: "1kevvc"
}], ["polygon", {
    points: "12 2 20 7 4 7",
    key: "jkujk7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eT = ye("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tT = ye("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nT = ye("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = ye("Play", [["polygon", {
    points: "6 3 20 12 6 21 6 3",
    key: "1oa8hb"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rT = ye("Quote", [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sT = ye("Scale", [["path", {
    d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "7g6ntu"
}], ["path", {
    d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "ijws7r"
}], ["path", {
    d: "M7 21h10",
    key: "1b0cd5"
}], ["path", {
    d: "M12 3v18",
    key: "108xh3"
}], ["path", {
    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
    key: "3gwbw2"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = ye("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = ye("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iT = ye("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aT = ye("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lT = ye("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ua = ye("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = ye("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , jf = "-"
  , cT = e => {
    const t = fT(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(jf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            ex(a, t) || dT(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , ex = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , s = r ? ex(e.slice(1), r) : void 0;
    if (s)
        return s;
    if (t.validators.length === 0)
        return;
    const o = e.join(jf);
    return (i = t.validators.find( ({validator: a}) => a(o))) == null ? void 0 : i.classGroupId
}
  , Xp = /^\[(.+)\]$/
  , dT = e => {
    if (Xp.test(e)) {
        const t = Xp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , fT = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return pT(Object.entries(e.classGroups), n).forEach( ([o,i]) => {
        Hc(i, r, o, t)
    }
    ),
    r
}
  , Hc = (e, t, n, r) => {
    e.forEach(s => {
        if (typeof s == "string") {
            const o = s === "" ? t : Zp(t, s);
            o.classGroupId = n;
            return
        }
        if (typeof s == "function") {
            if (hT(s)) {
                Hc(s(r), t, n, r);
                return
            }
            t.validators.push({
                validator: s,
                classGroupId: n
            });
            return
        }
        Object.entries(s).forEach( ([o,i]) => {
            Hc(i, Zp(t, o), n, r)
        }
        )
    }
    )
}
  , Zp = (e, t) => {
    let n = e;
    return t.split(jf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , hT = e => e.isThemeGetter
  , pT = (e, t) => t ? e.map( ([n,r]) => {
    const s = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([i,a]) => [t + i, a])) : o);
    return [n, s]
}
) : e
  , mT = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const s = (o, i) => {
        n.set(o, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let i = n.get(o);
            if (i !== void 0)
                return i;
            if ((i = r.get(o)) !== void 0)
                return s(o, i),
                i
        },
        set(o, i) {
            n.has(o) ? n.set(o, i) : s(o, i)
        }
    }
}
  , tx = "!"
  , gT = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , s = t[0]
      , o = t.length
      , i = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (u === 0) {
                if (g === s && (r || a.slice(w, w + o) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + o;
                    continue
                }
                if (g === "/") {
                    d = w;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(tx)
          , x = h ? f.substring(1) : f
          , y = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: x,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , yT = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , vT = e => ({
    cache: mT(e.cacheSize),
    parseClassName: gT(e),
    ...cT(e)
})
  , xT = /\s+/
  , wT = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s} = t
      , o = []
      , i = e.trim().split(xT);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let x = !!h
          , y = r(x ? f.substring(0, h) : f);
        if (!y) {
            if (!x) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (y = r(f),
            !y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            x = !1
        }
        const w = yT(c).join(":")
          , g = d ? w + tx : w
          , m = g + y;
        if (o.includes(m))
            continue;
        o.push(m);
        const v = s(y, x);
        for (let C = 0; C < v.length; ++C) {
            const b = v[C];
            o.push(g + b)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function ST() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = nx(t)) && (r && (r += " "),
        r += n);
    return r
}
const nx = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = nx(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function CT(e, ...t) {
    let n, r, s, o = i;
    function i(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = vT(u),
        r = n.cache.get,
        s = n.cache.set,
        o = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = wT(l, n);
        return s(l, c),
        c
    }
    return function() {
        return o(ST.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , rx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , bT = /^\d+\/\d+$/
  , ET = new Set(["px", "full", "screen"])
  , TT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , PT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , kT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , AT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , NT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , an = e => bs(e) || ET.has(e) || bT.test(e)
  , Rn = e => Qs(e, "length", FT)
  , bs = e => !!e && !Number.isNaN(Number(e))
  , Pu = e => Qs(e, "number", bs)
  , fo = e => !!e && Number.isInteger(Number(e))
  , RT = e => e.endsWith("%") && bs(e.slice(0, -1))
  , G = e => rx.test(e)
  , jn = e => TT.test(e)
  , jT = new Set(["length", "size", "percentage"])
  , MT = e => Qs(e, jT, sx)
  , DT = e => Qs(e, "position", sx)
  , LT = new Set(["image", "url"])
  , OT = e => Qs(e, LT, VT)
  , IT = e => Qs(e, "", _T)
  , ho = () => !0
  , Qs = (e, t, n) => {
    const r = rx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , FT = e => PT.test(e) && !kT.test(e)
  , sx = () => !1
  , _T = e => AT.test(e)
  , VT = e => NT.test(e)
  , zT = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , s = oe("borderColor")
      , o = oe("borderRadius")
      , i = oe("borderSpacing")
      , a = oe("borderWidth")
      , l = oe("contrast")
      , u = oe("grayscale")
      , c = oe("hueRotate")
      , d = oe("invert")
      , f = oe("gap")
      , h = oe("gradientColorStops")
      , x = oe("gradientColorStopPositions")
      , y = oe("inset")
      , w = oe("margin")
      , g = oe("opacity")
      , m = oe("padding")
      , v = oe("saturate")
      , C = oe("scale")
      , b = oe("sepia")
      , E = oe("skew")
      , T = oe("space")
      , P = oe("translate")
      , R = () => ["auto", "contain", "none"]
      , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", G, t]
      , I = () => [G, t]
      , K = () => ["", an, Rn]
      , L = () => ["auto", bs, G]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , B = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , N = () => ["", "0", G]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [bs, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ho],
            spacing: [an, Rn],
            blur: ["none", "", jn, G],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", jn, G],
            borderSpacing: I(),
            borderWidth: K(),
            contrast: U(),
            grayscale: N(),
            hueRotate: U(),
            invert: N(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [RT, Rn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: I(),
            saturate: U(),
            scale: U(),
            sepia: N(),
            skew: U(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [jn]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), G]
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: R()
            }],
            "overscroll-x": [{
                "overscroll-x": R()
            }],
            "overscroll-y": [{
                "overscroll-y": R()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", fo, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: N()
            }],
            shrink: [{
                shrink: N()
            }],
            order: [{
                order: ["first", "last", "none", fo, G]
            }],
            "grid-cols": [{
                "grid-cols": [ho]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", fo, G]
                }, G]
            }],
            "col-start": [{
                "col-start": L()
            }],
            "col-end": [{
                "col-end": L()
            }],
            "grid-rows": [{
                "grid-rows": [ho]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [fo, G]
                }, G]
            }],
            "row-start": [{
                "row-start": L()
            }],
            "row-end": [{
                "row-end": L()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [jn]
                }, jn]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", jn, Rn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pu]
            }],
            "font-family": [{
                font: [ho]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", bs, Pu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...B(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", an, Rn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", an, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), DT]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", MT]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, OT]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...B(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...B()]
            }],
            "outline-offset": [{
                "outline-offset": [an, G]
            }],
            "outline-w": [{
                outline: [an, Rn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [an, Rn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", jn, IT]
            }],
            "shadow-color": [{
                shadow: [ho]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", jn, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [fo, G]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [an, Rn, Pu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , $T = CT(zT);
function sn(...e) {
    return $T(X0(e))
}
const BT = BE
  , ox = S.forwardRef( ({className: e, ...t}, n) => p.jsx(W0, {
    ref: n,
    className: sn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
ox.displayName = W0.displayName;
const UT = UE("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ix = S.forwardRef( ({className: e, variant: t, ...n}, r) => p.jsx(H0, {
    ref: r,
    className: sn(UT({
        variant: t
    }), e),
    ...n
}));
ix.displayName = H0.displayName;
const WT = S.forwardRef( ({className: e, ...t}, n) => p.jsx(Y0, {
    ref: n,
    className: sn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
WT.displayName = Y0.displayName;
const ax = S.forwardRef( ({className: e, ...t}, n) => p.jsx(Q0, {
    ref: n,
    className: sn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: p.jsx(Ua, {
        className: "h-4 w-4"
    })
}));
ax.displayName = Q0.displayName;
const lx = S.forwardRef( ({className: e, ...t}, n) => p.jsx(K0, {
    ref: n,
    className: sn("text-sm font-semibold", e),
    ...t
}));
lx.displayName = K0.displayName;
const ux = S.forwardRef( ({className: e, ...t}, n) => p.jsx(G0, {
    ref: n,
    className: sn("text-sm opacity-90", e),
    ...t
}));
ux.displayName = G0.displayName;
function HT() {
    const {toasts: e} = Zb();
    return p.jsxs(BT, {
        children: [e.map(function({id: t, title: n, description: r, action: s, ...o}) {
            return p.jsxs(ix, {
                ...o,
                children: [p.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && p.jsx(lx, {
                        children: n
                    }), r && p.jsx(ux, {
                        children: r
                    })]
                }), s, p.jsx(ax, {})]
            }, t)
        }), p.jsx(ox, {})]
    })
}
var Jp = ["light", "dark"]
  , KT = "(prefers-color-scheme: dark)"
  , GT = S.createContext(void 0)
  , YT = {
    setTheme: e => {}
    ,
    themes: []
}
  , QT = () => {
    var e;
    return (e = S.useContext(GT)) != null ? e : YT
}
;
S.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: s, defaultTheme: o, value: i, attrs: a, nonce: l}) => {
    let u = o === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = s ? Jp.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (x, y=!1, w=!0) => {
        let g = i ? i[x] : x
          , m = y ? x + "|| ''" : `'${g}'`
          , v = "";
        return s && w && !y && Jp.includes(x) && (v += `d.style.colorScheme = '${x}';`),
        n === "class" ? y || g ? v += `c.add(${m})` : v += "null" : g && (v += `d[s](n,${m})`),
        v
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${KT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(o, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${d}}catch(t){}}();`;
    return S.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var qT = e => {
    switch (e) {
    case "success":
        return JT;
    case "info":
        return tP;
    case "warning":
        return eP;
    case "error":
        return nP;
    default:
        return null
    }
}
  , XT = Array(12).fill(0)
  , ZT = ({visible: e, className: t}) => M.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, M.createElement("div", {
    className: "sonner-spinner"
}, XT.map( (n, r) => M.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , JT = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , eP = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , tP = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , nP = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , rP = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, M.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), M.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , sP = () => {
    let[e,t] = M.useState(document.hidden);
    return M.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Kc = 1
  , oP = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Kc++
              , o = this.toasts.find(a => a.id === s)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            o ? this.toasts = this.toasts.map(a => a.id === s ? (this.publish({
                ...a,
                ...e,
                id: s,
                title: n
            }),
            {
                ...a,
                ...e,
                id: s,
                dismissible: i,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: s
            }),
            s
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), s = n !== void 0, o, i = r.then(async l => {
                if (o = ["resolve", l],
                M.isValidElement(l))
                    s = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (aP(l) && !l.ok) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    s = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (o = ["reject", l],
                t.error !== void 0) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                s && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => i.then( () => o[0] === "reject" ? u(o[1]) : l(o[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Kc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , qe = new oP
  , iP = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Kc++;
    return qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , aP = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , lP = iP
  , uP = () => qe.toasts
  , cP = () => qe.getActiveToasts();
Object.assign(lP, {
    success: qe.success,
    info: qe.info,
    warning: qe.warning,
    error: qe.error,
    custom: qe.custom,
    message: qe.message,
    promise: qe.promise,
    dismiss: qe.dismiss,
    loading: qe.loading
}, {
    getHistory: uP,
    getToasts: cP
});
function dP(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
dP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ui(e) {
    return e.label !== void 0
}
var fP = 3
  , hP = "32px"
  , pP = "16px"
  , em = 4e3
  , mP = 356
  , gP = 14
  , yP = 20
  , vP = 200;
function kt(...e) {
    return e.filter(Boolean).join(" ")
}
function xP(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var wP = e => {
    var t, n, r, s, o, i, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: x, interacting: y, setHeights: w, visibleToasts: g, heights: m, index: v, toasts: C, expanded: b, removeToast: E, defaultRichColors: T, closeButton: P, style: R, cancelButtonStyle: j, actionButtonStyle: z, className: I="", descriptionClassName: K="", duration: L, position: Y, gap: B, loadingIcon: V, expandByDefault: k, classNames: N, icons: O, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: $} = e
      , [Q,X] = M.useState(null)
      , [we,Le] = M.useState(null)
      , [te,Hr] = M.useState(!1)
      , [bn,mr] = M.useState(!1)
      , [En,Kr] = M.useState(!1)
      , [Tn,wi] = M.useState(!1)
      , [Kl,Si] = M.useState(!1)
      , [Gl,to] = M.useState(0)
      , [Gr,kh] = M.useState(0)
      , no = M.useRef(h.duration || L || em)
      , Ah = M.useRef(null)
      , gr = M.useRef(null)
      , fS = v === 0
      , hS = v + 1 <= g
      , ht = h.type
      , Yr = h.dismissible !== !1
      , pS = h.className || ""
      , mS = h.descriptionClassName || ""
      , Ci = M.useMemo( () => m.findIndex(W => W.toastId === h.id) || 0, [m, h.id])
      , gS = M.useMemo( () => {
        var W;
        return (W = h.closeButton) != null ? W : P
    }
    , [h.closeButton, P])
      , Nh = M.useMemo( () => h.duration || L || em, [h.duration, L])
      , Yl = M.useRef(0)
      , Qr = M.useRef(0)
      , Rh = M.useRef(0)
      , qr = M.useRef(null)
      , [yS,vS] = Y.split("-")
      , jh = M.useMemo( () => m.reduce( (W, re, le) => le >= Ci ? W : W + re.height, 0), [m, Ci])
      , Mh = sP()
      , xS = h.invert || f
      , Ql = ht === "loading";
    Qr.current = M.useMemo( () => Ci * B + jh, [Ci, jh]),
    M.useEffect( () => {
        no.current = Nh
    }
    , [Nh]),
    M.useEffect( () => {
        Hr(!0)
    }
    , []),
    M.useEffect( () => {
        let W = gr.current;
        if (W) {
            let re = W.getBoundingClientRect().height;
            return kh(re),
            w(le => [{
                toastId: h.id,
                height: re,
                position: h.position
            }, ...le]),
            () => w(le => le.filter(bt => bt.toastId !== h.id))
        }
    }
    , [w, h.id]),
    M.useLayoutEffect( () => {
        if (!te)
            return;
        let W = gr.current
          , re = W.style.height;
        W.style.height = "auto";
        let le = W.getBoundingClientRect().height;
        W.style.height = re,
        kh(le),
        w(bt => bt.find(Et => Et.toastId === h.id) ? bt.map(Et => Et.toastId === h.id ? {
            ...Et,
            height: le
        } : Et) : [{
            toastId: h.id,
            height: le,
            position: h.position
        }, ...bt])
    }
    , [te, h.title, h.description, w, h.id]);
    let Pn = M.useCallback( () => {
        mr(!0),
        to(Qr.current),
        w(W => W.filter(re => re.toastId !== h.id)),
        setTimeout( () => {
            E(h)
        }
        , vP)
    }
    , [h, E, w, Qr]);
    M.useEffect( () => {
        if (h.promise && ht === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let W;
        return b || y || $ && Mh ? ( () => {
            if (Rh.current < Yl.current) {
                let re = new Date().getTime() - Yl.current;
                no.current = no.current - re
            }
            Rh.current = new Date().getTime()
        }
        )() : no.current !== 1 / 0 && (Yl.current = new Date().getTime(),
        W = setTimeout( () => {
            var re;
            (re = h.onAutoClose) == null || re.call(h, h),
            Pn()
        }
        , no.current)),
        () => clearTimeout(W)
    }
    , [b, y, h, ht, $, Mh, Pn]),
    M.useEffect( () => {
        h.delete && Pn()
    }
    , [Pn, h.delete]);
    function wS() {
        var W, re, le;
        return O != null && O.loading ? M.createElement("div", {
            className: kt(N == null ? void 0 : N.loader, (W = h == null ? void 0 : h.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": ht === "loading"
        }, O.loading) : V ? M.createElement("div", {
            className: kt(N == null ? void 0 : N.loader, (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ht === "loading"
        }, V) : M.createElement(ZT, {
            className: kt(N == null ? void 0 : N.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader),
            visible: ht === "loading"
        })
    }
    return M.createElement("li", {
        tabIndex: 0,
        ref: gr,
        className: kt(I, pS, N == null ? void 0 : N.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[ht], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ht]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : T,
        "data-styled": !(h.jsx || h.unstyled || x),
        "data-mounted": te,
        "data-promise": !!h.promise,
        "data-swiped": Kl,
        "data-removed": bn,
        "data-visible": hS,
        "data-y-position": yS,
        "data-x-position": vS,
        "data-index": v,
        "data-front": fS,
        "data-swiping": En,
        "data-dismissible": Yr,
        "data-type": ht,
        "data-invert": xS,
        "data-swipe-out": Tn,
        "data-swipe-direction": we,
        "data-expanded": !!(b || k && te),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": C.length - v,
            "--offset": `${bn ? Gl : Qr.current}px`,
            "--initial-height": k ? "auto" : `${Gr}px`,
            ...R,
            ...h.style
        },
        onDragEnd: () => {
            Kr(!1),
            X(null),
            qr.current = null
        }
        ,
        onPointerDown: W => {
            Ql || !Yr || (Ah.current = new Date,
            to(Qr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Kr(!0),
            qr.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, re, le, bt;
            if (Tn || !Yr)
                return;
            qr.current = null;
            let Et = Number(((W = gr.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , kn = Number(((re = gr.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , yr = new Date().getTime() - ((le = Ah.current) == null ? void 0 : le.getTime())
              , Tt = Q === "x" ? Et : kn
              , An = Math.abs(Tt) / yr;
            if (Math.abs(Tt) >= yP || An > .11) {
                to(Qr.current),
                (bt = h.onDismiss) == null || bt.call(h, h),
                Le(Q === "x" ? Et > 0 ? "right" : "left" : kn > 0 ? "down" : "up"),
                Pn(),
                wi(!0),
                Si(!1);
                return
            }
            Kr(!1),
            X(null)
        }
        ,
        onPointerMove: W => {
            var re, le, bt, Et;
            if (!qr.current || !Yr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let kn = W.clientY - qr.current.y
              , yr = W.clientX - qr.current.x
              , Tt = (le = e.swipeDirections) != null ? le : xP(Y);
            !Q && (Math.abs(yr) > 1 || Math.abs(kn) > 1) && X(Math.abs(yr) > Math.abs(kn) ? "x" : "y");
            let An = {
                x: 0,
                y: 0
            };
            Q === "y" ? (Tt.includes("top") || Tt.includes("bottom")) && (Tt.includes("top") && kn < 0 || Tt.includes("bottom") && kn > 0) && (An.y = kn) : Q === "x" && (Tt.includes("left") || Tt.includes("right")) && (Tt.includes("left") && yr < 0 || Tt.includes("right") && yr > 0) && (An.x = yr),
            (Math.abs(An.x) > 0 || Math.abs(An.y) > 0) && Si(!0),
            (bt = gr.current) == null || bt.style.setProperty("--swipe-amount-x", `${An.x}px`),
            (Et = gr.current) == null || Et.style.setProperty("--swipe-amount-y", `${An.y}px`)
        }
    }, gS && !h.jsx ? M.createElement("button", {
        "aria-label": U,
        "data-disabled": Ql,
        "data-close-button": !0,
        onClick: Ql || !Yr ? () => {}
        : () => {
            var W;
            Pn(),
            (W = h.onDismiss) == null || W.call(h, h)
        }
        ,
        className: kt(N == null ? void 0 : N.closeButton, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.closeButton)
    }, (o = O == null ? void 0 : O.close) != null ? o : rP) : null, h.jsx || S.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : M.createElement(M.Fragment, null, ht || h.icon || h.promise ? M.createElement("div", {
        "data-icon": "",
        className: kt(N == null ? void 0 : N.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || wS() : null, h.type !== "loading" ? h.icon || (O == null ? void 0 : O[ht]) || qT(ht) : null) : null, M.createElement("div", {
        "data-content": "",
        className: kt(N == null ? void 0 : N.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, M.createElement("div", {
        "data-title": "",
        className: kt(N == null ? void 0 : N.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? M.createElement("div", {
        "data-description": "",
        className: kt(K, mS, N == null ? void 0 : N.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), S.isValidElement(h.cancel) ? h.cancel : h.cancel && Ui(h.cancel) ? M.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || j,
        onClick: W => {
            var re, le;
            Ui(h.cancel) && Yr && ((le = (re = h.cancel).onClick) == null || le.call(re, W),
            Pn())
        }
        ,
        className: kt(N == null ? void 0 : N.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, S.isValidElement(h.action) ? h.action : h.action && Ui(h.action) ? M.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || z,
        onClick: W => {
            var re, le;
            Ui(h.action) && ((le = (re = h.action).onClick) == null || le.call(re, W),
            !W.defaultPrevented && Pn())
        }
        ,
        className: kt(N == null ? void 0 : N.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function tm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function SP(e, t) {
    let n = {};
    return [e, t].forEach( (r, s) => {
        let o = s === 1
          , i = o ? "--mobile-offset" : "--offset"
          , a = o ? pP : hP;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = a : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var CP = S.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: s=["altKey", "KeyT"], expand: o, closeButton: i, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: x=fP, toastOptions: y, dir: w=tm(), gap: g=gP, loadingIcon: m, icons: v, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: b} = e
      , [E,T] = M.useState([])
      , P = M.useMemo( () => Array.from(new Set([r].concat(E.filter($ => $.position).map($ => $.position)))), [E, r])
      , [R,j] = M.useState([])
      , [z,I] = M.useState(!1)
      , [K,L] = M.useState(!1)
      , [Y,B] = M.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = M.useRef(null)
      , k = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , N = M.useRef(null)
      , O = M.useRef(!1)
      , U = M.useCallback($ => {
        T(Q => {
            var X;
            return (X = Q.find(we => we.id === $.id)) != null && X.delete || qe.dismiss($.id),
            Q.filter( ({id: we}) => we !== $.id)
        }
        )
    }
    , []);
    return M.useEffect( () => qe.subscribe($ => {
        if ($.dismiss) {
            T(Q => Q.map(X => X.id === $.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            S0.flushSync( () => {
                T(Q => {
                    let X = Q.findIndex(we => we.id === $.id);
                    return X !== -1 ? [...Q.slice(0, X), {
                        ...Q[X],
                        ...$
                    }, ...Q.slice(X + 1)] : [$, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    M.useEffect( () => {
        if (c !== "system") {
            B(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? B("dark") : B("light")),
        typeof window > "u")
            return;
        let $ = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            $.addEventListener("change", ({matches: Q}) => {
                B(Q ? "dark" : "light")
            }
            )
        } catch {
            $.addListener( ({matches: X}) => {
                try {
                    B(X ? "dark" : "light")
                } catch (we) {
                    console.error(we)
                }
            }
            )
        }
    }
    , [c]),
    M.useEffect( () => {
        E.length <= 1 && I(!1)
    }
    , [E]),
    M.useEffect( () => {
        let $ = Q => {
            var X, we;
            s.every(Le => Q[Le] || Q.code === Le) && (I(!0),
            (X = V.current) == null || X.focus()),
            Q.code === "Escape" && (document.activeElement === V.current || (we = V.current) != null && we.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", $),
        () => document.removeEventListener("keydown", $)
    }
    , [s]),
    M.useEffect( () => {
        if (V.current)
            return () => {
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null,
                O.current = !1)
            }
    }
    , [V.current]),
    M.createElement("section", {
        ref: t,
        "aria-label": `${C} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( ($, Q) => {
        var X;
        let[we,Le] = $.split("-");
        return E.length ? M.createElement("ol", {
            key: $,
            dir: w === "auto" ? tm() : w,
            tabIndex: -1,
            ref: V,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": we,
            "data-lifted": z && E.length > 1 && !o,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((X = R[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${mP}px`,
                "--gap": `${g}px`,
                ...h,
                ...SP(l, u)
            },
            onBlur: te => {
                O.current && !te.currentTarget.contains(te.relatedTarget) && (O.current = !1,
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null))
            }
            ,
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                N.current = te.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || L(!0)
            }
            ,
            onPointerUp: () => L(!1)
        }, E.filter(te => !te.position && Q === 0 || te.position === $).map( (te, Hr) => {
            var bn, mr;
            return M.createElement(wP, {
                key: te.id,
                icons: v,
                index: Hr,
                toast: te,
                defaultRichColors: d,
                duration: (bn = y == null ? void 0 : y.duration) != null ? bn : f,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (mr = y == null ? void 0 : y.closeButton) != null ? mr : i,
                interacting: K,
                position: $,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: U,
                toasts: E.filter(En => En.position == te.position),
                heights: R.filter(En => En.position == te.position),
                setHeights: j,
                expandByDefault: o,
                gap: g,
                loadingIcon: m,
                expanded: z,
                pauseWhenPageIsHidden: b,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const bP = ({...e}) => {
    const {theme: t="system"} = QT();
    return p.jsx(CP, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var EP = Ld[" useId ".trim().toString()] || ( () => {}
)
  , TP = 0;
function cx(e) {
    const [t,n] = S.useState(EP());
    return nn( () => {
        n(r => r ?? String(TP++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const PP = ["top", "right", "bottom", "left"]
  , ir = Math.min
  , ot = Math.max
  , Wa = Math.round
  , Wi = Math.floor
  , ar = e => ({
    x: e,
    y: e
})
  , kP = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , AP = {
    start: "end",
    end: "start"
};
function Gc(e, t, n) {
    return ot(e, ir(t, n))
}
function xn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function wn(e) {
    return e.split("-")[0]
}
function qs(e) {
    return e.split("-")[1]
}
function Mf(e) {
    return e === "x" ? "y" : "x"
}
function Df(e) {
    return e === "y" ? "height" : "width"
}
function lr(e) {
    return ["top", "bottom"].includes(wn(e)) ? "y" : "x"
}
function Lf(e) {
    return Mf(lr(e))
}
function NP(e, t, n) {
    n === void 0 && (n = !1);
    const r = qs(e)
      , s = Lf(e)
      , o = Df(s);
    let i = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (i = Ha(i)),
    [i, Ha(i)]
}
function RP(e) {
    const t = Ha(e);
    return [Yc(e), t, Yc(t)]
}
function Yc(e) {
    return e.replace(/start|end/g, t => AP[t])
}
function jP(e, t, n) {
    const r = ["left", "right"]
      , s = ["right", "left"]
      , o = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? s : r : t ? r : s;
    case "left":
    case "right":
        return t ? o : i;
    default:
        return []
    }
}
function MP(e, t, n, r) {
    const s = qs(e);
    let o = jP(wn(e), n === "start", r);
    return s && (o = o.map(i => i + "-" + s),
    t && (o = o.concat(o.map(Yc)))),
    o
}
function Ha(e) {
    return e.replace(/left|right|bottom|top/g, t => kP[t])
}
function DP(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function dx(e) {
    return typeof e != "number" ? DP(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ka(e) {
    const {x: t, y: n, width: r, height: s} = e;
    return {
        width: r,
        height: s,
        top: n,
        left: t,
        right: t + r,
        bottom: n + s,
        x: t,
        y: n
    }
}
function nm(e, t, n) {
    let {reference: r, floating: s} = e;
    const o = lr(t)
      , i = Lf(t)
      , a = Df(i)
      , l = wn(t)
      , u = o === "y"
      , c = r.x + r.width / 2 - s.width / 2
      , d = r.y + r.height / 2 - s.height / 2
      , f = r[a] / 2 - s[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - s.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - s.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (qs(t)) {
    case "start":
        h[i] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[i] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const LP = async (e, t, n) => {
    const {placement: r="bottom", strategy: s="absolute", middleware: o=[], platform: i} = n
      , a = o.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: s
    })
      , {x: c, y: d} = nm(u, r, l)
      , f = r
      , h = {}
      , x = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: w, fn: g} = a[y]
          , {x: m, y: v, data: C, reset: b} = await g({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: s,
            middlewareData: h,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = m ?? c,
        d = v ?? d,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...C
            }
        },
        b && x <= 50 && (x++,
        typeof b == "object" && (b.placement && (f = b.placement),
        b.rects && (u = b.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }) : b.rects),
        {x: c, y: d} = nm(u, f, l)),
        y = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: s,
        middlewareData: h
    }
}
;
async function Zo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: s, platform: o, rects: i, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = xn(t, e)
      , x = dx(h)
      , w = a[f ? d === "floating" ? "reference" : "floating" : d]
      , g = Ka(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , m = d === "floating" ? {
        x: r,
        y: s,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating))
      , C = await (o.isElement == null ? void 0 : o.isElement(v)) ? await (o.getScale == null ? void 0 : o.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = Ka(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: m,
        offsetParent: v,
        strategy: l
    }) : m);
    return {
        top: (g.top - b.top + x.top) / C.y,
        bottom: (b.bottom - g.bottom + x.bottom) / C.y,
        left: (g.left - b.left + x.left) / C.x,
        right: (b.right - g.right + x.right) / C.x
    }
}
const OP = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: s, rects: o, platform: i, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = xn(e, t) || {};
        if (u == null)
            return {};
        const d = dx(c)
          , f = {
            x: n,
            y: r
        }
          , h = Lf(s)
          , x = Df(h)
          , y = await i.getDimensions(u)
          , w = h === "y"
          , g = w ? "top" : "left"
          , m = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , C = o.reference[x] + o.reference[h] - f[h] - o.floating[x]
          , b = f[h] - o.reference[h]
          , E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let T = E ? E[v] : 0;
        (!T || !await (i.isElement == null ? void 0 : i.isElement(E))) && (T = a.floating[v] || o.floating[x]);
        const P = C / 2 - b / 2
          , R = T / 2 - y[x] / 2 - 1
          , j = ir(d[g], R)
          , z = ir(d[m], R)
          , I = j
          , K = T - y[x] - z
          , L = T / 2 - y[x] / 2 + P
          , Y = Gc(I, L, K)
          , B = !l.arrow && qs(s) != null && L !== Y && o.reference[x] / 2 - (L < I ? j : z) - y[x] / 2 < 0
          , V = B ? L < I ? L - I : L - K : 0;
        return {
            [h]: f[h] + V,
            data: {
                [h]: Y,
                centerOffset: L - Y - V,
                ...B && {
                    alignmentOffset: V
                }
            },
            reset: B
        }
    }
})
  , IP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, middlewareData: o, rects: i, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: y=!0, ...w} = xn(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = wn(s)
              , m = lr(a)
              , v = wn(a) === a
              , C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , b = f || (v || !y ? [Ha(a)] : RP(a))
              , E = x !== "none";
            !f && E && b.push(...MP(a, y, x, C));
            const T = [a, ...b]
              , P = await Zo(t, w)
              , R = [];
            let j = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && R.push(P[g]),
            d) {
                const L = NP(s, i, C);
                R.push(P[L[0]], P[L[1]])
            }
            if (j = [...j, {
                placement: s,
                overflows: R
            }],
            !R.every(L => L <= 0)) {
                var z, I;
                const L = (((z = o.flip) == null ? void 0 : z.index) || 0) + 1
                  , Y = T[L];
                if (Y)
                    return {
                        data: {
                            index: L,
                            overflows: j
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let B = (I = j.filter(V => V.overflows[0] <= 0).sort( (V, k) => V.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!B)
                    switch (h) {
                    case "bestFit":
                        {
                            var K;
                            const V = (K = j.filter(k => {
                                if (E) {
                                    const N = lr(k.placement);
                                    return N === m || N === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(N => N > 0).reduce( (N, O) => N + O, 0)]).sort( (k, N) => k[1] - N[1])[0]) == null ? void 0 : K[0];
                            V && (B = V);
                            break
                        }
                    case "initialPlacement":
                        B = a;
                        break
                    }
                if (s !== B)
                    return {
                        reset: {
                            placement: B
                        }
                    }
            }
            return {}
        }
    }
};
function rm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function sm(e) {
    return PP.some(t => e[t] >= 0)
}
const FP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...s} = xn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const o = await Zo(t, {
                        ...s,
                        elementContext: "reference"
                    })
                      , i = rm(o, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: sm(i)
                        }
                    }
                }
            case "escaped":
                {
                    const o = await Zo(t, {
                        ...s,
                        altBoundary: !0
                    })
                      , i = rm(o, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: sm(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function _P(e, t) {
    const {placement: n, platform: r, elements: s} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating))
      , i = wn(n)
      , a = qs(n)
      , l = lr(n) === "y"
      , u = ["left", "top"].includes(i) ? -1 : 1
      , c = o && l ? -1 : 1
      , d = xn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: x} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof x == "number" && (h = a === "end" ? x * -1 : x),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const VP = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: s, y: o, placement: i, middlewareData: a} = t
              , l = await _P(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: s + l.x,
                y: o + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , zP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: s} = t
              , {mainAxis: o=!0, crossAxis: i=!1, limiter: a={
                fn: w => {
                    let {x: g, y: m} = w;
                    return {
                        x: g,
                        y: m
                    }
                }
            }, ...l} = xn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Zo(t, l)
              , d = lr(wn(s))
              , f = Mf(d);
            let h = u[f]
              , x = u[d];
            if (o) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , m = h + c[w]
                  , v = h - c[g];
                h = Gc(m, h, v)
            }
            if (i) {
                const w = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , m = x + c[w]
                  , v = x - c[g];
                x = Gc(m, x, v)
            }
            const y = a.fn({
                ...t,
                [f]: h,
                [d]: x
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [f]: o,
                        [d]: i
                    }
                }
            }
        }
    }
}
  , $P = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: s, rects: o, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = xn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = lr(s)
              , f = Mf(d);
            let h = c[f]
              , x = c[d];
            const y = xn(a, t)
              , w = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (l) {
                const v = f === "y" ? "height" : "width"
                  , C = o.reference[f] - o.floating[v] + w.mainAxis
                  , b = o.reference[f] + o.reference[v] - w.mainAxis;
                h < C ? h = C : h > b && (h = b)
            }
            if (u) {
                var g, m;
                const v = f === "y" ? "width" : "height"
                  , C = ["top", "left"].includes(wn(s))
                  , b = o.reference[d] - o.floating[v] + (C && ((g = i.offset) == null ? void 0 : g[d]) || 0) + (C ? 0 : w.crossAxis)
                  , E = o.reference[d] + o.reference[v] + (C ? 0 : ((m = i.offset) == null ? void 0 : m[d]) || 0) - (C ? w.crossAxis : 0);
                x < b ? x = b : x > E && (x = E)
            }
            return {
                [f]: h,
                [d]: x
            }
        }
    }
}
  , BP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, rects: o, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...u} = xn(e, t)
              , c = await Zo(t, u)
              , d = wn(s)
              , f = qs(s)
              , h = lr(s) === "y"
              , {width: x, height: y} = o.floating;
            let w, g;
            d === "top" || d === "bottom" ? (w = d,
            g = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d,
            w = f === "end" ? "top" : "bottom");
            const m = y - c.top - c.bottom
              , v = x - c.left - c.right
              , C = ir(y - c[w], m)
              , b = ir(x - c[g], v)
              , E = !t.middlewareData.shift;
            let T = C
              , P = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = m),
            E && !f) {
                const j = ot(c.left, 0)
                  , z = ot(c.right, 0)
                  , I = ot(c.top, 0)
                  , K = ot(c.bottom, 0);
                h ? P = x - 2 * (j !== 0 || z !== 0 ? j + z : ot(c.left, c.right)) : T = y - 2 * (I !== 0 || K !== 0 ? I + K : ot(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: T
            });
            const R = await i.getDimensions(a.floating);
            return x !== R.width || y !== R.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function kl() {
    return typeof window < "u"
}
function Xs(e) {
    return fx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function lt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function on(e) {
    var t;
    return (t = (fx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function fx(e) {
    return kl() ? e instanceof Node || e instanceof lt(e).Node : !1
}
function zt(e) {
    return kl() ? e instanceof Element || e instanceof lt(e).Element : !1
}
function rn(e) {
    return kl() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1
}
function om(e) {
    return !kl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot
}
function mi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: s} = $t(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(s)
}
function UP(e) {
    return ["table", "td", "th"].includes(Xs(e))
}
function Al(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Of(e) {
    const t = If()
      , n = zt(e) ? $t(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function WP(e) {
    let t = ur(e);
    for (; rn(t) && !Bs(t); ) {
        if (Of(t))
            return t;
        if (Al(t))
            return null;
        t = ur(t)
    }
    return null
}
function If() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Bs(e) {
    return ["html", "body", "#document"].includes(Xs(e))
}
function $t(e) {
    return lt(e).getComputedStyle(e)
}
function Nl(e) {
    return zt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function ur(e) {
    if (Xs(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || om(e) && e.host || on(e);
    return om(t) ? t.host : t
}
function hx(e) {
    const t = ur(e);
    return Bs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : rn(t) && mi(t) ? t : hx(t)
}
function Jo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const s = hx(e)
      , o = s === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = lt(s);
    if (o) {
        const a = Qc(i);
        return t.concat(i, i.visualViewport || [], mi(s) ? s : [], a && n ? Jo(a) : [])
    }
    return t.concat(s, Jo(s, [], n))
}
function Qc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function px(e) {
    const t = $t(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const s = rn(e)
      , o = s ? e.offsetWidth : n
      , i = s ? e.offsetHeight : r
      , a = Wa(n) !== o || Wa(r) !== i;
    return a && (n = o,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function Ff(e) {
    return zt(e) ? e : e.contextElement
}
function Es(e) {
    const t = Ff(e);
    if (!rn(t))
        return ar(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: s, $: o} = px(t);
    let i = (o ? Wa(n.width) : n.width) / r
      , a = (o ? Wa(n.height) : n.height) / s;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const HP = ar(0);
function mx(e) {
    const t = lt(e);
    return !If() || !t.visualViewport ? HP : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function KP(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== lt(e) ? !1 : t
}
function Br(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , o = Ff(e);
    let i = ar(1);
    t && (r ? zt(r) && (i = Es(r)) : i = Es(e));
    const a = KP(o, n, r) ? mx(o) : ar(0);
    let l = (s.left + a.x) / i.x
      , u = (s.top + a.y) / i.y
      , c = s.width / i.x
      , d = s.height / i.y;
    if (o) {
        const f = lt(o)
          , h = r && zt(r) ? lt(r) : r;
        let x = f
          , y = Qc(x);
        for (; y && r && h !== x; ) {
            const w = Es(y)
              , g = y.getBoundingClientRect()
              , m = $t(y)
              , v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * w.x
              , C = g.top + (y.clientTop + parseFloat(m.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            l += v,
            u += C,
            x = lt(y),
            y = Qc(x)
        }
    }
    return Ka({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function GP(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: s} = e;
    const o = s === "fixed"
      , i = on(r)
      , a = t ? Al(t.floating) : !1;
    if (r === i || a && o)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = ar(1);
    const c = ar(0)
      , d = rn(r);
    if ((d || !d && !o) && ((Xs(r) !== "body" || mi(i)) && (l = Nl(r)),
    rn(r))) {
        const f = Br(r);
        u = Es(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y
    }
}
function YP(e) {
    return Array.from(e.getClientRects())
}
function qc(e, t) {
    const n = Nl(e).scrollLeft;
    return t ? t.left + n : Br(on(e)).left + n
}
function QP(e) {
    const t = on(e)
      , n = Nl(e)
      , r = e.ownerDocument.body
      , s = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , o = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + qc(e);
    const a = -n.scrollTop;
    return $t(r).direction === "rtl" && (i += ot(t.clientWidth, r.clientWidth) - s),
    {
        width: s,
        height: o,
        x: i,
        y: a
    }
}
function qP(e, t) {
    const n = lt(e)
      , r = on(e)
      , s = n.visualViewport;
    let o = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (s) {
        o = s.width,
        i = s.height;
        const u = If();
        (!u || u && t === "fixed") && (a = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: o,
        height: i,
        x: a,
        y: l
    }
}
function XP(e, t) {
    const n = Br(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , s = n.left + e.clientLeft
      , o = rn(e) ? Es(e) : ar(1)
      , i = e.clientWidth * o.x
      , a = e.clientHeight * o.y
      , l = s * o.x
      , u = r * o.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}
function im(e, t, n) {
    let r;
    if (t === "viewport")
        r = qP(e, n);
    else if (t === "document")
        r = QP(on(e));
    else if (zt(t))
        r = XP(t, n);
    else {
        const s = mx(e);
        r = {
            ...t,
            x: t.x - s.x,
            y: t.y - s.y
        }
    }
    return Ka(r)
}
function gx(e, t) {
    const n = ur(e);
    return n === t || !zt(n) || Bs(n) ? !1 : $t(n).position === "fixed" || gx(n, t)
}
function ZP(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Jo(e, [], !1).filter(a => zt(a) && Xs(a) !== "body")
      , s = null;
    const o = $t(e).position === "fixed";
    let i = o ? ur(e) : e;
    for (; zt(i) && !Bs(i); ) {
        const a = $t(i)
          , l = Of(i);
        !l && a.position === "fixed" && (s = null),
        (o ? !l && !s : !l && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || mi(i) && !l && gx(e, i)) ? r = r.filter(c => c !== i) : s = a,
        i = ur(i)
    }
    return t.set(e, r),
    r
}
function JP(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: s} = e;
    const i = [...n === "clippingAncestors" ? Al(t) ? [] : ZP(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (u, c) => {
        const d = im(t, c, s);
        return u.top = ot(d.top, u.top),
        u.right = ir(d.right, u.right),
        u.bottom = ir(d.bottom, u.bottom),
        u.left = ot(d.left, u.left),
        u
    }
    , im(t, a, s));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function ek(e) {
    const {width: t, height: n} = px(e);
    return {
        width: t,
        height: n
    }
}
function tk(e, t, n) {
    const r = rn(t)
      , s = on(t)
      , o = n === "fixed"
      , i = Br(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = ar(0);
    if (r || !r && !o)
        if ((Xs(t) !== "body" || mi(s)) && (a = Nl(t)),
        r) {
            const h = Br(t, !0, o, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            s && (l.x = qc(s));
    let u = 0
      , c = 0;
    if (s && !r && !o) {
        const h = s.getBoundingClientRect();
        c = h.top + a.scrollTop,
        u = h.left + a.scrollLeft - qc(s, h)
    }
    const d = i.left + a.scrollLeft - l.x - u
      , f = i.top + a.scrollTop - l.y - c;
    return {
        x: d,
        y: f,
        width: i.width,
        height: i.height
    }
}
function ku(e) {
    return $t(e).position === "static"
}
function am(e, t) {
    if (!rn(e) || $t(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return on(e) === n && (n = n.ownerDocument.body),
    n
}
function yx(e, t) {
    const n = lt(e);
    if (Al(e))
        return n;
    if (!rn(e)) {
        let s = ur(e);
        for (; s && !Bs(s); ) {
            if (zt(s) && !ku(s))
                return s;
            s = ur(s)
        }
        return n
    }
    let r = am(e, t);
    for (; r && UP(r) && ku(r); )
        r = am(r, t);
    return r && Bs(r) && ku(r) && !Of(r) ? n : r || WP(e) || n
}
const nk = async function(e) {
    const t = this.getOffsetParent || yx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: tk(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function rk(e) {
    return $t(e).direction === "rtl"
}
const sk = {
    convertOffsetParentRelativeRectToViewportRelativeRect: GP,
    getDocumentElement: on,
    getClippingRect: JP,
    getOffsetParent: yx,
    getElementRects: nk,
    getClientRects: YP,
    getDimensions: ek,
    getScale: Es,
    isElement: zt,
    isRTL: rk
};
function ok(e, t) {
    let n = null, r;
    const s = on(e);
    function o() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        o();
        const {left: u, top: c, width: d, height: f} = e.getBoundingClientRect();
        if (a || t(),
        !d || !f)
            return;
        const h = Wi(c)
          , x = Wi(s.clientWidth - (u + d))
          , y = Wi(s.clientHeight - (c + f))
          , w = Wi(u)
          , m = {
            rootMargin: -h + "px " + -x + "px " + -y + "px " + -w + "px",
            threshold: ot(0, ir(1, l)) || 1
        };
        let v = !0;
        function C(b) {
            const E = b[0].intersectionRatio;
            if (E !== l) {
                if (!v)
                    return i();
                E ? i(!1, E) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...m,
                root: s.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,m)
        }
        n.observe(e)
    }
    return i(!0),
    o
}
function ik(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: s=!0, ancestorResize: o=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Ff(e)
      , c = s || o ? [...u ? Jo(u) : [], ...Jo(t)] : [];
    c.forEach(g => {
        s && g.addEventListener("scroll", n, {
            passive: !0
        }),
        o && g.addEventListener("resize", n)
    }
    );
    const d = u && a ? ok(u, n) : null;
    let f = -1
      , h = null;
    i && (h = new ResizeObserver(g => {
        let[m] = g;
        m && m.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var v;
            (v = h) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let x, y = l ? Br(e) : null;
    l && w();
    function w() {
        const g = Br(e);
        y && (g.x !== y.x || g.y !== y.y || g.width !== y.width || g.height !== y.height) && n(),
        y = g,
        x = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        c.forEach(m => {
            s && m.removeEventListener("scroll", n),
            o && m.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (g = h) == null || g.disconnect(),
        h = null,
        l && cancelAnimationFrame(x)
    }
}
const ak = VP
  , lk = zP
  , uk = IP
  , ck = BP
  , dk = FP
  , lm = OP
  , fk = $P
  , hk = (e, t, n) => {
    const r = new Map
      , s = {
        platform: sk,
        ...n
    }
      , o = {
        ...s.platform,
        _c: r
    };
    return LP(e, t, {
        ...s,
        platform: o
    })
}
;
var fa = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Ga(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, s;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ga(e[r], t[r]))
                    return !1;
            return !0
        }
        if (s = Object.keys(e),
        n = s.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, s[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const o = s[r];
            if (!(o === "_owner" && e.$$typeof) && !Ga(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function vx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function um(e, t) {
    const n = vx(e);
    return Math.round(t * n) / n
}
function Au(e) {
    const t = S.useRef(e);
    return fa( () => {
        t.current = e
    }
    ),
    t
}
function pk(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: s, elements: {reference: o, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = S.useState(r);
    Ga(f, r) || h(r);
    const [x,y] = S.useState(null)
      , [w,g] = S.useState(null)
      , m = S.useCallback(k => {
        k !== E.current && (E.current = k,
        y(k))
    }
    , [])
      , v = S.useCallback(k => {
        k !== T.current && (T.current = k,
        g(k))
    }
    , [])
      , C = o || x
      , b = i || w
      , E = S.useRef(null)
      , T = S.useRef(null)
      , P = S.useRef(c)
      , R = l != null
      , j = Au(l)
      , z = Au(s)
      , I = Au(u)
      , K = S.useCallback( () => {
        if (!E.current || !T.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        z.current && (k.platform = z.current),
        hk(E.current, T.current, k).then(N => {
            const O = {
                ...N,
                isPositioned: I.current !== !1
            };
            L.current && !Ga(P.current, O) && (P.current = O,
            hi.flushSync( () => {
                d(O)
            }
            ))
        }
        )
    }
    , [f, t, n, z, I]);
    fa( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const L = S.useRef(!1);
    fa( () => (L.current = !0,
    () => {
        L.current = !1
    }
    ), []),
    fa( () => {
        if (C && (E.current = C),
        b && (T.current = b),
        C && b) {
            if (j.current)
                return j.current(C, b, K);
            K()
        }
    }
    , [C, b, K, j, R]);
    const Y = S.useMemo( () => ({
        reference: E,
        floating: T,
        setReference: m,
        setFloating: v
    }), [m, v])
      , B = S.useMemo( () => ({
        reference: C,
        floating: b
    }), [C, b])
      , V = S.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!B.floating)
            return k;
        const N = um(B.floating, c.x)
          , O = um(B.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + N + "px, " + O + "px)",
            ...vx(B.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: N,
            top: O
        }
    }
    , [n, a, B.floating, c.x, c.y]);
    return S.useMemo( () => ({
        ...c,
        update: K,
        refs: Y,
        elements: B,
        floatingStyles: V
    }), [c, K, Y, B, V])
}
const mk = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: s} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? lm({
                element: r.current,
                padding: s
            }).fn(n) : {} : r ? lm({
                element: r,
                padding: s
            }).fn(n) : {}
        }
    }
}
  , gk = (e, t) => ({
    ...ak(e),
    options: [e, t]
})
  , yk = (e, t) => ({
    ...lk(e),
    options: [e, t]
})
  , vk = (e, t) => ({
    ...fk(e),
    options: [e, t]
})
  , xk = (e, t) => ({
    ...uk(e),
    options: [e, t]
})
  , wk = (e, t) => ({
    ...ck(e),
    options: [e, t]
})
  , Sk = (e, t) => ({
    ...dk(e),
    options: [e, t]
})
  , Ck = (e, t) => ({
    ...mk(e),
    options: [e, t]
});
var bk = "Arrow"
  , xx = S.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: s=5, ...o} = e;
    return p.jsx(Pe.svg, {
        ...o,
        ref: t,
        width: r,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : p.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
xx.displayName = bk;
var Ek = xx;
function Tk(e) {
    const [t,n] = S.useState(void 0);
    return nn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length)
                    return;
                const o = s[0];
                let i, a;
                if ("borderBoxSize"in o) {
                    const l = o.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    a = u.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var wx = "Popper"
  , [Sx,Cx] = Ys(wx)
  , [hL,bx] = Sx(wx)
  , Ex = "PopperAnchor"
  , Tx = S.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...s} = e
      , o = bx(Ex, n)
      , i = S.useRef(null)
      , a = ct(t, i);
    return S.useEffect( () => {
        o.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : p.jsx(Pe.div, {
        ...s,
        ref: a
    })
}
);
Tx.displayName = Ex;
var _f = "PopperContent"
  , [Pk,kk] = Sx(_f)
  , Px = S.forwardRef( (e, t) => {
    var te, Hr, bn, mr, En, Kr;
    const {__scopePopper: n, side: r="bottom", sideOffset: s=0, align: o="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: x, ...y} = e
      , w = bx(_f, n)
      , [g,m] = S.useState(null)
      , v = ct(t, Tn => m(Tn))
      , [C,b] = S.useState(null)
      , E = Tk(C)
      , T = (E == null ? void 0 : E.width) ?? 0
      , P = (E == null ? void 0 : E.height) ?? 0
      , R = r + (o !== "center" ? "-" + o : "")
      , j = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , I = z.length > 0
      , K = {
        padding: j,
        boundary: z.filter(Nk),
        altBoundary: I
    }
      , {refs: L, floatingStyles: Y, placement: B, isPositioned: V, middlewareData: k} = pk({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...Tn) => ik(...Tn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [gk({
            mainAxis: s + P,
            alignmentAxis: i
        }), l && yk({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? vk() : void 0,
            ...K
        }), l && xk({
            ...K
        }), wk({
            ...K,
            apply: ({elements: Tn, rects: wi, availableWidth: Kl, availableHeight: Si}) => {
                const {width: Gl, height: to} = wi.reference
                  , Gr = Tn.floating.style;
                Gr.setProperty("--radix-popper-available-width", `${Kl}px`),
                Gr.setProperty("--radix-popper-available-height", `${Si}px`),
                Gr.setProperty("--radix-popper-anchor-width", `${Gl}px`),
                Gr.setProperty("--radix-popper-anchor-height", `${to}px`)
            }
        }), C && Ck({
            element: C,
            padding: a
        }), Rk({
            arrowWidth: T,
            arrowHeight: P
        }), f && Sk({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [N,O] = Nx(B)
      , U = or(x);
    nn( () => {
        V && (U == null || U())
    }
    , [V, U]);
    const $ = (te = k.arrow) == null ? void 0 : te.x
      , Q = (Hr = k.arrow) == null ? void 0 : Hr.y
      , X = ((bn = k.arrow) == null ? void 0 : bn.centerOffset) !== 0
      , [we,Le] = S.useState();
    return nn( () => {
        g && Le(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    p.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: V ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [(mr = k.transformOrigin) == null ? void 0 : mr.x, (En = k.transformOrigin) == null ? void 0 : En.y].join(" "),
            ...((Kr = k.hide) == null ? void 0 : Kr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: p.jsx(Pk, {
            scope: n,
            placedSide: N,
            onArrowChange: b,
            arrowX: $,
            arrowY: Q,
            shouldHideArrow: X,
            children: p.jsx(Pe.div, {
                "data-side": N,
                "data-align": O,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
Px.displayName = _f;
var kx = "PopperArrow"
  , Ak = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Ax = S.forwardRef(function(t, n) {
    const {__scopePopper: r, ...s} = t
      , o = kk(kx, r)
      , i = Ak[o.placedSide];
    return p.jsx("span", {
        ref: o.onArrowChange,
        style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[o.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[o.placedSide],
            visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: p.jsx(Ek, {
            ...s,
            ref: n,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
Ax.displayName = kx;
function Nk(e) {
    return e !== null
}
var Rk = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, m;
        const {placement: n, rects: r, middlewareData: s} = t
          , i = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,c] = Nx(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , h = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let x = ""
          , y = "";
        return u === "bottom" ? (x = i ? d : `${f}px`,
        y = `${-l}px`) : u === "top" ? (x = i ? d : `${f}px`,
        y = `${r.floating.height + l}px`) : u === "right" ? (x = `${-l}px`,
        y = i ? d : `${h}px`) : u === "left" && (x = `${r.floating.width + l}px`,
        y = i ? d : `${h}px`),
        {
            data: {
                x,
                y
            }
        }
    }
});
function Nx(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var jk = Tx
  , Mk = Px
  , Dk = Ax
  , [Rl,pL] = Ys("Tooltip", [Cx])
  , Vf = Cx()
  , Rx = "TooltipProvider"
  , Lk = 700
  , cm = "tooltip.open"
  , [Ok,jx] = Rl(Rx)
  , Mx = e => {
    const {__scopeTooltip: t, delayDuration: n=Lk, skipDelayDuration: r=300, disableHoverableContent: s=!1, children: o} = e
      , i = S.useRef(!0)
      , a = S.useRef(!1)
      , l = S.useRef(0);
    return S.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    p.jsx(Ok, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: S.useCallback( () => {
            window.clearTimeout(l.current),
            i.current = !1
        }
        , []),
        onClose: S.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: S.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: s,
        children: o
    })
}
;
Mx.displayName = Rx;
var Dx = "Tooltip"
  , [mL,jl] = Rl(Dx)
  , Xc = "TooltipTrigger"
  , Ik = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = jl(Xc, n)
      , o = jx(Xc, n)
      , i = Vf(n)
      , a = S.useRef(null)
      , l = ct(t, a, s.onTriggerChange)
      , u = S.useRef(!1)
      , c = S.useRef(!1)
      , d = S.useCallback( () => u.current = !1, []);
    return S.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    p.jsx(jk, {
        asChild: !0,
        ...i,
        children: p.jsx(Pe.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: xe(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !o.isPointerInTransitRef.current && (s.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: xe(e.onPointerLeave, () => {
                s.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: xe(e.onPointerDown, () => {
                s.open && s.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: xe(e.onFocus, () => {
                u.current || s.onOpen()
            }
            ),
            onBlur: xe(e.onBlur, s.onClose),
            onClick: xe(e.onClick, s.onClose)
        })
    })
}
);
Ik.displayName = Xc;
var Fk = "TooltipPortal"
  , [gL,_k] = Rl(Fk, {
    forceMount: void 0
})
  , Us = "TooltipContent"
  , Lx = S.forwardRef( (e, t) => {
    const n = _k(Us, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: s="top", ...o} = e
      , i = jl(Us, e.__scopeTooltip);
    return p.jsx(bl, {
        present: r || i.open,
        children: i.disableHoverableContent ? p.jsx(Ox, {
            side: s,
            ...o,
            ref: t
        }) : p.jsx(Vk, {
            side: s,
            ...o,
            ref: t
        })
    })
}
)
  , Vk = S.forwardRef( (e, t) => {
    const n = jl(Us, e.__scopeTooltip)
      , r = jx(Us, e.__scopeTooltip)
      , s = S.useRef(null)
      , o = ct(t, s)
      , [i,a] = S.useState(null)
      , {trigger: l, onClose: u} = n
      , c = s.current
      , {onPointerInTransitChange: d} = r
      , f = S.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = S.useCallback( (x, y) => {
        const w = x.currentTarget
          , g = {
            x: x.clientX,
            y: x.clientY
        }
          , m = Wk(g, w.getBoundingClientRect())
          , v = Hk(g, m)
          , C = Kk(y.getBoundingClientRect())
          , b = Yk([...v, ...C]);
        a(b),
        d(!0)
    }
    , [d]);
    return S.useEffect( () => () => f(), [f]),
    S.useEffect( () => {
        if (l && c) {
            const x = w => h(w, c)
              , y = w => h(w, l);
            return l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", y),
            () => {
                l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", y)
            }
        }
    }
    , [l, c, h, f]),
    S.useEffect( () => {
        if (i) {
            const x = y => {
                const w = y.target
                  , g = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , m = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !Gk(g, i);
                m ? f() : v && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
        }
    }
    , [l, c, i, u, f]),
    p.jsx(Ox, {
        ...e,
        ref: o
    })
}
)
  , [zk,$k] = Rl(Dx, {
    isInside: !1
})
  , Bk = tE("TooltipContent")
  , Ox = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": s, onEscapeKeyDown: o, onPointerDownOutside: i, ...a} = e
      , l = jl(Us, n)
      , u = Vf(n)
      , {onClose: c} = l;
    return S.useEffect( () => (document.addEventListener(cm, c),
    () => document.removeEventListener(cm, c)), [c]),
    S.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    p.jsx(Pf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: p.jsxs(Mk, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [p.jsx(Bk, {
                children: r
            }), p.jsx(zk, {
                scope: n,
                isInside: !0,
                children: p.jsx(EE, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || r
                })
            })]
        })
    })
}
);
Lx.displayName = Us;
var Ix = "TooltipArrow"
  , Uk = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = Vf(n);
    return $k(Ix, n).isInside ? null : p.jsx(Dk, {
        ...s,
        ...r,
        ref: t
    })
}
);
Uk.displayName = Ix;
function Wk(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , s = Math.abs(t.right - e.x)
      , o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, s, o)) {
    case o:
        return "left";
    case s:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Hk(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Kk(e) {
    const {top: t, right: n, bottom: r, left: s} = e;
    return [{
        x: s,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: s,
        y: r
    }]
}
function Gk(e, t) {
    const {x: n, y: r} = e;
    let s = !1;
    for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
        const a = t[o]
          , l = t[i]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (s = !s)
    }
    return s
}
function Yk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Qk(t)
}
function Qk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
            const o = t[t.length - 1]
              , i = t[t.length - 2];
            if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x))
                t.pop();
            else
                break
        }
        t.push(s)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
            const o = n[n.length - 1]
              , i = n[n.length - 2];
            if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x))
                n.pop();
            else
                break
        }
        n.push(s)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var qk = Mx
  , Fx = Lx;
const Xk = qk
  , Zk = S.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => p.jsx(Fx, {
    ref: r,
    sideOffset: t,
    className: sn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Zk.displayName = Fx.displayName;
var Ml = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Dl = typeof window > "u" || "Deno"in globalThis;
function jt() {}
function Jk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function e2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function t2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Zc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function n2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function dm(e, t) {
    const {type: n="all", exact: r, fetchStatus: s, predicate: o, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== zf(i, t.options))
                return !1
        } else if (!ti(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || o && !o(t))
}
function fm(e, t) {
    const {exact: n, status: r, predicate: s, mutationKey: o} = e;
    if (o) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ei(t.options.mutationKey) !== ei(o))
                return !1
        } else if (!ti(t.options.mutationKey, o))
            return !1
    }
    return !(r && t.state.status !== r || s && !s(t))
}
function zf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ei)(e)
}
function ei(e) {
    return JSON.stringify(e, (t, n) => Jc(n) ? Object.keys(n).sort().reduce( (r, s) => (r[s] = n[s],
    r), {}) : n)
}
function ti(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ti(e[n], t[n])) : !1
}
function _x(e, t) {
    if (e === t)
        return e;
    const n = hm(e) && hm(t);
    if (n || Jc(e) && Jc(t)) {
        const r = n ? e : Object.keys(e)
          , s = r.length
          , o = n ? t : Object.keys(t)
          , i = o.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < i; c++) {
            const d = n ? c : o[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = _x(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return s === i && u === s ? e : a
    }
    return t
}
function hm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Jc(e) {
    if (!pm(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!pm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function pm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function r2(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function s2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? _x(e, t) : t
}
function o2(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function i2(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var $f = Symbol();
function Vx(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === $f ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var kr, Vn, ks, ey, a2 = (ey = class extends Ml {
    constructor() {
        super();
        J(this, kr);
        J(this, Vn);
        J(this, ks);
        H(this, ks, t => {
            if (!Dl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, Vn) || this.setEventListener(A(this, ks))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, Vn)) == null || t.call(this),
        H(this, Vn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, ks, t),
        (n = A(this, Vn)) == null || n.call(this),
        H(this, Vn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        A(this, kr) !== t && (H(this, kr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof A(this, kr) == "boolean" ? A(this, kr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
kr = new WeakMap,
Vn = new WeakMap,
ks = new WeakMap,
ey), zx = new a2, As, zn, Ns, ty, l2 = (ty = class extends Ml {
    constructor() {
        super();
        J(this, As, !0);
        J(this, zn);
        J(this, Ns);
        H(this, Ns, t => {
            if (!Dl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, zn) || this.setEventListener(A(this, Ns))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, zn)) == null || t.call(this),
        H(this, zn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Ns, t),
        (n = A(this, zn)) == null || n.call(this),
        H(this, zn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        A(this, As) !== t && (H(this, As, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return A(this, As)
    }
}
,
As = new WeakMap,
zn = new WeakMap,
Ns = new WeakMap,
ty), Ya = new l2;
function u2() {
    let e, t;
    const n = new Promise( (s, o) => {
        e = s,
        t = o
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(s) {
        Object.assign(n, s),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = s => {
        r({
            status: "fulfilled",
            value: s
        }),
        e(s)
    }
    ,
    n.reject = s => {
        r({
            status: "rejected",
            reason: s
        }),
        t(s)
    }
    ,
    n
}
function c2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function $x(e) {
    return (e ?? "online") === "online" ? Ya.isOnline() : !0
}
var Bx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Nu(e) {
    return e instanceof Bx
}
function Ux(e) {
    let t = !1, n = 0, r = !1, s;
    const o = u2()
      , i = y => {
        var w;
        r || (f(new Bx(y)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => zx.isFocused() && (e.networkMode === "always" || Ya.isOnline()) && e.canRun()
      , c = () => $x(e.networkMode) && e.canRun()
      , d = y => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        s == null || s(),
        o.resolve(y))
    }
      , f = y => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, y),
        s == null || s(),
        o.reject(y))
    }
      , h = () => new Promise(y => {
        var w;
        s = g => {
            (r || u()) && y(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        s = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let y;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (g) {
            y = Promise.reject(g)
        }
        Promise.resolve(y).then(d).catch(g => {
            var E;
            if (r)
                return;
            const m = e.retry ?? (Dl ? 0 : 3)
              , v = e.retryDelay ?? c2
              , C = typeof v == "function" ? v(n, g) : v
              , b = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, g);
            if (t || !b) {
                f(g);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, g),
            r2(C).then( () => u() ? void 0 : h()).then( () => {
                t ? f(g) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        cancel: i,
        continue: () => (s == null || s(),
        o),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? x() : h().then(x),
        o)
    }
}
var d2 = e => setTimeout(e, 0);
function f2() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , s = d2;
    const o = a => {
        t ? e.push(a) : s( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && s( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            o( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: o,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            s = a
        }
    }
}
var We = f2(), Ar, ny, Wx = (ny = class {
    constructor() {
        J(this, Ar)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        e2(this.gcTime) && H(this, Ar, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Dl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        A(this, Ar) && (clearTimeout(A(this, Ar)),
        H(this, Ar, void 0))
    }
}
,
Ar = new WeakMap,
ny), Rs, Nr, pt, Rr, _e, ii, jr, Mt, ln, ry, h2 = (ry = class extends Wx {
    constructor(t) {
        super();
        J(this, Mt);
        J(this, Rs);
        J(this, Nr);
        J(this, pt);
        J(this, Rr);
        J(this, _e);
        J(this, ii);
        J(this, jr);
        H(this, jr, !1),
        H(this, ii, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, Rr, t.client),
        H(this, pt, A(this, Rr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Rs, m2(this.options)),
        this.state = t.state ?? A(this, Rs),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = A(this, _e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...A(this, ii),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && A(this, pt).remove(this)
    }
    setData(t, n) {
        const r = s2(this.state.data, t, this.options);
        return Oe(this, Mt, ln).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Oe(this, Mt, ln).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, s;
        const n = (r = A(this, _e)) == null ? void 0 : r.promise;
        return (s = A(this, _e)) == null || s.cancel(t),
        n ? n.then(jt).catch(jt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(A(this, Rs))
    }
    isActive() {
        return this.observers.some(t => n2(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === $f || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Zc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !t2(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, _e)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, _e)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        A(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (A(this, _e) && (A(this, jr) ? A(this, _e).cancel({
            revert: !0
        }) : A(this, _e).cancelRetry()),
        this.scheduleGc()),
        A(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Oe(this, Mt, ln).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (A(this, _e))
                return A(this, _e).continueRetry(),
                A(this, _e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , s = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (H(this, jr, !0),
                r.signal)
            })
        }
          , o = () => {
            const f = Vx(this.options, n)
              , x = ( () => {
                const y = {
                    client: A(this, Rr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(y),
                y
            }
            )();
            return H(this, jr, !1),
            this.options.persister ? this.options.persister(f, x, this) : f(x)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: A(this, Rr),
                state: this.state,
                fetchFn: o
            };
            return s(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, Nr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Oe(this, Mt, ln).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, x, y, w;
            Nu(f) && f.silent || Oe(this, Mt, ln).call(this, {
                type: "error",
                error: f
            }),
            Nu(f) || ((x = (h = A(this, pt).config).onError) == null || x.call(h, f, this),
            (w = (y = A(this, pt).config).onSettled) == null || w.call(y, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, _e, Ux({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, x, y, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (g) {
                    l(g);
                    return
                }
                (x = (h = A(this, pt).config).onSuccess) == null || x.call(h, f, this),
                (w = (y = A(this, pt).config).onSettled) == null || w.call(y, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Oe(this, Mt, ln).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Oe(this, Mt, ln).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Oe(this, Mt, ln).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        A(this, _e).start()
    }
}
,
Rs = new WeakMap,
Nr = new WeakMap,
pt = new WeakMap,
Rr = new WeakMap,
_e = new WeakMap,
ii = new WeakMap,
jr = new WeakMap,
Mt = new WeakSet,
ln = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...p2(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, Nr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = t.error;
            return Nu(s) && s.revert && A(this, Nr) ? {
                ...A(this, Nr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        A(this, pt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ry);
function p2(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: $x(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function m2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Yt, sy, g2 = (sy = class extends Ml {
    constructor(t={}) {
        super();
        J(this, Yt);
        this.config = t,
        H(this, Yt, new Map)
    }
    build(t, n, r) {
        const s = n.queryKey
          , o = n.queryHash ?? zf(s, n);
        let i = this.get(o);
        return i || (i = new h2({
            client: t,
            queryKey: s,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(i)),
        i
    }
    add(t) {
        A(this, Yt).has(t.queryHash) || (A(this, Yt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = A(this, Yt).get(t.queryHash);
        n && (t.destroy(),
        n === t && A(this, Yt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        We.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return A(this, Yt).get(t)
    }
    getAll() {
        return [...A(this, Yt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => dm(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => dm(t, r)) : n
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Yt = new WeakMap,
sy), Qt, Be, Mr, qt, Mn, oy, y2 = (oy = class extends Wx {
    constructor(t) {
        super();
        J(this, qt);
        J(this, Qt);
        J(this, Be);
        J(this, Mr);
        this.mutationId = t.mutationId,
        H(this, Be, t.mutationCache),
        H(this, Qt, []),
        this.state = t.state || v2(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        A(this, Qt).includes(t) || (A(this, Qt).push(t),
        this.clearGcTimeout(),
        A(this, Be).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Qt, A(this, Qt).filter(n => n !== t)),
        this.scheduleGc(),
        A(this, Be).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        A(this, Qt).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, Be).remove(this))
    }
    continue() {
        var t;
        return ((t = A(this, Mr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, a, l, u, c, d, f, h, x, y, w, g, m, v, C, b, E, T, P;
        const n = () => {
            Oe(this, qt, Mn).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Mr, Ux({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, j) => {
                Oe(this, qt, Mn).call(this, {
                    type: "failed",
                    failureCount: R,
                    error: j
                })
            }
            ,
            onPause: () => {
                Oe(this, qt, Mn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, Be).canRun(this)
        }));
        const r = this.state.status === "pending"
          , s = !A(this, Mr).canStart();
        try {
            if (r)
                n();
            else {
                Oe(this, qt, Mn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: s
                }),
                await ((i = (o = A(this, Be).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const j = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                j !== this.state.context && Oe(this, qt, Mn).call(this, {
                    type: "pending",
                    context: j,
                    variables: t,
                    isPaused: s
                })
            }
            const R = await A(this, Mr).start();
            return await ((c = (u = A(this, Be).config).onSuccess) == null ? void 0 : c.call(u, R, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, R, t, this.state.context)),
            await ((x = (h = A(this, Be).config).onSettled) == null ? void 0 : x.call(h, R, null, this.state.variables, this.state.context, this)),
            await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, R, null, t, this.state.context)),
            Oe(this, qt, Mn).call(this, {
                type: "success",
                data: R
            }),
            R
        } catch (R) {
            try {
                throw await ((m = (g = A(this, Be).config).onError) == null ? void 0 : m.call(g, R, t, this.state.context, this)),
                await ((C = (v = this.options).onError) == null ? void 0 : C.call(v, R, t, this.state.context)),
                await ((E = (b = A(this, Be).config).onSettled) == null ? void 0 : E.call(b, void 0, R, this.state.variables, this.state.context, this)),
                await ((P = (T = this.options).onSettled) == null ? void 0 : P.call(T, void 0, R, t, this.state.context)),
                R
            } finally {
                Oe(this, qt, Mn).call(this, {
                    type: "error",
                    error: R
                })
            }
        } finally {
            A(this, Be).runNext(this)
        }
    }
}
,
Qt = new WeakMap,
Be = new WeakMap,
Mr = new WeakMap,
qt = new WeakSet,
Mn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        A(this, Qt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        A(this, Be).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
oy);
function v2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var dn, Dt, ai, iy, x2 = (iy = class extends Ml {
    constructor(t={}) {
        super();
        J(this, dn);
        J(this, Dt);
        J(this, ai);
        this.config = t,
        H(this, dn, new Set),
        H(this, Dt, new Map),
        H(this, ai, 0)
    }
    build(t, n, r) {
        const s = new y2({
            mutationCache: this,
            mutationId: ++bi(this, ai)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(s),
        s
    }
    add(t) {
        A(this, dn).add(t);
        const n = Hi(t);
        if (typeof n == "string") {
            const r = A(this, Dt).get(n);
            r ? r.push(t) : A(this, Dt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (A(this, dn).delete(t)) {
            const n = Hi(t);
            if (typeof n == "string") {
                const r = A(this, Dt).get(n);
                if (r)
                    if (r.length > 1) {
                        const s = r.indexOf(t);
                        s !== -1 && r.splice(s, 1)
                    } else
                        r[0] === t && A(this, Dt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Hi(t);
        if (typeof n == "string") {
            const r = A(this, Dt).get(n)
              , s = r == null ? void 0 : r.find(o => o.state.status === "pending");
            return !s || s === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Hi(t);
        if (typeof n == "string") {
            const s = (r = A(this, Dt).get(n)) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        We.batch( () => {
            A(this, dn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            A(this, dn).clear(),
            A(this, Dt).clear()
        }
        )
    }
    getAll() {
        return Array.from(A(this, dn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => fm(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => fm(t, n))
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return We.batch( () => Promise.all(t.map(n => n.continue().catch(jt))))
    }
}
,
dn = new WeakMap,
Dt = new WeakMap,
ai = new WeakMap,
iy);
function Hi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function mm(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, x;
            const r = t.options
              , s = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , o = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , i = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let y = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = Vx(t.options, t.fetchOptions)
                  , m = async (v, C, b) => {
                    if (y)
                        return Promise.reject();
                    if (C == null && v.pages.length)
                        return Promise.resolve(v);
                    const T = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , P = await g(T)
                      , {maxPages: R} = t.options
                      , j = b ? i2 : o2;
                    return {
                        pages: j(v.pages, P, R),
                        pageParams: j(v.pageParams, C, R)
                    }
                }
                ;
                if (s && o.length) {
                    const v = s === "backward"
                      , C = v ? w2 : gm
                      , b = {
                        pages: o,
                        pageParams: i
                    }
                      , E = C(r, b);
                    a = await m(b, E, v)
                } else {
                    const v = e ?? o.length;
                    do {
                        const C = l === 0 ? i[0] ?? r.initialPageParam : gm(r, a);
                        if (l > 0 && C == null)
                            break;
                        a = await m(a, C),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, w;
                return (w = (y = t.options).persister) == null ? void 0 : w.call(y, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function gm(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function w2(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var me, $n, Bn, js, Ms, Un, Ds, Ls, ay, S2 = (ay = class {
    constructor(e={}) {
        J(this, me);
        J(this, $n);
        J(this, Bn);
        J(this, js);
        J(this, Ms);
        J(this, Un);
        J(this, Ds);
        J(this, Ls);
        H(this, me, e.queryCache || new g2),
        H(this, $n, e.mutationCache || new x2),
        H(this, Bn, e.defaultOptions || {}),
        H(this, js, new Map),
        H(this, Ms, new Map),
        H(this, Un, 0)
    }
    mount() {
        bi(this, Un)._++,
        A(this, Un) === 1 && (H(this, Ds, zx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, me).onFocus())
        }
        )),
        H(this, Ls, Ya.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        bi(this, Un)._--,
        A(this, Un) === 0 && ((e = A(this, Ds)) == null || e.call(this),
        H(this, Ds, void 0),
        (t = A(this, Ls)) == null || t.call(this),
        H(this, Ls, void 0))
    }
    isFetching(e) {
        return A(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return A(this, $n).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, me).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = A(this, me).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Zc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return A(this, me).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , s = A(this, me).get(r.queryHash)
          , o = s == null ? void 0 : s.state.data
          , i = Jk(t, o);
        if (i !== void 0)
            return A(this, me).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return We.batch( () => A(this, me).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, me).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = A(this, me);
        We.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = A(this, me);
        return We.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = We.batch( () => A(this, me).findAll(e).map(s => s.cancel(n)));
        return Promise.all(r).then(jt).catch(jt)
    }
    invalidateQueries(e, t={}) {
        return We.batch( () => (A(this, me).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = We.batch( () => A(this, me).findAll(e).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
            let o = s.fetch(void 0, n);
            return n.throwOnError || (o = o.catch(jt)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : o
        }
        ));
        return Promise.all(r).then(jt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, me).build(this, t);
        return n.isStaleByTime(Zc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(jt).catch(jt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = mm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(jt).catch(jt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = mm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ya.isOnline() ? A(this, $n).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return A(this, me)
    }
    getMutationCache() {
        return A(this, $n)
    }
    getDefaultOptions() {
        return A(this, Bn)
    }
    setDefaultOptions(e) {
        H(this, Bn, e)
    }
    setQueryDefaults(e, t) {
        A(this, js).set(ei(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...A(this, js).values()]
          , n = {};
        return t.forEach(r => {
            ti(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        A(this, Ms).set(ei(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...A(this, Ms).values()]
          , n = {};
        return t.forEach(r => {
            ti(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...A(this, Bn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = zf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === $f && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...A(this, Bn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        A(this, me).clear(),
        A(this, $n).clear()
    }
}
,
me = new WeakMap,
$n = new WeakMap,
Bn = new WeakMap,
js = new WeakMap,
Ms = new WeakMap,
Un = new WeakMap,
Ds = new WeakMap,
Ls = new WeakMap,
ay), C2 = S.createContext(void 0), b2 = ({client: e, children: t}) => (S.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
p.jsx(C2.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qa() {
    return Qa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Qa.apply(this, arguments)
}
var Kn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Kn || (Kn = {}));
const ym = "popstate";
function E2(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let {pathname: o, search: i, hash: a} = r.location;
        return ed("", {
            pathname: o,
            search: i,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : Kx(s)
    }
    return P2(t, n, null, e)
}
function rt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Hx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function T2() {
    return Math.random().toString(36).substr(2, 8)
}
function vm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function ed(e, t, n, r) {
    return n === void 0 && (n = null),
    Qa({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ll(t) : t, {
        state: n,
        key: t && t.key || r || T2()
    })
}
function Kx(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ll(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function P2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s=document.defaultView, v5Compat: o=!1} = r
      , i = s.history
      , a = Kn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    i.replaceState(Qa({}, i.state, {
        idx: u
    }), ""));
    function c() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Kn.Pop;
        let w = c()
          , g = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: y.location,
            delta: g
        })
    }
    function f(w, g) {
        a = Kn.Push;
        let m = ed(y.location, w, g);
        u = c() + 1;
        let v = vm(m, u)
          , C = y.createHref(m);
        try {
            i.pushState(v, "", C)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            s.location.assign(C)
        }
        o && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function h(w, g) {
        a = Kn.Replace;
        let m = ed(y.location, w, g);
        u = c();
        let v = vm(m, u)
          , C = y.createHref(m);
        i.replaceState(v, "", C),
        o && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function x(w) {
        let g = s.location.origin !== "null" ? s.location.origin : s.location.href
          , m = typeof w == "string" ? w : Kx(w);
        return m = m.replace(/ $/, "%20"),
        rt(g, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,g)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(s, i)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(ym, d),
            l = w,
            () => {
                s.removeEventListener(ym, d),
                l = null
            }
        },
        createHref(w) {
            return t(s, w)
        },
        createURL: x,
        encodeLocation(w) {
            let g = x(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return i.go(w)
        }
    };
    return y
}
var xm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(xm || (xm = {}));
function k2(e, t, n) {
    return n === void 0 && (n = "/"),
    A2(e, t, n, !1)
}
function A2(e, t, n, r) {
    let s = typeof t == "string" ? Ll(t) : t
      , o = Qx(s.pathname || "/", n);
    if (o == null)
        return null;
    let i = Gx(e);
    N2(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = z2(o);
        a = _2(i[l], u, r)
    }
    return a
}
function Gx(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let s = (o, i, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        l.relativePath.startsWith("/") && (rt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Ts([r, l.relativePath])
          , c = n.concat(l);
        o.children && o.children.length > 0 && (rt(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Gx(o.children, t, c, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: I2(u, o.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (o, i) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            s(o, i);
        else
            for (let l of Yx(o.path))
                s(o, i, l)
    }
    ),
    t
}
function Yx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [o, ""] : [o];
    let i = Yx(r.join("/"))
      , a = [];
    return a.push(...i.map(l => l === "" ? o : [o, l].join("/"))),
    s && a.push(...i),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function N2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : F2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const R2 = /^:[\w-]+$/
  , j2 = 3
  , M2 = 2
  , D2 = 1
  , L2 = 10
  , O2 = -2
  , wm = e => e === "*";
function I2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(wm) && (r += O2),
    t && (r += M2),
    n.filter(s => !wm(s)).reduce( (s, o) => s + (R2.test(o) ? j2 : o === "" ? D2 : L2), r)
}
function F2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function _2(e, t, n) {
    let {routesMeta: r} = e
      , s = {}
      , o = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = o === "/" ? t : t.slice(o.length) || "/"
          , d = Sm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Sm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(s, d.params),
        i.push({
            params: s,
            pathname: Ts([o, d.pathname]),
            pathnameBase: $2(Ts([o, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (o = Ts([o, d.pathnameBase]))
    }
    return i
}
function Sm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = V2(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let o = s[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let y = a[d] || "";
                i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[d];
            return h && !x ? u[f] = void 0 : u[f] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function V2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function z2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Hx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Qx(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Ts = e => e.join("/").replace(/\/\/+/g, "/")
  , $2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function B2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const qx = ["post", "put", "patch", "delete"];
new Set(qx);
const U2 = ["get", ...qx];
new Set(U2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qa() {
    return qa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    qa.apply(this, arguments)
}
const W2 = S.createContext(null)
  , H2 = S.createContext(null)
  , Xx = S.createContext(null)
  , Ol = S.createContext(null)
  , Il = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Zx = S.createContext(null);
function Bf() {
    return S.useContext(Ol) != null
}
function Jx() {
    return Bf() || rt(!1),
    S.useContext(Ol).location
}
function K2(e, t) {
    return G2(e, t)
}
function G2(e, t, n, r) {
    Bf() || rt(!1);
    let {navigator: s} = S.useContext(Xx)
      , {matches: o} = S.useContext(Il)
      , i = o[o.length - 1]
      , a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = Jx(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? Ll(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || rt(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let x = k2(e, {
        pathname: h
    })
      , y = Z2(x && x.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Ts([l, s.encodeLocation ? s.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Ts([l, s.encodeLocation ? s.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), o, n, r);
    return t && y ? S.createElement(Ol.Provider, {
        value: {
            location: qa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Kn.Pop
        }
    }, y) : y
}
function Y2() {
    let e = nA()
      , t = B2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: s
    }, n) : null, null)
}
const Q2 = S.createElement(Y2, null);
class q2 extends S.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(Il.Provider, {
            value: this.props.routeContext
        }, S.createElement(Zx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function X2(e) {
    let {routeContext: t, match: n, children: r} = e
      , s = S.useContext(W2);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Il.Provider, {
        value: t
    }, r)
}
function Z2(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let c = i.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || rt(!1),
        i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , x = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (c, d, f) => {
        let h, x = !1, y = null, w = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        y = d.route.errorElement || Q2,
        l && (u < 0 && f === 0 ? (x = !0,
        w = null) : u === f && (x = !0,
        w = d.route.hydrateFallbackElement || null)));
        let g = t.concat(i.slice(0, f + 1))
          , m = () => {
            let v;
            return h ? v = y : x ? v = w : d.route.Component ? v = S.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            S.createElement(X2, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? S.createElement(q2, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var td = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(td || {});
function J2(e) {
    let t = S.useContext(H2);
    return t || rt(!1),
    t
}
function eA(e) {
    let t = S.useContext(Il);
    return t || rt(!1),
    t
}
function tA(e) {
    let t = eA()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || rt(!1),
    n.route.id
}
function nA() {
    var e;
    let t = S.useContext(Zx)
      , n = J2(td.UseRouteError)
      , r = tA(td.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function rA(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function nd(e) {
    rt(!1)
}
function sA(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: s=Kn.Pop, navigator: o, static: i=!1, future: a} = e;
    Bf() && rt(!1);
    let l = t.replace(/^\/*/, "/")
      , u = S.useMemo( () => ({
        basename: l,
        navigator: o,
        static: i,
        future: qa({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, o, i]);
    typeof r == "string" && (r = Ll(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: x="default"} = r
      , y = S.useMemo( () => {
        let w = Qx(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: x
            },
            navigationType: s
        }
    }
    , [l, c, d, f, h, x, s]);
    return y == null ? null : S.createElement(Xx.Provider, {
        value: u
    }, S.createElement(Ol.Provider, {
        children: n,
        value: y
    }))
}
function oA(e) {
    let {children: t, location: n} = e;
    return K2(rd(t), n)
}
new Promise( () => {}
);
function rd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return S.Children.forEach(e, (r, s) => {
        if (!S.isValidElement(r))
            return;
        let o = [...t, s];
        if (r.type === S.Fragment) {
            n.push.apply(n, rd(r.props.children, o));
            return
        }
        r.type !== nd && rt(!1),
        !r.props.index || !r.props.children || rt(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = rd(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const iA = "6";
try {
    window.__reactRouterVersion = iA
} catch {}
const aA = "startTransition"
  , Cm = Ld[aA];
function lA(e) {
    let {basename: t, children: n, future: r, window: s} = e
      , o = S.useRef();
    o.current == null && (o.current = E2({
        window: s,
        v5Compat: !0
    }));
    let i = o.current
      , [a,l] = S.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , c = S.useCallback(d => {
        u && Cm ? Cm( () => l(d)) : l(d)
    }
    , [l, u]);
    return S.useLayoutEffect( () => i.listen(c), [i, c]),
    S.useEffect( () => rA(r), [r]),
    S.createElement(sA, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
var bm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(bm || (bm = {}));
var Em;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Em || (Em = {}));
const Uf = S.createContext({});
function Fl(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const ew = typeof window < "u"
  , Wf = ew ? S.useLayoutEffect : S.useEffect
  , _l = S.createContext(null);
function Hf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Xa(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const Bt = (e, t, n) => n > t ? t : n < e ? e : n;
let Vl = () => {}
  , cr = () => {}
;
const Sn = {}
  , tw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function nw(e) {
    return typeof e == "object" && e !== null
}
const rw = e => /^0[^.\s]+$/u.test(e);
function sw(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const nt = e => e
  , uA = (e, t) => n => t(e(n))
  , gi = (...e) => e.reduce(uA)
  , Ws = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class Kf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Hf(this.subscriptions, t),
        () => Xa(this.subscriptions, t)
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < s; o++) {
                    const i = this.subscriptions[o];
                    i && i(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const wt = e => e * 1e3
  , vt = e => e / 1e3;
function Gf(e, t) {
    return t ? e * (1e3 / t) : 0
}
const ow = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , cA = 1e-7
  , dA = 12;
function fA(e, t, n, r, s) {
    let o, i, a = 0;
    do
        i = t + (n - t) / 2,
        o = ow(i, r, s) - e,
        o > 0 ? n = i : t = i;
    while (Math.abs(o) > cA && ++a < dA);
    return i
}
function yi(e, t, n, r) {
    if (e === t && n === r)
        return nt;
    const s = o => fA(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : ow(s(o), t, r)
}
const iw = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , aw = e => t => 1 - e(1 - t)
  , lw = yi(.33, 1.53, .69, .99)
  , Yf = aw(lw)
  , uw = iw(Yf)
  , cw = e => (e *= 2) < 1 ? .5 * Yf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Qf = e => 1 - Math.sin(Math.acos(e))
  , dw = aw(Qf)
  , fw = iw(Qf)
  , hA = yi(.42, 0, 1, 1)
  , pA = yi(0, 0, .58, 1)
  , hw = yi(.42, 0, .58, 1)
  , mA = e => Array.isArray(e) && typeof e[0] != "number"
  , pw = e => Array.isArray(e) && typeof e[0] == "number"
  , Tm = {
    linear: nt,
    easeIn: hA,
    easeInOut: hw,
    easeOut: pA,
    circIn: Qf,
    circInOut: fw,
    circOut: dw,
    backIn: Yf,
    backInOut: uw,
    backOut: lw,
    anticipate: cw
}
  , gA = e => typeof e == "string"
  , Pm = e => {
    if (pw(e)) {
        cr(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,s] = e;
        return yi(t, n, r, s)
    } else if (gA(e))
        return cr(Tm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        Tm[e];
    return e
}
  , Ki = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , km = {
    value: null,
    addProjectionMetrics: null
};
function yA(e, t) {
    let n = new Set
      , r = new Set
      , s = !1
      , o = !1;
    const i = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        i.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const y = h && s ? n : r;
            return f && i.add(d),
            y.has(d) || y.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            i.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            s) {
                o = !0;
                return
            }
            s = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && km.value && km.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            s = !1,
            o && (o = !1,
            c.process(d))
        }
    };
    return c
}
const vA = 40;
function mw(e, t) {
    let n = !1
      , r = !0;
    const s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , i = Ki.reduce( (v, C) => (v[C] = yA(o, t ? C : void 0),
    v), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: x} = i
      , y = () => {
        const v = Sn.useManualTiming ? s.timestamp : performance.now();
        n = !1,
        Sn.useManualTiming || (s.delta = r ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, vA), 1)),
        s.timestamp = v,
        s.isProcessing = !0,
        a.process(s),
        l.process(s),
        u.process(s),
        c.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        x.process(s),
        s.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , w = () => {
        n = !0,
        r = !0,
        s.isProcessing || e(y)
    }
    ;
    return {
        schedule: Ki.reduce( (v, C) => {
            const b = i[C];
            return v[C] = (E, T=!1, P=!1) => (n || w(),
            b.schedule(E, T, P)),
            v
        }
        , {}),
        cancel: v => {
            for (let C = 0; C < Ki.length; C++)
                i[Ki[C]].cancel(v)
        }
        ,
        state: s,
        steps: i
    }
}
const {schedule: ee, cancel: Ut, state: ke, steps: Ru} = mw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nt, !0);
let ha;
function xA() {
    ha = void 0
}
const He = {
    now: () => (ha === void 0 && He.set(ke.isProcessing || Sn.useManualTiming ? ke.timestamp : performance.now()),
    ha),
    set: e => {
        ha = e,
        queueMicrotask(xA)
    }
}
  , gw = e => t => typeof t == "string" && t.startsWith(e)
  , yw = gw("--")
  , wA = gw("var(--")
  , qf = e => wA(e) ? SA.test(e.split("/*")[0].trim()) : !1
  , SA = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Am(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Zs = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , ni = {
    ...Zs,
    transform: e => Bt(0, 1, e)
}
  , Gi = {
    ...Zs,
    default: 1
}
  , Ro = e => Math.round(e * 1e5) / 1e5
  , Xf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function CA(e) {
    return e == null
}
const bA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Zf = (e, t) => n => !!(typeof n == "string" && bA.test(n) && n.startsWith(e) || t && !CA(n) && Object.prototype.hasOwnProperty.call(n, t))
  , vw = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [s,o,i,a] = r.match(Xf);
    return {
        [e]: parseFloat(s),
        [t]: parseFloat(o),
        [n]: parseFloat(i),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , EA = e => Bt(0, 255, e)
  , ju = {
    ...Zs,
    transform: e => Math.round(EA(e))
}
  , Tr = {
    test: Zf("rgb", "red"),
    parse: vw("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + ju.transform(e) + ", " + ju.transform(t) + ", " + ju.transform(n) + ", " + Ro(ni.transform(r)) + ")"
};
function TA(e) {
    let t = ""
      , n = ""
      , r = ""
      , s = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    s = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    s = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    s += s),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const sd = {
    test: Zf("#"),
    parse: TA,
    transform: Tr.transform
}
  , vi = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Dn = vi("deg")
  , tn = vi("%")
  , _ = vi("px")
  , PA = vi("vh")
  , kA = vi("vw")
  , Nm = {
    ...tn,
    parse: e => tn.parse(e) / 100,
    transform: e => tn.transform(e * 100)
}
  , fs = {
    test: Zf("hsl", "hue"),
    parse: vw("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + tn.transform(Ro(t)) + ", " + tn.transform(Ro(n)) + ", " + Ro(ni.transform(r)) + ")"
}
  , Se = {
    test: e => Tr.test(e) || sd.test(e) || fs.test(e),
    parse: e => Tr.test(e) ? Tr.parse(e) : fs.test(e) ? fs.parse(e) : sd.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Tr.transform(e) : fs.transform(e),
    getAnimatableNone: e => {
        const t = Se.parse(e);
        return t.alpha = 0,
        Se.transform(t)
    }
}
  , AA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function NA(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Xf)) == null ? void 0 : t.length) || 0) + (((n = e.match(AA)) == null ? void 0 : n.length) || 0) > 0
}
const xw = "number"
  , ww = "color"
  , RA = "var"
  , jA = "var("
  , Rm = "${}"
  , MA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ri(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , s = [];
    let o = 0;
    const a = t.replace(MA, l => (Se.test(l) ? (r.color.push(o),
    s.push(ww),
    n.push(Se.parse(l))) : l.startsWith(jA) ? (r.var.push(o),
    s.push(RA),
    n.push(l)) : (r.number.push(o),
    s.push(xw),
    n.push(parseFloat(l))),
    ++o,
    Rm)).split(Rm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: s
    }
}
function Sw(e) {
    return ri(e).values
}
function Cw(e) {
    const {split: t, types: n} = ri(e)
      , r = t.length;
    return s => {
        let o = "";
        for (let i = 0; i < r; i++)
            if (o += t[i],
            s[i] !== void 0) {
                const a = n[i];
                a === xw ? o += Ro(s[i]) : a === ww ? o += Se.transform(s[i]) : o += s[i]
            }
        return o
    }
}
const DA = e => typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e;
function LA(e) {
    const t = Sw(e);
    return Cw(e)(t.map(DA))
}
const _t = {
    test: NA,
    parse: Sw,
    createTransformer: Cw,
    getAnimatableNone: LA
};
function Mu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function OA({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let s = 0
      , o = 0
      , i = 0;
    if (!t)
        s = o = i = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        s = Mu(l, a, e + 1 / 3),
        o = Mu(l, a, e),
        i = Mu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(o * 255),
        blue: Math.round(i * 255),
        alpha: r
    }
}
function Za(e, t) {
    return n => n > 0 ? t : e
}
const fe = (e, t, n) => e + (t - e) * n
  , Du = (e, t, n) => {
    const r = e * e
      , s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s)
}
  , IA = [sd, Tr, fs]
  , FA = e => IA.find(t => t.test(e));
function jm(e) {
    const t = FA(e);
    if (Vl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === fs && (n = OA(n)),
    n
}
const Mm = (e, t) => {
    const n = jm(e)
      , r = jm(t);
    if (!n || !r)
        return Za(e, t);
    const s = {
        ...n
    };
    return o => (s.red = Du(n.red, r.red, o),
    s.green = Du(n.green, r.green, o),
    s.blue = Du(n.blue, r.blue, o),
    s.alpha = fe(n.alpha, r.alpha, o),
    Tr.transform(s))
}
  , od = new Set(["none", "hidden"]);
function _A(e, t) {
    return od.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function VA(e, t) {
    return n => fe(e, t, n)
}
function Jf(e) {
    return typeof e == "number" ? VA : typeof e == "string" ? qf(e) ? Za : Se.test(e) ? Mm : BA : Array.isArray(e) ? bw : typeof e == "object" ? Se.test(e) ? Mm : zA : Za
}
function bw(e, t) {
    const n = [...e]
      , r = n.length
      , s = e.map( (o, i) => Jf(o)(o, t[i]));
    return o => {
        for (let i = 0; i < r; i++)
            n[i] = s[i](o);
        return n
    }
}
function zA(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const s in n)
        e[s] !== void 0 && t[s] !== void 0 && (r[s] = Jf(e[s])(e[s], t[s]));
    return s => {
        for (const o in r)
            n[o] = r[o](s);
        return n
    }
}
function $A(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s]
          , i = e.indexes[o][r[o]]
          , a = e.values[i] ?? 0;
        n[s] = a,
        r[o]++
    }
    return n
}
const BA = (e, t) => {
    const n = _t.createTransformer(t)
      , r = ri(e)
      , s = ri(t);
    return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? od.has(e) && !s.values.length || od.has(t) && !r.values.length ? _A(e, t) : gi(bw($A(r, s), s.values), n) : (Vl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    Za(e, t))
}
;
function Ew(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : Jf(e)(e, t)
}
const UA = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => ee.update(t, n),
        stop: () => Ut(t),
        now: () => ke.isProcessing ? ke.timestamp : He.now()
    }
}
  , Tw = (e, t, n=10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < s; o++)
        r += Math.round(e(o / (s - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Ja = 2e4;
function eh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Ja; )
        t += n,
        r = e.next(t);
    return t >= Ja ? 1 / 0 : t
}
function WA(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , s = Math.min(eh(r), Ja);
    return {
        type: "keyframes",
        ease: o => r.next(s * o).value / t,
        duration: vt(s)
    }
}
const HA = 5;
function Pw(e, t, n) {
    const r = Math.max(t - HA, 0);
    return Gf(n - e(r), t - r)
}
const ce = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Lu = .001;
function KA({duration: e=ce.duration, bounce: t=ce.bounce, velocity: n=ce.velocity, mass: r=ce.mass}) {
    let s, o;
    Vl(e <= wt(ce.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let i = 1 - t;
    i = Bt(ce.minDamping, ce.maxDamping, i),
    e = Bt(ce.minDuration, ce.maxDuration, vt(e)),
    i < 1 ? (s = u => {
        const c = u * i
          , d = c * e
          , f = c - n
          , h = id(u, i)
          , x = Math.exp(-d);
        return Lu - f / h * x
    }
    ,
    o = u => {
        const d = u * i * e
          , f = d * n + n
          , h = Math.pow(i, 2) * Math.pow(u, 2) * e
          , x = Math.exp(-d)
          , y = id(Math.pow(u, 2), i);
        return (-s(u) + Lu > 0 ? -1 : 1) * ((f - h) * x) / y
    }
    ) : (s = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Lu + c * d
    }
    ,
    o = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = YA(s, o, a);
    if (e = wt(e),
    isNaN(l))
        return {
            stiffness: ce.stiffness,
            damping: ce.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: i * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const GA = 12;
function YA(e, t, n) {
    let r = n;
    for (let s = 1; s < GA; s++)
        r = r - e(r) / t(r);
    return r
}
function id(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const QA = ["duration", "bounce"]
  , qA = ["stiffness", "damping", "mass"];
function Dm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function XA(e) {
    let t = {
        velocity: ce.velocity,
        stiffness: ce.stiffness,
        damping: ce.damping,
        mass: ce.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Dm(e, qA) && Dm(e, QA))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , s = r * r
              , o = 2 * Bt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
            t = {
                ...t,
                mass: ce.mass,
                stiffness: s,
                damping: o
            }
        } else {
            const n = KA({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: ce.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function el(e=ce.visualDuration, t=ce.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: s} = n;
    const o = n.keyframes[0]
      , i = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: o
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = XA({
        ...n,
        velocity: -vt(n.velocity || 0)
    })
      , x = f || 0
      , y = u / (2 * Math.sqrt(l * c))
      , w = i - o
      , g = vt(Math.sqrt(l / c))
      , m = Math.abs(w) < 5;
    r || (r = m ? ce.restSpeed.granular : ce.restSpeed.default),
    s || (s = m ? ce.restDelta.granular : ce.restDelta.default);
    let v;
    if (y < 1) {
        const b = id(g, y);
        v = E => {
            const T = Math.exp(-y * g * E);
            return i - T * ((x + y * g * w) / b * Math.sin(b * E) + w * Math.cos(b * E))
        }
    } else if (y === 1)
        v = b => i - Math.exp(-g * b) * (w + (x + g * w) * b);
    else {
        const b = g * Math.sqrt(y * y - 1);
        v = E => {
            const T = Math.exp(-y * g * E)
              , P = Math.min(b * E, 300);
            return i - T * ((x + y * g * w) * Math.sinh(P) + b * w * Math.cosh(P)) / b
        }
    }
    const C = {
        calculatedDuration: h && d || null,
        next: b => {
            const E = v(b);
            if (h)
                a.done = b >= d;
            else {
                let T = b === 0 ? x : 0;
                y < 1 && (T = b === 0 ? wt(x) : Pw(v, b, E));
                const P = Math.abs(T) <= r
                  , R = Math.abs(i - E) <= s;
                a.done = P && R
            }
            return a.value = a.done ? i : E,
            a
        }
        ,
        toString: () => {
            const b = Math.min(eh(C), Ja)
              , E = Tw(T => C.next(b * T).value, b, 30);
            return b + "ms " + E
        }
        ,
        toTransition: () => {}
    };
    return C
}
el.applyToOptions = e => {
    const t = WA(e, 100, el);
    return e.ease = t.ease,
    e.duration = wt(t.duration),
    e.type = "keyframes",
    e
}
;
function ad({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: s=10, bounceStiffness: o=500, modifyTarget: i, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = P => a !== void 0 && P < a || l !== void 0 && P > l
      , x = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let y = n * t;
    const w = d + y
      , g = i === void 0 ? w : i(w);
    g !== w && (y = g - d);
    const m = P => -y * Math.exp(-P / r)
      , v = P => g + m(P)
      , C = P => {
        const R = m(P)
          , j = v(P);
        f.done = Math.abs(R) <= u,
        f.value = f.done ? g : j
    }
    ;
    let b, E;
    const T = P => {
        h(f.value) && (b = P,
        E = el({
            keyframes: [f.value, x(f.value)],
            velocity: Pw(v, P, f.value),
            damping: s,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: P => {
            let R = !1;
            return !E && b === void 0 && (R = !0,
            C(P),
            T(P)),
            b !== void 0 && P >= b ? E.next(P - b) : (!R && C(P),
            f)
        }
    }
}
function ZA(e, t, n) {
    const r = []
      , s = n || Sn.mix || Ew
      , o = e.length - 1;
    for (let i = 0; i < o; i++) {
        let a = s(e[i], e[i + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[i] || nt : t;
            a = gi(l, a)
        }
        r.push(a)
    }
    return r
}
function kw(e, t, {clamp: n=!0, ease: r, mixer: s}={}) {
    const o = e.length;
    if (cr(o === t.length, "Both input and output ranges must be the same length", "range-length"),
    o === 1)
        return () => t[0];
    if (o === 2 && t[0] === t[1])
        return () => t[1];
    const i = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = ZA(t, r, s)
      , l = a.length
      , u = c => {
        if (i && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = Ws(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(Bt(e[0], e[o - 1], c)) : u
}
function JA(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = Ws(0, t, r);
        e.push(fe(n, 1, s))
    }
}
function Aw(e) {
    const t = [0];
    return JA(t, e.length - 1),
    t
}
function eN(e, t) {
    return e.map(n => n * t)
}
function tN(e, t) {
    return e.map( () => t || hw).splice(0, e.length - 1)
}
function jo({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const s = mA(r) ? r.map(Pm) : Pm(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , i = eN(n && n.length === t.length ? n : Aw(t), e)
      , a = kw(i, t, {
        ease: Array.isArray(s) ? s : tN(t, s)
    });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l),
        o.done = l >= e,
        o)
    }
}
const nN = e => e !== null;
function th(e, {repeat: t, repeatType: n="loop"}, r, s=1) {
    const o = e.filter(nN)
      , a = s < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !a || r === void 0 ? o[a] : r
}
const rN = {
    decay: ad,
    inertia: ad,
    tween: jo,
    keyframes: jo,
    spring: el
};
function Nw(e) {
    typeof e.type == "string" && (e.type = rN[e.type])
}
class nh {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const sN = e => e / 100;
class rh extends nh {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, s;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== He.now() && this.tick(He.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (s = (r = this.options).onStop) == null || s.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        Nw(t);
        const {type: n=jo, repeat: r=0, repeatDelay: s=0, repeatType: o, velocity: i=0} = t;
        let {keyframes: a} = t;
        const l = n || jo;
        l !== jo && typeof a[0] != "number" && (this.mixKeyframes = gi(sN, Ew(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        o === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -i
        })),
        u.calculatedDuration === null && (u.calculatedDuration = eh(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + s,
        this.totalDuration = this.resolvedDuration * (r + 1) - s,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: s, mixKeyframes: o, mirroredGenerator: i, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: x, onUpdate: y, finalKeyframe: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , m = this.playbackSpeed >= 0 ? g < 0 : g > s;
        this.currentTime = Math.max(g, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = s);
        let v = this.currentTime
          , C = r;
        if (d) {
            const P = Math.min(this.currentTime, s) / a;
            let R = Math.floor(P)
              , j = P % 1;
            !j && P >= 1 && (j = 1),
            j === 1 && R--,
            R = Math.min(R, d + 1),
            !!(R % 2) && (f === "reverse" ? (j = 1 - j,
            h && (j -= h / a)) : f === "mirror" && (C = i)),
            v = Bt(0, 1, j) * a
        }
        const b = m ? {
            done: !1,
            value: c[0]
        } : C.next(v);
        o && (b.value = o(b.value));
        let {done: E} = b;
        !m && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return T && x !== ad && (b.value = th(c, this.options, w, this.speed)),
        y && y(b.value),
        T && this.finish(),
        b
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return vt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + vt(t)
    }
    get time() {
        return vt(this.currentTime)
    }
    set time(t) {
        var n;
        t = wt(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(He.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = vt(this.currentTime))
    }
    play() {
        var s, o;
        if (this.isStopped)
            return;
        const {driver: t=UA, startTime: n} = this.options;
        this.driver || (this.driver = t(i => this.tick(i))),
        (o = (s = this.options).onPlay) == null || o.call(s);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(He.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function oN(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Pr = e => e * 180 / Math.PI
  , ld = e => {
    const t = Pr(Math.atan2(e[1], e[0]));
    return ud(t)
}
  , iN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ld,
    rotateZ: ld,
    skewX: e => Pr(Math.atan(e[1])),
    skewY: e => Pr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , ud = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , Lm = ld
  , Om = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Im = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , aN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Om,
    scaleY: Im,
    scale: e => (Om(e) + Im(e)) / 2,
    rotateX: e => ud(Pr(Math.atan2(e[6], e[5]))),
    rotateY: e => ud(Pr(Math.atan2(-e[2], e[0]))),
    rotateZ: Lm,
    rotate: Lm,
    skewX: e => Pr(Math.atan(e[4])),
    skewY: e => Pr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function cd(e) {
    return e.includes("scale") ? 1 : 0
}
function dd(e, t) {
    if (!e || e === "none")
        return cd(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, s;
    if (n)
        r = aN,
        s = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = iN,
        s = a
    }
    if (!s)
        return cd(t);
    const o = r[t]
      , i = s[1].split(",").map(uN);
    return typeof o == "function" ? o(i) : i[o]
}
const lN = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return dd(n, t)
}
;
function uN(e) {
    return parseFloat(e.trim())
}
const Js = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , eo = new Set(Js)
  , Fm = e => e === Zs || e === _
  , cN = new Set(["x", "y", "z"])
  , dN = Js.filter(e => !cN.has(e));
function fN(e) {
    const t = [];
    return dN.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Gn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => dd(t, "x"),
    y: (e, {transform: t}) => dd(t, "y")
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const Or = new Set;
let fd = !1
  , hd = !1
  , pd = !1;
function Rw() {
    if (hd) {
        const e = Array.from(Or).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const s = fN(r);
            s.length && (n.set(r, s),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const s = n.get(r);
            s && s.forEach( ([o,i]) => {
                var a;
                (a = r.getValue(o)) == null || a.set(i)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    hd = !1,
    fd = !1,
    Or.forEach(e => e.complete(pd)),
    Or.clear()
}
function jw() {
    Or.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (hd = !0)
    }
    )
}
function hN() {
    pd = !0,
    jw(),
    Rw(),
    pd = !1
}
class sh {
    constructor(t, n, r, s, o, i=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = s,
        this.element = o,
        this.isAsync = i
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Or.add(this),
        fd || (fd = !0,
        ee.read(jw),
        ee.resolveKeyframes(Rw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: s} = this;
        if (t[0] === null) {
            const o = s == null ? void 0 : s.get()
              , i = t[t.length - 1];
            if (o !== void 0)
                t[0] = o;
            else if (r && n) {
                const a = r.readValue(n, i);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = i),
            s && o === void 0 && s.set(t[0])
        }
        oN(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Or.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Or.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const pN = e => e.startsWith("--");
function mN(e, t, n) {
    pN(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const gN = {};
function Mw(e, t) {
    const n = sw(e);
    return () => gN[t] ?? n()
}
const Dw = Mw( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , Lw = Mw( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , xo = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , _m = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xo([0, .65, .55, 1]),
    circOut: xo([.55, 0, 1, .45]),
    backIn: xo([.31, .01, .66, -.59]),
    backOut: xo([.33, 1.53, .69, .99])
};
function Ow(e, t) {
    if (e)
        return typeof e == "function" ? Lw() ? Tw(e, t) : "ease-out" : pw(e) ? xo(e) : Array.isArray(e) ? e.map(n => Ow(n, t) || _m.easeOut) : _m[e]
}
function yN(e, t, n, {delay: r=0, duration: s=300, repeat: o=0, repeatType: i="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = Ow(a, s);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: s,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: o + 1,
        direction: i === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function Iw(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function vN({type: e, ...t}) {
    return Iw(e) && Lw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class Fw extends nh {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: s, pseudoElement: o, allowFlatten: i=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!o,
        this.allowFlatten = i,
        this.options = t,
        cr(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = vN(t);
        this.animation = yN(n, r, s, u, o),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !o) {
                const c = th(s, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : mN(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, s;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((s = (r = this.animation).commitStyles) == null || s.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return vt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + vt(t)
    }
    get time() {
        return vt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = wt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && Dw() ? (this.animation.timeline = t,
        nt) : n(this)
    }
}
const _w = {
    anticipate: cw,
    backInOut: uw,
    circInOut: fw
};
function xN(e) {
    return e in _w
}
function wN(e) {
    typeof e.ease == "string" && xN(e.ease) && (e.ease = _w[e.ease])
}
const Ou = 10;
class SN extends Fw {
    constructor(t) {
        wN(t),
        Nw(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: s, element: o, ...i} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new rh({
            ...i,
            autoplay: !1
        })
          , l = Math.max(Ou, He.now() - this.startTime)
          , u = Bt(0, Ou, l - Ou);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const Vm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (_t.test(e) || e === "0") && !e.startsWith("url("));
function CN(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function bN(e, t, n, r) {
    const s = e[0];
    if (s === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , i = Vm(s, t)
      , a = Vm(o, t);
    return Vl(i === a, `You are trying to animate ${t} from "${s}" to "${o}". "${i ? o : s}" is not an animatable value.`, "value-not-animatable"),
    !i || !a ? !1 : CN(e) || (n === "spring" || Iw(n)) && r
}
function md(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const EN = new Set(["opacity", "clipPath", "filter", "transform"])
  , TN = sw( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function PN(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: s, damping: o, type: i} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return TN() && n && EN.has(n) && (n !== "transform" || !u) && !l && !r && s !== "mirror" && o !== 0 && i !== "inertia"
}
const kN = 40;
class AN extends nh {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: i="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var x;
        super(),
        this.stop = () => {
            var y, w;
            this._animation && (this._animation.stop(),
            (y = this.stopTimeline) == null || y.call(this)),
            (w = this.keyframeResolver) == null || w.cancel()
        }
        ,
        this.createdAt = He.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: s,
            repeatDelay: o,
            repeatType: i,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || sh;
        this.keyframeResolver = new h(a, (y, w, g) => this.onKeyframesResolved(y, w, f, !g),l,u,c),
        (x = this.keyframeResolver) == null || x.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, s) {
        var w, g;
        this.keyframeResolver = void 0;
        const {name: o, type: i, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = He.now(),
        bN(t, o, i, a) || ((Sn.instantAnimations || !l) && (c == null || c(th(t, r, n))),
        t[0] = t[t.length - 1],
        md(r),
        r.repeat = 0);
        const f = {
            startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > kN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && PN(f)
          , x = (g = (w = f.motionValue) == null ? void 0 : w.owner) == null ? void 0 : g.current
          , y = h ? new SN({
            ...f,
            element: x
        }) : new rh(f);
        y.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(nt),
        this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = y
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        hN()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function Vw(e, t, n, r=0, s=1) {
    const o = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , i = e.size
      , a = (i - 1) * r;
    return typeof n == "function" ? n(o, i) : s === 1 ? o * r : a - o * r
}
const NN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function RN(e) {
    const t = NN.exec(e);
    if (!t)
        return [, ];
    const [,n,r,s] = t;
    return [`--${n ?? r}`, s]
}
const jN = 4;
function zw(e, t, n=1) {
    cr(n <= jN, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,s] = RN(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const i = o.trim();
        return tw(i) ? parseFloat(i) : i
    }
    return qf(s) ? zw(s, t, n + 1) : s
}
const MN = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , DN = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , LN = {
    type: "keyframes",
    duration: .8
}
  , ON = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , IN = (e, {keyframes: t}) => t.length > 2 ? LN : eo.has(e) ? e.startsWith("scale") ? DN(t[1]) : MN : ON
  , FN = e => e !== null;
function _N(e, {repeat: t, repeatType: n="loop"}, r) {
    const s = e.filter(FN)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !o || r === void 0 ? s[o] : r
}
function $w(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function oh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? $w(n, e) : n
}
function VN({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: o, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const ih = (e, t, n, r={}, s, o) => i => {
    const a = oh(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - wt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            i(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : s
    };
    VN(a) || Object.assign(c, IN(e, c)),
    c.duration && (c.duration = wt(c.duration)),
    c.repeatDelay && (c.repeatDelay = wt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (md(c),
    c.delay === 0 && (d = !0)),
    (Sn.instantAnimations || Sn.skipAnimations || s != null && s.shouldSkipAnimations) && (d = !0,
    md(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !o && t.get() !== void 0) {
        const f = _N(c.keyframes, a);
        if (f !== void 0) {
            ee.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new rh(c) : new AN(c)
}
;
function zm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function ah(e, t, n, r) {
    if (typeof t == "function") {
        const [s,o] = zm(r);
        t = t(n !== void 0 ? n : e.custom, s, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [s,o] = zm(r);
        t = t(n !== void 0 ? n : e.custom, s, o)
    }
    return t
}
function Ps(e, t, n) {
    const r = e.getProps();
    return ah(r, t, n !== void 0 ? n : r.custom, e)
}
const Bw = new Set(["width", "height", "top", "left", "right", "bottom", ...Js])
  , $m = 30
  , zN = e => !isNaN(parseFloat(e));
class $N {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var o;
            const s = He.now();
            if (this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
                for (const i of this.dependents)
                    i.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = He.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = zN(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Kf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ee.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = He.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > $m)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, $m);
        return Gf(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Zt(e, t) {
    return new $N(e,t)
}
const gd = e => Array.isArray(e);
function BN(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zt(n))
}
function UN(e) {
    return gd(e) ? e[e.length - 1] || 0 : e
}
function WN(e, t) {
    const n = Ps(e, t);
    let {transitionEnd: r={}, transition: s={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const i in o) {
        const a = UN(o[i]);
        BN(e, i, a)
    }
}
const ze = e => !!(e && e.getVelocity);
function HN(e) {
    return !!(ze(e) && e.add)
}
function yd(e, t) {
    const n = e.getValue("willChange");
    if (HN(n))
        return n.add(t);
    if (!n && Sn.WillChange) {
        const r = new Sn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function lh(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const KN = "framerAppearId"
  , Uw = "data-" + lh(KN);
function Ww(e) {
    return e.props[Uw]
}
function GN({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Hw(e, t, {delay: n=0, transitionOverride: r, type: s}={}) {
    let {transition: o, transitionEnd: i, ...a} = t;
    const l = e.getDefaultTransition();
    o = o ? $w(o, l) : l;
    const u = o == null ? void 0 : o.reduceMotion;
    r && (o = r);
    const c = []
      , d = s && e.animationState && e.animationState.getState()[s];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , x = a[f];
        if (x === void 0 || d && GN(d, f))
            continue;
        const y = {
            delay: n,
            ...oh(o || {}, f)
        }
          , w = h.get();
        if (w !== void 0 && !h.isAnimating && !Array.isArray(x) && x === w && !y.velocity)
            continue;
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const C = Ww(e);
            if (C) {
                const b = window.MotionHandoffAnimation(C, f, ee);
                b !== null && (y.startTime = b,
                g = !0)
            }
        }
        yd(e, f);
        const m = u ?? e.shouldReduceMotion;
        h.start(ih(f, h, x, m && Bw.has(f) ? {
            type: !1
        } : y, e, g));
        const v = h.animation;
        v && c.push(v)
    }
    if (i) {
        const f = () => ee.update( () => {
            i && WN(e, i)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function vd(e, t, n={}) {
    var l;
    const r = Ps(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = r ? () => Promise.all(Hw(e, r, n)) : () => Promise.resolve()
      , i = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = s;
        return YN(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = s;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [o, i] : [i, o];
        return u().then( () => c())
    } else
        return Promise.all([o(), i(n.delay)])
}
function YN(e, t, n=0, r=0, s=0, o=1, i) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(vd(l, t, {
            ...i,
            delay: n + (typeof r == "function" ? 0 : r) + Vw(e.variantChildren, l, r, s, o)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function QN(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map(o => vd(e, o, n));
        r = Promise.all(s)
    } else if (typeof t == "string")
        r = vd(e, t, n);
    else {
        const s = typeof t == "function" ? Ps(e, t, n.custom) : t;
        r = Promise.all(Hw(e, s, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const qN = {
    test: e => e === "auto",
    parse: e => e
}
  , Kw = e => t => t.test(e)
  , Gw = [Zs, _, tn, Dn, kA, PA, qN]
  , Bm = e => Gw.find(Kw(e));
function XN(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || rw(e) : !0
}
const ZN = new Set(["brightness", "contrast", "saturate", "opacity"]);
function JN(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Xf) || [];
    if (!r)
        return e;
    const s = n.replace(r, "");
    let o = ZN.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + s + ")"
}
const eR = /\b([a-z-]*)\(.*?\)/gu
  , xd = {
    ..._t,
    getAnimatableNone: e => {
        const t = e.match(eR);
        return t ? t.map(JN).join(" ") : e
    }
}
  , wd = {
    ..._t,
    getAnimatableNone: e => {
        const t = _t.parse(e);
        return _t.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , Um = {
    ...Zs,
    transform: Math.round
}
  , tR = {
    rotate: Dn,
    rotateX: Dn,
    rotateY: Dn,
    rotateZ: Dn,
    scale: Gi,
    scaleX: Gi,
    scaleY: Gi,
    scaleZ: Gi,
    skew: Dn,
    skewX: Dn,
    skewY: Dn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: ni,
    originX: Nm,
    originY: Nm,
    originZ: _
}
  , uh = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...tR,
    zIndex: Um,
    fillOpacity: ni,
    strokeOpacity: ni,
    numOctaves: Um
}
  , nR = {
    ...uh,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: xd,
    WebkitFilter: xd,
    mask: wd,
    WebkitMask: wd
}
  , Yw = e => nR[e]
  , rR = new Set([xd, wd]);
function Qw(e, t) {
    let n = Yw(e);
    return rR.has(n) || (n = _t),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const sR = new Set(["auto", "none", "0"]);
function oR(e, t, n) {
    let r = 0, s;
    for (; r < e.length && !s; ) {
        const o = e[r];
        typeof o == "string" && !sR.has(o) && ri(o).values.length && (s = e[r]),
        r++
    }
    if (s && n)
        for (const o of t)
            e[o] = Qw(n, s)
}
class iR extends sh {
    constructor(t, n, r, s, o) {
        super(t, n, r, s, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            qf(d))) {
                const f = zw(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Bw.has(r) || t.length !== 2)
            return;
        const [s,o] = t
          , i = Bm(s)
          , a = Bm(o)
          , l = Am(s)
          , u = Am(o);
        if (l !== u && Gn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (i !== a)
            if (Fm(i) && Fm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Gn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let s = 0; s < t.length; s++)
            (t[s] === null || XN(t[s])) && r.push(s);
        r.length && oR(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Gn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const s = t.getValue(n);
        s && s.jump(this.measuredOrigin, !1);
        const o = r.length - 1
          , i = r[o];
        r[o] = Gn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const aR = new Set(["opacity", "clipPath", "filter", "transform"]);
function ch(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const s = document.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e).filter(r => r != null)
}
const qw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function tl(e) {
    return nw(e) && "offsetHeight"in e
}
const {schedule: dh, cancel: yL} = mw(queueMicrotask, !1)
  , Nt = {
    x: !1,
    y: !1
};
function Xw() {
    return Nt.x || Nt.y
}
function lR(e) {
    return e === "x" || e === "y" ? Nt[e] ? null : (Nt[e] = !0,
    () => {
        Nt[e] = !1
    }
    ) : Nt.x || Nt.y ? null : (Nt.x = Nt.y = !0,
    () => {
        Nt.x = Nt.y = !1
    }
    )
}
function Zw(e, t) {
    const n = ch(e)
      , r = new AbortController
      , s = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, s, () => r.abort()]
}
function uR(e) {
    return !(e.pointerType === "touch" || Xw())
}
function cR(e, t, n={}) {
    const [r,s,o] = Zw(e, n);
    return r.forEach(i => {
        let a = !1, l = !1, u;
        const c = () => {
            i.removeEventListener("pointerleave", x)
        }
          , d = w => {
            u && (u(w),
            u = void 0),
            c()
        }
          , f = w => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(w))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, s),
            window.addEventListener("pointercancel", f, s)
        }
          , x = w => {
            if (w.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(w)
            }
        }
          , y = w => {
            if (!uR(w))
                return;
            l = !1;
            const g = t(i, w);
            typeof g == "function" && (u = g,
            i.addEventListener("pointerleave", x, s))
        }
        ;
        i.addEventListener("pointerenter", y, s),
        i.addEventListener("pointerdown", h, s)
    }
    ),
    o
}
const Jw = (e, t) => t ? e === t ? !0 : Jw(e, t.parentElement) : !1
  , fh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , dR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fR(e) {
    return dR.has(e.tagName) || e.isContentEditable === !0
}
const hR = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function pR(e) {
    return hR.has(e.tagName) || e.isContentEditable === !0
}
const pa = new WeakSet;
function Wm(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Iu(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const mR = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Wm( () => {
        if (pa.has(n))
            return;
        Iu(n, "down");
        const s = Wm( () => {
            Iu(n, "up")
        }
        )
          , o = () => Iu(n, "cancel");
        n.addEventListener("keyup", s, t),
        n.addEventListener("blur", o, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Hm(e) {
    return fh(e) && !Xw()
}
const Km = new WeakSet;
function gR(e, t, n={}) {
    const [r,s,o] = Zw(e, n)
      , i = a => {
        const l = a.currentTarget;
        if (!Hm(a) || Km.has(a))
            return;
        pa.add(l),
        n.stopPropagation && Km.add(a);
        const u = t(l, a)
          , c = (h, x) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            pa.has(l) && pa.delete(l),
            Hm(h) && typeof u == "function" && u(h, {
                success: x
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || Jw(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, s),
        tl(a) && (a.addEventListener("focus", u => mR(u, s)),
        !fR(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    o
}
function hh(e) {
    return nw(e) && "ownerSVGElement"in e
}
const ma = new WeakMap;
let Ln;
const e1 = (e, t, n) => (r, s) => s && s[0] ? s[0][e + "Size"] : hh(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , yR = e1("inline", "width", "offsetWidth")
  , vR = e1("block", "height", "offsetHeight");
function xR({target: e, borderBoxSize: t}) {
    var n;
    (n = ma.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return yR(e, t)
            },
            get height() {
                return vR(e, t)
            }
        })
    }
    )
}
function wR(e) {
    e.forEach(xR)
}
function SR() {
    typeof ResizeObserver > "u" || (Ln = new ResizeObserver(wR))
}
function CR(e, t) {
    Ln || SR();
    const n = ch(e);
    return n.forEach(r => {
        let s = ma.get(r);
        s || (s = new Set,
        ma.set(r, s)),
        s.add(t),
        Ln == null || Ln.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const s = ma.get(r);
            s == null || s.delete(t),
            s != null && s.size || Ln == null || Ln.unobserve(r)
        }
        )
    }
}
const ga = new Set;
let hs;
function bR() {
    hs = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        ga.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", hs)
}
function ER(e) {
    return ga.add(e),
    hs || bR(),
    () => {
        ga.delete(e),
        !ga.size && typeof hs == "function" && (window.removeEventListener("resize", hs),
        hs = void 0)
    }
}
function Sd(e, t) {
    return typeof e == "function" ? ER(e) : CR(e, t)
}
function t1(e, t) {
    let n;
    const r = () => {
        const {currentTime: s} = t
          , i = (s === null ? 0 : s.value) / 100;
        n !== i && e(i),
        n = i
    }
    ;
    return ee.preUpdate(r, !0),
    () => Ut(r)
}
function TR(e) {
    return hh(e) && e.tagName === "svg"
}
const PR = [...Gw, Se, _t]
  , kR = e => PR.find(Kw(e))
  , Gm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ps = () => ({
    x: Gm(),
    y: Gm()
})
  , Ym = () => ({
    min: 0,
    max: 0
})
  , be = () => ({
    x: Ym(),
    y: Ym()
})
  , AR = new WeakMap;
function zl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function si(e) {
    return typeof e == "string" || Array.isArray(e)
}
const ph = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , mh = ["initial", ...ph];
function $l(e) {
    return zl(e.animate) || mh.some(t => si(e[t]))
}
function n1(e) {
    return !!($l(e) || e.variants)
}
function NR(e, t, n) {
    for (const r in t) {
        const s = t[r]
          , o = n[r];
        if (ze(s))
            e.addValue(r, s);
        else if (ze(o))
            e.addValue(r, Zt(s, {
                owner: e
            }));
        else if (o !== s)
            if (e.hasValue(r)) {
                const i = e.getValue(r);
                i.liveStyle === !0 ? i.jump(s) : i.hasAnimated || i.set(s)
            } else {
                const i = e.getStaticValue(r);
                e.addValue(r, Zt(i !== void 0 ? i : s, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Cd = {
    current: null
}
  , r1 = {
    current: !1
}
  , RR = typeof window < "u";
function jR() {
    if (r1.current = !0,
    !!RR)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Cd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            Cd.current = !1
}
const Qm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let nl = {};
function s1(e) {
    nl = e
}
function MR() {
    return nl
}
class DR {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: s, skipAnimations: o, blockInitialAnimation: i, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = sh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = He.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            ee.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = s,
        this.skipAnimationsConfig = o,
        this.options = l,
        this.blockInitialAnimation = !!i,
        this.isControllingVariants = $l(n),
        this.isVariantNode = n1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const x = f[h];
            u[h] !== void 0 && ze(x) && x.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const s in this.initialValues)
                (n = this.values.get(s)) == null || n.jump(this.initialValues[s]),
                this.latestValues[s] = this.initialValues[s];
        this.current = t,
        AR.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (s, o) => this.bindToMotionValue(o, s)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (r1.current || jR(),
        this.shouldReduceMotion = Cd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        Ut(this.notifyUpdate),
        Ut(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && aR.has(t) && this.current instanceof HTMLElement) {
            const {factory: i, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new Fw({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: wt(c)
            })
              , f = i(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = eo.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const s = n.on("change", i => {
            this.latestValues[t] = i,
            this.props.onUpdate && ee.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let o;
        typeof window < "u" && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            s(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in nl) {
            const n = nl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: s} = n;
            if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)),
            this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : be()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Qm.length; r++) {
            const s = Qm[r];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](),
            delete this.propEventSubscriptions[s]);
            const o = "on" + s
              , i = t[o];
            i && (this.propEventSubscriptions[s] = this.on(s, i))
        }
        this.prevMotionValues = NR(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Zt(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (tw(r) || rw(r)) ? r = parseFloat(r) : !kR(r) && _t.test(n) && (r = Qw(t, n)),
        this.setBaseTarget(t, ze(r) ? r.get() : r)),
        ze(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var o;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const i = ah(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
            i && (r = i[t])
        }
        if (n && r !== void 0)
            return r;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !ze(s) ? s : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Kf),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        dh.render(this.render)
    }
}
class o1 extends DR {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = iR
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ze(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class pr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function i1({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function LR({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function OR(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Fu(e) {
    return e === void 0 || e === 1
}
function bd({scale: e, scaleX: t, scaleY: n}) {
    return !Fu(e) || !Fu(t) || !Fu(n)
}
function Sr(e) {
    return bd(e) || a1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function a1(e) {
    return qm(e.x) || qm(e.y)
}
function qm(e) {
    return e && e !== "0%"
}
function rl(e, t, n) {
    const r = e - n
      , s = t * r;
    return n + s
}
function Xm(e, t, n, r, s) {
    return s !== void 0 && (e = rl(e, s, r)),
    rl(e, n, r) + t
}
function Ed(e, t=0, n=1, r, s) {
    e.min = Xm(e.min, t, n, r, s),
    e.max = Xm(e.max, t, n, r, s)
}
function l1(e, {x: t, y: n}) {
    Ed(e.x, t.translate, t.scale, t.originPoint),
    Ed(e.y, n.translate, n.scale, n.originPoint)
}
const Zm = .999999999999
  , Jm = 1.0000000000001;
function IR(e, t, n, r=!1) {
    const s = n.length;
    if (!s)
        return;
    t.x = t.y = 1;
    let o, i;
    for (let a = 0; a < s; a++) {
        o = n[a],
        i = o.projectionDelta;
        const {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && gs(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        i && (t.x *= i.x.scale,
        t.y *= i.y.scale,
        l1(e, i)),
        r && Sr(o.latestValues) && gs(e, o.latestValues))
    }
    t.x < Jm && t.x > Zm && (t.x = 1),
    t.y < Jm && t.y > Zm && (t.y = 1)
}
function ms(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function eg(e, t, n, r, s=.5) {
    const o = fe(e.min, e.max, s);
    Ed(e, t, n, o, r)
}
function gs(e, t) {
    eg(e.x, t.x, t.scaleX, t.scale, t.originX),
    eg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function u1(e, t) {
    return i1(OR(e.getBoundingClientRect(), t))
}
function FR(e, t, n) {
    const r = u1(e, n)
      , {scroll: s} = t;
    return s && (ms(r.x, s.offset.x),
    ms(r.y, s.offset.y)),
    r
}
const _R = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , VR = Js.length;
function zR(e, t, n) {
    let r = ""
      , s = !0;
    for (let o = 0; o < VR; o++) {
        const i = Js[o]
          , a = e[i];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (i.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = i.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = qw(a, uh[i]);
            if (!l) {
                s = !1;
                const c = _R[i] || i;
                r += `${c}(${u}) `
            }
            n && (t[i] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, s ? "" : r) : s && (r = "none"),
    r
}
function gh(e, t, n) {
    const {style: r, vars: s, transformOrigin: o} = e;
    let i = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (eo.has(l)) {
            i = !0;
            continue
        } else if (yw(l)) {
            s[l] = u;
            continue
        } else {
            const c = qw(u, uh[l]);
            l.startsWith("origin") ? (a = !0,
            o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (i || n ? r.transform = zR(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function c1(e, {style: t, vars: n}, r, s) {
    const o = e.style;
    let i;
    for (i in t)
        o[i] = t[i];
    s == null || s.applyProjectionStyles(o, r);
    for (i in n)
        o.setProperty(i, n[i])
}
function tg(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const po = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = tg(e, t.target.x)
          , r = tg(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , $R = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , s = _t.parse(e);
        if (s.length > 5)
            return r;
        const o = _t.createTransformer(e)
          , i = typeof s[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        s[0 + i] /= a,
        s[1 + i] /= l;
        const u = fe(a, l, .5);
        return typeof s[2 + i] == "number" && (s[2 + i] /= u),
        typeof s[3 + i] == "number" && (s[3 + i] /= u),
        o(s)
    }
}
  , Td = {
    borderRadius: {
        ...po,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: po,
    borderTopRightRadius: po,
    borderBottomLeftRadius: po,
    borderBottomRightRadius: po,
    boxShadow: $R
};
function d1(e, {layout: t, layoutId: n}) {
    return eo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Td[e] || e === "opacity")
}
function yh(e, t, n) {
    var i;
    const r = e.style
      , s = t == null ? void 0 : t.style
      , o = {};
    if (!r)
        return o;
    for (const a in r)
        (ze(r[a]) || s && ze(s[a]) || d1(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (o[a] = r[a]);
    return o
}
function BR(e) {
    return window.getComputedStyle(e)
}
class UR extends o1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = c1
    }
    readValueFromInstance(t, n) {
        var r;
        if (eo.has(n))
            return (r = this.projection) != null && r.isProjecting ? cd(n) : lN(t, n);
        {
            const s = BR(t)
              , o = (yw(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return u1(t, n)
    }
    build(t, n, r) {
        gh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return yh(t, n, r)
    }
}
const WR = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , HR = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function KR(e, t, n=1, r=0, s=!0) {
    e.pathLength = 1;
    const o = s ? WR : HR;
    e[o.offset] = `${-r}`,
    e[o.array] = `${t} ${n}`
}
const GR = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function f1(e, {attrX: t, attrY: n, attrScale: r, pathLength: s, pathSpacing: o=1, pathOffset: i=0, ...a}, l, u, c) {
    if (gh(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of GR)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && KR(d, s, o, i, !1)
}
const h1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , p1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function YR(e, t, n, r) {
    c1(e, t, void 0, r);
    for (const s in t.attrs)
        e.setAttribute(h1.has(s) ? s : lh(s), t.attrs[s])
}
function m1(e, t, n) {
    const r = yh(e, t, n);
    for (const s in e)
        if (ze(e[s]) || ze(t[s])) {
            const o = Js.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            r[o] = e[s]
        }
    return r
}
class QR extends o1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = be
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (eo.has(n)) {
            const r = Yw(n);
            return r && r.default || 0
        }
        return n = h1.has(n) ? n : lh(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return m1(t, n, r)
    }
    build(t, n, r) {
        f1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, s) {
        YR(t, n, r, s)
    }
    mount(t) {
        this.isSVGTag = p1(t.tagName),
        super.mount(t)
    }
}
const qR = mh.length;
function g1(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? g1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < qR; n++) {
        const r = mh[n]
          , s = e.props[r];
        (si(s) || s === !1) && (t[r] = s)
    }
    return t
}
function y1(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const XR = [...ph].reverse()
  , ZR = ph.length;
function JR(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => QN(e, n, r)))
}
function ej(e) {
    let t = JR(e)
      , n = ng()
      , r = !0;
    const s = l => (u, c) => {
        var f;
        const d = Ps(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: x, ...y} = d;
            u = {
                ...u,
                ...y,
                ...x
            }
        }
        return u
    }
    ;
    function o(l) {
        t = l(e)
    }
    function i(l) {
        const {props: u} = e
          , c = g1(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , x = 1 / 0;
        for (let w = 0; w < ZR; w++) {
            const g = XR[w]
              , m = n[g]
              , v = u[g] !== void 0 ? u[g] : c[g]
              , C = si(v)
              , b = g === l ? m.isActive : null;
            b === !1 && (x = w);
            let E = v === c[g] && v !== u[g] && C;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            m.protectedKeys = {
                ...h
            },
            !m.isActive && b === null || !v && !m.prevProp || zl(v) || typeof v == "boolean")
                continue;
            if (g === "exit" && m.isActive && b !== !0) {
                m.prevResolvedValues && (h = {
                    ...h,
                    ...m.prevResolvedValues
                });
                continue
            }
            const T = tj(m.prevProp, v);
            let P = T || g === l && m.isActive && !E && C || w > x && C
              , R = !1;
            const j = Array.isArray(v) ? v : [v];
            let z = j.reduce(s(g), {});
            b === !1 && (z = {});
            const {prevResolvedValues: I={}} = m
              , K = {
                ...I,
                ...z
            }
              , L = V => {
                P = !0,
                f.has(V) && (R = !0,
                f.delete(V)),
                m.needsAnimating[V] = !0;
                const k = e.getValue(V);
                k && (k.liveStyle = !1)
            }
            ;
            for (const V in K) {
                const k = z[V]
                  , N = I[V];
                if (h.hasOwnProperty(V))
                    continue;
                let O = !1;
                gd(k) && gd(N) ? O = !y1(k, N) : O = k !== N,
                O ? k != null ? L(V) : f.add(V) : k !== void 0 && f.has(V) ? L(V) : m.protectedKeys[V] = !0
            }
            m.prevProp = v,
            m.prevResolvedValues = z,
            m.isActive && (h = {
                ...h,
                ...z
            }),
            r && e.blockInitialAnimation && (P = !1);
            const Y = E && T;
            P && (!Y || R) && d.push(...j.map(V => {
                const k = {
                    type: g
                };
                if (typeof V == "string" && r && !Y && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: N} = e
                      , O = Ps(N, V);
                    if (N.enteringChildren && O) {
                        const {delayChildren: U} = O.transition || {};
                        k.delay = Vw(N.enteringChildren, e, U)
                    }
                }
                return {
                    animation: V,
                    options: k
                }
            }
            ))
        }
        if (f.size) {
            const w = {};
            if (typeof u.initial != "boolean") {
                const g = Ps(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                g && g.transition && (w.transition = g.transition)
            }
            f.forEach(g => {
                const m = e.getBaseTarget(g)
                  , v = e.getValue(g);
                v && (v.liveStyle = !0),
                w[g] = m ?? null
            }
            ),
            d.push({
                animation: w
            })
        }
        let y = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
        r = !1,
        y ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = i(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: i,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = ng()
        }
    }
}
function tj(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !y1(t, e) : !1
}
function vr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function ng() {
    return {
        animate: vr(!0),
        whileInView: vr(),
        whileHover: vr(),
        whileTap: vr(),
        whileDrag: vr(),
        whileFocus: vr(),
        exit: vr()
    }
}
function rg(e, t) {
    e.min = t.min,
    e.max = t.max
}
function At(e, t) {
    rg(e.x, t.x),
    rg(e.y, t.y)
}
function sg(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const v1 = 1e-4
  , nj = 1 - v1
  , rj = 1 + v1
  , x1 = .01
  , sj = 0 - x1
  , oj = 0 + x1;
function Ke(e) {
    return e.max - e.min
}
function ij(e, t, n) {
    return Math.abs(e - t) <= n
}
function og(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = fe(t.min, t.max, e.origin),
    e.scale = Ke(n) / Ke(t),
    e.translate = fe(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= nj && e.scale <= rj || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= sj && e.translate <= oj || isNaN(e.translate)) && (e.translate = 0)
}
function Mo(e, t, n, r) {
    og(e.x, t.x, n.x, r ? r.originX : void 0),
    og(e.y, t.y, n.y, r ? r.originY : void 0)
}
function ig(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ke(t)
}
function aj(e, t, n) {
    ig(e.x, t.x, n.x),
    ig(e.y, t.y, n.y)
}
function ag(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ke(t)
}
function sl(e, t, n) {
    ag(e.x, t.x, n.x),
    ag(e.y, t.y, n.y)
}
function lg(e, t, n, r, s) {
    return e -= t,
    e = rl(e, 1 / n, r),
    s !== void 0 && (e = rl(e, 1 / s, r)),
    e
}
function lj(e, t=0, n=1, r=.5, s, o=e, i=e) {
    if (tn.test(t) && (t = parseFloat(t),
    t = fe(i.min, i.max, t / 100) - i.min),
    typeof t != "number")
        return;
    let a = fe(o.min, o.max, r);
    e === o && (a -= t),
    e.min = lg(e.min, t, n, a, s),
    e.max = lg(e.max, t, n, a, s)
}
function ug(e, t, [n,r,s], o, i) {
    lj(e, t[n], t[r], t[s], t.scale, o, i)
}
const uj = ["x", "scaleX", "originX"]
  , cj = ["y", "scaleY", "originY"];
function cg(e, t, n, r) {
    ug(e.x, t, uj, n ? n.x : void 0, r ? r.x : void 0),
    ug(e.y, t, cj, n ? n.y : void 0, r ? r.y : void 0)
}
function dg(e) {
    return e.translate === 0 && e.scale === 1
}
function w1(e) {
    return dg(e.x) && dg(e.y)
}
function fg(e, t) {
    return e.min === t.min && e.max === t.max
}
function dj(e, t) {
    return fg(e.x, t.x) && fg(e.y, t.y)
}
function hg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function S1(e, t) {
    return hg(e.x, t.x) && hg(e.y, t.y)
}
function pg(e) {
    return Ke(e.x) / Ke(e.y)
}
function mg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Gt(e) {
    return [e("x"), e("y")]
}
function fj(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x
      , o = e.y.translate / t.y
      , i = (n == null ? void 0 : n.z) || 0;
    if ((s || o || i) && (r = `translate3d(${s}px, ${o}px, ${i}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: x} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const C1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , hj = C1.length
  , gg = e => typeof e == "string" ? parseFloat(e) : e
  , yg = e => typeof e == "number" || _.test(e);
function pj(e, t, n, r, s, o) {
    s ? (e.opacity = fe(0, n.opacity ?? 1, mj(r)),
    e.opacityExit = fe(t.opacity ?? 1, 0, gj(r))) : o && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let i = 0; i < hj; i++) {
        const a = `border${C1[i]}Radius`;
        let l = vg(t, a)
          , u = vg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || yg(l) === yg(u) ? (e[a] = Math.max(fe(gg(l), gg(u), r), 0),
        (tn.test(u) || tn.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r))
}
function vg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const mj = b1(0, .5, dw)
  , gj = b1(.5, .95, nt);
function b1(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Ws(e, t, r))
}
function yj(e, t, n) {
    const r = ze(e) ? e : Zt(e);
    return r.start(ih("", r, t, n)),
    r.animation
}
function oi(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const vj = (e, t) => e.depth - t.depth;
class xj {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Hf(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Xa(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(vj),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function wj(e, t) {
    const n = He.now()
      , r = ({timestamp: s}) => {
        const o = s - n;
        o >= t && (Ut(r),
        e(o - t))
    }
    ;
    return ee.setup(r, !0),
    () => Ut(r)
}
function ya(e) {
    return ze(e) ? e.get() : e
}
class Sj {
    constructor() {
        this.members = []
    }
    add(t) {
        Hf(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const s = r.instance;
            s && s.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && Xa(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Xa(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(s => t === s);
        if (n === 0)
            return !1;
        let r;
        for (let s = n; s >= 0; s--) {
            const o = this.members[s]
              , i = o.instance;
            if (o.isPresent !== !1 && (!i || i.isConnected !== !1)) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const s = r.options.layoutDependency
              , o = t.options.layoutDependency;
            if (!(s !== void 0 && o !== void 0 && s === o)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const va = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , _u = ["", "X", "Y", "Z"]
  , Cj = 1e3;
let bj = 0;
function Vu(e, t, n, r) {
    const {latestValues: s} = t;
    s[e] && (n[e] = s[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function E1(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Ww(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: s, layoutId: o} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ee, !(s || o))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && E1(r)
}
function T1({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s}) {
    return class {
        constructor(i={}, a=t == null ? void 0 : t()) {
            this.id = bj++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(Pj),
                this.nodes.forEach(Rj),
                this.nodes.forEach(jj),
                this.nodes.forEach(kj)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = i,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new xj)
        }
        addEventListener(i, a) {
            return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Kf),
            this.eventHandlers.get(i).add(a)
        }
        notifyListeners(i, ...a) {
            const l = this.eventHandlers.get(i);
            l && l.notify(...a)
        }
        hasListeners(i) {
            return this.eventHandlers.has(i)
        }
        mount(i) {
            if (this.instance)
                return;
            this.isSVG = hh(i) && !TR(i),
            this.instance = i;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(i),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                ee.read( () => {
                    d = window.innerWidth
                }
                ),
                e(i, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = wj(f, 250),
                    va.hasAnimatedSinceResize && (va.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Sg)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || u.getDefaultTransition() || Ij
                  , {onLayoutAnimationStart: y, onLayoutAnimationComplete: w} = u.getProps()
                  , g = !this.targetLayout || !S1(this.targetLayout, h)
                  , m = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || m || d && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const v = {
                        ...oh(x, "layout"),
                        onPlay: y,
                        onComplete: w
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0,
                    v.type = !1),
                    this.startAnimation(v),
                    this.setAnimationOrigin(c, m)
                } else
                    d || Sg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const i = this.getStack();
            i && i.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Ut(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Mj),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: i} = this.options;
            return i && i.getProps().transformTemplate
        }
        willUpdate(i=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && E1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            i && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(xg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(wg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(Nj),
            this.nodes.forEach(Ej),
            this.nodes.forEach(Tj)) : this.nodes.forEach(wg),
            this.clearAllSnapshots();
            const a = He.now();
            ke.delta = Bt(0, 1e3 / 60, a - ke.timestamp),
            ke.timestamp = a,
            ke.isProcessing = !0,
            Ru.update.process(ke),
            Ru.preRender.process(ke),
            Ru.render.process(ke),
            ke.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            dh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Aj),
            this.sharedNodes.forEach(Dj)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ee.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ee.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Ke(this.snapshot.measuredBox.x) && !Ke(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const i = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = be(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
        }
        updateScroll(i="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: i,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!s)
                return;
            const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !w1(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            i && this.instance && (a || Sr(this.latestValues) || c) && (s(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(i=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return i && (l = this.removeTransform(l)),
            Fj(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: i} = this.options;
            if (!i)
                return be();
            const a = i.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(_j))) {
                const {scroll: c} = this.root;
                c && (ms(a.x, c.offset.x),
                ms(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(i) {
            var l;
            const a = be();
            if (At(a, i),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && At(a, i),
                ms(a.x, d.offset.x),
                ms(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(i, a=!1) {
            const l = be();
            At(l, i);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && gs(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Sr(c.latestValues) && gs(l, c.latestValues)
            }
            return Sr(this.latestValues) && gs(l, this.latestValues),
            l
        }
        removeTransform(i) {
            const a = be();
            At(a, i);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Sr(u.latestValues))
                    continue;
                bd(u.latestValues) && u.updateSnapshot();
                const c = be()
                  , d = u.measurePageBox();
                At(c, d),
                cg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Sr(this.latestValues) && cg(a, this.latestValues),
            a
        }
        setTargetDelta(i) {
            this.targetDelta = i,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(i) {
            this.options = {
                ...this.options,
                ...i,
                crossfade: i.crossfade !== void 0 ? i.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ke.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(i=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(i || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = ke.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = be(),
            this.targetWithTransforms = be()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            aj(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : At(this.target, this.layout.layoutBox),
            l1(this.target, this.targetDelta)) : At(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || bd(this.parent.latestValues) || a1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(i, a, l) {
            this.relativeParent = i,
            this.linkedParentVersion = i.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = be(),
            this.relativeTargetOrigin = be(),
            sl(this.relativeTargetOrigin, a, l),
            At(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var x;
            const i = this.getLead()
              , a = !!this.resumingFrom || this !== i;
            let l = !0;
            if ((this.isProjectionDirty || (x = this.parent) != null && x.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === ke.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            At(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            IR(this.layoutCorrected, this.treeScale, this.path, a),
            i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox,
            i.targetWithTransforms = be());
            const {target: h} = i;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sg(this.prevProjectionDelta.x, this.projectionDelta.x),
            sg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Mo(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !mg(this.projectionDelta.x, this.prevProjectionDelta.x) || !mg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(i=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            i) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ps(),
            this.projectionDelta = ps(),
            this.projectionDeltaWithTransform = ps()
        }
        setAnimationOrigin(i, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = ps();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = be()
              , h = l ? l.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , y = h !== x
              , w = this.getStack()
              , g = !w || w.members.length <= 1
              , m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(Oj));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = C => {
                const b = C / 1e3;
                Cg(d.x, i.x, b),
                Cg(d.y, i.y, b),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (sl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Lj(this.relativeTarget, this.relativeTargetOrigin, f, b),
                v && dj(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = be()),
                At(v, this.relativeTarget)),
                y && (this.animationValues = c,
                pj(c, u, this.latestValues, b, m, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = b
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(i) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (Ut(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ee.update( () => {
                va.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Zt(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = yj(this.motionValue, [0, 1e3], {
                    ...i,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        i.onUpdate && i.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        i.onComplete && i.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const i = this.getStack();
            i && i.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Cj),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const i = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = i;
            if (!(!a || !l || !u)) {
                if (this !== i && this.layout && u && P1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || be();
                    const d = Ke(this.layout.layoutBox.x);
                    l.x.min = i.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = Ke(this.layout.layoutBox.y);
                    l.y.min = i.target.y.min,
                    l.y.max = l.y.min + f
                }
                At(a, l),
                gs(a, c),
                Mo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(i, a) {
            this.sharedNodes.has(i) || this.sharedNodes.set(i, new Sj),
            this.sharedNodes.get(i).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const i = this.getStack();
            return i ? i.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: i} = this.options;
            return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: i} = this.options;
            return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: i} = this.options;
            if (i)
                return this.root.sharedNodes.get(i)
        }
        promote({needsReset: i, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            i && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const i = this.getStack();
            return i ? i.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: i} = this.options;
            if (!i)
                return;
            let a = !1;
            const {latestValues: l} = i;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && Vu("z", i, u, this.animationValues);
            for (let c = 0; c < _u.length; c++)
                Vu(`rotate${_u[c]}`, i, u, this.animationValues),
                Vu(`skew${_u[c]}`, i, u, this.animationValues);
            i.render();
            for (const c in u)
                i.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            i.scheduleRender()
        }
        applyProjectionStyles(i, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                i.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                i.visibility = "",
                i.opacity = "",
                i.pointerEvents = ya(a == null ? void 0 : a.pointerEvents) || "",
                i.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                i.pointerEvents = ya(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Sr(this.latestValues) && (i.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            i.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = fj(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            i.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            i.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? i.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : i.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const x in Td) {
                if (c[x] === void 0)
                    continue;
                const {correct: y, applyTo: w, isCSSVariable: g} = Td[x]
                  , m = d === "none" ? c[x] : y(c[x], u);
                if (w) {
                    const v = w.length;
                    for (let C = 0; C < v; C++)
                        i[w[C]] = m
                } else
                    g ? this.options.visualElement.renderState.vars[x] = m : i[x] = m
            }
            this.options.layoutId && (i.pointerEvents = u === this ? ya(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(i => {
                var a;
                return (a = i.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(xg),
            this.root.sharedNodes.clear()
        }
    }
}
function Ej(e) {
    e.updateLayout()
}
function Tj(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: s} = e.layout
          , {animationType: o} = e.options
          , i = t.source !== e.layout.source;
        o === "size" ? Gt(d => {
            const f = i ? t.measuredBox[d] : t.layoutBox[d]
              , h = Ke(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : P1(o, t.layoutBox, r) && Gt(d => {
            const f = i ? t.measuredBox[d] : t.layoutBox[d]
              , h = Ke(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = ps();
        Mo(a, r, t.layoutBox);
        const l = ps();
        i ? Mo(l, e.applyTransform(s, !0), t.measuredBox) : Mo(l, r, t.layoutBox);
        const u = !w1(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const x = be();
                    sl(x, t.layoutBox, f.layoutBox);
                    const y = be();
                    sl(y, r, h.layoutBox),
                    S1(x, y) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function Pj(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function kj(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Aj(e) {
    e.clearSnapshot()
}
function xg(e) {
    e.clearMeasurements()
}
function wg(e) {
    e.isLayoutDirty = !1
}
function Nj(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Sg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Rj(e) {
    e.resolveTargetDelta()
}
function jj(e) {
    e.calcProjection()
}
function Mj(e) {
    e.resetSkewAndRotation()
}
function Dj(e) {
    e.removeLeadSnapshot()
}
function Cg(e, t, n) {
    e.translate = fe(t.translate, 0, n),
    e.scale = fe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function bg(e, t, n, r) {
    e.min = fe(t.min, n.min, r),
    e.max = fe(t.max, n.max, r)
}
function Lj(e, t, n, r) {
    bg(e.x, t.x, n.x, r),
    bg(e.y, t.y, n.y, r)
}
function Oj(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Ij = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Eg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Tg = Eg("applewebkit/") && !Eg("chrome/") ? Math.round : nt;
function Pg(e) {
    e.min = Tg(e.min),
    e.max = Tg(e.max)
}
function Fj(e) {
    Pg(e.x),
    Pg(e.y)
}
function P1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ij(pg(t), pg(n), .2)
}
function _j(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const Vj = T1({
    attachResizeListener: (e, t) => oi(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , zu = {
    current: void 0
}
  , k1 = T1({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!zu.current) {
            const e = new Vj({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            zu.current = e
        }
        return zu.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , vh = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function kg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function zj(...e) {
    return t => {
        let n = !1;
        const r = e.map(s => {
            const o = kg(s, t);
            return !n && typeof o == "function" && (n = !0),
            o
        }
        );
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const o = r[s];
                    typeof o == "function" ? o() : kg(e[s], null)
                }
            }
    }
}
function $j(...e) {
    return S.useCallback(zj(...e), e)
}
class Bj extends S.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , s = tl(r) && r.offsetWidth || 0
              , o = tl(r) && r.offsetHeight || 0
              , i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft,
            i.right = s - i.width - i.left,
            i.bottom = o - i.height - i.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Uj({children: e, isPresent: t, anchorX: n, anchorY: r, root: s, pop: o}) {
    var f;
    const i = S.useId()
      , a = S.useRef(null)
      , l = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: u} = S.useContext(vh)
      , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
      , d = $j(a, c);
    return S.useInsertionEffect( () => {
        const {width: h, height: x, top: y, left: w, right: g, bottom: m} = l.current;
        if (t || o === !1 || !a.current || !h || !x)
            return;
        const v = n === "left" ? `left: ${w}` : `right: ${g}`
          , C = r === "bottom" ? `bottom: ${m}` : `top: ${y}`;
        a.current.dataset.motionPopId = i;
        const b = document.createElement("style");
        u && (b.nonce = u);
        const E = s ?? document.head;
        return E.appendChild(b),
        b.sheet && b.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${x}px !important;
            ${v}px !important;
            ${C}px !important;
          }
        `),
        () => {
            E.contains(b) && E.removeChild(b)
        }
    }
    , [t]),
    p.jsx(Bj, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: o,
        children: o === !1 ? e : S.cloneElement(e, {
            ref: d
        })
    })
}
const Wj = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: o, mode: i, anchorX: a, anchorY: l, root: u}) => {
    const c = Fl(Hj)
      , d = S.useId();
    let f = !0
      , h = S.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: x => {
            c.set(x, !0);
            for (const y of c.values())
                if (!y)
                    return;
            r && r()
        }
        ,
        register: x => (c.set(x, !1),
        () => c.delete(x))
    }), [n, c, r]);
    return o && f && (h = {
        ...h
    }),
    S.useMemo( () => {
        c.forEach( (x, y) => c.set(y, !1))
    }
    , [n]),
    S.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    e = p.jsx(Uj, {
        pop: i === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    }),
    p.jsx(_l.Provider, {
        value: h,
        children: e
    })
}
;
function Hj() {
    return new Map
}
function A1(e=!0) {
    const t = S.useContext(_l);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: s} = t
      , o = S.useId();
    S.useEffect( () => {
        if (e)
            return s(o)
    }
    , [e]);
    const i = S.useCallback( () => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, i] : [!0]
}
const Yi = e => e.key || "";
function Ag(e) {
    const t = [];
    return S.Children.forEach(e, n => {
        S.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Kj = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: s=!0, mode: o="sync", propagate: i=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = A1(i)
      , f = S.useMemo( () => Ag(e), [e])
      , h = i && !c ? [] : f.map(Yi)
      , x = S.useRef(!0)
      , y = S.useRef(f)
      , w = Fl( () => new Map)
      , g = S.useRef(new Set)
      , [m,v] = S.useState(f)
      , [C,b] = S.useState(f);
    Wf( () => {
        x.current = !1,
        y.current = f;
        for (let P = 0; P < C.length; P++) {
            const R = Yi(C[P]);
            h.includes(R) ? (w.delete(R),
            g.current.delete(R)) : w.get(R) !== !0 && w.set(R, !1)
        }
    }
    , [C, h.length, h.join("-")]);
    const E = [];
    if (f !== m) {
        let P = [...f];
        for (let R = 0; R < C.length; R++) {
            const j = C[R]
              , z = Yi(j);
            h.includes(z) || (P.splice(R, 0, j),
            E.push(j))
        }
        return o === "wait" && E.length && (P = E),
        b(Ag(P)),
        v(f),
        null
    }
    const {forceRender: T} = S.useContext(Uf);
    return p.jsx(p.Fragment, {
        children: C.map(P => {
            const R = Yi(P)
              , j = i && !c ? !1 : f === C || h.includes(R)
              , z = () => {
                if (g.current.has(R))
                    return;
                if (g.current.add(R),
                w.has(R))
                    w.set(R, !0);
                else
                    return;
                let I = !0;
                w.forEach(K => {
                    K || (I = !1)
                }
                ),
                I && (T == null || T(),
                b(y.current),
                i && (d == null || d()),
                r && r())
            }
            ;
            return p.jsx(Wj, {
                isPresent: j,
                initial: !x.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: s,
                mode: o,
                root: u,
                onExitComplete: j ? void 0 : z,
                anchorX: a,
                anchorY: l,
                children: P
            }, R)
        }
        )
    })
}
  , N1 = S.createContext({
    strict: !1
})
  , Ng = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Rg = !1;
function Gj() {
    if (Rg)
        return;
    const e = {};
    for (const t in Ng)
        e[t] = {
            isEnabled: n => Ng[t].some(r => !!n[r])
        };
    s1(e),
    Rg = !0
}
function R1() {
    return Gj(),
    MR()
}
function Yj(e) {
    const t = R1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    s1(t)
}
const Qj = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function ol(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Qj.has(e)
}
let j1 = e => !ol(e);
function qj(e) {
    typeof e == "function" && (j1 = t => t.startsWith("on") ? !ol(t) : e(t))
}
try {
    qj(require("@emotion/is-prop-valid").default)
} catch {}
function Xj(e, t, n) {
    const r = {};
    for (const s in e)
        s === "values" && typeof e.values == "object" || (j1(s) || n === !0 && ol(s) || !t && !ol(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
    return r
}
const Bl = S.createContext({});
function Zj(e, t) {
    if ($l(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || si(n) ? n : void 0,
            animate: si(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Jj(e) {
    const {initial: t, animate: n} = Zj(e, S.useContext(Bl));
    return S.useMemo( () => ({
        initial: t,
        animate: n
    }), [jg(t), jg(n)])
}
function jg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const xh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function M1(e, t, n) {
    for (const r in t)
        !ze(t[r]) && !d1(r, n) && (e[r] = t[r])
}
function eM({transformTemplate: e}, t) {
    return S.useMemo( () => {
        const n = xh();
        return gh(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function tM(e, t) {
    const n = e.style || {}
      , r = {};
    return M1(r, n, e),
    Object.assign(r, eM(e, t)),
    r
}
function nM(e, t) {
    const n = {}
      , r = tM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const D1 = () => ({
    ...xh(),
    attrs: {}
});
function rM(e, t, n, r) {
    const s = S.useMemo( () => {
        const o = D1();
        return f1(o, t, p1(r), e.transformTemplate, e.style),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        M1(o, e.style, e),
        s.style = {
            ...o,
            ...s.style
        }
    }
    return s
}
const sM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function wh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(sM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function oM(e, t, n, {latestValues: r}, s, o=!1, i) {
    const l = (i ?? wh(e) ? rM : nM)(t, r, s, e)
      , u = Xj(t, typeof e == "string", o)
      , c = e !== S.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = S.useMemo( () => ze(d) ? d.get() : d, [d]);
    return S.createElement(e, {
        ...c,
        children: f
    })
}
function iM({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, s) {
    return {
        latestValues: aM(n, r, s, e),
        renderState: t()
    }
}
function aM(e, t, n, r) {
    const s = {}
      , o = r(e, {});
    for (const f in o)
        s[f] = ya(o[f]);
    let {initial: i, animate: a} = e;
    const l = $l(e)
      , u = n1(e);
    t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || i === !1;
    const d = c ? a : i;
    if (d && typeof d != "boolean" && !zl(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const x = ah(e, f[h]);
            if (x) {
                const {transitionEnd: y, transition: w, ...g} = x;
                for (const m in g) {
                    let v = g[m];
                    if (Array.isArray(v)) {
                        const C = c ? v.length - 1 : 0;
                        v = v[C]
                    }
                    v !== null && (s[m] = v)
                }
                for (const m in y)
                    s[m] = y[m]
            }
        }
    }
    return s
}
const L1 = e => (t, n) => {
    const r = S.useContext(Bl)
      , s = S.useContext(_l)
      , o = () => iM(e, t, r, s);
    return n ? o() : Fl(o)
}
  , lM = L1({
    scrapeMotionValuesFromProps: yh,
    createRenderState: xh
})
  , uM = L1({
    scrapeMotionValuesFromProps: m1,
    createRenderState: D1
})
  , cM = Symbol.for("motionComponentSymbol");
function dM(e, t, n) {
    const r = S.useRef(n);
    S.useInsertionEffect( () => {
        r.current = n
    }
    );
    const s = S.useRef(null);
    return S.useCallback(o => {
        var a;
        o && ((a = e.onMount) == null || a.call(e, o)),
        t && (o ? t.mount(o) : t.unmount());
        const i = r.current;
        if (typeof i == "function")
            if (o) {
                const l = i(o);
                typeof l == "function" && (s.current = l)
            } else
                s.current ? (s.current(),
                s.current = null) : i(o);
        else
            i && (i.current = o)
    }
    , [t])
}
const O1 = S.createContext({});
function Jr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function fM(e, t, n, r, s, o) {
    var v, C;
    const {visualElement: i} = S.useContext(Bl)
      , a = S.useContext(N1)
      , l = S.useContext(_l)
      , u = S.useContext(vh)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = S.useRef(null)
      , h = S.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: o
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const x = f.current
      , y = S.useContext(O1);
    x && !x.projection && s && (x.type === "html" || x.type === "svg") && hM(f.current, n, s, y);
    const w = S.useRef(!1);
    S.useInsertionEffect( () => {
        x && w.current && x.update(n, l)
    }
    );
    const g = n[Uw]
      , m = S.useRef(!!g && !((v = window.MotionHandoffIsComplete) != null && v.call(window, g)) && ((C = window.MotionHasOptimisedAnimation) == null ? void 0 : C.call(window, g)));
    return Wf( () => {
        h.current = !0,
        x && (w.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        m.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        x && (!m.current && x.animationState && x.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) == null || b.call(window, g)
        }
        ),
        m.current = !1),
        x.enteringChildren = void 0)
    }
    ),
    x
}
function hM(e, t, n, r) {
    const {layoutId: s, layout: o, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : I1(e.parent)),
    e.projection.setOptions({
        layoutId: s,
        layout: o,
        alwaysMeasureLayout: !!i || a && Jr(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function I1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : I1(e.parent)
}
function $u(e, {forwardMotionProps: t=!1, type: n}={}, r, s) {
    r && Yj(r);
    const o = n ? n === "svg" : wh(e)
      , i = o ? uM : lM;
    function a(u, c) {
        let d;
        const f = {
            ...S.useContext(vh),
            ...u,
            layoutId: pM(u)
        }
          , {isStatic: h} = f
          , x = Jj(u)
          , y = i(u, h);
        if (!h && ew) {
            mM();
            const w = gM(f);
            d = w.MeasureLayout,
            x.visualElement = fM(e, y, f, s, w.ProjectionNode, o)
        }
        return p.jsxs(Bl.Provider, {
            value: x,
            children: [d && x.visualElement ? p.jsx(d, {
                visualElement: x.visualElement,
                ...f
            }) : null, oM(e, u, dM(y, x.visualElement, c), y, h, t, o)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = S.forwardRef(a);
    return l[cM] = e,
    l
}
function pM({layoutId: e}) {
    const t = S.useContext(Uf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function mM(e, t) {
    S.useContext(N1).strict
}
function gM(e) {
    const t = R1()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const s = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
function yM(e, t) {
    if (typeof Proxy > "u")
        return $u;
    const n = new Map
      , r = (o, i) => $u(o, i, e, t)
      , s = (o, i) => r(o, i);
    return new Proxy(s,{
        get: (o, i) => i === "create" ? r : (n.has(i) || n.set(i, $u(i, void 0, e, t)),
        n.get(i))
    })
}
const vM = (e, t) => t.isSVG ?? wh(e) ? new QR(t) : new UR(t,{
    allowProjection: e !== S.Fragment
});
class xM extends pr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = ej(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        zl(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let wM = 0;
class SM extends pr {
    constructor() {
        super(...arguments),
        this.id = wM++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const s = this.node.animationState.setActive("exit", !t);
        n && !t && s.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const CM = {
    animation: {
        Feature: xM
    },
    exit: {
        Feature: SM
    }
};
function xi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const bM = e => t => fh(t) && e(t, xi(t));
function Do(e, t, n, r) {
    return oi(e, t, bM(n), r)
}
const F1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Mg = (e, t) => Math.abs(e - t);
function EM(e, t) {
    const n = Mg(e.x, t.x)
      , r = Mg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const Dg = new Set(["auto", "scroll"]);
class _1 {
    constructor(t, n, {transformPagePoint: r, contextWindow: s=window, dragSnapToOrigin: o=!1, distanceThreshold: i=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = Uu(this.lastMoveEventInfo, this.history)
              , x = this.startEvent !== null
              , y = EM(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!x && !y)
                return;
            const {point: w} = h
              , {timestamp: g} = ke;
            this.history.push({
                ...w,
                timestamp: g
            });
            const {onStart: m, onMove: v} = this.handlers;
            x || (m && m(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            v && v(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, x) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = Bu(x, this.transformPagePoint),
            ee.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, x) => {
            this.end();
            const {onEnd: y, onSessionEnd: w, resumeAnimation: g} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = Uu(h.type === "pointercancel" ? this.lastMoveEventInfo : Bu(x, this.transformPagePoint), this.history);
            this.startEvent && y && y(h, m),
            w && w(h, m)
        }
        ,
        !fh(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = i,
        this.contextWindow = s || window;
        const l = xi(t)
          , u = Bu(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = ke;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, Uu(u, this.history)),
        this.removeListeners = gi(Do(this.contextWindow, "pointermove", this.handlePointerMove), Do(this.contextWindow, "pointerup", this.handlePointerUp), Do(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (Dg.has(r.overflowX) || Dg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , s = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , o = {
            x: s.x - n.x,
            y: s.y - n.y
        };
        o.x === 0 && o.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o.x,
        this.lastMoveEventInfo.point.y += o.y) : this.history.length > 0 && (this.history[0].x -= o.x,
        this.history[0].y -= o.y),
        this.scrollPositions.set(t, s),
        ee.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Ut(this.updatePoint)
    }
}
function Bu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Lg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Uu({point: e}, t) {
    return {
        point: e,
        delta: Lg(e, V1(t)),
        offset: Lg(e, TM(t)),
        velocity: PM(t, .1)
    }
}
function TM(e) {
    return e[0]
}
function V1(e) {
    return e[e.length - 1]
}
function PM(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const s = V1(e);
    for (; n >= 0 && (r = e[n],
    !(s.timestamp - r.timestamp > wt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && s.timestamp - r.timestamp > wt(t) * 2 && (r = e[1]);
    const o = vt(s.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const i = {
        x: (s.x - r.x) / o,
        y: (s.y - r.y) / o
    };
    return i.x === 1 / 0 && (i.x = 0),
    i.y === 1 / 0 && (i.y = 0),
    i
}
function kM(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
}
function Og(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function AM(e, {top: t, left: n, bottom: r, right: s}) {
    return {
        x: Og(e.x, n, s),
        y: Og(e.y, t, r)
    }
}
function Ig(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function NM(e, t) {
    return {
        x: Ig(e.x, t.x),
        y: Ig(e.y, t.y)
    }
}
function RM(e, t) {
    let n = .5;
    const r = Ke(e)
      , s = Ke(t);
    return s > r ? n = Ws(t.min, t.max - r, e.min) : r > s && (n = Ws(e.min, e.max - s, t.min)),
    Bt(0, 1, n)
}
function jM(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Pd = .35;
function MM(e=Pd) {
    return e === !1 ? e = 0 : e === !0 && (e = Pd),
    {
        x: Fg(e, "left", "right"),
        y: Fg(e, "top", "bottom")
    }
}
function Fg(e, t, n) {
    return {
        min: _g(e, t),
        max: _g(e, n)
    }
}
function _g(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const DM = new WeakMap;
class LM {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = be(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const o = d => {
            n && this.snapToCursor(xi(d).point),
            this.stopAnimation()
        }
          , i = (d, f) => {
            const {drag: h, dragPropagation: x, onDragStart: y} = this.getProps();
            if (h && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = lR(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Gt(g => {
                let m = this.getAxisMotionValue(g).get() || 0;
                if (tn.test(m)) {
                    const {projection: v} = this.visualElement;
                    if (v && v.layout) {
                        const C = v.layout.layoutBox[g];
                        C && (m = Ke(C) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[g] = m
            }
            ),
            y && ee.update( () => y(d, f), !1, !0),
            yd(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: x, onDirectionLock: y, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: g} = f;
            if (x && this.currentDirection === null) {
                this.currentDirection = IM(g),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, g),
            this.updateAxis("y", f.point, g),
            this.visualElement.render(),
            w && ee.update( () => w(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new _1(t,{
            onSessionStart: o,
            onStart: i,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: F1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , s = n || this.latestPanInfo
          , o = this.isDragging;
        if (this.cancel(),
        !o || !s || !r)
            return;
        const {velocity: i} = s;
        this.startAnimation(i);
        const {onDragEnd: a} = this.getProps();
        a && ee.postRender( () => a(r, s))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: s} = this.getProps();
        if (!r || !Qi(t, s, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let i = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (i = kM(i, this.constraints[t], this.elastic[t])),
        o.set(i)
    }
    resolveConstraints() {
        var o;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout
          , s = this.constraints;
        t && Jr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = AM(r.layoutBox, t) : this.constraints = !1,
        this.elastic = MM(n),
        s !== this.constraints && !Jr(t) && r && this.constraints && !this.hasMutatedConstraints && Gt(i => {
            this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = jM(r.layoutBox[i], this.constraints[i]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Jr(t))
            return !1;
        const r = t.current;
        cr(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: s} = this.visualElement;
        if (!s || !s.layout)
            return !1;
        const o = FR(r, s.root, this.visualElement.getTransformPagePoint());
        let i = NM(s.layout.layoutBox, o);
        if (n) {
            const a = n(LR(i));
            this.hasMutatedConstraints = !!a,
            a && (i = i1(a))
        }
        return i
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: s, dragTransition: o, dragSnapToOrigin: i, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = Gt(c => {
            if (!Qi(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            i && (d = {
                min: 0,
                max: 0
            });
            const f = s ? 200 : 1e6
              , h = s ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...d
            };
            return this.startAxisValueAnimation(c, x)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return yd(this.visualElement, t),
        r.start(ih(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Gt(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , s = r[n];
        return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Gt(n => {
            const {drag: r} = this.getProps();
            if (!Qi(n, r, this.currentDirection))
                return;
            const {projection: s} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const {min: i, max: a} = s.layout.layoutBox[n]
                  , l = o.get() || 0;
                o.set(t[n] - fe(i, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Jr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const s = {
            x: 0,
            y: 0
        };
        Gt(i => {
            const a = this.getAxisMotionValue(i);
            if (a && this.constraints !== !1) {
                const l = a.get();
                s[i] = RM({
                    min: l,
                    max: l
                }, this.constraints[i])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        Gt(i => {
            if (!Qi(i, t, null))
                return;
            const a = this.getAxisMotionValue(i)
              , {min: l, max: u} = this.constraints[i];
            a.set(fe(l, u, s[i]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        DM.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Do(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && pR(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const s = () => {
            const {dragConstraints: u} = this.getProps();
            Jr(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = OM(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: o} = this.visualElement
          , i = o.addEventListener("measure", s);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        ee.read(s);
        const a = oi(window, "resize", () => this.scalePositionWithinConstraints())
          , l = o.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (Gt(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            i(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: s=!1, dragConstraints: o=!1, dragElastic: i=Pd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: i,
            dragMomentum: a
        }
    }
}
function Vg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function OM(e, t, n) {
    const r = Sd(e, Vg(n))
      , s = Sd(t, Vg(n));
    return () => {
        r(),
        s()
    }
}
function Qi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function IM(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class FM extends pr {
    constructor(t) {
        super(t),
        this.removeGroupControls = nt,
        this.removeListeners = nt,
        this.controls = new LM(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || nt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Wu = e => (t, n) => {
    e && ee.update( () => e(t, n), !1, !0)
}
;
class _M extends pr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = nt
    }
    onPointerDown(t) {
        this.session = new _1(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: F1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s} = this.node.getProps();
        return {
            onSessionStart: Wu(t),
            onStart: Wu(n),
            onMove: Wu(r),
            onEnd: (o, i) => {
                delete this.session,
                s && ee.postRender( () => s(o, i))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Do(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Hu = !1;
class VM extends S.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s} = this.props
          , {projection: o} = t;
        o && (n.group && n.group.add(o),
        r && r.register && s && r.register(o),
        Hu && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        va.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: s, isPresent: o} = this.props
          , {projection: i} = r;
        return i && (i.isPresent = o,
        t.layoutDependency !== n && i.setOptions({
            ...i.options,
            layoutDependency: n
        }),
        Hu = !0,
        s || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? i.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? i.promote() : i.relegate() || ee.postRender( () => {
            const a = i.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        dh.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: s} = t;
        Hu = !0,
        s && (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function z1(e) {
    const [t,n] = A1()
      , r = S.useContext(Uf);
    return p.jsx(VM, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: S.useContext(O1),
        isPresent: t,
        safeToRemove: n
    })
}
const zM = {
    pan: {
        Feature: _M
    },
    drag: {
        Feature: FM,
        ProjectionNode: k1,
        MeasureLayout: z1
    }
};
function zg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const s = "onHover" + n
      , o = r[s];
    o && ee.postRender( () => o(t, xi(t)))
}
class $M extends pr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = cR(t, (n, r) => (zg(this.node, r, "Start"),
        s => zg(this.node, s, "End"))))
    }
    unmount() {}
}
class BM extends pr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = gi(oi(this.node.current, "focus", () => this.onFocus()), oi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function $g(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const s = "onTap" + (n === "End" ? "" : n)
      , o = r[s];
    o && ee.postRender( () => o(t, xi(t)))
}
class UM extends pr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = gR(t, (s, o) => ($g(this.node, o, "Start"),
        (i, {success: a}) => $g(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const kd = new WeakMap
  , Ku = new WeakMap
  , WM = e => {
    const t = kd.get(e.target);
    t && t(e)
}
  , HM = e => {
    e.forEach(WM)
}
;
function KM({root: e, ...t}) {
    const n = e || document;
    Ku.has(n) || Ku.set(n, {});
    const r = Ku.get(n)
      , s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(HM,{
        root: e,
        ...t
    })),
    r[s]
}
function GM(e, t, n) {
    const r = KM(t);
    return kd.set(e, n),
    r.observe(e),
    () => {
        kd.delete(e),
        r.unobserve(e)
    }
}
const YM = {
    some: 0,
    all: 1
};
class QM extends pr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: s="some", once: o} = t
          , i = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof s == "number" ? s : YM[s]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return GM(this.node.current, i, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(qM(t, n)) && this.startObserver()
    }
    unmount() {}
}
function qM({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const XM = {
    inView: {
        Feature: QM
    },
    tap: {
        Feature: UM
    },
    focus: {
        Feature: BM
    },
    hover: {
        Feature: $M
    }
}
  , ZM = {
    layout: {
        ProjectionNode: k1,
        MeasureLayout: z1
    }
}
  , JM = {
    ...CM,
    ...XM,
    ...zM,
    ...ZM
}
  , Yn = yM(JM, vM)
  , eD = 50
  , Bg = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , tD = () => ({
    time: 0,
    x: Bg(),
    y: Bg()
})
  , nD = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Ug(e, t, n, r) {
    const s = n[t]
      , {length: o, position: i} = nD[t]
      , a = s.current
      , l = n.time;
    s.current = e[`scroll${i}`],
    s.scrollLength = e[`scroll${o}`] - e[`client${o}`],
    s.offset.length = 0,
    s.offset[0] = 0,
    s.offset[1] = s.scrollLength,
    s.progress = Ws(0, s.scrollLength, s.current);
    const u = r - l;
    s.velocity = u > eD ? 0 : Gf(s.current - a, u)
}
function rD(e, t, n) {
    Ug(e, "x", t, n),
    Ug(e, "y", t, n),
    t.time = n
}
function sD(e, t) {
    const n = {
        x: 0,
        y: 0
    };
    let r = e;
    for (; r && r !== t; )
        if (tl(r))
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === "svg") {
            const s = r.getBoundingClientRect();
            r = r.parentElement;
            const o = r.getBoundingClientRect();
            n.x += s.left - o.left,
            n.y += s.top - o.top
        } else if (r instanceof SVGGraphicsElement) {
            const {x: s, y: o} = r.getBBox();
            n.x += s,
            n.y += o;
            let i = null
              , a = r.parentNode;
            for (; !i; )
                a.tagName === "svg" && (i = a),
                a = r.parentNode;
            r = i
        } else
            break;
    return n
}
const Ad = {
    start: 0,
    center: .5,
    end: 1
};
function Wg(e, t, n=0) {
    let r = 0;
    if (e in Ad && (e = Ad[e]),
    typeof e == "string") {
        const s = parseFloat(e);
        e.endsWith("px") ? r = s : e.endsWith("%") ? e = s / 100 : e.endsWith("vw") ? r = s / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = s / 100 * document.documentElement.clientHeight : e = s
    }
    return typeof e == "number" && (r = t * e),
    n + r
}
const oD = [0, 0];
function iD(e, t, n, r) {
    let s = Array.isArray(e) ? e : oD
      , o = 0
      , i = 0;
    return typeof e == "number" ? s = [e, e] : typeof e == "string" && (e = e.trim(),
    e.includes(" ") ? s = e.split(" ") : s = [e, Ad[e] ? e : "0"]),
    o = Wg(s[0], n, r),
    i = Wg(s[1], t),
    o - i
}
const aD = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , lD = {
    x: 0,
    y: 0
};
function uD(e) {
    return "getBBox"in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function cD(e, t, n) {
    const {offset: r=aD.All} = n
      , {target: s=e, axis: o="y"} = n
      , i = o === "y" ? "height" : "width"
      , a = s !== e ? sD(s, e) : lD
      , l = s === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : uD(s)
      , u = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[o].offset.length = 0;
    let c = !t[o].interpolate;
    const d = r.length;
    for (let f = 0; f < d; f++) {
        const h = iD(r[f], u[i], l[i], a[o]);
        !c && h !== t[o].interpolatorOffsets[f] && (c = !0),
        t[o].offset[f] = h
    }
    c && (t[o].interpolate = kw(t[o].offset, Aw(r), {
        clamp: !1
    }),
    t[o].interpolatorOffsets = [...t[o].offset]),
    t[o].progress = Bt(0, 1, t[o].interpolate(t[o].current))
}
function dD(e, t=e, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    t !== e) {
        let r = t;
        for (; r && r !== e; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function fD(e, t, n, r={}) {
    return {
        measure: s => {
            dD(e, r.target, n),
            rD(e, n, s),
            (r.offset || r.target) && cD(e, n, r)
        }
        ,
        notify: () => t(n)
    }
}
const Zr = new WeakMap
  , Hg = new WeakMap
  , Gu = new WeakMap
  , Kg = new WeakMap
  , qi = new WeakMap
  , Gg = e => e === document.scrollingElement ? window : e;
function $1(e, {container: t=document.scrollingElement, trackContentSize: n=!1, ...r}={}) {
    if (!t)
        return nt;
    let s = Gu.get(t);
    s || (s = new Set,
    Gu.set(t, s));
    const o = tD()
      , i = fD(t, e, o, r);
    if (s.add(i),
    !Zr.has(t)) {
        const l = () => {
            for (const f of s)
                f.measure(ke.timestamp);
            ee.preUpdate(u)
        }
          , u = () => {
            for (const f of s)
                f.notify()
        }
          , c = () => ee.read(l);
        Zr.set(t, c);
        const d = Gg(t);
        window.addEventListener("resize", c),
        t !== document.documentElement && Hg.set(t, Sd(t, c)),
        d.addEventListener("scroll", c),
        c()
    }
    if (n && !qi.has(t)) {
        const l = Zr.get(t)
          , u = {
            width: t.scrollWidth,
            height: t.scrollHeight
        };
        Kg.set(t, u);
        const c = () => {
            const f = t.scrollWidth
              , h = t.scrollHeight;
            (u.width !== f || u.height !== h) && (l(),
            u.width = f,
            u.height = h)
        }
          , d = ee.read(c, !0);
        qi.set(t, d)
    }
    const a = Zr.get(t);
    return ee.read(a, !1, !0),
    () => {
        var d;
        Ut(a);
        const l = Gu.get(t);
        if (!l || (l.delete(i),
        l.size))
            return;
        const u = Zr.get(t);
        Zr.delete(t),
        u && (Gg(t).removeEventListener("scroll", u),
        (d = Hg.get(t)) == null || d(),
        window.removeEventListener("resize", u));
        const c = qi.get(t);
        c && (Ut(c),
        qi.delete(t)),
        Kg.delete(t)
    }
}
function B1(e) {
    return typeof window < "u" && !e && Dw()
}
const Yg = new Map;
function hD(e) {
    const t = {
        value: 0
    }
      , n = $1(r => {
        t.value = r[e.axis].progress * 100
    }
    , e);
    return {
        currentTime: t,
        cancel: n
    }
}
function U1({source: e, container: t, ...n}) {
    const {axis: r} = n;
    e && (t = e);
    const s = Yg.get(t) ?? new Map;
    Yg.set(t, s);
    const o = n.target ?? "self"
      , i = s.get(o) ?? {}
      , a = r + (n.offset ?? []).join(",");
    return i[a] || (i[a] = B1(n.target) ? new ScrollTimeline({
        source: t,
        axis: r
    }) : hD({
        container: t,
        ...n
    })),
    i[a]
}
function pD(e, t) {
    const n = U1(t);
    return e.attachTimeline({
        timeline: t.target ? void 0 : n,
        observe: r => (r.pause(),
        t1(s => {
            r.time = r.iterationDuration * s
        }
        , n))
    })
}
function mD(e) {
    return e.length === 2
}
function gD(e, t) {
    return mD(e) ? $1(n => {
        e(n[t.axis].progress, n)
    }
    , t) : t1(e, U1(t))
}
function W1(e, {axis: t="y", container: n=document.scrollingElement, ...r}={}) {
    if (!n)
        return nt;
    const s = {
        axis: t,
        container: n,
        ...r
    };
    return typeof e == "function" ? gD(e, s) : pD(e, s)
}
const yD = () => ({
    scrollX: Zt(0),
    scrollY: Zt(0),
    scrollXProgress: Zt(0),
    scrollYProgress: Zt(0)
})
  , Xi = e => e ? !e.current : !1;
function Qg(e, t, n) {
    return {
        factory: r => W1(r, {
            ...t,
            axis: e,
            container: n
        }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: r => r,
        duration: 1
    }
}
function vD({container: e, target: t, ...n}={}) {
    const r = Fl(yD);
    if (!t && B1()) {
        const a = (e == null ? void 0 : e.current) || void 0;
        r.scrollXProgress.accelerate = Qg("x", n, a),
        r.scrollYProgress.accelerate = Qg("y", n, a)
    }
    const s = S.useRef(null)
      , o = S.useRef(!1)
      , i = S.useCallback( () => (s.current = W1( (a, {x: l, y: u}) => {
        r.scrollX.set(l.current),
        r.scrollXProgress.set(l.progress),
        r.scrollY.set(u.current),
        r.scrollYProgress.set(u.progress)
    }
    , {
        ...n,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    }),
    () => {
        var a;
        (a = s.current) == null || a.call(s)
    }
    ), [e, t, JSON.stringify(n.offset)]);
    return Wf( () => {
        if (o.current = !1,
        Xi(e) || Xi(t)) {
            o.current = !0;
            return
        } else
            return i()
    }
    , [i]),
    S.useEffect( () => {
        if (o.current)
            return cr(!Xi(e), "Container ref is defined but not hydrated", "use-scroll-ref"),
            cr(!Xi(t), "Target ref is defined but not hydrated", "use-scroll-ref"),
            i()
    }
    , [i]),
    r
}
const xD = {
    some: 0,
    all: 1
};
function wD(e, t, {root: n, margin: r, amount: s="some"}={}) {
    const o = ch(e)
      , i = new WeakMap
      , a = u => {
        u.forEach(c => {
            const d = i.get(c.target);
            if (c.isIntersecting !== !!d)
                if (c.isIntersecting) {
                    const f = t(c.target, c);
                    typeof f == "function" ? i.set(c.target, f) : l.unobserve(c.target)
                } else
                    typeof d == "function" && (d(c),
                    i.delete(c.target))
        }
        )
    }
      , l = new IntersectionObserver(a,{
        root: n,
        rootMargin: r,
        threshold: typeof s == "number" ? s : xD[s]
    });
    return o.forEach(u => l.observe(u)),
    () => l.disconnect()
}
function SD(e, {root: t, margin: n, amount: r, once: s=!1, initial: o=!1}={}) {
    const [i,a] = S.useState(o);
    return S.useEffect( () => {
        if (!e.current || s && i)
            return;
        const l = () => (a(!0),
        s ? void 0 : () => a(!1))
          , u = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return wD(e.current, l, u)
    }
    , [t, e, n, s, r]),
    i
}
const qg = [{
    label: "Inicio",
    href: "#hero"
}, {
    label: "Problema",
    href: "#problema"
}, {
    label: "Metodología",
    href: "#metodologia"
}, {
    label: "Soluciones",
    href: "#soluciones"
}, {
    label: "Sobre Mí",
    href: "#autoridad"
}, {
    label: "FAQ",
    href: "#faq"
}]
  , CD = () => {
    const [e,t] = S.useState(!1)
      , [n,r] = S.useState(!1);
    S.useEffect( () => {
        const o = () => t(window.scrollY > 40);
        return window.addEventListener("scroll", o, {
            passive: !0
        }),
        () => window.removeEventListener("scroll", o)
    }
    , []);
    const s = o => {
        r(!1);
        const i = document.querySelector(o);
        i == null || i.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return p.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20" : "bg-transparent"}`,
        children: [p.jsxs("div", {
            className: "container flex items-center justify-between h-16 md:h-18",
            children: [p.jsxs("a", {
                href: "#hero",
                onClick: o => {
                    o.preventDefault(),
                    s("#hero")
                }
                ,
                className: "flex items-center gap-2",
                children: [p.jsxs("span", {
                    className: "font-display font-bold text-xl",
                    children: [p.jsx("span", {
                        className: "gold-text",
                        children: "EAI"
                    }), " ", p.jsx("span", {
                        className: "text-foreground",
                        children: "Group"
                    })]
                }), p.jsx($r, {
                    className: "h-4 w-4 text-primary opacity-70"
                })]
            }), p.jsx("ul", {
                className: "hidden md:flex items-center gap-1",
                children: qg.map(o => p.jsx("li", {
                    children: p.jsx("button", {
                        onClick: () => s(o.href),
                        className: "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50",
                        children: o.label
                    })
                }, o.href))
            }), p.jsx("button", {
                onClick: () => s("#cta"),
                className: "hidden md:inline-flex gold-gradient text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity",
                children: "Agendar Evaluación"
            }), p.jsx("button", {
                onClick: () => r(!n),
                className: "md:hidden p-2 text-foreground",
                "aria-label": "Toggle menu",
                children: n ? p.jsx(Ua, {
                    className: "h-5 w-5"
                }) : p.jsx(tT, {
                    className: "h-5 w-5"
                })
            })]
        }), p.jsx(Kj, {
            children: n && p.jsx(Yn.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden",
                children: p.jsxs("ul", {
                    className: "container py-4 space-y-1",
                    children: [qg.map(o => p.jsx("li", {
                        children: p.jsx("button", {
                            onClick: () => s(o.href),
                            className: "w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors",
                            children: o.label
                        })
                    }, o.href)), p.jsx("li", {
                        className: "pt-2",
                        children: p.jsx("button", {
                            onClick: () => s("#cta"),
                            className: "w-full gold-gradient text-primary-foreground font-semibold text-sm px-5 py-3 rounded-lg",
                            children: "Agendar Evaluación"
                        })
                    })]
                })
            })
        })]
    })
}
  , bD = "/assets/emmanuel-hero-BUPuUNj1.jpg"
  , Lo = ({end: e, suffix: t="", prefix: n="", label: r, duration: s=2}) => {
    const [o,i] = S.useState(0)
      , a = S.useRef(null)
      , l = SD(a, {
        once: !0
    });
    return S.useEffect( () => {
        if (!l)
            return;
        let u = 0;
        const c = e / (s * 60)
          , d = setInterval( () => {
            u += c,
            u >= e ? (i(e),
            clearInterval(d)) : i(Math.floor(u))
        }
        , 1e3 / 60);
        return () => clearInterval(d)
    }
    , [l, e, s]),
    p.jsxs(Yn.div, {
        ref: a,
        initial: {
            opacity: 0,
            y: 10
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0
        },
        transition: {
            duration: .4
        },
        className: "stat-card",
        children: [p.jsxs("span", {
            className: "text-2xl md:text-3xl font-bold gold-text font-display",
            children: [n, o, t]
        }), p.jsx("span", {
            className: "text-xs md:text-sm text-muted-foreground mt-1 text-center",
            children: r
        })]
    })
}
  , ED = () => p.jsxs("section", {
    className: "relative min-h-screen flex items-center overflow-hidden",
    children: [p.jsx("div", {
        className: "absolute inset-0 hero-glow"
    }), p.jsx("div", {
        className: "absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2"
    }), p.jsx("div", {
        className: "container relative z-10 py-20 md:py-28",
        children: p.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            children: [p.jsxs(Yn.div, {
                initial: {
                    opacity: 0,
                    x: -40
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .7,
                    ease: "easeOut"
                },
                children: [p.jsxs("div", {
                    className: "inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-sm",
                    children: [p.jsx($r, {
                        className: "h-4 w-4 text-primary"
                    }), p.jsx("span", {
                        className: "text-muted-foreground",
                        children: "FCRA Certified Strategy"
                    })]
                }), p.jsxs("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6",
                    children: [p.jsx("span", {
                        className: "text-foreground",
                        children: "Estrategia"
                    }), " ", p.jsx("span", {
                        className: "gold-text",
                        children: "Financiera"
                    }), p.jsx("br", {}), p.jsx("span", {
                        className: "text-foreground",
                        children: "que Abre"
                    }), " ", p.jsx("span", {
                        className: "gold-text",
                        children: "Puertas"
                    })]
                }), p.jsx("p", {
                    className: "text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed",
                    children: "No reparamos crédito. Diseñamos perfiles financieros que los bancos no pueden ignorar. Asesoría legal, estratégica y personalizada."
                }), p.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 mb-8",
                    children: [p.jsxs("a", {
                        href: "#cta",
                        className: "gold-gradient text-primary-foreground font-semibold px-8 py-4 rounded-xl text-center transition-all duration-300 hover:scale-105 gold-glow text-lg",
                        children: ["Agendar Evaluación", p.jsx(Rf, {
                            className: "inline ml-2 h-5 w-5"
                        })]
                    }), p.jsxs("button", {
                        className: "flex items-center justify-center gap-3 glass-card px-6 py-4 rounded-xl text-foreground transition-all duration-300 hover:border-primary/30",
                        children: [p.jsx("div", {
                            className: "w-10 h-10 rounded-full gold-gradient flex items-center justify-center",
                            children: p.jsx(J0, {
                                className: "h-4 w-4 text-primary-foreground ml-0.5"
                            })
                        }), p.jsx("span", {
                            className: "font-medium",
                            children: "Ver Cómo Funciona"
                        })]
                    })]
                }), p.jsx("p", {
                    className: "text-xs text-muted-foreground mb-6",
                    children: "⚡ Cupos limitados — Solo aceptamos 10 clientes nuevos por semana"
                }), p.jsxs("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [p.jsx(Lo, {
                        end: 500,
                        suffix: "+",
                        label: "Clientes",
                        prefix: ""
                    }), p.jsx(Lo, {
                        end: 20,
                        suffix: "M+",
                        label: "Capital Accedido",
                        prefix: "$"
                    }), p.jsxs("div", {
                        className: "stat-card",
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [p.jsx(oT, {
                                className: "h-4 w-4 text-primary fill-primary"
                            }), p.jsx("span", {
                                className: "text-2xl md:text-3xl font-bold gold-text font-display",
                                children: "4.9"
                            })]
                        }), p.jsx("span", {
                            className: "text-xs md:text-sm text-muted-foreground mt-1",
                            children: "Rating"
                        })]
                    })]
                })]
            }), p.jsx(Yn.div, {
                initial: {
                    opacity: 0,
                    x: 40
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .7,
                    delay: .2,
                    ease: "easeOut"
                },
                className: "relative flex justify-center lg:justify-end",
                children: p.jsxs("div", {
                    className: "relative",
                    children: [p.jsx("div", {
                        className: "absolute inset-0 bg-primary/10 rounded-3xl blur-[60px] scale-90"
                    }), p.jsx("img", {
                        src: bD,
                        alt: "Emmanuel — Fundador de EAI Group",
                        className: "relative rounded-3xl w-full max-w-md lg:max-w-lg object-cover shadow-2xl border border-border/30",
                        loading: "eager"
                    }), p.jsxs(Yn.div, {
                        animate: {
                            y: [0, -8, 0]
                        },
                        transition: {
                            duration: 4,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        },
                        className: "absolute -left-4 top-1/4 glass-card px-4 py-3 flex items-center gap-3",
                        children: [p.jsx("div", {
                            className: "w-8 h-8 rounded-full gold-gradient flex items-center justify-center",
                            children: p.jsx($r, {
                                className: "h-4 w-4 text-primary-foreground"
                            })
                        }), p.jsxs("div", {
                            children: [p.jsx("p", {
                                className: "text-xs font-semibold text-foreground",
                                children: "FCRA Certified"
                            }), p.jsx("p", {
                                className: "text-[10px] text-muted-foreground",
                                children: "Metro 2 Compliant"
                            })]
                        })]
                    }), p.jsxs(Yn.div, {
                        animate: {
                            y: [0, -6, 0]
                        },
                        transition: {
                            duration: 5,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                            delay: 1
                        },
                        className: "absolute -right-4 bottom-1/4 glass-card px-4 py-3",
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [p.jsx(lT, {
                                className: "h-4 w-4 text-accent"
                            }), p.jsx("span", {
                                className: "text-xs font-semibold text-foreground",
                                children: "+500 Familias"
                            })]
                        }), p.jsx("p", {
                            className: "text-[10px] text-muted-foreground",
                            children: "han transformado su futuro"
                        })]
                    })]
                })
            })]
        })
    }), p.jsx("div", {
        className: "fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/90 backdrop-blur-lg border-t border-border lg:hidden",
        children: p.jsx("a", {
            href: "#cta",
            className: "block w-full gold-gradient text-primary-foreground font-semibold py-4 rounded-xl text-center text-lg",
            children: "Agendar Evaluación Gratis"
        })
    })]
})
  , Re = ({children: e, className: t="", delay: n=0}) => p.jsx(Yn.div, {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0,
        margin: "-80px"
    },
    transition: {
        duration: .6,
        delay: n,
        ease: "easeOut"
    },
    className: t,
    children: e
})
  , TD = [{
    icon: XE,
    title: "Aplicaciones Denegadas",
    description: "Solicitas financiamiento y recibes un NO sin entender por qué.",
    emotional: "El rechazo no es personal — es un problema de estrategia."
}, {
    icon: YE,
    title: "Capital Inalcanzable",
    description: "Sabes que calificas, pero los bancos no ven lo que tú ves.",
    emotional: "Tu potencial financiero está bloqueado por un perfil mal estructurado."
}, {
    icon: iT,
    title: "Perfil Sin Sustancia",
    description: "Un score alto sin fundamento no abre las puertas correctas.",
    emotional: "Un número no es una estrategia. Necesitas estructura real."
}]
  , PD = () => p.jsx("section", {
    className: "relative py-24 md:py-32 section-gradient",
    children: p.jsxs("div", {
        className: "container",
        children: [p.jsxs(Re, {
            className: "text-center mb-16",
            children: [p.jsxs("h2", {
                className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-balance",
                children: ["¿Tu score de 700 no es suficiente para que", p.jsx("span", {
                    className: "gold-text",
                    children: " te digan que SÍ"
                }), "?"]
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Miles de latinos enfrentan estos mismos obstáculos cada día."
            })]
        }), p.jsx("div", {
            className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12",
            children: TD.map( (e, t) => p.jsx(Re, {
                delay: t * .15,
                children: p.jsxs("div", {
                    className: "glass-card-hover p-8 h-full flex flex-col items-center text-center group",
                    children: [p.jsx("div", {
                        className: "w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors",
                        children: p.jsx(e.icon, {
                            className: "h-7 w-7 text-destructive"
                        })
                    }), p.jsx("h3", {
                        className: "text-xl font-display font-semibold text-foreground mb-3",
                        children: e.title
                    }), p.jsx("p", {
                        className: "text-muted-foreground mb-4 leading-relaxed",
                        children: e.description
                    }), p.jsx("p", {
                        className: "text-sm text-primary/80 italic mt-auto",
                        children: e.emotional
                    })]
                })
            }, e.title))
        }), p.jsx(Re, {
            className: "text-center",
            delay: .4,
            children: p.jsxs("p", {
                className: "text-lg md:text-xl text-foreground font-medium font-display",
                children: ["Es hora de dejar de adivinar y empezar a", " ", p.jsx("span", {
                    className: "gold-text",
                    children: "aplicar estrategia."
                })]
            })
        })]
    })
})
  , Xg = [{
    id: "audit",
    label: "Auditoría Profunda",
    icon: $r,
    description: "Analizamos cada línea de tu reporte crediticio bajo las leyes FCRA y Fair Debt Collection Practices Act para identificar errores, violaciones y oportunidades."
}, {
    id: "legal",
    label: "Cumplimiento Legal",
    icon: sT,
    description: "Cada acción que tomamos está respaldada por leyes federales verificables. No usamos tácticas genéricas — aplicamos derecho financiero real."
}, {
    id: "funding",
    label: "Estructura de Funding",
    icon: JE,
    description: "Diseñamos tu perfil para maximizar aprobaciones de líneas de crédito, préstamos comerciales y financiamiento con las mejores condiciones."
}]
  , Zg = [{
    feature: "Análisis legal FCRA",
    eai: !0,
    traditional: !1
}, {
    feature: "Estrategia personalizada",
    eai: !0,
    traditional: !1
}, {
    feature: "Cumplimiento Metro 2",
    eai: !0,
    traditional: !1
}, {
    feature: "Estructura de funding",
    eai: !0,
    traditional: !1
}, {
    feature: "Seguimiento continuo",
    eai: !0,
    traditional: !1
}, {
    feature: "Disputas genéricas masivas",
    eai: !1,
    traditional: !0
}]
  , kD = () => {
    const [e,t] = S.useState("audit")
      , n = Xg.find(r => r.id === e);
    return p.jsx("section", {
        className: "py-24 md:py-32 relative",
        children: p.jsxs("div", {
            className: "container",
            children: [p.jsxs(Re, {
                className: "text-center mb-16",
                children: [p.jsxs("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4",
                    children: ["Nuestra ", p.jsx("span", {
                        className: "gold-text",
                        children: "Metodología"
                    })]
                }), p.jsx("p", {
                    className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                    children: "Asesoría basada en leyes federales verificables."
                })]
            }), p.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto",
                children: [p.jsxs(Re, {
                    children: [p.jsx("div", {
                        className: "space-y-3 mb-8",
                        children: Xg.map(r => p.jsxs("button", {
                            onClick: () => t(r.id),
                            className: `w-full flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 ${e === r.id ? "glass-card border-primary/40 shadow-lg" : "hover:bg-secondary/50"}`,
                            children: [p.jsx("div", {
                                className: `w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${e === r.id ? "gold-gradient" : "bg-secondary"}`,
                                children: p.jsx(r.icon, {
                                    className: `h-5 w-5 ${e === r.id ? "text-primary-foreground" : "text-muted-foreground"}`
                                })
                            }), p.jsx("span", {
                                className: `font-semibold ${e === r.id ? "text-foreground" : "text-muted-foreground"}`,
                                children: r.label
                            })]
                        }, r.id))
                    }), p.jsxs("div", {
                        className: "glass-card p-6",
                        children: [p.jsx("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: n.description
                        }), p.jsxs("div", {
                            className: "mt-4 flex items-center gap-2",
                            children: [p.jsx($r, {
                                className: "h-4 w-4 text-primary"
                            }), p.jsx("span", {
                                className: "text-xs text-primary font-medium",
                                children: "FCRA & Metro 2 Compliant"
                            })]
                        })]
                    })]
                }), p.jsx(Re, {
                    delay: .2,
                    children: p.jsxs("div", {
                        className: "glass-card overflow-hidden",
                        children: [p.jsxs("div", {
                            className: "grid grid-cols-3 p-5 border-b border-border",
                            children: [p.jsx("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Característica"
                            }), p.jsx("span", {
                                className: "text-sm font-bold gold-text text-center",
                                children: "EAI Group"
                            }), p.jsx("span", {
                                className: "text-sm font-medium text-muted-foreground text-center",
                                children: "Tradicional"
                            })]
                        }), Zg.map( (r, s) => p.jsxs("div", {
                            className: `grid grid-cols-3 p-5 ${s < Zg.length - 1 ? "border-b border-border/50" : ""}`,
                            children: [p.jsx("span", {
                                className: "text-sm text-foreground",
                                children: r.feature
                            }), p.jsx("div", {
                                className: "flex justify-center",
                                children: r.eai ? p.jsx(qp, {
                                    className: "h-5 w-5 text-accent"
                                }) : p.jsx(Ua, {
                                    className: "h-5 w-5 text-muted-foreground/40"
                                })
                            }), p.jsx("div", {
                                className: "flex justify-center",
                                children: r.traditional ? p.jsx(qp, {
                                    className: "h-5 w-5 text-muted-foreground/40"
                                }) : p.jsx(Ua, {
                                    className: "h-5 w-5 text-muted-foreground/40"
                                })
                            })]
                        }, r.feature))]
                    })
                })]
            })]
        })
    })
}
  , AD = [{
    icon: QE,
    title: "Dueños de Negocio",
    description: "Líneas de crédito comercial, financiamiento SBA y estructura corporativa para escalar tu empresa.",
    proof: "+120 Dueños financiados",
    cta: "Ver Estrategia"
}, {
    icon: aT,
    title: "Truck Drivers",
    description: "Financiamiento de flotas, crédito comercial y perfiles optimizados para la industria del transporte.",
    proof: "+80 Conductores aprobados",
    cta: "Ver Estrategia"
}, {
    icon: ZE,
    title: "Primeros Compradores",
    description: "Preparación de perfil hipotecario, eliminación de obstáculos y aprobación de primera vivienda.",
    proof: "+200 Familias en su hogar",
    cta: "Ver Estrategia"
}, {
    icon: uT,
    title: "Optimización Express",
    description: "Para quienes necesitan resultados rápidos: plan intensivo de 90 días con seguimiento semanal.",
    proof: "Resultados en 90 días",
    cta: "Ver Estrategia"
}]
  , ND = () => p.jsx("section", {
    className: "py-24 md:py-32 section-gradient",
    children: p.jsxs("div", {
        className: "container",
        children: [p.jsxs(Re, {
            className: "text-center mb-16",
            children: [p.jsxs("h2", {
                className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4",
                children: ["Soluciones ", p.jsx("span", {
                    className: "gold-text",
                    children: "Estratégicas"
                })]
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Estrategias diseñadas para tu situación específica, no plantillas genéricas."
            })]
        }), p.jsx("div", {
            className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto",
            children: AD.map( (e, t) => p.jsx(Re, {
                delay: t * .1,
                children: p.jsxs("div", {
                    className: "glass-card-hover p-8 h-full flex flex-col group",
                    children: [p.jsx("div", {
                        className: "w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-6",
                        children: p.jsx(e.icon, {
                            className: "h-6 w-6 text-primary-foreground"
                        })
                    }), p.jsx("h3", {
                        className: "text-xl font-display font-semibold text-foreground mb-3",
                        children: e.title
                    }), p.jsx("p", {
                        className: "text-muted-foreground leading-relaxed mb-4 flex-1",
                        children: e.description
                    }), p.jsxs("p", {
                        className: "text-sm text-accent font-medium mb-4",
                        children: ["✓ ", e.proof]
                    }), p.jsxs("a", {
                        href: "#cta",
                        className: "inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300",
                        children: [e.cta, p.jsx(Rf, {
                            className: "h-4 w-4"
                        })]
                    })]
                })
            }, e.title))
        })]
    })
})
  , RD = "/assets/emmanuel-authority-HJY44EA1.jpg"
  , jD = () => p.jsx("section", {
    className: "py-24 md:py-32 relative",
    children: p.jsxs("div", {
        className: "container",
        children: [p.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto",
            children: [p.jsx(Re, {
                children: p.jsxs("div", {
                    className: "relative",
                    children: [p.jsx("div", {
                        className: "absolute inset-0 bg-primary/8 rounded-3xl blur-[50px] scale-95"
                    }), p.jsx("img", {
                        src: RD,
                        alt: "Emmanuel — Estratega Financiero",
                        className: "relative rounded-3xl w-full object-cover shadow-2xl border border-border/30",
                        loading: "lazy"
                    })]
                })
            }), p.jsxs(Re, {
                delay: .2,
                children: [p.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [p.jsx(GE, {
                        className: "h-5 w-5 text-primary"
                    }), p.jsx("span", {
                        className: "text-sm text-primary font-medium",
                        children: "Fundador Verificado"
                    })]
                }), p.jsxs("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight",
                    children: ["De la cabina de un camión a", " ", p.jsx("span", {
                        className: "gold-text",
                        children: "estratega financiero."
                    })]
                }), p.jsxs("div", {
                    className: "glass-card p-6 mb-8 relative",
                    children: [p.jsx(rT, {
                        className: "absolute top-4 left-4 h-6 w-6 text-primary/20"
                    }), p.jsx("p", {
                        className: "text-foreground/90 leading-relaxed pl-8 italic font-display text-lg",
                        children: '"Yo viví el rechazo. Sé lo que se siente cuando te dicen que no, cuando sabes que mereces más. Por eso creé EAI Group: para que ningún latino tenga que adivinar cómo funciona el sistema financiero."'
                    }), p.jsxs("div", {
                        className: "mt-4 pl-8",
                        children: [p.jsx("p", {
                            className: "text-sm font-semibold text-foreground",
                            children: "— Emmanuel"
                        }), p.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Fundador, EAI Group"
                        })]
                    })]
                }), p.jsxs("div", {
                    className: "flex items-center gap-6 mb-8",
                    children: [p.jsxs("div", {
                        className: "flex-1 glass-card p-4 text-center",
                        children: [p.jsx("p", {
                            className: "text-xs text-muted-foreground mb-1",
                            children: "Antes"
                        }), p.jsx("p", {
                            className: "text-sm font-semibold text-foreground",
                            children: "Truck Driver"
                        }), p.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Score: 520"
                        })]
                    }), p.jsx("div", {
                        className: "w-8 h-[2px] gold-gradient"
                    }), p.jsxs("div", {
                        className: "flex-1 glass-card p-4 text-center border-primary/30",
                        children: [p.jsx("p", {
                            className: "text-xs text-primary mb-1",
                            children: "Después"
                        }), p.jsx("p", {
                            className: "text-sm font-semibold text-foreground",
                            children: "CEO & Estratega"
                        }), p.jsx("p", {
                            className: "text-xs text-accent",
                            children: "$20M+ Capital"
                        })]
                    })]
                })]
            })]
        }), p.jsx(Re, {
            className: "mt-16",
            delay: .3,
            children: p.jsxs("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto",
                children: [p.jsx(Lo, {
                    end: 500,
                    suffix: "+",
                    label: "Clientes Asesorados"
                }), p.jsx(Lo, {
                    end: 20,
                    suffix: "M+",
                    prefix: "$",
                    label: "Capital Accedido"
                }), p.jsxs("div", {
                    className: "stat-card",
                    children: [p.jsx("span", {
                        className: "text-2xl md:text-3xl font-bold gold-text font-display",
                        children: "4.9"
                    }), p.jsx("span", {
                        className: "text-xs md:text-sm text-muted-foreground mt-1",
                        children: "Rating Promedio"
                    })]
                }), p.jsx(Lo, {
                    end: 8,
                    suffix: "+",
                    label: "Años de Experiencia"
                })]
            })
        })]
    })
})
  , Jg = ({title: e, subtitle: t}) => p.jsxs("div", {
    className: "glass-card-hover overflow-hidden group cursor-pointer",
    children: [p.jsxs("div", {
        className: "relative aspect-video bg-secondary/30 flex items-center justify-center",
        children: [p.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
        }), p.jsx("div", {
            className: "relative w-20 h-20 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 gold-glow",
            children: p.jsx(J0, {
                className: "h-8 w-8 text-primary-foreground ml-1"
            })
        })]
    }), p.jsxs("div", {
        className: "p-6",
        children: [p.jsx("h3", {
            className: "text-lg font-display font-semibold text-foreground mb-1",
            children: e
        }), p.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: t
        })]
    })]
})
  , MD = () => p.jsx("section", {
    className: "py-24 md:py-32 section-gradient",
    children: p.jsxs("div", {
        className: "container",
        children: [p.jsx(Re, {
            className: "text-center mb-12",
            children: p.jsxs("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: ["Conoce el ", p.jsx("span", {
                    className: "gold-text",
                    children: "Proceso"
                })]
            })
        }), p.jsxs("div", {
            className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto",
            children: [p.jsx(Re, {
                children: p.jsx(Jg, {
                    title: "Mensaje del Fundador",
                    subtitle: "Emmanuel comparte su historia y visión"
                })
            }), p.jsx(Re, {
                delay: .15,
                children: p.jsx(Jg, {
                    title: "Cómo Funciona el Proceso",
                    subtitle: "Paso a paso de nuestra metodología"
                })
            })]
        })]
    })
});
var Ul = "Collapsible"
  , [DD,H1] = Ys(Ul)
  , [LD,Sh] = DD(Ul)
  , K1 = S.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, open: r, defaultOpen: s, disabled: o, onOpenChange: i, ...a} = e
      , [l,u] = El({
        prop: r,
        defaultProp: s ?? !1,
        onChange: i,
        caller: Ul
    });
    return p.jsx(LD, {
        scope: n,
        disabled: o,
        contentId: cx(),
        open: l,
        onOpenToggle: S.useCallback( () => u(c => !c), [u]),
        children: p.jsx(Pe.div, {
            "data-state": bh(l),
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: t
        })
    })
}
);
K1.displayName = Ul;
var G1 = "CollapsibleTrigger"
  , Y1 = S.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, ...r} = e
      , s = Sh(G1, n);
    return p.jsx(Pe.button, {
        type: "button",
        "aria-controls": s.contentId,
        "aria-expanded": s.open || !1,
        "data-state": bh(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...r,
        ref: t,
        onClick: xe(e.onClick, s.onOpenToggle)
    })
}
);
Y1.displayName = G1;
var Ch = "CollapsibleContent"
  , Q1 = S.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , s = Sh(Ch, e.__scopeCollapsible);
    return p.jsx(bl, {
        present: n || s.open,
        children: ({present: o}) => p.jsx(OD, {
            ...r,
            ref: t,
            present: o
        })
    })
}
);
Q1.displayName = Ch;
var OD = S.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, present: r, children: s, ...o} = e
      , i = Sh(Ch, n)
      , [a,l] = S.useState(r)
      , u = S.useRef(null)
      , c = ct(t, u)
      , d = S.useRef(0)
      , f = d.current
      , h = S.useRef(0)
      , x = h.current
      , y = i.open || a
      , w = S.useRef(y)
      , g = S.useRef(void 0);
    return S.useEffect( () => {
        const m = requestAnimationFrame( () => w.current = !1);
        return () => cancelAnimationFrame(m)
    }
    , []),
    nn( () => {
        const m = u.current;
        if (m) {
            g.current = g.current || {
                transitionDuration: m.style.transitionDuration,
                animationName: m.style.animationName
            },
            m.style.transitionDuration = "0s",
            m.style.animationName = "none";
            const v = m.getBoundingClientRect();
            d.current = v.height,
            h.current = v.width,
            w.current || (m.style.transitionDuration = g.current.transitionDuration,
            m.style.animationName = g.current.animationName),
            l(r)
        }
    }
    , [i.open, r]),
    p.jsx(Pe.div, {
        "data-state": bh(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        id: i.contentId,
        hidden: !y,
        ...o,
        ref: c,
        style: {
            "--radix-collapsible-content-height": f ? `${f}px` : void 0,
            "--radix-collapsible-content-width": x ? `${x}px` : void 0,
            ...e.style
        },
        children: y && s
    })
}
);
function bh(e) {
    return e ? "open" : "closed"
}
var ID = K1
  , FD = Y1
  , _D = Q1
  , VD = S.createContext(void 0);
function zD(e) {
    const t = S.useContext(VD);
    return e || t || "ltr"
}
var Wt = "Accordion"
  , $D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Eh,BD,UD] = T0(Wt)
  , [Wl,xL] = Ys(Wt, [UD, H1])
  , Th = H1()
  , q1 = M.forwardRef( (e, t) => {
    const {type: n, ...r} = e
      , s = r
      , o = r;
    return p.jsx(Eh.Provider, {
        scope: e.__scopeAccordion,
        children: n === "multiple" ? p.jsx(GD, {
            ...o,
            ref: t
        }) : p.jsx(KD, {
            ...s,
            ref: t
        })
    })
}
);
q1.displayName = Wt;
var [X1,WD] = Wl(Wt)
  , [Z1,HD] = Wl(Wt, {
    collapsible: !1
})
  , KD = M.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: s= () => {}
    , collapsible: o=!1, ...i} = e
      , [a,l] = El({
        prop: n,
        defaultProp: r ?? "",
        onChange: s,
        caller: Wt
    });
    return p.jsx(X1, {
        scope: e.__scopeAccordion,
        value: M.useMemo( () => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: M.useCallback( () => o && l(""), [o, l]),
        children: p.jsx(Z1, {
            scope: e.__scopeAccordion,
            collapsible: o,
            children: p.jsx(J1, {
                ...i,
                ref: t
            })
        })
    })
}
)
  , GD = M.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: s= () => {}
    , ...o} = e
      , [i,a] = El({
        prop: n,
        defaultProp: r ?? [],
        onChange: s,
        caller: Wt
    })
      , l = M.useCallback(c => a( (d=[]) => [...d, c]), [a])
      , u = M.useCallback(c => a( (d=[]) => d.filter(f => f !== c)), [a]);
    return p.jsx(X1, {
        scope: e.__scopeAccordion,
        value: i,
        onItemOpen: l,
        onItemClose: u,
        children: p.jsx(Z1, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: p.jsx(J1, {
                ...o,
                ref: t
            })
        })
    })
}
)
  , [YD,Hl] = Wl(Wt)
  , J1 = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, disabled: r, dir: s, orientation: o="vertical", ...i} = e
      , a = M.useRef(null)
      , l = ct(a, t)
      , u = BD(n)
      , d = zD(s) === "ltr"
      , f = xe(e.onKeyDown, h => {
        var P;
        if (!$D.includes(h.key))
            return;
        const x = h.target
          , y = u().filter(R => {
            var j;
            return !((j = R.ref.current) != null && j.disabled)
        }
        )
          , w = y.findIndex(R => R.ref.current === x)
          , g = y.length;
        if (w === -1)
            return;
        h.preventDefault();
        let m = w;
        const v = 0
          , C = g - 1
          , b = () => {
            m = w + 1,
            m > C && (m = v)
        }
          , E = () => {
            m = w - 1,
            m < v && (m = C)
        }
        ;
        switch (h.key) {
        case "Home":
            m = v;
            break;
        case "End":
            m = C;
            break;
        case "ArrowRight":
            o === "horizontal" && (d ? b() : E());
            break;
        case "ArrowDown":
            o === "vertical" && b();
            break;
        case "ArrowLeft":
            o === "horizontal" && (d ? E() : b());
            break;
        case "ArrowUp":
            o === "vertical" && E();
            break
        }
        const T = m % g;
        (P = y[T].ref.current) == null || P.focus()
    }
    );
    return p.jsx(YD, {
        scope: n,
        disabled: r,
        direction: s,
        orientation: o,
        children: p.jsx(Eh.Slot, {
            scope: n,
            children: p.jsx(Pe.div, {
                ...i,
                "data-orientation": o,
                ref: l,
                onKeyDown: r ? void 0 : f
            })
        })
    })
}
)
  , il = "AccordionItem"
  , [QD,Ph] = Wl(il)
  , eS = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, value: r, ...s} = e
      , o = Hl(il, n)
      , i = WD(il, n)
      , a = Th(n)
      , l = cx()
      , u = r && i.value.includes(r) || !1
      , c = o.disabled || e.disabled;
    return p.jsx(QD, {
        scope: n,
        open: u,
        disabled: c,
        triggerId: l,
        children: p.jsx(ID, {
            "data-orientation": o.orientation,
            "data-state": iS(u),
            ...a,
            ...s,
            ref: t,
            disabled: c,
            open: u,
            onOpenChange: d => {
                d ? i.onItemOpen(r) : i.onItemClose(r)
            }
        })
    })
}
);
eS.displayName = il;
var tS = "AccordionHeader"
  , nS = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , s = Hl(Wt, n)
      , o = Ph(tS, n);
    return p.jsx(Pe.h3, {
        "data-orientation": s.orientation,
        "data-state": iS(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
nS.displayName = tS;
var Nd = "AccordionTrigger"
  , rS = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , s = Hl(Wt, n)
      , o = Ph(Nd, n)
      , i = HD(Nd, n)
      , a = Th(n);
    return p.jsx(Eh.ItemSlot, {
        scope: n,
        children: p.jsx(FD, {
            "aria-disabled": o.open && !i.collapsible || void 0,
            "data-orientation": s.orientation,
            id: o.triggerId,
            ...a,
            ...r,
            ref: t
        })
    })
}
);
rS.displayName = Nd;
var sS = "AccordionContent"
  , oS = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , s = Hl(Wt, n)
      , o = Ph(sS, n)
      , i = Th(n);
    return p.jsx(_D, {
        role: "region",
        "aria-labelledby": o.triggerId,
        "data-orientation": s.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
oS.displayName = sS;
function iS(e) {
    return e ? "open" : "closed"
}
var qD = q1
  , XD = eS
  , ZD = nS
  , aS = rS
  , lS = oS;
const JD = qD
  , uS = S.forwardRef( ({className: e, ...t}, n) => p.jsx(XD, {
    ref: n,
    className: sn("border-b", e),
    ...t
}));
uS.displayName = "AccordionItem";
const cS = S.forwardRef( ({className: e, children: t, ...n}, r) => p.jsx(ZD, {
    className: "flex",
    children: p.jsxs(aS, {
        ref: r,
        className: sn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, p.jsx(qE, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
cS.displayName = aS.displayName;
const dS = S.forwardRef( ({className: e, children: t, ...n}, r) => p.jsx(lS, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: p.jsx("div", {
        className: sn("pb-4 pt-0", e),
        children: t
    })
}));
dS.displayName = lS.displayName;
const eL = [{
    q: "¿Esto es legal?",
    a: "Absolutamente. Nuestro trabajo se basa en leyes federales como el Fair Credit Reporting Act (FCRA), Fair Debt Collection Practices Act (FDCPA) y el Equal Credit Opportunity Act (ECOA). Cada acción que tomamos tiene respaldo legal verificable."
}, {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Los primeros cambios pueden verse en 30-45 días. Sin embargo, una transformación completa de perfil financiero toma entre 90 y 180 días dependiendo de la complejidad de cada caso."
}, {
    q: "¿Necesito tener mal crédito para trabajar con ustedes?",
    a: "No. Trabajamos con clientes que tienen desde scores bajos hasta excelentes. La optimización de perfil financiero beneficia a cualquiera que quiera maximizar su acceso a capital y mejores condiciones."
}, {
    q: "¿Ofrecen garantía?",
    a: "Garantizamos que cada estrategia se ejecuta con total cumplimiento legal y profesionalismo. Los resultados varían según cada caso, pero nuestra tasa de éxito del 95% habla por sí misma."
}, {
    q: "¿En qué se diferencian de una empresa de reparación de crédito?",
    a: "No somos reparadores de crédito. Somos estrategas financieros. Mientras otros envían disputas genéricas, nosotros diseñamos perfiles financieros completos con fundamento legal, estructura de funding y plan de crecimiento."
}]
  , tL = () => p.jsx("section", {
    className: "py-24 md:py-32",
    children: p.jsxs("div", {
        className: "container max-w-3xl",
        children: [p.jsxs(Re, {
            className: "text-center mb-12",
            children: [p.jsxs("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: ["Preguntas ", p.jsx("span", {
                    className: "gold-text",
                    children: "Frecuentes"
                })]
            }), p.jsx("p", {
                className: "text-muted-foreground",
                children: "Resolvemos tus dudas antes de que las tengas."
            })]
        }), p.jsx(Re, {
            delay: .1,
            children: p.jsx(JD, {
                type: "single",
                collapsible: !0,
                className: "space-y-3",
                children: eL.map( (e, t) => p.jsxs(uS, {
                    value: `faq-${t}`,
                    className: "glass-card px-6 border-border/50 rounded-xl overflow-hidden",
                    children: [p.jsx(cS, {
                        className: "text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline",
                        children: e.q
                    }), p.jsx(dS, {
                        className: "text-muted-foreground leading-relaxed pb-5",
                        children: e.a
                    })]
                }, t))
            })
        })]
    })
})
  , nL = ["Optimización de Crédito", "Funding para Negocio", "Primera Vivienda", "Optimización Express", "Consulta General"]
  , rL = () => {
    const [e,t] = S.useState({
        nombre: "",
        correo: "",
        telefono: "",
        servicio: ""
    })
      , n = r => {
        r.preventDefault();
        const s = `Hola, soy ${e.nombre}. Me interesa: ${e.servicio}. Mi correo: ${e.correo}, Tel: ${e.telefono}`;
        window.open(`https://wa.me/1234567890?text=${encodeURIComponent(s)}`, "_blank")
    }
    ;
    return p.jsxs("section", {
        id: "cta",
        className: "py-24 md:py-32 relative",
        children: [p.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"
        }), p.jsxs("div", {
            className: "container relative z-10 max-w-4xl",
            children: [p.jsxs(Re, {
                className: "text-center mb-12",
                children: [p.jsxs("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-balance",
                    children: ["El capital que necesitas está a una", " ", p.jsx("span", {
                        className: "gold-text",
                        children: "auditoría de distancia."
                    })]
                }), p.jsx("p", {
                    className: "text-muted-foreground text-lg max-w-xl mx-auto",
                    children: "Agenda tu evaluación estratégica gratuita y descubre cómo transformar tu perfil financiero en 90 días."
                })]
            }), p.jsx(Re, {
                delay: .15,
                children: p.jsxs("form", {
                    onSubmit: n,
                    className: "glass-card p-8 md:p-10 max-w-lg mx-auto",
                    children: [p.jsxs("div", {
                        className: "space-y-4 mb-6",
                        children: [p.jsx("input", {
                            type: "text",
                            placeholder: "Nombre completo",
                            required: !0,
                            maxLength: 100,
                            value: e.nombre,
                            onChange: r => t({
                                ...e,
                                nombre: r.target.value
                            }),
                            className: "w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        }), p.jsx("input", {
                            type: "email",
                            placeholder: "Correo electrónico",
                            required: !0,
                            maxLength: 255,
                            value: e.correo,
                            onChange: r => t({
                                ...e,
                                correo: r.target.value
                            }),
                            className: "w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        }), p.jsx("input", {
                            type: "tel",
                            placeholder: "Teléfono",
                            required: !0,
                            maxLength: 20,
                            value: e.telefono,
                            onChange: r => t({
                                ...e,
                                telefono: r.target.value
                            }),
                            className: "w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        }), p.jsxs("select", {
                            required: !0,
                            value: e.servicio,
                            onChange: r => t({
                                ...e,
                                servicio: r.target.value
                            }),
                            className: "w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors appearance-none",
                            children: [p.jsx("option", {
                                value: "",
                                disabled: !0,
                                children: "Selecciona un servicio"
                            }), nL.map(r => p.jsx("option", {
                                value: r,
                                children: r
                            }, r))]
                        })]
                    }), p.jsxs("button", {
                        type: "submit",
                        className: "w-full gold-gradient text-primary-foreground font-bold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] gold-glow flex items-center justify-center gap-2",
                        children: ["Agendar mi Evaluación Estratégica", p.jsx(Rf, {
                            className: "h-5 w-5"
                        })]
                    }), p.jsxs("div", {
                        className: "mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground",
                        children: [p.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [p.jsx(eT, {
                                className: "h-3 w-3"
                            }), " Información segura"]
                        }), p.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [p.jsx($r, {
                                className: "h-3 w-3"
                            }), " Sin compromiso"]
                        })]
                    }), p.jsx("p", {
                        className: "text-center text-xs text-muted-foreground/60 mt-3",
                        children: "⚡ Cupos limitados por semana — Tu información está protegida."
                    })]
                })
            })]
        })]
    })
}
  , sL = () => p.jsx("footer", {
    className: "border-t border-border/50 py-12",
    children: p.jsxs("div", {
        className: "container",
        children: [p.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8 mb-10",
            children: [p.jsxs("div", {
                className: "md:col-span-1",
                children: [p.jsxs("h3", {
                    className: "font-display font-bold text-xl text-foreground mb-3",
                    children: [p.jsx("span", {
                        className: "gold-text",
                        children: "EAI"
                    }), " Group"]
                }), p.jsx("p", {
                    className: "text-sm text-muted-foreground leading-relaxed",
                    children: "Estrategia financiera legal para la comunidad latina en Estados Unidos."
                }), p.jsxs("div", {
                    className: "flex items-center gap-2 mt-3",
                    children: [p.jsx($r, {
                        className: "h-4 w-4 text-primary"
                    }), p.jsx("span", {
                        className: "text-xs text-primary",
                        children: "FCRA Certified"
                    })]
                })]
            }), p.jsxs("div", {
                children: [p.jsx("h4", {
                    className: "text-sm font-semibold text-foreground mb-3",
                    children: "Servicios"
                }), p.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [p.jsx("li", {
                        children: "Optimización de Crédito"
                    }), p.jsx("li", {
                        children: "Funding Empresarial"
                    }), p.jsx("li", {
                        children: "Primera Vivienda"
                    }), p.jsx("li", {
                        children: "Optimización Express"
                    })]
                })]
            }), p.jsxs("div", {
                children: [p.jsx("h4", {
                    className: "text-sm font-semibold text-foreground mb-3",
                    children: "Recursos"
                }), p.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [p.jsx("li", {
                        children: "Blog"
                    }), p.jsx("li", {
                        children: "Guía FCRA"
                    }), p.jsx("li", {
                        children: "Testimonios"
                    }), p.jsx("li", {
                        children: "Preguntas Frecuentes"
                    })]
                })]
            }), p.jsxs("div", {
                children: [p.jsx("h4", {
                    className: "text-sm font-semibold text-foreground mb-3",
                    children: "Legal"
                }), p.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [p.jsx("li", {
                        children: "Política de Privacidad"
                    }), p.jsx("li", {
                        children: "Términos de Servicio"
                    }), p.jsx("li", {
                        children: "Divulgaciones"
                    })]
                })]
            })]
        }), p.jsxs("div", {
            className: "border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4",
            children: [p.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "© 2024 EAI Group. Todos los derechos reservados."
            }), p.jsx("p", {
                className: "text-xs text-muted-foreground/60 max-w-md text-center md:text-right",
                children: "EAI Group no es un despacho legal ni una agencia de reparación de crédito. Ofrecemos servicios de asesoría y educación financiera estratégica."
            })]
        })]
    })
})
  , oL = () => p.jsxs("a", {
    href: "https://wa.me/1234567890?text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20EAI%20Group",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 gold-gradient rounded-full p-4 shadow-lg animate-pulse-gold transition-transform duration-300 hover:scale-110",
    "aria-label": "Contactar por WhatsApp",
    children: [p.jsx(nT, {
        className: "h-6 w-6 text-primary-foreground"
    }), p.jsx("span", {
        className: "hidden sm:inline text-sm font-semibold text-primary-foreground pr-1",
        children: "WhatsApp"
    })]
})
  , iL = () => {
    const {scrollYProgress: e} = vD();
    return p.jsx(Yn.div, {
        className: "fixed top-0 left-0 right-0 h-[3px] gold-gradient z-50 origin-left",
        style: {
            scaleX: e
        }
    })
}
  , aL = () => p.jsxs("main", {
    className: "min-h-screen bg-background overflow-x-hidden",
    children: [p.jsx(CD, {}), p.jsx(iL, {}), p.jsx("div", {
        id: "hero",
        children: p.jsx(ED, {})
    }), p.jsx("div", {
        id: "problema",
        children: p.jsx(PD, {})
    }), p.jsx("div", {
        id: "metodologia",
        children: p.jsx(kD, {})
    }), p.jsx("div", {
        id: "soluciones",
        children: p.jsx(ND, {})
    }), p.jsx("div", {
        id: "autoridad",
        children: p.jsx(jD, {})
    }), p.jsx(MD, {}), p.jsx("div", {
        id: "faq",
        children: p.jsx(tL, {})
    }), p.jsx("div", {
        id: "cta",
        children: p.jsx(rL, {})
    }), p.jsx(sL, {}), p.jsx(oL, {})]
})
  , lL = () => {
    const e = Jx();
    return S.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    p.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: p.jsxs("div", {
            className: "text-center",
            children: [p.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), p.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), p.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , uL = new S2
  , cL = () => p.jsx(b2, {
    client: uL,
    children: p.jsxs(Xk, {
        children: [p.jsx(HT, {}), p.jsx(bP, {}), p.jsx(lA, {
            children: p.jsxs(oA, {
                children: [p.jsx(nd, {
                    path: "/",
                    element: p.jsx(aL, {})
                }), p.jsx(nd, {
                    path: "*",
                    element: p.jsx(lL, {})
                })]
            })
        })]
    })
});
C0(document.getElementById("root")).render(p.jsx(cL, {}));
