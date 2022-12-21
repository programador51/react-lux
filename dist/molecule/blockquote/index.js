"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockQuote = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var BlockQuote = function (_a) {
    var quote = _a.quote, autor = _a.autor, _b = _a.textAlign, textAlign = _b === void 0 ? "left" : _b;
    return ((0, jsx_runtime_1.jsxs)("figure", __assign({ className: styles_module_scss_1.default.containerQuote }, { children: [(0, jsx_runtime_1.jsx)("blockquote", __assign({ style: {
                    margin: 0,
                    textAlign: textAlign,
                } }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: styles_module_scss_1.default.blockquote }, { children: quote })) })), (0, jsx_runtime_1.jsx)("figcaption", __assign({ className: styles_module_scss_1.default.blockquoteCaption, style: {
                    textAlign: textAlign,
                } }, { children: autor }))] })));
};
exports.BlockQuote = BlockQuote;
