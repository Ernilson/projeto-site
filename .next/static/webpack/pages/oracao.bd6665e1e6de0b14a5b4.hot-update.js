webpackHotUpdate_N_E("pages/oracao",{

/***/ "./pages/oracao.js":
/*!*************************!*\
  !*** ./pages/oracao.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componete/Menu.js */ "./componete/Menu.js");
/* harmony import */ var _componete_RodaPe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componete/RodaPe */ "./componete/RodaPe.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\ernil.LAPTOP-FID40H3U\\OneDrive\\\xC1rea de Trabalho\\site-sibre\\pages\\oracao.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Oracao() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    nome: '',
    email: '',
    msg: ''
  }),
      oracao = _useState[0],
      setOracao = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    nome: '',
    email: '',
    msg: ''
  }),
      limpo = _useState2[0],
      setLimpo = _useState2[1];

  var onchangeInput = function onchangeInput(e) {
    return setOracao(_objectSpread(_objectSpread({}, oracao), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState3[0],
      setResponse = _useState3[1];

  var envMsg = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (validate()) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              setResponse({
                formSave: false
              });
              _context.prev = 4;
              _context.next = 7;
              return fetch("https://sibre2020-com-br.umbler.net/oracao", {
                method: "POST",
                body: JSON.stringify(oracao),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 7:
              res = _context.sent;
              _context.next = 10;
              return res.json();

            case 10:
              responseEnv = _context.sent;
              console.log(responseEnv);

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'success',
                  message: 'este aqui'
                });
              }

              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](4);
              setLimpo({
                nome: null,
                email: null,
                msg: null
              });
              setResponse({
                formSave: true,
                type: 'success',
                message: ' Mensagem enviada com sucesso!'
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 15]]);
    }));

    return function envMsg(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var validate = function validate() {
    if (!oracao.nome) return setResponse({
      type: 'error',
      message: 'Preenchemento do campo Nome é obrigatório!'
    });
    if (!oracao.msg) return setResponse({
      type: 'error',
      message: 'Preenchemento da mensagem é obrigatório!'
    });
    return true;
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Ora\xE7\xE3o"), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Orai uns pelos outros. Segunda Igreja Batista no Recanto das Emas-DF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "author",
    content: "Ernilson Daniel Lima de Souza",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })), __jsx(_componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "head-oracao",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, ".head-oracao{\n                padding-top: 160px;\n                padding-buttom:5px;\n                background-image: url(/peticao.png);\n                margin-bottom: 0ren ! important;\n         }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "display-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "Orai sem cessar"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "form-oracao",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, ".head-oracao{\n                padding-top: 160px;\n                padding-buttom:55px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row featurette",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, response.type === 'success' ? __jsx("div", {
    className: "alert alert-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 60
    }
  }, response.message) : "", response.type === 'error' ? __jsx("div", {
    className: "alert alert-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 58
    }
  }, response.message) : "", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: envMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "nome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "Nome:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "text",
    name: "nome",
    id: "nome",
    placeholder: "Digite Seu Nome...",
    onChange: onchangeInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Digite Seu Email...",
    onChange: onchangeInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "msg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 37
    }
  }, "Mensagem:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "textarea",
    name: "msg",
    id: "mgs",
    placeholder: "Digite aqui seu pedido de ora\xE7\xE3o",
    onChange: onchangeInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 37
    }
  })), response.formSave ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 54
    }
  }, "Enviar...") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 47
    }
  }, "Enviar"))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 51
    }
  }), __jsx("h3", {
    className: "featurette-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, "Orai sem cessar "), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, "A ora\xE7\xE3o dos justos podem muito em seus efeitos - Tiago 5:16."), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }), __jsx("address", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }, "Nossos encontro de ora\xE7\xE3o"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 75
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, " Nossos encontros de ora\xE7\xF5es s\xE3o nas segunda as 08:00hrs quarta as 20:00 e sexta as 16:hrs nestes encontros nossas equipes de ora\xE7\xE3o estaram orando por seus pedidos no altar intercedendo e clamando ao Deus Altissimo que n\xE3o tardar\xE1 em atende-lo, por tanto fa\xE7a seu pedido e conte com o apoio da Sibre"), "Pedi, e dar-se-vos-\xE1; buscai, e encontrareis; batei, e abrir-se-vos-\xE1...", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 105
    }
  }), "Mateus 7:7 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 44
    }
  })))))), __jsx(_componete_RodaPe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }));
}

_s(Oracao, "36VeE/O2qkICoioIZ2LwTZkS1zY=");

_c = Oracao;
/* harmony default export */ __webpack_exports__["default"] = (Oracao);

var _c;

$RefreshReg$(_c, "Oracao");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JhY2FvLmpzIl0sIm5hbWVzIjpbIk9yYWNhbyIsInVzZVN0YXRlIiwibm9tZSIsImVtYWlsIiwibXNnIiwib3JhY2FvIiwic2V0T3JhY2FvIiwibGltcG8iLCJzZXRMaW1wbyIsIm9uY2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlbnZNc2ciLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRWNDLHNEQUFRLENBQUM7QUFDakNDLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsU0FBSyxFQUFFLEVBRjBCO0FBR2pDQyxPQUFHLEVBQUU7QUFINEIsR0FBRCxDQUZ0QjtBQUFBLE1BRVBDLE1BRk87QUFBQSxNQUVDQyxTQUZEOztBQUFBLG1CQVFZTCxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsT0FBRyxFQUFFO0FBSDBCLEdBQUQsQ0FScEI7QUFBQSxNQVFQRyxLQVJPO0FBQUEsTUFRQUMsUUFSQTs7QUFjZCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFJSixTQUFTLGlDQUFNRCxNQUFOLHFHQUFlSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBeEIsRUFBK0JGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxL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QUFBO0FBQUE7QUFBQSxJQVA1RSxpQkFRZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUmYsQ0FKSixDQXhCSixDQURKLENBUEosQ0FwQkosRUFzRUksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEVKLENBREo7QUEwRUg7O0dBcEpRZCxNOztLQUFBQSxNO0FBc0pNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmFjYW8uYmQ2NjY1ZTFlNmRlMGIxNGE1YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZXRlL01lbnUuanMnO1xyXG5pbXBvcnQgUm9kYVBlIGZyb20gJy4uL2NvbXBvbmV0ZS9Sb2RhUGUnO1xyXG5cclxuaW1wb3J0IHsgSnVtYm90cm9uLCBDb250YWluZXIsIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsLCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIE9yYWNhbygpIHtcclxuXHJcbiAgICBjb25zdCBbb3JhY2FvLCBzZXRPcmFjYW9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBtc2c6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbbGltcG8sIHNldExpbXBvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBub21lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgbXNnOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25jaGFuZ2VJbnB1dCA9IGUgPT4gc2V0T3JhY2FvKHsgLi4ub3JhY2FvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZW52TXNnID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXZhbGlkYXRlKCkpIHJldHVybjtcclxuICAgICAgICBzZXRSZXNwb25zZSh7IGZvcm1TYXZlOiBmYWxzZSB9KVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zaWJyZTIwMjAtY29tLWJyLnVtYmxlci5uZXQvb3JhY2FvYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBgUE9TVGAsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmFjYW8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRW52LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdlc3RlIGFxdWknXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRMaW1wbyh7XHJcbiAgICAgICAgICAgICAgICBub21lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtc2c6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIGZvcm1TYXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJyBNZW5zYWdlbSBlbnZpYWRhIGNvbSBzdWNlc3NvIScsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIW9yYWNhby5ub21lKSByZXR1cm4gc2V0UmVzcG9uc2UoeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiAnUHJlZW5jaGVtZW50byBkbyBjYW1wbyBOb21lIMOpIG9icmlnYXTDs3JpbyEnIH0pO1xyXG4gICAgICAgIGlmICghb3JhY2FvLm1zZykgcmV0dXJuIHNldFJlc3BvbnNlKHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1ByZWVuY2hlbWVudG8gZGEgbWVuc2FnZW0gw6kgb2JyaWdhdMOzcmlvIScgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk9yYcOnw6NvPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXgsIGZvbGxvdycgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPcmFpIHVucyBwZWxvcyBvdXRyb3MuIFNlZ3VuZGEgSWdyZWphIEJhdGlzdGEgbm8gUmVjYW50byBkYXMgRW1hcy1ERlwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRXJuaWxzb24gRGFuaWVsIExpbWEgZGUgU291emFcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiaGVhZC1vcmFjYW9cIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT57YC5oZWFkLW9yYWNhb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYnV0dG9tOjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcGV0aWNhby5wbmcpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbiAhIGltcG9ydGFudDtcclxuICAgICAgICAgfWB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktOCB0ZXh0LWNlbnRlclwiPk9yYWkgc2VtIGNlc3NhcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tb3JhY2FvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e2AuaGVhZC1vcmFjYW97XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJ1dHRvbTo1NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW4gISBpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZlYXR1cmV0dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz57cmVzcG9uc2UubWVzc2FnZX08L2Rpdj4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyJz57cmVzcG9uc2UubWVzc2FnZX08L2Rpdj4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Vudk1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5vbWVcIj5Ob21lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJub21lXCIgaWQ9XCJub21lXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgU2V1IE5vbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBTZXUgRW1haWwuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm1zZ1wiPk1lbnNhZ2VtOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwibXNnXCIgaWQ9XCJtZ3NcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhcXVpIHNldSBwZWRpZG8gZGUgb3Jhw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLmZvcm1TYXZlID8gPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cIndhcm5pbmdcIiBkaXNhYmxlZD5FbnZpYXIuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiA6IDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJ3YXJuaW5nXCI+RW52aWFyPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZlYXR1cmV0dGUtaGVhZGluZ1wiPk9yYWkgc2VtIGNlc3NhciA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkEgb3Jhw6fDo28gZG9zIGp1c3RvcyBwb2RlbSBtdWl0byBlbSBzZXVzIGVmZWl0b3MgLSBUaWFnbyA1OjE2LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3Nzb3MgZW5jb250cm8gZGUgb3Jhw6fDo288L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gTm9zc29zIGVuY29udHJvcyBkZSBvcmHDp8O1ZXMgc8OjbyBuYXMgc2VndW5kYSBhcyAwODowMGhyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YXJ0YSBhcyAyMDowMCBlIHNleHRhIGFzIDE2OmhycyBuZXN0ZXMgZW5jb250cm9zIG5vc3NhcyBlcXVpcGVzIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Jhw6fDo28gZXN0YXJhbSBvcmFuZG8gcG9yIHNldXMgcGVkaWRvcyBubyBhbHRhciBpbnRlcmNlZGVuZG8gZSBjbGFtYW5kb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFvIERldXMgQWx0aXNzaW1vIHF1ZSBuw6NvIHRhcmRhcsOhIGVtIGF0ZW5kZS1sbywgcG9yIHRhbnRvIGZhw6dhIHNldSBwZWRpZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlIGNvbnRlIGNvbSBvIGFwb2lvIGRhIFNpYnJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlZGksIGUgZGFyLXNlLXZvcy3DoTsgYnVzY2FpLCBlIGVuY29udHJhcmVpczsgYmF0ZWksIGUgYWJyaXItc2Utdm9zLcOhLi4uPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0ZXVzIDc6NyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDxSb2RhUGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JhY2FvOyJdLCJzb3VyY2VSb290IjoiIn0=