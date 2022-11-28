import { useState } from "react";
export default function useModal() {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
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
