import React, { useContext, useState } from "react";
import { ContextToast, ToastProvider } from "../../structure/GlobalToast";
import { InputText } from "../../atoms/inputText";
import { Button } from "../../atoms/button";

export const DemoToast = () => {
  const { addToast } = useContext(ContextToast);

  const [info, setInfo] = useState({
    title: "",
    body: "",
  });

  const appendToast = () => {
    addToast({
      body: info.body,
      title: info.title,
    });
  };

  return (
    <>
      <InputText
        placeholder="Toast title"
        onChange={(e) =>
          setInfo((state) => ({ ...state, title: e.target.value }))
        }
      />
      <br />
      <br />
      <InputText
        onChange={(e) =>
          setInfo((state) => ({ ...state, body: e.target.value }))
        }
        placeholder="Toast body"
      />
      <br />
      <br />
      <Button
        onClick={appendToast}
        disabled={info.title === "" || info.body === ""}
      >
        Add
      </Button>
      <br />
      <br />
    </>
  );
};

export const ParentComponent = () => {
  return (
    <ToastProvider>
      <DemoToast />
    </ToastProvider>
  );
};
