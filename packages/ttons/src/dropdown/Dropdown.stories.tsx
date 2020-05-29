import React from 'react';

import {
  Menu as MenuIcon,
  Gitlab as GitlabIcon,
  Slack as SlackIcon,
} from '@cserdean/icons';
import Button from '../button';
import Dropdown from './index';
import Container from '../container';

export default {
  title: 'Dropdown',
  parameters: {
    componentSubtitle: 'Hide actions',
  },
  component: Dropdown,
};

export const Primary = () => (
  <Container>
    <Dropdown
      trigger={(
        <Button icon>
          <MenuIcon />
        </Button>
      )}
    >
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </Dropdown>
  </Container>
);

export const Right = () => (
  <Container alignItems="flex-end">
    <Dropdown
      right
      trigger={(
        <Button icon>
          <MenuIcon />
        </Button>
      )}
    >
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </Dropdown>
  </Container>
);

export const Inverse = () => (
  <Container>
    <Dropdown
      inverse
      trigger={(
        <Button icon>
          <MenuIcon />
        </Button>
      )}
    >
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </Dropdown>
  </Container>
);

export const Divider = () => (
  <Container>
    <Dropdown trigger={<Button>Menu</Button>}>
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <GitlabIcon style={{ marginRight: '.5rem' }} />
        Item 4
      </Dropdown.Item>
      <Dropdown.Item>
        <SlackIcon style={{ marginRight: '.5rem' }} />
        Item 5
      </Dropdown.Item>
    </Dropdown>
  </Container>
);
