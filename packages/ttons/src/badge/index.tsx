import styled from '@emotion/styled';

export const Badge = styled.span<{ color?: string }>`
  background: ${p => (p.color ? p.color : 'var(--ttons-foreground)')};
  color: ${p => (p.color ? 'white' : 'var(--ttons-background)')};
  padding: 2px 7px;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 14px;
`;

export default Badge;
