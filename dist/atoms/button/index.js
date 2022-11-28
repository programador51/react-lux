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
import { jsx as _jsx } from "react/jsx-runtime";
import scss from "./index.module.scss";
var THEME = {
    primary: scss.primary,
    secondary: scss.secondary,
    success: scss.success,
    info: scss.info,
    warning: scss.warning,
    danger: scss.danger,
    light: scss.light,
    dark: scss.dark,
    link: scss.link,
};
export var Button = function (props) {
    var _a = props.theme, theme = _a === void 0 ? "primary" : _a;
    return (_jsx("button", __assign({}, props, { className: THEME[theme] }, { children: props.children })));
};
