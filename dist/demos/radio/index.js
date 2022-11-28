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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Radio } from "../../atoms/radio";
export var DemoRadio = function () {
    return (_jsxs(_Fragment, { children: [_jsx("p", { children: "Languague program used on the client side for web development" }), _jsxs("div", __assign({ style: {
                    display: "inline-flex",
                    flexDirection: "column",
                } }, { children: [_jsxs("label", __assign({ style: {
                            display: "inline-flex",
                            cursor: "pointer",
                            padding: "5px 10px",
                            margin: "0 0 10px 0",
                        }, htmlFor: "ansA" }, { children: [_jsx(Radio, { style: {
                                    margin: "0 10px 0 0",
                                }, name: "question1", id: "ansA" }), "Javascript"] })), _jsxs("label", __assign({ style: {
                            display: "inline-flex",
                            cursor: "pointer",
                            padding: "5px 10px",
                            margin: "0 0 10px 0",
                        }, htmlFor: "ansB" }, { children: [_jsx(Radio, { style: {
                                    margin: "0 10px 0 0",
                                }, name: "question1", id: "ansB" }), "Java"] })), _jsxs("label", __assign({ style: {
                            display: "inline-flex",
                            cursor: "pointer",
                            padding: "5px 10px",
                        }, htmlFor: "ansC" }, { children: [_jsx(Radio, { style: {
                                    margin: "0 10px 0 0",
                                }, name: "question1", id: "ansC" }), "PHP"] }))] }))] }));
};
