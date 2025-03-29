export const commonStyles = {
  variant: {
    primary: 'bg-palette-primary text-palette-white',
    secondary:
      'bg-palette-white text-palette-subtitle border border-palette-subtitle'
  }
} as const;

export const buttonStyles = {
  size: {
    // TODO figma 내 높이가 35.27px으로 소수점 표기, 확인 필요
    small: 'h-8 px-[10px] py-[5px]',
    medium: 'h-12 px-[20px] py-[13px]'
  },
  fontSize: {
    small: 'text-body2',
    medium: 'text-caption'
  }
} as const;
