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
exports.Toast = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Toast = function (_a) {
    var body = _a.body, _b = _a.onClickClose, onClickClose = _b === void 0 ? function () { } : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.luxToast }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.title }, { children: [(0, jsx_runtime_1.jsx)("span", { children: title }), (0, jsx_runtime_1.jsx)("span", __assign({ onClick: function (e) { return onClickClose(); } }, { children: "\u2716" }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.body }, { children: (0, jsx_runtime_1.jsx)("div", { children: body }) }))] })));
};
exports.Toast = Toast;
