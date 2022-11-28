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
import { useRef } from "react";
import scss from "./styles.module.scss";
export var Switch = function (props) {
    var domCheckbox = useRef(null);
    return (_jsxs("div", __assign({ className: scss.luxSwitch }, { children: [_jsx("input", __assign({ type: "checkbox", ref: domCheckbox }, props)), _jsx("label", { onClick: function () { var _a; return (_a = domCheckbox.current) === null || _a === void 0 ? void 0 : _a.click(); } })] })));
};
