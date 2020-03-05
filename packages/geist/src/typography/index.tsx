import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
  color: red;
`;

interface TestProps {
  name: string;
}

export const Test = ({ name }: TestProps) => <H1>Hello {name}!</H1>;
