import React from 'react';

import Container, { ContentContainer } from './index';
import Text from '../text';
import { Main as TextExample } from '../text/Text.stories';

export default {
  title: 'Container',
  component: Container,
  parameters: {
    componentSubtitle: 'Grid system used to create complex layouts.',
  },
};

export const Primary = () => (
  <Container row>
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Cont 1</Text>
    </Container>
    <Container noPadding>
      <Container style={{ background: 'var(--ttons-purple)' }}>
        <Text style={{ color: 'white' }}>Cont 2</Text>
      </Container>
      <Container style={{ background: 'var(--ttons-magenta)' }}>
        <Text style={{ color: 'white' }}>Cont 3</Text>
      </Container>
    </Container>
  </Container>
);

export const Rows = () => (
  <Container>
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Cont 1</Text>
    </Container>
    <Container style={{ background: 'var(--ttons-purple)' }}>
      <Text style={{ color: 'white' }}>Cont 2</Text>
    </Container>
  </Container>
);

export const Columns = () => (
  <Container row>
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Cont 1</Text>
    </Container>
    <Container style={{ background: 'var(--ttons-purple)' }}>
      <Text style={{ color: 'white' }}>Cont 2</Text>
    </Container>
  </Container>
);

export const Mixed = () => (
  <Container row>
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Cont 1</Text>
    </Container>
    <Container noPadding>
      <Container style={{ background: 'var(--ttons-purple)' }}>
        <Text style={{ color: 'white' }}>Cont 2</Text>
      </Container>
      <Container style={{ background: 'var(--ttons-magenta)' }}>
        <Text style={{ color: 'white' }}>Cont 3</Text>
      </Container>
    </Container>
  </Container>
);

export const Gaps = () => (
  <Container row>
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Cont 1</Text>
    </Container>
    <Container noPadding gapRatio={3}>
      <Container style={{ background: 'var(--ttons-purple)' }}>
        <Text style={{ color: 'white' }}>Cont 2</Text>
      </Container>
      <Container style={{ background: 'var(--ttons-magenta)' }}>
        <Text style={{ color: 'white' }}>Cont 3</Text>
      </Container>
    </Container>
  </Container>
);

export const Flexboxes = () => (
  <Container row>
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Flex 1</Text>
    </Container>
    <Container style={{ background: 'var(--ttons-accent)' }} flex={2}>
      <Text style={{ color: 'white' }}>Flex 2</Text>
    </Container>
    <Container style={{ background: 'var(--ttons-accent)' }} flex={0.5}>
      <Text style={{ color: 'white' }}>Flex 0.5</Text>
    </Container>
  </Container>
);

export const Responsive = () => (
  <Container row directionMobile="column">
    <Container style={{ background: 'var(--ttons-accent)' }}>
      <Text style={{ color: 'white' }}>Cont 1</Text>
    </Container>
    <Container style={{ background: 'var(--ttons-purple)' }}>
      <Text style={{ color: 'white' }}>Cont 2</Text>
    </Container>
  </Container>
);

export const Content = () => (
  <ContentContainer>
    <TextExample />
  </ContentContainer>
);

export const ContentNoMarginTop = () => (
  <ContentContainer marginTop={false}>
    <TextExample />
  </ContentContainer>
);
