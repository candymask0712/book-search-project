import IconButton from '../button/IconButton';

interface ToggleIconButtonProps {
  onClick: () => void;
  className?: string;
  icon: React.ReactNode;
}

const ToggleIconButton = ({
  onClick,
  className,
  icon
}: ToggleIconButtonProps) => {
  return (
    <IconButton
      text="상세보기"
      variant="secondary"
      icon={icon}
      size="large"
      iconPosition="right"
      onClick={onClick}
      className={className}
    />
  );
};

export default ToggleIconButton;
