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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { H4 } from "../../atoms/heading";
import scss from "./styles.module.scss";
var THEMES = {
    warning: scss.warning,
    danger: scss.danger,
    success: scss.success,
    info: scss.info,
    primary: scss.primary,
    secondary: scss.secondary,
};
export var Alert = function (_a) {
    var children = _a.children, _b = _a.title, title = _b === void 0 ? undefined : _b, _c = _a.theme, theme = _c === void 0 ? "warning" : _c, _d = _a.onClickClose, onClickClose = _d === void 0 ? function () { } : _d;
    if (title === undefined)
        return (_jsx("div", __assign({ className: THEMES[theme] }, { children: _jsxs("div", __assign({ className: scss.bodyAlert }, { children: [_jsx("div", { children: children }), _jsx("span", __assign({ className: scss.close, onClick: function () { return onClickClose(); } }, { children: "\u2716" }))] })) })));
    return (_jsxs("div", __assign({ className: THEMES[theme] }, { children: [_jsxs("div", __assign({ className: scss.title }, { children: [_jsx(H4, __assign({ style: {
                            margin: 0,
                        } }, { children: title })), _jsx("span", __assign({ onClick: function () { return onClickClose(); } }, { children: "\u2716" }))] })), children] })));
};
