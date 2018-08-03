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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst winURL =  true  ? 'http://localhost:9080' : undefined\r\n\r\nlet mainWindow\r\n\r\nfunction createWindow(){\r\n    mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\r\n        height: 563,\r\n        width: 900,\r\n        useContentSize:true,\r\n        // frame: process.platform !== 'darwin' ? false : true,\r\n        titleBarStyle: 'hiddenInset',\r\n        backgroundColor: \"#fff\",\r\n        // show: false\r\n    })\r\n\r\n    mainWindow.loadURL(winURL)\r\n\r\n    \r\n    mainWindow.on('closed', () => {\r\n        mainWindow = null\r\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].exit()\r\n    })\r\n\r\n    mainWindow.on('ready-to-show', () => {\r\n        mainWindow.show()\r\n    })\r\n\r\n    mainWindow.flashFrame(true)\r\n}\r\n\r\n\r\n\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', createWindow)\r\n\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\r\n    if (process.platform !== 'darwin') {\r\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit()\r\n    }\r\n})\r\n\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\r\n    if (mainWindow === null) {\r\n        createWindow()\r\n    }\r\n})\r\n\r\n\r\n// 禁止多个app实例启动\r\nconst shouldQuit = electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].makeSingleInstance((commandLine, workingDirectory) => {\r\n    if (mainWindow) {\r\n        if (mainWindow.isMinimized()) mainWindow.restore()\r\n        mainWindow.focus()\r\n    }\r\n})\r\nif (shouldQuit) {\r\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit()\r\n}\r\n \r\nconst template = [\r\n    {\r\n      label: 'Edit',\r\n      submenu: [\r\n        {role: 'undo'},\r\n        {role: 'redo'},\r\n        {type: 'separator'},\r\n        {role: 'cut'},\r\n        {role: 'copy'},\r\n        {role: 'paste'},\r\n        {role: 'pasteandmatchstyle'},\r\n        {role: 'delete'},\r\n        {role: 'selectall'}\r\n      ]\r\n    },\r\n    {\r\n      label: 'View',\r\n      submenu: [\r\n        {role: 'reload'},\r\n        {role: 'forcereload'},\r\n        {role: 'toggledevtools'},\r\n        {type: 'separator'},\r\n        {role: 'resetzoom'},\r\n        {role: 'zoomin'},\r\n        {role: 'zoomout'},\r\n        {type: 'separator'},\r\n        {role: 'togglefullscreen'}\r\n      ]\r\n    },\r\n    {\r\n      role: 'window',\r\n      submenu: [\r\n        {role: 'minimize'},\r\n        {role: 'close'}\r\n      ]\r\n    },\r\n    {\r\n      role: 'help',\r\n      submenu: [\r\n        {\r\n          label: 'Learn More',\r\n          click () { __webpack_require__(/*! electron */ \"electron\").shell.openExternal('https://electronjs.org') }\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n  \r\n  if (process.platform === 'darwin') {\r\n    template.unshift({\r\n      label: electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].getName(),\r\n      submenu: [\r\n        {role: 'about'},\r\n        {type: 'separator'},\r\n        {role: 'services', submenu: []},\r\n        {type: 'separator'},\r\n        {role: 'hide'},\r\n        {role: 'hideothers'},\r\n        {role: 'unhide'},\r\n        {type: 'separator'},\r\n        {role: 'quit'}\r\n      ]\r\n    })\r\n  \r\n    // Edit menu\r\n    template[1].submenu.push(\r\n      {type: 'separator'},\r\n      {\r\n        label: 'Speech',\r\n        submenu: [\r\n          {role: 'startspeaking'},\r\n          {role: 'stopspeaking'}\r\n        ]\r\n      }\r\n    )\r\n  \r\n    // Window menu\r\n    template[3].submenu = [\r\n      {role: 'close'},\r\n      {role: 'minimize'},\r\n      {role: 'zoom'},\r\n      {type: 'separator'},\r\n      {role: 'front'}\r\n    ]\r\n  }\r\n  \r\n  const menu = electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].buildFromTemplate(template)\r\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].setApplicationMenu(menu)\r\n  \n\n//# sourceURL=webpack:///./src/main/index.js?");

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