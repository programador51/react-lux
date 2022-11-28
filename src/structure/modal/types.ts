export interface PropsChildren {
  /**
   * This function will trigger the property 'onClicKClose' in order to perform the action programmed when user trys to close the modal window
   */
  triggerClose: () => void;
}

export interface ModalProps {
  width?: number;

  footer?: (ccp: PropsChildren) => string | JSX.Element | JSX.Element[];
  header?: (ccp: PropsChildren) => string | JSX.Element | JSX.Element[];
  children?: (ccp: PropsChildren) => JSX.Element | JSX.Element[];
  /**
   * Function that executes when user click the close icon from the top right OR when you execute the method from
   */
  onClickClose?: () => void;
  isOpen?: boolean;
}
