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
import scss from "./styles.module.scss";
var THEMES = {
    primary: scss.badgePrimary,
    secondary: scss.badgeSecondary,
    success: scss.badgeSuccess,
    danger: scss.badgeDanger,
    warning: scss.badgeWarning,
    info: scss.badgeInfo,
    light: scss.badgeLight,
    dark: scss.badgeDark,
};
export var Badge = function (props) {
    var theme = props.theme, children = props.children;
    if (props.rounded === undefined) {
        return (_jsx("span", __assign({}, props, { className: THEMES[theme] }, { children: children })));
    }
    return (_jsx("div", __assign({ className: scss.badgeRounded }, { children: _jsx("span", __assign({}, props, { className: THEMES[theme] }, { children: children })) })));
};
