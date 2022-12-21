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
exports.DemoSelect = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var select_1 = require("../../atoms/select");
var DemoSelect = function () {
    var _a = (0, react_1.useState)([
        {
            label: "Cactus",
            value: "vegetable",
            id: 1,
        },
        {
            label: "Garbanzo",
            value: "vegetable",
            id: 2,
        },
        {
            label: "Onion",
            value: "vegetable",
            id: 3,
        },
        {
            label: "Apple",
            value: "fruit",
            id: 4,
        },
    ]), options = _a[0], setOptions = _a[1];
    var _b = (0, react_1.useState)({}), selected = _b[0], setSelected = _b[1];
    var handleSelected = function (e) {
        return setSelected(options.find(function (item) { return item.id === +e.target.value; }) || undefined);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "You have selected" }), (0, jsx_runtime_1.jsx)("pre", { children: (0, jsx_runtime_1.jsx)("code", { children: JSON.stringify(selected, null, 2) }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)(select_1.Select, __assign({ onChange: handleSelected }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("option", __assign({ disabled: true, selected: true }, { children: "-- SELECT AN OPTION --" })), options.map(function (item) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: item.id }, { children: item.label }), window.crypto.randomUUID())); })] }) }))] }));
};
exports.DemoSelect = DemoSelect;
