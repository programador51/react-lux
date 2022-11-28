import React from "react";
import scss from "./styles.module.scss";

export const InputFile = () => {
  return <input type="file" className={scss.luxSingleFile} multiple />;
};
