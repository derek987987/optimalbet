var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const m = document.createElement("link").relList;
    if (m && m.supports && m.supports("modulepreload")) return;
    for (const N of document.querySelectorAll('link[rel="modulepreload"]')) r(N);
    new MutationObserver((N) => {
      for (const D of N) if (D.type === "childList") for (const B of D.addedNodes) B.tagName === "LINK" && B.rel === "modulepreload" && r(B);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function b(N) {
      const D = {};
      return N.integrity && (D.integrity = N.integrity), N.referrerPolicy && (D.referrerPolicy = N.referrerPolicy), N.crossOrigin === "use-credentials" ? D.credentials = "include" : N.crossOrigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D;
    }
    function r(N) {
      if (N.ep) return;
      N.ep = true;
      const D = b(N);
      fetch(N.href, D);
    }
  })();
  var hf = {
    exports: {}
  }, zu = {};
  var D0;
  function Nm() {
    if (D0) return zu;
    D0 = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
    function b(r, N, D) {
      var B = null;
      if (D !== void 0 && (B = "" + D), N.key !== void 0 && (B = "" + N.key), "key" in N) {
        D = {};
        for (var U in N) U !== "key" && (D[U] = N[U]);
      } else D = N;
      return N = D.ref, {
        $$typeof: f,
        type: r,
        key: B,
        ref: N !== void 0 ? N : null,
        props: D
      };
    }
    return zu.Fragment = m, zu.jsx = b, zu.jsxs = b, zu;
  }
  var U0;
  function Mm() {
    return U0 || (U0 = 1, hf.exports = Nm()), hf.exports;
  }
  var x = Mm(), gf = {
    exports: {}
  }, L = {};
  var j0;
  function Dm() {
    if (j0) return L;
    j0 = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), B = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), R = Symbol.iterator;
    function fl(d) {
      return d === null || typeof d != "object" ? null : (d = R && d[R] || d["@@iterator"], typeof d == "function" ? d : null);
    }
    var tl = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, xl = Object.assign, Ll = {};
    function Ul(d, _, H) {
      this.props = d, this.context = _, this.refs = Ll, this.updater = H || tl;
    }
    Ul.prototype.isReactComponent = {}, Ul.prototype.setState = function(d, _) {
      if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, d, _, "setState");
    }, Ul.prototype.forceUpdate = function(d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    };
    function lt() {
    }
    lt.prototype = Ul.prototype;
    function yl(d, _, H) {
      this.props = d, this.context = _, this.refs = Ll, this.updater = H || tl;
    }
    var Vl = yl.prototype = new lt();
    Vl.constructor = yl, xl(Vl, Ul.prototype), Vl.isPureReactComponent = true;
    var dt = Array.isArray;
    function Cl() {
    }
    var k = {
      H: null,
      A: null,
      T: null,
      S: null
    }, Al = Object.prototype.hasOwnProperty;
    function Kl(d, _, H) {
      var Y = H.ref;
      return {
        $$typeof: f,
        type: d,
        key: _,
        ref: Y !== void 0 ? Y : null,
        props: H
      };
    }
    function Ut(d, _) {
      return Kl(d.type, _, d.props);
    }
    function tt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === f;
    }
    function Jl(d) {
      var _ = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + d.replace(/[=:]/g, function(H) {
        return _[H];
      });
    }
    var Te = /\/+/g;
    function jt(d, _) {
      return typeof d == "object" && d !== null && d.key != null ? Jl("" + d.key) : _.toString(36);
    }
    function zt(d) {
      switch (d.status) {
        case "fulfilled":
          return d.value;
        case "rejected":
          throw d.reason;
        default:
          switch (typeof d.status == "string" ? d.then(Cl, Cl) : (d.status = "pending", d.then(function(_) {
            d.status === "pending" && (d.status = "fulfilled", d.value = _);
          }, function(_) {
            d.status === "pending" && (d.status = "rejected", d.reason = _);
          })), d.status) {
            case "fulfilled":
              return d.value;
            case "rejected":
              throw d.reason;
          }
      }
      throw d;
    }
    function z(d, _, H, Y, V) {
      var W = typeof d;
      (W === "undefined" || W === "boolean") && (d = null);
      var nl = false;
      if (d === null) nl = true;
      else switch (W) {
        case "bigint":
        case "string":
        case "number":
          nl = true;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case m:
              nl = true;
              break;
            case j:
              return nl = d._init, z(nl(d._payload), _, H, Y, V);
          }
      }
      if (nl) return V = V(d), nl = Y === "" ? "." + jt(d, 0) : Y, dt(V) ? (H = "", nl != null && (H = nl.replace(Te, "$&/") + "/"), z(V, _, H, "", function(Da) {
        return Da;
      })) : V != null && (tt(V) && (V = Ut(V, H + (V.key == null || d && d.key === V.key ? "" : ("" + V.key).replace(Te, "$&/") + "/") + nl)), _.push(V)), 1;
      nl = 0;
      var Ql = Y === "" ? "." : Y + ":";
      if (dt(d)) for (var El = 0; El < d.length; El++) Y = d[El], W = Ql + jt(Y, El), nl += z(Y, _, H, W, V);
      else if (El = fl(d), typeof El == "function") for (d = El.call(d), El = 0; !(Y = d.next()).done; ) Y = Y.value, W = Ql + jt(Y, El++), nl += z(Y, _, H, W, V);
      else if (W === "object") {
        if (typeof d.then == "function") return z(zt(d), _, H, Y, V);
        throw _ = String(d), Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.");
      }
      return nl;
    }
    function C(d, _, H) {
      if (d == null) return d;
      var Y = [], V = 0;
      return z(d, Y, "", "", function(W) {
        return _.call(H, W, V++);
      }), Y;
    }
    function Z(d) {
      if (d._status === -1) {
        var _ = d._result;
        _ = _(), _.then(function(H) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = H);
        }, function(H) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = H);
        }), d._status === -1 && (d._status = 0, d._result = _);
      }
      if (d._status === 1) return d._result.default;
      throw d._result;
    }
    var sl = typeof reportError == "function" ? reportError : function(d) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var _ = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
          error: d
        });
        if (!window.dispatchEvent(_)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", d);
        return;
      }
      console.error(d);
    }, ml = {
      map: C,
      forEach: function(d, _, H) {
        C(d, function() {
          _.apply(this, arguments);
        }, H);
      },
      count: function(d) {
        var _ = 0;
        return C(d, function() {
          _++;
        }), _;
      },
      toArray: function(d) {
        return C(d, function(_) {
          return _;
        }) || [];
      },
      only: function(d) {
        if (!tt(d)) throw Error("React.Children.only expected to receive a single React element child.");
        return d;
      }
    };
    return L.Activity = M, L.Children = ml, L.Component = Ul, L.Fragment = b, L.Profiler = N, L.PureComponent = yl, L.StrictMode = r, L.Suspense = O, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, L.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(d) {
        return k.H.useMemoCache(d);
      }
    }, L.cache = function(d) {
      return function() {
        return d.apply(null, arguments);
      };
    }, L.cacheSignal = function() {
      return null;
    }, L.cloneElement = function(d, _, H) {
      if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
      var Y = xl({}, d.props), V = d.key;
      if (_ != null) for (W in _.key !== void 0 && (V = "" + _.key), _) !Al.call(_, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && _.ref === void 0 || (Y[W] = _[W]);
      var W = arguments.length - 2;
      if (W === 1) Y.children = H;
      else if (1 < W) {
        for (var nl = Array(W), Ql = 0; Ql < W; Ql++) nl[Ql] = arguments[Ql + 2];
        Y.children = nl;
      }
      return Kl(d.type, V, Y);
    }, L.createContext = function(d) {
      return d = {
        $$typeof: B,
        _currentValue: d,
        _currentValue2: d,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, d.Provider = d, d.Consumer = {
        $$typeof: D,
        _context: d
      }, d;
    }, L.createElement = function(d, _, H) {
      var Y, V = {}, W = null;
      if (_ != null) for (Y in _.key !== void 0 && (W = "" + _.key), _) Al.call(_, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (V[Y] = _[Y]);
      var nl = arguments.length - 2;
      if (nl === 1) V.children = H;
      else if (1 < nl) {
        for (var Ql = Array(nl), El = 0; El < nl; El++) Ql[El] = arguments[El + 2];
        V.children = Ql;
      }
      if (d && d.defaultProps) for (Y in nl = d.defaultProps, nl) V[Y] === void 0 && (V[Y] = nl[Y]);
      return Kl(d, W, V);
    }, L.createRef = function() {
      return {
        current: null
      };
    }, L.forwardRef = function(d) {
      return {
        $$typeof: U,
        render: d
      };
    }, L.isValidElement = tt, L.lazy = function(d) {
      return {
        $$typeof: j,
        _payload: {
          _status: -1,
          _result: d
        },
        _init: Z
      };
    }, L.memo = function(d, _) {
      return {
        $$typeof: h,
        type: d,
        compare: _ === void 0 ? null : _
      };
    }, L.startTransition = function(d) {
      var _ = k.T, H = {};
      k.T = H;
      try {
        var Y = d(), V = k.S;
        V !== null && V(H, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Cl, sl);
      } catch (W) {
        sl(W);
      } finally {
        _ !== null && H.types !== null && (_.types = H.types), k.T = _;
      }
    }, L.unstable_useCacheRefresh = function() {
      return k.H.useCacheRefresh();
    }, L.use = function(d) {
      return k.H.use(d);
    }, L.useActionState = function(d, _, H) {
      return k.H.useActionState(d, _, H);
    }, L.useCallback = function(d, _) {
      return k.H.useCallback(d, _);
    }, L.useContext = function(d) {
      return k.H.useContext(d);
    }, L.useDebugValue = function() {
    }, L.useDeferredValue = function(d, _) {
      return k.H.useDeferredValue(d, _);
    }, L.useEffect = function(d, _) {
      return k.H.useEffect(d, _);
    }, L.useEffectEvent = function(d) {
      return k.H.useEffectEvent(d);
    }, L.useId = function() {
      return k.H.useId();
    }, L.useImperativeHandle = function(d, _, H) {
      return k.H.useImperativeHandle(d, _, H);
    }, L.useInsertionEffect = function(d, _) {
      return k.H.useInsertionEffect(d, _);
    }, L.useLayoutEffect = function(d, _) {
      return k.H.useLayoutEffect(d, _);
    }, L.useMemo = function(d, _) {
      return k.H.useMemo(d, _);
    }, L.useOptimistic = function(d, _) {
      return k.H.useOptimistic(d, _);
    }, L.useReducer = function(d, _, H) {
      return k.H.useReducer(d, _, H);
    }, L.useRef = function(d) {
      return k.H.useRef(d);
    }, L.useState = function(d) {
      return k.H.useState(d);
    }, L.useSyncExternalStore = function(d, _, H) {
      return k.H.useSyncExternalStore(d, _, H);
    }, L.useTransition = function() {
      return k.H.useTransition();
    }, L.version = "19.2.4", L;
  }
  var R0;
  function Af() {
    return R0 || (R0 = 1, gf.exports = Dm()), gf.exports;
  }
  var w = Af(), vf = {
    exports: {}
  }, Tu = {}, bf = {
    exports: {}
  }, Sf = {};
  var C0;
  function Um() {
    return C0 || (C0 = 1, (function(f) {
      function m(z, C) {
        var Z = z.length;
        z.push(C);
        l: for (; 0 < Z; ) {
          var sl = Z - 1 >>> 1, ml = z[sl];
          if (0 < N(ml, C)) z[sl] = C, z[Z] = ml, Z = sl;
          else break l;
        }
      }
      function b(z) {
        return z.length === 0 ? null : z[0];
      }
      function r(z) {
        if (z.length === 0) return null;
        var C = z[0], Z = z.pop();
        if (Z !== C) {
          z[0] = Z;
          l: for (var sl = 0, ml = z.length, d = ml >>> 1; sl < d; ) {
            var _ = 2 * (sl + 1) - 1, H = z[_], Y = _ + 1, V = z[Y];
            if (0 > N(H, Z)) Y < ml && 0 > N(V, H) ? (z[sl] = V, z[Y] = Z, sl = Y) : (z[sl] = H, z[_] = Z, sl = _);
            else if (Y < ml && 0 > N(V, Z)) z[sl] = V, z[Y] = Z, sl = Y;
            else break l;
          }
        }
        return C;
      }
      function N(z, C) {
        var Z = z.sortIndex - C.sortIndex;
        return Z !== 0 ? Z : z.id - C.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var D = performance;
        f.unstable_now = function() {
          return D.now();
        };
      } else {
        var B = Date, U = B.now();
        f.unstable_now = function() {
          return B.now() - U;
        };
      }
      var O = [], h = [], j = 1, M = null, R = 3, fl = false, tl = false, xl = false, Ll = false, Ul = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, yl = typeof setImmediate < "u" ? setImmediate : null;
      function Vl(z) {
        for (var C = b(h); C !== null; ) {
          if (C.callback === null) r(h);
          else if (C.startTime <= z) r(h), C.sortIndex = C.expirationTime, m(O, C);
          else break;
          C = b(h);
        }
      }
      function dt(z) {
        if (xl = false, Vl(z), !tl) if (b(O) !== null) tl = true, Cl || (Cl = true, Jl());
        else {
          var C = b(h);
          C !== null && zt(dt, C.startTime - z);
        }
      }
      var Cl = false, k = -1, Al = 5, Kl = -1;
      function Ut() {
        return Ll ? true : !(f.unstable_now() - Kl < Al);
      }
      function tt() {
        if (Ll = false, Cl) {
          var z = f.unstable_now();
          Kl = z;
          var C = true;
          try {
            l: {
              tl = false, xl && (xl = false, lt(k), k = -1), fl = true;
              var Z = R;
              try {
                t: {
                  for (Vl(z), M = b(O); M !== null && !(M.expirationTime > z && Ut()); ) {
                    var sl = M.callback;
                    if (typeof sl == "function") {
                      M.callback = null, R = M.priorityLevel;
                      var ml = sl(M.expirationTime <= z);
                      if (z = f.unstable_now(), typeof ml == "function") {
                        M.callback = ml, Vl(z), C = true;
                        break t;
                      }
                      M === b(O) && r(O), Vl(z);
                    } else r(O);
                    M = b(O);
                  }
                  if (M !== null) C = true;
                  else {
                    var d = b(h);
                    d !== null && zt(dt, d.startTime - z), C = false;
                  }
                }
                break l;
              } finally {
                M = null, R = Z, fl = false;
              }
              C = void 0;
            }
          } finally {
            C ? Jl() : Cl = false;
          }
        }
      }
      var Jl;
      if (typeof yl == "function") Jl = function() {
        yl(tt);
      };
      else if (typeof MessageChannel < "u") {
        var Te = new MessageChannel(), jt = Te.port2;
        Te.port1.onmessage = tt, Jl = function() {
          jt.postMessage(null);
        };
      } else Jl = function() {
        Ul(tt, 0);
      };
      function zt(z, C) {
        k = Ul(function() {
          z(f.unstable_now());
        }, C);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(z) {
        z.callback = null;
      }, f.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Al = 0 < z ? Math.floor(1e3 / z) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return R;
      }, f.unstable_next = function(z) {
        switch (R) {
          case 1:
          case 2:
          case 3:
            var C = 3;
            break;
          default:
            C = R;
        }
        var Z = R;
        R = C;
        try {
          return z();
        } finally {
          R = Z;
        }
      }, f.unstable_requestPaint = function() {
        Ll = true;
      }, f.unstable_runWithPriority = function(z, C) {
        switch (z) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            z = 3;
        }
        var Z = R;
        R = z;
        try {
          return C();
        } finally {
          R = Z;
        }
      }, f.unstable_scheduleCallback = function(z, C, Z) {
        var sl = f.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? sl + Z : sl) : Z = sl, z) {
          case 1:
            var ml = -1;
            break;
          case 2:
            ml = 250;
            break;
          case 5:
            ml = 1073741823;
            break;
          case 4:
            ml = 1e4;
            break;
          default:
            ml = 5e3;
        }
        return ml = Z + ml, z = {
          id: j++,
          callback: C,
          priorityLevel: z,
          startTime: Z,
          expirationTime: ml,
          sortIndex: -1
        }, Z > sl ? (z.sortIndex = Z, m(h, z), b(O) === null && z === b(h) && (xl ? (lt(k), k = -1) : xl = true, zt(dt, Z - sl))) : (z.sortIndex = ml, m(O, z), tl || fl || (tl = true, Cl || (Cl = true, Jl()))), z;
      }, f.unstable_shouldYield = Ut, f.unstable_wrapCallback = function(z) {
        var C = R;
        return function() {
          var Z = R;
          R = C;
          try {
            return z.apply(this, arguments);
          } finally {
            R = Z;
          }
        };
      };
    })(Sf)), Sf;
  }
  var H0;
  function jm() {
    return H0 || (H0 = 1, bf.exports = Um()), bf.exports;
  }
  var pf = {
    exports: {}
  }, Xl = {};
  var B0;
  function Rm() {
    if (B0) return Xl;
    B0 = 1;
    var f = Af();
    function m(O) {
      var h = "https://react.dev/errors/" + O;
      if (1 < arguments.length) {
        h += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var j = 2; j < arguments.length; j++) h += "&args[]=" + encodeURIComponent(arguments[j]);
      }
      return "Minified React error #" + O + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function b() {
    }
    var r = {
      d: {
        f: b,
        r: function() {
          throw Error(m(522));
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b
      },
      p: 0,
      findDOMNode: null
    }, N = /* @__PURE__ */ Symbol.for("react.portal");
    function D(O, h, j) {
      var M = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: N,
        key: M == null ? null : "" + M,
        children: O,
        containerInfo: h,
        implementation: j
      };
    }
    var B = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function U(O, h) {
      if (O === "font") return "";
      if (typeof h == "string") return h === "use-credentials" ? h : "";
    }
    return Xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Xl.createPortal = function(O, h) {
      var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(m(299));
      return D(O, h, null, j);
    }, Xl.flushSync = function(O) {
      var h = B.T, j = r.p;
      try {
        if (B.T = null, r.p = 2, O) return O();
      } finally {
        B.T = h, r.p = j, r.d.f();
      }
    }, Xl.preconnect = function(O, h) {
      typeof O == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(O, h));
    }, Xl.prefetchDNS = function(O) {
      typeof O == "string" && r.d.D(O);
    }, Xl.preinit = function(O, h) {
      if (typeof O == "string" && h && typeof h.as == "string") {
        var j = h.as, M = U(j, h.crossOrigin), R = typeof h.integrity == "string" ? h.integrity : void 0, fl = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        j === "style" ? r.d.S(O, typeof h.precedence == "string" ? h.precedence : void 0, {
          crossOrigin: M,
          integrity: R,
          fetchPriority: fl
        }) : j === "script" && r.d.X(O, {
          crossOrigin: M,
          integrity: R,
          fetchPriority: fl,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0
        });
      }
    }, Xl.preinitModule = function(O, h) {
      if (typeof O == "string") if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var j = U(h.as, h.crossOrigin);
          r.d.M(O, {
            crossOrigin: j,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(O);
    }, Xl.preload = function(O, h) {
      if (typeof O == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var j = h.as, M = U(j, h.crossOrigin);
        r.d.L(O, j, {
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
    }, Xl.preloadModule = function(O, h) {
      if (typeof O == "string") if (h) {
        var j = U(h.as, h.crossOrigin);
        r.d.m(O, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: j,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(O);
    }, Xl.requestFormReset = function(O) {
      r.d.r(O);
    }, Xl.unstable_batchedUpdates = function(O, h) {
      return O(h);
    }, Xl.useFormState = function(O, h, j) {
      return B.H.useFormState(O, h, j);
    }, Xl.useFormStatus = function() {
      return B.H.useHostTransitionStatus();
    }, Xl.version = "19.2.4", Xl;
  }
  var q0;
  function L0() {
    if (q0) return pf.exports;
    q0 = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (m) {
        console.error(m);
      }
    }
    return f(), pf.exports = Rm(), pf.exports;
  }
  var Y0;
  function Cm() {
    if (Y0) return Tu;
    Y0 = 1;
    var f = jm(), m = Af(), b = L0();
    function r(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function N(l) {
      return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
    }
    function D(l) {
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
    function B(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function U(l) {
      if (l.tag === 31) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function O(l) {
      if (D(l) !== l) throw Error(r(188));
    }
    function h(l) {
      var t = l.alternate;
      if (!t) {
        if (t = D(l), t === null) throw Error(r(188));
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
            if (n === e) return O(u), l;
            if (n === a) return O(u), t;
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
    function j(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (t = j(l), t !== null) return t;
        l = l.sibling;
      }
      return null;
    }
    var M = Object.assign, R = /* @__PURE__ */ Symbol.for("react.element"), fl = /* @__PURE__ */ Symbol.for("react.transitional.element"), tl = /* @__PURE__ */ Symbol.for("react.portal"), xl = /* @__PURE__ */ Symbol.for("react.fragment"), Ll = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ul = /* @__PURE__ */ Symbol.for("react.profiler"), lt = /* @__PURE__ */ Symbol.for("react.consumer"), yl = /* @__PURE__ */ Symbol.for("react.context"), Vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), dt = /* @__PURE__ */ Symbol.for("react.suspense"), Cl = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), Al = /* @__PURE__ */ Symbol.for("react.lazy"), Kl = /* @__PURE__ */ Symbol.for("react.activity"), Ut = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
    function Jl(l) {
      return l === null || typeof l != "object" ? null : (l = tt && l[tt] || l["@@iterator"], typeof l == "function" ? l : null);
    }
    var Te = /* @__PURE__ */ Symbol.for("react.client.reference");
    function jt(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === Te ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case xl:
          return "Fragment";
        case Ul:
          return "Profiler";
        case Ll:
          return "StrictMode";
        case dt:
          return "Suspense";
        case Cl:
          return "SuspenseList";
        case Kl:
          return "Activity";
      }
      if (typeof l == "object") switch (l.$$typeof) {
        case tl:
          return "Portal";
        case yl:
          return l.displayName || "Context";
        case lt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Vl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case k:
          return t = l.displayName || null, t !== null ? t : jt(l.type) || "Memo";
        case Al:
          t = l._payload, l = l._init;
          try {
            return jt(l(t));
          } catch {
          }
      }
      return null;
    }
    var zt = Array.isArray, z = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, sl = [], ml = -1;
    function d(l) {
      return {
        current: l
      };
    }
    function _(l) {
      0 > ml || (l.current = sl[ml], sl[ml] = null, ml--);
    }
    function H(l, t) {
      ml++, sl[ml] = l.current, l.current = t;
    }
    var Y = d(null), V = d(null), W = d(null), nl = d(null);
    function Ql(l, t) {
      switch (H(W, t), H(V, l), H(Y, null), t.nodeType) {
        case 9:
        case 11:
          l = (l = t.documentElement) && (l = l.namespaceURI) ? Po(l) : 0;
          break;
        default:
          if (l = t.tagName, t = t.namespaceURI) t = Po(t), l = l0(t, l);
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
      _(Y), H(Y, l);
    }
    function El() {
      _(Y), _(V), _(W);
    }
    function Da(l) {
      l.memoizedState !== null && H(nl, l);
      var t = Y.current, e = l0(t, l.type);
      t !== e && (H(V, l), H(Y, e));
    }
    function _u(l) {
      V.current === l && (_(Y), _(V)), nl.current === l && (_(nl), Su._currentValue = Z);
    }
    var $n, Nf;
    function Ae(l) {
      if ($n === void 0) try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        $n = t && t[1] || "", Nf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + $n + l + Nf;
    }
    var Fn = false;
    function In(l, t) {
      if (!l || Fn) return "";
      Fn = true;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var A = function() {
                  throw Error();
                };
                if (Object.defineProperty(A.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(A, []);
                  } catch (p) {
                    var S = p;
                  }
                  Reflect.construct(l, [], A);
                } else {
                  try {
                    A.call();
                  } catch (p) {
                    S = p;
                  }
                  l.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (p) {
                  S = p;
                }
                (A = l()) && typeof A.catch == "function" && A.catch(function() {
                });
              }
            } catch (p) {
              if (p && S && typeof p.stack == "string") return [
                p.stack,
                S.stack
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
`), v = i.split(`
`);
          for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (a === s.length || u === v.length) for (a = s.length - 1, u = v.length - 1; 1 <= a && 0 <= u && s[a] !== v[u]; ) u--;
          for (; 1 <= a && 0 <= u; a--, u--) if (s[a] !== v[u]) {
            if (a !== 1 || u !== 1) do
              if (a--, u--, 0 > u || s[a] !== v[u]) {
                var E = `
` + s[a].replace(" at new ", " at ");
                return l.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", l.displayName)), E;
              }
            while (1 <= a && 0 <= u);
            break;
          }
        }
      } finally {
        Fn = false, Error.prepareStackTrace = e;
      }
      return (e = l ? l.displayName || l.name : "") ? Ae(e) : "";
    }
    function nd(l, t) {
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
          return In(l.type, false);
        case 11:
          return In(l.type.render, false);
        case 1:
          return In(l.type, true);
        case 31:
          return Ae("Activity");
        default:
          return "";
      }
    }
    function Mf(l) {
      try {
        var t = "", e = null;
        do
          t += nd(l, e), e = l, l = l.return;
        while (l);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Pn = Object.prototype.hasOwnProperty, lc = f.unstable_scheduleCallback, tc = f.unstable_cancelCallback, cd = f.unstable_shouldYield, id = f.unstable_requestPaint, et = f.unstable_now, fd = f.unstable_getCurrentPriorityLevel, Df = f.unstable_ImmediatePriority, Uf = f.unstable_UserBlockingPriority, Ou = f.unstable_NormalPriority, sd = f.unstable_LowPriority, jf = f.unstable_IdlePriority, rd = f.log, od = f.unstable_setDisableYieldValue, Ua = null, at = null;
    function Ft(l) {
      if (typeof rd == "function" && od(l), at && typeof at.setStrictMode == "function") try {
        at.setStrictMode(Ua, l);
      } catch {
      }
    }
    var ut = Math.clz32 ? Math.clz32 : md, dd = Math.log, yd = Math.LN2;
    function md(l) {
      return l >>>= 0, l === 0 ? 32 : 31 - (dd(l) / yd | 0) | 0;
    }
    var Nu = 256, Mu = 262144, Du = 4194304;
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
    function ja(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function hd(l, t) {
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
    function Rf() {
      var l = Du;
      return Du <<= 1, (Du & 62914560) === 0 && (Du = 4194304), l;
    }
    function ec(l) {
      for (var t = [], e = 0; 31 > e; e++) t.push(l);
      return t;
    }
    function Ra(l, t) {
      l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
    }
    function gd(l, t, e, a, u, n) {
      var c = l.pendingLanes;
      l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
      var i = l.entanglements, s = l.expirationTimes, v = l.hiddenUpdates;
      for (e = c & ~e; 0 < e; ) {
        var E = 31 - ut(e), A = 1 << E;
        i[E] = 0, s[E] = -1;
        var S = v[E];
        if (S !== null) for (v[E] = null, E = 0; E < S.length; E++) {
          var p = S[E];
          p !== null && (p.lane &= -536870913);
        }
        e &= ~A;
      }
      a !== 0 && Cf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
    }
    function Cf(l, t, e) {
      l.pendingLanes |= t, l.suspendedLanes &= ~t;
      var a = 31 - ut(t);
      l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
    }
    function Hf(l, t) {
      var e = l.entangledLanes |= t;
      for (l = l.entanglements; e; ) {
        var a = 31 - ut(e), u = 1 << a;
        u & t | l[a] & t && (l[a] |= t), e &= ~u;
      }
    }
    function Bf(l, t) {
      var e = t & -t;
      return e = (e & 42) !== 0 ? 1 : ac(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
    }
    function ac(l) {
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
    function uc(l) {
      return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function qf() {
      var l = C.p;
      return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : z0(l.type));
    }
    function Yf(l, t) {
      var e = C.p;
      try {
        return C.p = l, t();
      } finally {
        C.p = e;
      }
    }
    var It = Math.random().toString(36).slice(2), Hl = "__reactFiber$" + It, wl = "__reactProps$" + It, Ke = "__reactContainer$" + It, nc = "__reactEvents$" + It, vd = "__reactListeners$" + It, bd = "__reactHandles$" + It, Gf = "__reactResources$" + It, Ca = "__reactMarker$" + It;
    function cc(l) {
      delete l[Hl], delete l[wl], delete l[nc], delete l[vd], delete l[bd];
    }
    function Je(l) {
      var t = l[Hl];
      if (t) return t;
      for (var e = l.parentNode; e; ) {
        if (t = e[Ke] || e[Hl]) {
          if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = i0(l); l !== null; ) {
            if (e = l[Hl]) return e;
            l = i0(l);
          }
          return t;
        }
        l = e, e = l.parentNode;
      }
      return null;
    }
    function we(l) {
      if (l = l[Hl] || l[Ke]) {
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
      var t = l[Gf];
      return t || (t = l[Gf] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function jl(l) {
      l[Ca] = true;
    }
    var Xf = /* @__PURE__ */ new Set(), Qf = {};
    function Oe(l, t) {
      We(l, t), We(l + "Capture", t);
    }
    function We(l, t) {
      for (Qf[l] = t, l = 0; l < t.length; l++) Xf.add(t[l]);
    }
    var Sd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zf = {}, Lf = {};
    function pd(l) {
      return Pn.call(Lf, l) ? true : Pn.call(Zf, l) ? false : Sd.test(l) ? Lf[l] = true : (Zf[l] = true, false);
    }
    function ju(l, t, e) {
      if (pd(t)) if (e === null) l.removeAttribute(t);
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
    function Ru(l, t, e) {
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
    function Rt(l, t, e, a) {
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
    function yt(l) {
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
    function Vf(l) {
      var t = l.type;
      return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xd(l, t, e) {
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
    function ic(l) {
      if (!l._valueTracker) {
        var t = Vf(l) ? "checked" : "value";
        l._valueTracker = xd(l, t, "" + l[t]);
      }
    }
    function Kf(l) {
      if (!l) return false;
      var t = l._valueTracker;
      if (!t) return true;
      var e = t.getValue(), a = "";
      return l && (a = Vf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), true) : false;
    }
    function Cu(l) {
      if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var Ed = /[\n"\\]/g;
    function mt(l) {
      return l.replace(Ed, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function fc(l, t, e, a, u, n, c, i) {
      l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + yt(t)) : l.value !== "" + yt(t) && (l.value = "" + yt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? sc(l, c, yt(t)) : e != null ? sc(l, c, yt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + yt(i) : l.removeAttribute("name");
    }
    function Jf(l, t, e, a, u, n, c, i) {
      if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
        if (!(n !== "submit" && n !== "reset" || t != null)) {
          ic(l);
          return;
        }
        e = e != null ? "" + yt(e) : "", t = t != null ? "" + yt(t) : e, i || t === l.value || (l.value = t), l.defaultValue = t;
      }
      a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), ic(l);
    }
    function sc(l, t, e) {
      t === "number" && Cu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
    }
    function $e(l, t, e, a) {
      if (l = l.options, t) {
        t = {};
        for (var u = 0; u < e.length; u++) t["$" + e[u]] = true;
        for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = true);
      } else {
        for (e = "" + yt(e), t = null, u = 0; u < l.length; u++) {
          if (l[u].value === e) {
            l[u].selected = true, a && (l[u].defaultSelected = true);
            return;
          }
          t !== null || l[u].disabled || (t = l[u]);
        }
        t !== null && (t.selected = true);
      }
    }
    function wf(l, t, e) {
      if (t != null && (t = "" + yt(t), t !== l.value && (l.value = t), e == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = e != null ? "" + yt(e) : "";
    }
    function kf(l, t, e, a) {
      if (t == null) {
        if (a != null) {
          if (e != null) throw Error(r(92));
          if (zt(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), t = e;
      }
      e = yt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ic(l);
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
    var zd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Wf(l, t, e) {
      var a = t.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || zd.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
    }
    function $f(l, t, e) {
      if (t != null && typeof t != "object") throw Error(r(62));
      if (l = l.style, e != null) {
        for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
        for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && Wf(l, u, a);
      } else for (var n in t) t.hasOwnProperty(n) && Wf(l, n, t[n]);
    }
    function rc(l) {
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
    var Td = /* @__PURE__ */ new Map([
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
    ]), Ad = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Hu(l) {
      return Ad.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    function Ct() {
    }
    var oc = null;
    function dc(l) {
      return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
    }
    var Ie = null, Pe = null;
    function Ff(l) {
      var t = we(l);
      if (t && (l = t.stateNode)) {
        var e = l[wl] || null;
        l: switch (l = t.stateNode, t.type) {
          case "input":
            if (fc(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
              for (e = l; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                var a = e[t];
                if (a !== l && a.form === l.form) {
                  var u = a[wl] || null;
                  if (!u) throw Error(r(90));
                  fc(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Kf(a);
            }
            break l;
          case "textarea":
            wf(l, e.value, e.defaultValue);
            break l;
          case "select":
            t = e.value, t != null && $e(l, !!e.multiple, t, false);
        }
      }
    }
    var yc = false;
    function If(l, t, e) {
      if (yc) return l(t, e);
      yc = true;
      try {
        var a = l(t);
        return a;
      } finally {
        if (yc = false, (Ie !== null || Pe !== null) && (zn(), Ie && (t = Ie, l = Pe, Pe = Ie = null, Ff(t), l))) for (t = 0; t < l.length; t++) Ff(l[t]);
      }
    }
    function Ba(l, t) {
      var e = l.stateNode;
      if (e === null) return null;
      var a = e[wl] || null;
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
    var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mc = false;
    if (Ht) try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          mc = true;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      mc = false;
    }
    var Pt = null, hc = null, Bu = null;
    function Pf() {
      if (Bu) return Bu;
      var l, t = hc, e = t.length, a, u = "value" in Pt ? Pt.value : Pt.textContent, n = u.length;
      for (l = 0; l < e && t[l] === u[l]; l++) ;
      var c = e - l;
      for (a = 1; a <= c && t[e - a] === u[n - a]; a++) ;
      return Bu = u.slice(l, 1 < a ? 1 - a : void 0);
    }
    function qu(l) {
      var t = l.keyCode;
      return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
    }
    function Yu() {
      return true;
    }
    function ls() {
      return false;
    }
    function kl(l) {
      function t(e, a, u, n, c) {
        this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
        for (var i in l) l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
        return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Yu : ls, this.isPropagationStopped = ls, this;
      }
      return M(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var e = this.nativeEvent;
          e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Yu);
        },
        stopPropagation: function() {
          var e = this.nativeEvent;
          e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Yu);
        },
        persist: function() {
        },
        isPersistent: Yu
      }), t;
    }
    var Ne = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Gu = kl(Ne), Ya = M({}, Ne, {
      view: 0,
      detail: 0
    }), _d = kl(Ya), gc, vc, Ga, Xu = M({}, Ya, {
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
      getModifierState: Sc,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== Ga && (Ga && l.type === "mousemove" ? (gc = l.screenX - Ga.screenX, vc = l.screenY - Ga.screenY) : vc = gc = 0, Ga = l), gc);
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : vc;
      }
    }), ts = kl(Xu), Od = M({}, Xu, {
      dataTransfer: 0
    }), Nd = kl(Od), Md = M({}, Ya, {
      relatedTarget: 0
    }), bc = kl(Md), Dd = M({}, Ne, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ud = kl(Dd), jd = M({}, Ne, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      }
    }), Rd = kl(jd), Cd = M({}, Ne, {
      data: 0
    }), es = kl(Cd), Hd = {
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
    }, Bd = {
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
    }, qd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Yd(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = qd[l]) ? !!t[l] : false;
    }
    function Sc() {
      return Yd;
    }
    var Gd = M({}, Ya, {
      key: function(l) {
        if (l.key) {
          var t = Hd[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress" ? (l = qu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Bd[l.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sc,
      charCode: function(l) {
        return l.type === "keypress" ? qu(l) : 0;
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function(l) {
        return l.type === "keypress" ? qu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      }
    }), Xd = kl(Gd), Qd = M({}, Xu, {
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
    }), as = kl(Qd), Zd = M({}, Ya, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sc
    }), Ld = kl(Zd), Vd = M({}, Ne, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Kd = kl(Vd), Jd = M({}, Xu, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), wd = kl(Jd), kd = M({}, Ne, {
      newState: 0,
      oldState: 0
    }), Wd = kl(kd), $d = [
      9,
      13,
      27,
      32
    ], pc = Ht && "CompositionEvent" in window, Xa = null;
    Ht && "documentMode" in document && (Xa = document.documentMode);
    var Fd = Ht && "TextEvent" in window && !Xa, us = Ht && (!pc || Xa && 8 < Xa && 11 >= Xa), ns = " ", cs = false;
    function is(l, t) {
      switch (l) {
        case "keyup":
          return $d.indexOf(t.keyCode) !== -1;
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
    function fs(l) {
      return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
    }
    var la = false;
    function Id(l, t) {
      switch (l) {
        case "compositionend":
          return fs(t);
        case "keypress":
          return t.which !== 32 ? null : (cs = true, ns);
        case "textInput":
          return l = t.data, l === ns && cs ? null : l;
        default:
          return null;
      }
    }
    function Pd(l, t) {
      if (la) return l === "compositionend" || !pc && is(l, t) ? (l = Pf(), Bu = hc = Pt = null, la = false, l) : null;
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
          return us && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var ly = {
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
    function ss(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!ly[l.type] : t === "textarea";
    }
    function rs(l, t, e, a) {
      Ie ? Pe ? Pe.push(a) : Pe = [
        a
      ] : Ie = a, t = Dn(t, "onChange"), 0 < t.length && (e = new Gu("onChange", "change", null, e, a), l.push({
        event: e,
        listeners: t
      }));
    }
    var Qa = null, Za = null;
    function ty(l) {
      wo(l, 0);
    }
    function Qu(l) {
      var t = Ha(l);
      if (Kf(t)) return l;
    }
    function os(l, t) {
      if (l === "change") return t;
    }
    var ds = false;
    if (Ht) {
      var xc;
      if (Ht) {
        var Ec = "oninput" in document;
        if (!Ec) {
          var ys = document.createElement("div");
          ys.setAttribute("oninput", "return;"), Ec = typeof ys.oninput == "function";
        }
        xc = Ec;
      } else xc = false;
      ds = xc && (!document.documentMode || 9 < document.documentMode);
    }
    function ms() {
      Qa && (Qa.detachEvent("onpropertychange", hs), Za = Qa = null);
    }
    function hs(l) {
      if (l.propertyName === "value" && Qu(Za)) {
        var t = [];
        rs(t, Za, l, dc(l)), If(ty, t);
      }
    }
    function ey(l, t, e) {
      l === "focusin" ? (ms(), Qa = t, Za = e, Qa.attachEvent("onpropertychange", hs)) : l === "focusout" && ms();
    }
    function ay(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return Qu(Za);
    }
    function uy(l, t) {
      if (l === "click") return Qu(t);
    }
    function ny(l, t) {
      if (l === "input" || l === "change") return Qu(t);
    }
    function cy(l, t) {
      return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
    }
    var nt = typeof Object.is == "function" ? Object.is : cy;
    function La(l, t) {
      if (nt(l, t)) return true;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
      var e = Object.keys(l), a = Object.keys(t);
      if (e.length !== a.length) return false;
      for (a = 0; a < e.length; a++) {
        var u = e[a];
        if (!Pn.call(t, u) || !nt(l[u], t[u])) return false;
      }
      return true;
    }
    function gs(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function vs(l, t) {
      var e = gs(l);
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
        e = gs(e);
      }
    }
    function bs(l, t) {
      return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? bs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
    }
    function Ss(l) {
      l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
      for (var t = Cu(l.document); t instanceof l.HTMLIFrameElement; ) {
        try {
          var e = typeof t.contentWindow.location.href == "string";
        } catch {
          e = false;
        }
        if (e) l = t.contentWindow;
        else break;
        t = Cu(l.document);
      }
      return t;
    }
    function zc(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
    }
    var iy = Ht && "documentMode" in document && 11 >= document.documentMode, ta = null, Tc = null, Va = null, Ac = false;
    function ps(l, t, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Ac || ta == null || ta !== Cu(a) || (a = ta, "selectionStart" in a && zc(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Va && La(Va, a) || (Va = a, a = Dn(Tc, "onSelect"), 0 < a.length && (t = new Gu("onSelect", "select", null, t, e), l.push({
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
    }, _c = {}, xs = {};
    Ht && (xs = document.createElement("div").style, "AnimationEvent" in window || (delete ea.animationend.animation, delete ea.animationiteration.animation, delete ea.animationstart.animation), "TransitionEvent" in window || delete ea.transitionend.transition);
    function De(l) {
      if (_c[l]) return _c[l];
      if (!ea[l]) return l;
      var t = ea[l], e;
      for (e in t) if (t.hasOwnProperty(e) && e in xs) return _c[l] = t[e];
      return l;
    }
    var Es = De("animationend"), zs = De("animationiteration"), Ts = De("animationstart"), fy = De("transitionrun"), sy = De("transitionstart"), ry = De("transitioncancel"), As = De("transitionend"), _s = /* @__PURE__ */ new Map(), Oc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Oc.push("scrollEnd");
    function Tt(l, t) {
      _s.set(l, t), Oe(t, [
        l
      ]);
    }
    var Zu = typeof reportError == "function" ? reportError : function(l) {
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
    }, ht = [], aa = 0, Nc = 0;
    function Lu() {
      for (var l = aa, t = Nc = aa = 0; t < l; ) {
        var e = ht[t];
        ht[t++] = null;
        var a = ht[t];
        ht[t++] = null;
        var u = ht[t];
        ht[t++] = null;
        var n = ht[t];
        if (ht[t++] = null, a !== null && u !== null) {
          var c = a.pending;
          c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
        }
        n !== 0 && Os(e, u, n);
      }
    }
    function Vu(l, t, e, a) {
      ht[aa++] = l, ht[aa++] = t, ht[aa++] = e, ht[aa++] = a, Nc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
    }
    function Mc(l, t, e, a) {
      return Vu(l, t, e, a), Ku(l);
    }
    function Ue(l, t) {
      return Vu(l, null, null, t), Ku(l);
    }
    function Os(l, t, e) {
      l.lanes |= e;
      var a = l.alternate;
      a !== null && (a.lanes |= e);
      for (var u = false, n = l.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = true)), l = n, n = n.return;
      return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ut(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [
        t
      ] : a.push(t), t.lane = e | 536870912), n) : null;
    }
    function Ku(l) {
      if (50 < du) throw du = 0, Yi = null, Error(r(185));
      for (var t = l.return; t !== null; ) l = t, t = l.return;
      return l.tag === 3 ? l.stateNode : null;
    }
    var ua = {};
    function oy(l, t, e, a) {
      this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ct(l, t, e, a) {
      return new oy(l, t, e, a);
    }
    function Dc(l) {
      return l = l.prototype, !(!l || !l.isReactComponent);
    }
    function Bt(l, t) {
      var e = l.alternate;
      return e === null ? (e = ct(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
    }
    function Ns(l, t) {
      l.flags &= 65011714;
      var e = l.alternate;
      return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), l;
    }
    function Ju(l, t, e, a, u, n) {
      var c = 0;
      if (a = l, typeof l == "function") Dc(l) && (c = 1);
      else if (typeof l == "string") c = gm(l, e, Y.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else l: switch (l) {
        case Kl:
          return l = ct(31, e, t, u), l.elementType = Kl, l.lanes = n, l;
        case xl:
          return je(e.children, u, n, t);
        case Ll:
          c = 8, u |= 24;
          break;
        case Ul:
          return l = ct(12, e, t, u | 2), l.elementType = Ul, l.lanes = n, l;
        case dt:
          return l = ct(13, e, t, u), l.elementType = dt, l.lanes = n, l;
        case Cl:
          return l = ct(19, e, t, u), l.elementType = Cl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null) switch (l.$$typeof) {
            case yl:
              c = 10;
              break l;
            case lt:
              c = 9;
              break l;
            case Vl:
              c = 11;
              break l;
            case k:
              c = 14;
              break l;
            case Al:
              c = 16, a = null;
              break l;
          }
          c = 29, e = Error(r(130, l === null ? "null" : typeof l, "")), a = null;
      }
      return t = ct(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
    }
    function je(l, t, e, a) {
      return l = ct(7, l, a, t), l.lanes = e, l;
    }
    function Uc(l, t, e) {
      return l = ct(6, l, null, t), l.lanes = e, l;
    }
    function Ms(l) {
      var t = ct(18, null, null, 0);
      return t.stateNode = l, t;
    }
    function jc(l, t, e) {
      return t = ct(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation
      }, t;
    }
    var Ds = /* @__PURE__ */ new WeakMap();
    function gt(l, t) {
      if (typeof l == "object" && l !== null) {
        var e = Ds.get(l);
        return e !== void 0 ? e : (t = {
          value: l,
          source: t,
          stack: Mf(t)
        }, Ds.set(l, t), t);
      }
      return {
        value: l,
        source: t,
        stack: Mf(t)
      };
    }
    var na = [], ca = 0, wu = null, Ka = 0, vt = [], bt = 0, le = null, Ot = 1, Nt = "";
    function qt(l, t) {
      na[ca++] = Ka, na[ca++] = wu, wu = l, Ka = t;
    }
    function Us(l, t, e) {
      vt[bt++] = Ot, vt[bt++] = Nt, vt[bt++] = le, le = l;
      var a = Ot;
      l = Nt;
      var u = 32 - ut(a) - 1;
      a &= ~(1 << u), e += 1;
      var n = 32 - ut(t) + u;
      if (30 < n) {
        var c = u - u % 5;
        n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Ot = 1 << 32 - ut(t) + u | e << u | a, Nt = n + l;
      } else Ot = 1 << n | e << u | a, Nt = l;
    }
    function Rc(l) {
      l.return !== null && (qt(l, 1), Us(l, 1, 0));
    }
    function Cc(l) {
      for (; l === wu; ) wu = na[--ca], na[ca] = null, Ka = na[--ca], na[ca] = null;
      for (; l === le; ) le = vt[--bt], vt[bt] = null, Nt = vt[--bt], vt[bt] = null, Ot = vt[--bt], vt[bt] = null;
    }
    function js(l, t) {
      vt[bt++] = Ot, vt[bt++] = Nt, vt[bt++] = le, Ot = t.id, Nt = t.overflow, le = l;
    }
    var Bl = null, gl = null, ll = false, te = null, St = false, Hc = Error(r(519));
    function ee(l) {
      var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ja(gt(t, l)), Hc;
    }
    function Rs(l) {
      var t = l.stateNode, e = l.type, a = l.memoizedProps;
      switch (t[Hl] = l, t[wl] = a, e) {
        case "dialog":
          F("cancel", t), F("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          F("load", t);
          break;
        case "video":
        case "audio":
          for (e = 0; e < mu.length; e++) F(mu[e], t);
          break;
        case "source":
          F("error", t);
          break;
        case "img":
        case "image":
        case "link":
          F("error", t), F("load", t);
          break;
        case "details":
          F("toggle", t);
          break;
        case "input":
          F("invalid", t), Jf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          F("invalid", t);
          break;
        case "textarea":
          F("invalid", t), kf(t, a.value, a.defaultValue, a.children);
      }
      e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === true || Fo(t.textContent, e) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = Ct), t = true) : t = false, t || ee(l, true);
    }
    function Cs(l) {
      for (Bl = l.return; Bl; ) switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          St = false;
          return;
        case 27:
        case 3:
          St = true;
          return;
        default:
          Bl = Bl.return;
      }
    }
    function ia(l) {
      if (l !== Bl) return false;
      if (!ll) return Cs(l), ll = true, false;
      var t = l.tag, e;
      if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Pi(l.type, l.memoizedProps)), e = !e), e && gl && ee(l), Cs(l), t === 13) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
        gl = c0(l);
      } else if (t === 31) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
        gl = c0(l);
      } else t === 27 ? (t = gl, ge(l.type) ? (l = uf, uf = null, gl = l) : gl = t) : gl = Bl ? xt(l.stateNode.nextSibling) : null;
      return true;
    }
    function Re() {
      gl = Bl = null, ll = false;
    }
    function Bc() {
      var l = te;
      return l !== null && (Il === null ? Il = l : Il.push.apply(Il, l), te = null), l;
    }
    function Ja(l) {
      te === null ? te = [
        l
      ] : te.push(l);
    }
    var qc = d(null), Ce = null, Yt = null;
    function ae(l, t, e) {
      H(qc, t._currentValue), t._currentValue = e;
    }
    function Gt(l) {
      l._currentValue = qc.current, _(qc);
    }
    function Yc(l, t, e) {
      for (; l !== null; ) {
        var a = l.alternate;
        if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
        l = l.return;
      }
    }
    function Gc(l, t, e, a) {
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
              n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Yc(n.return, e, l), a || (c = null);
              break l;
            }
            n = i.next;
          }
        } else if (u.tag === 18) {
          if (c = u.return, c === null) throw Error(r(341));
          c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Yc(c, e, l), c = null;
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
            nt(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [
              i
            ]);
          }
        } else if (u === nl.current) {
          if (c = u.alternate, c === null) throw Error(r(387));
          c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Su) : l = [
            Su
          ]);
        }
        u = u.return;
      }
      l !== null && Gc(t, l, e, a), t.flags |= 262144;
    }
    function ku(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!nt(l.context._currentValue, l.memoizedValue)) return true;
        l = l.next;
      }
      return false;
    }
    function He(l) {
      Ce = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
    }
    function ql(l) {
      return Hs(Ce, l);
    }
    function Wu(l, t) {
      return Ce === null && He(l), Hs(l, t);
    }
    function Hs(l, t) {
      var e = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: e,
        next: null
      }, Yt === null) {
        if (l === null) throw Error(r(308));
        Yt = t, l.dependencies = {
          lanes: 0,
          firstContext: t
        }, l.flags |= 524288;
      } else Yt = Yt.next = t;
      return e;
    }
    var dy = typeof AbortController < "u" ? AbortController : function() {
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
    }, yy = f.unstable_scheduleCallback, my = f.unstable_NormalPriority, _l = {
      $$typeof: yl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Xc() {
      return {
        controller: new dy(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function wa(l) {
      l.refCount--, l.refCount === 0 && yy(my, function() {
        l.controller.abort();
      });
    }
    var ka = null, Qc = 0, sa = 0, ra = null;
    function hy(l, t) {
      if (ka === null) {
        var e = ka = [];
        Qc = 0, sa = Vi(), ra = {
          status: "pending",
          value: void 0,
          then: function(a) {
            e.push(a);
          }
        };
      }
      return Qc++, t.then(Bs, Bs), t;
    }
    function Bs() {
      if (--Qc === 0 && ka !== null) {
        ra !== null && (ra.status = "fulfilled");
        var l = ka;
        ka = null, sa = 0, ra = null;
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function gy(l, t) {
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
    var qs = z.S;
    z.S = function(l, t) {
      xo = et(), typeof t == "object" && t !== null && typeof t.then == "function" && hy(l, t), qs !== null && qs(l, t);
    };
    var Be = d(null);
    function Zc() {
      var l = Be.current;
      return l !== null ? l : hl.pooledCache;
    }
    function $u(l, t) {
      t === null ? H(Be, Be.current) : H(Be, t.pool);
    }
    function Ys() {
      var l = Zc();
      return l === null ? null : {
        parent: _l._currentValue,
        pool: l
      };
    }
    var oa = Error(r(460)), Lc = Error(r(474)), Fu = Error(r(542)), Iu = {
      then: function() {
      }
    };
    function Gs(l) {
      return l = l.status, l === "fulfilled" || l === "rejected";
    }
    function Xs(l, t, e) {
      switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ct, Ct), t = e), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw l = t.reason, Zs(l), l;
        default:
          if (typeof t.status == "string") t.then(Ct, Ct);
          else {
            if (l = hl, l !== null && 100 < l.shellSuspendCounter) throw Error(r(482));
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
              throw l = t.reason, Zs(l), l;
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
    function Qs() {
      if (Ye === null) throw Error(r(459));
      var l = Ye;
      return Ye = null, l;
    }
    function Zs(l) {
      if (l === oa || l === Fu) throw Error(r(483));
    }
    var da = null, Wa = 0;
    function Pu(l) {
      var t = Wa;
      return Wa += 1, da === null && (da = []), Xs(da, l, t);
    }
    function $a(l, t) {
      t = t.props.ref, l.ref = t !== void 0 ? t : null;
    }
    function ln(l, t) {
      throw t.$$typeof === R ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(r(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function Ls(l) {
      function t(y, o) {
        if (l) {
          var g = y.deletions;
          g === null ? (y.deletions = [
            o
          ], y.flags |= 16) : g.push(o);
        }
      }
      function e(y, o) {
        if (!l) return null;
        for (; o !== null; ) t(y, o), o = o.sibling;
        return null;
      }
      function a(y) {
        for (var o = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? o.set(y.key, y) : o.set(y.index, y), y = y.sibling;
        return o;
      }
      function u(y, o) {
        return y = Bt(y, o), y.index = 0, y.sibling = null, y;
      }
      function n(y, o, g) {
        return y.index = g, l ? (g = y.alternate, g !== null ? (g = g.index, g < o ? (y.flags |= 67108866, o) : g) : (y.flags |= 67108866, o)) : (y.flags |= 1048576, o);
      }
      function c(y) {
        return l && y.alternate === null && (y.flags |= 67108866), y;
      }
      function i(y, o, g, T) {
        return o === null || o.tag !== 6 ? (o = Uc(g, y.mode, T), o.return = y, o) : (o = u(o, g), o.return = y, o);
      }
      function s(y, o, g, T) {
        var X = g.type;
        return X === xl ? E(y, o, g.props.children, T, g.key) : o !== null && (o.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Al && qe(X) === o.type) ? (o = u(o, g.props), $a(o, g), o.return = y, o) : (o = Ju(g.type, g.key, g.props, null, y.mode, T), $a(o, g), o.return = y, o);
      }
      function v(y, o, g, T) {
        return o === null || o.tag !== 4 || o.stateNode.containerInfo !== g.containerInfo || o.stateNode.implementation !== g.implementation ? (o = jc(g, y.mode, T), o.return = y, o) : (o = u(o, g.children || []), o.return = y, o);
      }
      function E(y, o, g, T, X) {
        return o === null || o.tag !== 7 ? (o = je(g, y.mode, T, X), o.return = y, o) : (o = u(o, g), o.return = y, o);
      }
      function A(y, o, g) {
        if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = Uc("" + o, y.mode, g), o.return = y, o;
        if (typeof o == "object" && o !== null) {
          switch (o.$$typeof) {
            case fl:
              return g = Ju(o.type, o.key, o.props, null, y.mode, g), $a(g, o), g.return = y, g;
            case tl:
              return o = jc(o, y.mode, g), o.return = y, o;
            case Al:
              return o = qe(o), A(y, o, g);
          }
          if (zt(o) || Jl(o)) return o = je(o, y.mode, g, null), o.return = y, o;
          if (typeof o.then == "function") return A(y, Pu(o), g);
          if (o.$$typeof === yl) return A(y, Wu(y, o), g);
          ln(y, o);
        }
        return null;
      }
      function S(y, o, g, T) {
        var X = o !== null ? o.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return X !== null ? null : i(y, o, "" + g, T);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case fl:
              return g.key === X ? s(y, o, g, T) : null;
            case tl:
              return g.key === X ? v(y, o, g, T) : null;
            case Al:
              return g = qe(g), S(y, o, g, T);
          }
          if (zt(g) || Jl(g)) return X !== null ? null : E(y, o, g, T, null);
          if (typeof g.then == "function") return S(y, o, Pu(g), T);
          if (g.$$typeof === yl) return S(y, o, Wu(y, g), T);
          ln(y, g);
        }
        return null;
      }
      function p(y, o, g, T, X) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return y = y.get(g) || null, i(o, y, "" + T, X);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case fl:
              return y = y.get(T.key === null ? g : T.key) || null, s(o, y, T, X);
            case tl:
              return y = y.get(T.key === null ? g : T.key) || null, v(o, y, T, X);
            case Al:
              return T = qe(T), p(y, o, g, T, X);
          }
          if (zt(T) || Jl(T)) return y = y.get(g) || null, E(o, y, T, X, null);
          if (typeof T.then == "function") return p(y, o, g, Pu(T), X);
          if (T.$$typeof === yl) return p(y, o, g, Wu(o, T), X);
          ln(o, T);
        }
        return null;
      }
      function q(y, o, g, T) {
        for (var X = null, el = null, G = o, J = o = 0, P = null; G !== null && J < g.length; J++) {
          G.index > J ? (P = G, G = null) : P = G.sibling;
          var al = S(y, G, g[J], T);
          if (al === null) {
            G === null && (G = P);
            break;
          }
          l && G && al.alternate === null && t(y, G), o = n(al, o, J), el === null ? X = al : el.sibling = al, el = al, G = P;
        }
        if (J === g.length) return e(y, G), ll && qt(y, J), X;
        if (G === null) {
          for (; J < g.length; J++) G = A(y, g[J], T), G !== null && (o = n(G, o, J), el === null ? X = G : el.sibling = G, el = G);
          return ll && qt(y, J), X;
        }
        for (G = a(G); J < g.length; J++) P = p(G, y, J, g[J], T), P !== null && (l && P.alternate !== null && G.delete(P.key === null ? J : P.key), o = n(P, o, J), el === null ? X = P : el.sibling = P, el = P);
        return l && G.forEach(function(xe) {
          return t(y, xe);
        }), ll && qt(y, J), X;
      }
      function Q(y, o, g, T) {
        if (g == null) throw Error(r(151));
        for (var X = null, el = null, G = o, J = o = 0, P = null, al = g.next(); G !== null && !al.done; J++, al = g.next()) {
          G.index > J ? (P = G, G = null) : P = G.sibling;
          var xe = S(y, G, al.value, T);
          if (xe === null) {
            G === null && (G = P);
            break;
          }
          l && G && xe.alternate === null && t(y, G), o = n(xe, o, J), el === null ? X = xe : el.sibling = xe, el = xe, G = P;
        }
        if (al.done) return e(y, G), ll && qt(y, J), X;
        if (G === null) {
          for (; !al.done; J++, al = g.next()) al = A(y, al.value, T), al !== null && (o = n(al, o, J), el === null ? X = al : el.sibling = al, el = al);
          return ll && qt(y, J), X;
        }
        for (G = a(G); !al.done; J++, al = g.next()) al = p(G, y, J, al.value, T), al !== null && (l && al.alternate !== null && G.delete(al.key === null ? J : al.key), o = n(al, o, J), el === null ? X = al : el.sibling = al, el = al);
        return l && G.forEach(function(Om) {
          return t(y, Om);
        }), ll && qt(y, J), X;
      }
      function dl(y, o, g, T) {
        if (typeof g == "object" && g !== null && g.type === xl && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case fl:
              l: {
                for (var X = g.key; o !== null; ) {
                  if (o.key === X) {
                    if (X = g.type, X === xl) {
                      if (o.tag === 7) {
                        e(y, o.sibling), T = u(o, g.props.children), T.return = y, y = T;
                        break l;
                      }
                    } else if (o.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Al && qe(X) === o.type) {
                      e(y, o.sibling), T = u(o, g.props), $a(T, g), T.return = y, y = T;
                      break l;
                    }
                    e(y, o);
                    break;
                  } else t(y, o);
                  o = o.sibling;
                }
                g.type === xl ? (T = je(g.props.children, y.mode, T, g.key), T.return = y, y = T) : (T = Ju(g.type, g.key, g.props, null, y.mode, T), $a(T, g), T.return = y, y = T);
              }
              return c(y);
            case tl:
              l: {
                for (X = g.key; o !== null; ) {
                  if (o.key === X) if (o.tag === 4 && o.stateNode.containerInfo === g.containerInfo && o.stateNode.implementation === g.implementation) {
                    e(y, o.sibling), T = u(o, g.children || []), T.return = y, y = T;
                    break l;
                  } else {
                    e(y, o);
                    break;
                  }
                  else t(y, o);
                  o = o.sibling;
                }
                T = jc(g, y.mode, T), T.return = y, y = T;
              }
              return c(y);
            case Al:
              return g = qe(g), dl(y, o, g, T);
          }
          if (zt(g)) return q(y, o, g, T);
          if (Jl(g)) {
            if (X = Jl(g), typeof X != "function") throw Error(r(150));
            return g = X.call(g), Q(y, o, g, T);
          }
          if (typeof g.then == "function") return dl(y, o, Pu(g), T);
          if (g.$$typeof === yl) return dl(y, o, Wu(y, g), T);
          ln(y, g);
        }
        return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, o !== null && o.tag === 6 ? (e(y, o.sibling), T = u(o, g), T.return = y, y = T) : (e(y, o), T = Uc(g, y.mode, T), T.return = y, y = T), c(y)) : e(y, o);
      }
      return function(y, o, g, T) {
        try {
          Wa = 0;
          var X = dl(y, o, g, T);
          return da = null, X;
        } catch (G) {
          if (G === oa || G === Fu) throw G;
          var el = ct(29, G, null, y.mode);
          return el.lanes = T, el.return = y, el;
        }
      };
    }
    var Ge = Ls(true), Vs = Ls(false), ue = false;
    function Vc(l) {
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
    function Kc(l, t) {
      l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
        baseState: l.baseState,
        firstBaseUpdate: l.firstBaseUpdate,
        lastBaseUpdate: l.lastBaseUpdate,
        shared: l.shared,
        callbacks: null
      });
    }
    function ne(l) {
      return {
        lane: l,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ce(l, t, e) {
      var a = l.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (ul & 2) !== 0) {
        var u = a.pending;
        return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Ku(l), Os(l, null, e), t;
      }
      return Vu(l, a, t, e), Ku(l);
    }
    function Fa(l, t, e) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, Hf(l, e);
      }
    }
    function Jc(l, t) {
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
    var wc = false;
    function Ia() {
      if (wc) {
        var l = ra;
        if (l !== null) throw l;
      }
    }
    function Pa(l, t, e, a) {
      wc = false;
      var u = l.updateQueue;
      ue = false;
      var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
      if (i !== null) {
        u.shared.pending = null;
        var s = i, v = s.next;
        s.next = null, c === null ? n = v : c.next = v, c = s;
        var E = l.alternate;
        E !== null && (E = E.updateQueue, i = E.lastBaseUpdate, i !== c && (i === null ? E.firstBaseUpdate = v : i.next = v, E.lastBaseUpdate = s));
      }
      if (n !== null) {
        var A = u.baseState;
        c = 0, E = v = s = null, i = n;
        do {
          var S = i.lane & -536870913, p = S !== i.lane;
          if (p ? (I & S) === S : (a & S) === S) {
            S !== 0 && S === sa && (wc = true), E !== null && (E = E.next = {
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: null,
              next: null
            });
            l: {
              var q = l, Q = i;
              S = t;
              var dl = e;
              switch (Q.tag) {
                case 1:
                  if (q = Q.payload, typeof q == "function") {
                    A = q.call(dl, A, S);
                    break l;
                  }
                  A = q;
                  break l;
                case 3:
                  q.flags = q.flags & -65537 | 128;
                case 0:
                  if (q = Q.payload, S = typeof q == "function" ? q.call(dl, A, S) : q, S == null) break l;
                  A = M({}, A, S);
                  break l;
                case 2:
                  ue = true;
              }
            }
            S = i.callback, S !== null && (l.flags |= 64, p && (l.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [
              S
            ] : p.push(S));
          } else p = {
            lane: S,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, E === null ? (v = E = p, s = A) : E = E.next = p, c |= S;
          if (i = i.next, i === null) {
            if (i = u.shared.pending, i === null) break;
            p = i, i = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
          }
        } while (true);
        E === null && (s = A), u.baseState = s, u.firstBaseUpdate = v, u.lastBaseUpdate = E, n === null && (u.shared.lanes = 0), oe |= c, l.lanes = c, l.memoizedState = A;
      }
    }
    function Ks(l, t) {
      if (typeof l != "function") throw Error(r(191, l));
      l.call(t);
    }
    function Js(l, t) {
      var e = l.callbacks;
      if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) Ks(e[l], t);
    }
    var ya = d(null), tn = d(0);
    function ws(l, t) {
      l = kt, H(tn, l), H(ya, t), kt = l | t.baseLanes;
    }
    function kc() {
      H(tn, kt), H(ya, ya.current);
    }
    function Wc() {
      kt = tn.current, _(ya), _(tn);
    }
    var it = d(null), pt = null;
    function ie(l) {
      var t = l.alternate;
      H(zl, zl.current & 1), H(it, l), pt === null && (t === null || ya.current !== null || t.memoizedState !== null) && (pt = l);
    }
    function $c(l) {
      H(zl, zl.current), H(it, l), pt === null && (pt = l);
    }
    function ks(l) {
      l.tag === 22 ? (H(zl, zl.current), H(it, l), pt === null && (pt = l)) : fe();
    }
    function fe() {
      H(zl, zl.current), H(it, it.current);
    }
    function ft(l) {
      _(it), pt === l && (pt = null), _(zl);
    }
    var zl = d(0);
    function en(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var e = t.memoizedState;
          if (e !== null && (e = e.dehydrated, e === null || ef(e) || af(e))) return t;
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
    var Xt = 0, K = null, rl = null, Ol = null, an = false, ma = false, Xe = false, un = 0, lu = 0, ha = null, vy = 0;
    function Sl() {
      throw Error(r(321));
    }
    function Fc(l, t) {
      if (t === null) return false;
      for (var e = 0; e < t.length && e < l.length; e++) if (!nt(l[e], t[e])) return false;
      return true;
    }
    function Ic(l, t, e, a, u, n) {
      return Xt = n, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? Ur : yi, Xe = false, n = e(a, u), Xe = false, ma && (n = $s(t, e, a, u)), Ws(l), n;
    }
    function Ws(l) {
      z.H = au;
      var t = rl !== null && rl.next !== null;
      if (Xt = 0, Ol = rl = K = null, an = false, lu = 0, ha = null, t) throw Error(r(300));
      l === null || Nl || (l = l.dependencies, l !== null && ku(l) && (Nl = true));
    }
    function $s(l, t, e, a) {
      K = l;
      var u = 0;
      do {
        if (ma && (ha = null), lu = 0, ma = false, 25 <= u) throw Error(r(301));
        if (u += 1, Ol = rl = null, l.updateQueue != null) {
          var n = l.updateQueue;
          n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
        }
        z.H = jr, n = t(e, a);
      } while (ma);
      return n;
    }
    function by() {
      var l = z.H, t = l.useState()[0];
      return t = typeof t.then == "function" ? tu(t) : t, l = l.useState()[0], (rl !== null ? rl.memoizedState : null) !== l && (K.flags |= 1024), t;
    }
    function Pc() {
      var l = un !== 0;
      return un = 0, l;
    }
    function li(l, t, e) {
      t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
    }
    function ti(l) {
      if (an) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), l = l.next;
        }
        an = false;
      }
      Xt = 0, Ol = rl = K = null, ma = false, lu = un = 0, ha = null;
    }
    function Zl() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ol === null ? K.memoizedState = Ol = l : Ol = Ol.next = l, Ol;
    }
    function Tl() {
      if (rl === null) {
        var l = K.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = rl.next;
      var t = Ol === null ? K.memoizedState : Ol.next;
      if (t !== null) Ol = t, rl = l;
      else {
        if (l === null) throw K.alternate === null ? Error(r(467)) : Error(r(310));
        rl = l, l = {
          memoizedState: rl.memoizedState,
          baseState: rl.baseState,
          baseQueue: rl.baseQueue,
          queue: rl.queue,
          next: null
        }, Ol === null ? K.memoizedState = Ol = l : Ol = Ol.next = l;
      }
      return Ol;
    }
    function nn() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function tu(l) {
      var t = lu;
      return lu += 1, ha === null && (ha = []), l = Xs(ha, l, t), t = K, (Ol === null ? t.memoizedState : Ol.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Ur : yi), l;
    }
    function cn(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return tu(l);
        if (l.$$typeof === yl) return ql(l);
      }
      throw Error(r(438, String(l)));
    }
    function ei(l) {
      var t = null, e = K.updateQueue;
      if (e !== null && (t = e.memoCache), t == null) {
        var a = K.alternate;
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
      }), e === null && (e = nn(), K.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ut;
      return t.index++, e;
    }
    function Qt(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function fn(l) {
      var t = Tl();
      return ai(t, rl, l);
    }
    function ai(l, t, e) {
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
        var i = c = null, s = null, v = t, E = false;
        do {
          var A = v.lane & -536870913;
          if (A !== v.lane ? (I & A) === A : (Xt & A) === A) {
            var S = v.revertLane;
            if (S === 0) s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), A === sa && (E = true);
            else if ((Xt & S) === S) {
              v = v.next, S === sa && (E = true);
              continue;
            } else A = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, s === null ? (i = s = A, c = n) : s = s.next = A, K.lanes |= S, oe |= S;
            A = v.action, Xe && e(n, A), n = v.hasEagerState ? v.eagerState : e(n, A);
          } else S = {
            lane: A,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, s === null ? (i = s = S, c = n) : s = s.next = S, K.lanes |= A, oe |= A;
          v = v.next;
        } while (v !== null && v !== t);
        if (s === null ? c = n : s.next = i, !nt(n, l.memoizedState) && (Nl = true, E && (e = ra, e !== null))) throw e;
        l.memoizedState = n, l.baseState = c, l.baseQueue = s, a.lastRenderedState = n;
      }
      return u === null && (a.lanes = 0), [
        l.memoizedState,
        a.dispatch
      ];
    }
    function ui(l) {
      var t = Tl(), e = t.queue;
      if (e === null) throw Error(r(311));
      e.lastRenderedReducer = l;
      var a = e.dispatch, u = e.pending, n = t.memoizedState;
      if (u !== null) {
        e.pending = null;
        var c = u = u.next;
        do
          n = l(n, c.action), c = c.next;
        while (c !== u);
        nt(n, t.memoizedState) || (Nl = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
      }
      return [
        n,
        a
      ];
    }
    function Fs(l, t, e) {
      var a = K, u = Tl(), n = ll;
      if (n) {
        if (e === void 0) throw Error(r(407));
        e = e();
      } else e = t();
      var c = !nt((rl || u).memoizedState, e);
      if (c && (u.memoizedState = e, Nl = true), u = u.queue, ii(lr.bind(null, a, u, l), [
        l
      ]), u.getSnapshot !== t || c || Ol !== null && Ol.memoizedState.tag & 1) {
        if (a.flags |= 2048, ga(9, {
          destroy: void 0
        }, Ps.bind(null, a, u, e, t), null), hl === null) throw Error(r(349));
        n || (Xt & 127) !== 0 || Is(a, t, e);
      }
      return e;
    }
    function Is(l, t, e) {
      l.flags |= 16384, l = {
        getSnapshot: t,
        value: e
      }, t = K.updateQueue, t === null ? (t = nn(), K.updateQueue = t, t.stores = [
        l
      ]) : (e = t.stores, e === null ? t.stores = [
        l
      ] : e.push(l));
    }
    function Ps(l, t, e, a) {
      t.value = e, t.getSnapshot = a, tr(t) && er(l);
    }
    function lr(l, t, e) {
      return e(function() {
        tr(t) && er(l);
      });
    }
    function tr(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var e = t();
        return !nt(l, e);
      } catch {
        return true;
      }
    }
    function er(l) {
      var t = Ue(l, 2);
      t !== null && Pl(t, l, 2);
    }
    function ni(l) {
      var t = Zl();
      if (typeof l == "function") {
        var e = l;
        if (l = e(), Xe) {
          Ft(true);
          try {
            e();
          } finally {
            Ft(false);
          }
        }
      }
      return t.memoizedState = t.baseState = l, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: l
      }, t;
    }
    function ar(l, t, e, a) {
      return l.baseState = e, ai(l, rl, typeof a == "function" ? a : Qt);
    }
    function Sy(l, t, e, a, u) {
      if (on(l)) throw Error(r(485));
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
        z.T !== null ? e(true) : n.isTransition = false, a(n), e = t.pending, e === null ? (n.next = t.pending = n, ur(t, n)) : (n.next = e.next, t.pending = e.next = n);
      }
    }
    function ur(l, t) {
      var e = t.action, a = t.payload, u = l.state;
      if (t.isTransition) {
        var n = z.T, c = {};
        z.T = c;
        try {
          var i = e(u, a), s = z.S;
          s !== null && s(c, i), nr(l, t, i);
        } catch (v) {
          ci(l, t, v);
        } finally {
          n !== null && c.types !== null && (n.types = c.types), z.T = n;
        }
      } else try {
        n = e(u, a), nr(l, t, n);
      } catch (v) {
        ci(l, t, v);
      }
    }
    function nr(l, t, e) {
      e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
        cr(l, t, a);
      }, function(a) {
        return ci(l, t, a);
      }) : cr(l, t, e);
    }
    function cr(l, t, e) {
      t.status = "fulfilled", t.value = e, ir(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ur(l, e)));
    }
    function ci(l, t, e) {
      var a = l.pending;
      if (l.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = e, ir(t), t = t.next;
        while (t !== a);
      }
      l.action = null;
    }
    function ir(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function fr(l, t) {
      return t;
    }
    function sr(l, t) {
      if (ll) {
        var e = hl.formState;
        if (e !== null) {
          l: {
            var a = K;
            if (ll) {
              if (gl) {
                t: {
                  for (var u = gl, n = St; u.nodeType !== 8; ) {
                    if (!n) {
                      u = null;
                      break t;
                    }
                    if (u = xt(u.nextSibling), u === null) {
                      u = null;
                      break t;
                    }
                  }
                  n = u.data, u = n === "F!" || n === "F" ? u : null;
                }
                if (u) {
                  gl = xt(u.nextSibling), a = u.data === "F!";
                  break l;
                }
              }
              ee(a);
            }
            a = false;
          }
          a && (t = e[0]);
        }
      }
      return e = Zl(), e.memoizedState = e.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: t
      }, e.queue = a, e = Nr.bind(null, K, a), a.dispatch = e, a = ni(false), n = di.bind(null, K, false, a.queue), a = Zl(), u = {
        state: t,
        dispatch: null,
        action: l,
        pending: null
      }, a.queue = u, e = Sy.bind(null, K, u, n, e), u.dispatch = e, a.memoizedState = l, [
        t,
        e,
        false
      ];
    }
    function rr(l) {
      var t = Tl();
      return or(t, rl, l);
    }
    function or(l, t, e) {
      if (t = ai(l, t, fr)[0], l = fn(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = tu(t);
      } catch (c) {
        throw c === oa ? Fu : c;
      }
      else a = t;
      t = Tl();
      var u = t.queue, n = u.dispatch;
      return e !== t.memoizedState && (K.flags |= 2048, ga(9, {
        destroy: void 0
      }, py.bind(null, u, e), null)), [
        a,
        n,
        l
      ];
    }
    function py(l, t) {
      l.action = t;
    }
    function dr(l) {
      var t = Tl(), e = rl;
      if (e !== null) return or(t, e, l);
      Tl(), t = t.memoizedState, e = Tl();
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
      }, t = K.updateQueue, t === null && (t = nn(), K.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
    }
    function yr() {
      return Tl().memoizedState;
    }
    function sn(l, t, e, a) {
      var u = Zl();
      K.flags |= l, u.memoizedState = ga(1 | t, {
        destroy: void 0
      }, e, a === void 0 ? null : a);
    }
    function rn(l, t, e, a) {
      var u = Tl();
      a = a === void 0 ? null : a;
      var n = u.memoizedState.inst;
      rl !== null && a !== null && Fc(a, rl.memoizedState.deps) ? u.memoizedState = ga(t, n, e, a) : (K.flags |= l, u.memoizedState = ga(1 | t, n, e, a));
    }
    function mr(l, t) {
      sn(8390656, 8, l, t);
    }
    function ii(l, t) {
      rn(2048, 8, l, t);
    }
    function xy(l) {
      K.flags |= 4;
      var t = K.updateQueue;
      if (t === null) t = nn(), K.updateQueue = t, t.events = [
        l
      ];
      else {
        var e = t.events;
        e === null ? t.events = [
          l
        ] : e.push(l);
      }
    }
    function hr(l) {
      var t = Tl().memoizedState;
      return xy({
        ref: t,
        nextImpl: l
      }), function() {
        if ((ul & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function gr(l, t) {
      return rn(4, 2, l, t);
    }
    function vr(l, t) {
      return rn(4, 4, l, t);
    }
    function br(l, t) {
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
    function Sr(l, t, e) {
      e = e != null ? e.concat([
        l
      ]) : null, rn(4, 4, br.bind(null, t, l), e);
    }
    function fi() {
    }
    function pr(l, t) {
      var e = Tl();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      return t !== null && Fc(t, a[1]) ? a[0] : (e.memoizedState = [
        l,
        t
      ], l);
    }
    function xr(l, t) {
      var e = Tl();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      if (t !== null && Fc(t, a[1])) return a[0];
      if (a = l(), Xe) {
        Ft(true);
        try {
          l();
        } finally {
          Ft(false);
        }
      }
      return e.memoizedState = [
        a,
        t
      ], a;
    }
    function si(l, t, e) {
      return e === void 0 || (Xt & 1073741824) !== 0 && (I & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = zo(), K.lanes |= l, oe |= l, e);
    }
    function Er(l, t, e, a) {
      return nt(e, t) ? e : ya.current !== null ? (l = si(l, e, a), nt(l, t) || (Nl = true), l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (I & 261930) === 0 ? (Nl = true, l.memoizedState = e) : (l = zo(), K.lanes |= l, oe |= l, t);
    }
    function zr(l, t, e, a, u) {
      var n = C.p;
      C.p = n !== 0 && 8 > n ? n : 8;
      var c = z.T, i = {};
      z.T = i, di(l, false, t, e);
      try {
        var s = u(), v = z.S;
        if (v !== null && v(i, s), s !== null && typeof s == "object" && typeof s.then == "function") {
          var E = gy(s, a);
          eu(l, t, E, ot(l));
        } else eu(l, t, a, ot(l));
      } catch (A) {
        eu(l, t, {
          then: function() {
          },
          status: "rejected",
          reason: A
        }, ot());
      } finally {
        C.p = n, c !== null && i.types !== null && (c.types = i.types), z.T = c;
      }
    }
    function Ey() {
    }
    function ri(l, t, e, a) {
      if (l.tag !== 5) throw Error(r(476));
      var u = Tr(l).queue;
      zr(l, u, t, Z, e === null ? Ey : function() {
        return Ar(l), e(a);
      });
    }
    function Tr(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Z,
        baseState: Z,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qt,
          lastRenderedState: Z
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
          lastRenderedReducer: Qt,
          lastRenderedState: e
        },
        next: null
      }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
    }
    function Ar(l) {
      var t = Tr(l);
      t.next === null && (t = l.alternate.memoizedState), eu(l, t.next.queue, {}, ot());
    }
    function oi() {
      return ql(Su);
    }
    function _r() {
      return Tl().memoizedState;
    }
    function Or() {
      return Tl().memoizedState;
    }
    function zy(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var e = ot();
            l = ne(e);
            var a = ce(t, l, e);
            a !== null && (Pl(a, t, e), Fa(a, t, e)), t = {
              cache: Xc()
            }, l.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function Ty(l, t, e) {
      var a = ot();
      e = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, on(l) ? Mr(t, e) : (e = Mc(l, t, e, a), e !== null && (Pl(e, l, a), Dr(e, t, a)));
    }
    function Nr(l, t, e) {
      var a = ot();
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
      if (on(l)) Mr(t, u);
      else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
          var c = t.lastRenderedState, i = n(c, e);
          if (u.hasEagerState = true, u.eagerState = i, nt(i, c)) return Vu(l, t, u, 0), hl === null && Lu(), false;
        } catch {
        }
        if (e = Mc(l, t, u, a), e !== null) return Pl(e, l, a), Dr(e, t, a), true;
      }
      return false;
    }
    function di(l, t, e, a) {
      if (a = {
        lane: 2,
        revertLane: Vi(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, on(l)) {
        if (t) throw Error(r(479));
      } else t = Mc(l, e, a, 2), t !== null && Pl(t, l, 2);
    }
    function on(l) {
      var t = l.alternate;
      return l === K || t !== null && t === K;
    }
    function Mr(l, t) {
      ma = an = true;
      var e = l.pending;
      e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
    }
    function Dr(l, t, e) {
      if ((e & 4194048) !== 0) {
        var a = t.lanes;
        a &= l.pendingLanes, e |= a, t.lanes = e, Hf(l, e);
      }
    }
    var au = {
      readContext: ql,
      use: cn,
      useCallback: Sl,
      useContext: Sl,
      useEffect: Sl,
      useImperativeHandle: Sl,
      useLayoutEffect: Sl,
      useInsertionEffect: Sl,
      useMemo: Sl,
      useReducer: Sl,
      useRef: Sl,
      useState: Sl,
      useDebugValue: Sl,
      useDeferredValue: Sl,
      useTransition: Sl,
      useSyncExternalStore: Sl,
      useId: Sl,
      useHostTransitionStatus: Sl,
      useFormState: Sl,
      useActionState: Sl,
      useOptimistic: Sl,
      useMemoCache: Sl,
      useCacheRefresh: Sl
    };
    au.useEffectEvent = Sl;
    var Ur = {
      readContext: ql,
      use: cn,
      useCallback: function(l, t) {
        return Zl().memoizedState = [
          l,
          t === void 0 ? null : t
        ], l;
      },
      useContext: ql,
      useEffect: mr,
      useImperativeHandle: function(l, t, e) {
        e = e != null ? e.concat([
          l
        ]) : null, sn(4194308, 4, br.bind(null, t, l), e);
      },
      useLayoutEffect: function(l, t) {
        return sn(4194308, 4, l, t);
      },
      useInsertionEffect: function(l, t) {
        sn(4, 2, l, t);
      },
      useMemo: function(l, t) {
        var e = Zl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Xe) {
          Ft(true);
          try {
            l();
          } finally {
            Ft(false);
          }
        }
        return e.memoizedState = [
          a,
          t
        ], a;
      },
      useReducer: function(l, t, e) {
        var a = Zl();
        if (e !== void 0) {
          var u = e(t);
          if (Xe) {
            Ft(true);
            try {
              e(t);
            } finally {
              Ft(false);
            }
          }
        } else u = t;
        return a.memoizedState = a.baseState = u, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: u
        }, a.queue = l, l = l.dispatch = Ty.bind(null, K, l), [
          a.memoizedState,
          l
        ];
      },
      useRef: function(l) {
        var t = Zl();
        return l = {
          current: l
        }, t.memoizedState = l;
      },
      useState: function(l) {
        l = ni(l);
        var t = l.queue, e = Nr.bind(null, K, t);
        return t.dispatch = e, [
          l.memoizedState,
          e
        ];
      },
      useDebugValue: fi,
      useDeferredValue: function(l, t) {
        var e = Zl();
        return si(e, l, t);
      },
      useTransition: function() {
        var l = ni(false);
        return l = zr.bind(null, K, l.queue, true, false), Zl().memoizedState = l, [
          false,
          l
        ];
      },
      useSyncExternalStore: function(l, t, e) {
        var a = K, u = Zl();
        if (ll) {
          if (e === void 0) throw Error(r(407));
          e = e();
        } else {
          if (e = t(), hl === null) throw Error(r(349));
          (I & 127) !== 0 || Is(a, t, e);
        }
        u.memoizedState = e;
        var n = {
          value: e,
          getSnapshot: t
        };
        return u.queue = n, mr(lr.bind(null, a, n, l), [
          l
        ]), a.flags |= 2048, ga(9, {
          destroy: void 0
        }, Ps.bind(null, a, n, e, t), null), e;
      },
      useId: function() {
        var l = Zl(), t = hl.identifierPrefix;
        if (ll) {
          var e = Nt, a = Ot;
          e = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = un++, 0 < e && (t += "H" + e.toString(32)), t += "_";
        } else e = vy++, t = "_" + t + "r_" + e.toString(32) + "_";
        return l.memoizedState = t;
      },
      useHostTransitionStatus: oi,
      useFormState: sr,
      useActionState: sr,
      useOptimistic: function(l) {
        var t = Zl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = e, t = di.bind(null, K, true, e), e.dispatch = t, [
          l,
          t
        ];
      },
      useMemoCache: ei,
      useCacheRefresh: function() {
        return Zl().memoizedState = zy.bind(null, K);
      },
      useEffectEvent: function(l) {
        var t = Zl(), e = {
          impl: l
        };
        return t.memoizedState = e, function() {
          if ((ul & 2) !== 0) throw Error(r(440));
          return e.impl.apply(void 0, arguments);
        };
      }
    }, yi = {
      readContext: ql,
      use: cn,
      useCallback: pr,
      useContext: ql,
      useEffect: ii,
      useImperativeHandle: Sr,
      useInsertionEffect: gr,
      useLayoutEffect: vr,
      useMemo: xr,
      useReducer: fn,
      useRef: yr,
      useState: function() {
        return fn(Qt);
      },
      useDebugValue: fi,
      useDeferredValue: function(l, t) {
        var e = Tl();
        return Er(e, rl.memoizedState, l, t);
      },
      useTransition: function() {
        var l = fn(Qt)[0], t = Tl().memoizedState;
        return [
          typeof l == "boolean" ? l : tu(l),
          t
        ];
      },
      useSyncExternalStore: Fs,
      useId: _r,
      useHostTransitionStatus: oi,
      useFormState: rr,
      useActionState: rr,
      useOptimistic: function(l, t) {
        var e = Tl();
        return ar(e, rl, l, t);
      },
      useMemoCache: ei,
      useCacheRefresh: Or
    };
    yi.useEffectEvent = hr;
    var jr = {
      readContext: ql,
      use: cn,
      useCallback: pr,
      useContext: ql,
      useEffect: ii,
      useImperativeHandle: Sr,
      useInsertionEffect: gr,
      useLayoutEffect: vr,
      useMemo: xr,
      useReducer: ui,
      useRef: yr,
      useState: function() {
        return ui(Qt);
      },
      useDebugValue: fi,
      useDeferredValue: function(l, t) {
        var e = Tl();
        return rl === null ? si(e, l, t) : Er(e, rl.memoizedState, l, t);
      },
      useTransition: function() {
        var l = ui(Qt)[0], t = Tl().memoizedState;
        return [
          typeof l == "boolean" ? l : tu(l),
          t
        ];
      },
      useSyncExternalStore: Fs,
      useId: _r,
      useHostTransitionStatus: oi,
      useFormState: dr,
      useActionState: dr,
      useOptimistic: function(l, t) {
        var e = Tl();
        return rl !== null ? ar(e, rl, l, t) : (e.baseState = l, [
          l,
          e.queue.dispatch
        ]);
      },
      useMemoCache: ei,
      useCacheRefresh: Or
    };
    jr.useEffectEvent = hr;
    function mi(l, t, e, a) {
      t = l.memoizedState, e = e(a, t), e = e == null ? t : M({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
    }
    var hi = {
      enqueueSetState: function(l, t, e) {
        l = l._reactInternals;
        var a = ot(), u = ne(a);
        u.payload = t, e != null && (u.callback = e), t = ce(l, u, a), t !== null && (Pl(t, l, a), Fa(t, l, a));
      },
      enqueueReplaceState: function(l, t, e) {
        l = l._reactInternals;
        var a = ot(), u = ne(a);
        u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ce(l, u, a), t !== null && (Pl(t, l, a), Fa(t, l, a));
      },
      enqueueForceUpdate: function(l, t) {
        l = l._reactInternals;
        var e = ot(), a = ne(e);
        a.tag = 2, t != null && (a.callback = t), t = ce(l, a, e), t !== null && (Pl(t, l, e), Fa(t, l, e));
      }
    };
    function Rr(l, t, e, a, u, n, c) {
      return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !La(e, a) || !La(u, n) : true;
    }
    function Cr(l, t, e, a) {
      l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && hi.enqueueReplaceState(t, t.state, null);
    }
    function Qe(l, t) {
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
    function Hr(l) {
      Zu(l);
    }
    function Br(l) {
      console.error(l);
    }
    function qr(l) {
      Zu(l);
    }
    function dn(l, t) {
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
    function Yr(l, t, e) {
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
    function gi(l, t, e) {
      return e = ne(e), e.tag = 3, e.payload = {
        element: null
      }, e.callback = function() {
        dn(l, t);
      }, e;
    }
    function Gr(l) {
      return l = ne(l), l.tag = 3, l;
    }
    function Xr(l, t, e, a) {
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var n = a.value;
        l.payload = function() {
          return u(n);
        }, l.callback = function() {
          Yr(t, e, a);
        };
      }
      var c = e.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
        Yr(t, e, a), typeof u != "function" && (de === null ? de = /* @__PURE__ */ new Set([
          this
        ]) : de.add(this));
        var i = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: i !== null ? i : ""
        });
      });
    }
    function Ay(l, t, e, a, u) {
      if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = e.alternate, t !== null && fa(t, e, u, true), e = it.current, e !== null) {
          switch (e.tag) {
            case 31:
            case 13:
              return pt === null ? Tn() : e.alternate === null && pl === 0 && (pl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Iu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : t.add(a), Qi(l, a, u)), false;
            case 22:
              return e.flags |= 65536, a === Iu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a)), Qi(l, a, u)), false;
          }
          throw Error(r(435, e.tag));
        }
        return Qi(l, a, u), Tn(), false;
      }
      if (ll) return t = it.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Hc && (l = Error(r(422), {
        cause: a
      }), Ja(gt(l, e)))) : (a !== Hc && (t = Error(r(423), {
        cause: a
      }), Ja(gt(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = gt(a, e), u = gi(l.stateNode, a, u), Jc(l, u), pl !== 4 && (pl = 2)), false;
      var n = Error(r(520), {
        cause: a
      });
      if (n = gt(n, e), ou === null ? ou = [
        n
      ] : ou.push(n), pl !== 4 && (pl = 2), t === null) return true;
      a = gt(a, e), e = t;
      do {
        switch (e.tag) {
          case 3:
            return e.flags |= 65536, l = u & -u, e.lanes |= l, l = gi(e.stateNode, a, l), Jc(e, l), false;
          case 1:
            if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (de === null || !de.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Gr(u), Xr(u, l, e, a), Jc(e, u), false;
        }
        e = e.return;
      } while (e !== null);
      return false;
    }
    var vi = Error(r(461)), Nl = false;
    function Yl(l, t, e, a) {
      t.child = l === null ? Vs(t, null, e, a) : Ge(t, l.child, e, a);
    }
    function Qr(l, t, e, a, u) {
      e = e.render;
      var n = t.ref;
      if ("ref" in a) {
        var c = {};
        for (var i in a) i !== "ref" && (c[i] = a[i]);
      } else c = a;
      return He(t), a = Ic(l, t, e, c, n, u), i = Pc(), l !== null && !Nl ? (li(l, t, u), Zt(l, t, u)) : (ll && i && Rc(t), t.flags |= 1, Yl(l, t, a, u), t.child);
    }
    function Zr(l, t, e, a, u) {
      if (l === null) {
        var n = e.type;
        return typeof n == "function" && !Dc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Lr(l, t, n, a, u)) : (l = Ju(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
      }
      if (n = l.child, !Ai(l, u)) {
        var c = n.memoizedProps;
        if (e = e.compare, e = e !== null ? e : La, e(c, a) && l.ref === t.ref) return Zt(l, t, u);
      }
      return t.flags |= 1, l = Bt(n, a), l.ref = t.ref, l.return = t, t.child = l;
    }
    function Lr(l, t, e, a, u) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (La(n, a) && l.ref === t.ref) if (Nl = false, t.pendingProps = a = n, Ai(l, u)) (l.flags & 131072) !== 0 && (Nl = true);
        else return t.lanes = l.lanes, Zt(l, t, u);
      }
      return bi(l, t, e, a, u);
    }
    function Vr(l, t, e, a) {
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
          return Kr(l, t, n, e, a);
        }
        if ((e & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, l !== null && $u(t, n !== null ? n.cachePool : null), n !== null ? ws(t, n) : kc(), ks(t);
        else return a = t.lanes = 536870912, Kr(l, t, n !== null ? n.baseLanes | e : e, e, a);
      } else n !== null ? ($u(t, n.cachePool), ws(t, n), fe(), t.memoizedState = null) : (l !== null && $u(t, null), kc(), fe());
      return Yl(l, t, u, e), t.child;
    }
    function uu(l, t) {
      return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Kr(l, t, e, a, u) {
      var n = Zc();
      return n = n === null ? null : {
        parent: _l._currentValue,
        pool: n
      }, t.memoizedState = {
        baseLanes: e,
        cachePool: n
      }, l !== null && $u(t, null), kc(), ks(t), l !== null && fa(l, t, a, true), t.childLanes = u, null;
    }
    function yn(l, t) {
      return t = hn({
        mode: t.mode,
        children: t.children
      }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
    }
    function Jr(l, t, e) {
      return Ge(t, l.child, null, e), l = yn(t, t.pendingProps), l.flags |= 2, ft(t), t.memoizedState = null, l;
    }
    function _y(l, t, e) {
      var a = t.pendingProps, u = (t.flags & 128) !== 0;
      if (t.flags &= -129, l === null) {
        if (ll) {
          if (a.mode === "hidden") return l = yn(t, a), t.lanes = 536870912, uu(null, l);
          if ($c(t), (l = gl) ? (l = n0(l, St), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: le !== null ? {
              id: Ot,
              overflow: Nt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Ms(l), e.return = t, t.child = e, Bl = t, gl = null)) : l = null, l === null) throw ee(t);
          return t.lanes = 536870912, null;
        }
        return yn(t, a);
      }
      var n = l.memoizedState;
      if (n !== null) {
        var c = n.dehydrated;
        if ($c(t), u) if (t.flags & 256) t.flags &= -257, t = Jr(l, t, e);
        else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
        else if (Nl || fa(l, t, e, false), u = (e & l.childLanes) !== 0, Nl || u) {
          if (a = hl, a !== null && (c = Bf(a, e), c !== 0 && c !== n.retryLane)) throw n.retryLane = c, Ue(l, c), Pl(a, l, c), vi;
          Tn(), t = Jr(l, t, e);
        } else l = n.treeContext, gl = xt(c.nextSibling), Bl = t, ll = true, te = null, St = false, l !== null && js(t, l), t = yn(t, a), t.flags |= 4096;
        return t;
      }
      return l = Bt(l.child, {
        mode: a.mode,
        children: a.children
      }), l.ref = t.ref, t.child = l, l.return = t, l;
    }
    function mn(l, t) {
      var e = t.ref;
      if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(r(284));
        (l === null || l.ref !== e) && (t.flags |= 4194816);
      }
    }
    function bi(l, t, e, a, u) {
      return He(t), e = Ic(l, t, e, a, void 0, u), a = Pc(), l !== null && !Nl ? (li(l, t, u), Zt(l, t, u)) : (ll && a && Rc(t), t.flags |= 1, Yl(l, t, e, u), t.child);
    }
    function wr(l, t, e, a, u, n) {
      return He(t), t.updateQueue = null, e = $s(t, a, e, u), Ws(l), a = Pc(), l !== null && !Nl ? (li(l, t, n), Zt(l, t, n)) : (ll && a && Rc(t), t.flags |= 1, Yl(l, t, e, n), t.child);
    }
    function kr(l, t, e, a, u) {
      if (He(t), t.stateNode === null) {
        var n = ua, c = e.contextType;
        typeof c == "object" && c !== null && (n = ql(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Vc(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? ql(c) : ua, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (mi(t, e, c, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && hi.enqueueReplaceState(n, n.state, null), Pa(t, a, n, u), Ia(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (l === null) {
        n = t.stateNode;
        var i = t.memoizedProps, s = Qe(e, i);
        n.props = s;
        var v = n.context, E = e.contextType;
        c = ua, typeof E == "object" && E !== null && (c = ql(E));
        var A = e.getDerivedStateFromProps;
        E = typeof A == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, E || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && Cr(t, n, a, c), ue = false;
        var S = t.memoizedState;
        n.state = S, Pa(t, a, n, u), Ia(), v = t.memoizedState, i || S !== v || ue ? (typeof A == "function" && (mi(t, e, A, a), v = t.memoizedState), (s = ue || Rr(t, e, s, a, S, v, c)) ? (E || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = v), n.props = a, n.state = v, n.context = c, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        n = t.stateNode, Kc(l, t), c = t.memoizedProps, E = Qe(e, c), n.props = E, A = t.pendingProps, S = n.context, v = e.contextType, s = ua, typeof v == "object" && v !== null && (s = ql(v)), i = e.getDerivedStateFromProps, (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== A || S !== s) && Cr(t, n, a, s), ue = false, S = t.memoizedState, n.state = S, Pa(t, a, n, u), Ia();
        var p = t.memoizedState;
        c !== A || S !== p || ue || l !== null && l.dependencies !== null && ku(l.dependencies) ? (typeof i == "function" && (mi(t, e, i, a), p = t.memoizedState), (E = ue || Rr(t, e, E, a, S, p, s) || l !== null && l.dependencies !== null && ku(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, p, s)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), n.props = a, n.state = p, n.context = s, a = E) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), a = false);
      }
      return n = a, mn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ge(t, l.child, null, u), t.child = Ge(t, null, e, u)) : Yl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Zt(l, t, u), l;
    }
    function Wr(l, t, e, a) {
      return Re(), t.flags |= 256, Yl(l, t, e, a), t.child;
    }
    var Si = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function pi(l) {
      return {
        baseLanes: l,
        cachePool: Ys()
      };
    }
    function xi(l, t, e) {
      return l = l !== null ? l.childLanes & ~e : 0, t && (l |= rt), l;
    }
    function $r(l, t, e) {
      var a = t.pendingProps, u = false, n = (t.flags & 128) !== 0, c;
      if ((c = n) || (c = l !== null && l.memoizedState === null ? false : (zl.current & 2) !== 0), c && (u = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
        if (ll) {
          if (u ? ie(t) : fe(), (l = gl) ? (l = n0(l, St), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: le !== null ? {
              id: Ot,
              overflow: Nt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Ms(l), e.return = t, t.child = e, Bl = t, gl = null)) : l = null, l === null) throw ee(t);
          return af(l) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var i = a.children;
        return a = a.fallback, u ? (fe(), u = t.mode, i = hn({
          mode: "hidden",
          children: i
        }, u), a = je(a, u, e, null), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = pi(e), a.childLanes = xi(l, c, e), t.memoizedState = Si, uu(null, a)) : (ie(t), Ei(t, i));
      }
      var s = l.memoizedState;
      if (s !== null && (i = s.dehydrated, i !== null)) {
        if (n) t.flags & 256 ? (ie(t), t.flags &= -257, t = zi(l, t, e)) : t.memoizedState !== null ? (fe(), t.child = l.child, t.flags |= 128, t = null) : (fe(), i = a.fallback, u = t.mode, a = hn({
          mode: "visible",
          children: a.children
        }, u), i = je(i, u, e, null), i.flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, Ge(t, l.child, null, e), a = t.child, a.memoizedState = pi(e), a.childLanes = xi(l, c, e), t.memoizedState = Si, t = uu(null, a));
        else if (ie(t), af(i)) {
          if (c = i.nextSibling && i.nextSibling.dataset, c) var v = c.dgst;
          c = v, a = Error(r(419)), a.stack = "", a.digest = c, Ja({
            value: a,
            source: null,
            stack: null
          }), t = zi(l, t, e);
        } else if (Nl || fa(l, t, e, false), c = (e & l.childLanes) !== 0, Nl || c) {
          if (c = hl, c !== null && (a = Bf(c, e), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ue(l, a), Pl(c, l, a), vi;
          ef(i) || Tn(), t = zi(l, t, e);
        } else ef(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, gl = xt(i.nextSibling), Bl = t, ll = true, te = null, St = false, l !== null && js(t, l), t = Ei(t, a.children), t.flags |= 4096);
        return t;
      }
      return u ? (fe(), i = a.fallback, u = t.mode, s = l.child, v = s.sibling, a = Bt(s, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = s.subtreeFlags & 65011712, v !== null ? i = Bt(v, i) : (i = je(i, u, e, null), i.flags |= 2), i.return = t, a.return = t, a.sibling = i, t.child = a, uu(null, a), a = t.child, i = l.child.memoizedState, i === null ? i = pi(e) : (u = i.cachePool, u !== null ? (s = _l._currentValue, u = u.parent !== s ? {
        parent: s,
        pool: s
      } : u) : u = Ys(), i = {
        baseLanes: i.baseLanes | e,
        cachePool: u
      }), a.memoizedState = i, a.childLanes = xi(l, c, e), t.memoizedState = Si, uu(l.child, a)) : (ie(t), e = l.child, l = e.sibling, e = Bt(e, {
        mode: "visible",
        children: a.children
      }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [
        l
      ], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e);
    }
    function Ei(l, t) {
      return t = hn({
        mode: "visible",
        children: t
      }, l.mode), t.return = l, l.child = t;
    }
    function hn(l, t) {
      return l = ct(22, l, null, t), l.lanes = 0, l;
    }
    function zi(l, t, e) {
      return Ge(t, l.child, null, e), l = Ei(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
    }
    function Fr(l, t, e) {
      l.lanes |= t;
      var a = l.alternate;
      a !== null && (a.lanes |= t), Yc(l.return, t, e);
    }
    function Ti(l, t, e, a, u, n) {
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
    function Ir(l, t, e) {
      var a = t.pendingProps, u = a.revealOrder, n = a.tail;
      a = a.children;
      var c = zl.current, i = (c & 2) !== 0;
      if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, H(zl, c), Yl(l, t, a, e), a = ll ? Ka : 0, !i && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Fr(l, e, t);
        else if (l.tag === 19) Fr(l, e, t);
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
          for (e = t.child, u = null; e !== null; ) l = e.alternate, l !== null && en(l) === null && (u = e), e = e.sibling;
          e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Ti(t, false, u, e, n, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (e = null, u = t.child, t.child = null; u !== null; ) {
            if (l = u.alternate, l !== null && en(l) === null) {
              t.child = u;
              break;
            }
            l = u.sibling, u.sibling = e, e = u, u = l;
          }
          Ti(t, true, e, null, n, a);
          break;
        case "together":
          Ti(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Zt(l, t, e) {
      if (l !== null && (t.dependencies = l.dependencies), oe |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
        if (fa(l, t, e, false), (e & t.childLanes) === 0) return null;
      } else return null;
      if (l !== null && t.child !== l.child) throw Error(r(153));
      if (t.child !== null) {
        for (l = t.child, e = Bt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) l = l.sibling, e = e.sibling = Bt(l, l.pendingProps), e.return = t;
        e.sibling = null;
      }
      return t.child;
    }
    function Ai(l, t) {
      return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && ku(l)));
    }
    function Oy(l, t, e) {
      switch (t.tag) {
        case 3:
          Ql(t, t.stateNode.containerInfo), ae(t, _l, l.memoizedState.cache), Re();
          break;
        case 27:
        case 5:
          Da(t);
          break;
        case 4:
          Ql(t, t.stateNode.containerInfo);
          break;
        case 10:
          ae(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, $c(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (ie(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? $r(l, t, e) : (ie(t), l = Zt(l, t, e), l !== null ? l.sibling : null);
          ie(t);
          break;
        case 19:
          var u = (l.flags & 128) !== 0;
          if (a = (e & t.childLanes) !== 0, a || (fa(l, t, e, false), a = (e & t.childLanes) !== 0), u) {
            if (a) return Ir(l, t, e);
            t.flags |= 128;
          }
          if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), H(zl, zl.current), a) break;
          return null;
        case 22:
          return t.lanes = 0, Vr(l, t, e, t.pendingProps);
        case 24:
          ae(t, _l, l.memoizedState.cache);
      }
      return Zt(l, t, e);
    }
    function Pr(l, t, e) {
      if (l !== null) if (l.memoizedProps !== t.pendingProps) Nl = true;
      else {
        if (!Ai(l, e) && (t.flags & 128) === 0) return Nl = false, Oy(l, t, e);
        Nl = (l.flags & 131072) !== 0;
      }
      else Nl = false, ll && (t.flags & 1048576) !== 0 && Us(t, Ka, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          l: {
            var a = t.pendingProps;
            if (l = qe(t.elementType), t.type = l, typeof l == "function") Dc(l) ? (a = Qe(l, a), t.tag = 1, t = kr(null, t, l, a, e)) : (t.tag = 0, t = bi(null, t, l, a, e));
            else {
              if (l != null) {
                var u = l.$$typeof;
                if (u === Vl) {
                  t.tag = 11, t = Qr(null, t, l, a, e);
                  break l;
                } else if (u === k) {
                  t.tag = 14, t = Zr(null, t, l, a, e);
                  break l;
                }
              }
              throw t = jt(l) || l, Error(r(306, t, ""));
            }
          }
          return t;
        case 0:
          return bi(l, t, t.type, t.pendingProps, e);
        case 1:
          return a = t.type, u = Qe(a, t.pendingProps), kr(l, t, a, u, e);
        case 3:
          l: {
            if (Ql(t, t.stateNode.containerInfo), l === null) throw Error(r(387));
            a = t.pendingProps;
            var n = t.memoizedState;
            u = n.element, Kc(l, t), Pa(t, a, null, e);
            var c = t.memoizedState;
            if (a = c.cache, ae(t, _l, a), a !== n.cache && Gc(t, [
              _l
            ], e, true), Ia(), a = c.element, n.isDehydrated) if (n = {
              element: a,
              isDehydrated: false,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Wr(l, t, a, e);
              break l;
            } else if (a !== u) {
              u = gt(Error(r(424)), t), Ja(u), t = Wr(l, t, a, e);
              break l;
            } else for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, gl = xt(l.firstChild), Bl = t, ll = true, te = null, St = true, e = Vs(t, null, a, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (Re(), a === u) {
                t = Zt(l, t, e);
                break l;
              }
              Yl(l, t, a, e);
            }
            t = t.child;
          }
          return t;
        case 26:
          return mn(l, t), l === null ? (e = o0(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : ll || (e = t.type, l = t.pendingProps, a = Un(W.current).createElement(e), a[Hl] = t, a[wl] = l, Gl(a, e, l), jl(a), t.stateNode = a) : t.memoizedState = o0(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
          return Da(t), l === null && ll && (a = t.stateNode = f0(t.type, t.pendingProps, W.current), Bl = t, St = true, u = gl, ge(t.type) ? (uf = u, gl = xt(a.firstChild)) : gl = u), Yl(l, t, t.pendingProps.children, e), mn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
          return l === null && ll && ((u = a = gl) && (a = am(a, t.type, t.pendingProps, St), a !== null ? (t.stateNode = a, Bl = t, gl = xt(a.firstChild), St = false, u = true) : u = false), u || ee(t)), Da(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, Pi(u, n) ? a = null : c !== null && Pi(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = Ic(l, t, by, null, null, e), Su._currentValue = u), mn(l, t), Yl(l, t, a, e), t.child;
        case 6:
          return l === null && ll && ((l = e = gl) && (e = um(e, t.pendingProps, St), e !== null ? (t.stateNode = e, Bl = t, gl = null, l = true) : l = false), l || ee(t)), null;
        case 13:
          return $r(l, t, e);
        case 4:
          return Ql(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Ge(t, null, a, e) : Yl(l, t, a, e), t.child;
        case 11:
          return Qr(l, t, t.type, t.pendingProps, e);
        case 7:
          return Yl(l, t, t.pendingProps, e), t.child;
        case 8:
          return Yl(l, t, t.pendingProps.children, e), t.child;
        case 12:
          return Yl(l, t, t.pendingProps.children, e), t.child;
        case 10:
          return a = t.pendingProps, ae(t, t.type, a.value), Yl(l, t, a.children, e), t.child;
        case 9:
          return u = t.type._context, a = t.pendingProps.children, He(t), u = ql(u), a = a(u), t.flags |= 1, Yl(l, t, a, e), t.child;
        case 14:
          return Zr(l, t, t.type, t.pendingProps, e);
        case 15:
          return Lr(l, t, t.type, t.pendingProps, e);
        case 19:
          return Ir(l, t, e);
        case 31:
          return _y(l, t, e);
        case 22:
          return Vr(l, t, e, t.pendingProps);
        case 24:
          return He(t), a = ql(_l), l === null ? (u = Zc(), u === null && (u = hl, n = Xc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = {
            parent: a,
            cache: u
          }, Vc(t), ae(t, _l, u)) : ((l.lanes & e) !== 0 && (Kc(l, t), Pa(t, null, null, e), Ia()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = {
            parent: a,
            cache: a
          }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ae(t, _l, a)) : (a = n.cache, ae(t, _l, a), a !== u.cache && Gc(t, [
            _l
          ], e, true))), Yl(l, t, t.pendingProps.children, e), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(r(156, t.tag));
    }
    function Lt(l) {
      l.flags |= 4;
    }
    function _i(l, t, e, a, u) {
      if ((t = (l.mode & 32) !== 0) && (t = false), t) {
        if (l.flags |= 16777216, (u & 335544128) === u) if (l.stateNode.complete) l.flags |= 8192;
        else if (Oo()) l.flags |= 8192;
        else throw Ye = Iu, Lc;
      } else l.flags &= -16777217;
    }
    function lo(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (l.flags |= 16777216, !g0(t)) if (Oo()) l.flags |= 8192;
      else throw Ye = Iu, Lc;
    }
    function gn(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Rf() : 536870912, l.lanes |= t, pa |= t);
    }
    function nu(l, t) {
      if (!ll) switch (l.tailMode) {
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
    function vl(l) {
      var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
      if (t) for (var u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
      else for (u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
      return l.subtreeFlags |= a, l.childLanes = e, t;
    }
    function Ny(l, t, e) {
      var a = t.pendingProps;
      switch (Cc(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return vl(t), null;
        case 1:
          return vl(t), null;
        case 3:
          return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Gt(_l), El(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (ia(t) ? Lt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bc())), vl(t), null;
        case 26:
          var u = t.type, n = t.memoizedState;
          return l === null ? (Lt(t), n !== null ? (vl(t), lo(t, n)) : (vl(t), _i(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Lt(t), vl(t), lo(t, n)) : (vl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Lt(t), vl(t), _i(t, u, l, a, e)), null;
        case 27:
          if (_u(t), e = W.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Lt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return vl(t), null;
            }
            l = Y.current, ia(t) ? Rs(t) : (l = f0(u, a, e), t.stateNode = l, Lt(t));
          }
          return vl(t), null;
        case 5:
          if (_u(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Lt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return vl(t), null;
            }
            if (n = Y.current, ia(t)) Rs(t);
            else {
              var c = Un(W.current);
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
              n[Hl] = t, n[wl] = a;
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
              l: switch (Gl(n, u, a), u) {
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
              a && Lt(t);
            }
          }
          return vl(t), _i(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== a && Lt(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
            if (l = W.current, ia(t)) {
              if (l = t.stateNode, e = t.memoizedProps, a = null, u = Bl, u !== null) switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
              l[Hl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === true || Fo(l.nodeValue, e)), l || ee(t, true);
            } else l = Un(l).createTextNode(a), l[Hl] = t, t.stateNode = l;
          }
          return vl(t), null;
        case 31:
          if (e = t.memoizedState, l === null || l.memoizedState !== null) {
            if (a = ia(t), e !== null) {
              if (l === null) {
                if (!a) throw Error(r(318));
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
                l[Hl] = t;
              } else Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              vl(t), l = false;
            } else e = Bc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = true;
            if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
            if ((t.flags & 128) !== 0) throw Error(r(558));
          }
          return vl(t), null;
        case 13:
          if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
            if (u = ia(t), a !== null && a.dehydrated !== null) {
              if (l === null) {
                if (!u) throw Error(r(318));
                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
                u[Hl] = t;
              } else Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              vl(t), u = false;
            } else u = Bc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = true;
            if (!u) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          }
          return ft(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), gn(t, t.updateQueue), vl(t), null);
        case 4:
          return El(), l === null && ki(t.stateNode.containerInfo), vl(t), null;
        case 10:
          return Gt(t.type), vl(t), null;
        case 19:
          if (_(zl), a = t.memoizedState, a === null) return vl(t), null;
          if (u = (t.flags & 128) !== 0, n = a.rendering, n === null) if (u) nu(a, false);
          else {
            if (pl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
              if (n = en(l), n !== null) {
                for (t.flags |= 128, nu(a, false), l = n.updateQueue, t.updateQueue = l, gn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) Ns(e, l), e = e.sibling;
                return H(zl, zl.current & 1 | 2), ll && qt(t, a.treeForkCount), t.child;
              }
              l = l.sibling;
            }
            a.tail !== null && et() > xn && (t.flags |= 128, u = true, nu(a, false), t.lanes = 4194304);
          }
          else {
            if (!u) if (l = en(n), l !== null) {
              if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, gn(t, l), nu(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ll) return vl(t), null;
            } else 2 * et() - a.renderingStartTime > xn && e !== 536870912 && (t.flags |= 128, u = true, nu(a, false), t.lanes = 4194304);
            a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
          }
          return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = et(), l.sibling = null, e = zl.current, H(zl, u ? e & 1 | 2 : e & 1), ll && qt(t, a.treeForkCount), l) : (vl(t), null);
        case 22:
        case 23:
          return ft(t), Wc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), e = t.updateQueue, e !== null && gn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && _(Be), null;
        case 24:
          return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Gt(_l), vl(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function My(l, t) {
      switch (Cc(t), t.tag) {
        case 1:
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
          return Gt(_l), El(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return _u(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (ft(t), t.alternate === null) throw Error(r(340));
            Re();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 13:
          if (ft(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
            if (t.alternate === null) throw Error(r(340));
            Re();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
          return _(zl), null;
        case 4:
          return El(), null;
        case 10:
          return Gt(t.type), null;
        case 22:
        case 23:
          return ft(t), Wc(), l !== null && _(Be), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
          return Gt(_l), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function to(l, t) {
      switch (Cc(t), t.tag) {
        case 3:
          Gt(_l), El();
          break;
        case 26:
        case 27:
        case 5:
          _u(t);
          break;
        case 4:
          El();
          break;
        case 31:
          t.memoizedState !== null && ft(t);
          break;
        case 13:
          ft(t);
          break;
        case 19:
          _(zl);
          break;
        case 10:
          Gt(t.type);
          break;
        case 22:
        case 23:
          ft(t), Wc(), l !== null && _(Be);
          break;
        case 24:
          Gt(_l);
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
        il(t, t.return, i);
      }
    }
    function se(l, t, e) {
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
                var s = e, v = i;
                try {
                  v();
                } catch (E) {
                  il(u, s, E);
                }
              }
            }
            a = a.next;
          } while (a !== n);
        }
      } catch (E) {
        il(t, t.return, E);
      }
    }
    function eo(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var e = l.stateNode;
        try {
          Js(t, e);
        } catch (a) {
          il(l, l.return, a);
        }
      }
    }
    function ao(l, t, e) {
      e.props = Qe(l.type, l.memoizedProps), e.state = l.memoizedState;
      try {
        e.componentWillUnmount();
      } catch (a) {
        il(l, t, a);
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
        il(l, t, u);
      }
    }
    function Mt(l, t) {
      var e = l.ref, a = l.refCleanup;
      if (e !== null) if (typeof a == "function") try {
        a();
      } catch (u) {
        il(l, t, u);
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
      }
      else if (typeof e == "function") try {
        e(null);
      } catch (u) {
        il(l, t, u);
      }
      else e.current = null;
    }
    function uo(l) {
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
        il(l, l.return, u);
      }
    }
    function Oi(l, t, e) {
      try {
        var a = l.stateNode;
        Fy(a, l.type, e, t), a[wl] = t;
      } catch (u) {
        il(l, l.return, u);
      }
    }
    function no(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ge(l.type) || l.tag === 4;
    }
    function Ni(l) {
      l: for (; ; ) {
        for (; l.sibling === null; ) {
          if (l.return === null || no(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if (l.tag === 27 && ge(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          l.child.return = l, l = l.child;
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function Mi(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Ct));
      else if (a !== 4 && (a === 27 && ge(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (Mi(l, t, e), l = l.sibling; l !== null; ) Mi(l, t, e), l = l.sibling;
    }
    function vn(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
      else if (a !== 4 && (a === 27 && ge(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (vn(l, t, e), l = l.sibling; l !== null; ) vn(l, t, e), l = l.sibling;
    }
    function co(l) {
      var t = l.stateNode, e = l.memoizedProps;
      try {
        for (var a = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
        Gl(t, a, e), t[Hl] = l, t[wl] = e;
      } catch (n) {
        il(l, l.return, n);
      }
    }
    var Vt = false, Ml = false, Di = false, io = typeof WeakSet == "function" ? WeakSet : Set, Rl = null;
    function Dy(l, t) {
      if (l = l.containerInfo, Fi = Yn, l = Ss(l), zc(l)) {
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
            var c = 0, i = -1, s = -1, v = 0, E = 0, A = l, S = null;
            t: for (; ; ) {
              for (var p; A !== e || u !== 0 && A.nodeType !== 3 || (i = c + u), A !== n || a !== 0 && A.nodeType !== 3 || (s = c + a), A.nodeType === 3 && (c += A.nodeValue.length), (p = A.firstChild) !== null; ) S = A, A = p;
              for (; ; ) {
                if (A === l) break t;
                if (S === e && ++v === u && (i = c), S === n && ++E === a && (s = c), (p = A.nextSibling) !== null) break;
                A = S, S = A.parentNode;
              }
              A = p;
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
      for (Ii = {
        focusedElem: l,
        selectionRange: e
      }, Yn = false, Rl = t; Rl !== null; ) if (t = Rl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Rl = l;
      else for (; Rl !== null; ) {
        switch (t = Rl, n = t.alternate, l = t.flags, t.tag) {
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
                var q = Qe(e.type, u);
                l = a.getSnapshotBeforeUpdate(q, n), a.__reactInternalSnapshotBeforeUpdate = l;
              } catch (Q) {
                il(e, e.return, Q);
              }
            }
            break;
          case 3:
            if ((l & 1024) !== 0) {
              if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) tf(l);
              else if (e === 1) switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  tf(l);
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
          l.return = t.return, Rl = l;
          break;
        }
        Rl = t.return;
      }
    }
    function fo(l, t, e) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Jt(l, e), a & 4 && cu(5, e);
          break;
        case 1:
          if (Jt(l, e), a & 4) if (l = e.stateNode, t === null) try {
            l.componentDidMount();
          } catch (c) {
            il(e, e.return, c);
          }
          else {
            var u = Qe(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              il(e, e.return, c);
            }
          }
          a & 64 && eo(e), a & 512 && iu(e, e.return);
          break;
        case 3:
          if (Jt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
            if (t = null, e.child !== null) switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
            try {
              Js(l, t);
            } catch (c) {
              il(e, e.return, c);
            }
          }
          break;
        case 27:
          t === null && a & 4 && co(e);
        case 26:
        case 5:
          Jt(l, e), t === null && a & 4 && uo(e), a & 512 && iu(e, e.return);
          break;
        case 12:
          Jt(l, e);
          break;
        case 31:
          Jt(l, e), a & 4 && oo(l, e);
          break;
        case 13:
          Jt(l, e), a & 4 && yo(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Gy.bind(null, e), nm(l, e))));
          break;
        case 22:
          if (a = e.memoizedState !== null || Vt, !a) {
            t = t !== null && t.memoizedState !== null || Ml, u = Vt;
            var n = Ml;
            Vt = a, (Ml = t) && !n ? wt(l, e, (e.subtreeFlags & 8772) !== 0) : Jt(l, e), Vt = u, Ml = n;
          }
          break;
        case 30:
          break;
        default:
          Jt(l, e);
      }
    }
    function so(l) {
      var t = l.alternate;
      t !== null && (l.alternate = null, so(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && cc(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
    }
    var bl = null, Wl = false;
    function Kt(l, t, e) {
      for (e = e.child; e !== null; ) ro(l, t, e), e = e.sibling;
    }
    function ro(l, t, e) {
      if (at && typeof at.onCommitFiberUnmount == "function") try {
        at.onCommitFiberUnmount(Ua, e);
      } catch {
      }
      switch (e.tag) {
        case 26:
          Ml || Mt(e, t), Kt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Ml || Mt(e, t);
          var a = bl, u = Wl;
          ge(e.type) && (bl = e.stateNode, Wl = false), Kt(l, t, e), gu(e.stateNode), bl = a, Wl = u;
          break;
        case 5:
          Ml || Mt(e, t);
        case 6:
          if (a = bl, u = Wl, bl = null, Kt(l, t, e), bl = a, Wl = u, bl !== null) if (Wl) try {
            (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(e.stateNode);
          } catch (n) {
            il(e, t, n);
          }
          else try {
            bl.removeChild(e.stateNode);
          } catch (n) {
            il(e, t, n);
          }
          break;
        case 18:
          bl !== null && (Wl ? (l = bl, a0(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Na(l)) : a0(bl, e.stateNode));
          break;
        case 4:
          a = bl, u = Wl, bl = e.stateNode.containerInfo, Wl = true, Kt(l, t, e), bl = a, Wl = u;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          se(2, e, t), Ml || se(4, e, t), Kt(l, t, e);
          break;
        case 1:
          Ml || (Mt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && ao(e, t, a)), Kt(l, t, e);
          break;
        case 21:
          Kt(l, t, e);
          break;
        case 22:
          Ml = (a = Ml) || e.memoizedState !== null, Kt(l, t, e), Ml = a;
          break;
        default:
          Kt(l, t, e);
      }
    }
    function oo(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
        l = l.dehydrated;
        try {
          Na(l);
        } catch (e) {
          il(t, t.return, e);
        }
      }
    }
    function yo(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
        Na(l);
      } catch (e) {
        il(t, t.return, e);
      }
    }
    function Uy(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new io()), t;
        case 22:
          return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new io()), t;
        default:
          throw Error(r(435, l.tag));
      }
    }
    function bn(l, t) {
      var e = Uy(l);
      t.forEach(function(a) {
        if (!e.has(a)) {
          e.add(a);
          var u = Xy.bind(null, l, a);
          a.then(u, u);
        }
      });
    }
    function $l(l, t) {
      var e = t.deletions;
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, c = t, i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (ge(i.type)) {
                bl = i.stateNode, Wl = false;
                break l;
              }
              break;
            case 5:
              bl = i.stateNode, Wl = false;
              break l;
            case 3:
            case 4:
              bl = i.stateNode.containerInfo, Wl = true;
              break l;
          }
          i = i.return;
        }
        if (bl === null) throw Error(r(160));
        ro(n, c, u), bl = null, Wl = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) mo(t, l), t = t.sibling;
    }
    var At = null;
    function mo(l, t) {
      var e = l.alternate, a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $l(t, l), Fl(l), a & 4 && (se(3, l, l.return), cu(3, l), se(5, l, l.return));
          break;
        case 1:
          $l(t, l), Fl(l), a & 512 && (Ml || e === null || Mt(e, e.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
          break;
        case 26:
          var u = At;
          if ($l(t, l), Fl(l), a & 512 && (Ml || e === null || Mt(e, e.return)), a & 4) {
            var n = e !== null ? e.memoizedState : null;
            if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
              l: {
                a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                t: switch (a) {
                  case "title":
                    n = u.getElementsByTagName("title")[0], (!n || n[Ca] || n[Hl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Gl(n, a, e), n[Hl] = l, jl(n), a = n;
                    break l;
                  case "link":
                    var c = m0("link", "href", u).get(a + (e.href || ""));
                    if (c) {
                      for (var i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                        c.splice(i, 1);
                        break t;
                      }
                    }
                    n = u.createElement(a), Gl(n, a, e), u.head.appendChild(n);
                    break;
                  case "meta":
                    if (c = m0("meta", "content", u).get(a + (e.content || ""))) {
                      for (i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                        c.splice(i, 1);
                        break t;
                      }
                    }
                    n = u.createElement(a), Gl(n, a, e), u.head.appendChild(n);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                n[Hl] = l, jl(n), a = n;
              }
              l.stateNode = a;
            } else h0(u, l.type, l.stateNode);
            else l.stateNode = y0(u, a, l.memoizedProps);
            else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? h0(u, l.type, l.stateNode) : y0(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Oi(l, l.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          $l(t, l), Fl(l), a & 512 && (Ml || e === null || Mt(e, e.return)), e !== null && a & 4 && Oi(l, l.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if ($l(t, l), Fl(l), a & 512 && (Ml || e === null || Mt(e, e.return)), l.flags & 32) {
            u = l.stateNode;
            try {
              Fe(u, "");
            } catch (q) {
              il(l, l.return, q);
            }
          }
          a & 4 && l.stateNode != null && (u = l.memoizedProps, Oi(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Di = true);
          break;
        case 6:
          if ($l(t, l), Fl(l), a & 4) {
            if (l.stateNode === null) throw Error(r(162));
            a = l.memoizedProps, e = l.stateNode;
            try {
              e.nodeValue = a;
            } catch (q) {
              il(l, l.return, q);
            }
          }
          break;
        case 3:
          if (Cn = null, u = At, At = jn(t.containerInfo), $l(t, l), At = u, Fl(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
            Na(t.containerInfo);
          } catch (q) {
            il(l, l.return, q);
          }
          Di && (Di = false, ho(l));
          break;
        case 4:
          a = At, At = jn(l.stateNode.containerInfo), $l(t, l), Fl(l), At = a;
          break;
        case 12:
          $l(t, l), Fl(l);
          break;
        case 31:
          $l(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, bn(l, a)));
          break;
        case 13:
          $l(t, l), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (pn = et()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, bn(l, a)));
          break;
        case 22:
          u = l.memoizedState !== null;
          var s = e !== null && e.memoizedState !== null, v = Vt, E = Ml;
          if (Vt = v || u, Ml = E || s, $l(t, l), Ml = E, Vt = v, Fl(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || Vt || Ml || Ze(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    i = s.stateNode;
                    var A = s.memoizedProps.style, S = A != null && A.hasOwnProperty("display") ? A.display : null;
                    i.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (q) {
                  il(s, s.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (q) {
                  il(s, s.return, q);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  u ? u0(p, true) : u0(s.stateNode, false);
                } catch (q) {
                  il(s, s.return, q);
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
          a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, bn(l, e))));
          break;
        case 19:
          $l(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, bn(l, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          $l(t, l), Fl(l);
      }
    }
    function Fl(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var e, a = l.return; a !== null; ) {
            if (no(a)) {
              e = a;
              break;
            }
            a = a.return;
          }
          if (e == null) throw Error(r(160));
          switch (e.tag) {
            case 27:
              var u = e.stateNode, n = Ni(l);
              vn(l, n, u);
              break;
            case 5:
              var c = e.stateNode;
              e.flags & 32 && (Fe(c, ""), e.flags &= -33);
              var i = Ni(l);
              vn(l, i, c);
              break;
            case 3:
            case 4:
              var s = e.stateNode.containerInfo, v = Ni(l);
              Mi(l, v, s);
              break;
            default:
              throw Error(r(161));
          }
        } catch (E) {
          il(l, l.return, E);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function ho(l) {
      if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
        var t = l;
        ho(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
    }
    function Jt(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) fo(l, t.alternate, t), t = t.sibling;
    }
    function Ze(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            se(4, t, t.return), Ze(t);
            break;
          case 1:
            Mt(t, t.return);
            var e = t.stateNode;
            typeof e.componentWillUnmount == "function" && ao(t, t.return, e), Ze(t);
            break;
          case 27:
            gu(t.stateNode);
          case 26:
          case 5:
            Mt(t, t.return), Ze(t);
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
    function wt(l, t, e) {
      for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate, u = l, n = t, c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            wt(u, n, e), cu(4, n);
            break;
          case 1:
            if (wt(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
              u.componentDidMount();
            } catch (v) {
              il(a, a.return, v);
            }
            if (a = n, u = a.updateQueue, u !== null) {
              var i = a.stateNode;
              try {
                var s = u.shared.hiddenCallbacks;
                if (s !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) Ks(s[u], i);
              } catch (v) {
                il(a, a.return, v);
              }
            }
            e && c & 64 && eo(n), iu(n, n.return);
            break;
          case 27:
            co(n);
          case 26:
          case 5:
            wt(u, n, e), e && a === null && c & 4 && uo(n), iu(n, n.return);
            break;
          case 12:
            wt(u, n, e);
            break;
          case 31:
            wt(u, n, e), e && c & 4 && oo(u, n);
            break;
          case 13:
            wt(u, n, e), e && c & 4 && yo(u, n);
            break;
          case 22:
            n.memoizedState === null && wt(u, n, e), iu(n, n.return);
            break;
          case 30:
            break;
          default:
            wt(u, n, e);
        }
        t = t.sibling;
      }
    }
    function Ui(l, t) {
      var e = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && wa(e));
    }
    function ji(l, t) {
      l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && wa(l));
    }
    function _t(l, t, e, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) go(l, t, e, a), t = t.sibling;
    }
    function go(l, t, e, a) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          _t(l, t, e, a), u & 2048 && cu(9, t);
          break;
        case 1:
          _t(l, t, e, a);
          break;
        case 3:
          _t(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && wa(l)));
          break;
        case 12:
          if (u & 2048) {
            _t(l, t, e, a), l = t.stateNode;
            try {
              var n = t.memoizedProps, c = n.id, i = n.onPostCommit;
              typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (s) {
              il(t, t.return, s);
            }
          } else _t(l, t, e, a);
          break;
        case 31:
          _t(l, t, e, a);
          break;
        case 13:
          _t(l, t, e, a);
          break;
        case 23:
          break;
        case 22:
          n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? _t(l, t, e, a) : fu(l, t) : n._visibility & 2 ? _t(l, t, e, a) : (n._visibility |= 2, va(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Ui(c, t);
          break;
        case 24:
          _t(l, t, e, a), u & 2048 && ji(t.alternate, t);
          break;
        default:
          _t(l, t, e, a);
      }
    }
    function va(l, t, e, a, u) {
      for (u = u && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var n = l, c = t, i = e, s = a, v = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            va(n, c, i, s, u), cu(8, c);
            break;
          case 23:
            break;
          case 22:
            var E = c.stateNode;
            c.memoizedState !== null ? E._visibility & 2 ? va(n, c, i, s, u) : fu(n, c) : (E._visibility |= 2, va(n, c, i, s, u)), u && v & 2048 && Ui(c.alternate, c);
            break;
          case 24:
            va(n, c, i, s, u), u && v & 2048 && ji(c.alternate, c);
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
            fu(e, a), u & 2048 && Ui(a.alternate, a);
            break;
          case 24:
            fu(e, a), u & 2048 && ji(a.alternate, a);
            break;
          default:
            fu(e, a);
        }
        t = t.sibling;
      }
    }
    var su = 8192;
    function ba(l, t, e) {
      if (l.subtreeFlags & su) for (l = l.child; l !== null; ) vo(l, t, e), l = l.sibling;
    }
    function vo(l, t, e) {
      switch (l.tag) {
        case 26:
          ba(l, t, e), l.flags & su && l.memoizedState !== null && vm(e, At, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          ba(l, t, e);
          break;
        case 3:
        case 4:
          var a = At;
          At = jn(l.stateNode.containerInfo), ba(l, t, e), At = a;
          break;
        case 22:
          l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = su, su = 16777216, ba(l, t, e), su = a) : ba(l, t, e));
          break;
        default:
          ba(l, t, e);
      }
    }
    function bo(l) {
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
          Rl = a, po(a, l);
        }
        bo(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) So(l), l = l.sibling;
    }
    function So(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ru(l), l.flags & 2048 && se(9, l, l.return);
          break;
        case 3:
          ru(l);
          break;
        case 12:
          ru(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Sn(l)) : ru(l);
          break;
        default:
          ru(l);
      }
    }
    function Sn(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Rl = a, po(a, l);
        }
        bo(l);
      }
      for (l = l.child; l !== null; ) {
        switch (t = l, t.tag) {
          case 0:
          case 11:
          case 15:
            se(8, t, t.return), Sn(t);
            break;
          case 22:
            e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Sn(t));
            break;
          default:
            Sn(t);
        }
        l = l.sibling;
      }
    }
    function po(l, t) {
      for (; Rl !== null; ) {
        var e = Rl;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            se(8, e, t);
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
        if (a = e.child, a !== null) a.return = e, Rl = a;
        else l: for (e = l; Rl !== null; ) {
          a = Rl;
          var u = a.sibling, n = a.return;
          if (so(a), a === e) {
            Rl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Rl = u;
            break l;
          }
          Rl = n;
        }
      }
    }
    var jy = {
      getCacheForType: function(l) {
        var t = ql(_l), e = t.data.get(l);
        return e === void 0 && (e = l(), t.data.set(l, e)), e;
      },
      cacheSignal: function() {
        return ql(_l).controller.signal;
      }
    }, Ry = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, hl = null, $ = null, I = 0, cl = 0, st = null, re = false, Sa = false, Ri = false, kt = 0, pl = 0, oe = 0, Le = 0, Ci = 0, rt = 0, pa = 0, ou = null, Il = null, Hi = false, pn = 0, xo = 0, xn = 1 / 0, En = null, de = null, Dl = 0, ye = null, xa = null, Wt = 0, Bi = 0, qi = null, Eo = null, du = 0, Yi = null;
    function ot() {
      return (ul & 2) !== 0 && I !== 0 ? I & -I : z.T !== null ? Vi() : qf();
    }
    function zo() {
      if (rt === 0) if ((I & 536870912) === 0 || ll) {
        var l = Mu;
        Mu <<= 1, (Mu & 3932160) === 0 && (Mu = 262144), rt = l;
      } else rt = 536870912;
      return l = it.current, l !== null && (l.flags |= 32), rt;
    }
    function Pl(l, t, e) {
      (l === hl && (cl === 2 || cl === 9) || l.cancelPendingCommit !== null) && (Ea(l, 0), me(l, I, rt, false)), Ra(l, e), ((ul & 2) === 0 || l !== hl) && (l === hl && ((ul & 2) === 0 && (Le |= e), pl === 4 && me(l, I, rt, false)), Dt(l));
    }
    function To(l, t, e) {
      if ((ul & 6) !== 0) throw Error(r(327));
      var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ja(l, t), u = a ? By(l, t) : Xi(l, t, true), n = a;
      do {
        if (u === 0) {
          Sa && !a && me(l, t, 0, false);
          break;
        } else {
          if (e = l.current.alternate, n && !Cy(e)) {
            u = Xi(l, t, false), n = false;
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
                if (s && (Ea(i, c).flags |= 256), c = Xi(i, c, false), c !== 2) {
                  if (Ri && !s) {
                    i.errorRecoveryDisabledLanes |= n, Le |= n, u = 4;
                    break l;
                  }
                  n = Il, Il = u, n !== null && (Il === null ? Il = n : Il.push.apply(Il, n));
                }
                u = c;
              }
              if (n = false, u !== 2) continue;
            }
          }
          if (u === 1) {
            Ea(l, 0), me(l, t, 0, true);
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
                me(a, t, rt, !re);
                break l;
              case 2:
                Il = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((t & 62914560) === t && (u = pn + 300 - et(), 10 < u)) {
              if (me(a, t, rt, !re), Uu(a, 0, true) !== 0) break l;
              Wt = t, a.timeoutHandle = t0(Ao.bind(null, a, e, Il, En, Hi, t, rt, Le, pa, re, n, "Throttled", -0, 0), u);
              break l;
            }
            Ao(a, e, Il, En, Hi, t, rt, Le, pa, re, n, null, -0, 0);
          }
        }
        break;
      } while (true);
      Dt(l);
    }
    function Ao(l, t, e, a, u, n, c, i, s, v, E, A, S, p) {
      if (l.timeoutHandle = -1, A = t.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
        A = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Ct
        }, vo(t, n, A);
        var q = (n & 62914560) === n ? pn - et() : (n & 4194048) === n ? xo - et() : 0;
        if (q = bm(A, q), q !== null) {
          Wt = n, l.cancelPendingCommit = q(Ro.bind(null, l, t, n, e, a, u, c, i, s, E, A, null, S, p)), me(l, n, c, !v);
          return;
        }
      }
      Ro(l, t, n, e, a, u, c, i, s);
    }
    function Cy(l) {
      for (var t = l; ; ) {
        var e = t.tag;
        if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!nt(n(), u)) return false;
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
    function me(l, t, e, a) {
      t &= ~Ci, t &= ~Le, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
      for (var u = t; 0 < u; ) {
        var n = 31 - ut(u), c = 1 << n;
        a[n] = -1, u &= ~c;
      }
      e !== 0 && Cf(l, e, t);
    }
    function zn() {
      return (ul & 6) === 0 ? (yu(0), false) : true;
    }
    function Gi() {
      if ($ !== null) {
        if (cl === 0) var l = $.return;
        else l = $, Yt = Ce = null, ti(l), da = null, Wa = 0, l = $;
        for (; l !== null; ) to(l.alternate, l), l = l.return;
        $ = null;
      }
    }
    function Ea(l, t) {
      var e = l.timeoutHandle;
      e !== -1 && (l.timeoutHandle = -1, lm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Wt = 0, Gi(), hl = l, $ = e = Bt(l.current, null), I = t, cl = 0, st = null, re = false, Sa = ja(l, t), Ri = false, pa = rt = Ci = Le = oe = pl = 0, Il = ou = null, Hi = false, (t & 8) !== 0 && (t |= t & 32);
      var a = l.entangledLanes;
      if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ut(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
      return kt = t, Lu(), e;
    }
    function _o(l, t) {
      K = null, z.H = au, t === oa || t === Fu ? (t = Qs(), cl = 3) : t === Lc ? (t = Qs(), cl = 4) : cl = t === vi ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, st = t, $ === null && (pl = 1, dn(l, gt(t, l.current)));
    }
    function Oo() {
      var l = it.current;
      return l === null ? true : (I & 4194048) === I ? pt === null : (I & 62914560) === I || (I & 536870912) !== 0 ? l === pt : false;
    }
    function No() {
      var l = z.H;
      return z.H = au, l === null ? au : l;
    }
    function Mo() {
      var l = z.A;
      return z.A = jy, l;
    }
    function Tn() {
      pl = 4, re || (I & 4194048) !== I && it.current !== null || (Sa = true), (oe & 134217727) === 0 && (Le & 134217727) === 0 || hl === null || me(hl, I, rt, false);
    }
    function Xi(l, t, e) {
      var a = ul;
      ul |= 2;
      var u = No(), n = Mo();
      (hl !== l || I !== t) && (En = null, Ea(l, t)), t = false;
      var c = pl;
      l: do
        try {
          if (cl !== 0 && $ !== null) {
            var i = $, s = st;
            switch (cl) {
              case 8:
                Gi(), c = 6;
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                it.current === null && (t = true);
                var v = cl;
                if (cl = 0, st = null, za(l, i, s, v), e && Sa) {
                  c = 0;
                  break l;
                }
                break;
              default:
                v = cl, cl = 0, st = null, za(l, i, s, v);
            }
          }
          Hy(), c = pl;
          break;
        } catch (E) {
          _o(l, E);
        }
      while (true);
      return t && l.shellSuspendCounter++, Yt = Ce = null, ul = a, z.H = u, z.A = n, $ === null && (hl = null, I = 0, Lu()), c;
    }
    function Hy() {
      for (; $ !== null; ) Do($);
    }
    function By(l, t) {
      var e = ul;
      ul |= 2;
      var a = No(), u = Mo();
      hl !== l || I !== t ? (En = null, xn = et() + 500, Ea(l, t)) : Sa = ja(l, t);
      l: do
        try {
          if (cl !== 0 && $ !== null) {
            t = $;
            var n = st;
            t: switch (cl) {
              case 1:
                cl = 0, st = null, za(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (Gs(n)) {
                  cl = 0, st = null, Uo(t);
                  break;
                }
                t = function() {
                  cl !== 2 && cl !== 9 || hl !== l || (cl = 7), Dt(l);
                }, n.then(t, t);
                break l;
              case 3:
                cl = 7;
                break l;
              case 4:
                cl = 5;
                break l;
              case 7:
                Gs(n) ? (cl = 0, st = null, Uo(t)) : (cl = 0, st = null, za(l, t, n, 7));
                break;
              case 5:
                var c = null;
                switch ($.tag) {
                  case 26:
                    c = $.memoizedState;
                  case 5:
                  case 27:
                    var i = $;
                    if (c ? g0(c) : i.stateNode.complete) {
                      cl = 0, st = null;
                      var s = i.sibling;
                      if (s !== null) $ = s;
                      else {
                        var v = i.return;
                        v !== null ? ($ = v, An(v)) : $ = null;
                      }
                      break t;
                    }
                }
                cl = 0, st = null, za(l, t, n, 5);
                break;
              case 6:
                cl = 0, st = null, za(l, t, n, 6);
                break;
              case 8:
                Gi(), pl = 6;
                break l;
              default:
                throw Error(r(462));
            }
          }
          qy();
          break;
        } catch (E) {
          _o(l, E);
        }
      while (true);
      return Yt = Ce = null, z.H = a, z.A = u, ul = e, $ !== null ? 0 : (hl = null, I = 0, Lu(), pl);
    }
    function qy() {
      for (; $ !== null && !cd(); ) Do($);
    }
    function Do(l) {
      var t = Pr(l.alternate, l, kt);
      l.memoizedProps = l.pendingProps, t === null ? An(l) : $ = t;
    }
    function Uo(l) {
      var t = l, e = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = wr(e, t, t.pendingProps, t.type, void 0, I);
          break;
        case 11:
          t = wr(e, t, t.pendingProps, t.type.render, t.ref, I);
          break;
        case 5:
          ti(t);
        default:
          to(e, t), t = $ = Ns(t, kt), t = Pr(e, t, kt);
      }
      l.memoizedProps = l.pendingProps, t === null ? An(l) : $ = t;
    }
    function za(l, t, e, a) {
      Yt = Ce = null, ti(t), da = null, Wa = 0;
      var u = t.return;
      try {
        if (Ay(l, u, t, e, I)) {
          pl = 1, dn(l, gt(e, l.current)), $ = null;
          return;
        }
      } catch (n) {
        if (u !== null) throw $ = u, n;
        pl = 1, dn(l, gt(e, l.current)), $ = null;
        return;
      }
      t.flags & 32768 ? (ll || a === 1 ? l = true : Sa || (I & 536870912) !== 0 ? l = false : (re = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = it.current, a !== null && a.tag === 13 && (a.flags |= 16384))), jo(t, l)) : An(t);
    }
    function An(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          jo(t, re);
          return;
        }
        l = t.return;
        var e = Ny(t.alternate, t, kt);
        if (e !== null) {
          $ = e;
          return;
        }
        if (t = t.sibling, t !== null) {
          $ = t;
          return;
        }
        $ = t = l;
      } while (t !== null);
      pl === 0 && (pl = 5);
    }
    function jo(l, t) {
      do {
        var e = My(l.alternate, l);
        if (e !== null) {
          e.flags &= 32767, $ = e;
          return;
        }
        if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
          $ = l;
          return;
        }
        $ = l = e;
      } while (l !== null);
      pl = 6, $ = null;
    }
    function Ro(l, t, e, a, u, n, c, i, s) {
      l.cancelPendingCommit = null;
      do
        _n();
      while (Dl !== 0);
      if ((ul & 6) !== 0) throw Error(r(327));
      if (t !== null) {
        if (t === l.current) throw Error(r(177));
        if (n = t.lanes | t.childLanes, n |= Nc, gd(l, e, n, c, i, s), l === hl && ($ = hl = null, I = 0), xa = t, ye = l, Wt = e, Bi = n, qi = u, Eo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Qy(Ou, function() {
          return Yo(), null;
        })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = z.T, z.T = null, u = C.p, C.p = 2, c = ul, ul |= 4;
          try {
            Dy(l, t, e);
          } finally {
            ul = c, C.p = u, z.T = a;
          }
        }
        Dl = 1, Co(), Ho(), Bo();
      }
    }
    function Co() {
      if (Dl === 1) {
        Dl = 0;
        var l = ye, t = xa, e = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || e) {
          e = z.T, z.T = null;
          var a = C.p;
          C.p = 2;
          var u = ul;
          ul |= 4;
          try {
            mo(t, l);
            var n = Ii, c = Ss(l.containerInfo), i = n.focusedElem, s = n.selectionRange;
            if (c !== i && i && i.ownerDocument && bs(i.ownerDocument.documentElement, i)) {
              if (s !== null && zc(i)) {
                var v = s.start, E = s.end;
                if (E === void 0 && (E = v), "selectionStart" in i) i.selectionStart = v, i.selectionEnd = Math.min(E, i.value.length);
                else {
                  var A = i.ownerDocument || document, S = A && A.defaultView || window;
                  if (S.getSelection) {
                    var p = S.getSelection(), q = i.textContent.length, Q = Math.min(s.start, q), dl = s.end === void 0 ? Q : Math.min(s.end, q);
                    !p.extend && Q > dl && (c = dl, dl = Q, Q = c);
                    var y = vs(i, Q), o = vs(i, dl);
                    if (y && o && (p.rangeCount !== 1 || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                      var g = A.createRange();
                      g.setStart(y.node, y.offset), p.removeAllRanges(), Q > dl ? (p.addRange(g), p.extend(o.node, o.offset)) : (g.setEnd(o.node, o.offset), p.addRange(g));
                    }
                  }
                }
              }
              for (A = [], p = i; p = p.parentNode; ) p.nodeType === 1 && A.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
              for (typeof i.focus == "function" && i.focus(), i = 0; i < A.length; i++) {
                var T = A[i];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            Yn = !!Fi, Ii = Fi = null;
          } finally {
            ul = u, C.p = a, z.T = e;
          }
        }
        l.current = t, Dl = 2;
      }
    }
    function Ho() {
      if (Dl === 2) {
        Dl = 0;
        var l = ye, t = xa, e = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || e) {
          e = z.T, z.T = null;
          var a = C.p;
          C.p = 2;
          var u = ul;
          ul |= 4;
          try {
            fo(l, t.alternate, t);
          } finally {
            ul = u, C.p = a, z.T = e;
          }
        }
        Dl = 3;
      }
    }
    function Bo() {
      if (Dl === 4 || Dl === 3) {
        Dl = 0, id();
        var l = ye, t = xa, e = Wt, a = Eo;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dl = 5 : (Dl = 0, xa = ye = null, qo(l, l.pendingLanes));
        var u = l.pendingLanes;
        if (u === 0 && (de = null), uc(e), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
          at.onCommitFiberRoot(Ua, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          t = z.T, u = C.p, C.p = 2, z.T = null;
          try {
            for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
              var i = a[c];
              n(i.value, {
                componentStack: i.stack
              });
            }
          } finally {
            z.T = t, C.p = u;
          }
        }
        (Wt & 3) !== 0 && _n(), Dt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Yi ? du++ : (du = 0, Yi = l) : du = 0, yu(0);
      }
    }
    function qo(l, t) {
      (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, wa(t)));
    }
    function _n() {
      return Co(), Ho(), Bo(), Yo();
    }
    function Yo() {
      if (Dl !== 5) return false;
      var l = ye, t = Bi;
      Bi = 0;
      var e = uc(Wt), a = z.T, u = C.p;
      try {
        C.p = 32 > e ? 32 : e, z.T = null, e = qi, qi = null;
        var n = ye, c = Wt;
        if (Dl = 0, xa = ye = null, Wt = 0, (ul & 6) !== 0) throw Error(r(331));
        var i = ul;
        if (ul |= 4, So(n.current), go(n, n.current, c, e), ul = i, yu(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(Ua, n);
        } catch {
        }
        return true;
      } finally {
        C.p = u, z.T = a, qo(l, t);
      }
    }
    function Go(l, t, e) {
      t = gt(e, t), t = gi(l.stateNode, t, 2), l = ce(l, t, 2), l !== null && (Ra(l, 2), Dt(l));
    }
    function il(l, t, e) {
      if (l.tag === 3) Go(l, l, e);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Go(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (de === null || !de.has(a))) {
            l = gt(e, l), e = Gr(2), a = ce(t, e, 2), a !== null && (Xr(e, a, t, l), Ra(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
    }
    function Qi(l, t, e) {
      var a = l.pingCache;
      if (a === null) {
        a = l.pingCache = new Ry();
        var u = /* @__PURE__ */ new Set();
        a.set(t, u);
      } else u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
      u.has(e) || (Ri = true, u.add(e), l = Yy.bind(null, l, t, e), t.then(l, l));
    }
    function Yy(l, t, e) {
      var a = l.pingCache;
      a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, hl === l && (I & e) === e && (pl === 4 || pl === 3 && (I & 62914560) === I && 300 > et() - pn ? (ul & 2) === 0 && Ea(l, 0) : Ci |= e, pa === I && (pa = 0)), Dt(l);
    }
    function Xo(l, t) {
      t === 0 && (t = Rf()), l = Ue(l, t), l !== null && (Ra(l, t), Dt(l));
    }
    function Gy(l) {
      var t = l.memoizedState, e = 0;
      t !== null && (e = t.retryLane), Xo(l, e);
    }
    function Xy(l, t) {
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
      a !== null && a.delete(t), Xo(l, e);
    }
    function Qy(l, t) {
      return lc(l, t);
    }
    var On = null, Ta = null, Zi = false, Nn = false, Li = false, he = 0;
    function Dt(l) {
      l !== Ta && l.next === null && (Ta === null ? On = Ta = l : Ta = Ta.next = l), Nn = true, Zi || (Zi = true, Ly());
    }
    function yu(l, t) {
      if (!Li && Nn) {
        Li = true;
        do
          for (var e = false, a = On; a !== null; ) {
            if (l !== 0) {
              var u = a.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var c = a.suspendedLanes, i = a.pingedLanes;
                n = (1 << 31 - ut(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
              }
              n !== 0 && (e = true, Vo(a, n));
            } else n = I, n = Uu(a, a === hl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || ja(a, n) || (e = true, Vo(a, n));
            a = a.next;
          }
        while (e);
        Li = false;
      }
    }
    function Zy() {
      Qo();
    }
    function Qo() {
      Nn = Zi = false;
      var l = 0;
      he !== 0 && Py() && (l = he);
      for (var t = et(), e = null, a = On; a !== null; ) {
        var u = a.next, n = Zo(a, t);
        n === 0 ? (a.next = null, e === null ? On = u : e.next = u, u === null && (Ta = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Nn = true)), a = u;
      }
      Dl !== 0 && Dl !== 5 || yu(l), he !== 0 && (he = 0);
    }
    function Zo(l, t) {
      for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
        var c = 31 - ut(n), i = 1 << c, s = u[c];
        s === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = hd(i, t)) : s <= t && (l.expiredLanes |= i), n &= ~i;
      }
      if (t = hl, e = I, e = Uu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (cl === 2 || cl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && tc(a), l.callbackNode = null, l.callbackPriority = 0;
      if ((e & 3) === 0 || ja(l, e)) {
        if (t = e & -e, t === l.callbackPriority) return t;
        switch (a !== null && tc(a), uc(e)) {
          case 2:
          case 8:
            e = Uf;
            break;
          case 32:
            e = Ou;
            break;
          case 268435456:
            e = jf;
            break;
          default:
            e = Ou;
        }
        return a = Lo.bind(null, l), e = lc(e, a), l.callbackPriority = t, l.callbackNode = e, t;
      }
      return a !== null && a !== null && tc(a), l.callbackPriority = 2, l.callbackNode = null, 2;
    }
    function Lo(l, t) {
      if (Dl !== 0 && Dl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
      var e = l.callbackNode;
      if (_n() && l.callbackNode !== e) return null;
      var a = I;
      return a = Uu(l, l === hl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (To(l, a, t), Zo(l, et()), l.callbackNode != null && l.callbackNode === e ? Lo.bind(null, l) : null);
    }
    function Vo(l, t) {
      if (_n()) return null;
      To(l, t, true);
    }
    function Ly() {
      tm(function() {
        (ul & 6) !== 0 ? lc(Df, Zy) : Qo();
      });
    }
    function Vi() {
      if (he === 0) {
        var l = sa;
        l === 0 && (l = Nu, Nu <<= 1, (Nu & 261888) === 0 && (Nu = 256)), he = l;
      }
      return he;
    }
    function Ko(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Hu("" + l);
    }
    function Jo(l, t) {
      var e = t.ownerDocument.createElement("input");
      return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
    }
    function Vy(l, t, e, a, u) {
      if (t === "submit" && e && e.stateNode === u) {
        var n = Ko((u[wl] || null).action), c = a.submitter;
        c && (t = (t = c[wl] || null) ? Ko(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
        var i = new Gu("action", "action", null, a, u);
        l.push({
          event: i,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (he !== 0) {
                    var s = c ? Jo(u, c) : new FormData(u);
                    ri(e, {
                      pending: true,
                      data: s,
                      method: u.method,
                      action: n
                    }, null, s);
                  }
                } else typeof n == "function" && (i.preventDefault(), s = c ? Jo(u, c) : new FormData(u), ri(e, {
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
    for (var Ki = 0; Ki < Oc.length; Ki++) {
      var Ji = Oc[Ki], Ky = Ji.toLowerCase(), Jy = Ji[0].toUpperCase() + Ji.slice(1);
      Tt(Ky, "on" + Jy);
    }
    Tt(Es, "onAnimationEnd"), Tt(zs, "onAnimationIteration"), Tt(Ts, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(fy, "onTransitionRun"), Tt(sy, "onTransitionStart"), Tt(ry, "onTransitionCancel"), Tt(As, "onTransitionEnd"), We("onMouseEnter", [
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
    ]), Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Oe("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));
    function wo(l, t) {
      t = (t & 4) !== 0;
      for (var e = 0; e < l.length; e++) {
        var a = l[e], u = a.event;
        a = a.listeners;
        l: {
          var n = void 0;
          if (t) for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c], s = i.instance, v = i.currentTarget;
            if (i = i.listener, s !== n && u.isPropagationStopped()) break l;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (E) {
              Zu(E);
            }
            u.currentTarget = null, n = s;
          }
          else for (c = 0; c < a.length; c++) {
            if (i = a[c], s = i.instance, v = i.currentTarget, i = i.listener, s !== n && u.isPropagationStopped()) break l;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (E) {
              Zu(E);
            }
            u.currentTarget = null, n = s;
          }
        }
      }
    }
    function F(l, t) {
      var e = t[nc];
      e === void 0 && (e = t[nc] = /* @__PURE__ */ new Set());
      var a = l + "__bubble";
      e.has(a) || (ko(t, l, 2, false), e.add(a));
    }
    function wi(l, t, e) {
      var a = 0;
      t && (a |= 4), ko(e, l, a, t);
    }
    var Mn = "_reactListening" + Math.random().toString(36).slice(2);
    function ki(l) {
      if (!l[Mn]) {
        l[Mn] = true, Xf.forEach(function(e) {
          e !== "selectionchange" && (wy.has(e) || wi(e, false, l), wi(e, true, l));
        });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[Mn] || (t[Mn] = true, wi("selectionchange", false, t));
      }
    }
    function ko(l, t, e, a) {
      switch (z0(t)) {
        case 2:
          var u = xm;
          break;
        case 8:
          u = Em;
          break;
        default:
          u = rf;
      }
      e = u.bind(null, t, e, l), u = void 0, !mc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), a ? u !== void 0 ? l.addEventListener(t, e, {
        capture: true,
        passive: u
      }) : l.addEventListener(t, e, true) : u !== void 0 ? l.addEventListener(t, e, {
        passive: u
      }) : l.addEventListener(t, e, false);
    }
    function Wi(l, t, e, a, u) {
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
      If(function() {
        var v = n, E = dc(e), A = [];
        l: {
          var S = _s.get(l);
          if (S !== void 0) {
            var p = Gu, q = l;
            switch (l) {
              case "keypress":
                if (qu(e) === 0) break l;
              case "keydown":
              case "keyup":
                p = Xd;
                break;
              case "focusin":
                q = "focus", p = bc;
                break;
              case "focusout":
                q = "blur", p = bc;
                break;
              case "beforeblur":
              case "afterblur":
                p = bc;
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
                p = ts;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                p = Nd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                p = Ld;
                break;
              case Es:
              case zs:
              case Ts:
                p = Ud;
                break;
              case As:
                p = Kd;
                break;
              case "scroll":
              case "scrollend":
                p = _d;
                break;
              case "wheel":
                p = wd;
                break;
              case "copy":
              case "cut":
              case "paste":
                p = Rd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                p = as;
                break;
              case "toggle":
              case "beforetoggle":
                p = Wd;
            }
            var Q = (t & 4) !== 0, dl = !Q && (l === "scroll" || l === "scrollend"), y = Q ? S !== null ? S + "Capture" : null : S;
            Q = [];
            for (var o = v, g; o !== null; ) {
              var T = o;
              if (g = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || g === null || y === null || (T = Ba(o, y), T != null && Q.push(hu(o, T, g))), dl) break;
              o = o.return;
            }
            0 < Q.length && (S = new p(S, q, null, e, E), A.push({
              event: S,
              listeners: Q
            }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (S = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", S && e !== oc && (q = e.relatedTarget || e.fromElement) && (Je(q) || q[Ke])) break l;
            if ((p || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, p ? (q = e.relatedTarget || e.toElement, p = v, q = q ? Je(q) : null, q !== null && (dl = D(q), Q = q.tag, q !== dl || Q !== 5 && Q !== 27 && Q !== 6) && (q = null)) : (p = null, q = v), p !== q)) {
              if (Q = ts, T = "onMouseLeave", y = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Q = as, T = "onPointerLeave", y = "onPointerEnter", o = "pointer"), dl = p == null ? S : Ha(p), g = q == null ? S : Ha(q), S = new Q(T, o + "leave", p, e, E), S.target = dl, S.relatedTarget = g, T = null, Je(E) === v && (Q = new Q(y, o + "enter", q, e, E), Q.target = g, Q.relatedTarget = dl, T = Q), dl = T, p && q) t: {
                for (Q = ky, y = p, o = q, g = 0, T = y; T; T = Q(T)) g++;
                T = 0;
                for (var X = o; X; X = Q(X)) T++;
                for (; 0 < g - T; ) y = Q(y), g--;
                for (; 0 < T - g; ) o = Q(o), T--;
                for (; g--; ) {
                  if (y === o || o !== null && y === o.alternate) {
                    Q = y;
                    break t;
                  }
                  y = Q(y), o = Q(o);
                }
                Q = null;
              }
              else Q = null;
              p !== null && Wo(A, S, p, Q, false), q !== null && dl !== null && Wo(A, dl, q, Q, true);
            }
          }
          l: {
            if (S = v ? Ha(v) : window, p = S.nodeName && S.nodeName.toLowerCase(), p === "select" || p === "input" && S.type === "file") var el = os;
            else if (ss(S)) if (ds) el = ny;
            else {
              el = ay;
              var G = ey;
            }
            else p = S.nodeName, !p || p.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? v && rc(v.elementType) && (el = os) : el = uy;
            if (el && (el = el(l, v))) {
              rs(A, el, e, E);
              break l;
            }
            G && G(l, S, v), l === "focusout" && v && S.type === "number" && v.memoizedProps.value != null && sc(S, "number", S.value);
          }
          switch (G = v ? Ha(v) : window, l) {
            case "focusin":
              (ss(G) || G.contentEditable === "true") && (ta = G, Tc = v, Va = null);
              break;
            case "focusout":
              Va = Tc = ta = null;
              break;
            case "mousedown":
              Ac = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ac = false, ps(A, e, E);
              break;
            case "selectionchange":
              if (iy) break;
            case "keydown":
            case "keyup":
              ps(A, e, E);
          }
          var J;
          if (pc) l: {
            switch (l) {
              case "compositionstart":
                var P = "onCompositionStart";
                break l;
              case "compositionend":
                P = "onCompositionEnd";
                break l;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break l;
            }
            P = void 0;
          }
          else la ? is(l, e) && (P = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (P = "onCompositionStart");
          P && (us && e.locale !== "ko" && (la || P !== "onCompositionStart" ? P === "onCompositionEnd" && la && (J = Pf()) : (Pt = E, hc = "value" in Pt ? Pt.value : Pt.textContent, la = true)), G = Dn(v, P), 0 < G.length && (P = new es(P, l, null, e, E), A.push({
            event: P,
            listeners: G
          }), J ? P.data = J : (J = fs(e), J !== null && (P.data = J)))), (J = Fd ? Id(l, e) : Pd(l, e)) && (P = Dn(v, "onBeforeInput"), 0 < P.length && (G = new es("onBeforeInput", "beforeinput", null, e, E), A.push({
            event: G,
            listeners: P
          }), G.data = J)), Vy(A, l, v, e, E);
        }
        wo(A, t);
      });
    }
    function hu(l, t, e) {
      return {
        instance: l,
        listener: t,
        currentTarget: e
      };
    }
    function Dn(l, t) {
      for (var e = t + "Capture", a = []; l !== null; ) {
        var u = l, n = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ba(l, e), u != null && a.unshift(hu(l, u, n)), u = Ba(l, t), u != null && a.push(hu(l, u, n))), l.tag === 3) return a;
        l = l.return;
      }
      return [];
    }
    function ky(l) {
      if (l === null) return null;
      do
        l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function Wo(l, t, e, a, u) {
      for (var n = t._reactName, c = []; e !== null && e !== a; ) {
        var i = e, s = i.alternate, v = i.stateNode;
        if (i = i.tag, s !== null && s === a) break;
        i !== 5 && i !== 26 && i !== 27 || v === null || (s = v, u ? (v = Ba(e, n), v != null && c.unshift(hu(e, v, s))) : u || (v = Ba(e, n), v != null && c.push(hu(e, v, s)))), e = e.return;
      }
      c.length !== 0 && l.push({
        event: t,
        listeners: c
      });
    }
    var Wy = /\r\n?/g, $y = /\u0000|\uFFFD/g;
    function $o(l) {
      return (typeof l == "string" ? l : "" + l).replace(Wy, `
`).replace($y, "");
    }
    function Fo(l, t) {
      return t = $o(t), $o(l) === t;
    }
    function ol(l, t, e, a, u, n) {
      switch (e) {
        case "children":
          typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Fe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Fe(l, "" + a);
          break;
        case "className":
          Ru(l, "class", a);
          break;
        case "tabIndex":
          Ru(l, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ru(l, e, a);
          break;
        case "style":
          $f(l, a, n);
          break;
        case "data":
          if (t !== "object") {
            Ru(l, "data", a);
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
          a = Hu("" + a), l.setAttribute(e, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof n == "function" && (e === "formAction" ? (t !== "input" && ol(l, t, "name", u.name, u, null), ol(l, t, "formEncType", u.formEncType, u, null), ol(l, t, "formMethod", u.formMethod, u, null), ol(l, t, "formTarget", u.formTarget, u, null)) : (ol(l, t, "encType", u.encType, u, null), ol(l, t, "method", u.method, u, null), ol(l, t, "target", u.target, u, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          a = Hu("" + a), l.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (l.onclick = Ct);
          break;
        case "onScroll":
          a != null && F("scroll", l);
          break;
        case "onScrollEnd":
          a != null && F("scrollend", l);
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
          e = Hu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
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
          F("beforetoggle", l), F("toggle", l), ju(l, "popover", a);
          break;
        case "xlinkActuate":
          Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          ju(l, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Td.get(e) || e, ju(l, e, a));
      }
    }
    function $i(l, t, e, a, u, n) {
      switch (e) {
        case "style":
          $f(l, a, n);
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
          a != null && F("scroll", l);
          break;
        case "onScrollEnd":
          a != null && F("scrollend", l);
          break;
        case "onClick":
          a != null && (l.onclick = Ct);
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
          if (!Qf.hasOwnProperty(e)) l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[wl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === true ? l.setAttribute(e, "") : ju(l, e, a);
          }
      }
    }
    function Gl(l, t, e) {
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
          F("error", l), F("load", l);
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
                ol(l, t, n, c, e, null);
            }
          }
          u && ol(l, t, "srcSet", e.srcSet, e, null), a && ol(l, t, "src", e.src, e, null);
          return;
        case "input":
          F("invalid", l);
          var i = n = c = u = null, s = null, v = null;
          for (a in e) if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null) switch (a) {
              case "name":
                u = E;
                break;
              case "type":
                c = E;
                break;
              case "checked":
                s = E;
                break;
              case "defaultChecked":
                v = E;
                break;
              case "value":
                n = E;
                break;
              case "defaultValue":
                i = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(r(137, t));
                break;
              default:
                ol(l, t, a, E, e, null);
            }
          }
          Jf(l, n, i, s, v, c, u, false);
          return;
        case "select":
          F("invalid", l), a = c = n = null;
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
              ol(l, t, u, i, e, null);
          }
          t = n, e = c, l.multiple = !!a, t != null ? $e(l, !!a, t, false) : e != null && $e(l, !!a, e, true);
          return;
        case "textarea":
          F("invalid", l), n = u = a = null;
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
              ol(l, t, c, i, e, null);
          }
          kf(l, a, u, n);
          return;
        case "option":
          for (s in e) e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : ol(l, t, s, a, e, null));
          return;
        case "dialog":
          F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
          break;
        case "iframe":
        case "object":
          F("load", l);
          break;
        case "video":
        case "audio":
          for (a = 0; a < mu.length; a++) F(mu[a], l);
          break;
        case "image":
          F("error", l), F("load", l);
          break;
        case "details":
          F("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          F("error", l), F("load", l);
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
          for (v in e) if (e.hasOwnProperty(v) && (a = e[v], a != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, t));
            default:
              ol(l, t, v, a, e, null);
          }
          return;
        default:
          if (rc(t)) {
            for (E in e) e.hasOwnProperty(E) && (a = e[E], a !== void 0 && $i(l, t, E, a, e, void 0));
            return;
          }
      }
      for (i in e) e.hasOwnProperty(i) && (a = e[i], a != null && ol(l, t, i, a, e, null));
    }
    function Fy(l, t, e, a) {
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
          var u = null, n = null, c = null, i = null, s = null, v = null, E = null;
          for (p in e) {
            var A = e[p];
            if (e.hasOwnProperty(p) && A != null) switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = A;
              default:
                a.hasOwnProperty(p) || ol(l, t, p, null, a, A);
            }
          }
          for (var S in a) {
            var p = a[S];
            if (A = e[S], a.hasOwnProperty(S) && (p != null || A != null)) switch (S) {
              case "type":
                n = p;
                break;
              case "name":
                u = p;
                break;
              case "checked":
                v = p;
                break;
              case "defaultChecked":
                E = p;
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
                p !== A && ol(l, t, S, p, a, A);
            }
          }
          fc(l, c, i, s, v, E, n, u);
          return;
        case "select":
          p = c = i = S = null;
          for (n in e) if (s = e[n], e.hasOwnProperty(n) && s != null) switch (n) {
            case "value":
              break;
            case "multiple":
              p = s;
            default:
              a.hasOwnProperty(n) || ol(l, t, n, null, a, s);
          }
          for (u in a) if (n = a[u], s = e[u], a.hasOwnProperty(u) && (n != null || s != null)) switch (u) {
            case "value":
              S = n;
              break;
            case "defaultValue":
              i = n;
              break;
            case "multiple":
              c = n;
            default:
              n !== s && ol(l, t, u, n, a, s);
          }
          t = i, e = c, a = p, S != null ? $e(l, !!e, S, false) : !!a != !!e && (t != null ? $e(l, !!e, t, true) : $e(l, !!e, e ? [] : "", false));
          return;
        case "textarea":
          p = S = null;
          for (i in e) if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i)) switch (i) {
            case "value":
              break;
            case "children":
              break;
            default:
              ol(l, t, i, null, a, u);
          }
          for (c in a) if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
            case "value":
              S = u;
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
              u !== n && ol(l, t, c, u, a, n);
          }
          wf(l, S, p);
          return;
        case "option":
          for (var q in e) S = e[q], e.hasOwnProperty(q) && S != null && !a.hasOwnProperty(q) && (q === "selected" ? l.selected = false : ol(l, t, q, null, a, S));
          for (s in a) S = a[s], p = e[s], a.hasOwnProperty(s) && S !== p && (S != null || p != null) && (s === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : ol(l, t, s, S, a, p));
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
          for (var Q in e) S = e[Q], e.hasOwnProperty(Q) && S != null && !a.hasOwnProperty(Q) && ol(l, t, Q, null, a, S);
          for (v in a) if (S = a[v], p = e[v], a.hasOwnProperty(v) && S !== p && (S != null || p != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(r(137, t));
              break;
            default:
              ol(l, t, v, S, a, p);
          }
          return;
        default:
          if (rc(t)) {
            for (var dl in e) S = e[dl], e.hasOwnProperty(dl) && S !== void 0 && !a.hasOwnProperty(dl) && $i(l, t, dl, void 0, a, S);
            for (E in a) S = a[E], p = e[E], !a.hasOwnProperty(E) || S === p || S === void 0 && p === void 0 || $i(l, t, E, S, a, p);
            return;
          }
      }
      for (var y in e) S = e[y], e.hasOwnProperty(y) && S != null && !a.hasOwnProperty(y) && ol(l, t, y, null, a, S);
      for (A in a) S = a[A], p = e[A], !a.hasOwnProperty(A) || S === p || S == null && p == null || ol(l, t, A, S, a, p);
    }
    function Io(l) {
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
    function Iy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
          var u = e[a], n = u.transferSize, c = u.initiatorType, i = u.duration;
          if (n && i && Io(c)) {
            for (c = 0, i = u.responseEnd, a += 1; a < e.length; a++) {
              var s = e[a], v = s.startTime;
              if (v > i) break;
              var E = s.transferSize, A = s.initiatorType;
              E && Io(A) && (s = s.responseEnd, c += E * (s < i ? 1 : (i - v) / (s - v)));
            }
            if (--a, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
          }
        }
        if (0 < l) return t / l / 1e6;
      }
      return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
    }
    var Fi = null, Ii = null;
    function Un(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function Po(l) {
      switch (l) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function l0(l, t) {
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
    function Pi(l, t) {
      return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var lf = null;
    function Py() {
      var l = window.event;
      return l && l.type === "popstate" ? l === lf ? false : (lf = l, true) : (lf = null, false);
    }
    var t0 = typeof setTimeout == "function" ? setTimeout : void 0, lm = typeof clearTimeout == "function" ? clearTimeout : void 0, e0 = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof e0 < "u" ? function(l) {
      return e0.resolve(null).then(l).catch(em);
    } : t0;
    function em(l) {
      setTimeout(function() {
        throw l;
      });
    }
    function ge(l) {
      return l === "head";
    }
    function a0(l, t) {
      var e = t, a = 0;
      do {
        var u = e.nextSibling;
        if (l.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Na(t);
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
      Na(t);
    }
    function u0(l, t) {
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
    function tf(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var e = t;
        switch (t = t.nextSibling, e.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            tf(e), cc(e);
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
    function am(l, t, e, a) {
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
        if (l = xt(l.nextSibling), l === null) break;
      }
      return null;
    }
    function um(l, t, e) {
      if (t === "") return null;
      for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = xt(l.nextSibling), l === null)) return null;
      return l;
    }
    function n0(l, t) {
      for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = xt(l.nextSibling), l === null)) return null;
      return l;
    }
    function ef(l) {
      return l.data === "$?" || l.data === "$~";
    }
    function af(l) {
      return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
    }
    function nm(l, t) {
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
    function xt(l) {
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
    var uf = null;
    function c0(l) {
      l = l.nextSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "/$" || e === "/&") {
            if (t === 0) return xt(l.nextSibling);
            t--;
          } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
        }
        l = l.nextSibling;
      }
      return null;
    }
    function i0(l) {
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
    function f0(l, t, e) {
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
      cc(l);
    }
    var Et = /* @__PURE__ */ new Map(), s0 = /* @__PURE__ */ new Set();
    function jn(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var $t = C.d;
    C.d = {
      f: cm,
      r: im,
      D: fm,
      C: sm,
      L: rm,
      m: om,
      X: ym,
      S: dm,
      M: mm
    };
    function cm() {
      var l = $t.f(), t = zn();
      return l || t;
    }
    function im(l) {
      var t = we(l);
      t !== null && t.tag === 5 && t.type === "form" ? Ar(t) : $t.r(l);
    }
    var Aa = typeof document > "u" ? null : document;
    function r0(l, t, e) {
      var a = Aa;
      if (a && typeof t == "string" && t) {
        var u = mt(t);
        u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), s0.has(u) || (s0.add(u), l = {
          rel: l,
          crossOrigin: e,
          href: t
        }, a.querySelector(u) === null && (t = a.createElement("link"), Gl(t, "link", l), jl(t), a.head.appendChild(t)));
      }
    }
    function fm(l) {
      $t.D(l), r0("dns-prefetch", l, null);
    }
    function sm(l, t) {
      $t.C(l, t), r0("preconnect", l, t);
    }
    function rm(l, t, e) {
      $t.L(l, t, e);
      var a = Aa;
      if (a && l && t) {
        var u = 'link[rel="preload"][as="' + mt(t) + '"]';
        t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + mt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + mt(e.imageSizes) + '"]')) : u += '[href="' + mt(l) + '"]';
        var n = u;
        switch (t) {
          case "style":
            n = _a(l);
            break;
          case "script":
            n = Oa(l);
        }
        Et.has(n) || (l = M({
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        }, e), Et.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(vu(n)) || t === "script" && a.querySelector(bu(n)) || (t = a.createElement("link"), Gl(t, "link", l), jl(t), a.head.appendChild(t)));
      }
    }
    function om(l, t) {
      $t.m(l, t);
      var e = Aa;
      if (e && l) {
        var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + mt(a) + '"][href="' + mt(l) + '"]', n = u;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Oa(l);
        }
        if (!Et.has(n) && (l = M({
          rel: "modulepreload",
          href: l
        }, t), Et.set(n, l), e.querySelector(u) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(bu(n))) return;
          }
          a = e.createElement("link"), Gl(a, "link", l), jl(a), e.head.appendChild(a);
        }
      }
    }
    function dm(l, t, e) {
      $t.S(l, t, e);
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
            }, e), (e = Et.get(n)) && nf(l, e);
            var s = c = a.createElement("link");
            jl(s), Gl(s, "link", l), s._p = new Promise(function(v, E) {
              s.onload = v, s.onerror = E;
            }), s.addEventListener("load", function() {
              i.loading |= 1;
            }), s.addEventListener("error", function() {
              i.loading |= 2;
            }), i.loading |= 4, Rn(c, t, a);
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
    function ym(l, t) {
      $t.X(l, t);
      var e = Aa;
      if (e && l) {
        var a = ke(e).hoistableScripts, u = Oa(l), n = a.get(u);
        n || (n = e.querySelector(bu(u)), n || (l = M({
          src: l,
          async: true
        }, t), (t = Et.get(u)) && cf(l, t), n = e.createElement("script"), jl(n), Gl(n, "link", l), e.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, a.set(u, n));
      }
    }
    function mm(l, t) {
      $t.M(l, t);
      var e = Aa;
      if (e && l) {
        var a = ke(e).hoistableScripts, u = Oa(l), n = a.get(u);
        n || (n = e.querySelector(bu(u)), n || (l = M({
          src: l,
          async: true,
          type: "module"
        }, t), (t = Et.get(u)) && cf(l, t), n = e.createElement("script"), jl(n), Gl(n, "link", l), e.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, a.set(u, n));
      }
    }
    function o0(l, t, e, a) {
      var u = (u = W.current) ? jn(u) : null;
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
            }, n.set(l, c), (n = u.querySelector(vu(l))) && !n._p && (c.instance = n, c.state.loading = 5), Et.has(l) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, Et.set(l, e), n || hm(u, l, e, c.state))), t && a === null) throw Error(r(528, ""));
            return c;
          }
          if (t && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(e), e = ke(u).hoistableScripts, a = e.get(t), a || (a = {
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
      return 'href="' + mt(l) + '"';
    }
    function vu(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function d0(l) {
      return M({}, l, {
        "data-precedence": l.precedence,
        precedence: null
      });
    }
    function hm(l, t, e, a) {
      l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), Gl(t, "link", e), jl(t), l.head.appendChild(t));
    }
    function Oa(l) {
      return '[src="' + mt(l) + '"]';
    }
    function bu(l) {
      return "script[async]" + l;
    }
    function y0(l, t, e) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + mt(e.href) + '"]');
          if (a) return t.instance = a, jl(a), a;
          var u = M({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement("style"), jl(a), Gl(a, "style", u), Rn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = _a(e.href);
          var n = l.querySelector(vu(u));
          if (n) return t.state.loading |= 4, t.instance = n, jl(n), n;
          a = d0(e), (u = Et.get(u)) && nf(a, u), n = (l.ownerDocument || l).createElement("link"), jl(n);
          var c = n;
          return c._p = new Promise(function(i, s) {
            c.onload = i, c.onerror = s;
          }), Gl(n, "link", a), t.state.loading |= 4, Rn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Oa(e.src), (u = l.querySelector(bu(n))) ? (t.instance = u, jl(u), u) : (a = e, (u = Et.get(n)) && (a = M({}, e), cf(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), jl(u), Gl(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Rn(a, e.precedence, l));
      return t.instance;
    }
    function Rn(l, t, e) {
      for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
        var i = a[c];
        if (i.dataset.precedence === t) n = i;
        else if (n !== u) break;
      }
      n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
    }
    function nf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
    }
    function cf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
    }
    var Cn = null;
    function m0(l, t, e) {
      if (Cn === null) {
        var a = /* @__PURE__ */ new Map(), u = Cn = /* @__PURE__ */ new Map();
        u.set(e, a);
      } else u = Cn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
      if (a.has(l)) return a;
      for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
        var n = e[u];
        if (!(n[Ca] || n[Hl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
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
    function h0(l, t, e) {
      l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
    }
    function gm(l, t, e) {
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
    function g0(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    function vm(l, t, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var u = _a(a.href), n = t.querySelector(vu(u));
          if (n) {
            t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, jl(n);
            return;
          }
          n = t.ownerDocument || t, a = d0(a), (u = Et.get(u)) && nf(a, u), n = n.createElement("link"), jl(n);
          var c = n;
          c._p = new Promise(function(i, s) {
            c.onload = i, c.onerror = s;
          }), Gl(n, "link", a), e.instance = n;
        }
        l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Hn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
      }
    }
    var ff = 0;
    function bm(l, t) {
      return l.stylesheets && l.count === 0 && qn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
        var a = setTimeout(function() {
          if (l.stylesheets && qn(l, l.stylesheets), l.unsuspend) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        }, 6e4 + t);
        0 < l.imgBytes && ff === 0 && (ff = 62500 * Iy());
        var u = setTimeout(function() {
          if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && qn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        }, (l.imgBytes > ff ? 50 : 800) + t);
        return l.unsuspend = e, function() {
          l.unsuspend = null, clearTimeout(a), clearTimeout(u);
        };
      } : null;
    }
    function Hn() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) qn(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          this.unsuspend = null, l();
        }
      }
    }
    var Bn = null;
    function qn(l, t) {
      l.stylesheets = null, l.unsuspend !== null && (l.count++, Bn = /* @__PURE__ */ new Map(), t.forEach(Sm, l), Bn = null, Hn.call(l));
    }
    function Sm(l, t) {
      if (!(t.state.loading & 4)) {
        var e = Bn.get(l);
        if (e) var a = e.get(null);
        else {
          e = /* @__PURE__ */ new Map(), Bn.set(l, e);
          for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
            var c = u[n];
            (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
          }
          a && e.set(null, a);
        }
        u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = Hn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
      }
    }
    var Su = {
      $$typeof: yl,
      Provider: null,
      Consumer: null,
      _currentValue: Z,
      _currentValue2: Z,
      _threadCount: 0
    };
    function pm(l, t, e, a, u, n, c, i, s) {
      this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ec(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ec(0), this.hiddenUpdates = ec(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function v0(l, t, e, a, u, n, c, i, s, v, E, A) {
      return l = new pm(l, t, e, c, s, v, E, A, i), t = 1, n === true && (t |= 24), n = ct(3, null, null, t), l.current = n, n.stateNode = l, t = Xc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
        element: a,
        isDehydrated: e,
        cache: t
      }, Vc(n), l;
    }
    function b0(l) {
      return l ? (l = ua, l) : ua;
    }
    function S0(l, t, e, a, u, n) {
      u = b0(u), a.context === null ? a.context = u : a.pendingContext = u, a = ne(t), a.payload = {
        element: e
      }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ce(l, a, t), e !== null && (Pl(e, l, t), Fa(e, l, t));
    }
    function p0(l, t) {
      if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
        var e = l.retryLane;
        l.retryLane = e !== 0 && e < t ? e : t;
      }
    }
    function sf(l, t) {
      p0(l, t), (l = l.alternate) && p0(l, t);
    }
    function x0(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = Ue(l, 67108864);
        t !== null && Pl(t, l, 67108864), sf(l, 67108864);
      }
    }
    function E0(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = ot();
        t = ac(t);
        var e = Ue(l, t);
        e !== null && Pl(e, l, t), sf(l, t);
      }
    }
    var Yn = true;
    function xm(l, t, e, a) {
      var u = z.T;
      z.T = null;
      var n = C.p;
      try {
        C.p = 2, rf(l, t, e, a);
      } finally {
        C.p = n, z.T = u;
      }
    }
    function Em(l, t, e, a) {
      var u = z.T;
      z.T = null;
      var n = C.p;
      try {
        C.p = 8, rf(l, t, e, a);
      } finally {
        C.p = n, z.T = u;
      }
    }
    function rf(l, t, e, a) {
      if (Yn) {
        var u = of(a);
        if (u === null) Wi(l, t, a, Gn, e), T0(l, a);
        else if (Tm(u, l, t, e, a)) a.stopPropagation();
        else if (T0(l, a), t & 4 && -1 < zm.indexOf(l)) {
          for (; u !== null; ) {
            var n = we(u);
            if (n !== null) switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = _e(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var s = 1 << 31 - ut(c);
                      i.entanglements[1] |= s, c &= ~s;
                    }
                    Dt(n), (ul & 6) === 0 && (xn = et() + 500, yu(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Ue(n, 2), i !== null && Pl(i, n, 2), zn(), sf(n, 2);
            }
            if (n = of(a), n === null && Wi(l, t, a, Gn, e), n === u) break;
            u = n;
          }
          u !== null && a.stopPropagation();
        } else Wi(l, t, a, null, e);
      }
    }
    function of(l) {
      return l = dc(l), df(l);
    }
    var Gn = null;
    function df(l) {
      if (Gn = null, l = Je(l), l !== null) {
        var t = D(l);
        if (t === null) l = null;
        else {
          var e = t.tag;
          if (e === 13) {
            if (l = B(t), l !== null) return l;
            l = null;
          } else if (e === 31) {
            if (l = U(t), l !== null) return l;
            l = null;
          } else if (e === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return Gn = l, null;
    }
    function z0(l) {
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
          switch (fd()) {
            case Df:
              return 2;
            case Uf:
              return 8;
            case Ou:
            case sd:
              return 32;
            case jf:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var yf = false, ve = null, be = null, Se = null, pu = /* @__PURE__ */ new Map(), xu = /* @__PURE__ */ new Map(), pe = [], zm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function T0(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          ve = null;
          break;
        case "dragenter":
        case "dragleave":
          be = null;
          break;
        case "mouseover":
        case "mouseout":
          Se = null;
          break;
        case "pointerover":
        case "pointerout":
          pu.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          xu.delete(t.pointerId);
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
      }, t !== null && (t = we(t), t !== null && x0(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
    }
    function Tm(l, t, e, a, u) {
      switch (t) {
        case "focusin":
          return ve = Eu(ve, l, t, e, a, u), true;
        case "dragenter":
          return be = Eu(be, l, t, e, a, u), true;
        case "mouseover":
          return Se = Eu(Se, l, t, e, a, u), true;
        case "pointerover":
          var n = u.pointerId;
          return pu.set(n, Eu(pu.get(n) || null, l, t, e, a, u)), true;
        case "gotpointercapture":
          return n = u.pointerId, xu.set(n, Eu(xu.get(n) || null, l, t, e, a, u)), true;
      }
      return false;
    }
    function A0(l) {
      var t = Je(l.target);
      if (t !== null) {
        var e = D(t);
        if (e !== null) {
          if (t = e.tag, t === 13) {
            if (t = B(e), t !== null) {
              l.blockedOn = t, Yf(l.priority, function() {
                E0(e);
              });
              return;
            }
          } else if (t === 31) {
            if (t = U(e), t !== null) {
              l.blockedOn = t, Yf(l.priority, function() {
                E0(e);
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
        var e = of(l.nativeEvent);
        if (e === null) {
          e = l.nativeEvent;
          var a = new e.constructor(e.type, e);
          oc = a, e.target.dispatchEvent(a), oc = null;
        } else return t = we(e), t !== null && x0(t), l.blockedOn = e, false;
        t.shift();
      }
      return true;
    }
    function _0(l, t, e) {
      Xn(l) && e.delete(t);
    }
    function Am() {
      yf = false, ve !== null && Xn(ve) && (ve = null), be !== null && Xn(be) && (be = null), Se !== null && Xn(Se) && (Se = null), pu.forEach(_0), xu.forEach(_0);
    }
    function Qn(l, t) {
      l.blockedOn === t && (l.blockedOn = null, yf || (yf = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, Am)));
    }
    var Zn = null;
    function O0(l) {
      Zn !== l && (Zn = l, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        Zn === l && (Zn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (df(a || e) === null) continue;
            break;
          }
          var n = we(e);
          n !== null && (l.splice(t, 3), t -= 3, ri(n, {
            pending: true,
            data: u,
            method: e.method,
            action: a
          }, a, u));
        }
      }));
    }
    function Na(l) {
      function t(s) {
        return Qn(s, l);
      }
      ve !== null && Qn(ve, l), be !== null && Qn(be, l), Se !== null && Qn(Se, l), pu.forEach(t), xu.forEach(t);
      for (var e = 0; e < pe.length; e++) {
        var a = pe[e];
        a.blockedOn === l && (a.blockedOn = null);
      }
      for (; 0 < pe.length && (e = pe[0], e.blockedOn === null); ) A0(e), e.blockedOn === null && pe.shift();
      if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[wl] || null;
        if (typeof n == "function") c || O0(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[wl] || null) i = c.formAction;
            else if (df(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), O0(e);
        }
      }
    }
    function N0() {
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
    function mf(l) {
      this._internalRoot = l;
    }
    Ln.prototype.render = mf.prototype.render = function(l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var e = t.current, a = ot();
      S0(e, a, l, t, null, null);
    }, Ln.prototype.unmount = mf.prototype.unmount = function() {
      var l = this._internalRoot;
      if (l !== null) {
        this._internalRoot = null;
        var t = l.containerInfo;
        S0(l.current, 2, null, l, null, null), zn(), t[Ke] = null;
      }
    };
    function Ln(l) {
      this._internalRoot = l;
    }
    Ln.prototype.unstable_scheduleHydration = function(l) {
      if (l) {
        var t = qf();
        l = {
          blockedOn: null,
          target: l,
          priority: t
        };
        for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++) ;
        pe.splice(e, 0, l), e === 0 && A0(l);
      }
    };
    var M0 = m.version;
    if (M0 !== "19.2.4") throw Error(r(527, M0, "19.2.4"));
    C.findDOMNode = function(l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
      return l = h(t), l = l !== null ? j(l) : null, l = l === null ? null : l.stateNode, l;
    };
    var _m = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: z,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Vn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Vn.isDisabled && Vn.supportsFiber) try {
        Ua = Vn.inject(_m), at = Vn;
      } catch {
      }
    }
    return Tu.createRoot = function(l, t) {
      if (!N(l)) throw Error(r(299));
      var e = false, a = "", u = Hr, n = Br, c = qr;
      return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = v0(l, 1, false, null, null, e, a, null, u, n, c, N0), l[Ke] = t.current, ki(l), new mf(t);
    }, Tu.hydrateRoot = function(l, t, e) {
      if (!N(l)) throw Error(r(299));
      var a = false, u = "", n = Hr, c = Br, i = qr, s = null;
      return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = v0(l, 1, true, t, e ?? null, a, u, s, n, c, i, N0), t.context = b0(null), e = t.current, a = ot(), a = ac(a), u = ne(a), u.callback = null, ce(e, u, a), e = a, t.current.lanes = e, Ra(t, e), Dt(t), l[Ke] = t.current, ki(l), new Ln(t);
    }, Tu.version = "19.2.4", Tu;
  }
  var G0;
  function Hm() {
    if (G0) return vf.exports;
    G0 = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (m) {
        console.error(m);
      }
    }
    return f(), vf.exports = Cm(), vf.exports;
  }
  var Bm = Hm();
  const qm = ({ recommendation: f, equity: m, potOdds: b }) => {
    let r = "";
    f === "FOLD" ? r = `Pot Odds (${(b * 100).toFixed(1)}%) are higher than your Equity (${(m * 100).toFixed(1)}%). Calling is -EV.` : f === "RAISE" ? r = `Strong Equity (${(m * 100).toFixed(1)}%) suggests value betting or raising for protection.` : f === "CHECK" ? r = "No bet facing you. Checking is the standard play to realize equity or trap." : r = `Equity (${(m * 100).toFixed(1)}%) justifies calling the bet given the Pot Odds (${(b * 100).toFixed(1)}%).`;
    const N = Math.min(m * 100, 100), D = Math.min(b * 100, 100);
    return x.jsxs("div", {
      className: "mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
      children: [
        x.jsx("div", {
          className: "flex items-center gap-2 mb-2",
          children: x.jsx("h3", {
            className: "text-xs font-bold text-gray-500 uppercase tracking-wider",
            children: "Decision Rationale"
          })
        }),
        x.jsx("p", {
          className: "text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",
          children: r
        }),
        x.jsxs("div", {
          className: "space-y-3",
          children: [
            x.jsxs("div", {
              children: [
                x.jsxs("div", {
                  className: "flex justify-between text-xs mb-1",
                  children: [
                    x.jsx("span", {
                      className: "font-bold text-blue-600 dark:text-blue-400",
                      children: "Equity (Win %)"
                    }),
                    x.jsxs("span", {
                      className: "font-mono",
                      children: [
                        (m * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                x.jsx("div", {
                  className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  children: x.jsx("div", {
                    className: "h-full bg-blue-500 rounded-full transition-all duration-500",
                    style: {
                      width: `${N}%`
                    }
                  })
                })
              ]
            }),
            x.jsxs("div", {
              children: [
                x.jsxs("div", {
                  className: "flex justify-between text-xs mb-1",
                  children: [
                    x.jsx("span", {
                      className: "font-bold text-orange-600 dark:text-orange-400",
                      children: "Pot Odds (Cost)"
                    }),
                    x.jsxs("span", {
                      className: "font-mono",
                      children: [
                        (b * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                x.jsx("div", {
                  className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                  children: x.jsx("div", {
                    className: "h-full bg-orange-500 rounded-full transition-all duration-500",
                    style: {
                      width: `${D}%`
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
  const Ym = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), V0 = (...f) => f.filter((m, b, r) => !!m && m.trim() !== "" && r.indexOf(m) === b).join(" ").trim();
  var Gm = {
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
  const Xm = w.forwardRef(({ color: f = "currentColor", size: m = 24, strokeWidth: b = 2, absoluteStrokeWidth: r, className: N = "", children: D, iconNode: B, ...U }, O) => w.createElement("svg", {
    ref: O,
    ...Gm,
    width: m,
    height: m,
    stroke: f,
    strokeWidth: r ? Number(b) * 24 / Number(m) : b,
    className: V0("lucide", N),
    ...U
  }, [
    ...B.map(([h, j]) => w.createElement(h, j)),
    ...Array.isArray(D) ? D : [
      D
    ]
  ]));
  const K0 = (f, m) => {
    const b = w.forwardRef(({ className: r, ...N }, D) => w.createElement(Xm, {
      ref: D,
      iconNode: m,
      className: V0(`lucide-${Ym(f)}`, r),
      ...N
    }));
    return b.displayName = `${f}`, b;
  };
  const Qm = [
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
  ], Zm = K0("Info", Qm);
  const Lm = [
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
  ], J0 = K0("X", Lm), Au = ({ term: f, children: m, onInfoClick: b, className: r = "" }) => x.jsxs("span", {
    className: `inline-flex items-center gap-1 ${r}`,
    children: [
      m,
      x.jsx("button", {
        onClick: (N) => {
          N.stopPropagation(), b(f);
        },
        className: "p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",
        children: x.jsx(Zm, {
          size: 10,
          className: "text-gray-400 hover:text-blue-500"
        })
      })
    ]
  }), Vm = ({ rawEquity: f, adjustedEquity: m, potOdds: b, ev: r, recommendation: N, position: D, isCalculating: B, onInfoClick: U }) => {
    const O = () => {
      switch (N) {
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
      switch (N) {
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
    return x.jsxs("div", {
      className: `m-4 p-6 rounded-xl border-2 transition-all ${h()} shadow-sm ${B ? "opacity-50 animate-pulse" : "opacity-100"}`,
      children: [
        x.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            x.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                x.jsx("span", {
                  className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Recommendation"
                }),
                x.jsx(Au, {
                  term: "Position",
                  onInfoClick: U,
                  children: x.jsx("span", {
                    className: `text-[9px] px-1.5 py-0.5 rounded font-bold ${D === "IP" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`,
                    children: D
                  })
                })
              ]
            }),
            x.jsx("span", {
              className: `text-5xl font-black tracking-tighter ${O()}`,
              children: N
            }),
            x.jsxs("div", {
              className: "mt-6 w-full grid grid-cols-3 gap-2 divide-x divide-gray-200 dark:divide-gray-700",
              children: [
                x.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    x.jsx(Au, {
                      term: "Equity",
                      onInfoClick: U,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "Raw Eq"
                    }),
                    x.jsxs("span", {
                      className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                      children: [
                        (f * 100).toFixed(1),
                        "%"
                      ]
                    }),
                    x.jsxs("span", {
                      className: "text-[9px] text-gray-400",
                      children: [
                        "Adj: ",
                        (m * 100).toFixed(1),
                        "%"
                      ]
                    })
                  ]
                }),
                x.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    x.jsx(Au, {
                      term: "PotOdds",
                      onInfoClick: U,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "Pot Odds"
                    }),
                    x.jsxs("span", {
                      className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                      children: [
                        (b * 100).toFixed(1),
                        "%"
                      ]
                    }),
                    x.jsx("span", {
                      className: `text-[9px] font-bold ${m > b ? "text-green-500" : "text-red-500"}`,
                      children: m > b ? "Good" : "Bad"
                    })
                  ]
                }),
                x.jsxs("div", {
                  className: "flex flex-col items-center px-2",
                  children: [
                    x.jsx(Au, {
                      term: "EV",
                      onInfoClick: U,
                      className: "text-[9px] font-bold text-gray-400 uppercase mb-1",
                      children: "EV"
                    }),
                    x.jsxs("span", {
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
        x.jsx(qm, {
          recommendation: N,
          equity: m,
          potOdds: b
        })
      ]
    });
  }, Km = [
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
  ], w0 = [
    "\u2663",
    "\u2666",
    "\u2665",
    "\u2660"
  ], Jm = (f) => {
    const m = Math.floor(f / 4), b = f % 4;
    return Km[m] + w0[b];
  }, wm = (f) => w0[f], km = (f) => f === 1 || f === 2 ? "text-red-500" : "text-slate-900 dark:text-slate-100";
  function Wm(f, m) {
    return f * 4 + m;
  }
  function $m(f) {
    return Math.floor(f / 4);
  }
  function Fm(f) {
    return f % 4;
  }
  const _f = [
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
  ], k0 = [
    "c",
    "d",
    "h",
    "s"
  ];
  function Im(f) {
    return _f[$m(f)] + k0[Fm(f)];
  }
  function Pm(f) {
    const m = _f.indexOf(f[0]), b = k0.indexOf(f[1]);
    if (m === -1 || b === -1) throw new Error(`Invalid card string: ${f}`);
    return Wm(m, b);
  }
  var W0 = L0();
  const lh = ({ selectedCards: f, onSelect: m, onClose: b, isOpen: r }) => {
    if (!r) return null;
    const N = [
      {
        name: "s",
        label: "\u2660",
        color: "text-gray-900 dark:text-gray-100"
      },
      {
        name: "h",
        label: "\u2665",
        color: "text-red-600 dark:text-red-500"
      },
      {
        name: "c",
        label: "\u2663",
        color: "text-green-700 dark:text-green-500"
      },
      {
        name: "d",
        label: "\u2666",
        color: "text-blue-600 dark:text-blue-500"
      }
    ], D = (U, O) => `${U}${O}`, B = [
      ..._f
    ].reverse();
    return W0.createPortal(x.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
      onClick: b,
      children: x.jsxs("div", {
        className: "bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]",
        onClick: (U) => U.stopPropagation(),
        children: [
          x.jsxs("div", {
            className: "flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800",
            children: [
              x.jsx("h2", {
                className: "text-lg font-bold text-gray-900 dark:text-white",
                children: "Select Card"
              }),
              x.jsx("button", {
                onClick: b,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                children: x.jsx(J0, {
                  size: 20,
                  className: "text-gray-500"
                })
              })
            ]
          }),
          x.jsx("div", {
            className: "p-4 overflow-y-auto flex-1",
            children: x.jsx("div", {
              className: "grid grid-cols-4 gap-2",
              children: N.map((U) => x.jsx("div", {
                className: "flex flex-col gap-2",
                children: B.map((O) => {
                  const h = D(O, U.name), j = f.includes(h);
                  return x.jsxs("button", {
                    onClick: () => !j && m(h),
                    disabled: j,
                    className: `
                        aspect-[3/4] rounded-lg border flex flex-col items-center justify-center
                        transition-all text-lg font-bold
                        ${j ? "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md active:scale-95"}
                      `,
                    children: [
                      x.jsx("span", {
                        className: U.color,
                        children: O
                      }),
                      x.jsx("span", {
                        className: `text-sm ${U.color}`,
                        children: U.label
                      })
                    ]
                  }, h);
                })
              }, U.name))
            })
          })
        ]
      })
    }), document.body);
  }, th = () => {
    const [f, m] = w.useState(false), [b, r] = w.useState(null), N = w.useCallback((B) => {
      r(B), m(true);
    }, []), D = w.useCallback(() => {
      m(false), r(null);
    }, []);
    return {
      isOpen: f,
      activeSlotIndex: b,
      openGrid: N,
      closeGrid: D
    };
  }, xf = ({ card: f, label: m, onClick: b, isActive: r, className: N = "" }) => {
    const D = f !== void 0 ? f % 4 : 0, B = f !== void 0 ? wm(D) : null, U = f !== void 0 ? km(D) : "", O = f !== void 0 ? Jm(f).slice(0, -1) : "";
    return x.jsx("div", {
      onClick: b,
      className: `
        w-14 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 ${N}
        ${f !== void 0 ? "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600" : "bg-gray-100 border-dashed border-gray-300 dark:bg-gray-900 dark:border-gray-700"}
        ${r ? "ring-2 ring-blue-500 border-blue-500" : ""}
      `,
      children: f !== void 0 ? x.jsxs(x.Fragment, {
        children: [
          x.jsx("span", {
            className: "text-lg font-bold text-gray-900 dark:text-gray-100",
            children: O
          }),
          x.jsx("span", {
            className: `text-2xl leading-none ${U}`,
            children: B
          })
        ]
      }) : x.jsx("span", {
        className: "text-[10px] text-gray-400 font-bold uppercase",
        children: m
      })
    });
  }, eh = ({ holeCards: f, boardCards: m, onSelectCard: b, onClear: r }) => {
    const { isOpen: N, activeSlotIndex: D, openGrid: B, closeGrid: U } = th(), O = (M) => {
      B(M);
    }, h = (M) => {
      if (D === null) return;
      const R = Pm(M);
      D < 2 ? b("hole", D, R) : b("board", D - 2, R), U();
    }, j = [
      ...f,
      ...m
    ].map(Im);
    return x.jsxs("div", {
      className: "flex flex-col gap-4 p-4",
      children: [
        x.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            x.jsx("h3", {
              className: "text-xs font-bold text-gray-500 uppercase",
              children: "Hole Cards"
            }),
            x.jsx("button", {
              onClick: r,
              className: "text-[10px] text-blue-500 font-bold uppercase",
              children: "Clear All"
            })
          ]
        }),
        x.jsxs("div", {
          className: "flex gap-2",
          children: [
            x.jsx(xf, {
              card: f[0],
              label: "H1",
              onClick: () => O(0),
              className: "hole-card-slot"
            }),
            x.jsx(xf, {
              card: f[1],
              label: "H2",
              onClick: () => O(1),
              className: "hole-card-slot"
            })
          ]
        }),
        x.jsx("h3", {
          className: "text-xs font-bold text-gray-500 uppercase mt-2",
          children: "Board Cards"
        }),
        x.jsx("div", {
          className: "flex gap-2",
          children: [
            0,
            1,
            2,
            3,
            4
          ].map((M) => x.jsx(xf, {
            card: m[M],
            label: `B${M + 1}`,
            onClick: () => O(M + 2),
            className: "board-card-slot"
          }, M))
        }),
        x.jsx(lh, {
          isOpen: N,
          onClose: U,
          selectedCards: j,
          onSelect: h
        })
      ]
    });
  }, ah = [
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
  ], uh = ({ onSelectRatio: f, selectedRatio: m }) => x.jsx("div", {
    className: "grid grid-cols-6 gap-1 my-2",
    children: ah.map((b) => x.jsx("button", {
      onClick: () => f(b.ratio),
      className: `
            px-1 py-2 text-[10px] font-bold uppercase rounded transition-colors
            ${m === b.ratio ? "bg-blue-600 text-white shadow-inner" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"}
          `,
      children: b.label
    }, b.label))
  }), nh = ({ potSize: f, facingBet: m, onUpdatePot: b, onUpdateBet: r, selectedRatio: N, onSelectRatio: D }) => x.jsxs("div", {
    className: "p-4 flex flex-col gap-4",
    children: [
      x.jsxs("div", {
        className: "grid grid-cols-2 gap-4",
        children: [
          x.jsxs("div", {
            className: "flex flex-col",
            children: [
              x.jsx("label", {
                htmlFor: "pot-input",
                className: "text-xs font-semibold text-gray-500 uppercase mb-1",
                children: "Current Pot ($)"
              }),
              x.jsx("input", {
                id: "pot-input",
                type: "number",
                inputMode: "decimal",
                value: f === 0 ? "" : f,
                onChange: (B) => b(parseFloat(B.target.value) || 0),
                placeholder: "0.00",
                className: "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md p-2 text-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
              })
            ]
          }),
          x.jsxs("div", {
            className: "flex flex-col",
            children: [
              x.jsx("label", {
                htmlFor: "facing-bet-input",
                className: "text-xs font-semibold text-gray-500 uppercase mb-1",
                children: "Facing Bet ($)"
              }),
              x.jsx("input", {
                id: "facing-bet-input",
                type: "number",
                inputMode: "decimal",
                value: m === 0 ? "" : m,
                onChange: (B) => r(parseFloat(B.target.value) || 0),
                placeholder: "0.00",
                className: "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md p-2 text-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
              })
            ]
          })
        ]
      }),
      x.jsx(uh, {
        onSelectRatio: D,
        selectedRatio: N
      })
    ]
  }), ch = ({ value: f, min: m, max: b, onChange: r }) => x.jsxs("div", {
    className: "px-4 mt-4",
    children: [
      x.jsxs("div", {
        className: "flex justify-between items-center mb-2",
        children: [
          x.jsx("label", {
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Bet Sizing"
          }),
          x.jsx("span", {
            className: "text-lg font-bold text-blue-600 dark:text-blue-400",
            children: f
          })
        ]
      }),
      x.jsx("input", {
        type: "range",
        min: m,
        max: b,
        step: 1,
        value: f,
        onChange: (N) => r(parseInt(N.target.value)),
        className: "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
      })
    ]
  }), ih = {
    Tight: "Tight",
    Loose: "Loose",
    Random: "Random"
  }, Of = [];
  for (let f = 0; f < 52; f++) for (let m = f + 1; m < 52; m++) Of.push([
    f,
    m
  ]);
  const zf = new Array(1326).fill(0);
  Of.forEach(([f, m], b) => {
    const r = Math.floor(f / 4), N = Math.floor(m / 4), D = f % 4, B = m % 4, [U, O] = r > N ? [
      r,
      N
    ] : [
      N,
      r
    ];
    let h = U * 2 + O;
    r === N && (h += 52), D === B && (h += 4), zf[b] = h;
  });
  Array.from({
    length: 1326
  }, (f, m) => m).sort((f, m) => zf[m] - zf[f]);
  const X0 = new Int32Array(2704).fill(-1);
  Of.forEach(([f, m], b) => {
    X0[f * 52 + m] = b, X0[m * 52 + f] = b;
  });
  const fh = ({ count: f, rangePreset: m, onCountChange: b, onRangeChange: r, onInfoClick: N }) => x.jsxs("div", {
    className: "p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
    children: [
      x.jsxs("div", {
        className: "flex justify-between items-center mb-4",
        children: [
          x.jsx("label", {
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Opponents"
          }),
          x.jsxs("div", {
            className: "flex gap-2",
            children: [
              x.jsx("button", {
                onClick: () => b(Math.max(1, f - 1)),
                className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold",
                children: "-"
              }),
              x.jsx("span", {
                className: "text-lg font-bold w-4 text-center text-gray-800 dark:text-gray-100",
                children: f
              }),
              x.jsx("button", {
                onClick: () => b(Math.min(9, f + 1)),
                className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold",
                children: "+"
              })
            ]
          })
        ]
      }),
      x.jsxs("div", {
        className: "flex justify-between items-center",
        children: [
          x.jsx(Au, {
            term: "Ranges",
            onInfoClick: N,
            className: "text-xs font-bold text-gray-500 uppercase",
            children: "Range"
          }),
          x.jsx("div", {
            className: "flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1",
            children: Object.keys(ih).map((D) => x.jsx("button", {
              onClick: () => r(D),
              className: `text-[10px] px-3 py-1.5 rounded-md font-bold transition-all ${m === D ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`,
              children: D
            }, D))
          })
        ]
      })
    ]
  }), $0 = "optimalbet_", sh = (f, m) => {
    try {
      localStorage.setItem($0 + f, JSON.stringify(m));
    } catch (b) {
      console.error("Error saving state to localStorage", b);
    }
  }, ze = (f) => {
    try {
      const m = localStorage.getItem($0 + f);
      return m ? JSON.parse(m) : null;
    } catch (m) {
      return console.error("Error loading state from localStorage", m), null;
    }
  }, rh = () => {
    const [f, m] = w.useState(ze("hole_cards") || []), [b, r] = w.useState(ze("board_cards") || []), N = w.useCallback((U) => {
      if (f.includes(U)) {
        m((O) => O.filter((h) => h !== U));
        return;
      }
      if (b.includes(U)) {
        r((O) => O.filter((h) => h !== U));
        return;
      }
      f.length < 2 ? m((O) => [
        ...O,
        U
      ]) : b.length < 5 && r((O) => [
        ...O,
        U
      ]);
    }, [
      f,
      b
    ]), D = w.useCallback(() => {
      m([]), r([]);
    }, []), B = w.useCallback((U, O, h) => {
      U === "hole" ? m((j) => {
        const M = [
          ...j
        ];
        return h === null ? M.splice(O, 1) : M[O] = h, M.filter((R) => R !== void 0);
      }) : r((j) => {
        const M = [
          ...j
        ];
        return h === null ? M.splice(O, 1) : M[O] = h, M.filter((R) => R !== void 0);
      });
    }, []);
    return w.useMemo(() => ({
      holeCards: f,
      boardCards: b,
      toggleCard: N,
      setCardAt: B,
      clearHand: D
    }), [
      f,
      b,
      N,
      B,
      D
    ]);
  }, oh = () => {
    const [f, m] = w.useState(ze("pot_size") || 0), [b, r] = w.useState(ze("facing_bet") || 0), [N, D] = w.useState(ze("stack_size") || 1e3), [B, U] = w.useState(ze("is_ip") ?? true), [O, h] = w.useState(ze("unit") || "USD"), [j, M] = w.useState(ze("opponents") || [
      {
        id: "1",
        rangePreset: "Random",
        rangePercentage: 1
      }
    ]), [R, fl] = w.useState("manual"), [tl, xl] = w.useState(null), Ll = w.useCallback((yl) => {
      m(yl), R === "ratio" && tl !== null && r(yl * tl);
    }, [
      R,
      tl
    ]), Ul = w.useCallback((yl) => {
      r(yl), fl("manual"), xl(null);
    }, []), lt = w.useCallback((yl) => {
      xl(yl), fl("ratio"), r(f * yl);
    }, [
      f
    ]);
    return w.useMemo(() => ({
      potSize: f,
      setPotSize: Ll,
      facingBet: b,
      setFacingBet: Ul,
      stackSize: N,
      setStackSize: D,
      isIP: B,
      setIsIP: U,
      unit: O,
      setUnit: h,
      opponents: j,
      setOpponents: M,
      inputMode: R,
      selectedRatio: tl,
      setRatio: lt
    }), [
      f,
      Ll,
      b,
      Ul,
      N,
      B,
      O,
      j,
      R,
      tl,
      lt
    ]);
  }, Ee = (f, m) => {
    w.useEffect(() => {
      sh(f, m);
    }, [
      f,
      m
    ]);
  }, dh = () => {
    const f = rh(), m = oh();
    return Ee("hole_cards", f.holeCards), Ee("board_cards", f.boardCards), Ee("pot_size", m.potSize), Ee("facing_bet", m.facingBet), Ee("stack_size", m.stackSize), Ee("is_ip", m.isIP), Ee("unit", m.unit), Ee("opponents", m.opponents), w.useMemo(() => ({
      ...f,
      ...m
    }), [
      f,
      m
    ]);
  };
  const F0 = /* @__PURE__ */ Symbol("Comlink.proxy"), yh = /* @__PURE__ */ Symbol("Comlink.endpoint"), mh = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), Ef = /* @__PURE__ */ Symbol("Comlink.finalizer"), Jn = /* @__PURE__ */ Symbol("Comlink.thrown"), I0 = (f) => typeof f == "object" && f !== null || typeof f == "function", hh = {
    canHandle: (f) => I0(f) && f[F0],
    serialize(f) {
      const { port1: m, port2: b } = new MessageChannel();
      return ld(f, m), [
        b,
        [
          b
        ]
      ];
    },
    deserialize(f) {
      return f.start(), ed(f);
    }
  }, gh = {
    canHandle: (f) => I0(f) && Jn in f,
    serialize({ value: f }) {
      let m;
      return f instanceof Error ? m = {
        isError: true,
        value: {
          message: f.message,
          name: f.name,
          stack: f.stack
        }
      } : m = {
        isError: false,
        value: f
      }, [
        m,
        []
      ];
    },
    deserialize(f) {
      throw f.isError ? Object.assign(new Error(f.value.message), f.value) : f.value;
    }
  }, P0 = /* @__PURE__ */ new Map([
    [
      "proxy",
      hh
    ],
    [
      "throw",
      gh
    ]
  ]);
  function vh(f, m) {
    for (const b of f) if (m === b || b === "*" || b instanceof RegExp && b.test(m)) return true;
    return false;
  }
  function ld(f, m = globalThis, b = [
    "*"
  ]) {
    m.addEventListener("message", function r(N) {
      if (!N || !N.data) return;
      if (!vh(b, N.origin)) {
        console.warn(`Invalid origin '${N.origin}' for comlink proxy`);
        return;
      }
      const { id: D, type: B, path: U } = Object.assign({
        path: []
      }, N.data), O = (N.data.argumentList || []).map(Ve);
      let h;
      try {
        const j = U.slice(0, -1).reduce((R, fl) => R[fl], f), M = U.reduce((R, fl) => R[fl], f);
        switch (B) {
          case "GET":
            h = M;
            break;
          case "SET":
            j[U.slice(-1)[0]] = Ve(N.data.value), h = true;
            break;
          case "APPLY":
            h = M.apply(j, O);
            break;
          case "CONSTRUCT":
            {
              const R = new M(...O);
              h = zh(R);
            }
            break;
          case "ENDPOINT":
            {
              const { port1: R, port2: fl } = new MessageChannel();
              ld(f, fl), h = Eh(R, [
                R
              ]);
            }
            break;
          case "RELEASE":
            h = void 0;
            break;
          default:
            return;
        }
      } catch (j) {
        h = {
          value: j,
          [Jn]: 0
        };
      }
      Promise.resolve(h).catch((j) => ({
        value: j,
        [Jn]: 0
      })).then((j) => {
        const [M, R] = Wn(j);
        m.postMessage(Object.assign(Object.assign({}, M), {
          id: D
        }), R), B === "RELEASE" && (m.removeEventListener("message", r), td(m), Ef in f && typeof f[Ef] == "function" && f[Ef]());
      }).catch((j) => {
        const [M, R] = Wn({
          value: new TypeError("Unserializable return value"),
          [Jn]: 0
        });
        m.postMessage(Object.assign(Object.assign({}, M), {
          id: D
        }), R);
      });
    }), m.start && m.start();
  }
  function bh(f) {
    return f.constructor.name === "MessagePort";
  }
  function td(f) {
    bh(f) && f.close();
  }
  function ed(f, m) {
    const b = /* @__PURE__ */ new Map();
    return f.addEventListener("message", function(N) {
      const { data: D } = N;
      if (!D || !D.id) return;
      const B = b.get(D.id);
      if (B) try {
        B(D);
      } finally {
        b.delete(D.id);
      }
    }), Tf(f, b, [], m);
  }
  function Kn(f) {
    if (f) throw new Error("Proxy has been released and is not useable");
  }
  function ad(f) {
    return Ma(f, /* @__PURE__ */ new Map(), {
      type: "RELEASE"
    }).then(() => {
      td(f);
    });
  }
  const wn = /* @__PURE__ */ new WeakMap(), kn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((f) => {
    const m = (wn.get(f) || 0) - 1;
    wn.set(f, m), m === 0 && ad(f);
  });
  function Sh(f, m) {
    const b = (wn.get(m) || 0) + 1;
    wn.set(m, b), kn && kn.register(f, m, f);
  }
  function ph(f) {
    kn && kn.unregister(f);
  }
  function Tf(f, m, b = [], r = function() {
  }) {
    let N = false;
    const D = new Proxy(r, {
      get(B, U) {
        if (Kn(N), U === mh) return () => {
          ph(D), ad(f), m.clear(), N = true;
        };
        if (U === "then") {
          if (b.length === 0) return {
            then: () => D
          };
          const O = Ma(f, m, {
            type: "GET",
            path: b.map((h) => h.toString())
          }).then(Ve);
          return O.then.bind(O);
        }
        return Tf(f, m, [
          ...b,
          U
        ]);
      },
      set(B, U, O) {
        Kn(N);
        const [h, j] = Wn(O);
        return Ma(f, m, {
          type: "SET",
          path: [
            ...b,
            U
          ].map((M) => M.toString()),
          value: h
        }, j).then(Ve);
      },
      apply(B, U, O) {
        Kn(N);
        const h = b[b.length - 1];
        if (h === yh) return Ma(f, m, {
          type: "ENDPOINT"
        }).then(Ve);
        if (h === "bind") return Tf(f, m, b.slice(0, -1));
        const [j, M] = Q0(O);
        return Ma(f, m, {
          type: "APPLY",
          path: b.map((R) => R.toString()),
          argumentList: j
        }, M).then(Ve);
      },
      construct(B, U) {
        Kn(N);
        const [O, h] = Q0(U);
        return Ma(f, m, {
          type: "CONSTRUCT",
          path: b.map((j) => j.toString()),
          argumentList: O
        }, h).then(Ve);
      }
    });
    return Sh(D, f), D;
  }
  function xh(f) {
    return Array.prototype.concat.apply([], f);
  }
  function Q0(f) {
    const m = f.map(Wn);
    return [
      m.map((b) => b[0]),
      xh(m.map((b) => b[1]))
    ];
  }
  const ud = /* @__PURE__ */ new WeakMap();
  function Eh(f, m) {
    return ud.set(f, m), f;
  }
  function zh(f) {
    return Object.assign(f, {
      [F0]: true
    });
  }
  function Wn(f) {
    for (const [m, b] of P0) if (b.canHandle(f)) {
      const [r, N] = b.serialize(f);
      return [
        {
          type: "HANDLER",
          name: m,
          value: r
        },
        N
      ];
    }
    return [
      {
        type: "RAW",
        value: f
      },
      ud.get(f) || []
    ];
  }
  function Ve(f) {
    switch (f.type) {
      case "HANDLER":
        return P0.get(f.name).deserialize(f.value);
      case "RAW":
        return f.value;
    }
  }
  function Ma(f, m, b, r) {
    return new Promise((N) => {
      const D = Th();
      m.set(D, N), f.start && f.start(), f.postMessage(Object.assign({
        id: D
      }, b), r);
    });
  }
  function Th() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
  }
  function Ah(f, m, b) {
    if (m === 0) return f;
    const r = Math.max(0.1, 1 - b / (m * 2));
    return f * r;
  }
  const _h = ({ holeCards: f, boardCards: m, gameState: b }) => {
    const [r, N] = w.useState(null), [D, B] = w.useState(false), U = w.useRef(null), O = JSON.stringify(f), h = JSON.stringify(m), j = JSON.stringify({
      pot: b.potSize,
      facing: b.facingBetSize,
      ip: b.isIP,
      opponents: b.opponents.map((R) => ({
        id: R.id,
        r: R.rangePreset
      }))
    });
    w.useEffect(() => {
      const R = new Worker(new URL("/optimalbet/assets/worker-Bns_92K0.js", import.meta.url), {
        type: "module"
      });
      return U.current = ed(R), () => R.terminate();
    }, []);
    const M = w.useCallback(async () => {
      if (!U.current || f.length < 2) {
        N(null);
        return;
      }
      B(true);
      try {
        const R = (b.opponents || []).map((tl) => ({
          ...tl,
          rangePercentage: Ah(tl.rangePreset === "Tight" ? 0.15 : tl.rangePreset === "Loose" ? 0.4 : 1, b.potSize, b.facingBetSize)
        })), fl = await U.current.calculate({
          holeCards: f,
          boardCards: m,
          gameState: {
            ...b,
            opponents: R
          },
          options: {
            iterations: 1e4,
            mode: "auto"
          }
        });
        N(fl);
      } catch (R) {
        console.error("Equity Engine Error:", R);
      } finally {
        B(false);
      }
    }, [
      O,
      h,
      j
    ]);
    return w.useEffect(() => {
      const R = setTimeout(() => {
        M();
      }, 150);
      return () => clearTimeout(R);
    }, [
      M
    ]), {
      result: r,
      isCalculating: D
    };
  }, Oh = () => {
    const [f, m] = w.useState(null), b = w.useCallback((N) => {
      m(N);
    }, []), r = w.useCallback(() => {
      m(null);
    }, []);
    return {
      activeTerm: f,
      isOpen: f !== null,
      openGlossary: b,
      closeGlossary: r
    };
  }, Nh = {
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
  }, Mh = ({ term: f, onClose: m }) => {
    if (!f) return null;
    const b = Nh[f];
    return W0.createPortal(x.jsx("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]",
      onClick: m,
      children: x.jsx("div", {
        className: "bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all",
        onClick: (r) => r.stopPropagation(),
        children: x.jsxs("div", {
          className: "p-5",
          children: [
            x.jsxs("div", {
              className: "flex justify-between items-start mb-4",
              children: [
                x.jsxs("div", {
                  children: [
                    x.jsx("span", {
                      className: "text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded",
                      children: b.category
                    }),
                    x.jsx("h2", {
                      className: "text-xl font-black text-gray-900 dark:text-white mt-1",
                      children: b.title
                    })
                  ]
                }),
                x.jsx("button", {
                  onClick: m,
                  className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",
                  children: x.jsx(J0, {
                    size: 18,
                    className: "text-gray-400"
                  })
                })
              ]
            }),
            x.jsxs("div", {
              className: "space-y-4",
              children: [
                x.jsx("p", {
                  className: "text-gray-600 dark:text-gray-300 leading-relaxed",
                  children: b.definition
                }),
                b.example && x.jsxs("div", {
                  className: "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800",
                  children: [
                    x.jsx("span", {
                      className: "text-[10px] font-bold text-gray-400 uppercase block mb-1",
                      children: "Example"
                    }),
                    x.jsxs("p", {
                      className: "text-xs text-gray-500 dark:text-gray-400 italic",
                      children: [
                        '"',
                        b.example,
                        '"'
                      ]
                    })
                  ]
                })
              ]
            }),
            x.jsx("button", {
              onClick: m,
              className: "w-full mt-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl active:scale-95 transition-all",
              children: "Got it"
            })
          ]
        })
      })
    }), document.body);
  };
  function Dh() {
    var _a;
    const f = dh(), { holeCards: m, boardCards: b, clearHand: r, setCardAt: N, potSize: D, setPotSize: B, facingBet: U, setFacingBet: O, stackSize: h, isIP: j, setIsIP: M, unit: R, setUnit: fl, opponents: tl, setOpponents: xl, selectedRatio: Ll, setRatio: Ul } = f, { activeTerm: lt, openGlossary: yl, closeGlossary: Vl } = Oh(), dt = w.useMemo(() => ({
      potSize: D,
      facingBetSize: U,
      stackSize: h,
      isIP: j,
      unit: R,
      opponentCount: tl.length,
      opponents: tl
    }), [
      D,
      U,
      h,
      j,
      R,
      tl
    ]), { result: Cl, isCalculating: k } = _h({
      holeCards: m,
      boardCards: b,
      gameState: dt
    });
    return x.jsxs("div", {
      className: "min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden transition-colors",
      children: [
        x.jsxs("header", {
          className: "bg-blue-700 dark:bg-blue-900 text-white p-4 shadow-md flex justify-between items-center",
          children: [
            x.jsxs("div", {
              children: [
                x.jsx("h1", {
                  className: "text-xl font-black tracking-tight uppercase",
                  children: "OptimalBet"
                }),
                x.jsx("p", {
                  className: "text-[10px] font-bold opacity-70 tracking-widest uppercase",
                  children: "Advanced Analytics"
                })
              ]
            }),
            x.jsx("button", {
              onClick: () => fl((Al) => Al === "USD" ? "BB" : "USD"),
              className: "text-xs font-bold bg-blue-800 p-2 rounded",
              children: R
            })
          ]
        }),
        x.jsxs("main", {
          className: "flex-1 overflow-y-auto pb-24 text-[var(--text-primary)]",
          children: [
            Cl ? x.jsx(Vm, {
              ...Cl,
              position: j ? "IP" : "OOP",
              isCalculating: k,
              onInfoClick: yl
            }) : x.jsx("div", {
              className: "p-8 text-center text-gray-400 text-sm",
              children: "Select cards to start analysis"
            }),
            x.jsxs("div", {
              className: "bg-white dark:bg-gray-900 m-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden",
              children: [
                x.jsxs("div", {
                  className: "px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",
                  children: [
                    x.jsx("span", {
                      className: "text-[10px] font-bold text-gray-400 uppercase",
                      children: "Input Dashboard"
                    }),
                    x.jsxs("button", {
                      onClick: () => M(!j),
                      className: `text-[9px] px-2 py-1 rounded font-bold ${j ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`,
                      children: [
                        "Toggle ",
                        j ? "IP" : "OOP"
                      ]
                    })
                  ]
                }),
                x.jsx(eh, {
                  holeCards: m,
                  boardCards: b,
                  onSelectCard: N,
                  onClear: r
                }),
                x.jsx(nh, {
                  potSize: D,
                  facingBet: U,
                  onUpdatePot: B,
                  onUpdateBet: O,
                  selectedRatio: Ll,
                  onSelectRatio: Ul
                }),
                x.jsx(ch, {
                  value: U,
                  min: 0,
                  max: h,
                  onChange: O
                }),
                x.jsx(fh, {
                  count: tl.length,
                  rangePreset: ((_a = tl[0]) == null ? void 0 : _a.rangePreset) || "Random",
                  onCountChange: (Al) => {
                    const Kl = Array.from({
                      length: Al
                    }, (Ut, tt) => tl[tt] || {
                      id: String(tt + 1),
                      rangePreset: "Random",
                      rangePercentage: 1
                    });
                    xl(Kl);
                  },
                  onRangeChange: (Al) => {
                    const Kl = tl.map((Ut) => ({
                      ...Ut,
                      rangePreset: Al
                    }));
                    xl(Kl);
                  },
                  onInfoClick: yl
                })
              ]
            })
          ]
        }),
        x.jsx(Mh, {
          term: lt,
          onClose: Vl
        })
      ]
    });
  }
  class Uh extends w.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        hasError: false
      });
      __publicField(this, "handleRestore", () => {
        window.location.reload();
      });
    }
    static getDerivedStateFromError(m) {
      return {
        hasError: true
      };
    }
    componentDidCatch(m, b) {
      console.error("Uncaught error:", m, b);
    }
    render() {
      return this.state.hasError ? x.jsxs("div", {
        className: "min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center p-6 text-center",
        children: [
          x.jsx("div", {
            className: "w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6",
            children: x.jsx("svg", {
              className: "w-8 h-8 text-red-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: x.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              })
            })
          }),
          x.jsx("h2", {
            className: "text-2xl font-black text-red-600 dark:text-red-500 mb-4 uppercase",
            children: "System Error"
          }),
          x.jsx("p", {
            className: "text-gray-600 dark:text-gray-400 mb-8 max-w-xs text-sm",
            children: "A calculation or UI error occurred. Your last game state has been automatically saved to LocalStorage."
          }),
          x.jsx("button", {
            onClick: this.handleRestore,
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-wider text-sm",
            children: "Restore & Reload"
          })
        ]
      }) : this.props.children;
    }
  }
  const jh = "modulepreload", Rh = function(f) {
    return "/optimalbet/" + f;
  }, Z0 = {}, Ch = function(m, b, r) {
    let N = Promise.resolve();
    if (b && b.length > 0) {
      let O = function(h) {
        return Promise.all(h.map((j) => Promise.resolve(j).then((M) => ({
          status: "fulfilled",
          value: M
        }), (M) => ({
          status: "rejected",
          reason: M
        }))));
      };
      document.getElementsByTagName("link");
      const B = document.querySelector("meta[property=csp-nonce]"), U = (B == null ? void 0 : B.nonce) || (B == null ? void 0 : B.getAttribute("nonce"));
      N = O(b.map((h) => {
        if (h = Rh(h), h in Z0) return;
        Z0[h] = true;
        const j = h.endsWith(".css"), M = j ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${h}"]${M}`)) return;
        const R = document.createElement("link");
        if (R.rel = j ? "stylesheet" : jh, j || (R.as = "script"), R.crossOrigin = "", R.href = h, U && R.setAttribute("nonce", U), document.head.appendChild(R), j) return new Promise((fl, tl) => {
          R.addEventListener("load", fl), R.addEventListener("error", () => tl(new Error(`Unable to preload CSS for ${h}`)));
        });
      }));
    }
    function D(B) {
      const U = new Event("vite:preloadError", {
        cancelable: true
      });
      if (U.payload = B, window.dispatchEvent(U), !U.defaultPrevented) throw B;
    }
    return N.then((B) => {
      for (const U of B || []) U.status === "rejected" && D(U.reason);
      return m().catch(D);
    });
  };
  function Hh(f = {}) {
    const { immediate: m = false, onNeedRefresh: b, onOfflineReady: r, onRegistered: N, onRegisteredSW: D, onRegisterError: B } = f;
    let U, O;
    const h = async (M = true) => {
      await O;
    };
    async function j() {
      if ("serviceWorker" in navigator) {
        if (U = await Ch(async () => {
          const { Workbox: M } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
          return {
            Workbox: M
          };
        }, []).then(({ Workbox: M }) => new M("/optimalbet/sw.js", {
          scope: "/optimalbet/",
          type: "classic"
        })).catch((M) => {
          B == null ? void 0 : B(M);
        }), !U) return;
        U.addEventListener("activated", (M) => {
          (M.isUpdate || M.isExternal) && window.location.reload();
        }), U.addEventListener("installed", (M) => {
          M.isUpdate || (r == null ? void 0 : r());
        }), U.register({
          immediate: m
        }).then((M) => {
          D ? D("/optimalbet/sw.js", M) : N == null ? void 0 : N(M);
        }).catch((M) => {
          B == null ? void 0 : B(M);
        });
      }
    }
    return O = j(), h;
  }
  const Bh = () => {
    const f = Hh({
      onNeedRefresh() {
        confirm("New content available. Reload?") && f(true);
      },
      onOfflineReady() {
        console.log("App ready to work offline");
      }
    });
  };
  Bh();
  Bm.createRoot(document.getElementById("root")).render(x.jsx(w.StrictMode, {
    children: x.jsx(Uh, {
      children: x.jsx(Dh, {})
    })
  }));
})();
