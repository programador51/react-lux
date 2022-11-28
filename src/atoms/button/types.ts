export type TypeButtons =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "light"
  | "dark"
  | "link"
  | "warning";

export interface PropsLuxButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: TypeButtons;
}

export interface IndexedThemeButton {
  [key: string]: string;
}
