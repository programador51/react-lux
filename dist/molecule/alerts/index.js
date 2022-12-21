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
exports.Alert = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var heading_1 = require("../../atoms/heading");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var THEMES = {
    warning: styles_module_scss_1.default.warning,
    danger: styles_module_scss_1.default.danger,
    success: styles_module_scss_1.default.success,
    info: styles_module_scss_1.default.info,
    primary: styles_module_scss_1.default.primary,
    secondary: styles_module_scss_1.default.secondary,
};
var Alert = function (_a) {
    var children = _a.children, _b = _a.title, title = _b === void 0 ? undefined : _b, _c = _a.theme, theme = _c === void 0 ? "warning" : _c, _d = _a.onClickClose, onClickClose = _d === void 0 ? function () { } : _d;
    if (title === undefined)
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: THEMES[theme] }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.bodyAlert }, { children: [(0, jsx_runtime_1.jsx)("div", { children: children }), (0, jsx_runtime_1.jsx)("span", __assign({ className: styles_module_scss_1.default.close, onClick: function () { return onClickClose(); } }, { children: "\u2716" }))] })) })));
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: THEMES[theme] }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.title }, { children: [(0, jsx_runtime_1.jsx)(heading_1.H4, __assign({ style: {
                            margin: 0,
                        } }, { children: title })), (0, jsx_runtime_1.jsx)("span", __assign({ onClick: function () { return onClickClose(); } }, { children: "\u2716" }))] })), children] })));
};
exports.Alert = Alert;
