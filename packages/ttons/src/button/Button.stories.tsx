import * as React from 'react';

import { Menu as MenuIcon } from '@cserdean/icons';
import Container from '../container';
import Button, { ButtonGroup } from './index';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Used to trigger an operation.',
  },
};

export const Primary = () => (
  <Container alignItems="flex-start">
    <Button>Action</Button>
    <Button disabled>Action</Button>
    <Button small>Action</Button>
  </Container>
);

export const Default = () => <Button>Action</Button>;

export const Small = () => <Button small>Action</Button>;

export const Secondary = () => <Button secondary>Action</Button>;
export const SecondarySmall = () => (
  <Button secondary small>
    Action
  </Button>
);

export const Disabled = () => <Button disabled>Action</Button>;
export const DisabledSmall = () => (
  <Button disabled small>
    Action
  </Button>
);

export const Loading = () => <Button loading>Action</Button>;
export const LoadingSmall = () => (
  <Button loading small>
    Action
  </Button>
);

export const Accented = () => <Button accented>Action</Button>;
export const AccentedSmall = () => (
  <Button accented small>
    Action
  </Button>
);

export const Error = () => <Button error>Action</Button>;
export const ErrorSmall = () => (
  <Button error small>
    Action
  </Button>
);

export const CustomColor = () => (
  <Button color="var(--ttons-violet)">Action</Button>
);
export const CustomColorSmall = () => (
  <Button color="var(--ttons-violet)" small>
    Action
  </Button>
);

export const Icon = () => (
  <Button icon>
    <MenuIcon />
  </Button>
);

export const Group = () => (
  <>
    <Container>
      <ButtonGroup>
        <Button>Action 1</Button>
        <Button accented>Action 2</Button>
        <Button error>Action 3</Button>
      </ButtonGroup>
      <ButtonGroup flex>
        <Button>Action 1</Button>
        <Button accented>Action 2</Button>
        <Button error>Action 3</Button>
      </ButtonGroup>
    </Container>
  </>
);
