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
import { useState } from "react";
import { Select } from "../../atoms/select";
export var DemoSelect = function () {
    var _a = useState([
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
    var _b = useState({}), selected = _b[0], setSelected = _b[1];
    var handleSelected = function (e) {
        return setSelected(options.find(function (item) { return item.id === +e.target.value; }) || undefined);
    };
    return (_jsxs("div", { children: [_jsx("p", { children: "You have selected" }), _jsx("pre", { children: _jsx("code", { children: JSON.stringify(selected, null, 2) }) }), _jsx("hr", {}), _jsx(Select, __assign({ onChange: handleSelected }, { children: _jsxs(_Fragment, { children: [_jsx("option", __assign({ disabled: true, selected: true }, { children: "-- SELECT AN OPTION --" })), options.map(function (item) { return (_jsx("option", __assign({ value: item.id }, { children: item.label }), window.crypto.randomUUID())); })] }) }))] }));
};
