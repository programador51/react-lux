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
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var H1 = function (props) {
    return ((0, jsx_runtime_1.jsx)("h1", __assign({}, props, { className: styles_module_scss_1.default.h1 }, { children: props.children })));
};
exports.H1 = H1;
var H2 = function (props) {
    return ((0, jsx_runtime_1.jsx)("h2", __assign({}, props, { className: styles_module_scss_1.default.h2 }, { children: props.children })));
};
exports.H2 = H2;
var H3 = function (props) {
    return ((0, jsx_runtime_1.jsx)("h3", __assign({}, props, { className: styles_module_scss_1.default.h3 }, { children: props.children })));
};
exports.H3 = H3;
var H4 = function (props) {
    return ((0, jsx_runtime_1.jsx)("h4", __assign({}, props, { className: styles_module_scss_1.default.h4 }, { children: props.children })));
};
exports.H4 = H4;
var H5 = function (props) {
    return ((0, jsx_runtime_1.jsx)("h5", __assign({}, props, { className: styles_module_scss_1.default.h5 }, { children: props.children })));
};
exports.H5 = H5;
var H6 = function (props) {
    return ((0, jsx_runtime_1.jsx)("h6", __assign({}, props, { className: styles_module_scss_1.default.h6 }, { children: props.children })));
};
exports.H6 = H6;
