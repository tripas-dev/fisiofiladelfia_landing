/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import data from './footer.data';
import { Link } from 'components/link';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
        <Grid sx={styles.widgets}>
            <nav>
              {data.information.map(({ label, title } ) => (
                <Text sx={styles.footer.link}>
                  {label}
                  <Text sx={styles.footer.title}>
                  {title}
                  </Text>
                </Text>
              ))}
            </nav>
            <nav>
              {data.time.map(({ label, title } ) => (
                <Text sx={styles.footer.link}>
                  {label}
                  <Text sx={styles.footer.title}>
                  {title}
                  </Text>
                </Text>
              ))}
            </nav>
            <nav>
              {data.contact.map(({ label, title } ) => (
                <Text sx={styles.footer.link}>
                  {label}
                  <Text sx={styles.footer.title}>
                  {title}
                  </Text>
                </Text>
              ))}
            </nav>
            <nav>
              {data.social.map(({ label, title } ) => (
                <Text sx={styles.footer.link}>
                  {label}
                  <Text sx={styles.footer.title}>
                  {title}
                  </Text>
                </Text>
              ))}
            </nav>
        </Grid>
          <Text sx={styles.footer.copyright}>
            <hr/>
            Copyright by {new Date().getFullYear()} Fisiofiladelfia
          </Text>
    </footer>
  );
}

const styles = {
  footer: {
    title: {
      fontSize: '25px',
      fontWeight: 'bold',
        '&:first-child': {
          
      }
    },
    link: {
      fontSize: ['19px'],
      color: 'black',
      fontWeight: '500',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
    },
    copyright: {
      pt: '30px',
      fontSize: [1, '20px'],
      textAlign: 'center',
      width: '100%',
    },
  },
  widgets: {
    pt: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mx: '200px',
    my: '125px',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
  },
};
