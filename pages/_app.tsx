import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material';
import styled, { ThemeProvider } from 'styled-components';

import { muiTheme } from '../theme/muiTheme';
import { theme } from '../theme';
import { wrapper } from '../redux/store';
import Navigation from '../components/navigation';
import Row from '../components/row';
import Column from '../components/column';

import '../styles/globals.css';

const Layout = styled(Row)`
  background-color: ${({ theme }) => theme.colors.washMe};
  height: 100vh;
  width: 100vw;
`;

export const Header = styled(Row)`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(31, 41, 55, 0.06);
  height: 46px;
  width: 100%;
  z-index: 1500;
`;

export const Content = styled(Column)`
  width: 100%;
`;

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <main id="app">
      <Head>
        <title>Kubefirst Console</title>
        <link rel="shortcut icon" href="/static/ray.svg" />
      </Head>
      <Provider store={store}>
        <ThemeProviderMUI theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Navigation />
              <Content>
                <Header />
                <Component {...props.pageProps} />
              </Content>
            </Layout>
          </ThemeProvider>
        </ThemeProviderMUI>
      </Provider>
    </main>
  );
}
