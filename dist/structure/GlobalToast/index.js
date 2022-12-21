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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProvider = exports.ContextToast = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var toast_1 = require("../../molecule/toast");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
exports.ContextToast = (0, react_1.createContext)({
    addToast: function (toast) { },
    toasts: [],
});
var ToastProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), toasts = _b[0], setToasts = _b[1];
    /**
     * Add a new toast item into the component
     * @param toast - Information to append into the list
     */
    var addToast = function (toast) {
        console.log(toast);
        var newToastList = __spreadArray([toast], toasts, true);
        setToasts(newToastList);
    };
    /**
     * Delete the item toast from the list without the user clicks the item
     * @param index - Index position of the element to delete
     */
    var deleteToast = function (index) {
        var newToastList = toasts.filter(function (toast, i) { return i !== index; });
        setToasts(newToastList);
    };
    return ((0, jsx_runtime_1.jsxs)(exports.ContextToast.Provider, __assign({ value: { addToast: addToast, toasts: toasts } }, { children: [children, (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.containerToasts }, { children: toasts.map(function (toast, i) { return ((0, jsx_runtime_1.jsx)(toast_1.Toast, __assign({}, toast, { onClickClose: function () { return deleteToast(i); } }))); }) }))] })));
};
exports.ToastProvider = ToastProvider;
