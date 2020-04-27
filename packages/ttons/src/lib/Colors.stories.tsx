import React from 'react';
import styled from '@emotion/styled';

type ColorContainerProps = {
  inverted?: boolean;
  color: string;
};

const ColorContainer = styled.div<ColorContainerProps>`
  padding: 2rem;
  background: var(${p => p.color});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: var(
    ${p => (p.inverted ? '--ttons-background' : '--ttons-foreground')}
  );
`;

type ColorProps = {
  color: string;
  inverted?: boolean;
};

const ColorGroup = styled.div`
  margin: 2rem 0;
  border-radius: var(--ttons-border-radius);
  overflow: hidden;
  border: var(--ttons-border);
`;

const ColorTitle = styled.h3`
  color: inherit;
  font-size: 1.25rem;
  font-weight: 700;
`;

const ColorCode = styled.p`
  color: inherit;
  font-family: var(--ttons-font-mono);
`;

const Color = ({ color, inverted = false }: ColorProps) => (
  <ColorContainer color={`--ttons-${color}`} inverted={inverted}>
    <ColorTitle>
      {(color.charAt(0).toUpperCase() + color.slice(1)).replace('-', ' ')}
    </ColorTitle>
    <ColorCode>{`var(--ttons-${color})`}</ColorCode>
  </ColorContainer>
);

const ColorsWrapper = styled.div`
  padding: 2rem;
`;

export default {
  title: 'Colors',
};

export const Colors = () => (
  <ColorsWrapper>
    <ColorTitle>Basic</ColorTitle>
    <ColorGroup>
      <Color color="background" />
      <Color color="foreground" inverted />
      <Color color="accent" inverted />
    </ColorGroup>
    <ColorTitle>Error</ColorTitle>
    <ColorGroup>
      <Color color="error-light" inverted />
      <Color color="error" inverted />
      <Color color="error-dark" inverted />
    </ColorGroup>
    <ColorTitle>Success</ColorTitle>
    <ColorGroup>
      <Color color="success-light" inverted />
      <Color color="success" inverted />
      <Color color="success-dark" inverted />
    </ColorGroup>
  </ColorsWrapper>
);
