import { jsxs as N, jsx as c, Fragment as ye } from "@emotion/react/jsx-runtime";
import { Typography as ne, List as jn, ListItemButton as Gn, ListItemAvatar as Hn, Avatar as Ee, ListItemText as qn, Dialog as Vn, DialogTitle as es, DialogContent as ts, Alert as mt, DialogActions as ns, Button as ft, Slide as rs, Box as V, Paper as ss, ListItem as nt, Link as os, TextField as Wt, IconButton as be, InputAdornment as zn, CircularProgress as Wn, SvgIcon as is, Popover as Yn, Tooltip as as, Menu as Kn, useMediaQuery as Jn, CardHeader as rt, Fade as cs, Fab as an, CardContent as Xn, Backdrop as ls, Card as Qn, Divider as Nt, MenuItem as cn, ListItemIcon as ln, Chip as us, Badge as Zn, Snackbar as ds, Container as fs, Grid2 as Rt } from "@mui/material";
import * as W from "react";
import U, { useState as re, useRef as se, useCallback as Y, useEffect as Q, useMemo as Me, memo as hs, forwardRef as ps, createContext as er, useContext as Yt } from "react";
import tr from "@mui/icons-material/Delete";
import ms from "@mui/icons-material/FileCopy";
import { makeStyles as Z, createStyles as ge, withStyles as nr } from "@mui/styles";
import { useTranslation as oe } from "react-i18next";
import { Done as gs, DoneAll as ys, Send as Es, InsertEmoticon as bs } from "@mui/icons-material";
import rr from "@mui/icons-material/Group";
import Ss from "@mui/icons-material/PersonAdd";
import ws from "@mui/icons-material/Star";
import sr from "@mui/icons-material/KeyboardArrowDown";
import _s from "@mui/icons-material/PlayArrow";
import Rs from "@mui/icons-material/RestartAlt";
import Cs from "@mui/icons-material/VideoCall";
import Dt from "@mui/material/Button";
import Ts from "@mui/material/Menu";
import As from "@mui/material/MenuItem";
import { styled as vs, alpha as Os } from "@mui/material/styles";
import xs from "@mui/material/Dialog";
import Is from "@mui/material/DialogActions";
import ks from "@mui/material/DialogContent";
import Ns from "@mui/material/Slide";
import Ds from "@mui/icons-material/Close";
import or from "@mui/icons-material/Search";
import ir from "react/jsx-runtime";
import Ms from "@mui/material/List";
import Ps from "@mui/icons-material/RecentActors";
import Ls from "@mui/icons-material/Videocam";
import Us from "@mui/icons-material/CallEnd";
import Bs from "@mui/icons-material/Pause";
var Fs = /* @__PURE__ */ ((t) => (t[t.sent = 0] = "sent", t[t.read = 1] = "read", t))(Fs || {}), $s = /* @__PURE__ */ ((t) => (t[t.Unknown = 0] = "Unknown", t[t.Client = 1] = "Client", t[t.Agent = 2] = "Agent", t[t.Specialist = 3] = "Specialist", t[t.Operator = 4] = "Operator", t))($s || {}), js = /* @__PURE__ */ ((t) => (t.COPY = "COPY", t.REVOKE = "REVOKE", t.TOP_REVERT = "TOP_REVERT", t.TOP = "TOP", t.READ = "READ", t.DELETE = "DELETE", t))(js || {});
const ql = {
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  REVOKE_MESSAGE: "REVOKE_MESSAGE",
  MARK_PRIVATE_MESSAGES_READ: "MARK_PRIVATE_MESSAGES_READ"
};
function Gs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var st = { exports: {} }, Hs = st.exports, un;
function qs() {
  return un || (un = 1, (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(Hs, (function() {
      var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", i = "second", a = "minute", l = "hour", u = "day", d = "week", g = "month", y = "quarter", S = "year", h = "date", E = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, A = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
        var C = ["th", "st", "nd", "rd"], _ = T % 100;
        return "[" + T + (C[(_ - 20) % 10] || C[_] || C[0]) + "]";
      } }, v = function(T, C, _) {
        var w = String(T);
        return !w || w.length >= C ? T : "" + Array(C + 1 - w.length).join(_) + T;
      }, x = { s: v, z: function(T) {
        var C = -T.utcOffset(), _ = Math.abs(C), w = Math.floor(_ / 60), f = _ % 60;
        return (C <= 0 ? "+" : "-") + v(w, 2, "0") + ":" + v(f, 2, "0");
      }, m: function T(C, _) {
        if (C.date() < _.date()) return -T(_, C);
        var w = 12 * (_.year() - C.year()) + (_.month() - C.month()), f = C.clone().add(w, g), p = _ - f < 0, R = C.clone().add(w + (p ? -1 : 1), g);
        return +(-(w + (_ - f) / (p ? f - R : R - f)) || 0);
      }, a: function(T) {
        return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
      }, p: function(T) {
        return { M: g, y: S, w: d, d: u, D: h, h: l, m: a, s: i, ms: o, Q: y }[T] || String(T || "").toLowerCase().replace(/s$/, "");
      }, u: function(T) {
        return T === void 0;
      } }, k = "en", O = {};
      O[k] = D;
      var F = "$isDayjsObject", H = function(T) {
        return T instanceof q || !(!T || !T[F]);
      }, K = function T(C, _, w) {
        var f;
        if (!C) return k;
        if (typeof C == "string") {
          var p = C.toLowerCase();
          O[p] && (f = p), _ && (O[p] = _, f = p);
          var R = C.split("-");
          if (!f && R.length > 1) return T(R[0]);
        } else {
          var P = C.name;
          O[P] = C, f = P;
        }
        return !w && f && (k = f), f || !w && k;
      }, I = function(T, C) {
        if (H(T)) return T.clone();
        var _ = typeof C == "object" ? C : {};
        return _.date = T, _.args = arguments, new q(_);
      }, M = x;
      M.l = K, M.i = H, M.w = function(T, C) {
        return I(T, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
      };
      var q = (function() {
        function T(_) {
          this.$L = K(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[F] = !0;
        }
        var C = T.prototype;
        return C.parse = function(_) {
          this.$d = (function(w) {
            var f = w.date, p = w.utc;
            if (f === null) return /* @__PURE__ */ new Date(NaN);
            if (M.u(f)) return /* @__PURE__ */ new Date();
            if (f instanceof Date) return new Date(f);
            if (typeof f == "string" && !/Z$/i.test(f)) {
              var R = f.match(b);
              if (R) {
                var P = R[2] - 1 || 0, $ = (R[7] || "0").substring(0, 3);
                return p ? new Date(Date.UTC(R[1], P, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, $)) : new Date(R[1], P, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, $);
              }
            }
            return new Date(f);
          })(_), this.init();
        }, C.init = function() {
          var _ = this.$d;
          this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
        }, C.$utils = function() {
          return M;
        }, C.isValid = function() {
          return this.$d.toString() !== E;
        }, C.isSame = function(_, w) {
          var f = I(_);
          return this.startOf(w) <= f && f <= this.endOf(w);
        }, C.isAfter = function(_, w) {
          return I(_) < this.startOf(w);
        }, C.isBefore = function(_, w) {
          return this.endOf(w) < I(_);
        }, C.$g = function(_, w, f) {
          return M.u(_) ? this[w] : this.set(f, _);
        }, C.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, C.valueOf = function() {
          return this.$d.getTime();
        }, C.startOf = function(_, w) {
          var f = this, p = !!M.u(w) || w, R = M.p(_), P = function(ve, ie) {
            var _e = M.w(f.$u ? Date.UTC(f.$y, ie, ve) : new Date(f.$y, ie, ve), f);
            return p ? _e : _e.endOf(u);
          }, $ = function(ve, ie) {
            return M.w(f.toDate()[ve].apply(f.toDate("s"), (p ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ie)), f);
          }, L = this.$W, j = this.$M, ee = this.$D, we = "set" + (this.$u ? "UTC" : "");
          switch (R) {
            case S:
              return p ? P(1, 0) : P(31, 11);
            case g:
              return p ? P(1, j) : P(0, j + 1);
            case d:
              var Ae = this.$locale().weekStart || 0, Fe = (L < Ae ? L + 7 : L) - Ae;
              return P(p ? ee - Fe : ee + (6 - Fe), j);
            case u:
            case h:
              return $(we + "Hours", 0);
            case l:
              return $(we + "Minutes", 1);
            case a:
              return $(we + "Seconds", 2);
            case i:
              return $(we + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, C.endOf = function(_) {
          return this.startOf(_, !1);
        }, C.$set = function(_, w) {
          var f, p = M.p(_), R = "set" + (this.$u ? "UTC" : ""), P = (f = {}, f[u] = R + "Date", f[h] = R + "Date", f[g] = R + "Month", f[S] = R + "FullYear", f[l] = R + "Hours", f[a] = R + "Minutes", f[i] = R + "Seconds", f[o] = R + "Milliseconds", f)[p], $ = p === u ? this.$D + (w - this.$W) : w;
          if (p === g || p === S) {
            var L = this.clone().set(h, 1);
            L.$d[P]($), L.init(), this.$d = L.set(h, Math.min(this.$D, L.daysInMonth())).$d;
          } else P && this.$d[P]($);
          return this.init(), this;
        }, C.set = function(_, w) {
          return this.clone().$set(_, w);
        }, C.get = function(_) {
          return this[M.p(_)]();
        }, C.add = function(_, w) {
          var f, p = this;
          _ = Number(_);
          var R = M.p(w), P = function(j) {
            var ee = I(p);
            return M.w(ee.date(ee.date() + Math.round(j * _)), p);
          };
          if (R === g) return this.set(g, this.$M + _);
          if (R === S) return this.set(S, this.$y + _);
          if (R === u) return P(1);
          if (R === d) return P(7);
          var $ = (f = {}, f[a] = r, f[l] = s, f[i] = n, f)[R] || 1, L = this.$d.getTime() + _ * $;
          return M.w(L, this);
        }, C.subtract = function(_, w) {
          return this.add(-1 * _, w);
        }, C.format = function(_) {
          var w = this, f = this.$locale();
          if (!this.isValid()) return f.invalidDate || E;
          var p = _ || "YYYY-MM-DDTHH:mm:ssZ", R = M.z(this), P = this.$H, $ = this.$m, L = this.$M, j = f.weekdays, ee = f.months, we = f.meridiem, Ae = function(ie, _e, $e, Qe) {
            return ie && (ie[_e] || ie(w, p)) || $e[_e].slice(0, Qe);
          }, Fe = function(ie) {
            return M.s(P % 12 || 12, ie, "0");
          }, ve = we || function(ie, _e, $e) {
            var Qe = ie < 12 ? "AM" : "PM";
            return $e ? Qe.toLowerCase() : Qe;
          };
          return p.replace(A, (function(ie, _e) {
            return _e || (function($e) {
              switch ($e) {
                case "YY":
                  return String(w.$y).slice(-2);
                case "YYYY":
                  return M.s(w.$y, 4, "0");
                case "M":
                  return L + 1;
                case "MM":
                  return M.s(L + 1, 2, "0");
                case "MMM":
                  return Ae(f.monthsShort, L, ee, 3);
                case "MMMM":
                  return Ae(ee, L);
                case "D":
                  return w.$D;
                case "DD":
                  return M.s(w.$D, 2, "0");
                case "d":
                  return String(w.$W);
                case "dd":
                  return Ae(f.weekdaysMin, w.$W, j, 2);
                case "ddd":
                  return Ae(f.weekdaysShort, w.$W, j, 3);
                case "dddd":
                  return j[w.$W];
                case "H":
                  return String(P);
                case "HH":
                  return M.s(P, 2, "0");
                case "h":
                  return Fe(1);
                case "hh":
                  return Fe(2);
                case "a":
                  return ve(P, $, !0);
                case "A":
                  return ve(P, $, !1);
                case "m":
                  return String($);
                case "mm":
                  return M.s($, 2, "0");
                case "s":
                  return String(w.$s);
                case "ss":
                  return M.s(w.$s, 2, "0");
                case "SSS":
                  return M.s(w.$ms, 3, "0");
                case "Z":
                  return R;
              }
              return null;
            })(ie) || R.replace(":", "");
          }));
        }, C.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, C.diff = function(_, w, f) {
          var p, R = this, P = M.p(w), $ = I(_), L = ($.utcOffset() - this.utcOffset()) * r, j = this - $, ee = function() {
            return M.m(R, $);
          };
          switch (P) {
            case S:
              p = ee() / 12;
              break;
            case g:
              p = ee();
              break;
            case y:
              p = ee() / 3;
              break;
            case d:
              p = (j - L) / 6048e5;
              break;
            case u:
              p = (j - L) / 864e5;
              break;
            case l:
              p = j / s;
              break;
            case a:
              p = j / r;
              break;
            case i:
              p = j / n;
              break;
            default:
              p = j;
          }
          return f ? p : M.a(p);
        }, C.daysInMonth = function() {
          return this.endOf(g).$D;
        }, C.$locale = function() {
          return O[this.$L];
        }, C.locale = function(_, w) {
          if (!_) return this.$L;
          var f = this.clone(), p = K(_, w, !0);
          return p && (f.$L = p), f;
        }, C.clone = function() {
          return M.w(this.$d, this);
        }, C.toDate = function() {
          return new Date(this.valueOf());
        }, C.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, C.toISOString = function() {
          return this.$d.toISOString();
        }, C.toString = function() {
          return this.$d.toUTCString();
        }, T;
      })(), z = q.prototype;
      return I.prototype = z, [["$ms", o], ["$s", i], ["$m", a], ["$H", l], ["$W", u], ["$M", g], ["$y", S], ["$D", h]].forEach((function(T) {
        z[T[1]] = function(C) {
          return this.$g(C, T[0], T[1]);
        };
      })), I.extend = function(T, C) {
        return T.$i || (T(C, q, I), T.$i = !0), I;
      }, I.locale = K, I.isDayjs = H, I.unix = function(T) {
        return I(1e3 * T);
      }, I.en = O[k], I.Ls = O, I.p = {}, I;
    }));
  })(st)), st.exports;
}
var Vs = qs();
const De = /* @__PURE__ */ Gs(Vs);
function ze(t) {
  return t == null || typeof t == "object" && Object.keys(t).length === 0 || typeof t == "string" && t.trim().length === 0;
}
function ht(t, e = "DD.MM.YYYY HH:mm") {
  return typeof t > "u" ? null : (typeof t == "string" && (t = new Date(t)), De().add(-1, "days").startOf("day").isAfter(t) ? De(t).format(e) : De().startOf("day").isAfter(t) ? `Вчера в ${De(t).format("HH:mm")}` : De(t).format("HH:mm"));
}
function zs(t) {
  const e = t.split("$"), [n, r, s, o] = e;
  return {
    date: n,
    userId: r,
    size: s,
    name: o
  };
}
function Ws(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? {
    name: t,
    ext: ""
  } : {
    name: t.slice(0, e),
    ext: t.slice(e + 1)
  };
}
const Se = (t) => t ? t.groupId ? `group:${t.groupId}` : `user:${t.userId}` : null, ar = (t) => t.groupId ? t.name : t.username, Re = (t) => "groupId" in t, cr = (t, e) => {
  const n = Array.isArray(t.messages) && t.messages.length > 0, r = Array.isArray(e.messages) && e.messages.length > 0;
  if (n && r && e.messages != null && t.messages != null) {
    const s = e.messages[e.messages.length - 1].cdate != null ? new Date(e.messages[e.messages.length - 1].cdate).getTime() : (/* @__PURE__ */ new Date()).getTime(), o = t.messages[t.messages.length - 1].cdate != null ? new Date(t.messages[t.messages.length - 1].cdate).getTime() : (/* @__PURE__ */ new Date()).getTime() - 1;
    return s - o;
  }
  return n ? -1 : 1;
}, dn = (t) => {
  const e = window.location.search;
  return new URLSearchParams(e).get(t);
}, Te = (t, e, n) => e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t, Ys = Z(
  (t) => ge({
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
), Ks = (t) => {
  const e = Ys();
  return /* @__PURE__ */ N(ne, { color: "primary", variant: "body2", component: "span", children: [
    /* @__PURE__ */ c("span", { className: e.typingDot }),
    /* @__PURE__ */ c("span", { className: e.typingDot }),
    /* @__PURE__ */ c("span", { className: e.typingDot }),
    /* @__PURE__ */ c("span", { className: e.typingText, children: t.message })
  ] });
}, lr = (t) => {
  const { t: e } = oe();
  return t.isTyping ? /* @__PURE__ */ c(Ks, { message: e("CHAT.STATUS.TYPING") }) : t.contact.online === 1 ? /* @__PURE__ */ c(ne, { variant: "body2", color: "primary", component: "span", children: e("CHAT.STATUS.ONLINE") }) : /* @__PURE__ */ c(ne, { variant: "body2", color: "textSecondary", component: "span", children: e("CHAT.STATUS.OFFLINE") });
}, Js = Z(() => ({
  star: {
    fontSize: "0.85rem",
    verticalAlign: "middle"
  }
})), ur = (t) => {
  const e = Js(), { apiUrl: n, contacts: r, owner: s, onContactClick: o, ...i } = t;
  return /* @__PURE__ */ c(jn, { ...i, "aria-label": "contacts", children: r.map((a) => /* @__PURE__ */ N(
    Gn,
    {
      onClick: () => o && o(a),
      children: [
        /* @__PURE__ */ c(Hn, { children: /* @__PURE__ */ c(
          Ee,
          {
            alt: a.username,
            src: a.avatar ? Te(n, a.avatar) : ""
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
}, Xs = (t) => {
  const { onClose: e, open: n, apiUrl: r, contacts: s } = t, { t: o } = oe(), i = () => {
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
        /* @__PURE__ */ c(es, { id: "switch-operator-title", children: o("CHAT.ADD_CONTACT") }),
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
function Qs(t, e = {}) {
  const { paused: n = !1 } = e, [r, s] = re(t), [o, i] = re(t <= 0), a = se(null), l = Y(() => {
    a.current || (a.current = setInterval(() => {
      s((d) => d <= 1 ? (clearInterval(a.current), a.current = null, i(!0), 0) : d - 1);
    }, 1e3));
  }, []), u = Y((d) => {
    a.current && (clearInterval(a.current), a.current = null), s(d), i(d <= 0);
  }, []);
  return Q(() => (!o && r > 0 && !n ? l() : n && a.current && (clearInterval(a.current), a.current = null), () => {
    a.current && (clearInterval(a.current), a.current = null);
  }), [l, r, o, n]), { counter: r, isFinished: o, reset: u };
}
const Zs = U.forwardRef(function(e, n) {
  return /* @__PURE__ */ c(rs, { direction: "up", ref: n, ...e });
});
function eo({
  children: t,
  open: e,
  setOpen: n,
  severity: r = "warning"
}) {
  const { t: s } = oe(), o = () => {
    n(!1);
  };
  return /* @__PURE__ */ N(
    Vn,
    {
      open: e,
      TransitionComponent: Zs,
      keepMounted: !0,
      onClose: o,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [
        /* @__PURE__ */ c(ts, { children: /* @__PURE__ */ c(mt, { severity: r, children: typeof t == "string" ? /* @__PURE__ */ c(ne, { variant: "body2", children: t }) : t }) }),
        /* @__PURE__ */ c(ns, { children: /* @__PURE__ */ c(ft, { onClick: o, variant: "text", children: s("CHAT.BUT_CLOSE") }) })
      ]
    }
  );
}
function to(t) {
  const e = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), r = t % 60, s = (o) => o.toString().padStart(2, "0");
  return `${s(e)}:${s(n)}:${s(r)}`;
}
function fn({
  finishDate: t,
  paused: e = !1
}) {
  const { t: n } = oe(), [r, s] = re(!1), o = Date.now();
  if (t == null)
    return null;
  const i = typeof t == "string" ? new Date(t).getTime() : t.getTime(), a = Math.max(0, Math.round((i - o) / 1e3)), { counter: l, isFinished: u, reset: d } = Qs(a, { paused: e }), g = se(i);
  Q(() => {
    if (g.current !== i) {
      g.current = i;
      const S = Math.max(
        0,
        Math.round((i - Date.now()) / 1e3)
      );
      d(S);
    }
  }, [i, d]);
  const { strTime: y } = Me(() => ({ strTime: to(l) }), [l]);
  return Q(() => {
    l === 180 && s(!0);
  }, [l]), u ? null : /* @__PURE__ */ N(V, { textAlign: "right", children: [
    /* @__PURE__ */ N(ne, { variant: "body2", component: "span", children: [
      n("CHAT.CONFERENCE.LEFT_TIME"),
      ":",
      " "
    ] }),
    /* @__PURE__ */ c(ne, { variant: "button", component: "span", children: y }),
    /* @__PURE__ */ N(eo, { open: r, setOpen: s, severity: "info", children: [
      /* @__PURE__ */ N(ne, { variant: "body1", textAlign: "center", children: [
        n("CHAT.CONFERENCE.UntillTheEnd"),
        ":"
      ] }),
      /* @__PURE__ */ c(ne, { variant: "h6", textAlign: "center", children: y })
    ] })
  ] });
}
const no = W.forwardRef(function(e, n) {
  return /* @__PURE__ */ c(Ns, { direction: "up", ref: n, ...e });
});
function dr({
  open: t,
  setOpen: e,
  contentText: n,
  callback: r
}) {
  const { t: s } = oe(), o = () => {
    e(!1);
  }, i = () => {
    e(!1), r();
  };
  return /* @__PURE__ */ c(W.Fragment, { children: /* @__PURE__ */ N(
    xs,
    {
      open: t,
      TransitionComponent: no,
      keepMounted: !0,
      onClose: o,
      "aria-describedby": "alert-dialog-slide-description",
      children: [
        /* @__PURE__ */ c(ks, { children: /* @__PURE__ */ c(ne, { variant: "h6", children: n }) }),
        /* @__PURE__ */ N(Is, { children: [
          /* @__PURE__ */ c(Dt, { onClick: o, color: "primary", children: s("CHAT.BUT_CLOSE") }),
          /* @__PURE__ */ c(Dt, { onClick: i, color: "warning", children: s("CHAT.BUT_CONFIRM") })
        ] })
      ]
    }
  ) });
}
function ro(t, e, n) {
  const r = new RegExp("(" + e + "=)[^&]+");
  return t.replace(r, "$1" + n);
}
const so = (t) => t === "ru" ? "rus" : t === "fr" ? "fra" : t === "en" ? "eng" : "", oo = Z(() => ({
  root: {
    width: "100%",
    height: "100%",
    border: 0
  }
})), io = ({
  conference: t,
  onClose: e,
  langCode: n = "rus",
  user: r,
  conferenceJoined: s,
  conferencePaused: o,
  onVideoEnd: i,
  onConferencePause: a
}) => {
  const l = oo(), u = U.useRef(null), { t: d } = oe(), [g, y] = U.useState(!1);
  let S = "";
  t && t.url && (S = n ? ro(t.url, "lang", so(n)) : t.url);
  const h = [
    "connectionFail",
    "loginFail",
    "callFail",
    "hangUp",
    "remoteHangUp",
    "logout",
    "connectionClosed"
  ], E = t ? t.id : void 0, b = r.role != null && [3, 4].includes(r.role), A = t != null && !ze(t), D = A && s && b && !o && typeof a == "function", v = A && b && typeof i == "function";
  return Q(() => {
    const x = ({ source: k, data: O }) => {
      const F = u.current ? u.current.contentWindow : null;
      if (F && k === F) {
        const { type: H } = O;
        h.includes(H) && e(t);
      }
    };
    return window.addEventListener("message", x), () => {
      window.removeEventListener("message", x);
    };
  }, [E, n]), /* @__PURE__ */ N(
    V,
    {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      gap: 1,
      children: [
        /* @__PURE__ */ c(V, { flex: 1, minHeight: 0, sx: { borderRadius: 1, overflow: "hidden" }, children: /* @__PURE__ */ c(
          "iframe",
          {
            title: "conference",
            className: l.root,
            src: S,
            allowFullScreen: !0,
            allow: "microphone; camera; autoplay; display-capture",
            ref: u
          }
        ) }),
        /* @__PURE__ */ N(
          V,
          {
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "center",
            flexShrink: 0,
            sx: { "& > *": { flexShrink: 0 } },
            children: [
              D && t && /* @__PURE__ */ c(
                ft,
                {
                  "aria-label": "pause call",
                  variant: "contained",
                  color: "primary",
                  size: "small",
                  startIcon: /* @__PURE__ */ c(Bs, { color: "inherit" }),
                  onClick: () => {
                    a && a(t);
                  },
                  children: d("CHAT.CONFERENCE.PAUSE")
                }
              ),
              v && t && /* @__PURE__ */ N(ye, { children: [
                /* @__PURE__ */ c(
                  ft,
                  {
                    "aria-label": "finish call",
                    variant: "contained",
                    color: "warning",
                    size: "small",
                    startIcon: /* @__PURE__ */ c(Us, { color: "inherit" }),
                    onClick: () => y(!0),
                    children: d("CHAT.CONFERENCE.FINISH")
                  }
                ),
                /* @__PURE__ */ c(
                  dr,
                  {
                    open: g,
                    setOpen: y,
                    contentText: d("CHAT.CONFERENCE.CONFIRM_FINISH_CONF"),
                    callback: () => {
                      i && t && i(t);
                    }
                  }
                )
              ] }),
              t && A && /* @__PURE__ */ N(ye, { children: [
                !b && !o && /* @__PURE__ */ c(V, { mx: "auto", children: /* @__PURE__ */ c(
                  fn,
                  {
                    finishDate: t.finishDate,
                    paused: o
                  }
                ) }),
                b && t.finishDate != null && (o ? /* @__PURE__ */ c(ne, { variant: "body2", color: "textSecondary", children: d("CHAT.CONFERENCE.PAUSED") }) : /* @__PURE__ */ c(
                  fn,
                  {
                    finishDate: t.finishDate,
                    paused: o
                  }
                ))
              ] })
            ]
          }
        )
      ]
    }
  );
}, ao = Z(() => ({
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
})), co = ({
  conference: t,
  contact: e,
  apiUrl: n,
  onAccept: r,
  canResume: s = !0,
  isPaused: o = !1
}) => {
  const i = ao(), { t: a } = oe(), l = !s && o, u = typeof e == "number" || !e ? null : e;
  return /* @__PURE__ */ N(ss, { className: i.root, children: [
    /* @__PURE__ */ c("div", { className: i.pulse, children: u ? /* @__PURE__ */ c(
      Ee,
      {
        className: i.avatar,
        alt: u.username,
        src: u.avatar ? Te(n, u.avatar) : ""
      }
    ) : /* @__PURE__ */ c(Ee, { className: i.avatar }) }),
    /* @__PURE__ */ c("div", { className: i.footer, children: l ? /* @__PURE__ */ c(ne, { variant: "h6", children: a("CHAT.CONFERENCE.PAUSED") }) : /* @__PURE__ */ c(
      ft,
      {
        variant: "contained",
        color: "primary",
        onClick: () => r(t),
        children: a("CHAT.CONFERENCE.RESUME")
      }
    ) })
  ] });
}, lo = Z(
  () => ge({
    item: {
      cursor: "pointer"
    }
  })
), uo = (t) => {
  const e = lo(), n = (s) => {
    t.onSelect && t.onSelect(s.target.innerText);
  }, r = (s) => /* @__PURE__ */ c(
    V,
    {
      m: 0.5,
      component: "span",
      onClick: n,
      className: e.item,
      children: s.emoji
    }
  );
  return /* @__PURE__ */ N(V, { children: [
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
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
}, fo = Z(
  (t) => ge({
    fileIcon: {
      fontSize: "0.75rem"
    },
    fileBody: {
      paddingLeft: t.spacing(1.2)
    }
  })
), ho = ({ message: t }) => {
  const e = fo(), n = zs(t.content), { name: r, ext: s } = Ws(n.name);
  return /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
    /* @__PURE__ */ c(Ee, { className: e.fileIcon, children: s.toUpperCase() }),
    /* @__PURE__ */ N(V, { display: "flex", flexDirection: "column", className: e.fileBody, children: [
      r,
      /* @__PURE__ */ c("span", { children: `${s} ${n.size}` })
    ] })
  ] });
};
var Oe = {}, je = {}, hn;
function po() {
  if (hn) return je;
  hn = 1, je.__esModule = !0, je.default = void 0;
  var t = U, e = ir, n = ["className", "children", "ratio", "style"];
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var d = arguments[u];
        for (var g in d)
          Object.prototype.hasOwnProperty.call(d, g) && (l[g] = d[g]);
      }
      return l;
    }, r.apply(this, arguments);
  }
  function s(l, u) {
    if (l == null) return {};
    var d = {};
    for (var g in l)
      if (Object.prototype.hasOwnProperty.call(l, g)) {
        if (u.indexOf(g) >= 0) continue;
        d[g] = l[g];
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
        children: g,
        ratio: y,
        style: S
      } = u, h = s(u, n), E = r({}, S, {
        // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
        [o]: "(" + y + ")"
      });
      return /* @__PURE__ */ (0, e.jsx)("div", r({
        className: d,
        ref: this.setNode,
        style: E
      }, h, {
        children: g
      }));
    }
  }
  return a.defaultProps = {
    className: i,
    ratio: 1
  }, je.default = a, je;
}
var Ge = {}, pn;
function mo() {
  if (pn) return Ge;
  pn = 1, Ge.__esModule = !0, Ge.default = void 0;
  var t = U, e = ir, n = ["className", "children", "ratio", "style"];
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var d = arguments[u];
        for (var g in d)
          Object.prototype.hasOwnProperty.call(d, g) && (l[g] = d[g]);
      }
      return l;
    }, r.apply(this, arguments);
  }
  function s(l, u) {
    if (l == null) return {};
    var d = {};
    for (var g in l)
      if (Object.prototype.hasOwnProperty.call(l, g)) {
        if (u.indexOf(g) >= 0) continue;
        d[g] = l[g];
      }
    return d;
  }
  var o = "--aspect-ratio", i = "react-aspect-ratio-placeholder", a = /* @__PURE__ */ (0, t.forwardRef)((l, u) => {
    var {
      className: d = i,
      children: g,
      ratio: y = 1,
      style: S
    } = l, h = s(l, n), E = r({}, S, {
      // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
      [o]: "(" + y + ")"
    });
    return /* @__PURE__ */ (0, e.jsx)("div", r({
      className: d,
      style: E,
      ref: u
    }, h, {
      children: g
    }));
  });
  return Ge.default = a, Ge;
}
var mn;
function go() {
  if (mn) return Oe;
  mn = 1, Oe.__esModule = !0, Oe.default = Oe.AspectRatio = void 0;
  var t = n(/* @__PURE__ */ po()), e = n(/* @__PURE__ */ mo());
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  return Oe.default = t.default, Oe.AspectRatio = e.default, Oe;
}
var yo = /* @__PURE__ */ go();
const Eo = Z(
  (t) => ge({
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
), bo = ({
  apiUrl: t,
  message: e,
  setViewerData: n
}) => {
  const r = Eo(), s = U.useMemo(
    () => Te(t, `/static/image/${e.content}`),
    [t, e.content]
  ), o = U.useCallback(() => {
    n({
      visible: !0,
      src: s
    });
  }, [s, n]);
  return /* @__PURE__ */ c(yo.AspectRatio, { ratio: "3/4", className: r.aspect, children: /* @__PURE__ */ c(
    "img",
    {
      src: s,
      loading: "lazy",
      onClick: o,
      className: r.img,
      alt: e.cdate
    }
  ) });
}, So = Z((t) => ({
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
})), wo = ({
  apiUrl: t,
  message: e,
  isConference: n
}) => {
  const r = So(), s = U.useMemo(() => {
    if (!n)
      return Te(t, `/static/file/${e.content}`);
    try {
      const o = JSON.parse(e.content);
      if (o && o.visitId && o.name)
        return Te(t, `/static/conf/${o.visitId}/${o.name}`);
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
  ) : /* @__PURE__ */ c(ne, { variant: "caption", component: "span", color: "text.secondary", children: "Видео недоступно" });
}, _o = ({
  apiUrl: t,
  message: e,
  setViewerData: n
}) => {
  switch (e.messageType) {
    case "text":
      return /* @__PURE__ */ c(U.Fragment, { children: e.content });
    case "video":
    case "video_conference":
      return /* @__PURE__ */ c(
        wo,
        {
          message: e,
          apiUrl: t,
          isConference: e.messageType === "video_conference"
        }
      );
    case "image":
      return /* @__PURE__ */ c(
        bo,
        {
          message: e,
          apiUrl: t,
          setViewerData: n
        }
      );
    case "file":
      return /* @__PURE__ */ c(ho, { message: e });
    default:
      return console.warn(`Unsupported message type: ${e.messageType}`), null;
  }
}, Ro = Z(
  (t) => ge({
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
), Co = (t, e, n, r, s, o, i) => {
  const { messageType: a } = e, l = [
    n.message,
    r ? n.firstMessage : "",
    s ? n.lastMessage : ""
  ].filter(Boolean).join(" ");
  if (a === "file") {
    const d = Te(t, `/static/file/${e.content}`);
    return /* @__PURE__ */ c(
      os,
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
    V,
    {
      display: "flex",
      flexDirection: a === "image" || a === "video" || a === "video_conference" ? "column" : "row",
      flexWrap: "wrap",
      className: l,
      onContextMenu: o,
      children: i
    }
  );
}, fr = hs(
  ps((t, e) => {
    const n = Ro(), { t: r } = oe(), {
      apiUrl: s,
      message: o,
      owner: i,
      user: a,
      isGroupMessage: l,
      isUserFirst: u,
      isUserLast: d,
      setViewerData: g
      //refOnMess,
    } = t, y = Me(() => {
      const h = o.content;
      if (typeof h != "string" || h.trim().indexOf("{") !== 0)
        return h;
      try {
        return JSON.parse(h);
      } catch (E) {
        return console.warn("Failed to parse notify content", E), h;
      }
    }, [o.content]);
    if (o.messageType === "notify") {
      const h = typeof y == "string" ? "info" : y.severity ?? "info", E = typeof y == "string" ? y : y.message;
      return /* @__PURE__ */ c(nt, { className: n.rootNotify, ref: e, children: /* @__PURE__ */ c(
        mt,
        {
          severity: h,
          children: E
        }
      ) });
    }
    if (o.isRevoke)
      return /* @__PURE__ */ c(nt, { className: n.rootNotify, ref: e, children: /* @__PURE__ */ c(
        ne,
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
      nt,
      {
        ref: e,
        className: o.messageType === "video_conference" ? n.rootNotify : S ? n.rootUser : n.rootContact,
        children: Co(
          s,
          o,
          n,
          u,
          d,
          t.onContextMenu,
          /* @__PURE__ */ N(U.Fragment, { children: [
            !S && l && i && u && /* @__PURE__ */ c("div", { className: n.header, children: i.username }),
            /* @__PURE__ */ c(
              "div",
              {
                className: n.body,
                children: /* @__PURE__ */ c(
                  _o,
                  {
                    message: o,
                    apiUrl: s,
                    setViewerData: g
                  }
                )
              }
            ),
            /* @__PURE__ */ c("div", { className: n.status, children: /* @__PURE__ */ N("span", { children: [
              S ? o.status === 0 ? /* @__PURE__ */ c(gs, { className: n.statusImage }) : /* @__PURE__ */ c(ys, { className: n.statusImage }) : null,
              ht(o.cdate) ?? ""
            ] }) })
          ] })
        )
      }
    );
  })
);
fr.displayName = "Message";
const To = 10 * 1024 * 1024, gn = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp"],
  video: ["video/mp4", "video/webm"],
  file: ["application/pdf"]
}, Ne = 335, Ao = Z(() => ({
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
})), vo = (t) => {
  let { width: e, height: n } = t;
  return (e > Ne || n > Ne) && (e > n ? (n = Ne * (n / e), e = Ne) : (e = Ne * (e / n), n = Ne)), { width: e, height: n };
}, Oo = ({
  chat: t,
  onTyping: e,
  onSendMessage: n,
  maxMessageLength: r = 1e3
}) => {
  const s = Ao(), { t: o } = oe(), i = se(null), [a, l] = re(
    null
  ), u = se(null), d = se(""), [g, y] = re(""), [S, h] = re(!1), [E, b] = re({
    chat: t,
    time: 0
  }), A = (I) => {
    l(I.currentTarget);
  }, D = () => {
    l(null);
  }, v = Y((I) => {
    if (u.current) {
      const M = d.current + I;
      d.current = M, u.current.value = M;
    }
    D();
  }, []), x = Y(
    (I) => {
      const M = I.target.value;
      d.current = M, t && e && (E.chat !== t || Date.now() - E.time >= 500) && (b({
        chat: t,
        time: Date.now()
      }), e(t));
    },
    [t, e, E.chat]
  ), k = Y(
    (I) => {
      !t || !n || n(t, I);
    },
    [t, n]
  ), O = (I) => I.trim().length === 0 ? (y(o("CHAT.ERROR.EMPTY_MESSAGE")), !1) : I.length > r ? (y(o("CHAT.ERROR.MESSAGE_TOO_LONG")), !1) : (y(""), !0), F = Y(() => {
    const I = d.current;
    O(I) && (k({ message: I, messageType: "text" }), u.current && (u.current.value = "", d.current = ""), y(""));
  }, [k]), H = async (I) => {
    const M = I.target.files, q = M && M.length > 0 ? M[0] : void 0;
    if (q) {
      if (q.size > To) {
        y(o("CHAT.ERROR.FILE_TOO_LARGE"));
        return;
      }
      try {
        h(!0), y("");
        const z = Object.entries(gn).find(
          ([, C]) => C.includes(q.type)
        ), T = z ? z[0] : "file";
        if (T === "image") {
          const C = await new Promise((_) => {
            const w = new Image(), f = URL.createObjectURL(q);
            w.onload = () => {
              URL.revokeObjectURL(f), _(
                vo({
                  width: w.width,
                  height: w.height
                })
              );
            }, w.src = f;
          });
          k({
            message: q,
            width: C.width,
            height: C.height,
            messageType: T
          });
        } else
          k({
            message: q,
            messageType: T,
            fileName: q.name,
            size: q.size
          });
      } catch {
        y(o("CHAT.ERROR.UPLOAD_FAILED"));
      } finally {
        h(!1), i.current && (i.current.value = "");
      }
    }
  }, K = (I) => {
    I.key === "Enter" && !I.shiftKey && (I.preventDefault(), F());
  };
  return /* @__PURE__ */ N(V, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ c(
      Wt,
      {
        className: s.input,
        placeholder: o("CHAT.INPUT_MESSAGE") || "",
        autoFocus: !0,
        variant: "standard",
        error: !!g,
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
                  accept: Object.values(gn).flat().join(","),
                  className: s.inputUpload,
                  id: "icon-button-file",
                  type: "file",
                  onChange: H,
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
                  children: S ? /* @__PURE__ */ c(Wn, { size: 24 }) : /* @__PURE__ */ c(is, { className: s.attachmentIcon, children: /* @__PURE__ */ c(
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
                  children: /* @__PURE__ */ c(bs, {})
                }
              )
            ] }),
            endAdornment: /* @__PURE__ */ c(
              be,
              {
                edge: "end",
                color: "inherit",
                size: "small",
                onClick: F,
                disabled: S || !d.current.trim(),
                children: /* @__PURE__ */ c(Es, {})
              }
            ),
            onKeyDown: K
          }
        },
        onChange: x
      }
    ),
    g && /* @__PURE__ */ c("div", { className: s.error, children: g }),
    /* @__PURE__ */ c(
      Yn,
      {
        id: "emoji-popover",
        open: !!a,
        anchorEl: a,
        onClose: D,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ c(uo, { onSelect: v })
      }
    )
  ] });
}, xo = vs((t) => /* @__PURE__ */ c(
  Ts,
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
        backgroundColor: Os(
          t.palette.primary.main,
          t.palette.action.selectedOpacity
        )
      }
    }
  }
})), Io = (t) => {
  const e = new Date(t.visitDate);
  return `${t.plExamName} (${ht(e, "HH:mm")} - ${ht(
    new Date(e.getTime() + t.duration * 6e4),
    "HH:mm"
  )})`;
};
function ko(t) {
  const { t: e } = oe(), [n, r] = U.useState(null), [s, o] = U.useState(null), [i, a] = U.useState(!1), l = !!n, u = (S) => {
    r(S.currentTarget);
  }, d = () => {
    r(null);
  }, g = (S) => {
    r(null), o(S.visitId), S.conferenceStatus === "finished" ? a(!0) : t.onVideoCall(t.chat, S.visitId);
  }, y = U.useMemo(() => t.visitData.filter((S) => S.contactId === t.chat.userId), [t.visitData, t.chat]);
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
        startIcon: /* @__PURE__ */ c(Cs, {}),
        endIcon: /* @__PURE__ */ c(sr, {}),
        disabled: y.length === 0,
        children: e("CHAT.CONFERENCE.START")
      }
    ),
    /* @__PURE__ */ c(
      dr,
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
      xo,
      {
        id: "conference-menu",
        MenuListProps: {
          "aria-labelledby": "conference-button"
        },
        anchorEl: n,
        open: l,
        onClose: d,
        children: y.map((S) => /* @__PURE__ */ N(
          As,
          {
            onClick: () => g(S),
            value: S.visitId,
            disableRipple: !0,
            children: [
              S.conferenceStatus === "finished" ? /* @__PURE__ */ c(Rs, {}) : /* @__PURE__ */ c(_s, {}),
              Io(S)
            ]
          },
          S.visitId
        ))
      }
    )
  ] });
}
const No = ({
  onClick: t,
  active: e = !1
}) => /* @__PURE__ */ c(as, { title: "Поиск по сообщениям", children: /* @__PURE__ */ c(
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
  const { t: r } = oe(), [s, o] = U.useState(t), [i, a] = U.useState(null), l = !!i, u = U.useCallback(() => {
    e?.(s), n && a(null);
  }, [s, n, e]), d = U.useCallback(
    (b) => {
      a(b.currentTarget);
    },
    []
  ), g = U.useCallback(() => {
    a(null);
  }, []);
  U.useEffect(() => {
    (!n || !l) && o(t);
  }, [t, l, n]), U.useEffect(() => {
    n || a(null);
  }, [n]);
  const y = (b) => {
    const A = b.target.value;
    o(A), e?.(A);
  }, S = () => {
    o(""), e?.(""), n && a(null);
  }, h = (b) => {
    n && l && b.key !== "Escape" && b.stopPropagation(), b.key === "Enter" && (b.preventDefault(), u());
  }, E = /* @__PURE__ */ c(
    Wt,
    {
      autoFocus: n ? l : !1,
      fullWidth: !0,
      size: "small",
      variant: "outlined",
      label: r("CHAT.MESSAGE.SEARCH", "Поиск сообщений"),
      value: s,
      onChange: y,
      onKeyDown: h,
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
                children: /* @__PURE__ */ c(Ds, { fontSize: "small" })
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
  return n ? /* @__PURE__ */ N(U.Fragment, { children: [
    /* @__PURE__ */ c(
      No,
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
        onClose: g,
        disableAutoFocus: !0,
        disableEnforceFocus: !0,
        keepMounted: !0,
        children: /* @__PURE__ */ c(V, { sx: { px: 2, py: 1.5, width: Ct }, children: E })
      }
    )
  ] }) : /* @__PURE__ */ c(V, { sx: { width: Ct }, children: E });
}, Do = Z(
  (t) => ge({
    paper: {
      padding: t.spacing(1)
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff"
    }
  })
), Mo = (t, e) => {
  const r = [`${Array.isArray(t.members) ? t.members.length : 0} ${e("CHAT.MEMBERS")}`], s = (t.members || []).reduce(
    (o, i) => i.online ? o + 1 : o,
    0
  );
  return s && r.push(`${s} ${e("CHAT.STATUS.ONLINE")}`), r.join(", ");
}, Po = ({
  apiUrl: t,
  user: e,
  chat: n,
  typing: r,
  conference: s,
  className: o,
  operators: i,
  visitData: a,
  messageSearch: l,
  onVideoCall: u,
  onOperatorAdd: d,
  onLeaveGroup: g,
  onContactClick: y,
  onMessageSearchChange: S
}) => {
  const h = Do(), { t: E } = oe(), b = Jn(
    (f) => f.breakpoints.down("md")
  ), [A, D] = re(null), [v, x] = re(!1), k = se(null), O = n, F = !!(r && r.contactId && r.userId === O.userId), H = s != null && !ze(s), K = b || H, I = e.role != null && [3, 4].includes(e.role), M = !H && I && typeof u == "function";
  if (!n)
    return /* @__PURE__ */ c(
      rt,
      {
        avatar: /* @__PURE__ */ c(Ee, {}),
        title: "",
        subheader: "",
        className: o
      }
    );
  const q = Y(() => {
    D(null), k.current && (clearTimeout(k.current), k.current = null);
  }, []), z = Y(
    (f) => {
      D((p) => p ?? f.currentTarget), k.current && (clearTimeout(k.current), k.current = null);
    },
    []
  ), T = Y(() => {
    k.current || (k.current = setTimeout(() => {
      q();
    }, 1e3));
  }, [q]), C = Y(() => {
    x(!0);
  }, []), _ = Y(
    (f) => {
      x(!1), d && f && n && d(n, f);
    },
    [n, d]
  ), w = n;
  return w.groupId ? /* @__PURE__ */ c(ye, { children: /* @__PURE__ */ c(
    rt,
    {
      avatar: /* @__PURE__ */ c(Ee, { alt: w.name, className: h.avatarGroup, children: /* @__PURE__ */ c(rr, {}) }),
      title: w.name,
      subheader: /* @__PURE__ */ N(U.Fragment, { children: [
        /* @__PURE__ */ c(
          "span",
          {
            id: "mouse-over-span",
            "aria-owns": A ? "mouse-over-popover" : void 0,
            "aria-haspopup": "true",
            onMouseEnter: z,
            onMouseLeave: T,
            children: Mo(w, E)
          }
        ),
        /* @__PURE__ */ c(
          Yn,
          {
            id: "mouse-over-popover",
            classes: {
              paper: h.paper
            },
            sx: { pointerEvents: "none" },
            open: !!A,
            anchorEl: A,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            onClose: q,
            disableRestoreFocus: !0,
            children: /* @__PURE__ */ c(
              ur,
              {
                apiUrl: t,
                contacts: w.members,
                onContactClick: y,
                owner: w.userId,
                onMouseEnter: z,
                onMouseLeave: T,
                sx: { pointerEvents: "all" }
              }
            )
          }
        )
      ] }),
      className: o,
      action: /* @__PURE__ */ N(
        V,
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
                value: l,
                onChange: S,
                inMobileOrConferenceActive: K
              }
            ),
            e.role === 4 && /* @__PURE__ */ N(U.Fragment, { children: [
              /* @__PURE__ */ c(
                be,
                {
                  "aria-label": "add user",
                  onClick: C,
                  children: /* @__PURE__ */ c(Ss, {})
                }
              ),
              /* @__PURE__ */ c(
                Xs,
                {
                  apiUrl: t,
                  open: v,
                  contacts: i,
                  onClose: _
                }
              )
            ] }),
            e.role === 4 && Array.isArray(w.members) && w.members.some(
              (f) => f.userId !== e.userId && f.role === 4
            ) && g && /* @__PURE__ */ c(
              be,
              {
                "aria-label": "leave group",
                onClick: () => g(w),
                children: /* @__PURE__ */ c(tr, {})
              }
            )
          ]
        }
      )
    }
  ) }) : /* @__PURE__ */ c(ye, { children: /* @__PURE__ */ c(
    rt,
    {
      avatar: /* @__PURE__ */ c(
        Ee,
        {
          alt: O.username,
          src: O.avatar ? Te(t, O.avatar) : ""
        }
      ),
      title: /* @__PURE__ */ c(
        ne,
        {
          variant: "h6",
          sx: (f) => ({
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "0.9rem",
            [f.breakpoints.down("md")]: {
              fontSize: "0.8rem"
            },
            [f.breakpoints.down("sm")]: {
              whiteSpace: "wrap",
              fontSize: "0.7rem"
            }
          }),
          children: O.username
        }
      ),
      subheader: /* @__PURE__ */ c(lr, { contact: O, isTyping: F }),
      className: o,
      action: /* @__PURE__ */ c(ye, { children: /* @__PURE__ */ N(
        V,
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
                value: l,
                onChange: S,
                inMobileOrConferenceActive: K
              }
            ),
            M && u && /* @__PURE__ */ c(
              ko,
              {
                visitData: a,
                chat: O,
                onVideoCall: u
              }
            )
          ]
        }
      ) })
    }
  ) });
};
function Lo() {
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
var Uo = "0px", Bo = [0], Fo = Lo();
function $o(t) {
  let e = t?.rootMargin ?? Uo, n = t?.threshold ?? Bo, r = se(null), s = se(null), o = se(null), [i, a] = re(), l = Y(() => {
    let y = r.current;
    if (!y) {
      a(void 0);
      return;
    }
    let S = Fo.getObserver({ root: s.current, rootMargin: e, threshold: n });
    S.observe(y, (h) => {
      a(h);
    }), o.current = S;
  }, [e, n]), u = Y(() => {
    let y = o.current, S = r.current;
    S && y?.unobserve(S), o.current = null;
  }, []), d = Y((y) => {
    u(), r.current = y, l();
  }, [l, u]), g = Y((y) => {
    u(), s.current = y, l();
  }, [l, u]);
  return [d, { entry: i, rootRef: g }];
}
var jo = $o;
function Go(t) {
  let [e, n] = jo(t), r = !!n.entry?.isIntersecting, [s, o] = re(r);
  return r && !s && o(!0), [e, { ...n, isVisible: r, wasEverVisible: s }];
}
var Ho = Go, qo = 100;
function Vo({ loading: t, hasNextPage: e, onLoadMore: n, rootMargin: r, disabled: s, delayInMs: o = qo }) {
  let i = se(n), [a, { rootRef: l, isVisible: u }] = Ho({ rootMargin: r });
  Q(() => {
    i.current = n;
  }, [n]);
  let d = !s && !t && u && e;
  return Q(() => {
    if (d) {
      let g = setTimeout(() => {
        i.current();
      }, o);
      return () => {
        clearTimeout(g);
      };
    }
  }, [d, o]), [a, { rootRef: l }];
}
var zo = Vo;
function Wo(t, e, n) {
  const r = se(t);
  Q(() => {
    r.current = t;
  }, [t]), Q(() => {
    if (!e)
      return;
    const o = setInterval(() => {
      r.current();
    }, n);
    return () => clearInterval(o);
  }, [e, n]);
}
function Yo(t, e) {
  const n = t.getBoundingClientRect();
  return n.top >= 150 && n.bottom <= e.clientHeight;
}
const Ko = ({
  chatId: t,
  messages: e,
  scrollableRootRef: n,
  pageSize: r,
  hasNextPage: s,
  chat: o,
  onEnterRoom: i,
  setIsVisible: a
}) => {
  const [l, u] = re(!1), d = se(), g = se(), y = e?.length || 0, S = y && e[y - 1], h = 900, E = Y(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight, i && o && i(o));
  }, [t, i]), b = Y(() => {
    const A = n.current;
    if (A) {
      const D = A.scrollHeight - A.scrollTop;
      d.current = D;
      const v = s && D > h;
      u(v);
      for (let x = 0; x < y; x++) {
        const k = e[x];
        if (k?.ref?.current) {
          if (Yo(k.ref.current, A)) {
            a(k.cdate);
            break;
          }
        } else
          break;
      }
    }
  }, [e, t]);
  return Q(() => {
    t && n.current && e.length && (a(e[y - 1]?.cdate ?? ""), E());
  }, [t]), Q(() => {
    const A = n.current, D = d.current ?? 0;
    A && S && o && (g.current === y - r ? A.scrollTop = A.scrollHeight - D : (
      // -----  scroll to bottom forced -----------
      (S.userId !== o.userId || D <= h) && E()
    )), g.current = y;
  }, [y, t]), {
    scrollDown: E,
    handleRootScroll: b,
    scrollDownButton: l,
    setScrollDownButton: u,
    unreadCount: e.filter((A) => A.status === 0).length
  };
}, Jo = ({
  date: t
}) => /* @__PURE__ */ c(V, { sx: { position: "relative", height: 0, margin: "8px 0" }, children: /* @__PURE__ */ c(cs, { in: !!t, timeout: 2e3, children: /* @__PURE__ */ c(
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
    children: /* @__PURE__ */ c(ne, { variant: "h6", textAlign: "center", children: t && De(t).format("DD.MM.YYYY") })
  }
) }) }), Xo = Z((t) => ({
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
})), Qo = ({
  visible: t,
  unreadCount: e,
  onScrollDown: n
}) => {
  const r = Xo();
  return t ? /* @__PURE__ */ N(V, { className: r.arrowDown, textAlign: "center", children: [
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
          ne,
          {
            variant: "body2",
            sx: (s) => ({ color: s.palette.background.default }),
            children: e
          }
        )
      }
    )
  ] }) : null;
}, Zo = Z((t) => ({
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
})), ei = ({
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
  messageSearch: g
}) => {
  const y = Zo(), S = U.useRef(null), h = U.useRef({}), E = U.useMemo(() => Se(r), [r]), [b, A] = U.useState({
    visible: !1,
    src: ""
  }), [D, v] = U.useState(""), x = U.useMemo(() => (r?.messages || []).map((w, f) => {
    const p = w._id != null ? String(w._id) : `${w.userId}-${w.cdate}-${f}`;
    return h.current[p] || (h.current[p] = U.createRef()), {
      ...w,
      ref: h.current[p]
    };
  }), [r?.messages]), k = g.trim().toLowerCase(), O = U.useMemo(() => k ? x.filter((w) => w.content ? String(w.content).toLowerCase().includes(k) : !1) : x, [x, k]), F = r?.noMoreData !== !0;
  U.useEffect(() => {
    h.current = {};
  }, [E]);
  const { scrollDown: H, handleRootScroll: K, scrollDownButton: I, unreadCount: M } = Ko({
    chatId: E,
    messages: O,
    scrollableRootRef: S,
    pageSize: o,
    hasNextPage: F,
    chat: r,
    onEnterRoom: d,
    setIsVisible: v
  }), [q, { rootRef: z }] = zo({
    loading: s,
    hasNextPage: F,
    onLoadMore: () => r && a(r),
    disabled: !F
  }), T = U.useCallback(
    (w) => {
      z(w), S.current = w;
    },
    [z]
  );
  Wo(
    () => {
      v("");
    },
    D,
    4700
  );
  const C = U.useCallback(
    (w, f) => {
      const p = w.messageType === "text", R = e.userId === w.userId && !!l && (/* @__PURE__ */ new Date()).getTime() - new Date(w.cdate).getTime() <= 1e3 * 60 * 2;
      if (!p && !R) {
        u(i);
        return;
      }
      f.preventDefault(), u({
        message: w,
        mouseX: f.clientX - 2,
        mouseY: f.clientY - 4,
        canCopy: p,
        canDelete: R
      });
    },
    [i, l, u, e.userId]
  );
  if (!E) return null;
  const _ = U.useMemo(
    () => O.map((w, f) => /* @__PURE__ */ c(
      fr,
      {
        ref: w.ref,
        apiUrl: t,
        user: e,
        message: w,
        owner: n[w.userId],
        isGroupMessage: !!r?.groupId,
        isUserFirst: f === 0 || O[f - 1].messageType === "notify" || O[f - 1].userId !== O[f].userId,
        isUserLast: f === O.length - 1 || O[f + 1]?.messageType === "notify" || O[f + 1]?.userId !== O[f].userId,
        onContextMenu: (p) => C(w, p),
        setViewerData: A
      },
      w._id ?? `${w.userId}-${w.cdate}-${f}`
    )),
    [
      O,
      t,
      e,
      n,
      r?.groupId,
      C,
      A
    ]
  );
  return /* @__PURE__ */ N(ye, { children: [
    /* @__PURE__ */ c(Jo, { date: D }),
    /* @__PURE__ */ N(
      Xn,
      {
        className: y.messageListOuter,
        ref: T,
        onScroll: K,
        children: [
          /* @__PURE__ */ N(jn, { className: y.messageList, children: [
            F && /* @__PURE__ */ c(nt, { ref: q, sx: { justifyContent: "center" }, children: /* @__PURE__ */ c(Wn, {}) }),
            _
          ] }),
          /* @__PURE__ */ c(
            Qo,
            {
              visible: I,
              unreadCount: M,
              onScrollDown: H
            }
          ),
          b.visible && /* @__PURE__ */ c(
            ls,
            {
              sx: {
                color: "#fff",
                zIndex: (w) => w.zIndex.drawer + 1
              },
              open: b.visible,
              onClick: () => A({ visible: !1, src: "" }),
              children: /* @__PURE__ */ c("img", { src: b.src, className: y.img, alt: "" })
            }
          )
        ]
      }
    )
  ] });
}, ti = Z(
  (t) => ge({
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
}, ni = (t) => {
  const {
    apiUrl: e,
    user: n,
    users: r,
    chat: s,
    typing: o,
    conference: i,
    visitData: a,
    loading: l,
    pageSize: u,
    onEnterRoom: d,
    operators: g,
    messageSearch: y,
    onVideoCall: S,
    onOperatorAdd: h,
    onLeaveGroup: E,
    onContactClick: b,
    onNeedMoreMessages: A,
    onMessageDelete: D,
    onTyping: v,
    onSendMessage: x,
    onMessageSearchChange: k
  } = t, O = ti(), { t: F } = oe(), [H, K] = U.useState(Tt), I = U.useCallback(() => {
    K(Tt);
  }, []), M = U.useCallback(() => {
    I();
  }, [I]), q = Y(() => {
    const { message: T } = H;
    I(), T?.content && typeof navigator < "u" && navigator.clipboard?.writeText && navigator.clipboard.writeText(T.content).catch(() => {
      console.warn("Copy failed");
    });
  }, [H.message, I]), z = Y(() => {
    const { message: T } = H;
    I(), s && T && D && D(s, T);
  }, [H.message, I, s, D]);
  return /* @__PURE__ */ N(Qn, { elevation: 1, className: O.root, children: [
    /* @__PURE__ */ c(V, { display: "flex", flexDirection: "row", children: /* @__PURE__ */ c(
      Po,
      {
        apiUrl: e,
        user: n,
        chat: s,
        typing: o,
        conference: i,
        visitData: a,
        operators: g,
        className: O.roomHeader,
        onVideoCall: S,
        onOperatorAdd: h,
        onLeaveGroup: E,
        onContactClick: b,
        messageSearch: y,
        onMessageSearchChange: k
      }
    ) }),
    /* @__PURE__ */ c(Nt, {}),
    /* @__PURE__ */ c(
      ei,
      {
        apiUrl: e,
        user: n,
        users: r,
        chat: s,
        loading: l,
        pageSize: u,
        initialMenuState: Tt,
        onNeedMoreMessages: A,
        onMessageDelete: D,
        setMenuState: K,
        onEnterRoom: d,
        messageSearch: y
      }
    ),
    /* @__PURE__ */ c(Nt, {}),
    /* @__PURE__ */ c(Xn, { children: /* @__PURE__ */ c(
      Oo,
      {
        chat: s,
        onTyping: v,
        onSendMessage: x
      }
    ) }),
    /* @__PURE__ */ N(
      Kn,
      {
        keepMounted: !0,
        open: H.mouseY !== null,
        onClose: M,
        anchorReference: "anchorPosition",
        anchorPosition: H.mouseY !== null && H.mouseX !== null ? { top: H.mouseY, left: H.mouseX } : void 0,
        children: [
          /* @__PURE__ */ N(cn, { onClick: q, disabled: !H.canCopy, children: [
            /* @__PURE__ */ c("span", { className: O.flexAll, children: F("CHAT.MESSAGE.MENU.COPY") }),
            /* @__PURE__ */ c(ln, { className: O.flexEnd, children: /* @__PURE__ */ c(ms, { fontSize: "small" }) })
          ] }),
          /* @__PURE__ */ N(cn, { onClick: z, disabled: !H.canDelete, children: [
            /* @__PURE__ */ c("span", { className: O.flexAll, children: F("CHAT.MESSAGE.MENU.DELETE") }),
            /* @__PURE__ */ c(ln, { className: O.flexEnd, children: /* @__PURE__ */ c(tr, { fontSize: "small" }) })
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
const { toString: ri } = Object.prototype, { getPrototypeOf: Kt } = Object, { iterator: gt, toStringTag: pr } = Symbol, yt = /* @__PURE__ */ ((t) => (e) => {
  const n = ri.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), fe = (t) => (t = t.toLowerCase(), (e) => yt(e) === t), Et = (t) => (e) => typeof e === t, { isArray: Le } = Array, Pe = Et("undefined");
function We(t) {
  return t !== null && !Pe(t) && t.constructor !== null && !Pe(t.constructor) && ae(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const mr = fe("ArrayBuffer");
function si(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && mr(t.buffer), e;
}
const oi = Et("string"), ae = Et("function"), gr = Et("number"), Ye = (t) => t !== null && typeof t == "object", ii = (t) => t === !0 || t === !1, ot = (t) => {
  if (yt(t) !== "object")
    return !1;
  const e = Kt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(pr in t) && !(gt in t);
}, ai = (t) => {
  if (!Ye(t) || We(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, ci = fe("Date"), li = fe("File"), ui = fe("Blob"), di = fe("FileList"), fi = (t) => Ye(t) && ae(t.pipe), hi = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ae(t.append) && ((e = yt(t)) === "formdata" || // detect form-data instance
  e === "object" && ae(t.toString) && t.toString() === "[object FormData]"));
}, pi = fe("URLSearchParams"), [mi, gi, yi, Ei] = ["ReadableStream", "Request", "Response", "Headers"].map(fe), bi = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ke(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), Le(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    if (We(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], e.call(null, t[a], a, t);
  }
}
function yr(t, e) {
  if (We(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Er = (t) => !Pe(t) && t !== xe;
function Mt() {
  const { caseless: t, skipUndefined: e } = Er(this) && this || {}, n = {}, r = (s, o) => {
    const i = t && yr(n, o) || o;
    ot(n[i]) && ot(s) ? n[i] = Mt(n[i], s) : ot(s) ? n[i] = Mt({}, s) : Le(s) ? n[i] = s.slice() : (!e || !Pe(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Ke(arguments[s], r);
  return n;
}
const Si = (t, e, n, { allOwnKeys: r } = {}) => (Ke(e, (s, o) => {
  n && ae(s) ? t[o] = hr(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), wi = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), _i = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Ri = (t, e, n, r) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && Kt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Ci = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Ti = (t) => {
  if (!t) return null;
  if (Le(t)) return t;
  let e = t.length;
  if (!gr(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Ai = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Kt(Uint8Array)), vi = (t, e) => {
  const r = (t && t[gt]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, Oi = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, xi = fe("HTMLFormElement"), Ii = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), En = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), ki = fe("RegExp"), br = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ke(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, Ni = (t) => {
  br(t, (e, n) => {
    if (ae(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (ae(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Di = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Le(t) ? r(t) : r(String(t).split(e)), n;
}, Mi = () => {
}, Pi = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Li(t) {
  return !!(t && ae(t.append) && t[pr] === "FormData" && t[gt]);
}
const Ui = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (Ye(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (We(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = Le(r) ? [] : {};
        return Ke(r, (i, a) => {
          const l = n(i, s + 1);
          !Pe(l) && (o[a] = l);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, Bi = fe("AsyncFunction"), Fi = (t) => t && (Ye(t) || ae(t)) && ae(t.then) && ae(t.catch), Sr = ((t, e) => t ? setImmediate : e ? ((n, r) => (xe.addEventListener("message", ({ source: s, data: o }) => {
  s === xe && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), xe.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ae(xe.postMessage)
), $i = typeof queueMicrotask < "u" ? queueMicrotask.bind(xe) : typeof process < "u" && process.nextTick || Sr, ji = (t) => t != null && ae(t[gt]), m = {
  isArray: Le,
  isArrayBuffer: mr,
  isBuffer: We,
  isFormData: hi,
  isArrayBufferView: si,
  isString: oi,
  isNumber: gr,
  isBoolean: ii,
  isObject: Ye,
  isPlainObject: ot,
  isEmptyObject: ai,
  isReadableStream: mi,
  isRequest: gi,
  isResponse: yi,
  isHeaders: Ei,
  isUndefined: Pe,
  isDate: ci,
  isFile: li,
  isBlob: ui,
  isRegExp: ki,
  isFunction: ae,
  isStream: fi,
  isURLSearchParams: pi,
  isTypedArray: Ai,
  isFileList: di,
  forEach: Ke,
  merge: Mt,
  extend: Si,
  trim: bi,
  stripBOM: wi,
  inherits: _i,
  toFlatObject: Ri,
  kindOf: yt,
  kindOfTest: fe,
  endsWith: Ci,
  toArray: Ti,
  forEachEntry: vi,
  matchAll: Oi,
  isHTMLForm: xi,
  hasOwnProperty: En,
  hasOwnProp: En,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: br,
  freezeMethods: Ni,
  toObjectSet: Di,
  toCamelCase: Ii,
  noop: Mi,
  toFiniteNumber: Pi,
  findKey: yr,
  global: xe,
  isContextDefined: Er,
  isSpecCompliantForm: Li,
  toJSONObject: Ui,
  isAsyncFn: Bi,
  isThenable: Fi,
  setImmediate: Sr,
  asap: $i,
  isIterable: ji
};
function B(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
m.inherits(B, Error, {
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
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const wr = B.prototype, _r = {};
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
  _r[t] = { value: t };
});
Object.defineProperties(B, _r);
Object.defineProperty(wr, "isAxiosError", { value: !0 });
B.from = (t, e, n, r, s, o) => {
  const i = Object.create(wr);
  m.toFlatObject(t, i, function(d) {
    return d !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = t && t.message ? t.message : "Error", l = e == null && t ? t.code : e;
  return B.call(i, a, l, n, r, s), t && i.cause == null && Object.defineProperty(i, "cause", { value: t, configurable: !0 }), i.name = t && t.name || "Error", o && Object.assign(i, o), i;
};
const Gi = null;
function Pt(t) {
  return m.isPlainObject(t) || m.isArray(t);
}
function Rr(t) {
  return m.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function bn(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = Rr(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function Hi(t) {
  return m.isArray(t) && !t.some(Pt);
}
const qi = m.toFlatObject(m, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function bt(t, e, n) {
  if (!m.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = m.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, b) {
    return !m.isUndefined(b[E]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(e);
  if (!m.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (m.isDate(h))
      return h.toISOString();
    if (m.isBoolean(h))
      return h.toString();
    if (!l && m.isBlob(h))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(h) || m.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, E, b) {
    let A = h;
    if (h && !b && typeof h == "object") {
      if (m.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), h = JSON.stringify(h);
      else if (m.isArray(h) && Hi(h) || (m.isFileList(h) || m.endsWith(E, "[]")) && (A = m.toArray(h)))
        return E = Rr(E), A.forEach(function(v, x) {
          !(m.isUndefined(v) || v === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bn([E], x, o) : i === null ? E : E + "[]",
            u(v)
          );
        }), !1;
    }
    return Pt(h) ? !0 : (e.append(bn(b, E, o), u(h)), !1);
  }
  const g = [], y = Object.assign(qi, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Pt
  });
  function S(h, E) {
    if (!m.isUndefined(h)) {
      if (g.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      g.push(h), m.forEach(h, function(A, D) {
        (!(m.isUndefined(A) || A === null) && s.call(
          e,
          A,
          m.isString(D) ? D.trim() : D,
          E,
          y
        )) === !0 && S(A, E ? E.concat(D) : [D]);
      }), g.pop();
    }
  }
  if (!m.isObject(t))
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
function Vi(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Tr(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Vi;
  m.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = m.isURLSearchParams(e) ? e.toString() : new Jt(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class wn {
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
    m.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Ar = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zi = typeof URLSearchParams < "u" ? URLSearchParams : Jt, Wi = typeof FormData < "u" ? FormData : null, Yi = typeof Blob < "u" ? Blob : null, Ki = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zi,
    FormData: Wi,
    Blob: Yi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xt = typeof window < "u" && typeof document < "u", Lt = typeof navigator == "object" && navigator || void 0, Ji = Xt && (!Lt || ["ReactNative", "NativeScript", "NS"].indexOf(Lt.product) < 0), Xi = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Qi = Xt && window.location.href || "http://localhost", Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xt,
  hasStandardBrowserEnv: Ji,
  hasStandardBrowserWebWorkerEnv: Xi,
  navigator: Lt,
  origin: Qi
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...Zi,
  ...Ki
};
function ea(t, e) {
  return bt(t, new te.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return te.isNode && m.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function ta(t) {
  return m.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function na(t) {
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
    return i = !i && m.isArray(s) ? s.length : i, l ? (m.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !m.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && m.isArray(s[i]) && (s[i] = na(s[i])), !a);
  }
  if (m.isFormData(t) && m.isFunction(t.entries)) {
    const n = {};
    return m.forEachEntry(t, (r, s) => {
      e(ta(r), s, n, 0);
    }), n;
  }
  return null;
}
function ra(t, e, n) {
  if (m.isString(t))
    try {
      return (e || JSON.parse)(t), m.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Je = {
  transitional: Ar,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = m.isObject(e);
    if (o && m.isHTMLForm(e) && (e = new FormData(e)), m.isFormData(e))
      return s ? JSON.stringify(vr(e)) : e;
    if (m.isArrayBuffer(e) || m.isBuffer(e) || m.isStream(e) || m.isFile(e) || m.isBlob(e) || m.isReadableStream(e))
      return e;
    if (m.isArrayBufferView(e))
      return e.buffer;
    if (m.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ea(e, this.formSerializer).toString();
      if ((a = m.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return bt(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ra(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Je.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (m.isResponse(e) || m.isReadableStream(e))
      return e;
    if (e && m.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? B.from(a, B.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
m.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Je.headers[t] = {};
});
const sa = m.toObjectSet([
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
]), oa = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && sa[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, _n = Symbol("internals");
function He(t) {
  return t && String(t).trim().toLowerCase();
}
function it(t) {
  return t === !1 || t == null ? t : m.isArray(t) ? t.map(it) : String(t);
}
function ia(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const aa = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function At(t, e, n, r, s) {
  if (m.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!m.isString(e)) {
    if (m.isString(r))
      return e.indexOf(r) !== -1;
    if (m.isRegExp(r))
      return r.test(e);
  }
}
function ca(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function la(t, e) {
  const n = m.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
let ce = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(a, l, u) {
      const d = He(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = m.findKey(s, d);
      (!g || s[g] === void 0 || u === !0 || u === void 0 && s[g] !== !1) && (s[g || l] = it(a));
    }
    const i = (a, l) => m.forEach(a, (u, d) => o(u, d, l));
    if (m.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (m.isString(e) && (e = e.trim()) && !aa(e))
      i(oa(e), n);
    else if (m.isObject(e) && m.isIterable(e)) {
      let a = {}, l, u;
      for (const d of e) {
        if (!m.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = d[0]] = (l = a[u]) ? m.isArray(l) ? [...l, d[1]] : [l, d[1]] : d[1];
      }
      i(a, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = He(e), e) {
      const r = m.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ia(s);
        if (m.isFunction(n))
          return n.call(this, s, r);
        if (m.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = He(e), e) {
      const r = m.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || At(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = He(i), i) {
        const a = m.findKey(r, i);
        a && (!n || At(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return m.isArray(e) ? e.forEach(o) : o(e), s;
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
    return m.forEach(this, (s, o) => {
      const i = m.findKey(r, o);
      if (i) {
        n[i] = it(s), delete n[o];
        return;
      }
      const a = e ? ca(o) : String(o).trim();
      a !== o && delete n[o], n[a] = it(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && m.isArray(r) ? r.join(", ") : r);
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
    const r = (this[_n] = this[_n] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = He(i);
      r[a] || (la(s, i), r[a] = !0);
    }
    return m.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(ce.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
m.freezeMethods(ce);
function vt(t, e) {
  const n = this || Je, r = e || n, s = ce.from(r.headers);
  let o = r.data;
  return m.forEach(t, function(a) {
    o = a.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Or(t) {
  return !!(t && t.__CANCEL__);
}
function Ue(t, e, n) {
  B.call(this, t ?? "canceled", B.ERR_CANCELED, e, n), this.name = "CanceledError";
}
m.inherits(Ue, B, {
  __CANCEL__: !0
});
function xr(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new B(
    "Request failed with status code " + n.status,
    [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ua(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function da(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), d = r[o];
    i || (i = u), n[s] = l, r[s] = u;
    let g = o, y = 0;
    for (; g !== s; )
      y += n[g++], g = g % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - i < e)
      return;
    const S = d && u - d;
    return S ? Math.round(y * 1e3 / S) : void 0;
  };
}
function fa(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (u, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), t(...u);
  };
  return [(...u) => {
    const d = Date.now(), g = d - n;
    g >= r ? i(u, d) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - g)));
  }, () => s && i(s)];
}
const pt = (t, e, n = 3) => {
  let r = 0;
  const s = da(50, 250);
  return fa((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, u = s(l), d = i <= a;
    r = i;
    const g = {
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
    t(g);
  }, n);
}, Rn = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Cn = (t) => (...e) => m.asap(() => t(...e)), ha = te.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, te.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(te.origin),
  te.navigator && /(msie|trident)/i.test(te.navigator.userAgent)
) : () => !0, pa = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o) {
      const i = [t + "=" + encodeURIComponent(e)];
      m.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), m.isString(r) && i.push("path=" + r), m.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function ma(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function ga(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ir(t, e, n) {
  let r = !ma(e);
  return t && (r || n == !1) ? ga(t, e) : e;
}
const Tn = (t) => t instanceof ce ? { ...t } : t;
function ke(t, e) {
  e = e || {};
  const n = {};
  function r(u, d, g, y) {
    return m.isPlainObject(u) && m.isPlainObject(d) ? m.merge.call({ caseless: y }, u, d) : m.isPlainObject(d) ? m.merge({}, d) : m.isArray(d) ? d.slice() : d;
  }
  function s(u, d, g, y) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(u))
        return r(void 0, u, g, y);
    } else return r(u, d, g, y);
  }
  function o(u, d) {
    if (!m.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, g) {
    if (g in e)
      return r(u, d);
    if (g in t)
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
    headers: (u, d, g) => s(Tn(u), Tn(d), g, !0)
  };
  return m.forEach(Object.keys({ ...t, ...e }), function(d) {
    const g = l[d] || s, y = g(t[d], e[d], d);
    m.isUndefined(y) && g !== a || (n[d] = y);
  }), n;
}
const kr = (t) => {
  const e = ke({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
  if (e.headers = i = ce.from(i), e.url = Tr(Ir(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), m.isFormData(n)) {
    if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (m.isFunction(n.getHeaders)) {
      const l = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([d, g]) => {
        u.includes(d.toLowerCase()) && i.set(d, g);
      });
    }
  }
  if (te.hasStandardBrowserEnv && (r && m.isFunction(r) && (r = r(e)), r || r !== !1 && ha(e.url))) {
    const l = s && o && pa.read(o);
    l && i.set(s, l);
  }
  return e;
}, ya = typeof XMLHttpRequest < "u", Ea = ya && function(t) {
  return new Promise(function(n, r) {
    const s = kr(t);
    let o = s.data;
    const i = ce.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = s, d, g, y, S, h;
    function E() {
      S && S(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function A() {
      if (!b)
        return;
      const v = ce.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), k = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: v,
        config: t,
        request: b
      };
      xr(function(F) {
        n(F), E();
      }, function(F) {
        r(F), E();
      }, k), b = null;
    }
    "onloadend" in b ? b.onloadend = A : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, b.onabort = function() {
      b && (r(new B("Request aborted", B.ECONNABORTED, t, b)), b = null);
    }, b.onerror = function(x) {
      const k = x && x.message ? x.message : "Network Error", O = new B(k, B.ERR_NETWORK, t, b);
      O.event = x || null, r(O), b = null;
    }, b.ontimeout = function() {
      let x = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const k = s.transitional || Ar;
      s.timeoutErrorMessage && (x = s.timeoutErrorMessage), r(new B(
        x,
        k.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
        t,
        b
      )), b = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in b && m.forEach(i.toJSON(), function(x, k) {
      b.setRequestHeader(k, x);
    }), m.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), a && a !== "json" && (b.responseType = s.responseType), u && ([y, h] = pt(u, !0), b.addEventListener("progress", y)), l && b.upload && ([g, S] = pt(l), b.upload.addEventListener("progress", g), b.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (d = (v) => {
      b && (r(!v || v.type ? new Ue(null, t, b) : v), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const D = ua(s.url);
    if (D && te.protocols.indexOf(D) === -1) {
      r(new B("Unsupported protocol " + D + ":", B.ERR_BAD_REQUEST, t));
      return;
    }
    b.send(o || null);
  });
}, ba = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, a();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof B ? d : new Ue(d instanceof Error ? d.message : d));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new B(`timeout ${e} of ms exceeded`, B.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: l } = r;
    return l.unsubscribe = () => m.asap(a), l;
  }
}, Sa = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, wa = async function* (t, e) {
  for await (const n of _a(t))
    yield* Sa(n, e);
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
  const s = wa(t, e);
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
        let g = d.byteLength;
        if (n) {
          let y = o += g;
          n(y);
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
}, vn = 64 * 1024, { isFunction: Ze } = m, Ra = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(m.global), {
  ReadableStream: On,
  TextEncoder: xn
} = m.global, In = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Ca = (t) => {
  t = m.merge.call({
    skipUndefined: !0
  }, Ra, t);
  const { fetch: e, Request: n, Response: r } = t, s = e ? Ze(e) : typeof fetch == "function", o = Ze(n), i = Ze(r);
  if (!s)
    return !1;
  const a = s && Ze(On), l = s && (typeof xn == "function" ? /* @__PURE__ */ ((h) => (E) => h.encode(E))(new xn()) : async (h) => new Uint8Array(await new n(h).arrayBuffer())), u = o && a && In(() => {
    let h = !1;
    const E = new n(te.origin, {
      body: new On(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !E;
  }), d = i && a && In(() => m.isReadableStream(new r("").body)), g = {
    stream: d && ((h) => h.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !g[h] && (g[h] = (E, b) => {
      let A = E && E[h];
      if (A)
        return A.call(E);
      throw new B(`Response type '${h}' is not supported`, B.ERR_NOT_SUPPORT, b);
    });
  });
  const y = async (h) => {
    if (h == null)
      return 0;
    if (m.isBlob(h))
      return h.size;
    if (m.isSpecCompliantForm(h))
      return (await new n(te.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (m.isArrayBufferView(h) || m.isArrayBuffer(h))
      return h.byteLength;
    if (m.isURLSearchParams(h) && (h = h + ""), m.isString(h))
      return (await l(h)).byteLength;
  }, S = async (h, E) => {
    const b = m.toFiniteNumber(h.getContentLength());
    return b ?? y(E);
  };
  return async (h) => {
    let {
      url: E,
      method: b,
      data: A,
      signal: D,
      cancelToken: v,
      timeout: x,
      onDownloadProgress: k,
      onUploadProgress: O,
      responseType: F,
      headers: H,
      withCredentials: K = "same-origin",
      fetchOptions: I
    } = kr(h), M = e || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let q = ba([D, v && v.toAbortSignal()], x), z = null;
    const T = q && q.unsubscribe && (() => {
      q.unsubscribe();
    });
    let C;
    try {
      if (O && u && b !== "get" && b !== "head" && (C = await S(H, A)) !== 0) {
        let P = new n(E, {
          method: "POST",
          body: A,
          duplex: "half"
        }), $;
        if (m.isFormData(A) && ($ = P.headers.get("content-type")) && H.setContentType($), P.body) {
          const [L, j] = Rn(
            C,
            pt(Cn(O))
          );
          A = An(P.body, vn, L, j);
        }
      }
      m.isString(K) || (K = K ? "include" : "omit");
      const _ = o && "credentials" in n.prototype, w = {
        ...I,
        signal: q,
        method: b.toUpperCase(),
        headers: H.normalize().toJSON(),
        body: A,
        duplex: "half",
        credentials: _ ? K : void 0
      };
      z = o && new n(E, w);
      let f = await (o ? M(z, I) : M(E, w));
      const p = d && (F === "stream" || F === "response");
      if (d && (k || p && T)) {
        const P = {};
        ["status", "statusText", "headers"].forEach((ee) => {
          P[ee] = f[ee];
        });
        const $ = m.toFiniteNumber(f.headers.get("content-length")), [L, j] = k && Rn(
          $,
          pt(Cn(k), !0)
        ) || [];
        f = new r(
          An(f.body, vn, L, () => {
            j && j(), T && T();
          }),
          P
        );
      }
      F = F || "text";
      let R = await g[m.findKey(g, F) || "text"](f, h);
      return !p && T && T(), await new Promise((P, $) => {
        xr(P, $, {
          data: R,
          headers: ce.from(f.headers),
          status: f.status,
          statusText: f.statusText,
          config: h,
          request: z
        });
      });
    } catch (_) {
      throw T && T(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
        new B("Network Error", B.ERR_NETWORK, h, z),
        {
          cause: _.cause || _
        }
      ) : B.from(_, _ && _.code, h, z);
    }
  };
}, Ta = /* @__PURE__ */ new Map(), Nr = (t) => {
  let e = t ? t.env : {};
  const { fetch: n, Request: r, Response: s } = e, o = [
    r,
    s,
    n
  ];
  let i = o.length, a = i, l, u, d = Ta;
  for (; a--; )
    l = o[a], u = d.get(l), u === void 0 && d.set(l, u = a ? /* @__PURE__ */ new Map() : Ca(e)), d = u;
  return u;
};
Nr();
const Ut = {
  http: Gi,
  xhr: Ea,
  fetch: {
    get: Nr
  }
};
m.forEach(Ut, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const kn = (t) => `- ${t}`, Aa = (t) => m.isFunction(t) || t === null || t === !1, Dr = {
  getAdapter: (t, e) => {
    t = m.isArray(t) ? t : [t];
    const { length: n } = t;
    let r, s;
    const o = {};
    for (let i = 0; i < n; i++) {
      r = t[i];
      let a;
      if (s = r, !Aa(r) && (s = Ut[(a = String(r)).toLowerCase()], s === void 0))
        throw new B(`Unknown adapter '${a}'`);
      if (s && (m.isFunction(s) || (s = s.get(e))))
        break;
      o[a || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(o).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = n ? i.length > 1 ? `since :
` + i.map(kn).join(`
`) : " " + kn(i[0]) : "as no adapter specified";
      throw new B(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Ut
};
function Ot(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ue(null, t);
}
function Nn(t) {
  return Ot(t), t.headers = ce.from(t.headers), t.data = vt.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Dr.getAdapter(t.adapter || Je.adapter, t)(t).then(function(r) {
    return Ot(t), r.data = vt.call(
      t,
      t.transformResponse,
      r
    ), r.headers = ce.from(r.headers), r;
  }, function(r) {
    return Or(r) || (Ot(t), r && r.response && (r.response.data = vt.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = ce.from(r.response.headers))), Promise.reject(r);
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
      throw new B(
        s(i, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED
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
function va(t, e, n) {
  if (typeof t != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const a = t[o], l = a === void 0 || i(a, o, t);
      if (l !== !0)
        throw new B("option " + o + " must be " + l, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new B("Unknown option " + o, B.ERR_BAD_OPTION);
  }
}
const at = {
  assertOptions: va,
  validators: St
}, he = at.validators;
let Ie = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new wn(),
      response: new wn()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ke(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && at.assertOptions(r, {
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), s != null && (m.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : at.assertOptions(s, {
      encode: he.function,
      serialize: he.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), at.assertOptions(n, {
      baseUrl: he.spelling("baseURL"),
      withXsrfToken: he.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && m.merge(
      o.common,
      o[n.method]
    );
    o && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = ce.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (l = l && E.synchronous, a.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(E) {
      u.push(E.fulfilled, E.rejected);
    });
    let d, g = 0, y;
    if (!l) {
      const h = [Nn.bind(this), void 0];
      for (h.unshift(...a), h.push(...u), y = h.length, d = Promise.resolve(n); g < y; )
        d = d.then(h[g++], h[g++]);
      return d;
    }
    y = a.length;
    let S = n;
    for (; g < y; ) {
      const h = a[g++], E = a[g++];
      try {
        S = h(S);
      } catch (b) {
        E.call(this, b);
        break;
      }
    }
    try {
      d = Nn.call(this, S);
    } catch (h) {
      return Promise.reject(h);
    }
    for (g = 0, y = u.length; g < y; )
      d = d.then(u[g++], u[g++]);
    return d;
  }
  getUri(e) {
    e = ke(this.defaults, e);
    const n = Ir(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Tr(n, e.params, e.paramsSerializer);
  }
};
m.forEach(["delete", "get", "head", "options"], function(e) {
  Ie.prototype[e] = function(n, r) {
    return this.request(ke(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, a) {
      return this.request(ke(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ie.prototype[e] = n(), Ie.prototype[e + "Form"] = n(!0);
});
let Oa = class Pr {
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
      r.reason || (r.reason = new Ue(o, i, a), n(r.reason));
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
function xa(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Ia(t) {
  return m.isObject(t) && t.isAxiosError === !0;
}
const Bt = {
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
Object.entries(Bt).forEach(([t, e]) => {
  Bt[e] = t;
});
function Lr(t) {
  const e = new Ie(t), n = hr(Ie.prototype.request, e);
  return m.extend(n, Ie.prototype, e, { allOwnKeys: !0 }), m.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Lr(ke(t, s));
  }, n;
}
const J = Lr(Je);
J.Axios = Ie;
J.CanceledError = Ue;
J.CancelToken = Oa;
J.isCancel = Or;
J.VERSION = Mr;
J.toFormData = bt;
J.AxiosError = B;
J.Cancel = J.CanceledError;
J.all = function(e) {
  return Promise.all(e);
};
J.spread = xa;
J.isAxiosError = Ia;
J.mergeConfig = ke;
J.AxiosHeaders = ce;
J.formToJSON = (t) => vr(m.isHTMLForm(t) ? new FormData(t) : t);
J.getAdapter = Dr.getAdapter;
J.HttpStatusCode = Bt;
J.default = J;
const {
  Axios: Wl,
  AxiosError: Yl,
  CanceledError: Kl,
  isCancel: Jl,
  CancelToken: Xl,
  VERSION: Ql,
  all: Zl,
  Cancel: eu,
  isAxiosError: tu,
  spread: nu,
  toFormData: ru,
  AxiosHeaders: su,
  HttpStatusCode: ou,
  formToJSON: iu,
  getAdapter: au,
  mergeConfig: cu
} = J, Qt = {
  userId: 0,
  username: "",
  password: "",
  avatar: "",
  langCode: ""
}, Ur = {
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
    ringPlayed: !1,
    paused: !1
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
}, Br = (t, e) => {
  if (!t) return !1;
  const n = typeof t?.status < "u" ? t.status : t?.conferenceStatus;
  if (typeof n < "u" && n !== null) {
    const r = typeof n == "string" ? n.toLowerCase() : Number(n);
    return r === 2 || r === "paused";
  }
  return Array.isArray(e) && t.contactId != null ? e.some(
    (r) => r.contactId === t.contactId && r.conferenceStatus === "paused"
  ) : !1;
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
  return s && s.groupId !== r && e.userId !== t.user.userId ? $t(n, r, (o) => (o || 0) + 1) : (n.activeRoom = le(n), n);
}, Na = (t, e) => {
  const n = { ...t }, r = e.contactId === t.user.userId ? e.userId : e.contactId;
  return n.contactGather[r].messages ? n.contactGather[r].messages = [
    ...n.contactGather[r].messages,
    e
  ] : n.contactGather[r] = {
    ...n.contactGather[r],
    messages: [e]
  }, n.activeRoom?.userId !== r && e.userId !== t.user.userId ? Ft(
    n,
    r,
    (s) => (s || 0) + 1
  ) : (n.activeRoom = le(n), n);
}, Ft = (t, e, n) => {
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
}, $t = (t, e, n) => {
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
}, Da = (t, e) => {
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
}, Ma = (t, e) => {
  const n = { ...t }, r = n.activeRoom === n.contactGather[e];
  return delete n.contactGather[e], r && (n.activeRoom = Zt(n)), n;
}, Pa = (t, e) => {
  const n = { ...t }, r = n.activeRoom === n.groupGather[e];
  return delete n.groupGather[e], r && (n.activeRoom = Zt(n)), n;
}, La = (t, e) => {
  const n = { ...t }, r = n.groupGather[e.groupId];
  return r && (r.members = r.members?.filter((s) => s.userId !== e.userId)), n;
}, Ua = (t, e) => {
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
}, Fa = (t, e) => {
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
}, ja = (t, e) => {
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
}, Ga = (t, e) => {
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
}, Ha = (t, e) => {
  const n = e.groupId ? t.groupGather[e.groupId] : e.contactId ? t.contactGather[e.contactId] : null;
  return {
    ...t,
    chatOld: t.activeRoom != null ? { ...t.activeRoom } : null,
    activeRoom: n ?? null,
    messageSearch: ""
  };
}, qa = (t, e) => ({
  ...t,
  token: e
}), Va = (t) => ({
  ...t,
  token: "",
  user: Qt
}), za = (t, e) => e ? {
  ...t,
  conference: {
    data: { ...e },
    joined: e.userId === t.user.userId,
    ringPlayed: e.userId !== t.user.userId,
    paused: Br(e, t.visitData)
  }
} : {
  ...t,
  conference: {
    data: null,
    joined: !1,
    ringPlayed: !1,
    paused: !1
  }
}, Wa = (t, e) => t.conference.data?.id !== e?.id ? t : {
  ...t,
  conference: {
    ...t.conference,
    paused: !0
  }
}, Ya = (t, e) => t.conference.data?.id !== e?.id ? t : {
  ...t,
  conference: {
    data: null,
    joined: !1,
    ringPlayed: !1,
    paused: !1
  }
}, Ka = (t, e) => t.conference.data?.id !== e?.id ? t : {
  ...t,
  conference: {
    ...t.conference,
    paused: !1
  }
};
function Ja(t, e) {
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
      return Pa(t, e.payload);
    case "DEL_GROUP_MEMBER":
      return La(t, e.payload);
    case "DEL_CONTACT":
      return Ma(t, e.payload.userId);
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
      return Ha(t, e.payload);
    case "USER_ONLINE":
      return Mn(t, e.payload, 1);
    case "USER_OFFLINE":
      return Mn(t, e.payload, 0);
    case "ADD_GROUP_MESSAGE":
      return ka(t, e.payload);
    case "ADD_PRIVATE_MESSAGE":
      return Na(t, e.payload);
    case "ADD_GROUP_UNREAD_GATHER":
      return $t(
        t,
        e.payload,
        (n) => (n || 0) + 1
      );
    case "ADD_CONTACT_UNREAD_GATHER":
      return Ft(
        t,
        e.payload,
        (n) => (n || 0) + 1
      );
    case "SET_TYPING":
      return { ...t, typing: e.payload };
    case "LOSE_GROUP_UNREAD_GATHER":
      return $t(t, e.payload, () => 0);
    case "LOSE_CONTACT_UNREAD_GATHER":
      return Ft(t, e.payload, () => 0);
    case "REVOKE_MESSAGE":
      return Da(t, e.payload);
    case "UPDATE_GROUP_INFO":
      return Ua(t, e.payload);
    case "UPDATE_USER_INFO":
      return Ba(t, e.payload);
    case "ADD_GROUP_MEMBER":
      return Fa(t, e.payload);
    case "SET_CONFERENCE":
      return za(t, e.payload);
    case "JOIN_CONFERENCE":
      return {
        ...t,
        conference: {
          data: { ...e.payload },
          joined: !0,
          ringPlayed: !1,
          paused: !1
        }
      };
    case "PAUSE_CONFERENCE":
      return Wa(t, e.payload);
    case "RESUME_CONFERENCE":
      return Ka(t, e.payload);
    case "STOP_CONFERENCE":
      return Ya(t, e.payload);
    case "MARK_PRIVATE_MESSAGES_READ":
      return $a(t, e.payload);
    case "ADD_PRIVATE_MESSAGES":
      return ja(t, e.payload);
    case "ADD_GROUP_MESSAGES":
      return Ga(t, e.payload);
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
      return qa(t, e.payload);
    case "SET_USER":
      return {
        ...t,
        user: e.payload
      };
    case "CLEAR_USER":
      return Va(t);
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
          ringPlayed: !1,
          paused: !1
        },
        typing: null,
        messageSearch: ""
      };
    case "SET_OPERATORS":
      return {
        ...t,
        operators: e.payload
      };
    case "SET_VISIT_DATA": {
      const n = e.payload;
      return {
        ...t,
        visitData: n,
        conference: {
          ...t.conference,
          paused: Br(t.conference.data, n)
        }
      };
    }
  }
  return t;
}
const Xa = () => null, Xe = U.createContext({
  state: Ur,
  dispatch: Xa
}), Qa = (t) => {
  Qt.langCode = t.defLang;
  const e = t.token, n = t.refreshToken, r = {
    ...Ur,
    token: e,
    refreshToken: n
  }, [s, o] = U.useReducer(Ja, r), i = Me(() => ({ state: s, dispatch: o }), [s]);
  return /* @__PURE__ */ c(Xe.Provider, { value: i, children: t.children });
}, Za = {}, en = er(Za);
function lu() {
  localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), localStorage.removeItem("doctor"), localStorage.removeItem("chatUser");
}
async function Fr(t, e, n) {
  try {
    localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken");
    const { data: r } = await J.post(`${n}/auth/refreshToken`, {
      authToken: t,
      refreshToken: e
    });
    localStorage.setItem("authToken", r?.authToken), localStorage.setItem("refreshToken", r?.refreshToken);
  } catch (r) {
    console.log("ERROR RefreshToken", r);
  } finally {
    window.location.reload();
  }
}
const ec = ({
  chatBaseURLApi: t,
  pageSize: e,
  children: n,
  baseUrl: r
}) => {
  const { state: s, dispatch: o } = Yt(Xe), i = Y(
    (y) => {
      s.token && y.response != null && y.response.status === 401 && Fr(s.token, s.refreshToken, r);
    },
    [r, s.refreshToken, s.token]
  ), a = Me(() => {
    const y = J.create({
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
    return y.interceptors.response.use(
      (S) => S,
      (S) => (console.log("ERROR AxiosError"), i(S), Promise.reject(S))
    ), y;
  }, [t, i, s.token]), l = Y(
    async (y, S) => {
      const h = y.userId, E = S?.reset ? 0 : y.messages?.length;
      try {
        o({ type: "SET_LOADING", payload: !0 });
        const { data: b } = await a.get("/contact/messages", {
          params: {
            contactId: h,
            current: E,
            pageSize: e,
            search: S?.search
          }
        });
        b && (S?.shouldIgnore?.() || o({
          type: "ADD_PRIVATE_MESSAGES",
          payload: {
            pageSize: e,
            contactId: h,
            messages: b,
            reset: S?.reset ?? !1
          }
        }), S?.callback && S.callback());
      } catch (b) {
        o({ type: "SET_ERROR", payload: b.message });
      } finally {
        o({ type: "SET_LOADING", payload: !1 });
      }
    },
    [o, a, e]
  ), u = Y(
    async (y, S) => {
      const { groupId: h } = y, E = S?.reset ? 0 : y.messages?.length;
      try {
        o({ type: "SET_LOADING", payload: !0 });
        const { data: b } = await a.get(
          "/group/messages",
          {
            params: {
              groupId: h,
              current: E,
              pageSize: e
            }
          }
        );
        b && (S?.shouldIgnore?.() || o({
          type: "ADD_GROUP_MESSAGES",
          payload: {
            pageSize: e,
            groupId: h,
            ...b,
            reset: S?.reset ?? !1
          }
        }));
      } catch (b) {
        o({ type: "SET_ERROR", payload: b.message });
      } finally {
        o({ type: "SET_LOADING", payload: !1 });
      }
    },
    [o, a, e]
  ), d = Y(
    async (y, S) => {
      try {
        const { data: h } = await a.get("/contact/find", {
          params: {
            mmkId: y,
            guid: S
          }
        });
        if (h != null)
          return h;
      } catch (h) {
        console.log("err getUserByMmk", h);
      }
    },
    [a]
  ), g = Me(
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
  return /* @__PURE__ */ c(en.Provider, { value: g, children: n });
}, tc = Z(
  (t) => ge({
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
), nc = (t, e) => {
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
}, rc = nr(
  (t) => ge({
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
)(Zn), sc = nr(
  (t) => ge({
    badge: {
      backgroundColor: t.palette.primary.main,
      boxShadow: `0 0 0 2px ${t.palette.background.paper}`
    }
  })
)(Zn), oc = (t, e, n) => {
  const r = /* @__PURE__ */ c(
    Ee,
    {
      alt: e.username,
      src: e.avatar ? Te(t, e.avatar) : ""
    }
  );
  return !!n?.contactId && n?.userId === e.userId ? /* @__PURE__ */ c(
    rc,
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
    sc,
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
}, ic = (t) => {
  const e = tc(), { t: n } = oe(), { apiUrl: r, chat: s, typing: o } = t, i = ar(s), a = s.groupId ? /* @__PURE__ */ N(Ee, { alt: i, className: e.avatarGroup, children: [
    /* @__PURE__ */ c(rr, {}),
    " "
  ] }) : oc(r, s, o), l = s.messages && s.messages.length > 0 ? s.messages[s.messages.length - 1] : null, u = nc(l, n), d = l?.cdate;
  return /* @__PURE__ */ N(Gn, { selected: t.active, onClick: t.onClick, children: [
    /* @__PURE__ */ c(Hn, { children: a }),
    /* @__PURE__ */ c(
      qn,
      {
        secondaryTypographyProps: { component: "span" },
        primary: /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
          /* @__PURE__ */ c("span", { className: e.main, children: i }),
          /* @__PURE__ */ c("span", { className: e.time, children: ht(d) })
        ] }),
        secondary: /* @__PURE__ */ N(V, { display: "flex", flexDirection: "row", children: [
          /* @__PURE__ */ c("span", { className: e.main, children: u }),
          s.unreadCount ? /* @__PURE__ */ c(
            us,
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
}, ac = Z((t) => ({
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
}, cc = (t, e, n) => {
  let r = [...e, ...n];
  r = r.sort(cr);
  const s = localStorage.getItem(`${t}-topChatId`);
  if (s) {
    const o = r.find((i) => Se(i) === s);
    o && (r = r.filter((i) => Se(i) !== s), o.isTop = !0, r.unshift(o));
  }
  return r;
}, lc = (t, e, n, r) => cc(
  t,
  Pn(e, r),
  Pn(n, r)
), uc = ({
  user: t,
  activeRoom: e,
  groups: n,
  contacts: r,
  typing: s,
  onChangeChat: o
}) => {
  const i = ac(), { t: a } = oe(), { apiUrl: l } = Yt(en), [u, d] = re(""), g = U.useMemo(
    () => lc(t.userId, n, r, u),
    [t.userId, n, r, u]
  ), y = (S) => {
    d(S.target.value);
  };
  return /* @__PURE__ */ N(Qn, { elevation: 1, className: i.root, children: [
    /* @__PURE__ */ c(
      rt,
      {
        title: /* @__PURE__ */ c(
          Wt,
          {
            className: i.searchField,
            label: a("CHAT.INPUT_SEARCH_CONTACT"),
            variant: "outlined",
            size: "small",
            fullWidth: !0,
            onChange: y,
            value: u
          }
        )
      }
    ),
    /* @__PURE__ */ c(Nt, {}),
    /* @__PURE__ */ c(Ms, { "aria-label": "rooms", className: i.listStyle, children: g.map((S) => /* @__PURE__ */ c(
      ic,
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
}, dc = () => {
  const {
    state: { error: t, success: e },
    dispatch: n
  } = U.useContext(Xe), r = () => {
    n({ type: "SET_ERROR", payload: void 0 }), n({ type: "SET_SUCCES", payload: void 0 });
  };
  return /* @__PURE__ */ c(
    ds,
    {
      anchorOrigin: { vertical: "top", horizontal: "center" },
      open: !!t || !!e,
      autoHideDuration: 6e3,
      onClose: r,
      children: /* @__PURE__ */ c(mt, { onClose: r, severity: t ? "error" : "success", children: t || e })
    }
  );
}, fc = Z((t) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    padding: 0,
    [t.breakpoints.up("lg")]: {
      minWidth: 1200
    }
  }
})), hc = ({
  children: t
}) => {
  const e = fc();
  return /* @__PURE__ */ c(fs, { maxWidth: !1, className: e.root, children: t });
}, pc = ({
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
}) => t ? /* @__PURE__ */ N(ye, { children: [
  e && /* @__PURE__ */ c(
    V,
    {
      sx: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 1400,
        top: i?.role && [3, 4].includes(i.role) ? -56 : -12,
        left: i?.role && [3, 4].includes(i.role) ? 32 : 218
      },
      children: /* @__PURE__ */ c(
        V,
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
              children: o ? /* @__PURE__ */ c(Ls, {}) : /* @__PURE__ */ c(Ps, {})
            }
          )
        }
      )
    }
  ),
  r,
  s
] }) : /* @__PURE__ */ c(ye, { children: /* @__PURE__ */ N(Rt, { container: !0, spacing: 1, sx: { height: "100%" }, children: [
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
] }) }), mc = ({
  conference: t,
  onClose: e,
  onAccept: n,
  isMobile: r,
  user: s,
  apiUrl: o,
  onVideoEnd: i
}) => {
  if (!t.data) return null;
  const a = s?.role != null && [3, 4].includes(s.role), l = !!t.paused, u = !l || a;
  return t.joined && !l ? /* @__PURE__ */ c(ye, { children: /* @__PURE__ */ c(
    io,
    {
      conference: t.data,
      onClose: e,
      langCode: s.langCode,
      user: s,
      conferenceJoined: t.joined,
      conferencePaused: !!t.paused,
      onVideoEnd: i,
      onConferencePause: e
    }
  ) }) : /* @__PURE__ */ c(
    co,
    {
      apiUrl: o,
      contact: s.userId === t.data.userId ? t.data.contactId : t.data.userId,
      conference: t.data,
      onAccept: n,
      canResume: u,
      isPaused: l
    }
  );
}, me = /* @__PURE__ */ Object.create(null);
me.open = "0";
me.close = "1";
me.ping = "2";
me.pong = "3";
me.message = "4";
me.upgrade = "5";
me.noop = "6";
const ct = /* @__PURE__ */ Object.create(null);
Object.keys(me).forEach((t) => {
  ct[me[t]] = t;
});
const jt = { type: "error", data: "parser error" }, $r = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", jr = typeof ArrayBuffer == "function", Gr = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, tn = ({ type: t, data: e }, n, r) => $r && e instanceof Blob ? n ? r(e) : Ln(e, r) : jr && (e instanceof ArrayBuffer || Gr(e)) ? n ? r(e) : Ln(new Blob([e]), r) : r(me[t] + (e || "")), Ln = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
};
function Un(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let xt;
function gc(t, e) {
  if ($r && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Un).then(e);
  if (jr && (t.data instanceof ArrayBuffer || Gr(t.data)))
    return e(Un(t.data));
  tn(t, !1, (n) => {
    xt || (xt = new TextEncoder()), e(xt.encode(n));
  });
}
const Bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ve = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Bn.length; t++)
  Ve[Bn.charCodeAt(t)] = t;
const yc = (t) => {
  let e = t.length * 0.75, n = t.length, r, s = 0, o, i, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), d = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    o = Ve[t.charCodeAt(r)], i = Ve[t.charCodeAt(r + 1)], a = Ve[t.charCodeAt(r + 2)], l = Ve[t.charCodeAt(r + 3)], d[s++] = o << 2 | i >> 4, d[s++] = (i & 15) << 4 | a >> 2, d[s++] = (a & 3) << 6 | l & 63;
  return u;
}, Ec = typeof ArrayBuffer == "function", nn = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Hr(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: bc(t.substring(1), e)
  } : ct[n] ? t.length > 1 ? {
    type: ct[n],
    data: t.substring(1)
  } : {
    type: ct[n]
  } : jt;
}, bc = (t, e) => {
  if (Ec) {
    const n = yc(t);
    return Hr(n, e);
  } else
    return { base64: !0, data: t };
}, Hr = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, qr = "", Sc = (t, e) => {
  const n = t.length, r = new Array(n);
  let s = 0;
  t.forEach((o, i) => {
    tn(o, !1, (a) => {
      r[i] = a, ++s === n && e(r.join(qr));
    });
  });
}, wc = (t, e) => {
  const n = t.split(qr), r = [];
  for (let s = 0; s < n.length; s++) {
    const o = nn(n[s], e);
    if (r.push(o), o.type === "error")
      break;
  }
  return r;
};
function _c() {
  return new TransformStream({
    transform(t, e) {
      gc(t, (n) => {
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
let It;
function et(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function tt(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let s = 0; s < e; s++)
    n[s] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function Rc(t, e) {
  It || (It = new TextDecoder());
  const n = [];
  let r = 0, s = -1, o = !1;
  return new TransformStream({
    transform(i, a) {
      for (n.push(i); ; ) {
        if (r === 0) {
          if (et(n) < 1)
            break;
          const l = tt(n, 1);
          o = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? r = 3 : s === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (et(n) < 2)
            break;
          const l = tt(n, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (et(n) < 8)
            break;
          const l = tt(n, 8), u = new DataView(l.buffer, l.byteOffset, l.length), d = u.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            a.enqueue(jt);
            break;
          }
          s = d * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (et(n) < s)
            break;
          const l = tt(n, s);
          a.enqueue(nn(o ? l : It.decode(l), e)), r = 0;
        }
        if (s === 0 || s > t) {
          a.enqueue(jt);
          break;
        }
      }
    }
  });
}
const Vr = 4;
function X(t) {
  if (t) return Cc(t);
}
function Cc(t) {
  for (var e in X.prototype)
    t[e] = X.prototype[e];
  return t;
}
X.prototype.on = X.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
X.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
X.prototype.off = X.prototype.removeListener = X.prototype.removeAllListeners = X.prototype.removeEventListener = function(t, e) {
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
X.prototype.emit = function(t) {
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
X.prototype.emitReserved = X.prototype.emit;
X.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
X.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const wt = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), ue = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Tc = "arraybuffer";
function zr(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const Ac = ue.setTimeout, vc = ue.clearTimeout;
function _t(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Ac.bind(ue), t.clearTimeoutFn = vc.bind(ue)) : (t.setTimeoutFn = ue.setTimeout.bind(ue), t.clearTimeoutFn = ue.clearTimeout.bind(ue));
}
const Oc = 1.33;
function xc(t) {
  return typeof t == "string" ? Ic(t) : Math.ceil((t.byteLength || t.size) * Oc);
}
function Ic(t) {
  let e = 0, n = 0;
  for (let r = 0, s = t.length; r < s; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Wr() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function kc(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function Nc(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, s = n.length; r < s; r++) {
    let o = n[r].split("=");
    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return e;
}
class Dc extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class rn extends X {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, _t(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
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
    return super.emitReserved("error", new Dc(e, n, r)), this;
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
    const n = kc(e);
    return n.length ? "?" + n : "";
  }
}
class Mc extends rn {
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
    wc(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Sc(e, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Wr()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
}
let Yr = !1;
try {
  Yr = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Pc = Yr;
function Lc() {
}
class Uc extends Mc {
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
class pe extends X {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n, r) {
    super(), this.createRequest = e, _t(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const n = zr(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = pe.requestsCount++, pe.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Lc, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete pe.requests[this._index], this._xhr = null;
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
pe.requestsCount = 0;
pe.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Fn);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in ue ? "pagehide" : "unload";
    addEventListener(t, Fn, !1);
  }
}
function Fn() {
  for (let t in pe.requests)
    pe.requests.hasOwnProperty(t) && pe.requests[t].abort();
}
const Bc = (function() {
  const t = Kr({
    xdomain: !1
  });
  return t && t.responseType !== null;
})();
class Fc extends Uc {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = Bc && !n;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new pe(Kr, this.uri(), e);
  }
}
function Kr(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Pc))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ue[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jr = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class $c extends rn {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), n = this.opts.protocols, r = Jr ? {} : zr(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
        s && wt(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Wr()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
}
const kt = ue.WebSocket || ue.MozWebSocket;
class jc extends $c {
  createSocket(e, n, r) {
    return Jr ? new kt(e, n, r) : n ? new kt(e, n) : new kt(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class Gc extends rn {
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
        const n = Rc(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(n).getReader(), s = _c();
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
        s && wt(() => {
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
const Hc = {
  websocket: jc,
  webtransport: Gc,
  polling: Fc
}, qc = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Vc = [
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
  let s = qc.exec(t || ""), o = {}, i = 14;
  for (; i--; )
    o[Vc[i]] = s[i] || "";
  return n != -1 && r != -1 && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = zc(o, o.path), o.queryKey = Wc(o, o.query), o;
}
function zc(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Wc(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, o) {
    s && (n[s] = o);
  }), n;
}
const Ht = typeof addEventListener == "function" && typeof removeEventListener == "function", lt = [];
Ht && addEventListener("offline", () => {
  lt.forEach((t) => t());
}, !1);
class Ce extends X {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n) {
    if (super(), this.binaryType = Tc, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (n = e, e = null), e) {
      const r = Gt(e);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Gt(n.host).host);
    _t(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Nc(this.opts.query)), Ht && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    n.EIO = Vr, n.transport = e, this.id && (n.sid = this.id);
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
    const e = this.opts.rememberUpgrade && Ce.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Ce.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (s && (n += xc(s)), r > 0 && n > this._maxPayload)
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
    return e && (this._pingTimeoutTime = 0, wt(() => {
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
    if (Ce.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
Ce.protocol = Vr;
class Yc extends Ce {
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
    Ce.priorWebsocketSuccess = !1;
    const s = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (g) => {
        if (!r)
          if (g.type === "pong" && g.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Ce.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (d(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const y = new Error("probe error");
            y.transport = n.name, this.emitReserved("upgradeError", y);
          }
      }));
    };
    function o() {
      r || (r = !0, d(), n.close(), n = null);
    }
    const i = (g) => {
      const y = new Error("probe error: " + g);
      y.transport = n.name, o(), this.emitReserved("upgradeError", y);
    };
    function a() {
      i("transport closed");
    }
    function l() {
      i("socket closed");
    }
    function u(g) {
      n && g.name !== n.name && o();
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
let Kc = class extends Yc {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((s) => Hc[s]).filter((s) => !!s)), super(e, r);
  }
};
function Jc(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = Gt(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + o + ":" + r.port + e, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Xc = typeof ArrayBuffer == "function", Qc = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Xr = Object.prototype.toString, Zc = typeof Blob == "function" || typeof Blob < "u" && Xr.call(Blob) === "[object BlobConstructor]", el = typeof File == "function" || typeof File < "u" && Xr.call(File) === "[object FileConstructor]";
function sn(t) {
  return Xc && (t instanceof ArrayBuffer || Qc(t)) || Zc && t instanceof Blob || el && t instanceof File;
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
function tl(t) {
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
function nl(t, e) {
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
const rl = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], sl = 5;
var G;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(G || (G = {}));
class ol {
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
    return (e.type === G.EVENT || e.type === G.ACK) && ut(e) ? this.encodeAsBinary({
      type: e.type === G.EVENT ? G.BINARY_EVENT : G.BINARY_ACK,
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
    return (e.type === G.BINARY_EVENT || e.type === G.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = tl(e), r = this.encodeAsString(n.packet), s = n.buffers;
    return s.unshift(r), s;
  }
}
function $n(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class on extends X {
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
      const r = n.type === G.BINARY_EVENT;
      r || n.type === G.BINARY_ACK ? (n.type = r ? G.EVENT : G.ACK, this.reconstructor = new il(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
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
    if (G[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === G.BINARY_EVENT || r.type === G.BINARY_ACK) {
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
      case G.CONNECT:
        return $n(n);
      case G.DISCONNECT:
        return n === void 0;
      case G.CONNECT_ERROR:
        return typeof n == "string" || $n(n);
      case G.EVENT:
      case G.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && rl.indexOf(n[0]) === -1);
      case G.ACK:
      case G.BINARY_ACK:
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
class il {
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
      const n = nl(this.reconPack, this.buffers);
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
const al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: on,
  Encoder: ol,
  get PacketType() {
    return G;
  },
  protocol: sl
}, Symbol.toStringTag, { value: "Module" }));
function de(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const cl = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Qr extends X {
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
      de(e, "open", this.onopen.bind(this)),
      de(e, "packet", this.onpacket.bind(this)),
      de(e, "error", this.onerror.bind(this)),
      de(e, "close", this.onclose.bind(this))
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
    if (cl.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: G.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const d = this.ids++, g = n.pop();
      this._registerAckCallback(d, g), i.id = d;
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
      type: G.CONNECT,
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
        case G.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case G.EVENT:
        case G.BINARY_EVENT:
          this.onevent(e);
          break;
        case G.ACK:
        case G.BINARY_ACK:
          this.onack(e);
          break;
        case G.DISCONNECT:
          this.ondisconnect();
          break;
        case G.CONNECT_ERROR:
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
        type: G.ACK,
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
    return this.connected && this.packet({ type: G.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Be(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Be.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n;
  }
  return Math.min(t, this.max) | 0;
};
Be.prototype.reset = function() {
  this.attempts = 0;
};
Be.prototype.setMin = function(t) {
  this.ms = t;
};
Be.prototype.setMax = function(t) {
  this.max = t;
};
Be.prototype.setJitter = function(t) {
  this.jitter = t;
};
class zt extends X {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, _t(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Be({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const s = n.parser || al;
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
    this.engine = new Kc(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = de(n, "open", function() {
      r.onopen(), e && e();
    }), o = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, i = de(n, "error", o);
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
      de(e, "ping", this.onping.bind(this)),
      de(e, "data", this.ondata.bind(this)),
      de(e, "error", this.onerror.bind(this)),
      de(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      de(this.decoder, "decoded", this.ondecoded.bind(this))
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
    wt(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Qr(this, e, n), this.nsps[e] = r), r;
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
  const n = Jc(t, e.path || "/socket.io"), r = n.source, s = n.id, o = n.path, i = qe[s] && o in qe[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || i;
  let l;
  return a ? l = new zt(r, e) : (qe[s] || (qe[s] = new zt(r, e)), l = qe[s]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(dt, {
  Manager: zt,
  Socket: Qr,
  io: dt,
  connect: dt
});
const ll = (t, e, n) => {
  const [r, s] = re(null), o = Y(() => {
    const u = dt(t, {
      path: e,
      reconnection: !0,
      extraHeaders: {
        Authorization: `Bearer ${n}`
      }
    });
    s(u);
  }, [t, e, n]), i = Y(() => {
    r?.disconnect(), s(null);
  }, [r]), [a, l] = re(!1);
  return Q(() => {
    l(!!r?.connected);
  }, [r]), Q(() => {
    r?.on("connect", () => {
      l(!0), r.emit("chatData");
    });
  }, [r]), Q(() => {
    r?.on("disconnect", () => {
      l(!1);
    });
  }, [r]), {
    socket: r,
    online: a,
    disconnectSocket: i,
    connectSocket: o
  };
}, ul = {
  online: !1
}, Zr = er(ul), dl = ({
  wsUrl: t,
  wsPath: e,
  baseUrl: n,
  children: r
}) => {
  const { state: s, dispatch: o } = Yt(Xe), { socket: i, online: a, disconnectSocket: l, connectSocket: u } = ll(
    t,
    e,
    s.token
  ), d = se(s.groupGather), g = se(s.contactGather);
  Q(() => {
    d.current = s.groupGather;
  }, [s.groupGather]), Q(() => {
    g.current = s.contactGather;
  }, [s.contactGather]), Q(() => (s.token && u(), s.token || l(), () => {
    l();
  }), [s.token]);
  const y = (h, E) => h.code ? (E({ type: "SET_ERROR", payload: h.msg }), !0) : !1;
  Q(() => {
    const h = (f) => {
      console.log("unauthorized msg", f), Fr(s.token, s.refreshToken, n);
    };
    i?.on("unauthorized", h);
    const E = (f) => {
      if (y(f, o)) return;
      const p = f.data, R = p.groupData, P = p.contactData, $ = p.userData;
      if (o({ type: "CLEAR_CHAT_DATA" }), o({ type: "SET_USER", payload: p.user }), R.length)
        for (const L of R)
          i?.emit("joinGroupSocket", {
            groupId: L.groupId
          }), o({ type: "SET_GROUP_GATHER", payload: L });
      if (P.length)
        for (const L of P)
          i?.emit("joinPrivateSocket", {
            contactId: L.userId
          }), o({ type: "SET_CONTACT_GATHER", payload: L });
      if (o({
        type: "SET_OPERATORS",
        payload: p.operatorData
      }), $.length)
        for (const L of $)
          o({ type: "SET_USER_GATHER", payload: L });
      o({ type: "UPDATE_ACTIVE_ROOM" }), o({
        type: "SET_CONFERENCE",
        payload: p.conferenceData
      }), o({
        type: "SET_VISIT_DATA",
        payload: p.visitData
      });
    };
    i?.on("chatData", E);
    const b = (f) => {
      o({ type: "USER_ONLINE", payload: f.data });
    };
    i?.on("userOnline", b);
    const A = (f) => {
      o({ type: "USER_OFFLINE", payload: f.data });
    };
    i?.on("userOffline", A);
    const D = (f) => {
      y(f, o) || console.log("Успешно вошел в приватный чат");
    };
    i?.on("joinPrivateSocket", D);
    let v;
    const x = (f) => {
      y(f, o) || (v && clearTimeout(v), o({
        type: "SET_TYPING",
        payload: f.data
      }), v = setTimeout(() => {
        o({ type: "SET_TYPING", payload: null });
      }, 1e3));
    };
    i?.on("typing", x);
    const k = (f) => {
      if (y(f, o)) return;
      const p = f.data;
      o({ type: "REVOKE_MESSAGE", payload: p }), console.log("REVOKE_MESSAGE");
    };
    i?.on("revokeMessage", k);
    const O = (f) => {
      y(f, o) || o({
        type: "SET_GROUP_GATHER",
        payload: f.data
      });
    };
    i?.on("addGroup", O);
    const F = (f) => {
      if (y(f, o)) return;
      const p = f.data;
      o({ type: "SET_CONTACT_GATHER", payload: p }), o({ type: "SET_USER_GATHER", payload: p }), i?.emit("joinPrivateSocket", {
        contactId: p.userId
      });
    };
    i?.on("addContact", F);
    const H = (f) => {
      if (y(f, o)) return;
      const p = f.data;
      o({ type: "DEL_CONTACT", payload: p });
    };
    i?.on("deleteContact", H);
    const K = (f) => {
      if (y(f, o)) return;
      const p = f.data;
      o({ type: "UPDATE_GROUP_INFO", payload: p });
    };
    i?.on("updateGroupInfo", K);
    const I = (f) => {
      if (y(f, o)) return;
      const p = f.data;
      o({ type: "UPDATE_USER_INFO", payload: p });
    };
    i?.on("updateUserInfo", I);
    const M = (f) => {
      y(f, o) || (o({
        type: "SET_CONFERENCE",
        payload: f.data
      }), o({ type: "RESUME_CONFERENCE" }));
    };
    i?.on("startConference", M);
    const q = (f) => {
      y(f, o) || o({
        type: "PAUSE_CONFERENCE",
        payload: f.data
      });
    };
    i?.on("pauseConference", q);
    const z = (f) => {
      y(f, o) || o({
        type: "RESUME_CONFERENCE",
        payload: f.data
      });
    };
    i?.on("resumeConference", z);
    const T = (f) => {
      y(f, o) || o({
        type: "STOP_CONFERENCE",
        payload: f.data
      });
    };
    i?.on("stopConference", T);
    const C = (f) => {
      y(f, o);
    };
    i?.on("addOperator", C);
    const _ = (f) => {
      y(f, o) || o({
        type: "SET_ACTIVE_ROOM",
        payload: f.data
      });
    };
    i?.on("setActiveRoom", _);
    const w = (f) => {
      if (y(f, o)) return;
      const p = f.data;
      o({
        type: "SET_VISIT_DATA",
        payload: p.visitData
      });
    };
    return i?.on("visitData", w), () => {
      i?.off("unauthorized", h), i?.off("chatData", E), i?.off("userOnline", b), i?.off("userOffline", A), i?.off("joinPrivateSocket", D), v && clearTimeout(v), i?.off("typing", x), i?.off("revokeMessage", k), i?.off("addGroup", O), i?.off("addContact", F), i?.off("deleteContact", H), i?.off("updateGroupInfo", K), i?.off("updateUserInfo", I), i?.off("startConference", M), i?.off("pauseConference", q), i?.off("resumeConference", z), i?.off("stopConference", T), i?.off("addOperator", C), i?.off("setActiveRoom", _), i?.off("visitData", w);
    };
  }, [i?.id]), Q(() => {
    const h = async (b) => {
      if (y(b, o)) return;
      const A = b.data;
      o({ type: "ADD_GROUP_MESSAGE", payload: A }), A.userId !== s.user.userId && i?.emit("markAsRead", {
        groupId: A.groupId,
        _id: A._id
      });
    };
    i?.on("groupMessage", h);
    const E = async (b) => {
      if (y(b, o)) return;
      const A = b.data;
      (A.contactId === s.user.userId || A.userId === s.user.userId) && (o({
        type: "ADD_PRIVATE_MESSAGE",
        payload: A
      }), s.activeRoom && s.activeRoom?.userId === A.userId && i?.emit("markAsRead", {
        contactId: A.userId,
        _id: A._id
      }));
    };
    return i?.on("privateMessage", E), () => {
      i?.off("groupMessage", h), i?.off("privateMessage", E);
    };
  }, [i?.id, s.activeRoom?.userId, s.activeRoom?.groupId]), Q(() => {
    const h = (D) => {
      if (y(D, o)) return;
      const v = D.data;
      if (v.userId === s.user.userId)
        if (typeof v.groupId == "number")
          d.current[v.groupId]?.unreadCount && o({
            type: "LOSE_GROUP_UNREAD_GATHER",
            payload: v.groupId
          });
        else {
          const x = v.contactId;
          typeof x == "number" && (g.current[x]?.unreadCount ?? 0) > 0 && o({
            type: "LOSE_CONTACT_UNREAD_GATHER",
            payload: x
          });
        }
      else if (typeof v.contactId == "number") {
        const x = v.userId;
        if (typeof x == "number") {
          const k = g.current[x];
          ((k?.unreadCount ?? 0) > 0 || (k?.messages?.some((F) => F.status !== 1) ?? !1)) && o({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: x
          });
        }
      }
    };
    i?.on("markAsRead", h);
    const E = (D) => {
      if (y(D, o)) return;
      const v = D.data;
      v.userId === s.user.userId ? o({ type: "DEL_GROUP", payload: v.groupId }) : o({ type: "DEL_GROUP_MEMBER", payload: v });
    };
    i?.on("deleteGroup", E);
    const b = (D) => {
      if (y(D, o)) return;
      const { group: v, user: x } = D.data;
      d.current[v.groupId] ? x.userId !== s.user.userId && o({
        type: "ADD_GROUP_MEMBER",
        payload: {
          groupId: v.groupId,
          members: [x]
        }
      }) : (console.log("joined to a new group"), i?.emit("chatData"));
    };
    i?.on("joinGroup", b);
    const A = (D) => {
      if (y(D, o)) return;
      const v = D.data, x = v.user;
      x.online = 1;
      const { group: k } = v, O = d.current[k.groupId];
      O && !O.members?.find((F) => F.userId === x.userId) && (x.isManager = 0, O.members?.push(x)), o({ type: "SET_USER_GATHER", payload: x });
    };
    return i?.on("joinGroupSocket", A), () => {
      i?.off("markAsRead", h), i?.off("deleteGroup", E), i?.off("joinGroup", b), i?.off("joinGroupSocket", A);
    };
  }, [i?.id, s.user.userId]);
  const S = Me(() => ({ socket: i, online: a }), [i, a]);
  return /* @__PURE__ */ c(Zr.Provider, { value: S, children: r });
}, fl = ({
  activeGroupId: t,
  activeChatUserId: e,
  hideRooms: n = !1,
  fullWidth: r = !1,
  ...s
}) => {
  console.log("activeChatUserId", e);
  const o = Jn(
    (p) => p.breakpoints.down("md")
  ), { state: i, dispatch: a } = W.useContext(Xe), { socket: l } = W.useContext(Zr), {
    apiUrl: u,
    pageSize: d,
    getPrivateMessages: g,
    getGroupMessages: y,
    getUserByMmk: S
  } = W.useContext(en), h = W.useCallback(() => {
    a({
      type: "SET_ACTIVE_ROOM",
      payload: {}
    });
  }, [a]), E = W.useCallback(
    (p, R) => {
      if (!l) {
        console.warn(`Socket not connected, cannot emit ${p}`);
        return;
      }
      try {
        l.emit(p, R);
      } catch (P) {
        console.error(`Error emitting ${p}:`, P), a({
          type: "SET_ERROR",
          payload: `Failed to send ${p}`
        });
      }
    },
    [l, a]
  ), b = W.useCallback(
    async (p) => {
      try {
        if (a({ type: "SET_LOADING", payload: !0 }), Re(p))
          await y(p);
        else {
          const R = i.messageSearch?.trim();
          await g(p, {
            search: R || void 0
          });
        }
      } catch (R) {
        console.error("Failed to load messages:", R), a({ type: "SET_ERROR", payload: "Failed to load messages" });
      } finally {
        a({ type: "SET_LOADING", payload: !1 });
      }
    },
    [g, y, a, i.messageSearch]
  ), A = W.useCallback(
    (p) => {
      if (i.messageSearch === p)
        return;
      const R = i.activeRoom, P = p.trim(), $ = !!i.messageSearch.trim(), L = !!P;
      if (!R || !L && !$) {
        a({ type: "SET_MESSAGE_SEARCH", payload: p });
        return;
      }
      const j = _.current + 1;
      _.current = j, (async () => {
        try {
          Re(R) ? await y(R, {
            reset: !0,
            shouldIgnore: () => _.current !== j
          }) : await g(R, {
            search: L ? P : void 0,
            reset: !0,
            shouldIgnore: () => _.current !== j
          });
        } catch (we) {
          console.error("Failed to search messages:", we), a({
            type: "SET_ERROR",
            payload: "Failed to search messages"
          });
        } finally {
          _.current === j && a({ type: "SET_MESSAGE_SEARCH", payload: p });
        }
      })();
    },
    [
      a,
      y,
      g,
      i.activeRoom,
      i.messageSearch
    ]
  ), D = W.useCallback(
    (p, R) => {
      E("revokeMessage", {
        groupId: Re(p) ? p.groupId : void 0,
        contactId: p.userId,
        _id: R._id
      });
    },
    [E]
  ), v = W.useCallback(
    (p) => {
      E("typing", {
        groupId: Re(p) ? p.groupId : void 0,
        contactId: p.userId
      });
    },
    [E]
  ), x = W.useCallback(
    (p, R) => {
      const P = {
        content: R.message,
        width: R.width,
        height: R.height,
        fileName: R.fileName,
        messageType: R.messageType,
        size: R.size
      };
      Re(p) ? E("groupMessage", {
        ...P,
        groupId: p.groupId
      }) : E("privateMessage", {
        ...P,
        contactId: p.userId
      });
    },
    [E]
  ), k = W.useCallback(
    (p) => {
      if (!(!p?.messages?.length || !l))
        try {
          const R = p.messages[p.messages.length - 1];
          if (!R?._id) return;
          Re(p) ? l.emit("markAsRead", {
            groupId: p.groupId,
            _id: R._id
          }) : (a({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: p.userId
          }), l.emit("markAsRead", {
            contactId: p.userId,
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
  ), O = W.useCallback(
    (p) => {
      if (p)
        try {
          a({
            type: "SET_ACTIVE_ROOM",
            payload: {
              groupId: Re(p) ? p.groupId : void 0,
              contactId: p?.userId
            }
          }), k(p);
        } catch (R) {
          console.error("Error changing chat:", R), a({
            type: "SET_ERROR",
            payload: "Failed to change chat room"
          });
        }
    },
    [a, k]
  ), F = W.useCallback(
    (p, R, P) => {
      E("startConference", {
        groupId: Re(p) ? p.groupId : void 0,
        contactId: p.userId,
        visitId: R,
        recreate: P
      });
    },
    [E]
  ), H = W.useCallback(
    (p) => {
      p?.id && E("stopConference", {
        id: p.id
      });
    },
    [E]
  ), K = W.useCallback(
    (p) => {
      p?.id && E("pauseConference", {
        id: p.id
      });
    },
    [E]
  ), I = W.useCallback(
    (p) => {
      p?.id && (E("resumeConference", {
        id: p.id
      }), a({ type: "JOIN_CONFERENCE", payload: p }));
    },
    [E, a]
  ), M = W.useCallback(
    (p, R) => {
      E("addOperator", {
        groupId: p.groupId,
        operatorId: R.userId
      });
    },
    [E]
  ), q = W.useCallback(
    (p) => {
      E("deleteGroup", {
        groupId: p.groupId
      });
    },
    [E]
  ), z = W.useMemo(
    () => Object.values(i.groupGather),
    [i.groupGather]
  ), T = W.useMemo(
    () => Object.values(i.contactGather),
    [i.contactGather]
  ), C = W.useMemo(() => t != null ? `group:${t}` : e != null ? `user:${e}` : null, [t, e]), _ = W.useRef(0), w = W.useRef(
    Se(i.activeRoom)
  );
  W.useEffect(() => {
    w.current = Se(i.activeRoom);
  }, [i.activeRoom]), W.useEffect(() => {
    let p = !1;
    const R = (L) => {
      if (!p && L) {
        const j = Se(L);
        if (!j || j === w.current && j === C)
          return;
        O(L);
      }
    };
    if (t != null && !ze(z)) {
      const L = z.find((j) => j.groupId === t);
      if (L)
        return R(L), () => {
          p = !0;
        };
    }
    if (e != null && !ze(T)) {
      const L = T.find(
        (j) => j.userId === e
      );
      if (L)
        return R(L), () => {
          p = !0;
        };
    }
    const P = dn("mmk"), $ = dn("guid");
    return (P != null || $ != null) && !ze(T) && S(P, $).then((L) => {
      L != null && R(T.find((j) => j.userId === L));
    }).catch((L) => {
      console.error("Failed to get user by MMK:", L);
    }), () => {
      p = !0;
    };
  }, [
    t,
    e,
    T,
    z,
    O,
    S,
    C
  ]);
  const f = i.activeRoom ? /* @__PURE__ */ c(
    ni,
    {
      apiUrl: u,
      user: i.user,
      users: i.userGather,
      operators: i.operators,
      chat: i.activeRoom,
      typing: i.typing,
      conference: i.conference.data,
      visitData: i.visitData,
      loading: i.loading,
      pageSize: d,
      onExitRoom: h,
      onEnterRoom: k,
      onNeedMoreMessages: b,
      onMessageDelete: D,
      onTyping: v,
      onSendMessage: x,
      onVideoCall: F,
      onOperatorAdd: M,
      onLeaveGroup: q,
      onContactClick: s.onContactInfoClick,
      messageSearch: i.messageSearch,
      onMessageSearchChange: A,
      isMobile: o
    }
  ) : null;
  return console.log("state.conference", i.conference), /* @__PURE__ */ N(hc, { children: [
    /* @__PURE__ */ c(
      pc,
      {
        isMobile: o,
        conferenceActive: !!i.conference.data?.id,
        hideRooms: n,
        contactsList: i.conference.data?.id != null && t == null ? /* @__PURE__ */ c(
          mc,
          {
            conference: i.conference,
            onClose: K,
            onAccept: I,
            user: i.user,
            activeRoom: i.activeRoom,
            onChangeChat: O,
            apiUrl: u,
            onVideoEnd: H,
            isMobile: o
          }
        ) : /* @__PURE__ */ c(
          uc,
          {
            user: i.user,
            activeRoom: i.activeRoom,
            groups: z,
            contacts: T,
            typing: i.typing,
            onChangeChat: O
          }
        ),
        chatRoom: f,
        activeRoom: i.activeRoom,
        user: i.user,
        onExitRoom: h,
        onChangeChat: O,
        chatOld: i.chatOld
      }
    ),
    /* @__PURE__ */ c(dc, {})
  ] });
}, du = ({
  lang: t,
  chatBaseURLApi: e,
  baseUrl: n,
  chatWsUrl: r,
  chatWsPath: s,
  token: o,
  refreshToken: i,
  ...a
}) => /* @__PURE__ */ c(Qa, { defLang: t, token: o, refreshToken: i, children: /* @__PURE__ */ c(
  ec,
  {
    chatBaseURLApi: e,
    pageSize: 25,
    baseUrl: n,
    children: /* @__PURE__ */ c(dl, { wsUrl: r, wsPath: s, baseUrl: n, children: /* @__PURE__ */ c(fl, { ...a }) })
  }
) });
export {
  Xs as AddContact,
  ql as CHAT_ACTIONS,
  Xe as ChatContext,
  du as ChatIndex,
  fl as ChatPage,
  Qa as ChatProvider,
  io as Conference,
  co as ConferenceCall,
  js as ContextMenuType,
  uo as Emoji,
  fr as Message,
  Fs as MessageStatus,
  en as RestContext,
  ec as RestProvider,
  $s as Role,
  ni as Room,
  uc as RoomList,
  Zr as SocketContext,
  dl as SocketProvider,
  Ks as Typing,
  lu as clearLocalStorage,
  Fr as getRefreshToken
};
//# sourceMappingURL=mobimed.esm.js.map
