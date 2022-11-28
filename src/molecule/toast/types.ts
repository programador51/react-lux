export interface PropsToast {
  title?: string | JSX.Element | JSX.Element[];
  body?: string | JSX.Element | JSX.Element[];
  onClickClose?: () => void;
}
