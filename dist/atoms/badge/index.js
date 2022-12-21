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
exports.Badge = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var THEMES = {
    primary: styles_module_scss_1.default.badgePrimary,
    secondary: styles_module_scss_1.default.badgeSecondary,
    success: styles_module_scss_1.default.badgeSuccess,
    danger: styles_module_scss_1.default.badgeDanger,
    warning: styles_module_scss_1.default.badgeWarning,
    info: styles_module_scss_1.default.badgeInfo,
    light: styles_module_scss_1.default.badgeLight,
    dark: styles_module_scss_1.default.badgeDark,
};
var Badge = function (props) {
    var theme = props.theme, children = props.children;
    if (props.rounded === undefined) {
        return ((0, jsx_runtime_1.jsx)("span", __assign({}, props, { className: THEMES[theme] }, { children: children })));
    }
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.badgeRounded }, { children: (0, jsx_runtime_1.jsx)("span", __assign({}, props, { className: THEMES[theme] }, { children: children })) })));
};
exports.Badge = Badge;
