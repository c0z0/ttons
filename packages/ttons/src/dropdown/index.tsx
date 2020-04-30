import React, { PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';

const DropdownRoot = styled.div<{ inverse?: boolean; open?: boolean }>`
  position: relative;
  display: inline-block;

  &::before {
    display: ${p => (p.open ? 'block' : 'none')};
    position: absolute;
    content: '';
    z-index: 2;

    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%) rotate(45deg);

    height: 0.5rem;
    width: 0.5rem;

    background: var(
      ${p => (p.inverse ? '--ttons-foreground' : '--ttons-background')}
    );

    border: var(${p => (p.inverse ? 'none' : '--ttons-border')});
    border-bottom: none;
    border-right: none;
  }
`;

type DropdownBodyProps = {
  open?: boolean;
  inverse?: boolean;
  right?: boolean;
};

const DropdownBody = styled.div<DropdownBodyProps>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: 1;
  display: ${p => (p.open ? 'block' : 'none')};

  background: var(
    ${p => (p.inverse ? '--ttons-foreground' : '--ttons-background')}
  );
  & > div[role='button'] {
    color: var(
      ${p => (p.inverse ? '--ttons-background' : '--ttons-foreground')}
    );

    &:hover {
      background: var(
        ${p => (p.inverse ? '--ttons-gray-bg-inverse' : '--ttons-gray-bg')}
      );
    }
  }

  border: var(${p => (p.inverse ? 'none' : '--ttons-border')});
  border-radius: var(--ttons-border-radius);
  min-width: 12rem;
  padding: 0.5rem 0;

  ${p =>
    p.right &&
    `
    left: unset; 
    right: 0;
  `}
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

DropdownItem.defaultProps = {
  role: 'button',
};

export const DropdownDivider = styled.div`
  height: 1px;
  background: var(--ttons-border-color);
`;

export interface DropdownProps {
  trigger: React.ReactNode;
  inverse?: boolean;
  right?: boolean;
}

export const Dropdown = ({
  trigger,
  inverse = false,
  right = false,
  children,
}: PropsWithChildren<DropdownProps>) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <DropdownRoot inverse={inverse} open={open}>
        <div onClick={() => setOpen(!open)}>{trigger}</div>
        <DropdownBody inverse={inverse} right={right} open={open}>
          {children}
        </DropdownBody>
      </DropdownRoot>
    </div>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
