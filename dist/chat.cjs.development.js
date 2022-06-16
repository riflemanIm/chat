'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var material = require('@mui/material');
var styles = require('@mui/styles');
var FileCopyIcon = _interopDefault(require('@mui/icons-material/FileCopy'));
var DeleteIcon = _interopDefault(require('@mui/icons-material/Delete'));
var ArrowBackIcon = _interopDefault(require('@mui/icons-material/ArrowBack'));
var iconsMaterial = require('@mui/icons-material');
var reactI18next = require('react-i18next');
var moment = _interopDefault(require('moment'));
var Viewer = _interopDefault(require('react-viewer'));
var lab = require('@mui/lab');
var GroupIcon = _interopDefault(require('@mui/icons-material/Group'));
var VideoCallIcon = _interopDefault(require('@mui/icons-material/VideoCall'));
var CallEndIcon = _interopDefault(require('@mui/icons-material/CallEnd'));
var PersonAddIcon = _interopDefault(require('@mui/icons-material/PersonAdd'));
var StarIcon = _interopDefault(require('@mui/icons-material/Star'));
var List = _interopDefault(require('@mui/material/List'));
var axios = _interopDefault(require('axios'));
var io = _interopDefault(require('socket.io-client'));

(function (MessageStatus) {
  MessageStatus[MessageStatus["sent"] = 0] = "sent";
  MessageStatus[MessageStatus["read"] = 1] = "read";
})(exports.MessageStatus || (exports.MessageStatus = {}));

(function (Role) {
  Role[Role["Unknown"] = 0] = "Unknown";
  Role[Role["Client"] = 1] = "Client";
  Role[Role["Agent"] = 2] = "Agent";
  Role[Role["Specialist"] = 3] = "Specialist";
  Role[Role["Operator"] = 4] = "Operator";
})(exports.Role || (exports.Role = {})); // Операции контекстного меню

(function (ContextMenuType) {
  ContextMenuType["COPY"] = "COPY";
  ContextMenuType["REVOKE"] = "REVOKE";
  ContextMenuType["TOP_REVERT"] = "TOP_REVERT";
  ContextMenuType["TOP"] = "TOP";
  ContextMenuType["READ"] = "READ";
  ContextMenuType["DELETE"] = "DELETE"; // Удалить
})(exports.ContextMenuType || (exports.ContextMenuType = {}));

var useStyles = /*#__PURE__*/styles.makeStyles(function () {
  return styles.createStyles({
    item: {
      cursor: "pointer"
    }
  });
});

var Emoji = function Emoji(props) {
  var classes = useStyles();

  var emojiClick = function emojiClick(e) {
    if (props.onSelect) {
      props.onSelect(e.target.innerText);
    }
  };

  var Item = function Item(itemProps) {
    return /*#__PURE__*/React.createElement(material.Box, {
      m: 0.5,
      component: "span",
      onClick: emojiClick,
      className: classes.item
    }, itemProps.emoji);
  };

  return /*#__PURE__*/React.createElement(material.Box, null, /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE03"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE01"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE02"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE04"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE05"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE06"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE07"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE08"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE09"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0B"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0D"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0E"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0F"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE10"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE12"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE13"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\u2753"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE15"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE16"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE17"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE18"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE19"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1D"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1E"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1F"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE20"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE21"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE22"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE23"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE24"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE25"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE26"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE28"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE29"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2B"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2D"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2E"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2F"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE30"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE32"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE33"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE34"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE35"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDDD0"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE37"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE41"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE42"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE43"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD10"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD11"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD12"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD13"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD14"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD15"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD20"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD21"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD22"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD24"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD25"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD27"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD28"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD29"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2B"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2D"
  })));
};

var useStyles$1 = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
    typingText: {
      paddingLeft: theme.spacing(0.5)
    },
    typingDot: {
      display: "inline-block",
      verticalAlign: "middle",
      width: 4,
      height: 4,
      margin: "0px 2px",
      background: theme.palette.primary.main,
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
  });
});

var Typing = function Typing(props) {
  var classes = useStyles$1();
  return /*#__PURE__*/React__default.createElement(material.Typography, {
    color: "primary",
    variant: "body2",
    component: "span"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingDot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingDot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingDot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingText
  }, props.message));
};

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var useStyles$2 = /*#__PURE__*/styles.makeStyles(function () {
  return {
    input: {
      flex: "auto"
    },
    inputUpload: {
      display: "none"
    },
    attachmentIcon: {
      fill: "none",
      stroke: "currentColor"
    }
  };
});
/**
 * Рассчитать пропорции изображения
 */

var getImageSize = function getImageSize(data) {
  var width = data.width,
      height = data.height;

  if (width > 335 || height > 335) {
    if (width > height) {
      height = 335 * (height / width);
      width = 335;
    } else {
      width = 335 * (width / height);
      height = 335;
    }
  }

  return {
    width: width,
    height: height
  };
};

var Entry = function Entry(props) {
  var classes = useStyles$2();
  var chat = props.chat;

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var _React$useState = React__default.useState(null),
      empjiEl = _React$useState[0],
      setEmojiEl = _React$useState[1];

  var _React$useState2 = React__default.useState(""),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var _React$useState3 = React__default.useState({
    chat: chat,
    time: 0
  }),
      lastTyping = _React$useState3[0],
      setLastTyping = _React$useState3[1];

  var handleEmojiClick = function handleEmojiClick(event) {
    setEmojiEl(event.currentTarget);
  };

  var handleEmojiClose = function handleEmojiClose() {
    setEmojiEl(null);
  };

  var emojiSelect = function emojiSelect(emoji) {
    setText("" + text + emoji);
    handleEmojiClose();
  };

  var onChange = function onChange(_ref) {
    var target = _ref.target;
    setText(target.value);

    if (chat && props.onTyping && (lastTyping.chat !== chat || Date.now() - lastTyping.time >= 500)) {
      setLastTyping({
        chat: chat,
        time: Date.now()
      });
      props.onTyping(chat);
    }
  };

  var sendMessage = function sendMessage(data) {
    if (chat && props.onSendMessage) props.onSendMessage(chat, data);
  };

  var submit = function submit() {
    if (text.trim().length === 0) {
      return;
    }

    sendMessage({
      message: text,
      messageType: "text"
    });
    setText("");
  };

  var onSubmitClick = function onSubmitClick(event) {
    event.preventDefault();
    submit();
  };

  var onKeyPress = function onKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  };

  var onSubmitFile = function onSubmitFile(event) {
    if (!event.currentTarget.files) return;
    var file = event.currentTarget.files[0];
    var messageType;

    if (file.type.includes("image")) {
      messageType = "image";
    } else if (file.type.includes("video")) {
      messageType = "video";
    } else {
      messageType = "file";
    }

    if (messageType === "image") {
      var image = new Image();
      var url = window.URL || window.webkitURL;
      image.src = url.createObjectURL(file);

      image.onload = function () {
        var imageSize = getImageSize({
          width: image.width,
          height: image.height
        });
        sendMessage({
          message: file,
          width: imageSize.width,
          height: imageSize.height,
          messageType: messageType
        });
      };
    } else {
      sendMessage({
        message: file,
        messageType: messageType,
        fileName: file.name,
        size: file.size
      });
    }
  };

  var emojiOpen = Boolean(empjiEl);
  var enojiId = emojiOpen ? "simple-popover" : undefined;
  return /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React__default.createElement(material.TextField, {
    className: classes.input,
    placeholder: t("CHAT.INPUT_MESSAGE"),
    autoFocus: true,
    variant: "standard",
    InputProps: {
      disableUnderline: true,
      startAdornment: /*#__PURE__*/React__default.createElement(material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React__default.createElement("input", {
        accept: "*",
        className: classes.inputUpload,
        id: "icon-button-file",
        type: "file",
        onChange: onSubmitFile
      }), /*#__PURE__*/React__default.createElement("label", {
        htmlFor: "icon-button-file"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, {
        color: "primary",
        "aria-label": "upload",
        component: "span",
        size: "small"
      }, /*#__PURE__*/React__default.createElement(material.SvgIcon, {
        fill: "none",
        className: classes.attachmentIcon
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })))), " ", /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-describedby": enojiId,
        onClick: handleEmojiClick,
        color: "primary",
        size: "small"
      }, /*#__PURE__*/React__default.createElement(iconsMaterial.InsertEmoticon, null))),
      endAdornment: /*#__PURE__*/React__default.createElement(material.IconButton, {
        edge: "end",
        color: "inherit",
        size: "small",
        onClick: onSubmitClick
      }, /*#__PURE__*/React__default.createElement(iconsMaterial.Send, null))
    },
    value: text,
    onChange: onChange,
    onKeyPress: onKeyPress
  }), /*#__PURE__*/React__default.createElement(material.Popover, {
    id: enojiId,
    open: emojiOpen,
    anchorEl: empjiEl,
    onClose: handleEmojiClose,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "left"
    }
  }, /*#__PURE__*/React__default.createElement(Emoji, {
    onSelect: emojiSelect
  })));
};

function isEmpty(value) {
  return value == null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
} // string contains string
/**
 * Формитирование времени сообщения
 * @param time
 */

function formatTime(time) {
  if (typeof time === "undefined") return null;
  if (typeof time === "string") time = new Date(time); // больше чем вчера

  if (moment().add(-1, "days").startOf("day").isAfter(time)) {
    return moment(time).format("DD.MM.YYYY HH:mm");
  } // вчера


  if (moment().startOf("day").isAfter(time)) {
    return "\u0412\u0447\u0435\u0440\u0430 \u0432 " + moment(time).format("HH:mm");
  }

  return moment(time).format("HH:mm");
}
/**
 * Раскрыть содержимое
 * @param content - данные в строке
 */

function getFileMeta(content) {
  // Формат  [date]$[userId]$[size]$[fileName]
  // Например fileName = 1606980397047$1a01e20f-3780-4227-84b5-5c69ca766ee5$15.41KB$123.docx
  var meta = content.split("$");
  var date = meta[0],
      userId = meta[1],
      size = meta[2],
      name = meta[3];
  return {
    date: date,
    userId: userId,
    size: size,
    name: name
  };
}
function getImageMeta(content) {
  // Формат [date]$[userId]$[width]$[height]$...
  var meta = content.split("$");
  var date = meta[0],
      userId = meta[1],
      width = meta[2],
      height = meta[3];
  return {
    date: date,
    userId: userId,
    width: width,
    height: height
  };
}
function splitFileName(name) {
  var idx = name.lastIndexOf(".");
  if (idx === -1) return {
    name: name,
    ext: ""
  };
  return {
    name: name.slice(0, idx),
    ext: name.slice(idx + 1)
  };
}
var getChatId = function getChatId(chat) {
  if (!chat) return null;
  return chat.groupId ? "group:" + chat.groupId : "user:" + chat.userId;
};
var getChatName = function getChatName(chat) {
  return chat.groupId ? chat.name : chat.username;
};
var chatRoomComparer = function chatRoomComparer(a, b) {
  var hasMessagesA = Array.isArray(a.messages) && a.messages.length > 0;
  var hasMessagesB = Array.isArray(b.messages) && b.messages.length > 0;

  if (hasMessagesA && hasMessagesB && b.messages != null && a.messages != null) {
    return new Date(b.messages[b.messages.length - 1].cdate).getTime() - new Date(a.messages[a.messages.length - 1].cdate).getTime();
  }

  if (hasMessagesA) {
    return -1;
  }

  return 1;
};

var useStyles$3 = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
    fileIcon: {
      fontSize: "0.75rem"
    },
    fileBody: {
      paddingLeft: theme.spacing(1)
    }
  });
});

var File = function File(_ref) {
  var message = _ref.message;
  var classes = useStyles$3();
  var meta = getFileMeta(message.content);

  var _splitFileName = splitFileName(meta.name),
      name = _splitFileName.name,
      ext = _splitFileName.ext;

  return /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React__default.createElement(material.Avatar, {
    className: classes.fileIcon
  }, ext.toUpperCase()), /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "column",
    className: classes.fileBody
  }, name, /*#__PURE__*/React__default.createElement("span", null, ext + " " + meta.size)));
};

var useStyles$4 = /*#__PURE__*/styles.makeStyles(function () {
  return {
    mediaContent: {
      maxWidth: 350,
      maxHeight: 350
    }
  };
});

var Video = function Video(_ref) {
  var apiUrl = _ref.apiUrl,
      message = _ref.message,
      isConference = _ref.isConference;
  var classes = useStyles$4();
  var src = "";

  if (isConference) {
    var meta = JSON.parse(message.content);
    src = apiUrl + "/static/conf/" + meta.visitId + "/" + meta.name;
  } else src = apiUrl + "/static/file/" + message.content;

  return /*#__PURE__*/React__default.createElement("video", {
    src: src,
    className: classes.mediaContent,
    controls: true,
    muted: true
  }, "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0435\u0433 video.");
};

var useStyles$5 = /*#__PURE__*/styles.makeStyles(function (theme) {
  var _mediaContent;

  return styles.createStyles({
    mediaContent: (_mediaContent = {
      maxWidth: 350,
      maxHeight: 350,
      cursor: "pointer"
    }, _mediaContent[theme.breakpoints.down("sm")] = {
      maxWidth: 250,
      maxHeight: 250
    }, _mediaContent)
  });
});

var Image$1 = function Image(_ref) {
  var apiUrl = _ref.apiUrl,
      message = _ref.message;
  var classes = useStyles$5();

  var _React$useState = React__default.useState(false),
      viewerVisible = _React$useState[0],
      setViewerVisible = _React$useState[1];

  var meta = getImageMeta(message.content);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Viewer, {
    zIndex: 2000,
    visible: viewerVisible,
    changeable: false,
    onClose: function onClose() {
      setViewerVisible(false);
    },
    images: [{
      src: apiUrl + "/static/image/" + message.content
    }]
  }), /*#__PURE__*/React__default.createElement("img", {
    src: apiUrl + "/static/image/" + message.content,
    width: meta.width,
    height: meta.height,
    className: classes.mediaContent,
    onClick: function onClick() {
      setViewerVisible(true);
    }
  }));
};

var MessageContent = function MessageContent(_ref) {
  var apiUrl = _ref.apiUrl,
      message = _ref.message;

  switch (message.messageType) {
    case "text":
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, message.content);

    case "video":
    case "video_conference":
      return /*#__PURE__*/React__default.createElement(Video, {
        message: message,
        apiUrl: apiUrl,
        isConference: message.messageType === "video_conference"
      });

    case "image":
      return /*#__PURE__*/React__default.createElement(Image$1, {
        message: message,
        apiUrl: apiUrl
      });

    case "file":
      return /*#__PURE__*/React__default.createElement(File, {
        message: message
      });
  }

  return null;
};

var useStyles$6 = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
    rootContact: {
      "& span": {
        float: "right",
        color: "#B2B6C2"
      },
      "& $message": {
        backgroundColor: "#F1F4FC",
        color: "black"
      },
      "& $lastMessage": {
        borderBottomLeftRadius: 0
      }
    },
    rootUser: {
      justifyContent: "flex-end",
      "& span": {
        float: "right",
        color: "#D9DEEC"
      },
      "& $message": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      "& $lastMessage": {
        borderBottomRightRadius: 0
      }
    },
    rootNotify: {
      justifyContent: "center",
      "& > *": {
        padding: "0px " + theme.spacing(1),
        borderRadius: 16,
        fontWeight: 500
      }
    },
    message: {
      maxWidth: "85%",
      borderRadius: 16,
      padding: theme.spacing(1)
    },
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
      paddingLeft: theme.spacing(1),
      flex: "1 1 auto",
      alignSelf: "flex-end"
    },
    statusImage: {
      fontSize: "1rem",
      marginRight: theme.spacing(0.5),
      verticalAlign: "middle"
    }
  });
});

var wrapMessage = function wrapMessage(apiUrl, message, classes, isUserLast, onContextMenu, child) {
  var messageType = message.messageType;
  var className = isUserLast ? classes.message + " " + classes.lastMessage : classes.message;

  if (messageType === "file") {
    return /*#__PURE__*/React.createElement(material.Link, {
      className: className + " " + classes.file,
      underline: "none",
      href: apiUrl + "/static/file/" + message.content,
      target: "_blank",
      download: true,
      onContextMenu: onContextMenu
    }, child);
  }

  var isMedia = messageType === "image" || messageType === "video" || messageType === "video_conference";
  return /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: isMedia ? "column" : "row",
    flexWrap: "wrap",
    className: className,
    onContextMenu: onContextMenu
  }, child);
};

var Message = function Message(props) {
  var classes = useStyles$6();

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var apiUrl = props.apiUrl,
      message = props.message,
      owner = props.owner,
      refOnLastMess = props.refOnLastMess,
      user = props.user,
      isGroupMessage = props.isGroupMessage,
      isUserFirst = props.isUserFirst,
      isUserLast = props.isUserLast;

  if (message.messageType === "notify") {
    // Уведомление - особый случай
    var content = message.content[0] === "{" ? JSON.parse(message.content) : message.content;
    return /*#__PURE__*/React.createElement(material.ListItem, {
      className: classes.rootNotify
    }, /*#__PURE__*/React.createElement(lab.Alert, {
      severity: typeof content === "string" ? "info" : content.severity,
      ref: refOnLastMess
    }, typeof content === "string" ? content : content.message));
  }

  if (message.isRevoke) {
    // Удаленное сообщение
    return /*#__PURE__*/React.createElement(material.ListItem, {
      className: classes.rootNotify
    }, /*#__PURE__*/React.createElement(material.Typography, {
      variant: "body2",
      ref: refOnLastMess,
      align: "center"
    }, message.userId === user.userId ? t("CHAT.MESSAGE.REVOKED.YOU") : message.revokeUserName + " " + t("CHAT.MESSAGE.REVOKED.CONTACT")));
  }

  var isMine = user.userId === message.userId;
  return /*#__PURE__*/React.createElement(material.ListItem, {
    className: isMine ? classes.rootUser : classes.rootContact
  }, wrapMessage(apiUrl, message, classes, isUserLast, props.onContextMenu, /*#__PURE__*/React.createElement(React.Fragment, null, !isMine && isGroupMessage && owner && isUserFirst && /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, owner.username), /*#__PURE__*/React.createElement("div", {
    className: classes.body
  }, /*#__PURE__*/React.createElement(MessageContent, {
    message: message,
    apiUrl: apiUrl
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.status,
    ref: refOnLastMess
  }, /*#__PURE__*/React.createElement("span", null, isMine ? message.status === 0 ? /*#__PURE__*/React.createElement(iconsMaterial.Done, {
    className: classes.statusImage
  }) : /*#__PURE__*/React.createElement(iconsMaterial.DoneAll, {
    className: classes.statusImage
  }) : null, formatTime(message.cdate))))));
};

var ContactStatus = function ContactStatus(props) {
  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  if (props.isTyping) return /*#__PURE__*/React__default.createElement(Typing, {
    message: t("CHAT.STATUS.TYPING")
  });
  if (props.contact.online === 1) return /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    color: "primary",
    component: "span"
  }, t("CHAT.STATUS.ONLINE"));
  return /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, t("CHAT.STATUS.OFFLINE"));
};

var useStyles$7 = /*#__PURE__*/styles.makeStyles(function () {
  return {
    star: {
      fontSize: "0.85rem",
      verticalAlign: "middle"
    }
  };
});

var ContactList = function ContactList(props) {
  var classes = useStyles$7();
  var apiUrl = props.apiUrl,
      contacts = props.contacts,
      owner = props.owner;
  return /*#__PURE__*/React__default.createElement(material.List, {
    "aria-label": "contacts"
  }, contacts.map(function (contact) {
    return /*#__PURE__*/React__default.createElement(material.ListItem, {
      button: true,
      key: contact.userId,
      onClick: function onClick() {
        return props.onClick && props.onClick(contact);
      }
    }, /*#__PURE__*/React__default.createElement(material.ListItemAvatar, null, /*#__PURE__*/React__default.createElement(material.Avatar, {
      alt: contact.username,
      src: "" + apiUrl + contact.avatar
    })), /*#__PURE__*/React__default.createElement(material.ListItemText, {
      primary: /*#__PURE__*/React__default.createElement("span", null, contact.username, " ", owner === contact.userId && /*#__PURE__*/React__default.createElement(StarIcon, {
        className: classes.star,
        color: "primary"
      })),
      secondary: /*#__PURE__*/React__default.createElement(ContactStatus, {
        contact: contact,
        isTyping: false
      })
    }));
  }));
};

var AddContact = function AddContact(props) {
  var onClose = props.onClose,
      open = props.open,
      apiUrl = props.apiUrl,
      contacts = props.contacts;

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var handleClose = function handleClose() {
    onClose();
  };

  var handleListItemClick = function handleListItemClick(contact) {
    onClose(contact);
  };

  return /*#__PURE__*/React__default.createElement(material.Dialog, {
    onClose: handleClose,
    "aria-labelledby": "add-contact-title",
    open: open
  }, /*#__PURE__*/React__default.createElement(material.DialogTitle, {
    id: "switch-operator-title"
  }, t("CHAT.ADD_CONTACT")), /*#__PURE__*/React__default.createElement(ContactList, {
    apiUrl: apiUrl,
    contacts: contacts,
    onClick: handleListItemClick
  }));
};

var useStyles$8 = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
    popover: {
      pointerEvents: "none"
    },
    paper: {
      padding: theme.spacing(1)
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff"
    }
  });
});

var getGroupStatus = function getGroupStatus(group, t) {
  var _group$members;

  var status = [((_group$members = group.members) == null ? void 0 : _group$members.length) + " " + t("CHAT.MEMBERS")];
  var onlineCount = (group.members || []).reduce(function (sum, contact) {
    return contact.online ? sum + 1 : sum;
  }, 0);
  if (onlineCount) status.push(onlineCount + " " + t("CHAT.STATUS.ONLINE"));
  return status.join(", ");
};

var RoomHeader = function RoomHeader(_ref) {
  var apiUrl = _ref.apiUrl,
      user = _ref.user,
      chat = _ref.chat,
      typing = _ref.typing,
      conference = _ref.conference,
      className = _ref.className,
      operators = _ref.operators,
      onVideoCall = _ref.onVideoCall,
      onVideoEnd = _ref.onVideoEnd,
      onOperatorAdd = _ref.onOperatorAdd,
      onLeaveGroup = _ref.onLeaveGroup;
  var classes = useStyles$8();

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var _React$useState = React__default.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React__default.useState(false),
      addOperatorOpen = _React$useState2[0],
      setAddOperatorOpen = _React$useState2[1];

  if (!chat) return /*#__PURE__*/React__default.createElement(material.CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(material.Avatar, null),
    title: "",
    subheader: "",
    className: className
  });

  var handlePopoverOpen = function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handlePopoverClose = function handlePopoverClose() {
    setAnchorEl(null);
  };

  var handleAddOperatorOpen = function handleAddOperatorOpen() {
    setAddOperatorOpen(true);
  };

  var handleAddOperatorClose = function handleAddOperatorClose(operator) {
    setAddOperatorOpen(false);
    if (onOperatorAdd && operator && chat) onOperatorAdd(chat, operator);
  };

  var group = chat;

  if (group.groupId) {
    var _group$members2;

    // группа
    return /*#__PURE__*/React__default.createElement(material.CardHeader, {
      avatar: /*#__PURE__*/React__default.createElement(material.Avatar, {
        alt: group.name,
        className: classes.avatarGroup
      }, /*#__PURE__*/React__default.createElement(GroupIcon, null), " "),
      title: group.name,
      subheader: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
        "aria-owns": anchorEl ? "mouse-over-popover" : undefined,
        "aria-haspopup": "true",
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose
      }, getGroupStatus(group, t)), /*#__PURE__*/React__default.createElement(material.Popover, {
        id: "mouse-over-popover",
        className: classes.popover,
        classes: {
          paper: classes.paper
        },
        open: !!anchorEl,
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        onClose: handlePopoverClose,
        disableRestoreFocus: true
      }, /*#__PURE__*/React__default.createElement(ContactList, {
        apiUrl: apiUrl,
        contacts: group.members,
        owner: group.userId
      }))),
      className: className,
      action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role === 4 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "add user",
        onClick: handleAddOperatorOpen
      }, /*#__PURE__*/React__default.createElement(PersonAddIcon, null)), /*#__PURE__*/React__default.createElement(AddContact, {
        apiUrl: apiUrl,
        open: addOperatorOpen,
        contacts: operators,
        onClose: handleAddOperatorClose
      })), user.role === 4 && ((_group$members2 = group.members) == null ? void 0 : _group$members2.find(function (it) {
        return it.userId !== user.userId && it.role === 4;
      })) && onLeaveGroup && /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "leave group",
        onClick: function onClick() {
          return onLeaveGroup(group);
        }
      }, /*#__PURE__*/React__default.createElement(DeleteIcon, null)))
    });
  }

  var contact = chat;
  var isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId; //console.log("conference", conference, "user", user, "contact", contact)

  return /*#__PURE__*/React__default.createElement(material.CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(material.Avatar, {
      alt: contact.username,
      src: "" + apiUrl + contact.avatar
    }),
    title: contact.username,
    subheader: /*#__PURE__*/React__default.createElement(ContactStatus, {
      contact: contact,
      isTyping: isTyping
    }),
    className: className,
    action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, conference != null && onVideoEnd != null && /*#__PURE__*/React__default.createElement(material.Button, {
      "aria-label": "cancel call",
      variant: "contained",
      color: "primary",
      size: "small",
      disabled: !contact.online,
      startIcon: /*#__PURE__*/React__default.createElement(CallEndIcon, {
        color: "error"
      }),
      onClick: function onClick() {
        return onVideoEnd(conference);
      }
    }, t("CHAT.CONFERENCE.FINISH")), conference == null && onVideoCall != null && user.role === 3 && /*#__PURE__*/React__default.createElement(material.Button, {
      "aria-label": "video call",
      variant: "contained",
      color: "primary",
      size: "small",
      disabled: !contact.online,
      startIcon: /*#__PURE__*/React__default.createElement(VideoCallIcon, null),
      onClick: function onClick() {
        return onVideoCall(contact);
      }
    }, t("CHAT.CONFERENCE.START")))
  });
};

var useStyles$9 = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
    root: {
      width: "100%",
      minWidth: 360,
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    inline: {
      display: "inline"
    },
    messageListOuter: {
      flex: 1,
      overflowY: "auto",
      margin: 0,
      padding: 0,
      scrollbarWidth: "thin",
      scrollbarColor: "#6b6b6b #fff",
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        backgroundColor: "#fff"
      },
      "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        borderRadius: 8,
        backgroundColor: "#d5d9ef",
        border: "5px solid #fff"
      },
      "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
        backgroundColor: "#fff"
      },
      "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#73d7f5",
        border: "3px solid #fff"
      },
      "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#73d7f5",
        border: "3px solid #fff"
      },
      "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
        backgroundColor: "#fff"
      }
    },
    messageList: {
      height: "100%",
      overflow: "auto"
    },
    roomHeader: {
      flex: 1
    },
    roomProgress: {
      padding: theme.spacing(2)
    },
    flexAll: {
      flex: "1 1 auto"
    },
    flexEnd: {
      justifyContent: "flex-end"
    }
  });
});
var initialMenuState = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: false,
  canDelete: false
};
var initialScrollState = {
  autoScroll: true,
  height: 0
};

var Room = function Room(props) {
  var apiUrl = props.apiUrl,
      user = props.user,
      users = props.users,
      chat = props.chat,
      typing = props.typing,
      conference = props.conference,
      loading = props.loading,
      pageSize = props.pageSize;
  var classes = useStyles$9();

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var _React$useState = React__default.useState(initialScrollState),
      scrollState = _React$useState[0],
      setScrollState = _React$useState[1];

  var messages = chat == null ? void 0 : chat.messages;
  var messageCount = (messages == null ? void 0 : messages.length) || 0;
  var refOnLastMess = React__default.useRef(null);
  var refList = React__default.useRef(null);

  var _React$useState2 = React__default.useState(initialMenuState),
      menuState = _React$useState2[0],
      setMenuState = _React$useState2[1];

  React__default.useEffect(function () {
    if (props.onEnterRoom && chat) props.onEnterRoom(chat);
  }, [getChatId(chat)]);
  React__default.useLayoutEffect(function () {
    if (scrollState.autoScroll && refOnLastMess.current) {
      refOnLastMess.current.scrollIntoView();
    }
  }, [getChatId(chat), messageCount]);
  React__default.useLayoutEffect(function () {
    if (!loading && refList.current && scrollState.height > 0) {
      refList.current.scrollTop = refList.current.scrollHeight - scrollState.height;
      setScrollState(initialScrollState);
    }
  }, [getChatId(chat), loading, scrollState.height]);
  var onScroll = React__default.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var currentTarget;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentTarget = event.currentTarget;

              if (!(!currentTarget || !chat || !!chat.noMoreData)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              if (currentTarget.scrollTop === 0) {
                if (messageCount >= pageSize && !loading && props.onNeedMoreMessages) {
                  setScrollState({
                    autoScroll: false,
                    height: currentTarget.scrollHeight
                  });
                  props.onNeedMoreMessages(chat);
                }
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [chat, loading]);

  var handleMenuPopup = function handleMenuPopup(message, event) {
    var canCopy = message.messageType === "text";
    var canDelete = user.userId === message.userId && !!props.onMeesageDelete && new Date().getTime() - new Date(message.cdate).getTime() <= 1000 * 60 * 2;

    if (!canCopy && !canDelete) {
      setMenuState(initialMenuState);
      return;
    }

    event.preventDefault();
    setMenuState({
      message: message,
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      canCopy: canCopy,
      canDelete: canDelete
    });
  };

  var handleMenuClose = function handleMenuClose() {
    setMenuState(initialMenuState);
  };

  var handleCopy = React.useCallback(function () {
    var message = menuState.message;
    setMenuState(initialMenuState);
    if (!message) return;
    navigator.clipboard.writeText(message.content);
  }, [menuState.message]);
  var handleDelete = React.useCallback(function () {
    var message = menuState.message;
    setMenuState(initialMenuState);
    if (props.onMeesageDelete && chat && message) props.onMeesageDelete(chat, message);
  }, [menuState.message]);
  console.log("messages", messages);
  return /*#__PURE__*/React__default.createElement(material.Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, props.onExitRoom && chat && /*#__PURE__*/React__default.createElement(material.IconButton, {
    "aria-label": "exit room",
    onClick: function onClick() {
      return props.onExitRoom && props.onExitRoom(chat);
    }
  }, /*#__PURE__*/React__default.createElement(ArrowBackIcon, null)), /*#__PURE__*/React__default.createElement(RoomHeader, {
    apiUrl: apiUrl,
    user: user,
    chat: chat,
    typing: typing,
    conference: conference,
    operators: props.operators,
    className: classes.roomHeader,
    onVideoCall: props.onVideoCall,
    onVideoEnd: props.onVideoEnd,
    onOperatorAdd: props.onOperatorAdd,
    onLeaveGroup: props.onLeaveGroup
  }), loading && /*#__PURE__*/React__default.createElement("div", {
    className: classes.roomProgress
  }, /*#__PURE__*/React__default.createElement(material.CircularProgress, {
    size: 20
  }))), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(material.CardContent, {
    className: classes.messageListOuter
  }, !isEmpty(messages) ? /*#__PURE__*/React__default.createElement(material.List, {
    className: classes.messageList,
    onScroll: onScroll
  }, messages != null && messages.map(function (message, inx) {
    return /*#__PURE__*/React__default.createElement(Message, {
      key: message._id,
      apiUrl: apiUrl,
      user: user,
      message: message,
      owner: users[message.userId],
      isGroupMessage: !!(chat != null && chat.groupId),
      isUserFirst: inx === 0 || messages[inx - 1].messageType === "notify" || messages[inx - 1].userId !== messages[inx].userId,
      isUserLast: inx === messages.length - 1 || messages[inx + 1].messageType === "notify" || messages[inx + 1].userId !== messages[inx].userId,
      onContextMenu: function onContextMenu(event) {
        return handleMenuPopup(message, event);
      },
      refOnLastMess: inx === messages.length - 1 ? refOnLastMess : null
    });
  })) : null), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(material.CardContent, null, /*#__PURE__*/React__default.createElement(Entry, {
    chat: chat,
    onTyping: props.onTyping,
    onSendMessage: props.onSendMessage
  })), /*#__PURE__*/React__default.createElement(material.Menu, {
    keepMounted: true,
    open: menuState.mouseY !== null,
    onClose: handleMenuClose,
    anchorReference: "anchorPosition",
    anchorPosition: menuState.mouseY !== null && menuState.mouseX !== null ? {
      top: menuState.mouseY,
      left: menuState.mouseX
    } : undefined
  }, /*#__PURE__*/React__default.createElement(material.MenuItem, {
    onClick: handleCopy,
    disabled: !menuState.canCopy
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t("CHAT.MESSAGE.MENU.COPY")), /*#__PURE__*/React__default.createElement(material.ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(FileCopyIcon, {
    fontSize: "small"
  }))), /*#__PURE__*/React__default.createElement(material.MenuItem, {
    onClick: handleDelete,
    disabled: !menuState.canDelete
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t("CHAT.MESSAGE.MENU.DELETE")), /*#__PURE__*/React__default.createElement(material.ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(DeleteIcon, {
    fontSize: "small"
  })))));
};

var useStyles$a = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
    main: {
      flex: "1 1 auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    time: {
      paddingLeft: theme.spacing(1),
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
  });
});

var getMessageText = function getMessageText(message, t) {
  if (!message) return null;

  switch (message.messageType) {
    case "text":
      return message.content;

    case "image":
      return "[" + t("CHAT.MESSAGE.TYPE.IMAGE") + "]";

    case "video":
      return "[" + t("CHAT.MESSAGE.TYPE.VIDEO") + "]";

    case "file":
      return "[" + t("CHAT.MESSAGE.TYPE.FILE") + "]";

    case "notify":
      return "[" + t("CHAT.MESSAGE.TYPE.NOTIFY") + "]";

    default:
      return null;
  }
};

var TypingBadge = /*#__PURE__*/styles.withStyles(function (theme) {
  return styles.createStyles({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: "0 0 0 2px " + theme.palette.background.paper,
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
  });
})(material.Badge);
var OnlineBadge = /*#__PURE__*/styles.withStyles(function (theme) {
  return styles.createStyles({
    badge: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 0 0 2px " + theme.palette.background.paper
    }
  });
})(material.Badge);

var contactAvatar = function contactAvatar(apiUrl, contact, typing) {
  var avatar = /*#__PURE__*/React__default.createElement(material.Avatar, {
    alt: contact.username,
    src: "" + apiUrl + contact.avatar
  });
  var isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId;
  if (isTyping) return /*#__PURE__*/React__default.createElement(TypingBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    variant: "dot"
  }, avatar);
  if (contact != null && contact.online) return /*#__PURE__*/React__default.createElement(OnlineBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    variant: "dot"
  }, avatar);
  return avatar;
};

var RoomListItem = function RoomListItem(props) {
  var classes = useStyles$a();

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var apiUrl = props.apiUrl,
      chat = props.chat,
      typing = props.typing;
  var roomName = getChatName(chat);
  var avatar = chat.groupId ? /*#__PURE__*/React__default.createElement(material.Avatar, {
    alt: roomName,
    className: classes.avatarGroup
  }, /*#__PURE__*/React__default.createElement(GroupIcon, null), " ") : contactAvatar(apiUrl, chat, typing);
  var lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
  var roomText = getMessageText(lastMessage, t);
  var roomTime = lastMessage == null ? void 0 : lastMessage.cdate;
  return /*#__PURE__*/React__default.createElement(material.ListItem, {
    button: true,
    selected: props.active,
    onClick: props.onClick
  }, /*#__PURE__*/React__default.createElement(material.ListItemAvatar, null, avatar), /*#__PURE__*/React__default.createElement(material.ListItemText, {
    secondaryTypographyProps: {
      component: "span"
    },
    primary: /*#__PURE__*/React__default.createElement(material.Box, {
      display: "flex",
      flexDirection: "row"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.main
    }, roomName), /*#__PURE__*/React__default.createElement("span", {
      className: classes.time
    }, formatTime(roomTime))),
    secondary: /*#__PURE__*/React__default.createElement(material.Box, {
      display: "flex",
      flexDirection: "row"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.main
    }, roomText), chat.unreadCount ? /*#__PURE__*/React__default.createElement(material.Chip, {
      className: classes.unread,
      component: "span",
      size: "small",
      color: "primary",
      label: chat.unreadCount
    }) : null)
  }));
};

var useStyles$b = /*#__PURE__*/styles.makeStyles(function () {
  return {
    root: {
      width: "100%",
      height: "100%"
    },
    searchField: {
      width: "100%"
    }
  };
});

var filterChats = function filterChats(chats, filter) {
  if (filter === null) return chats;
  var lowerFilter = filter.toLowerCase();
  return chats.filter(function (chat) {
    return getChatName(chat).toLowerCase().indexOf(lowerFilter.toLowerCase()) !== -1;
  });
};

var sortChats = function sortChats(userId, groups, contacts) {
  var roomArr = [].concat(groups, contacts); // Сортировать окно чата (по времени последних сообщений)

  roomArr = roomArr.sort(chatRoomComparer); // Проверяем, есть ли список, который нужно закрепить

  var topChatId = localStorage.getItem(userId + "-topChatId");

  if (topChatId) {
    var chat = roomArr.find(function (c) {
      return getChatId(c) === topChatId;
    });

    if (chat) {
      // На первое место
      roomArr = roomArr.filter(function (k) {
        return getChatId(k) !== topChatId;
      });
      chat.isTop = true;
      roomArr.unshift(chat);
    }
  }

  return roomArr;
};

var RoomList = function RoomList(props) {
  var classes = useStyles$b();

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var _React$useState = React__default.useState([]),
      chats = _React$useState[0],
      setChats = _React$useState[1];

  React.useEffect(function () {
    setChats(sortChats(props.user.userId, filterChats(props.groups, null), filterChats(props.contacts, null)));
  }, []);

  var onSearchChange = function onSearchChange(e) {
    //    console.log("e.target.value", e.target.value);
    setChats(sortChats(props.user.userId, filterChats(props.groups, e.target.value), filterChats(props.contacts, e.target.value)));
  }; //console.log('props.activeRoom ==', props.activeRoom);
  //const activeItem = (id: number) => id === props.activeRoom?.userId;


  return /*#__PURE__*/React__default.createElement(material.Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(material.CardHeader, {
    title: /*#__PURE__*/React__default.createElement(material.TextField, {
      className: classes.searchField,
      label: t("CHAT.INPUT_SEARCH_CONTACT"),
      variant: "outlined",
      size: "small",
      fullWidth: true,
      onChange: onSearchChange
    })
  }), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(List, {
    component: "nav",
    "aria-label": "rooms"
  }, !isEmpty(chats) && chats.map(function (chat) {
    return /*#__PURE__*/React__default.createElement(RoomListItem, {
      key: getChatId(chat),
      apiUrl: props.apiUrl,
      chat: chat,
      active: chat === props.activeRoom,
      typing: props.typing,
      onClick: function onClick() {
        return props.onChangeChat != null && props.onChangeChat(chat);
      }
    });
  })));
};

var useStyles$c = /*#__PURE__*/styles.makeStyles(function () {
  return {
    root: {
      width: "100%",
      height: "100%",
      borderRadius: 8
    }
  };
});

var Conference = function Conference(_ref) {
  var conference = _ref.conference,
      onClose = _ref.onClose;
  var classes = useStyles$c();
  var ref = React__default.useRef(null);
  React.useEffect(function () {
    var listener = function listener(_ref2) {
      var _ref$current;

      var source = _ref2.source,
          data = _ref2.data;

      if (source === ((_ref$current = ref.current) == null ? void 0 : _ref$current.contentWindow)) {
        var type = data.type;
        if (["notSupported", "connectionFail", // "loginFail",
        "callFail", "hangUp", "remoteHangUp"].includes(type)) onClose(conference);
      }
    };

    window.addEventListener("message", listener);
    return function () {
      window.removeEventListener("message", listener);
    };
  }, [conference == null ? void 0 : conference.id]);
  return /*#__PURE__*/React__default.createElement("iframe", {
    title: "conference",
    className: classes.root,
    src: conference == null ? void 0 : conference.url,
    allowFullScreen: true,
    allow: "microphone; camera; autoplay; display-capture",
    ref: ref
  });
};

var useStyles$d = /*#__PURE__*/styles.makeStyles(function () {
  return {
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
  };
});

var ConferenceCall = function ConferenceCall(_ref) {
  var conference = _ref.conference,
      contact = _ref.contact,
      apiUrl = _ref.apiUrl,
      onAccept = _ref.onAccept;
  var classes = useStyles$d();

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  return /*#__PURE__*/React__default.createElement(material.Paper, {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.pulse
  }, contact ? /*#__PURE__*/React__default.createElement(material.Avatar, {
    className: classes.avatar,
    alt: contact.username,
    src: "" + apiUrl + contact.avatar
  }) : /*#__PURE__*/React__default.createElement(material.Avatar, {
    className: classes.avatar
  })), /*#__PURE__*/React__default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React__default.createElement(material.Button, {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return onAccept(conference);
    }
  }, t("CHAT.CONFERENCE.JOIN"))));
};

var emptyUser = {
  userId: 0,
  username: "",
  password: "",
  avatar: "",
  langCode: ""
};
var emptyChatState = {
  tokenKey: "",
  user: emptyUser,
  token: "",
  activeRoom: null,
  groupGather: {},
  userGather: {},
  contactGather: {},
  operators: [],
  initialContactId: null,
  conference: {
    data: null,
    joined: false,
    ringPlayed: false
  },
  typing: null,
  loading: false,
  error: undefined
};

var getFreshActiveRoom = function getFreshActiveRoom(state) {
  if (state.activeRoom) return state.groupGather[state.activeRoom.groupId] || state.contactGather[state.activeRoom.userId];
  return null;
};

var getActiveRoom = function getActiveRoom(state) {
  var activeRoom = state.activeRoom,
      initialContactId = state.initialContactId,
      contactGather = state.contactGather;
  var newActiveRoom = null;

  if (initialContactId) {
    newActiveRoom = contactGather[initialContactId];
  } else if (activeRoom) {
    newActiveRoom = getFreshActiveRoom(state);
  } else {
    // ищем комнату с самым свежим сообщением
    var rooms = [].concat(Object.values(state.contactGather), Object.values(state.groupGather)).sort(chatRoomComparer);
    if (rooms.length > 0) newActiveRoom = rooms[0];
  }

  return newActiveRoom;
};

var setUserOnline = function setUserOnline(state, userId, online) {
  var newState = _extends({}, state); // Обновить статусы приватных чатов


  if (state.contactGather[userId]) newState.contactGather[userId] = _extends({}, newState.contactGather[userId], {
    online: online
  }); // Обновить статус участника в группах

  for (var _i = 0, _Object$values = Object.values(state.groupGather); _i < _Object$values.length; _i++) {
    var group = _Object$values[_i];
    if (!group.members) continue;
    var member = group.members.find(function (m) {
      return m.userId === userId;
    });

    if (member) {
      var index = group.members.indexOf(member);
      group.members[index] = _extends({}, member, {
        online: online
      });
    }
  } // Обновить статус операторов


  var idx = newState.operators.findIndex(function (it) {
    return it.userId === userId;
  });
  if (idx !== -1) newState.operators[idx] = _extends({}, newState.operators[idx], {
    online: online
  }); // обновляем активный чат

  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var addGroupMessage = function addGroupMessage(state, payload) {
  var newState = _extends({}, state);

  var groupId = payload.groupId;

  if (newState.groupGather[groupId]) {
    if (newState.groupGather[groupId].messages) {
      newState.groupGather[groupId].messages = [].concat(newState.groupGather[groupId].messages, [payload]);
    } else {
      newState.groupGather[groupId] = _extends({}, state.groupGather[groupId], {
        messages: [payload]
      });
    }
  } // увеличиваем счетчик новых сообщений, если это не активная комната и сообщение не от нас


  var activeRoom = newState.activeRoom;

  if (activeRoom && activeRoom.groupId !== groupId && payload.userId !== state.user.userId) {
    return groupUnreadGather(newState, groupId, function (x) {
      return (x || 0) + 1;
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var addPrivateMessage = function addPrivateMessage(state, payload) {
  var _newState$activeRoom;

  var newState = _extends({}, state);

  var contactId = payload.contactId === state.user.userId ? payload.userId : payload.contactId; // 1 добавляем сообщение

  if (newState.contactGather[contactId].messages) {
    newState.contactGather[contactId].messages = [].concat(newState.contactGather[contactId].messages, [payload]);
  } else {
    newState.contactGather[contactId] = _extends({}, newState.contactGather[contactId], {
      messages: [payload]
    });
  } // 2 если это сообщение в неактивной комнате и источник не мы (в соседней вкладке), то увеличиваем счетчик непрочитанных


  if (((_newState$activeRoom = newState.activeRoom) == null ? void 0 : _newState$activeRoom.userId) !== contactId && payload.userId !== state.user.userId) {
    return contactUnreadGather(newState, contactId, function (x) {
      return (x || 0) + 1;
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var contactUnreadGather = function contactUnreadGather(state, userId, predicate) {
  var newState = _extends({}, state);

  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = _extends({}, newState.contactGather[userId], {
      unreadCount: predicate(newState.contactGather[userId].unreadCount)
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var groupUnreadGather = function groupUnreadGather(state, groupId, predicate) {
  var newState = _extends({}, state);

  if (newState.groupGather[groupId]) {
    newState.groupGather[groupId] = _extends({}, newState.groupGather[groupId], {
      unreadCount: predicate(newState.groupGather[groupId].unreadCount)
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var revokeMessage = function revokeMessage(state, payload) {
  var userId = state.user.userId;

  var newState = _extends({}, state);

  var userName = payload.username || newState.userGather[payload.userId].username;

  if (payload.groupId) {
    var messages = newState.groupGather[payload.groupId].messages; // задаем isRevoke

    if (messages) {
      var msg = messages.find(function (message) {
        return message._id === payload._id;
      });

      if (msg) {
        var index = messages.indexOf(msg);
        messages[index] = _extends({}, msg, {
          isRevoke: true,
          revokeUserName: userName
        });
      }
    }
  } else {
    var _messages = newState.contactGather[payload.contactId === userId ? payload.userId : payload.contactId].messages; // задаем isRevoke

    if (_messages) {
      var _msg = _messages.find(function (message) {
        return message._id === payload._id;
      });

      if (_msg) {
        var _index = _messages.indexOf(_msg);

        _messages[_index] = _extends({}, _msg, {
          isRevoke: true,
          revokeUserName: userName
        });
      }
    }
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var delContact = function delContact(state, userId) {
  var newState = _extends({}, state);

  var updateActiveRoom = newState.activeRoom === newState.contactGather[userId];
  delete newState.contactGather[userId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);
  return newState;
};

var delGroup = function delGroup(state, groupId) {
  var newState = _extends({}, state);

  var updateActiveRoom = newState.activeRoom === newState.groupGather[groupId];
  delete newState.groupGather[groupId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);
  return newState;
};

var delGroupMember = function delGroupMember(state, data) {
  var newState = _extends({}, state);

  var group = newState.groupGather[data.groupId];

  if (group) {
    var _group$members;

    group.members = (_group$members = group.members) == null ? void 0 : _group$members.filter(function (it) {
      return it.userId !== data.userId;
    });
  }

  return newState;
};

var updateGroupInfo = function updateGroupInfo(state, group) {
  var newState = _extends({}, state);

  var groupId = group.groupId,
      name = group.name,
      notice = group.notice;
  var info = newState.groupGather[groupId];

  if (info) {
    newState.groupGather[groupId] = _extends({}, info, {
      name: name,
      notice: notice
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var updateUserInfo = function updateUserInfo(state, user) {
  var newState = _extends({}, state);

  var userId = user.userId,
      username = user.username,
      avatar = user.avatar;

  if (newState.userGather[userId]) {
    newState.userGather[userId] = _extends({}, newState.userGather[userId], {
      username: username,
      avatar: avatar
    });
  }

  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = _extends({}, newState.contactGather[userId], {
      username: username,
      avatar: avatar
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var addGroupMember = function addGroupMember(state, payload) {
  var members = payload.members.map(function (member) {
    return _extends({}, member, {
      isManager: 0
    });
  });

  var newState = _extends({}, state);

  if (newState.groupGather[payload.groupId].members && members) {
    newState.groupGather[payload.groupId].members = [].concat(state.groupGather[payload.groupId].members, members);
  } else {
    newState.groupGather[payload.groupId] = _extends({}, newState.groupGather[payload.groupId], {
      members: members
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var markPrivateMessagesRead = function markPrivateMessagesRead(state, userId) {
  var newState = _extends({}, state);

  if (newState.contactGather[userId]) {
    var updatedValue = _extends({}, newState.contactGather[userId]);

    if (updatedValue.messages) {
      for (var i = 0; i < updatedValue.messages.length; i++) {
        updatedValue.messages[i] = _extends({}, updatedValue.messages[i], {
          status: 1
        });
      }
    }

    newState.contactGather[userId] = updatedValue;
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var addPrivateMessages = function addPrivateMessages(state, data) {
  var newState = _extends({}, state);

  var messages = data.messages,
      contactId = data.contactId;

  if (newState.contactGather[contactId]) {
    newState.contactGather[contactId] = _extends({}, newState.contactGather[contactId], {
      messages: [].concat(messages, newState.contactGather[contactId].messages || []),
      noMoreData: messages.length < data.pageSize
    });
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var addGroupMessages = function addGroupMessages(state, data) {
  var newState = _extends({}, state);

  var groupId = data.groupId,
      messages = data.messageArr,
      users = data.userArr;

  if (newState.groupGather[groupId]) {
    newState.groupGather[groupId] = _extends({}, newState.groupGather[groupId], {
      messages: [].concat(messages, newState.groupGather[groupId].messages || []),
      noMoreData: messages.length < data.pageSize
    });
  }

  newState.userGather = _extends({}, newState.userGather);

  for (var _iterator = _createForOfIteratorHelperLoose(users), _step; !(_step = _iterator()).done;) {
    var user = _step.value;

    if (!newState.userGather[user.userId]) {
      newState.userGather[user.userId] = user;
    }
  } // обновляем активный чат


  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

var setActiveRoom = function setActiveRoom(state, data) {
  if (state.activeRoom && data.ifNotExists) return state;
  return _extends({}, state, {
    activeRoom: data.groupId ? state.groupGather[data.groupId] : data.contactId ? state.contactGather[data.contactId] : null
  });
};

var setToken = function setToken(state, token) {
  localStorage.setItem(state.tokenKey, token);
  return _extends({}, state, {
    token: token
  });
};

var clearUser = function clearUser(state) {
  localStorage.removeItem(state.tokenKey);
  return _extends({}, state, {
    token: "",
    user: emptyUser
  });
};

var setConference = function setConference(state, conference) {
  return _extends({}, state, {
    conference: {
      data: conference,
      joined: (conference == null ? void 0 : conference.userId) === state.user.userId,
      ringPlayed: (conference == null ? void 0 : conference.userId) === state.user.userId
    }
  });
};

var pauseConference = function pauseConference(state, conference) {
  var _state$conference$dat;

  if (((_state$conference$dat = state.conference.data) == null ? void 0 : _state$conference$dat.id) !== (conference == null ? void 0 : conference.id)) return state;
  return _extends({}, state, {
    conference: {
      data: state.conference.data,
      joined: false,
      ringPlayed: true
    }
  });
};

var stopConference = function stopConference(state, conference) {
  var _state$conference$dat2;

  if (((_state$conference$dat2 = state.conference.data) == null ? void 0 : _state$conference$dat2.id) !== (conference == null ? void 0 : conference.id)) return state;
  return _extends({}, state, {
    conference: {
      data: null,
      joined: false,
      ringPlayed: false
    }
  });
};

function chatReducer(state, action) {
  var _extends2, _extends3, _extends4;

  switch (action.type) {
    case "SET_GROUP_GATHER":
      return _extends({}, state, {
        groupGather: _extends({}, state.groupGather, (_extends2 = {}, _extends2[action.payload.groupId] = action.payload, _extends2))
      });

    case "SET_CONTACT_GATHER":
      return _extends({}, state, {
        contactGather: _extends({}, state.contactGather, (_extends3 = {}, _extends3[action.payload.userId] = action.payload, _extends3))
      });

    case "DEL_GROUP":
      return delGroup(state, action.payload);

    case "DEL_GROUP_MEMBER":
      return delGroupMember(state, action.payload);

    case "DEL_CONTACT":
      return delContact(state, action.payload.userId);

    case "SET_USER_GATHER":
      return _extends({}, state, {
        userGather: _extends({}, state.userGather, (_extends4 = {}, _extends4[action.payload.userId] = action.payload, _extends4))
      });

    case "UPDATE_ACTIVE_ROOM":
      return _extends({}, state, {
        activeRoom: getActiveRoom(state)
      });

    case "SET_ACTIVE_ROOM":
      return setActiveRoom(state, action.payload);

    case "USER_ONLINE":
      return setUserOnline(state, action.payload, 1);

    case "USER_OFFLINE":
      return setUserOnline(state, action.payload, 0);

    case "ADD_GROUP_MESSAGE":
      return addGroupMessage(state, action.payload);

    case "ADD_PRIVATE_MESSAGE":
      return addPrivateMessage(state, action.payload);

    case "ADD_GROUP_UNREAD_GATHER":
      return groupUnreadGather(state, action.payload, function (x) {
        return (x || 0) + 1;
      });

    case "ADD_CONTACT_UNREAD_GATHER":
      return contactUnreadGather(state, action.payload, function (x) {
        return (x || 0) + 1;
      });

    case "SET_TYPING":
      return _extends({}, state, {
        typing: action.payload
      });

    case "LOSE_GROUP_UNREAD_GATHER":
      return groupUnreadGather(state, action.payload, function () {
        return 0;
      });

    case "LOSE_CONTACT_UNREAD_GATHER":
      return contactUnreadGather(state, action.payload, function () {
        return 0;
      });

    case "REVOKE_MESSAGE":
      return revokeMessage(state, action.payload);

    case "UPDATE_GROUP_INFO":
      return updateGroupInfo(state, action.payload);

    case "UPDATE_USER_INFO":
      return updateUserInfo(state, action.payload);

    case "ADD_GROUP_MEMBER":
      return addGroupMember(state, action.payload);

    case "SET_CONFERENCE":
      return setConference(state, action.payload);

    case "JOIN_CONFERENCE":
      return _extends({}, state, {
        conference: {
          data: action.payload,
          joined: true,
          ringPlayed: true
        }
      });

    case "PAUSE_CONFERENCE":
      return pauseConference(state, action.payload);

    case "STOP_CONFERENCE":
      return stopConference(state, action.payload);

    case "MARK_PRIVATE_MESSAGES_READ":
      return markPrivateMessagesRead(state, action.payload);

    case "ADD_PRIVATE_MESSAGES":
      return addPrivateMessages(state, action.payload);

    case "ADD_GROUP_MESSAGES":
      return addGroupMessages(state, action.payload);

    case "SET_LOADING":
      return _extends({}, state, {
        loading: action.payload,
        error: ""
      });

    case "SET_ERROR":
      return _extends({}, state, {
        error: action.payload
      });

    case "SET_TOKEN":
      return setToken(state, action.payload);

    case "SET_USER":
      return _extends({}, state, {
        user: action.payload
      });

    case "CLEAR_USER":
      return clearUser(state);

    case "CLEAR_CHAT_DATA":
      return _extends({}, state, {
        activeRoom: null,
        groupGather: {},
        userGather: {},
        contactGather: {},
        conference: {
          data: null,
          joined: false,
          ringPlayed: false
        },
        typing: null
      });

    case "SET_OPERATORS":
      return _extends({}, state, {
        operators: action.payload
      });
  }

  return state;
}

var emptyDispatch = function emptyDispatch() {
  return null;
};

var ChatContext = /*#__PURE__*/React__default.createContext({
  state: emptyChatState,
  dispatch: emptyDispatch
});
var ChatProvider = function ChatProvider(props) {
  emptyUser.langCode = props.defLang;
  var token = localStorage.getItem(props.tokenKey);

  var chatState = _extends({}, emptyChatState, {
    tokenKey: props.tokenKey,
    token: token
  });

  var _React$useReducer = React__default.useReducer(chatReducer, chatState),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  return /*#__PURE__*/React__default.createElement(ChatContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, props.children);
};

var initialContext = {};
var RestContext = /*#__PURE__*/React.createContext(initialContext);
var RestProvider = function RestProvider(_ref) {
  var baseURLApi = _ref.baseURLApi,
      pageSize = _ref.pageSize,
      children = _ref.children;

  var _useContext = React.useContext(ChatContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var fetch = axios.create({
    timeout: 60000,
    baseURL: baseURLApi,
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Authorization: "Bearer " + state.token
    },
    withCredentials: false
  });
  var getPrivateMessages = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chat) {
      var _chat$messages;

      var contactId, current, _yield$fetch$get, data, err;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contactId = chat.userId;
              current = (_chat$messages = chat.messages) == null ? void 0 : _chat$messages.length;
              _context.prev = 2;
              dispatch({
                type: "SET_LOADING",
                payload: true
              });
              _context.next = 6;
              return fetch.get("/contact/messages", {
                params: {
                  contactId: contactId,
                  current: current,
                  pageSize: pageSize
                }
              });

            case 6:
              _yield$fetch$get = _context.sent;
              data = _yield$fetch$get.data;

              if (data) {
                dispatch({
                  type: "ADD_PRIVATE_MESSAGES",
                  payload: {
                    pageSize: pageSize,
                    contactId: contactId,
                    messages: data
                  }
                });
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              err = _context.t0;
              dispatch({
                type: "SET_ERROR",
                payload: err.message
              });

            case 15:
              _context.prev = 15;
              dispatch({
                type: "SET_LOADING",
                payload: false
              });
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11, 15, 18]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [dispatch]);
  var getGroupMessages = React.useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(chat) {
      var _chat$messages2;

      var groupId, current, _yield$fetch$get2, data, err;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              groupId = chat.groupId;
              current = (_chat$messages2 = chat.messages) == null ? void 0 : _chat$messages2.length;
              _context2.prev = 2;
              dispatch({
                type: "SET_LOADING",
                payload: true
              });
              _context2.next = 6;
              return fetch.get("/group/messages", {
                params: {
                  groupId: groupId,
                  current: current,
                  pageSize: pageSize
                }
              });

            case 6:
              _yield$fetch$get2 = _context2.sent;
              data = _yield$fetch$get2.data;

              if (data) {
                dispatch({
                  type: "ADD_GROUP_MESSAGES",
                  payload: _extends({
                    pageSize: pageSize,
                    groupId: groupId
                  }, data)
                });
              }

              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);
              err = _context2.t0;
              dispatch({
                type: "SET_ERROR",
                payload: err.message
              });

            case 15:
              _context2.prev = 15;
              dispatch({
                type: "SET_LOADING",
                payload: false
              });
              return _context2.finish(15);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 11, 15, 18]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }(), [dispatch]);
  return /*#__PURE__*/React__default.createElement(RestContext.Provider, {
    value: {
      apiUrl: baseURLApi,
      pageSize: pageSize,
      fetch: fetch,
      getPrivateMessages: getPrivateMessages,
      getGroupMessages: getGroupMessages
    }
  }, children);
};

var useSocket = function useSocket(url, accessToken) {
  var _useState = React.useState(null),
      socket = _useState[0],
      setSocket = _useState[1];

  var connectSocket = React.useCallback(function () {
    // console.log("do connect");
    var socketTemp = io(url, {
      reconnection: true,
      extraHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });
    setSocket(socketTemp);
  }, [url, accessToken]);
  var disconnectSocket = React.useCallback(function () {
    // console.log("do disconnect");
    socket == null ? void 0 : socket.disconnect();
    setSocket(null);
  }, [socket]);

  var _useState2 = React.useState(false),
      online = _useState2[0],
      setOnline = _useState2[1];

  React.useEffect(function () {
    setOnline(socket != null && socket.connected ? true : false);
  }, [socket]);
  React.useEffect(function () {
    socket == null ? void 0 : socket.on("connect", function () {
      // console.log("connected");
      setOnline(true);
      socket.emit("chatData");
    });
  }, [socket]);
  React.useEffect(function () {
    socket == null ? void 0 : socket.on("disconnect", function () {
      // console.log("disconnected");
      setOnline(false);
    });
  }, [socket]);
  return {
    socket: socket,
    online: online,
    disconnectSocket: disconnectSocket,
    connectSocket: connectSocket
  };
};

var initialContext$1 = {
  online: false
};
var SocketContext = /*#__PURE__*/React.createContext(initialContext$1);
var SocketProvider = function SocketProvider(_ref) {
  var wsUrl = _ref.wsUrl,
      children = _ref.children;

  var _useContext = React.useContext(ChatContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useSocket = useSocket(wsUrl, state.token),
      socket = _useSocket.socket,
      online = _useSocket.online,
      disconnectSocket = _useSocket.disconnectSocket,
      connectSocket = _useSocket.connectSocket;

  React.useEffect(function () {
    if (state.token) {
      connectSocket();
    }

    return function () {
      disconnectSocket();
    };
  }, [state.token, connectSocket]);
  React.useEffect(function () {
    if (!state.token) disconnectSocket();
  }, [state.token, disconnectSocket]); // listen unauthorized event

  React.useEffect(function () {
    var listener = function listener(msg) {
      console.log("unauthorized msg", msg);
      dispatch({
        type: "CLEAR_USER"
      });
    }; // attach


    socket == null ? void 0 : socket.on("unauthorized", listener); // detatch

    return function () {
      socket == null ? void 0 : socket.off("unauthorized", listener);
    };
  }, [socket == null ? void 0 : socket.id]); // listen chatData event

  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var payload = res.data;
      var groupArr = payload.groupData;
      var contactArr = payload.contactData;
      var userArr = payload.userData;
      dispatch({
        type: "CLEAR_CHAT_DATA"
      });
      dispatch({
        type: "SET_USER",
        payload: payload.user
      });

      if (groupArr.length) {
        for (var _iterator = _createForOfIteratorHelperLoose(groupArr), _step; !(_step = _iterator()).done;) {
          var group = _step.value;
          socket == null ? void 0 : socket.emit("joinGroupSocket", {
            groupId: group.groupId
          });
          dispatch({
            type: "SET_GROUP_GATHER",
            payload: group
          });
        }
      }

      if (contactArr.length) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(contactArr), _step2; !(_step2 = _iterator2()).done;) {
          var contact = _step2.value;
          socket == null ? void 0 : socket.emit("joinPrivateSocket", {
            contactId: contact.userId
          });
          dispatch({
            type: "SET_CONTACT_GATHER",
            payload: contact
          });
        }
      }

      dispatch({
        type: "SET_OPERATORS",
        payload: payload.operatorData
      });

      if (userArr.length) {
        for (var _iterator3 = _createForOfIteratorHelperLoose(userArr), _step3; !(_step3 = _iterator3()).done;) {
          var user_ = _step3.value;
          dispatch({
            type: "SET_USER_GATHER",
            payload: user_
          });
        }
      }

      dispatch({
        type: "UPDATE_ACTIVE_ROOM"
      });
      dispatch({
        type: "SET_CONFERENCE",
        payload: payload.conferenceData
      });
    };

    socket == null ? void 0 : socket.on("chatData", listener);
    return function () {
      socket == null ? void 0 : socket.off("chatData", listener);
    };
  }, [socket == null ? void 0 : socket.id]); // listen user online

  React.useEffect(function () {
    var listener = function listener(res) {
      dispatch({
        type: "USER_ONLINE",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("userOnline", listener);
    return function () {
      socket == null ? void 0 : socket.off("userOnline", listener);
    };
  }, [socket == null ? void 0 : socket.id]); // listen user offline

  React.useEffect(function () {
    var listener = function listener(res) {
      dispatch({
        type: "USER_OFFLINE",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("userOffline", listener);
    return function () {
      socket == null ? void 0 : socket.off("userOffline", listener);
    };
  }, [socket == null ? void 0 : socket.id]); // listen private socket join

  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      console.log("Успешно вошел в приватный чат");
    };

    socket == null ? void 0 : socket.on("joinPrivateSocket", listener);
    return function () {
      socket == null ? void 0 : socket.off("joinPrivateSocket", listener);
    };
  }, [socket == null ? void 0 : socket.id]); // listen group socket join

  React.useEffect(function () {
    var listener = function listener(res) {
      var _groupObj$members;

      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;
      var newUser = data.user;
      newUser.online = 1;
      var group = data.group;
      var groupObj = state.groupGather[group.groupId]; // Информация о присоединении к группе новых пользователей

      if (groupObj && !((_groupObj$members = groupObj.members) != null && _groupObj$members.find(function (member) {
        return member.userId === newUser.userId;
      }))) {
        var _groupObj$members2;

        newUser.isManager = 0;
        (_groupObj$members2 = groupObj.members) == null ? void 0 : _groupObj$members2.push(newUser); // Vue.prototype.$message.info(res.msg);
      }

      dispatch({
        type: "SET_USER_GATHER",
        payload: newUser
      });
    };

    socket == null ? void 0 : socket.on("joinGroupSocket", listener);
    return function () {
      socket == null ? void 0 : socket.off("joinGroupSocket", listener);
    };
  }, [socket == null ? void 0 : socket.id, state.groupGather]);
  React.useEffect(function () {
    var listener = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
        var data, activeRoom;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!res.code) {
                  _context.next = 3;
                  break;
                }

                dispatch({
                  type: "SET_ERROR",
                  payload: res.msg
                });
                return _context.abrupt("return");

              case 3:
                data = res.data;
                dispatch({
                  type: "ADD_GROUP_MESSAGE",
                  payload: data
                });
                activeRoom = state.activeRoom;

                if (activeRoom && activeRoom.groupId === data.groupId && data.userId !== state.user.userId) {
                  socket == null ? void 0 : socket.emit("markAsRead", {
                    groupId: data.groupId,
                    _id: data._id
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function listener(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    socket == null ? void 0 : socket.on("groupMessage", listener);
    return function () {
      socket == null ? void 0 : socket.off("groupMessage", listener);
    };
  }, [socket == null ? void 0 : socket.id, state.activeRoom]);
  React.useEffect(function () {
    var listener = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(res) {
        var data, _state$activeRoom;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!res.code) {
                  _context2.next = 3;
                  break;
                }

                dispatch({
                  type: "SET_ERROR",
                  payload: res.msg
                });
                return _context2.abrupt("return");

              case 3:
                data = res.data;

                if (data.contactId === state.user.userId || data.userId === state.user.userId) {
                  dispatch({
                    type: "ADD_PRIVATE_MESSAGE",
                    payload: data
                  }); // если есть активная комната и это приватная комната (!groupId && userId) с отправителем сообщения (userId)

                  if (state.activeRoom && !state.activeRoom.groupId && ((_state$activeRoom = state.activeRoom) == null ? void 0 : _state$activeRoom.userId) === data.userId) {
                    socket == null ? void 0 : socket.emit("markAsRead", {
                      contactId: data.userId,
                      _id: data._id
                    });
                  }
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function listener(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    socket == null ? void 0 : socket.on("privateMessage", listener);
    return function () {
      socket == null ? void 0 : socket.off("privateMessage", listener);
    };
  }, [socket == null ? void 0 : socket.id, state.activeRoom]);
  React.useEffect(function () {
    var timer;

    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      if (timer) clearTimeout(timer);
      dispatch({
        type: "SET_TYPING",
        payload: res.data
      });
      timer = setTimeout(function () {
        dispatch({
          type: "SET_TYPING",
          payload: null
        });
      }, 1000);
    };

    socket == null ? void 0 : socket.on("typing", listener);
    return function () {
      if (timer) clearTimeout(timer);
      socket == null ? void 0 : socket.off("typing", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;

      if (data.userId === state.user.userId) {
        if (data.groupId) {
          dispatch({
            type: "LOSE_GROUP_UNREAD_GATHER",
            payload: data.groupId
          });
        } else {
          dispatch({
            type: "LOSE_CONTACT_UNREAD_GATHER",
            payload: data.contactId
          });
        }
      } else {
        if (data.contactId) dispatch({
          type: "MARK_PRIVATE_MESSAGES_READ",
          payload: data.userId
        });
      }
    };

    socket == null ? void 0 : socket.on("markAsRead", listener);
    return function () {
      socket == null ? void 0 : socket.off("markAsRead", listener);
    };
  }, [socket == null ? void 0 : socket.id, state.user.userId]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;
      dispatch({
        type: "REVOKE_MESSAGE",
        payload: data
      });
    };

    socket == null ? void 0 : socket.on("revokeMessage", listener);
    return function () {
      socket == null ? void 0 : socket.off("revokeMessage", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      dispatch({
        type: "SET_GROUP_GATHER",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("addGroup", listener);
    return function () {
      socket == null ? void 0 : socket.off("addGroup", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;
      dispatch({
        type: "SET_CONTACT_GATHER",
        payload: data
      });
      dispatch({
        type: "SET_USER_GATHER",
        payload: data
      });
      socket == null ? void 0 : socket.emit("joinPrivateSocket", {
        contactId: data.userId
      });
    };

    socket == null ? void 0 : socket.on("addContact", listener);
    return function () {
      socket == null ? void 0 : socket.off("addContact", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;

      if (data.userId === state.user.userId) {
        // если удаляем себя из группы
        dispatch({
          type: "DEL_GROUP",
          payload: data.groupId
        });
      } else {
        dispatch({
          type: "DEL_GROUP_MEMBER",
          payload: data
        });
      }
    };

    socket == null ? void 0 : socket.on("deleteGroup", listener);
    return function () {
      socket == null ? void 0 : socket.off("deleteGroup", listener);
    };
  }, [socket == null ? void 0 : socket.id, state.user]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;
      dispatch({
        type: "DEL_CONTACT",
        payload: data
      });
    };

    socket == null ? void 0 : socket.on("deleteContact", listener);
    return function () {
      socket == null ? void 0 : socket.off("deleteContact", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;
      dispatch({
        type: "UPDATE_GROUP_INFO",
        payload: data
      });
    };

    socket == null ? void 0 : socket.on("updateGroupInfo", listener);
    return function () {
      socket == null ? void 0 : socket.off("updateGroupInfo", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var data = res.data;
      dispatch({
        type: "UPDATE_USER_INFO",
        payload: data
      });
    };

    socket == null ? void 0 : socket.on("updateUserInfo", listener);
    return function () {
      socket == null ? void 0 : socket.off("updateUserInfo", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      var _res$data = res.data,
          group = _res$data.group,
          newUser = _res$data.user;

      if (!state.groupGather[group.groupId]) {
        console.log("joined to a new group"); // Если группы еще у нас нет, то получаем информацию о пользователях в группе

        socket == null ? void 0 : socket.emit("chatData");
      } else if (newUser.userId !== state.user.userId) {
        // Новые пользователи присоединяются к группе
        dispatch({
          type: "ADD_GROUP_MEMBER",
          payload: {
            groupId: group.groupId,
            members: [newUser]
          }
        });
      }
    };

    socket == null ? void 0 : socket.on("joinGroup", listener);
    return function () {
      socket == null ? void 0 : socket.off("joinGroup", listener);
    };
  }, [socket == null ? void 0 : socket.id, state.user, state.groupGather]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      dispatch({
        type: "SET_CONFERENCE",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("startConference", listener);
    return function () {
      socket == null ? void 0 : socket.off("startConference", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      dispatch({
        type: "PAUSE_CONFERENCE",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("pauseConference", listener);
    return function () {
      socket == null ? void 0 : socket.off("pauseConference", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      dispatch({
        type: "STOP_CONFERENCE",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("stopConference", listener);
    return function () {
      socket == null ? void 0 : socket.off("stopConference", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }
    };

    socket == null ? void 0 : socket.on("addOperator", listener);
    return function () {
      socket == null ? void 0 : socket.off("addOperator", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(function () {
    var listener = function listener(res) {
      if (res.code) {
        dispatch({
          type: "SET_ERROR",
          payload: res.msg
        });
        return;
      }

      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: res.data
      });
    };

    socket == null ? void 0 : socket.on("setActiveRoom", listener);
    return function () {
      socket == null ? void 0 : socket.off("setActiveRoom", listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  return /*#__PURE__*/React__default.createElement(SocketContext.Provider, {
    value: {
      socket: socket,
      online: online
    }
  }, children);
};

var getRingAudio = function getRingAudio() {
  var audio = new Audio(process.env.PUBLIC_URL + "/audio/ring-in.ogg");
  audio.loop = true;
  return audio;
};

var ChatPage = function ChatPage(_ref) {
  var _state$conference2, _state$conference2$da, _state$conference3, _state$activeRoom, _state$activeRoom2, _state$activeRoom3;

  var inModale = _ref.inModale,
      onlyChatGroupId = _ref.onlyChatGroupId;
  var useStyles = styles.makeStyles(function (theme) {
    var _root, _innerBox;

    return {
      root: (_root = {
        minWidth: 640,
        minHeight: 470,
        height: inModale ? "100%" : "calc(100vh - " + theme.spacing(8) + ")",
        padding: 0
      }, _root[theme.breakpoints.down("sm")] = {
        height: "calc(100vh - " + theme.spacing(8) + ")",
        minWidth: 'auto',
        minHeight: 'auto',
        overflow: "hidden"
      }, _root),
      innerBox: (_innerBox = {
        height: "100%",
        width: "100%",
        margin: inModale ? 0 : theme.spacing(4) + " 0"
      }, _innerBox[theme.breakpoints.down("sm")] = {
        margin: 0
      }, _innerBox),
      innerGrid: {
        height: "100%",
        width: "100%"
      }
    };
  });
  var classes = useStyles();
  var isMobile = material.useMediaQuery(function (theme) {
    return theme.breakpoints.down("sm");
  });

  var _React$useContext = React.useContext(ChatContext),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var _React$useContext2 = React.useContext(SocketContext),
      socket = _React$useContext2.socket;

  var _React$useContext3 = React.useContext(RestContext),
      apiUrl = _React$useContext3.apiUrl,
      pageSize = _React$useContext3.pageSize,
      getPrivateMessages = _React$useContext3.getPrivateMessages,
      getGroupMessages = _React$useContext3.getGroupMessages;

  var _React$useState = React.useState(getRingAudio()),
      ringAudio = _React$useState[0];

  var onExitActiveRoom = React.useCallback(function () {
    dispatch({
      type: "SET_ACTIVE_ROOM",
      payload: {
        ifNotExists: false
      }
    });
  }, [dispatch]);
  var onNeedMoreMessages = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chat) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!chat.groupId) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return getGroupMessages(chat);

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.next = 7;
              return getPrivateMessages(chat);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [getPrivateMessages, getGroupMessages]);
  var onMessageDelete = React.useCallback(function (chat, message) {
    socket == null ? void 0 : socket.emit("revokeMessage", {
      groupId: chat.groupId,
      contactId: chat.userId,
      _id: message._id
    });
  }, [socket == null ? void 0 : socket.id]);
  var onTyping = React.useCallback(function (chat) {
    socket == null ? void 0 : socket.emit("typing", {
      groupId: chat == null ? void 0 : chat.groupId,
      contactId: chat == null ? void 0 : chat.userId
    });
  }, [socket == null ? void 0 : socket.id]);
  var onSendMessage = React.useCallback(function (chat, data) {
    if (chat.groupId) {
      socket == null ? void 0 : socket.emit("groupMessage", {
        groupId: chat == null ? void 0 : chat.groupId,
        content: data.message,
        width: data.width,
        height: data.height,
        fileName: data.fileName,
        messageType: data.messageType,
        size: data.size
      });
    } else {
      socket == null ? void 0 : socket.emit("privateMessage", {
        contactId: chat == null ? void 0 : chat.userId,
        content: data.message,
        width: data.width,
        height: data.height,
        fileName: data.fileName,
        messageType: data.messageType,
        size: data.size
      });
    }
  }, [socket == null ? void 0 : socket.id]);
  var onChangeChat = React.useCallback(function (chat) {
    dispatch({
      type: "SET_ACTIVE_ROOM",
      payload: {
        groupId: chat == null ? void 0 : chat.groupId,
        contactId: chat == null ? void 0 : chat.userId,
        ifNotExists: false
      }
    });
  }, [socket == null ? void 0 : socket.id, dispatch]);
  var onEnterRoom = React.useCallback(function (chat) {
    if (!chat.messages || chat.messages.length === 0) return;

    if (chat.groupId) {
      socket == null ? void 0 : socket.emit("markAsRead", {
        groupId: chat.groupId,
        _id: chat.messages[chat.messages.length - 1]._id
      });
    } else {
      socket == null ? void 0 : socket.emit("markAsRead", {
        contactId: chat.userId,
        _id: chat.messages[chat.messages.length - 1]._id
      });
    }
  }, [socket == null ? void 0 : socket.id]);
  var onVideoCall = React.useCallback(function (chat) {
    socket == null ? void 0 : socket.emit("startConference", {
      groupId: chat.groupId,
      contactId: chat.userId
    });
  }, [socket == null ? void 0 : socket.id]);
  var onVideoEnd = React.useCallback(function (conference) {
    if ((conference == null ? void 0 : conference.id) != null) socket == null ? void 0 : socket.emit("pauseConference", {
      id: conference == null ? void 0 : conference.id
    });
  }, [socket == null ? void 0 : socket.id]);
  var onConferencePause = React.useCallback(function (conference) {
    if ((conference == null ? void 0 : conference.id) != null) socket == null ? void 0 : socket.emit("pauseConference", {
      id: conference.id
    });
  }, [socket == null ? void 0 : socket.id]);
  var onConferenceCallAccept = React.useCallback(function (conference) {
    dispatch({
      type: "JOIN_CONFERENCE",
      payload: conference
    });
  }, [dispatch]);
  var onOperatorAdd = React.useCallback(function (group, operator) {
    socket == null ? void 0 : socket.emit("addOperator", {
      groupId: group.groupId,
      operatorId: operator.userId
    });
  }, [socket == null ? void 0 : socket.id]);
  var onLeaveGroup = React.useCallback(function (group) {
    socket == null ? void 0 : socket.emit("deleteGroup", {
      groupId: group.groupId
    });
  }, [socket == null ? void 0 : socket.id]);
  var handleError = React.useCallback(function () {
    dispatch({
      type: "SET_ERROR"
    });
  }, [dispatch]);
  React.useEffect(function () {
    if (onlyChatGroupId != null) {
      var onlyChat = Object.values(state.contactGather).find(function (item) {
        return item.groupId === onlyChatGroupId;
      });

      if (!isEmpty(onlyChat)) {
        onChangeChat(onlyChat);
      }
    }
  }, [state.contactGather]);
  React.useEffect(function () {
    var _state$conference;

    if (((_state$conference = state.conference) == null ? void 0 : _state$conference.data) != null && !state.conference.ringPlayed) ringAudio.play();else ringAudio.pause();
  }, [(_state$conference2 = state.conference) == null ? void 0 : (_state$conference2$da = _state$conference2.data) == null ? void 0 : _state$conference2$da.id]); //  console.log("state.conference", state.conference)

  var renderRoom = state.activeRoom != null && /*#__PURE__*/React.createElement(Room, {
    apiUrl: apiUrl,
    user: state.user,
    users: state.userGather,
    operators: state.operators,
    chat: state.activeRoom,
    typing: state.typing,
    conference: state.conference.data,
    loading: state.loading,
    pageSize: pageSize,
    onExitRoom: isMobile && onlyChatGroupId == null ? onExitActiveRoom : undefined,
    onEnterRoom: onEnterRoom,
    onNeedMoreMessages: onNeedMoreMessages,
    onMeesageDelete: onMessageDelete,
    onTyping: onTyping,
    onSendMessage: onSendMessage,
    onVideoCall: onVideoCall,
    onVideoEnd: onVideoEnd,
    onOperatorAdd: onOperatorAdd,
    onLeaveGroup: onLeaveGroup
  });

  var GetRoomList = function GetRoomList() {
    return /*#__PURE__*/React.createElement(RoomList, {
      apiUrl: apiUrl,
      user: state.user,
      activeRoom: state.activeRoom,
      groups: Object.values(state.groupGather),
      contacts: Object.values(state.contactGather),
      typing: state.typing,
      onChangeChat: onChangeChat
    });
  };

  var GetConferenceCall = function GetConferenceCall() {
    return state.conference.data && /*#__PURE__*/React.createElement(ConferenceCall, {
      apiUrl: apiUrl,
      contact: state.contactGather[state.user.userId === state.conference.data.userId ? state.conference.data.contactId : state.conference.data.userId],
      conference: state.conference.data,
      onAccept: onConferenceCallAccept
    });
  };

  var GetConference = function GetConference() {
    return /*#__PURE__*/React.createElement(Conference, {
      conference: state.conference.data,
      onClose: onConferencePause
    });
  };

  var Contacts = React.useMemo(function () {
    return !isEmpty(state.conference.data) ? state.conference.joined ? /*#__PURE__*/React.createElement(GetConference, null) : /*#__PURE__*/React.createElement(GetConferenceCall, null) : /*#__PURE__*/React.createElement(GetRoomList, null);
  }, [(_state$conference3 = state.conference) == null ? void 0 : _state$conference3.data, (_state$activeRoom = state.activeRoom) == null ? void 0 : _state$activeRoom.groupId, (_state$activeRoom2 = state.activeRoom) == null ? void 0 : _state$activeRoom2.userId, //state.activeRoom?.messages?.length,
  (_state$activeRoom3 = state.activeRoom) == null ? void 0 : _state$activeRoom3.unreadCount]);
  var isLeftPart = onlyChatGroupId == null || !isEmpty(state.conference.data); //console.log("state.conference", state.conference)

  return /*#__PURE__*/React.createElement(material.Container, {
    maxWidth: "lg",
    className: classes.root
  }, /*#__PURE__*/React.createElement(material.Box, {
    className: classes.innerBox
  }, isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, isLeftPart && Contacts, renderRoom) : /*#__PURE__*/React.createElement(material.Grid, {
    container: true,
    spacing: 1,
    className: classes.innerGrid
  }, isLeftPart && /*#__PURE__*/React.createElement(material.Grid, {
    item: true,
    sm: 4,
    className: classes.innerGrid
  }, Contacts), /*#__PURE__*/React.createElement(material.Grid, {
    item: true,
    sm: isLeftPart ? 8 : 12,
    className: classes.innerGrid
  }, renderRoom))), /*#__PURE__*/React.createElement(material.Snackbar, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    open: !!state.error,
    autoHideDuration: 6000,
    onClose: handleError
  }, /*#__PURE__*/React.createElement(lab.Alert, {
    onClose: handleError,
    severity: "error"
  }, state.error)));
};

var CHAT = {
	STATUS: {
		ONLINE: "online",
		OFFLINE: "offline",
		TYPING: "typing"
	},
	MESSAGE: {
		TYPE: {
			IMAGE: "Image",
			VIDEO: "Video",
			FILE: "File",
			NOTIFY: "Notification"
		},
		MENU: {
			COPY: "Copy",
			DELETE: "Delete"
		},
		REVOKED: {
			YOU: "You deleted the message",
			CONTACT: "deleted the message"
		}
	},
	CONFERENCE: {
		JOIN: "Join",
		START: "Start",
		FINISH: "Finish"
	},
	ADD_CONTACT: "Add contact",
	INPUT_MESSAGE: "Please write a message...",
	INPUT_SEARCH_CONTACT: "Surname Name",
	MEMBERS: "members"
};
var en = {
	CHAT: CHAT
};

var CHAT$1 = {
	STATUS: {
		ONLINE: "online",
		OFFLINE: "offline",
		TYPING: "typing"
	},
	MESSAGE: {
		TYPE: {
			IMAGE: "Image",
			VIDEO: "Video",
			FILE: "File",
			NOTIFY: "Notification"
		},
		MENU: {
			COPY: "Copy",
			DELETE: "Delete"
		},
		REVOKED: {
			YOU: "You deleted the message",
			CONTACT: "deleted the message"
		}
	},
	CONFERENCE: {
		JOIN: "Join",
		START: "Start",
		FINISH: "Finish"
	},
	ADD_CONTACT: "Add contact",
	INPUT_MESSAGE: "Please write a message...",
	INPUT_SEARCH_CONTACT: "Surname Name",
	MEMBERS: "members"
};
var fr = {
	CHAT: CHAT$1
};

var CHAT$2 = {
	STATUS: {
		ONLINE: "в сети",
		OFFLINE: "не в сети",
		TYPING: "печатает"
	},
	MESSAGE: {
		TYPE: {
			IMAGE: "Изображение",
			VIDEO: "Видео",
			FILE: "Файл",
			NOTIFY: "Уведомление"
		},
		MENU: {
			COPY: "Копировать",
			DELETE: "Удалить"
		},
		REVOKED: {
			YOU: "Вы удалили сообщение",
			CONTACT: "удалил(а) сообщение"
		}
	},
	CONFERENCE: {
		JOIN: "Присоединиться",
		START: "Начать",
		FINISH: "Завершить"
	},
	ADD_CONTACT: "Добавить контакт",
	INPUT_MESSAGE: "Напишите сообщение...",
	INPUT_SEARCH_CONTACT: "Фамилия Имя Отчество",
	MEMBERS: "участников"
};
var ru = {
	CHAT: CHAT$2
};

var chatResources = {
  ru: ru,
  en: en,
  fr: fr
};

exports.AddContact = AddContact;
exports.ChatContext = ChatContext;
exports.ChatPage = ChatPage;
exports.ChatProvider = ChatProvider;
exports.Conference = Conference;
exports.ConferenceCall = ConferenceCall;
exports.Emoji = Emoji;
exports.Message = Message;
exports.RestContext = RestContext;
exports.RestProvider = RestProvider;
exports.Room = Room;
exports.RoomList = RoomList;
exports.SocketContext = SocketContext;
exports.SocketProvider = SocketProvider;
exports.Typing = Typing;
exports.chatResources = chatResources;
//# sourceMappingURL=chat.cjs.development.js.map
