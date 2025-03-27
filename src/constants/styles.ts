export const commonStyles = {
  variant: {
    primary: 'bg-palette-primary text-white',
    secondary: 'bg-palette-lightGray text-secondary',
  },
  size: {
    small: 'text-body2', 
    medium: 'text-caption',
  },
} as const;

export const buttonStyles = {
  size: {
    // TODO figma 내 높이가 35.27px으로 소수점 표기 됨, 확인 필요
    small: 'text-body2 h-8 px-[10px] py-[5px]',
    medium: 'text-caption h-12 px-[20px] py-[13px]',
  },
} as const;

