import React, { useState } from 'react';

export const testFunction = () => console.log('test!!');

export const Component = () => {
  const [a, b] = useState(0);

  return <h1 onClick={() => b(a + 1)}>hei; miau {a}</h1>;
};
