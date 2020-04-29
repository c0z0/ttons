import React, { useState } from 'react';

import Container from '../container';
import Tabs from './index';
import { Github } from '@cserdean/icons';
import Badge from '../badge';

export default {
  title: 'Tabs',
  parameters: {
    componentSubtitle: 'Display tab content.',
  },
};

export const Primary = () => {
  const [value, setValue] = useState('tab1');

  return (
    <Container>
      <Tabs
        tabs={[
          { content: 'Tab 1', value: 'tab1' },
          {
            content: 'Tab 2',
            value: 'tab2',
          },
          {
            content: 'Tab 3',
            value: 'tab3',
          },
        ]}
        selected={value}
        onSelect={setValue}
      />
    </Container>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState('tab1');

  return (
    <Container>
      <Tabs
        disabled
        tabs={[
          { content: 'Tab 1', value: 'tab1' },
          {
            content: 'Tab 2',
            value: 'tab2',
          },
          {
            content: 'Tab 3',
            value: 'tab3',
          },
        ]}
        selected={value}
        onSelect={setValue}
      />
    </Container>
  );
};

export const WithIcon = () => {
  const [value, setValue] = useState('tab1');

  return (
    <Container>
      <Tabs
        tabs={[
          {
            content: (
              <>
                Tab 1<Badge style={{ marginLeft: '.5rem' }}>2</Badge>
              </>
            ),
            value: 'tab1',
          },
          {
            content: (
              <>
                <Badge
                  style={{ marginRight: '.5rem' }}
                  color="var(--ttons-accent)"
                >
                  2
                </Badge>
                Tab 2
              </>
            ),
            value: 'tab2',
          },
          {
            content: (
              <>
                <Github style={{ marginRight: '.5rem' }} />
                Tab 2
              </>
            ),
            value: 'tab3',
          },
        ]}
        selected={value}
        onSelect={setValue}
      />
    </Container>
  );
};
