import { buttonStyles, commonStyles } from "../../constants/styles";
import { CommonVariant, ButtonSize } from "../../types/common.types";
import { twMerge } from 'tailwind-merge';

type DefaultButtonVariant = Extract<CommonVariant, 'primary' | 'secondary'>;
type DefaultButtonSize = Extract<ButtonSize, 'small' | 'medium'>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: DefaultButtonVariant;
  size?: DefaultButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
}

const DefaultButton = ({ children, size = 'medium', variant = 'primary', onClick = () => {}, className = '', disabled = false, isLoading = false, ...props }: ButtonProps) => {
  const baseStyle = 'flex items-center justify-center rounded-md';
  const commonVariantStyle = commonStyles['variant'][variant];
  const buttonSizeStyle = buttonStyles['size'][size];

  const buttonClassName = twMerge(
    baseStyle, 
    commonVariantStyle,
    buttonSizeStyle,
    className
  );
  
  return <button onClick={onClick} className={buttonClassName} disabled={disabled || isLoading} {...props}>{children}</button>;
};

export default DefaultButton;
