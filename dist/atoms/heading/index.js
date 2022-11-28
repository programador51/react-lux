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
export var H1 = function (props) {
    return (_jsx("h1", __assign({}, props, { className: scss.h1 }, { children: props.children })));
};
export var H2 = function (props) {
    return (_jsx("h2", __assign({}, props, { className: scss.h2 }, { children: props.children })));
};
export var H3 = function (props) {
    return (_jsx("h3", __assign({}, props, { className: scss.h3 }, { children: props.children })));
};
export var H4 = function (props) {
    return (_jsx("h4", __assign({}, props, { className: scss.h4 }, { children: props.children })));
};
export var H5 = function (props) {
    return (_jsx("h5", __assign({}, props, { className: scss.h5 }, { children: props.children })));
};
export var H6 = function (props) {
    return (_jsx("h6", __assign({}, props, { className: scss.h6 }, { children: props.children })));
};
