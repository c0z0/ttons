import React from 'react';
import { Global, css, keyframes } from '@emotion/core';

const swooshIn = keyframes`
  from {
    transform: scale(1.1);
    opacity: .5;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const global = css`
  body,
  input,
  button {
    font-family: var(--ttons-font);
    font-size: 14px;
    color: var(--ttons-foreground);
  }

  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar-track {
    width: 10px;
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    width: 10px;
    background: var(--ttons-border-color);
  }

  body {
    background: var(--ttons-background);
    margin: 0;
    padding: 0;
  }

  *::selection {
    background-color: var(--ttons-magenta);
  }

  a {
    color: var(--ttons-accent);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .Toastify__toast {
    border-radius: var(--ttons-border-radius);
    box-shadow: none;
  }

  .Toastify__toast--default {
    border: var(--ttons-border);
    background: var(--ttons-background);
    color: var(--ttons-foreground);
  }

  .Toastify__toast--success {
    background: var(--ttons-success);
    color: white;
  }

  .Toastify__toast--error {
    background: var(--ttons-error);
    color: white;
  }

  .Toastify__close-button--default {
    color: var(--ttons-gray-fg);
  }

  .Toastify__close-button {
    color: white;
  }

  .toastifyIn {
    animation-name: toastifyIn;
  }

  .toastifyOut {
    animation-name: toastifyOut;
  }

  @keyframes toastifyOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    to {
      opacity: 0;
      transform: translateY(50%) scale(1.1);
    }
  }

  @keyframes toastifyIn {
    from {
      opacity: 0.5;
      transform: translateY(50%) scale(1.1);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const lightTheme = css`
  :root {
    /* colors */
    --ttons-foreground: #222;
    --ttons-accent: var(--ttons-success);
    --ttons-background: #ffffff;
    --ttons-gray-bg: #f0f0f0;
    --ttons-gray-bg-inverse: #333333;
    --ttons-gray-fg: #888888;

    --ttons-warning: #f5a623;

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
    --tton-highlight: var(--tton-cyan);

    /* Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap');

    /* --ttons-font: 'Noto Sans', sans-serif; */
    /* --ttons-font: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
      'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
      Helvetica, Arial, sans-serif; */
    --ttons-font: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    --ttons-font-mono: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

    /** Other */
    --ttons-border-color: #dddddd;
    --ttons-border: 1px solid var(--ttons-border-color);
    --ttons-border-radius: 0.25rem;
    --ttons-transition: 0.2s;
    --ttons-gap: 16pt;
    --ttons-half-gap: calc(var(--ttons-gap) / 2);

    --ttons-swoosh-in: ${swooshIn};
    --ttons-fade-in: ${fadeIn};
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
    --ttons-gray-bg-inverse: #eeeeee;
    --tton-highlight: var(--tton-magenta);

    --ttons-border-color: #484848;
  }
`;

type GlobalStyleProps = {
  theme?: 'light' | 'dark';
};

const GlobalStyle = ({ theme = 'light' }: GlobalStyleProps) => (
  <Global styles={theme === 'light' ? lightTheme : darkTheme} />
);

export default GlobalStyle;
