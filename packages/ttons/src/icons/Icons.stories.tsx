import React from 'react';

import * as Icons from './index';

export default {
  title: 'Icons',
  parameters: {
    componentSubtitle: 'Feather icons.',
  },
};

export const Primary = () => (
  <div
    style={{
      flexWrap: 'wrap',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    {Object.values(Icons).map((I, idx) => (
      <div title={Object.keys(Icons)[idx]}>
        <I style={{ margin: '.5rem', fontSize: '3rem' }} />
      </div>
    ))}
  </div>
);
