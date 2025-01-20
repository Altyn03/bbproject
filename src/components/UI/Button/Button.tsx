import type { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import type { IButtonProps, IStyledButtonProps, IStyledButtonTextProps, TButtonColor, TButtonSize } from './types';

const buttonPaddings: Record<TButtonSize, string> = {
  small: '7px 36px',
  big: '16px 43px',
};

const buttonColors: Record<TButtonColor, string> = {
  primary: '#F8E800',
  secondary: '#5658644D',
};

const StyledButton = styled.button<IStyledButtonProps>`
  padding: ${({ size }) => buttonPaddings[size] || buttonPaddings.big};
  width: ${({ width }) => width || '100%'};
  background-color: ${({ color, state }) =>
    state === 'disabled'
      ? '#27282EE5'
      : state === 'inactive'
        ? 'transparent'
        : buttonColors[color] || buttonColors.primary};

  ${({ state }) => state === 'inactive' && 'border: 2px solid #27282EE5;'};
  border-radius: 4px;
  cursor: ${({ state }) => (state === 'active' ? 'pointer' : 'not-allowed')};
  user-select: none;

  ${({ shadow }) => shadow && `box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.6);`}

  transition: box-shadow 0.4s ease-in-out, background-color 0.4s ease-in-out;
  &:hover {
    ${({ state, color }) =>
      state === 'active' &&
      `box-shadow: 0px 0px 10px 6px ${color === 'primary' ? 'rgba(224, 194, 59, 0.6)' : 'rgba(234, 241, 236, 0.6)'} ;`}
  }

  ${({ state }) => state !== 'active' && '&:disabled '}

  &:active {
    ${({ color }) => `background-color: ${color === 'primary' ? ' rgb(177, 172, 41);' : 'rgba(234, 241, 236, 0.6);'}`}
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;

const StyledButtonText = styled.p<IStyledButtonTextProps>`
  font-family: Lato, sans-serif;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  color: ${({ state, color }) => (state === 'active' ? (color === 'primary' ? '#090C11' : '#fff') : '#FFFFFF99')};
  font-size: ${({ size }) => (size === 'big' ? '16px' : '14px')};
  line-height: ${({ size }) => (size === 'big' ? '24px' : '18px')};
`;

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  size = 'big',
  color = 'primary',
  state = 'active',
  width,
  shadow,
  children,
  text,
  ...props
}) => (
  <StyledButton size={size} color={color} state={state} shadow={shadow} width={width} {...props}>
    {text ? (
      <StyledButtonText size={size} state={state} color={color}>
        {text}
      </StyledButtonText>
    ) : (
      children
    )}
  </StyledButton>
);
