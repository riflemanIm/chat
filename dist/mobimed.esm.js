import { jsxs as N, jsx as c, Fragment as xe } from "@emotion/react/jsx-runtime";
import { Typography as se, List as jn, ListItemButton as Gn, ListItemAvatar as Hn, Avatar as Ee, ListItemText as qn, Dialog as Vn, DialogTitle as Zr, Paper as es, Button as ft, Box as Y, ListItem as tt, Alert as mt, Link as ts, TextField as Wt, IconButton as be, InputAdornment as zn, CircularProgress as Wn, SvgIcon as ns, Popover as Yn, DialogContent as rs, DialogActions as ss, Slide as os, Tooltip as is, Menu as Kn, useMediaQuery as Jn, CardHeader as nt, Fade as as, Fab as an, CardContent as Xn, Backdrop as cs, Card as Qn, Divider as Nt, MenuItem as cn, ListItemIcon as ln, Chip as ls, Badge as Zn, Snackbar as us, Container as ds, Grid2 as Rt } from "@mui/material";
import * as W from "react";
import B, { useEffect as Z, memo as fs, forwardRef as hs, useMemo as Me, useRef as oe, useState as ne, useCallback as K, createContext as er, useContext as Yt } from "react";
import tr from "@mui/icons-material/Delete";
import ps from "@mui/icons-material/FileCopy";
import { makeStyles as ee, createStyles as ye, withStyles as nr } from "@mui/styles";
import { useTranslation as ce } from "react-i18next";
import { Done as ms, DoneAll as gs, Send as ys, InsertEmoticon as Es } from "@mui/icons-material";
import bs from "@mui/icons-material/CallEnd";
import rr from "@mui/icons-material/Group";
import Ss from "@mui/icons-material/Pause";
import _s from "@mui/icons-material/PersonAdd";
import ws from "@mui/icons-material/Star";
import sr from "@mui/icons-material/KeyboardArrowDown";
import Rs from "@mui/icons-material/PlayArrow";
import Cs from "@mui/icons-material/RestartAlt";
import Ts from "@mui/icons-material/VideoCall";
import Dt from "@mui/material/Button";
import As from "@mui/material/Menu";
import vs from "@mui/material/MenuItem";
import { styled as Os, alpha as xs } from "@mui/material/styles";
import ks from "@mui/material/Dialog";
import Is from "@mui/material/DialogActions";
import Ns from "@mui/material/DialogContent";
import Ds from "@mui/material/Slide";
import Ms from "@mui/icons-material/Close";
import or from "@mui/icons-material/Search";
import ir from "react/jsx-runtime";
import Ps from "@mui/material/List";
import Ls from "@mui/icons-material/RecentActors";
import Bs from "@mui/icons-material/Videocam";
var Us = /* @__PURE__ */ ((t) => (t[t.sent = 0] = "sent", t[t.read = 1] = "read", t))(Us || {}), $s = /* @__PURE__ */ ((t) => (t[t.Unknown = 0] = "Unknown", t[t.Client = 1] = "Client", t[t.Agent = 2] = "Agent", t[t.Specialist = 3] = "Specialist", t[t.Operator = 4] = "Operator", t))($s || {}), Fs = /* @__PURE__ */ ((t) => (t.COPY = "COPY", t.REVOKE = "REVOKE", t.TOP_REVERT = "TOP_REVERT", t.TOP = "TOP", t.READ = "READ", t.DELETE = "DELETE", t))(Fs || {});
const Gl = {
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  REVOKE_MESSAGE: "REVOKE_MESSAGE",
  MARK_PRIVATE_MESSAGES_READ: "MARK_PRIVATE_MESSAGES_READ"
};
function js(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var rt = { exports: {} }, Gs = rt.exports, un;
function Hs() {
  return un || (un = 1, (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(Gs, (function() {
      var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", i = "second", a = "minute", l = "hour", u = "day", d = "week", m = "month", g = "quarter", S = "year", f = "date", b = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, A = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
        var C = ["th", "st", "nd", "rd"], w = T % 100;
        return "[" + T + (C[(w - 20) % 10] || C[w] || C[0]) + "]";
      } }, x = function(T, C, w) {
        var h = String(T);
        return !h || h.length >= C ? T : "" + Array(C + 1 - h.length).join(w) + T;
      }, k = { s: x, z: function(T) {
        var C = -T.utcOffset(), w = Math.abs(C), h = Math.floor(w / 60), E = w % 60;
        return (C <= 0 ? "+" : "-") + x(h, 2, "0") + ":" + x(E, 2, "0");
      }, m: function T(C, w) {
        if (C.date() < w.date()) return -T(w, C);
        var h = 12 * (w.year() - C.year()) + (w.month() - C.month()), E = C.clone().add(h, m), y = w - E < 0, R = C.clone().add(h + (y ? -1 : 1), m);
        return +(-(h + (w - E) / (y ? E - R : R - E)) || 0);
      }, a: function(T) {
        return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
      }, p: function(T) {
        return { M: m, y: S, w: d, d: u, D: f, h: l, m: a, s: i, ms: o, Q: g }[T] || String(T || "").toLowerCase().replace(/s$/, "");
      }, u: function(T) {
        return T === void 0;
      } }, D = "en", P = {};
      P[D] = M;
      var j = "$isDayjsObject", X = function(T) {
        return T instanceof q || !(!T || !T[j]);
      }, V = function T(C, w, h) {
        var E;
        if (!C) return D;
        if (typeof C == "string") {
          var y = C.toLowerCase();
          P[y] && (E = y), w && (P[y] = w, E = y);
          var R = C.split("-");
          if (!E && R.length > 1) return T(R[0]);
        } else {
          var I = C.name;
          P[I] = C, E = I;
        }
        return !h && E && (D = E), E || !h && D;
      }, O = function(T, C) {
        if (X(T)) return T.clone();
        var w = typeof C == "object" ? C : {};
        return w.date = T, w.args = arguments, new q(w);
      }, v = k;
      v.l = V, v.i = X, v.w = function(T, C) {
        return O(T, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
      };
      var q = (function() {
        function T(w) {
          this.$L = V(w.locale, null, !0), this.parse(w), this.$x = this.$x || w.x || {}, this[j] = !0;
        }
        var C = T.prototype;
        return C.parse = function(w) {
          this.$d = (function(h) {
            var E = h.date, y = h.utc;
            if (E === null) return /* @__PURE__ */ new Date(NaN);
            if (v.u(E)) return /* @__PURE__ */ new Date();
            if (E instanceof Date) return new Date(E);
            if (typeof E == "string" && !/Z$/i.test(E)) {
              var R = E.match(_);
              if (R) {
                var I = R[2] - 1 || 0, U = (R[7] || "0").substring(0, 3);
                return y ? new Date(Date.UTC(R[1], I, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, U)) : new Date(R[1], I, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, U);
              }
            }
            return new Date(E);
          })(w), this.init();
        }, C.init = function() {
          var w = this.$d;
          this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
        }, C.$utils = function() {
          return v;
        }, C.isValid = function() {
          return this.$d.toString() !== b;
        }, C.isSame = function(w, h) {
          var E = O(w);
          return this.startOf(h) <= E && E <= this.endOf(h);
        }, C.isAfter = function(w, h) {
          return O(w) < this.startOf(h);
        }, C.isBefore = function(w, h) {
          return this.endOf(h) < O(w);
        }, C.$g = function(w, h, E) {
          return v.u(w) ? this[h] : this.set(E, w);
        }, C.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, C.valueOf = function() {
          return this.$d.getTime();
        }, C.startOf = function(w, h) {
          var E = this, y = !!v.u(h) || h, R = v.p(w), I = function(Ae, re) {
            var _e = v.w(E.$u ? Date.UTC(E.$y, re, Ae) : new Date(E.$y, re, Ae), E);
            return y ? _e : _e.endOf(u);
          }, U = function(Ae, re) {
            return v.w(E.toDate()[Ae].apply(E.toDate("s"), (y ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), E);
          }, $ = this.$W, L = this.$M, z = this.$D, de = "set" + (this.$u ? "UTC" : "");
          switch (R) {
            case S:
              return y ? I(1, 0) : I(31, 11);
            case m:
              return y ? I(1, L) : I(0, L + 1);
            case d:
              var Te = this.$locale().weekStart || 0, $e = ($ < Te ? $ + 7 : $) - Te;
              return I(y ? z - $e : z + (6 - $e), L);
            case u:
            case f:
              return U(de + "Hours", 0);
            case l:
              return U(de + "Minutes", 1);
            case a:
              return U(de + "Seconds", 2);
            case i:
              return U(de + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, C.endOf = function(w) {
          return this.startOf(w, !1);
        }, C.$set = function(w, h) {
          var E, y = v.p(w), R = "set" + (this.$u ? "UTC" : ""), I = (E = {}, E[u] = R + "Date", E[f] = R + "Date", E[m] = R + "Month", E[S] = R + "FullYear", E[l] = R + "Hours", E[a] = R + "Minutes", E[i] = R + "Seconds", E[o] = R + "Milliseconds", E)[y], U = y === u ? this.$D + (h - this.$W) : h;
          if (y === m || y === S) {
            var $ = this.clone().set(f, 1);
            $.$d[I](U), $.init(), this.$d = $.set(f, Math.min(this.$D, $.daysInMonth())).$d;
          } else I && this.$d[I](U);
          return this.init(), this;
        }, C.set = function(w, h) {
          return this.clone().$set(w, h);
        }, C.get = function(w) {
          return this[v.p(w)]();
        }, C.add = function(w, h) {
          var E, y = this;
          w = Number(w);
          var R = v.p(h), I = function(L) {
            var z = O(y);
            return v.w(z.date(z.date() + Math.round(L * w)), y);
          };
          if (R === m) return this.set(m, this.$M + w);
          if (R === S) return this.set(S, this.$y + w);
          if (R === u) return I(1);
          if (R === d) return I(7);
          var U = (E = {}, E[a] = r, E[l] = s, E[i] = n, E)[R] || 1, $ = this.$d.getTime() + w * U;
          return v.w($, this);
        }, C.subtract = function(w, h) {
          return this.add(-1 * w, h);
        }, C.format = function(w) {
          var h = this, E = this.$locale();
          if (!this.isValid()) return E.invalidDate || b;
          var y = w || "YYYY-MM-DDTHH:mm:ssZ", R = v.z(this), I = this.$H, U = this.$m, $ = this.$M, L = E.weekdays, z = E.months, de = E.meridiem, Te = function(re, _e, Fe, Xe) {
            return re && (re[_e] || re(h, y)) || Fe[_e].slice(0, Xe);
          }, $e = function(re) {
            return v.s(I % 12 || 12, re, "0");
          }, Ae = de || function(re, _e, Fe) {
            var Xe = re < 12 ? "AM" : "PM";
            return Fe ? Xe.toLowerCase() : Xe;
          };
          return y.replace(A, (function(re, _e) {
            return _e || (function(Fe) {
              switch (Fe) {
                case "YY":
                  return String(h.$y).slice(-2);
                case "YYYY":
                  return v.s(h.$y, 4, "0");
                case "M":
                  return $ + 1;
                case "MM":
                  return v.s($ + 1, 2, "0");
                case "MMM":
                  return Te(E.monthsShort, $, z, 3);
                case "MMMM":
                  return Te(z, $);
                case "D":
                  return h.$D;
                case "DD":
                  return v.s(h.$D, 2, "0");
                case "d":
                  return String(h.$W);
                case "dd":
                  return Te(E.weekdaysMin, h.$W, L, 2);
                case "ddd":
                  return Te(E.weekdaysShort, h.$W, L, 3);
                case "dddd":
                  return L[h.$W];
                case "H":
                  return String(I);
                case "HH":
                  return v.s(I, 2, "0");
                case "h":
                  return $e(1);
                case "hh":
                  return $e(2);
                case "a":
                  return Ae(I, U, !0);
                case "A":
                  return Ae(I, U, !1);
                case "m":
                  return String(U);
                case "mm":
                  return v.s(U, 2, "0");
                case "s":
                  return String(h.$s);
                case "ss":
                  return v.s(h.$s, 2, "0");
                case "SSS":
                  return v.s(h.$ms, 3, "0");
                case "Z":
                  return R;
              }
              return null;
            })(re) || R.replace(":", "");
          }));
        }, C.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, C.diff = function(w, h, E) {
          var y, R = this, I = v.p(h), U = O(w), $ = (U.utcOffset() - this.utcOffset()) * r, L = this - U, z = function() {
            return v.m(R, U);
          };
          switch (I) {
            case S:
              y = z() / 12;
              break;
            case m:
              y = z();
              break;
            case g:
              y = z() / 3;
              break;
            case d:
              y = (L - $) / 6048e5;
              break;
            case u:
              y = (L - $) / 864e5;
              break;
            case l:
              y = L / s;
              break;
            case a:
              y = L / r;
              break;
            case i:
              y = L / n;
              break;
            default:
              y = L;
          }
          return E ? y : v.a(y);
        }, C.daysInMonth = function() {
          return this.endOf(m).$D;
        }, C.$locale = function() {
          return P[this.$L];
        }, C.locale = function(w, h) {
          if (!w) return this.$L;
          var E = this.clone(), y = V(w, h, !0);
          return y && (E.$L = y), E;
        }, C.clone = function() {
          return v.w(this.$d, this);
        }, C.toDate = function() {
          return new Date(this.valueOf());
        }, C.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, C.toISOString = function() {
          return this.$d.toISOString();
        }, C.toString = function() {
          return this.$d.toUTCString();
        }, T;
      })(), G = q.prototype;
      return O.prototype = G, [["$ms", o], ["$s", i], ["$m", a], ["$H", l], ["$W", u], ["$M", m], ["$y", S], ["$D", f]].forEach((function(T) {
        G[T[1]] = function(C) {
          return this.$g(C, T[0], T[1]);
        };
      })), O.extend = function(T, C) {
        return T.$i || (T(C, q, O), T.$i = !0), O;
      }, O.locale = V, O.isDayjs = X, O.unix = function(T) {
        return O(1e3 * T);
      }, O.en = P[D], O.Ls = P, O.p = {}, O;
    }));
  })(rt)), rt.exports;
}
var qs = Hs();
const De = /* @__PURE__ */ js(qs);
function st(t) {
  return t == null || typeof t == "object" && Object.keys(t).length === 0 || typeof t == "string" && t.trim().length === 0;
}
function ht(t, e = "DD.MM.YYYY HH:mm") {
  return typeof t > "u" ? null : (typeof t == "string" && (t = new Date(t)), De().add(-1, "days").startOf("day").isAfter(t) ? De(t).format(e) : De().startOf("day").isAfter(t) ? `Вчера в ${De(t).format("HH:mm")}` : De(t).format("HH:mm"));
}
function Vs(t) {
  const e = t.split("$"), [n, r, s, o] = e;
  return {
    date: n,
    userId: r,
    size: s,
    name: o
  };
}
function zs(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? {
    name: t,
    ext: ""
  } : {
    name: t.slice(0, e),
    ext: t.slice(e + 1)
  };
}
const Se = (t) => t ? t.groupId ? `group:${t.groupId}` : `user:${t.userId}` : null, ar = (t) => t.groupId ? t.name : t.username, we = (t) => "groupId" in t, cr = (t, e) => {
  const n = Array.isArray(t.messages) && t.messages.length > 0, r = Array.isArray(e.messages) && e.messages.length > 0;
  if (n && r && e.messages != null && t.messages != null) {
    const s = e.messages[e.messages.length - 1].cdate != null ? new Date(e.messages[e.messages.length - 1].cdate).getTime() : (/* @__PURE__ */ new Date()).getTime(), o = t.messages[t.messages.length - 1].cdate != null ? new Date(t.messages[t.messages.length - 1].cdate).getTime() : (/* @__PURE__ */ new Date()).getTime() - 1;
    return s - o;
  }
  return n ? -1 : 1;
}, dn = (t) => {
  const e = window.location.search;
  return new URLSearchParams(e).get(t);
}, Ce = (t, e, n) => e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t, Ws = ee(
  (t) => ye({
    typingText: {
      paddingLeft: t.spacing(0.5)
    },
    typingDot: {
      display: "inline-block",
      verticalAlign: "middle",
      width: 4,
      height: 4,
      margin: "0px 2px",
      background: t.palette.primary.main,
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
), Ys = (t) => {
  const e = Ws();
  return /* @__PURE__ */ N(se, { color: "primary", variant: "body2", component: "span", children: [
    /* @__PURE__ */ c("span", { className: e.typingDot }),
    /* @__PURE__ */ c("span", { className: e.typingDot }),
    /* @__PURE__ */ c("span", { className: e.typingDot }),
    /* @__PURE__ */ c("span", { className: e.typingText, children: t.message })
  ] });
}, lr = (t) => {
  const { t: e } = ce();
  return t.isTyping ? /* @__PURE__ */ c(Ys, { message: e("CHAT.STATUS.TYPING") }) : t.contact.online === 1 ? /* @__PURE__ */ c(se, { variant: "body2", color: "primary", component: "span", children: e("CHAT.STATUS.ONLINE") }) : /* @__PURE__ */ c(se, { variant: "body2", color: "textSecondary", component: "span", children: e("CHAT.STATUS.OFFLINE") });
}, Ks = ee(() => ({
  star: {
    fontSize: "0.85rem",
    verticalAlign: "middle"
  }
})), ur = (t) => {
  const e = Ks(), { apiUrl: n, contacts: r, owner: s, onContactClick: o, ...i } = t;
  return /* @__PURE__ */ c(jn, { ...i, "aria-label": "contacts", children: r.map((a) => /* @__PURE__ */ N(
    Gn,
    {
      onClick: () => o && o(a),
      children: [
        /* @__PURE__ */ c(Hn, { children: /* @__PURE__ */ c(
          Ee,
          {
            alt: a.username,
            src: a.avatar ? Ce(n, a.avatar) : ""
          }
        ) }),
        /* @__PURE__ */ c(
          qn,
          {
            primary: /* @__PURE__ */ N("span", { children: [
              a.username,
              " ",
              s === a.userId && /* @__PURE__ */ c(ws, { className: e.star, color: "primary" })
            ] }),
            secondary: /* @__PURE__ */ c(lr, { contact: a, isTyping: !1 })
          }
        )
      ]
    },
    a.userId
  )) });
}, Js = (t) => {
  const { onClose: e, open: n, apiUrl: r, contacts: s } = t, { t: o } = ce(), i = () => {
    e();
  }, a = (l) => {
    e(l);
  };
  return /* @__PURE__ */ N(
    Vn,
    {
      onClose: i,
      "aria-labelledby": "add-contact-title",
      open: n,
      children: [
        /* @__PURE__ */ c(Zr, { id: "switch-operator-title", children: o("CHAT.ADD_CONTACT") }),
        /* @__PURE__ */ c(
          ur,
          {
            apiUrl: r,
            contacts: s,
            onContactClick: a
          }
        )
      ]
    }
  );
};
function Xs(t, e, n) {
  const r = new RegExp("(" + e + "=)[^&]+");
  return t.replace(r, "$1" + n);
}
const Qs = (t) => t === "ru" ? "rus" : t === "fr" ? "fra" : t === "en" ? "eng" : "", Zs = ee(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  }
})), eo = ({
  conference: t,
  onClose: e,
  langCode: n = "rus"
}) => {
  const r = Zs(), s = B.useRef(null);
  let o = "";
  t && t.url && (o = n ? Xs(t.url, "lang", Qs(n)) : t.url);
  const i = [
    "connectionFail",
    "loginFail",
    "callFail",
    "hangUp",
    "remoteHangUp",
    "logout",
    "connectionClosed"
  ], a = t ? t.id : void 0;
  return Z(() => {
    const l = ({ source: u, data: d }) => {
      const m = s.current ? s.current.contentWindow : null;
      if (m && u === m) {
        const { type: g } = d;
        i.includes(g) && e(t);
      }
    };
    return window.addEventListener("message", l), () => {
      window.removeEventListener("message", l);
    };
  }, [a, n]), /* @__PURE__ */ c(
    "iframe",
    {
      title: "conference",
      className: r.root,
      src: o,
      allowFullScreen: !0,
      allow: "microphone; camera; autoplay; display-capture",
      ref: s
    }
  );
}, to = ee(() => ({
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
})), no = ({
  conference: t,
  contact: e,
  apiUrl: n,
  onAccept: r
}) => {
  const s = to(), { t: o } = ce();
  return /* @__PURE__ */ N(es, { className: s.root, children: [
    /* @__PURE__ */ c("div", { className: s.pulse, children: e ? /* @__PURE__ */ c(
      Ee,
      {
        className: s.avatar,
        alt: e.username,
        src: e.avatar ? Ce(n, e.avatar) : ""
      }
    ) : /* @__PURE__ */ c(Ee, { className: s.avatar }) }),
    /* @__PURE__ */ c("div", { className: s.footer, children: /* @__PURE__ */ c(
      ft,
      {
        variant: "contained",
        color: "primary",
        onClick: () => r(t),
        children: o("CHAT.CONFERENCE.JOIN")
      }
    ) })
  ] });
}, ro = ee(
  () => ye({
    item: {
      cursor: "pointer"
    }
  })
), so = (t) => {
  const e = ro(), n = (s) => {
    t.onSelect && t.onSelect(s.target.innerText);
  }, r = (s) => /* @__PURE__ */ c(
    Y,
    {
      m: 0.5,
      component: "span",
      onClick: n,
      className: e.item,
      children: s.emoji
    }
  );
  return /* @__PURE__ */ N(Y, { children: [
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "😃" }),
      /* @__PURE__ */ c(r, { emoji: "😁" }),
      /* @__PURE__ */ c(r, { emoji: "😂" }),
      /* @__PURE__ */ c(r, { emoji: "😄" }),
      /* @__PURE__ */ c(r, { emoji: "😅" }),
      /* @__PURE__ */ c(r, { emoji: "😆" }),
      /* @__PURE__ */ c(r, { emoji: "😇" }),
      /* @__PURE__ */ c(r, { emoji: "😈" }),
      /* @__PURE__ */ c(r, { emoji: "😉" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "😊" }),
      /* @__PURE__ */ c(r, { emoji: "😋" }),
      /* @__PURE__ */ c(r, { emoji: "😌" }),
      /* @__PURE__ */ c(r, { emoji: "😍" }),
      /* @__PURE__ */ c(r, { emoji: "😎" }),
      /* @__PURE__ */ c(r, { emoji: "😏" }),
      /* @__PURE__ */ c(r, { emoji: "😐" }),
      /* @__PURE__ */ c(r, { emoji: "😒" }),
      /* @__PURE__ */ c(r, { emoji: "😓" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "❓" }),
      /* @__PURE__ */ c(r, { emoji: "😕" }),
      /* @__PURE__ */ c(r, { emoji: "😖" }),
      /* @__PURE__ */ c(r, { emoji: "😗" }),
      /* @__PURE__ */ c(r, { emoji: "😘" }),
      /* @__PURE__ */ c(r, { emoji: "😙" }),
      /* @__PURE__ */ c(r, { emoji: "😚" }),
      /* @__PURE__ */ c(r, { emoji: "😜" }),
      /* @__PURE__ */ c(r, { emoji: "😝" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "😞" }),
      /* @__PURE__ */ c(r, { emoji: "😟" }),
      /* @__PURE__ */ c(r, { emoji: "😠" }),
      /* @__PURE__ */ c(r, { emoji: "😡" }),
      /* @__PURE__ */ c(r, { emoji: "😢" }),
      /* @__PURE__ */ c(r, { emoji: "😣" }),
      /* @__PURE__ */ c(r, { emoji: "😤" }),
      /* @__PURE__ */ c(r, { emoji: "😥" }),
      /* @__PURE__ */ c(r, { emoji: "😦" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "😨" }),
      /* @__PURE__ */ c(r, { emoji: "😩" }),
      /* @__PURE__ */ c(r, { emoji: "😪" }),
      /* @__PURE__ */ c(r, { emoji: "😫" }),
      /* @__PURE__ */ c(r, { emoji: "😬" }),
      /* @__PURE__ */ c(r, { emoji: "😭" }),
      /* @__PURE__ */ c(r, { emoji: "😮" }),
      /* @__PURE__ */ c(r, { emoji: "😯" }),
      /* @__PURE__ */ c(r, { emoji: "😰" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "😲" }),
      /* @__PURE__ */ c(r, { emoji: "😳" }),
      /* @__PURE__ */ c(r, { emoji: "😴" }),
      /* @__PURE__ */ c(r, { emoji: "😵" }),
      /* @__PURE__ */ c(r, { emoji: "🧐" }),
      /* @__PURE__ */ c(r, { emoji: "😷" }),
      /* @__PURE__ */ c(r, { emoji: "🙁" }),
      /* @__PURE__ */ c(r, { emoji: "🙂" }),
      /* @__PURE__ */ c(r, { emoji: "🙃" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "🤐" }),
      /* @__PURE__ */ c(r, { emoji: "🤑" }),
      /* @__PURE__ */ c(r, { emoji: "🤒" }),
      /* @__PURE__ */ c(r, { emoji: "🤓" }),
      /* @__PURE__ */ c(r, { emoji: "🤔" }),
      /* @__PURE__ */ c(r, { emoji: "🤕" }),
      /* @__PURE__ */ c(r, { emoji: "🤠" }),
      /* @__PURE__ */ c(r, { emoji: "🤡" }),
      /* @__PURE__ */ c(r, { emoji: "🤢" })
    ] }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
      /* @__PURE__ */ c(r, { emoji: "🤤" }),
      /* @__PURE__ */ c(r, { emoji: "🤥" }),
      /* @__PURE__ */ c(r, { emoji: "🤧" }),
      /* @__PURE__ */ c(r, { emoji: "🤨" }),
      /* @__PURE__ */ c(r, { emoji: "🤩" }),
      /* @__PURE__ */ c(r, { emoji: "🤪" }),
      /* @__PURE__ */ c(r, { emoji: "🤫" }),
      /* @__PURE__ */ c(r, { emoji: "🤬" }),
      /* @__PURE__ */ c(r, { emoji: "🤭" })
    ] })
  ] });
}, oo = ee(
  (t) => ye({
    fileIcon: {
      fontSize: "0.75rem"
    },
    fileBody: {
      paddingLeft: t.spacing(1.2)
    }
  })
), io = ({ message: t }) => {
  const e = oo(), n = Vs(t.content), { name: r, ext: s } = zs(n.name);
  return /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
    /* @__PURE__ */ c(Ee, { className: e.fileIcon, children: s.toUpperCase() }),
    /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "column", className: e.fileBody, children: [
      r,
      /* @__PURE__ */ c("span", { children: `${s} ${n.size}` })
    ] })
  ] });
};
var ve = {}, je = {}, fn;
function ao() {
  if (fn) return je;
  fn = 1, je.__esModule = !0, je.default = void 0;
  var t = B, e = ir, n = ["className", "children", "ratio", "style"];
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var d = arguments[u];
        for (var m in d)
          Object.prototype.hasOwnProperty.call(d, m) && (l[m] = d[m]);
      }
      return l;
    }, r.apply(this, arguments);
  }
  function s(l, u) {
    if (l == null) return {};
    var d = {};
    for (var m in l)
      if (Object.prototype.hasOwnProperty.call(l, m)) {
        if (u.indexOf(m) >= 0) continue;
        d[m] = l[m];
      }
    return d;
  }
  var o = "--aspect-ratio", i = "react-aspect-ratio-placeholder";
  class a extends t.Component {
    constructor() {
      super(...arguments), this.node = null, this.setNode = (u) => {
        this.node = u;
      };
    }
    componentDidUpdate() {
      if (this.node) {
        var {
          node: u
        } = this, d = u.style.getPropertyValue(o);
        d || u.style.setProperty(o, "(" + this.props.ratio + ")");
      }
    }
    render() {
      var u = this.props, {
        className: d,
        children: m,
        ratio: g,
        style: S
      } = u, f = s(u, n), b = r({}, S, {
        // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
        [o]: "(" + g + ")"
      });
      return /* @__PURE__ */ (0, e.jsx)("div", r({
        className: d,
        ref: this.setNode,
        style: b
      }, f, {
        children: m
      }));
    }
  }
  return a.defaultProps = {
    className: i,
    ratio: 1
  }, je.default = a, je;
}
var Ge = {}, hn;
function co() {
  if (hn) return Ge;
  hn = 1, Ge.__esModule = !0, Ge.default = void 0;
  var t = B, e = ir, n = ["className", "children", "ratio", "style"];
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var d = arguments[u];
        for (var m in d)
          Object.prototype.hasOwnProperty.call(d, m) && (l[m] = d[m]);
      }
      return l;
    }, r.apply(this, arguments);
  }
  function s(l, u) {
    if (l == null) return {};
    var d = {};
    for (var m in l)
      if (Object.prototype.hasOwnProperty.call(l, m)) {
        if (u.indexOf(m) >= 0) continue;
        d[m] = l[m];
      }
    return d;
  }
  var o = "--aspect-ratio", i = "react-aspect-ratio-placeholder", a = /* @__PURE__ */ (0, t.forwardRef)((l, u) => {
    var {
      className: d = i,
      children: m,
      ratio: g = 1,
      style: S
    } = l, f = s(l, n), b = r({}, S, {
      // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
      [o]: "(" + g + ")"
    });
    return /* @__PURE__ */ (0, e.jsx)("div", r({
      className: d,
      style: b,
      ref: u
    }, f, {
      children: m
    }));
  });
  return Ge.default = a, Ge;
}
var pn;
function lo() {
  if (pn) return ve;
  pn = 1, ve.__esModule = !0, ve.default = ve.AspectRatio = void 0;
  var t = n(/* @__PURE__ */ ao()), e = n(/* @__PURE__ */ co());
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  return ve.default = t.default, ve.AspectRatio = e.default, ve;
}
var uo = /* @__PURE__ */ lo();
const fo = ee(
  (t) => ye({
    img: {
      cursor: "pointer",
      borderRadius: t.spacing(1.2),
      maxWidth: 284,
      maxHeight: 190,
      [t.breakpoints.down("sm")]: {
        maxWidth: 250,
        maxHeight: 170
      }
    },
    aspect: {
      maxWidth: 284,
      height: 190,
      [t.breakpoints.down("sm")]: {
        maxWidth: 250,
        height: 170
      }
    }
  })
), ho = ({
  apiUrl: t,
  message: e,
  setViewerData: n
}) => {
  const r = fo(), s = B.useMemo(
    () => Ce(t, `/static/image/${e.content}`),
    [t, e.content]
  ), o = B.useCallback(() => {
    n({
      visible: !0,
      src: s
    });
  }, [s, n]);
  return /* @__PURE__ */ c(uo.AspectRatio, { ratio: "3/4", className: r.aspect, children: /* @__PURE__ */ c(
    "img",
    {
      src: s,
      loading: "lazy",
      onClick: o,
      className: r.img,
      alt: e.cdate
    }
  ) });
}, po = ee((t) => ({
  mediaContent: {
    backgroundColor: t.palette.secondary.main,
    borderRadius: t.spacing(1.2),
    maxWidth: 284,
    height: 190,
    [t.breakpoints.down("sm")]: {
      maxWidth: 250,
      height: 170
    }
  }
})), mo = ({
  apiUrl: t,
  message: e,
  isConference: n
}) => {
  const r = po(), s = B.useMemo(() => {
    if (!n)
      return Ce(t, `/static/file/${e.content}`);
    try {
      const o = JSON.parse(e.content);
      if (o && o.visitId && o.name)
        return Ce(t, `/static/conf/${o.visitId}/${o.name}`);
    } catch (o) {
      console.warn("Failed to parse conference video", o);
    }
    return "";
  }, [t, n, e.content]);
  return s ? /* @__PURE__ */ c(
    "video",
    {
      src: s,
      className: r.mediaContent,
      controls: !0,
      muted: !0,
      preload: "none",
      playsInline: !0,
      children: "Ваш браузер не поддерживает тег video."
    }
  ) : /* @__PURE__ */ c(se, { variant: "caption", component: "span", color: "text.secondary", children: "Видео недоступно" });
}, go = ({
  apiUrl: t,
  message: e,
  setViewerData: n
}) => {
  switch (e.messageType) {
    case "text":
      return /* @__PURE__ */ c(B.Fragment, { children: e.content });
    case "video":
    case "video_conference":
      return /* @__PURE__ */ c(
        mo,
        {
          message: e,
          apiUrl: t,
          isConference: e.messageType === "video_conference"
        }
      );
    case "image":
      return /* @__PURE__ */ c(
        ho,
        {
          message: e,
          apiUrl: t,
          setViewerData: n
        }
      );
    case "file":
      return /* @__PURE__ */ c(io, { message: e });
    default:
      return console.warn(`Unsupported message type: ${e.messageType}`), null;
  }
}, yo = ee(
  (t) => ye({
    rootContact: {
      padding: 1,
      paddingLeft: t.spacing(2),
      "& span": {
        float: "right",
        color: t.palette.text.secondary,
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: t.palette.grey[200],
        color: t.palette.text.primary,
        borderTopRightRadius: t.spacing(3),
        borderBottomRightRadius: t.spacing(3)
      },
      "& $firstMessage": {
        borderTopLeftRadius: t.spacing(3),
        marginTop: 10
      },
      "& $lastMessage": {
        borderTopRightRadius: t.spacing(3),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: t.spacing(3),
        marginBottom: 10
      }
    },
    rootUser: {
      padding: 1,
      paddingRight: t.spacing(2),
      justifyContent: "flex-end",
      "& span": {
        float: "right",
        color: "#D9DEEC",
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: t.palette.primary.main,
        color: t.palette.primary.contrastText,
        borderTopLeftRadius: t.spacing(3),
        borderBottomLeftRadius: t.spacing(3)
      },
      "& $firstMessage": {
        borderTopRightRadius: t.spacing(3),
        marginTop: 10
      },
      "& $lastMessage": {
        borderTopLeftRadius: t.spacing(3),
        borderBottomRightRadius: 0,
        marginBottom: 10
      }
    },
    rootNotify: {
      justifyContent: "center",
      "& span": {
        float: "right",
        color: t.palette.text.secondary,
        fontSize: "0.8rem"
      },
      "& > *": {
        //padding: `0px ${theme.spacing(1)}`,
        borderRadius: t.spacing(3),
        fontWeight: 500
      }
    },
    message: {
      //maxWidth: "55%",
      //minWidth: "50%",
      maxWidth: "65%",
      [t.breakpoints.down("md")]: {
        maxWidth: "95%"
      },
      [t.breakpoints.down("sm")]: {
        maxWidth: "85%"
      },
      borderRadius: t.spacing(0.6),
      padding: t.spacing(0.9),
      paddingLeft: t.spacing(1.8),
      paddingRight: t.spacing(1.8)
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
      paddingLeft: t.spacing(1),
      flex: "1 1 auto",
      alignSelf: "flex-end"
    },
    statusImage: {
      fontSize: "1rem",
      marginRight: t.spacing(0.5),
      verticalAlign: "middle"
    }
  })
), Eo = (t, e, n, r, s, o, i) => {
  const { messageType: a } = e, l = [
    n.message,
    r ? n.firstMessage : "",
    s ? n.lastMessage : ""
  ].filter(Boolean).join(" ");
  if (a === "file") {
    const d = Ce(t, `/static/file/${e.content}`);
    return /* @__PURE__ */ c(
      ts,
      {
        className: `${l} ${n.file}`,
        underline: "none",
        href: d,
        target: "_blank",
        download: !0,
        onContextMenu: o,
        children: i
      }
    );
  }
  return /* @__PURE__ */ c(
    Y,
    {
      display: "flex",
      flexDirection: a === "image" || a === "video" || a === "video_conference" ? "column" : "row",
      flexWrap: "wrap",
      className: l,
      onContextMenu: o,
      children: i
    }
  );
}, dr = fs(
  hs((t, e) => {
    const n = yo(), { t: r } = ce(), {
      apiUrl: s,
      message: o,
      owner: i,
      user: a,
      isGroupMessage: l,
      isUserFirst: u,
      isUserLast: d,
      setViewerData: m
      //refOnMess,
    } = t, g = Me(() => {
      const f = o.content;
      if (typeof f != "string" || f.trim().indexOf("{") !== 0)
        return f;
      try {
        return JSON.parse(f);
      } catch (b) {
        return console.warn("Failed to parse notify content", b), f;
      }
    }, [o.content]);
    if (o.messageType === "notify") {
      const f = typeof g == "string" ? "info" : g.severity ?? "info", b = typeof g == "string" ? g : g.message;
      return /* @__PURE__ */ c(tt, { className: n.rootNotify, ref: e, children: /* @__PURE__ */ c(
        mt,
        {
          severity: f,
          children: b
        }
      ) });
    }
    if (o.isRevoke)
      return /* @__PURE__ */ c(tt, { className: n.rootNotify, ref: e, children: /* @__PURE__ */ c(
        se,
        {
          variant: "body2",
          align: "center",
          children: o.userId === a.userId ? r("CHAT.MESSAGE.REVOKED.YOU") : `${o.revokeUserName} ${r(
            "CHAT.MESSAGE.REVOKED.CONTACT"
          )}`
        }
      ) });
    const S = a.userId === o.userId;
    return /* @__PURE__ */ c(
      tt,
      {
        ref: e,
        className: o.messageType === "video_conference" ? n.rootNotify : S ? n.rootUser : n.rootContact,
        children: Eo(
          s,
          o,
          n,
          u,
          d,
          t.onContextMenu,
          /* @__PURE__ */ N(B.Fragment, { children: [
            !S && l && i && u && /* @__PURE__ */ c("div", { className: n.header, children: i.username }),
            /* @__PURE__ */ c(
              "div",
              {
                className: n.body,
                children: /* @__PURE__ */ c(
                  go,
                  {
                    message: o,
                    apiUrl: s,
                    setViewerData: m
                  }
                )
              }
            ),
            /* @__PURE__ */ c("div", { className: n.status, children: /* @__PURE__ */ N("span", { children: [
              S ? o.status === 0 ? /* @__PURE__ */ c(ms, { className: n.statusImage }) : /* @__PURE__ */ c(gs, { className: n.statusImage }) : null,
              ht(o.cdate) ?? ""
            ] }) })
          ] })
        )
      }
    );
  })
);
dr.displayName = "Message";
const bo = 10 * 1024 * 1024, mn = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp"],
  video: ["video/mp4", "video/webm"],
  file: ["application/pdf"]
}, Ne = 335, So = ee(() => ({
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
})), _o = (t) => {
  let { width: e, height: n } = t;
  return (e > Ne || n > Ne) && (e > n ? (n = Ne * (n / e), e = Ne) : (e = Ne * (e / n), n = Ne)), { width: e, height: n };
}, wo = ({
  chat: t,
  onTyping: e,
  onSendMessage: n,
  maxMessageLength: r = 1e3
}) => {
  const s = So(), { t: o } = ce(), i = oe(null), [a, l] = ne(
    null
  ), u = oe(null), d = oe(""), [m, g] = ne(""), [S, f] = ne(!1), [b, _] = ne({
    chat: t,
    time: 0
  }), A = (O) => {
    l(O.currentTarget);
  }, M = () => {
    l(null);
  }, x = K((O) => {
    if (u.current) {
      const v = d.current + O;
      d.current = v, u.current.value = v;
    }
    M();
  }, []), k = K(
    (O) => {
      const v = O.target.value;
      d.current = v, t && e && (b.chat !== t || Date.now() - b.time >= 500) && (_({
        chat: t,
        time: Date.now()
      }), e(t));
    },
    [t, e, b.chat]
  ), D = K(
    (O) => {
      !t || !n || n(t, O);
    },
    [t, n]
  ), P = (O) => O.trim().length === 0 ? (g(o("CHAT.ERROR.EMPTY_MESSAGE")), !1) : O.length > r ? (g(o("CHAT.ERROR.MESSAGE_TOO_LONG")), !1) : (g(""), !0), j = K(() => {
    const O = d.current;
    P(O) && (D({ message: O, messageType: "text" }), u.current && (u.current.value = "", d.current = ""), g(""));
  }, [D]), X = async (O) => {
    const v = O.target.files, q = v && v.length > 0 ? v[0] : void 0;
    if (q) {
      if (q.size > bo) {
        g(o("CHAT.ERROR.FILE_TOO_LARGE"));
        return;
      }
      try {
        f(!0), g("");
        const G = Object.entries(mn).find(
          ([, C]) => C.includes(q.type)
        ), T = G ? G[0] : "file";
        if (T === "image") {
          const C = await new Promise((w) => {
            const h = new Image(), E = URL.createObjectURL(q);
            h.onload = () => {
              URL.revokeObjectURL(E), w(
                _o({
                  width: h.width,
                  height: h.height
                })
              );
            }, h.src = E;
          });
          D({
            message: q,
            width: C.width,
            height: C.height,
            messageType: T
          });
        } else
          D({
            message: q,
            messageType: T,
            fileName: q.name,
            size: q.size
          });
      } catch {
        g(o("CHAT.ERROR.UPLOAD_FAILED"));
      } finally {
        f(!1), i.current && (i.current.value = "");
      }
    }
  }, V = (O) => {
    O.key === "Enter" && !O.shiftKey && (O.preventDefault(), j());
  };
  return /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ c(
      Wt,
      {
        className: s.input,
        placeholder: o("CHAT.INPUT_MESSAGE") || "",
        autoFocus: !0,
        variant: "standard",
        error: !!m,
        disabled: S,
        inputRef: u,
        slotProps: {
          input: {
            autoComplete: "off",
            inputProps: {
              maxLength: r
            },
            disableUnderline: !0,
            startAdornment: /* @__PURE__ */ N(zn, { position: "start", children: [
              /* @__PURE__ */ c(
                "input",
                {
                  ref: i,
                  accept: Object.values(mn).flat().join(","),
                  className: s.inputUpload,
                  id: "icon-button-file",
                  type: "file",
                  onChange: X,
                  disabled: S
                }
              ),
              /* @__PURE__ */ c("label", { htmlFor: "icon-button-file", children: /* @__PURE__ */ c(
                be,
                {
                  color: "primary",
                  "aria-label": "upload",
                  component: "span",
                  size: "small",
                  disabled: S,
                  children: S ? /* @__PURE__ */ c(Wn, { size: 24 }) : /* @__PURE__ */ c(ns, { className: s.attachmentIcon, children: /* @__PURE__ */ c(
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
              /* @__PURE__ */ c(
                be,
                {
                  "aria-describedby": a ? "emoji-popover" : void 0,
                  onClick: A,
                  color: "primary",
                  size: "small",
                  disabled: S,
                  children: /* @__PURE__ */ c(Es, {})
                }
              )
            ] }),
            endAdornment: /* @__PURE__ */ c(
              be,
              {
                edge: "end",
                color: "inherit",
                size: "small",
                onClick: j,
                disabled: S || !d.current.trim(),
                children: /* @__PURE__ */ c(ys, {})
              }
            ),
            onKeyDown: V
          }
        },
        onChange: k
      }
    ),
    m && /* @__PURE__ */ c("div", { className: s.error, children: m }),
    /* @__PURE__ */ c(
      Yn,
      {
        id: "emoji-popover",
        open: !!a,
        anchorEl: a,
        onClose: M,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ c(so, { onSelect: x })
      }
    )
  ] });
}, Ro = W.forwardRef(function(e, n) {
  return /* @__PURE__ */ c(Ds, { direction: "up", ref: n, ...e });
});
function fr({
  open: t,
  setOpen: e,
  contentText: n,
  callback: r
}) {
  const { t: s } = ce(), o = () => {
    e(!1);
  }, i = () => {
    e(!1), r();
  };
  return /* @__PURE__ */ c(W.Fragment, { children: /* @__PURE__ */ N(
    ks,
    {
      open: t,
      TransitionComponent: Ro,
      keepMounted: !0,
      onClose: o,
      "aria-describedby": "alert-dialog-slide-description",
      children: [
        /* @__PURE__ */ c(Ns, { children: /* @__PURE__ */ c(se, { variant: "h6", children: n }) }),
        /* @__PURE__ */ N(Is, { children: [
          /* @__PURE__ */ c(Dt, { onClick: o, color: "primary", children: s("CHAT.BUT_CLOSE") }),
          /* @__PURE__ */ c(Dt, { onClick: i, color: "warning", children: s("CHAT.BUT_CONFIRM") })
        ] })
      ]
    }
  ) });
}
const Co = Os((t) => /* @__PURE__ */ c(
  As,
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
    ...t
  }
))(({ theme: t }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: t.spacing(1),
    minWidth: 180,
    color: t.palette.mode === "light" ? "rgb(55, 65, 81)" : t.palette.grey[300],
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: t.palette.text.secondary,
        marginRight: t.spacing(1.5)
      },
      "&:active": {
        backgroundColor: xs(
          t.palette.primary.main,
          t.palette.action.selectedOpacity
        )
      }
    }
  }
})), To = (t) => {
  const e = new Date(t.visitDate);
  return `${t.plExamName} (${ht(e, "HH:mm")} - ${ht(
    new Date(e.getTime() + t.duration * 6e4),
    "HH:mm"
  )})`;
};
function Ao(t) {
  const { t: e } = ce(), [n, r] = B.useState(null), [s, o] = B.useState(null), [i, a] = B.useState(!1), l = !!n, u = (S) => {
    r(S.currentTarget);
  }, d = () => {
    r(null);
  }, m = (S) => {
    r(null), o(S.visitId), S.conferenceStatus === "finished" ? a(!0) : t.onVideoCall(t.chat, S.visitId);
  }, g = B.useMemo(() => t.visitData.filter((S) => S.contactId === t.chat.userId), [t.visitData, t.chat]);
  return /* @__PURE__ */ N("div", { children: [
    /* @__PURE__ */ c(
      Dt,
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
        startIcon: /* @__PURE__ */ c(Ts, {}),
        endIcon: /* @__PURE__ */ c(sr, {}),
        disabled: g.length === 0,
        children: e("CHAT.CONFERENCE.START")
      }
    ),
    /* @__PURE__ */ c(
      fr,
      {
        open: i,
        setOpen: a,
        contentText: e("CHAT.CONFERENCE.CONFIRM_RECREATE_CONF"),
        callback: () => {
          s && i && t.onVideoCall(t.chat, s, !0);
        }
      }
    ),
    /* @__PURE__ */ c(
      Co,
      {
        id: "conference-menu",
        MenuListProps: {
          "aria-labelledby": "conference-button"
        },
        anchorEl: n,
        open: l,
        onClose: d,
        children: g.map((S) => /* @__PURE__ */ N(
          vs,
          {
            onClick: () => m(S),
            value: S.visitId,
            disableRipple: !0,
            children: [
              S.conferenceStatus === "finished" ? /* @__PURE__ */ c(Cs, {}) : /* @__PURE__ */ c(Rs, {}),
              To(S)
            ]
          },
          S.visitId
        ))
      }
    )
  ] });
}
function vo(t) {
  const [e, n] = ne(t), [r, s] = ne(t <= 0), o = oe(null), i = K(() => {
    o.current || (o.current = setInterval(() => {
      n((l) => l <= 1 ? (clearInterval(o.current), o.current = null, s(!0), 0) : l - 1);
    }, 1e3));
  }, []), a = K((l) => {
    o.current && (clearInterval(o.current), o.current = null), n(l), s(l <= 0);
  }, []);
  return Z(() => (!r && e > 0 && i(), () => {
    o.current && (clearInterval(o.current), o.current = null);
  }), [i, e, r]), { counter: e, isFinished: r, reset: a };
}
const Oo = B.forwardRef(function(e, n) {
  return /* @__PURE__ */ c(os, { direction: "up", ref: n, ...e });
});
function xo({
  children: t,
  open: e,
  setOpen: n,
  severity: r = "warning"
}) {
  const { t: s } = ce(), o = () => {
    n(!1);
  };
  return /* @__PURE__ */ N(
    Vn,
    {
      open: e,
      TransitionComponent: Oo,
      keepMounted: !0,
      onClose: o,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [
        /* @__PURE__ */ c(rs, { children: /* @__PURE__ */ c(mt, { severity: r, children: typeof t == "string" ? /* @__PURE__ */ c(se, { variant: "body2", children: t }) : t }) }),
        /* @__PURE__ */ c(ss, { children: /* @__PURE__ */ c(ft, { onClick: o, variant: "text", children: s("CHAT.BUT_CLOSE") }) })
      ]
    }
  );
}
function ko(t) {
  const e = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), r = t % 60, s = (o) => o.toString().padStart(2, "0");
  return `${s(e)}:${s(n)}:${s(r)}`;
}
function gn({ finishDate: t }) {
  const { t: e } = ce(), [n, r] = ne(!1), s = Date.now();
  if (t == null)
    return null;
  const o = typeof t == "string" ? new Date(t).getTime() : t.getTime(), i = Math.max(0, Math.round((o - s) / 1e3)), { counter: a, isFinished: l } = vo(i), { strTime: u } = Me(() => ({ strTime: ko(a) }), [a]);
  return Z(() => {
    a === 180 && r(!0);
  }, [a]), l ? null : /* @__PURE__ */ N(Y, { textAlign: "right", children: [
    /* @__PURE__ */ N(se, { variant: "body2", component: "span", children: [
      e("CHAT.CONFERENCE.LEFT_TIME"),
      ":",
      " "
    ] }),
    /* @__PURE__ */ c(se, { variant: "button", component: "span", children: u }),
    /* @__PURE__ */ N(xo, { open: n, setOpen: r, severity: "info", children: [
      /* @__PURE__ */ N(se, { variant: "body1", textAlign: "center", children: [
        e("CHAT.CONFERENCE.UntillTheEnd"),
        ":"
      ] }),
      /* @__PURE__ */ c(se, { variant: "h6", textAlign: "center", children: u })
    ] })
  ] });
}
const Io = ({
  onClick: t,
  active: e = !1
}) => /* @__PURE__ */ c(is, { title: "Поиск по сообщениям", children: /* @__PURE__ */ c(
  be,
  {
    size: "medium",
    color: e ? "primary" : "default",
    onClick: t,
    sx: { width: 40, height: 40 },
    children: /* @__PURE__ */ c(or, { fontSize: "medium" })
  }
) }), Ct = 280, yn = ({
  value: t,
  onChange: e,
  inMobileOrConferenceActive: n
}) => {
  const { t: r } = ce(), [s, o] = B.useState(t), [i, a] = B.useState(null), l = !!i, u = B.useCallback(() => {
    e?.(s), n && a(null);
  }, [s, n, e]), d = B.useCallback(
    (_) => {
      a(_.currentTarget);
    },
    []
  ), m = B.useCallback(() => {
    a(null);
  }, []);
  B.useEffect(() => {
    (!n || !l) && o(t);
  }, [t, l, n]), B.useEffect(() => {
    n || a(null);
  }, [n]);
  const g = (_) => {
    const A = _.target.value;
    o(A), e?.(A);
  }, S = () => {
    o(""), e?.(""), n && a(null);
  }, f = (_) => {
    _.key === "Enter" && (_.preventDefault(), u());
  }, b = /* @__PURE__ */ c(
    Wt,
    {
      autoFocus: n ? l : !1,
      fullWidth: !0,
      size: "small",
      variant: "outlined",
      label: r("CHAT.MESSAGE.SEARCH", "Поиск сообщений"),
      value: s,
      onChange: g,
      onKeyDown: f,
      sx: { width: Ct },
      slotProps: {
        input: {
          endAdornment: /* @__PURE__ */ N(zn, { position: "end", children: [
            s ? /* @__PURE__ */ c(
              be,
              {
                size: "small",
                onClick: S,
                "aria-label": r("CHAT.MESSAGE.CLEAR_SEARCH", "Очистить поиск"),
                children: /* @__PURE__ */ c(Ms, { fontSize: "small" })
              }
            ) : null,
            /* @__PURE__ */ c(
              be,
              {
                size: "small",
                onClick: u,
                "aria-label": r("CHAT.MESSAGE.SEARCH_SUBMIT", "Найти сообщения"),
                children: /* @__PURE__ */ c(or, { fontSize: "small" })
              }
            )
          ] })
        }
      }
    }
  );
  return n ? /* @__PURE__ */ N(B.Fragment, { children: [
    /* @__PURE__ */ c(
      Io,
      {
        onClick: d,
        active: !!t
      }
    ),
    /* @__PURE__ */ c(
      Kn,
      {
        anchorEl: i,
        open: l,
        onClose: m,
        disableAutoFocus: !0,
        disableEnforceFocus: !0,
        keepMounted: !0,
        children: /* @__PURE__ */ c(Y, { sx: { px: 2, py: 1.5, width: Ct }, children: b })
      }
    )
  ] }) : /* @__PURE__ */ c(Y, { sx: { width: Ct }, children: b });
}, No = ee(
  (t) => ye({
    paper: {
      padding: t.spacing(1)
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff"
    }
  })
), Do = (t, e) => {
  const r = [`${Array.isArray(t.members) ? t.members.length : 0} ${e("CHAT.MEMBERS")}`], s = (t.members || []).reduce(
    (o, i) => i.online ? o + 1 : o,
    0
  );
  return s && r.push(`${s} ${e("CHAT.STATUS.ONLINE")}`), r.join(", ");
}, Mo = ({
  apiUrl: t,
  user: e,
  chat: n,
  typing: r,
  conference: s,
  visitData: o,
  conferenceJoined: i,
  className: a,
  operators: l,
  messageSearch: u,
  onVideoCall: d,
  onVideoEnd: m,
  onConferencePause: g,
  onOperatorAdd: S,
  onLeaveGroup: f,
  onContactClick: b,
  onMessageSearchChange: _
}) => {
  const A = No(), { t: M } = ce(), x = Jn(
    (z) => z.breakpoints.down("md")
  ), [k, D] = ne(null), [P, j] = ne(!1), [X, V] = B.useState(!1), O = oe(null), v = n, q = !!(r && r.contactId && r.userId === v.userId), G = s != null && !st(s), T = x || G, C = e.role != null && [3, 4].includes(e.role), w = G && i && e.role !== 1 && typeof g == "function", h = G && C && typeof m == "function", E = !G && C && typeof d == "function";
  if (!n)
    return /* @__PURE__ */ c(
      nt,
      {
        avatar: /* @__PURE__ */ c(Ee, {}),
        title: "",
        subheader: "",
        className: a
      }
    );
  const y = K(() => {
    D(null), O.current && (clearTimeout(O.current), O.current = null);
  }, []), R = K(
    (z) => {
      D((de) => de ?? z.currentTarget), O.current && (clearTimeout(O.current), O.current = null);
    },
    []
  ), I = K(() => {
    O.current || (O.current = setTimeout(() => {
      y();
    }, 1e3));
  }, [y]), U = K(() => {
    j(!0);
  }, []), $ = K(
    (z) => {
      j(!1), S && z && n && S(n, z);
    },
    [n, S]
  ), L = n;
  return L.groupId ? /* @__PURE__ */ c(xe, { children: /* @__PURE__ */ c(
    nt,
    {
      avatar: /* @__PURE__ */ c(Ee, { alt: L.name, className: A.avatarGroup, children: /* @__PURE__ */ c(rr, {}) }),
      title: L.name,
      subheader: /* @__PURE__ */ N(B.Fragment, { children: [
        /* @__PURE__ */ c(
          "span",
          {
            id: "mouse-over-span",
            "aria-owns": k ? "mouse-over-popover" : void 0,
            "aria-haspopup": "true",
            onMouseEnter: R,
            onMouseLeave: I,
            children: Do(L, M)
          }
        ),
        /* @__PURE__ */ c(
          Yn,
          {
            id: "mouse-over-popover",
            classes: {
              paper: A.paper
            },
            sx: { pointerEvents: "none" },
            open: !!k,
            anchorEl: k,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            onClose: y,
            disableRestoreFocus: !0,
            children: /* @__PURE__ */ c(
              ur,
              {
                apiUrl: t,
                contacts: L.members,
                onContactClick: b,
                owner: L.userId,
                onMouseEnter: R,
                onMouseLeave: I,
                sx: { pointerEvents: "all" }
              }
            )
          }
        )
      ] }),
      className: a,
      action: /* @__PURE__ */ N(
        Y,
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          sx: { "& > *": { flexShrink: 0 } },
          children: [
            /* @__PURE__ */ c(
              yn,
              {
                value: u,
                onChange: _,
                inMobileOrConferenceActive: T
              }
            ),
            e.role === 4 && /* @__PURE__ */ N(B.Fragment, { children: [
              /* @__PURE__ */ c(
                be,
                {
                  "aria-label": "add user",
                  onClick: U,
                  children: /* @__PURE__ */ c(_s, {})
                }
              ),
              /* @__PURE__ */ c(
                Js,
                {
                  apiUrl: t,
                  open: P,
                  contacts: l,
                  onClose: $
                }
              )
            ] }),
            e.role === 4 && Array.isArray(L.members) && L.members.some(
              (z) => z.userId !== e.userId && z.role === 4
            ) && f && /* @__PURE__ */ c(
              be,
              {
                "aria-label": "leave group",
                onClick: () => f(L),
                children: /* @__PURE__ */ c(tr, {})
              }
            )
          ]
        }
      )
    }
  ) }) : /* @__PURE__ */ c(xe, { children: /* @__PURE__ */ c(
    nt,
    {
      avatar: /* @__PURE__ */ c(
        Ee,
        {
          alt: v.username,
          src: v.avatar ? Ce(t, v.avatar) : ""
        }
      ),
      title: /* @__PURE__ */ c(
        se,
        {
          variant: "h6",
          sx: (z) => ({
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "0.9rem",
            [z.breakpoints.down("md")]: {
              fontSize: "0.8rem"
            },
            [z.breakpoints.down("sm")]: {
              whiteSpace: "wrap",
              fontSize: "0.7rem"
            }
          }),
          children: v.username
        }
      ),
      subheader: /* @__PURE__ */ c(lr, { contact: v, isTyping: q }),
      className: a,
      action: /* @__PURE__ */ N(xe, { children: [
        /* @__PURE__ */ N(
          Y,
          {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            sx: { "& > *": { flexShrink: 0 } },
            children: [
              /* @__PURE__ */ c(
                yn,
                {
                  value: u,
                  onChange: _,
                  inMobileOrConferenceActive: T
                }
              ),
              w && s && /* @__PURE__ */ c(
                ft,
                {
                  "aria-label": "cancel call",
                  variant: "contained",
                  color: "secondary",
                  size: "small",
                  startIcon: /* @__PURE__ */ c(Ss, { color: "primary" }),
                  onClick: () => {
                    g && g(s);
                  },
                  children: M("CHAT.CONFERENCE.PAUSE")
                }
              ),
              h && s && /* @__PURE__ */ N(B.Fragment, { children: [
                /* @__PURE__ */ c(
                  ft,
                  {
                    "aria-label": "cancel call",
                    variant: "contained",
                    color: "warning",
                    size: "small",
                    startIcon: /* @__PURE__ */ c(bs, { color: "inherit" }),
                    onClick: () => V(!0),
                    children: M("CHAT.CONFERENCE.FINISH")
                  }
                ),
                /* @__PURE__ */ c(
                  fr,
                  {
                    open: X,
                    setOpen: V,
                    contentText: M("CHAT.CONFERENCE.CONFIRM_FINISH_CONF"),
                    callback: () => {
                      m && m(s);
                    }
                  }
                )
              ] }),
              E && d && /* @__PURE__ */ c(
                Ao,
                {
                  visitData: o,
                  chat: v,
                  onVideoCall: d
                }
              ),
              !C && G && /* @__PURE__ */ c(gn, { finishDate: s.finishDate })
            ]
          }
        ),
        C && G && s.finishDate != null && /* @__PURE__ */ c(gn, { finishDate: s.finishDate })
      ] })
    }
  ) });
};
function Po() {
  let t = /* @__PURE__ */ new Map();
  function e({ root: n, rootMargin: r, threshold: s }) {
    let o = t.get(n);
    o || (o = /* @__PURE__ */ new Map(), t.set(n, o));
    let i = JSON.stringify({ rootMargin: r, threshold: s }), a = o.get(i);
    if (!a) {
      let l = /* @__PURE__ */ new Map();
      a = { observer: new IntersectionObserver((u) => {
        u.forEach((d) => {
          l.get(d.target)?.(d);
        });
      }, { root: n, rootMargin: r, threshold: s }), entryCallbacks: l }, o.set(i, a);
    }
    return { observe: (l, u) => {
      a.entryCallbacks.set(l, u), a.observer.observe(l);
    }, unobserve: (l) => {
      a.entryCallbacks.delete(l), a.observer.unobserve(l);
    } };
  }
  return { getObserver: e };
}
var Lo = "0px", Bo = [0], Uo = Po();
function $o(t) {
  let e = t?.rootMargin ?? Lo, n = t?.threshold ?? Bo, r = oe(null), s = oe(null), o = oe(null), [i, a] = ne(), l = K(() => {
    let g = r.current;
    if (!g) {
      a(void 0);
      return;
    }
    let S = Uo.getObserver({ root: s.current, rootMargin: e, threshold: n });
    S.observe(g, (f) => {
      a(f);
    }), o.current = S;
  }, [e, n]), u = K(() => {
    let g = o.current, S = r.current;
    S && g?.unobserve(S), o.current = null;
  }, []), d = K((g) => {
    u(), r.current = g, l();
  }, [l, u]), m = K((g) => {
    u(), s.current = g, l();
  }, [l, u]);
  return [d, { entry: i, rootRef: m }];
}
var Fo = $o;
function jo(t) {
  let [e, n] = Fo(t), r = !!n.entry?.isIntersecting, [s, o] = ne(r);
  return r && !s && o(!0), [e, { ...n, isVisible: r, wasEverVisible: s }];
}
var Go = jo, Ho = 100;
function qo({ loading: t, hasNextPage: e, onLoadMore: n, rootMargin: r, disabled: s, delayInMs: o = Ho }) {
  let i = oe(n), [a, { rootRef: l, isVisible: u }] = Go({ rootMargin: r });
  Z(() => {
    i.current = n;
  }, [n]);
  let d = !s && !t && u && e;
  return Z(() => {
    if (d) {
      let m = setTimeout(() => {
        i.current();
      }, o);
      return () => {
        clearTimeout(m);
      };
    }
  }, [d, o]), [a, { rootRef: l }];
}
var Vo = qo;
function zo(t, e, n) {
  const r = oe(t);
  Z(() => {
    r.current = t;
  }, [t]), Z(() => {
    if (!e)
      return;
    const o = setInterval(() => {
      r.current();
    }, n);
    return () => clearInterval(o);
  }, [e, n]);
}
function Wo(t, e) {
  const n = t.getBoundingClientRect();
  return n.top >= 150 && n.bottom <= e.clientHeight;
}
const Yo = ({
  chatId: t,
  messages: e,
  scrollableRootRef: n,
  pageSize: r,
  hasNextPage: s,
  chat: o,
  onEnterRoom: i,
  setIsVisible: a
}) => {
  const [l, u] = ne(!1), d = oe(), m = oe(), g = e?.length || 0, S = g && e[g - 1], f = 900, b = K(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight, i && o && i(o));
  }, [t, i]), _ = K(() => {
    const A = n.current;
    if (A) {
      const M = A.scrollHeight - A.scrollTop;
      d.current = M;
      const x = s && M > f;
      u(x);
      for (let k = 0; k < g; k++) {
        const D = e[k];
        if (D?.ref?.current) {
          if (Wo(D.ref.current, A)) {
            a(D.cdate);
            break;
          }
        } else
          break;
      }
    }
  }, [e, t]);
  return Z(() => {
    t && n.current && e.length && (a(e[g - 1]?.cdate ?? ""), b());
  }, [t]), Z(() => {
    const A = n.current, M = d.current ?? 0;
    A && S && o && (m.current === g - r ? A.scrollTop = A.scrollHeight - M : (
      // -----  scroll to bottom forced -----------
      (S.userId !== o.userId || M <= f) && b()
    )), m.current = g;
  }, [g, t]), {
    scrollDown: b,
    handleRootScroll: _,
    scrollDownButton: l,
    setScrollDownButton: u,
    unreadCount: e.filter((A) => A.status === 0).length
  };
}, Ko = ({
  date: t
}) => /* @__PURE__ */ c(Y, { sx: { position: "relative", height: 0, margin: "8px 0" }, children: /* @__PURE__ */ c(as, { in: !!t, timeout: 2e3, children: /* @__PURE__ */ c(
  mt,
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
    children: /* @__PURE__ */ c(se, { variant: "h6", textAlign: "center", children: t && De(t).format("DD.MM.YYYY") })
  }
) }) }), Jo = ee((t) => ({
  arrowDown: {
    position: "absolute",
    left: "94.5%",
    bottom: 105,
    [t.breakpoints.down("md")]: {
      left: "91.5%",
      bottom: 95
    },
    [t.breakpoints.down("sm")]: {
      left: "84%",
      bottom: 95
    }
  }
})), Xo = ({
  visible: t,
  unreadCount: e,
  onScrollDown: n
}) => {
  const r = Jo();
  return t ? /* @__PURE__ */ N(Y, { className: r.arrowDown, textAlign: "center", children: [
    /* @__PURE__ */ c(
      an,
      {
        color: "info",
        "aria-label": "scroll-down",
        size: "medium",
        onClick: n,
        children: /* @__PURE__ */ c(sr, {})
      }
    ),
    e > 0 && /* @__PURE__ */ c(
      an,
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
        children: /* @__PURE__ */ c(
          se,
          {
            variant: "body2",
            sx: (s) => ({ color: s.palette.background.default }),
            children: e
          }
        )
      }
    )
  ] }) : null;
}, Qo = ee((t) => ({
  messageListOuter: {
    flex: 1,
    overflowY: "auto",
    margin: 0,
    padding: 0,
    height: "100%",
    scrollbarWidth: "thin",
    scrollbarColor: `${t.palette.primary.light} #fff`
  },
  messageList: {},
  img: {
    cursor: "pointer",
    borderRadius: t.spacing(1.2),
    maxWidth: "auto",
    maxHeight: "95%",
    [t.breakpoints.down("sm")]: {
      maxWidth: "auto",
      maxHeight: "95%"
    }
  }
})), Zo = ({
  apiUrl: t,
  user: e,
  users: n,
  chat: r,
  loading: s,
  pageSize: o,
  initialMenuState: i,
  onNeedMoreMessages: a,
  onMessageDelete: l,
  setMenuState: u,
  onEnterRoom: d,
  messageSearch: m
}) => {
  const g = Qo(), S = B.useRef(null), f = B.useRef({}), b = B.useMemo(() => Se(r), [r]), [_, A] = B.useState({
    visible: !1,
    src: ""
  }), [M, x] = B.useState(""), k = B.useMemo(() => (r?.messages || []).map((h, E) => {
    const y = h._id != null ? String(h._id) : `${h.userId}-${h.cdate}-${E}`;
    return f.current[y] || (f.current[y] = B.createRef()), {
      ...h,
      ref: f.current[y]
    };
  }), [r?.messages]), D = m.trim().toLowerCase(), P = B.useMemo(() => D ? k.filter((h) => h.content ? String(h.content).toLowerCase().includes(D) : !1) : k, [k, D]), j = r?.noMoreData !== !0;
  B.useEffect(() => {
    f.current = {};
  }, [b]);
  const { scrollDown: X, handleRootScroll: V, scrollDownButton: O, unreadCount: v } = Yo({
    chatId: b,
    messages: P,
    scrollableRootRef: S,
    pageSize: o,
    hasNextPage: j,
    chat: r,
    onEnterRoom: d,
    setIsVisible: x
  }), [q, { rootRef: G }] = Vo({
    loading: s,
    hasNextPage: j,
    onLoadMore: () => r && a(r),
    disabled: !j
  }), T = B.useCallback(
    (h) => {
      G(h), S.current = h;
    },
    [G]
  );
  zo(
    () => {
      x("");
    },
    M,
    4700
  );
  const C = B.useCallback(
    (h, E) => {
      const y = h.messageType === "text", R = e.userId === h.userId && !!l && (/* @__PURE__ */ new Date()).getTime() - new Date(h.cdate).getTime() <= 1e3 * 60 * 2;
      if (!y && !R) {
        u(i);
        return;
      }
      E.preventDefault(), u({
        message: h,
        mouseX: E.clientX - 2,
        mouseY: E.clientY - 4,
        canCopy: y,
        canDelete: R
      });
    },
    [i, l, u, e.userId]
  );
  if (!b) return null;
  const w = B.useMemo(
    () => P.map((h, E) => /* @__PURE__ */ c(
      dr,
      {
        ref: h.ref,
        apiUrl: t,
        user: e,
        message: h,
        owner: n[h.userId],
        isGroupMessage: !!r?.groupId,
        isUserFirst: E === 0 || P[E - 1].messageType === "notify" || P[E - 1].userId !== P[E].userId,
        isUserLast: E === P.length - 1 || P[E + 1]?.messageType === "notify" || P[E + 1]?.userId !== P[E].userId,
        onContextMenu: (y) => C(h, y),
        setViewerData: A
      },
      h._id ?? `${h.userId}-${h.cdate}-${E}`
    )),
    [
      P,
      t,
      e,
      n,
      r?.groupId,
      C,
      A
    ]
  );
  return /* @__PURE__ */ N(xe, { children: [
    /* @__PURE__ */ c(Ko, { date: M }),
    /* @__PURE__ */ N(
      Xn,
      {
        className: g.messageListOuter,
        ref: T,
        onScroll: V,
        children: [
          /* @__PURE__ */ N(jn, { className: g.messageList, children: [
            j && /* @__PURE__ */ c(tt, { ref: q, sx: { justifyContent: "center" }, children: /* @__PURE__ */ c(Wn, {}) }),
            w
          ] }),
          /* @__PURE__ */ c(
            Xo,
            {
              visible: O,
              unreadCount: v,
              onScrollDown: X
            }
          ),
          _.visible && /* @__PURE__ */ c(
            cs,
            {
              sx: {
                color: "#fff",
                zIndex: (h) => h.zIndex.drawer + 1
              },
              open: _.visible,
              onClick: () => A({ visible: !1, src: "" }),
              children: /* @__PURE__ */ c("img", { src: _.src, className: g.img, alt: "" })
            }
          )
        ]
      }
    )
  ] });
}, ei = ee(
  (t) => ye({
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
), Tt = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: !1,
  canDelete: !1
}, ti = (t) => {
  const {
    apiUrl: e,
    user: n,
    users: r,
    chat: s,
    typing: o,
    conference: i,
    visitData: a,
    conferenceJoined: l,
    loading: u,
    pageSize: d,
    onEnterRoom: m,
    operators: g,
    messageSearch: S,
    onVideoCall: f,
    onVideoEnd: b,
    onConferencePause: _,
    onOperatorAdd: A,
    onLeaveGroup: M,
    onContactClick: x,
    onNeedMoreMessages: k,
    onMessageDelete: D,
    onTyping: P,
    onSendMessage: j,
    onMessageSearchChange: X
  } = t, V = ei(), { t: O } = ce(), [v, q] = B.useState(Tt), G = B.useCallback(() => {
    q(Tt);
  }, []), T = B.useCallback(() => {
    G();
  }, [G]), C = K(() => {
    const { message: h } = v;
    G(), h?.content && typeof navigator < "u" && navigator.clipboard?.writeText && navigator.clipboard.writeText(h.content).catch(() => {
      console.warn("Copy failed");
    });
  }, [v.message, G]), w = K(() => {
    const { message: h } = v;
    G(), s && h && D && D(s, h);
  }, [v.message, G, s, D]);
  return /* @__PURE__ */ N(Qn, { elevation: 1, className: V.root, children: [
    /* @__PURE__ */ c(Y, { display: "flex", flexDirection: "row", children: /* @__PURE__ */ c(
      Mo,
      {
        apiUrl: e,
        user: n,
        chat: s,
        typing: o,
        conference: i,
        visitData: a,
        conferenceJoined: l,
        operators: g,
        className: V.roomHeader,
        onVideoCall: f,
        onVideoEnd: b,
        onConferencePause: _,
        onOperatorAdd: A,
        onLeaveGroup: M,
        onContactClick: x,
        messageSearch: S,
        onMessageSearchChange: X
      }
    ) }),
    /* @__PURE__ */ c(Nt, {}),
    /* @__PURE__ */ c(
      Zo,
      {
        apiUrl: e,
        user: n,
        users: r,
        chat: s,
        loading: u,
        pageSize: d,
        initialMenuState: Tt,
        onNeedMoreMessages: k,
        onMessageDelete: D,
        setMenuState: q,
        onEnterRoom: m,
        messageSearch: S
      }
    ),
    /* @__PURE__ */ c(Nt, {}),
    /* @__PURE__ */ c(Xn, { children: /* @__PURE__ */ c(
      wo,
      {
        chat: s,
        onTyping: P,
        onSendMessage: j
      }
    ) }),
    /* @__PURE__ */ N(
      Kn,
      {
        keepMounted: !0,
        open: v.mouseY !== null,
        onClose: T,
        anchorReference: "anchorPosition",
        anchorPosition: v.mouseY !== null && v.mouseX !== null ? { top: v.mouseY, left: v.mouseX } : void 0,
        children: [
          /* @__PURE__ */ N(cn, { onClick: C, disabled: !v.canCopy, children: [
            /* @__PURE__ */ c("span", { className: V.flexAll, children: O("CHAT.MESSAGE.MENU.COPY") }),
            /* @__PURE__ */ c(ln, { className: V.flexEnd, children: /* @__PURE__ */ c(ps, { fontSize: "small" }) })
          ] }),
          /* @__PURE__ */ N(cn, { onClick: w, disabled: !v.canDelete, children: [
            /* @__PURE__ */ c("span", { className: V.flexAll, children: O("CHAT.MESSAGE.MENU.DELETE") }),
            /* @__PURE__ */ c(ln, { className: V.flexEnd, children: /* @__PURE__ */ c(tr, { fontSize: "small" }) })
          ] })
        ]
      }
    )
  ] });
};
function hr(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ni } = Object.prototype, { getPrototypeOf: Kt } = Object, { iterator: gt, toStringTag: pr } = Symbol, yt = /* @__PURE__ */ ((t) => (e) => {
  const n = ni.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), he = (t) => (t = t.toLowerCase(), (e) => yt(e) === t), Et = (t) => (e) => typeof e === t, { isArray: Le } = Array, Pe = Et("undefined");
function ze(t) {
  return t !== null && !Pe(t) && t.constructor !== null && !Pe(t.constructor) && ie(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const mr = he("ArrayBuffer");
function ri(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && mr(t.buffer), e;
}
const si = Et("string"), ie = Et("function"), gr = Et("number"), We = (t) => t !== null && typeof t == "object", oi = (t) => t === !0 || t === !1, ot = (t) => {
  if (yt(t) !== "object")
    return !1;
  const e = Kt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(pr in t) && !(gt in t);
}, ii = (t) => {
  if (!We(t) || ze(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, ai = he("Date"), ci = he("File"), li = he("Blob"), ui = he("FileList"), di = (t) => We(t) && ie(t.pipe), fi = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ie(t.append) && ((e = yt(t)) === "formdata" || // detect form-data instance
  e === "object" && ie(t.toString) && t.toString() === "[object FormData]"));
}, hi = he("URLSearchParams"), [pi, mi, gi, yi] = ["ReadableStream", "Request", "Response", "Headers"].map(he), Ei = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ye(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), Le(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    if (ze(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], e.call(null, t[a], a, t);
  }
}
function yr(t, e) {
  if (ze(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const Oe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Er = (t) => !Pe(t) && t !== Oe;
function Mt() {
  const { caseless: t, skipUndefined: e } = Er(this) && this || {}, n = {}, r = (s, o) => {
    const i = t && yr(n, o) || o;
    ot(n[i]) && ot(s) ? n[i] = Mt(n[i], s) : ot(s) ? n[i] = Mt({}, s) : Le(s) ? n[i] = s.slice() : (!e || !Pe(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Ye(arguments[s], r);
  return n;
}
const bi = (t, e, n, { allOwnKeys: r } = {}) => (Ye(e, (s, o) => {
  n && ie(s) ? t[o] = hr(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Si = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), _i = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, wi = (t, e, n, r) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && Kt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Ri = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Ci = (t) => {
  if (!t) return null;
  if (Le(t)) return t;
  let e = t.length;
  if (!gr(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Ti = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Kt(Uint8Array)), Ai = (t, e) => {
  const r = (t && t[gt]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, vi = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Oi = he("HTMLFormElement"), xi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), En = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), ki = he("RegExp"), br = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ye(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, Ii = (t) => {
  br(t, (e, n) => {
    if (ie(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (ie(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ni = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Le(t) ? r(t) : r(String(t).split(e)), n;
}, Di = () => {
}, Mi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Pi(t) {
  return !!(t && ie(t.append) && t[pr] === "FormData" && t[gt]);
}
const Li = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (We(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (ze(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = Le(r) ? [] : {};
        return Ye(r, (i, a) => {
          const l = n(i, s + 1);
          !Pe(l) && (o[a] = l);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, Bi = he("AsyncFunction"), Ui = (t) => t && (We(t) || ie(t)) && ie(t.then) && ie(t.catch), Sr = ((t, e) => t ? setImmediate : e ? ((n, r) => (Oe.addEventListener("message", ({ source: s, data: o }) => {
  s === Oe && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Oe.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ie(Oe.postMessage)
), $i = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oe) : typeof process < "u" && process.nextTick || Sr, Fi = (t) => t != null && ie(t[gt]), p = {
  isArray: Le,
  isArrayBuffer: mr,
  isBuffer: ze,
  isFormData: fi,
  isArrayBufferView: ri,
  isString: si,
  isNumber: gr,
  isBoolean: oi,
  isObject: We,
  isPlainObject: ot,
  isEmptyObject: ii,
  isReadableStream: pi,
  isRequest: mi,
  isResponse: gi,
  isHeaders: yi,
  isUndefined: Pe,
  isDate: ai,
  isFile: ci,
  isBlob: li,
  isRegExp: ki,
  isFunction: ie,
  isStream: di,
  isURLSearchParams: hi,
  isTypedArray: Ti,
  isFileList: ui,
  forEach: Ye,
  merge: Mt,
  extend: bi,
  trim: Ei,
  stripBOM: Si,
  inherits: _i,
  toFlatObject: wi,
  kindOf: yt,
  kindOfTest: he,
  endsWith: Ri,
  toArray: Ci,
  forEachEntry: Ai,
  matchAll: vi,
  isHTMLForm: Oi,
  hasOwnProperty: En,
  hasOwnProp: En,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: br,
  freezeMethods: Ii,
  toObjectSet: Ni,
  toCamelCase: xi,
  noop: Di,
  toFiniteNumber: Mi,
  findKey: yr,
  global: Oe,
  isContextDefined: Er,
  isSpecCompliantForm: Pi,
  toJSONObject: Li,
  isAsyncFn: Bi,
  isThenable: Ui,
  setImmediate: Sr,
  asap: $i,
  isIterable: Fi
};
function F(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
p.inherits(F, Error, {
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
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const _r = F.prototype, wr = {};
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
].forEach((t) => {
  wr[t] = { value: t };
});
Object.defineProperties(F, wr);
Object.defineProperty(_r, "isAxiosError", { value: !0 });
F.from = (t, e, n, r, s, o) => {
  const i = Object.create(_r);
  p.toFlatObject(t, i, function(d) {
    return d !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = t && t.message ? t.message : "Error", l = e == null && t ? t.code : e;
  return F.call(i, a, l, n, r, s), t && i.cause == null && Object.defineProperty(i, "cause", { value: t, configurable: !0 }), i.name = t && t.name || "Error", o && Object.assign(i, o), i;
};
const ji = null;
function Pt(t) {
  return p.isPlainObject(t) || p.isArray(t);
}
function Rr(t) {
  return p.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function bn(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = Rr(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function Gi(t) {
  return p.isArray(t) && !t.some(Pt);
}
const Hi = p.toFlatObject(p, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function bt(t, e, n) {
  if (!p.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, _) {
    return !p.isUndefined(_[b]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(e);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (p.isDate(f))
      return f.toISOString();
    if (p.isBoolean(f))
      return f.toString();
    if (!l && p.isBlob(f))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(f) || p.isTypedArray(f) ? l && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, b, _) {
    let A = f;
    if (f && !_ && typeof f == "object") {
      if (p.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), f = JSON.stringify(f);
      else if (p.isArray(f) && Gi(f) || (p.isFileList(f) || p.endsWith(b, "[]")) && (A = p.toArray(f)))
        return b = Rr(b), A.forEach(function(x, k) {
          !(p.isUndefined(x) || x === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bn([b], k, o) : i === null ? b : b + "[]",
            u(x)
          );
        }), !1;
    }
    return Pt(f) ? !0 : (e.append(bn(_, b, o), u(f)), !1);
  }
  const m = [], g = Object.assign(Hi, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Pt
  });
  function S(f, b) {
    if (!p.isUndefined(f)) {
      if (m.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      m.push(f), p.forEach(f, function(A, M) {
        (!(p.isUndefined(A) || A === null) && s.call(
          e,
          A,
          p.isString(M) ? M.trim() : M,
          b,
          g
        )) === !0 && S(A, b ? b.concat(M) : [M]);
      }), m.pop();
    }
  }
  if (!p.isObject(t))
    throw new TypeError("data must be an object");
  return S(t), e;
}
function Sn(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Jt(t, e) {
  this._pairs = [], t && bt(t, this, e);
}
const Cr = Jt.prototype;
Cr.append = function(e, n) {
  this._pairs.push([e, n]);
};
Cr.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Sn);
  } : Sn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function qi(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Tr(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || qi;
  p.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = p.isURLSearchParams(e) ? e.toString() : new Jt(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class _n {
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
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    p.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Ar = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vi = typeof URLSearchParams < "u" ? URLSearchParams : Jt, zi = typeof FormData < "u" ? FormData : null, Wi = typeof Blob < "u" ? Blob : null, Yi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vi,
    FormData: zi,
    Blob: Wi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xt = typeof window < "u" && typeof document < "u", Lt = typeof navigator == "object" && navigator || void 0, Ki = Xt && (!Lt || ["ReactNative", "NativeScript", "NS"].indexOf(Lt.product) < 0), Ji = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xi = Xt && window.location.href || "http://localhost", Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xt,
  hasStandardBrowserEnv: Ki,
  hasStandardBrowserWebWorkerEnv: Ji,
  navigator: Lt,
  origin: Xi
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...Qi,
  ...Yi
};
function Zi(t, e) {
  return bt(t, new te.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return te.isNode && p.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function ea(t) {
  return p.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ta(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function vr(t) {
  function e(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && p.isArray(s) ? s.length : i, l ? (p.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !p.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && p.isArray(s[i]) && (s[i] = ta(s[i])), !a);
  }
  if (p.isFormData(t) && p.isFunction(t.entries)) {
    const n = {};
    return p.forEachEntry(t, (r, s) => {
      e(ea(r), s, n, 0);
    }), n;
  }
  return null;
}
function na(t, e, n) {
  if (p.isString(t))
    try {
      return (e || JSON.parse)(t), p.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Ke = {
  transitional: Ar,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = p.isObject(e);
    if (o && p.isHTMLForm(e) && (e = new FormData(e)), p.isFormData(e))
      return s ? JSON.stringify(vr(e)) : e;
    if (p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e) || p.isReadableStream(e))
      return e;
    if (p.isArrayBufferView(e))
      return e.buffer;
    if (p.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Zi(e, this.formSerializer).toString();
      if ((a = p.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return bt(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), na(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Ke.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (p.isResponse(e) || p.isReadableStream(e))
      return e;
    if (e && p.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
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
    FormData: te.classes.FormData,
    Blob: te.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
p.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Ke.headers[t] = {};
});
const ra = p.toObjectSet([
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
]), sa = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && ra[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, wn = Symbol("internals");
function He(t) {
  return t && String(t).trim().toLowerCase();
}
function it(t) {
  return t === !1 || t == null ? t : p.isArray(t) ? t.map(it) : String(t);
}
function oa(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const ia = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function At(t, e, n, r, s) {
  if (p.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!p.isString(e)) {
    if (p.isString(r))
      return e.indexOf(r) !== -1;
    if (p.isRegExp(r))
      return r.test(e);
  }
}
function aa(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function ca(t, e) {
  const n = p.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
let ae = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(a, l, u) {
      const d = He(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = p.findKey(s, d);
      (!m || s[m] === void 0 || u === !0 || u === void 0 && s[m] !== !1) && (s[m || l] = it(a));
    }
    const i = (a, l) => p.forEach(a, (u, d) => o(u, d, l));
    if (p.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (p.isString(e) && (e = e.trim()) && !ia(e))
      i(sa(e), n);
    else if (p.isObject(e) && p.isIterable(e)) {
      let a = {}, l, u;
      for (const d of e) {
        if (!p.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = d[0]] = (l = a[u]) ? p.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      i(a, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = He(e), e) {
      const r = p.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return oa(s);
        if (p.isFunction(n))
          return n.call(this, s, r);
        if (p.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = He(e), e) {
      const r = p.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || At(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = He(i), i) {
        const a = p.findKey(r, i);
        a && (!n || At(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return p.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || At(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return p.forEach(this, (s, o) => {
      const i = p.findKey(r, o);
      if (i) {
        n[i] = it(s), delete n[o];
        return;
      }
      const a = e ? aa(o) : String(o).trim();
      a !== o && delete n[o], n[a] = it(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && p.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[wn] = this[wn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = He(i);
      r[a] || (ca(s, i), r[a] = !0);
    }
    return p.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(ae.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
p.freezeMethods(ae);
function vt(t, e) {
  const n = this || Ke, r = e || n, s = ae.from(r.headers);
  let o = r.data;
  return p.forEach(t, function(a) {
    o = a.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Or(t) {
  return !!(t && t.__CANCEL__);
}
function Be(t, e, n) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, n), this.name = "CanceledError";
}
p.inherits(Be, F, {
  __CANCEL__: !0
});
function xr(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function la(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ua(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), d = r[o];
    i || (i = u), n[s] = l, r[s] = u;
    let m = o, g = 0;
    for (; m !== s; )
      g += n[m++], m = m % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - i < e)
      return;
    const S = d && u - d;
    return S ? Math.round(g * 1e3 / S) : void 0;
  };
}
function da(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (u, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), t(...u);
  };
  return [(...u) => {
    const d = Date.now(), m = d - n;
    m >= r ? i(u, d) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - m)));
  }, () => s && i(s)];
}
const pt = (t, e, n = 3) => {
  let r = 0;
  const s = ua(50, 250);
  return da((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, u = s(l), d = i <= a;
    r = i;
    const m = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && d ? (a - i) / u : void 0,
      event: o,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(m);
  }, n);
}, Rn = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Cn = (t) => (...e) => p.asap(() => t(...e)), fa = te.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, te.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(te.origin),
  te.navigator && /(msie|trident)/i.test(te.navigator.userAgent)
) : () => !0, ha = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o) {
      const i = [t + "=" + encodeURIComponent(e)];
      p.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), p.isString(r) && i.push("path=" + r), p.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function pa(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function ma(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function kr(t, e, n) {
  let r = !pa(e);
  return t && (r || n == !1) ? ma(t, e) : e;
}
const Tn = (t) => t instanceof ae ? { ...t } : t;
function Ie(t, e) {
  e = e || {};
  const n = {};
  function r(u, d, m, g) {
    return p.isPlainObject(u) && p.isPlainObject(d) ? p.merge.call({ caseless: g }, u, d) : p.isPlainObject(d) ? p.merge({}, d) : p.isArray(d) ? d.slice() : d;
  }
  function s(u, d, m, g) {
    if (p.isUndefined(d)) {
      if (!p.isUndefined(u))
        return r(void 0, u, m, g);
    } else return r(u, d, m, g);
  }
  function o(u, d) {
    if (!p.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (p.isUndefined(d)) {
      if (!p.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, m) {
    if (m in e)
      return r(u, d);
    if (m in t)
      return r(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
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
    headers: (u, d, m) => s(Tn(u), Tn(d), m, !0)
  };
  return p.forEach(Object.keys({ ...t, ...e }), function(d) {
    const m = l[d] || s, g = m(t[d], e[d], d);
    p.isUndefined(g) && m !== a || (n[d] = g);
  }), n;
}
const Ir = (t) => {
  const e = Ie({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
  if (e.headers = i = ae.from(i), e.url = Tr(kr(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), p.isFormData(n)) {
    if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (p.isFunction(n.getHeaders)) {
      const l = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, m]) => {
        u.includes(d.toLowerCase()) && i.set(d, m);
      });
    }
  }
  if (te.hasStandardBrowserEnv && (r && p.isFunction(r) && (r = r(e)), r || r !== !1 && fa(e.url))) {
    const l = s && o && ha.read(o);
    l && i.set(s, l);
  }
  return e;
}, ga = typeof XMLHttpRequest < "u", ya = ga && function(t) {
  return new Promise(function(n, r) {
    const s = Ir(t);
    let o = s.data;
    const i = ae.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = s, d, m, g, S, f;
    function b() {
      S && S(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let _ = new XMLHttpRequest();
    _.open(s.method.toUpperCase(), s.url, !0), _.timeout = s.timeout;
    function A() {
      if (!_)
        return;
      const x = ae.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), D = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: x,
        config: t,
        request: _
      };
      xr(function(j) {
        n(j), b();
      }, function(j) {
        r(j), b();
      }, D), _ = null;
    }
    "onloadend" in _ ? _.onloadend = A : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, _.onabort = function() {
      _ && (r(new F("Request aborted", F.ECONNABORTED, t, _)), _ = null);
    }, _.onerror = function(k) {
      const D = k && k.message ? k.message : "Network Error", P = new F(D, F.ERR_NETWORK, t, _);
      P.event = k || null, r(P), _ = null;
    }, _.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const D = s.transitional || Ar;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), r(new F(
        k,
        D.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        _
      )), _ = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in _ && p.forEach(i.toJSON(), function(k, D) {
      _.setRequestHeader(D, k);
    }), p.isUndefined(s.withCredentials) || (_.withCredentials = !!s.withCredentials), a && a !== "json" && (_.responseType = s.responseType), u && ([g, f] = pt(u, !0), _.addEventListener("progress", g)), l && _.upload && ([m, S] = pt(l), _.upload.addEventListener("progress", m), _.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (d = (x) => {
      _ && (r(!x || x.type ? new Be(null, t, _) : x), _.abort(), _ = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const M = la(s.url);
    if (M && te.protocols.indexOf(M) === -1) {
      r(new F("Unsupported protocol " + M + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    _.send(o || null);
  });
}, Ea = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, a();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof F ? d : new Be(d instanceof Error ? d.message : d));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new F(`timeout ${e} of ms exceeded`, F.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: l } = r;
    return l.unsubscribe = () => p.asap(a), l;
  }
}, ba = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Sa = async function* (t, e) {
  for await (const n of _a(t))
    yield* ba(n, e);
}, _a = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, An = (t, e, n, r) => {
  const s = Sa(t, e);
  let o = 0, i, a = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: d } = await s.next();
        if (u) {
          a(), l.close();
          return;
        }
        let m = d.byteLength;
        if (n) {
          let g = o += m;
          n(g);
        }
        l.enqueue(new Uint8Array(d));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(l) {
      return a(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, vn = 64 * 1024, { isFunction: Qe } = p, wa = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(p.global), {
  ReadableStream: On,
  TextEncoder: xn
} = p.global, kn = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Ra = (t) => {
  t = p.merge.call({
    skipUndefined: !0
  }, wa, t);
  const { fetch: e, Request: n, Response: r } = t, s = e ? Qe(e) : typeof fetch == "function", o = Qe(n), i = Qe(r);
  if (!s)
    return !1;
  const a = s && Qe(On), l = s && (typeof xn == "function" ? /* @__PURE__ */ ((f) => (b) => f.encode(b))(new xn()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), u = o && a && kn(() => {
    let f = !1;
    const b = new n(te.origin, {
      body: new On(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !b;
  }), d = i && a && kn(() => p.isReadableStream(new r("").body)), m = {
    stream: d && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !m[f] && (m[f] = (b, _) => {
      let A = b && b[f];
      if (A)
        return A.call(b);
      throw new F(`Response type '${f}' is not supported`, F.ERR_NOT_SUPPORT, _);
    });
  });
  const g = async (f) => {
    if (f == null)
      return 0;
    if (p.isBlob(f))
      return f.size;
    if (p.isSpecCompliantForm(f))
      return (await new n(te.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (p.isArrayBufferView(f) || p.isArrayBuffer(f))
      return f.byteLength;
    if (p.isURLSearchParams(f) && (f = f + ""), p.isString(f))
      return (await l(f)).byteLength;
  }, S = async (f, b) => {
    const _ = p.toFiniteNumber(f.getContentLength());
    return _ ?? g(b);
  };
  return async (f) => {
    let {
      url: b,
      method: _,
      data: A,
      signal: M,
      cancelToken: x,
      timeout: k,
      onDownloadProgress: D,
      onUploadProgress: P,
      responseType: j,
      headers: X,
      withCredentials: V = "same-origin",
      fetchOptions: O
    } = Ir(f), v = e || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let q = Ea([M, x && x.toAbortSignal()], k), G = null;
    const T = q && q.unsubscribe && (() => {
      q.unsubscribe();
    });
    let C;
    try {
      if (P && u && _ !== "get" && _ !== "head" && (C = await S(X, A)) !== 0) {
        let I = new n(b, {
          method: "POST",
          body: A,
          duplex: "half"
        }), U;
        if (p.isFormData(A) && (U = I.headers.get("content-type")) && X.setContentType(U), I.body) {
          const [$, L] = Rn(
            C,
            pt(Cn(P))
          );
          A = An(I.body, vn, $, L);
        }
      }
      p.isString(V) || (V = V ? "include" : "omit");
      const w = o && "credentials" in n.prototype, h = {
        ...O,
        signal: q,
        method: _.toUpperCase(),
        headers: X.normalize().toJSON(),
        body: A,
        duplex: "half",
        credentials: w ? V : void 0
      };
      G = o && new n(b, h);
      let E = await (o ? v(G, O) : v(b, h));
      const y = d && (j === "stream" || j === "response");
      if (d && (D || y && T)) {
        const I = {};
        ["status", "statusText", "headers"].forEach((z) => {
          I[z] = E[z];
        });
        const U = p.toFiniteNumber(E.headers.get("content-length")), [$, L] = D && Rn(
          U,
          pt(Cn(D), !0)
        ) || [];
        E = new r(
          An(E.body, vn, $, () => {
            L && L(), T && T();
          }),
          I
        );
      }
      j = j || "text";
      let R = await m[p.findKey(m, j) || "text"](E, f);
      return !y && T && T(), await new Promise((I, U) => {
        xr(I, U, {
          data: R,
          headers: ae.from(E.headers),
          status: E.status,
          statusText: E.statusText,
          config: f,
          request: G
        });
      });
    } catch (w) {
      throw T && T(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
        new F("Network Error", F.ERR_NETWORK, f, G),
        {
          cause: w.cause || w
        }
      ) : F.from(w, w && w.code, f, G);
    }
  };
}, Ca = /* @__PURE__ */ new Map(), Nr = (t) => {
  let e = t ? t.env : {};
  const { fetch: n, Request: r, Response: s } = e, o = [
    r,
    s,
    n
  ];
  let i = o.length, a = i, l, u, d = Ca;
  for (; a--; )
    l = o[a], u = d.get(l), u === void 0 && d.set(l, u = a ? /* @__PURE__ */ new Map() : Ra(e)), d = u;
  return u;
};
Nr();
const Bt = {
  http: ji,
  xhr: ya,
  fetch: {
    get: Nr
  }
};
p.forEach(Bt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const In = (t) => `- ${t}`, Ta = (t) => p.isFunction(t) || t === null || t === !1, Dr = {
  getAdapter: (t, e) => {
    t = p.isArray(t) ? t : [t];
    const { length: n } = t;
    let r, s;
    const o = {};
    for (let i = 0; i < n; i++) {
      r = t[i];
      let a;
      if (s = r, !Ta(r) && (s = Bt[(a = String(r)).toLowerCase()], s === void 0))
        throw new F(`Unknown adapter '${a}'`);
      if (s && (p.isFunction(s) || (s = s.get(e))))
        break;
      o[a || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(o).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = n ? i.length > 1 ? `since :
` + i.map(In).join(`
`) : " " + In(i[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Bt
};
function Ot(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Be(null, t);
}
function Nn(t) {
  return Ot(t), t.headers = ae.from(t.headers), t.data = vt.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Dr.getAdapter(t.adapter || Ke.adapter, t)(t).then(function(r) {
    return Ot(t), r.data = vt.call(
      t,
      t.transformResponse,
      r
    ), r.headers = ae.from(r.headers), r;
  }, function(r) {
    return Or(r) || (Ot(t), r && r.response && (r.response.data = vt.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = ae.from(r.response.headers))), Promise.reject(r);
  });
}
const Mr = "1.12.2", St = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  St[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Dn = {};
St.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + Mr + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (e === !1)
      throw new F(
        s(i, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !Dn[i] && (Dn[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, a) : !0;
  };
};
St.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Aa(t, e, n) {
  if (typeof t != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const a = t[o], l = a === void 0 || i(a, o, t);
      if (l !== !0)
        throw new F("option " + o + " must be " + l, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const at = {
  assertOptions: Aa,
  validators: St
}, pe = at.validators;
let ke = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new _n(),
      response: new _n()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ie(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && at.assertOptions(r, {
      silentJSONParsing: pe.transitional(pe.boolean),
      forcedJSONParsing: pe.transitional(pe.boolean),
      clarifyTimeoutError: pe.transitional(pe.boolean)
    }, !1), s != null && (p.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : at.assertOptions(s, {
      encode: pe.function,
      serialize: pe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), at.assertOptions(n, {
      baseUrl: pe.spelling("baseURL"),
      withXsrfToken: pe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && p.merge(
      o.common,
      o[n.method]
    );
    o && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = ae.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(n) === !1 || (l = l && b.synchronous, a.unshift(b.fulfilled, b.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(b) {
      u.push(b.fulfilled, b.rejected);
    });
    let d, m = 0, g;
    if (!l) {
      const f = [Nn.bind(this), void 0];
      for (f.unshift(...a), f.push(...u), g = f.length, d = Promise.resolve(n); m < g; )
        d = d.then(f[m++], f[m++]);
      return d;
    }
    g = a.length;
    let S = n;
    for (; m < g; ) {
      const f = a[m++], b = a[m++];
      try {
        S = f(S);
      } catch (_) {
        b.call(this, _);
        break;
      }
    }
    try {
      d = Nn.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (m = 0, g = u.length; m < g; )
      d = d.then(u[m++], u[m++]);
    return d;
  }
  getUri(e) {
    e = Ie(this.defaults, e);
    const n = kr(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Tr(n, e.params, e.paramsSerializer);
  }
};
p.forEach(["delete", "get", "head", "options"], function(e) {
  ke.prototype[e] = function(n, r) {
    return this.request(Ie(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, a) {
      return this.request(Ie(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  ke.prototype[e] = n(), ke.prototype[e + "Form"] = n(!0);
});
let va = class Pr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, e(function(o, i, a) {
      r.reason || (r.reason = new Be(o, i, a), n(r.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Pr(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function Oa(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function xa(t) {
  return p.isObject(t) && t.isAxiosError === !0;
}
const Ut = {
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
Object.entries(Ut).forEach(([t, e]) => {
  Ut[e] = t;
});
function Lr(t) {
  const e = new ke(t), n = hr(ke.prototype.request, e);
  return p.extend(n, ke.prototype, e, { allOwnKeys: !0 }), p.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Lr(Ie(t, s));
  }, n;
}
const J = Lr(Ke);
J.Axios = ke;
J.CanceledError = Be;
J.CancelToken = va;
J.isCancel = Or;
J.VERSION = Mr;
J.toFormData = bt;
J.AxiosError = F;
J.Cancel = J.CanceledError;
J.all = function(e) {
  return Promise.all(e);
};
J.spread = Oa;
J.isAxiosError = xa;
J.mergeConfig = Ie;
J.AxiosHeaders = ae;
J.formToJSON = (t) => vr(p.isHTMLForm(t) ? new FormData(t) : t);
J.getAdapter = Dr.getAdapter;
J.HttpStatusCode = Ut;
J.default = J;
const {
  Axios: Vl,
  AxiosError: zl,
  CanceledError: Wl,
  isCancel: Yl,
  CancelToken: Kl,
  VERSION: Jl,
  all: Xl,
  Cancel: Ql,
  isAxiosError: Zl,
  spread: eu,
  toFormData: tu,
  AxiosHeaders: nu,
  HttpStatusCode: ru,
  formToJSON: su,
  getAdapter: ou,
  mergeConfig: iu
} = J, Qt = {
  userId: 0,
  username: "",
  password: "",
  avatar: "",
  langCode: ""
}, Br = {
  user: Qt,
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
}, le = (t) => t.activeRoom ? t.groupGather[t.activeRoom.groupId] || t.contactGather[t.activeRoom.userId] : null, Zt = (t) => {
  const { activeRoom: e, initialContactId: n, contactGather: r } = t;
  let s = null;
  if (n)
    s = r[n];
  else if (e)
    s = le(t);
  else {
    const o = [
      ...Object.values(t.contactGather),
      ...Object.values(t.groupGather)
    ].sort(cr);
    o.length > 0 && (s = o[0]);
  }
  return s;
}, Mn = (t, e, n) => {
  const r = { ...t };
  t.contactGather[e] && (r.contactGather[e] = {
    ...r.contactGather[e],
    online: n
  });
  for (const o of Object.values(t.groupGather)) {
    if (!o.members) continue;
    const i = o.members.find((a) => a.userId === e);
    if (i) {
      const a = o.members.indexOf(i);
      o.members[a] = { ...i, online: n };
    }
  }
  const s = r.operators.findIndex((o) => o.userId === e);
  return s !== -1 && (r.operators[s] = { ...r.operators[s], online: n }), r.activeRoom = le(r), r;
}, ka = (t, e) => {
  const n = { ...t }, { groupId: r } = e;
  n.groupGather[r] && (n.groupGather[r].messages ? n.groupGather[r].messages = [
    ...n.groupGather[r].messages,
    e
  ] : n.groupGather[r] = {
    ...t.groupGather[r],
    messages: [e]
  });
  const { activeRoom: s } = n;
  return s && s.groupId !== r && e.userId !== t.user.userId ? Ft(n, r, (o) => (o || 0) + 1) : (n.activeRoom = le(n), n);
}, Ia = (t, e) => {
  const n = { ...t }, r = e.contactId === t.user.userId ? e.userId : e.contactId;
  return n.contactGather[r].messages ? n.contactGather[r].messages = [
    ...n.contactGather[r].messages,
    e
  ] : n.contactGather[r] = {
    ...n.contactGather[r],
    messages: [e]
  }, n.activeRoom?.userId !== r && e.userId !== t.user.userId ? $t(
    n,
    r,
    (s) => (s || 0) + 1
  ) : (n.activeRoom = le(n), n);
}, $t = (t, e, n) => {
  const r = t.contactGather[e];
  if (!r)
    return t;
  const s = n(r.unreadCount), o = r.unreadCount ?? 0;
  if (s === o)
    return t;
  const i = {
    ...t.contactGather,
    [e]: {
      ...r,
      unreadCount: s
    }
  }, a = {
    ...t,
    contactGather: i
  };
  return a.activeRoom = le(a), a;
}, Ft = (t, e, n) => {
  const r = t.groupGather[e];
  if (!r)
    return t;
  const s = n(r.unreadCount), o = r.unreadCount ?? 0;
  if (s === o)
    return t;
  const i = {
    ...t.groupGather,
    [e]: {
      ...r,
      unreadCount: s
    }
  }, a = {
    ...t,
    groupGather: i
  };
  return a.activeRoom = le(a), a;
}, Na = (t, e) => {
  const { userId: n } = t.user, r = { ...t }, s = e.username || r.userGather[e.userId].username;
  if (e.groupId) {
    const { messages: o } = r.groupGather[e.groupId];
    if (o) {
      const i = o.find((a) => a._id === e._id);
      if (i) {
        const a = o.indexOf(i);
        o[a] = {
          ...i,
          isRevoke: !0,
          revokeUserName: s
        };
      }
    }
  } else {
    const { messages: o } = r.contactGather[e.contactId === n ? e.userId : e.contactId];
    if (o) {
      const i = o.find((a) => a._id === e._id);
      if (i) {
        const a = o.indexOf(i);
        o[a] = {
          ...i,
          isRevoke: !0,
          revokeUserName: s
        };
      }
    }
  }
  return r.activeRoom = le(r), r;
}, Da = (t, e) => {
  const n = { ...t }, r = n.activeRoom === n.contactGather[e];
  return delete n.contactGather[e], r && (n.activeRoom = Zt(n)), n;
}, Ma = (t, e) => {
  const n = { ...t }, r = n.activeRoom === n.groupGather[e];
  return delete n.groupGather[e], r && (n.activeRoom = Zt(n)), n;
}, Pa = (t, e) => {
  const n = { ...t }, r = n.groupGather[e.groupId];
  return r && (r.members = r.members?.filter((s) => s.userId !== e.userId)), n;
}, La = (t, e) => {
  const n = { ...t }, { groupId: r, name: s, notice: o } = e, i = n.groupGather[r];
  return i && (n.groupGather[r] = { ...i, name: s, notice: o }), n.activeRoom = le(n), n;
}, Ba = (t, e) => {
  const n = { ...t }, { userId: r, username: s, avatar: o } = e;
  return n.userGather[r] && (n.userGather[r] = {
    ...n.userGather[r],
    username: s,
    avatar: o
  }), n.contactGather[r] && (n.contactGather[r] = {
    ...n.contactGather[r],
    username: s,
    avatar: o
  }), n.activeRoom = le(n), n;
}, Ua = (t, e) => {
  const n = e.members.map((s) => ({
    ...s,
    isManager: 0
  })), r = { ...t };
  return r.groupGather[e.groupId].members && n ? r.groupGather[e.groupId].members = [
    ...t.groupGather[e.groupId].members,
    ...n
  ] : r.groupGather[e.groupId] = {
    ...r.groupGather[e.groupId],
    members: n
  }, r.activeRoom = le(r), r;
}, $a = (t, e) => {
  const n = t.contactGather[e];
  if (!n || !((n.unreadCount ?? 0) > 0 || (n.messages?.some((u) => u.status !== 1) ?? !1)))
    return t;
  const s = n.messages ? n.messages.map(
    (u) => u.status === 1 ? u : { ...u, status: 1 }
  ) : n.messages, o = {
    ...n,
    unreadCount: 0,
    messages: s
  }, i = {
    ...t.contactGather,
    [e]: o
  }, a = {
    ...t,
    contactGather: i
  };
  return t.activeRoom != null && !t.activeRoom.groupId && t.activeRoom.userId === e ? a.activeRoom = {
    ...o,
    messages: s
  } : a.activeRoom = le(a), a;
}, Fa = (t, e) => {
  const n = { ...t }, { messages: r, contactId: s, reset: o } = e, i = n.contactGather[s];
  if (i) {
    const a = i.messages || [], l = o ? [...r || []] : [...r || [], ...a];
    n.contactGather[s] = {
      ...i,
      messages: l,
      noMoreData: r?.length ? r.length < e.pageSize : !0
    };
  }
  return n.activeRoom = le(n), n;
}, ja = (t, e) => {
  const n = { ...t }, { groupId: r, messages: s, userArr: o, reset: i } = e, a = n.groupGather[r];
  if (a) {
    const l = a.messages || [], u = i ? [...s || []] : [...s || [], ...l];
    n.groupGather[r] = {
      ...a,
      messages: u,
      noMoreData: s?.length ? s.length < e.pageSize : !0
    };
  }
  n.userGather = { ...n.userGather };
  for (const l of o)
    n.userGather[l.userId] || (n.userGather[l.userId] = l);
  return n.activeRoom = le(n), n;
}, Ga = (t, e) => {
  const n = e.groupId ? t.groupGather[e.groupId] : e.contactId ? t.contactGather[e.contactId] : null;
  return {
    ...t,
    chatOld: t.activeRoom != null ? { ...t.activeRoom } : null,
    activeRoom: n ?? null,
    messageSearch: ""
  };
}, Ha = (t, e) => ({
  ...t,
  token: e
}), qa = (t) => ({
  ...t,
  token: "",
  user: Qt
}), Va = (t, e) => ({
  ...t,
  conference: {
    data: { ...e },
    joined: e?.userId === t.user.userId,
    ringPlayed: e?.userId !== t.user.userId
  }
}), za = (t, e) => t.conference.data?.id !== e?.id ? t : {
  ...t,
  conference: {
    data: { ...t.conference.data },
    joined: !1,
    ringPlayed: !1
  }
}, Wa = (t, e) => t.conference.data?.id !== e?.id ? t : {
  ...t,
  conference: { data: null, joined: !1, ringPlayed: !1 }
};
function Ya(t, e) {
  switch (e.type) {
    case "SET_GROUP_GATHER":
      return {
        ...t,
        groupGather: {
          ...t.groupGather,
          [e.payload.groupId]: e.payload
        }
      };
    case "SET_CONTACT_GATHER":
      return {
        ...t,
        contactGather: {
          ...t.contactGather,
          [e.payload.userId]: e.payload
        }
      };
    case "DEL_GROUP":
      return Ma(t, e.payload);
    case "DEL_GROUP_MEMBER":
      return Pa(t, e.payload);
    case "DEL_CONTACT":
      return Da(t, e.payload.userId);
    case "SET_USER_GATHER":
      return {
        ...t,
        userGather: {
          ...t.userGather,
          [e.payload.userId]: e.payload
        }
      };
    case "UPDATE_ACTIVE_ROOM":
      return { ...t, activeRoom: Zt(t) };
    case "SET_ACTIVE_ROOM":
      return Ga(t, e.payload);
    case "USER_ONLINE":
      return Mn(t, e.payload, 1);
    case "USER_OFFLINE":
      return Mn(t, e.payload, 0);
    case "ADD_GROUP_MESSAGE":
      return ka(t, e.payload);
    case "ADD_PRIVATE_MESSAGE":
      return Ia(t, e.payload);
    case "ADD_GROUP_UNREAD_GATHER":
      return Ft(
        t,
        e.payload,
        (n) => (n || 0) + 1
      );
    case "ADD_CONTACT_UNREAD_GATHER":
      return $t(
        t,
        e.payload,
        (n) => (n || 0) + 1
      );
    case "SET_TYPING":
      return { ...t, typing: e.payload };
    case "LOSE_GROUP_UNREAD_GATHER":
      return Ft(t, e.payload, () => 0);
    case "LOSE_CONTACT_UNREAD_GATHER":
      return $t(t, e.payload, () => 0);
    case "REVOKE_MESSAGE":
      return Na(t, e.payload);
    case "UPDATE_GROUP_INFO":
      return La(t, e.payload);
    case "UPDATE_USER_INFO":
      return Ba(t, e.payload);
    case "ADD_GROUP_MEMBER":
      return Ua(t, e.payload);
    case "SET_CONFERENCE":
      return Va(t, e.payload);
    case "JOIN_CONFERENCE":
      return {
        ...t,
        conference: {
          data: { ...e.payload },
          joined: !0,
          ringPlayed: !1
        }
      };
    case "PAUSE_CONFERENCE":
      return za(t, e.payload);
    case "STOP_CONFERENCE":
      return Wa(t, e.payload);
    case "MARK_PRIVATE_MESSAGES_READ":
      return $a(t, e.payload);
    case "ADD_PRIVATE_MESSAGES":
      return Fa(t, e.payload);
    case "ADD_GROUP_MESSAGES":
      return ja(t, e.payload);
    case "SET_LOADING":
      return {
        ...t,
        loading: e.payload,
        error: ""
      };
    case "SET_MESSAGE_SEARCH":
      return {
        ...t,
        messageSearch: e.payload ?? ""
      };
    case "SET_ERROR":
      return {
        ...t,
        error: e.payload,
        success: void 0
      };
    case "SET_SUCCES":
      return {
        ...t,
        success: e.payload,
        error: void 0
      };
    case "SET_TOKEN":
      return Ha(t, e.payload);
    case "SET_USER":
      return {
        ...t,
        user: e.payload
      };
    case "CLEAR_USER":
      return qa(t);
    case "CLEAR_CHAT_DATA":
      return {
        ...t,
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
        ...t,
        operators: e.payload
      };
    case "SET_VISIT_DATA":
      return {
        ...t,
        visitData: e.payload
      };
  }
  return t;
}
const Ka = () => null, Je = B.createContext({
  state: Br,
  dispatch: Ka
}), Ja = (t) => {
  Qt.langCode = t.defLang;
  const e = t.token, n = t.token, r = {
    ...Br,
    token: e,
    refreshToken: n
  }, [s, o] = B.useReducer(Ya, r), i = Me(() => ({ state: s, dispatch: o }), [s]);
  return /* @__PURE__ */ c(Je.Provider, { value: i, children: t.children });
}, Xa = {}, en = er(Xa);
function au() {
  localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), localStorage.removeItem("doctor"), localStorage.removeItem("chatUser");
}
async function Ur(t, e, n) {
  localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken");
  try {
    const { data: r } = await J.post(`${n}/auth/refreshToken`, {
      authToken: t,
      refreshToken: e
    });
    localStorage.setItem("authToken", r?.authToken), localStorage.setItem("refreshToken", r?.refreshToken);
  } catch (r) {
    console.log("ERROR RefreshToken", r);
  }
  window.location.reload();
}
const Qa = ({
  chatBaseURLApi: t,
  pageSize: e,
  children: n,
  baseUrl: r
}) => {
  const { state: s, dispatch: o } = Yt(Je), i = K(
    (g) => {
      s.token && g.response != null && g.response.status === 401 && Ur(s.token, s.refreshToken, r);
    },
    [r, s.refreshToken, s.token]
  ), a = Me(() => {
    const g = J.create({
      timeout: 6e4,
      // Таймаут минута
      baseURL: t,
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Authorization: `Bearer ${s.token}`
      },
      withCredentials: !1
    });
    return g.interceptors.response.use(
      (S) => S,
      (S) => (console.log("ERROR AxiosError"), i(S), Promise.reject(S))
    ), g;
  }, [t, i, s.token]), l = K(
    async (g, S) => {
      const f = g.userId, b = S?.reset ? 0 : g.messages?.length;
      try {
        o({ type: "SET_LOADING", payload: !0 });
        const { data: _ } = await a.get("/contact/messages", {
          params: {
            contactId: f,
            current: b,
            pageSize: e,
            search: S?.search
          }
        });
        _ && (S?.shouldIgnore?.() || o({
          type: "ADD_PRIVATE_MESSAGES",
          payload: {
            pageSize: e,
            contactId: f,
            messages: _,
            reset: S?.reset ?? !1
          }
        }), S?.callback && S.callback());
      } catch (_) {
        o({ type: "SET_ERROR", payload: _.message });
      } finally {
        o({ type: "SET_LOADING", payload: !1 });
      }
    },
    [o, a, e]
  ), u = K(
    async (g, S) => {
      const { groupId: f } = g, b = S?.reset ? 0 : g.messages?.length;
      try {
        o({ type: "SET_LOADING", payload: !0 });
        const { data: _ } = await a.get(
          "/group/messages",
          {
            params: {
              groupId: f,
              current: b,
              pageSize: e
            }
          }
        );
        _ && (S?.shouldIgnore?.() || o({
          type: "ADD_GROUP_MESSAGES",
          payload: {
            pageSize: e,
            groupId: f,
            ..._,
            reset: S?.reset ?? !1
          }
        }));
      } catch (_) {
        o({ type: "SET_ERROR", payload: _.message });
      } finally {
        o({ type: "SET_LOADING", payload: !1 });
      }
    },
    [o, a, e]
  ), d = K(
    async (g, S) => {
      try {
        const { data: f } = await a.get("/contact/find", {
          params: {
            mmkId: g,
            guid: S
          }
        });
        if (f != null)
          return f;
      } catch (f) {
        console.log("err getUserByMmk", f);
      }
    },
    [a]
  ), m = Me(
    () => ({
      apiUrl: t,
      pageSize: e,
      fetch: a,
      getPrivateMessages: l,
      getGroupMessages: u,
      getUserByMmk: d
    }),
    [
      t,
      e,
      a,
      l,
      u,
      d
    ]
  );
  return /* @__PURE__ */ c(en.Provider, { value: m, children: n });
}, Za = ee(
  (t) => ye({
    main: {
      flex: "1 1 auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    time: {
      paddingLeft: t.spacing(1),
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
), ec = (t, e) => {
  if (!t) return null;
  switch (t.messageType) {
    case "text":
      return t.content;
    case "image":
      return `[${e("CHAT.MESSAGE.TYPE.IMAGE")}]`;
    case "video":
      return `[${e("CHAT.MESSAGE.TYPE.VIDEO")}]`;
    case "file":
      return `[${e("CHAT.MESSAGE.TYPE.FILE")}]`;
    case "notify":
      return `[${e("CHAT.MESSAGE.TYPE.NOTIFY")}]`;
    default:
      return null;
  }
}, tc = nr(
  (t) => ye({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${t.palette.background.paper}`,
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
)(Zn), nc = nr(
  (t) => ye({
    badge: {
      backgroundColor: t.palette.primary.main,
      boxShadow: `0 0 0 2px ${t.palette.background.paper}`
    }
  })
)(Zn), rc = (t, e, n) => {
  const r = /* @__PURE__ */ c(
    Ee,
    {
      alt: e.username,
      src: e.avatar ? Ce(t, e.avatar) : ""
    }
  );
  return !!n?.contactId && n?.userId === e.userId ? /* @__PURE__ */ c(
    tc,
    {
      overlap: "circular",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      variant: "dot",
      children: r
    }
  ) : e?.online ? /* @__PURE__ */ c(
    nc,
    {
      overlap: "circular",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      variant: "dot",
      children: r
    }
  ) : r;
}, sc = (t) => {
  const e = Za(), { t: n } = ce(), { apiUrl: r, chat: s, typing: o } = t, i = ar(s), a = s.groupId ? /* @__PURE__ */ N(Ee, { alt: i, className: e.avatarGroup, children: [
    /* @__PURE__ */ c(rr, {}),
    " "
  ] }) : rc(r, s, o), l = s.messages && s.messages.length > 0 ? s.messages[s.messages.length - 1] : null, u = ec(l, n), d = l?.cdate;
  return /* @__PURE__ */ N(Gn, { selected: t.active, onClick: t.onClick, children: [
    /* @__PURE__ */ c(Hn, { children: a }),
    /* @__PURE__ */ c(
      qn,
      {
        secondaryTypographyProps: { component: "span" },
        primary: /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
          /* @__PURE__ */ c("span", { className: e.main, children: i }),
          /* @__PURE__ */ c("span", { className: e.time, children: ht(d) })
        ] }),
        secondary: /* @__PURE__ */ N(Y, { display: "flex", flexDirection: "row", children: [
          /* @__PURE__ */ c("span", { className: e.main, children: u }),
          s.unreadCount ? /* @__PURE__ */ c(
            ls,
            {
              className: e.unread,
              component: "span",
              size: "small",
              color: "primary",
              label: s.unreadCount
            }
          ) : null
        ] })
      }
    )
  ] });
}, oc = ee((t) => ({
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
    scrollbarColor: `${t.palette.primary.light} #fff`
  }
})), Pn = (t, e) => {
  if (!e) return t;
  const n = e.toLowerCase();
  return t.filter(
    (r) => ar(r).toLowerCase().includes(n)
  );
}, ic = (t, e, n) => {
  let r = [...e, ...n];
  r = r.sort(cr);
  const s = localStorage.getItem(`${t}-topChatId`);
  if (s) {
    const o = r.find((i) => Se(i) === s);
    o && (r = r.filter((i) => Se(i) !== s), o.isTop = !0, r.unshift(o));
  }
  return r;
}, ac = (t, e, n, r) => ic(
  t,
  Pn(e, r),
  Pn(n, r)
), cc = ({
  user: t,
  activeRoom: e,
  groups: n,
  contacts: r,
  typing: s,
  onChangeChat: o
}) => {
  const i = oc(), { t: a } = ce(), { apiUrl: l } = Yt(en), [u, d] = ne(""), m = B.useMemo(
    () => ac(t.userId, n, r, u),
    [t.userId, n, r, u]
  ), g = (S) => {
    d(S.target.value);
  };
  return /* @__PURE__ */ N(Qn, { elevation: 1, className: i.root, children: [
    /* @__PURE__ */ c(
      nt,
      {
        title: /* @__PURE__ */ c(
          Wt,
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
    /* @__PURE__ */ c(Nt, {}),
    /* @__PURE__ */ c(Ps, { "aria-label": "rooms", className: i.listStyle, children: m.map((S) => /* @__PURE__ */ c(
      sc,
      {
        apiUrl: l,
        chat: S,
        active: e != null && Se(S) === Se(e),
        typing: s,
        onClick: () => o(S)
      },
      Se(S)
    )) })
  ] });
}, lc = () => {
  const {
    state: { error: t, success: e },
    dispatch: n
  } = B.useContext(Je), r = () => {
    n({ type: "SET_ERROR", payload: void 0 }), n({ type: "SET_SUCCES", payload: void 0 });
  };
  return /* @__PURE__ */ c(
    us,
    {
      anchorOrigin: { vertical: "top", horizontal: "center" },
      open: !!t || !!e,
      autoHideDuration: 6e3,
      onClose: r,
      children: /* @__PURE__ */ c(mt, { onClose: r, severity: t ? "error" : "success", children: t || e })
    }
  );
}, uc = ee((t) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    padding: 0,
    [t.breakpoints.up("lg")]: {
      minWidth: 1200
    }
  }
})), dc = ({
  children: t
}) => {
  const e = uc();
  return /* @__PURE__ */ c(ds, { maxWidth: !1, className: e.root, children: t });
}, fc = ({
  isMobile: t,
  conferenceActive: e,
  hideRooms: n,
  contactsList: r,
  chatRoom: s,
  activeRoom: o,
  user: i,
  onExitRoom: a,
  onChangeChat: l,
  chatOld: u
}) => t ? /* @__PURE__ */ N(xe, { children: [
  e && /* @__PURE__ */ c(
    Y,
    {
      sx: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 1400,
        top: i?.role && [3, 4].includes(i.role) ? -56 : -12,
        left: i?.role && [3, 4].includes(i.role) ? 32 : 218
      },
      children: /* @__PURE__ */ c(
        Y,
        {
          display: "flex",
          flexDirection: "row",
          columnGap: 3,
          my: 3,
          sx: {
            position: "relative"
          },
          children: /* @__PURE__ */ c(
            be,
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
                o && a ? a(o) : u && l && (console.log("onChangeChat"), l(u));
              },
              children: o ? /* @__PURE__ */ c(Bs, {}) : /* @__PURE__ */ c(Ls, {})
            }
          )
        }
      )
    }
  ),
  r,
  s
] }) : /* @__PURE__ */ c(xe, { children: /* @__PURE__ */ N(Rt, { container: !0, spacing: 1, sx: { height: "100%" }, children: [
  (e || !n) && /* @__PURE__ */ c(
    Rt,
    {
      size: o ? {
        sm: e ? 6 : 4,
        lg: e ? 6 : 4,
        xl: e ? 6 : 3
      } : 12,
      sx: { height: "100%" },
      children: r
    }
  ),
  o && /* @__PURE__ */ c(
    Rt,
    {
      size: {
        sm: e ? 6 : n ? 12 : 8,
        lg: e ? 6 : n ? 12 : 8,
        xl: e ? 6 : n ? 12 : 9
      },
      sx: { height: "100%" },
      children: s
    }
  )
] }) }), hc = ({
  conference: t,
  onClose: e,
  onAccept: n,
  isMobile: r,
  user: s,
  activeRoom: o,
  onChangeChat: i,
  apiUrl: a
}) => t.data ? t.joined ? /* @__PURE__ */ c(xe, { children: /* @__PURE__ */ c(
  eo,
  {
    conference: t.data,
    onClose: e,
    langCode: s.langCode
  }
) }) : /* @__PURE__ */ c(
  no,
  {
    apiUrl: a,
    contact: s.userId === t.data.userId ? t.data.contactId : t.data.userId,
    conference: t.data,
    onAccept: n
  }
) : null, ge = /* @__PURE__ */ Object.create(null);
ge.open = "0";
ge.close = "1";
ge.ping = "2";
ge.pong = "3";
ge.message = "4";
ge.upgrade = "5";
ge.noop = "6";
const ct = /* @__PURE__ */ Object.create(null);
Object.keys(ge).forEach((t) => {
  ct[ge[t]] = t;
});
const jt = { type: "error", data: "parser error" }, $r = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Fr = typeof ArrayBuffer == "function", jr = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, tn = ({ type: t, data: e }, n, r) => $r && e instanceof Blob ? n ? r(e) : Ln(e, r) : Fr && (e instanceof ArrayBuffer || jr(e)) ? n ? r(e) : Ln(new Blob([e]), r) : r(ge[t] + (e || "")), Ln = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
};
function Bn(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let xt;
function pc(t, e) {
  if ($r && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Bn).then(e);
  if (Fr && (t.data instanceof ArrayBuffer || jr(t.data)))
    return e(Bn(t.data));
  tn(t, !1, (n) => {
    xt || (xt = new TextEncoder()), e(xt.encode(n));
  });
}
const Un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ve = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Un.length; t++)
  Ve[Un.charCodeAt(t)] = t;
const mc = (t) => {
  let e = t.length * 0.75, n = t.length, r, s = 0, o, i, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), d = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    o = Ve[t.charCodeAt(r)], i = Ve[t.charCodeAt(r + 1)], a = Ve[t.charCodeAt(r + 2)], l = Ve[t.charCodeAt(r + 3)], d[s++] = o << 2 | i >> 4, d[s++] = (i & 15) << 4 | a >> 2, d[s++] = (a & 3) << 6 | l & 63;
  return u;
}, gc = typeof ArrayBuffer == "function", nn = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Gr(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: yc(t.substring(1), e)
  } : ct[n] ? t.length > 1 ? {
    type: ct[n],
    data: t.substring(1)
  } : {
    type: ct[n]
  } : jt;
}, yc = (t, e) => {
  if (gc) {
    const n = mc(t);
    return Gr(n, e);
  } else
    return { base64: !0, data: t };
}, Gr = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Hr = "", Ec = (t, e) => {
  const n = t.length, r = new Array(n);
  let s = 0;
  t.forEach((o, i) => {
    tn(o, !1, (a) => {
      r[i] = a, ++s === n && e(r.join(Hr));
    });
  });
}, bc = (t, e) => {
  const n = t.split(Hr), r = [];
  for (let s = 0; s < n.length; s++) {
    const o = nn(n[s], e);
    if (r.push(o), o.type === "error")
      break;
  }
  return r;
};
function Sc() {
  return new TransformStream({
    transform(t, e) {
      pc(t, (n) => {
        const r = n.length;
        let s;
        if (r < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, r);
        else if (r < 65536) {
          s = new Uint8Array(3);
          const o = new DataView(s.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          s = new Uint8Array(9);
          const o = new DataView(s.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        t.data && typeof t.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(n);
      });
    }
  });
}
let kt;
function Ze(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function et(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let s = 0; s < e; s++)
    n[s] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function _c(t, e) {
  kt || (kt = new TextDecoder());
  const n = [];
  let r = 0, s = -1, o = !1;
  return new TransformStream({
    transform(i, a) {
      for (n.push(i); ; ) {
        if (r === 0) {
          if (Ze(n) < 1)
            break;
          const l = et(n, 1);
          o = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? r = 3 : s === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Ze(n) < 2)
            break;
          const l = et(n, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Ze(n) < 8)
            break;
          const l = et(n, 8), u = new DataView(l.buffer, l.byteOffset, l.length), d = u.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            a.enqueue(jt);
            break;
          }
          s = d * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (Ze(n) < s)
            break;
          const l = et(n, s);
          a.enqueue(nn(o ? l : kt.decode(l), e)), r = 0;
        }
        if (s === 0 || s > t) {
          a.enqueue(jt);
          break;
        }
      }
    }
  });
}
const qr = 4;
function Q(t) {
  if (t) return wc(t);
}
function wc(t) {
  for (var e in Q.prototype)
    t[e] = Q.prototype[e];
  return t;
}
Q.prototype.on = Q.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Q.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Q.prototype.off = Q.prototype.removeListener = Q.prototype.removeAllListeners = Q.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var r, s = 0; s < n.length; s++)
    if (r = n[s], r === e || r.fn === e) {
      n.splice(s, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
Q.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, s = n.length; r < s; ++r)
      n[r].apply(this, e);
  }
  return this;
};
Q.prototype.emitReserved = Q.prototype.emit;
Q.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Q.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const _t = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), ue = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rc = "arraybuffer";
function Vr(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const Cc = ue.setTimeout, Tc = ue.clearTimeout;
function wt(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Cc.bind(ue), t.clearTimeoutFn = Tc.bind(ue)) : (t.setTimeoutFn = ue.setTimeout.bind(ue), t.clearTimeoutFn = ue.clearTimeout.bind(ue));
}
const Ac = 1.33;
function vc(t) {
  return typeof t == "string" ? Oc(t) : Math.ceil((t.byteLength || t.size) * Ac);
}
function Oc(t) {
  let e = 0, n = 0;
  for (let r = 0, s = t.length; r < s; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function zr() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function xc(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function kc(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, s = n.length; r < s; r++) {
    let o = n[r].split("=");
    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return e;
}
class Ic extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class rn extends Q {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, wt(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
  onError(e, n, r) {
    return super.emitReserved("error", new Ic(e, n, r)), this;
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
  send(e) {
    this.readyState === "open" && this.write(e);
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
  onData(e) {
    const n = nn(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = xc(e);
    return n.length ? "?" + n : "";
  }
}
class Nc extends rn {
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
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
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
  onData(e) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    bc(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, Ec(e, (n) => {
      this.doWrite(n, () => {
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
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = zr()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
}
let Wr = !1;
try {
  Wr = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Dc = Wr;
function Mc() {
}
class Pc extends Nc {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", n), r.on("error", (s, o) => {
      this.onError("xhr post error", s, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = e;
  }
}
class me extends Q {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n, r) {
    super(), this.createRequest = e, wt(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const n = Vr(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && r.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var s;
        r.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = me.requestsCount++, me.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Mc, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete me.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
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
me.requestsCount = 0;
me.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", $n);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in ue ? "pagehide" : "unload";
    addEventListener(t, $n, !1);
  }
}
function $n() {
  for (let t in me.requests)
    me.requests.hasOwnProperty(t) && me.requests[t].abort();
}
const Lc = (function() {
  const t = Yr({
    xdomain: !1
  });
  return t && t.responseType !== null;
})();
class Bc extends Pc {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = Lc && !n;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new me(Yr, this.uri(), e);
  }
}
function Yr(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Dc))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ue[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Kr = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Uc extends rn {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), n = this.opts.protocols, r = Kr ? {} : Vr(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, n, r);
    } catch (s) {
      return this.emitReserved("error", s);
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
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = n === e.length - 1;
      tn(r, this.supportsBinary, (o) => {
        try {
          this.doWrite(r, o);
        } catch {
        }
        s && _t(() => {
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
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = zr()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
}
const It = ue.WebSocket || ue.MozWebSocket;
class $c extends Uc {
  createSocket(e, n, r) {
    return Kr ? new It(e, n, r) : n ? new It(e, n) : new It(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class Fc extends rn {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const n = _c(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(n).getReader(), s = Sc();
        s.readable.pipeTo(e.writable), this._writer = s.writable.getWriter();
        const o = () => {
          r.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), o());
          }).catch((a) => {
          });
        };
        o();
        const i = { type: "open" };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = n === e.length - 1;
      this._writer.write(r).then(() => {
        s && _t(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const jc = {
  websocket: $c,
  webtransport: Fc,
  polling: Bc
}, Gc = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Hc = [
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
function Gt(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let s = Gc.exec(t || ""), o = {}, i = 14;
  for (; i--; )
    o[Hc[i]] = s[i] || "";
  return n != -1 && r != -1 && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = qc(o, o.path), o.queryKey = Vc(o, o.query), o;
}
function qc(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Vc(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, o) {
    s && (n[s] = o);
  }), n;
}
const Ht = typeof addEventListener == "function" && typeof removeEventListener == "function", lt = [];
Ht && addEventListener("offline", () => {
  lt.forEach((t) => t());
}, !1);
class Re extends Q {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n) {
    if (super(), this.binaryType = Rc, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (n = e, e = null), e) {
      const r = Gt(e);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Gt(n.host).host);
    wt(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const s = r.prototype.name;
      this.transports.push(s), this._transportsByName[s] = r;
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = kc(this.opts.query)), Ht && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, lt.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = qr, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](r);
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
    const e = this.opts.rememberUpgrade && Re.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(e);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Re.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
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
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const s = this.writeBuffer[r].data;
      if (s && (n += vc(s)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
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
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, _t(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
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
  _sendPacket(e, n, r, s) {
    if (typeof n == "function" && (s = n, n = void 0), typeof r == "function" && (s = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const o = {
      type: e,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (Re.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Ht && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = lt.indexOf(this._offlineEventListener);
        r !== -1 && lt.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Re.protocol = qr;
class zc extends Re {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let n = this.createTransport(e), r = !1;
    Re.priorWebsocketSuccess = !1;
    const s = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (m) => {
        if (!r)
          if (m.type === "pong" && m.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Re.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (d(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const g = new Error("probe error");
            g.transport = n.name, this.emitReserved("upgradeError", g);
          }
      }));
    };
    function o() {
      r || (r = !0, d(), n.close(), n = null);
    }
    const i = (m) => {
      const g = new Error("probe error: " + m);
      g.transport = n.name, o(), this.emitReserved("upgradeError", g);
    };
    function a() {
      i("transport closed");
    }
    function l() {
      i("socket closed");
    }
    function u(m) {
      n && m.name !== n.name && o();
    }
    const d = () => {
      n.removeListener("open", s), n.removeListener("error", i), n.removeListener("close", a), this.off("close", l), this.off("upgrading", u);
    };
    n.once("open", s), n.once("error", i), n.once("close", a), this.once("close", l), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      ~this.transports.indexOf(e[r]) && n.push(e[r]);
    return n;
  }
}
let Wc = class extends zc {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((s) => jc[s]).filter((s) => !!s)), super(e, r);
  }
};
function Yc(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = Gt(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + o + ":" + r.port + e, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Kc = typeof ArrayBuffer == "function", Jc = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Jr = Object.prototype.toString, Xc = typeof Blob == "function" || typeof Blob < "u" && Jr.call(Blob) === "[object BlobConstructor]", Qc = typeof File == "function" || typeof File < "u" && Jr.call(File) === "[object FileConstructor]";
function sn(t) {
  return Kc && (t instanceof ArrayBuffer || Jc(t)) || Xc && t instanceof Blob || Qc && t instanceof File;
}
function ut(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (ut(t[n]))
        return !0;
    return !1;
  }
  if (sn(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return ut(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && ut(t[n]))
      return !0;
  return !1;
}
function Zc(t) {
  const e = [], n = t.data, r = t;
  return r.data = qt(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function qt(t, e) {
  if (!t)
    return t;
  if (sn(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = qt(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = qt(t[r], e));
    return n;
  }
  return t;
}
function el(t, e) {
  return t.data = Vt(t.data, e), delete t.attachments, t;
}
function Vt(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = Vt(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = Vt(t[n], e));
  return t;
}
const tl = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], nl = 5;
var H;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(H || (H = {}));
class rl {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === H.EVENT || e.type === H.ACK) && ut(e) ? this.encodeAsBinary({
      type: e.type === H.EVENT ? H.BINARY_EVENT : H.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === H.BINARY_EVENT || e.type === H.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = Zc(e), r = this.encodeAsString(n.packet), s = n.buffers;
    return s.unshift(r), s;
  }
}
function Fn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class on extends Q {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const r = n.type === H.BINARY_EVENT;
      r || n.type === H.BINARY_ACK ? (n.type = r ? H.EVENT : H.ACK, this.reconstructor = new sl(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (sn(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (H[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === H.BINARY_EVENT || r.type === H.BINARY_ACK) {
      const o = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const i = e.substring(o, n);
      if (i != Number(i) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(i);
    }
    if (e.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      r.nsp = e.substring(o, n);
    } else
      r.nsp = "/";
    const s = e.charAt(n + 1);
    if (s !== "" && Number(s) == s) {
      const o = n + 1;
      for (; ++n; ) {
        const i = e.charAt(n);
        if (i == null || Number(i) != i) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      r.id = Number(e.substring(o, n + 1));
    }
    if (e.charAt(++n)) {
      const o = this.tryParse(e.substr(n));
      if (on.isPayloadValid(r.type, o))
        r.data = o;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case H.CONNECT:
        return Fn(n);
      case H.DISCONNECT:
        return n === void 0;
      case H.CONNECT_ERROR:
        return typeof n == "string" || Fn(n);
      case H.EVENT:
      case H.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && tl.indexOf(n[0]) === -1);
      case H.ACK:
      case H.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class sl {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = el(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
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
const ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: on,
  Encoder: rl,
  get PacketType() {
    return H;
  },
  protocol: nl
}, Symbol.toStringTag, { value: "Module" }));
function fe(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const il = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Xr extends Q {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
    const e = this.io;
    this.subs = [
      fe(e, "open", this.onopen.bind(this)),
      fe(e, "packet", this.onpacket.bind(this)),
      fe(e, "error", this.onerror.bind(this)),
      fe(e, "close", this.onclose.bind(this))
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
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
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
  emit(e, ...n) {
    var r, s, o;
    if (il.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: H.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const d = this.ids++, m = n.pop();
      this._registerAckCallback(d, m), i.id = d;
    }
    const a = (s = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || s === void 0 ? void 0 : s.writable, l = this.connected && !(!((o = this.io.engine) === null || o === void 0) && o._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var r;
    const s = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[e] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, s), i = (...a) => {
      this.io.clearTimeoutFn(o), n.apply(this, a);
    };
    i.withError = !0, this.acks[e] = i;
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
  emitWithAck(e, ...n) {
    return new Promise((r, s) => {
      const o = (i, a) => i ? s(i) : r(a);
      o.withError = !0, n.push(o), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((s, ...o) => r !== this._queue[0] ? void 0 : (s !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(s)) : (this._queue.shift(), n && n(null, ...o)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: H.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((r) => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case H.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case H.EVENT:
        case H.BINARY_EVENT:
          this.onevent(e);
          break;
        case H.ACK:
        case H.BINARY_ACK:
          this.onack(e);
          break;
        case H.DISCONNECT:
          this.ondisconnect();
          break;
        case H.CONNECT_ERROR:
          this.destroy();
          const r = new Error(e.data.message);
          r.data = e.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let r = !1;
    return function(...s) {
      r || (r = !0, n.packet({
        type: H.ACK,
        id: e,
        data: s
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (delete this.acks[e.id], n.withError && e.data.unshift(null), n.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
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
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: H.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(e) {
    return this.flags.compress = e, this;
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
  timeout(e) {
    return this.flags.timeout = e, this;
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
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
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
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
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
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
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
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
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
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
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
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
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
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, e.data);
    }
  }
}
function Ue(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Ue.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n;
  }
  return Math.min(t, this.max) | 0;
};
Ue.prototype.reset = function() {
  this.attempts = 0;
};
Ue.prototype.setMin = function(t) {
  this.ms = t;
};
Ue.prototype.setMax = function(t) {
  this.max = t;
};
Ue.prototype.setJitter = function(t) {
  this.jitter = t;
};
class zt extends Q {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, wt(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Ue({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const s = n.parser || ol;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
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
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Wc(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = fe(n, "open", function() {
      r.onopen(), e && e();
    }), o = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, i = fe(n, "error", o);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        s(), o(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(s), this.subs.push(i), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      fe(e, "ping", this.onping.bind(this)),
      fe(e, "data", this.ondata.bind(this)),
      fe(e, "error", this.onerror.bind(this)),
      fe(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      fe(this.decoder, "decoded", this.ondecoded.bind(this))
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
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    _t(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Xr(this, e, n), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(e, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((s) => {
          s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const qe = {};
function dt(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = Yc(t, e.path || "/socket.io"), r = n.source, s = n.id, o = n.path, i = qe[s] && o in qe[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || i;
  let l;
  return a ? l = new zt(r, e) : (qe[s] || (qe[s] = new zt(r, e)), l = qe[s]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(dt, {
  Manager: zt,
  Socket: Xr,
  io: dt,
  connect: dt
});
const al = (t, e, n) => {
  const [r, s] = ne(null), o = K(() => {
    const u = dt(t, {
      path: e,
      reconnection: !0,
      extraHeaders: {
        Authorization: `Bearer ${n}`
      }
    });
    s(u);
  }, [t, e, n]), i = K(() => {
    r?.disconnect(), s(null);
  }, [r]), [a, l] = ne(!1);
  return Z(() => {
    l(!!r?.connected);
  }, [r]), Z(() => {
    r?.on("connect", () => {
      l(!0), r.emit("chatData");
    });
  }, [r]), Z(() => {
    r?.on("disconnect", () => {
      l(!1);
    });
  }, [r]), {
    socket: r,
    online: a,
    disconnectSocket: i,
    connectSocket: o
  };
}, cl = {
  online: !1
}, Qr = er(cl), ll = ({
  wsUrl: t,
  wsPath: e,
  baseUrl: n,
  children: r
}) => {
  const { state: s, dispatch: o } = Yt(Je), { socket: i, online: a, disconnectSocket: l, connectSocket: u } = al(
    t,
    e,
    s.token
  ), d = oe(s.groupGather), m = oe(s.contactGather);
  Z(() => {
    d.current = s.groupGather;
  }, [s.groupGather]), Z(() => {
    m.current = s.contactGather;
  }, [s.contactGather]), Z(() => (s.token && u(), s.token || l(), () => {
    l();
  }), [s.token]);
  const g = (f, b) => f.code ? (b({ type: "SET_ERROR", payload: f.msg }), !0) : !1;
  Z(() => {
    const f = (h) => {
      console.log("unauthorized msg", h), Ur(s.token, s.refreshToken, n);
    };
    i?.on("unauthorized", f);
    const b = (h) => {
      if (g(h, o)) return;
      const E = h.data, y = E.groupData, R = E.contactData, I = E.userData;
      if (o({ type: "CLEAR_CHAT_DATA" }), o({ type: "SET_USER", payload: E.user }), y.length)
        for (const U of y)
          i?.emit("joinGroupSocket", {
            groupId: U.groupId
          }), o({ type: "SET_GROUP_GATHER", payload: U });
      if (R.length)
        for (const U of R)
          i?.emit("joinPrivateSocket", {
            contactId: U.userId
          }), o({ type: "SET_CONTACT_GATHER", payload: U });
      if (o({
        type: "SET_OPERATORS",
        payload: E.operatorData
      }), I.length)
        for (const U of I)
          o({ type: "SET_USER_GATHER", payload: U });
      o({ type: "UPDATE_ACTIVE_ROOM" }), o({
        type: "SET_CONFERENCE",
        payload: E.conferenceData
      }), o({
        type: "SET_VISIT_DATA",
        payload: E.visitData
      });
    };
    i?.on("chatData", b);
    const _ = (h) => {
      o({ type: "USER_ONLINE", payload: h.data });
    };
    i?.on("userOnline", _);
    const A = (h) => {
      o({ type: "USER_OFFLINE", payload: h.data });
    };
    i?.on("userOffline", A);
    const M = (h) => {
      g(h, o) || console.log("Успешно вошел в приватный чат");
    };
    i?.on("joinPrivateSocket", M);
    let x;
    const k = (h) => {
      g(h, o) || (x && clearTimeout(x), o({
        type: "SET_TYPING",
        payload: h.data
      }), x = setTimeout(() => {
        o({ type: "SET_TYPING", payload: null });
      }, 1e3));
    };
    i?.on("typing", k);
    const D = (h) => {
      if (g(h, o)) return;
      const E = h.data;
      o({ type: "REVOKE_MESSAGE", payload: E }), console.log("REVOKE_MESSAGE");
    };
    i?.on("revokeMessage", D);
    const P = (h) => {
      g(h, o) || o({
        type: "SET_GROUP_GATHER",
        payload: h.data
      });
    };
    i?.on("addGroup", P);
    const j = (h) => {
      if (g(h, o)) return;
      const E = h.data;
      o({ type: "SET_CONTACT_GATHER", payload: E }), o({ type: "SET_USER_GATHER", payload: E }), i?.emit("joinPrivateSocket", {
        contactId: E.userId
      });
    };
    i?.on("addContact", j);
    const X = (h) => {
      if (g(h, o)) return;
      const E = h.data;
      o({ type: "DEL_CONTACT", payload: E });
    };
    i?.on("deleteContact", X);
    const V = (h) => {
      if (g(h, o)) return;
      const E = h.data;
      o({ type: "UPDATE_GROUP_INFO", payload: E });
    };
    i?.on("updateGroupInfo", V);
    const O = (h) => {
      if (g(h, o)) return;
      const E = h.data;
      o({ type: "UPDATE_USER_INFO", payload: E });
    };
    i?.on("updateUserInfo", O);
    const v = (h) => {
      g(h, o) || o({
        type: "SET_CONFERENCE",
        payload: h.data
      });
    };
    i?.on("startConference", v);
    const q = (h) => {
      g(h, o) || o({
        type: "PAUSE_CONFERENCE",
        payload: h.data
      });
    };
    i?.on("pauseConference", q);
    const G = (h) => {
      g(h, o) || o({
        type: "STOP_CONFERENCE",
        payload: h.data
      });
    };
    i?.on("stopConference", G);
    const T = (h) => {
      g(h, o);
    };
    i?.on("addOperator", T);
    const C = (h) => {
      g(h, o) || o({
        type: "SET_ACTIVE_ROOM",
        payload: h.data
      });
    };
    i?.on("setActiveRoom", C);
    const w = (h) => {
      if (g(h, o)) return;
      const E = h.data;
      o({
        type: "SET_VISIT_DATA",
        payload: E.visitData
      });
    };
    return i?.on("visitData", w), () => {
      i?.off("unauthorized", f), i?.off("chatData", b), i?.off("userOnline", _), i?.off("userOffline", A), i?.off("joinPrivateSocket", M), x && clearTimeout(x), i?.off("typing", k), i?.off("revokeMessage", D), i?.off("addGroup", P), i?.off("addContact", j), i?.off("deleteContact", X), i?.off("updateGroupInfo", V), i?.off("updateUserInfo", O), i?.off("startConference", v), i?.off("pauseConference", q), i?.off("stopConference", G), i?.off("addOperator", T), i?.off("setActiveRoom", C), i?.off("visitData", w);
    };
  }, [i?.id]), Z(() => {
    const f = async (_) => {
      if (g(_, o)) return;
      const A = _.data;
      o({ type: "ADD_GROUP_MESSAGE", payload: A }), A.userId !== s.user.userId && i?.emit("markAsRead", {
        groupId: A.groupId,
        _id: A._id
      });
    };
    i?.on("groupMessage", f);
    const b = async (_) => {
      if (g(_, o)) return;
      const A = _.data;
      (A.contactId === s.user.userId || A.userId === s.user.userId) && (o({
        type: "ADD_PRIVATE_MESSAGE",
        payload: A
      }), s.activeRoom && s.activeRoom?.userId === A.userId && i?.emit("markAsRead", {
        contactId: A.userId,
        _id: A._id
      }));
    };
    return i?.on("privateMessage", b), () => {
      i?.off("groupMessage", f), i?.off("privateMessage", b);
    };
  }, [i?.id, s.activeRoom?.userId, s.activeRoom?.groupId]), Z(() => {
    const f = (M) => {
      if (g(M, o)) return;
      const x = M.data;
      if (x.userId === s.user.userId)
        if (typeof x.groupId == "number")
          d.current[x.groupId]?.unreadCount && o({
            type: "LOSE_GROUP_UNREAD_GATHER",
            payload: x.groupId
          });
        else {
          const k = x.contactId;
          typeof k == "number" && (m.current[k]?.unreadCount ?? 0) > 0 && o({
            type: "LOSE_CONTACT_UNREAD_GATHER",
            payload: k
          });
        }
      else if (typeof x.contactId == "number") {
        const k = x.userId;
        if (typeof k == "number") {
          const D = m.current[k];
          ((D?.unreadCount ?? 0) > 0 || (D?.messages?.some((j) => j.status !== 1) ?? !1)) && o({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: k
          });
        }
      }
    };
    i?.on("markAsRead", f);
    const b = (M) => {
      if (g(M, o)) return;
      const x = M.data;
      x.userId === s.user.userId ? o({ type: "DEL_GROUP", payload: x.groupId }) : o({ type: "DEL_GROUP_MEMBER", payload: x });
    };
    i?.on("deleteGroup", b);
    const _ = (M) => {
      if (g(M, o)) return;
      const { group: x, user: k } = M.data;
      d.current[x.groupId] ? k.userId !== s.user.userId && o({
        type: "ADD_GROUP_MEMBER",
        payload: {
          groupId: x.groupId,
          members: [k]
        }
      }) : (console.log("joined to a new group"), i?.emit("chatData"));
    };
    i?.on("joinGroup", _);
    const A = (M) => {
      if (g(M, o)) return;
      const x = M.data, k = x.user;
      k.online = 1;
      const { group: D } = x, P = d.current[D.groupId];
      P && !P.members?.find((j) => j.userId === k.userId) && (k.isManager = 0, P.members?.push(k)), o({ type: "SET_USER_GATHER", payload: k });
    };
    return i?.on("joinGroupSocket", A), () => {
      i?.off("markAsRead", f), i?.off("deleteGroup", b), i?.off("joinGroup", _), i?.off("joinGroupSocket", A);
    };
  }, [i?.id, s.user.userId]);
  const S = Me(() => ({ socket: i, online: a }), [i, a]);
  return /* @__PURE__ */ c(Qr.Provider, { value: S, children: r });
}, ul = ({
  activeGroupId: t,
  activeChatUserId: e,
  hideRooms: n = !1,
  fullWidth: r = !1,
  ...s
}) => {
  console.log("activeChatUserId", e);
  const o = Jn(
    (y) => y.breakpoints.down("md")
  ), { state: i, dispatch: a } = W.useContext(Je), { socket: l } = W.useContext(Qr), {
    apiUrl: u,
    pageSize: d,
    getPrivateMessages: m,
    getGroupMessages: g,
    getUserByMmk: S
  } = W.useContext(en), f = W.useCallback(() => {
    a({
      type: "SET_ACTIVE_ROOM",
      payload: {}
    });
  }, [a]), b = W.useCallback(
    (y, R) => {
      if (!l) {
        console.warn(`Socket not connected, cannot emit ${y}`);
        return;
      }
      try {
        l.emit(y, R);
      } catch (I) {
        console.error(`Error emitting ${y}:`, I), a({
          type: "SET_ERROR",
          payload: `Failed to send ${y}`
        });
      }
    },
    [l, a]
  ), _ = W.useCallback(
    async (y) => {
      try {
        if (a({ type: "SET_LOADING", payload: !0 }), we(y))
          await g(y);
        else {
          const R = i.messageSearch?.trim();
          await m(y, {
            search: R || void 0
          });
        }
      } catch (R) {
        console.error("Failed to load messages:", R), a({ type: "SET_ERROR", payload: "Failed to load messages" });
      } finally {
        a({ type: "SET_LOADING", payload: !1 });
      }
    },
    [m, g, a, i.messageSearch]
  ), A = W.useCallback(
    (y) => {
      if (i.messageSearch === y)
        return;
      const R = i.activeRoom, I = y.trim(), U = !!i.messageSearch.trim(), $ = !!I;
      if (!R || !$ && !U) {
        a({ type: "SET_MESSAGE_SEARCH", payload: y });
        return;
      }
      const L = w.current + 1;
      w.current = L, (async () => {
        try {
          we(R) ? await g(R, {
            reset: !0,
            shouldIgnore: () => w.current !== L
          }) : await m(R, {
            search: $ ? I : void 0,
            reset: !0,
            shouldIgnore: () => w.current !== L
          });
        } catch (de) {
          console.error("Failed to search messages:", de), a({
            type: "SET_ERROR",
            payload: "Failed to search messages"
          });
        } finally {
          w.current === L && a({ type: "SET_MESSAGE_SEARCH", payload: y });
        }
      })();
    },
    [
      a,
      g,
      m,
      i.activeRoom,
      i.messageSearch
    ]
  ), M = W.useCallback(
    (y, R) => {
      b("revokeMessage", {
        groupId: we(y) ? y.groupId : void 0,
        contactId: y.userId,
        _id: R._id
      });
    },
    [b]
  ), x = W.useCallback(
    (y) => {
      b("typing", {
        groupId: we(y) ? y.groupId : void 0,
        contactId: y.userId
      });
    },
    [b]
  ), k = W.useCallback(
    (y, R) => {
      const I = {
        content: R.message,
        width: R.width,
        height: R.height,
        fileName: R.fileName,
        messageType: R.messageType,
        size: R.size
      };
      we(y) ? b("groupMessage", {
        ...I,
        groupId: y.groupId
      }) : b("privateMessage", {
        ...I,
        contactId: y.userId
      });
    },
    [b]
  ), D = W.useCallback(
    (y) => {
      if (!(!y?.messages?.length || !l))
        try {
          const R = y.messages[y.messages.length - 1];
          if (!R?._id) return;
          we(y) ? l.emit("markAsRead", {
            groupId: y.groupId,
            _id: R._id
          }) : (a({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: y.userId
          }), l.emit("markAsRead", {
            contactId: y.userId,
            _id: R._id
          }));
        } catch (R) {
          console.error("Error marking messages as read:", R), a({
            type: "SET_ERROR",
            payload: "Failed to mark messages as read"
          });
        }
    },
    [l, a]
  ), P = W.useCallback(
    (y) => {
      if (y)
        try {
          a({
            type: "SET_ACTIVE_ROOM",
            payload: {
              groupId: we(y) ? y.groupId : void 0,
              contactId: y?.userId
            }
          }), D(y);
        } catch (R) {
          console.error("Error changing chat:", R), a({
            type: "SET_ERROR",
            payload: "Failed to change chat room"
          });
        }
    },
    [a, D]
  ), j = W.useCallback(
    (y, R, I) => {
      b("startConference", {
        groupId: we(y) ? y.groupId : void 0,
        contactId: y.userId,
        visitId: R,
        recreate: I
      });
    },
    [b]
  ), X = W.useCallback(
    (y) => {
      y?.id && b("stopConference", {
        id: y.id
      });
    },
    [b]
  ), V = W.useCallback(
    (y) => {
      y?.id && b("pauseConference", {
        id: y.id
      });
    },
    [b]
  ), O = W.useCallback(
    (y) => {
      y?.id && (b("resumeConference", {
        id: y.id
      }), a({ type: "JOIN_CONFERENCE", payload: y }));
    },
    [b, a]
  ), v = W.useCallback(
    (y, R) => {
      b("addOperator", {
        groupId: y.groupId,
        operatorId: R.userId
      });
    },
    [b]
  ), q = W.useCallback(
    (y) => {
      b("deleteGroup", {
        groupId: y.groupId
      });
    },
    [b]
  ), G = W.useMemo(
    () => Object.values(i.groupGather),
    [i.groupGather]
  ), T = W.useMemo(
    () => Object.values(i.contactGather),
    [i.contactGather]
  ), C = W.useMemo(() => t != null ? `group:${t}` : e != null ? `user:${e}` : null, [t, e]), w = W.useRef(0), h = W.useRef(Se(i.activeRoom));
  W.useEffect(() => {
    h.current = Se(i.activeRoom);
  }, [i.activeRoom]), W.useEffect(() => {
    let y = !1;
    const R = ($) => {
      if (!y && $) {
        const L = Se($);
        if (!L || L === h.current && L === C)
          return;
        P($);
      }
    };
    if (t != null && !st(G)) {
      const $ = G.find((L) => L.groupId === t);
      if ($)
        return R($), () => {
          y = !0;
        };
    }
    if (e != null && !st(T)) {
      const $ = T.find(
        (L) => L.userId === e
      );
      if ($)
        return R($), () => {
          y = !0;
        };
    }
    const I = dn("mmk"), U = dn("guid");
    return (I != null || U != null) && !st(T) && S(I, U).then(($) => {
      $ != null && R(T.find((L) => L.userId === $));
    }).catch(($) => {
      console.error("Failed to get user by MMK:", $);
    }), () => {
      y = !0;
    };
  }, [
    t,
    e,
    T,
    G,
    P,
    S,
    C
  ]);
  const E = i.activeRoom ? /* @__PURE__ */ c(
    ti,
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
      pageSize: d,
      onExitRoom: f,
      onEnterRoom: D,
      onNeedMoreMessages: _,
      onMessageDelete: M,
      onTyping: x,
      onSendMessage: k,
      onVideoCall: j,
      onVideoEnd: X,
      onConferencePause: V,
      onOperatorAdd: v,
      onLeaveGroup: q,
      onContactClick: s.onContactInfoClick,
      messageSearch: i.messageSearch,
      onMessageSearchChange: A,
      isMobile: o
    }
  ) : null;
  return /* @__PURE__ */ N(dc, { children: [
    /* @__PURE__ */ c(
      fc,
      {
        isMobile: o,
        conferenceActive: !!i.conference.data?.id,
        hideRooms: n,
        contactsList: i.conference.data?.id != null && t == null ? /* @__PURE__ */ c(
          hc,
          {
            conference: i.conference,
            onClose: V,
            onAccept: O,
            user: i.user,
            activeRoom: i.activeRoom,
            onChangeChat: P,
            apiUrl: u,
            isMobile: o
          }
        ) : /* @__PURE__ */ c(
          cc,
          {
            user: i.user,
            activeRoom: i.activeRoom,
            groups: G,
            contacts: T,
            typing: i.typing,
            onChangeChat: P
          }
        ),
        chatRoom: E,
        activeRoom: i.activeRoom,
        user: i.user,
        onExitRoom: f,
        onChangeChat: P,
        chatOld: i.chatOld
      }
    ),
    /* @__PURE__ */ c(lc, {})
  ] });
}, lu = ({
  lang: t,
  chatBaseURLApi: e,
  baseUrl: n,
  chatWsUrl: r,
  chatWsPath: s,
  token: o,
  refreshToken: i,
  ...a
}) => /* @__PURE__ */ c(Ja, { defLang: t, token: o, refreshToken: i, children: /* @__PURE__ */ c(
  Qa,
  {
    chatBaseURLApi: e,
    pageSize: 25,
    baseUrl: n,
    children: /* @__PURE__ */ c(ll, { wsUrl: r, wsPath: s, baseUrl: n, children: /* @__PURE__ */ c(ul, { ...a }) })
  }
) });
export {
  Js as AddContact,
  Gl as CHAT_ACTIONS,
  Je as ChatContext,
  lu as ChatIndex,
  ul as ChatPage,
  Ja as ChatProvider,
  eo as Conference,
  no as ConferenceCall,
  Fs as ContextMenuType,
  so as Emoji,
  dr as Message,
  Us as MessageStatus,
  en as RestContext,
  Qa as RestProvider,
  $s as Role,
  ti as Room,
  cc as RoomList,
  Qr as SocketContext,
  ll as SocketProvider,
  Ys as Typing,
  au as clearLocalStorage,
  Ur as getRefreshToken
};
//# sourceMappingURL=mobimed.esm.js.map
