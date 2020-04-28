import React from 'react';
import { Global, css } from '@emotion/core';

const global = css`
  * {
    font-family: var(--ttons-font);
    font-size: 16px;
    color: var(--ttons-foreground);
  }

  body {
    background: var(--ttons-background);
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--ttons-accent);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const lightTheme = css`
  :root {
    /* colors */
    --ttons-foreground: #000000;
    --ttons-accent: var(--ttons-success);
    --ttons-background: #ffffff;
    --ttons-gray-bg: #fafafa;
    --ttons-gray-fg: #888888;

    --ttons-error: #ee0000;
    --ttons-error-light: #ff1a1a;
    --ttons-error-dark: #cc0000;

    --ttons-success: #0070f3;
    --ttons-success-light: #3291ff;
    --ttons-success-dark: #0366d6;

    --ttons-magenta: #ff0080;
    --ttons-purple: #f81ce5;
    --ttons-violet: #7928ca;
    --ttons-cyan: #79ffe1;

    --ttons-code-color: var(--ttons-magenta);

    /* Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap');

    /* --ttons-font: 'Noto Sans', sans-serif; */
    --ttons-font: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
      'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
      Helvetica, Arial, sans-serif;
    --ttons-font-mono: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

    /** Other */
    --ttons-border: 1px solid #dddddd;
    --ttons-border-radius: 0.25rem;
    --ttons-transition: 0.2s;
    --ttons-gap: 16pt;
    --ttons-half-gap: calc(var(--ttons-gap) / 2);
  }
  ${global};
`;

const darkTheme = css`
  ${lightTheme};
  :root {
    --ttons-background: #202020;
    --ttons-foreground: #ffffff;
    --ttons-code-color: var(--ttons-cyan);
    --ttons-gray-bg: #333333;

    --ttons-border: 1px solid #484848;
  }
`;

type GlobalStyleProps = {
  theme?: string;
};

const GlobalStyle = ({ theme = 'light' }: GlobalStyleProps) => (
  <Global styles={theme === 'light' ? lightTheme : darkTheme} />
);

export default GlobalStyle;
