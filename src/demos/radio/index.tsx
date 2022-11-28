import React from "react";
import { Radio } from "../../atoms/radio";

export const DemoRadio = () => {
  return (
    <>
      <p>Languague program used on the client side for web development</p>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            display: "inline-flex",
            cursor: "pointer",
            padding: "5px 10px",
            margin: "0 0 10px 0",
          }}
          htmlFor="ansA"
        >
          <Radio
            style={{
              margin: "0 10px 0 0",
            }}
            name="question1"
            id="ansA"
          />
          Javascript
        </label>

        <label
          style={{
            display: "inline-flex",
            cursor: "pointer",
            padding: "5px 10px",
            margin: "0 0 10px 0",
          }}
          htmlFor="ansB"
        >
          <Radio
            style={{
              margin: "0 10px 0 0",
            }}
            name="question1"
            id="ansB"
          />
          Java
        </label>

        <label
          style={{
            display: "inline-flex",
            cursor: "pointer",
            padding: "5px 10px",
          }}
          htmlFor="ansC"
        >
          <Radio
            style={{
              margin: "0 10px 0 0",
            }}
            name="question1"
            id="ansC"
          />
          PHP
        </label>
      </div>
    </>
  );
};
