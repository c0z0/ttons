import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { phoneOnly } from '../lib/breakPoints';

type StyledContainerProps = {
  direction?: string;
  justifyContent?: string;
  flex?: number;
  gapRatio?: number;
  paddingRatio?: number;
  alignItems?: string;
  directionMobile?: string;
};

const getMarginDirection = (direction: string, gap: string) => {
  if (direction === 'column') return `${gap} 0 0 0`;
  if (direction === 'column-reverse') return `0 0 ${gap} 0`;
  if (direction === 'row') return `0 0 0 ${gap}`;
  return `0 ${gap} 0 0`;
};

const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${p => p.direction};
  flex: ${p => p.flex};
  padding: calc(var(--ttons-half-gap) * ${p => p.paddingRatio});
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};

  & > :not(:first-child) {
    margin: ${p =>
      getMarginDirection(
        p.direction || '',
        `calc(var(--ttons-gap) * ${p.gapRatio})`
      )};
  }

  ${phoneOnly} {
    flex-direction: ${p => p.directionMobile};

    & > :not(:first-child) {
      margin: ${p =>
        getMarginDirection(
          p.directionMobile || '',
          `calc(var(--ttons-gap) * ${p.gapRatio})`
        )};
    }
  }
`;

StyledContainer.defaultProps = {
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  gapRatio: 1,
  paddingRatio: 1,
};

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  row?: boolean;
  flex?: number;
  paddingRatio?: number;
  noPadding?: boolean;
  noGap?: boolean;
  gapRatio?: number;
  justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'unset';
  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'unset';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  directionMobile?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | null;
}

export const Container = ({
  row,
  direction,
  paddingRatio,
  noPadding,
  noGap,
  gapRatio,
  directionMobile,
  ...passedProps
}: PropsWithChildren<ContainerProps>) => {
  const finalDirection = row ? 'row' : direction;
  return (
    <StyledContainer
      direction={finalDirection}
      gapRatio={noGap ? 0 : gapRatio}
      paddingRatio={noPadding ? 0 : paddingRatio}
      directionMobile={directionMobile || finalDirection}
      {...passedProps}
    />
  );
};

Container.defaultProps = {
  row: false,
  gapRatio: 1,
  paddingRatio: 1,
  noGap: false,
  noPadding: false,
  justifyContent: 'unset',
  alignItems: 'unset',
  direction: 'column',
  directionMobile: null,
};

export default Container;

type ContentContainerProps = {
  marginTop?: boolean;
};
export const ContentContainer = styled.div<ContentContainerProps>`
  max-width: 900px;
  margin: ${p => (p.marginTop ? '80px' : '0')} auto 0 auto;

  ${phoneOnly} {
    margin: ${p => (p.marginTop ? '40px' : '0')} auto 0 auto;
    padding: 0 20px;
  }
`;

ContentContainer.defaultProps = {
  marginTop: true,
};
