import React from 'react';

import { GlobalStyle } from '@cserdean/ttons';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle theme="light" />
      <Component {...pageProps} />
    </>
  );
}
