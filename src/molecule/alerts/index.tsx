import React from "react";
import { H4 } from "../../atoms/heading";
import { PropsAlert } from "./types";
import scss from "./styles.module.scss";

const THEMES = {
  warning: scss.warning,
  danger: scss.danger,
  success: scss.success,
  info: scss.info,
  primary: scss.primary,
  secondary: scss.secondary,
};

export const Alert = ({
  children,
  title = undefined,
  theme = "warning",
  onClickClose = () => {},
}: PropsAlert) => {
  if (title === undefined)
    return (
      <div className={THEMES[theme]}>
        <div className={scss.bodyAlert}>
          <div>{children}</div>
          <span className={scss.close} onClick={() => onClickClose()}>
            ✖
          </span>
        </div>
      </div>
    );

  return (
    <div className={THEMES[theme]}>
      <div className={scss.title}>
        <H4
          style={{
            margin: 0,
          }}
        >
          {title}
        </H4>

        <span onClick={() => onClickClose()}>✖</span>
      </div>
      {children}
    </div>
  );
};
