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
exports.InputText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var InputText = function (props) {
    if (props.isValid === undefined)
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.containerInput }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ className: styles_module_scss_1.default.input }, props)) })));
    if (props.isValid)
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.containerInput }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ className: styles_module_scss_1.default.inputValid }, props)) })));
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.containerInput }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ className: styles_module_scss_1.default.inputInvalid }, props)) })));
};
exports.InputText = InputText;
