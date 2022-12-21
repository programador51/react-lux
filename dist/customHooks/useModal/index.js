"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useModal() {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    /**
     * Attempt to close the modal
     * @returns {void}
     */
    var closeModal = function () { return setIsOpen(false); };
    /**
     * Attempt to open the modal
     * @returns {void}
     */
    var openModal = function () { return setIsOpen(true); };
    return {
        isOpen: isOpen,
        closeModal: closeModal,
        openModal: openModal,
    };
}
exports.default = useModal;
