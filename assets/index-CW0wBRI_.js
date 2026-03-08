var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const d = document.createElement("link").relList;
    if (d && d.supports && d.supports("modulepreload")) return;
    for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) r(_);
    new MutationObserver((_) => {
      for (const j of _) if (j.type === "childList") for (const U of j.addedNodes) U.tagName === "LINK" && U.rel === "modulepreload" && r(U);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function g(_) {
      const j = {};
      return _.integrity && (j.integrity = _.integrity), _.referrerPolicy && (j.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? j.credentials = "include" : _.crossOrigin === "anonymous" ? j.credentials = "omit" : j.credentials = "same-origin", j;
    }
    function r(_) {
      if (_.ep) return;
      _.ep = true;
      const j = g(_);
      fetch(_.href, j);
    }
  })();
  var vf = {
    exports: {}
  }, zu = {};
  var U0;
  function Cm() {
    if (U0) return zu;
    U0 = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
    function g(r, _, j) {
      var U = null;
      if (j !== void 0 && (U = "" + j), _.key !== void 0 && (U = "" + _.key), "key" in _) {
        j = {};
        for (var C in _) C !== "key" && (j[C] = _[C]);
      } else j = _;
      return _ = j.ref, {
        $$typeof: f,
        type: r,
        key: U,
        ref: _ !== void 0 ? _ : null,
        props: j
      };
    }
    return zu.Fragment = d, zu.jsx = g, zu.jsxs = g, zu;
  }
  var R0;
  function Hm() {
    return R0 || (R0 = 1, vf.exports = Cm()), vf.exports;
  }
  var S = Hm(), bf = {
    exports: {}
  }, w = {};
  var C0;
  function Bm() {
    if (C0) return w;
    C0 = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), U = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), D = Symbol.iterator;
    function V(y) {
      return y === null || typeof y != "object" ? null : (y = D && y[D] || y["@@iterator"], typeof y == "function" ? y : null);
    }
    var k = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, fl = Object.assign, Hl = {};
    function El(y, O, B) {
      this.props = y, this.context = O, this.refs = Hl, this.updater = B || k;
    }
    El.prototype.isReactComponent = {}, El.prototype.setState = function(y, O) {
      if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, O, "setState");
    }, El.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    function Bl() {
    }
    Bl.prototype = El.prototype;
    function bl(y, O, B) {
      this.props = y, this.context = O, this.refs = Hl, this.updater = B || k;
    }
    var Al = bl.prototype = new Bl();
    Al.constructor = bl, fl(Al, El.prototype), Al.isPureReactComponent = true;
    var Ql = Array.isArray;
    function K() {
    }
    var X = {
      H: null,
      A: null,
      T: null,
      S: null
    }, I = Object.prototype.hasOwnProperty;
    function ql(y, O, B) {
      var Y = B.ref;
      return {
        $$typeof: f,
        type: y,
        key: O,
        ref: Y !== void 0 ? Y : null,
        props: B
      };
    }
    function Jl(y, O) {
      return ql(y.type, O, y.props);
    }
    function mt(y) {
      return typeof y == "object" && y !== null && y.$$typeof === f;
    }
    function Ml(y) {
      var O = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + y.replace(/[=:]/g, function(B) {
        return O[B];
      });
    }
    var _t = /\/+/g;
    function ht(y, O) {
      return typeof y == "object" && y !== null && y.key != null ? Ml("" + y.key) : O.toString(36);
    }
    function Wl(y) {
      switch (y.status) {
        case "fulfilled":
          return y.value;
        case "rejected":
          throw y.reason;
        default:
          switch (typeof y.status == "string" ? y.then(K, K) : (y.status = "pending", y.then(function(O) {
            y.status === "pending" && (y.status = "fulfilled", y.value = O);
          }, function(O) {
            y.status === "pending" && (y.status = "rejected", y.reason = O);
          })), y.status) {
            case "fulfilled":
              return y.value;
            case "rejected":
              throw y.reason;
          }
      }
      throw y;
    }
    function T(y, O, B, Y, $) {
      var P = typeof y;
      (P === "undefined" || P === "boolean") && (y = null);
      var sl = false;
      if (y === null) sl = true;
      else switch (P) {
        case "bigint":
        case "string":
        case "number":
          sl = true;
          break;
        case "object":
          switch (y.$$typeof) {
            case f:
            case d:
              sl = true;
              break;
            case R:
              return sl = y._init, T(sl(y._payload), O, B, Y, $);
          }
      }
      if (sl) return $ = $(y), sl = Y === "" ? "." + ht(y, 0) : Y, Ql($) ? (B = "", sl != null && (B = sl.replace(_t, "$&/") + "/"), T($, O, B, "", function(Da) {
        return Da;
      })) : $ != null && (mt($) && ($ = Jl($, B + ($.key == null || y && y.key === $.key ? "" : ("" + $.key).replace(_t, "$&/") + "/") + sl)), O.push($)), 1;
      sl = 0;
      var kl = Y === "" ? "." : Y + ":";
      if (Ql(y)) for (var _l = 0; _l < y.length; _l++) Y = y[_l], P = kl + ht(Y, _l), sl += T(Y, O, B, P, $);
      else if (_l = V(y), typeof _l == "function") for (y = _l.call(y), _l = 0; !(Y = y.next()).done; ) Y = Y.value, P = kl + ht(Y, _l++), sl += T(Y, O, B, P, $);
      else if (P === "object") {
        if (typeof y.then == "function") return T(Wl(y), O, B, Y, $);
        throw O = String(y), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
      }
      return sl;
    }
    function H(y, O, B) {
      if (y == null) return y;
      var Y = [], $ = 0;
      return T(y, Y, "", "", function(P) {
        return O.call(B, P, $++);
      }), Y;
    }
    function J(y) {
      if (y._status === -1) {
        var O = y._result;
        O = O(), O.then(function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = B);
        }, function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = B);
        }), y._status === -1 && (y._status = 0, y._result = O);
      }
      if (y._status === 1) return y._result.default;
      throw y._result;
    }
    var dl = typeof reportError == "function" ? reportError : function(y) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var O = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
          error: y
        });
        if (!window.dispatchEvent(O)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", y);
        return;
      }
      console.error(y);
    }, gl = {
      map: H,
      forEach: function(y, O, B) {
        H(y, function() {
          O.apply(this, arguments);
        }, B);
      },
      count: function(y) {
        var O = 0;
        return H(y, function() {
          O++;
        }), O;
      },
      toArray: function(y) {
        return H(y, function(O) {
          return O;
        }) || [];
      },
      only: function(y) {
        if (!mt(y)) throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
    };
    return w.Activity = M, w.Children = gl, w.Component = El, w.Fragment = g, w.Profiler = _, w.PureComponent = bl, w.StrictMode = r, w.Suspense = E, w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, w.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(y) {
        return X.H.useMemoCache(y);
      }
    }, w.cache = function(y) {
      return function() {
        return y.apply(null, arguments);
      };
    }, w.cacheSignal = function() {
      return null;
    }, w.cloneElement = function(y, O, B) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var Y = fl({}, y.props), $ = y.key;
      if (O != null) for (P in O.key !== void 0 && ($ = "" + O.key), O) !I.call(O, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && O.ref === void 0 || (Y[P] = O[P]);
      var P = arguments.length - 2;
      if (P === 1) Y.children = B;
      else if (1 < P) {
        for (var sl = Array(P), kl = 0; kl < P; kl++) sl[kl] = arguments[kl + 2];
        Y.children = sl;
      }
      return ql(y.type, $, Y);
    }, w.createContext = function(y) {
      return y = {
        $$typeof: U,
        _currentValue: y,
        _currentValue2: y,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, y.Provider = y, y.Consumer = {
        $$typeof: j,
        _context: y
      }, y;
    }, w.createElement = function(y, O, B) {
      var Y, $ = {}, P = null;
      if (O != null) for (Y in O.key !== void 0 && (P = "" + O.key), O) I.call(O, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && ($[Y] = O[Y]);
      var sl = arguments.length - 2;
      if (sl === 1) $.children = B;
      else if (1 < sl) {
        for (var kl = Array(sl), _l = 0; _l < sl; _l++) kl[_l] = arguments[_l + 2];
        $.children = kl;
      }
      if (y && y.defaultProps) for (Y in sl = y.defaultProps, sl) $[Y] === void 0 && ($[Y] = sl[Y]);
      return ql(y, P, $);
    }, w.createRef = function() {
      return {
        current: null
      };
    }, w.forwardRef = function(y) {
      return {
        $$typeof: C,
        render: y
      };
    }, w.isValidElement = mt, w.lazy = function(y) {
      return {
        $$typeof: R,
        _payload: {
          _status: -1,
          _result: y
        },
        _init: J
      };
    }, w.memo = function(y, O) {
      return {
        $$typeof: h,
        type: y,
        compare: O === void 0 ? null : O
      };
    }, w.startTransition = function(y) {
      var O = X.T, B = {};
      X.T = B;
      try {
        var Y = y(), $ = X.S;
        $ !== null && $(B, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(K, dl);
      } catch (P) {
        dl(P);
      } finally {
        O !== null && B.types !== null && (O.types = B.types), X.T = O;
      }
    }, w.unstable_useCacheRefresh = function() {
      return X.H.useCacheRefresh();
    }, w.use = function(y) {
      return X.H.use(y);
    }, w.useActionState = function(y, O, B) {
      return X.H.useActionState(y, O, B);
    }, w.useCallback = function(y, O) {
      return X.H.useCallback(y, O);
    }, w.useContext = function(y) {
      return X.H.useContext(y);
    }, w.useDebugValue = function() {
    }, w.useDeferredValue = function(y, O) {
      return X.H.useDeferredValue(y, O);
    }, w.useEffect = function(y, O) {
      return X.H.useEffect(y, O);
    }, w.useEffectEvent = function(y) {
      return X.H.useEffectEvent(y);
    }, w.useId = function() {
      return X.H.useId();
    }, w.useImperativeHandle = function(y, O, B) {
      return X.H.useImperativeHandle(y, O, B);
    }, w.useInsertionEffect = function(y, O) {
      return X.H.useInsertionEffect(y, O);
    }, w.useLayoutEffect = function(y, O) {
      return X.H.useLayoutEffect(y, O);
    }, w.useMemo = function(y, O) {
      return X.H.useMemo(y, O);
    }, w.useOptimistic = function(y, O) {
      return X.H.useOptimistic(y, O);
    }, w.useReducer = function(y, O, B) {
      return X.H.useReducer(y, O, B);
    }, w.useRef = function(y) {
      return X.H.useRef(y);
    }, w.useState = function(y) {
      return X.H.useState(y);
    }, w.useSyncExternalStore = function(y, O, B) {
      return X.H.useSyncExternalStore(y, O, B);
    }, w.useTransition = function() {
      return X.H.useTransition();
    }, w.version = "19.2.4", w;
  }
  var H0;
  function Nf() {
    return H0 || (H0 = 1, bf.exports = Bm()), bf.exports;
  }
  var G = Nf(), Sf = {
    exports: {}
  }, Tu = {}, xf = {
    exports: {}
  }, pf = {};
  var B0;
  function qm() {
    return B0 || (B0 = 1, (function(f) {
      function d(T, H) {
        var J = T.length;
        T.push(H);
        l: for (; 0 < J; ) {
          var dl = J - 1 >>> 1, gl = T[dl];
          if (0 < _(gl, H)) T[dl] = H, T[J] = gl, J = dl;
          else break l;
        }
      }
      function g(T) {
        return T.length === 0 ? null : T[0];
      }
      function r(T) {
        if (T.length === 0) return null;
        var H = T[0], J = T.pop();
        if (J !== H) {
          T[0] = J;
          l: for (var dl = 0, gl = T.length, y = gl >>> 1; dl < y; ) {
            var O = 2 * (dl + 1) - 1, B = T[O], Y = O + 1, $ = T[Y];
            if (0 > _(B, J)) Y < gl && 0 > _($, B) ? (T[dl] = $, T[Y] = J, dl = Y) : (T[dl] = B, T[O] = J, dl = O);
            else if (Y < gl && 0 > _($, J)) T[dl] = $, T[Y] = J, dl = Y;
            else break l;
          }
        }
        return H;
      }
      function _(T, H) {
        var J = T.sortIndex - H.sortIndex;
        return J !== 0 ? J : T.id - H.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var j = performance;
        f.unstable_now = function() {
          return j.now();
        };
      } else {
        var U = Date, C = U.now();
        f.unstable_now = function() {
          return U.now() - C;
        };
      }
      var E = [], h = [], R = 1, M = null, D = 3, V = false, k = false, fl = false, Hl = false, El = typeof setTimeout == "function" ? setTimeout : null, Bl = typeof clearTimeout == "function" ? clearTimeout : null, bl = typeof setImmediate < "u" ? setImmediate : null;
      function Al(T) {
        for (var H = g(h); H !== null; ) {
          if (H.callback === null) r(h);
          else if (H.startTime <= T) r(h), H.sortIndex = H.expirationTime, d(E, H);
          else break;
          H = g(h);
        }
      }
      function Ql(T) {
        if (fl = false, Al(T), !k) if (g(E) !== null) k = true, K || (K = true, Ml());
        else {
          var H = g(h);
          H !== null && Wl(Ql, H.startTime - T);
        }
      }
      var K = false, X = -1, I = 5, ql = -1;
      function Jl() {
        return Hl ? true : !(f.unstable_now() - ql < I);
      }
      function mt() {
        if (Hl = false, K) {
          var T = f.unstable_now();
          ql = T;
          var H = true;
          try {
            l: {
              k = false, fl && (fl = false, Bl(X), X = -1), V = true;
              var J = D;
              try {
                t: {
                  for (Al(T), M = g(E); M !== null && !(M.expirationTime > T && Jl()); ) {
                    var dl = M.callback;
                    if (typeof dl == "function") {
                      M.callback = null, D = M.priorityLevel;
                      var gl = dl(M.expirationTime <= T);
                      if (T = f.unstable_now(), typeof gl == "function") {
                        M.callback = gl, Al(T), H = true;
                        break t;
                      }
                      M === g(E) && r(E), Al(T);
                    } else r(E);
                    M = g(E);
                  }
                  if (M !== null) H = true;
                  else {
                    var y = g(h);
                    y !== null && Wl(Ql, y.startTime - T), H = false;
                  }
                }
                break l;
              } finally {
                M = null, D = J, V = false;
              }
              H = void 0;
            }
          } finally {
            H ? Ml() : K = false;
          }
        }
      }
      var Ml;
      if (typeof bl == "function") Ml = function() {
        bl(mt);
      };
      else if (typeof MessageChannel < "u") {
        var _t = new MessageChannel(), ht = _t.port2;
        _t.port1.onmessage = mt, Ml = function() {
          ht.postMessage(null);
        };
      } else Ml = function() {
        El(mt, 0);
      };
      function Wl(T, H) {
        X = El(function() {
          T(f.unstable_now());
        }, H);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
        T.callback = null;
      }, f.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < T ? Math.floor(1e3 / T) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return D;
      }, f.unstable_next = function(T) {
        switch (D) {
          case 1:
          case 2:
          case 3:
            var H = 3;
            break;
          default:
            H = D;
        }
        var J = D;
        D = H;
        try {
          return T();
        } finally {
          D = J;
        }
      }, f.unstable_requestPaint = function() {
        Hl = true;
      }, f.unstable_runWithPriority = function(T, H) {
        switch (T) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            T = 3;
        }
        var J = D;
        D = T;
        try {
          return H();
        } finally {
          D = J;
        }
      }, f.unstable_scheduleCallback = function(T, H, J) {
        var dl = f.unstable_now();
        switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? dl + J : dl) : J = dl, T) {
          case 1:
            var gl = -1;
            break;
          case 2:
            gl = 250;
            break;
          case 5:
            gl = 1073741823;
            break;
          case 4:
            gl = 1e4;
            break;
          default:
            gl = 5e3;
        }
        return gl = J + gl, T = {
          id: R++,
          callback: H,
          priorityLevel: T,
          startTime: J,
          expirationTime: gl,
          sortIndex: -1
        }, J > dl ? (T.sortIndex = J, d(h, T), g(E) === null && T === g(h) && (fl ? (Bl(X), X = -1) : fl = true, Wl(Ql, J - dl))) : (T.sortIndex = gl, d(E, T), k || V || (k = true, K || (K = true, Ml()))), T;
      }, f.unstable_shouldYield = Jl, f.unstable_wrapCallback = function(T) {
        var H = D;
        return function() {
          var J = D;
          D = H;
          try {
            return T.apply(this, arguments);
          } finally {
            D = J;
          }
        };
      };
    })(pf)), pf;
  }
  var q0;
  function Ym() {
    return q0 || (q0 = 1, xf.exports = qm()), xf.exports;
  }
  var Ef = {
    exports: {}
  }, wl = {};
  var Y0;
  function Gm() {
    if (Y0) return wl;
    Y0 = 1;
    var f = Nf();
    function d(E) {
      var h = "https://react.dev/errors/" + E;
      if (1 < arguments.length) {
        h += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var R = 2; R < arguments.length; R++) h += "&args[]=" + encodeURIComponent(arguments[R]);
      }
      return "Minified React error #" + E + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function g() {
    }
    var r = {
      d: {
        f: g,
        r: function() {
          throw Error(d(522));
        },
        D: g,
        C: g,
        L: g,
        m: g,
        X: g,
        S: g,
        M: g
      },
      p: 0,
      findDOMNode: null
    }, _ = /* @__PURE__ */ Symbol.for("react.portal");
    function j(E, h, R) {
      var M = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: _,
        key: M == null ? null : "" + M,
        children: E,
        containerInfo: h,
        implementation: R
      };
    }
    var U = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function C(E, h) {
      if (E === "font") return "";
      if (typeof h == "string") return h === "use-credentials" ? h : "";
    }
    return wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, wl.createPortal = function(E, h) {
      var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(d(299));
      return j(E, h, null, R);
    }, wl.flushSync = function(E) {
      var h = U.T, R = r.p;
      try {
        if (U.T = null, r.p = 2, E) return E();
      } finally {
        U.T = h, r.p = R, r.d.f();
      }
    }, wl.preconnect = function(E, h) {
      typeof E == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(E, h));
    }, wl.prefetchDNS = function(E) {
      typeof E == "string" && r.d.D(E);
    }, wl.preinit = function(E, h) {
      if (typeof E == "string" && h && typeof h.as == "string") {
        var R = h.as, M = C(R, h.crossOrigin), D = typeof h.integrity == "string" ? h.integrity : void 0, V = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        R === "style" ? r.d.S(E, typeof h.precedence == "string" ? h.precedence : void 0, {
          crossOrigin: M,
          integrity: D,
          fetchPriority: V
        }) : R === "script" && r.d.X(E, {
          crossOrigin: M,
          integrity: D,
          fetchPriority: V,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0
        });
      }
    }, wl.preinitModule = function(E, h) {
      if (typeof E == "string") if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var R = C(h.as, h.crossOrigin);
          r.d.M(E, {
            crossOrigin: R,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(E);
    }, wl.preload = function(E, h) {
      if (typeof E == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var R = h.as, M = C(R, h.crossOrigin);
        r.d.L(E, R, {
          crossOrigin: M,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0
        });
      }
    }, wl.preloadModule = function(E, h) {
      if (typeof E == "string") if (h) {
        var R = C(h.as, h.crossOrigin);
        r.d.m(E, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: R,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(E);
    }, wl.requestFormReset = function(E) {
      r.d.r(E);
    }, wl.unstable_batchedUpdates = function(E, h) {
      return E(h);
    }, wl.useFormState = function(E, h, R) {
      return U.H.useFormState(E, h, R);
    }, wl.useFormStatus = function() {
      return U.H.useHostTransitionStatus();
    }, wl.version = "19.2.4", wl;
  }
  var G0;
  function $0() {
    if (G0) return Ef.exports;
    G0 = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
    }
    return f(), Ef.exports = Gm(), Ef.exports;
  }
  var Q0;
  function Qm() {
    if (Q0) return Tu;
    Q0 = 1;
    var f = Ym(), d = Nf(), g = $0();
    function r(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function _(l) {
      return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
    }
    function j(l) {
      var t = l, e = l;
      if (l.alternate) for (; t.return; ) t = t.return;
      else {
        l = t;
        do
          t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
        while (l);
      }
      return t.tag === 3 ? e : null;
    }
    function U(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function C(l) {
      if (l.tag === 31) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function E(l) {
      if (j(l) !== l) throw Error(r(188));
    }
    function h(l) {
      var t = l.alternate;
      if (!t) {
        if (t = j(l), t === null) throw Error(r(188));
        return t !== l ? null : l;
      }
      for (var e = l, a = t; ; ) {
        var u = e.return;
        if (u === null) break;
        var n = u.alternate;
        if (n === null) {
          if (a = u.return, a !== null) {
            e = a;
            continue;
          }
          break;
        }
        if (u.child === n.child) {
          for (n = u.child; n; ) {
            if (n === e) return E(u), l;
            if (n === a) return E(u), t;
            n = n.sibling;
          }
          throw Error(r(188));
        }
        if (e.return !== a.return) e = u, a = n;
        else {
          for (var c = false, i = u.child; i; ) {
            if (i === e) {
              c = true, e = u, a = n;
              break;
            }
            if (i === a) {
              c = true, a = u, e = n;
              break;
            }
            i = i.sibling;
          }
          if (!c) {
            for (i = n.child; i; ) {
              if (i === e) {
                c = true, e = n, a = u;
                break;
              }
              if (i === a) {
                c = true, a = n, e = u;
                break;
              }
              i = i.sibling;
            }
            if (!c) throw Error(r(189));
          }
        }
        if (e.alternate !== a) throw Error(r(190));
      }
      if (e.tag !== 3) throw Error(r(188));
      return e.stateNode.current === e ? l : t;
    }
    function R(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (t = R(l), t !== null) return t;
        l = l.sibling;
      }
      return null;
    }
    var M = Object.assign, D = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.transitional.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), fl = /* @__PURE__ */ Symbol.for("react.fragment"), Hl = /* @__PURE__ */ Symbol.for("react.strict_mode"), El = /* @__PURE__ */ Symbol.for("react.profiler"), Bl = /* @__PURE__ */ Symbol.for("react.consumer"), bl = /* @__PURE__ */ Symbol.for("react.context"), Al = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ql = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), ql = /* @__PURE__ */ Symbol.for("react.activity"), Jl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), mt = Symbol.iterator;
    function Ml(l) {
      return l === null || typeof l != "object" ? null : (l = mt && l[mt] || l["@@iterator"], typeof l == "function" ? l : null);
    }
    var _t = /* @__PURE__ */ Symbol.for("react.client.reference");
    function ht(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === _t ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case fl:
          return "Fragment";
        case El:
          return "Profiler";
        case Hl:
          return "StrictMode";
        case Ql:
          return "Suspense";
        case K:
          return "SuspenseList";
        case ql:
          return "Activity";
      }
      if (typeof l == "object") switch (l.$$typeof) {
        case k:
          return "Portal";
        case bl:
          return l.displayName || "Context";
        case Bl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Al:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case X:
          return t = l.displayName || null, t !== null ? t : ht(l.type) || "Memo";
        case I:
          t = l._payload, l = l._init;
          try {
            return ht(l(t));
          } catch {
          }
      }
      return null;
    }
    var Wl = Array.isArray, T = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, dl = [], gl = -1;
    function y(l) {
      return {
        current: l
      };
    }
    function O(l) {
      0 > gl || (l.current = dl[gl], dl[gl] = null, gl--);
    }
    function B(l, t) {
      gl++, dl[gl] = l.current, l.current = t;
    }
    var Y = y(null), $ = y(null), P = y(null), sl = y(null);
    function kl(l, t) {
      switch (B(P, t), B($, l), B(Y, null), t.nodeType) {
        case 9:
        case 11:
          l = (l = t.documentElement) && (l = l.namespaceURI) ? t0(l) : 0;
          break;
        default:
          if (l = t.tagName, t = t.namespaceURI) t = t0(t), l = e0(t, l);
          else switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
      }
      O(Y), B(Y, l);
    }
    function _l() {
      O(Y), O($), O(P);
    }
    function Da(l) {
      l.memoizedState !== null && B(sl, l);
      var t = Y.current, e = e0(t, l.type);
      t !== e && (B($, l), B(Y, e));
    }
    function Nu(l) {
      $.current === l && (O(Y), O($)), sl.current === l && (O(sl), Su._currentValue = J);
    }
    var In, Df;
    function Ae(l) {
      if (In === void 0) try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        In = t && t[1] || "", Df = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + In + l + Df;
    }
    var Pn = false;
    function lc(l, t) {
      if (!l || Pn) return "";
      Pn = true;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var N = function() {
                  throw Error();
                };
                if (Object.defineProperty(N.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(N, []);
                  } catch (p) {
                    var x = p;
                  }
                  Reflect.construct(l, [], N);
                } else {
                  try {
                    N.call();
                  } catch (p) {
                    x = p;
                  }
                  l.call(N.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (p) {
                  x = p;
                }
                (N = l()) && typeof N.catch == "function" && N.catch(function() {
                });
              }
            } catch (p) {
              if (p && x && typeof p.stack == "string") return [
                p.stack,
                x.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var n = a.DetermineComponentFrameRoot(), c = n[0], i = n[1];
        if (c && i) {
          var s = c.split(`
`), b = i.split(`
`);
          for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; u < b.length && !b[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (a === s.length || u === b.length) for (a = s.length - 1, u = b.length - 1; 1 <= a && 0 <= u && s[a] !== b[u]; ) u--;
          for (; 1 <= a && 0 <= u; a--, u--) if (s[a] !== b[u]) {
            if (a !== 1 || u !== 1) do
              if (a--, u--, 0 > u || s[a] !== b[u]) {
                var z = `
` + s[a].replace(" at new ", " at ");
                return l.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", l.displayName)), z;
              }
            while (1 <= a && 0 <= u);
            break;
          }
        }
      } finally {
        Pn = false, Error.prepareStackTrace = e;
      }
      return (e = l ? l.displayName || l.name : "") ? Ae(e) : "";
    }
    function od(l, t) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return Ae(l.type);
        case 16:
          return Ae("Lazy");
        case 13:
          return l.child !== t && t !== null ? Ae("Suspense Fallback") : Ae("Suspense");
        case 19:
          return Ae("SuspenseList");
        case 0:
        case 15:
          return lc(l.type, false);
        case 11:
          return lc(l.type.render, false);
        case 1:
          return lc(l.type, true);
        case 31:
          return Ae("Activity");
        default:
          return "";
      }
    }
    function jf(l) {
      try {
        var t = "", e = null;
        do
          t += od(l, e), e = l, l = l.return;
        while (l);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var tc = Object.prototype.hasOwnProperty, ec = f.unstable_scheduleCallback, ac = f.unstable_cancelCallback, dd = f.unstable_shouldYield, yd = f.unstable_requestPaint, ut = f.unstable_now, md = f.unstable_getCurrentPriorityLevel, Uf = f.unstable_ImmediatePriority, Rf = f.unstable_UserBlockingPriority, Ou = f.unstable_NormalPriority, hd = f.unstable_LowPriority, Cf = f.unstable_IdlePriority, gd = f.log, vd = f.unstable_setDisableYieldValue, ja = null, nt = null;
    function It(l) {
      if (typeof gd == "function" && vd(l), nt && typeof nt.setStrictMode == "function") try {
        nt.setStrictMode(ja, l);
      } catch {
      }
    }
    var ct = Math.clz32 ? Math.clz32 : xd, bd = Math.log, Sd = Math.LN2;
    function xd(l) {
      return l >>>= 0, l === 0 ? 32 : 31 - (bd(l) / Sd | 0) | 0;
    }
    var Mu = 256, Du = 262144, ju = 4194304;
    function _e(l) {
      var t = l & 42;
      if (t !== 0) return t;
      switch (l & -l) {
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
          return 64;
        case 128:
          return 128;
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
          return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return l & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return l;
      }
    }
    function Uu(l, t, e) {
      var a = l.pendingLanes;
      if (a === 0) return 0;
      var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
      l = l.warmLanes;
      var i = a & 134217727;
      return i !== 0 ? (a = i & ~n, a !== 0 ? u = _e(a) : (c &= i, c !== 0 ? u = _e(c) : e || (e = i & ~l, e !== 0 && (u = _e(e))))) : (i = a & ~n, i !== 0 ? u = _e(i) : c !== 0 ? u = _e(c) : e || (e = a & ~l, e !== 0 && (u = _e(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
    }
    function Ua(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function pd(l, t) {
      switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Hf() {
      var l = ju;
      return ju <<= 1, (ju & 62914560) === 0 && (ju = 4194304), l;
    }
    function uc(l) {
      for (var t = [], e = 0; 31 > e; e++) t.push(l);
      return t;
    }
    function Ra(l, t) {
      l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
    }
    function Ed(l, t, e, a, u, n) {
      var c = l.pendingLanes;
      l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
      var i = l.entanglements, s = l.expirationTimes, b = l.hiddenUpdates;
      for (e = c & ~e; 0 < e; ) {
        var z = 31 - ct(e), N = 1 << z;
        i[z] = 0, s[z] = -1;
        var x = b[z];
        if (x !== null) for (b[z] = null, z = 0; z < x.length; z++) {
          var p = x[z];
          p !== null && (p.lane &= -536870913);
        }
        e &= ~N;
      }
      a !== 0 && Bf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
    }
    function Bf(l, t, e) {
      l.pendingLanes |= t, l.suspendedLanes &= ~t;
      var a = 31 - ct(t);
      l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
    }
    function qf(l, t) {
      var e = l.entangledLanes |= t;
      for (l = l.entanglements; e; ) {
        var a = 31 - ct(e), u = 1 << a;
        u & t | l[a] & t && (l[a] |= t), e &= ~u;
      }
    }
    function Yf(l, t) {
      var e = t & -t;
      return e = (e & 42) !== 0 ? 1 : nc(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
    }
    function nc(l) {
      switch (l) {
        case 2:
          l = 1;
          break;
        case 8:
          l = 4;
          break;
        case 32:
          l = 16;
          break;
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
          l = 128;
          break;
        case 268435456:
          l = 134217728;
          break;
        default:
          l = 0;
      }
      return l;
    }
    function cc(l) {
      return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Gf() {
      var l = H.p;
      return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : A0(l.type));
    }
    function Qf(l, t) {
      var e = H.p;
      try {
        return H.p = l, t();
      } finally {
        H.p = e;
      }
    }
    var Pt = Math.random().toString(36).slice(2), Xl = "__reactFiber$" + Pt, Fl = "__reactProps$" + Pt, Ke = "__reactContainer$" + Pt, ic = "__reactEvents$" + Pt, zd = "__reactListeners$" + Pt, Td = "__reactHandles$" + Pt, Xf = "__reactResources$" + Pt, Ca = "__reactMarker$" + Pt;
    function fc(l) {
      delete l[Xl], delete l[Fl], delete l[ic], delete l[zd], delete l[Td];
    }
    function Je(l) {
      var t = l[Xl];
      if (t) return t;
      for (var e = l.parentNode; e; ) {
        if (t = e[Ke] || e[Xl]) {
          if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = s0(l); l !== null; ) {
            if (e = l[Xl]) return e;
            l = s0(l);
          }
          return t;
        }
        l = e, e = l.parentNode;
      }
      return null;
    }
    function we(l) {
      if (l = l[Xl] || l[Ke]) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
      }
      return null;
    }
    function Ha(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
      throw Error(r(33));
    }
    function ke(l) {
      var t = l[Xf];
      return t || (t = l[Xf] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Yl(l) {
      l[Ca] = true;
    }
    var Zf = /* @__PURE__ */ new Set(), Lf = {};
    function Ne(l, t) {
      $e(l, t), $e(l + "Capture", t);
    }
    function $e(l, t) {
      for (Lf[l] = t, l = 0; l < t.length; l++) Zf.add(t[l]);
    }
    var Ad = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Vf = {}, Kf = {};
    function _d(l) {
      return tc.call(Kf, l) ? true : tc.call(Vf, l) ? false : Ad.test(l) ? Kf[l] = true : (Vf[l] = true, false);
    }
    function Ru(l, t, e) {
      if (_d(t)) if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
    }
    function Cu(l, t, e) {
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(t);
            return;
        }
        l.setAttribute(t, "" + e);
      }
    }
    function Ct(l, t, e, a) {
      if (a === null) l.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(e);
            return;
        }
        l.setAttributeNS(t, e, "" + a);
      }
    }
    function gt(l) {
      switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return l;
        case "object":
          return l;
        default:
          return "";
      }
    }
    function Jf(l) {
      var t = l.type;
      return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Nd(l, t, e) {
      var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
      if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var u = a.get, n = a.set;
        return Object.defineProperty(l, t, {
          configurable: true,
          get: function() {
            return u.call(this);
          },
          set: function(c) {
            e = "" + c, n.call(this, c);
          }
        }), Object.defineProperty(l, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return e;
          },
          setValue: function(c) {
            e = "" + c;
          },
          stopTracking: function() {
            l._valueTracker = null, delete l[t];
          }
        };
      }
    }
    function sc(l) {
      if (!l._valueTracker) {
        var t = Jf(l) ? "checked" : "value";
        l._valueTracker = Nd(l, t, "" + l[t]);
      }
    }
    function wf(l) {
      if (!l) return false;
      var t = l._valueTracker;
      if (!t) return true;
      var e = t.getValue(), a = "";
      return l && (a = Jf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), true) : false;
    }
    function Hu(l) {
      if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var Od = /[\n"\\]/g;
    function vt(l) {
      return l.replace(Od, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function rc(l, t, e, a, u, n, c, i) {
      l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + gt(t)) : l.value !== "" + gt(t) && (l.value = "" + gt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? oc(l, c, gt(t)) : e != null ? oc(l, c, gt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + gt(i) : l.removeAttribute("name");
    }
    function kf(l, t, e, a, u, n, c, i) {
      if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
        if (!(n !== "submit" && n !== "reset" || t != null)) {
          sc(l);
          return;
        }
        e = e != null ? "" + gt(e) : "", t = t != null ? "" + gt(t) : e, i || t === l.value || (l.value = t), l.defaultValue = t;
      }
      a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), sc(l);
    }
    function oc(l, t, e) {
      t === "number" && Hu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
    }
    function We(l, t, e, a) {
      if (l = l.options, t) {
        t = {};
        for (var u = 0; u < e.length; u++) t["$" + e[u]] = true;
        for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = true);
      } else {
        for (e = "" + gt(e), t = null, u = 0; u < l.length; u++) {
          if (l[u].value === e) {
            l[u].selected = true, a && (l[u].defaultSelected = true);
            return;
          }
          t !== null || l[u].disabled || (t = l[u]);
        }
        t !== null && (t.selected = true);
      }
    }
    function $f(l, t, e) {
      if (t != null && (t = "" + gt(t), t !== l.value && (l.value = t), e == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = e != null ? "" + gt(e) : "";
    }
    function Wf(l, t, e, a) {
      if (t == null) {
        if (a != null) {
          if (e != null) throw Error(r(92));
          if (Wl(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), t = e;
      }
      e = gt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), sc(l);
    }
    function Fe(l, t) {
      if (t) {
        var e = l.firstChild;
        if (e && e === l.lastChild && e.nodeType === 3) {
          e.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var Md = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ff(l, t, e) {
      var a = t.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Md.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
    }
    function If(l, t, e) {
      if (t != null && typeof t != "object") throw Error(r(62));
      if (l = l.style, e != null) {
        for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
        for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && Ff(l, u, a);
      } else for (var n in t) t.hasOwnProperty(n) && Ff(l, n, t[n]);
    }
    function dc(l) {
      if (l.indexOf("-") === -1) return false;
      switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Dd = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), jd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Bu(l) {
      return jd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    function Ht() {
    }
    var yc = null;
    function mc(l) {
      return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
    }
    var Ie = null, Pe = null;
    function Pf(l) {
      var t = we(l);
      if (t && (l = t.stateNode)) {
        var e = l[Fl] || null;
        l: switch (l = t.stateNode, t.type) {
          case "input":
            if (rc(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
              for (e = l; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + vt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                var a = e[t];
                if (a !== l && a.form === l.form) {
                  var u = a[Fl] || null;
                  if (!u) throw Error(r(90));
                  rc(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && wf(a);
            }
            break l;
          case "textarea":
            $f(l, e.value, e.defaultValue);
            break l;
          case "select":
            t = e.value, t != null && We(l, !!e.multiple, t, false);
        }
      }
    }
    var hc = false;
    function ls(l, t, e) {
      if (hc) return l(t, e);
      hc = true;
      try {
        var a = l(t);
        return a;
      } finally {
        if (hc = false, (Ie !== null || Pe !== null) && (Tn(), Ie && (t = Ie, l = Pe, Pe = Ie = null, Pf(t), l))) for (t = 0; t < l.length; t++) Pf(l[t]);
      }
    }
    function Ba(l, t) {
      var e = l.stateNode;
      if (e === null) return null;
      var a = e[Fl] || null;
      if (a === null) return null;
      e = a[t];
      l: switch (t) {
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
          (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
          break l;
        default:
          l = false;
      }
      if (l) return null;
      if (e && typeof e != "function") throw Error(r(231, t, typeof e));
      return e;
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gc = false;
    if (Bt) try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          gc = true;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      gc = false;
    }
    var le = null, vc = null, qu = null;
    function ts() {
      if (qu) return qu;
      var l, t = vc, e = t.length, a, u = "value" in le ? le.value : le.textContent, n = u.length;
      for (l = 0; l < e && t[l] === u[l]; l++) ;
      var c = e - l;
      for (a = 1; a <= c && t[e - a] === u[n - a]; a++) ;
      return qu = u.slice(l, 1 < a ? 1 - a : void 0);
    }
    function Yu(l) {
      var t = l.keyCode;
      return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
    }
    function Gu() {
      return true;
    }
    function es() {
      return false;
    }
    function Il(l) {
      function t(e, a, u, n, c) {
        this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
        for (var i in l) l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
        return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Gu : es, this.isPropagationStopped = es, this;
      }
      return M(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var e = this.nativeEvent;
          e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Gu);
        },
        stopPropagation: function() {
          var e = this.nativeEvent;
          e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Gu);
        },
        persist: function() {
        },
        isPersistent: Gu
      }), t;
    }
    var Oe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Qu = Il(Oe), Ya = M({}, Oe, {
      view: 0,
      detail: 0
    }), Ud = Il(Ya), bc, Sc, Ga, Xu = M({}, Ya, {
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
      getModifierState: pc,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== Ga && (Ga && l.type === "mousemove" ? (bc = l.screenX - Ga.screenX, Sc = l.screenY - Ga.screenY) : Sc = bc = 0, Ga = l), bc);
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : Sc;
      }
    }), as = Il(Xu), Rd = M({}, Xu, {
      dataTransfer: 0
    }), Cd = Il(Rd), Hd = M({}, Ya, {
      relatedTarget: 0
    }), xc = Il(Hd), Bd = M({}, Oe, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qd = Il(Bd), Yd = M({}, Oe, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      }
    }), Gd = Il(Yd), Qd = M({}, Oe, {
      data: 0
    }), us = Il(Qd), Xd = {
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
    }, Zd = {
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
    }, Ld = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vd(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = Ld[l]) ? !!t[l] : false;
    }
    function pc() {
      return Vd;
    }
    var Kd = M({}, Ya, {
      key: function(l) {
        if (l.key) {
          var t = Xd[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress" ? (l = Yu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Zd[l.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pc,
      charCode: function(l) {
        return l.type === "keypress" ? Yu(l) : 0;
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function(l) {
        return l.type === "keypress" ? Yu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      }
    }), Jd = Il(Kd), wd = M({}, Xu, {
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
    }), ns = Il(wd), kd = M({}, Ya, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pc
    }), $d = Il(kd), Wd = M({}, Oe, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fd = Il(Wd), Id = M({}, Xu, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Pd = Il(Id), ly = M({}, Oe, {
      newState: 0,
      oldState: 0
    }), ty = Il(ly), ey = [
      9,
      13,
      27,
      32
    ], Ec = Bt && "CompositionEvent" in window, Qa = null;
    Bt && "documentMode" in document && (Qa = document.documentMode);
    var ay = Bt && "TextEvent" in window && !Qa, cs = Bt && (!Ec || Qa && 8 < Qa && 11 >= Qa), is = " ", fs = false;
    function ss(l, t) {
      switch (l) {
        case "keyup":
          return ey.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function rs(l) {
      return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
    }
    var la = false;
    function uy(l, t) {
      switch (l) {
        case "compositionend":
          return rs(t);
        case "keypress":
          return t.which !== 32 ? null : (fs = true, is);
        case "textInput":
          return l = t.data, l === is && fs ? null : l;
        default:
          return null;
      }
    }
    function ny(l, t) {
      if (la) return l === "compositionend" || !Ec && ss(l, t) ? (l = ts(), qu = vc = le = null, la = false, l) : null;
      switch (l) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return cs && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var cy = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function os(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!cy[l.type] : t === "textarea";
    }
    function ds(l, t, e, a) {
      Ie ? Pe ? Pe.push(a) : Pe = [
        a
      ] : Ie = a, t = jn(t, "onChange"), 0 < t.length && (e = new Qu("onChange", "change", null, e, a), l.push({
        event: e,
        listeners: t
      }));
    }
    var Xa = null, Za = null;
    function iy(l) {
      $o(l, 0);
    }
    function Zu(l) {
      var t = Ha(l);
      if (wf(t)) return l;
    }
    function ys(l, t) {
      if (l === "change") return t;
    }
    var ms = false;
    if (Bt) {
      var zc;
      if (Bt) {
        var Tc = "oninput" in document;
        if (!Tc) {
          var hs = document.createElement("div");
          hs.setAttribute("oninput", "return;"), Tc = typeof hs.oninput == "function";
        }
        zc = Tc;
      } else zc = false;
      ms = zc && (!document.documentMode || 9 < document.documentMode);
    }
    function gs() {
      Xa && (Xa.detachEvent("onpropertychange", vs), Za = Xa = null);
    }
    function vs(l) {
      if (l.propertyName === "value" && Zu(Za)) {
        var t = [];
        ds(t, Za, l, mc(l)), ls(iy, t);
      }
    }
    function fy(l, t, e) {
      l === "focusin" ? (gs(), Xa = t, Za = e, Xa.attachEvent("onpropertychange", vs)) : l === "focusout" && gs();
    }
    function sy(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return Zu(Za);
    }
    function ry(l, t) {
      if (l === "click") return Zu(t);
    }
    function oy(l, t) {
      if (l === "input" || l === "change") return Zu(t);
    }
    function dy(l, t) {
      return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
    }
    var it = typeof Object.is == "function" ? Object.is : dy;
    function La(l, t) {
      if (it(l, t)) return true;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
      var e = Object.keys(l), a = Object.keys(t);
      if (e.length !== a.length) return false;
      for (a = 0; a < e.length; a++) {
        var u = e[a];
        if (!tc.call(t, u) || !it(l[u], t[u])) return false;
      }
      return true;
    }
    function bs(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function Ss(l, t) {
      var e = bs(l);
      l = 0;
      for (var a; e; ) {
        if (e.nodeType === 3) {
          if (a = l + e.textContent.length, l <= t && a >= t) return {
            node: e,
            offset: t - l
          };
          l = a;
        }
        l: {
          for (; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling;
              break l;
            }
            e = e.parentNode;
          }
          e = void 0;
        }
        e = bs(e);
      }
    }
    function xs(l, t) {
      return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? xs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
    }
    function ps(l) {
      l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
      for (var t = Hu(l.document); t instanceof l.HTMLIFrameElement; ) {
        try {
          var e = typeof t.contentWindow.location.href == "string";
        } catch {
          e = false;
        }
        if (e) l = t.contentWindow;
        else break;
        t = Hu(l.document);
      }
      return t;
    }
    function Ac(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
    }
    var yy = Bt && "documentMode" in document && 11 >= document.documentMode, ta = null, _c = null, Va = null, Nc = false;
    function Es(l, t, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Nc || ta == null || ta !== Hu(a) || (a = ta, "selectionStart" in a && Ac(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Va && La(Va, a) || (Va = a, a = jn(_c, "onSelect"), 0 < a.length && (t = new Qu("onSelect", "select", null, t, e), l.push({
        event: t,
        listeners: a
      }), t.target = ta)));
    }
    function Me(l, t) {
      var e = {};
      return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
    }
    var ea = {
      animationend: Me("Animation", "AnimationEnd"),
      animationiteration: Me("Animation", "AnimationIteration"),
      animationstart: Me("Animation", "AnimationStart"),
      transitionrun: Me("Transition", "TransitionRun"),
      transitionstart: Me("Transition", "TransitionStart"),
      transitioncancel: Me("Transition", "TransitionCancel"),
      transitionend: Me("Transition", "TransitionEnd")
    }, Oc = {}, zs = {};
    Bt && (zs = document.createElement("div").style, "AnimationEvent" in window || (delete ea.animationend.animation, delete ea.animationiteration.animation, delete ea.animationstart.animation), "TransitionEvent" in window || delete ea.transitionend.transition);
    function De(l) {
      if (Oc[l]) return Oc[l];
      if (!ea[l]) return l;
      var t = ea[l], e;
      for (e in t) if (t.hasOwnProperty(e) && e in zs) return Oc[l] = t[e];
      return l;
    }
    var Ts = De("animationend"), As = De("animationiteration"), _s = De("animationstart"), my = De("transitionrun"), hy = De("transitionstart"), gy = De("transitioncancel"), Ns = De("transitionend"), Os = /* @__PURE__ */ new Map(), Mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Mc.push("scrollEnd");
    function Nt(l, t) {
      Os.set(l, t), Ne(t, [
        l
      ]);
    }
    var Lu = typeof reportError == "function" ? reportError : function(l) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
          error: l
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", l);
        return;
      }
      console.error(l);
    }, bt = [], aa = 0, Dc = 0;
    function Vu() {
      for (var l = aa, t = Dc = aa = 0; t < l; ) {
        var e = bt[t];
        bt[t++] = null;
        var a = bt[t];
        bt[t++] = null;
        var u = bt[t];
        bt[t++] = null;
        var n = bt[t];
        if (bt[t++] = null, a !== null && u !== null) {
          var c = a.pending;
          c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
        }
        n !== 0 && Ms(e, u, n);
      }
    }
    function Ku(l, t, e, a) {
      bt[aa++] = l, bt[aa++] = t, bt[aa++] = e, bt[aa++] = a, Dc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
    }
    function jc(l, t, e, a) {
      return Ku(l, t, e, a), Ju(l);
    }
    function je(l, t) {
      return Ku(l, null, null, t), Ju(l);
    }
    function Ms(l, t, e) {
      l.lanes |= e;
      var a = l.alternate;
      a !== null && (a.lanes |= e);
      for (var u = false, n = l.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = true)), l = n, n = n.return;
      return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ct(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [
        t
      ] : a.push(t), t.lane = e | 536870912), n) : null;
    }
    function Ju(l) {
      if (50 < du) throw du = 0, Qi = null, Error(r(185));
      for (var t = l.return; t !== null; ) l = t, t = l.return;
      return l.tag === 3 ? l.stateNode : null;
    }
    var ua = {};
    function vy(l, t, e, a) {
      this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ft(l, t, e, a) {
      return new vy(l, t, e, a);
    }
    function Uc(l) {
      return l = l.prototype, !(!l || !l.isReactComponent);
    }
    function qt(l, t) {
      var e = l.alternate;
      return e === null ? (e = ft(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
    }
    function Ds(l, t) {
      l.flags &= 65011714;
      var e = l.alternate;
      return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), l;
    }
    function wu(l, t, e, a, u, n) {
      var c = 0;
      if (a = l, typeof l == "function") Uc(l) && (c = 1);
      else if (typeof l == "string") c = Em(l, e, Y.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else l: switch (l) {
        case ql:
          return l = ft(31, e, t, u), l.elementType = ql, l.lanes = n, l;
        case fl:
          return Ue(e.children, u, n, t);
        case Hl:
          c = 8, u |= 24;
          break;
        case El:
          return l = ft(12, e, t, u | 2), l.elementType = El, l.lanes = n, l;
        case Ql:
          return l = ft(13, e, t, u), l.elementType = Ql, l.lanes = n, l;
        case K:
          return l = ft(19, e, t, u), l.elementType = K, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null) switch (l.$$typeof) {
            case bl:
              c = 10;
              break l;
            case Bl:
              c = 9;
              break l;
            case Al:
              c = 11;
              break l;
            case X:
              c = 14;
              break l;
            case I:
              c = 16, a = null;
              break l;
          }
          c = 29, e = Error(r(130, l === null ? "null" : typeof l, "")), a = null;
      }
      return t = ft(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
    }
    function Ue(l, t, e, a) {
      return l = ft(7, l, a, t), l.lanes = e, l;
    }
    function Rc(l, t, e) {
      return l = ft(6, l, null, t), l.lanes = e, l;
    }
    function js(l) {
      var t = ft(18, null, null, 0);
      return t.stateNode = l, t;
    }
    function Cc(l, t, e) {
      return t = ft(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation
      }, t;
    }
    var Us = /* @__PURE__ */ new WeakMap();
    function St(l, t) {
      if (typeof l == "object" && l !== null) {
        var e = Us.get(l);
        return e !== void 0 ? e : (t = {
          value: l,
          source: t,
          stack: jf(t)
        }, Us.set(l, t), t);
      }
      return {
        value: l,
        source: t,
        stack: jf(t)
      };
    }
    var na = [], ca = 0, ku = null, Ka = 0, xt = [], pt = 0, te = null, Dt = 1, jt = "";
    function Yt(l, t) {
      na[ca++] = Ka, na[ca++] = ku, ku = l, Ka = t;
    }
    function Rs(l, t, e) {
      xt[pt++] = Dt, xt[pt++] = jt, xt[pt++] = te, te = l;
      var a = Dt;
      l = jt;
      var u = 32 - ct(a) - 1;
      a &= ~(1 << u), e += 1;
      var n = 32 - ct(t) + u;
      if (30 < n) {
        var c = u - u % 5;
        n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Dt = 1 << 32 - ct(t) + u | e << u | a, jt = n + l;
      } else Dt = 1 << n | e << u | a, jt = l;
    }
    function Hc(l) {
      l.return !== null && (Yt(l, 1), Rs(l, 1, 0));
    }
    function Bc(l) {
      for (; l === ku; ) ku = na[--ca], na[ca] = null, Ka = na[--ca], na[ca] = null;
      for (; l === te; ) te = xt[--pt], xt[pt] = null, jt = xt[--pt], xt[pt] = null, Dt = xt[--pt], xt[pt] = null;
    }
    function Cs(l, t) {
      xt[pt++] = Dt, xt[pt++] = jt, xt[pt++] = te, Dt = t.id, jt = t.overflow, te = l;
    }
    var Zl = null, Sl = null, ul = false, ee = null, Et = false, qc = Error(r(519));
    function ae(l) {
      var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ja(St(t, l)), qc;
    }
    function Hs(l) {
      var t = l.stateNode, e = l.type, a = l.memoizedProps;
      switch (t[Xl] = l, t[Fl] = a, e) {
        case "dialog":
          tl("cancel", t), tl("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          tl("load", t);
          break;
        case "video":
        case "audio":
          for (e = 0; e < mu.length; e++) tl(mu[e], t);
          break;
        case "source":
          tl("error", t);
          break;
        case "img":
        case "image":
        case "link":
          tl("error", t), tl("load", t);
          break;
        case "details":
          tl("toggle", t);
          break;
        case "input":
          tl("invalid", t), kf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          tl("invalid", t);
          break;
        case "textarea":
          tl("invalid", t), Wf(t, a.value, a.defaultValue, a.children);
      }
      e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === true || Po(t.textContent, e) ? (a.popover != null && (tl("beforetoggle", t), tl("toggle", t)), a.onScroll != null && tl("scroll", t), a.onScrollEnd != null && tl("scrollend", t), a.onClick != null && (t.onclick = Ht), t = true) : t = false, t || ae(l, true);
    }
    function Bs(l) {
      for (Zl = l.return; Zl; ) switch (Zl.tag) {
        case 5:
        case 31:
        case 13:
          Et = false;
          return;
        case 27:
        case 3:
          Et = true;
          return;
        default:
          Zl = Zl.return;
      }
    }
    function ia(l) {
      if (l !== Zl) return false;
      if (!ul) return Bs(l), ul = true, false;
      var t = l.tag, e;
      if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || tf(l.type, l.memoizedProps)), e = !e), e && Sl && ae(l), Bs(l), t === 13) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
        Sl = f0(l);
      } else if (t === 31) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
        Sl = f0(l);
      } else t === 27 ? (t = Sl, ve(l.type) ? (l = cf, cf = null, Sl = l) : Sl = t) : Sl = Zl ? Tt(l.stateNode.nextSibling) : null;
      return true;
    }
    function Re() {
      Sl = Zl = null, ul = false;
    }
    function Yc() {
      var l = ee;
      return l !== null && (et === null ? et = l : et.push.apply(et, l), ee = null), l;
    }
    function Ja(l) {
      ee === null ? ee = [
        l
      ] : ee.push(l);
    }
    var Gc = y(null), Ce = null, Gt = null;
    function ue(l, t, e) {
      B(Gc, t._currentValue), t._currentValue = e;
    }
    function Qt(l) {
      l._currentValue = Gc.current, O(Gc);
    }
    function Qc(l, t, e) {
      for (; l !== null; ) {
        var a = l.alternate;
        if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
        l = l.return;
      }
    }
    function Xc(l, t, e, a) {
      var u = l.child;
      for (u !== null && (u.return = l); u !== null; ) {
        var n = u.dependencies;
        if (n !== null) {
          var c = u.child;
          n = n.firstContext;
          l: for (; n !== null; ) {
            var i = n;
            n = u;
            for (var s = 0; s < t.length; s++) if (i.context === t[s]) {
              n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Qc(n.return, e, l), a || (c = null);
              break l;
            }
            n = i.next;
          }
        } else if (u.tag === 18) {
          if (c = u.return, c === null) throw Error(r(341));
          c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Qc(c, e, l), c = null;
        } else c = u.child;
        if (c !== null) c.return = u;
        else for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (u = c.sibling, u !== null) {
            u.return = c.return, c = u;
            break;
          }
          c = c.return;
        }
        u = c;
      }
    }
    function fa(l, t, e, a) {
      l = null;
      for (var u = t, n = false; u !== null; ) {
        if (!n) {
          if ((u.flags & 524288) !== 0) n = true;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var c = u.alternate;
          if (c === null) throw Error(r(387));
          if (c = c.memoizedProps, c !== null) {
            var i = u.type;
            it(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [
              i
            ]);
          }
        } else if (u === sl.current) {
          if (c = u.alternate, c === null) throw Error(r(387));
          c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Su) : l = [
            Su
          ]);
        }
        u = u.return;
      }
      l !== null && Xc(t, l, e, a), t.flags |= 262144;
    }
    function $u(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!it(l.context._currentValue, l.memoizedValue)) return true;
        l = l.next;
      }
      return false;
    }
    function He(l) {
      Ce = l, Gt = null, l = l.dependencies, l !== null && (l.firstContext = null);
    }
    function Ll(l) {
      return qs(Ce, l);
    }
    function Wu(l, t) {
      return Ce === null && He(l), qs(l, t);
    }
    function qs(l, t) {
      var e = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: e,
        next: null
      }, Gt === null) {
        if (l === null) throw Error(r(308));
        Gt = t, l.dependencies = {
          lanes: 0,
          firstContext: t
        }, l.flags |= 524288;
      } else Gt = Gt.next = t;
      return e;
    }
    var by = typeof AbortController < "u" ? AbortController : function() {
      var l = [], t = this.signal = {
        aborted: false,
        addEventListener: function(e, a) {
          l.push(a);
        }
      };
      this.abort = function() {
        t.aborted = true, l.forEach(function(e) {
          return e();
        });
      };
    }, Sy = f.unstable_scheduleCallback, xy = f.unstable_NormalPriority, Dl = {
      $$typeof: bl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Zc() {
      return {
        controller: new by(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function wa(l) {
      l.refCount--, l.refCount === 0 && Sy(xy, function() {
        l.controller.abort();
      });
    }
    var ka = null, Lc = 0, sa = 0, ra = null;
    function py(l, t) {
      if (ka === null) {
        var e = ka = [];
        Lc = 0, sa = Ji(), ra = {
          status: "pending",
          value: void 0,
          then: function(a) {
            e.push(a);
          }
        };
      }
      return Lc++, t.then(Ys, Ys), t;
    }
    function Ys() {
      if (--Lc === 0 && ka !== null) {
        ra !== null && (ra.status = "fulfilled");
        var l = ka;
        ka = null, sa = 0, ra = null;
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function Ey(l, t) {
      var e = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(u) {
          e.push(u);
        }
      };
      return l.then(function() {
        a.status = "fulfilled", a.value = t;
        for (var u = 0; u < e.length; u++) (0, e[u])(t);
      }, function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
      }), a;
    }
    var Gs = T.S;
    T.S = function(l, t) {
      zo = ut(), typeof t == "object" && t !== null && typeof t.then == "function" && py(l, t), Gs !== null && Gs(l, t);
    };
    var Be = y(null);
    function Vc() {
      var l = Be.current;
      return l !== null ? l : vl.pooledCache;
    }
    function Fu(l, t) {
      t === null ? B(Be, Be.current) : B(Be, t.pool);
    }
    function Qs() {
      var l = Vc();
      return l === null ? null : {
        parent: Dl._currentValue,
        pool: l
      };
    }
    var oa = Error(r(460)), Kc = Error(r(474)), Iu = Error(r(542)), Pu = {
      then: function() {
      }
    };
    function Xs(l) {
      return l = l.status, l === "fulfilled" || l === "rejected";
    }
    function Zs(l, t, e) {
      switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ht, Ht), t = e), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw l = t.reason, Vs(l), l;
        default:
          if (typeof t.status == "string") t.then(Ht, Ht);
          else {
            if (l = vl, l !== null && 100 < l.shellSuspendCounter) throw Error(r(482));
            l = t, l.status = "pending", l.then(function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = a;
              }
            }, function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = a;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw l = t.reason, Vs(l), l;
          }
          throw Ye = t, oa;
      }
    }
    function qe(l) {
      try {
        var t = l._init;
        return t(l._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ye = e, oa) : e;
      }
    }
    var Ye = null;
    function Ls() {
      if (Ye === null) throw Error(r(459));
      var l = Ye;
      return Ye = null, l;
    }
    function Vs(l) {
      if (l === oa || l === Iu) throw Error(r(483));
    }
    var da = null, $a = 0;
    function ln(l) {
      var t = $a;
      return $a += 1, da === null && (da = []), Zs(da, l, t);
    }
    function Wa(l, t) {
      t = t.props.ref, l.ref = t !== void 0 ? t : null;
    }
    function tn(l, t) {
      throw t.$$typeof === D ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(r(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function Ks(l) {
      function t(m, o) {
        if (l) {
          var v = m.deletions;
          v === null ? (m.deletions = [
            o
          ], m.flags |= 16) : v.push(o);
        }
      }
      function e(m, o) {
        if (!l) return null;
        for (; o !== null; ) t(m, o), o = o.sibling;
        return null;
      }
      function a(m) {
        for (var o = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
        return o;
      }
      function u(m, o) {
        return m = qt(m, o), m.index = 0, m.sibling = null, m;
      }
      function n(m, o, v) {
        return m.index = v, l ? (v = m.alternate, v !== null ? (v = v.index, v < o ? (m.flags |= 67108866, o) : v) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
      }
      function c(m) {
        return l && m.alternate === null && (m.flags |= 67108866), m;
      }
      function i(m, o, v, A) {
        return o === null || o.tag !== 6 ? (o = Rc(v, m.mode, A), o.return = m, o) : (o = u(o, v), o.return = m, o);
      }
      function s(m, o, v, A) {
        var Z = v.type;
        return Z === fl ? z(m, o, v.props.children, A, v.key) : o !== null && (o.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === I && qe(Z) === o.type) ? (o = u(o, v.props), Wa(o, v), o.return = m, o) : (o = wu(v.type, v.key, v.props, null, m.mode, A), Wa(o, v), o.return = m, o);
      }
      function b(m, o, v, A) {
        return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = Cc(v, m.mode, A), o.return = m, o) : (o = u(o, v.children || []), o.return = m, o);
      }
      function z(m, o, v, A, Z) {
        return o === null || o.tag !== 7 ? (o = Ue(v, m.mode, A, Z), o.return = m, o) : (o = u(o, v), o.return = m, o);
      }
      function N(m, o, v) {
        if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = Rc("" + o, m.mode, v), o.return = m, o;
        if (typeof o == "object" && o !== null) {
          switch (o.$$typeof) {
            case V:
              return v = wu(o.type, o.key, o.props, null, m.mode, v), Wa(v, o), v.return = m, v;
            case k:
              return o = Cc(o, m.mode, v), o.return = m, o;
            case I:
              return o = qe(o), N(m, o, v);
          }
          if (Wl(o) || Ml(o)) return o = Ue(o, m.mode, v, null), o.return = m, o;
          if (typeof o.then == "function") return N(m, ln(o), v);
          if (o.$$typeof === bl) return N(m, Wu(m, o), v);
          tn(m, o);
        }
        return null;
      }
      function x(m, o, v, A) {
        var Z = o !== null ? o.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return Z !== null ? null : i(m, o, "" + v, A);
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case V:
              return v.key === Z ? s(m, o, v, A) : null;
            case k:
              return v.key === Z ? b(m, o, v, A) : null;
            case I:
              return v = qe(v), x(m, o, v, A);
          }
          if (Wl(v) || Ml(v)) return Z !== null ? null : z(m, o, v, A, null);
          if (typeof v.then == "function") return x(m, o, ln(v), A);
          if (v.$$typeof === bl) return x(m, o, Wu(m, v), A);
          tn(m, v);
        }
        return null;
      }
      function p(m, o, v, A, Z) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return m = m.get(v) || null, i(o, m, "" + A, Z);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case V:
              return m = m.get(A.key === null ? v : A.key) || null, s(o, m, A, Z);
            case k:
              return m = m.get(A.key === null ? v : A.key) || null, b(o, m, A, Z);
            case I:
              return A = qe(A), p(m, o, v, A, Z);
          }
          if (Wl(A) || Ml(A)) return m = m.get(v) || null, z(o, m, A, Z, null);
          if (typeof A.then == "function") return p(m, o, v, ln(A), Z);
          if (A.$$typeof === bl) return p(m, o, v, Wu(o, A), Z);
          tn(o, A);
        }
        return null;
      }
      function q(m, o, v, A) {
        for (var Z = null, nl = null, Q = o, F = o = 0, al = null; Q !== null && F < v.length; F++) {
          Q.index > F ? (al = Q, Q = null) : al = Q.sibling;
          var cl = x(m, Q, v[F], A);
          if (cl === null) {
            Q === null && (Q = al);
            break;
          }
          l && Q && cl.alternate === null && t(m, Q), o = n(cl, o, F), nl === null ? Z = cl : nl.sibling = cl, nl = cl, Q = al;
        }
        if (F === v.length) return e(m, Q), ul && Yt(m, F), Z;
        if (Q === null) {
          for (; F < v.length; F++) Q = N(m, v[F], A), Q !== null && (o = n(Q, o, F), nl === null ? Z = Q : nl.sibling = Q, nl = Q);
          return ul && Yt(m, F), Z;
        }
        for (Q = a(Q); F < v.length; F++) al = p(Q, m, F, v[F], A), al !== null && (l && al.alternate !== null && Q.delete(al.key === null ? F : al.key), o = n(al, o, F), nl === null ? Z = al : nl.sibling = al, nl = al);
        return l && Q.forEach(function(Ee) {
          return t(m, Ee);
        }), ul && Yt(m, F), Z;
      }
      function L(m, o, v, A) {
        if (v == null) throw Error(r(151));
        for (var Z = null, nl = null, Q = o, F = o = 0, al = null, cl = v.next(); Q !== null && !cl.done; F++, cl = v.next()) {
          Q.index > F ? (al = Q, Q = null) : al = Q.sibling;
          var Ee = x(m, Q, cl.value, A);
          if (Ee === null) {
            Q === null && (Q = al);
            break;
          }
          l && Q && Ee.alternate === null && t(m, Q), o = n(Ee, o, F), nl === null ? Z = Ee : nl.sibling = Ee, nl = Ee, Q = al;
        }
        if (cl.done) return e(m, Q), ul && Yt(m, F), Z;
        if (Q === null) {
          for (; !cl.done; F++, cl = v.next()) cl = N(m, cl.value, A), cl !== null && (o = n(cl, o, F), nl === null ? Z = cl : nl.sibling = cl, nl = cl);
          return ul && Yt(m, F), Z;
        }
        for (Q = a(Q); !cl.done; F++, cl = v.next()) cl = p(Q, m, F, cl.value, A), cl !== null && (l && cl.alternate !== null && Q.delete(cl.key === null ? F : cl.key), o = n(cl, o, F), nl === null ? Z = cl : nl.sibling = cl, nl = cl);
        return l && Q.forEach(function(Rm) {
          return t(m, Rm);
        }), ul && Yt(m, F), Z;
      }
      function hl(m, o, v, A) {
        if (typeof v == "object" && v !== null && v.type === fl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case V:
              l: {
                for (var Z = v.key; o !== null; ) {
                  if (o.key === Z) {
                    if (Z = v.type, Z === fl) {
                      if (o.tag === 7) {
                        e(m, o.sibling), A = u(o, v.props.children), A.return = m, m = A;
                        break l;
                      }
                    } else if (o.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === I && qe(Z) === o.type) {
                      e(m, o.sibling), A = u(o, v.props), Wa(A, v), A.return = m, m = A;
                      break l;
                    }
                    e(m, o);
                    break;
                  } else t(m, o);
                  o = o.sibling;
                }
                v.type === fl ? (A = Ue(v.props.children, m.mode, A, v.key), A.return = m, m = A) : (A = wu(v.type, v.key, v.props, null, m.mode, A), Wa(A, v), A.return = m, m = A);
              }
              return c(m);
            case k:
              l: {
                for (Z = v.key; o !== null; ) {
                  if (o.key === Z) if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                    e(m, o.sibling), A = u(o, v.children || []), A.return = m, m = A;
                    break l;
                  } else {
                    e(m, o);
                    break;
                  }
                  else t(m, o);
                  o = o.sibling;
                }
                A = Cc(v, m.mode, A), A.return = m, m = A;
              }
              return c(m);
            case I:
              return v = qe(v), hl(m, o, v, A);
          }
          if (Wl(v)) return q(m, o, v, A);
          if (Ml(v)) {
            if (Z = Ml(v), typeof Z != "function") throw Error(r(150));
            return v = Z.call(v), L(m, o, v, A);
          }
          if (typeof v.then == "function") return hl(m, o, ln(v), A);
          if (v.$$typeof === bl) return hl(m, o, Wu(m, v), A);
          tn(m, v);
        }
        return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (e(m, o.sibling), A = u(o, v), A.return = m, m = A) : (e(m, o), A = Rc(v, m.mode, A), A.return = m, m = A), c(m)) : e(m, o);
      }
      return function(m, o, v, A) {
        try {
          $a = 0;
          var Z = hl(m, o, v, A);
          return da = null, Z;
        } catch (Q) {
          if (Q === oa || Q === Iu) throw Q;
          var nl = ft(29, Q, null, m.mode);
          return nl.lanes = A, nl.return = m, nl;
        }
      };
    }
    var Ge = Ks(true), Js = Ks(false), ne = false;
    function Jc(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function wc(l, t) {
      l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
        baseState: l.baseState,
        firstBaseUpdate: l.firstBaseUpdate,
        lastBaseUpdate: l.lastBaseUpdate,
        shared: l.shared,
        callbacks: null
      });
    }
    function ce(l) {
      return {
        lane: l,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ie(l, t, e) {
      var a = l.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (il & 2) !== 0) {
        var u = a.pending;
        return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Ju(l), Ms(l, null, e), t;
      }
      return Ku(l, a, t, e), Ju(l);
    }
    function Fa(l, t, e) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, qf(l, e);
      }
    }
    function kc(l, t) {
      var e = l.updateQueue, a = l.alternate;
      if (a !== null && (a = a.updateQueue, e === a)) {
        var u = null, n = null;
        if (e = e.firstBaseUpdate, e !== null) {
          do {
            var c = {
              lane: e.lane,
              tag: e.tag,
              payload: e.payload,
              callback: null,
              next: null
            };
            n === null ? u = n = c : n = n.next = c, e = e.next;
          } while (e !== null);
          n === null ? u = n = t : n = n.next = t;
        } else u = n = t;
        e = {
          baseState: a.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: n,
          shared: a.shared,
          callbacks: a.callbacks
        }, l.updateQueue = e;
        return;
      }
      l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
    }
    var $c = false;
    function Ia() {
      if ($c) {
        var l = ra;
        if (l !== null) throw l;
      }
    }
    function Pa(l, t, e, a) {
      $c = false;
      var u = l.updateQueue;
      ne = false;
      var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
      if (i !== null) {
        u.shared.pending = null;
        var s = i, b = s.next;
        s.next = null, c === null ? n = b : c.next = b, c = s;
        var z = l.alternate;
        z !== null && (z = z.updateQueue, i = z.lastBaseUpdate, i !== c && (i === null ? z.firstBaseUpdate = b : i.next = b, z.lastBaseUpdate = s));
      }
      if (n !== null) {
        var N = u.baseState;
        c = 0, z = b = s = null, i = n;
        do {
          var x = i.lane & -536870913, p = x !== i.lane;
          if (p ? (el & x) === x : (a & x) === x) {
            x !== 0 && x === sa && ($c = true), z !== null && (z = z.next = {
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: null,
              next: null
            });
            l: {
              var q = l, L = i;
              x = t;
              var hl = e;
              switch (L.tag) {
                case 1:
                  if (q = L.payload, typeof q == "function") {
                    N = q.call(hl, N, x);
                    break l;
                  }
                  N = q;
                  break l;
                case 3:
                  q.flags = q.flags & -65537 | 128;
                case 0:
                  if (q = L.payload, x = typeof q == "function" ? q.call(hl, N, x) : q, x == null) break l;
                  N = M({}, N, x);
                  break l;
                case 2:
                  ne = true;
              }
            }
            x = i.callback, x !== null && (l.flags |= 64, p && (l.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [
              x
            ] : p.push(x));
          } else p = {
            lane: x,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, z === null ? (b = z = p, s = N) : z = z.next = p, c |= x;
          if (i = i.next, i === null) {
            if (i = u.shared.pending, i === null) break;
            p = i, i = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
          }
        } while (true);
        z === null && (s = N), u.baseState = s, u.firstBaseUpdate = b, u.lastBaseUpdate = z, n === null && (u.shared.lanes = 0), de |= c, l.lanes = c, l.memoizedState = N;
      }
    }
    function ws(l, t) {
      if (typeof l != "function") throw Error(r(191, l));
      l.call(t);
    }
    function ks(l, t) {
      var e = l.callbacks;
      if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) ws(e[l], t);
    }
    var ya = y(null), en = y(0);
    function $s(l, t) {
      l = $t, B(en, l), B(ya, t), $t = l | t.baseLanes;
    }
    function Wc() {
      B(en, $t), B(ya, ya.current);
    }
    function Fc() {
      $t = en.current, O(ya), O(en);
    }
    var st = y(null), zt = null;
    function fe(l) {
      var t = l.alternate;
      B(Nl, Nl.current & 1), B(st, l), zt === null && (t === null || ya.current !== null || t.memoizedState !== null) && (zt = l);
    }
    function Ic(l) {
      B(Nl, Nl.current), B(st, l), zt === null && (zt = l);
    }
    function Ws(l) {
      l.tag === 22 ? (B(Nl, Nl.current), B(st, l), zt === null && (zt = l)) : se();
    }
    function se() {
      B(Nl, Nl.current), B(st, st.current);
    }
    function rt(l) {
      O(st), zt === l && (zt = null), O(Nl);
    }
    var Nl = y(0);
    function an(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var e = t.memoizedState;
          if (e !== null && (e = e.dehydrated, e === null || uf(e) || nf(e))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Xt = 0, W = null, yl = null, jl = null, un = false, ma = false, Qe = false, nn = 0, lu = 0, ha = null, zy = 0;
    function zl() {
      throw Error(r(321));
    }
    function Pc(l, t) {
      if (t === null) return false;
      for (var e = 0; e < t.length && e < l.length; e++) if (!it(l[e], t[e])) return false;
      return true;
    }
    function li(l, t, e, a, u, n) {
      return Xt = n, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = l === null || l.memoizedState === null ? Rr : hi, Qe = false, n = e(a, u), Qe = false, ma && (n = Is(t, e, a, u)), Fs(l), n;
    }
    function Fs(l) {
      T.H = au;
      var t = yl !== null && yl.next !== null;
      if (Xt = 0, jl = yl = W = null, un = false, lu = 0, ha = null, t) throw Error(r(300));
      l === null || Ul || (l = l.dependencies, l !== null && $u(l) && (Ul = true));
    }
    function Is(l, t, e, a) {
      W = l;
      var u = 0;
      do {
        if (ma && (ha = null), lu = 0, ma = false, 25 <= u) throw Error(r(301));
        if (u += 1, jl = yl = null, l.updateQueue != null) {
          var n = l.updateQueue;
          n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
        }
        T.H = Cr, n = t(e, a);
      } while (ma);
      return n;
    }
    function Ty() {
      var l = T.H, t = l.useState()[0];
      return t = typeof t.then == "function" ? tu(t) : t, l = l.useState()[0], (yl !== null ? yl.memoizedState : null) !== l && (W.flags |= 1024), t;
    }
    function ti() {
      var l = nn !== 0;
      return nn = 0, l;
    }
    function ei(l, t, e) {
      t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
    }
    function ai(l) {
      if (un) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), l = l.next;
        }
        un = false;
      }
      Xt = 0, jl = yl = W = null, ma = false, lu = nn = 0, ha = null;
    }
    function $l() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return jl === null ? W.memoizedState = jl = l : jl = jl.next = l, jl;
    }
    function Ol() {
      if (yl === null) {
        var l = W.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = yl.next;
      var t = jl === null ? W.memoizedState : jl.next;
      if (t !== null) jl = t, yl = l;
      else {
        if (l === null) throw W.alternate === null ? Error(r(467)) : Error(r(310));
        yl = l, l = {
          memoizedState: yl.memoizedState,
          baseState: yl.baseState,
          baseQueue: yl.baseQueue,
          queue: yl.queue,
          next: null
        }, jl === null ? W.memoizedState = jl = l : jl = jl.next = l;
      }
      return jl;
    }
    function cn() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function tu(l) {
      var t = lu;
      return lu += 1, ha === null && (ha = []), l = Zs(ha, l, t), t = W, (jl === null ? t.memoizedState : jl.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? Rr : hi), l;
    }
    function fn(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return tu(l);
        if (l.$$typeof === bl) return Ll(l);
      }
      throw Error(r(438, String(l)));
    }
    function ui(l) {
      var t = null, e = W.updateQueue;
      if (e !== null && (t = e.memoCache), t == null) {
        var a = W.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
          data: a.data.map(function(u) {
            return u.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), e === null && (e = cn(), W.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Jl;
      return t.index++, e;
    }
    function Zt(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function sn(l) {
      var t = Ol();
      return ni(t, yl, l);
    }
    function ni(l, t, e) {
      var a = l.queue;
      if (a === null) throw Error(r(311));
      a.lastRenderedReducer = e;
      var u = l.baseQueue, n = a.pending;
      if (n !== null) {
        if (u !== null) {
          var c = u.next;
          u.next = n.next, n.next = c;
        }
        t.baseQueue = u = n, a.pending = null;
      }
      if (n = l.baseState, u === null) l.memoizedState = n;
      else {
        t = u.next;
        var i = c = null, s = null, b = t, z = false;
        do {
          var N = b.lane & -536870913;
          if (N !== b.lane ? (el & N) === N : (Xt & N) === N) {
            var x = b.revertLane;
            if (x === 0) s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), N === sa && (z = true);
            else if ((Xt & x) === x) {
              b = b.next, x === sa && (z = true);
              continue;
            } else N = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, s === null ? (i = s = N, c = n) : s = s.next = N, W.lanes |= x, de |= x;
            N = b.action, Qe && e(n, N), n = b.hasEagerState ? b.eagerState : e(n, N);
          } else x = {
            lane: N,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, s === null ? (i = s = x, c = n) : s = s.next = x, W.lanes |= N, de |= N;
          b = b.next;
        } while (b !== null && b !== t);
        if (s === null ? c = n : s.next = i, !it(n, l.memoizedState) && (Ul = true, z && (e = ra, e !== null))) throw e;
        l.memoizedState = n, l.baseState = c, l.baseQueue = s, a.lastRenderedState = n;
      }
      return u === null && (a.lanes = 0), [
        l.memoizedState,
        a.dispatch
      ];
    }
    function ci(l) {
      var t = Ol(), e = t.queue;
      if (e === null) throw Error(r(311));
      e.lastRenderedReducer = l;
      var a = e.dispatch, u = e.pending, n = t.memoizedState;
      if (u !== null) {
        e.pending = null;
        var c = u = u.next;
        do
          n = l(n, c.action), c = c.next;
        while (c !== u);
        it(n, t.memoizedState) || (Ul = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
      }
      return [
        n,
        a
      ];
    }
    function Ps(l, t, e) {
      var a = W, u = Ol(), n = ul;
      if (n) {
        if (e === void 0) throw Error(r(407));
        e = e();
      } else e = t();
      var c = !it((yl || u).memoizedState, e);
      if (c && (u.memoizedState = e, Ul = true), u = u.queue, si(er.bind(null, a, u, l), [
        l
      ]), u.getSnapshot !== t || c || jl !== null && jl.memoizedState.tag & 1) {
        if (a.flags |= 2048, ga(9, {
          destroy: void 0
        }, tr.bind(null, a, u, e, t), null), vl === null) throw Error(r(349));
        n || (Xt & 127) !== 0 || lr(a, t, e);
      }
      return e;
    }
    function lr(l, t, e) {
      l.flags |= 16384, l = {
        getSnapshot: t,
        value: e
      }, t = W.updateQueue, t === null ? (t = cn(), W.updateQueue = t, t.stores = [
        l
      ]) : (e = t.stores, e === null ? t.stores = [
        l
      ] : e.push(l));
    }
    function tr(l, t, e, a) {
      t.value = e, t.getSnapshot = a, ar(t) && ur(l);
    }
    function er(l, t, e) {
      return e(function() {
        ar(t) && ur(l);
      });
    }
    function ar(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var e = t();
        return !it(l, e);
      } catch {
        return true;
      }
    }
    function ur(l) {
      var t = je(l, 2);
      t !== null && at(t, l, 2);
    }
    function ii(l) {
      var t = $l();
      if (typeof l == "function") {
        var e = l;
        if (l = e(), Qe) {
          It(true);
          try {
            e();
          } finally {
            It(false);
          }
        }
      }
      return t.memoizedState = t.baseState = l, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: l
      }, t;
    }
    function nr(l, t, e, a) {
      return l.baseState = e, ni(l, yl, typeof a == "function" ? a : Zt);
    }
    function Ay(l, t, e, a, u) {
      if (dn(l)) throw Error(r(485));
      if (l = t.action, l !== null) {
        var n = {
          payload: u,
          action: l,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(c) {
            n.listeners.push(c);
          }
        };
        T.T !== null ? e(true) : n.isTransition = false, a(n), e = t.pending, e === null ? (n.next = t.pending = n, cr(t, n)) : (n.next = e.next, t.pending = e.next = n);
      }
    }
    function cr(l, t) {
      var e = t.action, a = t.payload, u = l.state;
      if (t.isTransition) {
        var n = T.T, c = {};
        T.T = c;
        try {
          var i = e(u, a), s = T.S;
          s !== null && s(c, i), ir(l, t, i);
        } catch (b) {
          fi(l, t, b);
        } finally {
          n !== null && c.types !== null && (n.types = c.types), T.T = n;
        }
      } else try {
        n = e(u, a), ir(l, t, n);
      } catch (b) {
        fi(l, t, b);
      }
    }
    function ir(l, t, e) {
      e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
        fr(l, t, a);
      }, function(a) {
        return fi(l, t, a);
      }) : fr(l, t, e);
    }
    function fr(l, t, e) {
      t.status = "fulfilled", t.value = e, sr(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, cr(l, e)));
    }
    function fi(l, t, e) {
      var a = l.pending;
      if (l.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = e, sr(t), t = t.next;
        while (t !== a);
      }
      l.action = null;
    }
    function sr(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function rr(l, t) {
      return t;
    }
    function or(l, t) {
      if (ul) {
        var e = vl.formState;
        if (e !== null) {
          l: {
            var a = W;
            if (ul) {
              if (Sl) {
                t: {
                  for (var u = Sl, n = Et; u.nodeType !== 8; ) {
                    if (!n) {
                      u = null;
                      break t;
                    }
                    if (u = Tt(u.nextSibling), u === null) {
                      u = null;
                      break t;
                    }
                  }
                  n = u.data, u = n === "F!" || n === "F" ? u : null;
                }
                if (u) {
                  Sl = Tt(u.nextSibling), a = u.data === "F!";
                  break l;
                }
              }
              ae(a);
            }
            a = false;
          }
          a && (t = e[0]);
        }
      }
      return e = $l(), e.memoizedState = e.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rr,
        lastRenderedState: t
      }, e.queue = a, e = Dr.bind(null, W, a), a.dispatch = e, a = ii(false), n = mi.bind(null, W, false, a.queue), a = $l(), u = {
        state: t,
        dispatch: null,
        action: l,
        pending: null
      }, a.queue = u, e = Ay.bind(null, W, u, n, e), u.dispatch = e, a.memoizedState = l, [
        t,
        e,
        false
      ];
    }
    function dr(l) {
      var t = Ol();
      return yr(t, yl, l);
    }
    function yr(l, t, e) {
      if (t = ni(l, t, rr)[0], l = sn(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = tu(t);
      } catch (c) {
        throw c === oa ? Iu : c;
      }
      else a = t;
      t = Ol();
      var u = t.queue, n = u.dispatch;
      return e !== t.memoizedState && (W.flags |= 2048, ga(9, {
        destroy: void 0
      }, _y.bind(null, u, e), null)), [
        a,
        n,
        l
      ];
    }
    function _y(l, t) {
      l.action = t;
    }
    function mr(l) {
      var t = Ol(), e = yl;
      if (e !== null) return yr(t, e, l);
      Ol(), t = t.memoizedState, e = Ol();
      var a = e.queue.dispatch;
      return e.memoizedState = l, [
        t,
        a,
        false
      ];
    }
    function ga(l, t, e, a) {
      return l = {
        tag: l,
        create: e,
        deps: a,
        inst: t,
        next: null
      }, t = W.updateQueue, t === null && (t = cn(), W.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
    }
    function hr() {
      return Ol().memoizedState;
    }
    function rn(l, t, e, a) {
      var u = $l();
      W.flags |= l, u.memoizedState = ga(1 | t, {
        destroy: void 0
      }, e, a === void 0 ? null : a);
    }
    function on(l, t, e, a) {
      var u = Ol();
      a = a === void 0 ? null : a;
      var n = u.memoizedState.inst;
      yl !== null && a !== null && Pc(a, yl.memoizedState.deps) ? u.memoizedState = ga(t, n, e, a) : (W.flags |= l, u.memoizedState = ga(1 | t, n, e, a));
    }
    function gr(l, t) {
      rn(8390656, 8, l, t);
    }
    function si(l, t) {
      on(2048, 8, l, t);
    }
    function Ny(l) {
      W.flags |= 4;
      var t = W.updateQueue;
      if (t === null) t = cn(), W.updateQueue = t, t.events = [
        l
      ];
      else {
        var e = t.events;
        e === null ? t.events = [
          l
        ] : e.push(l);
      }
    }
    function vr(l) {
      var t = Ol().memoizedState;
      return Ny({
        ref: t,
        nextImpl: l
      }), function() {
        if ((il & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function br(l, t) {
      return on(4, 2, l, t);
    }
    function Sr(l, t) {
      return on(4, 4, l, t);
    }
    function xr(l, t) {
      if (typeof t == "function") {
        l = l();
        var e = t(l);
        return function() {
          typeof e == "function" ? e() : t(null);
        };
      }
      if (t != null) return l = l(), t.current = l, function() {
        t.current = null;
      };
    }
    function pr(l, t, e) {
      e = e != null ? e.concat([
        l
      ]) : null, on(4, 4, xr.bind(null, t, l), e);
    }
    function ri() {
    }
    function Er(l, t) {
      var e = Ol();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      return t !== null && Pc(t, a[1]) ? a[0] : (e.memoizedState = [
        l,
        t
      ], l);
    }
    function zr(l, t) {
      var e = Ol();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      if (t !== null && Pc(t, a[1])) return a[0];
      if (a = l(), Qe) {
        It(true);
        try {
          l();
        } finally {
          It(false);
        }
      }
      return e.memoizedState = [
        a,
        t
      ], a;
    }
    function oi(l, t, e) {
      return e === void 0 || (Xt & 1073741824) !== 0 && (el & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = Ao(), W.lanes |= l, de |= l, e);
    }
    function Tr(l, t, e, a) {
      return it(e, t) ? e : ya.current !== null ? (l = oi(l, e, a), it(l, t) || (Ul = true), l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (el & 261930) === 0 ? (Ul = true, l.memoizedState = e) : (l = Ao(), W.lanes |= l, de |= l, t);
    }
    function Ar(l, t, e, a, u) {
      var n = H.p;
      H.p = n !== 0 && 8 > n ? n : 8;
      var c = T.T, i = {};
      T.T = i, mi(l, false, t, e);
      try {
        var s = u(), b = T.S;
        if (b !== null && b(i, s), s !== null && typeof s == "object" && typeof s.then == "function") {
          var z = Ey(s, a);
          eu(l, t, z, yt(l));
        } else eu(l, t, a, yt(l));
      } catch (N) {
        eu(l, t, {
          then: function() {
          },
          status: "rejected",
          reason: N
        }, yt());
      } finally {
        H.p = n, c !== null && i.types !== null && (c.types = i.types), T.T = c;
      }
    }
    function Oy() {
    }
    function di(l, t, e, a) {
      if (l.tag !== 5) throw Error(r(476));
      var u = _r(l).queue;
      Ar(l, u, t, J, e === null ? Oy : function() {
        return Nr(l), e(a);
      });
    }
    function _r(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: J,
        baseState: J,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: J
        },
        next: null
      };
      var e = {};
      return t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: e
        },
        next: null
      }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
    }
    function Nr(l) {
      var t = _r(l);
      t.next === null && (t = l.alternate.memoizedState), eu(l, t.next.queue, {}, yt());
    }
    function yi() {
      return Ll(Su);
    }
    function Or() {
      return Ol().memoizedState;
    }
    function Mr() {
      return Ol().memoizedState;
    }
    function My(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var e = yt();
            l = ce(e);
            var a = ie(t, l, e);
            a !== null && (at(a, t, e), Fa(a, t, e)), t = {
              cache: Zc()
            }, l.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function Dy(l, t, e) {
      var a = yt();
      e = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, dn(l) ? jr(t, e) : (e = jc(l, t, e, a), e !== null && (at(e, l, a), Ur(e, t, a)));
    }
    function Dr(l, t, e) {
      var a = yt();
      eu(l, t, e, a);
    }
    function eu(l, t, e, a) {
      var u = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (dn(l)) jr(t, u);
      else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
          var c = t.lastRenderedState, i = n(c, e);
          if (u.hasEagerState = true, u.eagerState = i, it(i, c)) return Ku(l, t, u, 0), vl === null && Vu(), false;
        } catch {
        }
        if (e = jc(l, t, u, a), e !== null) return at(e, l, a), Ur(e, t, a), true;
      }
      return false;
    }
    function mi(l, t, e, a) {
      if (a = {
        lane: 2,
        revertLane: Ji(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, dn(l)) {
        if (t) throw Error(r(479));
      } else t = jc(l, e, a, 2), t !== null && at(t, l, 2);
    }
    function dn(l) {
      var t = l.alternate;
      return l === W || t !== null && t === W;
    }
    function jr(l, t) {
      ma = un = true;
      var e = l.pending;
      e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
    }
    function Ur(l, t, e) {
      if ((e & 4194048) !== 0) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, qf(l, e);
      }
    }
    var au = {
      readContext: Ll,
      use: fn,
      useCallback: zl,
      useContext: zl,
      useEffect: zl,
      useImperativeHandle: zl,
      useLayoutEffect: zl,
      useInsertionEffect: zl,
      useMemo: zl,
      useReducer: zl,
      useRef: zl,
      useState: zl,
      useDebugValue: zl,
      useDeferredValue: zl,
      useTransition: zl,
      useSyncExternalStore: zl,
      useId: zl,
      useHostTransitionStatus: zl,
      useFormState: zl,
      useActionState: zl,
      useOptimistic: zl,
      useMemoCache: zl,
      useCacheRefresh: zl
    };
    au.useEffectEvent = zl;
    var Rr = {
      readContext: Ll,
      use: fn,
      useCallback: function(l, t) {
        return $l().memoizedState = [
          l,
          t === void 0 ? null : t
        ], l;
      },
      useContext: Ll,
      useEffect: gr,
      useImperativeHandle: function(l, t, e) {
        e = e != null ? e.concat([
          l
        ]) : null, rn(4194308, 4, xr.bind(null, t, l), e);
      },
      useLayoutEffect: function(l, t) {
        return rn(4194308, 4, l, t);
      },
      useInsertionEffect: function(l, t) {
        rn(4, 2, l, t);
      },
      useMemo: function(l, t) {
        var e = $l();
        t = t === void 0 ? null : t;
        var a = l();
        if (Qe) {
          It(true);
          try {
            l();
          } finally {
            It(false);
          }
        }
        return e.memoizedState = [
          a,
          t
        ], a;
      },
      useReducer: function(l, t, e) {
        var a = $l();
        if (e !== void 0) {
          var u = e(t);
          if (Qe) {
            It(true);
            try {
              e(t);
            } finally {
              It(false);
            }
          }
        } else u = t;
        return a.memoizedState = a.baseState = u, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: u
        }, a.queue = l, l = l.dispatch = Dy.bind(null, W, l), [
          a.memoizedState,
          l
        ];
      },
      useRef: function(l) {
        var t = $l();
        return l = {
          current: l
        }, t.memoizedState = l;
      },
      useState: function(l) {
        l = ii(l);
        var t = l.queue, e = Dr.bind(null, W, t);
        return t.dispatch = e, [
          l.memoizedState,
          e
        ];
      },
      useDebugValue: ri,
      useDeferredValue: function(l, t) {
        var e = $l();
        return oi(e, l, t);
      },
      useTransition: function() {
        var l = ii(false);
        return l = Ar.bind(null, W, l.queue, true, false), $l().memoizedState = l, [
          false,
          l
        ];
      },
      useSyncExternalStore: function(l, t, e) {
        var a = W, u = $l();
        if (ul) {
          if (e === void 0) throw Error(r(407));
          e = e();
        } else {
          if (e = t(), vl === null) throw Error(r(349));
          (el & 127) !== 0 || lr(a, t, e);
        }
        u.memoizedState = e;
        var n = {
          value: e,
          getSnapshot: t
        };
        return u.queue = n, gr(er.bind(null, a, n, l), [
          l
        ]), a.flags |= 2048, ga(9, {
          destroy: void 0
        }, tr.bind(null, a, n, e, t), null), e;
      },
      useId: function() {
        var l = $l(), t = vl.identifierPrefix;
        if (ul) {
          var e = jt, a = Dt;
          e = (a & ~(1 << 32 - ct(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = nn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
        } else e = zy++, t = "_" + t + "r_" + e.toString(32) + "_";
        return l.memoizedState = t;
      },
      useHostTransitionStatus: yi,
      useFormState: or,
      useActionState: or,
      useOptimistic: function(l) {
        var t = $l();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = e, t = mi.bind(null, W, true, e), e.dispatch = t, [
          l,
          t
        ];
      },
      useMemoCache: ui,
      useCacheRefresh: function() {
        return $l().memoizedState = My.bind(null, W);
      },
      useEffectEvent: function(l) {
        var t = $l(), e = {
          impl: l
        };
        return t.memoizedState = e, function() {
          if ((il & 2) !== 0) throw Error(r(440));
          return e.impl.apply(void 0, arguments);
        };
      }
    }, hi = {
      readContext: Ll,
      use: fn,
      useCallback: Er,
      useContext: Ll,
      useEffect: si,
      useImperativeHandle: pr,
      useInsertionEffect: br,
      useLayoutEffect: Sr,
      useMemo: zr,
      useReducer: sn,
      useRef: hr,
      useState: function() {
        return sn(Zt);
      },
      useDebugValue: ri,
      useDeferredValue: function(l, t) {
        var e = Ol();
        return Tr(e, yl.memoizedState, l, t);
      },
      useTransition: function() {
        var l = sn(Zt)[0], t = Ol().memoizedState;
        return [
          typeof l == "boolean" ? l : tu(l),
          t
        ];
      },
      useSyncExternalStore: Ps,
      useId: Or,
      useHostTransitionStatus: yi,
      useFormState: dr,
      useActionState: dr,
      useOptimistic: function(l, t) {
        var e = Ol();
        return nr(e, yl, l, t);
      },
      useMemoCache: ui,
      useCacheRefresh: Mr
    };
    hi.useEffectEvent = vr;
    var Cr = {
      readContext: Ll,
      use: fn,
      useCallback: Er,
      useContext: Ll,
      useEffect: si,
      useImperativeHandle: pr,
      useInsertionEffect: br,
      useLayoutEffect: Sr,
      useMemo: zr,
      useReducer: ci,
      useRef: hr,
      useState: function() {
        return ci(Zt);
      },
      useDebugValue: ri,
      useDeferredValue: function(l, t) {
        var e = Ol();
        return yl === null ? oi(e, l, t) : Tr(e, yl.memoizedState, l, t);
      },
      useTransition: function() {
        var l = ci(Zt)[0], t = Ol().memoizedState;
        return [
          typeof l == "boolean" ? l : tu(l),
          t
        ];
      },
      useSyncExternalStore: Ps,
      useId: Or,
      useHostTransitionStatus: yi,
      useFormState: mr,
      useActionState: mr,
      useOptimistic: function(l, t) {
        var e = Ol();
        return yl !== null ? nr(e, yl, l, t) : (e.baseState = l, [
          l,
          e.queue.dispatch
        ]);
      },
      useMemoCache: ui,
      useCacheRefresh: Mr
    };
    Cr.useEffectEvent = vr;
    function gi(l, t, e, a) {
      t = l.memoizedState, e = e(a, t), e = e == null ? t : M({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
    }
    var vi = {
      enqueueSetState: function(l, t, e) {
        l = l._reactInternals;
        var a = yt(), u = ce(a);
        u.payload = t, e != null && (u.callback = e), t = ie(l, u, a), t !== null && (at(t, l, a), Fa(t, l, a));
      },
      enqueueReplaceState: function(l, t, e) {
        l = l._reactInternals;
        var a = yt(), u = ce(a);
        u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ie(l, u, a), t !== null && (at(t, l, a), Fa(t, l, a));
      },
      enqueueForceUpdate: function(l, t) {
        l = l._reactInternals;
        var e = yt(), a = ce(e);
        a.tag = 2, t != null && (a.callback = t), t = ie(l, a, e), t !== null && (at(t, l, e), Fa(t, l, e));
      }
    };
    function Hr(l, t, e, a, u, n, c) {
      return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !La(e, a) || !La(u, n) : true;
    }
    function Br(l, t, e, a) {
      l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && vi.enqueueReplaceState(t, t.state, null);
    }
    function Xe(l, t) {
      var e = t;
      if ("ref" in t) {
        e = {};
        for (var a in t) a !== "ref" && (e[a] = t[a]);
      }
      if (l = l.defaultProps) {
        e === t && (e = M({}, e));
        for (var u in l) e[u] === void 0 && (e[u] = l[u]);
      }
      return e;
    }
    function qr(l) {
      Lu(l);
    }
    function Yr(l) {
      console.error(l);
    }
    function Gr(l) {
      Lu(l);
    }
    function yn(l, t) {
      try {
        var e = l.onUncaughtError;
        e(t.value, {
          componentStack: t.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Qr(l, t, e) {
      try {
        var a = l.onCaughtError;
        a(e.value, {
          componentStack: e.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function bi(l, t, e) {
      return e = ce(e), e.tag = 3, e.payload = {
        element: null
      }, e.callback = function() {
        yn(l, t);
      }, e;
    }
    function Xr(l) {
      return l = ce(l), l.tag = 3, l;
    }
    function Zr(l, t, e, a) {
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var n = a.value;
        l.payload = function() {
          return u(n);
        }, l.callback = function() {
          Qr(t, e, a);
        };
      }
      var c = e.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
        Qr(t, e, a), typeof u != "function" && (ye === null ? ye = /* @__PURE__ */ new Set([
          this
        ]) : ye.add(this));
        var i = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: i !== null ? i : ""
        });
      });
    }
    function jy(l, t, e, a, u) {
      if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = e.alternate, t !== null && fa(t, e, u, true), e = st.current, e !== null) {
          switch (e.tag) {
            case 31:
            case 13:
              return zt === null ? An() : e.alternate === null && Tl === 0 && (Tl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Pu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : t.add(a), Li(l, a, u)), false;
            case 22:
              return e.flags |= 65536, a === Pu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a)), Li(l, a, u)), false;
          }
          throw Error(r(435, e.tag));
        }
        return Li(l, a, u), An(), false;
      }
      if (ul) return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== qc && (l = Error(r(422), {
        cause: a
      }), Ja(St(l, e)))) : (a !== qc && (t = Error(r(423), {
        cause: a
      }), Ja(St(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = St(a, e), u = bi(l.stateNode, a, u), kc(l, u), Tl !== 4 && (Tl = 2)), false;
      var n = Error(r(520), {
        cause: a
      });
      if (n = St(n, e), ou === null ? ou = [
        n
      ] : ou.push(n), Tl !== 4 && (Tl = 2), t === null) return true;
      a = St(a, e), e = t;
      do {
        switch (e.tag) {
          case 3:
            return e.flags |= 65536, l = u & -u, e.lanes |= l, l = bi(e.stateNode, a, l), kc(e, l), false;
          case 1:
            if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ye === null || !ye.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Xr(u), Zr(u, l, e, a), kc(e, u), false;
        }
        e = e.return;
      } while (e !== null);
      return false;
    }
    var Si = Error(r(461)), Ul = false;
    function Vl(l, t, e, a) {
      t.child = l === null ? Js(t, null, e, a) : Ge(t, l.child, e, a);
    }
    function Lr(l, t, e, a, u) {
      e = e.render;
      var n = t.ref;
      if ("ref" in a) {
        var c = {};
        for (var i in a) i !== "ref" && (c[i] = a[i]);
      } else c = a;
      return He(t), a = li(l, t, e, c, n, u), i = ti(), l !== null && !Ul ? (ei(l, t, u), Lt(l, t, u)) : (ul && i && Hc(t), t.flags |= 1, Vl(l, t, a, u), t.child);
    }
    function Vr(l, t, e, a, u) {
      if (l === null) {
        var n = e.type;
        return typeof n == "function" && !Uc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Kr(l, t, n, a, u)) : (l = wu(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
      }
      if (n = l.child, !Ni(l, u)) {
        var c = n.memoizedProps;
        if (e = e.compare, e = e !== null ? e : La, e(c, a) && l.ref === t.ref) return Lt(l, t, u);
      }
      return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
    }
    function Kr(l, t, e, a, u) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (La(n, a) && l.ref === t.ref) if (Ul = false, t.pendingProps = a = n, Ni(l, u)) (l.flags & 131072) !== 0 && (Ul = true);
        else return t.lanes = l.lanes, Lt(l, t, u);
      }
      return xi(l, t, e, a, u);
    }
    function Jr(l, t, e, a) {
      var u = a.children, n = l !== null ? l.memoizedState : null;
      if (l === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (n = n !== null ? n.baseLanes | e : e, l !== null) {
            for (a = t.child = l.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
            a = u & ~n;
          } else a = 0, t.child = null;
          return wr(l, t, n, e, a);
        }
        if ((e & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, l !== null && Fu(t, n !== null ? n.cachePool : null), n !== null ? $s(t, n) : Wc(), Ws(t);
        else return a = t.lanes = 536870912, wr(l, t, n !== null ? n.baseLanes | e : e, e, a);
      } else n !== null ? (Fu(t, n.cachePool), $s(t, n), se(), t.memoizedState = null) : (l !== null && Fu(t, null), Wc(), se());
      return Vl(l, t, u, e), t.child;
    }
    function uu(l, t) {
      return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function wr(l, t, e, a, u) {
      var n = Vc();
      return n = n === null ? null : {
        parent: Dl._currentValue,
        pool: n
      }, t.memoizedState = {
        baseLanes: e,
        cachePool: n
      }, l !== null && Fu(t, null), Wc(), Ws(t), l !== null && fa(l, t, a, true), t.childLanes = u, null;
    }
    function mn(l, t) {
      return t = gn({
        mode: t.mode,
        children: t.children
      }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
    }
    function kr(l, t, e) {
      return Ge(t, l.child, null, e), l = mn(t, t.pendingProps), l.flags |= 2, rt(t), t.memoizedState = null, l;
    }
    function Uy(l, t, e) {
      var a = t.pendingProps, u = (t.flags & 128) !== 0;
      if (t.flags &= -129, l === null) {
        if (ul) {
          if (a.mode === "hidden") return l = mn(t, a), t.lanes = 536870912, uu(null, l);
          if (Ic(t), (l = Sl) ? (l = i0(l, Et), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: te !== null ? {
              id: Dt,
              overflow: jt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = js(l), e.return = t, t.child = e, Zl = t, Sl = null)) : l = null, l === null) throw ae(t);
          return t.lanes = 536870912, null;
        }
        return mn(t, a);
      }
      var n = l.memoizedState;
      if (n !== null) {
        var c = n.dehydrated;
        if (Ic(t), u) if (t.flags & 256) t.flags &= -257, t = kr(l, t, e);
        else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
        else if (Ul || fa(l, t, e, false), u = (e & l.childLanes) !== 0, Ul || u) {
          if (a = vl, a !== null && (c = Yf(a, e), c !== 0 && c !== n.retryLane)) throw n.retryLane = c, je(l, c), at(a, l, c), Si;
          An(), t = kr(l, t, e);
        } else l = n.treeContext, Sl = Tt(c.nextSibling), Zl = t, ul = true, ee = null, Et = false, l !== null && Cs(t, l), t = mn(t, a), t.flags |= 4096;
        return t;
      }
      return l = qt(l.child, {
        mode: a.mode,
        children: a.children
      }), l.ref = t.ref, t.child = l, l.return = t, l;
    }
    function hn(l, t) {
      var e = t.ref;
      if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(r(284));
        (l === null || l.ref !== e) && (t.flags |= 4194816);
      }
    }
    function xi(l, t, e, a, u) {
      return He(t), e = li(l, t, e, a, void 0, u), a = ti(), l !== null && !Ul ? (ei(l, t, u), Lt(l, t, u)) : (ul && a && Hc(t), t.flags |= 1, Vl(l, t, e, u), t.child);
    }
    function $r(l, t, e, a, u, n) {
      return He(t), t.updateQueue = null, e = Is(t, a, e, u), Fs(l), a = ti(), l !== null && !Ul ? (ei(l, t, n), Lt(l, t, n)) : (ul && a && Hc(t), t.flags |= 1, Vl(l, t, e, n), t.child);
    }
    function Wr(l, t, e, a, u) {
      if (He(t), t.stateNode === null) {
        var n = ua, c = e.contextType;
        typeof c == "object" && c !== null && (n = Ll(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Jc(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? Ll(c) : ua, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (gi(t, e, c, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && vi.enqueueReplaceState(n, n.state, null), Pa(t, a, n, u), Ia(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (l === null) {
        n = t.stateNode;
        var i = t.memoizedProps, s = Xe(e, i);
        n.props = s;
        var b = n.context, z = e.contextType;
        c = ua, typeof z == "object" && z !== null && (c = Ll(z));
        var N = e.getDerivedStateFromProps;
        z = typeof N == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, z || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || b !== c) && Br(t, n, a, c), ne = false;
        var x = t.memoizedState;
        n.state = x, Pa(t, a, n, u), Ia(), b = t.memoizedState, i || x !== b || ne ? (typeof N == "function" && (gi(t, e, N, a), b = t.memoizedState), (s = ne || Hr(t, e, s, a, x, b, c)) ? (z || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = b), n.props = a, n.state = b, n.context = c, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        n = t.stateNode, wc(l, t), c = t.memoizedProps, z = Xe(e, c), n.props = z, N = t.pendingProps, x = n.context, b = e.contextType, s = ua, typeof b == "object" && b !== null && (s = Ll(b)), i = e.getDerivedStateFromProps, (b = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== N || x !== s) && Br(t, n, a, s), ne = false, x = t.memoizedState, n.state = x, Pa(t, a, n, u), Ia();
        var p = t.memoizedState;
        c !== N || x !== p || ne || l !== null && l.dependencies !== null && $u(l.dependencies) ? (typeof i == "function" && (gi(t, e, i, a), p = t.memoizedState), (z = ne || Hr(t, e, z, a, x, p, s) || l !== null && l.dependencies !== null && $u(l.dependencies)) ? (b || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, p, s)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && x === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && x === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), n.props = a, n.state = p, n.context = s, a = z) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && x === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && x === l.memoizedState || (t.flags |= 1024), a = false);
      }
      return n = a, hn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ge(t, l.child, null, u), t.child = Ge(t, null, e, u)) : Vl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Lt(l, t, u), l;
    }
    function Fr(l, t, e, a) {
      return Re(), t.flags |= 256, Vl(l, t, e, a), t.child;
    }
    var pi = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Ei(l) {
      return {
        baseLanes: l,
        cachePool: Qs()
      };
    }
    function zi(l, t, e) {
      return l = l !== null ? l.childLanes & ~e : 0, t && (l |= dt), l;
    }
    function Ir(l, t, e) {
      var a = t.pendingProps, u = false, n = (t.flags & 128) !== 0, c;
      if ((c = n) || (c = l !== null && l.memoizedState === null ? false : (Nl.current & 2) !== 0), c && (u = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
        if (ul) {
          if (u ? fe(t) : se(), (l = Sl) ? (l = i0(l, Et), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: te !== null ? {
              id: Dt,
              overflow: jt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = js(l), e.return = t, t.child = e, Zl = t, Sl = null)) : l = null, l === null) throw ae(t);
          return nf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var i = a.children;
        return a = a.fallback, u ? (se(), u = t.mode, i = gn({
          mode: "hidden",
          children: i
        }, u), a = Ue(a, u, e, null), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = Ei(e), a.childLanes = zi(l, c, e), t.memoizedState = pi, uu(null, a)) : (fe(t), Ti(t, i));
      }
      var s = l.memoizedState;
      if (s !== null && (i = s.dehydrated, i !== null)) {
        if (n) t.flags & 256 ? (fe(t), t.flags &= -257, t = Ai(l, t, e)) : t.memoizedState !== null ? (se(), t.child = l.child, t.flags |= 128, t = null) : (se(), i = a.fallback, u = t.mode, a = gn({
          mode: "visible",
          children: a.children
        }, u), i = Ue(i, u, e, null), i.flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, Ge(t, l.child, null, e), a = t.child, a.memoizedState = Ei(e), a.childLanes = zi(l, c, e), t.memoizedState = pi, t = uu(null, a));
        else if (fe(t), nf(i)) {
          if (c = i.nextSibling && i.nextSibling.dataset, c) var b = c.dgst;
          c = b, a = Error(r(419)), a.stack = "", a.digest = c, Ja({
            value: a,
            source: null,
            stack: null
          }), t = Ai(l, t, e);
        } else if (Ul || fa(l, t, e, false), c = (e & l.childLanes) !== 0, Ul || c) {
          if (c = vl, c !== null && (a = Yf(c, e), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, je(l, a), at(c, l, a), Si;
          uf(i) || An(), t = Ai(l, t, e);
        } else uf(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, Sl = Tt(i.nextSibling), Zl = t, ul = true, ee = null, Et = false, l !== null && Cs(t, l), t = Ti(t, a.children), t.flags |= 4096);
        return t;
      }
      return u ? (se(), i = a.fallback, u = t.mode, s = l.child, b = s.sibling, a = qt(s, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = s.subtreeFlags & 65011712, b !== null ? i = qt(b, i) : (i = Ue(i, u, e, null), i.flags |= 2), i.return = t, a.return = t, a.sibling = i, t.child = a, uu(null, a), a = t.child, i = l.child.memoizedState, i === null ? i = Ei(e) : (u = i.cachePool, u !== null ? (s = Dl._currentValue, u = u.parent !== s ? {
        parent: s,
        pool: s
      } : u) : u = Qs(), i = {
        baseLanes: i.baseLanes | e,
        cachePool: u
      }), a.memoizedState = i, a.childLanes = zi(l, c, e), t.memoizedState = pi, uu(l.child, a)) : (fe(t), e = l.child, l = e.sibling, e = qt(e, {
        mode: "visible",
        children: a.children
      }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [
        l
      ], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e);
    }
    function Ti(l, t) {
      return t = gn({
        mode: "visible",
        children: t
      }, l.mode), t.return = l, l.child = t;
    }
    function gn(l, t) {
      return l = ft(22, l, null, t), l.lanes = 0, l;
    }
    function Ai(l, t, e) {
      return Ge(t, l.child, null, e), l = Ti(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
    }
    function Pr(l, t, e) {
      l.lanes |= t;
      var a = l.alternate;
      a !== null && (a.lanes |= t), Qc(l.return, t, e);
    }
    function _i(l, t, e, a, u, n) {
      var c = l.memoizedState;
      c === null ? l.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: e,
        tailMode: u,
        treeForkCount: n
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
    }
    function lo(l, t, e) {
      var a = t.pendingProps, u = a.revealOrder, n = a.tail;
      a = a.children;
      var c = Nl.current, i = (c & 2) !== 0;
      if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, B(Nl, c), Vl(l, t, a, e), a = ul ? Ka : 0, !i && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Pr(l, e, t);
        else if (l.tag === 19) Pr(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      switch (u) {
        case "forwards":
          for (e = t.child, u = null; e !== null; ) l = e.alternate, l !== null && an(l) === null && (u = e), e = e.sibling;
          e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), _i(t, false, u, e, n, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (e = null, u = t.child, t.child = null; u !== null; ) {
            if (l = u.alternate, l !== null && an(l) === null) {
              t.child = u;
              break;
            }
            l = u.sibling, u.sibling = e, e = u, u = l;
          }
          _i(t, true, e, null, n, a);
          break;
        case "together":
          _i(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Lt(l, t, e) {
      if (l !== null && (t.dependencies = l.dependencies), de |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
        if (fa(l, t, e, false), (e & t.childLanes) === 0) return null;
      } else return null;
      if (l !== null && t.child !== l.child) throw Error(r(153));
      if (t.child !== null) {
        for (l = t.child, e = qt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) l = l.sibling, e = e.sibling = qt(l, l.pendingProps), e.return = t;
        e.sibling = null;
      }
      return t.child;
    }
    function Ni(l, t) {
      return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && $u(l)));
    }
    function Ry(l, t, e) {
      switch (t.tag) {
        case 3:
          kl(t, t.stateNode.containerInfo), ue(t, Dl, l.memoizedState.cache), Re();
          break;
        case 27:
        case 5:
          Da(t);
          break;
        case 4:
          kl(t, t.stateNode.containerInfo);
          break;
        case 10:
          ue(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, Ic(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (fe(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Ir(l, t, e) : (fe(t), l = Lt(l, t, e), l !== null ? l.sibling : null);
          fe(t);
          break;
        case 19:
          var u = (l.flags & 128) !== 0;
          if (a = (e & t.childLanes) !== 0, a || (fa(l, t, e, false), a = (e & t.childLanes) !== 0), u) {
            if (a) return lo(l, t, e);
            t.flags |= 128;
          }
          if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), B(Nl, Nl.current), a) break;
          return null;
        case 22:
          return t.lanes = 0, Jr(l, t, e, t.pendingProps);
        case 24:
          ue(t, Dl, l.memoizedState.cache);
      }
      return Lt(l, t, e);
    }
    function to(l, t, e) {
      if (l !== null) if (l.memoizedProps !== t.pendingProps) Ul = true;
      else {
        if (!Ni(l, e) && (t.flags & 128) === 0) return Ul = false, Ry(l, t, e);
        Ul = (l.flags & 131072) !== 0;
      }
      else Ul = false, ul && (t.flags & 1048576) !== 0 && Rs(t, Ka, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          l: {
            var a = t.pendingProps;
            if (l = qe(t.elementType), t.type = l, typeof l == "function") Uc(l) ? (a = Xe(l, a), t.tag = 1, t = Wr(null, t, l, a, e)) : (t.tag = 0, t = xi(null, t, l, a, e));
            else {
              if (l != null) {
                var u = l.$$typeof;
                if (u === Al) {
                  t.tag = 11, t = Lr(null, t, l, a, e);
                  break l;
                } else if (u === X) {
                  t.tag = 14, t = Vr(null, t, l, a, e);
                  break l;
                }
              }
              throw t = ht(l) || l, Error(r(306, t, ""));
            }
          }
          return t;
        case 0:
          return xi(l, t, t.type, t.pendingProps, e);
        case 1:
          return a = t.type, u = Xe(a, t.pendingProps), Wr(l, t, a, u, e);
        case 3:
          l: {
            if (kl(t, t.stateNode.containerInfo), l === null) throw Error(r(387));
            a = t.pendingProps;
            var n = t.memoizedState;
            u = n.element, wc(l, t), Pa(t, a, null, e);
            var c = t.memoizedState;
            if (a = c.cache, ue(t, Dl, a), a !== n.cache && Xc(t, [
              Dl
            ], e, true), Ia(), a = c.element, n.isDehydrated) if (n = {
              element: a,
              isDehydrated: false,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Fr(l, t, a, e);
              break l;
            } else if (a !== u) {
              u = St(Error(r(424)), t), Ja(u), t = Fr(l, t, a, e);
              break l;
            } else for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Sl = Tt(l.firstChild), Zl = t, ul = true, ee = null, Et = true, e = Js(t, null, a, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (Re(), a === u) {
                t = Lt(l, t, e);
                break l;
              }
              Vl(l, t, a, e);
            }
            t = t.child;
          }
          return t;
        case 26:
          return hn(l, t), l === null ? (e = y0(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : ul || (e = t.type, l = t.pendingProps, a = Un(P.current).createElement(e), a[Xl] = t, a[Fl] = l, Kl(a, e, l), Yl(a), t.stateNode = a) : t.memoizedState = y0(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
          return Da(t), l === null && ul && (a = t.stateNode = r0(t.type, t.pendingProps, P.current), Zl = t, Et = true, u = Sl, ve(t.type) ? (cf = u, Sl = Tt(a.firstChild)) : Sl = u), Vl(l, t, t.pendingProps.children, e), hn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
          return l === null && ul && ((u = a = Sl) && (a = sm(a, t.type, t.pendingProps, Et), a !== null ? (t.stateNode = a, Zl = t, Sl = Tt(a.firstChild), Et = false, u = true) : u = false), u || ae(t)), Da(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, tf(u, n) ? a = null : c !== null && tf(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = li(l, t, Ty, null, null, e), Su._currentValue = u), hn(l, t), Vl(l, t, a, e), t.child;
        case 6:
          return l === null && ul && ((l = e = Sl) && (e = rm(e, t.pendingProps, Et), e !== null ? (t.stateNode = e, Zl = t, Sl = null, l = true) : l = false), l || ae(t)), null;
        case 13:
          return Ir(l, t, e);
        case 4:
          return kl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Ge(t, null, a, e) : Vl(l, t, a, e), t.child;
        case 11:
          return Lr(l, t, t.type, t.pendingProps, e);
        case 7:
          return Vl(l, t, t.pendingProps, e), t.child;
        case 8:
          return Vl(l, t, t.pendingProps.children, e), t.child;
        case 12:
          return Vl(l, t, t.pendingProps.children, e), t.child;
        case 10:
          return a = t.pendingProps, ue(t, t.type, a.value), Vl(l, t, a.children, e), t.child;
        case 9:
          return u = t.type._context, a = t.pendingProps.children, He(t), u = Ll(u), a = a(u), t.flags |= 1, Vl(l, t, a, e), t.child;
        case 14:
          return Vr(l, t, t.type, t.pendingProps, e);
        case 15:
          return Kr(l, t, t.type, t.pendingProps, e);
        case 19:
          return lo(l, t, e);
        case 31:
          return Uy(l, t, e);
        case 22:
          return Jr(l, t, e, t.pendingProps);
        case 24:
          return He(t), a = Ll(Dl), l === null ? (u = Vc(), u === null && (u = vl, n = Zc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = {
            parent: a,
            cache: u
          }, Jc(t), ue(t, Dl, u)) : ((l.lanes & e) !== 0 && (wc(l, t), Pa(t, null, null, e), Ia()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = {
            parent: a,
            cache: a
          }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ue(t, Dl, a)) : (a = n.cache, ue(t, Dl, a), a !== u.cache && Xc(t, [
            Dl
          ], e, true))), Vl(l, t, t.pendingProps.children, e), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(r(156, t.tag));
    }
    function Vt(l) {
      l.flags |= 4;
    }
    function Oi(l, t, e, a, u) {
      if ((t = (l.mode & 32) !== 0) && (t = false), t) {
        if (l.flags |= 16777216, (u & 335544128) === u) if (l.stateNode.complete) l.flags |= 8192;
        else if (Mo()) l.flags |= 8192;
        else throw Ye = Pu, Kc;
      } else l.flags &= -16777217;
    }
    function eo(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (l.flags |= 16777216, !b0(t)) if (Mo()) l.flags |= 8192;
      else throw Ye = Pu, Kc;
    }
    function vn(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Hf() : 536870912, l.lanes |= t, xa |= t);
    }
    function nu(l, t) {
      if (!ul) switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; ) t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
    }
    function xl(l) {
      var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
      if (t) for (var u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
      else for (u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
      return l.subtreeFlags |= a, l.childLanes = e, t;
    }
    function Cy(l, t, e) {
      var a = t.pendingProps;
      switch (Bc(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return xl(t), null;
        case 1:
          return xl(t), null;
        case 3:
          return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qt(Dl), _l(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (ia(t) ? Vt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yc())), xl(t), null;
        case 26:
          var u = t.type, n = t.memoizedState;
          return l === null ? (Vt(t), n !== null ? (xl(t), eo(t, n)) : (xl(t), Oi(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Vt(t), xl(t), eo(t, n)) : (xl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Vt(t), xl(t), Oi(t, u, l, a, e)), null;
        case 27:
          if (Nu(t), e = P.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Vt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return xl(t), null;
            }
            l = Y.current, ia(t) ? Hs(t) : (l = r0(u, a, e), t.stateNode = l, Vt(t));
          }
          return xl(t), null;
        case 5:
          if (Nu(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Vt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return xl(t), null;
            }
            if (n = Y.current, ia(t)) Hs(t);
            else {
              var c = Un(P.current);
              switch (n) {
                case 1:
                  n = c.createElementNS("http://www.w3.org/2000/svg", u);
                  break;
                case 2:
                  n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                  break;
                default:
                  switch (u) {
                    case "svg":
                      n = c.createElementNS("http://www.w3.org/2000/svg", u);
                      break;
                    case "math":
                      n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                      break;
                    case "script":
                      n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                      break;
                    case "select":
                      n = typeof a.is == "string" ? c.createElement("select", {
                        is: a.is
                      }) : c.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                      break;
                    default:
                      n = typeof a.is == "string" ? c.createElement(u, {
                        is: a.is
                      }) : c.createElement(u);
                  }
              }
              n[Xl] = t, n[Fl] = a;
              l: for (c = t.child; c !== null; ) {
                if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
                else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                  c.child.return = c, c = c.child;
                  continue;
                }
                if (c === t) break l;
                for (; c.sibling === null; ) {
                  if (c.return === null || c.return === t) break l;
                  c = c.return;
                }
                c.sibling.return = c.return, c = c.sibling;
              }
              t.stateNode = n;
              l: switch (Kl(n, u, a), u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break l;
                case "img":
                  a = true;
                  break l;
                default:
                  a = false;
              }
              a && Vt(t);
            }
          }
          return xl(t), Oi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== a && Vt(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
            if (l = P.current, ia(t)) {
              if (l = t.stateNode, e = t.memoizedProps, a = null, u = Zl, u !== null) switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
              l[Xl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === true || Po(l.nodeValue, e)), l || ae(t, true);
            } else l = Un(l).createTextNode(a), l[Xl] = t, t.stateNode = l;
          }
          return xl(t), null;
        case 31:
          if (e = t.memoizedState, l === null || l.memoizedState !== null) {
            if (a = ia(t), e !== null) {
              if (l === null) {
                if (!a) throw Error(r(318));
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
                l[Xl] = t;
              } else Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              xl(t), l = false;
            } else e = Yc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = true;
            if (!l) return t.flags & 256 ? (rt(t), t) : (rt(t), null);
            if ((t.flags & 128) !== 0) throw Error(r(558));
          }
          return xl(t), null;
        case 13:
          if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
            if (u = ia(t), a !== null && a.dehydrated !== null) {
              if (l === null) {
                if (!u) throw Error(r(318));
                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
                u[Xl] = t;
              } else Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              xl(t), u = false;
            } else u = Yc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = true;
            if (!u) return t.flags & 256 ? (rt(t), t) : (rt(t), null);
          }
          return rt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), vn(t, t.updateQueue), xl(t), null);
        case 4:
          return _l(), l === null && Wi(t.stateNode.containerInfo), xl(t), null;
        case 10:
          return Qt(t.type), xl(t), null;
        case 19:
          if (O(Nl), a = t.memoizedState, a === null) return xl(t), null;
          if (u = (t.flags & 128) !== 0, n = a.rendering, n === null) if (u) nu(a, false);
          else {
            if (Tl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
              if (n = an(l), n !== null) {
                for (t.flags |= 128, nu(a, false), l = n.updateQueue, t.updateQueue = l, vn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) Ds(e, l), e = e.sibling;
                return B(Nl, Nl.current & 1 | 2), ul && Yt(t, a.treeForkCount), t.child;
              }
              l = l.sibling;
            }
            a.tail !== null && ut() > En && (t.flags |= 128, u = true, nu(a, false), t.lanes = 4194304);
          }
          else {
            if (!u) if (l = an(n), l !== null) {
              if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, vn(t, l), nu(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ul) return xl(t), null;
            } else 2 * ut() - a.renderingStartTime > En && e !== 536870912 && (t.flags |= 128, u = true, nu(a, false), t.lanes = 4194304);
            a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
          }
          return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ut(), l.sibling = null, e = Nl.current, B(Nl, u ? e & 1 | 2 : e & 1), ul && Yt(t, a.treeForkCount), l) : (xl(t), null);
        case 22:
        case 23:
          return rt(t), Fc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (xl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xl(t), e = t.updateQueue, e !== null && vn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && O(Be), null;
        case 24:
          return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Qt(Dl), xl(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function Hy(l, t) {
      switch (Bc(t), t.tag) {
        case 1:
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
          return Qt(Dl), _l(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Nu(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (rt(t), t.alternate === null) throw Error(r(340));
            Re();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 13:
          if (rt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
            if (t.alternate === null) throw Error(r(340));
            Re();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
          return O(Nl), null;
        case 4:
          return _l(), null;
        case 10:
          return Qt(t.type), null;
        case 22:
        case 23:
          return rt(t), Fc(), l !== null && O(Be), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
          return Qt(Dl), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ao(l, t) {
      switch (Bc(t), t.tag) {
        case 3:
          Qt(Dl), _l();
          break;
        case 26:
        case 27:
        case 5:
          Nu(t);
          break;
        case 4:
          _l();
          break;
        case 31:
          t.memoizedState !== null && rt(t);
          break;
        case 13:
          rt(t);
          break;
        case 19:
          O(Nl);
          break;
        case 10:
          Qt(t.type);
          break;
        case 22:
        case 23:
          rt(t), Fc(), l !== null && O(Be);
          break;
        case 24:
          Qt(Dl);
      }
    }
    function cu(l, t) {
      try {
        var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
        if (a !== null) {
          var u = a.next;
          e = u;
          do {
            if ((e.tag & l) === l) {
              a = void 0;
              var n = e.create, c = e.inst;
              a = n(), c.destroy = a;
            }
            e = e.next;
          } while (e !== u);
        }
      } catch (i) {
        ol(t, t.return, i);
      }
    }
    function re(l, t, e) {
      try {
        var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
        if (u !== null) {
          var n = u.next;
          a = n;
          do {
            if ((a.tag & l) === l) {
              var c = a.inst, i = c.destroy;
              if (i !== void 0) {
                c.destroy = void 0, u = t;
                var s = e, b = i;
                try {
                  b();
                } catch (z) {
                  ol(u, s, z);
                }
              }
            }
            a = a.next;
          } while (a !== n);
        }
      } catch (z) {
        ol(t, t.return, z);
      }
    }
    function uo(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var e = l.stateNode;
        try {
          ks(t, e);
        } catch (a) {
          ol(l, l.return, a);
        }
      }
    }
    function no(l, t, e) {
      e.props = Xe(l.type, l.memoizedProps), e.state = l.memoizedState;
      try {
        e.componentWillUnmount();
      } catch (a) {
        ol(l, t, a);
      }
    }
    function iu(l, t) {
      try {
        var e = l.ref;
        if (e !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var a = l.stateNode;
              break;
            case 30:
              a = l.stateNode;
              break;
            default:
              a = l.stateNode;
          }
          typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
        }
      } catch (u) {
        ol(l, t, u);
      }
    }
    function Ut(l, t) {
      var e = l.ref, a = l.refCleanup;
      if (e !== null) if (typeof a == "function") try {
        a();
      } catch (u) {
        ol(l, t, u);
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
      }
      else if (typeof e == "function") try {
        e(null);
      } catch (u) {
        ol(l, t, u);
      }
      else e.current = null;
    }
    function co(l) {
      var t = l.type, e = l.memoizedProps, a = l.stateNode;
      try {
        l: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            e.autoFocus && a.focus();
            break l;
          case "img":
            e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
        }
      } catch (u) {
        ol(l, l.return, u);
      }
    }
    function Mi(l, t, e) {
      try {
        var a = l.stateNode;
        am(a, l.type, e, t), a[Fl] = t;
      } catch (u) {
        ol(l, l.return, u);
      }
    }
    function io(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ve(l.type) || l.tag === 4;
    }
    function Di(l) {
      l: for (; ; ) {
        for (; l.sibling === null; ) {
          if (l.return === null || io(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if (l.tag === 27 && ve(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          l.child.return = l, l = l.child;
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function ji(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Ht));
      else if (a !== 4 && (a === 27 && ve(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (ji(l, t, e), l = l.sibling; l !== null; ) ji(l, t, e), l = l.sibling;
    }
    function bn(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
      else if (a !== 4 && (a === 27 && ve(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (bn(l, t, e), l = l.sibling; l !== null; ) bn(l, t, e), l = l.sibling;
    }
    function fo(l) {
      var t = l.stateNode, e = l.memoizedProps;
      try {
        for (var a = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
        Kl(t, a, e), t[Xl] = l, t[Fl] = e;
      } catch (n) {
        ol(l, l.return, n);
      }
    }
    var Kt = false, Rl = false, Ui = false, so = typeof WeakSet == "function" ? WeakSet : Set, Gl = null;
    function By(l, t) {
      if (l = l.containerInfo, Pi = Gn, l = ps(l), Ac(l)) {
        if ("selectionStart" in l) var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
        else l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var c = 0, i = -1, s = -1, b = 0, z = 0, N = l, x = null;
            t: for (; ; ) {
              for (var p; N !== e || u !== 0 && N.nodeType !== 3 || (i = c + u), N !== n || a !== 0 && N.nodeType !== 3 || (s = c + a), N.nodeType === 3 && (c += N.nodeValue.length), (p = N.firstChild) !== null; ) x = N, N = p;
              for (; ; ) {
                if (N === l) break t;
                if (x === e && ++b === u && (i = c), x === n && ++z === a && (s = c), (p = N.nextSibling) !== null) break;
                N = x, x = N.parentNode;
              }
              N = p;
            }
            e = i === -1 || s === -1 ? null : {
              start: i,
              end: s
            };
          } else e = null;
        }
        e = e || {
          start: 0,
          end: 0
        };
      } else e = null;
      for (lf = {
        focusedElem: l,
        selectionRange: e
      }, Gn = false, Gl = t; Gl !== null; ) if (t = Gl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Gl = l;
      else for (; Gl !== null; ) {
        switch (t = Gl, n = t.alternate, l = t.flags, t.tag) {
          case 0:
            if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (e = 0; e < l.length; e++) u = l[e], u.ref.impl = u.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((l & 1024) !== 0 && n !== null) {
              l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
              try {
                var q = Xe(e.type, u);
                l = a.getSnapshotBeforeUpdate(q, n), a.__reactInternalSnapshotBeforeUpdate = l;
              } catch (L) {
                ol(e, e.return, L);
              }
            }
            break;
          case 3:
            if ((l & 1024) !== 0) {
              if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) af(l);
              else if (e === 1) switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  af(l);
                  break;
                default:
                  l.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((l & 1024) !== 0) throw Error(r(163));
        }
        if (l = t.sibling, l !== null) {
          l.return = t.return, Gl = l;
          break;
        }
        Gl = t.return;
      }
    }
    function ro(l, t, e) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          wt(l, e), a & 4 && cu(5, e);
          break;
        case 1:
          if (wt(l, e), a & 4) if (l = e.stateNode, t === null) try {
            l.componentDidMount();
          } catch (c) {
            ol(e, e.return, c);
          }
          else {
            var u = Xe(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ol(e, e.return, c);
            }
          }
          a & 64 && uo(e), a & 512 && iu(e, e.return);
          break;
        case 3:
          if (wt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
            if (t = null, e.child !== null) switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
            try {
              ks(l, t);
            } catch (c) {
              ol(e, e.return, c);
            }
          }
          break;
        case 27:
          t === null && a & 4 && fo(e);
        case 26:
        case 5:
          wt(l, e), t === null && a & 4 && co(e), a & 512 && iu(e, e.return);
          break;
        case 12:
          wt(l, e);
          break;
        case 31:
          wt(l, e), a & 4 && mo(l, e);
          break;
        case 13:
          wt(l, e), a & 4 && ho(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Ky.bind(null, e), om(l, e))));
          break;
        case 22:
          if (a = e.memoizedState !== null || Kt, !a) {
            t = t !== null && t.memoizedState !== null || Rl, u = Kt;
            var n = Rl;
            Kt = a, (Rl = t) && !n ? kt(l, e, (e.subtreeFlags & 8772) !== 0) : wt(l, e), Kt = u, Rl = n;
          }
          break;
        case 30:
          break;
        default:
          wt(l, e);
      }
    }
    function oo(l) {
      var t = l.alternate;
      t !== null && (l.alternate = null, oo(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && fc(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
    }
    var pl = null, Pl = false;
    function Jt(l, t, e) {
      for (e = e.child; e !== null; ) yo(l, t, e), e = e.sibling;
    }
    function yo(l, t, e) {
      if (nt && typeof nt.onCommitFiberUnmount == "function") try {
        nt.onCommitFiberUnmount(ja, e);
      } catch {
      }
      switch (e.tag) {
        case 26:
          Rl || Ut(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Rl || Ut(e, t);
          var a = pl, u = Pl;
          ve(e.type) && (pl = e.stateNode, Pl = false), Jt(l, t, e), gu(e.stateNode), pl = a, Pl = u;
          break;
        case 5:
          Rl || Ut(e, t);
        case 6:
          if (a = pl, u = Pl, pl = null, Jt(l, t, e), pl = a, Pl = u, pl !== null) if (Pl) try {
            (pl.nodeType === 9 ? pl.body : pl.nodeName === "HTML" ? pl.ownerDocument.body : pl).removeChild(e.stateNode);
          } catch (n) {
            ol(e, t, n);
          }
          else try {
            pl.removeChild(e.stateNode);
          } catch (n) {
            ol(e, t, n);
          }
          break;
        case 18:
          pl !== null && (Pl ? (l = pl, n0(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Oa(l)) : n0(pl, e.stateNode));
          break;
        case 4:
          a = pl, u = Pl, pl = e.stateNode.containerInfo, Pl = true, Jt(l, t, e), pl = a, Pl = u;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          re(2, e, t), Rl || re(4, e, t), Jt(l, t, e);
          break;
        case 1:
          Rl || (Ut(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && no(e, t, a)), Jt(l, t, e);
          break;
        case 21:
          Jt(l, t, e);
          break;
        case 22:
          Rl = (a = Rl) || e.memoizedState !== null, Jt(l, t, e), Rl = a;
          break;
        default:
          Jt(l, t, e);
      }
    }
    function mo(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
        l = l.dehydrated;
        try {
          Oa(l);
        } catch (e) {
          ol(t, t.return, e);
        }
      }
    }
    function ho(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
        Oa(l);
      } catch (e) {
        ol(t, t.return, e);
      }
    }
    function qy(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new so()), t;
        case 22:
          return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new so()), t;
        default:
          throw Error(r(435, l.tag));
      }
    }
    function Sn(l, t) {
      var e = qy(l);
      t.forEach(function(a) {
        if (!e.has(a)) {
          e.add(a);
          var u = Jy.bind(null, l, a);
          a.then(u, u);
        }
      });
    }
    function lt(l, t) {
      var e = t.deletions;
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, c = t, i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (ve(i.type)) {
                pl = i.stateNode, Pl = false;
                break l;
              }
              break;
            case 5:
              pl = i.stateNode, Pl = false;
              break l;
            case 3:
            case 4:
              pl = i.stateNode.containerInfo, Pl = true;
              break l;
          }
          i = i.return;
        }
        if (pl === null) throw Error(r(160));
        yo(n, c, u), pl = null, Pl = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) go(t, l), t = t.sibling;
    }
    var Ot = null;
    function go(l, t) {
      var e = l.alternate, a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          lt(t, l), tt(l), a & 4 && (re(3, l, l.return), cu(3, l), re(5, l, l.return));
          break;
        case 1:
          lt(t, l), tt(l), a & 512 && (Rl || e === null || Ut(e, e.return)), a & 64 && Kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
          break;
        case 26:
          var u = Ot;
          if (lt(t, l), tt(l), a & 512 && (Rl || e === null || Ut(e, e.return)), a & 4) {
            var n = e !== null ? e.memoizedState : null;
            if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
              l: {
                a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                t: switch (a) {
                  case "title":
                    n = u.getElementsByTagName("title")[0], (!n || n[Ca] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Kl(n, a, e), n[Xl] = l, Yl(n), a = n;
                    break l;
                  case "link":
                    var c = g0("link", "href", u).get(a + (e.href || ""));
                    if (c) {
                      for (var i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                        c.splice(i, 1);
                        break t;
                      }
                    }
                    n = u.createElement(a), Kl(n, a, e), u.head.appendChild(n);
                    break;
                  case "meta":
                    if (c = g0("meta", "content", u).get(a + (e.content || ""))) {
                      for (i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                        c.splice(i, 1);
                        break t;
                      }
                    }
                    n = u.createElement(a), Kl(n, a, e), u.head.appendChild(n);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                n[Xl] = l, Yl(n), a = n;
              }
              l.stateNode = a;
            } else v0(u, l.type, l.stateNode);
            else l.stateNode = h0(u, a, l.memoizedProps);
            else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? v0(u, l.type, l.stateNode) : h0(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Mi(l, l.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          lt(t, l), tt(l), a & 512 && (Rl || e === null || Ut(e, e.return)), e !== null && a & 4 && Mi(l, l.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if (lt(t, l), tt(l), a & 512 && (Rl || e === null || Ut(e, e.return)), l.flags & 32) {
            u = l.stateNode;
            try {
              Fe(u, "");
            } catch (q) {
              ol(l, l.return, q);
            }
          }
          a & 4 && l.stateNode != null && (u = l.memoizedProps, Mi(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Ui = true);
          break;
        case 6:
          if (lt(t, l), tt(l), a & 4) {
            if (l.stateNode === null) throw Error(r(162));
            a = l.memoizedProps, e = l.stateNode;
            try {
              e.nodeValue = a;
            } catch (q) {
              ol(l, l.return, q);
            }
          }
          break;
        case 3:
          if (Hn = null, u = Ot, Ot = Rn(t.containerInfo), lt(t, l), Ot = u, tt(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
            Oa(t.containerInfo);
          } catch (q) {
            ol(l, l.return, q);
          }
          Ui && (Ui = false, vo(l));
          break;
        case 4:
          a = Ot, Ot = Rn(l.stateNode.containerInfo), lt(t, l), tt(l), Ot = a;
          break;
        case 12:
          lt(t, l), tt(l);
          break;
        case 31:
          lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
          break;
        case 13:
          lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (pn = ut()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
          break;
        case 22:
          u = l.memoizedState !== null;
          var s = e !== null && e.memoizedState !== null, b = Kt, z = Rl;
          if (Kt = b || u, Rl = z || s, lt(t, l), Rl = z, Kt = b, tt(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || Kt || Rl || Ze(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    i = s.stateNode;
                    var N = s.memoizedProps.style, x = N != null && N.hasOwnProperty("display") ? N.display : null;
                    i.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (q) {
                  ol(s, s.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (q) {
                  ol(s, s.return, q);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  u ? c0(p, true) : c0(s.stateNode, false);
                } catch (q) {
                  ol(s, s.return, q);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
          a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Sn(l, e))));
          break;
        case 19:
          lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          lt(t, l), tt(l);
      }
    }
    function tt(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var e, a = l.return; a !== null; ) {
            if (io(a)) {
              e = a;
              break;
            }
            a = a.return;
          }
          if (e == null) throw Error(r(160));
          switch (e.tag) {
            case 27:
              var u = e.stateNode, n = Di(l);
              bn(l, n, u);
              break;
            case 5:
              var c = e.stateNode;
              e.flags & 32 && (Fe(c, ""), e.flags &= -33);
              var i = Di(l);
              bn(l, i, c);
              break;
            case 3:
            case 4:
              var s = e.stateNode.containerInfo, b = Di(l);
              ji(l, b, s);
              break;
            default:
              throw Error(r(161));
          }
        } catch (z) {
          ol(l, l.return, z);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function vo(l) {
      if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
        var t = l;
        vo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
    }
    function wt(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) ro(l, t.alternate, t), t = t.sibling;
    }
    function Ze(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            re(4, t, t.return), Ze(t);
            break;
          case 1:
            Ut(t, t.return);
            var e = t.stateNode;
            typeof e.componentWillUnmount == "function" && no(t, t.return, e), Ze(t);
            break;
          case 27:
            gu(t.stateNode);
          case 26:
          case 5:
            Ut(t, t.return), Ze(t);
            break;
          case 22:
            t.memoizedState === null && Ze(t);
            break;
          case 30:
            Ze(t);
            break;
          default:
            Ze(t);
        }
        l = l.sibling;
      }
    }
    function kt(l, t, e) {
      for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate, u = l, n = t, c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            kt(u, n, e), cu(4, n);
            break;
          case 1:
            if (kt(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
              u.componentDidMount();
            } catch (b) {
              ol(a, a.return, b);
            }
            if (a = n, u = a.updateQueue, u !== null) {
              var i = a.stateNode;
              try {
                var s = u.shared.hiddenCallbacks;
                if (s !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) ws(s[u], i);
              } catch (b) {
                ol(a, a.return, b);
              }
            }
            e && c & 64 && uo(n), iu(n, n.return);
            break;
          case 27:
            fo(n);
          case 26:
          case 5:
            kt(u, n, e), e && a === null && c & 4 && co(n), iu(n, n.return);
            break;
          case 12:
            kt(u, n, e);
            break;
          case 31:
            kt(u, n, e), e && c & 4 && mo(u, n);
            break;
          case 13:
            kt(u, n, e), e && c & 4 && ho(u, n);
            break;
          case 22:
            n.memoizedState === null && kt(u, n, e), iu(n, n.return);
            break;
          case 30:
            break;
          default:
            kt(u, n, e);
        }
        t = t.sibling;
      }
    }
    function Ri(l, t) {
      var e = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && wa(e));
    }
    function Ci(l, t) {
      l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && wa(l));
    }
    function Mt(l, t, e, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) bo(l, t, e, a), t = t.sibling;
    }
    function bo(l, t, e, a) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Mt(l, t, e, a), u & 2048 && cu(9, t);
          break;
        case 1:
          Mt(l, t, e, a);
          break;
        case 3:
          Mt(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && wa(l)));
          break;
        case 12:
          if (u & 2048) {
            Mt(l, t, e, a), l = t.stateNode;
            try {
              var n = t.memoizedProps, c = n.id, i = n.onPostCommit;
              typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (s) {
              ol(t, t.return, s);
            }
          } else Mt(l, t, e, a);
          break;
        case 31:
          Mt(l, t, e, a);
          break;
        case 13:
          Mt(l, t, e, a);
          break;
        case 23:
          break;
        case 22:
          n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Mt(l, t, e, a) : fu(l, t) : n._visibility & 2 ? Mt(l, t, e, a) : (n._visibility |= 2, va(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Ri(c, t);
          break;
        case 24:
          Mt(l, t, e, a), u & 2048 && Ci(t.alternate, t);
          break;
        default:
          Mt(l, t, e, a);
      }
    }
    function va(l, t, e, a, u) {
      for (u = u && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var n = l, c = t, i = e, s = a, b = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            va(n, c, i, s, u), cu(8, c);
            break;
          case 23:
            break;
          case 22:
            var z = c.stateNode;
            c.memoizedState !== null ? z._visibility & 2 ? va(n, c, i, s, u) : fu(n, c) : (z._visibility |= 2, va(n, c, i, s, u)), u && b & 2048 && Ri(c.alternate, c);
            break;
          case 24:
            va(n, c, i, s, u), u && b & 2048 && Ci(c.alternate, c);
            break;
          default:
            va(n, c, i, s, u);
        }
        t = t.sibling;
      }
    }
    function fu(l, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            fu(e, a), u & 2048 && Ri(a.alternate, a);
            break;
          case 24:
            fu(e, a), u & 2048 && Ci(a.alternate, a);
            break;
          default:
            fu(e, a);
        }
        t = t.sibling;
      }
    }
    var su = 8192;
    function ba(l, t, e) {
      if (l.subtreeFlags & su) for (l = l.child; l !== null; ) So(l, t, e), l = l.sibling;
    }
    function So(l, t, e) {
      switch (l.tag) {
        case 26:
          ba(l, t, e), l.flags & su && l.memoizedState !== null && zm(e, Ot, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          ba(l, t, e);
          break;
        case 3:
        case 4:
          var a = Ot;
          Ot = Rn(l.stateNode.containerInfo), ba(l, t, e), Ot = a;
          break;
        case 22:
          l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = su, su = 16777216, ba(l, t, e), su = a) : ba(l, t, e));
          break;
        default:
          ba(l, t, e);
      }
    }
    function xo(l) {
      var t = l.alternate;
      if (t !== null && (l = t.child, l !== null)) {
        t.child = null;
        do
          t = l.sibling, l.sibling = null, l = t;
        while (l !== null);
      }
    }
    function ru(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Gl = a, Eo(a, l);
        }
        xo(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) po(l), l = l.sibling;
    }
    function po(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ru(l), l.flags & 2048 && re(9, l, l.return);
          break;
        case 3:
          ru(l);
          break;
        case 12:
          ru(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, xn(l)) : ru(l);
          break;
        default:
          ru(l);
      }
    }
    function xn(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Gl = a, Eo(a, l);
        }
        xo(l);
      }
      for (l = l.child; l !== null; ) {
        switch (t = l, t.tag) {
          case 0:
          case 11:
          case 15:
            re(8, t, t.return), xn(t);
            break;
          case 22:
            e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, xn(t));
            break;
          default:
            xn(t);
        }
        l = l.sibling;
      }
    }
    function Eo(l, t) {
      for (; Gl !== null; ) {
        var e = Gl;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            re(8, e, t);
            break;
          case 23:
          case 22:
            if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
              var a = e.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            wa(e.memoizedState.cache);
        }
        if (a = e.child, a !== null) a.return = e, Gl = a;
        else l: for (e = l; Gl !== null; ) {
          a = Gl;
          var u = a.sibling, n = a.return;
          if (oo(a), a === e) {
            Gl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Gl = u;
            break l;
          }
          Gl = n;
        }
      }
    }
    var Yy = {
      getCacheForType: function(l) {
        var t = Ll(Dl), e = t.data.get(l);
        return e === void 0 && (e = l(), t.data.set(l, e)), e;
      },
      cacheSignal: function() {
        return Ll(Dl).controller.signal;
      }
    }, Gy = typeof WeakMap == "function" ? WeakMap : Map, il = 0, vl = null, ll = null, el = 0, rl = 0, ot = null, oe = false, Sa = false, Hi = false, $t = 0, Tl = 0, de = 0, Le = 0, Bi = 0, dt = 0, xa = 0, ou = null, et = null, qi = false, pn = 0, zo = 0, En = 1 / 0, zn = null, ye = null, Cl = 0, me = null, pa = null, Wt = 0, Yi = 0, Gi = null, To = null, du = 0, Qi = null;
    function yt() {
      return (il & 2) !== 0 && el !== 0 ? el & -el : T.T !== null ? Ji() : Gf();
    }
    function Ao() {
      if (dt === 0) if ((el & 536870912) === 0 || ul) {
        var l = Du;
        Du <<= 1, (Du & 3932160) === 0 && (Du = 262144), dt = l;
      } else dt = 536870912;
      return l = st.current, l !== null && (l.flags |= 32), dt;
    }
    function at(l, t, e) {
      (l === vl && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (Ea(l, 0), he(l, el, dt, false)), Ra(l, e), ((il & 2) === 0 || l !== vl) && (l === vl && ((il & 2) === 0 && (Le |= e), Tl === 4 && he(l, el, dt, false)), Rt(l));
    }
    function _o(l, t, e) {
      if ((il & 6) !== 0) throw Error(r(327));
      var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ua(l, t), u = a ? Zy(l, t) : Zi(l, t, true), n = a;
      do {
        if (u === 0) {
          Sa && !a && he(l, t, 0, false);
          break;
        } else {
          if (e = l.current.alternate, n && !Qy(e)) {
            u = Zi(l, t, false), n = false;
            continue;
          }
          if (u === 2) {
            if (n = t, l.errorRecoveryDisabledLanes & n) var c = 0;
            else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
            if (c !== 0) {
              t = c;
              l: {
                var i = l;
                u = ou;
                var s = i.current.memoizedState.isDehydrated;
                if (s && (Ea(i, c).flags |= 256), c = Zi(i, c, false), c !== 2) {
                  if (Hi && !s) {
                    i.errorRecoveryDisabledLanes |= n, Le |= n, u = 4;
                    break l;
                  }
                  n = et, et = u, n !== null && (et === null ? et = n : et.push.apply(et, n));
                }
                u = c;
              }
              if (n = false, u !== 2) continue;
            }
          }
          if (u === 1) {
            Ea(l, 0), he(l, t, 0, true);
            break;
          }
          l: {
            switch (a = l, n = u, n) {
              case 0:
              case 1:
                throw Error(r(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                he(a, t, dt, !oe);
                break l;
              case 2:
                et = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((t & 62914560) === t && (u = pn + 300 - ut(), 10 < u)) {
              if (he(a, t, dt, !oe), Uu(a, 0, true) !== 0) break l;
              Wt = t, a.timeoutHandle = a0(No.bind(null, a, e, et, zn, qi, t, dt, Le, xa, oe, n, "Throttled", -0, 0), u);
              break l;
            }
            No(a, e, et, zn, qi, t, dt, Le, xa, oe, n, null, -0, 0);
          }
        }
        break;
      } while (true);
      Rt(l);
    }
    function No(l, t, e, a, u, n, c, i, s, b, z, N, x, p) {
      if (l.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
        N = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Ht
        }, So(t, n, N);
        var q = (n & 62914560) === n ? pn - ut() : (n & 4194048) === n ? zo - ut() : 0;
        if (q = Tm(N, q), q !== null) {
          Wt = n, l.cancelPendingCommit = q(Ho.bind(null, l, t, n, e, a, u, c, i, s, z, N, null, x, p)), he(l, n, c, !b);
          return;
        }
      }
      Ho(l, t, n, e, a, u, c, i, s);
    }
    function Qy(l) {
      for (var t = l; ; ) {
        var e = t.tag;
        if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!it(n(), u)) return false;
          } catch {
            return false;
          }
        }
        if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
        else {
          if (t === l) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function he(l, t, e, a) {
      t &= ~Bi, t &= ~Le, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
      for (var u = t; 0 < u; ) {
        var n = 31 - ct(u), c = 1 << n;
        a[n] = -1, u &= ~c;
      }
      e !== 0 && Bf(l, e, t);
    }
    function Tn() {
      return (il & 6) === 0 ? (yu(0), false) : true;
    }
    function Xi() {
      if (ll !== null) {
        if (rl === 0) var l = ll.return;
        else l = ll, Gt = Ce = null, ai(l), da = null, $a = 0, l = ll;
        for (; l !== null; ) ao(l.alternate, l), l = l.return;
        ll = null;
      }
    }
    function Ea(l, t) {
      var e = l.timeoutHandle;
      e !== -1 && (l.timeoutHandle = -1, cm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Wt = 0, Xi(), vl = l, ll = e = qt(l.current, null), el = t, rl = 0, ot = null, oe = false, Sa = Ua(l, t), Hi = false, xa = dt = Bi = Le = de = Tl = 0, et = ou = null, qi = false, (t & 8) !== 0 && (t |= t & 32);
      var a = l.entangledLanes;
      if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ct(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
      return $t = t, Vu(), e;
    }
    function Oo(l, t) {
      W = null, T.H = au, t === oa || t === Iu ? (t = Ls(), rl = 3) : t === Kc ? (t = Ls(), rl = 4) : rl = t === Si ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ot = t, ll === null && (Tl = 1, yn(l, St(t, l.current)));
    }
    function Mo() {
      var l = st.current;
      return l === null ? true : (el & 4194048) === el ? zt === null : (el & 62914560) === el || (el & 536870912) !== 0 ? l === zt : false;
    }
    function Do() {
      var l = T.H;
      return T.H = au, l === null ? au : l;
    }
    function jo() {
      var l = T.A;
      return T.A = Yy, l;
    }
    function An() {
      Tl = 4, oe || (el & 4194048) !== el && st.current !== null || (Sa = true), (de & 134217727) === 0 && (Le & 134217727) === 0 || vl === null || he(vl, el, dt, false);
    }
    function Zi(l, t, e) {
      var a = il;
      il |= 2;
      var u = Do(), n = jo();
      (vl !== l || el !== t) && (zn = null, Ea(l, t)), t = false;
      var c = Tl;
      l: do
        try {
          if (rl !== 0 && ll !== null) {
            var i = ll, s = ot;
            switch (rl) {
              case 8:
                Xi(), c = 6;
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                st.current === null && (t = true);
                var b = rl;
                if (rl = 0, ot = null, za(l, i, s, b), e && Sa) {
                  c = 0;
                  break l;
                }
                break;
              default:
                b = rl, rl = 0, ot = null, za(l, i, s, b);
            }
          }
          Xy(), c = Tl;
          break;
        } catch (z) {
          Oo(l, z);
        }
      while (true);
      return t && l.shellSuspendCounter++, Gt = Ce = null, il = a, T.H = u, T.A = n, ll === null && (vl = null, el = 0, Vu()), c;
    }
    function Xy() {
      for (; ll !== null; ) Uo(ll);
    }
    function Zy(l, t) {
      var e = il;
      il |= 2;
      var a = Do(), u = jo();
      vl !== l || el !== t ? (zn = null, En = ut() + 500, Ea(l, t)) : Sa = Ua(l, t);
      l: do
        try {
          if (rl !== 0 && ll !== null) {
            t = ll;
            var n = ot;
            t: switch (rl) {
              case 1:
                rl = 0, ot = null, za(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (Xs(n)) {
                  rl = 0, ot = null, Ro(t);
                  break;
                }
                t = function() {
                  rl !== 2 && rl !== 9 || vl !== l || (rl = 7), Rt(l);
                }, n.then(t, t);
                break l;
              case 3:
                rl = 7;
                break l;
              case 4:
                rl = 5;
                break l;
              case 7:
                Xs(n) ? (rl = 0, ot = null, Ro(t)) : (rl = 0, ot = null, za(l, t, n, 7));
                break;
              case 5:
                var c = null;
                switch (ll.tag) {
                  case 26:
                    c = ll.memoizedState;
                  case 5:
                  case 27:
                    var i = ll;
                    if (c ? b0(c) : i.stateNode.complete) {
                      rl = 0, ot = null;
                      var s = i.sibling;
                      if (s !== null) ll = s;
                      else {
                        var b = i.return;
                        b !== null ? (ll = b, _n(b)) : ll = null;
                      }
                      break t;
                    }
                }
                rl = 0, ot = null, za(l, t, n, 5);
                break;
              case 6:
                rl = 0, ot = null, za(l, t, n, 6);
                break;
              case 8:
                Xi(), Tl = 6;
                break l;
              default:
                throw Error(r(462));
            }
          }
          Ly();
          break;
        } catch (z) {
          Oo(l, z);
        }
      while (true);
      return Gt = Ce = null, T.H = a, T.A = u, il = e, ll !== null ? 0 : (vl = null, el = 0, Vu(), Tl);
    }
    function Ly() {
      for (; ll !== null && !dd(); ) Uo(ll);
    }
    function Uo(l) {
      var t = to(l.alternate, l, $t);
      l.memoizedProps = l.pendingProps, t === null ? _n(l) : ll = t;
    }
    function Ro(l) {
      var t = l, e = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = $r(e, t, t.pendingProps, t.type, void 0, el);
          break;
        case 11:
          t = $r(e, t, t.pendingProps, t.type.render, t.ref, el);
          break;
        case 5:
          ai(t);
        default:
          ao(e, t), t = ll = Ds(t, $t), t = to(e, t, $t);
      }
      l.memoizedProps = l.pendingProps, t === null ? _n(l) : ll = t;
    }
    function za(l, t, e, a) {
      Gt = Ce = null, ai(t), da = null, $a = 0;
      var u = t.return;
      try {
        if (jy(l, u, t, e, el)) {
          Tl = 1, yn(l, St(e, l.current)), ll = null;
          return;
        }
      } catch (n) {
        if (u !== null) throw ll = u, n;
        Tl = 1, yn(l, St(e, l.current)), ll = null;
        return;
      }
      t.flags & 32768 ? (ul || a === 1 ? l = true : Sa || (el & 536870912) !== 0 ? l = false : (oe = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = st.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Co(t, l)) : _n(t);
    }
    function _n(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          Co(t, oe);
          return;
        }
        l = t.return;
        var e = Cy(t.alternate, t, $t);
        if (e !== null) {
          ll = e;
          return;
        }
        if (t = t.sibling, t !== null) {
          ll = t;
          return;
        }
        ll = t = l;
      } while (t !== null);
      Tl === 0 && (Tl = 5);
    }
    function Co(l, t) {
      do {
        var e = Hy(l.alternate, l);
        if (e !== null) {
          e.flags &= 32767, ll = e;
          return;
        }
        if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
          ll = l;
          return;
        }
        ll = l = e;
      } while (l !== null);
      Tl = 6, ll = null;
    }
    function Ho(l, t, e, a, u, n, c, i, s) {
      l.cancelPendingCommit = null;
      do
        Nn();
      while (Cl !== 0);
      if ((il & 6) !== 0) throw Error(r(327));
      if (t !== null) {
        if (t === l.current) throw Error(r(177));
        if (n = t.lanes | t.childLanes, n |= Dc, Ed(l, e, n, c, i, s), l === vl && (ll = vl = null, el = 0), pa = t, me = l, Wt = e, Yi = n, Gi = u, To = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, wy(Ou, function() {
          return Qo(), null;
        })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = T.T, T.T = null, u = H.p, H.p = 2, c = il, il |= 4;
          try {
            By(l, t, e);
          } finally {
            il = c, H.p = u, T.T = a;
          }
        }
        Cl = 1, Bo(), qo(), Yo();
      }
    }
    function Bo() {
      if (Cl === 1) {
        Cl = 0;
        var l = me, t = pa, e = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || e) {
          e = T.T, T.T = null;
          var a = H.p;
          H.p = 2;
          var u = il;
          il |= 4;
          try {
            go(t, l);
            var n = lf, c = ps(l.containerInfo), i = n.focusedElem, s = n.selectionRange;
            if (c !== i && i && i.ownerDocument && xs(i.ownerDocument.documentElement, i)) {
              if (s !== null && Ac(i)) {
                var b = s.start, z = s.end;
                if (z === void 0 && (z = b), "selectionStart" in i) i.selectionStart = b, i.selectionEnd = Math.min(z, i.value.length);
                else {
                  var N = i.ownerDocument || document, x = N && N.defaultView || window;
                  if (x.getSelection) {
                    var p = x.getSelection(), q = i.textContent.length, L = Math.min(s.start, q), hl = s.end === void 0 ? L : Math.min(s.end, q);
                    !p.extend && L > hl && (c = hl, hl = L, L = c);
                    var m = Ss(i, L), o = Ss(i, hl);
                    if (m && o && (p.rangeCount !== 1 || p.anchorNode !== m.node || p.anchorOffset !== m.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                      var v = N.createRange();
                      v.setStart(m.node, m.offset), p.removeAllRanges(), L > hl ? (p.addRange(v), p.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), p.addRange(v));
                    }
                  }
                }
              }
              for (N = [], p = i; p = p.parentNode; ) p.nodeType === 1 && N.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
              for (typeof i.focus == "function" && i.focus(), i = 0; i < N.length; i++) {
                var A = N[i];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            Gn = !!Pi, lf = Pi = null;
          } finally {
            il = u, H.p = a, T.T = e;
          }
        }
        l.current = t, Cl = 2;
      }
    }
    function qo() {
      if (Cl === 2) {
        Cl = 0;
        var l = me, t = pa, e = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || e) {
          e = T.T, T.T = null;
          var a = H.p;
          H.p = 2;
          var u = il;
          il |= 4;
          try {
            ro(l, t.alternate, t);
          } finally {
            il = u, H.p = a, T.T = e;
          }
        }
        Cl = 3;
      }
    }
    function Yo() {
      if (Cl === 4 || Cl === 3) {
        Cl = 0, yd();
        var l = me, t = pa, e = Wt, a = To;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Cl = 5 : (Cl = 0, pa = me = null, Go(l, l.pendingLanes));
        var u = l.pendingLanes;
        if (u === 0 && (ye = null), cc(e), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
          nt.onCommitFiberRoot(ja, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          t = T.T, u = H.p, H.p = 2, T.T = null;
          try {
            for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
              var i = a[c];
              n(i.value, {
                componentStack: i.stack
              });
            }
          } finally {
            T.T = t, H.p = u;
          }
        }
        (Wt & 3) !== 0 && Nn(), Rt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Qi ? du++ : (du = 0, Qi = l) : du = 0, yu(0);
      }
    }
    function Go(l, t) {
      (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, wa(t)));
    }
    function Nn() {
      return Bo(), qo(), Yo(), Qo();
    }
    function Qo() {
      if (Cl !== 5) return false;
      var l = me, t = Yi;
      Yi = 0;
      var e = cc(Wt), a = T.T, u = H.p;
      try {
        H.p = 32 > e ? 32 : e, T.T = null, e = Gi, Gi = null;
        var n = me, c = Wt;
        if (Cl = 0, pa = me = null, Wt = 0, (il & 6) !== 0) throw Error(r(331));
        var i = il;
        if (il |= 4, po(n.current), bo(n, n.current, c, e), il = i, yu(0, false), nt && typeof nt.onPostCommitFiberRoot == "function") try {
          nt.onPostCommitFiberRoot(ja, n);
        } catch {
        }
        return true;
      } finally {
        H.p = u, T.T = a, Go(l, t);
      }
    }
    function Xo(l, t, e) {
      t = St(e, t), t = bi(l.stateNode, t, 2), l = ie(l, t, 2), l !== null && (Ra(l, 2), Rt(l));
    }
    function ol(l, t, e) {
      if (l.tag === 3) Xo(l, l, e);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Xo(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a))) {
            l = St(e, l), e = Xr(2), a = ie(t, e, 2), a !== null && (Zr(e, a, t, l), Ra(a, 2), Rt(a));
            break;
          }
        }
        t = t.return;
      }
    }
    function Li(l, t, e) {
      var a = l.pingCache;
      if (a === null) {
        a = l.pingCache = new Gy();
        var u = /* @__PURE__ */ new Set();
        a.set(t, u);
      } else u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
      u.has(e) || (Hi = true, u.add(e), l = Vy.bind(null, l, t, e), t.then(l, l));
    }
    function Vy(l, t, e) {
      var a = l.pingCache;
      a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, vl === l && (el & e) === e && (Tl === 4 || Tl === 3 && (el & 62914560) === el && 300 > ut() - pn ? (il & 2) === 0 && Ea(l, 0) : Bi |= e, xa === el && (xa = 0)), Rt(l);
    }
    function Zo(l, t) {
      t === 0 && (t = Hf()), l = je(l, t), l !== null && (Ra(l, t), Rt(l));
    }
    function Ky(l) {
      var t = l.memoizedState, e = 0;
      t !== null && (e = t.retryLane), Zo(l, e);
    }
    function Jy(l, t) {
      var e = 0;
      switch (l.tag) {
        case 31:
        case 13:
          var a = l.stateNode, u = l.memoizedState;
          u !== null && (e = u.retryLane);
          break;
        case 19:
          a = l.stateNode;
          break;
        case 22:
          a = l.stateNode._retryCache;
          break;
        default:
          throw Error(r(314));
      }
      a !== null && a.delete(t), Zo(l, e);
    }
    function wy(l, t) {
      return ec(l, t);
    }
    var On = null, Ta = null, Vi = false, Mn = false, Ki = false, ge = 0;
    function Rt(l) {
      l !== Ta && l.next === null && (Ta === null ? On = Ta = l : Ta = Ta.next = l), Mn = true, Vi || (Vi = true, $y());
    }
    function yu(l, t) {
      if (!Ki && Mn) {
        Ki = true;
        do
          for (var e = false, a = On; a !== null; ) {
            if (l !== 0) {
              var u = a.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var c = a.suspendedLanes, i = a.pingedLanes;
                n = (1 << 31 - ct(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
              }
              n !== 0 && (e = true, Jo(a, n));
            } else n = el, n = Uu(a, a === vl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ua(a, n) || (e = true, Jo(a, n));
            a = a.next;
          }
        while (e);
        Ki = false;
      }
    }
    function ky() {
      Lo();
    }
    function Lo() {
      Mn = Vi = false;
      var l = 0;
      ge !== 0 && nm() && (l = ge);
      for (var t = ut(), e = null, a = On; a !== null; ) {
        var u = a.next, n = Vo(a, t);
        n === 0 ? (a.next = null, e === null ? On = u : e.next = u, u === null && (Ta = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Mn = true)), a = u;
      }
      Cl !== 0 && Cl !== 5 || yu(l), ge !== 0 && (ge = 0);
    }
    function Vo(l, t) {
      for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
        var c = 31 - ct(n), i = 1 << c, s = u[c];
        s === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = pd(i, t)) : s <= t && (l.expiredLanes |= i), n &= ~i;
      }
      if (t = vl, e = el, e = Uu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && ac(a), l.callbackNode = null, l.callbackPriority = 0;
      if ((e & 3) === 0 || Ua(l, e)) {
        if (t = e & -e, t === l.callbackPriority) return t;
        switch (a !== null && ac(a), cc(e)) {
          case 2:
          case 8:
            e = Rf;
            break;
          case 32:
            e = Ou;
            break;
          case 268435456:
            e = Cf;
            break;
          default:
            e = Ou;
        }
        return a = Ko.bind(null, l), e = ec(e, a), l.callbackPriority = t, l.callbackNode = e, t;
      }
      return a !== null && a !== null && ac(a), l.callbackPriority = 2, l.callbackNode = null, 2;
    }
    function Ko(l, t) {
      if (Cl !== 0 && Cl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
      var e = l.callbackNode;
      if (Nn() && l.callbackNode !== e) return null;
      var a = el;
      return a = Uu(l, l === vl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (_o(l, a, t), Vo(l, ut()), l.callbackNode != null && l.callbackNode === e ? Ko.bind(null, l) : null);
    }
    function Jo(l, t) {
      if (Nn()) return null;
      _o(l, t, true);
    }
    function $y() {
      im(function() {
        (il & 6) !== 0 ? ec(Uf, ky) : Lo();
      });
    }
    function Ji() {
      if (ge === 0) {
        var l = sa;
        l === 0 && (l = Mu, Mu <<= 1, (Mu & 261888) === 0 && (Mu = 256)), ge = l;
      }
      return ge;
    }
    function wo(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Bu("" + l);
    }
    function ko(l, t) {
      var e = t.ownerDocument.createElement("input");
      return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
    }
    function Wy(l, t, e, a, u) {
      if (t === "submit" && e && e.stateNode === u) {
        var n = wo((u[Fl] || null).action), c = a.submitter;
        c && (t = (t = c[Fl] || null) ? wo(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
        var i = new Qu("action", "action", null, a, u);
        l.push({
          event: i,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (ge !== 0) {
                    var s = c ? ko(u, c) : new FormData(u);
                    di(e, {
                      pending: true,
                      data: s,
                      method: u.method,
                      action: n
                    }, null, s);
                  }
                } else typeof n == "function" && (i.preventDefault(), s = c ? ko(u, c) : new FormData(u), di(e, {
                  pending: true,
                  data: s,
                  method: u.method,
                  action: n
                }, n, s));
              },
              currentTarget: u
            }
          ]
        });
      }
    }
    for (var wi = 0; wi < Mc.length; wi++) {
      var ki = Mc[wi], Fy = ki.toLowerCase(), Iy = ki[0].toUpperCase() + ki.slice(1);
      Nt(Fy, "on" + Iy);
    }
    Nt(Ts, "onAnimationEnd"), Nt(As, "onAnimationIteration"), Nt(_s, "onAnimationStart"), Nt("dblclick", "onDoubleClick"), Nt("focusin", "onFocus"), Nt("focusout", "onBlur"), Nt(my, "onTransitionRun"), Nt(hy, "onTransitionStart"), Nt(gy, "onTransitionCancel"), Nt(Ns, "onTransitionEnd"), $e("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), $e("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), $e("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), $e("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ne("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Py = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));
    function $o(l, t) {
      t = (t & 4) !== 0;
      for (var e = 0; e < l.length; e++) {
        var a = l[e], u = a.event;
        a = a.listeners;
        l: {
          var n = void 0;
          if (t) for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c], s = i.instance, b = i.currentTarget;
            if (i = i.listener, s !== n && u.isPropagationStopped()) break l;
            n = i, u.currentTarget = b;
            try {
              n(u);
            } catch (z) {
              Lu(z);
            }
            u.currentTarget = null, n = s;
          }
          else for (c = 0; c < a.length; c++) {
            if (i = a[c], s = i.instance, b = i.currentTarget, i = i.listener, s !== n && u.isPropagationStopped()) break l;
            n = i, u.currentTarget = b;
            try {
              n(u);
            } catch (z) {
              Lu(z);
            }
            u.currentTarget = null, n = s;
          }
        }
      }
    }
    function tl(l, t) {
      var e = t[ic];
      e === void 0 && (e = t[ic] = /* @__PURE__ */ new Set());
      var a = l + "__bubble";
      e.has(a) || (Wo(t, l, 2, false), e.add(a));
    }
    function $i(l, t, e) {
      var a = 0;
      t && (a |= 4), Wo(e, l, a, t);
    }
    var Dn = "_reactListening" + Math.random().toString(36).slice(2);
    function Wi(l) {
      if (!l[Dn]) {
        l[Dn] = true, Zf.forEach(function(e) {
          e !== "selectionchange" && (Py.has(e) || $i(e, false, l), $i(e, true, l));
        });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[Dn] || (t[Dn] = true, $i("selectionchange", false, t));
      }
    }
    function Wo(l, t, e, a) {
      switch (A0(t)) {
        case 2:
          var u = Nm;
          break;
        case 8:
          u = Om;
          break;
        default:
          u = df;
      }
      e = u.bind(null, t, e, l), u = void 0, !gc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), a ? u !== void 0 ? l.addEventListener(t, e, {
        capture: true,
        passive: u
      }) : l.addEventListener(t, e, true) : u !== void 0 ? l.addEventListener(t, e, {
        passive: u
      }) : l.addEventListener(t, e, false);
    }
    function Fi(l, t, e, a, u) {
      var n = a;
      if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4) for (c = a.return; c !== null; ) {
            var s = c.tag;
            if ((s === 3 || s === 4) && c.stateNode.containerInfo === u) return;
            c = c.return;
          }
          for (; i !== null; ) {
            if (c = Je(i), c === null) return;
            if (s = c.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
      ls(function() {
        var b = n, z = mc(e), N = [];
        l: {
          var x = Os.get(l);
          if (x !== void 0) {
            var p = Qu, q = l;
            switch (l) {
              case "keypress":
                if (Yu(e) === 0) break l;
              case "keydown":
              case "keyup":
                p = Jd;
                break;
              case "focusin":
                q = "focus", p = xc;
                break;
              case "focusout":
                q = "blur", p = xc;
                break;
              case "beforeblur":
              case "afterblur":
                p = xc;
                break;
              case "click":
                if (e.button === 2) break l;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                p = as;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                p = Cd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                p = $d;
                break;
              case Ts:
              case As:
              case _s:
                p = qd;
                break;
              case Ns:
                p = Fd;
                break;
              case "scroll":
              case "scrollend":
                p = Ud;
                break;
              case "wheel":
                p = Pd;
                break;
              case "copy":
              case "cut":
              case "paste":
                p = Gd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                p = ns;
                break;
              case "toggle":
              case "beforetoggle":
                p = ty;
            }
            var L = (t & 4) !== 0, hl = !L && (l === "scroll" || l === "scrollend"), m = L ? x !== null ? x + "Capture" : null : x;
            L = [];
            for (var o = b, v; o !== null; ) {
              var A = o;
              if (v = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || v === null || m === null || (A = Ba(o, m), A != null && L.push(hu(o, A, v))), hl) break;
              o = o.return;
            }
            0 < L.length && (x = new p(x, q, null, e, z), N.push({
              event: x,
              listeners: L
            }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (x = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", x && e !== yc && (q = e.relatedTarget || e.fromElement) && (Je(q) || q[Ke])) break l;
            if ((p || x) && (x = z.window === z ? z : (x = z.ownerDocument) ? x.defaultView || x.parentWindow : window, p ? (q = e.relatedTarget || e.toElement, p = b, q = q ? Je(q) : null, q !== null && (hl = j(q), L = q.tag, q !== hl || L !== 5 && L !== 27 && L !== 6) && (q = null)) : (p = null, q = b), p !== q)) {
              if (L = as, A = "onMouseLeave", m = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (L = ns, A = "onPointerLeave", m = "onPointerEnter", o = "pointer"), hl = p == null ? x : Ha(p), v = q == null ? x : Ha(q), x = new L(A, o + "leave", p, e, z), x.target = hl, x.relatedTarget = v, A = null, Je(z) === b && (L = new L(m, o + "enter", q, e, z), L.target = v, L.relatedTarget = hl, A = L), hl = A, p && q) t: {
                for (L = lm, m = p, o = q, v = 0, A = m; A; A = L(A)) v++;
                A = 0;
                for (var Z = o; Z; Z = L(Z)) A++;
                for (; 0 < v - A; ) m = L(m), v--;
                for (; 0 < A - v; ) o = L(o), A--;
                for (; v--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    L = m;
                    break t;
                  }
                  m = L(m), o = L(o);
                }
                L = null;
              }
              else L = null;
              p !== null && Fo(N, x, p, L, false), q !== null && hl !== null && Fo(N, hl, q, L, true);
            }
          }
          l: {
            if (x = b ? Ha(b) : window, p = x.nodeName && x.nodeName.toLowerCase(), p === "select" || p === "input" && x.type === "file") var nl = ys;
            else if (os(x)) if (ms) nl = oy;
            else {
              nl = sy;
              var Q = fy;
            }
            else p = x.nodeName, !p || p.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? b && dc(b.elementType) && (nl = ys) : nl = ry;
            if (nl && (nl = nl(l, b))) {
              ds(N, nl, e, z);
              break l;
            }
            Q && Q(l, x, b), l === "focusout" && b && x.type === "number" && b.memoizedProps.value != null && oc(x, "number", x.value);
          }
          switch (Q = b ? Ha(b) : window, l) {
            case "focusin":
              (os(Q) || Q.contentEditable === "true") && (ta = Q, _c = b, Va = null);
              break;
            case "focusout":
              Va = _c = ta = null;
              break;
            case "mousedown":
              Nc = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Nc = false, Es(N, e, z);
              break;
            case "selectionchange":
              if (yy) break;
            case "keydown":
            case "keyup":
              Es(N, e, z);
          }
          var F;
          if (Ec) l: {
            switch (l) {
              case "compositionstart":
                var al = "onCompositionStart";
                break l;
              case "compositionend":
                al = "onCompositionEnd";
                break l;
              case "compositionupdate":
                al = "onCompositionUpdate";
                break l;
            }
            al = void 0;
          }
          else la ? ss(l, e) && (al = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (al = "onCompositionStart");
          al && (cs && e.locale !== "ko" && (la || al !== "onCompositionStart" ? al === "onCompositionEnd" && la && (F = ts()) : (le = z, vc = "value" in le ? le.value : le.textContent, la = true)), Q = jn(b, al), 0 < Q.length && (al = new us(al, l, null, e, z), N.push({
            event: al,
            listeners: Q
          }), F ? al.data = F : (F = rs(e), F !== null && (al.data = F)))), (F = ay ? uy(l, e) : ny(l, e)) && (al = jn(b, "onBeforeInput"), 0 < al.length && (Q = new us("onBeforeInput", "beforeinput", null, e, z), N.push({
            event: Q,
            listeners: al
          }), Q.data = F)), Wy(N, l, b, e, z);
        }
        $o(N, t);
      });
    }
    function hu(l, t, e) {
      return {
        instance: l,
        listener: t,
        currentTarget: e
      };
    }
    function jn(l, t) {
      for (var e = t + "Capture", a = []; l !== null; ) {
        var u = l, n = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ba(l, e), u != null && a.unshift(hu(l, u, n)), u = Ba(l, t), u != null && a.push(hu(l, u, n))), l.tag === 3) return a;
        l = l.return;
      }
      return [];
    }
    function lm(l) {
      if (l === null) return null;
      do
        l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function Fo(l, t, e, a, u) {
      for (var n = t._reactName, c = []; e !== null && e !== a; ) {
        var i = e, s = i.alternate, b = i.stateNode;
        if (i = i.tag, s !== null && s === a) break;
        i !== 5 && i !== 26 && i !== 27 || b === null || (s = b, u ? (b = Ba(e, n), b != null && c.unshift(hu(e, b, s))) : u || (b = Ba(e, n), b != null && c.push(hu(e, b, s)))), e = e.return;
      }
      c.length !== 0 && l.push({
        event: t,
        listeners: c
      });
    }
    var tm = /\r\n?/g, em = /\u0000|\uFFFD/g;
    function Io(l) {
      return (typeof l == "string" ? l : "" + l).replace(tm, `
`).replace(em, "");
    }
    function Po(l, t) {
      return t = Io(t), Io(l) === t;
    }
    function ml(l, t, e, a, u, n) {
      switch (e) {
        case "children":
          typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Fe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Fe(l, "" + a);
          break;
        case "className":
          Cu(l, "class", a);
          break;
        case "tabIndex":
          Cu(l, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Cu(l, e, a);
          break;
        case "style":
          If(l, a, n);
          break;
        case "data":
          if (t !== "object") {
            Cu(l, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || e !== "href")) {
            l.removeAttribute(e);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          a = Bu("" + a), l.setAttribute(e, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof n == "function" && (e === "formAction" ? (t !== "input" && ml(l, t, "name", u.name, u, null), ml(l, t, "formEncType", u.formEncType, u, null), ml(l, t, "formMethod", u.formMethod, u, null), ml(l, t, "formTarget", u.formTarget, u, null)) : (ml(l, t, "encType", u.encType, u, null), ml(l, t, "method", u.method, u, null), ml(l, t, "target", u.target, u, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          a = Bu("" + a), l.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (l.onclick = Ht);
          break;
        case "onScroll":
          a != null && tl("scroll", l);
          break;
        case "onScrollEnd":
          a != null && tl("scrollend", l);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (e = a.__html, e != null) {
              if (u.children != null) throw Error(r(60));
              l.innerHTML = e;
            }
          }
          break;
        case "multiple":
          l.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          l.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            l.removeAttribute("xlink:href");
            break;
          }
          e = Bu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
          break;
        case "capture":
        case "download":
          a === true ? l.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
          break;
        case "popover":
          tl("beforetoggle", l), tl("toggle", l), Ru(l, "popover", a);
          break;
        case "xlinkActuate":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Ru(l, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Dd.get(e) || e, Ru(l, e, a));
      }
    }
    function Ii(l, t, e, a, u, n) {
      switch (e) {
        case "style":
          If(l, a, n);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (e = a.__html, e != null) {
              if (u.children != null) throw Error(r(60));
              l.innerHTML = e;
            }
          }
          break;
        case "children":
          typeof a == "string" ? Fe(l, a) : (typeof a == "number" || typeof a == "bigint") && Fe(l, "" + a);
          break;
        case "onScroll":
          a != null && tl("scroll", l);
          break;
        case "onScrollEnd":
          a != null && tl("scrollend", l);
          break;
        case "onClick":
          a != null && (l.onclick = Ht);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Lf.hasOwnProperty(e)) l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Fl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === true ? l.setAttribute(e, "") : Ru(l, e, a);
          }
      }
    }
    function Kl(l, t, e) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          tl("error", l), tl("load", l);
          var a = false, u = false, n;
          for (n in e) if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null) switch (n) {
              case "src":
                a = true;
                break;
              case "srcSet":
                u = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                ml(l, t, n, c, e, null);
            }
          }
          u && ml(l, t, "srcSet", e.srcSet, e, null), a && ml(l, t, "src", e.src, e, null);
          return;
        case "input":
          tl("invalid", l);
          var i = n = c = u = null, s = null, b = null;
          for (a in e) if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null) switch (a) {
              case "name":
                u = z;
                break;
              case "type":
                c = z;
                break;
              case "checked":
                s = z;
                break;
              case "defaultChecked":
                b = z;
                break;
              case "value":
                n = z;
                break;
              case "defaultValue":
                i = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, t));
                break;
              default:
                ml(l, t, a, z, e, null);
            }
          }
          kf(l, n, i, s, b, c, u, false);
          return;
        case "select":
          tl("invalid", l), a = c = n = null;
          for (u in e) if (e.hasOwnProperty(u) && (i = e[u], i != null)) switch (u) {
            case "value":
              n = i;
              break;
            case "defaultValue":
              c = i;
              break;
            case "multiple":
              a = i;
            default:
              ml(l, t, u, i, e, null);
          }
          t = n, e = c, l.multiple = !!a, t != null ? We(l, !!a, t, false) : e != null && We(l, !!a, e, true);
          return;
        case "textarea":
          tl("invalid", l), n = u = a = null;
          for (c in e) if (e.hasOwnProperty(c) && (i = e[c], i != null)) switch (c) {
            case "value":
              a = i;
              break;
            case "defaultValue":
              u = i;
              break;
            case "children":
              n = i;
              break;
            case "dangerouslySetInnerHTML":
              if (i != null) throw Error(r(91));
              break;
            default:
              ml(l, t, c, i, e, null);
          }
          Wf(l, a, u, n);
          return;
        case "option":
          for (s in e) e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : ml(l, t, s, a, e, null));
          return;
        case "dialog":
          tl("beforetoggle", l), tl("toggle", l), tl("cancel", l), tl("close", l);
          break;
        case "iframe":
        case "object":
          tl("load", l);
          break;
        case "video":
        case "audio":
          for (a = 0; a < mu.length; a++) tl(mu[a], l);
          break;
        case "image":
          tl("error", l), tl("load", l);
          break;
        case "details":
          tl("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          tl("error", l), tl("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (b in e) if (e.hasOwnProperty(b) && (a = e[b], a != null)) switch (b) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, t));
            default:
              ml(l, t, b, a, e, null);
          }
          return;
        default:
          if (dc(t)) {
            for (z in e) e.hasOwnProperty(z) && (a = e[z], a !== void 0 && Ii(l, t, z, a, e, void 0));
            return;
          }
      }
      for (i in e) e.hasOwnProperty(i) && (a = e[i], a != null && ml(l, t, i, a, e, null));
    }
    function am(l, t, e, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var u = null, n = null, c = null, i = null, s = null, b = null, z = null;
          for (p in e) {
            var N = e[p];
            if (e.hasOwnProperty(p) && N != null) switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = N;
              default:
                a.hasOwnProperty(p) || ml(l, t, p, null, a, N);
            }
          }
          for (var x in a) {
            var p = a[x];
            if (N = e[x], a.hasOwnProperty(x) && (p != null || N != null)) switch (x) {
              case "type":
                n = p;
                break;
              case "name":
                u = p;
                break;
              case "checked":
                b = p;
                break;
              case "defaultChecked":
                z = p;
                break;
              case "value":
                c = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(137, t));
                break;
              default:
                p !== N && ml(l, t, x, p, a, N);
            }
          }
          rc(l, c, i, s, b, z, n, u);
          return;
        case "select":
          p = c = i = x = null;
          for (n in e) if (s = e[n], e.hasOwnProperty(n) && s != null) switch (n) {
            case "value":
              break;
            case "multiple":
              p = s;
            default:
              a.hasOwnProperty(n) || ml(l, t, n, null, a, s);
          }
          for (u in a) if (n = a[u], s = e[u], a.hasOwnProperty(u) && (n != null || s != null)) switch (u) {
            case "value":
              x = n;
              break;
            case "defaultValue":
              i = n;
              break;
            case "multiple":
              c = n;
            default:
              n !== s && ml(l, t, u, n, a, s);
          }
          t = i, e = c, a = p, x != null ? We(l, !!e, x, false) : !!a != !!e && (t != null ? We(l, !!e, t, true) : We(l, !!e, e ? [] : "", false));
          return;
        case "textarea":
          p = x = null;
          for (i in e) if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i)) switch (i) {
            case "value":
              break;
            case "children":
              break;
            default:
              ml(l, t, i, null, a, u);
          }
          for (c in a) if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
            case "value":
              x = u;
              break;
            case "defaultValue":
              p = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(r(91));
              break;
            default:
              u !== n && ml(l, t, c, u, a, n);
          }
          $f(l, x, p);
          return;
        case "option":
          for (var q in e) x = e[q], e.hasOwnProperty(q) && x != null && !a.hasOwnProperty(q) && (q === "selected" ? l.selected = false : ml(l, t, q, null, a, x));
          for (s in a) x = a[s], p = e[s], a.hasOwnProperty(s) && x !== p && (x != null || p != null) && (s === "selected" ? l.selected = x && typeof x != "function" && typeof x != "symbol" : ml(l, t, s, x, a, p));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var L in e) x = e[L], e.hasOwnProperty(L) && x != null && !a.hasOwnProperty(L) && ml(l, t, L, null, a, x);
          for (b in a) if (x = a[b], p = e[b], a.hasOwnProperty(b) && x !== p && (x != null || p != null)) switch (b) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (x != null) throw Error(r(137, t));
              break;
            default:
              ml(l, t, b, x, a, p);
          }
          return;
        default:
          if (dc(t)) {
            for (var hl in e) x = e[hl], e.hasOwnProperty(hl) && x !== void 0 && !a.hasOwnProperty(hl) && Ii(l, t, hl, void 0, a, x);
            for (z in a) x = a[z], p = e[z], !a.hasOwnProperty(z) || x === p || x === void 0 && p === void 0 || Ii(l, t, z, x, a, p);
            return;
          }
      }
      for (var m in e) x = e[m], e.hasOwnProperty(m) && x != null && !a.hasOwnProperty(m) && ml(l, t, m, null, a, x);
      for (N in a) x = a[N], p = e[N], !a.hasOwnProperty(N) || x === p || x == null && p == null || ml(l, t, N, x, a, p);
    }
    function l0(l) {
      switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function um() {
      if (typeof performance.getEntriesByType == "function") {
        for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
          var u = e[a], n = u.transferSize, c = u.initiatorType, i = u.duration;
          if (n && i && l0(c)) {
            for (c = 0, i = u.responseEnd, a += 1; a < e.length; a++) {
              var s = e[a], b = s.startTime;
              if (b > i) break;
              var z = s.transferSize, N = s.initiatorType;
              z && l0(N) && (s = s.responseEnd, c += z * (s < i ? 1 : (i - b) / (s - b)));
            }
            if (--a, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
          }
        }
        if (0 < l) return t / l / 1e6;
      }
      return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
    }
    var Pi = null, lf = null;
    function Un(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function t0(l) {
      switch (l) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function e0(l, t) {
      if (l === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return l === 1 && t === "foreignObject" ? 0 : l;
    }
    function tf(l, t) {
      return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ef = null;
    function nm() {
      var l = window.event;
      return l && l.type === "popstate" ? l === ef ? false : (ef = l, true) : (ef = null, false);
    }
    var a0 = typeof setTimeout == "function" ? setTimeout : void 0, cm = typeof clearTimeout == "function" ? clearTimeout : void 0, u0 = typeof Promise == "function" ? Promise : void 0, im = typeof queueMicrotask == "function" ? queueMicrotask : typeof u0 < "u" ? function(l) {
      return u0.resolve(null).then(l).catch(fm);
    } : a0;
    function fm(l) {
      setTimeout(function() {
        throw l;
      });
    }
    function ve(l) {
      return l === "head";
    }
    function n0(l, t) {
      var e = t, a = 0;
      do {
        var u = e.nextSibling;
        if (l.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Oa(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
        else if (e === "html") gu(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, gu(e);
          for (var n = e.firstChild; n; ) {
            var c = n.nextSibling, i = n.nodeName;
            n[Ca] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
          }
        } else e === "body" && gu(l.ownerDocument.body);
        e = u;
      } while (e);
      Oa(t);
    }
    function c0(l, t) {
      var e = l;
      l = 0;
      do {
        var a = e.nextSibling;
        if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
        e = a;
      } while (e);
    }
    function af(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var e = t;
        switch (t = t.nextSibling, e.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            af(e), fc(e);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (e.rel.toLowerCase() === "stylesheet") continue;
        }
        l.removeChild(e);
      }
    }
    function sm(l, t, e, a) {
      for (; l.nodeType === 1; ) {
        var u = e;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
        } else if (a) {
          if (!l[Ca]) switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
              return l;
            default:
              return l;
          }
        } else if (t === "input" && l.type === "hidden") {
          var n = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && l.getAttribute("name") === n) return l;
        } else return l;
        if (l = Tt(l.nextSibling), l === null) break;
      }
      return null;
    }
    function rm(l, t, e) {
      if (t === "") return null;
      for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Tt(l.nextSibling), l === null)) return null;
      return l;
    }
    function i0(l, t) {
      for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Tt(l.nextSibling), l === null)) return null;
      return l;
    }
    function uf(l) {
      return l.data === "$?" || l.data === "$~";
    }
    function nf(l) {
      return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
    }
    function om(l, t) {
      var e = l.ownerDocument;
      if (l.data === "$~") l._reactRetry = t;
      else if (l.data !== "$?" || e.readyState !== "loading") t();
      else {
        var a = function() {
          t(), e.removeEventListener("DOMContentLoaded", a);
        };
        e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
      }
    }
    function Tt(l) {
      for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return l;
    }
    var cf = null;
    function f0(l) {
      l = l.nextSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "/$" || e === "/&") {
            if (t === 0) return Tt(l.nextSibling);
            t--;
          } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
        }
        l = l.nextSibling;
      }
      return null;
    }
    function s0(l) {
      l = l.previousSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
            if (t === 0) return l;
            t--;
          } else e !== "/$" && e !== "/&" || t++;
        }
        l = l.previousSibling;
      }
      return null;
    }
    function r0(l, t, e) {
      switch (t = Un(e), l) {
        case "html":
          if (l = t.documentElement, !l) throw Error(r(452));
          return l;
        case "head":
          if (l = t.head, !l) throw Error(r(453));
          return l;
        case "body":
          if (l = t.body, !l) throw Error(r(454));
          return l;
        default:
          throw Error(r(451));
      }
    }
    function gu(l) {
      for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
      fc(l);
    }
    var At = /* @__PURE__ */ new Map(), o0 = /* @__PURE__ */ new Set();
    function Rn(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var Ft = H.d;
    H.d = {
      f: dm,
      r: ym,
      D: mm,
      C: hm,
      L: gm,
      m: vm,
      X: Sm,
      S: bm,
      M: xm
    };
    function dm() {
      var l = Ft.f(), t = Tn();
      return l || t;
    }
    function ym(l) {
      var t = we(l);
      t !== null && t.tag === 5 && t.type === "form" ? Nr(t) : Ft.r(l);
    }
    var Aa = typeof document > "u" ? null : document;
    function d0(l, t, e) {
      var a = Aa;
      if (a && typeof t == "string" && t) {
        var u = vt(t);
        u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), o0.has(u) || (o0.add(u), l = {
          rel: l,
          crossOrigin: e,
          href: t
        }, a.querySelector(u) === null && (t = a.createElement("link"), Kl(t, "link", l), Yl(t), a.head.appendChild(t)));
      }
    }
    function mm(l) {
      Ft.D(l), d0("dns-prefetch", l, null);
    }
    function hm(l, t) {
      Ft.C(l, t), d0("preconnect", l, t);
    }
    function gm(l, t, e) {
      Ft.L(l, t, e);
      var a = Aa;
      if (a && l && t) {
        var u = 'link[rel="preload"][as="' + vt(t) + '"]';
        t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + vt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + vt(e.imageSizes) + '"]')) : u += '[href="' + vt(l) + '"]';
        var n = u;
        switch (t) {
          case "style":
            n = _a(l);
            break;
          case "script":
            n = Na(l);
        }
        At.has(n) || (l = M({
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        }, e), At.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(vu(n)) || t === "script" && a.querySelector(bu(n)) || (t = a.createElement("link"), Kl(t, "link", l), Yl(t), a.head.appendChild(t)));
      }
    }
    function vm(l, t) {
      Ft.m(l, t);
      var e = Aa;
      if (e && l) {
        var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(l) + '"]', n = u;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Na(l);
        }
        if (!At.has(n) && (l = M({
          rel: "modulepreload",
          href: l
        }, t), At.set(n, l), e.querySelector(u) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(bu(n))) return;
          }
          a = e.createElement("link"), Kl(a, "link", l), Yl(a), e.head.appendChild(a);
        }
      }
    }
    function bm(l, t, e) {
      Ft.S(l, t, e);
      var a = Aa;
      if (a && l) {
        var u = ke(a).hoistableStyles, n = _a(l);
        t = t || "default";
        var c = u.get(n);
        if (!c) {
          var i = {
            loading: 0,
            preload: null
          };
          if (c = a.querySelector(vu(n))) i.loading = 5;
          else {
            l = M({
              rel: "stylesheet",
              href: l,
              "data-precedence": t
            }, e), (e = At.get(n)) && ff(l, e);
            var s = c = a.createElement("link");
            Yl(s), Kl(s, "link", l), s._p = new Promise(function(b, z) {
              s.onload = b, s.onerror = z;
            }), s.addEventListener("load", function() {
              i.loading |= 1;
            }), s.addEventListener("error", function() {
              i.loading |= 2;
            }), i.loading |= 4, Cn(c, t, a);
          }
          c = {
            type: "stylesheet",
            instance: c,
            count: 1,
            state: i
          }, u.set(n, c);
        }
      }
    }
    function Sm(l, t) {
      Ft.X(l, t);
      var e = Aa;
      if (e && l) {
        var a = ke(e).hoistableScripts, u = Na(l), n = a.get(u);
        n || (n = e.querySelector(bu(u)), n || (l = M({
          src: l,
          async: true
        }, t), (t = At.get(u)) && sf(l, t), n = e.createElement("script"), Yl(n), Kl(n, "link", l), e.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, a.set(u, n));
      }
    }
    function xm(l, t) {
      Ft.M(l, t);
      var e = Aa;
      if (e && l) {
        var a = ke(e).hoistableScripts, u = Na(l), n = a.get(u);
        n || (n = e.querySelector(bu(u)), n || (l = M({
          src: l,
          async: true,
          type: "module"
        }, t), (t = At.get(u)) && sf(l, t), n = e.createElement("script"), Yl(n), Kl(n, "link", l), e.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, a.set(u, n));
      }
    }
    function y0(l, t, e, a) {
      var u = (u = P.current) ? Rn(u) : null;
      if (!u) throw Error(r(446));
      switch (l) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string" ? (t = _a(e.href), e = ke(u).hoistableStyles, a = e.get(t), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(t, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
            l = _a(e.href);
            var n = ke(u).hoistableStyles, c = n.get(l);
            if (c || (u = u.ownerDocument || u, c = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, n.set(l, c), (n = u.querySelector(vu(l))) && !n._p && (c.instance = n, c.state.loading = 5), At.has(l) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, At.set(l, e), n || pm(u, l, e, c.state))), t && a === null) throw Error(r(528, ""));
            return c;
          }
          if (t && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Na(e), e = ke(u).hoistableScripts, a = e.get(t), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(t, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(r(444, l));
      }
    }
    function _a(l) {
      return 'href="' + vt(l) + '"';
    }
    function vu(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function m0(l) {
      return M({}, l, {
        "data-precedence": l.precedence,
        precedence: null
      });
    }
    function pm(l, t, e, a) {
      l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), Kl(t, "link", e), Yl(t), l.head.appendChild(t));
    }
    function Na(l) {
      return '[src="' + vt(l) + '"]';
    }
    function bu(l) {
      return "script[async]" + l;
    }
    function h0(l, t, e) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + vt(e.href) + '"]');
          if (a) return t.instance = a, Yl(a), a;
          var u = M({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement("style"), Yl(a), Kl(a, "style", u), Cn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = _a(e.href);
          var n = l.querySelector(vu(u));
          if (n) return t.state.loading |= 4, t.instance = n, Yl(n), n;
          a = m0(e), (u = At.get(u)) && ff(a, u), n = (l.ownerDocument || l).createElement("link"), Yl(n);
          var c = n;
          return c._p = new Promise(function(i, s) {
            c.onload = i, c.onerror = s;
          }), Kl(n, "link", a), t.state.loading |= 4, Cn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Na(e.src), (u = l.querySelector(bu(n))) ? (t.instance = u, Yl(u), u) : (a = e, (u = At.get(n)) && (a = M({}, e), sf(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Yl(u), Kl(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Cn(a, e.precedence, l));
      return t.instance;
    }
    function Cn(l, t, e) {
      for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
        var i = a[c];
        if (i.dataset.precedence === t) n = i;
        else if (n !== u) break;
      }
      n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
    }
    function ff(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
    }
    function sf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
    }
    var Hn = null;
    function g0(l, t, e) {
      if (Hn === null) {
        var a = /* @__PURE__ */ new Map(), u = Hn = /* @__PURE__ */ new Map();
        u.set(e, a);
      } else u = Hn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
      if (a.has(l)) return a;
      for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
        var n = e[u];
        if (!(n[Ca] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
          var c = n.getAttribute(t) || "";
          c = l + c;
          var i = a.get(c);
          i ? i.push(n) : a.set(c, [
            n
          ]);
        }
      }
      return a;
    }
    function v0(l, t, e) {
      l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
    }
    function Em(l, t, e) {
      if (e === 1 || t.itemProp != null) return false;
      switch (l) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : true;
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function b0(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    function zm(l, t, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var u = _a(a.href), n = t.querySelector(vu(u));
          if (n) {
            t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Bn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Yl(n);
            return;
          }
          n = t.ownerDocument || t, a = m0(a), (u = At.get(u)) && ff(a, u), n = n.createElement("link"), Yl(n);
          var c = n;
          c._p = new Promise(function(i, s) {
            c.onload = i, c.onerror = s;
          }), Kl(n, "link", a), e.instance = n;
        }
        l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Bn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
      }
    }
    var rf = 0;
    function Tm(l, t) {
      return l.stylesheets && l.count === 0 && Yn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
        var a = setTimeout(function() {
          if (l.stylesheets && Yn(l, l.stylesheets), l.unsuspend) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        }, 6e4 + t);
        0 < l.imgBytes && rf === 0 && (rf = 62500 * um());
        var u = setTimeout(function() {
          if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Yn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        }, (l.imgBytes > rf ? 50 : 800) + t);
        return l.unsuspend = e, function() {
          l.unsuspend = null, clearTimeout(a), clearTimeout(u);
        };
      } : null;
    }
    function Bn() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Yn(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          this.unsuspend = null, l();
        }
      }
    }
    var qn = null;
    function Yn(l, t) {
      l.stylesheets = null, l.unsuspend !== null && (l.count++, qn = /* @__PURE__ */ new Map(), t.forEach(Am, l), qn = null, Bn.call(l));
    }
    function Am(l, t) {
      if (!(t.state.loading & 4)) {
        var e = qn.get(l);
        if (e) var a = e.get(null);
        else {
          e = /* @__PURE__ */ new Map(), qn.set(l, e);
          for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
            var c = u[n];
            (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
          }
          a && e.set(null, a);
        }
        u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = Bn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
      }
    }
    var Su = {
      $$typeof: bl,
      Provider: null,
      Consumer: null,
      _currentValue: J,
      _currentValue2: J,
      _threadCount: 0
    };
    function _m(l, t, e, a, u, n, c, i, s) {
      this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = uc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uc(0), this.hiddenUpdates = uc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function S0(l, t, e, a, u, n, c, i, s, b, z, N) {
      return l = new _m(l, t, e, c, s, b, z, N, i), t = 1, n === true && (t |= 24), n = ft(3, null, null, t), l.current = n, n.stateNode = l, t = Zc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
        element: a,
        isDehydrated: e,
        cache: t
      }, Jc(n), l;
    }
    function x0(l) {
      return l ? (l = ua, l) : ua;
    }
    function p0(l, t, e, a, u, n) {
      u = x0(u), a.context === null ? a.context = u : a.pendingContext = u, a = ce(t), a.payload = {
        element: e
      }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ie(l, a, t), e !== null && (at(e, l, t), Fa(e, l, t));
    }
    function E0(l, t) {
      if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
        var e = l.retryLane;
        l.retryLane = e !== 0 && e < t ? e : t;
      }
    }
    function of(l, t) {
      E0(l, t), (l = l.alternate) && E0(l, t);
    }
    function z0(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = je(l, 67108864);
        t !== null && at(t, l, 67108864), of(l, 67108864);
      }
    }
    function T0(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = yt();
        t = nc(t);
        var e = je(l, t);
        e !== null && at(e, l, t), of(l, t);
      }
    }
    var Gn = true;
    function Nm(l, t, e, a) {
      var u = T.T;
      T.T = null;
      var n = H.p;
      try {
        H.p = 2, df(l, t, e, a);
      } finally {
        H.p = n, T.T = u;
      }
    }
    function Om(l, t, e, a) {
      var u = T.T;
      T.T = null;
      var n = H.p;
      try {
        H.p = 8, df(l, t, e, a);
      } finally {
        H.p = n, T.T = u;
      }
    }
    function df(l, t, e, a) {
      if (Gn) {
        var u = yf(a);
        if (u === null) Fi(l, t, a, Qn, e), _0(l, a);
        else if (Dm(u, l, t, e, a)) a.stopPropagation();
        else if (_0(l, a), t & 4 && -1 < Mm.indexOf(l)) {
          for (; u !== null; ) {
            var n = we(u);
            if (n !== null) switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = _e(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var s = 1 << 31 - ct(c);
                      i.entanglements[1] |= s, c &= ~s;
                    }
                    Rt(n), (il & 6) === 0 && (En = ut() + 500, yu(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = je(n, 2), i !== null && at(i, n, 2), Tn(), of(n, 2);
            }
            if (n = yf(a), n === null && Fi(l, t, a, Qn, e), n === u) break;
            u = n;
          }
          u !== null && a.stopPropagation();
        } else Fi(l, t, a, null, e);
      }
    }
    function yf(l) {
      return l = mc(l), mf(l);
    }
    var Qn = null;
    function mf(l) {
      if (Qn = null, l = Je(l), l !== null) {
        var t = j(l);
        if (t === null) l = null;
        else {
          var e = t.tag;
          if (e === 13) {
            if (l = U(t), l !== null) return l;
            l = null;
          } else if (e === 31) {
            if (l = C(t), l !== null) return l;
            l = null;
          } else if (e === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return Qn = l, null;
    }
    function A0(l) {
      switch (l) {
        case "beforetoggle":
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
        case "toggle":
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
          return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (md()) {
            case Uf:
              return 2;
            case Rf:
              return 8;
            case Ou:
            case hd:
              return 32;
            case Cf:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hf = false, be = null, Se = null, xe = null, xu = /* @__PURE__ */ new Map(), pu = /* @__PURE__ */ new Map(), pe = [], Mm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function _0(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          be = null;
          break;
        case "dragenter":
        case "dragleave":
          Se = null;
          break;
        case "mouseover":
        case "mouseout":
          xe = null;
          break;
        case "pointerover":
        case "pointerout":
          xu.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          pu.delete(t.pointerId);
      }
    }
    function Eu(l, t, e, a, u, n) {
      return l === null || l.nativeEvent !== n ? (l = {
        blockedOn: t,
        domEventName: e,
        eventSystemFlags: a,
        nativeEvent: n,
        targetContainers: [
          u
        ]
      }, t !== null && (t = we(t), t !== null && z0(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
    }
    function Dm(l, t, e, a, u) {
      switch (t) {
        case "focusin":
          return be = Eu(be, l, t, e, a, u), true;
        case "dragenter":
          return Se = Eu(Se, l, t, e, a, u), true;
        case "mouseover":
          return xe = Eu(xe, l, t, e, a, u), true;
        case "pointerover":
          var n = u.pointerId;
          return xu.set(n, Eu(xu.get(n) || null, l, t, e, a, u)), true;
        case "gotpointercapture":
          return n = u.pointerId, pu.set(n, Eu(pu.get(n) || null, l, t, e, a, u)), true;
      }
      return false;
    }
    function N0(l) {
      var t = Je(l.target);
      if (t !== null) {
        var e = j(t);
        if (e !== null) {
          if (t = e.tag, t === 13) {
            if (t = U(e), t !== null) {
              l.blockedOn = t, Qf(l.priority, function() {
                T0(e);
              });
              return;
            }
          } else if (t === 31) {
            if (t = C(e), t !== null) {
              l.blockedOn = t, Qf(l.priority, function() {
                T0(e);
              });
              return;
            }
          } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
            l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
            return;
          }
        }
      }
      l.blockedOn = null;
    }
    function Xn(l) {
      if (l.blockedOn !== null) return false;
      for (var t = l.targetContainers; 0 < t.length; ) {
        var e = yf(l.nativeEvent);
        if (e === null) {
          e = l.nativeEvent;
          var a = new e.constructor(e.type, e);
          yc = a, e.target.dispatchEvent(a), yc = null;
        } else return t = we(e), t !== null && z0(t), l.blockedOn = e, false;
        t.shift();
      }
      return true;
    }
    function O0(l, t, e) {
      Xn(l) && e.delete(t);
    }
    function jm() {
      hf = false, be !== null && Xn(be) && (be = null), Se !== null && Xn(Se) && (Se = null), xe !== null && Xn(xe) && (xe = null), xu.forEach(O0), pu.forEach(O0);
    }
    function Zn(l, t) {
      l.blockedOn === t && (l.blockedOn = null, hf || (hf = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, jm)));
    }
    var Ln = null;
    function M0(l) {
      Ln !== l && (Ln = l, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        Ln === l && (Ln = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (mf(a || e) === null) continue;
            break;
          }
          var n = we(e);
          n !== null && (l.splice(t, 3), t -= 3, di(n, {
            pending: true,
            data: u,
            method: e.method,
            action: a
          }, a, u));
        }
      }));
    }
    function Oa(l) {
      function t(s) {
        return Zn(s, l);
      }
      be !== null && Zn(be, l), Se !== null && Zn(Se, l), xe !== null && Zn(xe, l), xu.forEach(t), pu.forEach(t);
      for (var e = 0; e < pe.length; e++) {
        var a = pe[e];
        a.blockedOn === l && (a.blockedOn = null);
      }
      for (; 0 < pe.length && (e = pe[0], e.blockedOn === null); ) N0(e), e.blockedOn === null && pe.shift();
      if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[Fl] || null;
        if (typeof n == "function") c || M0(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[Fl] || null) i = c.formAction;
            else if (mf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), M0(e);
        }
      }
    }
    function D0() {
      function l(n) {
        n.canIntercept && n.info === "react-transition" && n.intercept({
          handler: function() {
            return new Promise(function(c) {
              return u = c;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        u !== null && (u(), u = null), a || setTimeout(e, 20);
      }
      function e() {
        if (!a && !navigation.transition) {
          var n = navigation.currentEntry;
          n && n.url != null && navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var a = false, u = null;
        return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
          a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
        };
      }
    }
    function gf(l) {
      this._internalRoot = l;
    }
    Vn.prototype.render = gf.prototype.render = function(l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var e = t.current, a = yt();
      p0(e, a, l, t, null, null);
    }, Vn.prototype.unmount = gf.prototype.unmount = function() {
      var l = this._internalRoot;
      if (l !== null) {
        this._internalRoot = null;
        var t = l.containerInfo;
        p0(l.current, 2, null, l, null, null), Tn(), t[Ke] = null;
      }
    };
    function Vn(l) {
      this._internalRoot = l;
    }
    Vn.prototype.unstable_scheduleHydration = function(l) {
      if (l) {
        var t = Gf();
        l = {
          blockedOn: null,
          target: l,
          priority: t
        };
        for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++) ;
        pe.splice(e, 0, l), e === 0 && N0(l);
      }
    };
    var j0 = d.version;
    if (j0 !== "19.2.4") throw Error(r(527, j0, "19.2.4"));
    H.findDOMNode = function(l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
      return l = h(t), l = l !== null ? R(l) : null, l = l === null ? null : l.stateNode, l;
    };
    var Um = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: T,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Kn.isDisabled && Kn.supportsFiber) try {
        ja = Kn.inject(Um), nt = Kn;
      } catch {
      }
    }
    return Tu.createRoot = function(l, t) {
      if (!_(l)) throw Error(r(299));
      var e = false, a = "", u = qr, n = Yr, c = Gr;
      return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = S0(l, 1, false, null, null, e, a, null, u, n, c, D0), l[Ke] = t.current, Wi(l), new gf(t);
    }, Tu.hydrateRoot = function(l, t, e) {
      if (!_(l)) throw Error(r(299));
      var a = false, u = "", n = qr, c = Yr, i = Gr, s = null;
      return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = S0(l, 1, true, t, e ?? null, a, u, s, n, c, i, D0), t.context = x0(null), e = t.current, a = yt(), a = nc(a), u = ce(a), u.callback = null, ie(e, u, a), e = a, t.current.lanes = e, Ra(t, e), Rt(t), l[Ke] = t.current, Wi(l), new Vn(t);
    }, Tu.version = "19.2.4", Tu;
  }
  var X0;
  function Xm() {
    if (X0) return Sf.exports;
    X0 = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
    }
    return f(), Sf.exports = Qm(), Sf.exports;
  }
  var Zm = Xm();
  const Lm = ({ recommendation: f, equity: d, potOdds: g }) => {
    let r = "";
    f === "FOLD" ? r = `Pot Odds (${(g * 100).toFixed(1)}%) are higher than your Equity (${(d * 100).toFixed(1)}%). Calling is -EV.` : f === "RAISE" ? r = `Strong Equity (${(d * 100).toFixed(1)}%) suggests value betting or raising for protection.` : f === "CHECK" ? r = "No bet facing you. Checking is the standard play to realize equity or trap." : r = `Equity (${(d * 100).toFixed(1)}%) justifies calling the bet given the Pot Odds (${(g * 100).toFixed(1)}%).`;
    const _ = Math.min(d * 100, 100), j = Math.min(g * 100, 100);
    return S.jsxs("div", {
      className: "mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
      children: [
        S.jsx("div", {
          className: "flex items-center gap-2 mb-2",
          children: S.jsx("h3", {
            className: "text-xs font-bold text-gray-500 uppercase tracking-wider",
            children: "Decision Rationale"
          })
        }),
        S.jsx("p", {
          className: "text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",
          children: r
        }),
        S.jsxs("div", {
          className: "space-y-3",
          children: [
            S.jsxs("div", {
              children: [
                S.jsxs("div", {
                  className: "flex justify-between text-xs mb-1",
                  children: [
                    S.jsx("span", {
                      className: "font-bold text-blue-600 dark:text-blue-400",
                      children: "Equity (Win %)"
                    }),
                    S.jsxs("span", {
                      className: "font-mono",
                      children: [
                        (d * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                S.jsx("div", {
                  className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  children: S.jsx("div", {
                    className: "h-full bg-blue-500 rounded-full transition-all duration-500",
                    style: {
                      width: `${_}%`
                    }
                  })
                })
              ]
            }),
            S.jsxs("div", {
              children: [
                S.jsxs("div", {
                  className: "flex justify-between text-xs mb-1",
                  children: [
                    S.jsx("span", {
                      className: "font-bold text-orange-600 dark:text-orange-400",
                      children: "Pot Odds (Cost)"
                    }),
                    S.jsxs("span", {
                      className: "font-mono",
                      children: [
                        (g * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                S.jsx("div", {
                  className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  children: S.jsx("div", {
                    className: "h-full bg-orange-500 rounded-full transition-all duration-500",
                    style: {
                      width: `${j}%`
                    }
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  };
  const Vm = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W0 = (...f) => f.filter((d, g, r) => !!d && d.trim() !== "" && r.indexOf(d) === g).join(" ").trim();
  var Km = {
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
  const Jm = G.forwardRef(({ color: f = "currentColor", size: d = 24, strokeWidth: g = 2, absoluteStrokeWidth: r, className: _ = "", children: j, iconNode: U, ...C }, E) => G.createElement("svg", {
    ref: E,
    ...Km,
    width: d,
    height: d,
    stroke: f,
    strokeWidth: r ? Number(g) * 24 / Number(d) : g,
    className: W0("lucide", _),
    ...C
  }, [
    ...U.map(([h, R]) => G.createElement(h, R)),
    ...Array.isArray(j) ? j : [
      j
    ]
  ]));
  const _u = (f, d) => {
    const g = G.forwardRef(({ className: r, ..._ }, j) => G.createElement(Jm, {
      ref: j,
      iconNode: d,
      className: W0(`lucide-${Vm(f)}`, r),
      ..._
    }));
    return g.displayName = `${f}`, g;
  };
  const wm = [
    [
      "path",
      {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
      }
    ]
  ], km = _u("ChevronLeft", wm);
  const $m = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "path",
      {
        d: "M12 16v-4",
        key: "1dtifu"
      }
    ],
    [
      "path",
      {
        d: "M12 8h.01",
        key: "e9boi3"
      }
    ]
  ], Wm = _u("Info", $m);
  const Fm = [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h"
      }
    ],
    [
      "path",
      {
        d: "M12 5v14",
        key: "s699le"
      }
    ]
  ], Im = _u("Plus", Fm);
  const Pm = [
    [
      "path",
      {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
      }
    ],
    [
      "path",
      {
        d: "M3 3v5h5",
        key: "1xhq8a"
      }
    ]
  ], lh = _u("RotateCcw", Pm);
  const th = [
    [
      "path",
      {
        d: "M18 6 6 18",
        key: "1bl5f8"
      }
    ],
    [
      "path",
      {
        d: "m6 6 12 12",
        key: "d8bk6v"
      }
    ]
  ], F0 = _u("X", th), Au = ({ term: f, children: d, onInfoClick: g, className: r = "" }) => S.jsxs("span", {
    className: `inline-flex items-center gap-1 ${r}`,
    children: [
      d,
      S.jsx("button", {
        onClick: (_) => {
          _.stopPropagation(), g(f);
        },
        className: "p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
        children: S.jsx(Wm, {
          size: 10,
          className: "text-gray-400 hover:text-blue-500"
        })
      })
    ]
  }), eh = ({ rawEquity: f, adjustedEquity: d, potOdds: g, ev: r, recommendation: _, position: j, isCalculating: U, onInfoClick: C }) => {
    const E = () => {
      switch (_) {
        case "RAISE":
          return "text-green-600 dark:text-green-400";
        case "CALL":
          return "text-green-600 dark:text-green-400";
        case "CHECK":
          return "text-gray-600 dark:text-gray-300";
        case "FOLD":
          return "text-red-600 dark:text-red-400";
        default:
          return "text-gray-400";
      }
    }, h = () => {
      switch (_) {
        case "RAISE":
          return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
        case "CALL":
          return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
        case "CHECK":
          return "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700";
        case "FOLD":
          return "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
        default:
          return "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800";
      }
    };
    return S.jsxs("div", {
      className: `m-4 p-6 rounded-xl border-2 transition-all ${h()} shadow-sm ${U ? "opacity-50 animate-pulse" : "opacity-100"}`,
      children: [
        S.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            S.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                S.jsx("span", {
                  className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Recommendation"
                }),
                S.jsx(Au, {
                  term: "Position",
                  onInfoClick: C,
                  children: S.jsx("span", {
                    className: `text-[9px] px-1.5 py-0.5 rounded font-bold ${j === "IP" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`,
                    children: j
                  })
                })
              ]
            }),
            S.jsx("span", {
              className: `text-5xl font-black tracking-tighter ${E()}`,
              children: _
            }),
            S.jsxs("div", {
              className: "mt-6 w-full grid grid-cols-3 gap-2 divide-x divide-gray-200 dark:divide-gray-700",
              children: [
                S.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    S.jsx(Au, {
                      term: "Equity",
                      onInfoClick: C,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "Raw Eq"
                    }),
                    S.jsxs("span", {
                      className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                      children: [
                        (f * 100).toFixed(1),
                        "%"
                      ]
                    }),
                    S.jsxs("span", {
                      className: "text-[9px] text-gray-400",
                      children: [
                        "Adj: ",
                        (d * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                S.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    S.jsx(Au, {
                      term: "PotOdds",
                      onInfoClick: C,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "Pot Odds"
                    }),
                    S.jsxs("span", {
                      className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                      children: [
                        (g * 100).toFixed(1),
                        "%"
                      ]
                    }),
                    S.jsx("span", {
                      className: `text-[9px] font-bold ${d > g ? "text-green-500" : "text-red-500"}`,
                      children: d > g ? "Good" : "Bad"
                    })
                  ]
                }),
                S.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    S.jsx(Au, {
                      term: "EV",
                      onInfoClick: C,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "EV"
                    }),
                    S.jsxs("span", {
                      className: `text-xl font-bold ${r >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`,
                      children: [
                        r >= 0 ? "+" : "",
                        r.toFixed(2)
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        S.jsx(Lm, {
          recommendation: _,
          equity: d,
          potOdds: g
        })
      ]
    });
  };
  function ah(f, d) {
    return f * 4 + d;
  }
  function uh(f) {
    return Math.floor(f / 4);
  }
  function nh(f) {
    return f % 4;
  }
  const Fn = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A"
  ], Of = [
    "c",
    "d",
    "h",
    "s"
  ];
  function ch(f) {
    return Fn[uh(f)] + Of[nh(f)];
  }
  function Z0(f) {
    const d = Fn.indexOf(f[0]), g = Of.indexOf(f[1]);
    if (d === -1 || g === -1) throw new Error(`Invalid card string: ${f}`);
    return ah(d, g);
  }
  var I0 = $0();
  const ih = ({ selectedCards: f, onSelect: d, onClose: g, isOpen: r }) => {
    const [_, j] = G.useState("rank"), [U, C] = G.useState(null);
    if (G.useEffect(() => {
      r && (j("rank"), C(null));
    }, [
      r
    ]), !r) return null;
    const E = [
      {
        name: "s",
        label: "\u2660",
        color: "text-gray-900 dark:text-gray-100",
        fullName: "Spades"
      },
      {
        name: "h",
        label: "\u2665",
        color: "text-red-600 dark:text-red-500",
        fullName: "Hearts"
      },
      {
        name: "c",
        label: "\u2663",
        color: "text-green-700 dark:text-green-500",
        fullName: "Clubs"
      },
      {
        name: "d",
        label: "\u2666",
        color: "text-blue-600 dark:text-blue-500",
        fullName: "Diamonds"
      }
    ], h = [
      ...Fn
    ].reverse(), R = (D) => {
      C(D), j("suit");
    }, M = (D) => {
      U && d(`${U}${D}`);
    };
    return I0.createPortal(S.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md",
      onClick: g,
      children: S.jsxs("div", {
        className: "bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col transition-all transform scale-100",
        onClick: (D) => D.stopPropagation(),
        children: [
          S.jsxs("div", {
            className: "flex justify-between items-center p-5 border-b border-gray-100 dark:border-gray-800",
            children: [
              S.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  _ === "suit" && S.jsx("button", {
                    onClick: () => j("rank"),
                    className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500",
                    children: S.jsx(km, {
                      size: 20
                    })
                  }),
                  S.jsx("h2", {
                    className: "text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight",
                    children: _ === "rank" ? "Select Rank" : `Select Suit for ${U}`
                  })
                ]
              }),
              S.jsx("button", {
                onClick: g,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                children: S.jsx(F0, {
                  size: 20,
                  className: "text-gray-400"
                })
              })
            ]
          }),
          S.jsx("div", {
            className: "p-6",
            children: _ === "rank" ? S.jsx("div", {
              className: "grid grid-cols-4 gap-3",
              children: h.map((D) => S.jsx("button", {
                onClick: () => R(D),
                className: "aspect-square rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex items-center justify-center text-xl font-black text-gray-900 dark:text-gray-100 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all active:scale-90",
                children: D
              }, D))
            }) : S.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: E.map((D) => {
                const V = f.includes(`${U}${D.name}`);
                return S.jsxs("button", {
                  onClick: () => !V && M(D.name),
                  disabled: V,
                  className: `
                      flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all active:scale-95
                      ${V ? "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-30 cursor-not-allowed" : "bg-gray-50 dark:bg-gray-950 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"}
                    `,
                  children: [
                    S.jsx("span", {
                      className: `text-4xl mb-1 ${D.color}`,
                      children: D.label
                    }),
                    S.jsx("span", {
                      className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                      children: D.fullName
                    })
                  ]
                }, D.name);
              })
            })
          })
        ]
      })
    }), document.body);
  }, fh = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A"
  ], P0 = [
    "\u2663",
    "\u2666",
    "\u2665",
    "\u2660"
  ], sh = (f) => {
    const d = Math.floor(f / 4), g = f % 4;
    return fh[d] + P0[g];
  }, ld = (f) => P0[f], td = (f) => f === 1 || f === 2 ? "text-red-500" : "text-slate-900 dark:text-slate-100", rh = ({ suggestions: f, selectedIndex: d, onSelect: g }) => f.length === 0 ? null : S.jsx("div", {
    className: "absolute -top-14 left-1/2 -translate-x-1/2 flex gap-1 p-1.5 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200",
    children: f.map((r, _) => {
      const j = r[1], U = [
        "c",
        "d",
        "h",
        "s"
      ].indexOf(j), C = ld(U), E = td(U), h = r[0];
      return S.jsxs("button", {
        onClick: (R) => {
          R.stopPropagation(), g(r);
        },
        className: `
              w-10 h-10 rounded-lg flex flex-col items-center justify-center transition-all
              ${_ === d ? "bg-blue-500 text-white scale-110 shadow-lg" : "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"}
            `,
        children: [
          S.jsx("span", {
            className: "text-[10px] font-black leading-none",
            children: h
          }),
          S.jsx("span", {
            className: `text-xl leading-none ${_ === d ? "text-white" : E}`,
            children: C
          })
        ]
      }, r);
    })
  }), zf = ({ id: f, card: d, label: g, onClick: r, onKeyDown: _, onBlur: j, isFocused: U, className: C = "", buffer: E, suggestions: h = [], selectedIndex: R = 0, onConfirmSuggestion: M }) => {
    const D = G.useRef(null), V = d !== void 0 ? d % 4 : 0, k = d !== void 0 ? ld(V) : null, fl = d !== void 0 ? td(V) : "", Hl = d !== void 0 ? sh(d).slice(0, -1) : "";
    return G.useEffect(() => {
      U && D.current && D.current.focus();
    }, [
      U
    ]), S.jsxs("div", {
      ref: D,
      tabIndex: 0,
      id: f,
      onClick: r,
      onKeyDown: _,
      onBlur: j,
      className: `
        relative w-14 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all outline-none
        ${d !== void 0 ? "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600" : "bg-gray-100 border-dashed border-gray-300 dark:bg-gray-900 dark:border-gray-700"}
        ${U ? "ring-2 ring-blue-500 border-blue-500 scale-105 z-10 shadow-lg" : "active:scale-95"}
        ${C}
      `,
      children: [
        U && S.jsx(rh, {
          suggestions: h,
          selectedIndex: R,
          onSelect: () => {
            M && M();
          }
        }),
        d !== void 0 ? S.jsxs(S.Fragment, {
          children: [
            S.jsx("span", {
              className: "text-lg font-bold text-gray-900 dark:text-gray-100",
              children: Hl
            }),
            S.jsx("span", {
              className: `text-2xl leading-none ${fl}`,
              children: k
            })
          ]
        }) : S.jsxs(S.Fragment, {
          children: [
            S.jsx("span", {
              className: "text-[10px] text-gray-400 font-bold uppercase",
              children: g
            }),
            U && E && S.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 rounded-lg",
              children: S.jsx("span", {
                className: "text-xl font-black text-blue-600 dark:text-blue-400 animate-pulse uppercase",
                children: E
              })
            })
          ]
        })
      ]
    });
  }, oh = () => {
    const [f, d] = G.useState(false), [g, r] = G.useState(null), [_, j] = G.useState(null), [U, C] = G.useState(null), E = G.useCallback((M) => {
      r(M), d(true);
    }, []), h = G.useCallback(() => {
      d(false), r(null);
    }, []), R = G.useCallback(() => C(null), []);
    return {
      isOpen: f,
      activeSlotIndex: g,
      openGrid: E,
      closeGrid: h,
      activeSlotId: _,
      setActiveSlotId: j,
      lastTypedCard: U,
      setLastTypedCard: C,
      clearLastTypedCard: R
    };
  }, dh = {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    1: "T",
    t: "T",
    T: "T",
    j: "J",
    J: "J",
    q: "Q",
    Q: "Q",
    k: "K",
    K: "K",
    a: "A",
    A: "A"
  }, L0 = {
    s: "s",
    S: "s",
    h: "h",
    H: "h",
    c: "c",
    C: "c",
    d: "d",
    D: "d"
  };
  function V0(f) {
    if (!f) return {
      rank: null,
      suit: null
    };
    let d = null, g = null;
    return f.startsWith("10") ? (d = "T", f.length > 2 && (g = L0[f[2]] || null)) : (d = dh[f[0]] || null, f.length > 1 && (g = L0[f[1]] || null)), {
      rank: d,
      suit: g
    };
  }
  function yh(f, d) {
    return Fn.includes(f) ? Of.filter((g) => !d.includes(`${f}${g}`)) : [];
  }
  const mh = (f, d) => {
    const [g, r] = G.useState(""), [_, j] = G.useState(0), U = G.useMemo(() => {
      const { rank: R } = V0(g);
      return R ? yh(R, d).map((D) => `${R}${D}`) : [];
    }, [
      g,
      d
    ]);
    G.useEffect(() => {
      j(0);
    }, [
      U.length
    ]);
    const C = G.useCallback((R) => {
      /^[a-zA-Z0-9]$/.test(R) && r((M) => {
        const D = M + R, { rank: V, suit: k } = V0(D);
        if (V && k) {
          const fl = `${V}${k}`;
          if (!d.includes(fl)) return f(fl), "";
        }
        return D.length > 3 || D.length > 0 && !V && D !== "1" ? "" : D;
      });
    }, [
      f,
      d
    ]), E = G.useCallback(() => r(""), []), h = G.useCallback(() => {
      U[_] && (f(U[_]), E());
    }, [
      U,
      _,
      f,
      E
    ]);
    return {
      buffer: g,
      suggestions: U,
      selectedIndex: _,
      setSelectedIndex: j,
      updateBuffer: C,
      clearBuffer: E,
      onConfirmSuggestion: h
    };
  }, hh = ({ holeCards: f, boardCards: d, onSelectCard: g, onClear: r }) => {
    const { isOpen: _, activeSlotIndex: j, openGrid: U, closeGrid: C, activeSlotId: E, setActiveSlotId: h } = oh(), R = G.useMemo(() => [
      ...f,
      ...d
    ].filter((K) => K !== void 0).map(ch), [
      f,
      d
    ]), M = G.useCallback((K) => {
      if (E === null) return;
      const X = Z0(K), [I, ql] = E.split("-"), Jl = parseInt(ql);
      g(I === "hole" ? "hole" : "board", Jl, X), I === "hole" && Jl === 0 ? h("hole-1") : I === "hole" && Jl === 1 ? h("board-0") : I === "board" && Jl < 4 ? h(`board-${Jl + 1}`) : h(null);
    }, [
      E,
      g,
      h
    ]), { buffer: D, suggestions: V, selectedIndex: k, setSelectedIndex: fl, updateBuffer: Hl, clearBuffer: El, onConfirmSuggestion: Bl } = mh(M, R), bl = (K, X) => {
      const I = `${K}-${X}`;
      h(I), El(), U(K === "hole" ? X : X + 2);
    }, Al = (K) => {
      if (K.key === "Escape") h(null), El();
      else if (K.key === "Backspace") {
        if (E) {
          const [X, I] = E.split("-");
          g(X, parseInt(I), null), El();
        }
      } else K.key === "ArrowRight" ? (fl((X) => (X + 1) % V.length), K.preventDefault()) : K.key === "ArrowLeft" ? (fl((X) => (X - 1 + V.length) % V.length), K.preventDefault()) : K.key === "Enter" ? V.length > 0 && (Bl(), K.preventDefault()) : K.key.length === 1 && Hl(K.key);
    }, Ql = (K) => {
      if (j === null) return;
      const X = Z0(K);
      j < 2 ? g("hole", j, X) : g("board", j - 2, X), C(), h(null);
    };
    return S.jsxs("div", {
      className: "flex flex-col gap-4 p-4",
      children: [
        S.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            S.jsx("h3", {
              className: "text-xs font-bold text-gray-500 uppercase",
              children: "Hole Cards"
            }),
            S.jsx("button", {
              onClick: r,
              className: "text-[10px] text-blue-500 font-bold uppercase",
              children: "Clear All"
            })
          ]
        }),
        S.jsxs("div", {
          className: "flex gap-2",
          children: [
            S.jsx(zf, {
              id: "hole-0",
              card: f[0],
              label: "H1",
              onClick: () => bl("hole", 0),
              onKeyDown: Al,
              isFocused: E === "hole-0",
              buffer: E === "hole-0" ? D : void 0,
              suggestions: E === "hole-0" ? V : [],
              selectedIndex: k,
              onConfirmSuggestion: Bl,
              className: "hole-card-slot"
            }),
            S.jsx(zf, {
              id: "hole-1",
              card: f[1],
              label: "H2",
              onClick: () => bl("hole", 1),
              onKeyDown: Al,
              isFocused: E === "hole-1",
              buffer: E === "hole-1" ? D : void 0,
              suggestions: E === "hole-1" ? V : [],
              selectedIndex: k,
              onConfirmSuggestion: Bl,
              className: "hole-card-slot"
            })
          ]
        }),
        S.jsx("h3", {
          className: "text-xs font-bold text-gray-500 uppercase mt-2",
          children: "Board Cards"
        }),
        S.jsx("div", {
          className: "flex gap-2",
          children: [
            0,
            1,
            2,
            3,
            4
          ].map((K) => S.jsx(zf, {
            id: `board-${K}`,
            card: d[K],
            label: `B${K + 1}`,
            onClick: () => bl("board", K),
            onKeyDown: Al,
            isFocused: E === `board-${K}`,
            buffer: E === `board-${K}` ? D : void 0,
            suggestions: E === `board-${K}` ? V : [],
            selectedIndex: k,
            onConfirmSuggestion: Bl,
            className: "board-card-slot"
          }, K))
        }),
        S.jsx(ih, {
          isOpen: _,
          onClose: C,
          selectedCards: R,
          onSelect: Ql
        })
      ]
    });
  }, K0 = ({ label: f, value: d, onChange: g, onIncrement: r, onReset: _ }) => {
    const j = [
      10,
      20,
      50
    ];
    return S.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        S.jsx("div", {
          className: "flex justify-between items-center",
          children: S.jsx("label", {
            className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
            children: f
          })
        }),
        S.jsx("div", {
          className: "flex items-center gap-2",
          children: S.jsxs("div", {
            className: "relative flex-1",
            children: [
              S.jsx("input", {
                type: "number",
                inputMode: "decimal",
                value: d === 0 ? "" : d,
                onChange: (U) => g(parseFloat(U.target.value) || 0),
                placeholder: "0",
                className: "w-full border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl p-3 pr-10 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100 transition-all"
              }),
              S.jsx("button", {
                onClick: _,
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-red-500 transition-colors",
                children: S.jsx(lh, {
                  size: 18
                })
              })
            ]
          })
        }),
        S.jsx("div", {
          className: "flex gap-2",
          children: j.map((U) => S.jsxs("button", {
            onClick: () => r(U),
            className: "flex-1 flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 py-2 rounded-lg text-xs font-black transition-all active:scale-95 border border-gray-200 dark:border-gray-700 hover:border-blue-400",
            children: [
              S.jsx(Im, {
                size: 12
              }),
              U
            ]
          }, U))
        })
      ]
    });
  }, gh = [
    {
      label: "1/4",
      ratio: 0.25
    },
    {
      label: "1/3",
      ratio: 0.33
    },
    {
      label: "1/2",
      ratio: 0.5
    },
    {
      label: "2/3",
      ratio: 0.66
    },
    {
      label: "3/4",
      ratio: 0.75
    },
    {
      label: "Pot",
      ratio: 1
    }
  ], vh = ({ onSelectRatio: f, selectedRatio: d }) => S.jsx("div", {
    className: "grid grid-cols-6 gap-1 my-2",
    children: gh.map((g) => S.jsx("button", {
      onClick: () => f(g.ratio),
      className: `
            px-1 py-2 text-[10px] font-bold uppercase rounded transition-colors
            ${d === g.ratio ? "bg-blue-600 text-white shadow-inner" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"}
          `,
      children: g.label
    }, g.label))
  }), bh = ({ potSize: f, facingBet: d, onUpdatePot: g, onUpdateBet: r, onIncrementPot: _, onIncrementBet: j, onResetPot: U, onResetBet: C, selectedRatio: E, onSelectRatio: h }) => S.jsxs("div", {
    className: "p-4 flex flex-col gap-6",
    children: [
      S.jsxs("div", {
        className: "flex flex-col gap-6 bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-2xl border border-gray-100 dark:border-gray-800",
        children: [
          S.jsx(K0, {
            label: "Current Pot ($)",
            value: f,
            onChange: g,
            onIncrement: _,
            onReset: U
          }),
          S.jsx(K0, {
            label: "Facing Bet ($)",
            value: d,
            onChange: r,
            onIncrement: j,
            onReset: C
          })
        ]
      }),
      S.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          S.jsx("label", {
            className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider px-1",
            children: "Facing Bet Ratio"
          }),
          S.jsx(vh, {
            onSelectRatio: h,
            selectedRatio: E
          })
        ]
      })
    ]
  }), Sh = {
    Tight: "Tight",
    Loose: "Loose",
    Random: "Random"
  }, Mf = [];
  for (let f = 0; f < 52; f++) for (let d = f + 1; d < 52; d++) Mf.push([
    f,
    d
  ]);
  const Af = new Array(1326).fill(0);
  Mf.forEach(([f, d], g) => {
    const r = Math.floor(f / 4), _ = Math.floor(d / 4), j = f % 4, U = d % 4, [C, E] = r > _ ? [
      r,
      _
    ] : [
      _,
      r
    ];
    let h = C * 2 + E;
    r === _ && (h += 52), j === U && (h += 4), Af[g] = h;
  });
  Array.from({
    length: 1326
  }, (f, d) => d).sort((f, d) => Af[d] - Af[f]);
  const J0 = new Int32Array(2704).fill(-1);
  Mf.forEach(([f, d], g) => {
    J0[f * 52 + d] = g, J0[d * 52 + f] = g;
  });
  const xh = ({ count: f, rangePreset: d, onCountChange: g, onRangeChange: r, onInfoClick: _ }) => S.jsxs("div", {
    className: "p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
    children: [
      S.jsxs("div", {
        className: "flex justify-between items-center mb-4",
        children: [
          S.jsx("label", {
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Opponents"
          }),
          S.jsxs("div", {
            className: "flex gap-2",
            children: [
              S.jsx("button", {
                onClick: () => g(Math.max(1, f - 1)),
                className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold",
                children: "-"
              }),
              S.jsx("span", {
                className: "text-lg font-bold w-4 text-center text-gray-800 dark:text-gray-100",
                children: f
              }),
              S.jsx("button", {
                onClick: () => g(Math.min(9, f + 1)),
                className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold",
                children: "+"
              })
            ]
          })
        ]
      }),
      S.jsxs("div", {
        className: "flex justify-between items-center",
        children: [
          S.jsx(Au, {
            term: "Ranges",
            onInfoClick: _,
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Range"
          }),
          S.jsx("div", {
            className: "flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1",
            children: Object.keys(Sh).map((j) => S.jsx("button", {
              onClick: () => r(j),
              className: `text-[10px] px-3 py-1.5 rounded-md font-bold transition-all ${d === j ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`,
              children: j
            }, j))
          })
        ]
      })
    ]
  }), ed = "optimalbet_", ph = (f, d) => {
    try {
      localStorage.setItem(ed + f, JSON.stringify(d));
    } catch (g) {
      console.error("Error saving state to localStorage", g);
    }
  }, Te = (f) => {
    try {
      const d = localStorage.getItem(ed + f);
      return d ? JSON.parse(d) : null;
    } catch (d) {
      return console.error("Error loading state from localStorage", d), null;
    }
  }, Eh = () => {
    const [f, d] = G.useState(Te("hole_cards") || []), [g, r] = G.useState(Te("board_cards") || []), _ = G.useCallback((C) => {
      if (f.includes(C)) {
        d((E) => E.filter((h) => h !== C));
        return;
      }
      if (g.includes(C)) {
        r((E) => E.filter((h) => h !== C));
        return;
      }
      f.length < 2 ? d((E) => [
        ...E,
        C
      ]) : g.length < 5 && r((E) => [
        ...E,
        C
      ]);
    }, [
      f,
      g
    ]), j = G.useCallback(() => {
      d([]), r([]);
    }, []), U = G.useCallback((C, E, h) => {
      C === "hole" ? d((R) => {
        const M = [
          ...R
        ];
        return h === null ? M.splice(E, 1) : M[E] = h, M.filter((D) => D !== void 0);
      }) : r((R) => {
        const M = [
          ...R
        ];
        return h === null ? M.splice(E, 1) : M[E] = h, M.filter((D) => D !== void 0);
      });
    }, []);
    return G.useMemo(() => ({
      holeCards: f,
      boardCards: g,
      toggleCard: _,
      setCardAt: U,
      clearHand: j
    }), [
      f,
      g,
      _,
      U,
      j
    ]);
  }, zh = () => {
    const [f, d] = G.useState(Te("pot_size") || 0), [g, r] = G.useState(Te("facing_bet") || 0), [_, j] = G.useState(Te("stack_size") || 1e3), [U, C] = G.useState(Te("is_ip") ?? true), [E, h] = G.useState(Te("unit") || "USD"), [R, M] = G.useState(Te("opponents") || [
      {
        id: "1",
        rangePreset: "Random",
        rangePercentage: 1
      }
    ]), [D, V] = G.useState("manual"), [k, fl] = G.useState(null), Hl = G.useCallback((I) => {
      d(I), D === "ratio" && k !== null && r(I * k);
    }, [
      D,
      k
    ]), El = G.useCallback((I) => {
      r(I), V("manual"), fl(null);
    }, []), Bl = G.useCallback((I) => {
      fl(I), V("ratio"), r(f * I);
    }, [
      f
    ]), bl = 999999, Al = G.useCallback((I) => {
      d((ql) => Math.min(bl, Math.max(0, ql + I)));
    }, []), Ql = G.useCallback((I) => {
      r((ql) => Math.min(bl, Math.max(0, ql + I))), V("manual"), fl(null);
    }, []), K = G.useCallback(() => d(0), []), X = G.useCallback(() => r(0), []);
    return G.useMemo(() => ({
      potSize: f,
      setPotSize: Hl,
      facingBet: g,
      setFacingBet: El,
      stackSize: _,
      setStackSize: j,
      isIP: U,
      setIsIP: C,
      unit: E,
      setUnit: h,
      opponents: R,
      setOpponents: M,
      inputMode: D,
      selectedRatio: k,
      setRatio: Bl,
      incrementPot: Al,
      incrementFacing: Ql,
      resetPot: K,
      resetFacing: X
    }), [
      f,
      Hl,
      g,
      El,
      _,
      U,
      E,
      R,
      D,
      k,
      Bl,
      Al,
      Ql,
      K,
      X
    ]);
  }, ze = (f, d) => {
    G.useEffect(() => {
      ph(f, d);
    }, [
      f,
      d
    ]);
  }, Th = () => {
    const f = Eh(), d = zh();
    return ze("hole_cards", f.holeCards), ze("board_cards", f.boardCards), ze("pot_size", d.potSize), ze("facing_bet", d.facingBet), ze("stack_size", d.stackSize), ze("is_ip", d.isIP), ze("unit", d.unit), ze("opponents", d.opponents), G.useMemo(() => ({
      ...f,
      ...d
    }), [
      f,
      d
    ]);
  };
  const ad = /* @__PURE__ */ Symbol("Comlink.proxy"), Ah = /* @__PURE__ */ Symbol("Comlink.endpoint"), _h = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), Tf = /* @__PURE__ */ Symbol("Comlink.finalizer"), wn = /* @__PURE__ */ Symbol("Comlink.thrown"), ud = (f) => typeof f == "object" && f !== null || typeof f == "function", Nh = {
    canHandle: (f) => ud(f) && f[ad],
    serialize(f) {
      const { port1: d, port2: g } = new MessageChannel();
      return cd(f, d), [
        g,
        [
          g
        ]
      ];
    },
    deserialize(f) {
      return f.start(), fd(f);
    }
  }, Oh = {
    canHandle: (f) => ud(f) && wn in f,
    serialize({ value: f }) {
      let d;
      return f instanceof Error ? d = {
        isError: true,
        value: {
          message: f.message,
          name: f.name,
          stack: f.stack
        }
      } : d = {
        isError: false,
        value: f
      }, [
        d,
        []
      ];
    },
    deserialize(f) {
      throw f.isError ? Object.assign(new Error(f.value.message), f.value) : f.value;
    }
  }, nd = /* @__PURE__ */ new Map([
    [
      "proxy",
      Nh
    ],
    [
      "throw",
      Oh
    ]
  ]);
  function Mh(f, d) {
    for (const g of f) if (d === g || g === "*" || g instanceof RegExp && g.test(d)) return true;
    return false;
  }
  function cd(f, d = globalThis, g = [
    "*"
  ]) {
    d.addEventListener("message", function r(_) {
      if (!_ || !_.data) return;
      if (!Mh(g, _.origin)) {
        console.warn(`Invalid origin '${_.origin}' for comlink proxy`);
        return;
      }
      const { id: j, type: U, path: C } = Object.assign({
        path: []
      }, _.data), E = (_.data.argumentList || []).map(Ve);
      let h;
      try {
        const R = C.slice(0, -1).reduce((D, V) => D[V], f), M = C.reduce((D, V) => D[V], f);
        switch (U) {
          case "GET":
            h = M;
            break;
          case "SET":
            R[C.slice(-1)[0]] = Ve(_.data.value), h = true;
            break;
          case "APPLY":
            h = M.apply(R, E);
            break;
          case "CONSTRUCT":
            {
              const D = new M(...E);
              h = Hh(D);
            }
            break;
          case "ENDPOINT":
            {
              const { port1: D, port2: V } = new MessageChannel();
              cd(f, V), h = Ch(D, [
                D
              ]);
            }
            break;
          case "RELEASE":
            h = void 0;
            break;
          default:
            return;
        }
      } catch (R) {
        h = {
          value: R,
          [wn]: 0
        };
      }
      Promise.resolve(h).catch((R) => ({
        value: R,
        [wn]: 0
      })).then((R) => {
        const [M, D] = Wn(R);
        d.postMessage(Object.assign(Object.assign({}, M), {
          id: j
        }), D), U === "RELEASE" && (d.removeEventListener("message", r), id(d), Tf in f && typeof f[Tf] == "function" && f[Tf]());
      }).catch((R) => {
        const [M, D] = Wn({
          value: new TypeError("Unserializable return value"),
          [wn]: 0
        });
        d.postMessage(Object.assign(Object.assign({}, M), {
          id: j
        }), D);
      });
    }), d.start && d.start();
  }
  function Dh(f) {
    return f.constructor.name === "MessagePort";
  }
  function id(f) {
    Dh(f) && f.close();
  }
  function fd(f, d) {
    const g = /* @__PURE__ */ new Map();
    return f.addEventListener("message", function(_) {
      const { data: j } = _;
      if (!j || !j.id) return;
      const U = g.get(j.id);
      if (U) try {
        U(j);
      } finally {
        g.delete(j.id);
      }
    }), _f(f, g, [], d);
  }
  function Jn(f) {
    if (f) throw new Error("Proxy has been released and is not useable");
  }
  function sd(f) {
    return Ma(f, /* @__PURE__ */ new Map(), {
      type: "RELEASE"
    }).then(() => {
      id(f);
    });
  }
  const kn = /* @__PURE__ */ new WeakMap(), $n = "FinalizationRegistry" in globalThis && new FinalizationRegistry((f) => {
    const d = (kn.get(f) || 0) - 1;
    kn.set(f, d), d === 0 && sd(f);
  });
  function jh(f, d) {
    const g = (kn.get(d) || 0) + 1;
    kn.set(d, g), $n && $n.register(f, d, f);
  }
  function Uh(f) {
    $n && $n.unregister(f);
  }
  function _f(f, d, g = [], r = function() {
  }) {
    let _ = false;
    const j = new Proxy(r, {
      get(U, C) {
        if (Jn(_), C === _h) return () => {
          Uh(j), sd(f), d.clear(), _ = true;
        };
        if (C === "then") {
          if (g.length === 0) return {
            then: () => j
          };
          const E = Ma(f, d, {
            type: "GET",
            path: g.map((h) => h.toString())
          }).then(Ve);
          return E.then.bind(E);
        }
        return _f(f, d, [
          ...g,
          C
        ]);
      },
      set(U, C, E) {
        Jn(_);
        const [h, R] = Wn(E);
        return Ma(f, d, {
          type: "SET",
          path: [
            ...g,
            C
          ].map((M) => M.toString()),
          value: h
        }, R).then(Ve);
      },
      apply(U, C, E) {
        Jn(_);
        const h = g[g.length - 1];
        if (h === Ah) return Ma(f, d, {
          type: "ENDPOINT"
        }).then(Ve);
        if (h === "bind") return _f(f, d, g.slice(0, -1));
        const [R, M] = w0(E);
        return Ma(f, d, {
          type: "APPLY",
          path: g.map((D) => D.toString()),
          argumentList: R
        }, M).then(Ve);
      },
      construct(U, C) {
        Jn(_);
        const [E, h] = w0(C);
        return Ma(f, d, {
          type: "CONSTRUCT",
          path: g.map((R) => R.toString()),
          argumentList: E
        }, h).then(Ve);
      }
    });
    return jh(j, f), j;
  }
  function Rh(f) {
    return Array.prototype.concat.apply([], f);
  }
  function w0(f) {
    const d = f.map(Wn);
    return [
      d.map((g) => g[0]),
      Rh(d.map((g) => g[1]))
    ];
  }
  const rd = /* @__PURE__ */ new WeakMap();
  function Ch(f, d) {
    return rd.set(f, d), f;
  }
  function Hh(f) {
    return Object.assign(f, {
      [ad]: true
    });
  }
  function Wn(f) {
    for (const [d, g] of nd) if (g.canHandle(f)) {
      const [r, _] = g.serialize(f);
      return [
        {
          type: "HANDLER",
          name: d,
          value: r
        },
        _
      ];
    }
    return [
      {
        type: "RAW",
        value: f
      },
      rd.get(f) || []
    ];
  }
  function Ve(f) {
    switch (f.type) {
      case "HANDLER":
        return nd.get(f.name).deserialize(f.value);
      case "RAW":
        return f.value;
    }
  }
  function Ma(f, d, g, r) {
    return new Promise((_) => {
      const j = Bh();
      d.set(j, _), f.start && f.start(), f.postMessage(Object.assign({
        id: j
      }, g), r);
    });
  }
  function Bh() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
  }
  function qh(f, d, g) {
    if (d === 0) return f;
    const r = Math.max(0.1, 1 - g / (d * 2));
    return f * r;
  }
  const Yh = ({ holeCards: f, boardCards: d, gameState: g }) => {
    const [r, _] = G.useState(null), [j, U] = G.useState(false), C = G.useRef(null), E = JSON.stringify(f), h = JSON.stringify(d), R = JSON.stringify({
      pot: g.potSize,
      facing: g.facingBetSize,
      ip: g.isIP,
      opponents: g.opponents.map((D) => ({
        id: D.id,
        r: D.rangePreset
      }))
    });
    G.useEffect(() => {
      const D = new Worker(new URL("/optimalbet/assets/worker-Bns_92K0.js", import.meta.url), {
        type: "module"
      });
      return C.current = fd(D), () => D.terminate();
    }, []);
    const M = G.useCallback(async () => {
      if (!C.current || f.length < 2) {
        _(null);
        return;
      }
      U(true);
      try {
        const D = (g.opponents || []).map((k) => ({
          ...k,
          rangePercentage: qh(k.rangePreset === "Tight" ? 0.15 : k.rangePreset === "Loose" ? 0.4 : 1, g.potSize, g.facingBetSize)
        })), V = await C.current.calculate({
          holeCards: f,
          boardCards: d,
          gameState: {
            ...g,
            opponents: D
          },
          options: {
            iterations: 1e4,
            mode: "auto"
          }
        });
        _(V);
      } catch (D) {
        console.error("Equity Engine Error:", D);
      } finally {
        U(false);
      }
    }, [
      E,
      h,
      R
    ]);
    return G.useEffect(() => {
      const D = setTimeout(() => {
        M();
      }, 150);
      return () => clearTimeout(D);
    }, [
      M
    ]), {
      result: r,
      isCalculating: j
    };
  }, Gh = () => {
    const [f, d] = G.useState(null), g = G.useCallback((_) => {
      d(_);
    }, []), r = G.useCallback(() => {
      d(null);
    }, []);
    return {
      activeTerm: f,
      isOpen: f !== null,
      openGlossary: g,
      closeGlossary: r
    };
  }, Qh = {
    EV: {
      term: "EV",
      title: "Expected Value",
      definition: "The average amount of money you expect to win or lose on a specific bet over the long run.",
      example: "A $100 bet with 50% chance to win $200 has +$50 EV.",
      category: "Math"
    },
    Equity: {
      term: "Equity",
      title: "Raw Equity",
      definition: "The percentage of times your hand will win the pot at showdown against the opponent's range.",
      example: "AA vs KK has ~82% equity preflop.",
      category: "Math"
    },
    PotOdds: {
      term: "PotOdds",
      title: "Pot Odds",
      definition: "The ratio of the current pot size to the cost of a contemplated call.",
      example: "Calling $50 into a $100 pot offers 2:1 (33%) odds.",
      category: "Math"
    },
    Position: {
      term: "Position",
      title: "Position (IP/OOP)",
      definition: 'Your seat relative to the dealer button. Being "In Position" (IP) means you act last post-flop.',
      category: "Strategy"
    },
    Ranges: {
      term: "Ranges",
      title: "Hand Ranges",
      definition: "The set of all possible hands a player might hold in a specific situation, rather than a single hand.",
      category: "Strategy"
    },
    MDF: {
      term: "MDF",
      title: "Minimum Defense Frequency",
      definition: "The percentage of your range you must continue with to prevent your opponent from profitably bluffing with any two cards.",
      category: "Math"
    },
    SPR: {
      term: "SPR",
      title: "Stack-to-Pot Ratio",
      definition: "The ratio of the effective stack size to the pot size. Low SPR indicates commitment; high SPR allows for more maneuvering.",
      category: "Math"
    }
  }, Xh = ({ term: f, onClose: d }) => {
    if (!f) return null;
    const g = Qh[f];
    return I0.createPortal(S.jsx("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]",
      onClick: d,
      children: S.jsx("div", {
        className: "bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all",
        onClick: (r) => r.stopPropagation(),
        children: S.jsxs("div", {
          className: "p-5",
          children: [
            S.jsxs("div", {
              className: "flex justify-between items-start mb-4",
              children: [
                S.jsxs("div", {
                  children: [
                    S.jsx("span", {
                      className: "text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded",
                      children: g.category
                    }),
                    S.jsx("h2", {
                      className: "text-xl font-black text-gray-900 dark:text-white mt-1",
                      children: g.title
                    })
                  ]
                }),
                S.jsx("button", {
                  onClick: d,
                  className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                  children: S.jsx(F0, {
                    size: 18,
                    className: "text-gray-400"
                  })
                })
              ]
            }),
            S.jsxs("div", {
              className: "space-y-4",
              children: [
                S.jsx("p", {
                  className: "text-gray-600 dark:text-gray-300 leading-relaxed",
                  children: g.definition
                }),
                g.example && S.jsxs("div", {
                  className: "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800",
                  children: [
                    S.jsx("span", {
                      className: "text-[10px] font-bold text-gray-400 uppercase block mb-1",
                      children: "Example"
                    }),
                    S.jsxs("p", {
                      className: "text-xs text-gray-500 dark:text-gray-400 italic",
                      children: [
                        '"',
                        g.example,
                        '"'
                      ]
                    })
                  ]
                })
              ]
            }),
            S.jsx("button", {
              onClick: d,
              className: "w-full mt-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl active:scale-95 transition-all",
              children: "Got it"
            })
          ]
        })
      })
    }), document.body);
  };
  function Zh() {
    var _a;
    const f = Th(), { holeCards: d, boardCards: g, clearHand: r, setCardAt: _, potSize: j, setPotSize: U, facingBet: C, setFacingBet: E, stackSize: h, isIP: R, setIsIP: M, unit: D, setUnit: V, opponents: k, setOpponents: fl, selectedRatio: Hl, setRatio: El, incrementPot: Bl, incrementFacing: bl, resetPot: Al, resetFacing: Ql } = f, { activeTerm: K, openGlossary: X, closeGlossary: I } = Gh(), ql = G.useMemo(() => ({
      potSize: j,
      facingBetSize: C,
      stackSize: h,
      isIP: R,
      unit: D,
      opponentCount: k.length,
      opponents: k
    }), [
      j,
      C,
      h,
      R,
      D,
      k
    ]), { result: Jl, isCalculating: mt } = Yh({
      holeCards: d,
      boardCards: g,
      gameState: ql
    });
    return S.jsxs("div", {
      className: "min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden transition-colors",
      children: [
        S.jsxs("header", {
          className: "bg-blue-700 dark:bg-blue-900 text-white p-4 shadow-md flex justify-between items-center",
          children: [
            S.jsxs("div", {
              children: [
                S.jsx("h1", {
                  className: "text-xl font-black tracking-tight uppercase",
                  children: "OptimalBet"
                }),
                S.jsx("p", {
                  className: "text-[10px] font-bold opacity-70 tracking-widest uppercase",
                  children: "Advanced Analytics"
                })
              ]
            }),
            S.jsx("button", {
              onClick: () => V((Ml) => Ml === "USD" ? "BB" : "USD"),
              className: "text-xs font-bold bg-blue-800 p-2 rounded",
              children: D
            })
          ]
        }),
        S.jsxs("main", {
          className: "flex-1 overflow-y-auto pb-24 text-[var(--text-primary)]",
          children: [
            Jl ? S.jsx(eh, {
              ...Jl,
              position: R ? "IP" : "OOP",
              isCalculating: mt,
              onInfoClick: X
            }) : S.jsx("div", {
              className: "p-8 text-center text-gray-400 text-sm",
              children: "Select cards to start analysis"
            }),
            S.jsxs("div", {
              className: "bg-white dark:bg-gray-900 m-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden",
              children: [
                S.jsxs("div", {
                  className: "px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",
                  children: [
                    S.jsx("span", {
                      className: "text-[10px] font-bold text-gray-400 uppercase",
                      children: "Input Dashboard"
                    }),
                    S.jsxs("button", {
                      onClick: () => M(!R),
                      className: `text-[9px] px-2 py-1 rounded font-bold ${R ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`,
                      children: [
                        "Toggle ",
                        R ? "IP" : "OOP"
                      ]
                    })
                  ]
                }),
                S.jsx(hh, {
                  holeCards: d,
                  boardCards: g,
                  onSelectCard: _,
                  onClear: r
                }),
                S.jsx(bh, {
                  potSize: j,
                  facingBet: C,
                  onUpdatePot: U,
                  onUpdateBet: E,
                  onIncrementPot: Bl,
                  onIncrementBet: bl,
                  onResetPot: Al,
                  onResetBet: Ql,
                  selectedRatio: Hl,
                  onSelectRatio: El
                }),
                S.jsx(xh, {
                  count: k.length,
                  rangePreset: ((_a = k[0]) == null ? void 0 : _a.rangePreset) || "Random",
                  onCountChange: (Ml) => {
                    const _t = Array.from({
                      length: Ml
                    }, (ht, Wl) => k[Wl] || {
                      id: String(Wl + 1),
                      rangePreset: "Random",
                      rangePercentage: 1
                    });
                    fl(_t);
                  },
                  onRangeChange: (Ml) => {
                    const _t = k.map((ht) => ({
                      ...ht,
                      rangePreset: Ml
                    }));
                    fl(_t);
                  },
                  onInfoClick: X
                })
              ]
            })
          ]
        }),
        S.jsx(Xh, {
          term: K,
          onClose: I
        })
      ]
    });
  }
  class Lh extends G.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        hasError: false
      });
      __publicField(this, "handleRestore", () => {
        window.location.reload();
      });
    }
    static getDerivedStateFromError(d) {
      return {
        hasError: true
      };
    }
    componentDidCatch(d, g) {
      console.error("Uncaught error:", d, g);
    }
    render() {
      return this.state.hasError ? S.jsxs("div", {
        className: "min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center p-6 text-center",
        children: [
          S.jsx("div", {
            className: "w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6",
            children: S.jsx("svg", {
              className: "w-8 h-8 text-red-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: S.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              })
            })
          }),
          S.jsx("h2", {
            className: "text-2xl font-black text-red-600 dark:text-red-500 mb-4 uppercase",
            children: "System Error"
          }),
          S.jsx("p", {
            className: "text-gray-600 dark:text-gray-400 mb-8 max-w-xs text-sm",
            children: "A calculation or UI error occurred. Your last game state has been automatically saved to LocalStorage."
          }),
          S.jsx("button", {
            onClick: this.handleRestore,
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-wider text-sm",
            children: "Restore & Reload"
          })
        ]
      }) : this.props.children;
    }
  }
  const Vh = "modulepreload", Kh = function(f) {
    return "/optimalbet/" + f;
  }, k0 = {}, Jh = function(d, g, r) {
    let _ = Promise.resolve();
    if (g && g.length > 0) {
      let E = function(h) {
        return Promise.all(h.map((R) => Promise.resolve(R).then((M) => ({
          status: "fulfilled",
          value: M
        }), (M) => ({
          status: "rejected",
          reason: M
        }))));
      };
      document.getElementsByTagName("link");
      const U = document.querySelector("meta[property=csp-nonce]"), C = (U == null ? void 0 : U.nonce) || (U == null ? void 0 : U.getAttribute("nonce"));
      _ = E(g.map((h) => {
        if (h = Kh(h), h in k0) return;
        k0[h] = true;
        const R = h.endsWith(".css"), M = R ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${h}"]${M}`)) return;
        const D = document.createElement("link");
        if (D.rel = R ? "stylesheet" : Vh, R || (D.as = "script"), D.crossOrigin = "", D.href = h, C && D.setAttribute("nonce", C), document.head.appendChild(D), R) return new Promise((V, k) => {
          D.addEventListener("load", V), D.addEventListener("error", () => k(new Error(`Unable to preload CSS for ${h}`)));
        });
      }));
    }
    function j(U) {
      const C = new Event("vite:preloadError", {
        cancelable: true
      });
      if (C.payload = U, window.dispatchEvent(C), !C.defaultPrevented) throw U;
    }
    return _.then((U) => {
      for (const C of U || []) C.status === "rejected" && j(C.reason);
      return d().catch(j);
    });
  };
  function wh(f = {}) {
    const { immediate: d = false, onNeedRefresh: g, onOfflineReady: r, onRegistered: _, onRegisteredSW: j, onRegisterError: U } = f;
    let C, E;
    const h = async (M = true) => {
      await E;
    };
    async function R() {
      if ("serviceWorker" in navigator) {
        if (C = await Jh(async () => {
          const { Workbox: M } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
          return {
            Workbox: M
          };
        }, []).then(({ Workbox: M }) => new M("/optimalbet/sw.js", {
          scope: "/optimalbet/",
          type: "classic"
        })).catch((M) => {
          U == null ? void 0 : U(M);
        }), !C) return;
        C.addEventListener("activated", (M) => {
          (M.isUpdate || M.isExternal) && window.location.reload();
        }), C.addEventListener("installed", (M) => {
          M.isUpdate || (r == null ? void 0 : r());
        }), C.register({
          immediate: d
        }).then((M) => {
          j ? j("/optimalbet/sw.js", M) : _ == null ? void 0 : _(M);
        }).catch((M) => {
          U == null ? void 0 : U(M);
        });
      }
    }
    return E = R(), h;
  }
  const kh = () => {
    const f = wh({
      onNeedRefresh() {
        confirm("New content available. Reload?") && f(true);
      },
      onOfflineReady() {
        console.log("App ready to work offline");
      }
    });
  };
  kh();
  Zm.createRoot(document.getElementById("root")).render(S.jsx(G.StrictMode, {
    children: S.jsx(Lh, {
      children: S.jsx(Zh, {})
    })
  }));
})();
