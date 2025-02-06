import type { CSSProperties, ElementType, ReactNode } from 'react';

export type VariantsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeadingProps {
  variant: VariantsType;
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
  ellipsis?: boolean;
  fontWeight?: number;
  fontFamily?: string;
  textAlign?: string;
  as?: ElementType;
}
