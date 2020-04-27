import React from 'react';

import { DefaultButton, DisabledButton, SecondaryButton } from './index';

export default {
  title: 'Button',
};

export const Primary = () => <DefaultButton>Action</DefaultButton>;

export const Default = () => <DefaultButton>Action</DefaultButton>;

export const Small = () => <DefaultButton small>Action</DefaultButton>;

export const Secondary = () => <SecondaryButton>Action</SecondaryButton>;
export const SecondarySmall = () => (
  <SecondaryButton small>Action</SecondaryButton>
);

export const Disabled = () => <DisabledButton>Action</DisabledButton>;
export const DisabledSmall = () => (
  <DisabledButton small>Action</DisabledButton>
);
