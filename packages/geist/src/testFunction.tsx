import React, { useState } from 'react';

export const testFunction = () => console.log('test!!');

interface ComponentProps {
  name: string;
}

export const Component = ({ name }: ComponentProps) => {
  const [a, b] = useState(0);

  return (
    <h1 onClick={() => b(a + 1)}>
      hei {name}; miau {a}
    </h1>
  );
};
