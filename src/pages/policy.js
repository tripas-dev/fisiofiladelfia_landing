import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import Politica from 'sections/politica';


export default function PolicyPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
        <Politica />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
