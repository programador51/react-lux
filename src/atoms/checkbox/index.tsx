import React, { useRef } from "react";
import scss from "./styles.module.scss";

export const Checkbox = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const domCheckbox = useRef<HTMLInputElement>(null);

  return (
    <div className={scss.luxCheckbox}>
      <input type="checkbox" {...props} ref={domCheckbox} />
      <label
        style={props.style}
        onClick={() => domCheckbox.current?.click()}
      ></label>
    </div>
  );
};
