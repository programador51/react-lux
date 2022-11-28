import React from "react";
import scss from "./styles.module.scss";

export const Range = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return <input type="range" className={scss.luxRange} {...props} />;
};
