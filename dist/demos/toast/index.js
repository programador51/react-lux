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
exports.ParentComponent = exports.DemoToast = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlobalToast_1 = require("../../structure/GlobalToast");
var inputText_1 = require("../../atoms/inputText");
var button_1 = require("../../atoms/button");
var DemoToast = function () {
    var addToast = (0, react_1.useContext)(GlobalToast_1.ContextToast).addToast;
    var _a = (0, react_1.useState)({
        title: "",
        body: "",
    }), info = _a[0], setInfo = _a[1];
    var appendToast = function () {
        addToast({
            body: info.body,
            title: info.title,
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(inputText_1.InputText, { placeholder: "Toast title", onChange: function (e) {
                    return setInfo(function (state) { return (__assign(__assign({}, state), { title: e.target.value })); });
                } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(inputText_1.InputText, { onChange: function (e) {
                    return setInfo(function (state) { return (__assign(__assign({}, state), { body: e.target.value })); });
                }, placeholder: "Toast body" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: appendToast, disabled: info.title === "" || info.body === "" }, { children: "Add" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {})] }));
};
exports.DemoToast = DemoToast;
var ParentComponent = function () {
    return ((0, jsx_runtime_1.jsx)(GlobalToast_1.ToastProvider, { children: (0, jsx_runtime_1.jsx)(exports.DemoToast, {}) }));
};
exports.ParentComponent = ParentComponent;
