import React from "react";
import { ModalProps } from "./types";
import scss from "./styles.module.scss";

const cssScrollHidden = `body {
  overflow: hidden;
}
`;

export const Modal = ({
  width = 50,
  header = () => <></>,
  children = () => <></>,
  footer = () => <></>,
  isOpen = false,
  onClickClose = () => {},
}: ModalProps) => {
  if (!isOpen) return <></>;

  return (
    <div className={scss.modalContainer}>
      <style>{cssScrollHidden}</style>
      <div
        className={scss.modal}
        style={{
          width: `${width}%`,
        }}
      >
        <div className={scss.modalHeader}>
          <div>{header({ triggerClose: onClickClose })}</div>
          <span onClick={onClickClose} className={scss.closeModal}>
            ✖
          </span>
        </div>
        <div className={scss.modalBody}>
          {children({ triggerClose: onClickClose })}
        </div>
        <div className={scss.modalFooter}>
          {footer({ triggerClose: onClickClose })}
        </div>
      </div>
    </div>
  );
};
