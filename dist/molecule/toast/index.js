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
import scss from "./styles.module.scss";
export var Toast = function (_a) {
    var body = _a.body, _b = _a.onClickClose, onClickClose = _b === void 0 ? function () { } : _b, title = _a.title;
    return (_jsxs("div", __assign({ className: scss.luxToast }, { children: [_jsxs("div", __assign({ className: scss.title }, { children: [_jsx("span", { children: title }), _jsx("span", __assign({ onClick: function (e) { return onClickClose(); } }, { children: "\u2716" }))] })), _jsx("div", __assign({ className: scss.body }, { children: _jsx("div", { children: body }) }))] })));
};
