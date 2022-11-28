import React from "react";
import { PropsBlockquote } from "./types";
import scss from "./styles.module.scss";

export const BlockQuote = ({
  quote,
  autor,
  textAlign = "left",
}: PropsBlockquote) => {
  return (
    <figure className={scss.containerQuote}>
      <blockquote
        style={{
          margin: 0,
          textAlign,
        }}
      >
        <p className={scss.blockquote}>{quote}</p>
      </blockquote>
      <figcaption
        className={scss.blockquoteCaption}
        style={{
          textAlign,
        }}
      >
        {autor}
      </figcaption>
    </figure>
  );
};
