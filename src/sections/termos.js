/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import data from './terms.data';

export default function Termos() {
    return (
        <section sx={styles.page}>
            <Container sx={styles.page.container}>
                {data.container.map(({ title }) => (
                    <Box sx={styles.page.box}>
                        <Heading sx={styles.page.title}>
                            {title}
                        </Heading>
                    </Box>
                ))}
                {data.content.map(({ subtitle, paragraph }) => (
                    <Box>
                        <Text sx={styles.page.subtitle}>
                            {subtitle}
                            <Text sx={styles.page.paragraph}>
                            {paragraph}
                            </Text>
                        </Text>
                    </Box>
                ))}
            </Container>
        </section>
    );
}

const styles = {
    page: {
        container: {
            pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
            pb: [2, null, 0, null, 2, 0, null, 5],
            position: 'absolut',
        },
        title: {
            fontSize: '40px',
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize: '25px',
            color: 'black',
            fontWeight: '500',
            transition: 'all 0.35s',
            textAlign: 'justify',
        },
        paragraph: {
            fontSize: '20px',
            color: 'black',
            fontWeight: '100',
            textAlign: 'justify',
        }
    }
}