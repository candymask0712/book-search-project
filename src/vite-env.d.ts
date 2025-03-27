/// <reference types="vite/client" />

declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const src: FC<SVGProps<SVGSVGElement>>;
  export default src;
}
