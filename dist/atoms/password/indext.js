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
import { useEffect, useState } from "react";
import scss from "../inputText/styles.module.scss";
export var Password = function (props) {
    var _a = props.showPassword, showPassword = _a === void 0 ? false : _a;
    var _b = useState(showPassword), show = _b[0], setShow = _b[1];
    useEffect(function () {
        setShow(showPassword);
    }, [showPassword]);
    return (_jsxs("div", __assign({ className: scss.containerPassword }, { children: [_jsx("input", __assign({ type: show ? "text" : "password", className: scss.password }, props)), _jsx("button", __assign({ onClick: function (e) { return setShow(!show); }, className: scss.revealPasswordBtn }, { children: show ? "🔐" : "🔓" }))] })));
};
