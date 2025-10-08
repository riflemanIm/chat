var Kd = Object.defineProperty;
var Jd = (e, t, r) => t in e ? Kd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var qr = (e, t, r) => Jd(e, typeof t != "symbol" ? t + "" : t, r);
import * as _ from "react";
import ie, { forwardRef as Ll, useContext as Cn, useEffect as Ke, memo as Xd, useMemo as Rn, useRef as Et, useState as Je, useCallback as Ae, isValidElement as eo, cloneElement as to, Children as Qd, createContext as Bl } from "react";
import { Typography as st, ListItemAvatar as Fl, Avatar as Vt, ListItemText as Vl, ListItemButton as Ul, List as zl, DialogTitle as Zd, Dialog as Gl, Button as vo, Paper as ep, Box as Ne, ListItem as ro, Link as tp, Alert as Do, IconButton as qt, InputAdornment as Wl, CircularProgress as Hl, SvgIcon as rp, TextField as $i, Popover as ql, DialogContent as np, DialogActions as op, Slide as sp, Tooltip as ip, useMediaQuery as Mi, Menu as Yl, CardHeader as no, Fade as ap, Fab as Ia, CardContent as Kl, Backdrop as cp, MenuItem as $a, ListItemIcon as Ma, Card as Jl, Divider as qs, Chip as lp, Badge as Xl, Snackbar as up, Container as fp, Grid2 as ps } from "@mui/material";
import dp from "@emotion/styled";
import { ThemeContext as pp, keyframes as wn, css as Ql } from "@emotion/react";
import { useTranslation as lt } from "react-i18next";
import { Done as hp, DoneAll as mp, Send as gp, InsertEmoticon as yp } from "@mui/icons-material";
import * as vp from "react-dom";
import Ln from "react-dom";
var bp = /* @__PURE__ */ ((e) => (e[e.sent = 0] = "sent", e[e.read = 1] = "read", e))(bp || {}), Ep = /* @__PURE__ */ ((e) => (e[e.Unknown = 0] = "Unknown", e[e.Client = 1] = "Client", e[e.Agent = 2] = "Agent", e[e.Specialist = 3] = "Specialist", e[e.Operator = 4] = "Operator", e))(Ep || {}), Sp = /* @__PURE__ */ ((e) => (e.COPY = "COPY", e.REVOKE = "REVOKE", e.TOP_REVERT = "TOP_REVERT", e.TOP = "TOP", e.READ = "READ", e.DELETE = "DELETE", e))(Sp || {});
const PC = {
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  REVOKE_MESSAGE: "REVOKE_MESSAGE",
  MARK_PRIVATE_MESSAGES_READ: "MARK_PRIVATE_MESSAGES_READ"
};
function Di(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bn = { exports: {} }, Yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function xp() {
  if (Da) return Yr;
  Da = 1;
  var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, u) {
    var f, p = {}, g = null, y = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (f in l) n.call(l, f) && !s.hasOwnProperty(f) && (p[f] = l[f]);
    if (a && a.defaultProps) for (f in l = a.defaultProps, l) p[f] === void 0 && (p[f] = l[f]);
    return { $$typeof: t, type: a, key: g, ref: y, props: p, _owner: o.current };
  }
  return Yr.Fragment = r, Yr.jsx = i, Yr.jsxs = i, Yr;
}
var Kr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Tp() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), h = Symbol.iterator, d = "@@iterator";
    function S(R) {
      if (R === null || typeof R != "object")
        return null;
      var H = h && R[h] || R[d];
      return typeof H == "function" ? H : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(R) {
      {
        for (var H = arguments.length, Z = new Array(H > 1 ? H - 1 : 0), ae = 1; ae < H; ae++)
          Z[ae - 1] = arguments[ae];
        C("error", R, Z);
      }
    }
    function C(R, H, Z) {
      {
        var ae = T.ReactDebugCurrentFrame, be = ae.getStackAddendum();
        be !== "" && (H += "%s", Z = Z.concat([be]));
        var _e = Z.map(function(he) {
          return String(he);
        });
        _e.unshift("Warning: " + H), Function.prototype.apply.call(console[R], console, _e);
      }
    }
    var x = !1, v = !1, I = !1, D = !1, z = !1, W;
    W = Symbol.for("react.module.reference");
    function m(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === s || z || R === o || R === u || R === f || D || R === y || x || v || I || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === p || R.$$typeof === i || R.$$typeof === a || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === W || R.getModuleId !== void 0));
    }
    function $(R, H, Z) {
      var ae = R.displayName;
      if (ae)
        return ae;
      var be = H.displayName || H.name || "";
      return be !== "" ? Z + "(" + be + ")" : Z;
    }
    function U(R) {
      return R.displayName || "Context";
    }
    function G(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case a:
            var H = R;
            return U(H) + ".Consumer";
          case i:
            var Z = R;
            return U(Z._context) + ".Provider";
          case l:
            return $(R, R.render, "ForwardRef");
          case p:
            var ae = R.displayName || null;
            return ae !== null ? ae : G(R.type) || "Memo";
          case g: {
            var be = R, _e = be._payload, he = be._init;
            try {
              return G(he(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, w = 0, b, P, N, L, O, B, K;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function q() {
      {
        if (w === 0) {
          b = console.log, P = console.info, N = console.warn, L = console.error, O = console.group, B = console.groupCollapsed, K = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        w++;
      }
    }
    function Q() {
      {
        if (w--, w === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, R, {
              value: b
            }),
            info: M({}, R, {
              value: P
            }),
            warn: M({}, R, {
              value: N
            }),
            error: M({}, R, {
              value: L
            }),
            group: M({}, R, {
              value: O
            }),
            groupCollapsed: M({}, R, {
              value: B
            }),
            groupEnd: M({}, R, {
              value: K
            })
          });
        }
        w < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = T.ReactCurrentDispatcher, ee;
    function ne(R, H, Z) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (be) {
            var ae = be.stack.trim().match(/\n( *(at )?)/);
            ee = ae && ae[1] || "";
          }
        return `
` + ee + R;
      }
    }
    var oe = !1, Y;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new te();
    }
    function k(R, H) {
      if (!R || oe)
        return "";
      {
        var Z = Y.get(R);
        if (Z !== void 0)
          return Z;
      }
      var ae;
      oe = !0;
      var be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = re.current, re.current = null, q();
      try {
        if (H) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (nt) {
              ae = nt;
            }
            Reflect.construct(R, [], he);
          } else {
            try {
              he.call();
            } catch (nt) {
              ae = nt;
            }
            R.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            ae = nt;
          }
          R();
        }
      } catch (nt) {
        if (nt && ae && typeof nt.stack == "string") {
          for (var de = nt.stack.split(`
`), Ze = ae.stack.split(`
`), Le = de.length - 1, Fe = Ze.length - 1; Le >= 1 && Fe >= 0 && de[Le] !== Ze[Fe]; )
            Fe--;
          for (; Le >= 1 && Fe >= 0; Le--, Fe--)
            if (de[Le] !== Ze[Fe]) {
              if (Le !== 1 || Fe !== 1)
                do
                  if (Le--, Fe--, Fe < 0 || de[Le] !== Ze[Fe]) {
                    var gt = `
` + de[Le].replace(" at new ", " at ");
                    return R.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", R.displayName)), typeof R == "function" && Y.set(R, gt), gt;
                  }
                while (Le >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = _e, Q(), Error.prepareStackTrace = be;
      }
      var yr = R ? R.displayName || R.name : "", rr = yr ? ne(yr) : "";
      return typeof R == "function" && Y.set(R, rr), rr;
    }
    function fe(R, H, Z) {
      return k(R, !1);
    }
    function Re(R) {
      var H = R.prototype;
      return !!(H && H.isReactComponent);
    }
    function ze(R, H, Z) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return k(R, Re(R));
      if (typeof R == "string")
        return ne(R);
      switch (R) {
        case u:
          return ne("Suspense");
        case f:
          return ne("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case l:
            return fe(R.render);
          case p:
            return ze(R.type, H, Z);
          case g: {
            var ae = R, be = ae._payload, _e = ae._init;
            try {
              return ze(_e(be), H, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var _t = Object.prototype.hasOwnProperty, Pt = {}, Ct = T.ReactDebugCurrentFrame;
    function mt(R) {
      if (R) {
        var H = R._owner, Z = ze(R.type, R._source, H ? H.type : null);
        Ct.setExtraStackFrame(Z);
      } else
        Ct.setExtraStackFrame(null);
    }
    function tr(R, H, Z, ae, be) {
      {
        var _e = Function.call.bind(_t);
        for (var he in R)
          if (_e(R, he)) {
            var de = void 0;
            try {
              if (typeof R[he] != "function") {
                var Ze = Error((ae || "React class") + ": " + Z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ze.name = "Invariant Violation", Ze;
              }
              de = R[he](H, he, ae, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              de = Le;
            }
            de && !(de instanceof Error) && (mt(be), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", Z, he, typeof de), mt(null)), de instanceof Error && !(de.message in Pt) && (Pt[de.message] = !0, mt(be), A("Failed %s type: %s", Z, de.message), mt(null));
          }
      }
    }
    var Qe = Array.isArray;
    function ce(R) {
      return Qe(R);
    }
    function Pd(R) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, Z = H && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return Z;
      }
    }
    function kd(R) {
      try {
        return Sa(R), !1;
      } catch {
        return !0;
      }
    }
    function Sa(R) {
      return "" + R;
    }
    function xa(R) {
      if (kd(R))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pd(R)), Sa(R);
    }
    var Ta = T.ReactCurrentOwner, Ad = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ca, Ra;
    function Nd(R) {
      if (_t.call(R, "ref")) {
        var H = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Id(R) {
      if (_t.call(R, "key")) {
        var H = Object.getOwnPropertyDescriptor(R, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function $d(R, H) {
      typeof R.ref == "string" && Ta.current;
    }
    function Md(R, H) {
      {
        var Z = function() {
          Ca || (Ca = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Dd(R, H) {
      {
        var Z = function() {
          Ra || (Ra = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var jd = function(R, H, Z, ae, be, _e, he) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: H,
        ref: Z,
        props: he,
        // Record the component responsible for creating this element.
        _owner: _e
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function Ld(R, H, Z, ae, be) {
      {
        var _e, he = {}, de = null, Ze = null;
        Z !== void 0 && (xa(Z), de = "" + Z), Id(H) && (xa(H.key), de = "" + H.key), Nd(H) && (Ze = H.ref, $d(H, be));
        for (_e in H)
          _t.call(H, _e) && !Ad.hasOwnProperty(_e) && (he[_e] = H[_e]);
        if (R && R.defaultProps) {
          var Le = R.defaultProps;
          for (_e in Le)
            he[_e] === void 0 && (he[_e] = Le[_e]);
        }
        if (de || Ze) {
          var Fe = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          de && Md(he, Fe), Ze && Dd(he, Fe);
        }
        return jd(R, de, Ze, be, ae, Ta.current, he);
      }
    }
    var ls = T.ReactCurrentOwner, wa = T.ReactDebugCurrentFrame;
    function gr(R) {
      if (R) {
        var H = R._owner, Z = ze(R.type, R._source, H ? H.type : null);
        wa.setExtraStackFrame(Z);
      } else
        wa.setExtraStackFrame(null);
    }
    var us;
    us = !1;
    function fs(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Oa() {
      {
        if (ls.current) {
          var R = G(ls.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Bd(R) {
      return "";
    }
    var _a = {};
    function Fd(R) {
      {
        var H = Oa();
        if (!H) {
          var Z = typeof R == "string" ? R : R.displayName || R.name;
          Z && (H = `

Check the top-level render call using <` + Z + ">.");
        }
        return H;
      }
    }
    function Pa(R, H) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var Z = Fd(H);
        if (_a[Z])
          return;
        _a[Z] = !0;
        var ae = "";
        R && R._owner && R._owner !== ls.current && (ae = " It was passed a child from " + G(R._owner.type) + "."), gr(R), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ae), gr(null);
      }
    }
    function ka(R, H) {
      {
        if (typeof R != "object")
          return;
        if (ce(R))
          for (var Z = 0; Z < R.length; Z++) {
            var ae = R[Z];
            fs(ae) && Pa(ae, H);
          }
        else if (fs(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var be = S(R);
          if (typeof be == "function" && be !== R.entries)
            for (var _e = be.call(R), he; !(he = _e.next()).done; )
              fs(he.value) && Pa(he.value, H);
        }
      }
    }
    function Vd(R) {
      {
        var H = R.type;
        if (H == null || typeof H == "string")
          return;
        var Z;
        if (typeof H == "function")
          Z = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === p))
          Z = H.propTypes;
        else
          return;
        if (Z) {
          var ae = G(H);
          tr(Z, R.props, "prop", ae, R);
        } else if (H.PropTypes !== void 0 && !us) {
          us = !0;
          var be = G(H);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ud(R) {
      {
        for (var H = Object.keys(R.props), Z = 0; Z < H.length; Z++) {
          var ae = H[Z];
          if (ae !== "children" && ae !== "key") {
            gr(R), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), gr(null);
            break;
          }
        }
        R.ref !== null && (gr(R), A("Invalid attribute `ref` supplied to `React.Fragment`."), gr(null));
      }
    }
    var Aa = {};
    function Na(R, H, Z, ae, be, _e) {
      {
        var he = m(R);
        if (!he) {
          var de = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = Bd();
          Ze ? de += Ze : de += Oa();
          var Le;
          R === null ? Le = "null" : ce(R) ? Le = "array" : R !== void 0 && R.$$typeof === t ? (Le = "<" + (G(R.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof R, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, de);
        }
        var Fe = Ld(R, H, Z, be, _e);
        if (Fe == null)
          return Fe;
        if (he) {
          var gt = H.children;
          if (gt !== void 0)
            if (ae)
              if (ce(gt)) {
                for (var yr = 0; yr < gt.length; yr++)
                  ka(gt[yr], R);
                Object.freeze && Object.freeze(gt);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ka(gt, R);
        }
        if (_t.call(H, "key")) {
          var rr = G(R), nt = Object.keys(H).filter(function(Yd) {
            return Yd !== "key";
          }), ds = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Aa[rr + ds]) {
            var qd = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ds, rr, qd, rr), Aa[rr + ds] = !0;
          }
        }
        return R === n ? Ud(Fe) : Vd(Fe), Fe;
      }
    }
    function zd(R, H, Z) {
      return Na(R, H, Z, !0);
    }
    function Gd(R, H, Z) {
      return Na(R, H, Z, !1);
    }
    var Wd = Gd, Hd = zd;
    Kr.Fragment = n, Kr.jsx = Wd, Kr.jsxs = Hd;
  })()), Kr;
}
var La;
function ji() {
  return La || (La = 1, process.env.NODE_ENV === "production" ? Bn.exports = xp() : Bn.exports = Tp()), Bn.exports;
}
var X = ji();
function Cp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Rp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var wp = /* @__PURE__ */ (function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rp(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Cp(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), qe = "-ms-", bo = "-moz-", ye = "-webkit-", Zl = "comm", Li = "rule", Bi = "decl", Op = "@import", eu = "@keyframes", _p = "@layer", Pp = Math.abs, jo = String.fromCharCode, kp = Object.assign;
function Ap(e, t) {
  return He(e, 0) ^ 45 ? (((t << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function tu(e) {
  return e.trim();
}
function Np(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, r) {
  return e.replace(t, r);
}
function Ys(e, t) {
  return e.indexOf(t);
}
function He(e, t) {
  return e.charCodeAt(t) | 0;
}
function yn(e, t, r) {
  return e.slice(t, r);
}
function Nt(e) {
  return e.length;
}
function Fi(e) {
  return e.length;
}
function Fn(e, t) {
  return t.push(e), e;
}
function Ip(e, t) {
  return e.map(t).join("");
}
var Lo = 1, $r = 1, ru = 0, ct = 0, Ve = 0, Vr = "";
function Bo(e, t, r, n, o, s, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Lo, column: $r, length: i, return: "" };
}
function Jr(e, t) {
  return kp(Bo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $p() {
  return Ve;
}
function Mp() {
  return Ve = ct > 0 ? He(Vr, --ct) : 0, $r--, Ve === 10 && ($r = 1, Lo--), Ve;
}
function pt() {
  return Ve = ct < ru ? He(Vr, ct++) : 0, $r++, Ve === 10 && ($r = 1, Lo++), Ve;
}
function $t() {
  return He(Vr, ct);
}
function oo() {
  return ct;
}
function On(e, t) {
  return yn(Vr, e, t);
}
function vn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nu(e) {
  return Lo = $r = 1, ru = Nt(Vr = e), ct = 0, [];
}
function ou(e) {
  return Vr = "", e;
}
function so(e) {
  return tu(On(ct - 1, Ks(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Dp(e) {
  for (; (Ve = $t()) && Ve < 33; )
    pt();
  return vn(e) > 2 || vn(Ve) > 3 ? "" : " ";
}
function jp(e, t) {
  for (; --t && pt() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return On(e, oo() + (t < 6 && $t() == 32 && pt() == 32));
}
function Ks(e) {
  for (; pt(); )
    switch (Ve) {
      // ] ) " '
      case e:
        return ct;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ks(Ve);
        break;
      // (
      case 40:
        e === 41 && Ks(e);
        break;
      // \
      case 92:
        pt();
        break;
    }
  return ct;
}
function Lp(e, t) {
  for (; pt() && e + Ve !== 57; )
    if (e + Ve === 84 && $t() === 47)
      break;
  return "/*" + On(t, ct - 1) + "*" + jo(e === 47 ? e : pt());
}
function Bp(e) {
  for (; !vn($t()); )
    pt();
  return On(e, ct);
}
function Ba(e) {
  return ou(io("", null, null, null, [""], e = nu(e), 0, [0], e));
}
function io(e, t, r, n, o, s, i, a, l) {
  for (var u = 0, f = 0, p = i, g = 0, y = 0, h = 0, d = 1, S = 1, T = 1, A = 0, C = "", x = o, v = s, I = n, D = C; S; )
    switch (h = A, A = pt()) {
      // (
      case 40:
        if (h != 108 && He(D, p - 1) == 58) {
          Ys(D += ve(so(A), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        D += so(A);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        D += Dp(h);
        break;
      // \
      case 92:
        D += jp(oo() - 1, 7);
        continue;
      // /
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            Fn(Fp(Lp(pt(), oo()), t, r), l);
            break;
          default:
            D += "/";
        }
        break;
      // {
      case 123 * d:
        a[u++] = Nt(D) * T;
      // } ; \0
      case 125 * d:
      case 59:
      case 0:
        switch (A) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + f:
            T == -1 && (D = ve(D, /\f/g, "")), y > 0 && Nt(D) - p && Fn(y > 32 ? Va(D + ";", n, r, p - 1) : Va(ve(D, " ", "") + ";", n, r, p - 2), l);
            break;
          // @ ;
          case 59:
            D += ";";
          // { rule/at-rule
          default:
            if (Fn(I = Fa(D, t, r, u, f, o, a, C, x = [], v = [], p), s), A === 123)
              if (f === 0)
                io(D, t, I, I, x, s, p, a, v);
              else
                switch (g === 99 && He(D, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    io(e, I, I, n && Fn(Fa(e, I, I, 0, 0, o, a, C, o, x = [], p), v), o, v, p, a, n ? x : v);
                    break;
                  default:
                    io(D, I, I, I, [""], v, 0, a, v);
                }
        }
        u = f = y = 0, d = T = 1, C = D = "", p = i;
        break;
      // :
      case 58:
        p = 1 + Nt(D), y = h;
      default:
        if (d < 1) {
          if (A == 123)
            --d;
          else if (A == 125 && d++ == 0 && Mp() == 125)
            continue;
        }
        switch (D += jo(A), A * d) {
          // &
          case 38:
            T = f > 0 ? 1 : (D += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (Nt(D) - 1) * T, T = 1;
            break;
          // @
          case 64:
            $t() === 45 && (D += so(pt())), g = $t(), f = p = Nt(C = D += Bp(oo())), A++;
            break;
          // -
          case 45:
            h === 45 && Nt(D) == 2 && (d = 0);
        }
    }
  return s;
}
function Fa(e, t, r, n, o, s, i, a, l, u, f) {
  for (var p = o - 1, g = o === 0 ? s : [""], y = Fi(g), h = 0, d = 0, S = 0; h < n; ++h)
    for (var T = 0, A = yn(e, p + 1, p = Pp(d = i[h])), C = e; T < y; ++T)
      (C = tu(d > 0 ? g[T] + " " + A : ve(A, /&\f/g, g[T]))) && (l[S++] = C);
  return Bo(e, t, r, o === 0 ? Li : a, l, u, f);
}
function Fp(e, t, r) {
  return Bo(e, t, r, Zl, jo($p()), yn(e, 2, -2), 0);
}
function Va(e, t, r, n) {
  return Bo(e, t, r, Bi, yn(e, 0, n), yn(e, n + 1, -1), n);
}
function fr(e, t) {
  for (var r = "", n = Fi(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ua(e, t, r, n) {
  switch (e.type) {
    case _p:
      if (e.children.length) break;
    case Op:
    case Bi:
      return e.return = e.return || e.value;
    case Zl:
      return "";
    case eu:
      return e.return = e.value + "{" + fr(e.children, n) + "}";
    case Li:
      e.value = e.props.join(",");
  }
  return Nt(r = fr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function za(e) {
  var t = Fi(e);
  return function(r, n, o, s) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](r, n, o, s) || "";
    return i;
  };
}
function Vp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Up = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function su(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Js = typeof document < "u", zp = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = $t(), o === 38 && s === 12 && (r[n] = 1), !vn(s); )
    pt();
  return On(t, ct);
}, Gp = function(t, r) {
  var n = -1, o = 44;
  do
    switch (vn(o)) {
      case 0:
        o === 38 && $t() === 12 && (r[n] = 1), t[n] += zp(ct - 1, r, n);
        break;
      case 2:
        t[n] += so(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = $t() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += jo(o);
    }
  while (o = pt());
  return t;
}, Wp = function(t, r) {
  return ou(Gp(nu(t), r));
}, Ga = /* @__PURE__ */ new WeakMap(), Hp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ga.get(n)) && !o) {
      Ga.set(t, !0);
      for (var s = [], i = Wp(r, s), a = n.props, l = 0, u = 0; l < i.length; l++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = s[l] ? i[l].replace(/&\f/g, a[f]) : a[f] + " " + i[l];
    }
  }
}, qp = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function iu(e, t) {
  switch (Ap(e, t)) {
    // color-adjust
    case 5103:
      return ye + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ye + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + e + bo + e + qe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ye + e + qe + e + e;
    // order
    case 6165:
      return ye + e + qe + "flex-" + e + e;
    // align-items
    case 5187:
      return ye + e + ve(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + qe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ye + e + qe + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ye + e + qe + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ye + e + qe + ve(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ye + e + qe + ve(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ye + "box-" + ve(e, "-grow", "") + ye + e + qe + ve(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ye + ve(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
    // cursor
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, ye + "$1$`$1");
    // justify-content
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + qe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Nt(e) - 1 - t > 6) switch (He(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (He(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ve(e, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + bo + (He(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Ys(e, "stretch") ? iu(ve(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (He(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (He(e, Nt(e) - 3 - (~Ys(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ve(e, ":", ":" + ye) + e;
        // (inline-)?fl(e)x
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ye + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + qe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (He(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ye + e + qe + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ye + e + qe + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ye + e + qe + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ye + e + qe + e + e;
  }
  return e;
}
var Yp = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Bi:
      t.return = iu(t.value, t.length);
      break;
    case eu:
      return fr([Jr(t, {
        value: ve(t.value, "@", "@" + ye)
      })], o);
    case Li:
      if (t.length) return Ip(t.props, function(s) {
        switch (Np(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return fr([Jr(t, {
              props: [ve(s, /:(read-\w+)/, ":" + bo + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return fr([Jr(t, {
              props: [ve(s, /:(plac\w+)/, ":" + ye + "input-$1")]
            }), Jr(t, {
              props: [ve(s, /:(plac\w+)/, ":" + bo + "$1")]
            }), Jr(t, {
              props: [ve(s, /:(plac\w+)/, qe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Wa = Js ? void 0 : Up(function() {
  return su(function() {
    return {};
  });
}), Kp = [Yp], au = function(t) {
  var r = t.key;
  if (Js && r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(x) {
      var v = x.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Kp, s = {}, i, a = [];
  Js && (i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(x) {
      for (var v = x.getAttribute("data-emotion").split(" "), I = 1; I < v.length; I++)
        s[v[I]] = !0;
      a.push(x);
    }
  ));
  var l, u = [Hp, qp];
  if (Wa) {
    var h = [Ua], d = za(u.concat(o, h)), S = function(v) {
      return fr(Ba(v), d);
    }, T = Wa(o)(r), A = function(v, I) {
      var D = I.name;
      return T[D] === void 0 && (T[D] = S(v ? v + "{" + I.styles + "}" : I.styles)), T[D];
    };
    l = function(v, I, D, z) {
      var W = I.name, m = A(v, I);
      if (C.compat === void 0)
        return z && (C.inserted[W] = !0), m;
      if (z)
        C.inserted[W] = m;
      else
        return m;
    };
  } else {
    var f, p = [Ua, Vp(function(x) {
      f.insert(x);
    })], g = za(u.concat(o, p)), y = function(v) {
      return fr(Ba(v), g);
    };
    l = function(v, I, D, z) {
      f = D, y(v ? v + "{" + I.styles + "}" : I.styles), z && (C.inserted[I.name] = !0);
    };
  }
  var C = {
    key: r,
    sheet: new wp({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return C.sheet.hydrate(a), C;
};
function De() {
  return De = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, De.apply(null, arguments);
}
var Vn = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function Jp() {
  if (Ha) return Ee;
  Ha = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(v) {
    if (typeof v == "object" && v !== null) {
      var I = v.$$typeof;
      switch (I) {
        case t:
          switch (v = v.type, v) {
            case l:
            case u:
            case n:
            case s:
            case o:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case f:
                case h:
                case y:
                case i:
                  return v;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function x(v) {
    return C(v) === u;
  }
  return Ee.AsyncMode = l, Ee.ConcurrentMode = u, Ee.ContextConsumer = a, Ee.ContextProvider = i, Ee.Element = t, Ee.ForwardRef = f, Ee.Fragment = n, Ee.Lazy = h, Ee.Memo = y, Ee.Portal = r, Ee.Profiler = s, Ee.StrictMode = o, Ee.Suspense = p, Ee.isAsyncMode = function(v) {
    return x(v) || C(v) === l;
  }, Ee.isConcurrentMode = x, Ee.isContextConsumer = function(v) {
    return C(v) === a;
  }, Ee.isContextProvider = function(v) {
    return C(v) === i;
  }, Ee.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Ee.isForwardRef = function(v) {
    return C(v) === f;
  }, Ee.isFragment = function(v) {
    return C(v) === n;
  }, Ee.isLazy = function(v) {
    return C(v) === h;
  }, Ee.isMemo = function(v) {
    return C(v) === y;
  }, Ee.isPortal = function(v) {
    return C(v) === r;
  }, Ee.isProfiler = function(v) {
    return C(v) === s;
  }, Ee.isStrictMode = function(v) {
    return C(v) === o;
  }, Ee.isSuspense = function(v) {
    return C(v) === p;
  }, Ee.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === s || v === o || v === p || v === g || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === y || v.$$typeof === i || v.$$typeof === a || v.$$typeof === f || v.$$typeof === S || v.$$typeof === T || v.$$typeof === A || v.$$typeof === d);
  }, Ee.typeOf = C, Ee;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function Xp() {
  return qa || (qa = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === u || k === s || k === o || k === p || k === g || typeof k == "object" && k !== null && (k.$$typeof === h || k.$$typeof === y || k.$$typeof === i || k.$$typeof === a || k.$$typeof === f || k.$$typeof === S || k.$$typeof === T || k.$$typeof === A || k.$$typeof === d);
    }
    function x(k) {
      if (typeof k == "object" && k !== null) {
        var fe = k.$$typeof;
        switch (fe) {
          case t:
            var Re = k.type;
            switch (Re) {
              case l:
              case u:
              case n:
              case s:
              case o:
              case p:
                return Re;
              default:
                var ze = Re && Re.$$typeof;
                switch (ze) {
                  case a:
                  case f:
                  case h:
                  case y:
                  case i:
                    return ze;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var v = l, I = u, D = a, z = i, W = t, m = f, $ = n, U = h, G = y, M = r, w = s, b = o, P = p, N = !1;
    function L(k) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(k) || x(k) === l;
    }
    function O(k) {
      return x(k) === u;
    }
    function B(k) {
      return x(k) === a;
    }
    function K(k) {
      return x(k) === i;
    }
    function J(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function q(k) {
      return x(k) === f;
    }
    function Q(k) {
      return x(k) === n;
    }
    function re(k) {
      return x(k) === h;
    }
    function ee(k) {
      return x(k) === y;
    }
    function ne(k) {
      return x(k) === r;
    }
    function oe(k) {
      return x(k) === s;
    }
    function Y(k) {
      return x(k) === o;
    }
    function te(k) {
      return x(k) === p;
    }
    Se.AsyncMode = v, Se.ConcurrentMode = I, Se.ContextConsumer = D, Se.ContextProvider = z, Se.Element = W, Se.ForwardRef = m, Se.Fragment = $, Se.Lazy = U, Se.Memo = G, Se.Portal = M, Se.Profiler = w, Se.StrictMode = b, Se.Suspense = P, Se.isAsyncMode = L, Se.isConcurrentMode = O, Se.isContextConsumer = B, Se.isContextProvider = K, Se.isElement = J, Se.isForwardRef = q, Se.isFragment = Q, Se.isLazy = re, Se.isMemo = ee, Se.isPortal = ne, Se.isProfiler = oe, Se.isStrictMode = Y, Se.isSuspense = te, Se.isValidElementType = C, Se.typeOf = x;
  })()), Se;
}
var Ya;
function Qp() {
  return Ya || (Ya = 1, process.env.NODE_ENV === "production" ? Vn.exports = Jp() : Vn.exports = Xp()), Vn.exports;
}
var hs, Ka;
function Zp() {
  if (Ka) return hs;
  Ka = 1;
  var e = Qp(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = o;
  function i(h) {
    return e.isMemo(h) ? o : s[h.$$typeof] || t;
  }
  var a = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, g = Object.prototype;
  function y(h, d, S) {
    if (typeof d != "string") {
      if (g) {
        var T = p(d);
        T && T !== g && y(h, T, S);
      }
      var A = l(d);
      u && (A = A.concat(u(d)));
      for (var C = i(h), x = i(d), v = 0; v < A.length; ++v) {
        var I = A[v];
        if (!r[I] && !(S && S[I]) && !(x && x[I]) && !(C && C[I])) {
          var D = f(d, I);
          try {
            a(h, I, D);
          } catch {
          }
        }
      }
    }
    return h;
  }
  return hs = y, hs;
}
var eh = Zp();
const th = /* @__PURE__ */ Di(eh);
var Xs = typeof document < "u";
function rh(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var cu = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Xs === !1 && t.compat !== void 0) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, nh = function(t, r, n) {
  cu(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = "", i = r;
    do {
      var a = t.insert(r === i ? "." + o : "", i, t.sheet, !0);
      !Xs && a !== void 0 && (s += a), i = i.next;
    } while (i !== void 0);
    if (!Xs && s.length !== 0)
      return s;
  }
};
function oh(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var sh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ih = /[A-Z]|^ms/g, ah = /_EMO_([^_]+?)_([^]*?)_EMO_/g, lu = function(t) {
  return t.charCodeAt(1) === 45;
}, Ja = function(t) {
  return t != null && typeof t != "boolean";
}, ms = /* @__PURE__ */ su(function(e) {
  return lu(e) ? e : e.replace(ih, "-$&").toLowerCase();
}), Xa = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ah, function(n, o, s) {
          return It = {
            name: o,
            styles: s,
            next: It
          }, o;
        });
  }
  return sh[t] !== 1 && !lu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function bn(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return It = {
          name: o.name,
          styles: o.styles,
          next: It
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            It = {
              name: i.name,
              styles: i.styles,
              next: It
            }, i = i.next;
        var a = s.styles + ";";
        return a;
      }
      return ch(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = It, u = r(e);
        return It = l, bn(e, t, u);
      }
      break;
    }
  }
  var f = r;
  return f;
}
function ch(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += bn(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        Ja(a) && (n += ms(s) + ":" + Xa(s, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && t == null)
        for (var l = 0; l < i.length; l++)
          Ja(i[l]) && (n += ms(s) + ":" + Xa(s, i[l]) + ";");
      else {
        var u = bn(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            n += ms(s) + ":" + u + ";";
            break;
          }
          default:
            n += s + "{" + u + "}";
        }
      }
    }
  return n;
}
var Qa = /label:\s*([^\s;{]+)\s*(;|$)/g, It;
function uu(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  It = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += bn(r, t, s);
  else {
    var i = s;
    o += i[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += bn(r, t, e[a]), n) {
      var l = s;
      o += l[a];
    }
  Qa.lastIndex = 0;
  for (var u = "", f; (f = Qa.exec(o)) !== null; )
    u += "-" + f[1];
  var p = oh(o) + u;
  return {
    name: p,
    styles: o,
    next: It
  };
}
var lh = typeof document < "u", Za = function(t) {
  return t();
}, uh = _.useInsertionEffect ? _.useInsertionEffect : !1, fh = lh && uh || Za, fu = typeof document < "u", Eo = /* @__PURE__ */ _.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ au({
    key: "css"
  }) : null
);
Eo.Provider;
var du = function(t) {
  return /* @__PURE__ */ Ll(function(r, n) {
    var o = Cn(Eo);
    return t(r, o, n);
  });
};
fu || (du = function(t) {
  return function(r) {
    var n = Cn(Eo);
    return n === null ? (n = au({
      key: "css"
    }), /* @__PURE__ */ _.createElement(Eo.Provider, {
      value: n
    }, t(r, n))) : t(r, n);
  };
});
var dh = /* @__PURE__ */ _.createContext({}), Fo = {}.hasOwnProperty, Qs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", pu = function(t, r) {
  var n = {};
  for (var o in r)
    Fo.call(r, o) && (n[o] = r[o]);
  return n[Qs] = t, n;
}, ph = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  cu(r, n, o);
  var s = fh(function() {
    return nh(r, n, o);
  });
  if (!fu && s !== void 0) {
    for (var i, a = n.name, l = n.next; l !== void 0; )
      a += " " + l.name, l = l.next;
    return /* @__PURE__ */ _.createElement("style", (i = {}, i["data-emotion"] = r.key + " " + a, i.dangerouslySetInnerHTML = {
      __html: s
    }, i.nonce = r.sheet.nonce, i));
  }
  return null;
}, hh = /* @__PURE__ */ du(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Qs], s = [n], i = "";
  typeof e.className == "string" ? i = rh(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = uu(s, void 0, _.useContext(dh));
  i += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    Fo.call(e, u) && u !== "css" && u !== Qs && (l[u] = e[u]);
  return l.className = i, r && (l.ref = r), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(ph, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ _.createElement(o, l));
}), hu = hh, Mr = X.Fragment, E = function(t, r, n) {
  return Fo.call(r, "css") ? X.jsx(hu, pu(t, r), n) : X.jsx(t, r, n);
}, se = function(t, r, n) {
  return Fo.call(r, "css") ? X.jsxs(hu, pu(t, r), n) : X.jsxs(t, r, n);
};
function mr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var Un = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function mh() {
  if (ec) return we;
  ec = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function h(d) {
    if (typeof d == "object" && d !== null) {
      var S = d.$$typeof;
      switch (S) {
        case e:
          switch (d = d.type, d) {
            case r:
            case o:
            case n:
            case l:
            case u:
            case g:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case i:
                case a:
                case p:
                case f:
                  return d;
                case s:
                  return d;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return we.ContextConsumer = s, we.ContextProvider = i, we.Element = e, we.ForwardRef = a, we.Fragment = r, we.Lazy = p, we.Memo = f, we.Portal = t, we.Profiler = o, we.StrictMode = n, we.Suspense = l, we.SuspenseList = u, we.isContextConsumer = function(d) {
    return h(d) === s;
  }, we.isContextProvider = function(d) {
    return h(d) === i;
  }, we.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, we.isForwardRef = function(d) {
    return h(d) === a;
  }, we.isFragment = function(d) {
    return h(d) === r;
  }, we.isLazy = function(d) {
    return h(d) === p;
  }, we.isMemo = function(d) {
    return h(d) === f;
  }, we.isPortal = function(d) {
    return h(d) === t;
  }, we.isProfiler = function(d) {
    return h(d) === o;
  }, we.isStrictMode = function(d) {
    return h(d) === n;
  }, we.isSuspense = function(d) {
    return h(d) === l;
  }, we.isSuspenseList = function(d) {
    return h(d) === u;
  }, we.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === o || d === n || d === l || d === u || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === f || d.$$typeof === i || d.$$typeof === s || d.$$typeof === a || d.$$typeof === y || d.getModuleId !== void 0);
  }, we.typeOf = h, we;
}
var Oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function gh() {
  return tc || (tc = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (typeof d == "object" && d !== null) {
        var S = d.$$typeof;
        switch (S) {
          case t:
            switch (d = d.type, d) {
              case n:
              case s:
              case o:
              case u:
              case f:
              case y:
                return d;
              default:
                switch (d = d && d.$$typeof, d) {
                  case a:
                  case l:
                  case g:
                  case p:
                    return d;
                  case i:
                    return d;
                  default:
                    return S;
                }
            }
          case r:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    Oe.ContextConsumer = i, Oe.ContextProvider = a, Oe.Element = t, Oe.ForwardRef = l, Oe.Fragment = n, Oe.Lazy = g, Oe.Memo = p, Oe.Portal = r, Oe.Profiler = s, Oe.StrictMode = o, Oe.Suspense = u, Oe.SuspenseList = f, Oe.isContextConsumer = function(d) {
      return e(d) === i;
    }, Oe.isContextProvider = function(d) {
      return e(d) === a;
    }, Oe.isElement = function(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }, Oe.isForwardRef = function(d) {
      return e(d) === l;
    }, Oe.isFragment = function(d) {
      return e(d) === n;
    }, Oe.isLazy = function(d) {
      return e(d) === g;
    }, Oe.isMemo = function(d) {
      return e(d) === p;
    }, Oe.isPortal = function(d) {
      return e(d) === r;
    }, Oe.isProfiler = function(d) {
      return e(d) === s;
    }, Oe.isStrictMode = function(d) {
      return e(d) === o;
    }, Oe.isSuspense = function(d) {
      return e(d) === u;
    }, Oe.isSuspenseList = function(d) {
      return e(d) === f;
    }, Oe.isValidElementType = function(d) {
      return typeof d == "string" || typeof d == "function" || d === n || d === s || d === o || d === u || d === f || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === p || d.$$typeof === a || d.$$typeof === i || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
    }, Oe.typeOf = e;
  })()), Oe;
}
var rc;
function yh() {
  return rc || (rc = 1, process.env.NODE_ENV === "production" ? Un.exports = /* @__PURE__ */ mh() : Un.exports = /* @__PURE__ */ gh()), Un.exports;
}
var Dr = /* @__PURE__ */ yh();
function Ft(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function mu(e) {
  if (/* @__PURE__ */ _.isValidElement(e) || Dr.isValidElementType(e) || !Ft(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = mu(e[r]);
  }), t;
}
function et(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ft(e) && Ft(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ _.isValidElement(t[o]) || Dr.isValidElementType(t[o]) ? n[o] = t[o] : Ft(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ft(e[o]) ? n[o] = et(e[o], t[o], r) : r.clone ? n[o] = Ft(t[o]) ? mu(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
var zn = { exports: {} }, Gn = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function vh() {
  if (nc) return xe;
  nc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(v) {
    if (typeof v == "object" && v !== null) {
      var I = v.$$typeof;
      switch (I) {
        case t:
          switch (v = v.type, v) {
            case l:
            case u:
            case n:
            case s:
            case o:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case f:
                case h:
                case y:
                case i:
                  return v;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function x(v) {
    return C(v) === u;
  }
  return xe.AsyncMode = l, xe.ConcurrentMode = u, xe.ContextConsumer = a, xe.ContextProvider = i, xe.Element = t, xe.ForwardRef = f, xe.Fragment = n, xe.Lazy = h, xe.Memo = y, xe.Portal = r, xe.Profiler = s, xe.StrictMode = o, xe.Suspense = p, xe.isAsyncMode = function(v) {
    return x(v) || C(v) === l;
  }, xe.isConcurrentMode = x, xe.isContextConsumer = function(v) {
    return C(v) === a;
  }, xe.isContextProvider = function(v) {
    return C(v) === i;
  }, xe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, xe.isForwardRef = function(v) {
    return C(v) === f;
  }, xe.isFragment = function(v) {
    return C(v) === n;
  }, xe.isLazy = function(v) {
    return C(v) === h;
  }, xe.isMemo = function(v) {
    return C(v) === y;
  }, xe.isPortal = function(v) {
    return C(v) === r;
  }, xe.isProfiler = function(v) {
    return C(v) === s;
  }, xe.isStrictMode = function(v) {
    return C(v) === o;
  }, xe.isSuspense = function(v) {
    return C(v) === p;
  }, xe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === s || v === o || v === p || v === g || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === y || v.$$typeof === i || v.$$typeof === a || v.$$typeof === f || v.$$typeof === S || v.$$typeof === T || v.$$typeof === A || v.$$typeof === d);
  }, xe.typeOf = C, xe;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oc;
function bh() {
  return oc || (oc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === u || k === s || k === o || k === p || k === g || typeof k == "object" && k !== null && (k.$$typeof === h || k.$$typeof === y || k.$$typeof === i || k.$$typeof === a || k.$$typeof === f || k.$$typeof === S || k.$$typeof === T || k.$$typeof === A || k.$$typeof === d);
    }
    function x(k) {
      if (typeof k == "object" && k !== null) {
        var fe = k.$$typeof;
        switch (fe) {
          case t:
            var Re = k.type;
            switch (Re) {
              case l:
              case u:
              case n:
              case s:
              case o:
              case p:
                return Re;
              default:
                var ze = Re && Re.$$typeof;
                switch (ze) {
                  case a:
                  case f:
                  case h:
                  case y:
                  case i:
                    return ze;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var v = l, I = u, D = a, z = i, W = t, m = f, $ = n, U = h, G = y, M = r, w = s, b = o, P = p, N = !1;
    function L(k) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(k) || x(k) === l;
    }
    function O(k) {
      return x(k) === u;
    }
    function B(k) {
      return x(k) === a;
    }
    function K(k) {
      return x(k) === i;
    }
    function J(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function q(k) {
      return x(k) === f;
    }
    function Q(k) {
      return x(k) === n;
    }
    function re(k) {
      return x(k) === h;
    }
    function ee(k) {
      return x(k) === y;
    }
    function ne(k) {
      return x(k) === r;
    }
    function oe(k) {
      return x(k) === s;
    }
    function Y(k) {
      return x(k) === o;
    }
    function te(k) {
      return x(k) === p;
    }
    Te.AsyncMode = v, Te.ConcurrentMode = I, Te.ContextConsumer = D, Te.ContextProvider = z, Te.Element = W, Te.ForwardRef = m, Te.Fragment = $, Te.Lazy = U, Te.Memo = G, Te.Portal = M, Te.Profiler = w, Te.StrictMode = b, Te.Suspense = P, Te.isAsyncMode = L, Te.isConcurrentMode = O, Te.isContextConsumer = B, Te.isContextProvider = K, Te.isElement = J, Te.isForwardRef = q, Te.isFragment = Q, Te.isLazy = re, Te.isMemo = ee, Te.isPortal = ne, Te.isProfiler = oe, Te.isStrictMode = Y, Te.isSuspense = te, Te.isValidElementType = C, Te.typeOf = x;
  })()), Te;
}
var sc;
function gu() {
  return sc || (sc = 1, process.env.NODE_ENV === "production" ? Gn.exports = vh() : Gn.exports = bh()), Gn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gs, ic;
function Eh() {
  if (ic) return gs;
  ic = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gs = o() ? Object.assign : function(s, i) {
    for (var a, l = n(s), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var p in a)
        t.call(a, p) && (l[p] = a[p]);
      if (e) {
        u = e(a);
        for (var g = 0; g < u.length; g++)
          r.call(a, u[g]) && (l[u[g]] = a[u[g]]);
      }
    }
    return l;
  }, gs;
}
var ys, ac;
function Vi() {
  if (ac) return ys;
  ac = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ys = e, ys;
}
var vs, cc;
function yu() {
  return cc || (cc = 1, vs = Function.call.bind(Object.prototype.hasOwnProperty)), vs;
}
var bs, lc;
function Sh() {
  if (lc) return bs;
  lc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Vi(), r = {}, n = /* @__PURE__ */ yu();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (n(s, f)) {
          var p;
          try {
            if (typeof s[f] != "function") {
              var g = Error(
                (l || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = s[f](i, f, l, a, null, t);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + a + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, bs = o, bs;
}
var Es, uc;
function xh() {
  if (uc) return Es;
  uc = 1;
  var e = gu(), t = Eh(), r = /* @__PURE__ */ Vi(), n = /* @__PURE__ */ yu(), o = /* @__PURE__ */ Sh(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Es = function(a, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(O) {
      var B = O && (u && O[u] || O[f]);
      if (typeof B == "function")
        return B;
    }
    var g = "<<anonymous>>", y = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: A(),
      arrayOf: C,
      element: x(),
      elementType: v(),
      instanceOf: I,
      node: m(),
      objectOf: z,
      oneOf: D,
      oneOfType: W,
      shape: U,
      exact: G
    };
    function h(O, B) {
      return O === B ? O !== 0 || 1 / O === 1 / B : O !== O && B !== B;
    }
    function d(O, B) {
      this.message = O, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function S(O) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, K = 0;
      function J(Q, re, ee, ne, oe, Y, te) {
        if (ne = ne || g, Y = Y || ee, te !== r) {
          if (l) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = ne + ":" + ee;
            !B[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + ne + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[fe] = !0, K++);
          }
        }
        return re[ee] == null ? Q ? re[ee] === null ? new d("The " + oe + " `" + Y + "` is marked as required " + ("in `" + ne + "`, but its value is `null`.")) : new d("The " + oe + " `" + Y + "` is marked as required in " + ("`" + ne + "`, but its value is `undefined`.")) : null : O(re, ee, ne, oe, Y);
      }
      var q = J.bind(null, !1);
      return q.isRequired = J.bind(null, !0), q;
    }
    function T(O) {
      function B(K, J, q, Q, re, ee) {
        var ne = K[J], oe = b(ne);
        if (oe !== O) {
          var Y = P(ne);
          return new d(
            "Invalid " + Q + " `" + re + "` of type " + ("`" + Y + "` supplied to `" + q + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return S(B);
    }
    function A() {
      return S(i);
    }
    function C(O) {
      function B(K, J, q, Q, re) {
        if (typeof O != "function")
          return new d("Property `" + re + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var ee = K[J];
        if (!Array.isArray(ee)) {
          var ne = b(ee);
          return new d("Invalid " + Q + " `" + re + "` of type " + ("`" + ne + "` supplied to `" + q + "`, expected an array."));
        }
        for (var oe = 0; oe < ee.length; oe++) {
          var Y = O(ee, oe, q, Q, re + "[" + oe + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return S(B);
    }
    function x() {
      function O(B, K, J, q, Q) {
        var re = B[K];
        if (!a(re)) {
          var ee = b(re);
          return new d("Invalid " + q + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(O);
    }
    function v() {
      function O(B, K, J, q, Q) {
        var re = B[K];
        if (!e.isValidElementType(re)) {
          var ee = b(re);
          return new d("Invalid " + q + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(O);
    }
    function I(O) {
      function B(K, J, q, Q, re) {
        if (!(K[J] instanceof O)) {
          var ee = O.name || g, ne = L(K[J]);
          return new d("Invalid " + Q + " `" + re + "` of type " + ("`" + ne + "` supplied to `" + q + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return S(B);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function B(K, J, q, Q, re) {
        for (var ee = K[J], ne = 0; ne < O.length; ne++)
          if (h(ee, O[ne]))
            return null;
        var oe = JSON.stringify(O, function(te, k) {
          var fe = P(k);
          return fe === "symbol" ? String(k) : k;
        });
        return new d("Invalid " + Q + " `" + re + "` of value `" + String(ee) + "` " + ("supplied to `" + q + "`, expected one of " + oe + "."));
      }
      return S(B);
    }
    function z(O) {
      function B(K, J, q, Q, re) {
        if (typeof O != "function")
          return new d("Property `" + re + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var ee = K[J], ne = b(ee);
        if (ne !== "object")
          return new d("Invalid " + Q + " `" + re + "` of type " + ("`" + ne + "` supplied to `" + q + "`, expected an object."));
        for (var oe in ee)
          if (n(ee, oe)) {
            var Y = O(ee, oe, q, Q, re + "." + oe, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return S(B);
    }
    function W(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var B = 0; B < O.length; B++) {
        var K = O[B];
        if (typeof K != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(K) + " at index " + B + "."
          ), i;
      }
      function J(q, Q, re, ee, ne) {
        for (var oe = [], Y = 0; Y < O.length; Y++) {
          var te = O[Y], k = te(q, Q, re, ee, ne, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && oe.push(k.data.expectedType);
        }
        var fe = oe.length > 0 ? ", expected one of type [" + oe.join(", ") + "]" : "";
        return new d("Invalid " + ee + " `" + ne + "` supplied to " + ("`" + re + "`" + fe + "."));
      }
      return S(J);
    }
    function m() {
      function O(B, K, J, q, Q) {
        return M(B[K]) ? null : new d("Invalid " + q + " `" + Q + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return S(O);
    }
    function $(O, B, K, J, q) {
      return new d(
        (O || "React class") + ": " + B + " type `" + K + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function U(O) {
      function B(K, J, q, Q, re) {
        var ee = K[J], ne = b(ee);
        if (ne !== "object")
          return new d("Invalid " + Q + " `" + re + "` of type `" + ne + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var oe in O) {
          var Y = O[oe];
          if (typeof Y != "function")
            return $(q, Q, re, oe, P(Y));
          var te = Y(ee, oe, q, Q, re + "." + oe, r);
          if (te)
            return te;
        }
        return null;
      }
      return S(B);
    }
    function G(O) {
      function B(K, J, q, Q, re) {
        var ee = K[J], ne = b(ee);
        if (ne !== "object")
          return new d("Invalid " + Q + " `" + re + "` of type `" + ne + "` " + ("supplied to `" + q + "`, expected `object`."));
        var oe = t({}, K[J], O);
        for (var Y in oe) {
          var te = O[Y];
          if (n(O, Y) && typeof te != "function")
            return $(q, Q, re, Y, P(te));
          if (!te)
            return new d(
              "Invalid " + Q + " `" + re + "` key `" + Y + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(K[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var k = te(ee, Y, q, Q, re + "." + Y, r);
          if (k)
            return k;
        }
        return null;
      }
      return S(B);
    }
    function M(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(M);
          if (O === null || a(O))
            return !0;
          var B = p(O);
          if (B) {
            var K = B.call(O), J;
            if (B !== O.entries) {
              for (; !(J = K.next()).done; )
                if (!M(J.value))
                  return !1;
            } else
              for (; !(J = K.next()).done; ) {
                var q = J.value;
                if (q && !M(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function w(O, B) {
      return O === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function b(O) {
      var B = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : w(B, O) ? "symbol" : B;
    }
    function P(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var B = b(O);
      if (B === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function N(O) {
      var B = P(O);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function L(O) {
      return !O.constructor || !O.constructor.name ? g : O.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, Es;
}
var Ss, fc;
function Th() {
  if (fc) return Ss;
  fc = 1;
  var e = /* @__PURE__ */ Vi();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ss = function() {
    function n(i, a, l, u, f, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ss;
}
var dc;
function Ch() {
  if (dc) return zn.exports;
  if (dc = 1, process.env.NODE_ENV !== "production") {
    var e = gu(), t = !0;
    zn.exports = /* @__PURE__ */ xh()(e.isElement, t);
  } else
    zn.exports = /* @__PURE__ */ Th()();
  return zn.exports;
}
var Rh = /* @__PURE__ */ Ch();
const c = /* @__PURE__ */ Di(Rh);
function wh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function vu(e, t, r, n, o) {
  const s = e[t], i = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const l = s.type;
  return typeof l == "function" && !wh(l) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ur = mr(c.element, vu);
Ur.isRequired = mr(c.element.isRequired, vu);
function Oh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function _h(e, t, r, n, o) {
  const s = e[t], i = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof s == "function" && !Oh(s) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const bu = mr(c.elementType, _h), Ph = "exact-prop: ​";
function Ui(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ph]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Jt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Eu(e, t = "") {
  return e.displayName || e.name || t;
}
function pc(e, t, r) {
  const n = Eu(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function kr(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Eu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Dr.ForwardRef:
          return pc(e, e.render, "ForwardRef");
        case Dr.Memo:
          return pc(e, e.type, "memo");
        default:
          return;
      }
  }
}
function jr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], i = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Su = c.oneOfType([c.func, c.object]);
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Jt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function hc(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function xu(e, t = 166) {
  let r;
  function n(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Dt(e) {
  return e && e.ownerDocument || document;
}
function Ut(e) {
  return Dt(e).defaultView || window;
}
function mc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const En = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
let gc = 0;
function kh(e) {
  const [t, r] = _.useState(e), n = e || t;
  return _.useEffect(() => {
    t == null && (gc += 1, r(`mui-${gc}`));
  }, [t]), n;
}
const Ah = {
  ..._
}, yc = Ah.useId;
function Tu(e) {
  if (yc !== void 0) {
    const t = yc();
    return e ?? t;
  }
  return kh(e);
}
function Ar(e) {
  const t = _.useRef(e);
  return En(() => {
    t.current = e;
  }), _.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function St(...e) {
  const t = _.useRef(void 0), r = _.useCallback((n) => {
    const o = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const i = s, a = i(n);
        return typeof a == "function" ? a : () => {
          i(null);
        };
      }
      return s.current = n, () => {
        s.current = null;
      };
    });
    return () => {
      o.forEach((s) => s?.());
    };
  }, e);
  return _.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const vc = {};
function Cu(e, t) {
  const r = _.useRef(vc);
  return r.current === vc && (r.current = e(t)), r;
}
const Nh = [];
function Ih(e) {
  _.useEffect(e, Nh);
}
class zi {
  constructor() {
    qr(this, "currentId", null);
    qr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    qr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new zi();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Ru() {
  const e = Cu(zi.create).current;
  return Ih(e.disposeEffect), e;
}
function bc(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function wu(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function $h(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ou(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = $h(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function _u(e, t, ...r) {
  return e[t] === void 0 ? null : Ou(e, t, ...r);
}
function Zs() {
  return null;
}
_u.isRequired = Ou;
Zs.isRequired = Zs;
const Pu = process.env.NODE_ENV === "production" ? Zs : _u;
function So(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const s = e[o], i = t[o];
        if (!i)
          r[o] = s || {};
        else if (!s)
          r[o] = i;
        else {
          r[o] = {
            ...i
          };
          for (const a in s)
            if (Object.prototype.hasOwnProperty.call(s, a)) {
              const l = a;
              r[o][l] = So(s[l], i[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function ut(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const s = e[o];
    let i = "", a = !0;
    for (let l = 0; l < s.length; l += 1) {
      const u = s[l];
      u && (i += (a === !0 ? "" : " ") + t(u), a = !1, r && r[u] && (i += " " + r[u]));
    }
    n[o] = i;
  }
  return n;
}
const Ec = (e) => e, Mh = () => {
  let e = Ec;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ec;
    }
  };
}, Dh = Mh(), jh = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Xe(e, t, r = "Mui") {
  const n = jh[t];
  return n ? `${r}-${n}` : `${Dh.generate(e)}-${t}`;
}
function Ge(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Xe(e, o, r);
  }), n;
}
function Lh(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Bh(e) {
  return typeof e == "string";
}
function ku(e, t, r) {
  return e === void 0 || Bh(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Au(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Au(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ge() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Au(e)) && (n && (n += " "), n += t);
  return n;
}
function Nu(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Sc(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Iu(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const y = ge(r?.className, s, o?.className, n?.className), h = {
      ...r?.style,
      ...o?.style,
      ...n?.style
    }, d = {
      ...r,
      ...o,
      ...n
    };
    return y.length > 0 && (d.className = y), Object.keys(h).length > 0 && (d.style = h), {
      props: d,
      internalRef: void 0
    };
  }
  const i = Nu({
    ...o,
    ...n
  }), a = Sc(n), l = Sc(o), u = t(i), f = ge(u?.className, r?.className, s, o?.className, n?.className), p = {
    ...u?.style,
    ...r?.style,
    ...o?.style,
    ...n?.style
  }, g = {
    ...u,
    ...r,
    ...l,
    ...a
  };
  return f.length > 0 && (g.className = f), Object.keys(p).length > 0 && (g.style = p), {
    props: g,
    internalRef: u.ref
  };
}
function $u(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Fh(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, i = o ? {} : $u(r, n), {
    props: a,
    internalRef: l
  } = Iu({
    ...s,
    externalSlotProps: i
  }), u = St(l, i?.ref, e.additionalProps?.ref);
  return ku(t, {
    ...a,
    ref: u
  }, n);
}
function _n(e) {
  return parseInt(_.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function pn(e, t) {
  return t ? et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const er = process.env.NODE_ENV !== "production" ? c.oneOfType([c.number, c.string, c.object, c.array]) : {};
function Vh(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(n.match(s)?.[1] || 0) - +(o.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const s = t[o];
    return delete n[o], n[o] = s, n;
  }, {
    ...t
  }) : t;
}
function Uh(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function zh(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Jt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function Gh(e) {
  const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
  function r(s, i) {
    s.up = (...a) => t(e.breakpoints.up(...a), i), s.down = (...a) => t(e.breakpoints.down(...a), i), s.between = (...a) => t(e.breakpoints.between(...a), i), s.only = (...a) => t(e.breakpoints.only(...a), i), s.not = (...a) => {
      const l = t(e.breakpoints.not(...a), i);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (s) => (r(n, s), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Vo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, xc = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Vo[e]}px)`
}, Wh = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Vo[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function zt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || xc;
    return t.reduce((i, a, l) => (i[s.up(s.keys[l])] = r(t[l]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || xc;
    return Object.keys(t).reduce((i, a) => {
      if (Uh(s.keys, a)) {
        const l = zh(n.containerQueries ? n : Wh, a);
        l && (i[l] = r(t[a], a));
      } else if (Object.keys(s.values || Vo).includes(a)) {
        const l = s.up(a);
        i[l] = r(t[a], a);
      } else {
        const l = a;
        i[l] = t[l];
      }
      return i;
    }, {});
  }
  return r(t);
}
function Hh(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function qh(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Uo(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function xo(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Uo(e, r) || n, t && (o = t(o, n, e)), o;
}
function Be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], l = i.theme, u = Uo(l, n) || {};
    return zt(i, a, (p) => {
      let g = xo(u, o, p);
      return p === g && typeof p == "string" && (g = xo(u, o, `${t}${p === "default" ? "" : me(p)}`, p)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: er
  } : {}, s.filterProps = [t], s;
}
function Yh(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Kh = {
  m: "margin",
  p: "padding"
}, Jh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Tc = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xh = Yh((e) => {
  if (e.length > 2)
    if (Tc[e])
      e = Tc[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Kh[t], o = Jh[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), zo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Go = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qh = [...zo, ...Go];
function Pn(e, t, r, n) {
  const o = Uo(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof o == "string" ? `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const i = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > o.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${i} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[i];
    return s >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Gi(e) {
  return Pn(e, "spacing", 8, "spacing");
}
function kn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Zh(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = kn(t, r), n), {});
}
function em(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Xh(r), s = Zh(o, n), i = e[r];
  return zt(e, i, s);
}
function Mu(e, t) {
  const r = Gi(e.theme);
  return Object.keys(e).map((n) => em(e, t, n, r)).reduce(pn, {});
}
function $e(e) {
  return Mu(e, zo);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? zo.reduce((e, t) => (e[t] = er, e), {}) : {};
$e.filterProps = zo;
function Me(e) {
  return Mu(e, Go);
}
Me.propTypes = process.env.NODE_ENV !== "production" ? Go.reduce((e, t) => (e[t] = er, e), {}) : {};
Me.filterProps = Go;
process.env.NODE_ENV !== "production" && Qh.reduce((e, t) => (e[t] = er, e), {});
function Wo(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? pn(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function vt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function xt(e, t) {
  return Be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const tm = xt("border", vt), rm = xt("borderTop", vt), nm = xt("borderRight", vt), om = xt("borderBottom", vt), sm = xt("borderLeft", vt), im = xt("borderColor"), am = xt("borderTopColor"), cm = xt("borderRightColor"), lm = xt("borderBottomColor"), um = xt("borderLeftColor"), fm = xt("outline", vt), dm = xt("outlineColor"), Ho = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Pn(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: kn(t, n)
    });
    return zt(e, e.borderRadius, r);
  }
  return null;
};
Ho.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: er
} : {};
Ho.filterProps = ["borderRadius"];
Wo(tm, rm, nm, om, sm, im, am, cm, lm, um, Ho, fm, dm);
const qo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Pn(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: kn(t, n)
    });
    return zt(e, e.gap, r);
  }
  return null;
};
qo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: er
} : {};
qo.filterProps = ["gap"];
const Yo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Pn(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: kn(t, n)
    });
    return zt(e, e.columnGap, r);
  }
  return null;
};
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: er
} : {};
Yo.filterProps = ["columnGap"];
const Ko = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Pn(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: kn(t, n)
    });
    return zt(e, e.rowGap, r);
  }
  return null;
};
Ko.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: er
} : {};
Ko.filterProps = ["rowGap"];
const pm = Be({
  prop: "gridColumn"
}), hm = Be({
  prop: "gridRow"
}), mm = Be({
  prop: "gridAutoFlow"
}), gm = Be({
  prop: "gridAutoColumns"
}), ym = Be({
  prop: "gridAutoRows"
}), vm = Be({
  prop: "gridTemplateColumns"
}), bm = Be({
  prop: "gridTemplateRows"
}), Em = Be({
  prop: "gridTemplateAreas"
}), Sm = Be({
  prop: "gridArea"
});
Wo(qo, Yo, Ko, pm, hm, mm, gm, ym, vm, bm, Em, Sm);
function Nr(e, t) {
  return t === "grey" ? t : e;
}
const xm = Be({
  prop: "color",
  themeKey: "palette",
  transform: Nr
}), Tm = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Nr
}), Cm = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Nr
});
Wo(xm, Tm, Cm);
function ft(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Rm = Be({
  prop: "width",
  transform: ft
}), Wi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Vo[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ft(r)
      };
    };
    return zt(e, e.maxWidth, t);
  }
  return null;
};
Wi.filterProps = ["maxWidth"];
const wm = Be({
  prop: "minWidth",
  transform: ft
}), Om = Be({
  prop: "height",
  transform: ft
}), _m = Be({
  prop: "maxHeight",
  transform: ft
}), Pm = Be({
  prop: "minHeight",
  transform: ft
});
Be({
  prop: "size",
  cssProperty: "width",
  transform: ft
});
Be({
  prop: "size",
  cssProperty: "height",
  transform: ft
});
const km = Be({
  prop: "boxSizing"
});
Wo(Rm, Wi, wm, Om, _m, Pm, km);
const Jo = {
  // borders
  border: {
    themeKey: "borders",
    transform: vt
  },
  borderTop: {
    themeKey: "borders",
    transform: vt
  },
  borderRight: {
    themeKey: "borders",
    transform: vt
  },
  borderBottom: {
    themeKey: "borders",
    transform: vt
  },
  borderLeft: {
    themeKey: "borders",
    transform: vt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: vt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ho
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Nr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Nr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Nr
  },
  // spacing
  p: {
    style: Me
  },
  pt: {
    style: Me
  },
  pr: {
    style: Me
  },
  pb: {
    style: Me
  },
  pl: {
    style: Me
  },
  px: {
    style: Me
  },
  py: {
    style: Me
  },
  padding: {
    style: Me
  },
  paddingTop: {
    style: Me
  },
  paddingRight: {
    style: Me
  },
  paddingBottom: {
    style: Me
  },
  paddingLeft: {
    style: Me
  },
  paddingX: {
    style: Me
  },
  paddingY: {
    style: Me
  },
  paddingInline: {
    style: Me
  },
  paddingInlineStart: {
    style: Me
  },
  paddingInlineEnd: {
    style: Me
  },
  paddingBlock: {
    style: Me
  },
  paddingBlockStart: {
    style: Me
  },
  paddingBlockEnd: {
    style: Me
  },
  m: {
    style: $e
  },
  mt: {
    style: $e
  },
  mr: {
    style: $e
  },
  mb: {
    style: $e
  },
  ml: {
    style: $e
  },
  mx: {
    style: $e
  },
  my: {
    style: $e
  },
  margin: {
    style: $e
  },
  marginTop: {
    style: $e
  },
  marginRight: {
    style: $e
  },
  marginBottom: {
    style: $e
  },
  marginLeft: {
    style: $e
  },
  marginX: {
    style: $e
  },
  marginY: {
    style: $e
  },
  marginInline: {
    style: $e
  },
  marginInlineStart: {
    style: $e
  },
  marginInlineEnd: {
    style: $e
  },
  marginBlock: {
    style: $e
  },
  marginBlockStart: {
    style: $e
  },
  marginBlockEnd: {
    style: $e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: qo
  },
  rowGap: {
    style: Ko
  },
  columnGap: {
    style: Yo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ft
  },
  maxWidth: {
    style: Wi
  },
  minWidth: {
    transform: ft
  },
  height: {
    transform: ft
  },
  maxHeight: {
    transform: ft
  },
  minHeight: {
    transform: ft
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Am(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Nm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Im() {
  function e(r, n, o, s) {
    const i = {
      [r]: n,
      theme: o
    }, a = s[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: f,
      style: p
    } = a;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = Uo(o, u) || {};
    return p ? p(i) : zt(i, n, (h) => {
      let d = xo(g, f, h);
      return h === d && typeof h == "string" && (d = xo(g, f, `${r}${h === "default" ? "" : me(h)}`, h)), l === !1 ? d : {
        [l]: d
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? Jo;
    function i(a) {
      let l = a;
      if (typeof a == "function")
        l = a(o);
      else if (typeof a != "object")
        return a;
      if (!l)
        return null;
      const u = Hh(o.breakpoints), f = Object.keys(u);
      let p = u;
      return Object.keys(l).forEach((g) => {
        const y = Nm(l[g], o);
        if (y != null)
          if (typeof y == "object")
            if (s[g])
              p = pn(p, e(g, y, o, s));
            else {
              const h = zt({
                theme: o
              }, y, (d) => ({
                [g]: d
              }));
              Am(h, y) ? p[g] = t({
                sx: y,
                theme: o
              }) : p = pn(p, h);
            }
          else
            p = pn(p, e(g, y, o, s));
      }), Vh(o, qh(f, p));
    }
    return Array.isArray(n) ? n.map(i) : i(n);
  }
  return t;
}
const Lr = Im();
Lr.filterProps = ["sx"];
/**
 * @mui/styled-engine v6.4.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function $m(e, t) {
  const r = dp(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Mm(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Cc = [];
function Rc(e) {
  return Cc[0] = e, uu(Cc);
}
const Dm = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function jm(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, s = Dm(t), i = Object.keys(s);
  function a(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function u(g, y) {
    const h = i.indexOf(y);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(h !== -1 && typeof t[i[h]] == "number" ? t[i[h]] : y) - n / 100}${r})`;
  }
  function f(g) {
    return i.indexOf(g) + 1 < i.length ? u(g, i[i.indexOf(g) + 1]) : a(g);
  }
  function p(g) {
    const y = i.indexOf(g);
    return y === 0 ? a(i[1]) : y === i.length - 1 ? l(i[y]) : u(g, i[i.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: s,
    up: a,
    down: l,
    between: u,
    only: f,
    not: p,
    unit: r,
    ...o
  };
}
const Lm = {
  borderRadius: 4
};
function Du(e = 8, t = Gi({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function Bm(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Hi(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...i
  } = e, a = jm(r), l = Du(o);
  let u = et({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Lm,
      ...s
    }
  }, i);
  return u = Gh(u), u.applyStyles = Bm, u = t.reduce((f, p) => et(f, p), u), u.unstable_sxConfig = {
    ...Jo,
    ...i?.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return Lr({
      sx: p,
      theme: this
    });
  }, u;
}
function Fm(e) {
  return Object.keys(e).length === 0;
}
function Vm(e = null) {
  const t = _.useContext(pp);
  return !t || Fm(t) ? e : t;
}
const Um = Hi();
function zm(e = Um) {
  return Vm(e);
}
function ju(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Rc(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Rc(o.style));
  }), n;
}
const Gm = Hi();
function xs(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Wm(e) {
  return e ? (t, r) => r[e] : null;
}
function Hm(e, t, r) {
  e.theme = Jm(e.theme) ? r : e.theme[t] || e.theme;
}
function ao(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => ao(e, n));
  if (Array.isArray(r?.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...s
      } = r;
      n = s;
    }
    return Lu(e, r.variants, [n]);
  }
  return r?.isProcessed ? r.style : r;
}
function Lu(e, t, r = []) {
  let n;
  e: for (let o = 0; o < t.length; o += 1) {
    const s = t[o];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const i in s.props)
        if (e[i] !== s.props[i] && e.ownerState?.[i] !== s.props[i])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function qm(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Gm,
    rootShouldForwardProp: n = xs,
    slotShouldForwardProp: o = xs
  } = e;
  function s(a) {
    Hm(a, t, r);
  }
  return (a, l = {}) => {
    Mm(a, (v) => v.filter((I) => I !== Lr));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = Wm(Bu(f)),
      ...h
    } = l, d = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), S = g || !1;
    let T = xs;
    f === "Root" || f === "root" ? T = n : f ? T = o : Xm(a) && (T = void 0);
    const A = $m(a, {
      shouldForwardProp: T,
      label: Km(u, f),
      ...h
    }), C = (v) => {
      if (typeof v == "function" && v.__emotion_real !== v)
        return function(D) {
          return ao(D, v);
        };
      if (Ft(v)) {
        const I = ju(v);
        return I.variants ? function(z) {
          return ao(z, I);
        } : I.style;
      }
      return v;
    }, x = (...v) => {
      const I = [], D = v.map(C), z = [];
      if (I.push(s), u && y && z.push(function(U) {
        const M = U.theme.components?.[u]?.styleOverrides;
        if (!M)
          return null;
        const w = {};
        for (const b in M)
          w[b] = ao(U, M[b]);
        return y(U, w);
      }), u && !d && z.push(function(U) {
        const M = U.theme?.components?.[u]?.variants;
        return M ? Lu(U, M) : null;
      }), S || z.push(Lr), Array.isArray(D[0])) {
        const $ = D.shift(), U = new Array(I.length).fill(""), G = new Array(z.length).fill("");
        let M;
        M = [...U, ...$, ...G], M.raw = [...U, ...$.raw, ...G], I.unshift(M);
      }
      const W = [...I, ...D, ...z], m = A(...W);
      return a.muiName && (m.muiName = a.muiName), process.env.NODE_ENV !== "production" && (m.displayName = Ym(u, f, a)), m;
    };
    return A.withConfig && (x.withConfig = A.withConfig), x;
  };
}
function Ym(e, t, r) {
  return e ? `${e}${me(t || "")}` : `Styled(${kr(r)})`;
}
function Km(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Bu(t || "Root")}`), r;
}
function Jm(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Xm(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Bu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function qi(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Lh(e, t, r);
}
function Qm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xt(Qm(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Jt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Jt(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Zm = (e) => {
  const t = Xt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, sn = (e, t) => {
  try {
    return Zm(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Xo(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Fu(e) {
  e = Xt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (u, f = (u + r / 30) % 12) => o - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const l = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), Xo({
    type: a,
    values: l
  });
}
function ei(e) {
  e = Xt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xt(Fu(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function wc(e, t) {
  const r = ei(e), n = ei(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function dt(e, t) {
  return e = Xt(e), t = qi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Xo(e);
}
function Wn(e, t, r) {
  try {
    return dt(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t) {
  if (e = Xt(e), t = qi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Xo(e);
}
function Pe(e, t, r) {
  try {
    return Yi(e, t);
  } catch {
    return e;
  }
}
function Ki(e, t) {
  if (e = Xt(e), t = qi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Xo(e);
}
function ke(e, t, r) {
  try {
    return Ki(e, t);
  } catch {
    return e;
  }
}
function eg(e, t = 0.15) {
  return ei(e) > 0.5 ? Yi(e, t) : Ki(e, t);
}
function Hn(e, t, r) {
  try {
    return eg(e, t);
  } catch {
    return e;
  }
}
const Vu = /* @__PURE__ */ _.createContext(null);
process.env.NODE_ENV !== "production" && (Vu.displayName = "ThemeContext");
function tg() {
  const e = _.useContext(Vu);
  return process.env.NODE_ENV !== "production" && _.useDebugValue(e), e;
}
const rg = typeof Symbol == "function" && Symbol.for, ng = rg ? Symbol.for("mui.nested") : "__THEME_NESTED__", og = /* @__PURE__ */ _.createContext();
process.env.NODE_ENV !== "production" && (c.node, c.bool);
const sg = () => _.useContext(og) ?? !1, ig = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (c.node, c.object);
function ag(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? So(o.defaultProps, n) : !o.styleOverrides && !o.variants ? So(o, n) : n;
}
function cg({
  props: e,
  name: t
}) {
  const r = _.useContext(ig);
  return ag({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Oc = {
  theme: void 0
};
function lg(e) {
  let t, r;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== r) && (Oc.theme = o.theme, s = ju(e(Oc)), t = s, r = o.theme), s;
  };
}
function ug(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const _c = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, fg = (e, t, r) => {
  function n(o, s = [], i = []) {
    Object.entries(o).forEach(([a, l]) => {
      (!r || r && !r([...s, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...s, a], Array.isArray(l) ? [...i, a] : i) : t([...s, a], l, i));
    });
  }
  n(e);
}, dg = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ts(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, i = {};
  return fg(
    e,
    (a, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(a, l))) {
        const f = `--${r ? `${r}-` : ""}${a.join("-")}`, p = dg(a, l);
        Object.assign(o, {
          [f]: p
        }), _c(s, a, `var(${f})`, u), _c(i, a, `var(${f}, ${p})`, u);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: i
  };
}
function pg(e, t = {}) {
  const {
    getSelector: r = S,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: s = {},
    components: i,
    defaultColorScheme: a = "light",
    ...l
  } = e, {
    vars: u,
    css: f,
    varsWithDefaults: p
  } = Ts(l, t);
  let g = p;
  const y = {}, {
    [a]: h,
    ...d
  } = s;
  if (Object.entries(d || {}).forEach(([C, x]) => {
    const {
      vars: v,
      css: I,
      varsWithDefaults: D
    } = Ts(x, t);
    g = et(g, D), y[C] = {
      css: I,
      vars: v
    };
  }), h) {
    const {
      css: C,
      vars: x,
      varsWithDefaults: v
    } = Ts(h, t);
    g = et(g, v), y[a] = {
      css: C,
      vars: x
    };
  }
  function S(C, x) {
    let v = o;
    if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (v = `[${o}="%s"]`), C) {
      if (v === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${s[C]?.palette?.mode || C})`]: {
            ":root": x
          }
        };
      if (v)
        return e.defaultColorScheme === C ? `:root, ${v.replace("%s", String(C))}` : v.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let C = {
        ...u
      };
      return Object.entries(y).forEach(([, {
        vars: x
      }]) => {
        C = et(C, x);
      }), C;
    },
    generateStyleSheets: () => {
      const C = [], x = e.defaultColorScheme || "light";
      function v(z, W) {
        Object.keys(W).length && C.push(typeof z == "string" ? {
          [z]: {
            ...W
          }
        } : z);
      }
      v(r(void 0, {
        ...f
      }), f);
      const {
        [x]: I,
        ...D
      } = y;
      if (I) {
        const {
          css: z
        } = I, W = s[x]?.palette?.mode, m = !n && W ? {
          colorScheme: W,
          ...z
        } : {
          ...z
        };
        v(r(x, {
          ...m
        }), m);
      }
      return Object.entries(D).forEach(([z, {
        css: W
      }]) => {
        const m = s[z]?.palette?.mode, $ = !n && m ? {
          colorScheme: m,
          ...W
        } : {
          ...W
        };
        v(r(z, {
          ...$
        }), $);
      }), C;
    }
  };
}
function hg(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Sn = {
  black: "#000",
  white: "#fff"
}, mg = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, vr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, br = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Xr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Er = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Sr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, xr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Uu() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Sn.white,
      default: Sn.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const gg = Uu();
function zu() {
  return {
    text: {
      primary: Sn.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Sn.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Pc = zu();
function kc(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Ki(e.main, o) : t === "dark" && (e.dark = Yi(e.main, s)));
}
function yg(e = "light") {
  return e === "dark" ? {
    main: Er[200],
    light: Er[50],
    dark: Er[400]
  } : {
    main: Er[700],
    light: Er[400],
    dark: Er[800]
  };
}
function vg(e = "light") {
  return e === "dark" ? {
    main: vr[200],
    light: vr[50],
    dark: vr[400]
  } : {
    main: vr[500],
    light: vr[300],
    dark: vr[700]
  };
}
function bg(e = "light") {
  return e === "dark" ? {
    main: br[500],
    light: br[300],
    dark: br[700]
  } : {
    main: br[700],
    light: br[400],
    dark: br[800]
  };
}
function Eg(e = "light") {
  return e === "dark" ? {
    main: Sr[400],
    light: Sr[300],
    dark: Sr[700]
  } : {
    main: Sr[700],
    light: Sr[500],
    dark: Sr[900]
  };
}
function Sg(e = "light") {
  return e === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: xr[800],
    light: xr[500],
    dark: xr[900]
  };
}
function xg(e = "light") {
  return e === "dark" ? {
    main: Xr[400],
    light: Xr[300],
    dark: Xr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xr[500],
    dark: Xr[900]
  };
}
function Ji(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, s = e.primary || yg(t), i = e.secondary || vg(t), a = e.error || bg(t), l = e.info || Eg(t), u = e.success || Sg(t), f = e.warning || xg(t);
  function p(d) {
    const S = wc(d, Pc.text.primary) >= r ? Pc.text.primary : gg.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = wc(d, S);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${S} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: d,
    name: S,
    mainShade: T = 500,
    lightShade: A = 300,
    darkShade: C = 700
  }) => {
    if (d = {
      ...d
    }, !d.main && d[T] && (d.main = d[T]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Jt(11, S ? ` (${S})` : "", T));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Jt(12, S ? ` (${S})` : "", JSON.stringify(d.main)));
    return kc(d, "light", A, n), kc(d, "dark", C, n), d.contrastText || (d.contrastText = p(d.main)), d;
  };
  let y;
  return t === "light" ? y = Uu() : t === "dark" && (y = zu()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), et({
    // A collection of common colors.
    common: {
      ...Sn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: mg,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, o);
}
function Tg(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Cg(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Rg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ac = {
  textTransform: "uppercase"
}, Nc = '"Roboto", "Helvetica", "Arial", sans-serif';
function wg(e, t) {
  const {
    fontFamily: r = Nc,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, y = f || ((S) => `${S / l * g}rem`), h = (S, T, A, C, x) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: y(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: A,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Nc ? {
      letterSpacing: `${Rg(C / T)}em`
    } : {},
    ...x,
    ...u
  }), d = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(s, 48, 1.167, 0),
    h4: h(s, 34, 1.235, 0.25),
    h5: h(s, 24, 1.334, 0),
    h6: h(i, 20, 1.6, 0.15),
    subtitle1: h(s, 16, 1.75, 0.15),
    subtitle2: h(i, 14, 1.57, 0.1),
    body1: h(s, 16, 1.5, 0.15),
    body2: h(s, 14, 1.43, 0.15),
    button: h(i, 14, 1.75, 0.4, Ac),
    caption: h(s, 12, 1.66, 0.4),
    overline: h(s, 12, 2.66, 1, Ac),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return et({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: a,
    ...d
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Og = 0.2, _g = 0.14, Pg = 0.12;
function Ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Og})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_g})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Pg})`].join(",");
}
const kg = ["none", Ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ag = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ng = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ic(e) {
  return `${Math.round(e)}ms`;
}
function Ig(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function $g(e) {
  const t = {
    ...Ag,
    ...e.easing
  }, r = {
    ...Ng,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ig,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : Ic(i)} ${a} ${typeof l == "string" ? l : Ic(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Mg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Dg(e) {
  return Ft(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Gu(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [i, a] = o[s];
      !Dg(a) || i.startsWith("unstable_") ? delete n[i] : Ft(a) && (n[i] = {
        ...a
      }, r(n[i]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ti(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: s = {},
    transitions: i = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Jt(20));
  const f = Ji(s), p = Hi(e);
  let g = et(p, {
    mixins: Cg(p.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: kg.slice(),
    typography: wg(f, a),
    transitions: $g(i),
    zIndex: {
      ...Mg
    }
  });
  if (g = et(g, u), g = t.reduce((y, h) => et(y, h), g), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (d, S) => {
      let T;
      for (T in d) {
        const A = d[T];
        if (y.includes(T) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = Xe("", T);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[T] = {};
        }
      }
    };
    Object.keys(g.components).forEach((d) => {
      const S = g.components[d].styleOverrides;
      S && d.startsWith("Mui") && h(S, d);
    });
  }
  return g.unstable_sxConfig = {
    ...Jo,
    ...u?.unstable_sxConfig
  }, g.unstable_sx = function(h) {
    return Lr({
      sx: h,
      theme: this
    });
  }, g.toRuntimeSource = Gu, g;
}
function ri(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const jg = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ri(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Wu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Hu(e) {
  return e === "dark" ? jg : [];
}
function Lg(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, s = Ji(t);
  return {
    palette: s,
    opacity: {
      ...Wu(s.mode),
      ...r
    },
    overlays: n || Hu(s.mode),
    ...o
  };
}
function Bg(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Fg = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Vg = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return Fg(e.cssVarPrefix).forEach((a) => {
        i[a] = r[a], delete r[a];
      }), s === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: i
        }
      } : s ? {
        [s.replace("%s", t)]: i,
        [`${n}, ${s.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...i
        }
      };
    }
    if (s && s !== "media")
      return `${n}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return n;
};
function Ug(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function F(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function an(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Fu(e);
}
function Lt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = sn(an(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function zg(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const kt = (e) => {
  try {
    return e();
  } catch {
  }
}, Gg = (e = "mui") => ug(e);
function Cs(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Lg({
      ...t,
      palette: {
        mode: o,
        ...t?.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...i
  } = ti({
    ...r,
    palette: {
      mode: o,
      ...t?.palette
    }
  });
  return e[n] = {
    ...t,
    palette: s,
    opacity: {
      ...Wu(o),
      ...t?.opacity
    },
    overlays: t?.overlays || Hu(o)
  }, i;
}
function Wg(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: i = Bg,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, f = Object.keys(r)[0], p = n || (r.light && f !== "light" ? "light" : f), g = Gg(s), {
    [p]: y,
    light: h,
    dark: d,
    ...S
  } = r, T = {
    ...S
  };
  let A = y;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Jt(21, p));
  const C = Cs(T, A, u, p);
  h && !T.light && Cs(T, h, void 0, "light"), d && !T.dark && Cs(T, d, void 0, "dark");
  let x = {
    defaultColorScheme: p,
    ...C,
    cssVarPrefix: s,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: g,
    colorSchemes: T,
    font: {
      ...Tg(C.typography),
      ...C.font
    },
    spacing: zg(u.spacing)
  };
  Object.keys(x.colorSchemes).forEach((W) => {
    const m = x.colorSchemes[W].palette, $ = (U) => {
      const G = U.split("-"), M = G[1], w = G[2];
      return g(U, m[M][w]);
    };
    if (m.mode === "light" && (F(m.common, "background", "#fff"), F(m.common, "onBackground", "#000")), m.mode === "dark" && (F(m.common, "background", "#000"), F(m.common, "onBackground", "#fff")), Ug(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      F(m.Alert, "errorColor", Pe(m.error.light, 0.6)), F(m.Alert, "infoColor", Pe(m.info.light, 0.6)), F(m.Alert, "successColor", Pe(m.success.light, 0.6)), F(m.Alert, "warningColor", Pe(m.warning.light, 0.6)), F(m.Alert, "errorFilledBg", $("palette-error-main")), F(m.Alert, "infoFilledBg", $("palette-info-main")), F(m.Alert, "successFilledBg", $("palette-success-main")), F(m.Alert, "warningFilledBg", $("palette-warning-main")), F(m.Alert, "errorFilledColor", kt(() => m.getContrastText(m.error.main))), F(m.Alert, "infoFilledColor", kt(() => m.getContrastText(m.info.main))), F(m.Alert, "successFilledColor", kt(() => m.getContrastText(m.success.main))), F(m.Alert, "warningFilledColor", kt(() => m.getContrastText(m.warning.main))), F(m.Alert, "errorStandardBg", ke(m.error.light, 0.9)), F(m.Alert, "infoStandardBg", ke(m.info.light, 0.9)), F(m.Alert, "successStandardBg", ke(m.success.light, 0.9)), F(m.Alert, "warningStandardBg", ke(m.warning.light, 0.9)), F(m.Alert, "errorIconColor", $("palette-error-main")), F(m.Alert, "infoIconColor", $("palette-info-main")), F(m.Alert, "successIconColor", $("palette-success-main")), F(m.Alert, "warningIconColor", $("palette-warning-main")), F(m.AppBar, "defaultBg", $("palette-grey-100")), F(m.Avatar, "defaultBg", $("palette-grey-400")), F(m.Button, "inheritContainedBg", $("palette-grey-300")), F(m.Button, "inheritContainedHoverBg", $("palette-grey-A100")), F(m.Chip, "defaultBorder", $("palette-grey-400")), F(m.Chip, "defaultAvatarColor", $("palette-grey-700")), F(m.Chip, "defaultIconColor", $("palette-grey-700")), F(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(m.LinearProgress, "primaryBg", ke(m.primary.main, 0.62)), F(m.LinearProgress, "secondaryBg", ke(m.secondary.main, 0.62)), F(m.LinearProgress, "errorBg", ke(m.error.main, 0.62)), F(m.LinearProgress, "infoBg", ke(m.info.main, 0.62)), F(m.LinearProgress, "successBg", ke(m.success.main, 0.62)), F(m.LinearProgress, "warningBg", ke(m.warning.main, 0.62)), F(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), F(m.Slider, "primaryTrack", ke(m.primary.main, 0.62)), F(m.Slider, "secondaryTrack", ke(m.secondary.main, 0.62)), F(m.Slider, "errorTrack", ke(m.error.main, 0.62)), F(m.Slider, "infoTrack", ke(m.info.main, 0.62)), F(m.Slider, "successTrack", ke(m.success.main, 0.62)), F(m.Slider, "warningTrack", ke(m.warning.main, 0.62));
      const U = Hn(m.background.default, 0.8);
      F(m.SnackbarContent, "bg", U), F(m.SnackbarContent, "color", kt(() => m.getContrastText(U))), F(m.SpeedDialAction, "fabHoverBg", Hn(m.background.paper, 0.15)), F(m.StepConnector, "border", $("palette-grey-400")), F(m.StepContent, "border", $("palette-grey-400")), F(m.Switch, "defaultColor", $("palette-common-white")), F(m.Switch, "defaultDisabledColor", $("palette-grey-100")), F(m.Switch, "primaryDisabledColor", ke(m.primary.main, 0.62)), F(m.Switch, "secondaryDisabledColor", ke(m.secondary.main, 0.62)), F(m.Switch, "errorDisabledColor", ke(m.error.main, 0.62)), F(m.Switch, "infoDisabledColor", ke(m.info.main, 0.62)), F(m.Switch, "successDisabledColor", ke(m.success.main, 0.62)), F(m.Switch, "warningDisabledColor", ke(m.warning.main, 0.62)), F(m.TableCell, "border", ke(Wn(m.divider, 1), 0.88)), F(m.Tooltip, "bg", Wn(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      F(m.Alert, "errorColor", ke(m.error.light, 0.6)), F(m.Alert, "infoColor", ke(m.info.light, 0.6)), F(m.Alert, "successColor", ke(m.success.light, 0.6)), F(m.Alert, "warningColor", ke(m.warning.light, 0.6)), F(m.Alert, "errorFilledBg", $("palette-error-dark")), F(m.Alert, "infoFilledBg", $("palette-info-dark")), F(m.Alert, "successFilledBg", $("palette-success-dark")), F(m.Alert, "warningFilledBg", $("palette-warning-dark")), F(m.Alert, "errorFilledColor", kt(() => m.getContrastText(m.error.dark))), F(m.Alert, "infoFilledColor", kt(() => m.getContrastText(m.info.dark))), F(m.Alert, "successFilledColor", kt(() => m.getContrastText(m.success.dark))), F(m.Alert, "warningFilledColor", kt(() => m.getContrastText(m.warning.dark))), F(m.Alert, "errorStandardBg", Pe(m.error.light, 0.9)), F(m.Alert, "infoStandardBg", Pe(m.info.light, 0.9)), F(m.Alert, "successStandardBg", Pe(m.success.light, 0.9)), F(m.Alert, "warningStandardBg", Pe(m.warning.light, 0.9)), F(m.Alert, "errorIconColor", $("palette-error-main")), F(m.Alert, "infoIconColor", $("palette-info-main")), F(m.Alert, "successIconColor", $("palette-success-main")), F(m.Alert, "warningIconColor", $("palette-warning-main")), F(m.AppBar, "defaultBg", $("palette-grey-900")), F(m.AppBar, "darkBg", $("palette-background-paper")), F(m.AppBar, "darkColor", $("palette-text-primary")), F(m.Avatar, "defaultBg", $("palette-grey-600")), F(m.Button, "inheritContainedBg", $("palette-grey-800")), F(m.Button, "inheritContainedHoverBg", $("palette-grey-700")), F(m.Chip, "defaultBorder", $("palette-grey-700")), F(m.Chip, "defaultAvatarColor", $("palette-grey-300")), F(m.Chip, "defaultIconColor", $("palette-grey-300")), F(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(m.LinearProgress, "primaryBg", Pe(m.primary.main, 0.5)), F(m.LinearProgress, "secondaryBg", Pe(m.secondary.main, 0.5)), F(m.LinearProgress, "errorBg", Pe(m.error.main, 0.5)), F(m.LinearProgress, "infoBg", Pe(m.info.main, 0.5)), F(m.LinearProgress, "successBg", Pe(m.success.main, 0.5)), F(m.LinearProgress, "warningBg", Pe(m.warning.main, 0.5)), F(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), F(m.Slider, "primaryTrack", Pe(m.primary.main, 0.5)), F(m.Slider, "secondaryTrack", Pe(m.secondary.main, 0.5)), F(m.Slider, "errorTrack", Pe(m.error.main, 0.5)), F(m.Slider, "infoTrack", Pe(m.info.main, 0.5)), F(m.Slider, "successTrack", Pe(m.success.main, 0.5)), F(m.Slider, "warningTrack", Pe(m.warning.main, 0.5));
      const U = Hn(m.background.default, 0.98);
      F(m.SnackbarContent, "bg", U), F(m.SnackbarContent, "color", kt(() => m.getContrastText(U))), F(m.SpeedDialAction, "fabHoverBg", Hn(m.background.paper, 0.15)), F(m.StepConnector, "border", $("palette-grey-600")), F(m.StepContent, "border", $("palette-grey-600")), F(m.Switch, "defaultColor", $("palette-grey-300")), F(m.Switch, "defaultDisabledColor", $("palette-grey-600")), F(m.Switch, "primaryDisabledColor", Pe(m.primary.main, 0.55)), F(m.Switch, "secondaryDisabledColor", Pe(m.secondary.main, 0.55)), F(m.Switch, "errorDisabledColor", Pe(m.error.main, 0.55)), F(m.Switch, "infoDisabledColor", Pe(m.info.main, 0.55)), F(m.Switch, "successDisabledColor", Pe(m.success.main, 0.55)), F(m.Switch, "warningDisabledColor", Pe(m.warning.main, 0.55)), F(m.TableCell, "border", Pe(Wn(m.divider, 1), 0.68)), F(m.Tooltip, "bg", Wn(m.grey[700], 0.92));
    }
    Lt(m.background, "default"), Lt(m.background, "paper"), Lt(m.common, "background"), Lt(m.common, "onBackground"), Lt(m, "divider"), Object.keys(m).forEach((U) => {
      const G = m[U];
      U !== "tonalOffset" && G && typeof G == "object" && (G.main && F(m[U], "mainChannel", sn(an(G.main))), G.light && F(m[U], "lightChannel", sn(an(G.light))), G.dark && F(m[U], "darkChannel", sn(an(G.dark))), G.contrastText && F(m[U], "contrastTextChannel", sn(an(G.contrastText))), U === "text" && (Lt(m[U], "primary"), Lt(m[U], "secondary")), U === "action" && (G.active && Lt(m[U], "active"), G.selected && Lt(m[U], "selected")));
    });
  }), x = t.reduce((W, m) => et(W, m), x);
  const v = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: i,
    getSelector: Vg(x)
  }, {
    vars: I,
    generateThemeVars: D,
    generateStyleSheets: z
  } = pg(x, v);
  return x.vars = I, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([W, m]) => {
    x[W] = m;
  }), x.generateThemeVars = D, x.generateStyleSheets = z, x.generateSpacing = function() {
    return Du(u.spacing, Gi(this));
  }, x.getColorSchemeSelector = hg(a), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = i, x.unstable_sxConfig = {
    ...Jo,
    ...u?.unstable_sxConfig
  }, x.unstable_sx = function(m) {
    return Lr({
      sx: m,
      theme: this
    });
  }, x.toRuntimeSource = Gu, x;
}
function $c(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Ji({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Hg(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...i
  } = e, a = s || "light", l = o?.[a], u = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ti(e, ...t);
    let f = r;
    "palette" in e || u[a] && (u[a] !== !0 ? f = u[a].palette : a === "dark" && (f = {
      mode: "dark"
    }));
    const p = ti({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, $c(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, $c(p, "light", u.light)), p;
  }
  return !r && !("light" in u) && a === "light" && (u.light = !0), Wg({
    ...i,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const qu = Hg(), Yu = "$$material";
function An() {
  const e = zm(qu);
  return process.env.NODE_ENV !== "production" && _.useDebugValue(e), e[Yu] || e;
}
function qg(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Qo = (e) => qg(e) && e !== "classes", Ce = qm({
  themeId: Yu,
  defaultTheme: qu,
  rootShouldForwardProp: Qo
}), Gt = lg;
process.env.NODE_ENV !== "production" && (c.node, c.object.isRequired);
function tt(e) {
  return cg(e);
}
function Yg(e) {
  return Xe("MuiSvgIcon", e);
}
Ge("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Kg = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${me(t)}`, `fontSize${me(r)}`]
  };
  return ut(o, Yg, n);
}, Jg = Ce("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${me(r.color)}`], t[`fontSize${me(r.fontSize)}`]];
  }
})(Gt(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), To = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: i = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: g = "0 0 24 24",
    ...y
  } = n, h = /* @__PURE__ */ _.isValidElement(o) && o.type === "svg", d = {
    ...n,
    color: i,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: g,
    hasSvgAsChild: h
  }, S = {};
  f || (S.viewBox = g);
  const T = Kg(d);
  return /* @__PURE__ */ X.jsxs(Jg, {
    as: a,
    className: ge(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...S,
    ...y,
    ...h && o.props,
    ownerState: d,
    children: [h ? o.props.children : o, p ? /* @__PURE__ */ X.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (To.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: c.oneOfType([c.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: c.oneOfType([c.oneOf(["inherit", "large", "medium", "small"]), c.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: c.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: c.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: c.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: c.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: c.string
});
To.muiName = "SvgIcon";
function rt(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ X.jsx(To, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = To.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(r));
}
function Xg(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (o) => {
      const s = typeof t == "function" ? t(o) : t, i = typeof e == "function" ? e({
        ...o,
        ...s
      }) : e, a = ge(o?.className, s?.className, i?.className);
      return {
        ...s,
        ...i,
        ...!!a && {
          className: a
        },
        ...s?.style && i?.style && {
          style: {
            ...s.style,
            ...i.style
          }
        },
        ...s?.sx && i?.sx && {
          sx: [...Array.isArray(s.sx) ? s.sx : [s.sx], ...Array.isArray(i.sx) ? i.sx : [i.sx]]
        }
      };
    };
  const r = t, n = ge(r?.className, e?.className);
  return {
    ...t,
    ...e,
    ...!!n && {
      className: n
    },
    ...r?.style && e?.style && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...r?.sx && e?.sx && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const Qg = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), Zg = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function ey(e = {}) {
  const {
    disableGlobal: t = !1,
    productionPrefix: r = "jss",
    seed: n = ""
  } = e, o = n === "" ? "" : `${n}-`;
  let s = 0;
  const i = () => (s += 1, process.env.NODE_ENV !== "production" && s >= 1e10 && console.warn(["MUI: You might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join("")), s);
  return (a, l) => {
    const u = l.options.name;
    if (u && u.startsWith("Mui") && !l.options.link && !t) {
      if (Zg.includes(a.key))
        return `Mui-${a.key}`;
      const p = `${o}${u}-${a.key}`;
      return !l.options.theme[ng] || n !== "" ? p : `${p}-${i()}`;
    }
    if (process.env.NODE_ENV === "production")
      return `${o}${r}${i()}`;
    const f = `${a.key}-${i()}`;
    return l.options.classNamePrefix ? `${o}${l.options.classNamePrefix}-${f}` : `${o}${f}`;
  };
}
function ty(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r] || !t.components[r].defaultProps)
    return n;
  const o = {
    ...n
  }, s = t.components[r].defaultProps;
  let i;
  for (i in s)
    o[i] === void 0 && (o[i] = s[i]);
  return o;
}
var ry = process.env.NODE_ENV === "production";
function Tt(e, t) {
  if (!ry) {
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var Mc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, Nn = (typeof window > "u" ? "undefined" : Mc(window)) === "object" && (typeof document > "u" ? "undefined" : Mc(document)) === "object" && document.nodeType === 9;
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function ny(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function oy(e) {
  var t = ny(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function sy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oy(n.key), n);
  }
}
function Ku(e, t, r) {
  return t && sy(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ni(e, t) {
  return ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ni(e, t);
}
function Zo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ni(e, t);
}
function oi(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xi(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var iy = {}.constructor;
function si(e) {
  if (e == null || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map(si);
  if (e.constructor !== iy) return e;
  var t = {};
  for (var r in e)
    t[r] = si(e[r]);
  return t;
}
function Qi(e, t, r) {
  e === void 0 && (e = "unnamed");
  var n = r.jss, o = si(t), s = n.plugins.onCreateRule(e, o, r);
  return s || (e[0] === "@" && process.env.NODE_ENV !== "production" && Tt(!1, "[JSS] Unknown rule " + e), null);
}
var Dc = function(t, r) {
  for (var n = "", o = 0; o < t.length && t[o] !== "!important"; o++)
    n && (n += r), n += t[o];
  return n;
}, dr = function(t) {
  if (!Array.isArray(t)) return t;
  var r = "";
  if (Array.isArray(t[0]))
    for (var n = 0; n < t.length && t[n] !== "!important"; n++)
      r && (r += ", "), r += Dc(t[n], " ");
  else r = Dc(t, ", ");
  return t[t.length - 1] === "!important" && (r += " !important"), r;
};
function zr(e) {
  return e && e.format === !1 ? {
    linebreak: "",
    space: ""
  } : {
    linebreak: `
`,
    space: " "
  };
}
function Qr(e, t) {
  for (var r = "", n = 0; n < t; n++)
    r += "  ";
  return r + e;
}
function Tn(e, t, r) {
  r === void 0 && (r = {});
  var n = "";
  if (!t) return n;
  var o = r, s = o.indent, i = s === void 0 ? 0 : s, a = t.fallbacks;
  r.format === !1 && (i = -1 / 0);
  var l = zr(r), u = l.linebreak, f = l.space;
  if (e && i++, a)
    if (Array.isArray(a))
      for (var p = 0; p < a.length; p++) {
        var g = a[p];
        for (var y in g) {
          var h = g[y];
          h != null && (n && (n += u), n += Qr(y + ":" + f + dr(h) + ";", i));
        }
      }
    else
      for (var d in a) {
        var S = a[d];
        S != null && (n && (n += u), n += Qr(d + ":" + f + dr(S) + ";", i));
      }
  for (var T in t) {
    var A = t[T];
    A != null && T !== "fallbacks" && (n && (n += u), n += Qr(T + ":" + f + dr(A) + ";", i));
  }
  return !n && !r.allowEmpty || !e ? n : (i--, n && (n = "" + u + n + u), Qr("" + e + f + "{" + n, i) + Qr("}", i));
}
var ay = /([[\].#*$><+~=|^:(),"'`\s])/g, jc = typeof CSS < "u" && CSS.escape, Zi = (function(e) {
  return jc ? jc(e) : e.replace(ay, "\\$1");
}), Ju = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "style", this.isProcessed = !1;
    var s = o.sheet, i = o.Renderer;
    this.key = r, this.options = o, this.style = n, s ? this.renderer = s.renderer : i && (this.renderer = new i());
  }
  var t = e.prototype;
  return t.prop = function(n, o, s) {
    if (o === void 0) return this.style[n];
    var i = s ? s.force : !1;
    if (!i && this.style[n] === o) return this;
    var a = o;
    (!s || s.process !== !1) && (a = this.options.jss.plugins.onChangeValue(o, n, this));
    var l = a == null || a === !1, u = n in this.style;
    if (l && !u && !i) return this;
    var f = l && u;
    if (f ? delete this.style[n] : this.style[n] = a, this.renderable && this.renderer)
      return f ? this.renderer.removeProperty(this.renderable, n) : this.renderer.setProperty(this.renderable, n, a), this;
    var p = this.options.sheet;
    return p && p.attached && process.env.NODE_ENV !== "production" && Tt(!1, '[JSS] Rule is not linked. Missing sheet option "link: true".'), this;
  }, e;
})(), ii = /* @__PURE__ */ (function(e) {
  Zo(t, e);
  function t(n, o, s) {
    var i;
    i = e.call(this, n, o, s) || this;
    var a = s.selector, l = s.scoped, u = s.sheet, f = s.generateId;
    return a ? i.selectorText = a : l !== !1 && (i.id = f(oi(oi(i)), u), i.selectorText = "." + Zi(i.id)), i;
  }
  var r = t.prototype;
  return r.applyTo = function(o) {
    var s = this.renderer;
    if (s) {
      var i = this.toJSON();
      for (var a in i)
        s.setProperty(o, a, i[a]);
    }
    return this;
  }, r.toJSON = function() {
    var o = {};
    for (var s in this.style) {
      var i = this.style[s];
      typeof i != "object" ? o[s] = i : Array.isArray(i) && (o[s] = dr(i));
    }
    return o;
  }, r.toString = function(o) {
    var s = this.options.sheet, i = s ? s.options.link : !1, a = i ? De({}, o, {
      allowEmpty: !0
    }) : o;
    return Tn(this.selectorText, this.style, a);
  }, Ku(t, [{
    key: "selector",
    set: function(o) {
      if (o !== this.selectorText) {
        this.selectorText = o;
        var s = this.renderer, i = this.renderable;
        if (!(!i || !s)) {
          var a = s.setSelector(i, o);
          a || s.replaceRule(i, this);
        }
      }
    },
    get: function() {
      return this.selectorText;
    }
  }]), t;
})(Ju), cy = {
  onCreateRule: function(t, r, n) {
    return t[0] === "@" || n.parent && n.parent.type === "keyframes" ? null : new ii(t, r, n);
  }
}, Rs = {
  indent: 1,
  children: !0
}, ly = /@([\w-]+)/, uy = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "conditional", this.isProcessed = !1, this.key = r;
    var s = r.match(ly);
    this.at = s ? s[1] : "unknown", this.query = o.name || "@" + this.at, this.options = o, this.rules = new es(De({}, o, {
      parent: this
    }));
    for (var i in n)
      this.rules.add(i, n[i]);
    this.rules.process();
  }
  var t = e.prototype;
  return t.getRule = function(n) {
    return this.rules.get(n);
  }, t.indexOf = function(n) {
    return this.rules.indexOf(n);
  }, t.addRule = function(n, o, s) {
    var i = this.rules.add(n, o, s);
    return i ? (this.options.jss.plugins.onProcessRule(i), i) : null;
  }, t.replaceRule = function(n, o, s) {
    var i = this.rules.replace(n, o, s);
    return i && this.options.jss.plugins.onProcessRule(i), i;
  }, t.toString = function(n) {
    n === void 0 && (n = Rs);
    var o = zr(n), s = o.linebreak;
    if (n.indent == null && (n.indent = Rs.indent), n.children == null && (n.children = Rs.children), n.children === !1)
      return this.query + " {}";
    var i = this.rules.toString(n);
    return i ? this.query + " {" + s + i + s + "}" : "";
  }, e;
})(), fy = /@container|@media|@supports\s+/, dy = {
  onCreateRule: function(t, r, n) {
    return fy.test(t) ? new uy(t, r, n) : null;
  }
}, ws = {
  indent: 1,
  children: !0
}, py = /@keyframes\s+([\w-]+)/, ai = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var s = r.match(py);
    s && s[1] ? this.name = s[1] : (this.name = "noname", process.env.NODE_ENV !== "production" && Tt(!1, "[JSS] Bad keyframes name " + r)), this.key = this.type + "-" + this.name, this.options = o;
    var i = o.scoped, a = o.sheet, l = o.generateId;
    this.id = i === !1 ? this.name : Zi(l(this, a)), this.rules = new es(De({}, o, {
      parent: this
    }));
    for (var u in n)
      this.rules.add(u, n[u], De({}, o, {
        parent: this
      }));
    this.rules.process();
  }
  var t = e.prototype;
  return t.toString = function(n) {
    n === void 0 && (n = ws);
    var o = zr(n), s = o.linebreak;
    if (n.indent == null && (n.indent = ws.indent), n.children == null && (n.children = ws.children), n.children === !1)
      return this.at + " " + this.id + " {}";
    var i = this.rules.toString(n);
    return i && (i = "" + s + i + s), this.at + " " + this.id + " {" + i + "}";
  }, e;
})(), hy = /@keyframes\s+/, my = /\$([\w-]+)/g, ci = function(t, r) {
  return typeof t == "string" ? t.replace(my, function(n, o) {
    return o in r ? r[o] : (process.env.NODE_ENV !== "production" && Tt(!1, '[JSS] Referenced keyframes rule "' + o + '" is not defined.'), n);
  }) : t;
}, Lc = function(t, r, n) {
  var o = t[r], s = ci(o, n);
  s !== o && (t[r] = s);
}, gy = {
  onCreateRule: function(t, r, n) {
    return typeof t == "string" && hy.test(t) ? new ai(t, r, n) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function(t, r, n) {
    return r.type !== "style" || !n || ("animation-name" in t && Lc(t, "animation-name", n.keyframes), "animation" in t && Lc(t, "animation", n.keyframes)), t;
  },
  onChangeValue: function(t, r, n) {
    var o = n.options.sheet;
    if (!o)
      return t;
    switch (r) {
      case "animation":
        return ci(t, o.keyframes);
      case "animation-name":
        return ci(t, o.keyframes);
      default:
        return t;
    }
  }
}, yy = /* @__PURE__ */ (function(e) {
  Zo(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return r.toString = function(o) {
    var s = this.options.sheet, i = s ? s.options.link : !1, a = i ? De({}, o, {
      allowEmpty: !0
    }) : o;
    return Tn(this.key, this.style, a);
  }, t;
})(Ju), vy = {
  onCreateRule: function(t, r, n) {
    return n.parent && n.parent.type === "keyframes" ? new yy(t, r, n) : null;
  }
}, by = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = r, this.style = n, this.options = o;
  }
  var t = e.prototype;
  return t.toString = function(n) {
    var o = zr(n), s = o.linebreak;
    if (Array.isArray(this.style)) {
      for (var i = "", a = 0; a < this.style.length; a++)
        i += Tn(this.at, this.style[a]), this.style[a + 1] && (i += s);
      return i;
    }
    return Tn(this.at, this.style, n);
  }, e;
})(), Ey = /@font-face/, Sy = {
  onCreateRule: function(t, r, n) {
    return Ey.test(t) ? new by(t, r, n) : null;
  }
}, xy = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = r, this.style = n, this.options = o;
  }
  var t = e.prototype;
  return t.toString = function(n) {
    return Tn(this.key, this.style, n);
  }, e;
})(), Ty = {
  onCreateRule: function(t, r, n) {
    return t === "@viewport" || t === "@-ms-viewport" ? new xy(t, r, n) : null;
  }
}, Cy = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "simple", this.isProcessed = !1, this.key = r, this.value = n, this.options = o;
  }
  var t = e.prototype;
  return t.toString = function(n) {
    if (Array.isArray(this.value)) {
      for (var o = "", s = 0; s < this.value.length; s++)
        o += this.key + " " + this.value[s] + ";", this.value[s + 1] && (o += `
`);
      return o;
    }
    return this.key + " " + this.value + ";";
  }, e;
})(), Ry = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, wy = {
  onCreateRule: function(t, r, n) {
    return t in Ry ? new Cy(t, r, n) : null;
  }
}, Bc = [cy, dy, gy, vy, Sy, Ty, wy], Oy = {
  process: !0
}, Fc = {
  force: !0,
  process: !0
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
}, es = /* @__PURE__ */ (function() {
  function e(r) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = r, this.classes = r.classes, this.keyframes = r.keyframes;
  }
  var t = e.prototype;
  return t.add = function(n, o, s) {
    var i = this.options, a = i.parent, l = i.sheet, u = i.jss, f = i.Renderer, p = i.generateId, g = i.scoped, y = De({
      classes: this.classes,
      parent: a,
      sheet: l,
      jss: u,
      Renderer: f,
      generateId: p,
      scoped: g,
      name: n,
      keyframes: this.keyframes,
      selector: void 0
    }, s), h = n;
    n in this.raw && (h = n + "-d" + this.counter++), this.raw[h] = o, h in this.classes && (y.selector = "." + Zi(this.classes[h]));
    var d = Qi(h, o, y);
    if (!d) return null;
    this.register(d);
    var S = y.index === void 0 ? this.index.length : y.index;
    return this.index.splice(S, 0, d), d;
  }, t.replace = function(n, o, s) {
    var i = this.get(n), a = this.index.indexOf(i);
    i && this.remove(i);
    var l = s;
    return a !== -1 && (l = De({}, s, {
      index: a
    })), this.add(n, o, l);
  }, t.get = function(n) {
    return this.map[n];
  }, t.remove = function(n) {
    this.unregister(n), delete this.raw[n.key], this.index.splice(this.index.indexOf(n), 1);
  }, t.indexOf = function(n) {
    return this.index.indexOf(n);
  }, t.process = function() {
    var n = this.options.jss.plugins;
    this.index.slice(0).forEach(n.onProcessRule, n);
  }, t.register = function(n) {
    this.map[n.key] = n, n instanceof ii ? (this.map[n.selector] = n, n.id && (this.classes[n.key] = n.id)) : n instanceof ai && this.keyframes && (this.keyframes[n.name] = n.id);
  }, t.unregister = function(n) {
    delete this.map[n.key], n instanceof ii ? (delete this.map[n.selector], delete this.classes[n.key]) : n instanceof ai && delete this.keyframes[n.name];
  }, t.update = function() {
    var n, o, s;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (n = arguments.length <= 0 ? void 0 : arguments[0], o = arguments.length <= 1 ? void 0 : arguments[1], s = arguments.length <= 2 ? void 0 : arguments[2]) : (o = arguments.length <= 0 ? void 0 : arguments[0], s = arguments.length <= 1 ? void 0 : arguments[1], n = null), n)
      this.updateOne(this.get(n), o, s);
    else
      for (var i = 0; i < this.index.length; i++)
        this.updateOne(this.index[i], o, s);
  }, t.updateOne = function(n, o, s) {
    s === void 0 && (s = Oy);
    var i = this.options, a = i.jss.plugins, l = i.sheet;
    if (n.rules instanceof e) {
      n.rules.update(o, s);
      return;
    }
    var u = n.style;
    if (a.onUpdate(o, n, l, s), s.process && u && u !== n.style) {
      a.onProcessStyle(n.style, n, l);
      for (var f in n.style) {
        var p = n.style[f], g = u[f];
        p !== g && n.prop(f, p, Fc);
      }
      for (var y in u) {
        var h = n.style[y], d = u[y];
        h == null && h !== d && n.prop(y, null, Fc);
      }
    }
  }, t.toString = function(n) {
    for (var o = "", s = this.options.sheet, i = s ? s.options.link : !1, a = zr(n), l = a.linebreak, u = 0; u < this.index.length; u++) {
      var f = this.index[u], p = f.toString(n);
      !p && !i || (o && (o += l), o += p);
    }
    return o;
  }, e;
})(), Xu = /* @__PURE__ */ (function() {
  function e(r, n) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = De({}, n, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), n.Renderer && (this.renderer = new n.Renderer(this)), this.rules = new es(this.options);
    for (var o in r)
      this.rules.add(o, r[o]);
    this.rules.process();
  }
  var t = e.prototype;
  return t.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, t.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, t.addRule = function(n, o, s) {
    var i = this.queue;
    this.attached && !i && (this.queue = []);
    var a = this.rules.add(n, o, s);
    return a ? (this.options.jss.plugins.onProcessRule(a), this.attached ? (this.deployed && (i ? i.push(a) : (this.insertRule(a), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), a) : (this.deployed = !1, a)) : null;
  }, t.replaceRule = function(n, o, s) {
    var i = this.rules.get(n);
    if (!i) return this.addRule(n, o, s);
    var a = this.rules.replace(n, o, s);
    return a && this.options.jss.plugins.onProcessRule(a), this.attached ? (this.deployed && this.renderer && (a ? i.renderable && this.renderer.replaceRule(i.renderable, a) : this.renderer.deleteRule(i)), a) : (this.deployed = !1, a);
  }, t.insertRule = function(n) {
    this.renderer && this.renderer.insertRule(n);
  }, t.addRules = function(n, o) {
    var s = [];
    for (var i in n) {
      var a = this.addRule(i, n[i], o);
      a && s.push(a);
    }
    return s;
  }, t.getRule = function(n) {
    return this.rules.get(n);
  }, t.deleteRule = function(n) {
    var o = typeof n == "object" ? n : this.rules.get(n);
    return !o || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !o.renderable ? !1 : (this.rules.remove(o), this.attached && o.renderable && this.renderer ? this.renderer.deleteRule(o.renderable) : !0);
  }, t.indexOf = function(n) {
    return this.rules.indexOf(n);
  }, t.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, t.update = function() {
    var n;
    return (n = this.rules).update.apply(n, arguments), this;
  }, t.updateOne = function(n, o, s) {
    return this.rules.updateOne(n, o, s), this;
  }, t.toString = function(n) {
    return this.rules.toString(n);
  }, e;
})(), _y = /* @__PURE__ */ (function() {
  function e() {
    this.plugins = {
      internal: [],
      external: []
    }, this.registry = {};
  }
  var t = e.prototype;
  return t.onCreateRule = function(n, o, s) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var a = this.registry.onCreateRule[i](n, o, s);
      if (a) return a;
    }
    return null;
  }, t.onProcessRule = function(n) {
    if (!n.isProcessed) {
      for (var o = n.options.sheet, s = 0; s < this.registry.onProcessRule.length; s++)
        this.registry.onProcessRule[s](n, o);
      n.style && this.onProcessStyle(n.style, n, o), n.isProcessed = !0;
    }
  }, t.onProcessStyle = function(n, o, s) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++)
      o.style = this.registry.onProcessStyle[i](o.style, o, s);
  }, t.onProcessSheet = function(n) {
    for (var o = 0; o < this.registry.onProcessSheet.length; o++)
      this.registry.onProcessSheet[o](n);
  }, t.onUpdate = function(n, o, s, i) {
    for (var a = 0; a < this.registry.onUpdate.length; a++)
      this.registry.onUpdate[a](n, o, s, i);
  }, t.onChangeValue = function(n, o, s) {
    for (var i = n, a = 0; a < this.registry.onChangeValue.length; a++)
      i = this.registry.onChangeValue[a](i, o, s);
    return i;
  }, t.use = function(n, o) {
    o === void 0 && (o = {
      queue: "external"
    });
    var s = this.plugins[o.queue];
    s.indexOf(n) === -1 && (s.push(n), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(i, a) {
      for (var l in a)
        l in i ? i[l].push(a[l]) : process.env.NODE_ENV !== "production" && Tt(!1, '[JSS] Unknown hook "' + l + '".');
      return i;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    }));
  }, e;
})(), Py = /* @__PURE__ */ (function() {
  function e() {
    this.registry = [];
  }
  var t = e.prototype;
  return t.add = function(n) {
    var o = this.registry, s = n.options.index;
    if (o.indexOf(n) === -1) {
      if (o.length === 0 || s >= this.index) {
        o.push(n);
        return;
      }
      for (var i = 0; i < o.length; i++)
        if (o[i].options.index > s) {
          o.splice(i, 0, n);
          return;
        }
    }
  }, t.reset = function() {
    this.registry = [];
  }, t.remove = function(n) {
    var o = this.registry.indexOf(n);
    this.registry.splice(o, 1);
  }, t.toString = function(n) {
    for (var o = n === void 0 ? {} : n, s = o.attached, i = Xi(o, ["attached"]), a = zr(i), l = a.linebreak, u = "", f = 0; f < this.registry.length; f++) {
      var p = this.registry[f];
      s != null && p.attached !== s || (u && (u += l), u += p.toString(i));
    }
    return u;
  }, Ku(e, [{
    key: "index",
    /**
     * Current highest index number.
     */
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), e;
})(), hn = new Py(), li = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), ui = "2f1acc6c3a606b082e5eef5e54414ffb";
li[ui] == null && (li[ui] = 0);
var Vc = li[ui]++, ky = 1e10, Uc = function(t) {
  t === void 0 && (t = {});
  var r = 0, n = function(s, i) {
    r += 1, r > ky && process.env.NODE_ENV !== "production" && Tt(!1, "[JSS] You might have a memory leak. Rule counter is at " + r + ".");
    var a = "", l = "";
    return i && (i.options.classNamePrefix && (l = i.options.classNamePrefix), i.options.jss.id != null && (a = String(i.options.jss.id))), t.minify ? "" + (l || "c") + Vc + a + r : l + s.key + "-" + Vc + (a ? "-" + a : "") + "-" + r;
  };
  return n;
}, Qu = function(t) {
  var r;
  return function() {
    return r || (r = t()), r;
  };
}, Ay = function(t, r) {
  try {
    return t.attributeStyleMap ? t.attributeStyleMap.get(r) : t.style.getPropertyValue(r);
  } catch {
    return "";
  }
}, Ny = function(t, r, n) {
  try {
    var o = n;
    if (Array.isArray(n) && (o = dr(n)), t.attributeStyleMap)
      t.attributeStyleMap.set(r, o);
    else {
      var s = o ? o.indexOf("!important") : -1, i = s > -1 ? o.substr(0, s - 1) : o;
      t.style.setProperty(r, i, s > -1 ? "important" : "");
    }
  } catch {
    return !1;
  }
  return !0;
}, Iy = function(t, r) {
  try {
    t.attributeStyleMap ? t.attributeStyleMap.delete(r) : t.style.removeProperty(r);
  } catch (n) {
    process.env.NODE_ENV !== "production" && Tt(!1, '[JSS] DOMException "' + n.message + '" was thrown. Tried to remove property "' + r + '".');
  }
}, $y = function(t, r) {
  return t.selectorText = r, t.selectorText === r;
}, Zu = Qu(function() {
  return document.querySelector("head");
});
function My(e, t) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (n.attached && n.options.index > t.index && n.options.insertionPoint === t.insertionPoint)
      return n;
  }
  return null;
}
function Dy(e, t) {
  for (var r = e.length - 1; r >= 0; r--) {
    var n = e[r];
    if (n.attached && n.options.insertionPoint === t.insertionPoint)
      return n;
  }
  return null;
}
function jy(e) {
  for (var t = Zu(), r = 0; r < t.childNodes.length; r++) {
    var n = t.childNodes[r];
    if (n.nodeType === 8 && n.nodeValue.trim() === e)
      return n;
  }
  return null;
}
function Ly(e) {
  var t = hn.registry;
  if (t.length > 0) {
    var r = My(t, e);
    if (r && r.renderer)
      return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element
      };
    if (r = Dy(t, e), r && r.renderer)
      return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element.nextSibling
      };
  }
  var n = e.insertionPoint;
  if (n && typeof n == "string") {
    var o = jy(n);
    if (o)
      return {
        parent: o.parentNode,
        node: o.nextSibling
      };
    process.env.NODE_ENV !== "production" && Tt(!1, '[JSS] Insertion point "' + n + '" not found.');
  }
  return !1;
}
function By(e, t) {
  var r = t.insertionPoint, n = Ly(t);
  if (n !== !1 && n.parent) {
    n.parent.insertBefore(e, n.node);
    return;
  }
  if (r && typeof r.nodeType == "number") {
    var o = r, s = o.parentNode;
    s ? s.insertBefore(e, o.nextSibling) : process.env.NODE_ENV !== "production" && Tt(!1, "[JSS] Insertion point is not in the DOM.");
    return;
  }
  Zu().appendChild(e);
}
var Fy = Qu(function() {
  var e = document.querySelector('meta[property="csp-nonce"]');
  return e ? e.getAttribute("content") : null;
}), zc = function(t, r, n) {
  try {
    "insertRule" in t ? t.insertRule(r, n) : "appendRule" in t && t.appendRule(r);
  } catch (o) {
    return process.env.NODE_ENV !== "production" && Tt(!1, "[JSS] " + o.message), !1;
  }
  return t.cssRules[n];
}, Gc = function(t, r) {
  var n = t.cssRules.length;
  return r === void 0 || r > n ? n : r;
}, Vy = function() {
  var t = document.createElement("style");
  return t.textContent = `
`, t;
}, Uy = /* @__PURE__ */ (function() {
  function e(r) {
    this.getPropertyValue = Ay, this.setProperty = Ny, this.removeProperty = Iy, this.setSelector = $y, this.hasInsertedRules = !1, this.cssRules = [], r && hn.add(r), this.sheet = r;
    var n = this.sheet ? this.sheet.options : {}, o = n.media, s = n.meta, i = n.element;
    this.element = i || Vy(), this.element.setAttribute("data-jss", ""), o && this.element.setAttribute("media", o), s && this.element.setAttribute("data-meta", s);
    var a = Fy();
    a && this.element.setAttribute("nonce", a);
  }
  var t = e.prototype;
  return t.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      By(this.element, this.sheet.options);
      var n = !!(this.sheet && this.sheet.deployed);
      this.hasInsertedRules && n && (this.hasInsertedRules = !1, this.deploy());
    }
  }, t.detach = function() {
    if (this.sheet) {
      var n = this.element.parentNode;
      n && n.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
    }
  }, t.deploy = function() {
    var n = this.sheet;
    if (n) {
      if (n.options.link) {
        this.insertRules(n.rules);
        return;
      }
      this.element.textContent = `
` + n.toString() + `
`;
    }
  }, t.insertRules = function(n, o) {
    for (var s = 0; s < n.index.length; s++)
      this.insertRule(n.index[s], s, o);
  }, t.insertRule = function(n, o, s) {
    if (s === void 0 && (s = this.element.sheet), n.rules) {
      var i = n, a = s;
      if (n.type === "conditional" || n.type === "keyframes") {
        var l = Gc(s, o);
        if (a = zc(s, i.toString({
          children: !1
        }), l), a === !1)
          return !1;
        this.refCssRule(n, l, a);
      }
      return this.insertRules(i.rules, a), a;
    }
    var u = n.toString();
    if (!u) return !1;
    var f = Gc(s, o), p = zc(s, u, f);
    return p === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(n, f, p), p);
  }, t.refCssRule = function(n, o, s) {
    n.renderable = s, n.options.parent instanceof Xu && this.cssRules.splice(o, 0, s);
  }, t.deleteRule = function(n) {
    var o = this.element.sheet, s = this.indexOf(n);
    return s === -1 ? !1 : (o.deleteRule(s), this.cssRules.splice(s, 1), !0);
  }, t.indexOf = function(n) {
    return this.cssRules.indexOf(n);
  }, t.replaceRule = function(n, o) {
    var s = this.indexOf(n);
    return s === -1 ? !1 : (this.element.sheet.deleteRule(s), this.cssRules.splice(s, 1), this.insertRule(o, s));
  }, t.getRules = function() {
    return this.element.sheet.cssRules;
  }, e;
})(), zy = 0, Gy = /* @__PURE__ */ (function() {
  function e(r) {
    this.id = zy++, this.version = "10.10.0", this.plugins = new _y(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: Uc,
      Renderer: Nn ? Uy : null,
      plugins: []
    }, this.generateId = Uc({
      minify: !1
    });
    for (var n = 0; n < Bc.length; n++)
      this.plugins.use(Bc[n], {
        queue: "internal"
      });
    this.setup(r);
  }
  var t = e.prototype;
  return t.setup = function(n) {
    return n === void 0 && (n = {}), n.createGenerateId && (this.options.createGenerateId = n.createGenerateId), n.id && (this.options.id = De({}, this.options.id, n.id)), (n.createGenerateId || n.id) && (this.generateId = this.options.createGenerateId(this.options.id)), n.insertionPoint != null && (this.options.insertionPoint = n.insertionPoint), "Renderer" in n && (this.options.Renderer = n.Renderer), n.plugins && this.use.apply(this, n.plugins), this;
  }, t.createStyleSheet = function(n, o) {
    o === void 0 && (o = {});
    var s = o, i = s.index;
    typeof i != "number" && (i = hn.index === 0 ? 0 : hn.index + 1);
    var a = new Xu(n, De({}, o, {
      jss: this,
      generateId: o.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: i
    }));
    return this.plugins.onProcessSheet(a), a;
  }, t.removeStyleSheet = function(n) {
    return n.detach(), hn.remove(n), this;
  }, t.createRule = function(n, o, s) {
    if (o === void 0 && (o = {}), s === void 0 && (s = {}), typeof n == "object")
      return this.createRule(void 0, n, o);
    var i = De({}, s, {
      name: n,
      jss: this,
      Renderer: this.options.Renderer
    });
    i.generateId || (i.generateId = this.generateId), i.classes || (i.classes = {}), i.keyframes || (i.keyframes = {});
    var a = Qi(n, o, i);
    return a && this.plugins.onProcessRule(a), a;
  }, t.use = function() {
    for (var n = this, o = arguments.length, s = new Array(o), i = 0; i < o; i++)
      s[i] = arguments[i];
    return s.forEach(function(a) {
      n.plugins.use(a);
    }), this;
  }, e;
})(), ea = function(t) {
  return new Gy(t);
}, ta = typeof CSS == "object" && CSS != null && "number" in CSS;
function ef(e) {
  var t = null;
  for (var r in e) {
    var n = e[r], o = typeof n;
    if (o === "function")
      t || (t = {}), t[r] = n;
    else if (o === "object" && n !== null && !Array.isArray(n)) {
      var s = ef(n);
      s && (t || (t = {}), t[r] = s);
    }
  }
  return t;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
ea();
var tf = Date.now(), Os = "fnValues" + tf, _s = "fnStyle" + ++tf, Wy = function() {
  return {
    onCreateRule: function(r, n, o) {
      if (typeof n != "function") return null;
      var s = Qi(r, {}, o);
      return s[_s] = n, s;
    },
    onProcessStyle: function(r, n) {
      if (Os in n || _s in n) return r;
      var o = {};
      for (var s in r) {
        var i = r[s];
        typeof i == "function" && (delete r[s], o[s] = i);
      }
      return n[Os] = o, r;
    },
    onUpdate: function(r, n, o, s) {
      var i = n, a = i[_s];
      if (a && (i.style = a(r) || {}, process.env.NODE_ENV === "development")) {
        for (var l in i.style)
          if (typeof i.style[l] == "function") {
            process.env.NODE_ENV !== "production" && Tt(!1, "[JSS] Function values inside function rules are not supported.");
            break;
          }
      }
      var u = i[Os];
      if (u)
        for (var f in u)
          i.prop(f, u[f](r), s);
    }
  };
}, Yt = "@global", fi = "@global ", Hy = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "global", this.at = Yt, this.isProcessed = !1, this.key = r, this.options = o, this.rules = new es(De({}, o, {
      parent: this
    }));
    for (var s in n)
      this.rules.add(s, n[s]);
    this.rules.process();
  }
  var t = e.prototype;
  return t.getRule = function(n) {
    return this.rules.get(n);
  }, t.addRule = function(n, o, s) {
    var i = this.rules.add(n, o, s);
    return i && this.options.jss.plugins.onProcessRule(i), i;
  }, t.replaceRule = function(n, o, s) {
    var i = this.rules.replace(n, o, s);
    return i && this.options.jss.plugins.onProcessRule(i), i;
  }, t.indexOf = function(n) {
    return this.rules.indexOf(n);
  }, t.toString = function(n) {
    return this.rules.toString(n);
  }, e;
})(), qy = /* @__PURE__ */ (function() {
  function e(r, n, o) {
    this.type = "global", this.at = Yt, this.isProcessed = !1, this.key = r, this.options = o;
    var s = r.substr(fi.length);
    this.rule = o.jss.createRule(s, n, De({}, o, {
      parent: this
    }));
  }
  var t = e.prototype;
  return t.toString = function(n) {
    return this.rule ? this.rule.toString(n) : "";
  }, e;
})(), Yy = /\s*,\s*/g;
function rf(e, t) {
  for (var r = e.split(Yy), n = "", o = 0; o < r.length; o++)
    n += t + " " + r[o].trim(), r[o + 1] && (n += ", ");
  return n;
}
function Ky(e, t) {
  var r = e.options, n = e.style, o = n ? n[Yt] : null;
  if (o) {
    for (var s in o)
      t.addRule(s, o[s], De({}, r, {
        selector: rf(s, e.selector)
      }));
    delete n[Yt];
  }
}
function Jy(e, t) {
  var r = e.options, n = e.style;
  for (var o in n)
    if (!(o[0] !== "@" || o.substr(0, Yt.length) !== Yt)) {
      var s = rf(o.substr(Yt.length), e.selector);
      t.addRule(s, n[o], De({}, r, {
        selector: s
      })), delete n[o];
    }
}
function Xy() {
  function e(r, n, o) {
    if (!r) return null;
    if (r === Yt)
      return new Hy(r, n, o);
    if (r[0] === "@" && r.substr(0, fi.length) === fi)
      return new qy(r, n, o);
    var s = o.parent;
    return s && (s.type === "global" || s.options.parent && s.options.parent.type === "global") && (o.scoped = !1), !o.selector && o.scoped === !1 && (o.selector = r), null;
  }
  function t(r, n) {
    r.type !== "style" || !n || (Ky(r, n), Jy(r, n));
  }
  return {
    onCreateRule: e,
    onProcessRule: t
  };
}
var Wc = /\s*,\s*/g, Qy = /&/g, Zy = /\$([\w-]+)/g;
function ev() {
  function e(o, s) {
    return function(i, a) {
      var l = o.getRule(a) || s && s.getRule(a);
      return l ? l.selector : (process.env.NODE_ENV !== "production" && Tt(!1, '[JSS] Could not find the referenced rule "' + a + '" in "' + (o.options.meta || o.toString()) + '".'), a);
    };
  }
  function t(o, s) {
    for (var i = s.split(Wc), a = o.split(Wc), l = "", u = 0; u < i.length; u++)
      for (var f = i[u], p = 0; p < a.length; p++) {
        var g = a[p];
        l && (l += ", "), l += g.indexOf("&") !== -1 ? g.replace(Qy, f) : f + " " + g;
      }
    return l;
  }
  function r(o, s, i) {
    if (i) return De({}, i, {
      index: i.index + 1
    });
    var a = o.options.nestingLevel;
    a = a === void 0 ? 1 : a + 1;
    var l = De({}, o.options, {
      nestingLevel: a,
      index: s.indexOf(o) + 1
      // We don't need the parent name to be set options for chlid.
    });
    return delete l.name, l;
  }
  function n(o, s, i) {
    if (s.type !== "style") return o;
    var a = s, l = a.options.parent, u, f;
    for (var p in o) {
      var g = p.indexOf("&") !== -1, y = p[0] === "@";
      if (!(!g && !y)) {
        if (u = r(a, l, u), g) {
          var h = t(p, a.selector);
          f || (f = e(l, i)), h = h.replace(Zy, f);
          var d = a.key + "-" + p;
          "replaceRule" in l ? l.replaceRule(d, o[p], De({}, u, {
            selector: h
          })) : l.addRule(d, o[p], De({}, u, {
            selector: h
          }));
        } else y && l.addRule(p, {}, u).addRule(a.key, o[p], {
          selector: a.selector
        });
        delete o[p];
      }
    }
    return o;
  }
  return {
    onProcessStyle: n
  };
}
var tv = /[A-Z]/g, rv = /^ms-/, Ps = {};
function nv(e) {
  return "-" + e.toLowerCase();
}
function nf(e) {
  if (Ps.hasOwnProperty(e))
    return Ps[e];
  var t = e.replace(tv, nv);
  return Ps[e] = rv.test(t) ? "-" + t : t;
}
function Co(e) {
  var t = {};
  for (var r in e) {
    var n = r.indexOf("--") === 0 ? r : nf(r);
    t[n] = e[r];
  }
  return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(Co) : t.fallbacks = Co(e.fallbacks)), t;
}
function ov() {
  function e(r) {
    if (Array.isArray(r)) {
      for (var n = 0; n < r.length; n++)
        r[n] = Co(r[n]);
      return r;
    }
    return Co(r);
  }
  function t(r, n, o) {
    if (n.indexOf("--") === 0)
      return r;
    var s = nf(n);
    return n === s ? r : (o.prop(s, r), null);
  }
  return {
    onProcessStyle: e,
    onChangeValue: t
  };
}
var V = ta && CSS ? CSS.px : "px", qn = ta && CSS ? CSS.ms : "ms", Tr = ta && CSS ? CSS.percent : "%", sv = {
  // Animation properties
  "animation-delay": qn,
  "animation-duration": qn,
  // Background properties
  "background-position": V,
  "background-position-x": V,
  "background-position-y": V,
  "background-size": V,
  // Border Properties
  border: V,
  "border-bottom": V,
  "border-bottom-left-radius": V,
  "border-bottom-right-radius": V,
  "border-bottom-width": V,
  "border-left": V,
  "border-left-width": V,
  "border-radius": V,
  "border-right": V,
  "border-right-width": V,
  "border-top": V,
  "border-top-left-radius": V,
  "border-top-right-radius": V,
  "border-top-width": V,
  "border-width": V,
  "border-block": V,
  "border-block-end": V,
  "border-block-end-width": V,
  "border-block-start": V,
  "border-block-start-width": V,
  "border-block-width": V,
  "border-inline": V,
  "border-inline-end": V,
  "border-inline-end-width": V,
  "border-inline-start": V,
  "border-inline-start-width": V,
  "border-inline-width": V,
  "border-start-start-radius": V,
  "border-start-end-radius": V,
  "border-end-start-radius": V,
  "border-end-end-radius": V,
  // Margin properties
  margin: V,
  "margin-bottom": V,
  "margin-left": V,
  "margin-right": V,
  "margin-top": V,
  "margin-block": V,
  "margin-block-end": V,
  "margin-block-start": V,
  "margin-inline": V,
  "margin-inline-end": V,
  "margin-inline-start": V,
  // Padding properties
  padding: V,
  "padding-bottom": V,
  "padding-left": V,
  "padding-right": V,
  "padding-top": V,
  "padding-block": V,
  "padding-block-end": V,
  "padding-block-start": V,
  "padding-inline": V,
  "padding-inline-end": V,
  "padding-inline-start": V,
  // Mask properties
  "mask-position-x": V,
  "mask-position-y": V,
  "mask-size": V,
  // Width and height properties
  height: V,
  width: V,
  "min-height": V,
  "max-height": V,
  "min-width": V,
  "max-width": V,
  // Position properties
  bottom: V,
  left: V,
  top: V,
  right: V,
  inset: V,
  "inset-block": V,
  "inset-block-end": V,
  "inset-block-start": V,
  "inset-inline": V,
  "inset-inline-end": V,
  "inset-inline-start": V,
  // Shadow properties
  "box-shadow": V,
  "text-shadow": V,
  // Column properties
  "column-gap": V,
  "column-rule": V,
  "column-rule-width": V,
  "column-width": V,
  // Font and text properties
  "font-size": V,
  "font-size-delta": V,
  "letter-spacing": V,
  "text-decoration-thickness": V,
  "text-indent": V,
  "text-stroke": V,
  "text-stroke-width": V,
  "word-spacing": V,
  // Motion properties
  motion: V,
  "motion-offset": V,
  // Outline properties
  outline: V,
  "outline-offset": V,
  "outline-width": V,
  // Perspective properties
  perspective: V,
  "perspective-origin-x": Tr,
  "perspective-origin-y": Tr,
  // Transform properties
  "transform-origin": Tr,
  "transform-origin-x": Tr,
  "transform-origin-y": Tr,
  "transform-origin-z": Tr,
  // Transition properties
  "transition-delay": qn,
  "transition-duration": qn,
  // Alignment properties
  "vertical-align": V,
  "flex-basis": V,
  // Some random properties
  "shape-margin": V,
  size: V,
  gap: V,
  // Grid properties
  grid: V,
  "grid-gap": V,
  "row-gap": V,
  "grid-row-gap": V,
  "grid-column-gap": V,
  "grid-template-rows": V,
  "grid-template-columns": V,
  "grid-auto-rows": V,
  "grid-auto-columns": V,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  "box-shadow-x": V,
  "box-shadow-y": V,
  "box-shadow-blur": V,
  "box-shadow-spread": V,
  "font-line-height": V,
  "text-shadow-x": V,
  "text-shadow-y": V,
  "text-shadow-blur": V
};
function of(e) {
  var t = /(-[a-z])/g, r = function(i) {
    return i[1].toUpperCase();
  }, n = {};
  for (var o in e)
    n[o] = e[o], n[o.replace(t, r)] = e[o];
  return n;
}
var iv = of(sv);
function mn(e, t, r) {
  if (t == null) return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      t[n] = mn(e, t[n], r);
  else if (typeof t == "object")
    if (e === "fallbacks")
      for (var o in t)
        t[o] = mn(o, t[o], r);
    else
      for (var s in t)
        t[s] = mn(e + "-" + s, t[s], r);
  else if (typeof t == "number" && isNaN(t) === !1) {
    var i = r[e] || iv[e];
    return i && !(t === 0 && i === V) ? typeof i == "function" ? i(t).toString() : "" + t + i : t.toString();
  }
  return t;
}
function av(e) {
  e === void 0 && (e = {});
  var t = of(e);
  function r(o, s) {
    if (s.type !== "style") return o;
    for (var i in o)
      o[i] = mn(i, o[i], t);
    return o;
  }
  function n(o, s) {
    return mn(s, o, t);
  }
  return {
    onProcessStyle: r,
    onChangeValue: n
  };
}
function di(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cv(e) {
  if (Array.isArray(e)) return di(e);
}
function lv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function uv(e, t) {
  if (e) {
    if (typeof e == "string") return di(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? di(e, t) : void 0;
  }
}
function fv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dv(e) {
  return cv(e) || lv(e) || uv(e) || fv();
}
var cn = "", pi = "", sf = "", af = "", pv = Nn && "ontouchstart" in document.documentElement;
if (Nn) {
  var ks = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  }, hv = document.createElement("p"), As = hv.style, mv = "Transform";
  for (var Ns in ks)
    if (Ns + mv in As) {
      cn = Ns, pi = ks[Ns];
      break;
    }
  cn === "Webkit" && "msHyphens" in As && (cn = "ms", pi = ks.ms, af = "edge"), cn === "Webkit" && "-apple-trailing-word" in As && (sf = "apple");
}
var ue = {
  js: cn,
  css: pi,
  vendor: sf,
  browser: af,
  isTouch: pv
};
function gv(e) {
  return e[1] === "-" || ue.js === "ms" ? e : "@" + ue.css + "keyframes" + e.substr(10);
}
var yv = {
  noPrefill: ["appearance"],
  supportedProperty: function(t) {
    return t !== "appearance" ? !1 : ue.js === "ms" ? "-webkit-" + t : ue.css + t;
  }
}, vv = {
  noPrefill: ["color-adjust"],
  supportedProperty: function(t) {
    return t !== "color-adjust" ? !1 : ue.js === "Webkit" ? ue.css + "print-" + t : t;
  }
}, bv = /[-\s]+(.)?/g;
function Ev(e, t) {
  return t ? t.toUpperCase() : "";
}
function ra(e) {
  return e.replace(bv, Ev);
}
function Qt(e) {
  return ra("-" + e);
}
var Sv = {
  noPrefill: ["mask"],
  supportedProperty: function(t, r) {
    if (!/^mask/.test(t)) return !1;
    if (ue.js === "Webkit") {
      var n = "mask-image";
      if (ra(n) in r)
        return t;
      if (ue.js + Qt(n) in r)
        return ue.css + t;
    }
    return t;
  }
}, xv = {
  noPrefill: ["text-orientation"],
  supportedProperty: function(t) {
    return t !== "text-orientation" ? !1 : ue.vendor === "apple" && !ue.isTouch ? ue.css + t : t;
  }
}, Tv = {
  noPrefill: ["transform"],
  supportedProperty: function(t, r, n) {
    return t !== "transform" ? !1 : n.transform ? t : ue.css + t;
  }
}, Cv = {
  noPrefill: ["transition"],
  supportedProperty: function(t, r, n) {
    return t !== "transition" ? !1 : n.transition ? t : ue.css + t;
  }
}, Rv = {
  noPrefill: ["writing-mode"],
  supportedProperty: function(t) {
    return t !== "writing-mode" ? !1 : ue.js === "Webkit" || ue.js === "ms" && ue.browser !== "edge" ? ue.css + t : t;
  }
}, wv = {
  noPrefill: ["user-select"],
  supportedProperty: function(t) {
    return t !== "user-select" ? !1 : ue.js === "Moz" || ue.js === "ms" || ue.vendor === "apple" ? ue.css + t : t;
  }
}, Ov = {
  supportedProperty: function(t, r) {
    if (!/^break-/.test(t)) return !1;
    if (ue.js === "Webkit") {
      var n = "WebkitColumn" + Qt(t);
      return n in r ? ue.css + "column-" + t : !1;
    }
    if (ue.js === "Moz") {
      var o = "page" + Qt(t);
      return o in r ? "page-" + t : !1;
    }
    return !1;
  }
}, _v = {
  supportedProperty: function(t, r) {
    if (!/^(border|margin|padding)-inline/.test(t)) return !1;
    if (ue.js === "Moz") return t;
    var n = t.replace("-inline", "");
    return ue.js + Qt(n) in r ? ue.css + n : !1;
  }
}, Pv = {
  supportedProperty: function(t, r) {
    return ra(t) in r ? t : !1;
  }
}, kv = {
  supportedProperty: function(t, r) {
    var n = Qt(t);
    return t[0] === "-" || t[0] === "-" && t[1] === "-" ? t : ue.js + n in r ? ue.css + t : ue.js !== "Webkit" && "Webkit" + n in r ? "-webkit-" + t : !1;
  }
}, Av = {
  supportedProperty: function(t) {
    return t.substring(0, 11) !== "scroll-snap" ? !1 : ue.js === "ms" ? "" + ue.css + t : t;
  }
}, Nv = {
  supportedProperty: function(t) {
    return t !== "overscroll-behavior" ? !1 : ue.js === "ms" ? ue.css + "scroll-chaining" : t;
  }
}, Iv = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
  // 'align-self' is handled by 'align-self' plugin.
}, $v = {
  supportedProperty: function(t, r) {
    var n = Iv[t];
    return n && ue.js + Qt(n) in r ? ue.css + n : !1;
  }
}, cf = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
}, Mv = Object.keys(cf), Dv = function(t) {
  return ue.css + t;
}, jv = {
  supportedProperty: function(t, r, n) {
    var o = n.multiple;
    if (Mv.indexOf(t) > -1) {
      var s = cf[t];
      if (!Array.isArray(s))
        return ue.js + Qt(s) in r ? ue.css + s : !1;
      if (!o) return !1;
      for (var i = 0; i < s.length; i++)
        if (!(ue.js + Qt(s[0]) in r))
          return !1;
      return s.map(Dv);
    }
    return !1;
  }
}, lf = [yv, vv, Sv, xv, Tv, Cv, Rv, wv, Ov, _v, Pv, kv, Av, Nv, $v, jv], Hc = lf.filter(function(e) {
  return e.supportedProperty;
}).map(function(e) {
  return e.supportedProperty;
}), Lv = lf.filter(function(e) {
  return e.noPrefill;
}).reduce(function(e, t) {
  return e.push.apply(e, dv(t.noPrefill)), e;
}, []), ln, cr = {};
if (Nn) {
  ln = document.createElement("p");
  var Is = window.getComputedStyle(document.documentElement, "");
  for (var $s in Is)
    isNaN($s) || (cr[Is[$s]] = Is[$s]);
  Lv.forEach(function(e) {
    return delete cr[e];
  });
}
function hi(e, t) {
  if (t === void 0 && (t = {}), !ln) return e;
  if (process.env.NODE_ENV !== "benchmark" && cr[e] != null)
    return cr[e];
  (e === "transition" || e === "transform") && (t[e] = e in ln.style);
  for (var r = 0; r < Hc.length && (cr[e] = Hc[r](e, ln.style, t), !cr[e]); r++)
    ;
  try {
    ln.style[e] = "";
  } catch {
    return !1;
  }
  return cr[e];
}
var Cr = {}, Bv = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
}, Fv = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g, Ht;
function Vv(e, t, r) {
  if (t === "var") return "var";
  if (t === "all") return "all";
  if (r === "all") return ", all";
  var n = t ? hi(t) : ", " + hi(r);
  return n || t || r;
}
Nn && (Ht = document.createElement("p"));
function qc(e, t) {
  var r = t;
  if (!Ht || e === "content") return t;
  if (typeof r != "string" || !isNaN(parseInt(r, 10)))
    return r;
  var n = e + r;
  if (process.env.NODE_ENV !== "benchmark" && Cr[n] != null)
    return Cr[n];
  try {
    Ht.style[e] = r;
  } catch {
    return Cr[n] = !1, !1;
  }
  if (Bv[e])
    r = r.replace(Fv, Vv);
  else if (Ht.style[e] === "" && (r = ue.css + r, r === "-ms-flex" && (Ht.style[e] = "-ms-flexbox"), Ht.style[e] = r, Ht.style[e] === ""))
    return Cr[n] = !1, !1;
  return Ht.style[e] = "", Cr[n] = r, Cr[n];
}
function Uv() {
  function e(o) {
    if (o.type === "keyframes") {
      var s = o;
      s.at = gv(s.at);
    }
  }
  function t(o) {
    for (var s in o) {
      var i = o[s];
      if (s === "fallbacks" && Array.isArray(i)) {
        o[s] = i.map(t);
        continue;
      }
      var a = !1, l = hi(s);
      l && l !== s && (a = !0);
      var u = !1, f = qc(l, dr(i));
      f && f !== i && (u = !0), (a || u) && (a && delete o[s], o[l || s] = f || i);
    }
    return o;
  }
  function r(o, s) {
    return s.type !== "style" ? o : t(o);
  }
  function n(o, s) {
    return qc(s, dr(o)) || o;
  }
  return {
    onProcessRule: e,
    onProcessStyle: r,
    onChangeValue: n
  };
}
function zv() {
  var e = function(r, n) {
    return r.length === n.length ? r > n ? 1 : -1 : r.length - n.length;
  };
  return {
    onProcessStyle: function(r, n) {
      if (n.type !== "style") return r;
      for (var o = {}, s = Object.keys(r).sort(e), i = 0; i < s.length; i++)
        o[s[i]] = r[s[i]];
      return o;
    }
  };
}
function uf() {
  return {
    plugins: [
      Wy(),
      Xy(),
      ev(),
      ov(),
      av(),
      // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window > "u" ? null : Uv(),
      zv()
    ]
  };
}
function ff(e = {}) {
  const {
    baseClasses: t,
    newClasses: r,
    Component: n
  } = e;
  if (!r)
    return t;
  const o = {
    ...t
  };
  return process.env.NODE_ENV !== "production" && typeof r == "string" ? (console.error([`MUI: The value \`${r}\` provided to the classes prop of ${kr(n)} is incorrect.`, "You might want to use the className prop instead."].join(`
`)), t) : (Object.keys(r).forEach((s) => {
    process.env.NODE_ENV !== "production" && (!t[s] && r[s] && console.error([`MUI: The key \`${s}\` provided to the classes prop is not implemented in ${kr(n)}.`, `You can only override one of the following: ${Object.keys(t).join(",")}.`].join(`
`)), r[s] && typeof r[s] != "string" && console.error([`MUI: The key \`${s}\` provided to the classes prop is not valid for ${kr(n)}.`, `You need to provide a non empty string instead of: ${r[s]}.`].join(`
`))), r[s] && (o[s] = `${t[s]} ${r[s]}`);
  }), o);
}
const Pr = {
  set: (e, t, r, n) => {
    let o = e.get(t);
    o || (o = /* @__PURE__ */ new Map(), e.set(t, o)), o.set(r, n);
  },
  get: (e, t, r) => {
    const n = e.get(t);
    return n ? n.get(r) : void 0;
  },
  delete: (e, t, r) => {
    e.get(t).delete(r);
  }
};
function df() {
  const e = tg();
  return e?.$$material ?? e;
}
const Gv = ea(uf()), Wv = ey(), Hv = /* @__PURE__ */ new Map(), qv = {
  disableGeneration: !1,
  generateClassName: Wv,
  jss: Gv,
  sheetsCache: null,
  sheetsManager: Hv,
  sheetsRegistry: null
}, Ro = /* @__PURE__ */ _.createContext(qv);
process.env.NODE_ENV !== "production" && (Ro.displayName = "StylesContext");
let Yn;
function mi(e) {
  const {
    children: t,
    injectFirst: r = !1,
    disableGeneration: n = !1,
    ...o
  } = e, s = _.useContext(Ro), {
    generateClassName: i,
    jss: a,
    serverGenerateClassName: l,
    sheetsCache: u,
    sheetsManager: f,
    sheetsRegistry: p
  } = {
    ...s,
    ...o
  };
  process.env.NODE_ENV !== "production" && r && o.jss && console.error("MUI: You cannot use the jss and injectFirst props at the same time.");
  const g = _.useMemo(() => {
    const y = {
      disableGeneration: n,
      generateClassName: i,
      jss: a,
      serverGenerateClassName: l,
      sheetsCache: u,
      sheetsManager: f,
      sheetsRegistry: p
    };
    if (process.env.NODE_ENV !== "production" && typeof window > "u" && !y.sheetsManager && console.error("MUI: You need to use the ServerStyleSheets API when rendering on the server."), process.env.NODE_ENV !== "production" && y.jss.options.insertionPoint && r && console.error("MUI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time."), !y.jss.options.insertionPoint && r && typeof window < "u") {
      if (!Yn) {
        const h = document.head;
        Yn = document.createComment("mui-inject-first"), h.insertBefore(Yn, h.firstChild);
      }
      y.jss = ea({
        plugins: uf().plugins,
        insertionPoint: Yn
      });
    }
    return y;
  }, [r, n, i, a, l, u, f, p]);
  return /* @__PURE__ */ X.jsx(Ro.Provider, {
    value: g,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  /**
   * Your component tree.
   */
  children: c.node,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: c.bool,
  /**
   * JSS's class name generator.
   */
  generateClassName: c.func,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: c.bool,
  /**
   * JSS's instance.
   */
  jss: c.object,
  /**
   * @ignore
   */
  serverGenerateClassName: c.func,
  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: c.object,
  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: c.object,
  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: c.object
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (mi.propTypes = Ui(mi.propTypes));
let Ms = -1e9;
function Yv() {
  return Ms += 1, process.env.NODE_ENV !== "production" && Ms >= 0 && console.warn(["MUI: You might have a memory leak.", "The indexCounter is not supposed to grow that much."].join(`
`)), Ms;
}
function Yc(e) {
  return e.length === 0;
}
function Kv(e) {
  const {
    variant: t,
    ...r
  } = e;
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += Yc(n) ? e[o] : me(e[o]) : n += `${Yc(n) ? o : me(o)}${me(e[o].toString())}`;
  }), n;
}
const pf = {};
function Jv(e) {
  const t = typeof e == "function";
  return process.env.NODE_ENV !== "production" && typeof e != "object" && !t && console.error(["MUI: The `styles` argument provided is invalid.", "You need to provide a function generating the styles or a styles object."].join(`
`)), {
    create: (r, n) => {
      let o;
      try {
        o = t ? e(r) : e;
      } catch (l) {
        throw process.env.NODE_ENV !== "production" && t === !0 && r === pf && console.error(["MUI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`)), l;
      }
      if (!n || !r.components || !r.components[n] || !r.components[n].styleOverrides && !r.components[n].variants)
        return o;
      const s = r.components[n].styleOverrides || {}, i = r.components[n].variants || [], a = {
        ...o
      };
      return Object.keys(s).forEach((l) => {
        process.env.NODE_ENV !== "production" && (a[l] || console.warn(["MUI: You are trying to override a style that does not exist.", `Fix the \`${l}\` key of \`theme.components.${n}.styleOverrides\`.`, "", `If you intentionally wanted to add a new key, please use the theme.components[${n}].variants option.`].join(`
`))), a[l] = et(a[l] || {}, s[l]);
      }), i.forEach((l) => {
        const u = Kv(l.props);
        a[u] = et(a[u] || {}, l.style);
      }), a;
    },
    options: {}
  };
}
function Xv({
  state: e,
  stylesOptions: t
}, r, n) {
  if (t.disableGeneration)
    return r || {};
  e.cacheClasses || (e.cacheClasses = {
    // Cache for the finalized classes value.
    value: null,
    // Cache for the last used classes prop pointer.
    lastProp: null,
    // Cache for the last used rendered classes pointer.
    lastJSS: {}
  });
  let o = !1;
  return e.classes !== e.cacheClasses.lastJSS && (e.cacheClasses.lastJSS = e.classes, o = !0), r !== e.cacheClasses.lastProp && (e.cacheClasses.lastProp = r, o = !0), o && (e.cacheClasses.value = ff({
    baseClasses: e.cacheClasses.lastJSS,
    newClasses: r,
    Component: n
  })), e.cacheClasses.value;
}
function Qv({
  state: e,
  theme: t,
  stylesOptions: r,
  stylesCreator: n,
  name: o
}, s) {
  if (r.disableGeneration)
    return;
  let i = Pr.get(r.sheetsManager, n, t);
  i || (i = {
    refs: 0,
    staticSheet: null,
    dynamicStyles: null
  }, Pr.set(r.sheetsManager, n, t, i));
  const a = {
    ...n.options,
    ...r,
    theme: t,
    flip: typeof r.flip == "boolean" ? r.flip : t.direction === "rtl"
  };
  a.generateId = a.serverGenerateClassName || a.generateClassName;
  const l = r.sheetsRegistry;
  if (i.refs === 0) {
    let u;
    r.sheetsCache && (u = Pr.get(r.sheetsCache, n, t));
    const f = n.create(t, o);
    u || (u = r.jss.createStyleSheet(f, {
      link: !1,
      ...a
    }), u.attach(), r.sheetsCache && Pr.set(r.sheetsCache, n, t, u)), l && l.add(u), i.staticSheet = u, i.dynamicStyles = ef(f);
  }
  if (i.dynamicStyles) {
    const u = r.jss.createStyleSheet(i.dynamicStyles, {
      link: !0,
      ...a
    });
    u.update(s), u.attach(), e.dynamicSheet = u, e.classes = ff({
      baseClasses: i.staticSheet.classes,
      newClasses: u.classes
    }), l && l.add(u);
  } else
    e.classes = i.staticSheet.classes;
  i.refs += 1;
}
function Zv({
  state: e
}, t) {
  e.dynamicSheet && e.dynamicSheet.update(t);
}
function eb({
  state: e,
  theme: t,
  stylesOptions: r,
  stylesCreator: n
}) {
  if (r.disableGeneration)
    return;
  const o = Pr.get(r.sheetsManager, n, t);
  o.refs -= 1;
  const s = r.sheetsRegistry;
  o.refs === 0 && (Pr.delete(r.sheetsManager, n, t), r.jss.removeStyleSheet(o.staticSheet), s && s.remove(o.staticSheet)), e.dynamicSheet && (r.jss.removeStyleSheet(e.dynamicSheet), s && s.remove(e.dynamicSheet));
}
function tb(e, t) {
  const r = _.useRef([]);
  let n;
  const o = _.useMemo(() => ({}), t);
  r.current !== o && (r.current = o, n = e()), _.useEffect(
    () => () => {
      n && n();
    },
    [o]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
}
function We(e, t = {}) {
  const {
    // alias for classNamePrefix, if provided will listen to theme (required for theme.components[name].styleOverrides)
    name: r,
    // Help with debuggability.
    classNamePrefix: n,
    Component: o,
    defaultTheme: s = pf,
    ...i
  } = t, a = Jv(e), l = r || n || "makeStyles";
  return a.options = {
    index: Yv(),
    name: r,
    meta: l,
    classNamePrefix: l
  }, (f = {}) => {
    const p = df() || s, g = {
      ..._.useContext(Ro),
      ...i
    }, y = _.useRef(), h = _.useRef();
    tb(() => {
      const S = {
        name: r,
        state: {},
        stylesCreator: a,
        stylesOptions: g,
        theme: p
      };
      return Qv(S, f), h.current = !1, y.current = S, () => {
        eb(S);
      };
    }, [p, a]), _.useEffect(() => {
      h.current && Zv(y.current, f), h.current = !0;
    });
    const d = Xv(y.current, f.classes, o);
    return process.env.NODE_ENV !== "production" && _.useDebugValue(d), process.env.NODE_ENV !== "production" && r && ["MuiAvatar", "MuiBadge", "MuiButton", "MuiButtonGroup", "MuiChip", "MuiDivider", "MuiFab", "MuiPaper", "MuiToolbar", "MuiTypography", "MuiAlert", "MuiPagination", "MuiPaginationItem", "MuiSkeleton", "MuiTimelineDot"].includes(r) && f.variant && !d[f.variant] && console.error([`MUI: You are using a variant value \`${f.variant}\` for which you didn't define styles.`, "Please create a new variant matcher in your theme for this variant. To learn more about matchers visit https://mui.com/r/custom-component-variants."].join(`
`)), d;
  };
}
const hf = (e, t = {}) => (r) => {
  const {
    defaultTheme: n,
    withTheme: o = !1,
    name: s,
    ...i
  } = t;
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(["You are calling withStyles(styles)(Component) with an undefined component.", "You may have forgotten to import it."].join(`
`));
  let a = s;
  if (process.env.NODE_ENV !== "production" && !s) {
    const f = kr(r);
    f !== void 0 && (a = f);
  }
  const l = We(e, {
    defaultTheme: n,
    Component: r,
    name: s || r.displayName,
    classNamePrefix: a,
    ...i
  }), u = /* @__PURE__ */ _.forwardRef(function(p, g) {
    const {
      classes: y,
      ...h
    } = p, d = l({
      ...r.defaultProps,
      ...p
    });
    let S, T = h;
    return (typeof s == "string" || o) && (S = df() || n, s && (T = ty({
      theme: S,
      name: s,
      props: h
    })), o && !T.theme && (T.theme = S)), /* @__PURE__ */ X.jsx(r, {
      ref: g,
      classes: d,
      ...T
    });
  });
  return process.env.NODE_ENV !== "production" && (u.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: c.object
  }), process.env.NODE_ENV !== "production" && (u.displayName = `WithStyles(${kr(r)})`), th(u, r), process.env.NODE_ENV !== "production" && (u.Naked = r, u.options = t, u.useStyles = l), u;
};
var co = { exports: {} }, rb = co.exports, Kc;
function nb() {
  return Kc || (Kc = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(rb, (function() {
      var r = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", l = "hour", u = "day", f = "week", p = "month", g = "quarter", y = "year", h = "date", d = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, A = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(M) {
        var w = ["th", "st", "nd", "rd"], b = M % 100;
        return "[" + M + (w[(b - 20) % 10] || w[b] || w[0]) + "]";
      } }, C = function(M, w, b) {
        var P = String(M);
        return !P || P.length >= w ? M : "" + Array(w + 1 - P.length).join(b) + M;
      }, x = { s: C, z: function(M) {
        var w = -M.utcOffset(), b = Math.abs(w), P = Math.floor(b / 60), N = b % 60;
        return (w <= 0 ? "+" : "-") + C(P, 2, "0") + ":" + C(N, 2, "0");
      }, m: function M(w, b) {
        if (w.date() < b.date()) return -M(b, w);
        var P = 12 * (b.year() - w.year()) + (b.month() - w.month()), N = w.clone().add(P, p), L = b - N < 0, O = w.clone().add(P + (L ? -1 : 1), p);
        return +(-(P + (b - N) / (L ? N - O : O - N)) || 0);
      }, a: function(M) {
        return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
      }, p: function(M) {
        return { M: p, y, w: f, d: u, D: h, h: l, m: a, s: i, ms: s, Q: g }[M] || String(M || "").toLowerCase().replace(/s$/, "");
      }, u: function(M) {
        return M === void 0;
      } }, v = "en", I = {};
      I[v] = A;
      var D = "$isDayjsObject", z = function(M) {
        return M instanceof U || !(!M || !M[D]);
      }, W = function M(w, b, P) {
        var N;
        if (!w) return v;
        if (typeof w == "string") {
          var L = w.toLowerCase();
          I[L] && (N = L), b && (I[L] = b, N = L);
          var O = w.split("-");
          if (!N && O.length > 1) return M(O[0]);
        } else {
          var B = w.name;
          I[B] = w, N = B;
        }
        return !P && N && (v = N), N || !P && v;
      }, m = function(M, w) {
        if (z(M)) return M.clone();
        var b = typeof w == "object" ? w : {};
        return b.date = M, b.args = arguments, new U(b);
      }, $ = x;
      $.l = W, $.i = z, $.w = function(M, w) {
        return m(M, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
      };
      var U = (function() {
        function M(b) {
          this.$L = W(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[D] = !0;
        }
        var w = M.prototype;
        return w.parse = function(b) {
          this.$d = (function(P) {
            var N = P.date, L = P.utc;
            if (N === null) return /* @__PURE__ */ new Date(NaN);
            if ($.u(N)) return /* @__PURE__ */ new Date();
            if (N instanceof Date) return new Date(N);
            if (typeof N == "string" && !/Z$/i.test(N)) {
              var O = N.match(S);
              if (O) {
                var B = O[2] - 1 || 0, K = (O[7] || "0").substring(0, 3);
                return L ? new Date(Date.UTC(O[1], B, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, K)) : new Date(O[1], B, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, K);
              }
            }
            return new Date(N);
          })(b), this.init();
        }, w.init = function() {
          var b = this.$d;
          this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
        }, w.$utils = function() {
          return $;
        }, w.isValid = function() {
          return this.$d.toString() !== d;
        }, w.isSame = function(b, P) {
          var N = m(b);
          return this.startOf(P) <= N && N <= this.endOf(P);
        }, w.isAfter = function(b, P) {
          return m(b) < this.startOf(P);
        }, w.isBefore = function(b, P) {
          return this.endOf(P) < m(b);
        }, w.$g = function(b, P, N) {
          return $.u(b) ? this[P] : this.set(N, b);
        }, w.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, w.valueOf = function() {
          return this.$d.getTime();
        }, w.startOf = function(b, P) {
          var N = this, L = !!$.u(P) || P, O = $.p(b), B = function(oe, Y) {
            var te = $.w(N.$u ? Date.UTC(N.$y, Y, oe) : new Date(N.$y, Y, oe), N);
            return L ? te : te.endOf(u);
          }, K = function(oe, Y) {
            return $.w(N.toDate()[oe].apply(N.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), N);
          }, J = this.$W, q = this.$M, Q = this.$D, re = "set" + (this.$u ? "UTC" : "");
          switch (O) {
            case y:
              return L ? B(1, 0) : B(31, 11);
            case p:
              return L ? B(1, q) : B(0, q + 1);
            case f:
              var ee = this.$locale().weekStart || 0, ne = (J < ee ? J + 7 : J) - ee;
              return B(L ? Q - ne : Q + (6 - ne), q);
            case u:
            case h:
              return K(re + "Hours", 0);
            case l:
              return K(re + "Minutes", 1);
            case a:
              return K(re + "Seconds", 2);
            case i:
              return K(re + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, w.endOf = function(b) {
          return this.startOf(b, !1);
        }, w.$set = function(b, P) {
          var N, L = $.p(b), O = "set" + (this.$u ? "UTC" : ""), B = (N = {}, N[u] = O + "Date", N[h] = O + "Date", N[p] = O + "Month", N[y] = O + "FullYear", N[l] = O + "Hours", N[a] = O + "Minutes", N[i] = O + "Seconds", N[s] = O + "Milliseconds", N)[L], K = L === u ? this.$D + (P - this.$W) : P;
          if (L === p || L === y) {
            var J = this.clone().set(h, 1);
            J.$d[B](K), J.init(), this.$d = J.set(h, Math.min(this.$D, J.daysInMonth())).$d;
          } else B && this.$d[B](K);
          return this.init(), this;
        }, w.set = function(b, P) {
          return this.clone().$set(b, P);
        }, w.get = function(b) {
          return this[$.p(b)]();
        }, w.add = function(b, P) {
          var N, L = this;
          b = Number(b);
          var O = $.p(P), B = function(q) {
            var Q = m(L);
            return $.w(Q.date(Q.date() + Math.round(q * b)), L);
          };
          if (O === p) return this.set(p, this.$M + b);
          if (O === y) return this.set(y, this.$y + b);
          if (O === u) return B(1);
          if (O === f) return B(7);
          var K = (N = {}, N[a] = n, N[l] = o, N[i] = r, N)[O] || 1, J = this.$d.getTime() + b * K;
          return $.w(J, this);
        }, w.subtract = function(b, P) {
          return this.add(-1 * b, P);
        }, w.format = function(b) {
          var P = this, N = this.$locale();
          if (!this.isValid()) return N.invalidDate || d;
          var L = b || "YYYY-MM-DDTHH:mm:ssZ", O = $.z(this), B = this.$H, K = this.$m, J = this.$M, q = N.weekdays, Q = N.months, re = N.meridiem, ee = function(Y, te, k, fe) {
            return Y && (Y[te] || Y(P, L)) || k[te].slice(0, fe);
          }, ne = function(Y) {
            return $.s(B % 12 || 12, Y, "0");
          }, oe = re || function(Y, te, k) {
            var fe = Y < 12 ? "AM" : "PM";
            return k ? fe.toLowerCase() : fe;
          };
          return L.replace(T, (function(Y, te) {
            return te || (function(k) {
              switch (k) {
                case "YY":
                  return String(P.$y).slice(-2);
                case "YYYY":
                  return $.s(P.$y, 4, "0");
                case "M":
                  return J + 1;
                case "MM":
                  return $.s(J + 1, 2, "0");
                case "MMM":
                  return ee(N.monthsShort, J, Q, 3);
                case "MMMM":
                  return ee(Q, J);
                case "D":
                  return P.$D;
                case "DD":
                  return $.s(P.$D, 2, "0");
                case "d":
                  return String(P.$W);
                case "dd":
                  return ee(N.weekdaysMin, P.$W, q, 2);
                case "ddd":
                  return ee(N.weekdaysShort, P.$W, q, 3);
                case "dddd":
                  return q[P.$W];
                case "H":
                  return String(B);
                case "HH":
                  return $.s(B, 2, "0");
                case "h":
                  return ne(1);
                case "hh":
                  return ne(2);
                case "a":
                  return oe(B, K, !0);
                case "A":
                  return oe(B, K, !1);
                case "m":
                  return String(K);
                case "mm":
                  return $.s(K, 2, "0");
                case "s":
                  return String(P.$s);
                case "ss":
                  return $.s(P.$s, 2, "0");
                case "SSS":
                  return $.s(P.$ms, 3, "0");
                case "Z":
                  return O;
              }
              return null;
            })(Y) || O.replace(":", "");
          }));
        }, w.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, w.diff = function(b, P, N) {
          var L, O = this, B = $.p(P), K = m(b), J = (K.utcOffset() - this.utcOffset()) * n, q = this - K, Q = function() {
            return $.m(O, K);
          };
          switch (B) {
            case y:
              L = Q() / 12;
              break;
            case p:
              L = Q();
              break;
            case g:
              L = Q() / 3;
              break;
            case f:
              L = (q - J) / 6048e5;
              break;
            case u:
              L = (q - J) / 864e5;
              break;
            case l:
              L = q / o;
              break;
            case a:
              L = q / n;
              break;
            case i:
              L = q / r;
              break;
            default:
              L = q;
          }
          return N ? L : $.a(L);
        }, w.daysInMonth = function() {
          return this.endOf(p).$D;
        }, w.$locale = function() {
          return I[this.$L];
        }, w.locale = function(b, P) {
          if (!b) return this.$L;
          var N = this.clone(), L = W(b, P, !0);
          return L && (N.$L = L), N;
        }, w.clone = function() {
          return $.w(this.$d, this);
        }, w.toDate = function() {
          return new Date(this.valueOf());
        }, w.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, w.toISOString = function() {
          return this.$d.toISOString();
        }, w.toString = function() {
          return this.$d.toUTCString();
        }, M;
      })(), G = U.prototype;
      return m.prototype = G, [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", u], ["$M", p], ["$y", y], ["$D", h]].forEach((function(M) {
        G[M[1]] = function(w) {
          return this.$g(w, M[0], M[1]);
        };
      })), m.extend = function(M, w) {
        return M.$i || (M(w, U, m), M.$i = !0), m;
      }, m.locale = W, m.isDayjs = z, m.unix = function(M) {
        return m(1e3 * M);
      }, m.en = I[v], m.Ls = I, m.p = {}, m;
    }));
  })(co)), co.exports;
}
var ob = nb();
const Or = /* @__PURE__ */ Di(ob);
function lo(e) {
  return e == null || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim().length === 0;
}
function wo(e, t = "DD.MM.YYYY HH:mm") {
  return typeof e > "u" ? null : (typeof e == "string" && (e = new Date(e)), Or().add(-1, "days").startOf("day").isAfter(e) ? Or(e).format(t) : Or().startOf("day").isAfter(e) ? `Вчера в ${Or(e).format("HH:mm")}` : Or(e).format("HH:mm"));
}
function sb(e) {
  const t = e.split("$"), [r, n, o, s] = t;
  return {
    date: r,
    userId: n,
    size: o,
    name: s
  };
}
function ib(e) {
  const t = e.lastIndexOf(".");
  return t === -1 ? {
    name: e,
    ext: ""
  } : {
    name: e.slice(0, t),
    ext: e.slice(t + 1)
  };
}
const Ir = (e) => e ? e.groupId ? `group:${e.groupId}` : `user:${e.userId}` : null, mf = (e) => e.groupId ? e.name : e.username, nr = (e) => "groupId" in e, ab = (e) => Object.values(e).reduce((t, r) => {
  const n = r && Array.isArray(r.messages) ? r.messages.length : 0;
  return t + n;
}, 0), gf = (e, t) => {
  const r = Array.isArray(e.messages) && e.messages.length > 0, n = Array.isArray(t.messages) && t.messages.length > 0;
  if (r && n && t.messages != null && e.messages != null) {
    const o = t.messages[t.messages.length - 1].cdate != null ? new Date(t.messages[t.messages.length - 1].cdate).getTime() : (/* @__PURE__ */ new Date()).getTime(), s = e.messages[e.messages.length - 1].cdate != null ? new Date(e.messages[e.messages.length - 1].cdate).getTime() : (/* @__PURE__ */ new Date()).getTime() - 1;
    return o - s;
  }
  return r ? -1 : 1;
}, Jc = (e) => {
  const t = window.location.search;
  return new URLSearchParams(t).get(e);
}, Zt = (e, t, r) => t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e, cb = We(
  (e) => ({
    typingText: {
      paddingLeft: e.spacing(0.5)
    },
    typingDot: {
      display: "inline-block",
      verticalAlign: "middle",
      width: 4,
      height: 4,
      margin: "0px 2px",
      background: e.palette.primary.main,
      borderRadius: "50%",
      opacity: "0",
      animation: "$loadingFade 1s infinite",
      "&:nth-child(1)": {
        animationDelay: "0s"
      },
      "&:nth-child(2)": {
        animationDelay: "0.2s"
      },
      "&:nth-child(3)": {
        animationDelay: "0.4s"
      }
    },
    "@keyframes loadingFade": {
      "0%": {
        opacity: 0
      },
      "50%": {
        opacity: 0.8
      },
      "100%": {
        opacity: 0
      }
    }
  })
), lb = (e) => {
  const t = cb();
  return /* @__PURE__ */ se(st, { color: "primary", variant: "body2", component: "span", children: [
    /* @__PURE__ */ E("span", { className: t.typingDot }),
    /* @__PURE__ */ E("span", { className: t.typingDot }),
    /* @__PURE__ */ E("span", { className: t.typingDot }),
    /* @__PURE__ */ E("span", { className: t.typingText, children: e.message })
  ] });
}, yf = (e) => {
  const { t } = lt();
  return e.isTyping ? /* @__PURE__ */ E(lb, { message: t("CHAT.STATUS.TYPING") }) : e.contact.online === 1 ? /* @__PURE__ */ E(st, { variant: "body2", color: "primary", component: "span", children: t("CHAT.STATUS.ONLINE") }) : /* @__PURE__ */ E(st, { variant: "body2", color: "textSecondary", component: "span", children: t("CHAT.STATUS.OFFLINE") });
}, ub = We(() => ({
  star: {
    fontSize: "0.85rem",
    verticalAlign: "middle"
  }
})), vf = (e) => {
  const t = ub(), { apiUrl: r, contacts: n, owner: o, onContactClick: s, ...i } = e;
  return /* @__PURE__ */ E(zl, { ...i, "aria-label": "contacts", children: n.map((a) => /* @__PURE__ */ se(
    Ul,
    {
      onClick: () => s && s(a),
      children: [
        /* @__PURE__ */ E(Fl, { children: /* @__PURE__ */ E(
          Vt,
          {
            alt: a.username,
            src: a.avatar ? Zt(r, a.avatar) : ""
          }
        ) }),
        /* @__PURE__ */ E(
          Vl,
          {
            primary: /* @__PURE__ */ se("span", { children: [
              a.username,
              " ",
              o === a.userId && /* @__PURE__ */ E(Qg, { className: t.star, color: "primary" })
            ] }),
            secondary: /* @__PURE__ */ E(yf, { contact: a, isTyping: !1 })
          }
        )
      ]
    },
    a.userId
  )) });
}, fb = (e) => {
  const { onClose: t, open: r, apiUrl: n, contacts: o } = e, { t: s } = lt(), i = () => {
    t();
  }, a = (l) => {
    t(l);
  };
  return /* @__PURE__ */ se(
    Gl,
    {
      onClose: i,
      "aria-labelledby": "add-contact-title",
      open: r,
      children: [
        /* @__PURE__ */ E(Zd, { id: "switch-operator-title", children: s("CHAT.ADD_CONTACT") }),
        /* @__PURE__ */ E(
          vf,
          {
            apiUrl: n,
            contacts: o,
            onContactClick: a
          }
        )
      ]
    }
  );
};
function db(e, t, r) {
  const n = new RegExp("(" + t + "=)[^&]+");
  return e.replace(n, "$1" + r);
}
const pb = (e) => e === "ru" ? "rus" : e === "fr" ? "fra" : e === "en" ? "eng" : "", hb = We(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  }
})), mb = ({
  conference: e,
  onClose: t,
  langCode: r = "rus"
}) => {
  const n = hb(), o = ie.useRef(null);
  let s = "";
  e && e.url && (s = r ? db(e.url, "lang", pb(r)) : e.url);
  const i = [
    "connectionFail",
    "loginFail",
    "callFail",
    "hangUp",
    "remoteHangUp",
    "logout",
    "connectionClosed"
  ], a = e ? e.id : void 0;
  return Ke(() => {
    const l = ({ source: u, data: f }) => {
      const p = o.current ? o.current.contentWindow : null;
      if (p && u === p) {
        const { type: g } = f;
        i.includes(g) && t(e);
      }
    };
    return window.addEventListener("message", l), () => {
      window.removeEventListener("message", l);
    };
  }, [a, r]), /* @__PURE__ */ E(
    "iframe",
    {
      title: "conference",
      className: n.root,
      src: s,
      allowFullScreen: !0,
      allow: "microphone; camera; autoplay; display-capture",
      ref: o
    }
  );
}, gb = We(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  pulse: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      border: "1px solid green",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      borderRadius: "50%",
      animation: "$pulse 1s linear infinite"
    },
    "&::after": {
      content: "''",
      position: "absolute",
      border: "1px solid green",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      borderRadius: "50%",
      animation: "$pulse 1s linear infinite",
      animationDelay: "0.3s"
    }
  },
  avatar: {
    width: "80%",
    height: "80%"
  },
  footer: {
    width: "100%",
    alignSelf: "flex-end",
    paddingTop: 64,
    display: "flex",
    justifyContent: "center"
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.5)",
      opacity: 0
    },
    "50%": {
      transform: "scale(1)",
      opacity: 1
    },
    "100%": {
      transform: "scale(1.3)",
      opacity: 0
    }
  }
})), yb = ({
  conference: e,
  contact: t,
  apiUrl: r,
  onAccept: n
}) => {
  const o = gb(), { t: s } = lt();
  return /* @__PURE__ */ se(ep, { className: o.root, children: [
    /* @__PURE__ */ E("div", { className: o.pulse, children: t ? /* @__PURE__ */ E(
      Vt,
      {
        className: o.avatar,
        alt: t.username,
        src: t.avatar ? Zt(r, t.avatar) : ""
      }
    ) : /* @__PURE__ */ E(Vt, { className: o.avatar }) }),
    /* @__PURE__ */ E("div", { className: o.footer, children: /* @__PURE__ */ E(
      vo,
      {
        variant: "contained",
        color: "primary",
        onClick: () => n(e),
        children: s("CHAT.CONFERENCE.JOIN")
      }
    ) })
  ] });
}, vb = We(
  () => ({
    item: {
      cursor: "pointer"
    }
  })
), bb = (e) => {
  const t = vb(), r = (o) => {
    e.onSelect && e.onSelect(o.target.innerText);
  }, n = (o) => /* @__PURE__ */ E(
    Ne,
    {
      m: 0.5,
      component: "span",
      onClick: r,
      className: t.item,
      children: o.emoji
    }
  );
  return /* @__PURE__ */ se(Ne, { children: [
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "😃" }),
      /* @__PURE__ */ E(n, { emoji: "😁" }),
      /* @__PURE__ */ E(n, { emoji: "😂" }),
      /* @__PURE__ */ E(n, { emoji: "😄" }),
      /* @__PURE__ */ E(n, { emoji: "😅" }),
      /* @__PURE__ */ E(n, { emoji: "😆" }),
      /* @__PURE__ */ E(n, { emoji: "😇" }),
      /* @__PURE__ */ E(n, { emoji: "😈" }),
      /* @__PURE__ */ E(n, { emoji: "😉" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "😊" }),
      /* @__PURE__ */ E(n, { emoji: "😋" }),
      /* @__PURE__ */ E(n, { emoji: "😌" }),
      /* @__PURE__ */ E(n, { emoji: "😍" }),
      /* @__PURE__ */ E(n, { emoji: "😎" }),
      /* @__PURE__ */ E(n, { emoji: "😏" }),
      /* @__PURE__ */ E(n, { emoji: "😐" }),
      /* @__PURE__ */ E(n, { emoji: "😒" }),
      /* @__PURE__ */ E(n, { emoji: "😓" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "❓" }),
      /* @__PURE__ */ E(n, { emoji: "😕" }),
      /* @__PURE__ */ E(n, { emoji: "😖" }),
      /* @__PURE__ */ E(n, { emoji: "😗" }),
      /* @__PURE__ */ E(n, { emoji: "😘" }),
      /* @__PURE__ */ E(n, { emoji: "😙" }),
      /* @__PURE__ */ E(n, { emoji: "😚" }),
      /* @__PURE__ */ E(n, { emoji: "😜" }),
      /* @__PURE__ */ E(n, { emoji: "😝" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "😞" }),
      /* @__PURE__ */ E(n, { emoji: "😟" }),
      /* @__PURE__ */ E(n, { emoji: "😠" }),
      /* @__PURE__ */ E(n, { emoji: "😡" }),
      /* @__PURE__ */ E(n, { emoji: "😢" }),
      /* @__PURE__ */ E(n, { emoji: "😣" }),
      /* @__PURE__ */ E(n, { emoji: "😤" }),
      /* @__PURE__ */ E(n, { emoji: "😥" }),
      /* @__PURE__ */ E(n, { emoji: "😦" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "😨" }),
      /* @__PURE__ */ E(n, { emoji: "😩" }),
      /* @__PURE__ */ E(n, { emoji: "😪" }),
      /* @__PURE__ */ E(n, { emoji: "😫" }),
      /* @__PURE__ */ E(n, { emoji: "😬" }),
      /* @__PURE__ */ E(n, { emoji: "😭" }),
      /* @__PURE__ */ E(n, { emoji: "😮" }),
      /* @__PURE__ */ E(n, { emoji: "😯" }),
      /* @__PURE__ */ E(n, { emoji: "😰" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "😲" }),
      /* @__PURE__ */ E(n, { emoji: "😳" }),
      /* @__PURE__ */ E(n, { emoji: "😴" }),
      /* @__PURE__ */ E(n, { emoji: "😵" }),
      /* @__PURE__ */ E(n, { emoji: "🧐" }),
      /* @__PURE__ */ E(n, { emoji: "😷" }),
      /* @__PURE__ */ E(n, { emoji: "🙁" }),
      /* @__PURE__ */ E(n, { emoji: "🙂" }),
      /* @__PURE__ */ E(n, { emoji: "🙃" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "🤐" }),
      /* @__PURE__ */ E(n, { emoji: "🤑" }),
      /* @__PURE__ */ E(n, { emoji: "🤒" }),
      /* @__PURE__ */ E(n, { emoji: "🤓" }),
      /* @__PURE__ */ E(n, { emoji: "🤔" }),
      /* @__PURE__ */ E(n, { emoji: "🤕" }),
      /* @__PURE__ */ E(n, { emoji: "🤠" }),
      /* @__PURE__ */ E(n, { emoji: "🤡" }),
      /* @__PURE__ */ E(n, { emoji: "🤢" })
    ] }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ E(n, { emoji: "🤤" }),
      /* @__PURE__ */ E(n, { emoji: "🤥" }),
      /* @__PURE__ */ E(n, { emoji: "🤧" }),
      /* @__PURE__ */ E(n, { emoji: "🤨" }),
      /* @__PURE__ */ E(n, { emoji: "🤩" }),
      /* @__PURE__ */ E(n, { emoji: "🤪" }),
      /* @__PURE__ */ E(n, { emoji: "🤫" }),
      /* @__PURE__ */ E(n, { emoji: "🤬" }),
      /* @__PURE__ */ E(n, { emoji: "🤭" })
    ] })
  ] });
}, Eb = We(
  (e) => ({
    fileIcon: {
      fontSize: "0.75rem"
    },
    fileBody: {
      paddingLeft: e.spacing(1.2)
    }
  })
), Sb = ({ message: e }) => {
  const t = Eb(), r = sb(e.content), { name: n, ext: o } = ib(r.name);
  return /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
    /* @__PURE__ */ E(Vt, { className: t.fileIcon, children: o.toUpperCase() }),
    /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "column", className: t.fileBody, children: [
      n,
      /* @__PURE__ */ E("span", { children: `${o} ${r.size}` })
    ] })
  ] });
};
var or = {}, Zr = {}, Xc;
function xb() {
  if (Xc) return Zr;
  Xc = 1, Zr.__esModule = !0, Zr.default = void 0;
  var e = ie, t = ji(), r = ["className", "children", "ratio", "style"];
  function n() {
    return n = Object.assign ? Object.assign.bind() : function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var f = arguments[u];
        for (var p in f)
          Object.prototype.hasOwnProperty.call(f, p) && (l[p] = f[p]);
      }
      return l;
    }, n.apply(this, arguments);
  }
  function o(l, u) {
    if (l == null) return {};
    var f = {};
    for (var p in l)
      if (Object.prototype.hasOwnProperty.call(l, p)) {
        if (u.indexOf(p) >= 0) continue;
        f[p] = l[p];
      }
    return f;
  }
  var s = "--aspect-ratio", i = "react-aspect-ratio-placeholder";
  class a extends e.Component {
    constructor() {
      super(...arguments), this.node = null, this.setNode = (u) => {
        this.node = u;
      };
    }
    componentDidUpdate() {
      if (this.node) {
        var {
          node: u
        } = this, f = u.style.getPropertyValue(s);
        f || u.style.setProperty(s, "(" + this.props.ratio + ")");
      }
    }
    render() {
      var u = this.props, {
        className: f,
        children: p,
        ratio: g,
        style: y
      } = u, h = o(u, r), d = n({}, y, {
        // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
        [s]: "(" + g + ")"
      });
      return /* @__PURE__ */ (0, t.jsx)("div", n({
        className: f,
        ref: this.setNode,
        style: d
      }, h, {
        children: p
      }));
    }
  }
  return a.defaultProps = {
    className: i,
    ratio: 1
  }, Zr.default = a, Zr;
}
var en = {}, Qc;
function Tb() {
  if (Qc) return en;
  Qc = 1, en.__esModule = !0, en.default = void 0;
  var e = ie, t = ji(), r = ["className", "children", "ratio", "style"];
  function n() {
    return n = Object.assign ? Object.assign.bind() : function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var f = arguments[u];
        for (var p in f)
          Object.prototype.hasOwnProperty.call(f, p) && (l[p] = f[p]);
      }
      return l;
    }, n.apply(this, arguments);
  }
  function o(l, u) {
    if (l == null) return {};
    var f = {};
    for (var p in l)
      if (Object.prototype.hasOwnProperty.call(l, p)) {
        if (u.indexOf(p) >= 0) continue;
        f[p] = l[p];
      }
    return f;
  }
  var s = "--aspect-ratio", i = "react-aspect-ratio-placeholder", a = /* @__PURE__ */ (0, e.forwardRef)((l, u) => {
    var {
      className: f = i,
      children: p,
      ratio: g = 1,
      style: y
    } = l, h = o(l, r), d = n({}, y, {
      // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
      [s]: "(" + g + ")"
    });
    return /* @__PURE__ */ (0, t.jsx)("div", n({
      className: f,
      style: d,
      ref: u
    }, h, {
      children: p
    }));
  });
  return en.default = a, en;
}
var Zc;
function Cb() {
  if (Zc) return or;
  Zc = 1, or.__esModule = !0, or.default = or.AspectRatio = void 0;
  var e = r(/* @__PURE__ */ xb()), t = r(/* @__PURE__ */ Tb());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  return or.default = e.default, or.AspectRatio = t.default, or;
}
var Rb = /* @__PURE__ */ Cb();
const wb = We(
  (e) => ({
    img: {
      cursor: "pointer",
      borderRadius: e.spacing(1.2),
      maxWidth: 284,
      maxHeight: 190,
      [e.breakpoints.down("sm")]: {
        maxWidth: 250,
        maxHeight: 170
      }
    },
    aspect: {
      maxWidth: 284,
      height: 190,
      [e.breakpoints.down("sm")]: {
        maxWidth: 250,
        height: 170
      }
    }
  })
), Ob = ({
  apiUrl: e,
  message: t,
  setViewerData: r
}) => {
  const n = wb(), o = ie.useMemo(
    () => Zt(e, `/static/image/${t.content}`),
    [e, t.content]
  ), s = ie.useCallback(() => {
    r({
      visible: !0,
      src: o
    });
  }, [o, r]);
  return /* @__PURE__ */ E(Rb.AspectRatio, { ratio: "3/4", className: n.aspect, children: /* @__PURE__ */ E(
    "img",
    {
      src: o,
      loading: "lazy",
      onClick: s,
      className: n.img,
      alt: t.cdate
    }
  ) });
}, _b = We((e) => ({
  mediaContent: {
    backgroundColor: e.palette.secondary.main,
    borderRadius: e.spacing(1.2),
    maxWidth: 284,
    height: 190,
    [e.breakpoints.down("sm")]: {
      maxWidth: 250,
      height: 170
    }
  }
})), Pb = ({
  apiUrl: e,
  message: t,
  isConference: r
}) => {
  const n = _b(), o = ie.useMemo(() => {
    if (!r)
      return Zt(e, `/static/file/${t.content}`);
    try {
      const s = JSON.parse(t.content);
      if (s && s.visitId && s.name)
        return Zt(e, `/static/conf/${s.visitId}/${s.name}`);
    } catch (s) {
      console.warn("Failed to parse conference video", s);
    }
    return "";
  }, [e, r, t.content]);
  return o ? /* @__PURE__ */ E(
    "video",
    {
      src: o,
      className: n.mediaContent,
      controls: !0,
      muted: !0,
      preload: "none",
      playsInline: !0,
      children: "Ваш браузер не поддерживает тег video."
    }
  ) : /* @__PURE__ */ E(st, { variant: "caption", component: "span", color: "text.secondary", children: "Видео недоступно" });
}, kb = ({
  apiUrl: e,
  message: t,
  setViewerData: r
}) => {
  switch (t.messageType) {
    case "text":
      return /* @__PURE__ */ E(ie.Fragment, { children: t.content });
    case "video":
    case "video_conference":
      return /* @__PURE__ */ E(
        Pb,
        {
          message: t,
          apiUrl: e,
          isConference: t.messageType === "video_conference"
        }
      );
    case "image":
      return /* @__PURE__ */ E(
        Ob,
        {
          message: t,
          apiUrl: e,
          setViewerData: r
        }
      );
    case "file":
      return /* @__PURE__ */ E(Sb, { message: t });
    default:
      return console.warn(`Unsupported message type: ${t.messageType}`), null;
  }
}, Ab = We(
  (e) => ({
    rootContact: {
      padding: 1,
      paddingLeft: e.spacing(2),
      "& span": {
        float: "right",
        color: e.palette.text.secondary,
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: e.palette.grey[200],
        color: e.palette.text.primary,
        borderTopRightRadius: e.spacing(3),
        borderBottomRightRadius: e.spacing(3)
      },
      "& $firstMessage": {
        borderTopLeftRadius: e.spacing(3),
        marginTop: 10
      },
      "& $lastMessage": {
        borderTopRightRadius: e.spacing(3),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: e.spacing(3),
        marginBottom: 10
      }
    },
    rootUser: {
      padding: 1,
      paddingRight: e.spacing(2),
      justifyContent: "flex-end",
      "& span": {
        float: "right",
        color: "#D9DEEC",
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: e.palette.primary.main,
        color: e.palette.primary.contrastText,
        borderTopLeftRadius: e.spacing(3),
        borderBottomLeftRadius: e.spacing(3)
      },
      "& $firstMessage": {
        borderTopRightRadius: e.spacing(3),
        marginTop: 10
      },
      "& $lastMessage": {
        borderTopLeftRadius: e.spacing(3),
        borderBottomRightRadius: 0,
        marginBottom: 10
      }
    },
    rootNotify: {
      justifyContent: "center",
      "& span": {
        float: "right",
        color: e.palette.text.secondary,
        fontSize: "0.8rem"
      },
      "& > *": {
        //padding: `0px ${theme.spacing(1)}`,
        borderRadius: e.spacing(3),
        fontWeight: 500
      }
    },
    message: {
      //maxWidth: "55%",
      //minWidth: "50%",
      maxWidth: "65%",
      [e.breakpoints.down("md")]: {
        maxWidth: "95%"
      },
      [e.breakpoints.down("sm")]: {
        maxWidth: "85%"
      },
      borderRadius: e.spacing(0.6),
      padding: e.spacing(0.9),
      paddingLeft: e.spacing(1.8),
      paddingRight: e.spacing(1.8)
    },
    firstMessage: {},
    lastMessage: {},
    file: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      cursor: "pointer"
    },
    header: {
      flex: "0 0 100%",
      overflow: "hidden",
      fontWeight: "bold"
    },
    body: {
      flex: "1 1 auto",
      wordBreak: "break-word",
      overflow: "hidden"
    },
    status: {
      paddingLeft: e.spacing(1),
      flex: "1 1 auto",
      alignSelf: "flex-end"
    },
    statusImage: {
      fontSize: "1rem",
      marginRight: e.spacing(0.5),
      verticalAlign: "middle"
    }
  })
), Nb = (e, t, r, n, o, s, i) => {
  const { messageType: a } = t, l = [
    r.message,
    n ? r.firstMessage : "",
    o ? r.lastMessage : ""
  ].filter(Boolean).join(" ");
  if (a === "file") {
    const f = Zt(e, `/static/file/${t.content}`);
    return /* @__PURE__ */ E(
      tp,
      {
        className: `${l} ${r.file}`,
        underline: "none",
        href: f,
        target: "_blank",
        download: !0,
        onContextMenu: s,
        children: i
      }
    );
  }
  return /* @__PURE__ */ E(
    Ne,
    {
      display: "flex",
      flexDirection: a === "image" || a === "video" || a === "video_conference" ? "column" : "row",
      flexWrap: "wrap",
      className: l,
      onContextMenu: s,
      children: i
    }
  );
}, bf = Xd(
  Ll((e, t) => {
    const r = Ab(), { t: n } = lt(), {
      apiUrl: o,
      message: s,
      owner: i,
      user: a,
      isGroupMessage: l,
      isUserFirst: u,
      isUserLast: f,
      setViewerData: p
      //refOnMess,
    } = e, g = Rn(() => {
      const h = s.content;
      if (typeof h != "string" || h.trim().indexOf("{") !== 0)
        return h;
      try {
        return JSON.parse(h);
      } catch (d) {
        return console.warn("Failed to parse notify content", d), h;
      }
    }, [s.content]);
    if (s.messageType === "notify") {
      const h = typeof g == "string" ? "info" : g.severity ?? "info", d = typeof g == "string" ? g : g.message;
      return /* @__PURE__ */ E(ro, { className: r.rootNotify, ref: t, children: /* @__PURE__ */ E(
        Do,
        {
          severity: h,
          children: d
        }
      ) });
    }
    if (s.isRevoke)
      return /* @__PURE__ */ E(ro, { className: r.rootNotify, ref: t, children: /* @__PURE__ */ E(
        st,
        {
          variant: "body2",
          align: "center",
          children: s.userId === a.userId ? n("CHAT.MESSAGE.REVOKED.YOU") : `${s.revokeUserName} ${n(
            "CHAT.MESSAGE.REVOKED.CONTACT"
          )}`
        }
      ) });
    const y = a.userId === s.userId;
    return /* @__PURE__ */ E(
      ro,
      {
        ref: t,
        className: s.messageType === "video_conference" ? r.rootNotify : y ? r.rootUser : r.rootContact,
        children: Nb(
          o,
          s,
          r,
          u,
          f,
          e.onContextMenu,
          /* @__PURE__ */ se(ie.Fragment, { children: [
            !y && l && i && u && /* @__PURE__ */ E("div", { className: r.header, children: i.username }),
            /* @__PURE__ */ E(
              "div",
              {
                className: r.body,
                children: /* @__PURE__ */ E(
                  kb,
                  {
                    message: s,
                    apiUrl: o,
                    setViewerData: p
                  }
                )
              }
            ),
            /* @__PURE__ */ E("div", { className: r.status, children: /* @__PURE__ */ se("span", { children: [
              y ? s.status === 0 ? /* @__PURE__ */ E(hp, { className: r.statusImage }) : /* @__PURE__ */ E(mp, { className: r.statusImage }) : null,
              wo(s.cdate) ?? ""
            ] }) })
          ] })
        )
      }
    );
  })
);
bf.displayName = "Message";
const Ef = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), Ib = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"
}), "FileCopy"), $b = 10 * 1024 * 1024, el = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp"],
  video: ["video/mp4", "video/webm"],
  file: ["application/pdf"]
}, Rr = 335, Mb = We(() => ({
  input: {
    flex: "auto"
  },
  inputUpload: {
    display: "none"
  },
  attachmentIcon: {
    fill: "none",
    stroke: "currentColor"
  },
  error: {
    color: "red",
    fontSize: "0.75rem",
    marginTop: "4px"
  }
})), Db = (e) => {
  let { width: t, height: r } = e;
  return (t > Rr || r > Rr) && (t > r ? (r = Rr * (r / t), t = Rr) : (t = Rr * (t / r), r = Rr)), { width: t, height: r };
}, jb = ({
  chat: e,
  onTyping: t,
  onSendMessage: r,
  maxMessageLength: n = 1e3
}) => {
  const o = Mb(), { t: s } = lt(), i = Et(null), [a, l] = Je(
    null
  ), u = Et(null), f = Et(""), [p, g] = Je(""), [y, h] = Je(!1), [d, S] = Je({
    chat: e,
    time: 0
  }), T = (m) => {
    l(m.currentTarget);
  }, A = () => {
    l(null);
  }, C = Ae((m) => {
    if (u.current) {
      const $ = f.current + m;
      f.current = $, u.current.value = $;
    }
    A();
  }, []), x = Ae(
    (m) => {
      const $ = m.target.value;
      f.current = $, e && t && (d.chat !== e || Date.now() - d.time >= 500) && (S({
        chat: e,
        time: Date.now()
      }), t(e));
    },
    [e, t, d.chat]
  ), v = Ae(
    (m) => {
      !e || !r || r(e, m);
    },
    [e, r]
  ), I = (m) => m.trim().length === 0 ? (g(s("CHAT.ERROR.EMPTY_MESSAGE")), !1) : m.length > n ? (g(s("CHAT.ERROR.MESSAGE_TOO_LONG")), !1) : (g(""), !0), D = Ae(() => {
    const m = f.current;
    I(m) && (v({ message: m, messageType: "text" }), u.current && (u.current.value = "", f.current = ""), g(""));
  }, [v]), z = async (m) => {
    const $ = m.target.files, U = $ && $.length > 0 ? $[0] : void 0;
    if (U) {
      if (U.size > $b) {
        g(s("CHAT.ERROR.FILE_TOO_LARGE"));
        return;
      }
      try {
        h(!0), g("");
        const G = Object.entries(el).find(
          ([, w]) => w.includes(U.type)
        ), M = G ? G[0] : "file";
        if (M === "image") {
          const w = await new Promise((b) => {
            const P = new Image(), N = URL.createObjectURL(U);
            P.onload = () => {
              URL.revokeObjectURL(N), b(
                Db({
                  width: P.width,
                  height: P.height
                })
              );
            }, P.src = N;
          });
          v({
            message: U,
            width: w.width,
            height: w.height,
            messageType: M
          });
        } else
          v({
            message: U,
            messageType: M,
            fileName: U.name,
            size: U.size
          });
      } catch {
        g(s("CHAT.ERROR.UPLOAD_FAILED"));
      } finally {
        h(!1), i.current && (i.current.value = "");
      }
    }
  }, W = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), D());
  };
  return /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ E(
      $i,
      {
        className: o.input,
        placeholder: s("CHAT.INPUT_MESSAGE") || "",
        autoFocus: !0,
        variant: "standard",
        error: !!p,
        disabled: y,
        inputRef: u,
        slotProps: {
          input: {
            autoComplete: "off",
            inputProps: {
              maxLength: n
            },
            disableUnderline: !0,
            startAdornment: /* @__PURE__ */ se(Wl, { position: "start", children: [
              /* @__PURE__ */ E(
                "input",
                {
                  ref: i,
                  accept: Object.values(el).flat().join(","),
                  className: o.inputUpload,
                  id: "icon-button-file",
                  type: "file",
                  onChange: z,
                  disabled: y
                }
              ),
              /* @__PURE__ */ E("label", { htmlFor: "icon-button-file", children: /* @__PURE__ */ E(
                qt,
                {
                  color: "primary",
                  "aria-label": "upload",
                  component: "span",
                  size: "small",
                  disabled: y,
                  children: y ? /* @__PURE__ */ E(Hl, { size: 24 }) : /* @__PURE__ */ E(rp, { className: o.attachmentIcon, children: /* @__PURE__ */ E(
                    "path",
                    {
                      d: "M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131",
                      strokeWidth: "1.6",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  ) })
                }
              ) }),
              /* @__PURE__ */ E(
                qt,
                {
                  "aria-describedby": a ? "emoji-popover" : void 0,
                  onClick: T,
                  color: "primary",
                  size: "small",
                  disabled: y,
                  children: /* @__PURE__ */ E(yp, {})
                }
              )
            ] }),
            endAdornment: /* @__PURE__ */ E(
              qt,
              {
                edge: "end",
                color: "inherit",
                size: "small",
                onClick: D,
                disabled: y || !f.current.trim(),
                children: /* @__PURE__ */ E(gp, {})
              }
            ),
            onKeyDown: W
          }
        },
        onChange: x
      }
    ),
    p && /* @__PURE__ */ E("div", { className: o.error, children: p }),
    /* @__PURE__ */ E(
      ql,
      {
        id: "emoji-popover",
        open: !!a,
        anchorEl: a,
        onClose: A,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ E(bb, { onSelect: C })
      }
    )
  ] });
}, Lb = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7s.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71s-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9"
}), "CallEnd"), Sf = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
}), "Group"), Bb = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), Fb = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "PersonAdd"), xf = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), "KeyboardArrowDown"), Vb = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), Ub = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
}), "RestartAlt"), zb = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z"
}), "VideoCall");
class Oo {
  constructor() {
    qr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Oo();
  }
  static use() {
    const t = Cu(Oo.create).current, [r, n] = _.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, _.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Wb(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function Gb() {
  return Oo.use();
}
function Wb() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
const tl = {
  disabled: !1
};
var Hb = process.env.NODE_ENV !== "production" ? c.oneOfType([c.number, c.shape({
  enter: c.number,
  exit: c.number,
  appear: c.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && c.oneOfType([c.string, c.shape({
  enter: c.string,
  exit: c.string,
  active: c.string
}), c.shape({
  enter: c.string,
  enterDone: c.string,
  enterActive: c.string,
  exit: c.string,
  exitDone: c.string,
  exitActive: c.string
})]);
const _o = ie.createContext(null);
var qb = function(t) {
  return t.scrollTop;
}, un = "unmounted", ir = "exited", ar = "entering", _r = "entered", gi = "exiting", wt = /* @__PURE__ */ (function(e) {
  Zo(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var i = o, a = i && !i.isMounting ? n.enter : n.appear, l;
    return s.appearStatus = null, n.in ? a ? (l = ir, s.appearStatus = ar) : l = _r : n.unmountOnExit || n.mountOnEnter ? l = un : l = ir, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var i = o.in;
    return i && s.status === un ? {
      status: ir
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== ar && i !== _r && (s = ar) : (i === ar || i === _r) && (s = gi);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, s, i, a;
    return s = i = a = o, o != null && typeof o != "number" && (s = o.exit, i = o.enter, a = o.appear !== void 0 ? o.appear : i), {
      exit: s,
      enter: i,
      appear: a
    };
  }, r.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === ar) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Ln.findDOMNode(this);
          i && qb(i);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ir && this.setState({
      status: un
    });
  }, r.performEnter = function(o) {
    var s = this, i = this.props.enter, a = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [a] : [Ln.findDOMNode(this), a], u = l[0], f = l[1], p = this.getTimeouts(), g = a ? p.appear : p.enter;
    if (!o && !i || tl.disabled) {
      this.safeSetState({
        status: _r
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: ar
    }, function() {
      s.props.onEntering(u, f), s.onTransitionEnd(g, function() {
        s.safeSetState({
          status: _r
        }, function() {
          s.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, s = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Ln.findDOMNode(this);
    if (!s || tl.disabled) {
      this.safeSetState({
        status: ir
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: gi
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(i.exit, function() {
        o.safeSetState({
          status: ir
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, r.setNextCallback = function(o) {
    var s = this, i = !0;
    return this.nextCallback = function(a) {
      i && (i = !1, s.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var i = this.props.nodeRef ? this.props.nodeRef.current : Ln.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!i || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], u = l[0], f = l[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === un)
      return null;
    var s = this.props, i = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var a = Xi(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ie.createElement(_o.Provider, {
        value: null
      }, typeof i == "function" ? i(o, a) : ie.cloneElement(ie.Children.only(i), a))
    );
  }, t;
})(ie.Component);
wt.contextType = _o;
wt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: c.shape({
    current: typeof Element > "u" ? c.any : function(e, t, r, n, o, s) {
      var i = e[t];
      return c.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: c.oneOfType([c.func.isRequired, c.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: c.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: c.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: c.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: c.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: c.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: c.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = Hb;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: c.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: c.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: c.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: c.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: c.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: c.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: c.func
} : {};
function wr() {
}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wr,
  onEntering: wr,
  onEntered: wr,
  onExit: wr,
  onExiting: wr,
  onExited: wr
};
wt.UNMOUNTED = un;
wt.EXITED = ir;
wt.ENTERING = ar;
wt.ENTERED = _r;
wt.EXITING = gi;
function na(e, t) {
  var r = function(s) {
    return t && eo(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Qd.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Yb(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (n[s] = o, o = []) : o.push(s);
  var i, a = {};
  for (var l in t) {
    if (n[l])
      for (i = 0; i < n[l].length; i++) {
        var u = n[l][i];
        a[n[l][i]] = r(u);
      }
    a[l] = r(l);
  }
  for (i = 0; i < o.length; i++)
    a[o[i]] = r(o[i]);
  return a;
}
function lr(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Kb(e, t) {
  return na(e.children, function(r) {
    return to(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: lr(r, "appear", e),
      enter: lr(r, "enter", e),
      exit: lr(r, "exit", e)
    });
  });
}
function Jb(e, t, r) {
  var n = na(e.children), o = Yb(t, n);
  return Object.keys(o).forEach(function(s) {
    var i = o[s];
    if (eo(i)) {
      var a = s in t, l = s in n, u = t[s], f = eo(u) && !u.props.in;
      l && (!a || f) ? o[s] = to(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: lr(i, "exit", e),
        enter: lr(i, "enter", e)
      }) : !l && a && !f ? o[s] = to(i, {
        in: !1
      }) : l && a && eo(u) && (o[s] = to(i, {
        onExited: r.bind(null, i),
        in: u.props.in,
        exit: lr(i, "exit", e),
        enter: lr(i, "enter", e)
      }));
    }
  }), o;
}
var Xb = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Qb = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, oa = /* @__PURE__ */ (function(e) {
  Zo(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var i = s.handleExited.bind(oi(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var i = s.children, a = s.handleExited, l = s.firstRender;
    return {
      children: l ? Kb(o, a) : Jb(o, i, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var i = na(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(a) {
      var l = De({}, a.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, i = o.childFactory, a = Xi(o, ["component", "childFactory"]), l = this.state.contextValue, u = Xb(this.state.children).map(i);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ ie.createElement(_o.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ie.createElement(_o.Provider, {
      value: l
    }, /* @__PURE__ */ ie.createElement(s, a, u));
  }, t;
})(ie.Component);
oa.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: c.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: c.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: c.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: c.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: c.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: c.func
} : {};
oa.defaultProps = Qb;
function Tf(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: i,
    in: a,
    onExited: l,
    timeout: u
  } = e, [f, p] = _.useState(!1), g = ge(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), y = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + o
  }, h = ge(r.child, f && r.childLeaving, n && r.childPulsate);
  return !a && !f && p(!0), _.useEffect(() => {
    if (!a && l != null) {
      const d = setTimeout(l, u);
      return () => {
        clearTimeout(d);
      };
    }
  }, [l, a, u]), /* @__PURE__ */ X.jsx("span", {
    className: g,
    style: y,
    children: /* @__PURE__ */ X.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (Tf.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object.isRequired,
  className: c.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: c.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: c.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: c.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: c.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: c.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: c.number,
  /**
   * exit delay
   */
  timeout: c.number.isRequired
});
const yt = Ge("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yi = 550, Zb = 80, e0 = wn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, t0 = wn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, r0 = wn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, n0 = Ce("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), o0 = Ce(Tf, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${yt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${e0};
    animation-duration: ${yi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${yt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${yt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${yt.childLeaving} {
    opacity: 0;
    animation-name: ${t0};
    animation-duration: ${yi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${yt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${r0};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Cf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: i,
    ...a
  } = n, [l, u] = _.useState([]), f = _.useRef(0), p = _.useRef(null);
  _.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const g = _.useRef(!1), y = Ru(), h = _.useRef(null), d = _.useRef(null), S = _.useCallback((x) => {
    const {
      pulsate: v,
      rippleX: I,
      rippleY: D,
      rippleSize: z,
      cb: W
    } = x;
    u((m) => [...m, /* @__PURE__ */ X.jsx(o0, {
      classes: {
        ripple: ge(s.ripple, yt.ripple),
        rippleVisible: ge(s.rippleVisible, yt.rippleVisible),
        ripplePulsate: ge(s.ripplePulsate, yt.ripplePulsate),
        child: ge(s.child, yt.child),
        childLeaving: ge(s.childLeaving, yt.childLeaving),
        childPulsate: ge(s.childPulsate, yt.childPulsate)
      },
      timeout: yi,
      pulsate: v,
      rippleX: I,
      rippleY: D,
      rippleSize: z
    }, f.current)]), f.current += 1, p.current = W;
  }, [s]), T = _.useCallback((x = {}, v = {}, I = () => {
  }) => {
    const {
      pulsate: D = !1,
      center: z = o || v.pulsate,
      fakeElement: W = !1
      // For test purposes
    } = v;
    if (x?.type === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    x?.type === "touchstart" && (g.current = !0);
    const m = W ? null : d.current, $ = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let U, G, M;
    if (z || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      U = Math.round($.width / 2), G = Math.round($.height / 2);
    else {
      const {
        clientX: w,
        clientY: b
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      U = Math.round(w - $.left), G = Math.round(b - $.top);
    }
    if (z)
      M = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const w = Math.max(Math.abs((m ? m.clientWidth : 0) - U), U) * 2 + 2, b = Math.max(Math.abs((m ? m.clientHeight : 0) - G), G) * 2 + 2;
      M = Math.sqrt(w ** 2 + b ** 2);
    }
    x?.touches ? h.current === null && (h.current = () => {
      S({
        pulsate: D,
        rippleX: U,
        rippleY: G,
        rippleSize: M,
        cb: I
      });
    }, y.start(Zb, () => {
      h.current && (h.current(), h.current = null);
    })) : S({
      pulsate: D,
      rippleX: U,
      rippleY: G,
      rippleSize: M,
      cb: I
    });
  }, [o, S, y]), A = _.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), C = _.useCallback((x, v) => {
    if (y.clear(), x?.type === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        C(x, v);
      });
      return;
    }
    h.current = null, u((I) => I.length > 0 ? I.slice(1) : I), p.current = v;
  }, [y]);
  return _.useImperativeHandle(r, () => ({
    pulsate: A,
    start: T,
    stop: C
  }), [A, T, C]), /* @__PURE__ */ X.jsx(n0, {
    className: ge(yt.root, s.root, i),
    ref: d,
    ...a,
    children: /* @__PURE__ */ X.jsx(oa, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Cf.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string
});
function s0(e) {
  return Xe("MuiButtonBase", e);
}
const i0 = Ge("MuiButtonBase", ["root", "disabled", "focusVisible"]), a0 = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = ut({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, s0, o);
  return r && n && (i.root += ` ${n}`), i;
}, c0 = Ce("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${i0.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), sa = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: i,
    className: a,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: g = !1,
    focusVisibleClassName: y,
    LinkComponent: h = "a",
    onBlur: d,
    onClick: S,
    onContextMenu: T,
    onDragLeave: A,
    onFocus: C,
    onFocusVisible: x,
    onKeyDown: v,
    onKeyUp: I,
    onMouseDown: D,
    onMouseLeave: z,
    onMouseUp: W,
    onTouchEnd: m,
    onTouchMove: $,
    onTouchStart: U,
    tabIndex: G = 0,
    TouchRippleProps: M,
    touchRippleRef: w,
    type: b,
    ...P
  } = n, N = _.useRef(null), L = Gb(), O = St(L.ref, w), [B, K] = _.useState(!1);
  u && B && K(!1), _.useImperativeHandle(o, () => ({
    focusVisible: () => {
      K(!0), N.current.focus();
    }
  }), []);
  const J = L.shouldMount && !f && !u;
  _.useEffect(() => {
    B && g && !f && L.pulsate();
  }, [f, g, B, L]);
  const q = Bt(L, "start", D, p), Q = Bt(L, "stop", T, p), re = Bt(L, "stop", A, p), ee = Bt(L, "stop", W, p), ne = Bt(L, "stop", (ce) => {
    B && ce.preventDefault(), z && z(ce);
  }, p), oe = Bt(L, "start", U, p), Y = Bt(L, "stop", m, p), te = Bt(L, "stop", $, p), k = Bt(L, "stop", (ce) => {
    bc(ce.target) || K(!1), d && d(ce);
  }, !1), fe = Ar((ce) => {
    N.current || (N.current = ce.currentTarget), bc(ce.target) && (K(!0), x && x(ce)), C && C(ce);
  }), Re = () => {
    const ce = N.current;
    return l && l !== "button" && !(ce.tagName === "A" && ce.href);
  }, ze = Ar((ce) => {
    g && !ce.repeat && B && ce.key === " " && L.stop(ce, () => {
      L.start(ce);
    }), ce.target === ce.currentTarget && Re() && ce.key === " " && ce.preventDefault(), v && v(ce), ce.target === ce.currentTarget && Re() && ce.key === "Enter" && !u && (ce.preventDefault(), S && S(ce));
  }), _t = Ar((ce) => {
    g && ce.key === " " && B && !ce.defaultPrevented && L.stop(ce, () => {
      L.pulsate(ce);
    }), I && I(ce), S && ce.target === ce.currentTarget && Re() && ce.key === " " && !ce.defaultPrevented && S(ce);
  });
  let Pt = l;
  Pt === "button" && (P.href || P.to) && (Pt = h);
  const Ct = {};
  Pt === "button" ? (Ct.type = b === void 0 ? "button" : b, Ct.disabled = u) : (!P.href && !P.to && (Ct.role = "button"), u && (Ct["aria-disabled"] = u));
  const mt = St(r, N), tr = {
    ...n,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: g,
    tabIndex: G,
    focusVisible: B
  }, Qe = a0(tr);
  return /* @__PURE__ */ X.jsxs(c0, {
    as: Pt,
    className: ge(Qe.root, a),
    ownerState: tr,
    onBlur: k,
    onClick: S,
    onContextMenu: Q,
    onFocus: fe,
    onKeyDown: ze,
    onKeyUp: _t,
    onMouseDown: q,
    onMouseLeave: ne,
    onMouseUp: ee,
    onDragLeave: re,
    onTouchEnd: Y,
    onTouchMove: te,
    onTouchStart: oe,
    ref: mt,
    tabIndex: u ? -1 : G,
    type: b,
    ...Ct,
    ...P,
    children: [i, J ? /* @__PURE__ */ X.jsx(Cf, {
      ref: O,
      center: s,
      ...M
    }) : null]
  });
});
function Bt(e, t, r, n = !1) {
  return Ar((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (sa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Su,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: c.bool,
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: bu,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: c.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: c.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: c.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: c.string,
  /**
   * @ignore
   */
  href: c.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: c.elementType,
  /**
   * @ignore
   */
  onBlur: c.func,
  /**
   * @ignore
   */
  onClick: c.func,
  /**
   * @ignore
   */
  onContextMenu: c.func,
  /**
   * @ignore
   */
  onDragLeave: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: c.func,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * @ignore
   */
  onKeyUp: c.func,
  /**
   * @ignore
   */
  onMouseDown: c.func,
  /**
   * @ignore
   */
  onMouseLeave: c.func,
  /**
   * @ignore
   */
  onMouseUp: c.func,
  /**
   * @ignore
   */
  onTouchEnd: c.func,
  /**
   * @ignore
   */
  onTouchMove: c.func,
  /**
   * @ignore
   */
  onTouchStart: c.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * @default 0
   */
  tabIndex: c.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: c.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: c.oneOfType([c.func, c.shape({
    current: c.shape({
      pulsate: c.func.isRequired,
      start: c.func.isRequired,
      stop: c.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: c.oneOfType([c.oneOf(["button", "reset", "submit"]), c.string])
});
function l0(e) {
  return typeof e.main == "string";
}
function u0(e, t = []) {
  if (!l0(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Rf(e = []) {
  return ([, t]) => t && u0(t, e);
}
function f0(e) {
  return Xe("MuiCircularProgress", e);
}
Ge("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Wt = 44, vi = wn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, bi = wn`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, d0 = typeof vi != "string" ? Ql`
        animation: ${vi} 1.4s linear infinite;
      ` : null, p0 = typeof bi != "string" ? Ql`
        animation: ${bi} 1.4s ease-in-out infinite;
      ` : null, h0 = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, s = {
    root: ["root", r, `color${me(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${me(r)}`, o && "circleDisableShrink"]
  };
  return ut(s, f0, t);
}, m0 = Ce("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${me(r.color)}`]];
  }
})(Gt(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: d0 || {
      animation: `${vi} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Rf()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), g0 = Ce("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), y0 = Ce("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${me(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Gt(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: p0 || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${bi} 1.4s ease-in-out infinite`
    }
  }]
}))), wf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: i = !1,
    size: a = 40,
    style: l,
    thickness: u = 3.6,
    value: f = 0,
    variant: p = "indeterminate",
    ...g
  } = n, y = {
    ...n,
    color: s,
    disableShrink: i,
    size: a,
    thickness: u,
    value: f,
    variant: p
  }, h = h0(y), d = {}, S = {}, T = {};
  if (p === "determinate") {
    const A = 2 * Math.PI * ((Wt - u) / 2);
    d.strokeDasharray = A.toFixed(3), T["aria-valuenow"] = Math.round(f), d.strokeDashoffset = `${((100 - f) / 100 * A).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ X.jsx(m0, {
    className: ge(h.root, o),
    style: {
      width: a,
      height: a,
      ...S,
      ...l
    },
    ownerState: y,
    ref: r,
    role: "progressbar",
    ...T,
    ...g,
    children: /* @__PURE__ */ X.jsx(g0, {
      className: h.svg,
      ownerState: y,
      viewBox: `${Wt / 2} ${Wt / 2} ${Wt} ${Wt}`,
      children: /* @__PURE__ */ X.jsx(y0, {
        className: h.circle,
        style: d,
        ownerState: y,
        cx: Wt,
        cy: Wt,
        r: (Wt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (wf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: c.oneOfType([c.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: mr(c.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: c.oneOfType([c.number, c.string]),
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: c.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: c.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: c.oneOf(["determinate", "indeterminate"])
});
function v0(e) {
  return Xe("MuiButton", e);
}
const sr = Ge("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Of = /* @__PURE__ */ _.createContext({});
process.env.NODE_ENV !== "production" && (Of.displayName = "ButtonGroupContext");
const _f = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (_f.displayName = "ButtonGroupButtonContext");
const b0 = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    loading: i,
    loadingPosition: a,
    classes: l
  } = e, u = {
    root: ["root", i && "loading", s, `${s}${me(t)}`, `size${me(o)}`, `${s}Size${me(o)}`, `color${me(t)}`, r && "disableElevation", n && "fullWidth", i && `loadingPosition${me(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${me(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${me(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = ut(u, v0, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Pf = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], E0 = Ce(sa, {
  shouldForwardProp: (e) => Qo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${me(r.color)}`], t[`size${me(r.size)}`], t[`${r.variant}Size${me(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Gt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${sr.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${sr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${sr.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${sr.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Rf()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : dt(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${sr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${sr.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${sr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), S0 = Ce("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${me(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Pf]
})), x0 = Ce("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${me(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Pf]
})), T0 = Ce("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), rl = Ce("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Po = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = _.useContext(Of), o = _.useContext(_f), s = So(n, t), i = tt({
    props: s,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: u = "button",
    className: f,
    disabled: p = !1,
    disableElevation: g = !1,
    disableFocusRipple: y = !1,
    endIcon: h,
    focusVisibleClassName: d,
    fullWidth: S = !1,
    id: T,
    loading: A = null,
    loadingIndicator: C,
    loadingPosition: x = "center",
    size: v = "medium",
    startIcon: I,
    type: D,
    variant: z = "text",
    ...W
  } = i, m = Tu(T), $ = C ?? /* @__PURE__ */ X.jsx(wf, {
    "aria-labelledby": m,
    color: "inherit",
    size: 16
  }), U = {
    ...i,
    color: l,
    component: u,
    disabled: p,
    disableElevation: g,
    disableFocusRipple: y,
    fullWidth: S,
    loading: A,
    loadingIndicator: $,
    loadingPosition: x,
    size: v,
    type: D,
    variant: z
  }, G = b0(U), M = (I || A && x === "start") && /* @__PURE__ */ X.jsx(S0, {
    className: G.startIcon,
    ownerState: U,
    children: I || /* @__PURE__ */ X.jsx(rl, {
      className: G.loadingIconPlaceholder,
      ownerState: U
    })
  }), w = (h || A && x === "end") && /* @__PURE__ */ X.jsx(x0, {
    className: G.endIcon,
    ownerState: U,
    children: h || /* @__PURE__ */ X.jsx(rl, {
      className: G.loadingIconPlaceholder,
      ownerState: U
    })
  }), b = o || "", P = typeof A == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ X.jsx("span", {
      className: G.loadingWrapper,
      style: {
        display: "contents"
      },
      children: A && /* @__PURE__ */ X.jsx(T0, {
        className: G.loadingIndicator,
        ownerState: U,
        children: $
      })
    })
  ) : null;
  return /* @__PURE__ */ X.jsxs(E0, {
    ownerState: U,
    className: ge(n.className, G.root, f, b),
    component: u,
    disabled: p || A,
    focusRipple: !y,
    focusVisibleClassName: ge(G.focusVisible, d),
    ref: r,
    type: D,
    id: A ? m : T,
    ...W,
    classes: G,
    children: [M, x !== "end" && P, a, x === "end" && P, w]
  });
});
process.env.NODE_ENV !== "production" && (Po.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: c.oneOfType([c.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: c.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: c.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: c.bool,
  /**
   * Element placed after the children.
   */
  endIcon: c.node,
  /**
   * @ignore
   */
  focusVisibleClassName: c.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: c.string,
  /**
   * @ignore
   */
  id: c.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: c.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: c.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: c.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: c.oneOfType([c.oneOf(["small", "medium", "large"]), c.string]),
  /**
   * Element placed before the children.
   */
  startIcon: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * @ignore
   */
  type: c.oneOfType([c.oneOf(["button", "reset", "submit"]), c.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: c.oneOfType([c.oneOf(["contained", "outlined", "text"]), c.string])
});
const ko = /* @__PURE__ */ _.createContext({});
process.env.NODE_ENV !== "production" && (ko.displayName = "ListContext");
function C0(e) {
  return Xe("MuiList", e);
}
Ge("MuiList", ["root", "padding", "dense", "subheader"]);
const R0 = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return ut({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, C0, t);
}, w0 = Ce("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), ia = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: i = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: u,
    ...f
  } = n, p = _.useMemo(() => ({
    dense: a
  }), [a]), g = {
    ...n,
    component: i,
    dense: a,
    disablePadding: l
  }, y = R0(g);
  return /* @__PURE__ */ X.jsx(ko.Provider, {
    value: p,
    children: /* @__PURE__ */ X.jsxs(w0, {
      as: i,
      className: ge(y.root, s),
      ref: r,
      ownerState: g,
      ...f,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (ia.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: c.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: c.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
function Ds(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function nl(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function kf(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function tn(e, t, r, n, o, s) {
  let i = !1, a = o(e, t, t ? r : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (i)
        return !1;
      i = !0;
    }
    const l = n ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !kf(a, s) || l)
      a = o(e, a, r);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Af = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: i,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: f,
    variant: p = "selectedMenu",
    ...g
  } = t, y = _.useRef(null), h = _.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  En(() => {
    o && y.current.focus();
  }, [o]), _.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (C, {
      direction: x
    }) => {
      const v = !y.current.style.width;
      if (C.clientHeight < y.current.clientHeight && v) {
        const I = `${wu(Ut(C))}px`;
        y.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = I, y.current.style.width = `calc(100% + ${I})`;
      }
      return y.current;
    }
  }), []);
  const d = (C) => {
    const x = y.current, v = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      f && f(C);
      return;
    }
    const D = Dt(x).activeElement;
    if (v === "ArrowDown")
      C.preventDefault(), tn(x, D, u, l, Ds);
    else if (v === "ArrowUp")
      C.preventDefault(), tn(x, D, u, l, nl);
    else if (v === "Home")
      C.preventDefault(), tn(x, null, u, l, Ds);
    else if (v === "End")
      C.preventDefault(), tn(x, null, u, l, nl);
    else if (v.length === 1) {
      const z = h.current, W = v.toLowerCase(), m = performance.now();
      z.keys.length > 0 && (m - z.lastTime > 500 ? (z.keys = [], z.repeating = !0, z.previousKeyMatched = !0) : z.repeating && W !== z.keys[0] && (z.repeating = !1)), z.lastTime = m, z.keys.push(W);
      const $ = D && !z.repeating && kf(D, z);
      z.previousKeyMatched && ($ || tn(x, D, !1, l, Ds, z)) ? C.preventDefault() : z.previousKeyMatched = !1;
    }
    f && f(C);
  }, S = St(y, r);
  let T = -1;
  _.Children.forEach(i, (C, x) => {
    if (!/* @__PURE__ */ _.isValidElement(C)) {
      T === x && (T += 1, T >= i.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Dr.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (p === "selectedMenu" && C.props.selected || T === -1) && (T = x), T === x && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (T += 1, T >= i.length && (T = -1));
  });
  const A = _.Children.map(i, (C, x) => {
    if (x === T) {
      const v = {};
      return s && (v.autoFocus = !0), C.props.tabIndex === void 0 && p === "selectedMenu" && (v.tabIndex = 0), /* @__PURE__ */ _.cloneElement(C, v);
    }
    return C;
  });
  return /* @__PURE__ */ X.jsx(ia, {
    role: "menu",
    ref: S,
    className: a,
    onKeyDown: d,
    tabIndex: o ? 0 : -1,
    ...g,
    children: A
  });
});
process.env.NODE_ENV !== "production" && (Af.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: c.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: c.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: c.bool,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
function O0(e) {
  return typeof e == "string";
}
const aa = (e) => e.scrollTop;
function Br(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
function Ei(e) {
  return `scale(${e}, ${e ** 2})`;
}
const _0 = {
  entering: {
    opacity: 1,
    transform: Ei(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, js = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ao = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: s,
    easing: i,
    in: a,
    onEnter: l,
    onEntered: u,
    onEntering: f,
    onExit: p,
    onExited: g,
    onExiting: y,
    style: h,
    timeout: d = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = wt,
    ...T
  } = t, A = Ru(), C = _.useRef(), x = An(), v = _.useRef(null), I = St(v, _n(s), r), D = (w) => (b) => {
    if (w) {
      const P = v.current;
      b === void 0 ? w(P) : w(P, b);
    }
  }, z = D(f), W = D((w, b) => {
    aa(w);
    const {
      duration: P,
      delay: N,
      easing: L
    } = Br({
      style: h,
      timeout: d,
      easing: i
    }, {
      mode: "enter"
    });
    let O;
    d === "auto" ? (O = x.transitions.getAutoHeightDuration(w.clientHeight), C.current = O) : O = P, w.style.transition = [x.transitions.create("opacity", {
      duration: O,
      delay: N
    }), x.transitions.create("transform", {
      duration: js ? O : O * 0.666,
      delay: N,
      easing: L
    })].join(","), l && l(w, b);
  }), m = D(u), $ = D(y), U = D((w) => {
    const {
      duration: b,
      delay: P,
      easing: N
    } = Br({
      style: h,
      timeout: d,
      easing: i
    }, {
      mode: "exit"
    });
    let L;
    d === "auto" ? (L = x.transitions.getAutoHeightDuration(w.clientHeight), C.current = L) : L = b, w.style.transition = [x.transitions.create("opacity", {
      duration: L,
      delay: P
    }), x.transitions.create("transform", {
      duration: js ? L : L * 0.666,
      delay: js ? P : P || L * 0.333,
      easing: N
    })].join(","), w.style.opacity = 0, w.style.transform = Ei(0.75), p && p(w);
  }), G = D(g), M = (w) => {
    d === "auto" && A.start(C.current || 0, w), n && n(v.current, w);
  };
  return /* @__PURE__ */ X.jsx(S, {
    appear: o,
    in: a,
    nodeRef: v,
    onEnter: W,
    onEntered: m,
    onEntering: z,
    onExit: U,
    onExited: G,
    onExiting: $,
    addEndListener: M,
    timeout: d === "auto" ? null : d,
    ...T,
    children: (w, {
      ownerState: b,
      ...P
    }) => /* @__PURE__ */ _.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Ei(0.75),
        visibility: w === "exited" && !a ? "hidden" : void 0,
        ..._0[w],
        ...h,
        ...s.props.style
      },
      ref: I,
      ...P
    })
  });
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
Ao && (Ao.muiSupportAuto = !0);
function P0(e) {
  const t = Dt(e);
  return t.body === e ? Ut(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function gn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ol(e) {
  return parseInt(Ut(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function k0(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function sl(e, t, r, n, o) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (i) => {
    const a = !s.includes(i), l = !k0(i);
    a && l && gn(i, o);
  });
}
function Ls(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function A0(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (P0(n)) {
      const i = wu(Ut(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${ol(n) + i}px`;
      const a = Dt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${ol(l) + i}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = Dt(n).body;
    else {
      const i = n.parentElement, a = Ut(n);
      s = i?.nodeName === "HTML" && a.getComputedStyle(i).overflowY === "scroll" ? i : n;
    }
    r.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: s,
      el: i,
      property: a
    }) => {
      s ? i.style.setProperty(a, s) : i.style.removeProperty(a);
    });
  };
}
function N0(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class I0 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && gn(t.modalRef, !1);
    const o = N0(r);
    sl(r, t.mount, t.modalRef, o, !0);
    const s = Ls(this.containers, (i) => i.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = Ls(this.containers, (s) => s.modals.includes(t)), o = this.containers[n];
    o.restore || (o.restore = A0(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = Ls(this.containers, (i) => i.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && gn(t.modalRef, r), sl(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && gn(i.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const $0 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function M0(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function D0(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function j0(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || D0(e));
}
function L0(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll($0)).forEach((n, o) => {
    const s = M0(n);
    s === -1 || !j0(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function B0() {
  return !0;
}
function No(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = L0,
    isEnabled: i = B0,
    open: a
  } = e, l = _.useRef(!1), u = _.useRef(null), f = _.useRef(null), p = _.useRef(null), g = _.useRef(null), y = _.useRef(!1), h = _.useRef(null), d = St(_n(t), h), S = _.useRef(null);
  _.useEffect(() => {
    !a || !h.current || (y.current = !r);
  }, [r, a]), _.useEffect(() => {
    if (!a || !h.current)
      return;
    const C = Dt(h.current);
    return h.current.contains(C.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", "-1")), y.current && h.current.focus()), () => {
      o || (p.current && p.current.focus && (l.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), _.useEffect(() => {
    if (!a || !h.current)
      return;
    const C = Dt(h.current), x = (D) => {
      S.current = D, !(n || !i() || D.key !== "Tab") && C.activeElement === h.current && D.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, v = () => {
      const D = h.current;
      if (D === null)
        return;
      if (!C.hasFocus() || !i() || l.current) {
        l.current = !1;
        return;
      }
      if (D.contains(C.activeElement) || n && C.activeElement !== u.current && C.activeElement !== f.current)
        return;
      if (C.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!y.current)
        return;
      let z = [];
      if ((C.activeElement === u.current || C.activeElement === f.current) && (z = s(h.current)), z.length > 0) {
        const W = !!(S.current?.shiftKey && S.current?.key === "Tab"), m = z[0], $ = z[z.length - 1];
        typeof m != "string" && typeof $ != "string" && (W ? $.focus() : m.focus());
      } else
        D.focus();
    };
    C.addEventListener("focusin", v), C.addEventListener("keydown", x, !0);
    const I = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && v();
    }, 50);
    return () => {
      clearInterval(I), C.removeEventListener("focusin", v), C.removeEventListener("keydown", x, !0);
    };
  }, [r, n, o, i, a, s]);
  const T = (C) => {
    p.current === null && (p.current = C.relatedTarget), y.current = !0, g.current = C.target;
    const x = t.props.onFocus;
    x && x(C);
  }, A = (C) => {
    p.current === null && (p.current = C.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ X.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ X.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: A,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ _.cloneElement(t, {
      ref: d,
      onFocus: T
    }), /* @__PURE__ */ X.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: A,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (No.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ur,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: c.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: c.func,
  /**
   * If `true`, focus is locked.
   */
  open: c.bool.isRequired
});
process.env.NODE_ENV !== "production" && (No.propTypes = Ui(No.propTypes));
function F0(e) {
  return typeof e == "function" ? e() : e;
}
const Io = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: s = !1
  } = t, [i, a] = _.useState(null), l = St(/* @__PURE__ */ _.isValidElement(n) ? _n(n) : null, r);
  if (En(() => {
    s || a(F0(o) || document.body);
  }, [o, s]), En(() => {
    if (i && !s)
      return mc(r, i), () => {
        mc(r, null);
      };
  }, [r, i, s]), s) {
    if (/* @__PURE__ */ _.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ _.cloneElement(n, u);
    }
    return n;
  }
  return i && /* @__PURE__ */ vp.createPortal(n, i);
});
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: c.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([jr, c.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool
});
process.env.NODE_ENV !== "production" && (Io.propTypes = Ui(Io.propTypes));
function ot(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: s,
    internalForwardedProps: i,
    shouldForwardComponentProp: a = !1,
    ...l
  } = t, {
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...g
  } = s, y = f[e] || n, h = $u(p[e], o), {
    props: {
      component: d,
      ...S
    },
    internalRef: T
  } = Iu({
    className: r,
    ...l,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: h
  }), A = St(T, h?.ref, t.ref), C = e === "root" ? d || u : d, x = ku(y, {
    ...e === "root" && !u && !f[e] && i,
    ...e !== "root" && !f[e] && i,
    ...S,
    ...C && !a && {
      as: C
    },
    ...C && a && {
      component: C
    },
    ref: A
  }, o);
  return [y, x];
}
const V0 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, $o = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = An(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: i = !0,
    children: a,
    easing: l,
    in: u,
    onEnter: f,
    onEntered: p,
    onEntering: g,
    onExit: y,
    onExited: h,
    onExiting: d,
    style: S,
    timeout: T = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: A = wt,
    ...C
  } = t, x = _.useRef(null), v = St(x, _n(a), r), I = (M) => (w) => {
    if (M) {
      const b = x.current;
      w === void 0 ? M(b) : M(b, w);
    }
  }, D = I(g), z = I((M, w) => {
    aa(M);
    const b = Br({
      style: S,
      timeout: T,
      easing: l
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = n.transitions.create("opacity", b), M.style.transition = n.transitions.create("opacity", b), f && f(M, w);
  }), W = I(p), m = I(d), $ = I((M) => {
    const w = Br({
      style: S,
      timeout: T,
      easing: l
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = n.transitions.create("opacity", w), M.style.transition = n.transitions.create("opacity", w), y && y(M);
  }), U = I(h), G = (M) => {
    s && s(x.current, M);
  };
  return /* @__PURE__ */ X.jsx(A, {
    appear: i,
    in: u,
    nodeRef: x,
    onEnter: z,
    onEntered: W,
    onEntering: D,
    onExit: $,
    onExited: U,
    onExiting: m,
    addEndListener: G,
    timeout: T,
    ...C,
    children: (M, {
      ownerState: w,
      ...b
    }) => /* @__PURE__ */ _.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !u ? "hidden" : void 0,
        ...V0[M],
        ...S,
        ...a.props.style
      },
      ref: v,
      ...b
    })
  });
});
process.env.NODE_ENV !== "production" && ($o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
function U0(e) {
  return Xe("MuiBackdrop", e);
}
Ge("MuiBackdrop", ["root", "invisible"]);
const z0 = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return ut({
    root: ["root", r && "invisible"]
  }, U0, t);
}, G0 = Ce("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), ca = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: i = "div",
    invisible: a = !1,
    open: l,
    components: u = {},
    componentsProps: f = {},
    slotProps: p = {},
    slots: g = {},
    TransitionComponent: y,
    transitionDuration: h,
    ...d
  } = n, S = {
    ...n,
    component: i,
    invisible: a
  }, T = z0(S), A = {
    transition: y,
    root: u.Root,
    ...g
  }, C = {
    ...f,
    ...p
  }, x = {
    slots: A,
    slotProps: C
  }, [v, I] = ot("root", {
    elementType: G0,
    externalForwardedProps: x,
    className: ge(T.root, s),
    ownerState: S
  }), [D, z] = ot("transition", {
    elementType: $o,
    externalForwardedProps: x,
    ownerState: S
  });
  return /* @__PURE__ */ X.jsx(D, {
    in: l,
    timeout: h,
    ...d,
    ...z,
    children: /* @__PURE__ */ X.jsx(v, {
      "aria-hidden": !0,
      ...I,
      classes: T,
      ref: r,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (ca.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: c.shape({
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: c.shape({
    root: c.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: c.bool,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: c.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
function W0(e) {
  return typeof e == "function" ? e() : e;
}
function H0(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const il = () => {
}, Kn = new I0();
function q0(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: s,
    onTransitionExited: i,
    children: a,
    onClose: l,
    open: u,
    rootRef: f
  } = e, p = _.useRef({}), g = _.useRef(null), y = _.useRef(null), h = St(y, f), [d, S] = _.useState(!u), T = H0(a);
  let A = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (A = !1);
  const C = () => Dt(g.current), x = () => (p.current.modalRef = y.current, p.current.mount = g.current, p.current), v = () => {
    Kn.mount(x(), {
      disableScrollLock: n
    }), y.current && (y.current.scrollTop = 0);
  }, I = Ar(() => {
    const w = W0(t) || C().body;
    Kn.add(x(), w), y.current && v();
  }), D = () => Kn.isTopModal(x()), z = Ar((w) => {
    g.current = w, w && (u && D() ? v() : y.current && gn(y.current, A));
  }), W = _.useCallback(() => {
    Kn.remove(x(), A);
  }, [A]);
  _.useEffect(() => () => {
    W();
  }, [W]), _.useEffect(() => {
    u ? I() : (!T || !o) && W();
  }, [u, W, T, o, I]);
  const m = (w) => (b) => {
    w.onKeyDown?.(b), !(b.key !== "Escape" || b.which === 229 || // Wait until IME is settled.
    !D()) && (r || (b.stopPropagation(), l && l(b, "escapeKeyDown")));
  }, $ = (w) => (b) => {
    w.onClick?.(b), b.target === b.currentTarget && l && l(b, "backdropClick");
  };
  return {
    getRootProps: (w = {}) => {
      const b = Nu(e);
      delete b.onTransitionEnter, delete b.onTransitionExited;
      const P = {
        ...b,
        ...w
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...P,
        onKeyDown: m(P),
        ref: h
      };
    },
    getBackdropProps: (w = {}) => {
      const b = w;
      return {
        "aria-hidden": !0,
        ...b,
        onClick: $(b),
        open: u
      };
    },
    getTransitionProps: () => {
      const w = () => {
        S(!1), s && s();
      }, b = () => {
        S(!0), i && i(), o && W();
      };
      return {
        onEnter: hc(w, a?.props.onEnter ?? il),
        onExited: hc(b, a?.props.onExited ?? il)
      };
    },
    rootRef: h,
    portalRef: z,
    isTopModal: D,
    exited: d,
    hasTransition: T
  };
}
function Y0(e) {
  return Xe("MuiModal", e);
}
Ge("MuiModal", ["root", "hidden", "backdrop"]);
const K0 = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return ut({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Y0, n);
}, J0 = Ce("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Gt(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), X0 = Ce(ca, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), la = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = X0,
    BackdropProps: s,
    classes: i,
    className: a,
    closeAfterTransition: l = !1,
    children: u,
    container: f,
    component: p,
    components: g = {},
    componentsProps: y = {},
    disableAutoFocus: h = !1,
    disableEnforceFocus: d = !1,
    disableEscapeKeyDown: S = !1,
    disablePortal: T = !1,
    disableRestoreFocus: A = !1,
    disableScrollLock: C = !1,
    hideBackdrop: x = !1,
    keepMounted: v = !1,
    onBackdropClick: I,
    onClose: D,
    onTransitionEnter: z,
    onTransitionExited: W,
    open: m,
    slotProps: $ = {},
    slots: U = {},
    // eslint-disable-next-line react/prop-types
    theme: G,
    ...M
  } = n, w = {
    ...n,
    closeAfterTransition: l,
    disableAutoFocus: h,
    disableEnforceFocus: d,
    disableEscapeKeyDown: S,
    disablePortal: T,
    disableRestoreFocus: A,
    disableScrollLock: C,
    hideBackdrop: x,
    keepMounted: v
  }, {
    getRootProps: b,
    getBackdropProps: P,
    getTransitionProps: N,
    portalRef: L,
    isTopModal: O,
    exited: B,
    hasTransition: K
  } = q0({
    ...w,
    rootRef: r
  }), J = {
    ...w,
    exited: B
  }, q = K0(J), Q = {};
  if (u.props.tabIndex === void 0 && (Q.tabIndex = "-1"), K) {
    const {
      onEnter: te,
      onExited: k
    } = N();
    Q.onEnter = te, Q.onExited = k;
  }
  const re = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...U
    },
    slotProps: {
      ...y,
      ...$
    }
  }, [ee, ne] = ot("root", {
    ref: r,
    elementType: J0,
    externalForwardedProps: {
      ...re,
      ...M,
      component: p
    },
    getSlotProps: b,
    ownerState: J,
    className: ge(a, q?.root, !J.open && J.exited && q?.hidden)
  }), [oe, Y] = ot("backdrop", {
    ref: s?.ref,
    elementType: o,
    externalForwardedProps: re,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (te) => P({
      ...te,
      onClick: (k) => {
        I && I(k), te?.onClick && te.onClick(k);
      }
    }),
    className: ge(s?.className, q?.backdrop),
    ownerState: J
  });
  return !v && !m && (!K || B) ? null : /* @__PURE__ */ X.jsx(Io, {
    ref: L,
    container: f,
    disablePortal: T,
    children: /* @__PURE__ */ X.jsxs(ee, {
      ...ne,
      children: [!x && o ? /* @__PURE__ */ X.jsx(oe, {
        ...Y
      }) : null, /* @__PURE__ */ X.jsx(No, {
        disableEnforceFocus: d,
        disableAutoFocus: h,
        disableRestoreFocus: A,
        isEnabled: O,
        open: m,
        children: /* @__PURE__ */ _.cloneElement(u, Q)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (la.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: c.object,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: c.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: c.shape({
    Backdrop: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([jr, c.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: c.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: c.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: c.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: c.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: c.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
function Q0(e) {
  return Xe("MuiPaper", e);
}
Ge("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Z0 = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return ut(s, Q0, o);
}, eE = Ce("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Gt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), ts = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiPaper"
  }), o = An(), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: u = "elevation",
    ...f
  } = n, p = {
    ...n,
    component: i,
    elevation: a,
    square: l,
    variant: u
  }, g = Z0(p);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ X.jsx(eE, {
    as: i,
    ownerState: p,
    className: ge(g.root, s),
    ref: r,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${dt("#fff", ri(a))}, ${dt("#fff", ri(a))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ts.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: mr(Pu, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: c.bool,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: c.oneOfType([c.oneOf(["elevation", "outlined"]), c.string])
});
function tE(e) {
  return Xe("MuiPopover", e);
}
Ge("MuiPopover", ["root", "paper"]);
function al(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function cl(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function ll(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function fn(e) {
  return typeof e == "function" ? e() : e;
}
const rE = (e) => {
  const {
    classes: t
  } = e;
  return ut({
    root: ["root"],
    paper: ["paper"]
  }, tE, t);
}, nE = Ce(la, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Nf = Ce(ts, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), If = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: l = "anchorEl",
    children: u,
    className: f,
    container: p,
    elevation: g = 8,
    marginThreshold: y = 16,
    open: h,
    PaperProps: d = {},
    // TODO: remove in v7
    slots: S = {},
    slotProps: T = {},
    transformOrigin: A = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: C,
    // TODO: remove in v7
    transitionDuration: x = "auto",
    TransitionProps: v = {},
    // TODO: remove in v7
    disableScrollLock: I = !1,
    ...D
  } = n, z = _.useRef(), W = {
    ...n,
    anchorOrigin: i,
    anchorReference: l,
    elevation: g,
    marginThreshold: y,
    transformOrigin: A,
    TransitionComponent: C,
    transitionDuration: x,
    TransitionProps: v
  }, m = rE(W), $ = _.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const Y = fn(s), te = Y && Y.nodeType === 1 ? Y : Dt(z.current).body, k = te.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const fe = te.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && fe.top === 0 && fe.left === 0 && fe.right === 0 && fe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: k.top + al(k, i.vertical),
      left: k.left + cl(k, i.horizontal)
    };
  }, [s, i.horizontal, i.vertical, a, l]), U = _.useCallback((Y) => ({
    vertical: al(Y, A.vertical),
    horizontal: cl(Y, A.horizontal)
  }), [A.horizontal, A.vertical]), G = _.useCallback((Y) => {
    const te = {
      width: Y.offsetWidth,
      height: Y.offsetHeight
    }, k = U(te);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ll(k)
      };
    const fe = $();
    let Re = fe.top - k.vertical, ze = fe.left - k.horizontal;
    const _t = Re + te.height, Pt = ze + te.width, Ct = Ut(fn(s)), mt = Ct.innerHeight - y, tr = Ct.innerWidth - y;
    if (y !== null && Re < y) {
      const Qe = Re - y;
      Re -= Qe, k.vertical += Qe;
    } else if (y !== null && _t > mt) {
      const Qe = _t - mt;
      Re -= Qe, k.vertical += Qe;
    }
    if (process.env.NODE_ENV !== "production" && te.height > mt && te.height && mt && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${te.height - mt}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && ze < y) {
      const Qe = ze - y;
      ze -= Qe, k.horizontal += Qe;
    } else if (Pt > tr) {
      const Qe = Pt - tr;
      ze -= Qe, k.horizontal += Qe;
    }
    return {
      top: `${Math.round(Re)}px`,
      left: `${Math.round(ze)}px`,
      transformOrigin: ll(k)
    };
  }, [s, l, $, U, y]), [M, w] = _.useState(h), b = _.useCallback(() => {
    const Y = z.current;
    if (!Y)
      return;
    const te = G(Y);
    te.top !== null && Y.style.setProperty("top", te.top), te.left !== null && (Y.style.left = te.left), Y.style.transformOrigin = te.transformOrigin, w(!0);
  }, [G]);
  _.useEffect(() => (I && window.addEventListener("scroll", b), () => window.removeEventListener("scroll", b)), [s, I, b]);
  const P = () => {
    b();
  }, N = () => {
    w(!1);
  };
  _.useEffect(() => {
    h && b();
  }), _.useImperativeHandle(o, () => h ? {
    updatePosition: () => {
      b();
    }
  } : null, [h, b]), _.useEffect(() => {
    if (!h)
      return;
    const Y = xu(() => {
      b();
    }), te = Ut(fn(s));
    return te.addEventListener("resize", Y), () => {
      Y.clear(), te.removeEventListener("resize", Y);
    };
  }, [s, h, b]);
  let L = x;
  const O = {
    slots: {
      transition: C,
      ...S
    },
    slotProps: {
      transition: v,
      paper: d,
      ...T
    }
  }, [B, K] = ot("transition", {
    elementType: Ao,
    externalForwardedProps: O,
    ownerState: W,
    getSlotProps: (Y) => ({
      ...Y,
      onEntering: (te, k) => {
        Y.onEntering?.(te, k), P();
      },
      onExited: (te) => {
        Y.onExited?.(te), N();
      }
    }),
    additionalProps: {
      appear: !0,
      in: h
    }
  });
  x === "auto" && !B.muiSupportAuto && (L = void 0);
  const J = p || (s ? Dt(fn(s)).body : void 0), [q, {
    slots: Q,
    slotProps: re,
    ...ee
  }] = ot("root", {
    ref: r,
    elementType: nE,
    externalForwardedProps: {
      ...O,
      ...D
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: S.backdrop
      },
      slotProps: {
        backdrop: Xg(typeof T.backdrop == "function" ? T.backdrop(W) : T.backdrop, {
          invisible: !0
        })
      },
      container: J,
      open: h
    },
    ownerState: W,
    className: ge(m.root, f)
  }), [ne, oe] = ot("paper", {
    ref: z,
    className: m.paper,
    elementType: Nf,
    externalForwardedProps: O,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: M ? void 0 : {
        opacity: 0
      }
    },
    ownerState: W
  });
  return /* @__PURE__ */ X.jsx(q, {
    ...ee,
    ...!O0(q) && {
      slots: Q,
      slotProps: re,
      disableScrollLock: I
    },
    children: /* @__PURE__ */ X.jsx(B, {
      ...K,
      timeout: L,
      children: /* @__PURE__ */ X.jsx(ne, {
        ...oe,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (If.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Su,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: mr(c.oneOfType([jr, c.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = fn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: c.shape({
    left: c.number.isRequired,
    top: c.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: c.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: c.object,
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([jr, c.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Pu,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: c.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: c.shape({
    component: bu
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    paper: c.elementType,
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: c.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: c.object
});
function oE(e) {
  return Xe("MuiMenu", e);
}
Ge("MuiMenu", ["root", "paper", "list"]);
const sE = {
  vertical: "top",
  horizontal: "right"
}, iE = {
  vertical: "top",
  horizontal: "left"
}, aE = (e) => {
  const {
    classes: t
  } = e;
  return ut({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, oE, t);
}, cE = Ce(If, {
  shouldForwardProp: (e) => Qo(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), lE = Ce(Nf, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), uE = Ce(Af, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), $f = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: i,
    disableAutoFocusItem: a = !1,
    MenuListProps: l = {},
    onClose: u,
    open: f,
    PaperProps: p = {},
    PopoverClasses: g,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: h,
      ...d
    } = {},
    variant: S = "selectedMenu",
    slots: T = {},
    slotProps: A = {},
    ...C
  } = n, x = sg(), v = {
    ...n,
    autoFocus: o,
    disableAutoFocusItem: a,
    MenuListProps: l,
    onEntering: h,
    PaperProps: p,
    transitionDuration: y,
    TransitionProps: d,
    variant: S
  }, I = aE(v), D = o && !a && f, z = _.useRef(null), W = (L, O) => {
    z.current && z.current.adjustStyleForScrollbar(L, {
      direction: x ? "rtl" : "ltr"
    }), h && h(L, O);
  }, m = (L) => {
    L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
  };
  let $ = -1;
  _.Children.map(s, (L, O) => {
    /* @__PURE__ */ _.isValidElement(L) && (process.env.NODE_ENV !== "production" && Dr.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (S === "selectedMenu" && L.props.selected || $ === -1) && ($ = O));
  });
  const U = {
    slots: T,
    slotProps: {
      list: l,
      transition: d,
      paper: p,
      ...A
    }
  }, G = Fh({
    elementType: T.root,
    externalSlotProps: A.root,
    ownerState: v,
    className: [I.root, i]
  }), [M, w] = ot("paper", {
    className: I.paper,
    elementType: lE,
    externalForwardedProps: U,
    shouldForwardComponentProp: !0,
    ownerState: v
  }), [b, P] = ot("list", {
    className: ge(I.list, l.className),
    elementType: uE,
    shouldForwardComponentProp: !0,
    externalForwardedProps: U,
    getSlotProps: (L) => ({
      ...L,
      onKeyDown: (O) => {
        m(O), L.onKeyDown?.(O);
      }
    }),
    ownerState: v
  }), N = typeof U.slotProps.transition == "function" ? U.slotProps.transition(v) : U.slotProps.transition;
  return /* @__PURE__ */ X.jsx(cE, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? sE : iE,
    slots: {
      root: T.root,
      paper: M,
      backdrop: T.backdrop,
      ...T.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: T.transition
      }
    },
    slotProps: {
      root: G,
      paper: w,
      backdrop: typeof A.backdrop == "function" ? A.backdrop(v) : A.backdrop,
      transition: {
        ...N,
        onEntering: (...L) => {
          W(...L), N?.onEntering?.(...L);
        }
      }
    },
    open: f,
    ref: r,
    transitionDuration: y,
    ownerState: v,
    ...C,
    classes: g,
    children: /* @__PURE__ */ X.jsx(b, {
      actions: z,
      autoFocus: o && ($ === -1 || a),
      autoFocusItem: D,
      variant: S,
      ...P,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && ($f.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: c.oneOfType([jr, c.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: c.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: c.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: c.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: c.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: c.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    list: c.oneOfType([c.func, c.object]),
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    list: c.elementType,
    paper: c.elementType,
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: c.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
const ul = Ge("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fl = Ge("MuiListItemIcon", ["root", "alignItemsFlexStart"]), dl = Ge("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function fE(e) {
  return Xe("MuiMenuItem", e);
}
const rn = Ge("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), dE = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, pE = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: o,
    selected: s,
    classes: i
  } = e, l = ut({
    root: ["root", r && "dense", t && "disabled", !o && "gutters", n && "divider", s && "selected"]
  }, fE, i);
  return {
    ...i,
    ...l
  };
}, hE = Ce(sa, {
  shouldForwardProp: (e) => Qo(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: dE
})(Gt(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${rn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : dt(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${rn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : dt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${rn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : dt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : dt(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${rn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${rn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ul.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ul.inset}`]: {
    marginLeft: 52
  },
  [`& .${dl.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${dl.inset}`]: {
    paddingLeft: 36
  },
  [`& .${fl.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${fl.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Mf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: s = "li",
    dense: i = !1,
    divider: a = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: f = "menuitem",
    tabIndex: p,
    className: g,
    ...y
  } = n, h = _.useContext(ko), d = _.useMemo(() => ({
    dense: i || h.dense || !1,
    disableGutters: l
  }), [h.dense, i, l]), S = _.useRef(null);
  En(() => {
    o && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const T = {
    ...n,
    dense: d.dense,
    divider: a,
    disableGutters: l
  }, A = pE(n), C = St(S, r);
  let x;
  return n.disabled || (x = p !== void 0 ? p : -1), /* @__PURE__ */ X.jsx(ko.Provider, {
    value: d,
    children: /* @__PURE__ */ X.jsx(hE, {
      ref: C,
      role: f,
      tabIndex: x,
      component: s,
      focusVisibleClassName: ge(A.focusVisible, u),
      className: ge(A.root, g),
      ...y,
      ownerState: T,
      classes: A
    })
  });
});
process.env.NODE_ENV !== "production" && (Mf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: c.bool,
  /**
   * @ignore
   */
  disabled: c.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: c.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: c.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: c.string,
  /**
   * @ignore
   */
  role: c.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * @default 0
   */
  tabIndex: c.number
});
function mE(e) {
  return Xe("MuiDialog", e);
}
const Bs = Ge("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Df = /* @__PURE__ */ _.createContext({});
process.env.NODE_ENV !== "production" && (Df.displayName = "DialogContext");
const gE = Ce(ca, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), yE = (e) => {
  const {
    classes: t,
    scroll: r,
    maxWidth: n,
    fullWidth: o,
    fullScreen: s
  } = e, i = {
    root: ["root"],
    container: ["container", `scroll${me(r)}`],
    paper: ["paper", `paperScroll${me(r)}`, `paperWidth${me(String(n))}`, o && "paperFullWidth", s && "paperFullScreen"]
  };
  return ut(i, mE, t);
}, vE = Ce(la, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), bE = Ce("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.container, t[`scroll${me(r.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), EE = Ce(ts, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.paper, t[`scrollPaper${me(r.scroll)}`], t[`paperWidth${me(String(r.maxWidth))}`], r.fullWidth && t.paperFullWidth, r.fullScreen && t.paperFullScreen];
  }
})(Gt(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${Bs.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${Bs.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Bs.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), jf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiDialog"
  }), o = An(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": i,
    "aria-labelledby": a,
    "aria-modal": l = !0,
    BackdropComponent: u,
    BackdropProps: f,
    children: p,
    className: g,
    disableEscapeKeyDown: y = !1,
    fullScreen: h = !1,
    fullWidth: d = !1,
    maxWidth: S = "sm",
    onBackdropClick: T,
    onClick: A,
    onClose: C,
    open: x,
    PaperComponent: v = ts,
    PaperProps: I = {},
    scroll: D = "paper",
    slots: z = {},
    slotProps: W = {},
    TransitionComponent: m = $o,
    transitionDuration: $ = s,
    TransitionProps: U,
    ...G
  } = n, M = {
    ...n,
    disableEscapeKeyDown: y,
    fullScreen: h,
    fullWidth: d,
    maxWidth: S,
    scroll: D
  }, w = yE(M), b = _.useRef(), P = (Re) => {
    b.current = Re.target === Re.currentTarget;
  }, N = (Re) => {
    A && A(Re), b.current && (b.current = null, T && T(Re), C && C(Re, "backdropClick"));
  }, L = Tu(a), O = _.useMemo(() => ({
    titleId: L
  }), [L]), B = {
    transition: m,
    ...z
  }, K = {
    transition: U,
    paper: I,
    backdrop: f,
    ...W
  }, J = {
    slots: B,
    slotProps: K
  }, [q, Q] = ot("root", {
    elementType: vE,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    ownerState: M,
    className: ge(w.root, g),
    ref: r
  }), [re, ee] = ot("backdrop", {
    elementType: gE,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    ownerState: M
  }), [ne, oe] = ot("paper", {
    elementType: EE,
    shouldForwardComponentProp: !0,
    externalForwardedProps: J,
    ownerState: M,
    className: ge(w.paper, I.className)
  }), [Y, te] = ot("container", {
    elementType: bE,
    externalForwardedProps: J,
    ownerState: M,
    className: ge(w.container)
  }), [k, fe] = ot("transition", {
    elementType: $o,
    externalForwardedProps: J,
    ownerState: M,
    additionalProps: {
      appear: !0,
      in: x,
      timeout: $,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ X.jsx(q, {
    closeAfterTransition: !0,
    slots: {
      backdrop: re
    },
    slotProps: {
      backdrop: {
        transitionDuration: $,
        as: u,
        ...ee
      }
    },
    disableEscapeKeyDown: y,
    onClose: C,
    open: x,
    onClick: N,
    ...Q,
    ...G,
    children: /* @__PURE__ */ X.jsx(k, {
      ...fe,
      children: /* @__PURE__ */ X.jsx(Y, {
        onMouseDown: P,
        ...te,
        children: /* @__PURE__ */ X.jsx(ne, {
          as: v,
          elevation: 24,
          role: "dialog",
          "aria-describedby": i,
          "aria-labelledby": L,
          "aria-modal": l,
          ...oe,
          children: /* @__PURE__ */ X.jsx(Df.Provider, {
            value: O,
            children: p
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (jf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": c.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": c.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": c.oneOfType([c.oneOf(["false", "true"]), c.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * @ignore
   */
  BackdropProps: c.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: c.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: c.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: c.oneOfType([c.oneOf(["xs", "sm", "md", "lg", "xl", !1]), c.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: c.func,
  /**
   * @ignore
   */
  onClick: c.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: c.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: c.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: c.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    container: c.oneOfType([c.func, c.object]),
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    container: c.elementType,
    paper: c.elementType,
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: c.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: c.object
});
function SE(e) {
  return Xe("MuiDialogActions", e);
}
Ge("MuiDialogActions", ["root", "spacing"]);
const xE = (e) => {
  const {
    classes: t,
    disableSpacing: r
  } = e;
  return ut({
    root: ["root", !r && "spacing"]
  }, SE, t);
}, TE = Ce("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), Lf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: s = !1,
    ...i
  } = n, a = {
    ...n,
    disableSpacing: s
  }, l = xE(a);
  return /* @__PURE__ */ X.jsx(TE, {
    className: ge(l.root, o),
    ownerState: a,
    ref: r,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (Lf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
function CE(e) {
  return Xe("MuiDialogContent", e);
}
Ge("MuiDialogContent", ["root", "dividers"]);
const RE = Ge("MuiDialogTitle", ["root"]), wE = (e) => {
  const {
    classes: t,
    dividers: r
  } = e;
  return ut({
    root: ["root", r && "dividers"]
  }, CE, t);
}, OE = Ce("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.dividers && t.dividers];
  }
})(Gt(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${RE.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Bf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = tt({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: s = !1,
    ...i
  } = n, a = {
    ...n,
    dividers: s
  }, l = wE(a);
  return /* @__PURE__ */ X.jsx(OE, {
    className: ge(l.root, o),
    ownerState: a,
    ref: r,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (Bf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
function _E(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), s = Ut(t);
  let i;
  if (t.fakeTransform)
    i = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    i = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let a = 0, l = 0;
  if (i && i !== "none" && typeof i == "string") {
    const u = i.split("(")[1].split(")")[0].split(",");
    a = parseInt(u[4], 10), l = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + a - n.left}px)` : `translateX(${s.innerWidth + a - n.left}px)` : e === "right" ? o ? `translateX(-${n.right - o.left - a}px)` : `translateX(-${n.left + n.width - a}px)` : e === "up" ? o ? `translateY(${o.bottom + l - n.top}px)` : `translateY(${s.innerHeight + l - n.top}px)` : o ? `translateY(-${n.top - o.top + n.height - l}px)` : `translateY(-${n.top + n.height - l}px)`;
}
function Ff(e) {
  return typeof e == "function" ? e() : e;
}
function Jn(e, t, r) {
  const n = Ff(r), o = _E(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const Vf = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = An(), o = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, s = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: l,
    container: u,
    direction: f = "down",
    easing: p = o,
    in: g,
    onEnter: y,
    onEntered: h,
    onEntering: d,
    onExit: S,
    onExited: T,
    onExiting: A,
    style: C,
    timeout: x = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = wt,
    ...I
  } = t, D = _.useRef(null), z = St(_n(l), D, r), W = (N) => (L) => {
    N && (L === void 0 ? N(D.current) : N(D.current, L));
  }, m = W((N, L) => {
    Jn(f, N, u), aa(N), y && y(N, L);
  }), $ = W((N, L) => {
    const O = Br({
      timeout: x,
      style: C,
      easing: p
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = n.transitions.create("-webkit-transform", {
      ...O
    }), N.style.transition = n.transitions.create("transform", {
      ...O
    }), N.style.webkitTransform = "none", N.style.transform = "none", d && d(N, L);
  }), U = W(h), G = W(A), M = W((N) => {
    const L = Br({
      timeout: x,
      style: C,
      easing: p
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = n.transitions.create("-webkit-transform", L), N.style.transition = n.transitions.create("transform", L), Jn(f, N, u), S && S(N);
  }), w = W((N) => {
    N.style.webkitTransition = "", N.style.transition = "", T && T(N);
  }), b = (N) => {
    i && i(D.current, N);
  }, P = _.useCallback(() => {
    D.current && Jn(f, D.current, u);
  }, [f, u]);
  return _.useEffect(() => {
    if (g || f === "down" || f === "right")
      return;
    const N = xu(() => {
      D.current && Jn(f, D.current, u);
    }), L = Ut(D.current);
    return L.addEventListener("resize", N), () => {
      N.clear(), L.removeEventListener("resize", N);
    };
  }, [f, g, u]), _.useEffect(() => {
    g || P();
  }, [g, P]), /* @__PURE__ */ X.jsx(v, {
    nodeRef: D,
    onEnter: m,
    onEntered: U,
    onEntering: $,
    onExit: M,
    onExited: w,
    onExiting: G,
    addEndListener: b,
    appear: a,
    in: g,
    timeout: x,
    ...I,
    children: (N, {
      ownerState: L,
      ...O
    }) => /* @__PURE__ */ _.cloneElement(l, {
      ref: z,
      style: {
        visibility: N === "exited" && !g ? "hidden" : void 0,
        ...C,
        ...l.props.style
      },
      ...O
    })
  });
});
process.env.NODE_ENV !== "production" && (Vf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: mr(c.oneOfType([jr, c.func]), (e) => {
    if (e.open) {
      const t = Ff(e.container);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: c.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
const PE = _.forwardRef(function(t, r) {
  return /* @__PURE__ */ E(Vf, { direction: "up", ref: r, ...t });
});
function Uf({
  open: e,
  setOpen: t,
  contentText: r,
  callback: n
}) {
  const { t: o } = lt(), s = () => {
    t(!1);
  }, i = () => {
    t(!1), n();
  };
  return /* @__PURE__ */ E(_.Fragment, { children: /* @__PURE__ */ se(
    jf,
    {
      open: e,
      TransitionComponent: PE,
      keepMounted: !0,
      onClose: s,
      "aria-describedby": "alert-dialog-slide-description",
      children: [
        /* @__PURE__ */ E(Bf, { children: /* @__PURE__ */ E(st, { variant: "h6", children: r }) }),
        /* @__PURE__ */ se(Lf, { children: [
          /* @__PURE__ */ E(Po, { onClick: s, color: "primary", children: o("CHAT.BUT_CLOSE") }),
          /* @__PURE__ */ E(Po, { onClick: i, color: "warning", children: o("CHAT.BUT_CONFIRM") })
        ] })
      ]
    }
  ) });
}
const kE = Ce((e) => /* @__PURE__ */ E(
  $f,
  {
    elevation: 0,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    ...e
  }
))(({ theme: e }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: e.spacing(1),
    minWidth: 180,
    color: e.palette.mode === "light" ? "rgb(55, 65, 81)" : e.palette.grey[300],
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: e.palette.text.secondary,
        marginRight: e.spacing(1.5)
      },
      "&:active": {
        backgroundColor: dt(
          e.palette.primary.main,
          e.palette.action.selectedOpacity
        )
      }
    }
  }
})), AE = (e) => {
  const t = new Date(e.visitDate);
  return `${e.plExamName} (${wo(t, "HH:mm")} - ${wo(
    new Date(t.getTime() + e.duration * 6e4),
    "HH:mm"
  )})`;
};
function NE(e) {
  const { t } = lt(), [r, n] = ie.useState(null), [o, s] = ie.useState(null), [i, a] = ie.useState(!1), l = !!r, u = (y) => {
    n(y.currentTarget);
  }, f = () => {
    n(null);
  }, p = (y) => {
    n(null), s(y.visitId), y.conferenceStatus === "finished" ? a(!0) : e.onVideoCall(e.chat, y.visitId);
  }, g = ie.useMemo(() => e.visitData.filter((y) => y.contactId === e.chat.userId), [e.visitData, e.chat]);
  return /* @__PURE__ */ se("div", { children: [
    /* @__PURE__ */ E(
      Po,
      {
        id: "conference-button",
        "aria-controls": l ? "conference-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": l ? "true" : void 0,
        color: "primary",
        size: "small",
        variant: "contained",
        disableElevation: !0,
        onClick: u,
        startIcon: /* @__PURE__ */ E(zb, {}),
        endIcon: /* @__PURE__ */ E(xf, {}),
        disabled: g.length === 0,
        children: t("CHAT.CONFERENCE.START")
      }
    ),
    /* @__PURE__ */ E(
      Uf,
      {
        open: i,
        setOpen: a,
        contentText: t("CHAT.CONFERENCE.CONFIRM_RECREATE_CONF"),
        callback: () => {
          o && i && e.onVideoCall(e.chat, o, !0);
        }
      }
    ),
    /* @__PURE__ */ E(
      kE,
      {
        id: "conference-menu",
        MenuListProps: {
          "aria-labelledby": "conference-button"
        },
        anchorEl: r,
        open: l,
        onClose: f,
        children: g.map((y) => /* @__PURE__ */ se(
          Mf,
          {
            onClick: () => p(y),
            value: y.visitId,
            disableRipple: !0,
            children: [
              y.conferenceStatus === "finished" ? /* @__PURE__ */ E(Ub, {}) : /* @__PURE__ */ E(Vb, {}),
              AE(y)
            ]
          },
          y.visitId
        ))
      }
    )
  ] });
}
function IE(e) {
  const [t, r] = Je(e), [n, o] = Je(e <= 0), s = Et(null), i = Ae(() => {
    s.current || (s.current = setInterval(() => {
      r((l) => l <= 1 ? (clearInterval(s.current), s.current = null, o(!0), 0) : l - 1);
    }, 1e3));
  }, []), a = Ae((l) => {
    s.current && (clearInterval(s.current), s.current = null), r(l), o(l <= 0);
  }, []);
  return Ke(() => (!n && t > 0 && i(), () => {
    s.current && (clearInterval(s.current), s.current = null);
  }), [i, t, n]), { counter: t, isFinished: n, reset: a };
}
const $E = ie.forwardRef(function(t, r) {
  return /* @__PURE__ */ E(sp, { direction: "up", ref: r, ...t });
});
function ME({
  children: e,
  open: t,
  setOpen: r,
  severity: n = "warning"
}) {
  const { t: o } = lt(), s = () => {
    r(!1);
  };
  return /* @__PURE__ */ se(
    Gl,
    {
      open: t,
      TransitionComponent: $E,
      keepMounted: !0,
      onClose: s,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [
        /* @__PURE__ */ E(np, { children: /* @__PURE__ */ E(Do, { severity: n, children: typeof e == "string" ? /* @__PURE__ */ E(st, { variant: "body2", children: e }) : e }) }),
        /* @__PURE__ */ E(op, { children: /* @__PURE__ */ E(vo, { onClick: s, variant: "text", children: o("CHAT.BUT_CLOSE") }) })
      ]
    }
  );
}
function DE(e) {
  const t = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), n = e % 60, o = (s) => s.toString().padStart(2, "0");
  return `${o(t)}:${o(r)}:${o(n)}`;
}
function jE({ finishDate: e }) {
  const { t } = lt(), [r, n] = Je(!1), o = Date.now(), s = typeof e == "string" ? new Date(e).getTime() : e.getTime(), i = Math.max(0, Math.round((s - o) / 1e3)), { counter: a, isFinished: l } = IE(i), { strTime: u } = Rn(() => ({ strTime: DE(a) }), [a]);
  return Ke(() => {
    a === 180 && n(!0);
  }, [a]), l ? null : /* @__PURE__ */ se(Ne, { textAlign: "center", children: [
    /* @__PURE__ */ se(st, { variant: "body2", component: "span", children: [
      t("CHAT.CONFERENCE.LEFT_TIME"),
      ":",
      " "
    ] }),
    /* @__PURE__ */ E(st, { variant: "button", component: "span", children: u }),
    /* @__PURE__ */ se(ME, { open: r, setOpen: n, severity: "info", children: [
      /* @__PURE__ */ se(st, { variant: "body1", textAlign: "center", children: [
        t("CHAT.CONFERENCE.UntillTheEnd"),
        ":"
      ] }),
      /* @__PURE__ */ E(st, { variant: "h6", textAlign: "center", children: u })
    ] })
  ] });
}
const LE = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), pl = ({
  onClick: e,
  active: t = !1
}) => /* @__PURE__ */ E(ip, { title: "Поиск по сообщениям", children: /* @__PURE__ */ E(
  qt,
  {
    size: "medium",
    color: t ? "primary" : "default",
    onClick: e,
    sx: { width: 40, height: 40 },
    children: /* @__PURE__ */ E(LE, { fontSize: "medium" })
  }
) }), BE = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), hl = ({
  anchorEl: e,
  open: t,
  value: r,
  onClose: n,
  onChange: o
}) => {
  const { t: s } = lt(), i = Mi(
    (y) => y.breakpoints.down("md")
  ), [a, l] = ie.useState(r);
  ie.useEffect(() => {
    (!i || !t) && l(r);
  }, [r, t, i]);
  const u = (y) => {
    const h = y.target.value;
    l(h), o(h);
  }, f = () => {
    l(""), o(""), i && n();
  }, p = (y) => {
    y.key === "Enter" && i && n();
  }, g = /* @__PURE__ */ E(
    $i,
    {
      autoFocus: i ? t : !1,
      fullWidth: !0,
      size: "small",
      variant: "outlined",
      label: s("CHAT.MESSAGE.SEARCH", "Поиск сообщений"),
      value: a,
      onChange: u,
      onKeyDown: p,
      slotProps: {
        input: {
          endAdornment: a ? /* @__PURE__ */ E(Wl, { position: "end", children: /* @__PURE__ */ E(qt, { size: "small", onClick: f, children: /* @__PURE__ */ E(BE, { fontSize: "small" }) }) }) : void 0
        }
      }
    }
  );
  return i ? /* @__PURE__ */ E(
    Yl,
    {
      anchorEl: e,
      open: t,
      onClose: n,
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      keepMounted: !0,
      children: /* @__PURE__ */ E(Ne, { sx: { px: 2, py: 1.5, maxWidth: 280 }, children: g })
    }
  ) : /* @__PURE__ */ E(Ne, { sx: { maxWidth: 280 }, children: g });
}, FE = We(
  (e) => ({
    paper: {
      padding: e.spacing(1)
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff"
    }
  })
), VE = (e, t) => {
  const n = [`${Array.isArray(e.members) ? e.members.length : 0} ${t("CHAT.MEMBERS")}`], o = (e.members || []).reduce(
    (s, i) => i.online ? s + 1 : s,
    0
  );
  return o && n.push(`${o} ${t("CHAT.STATUS.ONLINE")}`), n.join(", ");
}, UE = ({
  apiUrl: e,
  user: t,
  chat: r,
  typing: n,
  conference: o,
  visitData: s,
  conferenceJoined: i,
  className: a,
  operators: l,
  messageSearch: u,
  onVideoCall: f,
  onVideoEnd: p,
  onConferencePause: g,
  onOperatorAdd: y,
  onLeaveGroup: h,
  onContactClick: d,
  onMessageSearchChange: S
}) => {
  const T = FE(), { t: A } = lt(), C = Mi(
    (k) => k.breakpoints.down("md")
  ), [x, v] = Je(null), [I, D] = Je(!1), [z, W] = ie.useState(!1), m = Et(null), [$, U] = Je(
    null
  ), G = Ae(() => {
  }, []);
  if (!r)
    return /* @__PURE__ */ E(
      no,
      {
        avatar: /* @__PURE__ */ E(Vt, {}),
        title: "",
        subheader: "",
        className: a
      }
    );
  const M = Ae(() => {
    v(null), m.current && (clearTimeout(m.current), m.current = null);
  }, []), w = Ae(
    (k) => {
      v((fe) => fe ?? k.currentTarget), m.current && (clearTimeout(m.current), m.current = null);
    },
    []
  ), b = Ae(() => {
    m.current || (m.current = setTimeout(() => {
      M();
    }, 1e3));
  }, [M]), P = Ae(() => {
    D(!0);
  }, []), N = Ae(
    (k) => {
      D(!1), y && k && r && y(r, k);
    },
    [r, y]
  ), L = Ae(
    (k) => {
      U(k.currentTarget);
    },
    []
  ), O = Ae(() => {
    U(null);
  }, []), B = Ae(
    (k) => {
      S && S(k);
    },
    [S]
  ), K = /* @__PURE__ */ E(
    hl,
    {
      anchorEl: $,
      open: !!$,
      value: u,
      onClose: O,
      onChange: B
    }
  ), J = () => /* @__PURE__ */ E(
    hl,
    {
      anchorEl: null,
      open: !1,
      value: u,
      onClose: G,
      onChange: B
    }
  ), q = r;
  if (q.groupId)
    return /* @__PURE__ */ se(Mr, { children: [
      /* @__PURE__ */ E(
        no,
        {
          avatar: /* @__PURE__ */ E(Vt, { alt: q.name, className: T.avatarGroup, children: /* @__PURE__ */ E(Sf, {}) }),
          title: q.name,
          subheader: /* @__PURE__ */ se(ie.Fragment, { children: [
            /* @__PURE__ */ E(
              "span",
              {
                id: "mouse-over-span",
                "aria-owns": x ? "mouse-over-popover" : void 0,
                "aria-haspopup": "true",
                onMouseEnter: w,
                onMouseLeave: b,
                children: VE(q, A)
              }
            ),
            /* @__PURE__ */ E(
              ql,
              {
                id: "mouse-over-popover",
                classes: {
                  paper: T.paper
                },
                sx: { pointerEvents: "none" },
                open: !!x,
                anchorEl: x,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                onClose: M,
                disableRestoreFocus: !0,
                children: /* @__PURE__ */ E(
                  vf,
                  {
                    apiUrl: e,
                    contacts: q.members,
                    onContactClick: d,
                    owner: q.userId,
                    onMouseEnter: w,
                    onMouseLeave: b,
                    sx: { pointerEvents: "all" }
                  }
                )
              }
            )
          ] }),
          className: a,
          action: /* @__PURE__ */ se(
            Ne,
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              sx: { "& > *": { flexShrink: 0 } },
              children: [
                C ? /* @__PURE__ */ E(
                  pl,
                  {
                    onClick: L,
                    active: !!u
                  }
                ) : J(),
                t.role === 4 && /* @__PURE__ */ se(ie.Fragment, { children: [
                  /* @__PURE__ */ E(
                    qt,
                    {
                      "aria-label": "add user",
                      onClick: P,
                      children: /* @__PURE__ */ E(Fb, {})
                    }
                  ),
                  /* @__PURE__ */ E(
                    fb,
                    {
                      apiUrl: e,
                      open: I,
                      contacts: l,
                      onClose: N
                    }
                  )
                ] }),
                t.role === 4 && Array.isArray(q.members) && q.members.some(
                  (k) => k.userId !== t.userId && k.role === 4
                ) && h && /* @__PURE__ */ E(
                  qt,
                  {
                    "aria-label": "leave group",
                    onClick: () => h(q),
                    children: /* @__PURE__ */ E(Ef, {})
                  }
                )
              ]
            }
          )
        }
      ),
      C ? K : null
    ] });
  const Q = r, re = !!(n && n.contactId && n.userId === Q.userId), ee = o != null && !lo(o), ne = t.role != null && [3, 4].includes(t.role), oe = ee && i && t.role !== 1 && typeof g == "function", Y = ee && ne && typeof p == "function", te = !ee && ne && typeof f == "function";
  return /* @__PURE__ */ se(Mr, { children: [
    /* @__PURE__ */ E(
      no,
      {
        avatar: /* @__PURE__ */ E(
          Vt,
          {
            alt: Q.username,
            src: Q.avatar ? Zt(e, Q.avatar) : ""
          }
        ),
        title: /* @__PURE__ */ E(
          st,
          {
            variant: "h6",
            sx: (k) => ({
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "0.9rem",
              [k.breakpoints.down("md")]: {
                fontSize: "0.8rem"
              },
              [k.breakpoints.down("sm")]: {
                whiteSpace: "wrap",
                fontSize: "0.7rem"
              }
            }),
            children: Q.username
          }
        ),
        subheader: /* @__PURE__ */ E(yf, { contact: Q, isTyping: re }),
        className: a,
        action: /* @__PURE__ */ se(
          Ne,
          {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            sx: { "& > *": { flexShrink: 0 } },
            children: [
              C ? /* @__PURE__ */ E(
                pl,
                {
                  onClick: L,
                  active: !!u
                }
              ) : J(),
              oe && o && /* @__PURE__ */ E(
                vo,
                {
                  "aria-label": "cancel call",
                  variant: "contained",
                  color: "secondary",
                  size: "small",
                  startIcon: /* @__PURE__ */ E(Bb, { color: "primary" }),
                  onClick: () => {
                    g && g(o);
                  },
                  children: A("CHAT.CONFERENCE.PAUSE")
                }
              ),
              Y && o && /* @__PURE__ */ se(ie.Fragment, { children: [
                /* @__PURE__ */ E(
                  vo,
                  {
                    "aria-label": "cancel call",
                    variant: "contained",
                    color: "warning",
                    size: "small",
                    startIcon: /* @__PURE__ */ E(Lb, { color: "inherit" }),
                    onClick: () => W(!0),
                    children: A("CHAT.CONFERENCE.FINISH")
                  }
                ),
                /* @__PURE__ */ E(
                  Uf,
                  {
                    open: z,
                    setOpen: W,
                    contentText: A("CHAT.CONFERENCE.CONFIRM_FINISH_CONF"),
                    callback: () => {
                      p && p(o);
                    }
                  }
                )
              ] }),
              te && f && /* @__PURE__ */ E(
                NE,
                {
                  visitData: s,
                  chat: Q,
                  onVideoCall: f
                }
              ),
              o && o.finishDate != null && /* @__PURE__ */ E(jE, { finishDate: o.finishDate })
            ]
          }
        )
      }
    ),
    C ? K : null
  ] });
};
function zE() {
  let e = /* @__PURE__ */ new Map();
  function t({ root: r, rootMargin: n, threshold: o }) {
    let s = e.get(r);
    s || (s = /* @__PURE__ */ new Map(), e.set(r, s));
    let i = JSON.stringify({ rootMargin: n, threshold: o }), a = s.get(i);
    if (!a) {
      let l = /* @__PURE__ */ new Map();
      a = { observer: new IntersectionObserver((u) => {
        u.forEach((f) => {
          l.get(f.target)?.(f);
        });
      }, { root: r, rootMargin: n, threshold: o }), entryCallbacks: l }, s.set(i, a);
    }
    return { observe: (l, u) => {
      a.entryCallbacks.set(l, u), a.observer.observe(l);
    }, unobserve: (l) => {
      a.entryCallbacks.delete(l), a.observer.unobserve(l);
    } };
  }
  return { getObserver: t };
}
var GE = "0px", WE = [0], HE = zE();
function qE(e) {
  let t = e?.rootMargin ?? GE, r = e?.threshold ?? WE, n = Et(null), o = Et(null), s = Et(null), [i, a] = Je(), l = Ae(() => {
    let g = n.current;
    if (!g) {
      a(void 0);
      return;
    }
    let y = HE.getObserver({ root: o.current, rootMargin: t, threshold: r });
    y.observe(g, (h) => {
      a(h);
    }), s.current = y;
  }, [t, r]), u = Ae(() => {
    let g = s.current, y = n.current;
    y && g?.unobserve(y), s.current = null;
  }, []), f = Ae((g) => {
    u(), n.current = g, l();
  }, [l, u]), p = Ae((g) => {
    u(), o.current = g, l();
  }, [l, u]);
  return [f, { entry: i, rootRef: p }];
}
var YE = qE;
function KE(e) {
  let [t, r] = YE(e), n = !!r.entry?.isIntersecting, [o, s] = Je(n);
  return n && !o && s(!0), [t, { ...r, isVisible: n, wasEverVisible: o }];
}
var JE = KE, XE = 100;
function QE({ loading: e, hasNextPage: t, onLoadMore: r, rootMargin: n, disabled: o, delayInMs: s = XE }) {
  let i = Et(r), [a, { rootRef: l, isVisible: u }] = JE({ rootMargin: n });
  Ke(() => {
    i.current = r;
  }, [r]);
  let f = !o && !e && u && t;
  return Ke(() => {
    if (f) {
      let p = setTimeout(() => {
        i.current();
      }, s);
      return () => {
        clearTimeout(p);
      };
    }
  }, [f, s]), [a, { rootRef: l }];
}
var ZE = QE;
function eS(e, t, r) {
  const n = Et(e);
  Ke(() => {
    n.current = e;
  }, [e]), Ke(() => {
    if (!t)
      return;
    const s = setInterval(() => {
      n.current();
    }, r);
    return () => clearInterval(s);
  }, [t, r]);
}
function tS(e, t) {
  const r = e.getBoundingClientRect();
  return r.top >= 150 && r.bottom <= t.clientHeight;
}
const rS = ({
  chatId: e,
  messages: t,
  scrollableRootRef: r,
  pageSize: n,
  hasNextPage: o,
  chat: s,
  onEnterRoom: i,
  setIsVisible: a
}) => {
  const [l, u] = Je(!1), f = Et(), p = Et(), g = t?.length || 0, y = g && t[g - 1], h = 900, d = Ae(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight, i && s && i(s));
  }, [e, i]), S = Ae(() => {
    const T = r.current;
    if (T) {
      const A = T.scrollHeight - T.scrollTop;
      f.current = A;
      const C = o && A > h;
      u(C);
      for (let x = 0; x < g; x++) {
        const v = t[x];
        if (v?.ref?.current) {
          if (tS(v.ref.current, T)) {
            a(v.cdate);
            break;
          }
        } else
          break;
      }
    }
  }, [t, e]);
  return Ke(() => {
    e && r.current && t.length && (a(t[g - 1]?.cdate ?? ""), d());
  }, [e]), Ke(() => {
    const T = r.current, A = f.current ?? 0;
    T && y && s && (p.current === g - n ? T.scrollTop = T.scrollHeight - A : (
      // -----  scroll to bottom forced -----------
      (y.userId !== s.userId || A <= h) && d()
    )), p.current = g;
  }, [g, e]), {
    scrollDown: d,
    handleRootScroll: S,
    scrollDownButton: l,
    setScrollDownButton: u,
    unreadCount: t.filter((T) => T.status === 0).length
  };
}, nS = ({
  date: e
}) => /* @__PURE__ */ E(Ne, { sx: { position: "relative", height: 0, margin: "8px 0" }, children: /* @__PURE__ */ E(ap, { in: !!e, timeout: 2e3, children: /* @__PURE__ */ E(
  Do,
  {
    severity: "warning",
    icon: !1,
    sx: () => ({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 150,
      mx: "auto",
      justifyContent: "center",
      zIndex: 1e3
    }),
    children: /* @__PURE__ */ E(st, { variant: "h6", textAlign: "center", children: e && Or(e).format("DD.MM.YYYY") })
  }
) }) }), oS = We((e) => ({
  arrowDown: {
    position: "absolute",
    left: "94.5%",
    bottom: 105,
    [e.breakpoints.down("md")]: {
      left: "91.5%",
      bottom: 95
    },
    [e.breakpoints.down("sm")]: {
      left: "84%",
      bottom: 95
    }
  }
})), sS = ({
  visible: e,
  unreadCount: t,
  onScrollDown: r
}) => {
  const n = oS();
  return e ? /* @__PURE__ */ se(Ne, { className: n.arrowDown, textAlign: "center", children: [
    /* @__PURE__ */ E(
      Ia,
      {
        color: "info",
        "aria-label": "scroll-down",
        size: "medium",
        onClick: r,
        children: /* @__PURE__ */ E(xf, {})
      }
    ),
    t > 0 && /* @__PURE__ */ E(
      Ia,
      {
        color: "warning",
        size: "small",
        sx: {
          width: 24,
          height: 24,
          minHeight: 24,
          position: "relative",
          top: -10,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ E(
          st,
          {
            variant: "body2",
            sx: (o) => ({ color: o.palette.background.default }),
            children: t
          }
        )
      }
    )
  ] }) : null;
}, iS = We((e) => ({
  messageListOuter: {
    flex: 1,
    overflowY: "auto",
    margin: 0,
    padding: 0,
    height: "100%",
    scrollbarWidth: "thin",
    scrollbarColor: `${e.palette.primary.light} #fff`
  },
  messageList: {},
  img: {
    cursor: "pointer",
    borderRadius: e.spacing(1.2),
    maxWidth: "auto",
    maxHeight: "95%",
    [e.breakpoints.down("sm")]: {
      maxWidth: "auto",
      maxHeight: "95%"
    }
  }
})), aS = ({
  apiUrl: e,
  user: t,
  users: r,
  chat: n,
  loading: o,
  pageSize: s,
  initialMenuState: i,
  onNeedMoreMessages: a,
  onMessageDelete: l,
  setMenuState: u,
  onEnterRoom: f,
  messageSearch: p
}) => {
  const g = iS(), y = ie.useRef(null), h = ie.useRef({}), d = ie.useMemo(() => Ir(n), [n]), [S, T] = ie.useState({
    visible: !1,
    src: ""
  }), [A, C] = ie.useState(""), x = ie.useMemo(() => (n?.messages || []).map((P, N) => {
    const L = P._id != null ? String(P._id) : `${P.userId}-${P.cdate}-${N}`;
    return h.current[L] || (h.current[L] = ie.createRef()), {
      ...P,
      ref: h.current[L]
    };
  }), [n?.messages]), v = p.trim().toLowerCase(), I = ie.useMemo(() => v ? x.filter((P) => P.content ? String(P.content).toLowerCase().includes(v) : !1) : x, [x, v]), D = n?.noMoreData !== !0;
  ie.useEffect(() => {
    h.current = {};
  }, [d]);
  const { scrollDown: z, handleRootScroll: W, scrollDownButton: m, unreadCount: $ } = rS({
    chatId: d,
    messages: I,
    scrollableRootRef: y,
    pageSize: s,
    hasNextPage: D,
    chat: n,
    onEnterRoom: f,
    setIsVisible: C
  }), [U, { rootRef: G }] = ZE({
    loading: o,
    hasNextPage: D,
    onLoadMore: () => n && a(n),
    disabled: !D
  }), M = ie.useCallback(
    (P) => {
      G(P), y.current = P;
    },
    [G]
  );
  eS(
    () => {
      C("");
    },
    A,
    4700
  );
  const w = ie.useCallback(
    (P, N) => {
      const L = P.messageType === "text", O = t.userId === P.userId && !!l && (/* @__PURE__ */ new Date()).getTime() - new Date(P.cdate).getTime() <= 1e3 * 60 * 2;
      if (!L && !O) {
        u(i);
        return;
      }
      N.preventDefault(), u({
        message: P,
        mouseX: N.clientX - 2,
        mouseY: N.clientY - 4,
        canCopy: L,
        canDelete: O
      });
    },
    [i, l, u, t.userId]
  );
  if (!d) return null;
  const b = ie.useMemo(
    () => I.map((P, N) => /* @__PURE__ */ E(
      bf,
      {
        ref: P.ref,
        apiUrl: e,
        user: t,
        message: P,
        owner: r[P.userId],
        isGroupMessage: !!n?.groupId,
        isUserFirst: N === 0 || I[N - 1].messageType === "notify" || I[N - 1].userId !== I[N].userId,
        isUserLast: N === I.length - 1 || I[N + 1]?.messageType === "notify" || I[N + 1]?.userId !== I[N].userId,
        onContextMenu: (L) => w(P, L),
        setViewerData: T
      },
      P._id ?? `${P.userId}-${P.cdate}-${N}`
    )),
    [
      I,
      e,
      t,
      r,
      n?.groupId,
      w,
      T
    ]
  );
  return /* @__PURE__ */ se(Mr, { children: [
    /* @__PURE__ */ E(nS, { date: A }),
    /* @__PURE__ */ se(
      Kl,
      {
        className: g.messageListOuter,
        ref: M,
        onScroll: W,
        children: [
          /* @__PURE__ */ se(zl, { className: g.messageList, children: [
            D && /* @__PURE__ */ E(ro, { ref: U, sx: { justifyContent: "center" }, children: /* @__PURE__ */ E(Hl, {}) }),
            b
          ] }),
          /* @__PURE__ */ E(
            sS,
            {
              visible: m,
              unreadCount: $,
              onScrollDown: z
            }
          ),
          S.visible && /* @__PURE__ */ E(
            cp,
            {
              sx: {
                color: "#fff",
                zIndex: (P) => P.zIndex.drawer + 1
              },
              open: S.visible,
              onClick: () => T({ visible: !1, src: "" }),
              children: /* @__PURE__ */ E("img", { src: S.src, className: g.img, alt: "" })
            }
          )
        ]
      }
    )
  ] });
}, cS = We(
  (e) => ({
    root: {
      width: "100%",
      minWidth: 360,
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    roomHeader: {
      flex: 1
    },
    flexAll: {
      flex: "1 1 auto"
    },
    flexEnd: {
      justifyContent: "flex-end"
    }
  })
), Fs = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: !1,
  canDelete: !1
}, lS = (e) => {
  const {
    apiUrl: t,
    user: r,
    users: n,
    chat: o,
    typing: s,
    conference: i,
    visitData: a,
    conferenceJoined: l,
    loading: u,
    pageSize: f,
    onEnterRoom: p,
    operators: g,
    messageSearch: y,
    onVideoCall: h,
    onVideoEnd: d,
    onConferencePause: S,
    onOperatorAdd: T,
    onLeaveGroup: A,
    onContactClick: C,
    onNeedMoreMessages: x,
    onMessageDelete: v,
    onTyping: I,
    onSendMessage: D,
    onMessageSearchChange: z
  } = e, W = cS(), { t: m } = lt(), [$, U] = ie.useState(Fs), G = ie.useCallback(() => {
    U(Fs);
  }, []), M = ie.useCallback(() => {
    G();
  }, [G]), w = Ae(() => {
    const { message: P } = $;
    G(), P?.content && typeof navigator < "u" && navigator.clipboard?.writeText && navigator.clipboard.writeText(P.content).catch(() => {
      console.warn("Copy failed");
    });
  }, [$.message, G]), b = Ae(() => {
    const { message: P } = $;
    G(), o && P && v && v(o, P);
  }, [$.message, G, o, v]);
  return /* @__PURE__ */ se(Jl, { elevation: 1, className: W.root, children: [
    /* @__PURE__ */ E(Ne, { display: "flex", flexDirection: "row", children: /* @__PURE__ */ E(
      UE,
      {
        apiUrl: t,
        user: r,
        chat: o,
        typing: s,
        conference: i,
        visitData: a,
        conferenceJoined: l,
        operators: g,
        className: W.roomHeader,
        onVideoCall: h,
        onVideoEnd: d,
        onConferencePause: S,
        onOperatorAdd: T,
        onLeaveGroup: A,
        onContactClick: C,
        messageSearch: y,
        onMessageSearchChange: z
      }
    ) }),
    /* @__PURE__ */ E(qs, {}),
    /* @__PURE__ */ E(
      aS,
      {
        apiUrl: t,
        user: r,
        users: n,
        chat: o,
        loading: u,
        pageSize: f,
        initialMenuState: Fs,
        onNeedMoreMessages: x,
        onMessageDelete: v,
        setMenuState: U,
        onEnterRoom: p,
        messageSearch: y
      }
    ),
    /* @__PURE__ */ E(qs, {}),
    /* @__PURE__ */ E(Kl, { children: /* @__PURE__ */ E(
      jb,
      {
        chat: o,
        onTyping: I,
        onSendMessage: D
      }
    ) }),
    /* @__PURE__ */ se(
      Yl,
      {
        keepMounted: !0,
        open: $.mouseY !== null,
        onClose: M,
        anchorReference: "anchorPosition",
        anchorPosition: $.mouseY !== null && $.mouseX !== null ? { top: $.mouseY, left: $.mouseX } : void 0,
        children: [
          /* @__PURE__ */ se($a, { onClick: w, disabled: !$.canCopy, children: [
            /* @__PURE__ */ E("span", { className: W.flexAll, children: m("CHAT.MESSAGE.MENU.COPY") }),
            /* @__PURE__ */ E(Ma, { className: W.flexEnd, children: /* @__PURE__ */ E(Ib, { fontSize: "small" }) })
          ] }),
          /* @__PURE__ */ se($a, { onClick: b, disabled: !$.canDelete, children: [
            /* @__PURE__ */ E("span", { className: W.flexAll, children: m("CHAT.MESSAGE.MENU.DELETE") }),
            /* @__PURE__ */ E(Ma, { className: W.flexEnd, children: /* @__PURE__ */ E(Ef, { fontSize: "small" }) })
          ] })
        ]
      }
    )
  ] });
};
function zf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: uS } = Object.prototype, { getPrototypeOf: ua } = Object, { iterator: rs, toStringTag: Gf } = Symbol, ns = /* @__PURE__ */ ((e) => (t) => {
  const r = uS.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ot = (e) => (e = e.toLowerCase(), (t) => ns(t) === e), os = (e) => (t) => typeof t === e, { isArray: Gr } = Array, Fr = os("undefined");
function In(e) {
  return e !== null && !Fr(e) && e.constructor !== null && !Fr(e.constructor) && it(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Wf = Ot("ArrayBuffer");
function fS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Wf(e.buffer), t;
}
const dS = os("string"), it = os("function"), Hf = os("number"), $n = (e) => e !== null && typeof e == "object", pS = (e) => e === !0 || e === !1, uo = (e) => {
  if (ns(e) !== "object")
    return !1;
  const t = ua(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Gf in e) && !(rs in e);
}, hS = (e) => {
  if (!$n(e) || In(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, mS = Ot("Date"), gS = Ot("File"), yS = Ot("Blob"), vS = Ot("FileList"), bS = (e) => $n(e) && it(e.pipe), ES = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || it(e.append) && ((t = ns(e)) === "formdata" || // detect form-data instance
  t === "object" && it(e.toString) && e.toString() === "[object FormData]"));
}, SS = Ot("URLSearchParams"), [xS, TS, CS, RS] = ["ReadableStream", "Request", "Response", "Headers"].map(Ot), wS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Gr(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (In(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function qf(e, t) {
  if (In(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const ur = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yf = (e) => !Fr(e) && e !== ur;
function Si() {
  const { caseless: e, skipUndefined: t } = Yf(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && qf(r, s) || s;
    uo(r[i]) && uo(o) ? r[i] = Si(r[i], o) : uo(o) ? r[i] = Si({}, o) : Gr(o) ? r[i] = o.slice() : (!t || !Fr(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Mn(arguments[o], n);
  return r;
}
const OS = (e, t, r, { allOwnKeys: n } = {}) => (Mn(t, (o, s) => {
  r && it(o) ? e[s] = zf(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), _S = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), PS = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, kS = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && ua(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, AS = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, NS = (e) => {
  if (!e) return null;
  if (Gr(e)) return e;
  let t = e.length;
  if (!Hf(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, IS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ua(Uint8Array)), $S = (e, t) => {
  const n = (e && e[rs]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, MS = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, DS = Ot("HTMLFormElement"), jS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ml = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), LS = Ot("RegExp"), Kf = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Mn(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, BS = (e) => {
  Kf(e, (t, r) => {
    if (it(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (it(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, FS = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Gr(e) ? n(e) : n(String(e).split(t)), r;
}, VS = () => {
}, US = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function zS(e) {
  return !!(e && it(e.append) && e[Gf] === "FormData" && e[rs]);
}
const GS = (e) => {
  const t = new Array(10), r = (n, o) => {
    if ($n(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (In(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Gr(n) ? [] : {};
        return Mn(n, (i, a) => {
          const l = r(i, o + 1);
          !Fr(l) && (s[a] = l);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, WS = Ot("AsyncFunction"), HS = (e) => e && ($n(e) || it(e)) && it(e.then) && it(e.catch), Jf = ((e, t) => e ? setImmediate : t ? ((r, n) => (ur.addEventListener("message", ({ source: o, data: s }) => {
  o === ur && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ur.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  it(ur.postMessage)
), qS = typeof queueMicrotask < "u" ? queueMicrotask.bind(ur) : typeof process < "u" && process.nextTick || Jf, YS = (e) => e != null && it(e[rs]), j = {
  isArray: Gr,
  isArrayBuffer: Wf,
  isBuffer: In,
  isFormData: ES,
  isArrayBufferView: fS,
  isString: dS,
  isNumber: Hf,
  isBoolean: pS,
  isObject: $n,
  isPlainObject: uo,
  isEmptyObject: hS,
  isReadableStream: xS,
  isRequest: TS,
  isResponse: CS,
  isHeaders: RS,
  isUndefined: Fr,
  isDate: mS,
  isFile: gS,
  isBlob: yS,
  isRegExp: LS,
  isFunction: it,
  isStream: bS,
  isURLSearchParams: SS,
  isTypedArray: IS,
  isFileList: vS,
  forEach: Mn,
  merge: Si,
  extend: OS,
  trim: wS,
  stripBOM: _S,
  inherits: PS,
  toFlatObject: kS,
  kindOf: ns,
  kindOfTest: Ot,
  endsWith: AS,
  toArray: NS,
  forEachEntry: $S,
  matchAll: MS,
  isHTMLForm: DS,
  hasOwnProperty: ml,
  hasOwnProp: ml,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Kf,
  freezeMethods: BS,
  toObjectSet: FS,
  toCamelCase: jS,
  noop: VS,
  toFiniteNumber: US,
  findKey: qf,
  global: ur,
  isContextDefined: Yf,
  isSpecCompliantForm: zS,
  toJSONObject: GS,
  isAsyncFn: WS,
  isThenable: HS,
  setImmediate: Jf,
  asap: qS,
  isIterable: YS
};
function le(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
j.inherits(le, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Xf = le.prototype, Qf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Qf[e] = { value: e };
});
Object.defineProperties(le, Qf);
Object.defineProperty(Xf, "isAxiosError", { value: !0 });
le.from = (e, t, r, n, o, s) => {
  const i = Object.create(Xf);
  j.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", l = t == null && e ? e.code : t;
  return le.call(i, a, l, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const KS = null;
function xi(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function Zf(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gl(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Zf(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function JS(e) {
  return j.isArray(e) && !e.some(xi);
}
const XS = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ss(e, t, r) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = j.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, S) {
    return !j.isUndefined(S[d]);
  });
  const n = r.metaTokens, o = r.visitor || f, s = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (j.isDate(h))
      return h.toISOString();
    if (j.isBoolean(h))
      return h.toString();
    if (!l && j.isBlob(h))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(h) || j.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, d, S) {
    let T = h;
    if (h && !S && typeof h == "object") {
      if (j.endsWith(d, "{}"))
        d = n ? d : d.slice(0, -2), h = JSON.stringify(h);
      else if (j.isArray(h) && JS(h) || (j.isFileList(h) || j.endsWith(d, "[]")) && (T = j.toArray(h)))
        return d = Zf(d), T.forEach(function(C, x) {
          !(j.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? gl([d], x, s) : i === null ? d : d + "[]",
            u(C)
          );
        }), !1;
    }
    return xi(h) ? !0 : (t.append(gl(S, d, s), u(h)), !1);
  }
  const p = [], g = Object.assign(XS, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: xi
  });
  function y(h, d) {
    if (!j.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      p.push(h), j.forEach(h, function(T, A) {
        (!(j.isUndefined(T) || T === null) && o.call(
          t,
          T,
          j.isString(A) ? A.trim() : A,
          d,
          g
        )) === !0 && y(T, d ? d.concat(A) : [A]);
      }), p.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function yl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function fa(e, t) {
  this._pairs = [], e && ss(e, this, t);
}
const ed = fa.prototype;
ed.append = function(t, r) {
  this._pairs.push([t, r]);
};
ed.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, yl);
  } : yl;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function QS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function td(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || QS;
  j.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = j.isURLSearchParams(t) ? t.toString() : new fa(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class vl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    j.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const rd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ZS = typeof URLSearchParams < "u" ? URLSearchParams : fa, ex = typeof FormData < "u" ? FormData : null, tx = typeof Blob < "u" ? Blob : null, rx = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ZS,
    FormData: ex,
    Blob: tx
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, da = typeof window < "u" && typeof document < "u", Ti = typeof navigator == "object" && navigator || void 0, nx = da && (!Ti || ["ReactNative", "NativeScript", "NS"].indexOf(Ti.product) < 0), ox = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", sx = da && window.location.href || "http://localhost", ix = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: da,
  hasStandardBrowserEnv: nx,
  hasStandardBrowserWebWorkerEnv: ox,
  navigator: Ti,
  origin: sx
}, Symbol.toStringTag, { value: "Module" })), Ye = {
  ...ix,
  ...rx
};
function ax(e, t) {
  return ss(e, new Ye.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return Ye.isNode && j.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function cx(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function lx(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function nd(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= r.length;
    return i = !i && j.isArray(o) ? o.length : i, l ? (j.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !j.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && j.isArray(o[i]) && (o[i] = lx(o[i])), !a);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const r = {};
    return j.forEachEntry(e, (n, o) => {
      t(cx(n), o, r, 0);
    }), r;
  }
  return null;
}
function ux(e, t, r) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Dn = {
  transitional: rd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = j.isObject(t);
    if (s && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return o ? JSON.stringify(nd(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ax(t, this.formSerializer).toString();
      if ((a = j.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ss(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), ux(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Dn.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (j.isResponse(t) || j.isReadableStream(t))
      return t;
    if (t && j.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? le.from(a, le.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ye.classes.FormData,
    Blob: Ye.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Dn.headers[e] = {};
});
const fx = j.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), dx = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && fx[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, bl = Symbol("internals");
function nn(e) {
  return e && String(e).trim().toLowerCase();
}
function fo(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(fo) : String(e);
}
function px(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const hx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Vs(e, t, r, n, o) {
  if (j.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!j.isString(t)) {
    if (j.isString(n))
      return t.indexOf(n) !== -1;
    if (j.isRegExp(n))
      return n.test(t);
  }
}
function mx(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function gx(e, t) {
  const r = j.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let at = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, l, u) {
      const f = nn(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = j.findKey(o, f);
      (!p || o[p] === void 0 || u === !0 || u === void 0 && o[p] !== !1) && (o[p || l] = fo(a));
    }
    const i = (a, l) => j.forEach(a, (u, f) => s(u, f, l));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (j.isString(t) && (t = t.trim()) && !hx(t))
      i(dx(t), r);
    else if (j.isObject(t) && j.isIterable(t)) {
      let a = {}, l, u;
      for (const f of t) {
        if (!j.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (l = a[u]) ? j.isArray(l) ? [...l, f[1]] : [l, f[1]] : f[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = nn(t), t) {
      const n = j.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return px(o);
        if (j.isFunction(r))
          return r.call(this, o, n);
        if (j.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = nn(t), t) {
      const n = j.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Vs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = nn(i), i) {
        const a = j.findKey(n, i);
        a && (!r || Vs(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return j.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Vs(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return j.forEach(this, (o, s) => {
      const i = j.findKey(n, s);
      if (i) {
        r[i] = fo(o), delete r[s];
        return;
      }
      const a = t ? mx(s) : String(s).trim();
      a !== s && delete r[s], r[a] = fo(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && j.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[bl] = this[bl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = nn(i);
      n[a] || (gx(o, i), n[a] = !0);
    }
    return j.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
at.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(at.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
j.freezeMethods(at);
function Us(e, t) {
  const r = this || Dn, n = t || r, o = at.from(n.headers);
  let s = n.data;
  return j.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function od(e) {
  return !!(e && e.__CANCEL__);
}
function Wr(e, t, r) {
  le.call(this, e ?? "canceled", le.ERR_CANCELED, t, r), this.name = "CanceledError";
}
j.inherits(Wr, le, {
  __CANCEL__: !0
});
function sd(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new le(
    "Request failed with status code " + r.status,
    [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function yx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function vx(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), f = n[s];
    i || (i = u), r[o] = l, n[o] = u;
    let p = s, g = 0;
    for (; p !== o; )
      g += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const y = f && u - f;
    return y ? Math.round(g * 1e3 / y) : void 0;
  };
}
function bx(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (u, f = Date.now()) => {
    r = f, o = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const f = Date.now(), p = f - r;
    p >= n ? i(u, f) : (o = u, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - p)));
  }, () => o && i(o)];
}
const Mo = (e, t, r = 3) => {
  let n = 0;
  const o = vx(50, 250);
  return bx((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = i - n, u = o(l), f = i <= a;
    n = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && f ? (a - i) / u : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, El = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Sl = (e) => (...t) => j.asap(() => e(...t)), Ex = Ye.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Ye.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Ye.origin),
  Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent)
) : () => !0, Sx = Ye.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      j.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), j.isString(n) && i.push("path=" + n), j.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function xx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tx(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function id(e, t, r) {
  let n = !xx(t);
  return e && (n || r == !1) ? Tx(e, t) : t;
}
const xl = (e) => e instanceof at ? { ...e } : e;
function hr(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, p, g) {
    return j.isPlainObject(u) && j.isPlainObject(f) ? j.merge.call({ caseless: g }, u, f) : j.isPlainObject(f) ? j.merge({}, f) : j.isArray(f) ? f.slice() : f;
  }
  function o(u, f, p, g) {
    if (j.isUndefined(f)) {
      if (!j.isUndefined(u))
        return n(void 0, u, p, g);
    } else return n(u, f, p, g);
  }
  function s(u, f) {
    if (!j.isUndefined(f))
      return n(void 0, f);
  }
  function i(u, f) {
    if (j.isUndefined(f)) {
      if (!j.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, f);
  }
  function a(u, f, p) {
    if (p in t)
      return n(u, f);
    if (p in e)
      return n(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, f, p) => o(xl(u), xl(f), p, !0)
  };
  return j.forEach(Object.keys({ ...e, ...t }), function(f) {
    const p = l[f] || o, g = p(e[f], t[f], f);
    j.isUndefined(g) && p !== a || (r[f] = g);
  }), r;
}
const ad = (e) => {
  const t = hr({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = at.from(i), t.url = td(id(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), j.isFormData(r)) {
    if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (j.isFunction(r.getHeaders)) {
      const l = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([f, p]) => {
        u.includes(f.toLowerCase()) && i.set(f, p);
      });
    }
  }
  if (Ye.hasStandardBrowserEnv && (n && j.isFunction(n) && (n = n(t)), n || n !== !1 && Ex(t.url))) {
    const l = o && s && Sx.read(s);
    l && i.set(o, l);
  }
  return t;
}, Cx = typeof XMLHttpRequest < "u", Rx = Cx && function(e) {
  return new Promise(function(r, n) {
    const o = ad(e);
    let s = o.data;
    const i = at.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o, f, p, g, y, h;
    function d() {
      y && y(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function T() {
      if (!S)
        return;
      const C = at.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: C,
        config: e,
        request: S
      };
      sd(function(D) {
        r(D), d();
      }, function(D) {
        n(D), d();
      }, v), S = null;
    }
    "onloadend" in S ? S.onloadend = T : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, S.onabort = function() {
      S && (n(new le("Request aborted", le.ECONNABORTED, e, S)), S = null);
    }, S.onerror = function(x) {
      const v = x && x.message ? x.message : "Network Error", I = new le(v, le.ERR_NETWORK, e, S);
      I.event = x || null, n(I), S = null;
    }, S.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const v = o.transitional || rd;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), n(new le(
        x,
        v.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
        e,
        S
      )), S = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in S && j.forEach(i.toJSON(), function(x, v) {
      S.setRequestHeader(v, x);
    }), j.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), a && a !== "json" && (S.responseType = o.responseType), u && ([g, h] = Mo(u, !0), S.addEventListener("progress", g)), l && S.upload && ([p, y] = Mo(l), S.upload.addEventListener("progress", p), S.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (f = (C) => {
      S && (n(!C || C.type ? new Wr(null, e, S) : C), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const A = yx(o.url);
    if (A && Ye.protocols.indexOf(A) === -1) {
      n(new le("Unsupported protocol " + A + ":", le.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(s || null);
  });
}, wx = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, a();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof le ? f : new Wr(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new le(`timeout ${t} of ms exceeded`, le.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: l } = n;
    return l.unsubscribe = () => j.asap(a), l;
  }
}, Ox = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, _x = async function* (e, t) {
  for await (const r of Px(e))
    yield* Ox(r, t);
}, Px = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Tl = (e, t, r, n) => {
  const o = _x(e, t);
  let s = 0, i, a = (l) => {
    i || (i = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: f } = await o.next();
        if (u) {
          a(), l.close();
          return;
        }
        let p = f.byteLength;
        if (r) {
          let g = s += p;
          r(g);
        }
        l.enqueue(new Uint8Array(f));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(l) {
      return a(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Cl = 64 * 1024, { isFunction: Xn } = j, kx = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(j.global), {
  ReadableStream: Rl,
  TextEncoder: wl
} = j.global, Ol = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ax = (e) => {
  e = j.merge.call({
    skipUndefined: !0
  }, kx, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Xn(t) : typeof fetch == "function", s = Xn(r), i = Xn(n);
  if (!o)
    return !1;
  const a = o && Xn(Rl), l = o && (typeof wl == "function" ? /* @__PURE__ */ ((h) => (d) => h.encode(d))(new wl()) : async (h) => new Uint8Array(await new r(h).arrayBuffer())), u = s && a && Ol(() => {
    let h = !1;
    const d = new r(Ye.origin, {
      body: new Rl(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !d;
  }), f = i && a && Ol(() => j.isReadableStream(new n("").body)), p = {
    stream: f && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (d, S) => {
      let T = d && d[h];
      if (T)
        return T.call(d);
      throw new le(`Response type '${h}' is not supported`, le.ERR_NOT_SUPPORT, S);
    });
  });
  const g = async (h) => {
    if (h == null)
      return 0;
    if (j.isBlob(h))
      return h.size;
    if (j.isSpecCompliantForm(h))
      return (await new r(Ye.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (j.isArrayBufferView(h) || j.isArrayBuffer(h))
      return h.byteLength;
    if (j.isURLSearchParams(h) && (h = h + ""), j.isString(h))
      return (await l(h)).byteLength;
  }, y = async (h, d) => {
    const S = j.toFiniteNumber(h.getContentLength());
    return S ?? g(d);
  };
  return async (h) => {
    let {
      url: d,
      method: S,
      data: T,
      signal: A,
      cancelToken: C,
      timeout: x,
      onDownloadProgress: v,
      onUploadProgress: I,
      responseType: D,
      headers: z,
      withCredentials: W = "same-origin",
      fetchOptions: m
    } = ad(h), $ = t || fetch;
    D = D ? (D + "").toLowerCase() : "text";
    let U = wx([A, C && C.toAbortSignal()], x), G = null;
    const M = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let w;
    try {
      if (I && u && S !== "get" && S !== "head" && (w = await y(z, T)) !== 0) {
        let B = new r(d, {
          method: "POST",
          body: T,
          duplex: "half"
        }), K;
        if (j.isFormData(T) && (K = B.headers.get("content-type")) && z.setContentType(K), B.body) {
          const [J, q] = El(
            w,
            Mo(Sl(I))
          );
          T = Tl(B.body, Cl, J, q);
        }
      }
      j.isString(W) || (W = W ? "include" : "omit");
      const b = s && "credentials" in r.prototype, P = {
        ...m,
        signal: U,
        method: S.toUpperCase(),
        headers: z.normalize().toJSON(),
        body: T,
        duplex: "half",
        credentials: b ? W : void 0
      };
      G = s && new r(d, P);
      let N = await (s ? $(G, m) : $(d, P));
      const L = f && (D === "stream" || D === "response");
      if (f && (v || L && M)) {
        const B = {};
        ["status", "statusText", "headers"].forEach((Q) => {
          B[Q] = N[Q];
        });
        const K = j.toFiniteNumber(N.headers.get("content-length")), [J, q] = v && El(
          K,
          Mo(Sl(v), !0)
        ) || [];
        N = new n(
          Tl(N.body, Cl, J, () => {
            q && q(), M && M();
          }),
          B
        );
      }
      D = D || "text";
      let O = await p[j.findKey(p, D) || "text"](N, h);
      return !L && M && M(), await new Promise((B, K) => {
        sd(B, K, {
          data: O,
          headers: at.from(N.headers),
          status: N.status,
          statusText: N.statusText,
          config: h,
          request: G
        });
      });
    } catch (b) {
      throw M && M(), b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message) ? Object.assign(
        new le("Network Error", le.ERR_NETWORK, h, G),
        {
          cause: b.cause || b
        }
      ) : le.from(b, b && b.code, h, G);
    }
  };
}, Nx = /* @__PURE__ */ new Map(), cd = (e) => {
  let t = e ? e.env : {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, l, u, f = Nx;
  for (; a--; )
    l = s[a], u = f.get(l), u === void 0 && f.set(l, u = a ? /* @__PURE__ */ new Map() : Ax(t)), f = u;
  return u;
};
cd();
const Ci = {
  http: KS,
  xhr: Rx,
  fetch: {
    get: cd
  }
};
j.forEach(Ci, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _l = (e) => `- ${e}`, Ix = (e) => j.isFunction(e) || e === null || e === !1, ld = {
  getAdapter: (e, t) => {
    e = j.isArray(e) ? e : [e];
    const { length: r } = e;
    let n, o;
    const s = {};
    for (let i = 0; i < r; i++) {
      n = e[i];
      let a;
      if (o = n, !Ix(n) && (o = Ci[(a = String(n)).toLowerCase()], o === void 0))
        throw new le(`Unknown adapter '${a}'`);
      if (o && (j.isFunction(o) || (o = o.get(t))))
        break;
      s[a || "#" + i] = o;
    }
    if (!o) {
      const i = Object.entries(s).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = r ? i.length > 1 ? `since :
` + i.map(_l).join(`
`) : " " + _l(i[0]) : "as no adapter specified";
      throw new le(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Ci
};
function zs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Wr(null, e);
}
function Pl(e) {
  return zs(e), e.headers = at.from(e.headers), e.data = Us.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ld.getAdapter(e.adapter || Dn.adapter, e)(e).then(function(n) {
    return zs(e), n.data = Us.call(
      e,
      e.transformResponse,
      n
    ), n.headers = at.from(n.headers), n;
  }, function(n) {
    return od(n) || (zs(e), n && n.response && (n.response.data = Us.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = at.from(n.response.headers))), Promise.reject(n);
  });
}
const ud = "1.12.2", is = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  is[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const kl = {};
is.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + ud + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new le(
        o(i, " has been removed" + (r ? " in " + r : "")),
        le.ERR_DEPRECATED
      );
    return r && !kl[i] && (kl[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
is.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function $x(e, t, r) {
  if (typeof e != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new le("option " + s + " must be " + l, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new le("Unknown option " + s, le.ERR_BAD_OPTION);
  }
}
const po = {
  assertOptions: $x,
  validators: is
}, At = po.validators;
let pr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new vl(),
      response: new vl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = hr(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && po.assertOptions(n, {
      silentJSONParsing: At.transitional(At.boolean),
      forcedJSONParsing: At.transitional(At.boolean),
      clarifyTimeoutError: At.transitional(At.boolean)
    }, !1), o != null && (j.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : po.assertOptions(o, {
      encode: At.function,
      serialize: At.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), po.assertOptions(r, {
      baseUrl: At.spelling("baseURL"),
      withXsrfToken: At.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && j.merge(
      s.common,
      s[r.method]
    );
    s && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), r.headers = at.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(r) === !1 || (l = l && d.synchronous, a.unshift(d.fulfilled, d.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(d) {
      u.push(d.fulfilled, d.rejected);
    });
    let f, p = 0, g;
    if (!l) {
      const h = [Pl.bind(this), void 0];
      for (h.unshift(...a), h.push(...u), g = h.length, f = Promise.resolve(r); p < g; )
        f = f.then(h[p++], h[p++]);
      return f;
    }
    g = a.length;
    let y = r;
    for (; p < g; ) {
      const h = a[p++], d = a[p++];
      try {
        y = h(y);
      } catch (S) {
        d.call(this, S);
        break;
      }
    }
    try {
      f = Pl.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, g = u.length; p < g; )
      f = f.then(u[p++], u[p++]);
    return f;
  }
  getUri(t) {
    t = hr(this.defaults, t);
    const r = id(t.baseURL, t.url, t.allowAbsoluteUrls);
    return td(r, t.params, t.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(t) {
  pr.prototype[t] = function(r, n) {
    return this.request(hr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(hr(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  pr.prototype[t] = r(), pr.prototype[t + "Form"] = r(!0);
});
let Mx = class fd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      n.reason || (n.reason = new Wr(s, i, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new fd(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function Dx(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function jx(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Ri = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ri).forEach(([e, t]) => {
  Ri[t] = e;
});
function dd(e) {
  const t = new pr(e), r = zf(pr.prototype.request, t);
  return j.extend(r, pr.prototype, t, { allOwnKeys: !0 }), j.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return dd(hr(e, o));
  }, r;
}
const je = dd(Dn);
je.Axios = pr;
je.CanceledError = Wr;
je.CancelToken = Mx;
je.isCancel = od;
je.VERSION = ud;
je.toFormData = ss;
je.AxiosError = le;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = Dx;
je.isAxiosError = jx;
je.mergeConfig = hr;
je.AxiosHeaders = at;
je.formToJSON = (e) => nd(j.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = ld.getAdapter;
je.HttpStatusCode = Ri;
je.default = je;
const {
  Axios: NC,
  AxiosError: IC,
  CanceledError: $C,
  isCancel: MC,
  CancelToken: DC,
  VERSION: jC,
  all: LC,
  Cancel: BC,
  isAxiosError: FC,
  spread: VC,
  toFormData: UC,
  AxiosHeaders: zC,
  HttpStatusCode: GC,
  formToJSON: WC,
  getAdapter: HC,
  mergeConfig: qC
} = je, pa = {
  userId: 0,
  username: "",
  password: "",
  avatar: "",
  langCode: ""
}, pd = {
  user: pa,
  // пользователь
  token: "",
  // токен
  refreshToken: "",
  activeRoom: null,
  // активная комната
  chatOld: null,
  // активная комната
  messageSearch: "",
  groupGather: {},
  // список групп
  userGather: {},
  // список онлайн
  contactGather: {},
  // контакты
  operators: [],
  // операторы
  initialContactId: null,
  // начальный контакт
  conference: {
    data: null,
    // данные конференции
    joined: !1,
    ringPlayed: !1
  },
  typing: null,
  // кто печатает текст
  loading: !1,
  // загрузка данных
  error: void 0,
  // ошибка
  success: void 0,
  // НЕ ошибка
  visitData: []
}, ht = (e) => e.activeRoom ? e.groupGather[e.activeRoom.groupId] || e.contactGather[e.activeRoom.userId] : null, ha = (e) => {
  const { activeRoom: t, initialContactId: r, contactGather: n } = e;
  let o = null;
  if (r)
    o = n[r];
  else if (t)
    o = ht(e);
  else {
    const s = [
      ...Object.values(e.contactGather),
      ...Object.values(e.groupGather)
    ].sort(gf);
    s.length > 0 && (o = s[0]);
  }
  return o;
}, Al = (e, t, r) => {
  const n = { ...e };
  e.contactGather[t] && (n.contactGather[t] = {
    ...n.contactGather[t],
    online: r
  });
  for (const s of Object.values(e.groupGather)) {
    if (!s.members) continue;
    const i = s.members.find((a) => a.userId === t);
    if (i) {
      const a = s.members.indexOf(i);
      s.members[a] = { ...i, online: r };
    }
  }
  const o = n.operators.findIndex((s) => s.userId === t);
  return o !== -1 && (n.operators[o] = { ...n.operators[o], online: r }), n.activeRoom = ht(n), n;
}, Lx = (e, t) => {
  const r = { ...e }, { groupId: n } = t;
  r.groupGather[n] && (r.groupGather[n].messages ? r.groupGather[n].messages = [
    ...r.groupGather[n].messages,
    t
  ] : r.groupGather[n] = {
    ...e.groupGather[n],
    messages: [t]
  });
  const { activeRoom: o } = r;
  return o && o.groupId !== n && t.userId !== e.user.userId ? Oi(r, n, (s) => (s || 0) + 1) : (r.activeRoom = ht(r), r);
}, Bx = (e, t) => {
  const r = { ...e }, n = t.contactId === e.user.userId ? t.userId : t.contactId;
  return r.contactGather[n].messages ? r.contactGather[n].messages = [
    ...r.contactGather[n].messages,
    t
  ] : r.contactGather[n] = {
    ...r.contactGather[n],
    messages: [t]
  }, r.activeRoom?.userId !== n && t.userId !== e.user.userId ? wi(
    r,
    n,
    (o) => (o || 0) + 1
  ) : (r.activeRoom = ht(r), r);
}, wi = (e, t, r) => {
  const n = { ...e };
  return n.contactGather[t] && (n.contactGather[t] = {
    ...n.contactGather[t],
    unreadCount: r(n.contactGather[t].unreadCount)
  }), n.activeRoom = ht(n), n;
}, Oi = (e, t, r) => {
  const n = { ...e };
  return n.groupGather[t] && (n.groupGather[t] = {
    ...n.groupGather[t],
    unreadCount: r(n.groupGather[t].unreadCount)
  }), n.activeRoom = ht(n), n;
}, Fx = (e, t) => {
  const { userId: r } = e.user, n = { ...e }, o = t.username || n.userGather[t.userId].username;
  if (t.groupId) {
    const { messages: s } = n.groupGather[t.groupId];
    if (s) {
      const i = s.find((a) => a._id === t._id);
      if (i) {
        const a = s.indexOf(i);
        s[a] = {
          ...i,
          isRevoke: !0,
          revokeUserName: o
        };
      }
    }
  } else {
    const { messages: s } = n.contactGather[t.contactId === r ? t.userId : t.contactId];
    if (s) {
      const i = s.find((a) => a._id === t._id);
      if (i) {
        const a = s.indexOf(i);
        s[a] = {
          ...i,
          isRevoke: !0,
          revokeUserName: o
        };
      }
    }
  }
  return n.activeRoom = ht(n), n;
}, Vx = (e, t) => {
  const r = { ...e }, n = r.activeRoom === r.contactGather[t];
  return delete r.contactGather[t], n && (r.activeRoom = ha(r)), r;
}, Ux = (e, t) => {
  const r = { ...e }, n = r.activeRoom === r.groupGather[t];
  return delete r.groupGather[t], n && (r.activeRoom = ha(r)), r;
}, zx = (e, t) => {
  const r = { ...e }, n = r.groupGather[t.groupId];
  return n && (n.members = n.members?.filter((o) => o.userId !== t.userId)), r;
}, Gx = (e, t) => {
  const r = { ...e }, { groupId: n, name: o, notice: s } = t, i = r.groupGather[n];
  return i && (r.groupGather[n] = { ...i, name: o, notice: s }), r.activeRoom = ht(r), r;
}, Wx = (e, t) => {
  const r = { ...e }, { userId: n, username: o, avatar: s } = t;
  return r.userGather[n] && (r.userGather[n] = {
    ...r.userGather[n],
    username: o,
    avatar: s
  }), r.contactGather[n] && (r.contactGather[n] = {
    ...r.contactGather[n],
    username: o,
    avatar: s
  }), r.activeRoom = ht(r), r;
}, Hx = (e, t) => {
  const r = t.members.map((o) => ({
    ...o,
    isManager: 0
  })), n = { ...e };
  return n.groupGather[t.groupId].members && r ? n.groupGather[t.groupId].members = [
    ...e.groupGather[t.groupId].members,
    ...r
  ] : n.groupGather[t.groupId] = {
    ...n.groupGather[t.groupId],
    members: r
  }, n.activeRoom = ht(n), n;
}, qx = (e, t) => {
  const r = { ...e };
  if (r.contactGather[t]) {
    const n = { ...r.contactGather[t] };
    if (n.messages)
      for (let o = 0; o < n.messages.length; o++)
        n.messages[o] = {
          ...n.messages[o],
          status: 1
        };
    r.contactGather[t] = n;
  }
  if (r.activeRoom = ht(r), r.activeRoom != null && r.activeRoom.messages)
    for (let n = 0; n < r.activeRoom.messages.length; n++)
      r.activeRoom.messages[n] = {
        ...r.activeRoom.messages[n],
        status: 1
      };
  return r;
}, Yx = (e, t) => {
  const r = { ...e }, { messages: n, contactId: o } = t;
  return r.contactGather[o] && (r.contactGather[o] = {
    ...r.contactGather[o],
    messages: [
      ...n || [],
      ...r.contactGather[o].messages || []
    ],
    noMoreData: n?.length ? n?.length < t.pageSize : !0
  }), r.activeRoom = ht(r), r;
}, Kx = (e, t) => {
  const r = { ...e }, { groupId: n, messages: o, userArr: s } = t;
  r.groupGather[n] && (r.groupGather[n] = {
    ...r.groupGather[n],
    messages: [
      ...o || [],
      ...r.groupGather[n].messages || []
    ],
    noMoreData: o?.length ? o?.length < t.pageSize : !0
  }), r.userGather = { ...r.userGather };
  for (const i of s)
    r.userGather[i.userId] || (r.userGather[i.userId] = i);
  return r.activeRoom = ht(r), r;
}, Jx = (e, t) => ({
  ...e,
  chatOld: e.activeRoom != null ? { ...e.activeRoom } : null,
  activeRoom: t.groupId ? e.groupGather[t.groupId] : t.contactId ? e.contactGather[t.contactId] : null,
  messageSearch: ""
}), Xx = (e, t) => ({
  ...e,
  token: t
}), Qx = (e) => ({
  ...e,
  token: "",
  user: pa
}), Zx = (e, t) => ({
  ...e,
  conference: {
    data: { ...t },
    joined: t?.userId === e.user.userId,
    ringPlayed: t?.userId !== e.user.userId
  }
}), eT = (e, t) => e.conference.data?.id !== t?.id ? e : {
  ...e,
  conference: {
    data: { ...e.conference.data },
    joined: !1,
    ringPlayed: !1
  }
}, tT = (e, t) => e.conference.data?.id !== t?.id ? e : {
  ...e,
  conference: { data: null, joined: !1, ringPlayed: !1 }
};
function rT(e, t) {
  switch (t.type) {
    case "SET_GROUP_GATHER":
      return {
        ...e,
        groupGather: {
          ...e.groupGather,
          [t.payload.groupId]: t.payload
        }
      };
    case "SET_CONTACT_GATHER":
      return {
        ...e,
        contactGather: {
          ...e.contactGather,
          [t.payload.userId]: t.payload
        }
      };
    case "DEL_GROUP":
      return Ux(e, t.payload);
    case "DEL_GROUP_MEMBER":
      return zx(e, t.payload);
    case "DEL_CONTACT":
      return Vx(e, t.payload.userId);
    case "SET_USER_GATHER":
      return {
        ...e,
        userGather: {
          ...e.userGather,
          [t.payload.userId]: t.payload
        }
      };
    case "UPDATE_ACTIVE_ROOM":
      return { ...e, activeRoom: ha(e) };
    case "SET_ACTIVE_ROOM":
      return Jx(e, t.payload);
    case "USER_ONLINE":
      return Al(e, t.payload, 1);
    case "USER_OFFLINE":
      return Al(e, t.payload, 0);
    case "ADD_GROUP_MESSAGE":
      return Lx(e, t.payload);
    case "ADD_PRIVATE_MESSAGE":
      return Bx(e, t.payload);
    case "ADD_GROUP_UNREAD_GATHER":
      return Oi(
        e,
        t.payload,
        (r) => (r || 0) + 1
      );
    case "ADD_CONTACT_UNREAD_GATHER":
      return wi(
        e,
        t.payload,
        (r) => (r || 0) + 1
      );
    case "SET_TYPING":
      return { ...e, typing: t.payload };
    case "LOSE_GROUP_UNREAD_GATHER":
      return Oi(e, t.payload, () => 0);
    case "LOSE_CONTACT_UNREAD_GATHER":
      return wi(e, t.payload, () => 0);
    case "REVOKE_MESSAGE":
      return Fx(e, t.payload);
    case "UPDATE_GROUP_INFO":
      return Gx(e, t.payload);
    case "UPDATE_USER_INFO":
      return Wx(e, t.payload);
    case "ADD_GROUP_MEMBER":
      return Hx(e, t.payload);
    case "SET_CONFERENCE":
      return Zx(e, t.payload);
    case "JOIN_CONFERENCE":
      return {
        ...e,
        conference: {
          data: { ...t.payload },
          joined: !0,
          ringPlayed: !1
        }
      };
    case "PAUSE_CONFERENCE":
      return eT(e, t.payload);
    case "STOP_CONFERENCE":
      return tT(e, t.payload);
    case "MARK_PRIVATE_MESSAGES_READ":
      return qx(e, t.payload);
    case "ADD_PRIVATE_MESSAGES":
      return Yx(e, t.payload);
    case "ADD_GROUP_MESSAGES":
      return Kx(e, t.payload);
    case "SET_LOADING":
      return {
        ...e,
        loading: t.payload,
        error: ""
      };
    case "SET_MESSAGE_SEARCH":
      return {
        ...e,
        messageSearch: t.payload ?? ""
      };
    case "SET_ERROR":
      return {
        ...e,
        error: t.payload,
        success: void 0
      };
    case "SET_SUCCES":
      return {
        ...e,
        success: t.payload,
        error: void 0
      };
    case "SET_TOKEN":
      return Xx(e, t.payload);
    case "SET_USER":
      return {
        ...e,
        user: t.payload
      };
    case "CLEAR_USER":
      return Qx(e);
    case "CLEAR_CHAT_DATA":
      return {
        ...e,
        activeRoom: null,
        groupGather: {},
        userGather: {},
        contactGather: {},
        conference: {
          data: null,
          joined: !1,
          ringPlayed: !1
        },
        typing: null,
        messageSearch: ""
      };
    case "SET_OPERATORS":
      return {
        ...e,
        operators: t.payload
      };
    case "SET_VISIT_DATA":
      return {
        ...e,
        visitData: t.payload
      };
  }
  return e;
}
const nT = () => null, jn = ie.createContext({
  state: pd,
  dispatch: nT
}), oT = (e) => {
  pa.langCode = e.defLang;
  const t = e.token, r = e.token, n = {
    ...pd,
    token: t,
    refreshToken: r
  }, [o, s] = ie.useReducer(rT, n), i = Rn(() => ({ state: o, dispatch: s }), [o]);
  return /* @__PURE__ */ E(jn.Provider, { value: i, children: e.children });
}, sT = {}, ma = Bl(sT);
function YC() {
  localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), localStorage.removeItem("doctor"), localStorage.removeItem("chatUser");
}
async function hd(e, t, r) {
  localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken");
  try {
    const { data: n } = await je.post(`${r}/auth/refreshToken`, {
      authToken: e,
      refreshToken: t
    });
    localStorage.setItem("authToken", n?.authToken), localStorage.setItem("refreshToken", n?.refreshToken);
  } catch (n) {
    console.log("ERROR RefreshToken", n);
  }
  window.location.reload();
}
const iT = ({
  chatBaseURLApi: e,
  pageSize: t,
  children: r,
  baseUrl: n
}) => {
  const { state: o, dispatch: s } = Cn(jn), i = (g) => {
    o.token && g.response != null && g.response.status === 401 && hd(o.token, o.refreshToken, n);
  }, a = je.create({
    timeout: 6e4,
    // Таймаут минута
    baseURL: e,
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Authorization: `Bearer ${o.token}`
    },
    withCredentials: !1
  });
  a.interceptors.response.use(
    (g) => g,
    (g) => (console.log("ERROR AxiosError"), i(g), Promise.reject(g))
  );
  const l = Ae(
    async (g, y) => {
      const h = g.userId, d = y?.reset ? 0 : g.messages?.length;
      try {
        s({ type: "SET_LOADING", payload: !0 });
        const { data: S } = await a.get("/contact/messages", {
          params: {
            contactId: h,
            current: d,
            pageSize: t,
            search: y?.search
          }
        });
        S && (s({
          type: "ADD_PRIVATE_MESSAGES",
          payload: {
            pageSize: t,
            contactId: h,
            messages: S
          }
        }), y?.callback && y.callback());
      } catch (S) {
        s({ type: "SET_ERROR", payload: S.message });
      } finally {
        s({ type: "SET_LOADING", payload: !1 });
      }
    },
    [s, a, t]
  ), u = Ae(
    async (g) => {
      const { groupId: y } = g, h = g.messages?.length;
      try {
        s({ type: "SET_LOADING", payload: !0 });
        const { data: d } = await a.get(
          "/group/messages",
          {
            params: {
              groupId: y,
              current: h,
              pageSize: t
            }
          }
        );
        d && s({
          type: "ADD_GROUP_MESSAGES",
          payload: {
            pageSize: t,
            groupId: y,
            ...d
          }
        });
      } catch (d) {
        s({ type: "SET_ERROR", payload: d.message });
      } finally {
        s({ type: "SET_LOADING", payload: !1 });
      }
    },
    [s, a, t]
  ), f = async (g, y) => {
    try {
      const { data: h } = await a.get("/contact/find", {
        params: {
          mmkId: g,
          guid: y
        }
      });
      if (h != null)
        return h;
    } catch (h) {
      console.log("err getUserByMmk", h);
    }
  }, p = Rn(
    () => ({
      apiUrl: e,
      pageSize: t,
      fetch: a,
      getPrivateMessages: l,
      getGroupMessages: u,
      getUserByMmk: f
    }),
    [
      e,
      t,
      a,
      l,
      u,
      f
    ]
  );
  return /* @__PURE__ */ E(ma.Provider, { value: p, children: r });
}, aT = We(
  (e) => ({
    main: {
      flex: "1 1 auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    time: {
      paddingLeft: e.spacing(1),
      justifyContent: "flex-end",
      whiteSpace: "nowrap"
    },
    unread: {
      justifyContent: "flex-end",
      maxHeight: 20
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff"
    }
  })
), cT = (e, t) => {
  if (!e) return null;
  switch (e.messageType) {
    case "text":
      return e.content;
    case "image":
      return `[${t("CHAT.MESSAGE.TYPE.IMAGE")}]`;
    case "video":
      return `[${t("CHAT.MESSAGE.TYPE.VIDEO")}]`;
    case "file":
      return `[${t("CHAT.MESSAGE.TYPE.FILE")}]`;
    case "notify":
      return `[${t("CHAT.MESSAGE.TYPE.NOTIFY")}]`;
    default:
      return null;
  }
}, lT = hf(
  (e) => ({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${e.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""'
      }
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0
      }
    }
  })
)(Xl), uT = hf(
  (e) => ({
    badge: {
      backgroundColor: e.palette.primary.main,
      boxShadow: `0 0 0 2px ${e.palette.background.paper}`
    }
  })
)(Xl), fT = (e, t, r) => {
  const n = /* @__PURE__ */ E(
    Vt,
    {
      alt: t.username,
      src: t.avatar ? Zt(e, t.avatar) : ""
    }
  );
  return !!r?.contactId && r?.userId === t.userId ? /* @__PURE__ */ E(
    lT,
    {
      overlap: "circular",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      variant: "dot",
      children: n
    }
  ) : t?.online ? /* @__PURE__ */ E(
    uT,
    {
      overlap: "circular",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      variant: "dot",
      children: n
    }
  ) : n;
}, dT = (e) => {
  const t = aT(), { t: r } = lt(), { apiUrl: n, chat: o, typing: s } = e, i = mf(o), a = o.groupId ? /* @__PURE__ */ se(Vt, { alt: i, className: t.avatarGroup, children: [
    /* @__PURE__ */ E(Sf, {}),
    " "
  ] }) : fT(n, o, s), l = o.messages && o.messages.length > 0 ? o.messages[o.messages.length - 1] : null, u = cT(l, r), f = l?.cdate;
  return /* @__PURE__ */ se(Ul, { selected: e.active, onClick: e.onClick, children: [
    /* @__PURE__ */ E(Fl, { children: a }),
    /* @__PURE__ */ E(
      Vl,
      {
        secondaryTypographyProps: { component: "span" },
        primary: /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
          /* @__PURE__ */ E("span", { className: t.main, children: i }),
          /* @__PURE__ */ E("span", { className: t.time, children: wo(f) })
        ] }),
        secondary: /* @__PURE__ */ se(Ne, { display: "flex", flexDirection: "row", children: [
          /* @__PURE__ */ E("span", { className: t.main, children: u }),
          o.unreadCount ? /* @__PURE__ */ E(
            lp,
            {
              className: t.unread,
              component: "span",
              size: "small",
              color: "primary",
              label: o.unreadCount
            }
          ) : null
        ] })
      }
    )
  ] });
}, pT = We((e) => ({
  root: {
    width: "100%",
    height: "100%"
  },
  searchField: {
    width: "100%"
  },
  listStyle: {
    height: "89.5%",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: `${e.palette.primary.light} #fff`
  }
})), Nl = (e, t) => {
  if (!t) return e;
  const r = t.toLowerCase();
  return e.filter(
    (n) => mf(n).toLowerCase().includes(r)
  );
}, hT = (e, t, r) => {
  let n = [...t, ...r];
  n = n.sort(gf);
  const o = localStorage.getItem(`${e}-topChatId`);
  if (o) {
    const s = n.find((i) => Ir(i) === o);
    s && (n = n.filter((i) => Ir(i) !== o), s.isTop = !0, n.unshift(s));
  }
  return n;
}, mT = (e, t, r, n) => hT(
  e,
  Nl(t, n),
  Nl(r, n)
), gT = ({
  user: e,
  activeRoom: t,
  groups: r,
  contacts: n,
  typing: o,
  onChangeChat: s
}) => {
  const i = pT(), { t: a } = lt(), { apiUrl: l } = Cn(ma), [u, f] = Je(""), p = ie.useMemo(
    () => mT(e.userId, r, n, u),
    [e.userId, r, n, u]
  ), g = (y) => {
    f(y.target.value);
  };
  return /* @__PURE__ */ se(Jl, { elevation: 1, className: i.root, children: [
    /* @__PURE__ */ E(
      no,
      {
        title: /* @__PURE__ */ E(
          $i,
          {
            className: i.searchField,
            label: a("CHAT.INPUT_SEARCH_CONTACT"),
            variant: "outlined",
            size: "small",
            fullWidth: !0,
            onChange: g,
            value: u
          }
        )
      }
    ),
    /* @__PURE__ */ E(qs, {}),
    /* @__PURE__ */ E(ia, { "aria-label": "rooms", className: i.listStyle, children: p.map((y) => /* @__PURE__ */ E(
      dT,
      {
        apiUrl: l,
        chat: y,
        active: t != null && Ir(y) === Ir(t),
        typing: o,
        onClick: () => s(y)
      },
      Ir(y)
    )) })
  ] });
}, yT = () => {
  const {
    state: { error: e, success: t },
    dispatch: r
  } = ie.useContext(jn), n = () => {
    r({ type: "SET_ERROR", payload: void 0 }), r({ type: "SET_SUCCES", payload: void 0 });
  };
  return /* @__PURE__ */ E(
    up,
    {
      anchorOrigin: { vertical: "top", horizontal: "center" },
      open: !!e || !!t,
      autoHideDuration: 6e3,
      onClose: n,
      children: /* @__PURE__ */ E(Do, { onClose: n, severity: e ? "error" : "success", children: e || t })
    }
  );
}, vT = We((e) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    padding: 0,
    [e.breakpoints.up("lg")]: {
      minWidth: 1200
    }
  }
})), bT = ({
  children: e
}) => {
  const t = vT();
  return /* @__PURE__ */ E(fp, { maxWidth: !1, className: t.root, children: e });
}, ET = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M21 5v14h2V5zm-4 14h2V5h-2zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1M8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75M12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25z"
}), "RecentActors"), ST = rt(/* @__PURE__ */ X.jsx("path", {
  d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z"
}), "Videocam"), xT = ({
  isMobile: e,
  conferenceActive: t,
  hideRooms: r,
  contactsList: n,
  chatRoom: o,
  activeRoom: s,
  user: i,
  onExitRoom: a,
  onChangeChat: l,
  chatOld: u
}) => e ? /* @__PURE__ */ se(Mr, { children: [
  t && /* @__PURE__ */ E(
    Ne,
    {
      sx: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 1400,
        top: i?.role && [3, 4].includes(i.role) ? -56 : -12,
        left: i?.role && [3, 4].includes(i.role) ? 32 : 218
      },
      children: /* @__PURE__ */ E(
        Ne,
        {
          display: "flex",
          flexDirection: "row",
          columnGap: 3,
          my: 3,
          sx: {
            position: "relative"
          },
          children: /* @__PURE__ */ E(
            qt,
            {
              "aria-label": "exit room",
              sx: {
                color: "#fff",
                background: "#000",
                "&:hover": {
                  background: "#eee",
                  color: "#000",
                  boxShadow: "none"
                }
              },
              onClick: () => {
                s && a ? a(s) : u && l && (console.log("onChangeChat"), l(u));
              },
              children: s ? /* @__PURE__ */ E(ST, {}) : /* @__PURE__ */ E(ET, {})
            }
          )
        }
      )
    }
  ),
  n,
  o
] }) : /* @__PURE__ */ E(Mr, { children: /* @__PURE__ */ se(ps, { container: !0, spacing: 1, sx: { height: "100%" }, children: [
  (t || !r) && /* @__PURE__ */ E(
    ps,
    {
      size: s ? {
        sm: t ? 6 : 4,
        lg: t ? 6 : 4,
        xl: t ? 6 : 3
      } : 12,
      sx: { height: "100%" },
      children: n
    }
  ),
  s && /* @__PURE__ */ E(
    ps,
    {
      size: {
        sm: t ? 6 : r ? 12 : 8,
        lg: t ? 6 : r ? 12 : 8,
        xl: t ? 6 : r ? 12 : 9
      },
      sx: { height: "100%" },
      children: o
    }
  )
] }) }), TT = ({
  conference: e,
  onClose: t,
  onAccept: r,
  isMobile: n,
  user: o,
  activeRoom: s,
  onChangeChat: i,
  apiUrl: a
}) => e.data ? e.joined ? /* @__PURE__ */ E(Mr, { children: /* @__PURE__ */ E(
  mb,
  {
    conference: e.data,
    onClose: t,
    langCode: o.langCode
  }
) }) : /* @__PURE__ */ E(
  yb,
  {
    apiUrl: a,
    contact: o.userId === e.data.userId ? e.data.contactId : e.data.userId,
    conference: e.data,
    onAccept: r
  }
) : null, jt = /* @__PURE__ */ Object.create(null);
jt.open = "0";
jt.close = "1";
jt.ping = "2";
jt.pong = "3";
jt.message = "4";
jt.upgrade = "5";
jt.noop = "6";
const ho = /* @__PURE__ */ Object.create(null);
Object.keys(jt).forEach((e) => {
  ho[jt[e]] = e;
});
const _i = { type: "error", data: "parser error" }, md = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", gd = typeof ArrayBuffer == "function", yd = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ga = ({ type: e, data: t }, r, n) => md && t instanceof Blob ? r ? n(t) : Il(t, n) : gd && (t instanceof ArrayBuffer || yd(t)) ? r ? n(t) : Il(new Blob([t]), n) : n(jt[e] + (t || "")), Il = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function $l(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Gs;
function CT(e, t) {
  if (md && e.data instanceof Blob)
    return e.data.arrayBuffer().then($l).then(t);
  if (gd && (e.data instanceof ArrayBuffer || yd(e.data)))
    return t($l(e.data));
  ga(e, !1, (r) => {
    Gs || (Gs = new TextEncoder()), t(Gs.encode(r));
  });
}
const Ml = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ml.length; e++)
  dn[Ml.charCodeAt(e)] = e;
const RT = (e) => {
  let t = e.length * 0.75, r = e.length, n, o = 0, s, i, a, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), f = new Uint8Array(u);
  for (n = 0; n < r; n += 4)
    s = dn[e.charCodeAt(n)], i = dn[e.charCodeAt(n + 1)], a = dn[e.charCodeAt(n + 2)], l = dn[e.charCodeAt(n + 3)], f[o++] = s << 2 | i >> 4, f[o++] = (i & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | l & 63;
  return u;
}, wT = typeof ArrayBuffer == "function", ya = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: vd(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: OT(e.substring(1), t)
  } : ho[r] ? e.length > 1 ? {
    type: ho[r],
    data: e.substring(1)
  } : {
    type: ho[r]
  } : _i;
}, OT = (e, t) => {
  if (wT) {
    const r = RT(e);
    return vd(r, t);
  } else
    return { base64: !0, data: e };
}, vd = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, bd = "", _T = (e, t) => {
  const r = e.length, n = new Array(r);
  let o = 0;
  e.forEach((s, i) => {
    ga(s, !1, (a) => {
      n[i] = a, ++o === r && t(n.join(bd));
    });
  });
}, PT = (e, t) => {
  const r = e.split(bd), n = [];
  for (let o = 0; o < r.length; o++) {
    const s = ya(r[o], t);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
};
function kT() {
  return new TransformStream({
    transform(e, t) {
      CT(e, (r) => {
        const n = r.length;
        let o;
        if (n < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, n);
        else if (n < 65536) {
          o = new Uint8Array(3);
          const s = new DataView(o.buffer);
          s.setUint8(0, 126), s.setUint16(1, n);
        } else {
          o = new Uint8Array(9);
          const s = new DataView(o.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(r);
      });
    }
  });
}
let Ws;
function Qn(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function Zn(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let o = 0; o < t; o++)
    r[o] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function AT(e, t) {
  Ws || (Ws = new TextDecoder());
  const r = [];
  let n = 0, o = -1, s = !1;
  return new TransformStream({
    transform(i, a) {
      for (r.push(i); ; ) {
        if (n === 0) {
          if (Qn(r) < 1)
            break;
          const l = Zn(r, 1);
          s = (l[0] & 128) === 128, o = l[0] & 127, o < 126 ? n = 3 : o === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Qn(r) < 2)
            break;
          const l = Zn(r, 2);
          o = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Qn(r) < 8)
            break;
          const l = Zn(r, 8), u = new DataView(l.buffer, l.byteOffset, l.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(_i);
            break;
          }
          o = f * Math.pow(2, 32) + u.getUint32(4), n = 3;
        } else {
          if (Qn(r) < o)
            break;
          const l = Zn(r, o);
          a.enqueue(ya(s ? l : Ws.decode(l), t)), n = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(_i);
          break;
        }
      }
    }
  });
}
const Ed = 4;
function Ue(e) {
  if (e) return NT(e);
}
function NT(e) {
  for (var t in Ue.prototype)
    e[t] = Ue.prototype[t];
  return e;
}
Ue.prototype.on = Ue.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ue.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
Ue.prototype.off = Ue.prototype.removeListener = Ue.prototype.removeAllListeners = Ue.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, o = 0; o < r.length; o++)
    if (n = r[o], n === t || n.fn === t) {
      r.splice(o, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
Ue.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, o = r.length; n < o; ++n)
      r[n].apply(this, t);
  }
  return this;
};
Ue.prototype.emitReserved = Ue.prototype.emit;
Ue.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ue.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const as = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), bt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), IT = "arraybuffer";
function Sd(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const $T = bt.setTimeout, MT = bt.clearTimeout;
function cs(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = $T.bind(bt), e.clearTimeoutFn = MT.bind(bt)) : (e.setTimeoutFn = bt.setTimeout.bind(bt), e.clearTimeoutFn = bt.clearTimeout.bind(bt));
}
const DT = 1.33;
function jT(e) {
  return typeof e == "string" ? LT(e) : Math.ceil((e.byteLength || e.size) * DT);
}
function LT(e) {
  let t = 0, r = 0;
  for (let n = 0, o = e.length; n < o; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function xd() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function BT(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function FT(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, o = r.length; n < o; n++) {
    let s = r[n].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class VT extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class va extends Ue {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, cs(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, r, n) {
    return super.emitReserved("error", new VT(t, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const r = ya(t, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, r = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const r = BT(t);
    return r.length ? "?" + r : "";
  }
}
class UT extends va {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    PT(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, _T(t, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = xd()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let Td = !1;
try {
  Td = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const zT = Td;
function GT() {
}
class WT extends UT {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || n !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (o, s) => {
      this.onError("xhr post error", o, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class Mt extends Ue {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r, n) {
    super(), this.createRequest = t, cs(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const r = Sd(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var o;
        n.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Mt.requestsCount++, Mt.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = GT, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Mt.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
Mt.requestsCount = 0;
Mt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Dl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in bt ? "pagehide" : "unload";
    addEventListener(e, Dl, !1);
  }
}
function Dl() {
  for (let e in Mt.requests)
    Mt.requests.hasOwnProperty(e) && Mt.requests[e].abort();
}
const HT = (function() {
  const e = Cd({
    xdomain: !1
  });
  return e && e.responseType !== null;
})();
class qT extends WT {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = HT && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Mt(Cd, this.uri(), t);
  }
}
function Cd(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || zT))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new bt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Rd = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class YT extends va {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, n = Rd ? {} : Sd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, r, n);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], o = r === t.length - 1;
      ga(n, this.supportsBinary, (s) => {
        try {
          this.doWrite(n, s);
        } catch {
        }
        o && as(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = xd()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const Hs = bt.WebSocket || bt.MozWebSocket;
class KT extends YT {
  createSocket(t, r, n) {
    return Rd ? new Hs(t, r, n) : r ? new Hs(t, r) : new Hs(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class JT extends va {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const r = AT(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), o = kT();
        o.readable.pipeTo(t.writable), this._writer = o.writable.getWriter();
        const s = () => {
          n.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), s());
          }).catch((a) => {
          });
        };
        s();
        const i = { type: "open" };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], o = r === t.length - 1;
      this._writer.write(n).then(() => {
        o && as(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const XT = {
  websocket: KT,
  webtransport: JT,
  polling: qT
}, QT = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ZT = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Pi(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let o = QT.exec(e || ""), s = {}, i = 14;
  for (; i--; )
    s[ZT[i]] = o[i] || "";
  return r != -1 && n != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = eC(s, s.path), s.queryKey = tC(s, s.query), s;
}
function eC(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function tC(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, o, s) {
    o && (r[o] = s);
  }), r;
}
const ki = typeof addEventListener == "function" && typeof removeEventListener == "function", mo = [];
ki && addEventListener("offline", () => {
  mo.forEach((e) => e());
}, !1);
class Kt extends Ue {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = IT, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = Pi(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = Pi(r.host).host);
    cs(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const o = n.prototype.name;
      this.transports.push(o), this._transportsByName[o] = n;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = FT(this.opts.query)), ki && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, mo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = Ed, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t = this.opts.rememberUpgrade && Kt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(t);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Kt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = t.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const o = this.writeBuffer[n].data;
      if (o && (r += jT(o)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, as(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, r, n, o) {
    if (typeof r == "function" && (o = r, r = void 0), typeof n == "function" && (o = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const s = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (Kt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ki && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = mo.indexOf(this._offlineEventListener);
        n !== -1 && mo.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Kt.protocol = Ed;
class rC extends Kt {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let r = this.createTransport(t), n = !1;
    Kt.priorWebsocketSuccess = !1;
    const o = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (p) => {
        if (!n)
          if (p.type === "pong" && p.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Kt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const g = new Error("probe error");
            g.transport = r.name, this.emitReserved("upgradeError", g);
          }
      }));
    };
    function s() {
      n || (n = !0, f(), r.close(), r = null);
    }
    const i = (p) => {
      const g = new Error("probe error: " + p);
      g.transport = r.name, s(), this.emitReserved("upgradeError", g);
    };
    function a() {
      i("transport closed");
    }
    function l() {
      i("socket closed");
    }
    function u(p) {
      r && p.name !== r.name && s();
    }
    const f = () => {
      r.removeListener("open", o), r.removeListener("error", i), r.removeListener("close", a), this.off("close", l), this.off("upgrading", u);
    };
    r.once("open", o), r.once("error", i), r.once("close", a), this.once("close", l), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const r = [];
    for (let n = 0; n < t.length; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
}
let nC = class extends rC {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((o) => XT[o]).filter((o) => !!o)), super(t, n);
  }
};
function oC(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = Pi(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + t, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const sC = typeof ArrayBuffer == "function", iC = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, wd = Object.prototype.toString, aC = typeof Blob == "function" || typeof Blob < "u" && wd.call(Blob) === "[object BlobConstructor]", cC = typeof File == "function" || typeof File < "u" && wd.call(File) === "[object FileConstructor]";
function ba(e) {
  return sC && (e instanceof ArrayBuffer || iC(e)) || aC && e instanceof Blob || cC && e instanceof File;
}
function go(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (go(e[r]))
        return !0;
    return !1;
  }
  if (ba(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return go(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && go(e[r]))
      return !0;
  return !1;
}
function lC(e) {
  const t = [], r = e.data, n = e;
  return n.data = Ai(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Ai(e, t) {
  if (!e)
    return e;
  if (ba(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = Ai(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Ai(e[n], t));
    return r;
  }
  return e;
}
function uC(e, t) {
  return e.data = Ni(e.data, t), delete e.attachments, e;
}
function Ni(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Ni(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Ni(e[r], t));
  return e;
}
const fC = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], dC = 5;
var pe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(pe || (pe = {}));
class pC {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === pe.EVENT || t.type === pe.ACK) && go(t) ? this.encodeAsBinary({
      type: t.type === pe.EVENT ? pe.BINARY_EVENT : pe.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === pe.BINARY_EVENT || t.type === pe.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = lC(t), n = this.encodeAsString(r.packet), o = r.buffers;
    return o.unshift(n), o;
  }
}
function jl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ea extends Ue {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === pe.BINARY_EVENT;
      n || r.type === pe.BINARY_ACK ? (r.type = n ? pe.EVENT : pe.ACK, this.reconstructor = new hC(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (ba(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let r = 0;
    const n = {
      type: Number(t.charAt(0))
    };
    if (pe[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === pe.BINARY_EVENT || n.type === pe.BINARY_ACK) {
      const s = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const i = t.substring(s, r);
      if (i != Number(i) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(i);
    }
    if (t.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(s, r);
    } else
      n.nsp = "/";
    const o = t.charAt(r + 1);
    if (o !== "" && Number(o) == o) {
      const s = r + 1;
      for (; ++r; ) {
        const i = t.charAt(r);
        if (i == null || Number(i) != i) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(s, r + 1));
    }
    if (t.charAt(++r)) {
      const s = this.tryParse(t.substr(r));
      if (Ea.isPayloadValid(n.type, s))
        n.data = s;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case pe.CONNECT:
        return jl(r);
      case pe.DISCONNECT:
        return r === void 0;
      case pe.CONNECT_ERROR:
        return typeof r == "string" || jl(r);
      case pe.EVENT:
      case pe.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && fC.indexOf(r[0]) === -1);
      case pe.ACK:
      case pe.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class hC {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const r = uC(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const mC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ea,
  Encoder: pC,
  get PacketType() {
    return pe;
  },
  protocol: dC
}, Symbol.toStringTag, { value: "Module" }));
function Rt(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const gC = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Od extends Ue {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      Rt(t, "open", this.onopen.bind(this)),
      Rt(t, "packet", this.onpacket.bind(this)),
      Rt(t, "error", this.onerror.bind(this)),
      Rt(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...r) {
    var n, o, s;
    if (gC.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const i = {
      type: pe.EVENT,
      data: r
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const f = this.ids++, p = r.pop();
      this._registerAckCallback(f, p), i.id = f;
    }
    const a = (o = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || o === void 0 ? void 0 : o.writable, l = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const o = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = r;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, o), i = (...a) => {
      this.io.clearTimeoutFn(s), r.apply(this, a);
    };
    i.withError = !0, this.acks[t] = i;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...r) {
    return new Promise((n, o) => {
      const s = (i, a) => i ? o(i) : n(a);
      s.withError = !0, r.push(s), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...s) => n !== this._queue[0] ? void 0 : (o !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(o)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: pe.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((n) => String(n.id) === t)) {
        const n = this.acks[t];
        delete this.acks[t], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case pe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case pe.EVENT:
        case pe.BINARY_EVENT:
          this.onevent(t);
          break;
        case pe.ACK:
        case pe.BINARY_ACK:
          this.onack(t);
          break;
        case pe.DISCONNECT:
          this.ondisconnect();
          break;
        case pe.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let n = !1;
    return function(...o) {
      n || (n = !0, r.packet({
        type: pe.ACK,
        id: t,
        data: o
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" && (delete this.acks[t.id], r.withError && t.data.unshift(null), r.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: pe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function Hr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Hr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
Hr.prototype.reset = function() {
  this.attempts = 0;
};
Hr.prototype.setMin = function(e) {
  this.ms = e;
};
Hr.prototype.setMax = function(e) {
  this.max = e;
};
Hr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ii extends Ue {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, cs(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Hr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const o = r.parser || mC;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new nC(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Rt(r, "open", function() {
      n.onopen(), t && t();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, i = Rt(r, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        o(), s(new Error("timeout")), r.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(o), this.subs.push(i), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Rt(t, "ping", this.onping.bind(this)),
      Rt(t, "data", this.ondata.bind(this)),
      Rt(t, "error", this.onerror.bind(this)),
      Rt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Rt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    as(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, r) {
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Od(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, r) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const on = {};
function yo(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = oC(e, t.path || "/socket.io"), n = r.source, o = r.id, s = r.path, i = on[o] && s in on[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || i;
  let l;
  return a ? l = new Ii(n, t) : (on[o] || (on[o] = new Ii(n, t)), l = on[o]), r.query && !t.query && (t.query = r.queryKey), l.socket(r.path, t);
}
Object.assign(yo, {
  Manager: Ii,
  Socket: Od,
  io: yo,
  connect: yo
});
const yC = (e, t, r) => {
  const [n, o] = Je(null), s = Ae(() => {
    const u = yo(e, {
      path: t,
      reconnection: !0,
      extraHeaders: {
        Authorization: `Bearer ${r}`
      }
    });
    o(u);
  }, [e, t, r]), i = Ae(() => {
    n?.disconnect(), o(null);
  }, [n]), [a, l] = Je(!1);
  return Ke(() => {
    l(!!n?.connected);
  }, [n]), Ke(() => {
    n?.on("connect", () => {
      l(!0), n.emit("chatData");
    });
  }, [n]), Ke(() => {
    n?.on("disconnect", () => {
      l(!1);
    });
  }, [n]), {
    socket: n,
    online: a,
    disconnectSocket: i,
    connectSocket: s
  };
}, vC = {
  online: !1
}, _d = Bl(vC), bC = ({
  wsUrl: e,
  wsPath: t,
  baseUrl: r,
  children: n
}) => {
  const { state: o, dispatch: s } = Cn(jn), { socket: i, online: a, disconnectSocket: l, connectSocket: u } = yC(
    e,
    t,
    o.token
  );
  Ke(() => (o.token && u(), o.token || l(), () => {
    l();
  }), [o.token]);
  const f = (g, y) => g.code ? (y({ type: "SET_ERROR", payload: g.msg }), !0) : !1;
  Ke(() => {
    const g = (w) => {
      console.log("unauthorized msg", w), hd(o.token, o.refreshToken, r);
    };
    i?.on("unauthorized", g);
    const y = (w) => {
      if (f(w, s)) return;
      const b = w.data, P = b.groupData, N = b.contactData, L = b.userData;
      if (s({ type: "CLEAR_CHAT_DATA" }), s({ type: "SET_USER", payload: b.user }), P.length)
        for (const O of P)
          i?.emit("joinGroupSocket", {
            groupId: O.groupId
          }), s({ type: "SET_GROUP_GATHER", payload: O });
      if (N.length)
        for (const O of N)
          i?.emit("joinPrivateSocket", {
            contactId: O.userId
          }), s({ type: "SET_CONTACT_GATHER", payload: O });
      if (s({
        type: "SET_OPERATORS",
        payload: b.operatorData
      }), L.length)
        for (const O of L)
          s({ type: "SET_USER_GATHER", payload: O });
      s({ type: "UPDATE_ACTIVE_ROOM" }), s({
        type: "SET_CONFERENCE",
        payload: b.conferenceData
      }), s({
        type: "SET_VISIT_DATA",
        payload: b.visitData
      });
    };
    i?.on("chatData", y);
    const h = (w) => {
      s({ type: "USER_ONLINE", payload: w.data });
    };
    i?.on("userOnline", h);
    const d = (w) => {
      s({ type: "USER_OFFLINE", payload: w.data });
    };
    i?.on("userOffline", d);
    const S = (w) => {
      f(w, s) || console.log("Успешно вошел в приватный чат");
    };
    i?.on("joinPrivateSocket", S);
    let T;
    const A = (w) => {
      f(w, s) || (T && clearTimeout(T), s({
        type: "SET_TYPING",
        payload: w.data
      }), T = setTimeout(() => {
        s({ type: "SET_TYPING", payload: null });
      }, 1e3));
    };
    i?.on("typing", A);
    const C = (w) => {
      if (f(w, s)) return;
      const b = w.data;
      s({ type: "REVOKE_MESSAGE", payload: b }), console.log("REVOKE_MESSAGE");
    };
    i?.on("revokeMessage", C);
    const x = (w) => {
      f(w, s) || s({
        type: "SET_GROUP_GATHER",
        payload: w.data
      });
    };
    i?.on("addGroup", x);
    const v = (w) => {
      if (f(w, s)) return;
      const b = w.data;
      s({ type: "SET_CONTACT_GATHER", payload: b }), s({ type: "SET_USER_GATHER", payload: b }), i?.emit("joinPrivateSocket", {
        contactId: b.userId
      });
    };
    i?.on("addContact", v);
    const I = (w) => {
      if (f(w, s)) return;
      const b = w.data;
      s({ type: "DEL_CONTACT", payload: b });
    };
    i?.on("deleteContact", I);
    const D = (w) => {
      if (f(w, s)) return;
      const b = w.data;
      s({ type: "UPDATE_GROUP_INFO", payload: b });
    };
    i?.on("updateGroupInfo", D);
    const z = (w) => {
      if (f(w, s)) return;
      const b = w.data;
      s({ type: "UPDATE_USER_INFO", payload: b });
    };
    i?.on("updateUserInfo", z);
    const W = (w) => {
      f(w, s) || s({
        type: "SET_CONFERENCE",
        payload: w.data
      });
    };
    i?.on("startConference", W);
    const m = (w) => {
      f(w, s) || s({
        type: "PAUSE_CONFERENCE",
        payload: w.data
      });
    };
    i?.on("pauseConference", m);
    const $ = (w) => {
      f(w, s) || s({
        type: "STOP_CONFERENCE",
        payload: w.data
      });
    };
    i?.on("stopConference", $);
    const U = (w) => {
      f(w, s);
    };
    i?.on("addOperator", U);
    const G = (w) => {
      f(w, s) || s({
        type: "SET_ACTIVE_ROOM",
        payload: w.data
      });
    };
    i?.on("setActiveRoom", G);
    const M = (w) => {
      if (f(w, s)) return;
      const b = w.data;
      s({
        type: "SET_VISIT_DATA",
        payload: b.visitData
      });
    };
    return i?.on("visitData", M), () => {
      i?.off("unauthorized", g), i?.off("chatData", y), i?.off("userOnline", h), i?.off("userOffline", d), i?.off("joinPrivateSocket", S), T && clearTimeout(T), i?.off("typing", A), i?.off("revokeMessage", C), i?.off("addGroup", x), i?.off("addContact", v), i?.off("deleteContact", I), i?.off("updateGroupInfo", D), i?.off("updateUserInfo", z), i?.off("startConference", W), i?.off("pauseConference", m), i?.off("stopConference", $), i?.off("addOperator", U), i?.off("setActiveRoom", G), i?.off("visitData", M);
    };
  }, [i?.id]), Ke(() => {
    const g = async (h) => {
      if (f(h, s)) return;
      const d = h.data;
      s({ type: "ADD_GROUP_MESSAGE", payload: d }), d.userId !== o.user.userId && i?.emit("markAsRead", {
        groupId: d.groupId,
        _id: d._id
      });
    };
    i?.on("groupMessage", g);
    const y = async (h) => {
      if (f(h, s)) return;
      const d = h.data;
      (d.contactId === o.user.userId || d.userId === o.user.userId) && (s({
        type: "ADD_PRIVATE_MESSAGE",
        payload: d
      }), o.activeRoom && o.activeRoom?.userId === d.userId && i?.emit("markAsRead", {
        contactId: d.userId,
        _id: d._id
      }));
    };
    return i?.on("privateMessage", y), () => {
      i?.off("groupMessage", g), i?.off("privateMessage", y);
    };
  }, [i?.id, o.activeRoom?.userId, o.activeRoom?.groupId]), Ke(() => {
    const g = (S) => {
      if (f(S, s)) return;
      const T = S.data;
      T.userId === o.user.userId ? T.groupId ? s({
        type: "LOSE_GROUP_UNREAD_GATHER",
        payload: T.groupId
      }) : s({
        type: "LOSE_CONTACT_UNREAD_GATHER",
        payload: T.contactId
      }) : T.contactId && s({
        type: "MARK_PRIVATE_MESSAGES_READ",
        payload: T.userId
      });
    };
    i?.on("markAsRead", g);
    const y = (S) => {
      if (f(S, s)) return;
      const T = S.data;
      T.userId === o.user.userId ? s({ type: "DEL_GROUP", payload: T.groupId }) : s({ type: "DEL_GROUP_MEMBER", payload: T });
    };
    i?.on("deleteGroup", y);
    const h = (S) => {
      if (f(S, s)) return;
      const { group: T, user: A } = S.data;
      o.groupGather[T.groupId] ? A.userId !== o.user.userId && s({
        type: "ADD_GROUP_MEMBER",
        payload: {
          groupId: T.groupId,
          members: [A]
        }
      }) : (console.log("joined to a new group"), i?.emit("chatData"));
    };
    i?.on("joinGroup", h);
    const d = (S) => {
      if (f(S, s)) return;
      const T = S.data, A = T.user;
      A.online = 1;
      const { group: C } = T, x = o.groupGather[C.groupId];
      x && !x.members?.find((v) => v.userId === A.userId) && (A.isManager = 0, x.members?.push(A)), s({ type: "SET_USER_GATHER", payload: A });
    };
    return i?.on("joinGroupSocket", d), () => {
      i?.off("markAsRead", g), i?.off("deleteGroup", y), i?.off("joinGroup", h), i?.off("joinGroupSocket", d);
    };
  }, [i?.id, o.user.userId, ab(o.groupGather)]);
  const p = Rn(() => ({ socket: i, online: a }), [i, a]);
  return /* @__PURE__ */ E(_d.Provider, { value: p, children: n });
}, EC = ({
  activeGroupId: e,
  activeChatUserId: t,
  hideRooms: r = !1,
  fullWidth: n = !1,
  ...o
}) => {
  const s = Mi(
    (b) => b.breakpoints.down("md")
  ), { state: i, dispatch: a } = _.useContext(jn), { socket: l } = _.useContext(_d), {
    apiUrl: u,
    pageSize: f,
    getPrivateMessages: p,
    getGroupMessages: g,
    getUserByMmk: y
  } = _.useContext(ma), h = _.useCallback(() => {
    a({
      type: "SET_ACTIVE_ROOM",
      payload: {}
    });
  }, [a]), d = _.useCallback(
    (b, P) => {
      if (!l) {
        console.warn(`Socket not connected, cannot emit ${b}`);
        return;
      }
      try {
        l.emit(b, P);
      } catch (N) {
        console.error(`Error emitting ${b}:`, N), a({
          type: "SET_ERROR",
          payload: `Failed to send ${b}`
        });
      }
    },
    [l, a]
  ), S = _.useCallback(
    async (b) => {
      try {
        if (a({ type: "SET_LOADING", payload: !0 }), nr(b))
          await g(b);
        else {
          const P = i.messageSearch?.trim();
          await p(b, {
            search: P || void 0
          });
        }
      } catch (P) {
        console.error("Failed to load messages:", P), a({ type: "SET_ERROR", payload: "Failed to load messages" });
      } finally {
        a({ type: "SET_LOADING", payload: !1 });
      }
    },
    [p, g, a, i.messageSearch]
  ), T = _.useCallback(
    (b) => {
      a({ type: "SET_MESSAGE_SEARCH", payload: b });
    },
    [a]
  ), A = _.useCallback(
    (b, P) => {
      d("revokeMessage", {
        groupId: nr(b) ? b.groupId : void 0,
        contactId: b.userId,
        _id: P._id
      });
    },
    [d]
  ), C = _.useCallback(
    (b) => {
      d("typing", {
        groupId: nr(b) ? b.groupId : void 0,
        contactId: b.userId
      });
    },
    [d]
  ), x = _.useCallback(
    (b, P) => {
      const N = {
        content: P.message,
        width: P.width,
        height: P.height,
        fileName: P.fileName,
        messageType: P.messageType,
        size: P.size
      };
      nr(b) ? d("groupMessage", {
        ...N,
        groupId: b.groupId
      }) : d("privateMessage", {
        ...N,
        contactId: b.userId
      });
    },
    [d]
  ), v = _.useCallback(
    (b) => {
      if (!(!b?.messages?.length || !l))
        try {
          const P = b.messages[b.messages.length - 1];
          if (!P?._id) return;
          nr(b) ? l.emit("markAsRead", {
            groupId: b.groupId,
            _id: P._id
          }) : (a({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: b.userId
          }), l.emit("markAsRead", {
            contactId: b.userId,
            _id: P._id
          }));
        } catch (P) {
          console.error("Error marking messages as read:", P), a({
            type: "SET_ERROR",
            payload: "Failed to mark messages as read"
          });
        }
    },
    [l, a]
  ), I = _.useCallback(
    (b) => {
      if (b)
        try {
          a({
            type: "SET_ACTIVE_ROOM",
            payload: {
              groupId: nr(b) ? b.groupId : void 0,
              contactId: b?.userId
            }
          }), v(b);
        } catch (P) {
          console.error("Error changing chat:", P), a({
            type: "SET_ERROR",
            payload: "Failed to change chat room"
          });
        }
    },
    [a, v]
  ), D = _.useCallback(
    (b, P, N) => {
      d("startConference", {
        groupId: nr(b) ? b.groupId : void 0,
        contactId: b.userId,
        visitId: P,
        recreate: N
      });
    },
    [d]
  ), z = _.useCallback(
    (b) => {
      b?.id && d("stopConference", {
        id: b.id
      });
    },
    [d]
  ), W = _.useCallback(
    (b) => {
      b?.id && d("pauseConference", {
        id: b.id
      });
    },
    [d]
  ), m = _.useCallback(
    (b) => {
      b?.id && (d("resumeConference", {
        id: b.id
      }), a({ type: "JOIN_CONFERENCE", payload: b }));
    },
    [d, a]
  ), $ = _.useCallback(
    (b, P) => {
      d("addOperator", {
        groupId: b.groupId,
        operatorId: P.userId
      });
    },
    [d]
  ), U = _.useCallback(
    (b) => {
      d("deleteGroup", {
        groupId: b.groupId
      });
    },
    [d]
  ), G = _.useMemo(
    () => Object.values(i.groupGather),
    [i.groupGather]
  ), M = _.useMemo(
    () => Object.values(i.contactGather),
    [i.contactGather]
  );
  _.useEffect(() => {
    let b = !1;
    const P = (O) => {
      !b && O && I(O);
    };
    if (e != null && !lo(G)) {
      const O = G.find((B) => B.groupId === e);
      if (O)
        return P(O), () => {
          b = !0;
        };
    }
    if (t != null && !lo(M)) {
      const O = M.find(
        (B) => B.userId === t
      );
      if (O)
        return P(O), () => {
          b = !0;
        };
    }
    const N = Jc("mmk"), L = Jc("guid");
    return (N != null || L != null) && !lo(M) && y(N, L).then((O) => {
      O != null && P(M.find((B) => B.userId === O));
    }).catch((O) => {
      console.error("Failed to get user by MMK:", O);
    }), () => {
      b = !0;
    };
  }, [
    e,
    t,
    M,
    G,
    I,
    y
  ]);
  const w = i.activeRoom ? /* @__PURE__ */ E(
    lS,
    {
      apiUrl: u,
      user: i.user,
      users: i.userGather,
      operators: i.operators,
      chat: i.activeRoom,
      typing: i.typing,
      conference: i.conference.data,
      visitData: i.visitData,
      conferenceJoined: i.conference.joined,
      loading: i.loading,
      pageSize: f,
      onExitRoom: h,
      onEnterRoom: v,
      onNeedMoreMessages: S,
      onMessageDelete: A,
      onTyping: C,
      onSendMessage: x,
      onVideoCall: D,
      onVideoEnd: z,
      onConferencePause: W,
      onOperatorAdd: $,
      onLeaveGroup: U,
      onContactClick: o.onContactInfoClick,
      messageSearch: i.messageSearch,
      onMessageSearchChange: T,
      isMobile: s
    }
  ) : null;
  return /* @__PURE__ */ se(bT, { children: [
    /* @__PURE__ */ E(
      xT,
      {
        isMobile: s,
        conferenceActive: !!i.conference.data?.id,
        hideRooms: r,
        contactsList: i.conference.data?.id != null && e == null ? /* @__PURE__ */ E(
          TT,
          {
            conference: i.conference,
            onClose: W,
            onAccept: m,
            user: i.user,
            activeRoom: i.activeRoom,
            onChangeChat: I,
            apiUrl: u,
            isMobile: s
          }
        ) : /* @__PURE__ */ E(
          gT,
          {
            user: i.user,
            activeRoom: i.activeRoom,
            groups: G,
            contacts: M,
            typing: i.typing,
            onChangeChat: I
          }
        ),
        chatRoom: w,
        activeRoom: i.activeRoom,
        user: i.user,
        onExitRoom: h,
        onChangeChat: I,
        chatOld: i.chatOld
      }
    ),
    /* @__PURE__ */ E(yT, {})
  ] });
}, JC = ({
  lang: e,
  chatBaseURLApi: t,
  baseUrl: r,
  chatWsUrl: n,
  chatWsPath: o,
  token: s,
  refreshToken: i,
  ...a
}) => /* @__PURE__ */ E(oT, { defLang: e, token: s, refreshToken: i, children: /* @__PURE__ */ E(
  iT,
  {
    chatBaseURLApi: t,
    pageSize: 25,
    baseUrl: r,
    children: /* @__PURE__ */ E(bC, { wsUrl: n, wsPath: o, baseUrl: r, children: /* @__PURE__ */ E(EC, { ...a }) })
  }
) });
export {
  fb as AddContact,
  PC as CHAT_ACTIONS,
  jn as ChatContext,
  JC as ChatIndex,
  EC as ChatPage,
  oT as ChatProvider,
  mb as Conference,
  yb as ConferenceCall,
  Sp as ContextMenuType,
  bb as Emoji,
  bf as Message,
  bp as MessageStatus,
  ma as RestContext,
  iT as RestProvider,
  Ep as Role,
  lS as Room,
  gT as RoomList,
  _d as SocketContext,
  bC as SocketProvider,
  lb as Typing,
  YC as clearLocalStorage,
  hd as getRefreshToken
};
//# sourceMappingURL=mobimed.esm.js.map
