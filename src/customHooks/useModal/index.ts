import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Attempt to close the modal
   * @returns {void}
   */
  const closeModal = () => setIsOpen(false);

  /**
   * Attempt to open the modal
   * @returns {void}
   */
  const openModal = () => setIsOpen(true);

  return {
    isOpen,
    closeModal,
    openModal,
  };
}
