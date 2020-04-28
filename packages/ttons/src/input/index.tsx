import React from 'react';
import styled from '@emotion/styled';

type StyledInputProps = {
  error?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  border: none;
  outline: none;
  flex: 1;
  padding: 0.5rem;
  background: none;

  ${p => p.error && 'color: var(--ttons-error);'}
`;

const InputWrapper = styled.div`
  min-width: 250px;
  display: inline-flex;
`;

type InputContainerProps = {
  disabled?: boolean;
  hasLabel?: boolean;
  labelPosition?: string;
  error?: boolean;
};

const InputContainer = styled.div<InputContainerProps>`
  border: var(--ttons-border);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: var(--ttons-border-radius);
  transition: border var(--ttons-transition);
  flex: 1;

  ${p => p.error && 'border-color: var(--ttons-error) !important;'}

  ${p =>
    p.hasLabel &&
    p.labelPosition === 'left' &&
    `
    border-bottom-left-radius: 0; 
    border-top-left-radius: 0; 
  `}

  ${p =>
    p.hasLabel &&
    p.labelPosition === 'right' &&
    `
    border-bottom-right-radius: 0; 
    border-top-right-radius: 0; 
  `}

  &:focus-within {
    border: 1px solid var(--ttons-foreground);
  }

  ${p =>
    p.disabled &&
    `
    background: var(--ttons-gray-bg);
    color: var(--ttons-gray-fg);
  `}

  & > svg {
    margin: .5rem;
  }
`;

type InlineLabelProps = {
  reverse?: boolean;
};

const InlineLabel = styled.label<InlineLabelProps>`
  background: var(--ttons-gray-bg);
  color: var(--ttons-gray-fg);
  border: var(--ttons-border);
  border-radius: var(--ttons-border-radius);

  ${p =>
    !p.reverse &&
    `
    border-right: none;
    border-bottom-right-radius: 0; 
    border-top-right-radius: 0; 
  `}

  ${p =>
    p.reverse &&
    `
    border-left: none;
    border-bottom-left-radius: 0; 
    border-top-left-radius: 0; 
  `}

  padding: 0.5rem 1rem;
`;

export const Label = styled.label`
  color: var(--ttons-gray-fg);
  font-weight: bold;
  display: block;
`;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  error?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input = ({
  disabled = false,
  label = '',
  labelPosition = 'left',
  error = false,
  icon = null,
  iconRight = null,
  ...passedProps
}: InputProps) => {
  return (
    <InputWrapper>
      {label && labelPosition === 'left' && <InlineLabel>{label}</InlineLabel>}
      <InputContainer
        error={error}
        disabled={disabled}
        hasLabel={label !== ''}
        labelPosition={labelPosition}
      >
        {icon}
        <StyledInput disabled={disabled} {...passedProps} error={error} />
        {iconRight}
      </InputContainer>
      {label && labelPosition === 'right' && (
        <InlineLabel reverse>{label}</InlineLabel>
      )}
    </InputWrapper>
  );
};

Input.Label = Label;

export default Input;
