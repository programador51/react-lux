import React, { useEffect, useState } from "react";
import scss from "../inputText/styles.module.scss";
import { PropsPassword } from "./types";

export const Password = (props: PropsPassword) => {
  const { showPassword = false } = props;

  const [show, setShow] = useState(showPassword);

  useEffect(() => {
    setShow(showPassword);
  }, [showPassword]);

  return (
    <div className={scss.containerPassword}>
      <input
        type={show ? "text" : "password"}
        className={scss.password}
        {...props}
      />
      <button
        onClick={(e) => setShow(!show)}
        className={scss.revealPasswordBtn}
      >
        {show ? "🔐" : "🔓"}
      </button>
    </div>
  );
};
