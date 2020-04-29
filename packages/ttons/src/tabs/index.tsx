import React from 'react';
import styled from '@emotion/styled';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
}

export const Tabs = ({ selected, tabs, onSelect, disabled }: TabsProps) => (
  <TabsContainer>
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
