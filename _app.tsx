import { useEffect } from 'react';
import { AppProps } from 'next/app';
import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.scss';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = 'fr'; // Default language
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
