import React from "react";
import scss from "./styles.module.scss";
import { PropsSelect } from "./types";

export const Select = (props: PropsSelect) => {
  return (
    <select {...props} className={scss.luxSelect}>
      {props.children}
    </select>
  );
};
