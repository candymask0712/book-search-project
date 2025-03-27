import { buttonStyles, commonStyles } from "../../constants/styles";
import { CommonVariant, CommonSize } from "../../types/common.types";
import { twMerge } from 'tailwind-merge';

type ButtonVariant = Extract<CommonVariant, 'primary' | 'secondary'>;
type ButtonSize = Extract<CommonSize, 'small' | 'medium'>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ children, size = 'medium', variant = 'primary', onClick = ()=>{}, className = '', disabled = false, isLoading = false, ...props }: Props) => {
  const baseStyle = 'flex items-center justify-center rounded-md';
  const commonVariantStyle = commonStyles['variant'][variant];
  const commonSizeStyle = commonStyles['size'][size];
  const buttonSizeStyle = buttonStyles['size'][size];

  const buttonClassName = twMerge(
    baseStyle,
    commonVariantStyle,
    commonSizeStyle,
    buttonSizeStyle,
    className
  );
  return <button onClick={onClick} className={buttonClassName} disabled={disabled || isLoading} {...props}>{children}</button>;
};

export default Button;
