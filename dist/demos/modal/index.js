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
exports.DemoModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var button_1 = require("../../atoms/button");
var useModal_1 = __importDefault(require("../../customHooks/useModal"));
var modal_1 = require("../../structure/modal");
var DemoModal = function () {
    var _a = (0, useModal_1.default)(), closeModal = _a.closeModal, isOpen = _a.isOpen, openModal = _a.openModal;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, __assign({ onClick: openModal }, { children: "View shopping cart" })), (0, jsx_runtime_1.jsx)(modal_1.Modal, __assign({ onClickClose: closeModal, isOpen: isOpen, header: function (_a) {
                    var triggerClose = _a.triggerClose;
                    return "Shopping cart";
                }, footer: function (_a) {
                    var triggerClose = _a.triggerClose;
                    return ((0, jsx_runtime_1.jsx)(button_1.Button, __assign({ theme: "danger", onClick: triggerClose }, { children: "Cancel" })));
                } }, { children: function (_a) {
                    var triggerClose = _a.triggerClose;
                    return ((0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Banana $1,000" }), (0, jsx_runtime_1.jsx)("li", { children: "Apple $500" }), (0, jsx_runtime_1.jsx)("li", { children: "Onion $200" }), (0, jsx_runtime_1.jsx)("li", { children: "Blueberry $100" })] }));
                } }))] }));
};
exports.DemoModal = DemoModal;
