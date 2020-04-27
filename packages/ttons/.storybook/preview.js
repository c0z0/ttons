import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { addDecorator, addParameters } from '@storybook/react';

import GlobalStyle from '../src/lib/GlobalStyle';
import { dark, light } from './theme';

addParameters({
  darkMode: {
    dark,
    light,
    current: 'light',
  },
});

function ThemeWrapper(props) {
  return (
    <>
      <GlobalStyle theme={useDarkMode() ? 'dark' : 'light'} />
      {props.children}
    </>
  );
}

addDecorator(renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>);
