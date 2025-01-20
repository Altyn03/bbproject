export interface IButtonProps {
  size?: TButtonSize;
  color?: TButtonColor;
  state?: TButtonStates;
  width?: string;
  shadow?: boolean;
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledButtonProps {
  size: TButtonSize;
  color: TButtonColor;
  state: TButtonStates;
  shadow?: boolean;
  width?: string;
}

export interface IStyledButtonTextProps {
  size: TButtonSize;
  state: TButtonStates;
  color: TButtonColor;
}

export type TButtonSize = 'small' | 'big';
export type TButtonStates = 'active' | 'disabled' | 'inactive';
export type TButtonColor = 'primary' | 'secondary';
