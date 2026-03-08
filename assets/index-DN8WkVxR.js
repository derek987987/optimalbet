var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const z of document.querySelectorAll('link[rel="modulepreload"]')) s(z);
    new MutationObserver((z) => {
      for (const j of z) if (j.type === "childList") for (const R of j.addedNodes) R.tagName === "LINK" && R.rel === "modulepreload" && s(R);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function h(z) {
      const j = {};
      return z.integrity && (j.integrity = z.integrity), z.referrerPolicy && (j.referrerPolicy = z.referrerPolicy), z.crossOrigin === "use-credentials" ? j.credentials = "include" : z.crossOrigin === "anonymous" ? j.credentials = "omit" : j.credentials = "same-origin", j;
    }
    function s(z) {
      if (z.ep) return;
      z.ep = true;
      const j = h(z);
      fetch(z.href, j);
    }
  })();
  var vf = {
    exports: {}
  }, Tu = {};
  var R0;
  function Cm() {
    if (R0) return Tu;
    R0 = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
    function h(s, z, j) {
      var R = null;
      if (j !== void 0 && (R = "" + j), z.key !== void 0 && (R = "" + z.key), "key" in z) {
        j = {};
        for (var U in z) U !== "key" && (j[U] = z[U]);
      } else j = z;
      return z = j.ref, {
        $$typeof: f,
        type: s,
        key: R,
        ref: z !== void 0 ? z : null,
        props: j
      };
    }
    return Tu.Fragment = o, Tu.jsx = h, Tu.jsxs = h, Tu;
  }
  var U0;
  function Hm() {
    return U0 || (U0 = 1, vf.exports = Cm()), vf.exports;
  }
  var v = Hm(), bf = {
    exports: {}
  }, k = {};
  var C0;
  function Bm() {
    if (C0) return k;
    C0 = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.activity"), D = Symbol.iterator;
    function V(y) {
      return y === null || typeof y != "object" ? null : (y = D && y[D] || y["@@iterator"], typeof y == "function" ? y : null);
    }
    var w = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, ft = Object.assign, Ht = {};
    function Et(y, M, B) {
      this.props = y, this.context = M, this.refs = Ht, this.updater = B || w;
    }
    Et.prototype.isReactComponent = {}, Et.prototype.setState = function(y, M) {
      if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, M, "setState");
    }, Et.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    function Bt() {
    }
    Bt.prototype = Et.prototype;
    function bt(y, M, B) {
      this.props = y, this.context = M, this.refs = Ht, this.updater = B || w;
    }
    var At = bt.prototype = new Bt();
    At.constructor = bt, ft(At, Et.prototype), At.isPureReactComponent = true;
    var Qt = Array.isArray;
    function K() {
    }
    var X = {
      H: null,
      A: null,
      T: null,
      S: null
    }, I = Object.prototype.hasOwnProperty;
    function qt(y, M, B) {
      var G = B.ref;
      return {
        $$typeof: f,
        type: y,
        key: M,
        ref: G !== void 0 ? G : null,
        props: B
      };
    }
    function Jt(y, M) {
      return qt(y.type, M, y.props);
    }
    function ml(y) {
      return typeof y == "object" && y !== null && y.$$typeof === f;
    }
    function Mt(y) {
      var M = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + y.replace(/[=:]/g, function(B) {
        return M[B];
      });
    }
    var _l = /\/+/g;
    function hl(y, M) {
      return typeof y == "object" && y !== null && y.key != null ? Mt("" + y.key) : M.toString(36);
    }
    function Wt(y) {
      switch (y.status) {
        case "fulfilled":
          return y.value;
        case "rejected":
          throw y.reason;
        default:
          switch (typeof y.status == "string" ? y.then(K, K) : (y.status = "pending", y.then(function(M) {
            y.status === "pending" && (y.status = "fulfilled", y.value = M);
          }, function(M) {
            y.status === "pending" && (y.status = "rejected", y.reason = M);
          })), y.status) {
            case "fulfilled":
              return y.value;
            case "rejected":
              throw y.reason;
          }
      }
      throw y;
    }
    function A(y, M, B, G, $) {
      var P = typeof y;
      (P === "undefined" || P === "boolean") && (y = null);
      var st = false;
      if (y === null) st = true;
      else switch (P) {
        case "bigint":
        case "string":
        case "number":
          st = true;
          break;
        case "object":
          switch (y.$$typeof) {
            case f:
            case o:
              st = true;
              break;
            case C:
              return st = y._init, A(st(y._payload), M, B, G, $);
          }
      }
      if (st) return $ = $(y), st = G === "" ? "." + hl(y, 0) : G, Qt($) ? (B = "", st != null && (B = st.replace(_l, "$&/") + "/"), A($, M, B, "", function(Da) {
        return Da;
      })) : $ != null && (ml($) && ($ = Jt($, B + ($.key == null || y && y.key === $.key ? "" : ("" + $.key).replace(_l, "$&/") + "/") + st)), M.push($)), 1;
      st = 0;
      var kt = G === "" ? "." : G + ":";
      if (Qt(y)) for (var _t = 0; _t < y.length; _t++) G = y[_t], P = kt + hl(G, _t), st += A(G, M, B, P, $);
      else if (_t = V(y), typeof _t == "function") for (y = _t.call(y), _t = 0; !(G = y.next()).done; ) G = G.value, P = kt + hl(G, _t++), st += A(G, M, B, P, $);
      else if (P === "object") {
        if (typeof y.then == "function") return A(Wt(y), M, B, G, $);
        throw M = String(y), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
      }
      return st;
    }
    function H(y, M, B) {
      if (y == null) return y;
      var G = [], $ = 0;
      return A(y, G, "", "", function(P) {
        return M.call(B, P, $++);
      }), G;
    }
    function J(y) {
      if (y._status === -1) {
        var M = y._result;
        M = M(), M.then(function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = B);
        }, function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = B);
        }), y._status === -1 && (y._status = 0, y._result = M);
      }
      if (y._status === 1) return y._result.default;
      throw y._result;
    }
    var dt = typeof reportError == "function" ? reportError : function(y) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var M = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
          error: y
        });
        if (!window.dispatchEvent(M)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", y);
        return;
      }
      console.error(y);
    }, gt = {
      map: H,
      forEach: function(y, M, B) {
        H(y, function() {
          M.apply(this, arguments);
        }, B);
      },
      count: function(y) {
        var M = 0;
        return H(y, function() {
          M++;
        }), M;
      },
      toArray: function(y) {
        return H(y, function(M) {
          return M;
        }) || [];
      },
      only: function(y) {
        if (!ml(y)) throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
    };
    return k.Activity = O, k.Children = gt, k.Component = Et, k.Fragment = h, k.Profiler = z, k.PureComponent = bt, k.StrictMode = s, k.Suspense = x, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, k.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(y) {
        return X.H.useMemoCache(y);
      }
    }, k.cache = function(y) {
      return function() {
        return y.apply(null, arguments);
      };
    }, k.cacheSignal = function() {
      return null;
    }, k.cloneElement = function(y, M, B) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var G = ft({}, y.props), $ = y.key;
      if (M != null) for (P in M.key !== void 0 && ($ = "" + M.key), M) !I.call(M, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && M.ref === void 0 || (G[P] = M[P]);
      var P = arguments.length - 2;
      if (P === 1) G.children = B;
      else if (1 < P) {
        for (var st = Array(P), kt = 0; kt < P; kt++) st[kt] = arguments[kt + 2];
        G.children = st;
      }
      return qt(y.type, $, G);
    }, k.createContext = function(y) {
      return y = {
        $$typeof: R,
        _currentValue: y,
        _currentValue2: y,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, y.Provider = y, y.Consumer = {
        $$typeof: j,
        _context: y
      }, y;
    }, k.createElement = function(y, M, B) {
      var G, $ = {}, P = null;
      if (M != null) for (G in M.key !== void 0 && (P = "" + M.key), M) I.call(M, G) && G !== "key" && G !== "__self" && G !== "__source" && ($[G] = M[G]);
      var st = arguments.length - 2;
      if (st === 1) $.children = B;
      else if (1 < st) {
        for (var kt = Array(st), _t = 0; _t < st; _t++) kt[_t] = arguments[_t + 2];
        $.children = kt;
      }
      if (y && y.defaultProps) for (G in st = y.defaultProps, st) $[G] === void 0 && ($[G] = st[G]);
      return qt(y, P, $);
    }, k.createRef = function() {
      return {
        current: null
      };
    }, k.forwardRef = function(y) {
      return {
        $$typeof: U,
        render: y
      };
    }, k.isValidElement = ml, k.lazy = function(y) {
      return {
        $$typeof: C,
        _payload: {
          _status: -1,
          _result: y
        },
        _init: J
      };
    }, k.memo = function(y, M) {
      return {
        $$typeof: m,
        type: y,
        compare: M === void 0 ? null : M
      };
    }, k.startTransition = function(y) {
      var M = X.T, B = {};
      X.T = B;
      try {
        var G = y(), $ = X.S;
        $ !== null && $(B, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(K, dt);
      } catch (P) {
        dt(P);
      } finally {
        M !== null && B.types !== null && (M.types = B.types), X.T = M;
      }
    }, k.unstable_useCacheRefresh = function() {
      return X.H.useCacheRefresh();
    }, k.use = function(y) {
      return X.H.use(y);
    }, k.useActionState = function(y, M, B) {
      return X.H.useActionState(y, M, B);
    }, k.useCallback = function(y, M) {
      return X.H.useCallback(y, M);
    }, k.useContext = function(y) {
      return X.H.useContext(y);
    }, k.useDebugValue = function() {
    }, k.useDeferredValue = function(y, M) {
      return X.H.useDeferredValue(y, M);
    }, k.useEffect = function(y, M) {
      return X.H.useEffect(y, M);
    }, k.useEffectEvent = function(y) {
      return X.H.useEffectEvent(y);
    }, k.useId = function() {
      return X.H.useId();
    }, k.useImperativeHandle = function(y, M, B) {
      return X.H.useImperativeHandle(y, M, B);
    }, k.useInsertionEffect = function(y, M) {
      return X.H.useInsertionEffect(y, M);
    }, k.useLayoutEffect = function(y, M) {
      return X.H.useLayoutEffect(y, M);
    }, k.useMemo = function(y, M) {
      return X.H.useMemo(y, M);
    }, k.useOptimistic = function(y, M) {
      return X.H.useOptimistic(y, M);
    }, k.useReducer = function(y, M, B) {
      return X.H.useReducer(y, M, B);
    }, k.useRef = function(y) {
      return X.H.useRef(y);
    }, k.useState = function(y) {
      return X.H.useState(y);
    }, k.useSyncExternalStore = function(y, M, B) {
      return X.H.useSyncExternalStore(y, M, B);
    }, k.useTransition = function() {
      return X.H.useTransition();
    }, k.version = "19.2.4", k;
  }
  var H0;
  function Nf() {
    return H0 || (H0 = 1, bf.exports = Bm()), bf.exports;
  }
  var Y = Nf(), Sf = {
    exports: {}
  }, Au = {}, pf = {
    exports: {}
  }, xf = {};
  var B0;
  function qm() {
    return B0 || (B0 = 1, (function(f) {
      function o(A, H) {
        var J = A.length;
        A.push(H);
        t: for (; 0 < J; ) {
          var dt = J - 1 >>> 1, gt = A[dt];
          if (0 < z(gt, H)) A[dt] = H, A[J] = gt, J = dt;
          else break t;
        }
      }
      function h(A) {
        return A.length === 0 ? null : A[0];
      }
      function s(A) {
        if (A.length === 0) return null;
        var H = A[0], J = A.pop();
        if (J !== H) {
          A[0] = J;
          t: for (var dt = 0, gt = A.length, y = gt >>> 1; dt < y; ) {
            var M = 2 * (dt + 1) - 1, B = A[M], G = M + 1, $ = A[G];
            if (0 > z(B, J)) G < gt && 0 > z($, B) ? (A[dt] = $, A[G] = J, dt = G) : (A[dt] = B, A[M] = J, dt = M);
            else if (G < gt && 0 > z($, J)) A[dt] = $, A[G] = J, dt = G;
            else break t;
          }
        }
        return H;
      }
      function z(A, H) {
        var J = A.sortIndex - H.sortIndex;
        return J !== 0 ? J : A.id - H.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var j = performance;
        f.unstable_now = function() {
          return j.now();
        };
      } else {
        var R = Date, U = R.now();
        f.unstable_now = function() {
          return R.now() - U;
        };
      }
      var x = [], m = [], C = 1, O = null, D = 3, V = false, w = false, ft = false, Ht = false, Et = typeof setTimeout == "function" ? setTimeout : null, Bt = typeof clearTimeout == "function" ? clearTimeout : null, bt = typeof setImmediate < "u" ? setImmediate : null;
      function At(A) {
        for (var H = h(m); H !== null; ) {
          if (H.callback === null) s(m);
          else if (H.startTime <= A) s(m), H.sortIndex = H.expirationTime, o(x, H);
          else break;
          H = h(m);
        }
      }
      function Qt(A) {
        if (ft = false, At(A), !w) if (h(x) !== null) w = true, K || (K = true, Mt());
        else {
          var H = h(m);
          H !== null && Wt(Qt, H.startTime - A);
        }
      }
      var K = false, X = -1, I = 5, qt = -1;
      function Jt() {
        return Ht ? true : !(f.unstable_now() - qt < I);
      }
      function ml() {
        if (Ht = false, K) {
          var A = f.unstable_now();
          qt = A;
          var H = true;
          try {
            t: {
              w = false, ft && (ft = false, Bt(X), X = -1), V = true;
              var J = D;
              try {
                l: {
                  for (At(A), O = h(x); O !== null && !(O.expirationTime > A && Jt()); ) {
                    var dt = O.callback;
                    if (typeof dt == "function") {
                      O.callback = null, D = O.priorityLevel;
                      var gt = dt(O.expirationTime <= A);
                      if (A = f.unstable_now(), typeof gt == "function") {
                        O.callback = gt, At(A), H = true;
                        break l;
                      }
                      O === h(x) && s(x), At(A);
                    } else s(x);
                    O = h(x);
                  }
                  if (O !== null) H = true;
                  else {
                    var y = h(m);
                    y !== null && Wt(Qt, y.startTime - A), H = false;
                  }
                }
                break t;
              } finally {
                O = null, D = J, V = false;
              }
              H = void 0;
            }
          } finally {
            H ? Mt() : K = false;
          }
        }
      }
      var Mt;
      if (typeof bt == "function") Mt = function() {
        bt(ml);
      };
      else if (typeof MessageChannel < "u") {
        var _l = new MessageChannel(), hl = _l.port2;
        _l.port1.onmessage = ml, Mt = function() {
          hl.postMessage(null);
        };
      } else Mt = function() {
        Et(ml, 0);
      };
      function Wt(A, H) {
        X = Et(function() {
          A(f.unstable_now());
        }, H);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, f.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < A ? Math.floor(1e3 / A) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return D;
      }, f.unstable_next = function(A) {
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
          return A();
        } finally {
          D = J;
        }
      }, f.unstable_requestPaint = function() {
        Ht = true;
      }, f.unstable_runWithPriority = function(A, H) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var J = D;
        D = A;
        try {
          return H();
        } finally {
          D = J;
        }
      }, f.unstable_scheduleCallback = function(A, H, J) {
        var dt = f.unstable_now();
        switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? dt + J : dt) : J = dt, A) {
          case 1:
            var gt = -1;
            break;
          case 2:
            gt = 250;
            break;
          case 5:
            gt = 1073741823;
            break;
          case 4:
            gt = 1e4;
            break;
          default:
            gt = 5e3;
        }
        return gt = J + gt, A = {
          id: C++,
          callback: H,
          priorityLevel: A,
          startTime: J,
          expirationTime: gt,
          sortIndex: -1
        }, J > dt ? (A.sortIndex = J, o(m, A), h(x) === null && A === h(m) && (ft ? (Bt(X), X = -1) : ft = true, Wt(Qt, J - dt))) : (A.sortIndex = gt, o(x, A), w || V || (w = true, K || (K = true, Mt()))), A;
      }, f.unstable_shouldYield = Jt, f.unstable_wrapCallback = function(A) {
        var H = D;
        return function() {
          var J = D;
          D = H;
          try {
            return A.apply(this, arguments);
          } finally {
            D = J;
          }
        };
      };
    })(xf)), xf;
  }
  var q0;
  function Ym() {
    return q0 || (q0 = 1, pf.exports = qm()), pf.exports;
  }
  var Ef = {
    exports: {}
  }, wt = {};
  var Y0;
  function Gm() {
    if (Y0) return wt;
    Y0 = 1;
    var f = Nf();
    function o(x) {
      var m = "https://react.dev/errors/" + x;
      if (1 < arguments.length) {
        m += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var C = 2; C < arguments.length; C++) m += "&args[]=" + encodeURIComponent(arguments[C]);
      }
      return "Minified React error #" + x + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function h() {
    }
    var s = {
      d: {
        f: h,
        r: function() {
          throw Error(o(522));
        },
        D: h,
        C: h,
        L: h,
        m: h,
        X: h,
        S: h,
        M: h
      },
      p: 0,
      findDOMNode: null
    }, z = /* @__PURE__ */ Symbol.for("react.portal");
    function j(x, m, C) {
      var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: z,
        key: O == null ? null : "" + O,
        children: x,
        containerInfo: m,
        implementation: C
      };
    }
    var R = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function U(x, m) {
      if (x === "font") return "";
      if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, wt.createPortal = function(x, m) {
      var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(o(299));
      return j(x, m, null, C);
    }, wt.flushSync = function(x) {
      var m = R.T, C = s.p;
      try {
        if (R.T = null, s.p = 2, x) return x();
      } finally {
        R.T = m, s.p = C, s.d.f();
      }
    }, wt.preconnect = function(x, m) {
      typeof x == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(x, m));
    }, wt.prefetchDNS = function(x) {
      typeof x == "string" && s.d.D(x);
    }, wt.preinit = function(x, m) {
      if (typeof x == "string" && m && typeof m.as == "string") {
        var C = m.as, O = U(C, m.crossOrigin), D = typeof m.integrity == "string" ? m.integrity : void 0, V = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        C === "style" ? s.d.S(x, typeof m.precedence == "string" ? m.precedence : void 0, {
          crossOrigin: O,
          integrity: D,
          fetchPriority: V
        }) : C === "script" && s.d.X(x, {
          crossOrigin: O,
          integrity: D,
          fetchPriority: V,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0
        });
      }
    }, wt.preinitModule = function(x, m) {
      if (typeof x == "string") if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var C = U(m.as, m.crossOrigin);
          s.d.M(x, {
            crossOrigin: C,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && s.d.M(x);
    }, wt.preload = function(x, m) {
      if (typeof x == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var C = m.as, O = U(C, m.crossOrigin);
        s.d.L(x, C, {
          crossOrigin: O,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0
        });
      }
    }, wt.preloadModule = function(x, m) {
      if (typeof x == "string") if (m) {
        var C = U(m.as, m.crossOrigin);
        s.d.m(x, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: C,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else s.d.m(x);
    }, wt.requestFormReset = function(x) {
      s.d.r(x);
    }, wt.unstable_batchedUpdates = function(x, m) {
      return x(m);
    }, wt.useFormState = function(x, m, C) {
      return R.H.useFormState(x, m, C);
    }, wt.useFormStatus = function() {
      return R.H.useHostTransitionStatus();
    }, wt.version = "19.2.4", wt;
  }
  var G0;
  function $0() {
    if (G0) return Ef.exports;
    G0 = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
    }
    return f(), Ef.exports = Gm(), Ef.exports;
  }
  var Q0;
  function Qm() {
    if (Q0) return Au;
    Q0 = 1;
    var f = Ym(), o = Nf(), h = $0();
    function s(t) {
      var l = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        l += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) l += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function z(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function j(t) {
      var l = t, e = t;
      if (t.alternate) for (; l.return; ) l = l.return;
      else {
        t = l;
        do
          l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
        while (t);
      }
      return l.tag === 3 ? e : null;
    }
    function R(t) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
      }
      return null;
    }
    function U(t) {
      if (t.tag === 31) {
        var l = t.memoizedState;
        if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
      }
      return null;
    }
    function x(t) {
      if (j(t) !== t) throw Error(s(188));
    }
    function m(t) {
      var l = t.alternate;
      if (!l) {
        if (l = j(t), l === null) throw Error(s(188));
        return l !== t ? null : t;
      }
      for (var e = t, a = l; ; ) {
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
            if (n === e) return x(u), t;
            if (n === a) return x(u), l;
            n = n.sibling;
          }
          throw Error(s(188));
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
            if (!c) throw Error(s(189));
          }
        }
        if (e.alternate !== a) throw Error(s(190));
      }
      if (e.tag !== 3) throw Error(s(188));
      return e.stateNode.current === e ? t : l;
    }
    function C(t) {
      var l = t.tag;
      if (l === 5 || l === 26 || l === 27 || l === 6) return t;
      for (t = t.child; t !== null; ) {
        if (l = C(t), l !== null) return l;
        t = t.sibling;
      }
      return null;
    }
    var O = Object.assign, D = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.transitional.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), ft = /* @__PURE__ */ Symbol.for("react.fragment"), Ht = /* @__PURE__ */ Symbol.for("react.strict_mode"), Et = /* @__PURE__ */ Symbol.for("react.profiler"), Bt = /* @__PURE__ */ Symbol.for("react.consumer"), bt = /* @__PURE__ */ Symbol.for("react.context"), At = /* @__PURE__ */ Symbol.for("react.forward_ref"), Qt = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), qt = /* @__PURE__ */ Symbol.for("react.activity"), Jt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ml = Symbol.iterator;
    function Mt(t) {
      return t === null || typeof t != "object" ? null : (t = ml && t[ml] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var _l = /* @__PURE__ */ Symbol.for("react.client.reference");
    function hl(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === _l ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case ft:
          return "Fragment";
        case Et:
          return "Profiler";
        case Ht:
          return "StrictMode";
        case Qt:
          return "Suspense";
        case K:
          return "SuspenseList";
        case qt:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case w:
          return "Portal";
        case bt:
          return t.displayName || "Context";
        case Bt:
          return (t._context.displayName || "Context") + ".Consumer";
        case At:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case X:
          return l = t.displayName || null, l !== null ? l : hl(t.type) || "Memo";
        case I:
          l = t._payload, t = t._init;
          try {
            return hl(t(l));
          } catch {
          }
      }
      return null;
    }
    var Wt = Array.isArray, A = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, dt = [], gt = -1;
    function y(t) {
      return {
        current: t
      };
    }
    function M(t) {
      0 > gt || (t.current = dt[gt], dt[gt] = null, gt--);
    }
    function B(t, l) {
      gt++, dt[gt] = t.current, t.current = l;
    }
    var G = y(null), $ = y(null), P = y(null), st = y(null);
    function kt(t, l) {
      switch (B(P, l), B($, t), B(G, null), l.nodeType) {
        case 9:
        case 11:
          t = (t = l.documentElement) && (t = t.namespaceURI) ? l0(t) : 0;
          break;
        default:
          if (t = l.tagName, l = l.namespaceURI) l = l0(l), t = e0(l, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      M(G), B(G, t);
    }
    function _t() {
      M(G), M($), M(P);
    }
    function Da(t) {
      t.memoizedState !== null && B(st, t);
      var l = G.current, e = e0(l, t.type);
      l !== e && (B($, t), B(G, e));
    }
    function Nu(t) {
      $.current === t && (M(G), M($)), st.current === t && (M(st), pu._currentValue = J);
    }
    var In, jf;
    function Ae(t) {
      if (In === void 0) try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        In = l && l[1] || "", jf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + In + t + jf;
    }
    var Pn = false;
    function tc(t, l) {
      if (!t || Pn) return "";
      Pn = true;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (l) {
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
                  } catch (E) {
                    var p = E;
                  }
                  Reflect.construct(t, [], N);
                } else {
                  try {
                    N.call();
                  } catch (E) {
                    p = E;
                  }
                  t.call(N.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  p = E;
                }
                (N = t()) && typeof N.catch == "function" && N.catch(function() {
                });
              }
            } catch (E) {
              if (E && p && typeof E.stack == "string") return [
                E.stack,
                p.stack
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
          var r = c.split(`
`), S = i.split(`
`);
          for (u = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; u < S.length && !S[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (a === r.length || u === S.length) for (a = r.length - 1, u = S.length - 1; 1 <= a && 0 <= u && r[a] !== S[u]; ) u--;
          for (; 1 <= a && 0 <= u; a--, u--) if (r[a] !== S[u]) {
            if (a !== 1 || u !== 1) do
              if (a--, u--, 0 > u || r[a] !== S[u]) {
                var T = `
` + r[a].replace(" at new ", " at ");
                return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
              }
            while (1 <= a && 0 <= u);
            break;
          }
        }
      } finally {
        Pn = false, Error.prepareStackTrace = e;
      }
      return (e = t ? t.displayName || t.name : "") ? Ae(e) : "";
    }
    function od(t, l) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Ae(t.type);
        case 16:
          return Ae("Lazy");
        case 13:
          return t.child !== l && l !== null ? Ae("Suspense Fallback") : Ae("Suspense");
        case 19:
          return Ae("SuspenseList");
        case 0:
        case 15:
          return tc(t.type, false);
        case 11:
          return tc(t.type.render, false);
        case 1:
          return tc(t.type, true);
        case 31:
          return Ae("Activity");
        default:
          return "";
      }
    }
    function Df(t) {
      try {
        var l = "", e = null;
        do
          l += od(t, e), e = t, t = t.return;
        while (t);
        return l;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var lc = Object.prototype.hasOwnProperty, ec = f.unstable_scheduleCallback, ac = f.unstable_cancelCallback, dd = f.unstable_shouldYield, yd = f.unstable_requestPaint, ul = f.unstable_now, md = f.unstable_getCurrentPriorityLevel, Rf = f.unstable_ImmediatePriority, Uf = f.unstable_UserBlockingPriority, Ou = f.unstable_NormalPriority, hd = f.unstable_LowPriority, Cf = f.unstable_IdlePriority, gd = f.log, vd = f.unstable_setDisableYieldValue, Ra = null, nl = null;
    function Il(t) {
      if (typeof gd == "function" && vd(t), nl && typeof nl.setStrictMode == "function") try {
        nl.setStrictMode(Ra, t);
      } catch {
      }
    }
    var cl = Math.clz32 ? Math.clz32 : pd, bd = Math.log, Sd = Math.LN2;
    function pd(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (bd(t) / Sd | 0) | 0;
    }
    var Mu = 256, ju = 262144, Du = 4194304;
    function _e(t) {
      var l = t & 42;
      if (l !== 0) return l;
      switch (t & -t) {
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function Ru(t, l, e) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var u = 0, n = t.suspendedLanes, c = t.pingedLanes;
      t = t.warmLanes;
      var i = a & 134217727;
      return i !== 0 ? (a = i & ~n, a !== 0 ? u = _e(a) : (c &= i, c !== 0 ? u = _e(c) : e || (e = i & ~t, e !== 0 && (u = _e(e))))) : (i = a & ~n, i !== 0 ? u = _e(i) : c !== 0 ? u = _e(c) : e || (e = a & ~t, e !== 0 && (u = _e(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
    }
    function Ua(t, l) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
    }
    function xd(t, l) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return l + 250;
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
          return l + 5e3;
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
      var t = Du;
      return Du <<= 1, (Du & 62914560) === 0 && (Du = 4194304), t;
    }
    function uc(t) {
      for (var l = [], e = 0; 31 > e; e++) l.push(t);
      return l;
    }
    function Ca(t, l) {
      t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Ed(t, l, e, a, u, n) {
      var c = t.pendingLanes;
      t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
      var i = t.entanglements, r = t.expirationTimes, S = t.hiddenUpdates;
      for (e = c & ~e; 0 < e; ) {
        var T = 31 - cl(e), N = 1 << T;
        i[T] = 0, r[T] = -1;
        var p = S[T];
        if (p !== null) for (S[T] = null, T = 0; T < p.length; T++) {
          var E = p[T];
          E !== null && (E.lane &= -536870913);
        }
        e &= ~N;
      }
      a !== 0 && Bf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
    }
    function Bf(t, l, e) {
      t.pendingLanes |= l, t.suspendedLanes &= ~l;
      var a = 31 - cl(l);
      t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
    }
    function qf(t, l) {
      var e = t.entangledLanes |= l;
      for (t = t.entanglements; e; ) {
        var a = 31 - cl(e), u = 1 << a;
        u & l | t[a] & l && (t[a] |= l), e &= ~u;
      }
    }
    function Yf(t, l) {
      var e = l & -l;
      return e = (e & 42) !== 0 ? 1 : nc(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
    }
    function nc(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function cc(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Gf() {
      var t = H.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : A0(t.type));
    }
    function Qf(t, l) {
      var e = H.p;
      try {
        return H.p = t, l();
      } finally {
        H.p = e;
      }
    }
    var Pl = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + Pl, Ft = "__reactProps$" + Pl, Je = "__reactContainer$" + Pl, ic = "__reactEvents$" + Pl, zd = "__reactListeners$" + Pl, Td = "__reactHandles$" + Pl, Xf = "__reactResources$" + Pl, Ha = "__reactMarker$" + Pl;
    function fc(t) {
      delete t[Xt], delete t[Ft], delete t[ic], delete t[zd], delete t[Td];
    }
    function we(t) {
      var l = t[Xt];
      if (l) return l;
      for (var e = t.parentNode; e; ) {
        if (l = e[Je] || e[Xt]) {
          if (e = l.alternate, l.child !== null || e !== null && e.child !== null) for (t = s0(t); t !== null; ) {
            if (e = t[Xt]) return e;
            t = s0(t);
          }
          return l;
        }
        t = e, e = t.parentNode;
      }
      return null;
    }
    function ke(t) {
      if (t = t[Xt] || t[Je]) {
        var l = t.tag;
        if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3) return t;
      }
      return null;
    }
    function Ba(t) {
      var l = t.tag;
      if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
      throw Error(s(33));
    }
    function $e(t) {
      var l = t[Xf];
      return l || (l = t[Xf] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), l;
    }
    function Yt(t) {
      t[Ha] = true;
    }
    var Zf = /* @__PURE__ */ new Set(), Lf = {};
    function Ne(t, l) {
      We(t, l), We(t + "Capture", l);
    }
    function We(t, l) {
      for (Lf[t] = l, t = 0; t < l.length; t++) Zf.add(l[t]);
    }
    var Ad = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Vf = {}, Kf = {};
    function _d(t) {
      return lc.call(Kf, t) ? true : lc.call(Vf, t) ? false : Ad.test(t) ? Kf[t] = true : (Vf[t] = true, false);
    }
    function Uu(t, l, e) {
      if (_d(l)) if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
    }
    function Cu(t, l, e) {
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(l);
            return;
        }
        t.setAttribute(l, "" + e);
      }
    }
    function Cl(t, l, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttributeNS(l, e, "" + a);
      }
    }
    function gl(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Jf(t) {
      var l = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
    }
    function Nd(t, l, e) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
      if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var u = a.get, n = a.set;
        return Object.defineProperty(t, l, {
          configurable: true,
          get: function() {
            return u.call(this);
          },
          set: function(c) {
            e = "" + c, n.call(this, c);
          }
        }), Object.defineProperty(t, l, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return e;
          },
          setValue: function(c) {
            e = "" + c;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[l];
          }
        };
      }
    }
    function sc(t) {
      if (!t._valueTracker) {
        var l = Jf(t) ? "checked" : "value";
        t._valueTracker = Nd(t, l, "" + t[l]);
      }
    }
    function wf(t) {
      if (!t) return false;
      var l = t._valueTracker;
      if (!l) return true;
      var e = l.getValue(), a = "";
      return t && (a = Jf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), true) : false;
    }
    function Hu(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var Od = /[\n"\\]/g;
    function vl(t) {
      return t.replace(Od, function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      });
    }
    function rc(t, l, e, a, u, n, c, i) {
      t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + gl(l)) : t.value !== "" + gl(l) && (t.value = "" + gl(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? oc(t, c, gl(l)) : e != null ? oc(t, c, gl(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.name = "" + gl(i) : t.removeAttribute("name");
    }
    function kf(t, l, e, a, u, n, c, i) {
      if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
        if (!(n !== "submit" && n !== "reset" || l != null)) {
          sc(t);
          return;
        }
        e = e != null ? "" + gl(e) : "", l = l != null ? "" + gl(l) : e, i || l === t.value || (t.value = l), t.defaultValue = l;
      }
      a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = i ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), sc(t);
    }
    function oc(t, l, e) {
      l === "number" && Hu(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
    }
    function Fe(t, l, e, a) {
      if (t = t.options, l) {
        l = {};
        for (var u = 0; u < e.length; u++) l["$" + e[u]] = true;
        for (e = 0; e < t.length; e++) u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = true);
      } else {
        for (e = "" + gl(e), l = null, u = 0; u < t.length; u++) {
          if (t[u].value === e) {
            t[u].selected = true, a && (t[u].defaultSelected = true);
            return;
          }
          l !== null || t[u].disabled || (l = t[u]);
        }
        l !== null && (l.selected = true);
      }
    }
    function $f(t, l, e) {
      if (l != null && (l = "" + gl(l), l !== t.value && (t.value = l), e == null)) {
        t.defaultValue !== l && (t.defaultValue = l);
        return;
      }
      t.defaultValue = e != null ? "" + gl(e) : "";
    }
    function Wf(t, l, e, a) {
      if (l == null) {
        if (a != null) {
          if (e != null) throw Error(s(92));
          if (Wt(a)) {
            if (1 < a.length) throw Error(s(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), l = e;
      }
      e = gl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), sc(t);
    }
    function Ie(t, l) {
      if (l) {
        var e = t.firstChild;
        if (e && e === t.lastChild && e.nodeType === 3) {
          e.nodeValue = l;
          return;
        }
      }
      t.textContent = l;
    }
    var Md = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ff(t, l, e) {
      var a = l.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Md.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
    }
    function If(t, l, e) {
      if (l != null && typeof l != "object") throw Error(s(62));
      if (t = t.style, e != null) {
        for (var a in e) !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var u in l) a = l[u], l.hasOwnProperty(u) && e[u] !== a && Ff(t, u, a);
      } else for (var n in l) l.hasOwnProperty(n) && Ff(t, n, l[n]);
    }
    function dc(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
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
    var jd = /* @__PURE__ */ new Map([
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
    ]), Dd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Bu(t) {
      return Dd.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Hl() {
    }
    var yc = null;
    function mc(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var Pe = null, ta = null;
    function Pf(t) {
      var l = ke(t);
      if (l && (t = l.stateNode)) {
        var e = t[Ft] || null;
        t: switch (t = l.stateNode, l.type) {
          case "input":
            if (rc(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
              for (e = t; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + vl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
                var a = e[l];
                if (a !== t && a.form === t.form) {
                  var u = a[Ft] || null;
                  if (!u) throw Error(s(90));
                  rc(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (l = 0; l < e.length; l++) a = e[l], a.form === t.form && wf(a);
            }
            break t;
          case "textarea":
            $f(t, e.value, e.defaultValue);
            break t;
          case "select":
            l = e.value, l != null && Fe(t, !!e.multiple, l, false);
        }
      }
    }
    var hc = false;
    function ts(t, l, e) {
      if (hc) return t(l, e);
      hc = true;
      try {
        var a = t(l);
        return a;
      } finally {
        if (hc = false, (Pe !== null || ta !== null) && (Tn(), Pe && (l = Pe, t = ta, ta = Pe = null, Pf(l), t))) for (l = 0; l < t.length; l++) Pf(t[l]);
      }
    }
    function qa(t, l) {
      var e = t.stateNode;
      if (e === null) return null;
      var a = e[Ft] || null;
      if (a === null) return null;
      e = a[l];
      t: switch (l) {
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
          (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (e && typeof e != "function") throw Error(s(231, l, typeof e));
      return e;
    }
    var Bl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gc = false;
    if (Bl) try {
      var Ya = {};
      Object.defineProperty(Ya, "passive", {
        get: function() {
          gc = true;
        }
      }), window.addEventListener("test", Ya, Ya), window.removeEventListener("test", Ya, Ya);
    } catch {
      gc = false;
    }
    var te = null, vc = null, qu = null;
    function ls() {
      if (qu) return qu;
      var t, l = vc, e = l.length, a, u = "value" in te ? te.value : te.textContent, n = u.length;
      for (t = 0; t < e && l[t] === u[t]; t++) ;
      var c = e - t;
      for (a = 1; a <= c && l[e - a] === u[n - a]; a++) ;
      return qu = u.slice(t, 1 < a ? 1 - a : void 0);
    }
    function Yu(t) {
      var l = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Gu() {
      return true;
    }
    function es() {
      return false;
    }
    function It(t) {
      function l(e, a, u, n, c) {
        this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
        for (var i in t) t.hasOwnProperty(i) && (e = t[i], this[i] = e ? e(n) : n[i]);
        return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Gu : es, this.isPropagationStopped = es, this;
      }
      return O(l.prototype, {
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
      }), l;
    }
    var Oe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Qu = It(Oe), Ga = O({}, Oe, {
      view: 0,
      detail: 0
    }), Rd = It(Ga), bc, Sc, Qa, Xu = O({}, Ga, {
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
      getModifierState: xc,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Qa && (Qa && t.type === "mousemove" ? (bc = t.screenX - Qa.screenX, Sc = t.screenY - Qa.screenY) : Sc = bc = 0, Qa = t), bc);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Sc;
      }
    }), as = It(Xu), Ud = O({}, Xu, {
      dataTransfer: 0
    }), Cd = It(Ud), Hd = O({}, Ga, {
      relatedTarget: 0
    }), pc = It(Hd), Bd = O({}, Oe, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qd = It(Bd), Yd = O({}, Oe, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), Gd = It(Yd), Qd = O({}, Oe, {
      data: 0
    }), us = It(Qd), Xd = {
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
    function Vd(t) {
      var l = this.nativeEvent;
      return l.getModifierState ? l.getModifierState(t) : (t = Ld[t]) ? !!l[t] : false;
    }
    function xc() {
      return Vd;
    }
    var Kd = O({}, Ga, {
      key: function(t) {
        if (t.key) {
          var l = Xd[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress" ? (t = Yu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Zd[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xc,
      charCode: function(t) {
        return t.type === "keypress" ? Yu(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Yu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), Jd = It(Kd), wd = O({}, Xu, {
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
    }), ns = It(wd), kd = O({}, Ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xc
    }), $d = It(kd), Wd = O({}, Oe, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fd = It(Wd), Id = O({}, Xu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Pd = It(Id), ty = O({}, Oe, {
      newState: 0,
      oldState: 0
    }), ly = It(ty), ey = [
      9,
      13,
      27,
      32
    ], Ec = Bl && "CompositionEvent" in window, Xa = null;
    Bl && "documentMode" in document && (Xa = document.documentMode);
    var ay = Bl && "TextEvent" in window && !Xa, cs = Bl && (!Ec || Xa && 8 < Xa && 11 >= Xa), is = " ", fs = false;
    function ss(t, l) {
      switch (t) {
        case "keyup":
          return ey.indexOf(l.keyCode) !== -1;
        case "keydown":
          return l.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function rs(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var la = false;
    function uy(t, l) {
      switch (t) {
        case "compositionend":
          return rs(l);
        case "keypress":
          return l.which !== 32 ? null : (fs = true, is);
        case "textInput":
          return t = l.data, t === is && fs ? null : t;
        default:
          return null;
      }
    }
    function ny(t, l) {
      if (la) return t === "compositionend" || !Ec && ss(t, l) ? (t = ls(), qu = vc = te = null, la = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
            if (l.char && 1 < l.char.length) return l.char;
            if (l.which) return String.fromCharCode(l.which);
          }
          return null;
        case "compositionend":
          return cs && l.locale !== "ko" ? null : l.data;
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
    function os(t) {
      var l = t && t.nodeName && t.nodeName.toLowerCase();
      return l === "input" ? !!cy[t.type] : l === "textarea";
    }
    function ds(t, l, e, a) {
      Pe ? ta ? ta.push(a) : ta = [
        a
      ] : Pe = a, l = Dn(l, "onChange"), 0 < l.length && (e = new Qu("onChange", "change", null, e, a), t.push({
        event: e,
        listeners: l
      }));
    }
    var Za = null, La = null;
    function iy(t) {
      $o(t, 0);
    }
    function Zu(t) {
      var l = Ba(t);
      if (wf(l)) return t;
    }
    function ys(t, l) {
      if (t === "change") return l;
    }
    var ms = false;
    if (Bl) {
      var zc;
      if (Bl) {
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
      Za && (Za.detachEvent("onpropertychange", vs), La = Za = null);
    }
    function vs(t) {
      if (t.propertyName === "value" && Zu(La)) {
        var l = [];
        ds(l, La, t, mc(t)), ts(iy, l);
      }
    }
    function fy(t, l, e) {
      t === "focusin" ? (gs(), Za = l, La = e, Za.attachEvent("onpropertychange", vs)) : t === "focusout" && gs();
    }
    function sy(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return Zu(La);
    }
    function ry(t, l) {
      if (t === "click") return Zu(l);
    }
    function oy(t, l) {
      if (t === "input" || t === "change") return Zu(l);
    }
    function dy(t, l) {
      return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
    }
    var il = typeof Object.is == "function" ? Object.is : dy;
    function Va(t, l) {
      if (il(t, l)) return true;
      if (typeof t != "object" || t === null || typeof l != "object" || l === null) return false;
      var e = Object.keys(t), a = Object.keys(l);
      if (e.length !== a.length) return false;
      for (a = 0; a < e.length; a++) {
        var u = e[a];
        if (!lc.call(l, u) || !il(t[u], l[u])) return false;
      }
      return true;
    }
    function bs(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Ss(t, l) {
      var e = bs(t);
      t = 0;
      for (var a; e; ) {
        if (e.nodeType === 3) {
          if (a = t + e.textContent.length, t <= l && a >= l) return {
            node: e,
            offset: l - t
          };
          t = a;
        }
        t: {
          for (; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling;
              break t;
            }
            e = e.parentNode;
          }
          e = void 0;
        }
        e = bs(e);
      }
    }
    function ps(t, l) {
      return t && l ? t === l ? true : t && t.nodeType === 3 ? false : l && l.nodeType === 3 ? ps(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : false : false;
    }
    function xs(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var l = Hu(t.document); l instanceof t.HTMLIFrameElement; ) {
        try {
          var e = typeof l.contentWindow.location.href == "string";
        } catch {
          e = false;
        }
        if (e) t = l.contentWindow;
        else break;
        l = Hu(t.document);
      }
      return l;
    }
    function Ac(t) {
      var l = t && t.nodeName && t.nodeName.toLowerCase();
      return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
    }
    var yy = Bl && "documentMode" in document && 11 >= document.documentMode, ea = null, _c = null, Ka = null, Nc = false;
    function Es(t, l, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Nc || ea == null || ea !== Hu(a) || (a = ea, "selectionStart" in a && Ac(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Ka && Va(Ka, a) || (Ka = a, a = Dn(_c, "onSelect"), 0 < a.length && (l = new Qu("onSelect", "select", null, l, e), t.push({
        event: l,
        listeners: a
      }), l.target = ea)));
    }
    function Me(t, l) {
      var e = {};
      return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
    }
    var aa = {
      animationend: Me("Animation", "AnimationEnd"),
      animationiteration: Me("Animation", "AnimationIteration"),
      animationstart: Me("Animation", "AnimationStart"),
      transitionrun: Me("Transition", "TransitionRun"),
      transitionstart: Me("Transition", "TransitionStart"),
      transitioncancel: Me("Transition", "TransitionCancel"),
      transitionend: Me("Transition", "TransitionEnd")
    }, Oc = {}, zs = {};
    Bl && (zs = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
    function je(t) {
      if (Oc[t]) return Oc[t];
      if (!aa[t]) return t;
      var l = aa[t], e;
      for (e in l) if (l.hasOwnProperty(e) && e in zs) return Oc[t] = l[e];
      return t;
    }
    var Ts = je("animationend"), As = je("animationiteration"), _s = je("animationstart"), my = je("transitionrun"), hy = je("transitionstart"), gy = je("transitioncancel"), Ns = je("transitionend"), Os = /* @__PURE__ */ new Map(), Mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Mc.push("scrollEnd");
    function Nl(t, l) {
      Os.set(t, l), Ne(l, [
        t
      ]);
    }
    var Lu = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var l = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(l)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, bl = [], ua = 0, jc = 0;
    function Vu() {
      for (var t = ua, l = jc = ua = 0; l < t; ) {
        var e = bl[l];
        bl[l++] = null;
        var a = bl[l];
        bl[l++] = null;
        var u = bl[l];
        bl[l++] = null;
        var n = bl[l];
        if (bl[l++] = null, a !== null && u !== null) {
          var c = a.pending;
          c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
        }
        n !== 0 && Ms(e, u, n);
      }
    }
    function Ku(t, l, e, a) {
      bl[ua++] = t, bl[ua++] = l, bl[ua++] = e, bl[ua++] = a, jc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Dc(t, l, e, a) {
      return Ku(t, l, e, a), Ju(t);
    }
    function De(t, l) {
      return Ku(t, null, null, l), Ju(t);
    }
    function Ms(t, l, e) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e);
      for (var u = false, n = t.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = true)), t = n, n = n.return;
      return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - cl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [
        l
      ] : a.push(l), l.lane = e | 536870912), n) : null;
    }
    function Ju(t) {
      if (50 < yu) throw yu = 0, Qi = null, Error(s(185));
      for (var l = t.return; l !== null; ) t = l, l = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var na = {};
    function vy(t, l, e, a) {
      this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function fl(t, l, e, a) {
      return new vy(t, l, e, a);
    }
    function Rc(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function ql(t, l) {
      var e = t.alternate;
      return e === null ? (e = fl(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
    }
    function js(t, l) {
      t.flags &= 65011714;
      var e = t.alternate;
      return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }), t;
    }
    function wu(t, l, e, a, u, n) {
      var c = 0;
      if (a = t, typeof t == "function") Rc(t) && (c = 1);
      else if (typeof t == "string") c = Em(t, e, G.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case qt:
          return t = fl(31, e, l, u), t.elementType = qt, t.lanes = n, t;
        case ft:
          return Re(e.children, u, n, l);
        case Ht:
          c = 8, u |= 24;
          break;
        case Et:
          return t = fl(12, e, l, u | 2), t.elementType = Et, t.lanes = n, t;
        case Qt:
          return t = fl(13, e, l, u), t.elementType = Qt, t.lanes = n, t;
        case K:
          return t = fl(19, e, l, u), t.elementType = K, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case bt:
              c = 10;
              break t;
            case Bt:
              c = 9;
              break t;
            case At:
              c = 11;
              break t;
            case X:
              c = 14;
              break t;
            case I:
              c = 16, a = null;
              break t;
          }
          c = 29, e = Error(s(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return l = fl(c, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
    }
    function Re(t, l, e, a) {
      return t = fl(7, t, a, l), t.lanes = e, t;
    }
    function Uc(t, l, e) {
      return t = fl(6, t, null, l), t.lanes = e, t;
    }
    function Ds(t) {
      var l = fl(18, null, null, 0);
      return l.stateNode = t, l;
    }
    function Cc(t, l, e) {
      return l = fl(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, l;
    }
    var Rs = /* @__PURE__ */ new WeakMap();
    function Sl(t, l) {
      if (typeof t == "object" && t !== null) {
        var e = Rs.get(t);
        return e !== void 0 ? e : (l = {
          value: t,
          source: l,
          stack: Df(l)
        }, Rs.set(t, l), l);
      }
      return {
        value: t,
        source: l,
        stack: Df(l)
      };
    }
    var ca = [], ia = 0, ku = null, Ja = 0, pl = [], xl = 0, le = null, jl = 1, Dl = "";
    function Yl(t, l) {
      ca[ia++] = Ja, ca[ia++] = ku, ku = t, Ja = l;
    }
    function Us(t, l, e) {
      pl[xl++] = jl, pl[xl++] = Dl, pl[xl++] = le, le = t;
      var a = jl;
      t = Dl;
      var u = 32 - cl(a) - 1;
      a &= ~(1 << u), e += 1;
      var n = 32 - cl(l) + u;
      if (30 < n) {
        var c = u - u % 5;
        n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, jl = 1 << 32 - cl(l) + u | e << u | a, Dl = n + t;
      } else jl = 1 << n | e << u | a, Dl = t;
    }
    function Hc(t) {
      t.return !== null && (Yl(t, 1), Us(t, 1, 0));
    }
    function Bc(t) {
      for (; t === ku; ) ku = ca[--ia], ca[ia] = null, Ja = ca[--ia], ca[ia] = null;
      for (; t === le; ) le = pl[--xl], pl[xl] = null, Dl = pl[--xl], pl[xl] = null, jl = pl[--xl], pl[xl] = null;
    }
    function Cs(t, l) {
      pl[xl++] = jl, pl[xl++] = Dl, pl[xl++] = le, jl = l.id, Dl = l.overflow, le = t;
    }
    var Zt = null, St = null, ut = false, ee = null, El = false, qc = Error(s(519));
    function ae(t) {
      var l = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw wa(Sl(l, t)), qc;
    }
    function Hs(t) {
      var l = t.stateNode, e = t.type, a = t.memoizedProps;
      switch (l[Xt] = t, l[Ft] = a, e) {
        case "dialog":
          lt("cancel", l), lt("close", l);
          break;
        case "iframe":
        case "object":
        case "embed":
          lt("load", l);
          break;
        case "video":
        case "audio":
          for (e = 0; e < hu.length; e++) lt(hu[e], l);
          break;
        case "source":
          lt("error", l);
          break;
        case "img":
        case "image":
        case "link":
          lt("error", l), lt("load", l);
          break;
        case "details":
          lt("toggle", l);
          break;
        case "input":
          lt("invalid", l), kf(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          lt("invalid", l);
          break;
        case "textarea":
          lt("invalid", l), Wf(l, a.value, a.defaultValue, a.children);
      }
      e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === true || Po(l.textContent, e) ? (a.popover != null && (lt("beforetoggle", l), lt("toggle", l)), a.onScroll != null && lt("scroll", l), a.onScrollEnd != null && lt("scrollend", l), a.onClick != null && (l.onclick = Hl), l = true) : l = false, l || ae(t, true);
    }
    function Bs(t) {
      for (Zt = t.return; Zt; ) switch (Zt.tag) {
        case 5:
        case 31:
        case 13:
          El = false;
          return;
        case 27:
        case 3:
          El = true;
          return;
        default:
          Zt = Zt.return;
      }
    }
    function fa(t) {
      if (t !== Zt) return false;
      if (!ut) return Bs(t), ut = true, false;
      var l = t.tag, e;
      if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || lf(t.type, t.memoizedProps)), e = !e), e && St && ae(t), Bs(t), l === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
        St = f0(t);
      } else if (l === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
        St = f0(t);
      } else l === 27 ? (l = St, ve(t.type) ? (t = cf, cf = null, St = t) : St = l) : St = Zt ? Tl(t.stateNode.nextSibling) : null;
      return true;
    }
    function Ue() {
      St = Zt = null, ut = false;
    }
    function Yc() {
      var t = ee;
      return t !== null && (el === null ? el = t : el.push.apply(el, t), ee = null), t;
    }
    function wa(t) {
      ee === null ? ee = [
        t
      ] : ee.push(t);
    }
    var Gc = y(null), Ce = null, Gl = null;
    function ue(t, l, e) {
      B(Gc, l._currentValue), l._currentValue = e;
    }
    function Ql(t) {
      t._currentValue = Gc.current, M(Gc);
    }
    function Qc(t, l, e) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
        t = t.return;
      }
    }
    function Xc(t, l, e, a) {
      var u = t.child;
      for (u !== null && (u.return = t); u !== null; ) {
        var n = u.dependencies;
        if (n !== null) {
          var c = u.child;
          n = n.firstContext;
          t: for (; n !== null; ) {
            var i = n;
            n = u;
            for (var r = 0; r < l.length; r++) if (i.context === l[r]) {
              n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Qc(n.return, e, t), a || (c = null);
              break t;
            }
            n = i.next;
          }
        } else if (u.tag === 18) {
          if (c = u.return, c === null) throw Error(s(341));
          c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Qc(c, e, t), c = null;
        } else c = u.child;
        if (c !== null) c.return = u;
        else for (c = u; c !== null; ) {
          if (c === t) {
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
    function sa(t, l, e, a) {
      t = null;
      for (var u = l, n = false; u !== null; ) {
        if (!n) {
          if ((u.flags & 524288) !== 0) n = true;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var c = u.alternate;
          if (c === null) throw Error(s(387));
          if (c = c.memoizedProps, c !== null) {
            var i = u.type;
            il(u.pendingProps.value, c.value) || (t !== null ? t.push(i) : t = [
              i
            ]);
          }
        } else if (u === st.current) {
          if (c = u.alternate, c === null) throw Error(s(387));
          c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(pu) : t = [
            pu
          ]);
        }
        u = u.return;
      }
      t !== null && Xc(l, t, e, a), l.flags |= 262144;
    }
    function $u(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!il(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function He(t) {
      Ce = t, Gl = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Lt(t) {
      return qs(Ce, t);
    }
    function Wu(t, l) {
      return Ce === null && He(t), qs(t, l);
    }
    function qs(t, l) {
      var e = l._currentValue;
      if (l = {
        context: l,
        memoizedValue: e,
        next: null
      }, Gl === null) {
        if (t === null) throw Error(s(308));
        Gl = l, t.dependencies = {
          lanes: 0,
          firstContext: l
        }, t.flags |= 524288;
      } else Gl = Gl.next = l;
      return e;
    }
    var by = typeof AbortController < "u" ? AbortController : function() {
      var t = [], l = this.signal = {
        aborted: false,
        addEventListener: function(e, a) {
          t.push(a);
        }
      };
      this.abort = function() {
        l.aborted = true, t.forEach(function(e) {
          return e();
        });
      };
    }, Sy = f.unstable_scheduleCallback, py = f.unstable_NormalPriority, jt = {
      $$typeof: bt,
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
    function ka(t) {
      t.refCount--, t.refCount === 0 && Sy(py, function() {
        t.controller.abort();
      });
    }
    var $a = null, Lc = 0, ra = 0, oa = null;
    function xy(t, l) {
      if ($a === null) {
        var e = $a = [];
        Lc = 0, ra = Ji(), oa = {
          status: "pending",
          value: void 0,
          then: function(a) {
            e.push(a);
          }
        };
      }
      return Lc++, l.then(Ys, Ys), l;
    }
    function Ys() {
      if (--Lc === 0 && $a !== null) {
        oa !== null && (oa.status = "fulfilled");
        var t = $a;
        $a = null, ra = 0, oa = null;
        for (var l = 0; l < t.length; l++) (0, t[l])();
      }
    }
    function Ey(t, l) {
      var e = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(u) {
          e.push(u);
        }
      };
      return t.then(function() {
        a.status = "fulfilled", a.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      }, function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
      }), a;
    }
    var Gs = A.S;
    A.S = function(t, l) {
      zo = ul(), typeof l == "object" && l !== null && typeof l.then == "function" && xy(t, l), Gs !== null && Gs(t, l);
    };
    var Be = y(null);
    function Vc() {
      var t = Be.current;
      return t !== null ? t : vt.pooledCache;
    }
    function Fu(t, l) {
      l === null ? B(Be, Be.current) : B(Be, l.pool);
    }
    function Qs() {
      var t = Vc();
      return t === null ? null : {
        parent: jt._currentValue,
        pool: t
      };
    }
    var da = Error(s(460)), Kc = Error(s(474)), Iu = Error(s(542)), Pu = {
      then: function() {
      }
    };
    function Xs(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Zs(t, l, e) {
      switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Hl, Hl), l = e), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw t = l.reason, Vs(t), t;
        default:
          if (typeof l.status == "string") l.then(Hl, Hl);
          else {
            if (t = vt, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
            t = l, t.status = "pending", t.then(function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = a;
              }
            }, function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = a;
              }
            });
          }
          switch (l.status) {
            case "fulfilled":
              return l.value;
            case "rejected":
              throw t = l.reason, Vs(t), t;
          }
          throw Ye = l, da;
      }
    }
    function qe(t) {
      try {
        var l = t._init;
        return l(t._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ye = e, da) : e;
      }
    }
    var Ye = null;
    function Ls() {
      if (Ye === null) throw Error(s(459));
      var t = Ye;
      return Ye = null, t;
    }
    function Vs(t) {
      if (t === da || t === Iu) throw Error(s(483));
    }
    var ya = null, Wa = 0;
    function tn(t) {
      var l = Wa;
      return Wa += 1, ya === null && (ya = []), Zs(ya, t, l);
    }
    function Fa(t, l) {
      l = l.props.ref, t.ref = l !== void 0 ? l : null;
    }
    function ln(t, l) {
      throw l.$$typeof === D ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
    }
    function Ks(t) {
      function l(g, d) {
        if (t) {
          var b = g.deletions;
          b === null ? (g.deletions = [
            d
          ], g.flags |= 16) : b.push(d);
        }
      }
      function e(g, d) {
        if (!t) return null;
        for (; d !== null; ) l(g, d), d = d.sibling;
        return null;
      }
      function a(g) {
        for (var d = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? d.set(g.key, g) : d.set(g.index, g), g = g.sibling;
        return d;
      }
      function u(g, d) {
        return g = ql(g, d), g.index = 0, g.sibling = null, g;
      }
      function n(g, d, b) {
        return g.index = b, t ? (b = g.alternate, b !== null ? (b = b.index, b < d ? (g.flags |= 67108866, d) : b) : (g.flags |= 67108866, d)) : (g.flags |= 1048576, d);
      }
      function c(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function i(g, d, b, _) {
        return d === null || d.tag !== 6 ? (d = Uc(b, g.mode, _), d.return = g, d) : (d = u(d, b), d.return = g, d);
      }
      function r(g, d, b, _) {
        var Z = b.type;
        return Z === ft ? T(g, d, b.props.children, _, b.key) : d !== null && (d.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === I && qe(Z) === d.type) ? (d = u(d, b.props), Fa(d, b), d.return = g, d) : (d = wu(b.type, b.key, b.props, null, g.mode, _), Fa(d, b), d.return = g, d);
      }
      function S(g, d, b, _) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== b.containerInfo || d.stateNode.implementation !== b.implementation ? (d = Cc(b, g.mode, _), d.return = g, d) : (d = u(d, b.children || []), d.return = g, d);
      }
      function T(g, d, b, _, Z) {
        return d === null || d.tag !== 7 ? (d = Re(b, g.mode, _, Z), d.return = g, d) : (d = u(d, b), d.return = g, d);
      }
      function N(g, d, b) {
        if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Uc("" + d, g.mode, b), d.return = g, d;
        if (typeof d == "object" && d !== null) {
          switch (d.$$typeof) {
            case V:
              return b = wu(d.type, d.key, d.props, null, g.mode, b), Fa(b, d), b.return = g, b;
            case w:
              return d = Cc(d, g.mode, b), d.return = g, d;
            case I:
              return d = qe(d), N(g, d, b);
          }
          if (Wt(d) || Mt(d)) return d = Re(d, g.mode, b, null), d.return = g, d;
          if (typeof d.then == "function") return N(g, tn(d), b);
          if (d.$$typeof === bt) return N(g, Wu(g, d), b);
          ln(g, d);
        }
        return null;
      }
      function p(g, d, b, _) {
        var Z = d !== null ? d.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return Z !== null ? null : i(g, d, "" + b, _);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case V:
              return b.key === Z ? r(g, d, b, _) : null;
            case w:
              return b.key === Z ? S(g, d, b, _) : null;
            case I:
              return b = qe(b), p(g, d, b, _);
          }
          if (Wt(b) || Mt(b)) return Z !== null ? null : T(g, d, b, _, null);
          if (typeof b.then == "function") return p(g, d, tn(b), _);
          if (b.$$typeof === bt) return p(g, d, Wu(g, b), _);
          ln(g, b);
        }
        return null;
      }
      function E(g, d, b, _, Z) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return g = g.get(b) || null, i(d, g, "" + _, Z);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case V:
              return g = g.get(_.key === null ? b : _.key) || null, r(d, g, _, Z);
            case w:
              return g = g.get(_.key === null ? b : _.key) || null, S(d, g, _, Z);
            case I:
              return _ = qe(_), E(g, d, b, _, Z);
          }
          if (Wt(_) || Mt(_)) return g = g.get(b) || null, T(d, g, _, Z, null);
          if (typeof _.then == "function") return E(g, d, b, tn(_), Z);
          if (_.$$typeof === bt) return E(g, d, b, Wu(d, _), Z);
          ln(d, _);
        }
        return null;
      }
      function q(g, d, b, _) {
        for (var Z = null, nt = null, Q = d, F = d = 0, at = null; Q !== null && F < b.length; F++) {
          Q.index > F ? (at = Q, Q = null) : at = Q.sibling;
          var ct = p(g, Q, b[F], _);
          if (ct === null) {
            Q === null && (Q = at);
            break;
          }
          t && Q && ct.alternate === null && l(g, Q), d = n(ct, d, F), nt === null ? Z = ct : nt.sibling = ct, nt = ct, Q = at;
        }
        if (F === b.length) return e(g, Q), ut && Yl(g, F), Z;
        if (Q === null) {
          for (; F < b.length; F++) Q = N(g, b[F], _), Q !== null && (d = n(Q, d, F), nt === null ? Z = Q : nt.sibling = Q, nt = Q);
          return ut && Yl(g, F), Z;
        }
        for (Q = a(Q); F < b.length; F++) at = E(Q, g, F, b[F], _), at !== null && (t && at.alternate !== null && Q.delete(at.key === null ? F : at.key), d = n(at, d, F), nt === null ? Z = at : nt.sibling = at, nt = at);
        return t && Q.forEach(function(Ee) {
          return l(g, Ee);
        }), ut && Yl(g, F), Z;
      }
      function L(g, d, b, _) {
        if (b == null) throw Error(s(151));
        for (var Z = null, nt = null, Q = d, F = d = 0, at = null, ct = b.next(); Q !== null && !ct.done; F++, ct = b.next()) {
          Q.index > F ? (at = Q, Q = null) : at = Q.sibling;
          var Ee = p(g, Q, ct.value, _);
          if (Ee === null) {
            Q === null && (Q = at);
            break;
          }
          t && Q && Ee.alternate === null && l(g, Q), d = n(Ee, d, F), nt === null ? Z = Ee : nt.sibling = Ee, nt = Ee, Q = at;
        }
        if (ct.done) return e(g, Q), ut && Yl(g, F), Z;
        if (Q === null) {
          for (; !ct.done; F++, ct = b.next()) ct = N(g, ct.value, _), ct !== null && (d = n(ct, d, F), nt === null ? Z = ct : nt.sibling = ct, nt = ct);
          return ut && Yl(g, F), Z;
        }
        for (Q = a(Q); !ct.done; F++, ct = b.next()) ct = E(Q, g, F, ct.value, _), ct !== null && (t && ct.alternate !== null && Q.delete(ct.key === null ? F : ct.key), d = n(ct, d, F), nt === null ? Z = ct : nt.sibling = ct, nt = ct);
        return t && Q.forEach(function(Um) {
          return l(g, Um);
        }), ut && Yl(g, F), Z;
      }
      function ht(g, d, b, _) {
        if (typeof b == "object" && b !== null && b.type === ft && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case V:
              t: {
                for (var Z = b.key; d !== null; ) {
                  if (d.key === Z) {
                    if (Z = b.type, Z === ft) {
                      if (d.tag === 7) {
                        e(g, d.sibling), _ = u(d, b.props.children), _.return = g, g = _;
                        break t;
                      }
                    } else if (d.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === I && qe(Z) === d.type) {
                      e(g, d.sibling), _ = u(d, b.props), Fa(_, b), _.return = g, g = _;
                      break t;
                    }
                    e(g, d);
                    break;
                  } else l(g, d);
                  d = d.sibling;
                }
                b.type === ft ? (_ = Re(b.props.children, g.mode, _, b.key), _.return = g, g = _) : (_ = wu(b.type, b.key, b.props, null, g.mode, _), Fa(_, b), _.return = g, g = _);
              }
              return c(g);
            case w:
              t: {
                for (Z = b.key; d !== null; ) {
                  if (d.key === Z) if (d.tag === 4 && d.stateNode.containerInfo === b.containerInfo && d.stateNode.implementation === b.implementation) {
                    e(g, d.sibling), _ = u(d, b.children || []), _.return = g, g = _;
                    break t;
                  } else {
                    e(g, d);
                    break;
                  }
                  else l(g, d);
                  d = d.sibling;
                }
                _ = Cc(b, g.mode, _), _.return = g, g = _;
              }
              return c(g);
            case I:
              return b = qe(b), ht(g, d, b, _);
          }
          if (Wt(b)) return q(g, d, b, _);
          if (Mt(b)) {
            if (Z = Mt(b), typeof Z != "function") throw Error(s(150));
            return b = Z.call(b), L(g, d, b, _);
          }
          if (typeof b.then == "function") return ht(g, d, tn(b), _);
          if (b.$$typeof === bt) return ht(g, d, Wu(g, b), _);
          ln(g, b);
        }
        return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, d !== null && d.tag === 6 ? (e(g, d.sibling), _ = u(d, b), _.return = g, g = _) : (e(g, d), _ = Uc(b, g.mode, _), _.return = g, g = _), c(g)) : e(g, d);
      }
      return function(g, d, b, _) {
        try {
          Wa = 0;
          var Z = ht(g, d, b, _);
          return ya = null, Z;
        } catch (Q) {
          if (Q === da || Q === Iu) throw Q;
          var nt = fl(29, Q, null, g.mode);
          return nt.lanes = _, nt.return = g, nt;
        }
      };
    }
    var Ge = Ks(true), Js = Ks(false), ne = false;
    function Jc(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
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
    function wc(t, l) {
      t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function ce(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ie(t, l, e) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (it & 2) !== 0) {
        var u = a.pending;
        return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Ju(t), Ms(t, null, e), l;
      }
      return Ku(t, a, l, e), Ju(t);
    }
    function Ia(t, l, e) {
      if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
        var a = l.lanes;
        a &= t.pendingLanes, e |= a, l.lanes = e, qf(t, e);
      }
    }
    function kc(t, l) {
      var e = t.updateQueue, a = t.alternate;
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
          n === null ? u = n = l : n = n.next = l;
        } else u = n = l;
        e = {
          baseState: a.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: n,
          shared: a.shared,
          callbacks: a.callbacks
        }, t.updateQueue = e;
        return;
      }
      t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
    }
    var $c = false;
    function Pa() {
      if ($c) {
        var t = oa;
        if (t !== null) throw t;
      }
    }
    function tu(t, l, e, a) {
      $c = false;
      var u = t.updateQueue;
      ne = false;
      var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
      if (i !== null) {
        u.shared.pending = null;
        var r = i, S = r.next;
        r.next = null, c === null ? n = S : c.next = S, c = r;
        var T = t.alternate;
        T !== null && (T = T.updateQueue, i = T.lastBaseUpdate, i !== c && (i === null ? T.firstBaseUpdate = S : i.next = S, T.lastBaseUpdate = r));
      }
      if (n !== null) {
        var N = u.baseState;
        c = 0, T = S = r = null, i = n;
        do {
          var p = i.lane & -536870913, E = p !== i.lane;
          if (E ? (et & p) === p : (a & p) === p) {
            p !== 0 && p === ra && ($c = true), T !== null && (T = T.next = {
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: null,
              next: null
            });
            t: {
              var q = t, L = i;
              p = l;
              var ht = e;
              switch (L.tag) {
                case 1:
                  if (q = L.payload, typeof q == "function") {
                    N = q.call(ht, N, p);
                    break t;
                  }
                  N = q;
                  break t;
                case 3:
                  q.flags = q.flags & -65537 | 128;
                case 0:
                  if (q = L.payload, p = typeof q == "function" ? q.call(ht, N, p) : q, p == null) break t;
                  N = O({}, N, p);
                  break t;
                case 2:
                  ne = true;
              }
            }
            p = i.callback, p !== null && (t.flags |= 64, E && (t.flags |= 8192), E = u.callbacks, E === null ? u.callbacks = [
              p
            ] : E.push(p));
          } else E = {
            lane: p,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, T === null ? (S = T = E, r = N) : T = T.next = E, c |= p;
          if (i = i.next, i === null) {
            if (i = u.shared.pending, i === null) break;
            E = i, i = E.next, E.next = null, u.lastBaseUpdate = E, u.shared.pending = null;
          }
        } while (true);
        T === null && (r = N), u.baseState = r, u.firstBaseUpdate = S, u.lastBaseUpdate = T, n === null && (u.shared.lanes = 0), de |= c, t.lanes = c, t.memoizedState = N;
      }
    }
    function ws(t, l) {
      if (typeof t != "function") throw Error(s(191, t));
      t.call(l);
    }
    function ks(t, l) {
      var e = t.callbacks;
      if (e !== null) for (t.callbacks = null, t = 0; t < e.length; t++) ws(e[t], l);
    }
    var ma = y(null), en = y(0);
    function $s(t, l) {
      t = $l, B(en, t), B(ma, l), $l = t | l.baseLanes;
    }
    function Wc() {
      B(en, $l), B(ma, ma.current);
    }
    function Fc() {
      $l = en.current, M(ma), M(en);
    }
    var sl = y(null), zl = null;
    function fe(t) {
      var l = t.alternate;
      B(Nt, Nt.current & 1), B(sl, t), zl === null && (l === null || ma.current !== null || l.memoizedState !== null) && (zl = t);
    }
    function Ic(t) {
      B(Nt, Nt.current), B(sl, t), zl === null && (zl = t);
    }
    function Ws(t) {
      t.tag === 22 ? (B(Nt, Nt.current), B(sl, t), zl === null && (zl = t)) : se();
    }
    function se() {
      B(Nt, Nt.current), B(sl, sl.current);
    }
    function rl(t) {
      M(sl), zl === t && (zl = null), M(Nt);
    }
    var Nt = y(0);
    function an(t) {
      for (var l = t; l !== null; ) {
        if (l.tag === 13) {
          var e = l.memoizedState;
          if (e !== null && (e = e.dehydrated, e === null || uf(e) || nf(e))) return l;
        } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
          if ((l.flags & 128) !== 0) return l;
        } else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return null;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      return null;
    }
    var Xl = 0, W = null, yt = null, Dt = null, un = false, ha = false, Qe = false, nn = 0, lu = 0, ga = null, zy = 0;
    function zt() {
      throw Error(s(321));
    }
    function Pc(t, l) {
      if (l === null) return false;
      for (var e = 0; e < l.length && e < t.length; e++) if (!il(t[e], l[e])) return false;
      return true;
    }
    function ti(t, l, e, a, u, n) {
      return Xl = n, W = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, A.H = t === null || t.memoizedState === null ? Ur : hi, Qe = false, n = e(a, u), Qe = false, ha && (n = Is(l, e, a, u)), Fs(t), n;
    }
    function Fs(t) {
      A.H = uu;
      var l = yt !== null && yt.next !== null;
      if (Xl = 0, Dt = yt = W = null, un = false, lu = 0, ga = null, l) throw Error(s(300));
      t === null || Rt || (t = t.dependencies, t !== null && $u(t) && (Rt = true));
    }
    function Is(t, l, e, a) {
      W = t;
      var u = 0;
      do {
        if (ha && (ga = null), lu = 0, ha = false, 25 <= u) throw Error(s(301));
        if (u += 1, Dt = yt = null, t.updateQueue != null) {
          var n = t.updateQueue;
          n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
        }
        A.H = Cr, n = l(e, a);
      } while (ha);
      return n;
    }
    function Ty() {
      var t = A.H, l = t.useState()[0];
      return l = typeof l.then == "function" ? eu(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (W.flags |= 1024), l;
    }
    function li() {
      var t = nn !== 0;
      return nn = 0, t;
    }
    function ei(t, l, e) {
      l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
    }
    function ai(t) {
      if (un) {
        for (t = t.memoizedState; t !== null; ) {
          var l = t.queue;
          l !== null && (l.pending = null), t = t.next;
        }
        un = false;
      }
      Xl = 0, Dt = yt = W = null, ha = false, lu = nn = 0, ga = null;
    }
    function $t() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Dt === null ? W.memoizedState = Dt = t : Dt = Dt.next = t, Dt;
    }
    function Ot() {
      if (yt === null) {
        var t = W.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = yt.next;
      var l = Dt === null ? W.memoizedState : Dt.next;
      if (l !== null) Dt = l, yt = t;
      else {
        if (t === null) throw W.alternate === null ? Error(s(467)) : Error(s(310));
        yt = t, t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null
        }, Dt === null ? W.memoizedState = Dt = t : Dt = Dt.next = t;
      }
      return Dt;
    }
    function cn() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function eu(t) {
      var l = lu;
      return lu += 1, ga === null && (ga = []), t = Zs(ga, t, l), l = W, (Dt === null ? l.memoizedState : Dt.next) === null && (l = l.alternate, A.H = l === null || l.memoizedState === null ? Ur : hi), t;
    }
    function fn(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return eu(t);
        if (t.$$typeof === bt) return Lt(t);
      }
      throw Error(s(438, String(t)));
    }
    function ui(t) {
      var l = null, e = W.updateQueue;
      if (e !== null && (l = e.memoCache), l == null) {
        var a = W.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
          data: a.data.map(function(u) {
            return u.slice();
          }),
          index: 0
        })));
      }
      if (l == null && (l = {
        data: [],
        index: 0
      }), e === null && (e = cn(), W.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0) for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Jt;
      return l.index++, e;
    }
    function Zl(t, l) {
      return typeof l == "function" ? l(t) : l;
    }
    function sn(t) {
      var l = Ot();
      return ni(l, yt, t);
    }
    function ni(t, l, e) {
      var a = t.queue;
      if (a === null) throw Error(s(311));
      a.lastRenderedReducer = e;
      var u = t.baseQueue, n = a.pending;
      if (n !== null) {
        if (u !== null) {
          var c = u.next;
          u.next = n.next, n.next = c;
        }
        l.baseQueue = u = n, a.pending = null;
      }
      if (n = t.baseState, u === null) t.memoizedState = n;
      else {
        l = u.next;
        var i = c = null, r = null, S = l, T = false;
        do {
          var N = S.lane & -536870913;
          if (N !== S.lane ? (et & N) === N : (Xl & N) === N) {
            var p = S.revertLane;
            if (p === 0) r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }), N === ra && (T = true);
            else if ((Xl & p) === p) {
              S = S.next, p === ra && (T = true);
              continue;
            } else N = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }, r === null ? (i = r = N, c = n) : r = r.next = N, W.lanes |= p, de |= p;
            N = S.action, Qe && e(n, N), n = S.hasEagerState ? S.eagerState : e(n, N);
          } else p = {
            lane: N,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, r === null ? (i = r = p, c = n) : r = r.next = p, W.lanes |= N, de |= N;
          S = S.next;
        } while (S !== null && S !== l);
        if (r === null ? c = n : r.next = i, !il(n, t.memoizedState) && (Rt = true, T && (e = oa, e !== null))) throw e;
        t.memoizedState = n, t.baseState = c, t.baseQueue = r, a.lastRenderedState = n;
      }
      return u === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function ci(t) {
      var l = Ot(), e = l.queue;
      if (e === null) throw Error(s(311));
      e.lastRenderedReducer = t;
      var a = e.dispatch, u = e.pending, n = l.memoizedState;
      if (u !== null) {
        e.pending = null;
        var c = u = u.next;
        do
          n = t(n, c.action), c = c.next;
        while (c !== u);
        il(n, l.memoizedState) || (Rt = true), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
      }
      return [
        n,
        a
      ];
    }
    function Ps(t, l, e) {
      var a = W, u = Ot(), n = ut;
      if (n) {
        if (e === void 0) throw Error(s(407));
        e = e();
      } else e = l();
      var c = !il((yt || u).memoizedState, e);
      if (c && (u.memoizedState = e, Rt = true), u = u.queue, si(er.bind(null, a, u, t), [
        t
      ]), u.getSnapshot !== l || c || Dt !== null && Dt.memoizedState.tag & 1) {
        if (a.flags |= 2048, va(9, {
          destroy: void 0
        }, lr.bind(null, a, u, e, l), null), vt === null) throw Error(s(349));
        n || (Xl & 127) !== 0 || tr(a, l, e);
      }
      return e;
    }
    function tr(t, l, e) {
      t.flags |= 16384, t = {
        getSnapshot: l,
        value: e
      }, l = W.updateQueue, l === null ? (l = cn(), W.updateQueue = l, l.stores = [
        t
      ]) : (e = l.stores, e === null ? l.stores = [
        t
      ] : e.push(t));
    }
    function lr(t, l, e, a) {
      l.value = e, l.getSnapshot = a, ar(l) && ur(t);
    }
    function er(t, l, e) {
      return e(function() {
        ar(l) && ur(t);
      });
    }
    function ar(t) {
      var l = t.getSnapshot;
      t = t.value;
      try {
        var e = l();
        return !il(t, e);
      } catch {
        return true;
      }
    }
    function ur(t) {
      var l = De(t, 2);
      l !== null && al(l, t, 2);
    }
    function ii(t) {
      var l = $t();
      if (typeof t == "function") {
        var e = t;
        if (t = e(), Qe) {
          Il(true);
          try {
            e();
          } finally {
            Il(false);
          }
        }
      }
      return l.memoizedState = l.baseState = t, l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zl,
        lastRenderedState: t
      }, l;
    }
    function nr(t, l, e, a) {
      return t.baseState = e, ni(t, yt, typeof a == "function" ? a : Zl);
    }
    function Ay(t, l, e, a, u) {
      if (dn(t)) throw Error(s(485));
      if (t = l.action, t !== null) {
        var n = {
          payload: u,
          action: t,
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
        A.T !== null ? e(true) : n.isTransition = false, a(n), e = l.pending, e === null ? (n.next = l.pending = n, cr(l, n)) : (n.next = e.next, l.pending = e.next = n);
      }
    }
    function cr(t, l) {
      var e = l.action, a = l.payload, u = t.state;
      if (l.isTransition) {
        var n = A.T, c = {};
        A.T = c;
        try {
          var i = e(u, a), r = A.S;
          r !== null && r(c, i), ir(t, l, i);
        } catch (S) {
          fi(t, l, S);
        } finally {
          n !== null && c.types !== null && (n.types = c.types), A.T = n;
        }
      } else try {
        n = e(u, a), ir(t, l, n);
      } catch (S) {
        fi(t, l, S);
      }
    }
    function ir(t, l, e) {
      e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
        fr(t, l, a);
      }, function(a) {
        return fi(t, l, a);
      }) : fr(t, l, e);
    }
    function fr(t, l, e) {
      l.status = "fulfilled", l.value = e, sr(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, cr(t, e)));
    }
    function fi(t, l, e) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          l.status = "rejected", l.reason = e, sr(l), l = l.next;
        while (l !== a);
      }
      t.action = null;
    }
    function sr(t) {
      t = t.listeners;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
    function rr(t, l) {
      return l;
    }
    function or(t, l) {
      if (ut) {
        var e = vt.formState;
        if (e !== null) {
          t: {
            var a = W;
            if (ut) {
              if (St) {
                l: {
                  for (var u = St, n = El; u.nodeType !== 8; ) {
                    if (!n) {
                      u = null;
                      break l;
                    }
                    if (u = Tl(u.nextSibling), u === null) {
                      u = null;
                      break l;
                    }
                  }
                  n = u.data, u = n === "F!" || n === "F" ? u : null;
                }
                if (u) {
                  St = Tl(u.nextSibling), a = u.data === "F!";
                  break t;
                }
              }
              ae(a);
            }
            a = false;
          }
          a && (l = e[0]);
        }
      }
      return e = $t(), e.memoizedState = e.baseState = l, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rr,
        lastRenderedState: l
      }, e.queue = a, e = jr.bind(null, W, a), a.dispatch = e, a = ii(false), n = mi.bind(null, W, false, a.queue), a = $t(), u = {
        state: l,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = u, e = Ay.bind(null, W, u, n, e), u.dispatch = e, a.memoizedState = t, [
        l,
        e,
        false
      ];
    }
    function dr(t) {
      var l = Ot();
      return yr(l, yt, t);
    }
    function yr(t, l, e) {
      if (l = ni(t, l, rr)[0], t = sn(Zl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
        var a = eu(l);
      } catch (c) {
        throw c === da ? Iu : c;
      }
      else a = l;
      l = Ot();
      var u = l.queue, n = u.dispatch;
      return e !== l.memoizedState && (W.flags |= 2048, va(9, {
        destroy: void 0
      }, _y.bind(null, u, e), null)), [
        a,
        n,
        t
      ];
    }
    function _y(t, l) {
      t.action = l;
    }
    function mr(t) {
      var l = Ot(), e = yt;
      if (e !== null) return yr(l, e, t);
      Ot(), l = l.memoizedState, e = Ot();
      var a = e.queue.dispatch;
      return e.memoizedState = t, [
        l,
        a,
        false
      ];
    }
    function va(t, l, e, a) {
      return t = {
        tag: t,
        create: e,
        deps: a,
        inst: l,
        next: null
      }, l = W.updateQueue, l === null && (l = cn(), W.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
    }
    function hr() {
      return Ot().memoizedState;
    }
    function rn(t, l, e, a) {
      var u = $t();
      W.flags |= t, u.memoizedState = va(1 | l, {
        destroy: void 0
      }, e, a === void 0 ? null : a);
    }
    function on(t, l, e, a) {
      var u = Ot();
      a = a === void 0 ? null : a;
      var n = u.memoizedState.inst;
      yt !== null && a !== null && Pc(a, yt.memoizedState.deps) ? u.memoizedState = va(l, n, e, a) : (W.flags |= t, u.memoizedState = va(1 | l, n, e, a));
    }
    function gr(t, l) {
      rn(8390656, 8, t, l);
    }
    function si(t, l) {
      on(2048, 8, t, l);
    }
    function Ny(t) {
      W.flags |= 4;
      var l = W.updateQueue;
      if (l === null) l = cn(), W.updateQueue = l, l.events = [
        t
      ];
      else {
        var e = l.events;
        e === null ? l.events = [
          t
        ] : e.push(t);
      }
    }
    function vr(t) {
      var l = Ot().memoizedState;
      return Ny({
        ref: l,
        nextImpl: t
      }), function() {
        if ((it & 2) !== 0) throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
    function br(t, l) {
      return on(4, 2, t, l);
    }
    function Sr(t, l) {
      return on(4, 4, t, l);
    }
    function pr(t, l) {
      if (typeof l == "function") {
        t = t();
        var e = l(t);
        return function() {
          typeof e == "function" ? e() : l(null);
        };
      }
      if (l != null) return t = t(), l.current = t, function() {
        l.current = null;
      };
    }
    function xr(t, l, e) {
      e = e != null ? e.concat([
        t
      ]) : null, on(4, 4, pr.bind(null, l, t), e);
    }
    function ri() {
    }
    function Er(t, l) {
      var e = Ot();
      l = l === void 0 ? null : l;
      var a = e.memoizedState;
      return l !== null && Pc(l, a[1]) ? a[0] : (e.memoizedState = [
        t,
        l
      ], t);
    }
    function zr(t, l) {
      var e = Ot();
      l = l === void 0 ? null : l;
      var a = e.memoizedState;
      if (l !== null && Pc(l, a[1])) return a[0];
      if (a = t(), Qe) {
        Il(true);
        try {
          t();
        } finally {
          Il(false);
        }
      }
      return e.memoizedState = [
        a,
        l
      ], a;
    }
    function oi(t, l, e) {
      return e === void 0 || (Xl & 1073741824) !== 0 && (et & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Ao(), W.lanes |= t, de |= t, e);
    }
    function Tr(t, l, e, a) {
      return il(e, l) ? e : ma.current !== null ? (t = oi(t, e, a), il(t, l) || (Rt = true), t) : (Xl & 42) === 0 || (Xl & 1073741824) !== 0 && (et & 261930) === 0 ? (Rt = true, t.memoizedState = e) : (t = Ao(), W.lanes |= t, de |= t, l);
    }
    function Ar(t, l, e, a, u) {
      var n = H.p;
      H.p = n !== 0 && 8 > n ? n : 8;
      var c = A.T, i = {};
      A.T = i, mi(t, false, l, e);
      try {
        var r = u(), S = A.S;
        if (S !== null && S(i, r), r !== null && typeof r == "object" && typeof r.then == "function") {
          var T = Ey(r, a);
          au(t, l, T, yl(t));
        } else au(t, l, a, yl(t));
      } catch (N) {
        au(t, l, {
          then: function() {
          },
          status: "rejected",
          reason: N
        }, yl());
      } finally {
        H.p = n, c !== null && i.types !== null && (c.types = i.types), A.T = c;
      }
    }
    function Oy() {
    }
    function di(t, l, e, a) {
      if (t.tag !== 5) throw Error(s(476));
      var u = _r(t).queue;
      Ar(t, u, l, J, e === null ? Oy : function() {
        return Nr(t), e(a);
      });
    }
    function _r(t) {
      var l = t.memoizedState;
      if (l !== null) return l;
      l = {
        memoizedState: J,
        baseState: J,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zl,
          lastRenderedState: J
        },
        next: null
      };
      var e = {};
      return l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zl,
          lastRenderedState: e
        },
        next: null
      }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
    }
    function Nr(t) {
      var l = _r(t);
      l.next === null && (l = t.alternate.memoizedState), au(t, l.next.queue, {}, yl());
    }
    function yi() {
      return Lt(pu);
    }
    function Or() {
      return Ot().memoizedState;
    }
    function Mr() {
      return Ot().memoizedState;
    }
    function My(t) {
      for (var l = t.return; l !== null; ) {
        switch (l.tag) {
          case 24:
          case 3:
            var e = yl();
            t = ce(e);
            var a = ie(l, t, e);
            a !== null && (al(a, l, e), Ia(a, l, e)), l = {
              cache: Zc()
            }, t.payload = l;
            return;
        }
        l = l.return;
      }
    }
    function jy(t, l, e) {
      var a = yl();
      e = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, dn(t) ? Dr(l, e) : (e = Dc(t, l, e, a), e !== null && (al(e, t, a), Rr(e, l, a)));
    }
    function jr(t, l, e) {
      var a = yl();
      au(t, l, e, a);
    }
    function au(t, l, e, a) {
      var u = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (dn(t)) Dr(l, u);
      else {
        var n = t.alternate;
        if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null)) try {
          var c = l.lastRenderedState, i = n(c, e);
          if (u.hasEagerState = true, u.eagerState = i, il(i, c)) return Ku(t, l, u, 0), vt === null && Vu(), false;
        } catch {
        }
        if (e = Dc(t, l, u, a), e !== null) return al(e, t, a), Rr(e, l, a), true;
      }
      return false;
    }
    function mi(t, l, e, a) {
      if (a = {
        lane: 2,
        revertLane: Ji(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, dn(t)) {
        if (l) throw Error(s(479));
      } else l = Dc(t, e, a, 2), l !== null && al(l, t, 2);
    }
    function dn(t) {
      var l = t.alternate;
      return t === W || l !== null && l === W;
    }
    function Dr(t, l) {
      ha = un = true;
      var e = t.pending;
      e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
    }
    function Rr(t, l, e) {
      if ((e & 4194048) !== 0) {
        var a = l.lanes;
        a &= t.pendingLanes, e |= a, l.lanes = e, qf(t, e);
      }
    }
    var uu = {
      readContext: Lt,
      use: fn,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt
    };
    uu.useEffectEvent = zt;
    var Ur = {
      readContext: Lt,
      use: fn,
      useCallback: function(t, l) {
        return $t().memoizedState = [
          t,
          l === void 0 ? null : l
        ], t;
      },
      useContext: Lt,
      useEffect: gr,
      useImperativeHandle: function(t, l, e) {
        e = e != null ? e.concat([
          t
        ]) : null, rn(4194308, 4, pr.bind(null, l, t), e);
      },
      useLayoutEffect: function(t, l) {
        return rn(4194308, 4, t, l);
      },
      useInsertionEffect: function(t, l) {
        rn(4, 2, t, l);
      },
      useMemo: function(t, l) {
        var e = $t();
        l = l === void 0 ? null : l;
        var a = t();
        if (Qe) {
          Il(true);
          try {
            t();
          } finally {
            Il(false);
          }
        }
        return e.memoizedState = [
          a,
          l
        ], a;
      },
      useReducer: function(t, l, e) {
        var a = $t();
        if (e !== void 0) {
          var u = e(l);
          if (Qe) {
            Il(true);
            try {
              e(l);
            } finally {
              Il(false);
            }
          }
        } else u = l;
        return a.memoizedState = a.baseState = u, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u
        }, a.queue = t, t = t.dispatch = jy.bind(null, W, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var l = $t();
        return t = {
          current: t
        }, l.memoizedState = t;
      },
      useState: function(t) {
        t = ii(t);
        var l = t.queue, e = jr.bind(null, W, l);
        return l.dispatch = e, [
          t.memoizedState,
          e
        ];
      },
      useDebugValue: ri,
      useDeferredValue: function(t, l) {
        var e = $t();
        return oi(e, t, l);
      },
      useTransition: function() {
        var t = ii(false);
        return t = Ar.bind(null, W, t.queue, true, false), $t().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, l, e) {
        var a = W, u = $t();
        if (ut) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (e = l(), vt === null) throw Error(s(349));
          (et & 127) !== 0 || tr(a, l, e);
        }
        u.memoizedState = e;
        var n = {
          value: e,
          getSnapshot: l
        };
        return u.queue = n, gr(er.bind(null, a, n, t), [
          t
        ]), a.flags |= 2048, va(9, {
          destroy: void 0
        }, lr.bind(null, a, n, e, l), null), e;
      },
      useId: function() {
        var t = $t(), l = vt.identifierPrefix;
        if (ut) {
          var e = Dl, a = jl;
          e = (a & ~(1 << 32 - cl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = nn++, 0 < e && (l += "H" + e.toString(32)), l += "_";
        } else e = zy++, l = "_" + l + "r_" + e.toString(32) + "_";
        return t.memoizedState = l;
      },
      useHostTransitionStatus: yi,
      useFormState: or,
      useActionState: or,
      useOptimistic: function(t) {
        var l = $t();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return l.queue = e, l = mi.bind(null, W, true, e), e.dispatch = l, [
          t,
          l
        ];
      },
      useMemoCache: ui,
      useCacheRefresh: function() {
        return $t().memoizedState = My.bind(null, W);
      },
      useEffectEvent: function(t) {
        var l = $t(), e = {
          impl: t
        };
        return l.memoizedState = e, function() {
          if ((it & 2) !== 0) throw Error(s(440));
          return e.impl.apply(void 0, arguments);
        };
      }
    }, hi = {
      readContext: Lt,
      use: fn,
      useCallback: Er,
      useContext: Lt,
      useEffect: si,
      useImperativeHandle: xr,
      useInsertionEffect: br,
      useLayoutEffect: Sr,
      useMemo: zr,
      useReducer: sn,
      useRef: hr,
      useState: function() {
        return sn(Zl);
      },
      useDebugValue: ri,
      useDeferredValue: function(t, l) {
        var e = Ot();
        return Tr(e, yt.memoizedState, t, l);
      },
      useTransition: function() {
        var t = sn(Zl)[0], l = Ot().memoizedState;
        return [
          typeof t == "boolean" ? t : eu(t),
          l
        ];
      },
      useSyncExternalStore: Ps,
      useId: Or,
      useHostTransitionStatus: yi,
      useFormState: dr,
      useActionState: dr,
      useOptimistic: function(t, l) {
        var e = Ot();
        return nr(e, yt, t, l);
      },
      useMemoCache: ui,
      useCacheRefresh: Mr
    };
    hi.useEffectEvent = vr;
    var Cr = {
      readContext: Lt,
      use: fn,
      useCallback: Er,
      useContext: Lt,
      useEffect: si,
      useImperativeHandle: xr,
      useInsertionEffect: br,
      useLayoutEffect: Sr,
      useMemo: zr,
      useReducer: ci,
      useRef: hr,
      useState: function() {
        return ci(Zl);
      },
      useDebugValue: ri,
      useDeferredValue: function(t, l) {
        var e = Ot();
        return yt === null ? oi(e, t, l) : Tr(e, yt.memoizedState, t, l);
      },
      useTransition: function() {
        var t = ci(Zl)[0], l = Ot().memoizedState;
        return [
          typeof t == "boolean" ? t : eu(t),
          l
        ];
      },
      useSyncExternalStore: Ps,
      useId: Or,
      useHostTransitionStatus: yi,
      useFormState: mr,
      useActionState: mr,
      useOptimistic: function(t, l) {
        var e = Ot();
        return yt !== null ? nr(e, yt, t, l) : (e.baseState = t, [
          t,
          e.queue.dispatch
        ]);
      },
      useMemoCache: ui,
      useCacheRefresh: Mr
    };
    Cr.useEffectEvent = vr;
    function gi(t, l, e, a) {
      l = t.memoizedState, e = e(a, l), e = e == null ? l : O({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
    }
    var vi = {
      enqueueSetState: function(t, l, e) {
        t = t._reactInternals;
        var a = yl(), u = ce(a);
        u.payload = l, e != null && (u.callback = e), l = ie(t, u, a), l !== null && (al(l, t, a), Ia(l, t, a));
      },
      enqueueReplaceState: function(t, l, e) {
        t = t._reactInternals;
        var a = yl(), u = ce(a);
        u.tag = 1, u.payload = l, e != null && (u.callback = e), l = ie(t, u, a), l !== null && (al(l, t, a), Ia(l, t, a));
      },
      enqueueForceUpdate: function(t, l) {
        t = t._reactInternals;
        var e = yl(), a = ce(e);
        a.tag = 2, l != null && (a.callback = l), l = ie(t, a, e), l !== null && (al(l, t, e), Ia(l, t, e));
      }
    };
    function Hr(t, l, e, a, u, n, c) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, c) : l.prototype && l.prototype.isPureReactComponent ? !Va(e, a) || !Va(u, n) : true;
    }
    function Br(t, l, e, a) {
      t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && vi.enqueueReplaceState(l, l.state, null);
    }
    function Xe(t, l) {
      var e = l;
      if ("ref" in l) {
        e = {};
        for (var a in l) a !== "ref" && (e[a] = l[a]);
      }
      if (t = t.defaultProps) {
        e === l && (e = O({}, e));
        for (var u in t) e[u] === void 0 && (e[u] = t[u]);
      }
      return e;
    }
    function qr(t) {
      Lu(t);
    }
    function Yr(t) {
      console.error(t);
    }
    function Gr(t) {
      Lu(t);
    }
    function yn(t, l) {
      try {
        var e = t.onUncaughtError;
        e(l.value, {
          componentStack: l.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Qr(t, l, e) {
      try {
        var a = t.onCaughtError;
        a(e.value, {
          componentStack: e.stack,
          errorBoundary: l.tag === 1 ? l.stateNode : null
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function bi(t, l, e) {
      return e = ce(e), e.tag = 3, e.payload = {
        element: null
      }, e.callback = function() {
        yn(t, l);
      }, e;
    }
    function Xr(t) {
      return t = ce(t), t.tag = 3, t;
    }
    function Zr(t, l, e, a) {
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var n = a.value;
        t.payload = function() {
          return u(n);
        }, t.callback = function() {
          Qr(l, e, a);
        };
      }
      var c = e.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
        Qr(l, e, a), typeof u != "function" && (ye === null ? ye = /* @__PURE__ */ new Set([
          this
        ]) : ye.add(this));
        var i = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: i !== null ? i : ""
        });
      });
    }
    function Dy(t, l, e, a, u) {
      if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (l = e.alternate, l !== null && sa(l, e, u, true), e = sl.current, e !== null) {
          switch (e.tag) {
            case 31:
            case 13:
              return zl === null ? An() : e.alternate === null && Tt === 0 && (Tt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Pu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a), Li(t, a, u)), false;
            case 22:
              return e.flags |= 65536, a === Pu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a)), Li(t, a, u)), false;
          }
          throw Error(s(435, e.tag));
        }
        return Li(t, a, u), An(), false;
      }
      if (ut) return l = sl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== qc && (t = Error(s(422), {
        cause: a
      }), wa(Sl(t, e)))) : (a !== qc && (l = Error(s(423), {
        cause: a
      }), wa(Sl(l, e))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Sl(a, e), u = bi(t.stateNode, a, u), kc(t, u), Tt !== 4 && (Tt = 2)), false;
      var n = Error(s(520), {
        cause: a
      });
      if (n = Sl(n, e), du === null ? du = [
        n
      ] : du.push(n), Tt !== 4 && (Tt = 2), l === null) return true;
      a = Sl(a, e), e = l;
      do {
        switch (e.tag) {
          case 3:
            return e.flags |= 65536, t = u & -u, e.lanes |= t, t = bi(e.stateNode, a, t), kc(e, t), false;
          case 1:
            if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ye === null || !ye.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Xr(u), Zr(u, t, e, a), kc(e, u), false;
        }
        e = e.return;
      } while (e !== null);
      return false;
    }
    var Si = Error(s(461)), Rt = false;
    function Vt(t, l, e, a) {
      l.child = t === null ? Js(l, null, e, a) : Ge(l, t.child, e, a);
    }
    function Lr(t, l, e, a, u) {
      e = e.render;
      var n = l.ref;
      if ("ref" in a) {
        var c = {};
        for (var i in a) i !== "ref" && (c[i] = a[i]);
      } else c = a;
      return He(l), a = ti(t, l, e, c, n, u), i = li(), t !== null && !Rt ? (ei(t, l, u), Ll(t, l, u)) : (ut && i && Hc(l), l.flags |= 1, Vt(t, l, a, u), l.child);
    }
    function Vr(t, l, e, a, u) {
      if (t === null) {
        var n = e.type;
        return typeof n == "function" && !Rc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Kr(t, l, n, a, u)) : (t = wu(e.type, null, a, l, l.mode, u), t.ref = l.ref, t.return = l, l.child = t);
      }
      if (n = t.child, !Ni(t, u)) {
        var c = n.memoizedProps;
        if (e = e.compare, e = e !== null ? e : Va, e(c, a) && t.ref === l.ref) return Ll(t, l, u);
      }
      return l.flags |= 1, t = ql(n, a), t.ref = l.ref, t.return = l, l.child = t;
    }
    function Kr(t, l, e, a, u) {
      if (t !== null) {
        var n = t.memoizedProps;
        if (Va(n, a) && t.ref === l.ref) if (Rt = false, l.pendingProps = a = n, Ni(t, u)) (t.flags & 131072) !== 0 && (Rt = true);
        else return l.lanes = t.lanes, Ll(t, l, u);
      }
      return pi(t, l, e, a, u);
    }
    function Jr(t, l, e, a) {
      var u = a.children, n = t !== null ? t.memoizedState : null;
      if (t === null && l.stateNode === null && (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((l.flags & 128) !== 0) {
          if (n = n !== null ? n.baseLanes | e : e, t !== null) {
            for (a = l.child = t.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
            a = u & ~n;
          } else a = 0, l.child = null;
          return wr(t, l, n, e, a);
        }
        if ((e & 536870912) !== 0) l.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && Fu(l, n !== null ? n.cachePool : null), n !== null ? $s(l, n) : Wc(), Ws(l);
        else return a = l.lanes = 536870912, wr(t, l, n !== null ? n.baseLanes | e : e, e, a);
      } else n !== null ? (Fu(l, n.cachePool), $s(l, n), se(), l.memoizedState = null) : (t !== null && Fu(l, null), Wc(), se());
      return Vt(t, l, u, e), l.child;
    }
    function nu(t, l) {
      return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), l.sibling;
    }
    function wr(t, l, e, a, u) {
      var n = Vc();
      return n = n === null ? null : {
        parent: jt._currentValue,
        pool: n
      }, l.memoizedState = {
        baseLanes: e,
        cachePool: n
      }, t !== null && Fu(l, null), Wc(), Ws(l), t !== null && sa(t, l, a, true), l.childLanes = u, null;
    }
    function mn(t, l) {
      return l = gn({
        mode: l.mode,
        children: l.children
      }, t.mode), l.ref = t.ref, t.child = l, l.return = t, l;
    }
    function kr(t, l, e) {
      return Ge(l, t.child, null, e), t = mn(l, l.pendingProps), t.flags |= 2, rl(l), l.memoizedState = null, t;
    }
    function Ry(t, l, e) {
      var a = l.pendingProps, u = (l.flags & 128) !== 0;
      if (l.flags &= -129, t === null) {
        if (ut) {
          if (a.mode === "hidden") return t = mn(l, a), l.lanes = 536870912, nu(null, t);
          if (Ic(l), (t = St) ? (t = i0(t, El), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
            dehydrated: t,
            treeContext: le !== null ? {
              id: jl,
              overflow: Dl
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Ds(t), e.return = l, l.child = e, Zt = l, St = null)) : t = null, t === null) throw ae(l);
          return l.lanes = 536870912, null;
        }
        return mn(l, a);
      }
      var n = t.memoizedState;
      if (n !== null) {
        var c = n.dehydrated;
        if (Ic(l), u) if (l.flags & 256) l.flags &= -257, l = kr(t, l, e);
        else if (l.memoizedState !== null) l.child = t.child, l.flags |= 128, l = null;
        else throw Error(s(558));
        else if (Rt || sa(t, l, e, false), u = (e & t.childLanes) !== 0, Rt || u) {
          if (a = vt, a !== null && (c = Yf(a, e), c !== 0 && c !== n.retryLane)) throw n.retryLane = c, De(t, c), al(a, t, c), Si;
          An(), l = kr(t, l, e);
        } else t = n.treeContext, St = Tl(c.nextSibling), Zt = l, ut = true, ee = null, El = false, t !== null && Cs(l, t), l = mn(l, a), l.flags |= 4096;
        return l;
      }
      return t = ql(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = l.ref, l.child = t, t.return = l, t;
    }
    function hn(t, l) {
      var e = l.ref;
      if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(s(284));
        (t === null || t.ref !== e) && (l.flags |= 4194816);
      }
    }
    function pi(t, l, e, a, u) {
      return He(l), e = ti(t, l, e, a, void 0, u), a = li(), t !== null && !Rt ? (ei(t, l, u), Ll(t, l, u)) : (ut && a && Hc(l), l.flags |= 1, Vt(t, l, e, u), l.child);
    }
    function $r(t, l, e, a, u, n) {
      return He(l), l.updateQueue = null, e = Is(l, a, e, u), Fs(t), a = li(), t !== null && !Rt ? (ei(t, l, n), Ll(t, l, n)) : (ut && a && Hc(l), l.flags |= 1, Vt(t, l, e, n), l.child);
    }
    function Wr(t, l, e, a, u) {
      if (He(l), l.stateNode === null) {
        var n = na, c = e.contextType;
        typeof c == "object" && c !== null && (n = Lt(c)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vi, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Jc(l), c = e.contextType, n.context = typeof c == "object" && c !== null ? Lt(c) : na, n.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (gi(l, e, c, a), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && vi.enqueueReplaceState(n, n.state, null), tu(l, a, n, u), Pa(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = true;
      } else if (t === null) {
        n = l.stateNode;
        var i = l.memoizedProps, r = Xe(e, i);
        n.props = r;
        var S = n.context, T = e.contextType;
        c = na, typeof T == "object" && T !== null && (c = Lt(T));
        var N = e.getDerivedStateFromProps;
        T = typeof N == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = l.pendingProps !== i, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || S !== c) && Br(l, n, a, c), ne = false;
        var p = l.memoizedState;
        n.state = p, tu(l, a, n, u), Pa(), S = l.memoizedState, i || p !== S || ne ? (typeof N == "function" && (gi(l, e, N, a), S = l.memoizedState), (r = ne || Hr(l, e, r, a, p, S, c)) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = S), n.props = a, n.state = S, n.context = c, a = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = false);
      } else {
        n = l.stateNode, wc(t, l), c = l.memoizedProps, T = Xe(e, c), n.props = T, N = l.pendingProps, p = n.context, S = e.contextType, r = na, typeof S == "object" && S !== null && (r = Lt(S)), i = e.getDerivedStateFromProps, (S = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== N || p !== r) && Br(l, n, a, r), ne = false, p = l.memoizedState, n.state = p, tu(l, a, n, u), Pa();
        var E = l.memoizedState;
        c !== N || p !== E || ne || t !== null && t.dependencies !== null && $u(t.dependencies) ? (typeof i == "function" && (gi(l, e, i, a), E = l.memoizedState), (T = ne || Hr(l, e, T, a, p, E, r) || t !== null && t.dependencies !== null && $u(t.dependencies)) ? (S || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, E, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, E, r)), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = E), n.props = a, n.state = E, n.context = r, a = T) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 1024), a = false);
      }
      return n = a, hn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = Ge(l, t.child, null, u), l.child = Ge(l, null, e, u)) : Vt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Ll(t, l, u), t;
    }
    function Fr(t, l, e, a) {
      return Ue(), l.flags |= 256, Vt(t, l, e, a), l.child;
    }
    var xi = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Ei(t) {
      return {
        baseLanes: t,
        cachePool: Qs()
      };
    }
    function zi(t, l, e) {
      return t = t !== null ? t.childLanes & ~e : 0, l && (t |= dl), t;
    }
    function Ir(t, l, e) {
      var a = l.pendingProps, u = false, n = (l.flags & 128) !== 0, c;
      if ((c = n) || (c = t !== null && t.memoizedState === null ? false : (Nt.current & 2) !== 0), c && (u = true, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
        if (ut) {
          if (u ? fe(l) : se(), (t = St) ? (t = i0(t, El), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
            dehydrated: t,
            treeContext: le !== null ? {
              id: jl,
              overflow: Dl
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Ds(t), e.return = l, l.child = e, Zt = l, St = null)) : t = null, t === null) throw ae(l);
          return nf(t) ? l.lanes = 32 : l.lanes = 536870912, null;
        }
        var i = a.children;
        return a = a.fallback, u ? (se(), u = l.mode, i = gn({
          mode: "hidden",
          children: i
        }, u), a = Re(a, u, e, null), i.return = l, a.return = l, i.sibling = a, l.child = i, a = l.child, a.memoizedState = Ei(e), a.childLanes = zi(t, c, e), l.memoizedState = xi, nu(null, a)) : (fe(l), Ti(l, i));
      }
      var r = t.memoizedState;
      if (r !== null && (i = r.dehydrated, i !== null)) {
        if (n) l.flags & 256 ? (fe(l), l.flags &= -257, l = Ai(t, l, e)) : l.memoizedState !== null ? (se(), l.child = t.child, l.flags |= 128, l = null) : (se(), i = a.fallback, u = l.mode, a = gn({
          mode: "visible",
          children: a.children
        }, u), i = Re(i, u, e, null), i.flags |= 2, a.return = l, i.return = l, a.sibling = i, l.child = a, Ge(l, t.child, null, e), a = l.child, a.memoizedState = Ei(e), a.childLanes = zi(t, c, e), l.memoizedState = xi, l = nu(null, a));
        else if (fe(l), nf(i)) {
          if (c = i.nextSibling && i.nextSibling.dataset, c) var S = c.dgst;
          c = S, a = Error(s(419)), a.stack = "", a.digest = c, wa({
            value: a,
            source: null,
            stack: null
          }), l = Ai(t, l, e);
        } else if (Rt || sa(t, l, e, false), c = (e & t.childLanes) !== 0, Rt || c) {
          if (c = vt, c !== null && (a = Yf(c, e), a !== 0 && a !== r.retryLane)) throw r.retryLane = a, De(t, a), al(c, t, a), Si;
          uf(i) || An(), l = Ai(t, l, e);
        } else uf(i) ? (l.flags |= 192, l.child = t.child, l = null) : (t = r.treeContext, St = Tl(i.nextSibling), Zt = l, ut = true, ee = null, El = false, t !== null && Cs(l, t), l = Ti(l, a.children), l.flags |= 4096);
        return l;
      }
      return u ? (se(), i = a.fallback, u = l.mode, r = t.child, S = r.sibling, a = ql(r, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = r.subtreeFlags & 65011712, S !== null ? i = ql(S, i) : (i = Re(i, u, e, null), i.flags |= 2), i.return = l, a.return = l, a.sibling = i, l.child = a, nu(null, a), a = l.child, i = t.child.memoizedState, i === null ? i = Ei(e) : (u = i.cachePool, u !== null ? (r = jt._currentValue, u = u.parent !== r ? {
        parent: r,
        pool: r
      } : u) : u = Qs(), i = {
        baseLanes: i.baseLanes | e,
        cachePool: u
      }), a.memoizedState = i, a.childLanes = zi(t, c, e), l.memoizedState = xi, nu(t.child, a)) : (fe(l), e = t.child, t = e.sibling, e = ql(e, {
        mode: "visible",
        children: a.children
      }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [
        t
      ], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
    }
    function Ti(t, l) {
      return l = gn({
        mode: "visible",
        children: l
      }, t.mode), l.return = t, t.child = l;
    }
    function gn(t, l) {
      return t = fl(22, t, null, l), t.lanes = 0, t;
    }
    function Ai(t, l, e) {
      return Ge(l, t.child, null, e), t = Ti(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
    }
    function Pr(t, l, e) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l), Qc(t.return, l, e);
    }
    function _i(t, l, e, a, u, n) {
      var c = t.memoizedState;
      c === null ? t.memoizedState = {
        isBackwards: l,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: e,
        tailMode: u,
        treeForkCount: n
      } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
    }
    function to(t, l, e) {
      var a = l.pendingProps, u = a.revealOrder, n = a.tail;
      a = a.children;
      var c = Nt.current, i = (c & 2) !== 0;
      if (i ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, B(Nt, c), Vt(t, l, a, e), a = ut ? Ja : 0, !i && t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Pr(t, e, l);
        else if (t.tag === 19) Pr(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (u) {
        case "forwards":
          for (e = l.child, u = null; e !== null; ) t = e.alternate, t !== null && an(t) === null && (u = e), e = e.sibling;
          e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), _i(l, false, u, e, n, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (e = null, u = l.child, l.child = null; u !== null; ) {
            if (t = u.alternate, t !== null && an(t) === null) {
              l.child = u;
              break;
            }
            t = u.sibling, u.sibling = e, e = u, u = t;
          }
          _i(l, true, e, null, n, a);
          break;
        case "together":
          _i(l, false, null, null, void 0, a);
          break;
        default:
          l.memoizedState = null;
      }
      return l.child;
    }
    function Ll(t, l, e) {
      if (t !== null && (l.dependencies = t.dependencies), de |= l.lanes, (e & l.childLanes) === 0) if (t !== null) {
        if (sa(t, l, e, false), (e & l.childLanes) === 0) return null;
      } else return null;
      if (t !== null && l.child !== t.child) throw Error(s(153));
      if (l.child !== null) {
        for (t = l.child, e = ql(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; ) t = t.sibling, e = e.sibling = ql(t, t.pendingProps), e.return = l;
        e.sibling = null;
      }
      return l.child;
    }
    function Ni(t, l) {
      return (t.lanes & l) !== 0 ? true : (t = t.dependencies, !!(t !== null && $u(t)));
    }
    function Uy(t, l, e) {
      switch (l.tag) {
        case 3:
          kt(l, l.stateNode.containerInfo), ue(l, jt, t.memoizedState.cache), Ue();
          break;
        case 27:
        case 5:
          Da(l);
          break;
        case 4:
          kt(l, l.stateNode.containerInfo);
          break;
        case 10:
          ue(l, l.type, l.memoizedProps.value);
          break;
        case 31:
          if (l.memoizedState !== null) return l.flags |= 128, Ic(l), null;
          break;
        case 13:
          var a = l.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (fe(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Ir(t, l, e) : (fe(l), t = Ll(t, l, e), t !== null ? t.sibling : null);
          fe(l);
          break;
        case 19:
          var u = (t.flags & 128) !== 0;
          if (a = (e & l.childLanes) !== 0, a || (sa(t, l, e, false), a = (e & l.childLanes) !== 0), u) {
            if (a) return to(t, l, e);
            l.flags |= 128;
          }
          if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), B(Nt, Nt.current), a) break;
          return null;
        case 22:
          return l.lanes = 0, Jr(t, l, e, l.pendingProps);
        case 24:
          ue(l, jt, t.memoizedState.cache);
      }
      return Ll(t, l, e);
    }
    function lo(t, l, e) {
      if (t !== null) if (t.memoizedProps !== l.pendingProps) Rt = true;
      else {
        if (!Ni(t, e) && (l.flags & 128) === 0) return Rt = false, Uy(t, l, e);
        Rt = (t.flags & 131072) !== 0;
      }
      else Rt = false, ut && (l.flags & 1048576) !== 0 && Us(l, Ja, l.index);
      switch (l.lanes = 0, l.tag) {
        case 16:
          t: {
            var a = l.pendingProps;
            if (t = qe(l.elementType), l.type = t, typeof t == "function") Rc(t) ? (a = Xe(t, a), l.tag = 1, l = Wr(null, l, t, a, e)) : (l.tag = 0, l = pi(null, l, t, a, e));
            else {
              if (t != null) {
                var u = t.$$typeof;
                if (u === At) {
                  l.tag = 11, l = Lr(null, l, t, a, e);
                  break t;
                } else if (u === X) {
                  l.tag = 14, l = Vr(null, l, t, a, e);
                  break t;
                }
              }
              throw l = hl(t) || t, Error(s(306, l, ""));
            }
          }
          return l;
        case 0:
          return pi(t, l, l.type, l.pendingProps, e);
        case 1:
          return a = l.type, u = Xe(a, l.pendingProps), Wr(t, l, a, u, e);
        case 3:
          t: {
            if (kt(l, l.stateNode.containerInfo), t === null) throw Error(s(387));
            a = l.pendingProps;
            var n = l.memoizedState;
            u = n.element, wc(t, l), tu(l, a, null, e);
            var c = l.memoizedState;
            if (a = c.cache, ue(l, jt, a), a !== n.cache && Xc(l, [
              jt
            ], e, true), Pa(), a = c.element, n.isDehydrated) if (n = {
              element: a,
              isDehydrated: false,
              cache: c.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = Fr(t, l, a, e);
              break t;
            } else if (a !== u) {
              u = Sl(Error(s(424)), l), wa(u), l = Fr(t, l, a, e);
              break t;
            } else for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, St = Tl(t.firstChild), Zt = l, ut = true, ee = null, El = true, e = Js(l, null, a, e), l.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (Ue(), a === u) {
                l = Ll(t, l, e);
                break t;
              }
              Vt(t, l, a, e);
            }
            l = l.child;
          }
          return l;
        case 26:
          return hn(t, l), t === null ? (e = y0(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : ut || (e = l.type, t = l.pendingProps, a = Rn(P.current).createElement(e), a[Xt] = l, a[Ft] = t, Kt(a, e, t), Yt(a), l.stateNode = a) : l.memoizedState = y0(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
        case 27:
          return Da(l), t === null && ut && (a = l.stateNode = r0(l.type, l.pendingProps, P.current), Zt = l, El = true, u = St, ve(l.type) ? (cf = u, St = Tl(a.firstChild)) : St = u), Vt(t, l, l.pendingProps.children, e), hn(t, l), t === null && (l.flags |= 4194304), l.child;
        case 5:
          return t === null && ut && ((u = a = St) && (a = sm(a, l.type, l.pendingProps, El), a !== null ? (l.stateNode = a, Zt = l, St = Tl(a.firstChild), El = false, u = true) : u = false), u || ae(l)), Da(l), u = l.type, n = l.pendingProps, c = t !== null ? t.memoizedProps : null, a = n.children, lf(u, n) ? a = null : c !== null && lf(u, c) && (l.flags |= 32), l.memoizedState !== null && (u = ti(t, l, Ty, null, null, e), pu._currentValue = u), hn(t, l), Vt(t, l, a, e), l.child;
        case 6:
          return t === null && ut && ((t = e = St) && (e = rm(e, l.pendingProps, El), e !== null ? (l.stateNode = e, Zt = l, St = null, t = true) : t = false), t || ae(l)), null;
        case 13:
          return Ir(t, l, e);
        case 4:
          return kt(l, l.stateNode.containerInfo), a = l.pendingProps, t === null ? l.child = Ge(l, null, a, e) : Vt(t, l, a, e), l.child;
        case 11:
          return Lr(t, l, l.type, l.pendingProps, e);
        case 7:
          return Vt(t, l, l.pendingProps, e), l.child;
        case 8:
          return Vt(t, l, l.pendingProps.children, e), l.child;
        case 12:
          return Vt(t, l, l.pendingProps.children, e), l.child;
        case 10:
          return a = l.pendingProps, ue(l, l.type, a.value), Vt(t, l, a.children, e), l.child;
        case 9:
          return u = l.type._context, a = l.pendingProps.children, He(l), u = Lt(u), a = a(u), l.flags |= 1, Vt(t, l, a, e), l.child;
        case 14:
          return Vr(t, l, l.type, l.pendingProps, e);
        case 15:
          return Kr(t, l, l.type, l.pendingProps, e);
        case 19:
          return to(t, l, e);
        case 31:
          return Ry(t, l, e);
        case 22:
          return Jr(t, l, e, l.pendingProps);
        case 24:
          return He(l), a = Lt(jt), t === null ? (u = Vc(), u === null && (u = vt, n = Zc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
            parent: a,
            cache: u
          }, Jc(l), ue(l, jt, u)) : ((t.lanes & e) !== 0 && (wc(t, l), tu(l, null, null, e), Pa()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = {
            parent: a,
            cache: a
          }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ue(l, jt, a)) : (a = n.cache, ue(l, jt, a), a !== u.cache && Xc(l, [
            jt
          ], e, true))), Vt(t, l, l.pendingProps.children, e), l.child;
        case 29:
          throw l.pendingProps;
      }
      throw Error(s(156, l.tag));
    }
    function Vl(t) {
      t.flags |= 4;
    }
    function Oi(t, l, e, a, u) {
      if ((l = (t.mode & 32) !== 0) && (l = false), l) {
        if (t.flags |= 16777216, (u & 335544128) === u) if (t.stateNode.complete) t.flags |= 8192;
        else if (Mo()) t.flags |= 8192;
        else throw Ye = Pu, Kc;
      } else t.flags &= -16777217;
    }
    function eo(t, l) {
      if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !b0(l)) if (Mo()) t.flags |= 8192;
      else throw Ye = Pu, Kc;
    }
    function vn(t, l) {
      l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Hf() : 536870912, t.lanes |= l, xa |= l);
    }
    function cu(t, l) {
      if (!ut) switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; ) l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function pt(t) {
      var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
      if (l) for (var u = t.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
      else for (u = t.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
      return t.subtreeFlags |= a, t.childLanes = e, l;
    }
    function Cy(t, l, e) {
      var a = l.pendingProps;
      switch (Bc(l), l.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return pt(l), null;
        case 1:
          return pt(l), null;
        case 3:
          return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Ql(jt), _t(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (fa(l) ? Vl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Yc())), pt(l), null;
        case 26:
          var u = l.type, n = l.memoizedState;
          return t === null ? (Vl(l), n !== null ? (pt(l), eo(l, n)) : (pt(l), Oi(l, u, null, a, e))) : n ? n !== t.memoizedState ? (Vl(l), pt(l), eo(l, n)) : (pt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && Vl(l), pt(l), Oi(l, u, t, a, e)), null;
        case 27:
          if (Nu(l), e = P.current, u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Vl(l);
          else {
            if (!a) {
              if (l.stateNode === null) throw Error(s(166));
              return pt(l), null;
            }
            t = G.current, fa(l) ? Hs(l) : (t = r0(u, a, e), l.stateNode = t, Vl(l));
          }
          return pt(l), null;
        case 5:
          if (Nu(l), u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Vl(l);
          else {
            if (!a) {
              if (l.stateNode === null) throw Error(s(166));
              return pt(l), null;
            }
            if (n = G.current, fa(l)) Hs(l);
            else {
              var c = Rn(P.current);
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
              n[Xt] = l, n[Ft] = a;
              t: for (c = l.child; c !== null; ) {
                if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
                else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                  c.child.return = c, c = c.child;
                  continue;
                }
                if (c === l) break t;
                for (; c.sibling === null; ) {
                  if (c.return === null || c.return === l) break t;
                  c = c.return;
                }
                c.sibling.return = c.return, c = c.sibling;
              }
              l.stateNode = n;
              t: switch (Kt(n, u, a), u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break t;
                case "img":
                  a = true;
                  break t;
                default:
                  a = false;
              }
              a && Vl(l);
            }
          }
          return pt(l), Oi(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e), null;
        case 6:
          if (t && l.stateNode != null) t.memoizedProps !== a && Vl(l);
          else {
            if (typeof a != "string" && l.stateNode === null) throw Error(s(166));
            if (t = P.current, fa(l)) {
              if (t = l.stateNode, e = l.memoizedProps, a = null, u = Zt, u !== null) switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
              t[Xt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === true || Po(t.nodeValue, e)), t || ae(l, true);
            } else t = Rn(t).createTextNode(a), t[Xt] = l, l.stateNode = t;
          }
          return pt(l), null;
        case 31:
          if (e = l.memoizedState, t === null || t.memoizedState !== null) {
            if (a = fa(l), e !== null) {
              if (t === null) {
                if (!a) throw Error(s(318));
                if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
                t[Xt] = l;
              } else Ue(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
              pt(l), t = false;
            } else e = Yc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = true;
            if (!t) return l.flags & 256 ? (rl(l), l) : (rl(l), null);
            if ((l.flags & 128) !== 0) throw Error(s(558));
          }
          return pt(l), null;
        case 13:
          if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (u = fa(l), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!u) throw Error(s(318));
                if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
                u[Xt] = l;
              } else Ue(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
              pt(l), u = false;
            } else u = Yc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = true;
            if (!u) return l.flags & 256 ? (rl(l), l) : (rl(l), null);
          }
          return rl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), vn(l, l.updateQueue), pt(l), null);
        case 4:
          return _t(), t === null && Wi(l.stateNode.containerInfo), pt(l), null;
        case 10:
          return Ql(l.type), pt(l), null;
        case 19:
          if (M(Nt), a = l.memoizedState, a === null) return pt(l), null;
          if (u = (l.flags & 128) !== 0, n = a.rendering, n === null) if (u) cu(a, false);
          else {
            if (Tt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = l.child; t !== null; ) {
              if (n = an(t), n !== null) {
                for (l.flags |= 128, cu(a, false), t = n.updateQueue, l.updateQueue = t, vn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; ) js(e, t), e = e.sibling;
                return B(Nt, Nt.current & 1 | 2), ut && Yl(l, a.treeForkCount), l.child;
              }
              t = t.sibling;
            }
            a.tail !== null && ul() > En && (l.flags |= 128, u = true, cu(a, false), l.lanes = 4194304);
          }
          else {
            if (!u) if (t = an(n), t !== null) {
              if (l.flags |= 128, u = true, t = t.updateQueue, l.updateQueue = t, vn(l, t), cu(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ut) return pt(l), null;
            } else 2 * ul() - a.renderingStartTime > En && e !== 536870912 && (l.flags |= 128, u = true, cu(a, false), l.lanes = 4194304);
            a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ul(), t.sibling = null, e = Nt.current, B(Nt, u ? e & 1 | 2 : e & 1), ut && Yl(l, a.treeForkCount), t) : (pt(l), null);
        case 22:
        case 23:
          return rl(l), Fc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (pt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : pt(l), e = l.updateQueue, e !== null && vn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && M(Be), null;
        case 24:
          return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Ql(jt), pt(l), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(s(156, l.tag));
    }
    function Hy(t, l) {
      switch (Bc(l), l.tag) {
        case 1:
          return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 3:
          return Ql(jt), _t(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
        case 26:
        case 27:
        case 5:
          return Nu(l), null;
        case 31:
          if (l.memoizedState !== null) {
            if (rl(l), l.alternate === null) throw Error(s(340));
            Ue();
          }
          return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 13:
          if (rl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
            if (l.alternate === null) throw Error(s(340));
            Ue();
          }
          return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 19:
          return M(Nt), null;
        case 4:
          return _t(), null;
        case 10:
          return Ql(l.type), null;
        case 22:
        case 23:
          return rl(l), Fc(), t !== null && M(Be), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 24:
          return Ql(jt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ao(t, l) {
      switch (Bc(l), l.tag) {
        case 3:
          Ql(jt), _t();
          break;
        case 26:
        case 27:
        case 5:
          Nu(l);
          break;
        case 4:
          _t();
          break;
        case 31:
          l.memoizedState !== null && rl(l);
          break;
        case 13:
          rl(l);
          break;
        case 19:
          M(Nt);
          break;
        case 10:
          Ql(l.type);
          break;
        case 22:
        case 23:
          rl(l), Fc(), t !== null && M(Be);
          break;
        case 24:
          Ql(jt);
      }
    }
    function iu(t, l) {
      try {
        var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
        if (a !== null) {
          var u = a.next;
          e = u;
          do {
            if ((e.tag & t) === t) {
              a = void 0;
              var n = e.create, c = e.inst;
              a = n(), c.destroy = a;
            }
            e = e.next;
          } while (e !== u);
        }
      } catch (i) {
        ot(l, l.return, i);
      }
    }
    function re(t, l, e) {
      try {
        var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
        if (u !== null) {
          var n = u.next;
          a = n;
          do {
            if ((a.tag & t) === t) {
              var c = a.inst, i = c.destroy;
              if (i !== void 0) {
                c.destroy = void 0, u = l;
                var r = e, S = i;
                try {
                  S();
                } catch (T) {
                  ot(u, r, T);
                }
              }
            }
            a = a.next;
          } while (a !== n);
        }
      } catch (T) {
        ot(l, l.return, T);
      }
    }
    function uo(t) {
      var l = t.updateQueue;
      if (l !== null) {
        var e = t.stateNode;
        try {
          ks(l, e);
        } catch (a) {
          ot(t, t.return, a);
        }
      }
    }
    function no(t, l, e) {
      e.props = Xe(t.type, t.memoizedProps), e.state = t.memoizedState;
      try {
        e.componentWillUnmount();
      } catch (a) {
        ot(t, l, a);
      }
    }
    function fu(t, l) {
      try {
        var e = t.ref;
        if (e !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
        }
      } catch (u) {
        ot(t, l, u);
      }
    }
    function Rl(t, l) {
      var e = t.ref, a = t.refCleanup;
      if (e !== null) if (typeof a == "function") try {
        a();
      } catch (u) {
        ot(t, l, u);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof e == "function") try {
        e(null);
      } catch (u) {
        ot(t, l, u);
      }
      else e.current = null;
    }
    function co(t) {
      var l = t.type, e = t.memoizedProps, a = t.stateNode;
      try {
        t: switch (l) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            e.autoFocus && a.focus();
            break t;
          case "img":
            e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
        }
      } catch (u) {
        ot(t, t.return, u);
      }
    }
    function Mi(t, l, e) {
      try {
        var a = t.stateNode;
        am(a, t.type, e, l), a[Ft] = l;
      } catch (u) {
        ot(t, t.return, u);
      }
    }
    function io(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ve(t.type) || t.tag === 4;
    }
    function ji(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || io(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && ve(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Di(t, l, e) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Hl));
      else if (a !== 4 && (a === 27 && ve(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null)) for (Di(t, l, e), t = t.sibling; t !== null; ) Di(t, l, e), t = t.sibling;
    }
    function bn(t, l, e) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
      else if (a !== 4 && (a === 27 && ve(t.type) && (e = t.stateNode), t = t.child, t !== null)) for (bn(t, l, e), t = t.sibling; t !== null; ) bn(t, l, e), t = t.sibling;
    }
    function fo(t) {
      var l = t.stateNode, e = t.memoizedProps;
      try {
        for (var a = t.type, u = l.attributes; u.length; ) l.removeAttributeNode(u[0]);
        Kt(l, a, e), l[Xt] = t, l[Ft] = e;
      } catch (n) {
        ot(t, t.return, n);
      }
    }
    var Kl = false, Ut = false, Ri = false, so = typeof WeakSet == "function" ? WeakSet : Set, Gt = null;
    function By(t, l) {
      if (t = t.containerInfo, Pi = Gn, t = xs(t), Ac(t)) {
        if ("selectionStart" in t) var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var c = 0, i = -1, r = -1, S = 0, T = 0, N = t, p = null;
            l: for (; ; ) {
              for (var E; N !== e || u !== 0 && N.nodeType !== 3 || (i = c + u), N !== n || a !== 0 && N.nodeType !== 3 || (r = c + a), N.nodeType === 3 && (c += N.nodeValue.length), (E = N.firstChild) !== null; ) p = N, N = E;
              for (; ; ) {
                if (N === t) break l;
                if (p === e && ++S === u && (i = c), p === n && ++T === a && (r = c), (E = N.nextSibling) !== null) break;
                N = p, p = N.parentNode;
              }
              N = E;
            }
            e = i === -1 || r === -1 ? null : {
              start: i,
              end: r
            };
          } else e = null;
        }
        e = e || {
          start: 0,
          end: 0
        };
      } else e = null;
      for (tf = {
        focusedElem: t,
        selectionRange: e
      }, Gn = false, Gt = l; Gt !== null; ) if (l = Gt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null) t.return = l, Gt = t;
      else for (; Gt !== null; ) {
        switch (l = Gt, n = l.alternate, t = l.flags, l.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null)) for (e = 0; e < t.length; e++) u = t[e], u.ref.impl = u.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && n !== null) {
              t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
              try {
                var q = Xe(e.type, u);
                t = a.getSnapshotBeforeUpdate(q, n), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (L) {
                ot(e, e.return, L);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) af(t);
              else if (e === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  af(t);
                  break;
                default:
                  t.textContent = "";
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
            if ((t & 1024) !== 0) throw Error(s(163));
        }
        if (t = l.sibling, t !== null) {
          t.return = l.return, Gt = t;
          break;
        }
        Gt = l.return;
      }
    }
    function ro(t, l, e) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          wl(t, e), a & 4 && iu(5, e);
          break;
        case 1:
          if (wl(t, e), a & 4) if (t = e.stateNode, l === null) try {
            t.componentDidMount();
          } catch (c) {
            ot(e, e.return, c);
          }
          else {
            var u = Xe(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ot(e, e.return, c);
            }
          }
          a & 64 && uo(e), a & 512 && fu(e, e.return);
          break;
        case 3:
          if (wl(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
            if (l = null, e.child !== null) switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
            try {
              ks(t, l);
            } catch (c) {
              ot(e, e.return, c);
            }
          }
          break;
        case 27:
          l === null && a & 4 && fo(e);
        case 26:
        case 5:
          wl(t, e), l === null && a & 4 && co(e), a & 512 && fu(e, e.return);
          break;
        case 12:
          wl(t, e);
          break;
        case 31:
          wl(t, e), a & 4 && mo(t, e);
          break;
        case 13:
          wl(t, e), a & 4 && ho(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Ky.bind(null, e), om(t, e))));
          break;
        case 22:
          if (a = e.memoizedState !== null || Kl, !a) {
            l = l !== null && l.memoizedState !== null || Ut, u = Kl;
            var n = Ut;
            Kl = a, (Ut = l) && !n ? kl(t, e, (e.subtreeFlags & 8772) !== 0) : wl(t, e), Kl = u, Ut = n;
          }
          break;
        case 30:
          break;
        default:
          wl(t, e);
      }
    }
    function oo(t) {
      var l = t.alternate;
      l !== null && (t.alternate = null, oo(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && fc(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var xt = null, Pt = false;
    function Jl(t, l, e) {
      for (e = e.child; e !== null; ) yo(t, l, e), e = e.sibling;
    }
    function yo(t, l, e) {
      if (nl && typeof nl.onCommitFiberUnmount == "function") try {
        nl.onCommitFiberUnmount(Ra, e);
      } catch {
      }
      switch (e.tag) {
        case 26:
          Ut || Rl(e, l), Jl(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Ut || Rl(e, l);
          var a = xt, u = Pt;
          ve(e.type) && (xt = e.stateNode, Pt = false), Jl(t, l, e), vu(e.stateNode), xt = a, Pt = u;
          break;
        case 5:
          Ut || Rl(e, l);
        case 6:
          if (a = xt, u = Pt, xt = null, Jl(t, l, e), xt = a, Pt = u, xt !== null) if (Pt) try {
            (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(e.stateNode);
          } catch (n) {
            ot(e, l, n);
          }
          else try {
            xt.removeChild(e.stateNode);
          } catch (n) {
            ot(e, l, n);
          }
          break;
        case 18:
          xt !== null && (Pt ? (t = xt, n0(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), Ma(t)) : n0(xt, e.stateNode));
          break;
        case 4:
          a = xt, u = Pt, xt = e.stateNode.containerInfo, Pt = true, Jl(t, l, e), xt = a, Pt = u;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          re(2, e, l), Ut || re(4, e, l), Jl(t, l, e);
          break;
        case 1:
          Ut || (Rl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && no(e, l, a)), Jl(t, l, e);
          break;
        case 21:
          Jl(t, l, e);
          break;
        case 22:
          Ut = (a = Ut) || e.memoizedState !== null, Jl(t, l, e), Ut = a;
          break;
        default:
          Jl(t, l, e);
      }
    }
    function mo(t, l) {
      if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Ma(t);
        } catch (e) {
          ot(l, l.return, e);
        }
      }
    }
    function ho(t, l) {
      if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Ma(t);
      } catch (e) {
        ot(l, l.return, e);
      }
    }
    function qy(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var l = t.stateNode;
          return l === null && (l = t.stateNode = new so()), l;
        case 22:
          return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new so()), l;
        default:
          throw Error(s(435, t.tag));
      }
    }
    function Sn(t, l) {
      var e = qy(t);
      l.forEach(function(a) {
        if (!e.has(a)) {
          e.add(a);
          var u = Jy.bind(null, t, a);
          a.then(u, u);
        }
      });
    }
    function tl(t, l) {
      var e = l.deletions;
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var u = e[a], n = t, c = l, i = c;
        t: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (ve(i.type)) {
                xt = i.stateNode, Pt = false;
                break t;
              }
              break;
            case 5:
              xt = i.stateNode, Pt = false;
              break t;
            case 3:
            case 4:
              xt = i.stateNode.containerInfo, Pt = true;
              break t;
          }
          i = i.return;
        }
        if (xt === null) throw Error(s(160));
        yo(n, c, u), xt = null, Pt = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
      if (l.subtreeFlags & 13886) for (l = l.child; l !== null; ) go(l, t), l = l.sibling;
    }
    var Ol = null;
    function go(t, l) {
      var e = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tl(l, t), ll(t), a & 4 && (re(3, t, t.return), iu(3, t), re(5, t, t.return));
          break;
        case 1:
          tl(l, t), ll(t), a & 512 && (Ut || e === null || Rl(e, e.return)), a & 64 && Kl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
          break;
        case 26:
          var u = Ol;
          if (tl(l, t), ll(t), a & 512 && (Ut || e === null || Rl(e, e.return)), a & 4) {
            var n = e !== null ? e.memoizedState : null;
            if (a = t.memoizedState, e === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                l: switch (a) {
                  case "title":
                    n = u.getElementsByTagName("title")[0], (!n || n[Ha] || n[Xt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Kt(n, a, e), n[Xt] = t, Yt(n), a = n;
                    break t;
                  case "link":
                    var c = g0("link", "href", u).get(a + (e.href || ""));
                    if (c) {
                      for (var i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                        c.splice(i, 1);
                        break l;
                      }
                    }
                    n = u.createElement(a), Kt(n, a, e), u.head.appendChild(n);
                    break;
                  case "meta":
                    if (c = g0("meta", "content", u).get(a + (e.content || ""))) {
                      for (i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                        c.splice(i, 1);
                        break l;
                      }
                    }
                    n = u.createElement(a), Kt(n, a, e), u.head.appendChild(n);
                    break;
                  default:
                    throw Error(s(468, a));
                }
                n[Xt] = t, Yt(n), a = n;
              }
              t.stateNode = a;
            } else v0(u, t.type, t.stateNode);
            else t.stateNode = h0(u, a, t.memoizedProps);
            else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? v0(u, t.type, t.stateNode) : h0(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Mi(t, t.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          tl(l, t), ll(t), a & 512 && (Ut || e === null || Rl(e, e.return)), e !== null && a & 4 && Mi(t, t.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if (tl(l, t), ll(t), a & 512 && (Ut || e === null || Rl(e, e.return)), t.flags & 32) {
            u = t.stateNode;
            try {
              Ie(u, "");
            } catch (q) {
              ot(t, t.return, q);
            }
          }
          a & 4 && t.stateNode != null && (u = t.memoizedProps, Mi(t, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Ri = true);
          break;
        case 6:
          if (tl(l, t), ll(t), a & 4) {
            if (t.stateNode === null) throw Error(s(162));
            a = t.memoizedProps, e = t.stateNode;
            try {
              e.nodeValue = a;
            } catch (q) {
              ot(t, t.return, q);
            }
          }
          break;
        case 3:
          if (Hn = null, u = Ol, Ol = Un(l.containerInfo), tl(l, t), Ol = u, ll(t), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
            Ma(l.containerInfo);
          } catch (q) {
            ot(t, t.return, q);
          }
          Ri && (Ri = false, vo(t));
          break;
        case 4:
          a = Ol, Ol = Un(t.stateNode.containerInfo), tl(l, t), ll(t), Ol = a;
          break;
        case 12:
          tl(l, t), ll(t);
          break;
        case 31:
          tl(l, t), ll(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Sn(t, a)));
          break;
        case 13:
          tl(l, t), ll(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (xn = ul()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Sn(t, a)));
          break;
        case 22:
          u = t.memoizedState !== null;
          var r = e !== null && e.memoizedState !== null, S = Kl, T = Ut;
          if (Kl = S || u, Ut = T || r, tl(l, t), Ut = T, Kl = S, ll(t), a & 8192) t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || r || Kl || Ut || Ze(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                r = e = l;
                try {
                  if (n = r.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    i = r.stateNode;
                    var N = r.memoizedProps.style, p = N != null && N.hasOwnProperty("display") ? N.display : null;
                    i.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (q) {
                  ot(r, r.return, q);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                r = l;
                try {
                  r.stateNode.nodeValue = u ? "" : r.memoizedProps;
                } catch (q) {
                  ot(r, r.return, q);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                r = l;
                try {
                  var E = r.stateNode;
                  u ? c0(E, true) : c0(r.stateNode, false);
                } catch (q) {
                  ot(r, r.return, q);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
          a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Sn(t, e))));
          break;
        case 19:
          tl(l, t), ll(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Sn(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          tl(l, t), ll(t);
      }
    }
    function ll(t) {
      var l = t.flags;
      if (l & 2) {
        try {
          for (var e, a = t.return; a !== null; ) {
            if (io(a)) {
              e = a;
              break;
            }
            a = a.return;
          }
          if (e == null) throw Error(s(160));
          switch (e.tag) {
            case 27:
              var u = e.stateNode, n = ji(t);
              bn(t, n, u);
              break;
            case 5:
              var c = e.stateNode;
              e.flags & 32 && (Ie(c, ""), e.flags &= -33);
              var i = ji(t);
              bn(t, i, c);
              break;
            case 3:
            case 4:
              var r = e.stateNode.containerInfo, S = ji(t);
              Di(t, S, r);
              break;
            default:
              throw Error(s(161));
          }
        } catch (T) {
          ot(t, t.return, T);
        }
        t.flags &= -3;
      }
      l & 4096 && (t.flags &= -4097);
    }
    function vo(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var l = t;
        vo(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
    }
    function wl(t, l) {
      if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) ro(t, l.alternate, l), l = l.sibling;
    }
    function Ze(t) {
      for (t = t.child; t !== null; ) {
        var l = t;
        switch (l.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            re(4, l, l.return), Ze(l);
            break;
          case 1:
            Rl(l, l.return);
            var e = l.stateNode;
            typeof e.componentWillUnmount == "function" && no(l, l.return, e), Ze(l);
            break;
          case 27:
            vu(l.stateNode);
          case 26:
          case 5:
            Rl(l, l.return), Ze(l);
            break;
          case 22:
            l.memoizedState === null && Ze(l);
            break;
          case 30:
            Ze(l);
            break;
          default:
            Ze(l);
        }
        t = t.sibling;
      }
    }
    function kl(t, l, e) {
      for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
        var a = l.alternate, u = t, n = l, c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            kl(u, n, e), iu(4, n);
            break;
          case 1:
            if (kl(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
              u.componentDidMount();
            } catch (S) {
              ot(a, a.return, S);
            }
            if (a = n, u = a.updateQueue, u !== null) {
              var i = a.stateNode;
              try {
                var r = u.shared.hiddenCallbacks;
                if (r !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < r.length; u++) ws(r[u], i);
              } catch (S) {
                ot(a, a.return, S);
              }
            }
            e && c & 64 && uo(n), fu(n, n.return);
            break;
          case 27:
            fo(n);
          case 26:
          case 5:
            kl(u, n, e), e && a === null && c & 4 && co(n), fu(n, n.return);
            break;
          case 12:
            kl(u, n, e);
            break;
          case 31:
            kl(u, n, e), e && c & 4 && mo(u, n);
            break;
          case 13:
            kl(u, n, e), e && c & 4 && ho(u, n);
            break;
          case 22:
            n.memoizedState === null && kl(u, n, e), fu(n, n.return);
            break;
          case 30:
            break;
          default:
            kl(u, n, e);
        }
        l = l.sibling;
      }
    }
    function Ui(t, l) {
      var e = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && ka(e));
    }
    function Ci(t, l) {
      t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ka(t));
    }
    function Ml(t, l, e, a) {
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) bo(t, l, e, a), l = l.sibling;
    }
    function bo(t, l, e, a) {
      var u = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ml(t, l, e, a), u & 2048 && iu(9, l);
          break;
        case 1:
          Ml(t, l, e, a);
          break;
        case 3:
          Ml(t, l, e, a), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ka(t)));
          break;
        case 12:
          if (u & 2048) {
            Ml(t, l, e, a), t = l.stateNode;
            try {
              var n = l.memoizedProps, c = n.id, i = n.onPostCommit;
              typeof i == "function" && i(c, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (r) {
              ot(l, l.return, r);
            }
          } else Ml(t, l, e, a);
          break;
        case 31:
          Ml(t, l, e, a);
          break;
        case 13:
          Ml(t, l, e, a);
          break;
        case 23:
          break;
        case 22:
          n = l.stateNode, c = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Ml(t, l, e, a) : su(t, l) : n._visibility & 2 ? Ml(t, l, e, a) : (n._visibility |= 2, ba(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Ui(c, l);
          break;
        case 24:
          Ml(t, l, e, a), u & 2048 && Ci(l.alternate, l);
          break;
        default:
          Ml(t, l, e, a);
      }
    }
    function ba(t, l, e, a, u) {
      for (u = u && ((l.subtreeFlags & 10256) !== 0 || false), l = l.child; l !== null; ) {
        var n = t, c = l, i = e, r = a, S = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            ba(n, c, i, r, u), iu(8, c);
            break;
          case 23:
            break;
          case 22:
            var T = c.stateNode;
            c.memoizedState !== null ? T._visibility & 2 ? ba(n, c, i, r, u) : su(n, c) : (T._visibility |= 2, ba(n, c, i, r, u)), u && S & 2048 && Ui(c.alternate, c);
            break;
          case 24:
            ba(n, c, i, r, u), u && S & 2048 && Ci(c.alternate, c);
            break;
          default:
            ba(n, c, i, r, u);
        }
        l = l.sibling;
      }
    }
    function su(t, l) {
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            su(e, a), u & 2048 && Ui(a.alternate, a);
            break;
          case 24:
            su(e, a), u & 2048 && Ci(a.alternate, a);
            break;
          default:
            su(e, a);
        }
        l = l.sibling;
      }
    }
    var ru = 8192;
    function Sa(t, l, e) {
      if (t.subtreeFlags & ru) for (t = t.child; t !== null; ) So(t, l, e), t = t.sibling;
    }
    function So(t, l, e) {
      switch (t.tag) {
        case 26:
          Sa(t, l, e), t.flags & ru && t.memoizedState !== null && zm(e, Ol, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Sa(t, l, e);
          break;
        case 3:
        case 4:
          var a = Ol;
          Ol = Un(t.stateNode.containerInfo), Sa(t, l, e), Ol = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ru, ru = 16777216, Sa(t, l, e), ru = a) : Sa(t, l, e));
          break;
        default:
          Sa(t, l, e);
      }
    }
    function po(t) {
      var l = t.alternate;
      if (l !== null && (t = l.child, t !== null)) {
        l.child = null;
        do
          l = t.sibling, t.sibling = null, t = l;
        while (t !== null);
      }
    }
    function ou(t) {
      var l = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (l !== null) for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Gt = a, Eo(a, t);
        }
        po(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) xo(t), t = t.sibling;
    }
    function xo(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ou(t), t.flags & 2048 && re(9, t, t.return);
          break;
        case 3:
          ou(t);
          break;
        case 12:
          ou(t);
          break;
        case 22:
          var l = t.stateNode;
          t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, pn(t)) : ou(t);
          break;
        default:
          ou(t);
      }
    }
    function pn(t) {
      var l = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (l !== null) for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Gt = a, Eo(a, t);
        }
        po(t);
      }
      for (t = t.child; t !== null; ) {
        switch (l = t, l.tag) {
          case 0:
          case 11:
          case 15:
            re(8, l, l.return), pn(l);
            break;
          case 22:
            e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, pn(l));
            break;
          default:
            pn(l);
        }
        t = t.sibling;
      }
    }
    function Eo(t, l) {
      for (; Gt !== null; ) {
        var e = Gt;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            re(8, e, l);
            break;
          case 23:
          case 22:
            if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
              var a = e.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            ka(e.memoizedState.cache);
        }
        if (a = e.child, a !== null) a.return = e, Gt = a;
        else t: for (e = t; Gt !== null; ) {
          a = Gt;
          var u = a.sibling, n = a.return;
          if (oo(a), a === e) {
            Gt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, Gt = u;
            break t;
          }
          Gt = n;
        }
      }
    }
    var Yy = {
      getCacheForType: function(t) {
        var l = Lt(jt), e = l.data.get(t);
        return e === void 0 && (e = t(), l.data.set(t, e)), e;
      },
      cacheSignal: function() {
        return Lt(jt).controller.signal;
      }
    }, Gy = typeof WeakMap == "function" ? WeakMap : Map, it = 0, vt = null, tt = null, et = 0, rt = 0, ol = null, oe = false, pa = false, Hi = false, $l = 0, Tt = 0, de = 0, Le = 0, Bi = 0, dl = 0, xa = 0, du = null, el = null, qi = false, xn = 0, zo = 0, En = 1 / 0, zn = null, ye = null, Ct = 0, me = null, Ea = null, Wl = 0, Yi = 0, Gi = null, To = null, yu = 0, Qi = null;
    function yl() {
      return (it & 2) !== 0 && et !== 0 ? et & -et : A.T !== null ? Ji() : Gf();
    }
    function Ao() {
      if (dl === 0) if ((et & 536870912) === 0 || ut) {
        var t = ju;
        ju <<= 1, (ju & 3932160) === 0 && (ju = 262144), dl = t;
      } else dl = 536870912;
      return t = sl.current, t !== null && (t.flags |= 32), dl;
    }
    function al(t, l, e) {
      (t === vt && (rt === 2 || rt === 9) || t.cancelPendingCommit !== null) && (za(t, 0), he(t, et, dl, false)), Ca(t, e), ((it & 2) === 0 || t !== vt) && (t === vt && ((it & 2) === 0 && (Le |= e), Tt === 4 && he(t, et, dl, false)), Ul(t));
    }
    function _o(t, l, e) {
      if ((it & 6) !== 0) throw Error(s(327));
      var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Ua(t, l), u = a ? Zy(t, l) : Zi(t, l, true), n = a;
      do {
        if (u === 0) {
          pa && !a && he(t, l, 0, false);
          break;
        } else {
          if (e = t.current.alternate, n && !Qy(e)) {
            u = Zi(t, l, false), n = false;
            continue;
          }
          if (u === 2) {
            if (n = l, t.errorRecoveryDisabledLanes & n) var c = 0;
            else c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
            if (c !== 0) {
              l = c;
              t: {
                var i = t;
                u = du;
                var r = i.current.memoizedState.isDehydrated;
                if (r && (za(i, c).flags |= 256), c = Zi(i, c, false), c !== 2) {
                  if (Hi && !r) {
                    i.errorRecoveryDisabledLanes |= n, Le |= n, u = 4;
                    break t;
                  }
                  n = el, el = u, n !== null && (el === null ? el = n : el.push.apply(el, n));
                }
                u = c;
              }
              if (n = false, u !== 2) continue;
            }
          }
          if (u === 1) {
            za(t, 0), he(t, l, 0, true);
            break;
          }
          t: {
            switch (a = t, n = u, n) {
              case 0:
              case 1:
                throw Error(s(345));
              case 4:
                if ((l & 4194048) !== l) break;
              case 6:
                he(a, l, dl, !oe);
                break t;
              case 2:
                el = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(s(329));
            }
            if ((l & 62914560) === l && (u = xn + 300 - ul(), 10 < u)) {
              if (he(a, l, dl, !oe), Ru(a, 0, true) !== 0) break t;
              Wl = l, a.timeoutHandle = a0(No.bind(null, a, e, el, zn, qi, l, dl, Le, xa, oe, n, "Throttled", -0, 0), u);
              break t;
            }
            No(a, e, el, zn, qi, l, dl, Le, xa, oe, n, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ul(t);
    }
    function No(t, l, e, a, u, n, c, i, r, S, T, N, p, E) {
      if (t.timeoutHandle = -1, N = l.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
        N = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Hl
        }, So(l, n, N);
        var q = (n & 62914560) === n ? xn - ul() : (n & 4194048) === n ? zo - ul() : 0;
        if (q = Tm(N, q), q !== null) {
          Wl = n, t.cancelPendingCommit = q(Ho.bind(null, t, l, n, e, a, u, c, i, r, T, N, null, p, E)), he(t, n, c, !S);
          return;
        }
      }
      Ho(t, l, n, e, a, u, c, i, r);
    }
    function Qy(t) {
      for (var l = t; ; ) {
        var e = l.tag;
        if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!il(n(), u)) return false;
          } catch {
            return false;
          }
        }
        if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
        else {
          if (l === t) break;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) return true;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      }
      return true;
    }
    function he(t, l, e, a) {
      l &= ~Bi, l &= ~Le, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
      for (var u = l; 0 < u; ) {
        var n = 31 - cl(u), c = 1 << n;
        a[n] = -1, u &= ~c;
      }
      e !== 0 && Bf(t, e, l);
    }
    function Tn() {
      return (it & 6) === 0 ? (mu(0), false) : true;
    }
    function Xi() {
      if (tt !== null) {
        if (rt === 0) var t = tt.return;
        else t = tt, Gl = Ce = null, ai(t), ya = null, Wa = 0, t = tt;
        for (; t !== null; ) ao(t.alternate, t), t = t.return;
        tt = null;
      }
    }
    function za(t, l) {
      var e = t.timeoutHandle;
      e !== -1 && (t.timeoutHandle = -1, cm(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Wl = 0, Xi(), vt = t, tt = e = ql(t.current, null), et = l, rt = 0, ol = null, oe = false, pa = Ua(t, l), Hi = false, xa = dl = Bi = Le = de = Tt = 0, el = du = null, qi = false, (l & 8) !== 0 && (l |= l & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - cl(a), n = 1 << u;
        l |= t[u], a &= ~n;
      }
      return $l = l, Vu(), e;
    }
    function Oo(t, l) {
      W = null, A.H = uu, l === da || l === Iu ? (l = Ls(), rt = 3) : l === Kc ? (l = Ls(), rt = 4) : rt = l === Si ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ol = l, tt === null && (Tt = 1, yn(t, Sl(l, t.current)));
    }
    function Mo() {
      var t = sl.current;
      return t === null ? true : (et & 4194048) === et ? zl === null : (et & 62914560) === et || (et & 536870912) !== 0 ? t === zl : false;
    }
    function jo() {
      var t = A.H;
      return A.H = uu, t === null ? uu : t;
    }
    function Do() {
      var t = A.A;
      return A.A = Yy, t;
    }
    function An() {
      Tt = 4, oe || (et & 4194048) !== et && sl.current !== null || (pa = true), (de & 134217727) === 0 && (Le & 134217727) === 0 || vt === null || he(vt, et, dl, false);
    }
    function Zi(t, l, e) {
      var a = it;
      it |= 2;
      var u = jo(), n = Do();
      (vt !== t || et !== l) && (zn = null, za(t, l)), l = false;
      var c = Tt;
      t: do
        try {
          if (rt !== 0 && tt !== null) {
            var i = tt, r = ol;
            switch (rt) {
              case 8:
                Xi(), c = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                sl.current === null && (l = true);
                var S = rt;
                if (rt = 0, ol = null, Ta(t, i, r, S), e && pa) {
                  c = 0;
                  break t;
                }
                break;
              default:
                S = rt, rt = 0, ol = null, Ta(t, i, r, S);
            }
          }
          Xy(), c = Tt;
          break;
        } catch (T) {
          Oo(t, T);
        }
      while (true);
      return l && t.shellSuspendCounter++, Gl = Ce = null, it = a, A.H = u, A.A = n, tt === null && (vt = null, et = 0, Vu()), c;
    }
    function Xy() {
      for (; tt !== null; ) Ro(tt);
    }
    function Zy(t, l) {
      var e = it;
      it |= 2;
      var a = jo(), u = Do();
      vt !== t || et !== l ? (zn = null, En = ul() + 500, za(t, l)) : pa = Ua(t, l);
      t: do
        try {
          if (rt !== 0 && tt !== null) {
            l = tt;
            var n = ol;
            l: switch (rt) {
              case 1:
                rt = 0, ol = null, Ta(t, l, n, 1);
                break;
              case 2:
              case 9:
                if (Xs(n)) {
                  rt = 0, ol = null, Uo(l);
                  break;
                }
                l = function() {
                  rt !== 2 && rt !== 9 || vt !== t || (rt = 7), Ul(t);
                }, n.then(l, l);
                break t;
              case 3:
                rt = 7;
                break t;
              case 4:
                rt = 5;
                break t;
              case 7:
                Xs(n) ? (rt = 0, ol = null, Uo(l)) : (rt = 0, ol = null, Ta(t, l, n, 7));
                break;
              case 5:
                var c = null;
                switch (tt.tag) {
                  case 26:
                    c = tt.memoizedState;
                  case 5:
                  case 27:
                    var i = tt;
                    if (c ? b0(c) : i.stateNode.complete) {
                      rt = 0, ol = null;
                      var r = i.sibling;
                      if (r !== null) tt = r;
                      else {
                        var S = i.return;
                        S !== null ? (tt = S, _n(S)) : tt = null;
                      }
                      break l;
                    }
                }
                rt = 0, ol = null, Ta(t, l, n, 5);
                break;
              case 6:
                rt = 0, ol = null, Ta(t, l, n, 6);
                break;
              case 8:
                Xi(), Tt = 6;
                break t;
              default:
                throw Error(s(462));
            }
          }
          Ly();
          break;
        } catch (T) {
          Oo(t, T);
        }
      while (true);
      return Gl = Ce = null, A.H = a, A.A = u, it = e, tt !== null ? 0 : (vt = null, et = 0, Vu(), Tt);
    }
    function Ly() {
      for (; tt !== null && !dd(); ) Ro(tt);
    }
    function Ro(t) {
      var l = lo(t.alternate, t, $l);
      t.memoizedProps = t.pendingProps, l === null ? _n(t) : tt = l;
    }
    function Uo(t) {
      var l = t, e = l.alternate;
      switch (l.tag) {
        case 15:
        case 0:
          l = $r(e, l, l.pendingProps, l.type, void 0, et);
          break;
        case 11:
          l = $r(e, l, l.pendingProps, l.type.render, l.ref, et);
          break;
        case 5:
          ai(l);
        default:
          ao(e, l), l = tt = js(l, $l), l = lo(e, l, $l);
      }
      t.memoizedProps = t.pendingProps, l === null ? _n(t) : tt = l;
    }
    function Ta(t, l, e, a) {
      Gl = Ce = null, ai(l), ya = null, Wa = 0;
      var u = l.return;
      try {
        if (Dy(t, u, l, e, et)) {
          Tt = 1, yn(t, Sl(e, t.current)), tt = null;
          return;
        }
      } catch (n) {
        if (u !== null) throw tt = u, n;
        Tt = 1, yn(t, Sl(e, t.current)), tt = null;
        return;
      }
      l.flags & 32768 ? (ut || a === 1 ? t = true : pa || (et & 536870912) !== 0 ? t = false : (oe = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = sl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Co(l, t)) : _n(l);
    }
    function _n(t) {
      var l = t;
      do {
        if ((l.flags & 32768) !== 0) {
          Co(l, oe);
          return;
        }
        t = l.return;
        var e = Cy(l.alternate, l, $l);
        if (e !== null) {
          tt = e;
          return;
        }
        if (l = l.sibling, l !== null) {
          tt = l;
          return;
        }
        tt = l = t;
      } while (l !== null);
      Tt === 0 && (Tt = 5);
    }
    function Co(t, l) {
      do {
        var e = Hy(t.alternate, t);
        if (e !== null) {
          e.flags &= 32767, tt = e;
          return;
        }
        if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      Tt = 6, tt = null;
    }
    function Ho(t, l, e, a, u, n, c, i, r) {
      t.cancelPendingCommit = null;
      do
        Nn();
      while (Ct !== 0);
      if ((it & 6) !== 0) throw Error(s(327));
      if (l !== null) {
        if (l === t.current) throw Error(s(177));
        if (n = l.lanes | l.childLanes, n |= jc, Ed(t, e, n, c, i, r), t === vt && (tt = vt = null, et = 0), Ea = l, me = t, Wl = e, Yi = n, Gi = u, To = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, wy(Ou, function() {
          return Qo(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
          a = A.T, A.T = null, u = H.p, H.p = 2, c = it, it |= 4;
          try {
            By(t, l, e);
          } finally {
            it = c, H.p = u, A.T = a;
          }
        }
        Ct = 1, Bo(), qo(), Yo();
      }
    }
    function Bo() {
      if (Ct === 1) {
        Ct = 0;
        var t = me, l = Ea, e = (l.flags & 13878) !== 0;
        if ((l.subtreeFlags & 13878) !== 0 || e) {
          e = A.T, A.T = null;
          var a = H.p;
          H.p = 2;
          var u = it;
          it |= 4;
          try {
            go(l, t);
            var n = tf, c = xs(t.containerInfo), i = n.focusedElem, r = n.selectionRange;
            if (c !== i && i && i.ownerDocument && ps(i.ownerDocument.documentElement, i)) {
              if (r !== null && Ac(i)) {
                var S = r.start, T = r.end;
                if (T === void 0 && (T = S), "selectionStart" in i) i.selectionStart = S, i.selectionEnd = Math.min(T, i.value.length);
                else {
                  var N = i.ownerDocument || document, p = N && N.defaultView || window;
                  if (p.getSelection) {
                    var E = p.getSelection(), q = i.textContent.length, L = Math.min(r.start, q), ht = r.end === void 0 ? L : Math.min(r.end, q);
                    !E.extend && L > ht && (c = ht, ht = L, L = c);
                    var g = Ss(i, L), d = Ss(i, ht);
                    if (g && d && (E.rangeCount !== 1 || E.anchorNode !== g.node || E.anchorOffset !== g.offset || E.focusNode !== d.node || E.focusOffset !== d.offset)) {
                      var b = N.createRange();
                      b.setStart(g.node, g.offset), E.removeAllRanges(), L > ht ? (E.addRange(b), E.extend(d.node, d.offset)) : (b.setEnd(d.node, d.offset), E.addRange(b));
                    }
                  }
                }
              }
              for (N = [], E = i; E = E.parentNode; ) E.nodeType === 1 && N.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
              for (typeof i.focus == "function" && i.focus(), i = 0; i < N.length; i++) {
                var _ = N[i];
                _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
              }
            }
            Gn = !!Pi, tf = Pi = null;
          } finally {
            it = u, H.p = a, A.T = e;
          }
        }
        t.current = l, Ct = 2;
      }
    }
    function qo() {
      if (Ct === 2) {
        Ct = 0;
        var t = me, l = Ea, e = (l.flags & 8772) !== 0;
        if ((l.subtreeFlags & 8772) !== 0 || e) {
          e = A.T, A.T = null;
          var a = H.p;
          H.p = 2;
          var u = it;
          it |= 4;
          try {
            ro(t, l.alternate, l);
          } finally {
            it = u, H.p = a, A.T = e;
          }
        }
        Ct = 3;
      }
    }
    function Yo() {
      if (Ct === 4 || Ct === 3) {
        Ct = 0, yd();
        var t = me, l = Ea, e = Wl, a = To;
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Ct = 5 : (Ct = 0, Ea = me = null, Go(t, t.pendingLanes));
        var u = t.pendingLanes;
        if (u === 0 && (ye = null), cc(e), l = l.stateNode, nl && typeof nl.onCommitFiberRoot == "function") try {
          nl.onCommitFiberRoot(Ra, l, void 0, (l.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          l = A.T, u = H.p, H.p = 2, A.T = null;
          try {
            for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
              var i = a[c];
              n(i.value, {
                componentStack: i.stack
              });
            }
          } finally {
            A.T = l, H.p = u;
          }
        }
        (Wl & 3) !== 0 && Nn(), Ul(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === Qi ? yu++ : (yu = 0, Qi = t) : yu = 0, mu(0);
      }
    }
    function Go(t, l) {
      (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, ka(l)));
    }
    function Nn() {
      return Bo(), qo(), Yo(), Qo();
    }
    function Qo() {
      if (Ct !== 5) return false;
      var t = me, l = Yi;
      Yi = 0;
      var e = cc(Wl), a = A.T, u = H.p;
      try {
        H.p = 32 > e ? 32 : e, A.T = null, e = Gi, Gi = null;
        var n = me, c = Wl;
        if (Ct = 0, Ea = me = null, Wl = 0, (it & 6) !== 0) throw Error(s(331));
        var i = it;
        if (it |= 4, xo(n.current), bo(n, n.current, c, e), it = i, mu(0, false), nl && typeof nl.onPostCommitFiberRoot == "function") try {
          nl.onPostCommitFiberRoot(Ra, n);
        } catch {
        }
        return true;
      } finally {
        H.p = u, A.T = a, Go(t, l);
      }
    }
    function Xo(t, l, e) {
      l = Sl(e, l), l = bi(t.stateNode, l, 2), t = ie(t, l, 2), t !== null && (Ca(t, 2), Ul(t));
    }
    function ot(t, l, e) {
      if (t.tag === 3) Xo(t, t, e);
      else for (; l !== null; ) {
        if (l.tag === 3) {
          Xo(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a))) {
            t = Sl(e, t), e = Xr(2), a = ie(l, e, 2), a !== null && (Zr(e, a, l, t), Ca(a, 2), Ul(a));
            break;
          }
        }
        l = l.return;
      }
    }
    function Li(t, l, e) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new Gy();
        var u = /* @__PURE__ */ new Set();
        a.set(l, u);
      } else u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
      u.has(e) || (Hi = true, u.add(e), t = Vy.bind(null, t, l, e), l.then(t, t));
    }
    function Vy(t, l, e) {
      var a = t.pingCache;
      a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, vt === t && (et & e) === e && (Tt === 4 || Tt === 3 && (et & 62914560) === et && 300 > ul() - xn ? (it & 2) === 0 && za(t, 0) : Bi |= e, xa === et && (xa = 0)), Ul(t);
    }
    function Zo(t, l) {
      l === 0 && (l = Hf()), t = De(t, l), t !== null && (Ca(t, l), Ul(t));
    }
    function Ky(t) {
      var l = t.memoizedState, e = 0;
      l !== null && (e = l.retryLane), Zo(t, e);
    }
    function Jy(t, l) {
      var e = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, u = t.memoizedState;
          u !== null && (e = u.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(s(314));
      }
      a !== null && a.delete(l), Zo(t, e);
    }
    function wy(t, l) {
      return ec(t, l);
    }
    var On = null, Aa = null, Vi = false, Mn = false, Ki = false, ge = 0;
    function Ul(t) {
      t !== Aa && t.next === null && (Aa === null ? On = Aa = t : Aa = Aa.next = t), Mn = true, Vi || (Vi = true, $y());
    }
    function mu(t, l) {
      if (!Ki && Mn) {
        Ki = true;
        do
          for (var e = false, a = On; a !== null; ) {
            if (t !== 0) {
              var u = a.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var c = a.suspendedLanes, i = a.pingedLanes;
                n = (1 << 31 - cl(42 | t) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
              }
              n !== 0 && (e = true, Jo(a, n));
            } else n = et, n = Ru(a, a === vt ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ua(a, n) || (e = true, Jo(a, n));
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
      var t = 0;
      ge !== 0 && nm() && (t = ge);
      for (var l = ul(), e = null, a = On; a !== null; ) {
        var u = a.next, n = Vo(a, l);
        n === 0 ? (a.next = null, e === null ? On = u : e.next = u, u === null && (Aa = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (Mn = true)), a = u;
      }
      Ct !== 0 && Ct !== 5 || mu(t), ge !== 0 && (ge = 0);
    }
    function Vo(t, l) {
      for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
        var c = 31 - cl(n), i = 1 << c, r = u[c];
        r === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = xd(i, l)) : r <= l && (t.expiredLanes |= i), n &= ~i;
      }
      if (l = vt, e = et, e = Ru(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, e === 0 || t === l && (rt === 2 || rt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && ac(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((e & 3) === 0 || Ua(t, e)) {
        if (l = e & -e, l === t.callbackPriority) return l;
        switch (a !== null && ac(a), cc(e)) {
          case 2:
          case 8:
            e = Uf;
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
        return a = Ko.bind(null, t), e = ec(e, a), t.callbackPriority = l, t.callbackNode = e, l;
      }
      return a !== null && a !== null && ac(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Ko(t, l) {
      if (Ct !== 0 && Ct !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var e = t.callbackNode;
      if (Nn() && t.callbackNode !== e) return null;
      var a = et;
      return a = Ru(t, t === vt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (_o(t, a, l), Vo(t, ul()), t.callbackNode != null && t.callbackNode === e ? Ko.bind(null, t) : null);
    }
    function Jo(t, l) {
      if (Nn()) return null;
      _o(t, l, true);
    }
    function $y() {
      im(function() {
        (it & 6) !== 0 ? ec(Rf, ky) : Lo();
      });
    }
    function Ji() {
      if (ge === 0) {
        var t = ra;
        t === 0 && (t = Mu, Mu <<= 1, (Mu & 261888) === 0 && (Mu = 256)), ge = t;
      }
      return ge;
    }
    function wo(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Bu("" + t);
    }
    function ko(t, l) {
      var e = l.ownerDocument.createElement("input");
      return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
    }
    function Wy(t, l, e, a, u) {
      if (l === "submit" && e && e.stateNode === u) {
        var n = wo((u[Ft] || null).action), c = a.submitter;
        c && (l = (l = c[Ft] || null) ? wo(l.formAction) : c.getAttribute("formAction"), l !== null && (n = l, c = null));
        var i = new Qu("action", "action", null, a, u);
        t.push({
          event: i,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (ge !== 0) {
                    var r = c ? ko(u, c) : new FormData(u);
                    di(e, {
                      pending: true,
                      data: r,
                      method: u.method,
                      action: n
                    }, null, r);
                  }
                } else typeof n == "function" && (i.preventDefault(), r = c ? ko(u, c) : new FormData(u), di(e, {
                  pending: true,
                  data: r,
                  method: u.method,
                  action: n
                }, n, r));
              },
              currentTarget: u
            }
          ]
        });
      }
    }
    for (var wi = 0; wi < Mc.length; wi++) {
      var ki = Mc[wi], Fy = ki.toLowerCase(), Iy = ki[0].toUpperCase() + ki.slice(1);
      Nl(Fy, "on" + Iy);
    }
    Nl(Ts, "onAnimationEnd"), Nl(As, "onAnimationIteration"), Nl(_s, "onAnimationStart"), Nl("dblclick", "onDoubleClick"), Nl("focusin", "onFocus"), Nl("focusout", "onBlur"), Nl(my, "onTransitionRun"), Nl(hy, "onTransitionStart"), Nl(gy, "onTransitionCancel"), Nl(Ns, "onTransitionEnd"), We("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), We("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), We("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), We("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ne("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Py = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));
    function $o(t, l) {
      l = (l & 4) !== 0;
      for (var e = 0; e < t.length; e++) {
        var a = t[e], u = a.event;
        a = a.listeners;
        t: {
          var n = void 0;
          if (l) for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c], r = i.instance, S = i.currentTarget;
            if (i = i.listener, r !== n && u.isPropagationStopped()) break t;
            n = i, u.currentTarget = S;
            try {
              n(u);
            } catch (T) {
              Lu(T);
            }
            u.currentTarget = null, n = r;
          }
          else for (c = 0; c < a.length; c++) {
            if (i = a[c], r = i.instance, S = i.currentTarget, i = i.listener, r !== n && u.isPropagationStopped()) break t;
            n = i, u.currentTarget = S;
            try {
              n(u);
            } catch (T) {
              Lu(T);
            }
            u.currentTarget = null, n = r;
          }
        }
      }
    }
    function lt(t, l) {
      var e = l[ic];
      e === void 0 && (e = l[ic] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      e.has(a) || (Wo(l, t, 2, false), e.add(a));
    }
    function $i(t, l, e) {
      var a = 0;
      l && (a |= 4), Wo(e, t, a, l);
    }
    var jn = "_reactListening" + Math.random().toString(36).slice(2);
    function Wi(t) {
      if (!t[jn]) {
        t[jn] = true, Zf.forEach(function(e) {
          e !== "selectionchange" && (Py.has(e) || $i(e, false, t), $i(e, true, t));
        });
        var l = t.nodeType === 9 ? t : t.ownerDocument;
        l === null || l[jn] || (l[jn] = true, $i("selectionchange", false, l));
      }
    }
    function Wo(t, l, e, a) {
      switch (A0(l)) {
        case 2:
          var u = Nm;
          break;
        case 8:
          u = Om;
          break;
        default:
          u = df;
      }
      e = u.bind(null, l, e, t), u = void 0, !gc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = true), a ? u !== void 0 ? t.addEventListener(l, e, {
        capture: true,
        passive: u
      }) : t.addEventListener(l, e, true) : u !== void 0 ? t.addEventListener(l, e, {
        passive: u
      }) : t.addEventListener(l, e, false);
    }
    function Fi(t, l, e, a, u) {
      var n = a;
      if ((l & 1) === 0 && (l & 2) === 0 && a !== null) t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4) for (c = a.return; c !== null; ) {
            var r = c.tag;
            if ((r === 3 || r === 4) && c.stateNode.containerInfo === u) return;
            c = c.return;
          }
          for (; i !== null; ) {
            if (c = we(i), c === null) return;
            if (r = c.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = n = c;
              continue t;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
      ts(function() {
        var S = n, T = mc(e), N = [];
        t: {
          var p = Os.get(t);
          if (p !== void 0) {
            var E = Qu, q = t;
            switch (t) {
              case "keypress":
                if (Yu(e) === 0) break t;
              case "keydown":
              case "keyup":
                E = Jd;
                break;
              case "focusin":
                q = "focus", E = pc;
                break;
              case "focusout":
                q = "blur", E = pc;
                break;
              case "beforeblur":
              case "afterblur":
                E = pc;
                break;
              case "click":
                if (e.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                E = as;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                E = Cd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                E = $d;
                break;
              case Ts:
              case As:
              case _s:
                E = qd;
                break;
              case Ns:
                E = Fd;
                break;
              case "scroll":
              case "scrollend":
                E = Rd;
                break;
              case "wheel":
                E = Pd;
                break;
              case "copy":
              case "cut":
              case "paste":
                E = Gd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                E = ns;
                break;
              case "toggle":
              case "beforetoggle":
                E = ly;
            }
            var L = (l & 4) !== 0, ht = !L && (t === "scroll" || t === "scrollend"), g = L ? p !== null ? p + "Capture" : null : p;
            L = [];
            for (var d = S, b; d !== null; ) {
              var _ = d;
              if (b = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || b === null || g === null || (_ = qa(d, g), _ != null && L.push(gu(d, _, b))), ht) break;
              d = d.return;
            }
            0 < L.length && (p = new E(p, q, null, e, T), N.push({
              event: p,
              listeners: L
            }));
          }
        }
        if ((l & 7) === 0) {
          t: {
            if (p = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout", p && e !== yc && (q = e.relatedTarget || e.fromElement) && (we(q) || q[Je])) break t;
            if ((E || p) && (p = T.window === T ? T : (p = T.ownerDocument) ? p.defaultView || p.parentWindow : window, E ? (q = e.relatedTarget || e.toElement, E = S, q = q ? we(q) : null, q !== null && (ht = j(q), L = q.tag, q !== ht || L !== 5 && L !== 27 && L !== 6) && (q = null)) : (E = null, q = S), E !== q)) {
              if (L = as, _ = "onMouseLeave", g = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (L = ns, _ = "onPointerLeave", g = "onPointerEnter", d = "pointer"), ht = E == null ? p : Ba(E), b = q == null ? p : Ba(q), p = new L(_, d + "leave", E, e, T), p.target = ht, p.relatedTarget = b, _ = null, we(T) === S && (L = new L(g, d + "enter", q, e, T), L.target = b, L.relatedTarget = ht, _ = L), ht = _, E && q) l: {
                for (L = tm, g = E, d = q, b = 0, _ = g; _; _ = L(_)) b++;
                _ = 0;
                for (var Z = d; Z; Z = L(Z)) _++;
                for (; 0 < b - _; ) g = L(g), b--;
                for (; 0 < _ - b; ) d = L(d), _--;
                for (; b--; ) {
                  if (g === d || d !== null && g === d.alternate) {
                    L = g;
                    break l;
                  }
                  g = L(g), d = L(d);
                }
                L = null;
              }
              else L = null;
              E !== null && Fo(N, p, E, L, false), q !== null && ht !== null && Fo(N, ht, q, L, true);
            }
          }
          t: {
            if (p = S ? Ba(S) : window, E = p.nodeName && p.nodeName.toLowerCase(), E === "select" || E === "input" && p.type === "file") var nt = ys;
            else if (os(p)) if (ms) nt = oy;
            else {
              nt = sy;
              var Q = fy;
            }
            else E = p.nodeName, !E || E.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? S && dc(S.elementType) && (nt = ys) : nt = ry;
            if (nt && (nt = nt(t, S))) {
              ds(N, nt, e, T);
              break t;
            }
            Q && Q(t, p, S), t === "focusout" && S && p.type === "number" && S.memoizedProps.value != null && oc(p, "number", p.value);
          }
          switch (Q = S ? Ba(S) : window, t) {
            case "focusin":
              (os(Q) || Q.contentEditable === "true") && (ea = Q, _c = S, Ka = null);
              break;
            case "focusout":
              Ka = _c = ea = null;
              break;
            case "mousedown":
              Nc = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Nc = false, Es(N, e, T);
              break;
            case "selectionchange":
              if (yy) break;
            case "keydown":
            case "keyup":
              Es(N, e, T);
          }
          var F;
          if (Ec) t: {
            switch (t) {
              case "compositionstart":
                var at = "onCompositionStart";
                break t;
              case "compositionend":
                at = "onCompositionEnd";
                break t;
              case "compositionupdate":
                at = "onCompositionUpdate";
                break t;
            }
            at = void 0;
          }
          else la ? ss(t, e) && (at = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (at = "onCompositionStart");
          at && (cs && e.locale !== "ko" && (la || at !== "onCompositionStart" ? at === "onCompositionEnd" && la && (F = ls()) : (te = T, vc = "value" in te ? te.value : te.textContent, la = true)), Q = Dn(S, at), 0 < Q.length && (at = new us(at, t, null, e, T), N.push({
            event: at,
            listeners: Q
          }), F ? at.data = F : (F = rs(e), F !== null && (at.data = F)))), (F = ay ? uy(t, e) : ny(t, e)) && (at = Dn(S, "onBeforeInput"), 0 < at.length && (Q = new us("onBeforeInput", "beforeinput", null, e, T), N.push({
            event: Q,
            listeners: at
          }), Q.data = F)), Wy(N, t, S, e, T);
        }
        $o(N, l);
      });
    }
    function gu(t, l, e) {
      return {
        instance: t,
        listener: l,
        currentTarget: e
      };
    }
    function Dn(t, l) {
      for (var e = l + "Capture", a = []; t !== null; ) {
        var u = t, n = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = qa(t, e), u != null && a.unshift(gu(t, u, n)), u = qa(t, l), u != null && a.push(gu(t, u, n))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function tm(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Fo(t, l, e, a, u) {
      for (var n = l._reactName, c = []; e !== null && e !== a; ) {
        var i = e, r = i.alternate, S = i.stateNode;
        if (i = i.tag, r !== null && r === a) break;
        i !== 5 && i !== 26 && i !== 27 || S === null || (r = S, u ? (S = qa(e, n), S != null && c.unshift(gu(e, S, r))) : u || (S = qa(e, n), S != null && c.push(gu(e, S, r)))), e = e.return;
      }
      c.length !== 0 && t.push({
        event: l,
        listeners: c
      });
    }
    var lm = /\r\n?/g, em = /\u0000|\uFFFD/g;
    function Io(t) {
      return (typeof t == "string" ? t : "" + t).replace(lm, `
`).replace(em, "");
    }
    function Po(t, l) {
      return l = Io(l), Io(t) === l;
    }
    function mt(t, l, e, a, u, n) {
      switch (e) {
        case "children":
          typeof a == "string" ? l === "body" || l === "textarea" && a === "" || Ie(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && Ie(t, "" + a);
          break;
        case "className":
          Cu(t, "class", a);
          break;
        case "tabIndex":
          Cu(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Cu(t, e, a);
          break;
        case "style":
          If(t, a, n);
          break;
        case "data":
          if (l !== "object") {
            Cu(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (l !== "a" || e !== "href")) {
            t.removeAttribute(e);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(e);
            break;
          }
          a = Bu("" + a), t.setAttribute(e, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof n == "function" && (e === "formAction" ? (l !== "input" && mt(t, l, "name", u.name, u, null), mt(t, l, "formEncType", u.formEncType, u, null), mt(t, l, "formMethod", u.formMethod, u, null), mt(t, l, "formTarget", u.formTarget, u, null)) : (mt(t, l, "encType", u.encType, u, null), mt(t, l, "method", u.method, u, null), mt(t, l, "target", u.target, u, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(e);
            break;
          }
          a = Bu("" + a), t.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (t.onclick = Hl);
          break;
        case "onScroll":
          a != null && lt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && lt("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
            if (e = a.__html, e != null) {
              if (u.children != null) throw Error(s(60));
              t.innerHTML = e;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
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
            t.removeAttribute("xlink:href");
            break;
          }
          e = Bu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
          break;
        case "popover":
          lt("beforetoggle", t), lt("toggle", t), Uu(t, "popover", a);
          break;
        case "xlinkActuate":
          Cl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Cl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Cl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Cl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Cl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Cl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Cl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Cl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Cl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Uu(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = jd.get(e) || e, Uu(t, e, a));
      }
    }
    function Ii(t, l, e, a, u, n) {
      switch (e) {
        case "style":
          If(t, a, n);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
            if (e = a.__html, e != null) {
              if (u.children != null) throw Error(s(60));
              t.innerHTML = e;
            }
          }
          break;
        case "children":
          typeof a == "string" ? Ie(t, a) : (typeof a == "number" || typeof a == "bigint") && Ie(t, "" + a);
          break;
        case "onScroll":
          a != null && lt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && lt("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Hl);
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
          if (!Lf.hasOwnProperty(e)) t: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[Ft] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
              break t;
            }
            e in t ? t[e] = a : a === true ? t.setAttribute(e, "") : Uu(t, e, a);
          }
      }
    }
    function Kt(t, l, e) {
      switch (l) {
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
          lt("error", t), lt("load", t);
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
                throw Error(s(137, l));
              default:
                mt(t, l, n, c, e, null);
            }
          }
          u && mt(t, l, "srcSet", e.srcSet, e, null), a && mt(t, l, "src", e.src, e, null);
          return;
        case "input":
          lt("invalid", t);
          var i = n = c = u = null, r = null, S = null;
          for (a in e) if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null) switch (a) {
              case "name":
                u = T;
                break;
              case "type":
                c = T;
                break;
              case "checked":
                r = T;
                break;
              case "defaultChecked":
                S = T;
                break;
              case "value":
                n = T;
                break;
              case "defaultValue":
                i = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(s(137, l));
                break;
              default:
                mt(t, l, a, T, e, null);
            }
          }
          kf(t, n, i, r, S, c, u, false);
          return;
        case "select":
          lt("invalid", t), a = c = n = null;
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
              mt(t, l, u, i, e, null);
          }
          l = n, e = c, t.multiple = !!a, l != null ? Fe(t, !!a, l, false) : e != null && Fe(t, !!a, e, true);
          return;
        case "textarea":
          lt("invalid", t), n = u = a = null;
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
              if (i != null) throw Error(s(91));
              break;
            default:
              mt(t, l, c, i, e, null);
          }
          Wf(t, a, u, n);
          return;
        case "option":
          for (r in e) e.hasOwnProperty(r) && (a = e[r], a != null) && (r === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : mt(t, l, r, a, e, null));
          return;
        case "dialog":
          lt("beforetoggle", t), lt("toggle", t), lt("cancel", t), lt("close", t);
          break;
        case "iframe":
        case "object":
          lt("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < hu.length; a++) lt(hu[a], t);
          break;
        case "image":
          lt("error", t), lt("load", t);
          break;
        case "details":
          lt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          lt("error", t), lt("load", t);
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
          for (S in e) if (e.hasOwnProperty(S) && (a = e[S], a != null)) switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, l));
            default:
              mt(t, l, S, a, e, null);
          }
          return;
        default:
          if (dc(l)) {
            for (T in e) e.hasOwnProperty(T) && (a = e[T], a !== void 0 && Ii(t, l, T, a, e, void 0));
            return;
          }
      }
      for (i in e) e.hasOwnProperty(i) && (a = e[i], a != null && mt(t, l, i, a, e, null));
    }
    function am(t, l, e, a) {
      switch (l) {
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
          var u = null, n = null, c = null, i = null, r = null, S = null, T = null;
          for (E in e) {
            var N = e[E];
            if (e.hasOwnProperty(E) && N != null) switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = N;
              default:
                a.hasOwnProperty(E) || mt(t, l, E, null, a, N);
            }
          }
          for (var p in a) {
            var E = a[p];
            if (N = e[p], a.hasOwnProperty(p) && (E != null || N != null)) switch (p) {
              case "type":
                n = E;
                break;
              case "name":
                u = E;
                break;
              case "checked":
                S = E;
                break;
              case "defaultChecked":
                T = E;
                break;
              case "value":
                c = E;
                break;
              case "defaultValue":
                i = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(s(137, l));
                break;
              default:
                E !== N && mt(t, l, p, E, a, N);
            }
          }
          rc(t, c, i, r, S, T, n, u);
          return;
        case "select":
          E = c = i = p = null;
          for (n in e) if (r = e[n], e.hasOwnProperty(n) && r != null) switch (n) {
            case "value":
              break;
            case "multiple":
              E = r;
            default:
              a.hasOwnProperty(n) || mt(t, l, n, null, a, r);
          }
          for (u in a) if (n = a[u], r = e[u], a.hasOwnProperty(u) && (n != null || r != null)) switch (u) {
            case "value":
              p = n;
              break;
            case "defaultValue":
              i = n;
              break;
            case "multiple":
              c = n;
            default:
              n !== r && mt(t, l, u, n, a, r);
          }
          l = i, e = c, a = E, p != null ? Fe(t, !!e, p, false) : !!a != !!e && (l != null ? Fe(t, !!e, l, true) : Fe(t, !!e, e ? [] : "", false));
          return;
        case "textarea":
          E = p = null;
          for (i in e) if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i)) switch (i) {
            case "value":
              break;
            case "children":
              break;
            default:
              mt(t, l, i, null, a, u);
          }
          for (c in a) if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
            case "value":
              p = u;
              break;
            case "defaultValue":
              E = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(s(91));
              break;
            default:
              u !== n && mt(t, l, c, u, a, n);
          }
          $f(t, p, E);
          return;
        case "option":
          for (var q in e) p = e[q], e.hasOwnProperty(q) && p != null && !a.hasOwnProperty(q) && (q === "selected" ? t.selected = false : mt(t, l, q, null, a, p));
          for (r in a) p = a[r], E = e[r], a.hasOwnProperty(r) && p !== E && (p != null || E != null) && (r === "selected" ? t.selected = p && typeof p != "function" && typeof p != "symbol" : mt(t, l, r, p, a, E));
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
          for (var L in e) p = e[L], e.hasOwnProperty(L) && p != null && !a.hasOwnProperty(L) && mt(t, l, L, null, a, p);
          for (S in a) if (p = a[S], E = e[S], a.hasOwnProperty(S) && p !== E && (p != null || E != null)) switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (p != null) throw Error(s(137, l));
              break;
            default:
              mt(t, l, S, p, a, E);
          }
          return;
        default:
          if (dc(l)) {
            for (var ht in e) p = e[ht], e.hasOwnProperty(ht) && p !== void 0 && !a.hasOwnProperty(ht) && Ii(t, l, ht, void 0, a, p);
            for (T in a) p = a[T], E = e[T], !a.hasOwnProperty(T) || p === E || p === void 0 && E === void 0 || Ii(t, l, T, p, a, E);
            return;
          }
      }
      for (var g in e) p = e[g], e.hasOwnProperty(g) && p != null && !a.hasOwnProperty(g) && mt(t, l, g, null, a, p);
      for (N in a) p = a[N], E = e[N], !a.hasOwnProperty(N) || p === E || p == null && E == null || mt(t, l, N, p, a, E);
    }
    function t0(t) {
      switch (t) {
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
        for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
          var u = e[a], n = u.transferSize, c = u.initiatorType, i = u.duration;
          if (n && i && t0(c)) {
            for (c = 0, i = u.responseEnd, a += 1; a < e.length; a++) {
              var r = e[a], S = r.startTime;
              if (S > i) break;
              var T = r.transferSize, N = r.initiatorType;
              T && t0(N) && (r = r.responseEnd, c += T * (r < i ? 1 : (i - S) / (r - S)));
            }
            if (--a, l += 8 * (n + c) / (u.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return l / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var Pi = null, tf = null;
    function Rn(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function l0(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function e0(t, l) {
      if (t === 0) switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && l === "foreignObject" ? 0 : t;
    }
    function lf(t, l) {
      return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
    }
    var ef = null;
    function nm() {
      var t = window.event;
      return t && t.type === "popstate" ? t === ef ? false : (ef = t, true) : (ef = null, false);
    }
    var a0 = typeof setTimeout == "function" ? setTimeout : void 0, cm = typeof clearTimeout == "function" ? clearTimeout : void 0, u0 = typeof Promise == "function" ? Promise : void 0, im = typeof queueMicrotask == "function" ? queueMicrotask : typeof u0 < "u" ? function(t) {
      return u0.resolve(null).then(t).catch(fm);
    } : a0;
    function fm(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function ve(t) {
      return t === "head";
    }
    function n0(t, l) {
      var e = l, a = 0;
      do {
        var u = e.nextSibling;
        if (t.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(u), Ma(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
        else if (e === "html") vu(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, vu(e);
          for (var n = e.firstChild; n; ) {
            var c = n.nextSibling, i = n.nodeName;
            n[Ha] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
          }
        } else e === "body" && vu(t.ownerDocument.body);
        e = u;
      } while (e);
      Ma(l);
    }
    function c0(t, l) {
      var e = t;
      t = 0;
      do {
        var a = e.nextSibling;
        if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
        e = a;
      } while (e);
    }
    function af(t) {
      var l = t.firstChild;
      for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
        var e = l;
        switch (l = l.nextSibling, e.nodeName) {
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
        t.removeChild(e);
      }
    }
    function sm(t, l, e, a) {
      for (; t.nodeType === 1; ) {
        var u = e;
        if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ha]) switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (l === "input" && t.type === "hidden") {
          var n = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && t.getAttribute("name") === n) return t;
        } else return t;
        if (t = Tl(t.nextSibling), t === null) break;
      }
      return null;
    }
    function rm(t, l, e) {
      if (l === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Tl(t.nextSibling), t === null)) return null;
      return t;
    }
    function i0(t, l) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Tl(t.nextSibling), t === null)) return null;
      return t;
    }
    function uf(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function nf(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function om(t, l) {
      var e = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = l;
      else if (t.data !== "$?" || e.readyState !== "loading") l();
      else {
        var a = function() {
          l(), e.removeEventListener("DOMContentLoaded", a);
        };
        e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function Tl(t) {
      for (; t != null; t = t.nextSibling) {
        var l = t.nodeType;
        if (l === 1 || l === 3) break;
        if (l === 8) {
          if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F") break;
          if (l === "/$" || l === "/&") return null;
        }
      }
      return t;
    }
    var cf = null;
    function f0(t) {
      t = t.nextSibling;
      for (var l = 0; t; ) {
        if (t.nodeType === 8) {
          var e = t.data;
          if (e === "/$" || e === "/&") {
            if (l === 0) return Tl(t.nextSibling);
            l--;
          } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function s0(t) {
      t = t.previousSibling;
      for (var l = 0; t; ) {
        if (t.nodeType === 8) {
          var e = t.data;
          if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
            if (l === 0) return t;
            l--;
          } else e !== "/$" && e !== "/&" || l++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function r0(t, l, e) {
      switch (l = Rn(e), t) {
        case "html":
          if (t = l.documentElement, !t) throw Error(s(452));
          return t;
        case "head":
          if (t = l.head, !t) throw Error(s(453));
          return t;
        case "body":
          if (t = l.body, !t) throw Error(s(454));
          return t;
        default:
          throw Error(s(451));
      }
    }
    function vu(t) {
      for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      fc(t);
    }
    var Al = /* @__PURE__ */ new Map(), o0 = /* @__PURE__ */ new Set();
    function Un(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var Fl = H.d;
    H.d = {
      f: dm,
      r: ym,
      D: mm,
      C: hm,
      L: gm,
      m: vm,
      X: Sm,
      S: bm,
      M: pm
    };
    function dm() {
      var t = Fl.f(), l = Tn();
      return t || l;
    }
    function ym(t) {
      var l = ke(t);
      l !== null && l.tag === 5 && l.type === "form" ? Nr(l) : Fl.r(t);
    }
    var _a = typeof document > "u" ? null : document;
    function d0(t, l, e) {
      var a = _a;
      if (a && typeof l == "string" && l) {
        var u = vl(l);
        u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), o0.has(u) || (o0.add(u), t = {
          rel: t,
          crossOrigin: e,
          href: l
        }, a.querySelector(u) === null && (l = a.createElement("link"), Kt(l, "link", t), Yt(l), a.head.appendChild(l)));
      }
    }
    function mm(t) {
      Fl.D(t), d0("dns-prefetch", t, null);
    }
    function hm(t, l) {
      Fl.C(t, l), d0("preconnect", t, l);
    }
    function gm(t, l, e) {
      Fl.L(t, l, e);
      var a = _a;
      if (a && t && l) {
        var u = 'link[rel="preload"][as="' + vl(l) + '"]';
        l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + vl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + vl(e.imageSizes) + '"]')) : u += '[href="' + vl(t) + '"]';
        var n = u;
        switch (l) {
          case "style":
            n = Na(t);
            break;
          case "script":
            n = Oa(t);
        }
        Al.has(n) || (t = O({
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        }, e), Al.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(bu(n)) || l === "script" && a.querySelector(Su(n)) || (l = a.createElement("link"), Kt(l, "link", t), Yt(l), a.head.appendChild(l)));
      }
    }
    function vm(t, l) {
      Fl.m(t, l);
      var e = _a;
      if (e && t) {
        var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + vl(a) + '"][href="' + vl(t) + '"]', n = u;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Oa(t);
        }
        if (!Al.has(n) && (t = O({
          rel: "modulepreload",
          href: t
        }, l), Al.set(n, t), e.querySelector(u) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(Su(n))) return;
          }
          a = e.createElement("link"), Kt(a, "link", t), Yt(a), e.head.appendChild(a);
        }
      }
    }
    function bm(t, l, e) {
      Fl.S(t, l, e);
      var a = _a;
      if (a && t) {
        var u = $e(a).hoistableStyles, n = Na(t);
        l = l || "default";
        var c = u.get(n);
        if (!c) {
          var i = {
            loading: 0,
            preload: null
          };
          if (c = a.querySelector(bu(n))) i.loading = 5;
          else {
            t = O({
              rel: "stylesheet",
              href: t,
              "data-precedence": l
            }, e), (e = Al.get(n)) && ff(t, e);
            var r = c = a.createElement("link");
            Yt(r), Kt(r, "link", t), r._p = new Promise(function(S, T) {
              r.onload = S, r.onerror = T;
            }), r.addEventListener("load", function() {
              i.loading |= 1;
            }), r.addEventListener("error", function() {
              i.loading |= 2;
            }), i.loading |= 4, Cn(c, l, a);
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
    function Sm(t, l) {
      Fl.X(t, l);
      var e = _a;
      if (e && t) {
        var a = $e(e).hoistableScripts, u = Oa(t), n = a.get(u);
        n || (n = e.querySelector(Su(u)), n || (t = O({
          src: t,
          async: true
        }, l), (l = Al.get(u)) && sf(t, l), n = e.createElement("script"), Yt(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, a.set(u, n));
      }
    }
    function pm(t, l) {
      Fl.M(t, l);
      var e = _a;
      if (e && t) {
        var a = $e(e).hoistableScripts, u = Oa(t), n = a.get(u);
        n || (n = e.querySelector(Su(u)), n || (t = O({
          src: t,
          async: true,
          type: "module"
        }, l), (l = Al.get(u)) && sf(t, l), n = e.createElement("script"), Yt(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, a.set(u, n));
      }
    }
    function y0(t, l, e, a) {
      var u = (u = P.current) ? Un(u) : null;
      if (!u) throw Error(s(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Na(e.href), e = $e(u).hoistableStyles, a = e.get(l), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(l, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
            t = Na(e.href);
            var n = $e(u).hoistableStyles, c = n.get(t);
            if (c || (u = u.ownerDocument || u, c = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, n.set(t, c), (n = u.querySelector(bu(t))) && !n._p && (c.instance = n, c.state.loading = 5), Al.has(t) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, Al.set(t, e), n || xm(u, t, e, c.state))), l && a === null) throw Error(s(528, ""));
            return c;
          }
          if (l && a !== null) throw Error(s(529, ""));
          return null;
        case "script":
          return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Oa(e), e = $e(u).hoistableScripts, a = e.get(l), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(l, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(s(444, t));
      }
    }
    function Na(t) {
      return 'href="' + vl(t) + '"';
    }
    function bu(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function m0(t) {
      return O({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function xm(t, l, e, a) {
      t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
        return a.loading |= 1;
      }), l.addEventListener("error", function() {
        return a.loading |= 2;
      }), Kt(l, "link", e), Yt(l), t.head.appendChild(l));
    }
    function Oa(t) {
      return '[src="' + vl(t) + '"]';
    }
    function Su(t) {
      return "script[async]" + t;
    }
    function h0(t, l, e) {
      if (l.count++, l.instance === null) switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + vl(e.href) + '"]');
          if (a) return l.instance = a, Yt(a), a;
          var u = O({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Yt(a), Kt(a, "style", u), Cn(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = Na(e.href);
          var n = t.querySelector(bu(u));
          if (n) return l.state.loading |= 4, l.instance = n, Yt(n), n;
          a = m0(e), (u = Al.get(u)) && ff(a, u), n = (t.ownerDocument || t).createElement("link"), Yt(n);
          var c = n;
          return c._p = new Promise(function(i, r) {
            c.onload = i, c.onerror = r;
          }), Kt(n, "link", a), l.state.loading |= 4, Cn(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Oa(e.src), (u = t.querySelector(Su(n))) ? (l.instance = u, Yt(u), u) : (a = e, (u = Al.get(n)) && (a = O({}, e), sf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Yt(u), Kt(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
      else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Cn(a, e.precedence, t));
      return l.instance;
    }
    function Cn(t, l, e) {
      for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
        var i = a[c];
        if (i.dataset.precedence === l) n = i;
        else if (n !== u) break;
      }
      n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
    }
    function ff(t, l) {
      t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
    }
    function sf(t, l) {
      t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
    }
    var Hn = null;
    function g0(t, l, e) {
      if (Hn === null) {
        var a = /* @__PURE__ */ new Map(), u = Hn = /* @__PURE__ */ new Map();
        u.set(e, a);
      } else u = Hn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
      if (a.has(t)) return a;
      for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
        var n = e[u];
        if (!(n[Ha] || n[Xt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
          var c = n.getAttribute(l) || "";
          c = t + c;
          var i = a.get(c);
          i ? i.push(n) : a.set(c, [
            n
          ]);
        }
      }
      return a;
    }
    function v0(t, l, e) {
      t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null);
    }
    function Em(t, l, e) {
      if (e === 1 || l.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
          return true;
        case "link":
          if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
          return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : true;
        case "script":
          if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
      }
      return false;
    }
    function b0(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function zm(t, l, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var u = Na(a.href), n = l.querySelector(bu(u));
          if (n) {
            l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Bn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Yt(n);
            return;
          }
          n = l.ownerDocument || l, a = m0(a), (u = Al.get(u)) && ff(a, u), n = n.createElement("link"), Yt(n);
          var c = n;
          c._p = new Promise(function(i, r) {
            c.onload = i, c.onerror = r;
          }), Kt(n, "link", a), e.instance = n;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Bn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
      }
    }
    var rf = 0;
    function Tm(t, l) {
      return t.stylesheets && t.count === 0 && Yn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
        var a = setTimeout(function() {
          if (t.stylesheets && Yn(t, t.stylesheets), t.unsuspend) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        }, 6e4 + l);
        0 < t.imgBytes && rf === 0 && (rf = 62500 * um());
        var u = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Yn(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        }, (t.imgBytes > rf ? 50 : 800) + l);
        return t.unsuspend = e, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(u);
        };
      } : null;
    }
    function Bn() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Yn(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var qn = null;
    function Yn(t, l) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, qn = /* @__PURE__ */ new Map(), l.forEach(Am, t), qn = null, Bn.call(t));
    }
    function Am(t, l) {
      if (!(l.state.loading & 4)) {
        var e = qn.get(t);
        if (e) var a = e.get(null);
        else {
          e = /* @__PURE__ */ new Map(), qn.set(t, e);
          for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
            var c = u[n];
            (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
          }
          a && e.set(null, a);
        }
        u = l.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = Bn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
      }
    }
    var pu = {
      $$typeof: bt,
      Provider: null,
      Consumer: null,
      _currentValue: J,
      _currentValue2: J,
      _threadCount: 0
    };
    function _m(t, l, e, a, u, n, c, i, r) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = uc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uc(0), this.hiddenUpdates = uc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function S0(t, l, e, a, u, n, c, i, r, S, T, N) {
      return t = new _m(t, l, e, c, r, S, T, N, i), l = 1, n === true && (l |= 24), n = fl(3, null, null, l), t.current = n, n.stateNode = t, l = Zc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
        element: a,
        isDehydrated: e,
        cache: l
      }, Jc(n), t;
    }
    function p0(t) {
      return t ? (t = na, t) : na;
    }
    function x0(t, l, e, a, u, n) {
      u = p0(u), a.context === null ? a.context = u : a.pendingContext = u, a = ce(l), a.payload = {
        element: e
      }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ie(t, a, l), e !== null && (al(e, t, l), Ia(e, t, l));
    }
    function E0(t, l) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var e = t.retryLane;
        t.retryLane = e !== 0 && e < l ? e : l;
      }
    }
    function of(t, l) {
      E0(t, l), (t = t.alternate) && E0(t, l);
    }
    function z0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var l = De(t, 67108864);
        l !== null && al(l, t, 67108864), of(t, 67108864);
      }
    }
    function T0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var l = yl();
        l = nc(l);
        var e = De(t, l);
        e !== null && al(e, t, l), of(t, l);
      }
    }
    var Gn = true;
    function Nm(t, l, e, a) {
      var u = A.T;
      A.T = null;
      var n = H.p;
      try {
        H.p = 2, df(t, l, e, a);
      } finally {
        H.p = n, A.T = u;
      }
    }
    function Om(t, l, e, a) {
      var u = A.T;
      A.T = null;
      var n = H.p;
      try {
        H.p = 8, df(t, l, e, a);
      } finally {
        H.p = n, A.T = u;
      }
    }
    function df(t, l, e, a) {
      if (Gn) {
        var u = yf(a);
        if (u === null) Fi(t, l, a, Qn, e), _0(t, a);
        else if (jm(u, t, l, e, a)) a.stopPropagation();
        else if (_0(t, a), l & 4 && -1 < Mm.indexOf(t)) {
          for (; u !== null; ) {
            var n = ke(u);
            if (n !== null) switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = _e(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var r = 1 << 31 - cl(c);
                      i.entanglements[1] |= r, c &= ~r;
                    }
                    Ul(n), (it & 6) === 0 && (En = ul() + 500, mu(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = De(n, 2), i !== null && al(i, n, 2), Tn(), of(n, 2);
            }
            if (n = yf(a), n === null && Fi(t, l, a, Qn, e), n === u) break;
            u = n;
          }
          u !== null && a.stopPropagation();
        } else Fi(t, l, a, null, e);
      }
    }
    function yf(t) {
      return t = mc(t), mf(t);
    }
    var Qn = null;
    function mf(t) {
      if (Qn = null, t = we(t), t !== null) {
        var l = j(t);
        if (l === null) t = null;
        else {
          var e = l.tag;
          if (e === 13) {
            if (t = R(l), t !== null) return t;
            t = null;
          } else if (e === 31) {
            if (t = U(l), t !== null) return t;
            t = null;
          } else if (e === 3) {
            if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
            t = null;
          } else l !== t && (t = null);
        }
      }
      return Qn = t, null;
    }
    function A0(t) {
      switch (t) {
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
            case Rf:
              return 2;
            case Uf:
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
    var hf = false, be = null, Se = null, pe = null, xu = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new Map(), xe = [], Mm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function _0(t, l) {
      switch (t) {
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
          pe = null;
          break;
        case "pointerover":
        case "pointerout":
          xu.delete(l.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Eu.delete(l.pointerId);
      }
    }
    function zu(t, l, e, a, u, n) {
      return t === null || t.nativeEvent !== n ? (t = {
        blockedOn: l,
        domEventName: e,
        eventSystemFlags: a,
        nativeEvent: n,
        targetContainers: [
          u
        ]
      }, l !== null && (l = ke(l), l !== null && z0(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
    }
    function jm(t, l, e, a, u) {
      switch (l) {
        case "focusin":
          return be = zu(be, t, l, e, a, u), true;
        case "dragenter":
          return Se = zu(Se, t, l, e, a, u), true;
        case "mouseover":
          return pe = zu(pe, t, l, e, a, u), true;
        case "pointerover":
          var n = u.pointerId;
          return xu.set(n, zu(xu.get(n) || null, t, l, e, a, u)), true;
        case "gotpointercapture":
          return n = u.pointerId, Eu.set(n, zu(Eu.get(n) || null, t, l, e, a, u)), true;
      }
      return false;
    }
    function N0(t) {
      var l = we(t.target);
      if (l !== null) {
        var e = j(l);
        if (e !== null) {
          if (l = e.tag, l === 13) {
            if (l = R(e), l !== null) {
              t.blockedOn = l, Qf(t.priority, function() {
                T0(e);
              });
              return;
            }
          } else if (l === 31) {
            if (l = U(e), l !== null) {
              t.blockedOn = l, Qf(t.priority, function() {
                T0(e);
              });
              return;
            }
          } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Xn(t) {
      if (t.blockedOn !== null) return false;
      for (var l = t.targetContainers; 0 < l.length; ) {
        var e = yf(t.nativeEvent);
        if (e === null) {
          e = t.nativeEvent;
          var a = new e.constructor(e.type, e);
          yc = a, e.target.dispatchEvent(a), yc = null;
        } else return l = ke(e), l !== null && z0(l), t.blockedOn = e, false;
        l.shift();
      }
      return true;
    }
    function O0(t, l, e) {
      Xn(t) && e.delete(l);
    }
    function Dm() {
      hf = false, be !== null && Xn(be) && (be = null), Se !== null && Xn(Se) && (Se = null), pe !== null && Xn(pe) && (pe = null), xu.forEach(O0), Eu.forEach(O0);
    }
    function Zn(t, l) {
      t.blockedOn === l && (t.blockedOn = null, hf || (hf = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, Dm)));
    }
    var Ln = null;
    function M0(t) {
      Ln !== t && (Ln = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        Ln === t && (Ln = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (mf(a || e) === null) continue;
            break;
          }
          var n = ke(e);
          n !== null && (t.splice(l, 3), l -= 3, di(n, {
            pending: true,
            data: u,
            method: e.method,
            action: a
          }, a, u));
        }
      }));
    }
    function Ma(t) {
      function l(r) {
        return Zn(r, t);
      }
      be !== null && Zn(be, t), Se !== null && Zn(Se, t), pe !== null && Zn(pe, t), xu.forEach(l), Eu.forEach(l);
      for (var e = 0; e < xe.length; e++) {
        var a = xe[e];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < xe.length && (e = xe[0], e.blockedOn === null); ) N0(e), e.blockedOn === null && xe.shift();
      if (e = (t.ownerDocument || t).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[Ft] || null;
        if (typeof n == "function") c || M0(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[Ft] || null) i = c.formAction;
            else if (mf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), M0(e);
        }
      }
    }
    function j0() {
      function t(n) {
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
      function l() {
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
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
        };
      }
    }
    function gf(t) {
      this._internalRoot = t;
    }
    Vn.prototype.render = gf.prototype.render = function(t) {
      var l = this._internalRoot;
      if (l === null) throw Error(s(409));
      var e = l.current, a = yl();
      x0(e, a, t, l, null, null);
    }, Vn.prototype.unmount = gf.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var l = t.containerInfo;
        x0(t.current, 2, null, t, null, null), Tn(), l[Je] = null;
      }
    };
    function Vn(t) {
      this._internalRoot = t;
    }
    Vn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var l = Gf();
        t = {
          blockedOn: null,
          target: t,
          priority: l
        };
        for (var e = 0; e < xe.length && l !== 0 && l < xe[e].priority; e++) ;
        xe.splice(e, 0, t), e === 0 && N0(t);
      }
    };
    var D0 = o.version;
    if (D0 !== "19.2.4") throw Error(s(527, D0, "19.2.4"));
    H.findDOMNode = function(t) {
      var l = t._reactInternals;
      if (l === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
      return t = m(l), t = t !== null ? C(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var Rm = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: A,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Kn.isDisabled && Kn.supportsFiber) try {
        Ra = Kn.inject(Rm), nl = Kn;
      } catch {
      }
    }
    return Au.createRoot = function(t, l) {
      if (!z(t)) throw Error(s(299));
      var e = false, a = "", u = qr, n = Yr, c = Gr;
      return l != null && (l.unstable_strictMode === true && (e = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = S0(t, 1, false, null, null, e, a, null, u, n, c, j0), t[Je] = l.current, Wi(t), new gf(l);
    }, Au.hydrateRoot = function(t, l, e) {
      if (!z(t)) throw Error(s(299));
      var a = false, u = "", n = qr, c = Yr, i = Gr, r = null;
      return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), l = S0(t, 1, true, l, e ?? null, a, u, r, n, c, i, j0), l.context = p0(null), e = l.current, a = yl(), a = nc(a), u = ce(a), u.callback = null, ie(e, u, a), e = a, l.current.lanes = e, Ca(l, e), Ul(l), t[Je] = l.current, Wi(t), new Vn(l);
    }, Au.version = "19.2.4", Au;
  }
  var X0;
  function Xm() {
    if (X0) return Sf.exports;
    X0 = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
    }
    return f(), Sf.exports = Qm(), Sf.exports;
  }
  var Zm = Xm();
  const Lm = ({ recommendation: f, equity: o, potOdds: h }) => {
    let s = "";
    f === "FOLD" ? s = `Pot Odds (${(h * 100).toFixed(1)}%) are higher than your Equity (${(o * 100).toFixed(1)}%). Calling is -EV.` : f === "RAISE" ? s = `Strong Equity (${(o * 100).toFixed(1)}%) suggests value betting or raising for protection.` : f === "CHECK" ? s = "No bet facing you. Checking is the standard play to realize equity or trap." : s = `Equity (${(o * 100).toFixed(1)}%) justifies calling the bet given the Pot Odds (${(h * 100).toFixed(1)}%).`;
    const z = Math.min(o * 100, 100), j = Math.min(h * 100, 100);
    return v.jsxs("div", {
      className: "mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
      children: [
        v.jsx("div", {
          className: "flex items-center gap-2 mb-2",
          children: v.jsx("h3", {
            className: "text-xs font-bold text-gray-500 uppercase tracking-wider",
            children: "Decision Rationale"
          })
        }),
        v.jsx("p", {
          className: "text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",
          children: s
        }),
        v.jsxs("div", {
          className: "space-y-3",
          children: [
            v.jsxs("div", {
              children: [
                v.jsxs("div", {
                  className: "flex justify-between text-xs mb-1",
                  children: [
                    v.jsx("span", {
                      className: "font-bold text-blue-600 dark:text-blue-400",
                      children: "Equity (Win %)"
                    }),
                    v.jsxs("span", {
                      className: "font-mono",
                      children: [
                        (o * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                v.jsx("div", {
                  className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  children: v.jsx("div", {
                    className: "h-full bg-blue-500 rounded-full transition-all duration-500",
                    style: {
                      width: `${z}%`
                    }
                  })
                })
              ]
            }),
            v.jsxs("div", {
              children: [
                v.jsxs("div", {
                  className: "flex justify-between text-xs mb-1",
                  children: [
                    v.jsx("span", {
                      className: "font-bold text-orange-600 dark:text-orange-400",
                      children: "Pot Odds (Cost)"
                    }),
                    v.jsxs("span", {
                      className: "font-mono",
                      children: [
                        (h * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                v.jsx("div", {
                  className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  children: v.jsx("div", {
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
  const Vm = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W0 = (...f) => f.filter((o, h, s) => !!o && o.trim() !== "" && s.indexOf(o) === h).join(" ").trim();
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
  const Jm = Y.forwardRef(({ color: f = "currentColor", size: o = 24, strokeWidth: h = 2, absoluteStrokeWidth: s, className: z = "", children: j, iconNode: R, ...U }, x) => Y.createElement("svg", {
    ref: x,
    ...Km,
    width: o,
    height: o,
    stroke: f,
    strokeWidth: s ? Number(h) * 24 / Number(o) : h,
    className: W0("lucide", z),
    ...U
  }, [
    ...R.map(([m, C]) => Y.createElement(m, C)),
    ...Array.isArray(j) ? j : [
      j
    ]
  ]));
  const Ke = (f, o) => {
    const h = Y.forwardRef(({ className: s, ...z }, j) => Y.createElement(Jm, {
      ref: j,
      iconNode: o,
      className: W0(`lucide-${Vm(f)}`, s),
      ...z
    }));
    return h.displayName = `${f}`, h;
  };
  const wm = [
    [
      "path",
      {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
      }
    ]
  ], km = Ke("ChevronLeft", wm);
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
  ], Wm = Ke("Info", $m);
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
  ], Im = Ke("Plus", Fm);
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
  ], th = Ke("RotateCcw", Pm);
  const lh = [
    [
      "polyline",
      {
        points: "22 7 13.5 15.5 8.5 10.5 2 17",
        key: "126l90"
      }
    ],
    [
      "polyline",
      {
        points: "16 7 22 7 22 13",
        key: "kwv8wd"
      }
    ]
  ], eh = Ke("TrendingUp", lh);
  const ah = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    [
      "path",
      {
        d: "M12 9v4",
        key: "juzpu7"
      }
    ],
    [
      "path",
      {
        d: "M12 17h.01",
        key: "p32p05"
      }
    ]
  ], uh = Ke("TriangleAlert", ah);
  const nh = [
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
  ], F0 = Ke("X", nh), _u = ({ term: f, children: o, onInfoClick: h, className: s = "" }) => v.jsxs("span", {
    className: `inline-flex items-center gap-1 ${s}`,
    children: [
      o,
      v.jsx("button", {
        onClick: (z) => {
          z.stopPropagation(), h(f);
        },
        className: "p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
        children: v.jsx(Wm, {
          size: 10,
          className: "text-gray-400 hover:text-blue-500"
        })
      })
    ]
  });
  function ch(f, o, h) {
    if (o === 0) return f;
    const s = Math.max(0.1, 1 - h / (o * 2));
    return f * s;
  }
  function ih(f, o, h, s) {
    if (s !== "RAISE") return [];
    const z = [], j = Math.min(o, h);
    if (o === 0) {
      const R = [
        0.33,
        0.5,
        1
      ], U = [
        "33% Pot",
        "50% Pot",
        "100% Pot"
      ];
      R.forEach((x, m) => {
        const C = Math.round(f * x);
        z.push({
          label: U[m],
          amount: C,
          type: "percentage",
          isOverStack: C > h
        });
      });
    } else {
      [
        3,
        4
      ].forEach((x) => {
        const m = Math.round(o * x);
        z.push({
          label: `${x}x`,
          amount: m,
          type: "multiple",
          isOverStack: m > h
        });
      });
      const U = Math.round(o + (f + o + j));
      z.push({
        label: "100% Pot",
        amount: U,
        type: "percentage",
        isOverStack: U > h
      });
    }
    return z;
  }
  const fh = ({ potSize: f, facingBetSize: o, stackSize: h, recommendation: s, unit: z, onApplySizing: j }) => {
    const R = Y.useMemo(() => ih(f, o, h, s), [
      f,
      o,
      h,
      s
    ]);
    if (R.length === 0) return null;
    const U = (x) => z === "USD" ? `$${x.toLocaleString()}` : `${x.toLocaleString()} ${z}`;
    return v.jsxs("div", {
      className: "mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-2 duration-300",
      children: [
        v.jsxs("div", {
          className: "flex items-center gap-2 mb-4 px-1",
          children: [
            v.jsx(eh, {
              size: 14,
              className: "text-blue-500"
            }),
            v.jsx("h3", {
              className: "text-[10px] font-black text-gray-400 uppercase tracking-widest",
              children: "Suggested Sizing"
            })
          ]
        }),
        v.jsx("div", {
          className: "grid grid-cols-3 gap-2",
          children: R.map((x) => v.jsxs("button", {
            onClick: () => j(x.amount),
            className: `
              group relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all active:scale-95
              ${x.isOverStack ? "border-amber-100 bg-amber-50/30 dark:border-amber-900/30 dark:bg-amber-900/10" : "border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-950 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"}
            `,
            children: [
              v.jsx("span", {
                className: "text-[9px] font-black text-gray-400 uppercase mb-1 group-hover:text-blue-500 transition-colors",
                children: x.label
              }),
              v.jsx("span", {
                className: `text-sm font-black ${x.isOverStack ? "text-amber-600 dark:text-amber-400" : "text-gray-900 dark:text-gray-100"}`,
                children: U(x.amount)
              }),
              x.isOverStack && v.jsx("div", {
                className: "absolute -top-2 -right-1 bg-amber-500 text-white rounded-full p-0.5 shadow-sm",
                children: v.jsx(uh, {
                  size: 8
                })
              }),
              x.isOverStack && v.jsx("span", {
                className: "text-[8px] font-bold text-amber-500 mt-1 uppercase tracking-tighter",
                children: "Over Stack"
              })
            ]
          }, x.label))
        })
      ]
    });
  }, sh = ({ rawEquity: f, adjustedEquity: o, potOdds: h, ev: s, recommendation: z, position: j, isCalculating: R, onInfoClick: U, potSize: x, facingBetSize: m, stackSize: C, unit: O, onApplySizing: D }) => {
    const V = () => {
      switch (z) {
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
    }, w = () => {
      switch (z) {
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
    return v.jsxs("div", {
      className: `m-4 p-6 rounded-xl border-2 transition-all ${w()} shadow-sm ${R ? "opacity-50 animate-pulse" : "opacity-100"}`,
      children: [
        v.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                v.jsx("span", {
                  className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Recommendation"
                }),
                v.jsx(_u, {
                  term: "Position",
                  onInfoClick: U,
                  children: v.jsx("span", {
                    className: `text-[9px] px-1.5 py-0.5 rounded font-bold ${j === "IP" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`,
                    children: j
                  })
                })
              ]
            }),
            v.jsx("span", {
              className: `text-5xl font-black tracking-tighter ${V()}`,
              children: z
            }),
            v.jsxs("div", {
              className: "mt-6 w-full grid grid-cols-3 gap-2 divide-x divide-gray-200 dark:divide-gray-700",
              children: [
                v.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    v.jsx(_u, {
                      term: "Equity",
                      onInfoClick: U,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "Raw Eq"
                    }),
                    v.jsxs("span", {
                      className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                      children: [
                        (f * 100).toFixed(1),
                        "%"
                      ]
                    }),
                    v.jsxs("span", {
                      className: "text-[9px] text-gray-400",
                      children: [
                        "Adj: ",
                        (o * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    v.jsx(_u, {
                      term: "PotOdds",
                      onInfoClick: U,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "Pot Odds"
                    }),
                    v.jsxs("span", {
                      className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                      children: [
                        (h * 100).toFixed(1),
                        "%"
                      ]
                    }),
                    v.jsx("span", {
                      className: `text-[9px] font-bold ${o > h ? "text-green-500" : "text-red-500"}`,
                      children: o > h ? "Good" : "Bad"
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    v.jsx(_u, {
                      term: "EV",
                      onInfoClick: U,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "EV"
                    }),
                    v.jsxs("span", {
                      className: `text-xl font-bold ${s >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`,
                      children: [
                        s >= 0 ? "+" : "",
                        s.toFixed(2)
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        v.jsx(Lm, {
          recommendation: z,
          equity: o,
          potOdds: h
        }),
        v.jsx(fh, {
          potSize: x,
          facingBetSize: m,
          stackSize: C,
          recommendation: z,
          unit: O,
          onApplySizing: D
        })
      ]
    });
  };
  function rh(f, o) {
    return f * 4 + o;
  }
  function oh(f) {
    return Math.floor(f / 4);
  }
  function dh(f) {
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
  function yh(f) {
    return Fn[oh(f)] + Of[dh(f)];
  }
  function Z0(f) {
    const o = Fn.indexOf(f[0]), h = Of.indexOf(f[1]);
    if (o === -1 || h === -1) throw new Error(`Invalid card string: ${f}`);
    return rh(o, h);
  }
  var I0 = $0();
  const mh = ({ selectedCards: f, onSelect: o, onClose: h, isOpen: s }) => {
    const [z, j] = Y.useState("rank"), [R, U] = Y.useState(null);
    if (Y.useEffect(() => {
      s && (j("rank"), U(null));
    }, [
      s
    ]), !s) return null;
    const x = [
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
    ], m = [
      ...Fn
    ].reverse(), C = (D) => {
      U(D), j("suit");
    }, O = (D) => {
      R && o(`${R}${D}`);
    };
    return I0.createPortal(v.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md",
      onClick: h,
      children: v.jsxs("div", {
        className: "bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col transition-all transform scale-100",
        onClick: (D) => D.stopPropagation(),
        children: [
          v.jsxs("div", {
            className: "flex justify-between items-center p-5 border-b border-gray-100 dark:border-gray-800",
            children: [
              v.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  z === "suit" && v.jsx("button", {
                    onClick: () => j("rank"),
                    className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500",
                    children: v.jsx(km, {
                      size: 20
                    })
                  }),
                  v.jsx("h2", {
                    className: "text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight",
                    children: z === "rank" ? "Select Rank" : `Select Suit for ${R}`
                  })
                ]
              }),
              v.jsx("button", {
                onClick: h,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                children: v.jsx(F0, {
                  size: 20,
                  className: "text-gray-400"
                })
              })
            ]
          }),
          v.jsx("div", {
            className: "p-6",
            children: z === "rank" ? v.jsx("div", {
              className: "grid grid-cols-4 gap-3",
              children: m.map((D) => v.jsx("button", {
                onClick: () => C(D),
                className: "aspect-square rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex items-center justify-center text-xl font-black text-gray-900 dark:text-gray-100 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all active:scale-90",
                children: D
              }, D))
            }) : v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: x.map((D) => {
                const V = f.includes(`${R}${D.name}`);
                return v.jsxs("button", {
                  onClick: () => !V && O(D.name),
                  disabled: V,
                  className: `
                      flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all active:scale-95
                      ${V ? "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-30 cursor-not-allowed" : "bg-gray-50 dark:bg-gray-950 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"}
                    `,
                  children: [
                    v.jsx("span", {
                      className: `text-4xl mb-1 ${D.color}`,
                      children: D.label
                    }),
                    v.jsx("span", {
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
  }, hh = [
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
  ], gh = (f) => {
    const o = Math.floor(f / 4), h = f % 4;
    return hh[o] + P0[h];
  }, td = (f) => P0[f], ld = (f) => f === 1 || f === 2 ? "text-red-500" : "text-slate-900 dark:text-slate-100", vh = ({ suggestions: f, selectedIndex: o, onSelect: h }) => f.length === 0 ? null : v.jsx("div", {
    className: "absolute -top-14 left-1/2 -translate-x-1/2 flex gap-1 p-1.5 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200",
    children: f.map((s, z) => {
      const j = s[1], R = [
        "c",
        "d",
        "h",
        "s"
      ].indexOf(j), U = td(R), x = ld(R), m = s[0];
      return v.jsxs("button", {
        onClick: (C) => {
          C.stopPropagation(), h(s);
        },
        className: `
              w-10 h-10 rounded-lg flex flex-col items-center justify-center transition-all
              ${z === o ? "bg-blue-500 text-white scale-110 shadow-lg" : "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"}
            `,
        children: [
          v.jsx("span", {
            className: "text-[10px] font-black leading-none",
            children: m
          }),
          v.jsx("span", {
            className: `text-xl leading-none ${z === o ? "text-white" : x}`,
            children: U
          })
        ]
      }, s);
    })
  }), zf = ({ id: f, card: o, label: h, onClick: s, onKeyDown: z, onBlur: j, isFocused: R, className: U = "", buffer: x, suggestions: m = [], selectedIndex: C = 0, onConfirmSuggestion: O }) => {
    const D = Y.useRef(null), V = o !== void 0 ? o % 4 : 0, w = o !== void 0 ? td(V) : null, ft = o !== void 0 ? ld(V) : "", Ht = o !== void 0 ? gh(o).slice(0, -1) : "";
    return Y.useEffect(() => {
      R && D.current && D.current.focus();
    }, [
      R
    ]), v.jsxs("div", {
      ref: D,
      tabIndex: 0,
      id: f,
      onClick: s,
      onKeyDown: z,
      onBlur: j,
      className: `
        relative w-14 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all outline-none
        ${o !== void 0 ? "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600" : "bg-gray-100 border-dashed border-gray-300 dark:bg-gray-900 dark:border-gray-700"}
        ${R ? "ring-2 ring-blue-500 border-blue-500 scale-105 z-10 shadow-lg" : "active:scale-95"}
        ${U}
      `,
      children: [
        R && v.jsx(vh, {
          suggestions: m,
          selectedIndex: C,
          onSelect: () => {
            O && O();
          }
        }),
        o !== void 0 ? v.jsxs(v.Fragment, {
          children: [
            v.jsx("span", {
              className: "text-lg font-bold text-gray-900 dark:text-gray-100",
              children: Ht
            }),
            v.jsx("span", {
              className: `text-2xl leading-none ${ft}`,
              children: w
            })
          ]
        }) : v.jsxs(v.Fragment, {
          children: [
            v.jsx("span", {
              className: "text-[10px] text-gray-400 font-bold uppercase",
              children: h
            }),
            R && x && v.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 rounded-lg",
              children: v.jsx("span", {
                className: "text-xl font-black text-blue-600 dark:text-blue-400 animate-pulse uppercase",
                children: x
              })
            })
          ]
        })
      ]
    });
  }, bh = () => {
    const [f, o] = Y.useState(false), [h, s] = Y.useState(null), [z, j] = Y.useState(null), [R, U] = Y.useState(null), x = Y.useCallback((O) => {
      s(O), o(true);
    }, []), m = Y.useCallback(() => {
      o(false), s(null);
    }, []), C = Y.useCallback(() => U(null), []);
    return {
      isOpen: f,
      activeSlotIndex: h,
      openGrid: x,
      closeGrid: m,
      activeSlotId: z,
      setActiveSlotId: j,
      lastTypedCard: R,
      setLastTypedCard: U,
      clearLastTypedCard: C
    };
  }, Sh = {
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
    let o = null, h = null;
    return f.startsWith("10") ? (o = "T", f.length > 2 && (h = L0[f[2]] || null)) : (o = Sh[f[0]] || null, f.length > 1 && (h = L0[f[1]] || null)), {
      rank: o,
      suit: h
    };
  }
  function ph(f, o) {
    return Fn.includes(f) ? Of.filter((h) => !o.includes(`${f}${h}`)) : [];
  }
  const xh = (f, o) => {
    const [h, s] = Y.useState(""), [z, j] = Y.useState(0), R = Y.useMemo(() => {
      const { rank: C } = V0(h);
      return C ? ph(C, o).map((D) => `${C}${D}`) : [];
    }, [
      h,
      o
    ]);
    Y.useEffect(() => {
      j(0);
    }, [
      R.length
    ]);
    const U = Y.useCallback((C) => {
      /^[a-zA-Z0-9]$/.test(C) && s((O) => {
        const D = O + C, { rank: V, suit: w } = V0(D);
        if (V && w) {
          const ft = `${V}${w}`;
          if (!o.includes(ft)) return f(ft), "";
        }
        return D.length > 3 || D.length > 0 && !V && D !== "1" ? "" : D;
      });
    }, [
      f,
      o
    ]), x = Y.useCallback(() => s(""), []), m = Y.useCallback(() => {
      R[z] && (f(R[z]), x());
    }, [
      R,
      z,
      f,
      x
    ]);
    return {
      buffer: h,
      suggestions: R,
      selectedIndex: z,
      setSelectedIndex: j,
      updateBuffer: U,
      clearBuffer: x,
      onConfirmSuggestion: m
    };
  }, Eh = ({ holeCards: f, boardCards: o, onSelectCard: h, onClear: s }) => {
    const { isOpen: z, activeSlotIndex: j, openGrid: R, closeGrid: U, activeSlotId: x, setActiveSlotId: m } = bh(), C = Y.useMemo(() => [
      ...f,
      ...o
    ].filter((K) => K !== void 0).map(yh), [
      f,
      o
    ]), O = Y.useCallback((K) => {
      if (x === null) return;
      const X = Z0(K), [I, qt] = x.split("-"), Jt = parseInt(qt);
      h(I === "hole" ? "hole" : "board", Jt, X), I === "hole" && Jt === 0 ? m("hole-1") : I === "hole" && Jt === 1 ? m("board-0") : I === "board" && Jt < 4 ? m(`board-${Jt + 1}`) : m(null);
    }, [
      x,
      h,
      m
    ]), { buffer: D, suggestions: V, selectedIndex: w, setSelectedIndex: ft, updateBuffer: Ht, clearBuffer: Et, onConfirmSuggestion: Bt } = xh(O, C), bt = (K, X) => {
      const I = `${K}-${X}`;
      m(I), Et(), R(K === "hole" ? X : X + 2);
    }, At = (K) => {
      if (K.key === "Escape") m(null), Et();
      else if (K.key === "Backspace") {
        if (x) {
          const [X, I] = x.split("-");
          h(X, parseInt(I), null), Et();
        }
      } else K.key === "ArrowRight" ? (ft((X) => (X + 1) % V.length), K.preventDefault()) : K.key === "ArrowLeft" ? (ft((X) => (X - 1 + V.length) % V.length), K.preventDefault()) : K.key === "Enter" ? V.length > 0 && (Bt(), K.preventDefault()) : K.key.length === 1 && Ht(K.key);
    }, Qt = (K) => {
      if (j === null) return;
      const X = Z0(K);
      j < 2 ? h("hole", j, X) : h("board", j - 2, X), U(), m(null);
    };
    return v.jsxs("div", {
      className: "flex flex-col gap-4 p-4",
      children: [
        v.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            v.jsx("h3", {
              className: "text-xs font-bold text-gray-500 uppercase",
              children: "Hole Cards"
            }),
            v.jsx("button", {
              onClick: s,
              className: "text-[10px] text-blue-500 font-bold uppercase",
              children: "Clear All"
            })
          ]
        }),
        v.jsxs("div", {
          className: "flex gap-2",
          children: [
            v.jsx(zf, {
              id: "hole-0",
              card: f[0],
              label: "H1",
              onClick: () => bt("hole", 0),
              onKeyDown: At,
              isFocused: x === "hole-0",
              buffer: x === "hole-0" ? D : void 0,
              suggestions: x === "hole-0" ? V : [],
              selectedIndex: w,
              onConfirmSuggestion: Bt,
              className: "hole-card-slot"
            }),
            v.jsx(zf, {
              id: "hole-1",
              card: f[1],
              label: "H2",
              onClick: () => bt("hole", 1),
              onKeyDown: At,
              isFocused: x === "hole-1",
              buffer: x === "hole-1" ? D : void 0,
              suggestions: x === "hole-1" ? V : [],
              selectedIndex: w,
              onConfirmSuggestion: Bt,
              className: "hole-card-slot"
            })
          ]
        }),
        v.jsx("h3", {
          className: "text-xs font-bold text-gray-500 uppercase mt-2",
          children: "Board Cards"
        }),
        v.jsx("div", {
          className: "flex gap-2",
          children: [
            0,
            1,
            2,
            3,
            4
          ].map((K) => v.jsx(zf, {
            id: `board-${K}`,
            card: o[K],
            label: `B${K + 1}`,
            onClick: () => bt("board", K),
            onKeyDown: At,
            isFocused: x === `board-${K}`,
            buffer: x === `board-${K}` ? D : void 0,
            suggestions: x === `board-${K}` ? V : [],
            selectedIndex: w,
            onConfirmSuggestion: Bt,
            className: "board-card-slot"
          }, K))
        }),
        v.jsx(mh, {
          isOpen: z,
          onClose: U,
          selectedCards: C,
          onSelect: Qt
        })
      ]
    });
  }, K0 = ({ label: f, value: o, onChange: h, onIncrement: s, onReset: z }) => {
    const j = [
      10,
      20,
      50
    ];
    return v.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        v.jsx("div", {
          className: "flex justify-between items-center",
          children: v.jsx("label", {
            className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
            children: f
          })
        }),
        v.jsx("div", {
          className: "flex items-center gap-2",
          children: v.jsxs("div", {
            className: "relative flex-1",
            children: [
              v.jsx("input", {
                type: "number",
                inputMode: "decimal",
                value: o === 0 ? "" : o,
                onChange: (R) => h(parseFloat(R.target.value) || 0),
                placeholder: "0",
                className: "w-full border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl p-3 pr-10 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100 transition-all"
              }),
              v.jsx("button", {
                onClick: z,
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-red-500 transition-colors",
                children: v.jsx(th, {
                  size: 18
                })
              })
            ]
          })
        }),
        v.jsx("div", {
          className: "flex gap-2",
          children: j.map((R) => v.jsxs("button", {
            onClick: () => s(R),
            className: "flex-1 flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 py-2 rounded-lg text-xs font-black transition-all active:scale-95 border border-gray-200 dark:border-gray-700 hover:border-blue-400",
            children: [
              v.jsx(Im, {
                size: 12
              }),
              R
            ]
          }, R))
        })
      ]
    });
  }, zh = [
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
  ], Th = ({ onSelectRatio: f, selectedRatio: o }) => v.jsx("div", {
    className: "grid grid-cols-6 gap-1 my-2",
    children: zh.map((h) => v.jsx("button", {
      onClick: () => f(h.ratio),
      className: `
            px-1 py-2 text-[10px] font-bold uppercase rounded transition-colors
            ${o === h.ratio ? "bg-blue-600 text-white shadow-inner" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"}
          `,
      children: h.label
    }, h.label))
  }), Ah = ({ potSize: f, facingBet: o, onUpdatePot: h, onUpdateBet: s, onIncrementPot: z, onIncrementBet: j, onResetPot: R, onResetBet: U, selectedRatio: x, onSelectRatio: m }) => v.jsxs("div", {
    className: "p-4 flex flex-col gap-6",
    children: [
      v.jsxs("div", {
        className: "flex flex-col gap-6 bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-2xl border border-gray-100 dark:border-gray-800",
        children: [
          v.jsx(K0, {
            label: "Current Pot ($)",
            value: f,
            onChange: h,
            onIncrement: z,
            onReset: R
          }),
          v.jsx(K0, {
            label: "Facing Bet ($)",
            value: o,
            onChange: s,
            onIncrement: j,
            onReset: U
          })
        ]
      }),
      v.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          v.jsx("label", {
            className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider px-1",
            children: "Facing Bet Ratio"
          }),
          v.jsx(Th, {
            onSelectRatio: m,
            selectedRatio: x
          })
        ]
      })
    ]
  }), _h = {
    Tight: "Tight",
    Loose: "Loose",
    Random: "Random"
  }, Mf = [];
  for (let f = 0; f < 52; f++) for (let o = f + 1; o < 52; o++) Mf.push([
    f,
    o
  ]);
  const Af = new Array(1326).fill(0);
  Mf.forEach(([f, o], h) => {
    const s = Math.floor(f / 4), z = Math.floor(o / 4), j = f % 4, R = o % 4, [U, x] = s > z ? [
      s,
      z
    ] : [
      z,
      s
    ];
    let m = U * 2 + x;
    s === z && (m += 52), j === R && (m += 4), Af[h] = m;
  });
  Array.from({
    length: 1326
  }, (f, o) => o).sort((f, o) => Af[o] - Af[f]);
  const J0 = new Int32Array(2704).fill(-1);
  Mf.forEach(([f, o], h) => {
    J0[f * 52 + o] = h, J0[o * 52 + f] = h;
  });
  const Nh = ({ count: f, rangePreset: o, onCountChange: h, onRangeChange: s, onInfoClick: z }) => v.jsxs("div", {
    className: "p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
    children: [
      v.jsxs("div", {
        className: "flex justify-between items-center mb-4",
        children: [
          v.jsx("label", {
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Opponents"
          }),
          v.jsxs("div", {
            className: "flex gap-2",
            children: [
              v.jsx("button", {
                onClick: () => h(Math.max(1, f - 1)),
                className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold",
                children: "-"
              }),
              v.jsx("span", {
                className: "text-lg font-bold w-4 text-center text-gray-800 dark:text-gray-100",
                children: f
              }),
              v.jsx("button", {
                onClick: () => h(Math.min(9, f + 1)),
                className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold",
                children: "+"
              })
            ]
          })
        ]
      }),
      v.jsxs("div", {
        className: "flex justify-between items-center",
        children: [
          v.jsx(_u, {
            term: "Ranges",
            onInfoClick: z,
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Range"
          }),
          v.jsx("div", {
            className: "flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1",
            children: Object.keys(_h).map((j) => v.jsx("button", {
              onClick: () => s(j),
              className: `text-[10px] px-3 py-1.5 rounded-md font-bold transition-all ${o === j ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`,
              children: j
            }, j))
          })
        ]
      })
    ]
  }), ed = "optimalbet_", Oh = (f, o) => {
    try {
      localStorage.setItem(ed + f, JSON.stringify(o));
    } catch (h) {
      console.error("Error saving state to localStorage", h);
    }
  }, Te = (f) => {
    try {
      const o = localStorage.getItem(ed + f);
      return o ? JSON.parse(o) : null;
    } catch (o) {
      return console.error("Error loading state from localStorage", o), null;
    }
  }, Mh = () => {
    const [f, o] = Y.useState(Te("hole_cards") || []), [h, s] = Y.useState(Te("board_cards") || []), z = Y.useCallback((U) => {
      if (f.includes(U)) {
        o((x) => x.filter((m) => m !== U));
        return;
      }
      if (h.includes(U)) {
        s((x) => x.filter((m) => m !== U));
        return;
      }
      f.length < 2 ? o((x) => [
        ...x,
        U
      ]) : h.length < 5 && s((x) => [
        ...x,
        U
      ]);
    }, [
      f,
      h
    ]), j = Y.useCallback(() => {
      o([]), s([]);
    }, []), R = Y.useCallback((U, x, m) => {
      U === "hole" ? o((C) => {
        const O = [
          ...C
        ];
        return m === null ? O.splice(x, 1) : O[x] = m, O.filter((D) => D !== void 0);
      }) : s((C) => {
        const O = [
          ...C
        ];
        return m === null ? O.splice(x, 1) : O[x] = m, O.filter((D) => D !== void 0);
      });
    }, []);
    return Y.useMemo(() => ({
      holeCards: f,
      boardCards: h,
      toggleCard: z,
      setCardAt: R,
      clearHand: j
    }), [
      f,
      h,
      z,
      R,
      j
    ]);
  }, jh = () => {
    const [f, o] = Y.useState(Te("pot_size") || 0), [h, s] = Y.useState(Te("facing_bet") || 0), [z, j] = Y.useState(Te("stack_size") || 1e3), [R, U] = Y.useState(Te("is_ip") ?? true), [x, m] = Y.useState(Te("unit") || "USD"), [C, O] = Y.useState(Te("opponents") || [
      {
        id: "1",
        rangePreset: "Random",
        rangePercentage: 1
      }
    ]), [D, V] = Y.useState("manual"), [w, ft] = Y.useState(null), Ht = Y.useCallback((I) => {
      o(I), D === "ratio" && w !== null && s(I * w);
    }, [
      D,
      w
    ]), Et = Y.useCallback((I) => {
      s(I), V("manual"), ft(null);
    }, []), Bt = Y.useCallback((I) => {
      ft(I), V("ratio"), s(f * I);
    }, [
      f
    ]), bt = 999999, At = Y.useCallback((I) => {
      o((qt) => Math.min(bt, Math.max(0, qt + I)));
    }, []), Qt = Y.useCallback((I) => {
      s((qt) => Math.min(bt, Math.max(0, qt + I))), V("manual"), ft(null);
    }, []), K = Y.useCallback(() => o(0), []), X = Y.useCallback(() => s(0), []);
    return Y.useMemo(() => ({
      potSize: f,
      setPotSize: Ht,
      facingBet: h,
      setFacingBet: Et,
      stackSize: z,
      setStackSize: j,
      isIP: R,
      setIsIP: U,
      unit: x,
      setUnit: m,
      opponents: C,
      setOpponents: O,
      inputMode: D,
      selectedRatio: w,
      setRatio: Bt,
      incrementPot: At,
      incrementFacing: Qt,
      resetPot: K,
      resetFacing: X
    }), [
      f,
      Ht,
      h,
      Et,
      z,
      R,
      x,
      C,
      D,
      w,
      Bt,
      At,
      Qt,
      K,
      X
    ]);
  }, ze = (f, o) => {
    Y.useEffect(() => {
      Oh(f, o);
    }, [
      f,
      o
    ]);
  }, Dh = () => {
    const f = Mh(), o = jh();
    return ze("hole_cards", f.holeCards), ze("board_cards", f.boardCards), ze("pot_size", o.potSize), ze("facing_bet", o.facingBet), ze("stack_size", o.stackSize), ze("is_ip", o.isIP), ze("unit", o.unit), ze("opponents", o.opponents), Y.useMemo(() => ({
      ...f,
      ...o
    }), [
      f,
      o
    ]);
  };
  const ad = /* @__PURE__ */ Symbol("Comlink.proxy"), Rh = /* @__PURE__ */ Symbol("Comlink.endpoint"), Uh = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), Tf = /* @__PURE__ */ Symbol("Comlink.finalizer"), wn = /* @__PURE__ */ Symbol("Comlink.thrown"), ud = (f) => typeof f == "object" && f !== null || typeof f == "function", Ch = {
    canHandle: (f) => ud(f) && f[ad],
    serialize(f) {
      const { port1: o, port2: h } = new MessageChannel();
      return cd(f, o), [
        h,
        [
          h
        ]
      ];
    },
    deserialize(f) {
      return f.start(), fd(f);
    }
  }, Hh = {
    canHandle: (f) => ud(f) && wn in f,
    serialize({ value: f }) {
      let o;
      return f instanceof Error ? o = {
        isError: true,
        value: {
          message: f.message,
          name: f.name,
          stack: f.stack
        }
      } : o = {
        isError: false,
        value: f
      }, [
        o,
        []
      ];
    },
    deserialize(f) {
      throw f.isError ? Object.assign(new Error(f.value.message), f.value) : f.value;
    }
  }, nd = /* @__PURE__ */ new Map([
    [
      "proxy",
      Ch
    ],
    [
      "throw",
      Hh
    ]
  ]);
  function Bh(f, o) {
    for (const h of f) if (o === h || h === "*" || h instanceof RegExp && h.test(o)) return true;
    return false;
  }
  function cd(f, o = globalThis, h = [
    "*"
  ]) {
    o.addEventListener("message", function s(z) {
      if (!z || !z.data) return;
      if (!Bh(h, z.origin)) {
        console.warn(`Invalid origin '${z.origin}' for comlink proxy`);
        return;
      }
      const { id: j, type: R, path: U } = Object.assign({
        path: []
      }, z.data), x = (z.data.argumentList || []).map(Ve);
      let m;
      try {
        const C = U.slice(0, -1).reduce((D, V) => D[V], f), O = U.reduce((D, V) => D[V], f);
        switch (R) {
          case "GET":
            m = O;
            break;
          case "SET":
            C[U.slice(-1)[0]] = Ve(z.data.value), m = true;
            break;
          case "APPLY":
            m = O.apply(C, x);
            break;
          case "CONSTRUCT":
            {
              const D = new O(...x);
              m = Zh(D);
            }
            break;
          case "ENDPOINT":
            {
              const { port1: D, port2: V } = new MessageChannel();
              cd(f, V), m = Xh(D, [
                D
              ]);
            }
            break;
          case "RELEASE":
            m = void 0;
            break;
          default:
            return;
        }
      } catch (C) {
        m = {
          value: C,
          [wn]: 0
        };
      }
      Promise.resolve(m).catch((C) => ({
        value: C,
        [wn]: 0
      })).then((C) => {
        const [O, D] = Wn(C);
        o.postMessage(Object.assign(Object.assign({}, O), {
          id: j
        }), D), R === "RELEASE" && (o.removeEventListener("message", s), id(o), Tf in f && typeof f[Tf] == "function" && f[Tf]());
      }).catch((C) => {
        const [O, D] = Wn({
          value: new TypeError("Unserializable return value"),
          [wn]: 0
        });
        o.postMessage(Object.assign(Object.assign({}, O), {
          id: j
        }), D);
      });
    }), o.start && o.start();
  }
  function qh(f) {
    return f.constructor.name === "MessagePort";
  }
  function id(f) {
    qh(f) && f.close();
  }
  function fd(f, o) {
    const h = /* @__PURE__ */ new Map();
    return f.addEventListener("message", function(z) {
      const { data: j } = z;
      if (!j || !j.id) return;
      const R = h.get(j.id);
      if (R) try {
        R(j);
      } finally {
        h.delete(j.id);
      }
    }), _f(f, h, [], o);
  }
  function Jn(f) {
    if (f) throw new Error("Proxy has been released and is not useable");
  }
  function sd(f) {
    return ja(f, /* @__PURE__ */ new Map(), {
      type: "RELEASE"
    }).then(() => {
      id(f);
    });
  }
  const kn = /* @__PURE__ */ new WeakMap(), $n = "FinalizationRegistry" in globalThis && new FinalizationRegistry((f) => {
    const o = (kn.get(f) || 0) - 1;
    kn.set(f, o), o === 0 && sd(f);
  });
  function Yh(f, o) {
    const h = (kn.get(o) || 0) + 1;
    kn.set(o, h), $n && $n.register(f, o, f);
  }
  function Gh(f) {
    $n && $n.unregister(f);
  }
  function _f(f, o, h = [], s = function() {
  }) {
    let z = false;
    const j = new Proxy(s, {
      get(R, U) {
        if (Jn(z), U === Uh) return () => {
          Gh(j), sd(f), o.clear(), z = true;
        };
        if (U === "then") {
          if (h.length === 0) return {
            then: () => j
          };
          const x = ja(f, o, {
            type: "GET",
            path: h.map((m) => m.toString())
          }).then(Ve);
          return x.then.bind(x);
        }
        return _f(f, o, [
          ...h,
          U
        ]);
      },
      set(R, U, x) {
        Jn(z);
        const [m, C] = Wn(x);
        return ja(f, o, {
          type: "SET",
          path: [
            ...h,
            U
          ].map((O) => O.toString()),
          value: m
        }, C).then(Ve);
      },
      apply(R, U, x) {
        Jn(z);
        const m = h[h.length - 1];
        if (m === Rh) return ja(f, o, {
          type: "ENDPOINT"
        }).then(Ve);
        if (m === "bind") return _f(f, o, h.slice(0, -1));
        const [C, O] = w0(x);
        return ja(f, o, {
          type: "APPLY",
          path: h.map((D) => D.toString()),
          argumentList: C
        }, O).then(Ve);
      },
      construct(R, U) {
        Jn(z);
        const [x, m] = w0(U);
        return ja(f, o, {
          type: "CONSTRUCT",
          path: h.map((C) => C.toString()),
          argumentList: x
        }, m).then(Ve);
      }
    });
    return Yh(j, f), j;
  }
  function Qh(f) {
    return Array.prototype.concat.apply([], f);
  }
  function w0(f) {
    const o = f.map(Wn);
    return [
      o.map((h) => h[0]),
      Qh(o.map((h) => h[1]))
    ];
  }
  const rd = /* @__PURE__ */ new WeakMap();
  function Xh(f, o) {
    return rd.set(f, o), f;
  }
  function Zh(f) {
    return Object.assign(f, {
      [ad]: true
    });
  }
  function Wn(f) {
    for (const [o, h] of nd) if (h.canHandle(f)) {
      const [s, z] = h.serialize(f);
      return [
        {
          type: "HANDLER",
          name: o,
          value: s
        },
        z
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
  function ja(f, o, h, s) {
    return new Promise((z) => {
      const j = Lh();
      o.set(j, z), f.start && f.start(), f.postMessage(Object.assign({
        id: j
      }, h), s);
    });
  }
  function Lh() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
  }
  const Vh = ({ holeCards: f, boardCards: o, gameState: h }) => {
    const [s, z] = Y.useState(null), [j, R] = Y.useState(false), U = Y.useRef(null), x = JSON.stringify(f), m = JSON.stringify(o), C = JSON.stringify({
      pot: h.potSize,
      facing: h.facingBetSize,
      ip: h.isIP,
      opponents: h.opponents.map((D) => ({
        id: D.id,
        r: D.rangePreset
      }))
    });
    Y.useEffect(() => {
      const D = new Worker(new URL("/optimalbet/assets/worker-MGntRKig.js", import.meta.url), {
        type: "module"
      });
      return U.current = fd(D), () => D.terminate();
    }, []);
    const O = Y.useCallback(async () => {
      if (!U.current || f.length < 2) {
        z(null);
        return;
      }
      R(true);
      try {
        const D = (h.opponents || []).map((w) => ({
          ...w,
          rangePercentage: ch(w.rangePreset === "Tight" ? 0.15 : w.rangePreset === "Loose" ? 0.4 : 1, h.potSize, h.facingBetSize)
        })), V = await U.current.calculate({
          holeCards: f,
          boardCards: o,
          gameState: {
            ...h,
            opponents: D
          },
          options: {
            iterations: 1e4,
            mode: "auto"
          }
        });
        z(V);
      } catch (D) {
        console.error("Equity Engine Error:", D);
      } finally {
        R(false);
      }
    }, [
      x,
      m,
      C
    ]);
    return Y.useEffect(() => {
      const D = setTimeout(() => {
        O();
      }, 150);
      return () => clearTimeout(D);
    }, [
      O
    ]), {
      result: s,
      isCalculating: j
    };
  }, Kh = () => {
    const [f, o] = Y.useState(null), h = Y.useCallback((z) => {
      o(z);
    }, []), s = Y.useCallback(() => {
      o(null);
    }, []);
    return {
      activeTerm: f,
      isOpen: f !== null,
      openGlossary: h,
      closeGlossary: s
    };
  }, Jh = {
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
  }, wh = ({ term: f, onClose: o }) => {
    if (!f) return null;
    const h = Jh[f];
    return I0.createPortal(v.jsx("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]",
      onClick: o,
      children: v.jsx("div", {
        className: "bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all",
        onClick: (s) => s.stopPropagation(),
        children: v.jsxs("div", {
          className: "p-5",
          children: [
            v.jsxs("div", {
              className: "flex justify-between items-start mb-4",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("span", {
                      className: "text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded",
                      children: h.category
                    }),
                    v.jsx("h2", {
                      className: "text-xl font-black text-gray-900 dark:text-white mt-1",
                      children: h.title
                    })
                  ]
                }),
                v.jsx("button", {
                  onClick: o,
                  className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                  children: v.jsx(F0, {
                    size: 18,
                    className: "text-gray-400"
                  })
                })
              ]
            }),
            v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsx("p", {
                  className: "text-gray-600 dark:text-gray-300 leading-relaxed",
                  children: h.definition
                }),
                h.example && v.jsxs("div", {
                  className: "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800",
                  children: [
                    v.jsx("span", {
                      className: "text-[10px] font-bold text-gray-400 uppercase block mb-1",
                      children: "Example"
                    }),
                    v.jsxs("p", {
                      className: "text-xs text-gray-500 dark:text-gray-400 italic",
                      children: [
                        '"',
                        h.example,
                        '"'
                      ]
                    })
                  ]
                })
              ]
            }),
            v.jsx("button", {
              onClick: o,
              className: "w-full mt-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl active:scale-95 transition-all",
              children: "Got it"
            })
          ]
        })
      })
    }), document.body);
  };
  function kh() {
    var _a;
    const f = Dh(), { holeCards: o, boardCards: h, clearHand: s, setCardAt: z, potSize: j, setPotSize: R, facingBet: U, setFacingBet: x, stackSize: m, isIP: C, setIsIP: O, unit: D, setUnit: V, opponents: w, setOpponents: ft, selectedRatio: Ht, setRatio: Et, incrementPot: Bt, incrementFacing: bt, resetPot: At, resetFacing: Qt } = f, { activeTerm: K, openGlossary: X, closeGlossary: I } = Kh(), qt = Y.useMemo(() => ({
      potSize: j,
      facingBetSize: U,
      stackSize: m,
      isIP: C,
      unit: D,
      opponentCount: w.length,
      opponents: w
    }), [
      j,
      U,
      m,
      C,
      D,
      w
    ]), { result: Jt, isCalculating: ml } = Vh({
      holeCards: o,
      boardCards: h,
      gameState: qt
    });
    return v.jsxs("div", {
      className: "min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden transition-colors",
      children: [
        v.jsxs("header", {
          className: "bg-blue-700 dark:bg-blue-900 text-white p-4 shadow-md flex justify-between items-center",
          children: [
            v.jsxs("div", {
              children: [
                v.jsx("h1", {
                  className: "text-xl font-black tracking-tight uppercase",
                  children: "OptimalBet"
                }),
                v.jsx("p", {
                  className: "text-[10px] font-bold opacity-70 tracking-widest uppercase",
                  children: "Advanced Analytics"
                })
              ]
            }),
            v.jsx("button", {
              onClick: () => V((Mt) => Mt === "USD" ? "BB" : "USD"),
              className: "text-xs font-bold bg-blue-800 p-2 rounded",
              children: D
            })
          ]
        }),
        v.jsxs("main", {
          className: "flex-1 overflow-y-auto pb-24 text-[var(--text-primary)]",
          children: [
            Jt ? v.jsx(sh, {
              ...Jt,
              position: C ? "IP" : "OOP",
              isCalculating: ml,
              onInfoClick: X,
              potSize: j,
              facingBetSize: U,
              stackSize: m,
              unit: D,
              onApplySizing: x
            }) : v.jsx("div", {
              className: "p-8 text-center text-gray-400 text-sm",
              children: "Select cards to start analysis"
            }),
            v.jsxs("div", {
              className: "bg-white dark:bg-gray-900 m-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden",
              children: [
                v.jsxs("div", {
                  className: "px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",
                  children: [
                    v.jsx("span", {
                      className: "text-[10px] font-bold text-gray-400 uppercase",
                      children: "Input Dashboard"
                    }),
                    v.jsxs("button", {
                      onClick: () => O(!C),
                      className: `text-[9px] px-2 py-1 rounded font-bold ${C ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`,
                      children: [
                        "Toggle ",
                        C ? "IP" : "OOP"
                      ]
                    })
                  ]
                }),
                v.jsx(Eh, {
                  holeCards: o,
                  boardCards: h,
                  onSelectCard: z,
                  onClear: s
                }),
                v.jsx(Ah, {
                  potSize: j,
                  facingBet: U,
                  onUpdatePot: R,
                  onUpdateBet: x,
                  onIncrementPot: Bt,
                  onIncrementBet: bt,
                  onResetPot: At,
                  onResetBet: Qt,
                  selectedRatio: Ht,
                  onSelectRatio: Et
                }),
                v.jsx(Nh, {
                  count: w.length,
                  rangePreset: ((_a = w[0]) == null ? void 0 : _a.rangePreset) || "Random",
                  onCountChange: (Mt) => {
                    const _l = Array.from({
                      length: Mt
                    }, (hl, Wt) => w[Wt] || {
                      id: String(Wt + 1),
                      rangePreset: "Random",
                      rangePercentage: 1
                    });
                    ft(_l);
                  },
                  onRangeChange: (Mt) => {
                    const _l = w.map((hl) => ({
                      ...hl,
                      rangePreset: Mt
                    }));
                    ft(_l);
                  },
                  onInfoClick: X
                })
              ]
            })
          ]
        }),
        v.jsx(wh, {
          term: K,
          onClose: I
        })
      ]
    });
  }
  class $h extends Y.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        hasError: false
      });
      __publicField(this, "handleRestore", () => {
        window.location.reload();
      });
    }
    static getDerivedStateFromError(o) {
      return {
        hasError: true
      };
    }
    componentDidCatch(o, h) {
      console.error("Uncaught error:", o, h);
    }
    render() {
      return this.state.hasError ? v.jsxs("div", {
        className: "min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center p-6 text-center",
        children: [
          v.jsx("div", {
            className: "w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6",
            children: v.jsx("svg", {
              className: "w-8 h-8 text-red-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: v.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              })
            })
          }),
          v.jsx("h2", {
            className: "text-2xl font-black text-red-600 dark:text-red-500 mb-4 uppercase",
            children: "System Error"
          }),
          v.jsx("p", {
            className: "text-gray-600 dark:text-gray-400 mb-8 max-w-xs text-sm",
            children: "A calculation or UI error occurred. Your last game state has been automatically saved to LocalStorage."
          }),
          v.jsx("button", {
            onClick: this.handleRestore,
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-wider text-sm",
            children: "Restore & Reload"
          })
        ]
      }) : this.props.children;
    }
  }
  const Wh = "modulepreload", Fh = function(f) {
    return "/optimalbet/" + f;
  }, k0 = {}, Ih = function(o, h, s) {
    let z = Promise.resolve();
    if (h && h.length > 0) {
      let x = function(m) {
        return Promise.all(m.map((C) => Promise.resolve(C).then((O) => ({
          status: "fulfilled",
          value: O
        }), (O) => ({
          status: "rejected",
          reason: O
        }))));
      };
      document.getElementsByTagName("link");
      const R = document.querySelector("meta[property=csp-nonce]"), U = (R == null ? void 0 : R.nonce) || (R == null ? void 0 : R.getAttribute("nonce"));
      z = x(h.map((m) => {
        if (m = Fh(m), m in k0) return;
        k0[m] = true;
        const C = m.endsWith(".css"), O = C ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${m}"]${O}`)) return;
        const D = document.createElement("link");
        if (D.rel = C ? "stylesheet" : Wh, C || (D.as = "script"), D.crossOrigin = "", D.href = m, U && D.setAttribute("nonce", U), document.head.appendChild(D), C) return new Promise((V, w) => {
          D.addEventListener("load", V), D.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${m}`)));
        });
      }));
    }
    function j(R) {
      const U = new Event("vite:preloadError", {
        cancelable: true
      });
      if (U.payload = R, window.dispatchEvent(U), !U.defaultPrevented) throw R;
    }
    return z.then((R) => {
      for (const U of R || []) U.status === "rejected" && j(U.reason);
      return o().catch(j);
    });
  };
  function Ph(f = {}) {
    const { immediate: o = false, onNeedRefresh: h, onOfflineReady: s, onRegistered: z, onRegisteredSW: j, onRegisterError: R } = f;
    let U, x;
    const m = async (O = true) => {
      await x;
    };
    async function C() {
      if ("serviceWorker" in navigator) {
        if (U = await Ih(async () => {
          const { Workbox: O } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
          return {
            Workbox: O
          };
        }, []).then(({ Workbox: O }) => new O("/optimalbet/sw.js", {
          scope: "/optimalbet/",
          type: "classic"
        })).catch((O) => {
          R == null ? void 0 : R(O);
        }), !U) return;
        U.addEventListener("activated", (O) => {
          (O.isUpdate || O.isExternal) && window.location.reload();
        }), U.addEventListener("installed", (O) => {
          O.isUpdate || (s == null ? void 0 : s());
        }), U.register({
          immediate: o
        }).then((O) => {
          j ? j("/optimalbet/sw.js", O) : z == null ? void 0 : z(O);
        }).catch((O) => {
          R == null ? void 0 : R(O);
        });
      }
    }
    return x = C(), m;
  }
  const tg = () => {
    const f = Ph({
      onNeedRefresh() {
        confirm("New content available. Reload?") && f(true);
      },
      onOfflineReady() {
        console.log("App ready to work offline");
      }
    });
  };
  tg();
  Zm.createRoot(document.getElementById("root")).render(v.jsx(Y.StrictMode, {
    children: v.jsx($h, {
      children: v.jsx(kh, {})
    })
  }));
})();
