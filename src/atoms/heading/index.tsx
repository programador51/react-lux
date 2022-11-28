import React from "react";
import scss from "./styles.module.scss";
import { HeadingProps } from "./types";

export const H1 = (props: HeadingProps) => {
  return (
    <h1 {...props} className={scss.h1}>
      {props.children}
    </h1>
  );
};

export const H2 = (props: HeadingProps) => {
  return (
    <h2 {...props} className={scss.h2}>
      {props.children}
    </h2>
  );
};

export const H3 = (props: HeadingProps) => {
  return (
    <h3 {...props} className={scss.h3}>
      {props.children}
    </h3>
  );
};

export const H4 = (props: HeadingProps) => {
  return (
    <h4 {...props} className={scss.h4}>
      {props.children}
    </h4>
  );
};

export const H5 = (props: HeadingProps) => {
  return (
    <h5 {...props} className={scss.h5}>
      {props.children}
    </h5>
  );
};

export const H6 = (props: HeadingProps) => {
  return (
    <h6 {...props} className={scss.h6}>
      {props.children}
    </h6>
  );
};
