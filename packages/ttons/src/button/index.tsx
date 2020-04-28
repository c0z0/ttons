import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export type DefaultButtonProps = {
  small?: boolean;
  color?: string;
};

export const DefaultButton = styled.button<DefaultButtonProps>`
  background: ${p => p.color};
  color: ${p =>
    p.color !== 'var(--ttons-foreground)'
      ? '#ffffff'
      : 'var(--ttons-background)'};
  outline: none;
  border: none;
  padding: 0.5rem;
  min-width: 200px;
  max-width: 100%;
  cursor: pointer;
  border-radius: var(--ttons-border-radius);
  border: solid 1px ${p => p.color};
  transition: all var(--ttons-transition);

  &:hover {
    opacity: 0.66;
  }

  ${p =>
    p.small &&
    `
      min-width: 75px;
      padding: 0.25rem;
   `};
`;

DefaultButton.defaultProps = {
  color: 'var(--ttons-foreground)',
};

export const SecondaryButton = styled(DefaultButton)`
  border: var(--ttons-border);
  background: var(--ttons-background);
  color: var(--ttons-foreground);

  &:hover {
    border: solid 1px var(--ttons-foreground);
    opacity: 1;
  }
`;

export const DisabledButton = styled(DefaultButton)`
  border: var(--ttons-border);
  background: var(--ttons-gray-bg) !important;
  color: var(--ttons-gray-fg) !important;
  opacity: 1 !important;
  cursor: not-allowed;
`;

DisabledButton.defaultProps = { disabled: true };

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  accented?: boolean;
  error?: boolean;
  color?: string;
  as?: string;
}

export const Button = ({
  disabled = false,
  accented = false,
  error = false,
  color,
  secondary = false,
  small = false,
  ...passedProps
}: PropsWithChildren<ButtonProps>) => {
  let Component: any = DefaultButton;
  let buttonColor = color;

  if (disabled) Component = DisabledButton;
  if (secondary) Component = SecondaryButton;

  if (accented) buttonColor = 'var(--ttons-accent)';
  else if (error) buttonColor = 'var(--ttons-error)';

  return <Component color={buttonColor} {...passedProps} small={small} />;
};

export default Button;
