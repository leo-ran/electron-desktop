module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _electron = __webpack_require__(/*! electron */ \"electron\");\n\nvar winURL =  true ? \"http://localhost:9080\" : undefined;\n\nvar mainWindow = void 0;\n\nfunction createWindow() {\n    mainWindow = new _electron.BrowserWindow({\n        height: 563,\n        width: 900,\n        useContentSize: true,\n        // frame: process.platform !== 'darwin' ? false : true,\n        titleBarStyle: \"hiddenInset\",\n        backgroundColor: \"#fff\",\n        show: false\n    });\n\n    mainWindow.loadURL(winURL);\n\n    mainWindow.on(\"closed\", function () {\n        mainWindow = null;\n        _electron.app.exit();\n    });\n\n    mainWindow.on(\"ready-to-show\", function () {\n        mainWindow.show();\n        // auto show DevTools\n        if (true) {\n            mainWindow.webContents.openDevTools();\n        }\n    });\n\n    mainWindow.flashFrame(true);\n}\n\n_electron.app.on(\"ready\", createWindow);\n\n_electron.app.on(\"window-all-closed\", function () {\n    if (process.platform !== \"darwin\") {\n        _electron.app.quit();\n    }\n});\n\n_electron.app.on(\"activate\", function () {\n    if (mainWindow === null) {\n        createWindow();\n    }\n});\n\n// 禁止多个app实例启动\nvar shouldQuit = _electron.app.makeSingleInstance(function () {\n    if (mainWindow) {\n        if (mainWindow.isMinimized()) {\n            mainWindow.restore();\n            mainWindow.focus();\n        }\n    }\n});\nif (shouldQuit) {\n    _electron.app.quit();\n}\n\n//# sourceURL=webpack:///./src/main/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ })

/******/ });