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
                formSave: true
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
                  formSave: true,
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
                formSave: false,
                type: 'success',
                message: ' Mensagem enviada com sucesso!',
                formSuccess: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JhY2FvLmpzIl0sIm5hbWVzIjpbIk9yYWNhbyIsInVzZVN0YXRlIiwibm9tZSIsImVtYWlsIiwibXNnIiwib3JhY2FvIiwic2V0T3JhY2FvIiwibGltcG8iLCJzZXRMaW1wbyIsIm9uY2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlbnZNc2ciLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmb3JtU3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFY0Msc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLE9BQUcsRUFBRTtBQUg0QixHQUFELENBRnRCO0FBQUEsTUFFUEMsTUFGTztBQUFBLE1BRUNDLFNBRkQ7O0FBQUEsbUJBUVlMLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxPQUFHLEVBQUU7QUFIMEIsR0FBRCxDQVJwQjtBQUFBLE1BUVBHLEtBUk87QUFBQSxNQVFBQyxRQVJBOztBQWNkLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUlKLFNBQVMsaUNBQU1ELE1BQU4scUdBQWVLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUF4QixFQUErQkYsQ0FBQyxDQUFD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QUFBLDRVQUZKLG9GQU80RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUDVFLGlCQVFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSZixDQUpKLENBeEJKLENBREosQ0FQSixDQXBCSixFQXNFSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0RUosQ0FESjtBQTBFSDs7R0FwSlFkLE07O0tBQUFBLE07QUFzSk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yYWNhby4wNDFmNWZmZDExN2EyNWYyNzlkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25ldGUvTWVudS5qcyc7XHJcbmltcG9ydCBSb2RhUGUgZnJvbSAnLi4vY29tcG9uZXRlL1JvZGFQZSc7XHJcblxyXG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbnRhaW5lciwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gT3JhY2FvKCkge1xyXG5cclxuICAgIGNvbnN0IFtvcmFjYW8sIHNldE9yYWNhb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbm9tZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIG1zZzogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsaW1wbywgc2V0TGltcG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBtc2c6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbmNoYW5nZUlucHV0ID0gZSA9PiBzZXRPcmFjYW8oeyAuLi5vcmFjYW8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBlbnZNc2cgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdmFsaWRhdGUoKSkgcmV0dXJuO1xyXG4gICAgICAgIHNldFJlc3BvbnNlKHsgZm9ybVNhdmU6IHRydWUgfSlcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc2licmUyMDIwLWNvbS1ici51bWJsZXIubmV0L29yYWNhb2AsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYFBPU1RgLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3JhY2FvKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVudik7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUVudi5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdlc3RlIGFxdWknXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRMaW1wbyh7XHJcbiAgICAgICAgICAgICAgICBub21lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtc2c6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcgTWVuc2FnZW0gZW52aWFkYSBjb20gc3VjZXNzbyEnLFxyXG4gICAgICAgICAgICAgICAgZm9ybVN1Y2Nlc3M6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFvcmFjYW8ubm9tZSkgcmV0dXJuIHNldFJlc3BvbnNlKHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1ByZWVuY2hlbWVudG8gZG8gY2FtcG8gTm9tZSDDqSBvYnJpZ2F0w7NyaW8hJyB9KTtcclxuICAgICAgICBpZiAoIW9yYWNhby5tc2cpIHJldHVybiBzZXRSZXNwb25zZSh7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdQcmVlbmNoZW1lbnRvIGRhIG1lbnNhZ2VtIMOpIG9icmlnYXTDs3JpbyEnIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5PcmHDp8OjbzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIGNvbnRlbnQ9J2luZGV4LCBmb2xsb3cnIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3JhaSB1bnMgcGVsb3Mgb3V0cm9zLiBTZWd1bmRhIElncmVqYSBCYXRpc3RhIG5vIFJlY2FudG8gZGFzIEVtYXMtREZcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkVybmlsc29uIERhbmllbCBMaW1hIGRlIFNvdXphXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImhlYWQtb3JhY2FvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e2AuaGVhZC1vcmFjYW97XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJ1dHRvbTo1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3BldGljYW8ucG5nKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW4gISBpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTggdGV4dC1jZW50ZXJcIj5PcmFpIHNlbSBjZXNzYXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJmb3JtLW9yYWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntgLmhlYWQtb3JhY2Fve1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1idXR0b206NTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVuICEgaW1wb3J0YW50O1xyXG4gICAgICAgICB9YH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmZWF0dXJldHRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtlbnZNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJub21lXCI+Tm9tZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibm9tZVwiIGlkPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIFNldSBOb21lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgU2V1IEVtYWlsLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJtc2dcIj5NZW5zYWdlbTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cIm1zZ1wiIGlkPVwibWdzXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYXF1aSBzZXUgcGVkaWRvIGRlIG9yYcOnw6NvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS5mb3JtU2F2ZSA/IDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJ3YXJuaW5nXCIgZGlzYWJsZWQ+RW52aWFyLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gOiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiPkVudmlhcjwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmZWF0dXJldHRlLWhlYWRpbmdcIj5PcmFpIHNlbSBjZXNzYXIgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5BIG9yYcOnw6NvIGRvcyBqdXN0b3MgcG9kZW0gbXVpdG8gZW0gc2V1cyBlZmVpdG9zIC0gVGlhZ28gNToxNi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm9zc29zIGVuY29udHJvIGRlIG9yYcOnw6NvPC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IE5vc3NvcyBlbmNvbnRyb3MgZGUgb3Jhw6fDtWVzIHPDo28gbmFzIHNlZ3VuZGEgYXMgMDg6MDBocnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFydGEgYXMgMjA6MDAgZSBzZXh0YSBhcyAxNjpocnMgbmVzdGVzIGVuY29udHJvcyBub3NzYXMgZXF1aXBlcyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yYcOnw6NvIGVzdGFyYW0gb3JhbmRvIHBvciBzZXVzIHBlZGlkb3Mgbm8gYWx0YXIgaW50ZXJjZWRlbmRvIGUgY2xhbWFuZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbyBEZXVzIEFsdGlzc2ltbyBxdWUgbsOjbyB0YXJkYXLDoSBlbSBhdGVuZGUtbG8sIHBvciB0YW50byBmYcOnYSBzZXUgcGVkaWRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSBjb250ZSBjb20gbyBhcG9pbyBkYSBTaWJyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWRpLCBlIGRhci1zZS12b3Mtw6E7IGJ1c2NhaSwgZSBlbmNvbnRyYXJlaXM7IGJhdGVpLCBlIGFicmlyLXNlLXZvcy3DoS4uLjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGV1cyA3OjcgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICA8Um9kYVBlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yYWNhbzsiXSwic291cmNlUm9vdCI6IiJ9