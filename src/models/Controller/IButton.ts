export interface IButton {
  buttonAction?: () => void;
  variant: string;
  type?: 'button' | 'submit' | 'reset';
}
