!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = {i: r, l: !1, exports: {}});
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r});
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(e, '__esModule', {value: !0});
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', {enumerable: !0, value: e}),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a),
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 23));
})([
  function(e, t, n) {
    'use strict';
    e.exports = n(25);
  },
  function(e, t, n) {
    'use strict';
    e.exports = n(8);
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      n.d(t, 'a', function() {
        return c;
      }),
        n.d(t, 'b', function() {
          return s;
        });
      var r,
        a = n(0),
        o = n.n(a),
        i = n(13),
        l = n.n(i);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      var u =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      const c = Object(a.createContext)([{}, () => {}]),
        s = e => {
          const [t, n] = Object(a.useState)([]);
          Object(a.useEffect)(() => {
            fetch('/api/getvid', {method: 'GET'})
              .then(e => e.json())
              .then(e => {
                n(e), u({type: 'initialize', payload: e});
              })
              .catch(e => {
                console.error(e);
              });
          }, []),
            Object(a.useEffect)(() => {
              const e = localStorage.getItem('username');
              e && u({type: 'setUser', payload: e});
            }, []);
          const r = ['ChinguAdmin', 'ChinguCohortCollective'],
            [i, u] = Object(a.useReducer)(
              (e, t) => {
                switch (t.type) {
                  case 'initialize':
                    return {
                      ...e,
                      allVideos: t.payload,
                      displayedVideos: t.payload,
                    };
                  case 'search': {
                    const n = new RegExp(l()(t.searchQuery), 'i'),
                      r = e.allVideos.filter(e => {
                        if (
                          n.test(e.title) ||
                          n.test(e.category) ||
                          !0 === n.test(e.tags)
                        )
                          return !0;
                      });
                    return {...e, filter: t.searchQuery, displayedVideos: r};
                  }
                  case 'verifyUser':
                    return t.payload[0] == r[0] && t.payload[1] == r[1]
                      ? (localStorage.setItem('username', t.payload[0]),
                        {...e, user: t.payload[0]})
                      : alert('Incorrect Credentials');
                  case 'setUser':
                    return {...e, user: t.payload};
                  case 'clearUser':
                    return (
                      localStorage.removeItem('username'), {...e, user: null}
                    );
                  default:
                    return e;
                }
              },
              {user: null, filter: '', allVideos: [], displayedVideos: []},
            );
          return o.a.createElement(
            c.Provider,
            {value: {state: i, dispatch: u}},
            e.children,
          );
        };
      var d, f;
      u(
        s,
        'useState{[vids, setVids]([])}\nuseEffect{}\nuseEffect{}\nuseReducer{[state, dispatch](initialState)}',
      ),
        (d = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (d.register(
            c,
            'VideoContext',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VideoStore.js',
          ),
          d.register(
            s,
            'VideoContextProvider',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VideoStore.js',
          )),
        (f = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && f(e);
    }.call(this, n(3)(e)));
  },
  function(e, t) {
    e.exports = function(e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            },
          }),
          Object.defineProperty(t, 'exports', {enumerable: !0}),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                r = e[3];
              if (!r) return n;
              if (t && 'function' == typeof btoa) {
                var a = ((i = r),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                    ' */'),
                  o = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                  });
                return [n]
                  .concat(o)
                  .concat([a])
                  .join('\n');
              }
              var i;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
          }).join('');
        }),
        (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var o = this[a][0];
            null != o && (r[o] = !0);
          }
          for (a = 0; a < e.length; a++) {
            var i = e[a];
            (null != i[0] && r[i[0]]) ||
              (n && !i[2]
                ? (i[2] = n)
                : n && (i[2] = '(' + i[2] + ') and (' + n + ')'),
              t.push(i));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      "/* General normalizing */\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: var(--font);\n  font-weight: 400;\n  max-width: 100vw;\n  min-height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n/* Links */\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* CSS Variables */\n:root {\n  --font: 'Raleway', sans-serif;\n  --color-theme: #16e28b;\n  --color-ltheme: #93e8c4;\n  --color-bg: #000;\n  --color-gray: #bbb;\n  --color-lgray: #f8f8f8;\n  --color-dblue: #080a38;\n}\n\n/* Common Styles */\n\n.pm0 {\n  padding: 0;\n  margin: 0;\n}\n\n.fbc {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbr {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.fbr-wrap {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.b {\n  font-weight: 600;\n  font-size: 1.8em;\n}\n\n.tc {\n  color: var(--color-theme);\n}\n\n.dbgc {\n  background-color: var(--color-bg);\n}\n\n.lbgc {\n  background-color: var(--color-ltheme);\n}\n\n/* App Component Styling */\n\n#app-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: [c1] 1fr [c2];\n  grid-template-rows: [r1] 70px [r2] 1fr [r3];\n  grid-gap: 0;\n  max-width: 100vw;\n  min-height: 100%;\n  background-color: #fff;\n}\n\n.header {\n  position: fixed;\n  grid-column: c1 / c2;\n  grid-row: r1 / r2;\n  display: grid;\n  grid-template-columns: [hc1] 1fr [hc2] 3fr [hc3] 20px [hc4];\n  grid-template-rows: [hr1] 35px [hr2] 35px [hr3];\n  width: 100%;\n  height: 70px;\n  z-index: 3;\n}\n\n.logo {\n  grid-column: hc1 / hc2;\n  grid-row: hr1 / hr3;\n  width: 45px;\n  height: 45px;\n  padding: 0;\n  margin: auto;\n}\n\n.main-title {\n  grid-column: hc2 / hc3;\n  grid-row: hr1 / hr3;\n  margin: auto auto auto 0.2em;\n  font-size: 1.3em;\n}\n\n.tray {\n  position: relative;\n  grid-column: hc3 / hc4;\n  grid-row: hr1 / hr3;\n  display: grid;\n  grid-template-columns: [tc1] 20px [tc2] 1fr [tc3] 1fr [tc4];\n  grid-template-rows: [tr1] 1.5fr [tr2] 1fr [tr3];\n  background-color: #080a38;\n  border-left: 1px solid var(--color-lgray);\n  overflow: hidden;\n  transition-delay: 300ms;\n}\n\n.fa-grip-lines-vertical,\n.fa-search {\n  position: absolute;\n  left: 3px;\n  top: 40%;\n  color: var(--color-lgray);\n}\n\n.show-tray {\n  grid-column: hc2 / hc4;\n}\n\n.search-box {\n  position: relative;\n  grid-column: tc2 / tc4;\n  grid-row: tr1 / tr2;\n  width: 210px;\n  margin: auto;\n}\n\n#search {\n  width: 200px;\n  padding-left: 0.4em;\n  margin: auto;\n  color: #fff;\n  background-color: var(--color-bg);\n  border: 1px solid #fff;\n  overflow: hidden;\n}\n\n#search::placeholder {\n  color: var(--color-gray);\n  font-style: italic;\n}\n\n.search-box > i {\n  position: absolute;\n  left: 183px;\n  top: 5px;\n}\n\n.tp1 {\n  grid-column: tc2 / tc3;\n  grid-row: tr2 / tr3;\n  padding-bottom: 0.2em;\n  margin: auto;\n  font-size: 0.9em;\n}\n\n.tp2 {\n  grid-column: tc3 / tc4;\n  grid-row: tr2 / tr3;\n  padding-bottom: 0.2em;\n  margin: auto;\n  font-size: 0.9em;\n}\n\n.nav {\n  position: relative;\n  grid-column: c1 / c2;\n  grid-row: r2 / r3;\n  justify-content: flex-start;\n  width: 100%;\n  height: 0;\n  font-size: 1.2em;\n  transition-duration: 500ms;\n  overflow: hidden;\n  z-index: 5;\n}\n\n.show-nav {\n  height: 500px;\n}\n\n.flip {\n  transform: rotate(180deg);\n}\n\n.playlists {\n  margin: 2em 0 0.5em 0;\n  color: var(--color-bg);\n  font-variant: small-caps;\n}\n\n.nav > ul {\n  color: #000;\n  list-style-type: none;\n}\n\n.nav > ul > li {\n  padding: 0;\n  margin: 0 0 0.5em -2em;\n}\n\n#login-modal {\n  grid-column: c1 / c3;\n  position: absolute;\n  top: 100px;\n  left: 0;\n  width: 100%;\n  color: #000;\n  background-color: var(--color-ltheme);\n  overflow: hidden;\n  transition-duration: 200ms;\n  z-index: 5;\n}\n\nbutton {\n  background-color: var(--color-lgray);\n}\n\n#close-login {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n}\n\n#login-form > div > input {\n  margin: 0.5em 1em;\n}\n\n#submit-login {\n  padding: 0.2em 0.5em;\n  margin: auto;\n  font-family: var(--font);\n  background-color: #fff;\n}\n\n.hide-login {\n  height: 0;\n}\n\n.show-login {\n  height: 100px;\n}\n\nmain {\n  grid-column: c1 / c2;\n  grid-row: r2 / r3;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-lgray);\n}\n\n.scroll-indicator {\n  position: fixed;\n  bottom: 5px;\n  right: 8px;\n  width: 50px;\n  padding: 0;\n  margin: 0;\n  color: var(--color-gray);\n  text-align: right;\n}\n\n.most-recent {\n  width: 95%;\n  height: 33%;\n  background-color: #fff;\n  border-bottom: 15px solid var(--color-lgray);\n}\n\n.other-vids {\n  width: 95%;\n  height: 63%;\n  background-color: #fff;\n}\n\n/* Mobile Landscape */\n@media only screen and (max-width: 850px) and (max-height: 450px) {\n  #app-container {\n    position: relative;\n    display: grid;\n    grid-template-columns: [c1] 1fr [c2];\n    grid-template-rows: [r1] 50px [r2] 1fr [r3];\n    grid-gap: 0;\n    max-width: 100vw;\n    min-height: 100%;\n    background-color: #fff;\n  }\n\n  .header {\n    grid-template-columns: [hc1] 0.5fr [hc2] 1fr [hc3] 1fr [hc4];\n    grid-template-rows: [hr1] 25px [hr2] 25px [hr3];\n    height: 50px;\n  }\n\n  .logo {\n    width: 40px;\n    height: 40px;\n  }\n\n  .main-title {\n    margin: auto;\n  }\n\n  .tray {\n    grid-column: hc3 / hc4;\n    grid-row: hr1 / hr3;\n    display: grid;\n    grid-template-columns: [tc1] 1fr [tc2] 1fr [tc3];\n    grid-template-rows: [tr1] 1.5fr [tr2] 1fr [tr3];\n    width: 100%;\n    background-color: #000;\n    border: none;\n  }\n\n  .fa-grip-lines-vertical {\n    display: none;\n  }\n\n  .search-box {\n    grid-column: tc1 / tc3;\n    grid-row: tr1 / tr2;\n    margin: auto;\n  }\n\n  .tp1 {\n    grid-column: tc1 / tc2;\n    grid-row: tr2 / tr3;\n    padding-bottom: 0.2em;\n    margin: auto;\n    font-size: 0.9em;\n  }\n\n  .tp2 {\n    grid-column: tc2 / tc3;\n    grid-row: tr2 / tr3;\n    padding-bottom: 0.2em;\n    margin: auto;\n    font-size: 0.9em;\n  }\n\n  .nav {\n    font-size: 1em;\n  }\n\n  .show-nav {\n    height: calc(100vh - 50px);\n  }\n\n  .playlists {\n    margin: 0.5em 0 0.5em 0;\n  }\n\n  main {\n    height: calc(100vh - 50px);\n  }\n\n  .scroll-indicator {\n    bottom: 0;\n    left: 50px;\n    width: 65px;\n    border-radius: 10px;\n    background-color: var(--color-theme);\n    color: var(--color-dblue);\n    text-align: center;\n  }\n\n  .scroll-indicator > p {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 600px) and (min-height: 450px) {\n  #app-container {\n    display: grid;\n    grid-template-columns: [c1] 1.5fr [c2] 5fr [c3];\n    grid-template-rows: [r1] 100px [r2] 1fr [r3];\n    grid-gap: 0;\n    background-color: #fff;\n  }\n\n  .header {\n    grid-column: c1 / c3;\n    grid-row: r1 / r2;\n    display: grid;\n    grid-template-columns: [hc1] 0.5fr [hc2] 0.75fr [hc3] 1fr [hc4];\n    grid-template-rows: [hr1] 50px [hr2] 50px [hr3];\n    width: 100%;\n    height: 100px;\n    z-index: 3;\n  }\n\n  .logo {\n    width: 60px;\n    height: 60px;\n  }\n\n  .main-title {\n    margin-left: 0.3em;\n    font-size: 1.2em;\n  }\n\n  .tray {\n    position: relative;\n    grid-column: hc3 / hc4;\n    grid-row: hr1 / hr3;\n    display: grid;\n    grid-template-columns: [tc1] 1fr [tc2];\n    grid-template-rows: [tr1] 1fr [tr2];\n    background-color: var(--color-bg);\n    border: none;\n  }\n\n  .search-box {\n    grid-column: tc1 / tc2;\n    grid-row: tr1 / tr2;\n    margin: auto auto auto 0;\n  }\n\n  #search {\n    width: 200px;\n    border: 1px solid #fff;\n  }\n\n  .tp1 {\n    display: none;\n  }\n\n  .tp2 {\n    grid-column: tc1 / tc2;\n    grid-row: tr1 / tr2;\n    margin: auto auto auto 220px;\n    font-size: 0.8em;\n  }\n\n  .nav {\n    justify-content: flex-start;\n    grid-column: c1 / c2;\n    grid-row: r2 / r3;\n    width: 100%;\n    height: 100%;\n  }\n\n  #login-modal {\n    grid-column: c2 / c3;\n    border-left: 1px solid #000;\n    border-bottom: 1px solid #000;\n    box-shadow: 12px 1px 20px 1px var(--color-dblue);\n  }\n\n  main {\n    grid-column: c2 / c3;\n    grid-row: r2 / r3;\n  }\n}\n\n@media only screen and (min-width: 750px) and (min-height: 400px) {\n  .header {\n    grid-template-columns: [hc1] 0.75fr [hc2] 1fr [hc3] 1fr [hc4];\n  }\n\n  .logo {\n    width: 70px;\n    height: 70px;\n  }\n\n  .main-title {\n    font-size: 1.3em;\n  }\n}\n\n@media only screen and (min-width: 900px) and (min-height: 400px) {\n  #app-container {\n    grid-template-columns: [c1] 1fr [c2] 4fr [c3];\n  }\n\n  .header {\n    grid-template-columns: [hc1] 0.5fr [hc2] 1.2fr [hc3] 1fr [hc4];\n  }\n\n  .logo {\n    width: 80px;\n    height: 80px;\n  }\n\n  .main-title {\n    font-size: 1.8em;\n  }\n}\n",
      '',
    ]);
  },
  function(e, t, n) {
    var r,
      a,
      o = {},
      i = ((r = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === a && (a = r.apply(this, arguments)), a;
      }),
      l = (function(e) {
        var t = {};
        return function(e, n) {
          if ('function' == typeof e) return e();
          if (void 0 === t[e]) {
            var r = function(e, t) {
              return t ? t.querySelector(e) : document.querySelector(e);
            }.call(this, e, n);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            t[e] = r;
          }
          return t[e];
        };
      })(),
      u = null,
      c = 0,
      s = [],
      d = n(32);
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = o[r.id];
        if (a) {
          a.refs++;
          for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) a.parts.push(y(r.parts[i], t));
        } else {
          var l = [];
          for (i = 0; i < r.parts.length; i++) l.push(y(r.parts[i], t));
          o[r.id] = {id: r.id, refs: 1, parts: l};
        }
      }
    }
    function p(e, t) {
      for (var n = [], r = {}, a = 0; a < e.length; a++) {
        var o = e[a],
          i = t.base ? o[0] + t.base : o[0],
          l = {css: o[1], media: o[2], sourceMap: o[3]};
        r[i] ? r[i].parts.push(l) : n.push((r[i] = {id: i, parts: [l]}));
      }
      return n;
    }
    function m(e, t) {
      var n = l(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
        );
      var r = s[s.length - 1];
      if ('top' === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          s.push(t);
      else if ('bottom' === e.insertAt) n.appendChild(t);
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
          );
        var a = l(e.insertAt.before, n);
        n.insertBefore(t, a);
      }
    }
    function h(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = s.indexOf(e);
      t >= 0 && s.splice(t, 1);
    }
    function g(e) {
      var t = document.createElement('style');
      if (
        (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
        void 0 === e.attrs.nonce)
      ) {
        var r = (function() {
          0;
          return n.nc;
        })();
        r && (e.attrs.nonce = r);
      }
      return v(t, e.attrs), m(e, t), t;
    }
    function v(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      var n, r, a, o;
      if (t.transform && e.css) {
        if (
          !(o =
            'function' == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function() {};
        e.css = o;
      }
      if (t.singleton) {
        var i = c++;
        (n = u || (u = g(t))),
          (r = x.bind(null, n, i, !1)),
          (a = x.bind(null, n, i, !0));
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link');
              return (
                void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                v(t, e.attrs),
                m(e, t),
                t
              );
            })(t)),
            (r = function(e, t, n) {
              var r = n.css,
                a = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && a;
              (t.convertToAbsoluteUrls || o) && (r = d(r));
              a &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                  ' */');
              var i = new Blob([r], {type: 'text/css'}),
                l = e.href;
              (e.href = URL.createObjectURL(i)), l && URL.revokeObjectURL(l);
            }.bind(null, n, t)),
            (a = function() {
              h(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = g(t)),
            (r = function(e, t) {
              var n = t.css,
                r = t.media;
              r && e.setAttribute('media', r);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (a = function() {
              h(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else a();
        }
      );
    }
    e.exports = function(e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment',
        );
      ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = i()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom');
      var n = p(e, t);
      return (
        f(n, t),
        function(e) {
          for (var r = [], a = 0; a < n.length; a++) {
            var i = n[a];
            (l = o[i.id]).refs--, r.push(l);
          }
          e && f(p(e, t), t);
          for (a = 0; a < r.length; a++) {
            var l;
            if (0 === (l = r[a]).refs) {
              for (var u = 0; u < l.parts.length; u++) l.parts[u]();
              delete o[l.id];
            }
          }
        }
      );
    };
    var b,
      _ = ((b = []),
      function(e, t) {
        return (b[e] = t), b.filter(Boolean).join('\n');
      });
    function x(e, t, n, r) {
      var a = n ? '' : r.css;
      if (e.styleSheet) e.styleSheet.cssText = _(t, a);
      else {
        var o = document.createTextNode(a),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
      }
    }
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature;
      const i = ({category: e, classname: t}) => {
          let n;
          switch (e) {
            case 'AMA':
              n = 'far fa-comments';
              break;
            case 'Tutorial':
              n = 'fas fa-book';
              break;
            case 'Showcase':
              n = 'fas fa-flag-checkered';
              break;
            case 'Meet The Dev':
              n = 'far fa-handshake';
              break;
            case 'Visualization':
              n = 'fas fa-project-diagram';
              break;
            case 'Project':
              n = 'fas fa-laptop-code';
              break;
            case 'Other':
              n = 'fas fa-user-astronaut';
              break;
            default:
              n = 'fa-question-circle';
          }
          return o.a.createElement(
            'span',
            {className: `fbc pm0 ${t}`},
            o.a.createElement('i', {className: `${n} fa-3x`}),
          );
        },
        l = i;
      var u, c;
      (t.a = l),
        (u = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (u.register(
            i,
            'VideoIcon',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VideoIcon.js',
          ),
          u.register(
            l,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VideoIcon.js',
          )),
        (c = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && c(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', {value: !0});
    var r,
      a = (r = n(0)) && 'object' == typeof r && 'default' in r ? r.default : r;
    function o(e) {
      return (
        o.warnAboutHMRDisabled &&
          ((o.warnAboutHMRDisabled = !0),
          console.error(
            'React-Hot-Loader: misconfiguration detected, using production version in non-production environment.',
          ),
          console.error(
            'React-Hot-Loader: Hot Module Replacement is not enabled.',
          )),
        a.Children.only(e.children)
      );
    }
    o.warnAboutHMRDisabled = !1;
    var i = function e() {
      return e.shouldWrapWithAppContainer
        ? function(e) {
            return function(t) {
              return a.createElement(o, null, a.createElement(e, t));
            };
          }
        : function(e) {
            return e;
          };
    };
    i.shouldWrapWithAppContainer = !1;
    (t.AppContainer = o),
      (t.hot = i),
      (t.areComponentsEqual = function(e, t) {
        return e === t;
      }),
      (t.setConfig = function() {}),
      (t.cold = function(e) {
        return e;
      }),
      (t.configureComponent = function() {});
  },
  function(e, t, n) {
    'use strict';
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t['_' + String.fromCharCode(n)] = n;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join('')
        )
          return !1;
        var r = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            r[e] = e;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (
            var n,
              i,
              l = (function(e) {
                if (null == e)
                  throw new TypeError(
                    'Object.assign cannot be called with null or undefined',
                  );
                return Object(e);
              })(e),
              u = 1;
            u < arguments.length;
            u++
          ) {
            for (var c in (n = Object(arguments[u])))
              a.call(n, c) && (l[c] = n[c]);
            if (r) {
              i = r(n);
              for (var s = 0; s < i.length; s++)
                o.call(n, i[s]) && (l[i[s]] = n[i[s]]);
            }
          }
          return l;
        };
  },
  function(e, t, n) {
    var r = n(31);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = {hmr: !0, transform: void 0, insertInto: void 0};
    n(6)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    'use strict';
    !(function e() {
      if (
        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
      (e.exports = n(27));
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    (function(module) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          22,
        ),
        react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _VideoStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
        _Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14),
        _Search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15),
        _Login_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16),
        _DisplayedVids_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          17,
        ),
        _Admin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21),
        _styles_App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37),
        _styles_App_css__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _styles_App_css__WEBPACK_IMPORTED_MODULE_8__,
        ),
        enterModule;
      function _defineProperty(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      (enterModule = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : __webpack_require__(1)
      ).enterModule),
        enterModule && enterModule(module);
      var __signature__ =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
        constructor(...e) {
          super(...e),
            _defineProperty(this, 'state', {
              showNav: !1,
              showTray: !1,
              showLogin: !1,
              showAdmin: !1,
              searchQuery: '',
              currentVid: 0,
            }),
            _defineProperty(this, 'handleShowTray', () => {
              this.state.showTray
                ? this.setState({showTray: !1})
                : this.setState({showTray: !0});
            }),
            _defineProperty(this, 'handleShowNav', () => {
              this.state.showNav
                ? this.setState({showNav: !1})
                : this.setState({showNav: !0});
            }),
            _defineProperty(this, 'handleCloseNav', () => {
              this.setState({showNav: !1});
            }),
            _defineProperty(this, 'handleShowLogin', () => {
              this.state.showLogin
                ? this.setState({showLogin: !1})
                : this.setState({showLogin: !0});
            }),
            _defineProperty(this, 'handleShowAdmin', () => {
              this.state.showAdmin
                ? this.setState({showAdmin: !1})
                : this.setState({showAdmin: !0});
            }),
            _defineProperty(this, 'handleMainVidToZero', e => {
              this.setState({currentVid: e});
            });
        }
        render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {id: 'app-container', className: 'pm0', title: 'app-container'},
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'header',
              {className: 'dbgc header'},
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'img',
                {
                  src: '../src/imgs/ChinguLogo.png',
                  alt: 'Chingu Logo',
                  className: 'logo pm0',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                {className: 'b pm0 tc main-title'},
                'Chingu Learning Portal',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {className: this.state.showTray ? 'tray show-tray' : 'tray'},
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'i',
                  {
                    className: 'fas fa-grip-lines-vertical',
                    onClick: this.handleShowTray,
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Search_js__WEBPACK_IMPORTED_MODULE_4__.a,
                  null,
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'p',
                  {className: 'tc pointer tp1', onClick: this.handleShowNav},
                  'Playlists',
                ),
                this.context.state.user
                  ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'p',
                      {
                        className: 'tc pointer tp2',
                        onClick: this.handleShowAdmin,
                      },
                      'Admin',
                    )
                  : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'p',
                      {
                        className: 'tc pointer tp2',
                        onClick: this.handleShowLogin,
                      },
                      'Login',
                    ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Nav_js__WEBPACK_IMPORTED_MODULE_3__.a,
              {
                showNav: this.state.showNav,
                closeNav: this.handleCloseNav,
                setCurrentVid: this.handleMainVidToZero,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Login_js__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                showLogin: this.state.showLogin,
                handleShowLogin: this.handleShowLogin,
              },
            ),
            !!this.state.showAdmin &&
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Admin_js__WEBPACK_IMPORTED_MODULE_7__.a,
                {handleShowAdmin: this.handleShowAdmin},
              ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'main',
              {className: 'fbc'},
              !this.state.showAdmin &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _DisplayedVids_js__WEBPACK_IMPORTED_MODULE_6__.a,
                  {
                    currentVid: this.state.currentVid,
                    setCurrentVid: this.handleMainVidToZero,
                  },
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'aside',
                {className: 'scroll-indicator'},
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'p',
                  {className: 'pm0'},
                  'scroll',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'i',
                  {className: 'fas fa-chevron-down'},
                ),
              ),
            ),
          );
        }
        __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code);
        }
      }
      App.contextType = _VideoStore_js__WEBPACK_IMPORTED_MODULE_2__.a;
      const _default = Object(
        react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__.hot,
      )(App);
      var reactHotLoader, leaveModule;
      (__webpack_exports__.a = _default),
        (reactHotLoader = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : __webpack_require__(1)
        ).default),
        reactHotLoader &&
          (reactHotLoader.register(
            App,
            'App',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/App.js',
          ),
          reactHotLoader.register(
            _default,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/App.js',
          )),
        (leaveModule = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : __webpack_require__(1)
        ).leaveModule),
        leaveModule && leaveModule(module);
    }.call(this, __webpack_require__(3)(module)));
  },
  function(e, t, n) {
    'use strict';
    const r = /[|\\{}()[\]^$+*?.-]/g;
    e.exports = e => {
      if ('string' != typeof e) throw new TypeError('Expected a string');
      return e.replace(r, '\\$&');
    };
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a),
        i = n(2);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      var l =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      const u = ({showNav: e, closeNav: t, setCurrentVid: n}) => {
        const {dispatch: r} = Object(a.useContext)(i.a);
        return o.a.createElement(
          'nav',
          {className: e ? 'lbgc fbc nav show-nav' : 'lbgc fbc nav'},
          o.a.createElement('h2', {className: 'b playlists'}, 'Playlists'),
          o.a.createElement(
            'ul',
            null,
            o.a.createElement(
              'li',
              {
                className: 'pointer',
                onClick: () => {
                  r({type: 'search', searchQuery: ''}), n(0), t();
                },
              },
              'All',
            ),
            [
              'AMA',
              'Tutorial',
              'Project',
              'Meet The Dev',
              'Showcase',
              'Visualization',
              'Other',
            ].map(e =>
              o.a.createElement(
                'li',
                {
                  className: 'pointer',
                  key: e,
                  onClick: () => {
                    r({type: 'search', searchQuery: e}), n(0), t();
                  },
                },
                e,
              ),
            ),
          ),
        );
      };
      l(u, 'useContext{{dispatch}}');
      const c = u;
      var s, d;
      (t.a = c),
        (s = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (s.register(
            u,
            'Nav',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Nav.js',
          ),
          s.register(
            c,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Nav.js',
          )),
        (d = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && d(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a),
        i = n(2);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      var l =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      const u = e => {
        const [t, n] = Object(a.useState)('');
        let {dispatch: r} = Object(a.useContext)(i.a);
        const l = () => {
          r({type: 'search', searchQuery: t});
        };
        return o.a.createElement(
          'div',
          {className: 'search-box'},
          o.a.createElement('input', {
            type: 'text',
            id: 'search',
            name: 'search',
            'aria-label': 'Search',
            placeholder: 'Search videos ...',
            onChange: e => {
              n(e.target.value);
            },
            onKeyUp: e => {
              'Enter' === e.key && l();
            },
          }),
          o.a.createElement('i', {
            className: 'fas fa-search pointer',
            onClick: l,
          }),
        );
      };
      l(u, "useState{[query, setQuery]('')}\nuseContext{{dispatch}}");
      const c = u;
      var s, d;
      (t.a = c),
        (s = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (s.register(
            u,
            'Search',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Search.js',
          ),
          s.register(
            c,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Search.js',
          )),
        (d = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && d(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a),
        i = n(2);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      var l =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      const u = ({showLogin: e, handleShowLogin: t}) => {
        const {state: n, dispatch: r} = Object(a.useContext)(i.a),
          [l, u] = Object(a.useState)(''),
          [c, s] = Object(a.useState)('');
        return o.a.createElement(
          'div',
          {
            id: 'login-modal',
            className: e ? 'fbc show-login' : 'fbc hide-login',
          },
          o.a.createElement('button', {id: 'close-login', onClick: t}, 'close'),
          o.a.createElement(
            'form',
            {
              id: 'login-form',
              className: 'fbc',
              onSubmit: e => {
                e.preventDefault(),
                  t(),
                  r({type: 'verifyUser', payload: [l, c]});
              },
            },
            o.a.createElement(
              'div',
              null,
              o.a.createElement('label', {htmlFor: 'title'}, 'Username:'),
              o.a.createElement('input', {
                type: 'text',
                id: 'username',
                value: l,
                onChange: e => u(e.target.value),
                placeholder: 'Admin',
                required: !0,
              }),
            ),
            o.a.createElement(
              'div',
              null,
              o.a.createElement('label', {htmlFor: 'url'}, 'Password:'),
              o.a.createElement('input', {
                type: 'password',
                id: 'password',
                value: c,
                onChange: e => s(e.target.value),
                placeholder: 'Admin',
                required: !0,
              }),
            ),
            o.a.createElement('button', {id: 'submit-login'}, 'Log In'),
          ),
        );
      };
      l(
        u,
        "useContext{{state, dispatch}}\nuseState{[username, setUsername]('')}\nuseState{[pass, setPass]('')}",
      );
      const c = u;
      var s, d;
      (t.a = c),
        (s = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (s.register(
            u,
            'Login',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Login.js',
          ),
          s.register(
            c,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Login.js',
          )),
        (d = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && d(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a),
        i = n(2),
        l = n(18),
        u = n(19),
        c = n(20);
      n(33);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      var s =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      const d = ({currentVid: e, setCurrentVid: t}) => {
        let {state: n} = Object(a.useContext)(i.a);
        return (
          Object(a.useEffect)(() => {
            (document.body.scrollTop = 0),
              (document.documentElement.scrollTop = 0);
          }),
          o.a.createElement(
            'section',
            {className: 'all-vids'},
            o.a.createElement(
              'div',
              {className: 'main-vid'},
              n.displayedVideos.length > 0 &&
                o.a.createElement(l.a, {
                  vidObj: n.displayedVideos[e],
                  key: 'MAINVID',
                }),
            ),
            o.a.createElement(
              'h3',
              {className: 'current-displayed'},
              '' === n.filter ? 'All' : n.filter,
              ' Videos (',
              n.displayedVideos.length,
              ')',
            ),
            o.a.createElement(
              'ul',
              {className: 'fbr pm0 thumbs'},
              n.displayedVideos.length > 0
                ? n.displayedVideos.map((e, n) =>
                    o.a.createElement(u.a, {
                      setMainVid: t,
                      vidObj: e,
                      pos: n,
                      key: e.title,
                    }),
                  )
                : o.a.createElement(c.a, null),
            ),
          )
        );
      };
      s(d, 'useContext{{state}}\nuseEffect{}');
      const f = d;
      var p, m;
      (t.a = f),
        (p = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (p.register(
            d,
            'DisplayedVids',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/DisplayedVids.js',
          ),
          p.register(
            f,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/DisplayedVids.js',
          )),
        (m = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && m(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a);
      n(7), n(10);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature;
      const i = ({vidObj: e}) =>
          o.a.createElement(
            'section',
            {className: 'vid-tile'},
            o.a.createElement('h3', {className: 'vid-title'}, e.title),
            o.a.createElement(
              'div',
              {className: 'fbc vid-info-container'},
              o.a.createElement(
                'div',
                {className: 'main-src'},
                o.a.createElement('iframe', {
                  src: e.url + '?showinfo=0',
                  frameBorder: '0',
                  width: '100%',
                  height: '100%',
                  allow:
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                  allowFullScreen: !0,
                }),
              ),
              o.a.createElement(
                'div',
                {className: 'fbc vid-info'},
                o.a.createElement(
                  'p',
                  {className: 'pm0 vid-desc'},
                  e.description,
                ),
                o.a.createElement(
                  'span',
                  {className: 'pm0 vid-tags'},
                  o.a.createElement('strong', null, 'Starring:'),
                  ' ',
                  e.starring,
                ),
                o.a.createElement(
                  'span',
                  {className: 'pm0 vid-tags'},
                  o.a.createElement('strong', null, 'Tags:'),
                  ' ',
                  e.tags,
                ),
              ),
            ),
          ),
        l = i;
      var u, c;
      (t.a = l),
        (u = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (u.register(
            i,
            'VidTile',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VidTile.js',
          ),
          u.register(
            l,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VidTile.js',
          )),
        (c = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && c(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a),
        i = n(7);
      n(10);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature;
      const l = ({vidObj: e, setMainVid: t, pos: n}) => {
          let r = `${e.title.substring(0, 33)} ...`;
          return o.a.createElement(
            'li',
            {className: 'fbc vid-thumb'},
            o.a.createElement('span', {
              className: 'cover-link pointer',
              onClick: () => {
                t(n);
              },
            }),
            o.a.createElement(
              'div',
              {className: 'vid-src'},
              o.a.createElement('iframe', {
                src: e.url + '?showinfo=0',
                frameBorder: '0',
                width: '100%',
                height: '100%',
                allow:
                  'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                allowFullScreen: !0,
              }),
            ),
            o.a.createElement(
              'div',
              {className: 'fbr thumb-info'},
              o.a.createElement(i.a, {
                classname: 'thumb-icon',
                category: e.category,
              }),
              o.a.createElement('h5', {className: 'thumb-title'}, r),
            ),
          );
        },
        u = l;
      var c, s;
      (t.a = u),
        (c = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (c.register(
            l,
            'VidThumb',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VidThumb.js',
          ),
          c.register(
            u,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/VidThumb.js',
          )),
        (s = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && s(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature;
      const i = () =>
          o.a.createElement(
            'div',
            {className: 'tc search-error'},
            o.a.createElement('h3', null, 'No Results'),
          ),
        l = i;
      var u, c;
      (t.a = l),
        (u = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (u.register(
            i,
            'SearchError',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/SearchError.js',
          ),
          u.register(
            l,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/SearchError.js',
          )),
        (c = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && c(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      var r,
        a = n(0),
        o = n.n(a),
        i = n(2);
      n(35);
      (r = ('undefined' != typeof reactHotLoaderGlobal
        ? reactHotLoaderGlobal
        : n(1)
      ).enterModule) && r(e);
      var l =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function(e) {
              return e;
            };
      const u = ({handleShowAdmin: e}) => {
        const {state: t, dispatch: n} = Object(a.useContext)(i.a),
          [r, l] = Object(a.useState)(''),
          [u, c] = Object(a.useState)(''),
          [s, d] = Object(a.useState)(''),
          [f, p] = Object(a.useState)(''),
          [m, h] = Object(a.useState)(''),
          [g, v] = Object(a.useState)(''),
          [y, b] = Object(a.useState)(''),
          _ = () => {
            l(''), c(''), d(''), p(''), h(''), v(''), b('');
          };
        return o.a.createElement(
          'div',
          {className: 'admin-container fbc'},
          o.a.createElement(
            'aside',
            {id: 'close-login', className: 'fbr'},
            o.a.createElement(
              'button',
              {onClick: e, className: 'lbgc'},
              'close',
            ),
            o.a.createElement(
              'button',
              {
                onClick: t => {
                  t.preventDefault(), e(), n({type: 'clearUser'});
                },
                className: 'lbgc',
              },
              'Logout',
            ),
          ),
          o.a.createElement(
            'form',
            {
              id: 'add-vid-form',
              className: 'fbc',
              onSubmit: e => {
                e.preventDefault();
                let t = {
                  title: r,
                  url: u,
                  date: s,
                  category: f,
                  description: m,
                  tags: g,
                  starring: y,
                };
                fetch('/api/addvid', {
                  method: 'POST',
                  body: JSON.stringify(t),
                  headers: {'Content-Type': 'application/json'},
                }).then(e => {
                  200 === e.status
                    ? alert('Video was successfully added to database')
                    : alert(
                        'There was an issue adding this video, please try again',
                      );
                }),
                  _();
              },
            },
            o.a.createElement('label', {htmlFor: 'title'}, 'Title:'),
            o.a.createElement('input', {
              maxLength: '40',
              type: 'text',
              id: 'title',
              value: r,
              onChange: e => l(e.target.value),
              placeholder: 'Title For Video',
              required: !0,
            }),
            o.a.createElement('label', {htmlFor: 'url'}, 'URL:'),
            o.a.createElement('input', {
              maxLength: '40',
              type: 'text',
              id: 'url',
              value: u,
              onChange: e => c(e.target.value),
              placeholder: 'EMBED URL - https://youtube.com/embed/...',
              required: !0,
            }),
            o.a.createElement('label', {htmlFor: 'date'}, 'Date:'),
            o.a.createElement('input', {
              maxLength: '12',
              type: 'text',
              id: 'date',
              value: s,
              onChange: e => d(e.target.value),
              placeholder: 'e.g. 06/12/2019',
              required: !0,
            }),
            o.a.createElement('label', {htmlFor: 'category'}, 'Category:'),
            o.a.createElement('input', {
              list: 'categories',
              id: 'category',
              value: f,
              onChange: e => p(e.target.value),
              placeholder: 'AMA, Tutorial, etc',
              required: !0,
            }),
            o.a.createElement(
              'datalist',
              {id: 'categories'},
              o.a.createElement('option', {value: 'AMA'}),
              o.a.createElement('option', {value: 'Tutorial'}),
              o.a.createElement('option', {value: 'Project'}),
              o.a.createElement('option', {value: 'Meet The Dev'}),
              o.a.createElement('option', {value: 'Visualization'}),
              o.a.createElement('option', {value: 'Showcase'}),
              o.a.createElement('option', {value: 'Other'}),
            ),
            o.a.createElement(
              'label',
              {htmlFor: 'description'},
              'Description:',
            ),
            o.a.createElement('input', {
              maxLength: '100',
              type: 'test',
              id: 'description',
              value: m,
              onChange: e => h(e.target.value),
              placeholder: '100 characters or less for description',
              required: !0,
            }),
            o.a.createElement('label', {htmlFor: 'tags'}, 'Tags:'),
            o.a.createElement('input', {
              maxLength: '30',
              type: 'text',
              id: 'tags',
              value: g,
              onChange: e => v(e.target.value),
              placeholder: 'Space Seperated (e.g. AMA Van Tabbert)',
              required: !0,
            }),
            o.a.createElement('label', {htmlFor: 'starring'}, 'Starring:'),
            o.a.createElement('input', {
              maxLength: '25',
              type: 'text',
              id: 'starring',
              value: y,
              onChange: e => b(e.target.value),
              placeholder: 'Space Seperated (e.g. Jim Medlock)',
            }),
            o.a.createElement('input', {
              type: 'submit',
              id: 'vid-submit',
              className: 'heading-text submit-button lbgc',
              value: 'Submit Video',
            }),
          ),
        );
      };
      l(
        u,
        "useContext{{state, dispatch}}\nuseState{[_title, setTitle]('')}\nuseState{[_url, setUrl]('')}\nuseState{[_date, setDate]('')}\nuseState{[_category, setCategory]('')}\nuseState{[_description, setDescription]('')}\nuseState{[_tags, setTags]('')}\nuseState{[_starring, setStarring]('')}",
      );
      const c = u;
      var s, d;
      (t.a = c),
        (s = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).default) &&
          (s.register(
            u,
            'Admin',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Admin.js',
          ),
          s.register(
            c,
            'default',
            '/Users/Z/Projects/WebDev/Chingu/v9-bears-team-38/client/src/components/Admin.js',
          )),
        (d = ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal
          : n(1)
        ).leaveModule) && d(e);
    }.call(this, n(3)(e)));
  },
  function(e, t, n) {
    t.hot = function(e) {
      return e;
    };
  },
  function(e, t, n) {
    n(24), (e.exports = n(26));
  },
  function(e, t, n) {
    'use strict';
    e.exports = n(8);
  },
  function(e, t, n) {
    'use strict';
    /** @license React v16.8.6
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(9),
      a = 'function' == typeof Symbol && Symbol.for,
      o = a ? Symbol.for('react.element') : 60103,
      i = a ? Symbol.for('react.portal') : 60106,
      l = a ? Symbol.for('react.fragment') : 60107,
      u = a ? Symbol.for('react.strict_mode') : 60108,
      c = a ? Symbol.for('react.profiler') : 60114,
      s = a ? Symbol.for('react.provider') : 60109,
      d = a ? Symbol.for('react.context') : 60110,
      f = a ? Symbol.for('react.concurrent_mode') : 60111,
      p = a ? Symbol.for('react.forward_ref') : 60112,
      m = a ? Symbol.for('react.suspense') : 60113,
      h = a ? Symbol.for('react.memo') : 60115,
      g = a ? Symbol.for('react.lazy') : 60116,
      v = 'function' == typeof Symbol && Symbol.iterator;
    function y(e) {
      for (
        var t = arguments.length - 1,
          n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
      !(function(e, t, n, r, a, o, i, l) {
        if (!e) {
          if (((e = void 0), void 0 === t))
            e = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var u = [n, r, a, o, i, l],
              c = 0;
            (e = Error(
              t.replace(/%s/g, function() {
                return u[c++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((e.framesToPop = 1), e);
        }
      })(
        !1,
        'Minified React error #' +
          e +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        n,
      );
    }
    var b = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {},
      },
      _ = {};
    function x(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || b);
    }
    function w() {}
    function E(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || b);
    }
    (x.prototype.isReactComponent = {}),
      (x.prototype.setState = function(e, t) {
        'object' != typeof e && 'function' != typeof e && null != e && y('85'),
          this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (x.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (w.prototype = x.prototype);
    var k = (E.prototype = new w());
    (k.constructor = E), r(k, x.prototype), (k.isPureReactComponent = !0);
    var T = {current: null},
      C = {current: null},
      S = Object.prototype.hasOwnProperty,
      P = {key: !0, ref: !0, __self: !0, __source: !0};
    function L(e, t, n) {
      var r = void 0,
        a = {},
        i = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (i = '' + t.key),
        t))
          S.call(t, r) && !P.hasOwnProperty(r) && (a[r] = t[r]);
      var u = arguments.length - 2;
      if (1 === u) a.children = n;
      else if (1 < u) {
        for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
        a.children = c;
      }
      if (e && e.defaultProps)
        for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
      return {
        $$typeof: o,
        type: e,
        key: i,
        ref: l,
        props: a,
        _owner: C.current,
      };
    }
    function O(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var M = /\/+/g,
      N = [];
    function D(e, t, n, r) {
      if (N.length) {
        var a = N.pop();
        return (
          (a.result = e),
          (a.keyPrefix = t),
          (a.func = n),
          (a.context = r),
          (a.count = 0),
          a
        );
      }
      return {result: e, keyPrefix: t, func: n, context: r, count: 0};
    }
    function U(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > N.length && N.push(e);
    }
    function R(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, a) {
            var l = typeof t;
            ('undefined' !== l && 'boolean' !== l) || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else
              switch (l) {
                case 'string':
                case 'number':
                  u = !0;
                  break;
                case 'object':
                  switch (t.$$typeof) {
                    case o:
                    case i:
                      u = !0;
                  }
              }
            if (u) return r(a, t, '' === n ? '.' + j(t, 0) : n), 1;
            if (((u = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(t)))
              for (var c = 0; c < t.length; c++) {
                var s = n + j((l = t[c]), c);
                u += e(l, s, r, a);
              }
            else if (
              ((s =
                null === t || 'object' != typeof t
                  ? null
                  : 'function' == typeof (s = (v && t[v]) || t['@@iterator'])
                  ? s
                  : null),
              'function' == typeof s)
            )
              for (t = s.call(t), c = 0; !(l = t.next()).done; )
                u += e((l = l.value), (s = n + j(l, c++)), r, a);
            else
              'object' === l &&
                y(
                  '31',
                  '[object Object]' == (r = '' + t)
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : r,
                  '',
                );
            return u;
          })(e, '', t, n);
    }
    function j(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = {'=': '=0', ':': '=2'};
            return (
              '$' +
              ('' + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function A(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function I(e, t, n) {
      var r = e.result,
        a = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? z(e, r, n, function(e) {
              return e;
            })
          : null != e &&
            (O(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: o,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                e,
                a +
                  (!e.key || (t && t.key === e.key)
                    ? ''
                    : ('' + e.key).replace(M, '$&/') + '/') +
                  n,
              )),
            r.push(e));
    }
    function z(e, t, n, r, a) {
      var o = '';
      null != n && (o = ('' + n).replace(M, '$&/') + '/'),
        R(e, I, (t = D(t, o, r, a))),
        U(t);
    }
    function H() {
      var e = T.current;
      return null === e && y('321'), e;
    }
    var W = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e;
            var r = [];
            return z(e, r, null, t, n), r;
          },
          forEach: function(e, t, n) {
            if (null == e) return e;
            R(e, A, (t = D(null, null, t, n))), U(t);
          },
          count: function(e) {
            return R(
              e,
              function() {
                return null;
              },
              null,
            );
          },
          toArray: function(e) {
            var t = [];
            return (
              z(e, t, null, function(e) {
                return e;
              }),
              t
            );
          },
          only: function(e) {
            return O(e) || y('143'), e;
          },
        },
        createRef: function() {
          return {current: null};
        },
        Component: x,
        PureComponent: E,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: d,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = {$$typeof: s, _context: e}),
            (e.Consumer = e)
          );
        },
        forwardRef: function(e) {
          return {$$typeof: p, render: e};
        },
        lazy: function(e) {
          return {$$typeof: g, _ctor: e, _status: -1, _result: null};
        },
        memo: function(e, t) {
          return {$$typeof: h, type: e, compare: void 0 === t ? null : t};
        },
        useCallback: function(e, t) {
          return H().useCallback(e, t);
        },
        useContext: function(e, t) {
          return H().useContext(e, t);
        },
        useEffect: function(e, t) {
          return H().useEffect(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return H().useImperativeHandle(e, t, n);
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return H().useLayoutEffect(e, t);
        },
        useMemo: function(e, t) {
          return H().useMemo(e, t);
        },
        useReducer: function(e, t, n) {
          return H().useReducer(e, t, n);
        },
        useRef: function(e) {
          return H().useRef(e);
        },
        useState: function(e) {
          return H().useState(e);
        },
        Fragment: l,
        StrictMode: u,
        Suspense: m,
        createElement: L,
        cloneElement: function(e, t, n) {
          null == e && y('267', e);
          var a = void 0,
            i = r({}, e.props),
            l = e.key,
            u = e.ref,
            c = e._owner;
          if (null != t) {
            void 0 !== t.ref && ((u = t.ref), (c = C.current)),
              void 0 !== t.key && (l = '' + t.key);
            var s = void 0;
            for (a in (e.type &&
              e.type.defaultProps &&
              (s = e.type.defaultProps),
            t))
              S.call(t, a) &&
                !P.hasOwnProperty(a) &&
                (i[a] = void 0 === t[a] && void 0 !== s ? s[a] : t[a]);
          }
          if (1 === (a = arguments.length - 2)) i.children = n;
          else if (1 < a) {
            s = Array(a);
            for (var d = 0; d < a; d++) s[d] = arguments[d + 2];
            i.children = s;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: l,
            ref: u,
            props: i,
            _owner: c,
          };
        },
        createFactory: function(e) {
          var t = L.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: O,
        version: '16.8.6',
        unstable_ConcurrentMode: f,
        unstable_Profiler: c,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: T,
          ReactCurrentOwner: C,
          assign: r,
        },
      },
      F = {default: W},
      V = (F && W) || F;
    e.exports = V.default || V;
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      a = n.n(r),
      o = n(11),
      i = n(12),
      l = n(2);
    'undefined' != typeof reactHotLoaderGlobal &&
      reactHotLoaderGlobal.default.signature;
    Object(o.render)(
      a.a.createElement(l.b, null, a.a.createElement(i.a, null)),
      document.getElementById('root'),
    );
  },
  function(e, t, n) {
    'use strict';
    /** @license React v16.8.6
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(0),
      a = n(9),
      o = n(28);
    function i(e) {
      for (
        var t = arguments.length - 1,
          n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          r = 0;
        r < t;
        r++
      )
        n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
      !(function(e, t, n, r, a, o, i, l) {
        if (!e) {
          if (((e = void 0), void 0 === t))
            e = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var u = [n, r, a, o, i, l],
              c = 0;
            (e = Error(
              t.replace(/%s/g, function() {
                return u[c++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((e.framesToPop = 1), e);
        }
      })(
        !1,
        'Minified React error #' +
          e +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        n,
      );
    }
    r || i('227');
    var l = !1,
      u = null,
      c = !1,
      s = null,
      d = {
        onError: function(e) {
          (l = !0), (u = e);
        },
      };
    function f(e, t, n, r, a, o, i, c, s) {
      (l = !1),
        (u = null),
        function(e, t, n, r, a, o, i, l, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }.apply(d, arguments);
    }
    var p = null,
      m = {};
    function h() {
      if (p)
        for (var e in m) {
          var t = m[e],
            n = p.indexOf(e);
          if ((-1 < n || i('96', e), !v[n]))
            for (var r in (t.extractEvents || i('97', e),
            (v[n] = t),
            (n = t.eventTypes))) {
              var a = void 0,
                o = n[r],
                l = t,
                u = r;
              y.hasOwnProperty(u) && i('99', u), (y[u] = o);
              var c = o.phasedRegistrationNames;
              if (c) {
                for (a in c) c.hasOwnProperty(a) && g(c[a], l, u);
                a = !0;
              } else
                o.registrationName
                  ? (g(o.registrationName, l, u), (a = !0))
                  : (a = !1);
              a || i('98', r, e);
            }
        }
    }
    function g(e, t, n) {
      b[e] && i('100', e), (b[e] = t), (_[e] = t.eventTypes[n].dependencies);
    }
    var v = [],
      y = {},
      b = {},
      _ = {},
      x = null,
      w = null,
      E = null;
    function k(e, t, n) {
      var r = e.type || 'unknown-event';
      (e.currentTarget = E(n)),
        (function(e, t, n, r, a, o, d, p, m) {
          if ((f.apply(this, arguments), l)) {
            if (l) {
              var h = u;
              (l = !1), (u = null);
            } else i('198'), (h = void 0);
            c || ((c = !0), (s = h));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function T(e, t) {
      return (
        null == t && i('30'),
        null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t]
      );
    }
    function C(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var S = null;
    function P(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            k(e, t[r], n[r]);
        else t && k(e, t, n);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    var L = {
      injectEventPluginOrder: function(e) {
        p && i('101'), (p = Array.prototype.slice.call(e)), h();
      },
      injectEventPluginsByName: function(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            (m.hasOwnProperty(t) && m[t] === r) ||
              (m[t] && i('102', t), (m[t] = r), (n = !0));
          }
        n && h();
      },
    };
    function O(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = x(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
          (r = !r.disabled) ||
            (r = !(
              'button' === (e = e.type) ||
              'input' === e ||
              'select' === e ||
              'textarea' === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      return e
        ? null
        : (n && 'function' != typeof n && i('231', t, typeof n), n);
    }
    function M(e) {
      if (
        (null !== e && (S = T(S, e)),
        (e = S),
        (S = null),
        e && (C(e, P), S && i('95'), c))
      )
        throw ((e = s), (c = !1), (s = null), e);
    }
    var N = Math.random()
        .toString(36)
        .slice(2),
      D = '__reactInternalInstance$' + N,
      U = '__reactEventHandlers$' + N;
    function R(e) {
      if (e[D]) return e[D];
      for (; !e[D]; ) {
        if (!e.parentNode) return null;
        e = e.parentNode;
      }
      return 5 === (e = e[D]).tag || 6 === e.tag ? e : null;
    }
    function j(e) {
      return !(e = e[D]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
    }
    function A(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      i('33');
    }
    function I(e) {
      return e[U] || null;
    }
    function z(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function H(e, t, n) {
      (t = O(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = T(n._dispatchListeners, t)),
        (n._dispatchInstances = T(n._dispatchInstances, e)));
    }
    function W(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = z(t));
        for (t = n.length; 0 < t--; ) H(n[t], 'captured', e);
        for (t = 0; t < n.length; t++) H(n[t], 'bubbled', e);
      }
    }
    function F(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = O(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = T(n._dispatchListeners, t)),
        (n._dispatchInstances = T(n._dispatchInstances, e)));
    }
    function V(e) {
      e && e.dispatchConfig.registrationName && F(e._targetInst, null, e);
    }
    function B(e) {
      C(e, W);
    }
    var G = !(
      'undefined' == typeof window ||
      !window.document ||
      !window.document.createElement
    );
    function K(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
      );
    }
    var q = {
        animationend: K('Animation', 'AnimationEnd'),
        animationiteration: K('Animation', 'AnimationIteration'),
        animationstart: K('Animation', 'AnimationStart'),
        transitionend: K('Transition', 'TransitionEnd'),
      },
      $ = {},
      Q = {};
    function Z(e) {
      if ($[e]) return $[e];
      if (!q[e]) return e;
      var t,
        n = q[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Q) return ($[e] = n[t]);
      return e;
    }
    G &&
      ((Q = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete q.animationend.animation,
        delete q.animationiteration.animation,
        delete q.animationstart.animation),
      'TransitionEvent' in window || delete q.transitionend.transition);
    var Y = Z('animationend'),
      X = Z('animationiteration'),
      J = Z('animationstart'),
      ee = Z('transitionend'),
      te = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
      ne = null,
      re = null,
      ae = null;
    function oe() {
      if (ae) return ae;
      var e,
        t,
        n = re,
        r = n.length,
        a = 'value' in ne ? ne.value : ne.textContent,
        o = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var i = r - e;
      for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
      return (ae = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    function ie() {
      return !0;
    }
    function le() {
      return !1;
    }
    function ue(e, t, n, r) {
      for (var a in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(a) &&
          ((t = e[a])
            ? (this[a] = t(n))
            : 'target' === a
            ? (this.target = r)
            : (this[a] = n[a]));
      return (
        (this.isDefaultPrevented = (null != n.defaultPrevented
        ? n.defaultPrevented
        : !1 === n.returnValue)
          ? ie
          : le),
        (this.isPropagationStopped = le),
        this
      );
    }
    function ce(e, t, n, r) {
      if (this.eventPool.length) {
        var a = this.eventPool.pop();
        return this.call(a, e, t, n, r), a;
      }
      return new this(e, t, n, r);
    }
    function se(e) {
      e instanceof this || i('279'),
        e.destructor(),
        10 > this.eventPool.length && this.eventPool.push(e);
    }
    function de(e) {
      (e.eventPool = []), (e.getPooled = ce), (e.release = se);
    }
    a(ue.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = ie));
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = ie));
      },
      persist: function() {
        this.isPersistent = ie;
      },
      isPersistent: le,
      destructor: function() {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = le),
          (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
      (ue.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      }),
      (ue.extend = function(e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t();
        return (
          a(o, n.prototype),
          (n.prototype = o),
          (n.prototype.constructor = n),
          (n.Interface = a({}, r.Interface, e)),
          (n.extend = r.extend),
          de(n),
          n
        );
      }),
      de(ue);
    var fe = ue.extend({data: null}),
      pe = ue.extend({data: null}),
      me = [9, 13, 27, 32],
      he = G && 'CompositionEvent' in window,
      ge = null;
    G && 'documentMode' in document && (ge = document.documentMode);
    var ve = G && 'TextEvent' in window && !ge,
      ye = G && (!he || (ge && 8 < ge && 11 >= ge)),
      be = String.fromCharCode(32),
      _e = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture',
          },
          dependencies: ['compositionend', 'keypress', 'textInput', 'paste'],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture',
          },
          dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(
            ' ',
          ),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture',
          },
          dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(
            ' ',
          ),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture',
          },
          dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(
            ' ',
          ),
        },
      },
      xe = !1;
    function we(e, t) {
      switch (e) {
        case 'keyup':
          return -1 !== me.indexOf(t.keyCode);
        case 'keydown':
          return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'blur':
          return !0;
        default:
          return !1;
      }
    }
    function Ee(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
    }
    var ke = !1;
    var Te = {
        eventTypes: _e,
        extractEvents: function(e, t, n, r) {
          var a = void 0,
            o = void 0;
          if (he)
            e: {
              switch (e) {
                case 'compositionstart':
                  a = _e.compositionStart;
                  break e;
                case 'compositionend':
                  a = _e.compositionEnd;
                  break e;
                case 'compositionupdate':
                  a = _e.compositionUpdate;
                  break e;
              }
              a = void 0;
            }
          else
            ke
              ? we(e, n) && (a = _e.compositionEnd)
              : 'keydown' === e &&
                229 === n.keyCode &&
                (a = _e.compositionStart);
          return (
            a
              ? (ye &&
                  'ko' !== n.locale &&
                  (ke || a !== _e.compositionStart
                    ? a === _e.compositionEnd && ke && (o = oe())
                    : ((re = 'value' in (ne = r) ? ne.value : ne.textContent),
                      (ke = !0))),
                (a = fe.getPooled(a, t, n, r)),
                o ? (a.data = o) : null !== (o = Ee(n)) && (a.data = o),
                B(a),
                (o = a))
              : (o = null),
            (e = ve
              ? (function(e, t) {
                  switch (e) {
                    case 'compositionend':
                      return Ee(t);
                    case 'keypress':
                      return 32 !== t.which ? null : ((xe = !0), be);
                    case 'textInput':
                      return (e = t.data) === be && xe ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function(e, t) {
                  if (ke)
                    return 'compositionend' === e || (!he && we(e, t))
                      ? ((e = oe()), (ae = re = ne = null), (ke = !1), e)
                      : null;
                  switch (e) {
                    case 'paste':
                      return null;
                    case 'keypress':
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case 'compositionend':
                      return ye && 'ko' !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = pe.getPooled(_e.beforeInput, t, n, r)).data = e), B(t))
              : (t = null),
            null === o ? t : null === t ? o : [o, t]
          );
        },
      },
      Ce = null,
      Se = null,
      Pe = null;
    function Le(e) {
      if ((e = w(e))) {
        'function' != typeof Ce && i('280');
        var t = x(e.stateNode);
        Ce(e.stateNode, e.type, t);
      }
    }
    function Oe(e) {
      Se ? (Pe ? Pe.push(e) : (Pe = [e])) : (Se = e);
    }
    function Me() {
      if (Se) {
        var e = Se,
          t = Pe;
        if (((Pe = Se = null), Le(e), t))
          for (e = 0; e < t.length; e++) Le(t[e]);
      }
    }
    function Ne(e, t) {
      return e(t);
    }
    function De(e, t, n) {
      return e(t, n);
    }
    function Ue() {}
    var Re = !1;
    function je(e, t) {
      if (Re) return e(t);
      Re = !0;
      try {
        return Ne(e, t);
      } finally {
        (Re = !1), (null !== Se || null !== Pe) && (Ue(), Me());
      }
    }
    var Ae = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
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
      week: !0,
    };
    function Ie(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return 'input' === t ? !!Ae[e.type] : 'textarea' === t;
    }
    function ze(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function He(e) {
      if (!G) return !1;
      var t = (e = 'on' + e) in document;
      return (
        t ||
          ((t = document.createElement('div')).setAttribute(e, 'return;'),
          (t = 'function' == typeof t[e])),
        t
      );
    }
    function We(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        'input' === e.toLowerCase() &&
        ('checkbox' === t || 'radio' === t)
      );
    }
    function Fe(e) {
      e._valueTracker ||
        (e._valueTracker = (function(e) {
          var t = We(e) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = '' + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            'function' == typeof n.get &&
            'function' == typeof n.set
          ) {
            var a = n.get,
              o = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                  return a.call(this);
                },
                set: function(e) {
                  (r = '' + e), o.call(this, e);
                },
              }),
              Object.defineProperty(e, t, {enumerable: n.enumerable}),
              {
                getValue: function() {
                  return r;
                },
                setValue: function(e) {
                  r = '' + e;
                },
                stopTracking: function() {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function Ve(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = '';
      return (
        e && (r = We(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    var Be = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Be.hasOwnProperty('ReactCurrentDispatcher') ||
      (Be.ReactCurrentDispatcher = {current: null});
    var Ge = /^(.*)[\\\/]/,
      Ke = 'function' == typeof Symbol && Symbol.for,
      qe = Ke ? Symbol.for('react.element') : 60103,
      $e = Ke ? Symbol.for('react.portal') : 60106,
      Qe = Ke ? Symbol.for('react.fragment') : 60107,
      Ze = Ke ? Symbol.for('react.strict_mode') : 60108,
      Ye = Ke ? Symbol.for('react.profiler') : 60114,
      Xe = Ke ? Symbol.for('react.provider') : 60109,
      Je = Ke ? Symbol.for('react.context') : 60110,
      et = Ke ? Symbol.for('react.concurrent_mode') : 60111,
      tt = Ke ? Symbol.for('react.forward_ref') : 60112,
      nt = Ke ? Symbol.for('react.suspense') : 60113,
      rt = Ke ? Symbol.for('react.memo') : 60115,
      at = Ke ? Symbol.for('react.lazy') : 60116,
      ot = 'function' == typeof Symbol && Symbol.iterator;
    function it(e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (ot && e[ot]) || e['@@iterator'])
        ? e
        : null;
    }
    function lt(e) {
      if (null == e) return null;
      if ('function' == typeof e) return e.displayName || e.name || null;
      if ('string' == typeof e) return e;
      switch (e) {
        case et:
          return 'ConcurrentMode';
        case Qe:
          return 'Fragment';
        case $e:
          return 'Portal';
        case Ye:
          return 'Profiler';
        case Ze:
          return 'StrictMode';
        case nt:
          return 'Suspense';
      }
      if ('object' == typeof e)
        switch (e.$$typeof) {
          case Je:
            return 'Context.Consumer';
          case Xe:
            return 'Context.Provider';
          case tt:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ''),
              e.displayName ||
                ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            );
          case rt:
            return lt(e.type);
          case at:
            if ((e = 1 === e._status ? e._result : null)) return lt(e);
        }
      return null;
    }
    function ut(e) {
      var t = '';
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = '';
            break e;
          default:
            var r = e._debugOwner,
              a = e._debugSource,
              o = lt(e.type);
            (n = null),
              r && (n = lt(r.type)),
              (r = o),
              (o = ''),
              a
                ? (o =
                    ' (at ' +
                    a.fileName.replace(Ge, '') +
                    ':' +
                    a.lineNumber +
                    ')')
                : n && (o = ' (created by ' + n + ')'),
              (n = '\n    in ' + (r || 'Unknown') + o);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    var ct = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      st = Object.prototype.hasOwnProperty,
      dt = {},
      ft = {};
    function pt(e, t, n, r, a) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t);
    }
    var mt = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function(e) {
        mt[e] = new pt(e, 0, !1, e, null);
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function(e) {
        var t = e[0];
        mt[t] = new pt(t, 1, !1, e[1], null);
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(
        e,
      ) {
        mt[e] = new pt(e, 2, !1, e.toLowerCase(), null);
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha',
      ].forEach(function(e) {
        mt[e] = new pt(e, 2, !1, e, null);
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function(e) {
          mt[e] = new pt(e, 3, !1, e.toLowerCase(), null);
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function(e) {
        mt[e] = new pt(e, 3, !0, e, null);
      }),
      ['capture', 'download'].forEach(function(e) {
        mt[e] = new pt(e, 4, !1, e, null);
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function(e) {
        mt[e] = new pt(e, 6, !1, e, null);
      }),
      ['rowSpan', 'start'].forEach(function(e) {
        mt[e] = new pt(e, 5, !1, e.toLowerCase(), null);
      });
    var ht = /[\-:]([a-z])/g;
    function gt(e) {
      return e[1].toUpperCase();
    }
    function vt(e, t, n, r) {
      var a = mt.hasOwnProperty(t) ? mt[t] : null;
      (null !== a
        ? 0 === a.type
        : !r &&
          (2 < t.length &&
            ('o' === t[0] || 'O' === t[0]) &&
            ('n' === t[1] || 'N' === t[1]))) ||
        ((function(e, t, n, r) {
          if (
            null == t ||
            (function(e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0;
                case 'boolean':
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                        'aria-' !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, a, r) && (n = null),
        r || null === a
          ? (function(e) {
              return (
                !!st.call(ft, e) ||
                (!st.call(dt, e) &&
                  (ct.test(e) ? (ft[e] = !0) : ((dt[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
          : a.mustUseProperty
          ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
          : ((t = a.attributeName),
            (r = a.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    function yt(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
          return e;
        default:
          return '';
      }
    }
    function bt(e, t) {
      var n = t.checked;
      return a({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function _t(e, t) {
      var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = yt(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            'checkbox' === t.type || 'radio' === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function xt(e, t) {
      null != (t = t.checked) && vt(e, 'checked', t, !1);
    }
    function wt(e, t) {
      xt(e, t);
      var n = yt(t.value),
        r = t.type;
      if (null != n)
        'number' === r
          ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
          : e.value !== '' + n && (e.value = '' + n);
      else if ('submit' === r || 'reset' === r)
        return void e.removeAttribute('value');
      t.hasOwnProperty('value')
        ? kt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && kt(e, t.type, yt(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Et(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
          !(
            ('submit' !== r && 'reset' !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = '' + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !e.defaultChecked),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
    }
    function kt(e, t, n) {
      ('number' === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function(e) {
        var t = e.replace(ht, gt);
        mt[t] = new pt(t, 1, !1, e, null);
      }),
      'xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function(e) {
          var t = e.replace(ht, gt);
          mt[t] = new pt(t, 1, !1, e, 'http://www.w3.org/1999/xlink');
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function(e) {
        var t = e.replace(ht, gt);
        mt[t] = new pt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace');
      }),
      ['tabIndex', 'crossOrigin'].forEach(function(e) {
        mt[e] = new pt(e, 1, !1, e.toLowerCase(), null);
      });
    var Tt = {
      change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture',
        },
        dependencies: 'blur change click focus input keydown keyup selectionchange'.split(
          ' ',
        ),
      },
    };
    function Ct(e, t, n) {
      return (
        ((e = ue.getPooled(Tt.change, e, t, n)).type = 'change'), Oe(n), B(e), e
      );
    }
    var St = null,
      Pt = null;
    function Lt(e) {
      M(e);
    }
    function Ot(e) {
      if (Ve(A(e))) return e;
    }
    function Mt(e, t) {
      if ('change' === e) return t;
    }
    var Nt = !1;
    function Dt() {
      St && (St.detachEvent('onpropertychange', Ut), (Pt = St = null));
    }
    function Ut(e) {
      'value' === e.propertyName && Ot(Pt) && je(Lt, (e = Ct(Pt, e, ze(e))));
    }
    function Rt(e, t, n) {
      'focus' === e
        ? (Dt(), (Pt = n), (St = t).attachEvent('onpropertychange', Ut))
        : 'blur' === e && Dt();
    }
    function jt(e) {
      if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
        return Ot(Pt);
    }
    function At(e, t) {
      if ('click' === e) return Ot(t);
    }
    function It(e, t) {
      if ('input' === e || 'change' === e) return Ot(t);
    }
    G &&
      (Nt =
        He('input') && (!document.documentMode || 9 < document.documentMode));
    var zt = {
        eventTypes: Tt,
        _isInputEventSupported: Nt,
        extractEvents: function(e, t, n, r) {
          var a = t ? A(t) : window,
            o = void 0,
            i = void 0,
            l = a.nodeName && a.nodeName.toLowerCase();
          if (
            ('select' === l || ('input' === l && 'file' === a.type)
              ? (o = Mt)
              : Ie(a)
              ? Nt
                ? (o = It)
                : ((o = jt), (i = Rt))
              : (l = a.nodeName) &&
                'input' === l.toLowerCase() &&
                ('checkbox' === a.type || 'radio' === a.type) &&
                (o = At),
            o && (o = o(e, t)))
          )
            return Ct(o, n, r);
          i && i(e, a, t),
            'blur' === e &&
              (e = a._wrapperState) &&
              e.controlled &&
              'number' === a.type &&
              kt(a, 'number', a.value);
        },
      },
      Ht = ue.extend({view: null, detail: null}),
      Wt = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
    function Ft(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Wt[e]) && !!t[e];
    }
    function Vt() {
      return Ft;
    }
    var Bt = 0,
      Gt = 0,
      Kt = !1,
      qt = !1,
      $t = Ht.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Vt,
        button: null,
        buttons: null,
        relatedTarget: function(e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
        movementX: function(e) {
          if ('movementX' in e) return e.movementX;
          var t = Bt;
          return (
            (Bt = e.screenX),
            Kt ? ('mousemove' === e.type ? e.screenX - t : 0) : ((Kt = !0), 0)
          );
        },
        movementY: function(e) {
          if ('movementY' in e) return e.movementY;
          var t = Gt;
          return (
            (Gt = e.screenY),
            qt ? ('mousemove' === e.type ? e.screenY - t : 0) : ((qt = !0), 0)
          );
        },
      }),
      Qt = $t.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null,
      }),
      Zt = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: ['mouseout', 'mouseover'],
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: ['mouseout', 'mouseover'],
        },
        pointerEnter: {
          registrationName: 'onPointerEnter',
          dependencies: ['pointerout', 'pointerover'],
        },
        pointerLeave: {
          registrationName: 'onPointerLeave',
          dependencies: ['pointerout', 'pointerover'],
        },
      },
      Yt = {
        eventTypes: Zt,
        extractEvents: function(e, t, n, r) {
          var a = 'mouseover' === e || 'pointerover' === e,
            o = 'mouseout' === e || 'pointerout' === e;
          if ((a && (n.relatedTarget || n.fromElement)) || (!o && !a))
            return null;
          if (
            ((a =
              r.window === r
                ? r
                : (a = r.ownerDocument)
                ? a.defaultView || a.parentWindow
                : window),
            o
              ? ((o = t),
                (t = (t = n.relatedTarget || n.toElement) ? R(t) : null))
              : (o = null),
            o === t)
          )
            return null;
          var i = void 0,
            l = void 0,
            u = void 0,
            c = void 0;
          'mouseout' === e || 'mouseover' === e
            ? ((i = $t),
              (l = Zt.mouseLeave),
              (u = Zt.mouseEnter),
              (c = 'mouse'))
            : ('pointerout' !== e && 'pointerover' !== e) ||
              ((i = Qt),
              (l = Zt.pointerLeave),
              (u = Zt.pointerEnter),
              (c = 'pointer'));
          var s = null == o ? a : A(o);
          if (
            ((a = null == t ? a : A(t)),
            ((e = i.getPooled(l, o, n, r)).type = c + 'leave'),
            (e.target = s),
            (e.relatedTarget = a),
            ((n = i.getPooled(u, t, n, r)).type = c + 'enter'),
            (n.target = a),
            (n.relatedTarget = s),
            (r = t),
            o && r)
          )
            e: {
              for (a = r, c = 0, i = t = o; i; i = z(i)) c++;
              for (i = 0, u = a; u; u = z(u)) i++;
              for (; 0 < c - i; ) (t = z(t)), c--;
              for (; 0 < i - c; ) (a = z(a)), i--;
              for (; c--; ) {
                if (t === a || t === a.alternate) break e;
                (t = z(t)), (a = z(a));
              }
              t = null;
            }
          else t = null;
          for (
            a = t, t = [];
            o && o !== a && (null === (c = o.alternate) || c !== a);

          )
            t.push(o), (o = z(o));
          for (
            o = [];
            r && r !== a && (null === (c = r.alternate) || c !== a);

          )
            o.push(r), (r = z(r));
          for (r = 0; r < t.length; r++) F(t[r], 'bubbled', e);
          for (r = o.length; 0 < r--; ) F(o[r], 'captured', n);
          return [e, n];
        },
      };
    function Xt(e, t) {
      return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
    }
    var Jt = Object.prototype.hasOwnProperty;
    function en(e, t) {
      if (Xt(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Jt.call(t, n[r]) || !Xt(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    function tn(e) {
      var t = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        if (0 != (2 & t.effectTag)) return 1;
        for (; t.return; ) if (0 != (2 & (t = t.return).effectTag)) return 1;
      }
      return 3 === t.tag ? 2 : 3;
    }
    function nn(e) {
      2 !== tn(e) && i('188');
    }
    function rn(e) {
      if (
        !(e = (function(e) {
          var t = e.alternate;
          if (!t) return 3 === (t = tn(e)) && i('188'), 1 === t ? null : e;
          for (var n = e, r = t; ; ) {
            var a = n.return,
              o = a ? a.alternate : null;
            if (!a || !o) break;
            if (a.child === o.child) {
              for (var l = a.child; l; ) {
                if (l === n) return nn(a), e;
                if (l === r) return nn(a), t;
                l = l.sibling;
              }
              i('188');
            }
            if (n.return !== r.return) (n = a), (r = o);
            else {
              l = !1;
              for (var u = a.child; u; ) {
                if (u === n) {
                  (l = !0), (n = a), (r = o);
                  break;
                }
                if (u === r) {
                  (l = !0), (r = a), (n = o);
                  break;
                }
                u = u.sibling;
              }
              if (!l) {
                for (u = o.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = o), (r = a);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = o), (n = a);
                    break;
                  }
                  u = u.sibling;
                }
                l || i('189');
              }
            }
            n.alternate !== r && i('190');
          }
          return 3 !== n.tag && i('188'), n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    var an = ue.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      on = ue.extend({
        clipboardData: function(e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
      }),
      ln = Ht.extend({relatedTarget: null});
    function un(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var cn = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      sn = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      dn = Ht.extend({
        key: function(e) {
          if (e.key) {
            var t = cn[e.key] || e.key;
            if ('Unidentified' !== t) return t;
          }
          return 'keypress' === e.type
            ? 13 === (e = un(e))
              ? 'Enter'
              : String.fromCharCode(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? sn[e.keyCode] || 'Unidentified'
            : '';
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Vt,
        charCode: function(e) {
          return 'keypress' === e.type ? un(e) : 0;
        },
        keyCode: function(e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function(e) {
          return 'keypress' === e.type
            ? un(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? e.keyCode
            : 0;
        },
      }),
      fn = $t.extend({dataTransfer: null}),
      pn = Ht.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Vt,
      }),
      mn = ue.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      hn = $t.extend({
        deltaX: function(e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function(e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      }),
      gn = [
        ['abort', 'abort'],
        [Y, 'animationEnd'],
        [X, 'animationIteration'],
        [J, 'animationStart'],
        ['canplay', 'canPlay'],
        ['canplaythrough', 'canPlayThrough'],
        ['drag', 'drag'],
        ['dragenter', 'dragEnter'],
        ['dragexit', 'dragExit'],
        ['dragleave', 'dragLeave'],
        ['dragover', 'dragOver'],
        ['durationchange', 'durationChange'],
        ['emptied', 'emptied'],
        ['encrypted', 'encrypted'],
        ['ended', 'ended'],
        ['error', 'error'],
        ['gotpointercapture', 'gotPointerCapture'],
        ['load', 'load'],
        ['loadeddata', 'loadedData'],
        ['loadedmetadata', 'loadedMetadata'],
        ['loadstart', 'loadStart'],
        ['lostpointercapture', 'lostPointerCapture'],
        ['mousemove', 'mouseMove'],
        ['mouseout', 'mouseOut'],
        ['mouseover', 'mouseOver'],
        ['playing', 'playing'],
        ['pointermove', 'pointerMove'],
        ['pointerout', 'pointerOut'],
        ['pointerover', 'pointerOver'],
        ['progress', 'progress'],
        ['scroll', 'scroll'],
        ['seeking', 'seeking'],
        ['stalled', 'stalled'],
        ['suspend', 'suspend'],
        ['timeupdate', 'timeUpdate'],
        ['toggle', 'toggle'],
        ['touchmove', 'touchMove'],
        [ee, 'transitionEnd'],
        ['waiting', 'waiting'],
        ['wheel', 'wheel'],
      ],
      vn = {},
      yn = {};
    function bn(e, t) {
      var n = e[0],
        r = 'on' + ((e = e[1])[0].toUpperCase() + e.slice(1));
      (t = {
        phasedRegistrationNames: {bubbled: r, captured: r + 'Capture'},
        dependencies: [n],
        isInteractive: t,
      }),
        (vn[e] = t),
        (yn[n] = t);
    }
    [
      ['blur', 'blur'],
      ['cancel', 'cancel'],
      ['click', 'click'],
      ['close', 'close'],
      ['contextmenu', 'contextMenu'],
      ['copy', 'copy'],
      ['cut', 'cut'],
      ['auxclick', 'auxClick'],
      ['dblclick', 'doubleClick'],
      ['dragend', 'dragEnd'],
      ['dragstart', 'dragStart'],
      ['drop', 'drop'],
      ['focus', 'focus'],
      ['input', 'input'],
      ['invalid', 'invalid'],
      ['keydown', 'keyDown'],
      ['keypress', 'keyPress'],
      ['keyup', 'keyUp'],
      ['mousedown', 'mouseDown'],
      ['mouseup', 'mouseUp'],
      ['paste', 'paste'],
      ['pause', 'pause'],
      ['play', 'play'],
      ['pointercancel', 'pointerCancel'],
      ['pointerdown', 'pointerDown'],
      ['pointerup', 'pointerUp'],
      ['ratechange', 'rateChange'],
      ['reset', 'reset'],
      ['seeked', 'seeked'],
      ['submit', 'submit'],
      ['touchcancel', 'touchCancel'],
      ['touchend', 'touchEnd'],
      ['touchstart', 'touchStart'],
      ['volumechange', 'volumeChange'],
    ].forEach(function(e) {
      bn(e, !0);
    }),
      gn.forEach(function(e) {
        bn(e, !1);
      });
    var _n = {
        eventTypes: vn,
        isInteractiveTopLevelEventType: function(e) {
          return void 0 !== (e = yn[e]) && !0 === e.isInteractive;
        },
        extractEvents: function(e, t, n, r) {
          var a = yn[e];
          if (!a) return null;
          switch (e) {
            case 'keypress':
              if (0 === un(n)) return null;
            case 'keydown':
            case 'keyup':
              e = dn;
              break;
            case 'blur':
            case 'focus':
              e = ln;
              break;
            case 'click':
              if (2 === n.button) return null;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              e = $t;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              e = fn;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              e = pn;
              break;
            case Y:
            case X:
            case J:
              e = an;
              break;
            case ee:
              e = mn;
              break;
            case 'scroll':
              e = Ht;
              break;
            case 'wheel':
              e = hn;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              e = on;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              e = Qt;
              break;
            default:
              e = ue;
          }
          return B((t = e.getPooled(a, t, n, r))), t;
        },
      },
      xn = _n.isInteractiveTopLevelEventType,
      wn = [];
    function En(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r;
        for (r = n; r.return; ) r = r.return;
        if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
        e.ancestors.push(n), (n = R(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var a = ze(e.nativeEvent);
        r = e.topLevelType;
        for (var o = e.nativeEvent, i = null, l = 0; l < v.length; l++) {
          var u = v[l];
          u && (u = u.extractEvents(r, t, o, a)) && (i = T(i, u));
        }
        M(i);
      }
    }
    var kn = !0;
    function Tn(e, t) {
      if (!t) return null;
      var n = (xn(e) ? Sn : Pn).bind(null, e);
      t.addEventListener(e, n, !1);
    }
    function Cn(e, t) {
      if (!t) return null;
      var n = (xn(e) ? Sn : Pn).bind(null, e);
      t.addEventListener(e, n, !0);
    }
    function Sn(e, t) {
      De(Pn, e, t);
    }
    function Pn(e, t) {
      if (kn) {
        var n = ze(t);
        if (
          (null === (n = R(n)) ||
            'number' != typeof n.tag ||
            2 === tn(n) ||
            (n = null),
          wn.length)
        ) {
          var r = wn.pop();
          (r.topLevelType = e),
            (r.nativeEvent = t),
            (r.targetInst = n),
            (e = r);
        } else
          e = {topLevelType: e, nativeEvent: t, targetInst: n, ancestors: []};
        try {
          je(En, e);
        } finally {
          (e.topLevelType = null),
            (e.nativeEvent = null),
            (e.targetInst = null),
            (e.ancestors.length = 0),
            10 > wn.length && wn.push(e);
        }
      }
    }
    var Ln = {},
      On = 0,
      Mn = '_reactListenersID' + ('' + Math.random()).slice(2);
    function Nn(e) {
      return (
        Object.prototype.hasOwnProperty.call(e, Mn) ||
          ((e[Mn] = On++), (Ln[e[Mn]] = {})),
        Ln[e[Mn]]
      );
    }
    function Dn(e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function Un(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Rn(e, t) {
      var n,
        r = Un(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return {node: r, offset: t - e};
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Un(r);
      }
    }
    function jn() {
      for (var e = window, t = Dn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = Dn((e = t.contentWindow).document);
      }
      return t;
    }
    function An(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (('input' === t &&
          ('text' === e.type ||
            'search' === e.type ||
            'tel' === e.type ||
            'url' === e.type ||
            'password' === e.type)) ||
          'textarea' === t ||
          'true' === e.contentEditable)
      );
    }
    function In(e) {
      var t = jn(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        (function e(t, n) {
          return (
            !(!t || !n) &&
            (t === n ||
              ((!t || 3 !== t.nodeType) &&
                (n && 3 === n.nodeType
                  ? e(t, n.parentNode)
                  : 'contains' in t
                  ? t.contains(n)
                  : !!t.compareDocumentPosition &&
                    !!(16 & t.compareDocumentPosition(n)))))
          );
        })(n.ownerDocument.documentElement, n)
      ) {
        if (null !== r && An(n))
          if (
            ((t = r.start),
            void 0 === (e = r.end) && (e = t),
            'selectionStart' in n)
          )
            (n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length));
          else if (
            (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
              .getSelection
          ) {
            e = e.getSelection();
            var a = n.textContent.length,
              o = Math.min(r.start, a);
            (r = void 0 === r.end ? o : Math.min(r.end, a)),
              !e.extend && o > r && ((a = r), (r = o), (o = a)),
              (a = Rn(n, o));
            var i = Rn(n, r);
            a &&
              i &&
              (1 !== e.rangeCount ||
                e.anchorNode !== a.node ||
                e.anchorOffset !== a.offset ||
                e.focusNode !== i.node ||
                e.focusOffset !== i.offset) &&
              ((t = t.createRange()).setStart(a.node, a.offset),
              e.removeAllRanges(),
              o > r
                ? (e.addRange(t), e.extend(i.node, i.offset))
                : (t.setEnd(i.node, i.offset), e.addRange(t)));
          }
        for (t = [], e = n; (e = e.parentNode); )
          1 === e.nodeType &&
            t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
        for (
          'function' == typeof n.focus && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]).element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var zn = G && 'documentMode' in document && 11 >= document.documentMode,
      Hn = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture',
          },
          dependencies: 'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
            ' ',
          ),
        },
      },
      Wn = null,
      Fn = null,
      Vn = null,
      Bn = !1;
    function Gn(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return Bn || null == Wn || Wn !== Dn(n)
        ? null
        : ('selectionStart' in (n = Wn) && An(n)
            ? (n = {start: n.selectionStart, end: n.selectionEnd})
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset,
              }),
          Vn && en(Vn, n)
            ? null
            : ((Vn = n),
              ((e = ue.getPooled(Hn.select, Fn, e, t)).type = 'select'),
              (e.target = Wn),
              B(e),
              e));
    }
    var Kn = {
      eventTypes: Hn,
      extractEvents: function(e, t, n, r) {
        var a,
          o =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
        if (!(a = !o)) {
          e: {
            (o = Nn(o)), (a = _.onSelect);
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              if (!o.hasOwnProperty(l) || !o[l]) {
                o = !1;
                break e;
              }
            }
            o = !0;
          }
          a = !o;
        }
        if (a) return null;
        switch (((o = t ? A(t) : window), e)) {
          case 'focus':
            (Ie(o) || 'true' === o.contentEditable) &&
              ((Wn = o), (Fn = t), (Vn = null));
            break;
          case 'blur':
            Vn = Fn = Wn = null;
            break;
          case 'mousedown':
            Bn = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            return (Bn = !1), Gn(n, r);
          case 'selectionchange':
            if (zn) break;
          case 'keydown':
          case 'keyup':
            return Gn(n, r);
        }
        return null;
      },
    };
    function qn(e, t) {
      return (
        (e = a({children: void 0}, t)),
        (t = (function(e) {
          var t = '';
          return (
            r.Children.forEach(e, function(e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function $n(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (n = '' + yt(n), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === n)
            return (
              (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
            );
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Qn(e, t) {
      return (
        null != t.dangerouslySetInnerHTML && i('91'),
        a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: '' + e._wrapperState.initialValue,
        })
      );
    }
    function Zn(e, t) {
      var n = t.value;
      null == n &&
        ((n = t.defaultValue),
        null != (t = t.children) &&
          (null != n && i('92'),
          Array.isArray(t) && (1 >= t.length || i('93'), (t = t[0])),
          (n = t)),
        null == n && (n = '')),
        (e._wrapperState = {initialValue: yt(n)});
    }
    function Yn(e, t) {
      var n = yt(t.value),
        r = yt(t.defaultValue);
      null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
    }
    function Xn(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && (e.value = t);
    }
    L.injectEventPluginOrder(
      'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
        ' ',
      ),
    ),
      (x = I),
      (w = j),
      (E = A),
      L.injectEventPluginsByName({
        SimpleEventPlugin: _n,
        EnterLeaveEventPlugin: Yt,
        ChangeEventPlugin: zt,
        SelectEventPlugin: Kn,
        BeforeInputEventPlugin: Te,
      });
    var Jn = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg',
    };
    function er(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    function tr(e, t) {
      return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? er(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
        ? 'http://www.w3.org/1999/xhtml'
        : e;
    }
    var nr,
      rr = void 0,
      ar = ((nr = function(e, t) {
        if (e.namespaceURI !== Jn.svg || 'innerHTML' in e) e.innerHTML = t;
        else {
          for (
            (rr = rr || document.createElement('div')).innerHTML =
              '<svg>' + t + '</svg>',
              t = rr.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function(e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function() {
              return nr(e, t);
            });
          }
        : nr);
    function or(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    var ir = {
        animationIterationCount: !0,
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
        strokeWidth: !0,
      },
      lr = ['Webkit', 'ms', 'Moz', 'O'];
    function ur(e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n ||
          'number' != typeof t ||
          0 === t ||
          (ir.hasOwnProperty(e) && ir[e])
        ? ('' + t).trim()
        : t + 'px';
    }
    function cr(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf('--'),
            a = ur(n, t[n], r);
          'float' === n && (n = 'cssFloat'),
            r ? e.setProperty(n, a) : (e[n] = a);
        }
    }
    Object.keys(ir).forEach(function(e) {
      lr.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ir[t] = ir[e]);
      });
    });
    var sr = a(
      {menuitem: !0},
      {
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
        wbr: !0,
      },
    );
    function dr(e, t) {
      t &&
        (sr[e] &&
          (null != t.children || null != t.dangerouslySetInnerHTML) &&
          i('137', e, ''),
        null != t.dangerouslySetInnerHTML &&
          (null != t.children && i('60'),
          ('object' == typeof t.dangerouslySetInnerHTML &&
            '__html' in t.dangerouslySetInnerHTML) ||
            i('61')),
        null != t.style && 'object' != typeof t.style && i('62', ''));
    }
    function fr(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    function pr(e, t) {
      var n = Nn(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument),
      );
      t = _[t];
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        if (!n.hasOwnProperty(a) || !n[a]) {
          switch (a) {
            case 'scroll':
              Cn('scroll', e);
              break;
            case 'focus':
            case 'blur':
              Cn('focus', e), Cn('blur', e), (n.blur = !0), (n.focus = !0);
              break;
            case 'cancel':
            case 'close':
              He(a) && Cn(a, e);
              break;
            case 'invalid':
            case 'submit':
            case 'reset':
              break;
            default:
              -1 === te.indexOf(a) && Tn(a, e);
          }
          n[a] = !0;
        }
      }
    }
    function mr() {}
    var hr = null,
      gr = null;
    function vr(e, t) {
      switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!t.autoFocus;
      }
      return !1;
    }
    function yr(e, t) {
      return (
        'textarea' === e ||
        'option' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var br = 'function' == typeof setTimeout ? setTimeout : void 0,
      _r = 'function' == typeof clearTimeout ? clearTimeout : void 0,
      xr = o.unstable_scheduleCallback,
      wr = o.unstable_cancelCallback;
    function Er(e) {
      for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; )
        e = e.nextSibling;
      return e;
    }
    function kr(e) {
      for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; )
        e = e.nextSibling;
      return e;
    }
    new Set();
    var Tr = [],
      Cr = -1;
    function Sr(e) {
      0 > Cr || ((e.current = Tr[Cr]), (Tr[Cr] = null), Cr--);
    }
    function Pr(e, t) {
      (Tr[++Cr] = e.current), (e.current = t);
    }
    var Lr = {},
      Or = {current: Lr},
      Mr = {current: !1},
      Nr = Lr;
    function Dr(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Lr;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        o = {};
      for (a in n) o[a] = t[a];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function Ur(e) {
      return null != (e = e.childContextTypes);
    }
    function Rr(e) {
      Sr(Mr), Sr(Or);
    }
    function jr(e) {
      Sr(Mr), Sr(Or);
    }
    function Ar(e, t, n) {
      Or.current !== Lr && i('168'), Pr(Or, t), Pr(Mr, n);
    }
    function Ir(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), 'function' != typeof r.getChildContext))
        return n;
      for (var o in (r = r.getChildContext()))
        o in e || i('108', lt(t) || 'Unknown', o);
      return a({}, n, r);
    }
    function zr(e) {
      var t = e.stateNode;
      return (
        (t = (t && t.__reactInternalMemoizedMergedChildContext) || Lr),
        (Nr = Or.current),
        Pr(Or, t),
        Pr(Mr, Mr.current),
        !0
      );
    }
    function Hr(e, t, n) {
      var r = e.stateNode;
      r || i('169'),
        n
          ? ((t = Ir(e, t, Nr)),
            (r.__reactInternalMemoizedMergedChildContext = t),
            Sr(Mr),
            Sr(Or),
            Pr(Or, t))
          : Sr(Mr),
        Pr(Mr, n);
    }
    var Wr = null,
      Fr = null;
    function Vr(e) {
      return function(t) {
        try {
          return e(t);
        } catch (e) {}
      };
    }
    function Br(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function Gr(e, t, n, r) {
      return new Br(e, t, n, r);
    }
    function Kr(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function qr(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Gr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (n.contextDependencies = e.contextDependencies),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function $r(e, t, n, r, a, o) {
      var l = 2;
      if (((r = e), 'function' == typeof e)) Kr(e) && (l = 1);
      else if ('string' == typeof e) l = 5;
      else
        e: switch (e) {
          case Qe:
            return Qr(n.children, a, o, t);
          case et:
            return Zr(n, 3 | a, o, t);
          case Ze:
            return Zr(n, 2 | a, o, t);
          case Ye:
            return (
              ((e = Gr(12, n, t, 4 | a)).elementType = Ye),
              (e.type = Ye),
              (e.expirationTime = o),
              e
            );
          case nt:
            return (
              ((e = Gr(13, n, t, a)).elementType = nt),
              (e.type = nt),
              (e.expirationTime = o),
              e
            );
          default:
            if ('object' == typeof e && null !== e)
              switch (e.$$typeof) {
                case Xe:
                  l = 10;
                  break e;
                case Je:
                  l = 9;
                  break e;
                case tt:
                  l = 11;
                  break e;
                case rt:
                  l = 14;
                  break e;
                case at:
                  (l = 16), (r = null);
                  break e;
              }
            i('130', null == e ? e : typeof e, '');
        }
      return (
        ((t = Gr(l, n, t, a)).elementType = e),
        (t.type = r),
        (t.expirationTime = o),
        t
      );
    }
    function Qr(e, t, n, r) {
      return ((e = Gr(7, e, r, t)).expirationTime = n), e;
    }
    function Zr(e, t, n, r) {
      return (
        (e = Gr(8, e, r, t)),
        (t = 0 == (1 & t) ? Ze : et),
        (e.elementType = t),
        (e.type = t),
        (e.expirationTime = n),
        e
      );
    }
    function Yr(e, t, n) {
      return ((e = Gr(6, e, null, t)).expirationTime = n), e;
    }
    function Xr(e, t, n) {
      return (
        ((t = Gr(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t,
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Jr(e, t) {
      e.didError = !1;
      var n = e.earliestPendingTime;
      0 === n
        ? (e.earliestPendingTime = e.latestPendingTime = t)
        : n < t
        ? (e.earliestPendingTime = t)
        : e.latestPendingTime > t && (e.latestPendingTime = t),
        na(t, e);
    }
    function ea(e, t) {
      (e.didError = !1), e.latestPingedTime >= t && (e.latestPingedTime = 0);
      var n = e.earliestPendingTime,
        r = e.latestPendingTime;
      n === t
        ? (e.earliestPendingTime = r === t ? (e.latestPendingTime = 0) : r)
        : r === t && (e.latestPendingTime = n),
        (n = e.earliestSuspendedTime),
        (r = e.latestSuspendedTime),
        0 === n
          ? (e.earliestSuspendedTime = e.latestSuspendedTime = t)
          : n < t
          ? (e.earliestSuspendedTime = t)
          : r > t && (e.latestSuspendedTime = t),
        na(t, e);
    }
    function ta(e, t) {
      var n = e.earliestPendingTime;
      return n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t = e), t;
    }
    function na(e, t) {
      var n = t.earliestSuspendedTime,
        r = t.latestSuspendedTime,
        a = t.earliestPendingTime,
        o = t.latestPingedTime;
      0 === (a = 0 !== a ? a : o) && (0 === e || r < e) && (a = r),
        0 !== (e = a) && n > e && (e = n),
        (t.nextExpirationTimeToWorkOn = a),
        (t.expirationTime = e);
    }
    function ra(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = a({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var aa = new r.Component().refs;
    function oa(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
        (e.memoizedState = n),
        null !== (r = e.updateQueue) &&
          0 === e.expirationTime &&
          (r.baseState = n);
    }
    var ia = {
      isMounted: function(e) {
        return !!(e = e._reactInternalFiber) && 2 === tn(e);
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = wl(),
          a = Zo((r = Qi(r, e)));
        (a.payload = t),
          null != n && (a.callback = n),
          Vi(),
          Xo(e, a),
          Xi(e, r);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = wl(),
          a = Zo((r = Qi(r, e)));
        (a.tag = Bo),
          (a.payload = t),
          null != n && (a.callback = n),
          Vi(),
          Xo(e, a),
          Xi(e, r);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternalFiber;
        var n = wl(),
          r = Zo((n = Qi(n, e)));
        (r.tag = Go), null != t && (r.callback = t), Vi(), Xo(e, r), Xi(e, n);
      },
    };
    function la(e, t, n, r, a, o, i) {
      return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, i)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            (!en(n, r) || !en(a, o));
    }
    function ua(e, t, n) {
      var r = !1,
        a = Lr,
        o = t.contextType;
      return (
        'object' == typeof o && null !== o
          ? (o = Fo(o))
          : ((a = Ur(t) ? Nr : Or.current),
            (o = (r = null != (r = t.contextTypes)) ? Dr(e, a) : Lr)),
        (t = new t(n, o)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = ia),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function ca(e, t, n, r) {
      (e = t.state),
        'function' == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ia.enqueueReplaceState(t, t.state, null);
    }
    function sa(e, t, n, r) {
      var a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = aa);
      var o = t.contextType;
      'object' == typeof o && null !== o
        ? (a.context = Fo(o))
        : ((o = Ur(t) ? Nr : Or.current), (a.context = Dr(e, o))),
        null !== (o = e.updateQueue) &&
          (ni(e, o, n, a, r), (a.state = e.memoizedState)),
        'function' == typeof (o = t.getDerivedStateFromProps) &&
          (oa(e, t, o, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof a.getSnapshotBeforeUpdate ||
          ('function' != typeof a.UNSAFE_componentWillMount &&
            'function' != typeof a.componentWillMount) ||
          ((t = a.state),
          'function' == typeof a.componentWillMount && a.componentWillMount(),
          'function' == typeof a.UNSAFE_componentWillMount &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && ia.enqueueReplaceState(a, a.state, null),
          null !== (o = e.updateQueue) &&
            (ni(e, o, n, a, r), (a.state = e.memoizedState))),
        'function' == typeof a.componentDidMount && (e.effectTag |= 4);
    }
    var da = Array.isArray;
    function fa(e, t, n) {
      if (
        null !== (e = n.ref) &&
        'function' != typeof e &&
        'object' != typeof e
      ) {
        if (n._owner) {
          n = n._owner;
          var r = void 0;
          n && (1 !== n.tag && i('309'), (r = n.stateNode)), r || i('147', e);
          var a = '' + e;
          return null !== t &&
            null !== t.ref &&
            'function' == typeof t.ref &&
            t.ref._stringRef === a
            ? t.ref
            : (((t = function(e) {
                var t = r.refs;
                t === aa && (t = r.refs = {}),
                  null === e ? delete t[a] : (t[a] = e);
              })._stringRef = a),
              t);
        }
        'string' != typeof e && i('284'), n._owner || i('290', e);
      }
      return e;
    }
    function pa(e, t) {
      'textarea' !== e.type &&
        i(
          '31',
          '[object Object]' === Object.prototype.toString.call(t)
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : t,
          '',
        );
    }
    function ma(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t, n) {
        return ((e = qr(e, t)).index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function l(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function u(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Yr(n, e.mode, r)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function c(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = a(t, n.props)).ref = fa(e, t, n)), (r.return = e), r)
          : (((r = $r(n.type, n.key, n.props, null, e.mode, r)).ref = fa(
              e,
              t,
              n,
            )),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Xr(n, e.mode, r)).return = e), t)
          : (((t = a(t, n.children || [])).return = e), t);
      }
      function d(e, t, n, r, o) {
        return null === t || 7 !== t.tag
          ? (((t = Qr(n, e.mode, r, o)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function f(e, t, n) {
        if ('string' == typeof t || 'number' == typeof t)
          return ((t = Yr('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case qe:
              return (
                ((n = $r(t.type, t.key, t.props, null, e.mode, n)).ref = fa(
                  e,
                  null,
                  t,
                )),
                (n.return = e),
                n
              );
            case $e:
              return ((t = Xr(t, e.mode, n)).return = e), t;
          }
          if (da(t) || it(t))
            return ((t = Qr(t, e.mode, n, null)).return = e), t;
          pa(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if ('string' == typeof n || 'number' == typeof n)
          return null !== a ? null : u(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case qe:
              return n.key === a
                ? n.type === Qe
                  ? d(e, t, n.props.children, r, a)
                  : c(e, t, n, r)
                : null;
            case $e:
              return n.key === a ? s(e, t, n, r) : null;
          }
          if (da(n) || it(n)) return null !== a ? null : d(e, t, n, r, null);
          pa(e, n);
        }
        return null;
      }
      function m(e, t, n, r, a) {
        if ('string' == typeof r || 'number' == typeof r)
          return u(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case qe:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === Qe
                  ? d(t, e, r.props.children, a, r.key)
                  : c(t, e, r, a)
              );
            case $e:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a,
              );
          }
          if (da(r) || it(r)) return d(t, (e = e.get(n) || null), r, a, null);
          pa(t, r);
        }
        return null;
      }
      function h(a, i, l, u) {
        for (
          var c = null, s = null, d = i, h = (i = 0), g = null;
          null !== d && h < l.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var v = p(a, d, l[h], u);
          if (null === v) {
            null === d && (d = g);
            break;
          }
          e && d && null === v.alternate && t(a, d),
            (i = o(v, i, h)),
            null === s ? (c = v) : (s.sibling = v),
            (s = v),
            (d = g);
        }
        if (h === l.length) return n(a, d), c;
        if (null === d) {
          for (; h < l.length; h++)
            (d = f(a, l[h], u)) &&
              ((i = o(d, i, h)),
              null === s ? (c = d) : (s.sibling = d),
              (s = d));
          return c;
        }
        for (d = r(a, d); h < l.length; h++)
          (g = m(d, a, h, l[h], u)) &&
            (e && null !== g.alternate && d.delete(null === g.key ? h : g.key),
            (i = o(g, i, h)),
            null === s ? (c = g) : (s.sibling = g),
            (s = g));
        return (
          e &&
            d.forEach(function(e) {
              return t(a, e);
            }),
          c
        );
      }
      function g(a, l, u, c) {
        var s = it(u);
        'function' != typeof s && i('150'), null == (u = s.call(u)) && i('151');
        for (
          var d = (s = null), h = l, g = (l = 0), v = null, y = u.next();
          null !== h && !y.done;
          g++, y = u.next()
        ) {
          h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
          var b = p(a, h, y.value, c);
          if (null === b) {
            h || (h = v);
            break;
          }
          e && h && null === b.alternate && t(a, h),
            (l = o(b, l, g)),
            null === d ? (s = b) : (d.sibling = b),
            (d = b),
            (h = v);
        }
        if (y.done) return n(a, h), s;
        if (null === h) {
          for (; !y.done; g++, y = u.next())
            null !== (y = f(a, y.value, c)) &&
              ((l = o(y, l, g)),
              null === d ? (s = y) : (d.sibling = y),
              (d = y));
          return s;
        }
        for (h = r(a, h); !y.done; g++, y = u.next())
          null !== (y = m(h, a, g, y.value, c)) &&
            (e && null !== y.alternate && h.delete(null === y.key ? g : y.key),
            (l = o(y, l, g)),
            null === d ? (s = y) : (d.sibling = y),
            (d = y));
        return (
          e &&
            h.forEach(function(e) {
              return t(a, e);
            }),
          s
        );
      }
      return function(e, r, o, u) {
        var c =
          'object' == typeof o && null !== o && o.type === Qe && null === o.key;
        c && (o = o.props.children);
        var s = 'object' == typeof o && null !== o;
        if (s)
          switch (o.$$typeof) {
            case qe:
              e: {
                for (s = o.key, c = r; null !== c; ) {
                  if (c.key === s) {
                    if (
                      7 === c.tag ? o.type === Qe : c.elementType === o.type
                    ) {
                      n(e, c.sibling),
                        ((r = a(
                          c,
                          o.type === Qe ? o.props.children : o.props,
                        )).ref = fa(e, c, o)),
                        (r.return = e),
                        (e = r);
                      break e;
                    }
                    n(e, c);
                    break;
                  }
                  t(e, c), (c = c.sibling);
                }
                o.type === Qe
                  ? (((r = Qr(o.props.children, e.mode, u, o.key)).return = e),
                    (e = r))
                  : (((u = $r(
                      o.type,
                      o.key,
                      o.props,
                      null,
                      e.mode,
                      u,
                    )).ref = fa(e, r, o)),
                    (u.return = e),
                    (e = u));
              }
              return l(e);
            case $e:
              e: {
                for (c = o.key; null !== r; ) {
                  if (r.key === c) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = a(r, o.children || [])).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Xr(o, e.mode, u)).return = e), (e = r);
              }
              return l(e);
          }
        if ('string' == typeof o || 'number' == typeof o)
          return (
            (o = '' + o),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
              : (n(e, r), ((r = Yr(o, e.mode, u)).return = e), (e = r)),
            l(e)
          );
        if (da(o)) return h(e, r, o, u);
        if (it(o)) return g(e, r, o, u);
        if ((s && pa(e, o), void 0 === o && !c))
          switch (e.tag) {
            case 1:
            case 0:
              i('152', (u = e.type).displayName || u.name || 'Component');
          }
        return n(e, r);
      };
    }
    var ha = ma(!0),
      ga = ma(!1),
      va = {},
      ya = {current: va},
      ba = {current: va},
      _a = {current: va};
    function xa(e) {
      return e === va && i('174'), e;
    }
    function wa(e, t) {
      Pr(_a, t), Pr(ba, e), Pr(ya, va);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : tr(null, '');
          break;
        default:
          t = tr(
            (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
            (n = n.tagName),
          );
      }
      Sr(ya), Pr(ya, t);
    }
    function Ea(e) {
      Sr(ya), Sr(ba), Sr(_a);
    }
    function ka(e) {
      xa(_a.current);
      var t = xa(ya.current),
        n = tr(t, e.type);
      t !== n && (Pr(ba, e), Pr(ya, n));
    }
    function Ta(e) {
      ba.current === e && (Sr(ya), Sr(ba));
    }
    var Ca = 0,
      Sa = 2,
      Pa = 4,
      La = 8,
      Oa = 16,
      Ma = 32,
      Na = 64,
      Da = 128,
      Ua = Be.ReactCurrentDispatcher,
      Ra = 0,
      ja = null,
      Aa = null,
      Ia = null,
      za = null,
      Ha = null,
      Wa = null,
      Fa = 0,
      Va = null,
      Ba = 0,
      Ga = !1,
      Ka = null,
      qa = 0;
    function $a() {
      i('321');
    }
    function Qa(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Xt(e[n], t[n])) return !1;
      return !0;
    }
    function Za(e, t, n, r, a, o) {
      if (
        ((Ra = o),
        (ja = t),
        (Ia = null !== e ? e.memoizedState : null),
        (Ua.current = null === Ia ? co : so),
        (t = n(r, a)),
        Ga)
      ) {
        do {
          (Ga = !1),
            (qa += 1),
            (Ia = null !== e ? e.memoizedState : null),
            (Wa = za),
            (Va = Ha = Aa = null),
            (Ua.current = so),
            (t = n(r, a));
        } while (Ga);
        (Ka = null), (qa = 0);
      }
      return (
        (Ua.current = uo),
        ((e = ja).memoizedState = za),
        (e.expirationTime = Fa),
        (e.updateQueue = Va),
        (e.effectTag |= Ba),
        (e = null !== Aa && null !== Aa.next),
        (Ra = 0),
        (Wa = Ha = za = Ia = Aa = ja = null),
        (Fa = 0),
        (Va = null),
        (Ba = 0),
        e && i('300'),
        t
      );
    }
    function Ya() {
      (Ua.current = uo),
        (Ra = 0),
        (Wa = Ha = za = Ia = Aa = ja = null),
        (Fa = 0),
        (Va = null),
        (Ba = 0),
        (Ga = !1),
        (Ka = null),
        (qa = 0);
    }
    function Xa() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null,
      };
      return null === Ha ? (za = Ha = e) : (Ha = Ha.next = e), Ha;
    }
    function Ja() {
      if (null !== Wa)
        (Wa = (Ha = Wa).next), (Ia = null !== (Aa = Ia) ? Aa.next : null);
      else {
        null === Ia && i('310');
        var e = {
          memoizedState: (Aa = Ia).memoizedState,
          baseState: Aa.baseState,
          queue: Aa.queue,
          baseUpdate: Aa.baseUpdate,
          next: null,
        };
        (Ha = null === Ha ? (za = e) : (Ha.next = e)), (Ia = Aa.next);
      }
      return Ha;
    }
    function eo(e, t) {
      return 'function' == typeof t ? t(e) : t;
    }
    function to(e) {
      var t = Ja(),
        n = t.queue;
      if ((null === n && i('311'), (n.lastRenderedReducer = e), 0 < qa)) {
        var r = n.dispatch;
        if (null !== Ka) {
          var a = Ka.get(n);
          if (void 0 !== a) {
            Ka.delete(n);
            var o = t.memoizedState;
            do {
              (o = e(o, a.action)), (a = a.next);
            } while (null !== a);
            return (
              Xt(o, t.memoizedState) || (wo = !0),
              (t.memoizedState = o),
              t.baseUpdate === n.last && (t.baseState = o),
              (n.lastRenderedState = o),
              [o, r]
            );
          }
        }
        return [t.memoizedState, r];
      }
      r = n.last;
      var l = t.baseUpdate;
      if (
        ((o = t.baseState),
        null !== l
          ? (null !== r && (r.next = null), (r = l.next))
          : (r = null !== r ? r.next : null),
        null !== r)
      ) {
        var u = (a = null),
          c = r,
          s = !1;
        do {
          var d = c.expirationTime;
          d < Ra
            ? (s || ((s = !0), (u = l), (a = o)), d > Fa && (Fa = d))
            : (o = c.eagerReducer === e ? c.eagerState : e(o, c.action)),
            (l = c),
            (c = c.next);
        } while (null !== c && c !== r);
        s || ((u = l), (a = o)),
          Xt(o, t.memoizedState) || (wo = !0),
          (t.memoizedState = o),
          (t.baseUpdate = u),
          (t.baseState = a),
          (n.lastRenderedState = o);
      }
      return [t.memoizedState, n.dispatch];
    }
    function no(e, t, n, r) {
      return (
        (e = {tag: e, create: t, destroy: n, deps: r, next: null}),
        null === Va
          ? ((Va = {lastEffect: null}).lastEffect = e.next = e)
          : null === (t = Va.lastEffect)
          ? (Va.lastEffect = e.next = e)
          : ((n = t.next), (t.next = e), (e.next = n), (Va.lastEffect = e)),
        e
      );
    }
    function ro(e, t, n, r) {
      var a = Xa();
      (Ba |= e), (a.memoizedState = no(t, n, void 0, void 0 === r ? null : r));
    }
    function ao(e, t, n, r) {
      var a = Ja();
      r = void 0 === r ? null : r;
      var o = void 0;
      if (null !== Aa) {
        var i = Aa.memoizedState;
        if (((o = i.destroy), null !== r && Qa(r, i.deps)))
          return void no(Ca, n, o, r);
      }
      (Ba |= e), (a.memoizedState = no(t, n, o, r));
    }
    function oo(e, t) {
      return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function() {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function() {
            t.current = null;
          })
        : void 0;
    }
    function io() {}
    function lo(e, t, n) {
      25 > qa || i('301');
      var r = e.alternate;
      if (e === ja || (null !== r && r === ja))
        if (
          ((Ga = !0),
          (e = {
            expirationTime: Ra,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          }),
          null === Ka && (Ka = new Map()),
          void 0 === (n = Ka.get(t)))
        )
          Ka.set(t, e);
        else {
          for (t = n; null !== t.next; ) t = t.next;
          t.next = e;
        }
      else {
        Vi();
        var a = wl(),
          o = {
            expirationTime: (a = Qi(a, e)),
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          l = t.last;
        if (null === l) o.next = o;
        else {
          var u = l.next;
          null !== u && (o.next = u), (l.next = o);
        }
        if (
          ((t.last = o),
          0 === e.expirationTime &&
            (null === r || 0 === r.expirationTime) &&
            null !== (r = t.lastRenderedReducer))
        )
          try {
            var c = t.lastRenderedState,
              s = r(c, n);
            if (((o.eagerReducer = r), (o.eagerState = s), Xt(s, c))) return;
          } catch (e) {}
        Xi(e, a);
      }
    }
    var uo = {
        readContext: Fo,
        useCallback: $a,
        useContext: $a,
        useEffect: $a,
        useImperativeHandle: $a,
        useLayoutEffect: $a,
        useMemo: $a,
        useReducer: $a,
        useRef: $a,
        useState: $a,
        useDebugValue: $a,
      },
      co = {
        readContext: Fo,
        useCallback: function(e, t) {
          return (Xa().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: Fo,
        useEffect: function(e, t) {
          return ro(516, Da | Na, e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ro(4, Pa | Ma, oo.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function(e, t) {
          return ro(4, Pa | Ma, e, t);
        },
        useMemo: function(e, t) {
          var n = Xa();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function(e, t, n) {
          var r = Xa();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }).dispatch = lo.bind(null, ja, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function(e) {
          return (e = {current: e}), (Xa().memoizedState = e);
        },
        useState: function(e) {
          var t = Xa();
          return (
            'function' == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: eo,
              lastRenderedState: e,
            }).dispatch = lo.bind(null, ja, e)),
            [t.memoizedState, e]
          );
        },
        useDebugValue: io,
      },
      so = {
        readContext: Fo,
        useCallback: function(e, t) {
          var n = Ja();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Qa(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        },
        useContext: Fo,
        useEffect: function(e, t) {
          return ao(516, Da | Na, e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ao(4, Pa | Ma, oo.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function(e, t) {
          return ao(4, Pa | Ma, e, t);
        },
        useMemo: function(e, t) {
          var n = Ja();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Qa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: to,
        useRef: function() {
          return Ja().memoizedState;
        },
        useState: function(e) {
          return to(eo);
        },
        useDebugValue: io,
      },
      fo = null,
      po = null,
      mo = !1;
    function ho(e, t) {
      var n = Gr(5, null, null, 0);
      (n.elementType = 'DELETED'),
        (n.type = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (n.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function go(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function vo(e) {
      if (mo) {
        var t = po;
        if (t) {
          var n = t;
          if (!go(e, t)) {
            if (!(t = Er(n)) || !go(e, t))
              return (e.effectTag |= 2), (mo = !1), void (fo = e);
            ho(fo, n);
          }
          (fo = e), (po = kr(t));
        } else (e.effectTag |= 2), (mo = !1), (fo = e);
      }
    }
    function yo(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;

      )
        e = e.return;
      fo = e;
    }
    function bo(e) {
      if (e !== fo) return !1;
      if (!mo) return yo(e), (mo = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ('head' !== t && 'body' !== t && !yr(t, e.memoizedProps))
      )
        for (t = po; t; ) ho(e, t), (t = Er(t));
      return yo(e), (po = fo ? Er(e.stateNode) : null), !0;
    }
    function _o() {
      (po = fo = null), (mo = !1);
    }
    var xo = Be.ReactCurrentOwner,
      wo = !1;
    function Eo(e, t, n, r) {
      t.child = null === e ? ga(t, null, n, r) : ha(t, e.child, n, r);
    }
    function ko(e, t, n, r, a) {
      n = n.render;
      var o = t.ref;
      return (
        Wo(t, a),
        (r = Za(e, t, n, r, o, a)),
        null === e || wo
          ? ((t.effectTag |= 1), Eo(e, t, r, a), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= a && (e.expirationTime = 0),
            Do(e, t, a))
      );
    }
    function To(e, t, n, r, a, o) {
      if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
          Kr(i) ||
          void 0 !== i.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = $r(n.type, null, r, null, t.mode, o)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = i), Co(e, t, i, r, a, o));
      }
      return (
        (i = e.child),
        a < o &&
        ((a = i.memoizedProps),
        (n = null !== (n = n.compare) ? n : en)(a, r) && e.ref === t.ref)
          ? Do(e, t, o)
          : ((t.effectTag |= 1),
            ((e = qr(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function Co(e, t, n, r, a, o) {
      return null !== e &&
        en(e.memoizedProps, r) &&
        e.ref === t.ref &&
        ((wo = !1), a < o)
        ? Do(e, t, o)
        : Po(e, t, n, r, o);
    }
    function So(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Po(e, t, n, r, a) {
      var o = Ur(n) ? Nr : Or.current;
      return (
        (o = Dr(t, o)),
        Wo(t, a),
        (n = Za(e, t, n, r, o, a)),
        null === e || wo
          ? ((t.effectTag |= 1), Eo(e, t, n, a), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= a && (e.expirationTime = 0),
            Do(e, t, a))
      );
    }
    function Lo(e, t, n, r, a) {
      if (Ur(n)) {
        var o = !0;
        zr(t);
      } else o = !1;
      if ((Wo(t, a), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          ua(t, n, r),
          sa(t, n, r, a),
          (r = !0);
      else if (null === e) {
        var i = t.stateNode,
          l = t.memoizedProps;
        i.props = l;
        var u = i.context,
          c = n.contextType;
        'object' == typeof c && null !== c
          ? (c = Fo(c))
          : (c = Dr(t, (c = Ur(n) ? Nr : Or.current)));
        var s = n.getDerivedStateFromProps,
          d =
            'function' == typeof s ||
            'function' == typeof i.getSnapshotBeforeUpdate;
        d ||
          ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
            'function' != typeof i.componentWillReceiveProps) ||
          ((l !== r || u !== c) && ca(t, i, r, c)),
          (qo = !1);
        var f = t.memoizedState;
        u = i.state = f;
        var p = t.updateQueue;
        null !== p && (ni(t, p, r, i, a), (u = t.memoizedState)),
          l !== r || f !== u || Mr.current || qo
            ? ('function' == typeof s &&
                (oa(t, n, s, r), (u = t.memoizedState)),
              (l = qo || la(t, n, l, r, f, u, c))
                ? (d ||
                    ('function' != typeof i.UNSAFE_componentWillMount &&
                      'function' != typeof i.componentWillMount) ||
                    ('function' == typeof i.componentWillMount &&
                      i.componentWillMount(),
                    'function' == typeof i.UNSAFE_componentWillMount &&
                      i.UNSAFE_componentWillMount()),
                  'function' == typeof i.componentDidMount &&
                    (t.effectTag |= 4))
                : ('function' == typeof i.componentDidMount &&
                    (t.effectTag |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (i.props = r),
              (i.state = u),
              (i.context = c),
              (r = l))
            : ('function' == typeof i.componentDidMount && (t.effectTag |= 4),
              (r = !1));
      } else
        (i = t.stateNode),
          (l = t.memoizedProps),
          (i.props = t.type === t.elementType ? l : ra(t.type, l)),
          (u = i.context),
          'object' == typeof (c = n.contextType) && null !== c
            ? (c = Fo(c))
            : (c = Dr(t, (c = Ur(n) ? Nr : Or.current))),
          (d =
            'function' == typeof (s = n.getDerivedStateFromProps) ||
            'function' == typeof i.getSnapshotBeforeUpdate) ||
            ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
              'function' != typeof i.componentWillReceiveProps) ||
            ((l !== r || u !== c) && ca(t, i, r, c)),
          (qo = !1),
          (u = t.memoizedState),
          (f = i.state = u),
          null !== (p = t.updateQueue) &&
            (ni(t, p, r, i, a), (f = t.memoizedState)),
          l !== r || u !== f || Mr.current || qo
            ? ('function' == typeof s &&
                (oa(t, n, s, r), (f = t.memoizedState)),
              (s = qo || la(t, n, l, r, u, f, c))
                ? (d ||
                    ('function' != typeof i.UNSAFE_componentWillUpdate &&
                      'function' != typeof i.componentWillUpdate) ||
                    ('function' == typeof i.componentWillUpdate &&
                      i.componentWillUpdate(r, f, c),
                    'function' == typeof i.UNSAFE_componentWillUpdate &&
                      i.UNSAFE_componentWillUpdate(r, f, c)),
                  'function' == typeof i.componentDidUpdate &&
                    (t.effectTag |= 4),
                  'function' == typeof i.getSnapshotBeforeUpdate &&
                    (t.effectTag |= 256))
                : ('function' != typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 4),
                  'function' != typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = f)),
              (i.props = r),
              (i.state = f),
              (i.context = c),
              (r = s))
            : ('function' != typeof i.componentDidUpdate ||
                (l === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 4),
              'function' != typeof i.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1));
      return Oo(e, t, n, r, o, a);
    }
    function Oo(e, t, n, r, a, o) {
      So(e, t);
      var i = 0 != (64 & t.effectTag);
      if (!r && !i) return a && Hr(t, n, !1), Do(e, t, o);
      (r = t.stateNode), (xo.current = t);
      var l =
        i && 'function' != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.effectTag |= 1),
        null !== e && i
          ? ((t.child = ha(t, e.child, null, o)), (t.child = ha(t, null, l, o)))
          : Eo(e, t, l, o),
        (t.memoizedState = r.state),
        a && Hr(t, n, !0),
        t.child
      );
    }
    function Mo(e) {
      var t = e.stateNode;
      t.pendingContext
        ? Ar(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ar(0, t.context, !1),
        wa(e, t.containerInfo);
    }
    function No(e, t, n) {
      var r = t.mode,
        a = t.pendingProps,
        o = t.memoizedState;
      if (0 == (64 & t.effectTag)) {
        o = null;
        var i = !1;
      } else
        (o = {timedOutAt: null !== o ? o.timedOutAt : 0}),
          (i = !0),
          (t.effectTag &= -65);
      if (null === e)
        if (i) {
          var l = a.fallback;
          (e = Qr(null, r, 0, null)),
            0 == (1 & t.mode) &&
              (e.child = null !== t.memoizedState ? t.child.child : t.child),
            (r = Qr(l, r, n, null)),
            (e.sibling = r),
            ((n = e).return = r.return = t);
        } else n = r = ga(t, null, a.children, n);
      else
        null !== e.memoizedState
          ? ((l = (r = e.child).sibling),
            i
              ? ((n = a.fallback),
                (a = qr(r, r.pendingProps)),
                0 == (1 & t.mode) &&
                  ((i = null !== t.memoizedState ? t.child.child : t.child) !==
                    r.child &&
                    (a.child = i)),
                (r = a.sibling = qr(l, n, l.expirationTime)),
                (n = a),
                (a.childExpirationTime = 0),
                (n.return = r.return = t))
              : (n = r = ha(t, r.child, a.children, n)))
          : ((l = e.child),
            i
              ? ((i = a.fallback),
                ((a = Qr(null, r, 0, null)).child = l),
                0 == (1 & t.mode) &&
                  (a.child =
                    null !== t.memoizedState ? t.child.child : t.child),
                ((r = a.sibling = Qr(i, r, n, null)).effectTag |= 2),
                (n = a),
                (a.childExpirationTime = 0),
                (n.return = r.return = t))
              : (r = n = ha(t, l, a.children, n))),
          (t.stateNode = e.stateNode);
      return (t.memoizedState = o), (t.child = n), r;
    }
    function Do(e, t, n) {
      if (
        (null !== e && (t.contextDependencies = e.contextDependencies),
        t.childExpirationTime < n)
      )
        return null;
      if ((null !== e && t.child !== e.child && i('153'), null !== t.child)) {
        for (
          n = qr((e = t.child), e.pendingProps, e.expirationTime),
            t.child = n,
            n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling),
            ((n = n.sibling = qr(
              e,
              e.pendingProps,
              e.expirationTime,
            )).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Uo(e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        if (e.memoizedProps !== t.pendingProps || Mr.current) wo = !0;
        else if (r < n) {
          switch (((wo = !1), t.tag)) {
            case 3:
              Mo(t), _o();
              break;
            case 5:
              ka(t);
              break;
            case 1:
              Ur(t.type) && zr(t);
              break;
            case 4:
              wa(t, t.stateNode.containerInfo);
              break;
            case 10:
              zo(t, t.memoizedProps.value);
              break;
            case 13:
              if (null !== t.memoizedState)
                return 0 !== (r = t.child.childExpirationTime) && r >= n
                  ? No(e, t, n)
                  : null !== (t = Do(e, t, n))
                  ? t.sibling
                  : null;
          }
          return Do(e, t, n);
        }
      } else wo = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          (r = t.elementType),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps);
          var a = Dr(t, Or.current);
          if (
            (Wo(t, n),
            (a = Za(null, t, r, e, a, n)),
            (t.effectTag |= 1),
            'object' == typeof a &&
              null !== a &&
              'function' == typeof a.render &&
              void 0 === a.$$typeof)
          ) {
            if (((t.tag = 1), Ya(), Ur(r))) {
              var o = !0;
              zr(t);
            } else o = !1;
            t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null;
            var l = r.getDerivedStateFromProps;
            'function' == typeof l && oa(t, r, l, e),
              (a.updater = ia),
              (t.stateNode = a),
              (a._reactInternalFiber = t),
              sa(t, r, e, n),
              (t = Oo(null, t, r, !0, o, n));
          } else (t.tag = 0), Eo(null, t, a, n), (t = t.child);
          return t;
        case 16:
          switch (
            ((a = t.elementType),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (o = t.pendingProps),
            (e = (function(e) {
              var t = e._result;
              switch (e._status) {
                case 1:
                  return t;
                case 2:
                case 0:
                  throw t;
                default:
                  switch (
                    ((e._status = 0),
                    (t = (t = e._ctor)()).then(
                      function(t) {
                        0 === e._status &&
                          ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function(t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      },
                    ),
                    e._status)
                  ) {
                    case 1:
                      return e._result;
                    case 2:
                      throw e._result;
                  }
                  throw ((e._result = t), t);
              }
            })(a)),
            (t.type = e),
            (a = t.tag = (function(e) {
              if ('function' == typeof e) return Kr(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === tt) return 11;
                if (e === rt) return 14;
              }
              return 2;
            })(e)),
            (o = ra(e, o)),
            (l = void 0),
            a)
          ) {
            case 0:
              l = Po(null, t, e, o, n);
              break;
            case 1:
              l = Lo(null, t, e, o, n);
              break;
            case 11:
              l = ko(null, t, e, o, n);
              break;
            case 14:
              l = To(null, t, e, ra(e.type, o), r, n);
              break;
            default:
              i('306', e, '');
          }
          return l;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Po(e, t, r, (a = t.elementType === r ? a : ra(r, a)), n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Lo(e, t, r, (a = t.elementType === r ? a : ra(r, a)), n)
          );
        case 3:
          return (
            Mo(t),
            null === (r = t.updateQueue) && i('282'),
            (a = null !== (a = t.memoizedState) ? a.element : null),
            ni(t, r, t.pendingProps, null, n),
            (r = t.memoizedState.element) === a
              ? (_o(), (t = Do(e, t, n)))
              : ((a = t.stateNode),
                (a = (null === e || null === e.child) && a.hydrate) &&
                  ((po = kr(t.stateNode.containerInfo)),
                  (fo = t),
                  (a = mo = !0)),
                a
                  ? ((t.effectTag |= 2), (t.child = ga(t, null, r, n)))
                  : (Eo(e, t, r, n), _o()),
                (t = t.child)),
            t
          );
        case 5:
          return (
            ka(t),
            null === e && vo(t),
            (r = t.type),
            (a = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (l = a.children),
            yr(r, a)
              ? (l = null)
              : null !== o && yr(r, o) && (t.effectTag |= 16),
            So(e, t),
            1 !== n && 1 & t.mode && a.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : (Eo(e, t, l, n), (t = t.child)),
            t
          );
        case 6:
          return null === e && vo(t), null;
        case 13:
          return No(e, t, n);
        case 4:
          return (
            wa(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = ha(t, null, r, n)) : Eo(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            ko(e, t, r, (a = t.elementType === r ? a : ra(r, a)), n)
          );
        case 7:
          return Eo(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Eo(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (l = t.memoizedProps),
              zo(t, (o = a.value)),
              null !== l)
            ) {
              var u = l.value;
              if (
                0 ===
                (o = Xt(u, o)
                  ? 0
                  : 0 |
                    ('function' == typeof r._calculateChangedBits
                      ? r._calculateChangedBits(u, o)
                      : 1073741823))
              ) {
                if (l.children === a.children && !Mr.current) {
                  t = Do(e, t, n);
                  break e;
                }
              } else
                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                  var c = u.contextDependencies;
                  if (null !== c) {
                    l = u.child;
                    for (var s = c.first; null !== s; ) {
                      if (s.context === r && 0 != (s.observedBits & o)) {
                        1 === u.tag && (((s = Zo(n)).tag = Go), Xo(u, s)),
                          u.expirationTime < n && (u.expirationTime = n),
                          null !== (s = u.alternate) &&
                            s.expirationTime < n &&
                            (s.expirationTime = n),
                          (s = n);
                        for (var d = u.return; null !== d; ) {
                          var f = d.alternate;
                          if (d.childExpirationTime < s)
                            (d.childExpirationTime = s),
                              null !== f &&
                                f.childExpirationTime < s &&
                                (f.childExpirationTime = s);
                          else {
                            if (!(null !== f && f.childExpirationTime < s))
                              break;
                            f.childExpirationTime = s;
                          }
                          d = d.return;
                        }
                        c.expirationTime < n && (c.expirationTime = n);
                        break;
                      }
                      s = s.next;
                    }
                  } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                  if (null !== l) l.return = u;
                  else
                    for (l = u; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (u = l.sibling)) {
                        (u.return = l.return), (l = u);
                        break;
                      }
                      l = l.return;
                    }
                  u = l;
                }
            }
            Eo(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = (o = t.pendingProps).children),
            Wo(t, n),
            (r = r((a = Fo(a, o.unstable_observedBits)))),
            (t.effectTag |= 1),
            Eo(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (o = ra((a = t.type), t.pendingProps)),
            To(e, t, a, (o = ra(a.type, o)), r, n)
          );
        case 15:
          return Co(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ra(r, a)),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            Ur(r) ? ((e = !0), zr(t)) : (e = !1),
            Wo(t, n),
            ua(t, r, a),
            sa(t, r, a, n),
            Oo(null, t, r, !0, e, n)
          );
      }
      i('156');
    }
    var Ro = {current: null},
      jo = null,
      Ao = null,
      Io = null;
    function zo(e, t) {
      var n = e.type._context;
      Pr(Ro, n._currentValue), (n._currentValue = t);
    }
    function Ho(e) {
      var t = Ro.current;
      Sr(Ro), (e.type._context._currentValue = t);
    }
    function Wo(e, t) {
      (jo = e), (Io = Ao = null);
      var n = e.contextDependencies;
      null !== n && n.expirationTime >= t && (wo = !0),
        (e.contextDependencies = null);
    }
    function Fo(e, t) {
      return (
        Io !== e &&
          !1 !== t &&
          0 !== t &&
          (('number' == typeof t && 1073741823 !== t) ||
            ((Io = e), (t = 1073741823)),
          (t = {context: e, observedBits: t, next: null}),
          null === Ao
            ? (null === jo && i('308'),
              (Ao = t),
              (jo.contextDependencies = {first: t, expirationTime: 0}))
            : (Ao = Ao.next = t)),
        e._currentValue
      );
    }
    var Vo = 0,
      Bo = 1,
      Go = 2,
      Ko = 3,
      qo = !1;
    function $o(e) {
      return {
        baseState: e,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null,
      };
    }
    function Qo(e) {
      return {
        baseState: e.baseState,
        firstUpdate: e.firstUpdate,
        lastUpdate: e.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null,
      };
    }
    function Zo(e) {
      return {
        expirationTime: e,
        tag: Vo,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null,
      };
    }
    function Yo(e, t) {
      null === e.lastUpdate
        ? (e.firstUpdate = e.lastUpdate = t)
        : ((e.lastUpdate.next = t), (e.lastUpdate = t));
    }
    function Xo(e, t) {
      var n = e.alternate;
      if (null === n) {
        var r = e.updateQueue,
          a = null;
        null === r && (r = e.updateQueue = $o(e.memoizedState));
      } else
        (r = e.updateQueue),
          (a = n.updateQueue),
          null === r
            ? null === a
              ? ((r = e.updateQueue = $o(e.memoizedState)),
                (a = n.updateQueue = $o(n.memoizedState)))
              : (r = e.updateQueue = Qo(a))
            : null === a && (a = n.updateQueue = Qo(r));
      null === a || r === a
        ? Yo(r, t)
        : null === r.lastUpdate || null === a.lastUpdate
        ? (Yo(r, t), Yo(a, t))
        : (Yo(r, t), (a.lastUpdate = t));
    }
    function Jo(e, t) {
      var n = e.updateQueue;
      null ===
      (n = null === n ? (e.updateQueue = $o(e.memoizedState)) : ei(e, n))
        .lastCapturedUpdate
        ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
        : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
    }
    function ei(e, t) {
      var n = e.alternate;
      return (
        null !== n && t === n.updateQueue && (t = e.updateQueue = Qo(t)), t
      );
    }
    function ti(e, t, n, r, o, i) {
      switch (n.tag) {
        case Bo:
          return 'function' == typeof (e = n.payload) ? e.call(i, r, o) : e;
        case Ko:
          e.effectTag = (-2049 & e.effectTag) | 64;
        case Vo:
          if (
            null ==
            (o = 'function' == typeof (e = n.payload) ? e.call(i, r, o) : e)
          )
            break;
          return a({}, r, o);
        case Go:
          qo = !0;
      }
      return r;
    }
    function ni(e, t, n, r, a) {
      qo = !1;
      for (
        var o = (t = ei(e, t)).baseState,
          i = null,
          l = 0,
          u = t.firstUpdate,
          c = o;
        null !== u;

      ) {
        var s = u.expirationTime;
        s < a
          ? (null === i && ((i = u), (o = c)), l < s && (l = s))
          : ((c = ti(e, 0, u, c, n, r)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null),
              null === t.lastEffect
                ? (t.firstEffect = t.lastEffect = u)
                : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
          (u = u.next);
      }
      for (s = null, u = t.firstCapturedUpdate; null !== u; ) {
        var d = u.expirationTime;
        d < a
          ? (null === s && ((s = u), null === i && (o = c)), l < d && (l = d))
          : ((c = ti(e, 0, u, c, n, r)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null),
              null === t.lastCapturedEffect
                ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                : ((t.lastCapturedEffect.nextEffect = u),
                  (t.lastCapturedEffect = u)))),
          (u = u.next);
      }
      null === i && (t.lastUpdate = null),
        null === s ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
        null === i && null === s && (o = c),
        (t.baseState = o),
        (t.firstUpdate = i),
        (t.firstCapturedUpdate = s),
        (e.expirationTime = l),
        (e.memoizedState = c);
    }
    function ri(e, t, n) {
      null !== t.firstCapturedUpdate &&
        (null !== t.lastUpdate &&
          ((t.lastUpdate.next = t.firstCapturedUpdate),
          (t.lastUpdate = t.lastCapturedUpdate)),
        (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
        ai(t.firstEffect, n),
        (t.firstEffect = t.lastEffect = null),
        ai(t.firstCapturedEffect, n),
        (t.firstCapturedEffect = t.lastCapturedEffect = null);
    }
    function ai(e, t) {
      for (; null !== e; ) {
        var n = e.callback;
        if (null !== n) {
          e.callback = null;
          var r = t;
          'function' != typeof n && i('191', n), n.call(r);
        }
        e = e.nextEffect;
      }
    }
    function oi(e, t) {
      return {value: e, source: t, stack: ut(t)};
    }
    function ii(e) {
      e.effectTag |= 4;
    }
    var li = void 0,
      ui = void 0,
      ci = void 0,
      si = void 0;
    (li = function(e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (ui = function() {}),
      (ci = function(e, t, n, r, o) {
        var i = e.memoizedProps;
        if (i !== r) {
          var l = t.stateNode;
          switch ((xa(ya.current), (e = null), n)) {
            case 'input':
              (i = bt(l, i)), (r = bt(l, r)), (e = []);
              break;
            case 'option':
              (i = qn(l, i)), (r = qn(l, r)), (e = []);
              break;
            case 'select':
              (i = a({}, i, {value: void 0})),
                (r = a({}, r, {value: void 0})),
                (e = []);
              break;
            case 'textarea':
              (i = Qn(l, i)), (r = Qn(l, r)), (e = []);
              break;
            default:
              'function' != typeof i.onClick &&
                'function' == typeof r.onClick &&
                (l.onclick = mr);
          }
          dr(n, r), (l = n = void 0);
          var u = null;
          for (n in i)
            if (!r.hasOwnProperty(n) && i.hasOwnProperty(n) && null != i[n])
              if ('style' === n) {
                var c = i[n];
                for (l in c)
                  c.hasOwnProperty(l) && (u || (u = {}), (u[l] = ''));
              } else
                'dangerouslySetInnerHTML' !== n &&
                  'children' !== n &&
                  'suppressContentEditableWarning' !== n &&
                  'suppressHydrationWarning' !== n &&
                  'autoFocus' !== n &&
                  (b.hasOwnProperty(n)
                    ? e || (e = [])
                    : (e = e || []).push(n, null));
          for (n in r) {
            var s = r[n];
            if (
              ((c = null != i ? i[n] : void 0),
              r.hasOwnProperty(n) && s !== c && (null != s || null != c))
            )
              if ('style' === n)
                if (c) {
                  for (l in c)
                    !c.hasOwnProperty(l) ||
                      (s && s.hasOwnProperty(l)) ||
                      (u || (u = {}), (u[l] = ''));
                  for (l in s)
                    s.hasOwnProperty(l) &&
                      c[l] !== s[l] &&
                      (u || (u = {}), (u[l] = s[l]));
                } else u || (e || (e = []), e.push(n, u)), (u = s);
              else
                'dangerouslySetInnerHTML' === n
                  ? ((s = s ? s.__html : void 0),
                    (c = c ? c.__html : void 0),
                    null != s && c !== s && (e = e || []).push(n, '' + s))
                  : 'children' === n
                  ? c === s ||
                    ('string' != typeof s && 'number' != typeof s) ||
                    (e = e || []).push(n, '' + s)
                  : 'suppressContentEditableWarning' !== n &&
                    'suppressHydrationWarning' !== n &&
                    (b.hasOwnProperty(n)
                      ? (null != s && pr(o, n), e || c === s || (e = []))
                      : (e = e || []).push(n, s));
          }
          u && (e = e || []).push('style', u),
            (o = e),
            (t.updateQueue = o) && ii(t);
        }
      }),
      (si = function(e, t, n, r) {
        n !== r && ii(t);
      });
    var di = 'function' == typeof WeakSet ? WeakSet : Set;
    function fi(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = ut(n)),
        null !== n && lt(n.type),
        (t = t.value),
        null !== e && 1 === e.tag && lt(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function pi(e) {
      var t = e.ref;
      if (null !== t)
        if ('function' == typeof t)
          try {
            t(null);
          } catch (t) {
            $i(e, t);
          }
        else t.current = null;
    }
    function mi(e, t, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var r = (n = n.next);
        do {
          if ((r.tag & e) !== Ca) {
            var a = r.destroy;
            (r.destroy = void 0), void 0 !== a && a();
          }
          (r.tag & t) !== Ca && ((a = r.create), (r.destroy = a())),
            (r = r.next);
        } while (r !== n);
      }
    }
    function hi(e) {
      switch (('function' == typeof Fr && Fr(e), e.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          var t = e.updateQueue;
          if (null !== t && null !== (t = t.lastEffect)) {
            var n = (t = t.next);
            do {
              var r = n.destroy;
              if (void 0 !== r) {
                var a = e;
                try {
                  r();
                } catch (e) {
                  $i(a, e);
                }
              }
              n = n.next;
            } while (n !== t);
          }
          break;
        case 1:
          if (
            (pi(e), 'function' == typeof (t = e.stateNode).componentWillUnmount)
          )
            try {
              (t.props = e.memoizedProps),
                (t.state = e.memoizedState),
                t.componentWillUnmount();
            } catch (t) {
              $i(e, t);
            }
          break;
        case 5:
          pi(e);
          break;
        case 4:
          yi(e);
      }
    }
    function gi(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function vi(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (gi(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        i('160'), (n = void 0);
      }
      var r = (t = void 0);
      switch (n.tag) {
        case 5:
          (t = n.stateNode), (r = !1);
          break;
        case 3:
        case 4:
          (t = n.stateNode.containerInfo), (r = !0);
          break;
        default:
          i('161');
      }
      16 & n.effectTag && (or(t, ''), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || gi(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      for (var a = e; ; ) {
        if (5 === a.tag || 6 === a.tag)
          if (n)
            if (r) {
              var o = t,
                l = a.stateNode,
                u = n;
              8 === o.nodeType
                ? o.parentNode.insertBefore(l, u)
                : o.insertBefore(l, u);
            } else t.insertBefore(a.stateNode, n);
          else
            r
              ? ((l = t),
                (u = a.stateNode),
                8 === l.nodeType
                  ? (o = l.parentNode).insertBefore(u, l)
                  : (o = l).appendChild(u),
                null != (l = l._reactRootContainer) ||
                  null !== o.onclick ||
                  (o.onclick = mr))
              : t.appendChild(a.stateNode);
        else if (4 !== a.tag && null !== a.child) {
          (a.child.return = a), (a = a.child);
          continue;
        }
        if (a === e) break;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === e) return;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    function yi(e) {
      for (var t = e, n = !1, r = void 0, a = void 0; ; ) {
        if (!n) {
          n = t.return;
          e: for (;;) {
            switch ((null === n && i('160'), n.tag)) {
              case 5:
                (r = n.stateNode), (a = !1);
                break e;
              case 3:
              case 4:
                (r = n.stateNode.containerInfo), (a = !0);
                break e;
            }
            n = n.return;
          }
          n = !0;
        }
        if (5 === t.tag || 6 === t.tag) {
          e: for (var o = t, l = o; ; )
            if ((hi(l), null !== l.child && 4 !== l.tag))
              (l.child.return = l), (l = l.child);
            else {
              if (l === o) break;
              for (; null === l.sibling; ) {
                if (null === l.return || l.return === o) break e;
                l = l.return;
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
          a
            ? ((o = r),
              (l = t.stateNode),
              8 === o.nodeType ? o.parentNode.removeChild(l) : o.removeChild(l))
            : r.removeChild(t.stateNode);
        } else if (4 === t.tag) {
          if (null !== t.child) {
            (r = t.stateNode.containerInfo),
              (a = !0),
              (t.child.return = t),
              (t = t.child);
            continue;
          }
        } else if ((hi(t), null !== t.child)) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return;
          4 === (t = t.return).tag && (n = !1);
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    function bi(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          mi(Pa, La, t);
          break;
        case 1:
          break;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps;
            e = null !== e ? e.memoizedProps : r;
            var a = t.type,
              o = t.updateQueue;
            (t.updateQueue = null),
              null !== o &&
                (function(e, t, n, r, a) {
                  (e[U] = a),
                    'input' === n &&
                      'radio' === a.type &&
                      null != a.name &&
                      xt(e, a),
                    fr(n, r),
                    (r = fr(n, a));
                  for (var o = 0; o < t.length; o += 2) {
                    var i = t[o],
                      l = t[o + 1];
                    'style' === i
                      ? cr(e, l)
                      : 'dangerouslySetInnerHTML' === i
                      ? ar(e, l)
                      : 'children' === i
                      ? or(e, l)
                      : vt(e, i, l, r);
                  }
                  switch (n) {
                    case 'input':
                      wt(e, a);
                      break;
                    case 'textarea':
                      Yn(e, a);
                      break;
                    case 'select':
                      (t = e._wrapperState.wasMultiple),
                        (e._wrapperState.wasMultiple = !!a.multiple),
                        null != (n = a.value)
                          ? $n(e, !!a.multiple, n, !1)
                          : t !== !!a.multiple &&
                            (null != a.defaultValue
                              ? $n(e, !!a.multiple, a.defaultValue, !0)
                              : $n(e, !!a.multiple, a.multiple ? [] : '', !1));
                  }
                })(n, o, a, e, r);
          }
          break;
        case 6:
          null === t.stateNode && i('162'),
            (t.stateNode.nodeValue = t.memoizedProps);
          break;
        case 3:
        case 12:
          break;
        case 13:
          if (
            ((n = t.memoizedState),
            (r = void 0),
            (e = t),
            null === n
              ? (r = !1)
              : ((r = !0),
                (e = t.child),
                0 === n.timedOutAt && (n.timedOutAt = wl())),
            null !== e &&
              (function(e, t) {
                for (var n = e; ; ) {
                  if (5 === n.tag) {
                    var r = n.stateNode;
                    if (t) r.style.display = 'none';
                    else {
                      r = n.stateNode;
                      var a = n.memoizedProps.style;
                      (a =
                        null != a && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                        (r.style.display = ur('display', a));
                    }
                  } else if (6 === n.tag)
                    n.stateNode.nodeValue = t ? '' : n.memoizedProps;
                  else {
                    if (13 === n.tag && null !== n.memoizedState) {
                      ((r = n.child.sibling).return = n), (n = r);
                      continue;
                    }
                    if (null !== n.child) {
                      (n.child.return = n), (n = n.child);
                      continue;
                    }
                  }
                  if (n === e) break;
                  for (; null === n.sibling; ) {
                    if (null === n.return || n.return === e) return;
                    n = n.return;
                  }
                  (n.sibling.return = n.return), (n = n.sibling);
                }
              })(e, r),
            null !== (n = t.updateQueue))
          ) {
            t.updateQueue = null;
            var l = t.stateNode;
            null === l && (l = t.stateNode = new di()),
              n.forEach(function(e) {
                var n = function(e, t) {
                  var n = e.stateNode;
                  null !== n && n.delete(t),
                    (t = Qi((t = wl()), e)),
                    null !== (e = Yi(e, t)) &&
                      (Jr(e, t), 0 !== (t = e.expirationTime) && El(e, t));
                }.bind(null, t, e);
                l.has(e) || (l.add(e), e.then(n, n));
              });
          }
          break;
        case 17:
          break;
        default:
          i('163');
      }
    }
    var _i = 'function' == typeof WeakMap ? WeakMap : Map;
    function xi(e, t, n) {
      ((n = Zo(n)).tag = Ko), (n.payload = {element: null});
      var r = t.value;
      return (
        (n.callback = function() {
          Nl(r), fi(e, t);
        }),
        n
      );
    }
    function wi(e, t, n) {
      (n = Zo(n)).tag = Ko;
      var r = e.type.getDerivedStateFromError;
      if ('function' == typeof r) {
        var a = t.value;
        n.payload = function() {
          return r(a);
        };
      }
      var o = e.stateNode;
      return (
        null !== o &&
          'function' == typeof o.componentDidCatch &&
          (n.callback = function() {
            'function' != typeof r &&
              (null === Ii ? (Ii = new Set([this])) : Ii.add(this));
            var n = t.value,
              a = t.stack;
            fi(e, t),
              this.componentDidCatch(n, {componentStack: null !== a ? a : ''});
          }),
        n
      );
    }
    function Ei(e) {
      switch (e.tag) {
        case 1:
          Ur(e.type) && Rr();
          var t = e.effectTag;
          return 2048 & t ? ((e.effectTag = (-2049 & t) | 64), e) : null;
        case 3:
          return (
            Ea(),
            jr(),
            0 != (64 & (t = e.effectTag)) && i('285'),
            (e.effectTag = (-2049 & t) | 64),
            e
          );
        case 5:
          return Ta(e), null;
        case 13:
          return 2048 & (t = e.effectTag)
            ? ((e.effectTag = (-2049 & t) | 64), e)
            : null;
        case 18:
          return null;
        case 4:
          return Ea(), null;
        case 10:
          return Ho(e), null;
        default:
          return null;
      }
    }
    var ki = Be.ReactCurrentDispatcher,
      Ti = Be.ReactCurrentOwner,
      Ci = 1073741822,
      Si = !1,
      Pi = null,
      Li = null,
      Oi = 0,
      Mi = -1,
      Ni = !1,
      Di = null,
      Ui = !1,
      Ri = null,
      ji = null,
      Ai = null,
      Ii = null;
    function zi() {
      if (null !== Pi)
        for (var e = Pi.return; null !== e; ) {
          var t = e;
          switch (t.tag) {
            case 1:
              var n = t.type.childContextTypes;
              null != n && Rr();
              break;
            case 3:
              Ea(), jr();
              break;
            case 5:
              Ta(t);
              break;
            case 4:
              Ea();
              break;
            case 10:
              Ho(t);
          }
          e = e.return;
        }
      (Li = null), (Oi = 0), (Mi = -1), (Ni = !1), (Pi = null);
    }
    function Hi() {
      for (; null !== Di; ) {
        var e = Di.effectTag;
        if ((16 & e && or(Di.stateNode, ''), 128 & e)) {
          var t = Di.alternate;
          null !== t &&
            (null !== (t = t.ref) &&
              ('function' == typeof t ? t(null) : (t.current = null)));
        }
        switch (14 & e) {
          case 2:
            vi(Di), (Di.effectTag &= -3);
            break;
          case 6:
            vi(Di), (Di.effectTag &= -3), bi(Di.alternate, Di);
            break;
          case 4:
            bi(Di.alternate, Di);
            break;
          case 8:
            yi((e = Di)),
              (e.return = null),
              (e.child = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              null !== (e = e.alternate) &&
                ((e.return = null),
                (e.child = null),
                (e.memoizedState = null),
                (e.updateQueue = null));
        }
        Di = Di.nextEffect;
      }
    }
    function Wi() {
      for (; null !== Di; ) {
        if (256 & Di.effectTag)
          e: {
            var e = Di.alternate,
              t = Di;
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                mi(Sa, Ca, t);
                break e;
              case 1:
                if (256 & t.effectTag && null !== e) {
                  var n = e.memoizedProps,
                    r = e.memoizedState;
                  (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                    t.elementType === t.type ? n : ra(t.type, n),
                    r,
                  )),
                    (e.__reactInternalSnapshotBeforeUpdate = t);
                }
                break e;
              case 3:
              case 5:
              case 6:
              case 4:
              case 17:
                break e;
              default:
                i('163');
            }
          }
        Di = Di.nextEffect;
      }
    }
    function Fi(e, t) {
      for (; null !== Di; ) {
        var n = Di.effectTag;
        if (36 & n) {
          var r = Di.alternate,
            a = Di,
            o = t;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              mi(Oa, Ma, a);
              break;
            case 1:
              var l = a.stateNode;
              if (4 & a.effectTag)
                if (null === r) l.componentDidMount();
                else {
                  var u =
                    a.elementType === a.type
                      ? r.memoizedProps
                      : ra(a.type, r.memoizedProps);
                  l.componentDidUpdate(
                    u,
                    r.memoizedState,
                    l.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              null !== (r = a.updateQueue) && ri(0, r, l);
              break;
            case 3:
              if (null !== (r = a.updateQueue)) {
                if (((l = null), null !== a.child))
                  switch (a.child.tag) {
                    case 5:
                      l = a.child.stateNode;
                      break;
                    case 1:
                      l = a.child.stateNode;
                  }
                ri(0, r, l);
              }
              break;
            case 5:
              (o = a.stateNode),
                null === r &&
                  4 & a.effectTag &&
                  vr(a.type, a.memoizedProps) &&
                  o.focus();
              break;
            case 6:
            case 4:
            case 12:
            case 13:
            case 17:
              break;
            default:
              i('163');
          }
        }
        128 & n &&
          (null !== (a = Di.ref) &&
            ((o = Di.stateNode),
            'function' == typeof a ? a(o) : (a.current = o))),
          512 & n && (Ri = e),
          (Di = Di.nextEffect);
      }
    }
    function Vi() {
      null !== ji && wr(ji), null !== Ai && Ai();
    }
    function Bi(e, t) {
      (Ui = Si = !0), e.current === t && i('177');
      var n = e.pendingCommitExpirationTime;
      0 === n && i('261'), (e.pendingCommitExpirationTime = 0);
      var r = t.expirationTime,
        a = t.childExpirationTime;
      for (
        (function(e, t) {
          if (((e.didError = !1), 0 === t))
            (e.earliestPendingTime = 0),
              (e.latestPendingTime = 0),
              (e.earliestSuspendedTime = 0),
              (e.latestSuspendedTime = 0),
              (e.latestPingedTime = 0);
          else {
            t < e.latestPingedTime && (e.latestPingedTime = 0);
            var n = e.latestPendingTime;
            0 !== n &&
              (n > t
                ? (e.earliestPendingTime = e.latestPendingTime = 0)
                : e.earliestPendingTime > t &&
                  (e.earliestPendingTime = e.latestPendingTime)),
              0 === (n = e.earliestSuspendedTime)
                ? Jr(e, t)
                : t < e.latestSuspendedTime
                ? ((e.earliestSuspendedTime = 0),
                  (e.latestSuspendedTime = 0),
                  (e.latestPingedTime = 0),
                  Jr(e, t))
                : t > n && Jr(e, t);
          }
          na(0, e);
        })(e, a > r ? a : r),
          Ti.current = null,
          r = void 0,
          1 < t.effectTag
            ? null !== t.lastEffect
              ? ((t.lastEffect.nextEffect = t), (r = t.firstEffect))
              : (r = t)
            : (r = t.firstEffect),
          hr = kn,
          gr = (function() {
            var e = jn();
            if (An(e)) {
              if (('selectionStart' in e))
                var t = {start: e.selectionStart, end: e.selectionEnd};
              else
                e: {
                  var n =
                    (t = ((t = e.ownerDocument) && t.defaultView) || window)
                      .getSelection && t.getSelection();
                  if (n && 0 !== n.rangeCount) {
                    t = n.anchorNode;
                    var r = n.anchorOffset,
                      a = n.focusNode;
                    n = n.focusOffset;
                    try {
                      t.nodeType, a.nodeType;
                    } catch (e) {
                      t = null;
                      break e;
                    }
                    var o = 0,
                      i = -1,
                      l = -1,
                      u = 0,
                      c = 0,
                      s = e,
                      d = null;
                    t: for (;;) {
                      for (
                        var f;
                        s !== t || (0 !== r && 3 !== s.nodeType) || (i = o + r),
                          s !== a ||
                            (0 !== n && 3 !== s.nodeType) ||
                            (l = o + n),
                          3 === s.nodeType && (o += s.nodeValue.length),
                          null !== (f = s.firstChild);

                      )
                        (d = s), (s = f);
                      for (;;) {
                        if (s === e) break t;
                        if (
                          (d === t && ++u === r && (i = o),
                          d === a && ++c === n && (l = o),
                          null !== (f = s.nextSibling))
                        )
                          break;
                        d = (s = d).parentNode;
                      }
                      s = f;
                    }
                    t = -1 === i || -1 === l ? null : {start: i, end: l};
                  } else t = null;
                }
              t = t || {start: 0, end: 0};
            } else t = null;
            return {focusedElem: e, selectionRange: t};
          })(),
          kn = !1,
          Di = r;
        null !== Di;

      ) {
        a = !1;
        var l = void 0;
        try {
          Wi();
        } catch (e) {
          (a = !0), (l = e);
        }
        a &&
          (null === Di && i('178'),
          $i(Di, l),
          null !== Di && (Di = Di.nextEffect));
      }
      for (Di = r; null !== Di; ) {
        (a = !1), (l = void 0);
        try {
          Hi();
        } catch (e) {
          (a = !0), (l = e);
        }
        a &&
          (null === Di && i('178'),
          $i(Di, l),
          null !== Di && (Di = Di.nextEffect));
      }
      for (
        In(gr), gr = null, kn = !!hr, hr = null, e.current = t, Di = r;
        null !== Di;

      ) {
        (a = !1), (l = void 0);
        try {
          Fi(e, n);
        } catch (e) {
          (a = !0), (l = e);
        }
        a &&
          (null === Di && i('178'),
          $i(Di, l),
          null !== Di && (Di = Di.nextEffect));
      }
      if (null !== r && null !== Ri) {
        var u = function(e, t) {
          Ai = ji = Ri = null;
          var n = al;
          al = !0;
          do {
            if (512 & t.effectTag) {
              var r = !1,
                a = void 0;
              try {
                var o = t;
                mi(Da, Ca, o), mi(Ca, Na, o);
              } catch (e) {
                (r = !0), (a = e);
              }
              r && $i(t, a);
            }
            t = t.nextEffect;
          } while (null !== t);
          (al = n),
            0 !== (n = e.expirationTime) && El(e, n),
            sl || al || Pl(1073741823, !1);
        }.bind(null, e, r);
        (ji = o.unstable_runWithPriority(o.unstable_NormalPriority, function() {
          return xr(u);
        })),
          (Ai = u);
      }
      (Si = Ui = !1),
        'function' == typeof Wr && Wr(t.stateNode),
        (n = t.expirationTime),
        0 === (t = (t = t.childExpirationTime) > n ? t : n) && (Ii = null),
        (function(e, t) {
          (e.expirationTime = t), (e.finishedWork = null);
        })(e, t);
    }
    function Gi(e) {
      for (;;) {
        var t = e.alternate,
          n = e.return,
          r = e.sibling;
        if (0 == (1024 & e.effectTag)) {
          Pi = e;
          e: {
            var o = t,
              l = Oi,
              u = (t = e).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                Ur(t.type) && Rr();
                break;
              case 3:
                Ea(),
                  jr(),
                  (u = t.stateNode).pendingContext &&
                    ((u.context = u.pendingContext), (u.pendingContext = null)),
                  (null !== o && null !== o.child) ||
                    (bo(t), (t.effectTag &= -3)),
                  ui(t);
                break;
              case 5:
                Ta(t);
                var c = xa(_a.current);
                if (((l = t.type), null !== o && null != t.stateNode))
                  ci(o, t, l, u, c), o.ref !== t.ref && (t.effectTag |= 128);
                else if (u) {
                  var s = xa(ya.current);
                  if (bo(t)) {
                    o = (u = t).stateNode;
                    var d = u.type,
                      f = u.memoizedProps,
                      p = c;
                    switch (((o[D] = u), (o[U] = f), (l = void 0), (c = d))) {
                      case 'iframe':
                      case 'object':
                        Tn('load', o);
                        break;
                      case 'video':
                      case 'audio':
                        for (d = 0; d < te.length; d++) Tn(te[d], o);
                        break;
                      case 'source':
                        Tn('error', o);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Tn('error', o), Tn('load', o);
                        break;
                      case 'form':
                        Tn('reset', o), Tn('submit', o);
                        break;
                      case 'details':
                        Tn('toggle', o);
                        break;
                      case 'input':
                        _t(o, f), Tn('invalid', o), pr(p, 'onChange');
                        break;
                      case 'select':
                        (o._wrapperState = {wasMultiple: !!f.multiple}),
                          Tn('invalid', o),
                          pr(p, 'onChange');
                        break;
                      case 'textarea':
                        Zn(o, f), Tn('invalid', o), pr(p, 'onChange');
                    }
                    for (l in (dr(c, f), (d = null), f))
                      f.hasOwnProperty(l) &&
                        ((s = f[l]),
                        'children' === l
                          ? 'string' == typeof s
                            ? o.textContent !== s && (d = ['children', s])
                            : 'number' == typeof s &&
                              o.textContent !== '' + s &&
                              (d = ['children', '' + s])
                          : b.hasOwnProperty(l) && null != s && pr(p, l));
                    switch (c) {
                      case 'input':
                        Fe(o), Et(o, f, !0);
                        break;
                      case 'textarea':
                        Fe(o), Xn(o);
                        break;
                      case 'select':
                      case 'option':
                        break;
                      default:
                        'function' == typeof f.onClick && (o.onclick = mr);
                    }
                    (l = d), (u.updateQueue = l), (u = null !== l) && ii(t);
                  } else {
                    (f = t),
                      (p = l),
                      (o = u),
                      (d = 9 === c.nodeType ? c : c.ownerDocument),
                      s === Jn.html && (s = er(p)),
                      s === Jn.html
                        ? 'script' === p
                          ? (((o = d.createElement('div')).innerHTML =
                              '<script></script>'),
                            (d = o.removeChild(o.firstChild)))
                          : 'string' == typeof o.is
                          ? (d = d.createElement(p, {is: o.is}))
                          : ((d = d.createElement(p)),
                            'select' === p &&
                              ((p = d),
                              o.multiple
                                ? (p.multiple = !0)
                                : o.size && (p.size = o.size)))
                        : (d = d.createElementNS(s, p)),
                      ((o = d)[D] = f),
                      (o[U] = u),
                      li(o, t, !1, !1),
                      (p = o);
                    var m = c,
                      h = fr((d = l), (f = u));
                    switch (d) {
                      case 'iframe':
                      case 'object':
                        Tn('load', p), (c = f);
                        break;
                      case 'video':
                      case 'audio':
                        for (c = 0; c < te.length; c++) Tn(te[c], p);
                        c = f;
                        break;
                      case 'source':
                        Tn('error', p), (c = f);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Tn('error', p), Tn('load', p), (c = f);
                        break;
                      case 'form':
                        Tn('reset', p), Tn('submit', p), (c = f);
                        break;
                      case 'details':
                        Tn('toggle', p), (c = f);
                        break;
                      case 'input':
                        _t(p, f),
                          (c = bt(p, f)),
                          Tn('invalid', p),
                          pr(m, 'onChange');
                        break;
                      case 'option':
                        c = qn(p, f);
                        break;
                      case 'select':
                        (p._wrapperState = {wasMultiple: !!f.multiple}),
                          (c = a({}, f, {value: void 0})),
                          Tn('invalid', p),
                          pr(m, 'onChange');
                        break;
                      case 'textarea':
                        Zn(p, f),
                          (c = Qn(p, f)),
                          Tn('invalid', p),
                          pr(m, 'onChange');
                        break;
                      default:
                        c = f;
                    }
                    dr(d, c), (s = void 0);
                    var g = d,
                      v = p,
                      y = c;
                    for (s in y)
                      if (y.hasOwnProperty(s)) {
                        var _ = y[s];
                        'style' === s
                          ? cr(v, _)
                          : 'dangerouslySetInnerHTML' === s
                          ? null != (_ = _ ? _.__html : void 0) && ar(v, _)
                          : 'children' === s
                          ? 'string' == typeof _
                            ? ('textarea' !== g || '' !== _) && or(v, _)
                            : 'number' == typeof _ && or(v, '' + _)
                          : 'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (b.hasOwnProperty(s)
                              ? null != _ && pr(m, s)
                              : null != _ && vt(v, s, _, h));
                      }
                    switch (d) {
                      case 'input':
                        Fe(p), Et(p, f, !1);
                        break;
                      case 'textarea':
                        Fe(p), Xn(p);
                        break;
                      case 'option':
                        null != f.value &&
                          p.setAttribute('value', '' + yt(f.value));
                        break;
                      case 'select':
                        ((c = p).multiple = !!f.multiple),
                          null != (p = f.value)
                            ? $n(c, !!f.multiple, p, !1)
                            : null != f.defaultValue &&
                              $n(c, !!f.multiple, f.defaultValue, !0);
                        break;
                      default:
                        'function' == typeof c.onClick && (p.onclick = mr);
                    }
                    (u = vr(l, u)) && ii(t), (t.stateNode = o);
                  }
                  null !== t.ref && (t.effectTag |= 128);
                } else null === t.stateNode && i('166');
                break;
              case 6:
                o && null != t.stateNode
                  ? si(o, t, o.memoizedProps, u)
                  : ('string' != typeof u && (null === t.stateNode && i('166')),
                    (o = xa(_a.current)),
                    xa(ya.current),
                    bo(t)
                      ? ((l = (u = t).stateNode),
                        (o = u.memoizedProps),
                        (l[D] = u),
                        (u = l.nodeValue !== o) && ii(t))
                      : ((l = t),
                        ((u = (9 === o.nodeType
                          ? o
                          : o.ownerDocument
                        ).createTextNode(u))[D] = t),
                        (l.stateNode = u)));
                break;
              case 11:
                break;
              case 13:
                if (((u = t.memoizedState), 0 != (64 & t.effectTag))) {
                  (t.expirationTime = l), (Pi = t);
                  break e;
                }
                (u = null !== u),
                  (l = null !== o && null !== o.memoizedState),
                  null !== o &&
                    !u &&
                    l &&
                    (null !== (o = o.child.sibling) &&
                      (null !== (c = t.firstEffect)
                        ? ((t.firstEffect = o), (o.nextEffect = c))
                        : ((t.firstEffect = t.lastEffect = o),
                          (o.nextEffect = null)),
                      (o.effectTag = 8))),
                  (u || l) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                Ea(), ui(t);
                break;
              case 10:
                Ho(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                Ur(t.type) && Rr();
                break;
              case 18:
                break;
              default:
                i('156');
            }
            Pi = null;
          }
          if (((t = e), 1 === Oi || 1 !== t.childExpirationTime)) {
            for (u = 0, l = t.child; null !== l; )
              (o = l.expirationTime) > u && (u = o),
                (c = l.childExpirationTime) > u && (u = c),
                (l = l.sibling);
            t.childExpirationTime = u;
          }
          if (null !== Pi) return Pi;
          null !== n &&
            0 == (1024 & n.effectTag) &&
            (null === n.firstEffect && (n.firstEffect = e.firstEffect),
            null !== e.lastEffect &&
              (null !== n.lastEffect &&
                (n.lastEffect.nextEffect = e.firstEffect),
              (n.lastEffect = e.lastEffect)),
            1 < e.effectTag &&
              (null !== n.lastEffect
                ? (n.lastEffect.nextEffect = e)
                : (n.firstEffect = e),
              (n.lastEffect = e)));
        } else {
          if (null !== (e = Ei(e))) return (e.effectTag &= 1023), e;
          null !== n &&
            ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 1024));
        }
        if (null !== r) return r;
        if (null === n) break;
        e = n;
      }
      return null;
    }
    function Ki(e) {
      var t = Uo(e.alternate, e, Oi);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = Gi(e)),
        (Ti.current = null),
        t
      );
    }
    function qi(e, t) {
      Si && i('243'), Vi(), (Si = !0);
      var n = ki.current;
      ki.current = uo;
      var r = e.nextExpirationTimeToWorkOn;
      (r === Oi && e === Li && null !== Pi) ||
        (zi(),
        (Oi = r),
        (Pi = qr((Li = e).current, null)),
        (e.pendingCommitExpirationTime = 0));
      for (var a = !1; ; ) {
        try {
          if (t) for (; null !== Pi && !Cl(); ) Pi = Ki(Pi);
          else for (; null !== Pi; ) Pi = Ki(Pi);
        } catch (t) {
          if (((Io = Ao = jo = null), Ya(), null === Pi)) (a = !0), Nl(t);
          else {
            null === Pi && i('271');
            var o = Pi,
              l = o.return;
            if (null !== l) {
              e: {
                var u = e,
                  c = l,
                  s = o,
                  d = t;
                if (
                  ((l = Oi),
                  (s.effectTag |= 1024),
                  (s.firstEffect = s.lastEffect = null),
                  null !== d &&
                    'object' == typeof d &&
                    'function' == typeof d.then)
                ) {
                  var f = d;
                  d = c;
                  var p = -1,
                    m = -1;
                  do {
                    if (13 === d.tag) {
                      var h = d.alternate;
                      if (null !== h && null !== (h = h.memoizedState)) {
                        m = 10 * (1073741822 - h.timedOutAt);
                        break;
                      }
                      'number' == typeof (h = d.pendingProps.maxDuration) &&
                        (0 >= h ? (p = 0) : (-1 === p || h < p) && (p = h));
                    }
                    d = d.return;
                  } while (null !== d);
                  d = c;
                  do {
                    if (
                      ((h = 13 === d.tag) &&
                        (h =
                          void 0 !== d.memoizedProps.fallback &&
                          null === d.memoizedState),
                      h)
                    ) {
                      if (
                        (null === (c = d.updateQueue)
                          ? ((c = new Set()).add(f), (d.updateQueue = c))
                          : c.add(f),
                        0 == (1 & d.mode))
                      ) {
                        (d.effectTag |= 64),
                          (s.effectTag &= -1957),
                          1 === s.tag &&
                            (null === s.alternate
                              ? (s.tag = 17)
                              : (((l = Zo(1073741823)).tag = Go), Xo(s, l))),
                          (s.expirationTime = 1073741823);
                        break e;
                      }
                      c = l;
                      var g = (s = u).pingCache;
                      null === g
                        ? ((g = s.pingCache = new _i()),
                          (h = new Set()),
                          g.set(f, h))
                        : void 0 === (h = g.get(f)) &&
                          ((h = new Set()), g.set(f, h)),
                        h.has(c) ||
                          (h.add(c),
                          (s = Zi.bind(null, s, f, c)),
                          f.then(s, s)),
                        -1 === p
                          ? (u = 1073741823)
                          : (-1 === m &&
                              (m = 10 * (1073741822 - ta(u, l)) - 5e3),
                            (u = m + p)),
                        0 <= u && Mi < u && (Mi = u),
                        (d.effectTag |= 2048),
                        (d.expirationTime = l);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  d = Error(
                    (lt(s.type) || 'A React component') +
                      ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                      ut(s),
                  );
                }
                (Ni = !0), (d = oi(d, s)), (u = c);
                do {
                  switch (u.tag) {
                    case 3:
                      (u.effectTag |= 2048),
                        (u.expirationTime = l),
                        Jo(u, (l = xi(u, d, l)));
                      break e;
                    case 1:
                      if (
                        ((p = d),
                        (m = u.type),
                        (s = u.stateNode),
                        0 == (64 & u.effectTag) &&
                          ('function' == typeof m.getDerivedStateFromError ||
                            (null !== s &&
                              'function' == typeof s.componentDidCatch &&
                              (null === Ii || !Ii.has(s)))))
                      ) {
                        (u.effectTag |= 2048),
                          (u.expirationTime = l),
                          Jo(u, (l = wi(u, p, l)));
                        break e;
                      }
                  }
                  u = u.return;
                } while (null !== u);
              }
              Pi = Gi(o);
              continue;
            }
            (a = !0), Nl(t);
          }
        }
        break;
      }
      if (((Si = !1), (ki.current = n), (Io = Ao = jo = null), Ya(), a))
        (Li = null), (e.finishedWork = null);
      else if (null !== Pi) e.finishedWork = null;
      else {
        if ((null === (n = e.current.alternate) && i('281'), (Li = null), Ni)) {
          if (
            ((a = e.latestPendingTime),
            (o = e.latestSuspendedTime),
            (l = e.latestPingedTime),
            (0 !== a && a < r) || (0 !== o && o < r) || (0 !== l && l < r))
          )
            return ea(e, r), void xl(e, n, r, e.expirationTime, -1);
          if (!e.didError && t)
            return (
              (e.didError = !0),
              (r = e.nextExpirationTimeToWorkOn = r),
              (t = e.expirationTime = 1073741823),
              void xl(e, n, r, t, -1)
            );
        }
        t && -1 !== Mi
          ? (ea(e, r),
            (t = 10 * (1073741822 - ta(e, r))) < Mi && (Mi = t),
            (t = 10 * (1073741822 - wl())),
            (t = Mi - t),
            xl(e, n, r, e.expirationTime, 0 > t ? 0 : t))
          : ((e.pendingCommitExpirationTime = r), (e.finishedWork = n));
      }
    }
    function $i(e, t) {
      for (var n = e.return; null !== n; ) {
        switch (n.tag) {
          case 1:
            var r = n.stateNode;
            if (
              'function' == typeof n.type.getDerivedStateFromError ||
              ('function' == typeof r.componentDidCatch &&
                (null === Ii || !Ii.has(r)))
            )
              return (
                Xo(n, (e = wi(n, (e = oi(t, e)), 1073741823))),
                void Xi(n, 1073741823)
              );
            break;
          case 3:
            return (
              Xo(n, (e = xi(n, (e = oi(t, e)), 1073741823))),
              void Xi(n, 1073741823)
            );
        }
        n = n.return;
      }
      3 === e.tag &&
        (Xo(e, (n = xi(e, (n = oi(t, e)), 1073741823))), Xi(e, 1073741823));
    }
    function Qi(e, t) {
      var n = o.unstable_getCurrentPriorityLevel(),
        r = void 0;
      if (0 == (1 & t.mode)) r = 1073741823;
      else if (Si && !Ui) r = Oi;
      else {
        switch (n) {
          case o.unstable_ImmediatePriority:
            r = 1073741823;
            break;
          case o.unstable_UserBlockingPriority:
            r = 1073741822 - 10 * (1 + (((1073741822 - e + 15) / 10) | 0));
            break;
          case o.unstable_NormalPriority:
            r = 1073741822 - 25 * (1 + (((1073741822 - e + 500) / 25) | 0));
            break;
          case o.unstable_LowPriority:
          case o.unstable_IdlePriority:
            r = 1;
            break;
          default:
            i('313');
        }
        null !== Li && r === Oi && --r;
      }
      return (
        n === o.unstable_UserBlockingPriority &&
          (0 === ll || r < ll) &&
          (ll = r),
        r
      );
    }
    function Zi(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        null !== Li && Oi === n
          ? (Li = null)
          : ((t = e.earliestSuspendedTime),
            (r = e.latestSuspendedTime),
            0 !== t &&
              n <= t &&
              n >= r &&
              ((e.didError = !1),
              (0 === (t = e.latestPingedTime) || t > n) &&
                (e.latestPingedTime = n),
              na(n, e),
              0 !== (n = e.expirationTime) && El(e, n)));
    }
    function Yi(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        a = null;
      if (null === r && 3 === e.tag) a = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t),
            null === r.return && 3 === r.tag)
          ) {
            a = r.stateNode;
            break;
          }
          r = r.return;
        }
      return a;
    }
    function Xi(e, t) {
      null !== (e = Yi(e, t)) &&
        (!Si && 0 !== Oi && t > Oi && zi(),
        Jr(e, t),
        (Si && !Ui && Li === e) || El(e, e.expirationTime),
        vl > gl && ((vl = 0), i('185')));
    }
    function Ji(e, t, n, r, a) {
      return o.unstable_runWithPriority(
        o.unstable_ImmediatePriority,
        function() {
          return e(t, n, r, a);
        },
      );
    }
    var el = null,
      tl = null,
      nl = 0,
      rl = void 0,
      al = !1,
      ol = null,
      il = 0,
      ll = 0,
      ul = !1,
      cl = null,
      sl = !1,
      dl = !1,
      fl = null,
      pl = o.unstable_now(),
      ml = 1073741822 - ((pl / 10) | 0),
      hl = ml,
      gl = 50,
      vl = 0,
      yl = null;
    function bl() {
      ml = 1073741822 - (((o.unstable_now() - pl) / 10) | 0);
    }
    function _l(e, t) {
      if (0 !== nl) {
        if (t < nl) return;
        null !== rl && o.unstable_cancelCallback(rl);
      }
      (nl = t),
        (e = o.unstable_now() - pl),
        (rl = o.unstable_scheduleCallback(Sl, {
          timeout: 10 * (1073741822 - t) - e,
        }));
    }
    function xl(e, t, n, r, a) {
      (e.expirationTime = r),
        0 !== a || Cl()
          ? 0 < a &&
            (e.timeoutHandle = br(
              function(e, t, n) {
                (e.pendingCommitExpirationTime = n),
                  (e.finishedWork = t),
                  bl(),
                  (hl = ml),
                  Ll(e, n);
              }.bind(null, e, t, n),
              a,
            ))
          : ((e.pendingCommitExpirationTime = n), (e.finishedWork = t));
    }
    function wl() {
      return al ? hl : (kl(), (0 !== il && 1 !== il) || (bl(), (hl = ml)), hl);
    }
    function El(e, t) {
      null === e.nextScheduledRoot
        ? ((e.expirationTime = t),
          null === tl
            ? ((el = tl = e), (e.nextScheduledRoot = e))
            : ((tl = tl.nextScheduledRoot = e).nextScheduledRoot = el))
        : t > e.expirationTime && (e.expirationTime = t),
        al ||
          (sl
            ? dl && ((ol = e), (il = 1073741823), Ol(e, 1073741823, !1))
            : 1073741823 === t
            ? Pl(1073741823, !1)
            : _l(e, t));
    }
    function kl() {
      var e = 0,
        t = null;
      if (null !== tl)
        for (var n = tl, r = el; null !== r; ) {
          var a = r.expirationTime;
          if (0 === a) {
            if (
              ((null === n || null === tl) && i('244'),
              r === r.nextScheduledRoot)
            ) {
              el = tl = r.nextScheduledRoot = null;
              break;
            }
            if (r === el)
              (el = a = r.nextScheduledRoot),
                (tl.nextScheduledRoot = a),
                (r.nextScheduledRoot = null);
            else {
              if (r === tl) {
                ((tl = n).nextScheduledRoot = el), (r.nextScheduledRoot = null);
                break;
              }
              (n.nextScheduledRoot = r.nextScheduledRoot),
                (r.nextScheduledRoot = null);
            }
            r = n.nextScheduledRoot;
          } else {
            if ((a > e && ((e = a), (t = r)), r === tl)) break;
            if (1073741823 === e) break;
            (n = r), (r = r.nextScheduledRoot);
          }
        }
      (ol = t), (il = e);
    }
    var Tl = !1;
    function Cl() {
      return !!Tl || (!!o.unstable_shouldYield() && (Tl = !0));
    }
    function Sl() {
      try {
        if (!Cl() && null !== el) {
          bl();
          var e = el;
          do {
            var t = e.expirationTime;
            0 !== t && ml <= t && (e.nextExpirationTimeToWorkOn = ml),
              (e = e.nextScheduledRoot);
          } while (e !== el);
        }
        Pl(0, !0);
      } finally {
        Tl = !1;
      }
    }
    function Pl(e, t) {
      if ((kl(), t))
        for (
          bl(), hl = ml;
          null !== ol && 0 !== il && e <= il && !(Tl && ml > il);

        )
          Ol(ol, il, ml > il), kl(), bl(), (hl = ml);
      else for (; null !== ol && 0 !== il && e <= il; ) Ol(ol, il, !1), kl();
      if (
        (t && ((nl = 0), (rl = null)),
        0 !== il && _l(ol, il),
        (vl = 0),
        (yl = null),
        null !== fl)
      )
        for (e = fl, fl = null, t = 0; t < e.length; t++) {
          var n = e[t];
          try {
            n._onComplete();
          } catch (e) {
            ul || ((ul = !0), (cl = e));
          }
        }
      if (ul) throw ((e = cl), (cl = null), (ul = !1), e);
    }
    function Ll(e, t) {
      al && i('253'), (ol = e), (il = t), Ol(e, t, !1), Pl(1073741823, !1);
    }
    function Ol(e, t, n) {
      if ((al && i('245'), (al = !0), n)) {
        var r = e.finishedWork;
        null !== r
          ? Ml(e, r, t)
          : ((e.finishedWork = null),
            -1 !== (r = e.timeoutHandle) && ((e.timeoutHandle = -1), _r(r)),
            qi(e, n),
            null !== (r = e.finishedWork) &&
              (Cl() ? (e.finishedWork = r) : Ml(e, r, t)));
      } else
        null !== (r = e.finishedWork)
          ? Ml(e, r, t)
          : ((e.finishedWork = null),
            -1 !== (r = e.timeoutHandle) && ((e.timeoutHandle = -1), _r(r)),
            qi(e, n),
            null !== (r = e.finishedWork) && Ml(e, r, t));
      al = !1;
    }
    function Ml(e, t, n) {
      var r = e.firstBatch;
      if (
        null !== r &&
        r._expirationTime >= n &&
        (null === fl ? (fl = [r]) : fl.push(r), r._defer)
      )
        return (e.finishedWork = t), void (e.expirationTime = 0);
      (e.finishedWork = null),
        e === yl ? vl++ : ((yl = e), (vl = 0)),
        o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
          Bi(e, t);
        });
    }
    function Nl(e) {
      null === ol && i('246'),
        (ol.expirationTime = 0),
        ul || ((ul = !0), (cl = e));
    }
    function Dl(e, t) {
      var n = sl;
      sl = !0;
      try {
        return e(t);
      } finally {
        (sl = n) || al || Pl(1073741823, !1);
      }
    }
    function Ul(e, t) {
      if (sl && !dl) {
        dl = !0;
        try {
          return e(t);
        } finally {
          dl = !1;
        }
      }
      return e(t);
    }
    function Rl(e, t, n) {
      sl || al || 0 === ll || (Pl(ll, !1), (ll = 0));
      var r = sl;
      sl = !0;
      try {
        return o.unstable_runWithPriority(
          o.unstable_UserBlockingPriority,
          function() {
            return e(t, n);
          },
        );
      } finally {
        (sl = r) || al || Pl(1073741823, !1);
      }
    }
    function jl(e, t, n, r, a) {
      var o = t.current;
      e: if (n) {
        t: {
          (2 === tn((n = n._reactInternalFiber)) && 1 === n.tag) || i('170');
          var l = n;
          do {
            switch (l.tag) {
              case 3:
                l = l.stateNode.context;
                break t;
              case 1:
                if (Ur(l.type)) {
                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            l = l.return;
          } while (null !== l);
          i('171'), (l = void 0);
        }
        if (1 === n.tag) {
          var u = n.type;
          if (Ur(u)) {
            n = Ir(n, u, l);
            break e;
          }
        }
        n = l;
      } else n = Lr;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        (t = a),
        ((a = Zo(r)).payload = {element: e}),
        null !== (t = void 0 === t ? null : t) && (a.callback = t),
        Vi(),
        Xo(o, a),
        Xi(o, r),
        r
      );
    }
    function Al(e, t, n, r) {
      var a = t.current;
      return jl(e, t, n, (a = Qi(wl(), a)), r);
    }
    function Il(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function zl(e) {
      var t = 1073741822 - 25 * (1 + (((1073741822 - wl() + 500) / 25) | 0));
      t >= Ci && (t = Ci - 1),
        (this._expirationTime = Ci = t),
        (this._root = e),
        (this._callbacks = this._next = null),
        (this._hasChildren = this._didComplete = !1),
        (this._children = null),
        (this._defer = !0);
    }
    function Hl() {
      (this._callbacks = null),
        (this._didCommit = !1),
        (this._onCommit = this._onCommit.bind(this));
    }
    function Wl(e, t, n) {
      (e = {
        current: (t = Gr(3, null, null, t ? 3 : 0)),
        containerInfo: e,
        pendingChildren: null,
        pingCache: null,
        earliestPendingTime: 0,
        latestPendingTime: 0,
        earliestSuspendedTime: 0,
        latestSuspendedTime: 0,
        latestPingedTime: 0,
        didError: !1,
        pendingCommitExpirationTime: 0,
        finishedWork: null,
        timeoutHandle: -1,
        context: null,
        pendingContext: null,
        hydrate: n,
        nextExpirationTimeToWorkOn: 0,
        expirationTime: 0,
        firstBatch: null,
        nextScheduledRoot: null,
      }),
        (this._internalRoot = t.stateNode = e);
    }
    function Fl(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
      );
    }
    function Vl(e, t, n, r, a) {
      var o = n._reactRootContainer;
      if (o) {
        if ('function' == typeof a) {
          var i = a;
          a = function() {
            var e = Il(o._internalRoot);
            i.call(e);
          };
        }
        null != e
          ? o.legacy_renderSubtreeIntoContainer(e, t, a)
          : o.render(t, a);
      } else {
        if (
          ((o = n._reactRootContainer = (function(e, t) {
            if (
              (t ||
                (t = !(
                  !(t = e
                    ? 9 === e.nodeType
                      ? e.documentElement
                      : e.firstChild
                    : null) ||
                  1 !== t.nodeType ||
                  !t.hasAttribute('data-reactroot')
                )),
              !t)
            )
              for (var n; (n = e.lastChild); ) e.removeChild(n);
            return new Wl(e, !1, t);
          })(n, r)),
          'function' == typeof a)
        ) {
          var l = a;
          a = function() {
            var e = Il(o._internalRoot);
            l.call(e);
          };
        }
        Ul(function() {
          null != e
            ? o.legacy_renderSubtreeIntoContainer(e, t, a)
            : o.render(t, a);
        });
      }
      return Il(o._internalRoot);
    }
    function Bl(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      return (
        Fl(t) || i('200'),
        (function(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: $e,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n)
      );
    }
    (Ce = function(e, t, n) {
      switch (t) {
        case 'input':
          if ((wt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var a = I(r);
                a || i('90'), Ve(r), wt(r, a);
              }
            }
          }
          break;
        case 'textarea':
          Yn(e, n);
          break;
        case 'select':
          null != (t = n.value) && $n(e, !!n.multiple, t, !1);
      }
    }),
      (zl.prototype.render = function(e) {
        this._defer || i('250'), (this._hasChildren = !0), (this._children = e);
        var t = this._root._internalRoot,
          n = this._expirationTime,
          r = new Hl();
        return jl(e, t, null, n, r._onCommit), r;
      }),
      (zl.prototype.then = function(e) {
        if (this._didComplete) e();
        else {
          var t = this._callbacks;
          null === t && (t = this._callbacks = []), t.push(e);
        }
      }),
      (zl.prototype.commit = function() {
        var e = this._root._internalRoot,
          t = e.firstBatch;
        if (((this._defer && null !== t) || i('251'), this._hasChildren)) {
          var n = this._expirationTime;
          if (t !== this) {
            this._hasChildren &&
              ((n = this._expirationTime = t._expirationTime),
              this.render(this._children));
            for (var r = null, a = t; a !== this; ) (r = a), (a = a._next);
            null === r && i('251'),
              (r._next = a._next),
              (this._next = t),
              (e.firstBatch = this);
          }
          (this._defer = !1),
            Ll(e, n),
            (t = this._next),
            (this._next = null),
            null !== (t = e.firstBatch = t) &&
              t._hasChildren &&
              t.render(t._children);
        } else (this._next = null), (this._defer = !1);
      }),
      (zl.prototype._onComplete = function() {
        if (!this._didComplete) {
          this._didComplete = !0;
          var e = this._callbacks;
          if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }),
      (Hl.prototype.then = function(e) {
        if (this._didCommit) e();
        else {
          var t = this._callbacks;
          null === t && (t = this._callbacks = []), t.push(e);
        }
      }),
      (Hl.prototype._onCommit = function() {
        if (!this._didCommit) {
          this._didCommit = !0;
          var e = this._callbacks;
          if (null !== e)
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              'function' != typeof n && i('191', n), n();
            }
        }
      }),
      (Wl.prototype.render = function(e, t) {
        var n = this._internalRoot,
          r = new Hl();
        return (
          null !== (t = void 0 === t ? null : t) && r.then(t),
          Al(e, n, null, r._onCommit),
          r
        );
      }),
      (Wl.prototype.unmount = function(e) {
        var t = this._internalRoot,
          n = new Hl();
        return (
          null !== (e = void 0 === e ? null : e) && n.then(e),
          Al(null, t, null, n._onCommit),
          n
        );
      }),
      (Wl.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) {
        var r = this._internalRoot,
          a = new Hl();
        return (
          null !== (n = void 0 === n ? null : n) && a.then(n),
          Al(t, r, e, a._onCommit),
          a
        );
      }),
      (Wl.prototype.createBatch = function() {
        var e = new zl(this),
          t = e._expirationTime,
          n = this._internalRoot,
          r = n.firstBatch;
        if (null === r) (n.firstBatch = e), (e._next = null);
        else {
          for (n = null; null !== r && r._expirationTime >= t; )
            (n = r), (r = r._next);
          (e._next = r), null !== n && (n._next = e);
        }
        return e;
      }),
      (Ne = Dl),
      (De = Rl),
      (Ue = function() {
        al || 0 === ll || (Pl(ll, !1), (ll = 0));
      });
    var Gl = {
      createPortal: Bl,
      findDOMNode: function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        return (
          void 0 === t &&
            ('function' == typeof e.render
              ? i('188')
              : i('268', Object.keys(e))),
          (e = null === (e = rn(t)) ? null : e.stateNode)
        );
      },
      hydrate: function(e, t, n) {
        return Fl(t) || i('200'), Vl(null, e, t, !0, n);
      },
      render: function(e, t, n) {
        return Fl(t) || i('200'), Vl(null, e, t, !1, n);
      },
      unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
        return (
          Fl(n) || i('200'),
          (null == e || void 0 === e._reactInternalFiber) && i('38'),
          Vl(e, t, n, !1, r)
        );
      },
      unmountComponentAtNode: function(e) {
        return (
          Fl(e) || i('40'),
          !!e._reactRootContainer &&
            (Ul(function() {
              Vl(null, null, e, !1, function() {
                e._reactRootContainer = null;
              });
            }),
            !0)
        );
      },
      unstable_createPortal: function() {
        return Bl.apply(void 0, arguments);
      },
      unstable_batchedUpdates: Dl,
      unstable_interactiveUpdates: Rl,
      flushSync: function(e, t) {
        al && i('187');
        var n = sl;
        sl = !0;
        try {
          return Ji(e, t);
        } finally {
          (sl = n), Pl(1073741823, !1);
        }
      },
      unstable_createRoot: function(e, t) {
        return (
          Fl(e) || i('299', 'unstable_createRoot'),
          new Wl(e, !0, null != t && !0 === t.hydrate)
        );
      },
      unstable_flushControlled: function(e) {
        var t = sl;
        sl = !0;
        try {
          Ji(e);
        } finally {
          (sl = t) || al || Pl(1073741823, !1);
        }
      },
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        Events: [
          j,
          A,
          I,
          L.injectEventPluginsByName,
          y,
          B,
          function(e) {
            C(e, V);
          },
          Oe,
          Me,
          Pn,
          M,
        ],
      },
    };
    !(function(e) {
      var t = e.findFiberByHostInstance;
      (function(e) {
        if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (Wr = Vr(function(e) {
            return t.onCommitFiberRoot(n, e);
          })),
            (Fr = Vr(function(e) {
              return t.onCommitFiberUnmount(n, e);
            }));
        } catch (e) {}
      })(
        a({}, e, {
          overrideProps: null,
          currentDispatcherRef: Be.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = rn(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function(e) {
            return t ? t(e) : null;
          },
        }),
      );
    })({
      findFiberByHostInstance: R,
      bundleType: 0,
      version: '16.8.6',
      rendererPackageName: 'react-dom',
    });
    var Kl = {default: Gl},
      ql = (Kl && Gl) || Kl;
    e.exports = ql.default || ql;
  },
  function(e, t, n) {
    'use strict';
    e.exports = n(29);
  },
  function(e, t, n) {
    'use strict';
    (function(e) {
      /** @license React v0.13.6
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      Object.defineProperty(t, '__esModule', {value: !0});
      var n = null,
        r = !1,
        a = 3,
        o = -1,
        i = -1,
        l = !1,
        u = !1;
      function c() {
        if (!l) {
          var e = n.expirationTime;
          u ? E() : (u = !0), w(f, e);
        }
      }
      function s() {
        var e = n,
          t = n.next;
        if (n === t) n = null;
        else {
          var r = n.previous;
          (n = r.next = t), (t.previous = r);
        }
        (e.next = e.previous = null),
          (r = e.callback),
          (t = e.expirationTime),
          (e = e.priorityLevel);
        var o = a,
          l = i;
        (a = e), (i = t);
        try {
          var u = r();
        } finally {
          (a = o), (i = l);
        }
        if ('function' == typeof u)
          if (
            ((u = {
              callback: u,
              priorityLevel: e,
              expirationTime: t,
              next: null,
              previous: null,
            }),
            null === n)
          )
            n = u.next = u.previous = u;
          else {
            (r = null), (e = n);
            do {
              if (e.expirationTime >= t) {
                r = e;
                break;
              }
              e = e.next;
            } while (e !== n);
            null === r ? (r = n) : r === n && ((n = u), c()),
              ((t = r.previous).next = r.previous = u),
              (u.next = r),
              (u.previous = t);
          }
      }
      function d() {
        if (-1 === o && null !== n && 1 === n.priorityLevel) {
          l = !0;
          try {
            do {
              s();
            } while (null !== n && 1 === n.priorityLevel);
          } finally {
            (l = !1), null !== n ? c() : (u = !1);
          }
        }
      }
      function f(e) {
        l = !0;
        var a = r;
        r = e;
        try {
          if (e)
            for (; null !== n; ) {
              var o = t.unstable_now();
              if (!(n.expirationTime <= o)) break;
              do {
                s();
              } while (null !== n && n.expirationTime <= o);
            }
          else if (null !== n)
            do {
              s();
            } while (null !== n && !k());
        } finally {
          (l = !1), (r = a), null !== n ? c() : (u = !1), d();
        }
      }
      var p,
        m,
        h = Date,
        g = 'function' == typeof setTimeout ? setTimeout : void 0,
        v = 'function' == typeof clearTimeout ? clearTimeout : void 0,
        y =
          'function' == typeof requestAnimationFrame
            ? requestAnimationFrame
            : void 0,
        b =
          'function' == typeof cancelAnimationFrame
            ? cancelAnimationFrame
            : void 0;
      function _(e) {
        (p = y(function(t) {
          v(m), e(t);
        })),
          (m = g(function() {
            b(p), e(t.unstable_now());
          }, 100));
      }
      if (
        'object' == typeof performance &&
        'function' == typeof performance.now
      ) {
        var x = performance;
        t.unstable_now = function() {
          return x.now();
        };
      } else
        t.unstable_now = function() {
          return h.now();
        };
      var w,
        E,
        k,
        T = null;
      if (
        ('undefined' != typeof window ? (T = window) : void 0 !== e && (T = e),
        T && T._schedMock)
      ) {
        var C = T._schedMock;
        (w = C[0]), (E = C[1]), (k = C[2]), (t.unstable_now = C[3]);
      } else if (
        'undefined' == typeof window ||
        'function' != typeof MessageChannel
      ) {
        var S = null,
          P = function(e) {
            if (null !== S)
              try {
                S(e);
              } finally {
                S = null;
              }
          };
        (w = function(e) {
          null !== S ? setTimeout(w, 0, e) : ((S = e), setTimeout(P, 0, !1));
        }),
          (E = function() {
            S = null;
          }),
          (k = function() {
            return !1;
          });
      } else {
        'undefined' != typeof console &&
          ('function' != typeof y &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
            ),
          'function' != typeof b &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
            ));
        var L = null,
          O = !1,
          M = -1,
          N = !1,
          D = !1,
          U = 0,
          R = 33,
          j = 33;
        k = function() {
          return U <= t.unstable_now();
        };
        var A = new MessageChannel(),
          I = A.port2;
        A.port1.onmessage = function() {
          O = !1;
          var e = L,
            n = M;
          (L = null), (M = -1);
          var r = t.unstable_now(),
            a = !1;
          if (0 >= U - r) {
            if (!(-1 !== n && n <= r))
              return N || ((N = !0), _(z)), (L = e), void (M = n);
            a = !0;
          }
          if (null !== e) {
            D = !0;
            try {
              e(a);
            } finally {
              D = !1;
            }
          }
        };
        var z = function(e) {
          if (null !== L) {
            _(z);
            var t = e - U + j;
            t < j && R < j ? (8 > t && (t = 8), (j = t < R ? R : t)) : (R = t),
              (U = e + j),
              O || ((O = !0), I.postMessage(void 0));
          } else N = !1;
        };
        (w = function(e, t) {
          (L = e),
            (M = t),
            D || 0 > t ? I.postMessage(void 0) : N || ((N = !0), _(z));
        }),
          (E = function() {
            (L = null), (O = !1), (M = -1);
          });
      }
      (t.unstable_ImmediatePriority = 1),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_NormalPriority = 3),
        (t.unstable_IdlePriority = 5),
        (t.unstable_LowPriority = 4),
        (t.unstable_runWithPriority = function(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var r = a,
            i = o;
          (a = e), (o = t.unstable_now());
          try {
            return n();
          } finally {
            (a = r), (o = i), d();
          }
        }),
        (t.unstable_next = function(e) {
          switch (a) {
            case 1:
            case 2:
            case 3:
              var n = 3;
              break;
            default:
              n = a;
          }
          var r = a,
            i = o;
          (a = n), (o = t.unstable_now());
          try {
            return e();
          } finally {
            (a = r), (o = i), d();
          }
        }),
        (t.unstable_scheduleCallback = function(e, r) {
          var i = -1 !== o ? o : t.unstable_now();
          if (
            'object' == typeof r &&
            null !== r &&
            'number' == typeof r.timeout
          )
            r = i + r.timeout;
          else
            switch (a) {
              case 1:
                r = i + -1;
                break;
              case 2:
                r = i + 250;
                break;
              case 5:
                r = i + 1073741823;
                break;
              case 4:
                r = i + 1e4;
                break;
              default:
                r = i + 5e3;
            }
          if (
            ((e = {
              callback: e,
              priorityLevel: a,
              expirationTime: r,
              next: null,
              previous: null,
            }),
            null === n)
          )
            (n = e.next = e.previous = e), c();
          else {
            i = null;
            var l = n;
            do {
              if (l.expirationTime > r) {
                i = l;
                break;
              }
              l = l.next;
            } while (l !== n);
            null === i ? (i = n) : i === n && ((n = e), c()),
              ((r = i.previous).next = i.previous = e),
              (e.next = i),
              (e.previous = r);
          }
          return e;
        }),
        (t.unstable_cancelCallback = function(e) {
          var t = e.next;
          if (null !== t) {
            if (t === e) n = null;
            else {
              e === n && (n = t);
              var r = e.previous;
              (r.next = t), (t.previous = r);
            }
            e.next = e.previous = null;
          }
        }),
        (t.unstable_wrapCallback = function(e) {
          var n = a;
          return function() {
            var r = a,
              i = o;
            (a = n), (o = t.unstable_now());
            try {
              return e.apply(this, arguments);
            } finally {
              (a = r), (o = i), d();
            }
          };
        }),
        (t.unstable_getCurrentPriorityLevel = function() {
          return a;
        }),
        (t.unstable_shouldYield = function() {
          return !r && ((null !== n && n.expirationTime < i) || k());
        }),
        (t.unstable_continueExecution = function() {
          null !== n && c();
        }),
        (t.unstable_pauseExecution = function() {}),
        (t.unstable_getFirstCallbackNode = function() {
          return n;
        });
    }.call(this, n(30)));
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    (t = e.exports = n(4)(!1)).i(n(5), ''),
      t.push([
        e.i,
        'p {\n  text-indent: 0.5em;\n}\n\n.vid-tile {\n  position: relative;\n  width: 100%;\n  margin: 0.6em auto;\n}\n\n.vid-info-container {\n  height: 200px;\n}\n\n.main-src {\n  width: 100%;\n  margin: 1em 0;\n  box-shadow: 1px 4px 10px 1px var(--color-gray);\n}\n\n.fa-3x {\n  padding: 0.1em;\n  border-radius: 20%;\n  background-color: var(--color-ltheme);\n}\n\n.vid-info {\n  position: relative;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 80%;\n  max-width: 400px;\n  height: 80px;\n}\n\n.vid-title {\n  max-width: 100%;\n  margin: 0 0 25px 10px;\n  font-size: 1.1em;\n}\n\n.main-icon {\n  align-self: flex-end;\n  width: 100%;\n}\n\n.vid-desc {\n  width: 100%;\n  margin-bottom: 0.5em;\n  font-size: 1em;\n  font-weight: 200;\n  text-indent: 0;\n}\n\n.vid-tags {\n  width: 100%;\n  margin: 0.2em auto;\n}\n\n.vid-thumb {\n  position: relative;\n  width: 90%;\n  height: 250px;\n  margin: 0 0 2em 0;\n}\n\n.cover-link {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n}\n\n.vid-src {\n  width: 100%;\n  margin: 0.2em auto;\n  box-shadow: 2px 4px 10px 2px var(--color-gray);\n}\n\n.thumb-info {\n  height: 40px;\n}\n\n.thumb-icon {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 10px;\n}\n\n.thumb-title {\n  padding-left: 12px;\n  margin: 0;\n  font-size: 0.9em;\n}\n\n/* Mobile Landscape */\n@media only screen and (max-width: 850px) and (max-height: 450px) {\n  .vid-info-container {\n    height: 275px;\n  }\n\n  .vid-title {\n    margin: 0.2em 0 0.2em 1em;\n  }\n\n  .main-src {\n    width: 350px;\n    height: 220px;\n  }\n\n  .vid-thumb {\n    width: 100%;\n  }\n\n  .vid-tags {\n    display: none;\n  }\n\n  .thumb-title {\n    padding-left: 50px;\n    margin: 0;\n    font-size: 0.7em;\n  }\n}\n\n@media only screen and (min-width: 600px) and (min-height: 450px) {\n  .vid-info-container {\n    height: 300px;\n  }\n\n  .main-src {\n    width: 400px;\n    height: 250px;\n  }\n\n  .vid-thumb {\n    width: 75%;\n  }\n}\n\n@media only screen and (min-width: 750px) and (min-height: 450px) {\n  .vid-info-container {\n    height: 300px;\n  }\n\n  .vid-title {\n    font-size: 1.2em;\n  }\n\n  .main-src {\n    width: 400px;\n    height: 250px;\n  }\n\n  .vid-thumb {\n    width: 200px;\n    padding: 0 10px;\n  }\n\n  .thumb-icon {\n    position: relative;\n  }\n}\n\n@media only screen and (min-width: 900px) and (min-height: 450px) {\n  .vid-info-container {\n    flex-flow: row nowrap;\n    width: 100%;\n  }\n\n  .vid-title {\n    font-size: 1.5em;\n  }\n\n  .main-src {\n    width: 400px;\n    height: 281px;\n    margin-left: 0.5em;\n  }\n\n  .vid-info {\n    width: 350px;\n    height: 280px;\n    padding: 10px;\n  }\n\n  .vid-desc {\n    font-size: 1.3em;\n    text-indent: 5px;\n  }\n}\n',
        '',
      ]);
  },
  function(e, t) {
    e.exports = function(e) {
      var t = 'undefined' != typeof window && window.location;
      if (!t) throw new Error('fixUrls requires window.location');
      if (!e || 'string' != typeof e) return e;
      var n = t.protocol + '//' + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var a,
            o = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((a =
                0 === o.indexOf('//')
                  ? o
                  : 0 === o.indexOf('/')
                  ? n + o
                  : r + o.replace(/^\.\//, '')),
              'url(' + JSON.stringify(a) + ')');
        },
      );
    };
  },
  function(e, t, n) {
    var r = n(34);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = {hmr: !0, transform: void 0, insertInto: void 0};
    n(6)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (t = e.exports = n(4)(!1)).i(n(5), ''),
      t.push([
        e.i,
        '.all-vids {\n  grid-column: c1 / c2;\n  grid-row: r2 / r3;\n  width: 100%;\n  min-height: calc(100vh - 150px);\n  overflow: scroll;\n}\n\n.main-vid {\n  width: 100%;\n  height: 320px;\n  margin-bottom: 0.5em;\n}\n\n.thumbs {\n  grid-column: c1 / c2;\n  grid-row: r2 / r3;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  list-style-type: none;\n  overflow: scroll;\n}\n\n.fa-2x {\n  color: #000;\n}\n\n.current-displayed {\n  height: 25px;\n  padding: 0.2em 0 0.2em 0.2em;\n  margin: 0;\n  font-weight: 200;\n  border-top: 1px dashed var(--color-dblue);\n}\n\n/* Search Error */\n.search-error {\n  grid-column: c1 / c2;\n  grid-row: r2 / r3;\n  width: 100%;\n}\n\n/* Mobile Landscape */\n@media only screen and (max-width: 850px) and (max-height: 450px) {\n  .all-vids {\n    display: grid;\n    grid-template-columns: [dvc1] 1fr [dvc2] 3fr [dvc3];\n    grid-template-rows: [dvr1] 1fr [dvr2];\n    grid-gap: 0;\n  }\n\n  .main-vid {\n    grid-column: dvc2 / dvc3;\n    grid-row: dvr1 / dvr2;\n    width: 100%;\n    margin-bottom: 0.5em;\n  }\n\n  .thumbs {\n    grid-column: dvc1 / dvc2;\n    grid-row: dvr1 / dvr2;\n    width: 100%;\n    padding: 2em 0.5em 0 0;\n    list-style-type: none;\n    border-right: 2px solid var(--color-theme);\n    overflow: scroll;\n  }\n\n  .current-displayed {\n    position: absolute;\n    top: 52px;\n    left: 10px;\n    width: 130px;\n    border: none;\n    border-radius: 10px;\n    background-color: var(--color-lgray);\n    z-index: 3;\n  }\n\n  /* Search Error */\n  .search-error {\n    grid-column: dvc2 / dvc3;\n    grid-row: dvr1 / dvr2;\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 600px) and (min-height: 450px) {\n  .main-vid {\n    height: 400px;\n  }\n\n  .thumbs {\n    height: calc(100vh - 550px);\n  }\n}\n\n@media only screen and (min-width: 750px) and (min-height: 450px) {\n  .thumbs {\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    align-items: flex-start;\n  }\n}\n\n@media only screen and (min-width: 900px) and (min-height: 450px) {\n}\n',
        '',
      ]);
  },
  function(e, t, n) {
    var r = n(36);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = {hmr: !0, transform: void 0, insertInto: void 0};
    n(6)(r, a);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (t = e.exports = n(4)(!1)).i(n(5), ''),
      t.push([
        e.i,
        '.admin-container {\n  position: relative;\n  grid-column: c1 / c2;\n  grid-row: r2 / r3;\n  width: 100%;\n  min-height: calc(100vh - 150px);\n  max-height: 100vh;\n  background-color: var(--color-lgray);\n  overflow: scroll;\n  z-index: 5;\n}\n\n#add-vid-form {\n  position: absolute;\n  top: 70px;\n  margin: 0.5em auto;\n}\n\nlabel {\n  margin: 0.8em auto 0 0;\n}\n\ninput {\n  width: 250px;\n  padding: 0.5em 0;\n  margin: 1em 0;\n}\n\n#close-login > button {\n  margin-left: 1em;\n}\n\n@media only screen and (min-width: 600px) {\n  .admin-container {\n    grid-column: c2 / c3;\n  }\n}\n',
        '',
      ]);
  },
  function(e, t, n) {
    var r = n(5);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var a = {hmr: !0, transform: void 0, insertInto: void 0};
    n(6)(r, a);
    r.locals && (e.exports = r.locals);
  },
]);
