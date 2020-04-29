import React from 'react';

import Container from '../container';
import Badge from './index';

export default {
  title: 'Badge',
  parameters: {
    componentSubtitle: 'Display an indicator that requires attention.',
  },
};

export const Primary = () => (
  <Container alignItems="flex-start">
    <Badge>1</Badge>
    <Badge>20</Badge>
    <Badge>500</Badge>
    <Badge>new</Badge>
  </Container>
);

export const Colored = () => (
  <Container alignItems="flex-start">
    <Badge color="var(--ttons-accent)">1</Badge>
    <Badge color="var(--ttons-error)">15</Badge>
    <Badge color="var(--ttons-violet)">150</Badge>
  </Container>
);
