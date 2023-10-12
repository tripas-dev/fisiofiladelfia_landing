/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';


const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Visão',
    title: 'Visão',
    text:
      ' Ser um centro de referência e escolha preferida em fisioterapia para 10 mil pessoas, sendo reconhecida pela qualidade, personalização e confiança em Vizela, até 2028.'
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Missão',
    title: 'Missão',
    text:
      'Prestar os melhores serviços na área da saúde, nomeadamente de fisioterapia para transformar a vida dos nossos clientes, explorar em conjunto o seu potencial e promover as melhores experiencias de vida.'
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Valores',
    title: 'Valores',
    text:
      ' Lealdade Confiança Colaboração Honestidade Compromisso Paixão.'
  } 
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="sobre">
      <Container sx={styles.Container}>
        <SectionHeader
          slogan="Quem nós somos"
          title="Quem nós somos"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  Container:{
    p: '150px',
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    ml: '200px',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
