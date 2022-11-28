import React from "react";
import { PropsInputText } from "./types";
import scss from "./styles.module.scss";

export const InputText = (props: PropsInputText) => {
  if (props.isValid === undefined)
    return (
      <div className={scss.containerInput}>
        <input className={scss.input} {...props} />
      </div>
    );

  if (props.isValid)
    return (
      <div className={scss.containerInput}>
        <input className={scss.inputValid} {...props} />
      </div>
    );

  return (
    <div className={scss.containerInput}>
      <input className={scss.inputInvalid} {...props} />
    </div>
  );
};
