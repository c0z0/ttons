import styled from '@emotion/styled';

type DefaultButtonProps = {
  small?: boolean;
};

export const DefaultButton = styled.button<DefaultButtonProps>`
  background: var(--ttons-foreground);
  color: var(--ttons-background);
  outline: none;
  border: none;
  padding: 0.5rem;
  min-width: 200px;
  max-width: 100%;
  cursor: pointer;
  border-radius: var(--ttons-border-radius);
  border: solid 1px var(--ttons-foreground);
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
