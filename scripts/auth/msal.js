/*! @azure/msal-browser v2.31.0 2022-11-07 */

!(function (e, t) {
    typeof exports === 'object' && typeof module !== 'undefined' ? t(exports) : typeof define === 'function' && define.amd ? define(['exports'], t) : t((e = typeof globalThis !== 'undefined' ? globalThis : e || self).msal = {});
  }(this, ((e) => {
    /*! *****************************************************************************
          Copyright (c) Microsoft Corporation.
  
          Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.
  
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */
    let t = function (e, r) {
      return t = Object.setPrototypeOf || {
        __proto__: [],
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      }
          || function (e, t) {
            for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          }
      ,
      t(e, r);
    };
    function r(e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
      e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
      new n());
    }
    let n = function () {
      return n = Object.assign || function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) for (const o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }
      ,
      n.apply(this, arguments);
    };
    function o(e, t) {
      const r = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols === 'function') {
        let o = 0;
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
      }
      return r;
    }
    function i(e, t, r, n) {
      return new (r || (r = Promise))(((o, i) => {
        function a(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          let t;
          e.done ? o(e.value) : (t = e.value,
          t instanceof r ? t : new r(((e) => {
            e(t);
          }
          ))).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
      }
      ));
    }
    function a(e, t) {
      let r; let n; let o; let i; let
        a = {
          label: 0,
          sent() {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return i = {
        next: s(0),
        throw: s(1),
        return: s(2),
      },
      typeof Symbol === 'function' && (i[Symbol.iterator] = function () {
        return this;
      }
      ),
      i;
      function s(i) {
        return function (s) {
          return (function (i) {
            if (r) throw new TypeError('Generator is already executing.');
            for (; a;) {
              try {
                if (r = 1,
                n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                switch (n = 0,
                o && (i = [2 & i[0], o.value]),
                i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++,
                    {
                      value: i[1],
                      done: !1,
                    };
                  case 5:
                    a.label++,
                    n = i[1],
                    i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(),
                    a.trys.pop();
                    continue;
                  default:
                    if (!(o = a.trys,
                    (o = o.length > 0 && o[o.length - 1]) || i[0] !== 6 && i[0] !== 2)) {
                      a = 0;
                      continue;
                    }
                    if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (i[0] === 6 && a.label < o[1]) {
                      a.label = o[1],
                      o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2],
                      a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(),
                    a.trys.pop();
                    continue;
                }
                i = t.call(e, a);
              } catch (e) {
                i = [6, e],
                n = 0;
              } finally {
                r = o = 0;
              }
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0,
            };
          }([i, s]));
        };
      }
    }
    function s(e, t) {
      let r = typeof Symbol === 'function' && e[Symbol.iterator];
      if (!r) return e;
      let n; let o; const i = r.call(e); const
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value);
      } catch (e) {
        o = {
          error: e,
        };
      } finally {
        try {
          n && !n.done && (r = i.return) && r.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function c() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
      return e;
    }
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    /*! *****************************************************************************
          Copyright (c) Microsoft Corporation.
  
          Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.
  
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */
    let u = function (e, t) {
      return u = Object.setPrototypeOf || {
        __proto__: [],
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      }
          || function (e, t) {
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
      ,
      u(e, t);
    };
    function l(e, t) {
      function r() {
        this.constructor = e;
      }
      u(e, t),
      e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
      new r());
    }
    let d = function () {
      return d = Object.assign || function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) for (const o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }
      ,
      d.apply(this, arguments);
    };
    function h(e, t, r, n) {
      return new (r || (r = Promise))(((o, i) => {
        function a(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          let t;
          e.done ? o(e.value) : (t = e.value,
          t instanceof r ? t : new r(((e) => {
            e(t);
          }
          ))).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
      }
      ));
    }
    function p(e, t) {
      let r; let n; let o; let i; let
        a = {
          label: 0,
          sent() {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return i = {
        next: s(0),
        throw: s(1),
        return: s(2),
      },
      typeof Symbol === 'function' && (i[Symbol.iterator] = function () {
        return this;
      }
      ),
      i;
      function s(i) {
        return function (s) {
          return (function (i) {
            if (r) throw new TypeError('Generator is already executing.');
            for (; a;) {
              try {
                if (r = 1,
                n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                switch (n = 0,
                o && (i = [2 & i[0], o.value]),
                i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++,
                    {
                      value: i[1],
                      done: !1,
                    };
                  case 5:
                    a.label++,
                    n = i[1],
                    i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(),
                    a.trys.pop();
                    continue;
                  default:
                    if (!(o = a.trys,
                    (o = o.length > 0 && o[o.length - 1]) || i[0] !== 6 && i[0] !== 2)) {
                      a = 0;
                      continue;
                    }
                    if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }
                    if (i[0] === 6 && a.label < o[1]) {
                      a.label = o[1],
                      o = i;
                      break;
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2],
                      a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(),
                    a.trys.pop();
                    continue;
                }
                i = t.call(e, a);
              } catch (e) {
                i = [6, e],
                n = 0;
              } finally {
                r = o = 0;
              }
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0,
            };
          }([i, s]));
        };
      }
    }
    function g() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      const n = Array(e);
      let o = 0;
      for (t = 0; t < r; t++) {
        for (let i = arguments[t], a = 0, s = i.length; a < s; a++,
        o++) n[o] = i[a];
      }
      return n;
    }
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    let f; let m; let v; let y; let E; const C = {
      LIBRARY_NAME: 'MSAL.JS',
      SKU: 'msal.js.common',
      CACHE_PREFIX: 'msal',
      DEFAULT_AUTHORITY: 'https://login.microsoftonline.com/common/',
      DEFAULT_AUTHORITY_HOST: 'login.microsoftonline.com',
      DEFAULT_COMMON_TENANT: 'common',
      ADFS: 'adfs',
      DSTS: 'dstsv2',
      AAD_INSTANCE_DISCOVERY_ENDPT: 'https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=',
      RESOURCE_DELIM: '|',
      NO_ACCOUNT: 'NO_ACCOUNT',
      CLAIMS: 'claims',
      CONSUMER_UTID: '9188040d-6c67-4c5b-b112-36a304b66dad',
      OPENID_SCOPE: 'openid',
      PROFILE_SCOPE: 'profile',
      OFFLINE_ACCESS_SCOPE: 'offline_access',
      EMAIL_SCOPE: 'email',
      CODE_RESPONSE_TYPE: 'code',
      CODE_GRANT_TYPE: 'authorization_code',
      RT_GRANT_TYPE: 'refresh_token',
      FRAGMENT_RESPONSE_MODE: 'fragment',
      S256_CODE_CHALLENGE_METHOD: 'S256',
      URL_FORM_CONTENT_TYPE: 'application/x-www-form-urlencoded;charset=utf-8',
      AUTHORIZATION_PENDING: 'authorization_pending',
      NOT_DEFINED: 'not_defined',
      EMPTY_STRING: '',
      FORWARD_SLASH: '/',
      IMDS_ENDPOINT: 'http://169.254.169.254/metadata/instance/compute/location',
      IMDS_VERSION: '2020-06-01',
      IMDS_TIMEOUT: 2e3,
      AZURE_REGION_AUTO_DISCOVER_FLAG: 'TryAutoDetect',
      REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: 'login.microsoft.com',
      REGIONAL_AUTH_NON_MSI_QUERY_STRING: 'allowestsrnonmsi=true',
      KNOWN_PUBLIC_CLOUDS: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
      TOKEN_RESPONSE_TYPE: 'token',
      ID_TOKEN_RESPONSE_TYPE: 'id_token',
      SHR_NONCE_VALIDITY: 240,
    }; const _ = [C.OPENID_SCOPE, C.PROFILE_SCOPE, C.OFFLINE_ACCESS_SCOPE]; const
      T = g(_, [C.EMAIL_SCOPE]);
    !(function (e) {
      e.CONTENT_TYPE = 'Content-Type',
      e.RETRY_AFTER = 'Retry-After',
      e.CCS_HEADER = 'X-AnchorMailbox',
      e.WWWAuthenticate = 'WWW-Authenticate',
      e.AuthenticationInfo = 'Authentication-Info',
      e.X_MS_REQUEST_ID = 'x-ms-request-id';
    }(f || (f = {}))),
    (function (e) {
      e.ID_TOKEN = 'idtoken',
      e.CLIENT_INFO = 'client.info',
      e.ADAL_ID_TOKEN = 'adal.idtoken',
      e.ERROR = 'error',
      e.ERROR_DESC = 'error.description',
      e.ACTIVE_ACCOUNT = 'active-account',
      e.ACTIVE_ACCOUNT_FILTERS = 'active-account-filters';
    }(m || (m = {}))),
    (function (e) {
      e.COMMON = 'common',
      e.ORGANIZATIONS = 'organizations',
      e.CONSUMERS = 'consumers';
    }(v || (v = {}))),
    (function (e) {
      e.CLIENT_ID = 'client_id',
      e.REDIRECT_URI = 'redirect_uri',
      e.RESPONSE_TYPE = 'response_type',
      e.RESPONSE_MODE = 'response_mode',
      e.GRANT_TYPE = 'grant_type',
      e.CLAIMS = 'claims',
      e.SCOPE = 'scope',
      e.ERROR = 'error',
      e.ERROR_DESCRIPTION = 'error_description',
      e.ACCESS_TOKEN = 'access_token',
      e.ID_TOKEN = 'id_token',
      e.REFRESH_TOKEN = 'refresh_token',
      e.EXPIRES_IN = 'expires_in',
      e.STATE = 'state',
      e.NONCE = 'nonce',
      e.PROMPT = 'prompt',
      e.SESSION_STATE = 'session_state',
      e.CLIENT_INFO = 'client_info',
      e.CODE = 'code',
      e.CODE_CHALLENGE = 'code_challenge',
      e.CODE_CHALLENGE_METHOD = 'code_challenge_method',
      e.CODE_VERIFIER = 'code_verifier',
      e.CLIENT_REQUEST_ID = 'client-request-id',
      e.X_CLIENT_SKU = 'x-client-SKU',
      e.X_CLIENT_VER = 'x-client-VER',
      e.X_CLIENT_OS = 'x-client-OS',
      e.X_CLIENT_CPU = 'x-client-CPU',
      e.X_CLIENT_CURR_TELEM = 'x-client-current-telemetry',
      e.X_CLIENT_LAST_TELEM = 'x-client-last-telemetry',
      e.X_MS_LIB_CAPABILITY = 'x-ms-lib-capability',
      e.X_APP_NAME = 'x-app-name',
      e.X_APP_VER = 'x-app-ver',
      e.POST_LOGOUT_URI = 'post_logout_redirect_uri',
      e.ID_TOKEN_HINT = 'id_token_hint',
      e.DEVICE_CODE = 'device_code',
      e.CLIENT_SECRET = 'client_secret',
      e.CLIENT_ASSERTION = 'client_assertion',
      e.CLIENT_ASSERTION_TYPE = 'client_assertion_type',
      e.TOKEN_TYPE = 'token_type',
      e.REQ_CNF = 'req_cnf',
      e.OBO_ASSERTION = 'assertion',
      e.REQUESTED_TOKEN_USE = 'requested_token_use',
      e.ON_BEHALF_OF = 'on_behalf_of',
      e.FOCI = 'foci',
      e.CCS_HEADER = 'X-AnchorMailbox',
      e.RETURN_SPA_CODE = 'return_spa_code',
      e.NATIVE_BROKER = 'nativebroker',
      e.LOGOUT_HINT = 'logout_hint';
    }(y || (y = {}))),
    (function (e) {
      e.ACCESS_TOKEN = 'access_token',
      e.XMS_CC = 'xms_cc';
    }(E || (E = {})));
    let I; const
      w = {
        LOGIN: 'login',
        SELECT_ACCOUNT: 'select_account',
        CONSENT: 'consent',
        NONE: 'none',
        CREATE: 'create',
        NO_SESSION: 'no_session',
      };
    !(function (e) {
      e.ACCOUNT = 'account',
      e.SID = 'sid',
      e.LOGIN_HINT = 'login_hint',
      e.ID_TOKEN = 'id_token',
      e.DOMAIN_HINT = 'domain_hint',
      e.ORGANIZATIONS = 'organizations',
      e.CONSUMERS = 'consumers',
      e.ACCOUNT_ID = 'accountIdentifier',
      e.HOMEACCOUNT_ID = 'homeAccountIdentifier';
    }(I || (I = {})));
    let S; let A; let b; let R; let k; let N; let P; const
      O = {
        PLAIN: 'plain',
        S256: 'S256',
      };
    !(function (e) {
      e.QUERY = 'query',
      e.FRAGMENT = 'fragment',
      e.FORM_POST = 'form_post';
    }(S || (S = {}))),
    (function (e) {
      e.IMPLICIT_GRANT = 'implicit',
      e.AUTHORIZATION_CODE_GRANT = 'authorization_code',
      e.CLIENT_CREDENTIALS_GRANT = 'client_credentials',
      e.RESOURCE_OWNER_PASSWORD_GRANT = 'password',
      e.REFRESH_TOKEN_GRANT = 'refresh_token',
      e.DEVICE_CODE_GRANT = 'device_code',
      e.JWT_BEARER = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
    }(A || (A = {}))),
    (function (e) {
      e.MSSTS_ACCOUNT_TYPE = 'MSSTS',
      e.ADFS_ACCOUNT_TYPE = 'ADFS',
      e.MSAV1_ACCOUNT_TYPE = 'MSA',
      e.GENERIC_ACCOUNT_TYPE = 'Generic';
    }(b || (b = {}))),
    (function (e) {
      e.CACHE_KEY_SEPARATOR = '-',
      e.CLIENT_INFO_SEPARATOR = '.';
    }(R || (R = {}))),
    (function (e) {
      e.ID_TOKEN = 'IdToken',
      e.ACCESS_TOKEN = 'AccessToken',
      e.ACCESS_TOKEN_WITH_AUTH_SCHEME = 'AccessToken_With_AuthScheme',
      e.REFRESH_TOKEN = 'RefreshToken';
    }(k || (k = {}))),
    (function (e) {
      e.ACCOUNT = 'Account',
      e.CREDENTIAL = 'Credential',
      e.ID_TOKEN = 'IdToken',
      e.ACCESS_TOKEN = 'AccessToken',
      e.REFRESH_TOKEN = 'RefreshToken',
      e.APP_METADATA = 'AppMetadata',
      e.TEMPORARY = 'TempCache',
      e.TELEMETRY = 'Telemetry',
      e.UNDEFINED = 'Undefined',
      e.THROTTLING = 'Throttling';
    }(N || (N = {}))),
    (function (e) {
      e[e.ADFS = 1001] = 'ADFS',
      e[e.MSA = 1002] = 'MSA',
      e[e.MSSTS = 1003] = 'MSSTS',
      e[e.GENERIC = 1004] = 'GENERIC',
      e[e.ACCESS_TOKEN = 2001] = 'ACCESS_TOKEN',
      e[e.REFRESH_TOKEN = 2002] = 'REFRESH_TOKEN',
      e[e.ID_TOKEN = 2003] = 'ID_TOKEN',
      e[e.APP_METADATA = 3001] = 'APP_METADATA',
      e[e.UNDEFINED = 9999] = 'UNDEFINED';
    }(P || (P = {})));
    let M; const U = 'appmetadata'; const q = '1'; const H = 'authority-metadata'; const
      L = 86400;
    !(function (e) {
      e.CONFIG = 'config',
      e.CACHE = 'cache',
      e.NETWORK = 'network',
      e.HARDCODED_VALUES = 'hardcoded_values';
    }(M || (M = {})));
    let D; const
      x = {
        SCHEMA_VERSION: 5,
        MAX_CUR_HEADER_BYTES: 80,
        MAX_LAST_HEADER_BYTES: 330,
        MAX_CACHED_ERRORS: 50,
        CACHE_KEY: 'server-telemetry',
        CATEGORY_SEPARATOR: '|',
        VALUE_SEPARATOR: ',',
        OVERFLOW_TRUE: '1',
        OVERFLOW_FALSE: '0',
        UNKNOWN_ERROR: 'unknown_error',
      };
    e.AuthenticationScheme = void 0,
    (D = e.AuthenticationScheme || (e.AuthenticationScheme = {})).BEARER = 'Bearer',
    D.POP = 'pop',
    D.SSH = 'ssh-cert';
    let F; let K; let B; let G; let z; let j; const Y = 60; const W = 3600; const V = 'throttling'; const Q = 'retry-after, h429'; const J = 'invalid_grant'; const
      X = 'client_mismatch';
    !(function (e) {
      e.username = 'username',
      e.password = 'password';
    }(F || (F = {}))),
    (function (e) {
      e[e.httpSuccess = 200] = 'httpSuccess',
      e[e.httpBadRequest = 400] = 'httpBadRequest';
    }(K || (K = {}))),
    (function (e) {
      e.FAILED_AUTO_DETECTION = '1',
      e.INTERNAL_CACHE = '2',
      e.ENVIRONMENT_VARIABLE = '3',
      e.IMDS = '4';
    }(B || (B = {}))),
    (function (e) {
      e.CONFIGURED_MATCHES_DETECTED = '1',
      e.CONFIGURED_NO_AUTO_DETECTION = '2',
      e.CONFIGURED_NOT_DETECTED = '3',
      e.AUTO_DETECTION_REQUESTED_SUCCESSFUL = '4',
      e.AUTO_DETECTION_REQUESTED_FAILED = '5';
    }(G || (G = {}))),
    (function (e) {
      e.NO_CACHE_HIT = '0',
      e.FORCE_REFRESH = '1',
      e.NO_CACHED_ACCESS_TOKEN = '2',
      e.CACHED_ACCESS_TOKEN_EXPIRED = '3',
      e.REFRESH_CACHED_ACCESS_TOKEN = '4';
    }(z || (z = {}))),
    (function (e) {
      e.Jwt = 'JWT',
      e.Jwk = 'JWK';
    }(j || (j = {})));
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    let Z; const $ = {
      unexpectedError: {
        code: 'unexpected_error',
        desc: 'Unexpected error in authentication.',
      },
      postRequestFailed: {
        code: 'post_request_failed',
        desc: 'Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details.',
      },
    }; const ee = (function (e) {
      function t(r, n, o) {
        let i = this;
        const a = n ? `${r}: ${n}` : r;
        return i = e.call(this, a) || this,
        Object.setPrototypeOf(i, t.prototype),
        i.errorCode = r || C.EMPTY_STRING,
        i.errorMessage = n || C.EMPTY_STRING,
        i.subError = o || C.EMPTY_STRING,
        i.name = 'AuthError',
        i;
      }
      return l(t, e),
      t.prototype.setCorrelationId = function (e) {
        this.correlationId = e;
      }
      ,
      t.createUnexpectedError = function (e) {
        return new t($.unexpectedError.code, `${$.unexpectedError.desc}: ${e}`);
      }
      ,
      t.createPostRequestFailed = function (e) {
        return new t($.postRequestFailed.code, `${$.postRequestFailed.desc}: ${e}`);
      }
      ,
      t;
    }(Error)); const te = {
      createNewGuid() {
        throw ee.createUnexpectedError('Crypto interface - createNewGuid() has not been implemented');
      },
      base64Decode() {
        throw ee.createUnexpectedError('Crypto interface - base64Decode() has not been implemented');
      },
      base64Encode() {
        throw ee.createUnexpectedError('Crypto interface - base64Encode() has not been implemented');
      },
      generatePkceCodes() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Crypto interface - generatePkceCodes() has not been implemented',
            ee.createUnexpectedError('Crypto interface - generatePkceCodes() has not been implemented');
          }
          ));
        }
        ));
      },
      getPublicKeyThumbprint() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Crypto interface - getPublicKeyThumbprint() has not been implemented',
            ee.createUnexpectedError('Crypto interface - getPublicKeyThumbprint() has not been implemented');
          }
          ));
        }
        ));
      },
      removeTokenBindingKey() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Crypto interface - removeTokenBindingKey() has not been implemented',
            ee.createUnexpectedError('Crypto interface - removeTokenBindingKey() has not been implemented');
          }
          ));
        }
        ));
      },
      clearKeystore() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Crypto interface - clearKeystore() has not been implemented',
            ee.createUnexpectedError('Crypto interface - clearKeystore() has not been implemented');
          }
          ));
        }
        ));
      },
      signJwt() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Crypto interface - signJwt() has not been implemented',
            ee.createUnexpectedError('Crypto interface - signJwt() has not been implemented');
          }
          ));
        }
        ));
      },
      hashString() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Crypto interface - hashString() has not been implemented',
            ee.createUnexpectedError('Crypto interface - hashString() has not been implemented');
          }
          ));
        }
        ));
      },
    }; const re = {
      clientInfoDecodingError: {
        code: 'client_info_decoding_error',
        desc: 'The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause.',
      },
      clientInfoEmptyError: {
        code: 'client_info_empty_error',
        desc: 'The client info was empty. Please review the trace to determine the root cause.',
      },
      tokenParsingError: {
        code: 'token_parsing_error',
        desc: 'Token cannot be parsed. Please review stack trace to determine root cause.',
      },
      nullOrEmptyToken: {
        code: 'null_or_empty_token',
        desc: 'The token is null or empty. Please review the trace to determine the root cause.',
      },
      endpointResolutionError: {
        code: 'endpoints_resolution_error',
        desc: 'Error: could not resolve endpoints. Please check network and try again.',
      },
      networkError: {
        code: 'network_error',
        desc: 'Network request failed. Please check network trace to determine root cause.',
      },
      unableToGetOpenidConfigError: {
        code: 'openid_config_error',
        desc: 'Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.',
      },
      hashNotDeserialized: {
        code: 'hash_not_deserialized',
        desc: 'The hash parameters could not be deserialized. Please review the trace to determine the root cause.',
      },
      blankGuidGenerated: {
        code: 'blank_guid_generated',
        desc: 'The guid generated was blank. Please review the trace to determine the root cause.',
      },
      invalidStateError: {
        code: 'invalid_state',
        desc: 'State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState().',
      },
      stateMismatchError: {
        code: 'state_mismatch',
        desc: 'State mismatch error. Please check your network. Continued requests may cause cache overflow.',
      },
      stateNotFoundError: {
        code: 'state_not_found',
        desc: 'State not found',
      },
      nonceMismatchError: {
        code: 'nonce_mismatch',
        desc: 'Nonce mismatch error. This may be caused by a race condition in concurrent requests.',
      },
      nonceNotFoundError: {
        code: 'nonce_not_found',
        desc: 'nonce not found',
      },
      authTimeNotFoundError: {
        code: 'auth_time_not_found',
        desc: 'Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.',
      },
      maxAgeTranspiredError: {
        code: 'max_age_transpired',
        desc: 'Max Age is set to 0, or too much time has elapsed since the last end-user authentication.',
      },
      noTokensFoundError: {
        code: 'no_tokens_found',
        desc: 'No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken().',
      },
      multipleMatchingTokens: {
        code: 'multiple_matching_tokens',
        desc: 'The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.',
      },
      multipleMatchingAccounts: {
        code: 'multiple_matching_accounts',
        desc: 'The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account',
      },
      multipleMatchingAppMetadata: {
        code: 'multiple_matching_appMetadata',
        desc: 'The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata',
      },
      tokenRequestCannotBeMade: {
        code: 'request_cannot_be_made',
        desc: 'Token request cannot be made without authorization code or refresh token.',
      },
      appendEmptyScopeError: {
        code: 'cannot_append_empty_scope',
        desc: 'Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info.',
      },
      removeEmptyScopeError: {
        code: 'cannot_remove_empty_scope',
        desc: 'Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info.',
      },
      appendScopeSetError: {
        code: 'cannot_append_scopeset',
        desc: 'Cannot append ScopeSet due to error.',
      },
      emptyInputScopeSetError: {
        code: 'empty_input_scopeset',
        desc: 'Empty input ScopeSet cannot be processed.',
      },
      DeviceCodePollingCancelled: {
        code: 'device_code_polling_cancelled',
        desc: 'Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.',
      },
      DeviceCodeExpired: {
        code: 'device_code_expired',
        desc: 'Device code is expired.',
      },
      DeviceCodeUnknownError: {
        code: 'device_code_unknown_error',
        desc: 'Device code stopped polling for unknown reasons.',
      },
      NoAccountInSilentRequest: {
        code: 'no_account_in_silent_request',
        desc: 'Please pass an account object, silent flow is not supported without account information',
      },
      invalidCacheRecord: {
        code: 'invalid_cache_record',
        desc: 'Cache record object was null or undefined.',
      },
      invalidCacheEnvironment: {
        code: 'invalid_cache_environment',
        desc: 'Invalid environment when attempting to create cache entry',
      },
      noAccountFound: {
        code: 'no_account_found',
        desc: 'No account found in cache for given key.',
      },
      CachePluginError: {
        code: 'no cache plugin set on CacheManager',
        desc: 'ICachePlugin needs to be set before using readFromStorage or writeFromStorage',
      },
      noCryptoObj: {
        code: 'no_crypto_object',
        desc: 'No crypto object detected. This is required for the following operation: ',
      },
      invalidCacheType: {
        code: 'invalid_cache_type',
        desc: 'Invalid cache type',
      },
      unexpectedAccountType: {
        code: 'unexpected_account_type',
        desc: 'Unexpected account type.',
      },
      unexpectedCredentialType: {
        code: 'unexpected_credential_type',
        desc: 'Unexpected credential type.',
      },
      invalidAssertion: {
        code: 'invalid_assertion',
        desc: 'Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515',
      },
      invalidClientCredential: {
        code: 'invalid_client_credential',
        desc: 'Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential',
      },
      tokenRefreshRequired: {
        code: 'token_refresh_required',
        desc: 'Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.',
      },
      userTimeoutReached: {
        code: 'user_timeout_reached',
        desc: 'User defined timeout for device code polling reached',
      },
      tokenClaimsRequired: {
        code: 'token_claims_cnf_required_for_signedjwt',
        desc: 'Cannot generate a POP jwt if the token_claims are not populated',
      },
      noAuthorizationCodeFromServer: {
        code: 'authorization_code_missing_from_server_response',
        desc: 'Server response does not contain an authorization code to proceed',
      },
      noAzureRegionDetected: {
        code: 'no_azure_region_detected',
        desc: 'No azure region was detected and no fallback was made available',
      },
      accessTokenEntityNullError: {
        code: 'access_token_entity_null',
        desc: 'Access token entity is null, please check logs and cache to ensure a valid access token is present.',
      },
      bindingKeyNotRemovedError: {
        code: 'binding_key_not_removed',
        desc: "Could not remove the credential's binding key from storage.",
      },
      logoutNotSupported: {
        code: 'end_session_endpoint_not_supported',
        desc: 'Provided authority does not support logout.',
      },
      keyIdMissing: {
        code: 'key_id_missing',
        desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
      },
    }; const ne = (function (e) {
      function t(r, n) {
        const o = e.call(this, r, n) || this;
        return o.name = 'ClientAuthError',
        Object.setPrototypeOf(o, t.prototype),
        o;
      }
      return l(t, e),
      t.createClientInfoDecodingError = function (e) {
        return new t(re.clientInfoDecodingError.code, `${re.clientInfoDecodingError.desc} Failed with error: ${e}`);
      }
      ,
      t.createClientInfoEmptyError = function () {
        return new t(re.clientInfoEmptyError.code, `${re.clientInfoEmptyError.desc}`);
      }
      ,
      t.createTokenParsingError = function (e) {
        return new t(re.tokenParsingError.code, `${re.tokenParsingError.desc} Failed with error: ${e}`);
      }
      ,
      t.createTokenNullOrEmptyError = function (e) {
        return new t(re.nullOrEmptyToken.code, `${re.nullOrEmptyToken.desc} Raw Token Value: ${e}`);
      }
      ,
      t.createEndpointDiscoveryIncompleteError = function (e) {
        return new t(re.endpointResolutionError.code, `${re.endpointResolutionError.desc} Detail: ${e}`);
      }
      ,
      t.createNetworkError = function (e, r) {
        return new t(re.networkError.code, `${re.networkError.desc} | Fetch client threw: ${r} | Attempted to reach: ${e.split('?')[0]}`);
      }
      ,
      t.createUnableToGetOpenidConfigError = function (e) {
        return new t(re.unableToGetOpenidConfigError.code, `${re.unableToGetOpenidConfigError.desc} Attempted to retrieve endpoints from: ${e}`);
      }
      ,
      t.createHashNotDeserializedError = function (e) {
        return new t(re.hashNotDeserialized.code, `${re.hashNotDeserialized.desc} Given Object: ${e}`);
      }
      ,
      t.createInvalidStateError = function (e, r) {
        return new t(re.invalidStateError.code, `${re.invalidStateError.desc} Invalid State: ${e}, Root Err: ${r}`);
      }
      ,
      t.createStateMismatchError = function () {
        return new t(re.stateMismatchError.code, re.stateMismatchError.desc);
      }
      ,
      t.createStateNotFoundError = function (e) {
        return new t(re.stateNotFoundError.code, `${re.stateNotFoundError.desc}:  ${e}`);
      }
      ,
      t.createNonceMismatchError = function () {
        return new t(re.nonceMismatchError.code, re.nonceMismatchError.desc);
      }
      ,
      t.createAuthTimeNotFoundError = function () {
        return new t(re.authTimeNotFoundError.code, re.authTimeNotFoundError.desc);
      }
      ,
      t.createMaxAgeTranspiredError = function () {
        return new t(re.maxAgeTranspiredError.code, re.maxAgeTranspiredError.desc);
      }
      ,
      t.createNonceNotFoundError = function (e) {
        return new t(re.nonceNotFoundError.code, `${re.nonceNotFoundError.desc}:  ${e}`);
      }
      ,
      t.createMultipleMatchingTokensInCacheError = function () {
        return new t(re.multipleMatchingTokens.code, `${re.multipleMatchingTokens.desc}.`);
      }
      ,
      t.createMultipleMatchingAccountsInCacheError = function () {
        return new t(re.multipleMatchingAccounts.code, re.multipleMatchingAccounts.desc);
      }
      ,
      t.createMultipleMatchingAppMetadataInCacheError = function () {
        return new t(re.multipleMatchingAppMetadata.code, re.multipleMatchingAppMetadata.desc);
      }
      ,
      t.createTokenRequestCannotBeMadeError = function () {
        return new t(re.tokenRequestCannotBeMade.code, re.tokenRequestCannotBeMade.desc);
      }
      ,
      t.createAppendEmptyScopeToSetError = function (e) {
        return new t(re.appendEmptyScopeError.code, `${re.appendEmptyScopeError.desc} Given Scope: ${e}`);
      }
      ,
      t.createRemoveEmptyScopeFromSetError = function (e) {
        return new t(re.removeEmptyScopeError.code, `${re.removeEmptyScopeError.desc} Given Scope: ${e}`);
      }
      ,
      t.createAppendScopeSetError = function (e) {
        return new t(re.appendScopeSetError.code, `${re.appendScopeSetError.desc} Detail Error: ${e}`);
      }
      ,
      t.createEmptyInputScopeSetError = function () {
        return new t(re.emptyInputScopeSetError.code, `${re.emptyInputScopeSetError.desc}`);
      }
      ,
      t.createDeviceCodeCancelledError = function () {
        return new t(re.DeviceCodePollingCancelled.code, `${re.DeviceCodePollingCancelled.desc}`);
      }
      ,
      t.createDeviceCodeExpiredError = function () {
        return new t(re.DeviceCodeExpired.code, `${re.DeviceCodeExpired.desc}`);
      }
      ,
      t.createDeviceCodeUnknownError = function () {
        return new t(re.DeviceCodeUnknownError.code, `${re.DeviceCodeUnknownError.desc}`);
      }
      ,
      t.createNoAccountInSilentRequestError = function () {
        return new t(re.NoAccountInSilentRequest.code, `${re.NoAccountInSilentRequest.desc}`);
      }
      ,
      t.createNullOrUndefinedCacheRecord = function () {
        return new t(re.invalidCacheRecord.code, re.invalidCacheRecord.desc);
      }
      ,
      t.createInvalidCacheEnvironmentError = function () {
        return new t(re.invalidCacheEnvironment.code, re.invalidCacheEnvironment.desc);
      }
      ,
      t.createNoAccountFoundError = function () {
        return new t(re.noAccountFound.code, re.noAccountFound.desc);
      }
      ,
      t.createCachePluginError = function () {
        return new t(re.CachePluginError.code, `${re.CachePluginError.desc}`);
      }
      ,
      t.createNoCryptoObjectError = function (e) {
        return new t(re.noCryptoObj.code, `${re.noCryptoObj.desc}${e}`);
      }
      ,
      t.createInvalidCacheTypeError = function () {
        return new t(re.invalidCacheType.code, `${re.invalidCacheType.desc}`);
      }
      ,
      t.createUnexpectedAccountTypeError = function () {
        return new t(re.unexpectedAccountType.code, `${re.unexpectedAccountType.desc}`);
      }
      ,
      t.createUnexpectedCredentialTypeError = function () {
        return new t(re.unexpectedCredentialType.code, `${re.unexpectedCredentialType.desc}`);
      }
      ,
      t.createInvalidAssertionError = function () {
        return new t(re.invalidAssertion.code, `${re.invalidAssertion.desc}`);
      }
      ,
      t.createInvalidCredentialError = function () {
        return new t(re.invalidClientCredential.code, `${re.invalidClientCredential.desc}`);
      }
      ,
      t.createRefreshRequiredError = function () {
        return new t(re.tokenRefreshRequired.code, re.tokenRefreshRequired.desc);
      }
      ,
      t.createUserTimeoutReachedError = function () {
        return new t(re.userTimeoutReached.code, re.userTimeoutReached.desc);
      }
      ,
      t.createTokenClaimsRequiredError = function () {
        return new t(re.tokenClaimsRequired.code, re.tokenClaimsRequired.desc);
      }
      ,
      t.createNoAuthCodeInServerResponseError = function () {
        return new t(re.noAuthorizationCodeFromServer.code, re.noAuthorizationCodeFromServer.desc);
      }
      ,
      t.createBindingKeyNotRemovedError = function () {
        return new t(re.bindingKeyNotRemovedError.code, re.bindingKeyNotRemovedError.desc);
      }
      ,
      t.createLogoutNotSupportedError = function () {
        return new t(re.logoutNotSupported.code, re.logoutNotSupported.desc);
      }
      ,
      t.createKeyIdMissingError = function () {
        return new t(re.keyIdMissing.code, re.keyIdMissing.desc);
      }
      ,
      t;
    }(ee)); const
      oe = (function () {
        function e() {}
        return e.decodeAuthToken = function (t) {
          if (e.isEmpty(t)) throw ne.createTokenNullOrEmptyError(t);
          const r = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(t);
          if (!r || r.length < 4) throw ne.createTokenParsingError(`Given token is malformed: ${JSON.stringify(t)}`);
          return {
            header: r[1],
            JWSPayload: r[2],
            JWSSig: r[3],
          };
        }
        ,
        e.isEmpty = function (e) {
          return void 0 === e || !e || e.length === 0;
        }
        ,
        e.isEmptyObj = function (t) {
          if (t && !e.isEmpty(t)) {
            try {
              const r = JSON.parse(t);
              return Object.keys(r).length === 0;
            } catch (e) {}
          }
          return !0;
        }
        ,
        e.startsWith = function (e, t) {
          return e.indexOf(t) === 0;
        }
        ,
        e.endsWith = function (e, t) {
          return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
        }
        ,
        e.queryStringToObject = function (e) {
          const t = {};
          const r = e.split('&');
          const n = function (e) {
            return decodeURIComponent(e.replace(/\+/g, ' '));
          };
          return r.forEach(((e) => {
            if (e.trim()) {
              const r = e.split(/=(.+)/g, 2);
              const o = r[0];
              const i = r[1];
              o && i && (t[n(o)] = n(i));
            }
          }
          )),
          t;
        }
        ,
        e.trimArrayEntries = function (e) {
          return e.map(((e) => e.trim()
          ));
        }
        ,
        e.removeEmptyStringsFromArray = function (t) {
          return t.filter(((t) => !e.isEmpty(t)
          ));
        }
        ,
        e.jsonParseHelper = function (e) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return null;
          }
        }
        ,
        e.matchPattern = function (e, t) {
          return new RegExp(e.replace(/\\/g, '\\\\').replace(/\*/g, '[^ ]*').replace(/\?/g, '\\?')).test(t);
        }
        ,
        e;
      }());
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    e.LogLevel = void 0,
    (Z = e.LogLevel || (e.LogLevel = {}))[Z.Error = 0] = 'Error',
    Z[Z.Warning = 1] = 'Warning',
    Z[Z.Info = 2] = 'Info',
    Z[Z.Verbose = 3] = 'Verbose',
    Z[Z.Trace = 4] = 'Trace';
    let ie; const ae = (function () {
      function t(t, r, n) {
        this.level = e.LogLevel.Info;
        this.localCallback = t.loggerCallback || function () {}
        ,
        this.piiLoggingEnabled = t.piiLoggingEnabled || !1,
        this.level = typeof t.logLevel === 'number' ? t.logLevel : e.LogLevel.Info,
        this.correlationId = t.correlationId || C.EMPTY_STRING,
        this.packageName = r || C.EMPTY_STRING,
        this.packageVersion = n || C.EMPTY_STRING;
      }
      return t.prototype.clone = function (e, r, n) {
        return new t({
          loggerCallback: this.localCallback,
          piiLoggingEnabled: this.piiLoggingEnabled,
          logLevel: this.level,
          correlationId: n || this.correlationId,
        }, e, r);
      }
      ,
      t.prototype.logMessage = function (t, r) {
        if (!(r.logLevel > this.level || !this.piiLoggingEnabled && r.containsPii)) {
          const n = (new Date()).toUTCString();
          const o = `${oe.isEmpty(r.correlationId) ? oe.isEmpty(this.correlationId) ? `[${n}]` : `[${n}] : [${this.correlationId}]` : `[${n}] : [${r.correlationId}]`} : ${this.packageName}@${this.packageVersion} : ${e.LogLevel[r.logLevel]} - ${t}`;
          this.executeCallback(r.logLevel, o, r.containsPii || !1);
        }
      }
      ,
      t.prototype.executeCallback = function (e, t, r) {
        this.localCallback && this.localCallback(e, t, r);
      }
      ,
      t.prototype.error = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Error,
          containsPii: !1,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.errorPii = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Error,
          containsPii: !0,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.warning = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Warning,
          containsPii: !1,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.warningPii = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Warning,
          containsPii: !0,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.info = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Info,
          containsPii: !1,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.infoPii = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Info,
          containsPii: !0,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.verbose = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Verbose,
          containsPii: !1,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.verbosePii = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Verbose,
          containsPii: !0,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.trace = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Trace,
          containsPii: !1,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.tracePii = function (t, r) {
        this.logMessage(t, {
          logLevel: e.LogLevel.Trace,
          containsPii: !0,
          correlationId: r || C.EMPTY_STRING,
        });
      }
      ,
      t.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled || !1;
      }
      ,
      t;
    }()); const
      se = '8.0.0';
      /*! @azure/msal-common v8.0.0 2022-11-07 */
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    e.AzureCloudInstance = void 0,
    (ie = e.AzureCloudInstance || (e.AzureCloudInstance = {}))[ie.None = 0] = 'None',
    ie.AzurePublic = 'https://login.microsoftonline.com',
    ie.AzurePpe = 'https://login.windows-ppe.net',
    ie.AzureChina = 'https://login.chinacloudapi.cn',
    ie.AzureGermany = 'https://login.microsoftonline.de',
    ie.AzureUsGovernment = 'https://login.microsoftonline.us';
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    let ce; const ue = (function () {
      function t() {}
      return t.prototype.generateAccountId = function () {
        return t.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
      }
      ,
      t.prototype.generateCredentialId = function () {
        return t.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
      }
      ,
      t.prototype.generateTarget = function () {
        return t.generateTargetForCacheKey(this.target);
      }
      ,
      t.prototype.generateCredentialKey = function () {
        return t.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
      }
      ,
      t.prototype.generateType = function () {
        switch (this.credentialType) {
          case k.ID_TOKEN:
            return P.ID_TOKEN;
          case k.ACCESS_TOKEN:
          case k.ACCESS_TOKEN_WITH_AUTH_SCHEME:
            return P.ACCESS_TOKEN;
          case k.REFRESH_TOKEN:
            return P.REFRESH_TOKEN;
          default:
            throw ne.createUnexpectedCredentialTypeError();
        }
      }
      ,
      t.getCredentialType = function (e) {
        return e.indexOf(k.ACCESS_TOKEN.toLowerCase()) !== -1 ? e.indexOf(k.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) !== -1 ? k.ACCESS_TOKEN_WITH_AUTH_SCHEME : k.ACCESS_TOKEN : e.indexOf(k.ID_TOKEN.toLowerCase()) !== -1 ? k.ID_TOKEN : e.indexOf(k.REFRESH_TOKEN.toLowerCase()) !== -1 ? k.REFRESH_TOKEN : C.NOT_DEFINED;
      }
      ,
      t.generateCredentialCacheKey = function (e, t, r, n, o, i, a, s, c) {
        return [this.generateAccountIdForCacheKey(e, t), this.generateCredentialIdForCacheKey(r, n, o, a), this.generateTargetForCacheKey(i), this.generateClaimsHashForCacheKey(c), this.generateSchemeForCacheKey(s)].join(R.CACHE_KEY_SEPARATOR).toLowerCase();
      }
      ,
      t.generateAccountIdForCacheKey = function (e, t) {
        return [e, t].join(R.CACHE_KEY_SEPARATOR).toLowerCase();
      }
      ,
      t.generateCredentialIdForCacheKey = function (e, t, r, n) {
        return [e, e === k.REFRESH_TOKEN && n || t, r || C.EMPTY_STRING].join(R.CACHE_KEY_SEPARATOR).toLowerCase();
      }
      ,
      t.generateTargetForCacheKey = function (e) {
        return (e || C.EMPTY_STRING).toLowerCase();
      }
      ,
      t.generateClaimsHashForCacheKey = function (e) {
        return (e || C.EMPTY_STRING).toLowerCase();
      }
      ,
      t.generateSchemeForCacheKey = function (t) {
        return t && t.toLowerCase() !== e.AuthenticationScheme.BEARER.toLowerCase() ? t.toLowerCase() : C.EMPTY_STRING;
      }
      ,
      t;
    }()); const le = {
      redirectUriNotSet: {
        code: 'redirect_uri_empty',
        desc: 'A redirect URI is required for all calls, and none has been set.',
      },
      postLogoutUriNotSet: {
        code: 'post_logout_uri_empty',
        desc: 'A post logout redirect has not been set.',
      },
      claimsRequestParsingError: {
        code: 'claims_request_parsing_error',
        desc: 'Could not parse the given claims request object.',
      },
      authorityUriInsecure: {
        code: 'authority_uri_insecure',
        desc: 'Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options',
      },
      urlParseError: {
        code: 'url_parse_error',
        desc: 'URL could not be parsed into appropriate segments.',
      },
      urlEmptyError: {
        code: 'empty_url_error',
        desc: 'URL was empty or null.',
      },
      emptyScopesError: {
        code: 'empty_input_scopes_error',
        desc: 'Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.',
      },
      nonArrayScopesError: {
        code: 'nonarray_input_scopes_error',
        desc: 'Scopes cannot be passed as non-array.',
      },
      clientIdSingleScopeError: {
        code: 'clientid_input_scopes_error',
        desc: 'Client ID can only be provided as a single scope.',
      },
      invalidPrompt: {
        code: 'invalid_prompt_value',
        desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create', 'none' and 'no_session'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
      },
      invalidClaimsRequest: {
        code: 'invalid_claims',
        desc: 'Given claims parameter must be a stringified JSON object.',
      },
      tokenRequestEmptyError: {
        code: 'token_request_empty',
        desc: 'Token request was empty and not found in cache.',
      },
      logoutRequestEmptyError: {
        code: 'logout_request_empty',
        desc: 'The logout request was null or undefined.',
      },
      invalidCodeChallengeMethod: {
        code: 'invalid_code_challenge_method',
        desc: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
      },
      invalidCodeChallengeParams: {
        code: 'pkce_params_missing',
        desc: 'Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request',
      },
      invalidCloudDiscoveryMetadata: {
        code: 'invalid_cloud_discovery_metadata',
        desc: 'Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields',
      },
      invalidAuthorityMetadata: {
        code: 'invalid_authority_metadata',
        desc: 'Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.',
      },
      untrustedAuthority: {
        code: 'untrusted_authority',
        desc: 'The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.',
      },
      invalidAzureCloudInstance: {
        code: 'invalid_azure_cloud_instance',
        desc: 'Invalid AzureCloudInstance provided. Please refer MSAL JS docs: aks.ms/msaljs/azure_cloud_instance for valid values',
      },
      missingSshJwk: {
        code: 'missing_ssh_jwk',
        desc: 'Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.',
      },
      missingSshKid: {
        code: 'missing_ssh_kid',
        desc: 'Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.',
      },
      missingNonceAuthenticationHeader: {
        code: 'missing_nonce_authentication_header',
        desc: 'Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.',
      },
      invalidAuthenticationHeader: {
        code: 'invalid_authentication_header',
        desc: 'Invalid authentication header provided',
      },
    }; const de = (function (e) {
      function t(r, n) {
        const o = e.call(this, r, n) || this;
        return o.name = 'ClientConfigurationError',
        Object.setPrototypeOf(o, t.prototype),
        o;
      }
      return l(t, e),
      t.createRedirectUriEmptyError = function () {
        return new t(le.redirectUriNotSet.code, le.redirectUriNotSet.desc);
      }
      ,
      t.createPostLogoutRedirectUriEmptyError = function () {
        return new t(le.postLogoutUriNotSet.code, le.postLogoutUriNotSet.desc);
      }
      ,
      t.createClaimsRequestParsingError = function (e) {
        return new t(le.claimsRequestParsingError.code, `${le.claimsRequestParsingError.desc} Given value: ${e}`);
      }
      ,
      t.createInsecureAuthorityUriError = function (e) {
        return new t(le.authorityUriInsecure.code, `${le.authorityUriInsecure.desc} Given URI: ${e}`);
      }
      ,
      t.createUrlParseError = function (e) {
        return new t(le.urlParseError.code, `${le.urlParseError.desc} Given Error: ${e}`);
      }
      ,
      t.createUrlEmptyError = function () {
        return new t(le.urlEmptyError.code, le.urlEmptyError.desc);
      }
      ,
      t.createEmptyScopesArrayError = function () {
        return new t(le.emptyScopesError.code, `${le.emptyScopesError.desc}`);
      }
      ,
      t.createClientIdSingleScopeError = function (e) {
        return new t(le.clientIdSingleScopeError.code, `${le.clientIdSingleScopeError.desc} Given Scopes: ${e}`);
      }
      ,
      t.createInvalidPromptError = function (e) {
        return new t(le.invalidPrompt.code, `${le.invalidPrompt.desc} Given value: ${e}`);
      }
      ,
      t.createInvalidClaimsRequestError = function () {
        return new t(le.invalidClaimsRequest.code, le.invalidClaimsRequest.desc);
      }
      ,
      t.createEmptyLogoutRequestError = function () {
        return new t(le.logoutRequestEmptyError.code, le.logoutRequestEmptyError.desc);
      }
      ,
      t.createEmptyTokenRequestError = function () {
        return new t(le.tokenRequestEmptyError.code, le.tokenRequestEmptyError.desc);
      }
      ,
      t.createInvalidCodeChallengeMethodError = function () {
        return new t(le.invalidCodeChallengeMethod.code, le.invalidCodeChallengeMethod.desc);
      }
      ,
      t.createInvalidCodeChallengeParamsError = function () {
        return new t(le.invalidCodeChallengeParams.code, le.invalidCodeChallengeParams.desc);
      }
      ,
      t.createInvalidCloudDiscoveryMetadataError = function () {
        return new t(le.invalidCloudDiscoveryMetadata.code, le.invalidCloudDiscoveryMetadata.desc);
      }
      ,
      t.createInvalidAuthorityMetadataError = function () {
        return new t(le.invalidAuthorityMetadata.code, le.invalidAuthorityMetadata.desc);
      }
      ,
      t.createUntrustedAuthorityError = function () {
        return new t(le.untrustedAuthority.code, le.untrustedAuthority.desc);
      }
      ,
      t.createInvalidAzureCloudInstanceError = function () {
        return new t(le.invalidAzureCloudInstance.code, le.invalidAzureCloudInstance.desc);
      }
      ,
      t.createMissingSshJwkError = function () {
        return new t(le.missingSshJwk.code, le.missingSshJwk.desc);
      }
      ,
      t.createMissingSshKidError = function () {
        return new t(le.missingSshKid.code, le.missingSshKid.desc);
      }
      ,
      t.createMissingNonceAuthenticationHeadersError = function () {
        return new t(le.missingNonceAuthenticationHeader.code, le.missingNonceAuthenticationHeader.desc);
      }
      ,
      t.createInvalidAuthenticationHeaderError = function (e, r) {
        return new t(le.invalidAuthenticationHeader.code, `${le.invalidAuthenticationHeader.desc}. Invalid header: ${e}. Details: ${r}`);
      }
      ,
      t;
    }(ne)); const
      he = (function () {
        function e(e) {
          const t = this;
          const r = e ? oe.trimArrayEntries(g(e)) : [];
          const n = r ? oe.removeEmptyStringsFromArray(r) : [];
          this.validateInputScopes(n),
          this.scopes = new Set(),
          n.forEach(((e) => t.scopes.add(e)
          ));
        }
        return e.fromString = function (t) {
          return new e((t || C.EMPTY_STRING).split(' '));
        }
        ,
        e.prototype.validateInputScopes = function (e) {
          if (!e || e.length < 1) throw de.createEmptyScopesArrayError();
        }
        ,
        e.prototype.containsScope = function (t) {
          const r = new e(this.printScopesLowerCase().split(' '));
          return !oe.isEmpty(t) && r.scopes.has(t.toLowerCase());
        }
        ,
        e.prototype.containsScopeSet = function (e) {
          const t = this;
          return !(!e || e.scopes.size <= 0) && (this.scopes.size >= e.scopes.size && e.asArray().every(((e) => t.containsScope(e)
          )));
        }
        ,
        e.prototype.containsOnlyOIDCScopes = function () {
          const e = this;
          let t = 0;
          return T.forEach(((r) => {
            e.containsScope(r) && (t += 1);
          }
          )),
          this.scopes.size === t;
        }
        ,
        e.prototype.appendScope = function (e) {
          oe.isEmpty(e) || this.scopes.add(e.trim());
        }
        ,
        e.prototype.appendScopes = function (e) {
          const t = this;
          try {
            e.forEach(((e) => t.appendScope(e)
            ));
          } catch (e) {
            throw ne.createAppendScopeSetError(e);
          }
        }
        ,
        e.prototype.removeScope = function (e) {
          if (oe.isEmpty(e)) throw ne.createRemoveEmptyScopeFromSetError(e);
          this.scopes.delete(e.trim());
        }
        ,
        e.prototype.removeOIDCScopes = function () {
          const e = this;
          T.forEach(((t) => {
            e.scopes.delete(t);
          }
          ));
        }
        ,
        e.prototype.unionScopeSets = function (e) {
          if (!e) throw ne.createEmptyInputScopeSetError();
          const t = new Set();
          return e.scopes.forEach(((e) => t.add(e.toLowerCase())
          )),
          this.scopes.forEach(((e) => t.add(e.toLowerCase())
          )),
          t;
        }
        ,
        e.prototype.intersectingScopeSets = function (e) {
          if (!e) throw ne.createEmptyInputScopeSetError();
          e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
          const t = this.unionScopeSets(e);
          const r = e.getScopeCount();
          const n = this.getScopeCount();
          return t.size < n + r;
        }
        ,
        e.prototype.getScopeCount = function () {
          return this.scopes.size;
        }
        ,
        e.prototype.asArray = function () {
          const e = [];
          return this.scopes.forEach(((t) => e.push(t)
          )),
          e;
        }
        ,
        e.prototype.printScopes = function () {
          return this.scopes ? this.asArray().join(' ') : C.EMPTY_STRING;
        }
        ,
        e.prototype.printScopesLowerCase = function () {
          return this.printScopes().toLowerCase();
        }
        ,
        e;
      }());
      /*! @azure/msal-common v8.0.0 2022-11-07 */
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    function pe(e, t) {
      if (oe.isEmpty(e)) throw ne.createClientInfoEmptyError();
      try {
        const r = t.base64Decode(e);
        return JSON.parse(r);
      } catch (e) {
        throw ne.createClientInfoDecodingError(e.message);
      }
    }
    function ge(e) {
      if (oe.isEmpty(e)) throw ne.createClientInfoDecodingError('Home account ID was empty.');
      const t = e.split(R.CLIENT_INFO_SEPARATOR, 2);
      return {
        uid: t[0],
        utid: t.length < 2 ? C.EMPTY_STRING : t[1],
      };
    }
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    !(function (e) {
      e[e.Default = 0] = 'Default',
      e[e.Adfs = 1] = 'Adfs',
      e[e.Dsts = 2] = 'Dsts';
    }(ce || (ce = {})));
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    const fe = (function () {
      function e() {}
      return e.prototype.generateAccountId = function () {
        return [this.homeAccountId, this.environment].join(R.CACHE_KEY_SEPARATOR).toLowerCase();
      }
      ,
      e.prototype.generateAccountKey = function () {
        return e.generateAccountCacheKey({
          homeAccountId: this.homeAccountId,
          environment: this.environment,
          tenantId: this.realm,
          username: this.username,
          localAccountId: this.localAccountId,
        });
      }
      ,
      e.prototype.generateType = function () {
        switch (this.authorityType) {
          case b.ADFS_ACCOUNT_TYPE:
            return P.ADFS;
          case b.MSAV1_ACCOUNT_TYPE:
            return P.MSA;
          case b.MSSTS_ACCOUNT_TYPE:
            return P.MSSTS;
          case b.GENERIC_ACCOUNT_TYPE:
            return P.GENERIC;
          default:
            throw ne.createUnexpectedAccountTypeError();
        }
      }
      ,
      e.prototype.getAccountInfo = function () {
        return {
          homeAccountId: this.homeAccountId,
          environment: this.environment,
          tenantId: this.realm,
          username: this.username,
          localAccountId: this.localAccountId,
          name: this.name,
          idTokenClaims: this.idTokenClaims,
          nativeAccountId: this.nativeAccountId,
        };
      }
      ,
      e.generateAccountCacheKey = function (e) {
        return [e.homeAccountId, e.environment || C.EMPTY_STRING, e.tenantId || C.EMPTY_STRING].join(R.CACHE_KEY_SEPARATOR).toLowerCase();
      }
      ,
      e.createAccount = function (t, r, n, o, i, a, s, c) {
        let u; let l; let d; let h; let p; let g; const
          f = new e();
        f.authorityType = b.MSSTS_ACCOUNT_TYPE,
        f.clientInfo = t,
        f.homeAccountId = r,
        f.nativeAccountId = c;
        const m = s || o && o.getPreferredCache();
        if (!m) throw ne.createInvalidCacheEnvironmentError();
        if (f.environment = m,
        f.realm = ((u = n == null ? void 0 : n.claims) === null || void 0 === u ? void 0 : u.tid) || C.EMPTY_STRING,
        n) {
          f.idTokenClaims = n.claims,
          f.localAccountId = ((l = n == null ? void 0 : n.claims) === null || void 0 === l ? void 0 : l.oid) || ((d = n == null ? void 0 : n.claims) === null || void 0 === d ? void 0 : d.sub) || C.EMPTY_STRING;
          const v = (h = n == null ? void 0 : n.claims) === null || void 0 === h ? void 0 : h.preferred_username;
          const y = ((p = n == null ? void 0 : n.claims) === null || void 0 === p ? void 0 : p.emails) ? n.claims.emails[0] : null;
          f.username = v || y || C.EMPTY_STRING,
          f.name = (g = n == null ? void 0 : n.claims) === null || void 0 === g ? void 0 : g.name;
        }
        return f.cloudGraphHostName = i,
        f.msGraphHost = a,
        f;
      }
      ,
      e.createGenericAccount = function (t, r, n, o, i, a) {
        let s; let c; let u; let l; const
          d = new e();
        d.authorityType = n && n.authorityType === ce.Adfs ? b.ADFS_ACCOUNT_TYPE : b.GENERIC_ACCOUNT_TYPE,
        d.homeAccountId = t,
        d.realm = C.EMPTY_STRING;
        const h = a || n && n.getPreferredCache();
        if (!h) throw ne.createInvalidCacheEnvironmentError();
        return r && (d.localAccountId = ((s = r == null ? void 0 : r.claims) === null || void 0 === s ? void 0 : s.oid) || ((c = r == null ? void 0 : r.claims) === null || void 0 === c ? void 0 : c.sub) || C.EMPTY_STRING,
        d.username = ((u = r == null ? void 0 : r.claims) === null || void 0 === u ? void 0 : u.upn) || C.EMPTY_STRING,
        d.name = ((l = r == null ? void 0 : r.claims) === null || void 0 === l ? void 0 : l.name) || C.EMPTY_STRING,
        d.idTokenClaims = r == null ? void 0 : r.claims),
        d.environment = h,
        d.cloudGraphHostName = o,
        d.msGraphHost = i,
        d;
      }
      ,
      e.generateHomeAccountId = function (e, t, r, n, o) {
        let i; const
          a = ((i = o == null ? void 0 : o.claims) === null || void 0 === i ? void 0 : i.sub) ? o.claims.sub : C.EMPTY_STRING;
        if (t === ce.Adfs || t === ce.Dsts) return a;
        if (e) {
          try {
            const s = pe(e, n);
            if (!oe.isEmpty(s.uid) && !oe.isEmpty(s.utid)) return `${s.uid}${R.CLIENT_INFO_SEPARATOR}${s.utid}`;
          } catch (e) {}
        }
        return r.verbose('No client info in response'),
        a;
      }
      ,
      e.isAccountEntity = function (e) {
        return !!e && (e.hasOwnProperty('homeAccountId') && e.hasOwnProperty('environment') && e.hasOwnProperty('realm') && e.hasOwnProperty('localAccountId') && e.hasOwnProperty('username') && e.hasOwnProperty('authorityType'));
      }
      ,
      e.accountInfoIsEqual = function (e, t, r) {
        if (!e || !t) return !1;
        let n = !0;
        if (r) {
          const o = e.idTokenClaims || {};
          const i = t.idTokenClaims || {};
          n = o.iat === i.iat && o.nonce === i.nonce;
        }
        return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && n;
      }
      ,
      e;
    }());
    const me = (function () {
      function e(t, r) {
        if (oe.isEmpty(t)) throw ne.createTokenNullOrEmptyError(t);
        this.rawToken = t,
        this.claims = e.extractTokenClaims(t, r);
      }
      return e.extractTokenClaims = function (e, t) {
        const r = oe.decodeAuthToken(e);
        try {
          const n = r.JWSPayload;
          const o = t.base64Decode(n);
          return JSON.parse(o);
        } catch (e) {
          throw ne.createTokenParsingError(e);
        }
      }
      ,
      e.checkMaxAge = function (e, t) {
        if (t === 0 || Date.now() - 3e5 > e + t) throw ne.createMaxAgeTranspiredError();
      }
      ,
      e;
    }());
    const ve = (function () {
      function t(e, t) {
        this.clientId = e,
        this.cryptoImpl = t;
      }
      return t.prototype.getAllAccounts = function () {
        const e = this;
        const r = this.getAccountsFilteredBy();
        const n = Object.keys(r).map(((e) => r[e]
        ));
        return n.length < 1 ? [] : n.map(((r) => {
          const n = t.toObject(new fe(), r).getAccountInfo();
          const o = e.readIdTokenFromCache(e.clientId, n);
          return o && !n.idTokenClaims && (n.idToken = o.secret,
          n.idTokenClaims = new me(o.secret, e.cryptoImpl).claims),
          n;
        }
        ));
      }
      ,
      t.prototype.saveCacheRecord = function (e) {
        return h(this, void 0, void 0, (function () {
          return p(this, (function (t) {
            switch (t.label) {
              case 0:
                if (!e) throw ne.createNullOrUndefinedCacheRecord();
                return e.account && this.setAccount(e.account),
                e.idToken && this.setIdTokenCredential(e.idToken),
                e.accessToken ? [4, this.saveAccessToken(e.accessToken)] : [3, 2];
              case 1:
                t.sent(),
                t.label = 2;
              case 2:
                return e.refreshToken && this.setRefreshTokenCredential(e.refreshToken),
                e.appMetadata && this.setAppMetadata(e.appMetadata),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.saveAccessToken = function (e) {
        return h(this, void 0, void 0, (function () {
          let t; let r; let n; let o; const
            i = this;
          return p(this, (function (a) {
            switch (a.label) {
              case 0:
                return t = this.getCredentialsFilteredBy({
                  clientId: e.clientId,
                  credentialType: e.credentialType,
                  environment: e.environment,
                  homeAccountId: e.homeAccountId,
                  realm: e.realm,
                  tokenType: e.tokenType,
                  requestedClaimsHash: e.requestedClaimsHash,
                }),
                r = he.fromString(e.target),
                (n = Object.keys(t.accessTokens).map(((e) => t.accessTokens[e]
                ))) ? (o = [],
                  n.forEach(((e) => {
                    he.fromString(e.target).intersectingScopeSets(r) && o.push(i.removeCredential(e));
                  }
                  )),
                  [4, Promise.all(o)]) : [3, 2];
              case 1:
                a.sent(),
                a.label = 2;
              case 2:
                return this.setAccessTokenCredential(e),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.getAccountsFilteredBy = function (e) {
        return this.getAccountsFilteredByInternal(e ? e.homeAccountId : C.EMPTY_STRING, e ? e.environment : C.EMPTY_STRING, e ? e.realm : C.EMPTY_STRING, e ? e.nativeAccountId : C.EMPTY_STRING);
      }
      ,
      t.prototype.getAccountsFilteredByInternal = function (e, t, r, n) {
        const o = this;
        const i = this.getKeys();
        const a = {};
        return i.forEach(((i) => {
          const s = o.getAccount(i);
          s && (e && !o.matchHomeAccountId(s, e) || t && !o.matchEnvironment(s, t) || r && !o.matchRealm(s, r) || n && !o.matchNativeAccountId(s, n) || (a[i] = s));
        }
        )),
        a;
      }
      ,
      t.prototype.getCredentialsFilteredBy = function (e) {
        return this.getCredentialsFilteredByInternal(e.homeAccountId, e.environment, e.credentialType, e.clientId, e.familyId, e.realm, e.target, e.userAssertionHash, e.tokenType, e.keyId, e.requestedClaimsHash);
      }
      ,
      t.prototype.getCredentialsFilteredByInternal = function (t, r, n, o, i, a, s, c, u, l, d) {
        const h = this;
        const p = this.getKeys();
        const g = {
          idTokens: {},
          accessTokens: {},
          refreshTokens: {},
        };
        return p.forEach(((p) => {
          const f = ue.getCredentialType(p);
          if (f !== C.NOT_DEFINED) {
            const m = h.getSpecificCredential(p, f);
            if (m && (!c || h.matchUserAssertionHash(m, c)) && (typeof t !== 'string' || h.matchHomeAccountId(m, t)) && (!r || h.matchEnvironment(m, r)) && (!a || h.matchRealm(m, a)) && (!n || h.matchCredentialType(m, n)) && (!o || h.matchClientId(m, o)) && (!i || h.matchFamilyId(m, i)) && (!s || h.matchTarget(m, s)) && (!d && !m.requestedClaimsHash || m.requestedClaimsHash === d)) {
              if (n === k.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
                if (u && !h.matchTokenType(m, u)) return;
                if (u === e.AuthenticationScheme.SSH && l && !h.matchKeyId(m, l)) return;
              }
              const v = h.updateCredentialCacheKey(p, m);
              switch (f) {
                case k.ID_TOKEN:
                  g.idTokens[v] = m;
                  break;
                case k.ACCESS_TOKEN:
                case k.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  g.accessTokens[v] = m;
                  break;
                case k.REFRESH_TOKEN:
                  g.refreshTokens[v] = m;
              }
            }
          }
        }
        )),
        g;
      }
      ,
      t.prototype.getAppMetadataFilteredBy = function (e) {
        return this.getAppMetadataFilteredByInternal(e.environment, e.clientId);
      }
      ,
      t.prototype.getAppMetadataFilteredByInternal = function (e, t) {
        const r = this;
        const n = this.getKeys();
        const o = {};
        return n.forEach(((n) => {
          if (r.isAppMetadata(n)) {
            const i = r.getAppMetadata(n);
            i && (e && !r.matchEnvironment(i, e) || t && !r.matchClientId(i, t) || (o[n] = i));
          }
        }
        )),
        o;
      }
      ,
      t.prototype.getAuthorityMetadataByAlias = function (e) {
        const t = this;
        const r = this.getAuthorityMetadataKeys();
        let n = null;
        return r.forEach(((r) => {
          if (t.isAuthorityMetadata(r) && r.indexOf(t.clientId) !== -1) {
            const o = t.getAuthorityMetadata(r);
            o && o.aliases.indexOf(e) !== -1 && (n = o);
          }
        }
        )),
        n;
      }
      ,
      t.prototype.removeAllAccounts = function () {
        return h(this, void 0, void 0, (function () {
          let e; let t; const
            r = this;
          return p(this, (function (n) {
            switch (n.label) {
              case 0:
                return e = this.getKeys(),
                t = [],
                e.forEach(((e) => {
                  r.getAccount(e) && t.push(r.removeAccount(e));
                }
                )),
                [4, Promise.all(t)];
              case 1:
                return n.sent(),
                [2, !0];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.removeAccount = function (e) {
        return h(this, void 0, void 0, (function () {
          let t;
          return p(this, (function (r) {
            switch (r.label) {
              case 0:
                if (!(t = this.getAccount(e))) throw ne.createNoAccountFoundError();
                return [4, this.removeAccountContext(t)];
              case 1:
                return [2, r.sent() && this.removeItem(e, N.ACCOUNT)];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.removeAccountContext = function (e) {
        return h(this, void 0, void 0, (function () {
          let t; let r; let n; const
            o = this;
          return p(this, (function (i) {
            switch (i.label) {
              case 0:
                return t = this.getKeys(),
                r = e.generateAccountId(),
                n = [],
                t.forEach(((e) => {
                  const t = ue.getCredentialType(e);
                  if (t !== C.NOT_DEFINED) {
                    const i = o.getSpecificCredential(e, t);
                    i && r === i.generateAccountId() && n.push(o.removeCredential(i));
                  }
                }
                )),
                [4, Promise.all(n)];
              case 1:
                return i.sent(),
                [2, !0];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.removeCredential = function (t) {
        return h(this, void 0, void 0, (function () {
          let r; let
            n;
          return p(this, (function (o) {
            switch (o.label) {
              case 0:
                if (r = t.generateCredentialKey(),
                t.credentialType.toLowerCase() !== k.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) return [3, 4];
                if (t.tokenType !== e.AuthenticationScheme.POP) return [3, 4];
                if (!(n = t.keyId)) return [3, 4];
                o.label = 1;
              case 1:
                return o.trys.push([1, 3, , 4]),
                [4, this.cryptoImpl.removeTokenBindingKey(n)];
              case 2:
                return o.sent(),
                [3, 4];
              case 3:
                throw o.sent(),
                ne.createBindingKeyNotRemovedError();
              case 4:
                return [2, this.removeItem(r, N.CREDENTIAL)];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.removeAppMetadata = function () {
        const e = this;
        return this.getKeys().forEach(((t) => {
          e.isAppMetadata(t) && e.removeItem(t, N.APP_METADATA);
        }
        )),
        !0;
      }
      ,
      t.prototype.readCacheRecord = function (e, t, r, n) {
        const o = this.readAccountFromCache(e);
        const i = this.readIdTokenFromCache(t, e);
        const a = this.readAccessTokenFromCache(t, e, r);
        const s = this.readRefreshTokenFromCache(t, e, !1);
        const c = this.readAppMetadataFromCache(n, t);
        return o && i && (o.idTokenClaims = new me(i.secret, this.cryptoImpl).claims),
        {
          account: o,
          idToken: i,
          accessToken: a,
          refreshToken: s,
          appMetadata: c,
        };
      }
      ,
      t.prototype.readAccountFromCache = function (e) {
        const t = fe.generateAccountCacheKey(e);
        return this.getAccount(t);
      }
      ,
      t.prototype.readAccountFromCacheWithNativeAccountId = function (e) {
        const t = {
          nativeAccountId: e,
        };
        const r = this.getAccountsFilteredBy(t);
        const n = Object.keys(r).map(((e) => r[e]
        ));
        if (n.length < 1) return null;
        if (n.length > 1) throw ne.createMultipleMatchingAccountsInCacheError();
        return r[0];
      }
      ,
      t.prototype.readIdTokenFromCache = function (e, t) {
        const r = {
          homeAccountId: t.homeAccountId,
          environment: t.environment,
          credentialType: k.ID_TOKEN,
          clientId: e,
          realm: t.tenantId,
        };
        const n = this.getCredentialsFilteredBy(r);
        const o = Object.keys(n.idTokens).map(((e) => n.idTokens[e]
        ));
        const i = o.length;
        if (i < 1) return null;
        if (i > 1) throw ne.createMultipleMatchingTokensInCacheError();
        return o[0];
      }
      ,
      t.prototype.readAccessTokenFromCache = function (t, r, n) {
        const o = new he(n.scopes || []);
        const i = n.authenticationScheme || e.AuthenticationScheme.BEARER;
        const a = i && i.toLowerCase() !== e.AuthenticationScheme.BEARER.toLowerCase() ? k.ACCESS_TOKEN_WITH_AUTH_SCHEME : k.ACCESS_TOKEN;
        const s = {
          homeAccountId: r.homeAccountId,
          environment: r.environment,
          credentialType: a,
          clientId: t,
          realm: r.tenantId,
          target: o.printScopesLowerCase(),
          tokenType: i,
          keyId: n.sshKid,
          requestedClaimsHash: n.requestedClaimsHash,
        };
        const c = this.getCredentialsFilteredBy(s);
        const u = Object.keys(c.accessTokens).map(((e) => c.accessTokens[e]
        ));
        const l = u.length;
        if (l < 1) return null;
        if (l > 1) throw ne.createMultipleMatchingTokensInCacheError();
        return u[0];
      }
      ,
      t.prototype.readRefreshTokenFromCache = function (e, t, r) {
        const n = r ? q : void 0;
        const o = {
          homeAccountId: t.homeAccountId,
          environment: t.environment,
          credentialType: k.REFRESH_TOKEN,
          clientId: e,
          familyId: n,
        };
        const i = this.getCredentialsFilteredBy(o);
        const a = Object.keys(i.refreshTokens).map(((e) => i.refreshTokens[e]
        ));
        return a.length < 1 ? null : a[0];
      }
      ,
      t.prototype.readAppMetadataFromCache = function (e, t) {
        const r = {
          environment: e,
          clientId: t,
        };
        const n = this.getAppMetadataFilteredBy(r);
        const o = Object.keys(n).map(((e) => n[e]
        ));
        const i = o.length;
        if (i < 1) return null;
        if (i > 1) throw ne.createMultipleMatchingAppMetadataInCacheError();
        return o[0];
      }
      ,
      t.prototype.isAppMetadataFOCI = function (e, t) {
        const r = this.readAppMetadataFromCache(e, t);
        return !(!r || r.familyId !== q);
      }
      ,
      t.prototype.matchHomeAccountId = function (e, t) {
        return !(typeof e.homeAccountId !== 'string' || t !== e.homeAccountId);
      }
      ,
      t.prototype.matchUserAssertionHash = function (e, t) {
        return !(!e.userAssertionHash || t !== e.userAssertionHash);
      }
      ,
      t.prototype.matchEnvironment = function (e, t) {
        const r = this.getAuthorityMetadataByAlias(t);
        return !!(r && r.aliases.indexOf(e.environment) > -1);
      }
      ,
      t.prototype.matchCredentialType = function (e, t) {
        return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
      }
      ,
      t.prototype.matchClientId = function (e, t) {
        return !(!e.clientId || t !== e.clientId);
      }
      ,
      t.prototype.matchFamilyId = function (e, t) {
        return !(!e.familyId || t !== e.familyId);
      }
      ,
      t.prototype.matchRealm = function (e, t) {
        return !(!e.realm || t !== e.realm);
      }
      ,
      t.prototype.matchNativeAccountId = function (e, t) {
        return !(!e.nativeAccountId || t !== e.nativeAccountId);
      }
      ,
      t.prototype.matchTarget = function (e, t) {
        if (e.credentialType !== k.ACCESS_TOKEN && e.credentialType !== k.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target) return !1;
        const r = he.fromString(e.target);
        const n = he.fromString(t);
        return n.containsOnlyOIDCScopes() ? n.removeScope(C.OFFLINE_ACCESS_SCOPE) : n.removeOIDCScopes(),
        r.containsScopeSet(n);
      }
      ,
      t.prototype.matchTokenType = function (e, t) {
        return !(!e.tokenType || e.tokenType !== t);
      }
      ,
      t.prototype.matchKeyId = function (e, t) {
        return !(!e.keyId || e.keyId !== t);
      }
      ,
      t.prototype.isAppMetadata = function (e) {
        return e.indexOf(U) !== -1;
      }
      ,
      t.prototype.isAuthorityMetadata = function (e) {
        return e.indexOf(H) !== -1;
      }
      ,
      t.prototype.generateAuthorityMetadataCacheKey = function (e) {
        return `${H}-${this.clientId}-${e}`;
      }
      ,
      t.prototype.getSpecificCredential = function (e, t) {
        switch (t) {
          case k.ID_TOKEN:
            return this.getIdTokenCredential(e);
          case k.ACCESS_TOKEN:
          case k.ACCESS_TOKEN_WITH_AUTH_SCHEME:
            return this.getAccessTokenCredential(e);
          case k.REFRESH_TOKEN:
            return this.getRefreshTokenCredential(e);
          default:
            return null;
        }
      }
      ,
      t.toObject = function (e, t) {
        for (const r in t) e[r] = t[r];
        return e;
      }
      ,
      t;
    }());
    const ye = (function (e) {
      function t() {
        return e !== null && e.apply(this, arguments) || this;
      }
      return l(t, e),
      t.prototype.setAccount = function () {
        throw ee.createUnexpectedError('Storage interface - setAccount() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getAccount = function () {
        throw ee.createUnexpectedError('Storage interface - getAccount() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setIdTokenCredential = function () {
        throw ee.createUnexpectedError('Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getIdTokenCredential = function () {
        throw ee.createUnexpectedError('Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setAccessTokenCredential = function () {
        throw ee.createUnexpectedError('Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getAccessTokenCredential = function () {
        throw ee.createUnexpectedError('Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setRefreshTokenCredential = function () {
        throw ee.createUnexpectedError('Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getRefreshTokenCredential = function () {
        throw ee.createUnexpectedError('Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setAppMetadata = function () {
        throw ee.createUnexpectedError('Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getAppMetadata = function () {
        throw ee.createUnexpectedError('Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setServerTelemetry = function () {
        throw ee.createUnexpectedError('Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getServerTelemetry = function () {
        throw ee.createUnexpectedError('Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setAuthorityMetadata = function () {
        throw ee.createUnexpectedError('Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getAuthorityMetadata = function () {
        throw ee.createUnexpectedError('Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getAuthorityMetadataKeys = function () {
        throw ee.createUnexpectedError('Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.setThrottlingCache = function () {
        throw ee.createUnexpectedError('Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getThrottlingCache = function () {
        throw ee.createUnexpectedError('Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.removeItem = function () {
        throw ee.createUnexpectedError('Storage interface - removeItem() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.containsKey = function () {
        throw ee.createUnexpectedError('Storage interface - containsKey() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.getKeys = function () {
        throw ee.createUnexpectedError('Storage interface - getKeys() has not been implemented for the cacheStorage interface.');
      }
      ,
      t.prototype.clear = function () {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Storage interface - clear() has not been implemented for the cacheStorage interface.',
            ee.createUnexpectedError('Storage interface - clear() has not been implemented for the cacheStorage interface.');
          }
          ));
        }
        ));
      }
      ,
      t.prototype.updateCredentialCacheKey = function () {
        throw ee.createUnexpectedError('Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.');
      }
      ,
      t;
    }(ve));
    const Ee = {
      tokenRenewalOffsetSeconds: 300,
      preventCorsPreflight: !1,
      proxyUrl: C.EMPTY_STRING,
    };
    const Ce = {
      loggerCallback() {},
      piiLoggingEnabled: !1,
      logLevel: e.LogLevel.Info,
      correlationId: C.EMPTY_STRING,
    };
    const _e = {
      sendGetRequestAsync() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Network interface - sendGetRequestAsync() has not been implemented',
            ee.createUnexpectedError('Network interface - sendGetRequestAsync() has not been implemented');
          }
          ));
        }
        ));
      },
      sendPostRequestAsync() {
        return h(this, void 0, void 0, (function () {
          return p(this, ((e) => {
            throw 'Network interface - sendPostRequestAsync() has not been implemented',
            ee.createUnexpectedError('Network interface - sendPostRequestAsync() has not been implemented');
          }
          ));
        }
        ));
      },
    };
    const Te = {
      sku: C.SKU,
      version: se,
      cpu: C.EMPTY_STRING,
      os: C.EMPTY_STRING,
    };
    const Ie = {
      clientSecret: C.EMPTY_STRING,
      clientAssertion: void 0,
    };
    const we = {
      azureCloudInstance: e.AzureCloudInstance.None,
      tenant: `${C.DEFAULT_COMMON_TENANT}`,
    };
    const Se = {
      application: {
        appName: '',
        appVersion: '',
      },
    };
      /*! @azure/msal-common v8.0.0 2022-11-07 */
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    let Ae; const be = (function (e) {
      function t(r, n, o) {
        const i = e.call(this, r, n, o) || this;
        return i.name = 'ServerError',
        Object.setPrototypeOf(i, t.prototype),
        i;
      }
      return l(t, e),
      t;
    }(ee)); const Re = (function () {
      function e() {}
      return e.generateThrottlingStorageKey = function (e) {
        return `${V}.${JSON.stringify(e)}`;
      }
      ,
      e.preProcess = function (t, r) {
        let n; const o = e.generateThrottlingStorageKey(r); const
          i = t.getThrottlingCache(o);
        if (i) {
          if (i.throttleTime < Date.now()) return void t.removeItem(o, N.THROTTLING);
          throw new be(((n = i.errorCodes) === null || void 0 === n ? void 0 : n.join(' ')) || C.EMPTY_STRING, i.errorMessage, i.subError);
        }
      }
      ,
      e.postProcess = function (t, r, n) {
        if (e.checkResponseStatus(n) || e.checkResponseForRetryAfter(n)) {
          const o = {
            throttleTime: e.calculateThrottleTime(parseInt(n.headers[f.RETRY_AFTER])),
            error: n.body.error,
            errorCodes: n.body.error_codes,
            errorMessage: n.body.error_description,
            subError: n.body.suberror,
          };
          t.setThrottlingCache(e.generateThrottlingStorageKey(r), o);
        }
      }
      ,
      e.checkResponseStatus = function (e) {
        return e.status === 429 || e.status >= 500 && e.status < 600;
      }
      ,
      e.checkResponseForRetryAfter = function (e) {
        return !!e.headers && (e.headers.hasOwnProperty(f.RETRY_AFTER) && (e.status < 200 || e.status >= 300));
      }
      ,
      e.calculateThrottleTime = function (e) {
        const t = e <= 0 ? 0 : e;
        const r = Date.now() / 1e3;
        return Math.floor(1e3 * Math.min(r + (t || Y), r + W));
      }
      ,
      e.removeThrottle = function (e, t, r, n) {
        const o = {
          clientId: t,
          authority: r.authority,
          scopes: r.scopes,
          homeAccountIdentifier: n,
          claims: r.claims,
          authenticationScheme: r.authenticationScheme,
          resourceRequestMethod: r.resourceRequestMethod,
          resourceRequestUri: r.resourceRequestUri,
          shrClaims: r.shrClaims,
          sshKid: r.sshKid,
        };
        const i = this.generateThrottlingStorageKey(o);
        return e.removeItem(i, N.THROTTLING);
      }
      ,
      e;
    }()); const
      ke = (function () {
        function e(e, t) {
          this.networkClient = e,
          this.cacheManager = t;
        }
        return e.prototype.sendPostRequest = function (e, t, r) {
          return h(this, void 0, void 0, (function () {
            let n; let
              o;
            return p(this, (function (i) {
              switch (i.label) {
                case 0:
                  Re.preProcess(this.cacheManager, e),
                  i.label = 1;
                case 1:
                  return i.trys.push([1, 3, , 4]),
                  [4, this.networkClient.sendPostRequestAsync(t, r)];
                case 2:
                  return n = i.sent(),
                  [3, 4];
                case 3:
                  throw (o = i.sent()) instanceof ee ? o : ne.createNetworkError(t, o);
                case 4:
                  return Re.postProcess(this.cacheManager, e, n),
                  [2, n];
              }
            }
            ));
          }
          ));
        }
        ,
        e;
      }());
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    !(function (e) {
      e.HOME_ACCOUNT_ID = 'home_account_id',
      e.UPN = 'UPN';
    }(Ae || (Ae = {})));
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    let Ne; const Pe = (function () {
      function e(e, t) {
        let r; let n; let o; let i; let a; let s; let c; let u; let l; let h; let p; let g; let f; let m; let
          v;
        this.config = (o = (r = e).authOptions,
        i = r.systemOptions,
        a = r.loggerOptions,
        s = r.storageInterface,
        c = r.networkInterface,
        u = r.cryptoInterface,
        l = r.clientCredentials,
        h = r.libraryInfo,
        p = r.telemetry,
        g = r.serverTelemetryManager,
        f = r.persistencePlugin,
        m = r.serializableCache,
        v = { ...Ce, ...a },
        {
          authOptions: (n = o,
          ({
            clientCapabilities: [],
            azureCloudOptions: we,
            skipAuthorityMetadataCache: !1,
            ...n,
          })),
          systemOptions: { ...Ee, ...i },
          loggerOptions: v,
          storageInterface: s || new ye(o.clientId, te),
          networkInterface: c || _e,
          cryptoInterface: u || te,
          clientCredentials: l || Ie,
          libraryInfo: { ...Te, ...h },
          telemetry: { ...Se, ...p },
          serverTelemetryManager: g || null,
          persistencePlugin: f || null,
          serializableCache: m || null,
        }),
        this.logger = new ae(this.config.loggerOptions, '@azure/msal-common', se),
        this.cryptoUtils = this.config.cryptoInterface,
        this.cacheManager = this.config.storageInterface,
        this.networkClient = this.config.networkInterface,
        this.networkManager = new ke(this.networkClient, this.cacheManager),
        this.serverTelemetryManager = this.config.serverTelemetryManager,
        this.authority = this.config.authOptions.authority,
        this.performanceClient = t;
      }
      return e.prototype.createTokenRequestHeaders = function (e) {
        const t = {};
        if (t[f.CONTENT_TYPE] = C.URL_FORM_CONTENT_TYPE,
        !this.config.systemOptions.preventCorsPreflight && e) {
          switch (e.type) {
            case Ae.HOME_ACCOUNT_ID:
              try {
                const r = ge(e.credential);
                t[f.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`;
              } catch (e) {
                this.logger.verbose(`Could not parse home account ID for CCS Header: ${e}`);
              }
              break;
            case Ae.UPN:
              t[f.CCS_HEADER] = `UPN: ${e.credential}`;
          }
        }
        return t;
      }
      ,
      e.prototype.executePostToTokenEndpoint = function (e, t, r, n) {
        return h(this, void 0, void 0, (function () {
          let o;
          return p(this, (function (i) {
            switch (i.label) {
              case 0:
                return [4, this.networkManager.sendPostRequest(n, e, {
                  body: t,
                  headers: r,
                  proxyUrl: this.config.systemOptions.proxyUrl,
                })];
              case 1:
                return o = i.sent(),
                this.config.serverTelemetryManager && o.status < 500 && o.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(),
                [2, o];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.updateAuthority = function (e) {
        if (!e.discoveryComplete()) throw ne.createEndpointDiscoveryIncompleteError('Updated authority has not completed endpoint discovery.');
        this.authority = e;
      }
      ,
      e;
    }()); const Oe = (function () {
      function e() {}
      return e.validateRedirectUri = function (e) {
        if (oe.isEmpty(e)) throw de.createRedirectUriEmptyError();
      }
      ,
      e.validatePrompt = function (e) {
        const t = [];
        for (const r in w) t.push(w[r]);
        if (t.indexOf(e) < 0) throw de.createInvalidPromptError(e);
      }
      ,
      e.validateClaims = function (e) {
        try {
          JSON.parse(e);
        } catch (e) {
          throw de.createInvalidClaimsRequestError();
        }
      }
      ,
      e.validateCodeChallengeParams = function (e, t) {
        if (oe.isEmpty(e) || oe.isEmpty(t)) throw de.createInvalidCodeChallengeParamsError();
        this.validateCodeChallengeMethod(t);
      }
      ,
      e.validateCodeChallengeMethod = function (e) {
        if ([O.PLAIN, O.S256].indexOf(e) < 0) throw de.createInvalidCodeChallengeMethodError();
      }
      ,
      e.sanitizeEQParams = function (e, t) {
        return e ? (t.forEach(((t, r) => {
          e[r] && delete e[r];
        }
        )),
        e) : {};
      }
      ,
      e;
    }()); const Me = (function () {
      function t() {
        this.parameters = new Map();
      }
      return t.prototype.addResponseTypeCode = function () {
        this.parameters.set(y.RESPONSE_TYPE, encodeURIComponent(C.CODE_RESPONSE_TYPE));
      }
      ,
      t.prototype.addResponseTypeForTokenAndIdToken = function () {
        this.parameters.set(y.RESPONSE_TYPE, encodeURIComponent(`${C.TOKEN_RESPONSE_TYPE} ${C.ID_TOKEN_RESPONSE_TYPE}`));
      }
      ,
      t.prototype.addResponseMode = function (e) {
        this.parameters.set(y.RESPONSE_MODE, encodeURIComponent(e || S.QUERY));
      }
      ,
      t.prototype.addNativeBroker = function () {
        this.parameters.set(y.NATIVE_BROKER, encodeURIComponent('1'));
      }
      ,
      t.prototype.addScopes = function (e, t) {
        void 0 === t && (t = !0);
        const r = t ? g(e || [], _) : e || [];
        const n = new he(r);
        this.parameters.set(y.SCOPE, encodeURIComponent(n.printScopes()));
      }
      ,
      t.prototype.addClientId = function (e) {
        this.parameters.set(y.CLIENT_ID, encodeURIComponent(e));
      }
      ,
      t.prototype.addRedirectUri = function (e) {
        Oe.validateRedirectUri(e),
        this.parameters.set(y.REDIRECT_URI, encodeURIComponent(e));
      }
      ,
      t.prototype.addPostLogoutRedirectUri = function (e) {
        Oe.validateRedirectUri(e),
        this.parameters.set(y.POST_LOGOUT_URI, encodeURIComponent(e));
      }
      ,
      t.prototype.addIdTokenHint = function (e) {
        this.parameters.set(y.ID_TOKEN_HINT, encodeURIComponent(e));
      }
      ,
      t.prototype.addDomainHint = function (e) {
        this.parameters.set(I.DOMAIN_HINT, encodeURIComponent(e));
      }
      ,
      t.prototype.addLoginHint = function (e) {
        this.parameters.set(I.LOGIN_HINT, encodeURIComponent(e));
      }
      ,
      t.prototype.addCcsUpn = function (e) {
        this.parameters.set(f.CCS_HEADER, encodeURIComponent(`UPN:${e}`));
      }
      ,
      t.prototype.addCcsOid = function (e) {
        this.parameters.set(f.CCS_HEADER, encodeURIComponent(`Oid:${e.uid}@${e.utid}`));
      }
      ,
      t.prototype.addSid = function (e) {
        this.parameters.set(I.SID, encodeURIComponent(e));
      }
      ,
      t.prototype.addClaims = function (e, t) {
        const r = this.addClientCapabilitiesToClaims(e, t);
        Oe.validateClaims(r),
        this.parameters.set(y.CLAIMS, encodeURIComponent(r));
      }
      ,
      t.prototype.addCorrelationId = function (e) {
        this.parameters.set(y.CLIENT_REQUEST_ID, encodeURIComponent(e));
      }
      ,
      t.prototype.addLibraryInfo = function (e) {
        this.parameters.set(y.X_CLIENT_SKU, e.sku),
        this.parameters.set(y.X_CLIENT_VER, e.version),
        e.os && this.parameters.set(y.X_CLIENT_OS, e.os),
        e.cpu && this.parameters.set(y.X_CLIENT_CPU, e.cpu);
      }
      ,
      t.prototype.addApplicationTelemetry = function (e) {
        (e == null ? void 0 : e.appName) && this.parameters.set(y.X_APP_NAME, e.appName),
        (e == null ? void 0 : e.appVersion) && this.parameters.set(y.X_APP_VER, e.appVersion);
      }
      ,
      t.prototype.addPrompt = function (e) {
        Oe.validatePrompt(e),
        this.parameters.set(`${y.PROMPT}`, encodeURIComponent(e));
      }
      ,
      t.prototype.addState = function (e) {
        oe.isEmpty(e) || this.parameters.set(y.STATE, encodeURIComponent(e));
      }
      ,
      t.prototype.addNonce = function (e) {
        this.parameters.set(y.NONCE, encodeURIComponent(e));
      }
      ,
      t.prototype.addCodeChallengeParams = function (e, t) {
        if (Oe.validateCodeChallengeParams(e, t),
        !e || !t) throw de.createInvalidCodeChallengeParamsError();
        this.parameters.set(y.CODE_CHALLENGE, encodeURIComponent(e)),
        this.parameters.set(y.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      }
      ,
      t.prototype.addAuthorizationCode = function (e) {
        this.parameters.set(y.CODE, encodeURIComponent(e));
      }
      ,
      t.prototype.addDeviceCode = function (e) {
        this.parameters.set(y.DEVICE_CODE, encodeURIComponent(e));
      }
      ,
      t.prototype.addRefreshToken = function (e) {
        this.parameters.set(y.REFRESH_TOKEN, encodeURIComponent(e));
      }
      ,
      t.prototype.addCodeVerifier = function (e) {
        this.parameters.set(y.CODE_VERIFIER, encodeURIComponent(e));
      }
      ,
      t.prototype.addClientSecret = function (e) {
        this.parameters.set(y.CLIENT_SECRET, encodeURIComponent(e));
      }
      ,
      t.prototype.addClientAssertion = function (e) {
        oe.isEmpty(e) || this.parameters.set(y.CLIENT_ASSERTION, encodeURIComponent(e));
      }
      ,
      t.prototype.addClientAssertionType = function (e) {
        oe.isEmpty(e) || this.parameters.set(y.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
      }
      ,
      t.prototype.addOboAssertion = function (e) {
        this.parameters.set(y.OBO_ASSERTION, encodeURIComponent(e));
      }
      ,
      t.prototype.addRequestTokenUse = function (e) {
        this.parameters.set(y.REQUESTED_TOKEN_USE, encodeURIComponent(e));
      }
      ,
      t.prototype.addGrantType = function (e) {
        this.parameters.set(y.GRANT_TYPE, encodeURIComponent(e));
      }
      ,
      t.prototype.addClientInfo = function () {
        this.parameters.set('client_info', '1');
      }
      ,
      t.prototype.addExtraQueryParameters = function (e) {
        const t = this;
        Oe.sanitizeEQParams(e, this.parameters),
        Object.keys(e).forEach(((r) => {
          t.parameters.set(r, e[r]);
        }
        ));
      }
      ,
      t.prototype.addClientCapabilitiesToClaims = function (e, t) {
        let r;
        if (e) {
          try {
            r = JSON.parse(e);
          } catch (e) {
            throw de.createInvalidClaimsRequestError();
          }
        } else r = {};
        return t && t.length > 0 && (r.hasOwnProperty(E.ACCESS_TOKEN) || (r[E.ACCESS_TOKEN] = {}),
        r[E.ACCESS_TOKEN][E.XMS_CC] = {
          values: t,
        }),
        JSON.stringify(r);
      }
      ,
      t.prototype.addUsername = function (e) {
        this.parameters.set(F.username, encodeURIComponent(e));
      }
      ,
      t.prototype.addPassword = function (e) {
        this.parameters.set(F.password, encodeURIComponent(e));
      }
      ,
      t.prototype.addPopToken = function (t) {
        oe.isEmpty(t) || (this.parameters.set(y.TOKEN_TYPE, e.AuthenticationScheme.POP),
        this.parameters.set(y.REQ_CNF, encodeURIComponent(t)));
      }
      ,
      t.prototype.addSshJwk = function (t) {
        oe.isEmpty(t) || (this.parameters.set(y.TOKEN_TYPE, e.AuthenticationScheme.SSH),
        this.parameters.set(y.REQ_CNF, encodeURIComponent(t)));
      }
      ,
      t.prototype.addServerTelemetry = function (e) {
        this.parameters.set(y.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()),
        this.parameters.set(y.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
      }
      ,
      t.prototype.addThrottling = function () {
        this.parameters.set(y.X_MS_LIB_CAPABILITY, Q);
      }
      ,
      t.prototype.addLogoutHint = function (e) {
        this.parameters.set(y.LOGOUT_HINT, encodeURIComponent(e));
      }
      ,
      t.prototype.createQueryString = function () {
        const e = new Array();
        return this.parameters.forEach(((t, r) => {
          e.push(`${r}=${t}`);
        }
        )),
        e.join('&');
      }
      ,
      t;
    }()); const Ue = (function (e) {
      function t() {
        return e !== null && e.apply(this, arguments) || this;
      }
      return l(t, e),
      t.createIdTokenEntity = function (e, r, n, o, i) {
        const a = new t();
        return a.credentialType = k.ID_TOKEN,
        a.homeAccountId = e,
        a.environment = r,
        a.clientId = o,
        a.secret = n,
        a.realm = i,
        a;
      }
      ,
      t.isIdTokenEntity = function (e) {
        return !!e && (e.hasOwnProperty('homeAccountId') && e.hasOwnProperty('environment') && e.hasOwnProperty('credentialType') && e.hasOwnProperty('realm') && e.hasOwnProperty('clientId') && e.hasOwnProperty('secret') && e.credentialType === k.ID_TOKEN);
      }
      ,
      t;
    }(ue)); const qe = (function () {
      function e() {}
      return e.nowSeconds = function () {
        return Math.round((new Date()).getTime() / 1e3);
      }
      ,
      e.isTokenExpired = function (t, r) {
        const n = Number(t) || 0;
        return e.nowSeconds() + r > n;
      }
      ,
      e.wasClockTurnedBack = function (t) {
        return Number(t) > e.nowSeconds();
      }
      ,
      e.delay = function (e, t) {
        return new Promise(((r) => setTimeout(
          (() => r(t)
          ), e,
        )
        ));
      }
      ,
      e;
    }()); const He = (function (t) {
      function r() {
        return t !== null && t.apply(this, arguments) || this;
      }
      return l(r, t),
      r.createAccessTokenEntity = function (t, n, o, i, a, s, c, u, l, d, h, p, g, f, m) {
        let v; let y; const
          E = new r();
        E.homeAccountId = t,
        E.credentialType = k.ACCESS_TOKEN,
        E.secret = o;
        const C = qe.nowSeconds();
        if (E.cachedAt = C.toString(),
        E.expiresOn = c.toString(),
        E.extendedExpiresOn = u.toString(),
        d && (E.refreshOn = d.toString()),
        E.environment = n,
        E.clientId = i,
        E.realm = a,
        E.target = s,
        E.userAssertionHash = p,
        E.tokenType = oe.isEmpty(h) ? e.AuthenticationScheme.BEARER : h,
        f && (E.requestedClaims = f,
        E.requestedClaimsHash = m),
        ((v = E.tokenType) === null || void 0 === v ? void 0 : v.toLowerCase()) !== e.AuthenticationScheme.BEARER.toLowerCase()) {
          switch (E.credentialType = k.ACCESS_TOKEN_WITH_AUTH_SCHEME,
          E.tokenType) {
            case e.AuthenticationScheme.POP:
              var _ = me.extractTokenClaims(o, l);
              if (!((y = _ == null ? void 0 : _.cnf) === null || void 0 === y ? void 0 : y.kid)) throw ne.createTokenClaimsRequiredError();
              E.keyId = _.cnf.kid;
              break;
            case e.AuthenticationScheme.SSH:
              E.keyId = g;
          }
        }
        return E;
      }
      ,
      r.isAccessTokenEntity = function (e) {
        return !!e && (e.hasOwnProperty('homeAccountId') && e.hasOwnProperty('environment') && e.hasOwnProperty('credentialType') && e.hasOwnProperty('realm') && e.hasOwnProperty('clientId') && e.hasOwnProperty('secret') && e.hasOwnProperty('target') && (e.credentialType === k.ACCESS_TOKEN || e.credentialType === k.ACCESS_TOKEN_WITH_AUTH_SCHEME));
      }
      ,
      r;
    }(ue)); const Le = (function (e) {
      function t() {
        return e !== null && e.apply(this, arguments) || this;
      }
      return l(t, e),
      t.createRefreshTokenEntity = function (e, r, n, o, i, a) {
        const s = new t();
        return s.clientId = o,
        s.credentialType = k.REFRESH_TOKEN,
        s.environment = r,
        s.homeAccountId = e,
        s.secret = n,
        s.userAssertionHash = a,
        i && (s.familyId = i),
        s;
      }
      ,
      t.isRefreshTokenEntity = function (e) {
        return !!e && (e.hasOwnProperty('homeAccountId') && e.hasOwnProperty('environment') && e.hasOwnProperty('credentialType') && e.hasOwnProperty('clientId') && e.hasOwnProperty('secret') && e.credentialType === k.REFRESH_TOKEN);
      }
      ,
      t;
    }(ue)); const De = ['interaction_required', 'consent_required', 'login_required']; const xe = ['message_only', 'additional_action', 'basic_action', 'user_password_expired', 'consent_required']; const Fe = {
      noTokensFoundError: {
        code: 'no_tokens_found',
        desc: 'No refresh token found in the cache. Please sign-in.',
      },
      native_account_unavailable: {
        code: 'native_account_unavailable',
        desc: 'The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.',
      },
    }; const Ke = (function (e) {
      function t(r, n, o) {
        const i = e.call(this, r, n, o) || this;
        return i.name = 'InteractionRequiredAuthError',
        Object.setPrototypeOf(i, t.prototype),
        i;
      }
      return l(t, e),
      t.isInteractionRequiredError = function (e, t, r) {
        const n = !!e && De.indexOf(e) > -1;
        const o = !!r && xe.indexOf(r) > -1;
        const i = !!t && De.some(((e) => t.indexOf(e) > -1
        ));
        return n || i || o;
      }
      ,
      t.createNoTokensFoundError = function () {
        return new t(Fe.noTokensFoundError.code, Fe.noTokensFoundError.desc);
      }
      ,
      t.createNativeAccountUnavailableError = function () {
        return new t(Fe.native_account_unavailable.code, Fe.native_account_unavailable.desc);
      }
      ,
      t;
    }(ee)); const Be = function (e, t, r, n, o) {
      this.account = e || null,
      this.idToken = t || null,
      this.accessToken = r || null,
      this.refreshToken = n || null,
      this.appMetadata = o || null;
    }; const Ge = (function () {
      function e() {}
      return e.setRequestState = function (t, r, n) {
        const o = e.generateLibraryState(t, n);
        return oe.isEmpty(r) ? o : `${o}${C.RESOURCE_DELIM}${r}`;
      }
      ,
      e.generateLibraryState = function (e, t) {
        if (!e) throw ne.createNoCryptoObjectError('generateLibraryState');
        const r = {
          id: e.createNewGuid(),
        };
        t && (r.meta = t);
        const n = JSON.stringify(r);
        return e.base64Encode(n);
      }
      ,
      e.parseRequestState = function (e, t) {
        if (!e) throw ne.createNoCryptoObjectError('parseRequestState');
        if (oe.isEmpty(t)) throw ne.createInvalidStateError(t, 'Null, undefined or empty state');
        try {
          const r = t.split(C.RESOURCE_DELIM);
          const n = r[0];
          const o = r.length > 1 ? r.slice(1).join(C.RESOURCE_DELIM) : C.EMPTY_STRING;
          const i = e.base64Decode(n);
          const a = JSON.parse(i);
          return {
            userRequestState: oe.isEmpty(o) ? C.EMPTY_STRING : o,
            libraryState: a,
          };
        } catch (e) {
          throw ne.createInvalidStateError(t, e);
        }
      }
      ,
      e;
    }()); const
      ze = (function () {
        function e(t) {
          if (this._urlString = t,
          oe.isEmpty(this._urlString)) throw de.createUrlEmptyError();
          oe.isEmpty(this.getHash()) && (this._urlString = e.canonicalizeUri(t));
        }
        return Object.defineProperty(e.prototype, 'urlString', {
          get() {
            return this._urlString;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e.canonicalizeUri = function (e) {
          if (e) {
            let t = e.toLowerCase();
            return oe.endsWith(t, '?') ? t = t.slice(0, -1) : oe.endsWith(t, '?/') && (t = t.slice(0, -2)),
            oe.endsWith(t, '/') || (t += '/'),
            t;
          }
          return e;
        }
        ,
        e.prototype.validateAsUri = function () {
          let e;
          try {
            e = this.getUrlComponents();
          } catch (e) {
            throw de.createUrlParseError(e);
          }
          if (!e.HostNameAndPort || !e.PathSegments) throw de.createUrlParseError(`Given url string: ${this.urlString}`);
          if (!e.Protocol || e.Protocol.toLowerCase() !== 'https:') throw de.createInsecureAuthorityUriError(this.urlString);
        }
        ,
        e.appendQueryString = function (e, t) {
          return oe.isEmpty(t) ? e : e.indexOf('?') < 0 ? `${e}?${t}` : `${e}&${t}`;
        }
        ,
        e.removeHashFromUrl = function (t) {
          return e.canonicalizeUri(t.split('#')[0]);
        }
        ,
        e.prototype.replaceTenantPath = function (t) {
          const r = this.getUrlComponents();
          const n = r.PathSegments;
          return !t || n.length === 0 || n[0] !== v.COMMON && n[0] !== v.ORGANIZATIONS || (n[0] = t),
          e.constructAuthorityUriFromObject(r);
        }
        ,
        e.prototype.getHash = function () {
          return e.parseHash(this.urlString);
        }
        ,
        e.prototype.getUrlComponents = function () {
          const e = RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');
          const t = this.urlString.match(e);
          if (!t) throw de.createUrlParseError(`Given url string: ${this.urlString}`);
          const r = {
            Protocol: t[1],
            HostNameAndPort: t[4],
            AbsolutePath: t[5],
            QueryString: t[7],
          };
          let n = r.AbsolutePath.split('/');
          return n = n.filter(((e) => e && e.length > 0
          )),
          r.PathSegments = n,
          !oe.isEmpty(r.QueryString) && r.QueryString.endsWith('/') && (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)),
          r;
        }
        ,
        e.getDomainFromUrl = function (e) {
          const t = RegExp('^([^:/?#]+://)?([^/?#]*)');
          const r = e.match(t);
          if (!r) throw de.createUrlParseError(`Given url string: ${e}`);
          return r[2];
        }
        ,
        e.getAbsoluteUrl = function (t, r) {
          if (t[0] === C.FORWARD_SLASH) {
            const n = new e(r).getUrlComponents();
            return `${n.Protocol}//${n.HostNameAndPort}${t}`;
          }
          return t;
        }
        ,
        e.parseHash = function (e) {
          const t = e.indexOf('#');
          const r = e.indexOf('#/');
          return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : C.EMPTY_STRING;
        }
        ,
        e.parseQueryString = function (e) {
          const t = e.indexOf('?');
          const r = e.indexOf('/?');
          return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : C.EMPTY_STRING;
        }
        ,
        e.constructAuthorityUriFromObject = function (t) {
          return new e(`${t.Protocol}//${t.HostNameAndPort}/${t.PathSegments.join('/')}`);
        }
        ,
        e.getDeserializedHash = function (t) {
          if (oe.isEmpty(t)) return {};
          const r = e.parseHash(t);
          const n = oe.queryStringToObject(oe.isEmpty(r) ? t : r);
          if (!n) throw ne.createHashNotDeserializedError(JSON.stringify(n));
          return n;
        }
        ,
        e.getDeserializedQueryString = function (t) {
          if (oe.isEmpty(t)) return {};
          const r = e.parseQueryString(t);
          const n = oe.queryStringToObject(oe.isEmpty(r) ? t : r);
          if (!n) throw ne.createHashNotDeserializedError(JSON.stringify(n));
          return n;
        }
        ,
        e.hashContainsKnownProperties = function (t) {
          if (oe.isEmpty(t) || t.indexOf('=') < 0) return !1;
          const r = e.getDeserializedHash(t);
          return !!(r.code || r.error_description || r.error || r.state);
        }
        ,
        e;
      }());
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    !(function (e) {
      e.SW = 'sw',
      e.UHW = 'uhw';
    }(Ne || (Ne = {})));
    let je; let Ye; const We = (function () {
      function e(e) {
        this.cryptoUtils = e;
      }
      return e.prototype.generateCnf = function (e) {
        return h(this, void 0, void 0, (function () {
          let t; let r; let
            n;
          return p(this, (function (o) {
            switch (o.label) {
              case 0:
                return [4, this.generateKid(e)];
              case 1:
                return t = o.sent(),
                r = this.cryptoUtils.base64Encode(JSON.stringify(t)),
                n = {
                  kid: t.kid,
                  reqCnfString: r,
                },
                [4, this.cryptoUtils.hashString(r)];
              case 2:
                return [2, (n.reqCnfHash = o.sent(),
                n)];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.generateKid = function (e) {
        return h(this, void 0, void 0, (function () {
          return p(this, (function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
              case 1:
                return [2, {
                  kid: t.sent(),
                  xms_ksl: Ne.SW,
                }];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.signPopToken = function (e, t, r) {
        return h(this, void 0, void 0, (function () {
          return p(this, (function (n) {
            return [2, this.signPayload(e, t, r)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.signPayload = function (e, t, r, n) {
        return h(this, void 0, void 0, (function () {
          let o; let i; let a; let s; let c; let
            u;
          return p(this, (function (l) {
            switch (l.label) {
              case 0:
                return o = r.resourceRequestMethod,
                i = r.resourceRequestUri,
                a = r.shrClaims,
                s = r.shrNonce,
                c = i ? new ze(i) : void 0,
                u = c == null ? void 0 : c.getUrlComponents(),
                [4, this.cryptoUtils.signJwt({
                  at: e,
                  ts: qe.nowSeconds(),
                  m: o == null ? void 0 : o.toUpperCase(),
                  u: u == null ? void 0 : u.HostNameAndPort,
                  nonce: s || this.cryptoUtils.createNewGuid(),
                  p: u == null ? void 0 : u.AbsolutePath,
                  q: (u == null ? void 0 : u.QueryString) ? [[], u.QueryString] : void 0,
                  client_claims: a || void 0,
                  ...n,
                }, t, r.correlationId)];
              case 1:
                return [2, l.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      e;
    }()); const Ve = (function () {
      function e() {}
      return e.prototype.generateAppMetadataKey = function () {
        return e.generateAppMetadataCacheKey(this.environment, this.clientId);
      }
      ,
      e.generateAppMetadataCacheKey = function (e, t) {
        return [U, e, t].join(R.CACHE_KEY_SEPARATOR).toLowerCase();
      }
      ,
      e.createAppMetadataEntity = function (t, r, n) {
        const o = new e();
        return o.clientId = t,
        o.environment = r,
        n && (o.familyId = n),
        o;
      }
      ,
      e.isAppMetadataEntity = function (e, t) {
        return !!t && (e.indexOf(U) === 0 && t.hasOwnProperty('clientId') && t.hasOwnProperty('environment'));
      }
      ,
      e;
    }()); const Qe = (function () {
      function e(e, t) {
        this.cache = e,
        this.hasChanged = t;
      }
      return Object.defineProperty(e.prototype, 'cacheHasChanged', {
        get() {
          return this.hasChanged;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'tokenCache', {
        get() {
          return this.cache;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e;
    }()); const Je = (function () {
      function t(e, t, r, n, o, i) {
        this.clientId = e,
        this.cacheStorage = t,
        this.cryptoObj = r,
        this.logger = n,
        this.serializableCache = o,
        this.persistencePlugin = i;
      }
      return t.prototype.validateServerAuthorizationCodeResponse = function (e, t, r) {
        if (!e.state || !t) throw e.state ? ne.createStateNotFoundError('Cached State') : ne.createStateNotFoundError('Server State');
        if (decodeURIComponent(e.state) !== decodeURIComponent(t)) throw ne.createStateMismatchError();
        if (e.error || e.error_description || e.suberror) {
          if (Ke.isInteractionRequiredError(e.error, e.error_description, e.suberror)) throw new Ke(e.error || C.EMPTY_STRING, e.error_description, e.suberror);
          throw new be(e.error || C.EMPTY_STRING, e.error_description, e.suberror);
        }
        e.client_info && pe(e.client_info, r);
      }
      ,
      t.prototype.validateTokenResponse = function (e) {
        if (e.error || e.error_description || e.suberror) {
          if (Ke.isInteractionRequiredError(e.error, e.error_description, e.suberror)) throw new Ke(e.error, e.error_description, e.suberror);
          const t = `${e.error_codes} - [${e.timestamp}]: ${e.error_description} - Correlation ID: ${e.correlation_id} - Trace ID: ${e.trace_id}`;
          throw new be(e.error, t, e.suberror);
        }
      }
      ,
      t.prototype.handleServerTokenResponse = function (e, r, n, o, i, a, s, c, u) {
        return h(this, void 0, void 0, (function () {
          let l; let d; let h; let g; let f; let
            m;
          return p(this, (function (p) {
            switch (p.label) {
              case 0:
                if (e.id_token) {
                  if (l = new me(e.id_token || C.EMPTY_STRING, this.cryptoObj),
                  i && !oe.isEmpty(i.nonce) && l.claims.nonce !== i.nonce) throw ne.createNonceMismatchError();
                  if (o.maxAge || o.maxAge === 0) {
                    if (!(d = l.claims.auth_time)) throw ne.createAuthTimeNotFoundError();
                    me.checkMaxAge(d, o.maxAge);
                  }
                }
                this.homeAccountIdentifier = fe.generateHomeAccountId(e.client_info || C.EMPTY_STRING, r.authorityType, this.logger, this.cryptoObj, l),
                i && i.state && (h = Ge.parseRequestState(this.cryptoObj, i.state)),
                e.key_id = e.key_id || o.sshKid || void 0,
                g = this.generateCacheRecord(e, r, n, o, l, a, i),
                p.label = 1;
              case 1:
                return p.trys.push([1, , 5, 8]),
                this.persistencePlugin && this.serializableCache ? (this.logger.verbose('Persistence enabled, calling beforeCacheAccess'),
                f = new Qe(this.serializableCache, !0),
                [4, this.persistencePlugin.beforeCacheAccess(f)]) : [3, 3];
              case 2:
                p.sent(),
                p.label = 3;
              case 3:
                return !s || c || !g.account || (m = g.account.generateAccountKey(),
                this.cacheStorage.getAccount(m)) ? [4, this.cacheStorage.saveCacheRecord(g)] : (this.logger.warning('Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache'),
                  [2, t.generateAuthenticationResult(this.cryptoObj, r, g, !1, o, l, h, void 0, u)]);
              case 4:
                return p.sent(),
                [3, 8];
              case 5:
                return this.persistencePlugin && this.serializableCache && f ? (this.logger.verbose('Persistence enabled, calling afterCacheAccess'),
                [4, this.persistencePlugin.afterCacheAccess(f)]) : [3, 7];
              case 6:
                p.sent(),
                p.label = 7;
              case 7:
                return [7];
              case 8:
                return [2, t.generateAuthenticationResult(this.cryptoObj, r, g, !1, o, l, h, e.spa_code, u)];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.generateCacheRecord = function (e, t, r, n, o, i, a) {
        let s; let c; const
          u = t.getPreferredCache();
        if (oe.isEmpty(u)) throw ne.createInvalidCacheEnvironmentError();
        !oe.isEmpty(e.id_token) && o && (s = Ue.createIdTokenEntity(this.homeAccountIdentifier, u, e.id_token || C.EMPTY_STRING, this.clientId, o.claims.tid || C.EMPTY_STRING),
        c = this.generateAccountEntity(e, o, t, a));
        let l = null;
        if (!oe.isEmpty(e.access_token)) {
          const d = e.scope ? he.fromString(e.scope) : new he(n.scopes || []);
          const h = (typeof e.expires_in === 'string' ? parseInt(e.expires_in, 10) : e.expires_in) || 0;
          const p = (typeof e.ext_expires_in === 'string' ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0;
          const g = (typeof e.refresh_in === 'string' ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0;
          const f = r + h;
          const m = f + p;
          const v = g && g > 0 ? r + g : void 0;
          l = He.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || C.EMPTY_STRING, this.clientId, o ? o.claims.tid || C.EMPTY_STRING : t.tenant, d.printScopes(), f, m, this.cryptoObj, v, e.token_type, i, e.key_id, n.claims, n.requestedClaimsHash);
        }
        let y = null;
        oe.isEmpty(e.refresh_token) || (y = Le.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || C.EMPTY_STRING, this.clientId, e.foci, i));
        let E = null;
        return oe.isEmpty(e.foci) || (E = Ve.createAppMetadataEntity(this.clientId, u, e.foci)),
        new Be(c, s, l, y, E);
      }
      ,
      t.prototype.generateAccountEntity = function (e, t, r, n) {
        const o = r.authorityType;
        const i = n ? n.cloud_graph_host_name : C.EMPTY_STRING;
        const a = n ? n.msgraph_host : C.EMPTY_STRING;
        if (o === ce.Adfs) {
          return this.logger.verbose('Authority type is ADFS, creating ADFS account'),
          fe.createGenericAccount(this.homeAccountIdentifier, t, r, i, a);
        }
        if (oe.isEmpty(e.client_info) && r.protocolMode === 'AAD') throw ne.createClientInfoEmptyError();
        return e.client_info ? fe.createAccount(e.client_info, this.homeAccountIdentifier, t, r, i, a) : fe.createGenericAccount(this.homeAccountIdentifier, t, r, i, a);
      }
      ,
      t.generateAuthenticationResult = function (t, r, n, o, i, a, s, c, u) {
        let l; let d; let
          g;
        return h(this, void 0, void 0, (function () {
          let h; let f; let m; let v; let y; let E; let _; let T; let I; let w; let
            S;
          return p(this, ((p) => {
            switch (p.label) {
              case 0:
                if (h = C.EMPTY_STRING,
                f = [],
                m = null,
                y = C.EMPTY_STRING,
                !n.accessToken) return [3, 4];
                if (n.accessToken.tokenType !== e.AuthenticationScheme.POP) return [3, 2];
                if (E = new We(t),
                _ = n.accessToken,
                T = _.secret,
                !(I = _.keyId)) throw ne.createKeyIdMissingError();
                return [4, E.signPopToken(T, I, i)];
              case 1:
                return h = p.sent(),
                [3, 3];
              case 2:
                h = n.accessToken.secret,
                p.label = 3;
              case 3:
                f = he.fromString(n.accessToken.target).asArray(),
                m = new Date(1e3 * Number(n.accessToken.expiresOn)),
                v = new Date(1e3 * Number(n.accessToken.extendedExpiresOn)),
                p.label = 4;
              case 4:
                return n.appMetadata && (y = n.appMetadata.familyId === q ? q : C.EMPTY_STRING),
                w = (a == null ? void 0 : a.claims.oid) || (a == null ? void 0 : a.claims.sub) || C.EMPTY_STRING,
                S = (a == null ? void 0 : a.claims.tid) || C.EMPTY_STRING,
                [2, {
                  authority: r.canonicalAuthority,
                  uniqueId: w,
                  tenantId: S,
                  scopes: f,
                  account: n.account ? n.account.getAccountInfo() : null,
                  idToken: a ? a.rawToken : C.EMPTY_STRING,
                  idTokenClaims: a ? a.claims : {},
                  accessToken: h,
                  fromCache: o,
                  expiresOn: m,
                  correlationId: i.correlationId,
                  requestId: u || C.EMPTY_STRING,
                  extExpiresOn: v,
                  familyId: y,
                  tokenType: ((l = n.accessToken) === null || void 0 === l ? void 0 : l.tokenType) || C.EMPTY_STRING,
                  state: s ? s.userRequestState : C.EMPTY_STRING,
                  cloudGraphHostName: ((d = n.account) === null || void 0 === d ? void 0 : d.cloudGraphHostName) || C.EMPTY_STRING,
                  msGraphHost: ((g = n.account) === null || void 0 === g ? void 0 : g.msGraphHost) || C.EMPTY_STRING,
                  code: c,
                  fromNativeBroker: !1,
                }];
            }
          }
          ));
        }
        ));
      }
      ,
      t;
    }()); const
      Xe = (function (t) {
        function r(e) {
          const r = t.call(this, e) || this;
          return r.includeRedirectUri = !0,
          r;
        }
        return l(r, t),
        r.prototype.getAuthCodeUrl = function (e) {
          return h(this, void 0, void 0, (function () {
            let t;
            return p(this, (function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.createAuthCodeUrlQueryString(e)];
                case 1:
                  return t = r.sent(),
                  [2, ze.appendQueryString(this.authority.authorizationEndpoint, t)];
              }
            }
            ));
          }
          ));
        }
        ,
        r.prototype.acquireToken = function (e, t) {
          let r;
          return h(this, void 0, void 0, (function () {
            let n; let o; let i; let
              a;
            return p(this, (function (s) {
              switch (s.label) {
                case 0:
                  if (this.logger.info('in acquireToken call'),
                  !e || oe.isEmpty(e.code)) throw ne.createTokenRequestCannotBeMadeError();
                  return n = qe.nowSeconds(),
                  [4, this.executeTokenRequest(this.authority, e)];
                case 1:
                  return o = s.sent(),
                  i = (r = o.headers) === null || void 0 === r ? void 0 : r[f.X_MS_REQUEST_ID],
                  (a = new Je(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin)).validateTokenResponse(o.body),
                  [4, a.handleServerTokenResponse(o.body, this.authority, n, e, t, void 0, void 0, void 0, i)];
                case 2:
                  return [2, s.sent()];
              }
            }
            ));
          }
          ));
        }
        ,
        r.prototype.handleFragmentResponse = function (e, t) {
          const r = new Je(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
          const n = new ze(e);
          const o = ze.getDeserializedHash(n.getHash());
          if (r.validateServerAuthorizationCodeResponse(o, t, this.cryptoUtils),
          !o.code) throw ne.createNoAuthCodeInServerResponseError();
          return { ...o, code: o.code };
        }
        ,
        r.prototype.getLogoutUri = function (e) {
          if (!e) throw de.createEmptyLogoutRequestError();
          const t = this.createLogoutUrlQueryString(e);
          return ze.appendQueryString(this.authority.endSessionEndpoint, t);
        }
        ,
        r.prototype.executeTokenRequest = function (e, t) {
          return h(this, void 0, void 0, (function () {
            let r; let n; let o; let i; let a; let s; let
              c;
            return p(this, (function (u) {
              switch (u.label) {
                case 0:
                  return r = {
                    clientId: this.config.authOptions.clientId,
                    authority: e.canonicalAuthority,
                    scopes: t.scopes,
                    claims: t.claims,
                    authenticationScheme: t.authenticationScheme,
                    resourceRequestMethod: t.resourceRequestMethod,
                    resourceRequestUri: t.resourceRequestUri,
                    shrClaims: t.shrClaims,
                    sshKid: t.sshKid,
                  },
                  [4, this.createTokenRequestBody(t)];
                case 1:
                  if (n = u.sent(),
                  o = this.createTokenQueryParameters(t),
                  i = void 0,
                  t.clientInfo) {
                    try {
                      a = pe(t.clientInfo, this.cryptoUtils),
                      i = {
                        credential: `${a.uid}${R.CLIENT_INFO_SEPARATOR}${a.utid}`,
                        type: Ae.HOME_ACCOUNT_ID,
                      };
                    } catch (e) {
                      this.logger.verbose(`Could not parse client info for CCS Header: ${e}`);
                    }
                  }
                  return s = this.createTokenRequestHeaders(i || t.ccsCredential),
                  c = oe.isEmpty(o) ? e.tokenEndpoint : `${e.tokenEndpoint}?${o}`,
                  [2, this.executePostToTokenEndpoint(c, n, s, r)];
              }
            }
            ));
          }
          ));
        }
        ,
        r.prototype.createTokenQueryParameters = function (e) {
          const t = new Me();
          return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters),
          t.createQueryString();
        }
        ,
        r.prototype.createTokenRequestBody = function (t) {
          return h(this, void 0, void 0, (function () {
            let r; let n; let o; let i; let a; let s; let
              c;
            return p(this, (function (u) {
              switch (u.label) {
                case 0:
                  return (r = new Me()).addClientId(this.config.authOptions.clientId),
                  this.includeRedirectUri ? r.addRedirectUri(t.redirectUri) : Oe.validateRedirectUri(t.redirectUri),
                  r.addScopes(t.scopes),
                  r.addAuthorizationCode(t.code),
                  r.addLibraryInfo(this.config.libraryInfo),
                  r.addApplicationTelemetry(this.config.telemetry.application),
                  r.addThrottling(),
                  this.serverTelemetryManager && r.addServerTelemetry(this.serverTelemetryManager),
                  t.codeVerifier && r.addCodeVerifier(t.codeVerifier),
                  this.config.clientCredentials.clientSecret && r.addClientSecret(this.config.clientCredentials.clientSecret),
                  this.config.clientCredentials.clientAssertion && (n = this.config.clientCredentials.clientAssertion,
                  r.addClientAssertion(n.assertion),
                  r.addClientAssertionType(n.assertionType)),
                  r.addGrantType(A.AUTHORIZATION_CODE_GRANT),
                  r.addClientInfo(),
                  t.authenticationScheme !== e.AuthenticationScheme.POP ? [3, 2] : [4, new We(this.cryptoUtils).generateCnf(t)];
                case 1:
                  return o = u.sent(),
                  r.addPopToken(o.reqCnfString),
                  [3, 3];
                case 2:
                  if (t.authenticationScheme === e.AuthenticationScheme.SSH) {
                    if (!t.sshJwk) throw de.createMissingSshJwkError();
                    r.addSshJwk(t.sshJwk);
                  }
                  u.label = 3;
                case 3:
                  if (i = t.correlationId || this.config.cryptoInterface.createNewGuid(),
                  r.addCorrelationId(i),
                  (!oe.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && r.addClaims(t.claims, this.config.authOptions.clientCapabilities),
                  a = void 0,
                  t.clientInfo) {
                    try {
                      s = pe(t.clientInfo, this.cryptoUtils),
                      a = {
                        credential: `${s.uid}${R.CLIENT_INFO_SEPARATOR}${s.utid}`,
                        type: Ae.HOME_ACCOUNT_ID,
                      };
                    } catch (e) {
                      this.logger.verbose(`Could not parse client info for CCS Header: ${e}`);
                    }
                  } else a = t.ccsCredential;
                  if (this.config.systemOptions.preventCorsPreflight && a) {
                    switch (a.type) {
                      case Ae.HOME_ACCOUNT_ID:
                        try {
                          s = ge(a.credential),
                          r.addCcsOid(s);
                        } catch (e) {
                          this.logger.verbose(`Could not parse home account ID for CCS Header: ${e}`);
                        }
                        break;
                      case Ae.UPN:
                        r.addCcsUpn(a.credential);
                    }
                  }
                  return t.tokenBodyParameters && r.addExtraQueryParameters(t.tokenBodyParameters),
                  !t.enableSpaAuthorizationCode || t.tokenBodyParameters && t.tokenBodyParameters[y.RETURN_SPA_CODE] || r.addExtraQueryParameters(((c = {})[y.RETURN_SPA_CODE] = '1',
                  c)),
                  [2, r.createQueryString()];
              }
            }
            ));
          }
          ));
        }
        ,
        r.prototype.createAuthCodeUrlQueryString = function (t) {
          return h(this, void 0, void 0, (function () {
            let r; let n; let o; let i; let a; let s; let
              c;
            return p(this, (function (u) {
              switch (u.label) {
                case 0:
                  if ((r = new Me()).addClientId(this.config.authOptions.clientId),
                  n = g(t.scopes || [], t.extraScopesToConsent || []),
                  r.addScopes(n),
                  r.addRedirectUri(t.redirectUri),
                  o = t.correlationId || this.config.cryptoInterface.createNewGuid(),
                  r.addCorrelationId(o),
                  r.addResponseMode(t.responseMode),
                  r.addResponseTypeCode(),
                  r.addLibraryInfo(this.config.libraryInfo),
                  r.addApplicationTelemetry(this.config.telemetry.application),
                  r.addClientInfo(),
                  t.codeChallenge && t.codeChallengeMethod && r.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod),
                  t.prompt && r.addPrompt(t.prompt),
                  t.domainHint && r.addDomainHint(t.domainHint),
                  t.prompt !== w.SELECT_ACCOUNT) {
                    if (t.sid && t.prompt === w.NONE) {
                      this.logger.verbose('createAuthCodeUrlQueryString: Prompt is none, adding sid from request'),
                      r.addSid(t.sid);
                    } else if (t.account) {
                      if (i = this.extractAccountSid(t.account),
                      a = this.extractLoginHint(t.account)) {
                        this.logger.verbose('createAuthCodeUrlQueryString: login_hint claim present on account'),
                        r.addLoginHint(a);
                        try {
                          s = ge(t.account.homeAccountId),
                          r.addCcsOid(s);
                        } catch (e) {
                          this.logger.verbose('createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header');
                        }
                      } else if (i && t.prompt === w.NONE) {
                        this.logger.verbose('createAuthCodeUrlQueryString: Prompt is none, adding sid from account'),
                        r.addSid(i);
                        try {
                          s = ge(t.account.homeAccountId),
                          r.addCcsOid(s);
                        } catch (e) {
                          this.logger.verbose('createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header');
                        }
                      } else if (t.loginHint) {
                        this.logger.verbose('createAuthCodeUrlQueryString: Adding login_hint from request'),
                        r.addLoginHint(t.loginHint),
                        r.addCcsUpn(t.loginHint);
                      } else if (t.account.username) {
                        this.logger.verbose('createAuthCodeUrlQueryString: Adding login_hint from account'),
                        r.addLoginHint(t.account.username);
                        try {
                          s = ge(t.account.homeAccountId),
                          r.addCcsOid(s);
                        } catch (e) {
                          this.logger.verbose('createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header');
                        }
                      }
                    } else {
                      t.loginHint && (this.logger.verbose('createAuthCodeUrlQueryString: No account, adding login_hint from request'),
                      r.addLoginHint(t.loginHint),
                      r.addCcsUpn(t.loginHint));
                    }
                  } else this.logger.verbose('createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints');
                  return t.nonce && r.addNonce(t.nonce),
                  t.state && r.addState(t.state),
                  (!oe.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && r.addClaims(t.claims, this.config.authOptions.clientCapabilities),
                  t.extraQueryParameters && r.addExtraQueryParameters(t.extraQueryParameters),
                  t.nativeBroker ? (r.addNativeBroker(),
                  t.authenticationScheme !== e.AuthenticationScheme.POP ? [3, 2] : [4, new We(this.cryptoUtils).generateCnf(t)]) : [3, 2];
                case 1:
                  c = u.sent(),
                  r.addPopToken(c.reqCnfHash),
                  u.label = 2;
                case 2:
                  return [2, r.createQueryString()];
              }
            }
            ));
          }
          ));
        }
        ,
        r.prototype.createLogoutUrlQueryString = function (e) {
          const t = new Me();
          return e.postLogoutRedirectUri && t.addPostLogoutRedirectUri(e.postLogoutRedirectUri),
          e.correlationId && t.addCorrelationId(e.correlationId),
          e.idTokenHint && t.addIdTokenHint(e.idTokenHint),
          e.state && t.addState(e.state),
          e.logoutHint && t.addLogoutHint(e.logoutHint),
          e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters),
          t.createQueryString();
        }
        ,
        r.prototype.extractAccountSid = function (e) {
          let t;
          return ((t = e.idTokenClaims) === null || void 0 === t ? void 0 : t.sid) || null;
        }
        ,
        r.prototype.extractLoginHint = function (e) {
          let t;
          return ((t = e.idTokenClaims) === null || void 0 === t ? void 0 : t.login_hint) || null;
        }
        ,
        r;
      }(Pe));
      /*! @azure/msal-common v8.0.0 2022-11-07 */
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    e.PerformanceEvents = void 0,
    (je = e.PerformanceEvents || (e.PerformanceEvents = {})).AcquireTokenByCode = 'acquireTokenByCode',
    je.AcquireTokenByRefreshToken = 'acquireTokenByRefreshToken',
    je.AcquireTokenSilent = 'acquireTokenSilent',
    je.AcquireTokenSilentAsync = 'acquireTokenSilentAsync',
    je.AcquireTokenPopup = 'acquireTokenPopup',
    je.CryptoOptsGetPublicKeyThumbprint = 'cryptoOptsGetPublicKeyThumbprint',
    je.CryptoOptsSignJwt = 'cryptoOptsSignJwt',
    je.SilentCacheClientAcquireToken = 'silentCacheClientAcquireToken',
    je.SilentIframeClientAcquireToken = 'silentIframeClientAcquireToken',
    je.SilentRefreshClientAcquireToken = 'silentRefreshClientAcquireToken',
    je.SsoSilent = 'ssoSilent',
    je.StandardInteractionClientGetDiscoveredAuthority = 'standardInteractionClientGetDiscoveredAuthority',
    je.FetchAccountIdWithNativeBroker = 'fetchAccountIdWithNativeBroker',
    je.NativeInteractionClientAcquireToken = 'nativeInteractionClientAcquireToken',
    je.BaseClientCreateTokenRequestHeaders = 'baseClientCreateTokenRequestHeaders',
    je.BrokerHandhshake = 'brokerHandshake',
    je.AcquireTokenByRefreshTokenInBroker = 'acquireTokenByRefreshTokenInBroker',
    je.AcquireTokenByBroker = 'acquireTokenByBroker',
    je.RefreshTokenClientExecuteTokenRequest = 'refreshTokenClientExecuteTokenRequest',
    je.RefreshTokenClientAcquireToken = 'refreshTokenClientAcquireToken',
    je.RefreshTokenClientAcquireTokenWithCachedRefreshToken = 'refreshTokenClientAcquireTokenWithCachedRefreshToken',
    (function (e) {
      e[e.NotStarted = 0] = 'NotStarted',
      e[e.InProgress = 1] = 'InProgress',
      e[e.Completed = 2] = 'Completed';
    }(Ye || (Ye = {})));
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    const Ze = (function (t) {
      function r(e, r) {
        return t.call(this, e, r) || this;
      }
      return l(r, t),
      r.prototype.acquireToken = function (t) {
        let r; let n; let
          o;
        return h(this, void 0, void 0, (function () {
          let i; let a; let s; let c; let u; const
            l = this;
          return p(this, (function (d) {
            switch (d.label) {
              case 0:
                return i = (r = this.performanceClient) === null || void 0 === r ? void 0 : r.startMeasurement(e.PerformanceEvents.RefreshTokenClientAcquireToken, t.correlationId),
                this.logger.verbose('RefreshTokenClientAcquireToken called', t.correlationId),
                a = qe.nowSeconds(),
                [4, this.executeTokenRequest(t, this.authority)];
              case 1:
                return s = d.sent(),
                i == null || i.addStaticFields({
                  refreshTokenSize: ((n = s.body.refresh_token) === null || void 0 === n ? void 0 : n.length) || 0,
                }),
                c = (o = s.headers) === null || void 0 === o ? void 0 : o[f.X_MS_REQUEST_ID],
                (u = new Je(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin)).validateTokenResponse(s.body),
                [2, u.handleServerTokenResponse(s.body, this.authority, a, t, void 0, void 0, !0, t.forceCache, c).then(((e) => (i == null || i.endMeasurement({
                  success: !0,
                }),
                e)
                )).catch(((e) => {
                  throw l.logger.verbose('Error in fetching refresh token', t.correlationId),
                  i == null || i.endMeasurement({
                    errorCode: e.errorCode,
                    subErrorCode: e.subError,
                    success: !1,
                  }),
                  e;
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      r.prototype.acquireTokenByRefreshToken = function (e) {
        return h(this, void 0, void 0, (function () {
          let t; let
            r;
          return p(this, (function (n) {
            if (!e) throw de.createEmptyTokenRequestError();
            if (!e.account) throw ne.createNoAccountInSilentRequestError();
            if (this.cacheManager.isAppMetadataFOCI(e.account.environment, this.config.authOptions.clientId)) {
              try {
                return [2, this.acquireTokenWithCachedRefreshToken(e, !0)];
              } catch (n) {
                if (t = n instanceof Ke && n.errorCode === Fe.noTokensFoundError.code,
                r = n instanceof be && n.errorCode === J && n.subError === X,
                t || r) return [2, this.acquireTokenWithCachedRefreshToken(e, !1)];
                throw n;
              }
            }
            return [2, this.acquireTokenWithCachedRefreshToken(e, !1)];
          }
          ));
        }
        ));
      }
      ,
      r.prototype.acquireTokenWithCachedRefreshToken = function (t, r) {
        let n;
        return h(this, void 0, void 0, (function () {
          let o; let i; let
            a;
          return p(this, (function (s) {
            if (o = (n = this.performanceClient) === null || void 0 === n ? void 0 : n.startMeasurement(e.PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId),
            this.logger.verbose('RefreshTokenClientAcquireTokenWithCachedRefreshToken called', t.correlationId),
            !(i = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, t.account, r))) {
              throw o == null || o.discardMeasurement(),
              Ke.createNoTokensFoundError();
            }
            return o == null || o.endMeasurement({
              success: !0,
            }),
            a = {
              ...t,
              refreshToken: i.secret,
              authenticationScheme: t.authenticationScheme || e.AuthenticationScheme.BEARER,
              ccsCredential: {
                credential: t.account.homeAccountId,
                type: Ae.HOME_ACCOUNT_ID,
              },
            },
            [2, this.acquireToken(a)];
          }
          ));
        }
        ));
      }
      ,
      r.prototype.executeTokenRequest = function (t, r) {
        let n;
        return h(this, void 0, void 0, (function () {
          let o; let i; let a; let s; let c; let
            u;
          return p(this, (function (l) {
            switch (l.label) {
              case 0:
                return o = (n = this.performanceClient) === null || void 0 === n ? void 0 : n.startMeasurement(e.PerformanceEvents.RefreshTokenClientExecuteTokenRequest, t.correlationId),
                [4, this.createTokenRequestBody(t)];
              case 1:
                return i = l.sent(),
                a = this.createTokenQueryParameters(t),
                s = this.createTokenRequestHeaders(t.ccsCredential),
                c = {
                  clientId: this.config.authOptions.clientId,
                  authority: r.canonicalAuthority,
                  scopes: t.scopes,
                  claims: t.claims,
                  authenticationScheme: t.authenticationScheme,
                  resourceRequestMethod: t.resourceRequestMethod,
                  resourceRequestUri: t.resourceRequestUri,
                  shrClaims: t.shrClaims,
                  sshKid: t.sshKid,
                },
                u = ze.appendQueryString(r.tokenEndpoint, a),
                [2, this.executePostToTokenEndpoint(u, i, s, c).then(((e) => (o == null || o.endMeasurement({
                  success: !0,
                }),
                e)
                )).catch(((e) => {
                  throw o == null || o.endMeasurement({
                    success: !1,
                  }),
                  e;
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      r.prototype.createTokenQueryParameters = function (e) {
        const t = new Me();
        return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters),
        t.createQueryString();
      }
      ,
      r.prototype.createTokenRequestBody = function (t) {
        let r;
        return h(this, void 0, void 0, (function () {
          let n; let o; let i; let a; let s; let
            c;
          return p(this, (function (u) {
            switch (u.label) {
              case 0:
                return n = t.correlationId,
                o = (r = this.performanceClient) === null || void 0 === r ? void 0 : r.startMeasurement(e.PerformanceEvents.BaseClientCreateTokenRequestHeaders, n),
                (i = new Me()).addClientId(this.config.authOptions.clientId),
                i.addScopes(t.scopes),
                i.addGrantType(A.REFRESH_TOKEN_GRANT),
                i.addClientInfo(),
                i.addLibraryInfo(this.config.libraryInfo),
                i.addApplicationTelemetry(this.config.telemetry.application),
                i.addThrottling(),
                this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager),
                i.addCorrelationId(n),
                i.addRefreshToken(t.refreshToken),
                this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret),
                this.config.clientCredentials.clientAssertion && (a = this.config.clientCredentials.clientAssertion,
                i.addClientAssertion(a.assertion),
                i.addClientAssertionType(a.assertionType)),
                t.authenticationScheme !== e.AuthenticationScheme.POP ? [3, 2] : [4, new We(this.cryptoUtils).generateCnf(t)];
              case 1:
                return s = u.sent(),
                i.addPopToken(s.reqCnfString),
                [3, 3];
              case 2:
                if (t.authenticationScheme === e.AuthenticationScheme.SSH) {
                  if (!t.sshJwk) {
                    throw o == null || o.endMeasurement({
                      success: !1,
                    }),
                    de.createMissingSshJwkError();
                  }
                  i.addSshJwk(t.sshJwk);
                }
                u.label = 3;
              case 3:
                if ((!oe.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities),
                this.config.systemOptions.preventCorsPreflight && t.ccsCredential) {
                  switch (t.ccsCredential.type) {
                    case Ae.HOME_ACCOUNT_ID:
                      try {
                        c = ge(t.ccsCredential.credential),
                        i.addCcsOid(c);
                      } catch (e) {
                        this.logger.verbose(`Could not parse home account ID for CCS Header: ${e}`);
                      }
                      break;
                    case Ae.UPN:
                      i.addCcsUpn(t.ccsCredential.credential);
                  }
                }
                return o == null || o.endMeasurement({
                  success: !0,
                }),
                [2, i.createQueryString()];
            }
          }
          ));
        }
        ));
      }
      ,
      r;
    }(Pe));
    const $e = (function (e) {
      function t(t, r) {
        return e.call(this, t, r) || this;
      }
      return l(t, e),
      t.prototype.acquireToken = function (e) {
        return h(this, void 0, void 0, (function () {
          let t;
          return p(this, (function (r) {
            switch (r.label) {
              case 0:
                return r.trys.push([0, 2, , 3]),
                [4, this.acquireCachedToken(e)];
              case 1:
                return [2, r.sent()];
              case 2:
                if ((t = r.sent()) instanceof ne && t.errorCode === re.tokenRefreshRequired.code) return [2, new Ze(this.config, this.performanceClient).acquireTokenByRefreshToken(e)];
                throw t;
              case 3:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireCachedToken = function (e) {
        let t; let r; let n; let
          o;
        return h(this, void 0, void 0, (function () {
          let i; let
            a;
          return p(this, (function (s) {
            switch (s.label) {
              case 0:
                if (!e) throw de.createEmptyTokenRequestError();
                if (e.forceRefresh) {
                  throw (t = this.serverTelemetryManager) === null || void 0 === t || t.setCacheOutcome(z.FORCE_REFRESH),
                  this.logger.info('SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true.'),
                  ne.createRefreshRequiredError();
                }
                if (!e.account) throw ne.createNoAccountInSilentRequestError();
                if (i = e.authority || this.authority.getPreferredCache(),
                !(a = this.cacheManager.readCacheRecord(e.account, this.config.authOptions.clientId, e, i)).accessToken) {
                  throw (r = this.serverTelemetryManager) === null || void 0 === r || r.setCacheOutcome(z.NO_CACHED_ACCESS_TOKEN),
                  this.logger.info('SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.'),
                  ne.createRefreshRequiredError();
                }
                if (qe.wasClockTurnedBack(a.accessToken.cachedAt) || qe.isTokenExpired(a.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                  throw (n = this.serverTelemetryManager) === null || void 0 === n || n.setCacheOutcome(z.CACHED_ACCESS_TOKEN_EXPIRED),
                  this.logger.info(`SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`),
                  ne.createRefreshRequiredError();
                }
                if (a.accessToken.refreshOn && qe.isTokenExpired(a.accessToken.refreshOn, 0)) {
                  throw (o = this.serverTelemetryManager) === null || void 0 === o || o.setCacheOutcome(z.REFRESH_CACHED_ACCESS_TOKEN),
                  this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."),
                  ne.createRefreshRequiredError();
                }
                return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(),
                [4, this.generateResultFromCacheRecord(a, e)];
              case 1:
                return [2, s.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.generateResultFromCacheRecord = function (e, t) {
        return h(this, void 0, void 0, (function () {
          let r; let
            n;
          return p(this, (function (o) {
            switch (o.label) {
              case 0:
                if (e.idToken && (r = new me(e.idToken.secret, this.config.cryptoInterface)),
                t.maxAge || t.maxAge === 0) {
                  if (!(n = r == null ? void 0 : r.claims.auth_time)) throw ne.createAuthTimeNotFoundError();
                  me.checkMaxAge(n, t.maxAge);
                }
                return [4, Je.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, t, r)];
              case 1:
                return [2, o.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      t;
    }(Pe));
      /*! @azure/msal-common v8.0.0 2022-11-07 */
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    function et(e) {
      return e.hasOwnProperty('authorization_endpoint') && e.hasOwnProperty('token_endpoint') && e.hasOwnProperty('issuer') && e.hasOwnProperty('jwks_uri');
    }
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    let tt; const rt = {
      'https://login.microsoftonline.com/common/': {
        token_endpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.microsoftonline.com/common/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.microsoftonline.com/{tenantid}/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
        authorization_endpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.microsoftonline.com/common/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'microsoftonline.com',
        cloud_graph_host_name: 'graph.windows.net',
        msgraph_host: 'graph.microsoft.com',
        rbac_url: 'https://pas.windows.net',
      },
      'https://login.chinacloudapi.cn/common/': {
        token_endpoint: 'https://login.chinacloudapi.cn/common/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.chinacloudapi.cn/common/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.partner.microsoftonline.cn/{tenantid}/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://microsoftgraph.chinacloudapi.cn/oidc/userinfo',
        authorization_endpoint: 'https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.chinacloudapi.cn/common/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.chinacloudapi.cn/common/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'partner.microsoftonline.cn',
        cloud_graph_host_name: 'graph.chinacloudapi.cn',
        msgraph_host: 'microsoftgraph.chinacloudapi.cn',
        rbac_url: 'https://pas.chinacloudapi.cn',
      },
      'https://login.microsoftonline.us/common/': {
        token_endpoint: 'https://login.microsoftonline.us/common/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.microsoftonline.us/common/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.microsoftonline.us/{tenantid}/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
        authorization_endpoint: 'https://login.microsoftonline.us/common/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.microsoftonline.us/common/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.microsoftonline.us/common/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.microsoftonline.us/common/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'microsoftonline.us',
        cloud_graph_host_name: 'graph.windows.net',
        msgraph_host: 'graph.microsoft.com',
        rbac_url: 'https://pasff.usgovcloudapi.net',
      },
      'https://login.microsoftonline.com/consumers/': {
        token_endpoint: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.microsoftonline.com/consumers/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
        authorization_endpoint: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.microsoftonline.com/consumers/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'microsoftonline.com',
        cloud_graph_host_name: 'graph.windows.net',
        msgraph_host: 'graph.microsoft.com',
        rbac_url: 'https://pas.windows.net',
      },
      'https://login.chinacloudapi.cn/consumers/': {
        token_endpoint: 'https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://microsoftgraph.chinacloudapi.cn/oidc/userinfo',
        authorization_endpoint: 'https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.chinacloudapi.cn/consumers/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'partner.microsoftonline.cn',
        cloud_graph_host_name: 'graph.chinacloudapi.cn',
        msgraph_host: 'microsoftgraph.chinacloudapi.cn',
        rbac_url: 'https://pas.chinacloudapi.cn',
      },
      'https://login.microsoftonline.us/consumers/': {
        token_endpoint: 'https://login.microsoftonline.us/consumers/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.microsoftonline.us/consumers/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
        authorization_endpoint: 'https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.microsoftonline.us/consumers/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.microsoftonline.us/consumers/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'microsoftonline.us',
        cloud_graph_host_name: 'graph.windows.net',
        msgraph_host: 'graph.microsoft.com',
        rbac_url: 'https://pasff.usgovcloudapi.net',
      },
      'https://login.microsoftonline.com/organizations/': {
        token_endpoint: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.microsoftonline.com/organizations/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.microsoftonline.com/{tenantid}/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
        authorization_endpoint: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.microsoftonline.com/organizations/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'microsoftonline.com',
        cloud_graph_host_name: 'graph.windows.net',
        msgraph_host: 'graph.microsoft.com',
        rbac_url: 'https://pas.windows.net',
      },
      'https://login.chinacloudapi.cn/organizations/': {
        token_endpoint: 'https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.partner.microsoftonline.cn/{tenantid}/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://microsoftgraph.chinacloudapi.cn/oidc/userinfo',
        authorization_endpoint: 'https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.chinacloudapi.cn/organizations/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'partner.microsoftonline.cn',
        cloud_graph_host_name: 'graph.chinacloudapi.cn',
        msgraph_host: 'microsoftgraph.chinacloudapi.cn',
        rbac_url: 'https://pas.chinacloudapi.cn',
      },
      'https://login.microsoftonline.us/organizations/': {
        token_endpoint: 'https://login.microsoftonline.us/organizations/oauth2/v2.0/token',
        token_endpoint_auth_methods_supported: ['client_secret_post', 'private_key_jwt', 'client_secret_basic'],
        jwks_uri: 'https://login.microsoftonline.us/organizations/discovery/v2.0/keys',
        response_modes_supported: ['query', 'fragment', 'form_post'],
        subject_types_supported: ['pairwise'],
        id_token_signing_alg_values_supported: ['RS256'],
        response_types_supported: ['code', 'id_token', 'code id_token', 'id_token token'],
        scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
        issuer: 'https://login.microsoftonline.us/{tenantid}/v2.0',
        request_uri_parameter_supported: !1,
        userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
        authorization_endpoint: 'https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize',
        device_authorization_endpoint: 'https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode',
        http_logout_supported: !0,
        frontchannel_logout_supported: !0,
        end_session_endpoint: 'https://login.microsoftonline.us/organizations/oauth2/v2.0/logout',
        claims_supported: ['sub', 'iss', 'cloud_instance_name', 'cloud_instance_host_name', 'cloud_graph_host_name', 'msgraph_host', 'aud', 'exp', 'iat', 'auth_time', 'acr', 'nonce', 'preferred_username', 'name', 'tid', 'ver', 'at_hash', 'c_hash', 'email'],
        kerberos_endpoint: 'https://login.microsoftonline.us/organizations/kerberos',
        tenant_region_scope: null,
        cloud_instance_name: 'microsoftonline.us',
        cloud_graph_host_name: 'graph.windows.net',
        msgraph_host: 'graph.microsoft.com',
        rbac_url: 'https://pasff.usgovcloudapi.net',
      },
    }; const
      nt = {
        'https://login.microsoftonline.com/common/': {
          tenant_discovery_endpoint: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.chinacloudapi.cn/common/': {
          tenant_discovery_endpoint: 'https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.microsoftonline.us/common/': {
          tenant_discovery_endpoint: 'https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.microsoftonline.com/consumers/': {
          tenant_discovery_endpoint: 'https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.chinacloudapi.cn/consumers/': {
          tenant_discovery_endpoint: 'https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.microsoftonline.us/consumers/': {
          tenant_discovery_endpoint: 'https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.microsoftonline.com/organizations/': {
          tenant_discovery_endpoint: 'https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.chinacloudapi.cn/organizations/': {
          tenant_discovery_endpoint: 'https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
        'https://login.microsoftonline.us/organizations/': {
          tenant_discovery_endpoint: 'https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration',
          'api-version': '1.1',
          metadata: [{
            preferred_network: 'login.microsoftonline.com',
            preferred_cache: 'login.windows.net',
            aliases: ['login.microsoftonline.com', 'login.windows.net', 'login.microsoft.com', 'sts.windows.net'],
          }, {
            preferred_network: 'login.partner.microsoftonline.cn',
            preferred_cache: 'login.partner.microsoftonline.cn',
            aliases: ['login.partner.microsoftonline.cn', 'login.chinacloudapi.cn'],
          }, {
            preferred_network: 'login.microsoftonline.de',
            preferred_cache: 'login.microsoftonline.de',
            aliases: ['login.microsoftonline.de'],
          }, {
            preferred_network: 'login.microsoftonline.us',
            preferred_cache: 'login.microsoftonline.us',
            aliases: ['login.microsoftonline.us', 'login.usgovcloudapi.net'],
          }, {
            preferred_network: 'login-us.microsoftonline.com',
            preferred_cache: 'login-us.microsoftonline.com',
            aliases: ['login-us.microsoftonline.com'],
          }],
        },
      };
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    e.ProtocolMode = void 0,
    (tt = e.ProtocolMode || (e.ProtocolMode = {})).AAD = 'AAD',
    tt.OIDC = 'OIDC';
    /*! @azure/msal-common v8.0.0 2022-11-07 */
    const ot = (function () {
      function e() {
        this.expiresAt = qe.nowSeconds() + L;
      }
      return e.prototype.updateCloudDiscoveryMetadata = function (e, t) {
        this.aliases = e.aliases,
        this.preferred_cache = e.preferred_cache,
        this.preferred_network = e.preferred_network,
        this.aliasesFromNetwork = t;
      }
      ,
      e.prototype.updateEndpointMetadata = function (e, t) {
        this.authorization_endpoint = e.authorization_endpoint,
        this.token_endpoint = e.token_endpoint,
        this.end_session_endpoint = e.end_session_endpoint,
        this.issuer = e.issuer,
        this.endpointsFromNetwork = t,
        this.jwks_uri = e.jwks_uri;
      }
      ,
      e.prototype.updateCanonicalAuthority = function (e) {
        this.canonical_authority = e;
      }
      ,
      e.prototype.resetExpiresAt = function () {
        this.expiresAt = qe.nowSeconds() + L;
      }
      ,
      e.prototype.isExpired = function () {
        return this.expiresAt <= qe.nowSeconds();
      }
      ,
      e.isAuthorityMetadataEntity = function (e, t) {
        return !!t && (e.indexOf(H) === 0 && t.hasOwnProperty('aliases') && t.hasOwnProperty('preferred_cache') && t.hasOwnProperty('preferred_network') && t.hasOwnProperty('canonical_authority') && t.hasOwnProperty('authorization_endpoint') && t.hasOwnProperty('token_endpoint') && t.hasOwnProperty('issuer') && t.hasOwnProperty('aliasesFromNetwork') && t.hasOwnProperty('endpointsFromNetwork') && t.hasOwnProperty('expiresAt') && t.hasOwnProperty('jwks_uri'));
      }
      ,
      e;
    }());
      /*! @azure/msal-common v8.0.0 2022-11-07 */
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    let it; let at; let st; let ct; let ut; let lt; let dt; let ht; const pt = (function () {
      function e(e) {
        this.networkInterface = e;
      }
      return e.prototype.detectRegion = function (t, r, n) {
        return h(this, void 0, void 0, (function () {
          let o; let i; let a; let s; let
            c;
          return p(this, (function (u) {
            switch (u.label) {
              case 0:
                if (o = t) return [3, 8];
                i = e.IMDS_OPTIONS,
                n && (i.proxyUrl = n),
                u.label = 1;
              case 1:
                return u.trys.push([1, 6, , 7]),
                [4, this.getRegionFromIMDS(C.IMDS_VERSION, i)];
              case 2:
                return (a = u.sent()).status === K.httpSuccess && (o = a.body,
                r.region_source = B.IMDS),
                a.status !== K.httpBadRequest ? [3, 5] : [4, this.getCurrentVersion(i)];
              case 3:
                return (s = u.sent()) ? [4, this.getRegionFromIMDS(s, i)] : (r.region_source = B.FAILED_AUTO_DETECTION,
                [2, null]);
              case 4:
                (c = u.sent()).status === K.httpSuccess && (o = c.body,
                r.region_source = B.IMDS),
                u.label = 5;
              case 5:
                return [3, 7];
              case 6:
                return u.sent(),
                r.region_source = B.FAILED_AUTO_DETECTION,
                [2, null];
              case 7:
                return [3, 9];
              case 8:
                r.region_source = B.ENVIRONMENT_VARIABLE,
                u.label = 9;
              case 9:
                return o || (r.region_source = B.FAILED_AUTO_DETECTION),
                [2, o || null];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.getRegionFromIMDS = function (e, t) {
        return h(this, void 0, void 0, (function () {
          return p(this, (function (r) {
            return [2, this.networkInterface.sendGetRequestAsync(`${C.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, C.IMDS_TIMEOUT)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.getCurrentVersion = function (e) {
        return h(this, void 0, void 0, (function () {
          let t;
          return p(this, (function (r) {
            switch (r.label) {
              case 0:
                return r.trys.push([0, 2, , 3]),
                [4, this.networkInterface.sendGetRequestAsync(`${C.IMDS_ENDPOINT}?format=json`, e)];
              case 1:
                return (t = r.sent()).status === K.httpBadRequest && t.body && t.body['newest-versions'] && t.body['newest-versions'].length > 0 ? [2, t.body['newest-versions'][0]] : [2, null];
              case 2:
                return r.sent(),
                [2, null];
              case 3:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e.IMDS_OPTIONS = {
        headers: {
          Metadata: 'true',
        },
      },
      e;
    }()); const gt = (function () {
      function t(e, t, r, n, o) {
        this.canonicalAuthority = e,
        this._canonicalAuthority.validateAsUri(),
        this.networkInterface = t,
        this.cacheManager = r,
        this.authorityOptions = n,
        this.regionDiscovery = new pt(t),
        this.regionDiscoveryMetadata = {
          region_used: void 0,
          region_source: void 0,
          region_outcome: void 0,
        },
        this.proxyUrl = o || C.EMPTY_STRING;
      }
      return Object.defineProperty(t.prototype, 'authorityType', {
        get() {
          const e = this.canonicalAuthorityUrlComponents.PathSegments;
          if (e.length) {
            switch (e[0].toLowerCase()) {
              case C.ADFS:
                return ce.Adfs;
              case C.DSTS:
                return ce.Dsts;
            }
          }
          return ce.Default;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'protocolMode', {
        get() {
          return this.authorityOptions.protocolMode;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'options', {
        get() {
          return this.authorityOptions;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'canonicalAuthority', {
        get() {
          return this._canonicalAuthority.urlString;
        },
        set(e) {
          this._canonicalAuthority = new ze(e),
          this._canonicalAuthority.validateAsUri(),
          this._canonicalAuthorityUrlComponents = null;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'canonicalAuthorityUrlComponents', {
        get() {
          return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()),
          this._canonicalAuthorityUrlComponents;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'hostnameAndPort', {
        get() {
          return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'tenant', {
        get() {
          return this.canonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'authorizationEndpoint', {
        get() {
          if (this.discoveryComplete()) {
            const e = this.replacePath(this.metadata.authorization_endpoint);
            return this.replaceTenant(e);
          }
          throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'tokenEndpoint', {
        get() {
          if (this.discoveryComplete()) {
            const e = this.replacePath(this.metadata.token_endpoint);
            return this.replaceTenant(e);
          }
          throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'deviceCodeEndpoint', {
        get() {
          if (this.discoveryComplete()) {
            const e = this.replacePath(this.metadata.token_endpoint.replace('/token', '/devicecode'));
            return this.replaceTenant(e);
          }
          throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'endSessionEndpoint', {
        get() {
          if (this.discoveryComplete()) {
            if (!this.metadata.end_session_endpoint) throw ne.createLogoutNotSupportedError();
            const e = this.replacePath(this.metadata.end_session_endpoint);
            return this.replaceTenant(e);
          }
          throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'selfSignedJwtAudience', {
        get() {
          if (this.discoveryComplete()) {
            const e = this.replacePath(this.metadata.issuer);
            return this.replaceTenant(e);
          }
          throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'jwksUri', {
        get() {
          if (this.discoveryComplete()) {
            const e = this.replacePath(this.metadata.jwks_uri);
            return this.replaceTenant(e);
          }
          throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
        },
        enumerable: !1,
        configurable: !0,
      }),
      t.prototype.replaceTenant = function (e) {
        return e.replace(/{tenant}|{tenantid}/g, this.tenant);
      }
      ,
      t.prototype.replacePath = function (e) {
        let t = e;
        const r = new ze(this.metadata.canonical_authority).getUrlComponents().PathSegments;
        return this.canonicalAuthorityUrlComponents.PathSegments.forEach(((e, n) => {
          const o = r[n];
          e !== o && (t = t.replace(`/${o}/`, `/${e}/`));
        }
        )),
        t;
      }
      ,
      Object.defineProperty(t.prototype, 'defaultOpenIdConfigurationEndpoint', {
        get() {
          return this.authorityType === ce.Adfs || this.authorityType === ce.Dsts || this.protocolMode === e.ProtocolMode.OIDC ? `${this.canonicalAuthority}.well-known/openid-configuration` : `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t.prototype.discoveryComplete = function () {
        return !!this.metadata;
      }
      ,
      t.prototype.resolveEndpointsAsync = function () {
        return h(this, void 0, void 0, (function () {
          let e; let t; let r; let
            n;
          return p(this, (function (o) {
            switch (o.label) {
              case 0:
                return (e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort)) || (e = new ot()).updateCanonicalAuthority(this.canonicalAuthority),
                [4, this.updateCloudDiscoveryMetadata(e)];
              case 1:
                return t = o.sent(),
                this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network),
                [4, this.updateEndpointMetadata(e)];
              case 2:
                return r = o.sent(),
                t !== M.CACHE && r !== M.CACHE && (e.resetExpiresAt(),
                e.updateCanonicalAuthority(this.canonicalAuthority)),
                n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache),
                this.cacheManager.setAuthorityMetadata(n, e),
                this.metadata = e,
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.updateEndpointMetadata = function (e) {
        let t; let
          r;
        return h(this, void 0, void 0, (function () {
          let n; let
            o;
          return p(this, (function (i) {
            switch (i.label) {
              case 0:
                return (n = this.getEndpointMetadataFromConfig()) ? (e.updateEndpointMetadata(n, !1),
                [2, M.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, M.CACHE] : (o = this.getEndpointMetadataFromHardcodedValues(),
                [4, this.getEndpointMetadataFromNetwork()]);
              case 1:
                return (n = i.sent()) ? ((t = this.authorityOptions.azureRegionConfiguration) === null || void 0 === t ? void 0 : t.azureRegion) ? [4, this.updateMetadataWithRegionalInformation(n)] : [3, 3] : [3, 4];
              case 2:
                n = i.sent(),
                i.label = 3;
              case 3:
                return e.updateEndpointMetadata(n, !0),
                [2, M.NETWORK];
              case 4:
                return !o || this.authorityOptions.skipAuthorityMetadataCache ? [3, 7] : ((r = this.authorityOptions.azureRegionConfiguration) === null || void 0 === r ? void 0 : r.azureRegion) ? [4, this.updateMetadataWithRegionalInformation(o)] : [3, 6];
              case 5:
                o = i.sent(),
                i.label = 6;
              case 6:
                return e.updateEndpointMetadata(o, !1),
                [2, M.HARDCODED_VALUES];
              case 7:
                throw ne.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.isAuthoritySameType = function (e) {
        return new ze(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
      }
      ,
      t.prototype.getEndpointMetadataFromConfig = function () {
        if (this.authorityOptions.authorityMetadata) {
          try {
            return JSON.parse(this.authorityOptions.authorityMetadata);
          } catch (e) {
            throw de.createInvalidAuthorityMetadataError();
          }
        }
        return null;
      }
      ,
      t.prototype.getEndpointMetadataFromNetwork = function () {
        return h(this, void 0, void 0, (function () {
          let e; let
            t;
          return p(this, (function (r) {
            switch (r.label) {
              case 0:
                e = {},
                this.proxyUrl && (e.proxyUrl = this.proxyUrl),
                r.label = 1;
              case 1:
                return r.trys.push([1, 3, , 4]),
                [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, e)];
              case 2:
                return [2, et((t = r.sent()).body) ? t.body : null];
              case 3:
                return r.sent(),
                [2, null];
              case 4:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.getEndpointMetadataFromHardcodedValues = function () {
        return this.canonicalAuthority in rt ? rt[this.canonicalAuthority] : null;
      }
      ,
      t.prototype.updateMetadataWithRegionalInformation = function (e) {
        let r; let n; let o; let i; let
          a;
        return h(this, void 0, void 0, (function () {
          let s; let
            c;
          return p(this, (function (u) {
            switch (u.label) {
              case 0:
                return [4, this.regionDiscovery.detectRegion((r = this.authorityOptions.azureRegionConfiguration) === null || void 0 === r ? void 0 : r.environmentRegion, this.regionDiscoveryMetadata, this.proxyUrl)];
              case 1:
                return s = u.sent(),
                c = ((n = this.authorityOptions.azureRegionConfiguration) === null || void 0 === n ? void 0 : n.azureRegion) === C.AZURE_REGION_AUTO_DISCOVER_FLAG ? s : (o = this.authorityOptions.azureRegionConfiguration) === null || void 0 === o ? void 0 : o.azureRegion,
                ((i = this.authorityOptions.azureRegionConfiguration) === null || void 0 === i ? void 0 : i.azureRegion) === C.AZURE_REGION_AUTO_DISCOVER_FLAG ? this.regionDiscoveryMetadata.region_outcome = s ? G.AUTO_DETECTION_REQUESTED_SUCCESSFUL : G.AUTO_DETECTION_REQUESTED_FAILED : this.regionDiscoveryMetadata.region_outcome = s ? ((a = this.authorityOptions.azureRegionConfiguration) === null || void 0 === a ? void 0 : a.azureRegion) === s ? G.CONFIGURED_MATCHES_DETECTED : G.CONFIGURED_NOT_DETECTED : G.CONFIGURED_NO_AUTO_DETECTION,
                c ? (this.regionDiscoveryMetadata.region_used = c,
                [2, t.replaceWithRegionalInformation(e, c)]) : [2, e];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.updateCloudDiscoveryMetadata = function (e) {
        return h(this, void 0, void 0, (function () {
          let t; let
            r;
          return p(this, (function (n) {
            switch (n.label) {
              case 0:
                return (t = this.getCloudDiscoveryMetadataFromConfig()) ? (e.updateCloudDiscoveryMetadata(t, !1),
                [2, M.CONFIG]) : this.isAuthoritySameType(e) && e.aliasesFromNetwork && !e.isExpired() ? [2, M.CACHE] : (r = this.getCloudDiscoveryMetadataFromHarcodedValues(),
                [4, this.getCloudDiscoveryMetadataFromNetwork()]);
              case 1:
                if (t = n.sent()) {
                  return e.updateCloudDiscoveryMetadata(t, !0),
                  [2, M.NETWORK];
                }
                if (r && !this.options.skipAuthorityMetadataCache) {
                  return e.updateCloudDiscoveryMetadata(r, !1),
                  [2, M.HARDCODED_VALUES];
                }
                throw de.createUntrustedAuthorityError();
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.getCloudDiscoveryMetadataFromConfig = function () {
        if (this.authorityOptions.cloudDiscoveryMetadata) {
          try {
            const e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
            let r = t.getCloudDiscoveryMetadataFromNetworkResponse(e.metadata, this.hostnameAndPort);
            if (r) return r;
          } catch (e) {
            throw de.createInvalidCloudDiscoveryMetadataError();
          }
        }
        return this.isInKnownAuthorities() ? t.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort) : null;
      }
      ,
      t.prototype.getCloudDiscoveryMetadataFromNetwork = function () {
        return h(this, void 0, void 0, (function () {
          let e; let r; let n; let o; let
            i;
          return p(this, (function (a) {
            switch (a.label) {
              case 0:
                e = `${C.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`,
                r = {},
                this.proxyUrl && (r.proxyUrl = this.proxyUrl),
                n = null,
                a.label = 1;
              case 1:
                return a.trys.push([1, 3, , 4]),
                [4, this.networkInterface.sendGetRequestAsync(e, r)];
              case 2:
                return o = a.sent(),
                i = (function (e) {
                  return e.hasOwnProperty('tenant_discovery_endpoint') && e.hasOwnProperty('metadata');
                }(o.body)) ? o.body.metadata : [],
                i.length === 0 ? [2, null] : (n = t.getCloudDiscoveryMetadataFromNetworkResponse(i, this.hostnameAndPort),
                [3, 4]);
              case 3:
                return a.sent(),
                [2, null];
              case 4:
                return n || (n = t.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)),
                [2, n];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function () {
        return this.canonicalAuthority in nt ? nt[this.canonicalAuthority] : null;
      }
      ,
      t.prototype.isInKnownAuthorities = function () {
        const e = this;
        return this.authorityOptions.knownAuthorities.filter(((t) => ze.getDomainFromUrl(t).toLowerCase() === e.hostnameAndPort
        )).length > 0;
      }
      ,
      t.generateAuthority = function (t, r) {
        let n;
        if (r && r.azureCloudInstance !== e.AzureCloudInstance.None) {
          const o = r.tenant ? r.tenant : C.DEFAULT_COMMON_TENANT;
          n = `${r.azureCloudInstance}/${o}/`;
        }
        return n || t;
      }
      ,
      t.createCloudDiscoveryMetadataFromHost = function (e) {
        return {
          preferred_network: e,
          preferred_cache: e,
          aliases: [e],
        };
      }
      ,
      t.getCloudDiscoveryMetadataFromNetworkResponse = function (e, t) {
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          if (n.aliases.indexOf(t) > -1) return n;
        }
        return null;
      }
      ,
      t.prototype.getPreferredCache = function () {
        if (this.discoveryComplete()) return this.metadata.preferred_cache;
        throw ne.createEndpointDiscoveryIncompleteError('Discovery incomplete.');
      }
      ,
      t.prototype.isAlias = function (e) {
        return this.metadata.aliases.indexOf(e) > -1;
      }
      ,
      t.isPublicCloudAuthority = function (e) {
        return C.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
      }
      ,
      t.buildRegionalAuthorityString = function (e, t, r) {
        const n = new ze(e);
        n.validateAsUri();
        const o = n.getUrlComponents();
        let i = `${t}.${o.HostNameAndPort}`;
        this.isPublicCloudAuthority(o.HostNameAndPort) && (i = `${t}.${C.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`);
        const a = ze.constructAuthorityUriFromObject({ ...n.getUrlComponents(), HostNameAndPort: i }).urlString;
        return r ? `${a}?${r}` : a;
      }
      ,
      t.replaceWithRegionalInformation = function (e, r) {
        return e.authorization_endpoint = t.buildRegionalAuthorityString(e.authorization_endpoint, r),
        e.token_endpoint = t.buildRegionalAuthorityString(e.token_endpoint, r, C.REGIONAL_AUTH_NON_MSI_QUERY_STRING),
        e.end_session_endpoint && (e.end_session_endpoint = t.buildRegionalAuthorityString(e.end_session_endpoint, r)),
        e;
      }
      ,
      t;
    }()); const ft = (function () {
      function e() {}
      return e.createDiscoveredInstance = function (t, r, n, o, i) {
        return h(this, void 0, void 0, (function () {
          let a; let
            s;
          return p(this, ((c) => {
            switch (c.label) {
              case 0:
                a = e.createInstance(t, r, n, o, i),
                c.label = 1;
              case 1:
                return c.trys.push([1, 3, , 4]),
                [4, a.resolveEndpointsAsync()];
              case 2:
                return c.sent(),
                [2, a];
              case 3:
                throw s = c.sent(),
                ne.createEndpointDiscoveryIncompleteError(s);
              case 4:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e.createInstance = function (e, t, r, n, o) {
        if (oe.isEmpty(e)) throw de.createUrlEmptyError();
        return new gt(e, t, r, n, o);
      }
      ,
      e;
    }()); const mt = (function () {
      function e() {
        this.failedRequests = [],
        this.errors = [],
        this.cacheHits = 0;
      }
      return e.isServerTelemetryEntity = function (e, t) {
        const r = e.indexOf(x.CACHE_KEY) === 0;
        let n = !0;
        return t && (n = t.hasOwnProperty('failedRequests') && t.hasOwnProperty('errors') && t.hasOwnProperty('cacheHits')),
        r && n;
      }
      ,
      e;
    }()); const vt = (function () {
      function e() {}
      return e.isThrottlingEntity = function (e, t) {
        let r = !1;
        e && (r = e.indexOf(V) === 0);
        let n = !0;
        return t && (n = t.hasOwnProperty('throttleTime')),
        r && n;
      }
      ,
      e;
    }()); const yt = {
      sendGetRequestAsync() {
        return Promise.reject(ee.createUnexpectedError('Network interface - sendGetRequestAsync() has not been implemented for the Network interface.'));
      },
      sendPostRequestAsync() {
        return Promise.reject(ee.createUnexpectedError('Network interface - sendPostRequestAsync() has not been implemented for the Network interface.'));
      },
    }; const Et = {
      code: 'missing_kid_error',
      desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided.",
    }; const Ct = {
      code: 'missing_alg_error',
      desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided.",
    }; const _t = (function (e) {
      function t(r, n) {
        const o = e.call(this, r, n) || this;
        return o.name = 'JoseHeaderError',
        Object.setPrototypeOf(o, t.prototype),
        o;
      }
      return l(t, e),
      t.createMissingKidError = function () {
        return new t(Et.code, Et.desc);
      }
      ,
      t.createMissingAlgError = function () {
        return new t(Ct.code, Ct.desc);
      }
      ,
      t;
    }(ee)); const Tt = (function () {
      function e(e) {
        this.typ = e.typ,
        this.alg = e.alg,
        this.kid = e.kid;
      }
      return e.getShrHeaderString = function (t) {
        if (!t.kid) throw _t.createMissingKidError();
        if (!t.alg) throw _t.createMissingAlgError();
        const r = new e({
          typ: t.typ || j.Jwt,
          kid: t.kid,
          alg: t.alg,
        });
        return JSON.stringify(r);
      }
      ,
      e;
    }()); const It = (function () {
      function e(e) {
        this.headers = e;
      }
      return e.prototype.getShrNonce = function () {
        const e = this.headers[f.AuthenticationInfo];
        if (e) {
          const t = this.parseChallenges(e);
          if (t.nextnonce) return t.nextnonce;
          throw de.createInvalidAuthenticationHeaderError(f.AuthenticationInfo, 'nextnonce challenge is missing.');
        }
        const r = this.headers[f.WWWAuthenticate];
        if (r) {
          const n = this.parseChallenges(r);
          if (n.nonce) return n.nonce;
          throw de.createInvalidAuthenticationHeaderError(f.WWWAuthenticate, 'nonce challenge is missing.');
        }
        throw de.createMissingNonceAuthenticationHeadersError();
      }
      ,
      e.prototype.parseChallenges = function (e) {
        const t = e.indexOf(' ');
        const r = e.substr(t + 1).split(',');
        const n = {};
        return r.forEach(((e) => {
          const t = e.split('=');
          const r = t[0];
          const o = t[1];
          n[r] = unescape(o.replace(/['"]+/g, C.EMPTY_STRING));
        }
        )),
        n;
      }
      ,
      e;
    }()); const wt = (function () {
      function e(e, t) {
        this.cacheOutcome = z.NO_CACHE_HIT,
        this.cacheManager = t,
        this.apiId = e.apiId,
        this.correlationId = e.correlationId,
        this.wrapperSKU = e.wrapperSKU || C.EMPTY_STRING,
        this.wrapperVer = e.wrapperVer || C.EMPTY_STRING,
        this.telemetryCacheKey = x.CACHE_KEY + R.CACHE_KEY_SEPARATOR + e.clientId;
      }
      return e.prototype.generateCurrentRequestHeaderValue = function () {
        const e = `${this.apiId}${x.VALUE_SEPARATOR}${this.cacheOutcome}`;
        const t = [this.wrapperSKU, this.wrapperVer].join(x.VALUE_SEPARATOR);
        const r = [e, this.getRegionDiscoveryFields()].join(x.VALUE_SEPARATOR);
        return [x.SCHEMA_VERSION, r, t].join(x.CATEGORY_SEPARATOR);
      }
      ,
      e.prototype.generateLastRequestHeaderValue = function () {
        const t = this.getLastRequests();
        const r = e.maxErrorsToSend(t);
        const n = t.failedRequests.slice(0, 2 * r).join(x.VALUE_SEPARATOR);
        const o = t.errors.slice(0, r).join(x.VALUE_SEPARATOR);
        const i = t.errors.length;
        const a = [i, r < i ? x.OVERFLOW_TRUE : x.OVERFLOW_FALSE].join(x.VALUE_SEPARATOR);
        return [x.SCHEMA_VERSION, t.cacheHits, n, o, a].join(x.CATEGORY_SEPARATOR);
      }
      ,
      e.prototype.cacheFailedRequest = function (e) {
        const t = this.getLastRequests();
        t.errors.length >= x.MAX_CACHED_ERRORS && (t.failedRequests.shift(),
        t.failedRequests.shift(),
        t.errors.shift()),
        t.failedRequests.push(this.apiId, this.correlationId),
        oe.isEmpty(e.subError) ? oe.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(x.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError),
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
      }
      ,
      e.prototype.incrementCacheHits = function () {
        const e = this.getLastRequests();
        return e.cacheHits += 1,
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e),
        e.cacheHits;
      }
      ,
      e.prototype.getLastRequests = function () {
        const e = new mt();
        return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
      }
      ,
      e.prototype.clearTelemetryCache = function () {
        const t = this.getLastRequests();
        const r = e.maxErrorsToSend(t);
        if (r === t.errors.length) this.cacheManager.removeItem(this.telemetryCacheKey);
        else {
          const n = new mt();
          n.failedRequests = t.failedRequests.slice(2 * r),
          n.errors = t.errors.slice(r),
          this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n);
        }
      }
      ,
      e.maxErrorsToSend = function (e) {
        let t; let r = 0; let n = 0; const
          o = e.errors.length;
        for (t = 0; t < o; t++) {
          const i = e.failedRequests[2 * t] || C.EMPTY_STRING;
          const a = e.failedRequests[2 * t + 1] || C.EMPTY_STRING;
          const s = e.errors[t] || C.EMPTY_STRING;
          if (!((n += i.toString().length + a.toString().length + s.length + 3) < x.MAX_LAST_HEADER_BYTES)) break;
          r += 1;
        }
        return r;
      }
      ,
      e.prototype.getRegionDiscoveryFields = function () {
        const e = [];
        return e.push(this.regionUsed || C.EMPTY_STRING),
        e.push(this.regionSource || C.EMPTY_STRING),
        e.push(this.regionOutcome || C.EMPTY_STRING),
        e.join(',');
      }
      ,
      e.prototype.updateRegionDiscoveryMetadata = function (e) {
        this.regionUsed = e.region_used,
        this.regionSource = e.region_source,
        this.regionOutcome = e.region_outcome;
      }
      ,
      e.prototype.setCacheOutcome = function (e) {
        this.cacheOutcome = e;
      }
      ,
      e;
    }()); const St = (function () {
      function e(e, t, r, n, o, i) {
        this.authority = t,
        this.libraryName = n,
        this.libraryVersion = o,
        this.applicationTelemetry = i,
        this.clientId = e,
        this.logger = r,
        this.callbacks = new Map(),
        this.eventsByCorrelationId = new Map(),
        this.staticFieldsByCorrelationId = new Map(),
        this.measurementsById = new Map();
      }
      return e.prototype.startMeasurement = function (e, t) {
        let r; let n; const o = this; const
          i = t || this.generateId();
        t || this.logger.info(`PerformanceClient: No correlation id provided for ${e}, generating`, i),
        this.logger.trace(`PerformanceClient: Performance measurement started for ${e}`, i);
        const a = this.startPerformanceMeasuremeant(e, i);
        a.startMeasurement();
        const s = {
          eventId: this.generateId(),
          status: Ye.InProgress,
          authority: this.authority,
          libraryName: this.libraryName,
          libraryVersion: this.libraryVersion,
          clientId: this.clientId,
          name: e,
          startTimeMs: Date.now(),
          correlationId: i,
        };
        this.cacheEventByCorrelationId(s);
        const c = {
          appName: (r = this.applicationTelemetry) === null || void 0 === r ? void 0 : r.appName,
          appVersion: (n = this.applicationTelemetry) === null || void 0 === n ? void 0 : n.appVersion,
        };
        return this.addStaticFields(c, i),
        this.cacheMeasurement(s, a),
        {
          endMeasurement(e) {
            const t = o.endMeasurement({ ...s, ...e });
            return t && o.cacheEventByCorrelationId(t),
            t;
          },
          flushMeasurement() {
            return o.flushMeasurements(s.name, s.correlationId);
          },
          discardMeasurement() {
            return o.discardMeasurements(s.correlationId);
          },
          addStaticFields(e) {
            return o.addStaticFields(e, s.correlationId);
          },
          measurement: a,
          event: s,
        };
      }
      ,
      e.prototype.endMeasurement = function (e) {
        const t = this.measurementsById.get(e.eventId);
        if (t) {
          this.measurementsById.delete(e.eventId),
          t.endMeasurement();
          const r = t.flushMeasurement();
          if (r !== null) {
            return this.logger.trace(`PerformanceClient: Performance measurement ended for ${e.name}: ${r} ms`, e.correlationId),
            ({ durationMs: Math.round(r), ...e, status: Ye.Completed });
          }
          this.logger.trace('PerformanceClient: Performance measurement not taken', e.correlationId);
        } else this.logger.trace(`PerformanceClient: Measurement not found for ${e.eventId}`, e.correlationId);
        return null;
      }
      ,
      e.prototype.addStaticFields = function (e, t) {
        const r = this.staticFieldsByCorrelationId.get(t);
        r ? (this.logger.trace('PerformanceClient: Updating static fields'),
        this.staticFieldsByCorrelationId.set(t, { ...r, ...e })) : (this.logger.trace('PerformanceClient: Adding static fields'),
        this.staticFieldsByCorrelationId.set(t, e));
      }
      ,
      e.prototype.cacheEventByCorrelationId = function (e) {
        const t = this.eventsByCorrelationId.get(e.correlationId);
        t ? (this.logger.trace(`PerformanceClient: Performance measurement for ${e.name} added/updated`, e.correlationId),
        t.set(e.eventId, e)) : (this.logger.trace(`PerformanceClient: Performance measurement for ${e.name} started`, e.correlationId),
        this.eventsByCorrelationId.set(e.correlationId, (new Map()).set(e.eventId, e)));
      }
      ,
      e.prototype.cacheMeasurement = function (e, t) {
        this.measurementsById.set(e.eventId, t);
      }
      ,
      e.prototype.flushMeasurements = function (e, t) {
        const r = this;
        this.logger.trace(`PerformanceClient: Performance measurements flushed for ${e}`, t);
        const n = this.eventsByCorrelationId.get(t);
        if (n) {
          this.discardMeasurements(t);
          const o = [];
          n.forEach(((n) => {
            if (n.name !== e && n.status !== Ye.Completed) {
              r.logger.trace(`PerformanceClient: Incomplete submeasurement ${n.name} found for ${e}`, t);
              const i = r.endMeasurement(n);
              i && o.push(i);
            }
            o.push(n);
          }
          ));
          const i = o.sort(((e, t) => e.startTimeMs - t.startTimeMs
          ));
          const a = i.filter(((t) => t.name === e && t.status === Ye.Completed
          ));
          if (a.length > 0) {
            a.length > 1 && this.logger.verbose('PerformanceClient: Multiple distinct top-level performance events found, using the first', t);
            const s = a[0];
            this.logger.verbose(`PerformanceClient: Measurement found for ${e}`, t);
            const c = i.reduce(
              ((n, o) => {
                if (o.name !== e) {
                  r.logger.trace(`PerformanceClient: Complete submeasurement found for ${o.name}`, t);
                  const i = `${o.name}DurationMs`;
                  n[i] ? r.logger.verbose(`PerformanceClient: Submeasurement for ${e} already exists for ${o.name}, ignoring`, t) : n[i] = o.durationMs;
                }
                return n;
              }
              ), s,
            );
            const u = this.staticFieldsByCorrelationId.get(t);
            const l = { ...c, ...u };
            this.emitEvents([l], c.correlationId);
          } else this.logger.verbose(`PerformanceClient: No completed top-level measurements found for ${e}`, t);
        } else this.logger.verbose('PerformanceClient: No measurements found', t);
      }
      ,
      e.prototype.discardMeasurements = function (e) {
        this.logger.trace('PerformanceClient: Performance measurements discarded', e),
        this.eventsByCorrelationId.delete(e);
      }
      ,
      e.prototype.addPerformanceCallback = function (e) {
        const t = this.generateId();
        return this.callbacks.set(t, e),
        this.logger.verbose(`PerformanceClient: Performance callback registered with id: ${t}`),
        t;
      }
      ,
      e.prototype.removePerformanceCallback = function (e) {
        const t = this.callbacks.delete(e);
        return t ? this.logger.verbose(`PerformanceClient: Performance callback ${e} removed.`) : this.logger.verbose(`PerformanceClient: Performance callback ${e} not removed.`),
        t;
      }
      ,
      e.prototype.emitEvents = function (e, t) {
        const r = this;
        this.logger.verbose('PerformanceClient: Emitting performance events', t),
        this.callbacks.forEach(((n, o) => {
          r.logger.trace(`PerformanceClient: Emitting event to callback ${o}`, t),
          n.apply(null, [e]);
        }
        ));
      }
      ,
      e;
    }()); const At = (function () {
      function e() {}
      return e.prototype.startMeasurement = function () {}
      ,
      e.prototype.endMeasurement = function () {}
      ,
      e.prototype.flushMeasurement = function () {
        return null;
      }
      ,
      e;
    }()); const bt = (function (e) {
      function t() {
        return e !== null && e.apply(this, arguments) || this;
      }
      return l(t, e),
      t.prototype.generateId = function () {
        return 'callback-id';
      }
      ,
      t.prototype.startPerformanceMeasuremeant = function () {
        return new At();
      }
      ,
      t;
    }(St)); const Rt = {
      pkceNotGenerated: {
        code: 'pkce_not_created',
        desc: 'The PKCE code challenge and verifier could not be generated.',
      },
      cryptoDoesNotExist: {
        code: 'crypto_nonexistent',
        desc: 'The crypto object or function is not available.',
      },
      httpMethodNotImplementedError: {
        code: 'http_method_not_implemented',
        desc: 'The HTTP method given has not been implemented in this library.',
      },
      emptyNavigateUriError: {
        code: 'empty_navigate_uri',
        desc: 'Navigation URI is empty. Please check stack trace for more info.',
      },
      hashEmptyError: {
        code: 'hash_empty_error',
        desc: 'Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. For more visit: aka.ms/msaljs/browser-errors.',
      },
      hashDoesNotContainStateError: {
        code: 'no_state_in_hash',
        desc: 'Hash does not contain state. Please verify that the request originated from msal.',
      },
      hashDoesNotContainKnownPropertiesError: {
        code: 'hash_does_not_contain_known_properties',
        desc: 'Hash does not contain known properites. Please verify that your redirectUri is not changing the hash. For more visit: aka.ms/msaljs/browser-errors.',
      },
      unableToParseStateError: {
        code: 'unable_to_parse_state',
        desc: 'Unable to parse state. Please verify that the request originated from msal.',
      },
      stateInteractionTypeMismatchError: {
        code: 'state_interaction_type_mismatch',
        desc: 'Hash contains state but the interaction type does not match the caller.',
      },
      interactionInProgress: {
        code: 'interaction_in_progress',
        desc: 'Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors.',
      },
      popupWindowError: {
        code: 'popup_window_error',
        desc: 'Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.',
      },
      emptyWindowError: {
        code: 'empty_window_error',
        desc: 'window.open returned null or undefined window object.',
      },
      userCancelledError: {
        code: 'user_cancelled',
        desc: 'User cancelled the flow.',
      },
      monitorPopupTimeoutError: {
        code: 'monitor_window_timeout',
        desc: 'Token acquisition in popup failed due to timeout. For more visit: aka.ms/msaljs/browser-errors.',
      },
      monitorIframeTimeoutError: {
        code: 'monitor_window_timeout',
        desc: 'Token acquisition in iframe failed due to timeout. For more visit: aka.ms/msaljs/browser-errors.',
      },
      redirectInIframeError: {
        code: 'redirect_in_iframe',
        desc: 'Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.',
      },
      blockTokenRequestsInHiddenIframeError: {
        code: 'block_iframe_reload',
        desc: 'Request was blocked inside an iframe because MSAL detected an authentication response. For more visit: aka.ms/msaljs/browser-errors',
      },
      blockAcquireTokenInPopupsError: {
        code: 'block_nested_popups',
        desc: 'Request was blocked inside a popup because MSAL detected it was running in a popup.',
      },
      iframeClosedPrematurelyError: {
        code: 'iframe_closed_prematurely',
        desc: 'The iframe being monitored was closed prematurely.',
      },
      silentLogoutUnsupportedError: {
        code: 'silent_logout_unsupported',
        desc: 'Silent logout not supported. Please call logoutRedirect or logoutPopup instead.',
      },
      noAccountError: {
        code: 'no_account_error',
        desc: 'No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.',
      },
      silentPromptValueError: {
        code: 'silent_prompt_value_error',
        desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
      },
      noTokenRequestCacheError: {
        code: 'no_token_request_cache_error',
        desc: 'No token request found in cache.',
      },
      unableToParseTokenRequestCacheError: {
        code: 'unable_to_parse_token_request_cache_error',
        desc: 'The cached token request could not be parsed.',
      },
      noCachedAuthorityError: {
        code: 'no_cached_authority_error',
        desc: 'No cached authority found.',
      },
      authRequestNotSet: {
        code: 'auth_request_not_set_error',
        desc: 'Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler',
      },
      invalidCacheType: {
        code: 'invalid_cache_type',
        desc: 'Invalid cache type',
      },
      notInBrowserEnvironment: {
        code: 'non_browser_environment',
        desc: 'Login and token requests are not supported in non-browser environments.',
      },
      databaseNotOpen: {
        code: 'database_not_open',
        desc: 'Database is not open!',
      },
      noNetworkConnectivity: {
        code: 'no_network_connectivity',
        desc: 'No network connectivity. Check your internet connection.',
      },
      postRequestFailed: {
        code: 'post_request_failed',
        desc: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
      },
      getRequestFailed: {
        code: 'get_request_failed',
        desc: 'Network request failed. Please check the network trace to determine root cause.',
      },
      failedToParseNetworkResponse: {
        code: 'failed_to_parse_response',
        desc: 'Failed to parse network response. Check network trace.',
      },
      unableToLoadTokenError: {
        code: 'unable_to_load_token',
        desc: 'Error loading token to cache.',
      },
      signingKeyNotFoundInStorage: {
        code: 'crypto_key_not_found',
        desc: 'Cryptographic Key or Keypair not found in browser storage.',
      },
      authCodeRequired: {
        code: 'auth_code_required',
        desc: 'An authorization code must be provided (as the `code` property on the request) to this flow.',
      },
      authCodeOrNativeAccountRequired: {
        code: 'auth_code_or_nativeAccountId_required',
        desc: 'An authorization code or nativeAccountId must be provided to this flow.',
      },
      databaseUnavailable: {
        code: 'database_unavailable',
        desc: 'IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.',
      },
      unableToAcquireTokenFromNativePlatform: {
        code: 'unable_to_acquire_token_from_native_platform',
        desc: 'Unable to acquire token from native platform. For a list of possible reasons visit aka.ms/msaljs/browser-errors.',
      },
      nativeHandshakeTimeout: {
        code: 'native_handshake_timeout',
        desc: 'Timed out while attempting to establish connection to browser extension',
      },
      nativeExtensionNotInstalled: {
        code: 'native_extension_not_installed',
        desc: 'Native extension is not installed. If you think this is a mistake call the initialize function.',
      },
      nativeConnectionNotEstablished: {
        code: 'native_connection_not_established',
        desc: 'Connection to native platform has not been established. Please install a compatible browser extension and run initialize(). For more please visit aka.ms/msaljs/browser-errors.',
      },
      nativeBrokerCalledBeforeInitialize: {
        code: 'native_broker_called_before_initialize',
        desc: 'You must call and await the initialize function before attempting to call any other MSAL API when native brokering is enabled. For more please visit aka.ms/msaljs/browser-errors.',
      },
      nativePromptNotSupported: {
        code: 'native_prompt_not_supported',
        desc: 'The provided prompt is not supported by the native platform. This request should be routed to the web based flow.',
      },
    }; const kt = (function (e) {
      function t(r, n) {
        const o = e.call(this, r, n) || this;
        return Object.setPrototypeOf(o, t.prototype),
        o.name = 'BrowserAuthError',
        o;
      }
      return r(t, e),
      t.createPkceNotGeneratedError = function (e) {
        return new t(Rt.pkceNotGenerated.code, `${Rt.pkceNotGenerated.desc} Detail:${e}`);
      }
      ,
      t.createCryptoNotAvailableError = function (e) {
        return new t(Rt.cryptoDoesNotExist.code, `${Rt.cryptoDoesNotExist.desc} Detail:${e}`);
      }
      ,
      t.createHttpMethodNotImplementedError = function (e) {
        return new t(Rt.httpMethodNotImplementedError.code, `${Rt.httpMethodNotImplementedError.desc} Given Method: ${e}`);
      }
      ,
      t.createEmptyNavigationUriError = function () {
        return new t(Rt.emptyNavigateUriError.code, Rt.emptyNavigateUriError.desc);
      }
      ,
      t.createEmptyHashError = function (e) {
        return new t(Rt.hashEmptyError.code, `${Rt.hashEmptyError.desc} Given Url: ${e}`);
      }
      ,
      t.createHashDoesNotContainStateError = function () {
        return new t(Rt.hashDoesNotContainStateError.code, Rt.hashDoesNotContainStateError.desc);
      }
      ,
      t.createHashDoesNotContainKnownPropertiesError = function () {
        return new t(Rt.hashDoesNotContainKnownPropertiesError.code, Rt.hashDoesNotContainKnownPropertiesError.desc);
      }
      ,
      t.createUnableToParseStateError = function () {
        return new t(Rt.unableToParseStateError.code, Rt.unableToParseStateError.desc);
      }
      ,
      t.createStateInteractionTypeMismatchError = function () {
        return new t(Rt.stateInteractionTypeMismatchError.code, Rt.stateInteractionTypeMismatchError.desc);
      }
      ,
      t.createInteractionInProgressError = function () {
        return new t(Rt.interactionInProgress.code, Rt.interactionInProgress.desc);
      }
      ,
      t.createPopupWindowError = function (e) {
        let r = Rt.popupWindowError.desc;
        return r = oe.isEmpty(e) ? r : `${r} Details: ${e}`,
        new t(Rt.popupWindowError.code, r);
      }
      ,
      t.createEmptyWindowCreatedError = function () {
        return new t(Rt.emptyWindowError.code, Rt.emptyWindowError.desc);
      }
      ,
      t.createUserCancelledError = function () {
        return new t(Rt.userCancelledError.code, Rt.userCancelledError.desc);
      }
      ,
      t.createMonitorPopupTimeoutError = function () {
        return new t(Rt.monitorPopupTimeoutError.code, Rt.monitorPopupTimeoutError.desc);
      }
      ,
      t.createMonitorIframeTimeoutError = function () {
        return new t(Rt.monitorIframeTimeoutError.code, Rt.monitorIframeTimeoutError.desc);
      }
      ,
      t.createRedirectInIframeError = function (e) {
        return new t(Rt.redirectInIframeError.code, `${Rt.redirectInIframeError.desc} (window.parent !== window) => ${e}`);
      }
      ,
      t.createBlockReloadInHiddenIframeError = function () {
        return new t(Rt.blockTokenRequestsInHiddenIframeError.code, Rt.blockTokenRequestsInHiddenIframeError.desc);
      }
      ,
      t.createBlockAcquireTokenInPopupsError = function () {
        return new t(Rt.blockAcquireTokenInPopupsError.code, Rt.blockAcquireTokenInPopupsError.desc);
      }
      ,
      t.createIframeClosedPrematurelyError = function () {
        return new t(Rt.iframeClosedPrematurelyError.code, Rt.iframeClosedPrematurelyError.desc);
      }
      ,
      t.createSilentLogoutUnsupportedError = function () {
        return new t(Rt.silentLogoutUnsupportedError.code, Rt.silentLogoutUnsupportedError.desc);
      }
      ,
      t.createNoAccountError = function () {
        return new t(Rt.noAccountError.code, Rt.noAccountError.desc);
      }
      ,
      t.createSilentPromptValueError = function (e) {
        return new t(Rt.silentPromptValueError.code, `${Rt.silentPromptValueError.desc} Given value: ${e}`);
      }
      ,
      t.createUnableToParseTokenRequestCacheError = function () {
        return new t(Rt.unableToParseTokenRequestCacheError.code, Rt.unableToParseTokenRequestCacheError.desc);
      }
      ,
      t.createNoTokenRequestCacheError = function () {
        return new t(Rt.noTokenRequestCacheError.code, Rt.noTokenRequestCacheError.desc);
      }
      ,
      t.createAuthRequestNotSetError = function () {
        return new t(Rt.authRequestNotSet.code, Rt.authRequestNotSet.desc);
      }
      ,
      t.createNoCachedAuthorityError = function () {
        return new t(Rt.noCachedAuthorityError.code, Rt.noCachedAuthorityError.desc);
      }
      ,
      t.createInvalidCacheTypeError = function () {
        return new t(Rt.invalidCacheType.code, `${Rt.invalidCacheType.desc}`);
      }
      ,
      t.createNonBrowserEnvironmentError = function () {
        return new t(Rt.notInBrowserEnvironment.code, Rt.notInBrowserEnvironment.desc);
      }
      ,
      t.createDatabaseNotOpenError = function () {
        return new t(Rt.databaseNotOpen.code, Rt.databaseNotOpen.desc);
      }
      ,
      t.createNoNetworkConnectivityError = function () {
        return new t(Rt.noNetworkConnectivity.code, Rt.noNetworkConnectivity.desc);
      }
      ,
      t.createPostRequestFailedError = function (e, r) {
        return new t(Rt.postRequestFailed.code, `${Rt.postRequestFailed.desc} | Network client threw: ${e} | Attempted to reach: ${r.split('?')[0]}`);
      }
      ,
      t.createGetRequestFailedError = function (e, r) {
        return new t(Rt.getRequestFailed.code, `${Rt.getRequestFailed.desc} | Network client threw: ${e} | Attempted to reach: ${r.split('?')[0]}`);
      }
      ,
      t.createFailedToParseNetworkResponseError = function (e) {
        return new t(Rt.failedToParseNetworkResponse.code, `${Rt.failedToParseNetworkResponse.desc} | Attempted to reach: ${e.split('?')[0]}`);
      }
      ,
      t.createUnableToLoadTokenError = function (e) {
        return new t(Rt.unableToLoadTokenError.code, `${Rt.unableToLoadTokenError.desc} | ${e}`);
      }
      ,
      t.createSigningKeyNotFoundInStorageError = function (e) {
        return new t(Rt.signingKeyNotFoundInStorage.code, `${Rt.signingKeyNotFoundInStorage.desc} | No match found for KeyId: ${e}`);
      }
      ,
      t.createAuthCodeRequiredError = function () {
        return new t(Rt.authCodeRequired.code, Rt.authCodeRequired.desc);
      }
      ,
      t.createAuthCodeOrNativeAccountIdRequiredError = function () {
        return new t(Rt.authCodeOrNativeAccountRequired.code, Rt.authCodeOrNativeAccountRequired.desc);
      }
      ,
      t.createDatabaseUnavailableError = function () {
        return new t(Rt.databaseUnavailable.code, Rt.databaseUnavailable.desc);
      }
      ,
      t.createUnableToAcquireTokenFromNativePlatformError = function () {
        return new t(Rt.unableToAcquireTokenFromNativePlatform.code, Rt.unableToAcquireTokenFromNativePlatform.desc);
      }
      ,
      t.createNativeHandshakeTimeoutError = function () {
        return new t(Rt.nativeHandshakeTimeout.code, Rt.nativeHandshakeTimeout.desc);
      }
      ,
      t.createNativeExtensionNotInstalledError = function () {
        return new t(Rt.nativeExtensionNotInstalled.code, Rt.nativeExtensionNotInstalled.desc);
      }
      ,
      t.createNativeConnectionNotEstablishedError = function () {
        return new t(Rt.nativeConnectionNotEstablished.code, Rt.nativeConnectionNotEstablished.desc);
      }
      ,
      t.createNativeBrokerCalledBeforeInitialize = function () {
        return new t(Rt.nativeBrokerCalledBeforeInitialize.code, Rt.nativeBrokerCalledBeforeInitialize.desc);
      }
      ,
      t.createNativePromptParameterNotSupportedError = function () {
        return new t(Rt.nativePromptNotSupported.code, Rt.nativePromptNotSupported.desc);
      }
      ,
      t;
    }(ee)); const Nt = {
      INTERACTION_IN_PROGRESS_VALUE: 'interaction_in_progress',
      INVALID_GRANT_ERROR: 'invalid_grant',
      POPUP_WIDTH: 483,
      POPUP_HEIGHT: 600,
      POPUP_NAME_PREFIX: 'msal',
      DEFAULT_POLL_INTERVAL_MS: 30,
      MSAL_SKU: 'msal.js.browser',
    }; const Pt = '53ee284d-920a-4b59-9d30-a60315b26836'; const Ot = 'ppnbnpeolgkicgegkbkbjmhlideopiji'; const
      Mt = 'MATS';
      /*! @azure/msal-common v8.0.0 2022-11-07 */
    !(function (e) {
      e.HandshakeRequest = 'Handshake',
      e.HandshakeResponse = 'HandshakeResponse',
      e.GetToken = 'GetToken',
      e.Response = 'Response';
    }(it || (it = {}))),
    e.BrowserCacheLocation = void 0,
    (at = e.BrowserCacheLocation || (e.BrowserCacheLocation = {})).LocalStorage = 'localStorage',
    at.SessionStorage = 'sessionStorage',
    at.MemoryStorage = 'memoryStorage',
    (function (e) {
      e.GET = 'GET',
      e.POST = 'POST';
    }(st || (st = {}))),
    (function (e) {
      e.AUTHORITY = 'authority',
      e.ACQUIRE_TOKEN_ACCOUNT = 'acquireToken.account',
      e.SESSION_STATE = 'session.state',
      e.REQUEST_STATE = 'request.state',
      e.NONCE_IDTOKEN = 'nonce.id_token',
      e.ORIGIN_URI = 'request.origin',
      e.RENEW_STATUS = 'token.renew.status',
      e.URL_HASH = 'urlHash',
      e.REQUEST_PARAMS = 'request.params',
      e.SCOPES = 'scopes',
      e.INTERACTION_STATUS_KEY = 'interaction.status',
      e.CCS_CREDENTIAL = 'ccs.credential',
      e.CORRELATION_ID = 'request.correlationId',
      e.NATIVE_REQUEST = 'request.native';
    }(ct || (ct = {}))),
    (function (e) {
      e.WRAPPER_SKU = 'wrapper.sku',
      e.WRAPPER_VER = 'wrapper.version';
    }(ut || (ut = {}))),
    e.ApiId = void 0,
    (lt = e.ApiId || (e.ApiId = {}))[lt.acquireTokenRedirect = 861] = 'acquireTokenRedirect',
    lt[lt.acquireTokenPopup = 862] = 'acquireTokenPopup',
    lt[lt.ssoSilent = 863] = 'ssoSilent',
    lt[lt.acquireTokenSilent_authCode = 864] = 'acquireTokenSilent_authCode',
    lt[lt.handleRedirectPromise = 865] = 'handleRedirectPromise',
    lt[lt.acquireTokenByCode = 866] = 'acquireTokenByCode',
    lt[lt.acquireTokenSilent_silentFlow = 61] = 'acquireTokenSilent_silentFlow',
    lt[lt.logout = 961] = 'logout',
    lt[lt.logoutPopup = 962] = 'logoutPopup',
    e.InteractionType = void 0,
    (dt = e.InteractionType || (e.InteractionType = {})).Redirect = 'redirect',
    dt.Popup = 'popup',
    dt.Silent = 'silent',
    dt.None = 'none',
    e.InteractionStatus = void 0,
    (ht = e.InteractionStatus || (e.InteractionStatus = {})).Startup = 'startup',
    ht.Login = 'login',
    ht.Logout = 'logout',
    ht.AcquireToken = 'acquireToken',
    ht.SsoSilent = 'ssoSilent',
    ht.HandleRedirect = 'handleRedirect',
    ht.None = 'none';
    let Ut; const qt = {
      scopes: _,
    }; const
      Ht = 'jwk';
    e.WrapperSKU = void 0,
    (Ut = e.WrapperSKU || (e.WrapperSKU = {})).React = '@azure/msal-react',
    Ut.Angular = '@azure/msal-angular';
    let Lt; const
      Dt = 'msal.db';
    e.CacheLookupPolicy = void 0,
    (Lt = e.CacheLookupPolicy || (e.CacheLookupPolicy = {}))[Lt.Default = 0] = 'Default',
    Lt[Lt.AccessToken = 1] = 'AccessToken',
    Lt[Lt.AccessTokenAndRefreshToken = 2] = 'AccessTokenAndRefreshToken',
    Lt[Lt.RefreshToken = 3] = 'RefreshToken',
    Lt[Lt.RefreshTokenAndNetwork = 4] = 'RefreshTokenAndNetwork',
    Lt[Lt.Skip = 5] = 'Skip';
    let xt; let Ft; const Kt = {
      redirectUriNotSet: {
        code: 'redirect_uri_empty',
        desc: 'A redirect URI is required for all calls, and none has been set.',
      },
      postLogoutUriNotSet: {
        code: 'post_logout_uri_empty',
        desc: 'A post logout redirect has not been set.',
      },
      storageNotSupportedError: {
        code: 'storage_not_supported',
        desc: 'Given storage configuration option was not supported.',
      },
      noRedirectCallbacksSet: {
        code: 'no_redirect_callbacks',
        desc: 'No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics.',
      },
      invalidCallbackObject: {
        code: 'invalid_callback_object',
        desc: 'The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics.',
      },
      stubPcaInstanceCalled: {
        code: 'stubbed_public_client_application_called',
        desc: 'Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors',
      },
      inMemRedirectUnavailable: {
        code: 'in_mem_redirect_unavailable',
        desc: 'Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true.',
      },
      entropyNotProvided: {
        code: 'entropy_not_provided',
        desc: 'The available browser crypto interface requires entropy set via system.cryptoOptions.entropy configuration option.',
      },
    }; const Bt = (function (e) {
      function t(r, n) {
        const o = e.call(this, r, n) || this;
        return o.name = 'BrowserConfigurationAuthError',
        Object.setPrototypeOf(o, t.prototype),
        o;
      }
      return r(t, e),
      t.createRedirectUriEmptyError = function () {
        return new t(Kt.redirectUriNotSet.code, Kt.redirectUriNotSet.desc);
      }
      ,
      t.createPostLogoutRedirectUriEmptyError = function () {
        return new t(Kt.postLogoutUriNotSet.code, Kt.postLogoutUriNotSet.desc);
      }
      ,
      t.createStorageNotSupportedError = function (e) {
        return new t(Kt.storageNotSupportedError.code, `${Kt.storageNotSupportedError.desc} Given Location: ${e}`);
      }
      ,
      t.createRedirectCallbacksNotSetError = function () {
        return new t(Kt.noRedirectCallbacksSet.code, Kt.noRedirectCallbacksSet.desc);
      }
      ,
      t.createStubPcaInstanceCalledError = function () {
        return new t(Kt.stubPcaInstanceCalled.code, Kt.stubPcaInstanceCalled.desc);
      }
      ,
      t.createInMemoryRedirectUnavailableError = function () {
        return new t(Kt.inMemRedirectUnavailable.code, Kt.inMemRedirectUnavailable.desc);
      }
      ,
      t.createEntropyNotProvided = function () {
        return new t(Kt.entropyNotProvided.code, Kt.entropyNotProvided.desc);
      }
      ,
      t;
    }(ee)); const Gt = (function () {
      function t(e) {
        this.validateWindowStorage(e),
        this.windowStorage = window[e];
      }
      return t.prototype.validateWindowStorage = function (t) {
        if (t !== e.BrowserCacheLocation.LocalStorage && t !== e.BrowserCacheLocation.SessionStorage) throw Bt.createStorageNotSupportedError(t);
        if (!window[t]) throw Bt.createStorageNotSupportedError(t);
      }
      ,
      t.prototype.getItem = function (e) {
        return this.windowStorage.getItem(e);
      }
      ,
      t.prototype.setItem = function (e, t) {
        this.windowStorage.setItem(e, t);
      }
      ,
      t.prototype.removeItem = function (e) {
        this.windowStorage.removeItem(e);
      }
      ,
      t.prototype.getKeys = function () {
        return Object.keys(this.windowStorage);
      }
      ,
      t.prototype.containsKey = function (e) {
        return this.windowStorage.hasOwnProperty(e);
      }
      ,
      t;
    }()); const zt = (function () {
      function e() {
        this.cache = new Map();
      }
      return e.prototype.getItem = function (e) {
        return this.cache.get(e) || null;
      }
      ,
      e.prototype.setItem = function (e, t) {
        this.cache.set(e, t);
      }
      ,
      e.prototype.removeItem = function (e) {
        this.cache.delete(e);
      }
      ,
      e.prototype.getKeys = function () {
        const e = [];
        return this.cache.forEach(((t, r) => {
          e.push(r);
        }
        )),
        e;
      }
      ,
      e.prototype.containsKey = function (e) {
        return this.cache.has(e);
      }
      ,
      e.prototype.clear = function () {
        this.cache.clear();
      }
      ,
      e;
    }()); const jt = (function () {
      function e() {}
      return e.extractBrowserRequestState = function (e, t) {
        if (oe.isEmpty(t)) return null;
        try {
          return Ge.parseRequestState(e, t).libraryState.meta;
        } catch (e) {
          throw ne.createInvalidStateError(t, e);
        }
      }
      ,
      e.parseServerResponseFromHash = function (e) {
        if (!e) return {};
        const t = new ze(e);
        return ze.getDeserializedHash(t.getHash());
      }
      ,
      e;
    }()); const Yt = (function (t) {
      function n(e, r, n, o) {
        const i = t.call(this, e, n) || this;
        return i.COOKIE_LIFE_MULTIPLIER = 864e5,
        i.cacheConfig = r,
        i.logger = o,
        i.internalStorage = new zt(),
        i.browserStorage = i.setupBrowserStorage(i.cacheConfig.cacheLocation),
        i.temporaryCacheStorage = i.setupTemporaryCacheStorage(i.cacheConfig.cacheLocation),
        i.migrateCacheEntries(),
        i;
      }
      return r(n, t),
      n.prototype.setupBrowserStorage = function (t) {
        switch (t) {
          case e.BrowserCacheLocation.LocalStorage:
          case e.BrowserCacheLocation.SessionStorage:
            try {
              return new Gt(t);
            } catch (e) {
              this.logger.verbose(e);
              break;
            }
          case e.BrowserCacheLocation.MemoryStorage:
        }
        return this.cacheConfig.cacheLocation = e.BrowserCacheLocation.MemoryStorage,
        new zt();
      }
      ,
      n.prototype.setupTemporaryCacheStorage = function (t) {
        switch (t) {
          case e.BrowserCacheLocation.LocalStorage:
          case e.BrowserCacheLocation.SessionStorage:
            try {
              return new Gt(e.BrowserCacheLocation.SessionStorage);
            } catch (e) {
              return this.logger.verbose(e),
              this.internalStorage;
            }
          case e.BrowserCacheLocation.MemoryStorage:
          default:
            return this.internalStorage;
        }
      }
      ,
      n.prototype.migrateCacheEntries = function () {
        const e = this;
        const t = `${C.CACHE_PREFIX}.${m.ID_TOKEN}`;
        const r = `${C.CACHE_PREFIX}.${m.CLIENT_INFO}`;
        const n = `${C.CACHE_PREFIX}.${m.ERROR}`;
        const o = `${C.CACHE_PREFIX}.${m.ERROR_DESC}`;
        const i = [this.browserStorage.getItem(t), this.browserStorage.getItem(r), this.browserStorage.getItem(n), this.browserStorage.getItem(o)];
        [m.ID_TOKEN, m.CLIENT_INFO, m.ERROR, m.ERROR_DESC].forEach(((t, r) => e.migrateCacheEntry(t, i[r])
        ));
      }
      ,
      n.prototype.migrateCacheEntry = function (e, t) {
        t && this.setTemporaryCache(e, t, !0);
      }
      ,
      n.prototype.validateAndParseJson = function (e) {
        try {
          const t = JSON.parse(e);
          return t && typeof t === 'object' ? t : null;
        } catch (e) {
          return null;
        }
      }
      ,
      n.prototype.getItem = function (e) {
        return this.browserStorage.getItem(e);
      }
      ,
      n.prototype.setItem = function (e, t) {
        this.browserStorage.setItem(e, t);
      }
      ,
      n.prototype.getAccount = function (e) {
        const t = this.getItem(e);
        if (!t) return null;
        const r = this.validateAndParseJson(t);
        return r && fe.isAccountEntity(r) ? ve.toObject(new fe(), r) : null;
      }
      ,
      n.prototype.setAccount = function (e) {
        this.logger.trace('BrowserCacheManager.setAccount called');
        const t = e.generateAccountKey();
        this.setItem(t, JSON.stringify(e));
      }
      ,
      n.prototype.getIdTokenCredential = function (e) {
        const t = this.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getIdTokenCredential: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && Ue.isIdTokenEntity(r) ? (this.logger.trace('BrowserCacheManager.getIdTokenCredential: cache hit'),
        ve.toObject(new Ue(), r)) : (this.logger.trace('BrowserCacheManager.getIdTokenCredential: called, no cache hit'),
        null);
      }
      ,
      n.prototype.setIdTokenCredential = function (e) {
        this.logger.trace('BrowserCacheManager.setIdTokenCredential called');
        const t = e.generateCredentialKey();
        this.setItem(t, JSON.stringify(e));
      }
      ,
      n.prototype.getAccessTokenCredential = function (e) {
        const t = this.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getAccessTokenCredential: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && He.isAccessTokenEntity(r) ? (this.logger.trace('BrowserCacheManager.getAccessTokenCredential: cache hit'),
        ve.toObject(new He(), r)) : (this.logger.trace('BrowserCacheManager.getAccessTokenCredential: called, no cache hit'),
        null);
      }
      ,
      n.prototype.setAccessTokenCredential = function (e) {
        this.logger.trace('BrowserCacheManager.setAccessTokenCredential called');
        const t = e.generateCredentialKey();
        this.setItem(t, JSON.stringify(e));
      }
      ,
      n.prototype.getRefreshTokenCredential = function (e) {
        const t = this.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getRefreshTokenCredential: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && Le.isRefreshTokenEntity(r) ? (this.logger.trace('BrowserCacheManager.getRefreshTokenCredential: cache hit'),
        ve.toObject(new Le(), r)) : (this.logger.trace('BrowserCacheManager.getRefreshTokenCredential: called, no cache hit'),
        null);
      }
      ,
      n.prototype.setRefreshTokenCredential = function (e) {
        this.logger.trace('BrowserCacheManager.setRefreshTokenCredential called');
        const t = e.generateCredentialKey();
        this.setItem(t, JSON.stringify(e));
      }
      ,
      n.prototype.getAppMetadata = function (e) {
        const t = this.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getAppMetadata: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && Ve.isAppMetadataEntity(e, r) ? (this.logger.trace('BrowserCacheManager.getAppMetadata: cache hit'),
        ve.toObject(new Ve(), r)) : (this.logger.trace('BrowserCacheManager.getAppMetadata: called, no cache hit'),
        null);
      }
      ,
      n.prototype.setAppMetadata = function (e) {
        this.logger.trace('BrowserCacheManager.setAppMetadata called');
        const t = e.generateAppMetadataKey();
        this.setItem(t, JSON.stringify(e));
      }
      ,
      n.prototype.getServerTelemetry = function (e) {
        const t = this.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getServerTelemetry: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && mt.isServerTelemetryEntity(e, r) ? (this.logger.trace('BrowserCacheManager.getServerTelemetry: cache hit'),
        ve.toObject(new mt(), r)) : (this.logger.trace('BrowserCacheManager.getServerTelemetry: called, no cache hit'),
        null);
      }
      ,
      n.prototype.setServerTelemetry = function (e, t) {
        this.logger.trace('BrowserCacheManager.setServerTelemetry called'),
        this.setItem(e, JSON.stringify(t));
      }
      ,
      n.prototype.getAuthorityMetadata = function (e) {
        const t = this.internalStorage.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getAuthorityMetadata: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && ot.isAuthorityMetadataEntity(e, r) ? (this.logger.trace('BrowserCacheManager.getAuthorityMetadata: cache hit'),
        ve.toObject(new ot(), r)) : null;
      }
      ,
      n.prototype.getAuthorityMetadataKeys = function () {
        const e = this;
        return this.internalStorage.getKeys().filter(((t) => e.isAuthorityMetadata(t)
        ));
      }
      ,
      n.prototype.setWrapperMetadata = function (e, t) {
        this.internalStorage.setItem(ut.WRAPPER_SKU, e),
        this.internalStorage.setItem(ut.WRAPPER_VER, t);
      }
      ,
      n.prototype.getWrapperMetadata = function () {
        return [this.internalStorage.getItem(ut.WRAPPER_SKU) || C.EMPTY_STRING, this.internalStorage.getItem(ut.WRAPPER_VER) || C.EMPTY_STRING];
      }
      ,
      n.prototype.setAuthorityMetadata = function (e, t) {
        this.logger.trace('BrowserCacheManager.setAuthorityMetadata called'),
        this.internalStorage.setItem(e, JSON.stringify(t));
      }
      ,
      n.prototype.getActiveAccount = function () {
        const e = this.generateCacheKey(m.ACTIVE_ACCOUNT_FILTERS);
        const t = this.getItem(e);
        if (!t) {
          this.logger.trace('No active account filters cache schema found, looking for legacy schema');
          const r = this.generateCacheKey(m.ACTIVE_ACCOUNT);
          const n = this.getItem(r);
          if (!n) {
            return this.logger.trace('No active account found'),
            null;
          }
          const o = this.getAccountInfoByFilter({
            localAccountId: n,
          })[0] || null;
          return o ? (this.logger.trace('Legacy active account cache schema found'),
          this.logger.trace('Adding active account filters cache schema'),
          this.setActiveAccount(o),
          o) : null;
        }
        const i = this.validateAndParseJson(t);
        return i ? (this.logger.trace('Active account filters schema found'),
        this.getAccountInfoByFilter({
          homeAccountId: i.homeAccountId,
          localAccountId: i.localAccountId,
        })[0] || null) : (this.logger.trace('No active account found'),
        null);
      }
      ,
      n.prototype.setActiveAccount = function (e) {
        const t = this.generateCacheKey(m.ACTIVE_ACCOUNT_FILTERS);
        const r = this.generateCacheKey(m.ACTIVE_ACCOUNT);
        if (e) {
          this.logger.verbose('setActiveAccount: Active account set');
          const n = {
            homeAccountId: e.homeAccountId,
            localAccountId: e.localAccountId,
          };
          this.browserStorage.setItem(t, JSON.stringify(n)),
          this.browserStorage.setItem(r, e.localAccountId);
        } else {
          this.logger.verbose('setActiveAccount: No account passed, active account not set'),
          this.browserStorage.removeItem(t),
          this.browserStorage.removeItem(r);
        }
      }
      ,
      n.prototype.getAccountInfoByFilter = function (e) {
        return this.getAllAccounts().filter(((t) => (!e.username || e.username.toLowerCase() === t.username.toLowerCase()) && ((!e.homeAccountId || e.homeAccountId === t.homeAccountId) && ((!e.localAccountId || e.localAccountId === t.localAccountId) && ((!e.tenantId || e.tenantId === t.tenantId) && (!e.environment || e.environment === t.environment))))
        ));
      }
      ,
      n.prototype.getAccountInfoByHints = function (e, t) {
        const r = this.getAllAccounts().filter(((r) => {
          if (t) {
            const n = r.idTokenClaims && r.idTokenClaims.sid;
            return t === n;
          }
          return !!e && e === r.username;
        }
        ));
        if (r.length === 1) return r[0];
        if (r.length > 1) throw ne.createMultipleMatchingAccountsInCacheError();
        return null;
      }
      ,
      n.prototype.getThrottlingCache = function (e) {
        const t = this.getItem(e);
        if (!t) {
          return this.logger.trace('BrowserCacheManager.getThrottlingCache: called, no cache hit'),
          null;
        }
        const r = this.validateAndParseJson(t);
        return r && vt.isThrottlingEntity(e, r) ? (this.logger.trace('BrowserCacheManager.getThrottlingCache: cache hit'),
        ve.toObject(new vt(), r)) : (this.logger.trace('BrowserCacheManager.getThrottlingCache: called, no cache hit'),
        null);
      }
      ,
      n.prototype.setThrottlingCache = function (e, t) {
        this.logger.trace('BrowserCacheManager.setThrottlingCache called'),
        this.setItem(e, JSON.stringify(t));
      }
      ,
      n.prototype.getTemporaryCache = function (t, r) {
        const n = r ? this.generateCacheKey(t) : t;
        if (this.cacheConfig.storeAuthStateInCookie) {
          const o = this.getItemCookie(n);
          if (o) {
            return this.logger.trace('BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies'),
            o;
          }
        }
        const i = this.temporaryCacheStorage.getItem(n);
        if (!i) {
          if (this.cacheConfig.cacheLocation === e.BrowserCacheLocation.LocalStorage) {
            const a = this.browserStorage.getItem(n);
            if (a) {
              return this.logger.trace('BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage'),
              a;
            }
          }
          return this.logger.trace('BrowserCacheManager.getTemporaryCache: No cache item found in local storage'),
          null;
        }
        return this.logger.trace('BrowserCacheManager.getTemporaryCache: Temporary cache item returned'),
        i;
      }
      ,
      n.prototype.setTemporaryCache = function (e, t, r) {
        const n = r ? this.generateCacheKey(e) : e;
        this.temporaryCacheStorage.setItem(n, t),
        this.cacheConfig.storeAuthStateInCookie && (this.logger.trace('BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie'),
        this.setItemCookie(n, t));
      }
      ,
      n.prototype.removeItem = function (e) {
        return this.browserStorage.removeItem(e),
        this.temporaryCacheStorage.removeItem(e),
        this.cacheConfig.storeAuthStateInCookie && (this.logger.trace('BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie'),
        this.clearItemCookie(e)),
        !0;
      }
      ,
      n.prototype.containsKey = function (e) {
        return this.browserStorage.containsKey(e) || this.temporaryCacheStorage.containsKey(e);
      }
      ,
      n.prototype.getKeys = function () {
        return c(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
      }
      ,
      n.prototype.clear = function () {
        return i(this, void 0, void 0, (function () {
          const e = this;
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                return [4, this.removeAllAccounts()];
              case 1:
                return t.sent(),
                this.removeAppMetadata(),
                this.getKeys().forEach(((t) => {
                  !e.browserStorage.containsKey(t) && !e.temporaryCacheStorage.containsKey(t) || t.indexOf(C.CACHE_PREFIX) === -1 && t.indexOf(e.clientId) === -1 || e.removeItem(t);
                }
                )),
                this.internalStorage.clear(),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      n.prototype.setItemCookie = function (e, t, r) {
        let n = `${encodeURIComponent(e)}=${encodeURIComponent(t)};path=/;SameSite=Lax;`;
        r && (n += `expires=${this.getCookieExpirationTime(r)};`);
        this.cacheConfig.secureCookies && (n += 'Secure;'),
        document.cookie = n;
      }
      ,
      n.prototype.getItemCookie = function (e) {
        for (let t = `${encodeURIComponent(e)}=`, r = document.cookie.split(';'), n = 0; n < r.length; n++) {
          for (var o = r[n]; o.charAt(0) === ' ';) o = o.substring(1);
          if (o.indexOf(t) === 0) return decodeURIComponent(o.substring(t.length, o.length));
        }
        return C.EMPTY_STRING;
      }
      ,
      n.prototype.clearMsalCookies = function () {
        const e = this;
        const t = `${C.CACHE_PREFIX}.${this.clientId}`;
        document.cookie.split(';').forEach(((r) => {
          for (; r.charAt(0) === ' ';) r = r.substring(1);
          if (r.indexOf(t) === 0) {
            const n = r.split('=')[0];
            e.clearItemCookie(n);
          }
        }
        ));
      }
      ,
      n.prototype.clearItemCookie = function (e) {
        this.setItemCookie(e, C.EMPTY_STRING, -1);
      }
      ,
      n.prototype.getCookieExpirationTime = function (e) {
        const t = new Date();
        return new Date(t.getTime() + e * this.COOKIE_LIFE_MULTIPLIER).toUTCString();
      }
      ,
      n.prototype.getCache = function () {
        return this.browserStorage;
      }
      ,
      n.prototype.setCache = function () {}
      ,
      n.prototype.generateCacheKey = function (e) {
        return this.validateAndParseJson(e) ? JSON.stringify(e) : oe.startsWith(e, C.CACHE_PREFIX) || oe.startsWith(e, m.ADAL_ID_TOKEN) ? e : `${C.CACHE_PREFIX}.${this.clientId}.${e}`;
      }
      ,
      n.prototype.generateAuthorityKey = function (e) {
        const t = Ge.parseRequestState(this.cryptoImpl, e).libraryState.id;
        return this.generateCacheKey(`${ct.AUTHORITY}.${t}`);
      }
      ,
      n.prototype.generateNonceKey = function (e) {
        const t = Ge.parseRequestState(this.cryptoImpl, e).libraryState.id;
        return this.generateCacheKey(`${ct.NONCE_IDTOKEN}.${t}`);
      }
      ,
      n.prototype.generateStateKey = function (e) {
        const t = Ge.parseRequestState(this.cryptoImpl, e).libraryState.id;
        return this.generateCacheKey(`${ct.REQUEST_STATE}.${t}`);
      }
      ,
      n.prototype.getCachedAuthority = function (e) {
        const t = this.generateStateKey(e);
        const r = this.getTemporaryCache(t);
        if (!r) return null;
        const n = this.generateAuthorityKey(r);
        return this.getTemporaryCache(n);
      }
      ,
      n.prototype.updateCacheEntries = function (e, t, r, n, o) {
        this.logger.trace('BrowserCacheManager.updateCacheEntries called');
        const i = this.generateStateKey(e);
        this.setTemporaryCache(i, e, !1);
        const a = this.generateNonceKey(e);
        this.setTemporaryCache(a, t, !1);
        const s = this.generateAuthorityKey(e);
        if (this.setTemporaryCache(s, r, !1),
        o) {
          var c = {
            credential: o.homeAccountId,
            type: Ae.HOME_ACCOUNT_ID,
          };
          this.setTemporaryCache(ct.CCS_CREDENTIAL, JSON.stringify(c), !0);
        } else if (!oe.isEmpty(n)) {
          c = {
            credential: n,
            type: Ae.UPN,
          };
          this.setTemporaryCache(ct.CCS_CREDENTIAL, JSON.stringify(c), !0);
        }
      }
      ,
      n.prototype.resetRequestCache = function (e) {
        const t = this;
        this.logger.trace('BrowserCacheManager.resetRequestCache called'),
        oe.isEmpty(e) || this.getKeys().forEach(((r) => {
          r.indexOf(e) !== -1 && t.removeItem(r);
        }
        )),
        e && (this.removeItem(this.generateStateKey(e)),
        this.removeItem(this.generateNonceKey(e)),
        this.removeItem(this.generateAuthorityKey(e))),
        this.removeItem(this.generateCacheKey(ct.REQUEST_PARAMS)),
        this.removeItem(this.generateCacheKey(ct.ORIGIN_URI)),
        this.removeItem(this.generateCacheKey(ct.URL_HASH)),
        this.removeItem(this.generateCacheKey(ct.CORRELATION_ID)),
        this.removeItem(this.generateCacheKey(ct.CCS_CREDENTIAL)),
        this.removeItem(this.generateCacheKey(ct.NATIVE_REQUEST)),
        this.setInteractionInProgress(!1);
      }
      ,
      n.prototype.cleanRequestByState = function (e) {
        if (this.logger.trace('BrowserCacheManager.cleanRequestByState called'),
        e) {
          const t = this.generateStateKey(e);
          const r = this.temporaryCacheStorage.getItem(t);
          this.logger.infoPii(`BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: ${r}`),
          this.resetRequestCache(r || C.EMPTY_STRING);
        }
        this.clearMsalCookies();
      }
      ,
      n.prototype.cleanRequestByInteractionType = function (e) {
        const t = this;
        this.logger.trace('BrowserCacheManager.cleanRequestByInteractionType called'),
        this.getKeys().forEach(((r) => {
          if (r.indexOf(ct.REQUEST_STATE) !== -1) {
            const n = t.temporaryCacheStorage.getItem(r);
            if (n) {
              const o = jt.extractBrowserRequestState(t.cryptoImpl, n);
              o && o.interactionType === e && (t.logger.infoPii(`BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: ${n}`),
              t.resetRequestCache(n));
            }
          }
        }
        )),
        this.clearMsalCookies(),
        this.setInteractionInProgress(!1);
      }
      ,
      n.prototype.cacheCodeRequest = function (e, t) {
        this.logger.trace('BrowserCacheManager.cacheCodeRequest called');
        const r = t.base64Encode(JSON.stringify(e));
        this.setTemporaryCache(ct.REQUEST_PARAMS, r, !0);
      }
      ,
      n.prototype.getCachedRequest = function (e, t) {
        this.logger.trace('BrowserCacheManager.getCachedRequest called');
        const r = this.getTemporaryCache(ct.REQUEST_PARAMS, !0);
        if (!r) throw kt.createNoTokenRequestCacheError();
        const n = this.validateAndParseJson(t.base64Decode(r));
        if (!n) throw kt.createUnableToParseTokenRequestCacheError();
        if (this.removeItem(this.generateCacheKey(ct.REQUEST_PARAMS)),
        oe.isEmpty(n.authority)) {
          const o = this.generateAuthorityKey(e);
          const i = this.getTemporaryCache(o);
          if (!i) throw kt.createNoCachedAuthorityError();
          n.authority = i;
        }
        return n;
      }
      ,
      n.prototype.getCachedNativeRequest = function () {
        this.logger.trace('BrowserCacheManager.getCachedNativeRequest called');
        const e = this.getTemporaryCache(ct.NATIVE_REQUEST, !0);
        if (!e) {
          return this.logger.trace('BrowserCacheManager.getCachedNativeRequest: No cached native request found'),
          null;
        }
        const t = this.validateAndParseJson(e);
        return t || (this.logger.error('BrowserCacheManager.getCachedNativeRequest: Unable to parse native request'),
        null);
      }
      ,
      n.prototype.isInteractionInProgress = function (e) {
        const t = this.getInteractionInProgress();
        return e ? t === this.clientId : !!t;
      }
      ,
      n.prototype.getInteractionInProgress = function () {
        const e = `${C.CACHE_PREFIX}.${ct.INTERACTION_STATUS_KEY}`;
        return this.getTemporaryCache(e, !1);
      }
      ,
      n.prototype.setInteractionInProgress = function (e) {
        const t = `${C.CACHE_PREFIX}.${ct.INTERACTION_STATUS_KEY}`;
        if (e) {
          if (this.getInteractionInProgress()) throw kt.createInteractionInProgressError();
          this.setTemporaryCache(t, this.clientId, !1);
        } else e || this.getInteractionInProgress() !== this.clientId || this.removeItem(t);
      }
      ,
      n.prototype.getLegacyLoginHint = function () {
        const e = this.getTemporaryCache(m.ADAL_ID_TOKEN);
        e && (this.browserStorage.removeItem(m.ADAL_ID_TOKEN),
        this.logger.verbose('Cached ADAL id token retrieved.'));
        const t = this.getTemporaryCache(m.ID_TOKEN, !0);
        t && (this.removeItem(this.generateCacheKey(m.ID_TOKEN)),
        this.logger.verbose('Cached MSAL.js v1 id token retrieved'));
        const r = t || e;
        if (r) {
          const n = new me(r, this.cryptoImpl);
          if (n.claims && n.claims.preferred_username) {
            return this.logger.verbose('No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint'),
            n.claims.preferred_username;
          }
          if (n.claims && n.claims.upn) {
            return this.logger.verbose('No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint'),
            n.claims.upn;
          }
          this.logger.verbose('No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.');
        }
        return null;
      }
      ,
      n.prototype.updateCredentialCacheKey = function (e, t) {
        const r = t.generateCredentialKey();
        if (e !== r) {
          const n = this.getItem(e);
          if (n) {
            return this.removeItem(e),
            this.setItem(r, n),
            this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`),
            r;
          }
          this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`);
        }
        return e;
      }
      ,
      n;
    }(ve)); const Wt = '@azure/msal-browser'; const Vt = '2.31.0'; const Qt = (function () {
      function e() {}
      return e.prototype.sendGetRequestAsync = function (e, t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let
            o;
          return a(this, (function (i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, , 3]),
                [4, fetch(e, {
                  method: st.GET,
                  headers: this.getFetchHeaders(t),
                })];
              case 1:
                return r = i.sent(),
                [3, 3];
              case 2:
                throw n = i.sent(),
                window.navigator.onLine ? kt.createGetRequestFailedError(n, e) : kt.createNoNetworkConnectivityError();
              case 3:
                return i.trys.push([3, 5, , 6]),
                o = {
                  headers: this.getHeaderDict(r.headers),
                },
                [4, r.json()];
              case 4:
                return [2, (o.body = i.sent(),
                o.status = r.status,
                o)];
              case 5:
                throw i.sent(),
                kt.createFailedToParseNetworkResponseError(e);
              case 6:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.sendPostRequestAsync = function (e, t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let
            i;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                r = t && t.body || C.EMPTY_STRING,
                a.label = 1;
              case 1:
                return a.trys.push([1, 3, , 4]),
                [4, fetch(e, {
                  method: st.POST,
                  headers: this.getFetchHeaders(t),
                  body: r,
                })];
              case 2:
                return n = a.sent(),
                [3, 4];
              case 3:
                throw o = a.sent(),
                window.navigator.onLine ? kt.createPostRequestFailedError(o, e) : kt.createNoNetworkConnectivityError();
              case 4:
                return a.trys.push([4, 6, , 7]),
                i = {
                  headers: this.getHeaderDict(n.headers),
                },
                [4, n.json()];
              case 5:
                return [2, (i.body = a.sent(),
                i.status = n.status,
                i)];
              case 6:
                throw a.sent(),
                kt.createFailedToParseNetworkResponseError(e);
              case 7:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.getFetchHeaders = function (e) {
        const t = new Headers();
        if (!e || !e.headers) return t;
        const r = e.headers;
        return Object.keys(r).forEach(((e) => {
          t.append(e, r[e]);
        }
        )),
        t;
      }
      ,
      e.prototype.getHeaderDict = function (e) {
        const t = {};
        return e.forEach(((e, r) => {
          t[r] = e;
        }
        )),
        t;
      }
      ,
      e;
    }()); const Jt = (function () {
      function e() {}
      return e.prototype.sendGetRequestAsync = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (r) {
            return [2, this.sendRequestAsync(e, st.GET, t)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.sendPostRequestAsync = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (r) {
            return [2, this.sendRequestAsync(e, st.POST, t)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.sendRequestAsync = function (e, t, r) {
        const n = this;
        return new Promise(((o, i) => {
          const a = new XMLHttpRequest();
          if (a.open(t, e, !0),
          n.setXhrHeaders(a, r),
          a.onload = function () {
            (a.status < 200 || a.status >= 300) && (t === st.POST ? i(kt.createPostRequestFailedError(`Failed with status ${a.status}`, e)) : i(kt.createGetRequestFailedError(`Failed with status ${a.status}`, e)));
            try {
              const r = JSON.parse(a.responseText);
              const s = {
                headers: n.getHeaderDict(a),
                body: r,
                status: a.status,
              };
              o(s);
            } catch (t) {
              i(kt.createFailedToParseNetworkResponseError(e));
            }
          }
          ,
          a.onerror = function () {
            window.navigator.onLine ? t === st.POST ? i(kt.createPostRequestFailedError(`Failed with status ${a.status}`, e)) : i(kt.createGetRequestFailedError(`Failed with status ${a.status}`, e)) : i(kt.createNoNetworkConnectivityError());
          }
          ,
          t === st.POST && r && r.body) a.send(r.body);
          else {
            if (t !== st.GET) throw kt.createHttpMethodNotImplementedError(t);
            a.send();
          }
        }
        ));
      }
      ,
      e.prototype.setXhrHeaders = function (e, t) {
        if (t && t.headers) {
          const r = t.headers;
          Object.keys(r).forEach(((t) => {
            e.setRequestHeader(t, r[t]);
          }
          ));
        }
      }
      ,
      e.prototype.getHeaderDict = function (e) {
        const t = e.getAllResponseHeaders().trim().split(/[\r\n]+/);
        const r = {};
        return t.forEach(((e) => {
          const t = e.split(': ');
          const n = t.shift();
          const o = t.join(': ');
          n && o && (r[n] = o);
        }
        )),
        r;
      }
      ,
      e;
    }()); const Xt = (function () {
      function t() {}
      return t.clearHash = function (e) {
        e.location.hash = C.EMPTY_STRING,
        typeof e.history.replaceState === 'function' && e.history.replaceState(null, C.EMPTY_STRING, `${e.location.origin}${e.location.pathname}${e.location.search}`);
      }
      ,
      t.replaceHash = function (e) {
        const t = e.split('#');
        t.shift(),
        window.location.hash = t.length > 0 ? t.join('#') : C.EMPTY_STRING;
      }
      ,
      t.isInIframe = function () {
        return window.parent !== window;
      }
      ,
      t.isInPopup = function () {
        return typeof window !== 'undefined' && !!window.opener && window.opener !== window && typeof window.name === 'string' && window.name.indexOf(`${Nt.POPUP_NAME_PREFIX}.`) === 0;
      }
      ,
      t.getCurrentUri = function () {
        return window.location.href.split('?')[0].split('#')[0];
      }
      ,
      t.getHomepage = function () {
        const e = new ze(window.location.href).getUrlComponents();
        return `${e.Protocol}//${e.HostNameAndPort}/`;
      }
      ,
      t.getBrowserNetworkClient = function () {
        return window.fetch && window.Headers ? new Qt() : new Jt();
      }
      ,
      t.blockReloadInHiddenIframes = function () {
        if (ze.hashContainsKnownProperties(window.location.hash) && t.isInIframe()) throw kt.createBlockReloadInHiddenIframeError();
      }
      ,
      t.blockRedirectInIframe = function (r, n) {
        const o = t.isInIframe();
        if (r === e.InteractionType.Redirect && o && !n) throw kt.createRedirectInIframeError(o);
      }
      ,
      t.blockAcquireTokenInPopups = function () {
        if (t.isInPopup()) throw kt.createBlockAcquireTokenInPopupsError();
      }
      ,
      t.blockNonBrowserEnvironment = function (e) {
        if (!e) throw kt.createNonBrowserEnvironmentError();
      }
      ,
      t.blockNativeBrokerCalledBeforeInitialized = function (e, t) {
        if (e && !t) throw kt.createNativeBrokerCalledBeforeInitialize();
      }
      ,
      t.detectIEOrEdge = function () {
        const e = window.navigator.userAgent;
        const t = e.indexOf('MSIE ');
        const r = e.indexOf('Trident/');
        const n = e.indexOf('Edge/');
        return t > 0 || r > 0 || n > 0;
      }
      ,
      t;
    }()); const Zt = (function () {
      function t(e, t, r, n, o, i, a, s, c) {
        this.config = e,
        this.browserStorage = t,
        this.browserCrypto = r,
        this.networkClient = this.config.system.networkClient,
        this.eventHandler = o,
        this.navigationClient = i,
        this.nativeMessageHandler = s,
        this.correlationId = c || this.browserCrypto.createNewGuid(),
        this.logger = n.clone(Nt.MSAL_SKU, Vt, this.correlationId),
        this.performanceClient = a;
      }
      return t.prototype.clearCacheOnLogout = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                if (!e) return [3, 5];
                fe.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose('Setting active account to null'),
                this.browserStorage.setActiveAccount(null)),
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]),
                [4, this.browserStorage.removeAccount(fe.generateAccountCacheKey(e))];
              case 2:
                return t.sent(),
                this.logger.verbose('Cleared cache items belonging to the account provided in the logout request.'),
                [3, 4];
              case 3:
                return t.sent(),
                this.logger.error('Account provided in logout request was not found. Local cache unchanged.'),
                [3, 4];
              case 4:
                return [3, 9];
              case 5:
                return t.trys.push([5, 8, , 9]),
                this.logger.verbose('No account provided in logout request, clearing all cache items.', this.correlationId),
                [4, this.browserStorage.clear()];
              case 6:
                return t.sent(),
                [4, this.browserCrypto.clearKeystore()];
              case 7:
                return t.sent(),
                [3, 9];
              case 8:
                return t.sent(),
                this.logger.error('Attempted to clear all MSAL cache items and failed. Local cache unchanged.'),
                [3, 9];
              case 9:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.initializeBaseRequest = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let
            s;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (this.logger.verbose('Initializing BaseAuthRequest'),
                r = t.authority || this.config.auth.authority,
                o = c(t && t.scopes || []),
                (i = {
                  ...t,
                  correlationId: this.correlationId,
                  authority: r,
                  scopes: o, 
  }).authenticationScheme) {
                  if (i.authenticationScheme === e.AuthenticationScheme.SSH) {
                    if (!t.sshJwk) throw de.createMissingSshJwkError();
                    if (!t.sshKid) throw de.createMissingSshKidError();
                  }
                  this.logger.verbose(`Authentication Scheme set to "${i.authenticationScheme}" as configured in Auth request`);
                } else {
                  i.authenticationScheme = e.AuthenticationScheme.BEARER,
                  this.logger.verbose('Authentication Scheme wasn\'t explicitly set in request, defaulting to "Bearer" request');
                }
                return !t.claims || oe.isEmpty(t.claims) ? [3, 2] : (s = i,
                [4, this.browserCrypto.hashString(t.claims)]);
              case 1:
                s.requestedClaimsHash = a.sent(),
                a.label = 2;
              case 2:
                return [2, i];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.getRedirectUri = function (e) {
        this.logger.verbose('getRedirectUri called');
        const t = e || this.config.auth.redirectUri || Xt.getCurrentUri();
        return ze.getAbsoluteUrl(t, Xt.getCurrentUri());
      }
      ,
      t.prototype.initializeServerTelemetryManager = function (e, t) {
        this.logger.verbose('initializeServerTelemetryManager called');
        const r = {
          clientId: this.config.auth.clientId,
          correlationId: this.correlationId,
          apiId: e,
          forceRefresh: t || !1,
          wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
          wrapperVer: this.browserStorage.getWrapperMetadata()[1],
        };
        return new wt(r, this.browserStorage);
      }
      ,
      t.prototype.getDiscoveredAuthority = function (e) {
        return i(this, void 0, void 0, (function () {
          let t;
          return a(this, (function (r) {
            switch (r.label) {
              case 0:
                return this.logger.verbose('getDiscoveredAuthority called'),
                t = {
                  protocolMode: this.config.auth.protocolMode,
                  knownAuthorities: this.config.auth.knownAuthorities,
                  cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                  authorityMetadata: this.config.auth.authorityMetadata,
                },
                e ? (this.logger.verbose('Creating discovered authority with request authority'),
                [4, ft.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t)]) : [3, 2];
              case 1:
              case 3:
                return [2, r.sent()];
              case 2:
                return this.logger.verbose('Creating discovered authority with configured authority'),
                [4, ft.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t)];
            }
          }
          ));
        }
        ));
      }
      ,
      t;
    }()); const $t = (function (t) {
      function o() {
        return t !== null && t.apply(this, arguments) || this;
      }
      return r(o, t),
      o.prototype.initializeAuthorizationCodeRequest = function (e) {
        return i(this, void 0, void 0, (function () {
          let t; let
            r;
          return a(this, (function (o) {
            switch (o.label) {
              case 0:
                return this.logger.verbose('initializeAuthorizationRequest called', e.correlationId),
                [4, this.browserCrypto.generatePkceCodes()];
              case 1:
                return t = o.sent(),
                r = {
                  ...e,
                  redirectUri: e.redirectUri,
                  code: C.EMPTY_STRING,
                  codeVerifier: t.verifier, 
  },
                e.codeChallenge = t.challenge,
                e.codeChallengeMethod = C.S256_CODE_CHALLENGE_METHOD,
                [2, r];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.initializeLogoutRequest = function (e) {
        this.logger.verbose('initializeLogoutRequest called', e == null ? void 0 : e.correlationId);
        const t = { correlationId: this.correlationId || this.browserCrypto.createNewGuid(), ...e };
        if (e) {
          if (e.logoutHint) this.logger.verbose('logoutHint has already been set in logoutRequest');
          else if (e.account) {
            const r = this.getLogoutHintFromIdTokenClaims(e.account);
            r && (this.logger.verbose('Setting logoutHint to login_hint ID Token Claim value for the account provided'),
            t.logoutHint = r);
          } else this.logger.verbose('logoutHint was not set and account was not passed into logout request, logoutHint will not be set');
        } else this.logger.verbose('logoutHint will not be set since no logout request was configured');
        return e && e.postLogoutRedirectUri === null ? this.logger.verbose('postLogoutRedirectUri passed as null, not setting post logout redirect uri', t.correlationId) : e && e.postLogoutRedirectUri ? (this.logger.verbose('Setting postLogoutRedirectUri to uri set on logout request', t.correlationId),
        t.postLogoutRedirectUri = ze.getAbsoluteUrl(e.postLogoutRedirectUri, Xt.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose('postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect', t.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose('Setting postLogoutRedirectUri to configured uri', t.correlationId),
        t.postLogoutRedirectUri = ze.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, Xt.getCurrentUri())) : (this.logger.verbose('Setting postLogoutRedirectUri to current page', t.correlationId),
        t.postLogoutRedirectUri = ze.getAbsoluteUrl(Xt.getCurrentUri(), Xt.getCurrentUri())),
        t;
      }
      ,
      o.prototype.getLogoutHintFromIdTokenClaims = function (e) {
        const t = e.idTokenClaims;
        if (t) {
          if (t.login_hint) return t.login_hint;
          this.logger.verbose('The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request');
        } else this.logger.verbose('The provided account does not contain ID Token Claims, logoutHint will not be added to logout request');
        return null;
      }
      ,
      o.prototype.createAuthCodeClient = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          let n;
          return a(this, (function (o) {
            switch (o.label) {
              case 0:
                return [4, this.getClientConfiguration(e, t, r)];
              case 1:
                return n = o.sent(),
                [2, new Xe(n)];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.getClientConfiguration = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          let n;
          return a(this, (function (o) {
            switch (o.label) {
              case 0:
                return this.logger.verbose('getClientConfiguration called', this.correlationId),
                [4, this.getDiscoveredAuthority(t, r)];
              case 1:
                return n = o.sent(),
                [2, {
                  authOptions: {
                    clientId: this.config.auth.clientId,
                    authority: n,
                    clientCapabilities: this.config.auth.clientCapabilities,
                  },
                  systemOptions: {
                    tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                    preventCorsPreflight: !0,
                  },
                  loggerOptions: {
                    loggerCallback: this.config.system.loggerOptions.loggerCallback,
                    piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
                    logLevel: this.config.system.loggerOptions.logLevel,
                    correlationId: this.correlationId,
                  },
                  cryptoInterface: this.browserCrypto,
                  networkInterface: this.networkClient,
                  storageInterface: this.browserStorage,
                  serverTelemetryManager: e,
                  libraryInfo: {
                    sku: Nt.MSAL_SKU,
                    version: Vt,
                    cpu: C.EMPTY_STRING,
                    os: C.EMPTY_STRING,
                  },
                  telemetry: this.config.telemetry,
                }];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.validateAndExtractStateFromHash = function (e, t, r) {
        if (this.logger.verbose('validateAndExtractStateFromHash called', r),
        !e.state) throw kt.createHashDoesNotContainStateError();
        const n = jt.extractBrowserRequestState(this.browserCrypto, e.state);
        if (!n) throw kt.createUnableToParseStateError();
        if (n.interactionType !== t) throw kt.createStateInteractionTypeMismatchError();
        return this.logger.verbose('Returning state from hash', r),
        e.state;
      }
      ,
      o.prototype.getDiscoveredAuthority = function (t, r) {
        return i(this, void 0, void 0, (function () {
          let n; let o; let i; let
            s;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return this.logger.verbose('getDiscoveredAuthority called', this.correlationId),
                n = this.performanceClient.startMeasurement(e.PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId),
                o = {
                  protocolMode: this.config.auth.protocolMode,
                  knownAuthorities: this.config.auth.knownAuthorities,
                  cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                  authorityMetadata: this.config.auth.authorityMetadata,
                  skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache,
                },
                i = t || this.config.auth.authority,
                s = gt.generateAuthority(i, r || this.config.auth.azureCloudOptions),
                this.logger.verbose('Creating discovered authority with configured authority', this.correlationId),
                [4, ft.createDiscoveredInstance(s, this.config.system.networkClient, this.browserStorage, o).then(((e) => (n.endMeasurement({
                  success: !0,
                }),
                e)
                )).catch(((e) => {
                  throw n.endMeasurement({
                    errorCode: e.errorCode,
                    subErrorCode: e.subError,
                    success: !1,
                  }),
                  e;
                }
                ))];
              case 1:
                return [2, a.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.initializeAuthorizationRequest = function (e, t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let c; let u; let
            l;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return this.logger.verbose('initializeAuthorizationRequest called', this.correlationId),
                r = this.getRedirectUri(e.redirectUri),
                o = {
                  interactionType: t,
                },
                i = Ge.setRequestState(this.browserCrypto, e && e.state || C.EMPTY_STRING, o),
                c = [{}],
                [4, this.initializeBaseRequest(e)];
              case 1:
                return s = n.apply(void 0, [n.apply(void 0, c.concat([a.sent()])), {
                  redirectUri: r,
                  state: i,
                  nonce: e.nonce || this.browserCrypto.createNewGuid(),
                  responseMode: S.FRAGMENT,
                }]),
                (u = e.account || this.browserStorage.getActiveAccount()) && (this.logger.verbose('Setting validated request account', this.correlationId),
                this.logger.verbosePii(`Setting validated request account: ${u.homeAccountId}`, this.correlationId),
                s.account = u),
                oe.isEmpty(s.loginHint) && !u && (l = this.browserStorage.getLegacyLoginHint()) && (s.loginHint = l),
                [2, s];
            }
          }
          ));
        }
        ));
      }
      ,
      o;
    }(Zt)); const er = (function () {
      function e(e, t, r, n) {
        this.authModule = e,
        this.browserStorage = t,
        this.authCodeRequest = r,
        this.logger = n;
      }
      return e.prototype.handleCodeResponseFromHash = function (e, t, r, n) {
        return i(this, void 0, void 0, (function () {
          let o; let i; let
            s;
          return a(this, (function (a) {
            if (this.logger.verbose('InteractionHandler.handleCodeResponse called'),
            oe.isEmpty(e)) throw kt.createEmptyHashError(e);
            if (o = this.browserStorage.generateStateKey(t),
            !(i = this.browserStorage.getTemporaryCache(o))) throw ne.createStateNotFoundError('Cached State');
            try {
              s = this.authModule.handleFragmentResponse(e, i);
            } catch (e) {
              throw e instanceof be && e.subError === Rt.userCancelledError.code ? kt.createUserCancelledError() : e;
            }
            return [2, this.handleCodeResponseFromServer(s, t, r, n)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.handleCodeResponseFromServer = function (e, t, r, n, o) {
        return void 0 === o && (o = !0),
        i(this, void 0, void 0, (function () {
          let i; let s; let c; let u; let l; let
            d;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (this.logger.trace('InteractionHandler.handleCodeResponseFromServer called'),
                i = this.browserStorage.generateStateKey(t),
                !(s = this.browserStorage.getTemporaryCache(i))) throw ne.createStateNotFoundError('Cached State');
                return c = this.browserStorage.generateNonceKey(s),
                u = this.browserStorage.getTemporaryCache(c),
                this.authCodeRequest.code = e.code,
                e.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, r, n)] : [3, 2];
              case 1:
                a.sent(),
                a.label = 2;
              case 2:
                return o && (e.nonce = u || void 0),
                e.state = s,
                e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (l = this.checkCcsCredentials()) && (this.authCodeRequest.ccsCredential = l),
                [4, this.authModule.acquireToken(this.authCodeRequest, e)];
              case 3:
                return d = a.sent(),
                this.browserStorage.cleanRequestByState(t),
                [2, d];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.updateTokenEndpointAuthority = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          let n; let
            o;
          return a(this, (function (i) {
            switch (i.label) {
              case 0:
                return n = `https://${e}/${t.tenant}/`,
                [4, ft.createDiscoveredInstance(n, r, this.browserStorage, t.options)];
              case 1:
                return o = i.sent(),
                this.authModule.updateAuthority(o),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.checkCcsCredentials = function () {
        const e = this.browserStorage.getTemporaryCache(ct.CCS_CREDENTIAL, !0);
        if (e) {
          try {
            return JSON.parse(e);
          } catch (t) {
            this.authModule.logger.error('Cache credential could not be parsed'),
            this.authModule.logger.errorPii(`Cache credential could not be parsed: ${e}`);
          }
        }
        return null;
      }
      ,
      e;
    }()); const
      tr = (function (t) {
        function n(e, r, n, o, i) {
          const a = t.call(this, e, r, n, o) || this;
          return a.browserCrypto = i,
          a;
        }
        return r(n, t),
        n.prototype.initiateAuthRequest = function (t, r) {
          return i(this, void 0, void 0, (function () {
            let n;
            return a(this, (function (o) {
              switch (o.label) {
                case 0:
                  return this.logger.verbose('RedirectHandler.initiateAuthRequest called'),
                  oe.isEmpty(t) ? [3, 7] : (r.redirectStartPage && (this.logger.verbose('RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page'),
                  this.browserStorage.setTemporaryCache(ct.ORIGIN_URI, r.redirectStartPage, !0)),
                  this.browserStorage.setTemporaryCache(ct.CORRELATION_ID, this.authCodeRequest.correlationId, !0),
                  this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto),
                  this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${t}`),
                  n = {
                    apiId: e.ApiId.acquireTokenRedirect,
                    timeout: r.redirectTimeout,
                    noHistory: !1,
                  },
                  typeof r.onRedirectNavigate !== 'function' ? [3, 4] : (this.logger.verbose('RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback'),
                  !1 === r.onRedirectNavigate(t) ? [3, 2] : (this.logger.verbose('RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating'),
                  [4, r.navigationClient.navigateExternal(t, n)])));
                case 1:
                case 5:
                  return o.sent(),
                  [2];
                case 2:
                  return this.logger.verbose('RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation'),
                  [2];
                case 3:
                  return [3, 6];
                case 4:
                  return this.logger.verbose('RedirectHandler.initiateAuthRequest: Navigating window to navigate url'),
                  [4, r.navigationClient.navigateExternal(t, n)];
                case 6:
                  return [3, 8];
                case 7:
                  throw this.logger.info('RedirectHandler.initiateAuthRequest: Navigate url is empty'),
                  kt.createEmptyNavigationUriError();
                case 8:
                  return [2];
              }
            }
            ));
          }
          ));
        }
        ,
        n.prototype.handleCodeResponseFromHash = function (e, t, r, n) {
          return i(this, void 0, void 0, (function () {
            let o; let i; let s; let c; let u; let l; let
              d;
            return a(this, (function (a) {
              switch (a.label) {
                case 0:
                  if (this.logger.verbose('RedirectHandler.handleCodeResponse called'),
                  oe.isEmpty(e)) throw kt.createEmptyHashError(e);
                  if (this.browserStorage.setInteractionInProgress(!1),
                  o = this.browserStorage.generateStateKey(t),
                  !(i = this.browserStorage.getTemporaryCache(o))) throw ne.createStateNotFoundError('Cached State');
                  try {
                    s = this.authModule.handleFragmentResponse(e, i);
                  } catch (e) {
                    throw e instanceof be && e.subError === Rt.userCancelledError.code ? kt.createUserCancelledError() : e;
                  }
                  return c = this.browserStorage.generateNonceKey(i),
                  u = this.browserStorage.getTemporaryCache(c),
                  this.authCodeRequest.code = s.code,
                  s.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(s.cloud_instance_host_name, r, n)] : [3, 2];
                case 1:
                  a.sent(),
                  a.label = 2;
                case 2:
                  return s.nonce = u || void 0,
                  s.state = i,
                  s.client_info ? this.authCodeRequest.clientInfo = s.client_info : (l = this.checkCcsCredentials()) && (this.authCodeRequest.ccsCredential = l),
                  [4, this.authModule.acquireToken(this.authCodeRequest, s)];
                case 3:
                  return d = a.sent(),
                  this.browserStorage.cleanRequestByState(t),
                  [2, d];
              }
            }
            ));
          }
          ));
        }
        ,
        n;
      }(er));
    e.EventType = void 0,
    (xt = e.EventType || (e.EventType = {})).INITIALIZE_START = 'msal:initializeStart',
    xt.INITIALIZE_END = 'msal:initializeEnd',
    xt.ACCOUNT_ADDED = 'msal:accountAdded',
    xt.ACCOUNT_REMOVED = 'msal:accountRemoved',
    xt.LOGIN_START = 'msal:loginStart',
    xt.LOGIN_SUCCESS = 'msal:loginSuccess',
    xt.LOGIN_FAILURE = 'msal:loginFailure',
    xt.ACQUIRE_TOKEN_START = 'msal:acquireTokenStart',
    xt.ACQUIRE_TOKEN_SUCCESS = 'msal:acquireTokenSuccess',
    xt.ACQUIRE_TOKEN_FAILURE = 'msal:acquireTokenFailure',
    xt.ACQUIRE_TOKEN_NETWORK_START = 'msal:acquireTokenFromNetworkStart',
    xt.SSO_SILENT_START = 'msal:ssoSilentStart',
    xt.SSO_SILENT_SUCCESS = 'msal:ssoSilentSuccess',
    xt.SSO_SILENT_FAILURE = 'msal:ssoSilentFailure',
    xt.ACQUIRE_TOKEN_BY_CODE_START = 'msal:acquireTokenByCodeStart',
    xt.ACQUIRE_TOKEN_BY_CODE_SUCCESS = 'msal:acquireTokenByCodeSuccess',
    xt.ACQUIRE_TOKEN_BY_CODE_FAILURE = 'msal:acquireTokenByCodeFailure',
    xt.HANDLE_REDIRECT_START = 'msal:handleRedirectStart',
    xt.HANDLE_REDIRECT_END = 'msal:handleRedirectEnd',
    xt.POPUP_OPENED = 'msal:popupOpened',
    xt.LOGOUT_START = 'msal:logoutStart',
    xt.LOGOUT_SUCCESS = 'msal:logoutSuccess',
    xt.LOGOUT_FAILURE = 'msal:logoutFailure',
    xt.LOGOUT_END = 'msal:logoutEnd',
    (function (e) {
      e.USER_INTERACTION_REQUIRED = 'USER_INTERACTION_REQUIRED',
      e.USER_CANCEL = 'USER_CANCEL',
      e.NO_NETWORK = 'NO_NETWORK',
      e.TRANSIENT_ERROR = 'TRANSIENT_ERROR',
      e.PERSISTENT_ERROR = 'PERSISTENT_ERROR',
      e.DISABLED = 'DISABLED',
      e.ACCOUNT_UNAVAILABLE = 'ACCOUNT_UNAVAILABLE';
    }(Ft || (Ft = {})));
    const rr = {
      code: 'ContentError',
    };
    const nr = {
      code: 'user_switch',
      desc: 'User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again.',
    };
    const or = {
      code: 'tokens_not_found_in_internal_memory_cache',
      desc: 'Tokens not cached in MSAL JS internal memory, please make the WAM request',
    };
    const ir = (function (e) {
      function t(r, n, o) {
        const i = e.call(this, r, n) || this;
        return Object.setPrototypeOf(i, t.prototype),
        i.name = 'NativeAuthError',
        i.ext = o,
        i;
      }
      return r(t, e),
      t.prototype.isFatal = function () {
        return !(!this.ext || !this.ext.status || this.ext.status !== Ft.PERSISTENT_ERROR && this.ext.status !== Ft.DISABLED) || this.errorCode === rr.code;
      }
      ,
      t.createError = function (e, r, n) {
        if (n && n.status) {
          switch (n.status) {
            case Ft.ACCOUNT_UNAVAILABLE:
              return Ke.createNativeAccountUnavailableError();
            case Ft.USER_INTERACTION_REQUIRED:
              return new Ke(e, r);
            case Ft.USER_CANCEL:
              return kt.createUserCancelledError();
            case Ft.NO_NETWORK:
              return kt.createNoNetworkConnectivityError();
          }
        }
        return new t(e, r, n);
      }
      ,
      t.createUserSwitchError = function () {
        return new t(nr.code, nr.desc);
      }
      ,
      t.createTokensNotFoundInCacheError = function () {
        return new t(or.code, or.desc);
      }
      ,
      t;
    }(ee));
    const ar = (function (t) {
      function o() {
        return t !== null && t.apply(this, arguments) || this;
      }
      return r(o, t),
      o.prototype.acquireToken = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let
            s;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return r = this.performanceClient.startMeasurement(e.PerformanceEvents.SilentCacheClientAcquireToken, t.correlationId),
                n = this.initializeServerTelemetryManager(e.ApiId.acquireTokenSilent_silentFlow),
                [4, this.createSilentFlowClient(n, t.authority, t.azureCloudOptions)];
              case 1:
                o = a.sent(),
                this.logger.verbose('Silent auth client created'),
                a.label = 2;
              case 2:
                return a.trys.push([2, 4, , 5]),
                [4, o.acquireCachedToken(t)];
              case 3:
                return i = a.sent(),
                r.endMeasurement({
                  success: !0,
                  fromCache: !0,
                }),
                [2, i];
              case 4:
                throw (s = a.sent()) instanceof kt && s.errorCode === Rt.signingKeyNotFoundInStorage.code && this.logger.verbose('Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.'),
                r.endMeasurement({
                  errorCode: s instanceof ee && s.errorCode || void 0,
                  subErrorCode: s instanceof ee && s.subError || void 0,
                  success: !1,
                }),
                s;
              case 5:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.logout = function () {
        return Promise.reject(kt.createSilentLogoutUnsupportedError());
      }
      ,
      o.prototype.createSilentFlowClient = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          let n;
          return a(this, (function (o) {
            switch (o.label) {
              case 0:
                return [4, this.getClientConfiguration(e, t, r)];
              case 1:
                return n = o.sent(),
                [2, new $e(n, this.performanceClient)];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.initializeSilentRequest = function (e, t) {
        return i(this, void 0, void 0, (function () {
          let r;
          return a(this, (function (o) {
            switch (o.label) {
              case 0:
                return r = [{ ...e }],
                [4, this.initializeBaseRequest(e)];
              case 1:
                return [2, n.apply(void 0, [n.apply(void 0, r.concat([o.sent()])), {
                  account: t,
                  forceRefresh: e.forceRefresh || !1,
                }])];
            }
          }
          ));
        }
        ));
      }
      ,
      o;
    }($t));
    const sr = (function (t) {
      function s(e, r, n, o, i, a, s, c, u, l, d, h) {
        const p = t.call(this, e, r, n, o, i, a, c, u, h) || this;
        return p.apiId = s,
        p.accountId = l,
        p.nativeMessageHandler = u,
        p.nativeStorageManager = d,
        p.silentCacheClient = new ar(e, p.nativeStorageManager, n, o, i, a, c, u, h),
        p;
      }
      return r(s, t),
      s.prototype.acquireToken = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let s; let c; let
            u;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return this.logger.trace('NativeInteractionClient - acquireToken called.'),
                r = this.performanceClient.startMeasurement(e.PerformanceEvents.NativeInteractionClientAcquireToken, t.correlationId),
                n = qe.nowSeconds(),
                [4, this.initializeNativeRequest(t)];
              case 1:
                o = a.sent(),
                a.label = 2;
              case 2:
                return a.trys.push([2, 4, , 5]),
                [4, this.acquireTokensFromCache(this.accountId, o)];
              case 3:
                return i = a.sent(),
                r.endMeasurement({
                  success: !0,
                  isNativeBroker: !1,
                  fromCache: !0,
                }),
                [2, i];
              case 4:
                return a.sent(),
                this.logger.info('MSAL internal Cache does not contain tokens, proceed to make a native call'),
                [3, 5];
              case 5:
                return s = {
                  method: it.GetToken,
                  request: o,
                },
                [4, this.nativeMessageHandler.sendMessage(s)];
              case 6:
                return c = a.sent(),
                u = this.validateNativeResponse(c),
                [2, this.handleNativeResponse(u, o, n).then(((e) => (r.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: e.requestId,
                }),
                e)
                )).catch(((e) => {
                  throw r.endMeasurement({
                    success: !1,
                    errorCode: e.errorCode,
                    subErrorCode: e.subError,
                    isNativeBroker: !0,
                  }),
                  e;
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      s.prototype.createSilentCacheRequest = function (e, t) {
        return {
          authority: e.authority,
          correlationId: this.correlationId,
          scopes: he.fromString(e.scope).asArray(),
          account: t,
          forceRefresh: !1,
        };
      }
      ,
      s.prototype.acquireTokensFromCache = function (e, t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let
            o;
          return a(this, (function (i) {
            switch (i.label) {
              case 0:
                if (!(r = this.browserStorage.readAccountFromCacheWithNativeAccountId(e))) throw ne.createNoAccountFoundError();
                n = r.getAccountInfo(),
                i.label = 1;
              case 1:
                return i.trys.push([1, 3, , 4]),
                o = this.createSilentCacheRequest(t, n),
                [4, this.silentCacheClient.acquireToken(o)];
              case 2:
                return [2, i.sent()];
              case 3:
                throw i.sent();
              case 4:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      s.prototype.acquireTokenRedirect = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let s; let
            c;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return this.logger.trace('NativeInteractionClient - acquireTokenRedirect called.'),
                [4, this.initializeNativeRequest(t)];
              case 1:
                r = a.sent(),
                n = {
                  method: it.GetToken,
                  request: r,
                },
                a.label = 2;
              case 2:
                return a.trys.push([2, 4, , 5]),
                [4, this.nativeMessageHandler.sendMessage(n)];
              case 3:
                return o = a.sent(),
                this.validateNativeResponse(o),
                [3, 5];
              case 4:
                if ((i = a.sent()) instanceof ir && i.isFatal()) throw i;
                return [3, 5];
              case 5:
                return this.browserStorage.setTemporaryCache(ct.NATIVE_REQUEST, JSON.stringify(r), !0),
                s = {
                  apiId: e.ApiId.acquireTokenRedirect,
                  timeout: this.config.system.redirectNavigationTimeout,
                  noHistory: !1,
                },
                c = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(t.redirectUri),
                [4, this.navigationClient.navigateExternal(c, s)];
              case 6:
                return a.sent(),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      s.prototype.handleRedirectPromise = function () {
        return i(this, void 0, void 0, (function () {
          let e; let t; let r; let n; let i; let s; let c; let
            u;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (this.logger.trace('NativeInteractionClient - handleRedirectPromise called.'),
                !this.browserStorage.isInteractionInProgress(!0)) {
                  return this.logger.info('handleRedirectPromise called but there is no interaction in progress, returning null.'),
                  [2, null];
                }
                if (!(e = this.browserStorage.getCachedNativeRequest())) {
                  return this.logger.verbose('NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.'),
                  [2, null];
                }
                t = e.prompt,
                r = o(e, ['prompt']),
                t && this.logger.verbose('NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window.'),
                this.browserStorage.removeItem(this.browserStorage.generateCacheKey(ct.NATIVE_REQUEST)),
                n = {
                  method: it.GetToken,
                  request: r,
                },
                i = qe.nowSeconds(),
                a.label = 1;
              case 1:
                return a.trys.push([1, 3, , 4]),
                this.logger.verbose('NativeInteractionClient - handleRedirectPromise sending message to native broker.'),
                [4, this.nativeMessageHandler.sendMessage(n)];
              case 2:
                return s = a.sent(),
                this.validateNativeResponse(s),
                c = this.handleNativeResponse(s, r, i),
                this.browserStorage.setInteractionInProgress(!1),
                [2, c];
              case 3:
                throw u = a.sent(),
                this.browserStorage.setInteractionInProgress(!1),
                u;
              case 4:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      s.prototype.logout = function () {
        return this.logger.trace('NativeInteractionClient - logout called.'),
        Promise.reject('Logout not implemented yet');
      }
      ,
      s.prototype.handleNativeResponse = function (t, r, n) {
        return i(this, void 0, void 0, (function () {
          let o; let i; let s; let c; let u; let l; let d; let h; let p; let g; let f; let m; let v; let y; let E; let _; let T; let I; let w; const
            S = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (this.logger.trace('NativeInteractionClient - handleNativeResponse called.'),
                o = this.getMATSFromResponse(t),
                this.performanceClient.addStaticFields({
                  extensionId: this.nativeMessageHandler.getExtensionId(),
                  extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
                  matsBrokerVersion: o ? o.broker_version : void 0,
                  matsAccountJoinOnStart: o ? o.account_join_on_start : void 0,
                  matsAccountJoinOnEnd: o ? o.account_join_on_end : void 0,
                  matsDeviceJoin: o ? o.device_join : void 0,
                  matsPromptBehavior: o ? o.prompt_behavior : void 0,
                  matsApiErrorCode: o ? o.api_error_code : void 0,
                  matsUiVisible: o ? o.ui_visible : void 0,
                  matsSilentCode: o ? o.silent_code : void 0,
                  matsSilentBiSubCode: o ? o.silent_bi_sub_code : void 0,
                  matsSilentMessage: o ? o.silent_message : void 0,
                  matsSilentStatus: o ? o.silent_status : void 0,
                  matsHttpStatus: o ? o.http_status : void 0,
                  matsHttpEventCount: o ? o.http_event_count : void 0,
                }, this.correlationId),
                t.account.id !== r.accountId) throw ir.createUserSwitchError();
                return i = new me(t.id_token || C.EMPTY_STRING, this.browserCrypto),
                [4, this.getDiscoveredAuthority(r.authority)];
              case 1:
                return s = a.sent(),
                c = s.getPreferredCache(),
                u = fe.generateHomeAccountId(t.client_info || C.EMPTY_STRING, ce.Default, this.logger, this.browserCrypto, i),
                l = fe.createAccount(t.client_info, u, i, void 0, void 0, void 0, c, t.account.id),
                this.browserStorage.setAccount(l),
                d = t.scope ? he.fromString(t.scope) : he.fromString(r.scope),
                h = t.account.properties || {},
                p = h.UID || i.claims.oid || i.claims.sub || C.EMPTY_STRING,
                g = h.TenantId || i.claims.tid || C.EMPTY_STRING,
                m = e.AuthenticationScheme.BEARER,
                r.tokenType === e.AuthenticationScheme.POP ? [3, 2] : [3, 4];
              case 2:
                if (m = e.AuthenticationScheme.POP,
                t.shr) {
                  return this.logger.trace('handleNativeServerResponse: SHR is enabled in native layer'),
                  f = t.shr,
                  [3, 5];
                }
                if (v = new We(this.browserCrypto),
                y = {
                  resourceRequestMethod: r.resourceRequestMethod,
                  resourceRequestUri: r.resourceRequestUri,
                  shrClaims: r.shrClaims,
                  shrNonce: r.shrNonce,
                },
                !r.keyId) throw ne.createKeyIdMissingError();
                return [4, v.signPopToken(t.access_token, r.keyId, y)];
              case 3:
                return f = a.sent(),
                [3, 5];
              case 4:
                f = t.access_token,
                a.label = 5;
              case 5:
                return E = {
                  authority: s.canonicalAuthority,
                  uniqueId: p,
                  tenantId: g,
                  scopes: d.asArray(),
                  account: l.getAccountInfo(),
                  idToken: t.id_token,
                  idTokenClaims: i.claims,
                  accessToken: f,
                  fromCache: !!o && this.isResponseFromCache(o),
                  expiresOn: new Date(1e3 * Number(n + t.expires_in)),
                  tokenType: m,
                  correlationId: this.correlationId,
                  state: t.state,
                  fromNativeBroker: !0,
                },
                _ = Ue.createIdTokenEntity(u, r.authority, t.id_token || C.EMPTY_STRING, r.clientId, i.claims.tid || C.EMPTY_STRING),
                this.nativeStorageManager.setIdTokenCredential(_),
                T = m === e.AuthenticationScheme.POP ? C.SHR_NONCE_VALIDITY : (typeof t.expires_in === 'string' ? parseInt(t.expires_in, 10) : t.expires_in) || 0,
                I = n + T,
                w = He.createAccessTokenEntity(u, r.authority, f, r.clientId, g, d.printScopes(), I, 0, this.browserCrypto),
                this.nativeStorageManager.setAccessTokenCredential(w),
                this.browserStorage.removeAccountContext(l).catch(((e) => {
                  S.logger.error(`Error occurred while removing account context from browser storage. ${e}`);
                }
                )),
                [2, E];
            }
          }
          ));
        }
        ));
      }
      ,
      s.prototype.validateNativeResponse = function (e) {
        if (e.hasOwnProperty('access_token') && e.hasOwnProperty('id_token') && e.hasOwnProperty('client_info') && e.hasOwnProperty('account') && e.hasOwnProperty('scope') && e.hasOwnProperty('expires_in')) return e;
        throw ir.createUnexpectedError('Response missing expected properties.');
      }
      ,
      s.prototype.getMATSFromResponse = function (e) {
        if (e.properties.MATS) {
          try {
            return JSON.parse(e.properties.MATS);
          } catch (e) {
            this.logger.error('NativeInteractionClient - Error parsing MATS telemetry, returning null instead');
          }
        }
        return null;
      }
      ,
      s.prototype.isResponseFromCache = function (e) {
        return void 0 === e.is_cached ? (this.logger.verbose('NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.'),
        !1) : !!e.is_cached;
      }
      ,
      s.prototype.initializeNativeRequest = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let i; let s; let c; let u; let l; let d; let h; let p; const
            g = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return this.logger.trace('NativeInteractionClient - initializeNativeRequest called'),
                r = t.authority || this.config.auth.authority,
                (i = new ze(r)).validateAsUri(),
                s = t.scopes,
                c = o(t, ['scopes']),
                (u = new he(s || [])).appendScopes(_),
                l = function () {
                  switch (g.apiId) {
                    case e.ApiId.ssoSilent:
                    case e.ApiId.acquireTokenSilent_silentFlow:
                      return g.logger.trace('initializeNativeRequest: silent request sets prompt to none'),
                      w.NONE;
                  }
                  if (t.prompt) {
                    switch (t.prompt) {
                      case w.NONE:
                      case w.CONSENT:
                      case w.LOGIN:
                        return g.logger.trace('initializeNativeRequest: prompt is compatible with native flow'),
                        t.prompt;
                      default:
                        throw g.logger.trace(`initializeNativeRequest: prompt = ${t.prompt} is not compatible with native flow`),
                        kt.createNativePromptParameterNotSupportedError();
                    }
                  } else g.logger.trace('initializeNativeRequest: prompt was not provided');
                }
                ,
                d = {
                  ...c,
                  accountId: this.accountId,
                  clientId: this.config.auth.clientId,
                  authority: i.urlString,
                  scope: u.printScopes(),
                  redirectUri: this.getRedirectUri(t.redirectUri),
                  prompt: l(),
                  correlationId: this.correlationId,
                  tokenType: t.authenticationScheme,
                  windowTitleSubstring: document.title,
                  extraParameters: { ...t.extraQueryParameters, ...t.tokenQueryParameters, telemetry: Mt },
                  extendedExpiryToken: !1, 
  },
                t.authenticationScheme !== e.AuthenticationScheme.POP ? [3, 2] : (h = {
                  resourceRequestUri: t.resourceRequestUri,
                  resourceRequestMethod: t.resourceRequestMethod,
                  shrClaims: t.shrClaims,
                  shrNonce: t.shrNonce,
                },
                [4, new We(this.browserCrypto).generateCnf(h)]);
              case 1:
                p = a.sent(),
                d.reqCnf = p.reqCnfHash,
                d.keyId = p.kid,
                a.label = 2;
              case 2:
                return [2, d];
            }
          }
          ));
        }
        ));
      }
      ,
      s;
    }(Zt));
    const cr = (function () {
      function t(e, t, r) {
        this.logger = e,
        this.handshakeTimeoutMs = t,
        this.extensionId = r,
        this.resolvers = new Map(),
        this.handshakeResolvers = new Map(),
        this.responseId = 0,
        this.messageChannel = new MessageChannel(),
        this.windowListener = this.onWindowMessage.bind(this);
      }
      return t.prototype.sendMessage = function (e) {
        return i(this, void 0, void 0, (function () {
          let t; const
            r = this;
          return a(this, (function (n) {
            return this.logger.trace('NativeMessageHandler - sendMessage called.'),
            t = {
              channel: Pt,
              extensionId: this.extensionId,
              responseId: this.responseId++,
              body: e,
            },
            this.logger.trace('NativeMessageHandler - Sending request to browser extension'),
            this.logger.tracePii(`NativeMessageHandler - Sending request to browser extension: ${JSON.stringify(t)}`),
            this.messageChannel.port1.postMessage(t),
            [2, new Promise(((e, n) => {
              r.resolvers.set(t.responseId, {
                resolve: e,
                reject: n,
              });
            }
            ))];
          }
          ));
        }
        ));
      }
      ,
      t.createProvider = function (e, r) {
        return i(this, void 0, void 0, (function () {
          let n; let
            o;
          return a(this, ((i) => {
            switch (i.label) {
              case 0:
                e.trace('NativeMessageHandler - createProvider called.'),
                i.label = 1;
              case 1:
                return i.trys.push([1, 3, , 5]),
                [4, (n = new t(e, r, Ot)).sendHandshakeRequest()];
              case 2:
                return i.sent(),
                [2, n];
              case 3:
                return i.sent(),
                [4, (o = new t(e, r)).sendHandshakeRequest()];
              case 4:
                return i.sent(),
                [2, o];
              case 5:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.sendHandshakeRequest = function () {
        return i(this, void 0, void 0, (function () {
          let e; const
            t = this;
          return a(this, (function (r) {
            return this.logger.trace('NativeMessageHandler - sendHandshakeRequest called.'),
            window.addEventListener('message', this.windowListener, !1),
            e = {
              channel: Pt,
              extensionId: this.extensionId,
              responseId: this.responseId++,
              body: {
                method: it.HandshakeRequest,
              },
            },
            this.messageChannel.port1.onmessage = function (e) {
              t.onChannelMessage(e);
            }
            ,
            window.postMessage(e, window.origin, [this.messageChannel.port2]),
            [2, new Promise(((r, n) => {
              t.handshakeResolvers.set(e.responseId, {
                resolve: r,
                reject: n,
              }),
              t.timeoutId = window.setTimeout(
                (() => {
                  window.removeEventListener('message', t.windowListener, !1),
                  t.messageChannel.port1.close(),
                  t.messageChannel.port2.close(),
                  n(kt.createNativeHandshakeTimeoutError()),
                  t.handshakeResolvers.delete(e.responseId);
                }
                ), t.handshakeTimeoutMs,
              );
            }
            ))];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.onWindowMessage = function (e) {
        if (this.logger.trace('NativeMessageHandler - onWindowMessage called'),
        e.source === window) {
          const t = e.data;
          if (t.channel && t.channel === Pt && (!t.extensionId || t.extensionId === this.extensionId) && t.body.method === it.HandshakeRequest) {
            this.logger.verbose(t.extensionId ? `Extension with id: ${t.extensionId} not installed` : 'No extension installed'),
            clearTimeout(this.timeoutId),
            this.messageChannel.port1.close(),
            this.messageChannel.port2.close(),
            window.removeEventListener('message', this.windowListener, !1);
            const r = this.handshakeResolvers.get(t.responseId);
            r && r.reject(kt.createNativeExtensionNotInstalledError());
          }
        }
      }
      ,
      t.prototype.onChannelMessage = function (e) {
        this.logger.trace('NativeMessageHandler - onChannelMessage called.');
        const t = e.data;
        const r = this.resolvers.get(t.responseId);
        const n = this.handshakeResolvers.get(t.responseId);
        try {
          const o = t.body.method;
          if (o === it.Response) {
            if (!r) return;
            const i = t.body.response;
            if (this.logger.trace('NativeMessageHandler - Received response from browser extension'),
            this.logger.tracePii(`NativeMessageHandler - Received response from browser extension: ${JSON.stringify(i)}`),
            i.status !== 'Success') r.reject(ir.createError(i.code, i.description, i.ext));
            else {
              if (!i.result) throw ee.createUnexpectedError('Event does not contain result.');
              i.result.code && i.result.description ? r.reject(ir.createError(i.result.code, i.result.description, i.result.ext)) : r.resolve(i.result);
            }
            this.resolvers.delete(t.responseId);
          } else if (o === it.HandshakeResponse) {
            if (!n) return;
            clearTimeout(this.timeoutId),
            window.removeEventListener('message', this.windowListener, !1),
            this.extensionId = t.extensionId,
            this.extensionVersion = t.body.version,
            this.logger.verbose(`NativeMessageHandler - Received HandshakeResponse from extension: ${this.extensionId}`),
            n.resolve(),
            this.handshakeResolvers.delete(t.responseId);
          }
        } catch (t) {
          this.logger.error('Error parsing response from WAM Extension'),
          this.logger.errorPii(`Error parsing response from WAM Extension: ${t.toString()}`),
          this.logger.errorPii(`Unable to parse ${e}`),
          r ? r.reject(t) : n && n.reject(t);
        }
      }
      ,
      t.prototype.getExtensionId = function () {
        return this.extensionId;
      }
      ,
      t.prototype.getExtensionVersion = function () {
        return this.extensionVersion;
      }
      ,
      t.isNativeAvailable = function (t, r, n, o) {
        if (r.trace('isNativeAvailable called'),
        !t.system.allowNativeBroker) {
          return r.trace('isNativeAvailable: allowNativeBroker is not enabled, returning false'),
          !1;
        }
        if (!n) {
          return r.trace('isNativeAvailable: WAM extension provider is not initialized, returning false'),
          !1;
        }
        if (o) {
          switch (o) {
            case e.AuthenticationScheme.BEARER:
            case e.AuthenticationScheme.POP:
              return r.trace('isNativeAvailable: authenticationScheme is supported, returning true'),
              !0;
            default:
              return r.trace('isNativeAvailable: authenticationScheme is not supported, returning false'),
              !1;
          }
        }
        return !0;
      }
      ,
      t;
    }());
    const ur = (function (t) {
      function o(e, r, n, o, i, a, s, c, u, l) {
        const d = t.call(this, e, r, n, o, i, a, s, u, l) || this;
        return d.nativeStorage = c,
        d;
      }
      return r(o, t),
      o.prototype.acquireToken = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let c; let u; let l; let d; let h; const
            p = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return [4, this.initializeAuthorizationRequest(t, e.InteractionType.Redirect)];
              case 1:
                r = a.sent(),
                this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority, r.loginHint || C.EMPTY_STRING, r.account || null),
                o = this.initializeServerTelemetryManager(e.ApiId.acquireTokenRedirect),
                i = function (e) {
                  e.persisted && (p.logger.verbose('Page was restored from back/forward cache. Clearing temporary cache.'),
                  p.browserStorage.cleanRequestByState(r.state));
                }
                ,
                a.label = 2;
              case 2:
                return a.trys.push([2, 7, , 8]),
                [4, this.initializeAuthorizationCodeRequest(r)];
              case 3:
                return s = a.sent(),
                [4, this.createAuthCodeClient(o, r.authority, r.azureCloudOptions)];
              case 4:
                return c = a.sent(),
                this.logger.verbose('Auth code client created'),
                u = new tr(c, this.browserStorage, s, this.logger, this.browserCrypto),
                [4, c.getAuthCodeUrl({ ...r, nativeBroker: cr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) })];
              case 5:
                return l = a.sent(),
                d = this.getRedirectStartPage(t.redirectStartPage),
                this.logger.verbosePii(`Redirect start page: ${d}`),
                window.addEventListener('pageshow', i),
                [4, u.initiateAuthRequest(l, {
                  navigationClient: this.navigationClient,
                  redirectTimeout: this.config.system.redirectNavigationTimeout,
                  redirectStartPage: d,
                  onRedirectNavigate: t.onRedirectNavigate,
                })];
              case 6:
                return [2, a.sent()];
              case 7:
                throw (h = a.sent()) instanceof ee && h.setCorrelationId(this.correlationId),
                window.removeEventListener('pageshow', i),
                o.cacheFailedRequest(h),
                this.browserStorage.cleanRequestByState(r.state),
                h;
              case 8:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.handleRedirectPromise = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let s; let c; let u; let l; let d; let h; let p; let
            g;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                r = this.initializeServerTelemetryManager(e.ApiId.handleRedirectPromise),
                a.label = 1;
              case 1:
                if (a.trys.push([1, 10, , 11]),
                !this.browserStorage.isInteractionInProgress(!0)) {
                  return this.logger.info('handleRedirectPromise called but there is no interaction in progress, returning null.'),
                  [2, null];
                }
                if (!(n = this.getRedirectResponseHash(t || window.location.hash))) {
                  return this.logger.info('handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache.'),
                  this.browserStorage.cleanRequestByInteractionType(e.InteractionType.Redirect),
                  [2, null];
                }
                o = void 0;
                try {
                  i = ze.getDeserializedHash(n),
                  o = this.validateAndExtractStateFromHash(i, e.InteractionType.Redirect),
                  this.logger.verbose('State extracted from hash');
                } catch (t) {
                  return this.logger.info(`handleRedirectPromise was unable to extract state due to: ${t}`),
                  this.browserStorage.cleanRequestByInteractionType(e.InteractionType.Redirect),
                  [2, null];
                }
                return s = this.browserStorage.getTemporaryCache(ct.ORIGIN_URI, !0) || C.EMPTY_STRING,
                c = ze.removeHashFromUrl(s),
                u = ze.removeHashFromUrl(window.location.href),
                c === u && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose('Current page is loginRequestUrl, handling hash'),
                [4, this.handleHash(n, o, r)]) : [3, 3];
              case 2:
                return l = a.sent(),
                s.indexOf('#') > -1 && Xt.replaceHash(s),
                [2, l];
              case 3:
                return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose('NavigateToLoginRequestUrl set to false, handling hash'),
                [2, this.handleHash(n, o, r)]);
              case 4:
                return Xt.isInIframe() && !this.config.system.allowRedirectInIframe ? [3, 9] : (this.browserStorage.setTemporaryCache(ct.URL_HASH, n, !0),
                d = {
                  apiId: e.ApiId.handleRedirectPromise,
                  timeout: this.config.system.redirectNavigationTimeout,
                  noHistory: !0,
                },
                h = !0,
                s && s !== 'null' ? [3, 6] : (p = Xt.getHomepage(),
                this.browserStorage.setTemporaryCache(ct.ORIGIN_URI, p, !0),
                this.logger.warning('Unable to get valid login request url from cache, redirecting to home page'),
                [4, this.navigationClient.navigateInternal(p, d)]));
              case 5:
                return h = a.sent(),
                [3, 8];
              case 6:
                return this.logger.verbose(`Navigating to loginRequestUrl: ${s}`),
                [4, this.navigationClient.navigateInternal(s, d)];
              case 7:
                h = a.sent(),
                a.label = 8;
              case 8:
                if (!h) return [2, this.handleHash(n, o, r)];
                a.label = 9;
              case 9:
                return [2, null];
              case 10:
                throw (g = a.sent()) instanceof ee && g.setCorrelationId(this.correlationId),
                r.cacheFailedRequest(g),
                this.browserStorage.cleanRequestByInteractionType(e.InteractionType.Redirect),
                g;
              case 11:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.getRedirectResponseHash = function (e) {
        if (this.logger.verbose('getRedirectResponseHash called'),
        ze.hashContainsKnownProperties(e)) {
          return Xt.clearHash(window),
          this.logger.verbose('Hash contains known properties, returning response hash'),
          e;
        }
        const t = this.browserStorage.getTemporaryCache(ct.URL_HASH, !0);
        return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(ct.URL_HASH)),
        this.logger.verbose('Hash does not contain known properties, returning cached hash'),
        t;
      }
      ,
      o.prototype.handleHash = function (t, r, o) {
        return i(this, void 0, void 0, (function () {
          let i; let s; let c; let u; let l; let d; const
            h = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (i = this.browserStorage.getCachedRequest(r, this.browserCrypto),
                this.logger.verbose('handleHash called, retrieved cached request'),
                (s = ze.getDeserializedHash(t)).accountId) {
                  if (this.logger.verbose('Account id found in hash, calling WAM for token'),
                  !this.nativeMessageHandler) throw kt.createNativeConnectionNotEstablishedError();
                  return c = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e.ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.browserStorage, i.correlationId),
                  u = Ge.parseRequestState(this.browserCrypto, r).userRequestState,
                  [2, c.acquireToken({
                    ...i,
                    state: u,
                    prompt: void 0, 
  }).finally((() => {
                    h.browserStorage.cleanRequestByState(r);
                  }
                  ))];
                }
                if (!(l = this.browserStorage.getCachedAuthority(r))) throw kt.createNoCachedAuthorityError();
                return [4, this.createAuthCodeClient(o, l)];
              case 1:
                return d = a.sent(),
                this.logger.verbose('Auth code client created'),
                Re.removeThrottle(this.browserStorage, this.config.auth.clientId, i),
                [4, new tr(d, this.browserStorage, i, this.logger, this.browserCrypto).handleCodeResponseFromHash(t, r, d.authority, this.networkClient)];
              case 2:
                return [2, a.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.logout = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let s; let
            c;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                this.logger.verbose('logoutRedirect called'),
                r = this.initializeLogoutRequest(t),
                n = this.initializeServerTelemetryManager(e.ApiId.logout),
                a.label = 1;
              case 1:
                return a.trys.push([1, 10, , 11]),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_START, e.InteractionType.Redirect, t),
                [4, this.clearCacheOnLogout(r.account)];
              case 2:
                return a.sent(),
                o = {
                  apiId: e.ApiId.logout,
                  timeout: this.config.system.redirectNavigationTimeout,
                  noHistory: !1,
                },
                [4, this.createAuthCodeClient(n, t && t.authority)];
              case 3:
                return i = a.sent(),
                this.logger.verbose('Auth code client created'),
                s = i.getLogoutUri(r),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_SUCCESS, e.InteractionType.Redirect, r),
                t && typeof t.onRedirectNavigate === 'function' ? !1 === t.onRedirectNavigate(s) ? [3, 5] : (this.logger.verbose('Logout onRedirectNavigate did not return false, navigating'),
                this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0),
                [4, this.navigationClient.navigateExternal(s, o)]) : [3, 7];
              case 4:
                return a.sent(),
                [2];
              case 5:
                this.browserStorage.setInteractionInProgress(!1),
                this.logger.verbose('Logout onRedirectNavigate returned false, stopping navigation'),
                a.label = 6;
              case 6:
                return [3, 9];
              case 7:
                return this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0),
                [4, this.navigationClient.navigateExternal(s, o)];
              case 8:
                return a.sent(),
                [2];
              case 9:
                return [3, 11];
              case 10:
                throw (c = a.sent()) instanceof ee && c.setCorrelationId(this.correlationId),
                n.cacheFailedRequest(c),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_FAILURE, e.InteractionType.Redirect, null, c),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_END, e.InteractionType.Redirect),
                c;
              case 11:
                return this.eventHandler.emitEvent(e.EventType.LOGOUT_END, e.InteractionType.Redirect),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.getRedirectStartPage = function (e) {
        const t = e || window.location.href;
        return ze.getAbsoluteUrl(t, Xt.getCurrentUri());
      }
      ,
      o;
    }($t));
    const lr = (function (t) {
      function o(e, r, n, o, i, a, s, c, u, l) {
        const d = t.call(this, e, r, n, o, i, a, s, u, l) || this;
        return d.unloadWindow = d.unloadWindow.bind(d),
        d.nativeStorage = c,
        d;
      }
      return r(o, t),
      o.prototype.acquireToken = function (e) {
        try {
          const t = this.generatePopupName(e.scopes || _, e.authority || this.config.auth.authority);
          const r = e.popupWindowAttributes || {};
          if (this.config.system.asyncPopups) {
            return this.logger.verbose('asyncPopups set to true, acquiring token'),
            this.acquireTokenPopupAsync(e, t, r);
          }
          this.logger.verbose('asyncPopup set to false, opening popup before acquiring token');
          const n = this.openSizedPopup('about:blank', t, r);
          return this.acquireTokenPopupAsync(e, t, r, n);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      ,
      o.prototype.logout = function (e) {
        try {
          this.logger.verbose('logoutPopup called');
          const t = this.initializeLogoutRequest(e);
          const r = this.generateLogoutPopupName(t);
          const n = e && e.authority;
          const o = e && e.mainWindowRedirectUri;
          const i = (e == null ? void 0 : e.popupWindowAttributes) || {};
          if (this.config.system.asyncPopups) {
            return this.logger.verbose('asyncPopups set to true'),
            this.logoutPopupAsync(t, r, i, n, void 0, o);
          }
          this.logger.verbose('asyncPopup set to false, opening popup');
          const a = this.openSizedPopup('about:blank', r, i);
          return this.logoutPopupAsync(t, r, i, n, a, o);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      ,
      o.prototype.acquireTokenPopupAsync = function (t, r, o, s) {
        return i(this, void 0, void 0, (function () {
          let i; let c; let u; let l; let d; let h; let p; let g; let f; let m; let v; let y; let E; let _; let T; let I; const
            w = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return this.logger.verbose('acquireTokenPopupAsync called'),
                i = this.initializeServerTelemetryManager(e.ApiId.acquireTokenPopup),
                [4, this.initializeAuthorizationRequest(t, e.InteractionType.Popup)];
              case 1:
                c = a.sent(),
                this.browserStorage.updateCacheEntries(c.state, c.nonce, c.authority, c.loginHint || C.EMPTY_STRING, c.account || null),
                a.label = 2;
              case 2:
                return a.trys.push([2, 8, , 9]),
                [4, this.initializeAuthorizationCodeRequest(c)];
              case 3:
                return u = a.sent(),
                [4, this.createAuthCodeClient(i, c.authority, c.azureCloudOptions)];
              case 4:
                return l = a.sent(),
                this.logger.verbose('Auth code client created'),
                d = cr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme),
                h = void 0,
                d && (h = this.performanceClient.startMeasurement(e.PerformanceEvents.FetchAccountIdWithNativeBroker, t.correlationId)),
                [4, l.getAuthCodeUrl({ ...c, nativeBroker: d })];
              case 5:
                return p = a.sent(),
                g = new er(l, this.browserStorage, u, this.logger),
                f = {
                  popup: s,
                  popupName: r,
                  popupWindowAttributes: o,
                },
                m = this.initiateAuthRequest(p, f),
                this.eventHandler.emitEvent(e.EventType.POPUP_OPENED, e.InteractionType.Popup, {
                  popupWindow: m,
                }, null),
                [4, this.monitorPopupForHash(m)];
              case 6:
                if (v = a.sent(),
                y = ze.getDeserializedHash(v),
                E = this.validateAndExtractStateFromHash(y, e.InteractionType.Popup, c.correlationId),
                Re.removeThrottle(this.browserStorage, this.config.auth.clientId, u),
                y.accountId) {
                  if (this.logger.verbose('Account id found in hash, calling WAM for token'),
                  h && h.endMeasurement({
                    success: !0,
                    isNativeBroker: !0,
                  }),
                  !this.nativeMessageHandler) throw kt.createNativeConnectionNotEstablishedError();
                  return _ = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e.ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, y.accountId, this.nativeStorage, c.correlationId),
                  T = Ge.parseRequestState(this.browserCrypto, E).userRequestState,
                  [2, _.acquireToken({
                    ...c,
                    state: T,
                    prompt: void 0, 
  }).finally((() => {
                    w.browserStorage.cleanRequestByState(E);
                  }
                  ))];
                }
                return [4, g.handleCodeResponseFromHash(v, E, l.authority, this.networkClient)];
              case 7:
                return [2, a.sent()];
              case 8:
                throw I = a.sent(),
                s && s.close(),
                I instanceof ee && I.setCorrelationId(this.correlationId),
                i.cacheFailedRequest(I),
                this.browserStorage.cleanRequestByState(c.state),
                I;
              case 9:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.logoutPopupAsync = function (t, r, n, o, s, c) {
        return i(this, void 0, void 0, (function () {
          let i; let u; let l; let d; let h; let p; let
            g;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                this.logger.verbose('logoutPopupAsync called'),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_START, e.InteractionType.Popup, t),
                i = this.initializeServerTelemetryManager(e.ApiId.logoutPopup),
                a.label = 1;
              case 1:
                return a.trys.push([1, 5, , 6]),
                [4, this.clearCacheOnLogout(t.account)];
              case 2:
                return a.sent(),
                [4, this.createAuthCodeClient(i, o)];
              case 3:
                return u = a.sent(),
                this.logger.verbose('Auth code client created'),
                l = u.getLogoutUri(t),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_SUCCESS, e.InteractionType.Popup, t),
                d = this.openPopup(l, {
                  popupName: r,
                  popupWindowAttributes: n,
                  popup: s,
                }),
                this.eventHandler.emitEvent(e.EventType.POPUP_OPENED, e.InteractionType.Popup, {
                  popupWindow: d,
                }, null),
                [4, this.waitForLogoutPopup(d)];
              case 4:
                return a.sent(),
                c ? (h = {
                  apiId: e.ApiId.logoutPopup,
                  timeout: this.config.system.redirectNavigationTimeout,
                  noHistory: !1,
                },
                p = ze.getAbsoluteUrl(c, Xt.getCurrentUri()),
                this.logger.verbose('Redirecting main window to url specified in the request'),
                this.logger.verbosePii(`Redirecting main window to: ${p}`),
                this.navigationClient.navigateInternal(p, h)) : this.logger.verbose('No main window navigation requested'),
                [3, 6];
              case 5:
                throw g = a.sent(),
                s && s.close(),
                g instanceof ee && g.setCorrelationId(this.correlationId),
                this.browserStorage.setInteractionInProgress(!1),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_FAILURE, e.InteractionType.Popup, null, g),
                this.eventHandler.emitEvent(e.EventType.LOGOUT_END, e.InteractionType.Popup),
                i.cacheFailedRequest(g),
                g;
              case 6:
                return this.eventHandler.emitEvent(e.EventType.LOGOUT_END, e.InteractionType.Popup),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.initiateAuthRequest = function (e, t) {
        if (oe.isEmpty(e)) {
          throw this.logger.error('Navigate url is empty'),
          kt.createEmptyNavigationUriError();
        }
        return this.logger.infoPii(`Navigate to: ${e}`),
        this.openPopup(e, t);
      }
      ,
      o.prototype.monitorPopupForHash = function (e) {
        const t = this;
        return new Promise(((r, n) => {
          const o = t.config.system.windowHashTimeout / t.config.system.pollIntervalMilliseconds;
          let i = 0;
          t.logger.verbose('PopupHandler.monitorPopupForHash - polling started');
          var a = setInterval(
            (() => {
              if (e.closed) {
                return t.logger.error('PopupHandler.monitorPopupForHash - window closed'),
                t.cleanPopup(),
                clearInterval(a),
                void n(kt.createUserCancelledError());
              }
              let s = C.EMPTY_STRING;
              let c = C.EMPTY_STRING;
              try {
                s = e.location.href,
                c = e.location.hash;
              } catch (e) {}
              oe.isEmpty(s) || s === 'about:blank' || (t.logger.verbose('PopupHandler.monitorPopupForHash - popup window is on same origin as caller'),
              i++,
              c ? (t.logger.verbose('PopupHandler.monitorPopupForHash - found hash in url'),
              clearInterval(a),
              t.cleanPopup(e),
              ze.hashContainsKnownProperties(c) ? (t.logger.verbose('PopupHandler.monitorPopupForHash - hash contains known properties, returning.'),
              r(c)) : (t.logger.error('PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely.'),
              t.logger.errorPii(`PopupHandler.monitorPopupForHash - hash found: ${c}`),
              n(kt.createHashDoesNotContainKnownPropertiesError()))) : i > o && (t.logger.error('PopupHandler.monitorPopupForHash - unable to find hash in url, timing out'),
              clearInterval(a),
              n(kt.createMonitorPopupTimeoutError())));
            }
            ), t.config.system.pollIntervalMilliseconds,
          );
        }
        ));
      }
      ,
      o.prototype.waitForLogoutPopup = function (e) {
        const t = this;
        return new Promise(((r) => {
          t.logger.verbose('PopupHandler.waitForLogoutPopup - polling started');
          var n = setInterval(
            (() => {
              e.closed && (t.logger.error('PopupHandler.waitForLogoutPopup - window closed'),
              t.cleanPopup(),
              clearInterval(n),
              r());
              let o = C.EMPTY_STRING;
              try {
                o = e.location.href;
              } catch (e) {}
              oe.isEmpty(o) || o === 'about:blank' || (t.logger.verbose('PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing.'),
              clearInterval(n),
              t.cleanPopup(e),
              r());
            }
            ), t.config.system.pollIntervalMilliseconds,
          );
        }
        ));
      }
      ,
      o.prototype.openPopup = function (e, t) {
        try {
          let r = void 0;
          if (t.popup ? (r = t.popup,
          this.logger.verbosePii(`Navigating popup window to: ${e}`),
          r.location.assign(e)) : void 0 === t.popup && (this.logger.verbosePii(`Opening popup window to: ${e}`),
          r = this.openSizedPopup(e, t.popupName, t.popupWindowAttributes)),
          !r) throw kt.createEmptyWindowCreatedError();
          return r.focus && r.focus(),
          this.currentWindow = r,
          window.addEventListener('beforeunload', this.unloadWindow),
          r;
        } catch (e) {
          throw this.logger.error(`error opening popup ${e.message}`),
          this.browserStorage.setInteractionInProgress(!1),
          kt.createPopupWindowError(e.toString());
        }
      }
      ,
      o.prototype.openSizedPopup = function (e, t, r) {
        let n; let o; let i; let a; const s = window.screenLeft ? window.screenLeft : window.screenX; const c = window.screenTop ? window.screenTop : window.screenY; const u = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; const l = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; let d = (n = r.popupSize) === null || void 0 === n ? void 0 : n.width; let h = (o = r.popupSize) === null || void 0 === o ? void 0 : o.height; let p = (i = r.popupPosition) === null || void 0 === i ? void 0 : i.top; let
          g = (a = r.popupPosition) === null || void 0 === a ? void 0 : a.left;
        return (!d || d < 0 || d > u) && (this.logger.verbose('Default popup window width used. Window width not configured or invalid.'),
        d = Nt.POPUP_WIDTH),
        (!h || h < 0 || h > l) && (this.logger.verbose('Default popup window height used. Window height not configured or invalid.'),
        h = Nt.POPUP_HEIGHT),
        (!p || p < 0 || p > l) && (this.logger.verbose('Default popup window top position used. Window top not configured or invalid.'),
        p = Math.max(0, l / 2 - Nt.POPUP_HEIGHT / 2 + c)),
        (!g || g < 0 || g > u) && (this.logger.verbose('Default popup window left position used. Window left not configured or invalid.'),
        g = Math.max(0, u / 2 - Nt.POPUP_WIDTH / 2 + s)),
        window.open(e, t, `width=${d}, height=${h}, top=${p}, left=${g}, scrollbars=yes`);
      }
      ,
      o.prototype.unloadWindow = function (t) {
        this.browserStorage.cleanRequestByInteractionType(e.InteractionType.Popup),
        this.currentWindow && this.currentWindow.close(),
        t.preventDefault();
      }
      ,
      o.prototype.cleanPopup = function (e) {
        e && e.close(),
        window.removeEventListener('beforeunload', this.unloadWindow),
        this.browserStorage.setInteractionInProgress(!1);
      }
      ,
      o.prototype.generatePopupName = function (e, t) {
        return `${Nt.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${e.join('-')}.${t}.${this.correlationId}`;
      }
      ,
      o.prototype.generateLogoutPopupName = function (e) {
        const t = e.account && e.account.homeAccountId;
        return `${Nt.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${t}.${this.correlationId}`;
      }
      ,
      o;
    }($t));
    const dr = (function () {
      function e() {}
      return e.prototype.navigateInternal = function (t, r) {
        return e.defaultNavigateWindow(t, r);
      }
      ,
      e.prototype.navigateExternal = function (t, r) {
        return e.defaultNavigateWindow(t, r);
      }
      ,
      e.defaultNavigateWindow = function (e, t) {
        return t.noHistory ? window.location.replace(e) : window.location.assign(e),
        new Promise(((e) => {
          setTimeout(
            (() => {
              e(!0);
            }
            ), t.timeout,
          );
        }
        ));
      }
      ,
      e;
    }());
    const hr = 6e3;
    let pr; const gr = (function (e) {
      function t(t, r, n, o, i) {
        const a = e.call(this, t, r, n, o) || this;
        return a.navigateFrameWait = i.navigateFrameWait,
        a.pollIntervalMilliseconds = i.pollIntervalMilliseconds,
        a;
      }
      return r(t, e),
      t.prototype.initiateAuthRequest = function (e) {
        return i(this, void 0, void 0, (function () {
          let t;
          return a(this, (function (r) {
            switch (r.label) {
              case 0:
                if (oe.isEmpty(e)) {
                  throw this.logger.info('Navigate url is empty'),
                  kt.createEmptyNavigationUriError();
                }
                return this.navigateFrameWait ? [4, this.loadFrame(e)] : [3, 2];
              case 1:
                return t = r.sent(),
                [3, 3];
              case 2:
                t = this.loadFrameSync(e),
                r.label = 3;
              case 3:
                return [2, t];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.monitorIframeForHash = function (e, t) {
        const r = this;
        return new Promise(((n, o) => {
          t < hr && r.logger.warning(`system.loadFrameTimeout or system.iframeHashTimeout set to lower (${t}ms) than the default (` + '6000ms). This may result in timeouts.');
          const i = window.performance.now() + t;
          var a = setInterval(
            (() => {
              if (window.performance.now() > i) {
                return r.removeHiddenIframe(e),
                clearInterval(a),
                void o(kt.createMonitorIframeTimeoutError());
              }
              let t = C.EMPTY_STRING;
              const s = e.contentWindow;
              try {
                t = s ? s.location.href : C.EMPTY_STRING;
              } catch (e) {}
              if (!oe.isEmpty(t)) {
                const c = s ? s.location.hash : C.EMPTY_STRING;
                return ze.hashContainsKnownProperties(c) ? (r.removeHiddenIframe(e),
                clearInterval(a),
                void n(c)) : void 0;
              }
            }
            ), r.pollIntervalMilliseconds,
          );
        }
        ));
      }
      ,
      t.prototype.loadFrame = function (e) {
        const t = this;
        return new Promise(((r, n) => {
          const o = t.createHiddenIframe();
          setTimeout(
            (() => {
              o ? (o.src = e,
              r(o)) : n('Unable to load iframe');
            }
            ), t.navigateFrameWait,
          );
        }
        ));
      }
      ,
      t.prototype.loadFrameSync = function (e) {
        const t = this.createHiddenIframe();
        return t.src = e,
        t;
      }
      ,
      t.prototype.createHiddenIframe = function () {
        const e = document.createElement('iframe');
        return e.style.visibility = 'hidden',
        e.style.position = 'absolute',
        e.style.width = e.style.height = '0',
        e.style.border = '0',
        e.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms'),
        document.getElementsByTagName('body')[0].appendChild(e),
        e;
      }
      ,
      t.prototype.removeHiddenIframe = function (e) {
        document.body === e.parentNode && document.body.removeChild(e);
      }
      ,
      t;
    }(er)); const fr = (function (t) {
      function o(e, r, n, o, i, a, s, c, u, l, d) {
        const h = t.call(this, e, r, n, o, i, a, c, l, d) || this;
        return h.apiId = s,
        h.nativeStorage = u,
        h;
      }
      return r(o, t),
      o.prototype.acquireToken = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let
            c;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (this.logger.verbose('acquireTokenByIframe called'),
                r = this.performanceClient.startMeasurement(e.PerformanceEvents.SilentIframeClientAcquireToken, t.correlationId),
                oe.isEmpty(t.loginHint) && oe.isEmpty(t.sid) && (!t.account || oe.isEmpty(t.account.username)) && this.logger.warning('No user hint provided. The authorization server may need more information to complete this request.'),
                t.prompt && t.prompt !== w.NONE && t.prompt !== w.NO_SESSION) {
                  throw r.endMeasurement({
                    success: !1,
                  }),
                  kt.createSilentPromptValueError(t.prompt);
                }
                return [4, this.initializeAuthorizationRequest({ ...t, prompt: t.prompt || w.NONE }, e.InteractionType.Silent)];
              case 1:
                o = a.sent(),
                this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || C.EMPTY_STRING, o.account || null),
                i = this.initializeServerTelemetryManager(this.apiId),
                a.label = 2;
              case 2:
                return a.trys.push([2, 5, , 6]),
                [4, this.createAuthCodeClient(i, o.authority, o.azureCloudOptions)];
              case 3:
                return s = a.sent(),
                this.logger.verbose('Auth code client created'),
                [4, this.silentTokenHelper(s, o).then(((e) => (r.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: e.requestId,
                }),
                e)
                ))];
              case 4:
                return [2, a.sent()];
              case 5:
                throw (c = a.sent()) instanceof ee && c.setCorrelationId(this.correlationId),
                i.cacheFailedRequest(c),
                this.browserStorage.cleanRequestByState(o.state),
                r.endMeasurement({
                  errorCode: c instanceof ee && c.errorCode || void 0,
                  subErrorCode: c instanceof ee && c.subError || void 0,
                  success: !1,
                }),
                c;
              case 6:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.logout = function () {
        return Promise.reject(kt.createSilentLogoutUnsupportedError());
      }
      ,
      o.prototype.silentTokenHelper = function (t, r) {
        return i(this, void 0, void 0, (function () {
          let o; let i; let s; let c; let u; let l; let d; let h; let p; const
            g = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return [4, this.initializeAuthorizationCodeRequest(r)];
              case 1:
                return o = a.sent(),
                [4, t.getAuthCodeUrl({ ...r, nativeBroker: cr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, r.authenticationScheme) })];
              case 2:
                return i = a.sent(),
                [4, (s = new gr(t, this.browserStorage, o, this.logger, this.config.system)).initiateAuthRequest(i)];
              case 3:
                return c = a.sent(),
                [4, s.monitorIframeForHash(c, this.config.system.iframeHashTimeout)];
              case 4:
                if (u = a.sent(),
                l = ze.getDeserializedHash(u),
                d = this.validateAndExtractStateFromHash(l, e.InteractionType.Silent, o.correlationId),
                l.accountId) {
                  if (this.logger.verbose('Account id found in hash, calling WAM for token'),
                  !this.nativeMessageHandler) throw kt.createNativeConnectionNotEstablishedError();
                  return h = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId),
                  p = Ge.parseRequestState(this.browserCrypto, d).userRequestState,
                  [2, h.acquireToken({
                    ...r,
                    state: p,
                    prompt: r.prompt || w.NONE, 
  }).finally((() => {
                    g.browserStorage.cleanRequestByState(d);
                  }
                  ))];
                }
                return [2, s.handleCodeResponseFromHash(u, d, t.authority, this.networkClient)];
            }
          }
          ));
        }
        ));
      }
      ,
      o;
    }($t)); const mr = (function (t) {
      function o() {
        return t !== null && t.apply(this, arguments) || this;
      }
      return r(o, t),
      o.prototype.acquireToken = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let c; const
            u = this;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return o = [{ ...t }],
                [4, this.initializeBaseRequest(t)];
              case 1:
                return r = n.apply(void 0, o.concat([a.sent()])),
                i = this.performanceClient.startMeasurement(e.PerformanceEvents.SilentRefreshClientAcquireToken, r.correlationId),
                s = this.initializeServerTelemetryManager(e.ApiId.acquireTokenSilent_silentFlow),
                [4, this.createRefreshTokenClient(s, r.authority, r.azureCloudOptions)];
              case 2:
                return c = a.sent(),
                this.logger.verbose('Refresh token client created'),
                [2, c.acquireTokenByRefreshToken(r).then(((e) => (i.endMeasurement({
                  success: !0,
                  fromCache: e.fromCache,
                  requestId: e.requestId,
                }),
                e)
                )).catch(((e) => {
                  throw e instanceof ee && e.setCorrelationId(u.correlationId),
                  s.cacheFailedRequest(e),
                  i.endMeasurement({
                    errorCode: e.errorCode,
                    subErrorCode: e.subError,
                    success: !1,
                  }),
                  e;
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.logout = function () {
        return Promise.reject(kt.createSilentLogoutUnsupportedError());
      }
      ,
      o.prototype.createRefreshTokenClient = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          let n;
          return a(this, (function (o) {
            switch (o.label) {
              case 0:
                return [4, this.getClientConfiguration(e, t, r)];
              case 1:
                return n = o.sent(),
                [2, new Ze(n, this.performanceClient)];
            }
          }
          ));
        }
        ));
      }
      ,
      o;
    }($t)); const vr = (function () {
      function t(e, t) {
        this.eventCallbacks = new Map(),
        this.logger = e,
        this.browserCrypto = t,
        this.listeningToStorageEvents = !1,
        this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
      }
      return t.prototype.addEventCallback = function (e) {
        if (typeof window !== 'undefined') {
          const t = this.browserCrypto.createNewGuid();
          return this.eventCallbacks.set(t, e),
          this.logger.verbose(`Event callback registered with id: ${t}`),
          t;
        }
        return null;
      }
      ,
      t.prototype.removeEventCallback = function (e) {
        this.eventCallbacks.delete(e),
        this.logger.verbose(`Event callback ${e} removed.`);
      }
      ,
      t.prototype.enableAccountStorageEvents = function () {
        typeof window !== 'undefined' && (this.listeningToStorageEvents ? this.logger.verbose('Account storage listener already registered.') : (this.logger.verbose('Adding account storage listener.'),
        this.listeningToStorageEvents = !0,
        window.addEventListener('storage', this.handleAccountCacheChange)));
      }
      ,
      t.prototype.disableAccountStorageEvents = function () {
        typeof window !== 'undefined' && (this.listeningToStorageEvents ? (this.logger.verbose('Removing account storage listener.'),
        window.removeEventListener('storage', this.handleAccountCacheChange),
        this.listeningToStorageEvents = !1) : this.logger.verbose('No account storage listener registered.'));
      }
      ,
      t.prototype.emitEvent = function (e, t, r, n) {
        const o = this;
        if (typeof window !== 'undefined') {
          const i = {
            eventType: e,
            interactionType: t || null,
            payload: r || null,
            error: n || null,
            timestamp: Date.now(),
          };
          this.logger.info(`Emitting event: ${e}`),
          this.eventCallbacks.forEach(((t, r) => {
            o.logger.verbose(`Emitting event to callback ${r}: ${e}`),
            t.apply(null, [i]);
          }
          ));
        }
      }
      ,
      t.prototype.handleAccountCacheChange = function (t) {
        try {
          const r = t.newValue || t.oldValue;
          if (!r) return;
          const n = JSON.parse(r);
          if (typeof n !== 'object' || !fe.isAccountEntity(n)) return;
          const o = ve.toObject(new fe(), n).getAccountInfo();
          !t.oldValue && t.newValue ? (this.logger.info('Account was added to cache in a different window'),
          this.emitEvent(e.EventType.ACCOUNT_ADDED, void 0, o)) : !t.newValue && t.oldValue && (this.logger.info('Account was removed from cache in a different window'),
          this.emitEvent(e.EventType.ACCOUNT_REMOVED, void 0, o));
        } catch (t) {
  
        }
      }
      ,
      t;
    }()); const yr = Object.freeze({
      __proto__: null,
      BrowserCacheManager: Yt,
      StandardInteractionClient: $t,
      RedirectClient: ur,
      PopupClient: lr,
      SilentIframeClient: fr,
      SilentCacheClient: ar,
      SilentRefreshClient: mr,
      RedirectHandler: tr,
      EventHandler: vr,
      NativeMessageHandler: cr,
      BrowserConstants: Nt,
      get TemporaryCacheKeys() {
        return ct;
      },
    }); const Er = (function () {
      function e() {}
      return e.decimalToHex = function (e) {
        for (var t = e.toString(16); t.length < 2;) t = `0${t}`;
        return t;
      }
      ,
      e;
    }()); const Cr = (function () {
      function e(e) {
        this.cryptoObj = e;
      }
      return e.prototype.generateGuid = function () {
        try {
          const e = new Uint8Array(16);
          return this.cryptoObj.getRandomValues(e),
          e[6] |= 64,
          e[6] &= 79,
          e[8] |= 128,
          e[8] &= 191,
          `${Er.decimalToHex(e[0]) + Er.decimalToHex(e[1]) + Er.decimalToHex(e[2]) + Er.decimalToHex(e[3])}-${Er.decimalToHex(e[4])}${Er.decimalToHex(e[5])}-${Er.decimalToHex(e[6])}${Er.decimalToHex(e[7])}-${Er.decimalToHex(e[8])}${Er.decimalToHex(e[9])}-${Er.decimalToHex(e[10])}${Er.decimalToHex(e[11])}${Er.decimalToHex(e[12])}${Er.decimalToHex(e[13])}${Er.decimalToHex(e[14])}${Er.decimalToHex(e[15])}`;
        } catch (e) {
          for (var t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', r = '0123456789abcdef', n = 0, o = C.EMPTY_STRING, i = 0; i < 36; i++) {
   t[i] !== '-' && t[i] !== '4' && (n = 16 * Math.random() | 0),
          t[i] === 'x' ? o += r[n] : t[i] === 'y' ? (n &= 3,
          o += r[n |= 8]) : o += t[i]; 
  }
          return o;
        }
      }
      ,
      e.prototype.isGuid = function (e) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
      }
      ,
      e;
    }()); const _r = (function () {
      function e() {}
      return e.stringToUtf8Arr = function (e) {
        for (var t, r = 0, n = e.length, o = 0; o < n; o++) r += (t = e.charCodeAt(o)) < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
        for (var i = new Uint8Array(r), a = 0, s = 0; a < r; s++) {
          (t = e.charCodeAt(s)) < 128 ? i[a++] = t : t < 2048 ? (i[a++] = 192 + (t >>> 6),
          i[a++] = 128 + (63 & t)) : t < 65536 ? (i[a++] = 224 + (t >>> 12),
          i[a++] = 128 + (t >>> 6 & 63),
          i[a++] = 128 + (63 & t)) : t < 2097152 ? (i[a++] = 240 + (t >>> 18),
          i[a++] = 128 + (t >>> 12 & 63),
          i[a++] = 128 + (t >>> 6 & 63),
          i[a++] = 128 + (63 & t)) : t < 67108864 ? (i[a++] = 248 + (t >>> 24),
          i[a++] = 128 + (t >>> 18 & 63),
          i[a++] = 128 + (t >>> 12 & 63),
          i[a++] = 128 + (t >>> 6 & 63),
          i[a++] = 128 + (63 & t)) : (i[a++] = 252 + (t >>> 30),
          i[a++] = 128 + (t >>> 24 & 63),
          i[a++] = 128 + (t >>> 18 & 63),
          i[a++] = 128 + (t >>> 12 & 63),
          i[a++] = 128 + (t >>> 6 & 63),
          i[a++] = 128 + (63 & t));
        }
        return i;
      }
      ,
      e.stringToArrayBuffer = function (e) {
        for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; n++) r[n] = e.charCodeAt(n);
        return t;
      }
      ,
      e.utf8ArrToString = function (e) {
        for (var t = C.EMPTY_STRING, r = void 0, n = e.length, o = 0; o < n; o++) {
          r = e[o],
          t += String.fromCharCode(r > 251 && r < 254 && o + 5 < n ? 1073741824 * (r - 252) + (e[++o] - 128 << 24) + (e[++o] - 128 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : r > 247 && r < 252 && o + 4 < n ? (r - 248 << 24) + (e[++o] - 128 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : r > 239 && r < 248 && o + 3 < n ? (r - 240 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : r > 223 && r < 240 && o + 2 < n ? (r - 224 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : r > 191 && r < 224 && o + 1 < n ? (r - 192 << 6) + e[++o] - 128 : r);
        }
        return t;
      }
      ,
      e.getSortedObjectString = function (e) {
        return JSON.stringify(e, Object.keys(e).sort());
      }
      ,
      e;
    }()); const Tr = (function () {
      function e() {}
      return e.prototype.urlEncode = function (e) {
        return encodeURIComponent(this.encode(e).replace(/=/g, C.EMPTY_STRING).replace(/\+/g, '-').replace(/\//g, '_'));
      }
      ,
      e.prototype.urlEncodeArr = function (e) {
        return this.base64EncArr(e).replace(/=/g, C.EMPTY_STRING).replace(/\+/g, '-').replace(/\//g, '_');
      }
      ,
      e.prototype.encode = function (e) {
        const t = _r.stringToUtf8Arr(e);
        return this.base64EncArr(t);
      }
      ,
      e.prototype.base64EncArr = function (e) {
        for (var t = (3 - e.length % 3) % 3, r = C.EMPTY_STRING, n = void 0, o = e.length, i = 0, a = 0; a < o; a++) {
          n = a % 3,
          i |= e[a] << (16 >>> n & 24),
          n !== 2 && e.length - a != 1 || (r += String.fromCharCode(this.uint6ToB64(i >>> 18 & 63), this.uint6ToB64(i >>> 12 & 63), this.uint6ToB64(i >>> 6 & 63), this.uint6ToB64(63 & i)),
          i = 0);
        }
        return t === 0 ? r : r.substring(0, r.length - t) + (t === 1 ? '=' : '==');
      }
      ,
      e.prototype.uint6ToB64 = function (e) {
        return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
      }
      ,
      e;
    }()); const Ir = (function () {
      function e() {}
      return e.prototype.decode = function (e) {
        let t = e.replace(/-/g, '+').replace(/_/g, '/');
        switch (t.length % 4) {
          case 0:
            break;
          case 2:
            t += '==';
            break;
          case 3:
            t += '=';
            break;
          default:
            throw new Error('Invalid base64 string');
        }
        const r = this.base64DecToArr(t);
        return _r.utf8ArrToString(r);
      }
      ,
      e.prototype.base64DecToArr = function (e, t) {
        for (var r = e.replace(/[^A-Za-z0-9\+\/]/g, C.EMPTY_STRING), n = r.length, o = t ? Math.ceil((3 * n + 1 >>> 2) / t) * t : 3 * n + 1 >>> 2, i = new Uint8Array(o), a = void 0, s = void 0, c = 0, u = 0, l = 0; l < n; l++) {
          if (s = 3 & l,
          c |= this.b64ToUint6(r.charCodeAt(l)) << 18 - 6 * s,
          s === 3 || n - l == 1) {
            for (a = 0; a < 3 && u < o; a++,
            u++) i[u] = c >>> (16 >>> a & 24) & 255;
            c = 0;
          }
        }
        return i;
      }
      ,
      e.prototype.b64ToUint6 = function (e) {
        return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : e === 43 ? 62 : e === 47 ? 63 : 0;
      }
      ,
      e;
    }()); const wr = (function () {
      function e(e) {
        this.base64Encode = new Tr(),
        this.cryptoObj = e;
      }
      return e.prototype.generateCodes = function () {
        return i(this, void 0, void 0, (function () {
          let e; let
            t;
          return a(this, (function (r) {
            switch (r.label) {
              case 0:
                return e = this.generateCodeVerifier(),
                [4, this.generateCodeChallengeFromVerifier(e)];
              case 1:
                return t = r.sent(),
                [2, {
                  verifier: e,
                  challenge: t,
                }];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.generateCodeVerifier = function () {
        try {
          const e = new Uint8Array(32);
          return this.cryptoObj.getRandomValues(e),
          this.base64Encode.urlEncodeArr(e);
        } catch (e) {
          throw kt.createPkceNotGeneratedError(e);
        }
      }
      ,
      e.prototype.generateCodeChallengeFromVerifier = function (e) {
        return i(this, void 0, void 0, (function () {
          let t; let
            r;
          return a(this, (function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]),
                [4, this.cryptoObj.sha256Digest(e)];
              case 1:
                return t = n.sent(),
                [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
              case 2:
                throw r = n.sent(),
                kt.createPkceNotGeneratedError(r);
              case 3:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e;
    }()); const Sr = (function () {
      function e() {}
      return e.prototype.getRandomValues = function (e) {
        return window.crypto.getRandomValues(e);
      }
      ,
      e.prototype.generateKey = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((n) => [2, window.crypto.subtle.generateKey(e, t, r)]
          ));
        }
        ));
      }
      ,
      e.prototype.exportKey = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((t) => [2, window.crypto.subtle.exportKey(Ht, e)]
          ));
        }
        ));
      }
      ,
      e.prototype.importKey = function (e, t, r, n) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((o) => [2, window.crypto.subtle.importKey(Ht, e, t, r, n)]
          ));
        }
        ));
      }
      ,
      e.prototype.sign = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((n) => [2, window.crypto.subtle.sign(e, t, r)]
          ));
        }
        ));
      }
      ,
      e.prototype.digest = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((r) => [2, window.crypto.subtle.digest(e, t)]
          ));
        }
        ));
      }
      ,
      e;
    }()); const Ar = (function () {
      function e() {}
      return e.prototype.initPrng = function (e) {
        return window.msrCrypto.initPrng(c(e));
      }
      ,
      e.prototype.getRandomValues = function (e) {
        return window.msrCrypto.getRandomValues(e);
      }
      ,
      e.prototype.generateKey = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((n) => [2, window.msrCrypto.subtle.generateKey(e, t, r)]
          ));
        }
        ));
      }
      ,
      e.prototype.exportKey = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((t) => [2, window.msrCrypto.subtle.exportKey(Ht, e)]
          ));
        }
        ));
      }
      ,
      e.prototype.importKey = function (e, t, r, n) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((o) => [2, window.msrCrypto.subtle.importKey(Ht, e, t, r, n)]
          ));
        }
        ));
      }
      ,
      e.prototype.sign = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((n) => [2, window.msrCrypto.subtle.sign(e, t, r)]
          ));
        }
        ));
      }
      ,
      e.prototype.digest = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((r) => [2, window.msrCrypto.subtle.digest(e, t)]
          ));
        }
        ));
      }
      ,
      e;
    }()); const br = (function () {
      function e() {}
      return e.prototype.getRandomValues = function (e) {
        return window.msCrypto.getRandomValues(e);
      }
      ,
      e.prototype.generateKey = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((n) => [2, new Promise(((n, o) => {
            const i = window.msCrypto.subtle.generateKey(e, t, r);
            i.addEventListener('complete', ((e) => {
              n(e.target.result);
            }
            )),
            i.addEventListener('error', ((e) => {
              o(e);
            }
            ));
          }
          ))]
          ));
        }
        ));
      }
      ,
      e.prototype.exportKey = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((t) => [2, new Promise(((t, r) => {
            const n = window.msCrypto.subtle.exportKey(Ht, e);
            n.addEventListener('complete', ((e) => {
              const n = e.target.result;
              const o = _r.utf8ArrToString(new Uint8Array(n)).replace(/\r/g, C.EMPTY_STRING).replace(/\n/g, C.EMPTY_STRING).replace(/\t/g, C.EMPTY_STRING)
                .split(' ')
                .join(C.EMPTY_STRING)
                .replace('\0', C.EMPTY_STRING);
              try {
                t(JSON.parse(o));
              } catch (e) {
                r(e);
              }
            }
            )),
            n.addEventListener('error', ((e) => {
              r(e);
            }
            ));
          }
          ))]
          ));
        }
        ));
      }
      ,
      e.prototype.importKey = function (e, t, r, n) {
        return i(this, void 0, void 0, (function () {
          let o; let
            i;
          return a(this, ((a) => (o = _r.getSortedObjectString(e),
          i = _r.stringToArrayBuffer(o),
          [2, new Promise(((e, o) => {
            const a = window.msCrypto.subtle.importKey(Ht, i, t, r, n);
            a.addEventListener('complete', ((t) => {
              e(t.target.result);
            }
            )),
            a.addEventListener('error', ((e) => {
              o(e);
            }
            ));
          }
          ))])
          ));
        }
        ));
      }
      ,
      e.prototype.sign = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((n) => [2, new Promise(((n, o) => {
            const i = window.msCrypto.subtle.sign(e, t, r);
            i.addEventListener('complete', ((e) => {
              n(e.target.result);
            }
            )),
            i.addEventListener('error', ((e) => {
              o(e);
            }
            ));
          }
          ))]
          ));
        }
        ));
      }
      ,
      e.prototype.digest = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((r) => [2, new Promise(((r, n) => {
            const o = window.msCrypto.subtle.digest(e, t.buffer);
            o.addEventListener('complete', ((e) => {
              r(e.target.result);
            }
            )),
            o.addEventListener('error', ((e) => {
              n(e);
            }
            ));
          }
          ))]
          ));
        }
        ));
      }
      ,
      e;
    }()); const Rr = 'SHA-256'; const kr = new Uint8Array([1, 0, 1]); const Nr = (function () {
      function e(e, t) {
        let r; let
          n;
        if (this.logger = e,
        this.cryptoOptions = t,
        this.hasBrowserCrypto()) {
          this.logger.verbose('BrowserCrypto: modern crypto interface available'),
          this.subtleCrypto = new Sr();
        } else if (this.hasIECrypto()) {
          this.logger.verbose('BrowserCrypto: MS crypto interface available'),
          this.subtleCrypto = new br();
        } else {
          if (!this.hasMsrCrypto() || !((r = this.cryptoOptions) === null || void 0 === r ? void 0 : r.useMsrCrypto)) {
            throw this.hasMsrCrypto() && this.logger.info('BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled'),
            this.logger.error('BrowserCrypto: No crypto interfaces available.'),
            kt.createCryptoNotAvailableError('Browser crypto, msCrypto, or msrCrypto interfaces not available.');
          }
          this.logger.verbose('BrowserCrypto: MSR crypto interface available'),
          this.subtleCrypto = new Ar();
        }
        if (this.subtleCrypto.initPrng) {
          if (this.logger.verbose('BrowserCrypto: Interface requires entropy'),
          !((n = this.cryptoOptions) === null || void 0 === n ? void 0 : n.entropy)) {
            throw this.logger.error('BrowserCrypto: Interface requires entropy but none provided.'),
            Bt.createEntropyNotProvided();
          }
          this.logger.verbose('BrowserCrypto: Entropy provided'),
          this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
        }
        this.keygenAlgorithmOptions = {
          name: 'RSASSA-PKCS1-v1_5',
          hash: Rr,
          modulusLength: 2048,
          publicExponent: kr,
        };
      }
      return e.prototype.hasIECrypto = function () {
        return 'msCrypto' in window;
      }
      ,
      e.prototype.hasBrowserCrypto = function () {
        return 'crypto' in window;
      }
      ,
      e.prototype.hasMsrCrypto = function () {
        return 'msrCrypto' in window;
      }
      ,
      e.prototype.sha256Digest = function (e) {
        return i(this, void 0, void 0, (function () {
          let t;
          return a(this, (function (r) {
            return t = _r.stringToUtf8Arr(e),
            [2, this.subtleCrypto.digest({
              name: Rr,
            }, t)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.getRandomValues = function (e) {
        return this.subtleCrypto.getRandomValues(e);
      }
      ,
      e.prototype.generateKeyPair = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (r) {
            return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, e, t)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.exportJwk = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (t) {
            return [2, this.subtleCrypto.exportKey(e)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.importJwk = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (n) {
            return [2, this.subtleCrypto.importKey(e, this.keygenAlgorithmOptions, t, r)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.sign = function (e, t) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (r) {
            return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, e, t)];
          }
          ));
        }
        ));
      }
      ,
      e;
    }()); const Pr = (function () {
      function e() {
        this.dbName = Dt,
        this.version = 1,
        this.tableName = 'msal.db.keys',
        this.dbOpen = !1;
      }
      return e.prototype.open = function () {
        return i(this, void 0, void 0, (function () {
          const e = this;
          return a(this, ((t) => [2, new Promise(((t, r) => {
            const n = window.indexedDB.open(e.dbName, e.version);
            n.addEventListener('upgradeneeded', ((t) => {
              t.target.result.createObjectStore(e.tableName);
            }
            )),
            n.addEventListener('success', ((r) => {
              const n = r;
              e.db = n.target.result,
              e.dbOpen = !0,
              t();
            }
            )),
            n.addEventListener('error', (() => r(kt.createDatabaseUnavailableError())
            ));
          }
          ))]
          ));
        }
        ));
      }
      ,
      e.prototype.closeConnection = function () {
        const e = this.db;
        e && this.dbOpen && (e.close(),
        this.dbOpen = !1);
      }
      ,
      e.prototype.validateDbIsOpen = function () {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (e) {
            switch (e.label) {
              case 0:
                return this.dbOpen ? [3, 2] : [4, this.open()];
              case 1:
                return [2, e.sent()];
              case 2:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.getItem = function (e) {
        return i(this, void 0, void 0, (function () {
          const t = this;
          return a(this, (function (r) {
            switch (r.label) {
              case 0:
                return [4, this.validateDbIsOpen()];
              case 1:
                return r.sent(),
                [2, new Promise(((r, n) => {
                  if (!t.db) return n(kt.createDatabaseNotOpenError());
                  const o = t.db.transaction([t.tableName], 'readonly').objectStore(t.tableName).get(e);
                  o.addEventListener('success', ((e) => {
                    const n = e;
                    t.closeConnection(),
                    r(n.target.result);
                  }
                  )),
                  o.addEventListener('error', ((e) => {
                    t.closeConnection(),
                    n(e);
                  }
                  ));
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.setItem = function (e, t) {
        return i(this, void 0, void 0, (function () {
          const r = this;
          return a(this, (function (n) {
            switch (n.label) {
              case 0:
                return [4, this.validateDbIsOpen()];
              case 1:
                return n.sent(),
                [2, new Promise(((n, o) => {
                  if (!r.db) return o(kt.createDatabaseNotOpenError());
                  const i = r.db.transaction([r.tableName], 'readwrite').objectStore(r.tableName).put(t, e);
                  i.addEventListener('success', (() => {
                    r.closeConnection(),
                    n();
                  }
                  )),
                  i.addEventListener('error', ((e) => {
                    r.closeConnection(),
                    o(e);
                  }
                  ));
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.removeItem = function (e) {
        return i(this, void 0, void 0, (function () {
          const t = this;
          return a(this, (function (r) {
            switch (r.label) {
              case 0:
                return [4, this.validateDbIsOpen()];
              case 1:
                return r.sent(),
                [2, new Promise(((r, n) => {
                  if (!t.db) return n(kt.createDatabaseNotOpenError());
                  const o = t.db.transaction([t.tableName], 'readwrite').objectStore(t.tableName).delete(e);
                  o.addEventListener('success', (() => {
                    t.closeConnection(),
                    r();
                  }
                  )),
                  o.addEventListener('error', ((e) => {
                    t.closeConnection(),
                    n(e);
                  }
                  ));
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.getKeys = function () {
        return i(this, void 0, void 0, (function () {
          const e = this;
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                return [4, this.validateDbIsOpen()];
              case 1:
                return t.sent(),
                [2, new Promise(((t, r) => {
                  if (!e.db) return r(kt.createDatabaseNotOpenError());
                  const n = e.db.transaction([e.tableName], 'readonly').objectStore(e.tableName).getAllKeys();
                  n.addEventListener('success', ((r) => {
                    const n = r;
                    e.closeConnection(),
                    t(n.target.result);
                  }
                  )),
                  n.addEventListener('error', ((t) => {
                    e.closeConnection(),
                    r(t);
                  }
                  ));
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.containsKey = function (e) {
        return i(this, void 0, void 0, (function () {
          const t = this;
          return a(this, (function (r) {
            switch (r.label) {
              case 0:
                return [4, this.validateDbIsOpen()];
              case 1:
                return r.sent(),
                [2, new Promise(((r, n) => {
                  if (!t.db) return n(kt.createDatabaseNotOpenError());
                  const o = t.db.transaction([t.tableName], 'readonly').objectStore(t.tableName).count(e);
                  o.addEventListener('success', ((e) => {
                    const n = e;
                    t.closeConnection(),
                    r(n.target.result === 1);
                  }
                  )),
                  o.addEventListener('error', ((e) => {
                    t.closeConnection(),
                    n(e);
                  }
                  ));
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.deleteDatabase = function () {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (e) {
            return this.db && this.dbOpen && this.closeConnection(),
            [2, new Promise(((e, t) => {
              const r = window.indexedDB.deleteDatabase(Dt);
              r.addEventListener('success', (() => e(!0)
              )),
              r.addEventListener('blocked', (() => e(!0)
              )),
              r.addEventListener('error', (() => t(!1)
              ));
            }
            ))];
          }
          ));
        }
        ));
      }
      ,
      e;
    }()); const
      Or = (function () {
        function e(e, t) {
          this.inMemoryCache = new zt(),
          this.indexedDBCache = new Pr(),
          this.logger = e,
          this.storeName = t;
        }
        return e.prototype.handleDatabaseAccessError = function (e) {
          if (!(e instanceof kt && e.errorCode === Rt.databaseUnavailable.code)) throw e;
          this.logger.error('Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.');
        }
        ,
        e.prototype.getItem = function (e) {
          return i(this, void 0, void 0, (function () {
            let t; let
              r;
            return a(this, (function (n) {
              switch (n.label) {
                case 0:
                  if (t = this.inMemoryCache.getItem(e)) return [3, 4];
                  n.label = 1;
                case 1:
                  return n.trys.push([1, 3, , 4]),
                  this.logger.verbose('Queried item not found in in-memory cache, now querying persistent storage.'),
                  [4, this.indexedDBCache.getItem(e)];
                case 2:
                  return [2, n.sent()];
                case 3:
                  return r = n.sent(),
                  this.handleDatabaseAccessError(r),
                  [3, 4];
                case 4:
                  return [2, t];
              }
            }
            ));
          }
          ));
        }
        ,
        e.prototype.setItem = function (e, t) {
          return i(this, void 0, void 0, (function () {
            let r;
            return a(this, (function (n) {
              switch (n.label) {
                case 0:
                  this.inMemoryCache.setItem(e, t),
                  n.label = 1;
                case 1:
                  return n.trys.push([1, 3, , 4]),
                  [4, this.indexedDBCache.setItem(e, t)];
                case 2:
                  return n.sent(),
                  [3, 4];
                case 3:
                  return r = n.sent(),
                  this.handleDatabaseAccessError(r),
                  [3, 4];
                case 4:
                  return [2];
              }
            }
            ));
          }
          ));
        }
        ,
        e.prototype.removeItem = function (e) {
          return i(this, void 0, void 0, (function () {
            let t;
            return a(this, (function (r) {
              switch (r.label) {
                case 0:
                  this.inMemoryCache.removeItem(e),
                  r.label = 1;
                case 1:
                  return r.trys.push([1, 3, , 4]),
                  [4, this.indexedDBCache.removeItem(e)];
                case 2:
                  return r.sent(),
                  [3, 4];
                case 3:
                  return t = r.sent(),
                  this.handleDatabaseAccessError(t),
                  [3, 4];
                case 4:
                  return [2];
              }
            }
            ));
          }
          ));
        }
        ,
        e.prototype.getKeys = function () {
          return i(this, void 0, void 0, (function () {
            let e; let
              t;
            return a(this, (function (r) {
              switch (r.label) {
                case 0:
                  if ((e = this.inMemoryCache.getKeys()).length !== 0) return [3, 4];
                  r.label = 1;
                case 1:
                  return r.trys.push([1, 3, , 4]),
                  this.logger.verbose('In-memory cache is empty, now querying persistent storage.'),
                  [4, this.indexedDBCache.getKeys()];
                case 2:
                  return [2, r.sent()];
                case 3:
                  return t = r.sent(),
                  this.handleDatabaseAccessError(t),
                  [3, 4];
                case 4:
                  return [2, e];
              }
            }
            ));
          }
          ));
        }
        ,
        e.prototype.containsKey = function (e) {
          return i(this, void 0, void 0, (function () {
            let t; let
              r;
            return a(this, (function (n) {
              switch (n.label) {
                case 0:
                  if (t = this.inMemoryCache.containsKey(e)) return [3, 4];
                  n.label = 1;
                case 1:
                  return n.trys.push([1, 3, , 4]),
                  this.logger.verbose('Key not found in in-memory cache, now querying persistent storage.'),
                  [4, this.indexedDBCache.containsKey(e)];
                case 2:
                  return [2, n.sent()];
                case 3:
                  return r = n.sent(),
                  this.handleDatabaseAccessError(r),
                  [3, 4];
                case 4:
                  return [2, t];
              }
            }
            ));
          }
          ));
        }
        ,
        e.prototype.clearInMemory = function () {
          this.logger.verbose(`Deleting in-memory keystore ${this.storeName}`),
          this.inMemoryCache.clear(),
          this.logger.verbose(`In-memory keystore ${this.storeName} deleted`);
        }
        ,
        e.prototype.clearPersistent = function () {
          return i(this, void 0, void 0, (function () {
            let e; let
              t;
            return a(this, (function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 2, , 3]),
                  this.logger.verbose('Deleting persistent keystore'),
                  [4, this.indexedDBCache.deleteDatabase()];
                case 1:
                  return (e = r.sent()) && this.logger.verbose('Persistent keystore deleted'),
                  [2, e];
                case 2:
                  return t = r.sent(),
                  this.handleDatabaseAccessError(t),
                  [2, !1];
                case 3:
                  return [2];
              }
            }
            ));
          }
          ));
        }
        ,
        e;
      }());
    !(function (e) {
      e.asymmetricKeys = 'asymmetricKeys',
      e.symmetricKeys = 'symmetricKeys';
    }(pr || (pr = {})));
    const Mr = (function () {
      function e(e) {
        this.logger = e,
        this.asymmetricKeys = new Or(this.logger, pr.asymmetricKeys),
        this.symmetricKeys = new Or(this.logger, pr.symmetricKeys);
      }
      return e.prototype.clear = function () {
        return i(this, void 0, void 0, (function () {
          let e;
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                this.asymmetricKeys.clearInMemory(),
                this.symmetricKeys.clearInMemory(),
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]),
                [4, this.asymmetricKeys.clearPersistent()];
              case 2:
                return t.sent(),
                [2, !0];
              case 3:
                return (e = t.sent()) instanceof Error ? this.logger.error(`Clearing keystore failed with error: ${e.message}`) : this.logger.error('Clearing keystore failed with unknown error'),
                [2, !1];
              case 4:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      e;
    }());
    const Ur = (function () {
      function t(e, t, r) {
        this.logger = e,
        this.browserCrypto = new Nr(this.logger, r),
        this.b64Encode = new Tr(),
        this.b64Decode = new Ir(),
        this.guidGenerator = new Cr(this.browserCrypto),
        this.pkceGenerator = new wr(this.browserCrypto),
        this.cache = new Mr(this.logger),
        this.performanceClient = t;
      }
      return t.prototype.createNewGuid = function () {
        return this.guidGenerator.generateGuid();
      }
      ,
      t.prototype.base64Encode = function (e) {
        return this.b64Encode.encode(e);
      }
      ,
      t.prototype.base64Decode = function (e) {
        return this.b64Decode.decode(e);
      }
      ,
      t.prototype.generatePkceCodes = function () {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (e) {
            return [2, this.pkceGenerator.generateCodes()];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.getPublicKeyThumbprint = function (r) {
        let n;
        return i(this, void 0, void 0, (function () {
          let o; let i; let s; let c; let u; let l; let d; let
            h;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return o = (n = this.performanceClient) === null || void 0 === n ? void 0 : n.startMeasurement(e.PerformanceEvents.CryptoOptsGetPublicKeyThumbprint, r.correlationId),
                [4, this.browserCrypto.generateKeyPair(t.EXTRACTABLE, t.POP_KEY_USAGES)];
              case 1:
                return i = a.sent(),
                [4, this.browserCrypto.exportJwk(i.publicKey)];
              case 2:
                return s = a.sent(),
                c = {
                  e: s.e,
                  kty: s.kty,
                  n: s.n,
                },
                u = _r.getSortedObjectString(c),
                [4, this.hashString(u)];
              case 3:
                return l = a.sent(),
                [4, this.browserCrypto.exportJwk(i.privateKey)];
              case 4:
                return d = a.sent(),
                [4, this.browserCrypto.importJwk(d, !1, ['sign'])];
              case 5:
                return h = a.sent(),
                [4, this.cache.asymmetricKeys.setItem(l, {
                  privateKey: h,
                  publicKey: i.publicKey,
                  requestMethod: r.resourceRequestMethod,
                  requestUri: r.resourceRequestUri,
                })];
              case 6:
                return a.sent(),
                o && o.endMeasurement({
                  success: !0,
                }),
                [2, l];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.removeTokenBindingKey = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cache.asymmetricKeys.removeItem(e)];
              case 1:
                return t.sent(),
                [4, this.cache.asymmetricKeys.containsKey(e)];
              case 2:
                return [2, !t.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.clearKeystore = function () {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (e) {
            switch (e.label) {
              case 0:
                return [4, this.cache.clear()];
              case 1:
                return [2, e.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.signJwt = function (t, r, n) {
        let o;
        return i(this, void 0, void 0, (function () {
          let i; let s; let c; let u; let l; let d; let h; let p; let g; let f; let m; let v; let
            y;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                return i = (o = this.performanceClient) === null || void 0 === o ? void 0 : o.startMeasurement(e.PerformanceEvents.CryptoOptsSignJwt, n),
                [4, this.cache.asymmetricKeys.getItem(r)];
              case 1:
                if (!(s = a.sent())) throw kt.createSigningKeyNotFoundInStorageError(r);
                return [4, this.browserCrypto.exportJwk(s.publicKey)];
              case 2:
                return c = a.sent(),
                u = _r.getSortedObjectString(c),
                l = this.b64Encode.urlEncode(JSON.stringify({
                  kid: r,
                })),
                d = Tt.getShrHeaderString({
                  kid: l,
                  alg: c.alg,
                }),
                h = this.b64Encode.urlEncode(d),
                t.cnf = {
                  jwk: JSON.parse(u),
                },
                p = this.b64Encode.urlEncode(JSON.stringify(t)),
                g = `${h}.${p}`,
                f = _r.stringToArrayBuffer(g),
                [4, this.browserCrypto.sign(s.privateKey, f)];
              case 3:
                return m = a.sent(),
                v = this.b64Encode.urlEncodeArr(new Uint8Array(m)),
                y = `${g}.${v}`,
                i && i.endMeasurement({
                  success: !0,
                }),
                [2, y];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.hashString = function (e) {
        return i(this, void 0, void 0, (function () {
          let t; let
            r;
          return a(this, (function (n) {
            switch (n.label) {
              case 0:
                return [4, this.browserCrypto.sha256Digest(e)];
              case 1:
                return t = n.sent(),
                r = new Uint8Array(t),
                [2, this.b64Encode.urlEncodeArr(r)];
            }
          }
          ));
        }
        ));
      }
      ,
      t.POP_KEY_USAGES = ['sign', 'verify'],
      t.EXTRACTABLE = !0,
      t;
    }());
    const qr = (function () {
      function e(e, t, r, n) {
        this.isBrowserEnvironment = typeof window !== 'undefined',
        this.config = e,
        this.storage = t,
        this.logger = r,
        this.cryptoObj = n;
      }
      return e.prototype.loadExternalTokens = function (e, t, r) {
        if (this.logger.info('TokenCache - loadExternalTokens called'),
        !t.id_token) throw kt.createUnableToLoadTokenError('Please ensure server response includes id token.');
        let n; let o; const
          i = new me(t.id_token, this.cryptoObj);
        if (e.account) {
          var a = this.loadAccount(i, e.account.environment, void 0, void 0, e.account.homeAccountId);
          n = new Be(a, this.loadIdToken(i, a.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, a.homeAccountId, e.account.environment, e.account.tenantId, r), this.loadRefreshToken(e, t, a.homeAccountId, e.account.environment));
        } else {
          if (!e.authority) throw kt.createUnableToLoadTokenError('Please provide a request with an account or a request with authority.');
          const s = gt.generateAuthority(e.authority, e.azureCloudOptions);
          const c = {
            protocolMode: this.config.auth.protocolMode,
            knownAuthorities: this.config.auth.knownAuthorities,
            cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
            authorityMetadata: this.config.auth.authorityMetadata,
            skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache,
          };
          if (o = new gt(s, this.config.system.networkClient, this.storage, c),
          r.clientInfo) {
            this.logger.trace('TokenCache - homeAccountId from options');
            a = this.loadAccount(i, o.hostnameAndPort, r.clientInfo, o.authorityType);
            n = new Be(a, this.loadIdToken(i, a.homeAccountId, o.hostnameAndPort, o.tenant), this.loadAccessToken(e, t, a.homeAccountId, o.hostnameAndPort, o.tenant, r), this.loadRefreshToken(e, t, a.homeAccountId, o.hostnameAndPort));
          } else {
            if (!t.client_info) throw kt.createUnableToLoadTokenError('Please provide clientInfo in the response or options.');
            this.logger.trace('TokenCache - homeAccountId from response');
            a = this.loadAccount(i, o.hostnameAndPort, t.client_info, o.authorityType);
            n = new Be(a, this.loadIdToken(i, a.homeAccountId, o.hostnameAndPort, o.tenant), this.loadAccessToken(e, t, a.homeAccountId, o.hostnameAndPort, o.tenant, r), this.loadRefreshToken(e, t, a.homeAccountId, o.hostnameAndPort));
          }
        }
        return this.generateAuthenticationResult(e, i, n, o);
      }
      ,
      e.prototype.loadAccount = function (e, t, r, n, o) {
        let i;
        if (o ? i = o : void 0 !== n && r && (i = fe.generateHomeAccountId(r, n, this.logger, this.cryptoObj, e)),
        !i) throw kt.createUnableToLoadTokenError('Unexpected missing homeAccountId');
        const a = r ? fe.createAccount(r, i, e, void 0, void 0, void 0, t) : fe.createGenericAccount(i, e, void 0, void 0, void 0, t);
        if (this.isBrowserEnvironment) {
          return this.logger.verbose('TokenCache - loading account'),
          this.storage.setAccount(a),
          a;
        }
        throw kt.createUnableToLoadTokenError('loadExternalTokens is designed to work in browser environments only.');
      }
      ,
      e.prototype.loadIdToken = function (e, t, r, n) {
        const o = Ue.createIdTokenEntity(t, r, e.rawToken, this.config.auth.clientId, n);
        if (this.isBrowserEnvironment) {
          return this.logger.verbose('TokenCache - loading id token'),
          this.storage.setIdTokenCredential(o),
          o;
        }
        throw kt.createUnableToLoadTokenError('loadExternalTokens is designed to work in browser environments only.');
      }
      ,
      e.prototype.loadAccessToken = function (e, t, r, n, o, i) {
        if (!t.access_token) {
          return this.logger.verbose('TokenCache - No access token provided for caching'),
          null;
        }
        if (!t.expires_in) throw kt.createUnableToLoadTokenError('Please ensure server response includes expires_in value.');
        if (!i.extendedExpiresOn) throw kt.createUnableToLoadTokenError('Please provide an extendedExpiresOn value in the options.');
        const a = new he(e.scopes).printScopes();
        const s = i.expiresOn || t.expires_in + (new Date()).getTime() / 1e3;
        const c = i.extendedExpiresOn;
        const u = He.createAccessTokenEntity(r, n, t.access_token, this.config.auth.clientId, o, a, s, c, this.cryptoObj);
        if (this.isBrowserEnvironment) {
          return this.logger.verbose('TokenCache - loading access token'),
          this.storage.setAccessTokenCredential(u),
          u;
        }
        throw kt.createUnableToLoadTokenError('loadExternalTokens is designed to work in browser environments only.');
      }
      ,
      e.prototype.loadRefreshToken = function (e, t, r, n) {
        if (!t.refresh_token) {
          return this.logger.verbose('TokenCache - No refresh token provided for caching'),
          null;
        }
        const o = Le.createRefreshTokenEntity(r, n, t.refresh_token, this.config.auth.clientId);
        if (this.isBrowserEnvironment) {
          return this.logger.verbose('TokenCache - loading refresh token'),
          this.storage.setRefreshTokenCredential(o),
          o;
        }
        throw kt.createUnableToLoadTokenError('loadExternalTokens is designed to work in browser environments only.');
      }
      ,
      e.prototype.generateAuthenticationResult = function (e, t, r, n) {
        let o; let i; let a; let s; let c = C.EMPTY_STRING; let u = []; let
          l = null;
        (r == null ? void 0 : r.accessToken) && (c = r.accessToken.secret,
        u = he.fromString(r.accessToken.target).asArray(),
        l = new Date(1e3 * Number(r.accessToken.expiresOn)),
        s = new Date(1e3 * Number(r.accessToken.extendedExpiresOn)));
        const d = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || C.EMPTY_STRING;
        const h = (t == null ? void 0 : t.claims.tid) || C.EMPTY_STRING;
        return {
          authority: n ? n.canonicalAuthority : C.EMPTY_STRING,
          uniqueId: d,
          tenantId: h,
          scopes: u,
          account: (r == null ? void 0 : r.account) ? r.account.getAccountInfo() : null,
          idToken: t ? t.rawToken : C.EMPTY_STRING,
          idTokenClaims: t ? t.claims : {},
          accessToken: c,
          fromCache: !0,
          expiresOn: l,
          correlationId: e.correlationId || C.EMPTY_STRING,
          requestId: C.EMPTY_STRING,
          extExpiresOn: s,
          familyId: C.EMPTY_STRING,
          tokenType: ((o = r == null ? void 0 : r.accessToken) === null || void 0 === o ? void 0 : o.tokenType) || C.EMPTY_STRING,
          state: C.EMPTY_STRING,
          cloudGraphHostName: ((i = r == null ? void 0 : r.account) === null || void 0 === i ? void 0 : i.cloudGraphHostName) || C.EMPTY_STRING,
          msGraphHost: ((a = r == null ? void 0 : r.account) === null || void 0 === a ? void 0 : a.msGraphHost) || C.EMPTY_STRING,
          code: void 0,
          fromNativeBroker: !1,
        };
      }
      ,
      e;
    }());
    const Hr = (function (e) {
      function t(t) {
        const r = e.call(this, t) || this;
        return r.includeRedirectUri = !1,
        r;
      }
      return r(t, e),
      t;
    }(Xe));
    const Lr = (function (t) {
      function o(e, r, n, o, i, a, s, c, u, l) {
        const d = t.call(this, e, r, n, o, i, a, c, u, l) || this;
        return d.apiId = s,
        d;
      }
      return r(o, t),
      o.prototype.acquireToken = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let c; let
            u;
          return a(this, (function (a) {
            switch (a.label) {
              case 0:
                if (this.logger.trace('SilentAuthCodeClient.acquireToken called'),
                !t.code) throw kt.createAuthCodeRequiredError();
                return [4, this.initializeAuthorizationRequest(t, e.InteractionType.Silent)];
              case 1:
                r = a.sent(),
                this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority, r.loginHint || C.EMPTY_STRING, r.account || null),
                o = this.initializeServerTelemetryManager(this.apiId),
                a.label = 2;
              case 2:
                return a.trys.push([2, 4, , 5]),
                i = { ...r, code: t.code },
                [4, this.getClientConfiguration(o, r.authority)];
              case 3:
                return s = a.sent(),
                c = new Hr(s),
                this.logger.verbose('Auth code client created'),
                [2, new gr(c, this.browserStorage, i, this.logger, this.config.system).handleCodeResponseFromServer({
                  code: t.code,
                  msgraph_host: t.msGraphHost,
                  cloud_graph_host_name: t.cloudGraphHostName,
                  cloud_instance_host_name: t.cloudInstanceHostName,
                }, r.state, c.authority, this.networkClient, !1)];
              case 4:
                throw (u = a.sent()) instanceof ee && u.setCorrelationId(this.correlationId),
                o.cacheFailedRequest(u),
                this.browserStorage.cleanRequestByState(r.state),
                u;
              case 5:
                return [2];
            }
          }
          ));
        }
        ));
      }
      ,
      o.prototype.logout = function () {
        return Promise.reject(kt.createSilentLogoutUnsupportedError());
      }
      ,
      o;
    }($t));
    const Dr = (function () {
      function e(e, t) {
        this.correlationId = t,
        this.measureName = `msal.measure.${e}.${this.correlationId}`,
        this.startMark = `msal.start.${e}.${this.correlationId}`,
        this.endMark = `msal.end.${e}.${this.correlationId}`;
      }
      return e.supportsBrowserPerformance = function () {
        return typeof window !== 'undefined' && void 0 !== window.performance && typeof window.performance.mark === 'function' && typeof window.performance.measure === 'function' && typeof window.performance.clearMarks === 'function' && typeof window.performance.clearMeasures === 'function' && typeof window.performance.getEntriesByName === 'function';
      }
      ,
      e.prototype.startMeasurement = function () {
        if (e.supportsBrowserPerformance()) {
          try {
            window.performance.mark(this.startMark);
          } catch (e) {}
        }
      }
      ,
      e.prototype.endMeasurement = function () {
        if (e.supportsBrowserPerformance()) {
          try {
            window.performance.mark(this.endMark),
            window.performance.measure(this.measureName, this.startMark, this.endMark);
          } catch (e) {}
        }
      }
      ,
      e.prototype.flushMeasurement = function () {
        if (e.supportsBrowserPerformance()) {
          try {
            const t = window.performance.getEntriesByName(this.measureName, 'measure');
            if (t.length > 0) {
              const r = t[0].duration;
              return window.performance.clearMeasures(this.measureName),
              window.performance.clearMarks(this.startMark),
              window.performance.clearMarks(this.endMark),
              r;
            }
          } catch (e) {}
        }
        return null;
      }
      ,
      e;
    }());
    const xr = (function (e) {
      function t(t, r, n, o, i, a, s) {
        const c = e.call(this, t, r, n, o, i, a) || this;
        return c.browserCrypto = new Nr(c.logger, s),
        c.guidGenerator = new Cr(c.browserCrypto),
        c;
      }
      return r(t, e),
      t.prototype.startPerformanceMeasuremeant = function (e, t) {
        return new Dr(e, t);
      }
      ,
      t.prototype.generateId = function () {
        return this.guidGenerator.generateGuid();
      }
      ,
      t.prototype.getPageVisibility = function () {
        let e;
        return ((e = document.visibilityState) === null || void 0 === e ? void 0 : e.toString()) || null;
      }
      ,
      t.prototype.startMeasurement = function (t, r) {
        const o = this;
        const i = this.getPageVisibility();
        const a = e.prototype.startMeasurement.call(this, t, r);
        return {
          ...a,
          endMeasurement(e) {
            return a.endMeasurement({
              startPageVisibility: i,
              endPageVisibility: o.getPageVisibility(),
              ...e, 
  });
          }, 
        };
      }
      ,
      t;
    }(St));
    const Fr = (function () {
      function t(t) {
        let r; let o; let
          i;
        this.isBrowserEnvironment = typeof window !== 'undefined',
        this.config = (function (t, r) {
          const o = t.auth;
          const i = t.cache;
          const a = t.system;
          const s = t.telemetry;
          const c = {
            clientId: C.EMPTY_STRING,
            authority: `${ C.DEFAULT_AUTHORITY}`,
            knownAuthorities: [],
            cloudDiscoveryMetadata: C.EMPTY_STRING,
            authorityMetadata: C.EMPTY_STRING,
            redirectUri: C.EMPTY_STRING,
            postLogoutRedirectUri: C.EMPTY_STRING,
            navigateToLoginRequestUrl: !0,
            clientCapabilities: [],
            protocolMode: e.ProtocolMode.AAD,
            azureCloudOptions: {
              azureCloudInstance: e.AzureCloudInstance.None,
              tenant: C.EMPTY_STRING,
            },
            skipAuthorityMetadataCache: !1,
          };
          let u = {
            cacheLocation: e.BrowserCacheLocation.SessionStorage,
            storeAuthStateInCookie: !1,
            secureCookies: !1,
          };
          let l = {
            loggerCallback() {},
            logLevel: e.LogLevel.Info,
            piiLoggingEnabled: !1,
          };
          let d = {
   ...Ee,
            loggerOptions: l,
            networkClient: r ? Xt.getBrowserNetworkClient() : yt,
            navigationClient: new dr(),
            loadFrameTimeout: 0,
            windowHashTimeout: (a == null ? void 0 : a.loadFrameTimeout) || 6e4,
            iframeHashTimeout: (a == null ? void 0 : a.loadFrameTimeout) || hr,
            navigateFrameWait: r && Xt.detectIEOrEdge() ? 500 : 0,
            redirectNavigationTimeout: 3e4,
            asyncPopups: !1,
            allowRedirectInIframe: !1,
            allowNativeBroker: !1,
            nativeBrokerHandshakeTimeout: (a == null ? void 0 : a.nativeBrokerHandshakeTimeout) || 2e3,
            pollIntervalMilliseconds: Nt.DEFAULT_POLL_INTERVAL_MS,
            cryptoOptions: {
              useMsrCrypto: !1,
              entropy: void 0,
            } 
  };
          const h = {
            application: {
              appName: C.EMPTY_STRING,
              appVersion: C.EMPTY_STRING,
            },
          };
          return {
            auth: { ...c, ...o },
            cache: { ...u, ...i },
            system: { ...d, ...a },
            telemetry: { ...h, ...s },
          };
        }(t, this.isBrowserEnvironment)),
        this.initialized = !1,
        this.logger = new ae(this.config.system.loggerOptions, Wt, Vt),
        this.networkClient = this.config.system.networkClient,
        this.navigationClient = this.config.system.navigationClient,
        this.redirectResponse = new Map(),
        this.hybridAuthCodeResponses = new Map(),
        this.performanceClient = this.isBrowserEnvironment ? new xr(this.config.auth.clientId, this.config.auth.authority, this.logger, Wt, Vt, this.config.telemetry.application, this.config.system.cryptoOptions) : new bt(this.config.auth.clientId, this.config.auth.authority, this.logger, Wt, Vt, this.config.telemetry.application),
        this.browserCrypto = this.isBrowserEnvironment ? new Ur(this.logger, this.performanceClient, this.config.system.cryptoOptions) : te,
        this.eventHandler = new vr(this.logger, this.browserCrypto),
        this.browserStorage = this.isBrowserEnvironment ? new Yt(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : (r = this.config.auth.clientId,
        o = this.logger,
        i = {
          cacheLocation: e.BrowserCacheLocation.MemoryStorage,
          storeAuthStateInCookie: !1,
          secureCookies: !1,
        },
        new Yt(r, i, te, o));
        const a = {
          cacheLocation: e.BrowserCacheLocation.MemoryStorage,
          storeAuthStateInCookie: !1,
          secureCookies: !1,
        };
        this.nativeInternalStorage = new Yt(this.config.auth.clientId, a, this.browserCrypto, this.logger),
        this.tokenCache = new qr(this.config, this.browserStorage, this.logger, this.browserCrypto);
      }
      return t.prototype.initialize = function () {
        return i(this, void 0, void 0, (function () {
          let t; let
            r;
          return a(this, (function (n) {
            switch (n.label) {
              case 0:
                if (this.logger.trace('initialize called'),
                this.initialized) {
                  return this.logger.info('initialize has already been called, exiting early.'),
                  [2];
                }
                if (this.eventHandler.emitEvent(e.EventType.INITIALIZE_START),
                !this.config.system.allowNativeBroker) return [3, 4];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]),
                t = this,
                [4, cr.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout)];
              case 2:
                return t.nativeExtensionProvider = n.sent(),
                [3, 4];
              case 3:
                return r = n.sent(),
                this.logger.verbose(r),
                [3, 4];
              case 4:
                return this.initialized = !0,
                this.eventHandler.emitEvent(e.EventType.INITIALIZE_END),
                [2];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.handleRedirectPromise = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let s; let c; let u; let l; const
            d = this;
          return a(this, (function (a) {
            return this.logger.verbose('handleRedirectPromise called'),
            Xt.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized),
            r = this.getAllAccounts(),
            this.isBrowserEnvironment ? (n = t || C.EMPTY_STRING,
            void 0 === (o = this.redirectResponse.get(n)) ? (this.eventHandler.emitEvent(e.EventType.HANDLE_REDIRECT_START, e.InteractionType.Redirect),
            this.logger.verbose('handleRedirectPromise has been called for the first time, storing the promise'),
            i = this.browserStorage.getCachedNativeRequest(),
            s = void 0,
            i && cr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !t ? (this.logger.trace('handleRedirectPromise - acquiring token from native platform'),
            c = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e.ApiId.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId),
            s = c.handleRedirectPromise()) : (this.logger.trace('handleRedirectPromise - acquiring token from web flow'),
            u = this.browserStorage.getTemporaryCache(ct.CORRELATION_ID, !0) || C.EMPTY_STRING,
            l = this.createRedirectClient(u),
            s = l.handleRedirectPromise(t)),
            o = s.then(((t) => {
              t && (r.length < d.getAllAccounts().length ? (d.eventHandler.emitEvent(e.EventType.LOGIN_SUCCESS, e.InteractionType.Redirect, t),
              d.logger.verbose('handleRedirectResponse returned result, login success')) : (d.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_SUCCESS, e.InteractionType.Redirect, t),
              d.logger.verbose('handleRedirectResponse returned result, acquire token success')));
              return d.eventHandler.emitEvent(e.EventType.HANDLE_REDIRECT_END, e.InteractionType.Redirect),
              t;
            }
            )).catch(((t) => {
              throw r.length > 0 ? d.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_FAILURE, e.InteractionType.Redirect, null, t) : d.eventHandler.emitEvent(e.EventType.LOGIN_FAILURE, e.InteractionType.Redirect, null, t),
              d.eventHandler.emitEvent(e.EventType.HANDLE_REDIRECT_END, e.InteractionType.Redirect),
              t;
            }
            )),
            this.redirectResponse.set(n, o)) : this.logger.verbose('handleRedirectPromise has been called previously, returning the result from the first call'),
            [2, o]) : (this.logger.verbose('handleRedirectPromise returns null, not browser environment'),
            [2, null]);
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenRedirect = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let n; let o; let i; let s; const
            c = this;
          return a(this, (function (a) {
            return r = this.getRequestCorrelationId(t),
            this.logger.verbose('acquireTokenRedirect called', r),
            this.preflightBrowserEnvironmentCheck(e.InteractionType.Redirect),
            (n = this.getAllAccounts().length > 0) ? this.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_START, e.InteractionType.Redirect, t) : this.eventHandler.emitEvent(e.EventType.LOGIN_START, e.InteractionType.Redirect, t),
            this.nativeExtensionProvider && this.canUseNative(t) ? (i = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e.ApiId.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(t), this.nativeInternalStorage, t.correlationId),
            o = i.acquireTokenRedirect(t).catch(((e) => {
              if (e instanceof ir && e.isFatal()) {
                return c.nativeExtensionProvider = void 0,
                c.createRedirectClient(t.correlationId).acquireToken(t);
              }
              if (e instanceof Ke) {
                return c.logger.verbose('acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow'),
                c.createRedirectClient(t.correlationId).acquireToken(t);
              }
              throw c.browserStorage.setInteractionInProgress(!1),
              e;
            }
            ))) : (s = this.createRedirectClient(t.correlationId),
            o = s.acquireToken(t)),
            [2, o.catch(((t) => {
              throw n ? c.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_FAILURE, e.InteractionType.Redirect, null, t) : c.eventHandler.emitEvent(e.EventType.LOGIN_FAILURE, e.InteractionType.Redirect, null, t),
              t;
            }
            ))];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenPopup = function (t) {
        const r = this;
        const n = this.getRequestCorrelationId(t);
        const o = this.performanceClient.startMeasurement(e.PerformanceEvents.AcquireTokenPopup, n);
        try {
          this.logger.verbose('acquireTokenPopup called', n),
          this.preflightBrowserEnvironmentCheck(e.InteractionType.Popup);
        } catch (e) {
          return Promise.reject(e);
        }
        let i; const
          a = this.getAllAccounts();
        (a.length > 0 ? this.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_START, e.InteractionType.Popup, t) : this.eventHandler.emitEvent(e.EventType.LOGIN_START, e.InteractionType.Popup, t),
        this.canUseNative(t)) ? i = this.acquireTokenNative(t, e.ApiId.acquireTokenPopup).then(((e) => (r.browserStorage.setInteractionInProgress(!1),
          o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: e.requestId,
          }),
          o.flushMeasurement(),
          e)
          )).catch(((e) => {
            if (e instanceof ir && e.isFatal()) {
              return r.nativeExtensionProvider = void 0,
              r.createPopupClient(t.correlationId).acquireToken(t);
            }
            if (e instanceof Ke) {
              return r.logger.verbose('acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow'),
              r.createPopupClient(t.correlationId).acquireToken(t);
            }
            throw r.browserStorage.setInteractionInProgress(!1),
            e;
          }
          )) : i = this.createPopupClient(t.correlationId).acquireToken(t);
        return i.then(((t) => (a.length < r.getAllAccounts().length ? r.eventHandler.emitEvent(e.EventType.LOGIN_SUCCESS, e.InteractionType.Popup, t) : r.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_SUCCESS, e.InteractionType.Popup, t),
        o.addStaticFields({
          accessTokenSize: t.accessToken.length,
          idTokenSize: t.idToken.length,
        }),
        o.endMeasurement({
          success: !0,
          requestId: t.requestId,
        }),
        o.flushMeasurement(),
        t)
        )).catch(((t) => (a.length > 0 ? r.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_FAILURE, e.InteractionType.Popup, null, t) : r.eventHandler.emitEvent(e.EventType.LOGIN_FAILURE, e.InteractionType.Popup, null, t),
        o.endMeasurement({
          errorCode: t.errorCode,
          subErrorCode: t.subError,
          success: !1,
        }),
        o.flushMeasurement(),
        Promise.reject(t))
        ));
      }
      ,
      t.prototype.ssoSilent = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let c; const
            u = this;
          return a(this, (function (a) {
            return r = this.getRequestCorrelationId(t),
            o = {
              ...t,
              prompt: t.prompt,
              correlationId: r, 
  },
            this.preflightBrowserEnvironmentCheck(e.InteractionType.Silent),
            i = this.performanceClient.startMeasurement(e.PerformanceEvents.SsoSilent, r),
            this.logger.verbose('ssoSilent called', r),
            this.eventHandler.emitEvent(e.EventType.SSO_SILENT_START, e.InteractionType.Silent, o),
            this.canUseNative(o) ? s = this.acquireTokenNative(o, e.ApiId.ssoSilent).catch(((e) => {
              if (e instanceof ir && e.isFatal()) {
                return u.nativeExtensionProvider = void 0,
                u.createSilentIframeClient(o.correlationId).acquireToken(o);
              }
              throw e;
            }
            )) : (c = this.createSilentIframeClient(o.correlationId),
            s = c.acquireToken(o)),
            [2, s.then(((t) => (u.eventHandler.emitEvent(e.EventType.SSO_SILENT_SUCCESS, e.InteractionType.Silent, t),
            i.addStaticFields({
              accessTokenSize: t.accessToken.length,
              idTokenSize: t.idToken.length,
            }),
            i.endMeasurement({
              success: !0,
              isNativeBroker: t.fromNativeBroker,
              requestId: t.requestId,
            }),
            i.flushMeasurement(),
            t)
            )).catch(((t) => {
              throw u.eventHandler.emitEvent(e.EventType.SSO_SILENT_FAILURE, e.InteractionType.Silent, null, t),
              i.endMeasurement({
                errorCode: t.errorCode,
                subErrorCode: t.subError,
                success: !1,
              }),
              i.flushMeasurement(),
              t;
            }
            ))];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenByCode = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; const
            c = this;
          return a(this, (function (a) {
            r = this.getRequestCorrelationId(t),
            this.preflightBrowserEnvironmentCheck(e.InteractionType.Silent),
            this.logger.trace('acquireTokenByCode called', r),
            this.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_BY_CODE_START, e.InteractionType.Silent, t),
            o = this.performanceClient.startMeasurement(e.PerformanceEvents.AcquireTokenByCode, t.correlationId);
            try {
              if (t.code) {
                return i = t.code,
                (s = this.hybridAuthCodeResponses.get(i)) ? (this.logger.verbose('Existing acquireTokenByCode request found', t.correlationId),
                o.endMeasurement({
                  success: !0,
                }),
                o.discardMeasurement()) : (this.logger.verbose('Initiating new acquireTokenByCode request', r),
                s = this.acquireTokenByCodeAsync({ ...t, correlationId: r }).then(((t) => (c.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_BY_CODE_SUCCESS, e.InteractionType.Silent, t),
                c.hybridAuthCodeResponses.delete(i),
                o.addStaticFields({
                  accessTokenSize: t.accessToken.length,
                  idTokenSize: t.idToken.length,
                }),
                o.endMeasurement({
                  success: !0,
                  isNativeBroker: t.fromNativeBroker,
                  requestId: t.requestId,
                }),
                o.flushMeasurement(),
                t)
                )).catch(((t) => {
                  throw c.hybridAuthCodeResponses.delete(i),
                  c.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, e.InteractionType.Silent, null, t),
                  o.endMeasurement({
                    errorCode: t.errorCode,
                    subErrorCode: t.subError,
                    success: !1,
                  }),
                  o.flushMeasurement(),
                  t;
                }
                )),
                this.hybridAuthCodeResponses.set(i, s)),
                [2, s];
              }
              if (t.nativeAccountId) {
                if (this.canUseNative(t, t.nativeAccountId)) {
                  return [2, this.acquireTokenNative(t, e.ApiId.acquireTokenByCode, t.nativeAccountId).catch(((e) => {
                    throw e instanceof ir && e.isFatal() && (c.nativeExtensionProvider = void 0),
                    e;
                  }
                  ))];
                }
                throw kt.createUnableToAcquireTokenFromNativePlatformError();
              }
              throw kt.createAuthCodeOrNativeAccountIdRequiredError();
            } catch (t) {
              throw this.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, e.InteractionType.Silent, null, t),
              o.endMeasurement({
                errorCode: t instanceof ee && t.errorCode || void 0,
                subErrorCode: t instanceof ee && t.subError || void 0,
                success: !1,
              }),
              t;
            }
            return [2];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenByCodeAsync = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                return this.logger.trace('acquireTokenByCodeAsync called', e.correlationId),
                [4, this.createSilentAuthCodeClient(e.correlationId).acquireToken(e)];
              case 1:
                return [2, t.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenFromCache = function (t, r, n) {
        return i(this, void 0, void 0, (function () {
          return a(this, ((o) => {
            switch (n.cacheLookupPolicy) {
              case e.CacheLookupPolicy.Default:
              case e.CacheLookupPolicy.AccessToken:
              case e.CacheLookupPolicy.AccessTokenAndRefreshToken:
                return [2, t.acquireToken(r)];
              default:
                throw ne.createRefreshRequiredError();
            }
            return [2];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenByRefreshToken = function (t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (n) {
            switch (r.cacheLookupPolicy) {
              case e.CacheLookupPolicy.Default:
              case e.CacheLookupPolicy.AccessTokenAndRefreshToken:
              case e.CacheLookupPolicy.RefreshToken:
              case e.CacheLookupPolicy.RefreshTokenAndNetwork:
                return [2, this.createSilentRefreshClient(t.correlationId).acquireToken(t)];
              default:
                throw ne.createRefreshRequiredError();
            }
            return [2];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.acquireTokenBySilentIframe = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (t) {
            return [2, this.createSilentIframeClient(e.correlationId).acquireToken(e)];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.logout = function (e) {
        return i(this, void 0, void 0, (function () {
          let t;
          return a(this, (function (r) {
            return t = this.getRequestCorrelationId(e),
            this.logger.warning('logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.', t),
            [2, this.logoutRedirect({ correlationId: t, ...e })];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.logoutRedirect = function (t) {
        return i(this, void 0, void 0, (function () {
          let r;
          return a(this, (function (n) {
            return r = this.getRequestCorrelationId(t),
            this.preflightBrowserEnvironmentCheck(e.InteractionType.Redirect),
            [2, this.createRedirectClient(r).logout(t)];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.logoutPopup = function (t) {
        try {
          const r = this.getRequestCorrelationId(t);
          return this.preflightBrowserEnvironmentCheck(e.InteractionType.Popup),
          this.createPopupClient(r).logout(t);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      ,
      t.prototype.getAllAccounts = function () {
        return this.logger.verbose('getAllAccounts called'),
        this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
      }
      ,
      t.prototype.getAccountByUsername = function (e) {
        const t = this.getAllAccounts();
        return !oe.isEmpty(e) && t && t.length ? (this.logger.verbose('Account matching username found, returning'),
        this.logger.verbosePii(`Returning signed-in accounts matching username: ${e}`),
        t.filter(((t) => t.username.toLowerCase() === e.toLowerCase()
        ))[0] || null) : (this.logger.verbose('getAccountByUsername: No matching account found, returning null'),
        null);
      }
      ,
      t.prototype.getAccountByHomeId = function (e) {
        const t = this.getAllAccounts();
        return !oe.isEmpty(e) && t && t.length ? (this.logger.verbose('Account matching homeAccountId found, returning'),
        this.logger.verbosePii(`Returning signed-in accounts matching homeAccountId: ${e}`),
        t.filter(((t) => t.homeAccountId === e
        ))[0] || null) : (this.logger.verbose('getAccountByHomeId: No matching account found, returning null'),
        null);
      }
      ,
      t.prototype.getAccountByLocalId = function (e) {
        const t = this.getAllAccounts();
        return !oe.isEmpty(e) && t && t.length ? (this.logger.verbose('Account matching localAccountId found, returning'),
        this.logger.verbosePii(`Returning signed-in accounts matching localAccountId: ${e}`),
        t.filter(((t) => t.localAccountId === e
        ))[0] || null) : (this.logger.verbose('getAccountByLocalId: No matching account found, returning null'),
        null);
      }
      ,
      t.prototype.setActiveAccount = function (e) {
        this.browserStorage.setActiveAccount(e);
      }
      ,
      t.prototype.getActiveAccount = function () {
        return this.browserStorage.getActiveAccount();
      }
      ,
      t.prototype.preflightBrowserEnvironmentCheck = function (t, r) {
        if (void 0 === r && (r = !0),
        this.logger.verbose('preflightBrowserEnvironmentCheck started'),
        Xt.blockNonBrowserEnvironment(this.isBrowserEnvironment),
        Xt.blockRedirectInIframe(t, this.config.system.allowRedirectInIframe),
        Xt.blockReloadInHiddenIframes(),
        Xt.blockAcquireTokenInPopups(),
        Xt.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized),
        t === e.InteractionType.Redirect && this.config.cache.cacheLocation === e.BrowserCacheLocation.MemoryStorage && !this.config.cache.storeAuthStateInCookie) throw Bt.createInMemoryRedirectUnavailableError();
        t !== e.InteractionType.Redirect && t !== e.InteractionType.Popup || this.preflightInteractiveRequest(r);
      }
      ,
      t.prototype.preflightInteractiveRequest = function (e) {
        this.logger.verbose('preflightInteractiveRequest called, validating app environment'),
        Xt.blockReloadInHiddenIframes(),
        e && this.browserStorage.setInteractionInProgress(!0);
      }
      ,
      t.prototype.acquireTokenNative = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (n) {
            if (this.logger.trace('acquireTokenNative called'),
            !this.nativeExtensionProvider) throw kt.createNativeConnectionNotEstablishedError();
            return [2, new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, r || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId).acquireToken(e)];
          }
          ));
        }
        ));
      }
      ,
      t.prototype.canUseNative = function (e, t) {
        if (this.logger.trace('canUseNative called'),
        !cr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme)) {
          return this.logger.trace('canUseNative: isNativeAvailable returned false, returning false'),
          !1;
        }
        if (e.prompt) {
          switch (e.prompt) {
            case w.NONE:
            case w.CONSENT:
            case w.LOGIN:
              this.logger.trace('canUseNative: prompt is compatible with native flow');
              break;
            default:
              return this.logger.trace(`canUseNative: prompt = ${e.prompt} is not compatible with native flow, returning false`),
              !1;
          }
        }
        return !(!t && !this.getNativeAccountId(e)) || (this.logger.trace('canUseNative: nativeAccountId is not available, returning false'),
        !1);
      }
      ,
      t.prototype.getNativeAccountId = function (e) {
        const t = e.account || this.browserStorage.getAccountInfoByHints(e.loginHint, e.sid) || this.getActiveAccount();
        return t && t.nativeAccountId || '';
      }
      ,
      t.prototype.createPopupClient = function (e) {
        return new lr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
      }
      ,
      t.prototype.createRedirectClient = function (e) {
        return new ur(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
      }
      ,
      t.prototype.createSilentIframeClient = function (t) {
        return new fr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e.ApiId.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, t);
      }
      ,
      t.prototype.createSilentCacheClient = function (e) {
        return new ar(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
      }
      ,
      t.prototype.createSilentRefreshClient = function (e) {
        return new mr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
      }
      ,
      t.prototype.createSilentAuthCodeClient = function (t) {
        return new Lr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e.ApiId.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, t);
      }
      ,
      t.prototype.addEventCallback = function (e) {
        return this.eventHandler.addEventCallback(e);
      }
      ,
      t.prototype.removeEventCallback = function (e) {
        this.eventHandler.removeEventCallback(e);
      }
      ,
      t.prototype.addPerformanceCallback = function (e) {
        return this.performanceClient.addPerformanceCallback(e);
      }
      ,
      t.prototype.removePerformanceCallback = function (e) {
        return this.performanceClient.removePerformanceCallback(e);
      }
      ,
      t.prototype.enableAccountStorageEvents = function () {
        this.eventHandler.enableAccountStorageEvents();
      }
      ,
      t.prototype.disableAccountStorageEvents = function () {
        this.eventHandler.disableAccountStorageEvents();
      }
      ,
      t.prototype.getTokenCache = function () {
        return this.tokenCache;
      }
      ,
      t.prototype.getLogger = function () {
        return this.logger;
      }
      ,
      t.prototype.setLogger = function (e) {
        this.logger = e;
      }
      ,
      t.prototype.initializeWrapperLibrary = function (e, t) {
        this.browserStorage.setWrapperMetadata(e, t);
      }
      ,
      t.prototype.setNavigationClient = function (e) {
        this.navigationClient = e;
      }
      ,
      t.prototype.getConfiguration = function () {
        return this.config;
      }
      ,
      t.prototype.getRequestCorrelationId = function (e) {
        return (e == null ? void 0 : e.correlationId) ? e.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : C.EMPTY_STRING;
      }
      ,
      t;
    }());
    const Kr = (function (t) {
      function o(e) {
        const r = t.call(this, e) || this;
        return r.activeSilentTokenRequests = new Map(),
        r;
      }
      return r(o, t),
      o.prototype.loginRedirect = function (e) {
        return i(this, void 0, void 0, (function () {
          let t;
          return a(this, (function (r) {
            return t = this.getRequestCorrelationId(e),
            this.logger.verbose('loginRedirect called', t),
            [2, this.acquireTokenRedirect({ correlationId: t, ...e || qt })];
          }
          ));
        }
        ));
      }
      ,
      o.prototype.loginPopup = function (e) {
        const t = this.getRequestCorrelationId(e);
        return this.logger.verbose('loginPopup called', t),
        this.acquireTokenPopup({ correlationId: t, ...e || qt });
      }
      ,
      o.prototype.acquireTokenSilent = function (t) {
        return i(this, void 0, void 0, (function () {
          let r; let o; let i; let s; let c; let u; let l; const
            d = this;
          return a(this, (function (a) {
            if (r = this.getRequestCorrelationId(t),
            (o = this.performanceClient.startMeasurement(e.PerformanceEvents.AcquireTokenSilent, r)).addStaticFields({
              cacheLookupPolicy: t.cacheLookupPolicy,
            }),
            this.preflightBrowserEnvironmentCheck(e.InteractionType.Silent),
            this.logger.verbose('acquireTokenSilent called', r),
            !(i = t.account || this.getActiveAccount())) throw kt.createNoAccountError();
            return s = {
              clientId: this.config.auth.clientId,
              authority: t.authority || C.EMPTY_STRING,
              scopes: t.scopes,
              homeAccountIdentifier: i.homeAccountId,
              claims: t.claims,
              authenticationScheme: t.authenticationScheme,
              resourceRequestMethod: t.resourceRequestMethod,
              resourceRequestUri: t.resourceRequestUri,
              shrClaims: t.shrClaims,
              sshKid: t.sshKid,
            },
            c = JSON.stringify(s),
            void 0 === (u = this.activeSilentTokenRequests.get(c)) ? (this.logger.verbose('acquireTokenSilent called for the first time, storing active request', r),
            l = this.acquireTokenSilentAsync({ ...t, correlationId: r }, i).then(((e) => (d.activeSilentTokenRequests.delete(c),
            o.addStaticFields({
              accessTokenSize: e.accessToken.length,
              idTokenSize: e.idToken.length,
            }),
            o.endMeasurement({
              success: !0,
              fromCache: e.fromCache,
              isNativeBroker: e.fromNativeBroker,
              requestId: e.requestId,
            }),
            o.flushMeasurement(),
            e)
            )).catch(((e) => {
              throw d.activeSilentTokenRequests.delete(c),
              o.endMeasurement({
                errorCode: e.errorCode,
                subErrorCode: e.subError,
                success: !1,
              }),
              o.flushMeasurement(),
              e;
            }
            )),
            this.activeSilentTokenRequests.set(c, l),
            [2, l]) : (this.logger.verbose('acquireTokenSilent has been called previously, returning the result from the first call', r),
            o.endMeasurement({
              success: !0,
            }),
            o.discardMeasurement(),
            [2, u]);
          }
          ));
        }
        ));
      }
      ,
      o.prototype.acquireTokenSilentAsync = function (t, r) {
        return i(this, void 0, void 0, (function () {
          let o; let s; let c; let u; let l; let d; const
            h = this;
          return a(this, (function (p) {
            switch (p.label) {
              case 0:
                return this.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_START, e.InteractionType.Silent, t),
                o = this.performanceClient.startMeasurement(e.PerformanceEvents.AcquireTokenSilentAsync, t.correlationId),
                cr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && r.nativeAccountId ? (this.logger.verbose('acquireTokenSilent - attempting to acquire token from native platform'),
                c = { ...t, account: r },
                s = this.acquireTokenNative(c, e.ApiId.acquireTokenSilent_silentFlow).catch(((e) => i(h, void 0, void 0, (function () {
                  return a(this, (function (r) {
                    if (e instanceof ir && e.isFatal()) {
                      return this.logger.verbose('acquireTokenSilent - native platform unavailable, falling back to web flow'),
                      this.nativeExtensionProvider = void 0,
                      [2, this.createSilentIframeClient(t.correlationId).acquireToken(t)];
                    }
                    throw e;
                  }
                  ));
                }
                ))
                )),
                [3, 3]) : [3, 1];
              case 1:
                return this.logger.verbose('acquireTokenSilent - attempting to acquire token from web flow'),
                [4, (u = this.createSilentCacheClient(t.correlationId)).initializeSilentRequest(t, r)];
              case 2:
                l = p.sent(),
                d = { ...t, cacheLookupPolicy: t.cacheLookupPolicy || e.CacheLookupPolicy.Default },
                s = this.acquireTokenFromCache(u, l, d).catch(((r) => {
                  if (d.cacheLookupPolicy === e.CacheLookupPolicy.AccessToken) throw r;
                  return Xt.blockReloadInHiddenIframes(),
                  h.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_NETWORK_START, e.InteractionType.Silent, l),
                  h.acquireTokenByRefreshToken(l, d).catch(((r) => {
                    const n = r instanceof be;
                    const o = r instanceof Ke;
                    const i = r.errorCode === Nt.INVALID_GRANT_ERROR;
                    if ((!n || !i || o || d.cacheLookupPolicy === e.CacheLookupPolicy.AccessTokenAndRefreshToken || d.cacheLookupPolicy === e.CacheLookupPolicy.RefreshToken) && d.cacheLookupPolicy !== e.CacheLookupPolicy.Skip) throw r;
                    return h.logger.verbose('Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.', t.correlationId),
                    h.acquireTokenBySilentIframe(l);
                  }
                  ));
                }
                )),
                p.label = 3;
              case 3:
                return [2, s.then(((t) => (h.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_SUCCESS, e.InteractionType.Silent, t),
                o.endMeasurement({
                  success: !0,
                  fromCache: t.fromCache,
                  isNativeBroker: t.fromNativeBroker,
                  requestId: t.requestId,
                }),
                t)
                )).catch(((t) => {
                  throw h.eventHandler.emitEvent(e.EventType.ACQUIRE_TOKEN_FAILURE, e.InteractionType.Silent, null, t),
                  o.endMeasurement({
                    errorCode: t.errorCode,
                    subErrorCode: t.subError,
                    success: !1,
                  }),
                  t;
                }
                ))];
            }
          }
          ));
        }
        ));
      }
      ,
      o;
    }(Fr));
    const Br = {
      initialize() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      acquireTokenPopup() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      acquireTokenRedirect() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      acquireTokenSilent() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      acquireTokenByCode() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      getAllAccounts() {
        return [];
      },
      getAccountByHomeId() {
        return null;
      },
      getAccountByUsername() {
        return null;
      },
      getAccountByLocalId() {
        return null;
      },
      handleRedirectPromise() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      loginPopup() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      loginRedirect() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      logout() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      logoutRedirect() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      logoutPopup() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      ssoSilent() {
        return Promise.reject(Bt.createStubPcaInstanceCalledError());
      },
      addEventCallback() {
        return null;
      },
      removeEventCallback() {},
      addPerformanceCallback() {
        return '';
      },
      removePerformanceCallback() {
        return !1;
      },
      enableAccountStorageEvents() {},
      disableAccountStorageEvents() {},
      getTokenCache() {
        throw Bt.createStubPcaInstanceCalledError();
      },
      getLogger() {
        throw Bt.createStubPcaInstanceCalledError();
      },
      setLogger() {},
      setActiveAccount() {},
      getActiveAccount() {
        return null;
      },
      initializeWrapperLibrary() {},
      setNavigationClient() {},
      getConfiguration() {
        throw Bt.createStubPcaInstanceCalledError();
      },
    };
    const Gr = (function () {
      function t() {}
      return t.getInteractionStatusFromEvent = function (t, r) {
        switch (t.eventType) {
          case e.EventType.LOGIN_START:
            return e.InteractionStatus.Login;
          case e.EventType.SSO_SILENT_START:
            return e.InteractionStatus.SsoSilent;
          case e.EventType.ACQUIRE_TOKEN_START:
            if (t.interactionType === e.InteractionType.Redirect || t.interactionType === e.InteractionType.Popup) return e.InteractionStatus.AcquireToken;
            break;
          case e.EventType.HANDLE_REDIRECT_START:
            return e.InteractionStatus.HandleRedirect;
          case e.EventType.LOGOUT_START:
            return e.InteractionStatus.Logout;
          case e.EventType.SSO_SILENT_SUCCESS:
          case e.EventType.SSO_SILENT_FAILURE:
            if (r && r !== e.InteractionStatus.SsoSilent) break;
            return e.InteractionStatus.None;
          case e.EventType.LOGOUT_END:
            if (r && r !== e.InteractionStatus.Logout) break;
            return e.InteractionStatus.None;
          case e.EventType.HANDLE_REDIRECT_END:
            if (r && r !== e.InteractionStatus.HandleRedirect) break;
            return e.InteractionStatus.None;
          case e.EventType.LOGIN_SUCCESS:
          case e.EventType.LOGIN_FAILURE:
          case e.EventType.ACQUIRE_TOKEN_SUCCESS:
          case e.EventType.ACQUIRE_TOKEN_FAILURE:
            if (t.interactionType === e.InteractionType.Redirect || t.interactionType === e.InteractionType.Popup) {
              if (r && r !== e.InteractionStatus.Login && r !== e.InteractionStatus.AcquireToken) break;
              return e.InteractionStatus.None;
            }
        }
        return null;
      }
      ,
      t;
    }());
    const zr = (function () {
      function e(e, t) {
        const r = t && t.loggerOptions || {};
        this.logger = new ae(r, Wt, Vt),
        this.cryptoOps = new Ur(this.logger),
        this.popTokenGenerator = new We(this.cryptoOps),
        this.shrParameters = e;
      }
      return e.prototype.generatePublicKeyThumbprint = function () {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (e) {
            switch (e.label) {
              case 0:
                return [4, this.popTokenGenerator.generateKid(this.shrParameters)];
              case 1:
                return [2, e.sent().kid];
            }
          }
          ));
        }
        ));
      }
      ,
      e.prototype.signRequest = function (e, t, r) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (n) {
            return [2, this.popTokenGenerator.signPayload(e, t, this.shrParameters, r)];
          }
          ));
        }
        ));
      }
      ,
      e.prototype.removeKeys = function (e) {
        return i(this, void 0, void 0, (function () {
          return a(this, (function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cryptoOps.removeTokenBindingKey(e)];
              case 1:
                return [2, t.sent()];
            }
          }
          ));
        }
        ));
      }
      ,
      e;
    }());
    e.AccountEntity = fe,
    e.AuthError = ee,
    e.AuthErrorMessage = $,
    e.AuthenticationHeaderParser = It,
    e.BrowserAuthError = kt,
    e.BrowserAuthErrorMessage = Rt,
    e.BrowserConfigurationAuthError = Bt,
    e.BrowserConfigurationAuthErrorMessage = Kt,
    e.BrowserUtils = Xt,
    e.ClientAuthError = ne,
    e.ClientAuthErrorMessage = re,
    e.ClientConfigurationError = de,
    e.ClientConfigurationErrorMessage = le,
    e.DEFAULT_IFRAME_TIMEOUT_MS = hr,
    e.EventMessageUtils = Gr,
    e.InteractionRequiredAuthError = Ke,
    e.InteractionRequiredAuthErrorMessage = Fe,
    e.Logger = ae,
    e.NavigationClient = dr,
    e.OIDC_DEFAULT_SCOPES = _,
    e.PublicClientApplication = Kr,
    e.ServerError = be,
    e.SignedHttpRequest = zr,
    e.StringUtils = oe,
    e.UrlString = ze,
    e.internals = yr,
    e.stubbedPublicClientApplication = Br,
    e.version = Vt,
    Object.defineProperty(e, '__esModule', {
      value: !0,
    });
  }
  )));