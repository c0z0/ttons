import React from 'react';

import {
  Button,
  ContentContainer,
  Text,
  Container,
  CodeBlock,
} from '@cserdean/ttons';

export default () => (
  <ContentContainer style={{ marginBottom: '4rem' }}>
    <Container direction="row" directionMobile="column-reverse">
      <Container>
        <Text h1 style={{ marginBottom: 0 }}>
          Efortless style
        </Text>
        <Text p>Lightweight component framework for React</Text>
      </Container>
      <Container>
        <img
          src="https://cserdean.com/static/ttons-logo.png"
          style={{ width: '100%' }}
        />
      </Container>
    </Container>
    <Container>
      <Container>
        <Text h3>Getting started:</Text>
        <CodeBlock>{`$ yarn install @cserdean/ttons`}</CodeBlock>
        <Text>Then in your React app:</Text>
        <CodeBlock>{`import React from 'react'\nimport { Button, GlobalStyle } from '@cserdean/ttons\n\nexport default function Component() {\n  return (\n    </>\n      <Globalstyle /> {/* Place once anywhere in the app */}\n      <Button>Press me!</Button>\n    </>\n  )\n}`}</CodeBlock>
      </Container>
      <Container>
        <Text>Result: </Text>
        <Container
          alignItems="flex-start"
          style={{
            border: 'var(--ttons-border)',
            borderRadius: 'var(--ttons-border-radius)',
          }}
        >
          <Button>Press me!</Button>
        </Container>
      </Container>
      <Container>
        <Text>
          And tadaaaaa!! 🎉 You have access to all the components and{' '}
          <b>server side rendering works out of the box.</b>
        </Text>
      </Container>
    </Container>
  </ContentContainer>
);
