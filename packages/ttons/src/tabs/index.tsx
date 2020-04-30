import React from 'react';
import styled from '@emotion/styled';

const TabsContainer = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${p => (p.right ? 'flex-end' : 'flex-start')};
  border-bottom: var(--ttons-border);
`;

const TabItem = styled.div<{ active?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
  padding: 0.5rem 0;
  margin-right: 2rem;
  margin-bottom: -2px;
  transition: all var(--ttons-transition);

  color: ${p => `var(--ttons-${p.active ? 'foreground' : 'gray-fg'})`};

  border-bottom: 3px solid
    ${p => (p.active ? 'var(--ttons-foreground)' : 'transparent')};
`;

interface TabsProps {
  selected: string;
  tabs: {
    content: React.ReactNode;
    value: string;
  }[];
  onSelect?: (value: string) => void;
  disabled?: boolean;
  right?: boolean;
}

export const Tabs = ({
  right,
  selected,
  tabs,
  onSelect,
  disabled,
}: TabsProps) => (
  <TabsContainer right={right}>
    {tabs.map(({ content, value }) => (
      <TabItem
        active={value === selected}
        key={value}
        role="button"
        onClick={!disabled && onSelect ? () => onSelect(value) : undefined}
        disabled={disabled}
      >
        {content}
      </TabItem>
    ))}
  </TabsContainer>
);

export default Tabs;
