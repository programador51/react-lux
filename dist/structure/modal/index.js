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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import scss from "./styles.module.scss";
var cssScrollHidden = "body {\n  overflow: hidden;\n}\n";
export var Modal = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 50 : _b, _c = _a.header, header = _c === void 0 ? function () { return _jsx(_Fragment, {}); } : _c, _d = _a.children, children = _d === void 0 ? function () { return _jsx(_Fragment, {}); } : _d, _e = _a.footer, footer = _e === void 0 ? function () { return _jsx(_Fragment, {}); } : _e, _f = _a.isOpen, isOpen = _f === void 0 ? false : _f, _g = _a.onClickClose, onClickClose = _g === void 0 ? function () { } : _g;
    if (!isOpen)
        return _jsx(_Fragment, {});
    return (_jsxs("div", __assign({ className: scss.modalContainer }, { children: [_jsx("style", { children: cssScrollHidden }), _jsxs("div", __assign({ className: scss.modal, style: {
                    width: "".concat(width, "%"),
                } }, { children: [_jsxs("div", __assign({ className: scss.modalHeader }, { children: [_jsx("div", { children: header({ triggerClose: onClickClose }) }), _jsx("span", __assign({ onClick: onClickClose, className: scss.closeModal }, { children: "\u2716" }))] })), _jsx("div", __assign({ className: scss.modalBody }, { children: children({ triggerClose: onClickClose }) })), _jsx("div", __assign({ className: scss.modalFooter }, { children: footer({ triggerClose: onClickClose }) }))] }))] })));
};
