/// <reference types="react" />
import { PropsToast } from "../../molecule/toast/types";
export interface PropsGlobalToast {
    children?: JSX.Element | JSX.Element[];
}
export interface ContextGlobalToast {
    addToast: (toast: PropsToast) => void;
    toasts: PropsToast[];
}
