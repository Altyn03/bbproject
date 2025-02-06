import type { FC } from 'react';
import styled from 'styled-components';
import type { IHeadingProps, VariantsType } from './types';

const StyledHeading = styled.p<{
  variant: VariantsType;
  color?: string;
  ellipsis?: boolean;
  fontWeight?: number;
  fontFamily?: string;
  userSelect?: boolean;
  textAlign?: string;
}>`
  color: ${({ color }) => color || '#fff'};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-family: ${({ fontFamily }) => fontFamily || 'Roboto, sans-serif'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  ${({ ellipsis }) => ellipsis && 'text-overflow: ellipsis; white-space: nowrap; overflow: hidden;'}

  ${({ userSelect }) => userSelect && 'user-select: none;'}

  @media (max-width: 768px) {
    font-size: ${({ variant }) => {
      switch (variant) {
        case 'h1':
          return '50px';
        case 'h2':
          return '40px';
        case 'h3':
          return '30px';
        case 'h4':
          return '20px';
        case 'h5':
          return '20px';
        case 'h6':
          return '16px';
        default:
          return '16px';
      }
    }};
    line-height: ${({ variant }) => {
      switch (variant) {
        case 'h1':
          return '54px';
        case 'h2':
          return '44px';
        case 'h3':
          return '34px';
        case 'h4':
          return '24px';
        case 'h5':
          return '24px';
        case 'h6':
          return '20px';
        default:
          return '20px';
      }
    }};
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: ${({ variant }) => {
      switch (variant) {
        case 'h1':
          return '70px';
        case 'h2':
          return '54px';
        case 'h3':
          return '36px';
        case 'h4':
          return '24px';
        case 'h5':
          return '20px';
        case 'h6':
          return '14px';
        default:
          return '14px';
      }
    }};
    line-height: ${({ variant }) => {
      switch (variant) {
        case 'h1':
          return '74px';
        case 'h2':
          return '58px';
        case 'h3':
          return '42px';
        case 'h4':
          return '28px';
        case 'h5':
          return '24px';
        case 'h6':
          return '20px';
        default:
          return '20px';
      }
    }};
  }

  font-size: ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return '80px';
      case 'h2':
        return '72px';
      case 'h3':
        return '32px';
      case 'h4':
        return '28px';
      case 'h5':
        return '24px';
      case 'h6':
        return '20px';
      default:
        return '20px';
    }
  }};
  line-height: ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return '93.75px';
      case 'h2':
        return '84.38px';
      case 'h3':
        return '40px';
      case 'h4':
        return '32.81px';
      case 'h5':
        return '32px';
      case 'h6':
        return '24.26px';
      default:
        return '24.26px';
    }
  }};
`;

export const Heading: FC<IHeadingProps> = ({
  variant,
  color,
  children,
  style,
  ellipsis,
  fontWeight,
  fontFamily,
  textAlign,
  as: Component = variant,
}) => {
  return (
    <StyledHeading
      as={Component}
      variant={variant}
      color={color}
      style={style}
      ellipsis={ellipsis}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontFamily={fontFamily}>
      {children}
    </StyledHeading>
  );
};
