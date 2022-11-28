import React, { createContext, useState } from "react";
import { Toast } from "../../molecule/toast";
import { PropsToast } from "../../molecule/toast/types";
import { ContextGlobalToast, PropsGlobalToast } from "./types";
import scss from "./styles.module.scss";

export const ContextToast = createContext<ContextGlobalToast>({
  addToast: (toast) => {},
  toasts: [],
});

export const ToastProvider = ({ children }: PropsGlobalToast) => {
  const [toasts, setToasts] = useState<PropsToast[]>([]);

  /**
   * Add a new toast item into the component
   * @param toast - Information to append into the list
   */
  const addToast = (toast: PropsToast) => {
    console.log(toast);
    const newToastList = [toast, ...toasts];
    setToasts(newToastList);
  };

  /**
   * Delete the item toast from the list without the user clicks the item
   * @param index - Index position of the element to delete
   */
  const deleteToast = (index: number) => {
    const newToastList = toasts.filter((toast, i) => i !== index);
    setToasts(newToastList);
  };

  return (
    <ContextToast.Provider value={{ addToast, toasts }}>
      {children}
      <div className={scss.containerToasts}>
        {toasts.map((toast, i) => (
          <Toast {...toast} onClickClose={() => deleteToast(i)} />
        ))}
      </div>
    </ContextToast.Provider>
  );
};
