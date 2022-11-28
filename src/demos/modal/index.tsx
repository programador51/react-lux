import React from "react";
import { Button } from "../../atoms/button";
import useModal from "../../customHooks/useModal";
import { Modal } from "../../structure/modal";

export const DemoModal = () => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <>
      <Button onClick={openModal}>View shopping cart</Button>

      <Modal
        onClickClose={closeModal}
        isOpen={isOpen}
        header={({ triggerClose }) => "Shopping cart"}
        footer={({ triggerClose }) => (
          <Button theme="danger" onClick={triggerClose}>
            Cancel
          </Button>
        )}
      >
        {({ triggerClose }) => (
          <ul>
            <li>Banana $1,000</li>
            <li>Apple $500</li>
            <li>Onion $200</li>
            <li>Blueberry $100</li>
          </ul>
        )}
      </Modal>
    </>
  );
};
