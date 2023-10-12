import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import Termos from 'sections/termos';


export default function TermsPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
        <Termos />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
