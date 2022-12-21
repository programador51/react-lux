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
exports.Password = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_module_scss_1 = __importDefault(require("../inputText/styles.module.scss"));
var Password = function (props) {
    var _a = props.showPassword, showPassword = _a === void 0 ? false : _a;
    var _b = (0, react_1.useState)(showPassword), show = _b[0], setShow = _b[1];
    (0, react_1.useEffect)(function () {
        setShow(showPassword);
    }, [showPassword]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.containerPassword }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({ type: show ? "text" : "password", className: styles_module_scss_1.default.password }, props)), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function (e) { return setShow(!show); }, className: styles_module_scss_1.default.revealPasswordBtn }, { children: show ? "🔐" : "🔓" }))] })));
};
exports.Password = Password;
