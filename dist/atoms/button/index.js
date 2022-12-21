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
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var index_module_scss_1 = __importDefault(require("./index.module.scss"));
var THEME = {
    primary: index_module_scss_1.default.primary,
    secondary: index_module_scss_1.default.secondary,
    success: index_module_scss_1.default.success,
    info: index_module_scss_1.default.info,
    warning: index_module_scss_1.default.warning,
    danger: index_module_scss_1.default.danger,
    light: index_module_scss_1.default.light,
    dark: index_module_scss_1.default.dark,
    link: index_module_scss_1.default.link,
};
var Button = function (props) {
    var _a = props.theme, theme = _a === void 0 ? "primary" : _a;
    return ((0, jsx_runtime_1.jsx)("button", __assign({}, props, { className: THEME[theme] }, { children: props.children })));
};
exports.Button = Button;
