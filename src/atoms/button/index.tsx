import React from "react";
import scss from "./index.module.scss";
import { IndexedThemeButton, PropsLuxButton } from "./types";

const THEME: IndexedThemeButton = {
  primary: scss.primary,
  secondary: scss.secondary,
  success: scss.success,
  info: scss.info,
  warning: scss.warning,
  danger: scss.danger,
  light: scss.light,
  dark: scss.dark,
  link: scss.link,
};

export const Button = (props: PropsLuxButton) => {
  const { theme = "primary" } = props;

  return (
    <button {...props} className={THEME[theme]}>
      {props.children}
    </button>
  );
};
