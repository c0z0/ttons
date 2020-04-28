import React from 'react';

import * as Icons from '@cserdean/icons';

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
      <div title={Object.keys(Icons)[idx]} key={Object.keys(Icons)[idx]}>
        <I style={{ margin: '1rem', fontSize: '5rem' }} />
      </div>
    ))}
  </div>
);
