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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { ContextToast, ToastProvider } from "../../structure/GlobalToast";
import { InputText } from "../../atoms/inputText";
import { Button } from "../../atoms/button";
export var DemoToast = function () {
    var addToast = useContext(ContextToast).addToast;
    var _a = useState({
        title: "",
        body: "",
    }), info = _a[0], setInfo = _a[1];
    var appendToast = function () {
        addToast({
            body: info.body,
            title: info.title,
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(InputText, { placeholder: "Toast title", onChange: function (e) {
                    return setInfo(function (state) { return (__assign(__assign({}, state), { title: e.target.value })); });
                } }), _jsx("br", {}), _jsx("br", {}), _jsx(InputText, { onChange: function (e) {
                    return setInfo(function (state) { return (__assign(__assign({}, state), { body: e.target.value })); });
                }, placeholder: "Toast body" }), _jsx("br", {}), _jsx("br", {}), _jsx(Button, __assign({ onClick: appendToast, disabled: info.title === "" || info.body === "" }, { children: "Add" })), _jsx("br", {}), _jsx("br", {})] }));
};
export var ParentComponent = function () {
    return (_jsx(ToastProvider, { children: _jsx(DemoToast, {}) }));
};
