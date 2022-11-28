import React from "react";
import scss from "./styles.module.scss";
import { PropsToast } from "./types";

export const Toast = ({ body, onClickClose = () => {}, title }: PropsToast) => {
  return (
    <div className={scss.luxToast}>
      <div className={scss.title}>
        <span>{title}</span>
        <span onClick={(e) => onClickClose()}>✖</span>
      </div>

      <div className={scss.body}>
        <div>{body}</div>
      </div>
    </div>
  );
};
