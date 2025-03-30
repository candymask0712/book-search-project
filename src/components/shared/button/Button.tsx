import { buttonStyles, commonStyles } from '../../../constants/styles';
import { CommonVariant, ButtonSize } from '../../../types/common.types';
import { twMerge } from 'tailwind-merge';

type DefaultButtonVariant = Extract<
  CommonVariant,
  'primary' | 'secondary' | 'lined'
>;
type DefaultButtonSize = Extract<ButtonSize, 'small' | 'medium' | 'large'>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: DefaultButtonVariant;
  size?: DefaultButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
}

const DefaultButton = ({
  children,
  size = 'medium',
  variant = 'primary',
  onClick = () => {},
  className = '',
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseStyle = 'flex items-center justify-center rounded-md';
  const buttonSizeStyle = buttonStyles['size'][size];
  const commonVariantStyle = commonStyles['variant'][variant];

  const buttonClassName = twMerge(
    baseStyle,
    buttonSizeStyle,
    commonVariantStyle,
    className
  );

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      <div className={buttonStyles['fontSize'][size]}>{children}</div>
    </button>
  );
};

export default DefaultButton;
