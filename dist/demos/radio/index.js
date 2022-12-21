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
exports.DemoRadio = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var radio_1 = require("../../atoms/radio");
var DemoRadio = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Languague program used on the client side for web development" }), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                    display: "inline-flex",
                    flexDirection: "column",
                } }, { children: [(0, jsx_runtime_1.jsxs)("label", __assign({ style: {
                            display: "inline-flex",
                            cursor: "pointer",
                            padding: "5px 10px",
                            margin: "0 0 10px 0",
                        }, htmlFor: "ansA" }, { children: [(0, jsx_runtime_1.jsx)(radio_1.Radio, { style: {
                                    margin: "0 10px 0 0",
                                }, name: "question1", id: "ansA" }), "Javascript"] })), (0, jsx_runtime_1.jsxs)("label", __assign({ style: {
                            display: "inline-flex",
                            cursor: "pointer",
                            padding: "5px 10px",
                            margin: "0 0 10px 0",
                        }, htmlFor: "ansB" }, { children: [(0, jsx_runtime_1.jsx)(radio_1.Radio, { style: {
                                    margin: "0 10px 0 0",
                                }, name: "question1", id: "ansB" }), "Java"] })), (0, jsx_runtime_1.jsxs)("label", __assign({ style: {
                            display: "inline-flex",
                            cursor: "pointer",
                            padding: "5px 10px",
                        }, htmlFor: "ansC" }, { children: [(0, jsx_runtime_1.jsx)(radio_1.Radio, { style: {
                                    margin: "0 10px 0 0",
                                }, name: "question1", id: "ansC" }), "PHP"] }))] }))] }));
};
exports.DemoRadio = DemoRadio;
