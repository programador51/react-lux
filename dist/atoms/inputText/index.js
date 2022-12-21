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
import { jsx as _jsx } from "react/jsx-runtime";
import scss from "./styles.module.scss";
export var InputText = function (props) {
    if (props.isValid === undefined)
        return (_jsx("div", __assign({ className: scss.containerInput }, { children: _jsx("input", __assign({ className: scss.input }, props)) })));
    if (props.isValid)
        return (_jsx("div", __assign({ className: scss.containerInput }, { children: _jsx("input", __assign({ className: scss.inputValid }, props)) })));
    return (_jsx("div", __assign({ className: scss.containerInput }, { children: _jsx("input", __assign({ className: scss.inputInvalid }, props)) })));
};
