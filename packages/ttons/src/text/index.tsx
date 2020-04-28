import React, { PropsWithChildren } from 'react';
import styled, { StyledComponent } from '@emotion/styled';

export const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: -0.066rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const H2 = styled.h2`
  font-size: 2.25rem;
  letter-spacing: -0.05rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  letter-spacing: -0.03rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: justify;

  & small {
    font-size: 0.75rem;
  }
`;

export const InlineCode = styled.code`
  font-family: var(--ttons-font-mono);
  color: var(--ttons-code-color);
  font-size: 0.9em;

  ::before,
  ::after {
    content: '\`';
  }
`;

const CodePre = styled.pre`
  border: var(--ttons-border);
  padding: 1.5rem;
  border-radius: var(--ttons-border-radius);
`;

const CodeBlockElement = styled.code`
  font-family: var(--ttons-font-mono);
`;

export const CodeBlock: React.FC = ({ children }) => (
  <CodePre>
    <CodeBlockElement>{children}</CodeBlockElement>
  </CodePre>
);

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  bold?: boolean;
  small?: boolean;
  b?: boolean;
  s?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;
  as?: string;
}

/**
 * Typography comp
 */
export const Text = ({
  bold,
  small,
  b,
  s,
  h1,
  h2,
  h3,
  as,
  p,
  children,
  ...passedProps
}: PropsWithChildren<TextProps>) => {
  let Component: StyledComponent<any, any, any>;

  if (h1) Component = H1;
  else if (h2) Component = H2;
  else if (h3) Component = H3;
  else Component = P;

  let child = children;
  if (small || s) child = <small>{child}</small>;
  if (bold || b) child = <b>{child}</b>;

  return <Component {...passedProps}>{child}</Component>;
};

Text.defaultProps = {
  p: true,
};

export default Text;
