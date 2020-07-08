module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n\n    _defineProperty(this, \"handleChange\", event => {\n      const {\n        target: {\n          value,\n          name\n        }\n      } = event;\n      this.setState({\n        [name]: value\n      });\n    });\n\n    _defineProperty(this, \"handleSubmit\", event => {\n      const {\n        email,\n        password\n      } = this.state;\n      event.preventDefault();\n      Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"loginUser\"])(email, password); // console.log(this.state);\n    });\n\n    this.state = {\n      email: '',\n      password: ''\n    };\n  }\n\n  render() {\n    return __jsx(\"form\", {\n      onSubmit: this.handleSubmit\n    }, __jsx(\"div\", null, __jsx(\"input\", {\n      type: \"email\",\n      name: \"email\",\n      placeholder: \"email\",\n      onChange: this.handleChange\n    })), __jsx(\"div\", null, __jsx(\"input\", {\n      type: \"password\",\n      name: \"password\",\n      placeholder: \"password\",\n      onChange: this.handleChange\n    })), __jsx(\"button\", {\n      type: \"submit\"\n    }, \"Sign In!\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz8wMzQ4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInN0YXRlIiwicHJldmVudERlZmF1bHQiLCJsb2dpblVzZXIiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQU4sU0FBd0JDLDRDQUFLLENBQUNDLFNBQTlCLENBQXdDO0FBRXBDQyxhQUFXLEdBQUc7QUFDVjs7QUFEVSwwQ0FXRUMsS0FBRCxJQUFXO0FBQ3RCLFlBQU07QUFBRUMsY0FBTSxFQUFFO0FBQUVDLGVBQUY7QUFBU0M7QUFBVDtBQUFWLFVBQThCSCxLQUFwQztBQUVBLFdBQUtJLFFBQUwsQ0FBYztBQUNaLFNBQUNELElBQUQsR0FBUUQ7QUFESSxPQUFkO0FBR0QsS0FqQlc7O0FBQUEsMENBbUJJRixLQUFELElBQVc7QUFDeEIsWUFBTTtBQUFFSyxhQUFGO0FBQVNDO0FBQVQsVUFBc0IsS0FBS0MsS0FBakM7QUFFQVAsV0FBSyxDQUFDUSxjQUFOO0FBRUFDLGlFQUFTLENBQUNKLEtBQUQsRUFBUUMsUUFBUixDQUFULENBTHdCLENBTXpCO0FBQ0EsS0ExQlc7O0FBR1YsU0FBS0MsS0FBTCxHQUFhO0FBQ1ZGLFdBQUssRUFBRSxFQURHO0FBRVZDLGNBQVEsRUFBRTtBQUZBLEtBQWI7QUFNSDs7QUFvQkRJLFFBQU0sR0FBRTtBQUNKLFdBQ0k7QUFBTSxjQUFRLEVBQUUsS0FBS0M7QUFBckIsT0FDSSxtQkFDSTtBQUFPLFVBQUksRUFBQyxPQUFaO0FBQW9CLFVBQUksRUFBQyxPQUF6QjtBQUFpQyxpQkFBVyxFQUFDLE9BQTdDO0FBQXFELGNBQVEsRUFBRSxLQUFLQztBQUFwRSxNQURKLENBREosRUFJSSxtQkFDSTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLFVBQUksRUFBQyxVQUE1QjtBQUF1QyxpQkFBVyxFQUFDLFVBQW5EO0FBQThELGNBQVEsRUFBRSxLQUFLQTtBQUE3RSxNQURKLENBSkosRUFPSTtBQUFRLFVBQUksRUFBQztBQUFiLGtCQVBKLENBREo7QUFZSDs7QUE1Q21DOztBQStDekJoQix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2dpblVzZXJ9IGZyb20gJy4uL2xpYi9hdXRoJztcblxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG5cbiAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lIH0gfSA9IGV2ZW50O1xuICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGxvZ2luVXNlcihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIFxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbiE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: loginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginUser\", function() { return loginUser; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst loginUser = async (email, password) => {\n  //response.data destructed coming back\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', {\n    email,\n    password\n  });\n  console.log(data);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImxvZ2luVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBRyxPQUFPQyxLQUFQLEVBQWNDLFFBQWQsS0FBMkI7QUFFaEQ7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBUyxNQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QjtBQUFDSixTQUFEO0FBQVFDO0FBQVIsR0FBekIsQ0FBckI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDSCxDQUxNIiwiZmlsZSI6Ii4vbGliL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgLy9yZXNwb25zZS5kYXRhIGRlc3RydWN0ZWQgY29taW5nIGJhY2tcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywge2VtYWlsLCBwYXNzd29yZH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoginForm */ \"./components/LoginForm.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Login() {\n  return __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzVCLFNBQ0ksTUFBQyw2REFBRCxPQURKO0FBR0giLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TG9naW5Gb3JtIC8+XG4gICAgKTsgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jango/Desktop/next-cookie-auth/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });