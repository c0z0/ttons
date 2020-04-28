import React from 'react';

import Text, { InlineCode, CodeBlock } from './index';
import { ContentContainer } from '../container';

export default {
  title: 'Text',
  description: 'Display text using well-defined typographic styles.',
  component: Text,
  parameters: {
    componentSubtitle: 'Display text using well-defined typographic styles.',
  },
  decorators: [
    (render: any) => (
      <ContentContainer marginTop={false}>{render()}</ContentContainer>
    ),
  ],
};

export const Main = () => (
  <>
    <Text h1>Mercenary War</Text>
    <Text>
      <b>The war began in 241 BC</b> as a dispute over the payment of wages owed
      to 20,000 foreign soldiers who had fought for Carthage on{' '}
      <a href="https://en.wikipedia.org/wiki/Sicily">Sicily</a> during the First
      Punic War. When a compromise seemed to have been reached the army erupted
      into full-scale mutiny under the leadership of Spendius and Matho. 70,000
      Africans from Carthage's oppressed dependant territories flocked to join
      them, bringing supplies and finance.
    </Text>
    <Text small>Text from wikipedia</Text>
  </>
);

export const Headings = () => (
  <>
    <Text h1>The quick brown fox jumps over the lazy dog.</Text>
    <Text h2>The quick brown fox jumps over the lazy dog.</Text>
    <Text h3>The quick brown fox jumps over the lazy dog.</Text>
  </>
);

export const HeadingsWithCustomSemantics = () => (
  <>
    <Text h1 as="p">
      {'<p> semantically, <h1> visually.'}
    </Text>
    <Text h2 as="span">
      {'<span> semantically, <h2> visually.'}
    </Text>
  </>
);

export const Paragraph = () => (
  <>
    <Text p>
      {/** The `p` is optional as text defaults to p */}
      The war began in 241 BC as a dispute over the payment of wages owed to
      20,000 foreign soldiers who had fought for Carthage on Sicily during the
      First Punic War. When a compromise seemed to have been reached the army
      erupted into full-scale mutiny under the leadership of Spendius and Matho.
      70,000 Africans from Carthage's oppressed dependant territories flocked to
      join them, bringing supplies and finance.
    </Text>
    <Text small>
      The war began in 241 BC as a dispute over the payment of wages owed to
      20,000 foreign soldiers who had fought for Carthage on Sicily during the
      First Punic War. When a compromise seemed to have been reached the army
      erupted into full-scale mutiny under the leadership of Spendius and Matho.
      70,000 Africans from Carthage's oppressed dependant territories flocked to
      join them, bringing supplies and finance.
    </Text>
    <Text bold>The war began in 241 BC as a dispute over the payment.</Text>
    <Text>
      <b>The war began in 241 BC</b> as a dispute over the payment of wages owed
      to 20,000 foreign soldiers who had fought for Carthage on Sicily during
      the First Punic War. When a compromise seemed to have been reached the
      army erupted into full-scale mutiny under the leadership of Spendius and
      Matho. <small>70,000 Africans from Carthage's</small> oppressed dependant
      territories flocked to join them, bringing supplies and finance.
    </Text>
  </>
);

export const Code = () => (
  <>
    <Text>
      Run <InlineCode>$ yarn install</InlineCode> to get started.
    </Text>
    <CodeBlock>{'yarn add @cserdean/ttons\nyarn dev'}</CodeBlock>
  </>
);
