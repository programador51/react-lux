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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoSwitch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var switch_1 = require("../../atoms/switch");
var DemoSwitch = function () {
    var _a = (0, react_1.useState)(false), isAgree = _a[0], setIsAgree = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Do you agree share your personal information with the enterprise ?" }), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                    display: "inline-flex",
                } }, { children: [(0, jsx_runtime_1.jsx)(switch_1.Switch, { checked: isAgree, onChange: function (e) { return setIsAgree(e.target.checked); } }), (0, jsx_runtime_1.jsx)("span", __assign({ style: {
                            margin: "0 10px 0 10px",
                        } }, { children: isAgree ? "- Yes" : "- No" }))] }))] }));
};
exports.DemoSwitch = DemoSwitch;
