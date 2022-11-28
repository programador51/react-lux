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
import { useState } from "react";
import { Switch } from "../../atoms/switch";
export var DemoSwitch = function () {
    var _a = useState(false), isAgree = _a[0], setIsAgree = _a[1];
    return (_jsxs("div", { children: [_jsx("p", { children: "Do you agree share your personal information with the enterprise ?" }), _jsxs("div", __assign({ style: {
                    display: "inline-flex",
                } }, { children: [_jsx(Switch, { checked: isAgree, onChange: function (e) { return setIsAgree(e.target.checked); } }), _jsx("span", __assign({ style: {
                            margin: "0 10px 0 10px",
                        } }, { children: isAgree ? "- Yes" : "- No" }))] }))] }));
};
