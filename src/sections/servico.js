/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/key-feature/performance.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fisioterapia',
    title: 'Fisioterapias',
    text:
      'fisioterapia é um serviço de saúde focado em reabilitação e melhoria da função física. Oferecemos avaliação, terapia manual, exercícios terapêuticos e tratamento de lesões, tudo para promover a recuperação e bem-estar dos pacientes.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fisiatria',
    title: 'Fisiatria',
    text:
      'A Fisiatria é uma especialidade médica que se concentra na reabilitação física e no manejo da dor, utilizando terapias não cirúrgicas para melhorar a qualidade de vida dos pacientes.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Medicina geral',
    title: 'Medicina geral',
    text:
      'A Medicina Geral é uma especialidade médica que se concentra no cuidado abrangente e preventivo de pacientes de todas as idades, tratando uma ampla gama de condições médicas comuns e coordenando cuidados especializados quando necessário.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Análises clínicas',
    title: 'Análises clínicas',
    text:
      'Análises clínicas são testes laboratoriais realizados em amostras de sangue, urina ou outros fluidos corporais para avaliar a saúde do paciente, diagnosticar doenças, monitorar tratamentos e fornecer informações valiosas para o diagnóstico médico.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Psicologia clínica',
    title: 'Psicologia clínica',
    text:
      'A Psicologia Clínica é uma área da psicologia que se dedica ao diagnóstico, tratamento e apoio emocional de indivíduos que enfrentam desafios de saúde mental, distúrbios emocionais e problemas psicológicos. Os psicólogos clínicos usam terapias e abordagens psicológicas para ajudar os pacientes a melhorar sua saúde mental e bem-estar emocional.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Nutrição',
    title: 'Nutrição',
    text:
      'A Nutrição é uma área da saúde que se concentra na alimentação e no impacto dos nutrientes no corpo humano. Os profissionais de nutrição ajudam os indivíduos a desenvolver dietas equilibradas para promover a saúde, prevenir doenças e tratar condições médicas por meio de orientações alimentares personalizadas.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Podologia',
    title: 'Podologia',
    text:
      'A Podologia é uma área da saúde especializada no diagnóstico e tratamento de problemas relacionados aos pés e tornozelos. Os podologistas lidam com questões como calos, unhas encravadas, deformidades, lesões e doenças da pele dos pés. Seu objetivo é melhorar a saúde e o conforto dos pés, promovendo a mobilidade e o bem-estar geral do paciente.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Terapia ocupacional',
    title: 'Terapia ocupacional',
    text:
      'A Terapia Ocupacional é uma disciplina de saúde que se concentra em ajudar pessoas com dificuldades físicas, emocionais ou cognitivas a recuperar ou desenvolver habilidades necessárias para realizar atividades diárias significativas, como autocuidado, trabalho e lazer. Os terapeutas ocupacionais adaptam ambientes e fornecem estratégias para melhorar a independência e a qualidade de vida dos pacientes.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Testes auditivos',
    title: 'Testes auditivos',
    text:
      'Testes auditivos são procedimentos realizados para avaliar a capacidade auditiva de um indivíduo. Esses testes incluem audiometria, onde são usados fones de ouvido para medir a audição em diferentes frequências, e outros métodos para diagnosticar perda auditiva, identificar causas e determinar o tratamento adequado, como aparelhos auditivos ou intervenções médicas.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Treino personalizado',
    title: 'Treino personalizado',
    text:
      'O treino personalizado é um programa de exercícios físicos desenvolvido especificamente para atender às necessidades individuais de um cliente. Isso envolve avaliação física, metas personalizadas e um plano de exercícios adaptado ao nível de condicionamento físico, objetivos e limitações do indivíduo. O objetivo é otimizar os resultados e garantir um treinamento seguro e eficaz.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Treino de recuperação',
    title: 'Treino de recuperação',
    text:
      'O treino de recuperação é um conjunto de técnicas e atividades específicas projetadas para ajudar o corpo a se recuperar após exercícios intensos ou lesões. Isso pode incluir exercícios de baixa intensidade, alongamentos, massagem, hidroterapia, e outras abordagens para reduzir a fadiga muscular, aliviar a dor e promover a reparação dos tecidos. O objetivo é acelerar a recuperação e minimizar o risco de lesões.'
  },
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Treino de recuperação',
    title: 'Treino de recuperação',
    text:
      'Osteopatia é uma abordagem terapêutica que se concentra na avaliação e no tratamento das disfunções do sistema musculoesquelético e suas influências no corpo como um todo. Os osteopatas utilizam técnicas manuais, como manipulação e mobilização, para melhorar a mobilidade, aliviar a dor e promover a saúde geral do paciente. Além disso, eles consideram a interconexão entre a estrutura e a função do corpo na abordagem de tratamento.'
  },
 
];

export default function servico() {
  return (
    <section sx={{ variant: 'section.servico' }} id='servico'>
        <SectionHeader
          slogan="Recursos de qualidade"
          title="Serviços"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
    </section>
  );
}

const styles = {
  grid: {
    width: ['85%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '50px 0px',
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
