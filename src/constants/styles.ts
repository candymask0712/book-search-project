export const commonStyles = {
  variant: {
    primary: 'bg-palette-primary text-palette-white',
    secondary:
      'bg-palette-lightGray text-text-secondary border border-palette-subtitle',
    lined: 'bg-palette-white text-text-subtitle border border-text-subtitle'
  }
} as const;

export const buttonStyles = {
  size: {
    small: 'h-8 px-[10px] py-[5px]',
    medium: 'h-10 px-[10px] py-[5px]',
    large: 'h-12 px-[10px] py-[13px]'
  },
  fontSize: {
    small: 'text-body2',
    medium: 'text-caption',
    large: 'text-caption'
  }
} as const;
