import React from "react";
import { PropsBradcrumb } from "./types";
import scss from "./styles.module.scss";

export const Breadcrumb = ({ children }: PropsBradcrumb) => {
  return <ol className={scss.breadcrumb}>{children}</ol>;
};
