import React from 'react';

import Input from './index';
import Container from '../container';
import MailIcon from '../icons/Mail';

export default {
  title: 'Input',
  component: Input,
  parameters: {
    componentSubtitle: 'Retrieve text input from a user.',
  },
};

export const Primary = () => (
  <Container alignItems="flex-start">
    <Input placeholder="Placeholder" />
    <Input placeholder="Placeholder" />
  </Container>
);

export const Default = () => (
  <Container>
    <Input placeholder="Placeholder" />
  </Container>
);

export const Disabled = () => (
  <Container>
    <Input placeholder="Placeholder" disabled />
  </Container>
);

export const Error = () => (
  <Container>
    <Input placeholder="Placeholder" error />
  </Container>
);

export const WithIcon = () => (
  <Container alignItems="flex-start">
    <Input placeholder="cosmin@cserdean.com" icon={<MailIcon />} />
    <Input placeholder="cosmin@cserdean.com" iconRight={<MailIcon />} />
  </Container>
);

export const Label = () => (
  <Container>
    <Input.Label style={{ marginBottom: '.5rem' }}>Full name</Input.Label>
    <Input placeholder="John Doe" />
  </Container>
);

export const InlineLabel = () => (
  <Container alignItems="flex-start">
    <Input placeholder="Placeholder" label="cserdean.com/" />
    <Input
      placeholder="Placeholder"
      label="@cserdean.com"
      labelPosition="right"
    />
  </Container>
);
