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
exports.Radio = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Radio = function (props) {
    var domCheckbox = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.luxRadio }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({ type: "radio" }, props, { ref: domCheckbox })), (0, jsx_runtime_1.jsx)("label", { style: props.style, onClick: function () { var _a; return (_a = domCheckbox.current) === null || _a === void 0 ? void 0 : _a.click(); } })] })));
};
exports.Radio = Radio;
