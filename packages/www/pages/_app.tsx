import React from 'react';
import { CacheProvider } from '@emotion/core';

import { cache } from 'emotion';

import { GlobalStyle } from '@cserdean/ttons';

export default function App({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyle theme="light" />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
