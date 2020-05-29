import React, { PropsWithChildren } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { keyframes } from '@emotion/core';

export type DefaultButtonProps = {
  small?: boolean;
  color?: string;
};

export const DefaultButton = styled.button<DefaultButtonProps>`
  background: ${(p) => p.color};
  &,
  & * {
    color: ${(p) =>
      p.color !== 'var(--ttons-foreground)'
        ? '#ffffff'
        : 'var(--ttons-background)'};
  }
  outline: none;
  border: none;
  padding: 0.5rem;
  min-width: 12rem;
  max-width: 100%;
  cursor: pointer;
  border-radius: var(--ttons-border-radius);
  border: solid 1px ${(p) => p.color};
  transition: all var(--ttons-transition), width 0.1ms, height 0.1ms, top 0.1ms,
    padding 0.1ms, right 0.1ms, left 0.1ms, margin 0.1ms;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:not(:disabled) {
    &:hover {
      opacity: 0.66;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  ${(p) =>
    p.small &&
    `
      min-width: 75px;
      padding: 0.25rem;
   `};
`;

DefaultButton.defaultProps = {
  color: 'var(--ttons-foreground)',
};

export const IconButton = styled.button`
  background: none;
  outline: none;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: var(--ttons-border-radius);
  transition: all var(--ttons-transition);
  font-size: 1.5rem;

  &:disabled {
    cursor: not-allowed;
    color: var(--ttons-gray-fg);
  }

  &:not(:disabled) {
    &:hover {
      background: var(--ttons-gray-bg);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const SecondaryButton = styled(DefaultButton)`
  border: var(--ttons-border);
  background: var(--ttons-background);
  &,
  & * {
    color: var(--ttons-foreground);
  }

  &:hover {
    border: solid 1px var(--ttons-foreground);
    opacity: 1 !important;
  }
`;

type ButtonGroupProps = {
  flex?: boolean;
};

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  & > button {
    flex: ${(p) => (p.flex ? '1' : 'unset')};
    border-radius: 0;
  }

  & > button:first-of-type {
    border-top-left-radius: var(--ttons-border-radius);
    border-bottom-left-radius: var(--ttons-border-radius);
  }

  & > button:last-of-type {
    border-top-right-radius: var(--ttons-border-radius);
    border-bottom-right-radius: var(--ttons-border-radius);
  }
`;

export const DisabledButton = styled(DefaultButton)`
  border: var(--ttons-border);
  background: var(--ttons-gray-bg) !important;
  color: var(--ttons-gray-fg) !important;
  cursor: not-allowed;
`;

DisabledButton.defaultProps = { disabled: true };

const loadingKeyframes = keyframes`
  from {
    background: #ddd;
  }
  40% {
    background: #484848;
  }

  to {
    background: #ddd;
  }
`;

export const LoadingIndicator = styled.span<{ small: boolean }>`
  display: inline-block;
  position: relative;
  height: 0.25rem;
  width: 0.25rem;
  align-self: center;

  border-radius: 100%;
  background: #ddd;

  margin: calc((16px - 0.25rem) / 2) 0;

  animation: ${loadingKeyframes} 1.75s infinite;

  &::before,
  &::after {
    animation: ${loadingKeyframes} 1.75s infinite;
    position: absolute;
    display: inline-block;
    content: '';
    height: 0.25rem;
    width: 0.25rem;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    background: #ddd;
  }

  &::before {
    transform: translate(-250%, -50%);
    animation-delay: -0.25s;
  }
  &::after {
    transform: translate(150%, -50%);
    animation-delay: 0.25s;
  }
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  accented?: boolean;
  error?: boolean;
  color?: string;
  as?: string;
  loading?: boolean;
  icon?: boolean;
}

export const Button = ({
  disabled = false,
  accented = false,
  error = false,
  color,
  secondary = false,
  small = false,
  loading = false,
  icon = false,
  children,
  ...passedProps
}: PropsWithChildren<ButtonProps>) => {
  let Component: StyledComponent<
    React.HTMLAttributes<HTMLButtonElement>,
    DefaultButtonProps,
    any
  > = DefaultButton;
  let buttonColor = color;

  if (icon)
    return (
      <IconButton {...passedProps} disabled={disabled}>
        {children}
      </IconButton>
    );

  if (loading) {
    return (
      <DisabledButton {...passedProps} small={small}>
        <LoadingIndicator small={small} />
      </DisabledButton>
    );
  }

  if (disabled) Component = DisabledButton;
  if (secondary) Component = SecondaryButton;

  if (accented) buttonColor = 'var(--ttons-accent)';
  else if (error) buttonColor = 'var(--ttons-error)';

  return (
    <Component color={buttonColor} {...passedProps} small={small}>
      {children}
    </Component>
  );
};

Button.Group = ButtonGroup;

export default Button;
