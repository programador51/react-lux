import React, { useRef } from "react";
import scss from "./styles.module.scss";

export const Switch = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const domCheckbox = useRef<HTMLInputElement>(null);

  return (
    <div className={scss.luxSwitch}>
      <input type="checkbox" ref={domCheckbox} {...props} />
      <label onClick={() => domCheckbox.current?.click()}></label>
    </div>
  );
};
