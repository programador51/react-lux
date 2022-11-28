/// <reference types="react" />
export interface PropsAlert {
    title?: string;
    children?: JSX.Element | JSX.Element[];
    /**
     * Function that executed when the user clicks on the close icon from the top right
     */
    onClickClose?: () => void;
    theme?: ThemeAlert;
}
export type ThemeAlert = "warning" | "danger" | "success" | "info" | "primary" | "secondary";
