import { create } from '@storybook/theming/create';

export const light = create({
  base: 'light',

  brandTitle: 'ttons',
  brandUrl: 'https://cserdean.com',
  brandImage: 'https://cserdean.com/static/ttons-logo.png',
});

export const dark = create({
  base: 'dark',

  brandTitle: 'ttons',
  brandUrl: 'https://cserdean.com',
  brandImage: 'https://cserdean.com/static/ttons-logo-dark.png',
});
