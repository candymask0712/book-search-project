
import Button, { ButtonProps } from "./Button";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  iconPosition: 'left' | 'center' | 'right';
  text?: string;
}

const IconButton = ({ icon, iconPosition, text = '', ...props }: IconButtonProps) => {
  
  const baseClasses = "flex items-center";
  const alignment = iconPosition === "center" ? "justify-center" : "";
  const content =
    iconPosition === "right" ? (
      <>
        {text && <span className="mr-2">{text}</span>}
        {icon}
      </>
    ) : (
      <>
        {icon}
        {text && <span className="ml-2">{text}</span>}
      </>
    );

  return (
    <Button {...props}>
      <span className={`${baseClasses} ${alignment}`}>{content}</span>
    </Button>
  );
};

export default IconButton;