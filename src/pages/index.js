import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Inicio from '../sections/inicio';
import Sobre from '../sections/sobre';
import Servico from '../sections/servico';
import Contacto from '../sections/contacto';
import Testimonial from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 005" />
          <Inicio />
          <Sobre />
          <Servico />
          <Contacto />
          <Testimonial />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
