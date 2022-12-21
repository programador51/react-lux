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
import { Button } from "../../atoms/button";
import useModal from "../../customHooks/useModal";
import { Modal } from "../../structure/modal";
export var DemoModal = function () {
    var _a = useModal(), closeModal = _a.closeModal, isOpen = _a.isOpen, openModal = _a.openModal;
    return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ onClick: openModal }, { children: "View shopping cart" })), _jsx(Modal, __assign({ onClickClose: closeModal, isOpen: isOpen, header: function (_a) {
                    var triggerClose = _a.triggerClose;
                    return "Shopping cart";
                }, footer: function (_a) {
                    var triggerClose = _a.triggerClose;
                    return (_jsx(Button, __assign({ theme: "danger", onClick: triggerClose }, { children: "Cancel" })));
                } }, { children: function (_a) {
                    var triggerClose = _a.triggerClose;
                    return (_jsxs("ul", { children: [_jsx("li", { children: "Banana $1,000" }), _jsx("li", { children: "Apple $500" }), _jsx("li", { children: "Onion $200" }), _jsx("li", { children: "Blueberry $100" })] }));
                } }))] }));
};
