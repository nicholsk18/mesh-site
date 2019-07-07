function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
    return _typeof2(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
  })(e);
}

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/", n(n.s = 12);
}([function (e, t, n) {
  "use strict";

  var r = n(1),
      o = n(16),
      i = Object.prototype.toString;

  function s(e) {
    return "[object Array]" === i.call(e);
  }

  function u(e) {
    return null !== e && "object" == _typeof(e);
  }

  function a(e) {
    return "[object Function]" === i.call(e);
  }

  function c(e, t) {
    if (null != e) if ("object" != _typeof(e) && (e = [e]), s(e)) for (var n = 0, r = e.length; n < r; n++) {
      t.call(null, e[n], n, e);
    } else for (var o in e) {
      Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
    }
  }

  e.exports = {
    isArray: s,
    isArrayBuffer: function isArrayBuffer(e) {
      return "[object ArrayBuffer]" === i.call(e);
    },
    isBuffer: o,
    isFormData: function isFormData(e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    },
    isArrayBufferView: function isArrayBufferView(e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
    },
    isString: function isString(e) {
      return "string" == typeof e;
    },
    isNumber: function isNumber(e) {
      return "number" == typeof e;
    },
    isObject: u,
    isUndefined: function isUndefined(e) {
      return void 0 === e;
    },
    isDate: function isDate(e) {
      return "[object Date]" === i.call(e);
    },
    isFile: function isFile(e) {
      return "[object File]" === i.call(e);
    },
    isBlob: function isBlob(e) {
      return "[object Blob]" === i.call(e);
    },
    isFunction: a,
    isStream: function isStream(e) {
      return u(e) && a(e.pipe);
    },
    isURLSearchParams: function isURLSearchParams(e) {
      return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
    },
    isStandardBrowserEnv: function isStandardBrowserEnv() {
      return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
    },
    forEach: c,
    merge: function e() {
      var t = {};

      function n(n, r) {
        "object" == _typeof(t[r]) && "object" == _typeof(n) ? t[r] = e(t[r], n) : t[r] = n;
      }

      for (var r = 0, o = arguments.length; r < o; r++) {
        c(arguments[r], n);
      }

      return t;
    },
    deepMerge: function e() {
      var t = {};

      function n(n, r) {
        "object" == _typeof(t[r]) && "object" == _typeof(n) ? t[r] = e(t[r], n) : t[r] = "object" == _typeof(n) ? e({}, n) : n;
      }

      for (var r = 0, o = arguments.length; r < o; r++) {
        c(arguments[r], n);
      }

      return t;
    },
    extend: function extend(e, t, n) {
      return c(t, function (t, o) {
        e[o] = n && "function" == typeof t ? r(t, n) : t;
      }), e;
    },
    trim: function trim(e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "");
    }
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
        n[r] = arguments[r];
      }

      return e.apply(t, n);
    };
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);

  function o(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }

  e.exports = function (e, t, n) {
    if (!t) return e;
    var i;
    if (n) i = n(t);else if (r.isURLSearchParams(t)) i = t.toString();else {
      var s = [];
      r.forEach(t, function (e, t) {
        null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
          r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
        }));
      }), i = s.join("&");
    }

    if (i) {
      var u = e.indexOf("#");
      -1 !== u && (e = e.slice(0, u)), e += (-1 === e.indexOf("?") ? "?" : "&") + i;
    }

    return e;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    return !(!e || !e.__CANCEL__);
  };
}, function (e, t, n) {
  "use strict";

  (function (t) {
    var r = n(0),
        o = n(22),
        i = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    function s(e, t) {
      !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }

    var u,
        a = {
      adapter: (void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? u = n(5) : "undefined" != typeof XMLHttpRequest && (u = n(5)), u),
      transformRequest: [function (e, t) {
        return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
      }],
      transformResponse: [function (e) {
        if ("string" == typeof e) try {
          e = JSON.parse(e);
        } catch (e) {}
        return e;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      }
    };
    r.forEach(["delete", "get", "head"], function (e) {
      a.headers[e] = {};
    }), r.forEach(["post", "put", "patch"], function (e) {
      a.headers[e] = r.merge(i);
    }), e.exports = a;
  }).call(this, n(21));
}, function (e, t, n) {
  "use strict";

  var r = n(0),
      o = n(23),
      i = n(2),
      s = n(25),
      u = n(26),
      a = n(6);

  e.exports = function (e) {
    return new Promise(function (t, c) {
      var f = e.data,
          l = e.headers;
      r.isFormData(f) && delete l["Content-Type"];
      var p = new XMLHttpRequest();

      if (e.auth) {
        var d = e.auth.username || "",
            h = e.auth.password || "";
        l.Authorization = "Basic " + btoa(d + ":" + h);
      }

      if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function () {
        if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
          var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
              r = {
            data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
            status: p.status,
            statusText: p.statusText,
            headers: n,
            config: e,
            request: p
          };
          o(t, c, r), p = null;
        }
      }, p.onabort = function () {
        p && (c(a("Request aborted", e, "ECONNABORTED", p)), p = null);
      }, p.onerror = function () {
        c(a("Network Error", e, null, p)), p = null;
      }, p.ontimeout = function () {
        c(a("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null;
      }, r.isStandardBrowserEnv()) {
        var m = n(27),
            y = (e.withCredentials || u(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
        y && (l[e.xsrfHeaderName] = y);
      }

      if ("setRequestHeader" in p && r.forEach(l, function (e, t) {
        void 0 === f && "content-type" === t.toLowerCase() ? delete l[t] : p.setRequestHeader(t, e);
      }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
        p.responseType = e.responseType;
      } catch (t) {
        if ("json" !== e.responseType) throw t;
      }
      "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
        p && (p.abort(), c(e), p = null);
      }), void 0 === f && (f = null), p.send(f);
    });
  };
}, function (e, t, n) {
  "use strict";

  var r = n(24);

  e.exports = function (e, t, n, o, i) {
    var s = new Error(e);
    return r(s, t, n, o, i);
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);

  e.exports = function (e, t) {
    t = t || {};
    var n = {};
    return r.forEach(["url", "method", "params", "data"], function (e) {
      void 0 !== t[e] && (n[e] = t[e]);
    }), r.forEach(["headers", "auth", "proxy"], function (o) {
      r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : void 0 !== t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : void 0 !== e[o] && (n[o] = e[o]);
    }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (r) {
      void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]);
    }), n;
  };
}, function (e, t, n) {
  "use strict";

  function r(e) {
    this.message = e;
  }

  r.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, r.prototype.__CANCEL__ = !0, e.exports = r;
},,,, function (e, t, n) {
  e.exports = n(13);
}, function (e, t, n) {
  var r = n(14),
      o = document.querySelector('meta[name="csrf"]').getAttribute("content"),
      i = {
    build: {
      base: {},
      util: {},
      components: {}
    },
    variables: {}
  };
  document.addEventListener("DOMContentLoaded", function () {
    JSON.stringify(i), document.querySelectorAll(".component").forEach(function (e) {
      e.addEventListener("click", function () {
        $type = e.getAttribute("data-type"), e.getAttribute("id"), 1 == e.checked ? i.build.$type = !0 : i.build.type = !1, console.log(i.build);
      });
    }), document.querySelector(".build-css").addEventListener("click", function () {
      r.post("/builder/ajax/render", {
        _token: o,
        scss: i
      }).then(function (e) {
        var t = "/builder/download/" + e.data,
            n = document.createElement("a");
        n.href = t, document.body.appendChild(n), n.click();
      })["catch"](function (e) {
        console.log(e);
      });
    });
  });
}, function (e, t, n) {
  e.exports = n(15);
}, function (e, t, n) {
  "use strict";

  var r = n(0),
      o = n(1),
      i = n(17),
      s = n(7);

  function u(e) {
    var t = new i(e),
        n = o(i.prototype.request, t);
    return r.extend(n, i.prototype, t), r.extend(n, t), n;
  }

  var a = u(n(4));
  a.Axios = i, a.create = function (e) {
    return u(s(a.defaults, e));
  }, a.Cancel = n(8), a.CancelToken = n(30), a.isCancel = n(3), a.all = function (e) {
    return Promise.all(e);
  }, a.spread = n(31), e.exports = a, e.exports["default"] = a;
}, function (e, t) {
  e.exports = function (e) {
    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0),
      o = n(2),
      i = n(18),
      s = n(19),
      u = n(7);

  function a(e) {
    this.defaults = e, this.interceptors = {
      request: new i(),
      response: new i()
    };
  }

  a.prototype.request = function (e) {
    "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = u(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
    var t = [s, void 0],
        n = Promise.resolve(e);

    for (this.interceptors.request.forEach(function (e) {
      t.unshift(e.fulfilled, e.rejected);
    }), this.interceptors.response.forEach(function (e) {
      t.push(e.fulfilled, e.rejected);
    }); t.length;) {
      n = n.then(t.shift(), t.shift());
    }

    return n;
  }, a.prototype.getUri = function (e) {
    return e = u(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
  }, r.forEach(["delete", "get", "head", "options"], function (e) {
    a.prototype[e] = function (t, n) {
      return this.request(r.merge(n || {}, {
        method: e,
        url: t
      }));
    };
  }), r.forEach(["post", "put", "patch"], function (e) {
    a.prototype[e] = function (t, n, o) {
      return this.request(r.merge(o || {}, {
        method: e,
        url: t,
        data: n
      }));
    };
  }), e.exports = a;
}, function (e, t, n) {
  "use strict";

  var r = n(0);

  function o() {
    this.handlers = [];
  }

  o.prototype.use = function (e, t) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t
    }), this.handlers.length - 1;
  }, o.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  }, o.prototype.forEach = function (e) {
    r.forEach(this.handlers, function (t) {
      null !== t && e(t);
    });
  }, e.exports = o;
}, function (e, t, n) {
  "use strict";

  var r = n(0),
      o = n(20),
      i = n(3),
      s = n(4),
      u = n(28),
      a = n(29);

  function c(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }

  e.exports = function (e) {
    return c(e), e.baseURL && !u(e.url) && (e.url = a(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
      delete e.headers[t];
    }), (e.adapter || s.adapter)(e).then(function (t) {
      return c(e), t.data = o(t.data, t.headers, e.transformResponse), t;
    }, function (t) {
      return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
    });
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);

  e.exports = function (e, t, n) {
    return r.forEach(n, function (n) {
      e = n(e, t);
    }), e;
  };
}, function (e, t) {
  var n,
      r,
      o = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined");
  }

  function s() {
    throw new Error("clearTimeout has not been defined");
  }

  function u(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }

  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i;
    } catch (e) {
      n = i;
    }

    try {
      r = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (e) {
      r = s;
    }
  }();
  var a,
      c = [],
      f = !1,
      l = -1;

  function p() {
    f && a && (f = !1, a.length ? c = a.concat(c) : l = -1, c.length && d());
  }

  function d() {
    if (!f) {
      var e = u(p);
      f = !0;

      for (var t = c.length; t;) {
        for (a = c, c = []; ++l < t;) {
          a && a[l].run();
        }

        l = -1, t = c.length;
      }

      a = null, f = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

        try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t;
  }

  function m() {}

  o.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    c.push(new h(e, t)), 1 !== c.length || f || u(d);
  }, h.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
    return [];
  }, o.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function () {
    return "/";
  }, o.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);

  e.exports = function (e, t) {
    r.forEach(e, function (n, r) {
      r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
    });
  };
}, function (e, t, n) {
  "use strict";

  var r = n(6);

  e.exports = function (e, t, n) {
    var o = n.config.validateStatus;
    !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t, n, r, o) {
    return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code
      };
    }, e;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0),
      o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

  e.exports = function (e) {
    var t,
        n,
        i,
        s = {};
    return e ? (r.forEach(e.split("\n"), function (e) {
      if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
        if (s[t] && o.indexOf(t) >= 0) return;
        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
      }
    }), s) : s;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);
  e.exports = r.isStandardBrowserEnv() ? function () {
    var e,
        t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");

    function o(e) {
      var r = e;
      return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
      };
    }

    return e = o(window.location.href), function (t) {
      var n = r.isString(t) ? o(t) : t;
      return n.protocol === e.protocol && n.host === e.host;
    };
  }() : function () {
    return !0;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);
  e.exports = r.isStandardBrowserEnv() ? {
    write: function write(e, t, n, o, i, s) {
      var u = [];
      u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), !0 === s && u.push("secure"), document.cookie = u.join("; ");
    },
    read: function read(e) {
      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove: function remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  } : {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(8);

  function o(e) {
    if ("function" != typeof e) throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    var n = this;
    e(function (e) {
      n.reason || (n.reason = new r(e), t(n.reason));
    });
  }

  o.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }, o.source = function () {
    var e;
    return {
      token: new o(function (t) {
        e = t;
      }),
      cancel: e
    };
  }, e.exports = o;
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  };
}]);
