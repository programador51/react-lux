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
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var cssScrollHidden = "body {\n  overflow: hidden;\n}\n";
var Modal = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 50 : _b, _c = _a.header, header = _c === void 0 ? function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); } : _c, _d = _a.children, children = _d === void 0 ? function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); } : _d, _e = _a.footer, footer = _e === void 0 ? function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); } : _e, _f = _a.isOpen, isOpen = _f === void 0 ? false : _f, _g = _a.onClickClose, onClickClose = _g === void 0 ? function () { } : _g;
    if (!isOpen)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.modalContainer }, { children: [(0, jsx_runtime_1.jsx)("style", { children: cssScrollHidden }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.modal, style: {
                    width: "".concat(width, "%"),
                } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_scss_1.default.modalHeader }, { children: [(0, jsx_runtime_1.jsx)("div", { children: header({ triggerClose: onClickClose }) }), (0, jsx_runtime_1.jsx)("span", __assign({ onClick: onClickClose, className: styles_module_scss_1.default.closeModal }, { children: "\u2716" }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.modalBody }, { children: children({ triggerClose: onClickClose }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_scss_1.default.modalFooter }, { children: footer({ triggerClose: onClickClose }) }))] }))] })));
};
exports.Modal = Modal;
