/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var onigasmLib = null;
var onigurumaLib = null;
function getOnigasm() {
    if (!onigasmLib) {
        var onigasmModule_1 = require('onigasm');
        var fs = require('fs');
        var path = require('path');
        var wasmBin = fs.readFileSync(path.join(__dirname, '../node_modules/onigasm/lib/onigasm.wasm')).buffer;
        onigasmLib = onigasmModule_1.loadWASM(wasmBin).then(function (_) {
            return {
                createOnigScanner: function (patterns) { return new onigasmModule_1.OnigScanner(patterns); },
                createOnigString: function (s) { return new onigasmModule_1.OnigString(s); }
            };
        });
    }
    return onigasmLib;
}
exports.getOnigasm = getOnigasm;
function getOniguruma() {
    if (!onigurumaLib) {
        var getOnigModule_1 = (function () {
            var onigurumaModule = null;
            return function () {
                if (!onigurumaModule) {
                    onigurumaModule = require('oniguruma');
                }
                return onigurumaModule;
            };
        })();
        onigurumaLib = Promise.resolve({
            createOnigScanner: function (patterns) {
                var onigurumaModule = getOnigModule_1();
                return new onigurumaModule.OnigScanner(patterns);
            },
            createOnigString: function (s) {
                var onigurumaModule = getOnigModule_1();
                var string = new onigurumaModule.OnigString(s);
                string.content = s;
                return string;
            }
        });
    }
    return onigurumaLib;
}
exports.getOniguruma = getOniguruma;
//# sourceMappingURL=onigLibs.js.map